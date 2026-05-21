// http-url:https://framerusercontent.com/modules/tBUJNfAEslNkqRjqR9QO/ooaAWNYshSyna3YxE9Ol/R0KbiarZ7.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, Link, RichText, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "./_framer-runtime.js";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/mBCi7nsZDZBl5K90pOl9/hJWwyB6aemyOWkpNezAk/Zqt3spZGI.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Poppins-medium", "FS;Poppins-bold", "FS;Poppins-bold italic", "FS;Poppins-medium italic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Poppins", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2", weight: "500" }, { family: "Poppins", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2", weight: "700" }, { family: "Poppins", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2", weight: "700" }, { family: "Poppins", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/4HH4RITHYMRL7VREMN2WV2L6LQZKPRWE/ZWMGJ4LKTJ4NT5NKCHS5WLI6CRRRO2SE/OFRM3ATAEVJKZWGG6S4JN4P6SBPN2BLD.woff2", weight: "500" }] }];
var css = [`.framer-PWHB5 .framer-styles-preset-1rcsszk:not(.rich-text-wrapper), .framer-PWHB5 .framer-styles-preset-1rcsszk.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-PWHB5";

// http-url:https://framerusercontent.com/modules/tBUJNfAEslNkqRjqR9QO/ooaAWNYshSyna3YxE9Ol/R0KbiarZ7.js
var enabledGestures = { RjduLn1Xo: { hover: true } };
var serializationHash = "framer-XVaJf";
var variantClassNames = { RjduLn1Xo: "framer-v-12q5l7w" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, link, title, width, ...props }) => {
  return { ...props, rtUD4mhMC: link ?? props.rtUD4mhMC, XuRPDUOvp: title ?? props.XuRPDUOvp ?? "View All Projects" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className2, layoutId, variant, XuRPDUOvp, rtUD4mhMC, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "RjduLn1Xo", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: rtUD4mhMC, motionChild: true, nodeId: "RjduLn1Xo", openInNewTab: false, scopeId: "R0KbiarZ7", smoothScroll: true, children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-12q5l7w", className2, classNames)} framer-1dvyzag`, "data-framer-name": "Primary", layoutDependency, layoutId: "RjduLn1Xo", ref: refBinding, style: { backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))", borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50, ...style }, variants: { "RjduLn1Xo-hover": { backgroundColor: "var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, rgb(255, 255, 255))" } }, ...addPropertyOverrides({ "RjduLn1Xo-hover": { "data-framer-name": void 0 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1rcsszk", "data-styles-preset": "Zqt3spZGI", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21)))" }, children: "View All Projects" }) }), className: "framer-1cyxlqw", "data-framer-name": "View All Projects", fonts: ["Inter"], layoutDependency, layoutId: "I2089:464;204:684", style: { "--extracted-r6o4lv": "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))", "--framer-paragraph-spacing": "0px" }, text: XuRPDUOvp, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-alx4mw", "data-framer-name": "Button", layoutDependency, layoutId: "PgEqgu8XH", style: { backgroundColor: "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))", borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32 }, variants: { "RjduLn1Xo-hover": { backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))" } }, children: /* @__PURE__ */ _jsx(SVG, { className: "framer-1yrfn7", "data-framer-name": "Vector", layout: "position", layoutDependency, layoutId: "V4FUFgEkH", opacity: 1, svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 15.208 0.657 L 15.208 11.55 L 14.003 11.55 L 14.003 2.707 L 1.501 15.208 L 0.657 14.324 L 13.118 1.863 L 4.275 1.863 L 4.275 0.657 Z" fill="var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, rgb(255, 255, 255))"></path></svg>', svgContentId: 9561345080, withExternalLayout: true, ...addPropertyOverrides({ "RjduLn1Xo-hover": { svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><path d="M 15.208 0.657 L 15.208 11.55 L 14.003 11.55 L 14.003 2.707 L 1.501 15.208 L 0.657 14.324 L 13.118 1.863 L 4.275 1.863 L 4.275 0.657 Z" fill="var(--token-20f2ae48-e039-47f3-8042-3745ae324c8f, rgb(0, 0, 0))"></path></svg>', svgContentId: 12232469338 } }, baseVariant, gestureVariant) }) })] }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-XVaJf.framer-1dvyzag, .framer-XVaJf .framer-1dvyzag { display: block; }", ".framer-XVaJf.framer-12q5l7w { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 4px 4px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-XVaJf .framer-1cyxlqw { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-XVaJf .framer-alx4mw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 48px; }", ".framer-XVaJf .framer-1yrfn7 { flex: none; height: 16px; position: relative; width: 16px; }", ...css];
var FramerR0KbiarZ7 = withCSS(Component, css2, "framer-XVaJf");
var R0KbiarZ7_default = FramerR0KbiarZ7;
FramerR0KbiarZ7.displayName = "Primary Button";
FramerR0KbiarZ7.defaultProps = { height: 56, width: 218.5 };
addPropertyControls(FramerR0KbiarZ7, { XuRPDUOvp: { defaultValue: "View All Projects", displayTextArea: false, title: "Title", type: ControlType.String }, rtUD4mhMC: { title: "Link", type: ControlType.Link } });
addFonts(FramerR0KbiarZ7, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "default": { "type": "reactComponent", "name": "FramerR0KbiarZ7", "slots": [], "annotations": { "framerIntrinsicWidth": "218.5", "framerContractVersion": "1", "framerAutoSizeImages": "true", "framerIntrinsicHeight": "56", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"va_nIWUUO":{"layout":["auto","auto"]}}}', "framerVariables": '{"XuRPDUOvp":"title","rtUD4mhMC":"link"}', "framerDisplayContentsDiv": "false", "framerColorSyntax": "true", "framerComponentViewportWidth": "true" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  R0KbiarZ7_default as default
};
