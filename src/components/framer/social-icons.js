// http-url:https://framerusercontent.com/modules/ah0Xmr1lSGqrp2VC2ZhY/uUx9J3S46zzO9MCneL89/bV75UxAI2.js
import { jsx as _jsx2 } from "react/jsx-runtime";
import { addFonts, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, Instance, Link, useComponentViewport, useLocaleInfo, useVariantState, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup, motion as motion2, MotionConfigContext } from "./_framer-runtime.js";
import * as React2 from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/SUBEdtCFaOJwrjN2Inhk/bznEUerLEqVVXGfsDOYE/pKERsxd4H.js
import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType, cx, motion, useSVGTemplate, withCSS } from "./_framer-runtime.js";
import * as React from "react";
import { forwardRef as forwardRef2 } from "react";
var mask = "var(--framer-icon-mask)";
var Base = /* @__PURE__ */ forwardRef2(function(props, ref) {
  return /* @__PURE__ */ _jsx("svg", { ...props, ref, children: props.children });
});
var MotionSVG = motion.create(Base);
var SVG = /* @__PURE__ */ forwardRef2((props, ref) => {
  const { animated, layoutId, children, ...rest } = props;
  return animated ? /* @__PURE__ */ _jsx(MotionSVG, { ...rest, layoutId, ref, children }) : /* @__PURE__ */ _jsx("svg", { ...rest, ref, children });
});
var svg = '<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="11.25px" id="q_nKPtBGJ" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="8.25px" id="MpPyBdaZ4" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill-opacity="var(--1m6trwb, 0)" fill="var(--21h8s6, rgb(0, 0, 0))" height="5.25px" id="vndv5ExCK" transform="translate(12.75 14.25)" width="8.25px"/><path d="M 3.75 0 L 0 11.25 L 7.5 11.25 Z" fill="transparent" height="11.25px" id="vm9iwQat7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(2.25 6)" width="7.5px"/><path d="M 0 4.125 C 0 1.847 1.847 0 4.125 0 C 6.403 0 8.25 1.847 8.25 4.125 C 8.25 6.403 6.403 8.25 4.125 8.25 C 1.847 8.25 0 6.403 0 4.125 Z" fill="transparent" height="8.25px" id="ZJXViX94I" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(10.5 3)" width="8.25px"/><path d="M 0 5.25 L 0 0 L 8.25 0 L 8.25 5.25 Z" fill="transparent" height="5.25px" id="sATOM9inG" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--pgex8v, 1.5)" stroke="var(--21h8s6, rgb(0, 0, 0))" transform="translate(12.75 14.25)" width="8.25px"/></svg>';
var getProps = ({ alpha, color, height, id, width, width1, ...props }) => {
  return { ...props, ezTt3ayMo: color ?? props.ezTt3ayMo ?? "rgb(0, 0, 0)", lschgej4H: width1 ?? props.lschgej4H ?? 1.5, qxTvv_EBh: alpha ?? props.qxTvv_EBh };
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { style, className, layoutId, variant, ezTt3ayMo, lschgej4H, qxTvv_EBh, ...restProps } = getProps(props);
  const href = useSVGTemplate("3151112179", svg);
  return /* @__PURE__ */ _jsx(SVG, { ...restProps, className: cx("framer-c2uAX", className), layoutId, ref, role: "presentation", style: { "--1m6trwb": qxTvv_EBh, "--21h8s6": ezTt3ayMo, "--pgex8v": lschgej4H, ...style }, viewBox: "0 0 24 24", children: /* @__PURE__ */ _jsx("use", { href }) });
});
var css = [`.framer-c2uAX { -webkit-mask: ${mask}; aspect-ratio: 1; display: block; mask: ${mask}; width: 24px; }`];
var Icon = withCSS(Component, css, "framer-c2uAX");
Icon.displayName = "Shapes";
var pKERsxd4H_default = Icon;
addPropertyControls(Icon, { ezTt3ayMo: { defaultValue: "rgb(0, 0, 0)", hidden: false, title: "Color", type: ControlType.Color }, lschgej4H: { defaultValue: 1.5, displayStepper: true, hidden: false, max: 6, min: 0, step: 0.5, title: "Width", type: ControlType.Number }, qxTvv_EBh: { defaultValue: 0, displayStepper: true, hidden: false, max: 1, min: 0, step: 0.1, title: "Alpha", type: ControlType.Number } });

// http-url:https://framerusercontent.com/modules/ah0Xmr1lSGqrp2VC2ZhY/uUx9J3S46zzO9MCneL89/bV75UxAI2.js
var enabledGestures = { DhmOgeC0D: { hover: true } };
var cycleOrder = ["DhmOgeC0D", "XMeTD6glG"];
var serializationHash = "framer-2RVii";
var variantClassNames = { DhmOgeC0D: "framer-v-1lqvjfs", XMeTD6glG: "framer-v-1q903kq" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion2.create(React2.Fragment);
var humanReadableVariantMap = { Primary: "DhmOgeC0D", Secondary: "XMeTD6glG" };
var getProps2 = ({ height, icon, id, link, width, ...props }) => {
  return { ...props, DAyu7SPw2: link ?? props.DAyu7SPw2, q2AxCa26g: icon ?? props.q2AxCa26g ?? pKERsxd4H_default, variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "DhmOgeC0D" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className, layoutId, variant, q2AxCa26g, DAyu7SPw2, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "DhmOgeC0D", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx2(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx2(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition, { value: transition1, children: /* @__PURE__ */ _jsx2(Link, { href: DAyu7SPw2, motionChild: true, nodeId: "DhmOgeC0D", openInNewTab: true, scopeId: "bV75UxAI2", smoothScroll: true, ...addPropertyOverrides({ XMeTD6glG: { href: void 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(motion2.a, { ...restProps, ...gestureHandlers, className: `${cx2(scopingClassNames, "framer-1lqvjfs", className, classNames)} framer-1vvv67d`, "data-framer-name": "Primary", layoutDependency, layoutId: "DhmOgeC0D", ref: refBinding, style: { backgroundColor: "var(--token-f98c13ba-4557-4be8-a887-117b0c3d106e, rgb(51, 51, 51))", borderBottomLeftRadius: 50, borderBottomRightRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 50, ...style }, variants: { "DhmOgeC0D-hover": { backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))" }, XMeTD6glG: { backgroundColor: "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))" } }, ...addPropertyOverrides({ "DhmOgeC0D-hover": { "data-framer-name": void 0 }, XMeTD6glG: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx2(Instance, { animated: true, className: "framer-1eu0di6", Component: q2AxCa26g, layoutDependency, layoutId: "FVaxYwZZc", style: { "--1m6trwb": 0, "--21h8s6": "var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, rgb(255, 255, 255))", "--pgex8v": 1.5 }, variants: { "DhmOgeC0D-hover": { "--21h8s6": "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))" }, XMeTD6glG: { "--21h8s6": "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))" } } }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-2RVii.framer-1vvv67d, .framer-2RVii .framer-1vvv67d { display: block; }", ".framer-2RVii.framer-1lqvjfs { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 40px; }", ".framer-2RVii .framer-1eu0di6 { flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 18px; }", ".framer-2RVii.framer-v-1q903kq.framer-1lqvjfs { cursor: unset; height: 42px; width: 42px; }", ".framer-2RVii.framer-v-1q903kq .framer-1eu0di6 { height: var(--framer-aspect-ratio-supported, 24px); width: 24px; }"];
var FramerbV75UxAI2 = withCSS2(Component2, css2, "framer-2RVii");
var bV75UxAI2_default = FramerbV75UxAI2;
FramerbV75UxAI2.displayName = "Social Icons";
FramerbV75UxAI2.defaultProps = { height: 40, width: 40 };
addPropertyControls2(FramerbV75UxAI2, { variant: { options: ["DhmOgeC0D", "XMeTD6glG"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType2.Enum }, q2AxCa26g: { defaultValue: { identifier: "module:SUBEdtCFaOJwrjN2Inhk/bznEUerLEqVVXGfsDOYE/pKERsxd4H.js:default", moduleId: "SUBEdtCFaOJwrjN2Inhk" }, setModuleId: "omX0gWFPqDwhaiWwf6ab", title: "Icon", type: ControlType2.VectorSetItem }, DAyu7SPw2: { title: "Link", type: ControlType2.Link } });
addFonts(FramerbV75UxAI2, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerbV75UxAI2", "slots": [], "annotations": { "framerVariables": '{"q2AxCa26g":"icon","DAyu7SPw2":"link"}', "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"XMeTD6glG":{"layout":["fixed","fixed"]},"yPlxYJcUy":{"layout":["fixed","fixed"]}}}', "framerAutoSizeImages": "true", "framerDisplayContentsDiv": "false", "framerIntrinsicWidth": "40", "framerIntrinsicHeight": "40", "framerComponentViewportWidth": "true", "framerColorSyntax": "true", "framerImmutableVariables": "true", "framerContractVersion": "1", "framerVectorSets": '["omX0gWFPqDwhaiWwf6ab"]' } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  bV75UxAI2_default as default
};
