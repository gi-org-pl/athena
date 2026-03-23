import { jsx as p, jsxs as E, Fragment as ge } from "react/jsx-runtime";
import * as i from "react";
import O, { forwardRef as F, createElement as Q } from "react";
import { twMerge as ot } from "tailwind-merge";
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
const se = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, ae = ve, B = (e, t) => (r) => {
  var n;
  if (t?.variants == null) return ae(e, r?.class, r?.className);
  const { variants: o, defaultVariants: s } = t, l = Object.keys(o).map((c) => {
    const d = r?.[c], f = s?.[c];
    if (d === null) return null;
    const g = se(d) || se(f);
    return o[c][g];
  }), a = r && Object.entries(r).reduce((c, d) => {
    let [f, g] = d;
    return g === void 0 || (c[f] = g), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: f, className: g, ...h } = d;
    return Object.entries(h).every((b) => {
      let [v, m] = b;
      return Array.isArray(m) ? m.includes({
        ...s,
        ...a
      }[v]) : {
        ...s,
        ...a
      }[v] === m;
    }) ? [
      ...c,
      f,
      g
    ] : c;
  }, []);
  return ae(e, l, u, r?.class, r?.className);
};
const it = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), st = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, r, n) => n ? n.toUpperCase() : r.toLowerCase()
), ce = (e) => {
  const t = st(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, be = (...e) => e.filter((t, r, n) => !!t && t.trim() !== "" && n.indexOf(t) === r).join(" ").trim(), at = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var ct = {
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
const lt = F(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: o = "",
    children: s,
    iconNode: l,
    ...a
  }, u) => Q(
    "svg",
    {
      ref: u,
      ...ct,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: be("lucide", o),
      ...!s && !at(a) && { "aria-hidden": "true" },
      ...a
    },
    [
      ...l.map(([c, d]) => Q(c, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
const W = (e, t) => {
  const r = F(
    ({ className: n, ...o }, s) => Q(lt, {
      ref: s,
      iconNode: t,
      className: be(
        `lucide-${it(ce(e))}`,
        `lucide-${e}`,
        n
      ),
      ...o
    })
  );
  return r.displayName = ce(e), r;
};
const ut = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], dt = W("check", ut);
const ft = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], pt = W("circle", ft);
const mt = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]], le = W("loader-circle", mt);
const gt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], ht = W("x", gt), vt = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ i.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ i.createElement("title", { id: t }, e) : null, /* @__PURE__ */ i.createElement("path", { d: "M12.6166 0.17915C13.0316 0.479059 13.1244 1.05581 12.8226 1.46819L5.39385 11.619C5.23424 11.8381 4.98758 11.9737 4.71481 11.9968C4.44203 12.0198 4.17796 11.9189 3.98644 11.7286L0.27205 8.03736C-0.0906834 7.6769 -0.0906834 7.0915 0.27205 6.73103C0.634784 6.37056 1.22386 6.37056 1.5866 6.73103L4.53199 9.65803L11.3224 0.381012C11.6242 -0.0313641 12.2045 -0.123644 12.6195 0.176266L12.6166 0.17915Z", fill: "currentColor" })), Ce = F(vt), bt = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ i.createElement("svg", { width: 5, height: 12, viewBox: "0 0 5 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ i.createElement("title", { id: t }, e) : null, /* @__PURE__ */ i.createElement("g", { clipPath: "url(#clip0_38_51)" }, /* @__PURE__ */ i.createElement("path", { d: "M0.46875 9.94287H0.9375V6.55713H0.46875C0.209859 6.55713 0 6.34727 0 6.08838V4.96875C0 4.70986 0.209859 4.5 0.46875 4.5H3.09375C3.35264 4.5 3.5625 4.70986 3.5625 4.96875V9.94287H4.03125C4.29014 9.94287 4.5 10.1527 4.5 10.4116V11.5312C4.5 11.7901 4.29014 12 4.03125 12H0.46875C0.209859 12 0 11.7901 0 11.5312V10.4116C0 10.1527 0.209859 9.94287 0.46875 9.94287ZM2.25 0C1.31801 0 0.5625 0.755508 0.5625 1.6875C0.5625 2.61949 1.31801 3.375 2.25 3.375C3.18199 3.375 3.9375 2.61949 3.9375 1.6875C3.9375 0.755508 3.18197 0 2.25 0Z", fill: "currentColor" })), /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "clip0_38_51" }, /* @__PURE__ */ i.createElement("rect", { width: 4.5, height: 12, fill: "white" })))), G = F(bt), Ct = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ i.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ i.createElement("title", { id: t }, e) : null, /* @__PURE__ */ i.createElement("path", { d: "M6.40052 0C6.76802 0 7.10552 0.2025 7.28052 0.525L12.6805 10.525C12.848 10.835 12.8405 11.21 12.6605 11.5125C12.4805 11.815 12.153 12 11.8005 12H1.00052C0.648017 12 0.320516 11.815 0.140516 11.5125C-0.0394836 11.21 -0.0469834 10.835 0.120517 10.525L5.52052 0.525C5.69552 0.2025 6.03302 0 6.40052 0ZM6.40052 8.8C5.95802 8.8 5.60052 9.1575 5.60052 9.6C5.60052 10.0425 5.95802 10.4 6.40052 10.4C6.84302 10.4 7.20052 10.0425 7.20052 9.6C7.20052 9.1575 6.84302 8.8 6.40052 8.8ZM6.40052 4C5.94552 4 5.58302 4.3875 5.61552 4.8425L5.80052 7.4425C5.82302 7.755 6.08552 8 6.39802 8C6.71302 8 6.97302 7.7575 6.99552 7.4425L7.18052 4.8425C7.21302 4.3875 6.85302 4 6.39552 4H6.40052Z", fill: "currentColor" })), ye = F(Ct), yt = ({
  title: e,
  titleId: t,
  ...r
}, n) => /* @__PURE__ */ i.createElement("svg", { width: 11, height: 12, viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: n, "aria-labelledby": t, ...r }, e ? /* @__PURE__ */ i.createElement("title", { id: t }, e) : null, /* @__PURE__ */ i.createElement("path", { d: "M10.7875 1.40663C11.1112 1.04237 11.0596 0.501342 10.6701 0.198688C10.2805 -0.103966 9.70194 -0.0557555 9.37828 0.3085L5.5 4.66082L1.62172 0.3085C1.29806 -0.0557555 0.719466 -0.103966 0.32992 0.198688C-0.0596265 0.501342 -0.111184 1.04237 0.212483 1.40663L4.30558 6L0.212483 10.5934C-0.111184 10.9576 -0.0596265 11.4987 0.32992 11.8013C0.719466 12.104 1.29806 12.0558 1.62172 11.6915L5.5 7.33918L9.37828 11.6915C9.70194 12.0558 10.2805 12.104 10.6701 11.8013C11.0596 11.4987 11.1112 10.9576 10.7875 10.5934L6.69442 6L10.7875 1.40663Z", fill: "currentColor" })), xe = F(yt);
function S(...e) {
  return ot(ve(e));
}
const xt = B(
  "inline-flex items-center gap-1.5 rounded-md font-medium [&_svg]:shrink-0 [&_svg]:size-[1em] [&_svg]:[color:inherit]",
  {
    variants: {
      type: {
        default: "bg-gi-dark-gray/10 text-gi-dark-gray border border-gi-dark-gray/10",
        info: "bg-gi-blue/10 text-gi-blue border border-gi-blue/10",
        success: "bg-gi-green/10 text-gi-green border border-gi-green/10",
        warning: "bg-gi-orange/10 text-gi-orange border border-gi-orange/10",
        error: "bg-gi-red/10 text-gi-red border border-gi-red/10"
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "bg-transparent",
        ghost: "bg-transparent border-transparent"
      },
      size: {
        regular: "h-7 px-2.5 text-xs gap-1.5",
        small: "h-5 px-2 text-[10px] gap-1 [&_svg]:size-3",
        big: "h-8 px-3 text-sm gap-2 [&_svg]:size-4"
      }
    },
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular"
    }
  }
), ue = {
  default: G,
  info: G,
  success: Ce,
  warning: ye,
  error: xe
};
function Hr({
  className: e,
  type: t,
  variant: r,
  size: n,
  children: o,
  LeftIcon: s,
  isDismissible: l = !1,
  onDismiss: a,
  dataTestId: u,
  ...c
}) {
  const d = t ? ue[t] : ue.default, f = "size-[1em] [color:inherit]", g = s ? i.isValidElement(s) ? i.cloneElement(
    s,
    {
      className: S(
        s.props?.className,
        f
      )
    }
  ) : s : /* @__PURE__ */ p("span", { className: f, children: /* @__PURE__ */ p(d, {}) });
  return /* @__PURE__ */ E(
    "span",
    {
      "data-slot": "badge",
      ...u && { "data-test-id": u },
      className: S(xt({ type: t, variant: r, size: n, className: e })),
      ...c,
      children: [
        g,
        o,
        l && /* @__PURE__ */ p(
          "button",
          {
            type: "button",
            "aria-label": "Dismiss",
            onClick: a,
            className: "ml-0.5 -mr-0.5 flex items-center justify-center rounded p-0.5 transition-[filter] hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 text-inherit",
            children: /* @__PURE__ */ p(ht, { className: "size-3.5", strokeWidth: 2.5 })
          }
        )
      ]
    }
  );
}
function de(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function H(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((o) => {
      const s = de(o, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == "function" ? s() : de(e[o], null);
        }
      };
  };
}
function _(...e) {
  return i.useCallback(H(...e), e);
}
var wt = /* @__PURE__ */ Symbol.for("react.lazy"), j = i[" use ".trim().toString()];
function Rt(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function we(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === wt && "_payload" in e && Rt(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Et(e) {
  const t = /* @__PURE__ */ kt(e), r = i.forwardRef((n, o) => {
    let { children: s, ...l } = n;
    we(s) && typeof j == "function" && (s = j(s._payload));
    const a = i.Children.toArray(s), u = a.find(It);
    if (u) {
      const c = u.props.children, d = a.map((f) => f === u ? i.Children.count(c) > 1 ? i.Children.only(null) : i.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...l, ref: o, children: i.isValidElement(c) ? i.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...l, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
var St = /* @__PURE__ */ Et("Slot");
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = i.forwardRef((r, n) => {
    let { children: o, ...s } = r;
    if (we(o) && typeof j == "function" && (o = j(o._payload)), i.isValidElement(o)) {
      const l = Pt(o), a = _t(s, o.props);
      return o.type !== i.Fragment && (a.ref = n ? H(n, l) : l), i.cloneElement(o, a);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Nt = /* @__PURE__ */ Symbol("radix.slottable");
function It(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Nt;
}
function _t(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const u = s(...a);
      return o(...a), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Pt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const fe = B(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        danger: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10"
      },
      isIconButton: {
        true: "p-0"
      }
    },
    compoundVariants: [
      {
        isIconButton: !0,
        size: "default",
        className: "w-10 h-10"
      },
      {
        isIconButton: !0,
        size: "sm",
        className: "w-8 h-8"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), At = i.forwardRef(
  ({
    className: e,
    variant: t,
    size: r,
    isIconButton: n,
    asChild: o = !1,
    leftIcon: s,
    rightIcon: l,
    isLoading: a,
    children: u,
    disabled: c,
    ...d
  }, f) => {
    const g = c || a;
    if (o && i.isValidElement(u)) {
      const h = u;
      return /* @__PURE__ */ p(
        St,
        {
          className: S(
            fe({ variant: t, size: r, isIconButton: n, className: e }),
            a && "opacity-70 cursor-wait"
          ),
          ref: f,
          "data-slot": "button",
          ...d,
          children: i.cloneElement(h, {
            disabled: g,
            children: /* @__PURE__ */ E(ge, { children: [
              a ? /* @__PURE__ */ p(le, { className: "animate-spin" }) : s,
              h.props.children,
              !a && l
            ] })
          })
        }
      );
    }
    return /* @__PURE__ */ E(
      "button",
      {
        className: S(
          fe({ variant: t, size: r, isIconButton: n, className: e }),
          a && "opacity-70 cursor-wait"
        ),
        ref: f,
        disabled: g,
        "data-slot": "button",
        ...d,
        children: [
          a ? /* @__PURE__ */ p(le, { className: "animate-spin" }) : s,
          u,
          !a && l
        ]
      }
    );
  }
);
At.displayName = "Button";
function V(e, t = []) {
  let r = [];
  function n(s, l) {
    const a = i.createContext(l), u = r.length;
    r = [...r, l];
    const c = (f) => {
      const { scope: g, children: h, ...b } = f, v = g?.[e]?.[u] || a, m = i.useMemo(() => b, Object.values(b));
      return /* @__PURE__ */ p(v.Provider, { value: m, children: h });
    };
    c.displayName = s + "Provider";
    function d(f, g) {
      const h = g?.[e]?.[u] || a, b = i.useContext(h);
      if (b) return b;
      if (l !== void 0) return l;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [c, d];
  }
  const o = () => {
    const s = r.map((l) => i.createContext(l));
    return function(a) {
      const u = a?.[e] || s;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: u } }),
        [a, u]
      );
    };
  };
  return o.scopeName = e, [n, Tt(o, ...t)];
}
function Tt(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const l = n.reduce((a, { useScope: u, scopeName: c }) => {
        const f = u(s)[`__scope${c}`];
        return { ...a, ...f };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: l }), [l]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function k(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(o) {
    if (e?.(o), r === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var L = globalThis?.document ? i.useLayoutEffect : () => {
}, Mt = i[" useInsertionEffect ".trim().toString()] || L;
function K({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [o, s, l] = Ot({
    defaultProp: t,
    onChange: r
  }), a = e !== void 0, u = a ? e : o;
  {
    const d = i.useRef(e !== void 0);
    i.useEffect(() => {
      const f = d.current;
      f !== a && console.warn(
        `${n} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = a;
    }, [a, n]);
  }
  const c = i.useCallback(
    (d) => {
      if (a) {
        const f = Ft(d) ? d(e) : d;
        f !== e && l.current?.(f);
      } else
        s(d);
    },
    [a, e, s, l]
  );
  return [u, c];
}
function Ot({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = i.useState(e), o = i.useRef(r), s = i.useRef(t);
  return Mt(() => {
    s.current = t;
  }, [t]), i.useEffect(() => {
    o.current !== r && (s.current?.(r), o.current = r);
  }, [r, o]), [r, n, s];
}
function Ft(e) {
  return typeof e == "function";
}
function te(e) {
  const t = i.useRef({ value: e, previous: e });
  return i.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function re(e) {
  const [t, r] = i.useState(void 0);
  return L(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const s = o[0];
        let l, a;
        if ("borderBoxSize" in s) {
          const u = s.borderBoxSize, c = Array.isArray(u) ? u[0] : u;
          l = c.inlineSize, a = c.blockSize;
        } else
          l = e.offsetWidth, a = e.offsetHeight;
        r({ width: l, height: a });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
function Vt(e, t) {
  return i.useReducer((r, n) => t[r][n] ?? r, e);
}
var ne = (e) => {
  const { present: t, children: r } = e, n = $t(t), o = typeof r == "function" ? r({ present: n.isPresent }) : i.Children.only(r), s = _(n.ref, Dt(o));
  return typeof r == "function" || n.isPresent ? i.cloneElement(o, { ref: s }) : null;
};
ne.displayName = "Presence";
function $t(e) {
  const [t, r] = i.useState(), n = i.useRef(null), o = i.useRef(e), s = i.useRef("none"), l = e ? "mounted" : "unmounted", [a, u] = Vt(l, {
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
  return i.useEffect(() => {
    const c = U(n.current);
    s.current = a === "mounted" ? c : "none";
  }, [a]), L(() => {
    const c = n.current, d = o.current;
    if (d !== e) {
      const g = s.current, h = U(c);
      e ? u("MOUNT") : h === "none" || c?.display === "none" ? u("UNMOUNT") : u(d && g !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), L(() => {
    if (t) {
      let c;
      const d = t.ownerDocument.defaultView ?? window, f = (h) => {
        const v = U(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && v && (u("ANIMATION_END"), !o.current)) {
          const m = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = m);
          });
        }
      }, g = (h) => {
        h.target === t && (s.current = U(n.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: i.useCallback((c) => {
      n.current = c ? getComputedStyle(c) : null, r(c);
    }, [])
  };
}
function U(e) {
  return e?.animationName || "none";
}
function Dt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function Lt(e) {
  const t = /* @__PURE__ */ Bt(e), r = i.forwardRef((n, o) => {
    const { children: s, ...l } = n, a = i.Children.toArray(s), u = a.find(Ut);
    if (u) {
      const c = u.props.children, d = a.map((f) => f === u ? i.Children.count(c) > 1 ? i.Children.only(null) : i.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...l, ref: o, children: i.isValidElement(c) ? i.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...l, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  const t = i.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (i.isValidElement(o)) {
      const l = jt(o), a = Gt(s, o.props);
      return o.type !== i.Fragment && (a.ref = n ? H(n, l) : l), i.cloneElement(o, a);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var zt = /* @__PURE__ */ Symbol("radix.slottable");
function Ut(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === zt;
}
function Gt(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const u = s(...a);
      return o(...a), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function jt(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Wt = [
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
], P = Wt.reduce((e, t) => {
  const r = /* @__PURE__ */ Lt(`Primitive.${t}`), n = i.forwardRef((o, s) => {
    const { asChild: l, ...a } = o, u = l ? r : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(u, { ...a, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {}), q = "Checkbox", [Ht] = V(q), [Kt, oe] = Ht(q);
function qt(e) {
  const {
    __scopeCheckbox: t,
    checked: r,
    children: n,
    defaultChecked: o,
    disabled: s,
    form: l,
    name: a,
    onCheckedChange: u,
    required: c,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [g, h] = K({
    prop: r,
    defaultProp: o ?? !1,
    onChange: u,
    caller: q
  }), [b, v] = i.useState(null), [m, C] = i.useState(null), x = i.useRef(!1), y = b ? !!l || !!b.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), w = {
    checked: g,
    disabled: s,
    setChecked: h,
    control: b,
    setControl: v,
    name: a,
    form: l,
    value: d,
    hasConsumerStoppedPropagationRef: x,
    required: c,
    defaultChecked: T(o) ? !1 : o,
    isFormControl: y,
    bubbleInput: m,
    setBubbleInput: C
  };
  return /* @__PURE__ */ p(
    Kt,
    {
      scope: t,
      ...w,
      children: Zt(f) ? f(w) : n
    }
  );
}
var Re = "CheckboxTrigger", Ee = i.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: r, ...n }, o) => {
    const {
      control: s,
      value: l,
      disabled: a,
      checked: u,
      required: c,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: g,
      isFormControl: h,
      bubbleInput: b
    } = oe(Re, e), v = _(o, d), m = i.useRef(u);
    return i.useEffect(() => {
      const C = s?.form;
      if (C) {
        const x = () => f(m.current);
        return C.addEventListener("reset", x), () => C.removeEventListener("reset", x);
      }
    }, [s, f]), /* @__PURE__ */ p(
      P.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": T(u) ? "mixed" : u,
        "aria-required": c,
        "data-state": Pe(u),
        "data-disabled": a ? "" : void 0,
        disabled: a,
        value: l,
        ...n,
        ref: v,
        onKeyDown: k(t, (C) => {
          C.key === "Enter" && C.preventDefault();
        }),
        onClick: k(r, (C) => {
          f((x) => T(x) ? !0 : !x), b && h && (g.current = C.isPropagationStopped(), g.current || C.stopPropagation());
        })
      }
    );
  }
);
Ee.displayName = Re;
var Se = i.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: l,
      disabled: a,
      value: u,
      onCheckedChange: c,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p(
      qt,
      {
        __scopeCheckbox: r,
        checked: o,
        defaultChecked: s,
        disabled: a,
        required: l,
        onCheckedChange: c,
        name: n,
        form: d,
        value: u,
        internal_do_not_use_render: ({ isFormControl: g }) => /* @__PURE__ */ E(ge, { children: [
          /* @__PURE__ */ p(
            Ee,
            {
              ...f,
              ref: t,
              __scopeCheckbox: r
            }
          ),
          g && /* @__PURE__ */ p(
            _e,
            {
              __scopeCheckbox: r
            }
          )
        ] })
      }
    );
  }
);
Se.displayName = q;
var ke = "CheckboxIndicator", Ne = i.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: r, forceMount: n, ...o } = e, s = oe(ke, r);
    return /* @__PURE__ */ p(
      ne,
      {
        present: n || T(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ p(
          P.span,
          {
            "data-state": Pe(s.checked),
            "data-disabled": s.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
Ne.displayName = ke;
var Ie = "CheckboxBubbleInput", _e = i.forwardRef(
  ({ __scopeCheckbox: e, ...t }, r) => {
    const {
      control: n,
      hasConsumerStoppedPropagationRef: o,
      checked: s,
      defaultChecked: l,
      required: a,
      disabled: u,
      name: c,
      value: d,
      form: f,
      bubbleInput: g,
      setBubbleInput: h
    } = oe(Ie, e), b = _(r, h), v = te(s), m = re(n);
    i.useEffect(() => {
      const x = g;
      if (!x) return;
      const y = window.HTMLInputElement.prototype, N = Object.getOwnPropertyDescriptor(
        y,
        "checked"
      ).set, I = !o.current;
      if (v !== s && N) {
        const A = new Event("click", { bubbles: I });
        x.indeterminate = T(s), N.call(x, T(s) ? !1 : s), x.dispatchEvent(A);
      }
    }, [g, v, s, o]);
    const C = i.useRef(T(s) ? !1 : s);
    return /* @__PURE__ */ p(
      P.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: l ?? C.current,
        required: a,
        disabled: u,
        name: c,
        value: d,
        form: f,
        ...t,
        tabIndex: -1,
        ref: b,
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
_e.displayName = Ie;
function Zt(e) {
  return typeof e == "function";
}
function T(e) {
  return e === "indeterminate";
}
function Pe(e) {
  return T(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Kr({
  className: e,
  label: t,
  secondaryLabel: r,
  id: n,
  ...o
}) {
  const s = n ?? i.useId();
  return /* @__PURE__ */ E("div", { className: "flex", children: [
    /* @__PURE__ */ p(
      Se,
      {
        id: s,
        "data-slot": "checkbox",
        className: S(
          "peer border-input dark:bg-gi-primary/30 data-[state=checked]:bg-gi-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-gi-primary data-[state=checked]:border-gi-dark-ash focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-gi-red/20 dark:aria-invalid:ring-gi-red/40 aria-invalid:border-gi-red size-3.5 shrink-0 rounded-xs border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          e
        ),
        ...o,
        children: /* @__PURE__ */ p(
          Ne,
          {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none",
            children: /* @__PURE__ */ p(dt, { className: "size-3" })
          }
        )
      }
    ),
    /* @__PURE__ */ E("div", { className: "flex flex-col ml-2", children: [
      /* @__PURE__ */ p(
        "label",
        {
          htmlFor: s,
          className: "font-medium text-sm leading-3.5 text-gi-primary mb-1.5",
          children: t
        }
      ),
      r && /* @__PURE__ */ p("span", { className: "text-gi-gray text-sm leading-5", children: r })
    ] })
  ] });
}
const Xt = B(
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
), Yt = B(
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
), pe = {
  default: G,
  info: G,
  success: Ce,
  warning: ye,
  error: xe
};
function qr({
  className: e,
  variant: t,
  children: r
}) {
  const n = pe[t ?? "default"] ?? pe.default;
  return /* @__PURE__ */ E(
    "div",
    {
      "data-slot": "info-message",
      className: S(Xt({ variant: t, className: e })),
      children: [
        /* @__PURE__ */ p("div", { className: Yt({ variant: t }), children: /* @__PURE__ */ p(n, {}) }),
        /* @__PURE__ */ p("div", { children: r })
      ]
    }
  );
}
// @__NO_SIDE_EFFECTS__
function me(e) {
  const t = /* @__PURE__ */ Jt(e), r = i.forwardRef((n, o) => {
    const { children: s, ...l } = n, a = i.Children.toArray(s), u = a.find(er);
    if (u) {
      const c = u.props.children, d = a.map((f) => f === u ? i.Children.count(c) > 1 ? i.Children.only(null) : i.isValidElement(c) ? c.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...l, ref: o, children: i.isValidElement(c) ? i.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...l, ref: o, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function Jt(e) {
  const t = i.forwardRef((r, n) => {
    const { children: o, ...s } = r;
    if (i.isValidElement(o)) {
      const l = rr(o), a = tr(s, o.props);
      return o.type !== i.Fragment && (a.ref = n ? H(n, l) : l), i.cloneElement(o, a);
    }
    return i.Children.count(o) > 1 ? i.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Qt = /* @__PURE__ */ Symbol("radix.slottable");
function er(e) {
  return i.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Qt;
}
function tr(e, t) {
  const r = { ...t };
  for (const n in t) {
    const o = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? o && s ? r[n] = (...a) => {
      const u = s(...a);
      return o(...a), u;
    } : o && (r[n] = o) : n === "style" ? r[n] = { ...o, ...s } : n === "className" && (r[n] = [o, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function rr(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function nr(e) {
  const t = e + "CollectionProvider", [r, n] = V(t), [o, s] = r(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), l = (v) => {
    const { scope: m, children: C } = v, x = O.useRef(null), y = O.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: m, itemMap: y, collectionRef: x, children: C });
  };
  l.displayName = t;
  const a = e + "CollectionSlot", u = /* @__PURE__ */ me(a), c = O.forwardRef(
    (v, m) => {
      const { scope: C, children: x } = v, y = s(a, C), w = _(m, y.collectionRef);
      return /* @__PURE__ */ p(u, { ref: w, children: x });
    }
  );
  c.displayName = a;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", g = /* @__PURE__ */ me(d), h = O.forwardRef(
    (v, m) => {
      const { scope: C, children: x, ...y } = v, w = O.useRef(null), N = _(m, w), I = s(d, C);
      return O.useEffect(() => (I.itemMap.set(w, { ref: w, ...y }), () => {
        I.itemMap.delete(w);
      })), /* @__PURE__ */ p(g, { [f]: "", ref: N, children: x });
    }
  );
  h.displayName = d;
  function b(v) {
    const m = s(e + "CollectionConsumer", v);
    return O.useCallback(() => {
      const x = m.collectionRef.current;
      if (!x) return [];
      const y = Array.from(x.querySelectorAll(`[${f}]`));
      return Array.from(m.itemMap.values()).sort(
        (I, A) => y.indexOf(I.ref.current) - y.indexOf(A.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: l, Slot: c, ItemSlot: h },
    b,
    n
  ];
}
var or = i[" useId ".trim().toString()] || (() => {
}), ir = 0;
function sr(e) {
  const [t, r] = i.useState(or());
  return L(() => {
    r((n) => n ?? String(ir++));
  }, [e]), t ? `radix-${t}` : "";
}
function ar(e) {
  const t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...r) => t.current?.(...r), []);
}
var cr = i.createContext(void 0);
function Ae(e) {
  const t = i.useContext(cr);
  return e || t || "ltr";
}
var J = "rovingFocusGroup.onEntryFocus", lr = { bubbles: !1, cancelable: !0 }, z = "RovingFocusGroup", [ee, Te, ur] = nr(z), [dr, Me] = V(
  z,
  [ur]
), [fr, pr] = dr(z), Oe = i.forwardRef(
  (e, t) => /* @__PURE__ */ p(ee.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(ee.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(mr, { ...e, ref: t }) }) })
);
Oe.displayName = z;
var mr = i.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: r,
    orientation: n,
    loop: o = !1,
    dir: s,
    currentTabStopId: l,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: u,
    onEntryFocus: c,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, g = i.useRef(null), h = _(t, g), b = Ae(s), [v, m] = K({
    prop: l,
    defaultProp: a ?? null,
    onChange: u,
    caller: z
  }), [C, x] = i.useState(!1), y = ar(c), w = Te(r), N = i.useRef(!1), [I, A] = i.useState(0);
  return i.useEffect(() => {
    const R = g.current;
    if (R)
      return R.addEventListener(J, y), () => R.removeEventListener(J, y);
  }, [y]), /* @__PURE__ */ p(
    fr,
    {
      scope: r,
      orientation: n,
      dir: b,
      loop: o,
      currentTabStopId: v,
      onItemFocus: i.useCallback(
        (R) => m(R),
        [m]
      ),
      onItemShiftTab: i.useCallback(() => x(!0), []),
      onFocusableItemAdd: i.useCallback(
        () => A((R) => R + 1),
        []
      ),
      onFocusableItemRemove: i.useCallback(
        () => A((R) => R - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        P.div,
        {
          tabIndex: C || I === 0 ? -1 : 0,
          "data-orientation": n,
          ...f,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: k(e.onMouseDown, () => {
            N.current = !0;
          }),
          onFocus: k(e.onFocus, (R) => {
            const Y = !N.current;
            if (R.target === R.currentTarget && Y && !C) {
              const $ = new CustomEvent(J, lr);
              if (R.currentTarget.dispatchEvent($), !$.defaultPrevented) {
                const D = w().filter((M) => M.focusable), tt = D.find((M) => M.active), rt = D.find((M) => M.id === v), nt = [tt, rt, ...D].filter(
                  Boolean
                ).map((M) => M.ref.current);
                $e(nt, d);
              }
            }
            N.current = !1;
          }),
          onBlur: k(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), Fe = "RovingFocusGroupItem", Ve = i.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: r,
      focusable: n = !0,
      active: o = !1,
      tabStopId: s,
      children: l,
      ...a
    } = e, u = sr(), c = s || u, d = pr(Fe, r), f = d.currentTabStopId === c, g = Te(r), { onFocusableItemAdd: h, onFocusableItemRemove: b, currentTabStopId: v } = d;
    return i.useEffect(() => {
      if (n)
        return h(), () => b();
    }, [n, h, b]), /* @__PURE__ */ p(
      ee.ItemSlot,
      {
        scope: r,
        id: c,
        focusable: n,
        active: o,
        children: /* @__PURE__ */ p(
          P.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...a,
            ref: t,
            onMouseDown: k(e.onMouseDown, (m) => {
              n ? d.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: k(e.onFocus, () => d.onItemFocus(c)),
            onKeyDown: k(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const C = vr(m, d.orientation, d.dir);
              if (C !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let y = g().filter((w) => w.focusable).map((w) => w.ref.current);
                if (C === "last") y.reverse();
                else if (C === "prev" || C === "next") {
                  C === "prev" && y.reverse();
                  const w = y.indexOf(m.currentTarget);
                  y = d.loop ? br(y, w + 1) : y.slice(w + 1);
                }
                setTimeout(() => $e(y));
              }
            }),
            children: typeof l == "function" ? l({ isCurrentTabStop: f, hasTabStop: v != null }) : l
          }
        )
      }
    );
  }
);
Ve.displayName = Fe;
var gr = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hr(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function vr(e, t, r) {
  const n = hr(e.key, r);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(n)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(n)))
    return gr[n];
}
function $e(e, t = !1) {
  const r = document.activeElement;
  for (const n of e)
    if (n === r || (n.focus({ preventScroll: t }), document.activeElement !== r)) return;
}
function br(e, t) {
  return e.map((r, n) => e[(t + n) % e.length]);
}
var Cr = Oe, yr = Ve, ie = "Radio", [xr, De] = V(ie), [wr, Rr] = xr(ie), Le = i.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: r,
      name: n,
      checked: o = !1,
      required: s,
      disabled: l,
      value: a = "on",
      onCheck: u,
      form: c,
      ...d
    } = e, [f, g] = i.useState(null), h = _(t, (m) => g(m)), b = i.useRef(!1), v = f ? c || !!f.closest("form") : !0;
    return /* @__PURE__ */ E(wr, { scope: r, checked: o, disabled: l, children: [
      /* @__PURE__ */ p(
        P.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Ge(o),
          "data-disabled": l ? "" : void 0,
          disabled: l,
          value: a,
          ...d,
          ref: h,
          onClick: k(e.onClick, (m) => {
            o || u?.(), v && (b.current = m.isPropagationStopped(), b.current || m.stopPropagation());
          })
        }
      ),
      v && /* @__PURE__ */ p(
        Ue,
        {
          control: f,
          bubbles: !b.current,
          name: n,
          value: a,
          checked: o,
          required: s,
          disabled: l,
          form: c,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Le.displayName = ie;
var Be = "RadioIndicator", ze = i.forwardRef(
  (e, t) => {
    const { __scopeRadio: r, forceMount: n, ...o } = e, s = Rr(Be, r);
    return /* @__PURE__ */ p(ne, { present: n || s.checked, children: /* @__PURE__ */ p(
      P.span,
      {
        "data-state": Ge(s.checked),
        "data-disabled": s.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
ze.displayName = Be;
var Er = "RadioBubbleInput", Ue = i.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const l = i.useRef(null), a = _(l, s), u = te(r), c = re(t);
    return i.useEffect(() => {
      const d = l.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (u !== r && h) {
        const b = new Event("click", { bubbles: n });
        h.call(d, r), d.dispatchEvent(b);
      }
    }, [u, r, n]), /* @__PURE__ */ p(
      P.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Ue.displayName = Er;
function Ge(e) {
  return e ? "checked" : "unchecked";
}
var Sr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], Z = "RadioGroup", [kr] = V(Z, [
  Me,
  De
]), je = Me(), We = De(), [Nr, Ir] = kr(Z), He = i.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: r,
      name: n,
      defaultValue: o,
      value: s,
      required: l = !1,
      disabled: a = !1,
      orientation: u,
      dir: c,
      loop: d = !0,
      onValueChange: f,
      ...g
    } = e, h = je(r), b = Ae(c), [v, m] = K({
      prop: s,
      defaultProp: o ?? null,
      onChange: f,
      caller: Z
    });
    return /* @__PURE__ */ p(
      Nr,
      {
        scope: r,
        name: n,
        required: l,
        disabled: a,
        value: v,
        onValueChange: m,
        children: /* @__PURE__ */ p(
          Cr,
          {
            asChild: !0,
            ...h,
            orientation: u,
            dir: b,
            loop: d,
            children: /* @__PURE__ */ p(
              P.div,
              {
                role: "radiogroup",
                "aria-required": l,
                "aria-orientation": u,
                "data-disabled": a ? "" : void 0,
                dir: b,
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
He.displayName = Z;
var Ke = "RadioGroupItem", qe = i.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, disabled: n, ...o } = e, s = Ir(Ke, r), l = s.disabled || n, a = je(r), u = We(r), c = i.useRef(null), d = _(t, c), f = s.value === o.value, g = i.useRef(!1);
    return i.useEffect(() => {
      const h = (v) => {
        Sr.includes(v.key) && (g.current = !0);
      }, b = () => g.current = !1;
      return document.addEventListener("keydown", h), document.addEventListener("keyup", b), () => {
        document.removeEventListener("keydown", h), document.removeEventListener("keyup", b);
      };
    }, []), /* @__PURE__ */ p(
      yr,
      {
        asChild: !0,
        ...a,
        focusable: !l,
        active: f,
        children: /* @__PURE__ */ p(
          Le,
          {
            disabled: l,
            required: s.required,
            checked: f,
            ...u,
            ...o,
            name: s.name,
            ref: d,
            onCheck: () => s.onValueChange(o.value),
            onKeyDown: k((h) => {
              h.key === "Enter" && h.preventDefault();
            }),
            onFocus: k(o.onFocus, () => {
              g.current && c.current?.click();
            })
          }
        )
      }
    );
  }
);
qe.displayName = Ke;
var _r = "RadioGroupIndicator", Ze = i.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: r, ...n } = e, o = We(r);
    return /* @__PURE__ */ p(ze, { ...o, ...n, ref: t });
  }
);
Ze.displayName = _r;
var Pr = He, Ar = qe, Tr = Ze;
function Zr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Pr,
    {
      "data-slot": "radio-group",
      className: S("grid gap-2", e),
      ...t
    }
  );
}
function Xr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    Ar,
    {
      "data-slot": "radio-group-item",
      className: S(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(
        Tr,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ p(pt, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
var X = "Switch", [Mr] = V(X), [Or, Fr] = Mr(X), Xe = i.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: r,
      name: n,
      checked: o,
      defaultChecked: s,
      required: l,
      disabled: a,
      value: u = "on",
      onCheckedChange: c,
      form: d,
      ...f
    } = e, [g, h] = i.useState(null), b = _(t, (y) => h(y)), v = i.useRef(!1), m = g ? d || !!g.closest("form") : !0, [C, x] = K({
      prop: o,
      defaultProp: s ?? !1,
      onChange: c,
      caller: X
    });
    return /* @__PURE__ */ E(Or, { scope: r, checked: C, disabled: a, children: [
      /* @__PURE__ */ p(
        P.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": C,
          "aria-required": l,
          "data-state": et(C),
          "data-disabled": a ? "" : void 0,
          disabled: a,
          value: u,
          ...f,
          ref: b,
          onClick: k(e.onClick, (y) => {
            x((w) => !w), m && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ p(
        Qe,
        {
          control: g,
          bubbles: !v.current,
          name: n,
          value: u,
          checked: C,
          required: l,
          disabled: a,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Xe.displayName = X;
var Ye = "SwitchThumb", Je = i.forwardRef(
  (e, t) => {
    const { __scopeSwitch: r, ...n } = e, o = Fr(Ye, r);
    return /* @__PURE__ */ p(
      P.span,
      {
        "data-state": et(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...n,
        ref: t
      }
    );
  }
);
Je.displayName = Ye;
var Vr = "SwitchBubbleInput", Qe = i.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: r,
    bubbles: n = !0,
    ...o
  }, s) => {
    const l = i.useRef(null), a = _(l, s), u = te(r), c = re(t);
    return i.useEffect(() => {
      const d = l.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, h = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (u !== r && h) {
        const b = new Event("click", { bubbles: n });
        h.call(d, r), d.dispatchEvent(b);
      }
    }, [u, r, n]), /* @__PURE__ */ p(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: r,
        ...o,
        tabIndex: -1,
        ref: a,
        style: {
          ...o.style,
          ...c,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
Qe.displayName = Vr;
function et(e) {
  return e ? "checked" : "unchecked";
}
var $r = Xe, Dr = Je;
function Yr({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ p(
    $r,
    {
      "data-slot": "switch",
      className: S(
        "peer data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ...t,
      children: /* @__PURE__ */ p(
        Dr,
        {
          "data-slot": "switch-thumb",
          className: S(
            "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
          )
        }
      )
    }
  );
}
const Lr = B(
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
), Br = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gi-primary/50"
};
function Jr({
  className: e,
  isError: t,
  label: r,
  disabled: n,
  errorText: o,
  helper: s,
  isRequired: l,
  value: a,
  onChange: u,
  characterLimit: c,
  characterLimitVisibility: d,
  dataTestId: f,
  ...g
}) {
  const h = !!(t && o), b = h ? o : s, v = typeof c == "number", m = v ? c : void 0, C = a ?? "", x = v && typeof m == "number" ? C.slice(0, m) : C, y = x.length, w = h, N = !!d && v, I = n ? "disabled" : t ? "error" : "default";
  function A(Y) {
    if (n)
      return;
    const $ = Y.target.value;
    if (v && typeof c == "number") {
      const D = $.slice(0, c);
      u(D);
      return;
    }
    u($);
  }
  const R = S(
    "text-[14px]",
    w ? "text-gi-red" : "text-gi-primary/50"
  );
  return /* @__PURE__ */ E("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ E(
      "p",
      {
        className: S("font-bold", Br[I ?? "default"]),
        children: [
          r,
          l && /* @__PURE__ */ p("span", { className: "text-gi-red ml-1 size-4", children: "*" }),
          ""
        ]
      }
    ),
    /* @__PURE__ */ p(
      "textarea",
      {
        disabled: n,
        value: x,
        required: l,
        onChange: A,
        maxLength: v ? c : void 0,
        "data-slot": "textarea",
        "data-test-id": f,
        className: S(
          Lr({
            variant: I,
            className: e
          })
        ),
        ...g
      }
    ),
    /* @__PURE__ */ E("div", { className: "flex justify-between items-start text-[14px] mt-1 min-h-4", children: [
      /* @__PURE__ */ p("p", { className: R, children: b }),
      N ? /* @__PURE__ */ E("p", { className: "text-gi-primary/50 text-[14px]", children: [
        y,
        "/",
        m
      ] }) : null
    ] })
  ] });
}
export {
  Hr as Badge,
  At as Button,
  Kr as Checkbox,
  qr as InfoMessage,
  Zr as RadioGroup,
  Xr as RadioGroupItem,
  Yr as Switch,
  Jr as TextArea,
  xt as badgeVariants,
  fe as buttonVariants,
  Xt as infoMessageVariants
};
