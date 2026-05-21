/**
 * Framer Runtime Shim for Next.js
 * Provides all utilities required by Framer-exported components outside the Framer canvas.
 */
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from "react";
import {
  forwardRef,
  useState,
  useEffect,
  useContext,
  createContext,
  useRef,
  useMemo,
  useCallback,
  Suspense,
} from "react";
import { motion as _rawMotion, LayoutGroup, MotionConfigContext, useMotionValue, animate, useInView } from "framer-motion";

// ─── Re-exports from framer-motion ───────────────────────────────────────────
export { LayoutGroup, MotionConfigContext, useMotionValue, animate, useInView };

// ─── Filtered motion proxy ────────────────────────────────────────────────────
// framer-motion v12 no longer filters Framer-internal props from DOM elements.
// This proxy wraps every HTML/SVG element factory (motion.div, motion.span, …)
// to strip props before they reach the real DOM node.
const _MOTION_STRIP = new Set([
  "layoutDependency", "transformTemplate", "rendersWithMotion",
  "isAuthoredByUser", "isModuleExternal", "withExternalLayout",
  "framerSupportedLayoutWidth", "framerSupportedLayoutHeight",
  "animated", "Component", "__perspectiveFX", "__smartComponentFX", "__targetOpacity",
]);
// Framer hash IDs: single uppercase letter + 7-10 alphanumeric chars, e.g. "BfXM9gljk"
const _FRAMER_HASH_RE = /^[A-Z][A-Za-z0-9]{7,10}$/;

function _wrapMotionComponent(RawComponent, tag) {
  const Filtered = forwardRef((props, ref) => {
    const out = {};
    for (const [k, v] of Object.entries(props)) {
      if (_MOTION_STRIP.has(k)) continue;
      if (k.startsWith("__framer__")) continue;
      if (_FRAMER_HASH_RE.test(k)) continue;
      out[k] = v;
    }
    return _jsx(RawComponent, { ...out, ref });
  });
  Filtered.displayName = `motion.${tag}`;
  return Filtered;
}

const _motionCache = new Map();
export const motion = new Proxy(_rawMotion, {
  get(target, prop, receiver) {
    const val = Reflect.get(target, prop, receiver);
    // Only wrap element factories: they are React forwardRef objects (typeof === "object")
    // accessed via lowercase string keys (e.g. "div", "span", "svg", "path")
    if (
      typeof prop === "string" &&
      /^[a-z]/.test(prop) &&
      val != null &&
      typeof val === "object" &&
      val.$$typeof
    ) {
      if (!_motionCache.has(prop)) {
        _motionCache.set(prop, _wrapMotionComponent(val, prop));
      }
      return _motionCache.get(prop);
    }
    return val;
  },
});

// ─── ControlType ─────────────────────────────────────────────────────────────
export const ControlType = {
  Boolean: "boolean",
  Number: "number",
  String: "string",
  FusedNumber: "fusednumber",
  Enum: "enum",
  SegmentedEnum: "segmentedenum",
  Color: "color",
  Image: "image",
  ResponsiveImage: "responsiveimage",
  File: "file",
  ComponentInstance: "componentinstance",
  Slot: "slot",
  Array: "array",
  EventHandler: "eventhandler",
  Transition: "transition",
  BoxShadow: "boxshadow",
  Link: "link",
  Date: "date",
  Object: "object",
  Font: "font",
  Border: "border",
  Cursor: "cursor",
  Padding: "padding",
  BorderRadius: "borderradius",
  Gap: "gap",
  TrackingId: "trackingid",
  RichText: "richtext",
  ScrollSectionRef: "scrollsectionref",
};

// ─── RenderTarget ─────────────────────────────────────────────────────────────
export const RenderTarget = {
  canvas: "canvas",
  preview: "preview",
  thumbnail: "thumbnail",
  export: "export",
  current: () => "preview",
};

// ─── cx (classname merger) ────────────────────────────────────────────────────
export function cx(...args) {
  return args
    .flat(Infinity)
    .filter((v) => v && typeof v === "string")
    .join(" ");
}

// ─── Font registry ────────────────────────────────────────────────────────────
const _fontsMap = new Map();
export function addFonts(component, fontsOrBundles, _flags) {
  if (component) _fontsMap.set(component, fontsOrBundles ?? []);
}
export function getFonts(component) {
  return _fontsMap.get(component) ?? [];
}
export function getFontsFromSharedStyle(sharedStyle) {
  if (!sharedStyle) return [];
  if (Array.isArray(sharedStyle)) return sharedStyle;
  if (typeof sharedStyle === "object" && sharedStyle.fonts) return sharedStyle.fonts;
  return [];
}
export const fontStore = {
  loadWebFonts: () => Promise.resolve(),
  loadFonts: () => Promise.resolve(),
  addFonts: () => {},
};

// ─── addPropertyControls (Framer Studio only — no-op here) ───────────────────
export function addPropertyControls(_component, _controls) {}

// ─── Framer-internal prop filter ──────────────────────────────────────────────
const _FRAMER_PROPS = new Set([
  "nodeId", "scopeId", "layoutDependency", "layoutId", "rendersWithMotion",
  "isAuthoredByUser", "isModuleExternal", "animated", "Component",
  "__perspectiveFX", "__smartComponentFX", "__targetOpacity",
  "withExternalLayout", "framerSupportedLayoutWidth", "framerSupportedLayoutHeight",
  "transformTemplate",
]);
function stripFramerProps(props) {
  const out = {};
  for (const [k, v] of Object.entries(props)) {
    if (_FRAMER_PROPS.has(k)) continue;
    if (k.startsWith("__framer__")) continue;
    out[k] = v;
  }
  return out;
}

// ─── withCSS ──────────────────────────────────────────────────────────────────
const _injectedCSS = new Set();
export function withCSS(Component, cssArray, hash) {
  const Wrapped = forwardRef((props, ref) => {
    useEffect(() => {
      if (typeof document === "undefined") return;
      const id = `framer-css-${hash}`;
      if (!_injectedCSS.has(id) && !document.getElementById(id)) {
        _injectedCSS.add(id);
        const style = document.createElement("style");
        style.id = id;
        style.textContent = Array.isArray(cssArray) ? cssArray.join("\n") : String(cssArray);
        document.head.appendChild(style);
      }
    }, []);
    return _jsx(Component, { ...props, ref });
  });
  Wrapped.displayName = Component.displayName ?? Component.name ?? "FramerComponent";
  if (Component.defaultProps) Wrapped.defaultProps = Component.defaultProps;
  return Wrapped;
}

// ─── withFX (visual effects — pass-through in Next.js) ────────────────────────
export function withFX(Component) {
  const Wrapped = forwardRef(({ _effects, _transforms, ...props }, ref) =>
    _jsx(Component, { ...stripFramerProps(props), ref })
  );
  Wrapped.displayName = Component.displayName ?? Component.name;
  return Wrapped;
}

// ─── useLocaleInfo ────────────────────────────────────────────────────────────
export function useLocaleInfo() {
  return {
    activeLocale: "en-US",
    setLocale: () => {},
    locales: [{ id: "en-US", name: "English", code: "en-US" }],
  };
}

// ─── ComponentViewportProvider / useComponentViewport ─────────────────────────
const _ViewportCtx = createContext(undefined);
export function ComponentViewportProvider({ value, children }) {
  return _jsx(_ViewportCtx.Provider, { value, children });
}
export function useComponentViewport() {
  return useContext(_ViewportCtx);
}

// ─── useVariantState ──────────────────────────────────────────────────────────
export function useVariantState({
  defaultVariant,
  variant: controlled,
  variantClassNames = {},
  enabledGestures = {},
  ref: _ref,
}) {
  const [base, setBase] = useState(controlled ?? defaultVariant);
  const [gesture, setGesture] = useState(null);

  useEffect(() => {
    if (controlled !== undefined) setBase(controlled);
  }, [controlled]);

  const baseVariant = base ?? defaultVariant;
  const gestures = enabledGestures[baseVariant] ?? {};
  const classNames = variantClassNames[baseVariant] ? [variantClassNames[baseVariant]] : [];
  const effectiveVariant = gesture ?? baseVariant;

  const gestureHandlers = useMemo(() => {
    const h = {};
    if (gestures.hover) {
      h.onHoverStart = () => setGesture(`${baseVariant}-hover`);
      h.onHoverEnd = () => setGesture(null);
    }
    if (gestures.pressed) {
      h.onTapStart = () => setGesture(`${baseVariant}-pressed`);
      h.onTap = () => setGesture(null);
      h.onTapCancel = () => setGesture(null);
    }
    if (gestures.focus) {
      h.onFocus = () => setGesture(`${baseVariant}-focus`);
      h.onBlur = () => setGesture(null);
    }
    return h;
  }, [baseVariant, gestures.hover, gestures.pressed, gestures.focus]);

  const setGestureState = useCallback(
    (state) => {
      if (state.isHovered !== undefined) {
        setGesture(state.isHovered && gestures.hover ? `${baseVariant}-hover` : null);
      }
      if (state.isPressed !== undefined) {
        setGesture(state.isPressed && gestures.pressed ? `${baseVariant}-pressed` : null);
      }
    },
    [baseVariant, gestures.hover, gestures.pressed]
  );

  return {
    baseVariant,
    classNames,
    clearLoadingGesture: () => {},
    gestureHandlers,
    gestureVariant: gesture,
    isLoading: false,
    setGestureState,
    setVariant: setBase,
    variants: [effectiveVariant].filter(Boolean),
  };
}

// ─── useActiveVariantCallback ─────────────────────────────────────────────────
export function useActiveVariantCallback(baseVariant) {
  const setActiveVariantRef = useRef(null);
  const activeVariantCallback = useCallback(
    (fn) => (event) => {
      if (typeof fn === "function") fn(event);
    },
    []
  );
  return { activeVariantCallback, setActiveVariantRef };
}

// ─── RichText ─────────────────────────────────────────────────────────────────
export const RichText = forwardRef(function RichText(
  {
    children,
    className,
    style,
    text,
    verticalAlignment,
    withExternalLayout,
    __fromCanvasComponent,
    fonts,
    "data-framer-name": _name,
    layoutDependency: _ld,
    layoutId: _lid,
    ...rest
  },
  ref
) {
  const content =
    text !== undefined
      ? React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return child;
          const grandChildren = React.Children.map(child.props.children, (gc) => {
            if (!React.isValidElement(gc)) return gc;
            return React.cloneElement(gc, {}, text);
          });
          return React.cloneElement(child, {}, grandChildren);
        })
      : children;
  return _jsx("div", { ref, className, style, ...stripFramerProps(rest), children: content });
});

// ─── SVG ──────────────────────────────────────────────────────────────────────
export const SVG = forwardRef(function SVGComponent(
  {
    svg,
    svgContentId: _id,
    className,
    style,
    opacity,
    layout: _layout,
    withExternalLayout: _wl,
    layoutDependency: _ld,
    layoutId: _lid,
    "data-framer-name": _name,
    ...rest
  },
  ref
) {
  if (!svg) return null;
  return _jsx("div", {
    ref,
    className,
    style: { opacity, lineHeight: 0, ...style },
    ...rest,
    dangerouslySetInnerHTML: { __html: svg },
  });
});

// ─── Image ────────────────────────────────────────────────────────────────────
export const Image = forwardRef(function FramerImage(
  {
    src,
    background,
    alt = "",
    className,
    style,
    withExternalLayout: _wl,
    layoutDependency: _ld,
    layoutId: _lid,
    "data-framer-name": _name,
    ...rest
  },
  ref
) {
  const imgSrc = src ?? background?.src ?? background?.url;
  if (!imgSrc) return _jsx("div", { ref, className, style, ...rest });
  return _jsx("img", {
    ref,
    src: imgSrc,
    alt,
    className,
    style: { display: "block", objectFit: "cover", ...style },
    ...rest,
  });
});

// ─── Link ─────────────────────────────────────────────────────────────────────
export const Link = forwardRef(function FramerLink(
  { href, children, openInNewTab, smoothScroll: _ss, motionChild, nodeId: _ni, scopeId: _si, ...rest },
  ref
) {
  if (!href) return _jsx(_Fragment, { children });
  // When the child is already a motion.a, clone the href onto it to avoid <a> inside <a>
  if (motionChild) {
    const child = React.Children.only(children);
    return React.cloneElement(child, {
      ref,
      href,
      target: openInNewTab ? "_blank" : undefined,
      rel: openInNewTab ? "noopener noreferrer" : undefined,
    });
  }
  return _jsx("a", {
    ref,
    href,
    target: openInNewTab ? "_blank" : undefined,
    rel: openInNewTab ? "noopener noreferrer" : undefined,
    style: { textDecoration: "none", color: "inherit" },
    ...stripFramerProps(rest),
    children,
  });
});

// ─── Instance ─────────────────────────────────────────────────────────────────
export const Instance = forwardRef(function FramerInstance({ children, ...props }, ref) {
  const clean = stripFramerProps(props);
  if (React.isValidElement(children)) {
    return React.cloneElement(children, { ref, ...clean });
  }
  return _jsx("div", { ref, ...clean, children });
});

// ─── useSVGTemplate ───────────────────────────────────────────────────────────
const _svgCache = new Map();
export function useSVGTemplate(id, svgContent) {
  const [href, setHref] = useState(() => _svgCache.get(id) ?? null);

  useEffect(() => {
    if (!svgContent || typeof document === "undefined") return;
    if (_svgCache.has(id)) {
      setHref(_svgCache.get(id));
      return;
    }

    let defsEl = document.getElementById("__framer-svg-defs__");
    if (!defsEl) {
      const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgEl.id = "__framer-svg-defs__";
      svgEl.setAttribute("aria-hidden", "true");
      svgEl.style.cssText = "position:absolute;width:0;height:0;overflow:hidden;pointer-events:none";
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      svgEl.appendChild(defs);
      document.body.insertBefore(svgEl, document.body.firstChild);
      defsEl = defs;
    } else {
      defsEl = defsEl.querySelector("defs") ?? defsEl;
    }

    const symbolId = `__framer-sym-${id}`;
    if (!document.getElementById(symbolId)) {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(svgContent, "image/svg+xml");
        const sourceSvg = doc.documentElement;
        const symbol = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
        symbol.id = symbolId;
        const vb = sourceSvg.getAttribute("viewBox");
        if (vb) symbol.setAttribute("viewBox", vb);
        Array.from(sourceSvg.childNodes).forEach((n) => symbol.appendChild(n.cloneNode(true)));
        defsEl.appendChild(symbol);
      } catch (_) {}
    }

    const hrefVal = `#${symbolId}`;
    _svgCache.set(id, hrefVal);
    setHref(hrefVal);
  }, [id, svgContent]);

  return href;
}

// ─── SmartComponentScopedContainer ───────────────────────────────────────────
export const SmartComponentScopedContainer = forwardRef(function SmartComponentScopedContainer(
  { children, className, style, layoutDependency: _ld, layoutId: _lid, ...rest },
  ref
) {
  return _jsx("div", { ref, className, style, ...stripFramerProps(rest), children });
});

// ─── ComponentPresetsConsumer ─────────────────────────────────────────────────
export function ComponentPresetsConsumer({ children, presets }) {
  return typeof children === "function" ? children(presets ?? {}) : (children ?? null);
}

// ─── ResolveLinks ─────────────────────────────────────────────────────────────
export function ResolveLinks({ children }) {
  if (typeof children === "function") return children({ resolver: (href) => href }) ?? null;
  return children ?? null;
}

// ─── ChildrenCanSuspend ───────────────────────────────────────────────────────
export function ChildrenCanSuspend({ children, fallback }) {
  return _jsx(Suspense, { fallback: fallback ?? null, children });
}

// ─── PathVariablesContext ─────────────────────────────────────────────────────
export const PathVariablesContext = createContext({});

// ─── useQueryData ─────────────────────────────────────────────────────────────
export function useQueryData(_query) {
  return { data: null, isLoading: false, error: null };
}

// ─── useRouter ────────────────────────────────────────────────────────────────
export function useRouter() {
  return {
    push: (url) => typeof window !== "undefined" && (window.location.href = url),
    replace: (url) => typeof window !== "undefined" && window.location.replace(url),
    pathname: typeof window !== "undefined" ? window.location.pathname : "/",
    query: {},
  };
}

// ─── QueryCache / QueryEngine (stubs) ────────────────────────────────────────
export class QueryCache {}
export class QueryEngine {}

// ─── Form components ──────────────────────────────────────────────────────────
export const FormContainer = forwardRef(function FormContainer(
  { children, className, style, onSubmit },
  ref
) {
  const resolvedChildren =
    typeof children === "function" ? children({}) : children;
  return _jsx("form", {
    ref,
    className,
    style,
    onSubmit: (e) => {
      e.preventDefault();
      if (typeof onSubmit === "function") onSubmit(e);
    },
    children: resolvedChildren,
  });
});

export const FormPlainTextInput = forwardRef(function FormPlainTextInput(
  {
    placeholder, value, onChange, className, style,
    inputName: _in, layoutId: _lid, layoutDependency: _ld,
    ...rest
  },
  ref
) {
  return _jsx("input", { ref, type: "text", placeholder, value, onChange, className, style, ...stripFramerProps(rest) });
});

export const FormSelect = forwardRef(function FormSelect(
  {
    selectOptions, options = [],
    value, onChange, className, style,
    inputName: _in, layoutId: _lid, layoutDependency: _ld,
    ...rest
  },
  ref
) {
  const opts = selectOptions ?? options;
  return _jsx("select", {
    ref, value, onChange, className, style,
    ...stripFramerProps(rest),
    children: opts.map((opt, i) =>
      _jsx("option", {
        value: opt?.value ?? opt,
        disabled: opt?.disabled ?? false,
        children: opt?.title ?? opt?.label ?? opt,
      }, i)
    ),
  });
});

// ─── getLoadingLazyAtYPosition ────────────────────────────────────────────────
export function getLoadingLazyAtYPosition(yPosition) {
  return { loading: "lazy" };
}
