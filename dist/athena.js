import { jsx as f, jsxs as N, Fragment as ge } from "react/jsx-runtime";
import * as a from "react";
import V, { forwardRef as O, createElement as J, useRef as ie, useId as it, useState as st, useEffect as X } from "react";
import { twMerge as ct } from "tailwind-merge";
import "react-dom";
function he(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = he(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = he(e)) && (n && (n += " "), n += t);
  return n;
}
const se = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ce = ve, P = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return ce(e, r?.class, r?.className);
  const { variants: o, defaultVariants: i } = t, c = Object.keys(o).map((l) => {
    const d = r?.[l], p = i?.[l];
    if (d === null) return null;
    const g = se(d) || se(p);
    return o[l][g];
  }), s = r && Object.entries(r).reduce((l, d) => {
    let [p, g] = d;
    return g === void 0 || (l[p] = g), l;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, d) => {
    let { class: p, className: g, ...h } = d;
    return Object.entries(h).every((v) => {
      let [b, m] = v;
      return Array.isArray(m) ? m.includes({
        ...i,
        ...s
      }[b]) : {
        ...i,
        ...s
      }[b] === m;
    }) ? [
      ...l,
      p,
      g
    ] : l;
  }, []);
  return ce(e, c, u, r?.class, r?.className);
}, lt = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ a.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ a.createElement("title", { id: t }, e) : null, /* @__PURE__ */ a.createElement("path", { d: "M12.6166 0.17915C13.0316 0.479059 13.1244 1.05581 12.8226 1.46819L5.39385 11.619C5.23424 11.8381 4.98758 11.9737 4.71481 11.9968C4.44203 12.0198 4.17796 11.9189 3.98644 11.7286L0.27205 8.03736C-0.0906834 7.6769 -0.0906834 7.0915 0.27205 6.73103C0.634784 6.37056 1.22386 6.37056 1.5866 6.73103L4.53199 9.65803L11.3224 0.381012C11.6242 -0.0313641 12.2045 -0.123644 12.6195 0.176266L12.6166 0.17915Z", fill: "currentColor" })), be = O(lt), ut = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ a.createElement("svg", { width: 5, height: 12, viewBox: "0 0 5 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ a.createElement("title", { id: t }, e) : null, /* @__PURE__ */ a.createElement("g", { clipPath: "url(#clip0_38_51)" }, /* @__PURE__ */ a.createElement("path", { d: "M0.46875 9.94287H0.9375V6.55713H0.46875C0.209859 6.55713 0 6.34727 0 6.08838V4.96875C0 4.70986 0.209859 4.5 0.46875 4.5H3.09375C3.35264 4.5 3.5625 4.70986 3.5625 4.96875V9.94287H4.03125C4.29014 9.94287 4.5 10.1527 4.5 10.4116V11.5312C4.5 11.7901 4.29014 12 4.03125 12H0.46875C0.209859 12 0 11.7901 0 11.5312V10.4116C0 10.1527 0.209859 9.94287 0.46875 9.94287ZM2.25 0C1.31801 0 0.5625 0.755508 0.5625 1.6875C0.5625 2.61949 1.31801 3.375 2.25 3.375C3.18199 3.375 3.9375 2.61949 3.9375 1.6875C3.9375 0.755508 3.18197 0 2.25 0Z", fill: "currentColor" })), /* @__PURE__ */ a.createElement("defs", null, /* @__PURE__ */ a.createElement("clipPath", { id: "clip0_38_51" }, /* @__PURE__ */ a.createElement("rect", { width: 4.5, height: 12, fill: "white" })))), Q = O(ut), dt = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ a.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ a.createElement("title", { id: t }, e) : null, /* @__PURE__ */ a.createElement("path", { d: "M6.40052 0C6.76802 0 7.10552 0.2025 7.28052 0.525L12.6805 10.525C12.848 10.835 12.8405 11.21 12.6605 11.5125C12.4805 11.815 12.153 12 11.8005 12H1.00052C0.648017 12 0.320516 11.815 0.140516 11.5125C-0.0394836 11.21 -0.0469834 10.835 0.120517 10.525L5.52052 0.525C5.69552 0.2025 6.03302 0 6.40052 0ZM6.40052 8.8C5.95802 8.8 5.60052 9.1575 5.60052 9.6C5.60052 10.0425 5.95802 10.4 6.40052 10.4C6.84302 10.4 7.20052 10.0425 7.20052 9.6C7.20052 9.1575 6.84302 8.8 6.40052 8.8ZM6.40052 4C5.94552 4 5.58302 4.3875 5.61552 4.8425L5.80052 7.4425C5.82302 7.755 6.08552 8 6.39802 8C6.71302 8 6.97302 7.7575 6.99552 7.4425L7.18052 4.8425C7.21302 4.3875 6.85302 4 6.39552 4H6.40052Z", fill: "currentColor" })), ye = O(dt), ft = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ a.createElement("svg", { width: 11, height: 12, viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ a.createElement("title", { id: t }, e) : null, /* @__PURE__ */ a.createElement("path", { d: "M10.7875 1.40663C11.1112 1.04237 11.0596 0.501342 10.6701 0.198688C10.2805 -0.103966 9.70194 -0.0557555 9.37828 0.3085L5.5 4.66082L1.62172 0.3085C1.29806 -0.0557555 0.719466 -0.103966 0.32992 0.198688C-0.0596265 0.501342 -0.111184 1.04237 0.212483 1.40663L4.30558 6L0.212483 10.5934C-0.111184 10.9576 -0.0596265 11.4987 0.32992 11.8013C0.719466 12.104 1.29806 12.0558 1.62172 11.6915L5.5 7.33918L9.37828 11.6915C9.70194 12.0558 10.2805 12.104 10.6701 11.8013C11.0596 11.4987 11.1112 10.9576 10.7875 10.5934L6.69442 6L10.7875 1.40663Z", fill: "currentColor" })), Ce = O(ft);
function E(...e) {
  return ct(ve(e));
}
const pt = P(
  "inline-flex items-center rounded-full font-medium shrink-0",
  {
    variants: {
      type: {
        default: "bg-gi-dark-gray/10 text-gi-dark-gray",
        info: "bg-gi-blue/10 text-gi-blue",
        success: "bg-gi-green/10 text-gi-green",
        warning: "bg-gi-orange/10 text-gi-orange",
        error: "bg-gi-red/10 text-gi-red"
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "bg-transparent border",
        ghost: "bg-transparent border-transparent"
      },
      size: {
        small: "h-5 px-1.5 text-[10px] gap-1 [&_svg]:size-2",
        regular: "h-7 px-2.5 text-xs gap-1.5 [&_svg]:size-3",
        big: "h-8 px-3 text-sm gap-2 [&_svg]:size-3.5"
      }
    },
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular"
    }
  }
), mt = {
  info: Q,
  success: be,
  warning: ye,
  error: Ce
}, gt = ({ className: e }) => /* @__PURE__ */ f(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ f(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M14.7692 8C14.7692 6.20469 14.0563 4.48262 12.7869 3.21314C11.5174 1.94366 9.79531 1.23077 8 1.23077C6.20469 1.23077 4.48262 1.94366 3.21314 3.21314C1.94366 4.48262 1.23077 6.20469 1.23077 8C1.23077 8.88895 1.40581 9.76926 1.74599 10.5905C2.08618 11.4118 2.58457 12.1583 3.21314 12.7869C3.84171 13.4154 4.58819 13.9138 5.40946 14.254C6.23074 14.5942 7.11105 14.7692 8 14.7692C8.88895 14.7692 9.76926 14.5942 10.5905 14.254C11.4118 13.9138 12.1583 13.4154 12.7869 12.7869C13.4154 12.1583 13.9138 11.4118 14.254 10.5905C14.5942 9.76926 14.7692 8.88895 14.7692 8ZM9.41106 5.71875C9.65138 5.47843 10.0409 5.47843 10.2812 5.71875C10.5216 5.95907 10.5216 6.34862 10.2812 6.58894L8.87019 8L10.2812 9.41106C10.5216 9.65138 10.5216 10.0409 10.2812 10.2812C10.0409 10.5216 9.65138 10.5216 9.41106 10.2812L8 8.87019L6.58894 10.2812C6.34862 10.5216 5.95907 10.5216 5.71875 10.2812C5.47843 10.0409 5.47843 9.65138 5.71875 9.41106L7.12981 8L5.71875 6.58894C5.47843 6.34862 5.47843 5.95907 5.71875 5.71875C5.95907 5.47843 6.34862 5.47843 6.58894 5.71875L8 7.12981L9.41106 5.71875ZM16 8C16 9.05058 15.7931 10.0911 15.391 11.0617C14.989 12.0322 14.3999 12.9142 13.6571 13.6571C12.9142 14.3999 12.0322 14.989 11.0617 15.391C10.0911 15.7931 9.05058 16 8 16C6.94943 16 5.90891 15.7931 4.9383 15.391C3.96778 14.989 3.08577 14.3999 2.34295 13.6571C1.60013 12.9142 1.01101 12.0322 0.608974 11.0617C0.206937 10.0911 0 9.05058 0 8C4.89064e-08 5.87827 0.842658 3.84324 2.34295 2.34295C3.84324 0.842658 5.87827 0 8 0C10.1217 0 12.1568 0.842658 13.6571 2.34295C15.1573 3.84324 16 5.87827 16 8Z",
        fill: "currentColor"
      }
    )
  }
);
function tn({
  className: e,
  type: t = "default",
  variant: r,
  size: n,
  children: o,
  LeftIcon: i,
  isDismissible: c = !1,
  onDismiss: s,
  dataTestId: u,
  ...l
}) {
  const d = "[color:inherit] shrink-0 flex items-center justify-center", p = a.useMemo(() => {
    if (i)
      return a.isValidElement(i) ? a.cloneElement(
        i,
        {
          className: E(i.props?.className, d)
        }
      ) : /* @__PURE__ */ f("span", { className: d, children: i });
    if (t === "default") return null;
    const g = mt[t];
    return /* @__PURE__ */ f("span", { className: d, children: /* @__PURE__ */ f(g, {}) });
  }, [i, t]);
  return /* @__PURE__ */ N("div", { className: "inline-flex items-center gap-1.5", "data-slot": "badge-wrapper", children: [
    /* @__PURE__ */ N(
      "span",
      {
        "data-test-id": u,
        className: E(pt({ type: t, variant: r, size: n, className: e })),
        ...l,
        children: [
          p,
          /* @__PURE__ */ f("span", { className: "leading-none", children: o })
        ]
      }
    ),
    c && /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        "aria-label": "Dismiss",
        onClick: (g) => {
          g.preventDefault(), g.stopPropagation(), s?.();
        },
        className: E(
          "flex items-center justify-center transition-all outline-none",
          "text-[#D3D9DA] hover:brightness-90",
          n === "small" ? "size-4" : n === "big" ? "size-6" : "size-5"
        ),
        children: /* @__PURE__ */ f(
          gt,
          {
            className: E(
              n === "small" ? "size-3.5" : n === "big" ? "size-5" : "size-4.5",
              "cursor-pointer"
            )
          }
        )
      }
    )
  ] });
}
function le(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function G(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const i = le(o, t);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const i = n[o];
          typeof i == "function" ? i() : le(e[o], null);
        }
      };
  };
}
function _(...e) {
  return a.useCallback(G(...e), e);
}
var ht = /* @__PURE__ */ Symbol.for("react.lazy"), U = a[" use ".trim().toString()];
function vt(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function xe(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === ht && "_payload" in e && vt(e._payload);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  const t = /* @__PURE__ */ Ct(e), r = a.forwardRef((n, o) => {
    let { children: i, ...c } = n;
    xe(i) && typeof U == "function" && (i = U(i._payload));
    const s = a.Children.toArray(i), u = s.find(wt);
    if (u) {
      const l = u.props.children, d = s.map((p) => p === u ? a.Children.count(l) > 1 ? a.Children.only(null) : a.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...c, ref: o, children: a.isValidElement(l) ? a.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ f(t, { ...c, ref: o, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
var yt = /* @__PURE__ */ bt("Slot");
// @__NO_SIDE_EFFECTS__
function Ct(e) {
  const t = a.forwardRef((r, n) => {
    let { children: o, ...i } = r;
    if (xe(o) && typeof U == "function" && (o = U(o._payload)), a.isValidElement(o)) {
      const c = Et(o), s = Rt(i, o.props);
      return o.type !== a.Fragment && (s.ref = n ? G(n, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var xt = /* @__PURE__ */ Symbol("radix.slottable");
function wt(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xt;
}
function Rt(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
      const u = i(...s);
      return o(...s), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...i } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Et(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const ue = P(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ease-[ease] shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] disabled:pointer-events-none [&_svg]:size-4 [&_svg]:overflow-visible [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        primary: "disabled:border-transparent",
        outlined: "border disabled:bg-transparent",
        ghost: "disabled:border-transparent"
      },
      variant: {
        primary: "",
        secondary: "",
        danger: ""
      },
      size: {
        regular: "h-10 px-4 py-2 has-[>svg]:px-3",
        small: "h-8 px-3 text-xs gap-1.5 has-[>svg]:px-2.5"
      },
      isIconButton: {
        true: "p-0"
      }
    },
    compoundVariants: [
      {
        type: "primary",
        variant: "primary",
        className: "bg-gi-primary text-white hover:bg-gi-primary-hover disabled:bg-gi-gray disabled:text-white"
      },
      {
        type: "primary",
        variant: "secondary",
        className: "bg-gi-secondary text-white hover:bg-gi-secondary-hover disabled:bg-gi-gray-hover disabled:text-white"
      },
      {
        type: "primary",
        variant: "danger",
        className: "bg-gi-red text-white hover:bg-gi-red-hover disabled:bg-gi-gray-hover disabled:text-white"
      },
      {
        type: "outlined",
        variant: "primary",
        className: "border-gi-primary text-gi-primary bg-transparent hover:bg-gi-ash disabled:border-gi-gray disabled:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "secondary",
        className: "border-gi-secondary text-gi-secondary bg-transparent hover:bg-gi-secondary/10 disabled:border-gi-gray-hover disabled:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "danger",
        className: "border-gi-red text-gi-red bg-transparent hover:bg-gi-red/10 disabled:border-gi-gray-hover disabled:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "primary",
        className: "bg-gi-ash text-gi-primary hover:bg-gi-dark-ash disabled:bg-gi-gray/10 disabled:text-gi-dark-gray"
      },
      {
        type: "ghost",
        variant: "secondary",
        className: "bg-gi-secondary/10 text-gi-secondary hover:bg-gi-secondary/33 disabled:bg-gi-gray/10 disabled:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "danger",
        className: "bg-gi-red/10 text-gi-red hover:bg-gi-red/33 disabled:bg-gi-gray/10 disabled:text-gi-gray"
      },
      {
        isIconButton: !0,
        size: "regular",
        className: "w-10 h-10"
      },
      {
        isIconButton: !0,
        size: "small",
        className: "w-8 h-8"
      }
    ],
    defaultVariants: {
      type: "primary",
      variant: "primary",
      size: "regular"
    }
  }
), de = () => /* @__PURE__ */ f(
  "svg",
  {
    className: "animate-spin shrink-0 w-4 h-4",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "none",
    children: /* @__PURE__ */ f(
      "path",
      {
        d: "M7.14667 13.2666C6.42022 13.1495 5.72586 12.8834 5.10726 12.4849C4.48866 12.0864 3.95921 11.5643 3.5522 10.9513C3.1452 10.3382 2.86944 9.64764 2.74229 8.92289C2.61513 8.19813 2.63932 7.4549 2.81334 6.73995C3.03483 5.74733 3.54363 4.84187 4.27629 4.13648C5.00894 3.4311 5.93303 2.95699 6.93334 2.77328C7.63529 2.63005 8.3589 2.62972 9.06099 2.77229C9.76307 2.91486 10.4292 3.19742 11.0197 3.60311C11.6102 4.00879 12.1129 4.52928 12.4978 5.13351C12.8827 5.73775 13.1419 6.41333 13.26 7.11995C13.2947 7.36046 13.4135 7.58088 13.5954 7.74201C13.7773 7.90315 14.0104 7.99454 14.2533 7.99995H14.34C14.4707 8.00192 14.6002 7.97582 14.7199 7.92343C14.8397 7.87103 14.9467 7.79356 15.0339 7.69624C15.1211 7.59892 15.1865 7.48402 15.2255 7.3593C15.2645 7.23458 15.2762 7.10295 15.26 6.97328C15.0703 5.63152 14.5126 4.36854 13.6487 3.32453C12.7848 2.28052 11.6485 1.4963 10.3659 1.0589C9.08332 0.621502 7.70463 0.548037 6.38284 0.846658C5.06104 1.14528 3.84784 1.8043 2.87787 2.7506C1.9079 3.69689 1.2191 4.89344 0.887914 6.20745C0.556727 7.52146 0.596105 8.90155 1.00168 10.1945C1.40725 11.4875 2.16316 12.6429 3.18551 13.5323C4.20786 14.4217 5.45667 15.0105 6.79334 15.2333C6.94074 15.2595 7.0921 15.2532 7.23681 15.2148C7.38151 15.1764 7.51606 15.1068 7.63103 15.0109C7.746 14.915 7.83859 14.7951 7.90233 14.6596C7.96607 14.5241 7.99941 14.3763 8.00001 14.2266C7.99717 13.9907 7.9093 13.7637 7.75254 13.5873C7.59578 13.411 7.38065 13.2971 7.14667 13.2666Z",
        fill: "currentColor"
      }
    )
  }
), Nt = a.forwardRef(
  ({
    className: e,
    type: t,
    variant: r,
    size: n,
    isIconButton: o,
    asChild: i = !1,
    LeftIcon: c,
    RightIcon: s,
    isLoading: u,
    htmlType: l = "button",
    children: d,
    disabled: p,
    ...g
  }, h) => {
    const v = p || u, b = (m) => o && u ? /* @__PURE__ */ f(de, {}) : /* @__PURE__ */ N(ge, { children: [
      u ? /* @__PURE__ */ f(de, {}) : c,
      m,
      !u && s
    ] });
    if (i && a.isValidElement(d)) {
      const m = d;
      return /* @__PURE__ */ f(
        yt,
        {
          className: E(
            ue({ type: t, variant: r, size: n, isIconButton: o, className: e }),
            u && "cursor-wait"
          ),
          ref: h,
          "data-slot": "button",
          ...g,
          children: a.cloneElement(m, {
            disabled: v,
            children: b(m.props.children)
          })
        }
      );
    }
    return /* @__PURE__ */ f(
      "button",
      {
        type: l,
        className: E(
          ue({ type: t, variant: r, size: n, isIconButton: o, className: e }),
          u && "cursor-wait"
        ),
        ref: h,
        disabled: v,
        "data-slot": "button",
        ...g,
        children: b(d)
      }
    );
  }
);
Nt.displayName = "Button";
function L(e, t = []) {
  let r = [];
  function n(i, c) {
    const s = a.createContext(c), u = r.length;
    r = [...r, c];
    const l = (p) => {
      const { scope: g, children: h, ...v } = p, b = g?.[e]?.[u] || s, m = a.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ f(b.Provider, { value: m, children: h });
    };
    l.displayName = i + "Provider";
    function d(p, g) {
      const h = g?.[e]?.[u] || s, v = a.useContext(h);
      if (v) return v;
      if (c !== void 0) return c;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [l, d];
  }
  const o = () => {
    const i = r.map((c) => a.createContext(c));
    return function(s) {
      const u = s?.[e] || i;
      return a.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    };
  };
  return o.scopeName = e, [n, St(o, ...t)];
}
function St(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const c = n.reduce((s, { useScope: u, scopeName: l }) => {
        const p = u(i)[`__scope${l}`];
        return { ...s, ...p };
      }, {});
      return a.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function I(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var B = globalThis?.document ? a.useLayoutEffect : () => {
}, kt = a[" useInsertionEffect ".trim().toString()] || B;
function W({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, i, c] = It({
    defaultProp: t,
    onChange: r
  }), s = e !== void 0, u = s ? e : o;
  {
    const d = a.useRef(e !== void 0);
    a.useEffect(() => {
      const p = d.current;
      p !== s && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = s;
    }, [s, n]);
  }
  const l = a.useCallback(
    (d) => {
      if (s) {
        const p = _t(d) ? d(e) : d;
        p !== e && c.current?.(p);
      } else
        i(d);
    },
    [s, e, i, c]
  );
  return [u, l];
}
function It({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = a.useState(e), o = a.useRef(r), i = a.useRef(t);
  return kt(() => {
    i.current = t;
  }, [t]), a.useEffect(() => {
    o.current !== r && (i.current?.(r), o.current = r);
  }, [r, o]), [r, n, i];
}
function _t(e) {
  return typeof e == "function";
}
function te(e) {
  const t = a.useRef({ value: e, previous: e });
  return a.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function re(e) {
  const [t, r] = a.useState(void 0);
  return B(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let c, s;
        if ("borderBoxSize" in i) {
          const u = i.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
          c = l.inlineSize, s = l.blockSize;
        } else
          c = e.offsetWidth, s = e.offsetHeight;
        r({ width: c, height: s });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function Pt(e, t) {
  return a.useReducer((r, n) => t[r][n] ?? r, e);
}
var ne = (e) => {
  const { present: t, children: r } = e, n = At(t), o = typeof r == "function" ? r({ present: n.isPresent }) : a.Children.only(r), i = _(n.ref, Tt(o));
  return typeof r == "function" || n.isPresent ? a.cloneElement(o, { ref: i }) : null;
};
ne.displayName = "Presence";
function At(e) {
  const [t, r] = a.useState(), n = a.useRef(null), o = a.useRef(e), i = a.useRef("none"), c = e ? "mounted" : "unmounted", [s, u] = Pt(c, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return a.useEffect(() => {
    const l = j(n.current);
    i.current = s === "mounted" ? l : "none";
  }, [s]), B(() => {
    const l = n.current, d = o.current;
    if (d !== e) {
      const g = i.current, h = j(l);
      e ? u("MOUNT") : h === "none" || l?.display === "none" ? u("UNMOUNT") : u(d && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), B(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, p = (h) => {
        const b = j(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && b && (u("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, g = (h) => {
        h.target === t && (i.current = j(n.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", p), t.addEventListener("animationend", p), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", p), t.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: a.useCallback((l) => {
      n.current = l ? getComputedStyle(l) : null, r(l);
    }, [])
  };
}
function j(e) {
  return e?.animationName || "none";
}
function Tt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Mt(e) {
  const t = /* @__PURE__ */ Ft(e), r = a.forwardRef((n, o) => {
    const { children: i, ...c } = n, s = a.Children.toArray(i), u = s.find(Ot);
    if (u) {
      const l = u.props.children, d = s.map((p) => p === u ? a.Children.count(l) > 1 ? a.Children.only(null) : a.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...c, ref: o, children: a.isValidElement(l) ? a.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ f(t, { ...c, ref: o, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Ft(e) {
  const t = a.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (a.isValidElement(o)) {
      const c = Dt(o), s = Lt(i, o.props);
      return o.type !== a.Fragment && (s.ref = n ? G(n, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Vt = /* @__PURE__ */ Symbol("radix.slottable");
function Ot(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Vt;
}
function Lt(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
      const u = i(...s);
      return o(...s), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...i } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Dt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var $t = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], A = $t.reduce((e, t) => {
  const r = /* @__PURE__ */ Mt(`Primitive.${t}`), n = a.forwardRef((o, i) => {
    const { asChild: c, ...s } = o, u = c ? r : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ f(u, { ...s, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), H = "Checkbox", [Bt] = L(H), [zt, oe] = Bt(H);
function jt(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: i,
    form: c,
    name: s,
    onCheckedChange: u,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: p
  } = e, [g, h] = W({
    prop: r,
    defaultProp: o ?? !1,
    onChange: u,
    caller: H
  }), [v, b] = a.useState(null), [m, y] = a.useState(null), C = a.useRef(!1), x = v ? !!c || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: g,
    disabled: i,
    setChecked: h,
    control: v,
    setControl: b,
    name: s,
    form: c,
    value: d,
    hasConsumerStoppedPropagationRef: C,
    required: l,
    defaultChecked: M(o) ? !1 : o,
    isFormControl: x,
    bubbleInput: m,
    setBubbleInput: y
  };
  return /* @__PURE__ */ f(
    zt,
    {
      scope: t,
      ...w,
      children: Ut(p) ? p(w) : n
    }
  );
}
var we = "CheckboxTrigger", Re = a.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: i,
      value: c,
      disabled: s,
      checked: u,
      required: l,
      setControl: d,
      setChecked: p,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: h,
      bubbleInput: v
    } = oe(we, e), b = _(o, d), m = a.useRef(u);
    return a.useEffect(() => {
      const y = i?.form;
      if (y) {
        const C = () => p(m.current);
        return y.addEventListener("reset", C), () => y.removeEventListener("reset", C);
      }
    }, [i, p]), /* @__PURE__ */ f(
      A.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": M(u) ? "mixed" : u,
        "aria-required": l,
        "data-state": _e(u),
        "data-disabled": s ? "" : void 0,
        disabled: s,
        value: c,
        ...n,
        ref: b,
        onKeyDown: I(t, (y) => {
          y.key === "Enter" && y.preventDefault();
        }),
        onClick: I(r, (y) => {
          p((C) => M(C) ? !0 : !C), v && h && (g.current = y.isPropagationStopped(), g.current || y.stopPropagation());
        })
      }
    );
  }
);
Re.displayName = we;
var Ee = a.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: c,
      disabled: s,
      value: u,
      onCheckedChange: l,
      form: d,
      ...p
    } = e;
    return /* @__PURE__ */ f(
      jt,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: i,
        disabled: s,
        required: c,
        onCheckedChange: l,
        name: n,
        form: d,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ N(ge, { children: [
          /* @__PURE__ */ f(
            Re,
            {
              ...p,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          g && /* @__PURE__ */ f(
            Ie,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Ee.displayName = H;
var Ne = "CheckboxIndicator", Se = a.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, i = oe(Ne, r);
    return /* @__PURE__ */ f(
      ne,
      {
        present: n || M(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ f(
          A.span,
          {
            "data-state": _e(i.checked),
            "data-disabled": i.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Se.displayName = Ne;
var ke = "CheckboxBubbleInput", Ie = a.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: i,
      defaultChecked: c,
      required: s,
      disabled: u,
      name: l,
      value: d,
      form: p,
      bubbleInput: g,
      setBubbleInput: h
    } = oe(ke, e), v = _(r, h), b = te(i), m = re(n);
    a.useEffect(() => {
      const C = g;
      if (!C) return;
      const x = window.HTMLInputElement.prototype, k = Object.getOwnPropertyDescriptor(
        x,
        "checked"
      ).set, R = !o.current;
      if (b !== i && k) {
        const T = new Event("click", { bubbles: R });
        C.indeterminate = M(i), k.call(C, M(i) ? !1 : i), C.dispatchEvent(T);
      }
    }, [g, b, i, o]);
    const y = a.useRef(M(i) ? !1 : i);
    return /* @__PURE__ */ f(
      A.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: c ?? y.current,
        required: s,
        disabled: u,
        name: l,
        value: d,
        form: p,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...m,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0,
          // We transform because the input is absolutely positioned but we have
          // rendered it **after** the button. This pulls it back to sit on top
          // of the button.
          transform: "translateX(-100%)"
        }
      }
    );
  }
);
Ie.displayName = ke;
function Ut(e) {
  return typeof e == "function";
}
function M(e) {
  return e === "indeterminate";
}
function _e(e) {
  return M(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function rn({
  className: e,
  label: t,
  secondaryLabel: r,
  id: n,
  ...o
}) {
  const i = n ?? a.useId();
  return /* @__PURE__ */ N("div", { className: "flex", children: [
    /* @__PURE__ */ f(
      Ee,
      {
        id: i,
        "data-slot": "checkbox",
        className: E(
          "peer border-input dark:bg-gi-primary/30 data-[state=checked]:bg-gi-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-gi-primary data-[state=checked]:border-gi-dark-ash focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-gi-red/20 dark:aria-invalid:ring-gi-red/40 aria-invalid:border-gi-red size-3.5 shrink-0 rounded-xs border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...o,
        children: /* @__PURE__ */ f(
          Se,
          {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none"
          }
        )
      }
    ),
    /* @__PURE__ */ N("div", { className: "flex flex-col ml-2", children: [
      /* @__PURE__ */ f(
        "label",
        {
          htmlFor: i,
          className: "font-medium text-sm leading-3.5 text-gi-primary mb-1.5",
          children: t
        }
      ),
      r && /* @__PURE__ */ f("span", { className: "text-gi-gray text-sm leading-5", children: r })
    ] })
  ] });
}
const Gt = P(
  "flex items-center align-middle w-full text-xs font-bold leading-[1.2]",
  {
    variants: {
      variant: {
        default: "text-gi-dark-gray",
        info: "text-gi-blue",
        error: "text-gi-red",
        warning: "text-gi-orange",
        success: "text-gi-green"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Wt = P(
  "flex items-center justify-center border rounded-full h-8 w-8 mr-2 ",
  {
    variants: {
      variant: {
        default: "border-gi-dark-gray/10",
        info: "border-gi-blue/10",
        error: "border-gi-red/10",
        warning: "border-gi-orange/10",
        success: "border-gi-green/10"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), fe = {
  default: Q,
  info: Q,
  success: be,
  warning: ye,
  error: Ce
};
function nn({
  className: e,
  variant: t,
  children: r
}) {
  const n = fe[t ?? "default"] ?? fe.default;
  return /* @__PURE__ */ N(
    "div",
    {
      "data-slot": "info-message",
      className: E(Gt({ variant: t, className: e })),
      children: [
        /* @__PURE__ */ f("div", { className: Wt({ variant: t }), children: /* @__PURE__ */ f(n, {}) }),
        /* @__PURE__ */ f("div", { children: r })
      ]
    }
  );
}
const Ht = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Kt = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), pe = (e) => {
  const t = Kt(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Pe = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), Zt = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var qt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const Xt = O(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: i,
    iconNode: c,
    ...s
  }, u) => J(
    "svg",
    {
      ref: u,
      ...qt,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Pe("lucide", o),
      ...!i && !Zt(s) && { "aria-hidden": "true" },
      ...s
    },
    [
      ...c.map(([l, d]) => J(l, d)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
const Ae = (e, t) => {
  const r = O(
    ({ className: n, ...o }, i) => J(Xt, {
      ref: i,
      iconNode: t,
      className: Pe(
        `lucide-${Ht(pe(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = pe(e), r;
};
const Yt = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Jt = Ae("circle", Yt);
const Qt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], er = Ae("x", Qt), tr = P(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0"
      }
    }
  }
), rr = P(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95"
      }
    }
  }
), nr = P("flex items-start justify-between text-gi-primary"), or = P("flex justify-end gap-3 mt-6");
function on({
  title: e,
  description: t,
  children: r,
  actions: n,
  isOpen: o,
  isClosable: i = !0,
  isCloseOnOverlayClick: c = !0,
  onClose: s,
  className: u,
  dataTestId: l,
  ...d
}) {
  const p = ie(null), g = ie(null), h = it(), [v, b] = st(o);
  X(() => {
    o && b(!0);
  }, [o]);
  const m = (y) => {
    y.target === y.currentTarget && (o || b(!1));
  };
  return X(() => {
    if (o)
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = "";
      };
  }, [o]), X(() => {
    if (!o || !v) return;
    const y = p.current;
    g.current = document.activeElement;
    const C = y.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ), x = C[0], w = C[C.length - 1];
    x?.focus();
    const k = (R) => {
      if (R.key === "Escape" && i) {
        s();
        return;
      }
      if (R.key === "Tab") {
        if (C.length === 0) {
          R.preventDefault(), y.focus();
          return;
        }
        R.shiftKey ? document.activeElement === x && (R.preventDefault(), w?.focus()) : document.activeElement === w && (R.preventDefault(), x?.focus());
      }
    };
    return document.addEventListener("keydown", k), () => {
      document.removeEventListener("keydown", k), g.current?.focus();
    };
  }, [o, v, i, s]), v ? /* @__PURE__ */ f(
    "div",
    {
      className: tr({ state: o ? "open" : "closed" }),
      onTransitionEnd: m,
      onClick: () => {
        c && i && s();
      },
      children: /* @__PURE__ */ N(
        "div",
        {
          ref: p,
          ...d,
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": h,
          tabIndex: -1,
          "data-testid": l,
          className: E(
            rr({ state: o ? "open" : "closed" }),
            u
          ),
          onClick: (y) => {
            y.stopPropagation(), d.onClick?.(y);
          },
          children: [
            /* @__PURE__ */ N("div", { className: nr(), children: [
              /* @__PURE__ */ N("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ f("h2", { id: h, className: "font-semibold break-words", children: e }),
                t && /* @__PURE__ */ f("p", { className: "text-[14px] mt-2 break-words text-gi-gray", children: t })
              ] }),
              i && /* @__PURE__ */ f(
                "button",
                {
                  type: "button",
                  onClick: s,
                  "aria-label": "Close modal",
                  className: "flex items-center justify-center size-8 rounded-full shrink-0 transition hover:bg-gray-100",
                  children: /* @__PURE__ */ f(er, { className: "size-4" })
                }
              )
            ] }),
            r && /* @__PURE__ */ f("div", { className: "mt-4 break-words", children: r }),
            n && /* @__PURE__ */ f("div", { className: or(), children: n })
          ]
        }
      )
    }
  ) : null;
}
const ar = P(
  "w-full overflow-hidden rounded-full bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-2",
        regular: "h-4"
      }
    },
    defaultVariants: {
      size: "regular"
    }
  }
), ir = P(
  "h-full transition-[width] duration-300 ease rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gi-primary",
        info: "bg-gi-blue",
        success: "bg-gi-green",
        warning: "bg-gi-orange",
        error: "bg-gi-red"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function an({
  className: e,
  value: t,
  size: r,
  variant: n,
  dataTestId: o,
  ...i
}) {
  const c = Math.min(100, Math.max(0, t));
  return /* @__PURE__ */ f(
    "div",
    {
      "data-slot": "progress-bar",
      "data-test-id": o,
      className: E(ar({ size: r, className: e })),
      role: "progressbar",
      "aria-valuenow": c,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      ...i,
      children: /* @__PURE__ */ f(
        "div",
        {
          className: ir({ variant: n }),
          style: { width: `${c}%` }
        }
      )
    }
  );
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ sr(e), r = a.forwardRef((n, o) => {
    const { children: i, ...c } = n, s = a.Children.toArray(i), u = s.find(lr);
    if (u) {
      const l = u.props.children, d = s.map((p) => p === u ? a.Children.count(l) > 1 ? a.Children.only(null) : a.isValidElement(l) ? l.props.children : null : p);
      return /* @__PURE__ */ f(t, { ...c, ref: o, children: a.isValidElement(l) ? a.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ f(t, { ...c, ref: o, children: i });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  const t = a.forwardRef((r, n) => {
    const { children: o, ...i } = r;
    if (a.isValidElement(o)) {
      const c = dr(o), s = ur(i, o.props);
      return o.type !== a.Fragment && (s.ref = n ? G(n, c) : c), a.cloneElement(o, s);
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var cr = /* @__PURE__ */ Symbol("radix.slottable");
function lr(e) {
  return a.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === cr;
}
function ur(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? o && i ? r[n] = (...s) => {
      const u = i(...s);
      return o(...s), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...i } : n === "className" && (r[n] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function dr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function fr(e) {
  const t = e + "CollectionProvider", [r, n] = L(t), [o, i] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (b) => {
    const { scope: m, children: y } = b, C = V.useRef(null), x = V.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ f(o, { scope: m, itemMap: x, collectionRef: C, children: y });
  };
  c.displayName = t;
  const s = e + "CollectionSlot", u = /* @__PURE__ */ me(s), l = V.forwardRef(
    (b, m) => {
      const { scope: y, children: C } = b, x = i(s, y), w = _(m, x.collectionRef);
      return /* @__PURE__ */ f(u, { ref: w, children: C });
    }
  );
  l.displayName = s;
  const d = e + "CollectionItemSlot", p = "data-radix-collection-item", g = /* @__PURE__ */ me(d), h = V.forwardRef(
    (b, m) => {
      const { scope: y, children: C, ...x } = b, w = V.useRef(null), k = _(m, w), R = i(d, y);
      return V.useEffect(() => (R.itemMap.set(w, { ref: w, ...x }), () => {
        R.itemMap.delete(w);
      })), /* @__PURE__ */ f(g, { [p]: "", ref: k, children: C });
    }
  );
  h.displayName = d;
  function v(b) {
    const m = i(e + "CollectionConsumer", b);
    return V.useCallback(() => {
      const C = m.collectionRef.current;
      if (!C) return [];
      const x = Array.from(C.querySelectorAll(`[${p}]`));
      return Array.from(m.itemMap.values()).sort(
        (R, T) => x.indexOf(R.ref.current) - x.indexOf(T.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: c, Slot: l, ItemSlot: h },
    v,
    n
  ];
}
var pr = a[" useId ".trim().toString()] || (() => {
}), mr = 0;
function gr(e) {
  const [t, r] = a.useState(pr());
  return B(() => {
    r((n) => n ?? String(mr++));
  }, [e]), t ? `radix-${t}` : "";
}
function hr(e) {
  const t = a.useRef(e);
  return a.useEffect(() => {
    t.current = e;
  }), a.useMemo(() => (...r) => t.current?.(...r), []);
}
var vr = a.createContext(void 0);
function Te(e) {
  const t = a.useContext(vr);
  return e || t || "ltr";
}
var Y = "rovingFocusGroup.onEntryFocus", br = { bubbles: !1, cancelable: !0 }, z = "RovingFocusGroup", [ee, Me, yr] = fr(z), [Cr, Fe] = L(
  z,
  [yr]
), [xr, wr] = Cr(z), Ve = a.forwardRef(
  (e, t) => /* @__PURE__ */ f(ee.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(ee.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ f(Rr, { ...e, ref: t }) }) })
);
Ve.displayName = z;
var Rr = a.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: i,
    currentTabStopId: c,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: u,
    onEntryFocus: l,
    preventScrollOnEntryFocus: d = !1,
    ...p
  } = e, g = a.useRef(null), h = _(t, g), v = Te(i), [b, m] = W({
    prop: c,
    defaultProp: s ?? null,
    onChange: u,
    caller: z
  }), [y, C] = a.useState(!1), x = hr(l), w = Me(r), k = a.useRef(!1), [R, T] = a.useState(0);
  return a.useEffect(() => {
    const S = g.current;
    if (S)
      return S.addEventListener(Y, x), () => S.removeEventListener(Y, x);
  }, [x]), /* @__PURE__ */ f(
    xr,
    {
      scope: r,
      orientation: n,
      dir: v,
      loop: o,
      currentTabStopId: b,
      onItemFocus: a.useCallback(
        (S) => m(S),
        [m]
      ),
      onItemShiftTab: a.useCallback(() => C(!0), []),
      onFocusableItemAdd: a.useCallback(
        () => T((S) => S + 1),
        []
      ),
      onFocusableItemRemove: a.useCallback(
        () => T((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ f(
        A.div,
        {
          tabIndex: y || R === 0 ? -1 : 0,
          "data-orientation": n,
          ...p,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: I(e.onMouseDown, () => {
            k.current = !0;
          }),
          onFocus: I(e.onFocus, (S) => {
            const q = !k.current;
            if (S.target === S.currentTarget && q && !y) {
              const D = new CustomEvent(Y, br);
              if (S.currentTarget.dispatchEvent(D), !D.defaultPrevented) {
                const $ = w().filter((F) => F.focusable), nt = $.find((F) => F.active), ot = $.find((F) => F.id === b), at = [nt, ot, ...$].filter(
                  Boolean
                ).map((F) => F.ref.current);
                De(at, d);
              }
            }
            k.current = !1;
          }),
          onBlur: I(e.onBlur, () => C(!1))
        }
      )
    }
  );
}), Oe = "RovingFocusGroupItem", Le = a.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: i,
      children: c,
      ...s
    } = e, u = gr(), l = i || u, d = wr(Oe, r), p = d.currentTabStopId === l, g = Me(r), { onFocusableItemAdd: h, onFocusableItemRemove: v, currentTabStopId: b } = d;
    return a.useEffect(() => {
      if (n)
        return h(), () => v();
    }, [n, h, v]), /* @__PURE__ */ f(
      ee.ItemSlot,
      {
        scope: r,
        id: l,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ f(
          A.span,
          {
            tabIndex: p ? 0 : -1,
            "data-orientation": d.orientation,
            ...s,
            ref: t,
            onMouseDown: I(e.onMouseDown, (m) => {
              n ? d.onItemFocus(l) : m.preventDefault();
            }),
            onFocus: I(e.onFocus, () => d.onItemFocus(l)),
            onKeyDown: I(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const y = Sr(m, d.orientation, d.dir);
              if (y !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let x = g().filter((w) => w.focusable).map((w) => w.ref.current);
                if (y === "last") x.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && x.reverse();
                  const w = x.indexOf(m.currentTarget);
                  x = d.loop ? kr(x, w + 1) : x.slice(w + 1);
                }
                setTimeout(() => De(x));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: p, hasTabStop: b != null }) : c
          }
        )
      }
    );
  }
);
Le.displayName = Oe;
var Er = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Nr(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Sr(e, t, r) {
  const n = Nr(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return Er[n];
}
function De(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function kr(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Ir = Ve, _r = Le, ae = "Radio", [Pr, $e] = L(ae), [Ar, Tr] = Pr(ae), Be = a.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: i,
      disabled: c,
      value: s = "on",
      onCheck: u,
      form: l,
      ...d
    } = e, [p, g] = a.useState(null), h = _(t, (m) => g(m)), v = a.useRef(!1), b = p ? l || !!p.closest("form") : !0;
    return /* @__PURE__ */ N(Ar, { scope: r, checked: o, disabled: c, children: [
      /* @__PURE__ */ f(
        A.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Ge(o),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: s,
          ...d,
          ref: h,
          onClick: I(e.onClick, (m) => {
            o || u?.(), b && (v.current = m.isPropagationStopped(), v.current || m.stopPropagation());
          })
        }
      ),
      b && /* @__PURE__ */ f(
        Ue,
        {
          control: p,
          bubbles: !v.current,
          name: n,
          value: s,
          checked: o,
          required: i,
          disabled: c,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Be.displayName = ae;
var ze = "RadioIndicator", je = a.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, i = Tr(ze, r);
    return /* @__PURE__ */ f(ne, { present: n || i.checked, children: /* @__PURE__ */ f(
      A.span,
      {
        "data-state": Ge(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
je.displayName = ze;
var Mr = "RadioBubbleInput", Ue = a.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const c = a.useRef(null), s = _(c, i), u = te(r), l = re(t);
    return a.useEffect(() => {
      const d = c.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (u !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(d, r), d.dispatchEvent(v);
      }
    }, [u, r, n]), /* @__PURE__ */ f(
      A.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ue.displayName = Mr;
function Ge(e) {
  return e ? "checked" : "unchecked";
}
var Fr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], K = "RadioGroup", [Vr] = L(K, [
  Fe,
  $e
]), We = Fe(), He = $e(), [Or, Lr] = Vr(K), Ke = a.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: i,
      required: c = !1,
      disabled: s = !1,
      orientation: u,
      dir: l,
      loop: d = !0,
      onValueChange: p,
      ...g
    } = e, h = We(r), v = Te(l), [b, m] = W({
      prop: i,
      defaultProp: o ?? null,
      onChange: p,
      caller: K
    });
    return /* @__PURE__ */ f(
      Or,
      {
        scope: r,
        name: n,
        required: c,
        disabled: s,
        value: b,
        onValueChange: m,
        children: /* @__PURE__ */ f(
          Ir,
          {
            asChild: !0,
            ...h,
            orientation: u,
            dir: v,
            loop: d,
            children: /* @__PURE__ */ f(
              A.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": u,
                "data-disabled": s ? "" : void 0,
                dir: v,
                ...g,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Ke.displayName = K;
var Ze = "RadioGroupItem", qe = a.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, i = Lr(Ze, r), c = i.disabled || n, s = We(r), u = He(r), l = a.useRef(null), d = _(t, l), p = i.value === o.value, g = a.useRef(!1);
    return a.useEffect(() => {
      const h = (b) => {
        Fr.includes(b.key) && (g.current = !0);
      }, v = () => g.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ f(
      _r,
      {
        asChild: !0,
        ...s,
        focusable: !c,
        active: p,
        children: /* @__PURE__ */ f(
          Be,
          {
            disabled: c,
            required: i.required,
            checked: p,
            ...u,
            ...o,
            name: i.name,
            ref: d,
            onCheck: () => i.onValueChange(o.value),
            onKeyDown: I((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: I(o.onFocus, () => {
              g.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
qe.displayName = Ze;
var Dr = "RadioGroupIndicator", Xe = a.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = He(r);
    return /* @__PURE__ */ f(je, { ...o, ...n, ref: t });
  }
);
Xe.displayName = Dr;
var Ye = Ke, $r = qe, Br = Xe;
const zr = a.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f(
  Ye,
  {
    "data-slot": "radio-group",
    orientation: t,
    ref: n,
    className: E(
      "grid gap-2 text-gi-primary",
      t === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1",
      e
    ),
    ...r
  }
));
zr.displayName = Ye.displayName;
function sn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    $r,
    {
      "data-slot": "radio-group-item",
      className: E(
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        Br,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ f(
            Jt,
            {
              className: E(
                "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
                "fill-gi-primary text-gi-primary"
                // Forces both the inside and the stroke
              ),
              strokeWidth: 1
            }
          )
        }
      )
    }
  );
}
var Z = "Switch", [jr] = L(Z), [Ur, Gr] = jr(Z), Je = a.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: i,
      required: c,
      disabled: s,
      value: u = "on",
      onCheckedChange: l,
      form: d,
      ...p
    } = e, [g, h] = a.useState(null), v = _(t, (x) => h(x)), b = a.useRef(!1), m = g ? d || !!g.closest("form") : !0, [y, C] = W({
      prop: o,
      defaultProp: i ?? !1,
      onChange: l,
      caller: Z
    });
    return /* @__PURE__ */ N(Ur, { scope: r, checked: y, disabled: s, children: [
      /* @__PURE__ */ f(
        A.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": y,
          "aria-required": c,
          "data-state": rt(y),
          "data-disabled": s ? "" : void 0,
          disabled: s,
          value: u,
          ...p,
          ref: v,
          onClick: I(e.onClick, (x) => {
            C((w) => !w), m && (b.current = x.isPropagationStopped(), b.current || x.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ f(
        tt,
        {
          control: g,
          bubbles: !b.current,
          name: n,
          value: u,
          checked: y,
          required: c,
          disabled: s,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Je.displayName = Z;
var Qe = "SwitchThumb", et = a.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Gr(Qe, r);
    return /* @__PURE__ */ f(
      A.span,
      {
        "data-state": rt(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
et.displayName = Qe;
var Wr = "SwitchBubbleInput", tt = a.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, i) => {
    const c = a.useRef(null), s = _(c, i), u = te(r), l = re(t);
    return a.useEffect(() => {
      const d = c.current;
      if (!d) return;
      const p = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        p,
        "checked"
      ).set;
      if (u !== r && h) {
        const v = new Event("click", { bubbles: n });
        h.call(d, r), d.dispatchEvent(v);
      }
    }, [u, r, n]), /* @__PURE__ */ f(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: s,
        style: {
          ...o.style,
          ...l,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
tt.displayName = Wr;
function rt(e) {
  return e ? "checked" : "unchecked";
}
var Hr = Je, Kr = et;
function cn({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ f(
    Hr,
    {
      "data-slot": "switch",
      className: E(
        "peer data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ f(
        Kr,
        {
          "data-slot": "switch-thumb",
          className: E(
            "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
          )
        }
      )
    }
  );
}
const Zr = P(
  "px-3 py-2 w-[346px] h-[122px] text-gi-primary rounded-3xl border-[1px] ",
  {
    variants: {
      variant: {
        default: "border-gi-primary/10 hover:border-gi-primary/20 focus:border-gi-primary/20 focus:outline-1 duration-300 ease-in-out",
        disabled: "focus:ring-0 focus:outline-none text-gi-gray cursor-not-allowed",
        error: "border-gi-red focus:ring-0 focus:outline-none"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), qr = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gi-primary/50"
};
function ln({
  className: e,
  isError: t,
  label: r,
  disabled: n,
  errorText: o,
  helper: i,
  isRequired: c,
  value: s,
  onChange: u,
  characterLimit: l,
  characterLimitVisibility: d,
  dataTestId: p,
  ...g
}) {
  const h = !!(t && o), v = h ? o : i, b = typeof l == "number", m = b ? l : void 0, y = s ?? "", C = b && typeof m == "number" ? y.slice(0, m) : y, x = C.length, w = h, k = !!d && b, R = n ? "disabled" : t ? "error" : "default";
  function T(q) {
    if (n)
      return;
    const D = q.target.value;
    if (b && typeof l == "number") {
      const $ = D.slice(0, l);
      u($);
      return;
    }
    u(D);
  }
  const S = E(
    "text-[14px]",
    w ? "text-gi-red" : "text-gi-primary/50"
  );
  return /* @__PURE__ */ N("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ N("p", { className: E("font-bold", qr[R]), children: [
      r,
      c && /* @__PURE__ */ f("span", { className: "text-gi-red ml-1 size-4", children: "*" }),
      ""
    ] }),
    /* @__PURE__ */ f(
      "textarea",
      {
        disabled: n,
        value: C,
        required: c,
        onChange: T,
        maxLength: b ? l : void 0,
        "data-slot": "textarea",
        "data-test-id": p,
        className: E(
          Zr({
            variant: R,
            className: e
          })
        ),
        ...g
      }
    ),
    /* @__PURE__ */ N("div", { className: "flex justify-between items-start text-[14px] mt-1 min-h-4", children: [
      /* @__PURE__ */ f("p", { className: S, children: v }),
      k ? /* @__PURE__ */ N("p", { className: "text-gi-primary/50 text-[14px]", children: [
        x,
        "/",
        m
      ] }) : null
    ] })
  ] });
}
export {
  tn as Badge,
  Nt as Button,
  rn as Checkbox,
  nn as InfoMessage,
  on as Modal,
  an as ProgressBar,
  zr as RadioGroup,
  sn as RadioGroupItem,
  cn as Switch,
  ln as TextArea,
  pt as badgeVariants,
  ue as buttonVariants,
  Gt as infoMessageVariants
};
