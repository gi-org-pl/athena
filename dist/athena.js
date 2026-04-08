import { jsx as p, jsxs as k, Fragment as Zn } from "react/jsx-runtime";
import * as s from "react";
import ye, { forwardRef as $, useState as be, useEffect as Ie, useMemo as Zt, isValidElement as sa, cloneElement as gn, useId as mt, useRef as Te, useImperativeHandle as ca, createElement as Bt, useLayoutEffect as la, useCallback as vn } from "react";
import { twMerge as ua } from "tailwind-merge";
import * as Yn from "react-dom";
import da from "react-dom";
const fa = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 234 234", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M130.66 170.319L136.229 135.513L98.6387 120.199L93.0698 173.103L130.66 170.319Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M168.439 221.757C165.212 223.33 161.923 224.751 158.585 226.011C151.909 228.537 145.018 230.443 137.948 231.716C131.039 232.963 123.944 233.596 116.85 233.596C107.267 233.596 97.7382 232.447 88.5233 230.172C84.9149 229.287 81.2755 228.205 77.6979 226.945C77.3228 226.81 76.9418 226.675 76.5667 226.539C72.1283 224.929 67.7636 223.041 63.5651 220.908C62.9994 220.626 62.4339 220.336 61.8684 220.029C61.2414 219.71 60.6205 219.372 59.9934 219.021C59.1942 218.585 58.4012 218.13 57.6082 217.668C54.9526 216.132 52.34 214.472 49.8441 212.745L49.6781 212.634C49.5306 212.53 49.3831 212.431 49.2417 212.327C49.3338 211.841 49.42 211.398 49.4998 211.005C49.8072 209.462 50.0101 208.614 50.0101 208.614L66.8415 173.844L71.532 164.156L73.8188 163.215L91.093 156.115H133.313L146.634 161.623C146.634 161.623 146.702 161.875 146.837 162.361C148.165 167.125 155.911 194.173 167.929 220.638C168.095 221.006 168.267 221.381 168.439 221.757Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M121.16 146.702C142.331 146.702 159.493 129.54 159.493 108.369C159.493 87.1986 142.331 70.0364 121.16 70.0364C99.9898 70.0364 82.8276 87.1986 82.8276 108.369C82.8276 129.54 99.9898 146.702 121.16 146.702Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M73.8859 162.885L73.82 163.215L62.1332 218.781L62.032 219.265L61.8692 220.03C61.2403 219.709 60.6201 219.37 59.9955 219.023C59.195 218.583 58.4032 218.13 57.6071 217.668C54.9548 216.133 52.3421 214.471 49.8438 212.746L49.6766 212.632C49.5315 212.531 49.3819 212.43 49.2412 212.328C47.3322 210.996 45.4717 209.606 43.6551 208.172C43.6419 208.163 43.6331 208.154 43.6199 208.141C40.3782 205.528 37.2553 202.718 34.2687 199.731C32.3422 197.805 30.4904 195.821 28.7178 193.784L28.9861 192.658L29.0125 192.544L29.3468 191.11C32.3201 178.552 42.3795 168.915 55.0516 166.487L71.889 163.263L73.8859 162.885Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M193.268 205.509C188.307 209.732 182.99 213.556 177.377 216.913C176.83 217.245 176.271 217.57 175.712 217.896C173.326 219.273 170.898 220.558 168.439 221.757C165.212 223.33 161.923 224.751 158.585 226.011L158.327 224.793L145.128 162.035L146.837 162.361L163.964 165.643C176.634 168.072 186.697 177.711 189.666 190.27L192.943 204.144L193.268 205.509Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M165.304 118.616C164.308 122.329 159.298 138.921 146.468 142.413C143.948 143.101 137.936 143.894 139.528 142.413C139.891 142.075 140.241 141.743 140.592 141.417C154.515 128.323 160.195 120.319 157.601 102.553C155.954 91.2417 137.192 80.9695 126.637 79.949C122.186 79.5191 116.506 81.0247 112.756 84.9041C106.566 91.297 107.586 110.92 104.156 122.446C103.234 125.532 101.998 128.04 100.222 129.558C99.1152 130.505 98.4083 129.3 97.8857 127.327C96.7731 123.134 96.4842 115.457 94.9043 117.626C90.3369 123.915 94.6891 132.251 96.0047 135.466C96.2752 136.124 96.5518 136.757 96.8284 137.36V137.366C96.9882 137.71 97.1542 138.054 97.314 138.38V138.386C101.703 147.336 106.978 150.539 111.625 156.115C113.451 158.297 115.178 160.836 116.721 164.23C117.779 166.554 118.541 168.889 119.063 171.182C121.725 182.678 118.566 193.122 117.711 195.962C115.922 201.876 112.848 212.037 103.83 217.773C92.5067 224.978 82.1731 218.628 77.2306 225.47C77.1691 225.55 77.1137 225.629 77.0585 225.709C76.874 225.986 76.7081 226.263 76.5667 226.539C72.1283 224.929 67.7636 223.041 63.5651 220.908C62.9994 220.626 62.4339 220.336 61.8684 220.029C61.2414 219.71 60.6205 219.372 59.9934 219.021C59.9688 218.541 59.9442 218.062 59.9257 217.577C59.5631 209.259 60.1102 200.118 62.1819 191.001C63.5097 185.18 64.8253 179.407 66.8415 173.844C68.1571 170.217 69.7677 166.676 71.8885 163.264C73.5853 160.523 75.6015 157.861 78.0481 155.303C83.4211 149.691 88.1976 147.349 88.9537 141.423C90.0355 132.964 81.2264 130.419 78.0481 117.626C75.8783 108.879 73.6098 96.2706 75.8106 87.7748C77.8885 79.7466 79.6957 72.7816 85.7263 65.9577C87.177 64.3224 99.0845 52.9497 112.879 51.0809C119.235 50.2267 124.903 58.3659 132.588 60.1177C141.421 62.1282 146.481 63.2778 151.423 67.0581C159.777 73.439 162.132 82.98 164.314 91.8444C166.023 98.7788 168.236 107.748 165.304 118.616Z", fill: "#2F2E41" })), pa = $(fa), ma = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 234 234", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("g", { clipPath: "url(#clip_male)" }, /* @__PURE__ */ s.createElement("path", { d: "M119.094 152.752C140.07 152.752 157.074 135.748 157.074 114.772C157.074 93.7957 140.07 76.7913 119.094 76.7913C98.1178 76.7913 81.1133 93.7957 81.1133 114.772C81.1133 135.748 98.1178 152.752 119.094 152.752Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M97.2904 158.369L95.5746 141.024L129.839 134.617L150.072 183.88L114.884 224.346L89.813 175.083L97.2904 158.369Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M95.0242 149.706L102.515 151.399C102.515 151.399 96.6265 132.725 98.6253 130.942C100.624 129.159 105.522 131.969 105.522 131.969L110.669 137.739L116.939 131.356C116.939 131.356 123.746 122.892 126.411 120.515C129.076 118.138 124.795 109.315 124.795 109.315C124.795 109.315 164.334 98.6536 149.621 79.4759C149.621 79.4759 140.995 64.4399 138.186 69.338C135.377 74.2361 132.028 66.4569 132.028 66.4569L121.8 68.4019C121.8 68.4019 101.613 56.4994 82.4536 81.9623C63.2942 107.425 95.0242 149.706 95.0242 149.706Z", fill: "#2F2E41" }), /* @__PURE__ */ s.createElement("path", { d: "M190.525 208.027C169.769 224.856 144.09 234 117 234C92.2626 234 68.6999 226.373 48.9902 212.236C49.0254 211.867 49.0606 211.502 49.0914 211.137C49.6148 205.419 50.0811 199.859 50.389 195.249C51.581 177.352 93.3359 165.423 93.3359 165.423C93.3359 165.423 93.525 165.612 93.9033 165.942C96.2081 167.965 105.564 175.302 121.97 177.352C136.599 179.182 141.416 170.503 142.872 166.347C143.312 165.08 143.444 164.231 143.444 164.231L186.39 184.513C189.192 188.515 190.288 197.136 190.503 206.826C190.512 207.226 190.521 207.622 190.525 208.027Z", fill: "currentColor" })), /* @__PURE__ */ s.createElement("defs", null, /* @__PURE__ */ s.createElement("clipPath", { id: "clip_male" }, /* @__PURE__ */ s.createElement("rect", { width: 234, height: 234, rx: 117, fill: "white" })))), ha = $(ma);
function qn(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = qn(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Qn() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = qn(e)) && (r && (r += " "), r += t);
  return r;
}
function I(...e) {
  return ua(Qn(e));
}
const ga = (e) => {
  const t = e.trim();
  if (!t) return "";
  const n = t.split(/\s+/).filter(Boolean), r = Array.from(n[0])[0], o = n.length > 1 ? Array.from(n[n.length - 1])[0] : "";
  return (r + o).toUpperCase();
}, yn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, wn = Qn, X = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return wn(e, n?.class, n?.className);
  const { variants: o, defaultVariants: a } = t, c = Object.keys(o).map((l) => {
    const u = n?.[l], d = a?.[l];
    if (u === null) return null;
    const h = yn(u) || yn(d);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, u) => {
    let [d, h] = u;
    return h === void 0 || (l[d] = h), l;
  }, {}), f = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: h, ...g } = u;
    return Object.entries(g).every((v) => {
      let [m, y] = v;
      return Array.isArray(y) ? y.includes({
        ...a,
        ...i
      }[m]) : {
        ...a,
        ...i
      }[m] === y;
    }) ? [
      ...l,
      d,
      h
    ] : l;
  }, []);
  return wn(e, c, f, n?.class, n?.className);
}, va = X(
  "relative flex shrink-0 overflow-hidden rounded-full items-center justify-center bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-8 w-8 text-xs",
        medium: "h-10 w-10 text-sm",
        large: "h-14 w-14 text-base"
      }
    },
    defaultVariants: {
      size: "medium"
    }
  }
), ya = $(
  ({
    className: e,
    src: t,
    alt: n = "",
    size: r,
    fallback: o = "icon",
    name: a = "",
    gender: c = "male",
    color: i = "text-gi-light-primary",
    dataTestId: f,
    ...l
  }, u) => {
    const [d, h] = be(!1);
    Ie(() => {
      d && h(!1);
    }, [t]);
    const g = o === "initials" ? ga(a) : "", v = !!t && !d, m = !!g, y = !!(a || n), w = y ? a ? `${a} avatar` : n : void 0;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: u,
        role: y ? "img" : void 0,
        "aria-label": w,
        "data-slot": "avatar",
        "data-test-id": f,
        className: I(va({ size: r, className: e })),
        ...l,
        children: v ? /* @__PURE__ */ p(
          "img",
          {
            src: t,
            alt: "",
            className: "size-full object-cover transition-opacity duration-300 ease",
            onError: () => h(!0)
          }
        ) : /* @__PURE__ */ p(
          "div",
          {
            className: "flex size-full items-center justify-center font-medium text-gi-primary",
            "aria-hidden": "true",
            children: m ? g : /* @__PURE__ */ p("span", { className: I("size-full", i), children: c === "female" ? /* @__PURE__ */ p(pa, {}) : /* @__PURE__ */ p(ha, {}) })
          }
        )
      }
    );
  }
);
ya.displayName = "Avatar";
const wa = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M12.6166 0.17915C13.0316 0.479059 13.1244 1.05581 12.8226 1.46819L5.39385 11.619C5.23424 11.8381 4.98758 11.9737 4.71481 11.9968C4.44203 12.0198 4.17796 11.9189 3.98644 11.7286L0.27205 8.03736C-0.0906834 7.6769 -0.0906834 7.0915 0.27205 6.73103C0.634784 6.37056 1.22386 6.37056 1.5866 6.73103L4.53199 9.65803L11.3224 0.381012C11.6242 -0.0313641 12.2045 -0.123644 12.6195 0.176266L12.6166 0.17915Z", fill: "currentColor" })), Jn = $(wa), ba = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.7692 8C14.7692 6.20469 14.0563 4.48262 12.7869 3.21314C11.5174 1.94366 9.79531 1.23077 8 1.23077C6.20469 1.23077 4.48262 1.94366 3.21314 3.21314C1.94366 4.48262 1.23077 6.20469 1.23077 8C1.23077 8.88895 1.40581 9.76926 1.74599 10.5905C2.08618 11.4118 2.58457 12.1583 3.21314 12.7869C3.84171 13.4154 4.58819 13.9138 5.40946 14.254C6.23074 14.5942 7.11105 14.7692 8 14.7692C8.88895 14.7692 9.76926 14.5942 10.5905 14.254C11.4118 13.9138 12.1583 13.4154 12.7869 12.7869C13.4154 12.1583 13.9138 11.4118 14.254 10.5905C14.5942 9.76926 14.7692 8.88895 14.7692 8ZM9.41106 5.71875C9.65138 5.47843 10.0409 5.47843 10.2812 5.71875C10.5216 5.95907 10.5216 6.34862 10.2812 6.58894L8.87019 8L10.2812 9.41106C10.5216 9.65138 10.5216 10.0409 10.2812 10.2812C10.0409 10.5216 9.65138 10.5216 9.41106 10.2812L8 8.87019L6.58894 10.2812C6.34862 10.5216 5.95907 10.5216 5.71875 10.2812C5.47843 10.0409 5.47843 9.65138 5.71875 9.41106L7.12981 8L5.71875 6.58894C5.47843 6.34862 5.47843 5.95907 5.71875 5.71875C5.95907 5.47843 6.34862 5.47843 6.58894 5.71875L8 7.12981L9.41106 5.71875ZM16 8C16 9.05058 15.7931 10.0911 15.391 11.0617C14.989 12.0322 14.3999 12.9142 13.6571 13.6571C12.9142 14.3999 12.0322 14.989 11.0617 15.391C10.0911 15.7931 9.05058 16 8 16C6.94943 16 5.90891 15.7931 4.9383 15.391C3.96778 14.989 3.08577 14.3999 2.34295 13.6571C1.60013 12.9142 1.01101 12.0322 0.608974 11.0617C0.206937 10.0911 0 9.05058 0 8C4.89064e-08 5.87827 0.842658 3.84324 2.34295 2.34295C3.84324 0.842658 5.87827 0 8 0C10.1217 0 12.1568 0.842658 13.6571 2.34295C15.1573 3.84324 16 5.87827 16 8Z", fill: "currentColor" })), Ca = $(ba), xa = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 5, height: 12, viewBox: "0 0 5 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("g", { clipPath: "url(#clip0_38_51)" }, /* @__PURE__ */ s.createElement("path", { d: "M0.46875 9.94287H0.9375V6.55713H0.46875C0.209859 6.55713 0 6.34727 0 6.08838V4.96875C0 4.70986 0.209859 4.5 0.46875 4.5H3.09375C3.35264 4.5 3.5625 4.70986 3.5625 4.96875V9.94287H4.03125C4.29014 9.94287 4.5 10.1527 4.5 10.4116V11.5312C4.5 11.7901 4.29014 12 4.03125 12H0.46875C0.209859 12 0 11.7901 0 11.5312V10.4116C0 10.1527 0.209859 9.94287 0.46875 9.94287ZM2.25 0C1.31801 0 0.5625 0.755508 0.5625 1.6875C0.5625 2.61949 1.31801 3.375 2.25 3.375C3.18199 3.375 3.9375 2.61949 3.9375 1.6875C3.9375 0.755508 3.18197 0 2.25 0Z", fill: "currentColor" })), /* @__PURE__ */ s.createElement("defs", null, /* @__PURE__ */ s.createElement("clipPath", { id: "clip0_38_51" }, /* @__PURE__ */ s.createElement("rect", { width: 4.5, height: 12, fill: "white" })))), Vt = $(xa), Ea = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M6.40052 0C6.76802 0 7.10552 0.2025 7.28052 0.525L12.6805 10.525C12.848 10.835 12.8405 11.21 12.6605 11.5125C12.4805 11.815 12.153 12 11.8005 12H1.00052C0.648017 12 0.320516 11.815 0.140516 11.5125C-0.0394836 11.21 -0.0469834 10.835 0.120517 10.525L5.52052 0.525C5.69552 0.2025 6.03302 0 6.40052 0ZM6.40052 8.8C5.95802 8.8 5.60052 9.1575 5.60052 9.6C5.60052 10.0425 5.95802 10.4 6.40052 10.4C6.84302 10.4 7.20052 10.0425 7.20052 9.6C7.20052 9.1575 6.84302 8.8 6.40052 8.8ZM6.40052 4C5.94552 4 5.58302 4.3875 5.61552 4.8425L5.80052 7.4425C5.82302 7.755 6.08552 8 6.39802 8C6.71302 8 6.97302 7.7575 6.99552 7.4425L7.18052 4.8425C7.21302 4.3875 6.85302 4 6.39552 4H6.40052Z", fill: "currentColor" })), er = $(Ea), Ra = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 11, height: 12, viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M10.7875 1.40663C11.1112 1.04237 11.0596 0.501342 10.6701 0.198688C10.2805 -0.103966 9.70194 -0.0557555 9.37828 0.3085L5.5 4.66082L1.62172 0.3085C1.29806 -0.0557555 0.719466 -0.103966 0.32992 0.198688C-0.0596265 0.501342 -0.111184 1.04237 0.212483 1.40663L4.30558 6L0.212483 10.5934C-0.111184 10.9576 -0.0596265 11.4987 0.32992 11.8013C0.719466 12.104 1.29806 12.0558 1.62172 11.6915L5.5 7.33918L9.37828 11.6915C9.70194 12.0558 10.2805 12.104 10.6701 11.8013C11.0596 11.4987 11.1112 10.9576 10.7875 10.5934L6.69442 6L10.7875 1.40663Z", fill: "currentColor" })), tr = $(Ra), Sa = X(
  "inline-flex items-center rounded-full font-medium shrink-0 transition-colors [&_svg]:shrink-0 [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        default: "",
        info: "",
        success: "",
        warning: "",
        error: ""
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "border",
        ghost: "bg-transparent"
      },
      size: {
        small: "py-1.5 px-1.5 text-[0.65em] gap-0.75",
        regular: "py-1.5 px-2.5 text-[0.8em] gap-1",
        big: "py-2 px-3 text-[0.9em] gap-1.25"
      }
    },
    compoundVariants: [
      {
        type: "default",
        variant: "primary",
        className: "bg-gi-primary text-white"
      },
      {
        type: "default",
        variant: "secondary",
        className: "bg-gi-ash text-gi-primary"
      },
      {
        type: "default",
        variant: "outlined",
        className: "border-gi-ash text-gi-primary bg-transparent"
      },
      {
        type: "default",
        variant: "ghost",
        className: "text-gi-primary bg-transparent"
      },
      { type: "info", variant: "primary", className: "bg-gi-blue text-white" },
      {
        type: "info",
        variant: "secondary",
        className: "bg-gi-blue/10 text-gi-blue"
      },
      {
        type: "info",
        variant: "outlined",
        className: "border-gi-blue text-gi-blue bg-transparent"
      },
      {
        type: "info",
        variant: "ghost",
        className: "text-gi-blue bg-transparent"
      },
      {
        type: "success",
        variant: "primary",
        className: "bg-gi-green text-white"
      },
      {
        type: "success",
        variant: "secondary",
        className: "bg-gi-green/10 text-gi-green"
      },
      {
        type: "success",
        variant: "outlined",
        className: "border-gi-green text-gi-green bg-transparent"
      },
      {
        type: "success",
        variant: "ghost",
        className: "text-gi-green bg-transparent"
      },
      {
        type: "warning",
        variant: "primary",
        className: "bg-gi-orange text-white"
      },
      {
        type: "warning",
        variant: "secondary",
        className: "bg-gi-orange/10 text-gi-orange"
      },
      {
        type: "warning",
        variant: "outlined",
        className: "border-gi-orange text-gi-orange bg-transparent"
      },
      {
        type: "warning",
        variant: "ghost",
        className: "text-gi-orange bg-transparent"
      },
      { type: "error", variant: "primary", className: "bg-gi-red text-white" },
      {
        type: "error",
        variant: "secondary",
        className: "bg-gi-red/10 text-gi-red"
      },
      {
        type: "error",
        variant: "outlined",
        className: "border-gi-red text-gi-red bg-transparent"
      },
      {
        type: "error",
        variant: "ghost",
        className: "text-gi-red bg-transparent"
      }
    ],
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular"
    }
  }
), Na = {
  info: Vt,
  success: Jn,
  warning: er,
  error: tr
}, nr = $(
  ({
    className: e,
    type: t = "default",
    variant: n = "secondary",
    size: r = "regular",
    children: o,
    LeftIcon: a,
    isDismissible: c = !1,
    onDismiss: i,
    dataTestId: f,
    ...l
  }, u) => {
    const d = Zt(() => {
      if (a) return a;
      if (t === "default") return null;
      const v = Na[t];
      return v ? /* @__PURE__ */ p(v, {}) : null;
    }, [a, t]), h = {
      small: "size-3",
      regular: "size-3.5",
      big: "size-5"
    }, g = h[r] ?? h.regular;
    return /* @__PURE__ */ k(
      "span",
      {
        ref: u,
        "data-test-id": f,
        className: I(
          "group relative inline-flex items-center gap-1.25",
          c && "pr-1"
        ),
        children: [
          /* @__PURE__ */ k(
            "span",
            {
              className: I(Sa({ type: t, variant: n, size: r, className: e })),
              ...l,
              children: [
                d && /* @__PURE__ */ p(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: I(
                      "flex items-center justify-center shrink-0",
                      "h-[0.8em] w-[0.9em] leading-none self-center",
                      "[&_svg]:size-full [&_svg]:block"
                    ),
                    children: d
                  }
                ),
                /* @__PURE__ */ p("span", { className: "leading-none", children: o })
              ]
            }
          ),
          c && /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              "aria-label": `Dismiss ${o}`,
              onClick: (v) => {
                v.preventDefault(), v.stopPropagation(), i?.();
              },
              className: I(
                "flex items-center justify-center shrink-0 rounded-full text-gi-gray/80",
                "transition-all duration-300 ease hover:brightness-80",
                "will-change-transform transform-gpu cursor-pointer block size-full overflow-visible",
                g
              ),
              children: /* @__PURE__ */ p(Ca, { "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
nr.displayName = "Badge";
function bn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xe(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = bn(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : bn(e[o], null);
        }
      };
  };
}
function U(...e) {
  return s.useCallback(xe(...e), e);
}
var Ma = /* @__PURE__ */ Symbol.for("react.lazy"), st = s[" use ".trim().toString()];
function Pa(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function rr(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Ma && "_payload" in e && Pa(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  const t = /* @__PURE__ */ Ia(e), n = s.forwardRef((r, o) => {
    let { children: a, ...c } = r;
    rr(a) && typeof st == "function" && (a = st(a._payload));
    const i = s.Children.toArray(a), f = i.find(Oa);
    if (f) {
      const l = f.props.children, u = i.map((d) => d === f ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var _a = /* @__PURE__ */ Aa("Slot");
// @__NO_SIDE_EFFECTS__
function Ia(e) {
  const t = s.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (rr(o) && typeof st == "function" && (o = st(o._payload)), s.isValidElement(o)) {
      const c = La(o), i = Ta(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? xe(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ka = /* @__PURE__ */ Symbol("radix.slottable");
function Oa(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ka;
}
function Ta(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function La(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const Da = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { className: "animate-spin shrink-0 w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "{true} ", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M7.14667 13.2666C6.42022 13.1495 5.72586 12.8834 5.10726 12.4849C4.48866 12.0864 3.95921 11.5643 3.5522 10.9513C3.1452 10.3382 2.86944 9.64764 2.74229 8.92289C2.61513 8.19813 2.63932 7.4549 2.81334 6.73995C3.03483 5.74733 3.54363 4.84187 4.27629 4.13648C5.00894 3.4311 5.93303 2.95699 6.93334 2.77328C7.63529 2.63005 8.3589 2.62972 9.06099 2.77229C9.76307 2.91486 10.4292 3.19742 11.0197 3.60311C11.6102 4.00879 12.1129 4.52928 12.4978 5.13351C12.8827 5.73775 13.1419 6.41333 13.26 7.11995C13.2947 7.36046 13.4135 7.58088 13.5954 7.74201C13.7773 7.90315 14.0104 7.99454 14.2533 7.99995H14.34C14.4707 8.00192 14.6002 7.97582 14.7199 7.92343C14.8397 7.87103 14.9467 7.79356 15.0339 7.69624C15.1211 7.59892 15.1865 7.48402 15.2255 7.3593C15.2645 7.23458 15.2762 7.10295 15.26 6.97328C15.0703 5.63152 14.5126 4.36854 13.6487 3.32453C12.7848 2.28052 11.6485 1.4963 10.3659 1.0589C9.08332 0.621502 7.70463 0.548037 6.38284 0.846658C5.06104 1.14528 3.84784 1.8043 2.87787 2.7506C1.9079 3.69689 1.2191 4.89344 0.887914 6.20745C0.556727 7.52146 0.596105 8.90155 1.00168 10.1945C1.40725 11.4875 2.16316 12.6429 3.18551 13.5323C4.20786 14.4217 5.45667 15.0105 6.79334 15.2333C6.94074 15.2595 7.0921 15.2532 7.23681 15.2148C7.38151 15.1764 7.51606 15.1068 7.63103 15.0109C7.746 14.915 7.83859 14.7951 7.90233 14.6596C7.96607 14.5241 7.99941 14.3763 8.00001 14.2266C7.99717 13.9907 7.9093 13.7637 7.75254 13.5873C7.59578 13.411 7.38065 13.2971 7.14667 13.2666Z", fill: "currentColor" })), Cn = $(Da), Fa = X(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ease-[ease] shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] data-[disabled=true]:pointer-events-none [&_svg]:size-4 [&_svg]:overflow-visible [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        primary: "data-[disabled=true]:border-transparent",
        outlined: "border data-[disabled=true]:bg-transparent",
        ghost: "data-[disabled=true]:border-transparent"
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
        className: "bg-gi-primary text-white hover:bg-gi-primary-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "secondary",
        className: "bg-gi-secondary text-white hover:bg-gi-secondary-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white"
      },
      {
        type: "primary",
        variant: "danger",
        className: "bg-gi-red text-white hover:bg-gi-red-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white"
      },
      {
        type: "outlined",
        variant: "primary",
        className: "border-gi-primary text-gi-primary bg-transparent hover:bg-gi-ash data-[disabled=true]:border-gi-gray data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "secondary",
        className: "border-gi-secondary text-gi-secondary bg-transparent hover:bg-gi-secondary/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "outlined",
        variant: "danger",
        className: "border-gi-red text-gi-red bg-transparent hover:bg-gi-red/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "primary",
        className: "bg-gi-ash text-gi-primary hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-dark-gray"
      },
      {
        type: "ghost",
        variant: "secondary",
        className: "bg-gi-secondary/10 text-gi-secondary hover:bg-gi-secondary/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
      },
      {
        type: "ghost",
        variant: "danger",
        className: "bg-gi-red/10 text-gi-red hover:bg-gi-red/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray"
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
), _e = $(
  ({
    className: e,
    type: t,
    variant: n,
    size: r,
    isIconButton: o,
    asChild: a = !1,
    LeftIcon: c,
    RightIcon: i,
    isLoading: f,
    htmlType: l = "button",
    children: u,
    disabled: d,
    onClick: h,
    ...g
  }, v) => {
    const m = d || f, y = (x) => {
      if (m) {
        x.preventDefault(), x.stopPropagation();
        return;
      }
      h?.(x);
    }, w = (x) => gn(
      x,
      {
        "aria-hidden": !0,
        focusable: "false"
      }
    ), b = (x) => o && f ? /* @__PURE__ */ p(Cn, {}) : /* @__PURE__ */ k(Zn, { children: [
      f ? /* @__PURE__ */ p(Cn, {}) : c && w(c),
      x,
      !f && i && w(i)
    ] }), C = {
      className: I(
        Fa({ type: t, variant: n, size: r, isIconButton: o, className: e }),
        f && "cursor-wait"
      ),
      disabled: m,
      "aria-disabled": m,
      "aria-busy": f,
      "aria-live": "polite",
      "data-disabled": m,
      onClick: y,
      ...g
    };
    if (a && sa(u)) {
      const x = u;
      return /* @__PURE__ */ p(_a, { ref: v, ...C, children: gn(x, {
        children: b(x.props.children)
      }) });
    }
    return /* @__PURE__ */ p("button", { ref: v, type: l, ...C, children: b(u) });
  }
);
_e.displayName = "Button";
const $a = ({
  options: e,
  selectedOptionId: t,
  isFullWidth: n = !1,
  onSelectedOptionIdChange: r,
  className: o,
  ...a
}) => e.length === 0 ? null : /* @__PURE__ */ p(
  "div",
  {
    role: "radiogroup",
    "aria-label": a["aria-label"],
    className: `
        flex flex-row gap-2
        justify-center 
        ${n ? "w-full" : "w-auto"} 
        ${o || ""}
      `,
    ...a,
    children: e.map((c) => {
      const i = t === c.id;
      return /* @__PURE__ */ p(
        _e,
        {
          role: "radio",
          "aria-checked": i,
          tabIndex: i ? 0 : -1,
          className: n ? "flex-1" : "w-max",
          type: i ? "primary" : "outlined",
          variant: "primary",
          onClick: () => {
            i || r(c.id);
          },
          children: c.text
        },
        c.id
      );
    })
  }
);
$a.displayName = "Button Select";
function le(e, t = []) {
  let n = [];
  function r(a, c) {
    const i = s.createContext(c), f = n.length;
    n = [...n, c];
    const l = (d) => {
      const { scope: h, children: g, ...v } = d, m = h?.[e]?.[f] || i, y = s.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(m.Provider, { value: y, children: g });
    };
    l.displayName = a + "Provider";
    function u(d, h) {
      const g = h?.[e]?.[f] || i, v = s.useContext(g);
      if (v) return v;
      if (c !== void 0) return c;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [l, u];
  }
  const o = () => {
    const a = n.map((c) => s.createContext(c));
    return function(i) {
      const f = i?.[e] || a;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: f } }),
        [i, f]
      );
    };
  };
  return o.scopeName = e, [r, Ba(o, ...t)];
}
function Ba(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const c = r.reduce((i, { useScope: f, scopeName: l }) => {
        const d = f(a)[`__scope${l}`];
        return { ...i, ...d };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function A(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var me = globalThis?.document ? s.useLayoutEffect : () => {
}, Va = s[" useInsertionEffect ".trim().toString()] || me;
function Ue({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, c] = Wa({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, f = i ? e : o;
  {
    const u = s.useRef(e !== void 0);
    s.useEffect(() => {
      const d = u.current;
      d !== i && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), u.current = i;
    }, [i, r]);
  }
  const l = s.useCallback(
    (u) => {
      if (i) {
        const d = za(u) ? u(e) : u;
        d !== e && c.current?.(d);
      } else
        a(u);
    },
    [i, e, a, c]
  );
  return [f, l];
}
function Wa({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = s.useState(e), o = s.useRef(n), a = s.useRef(t);
  return Va(() => {
    a.current = t;
  }, [t]), s.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function za(e) {
  return typeof e == "function";
}
function Yt(e) {
  const t = s.useRef({ value: e, previous: e });
  return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function ht(e) {
  const [t, n] = s.useState(void 0);
  return me(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let c, i;
        if ("borderBoxSize" in a) {
          const f = a.borderBoxSize, l = Array.isArray(f) ? f[0] : f;
          c = l.inlineSize, i = l.blockSize;
        } else
          c = e.offsetWidth, i = e.offsetHeight;
        n({ width: c, height: i });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
function Ua(e, t) {
  return s.useReducer((n, r) => t[n][r] ?? n, e);
}
var Ee = (e) => {
  const { present: t, children: n } = e, r = Ha(t), o = typeof n == "function" ? n({ present: r.isPresent }) : s.Children.only(n), a = U(r.ref, Ga(o));
  return typeof n == "function" || r.isPresent ? s.cloneElement(o, { ref: a }) : null;
};
Ee.displayName = "Presence";
function Ha(e) {
  const [t, n] = s.useState(), r = s.useRef(null), o = s.useRef(e), a = s.useRef("none"), c = e ? "mounted" : "unmounted", [i, f] = Ua(c, {
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
  return s.useEffect(() => {
    const l = Ye(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), me(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const h = a.current, g = Ye(l);
      e ? f("MOUNT") : g === "none" || l?.display === "none" ? f("UNMOUNT") : f(u && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, f]), me(() => {
    if (t) {
      let l;
      const u = t.ownerDocument.defaultView ?? window, d = (g) => {
        const m = Ye(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && m && (f("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = u.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (g) => {
        g.target === t && (a.current = Ye(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        u.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      f("ANIMATION_END");
  }, [t, f]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: s.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Ye(e) {
  return e?.animationName || "none";
}
function Ga(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function ja(e) {
  const t = /* @__PURE__ */ Ka(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), f = i.find(Za);
    if (f) {
      const l = f.props.children, u = i.map((d) => d === f ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ka(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = qa(o), i = Ya(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? xe(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Xa = /* @__PURE__ */ Symbol("radix.slottable");
function Za(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Xa;
}
function Ya(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function qa(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Qa = [
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
], V = Qa.reduce((e, t) => {
  const n = /* @__PURE__ */ ja(`Primitive.${t}`), r = s.forwardRef((o, a) => {
    const { asChild: c, ...i } = o, f = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(f, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function or(e, t) {
  e && Yn.flushSync(() => e.dispatchEvent(t));
}
var gt = "Checkbox", [Ja] = le(gt), [ei, qt] = Ja(gt);
function ti(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: c,
    name: i,
    onCheckedChange: f,
    required: l,
    value: u = "on",
    // @ts-expect-error
    internal_do_not_use_render: d
  } = e, [h, g] = Ue({
    prop: n,
    defaultProp: o ?? !1,
    onChange: f,
    caller: gt
  }), [v, m] = s.useState(null), [y, w] = s.useState(null), b = s.useRef(!1), C = v ? !!c || !!v.closest("form") : (
    // We set this to true by default so that events bubble to forms without JS (SSR)
    !0
  ), x = {
    checked: h,
    disabled: a,
    setChecked: g,
    control: v,
    setControl: m,
    name: i,
    form: c,
    value: u,
    hasConsumerStoppedPropagationRef: b,
    required: l,
    defaultChecked: pe(o) ? !1 : o,
    isFormControl: C,
    bubbleInput: y,
    setBubbleInput: w
  };
  return /* @__PURE__ */ p(
    ei,
    {
      scope: t,
      ...x,
      children: ni(d) ? d(x) : r
    }
  );
}
var ar = "CheckboxTrigger", ir = s.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: c,
      disabled: i,
      checked: f,
      required: l,
      setControl: u,
      setChecked: d,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: g,
      bubbleInput: v
    } = qt(ar, e), m = U(o, u), y = s.useRef(f);
    return s.useEffect(() => {
      const w = a?.form;
      if (w) {
        const b = () => d(y.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, d]), /* @__PURE__ */ p(
      V.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": pe(f) ? "mixed" : f,
        "aria-required": l,
        "data-state": fr(f),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: c,
        ...r,
        ref: m,
        onKeyDown: A(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: A(n, (w) => {
          d((b) => pe(b) ? !0 : !b), v && g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }
);
ir.displayName = ar;
var sr = s.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: c,
      disabled: i,
      value: f,
      onCheckedChange: l,
      form: u,
      ...d
    } = e;
    return /* @__PURE__ */ p(
      ti,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: c,
        onCheckedChange: l,
        name: r,
        form: u,
        value: f,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ k(Zn, { children: [
          /* @__PURE__ */ p(
            ir,
            {
              ...d,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ p(
            dr,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
sr.displayName = gt;
var cr = "CheckboxIndicator", lr = s.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = qt(cr, n);
    return /* @__PURE__ */ p(
      Ee,
      {
        present: r || pe(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          V.span,
          {
            "data-state": fr(a.checked),
            "data-disabled": a.disabled ? "" : void 0,
            ...o,
            ref: t,
            style: { pointerEvents: "none", ...e.style }
          }
        )
      }
    );
  }
);
lr.displayName = cr;
var ur = "CheckboxBubbleInput", dr = s.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: c,
      required: i,
      disabled: f,
      name: l,
      value: u,
      form: d,
      bubbleInput: h,
      setBubbleInput: g
    } = qt(ur, e), v = U(n, g), m = Yt(a), y = ht(r);
    s.useEffect(() => {
      const b = h;
      if (!b) return;
      const C = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, S = !o.current;
      if (m !== a && R) {
        const E = new Event("click", { bubbles: S });
        b.indeterminate = pe(a), R.call(b, pe(a) ? !1 : a), b.dispatchEvent(E);
      }
    }, [h, m, a, o]);
    const w = s.useRef(pe(a) ? !1 : a);
    return /* @__PURE__ */ p(
      V.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: c ?? w.current,
        required: i,
        disabled: f,
        name: l,
        value: u,
        form: d,
        ...t,
        tabIndex: -1,
        ref: v,
        style: {
          ...t.style,
          ...y,
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
dr.displayName = ur;
function ni(e) {
  return typeof e == "function";
}
function pe(e) {
  return e === "indeterminate";
}
function fr(e) {
  return pe(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const pr = ({
  className: e,
  label: t,
  secondaryLabel: n,
  id: r,
  ...o
}) => {
  const a = mt(), c = r ?? a, i = `${c}-description`;
  return /* @__PURE__ */ k("div", { className: "flex items-start group", children: [
    /* @__PURE__ */ p(
      sr,
      {
        id: c,
        "data-slot": "checkbox",
        "aria-describedby": n ? i : void 0,
        className: I(
          "peer shrink-0 rounded-xs border shadow-xs transition-all outline-none",
          "size-3.5 border-input dark:bg-gi-primary/30",
          "focus-visible:ring-2 focus-visible:ring-gi-primary focus-visible:ring-offset-2 ring-offset-background",
          "data-[state=checked]:bg-gi-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-gi-dark-ash",
          "aria-invalid:border-gi-red aria-invalid:ring-gi-red/20 dark:aria-invalid:ring-gi-red/40",
          "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          e
        ),
        ...o,
        children: /* @__PURE__ */ p(
          lr,
          {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none"
          }
        )
      }
    ),
    /* @__PURE__ */ k("div", { className: "flex flex-col ml-2 select-none", children: [
      /* @__PURE__ */ p(
        "label",
        {
          htmlFor: c,
          className: "font-medium text-sm leading-3.5 text-gi-primary mb-1.5 cursor-pointer peer-disabled:cursor-not-allowed",
          children: t
        }
      ),
      n && /* @__PURE__ */ p("span", { id: i, className: "text-gi-gray text-sm leading-5", children: n })
    ] })
  ] });
};
pr.displayName = "Checkbox";
const ri = X(
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
), oi = X(
  "flex items-center justify-center border rounded-full h-8 w-8 mr-2 [&_svg]:size-3 [&_svg_*]:fill-current [&_svg_*]:stroke-none  ",
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
), xn = {
  default: Vt,
  info: Vt,
  success: Jn,
  warning: er,
  error: tr
}, ai = $(
  ({ className: e, variant: t = "default", LeftIcon: n, children: r, ...o }, a) => {
    const c = Zt(() => {
      const i = n || (xn[t] ?? xn.default);
      return /* @__PURE__ */ p(
        i,
        {
          "aria-hidden": "true",
          focusable: "false",
          className: "h-3 w-3 shrink-0 block"
        }
      );
    }, [n, t]);
    return /* @__PURE__ */ k(
      "div",
      {
        ref: a,
        ...o,
        "data-slot": "info-message",
        className: I(ri({ variant: t, className: e })),
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": "true",
              className: oi({ variant: t }),
              children: c
            }
          ),
          /* @__PURE__ */ p("div", { children: r })
        ]
      }
    );
  }
);
ai.displayName = "InfoMessage";
const ii = (e, t, n) => e && !t ? "some text" : n, si = $(
  ({
    className: e,
    type: t,
    label: n,
    helper: r,
    errorText: o,
    isError: a,
    isRequired: c,
    isDisabled: i,
    LeftIcon: f,
    RightIcon: l,
    prefix: u,
    suffix: d,
    dataTestId: h,
    value: g,
    onChange: v,
    onFocus: m,
    onBlur: y,
    placeholder: w,
    defaultValue: b,
    id: C,
    ...x
  }, R) => {
    const S = mt(), E = C ?? S, M = `${E}-description`, [O, _] = be(!1), [L, B] = be(
      g ?? b ?? ""
    ), D = Te(null);
    ca(R, () => D.current), Ie(() => {
      g !== void 0 && B(g ?? "");
    }, [g]);
    const F = (Q) => {
      if (i) return;
      const de = Q.target.value;
      g === void 0 && B(de), v?.(de);
    }, H = (Q) => {
      _(!0), m?.(Q);
    }, T = (Q) => {
      _(!1), y?.(Q);
    }, W = () => {
      i || D.current?.focus();
    }, P = g !== void 0 ? g ?? "" : L, N = String(P), z = N.length > 0, K = a ? o ?? null : r ?? null, te = !O && (z || i);
    return /* @__PURE__ */ k("div", { className: "w-full space-y-1.5 text-left", "data-testid": h, children: [
      n ? /* @__PURE__ */ k(
        "label",
        {
          htmlFor: E,
          className: I(
            "text-sm font-medium block transition-all duration-300 ease",
            a ? "text-gi-red" : "text-gi-primary",
            i && "opacity-50 cursor-not-allowed"
          ),
          children: [
            n,
            c ? /* @__PURE__ */ p("span", { className: "text-gi-red ml-1", children: "*" }) : null
          ]
        }
      ) : null,
      /* @__PURE__ */ k(
        "div",
        {
          className: I(
            "flex items-center w-full min-h-[40px] px-3 bg-white border rounded-[24px] transition-all duration-300 ease",
            !a && !i && "border-gi-primary/10 hover:border-gi-primary/33 focus-within:border-gi-primary/33 cursor-text",
            a && "border-gi-red",
            i && "border-gi-primary/10 cursor-not-allowed bg-white",
            e
          ),
          onClick: W,
          children: [
            f ? /* @__PURE__ */ p(
              "div",
              {
                className: I(
                  "flex-shrink-0 mr-2 flex items-center",
                  i ? "opacity-30" : "text-gi-primary"
                ),
                children: f
              }
            ) : null,
            /* @__PURE__ */ k(
              "div",
              {
                className: "relative flex-1 flex items-center overflow-hidden h-full",
                "data-testid": "input-click-wrapper",
                children: [
                  te ? /* @__PURE__ */ k(
                    "div",
                    {
                      className: I(
                        "absolute inset-y-0 left-0 flex items-center pointer-events-none w-full",
                        !f && "pl-1",
                        !l && "pr-1"
                      ),
                      children: [
                        u && z ? /* @__PURE__ */ p("span", { className: "text-sm mr-0.2 text-gi-primary/50 select-none", children: u }) : null,
                        /* @__PURE__ */ p(
                          "span",
                          {
                            className: I(
                              "text-sm truncate",
                              !z && i ? "text-gi-primary/30" : "text-gi-primary"
                            ),
                            children: ii(i, z, N)
                          }
                        ),
                        d && z ? /* @__PURE__ */ p("span", { className: "text-sm ml-0.2 text-gi-primary/50 select-none", children: d }) : null
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ p(
                    "input",
                    {
                      ...x,
                      id: E,
                      ref: D,
                      type: t,
                      value: P,
                      onChange: F,
                      onFocus: H,
                      onBlur: T,
                      disabled: i,
                      placeholder: w,
                      "data-test-id": h,
                      "aria-invalid": !!a,
                      "aria-describedby": K && !i ? M : void 0,
                      className: I(
                        "flex-1 bg-transparent text-sm text-gi-primary outline-none placeholder:text-gi-primary/30 py-3 w-full",
                        te && "text-transparent placeholder:text-transparent",
                        i && "cursor-not-allowed",
                        !f && "pl-1",
                        !l && "pr-1"
                      )
                    }
                  )
                ]
              }
            ),
            l ? /* @__PURE__ */ p(
              "div",
              {
                "data-testid": "right-icon-container",
                className: I(
                  "flex-shrink-0 ml-2 flex items-center",
                  i ? "opacity-30" : "text-gi-primary"
                ),
                children: l
              }
            ) : null
          ]
        }
      ),
      /* @__PURE__ */ p("div", { className: "min-h-[20px]", children: K && !i ? /* @__PURE__ */ p(
        "p",
        {
          id: M,
          className: I(
            "text-[14px] leading-tight transition-all duration-300 ease",
            a ? "text-gi-red" : "text-gi-primary/50"
          ),
          children: K
        }
      ) : null })
    ] });
  }
);
si.displayName = "Input";
const ci = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), li = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), En = (e) => {
  const t = li(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, mr = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), ui = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var di = {
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
const fi = $(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: c,
    ...i
  }, f) => Bt(
    "svg",
    {
      ref: f,
      ...di,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: mr("lucide", o),
      ...!a && !ui(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([l, u]) => Bt(l, u)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const hr = (e, t) => {
  const n = $(
    ({ className: r, ...o }, a) => Bt(fi, {
      ref: a,
      iconNode: t,
      className: mr(
        `lucide-${ci(En(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = En(e), n;
};
const pi = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], mi = hr("circle", pi);
const hi = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], gi = hr("x", hi), vi = X(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0"
      }
    }
  }
), yi = X(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95"
      }
    }
  }
), wi = X(
  "flex items-start justify-between text-gi-primary"
), bi = X("flex justify-end gap-3 mt-6"), Ci = $(
  ({
    title: e,
    description: t,
    children: n,
    actions: r,
    isOpen: o,
    isClosable: a = !0,
    isCloseOnOverlayClick: c = !0,
    onClose: i,
    className: f,
    dataTestId: l,
    ...u
  }, d) => {
    const h = Te(null), g = Te(null), v = mt(), [m, y] = be(o);
    Ie(() => {
      o && y(!0);
    }, [o]);
    const w = (b) => {
      b.target === b.currentTarget && (o || y(!1));
    };
    return Ie(() => {
      if (o)
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = "";
        };
    }, [o]), Ie(() => {
      if (!o || !m) return;
      const b = h.current;
      g.current = document.activeElement;
      const C = b.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ), x = C[0], R = C[C.length - 1];
      x?.focus();
      const S = (E) => {
        if (E.key === "Escape" && a) {
          i();
          return;
        }
        if (E.key === "Tab") {
          if (C.length === 0) {
            E.preventDefault(), b.focus();
            return;
          }
          E.shiftKey ? document.activeElement === x && (E.preventDefault(), R?.focus()) : document.activeElement === R && (E.preventDefault(), x?.focus());
        }
      };
      return document.addEventListener("keydown", S), () => {
        document.removeEventListener("keydown", S), g.current?.focus();
      };
    }, [o, m, a, i]), m ? /* @__PURE__ */ p(
      "div",
      {
        className: vi({ state: o ? "open" : "closed" }),
        onTransitionEnd: w,
        ref: d,
        onClick: () => {
          c && a && i();
        },
        children: /* @__PURE__ */ k(
          "div",
          {
            ref: h,
            ...u,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": v,
            tabIndex: -1,
            "data-test-id": l,
            className: I(
              yi({ state: o ? "open" : "closed" }),
              f
            ),
            onClick: (b) => {
              b.stopPropagation(), u.onClick?.(b);
            },
            children: [
              /* @__PURE__ */ k("div", { className: wi(), children: [
                /* @__PURE__ */ k("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ p("h2", { id: v, className: "font-semibold break-words", children: e }),
                  t && /* @__PURE__ */ p("p", { className: "text-[14px] mt-2 break-words text-gi-gray", children: t })
                ] }),
                a && /* @__PURE__ */ p(
                  "button",
                  {
                    type: "button",
                    onClick: i,
                    "aria-label": "Close modal",
                    className: "flex items-center cursor-pointer justify-center size-8 rounded-full shrink-0 transition hover:bg-gi-secondary/10 focus:outline-none focus:ring-2 focus:ring-gi-secondary/40 focus:ring-offset-2",
                    children: /* @__PURE__ */ p(gi, { className: "size-5 fill-gi-primary" })
                  }
                )
              ] }),
              n && /* @__PURE__ */ p("div", { className: "mt-2 break-words text-gi-primary", children: n }),
              r && /* @__PURE__ */ p("div", { className: bi(), children: r })
            ]
          }
        )
      }
    ) : null;
  }
);
Ci.displayName = "Modal";
const xi = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M4.23486 7.43507C3.92236 7.74757 3.92236 8.25507 4.23486 8.56757L9.03486 13.3676C9.34736 13.6801 9.85486 13.6801 10.1674 13.3676C10.4799 13.0551 10.4799 12.5476 10.1674 12.2351L5.93236 8.00007L10.1649 3.76507C10.4774 3.45257 10.4774 2.94507 10.1649 2.63257C9.85236 2.32007 9.34486 2.32007 9.03236 2.63257L4.23236 7.43257L4.23486 7.43507Z", fill: "currentColor" })), Ei = $(xi), Ri = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M11.7651 8.56493C12.0776 8.25243 12.0776 7.74493 11.7651 7.43243L6.96514 2.63243C6.65264 2.31993 6.14514 2.31993 5.83264 2.63243C5.52014 2.94493 5.52014 3.45243 5.83264 3.76493L10.0676 7.99993L5.83514 12.2349C5.52264 12.5474 5.52264 13.0549 5.83514 13.3674C6.14764 13.6799 6.65514 13.6799 6.96764 13.3674L11.7676 8.56743L11.7651 8.56493Z", fill: "currentColor" })), Si = $(Ri), qe = "...", Qe = (e, t) => {
  const n = t - e + 1;
  return Array.from({ length: n }, (r, o) => o + e);
}, Ni = (e, t, n) => {
  const o = t, a = Math.max(e - n, 1), c = Math.min(e + n, o), i = a > 2, f = c < o - 1;
  return {
    shouldShowLeftDots: i,
    shouldShowRightDots: f,
    leftSiblingIndex: a,
    rightSiblingIndex: c
  };
};
function Mi(e, t, n = 1) {
  if (n + 5 >= t)
    return Qe(1, t);
  const {
    shouldShowLeftDots: o,
    shouldShowRightDots: a,
    leftSiblingIndex: c,
    rightSiblingIndex: i
  } = Ni(e, t, n);
  if (!o && a) {
    const l = 3 + 2 * n;
    return [...Qe(1, l), qe, t];
  }
  if (o && !a) {
    const l = 3 + 2 * n, u = Qe(
      t - l + 1,
      t
    );
    return [1, qe, ...u];
  }
  const f = Qe(c, i);
  return [1, qe, ...f, qe, t];
}
const gr = $(
  ({
    page: e,
    totalPages: t,
    onChange: n,
    isOnlyActions: r = !1,
    isFullWidth: o = !1,
    siblingCount: a = 1,
    dataTestId: c,
    className: i,
    ...f
  }, l) => {
    const u = Zt(() => Mi(e, t, a), [e, t, a]), d = () => {
      n(e + 1);
    }, h = () => {
      n(e - 1);
    };
    return /* @__PURE__ */ k(
      "nav",
      {
        ref: l,
        "aria-label": "Pagination",
        "data-test-id": c,
        className: I(
          "flex items-center",
          o ? "w-full justify-between" : "w-auto gap-2",
          i
        ),
        ...f,
        children: [
          /* @__PURE__ */ k(
            _e,
            {
              type: "outlined",
              variant: "primary",
              disabled: e === 1,
              isIconButton: r,
              onClick: h,
              "aria-label": "Previous",
              children: [
                /* @__PURE__ */ p("div", {}),
                /* @__PURE__ */ p(Ei, {}),
                /* @__PURE__ */ p("div", {})
              ]
            }
          ),
          !r && /* @__PURE__ */ p("ul", { className: "flex items-center gap-2 m-0 p-0 list-none", children: u.map((g, v) => typeof g == "string" ? /* @__PURE__ */ p("li", { children: /* @__PURE__ */ p(
            _e,
            {
              type: "ghost",
              variant: "primary",
              className: "pointer-events-none",
              "aria-hidden": "true",
              "aria-label": "More Pages",
              isIconButton: !0,
              children: "…"
            }
          ) }, `dots-${v}`) : /* @__PURE__ */ p("li", { children: /* @__PURE__ */ p(
            _e,
            {
              type: g === e ? "primary" : "ghost",
              variant: "primary",
              onClick: () => n(g),
              isIconButton: !0,
              "aria-current": g === e ? "page" : void 0,
              children: g
            }
          ) }, `page-${g}`)) }),
          /* @__PURE__ */ k(
            _e,
            {
              type: "outlined",
              variant: "primary",
              disabled: e === t,
              isIconButton: r,
              "aria-label": "Next",
              onClick: d,
              children: [
                /* @__PURE__ */ p("div", {}),
                /* @__PURE__ */ p(Si, {}),
                /* @__PURE__ */ p("div", {})
              ]
            }
          )
        ]
      }
    );
  }
);
gr.displayName = "Pagination";
const Pi = X(
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
), Ai = X(
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
), _i = $(
  ({ className: e, value: t, size: n, variant: r, dataTestId: o, ...a }, c) => {
    const i = Math.min(100, Math.max(0, t));
    return /* @__PURE__ */ p(
      "div",
      {
        ref: c,
        "data-slot": "progress-bar",
        "data-test-id": o,
        className: I(Pi({ size: n, className: e })),
        role: "progressbar",
        "aria-valuenow": i,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        ...a,
        children: /* @__PURE__ */ p(
          "div",
          {
            className: Ai({ variant: r }),
            style: { width: `${i}%` }
          }
        )
      }
    );
  }
);
_i.displayName = "ProgressBar";
// @__NO_SIDE_EFFECTS__
function Rn(e) {
  const t = /* @__PURE__ */ Ii(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), f = i.find(Oi);
    if (f) {
      const l = f.props.children, u = i.map((d) => d === f ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = Li(o), i = Ti(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? xe(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ki = /* @__PURE__ */ Symbol("radix.slottable");
function Oi(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ki;
}
function Ti(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Li(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function vr(e) {
  const t = e + "CollectionProvider", [n, r] = le(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (m) => {
    const { scope: y, children: w } = m, b = ye.useRef(null), C = ye.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: y, itemMap: C, collectionRef: b, children: w });
  };
  c.displayName = t;
  const i = e + "CollectionSlot", f = /* @__PURE__ */ Rn(i), l = ye.forwardRef(
    (m, y) => {
      const { scope: w, children: b } = m, C = a(i, w), x = U(y, C.collectionRef);
      return /* @__PURE__ */ p(f, { ref: x, children: b });
    }
  );
  l.displayName = i;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", h = /* @__PURE__ */ Rn(u), g = ye.forwardRef(
    (m, y) => {
      const { scope: w, children: b, ...C } = m, x = ye.useRef(null), R = U(y, x), S = a(u, w);
      return ye.useEffect(() => (S.itemMap.set(x, { ref: x, ...C }), () => {
        S.itemMap.delete(x);
      })), /* @__PURE__ */ p(h, { [d]: "", ref: R, children: b });
    }
  );
  g.displayName = u;
  function v(m) {
    const y = a(e + "CollectionConsumer", m);
    return ye.useCallback(() => {
      const b = y.collectionRef.current;
      if (!b) return [];
      const C = Array.from(b.querySelectorAll(`[${d}]`));
      return Array.from(y.itemMap.values()).sort(
        (S, E) => C.indexOf(S.ref.current) - C.indexOf(E.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [
    { Provider: c, Slot: l, ItemSlot: g },
    v,
    r
  ];
}
var Di = s[" useId ".trim().toString()] || (() => {
}), Fi = 0;
function Wt(e) {
  const [t, n] = s.useState(Di());
  return me(() => {
    n((r) => r ?? String(Fi++));
  }, [e]), t ? `radix-${t}` : "";
}
function ie(e) {
  const t = s.useRef(e);
  return s.useEffect(() => {
    t.current = e;
  }), s.useMemo(() => (...n) => t.current?.(...n), []);
}
var $i = s.createContext(void 0);
function Qt(e) {
  const t = s.useContext($i);
  return e || t || "ltr";
}
var Pt = "rovingFocusGroup.onEntryFocus", Bi = { bubbles: !1, cancelable: !0 }, He = "RovingFocusGroup", [zt, yr, Vi] = vr(He), [Wi, vt] = le(
  He,
  [Vi]
), [zi, Ui] = Wi(He), wr = s.forwardRef(
  (e, t) => /* @__PURE__ */ p(zt.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(zt.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Hi, { ...e, ref: t }) }) })
);
wr.displayName = He;
var Hi = s.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: c,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: f,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, h = s.useRef(null), g = U(t, h), v = Qt(a), [m, y] = Ue({
    prop: c,
    defaultProp: i ?? null,
    onChange: f,
    caller: He
  }), [w, b] = s.useState(!1), C = ie(l), x = yr(n), R = s.useRef(!1), [S, E] = s.useState(0);
  return s.useEffect(() => {
    const M = h.current;
    if (M)
      return M.addEventListener(Pt, C), () => M.removeEventListener(Pt, C);
  }, [C]), /* @__PURE__ */ p(
    zi,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: m,
      onItemFocus: s.useCallback(
        (M) => y(M),
        [y]
      ),
      onItemShiftTab: s.useCallback(() => b(!0), []),
      onFocusableItemAdd: s.useCallback(
        () => E((M) => M + 1),
        []
      ),
      onFocusableItemRemove: s.useCallback(
        () => E((M) => M - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        V.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: A(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: A(e.onFocus, (M) => {
            const O = !R.current;
            if (M.target === M.currentTarget && O && !w) {
              const _ = new CustomEvent(Pt, Bi);
              if (M.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
                const L = x().filter((T) => T.focusable), B = L.find((T) => T.active), D = L.find((T) => T.id === m), H = [B, D, ...L].filter(
                  Boolean
                ).map((T) => T.ref.current);
                xr(H, u);
              }
            }
            R.current = !1;
          }),
          onBlur: A(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), br = "RovingFocusGroupItem", Cr = s.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: c,
      ...i
    } = e, f = Wt(), l = a || f, u = Ui(br, n), d = u.currentTabStopId === l, h = yr(n), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: m } = u;
    return s.useEffect(() => {
      if (r)
        return g(), () => v();
    }, [r, g, v]), /* @__PURE__ */ p(
      zt.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p(
          V.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: A(e.onMouseDown, (y) => {
              r ? u.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: A(e.onFocus, () => u.onItemFocus(l)),
            onKeyDown: A(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = Ki(y, u.orientation, u.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let C = h().filter((x) => x.focusable).map((x) => x.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const x = C.indexOf(y.currentTarget);
                  C = u.loop ? Xi(C, x + 1) : C.slice(x + 1);
                }
                setTimeout(() => xr(C));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: d, hasTabStop: m != null }) : c
          }
        )
      }
    );
  }
);
Cr.displayName = br;
var Gi = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ji(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function Ki(e, t, n) {
  const r = ji(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return Gi[r];
}
function xr(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function Xi(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Er = wr, Rr = Cr, Jt = "Radio", [Zi, Sr] = le(Jt), [Yi, qi] = Zi(Jt), Nr = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: c,
      value: i = "on",
      onCheck: f,
      form: l,
      ...u
    } = e, [d, h] = s.useState(null), g = U(t, (y) => h(y)), v = s.useRef(!1), m = d ? l || !!d.closest("form") : !0;
    return /* @__PURE__ */ k(Yi, { scope: n, checked: o, disabled: c, children: [
      /* @__PURE__ */ p(
        V.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": _r(o),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: i,
          ...u,
          ref: g,
          onClick: A(e.onClick, (y) => {
            o || f?.(), m && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ p(
        Ar,
        {
          control: d,
          bubbles: !v.current,
          name: r,
          value: i,
          checked: o,
          required: a,
          disabled: c,
          form: l,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Nr.displayName = Jt;
var Mr = "RadioIndicator", Pr = s.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = qi(Mr, n);
    return /* @__PURE__ */ p(Ee, { present: r || a.checked, children: /* @__PURE__ */ p(
      V.span,
      {
        "data-state": _r(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Pr.displayName = Mr;
var Qi = "RadioBubbleInput", Ar = s.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const c = s.useRef(null), i = U(c, a), f = Yt(n), l = ht(t);
    return s.useEffect(() => {
      const u = c.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (f !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(u, n), u.dispatchEvent(v);
      }
    }, [f, n, r]), /* @__PURE__ */ p(
      V.input,
      {
        type: "radio",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
Ar.displayName = Qi;
function _r(e) {
  return e ? "checked" : "unchecked";
}
var Ji = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], yt = "RadioGroup", [es] = le(yt, [
  vt,
  Sr
]), Ir = vt(), kr = Sr(), [ts, ns] = es(yt), Or = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: c = !1,
      disabled: i = !1,
      orientation: f,
      dir: l,
      loop: u = !0,
      onValueChange: d,
      ...h
    } = e, g = Ir(n), v = Qt(l), [m, y] = Ue({
      prop: a,
      defaultProp: o ?? null,
      onChange: d,
      caller: yt
    });
    return /* @__PURE__ */ p(
      ts,
      {
        scope: n,
        name: r,
        required: c,
        disabled: i,
        value: m,
        onValueChange: y,
        children: /* @__PURE__ */ p(
          Er,
          {
            asChild: !0,
            ...g,
            orientation: f,
            dir: v,
            loop: u,
            children: /* @__PURE__ */ p(
              V.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": f,
                "data-disabled": i ? "" : void 0,
                dir: v,
                ...h,
                ref: t
              }
            )
          }
        )
      }
    );
  }
);
Or.displayName = yt;
var Tr = "RadioGroupItem", Lr = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = ns(Tr, n), c = a.disabled || r, i = Ir(n), f = kr(n), l = s.useRef(null), u = U(t, l), d = a.value === o.value, h = s.useRef(!1);
    return s.useEffect(() => {
      const g = (m) => {
        Ji.includes(m.key) && (h.current = !0);
      }, v = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ p(
      Rr,
      {
        asChild: !0,
        ...i,
        focusable: !c,
        active: d,
        children: /* @__PURE__ */ p(
          Nr,
          {
            disabled: c,
            required: a.required,
            checked: d,
            ...f,
            ...o,
            name: a.name,
            ref: u,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: A((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: A(o.onFocus, () => {
              h.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
Lr.displayName = Tr;
var rs = "RadioGroupIndicator", Dr = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = kr(n);
    return /* @__PURE__ */ p(Pr, { ...o, ...r, ref: t });
  }
);
Dr.displayName = rs;
var os = Or, as = Lr, is = Dr;
const ss = $(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ p(
  os,
  {
    "data-slot": "radio-group",
    orientation: t,
    ref: r,
    className: I(
      "grid gap-2 text-gi-primary",
      t === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1",
      e
    ),
    ...n
  }
));
ss.displayName = "RadioGroup";
const cs = $(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  as,
  {
    ref: n,
    "data-slot": "radio-group-item",
    className: I(
      "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      is,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center",
        children: /* @__PURE__ */ p(
          mi,
          {
            className: I(
              "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
              "fill-gi-primary text-gi-primary"
            ),
            strokeWidth: 1
          }
        )
      }
    )
  }
));
cs.displayName = "RadioGroupItem";
const ls = $(
  ({
    title: e,
    actions: t,
    actionsPosition: n = "right",
    children: r,
    className: o,
    dataTestId: a,
    ...c
  }, i) => {
    const l = `section_title_${mt()}`, u = t && n === "right", d = t && n === "bottom";
    return /* @__PURE__ */ k(
      "section",
      {
        ref: i,
        "data-test-id": a,
        "aria-labelledby": l,
        className: I(
          "w-full flex flex-col border border-gi-ash rounded-[48px]",
          o
        ),
        ...c,
        children: [
          /* @__PURE__ */ k("header", { className: "flex flex-col w-full p-6 gap-4", children: [
            /* @__PURE__ */ k("div", { className: "flex flex-row items-center justify-between w-full", children: [
              /* @__PURE__ */ p(
                "h2",
                {
                  id: l,
                  className: "text-gi-light-primary font-extrabold text-[24px]/[120%]",
                  children: e
                }
              ),
              u && /* @__PURE__ */ p(
                "div",
                {
                  role: "group",
                  "aria-label": `Actions for ${e}`,
                  className: "flex flex-row items-center gap-3",
                  children: t
                }
              )
            ] }),
            d && /* @__PURE__ */ p(
              "div",
              {
                role: "group",
                "aria-label": `Actions for ${e}`,
                className: "flex flex-row items-center gap-3",
                children: t
              }
            )
          ] }),
          /* @__PURE__ */ p("div", { className: "flex flex-col w-full border-gi-ash rounded-[48px] bg-gi-ash p-6 gap-4", children: /* @__PURE__ */ p("div", { className: "text-gi-light-primary bg-background rounded-[32px] border py-4.5 px-6 border-gi-dark-ash", children: r }) })
        ]
      }
    );
  }
);
ls.displayName = "Section";
function us(e, t = globalThis?.document) {
  const n = ie(e);
  s.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var ds = "DismissableLayer", Ut = "dismissableLayer.update", fs = "dismissableLayer.pointerDownOutside", ps = "dismissableLayer.focusOutside", Sn, Fr = s.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), $r = s.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...f
    } = e, l = s.useContext(Fr), [u, d] = s.useState(null), h = u?.ownerDocument ?? globalThis?.document, [, g] = s.useState({}), v = U(t, (E) => d(E)), m = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(y), b = u ? m.indexOf(u) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= w, R = gs((E) => {
      const M = E.target, O = [...l.branches].some((_) => _.contains(M));
      !x || O || (o?.(E), c?.(E), E.defaultPrevented || i?.());
    }, h), S = vs((E) => {
      const M = E.target;
      [...l.branches].some((_) => _.contains(M)) || (a?.(E), c?.(E), E.defaultPrevented || i?.());
    }, h);
    return us((E) => {
      b === l.layers.size - 1 && (r?.(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, h), s.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Sn = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Nn(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = Sn);
        };
    }, [u, h, n, l]), s.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Nn());
    }, [u, l]), s.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(Ut, E), () => document.removeEventListener(Ut, E);
    }, []), /* @__PURE__ */ p(
      V.div,
      {
        ...f,
        ref: v,
        style: {
          pointerEvents: C ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: A(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: A(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: A(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
$r.displayName = ds;
var ms = "DismissableLayerBranch", hs = s.forwardRef((e, t) => {
  const n = s.useContext(Fr), r = s.useRef(null), o = U(t, r);
  return s.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p(V.div, { ...e, ref: o });
});
hs.displayName = ms;
function gs(e, t = globalThis?.document) {
  const n = ie(e), r = s.useRef(!1), o = s.useRef(() => {
  });
  return s.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let f = function() {
          Br(
            fs,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = f, t.addEventListener("click", o.current, { once: !0 })) : f();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, c = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(c), t.removeEventListener("pointerdown", a), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function vs(e, t = globalThis?.document) {
  const n = ie(e), r = s.useRef(!1);
  return s.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Br(ps, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Nn() {
  const e = new CustomEvent(Ut);
  document.dispatchEvent(e);
}
function Br(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? or(o, a) : o.dispatchEvent(a);
}
var At = 0;
function ys() {
  s.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Mn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Mn()), At++, () => {
      At === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), At--;
    };
  }, []);
}
function Mn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var _t = "focusScope.autoFocusOnMount", It = "focusScope.autoFocusOnUnmount", Pn = { bubbles: !1, cancelable: !0 }, ws = "FocusScope", Vr = s.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, f] = s.useState(null), l = ie(o), u = ie(a), d = s.useRef(null), h = U(t, (m) => f(m)), g = s.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  s.useEffect(() => {
    if (r) {
      let m = function(C) {
        if (g.paused || !i) return;
        const x = C.target;
        i.contains(x) ? d.current = x : fe(d.current, { select: !0 });
      }, y = function(C) {
        if (g.paused || !i) return;
        const x = C.relatedTarget;
        x !== null && (i.contains(x) || fe(d.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && fe(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, i, g.paused]), s.useEffect(() => {
    if (i) {
      _n.add(g);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const w = new CustomEvent(_t, Pn);
        i.addEventListener(_t, l), i.dispatchEvent(w), w.defaultPrevented || (bs(Ss(Wr(i)), { select: !0 }), document.activeElement === m && fe(i));
      }
      return () => {
        i.removeEventListener(_t, l), setTimeout(() => {
          const w = new CustomEvent(It, Pn);
          i.addEventListener(It, u), i.dispatchEvent(w), w.defaultPrevented || fe(m ?? document.body, { select: !0 }), i.removeEventListener(It, u), _n.remove(g);
        }, 0);
      };
    }
  }, [i, l, u, g]);
  const v = s.useCallback(
    (m) => {
      if (!n && !r || g.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (y && w) {
        const b = m.currentTarget, [C, x] = Cs(b);
        C && x ? !m.shiftKey && w === x ? (m.preventDefault(), n && fe(C, { select: !0 })) : m.shiftKey && w === C && (m.preventDefault(), n && fe(x, { select: !0 })) : w === b && m.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p(V.div, { tabIndex: -1, ...c, ref: h, onKeyDown: v });
});
Vr.displayName = ws;
function bs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (fe(r, { select: t }), document.activeElement !== n) return;
}
function Cs(e) {
  const t = Wr(e), n = An(t, e), r = An(t.reverse(), e);
  return [n, r];
}
function Wr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function An(e, t) {
  for (const n of e)
    if (!xs(n, { upTo: t })) return n;
}
function xs(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Es(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function fe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Es(e) && t && e.select();
  }
}
var _n = Rs();
function Rs() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = In(e, t), e.unshift(t);
    },
    remove(t) {
      e = In(e, t), e[0]?.resume();
    }
  };
}
function In(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ss(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Ns = ["top", "right", "bottom", "left"], he = Math.min, Z = Math.max, ct = Math.round, Je = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), Ms = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ht(e, t, n) {
  return Z(e, he(t, n));
}
function se(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ce(e) {
  return e.split("-")[0];
}
function De(e) {
  return e.split("-")[1];
}
function en(e) {
  return e === "x" ? "y" : "x";
}
function tn(e) {
  return e === "y" ? "height" : "width";
}
function re(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function nn(e) {
  return en(re(e));
}
function Ps(e, t, n) {
  n === void 0 && (n = !1);
  const r = De(e), o = nn(e), a = tn(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = lt(c)), [c, lt(c)];
}
function As(e) {
  const t = lt(e);
  return [Gt(e), t, Gt(t)];
}
function Gt(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const kn = ["left", "right"], On = ["right", "left"], _s = ["top", "bottom"], Is = ["bottom", "top"];
function ks(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? On : kn : t ? kn : On;
    case "left":
    case "right":
      return t ? _s : Is;
    default:
      return [];
  }
}
function Os(e, t, n, r) {
  const o = De(e);
  let a = ks(ce(e), n === "start", r);
  return o && (a = a.map((c) => c + "-" + o), t && (a = a.concat(a.map(Gt)))), a;
}
function lt(e) {
  const t = ce(e);
  return Ms[t] + e.slice(t.length);
}
function Ts(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function zr(e) {
  return typeof e != "number" ? Ts(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ut(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Tn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = re(t), c = nn(t), i = tn(c), f = ce(t), l = a === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let g;
  switch (f) {
    case "top":
      g = {
        x: u,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch (De(t)) {
    case "start":
      g[c] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      g[c] += h * (n && l ? -1 : 1);
      break;
  }
  return g;
}
async function Ls(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: c,
    elements: i,
    strategy: f
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = se(t, e), v = zr(g), y = i[h ? d === "floating" ? "reference" : "floating" : d], w = ut(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: f
  })), b = d === "floating" ? {
    x: r,
    y: o,
    width: c.floating.width,
    height: c.floating.height
  } : c.reference, C = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)), x = await (a.isElement == null ? void 0 : a.isElement(C)) ? await (a.getScale == null ? void 0 : a.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, R = ut(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: C,
    strategy: f
  }) : b);
  return {
    top: (w.top - R.top + v.top) / x.y,
    bottom: (R.bottom - w.bottom + v.bottom) / x.y,
    left: (w.left - R.left + v.left) / x.x,
    right: (R.right - w.right + v.right) / x.x
  };
}
const Ds = 50, Fs = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: c
  } = n, i = c.detectOverflow ? c : {
    ...c,
    detectOverflow: Ls
  }, f = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let l = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = Tn(l, r, f), h = r, g = 0;
  const v = {};
  for (let m = 0; m < a.length; m++) {
    const y = a[m];
    if (!y)
      continue;
    const {
      name: w,
      fn: b
    } = y, {
      x: C,
      y: x,
      data: R,
      reset: S
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: o,
      middlewareData: v,
      rects: l,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = C ?? u, d = x ?? d, v[w] = {
      ...v[w],
      ...R
    }, S && g < Ds && (g++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (l = S.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: u,
      y: d
    } = Tn(l, h, f)), m = -1);
  }
  return {
    x: u,
    y: d,
    placement: h,
    strategy: o,
    middlewareData: v
  };
}, $s = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: a,
      platform: c,
      elements: i,
      middlewareData: f
    } = t, {
      element: l,
      padding: u = 0
    } = se(e, t) || {};
    if (l == null)
      return {};
    const d = zr(u), h = {
      x: n,
      y: r
    }, g = nn(o), v = tn(g), m = await c.getDimensions(l), y = g === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", C = y ? "clientHeight" : "clientWidth", x = a.reference[v] + a.reference[g] - h[g] - a.floating[v], R = h[g] - a.reference[g], S = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l));
    let E = S ? S[C] : 0;
    (!E || !await (c.isElement == null ? void 0 : c.isElement(S))) && (E = i.floating[C] || a.floating[v]);
    const M = x / 2 - R / 2, O = E / 2 - m[v] / 2 - 1, _ = he(d[w], O), L = he(d[b], O), B = _, D = E - m[v] - L, F = E / 2 - m[v] / 2 + M, H = Ht(B, F, D), T = !f.arrow && De(o) != null && F !== H && a.reference[v] / 2 - (F < B ? _ : L) - m[v] / 2 < 0, W = T ? F < B ? F - B : F - D : 0;
    return {
      [g]: h[g] + W,
      data: {
        [g]: H,
        centerOffset: F - H - W,
        ...T && {
          alignmentOffset: W
        }
      },
      reset: T
    };
  }
}), Bs = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: a,
        rects: c,
        initialPlacement: i,
        platform: f,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...y
      } = se(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = ce(o), b = re(i), C = ce(i) === i, x = await (f.isRTL == null ? void 0 : f.isRTL(l.floating)), R = h || (C || !m ? [lt(i)] : As(i)), S = v !== "none";
      !h && S && R.push(...Os(i, m, v, x));
      const E = [i, ...R], M = await f.detectOverflow(t, y), O = [];
      let _ = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (u && O.push(M[w]), d) {
        const F = Ps(o, c, x);
        O.push(M[F[0]], M[F[1]]);
      }
      if (_ = [..._, {
        placement: o,
        overflows: O
      }], !O.every((F) => F <= 0)) {
        var L, B;
        const F = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, H = E[F];
        if (H && (!(d === "alignment" ? b !== re(H) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        _.every((P) => re(P.placement) === b ? P.overflows[0] > 0 : !0)))
          return {
            data: {
              index: F,
              overflows: _
            },
            reset: {
              placement: H
            }
          };
        let T = (B = _.filter((W) => W.overflows[0] <= 0).sort((W, P) => W.overflows[1] - P.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!T)
          switch (g) {
            case "bestFit": {
              var D;
              const W = (D = _.filter((P) => {
                if (S) {
                  const N = re(P.placement);
                  return N === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((N) => N > 0).reduce((N, z) => N + z, 0)]).sort((P, N) => P[1] - N[1])[0]) == null ? void 0 : D[0];
              W && (T = W);
              break;
            }
            case "initialPlacement":
              T = i;
              break;
          }
        if (o !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
function Ln(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Dn(e) {
  return Ns.some((t) => e[t] >= 0);
}
const Vs = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n,
        platform: r
      } = t, {
        strategy: o = "referenceHidden",
        ...a
      } = se(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = Ln(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Dn(i)
            }
          };
        }
        case "escaped": {
          const c = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = Ln(c, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Dn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Ur = /* @__PURE__ */ new Set(["left", "top"]);
async function Ws(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = ce(n), i = De(n), f = re(n) === "y", l = Ur.has(c) ? -1 : 1, u = a && f ? -1 : 1, d = se(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return i && typeof v == "number" && (g = i === "end" ? v * -1 : v), f ? {
    x: g * u,
    y: h * l
  } : {
    x: h * l,
    y: g * u
  };
}
const zs = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: a,
        placement: c,
        middlewareData: i
      } = t, f = await Ws(t, e);
      return c === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + f.x,
        y: a + f.y,
        data: {
          ...f,
          placement: c
        }
      };
    }
  };
}, Us = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        platform: a
      } = t, {
        mainAxis: c = !0,
        crossAxis: i = !1,
        limiter: f = {
          fn: (w) => {
            let {
              x: b,
              y: C
            } = w;
            return {
              x: b,
              y: C
            };
          }
        },
        ...l
      } = se(e, t), u = {
        x: n,
        y: r
      }, d = await a.detectOverflow(t, l), h = re(ce(o)), g = en(h);
      let v = u[g], m = u[h];
      if (c) {
        const w = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", C = v + d[w], x = v - d[b];
        v = Ht(C, v, x);
      }
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", C = m + d[w], x = m - d[b];
        m = Ht(C, m, x);
      }
      const y = f.fn({
        ...t,
        [g]: v,
        [h]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r,
          enabled: {
            [g]: c,
            [h]: i
          }
        }
      };
    }
  };
}, Hs = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: a,
        middlewareData: c
      } = t, {
        offset: i = 0,
        mainAxis: f = !0,
        crossAxis: l = !0
      } = se(e, t), u = {
        x: n,
        y: r
      }, d = re(o), h = en(d);
      let g = u[h], v = u[d];
      const m = se(i, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (f) {
        const C = h === "y" ? "height" : "width", x = a.reference[h] - a.floating[C] + y.mainAxis, R = a.reference[h] + a.reference[C] - y.mainAxis;
        g < x ? g = x : g > R && (g = R);
      }
      if (l) {
        var w, b;
        const C = h === "y" ? "width" : "height", x = Ur.has(ce(o)), R = a.reference[d] - a.floating[C] + (x && ((w = c.offset) == null ? void 0 : w[d]) || 0) + (x ? 0 : y.crossAxis), S = a.reference[d] + a.reference[C] + (x ? 0 : ((b = c.offset) == null ? void 0 : b[d]) || 0) - (x ? y.crossAxis : 0);
        v < R ? v = R : v > S && (v = S);
      }
      return {
        [h]: g,
        [d]: v
      };
    }
  };
}, Gs = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        rects: a,
        platform: c,
        elements: i
      } = t, {
        apply: f = () => {
        },
        ...l
      } = se(e, t), u = await c.detectOverflow(t, l), d = ce(o), h = De(o), g = re(o) === "y", {
        width: v,
        height: m
      } = a.floating;
      let y, w;
      d === "top" || d === "bottom" ? (y = d, w = h === (await (c.isRTL == null ? void 0 : c.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = d, y = h === "end" ? "top" : "bottom");
      const b = m - u.top - u.bottom, C = v - u.left - u.right, x = he(m - u[y], b), R = he(v - u[w], C), S = !t.middlewareData.shift;
      let E = x, M = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (M = C), (r = t.middlewareData.shift) != null && r.enabled.y && (E = b), S && !h) {
        const _ = Z(u.left, 0), L = Z(u.right, 0), B = Z(u.top, 0), D = Z(u.bottom, 0);
        g ? M = v - 2 * (_ !== 0 || L !== 0 ? _ + L : Z(u.left, u.right)) : E = m - 2 * (B !== 0 || D !== 0 ? B + D : Z(u.top, u.bottom));
      }
      await f({
        ...t,
        availableWidth: M,
        availableHeight: E
      });
      const O = await c.getDimensions(i.floating);
      return v !== O.width || m !== O.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function wt() {
  return typeof window < "u";
}
function Fe(e) {
  return Hr(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Y(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ae(e) {
  var t;
  return (t = (Hr(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Hr(e) {
  return wt() ? e instanceof Node || e instanceof Y(e).Node : !1;
}
function J(e) {
  return wt() ? e instanceof Element || e instanceof Y(e).Element : !1;
}
function ue(e) {
  return wt() ? e instanceof HTMLElement || e instanceof Y(e).HTMLElement : !1;
}
function Fn(e) {
  return !wt() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Y(e).ShadowRoot;
}
function Ge(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ee(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function js(e) {
  return /^(table|td|th)$/.test(Fe(e));
}
function bt(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const Ks = /transform|translate|scale|rotate|perspective|filter/, Xs = /paint|layout|strict|content/, we = (e) => !!e && e !== "none";
let kt;
function rn(e) {
  const t = J(e) ? ee(e) : e;
  return we(t.transform) || we(t.translate) || we(t.scale) || we(t.rotate) || we(t.perspective) || !on() && (we(t.backdropFilter) || we(t.filter)) || Ks.test(t.willChange || "") || Xs.test(t.contain || "");
}
function Zs(e) {
  let t = ge(e);
  for (; ue(t) && !Le(t); ) {
    if (rn(t))
      return t;
    if (bt(t))
      return null;
    t = ge(t);
  }
  return null;
}
function on() {
  return kt == null && (kt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), kt;
}
function Le(e) {
  return /^(html|body|#document)$/.test(Fe(e));
}
function ee(e) {
  return Y(e).getComputedStyle(e);
}
function Ct(e) {
  return J(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ge(e) {
  if (Fe(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Fn(e) && e.host || // Fallback.
    ae(e)
  );
  return Fn(t) ? t.host : t;
}
function Gr(e) {
  const t = ge(e);
  return Le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && Ge(t) ? t : Gr(t);
}
function Ve(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Gr(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Y(o);
  if (a) {
    const i = jt(c);
    return t.concat(c, c.visualViewport || [], Ge(o) ? o : [], i && n ? Ve(i) : []);
  } else
    return t.concat(o, Ve(o, [], n));
}
function jt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function jr(e) {
  const t = ee(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = ue(e), a = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, i = ct(n) !== a || ct(r) !== c;
  return i && (n = a, r = c), {
    width: n,
    height: r,
    $: i
  };
}
function an(e) {
  return J(e) ? e : e.contextElement;
}
function ke(e) {
  const t = an(e);
  if (!ue(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = jr(t);
  let c = (a ? ct(n.width) : n.width) / r, i = (a ? ct(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: c,
    y: i
  };
}
const Ys = /* @__PURE__ */ oe(0);
function Kr(e) {
  const t = Y(e);
  return !on() || !t.visualViewport ? Ys : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function qs(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Y(e) ? !1 : t;
}
function Ce(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = an(e);
  let c = oe(1);
  t && (r ? J(r) && (c = ke(r)) : c = ke(e));
  const i = qs(a, n, r) ? Kr(a) : oe(0);
  let f = (o.left + i.x) / c.x, l = (o.top + i.y) / c.y, u = o.width / c.x, d = o.height / c.y;
  if (a) {
    const h = Y(a), g = r && J(r) ? Y(r) : r;
    let v = h, m = jt(v);
    for (; m && r && g !== v; ) {
      const y = ke(m), w = m.getBoundingClientRect(), b = ee(m), C = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, x = w.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      f *= y.x, l *= y.y, u *= y.x, d *= y.y, f += C, l += x, v = Y(m), m = jt(v);
    }
  }
  return ut({
    width: u,
    height: d,
    x: f,
    y: l
  });
}
function xt(e, t) {
  const n = Ct(e).scrollLeft;
  return t ? t.left + n : Ce(ae(e)).left + n;
}
function Xr(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - xt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Qs(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", c = ae(r), i = t ? bt(t.floating) : !1;
  if (r === c || i && a)
    return n;
  let f = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = oe(1);
  const u = oe(0), d = ue(r);
  if ((d || !d && !a) && ((Fe(r) !== "body" || Ge(c)) && (f = Ct(r)), d)) {
    const g = Ce(r);
    l = ke(r), u.x = g.x + r.clientLeft, u.y = g.y + r.clientTop;
  }
  const h = c && !d && !a ? Xr(c, f) : oe(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - f.scrollLeft * l.x + u.x + h.x,
    y: n.y * l.y - f.scrollTop * l.y + u.y + h.y
  };
}
function Js(e) {
  return Array.from(e.getClientRects());
}
function ec(e) {
  const t = ae(e), n = Ct(e), r = e.ownerDocument.body, o = Z(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Z(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + xt(e);
  const i = -n.scrollTop;
  return ee(r).direction === "rtl" && (c += Z(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: i
  };
}
const $n = 25;
function tc(e, t) {
  const n = Y(e), r = ae(e), o = n.visualViewport;
  let a = r.clientWidth, c = r.clientHeight, i = 0, f = 0;
  if (o) {
    a = o.width, c = o.height;
    const u = on();
    (!u || u && t === "fixed") && (i = o.offsetLeft, f = o.offsetTop);
  }
  const l = xt(r);
  if (l <= 0) {
    const u = r.ownerDocument, d = u.body, h = getComputedStyle(d), g = u.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, v = Math.abs(r.clientWidth - d.clientWidth - g);
    v <= $n && (a -= v);
  } else l <= $n && (a += l);
  return {
    width: a,
    height: c,
    x: i,
    y: f
  };
}
function nc(e, t) {
  const n = Ce(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = ue(e) ? ke(e) : oe(1), c = e.clientWidth * a.x, i = e.clientHeight * a.y, f = o * a.x, l = r * a.y;
  return {
    width: c,
    height: i,
    x: f,
    y: l
  };
}
function Bn(e, t, n) {
  let r;
  if (t === "viewport")
    r = tc(e, n);
  else if (t === "document")
    r = ec(ae(e));
  else if (J(t))
    r = nc(t, n);
  else {
    const o = Kr(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return ut(r);
}
function Zr(e, t) {
  const n = ge(e);
  return n === t || !J(n) || Le(n) ? !1 : ee(n).position === "fixed" || Zr(n, t);
}
function rc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Ve(e, [], !1).filter((i) => J(i) && Fe(i) !== "body"), o = null;
  const a = ee(e).position === "fixed";
  let c = a ? ge(e) : e;
  for (; J(c) && !Le(c); ) {
    const i = ee(c), f = rn(c);
    !f && i.position === "fixed" && (o = null), (a ? !f && !o : !f && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Ge(c) && !f && Zr(e, c)) ? r = r.filter((u) => u !== c) : o = i, c = ge(c);
  }
  return t.set(e, r), r;
}
function oc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? bt(t) ? [] : rc(t, this._c) : [].concat(n), r], i = Bn(t, c[0], o);
  let f = i.top, l = i.right, u = i.bottom, d = i.left;
  for (let h = 1; h < c.length; h++) {
    const g = Bn(t, c[h], o);
    f = Z(g.top, f), l = he(g.right, l), u = he(g.bottom, u), d = Z(g.left, d);
  }
  return {
    width: l - d,
    height: u - f,
    x: d,
    y: f
  };
}
function ac(e) {
  const {
    width: t,
    height: n
  } = jr(e);
  return {
    width: t,
    height: n
  };
}
function ic(e, t, n) {
  const r = ue(t), o = ae(t), a = n === "fixed", c = Ce(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const f = oe(0);
  function l() {
    f.x = xt(o);
  }
  if (r || !r && !a)
    if ((Fe(t) !== "body" || Ge(o)) && (i = Ct(t)), r) {
      const g = Ce(t, !0, a, t);
      f.x = g.x + t.clientLeft, f.y = g.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const u = o && !r && !a ? Xr(o, i) : oe(0), d = c.left + i.scrollLeft - f.x - u.x, h = c.top + i.scrollTop - f.y - u.y;
  return {
    x: d,
    y: h,
    width: c.width,
    height: c.height
  };
}
function Ot(e) {
  return ee(e).position === "static";
}
function Vn(e, t) {
  if (!ue(e) || ee(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ae(e) === n && (n = n.ownerDocument.body), n;
}
function Yr(e, t) {
  const n = Y(e);
  if (bt(e))
    return n;
  if (!ue(e)) {
    let o = ge(e);
    for (; o && !Le(o); ) {
      if (J(o) && !Ot(o))
        return o;
      o = ge(o);
    }
    return n;
  }
  let r = Vn(e, t);
  for (; r && js(r) && Ot(r); )
    r = Vn(r, t);
  return r && Le(r) && Ot(r) && !rn(r) ? n : r || Zs(e) || n;
}
const sc = async function(e) {
  const t = this.getOffsetParent || Yr, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ic(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function cc(e) {
  return ee(e).direction === "rtl";
}
const lc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qs,
  getDocumentElement: ae,
  getClippingRect: oc,
  getOffsetParent: Yr,
  getElementRects: sc,
  getClientRects: Js,
  getDimensions: ac,
  getScale: ke,
  isElement: J,
  isRTL: cc
};
function qr(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function uc(e, t) {
  let n = null, r;
  const o = ae(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function c(i, f) {
    i === void 0 && (i = !1), f === void 0 && (f = 1), a();
    const l = e.getBoundingClientRect(), {
      left: u,
      top: d,
      width: h,
      height: g
    } = l;
    if (i || t(), !h || !g)
      return;
    const v = Je(d), m = Je(o.clientWidth - (u + h)), y = Je(o.clientHeight - (d + g)), w = Je(u), C = {
      rootMargin: -v + "px " + -m + "px " + -y + "px " + -w + "px",
      threshold: Z(0, he(1, f)) || 1
    };
    let x = !0;
    function R(S) {
      const E = S[0].intersectionRatio;
      if (E !== f) {
        if (!x)
          return c();
        E ? c(!1, E) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !qr(l, e.getBoundingClientRect()) && c(), x = !1;
    }
    try {
      n = new IntersectionObserver(R, {
        ...C,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(R, C);
    }
    n.observe(e);
  }
  return c(!0), a;
}
function dc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: f = !1
  } = r, l = an(e), u = o || a ? [...l ? Ve(l) : [], ...t ? Ve(t) : []] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const d = l && i ? uc(l, n) : null;
  let h = -1, g = null;
  c && (g = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && g && t && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), l && !f && g.observe(l), t && g.observe(t));
  let v, m = f ? Ce(e) : null;
  f && y();
  function y() {
    const w = Ce(e);
    m && !qr(m, w) && n(), m = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    u.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), d?.(), (w = g) == null || w.disconnect(), g = null, f && cancelAnimationFrame(v);
  };
}
const fc = zs, pc = Us, mc = Bs, hc = Gs, gc = Vs, Wn = $s, vc = Hs, yc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: lc,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return Fs(e, t, {
    ...o,
    platform: a
  });
};
var wc = typeof document < "u", bc = function() {
}, ot = wc ? la : bc;
function dt(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!dt(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const a = o[r];
      if (!(a === "_owner" && e.$$typeof) && !dt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Qr(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function zn(e, t) {
  const n = Qr(e);
  return Math.round(t * n) / n;
}
function Tt(e) {
  const t = s.useRef(e);
  return ot(() => {
    t.current = e;
  }), t;
}
function Cc(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: a,
      floating: c
    } = {},
    transform: i = !0,
    whileElementsMounted: f,
    open: l
  } = e, [u, d] = s.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = s.useState(r);
  dt(h, r) || g(r);
  const [v, m] = s.useState(null), [y, w] = s.useState(null), b = s.useCallback((P) => {
    P !== S.current && (S.current = P, m(P));
  }, []), C = s.useCallback((P) => {
    P !== E.current && (E.current = P, w(P));
  }, []), x = a || v, R = c || y, S = s.useRef(null), E = s.useRef(null), M = s.useRef(u), O = f != null, _ = Tt(f), L = Tt(o), B = Tt(l), D = s.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const P = {
      placement: t,
      strategy: n,
      middleware: h
    };
    L.current && (P.platform = L.current), yc(S.current, E.current, P).then((N) => {
      const z = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      F.current && !dt(M.current, z) && (M.current = z, Yn.flushSync(() => {
        d(z);
      }));
    });
  }, [h, t, n, L, B]);
  ot(() => {
    l === !1 && M.current.isPositioned && (M.current.isPositioned = !1, d((P) => ({
      ...P,
      isPositioned: !1
    })));
  }, [l]);
  const F = s.useRef(!1);
  ot(() => (F.current = !0, () => {
    F.current = !1;
  }), []), ot(() => {
    if (x && (S.current = x), R && (E.current = R), x && R) {
      if (_.current)
        return _.current(x, R, D);
      D();
    }
  }, [x, R, D, _, O]);
  const H = s.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: b,
    setFloating: C
  }), [b, C]), T = s.useMemo(() => ({
    reference: x,
    floating: R
  }), [x, R]), W = s.useMemo(() => {
    const P = {
      position: n,
      left: 0,
      top: 0
    };
    if (!T.floating)
      return P;
    const N = zn(T.floating, u.x), z = zn(T.floating, u.y);
    return i ? {
      ...P,
      transform: "translate(" + N + "px, " + z + "px)",
      ...Qr(T.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: z
    };
  }, [n, i, T.floating, u.x, u.y]);
  return s.useMemo(() => ({
    ...u,
    update: D,
    refs: H,
    elements: T,
    floatingStyles: W
  }), [u, D, H, T, W]);
}
const xc = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Wn({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? Wn({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, Ec = (e, t) => {
  const n = fc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Rc = (e, t) => {
  const n = pc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Sc = (e, t) => ({
  fn: vc(e).fn,
  options: [e, t]
}), Nc = (e, t) => {
  const n = mc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Mc = (e, t) => {
  const n = hc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Pc = (e, t) => {
  const n = gc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Ac = (e, t) => {
  const n = xc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var _c = "Arrow", Jr = s.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...a } = e;
  return /* @__PURE__ */ p(
    V.svg,
    {
      ...a,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ p("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Jr.displayName = _c;
var Ic = Jr, sn = "Popper", [eo, to] = le(sn), [kc, no] = eo(sn), ro = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = s.useState(null);
  return /* @__PURE__ */ p(kc, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
ro.displayName = sn;
var oo = "PopperAnchor", ao = s.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = no(oo, n), c = s.useRef(null), i = U(t, c), f = s.useRef(null);
    return s.useEffect(() => {
      const l = f.current;
      f.current = r?.current || c.current, l !== f.current && a.onAnchorChange(f.current);
    }), r ? null : /* @__PURE__ */ p(V.div, { ...o, ref: i });
  }
);
ao.displayName = oo;
var cn = "PopperContent", [Oc, Tc] = eo(cn), io = s.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: c = 0,
      arrowPadding: i = 0,
      avoidCollisions: f = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...m
    } = e, y = no(cn, n), [w, b] = s.useState(null), C = U(t, (G) => b(G)), [x, R] = s.useState(null), S = ht(x), E = S?.width ?? 0, M = S?.height ?? 0, O = r + (a !== "center" ? "-" + a : ""), _ = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, L = Array.isArray(l) ? l : [l], B = L.length > 0, D = {
      padding: _,
      boundary: L.filter(Dc),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: F, floatingStyles: H, placement: T, isPositioned: W, middlewareData: P } = Cc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: O,
      whileElementsMounted: (...G) => dc(...G, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        Ec({ mainAxis: o + M, alignmentAxis: c }),
        f && Rc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? Sc() : void 0,
          ...D
        }),
        f && Nc({ ...D }),
        Mc({
          ...D,
          apply: ({ elements: G, rects: $e, availableWidth: ra, availableHeight: oa }) => {
            const { width: aa, height: ia } = $e.reference, Ze = G.floating.style;
            Ze.setProperty("--radix-popper-available-width", `${ra}px`), Ze.setProperty("--radix-popper-available-height", `${oa}px`), Ze.setProperty("--radix-popper-anchor-width", `${aa}px`), Ze.setProperty("--radix-popper-anchor-height", `${ia}px`);
          }
        }),
        x && Ac({ element: x, padding: i }),
        Fc({ arrowWidth: E, arrowHeight: M }),
        h && Pc({ strategy: "referenceHidden", ...D })
      ]
    }), [N, z] = lo(T), K = ie(v);
    me(() => {
      W && K?.();
    }, [W, K]);
    const te = P.arrow?.x, Q = P.arrow?.y, de = P.arrow?.centerOffset !== 0, [Xe, ve] = s.useState();
    return me(() => {
      w && ve(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ p(
      "div",
      {
        ref: F.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: W ? H.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: Xe,
          "--radix-popper-transform-origin": [
            P.transformOrigin?.x,
            P.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...P.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p(
          Oc,
          {
            scope: n,
            placedSide: N,
            onArrowChange: R,
            arrowX: te,
            arrowY: Q,
            shouldHideArrow: de,
            children: /* @__PURE__ */ p(
              V.div,
              {
                "data-side": N,
                "data-align": z,
                ...m,
                ref: C,
                style: {
                  ...m.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: W ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
io.displayName = cn;
var so = "PopperArrow", Lc = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, co = s.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = Tc(so, r), c = Lc[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ p(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [c]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ p(
          Ic,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
co.displayName = so;
function Dc(e) {
  return e !== null;
}
var Fc = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, c = o.arrow?.centerOffset !== 0, i = c ? 0 : e.arrowWidth, f = c ? 0 : e.arrowHeight, [l, u] = lo(n), d = { start: "0%", center: "50%", end: "100%" }[u], h = (o.arrow?.x ?? 0) + i / 2, g = (o.arrow?.y ?? 0) + f / 2;
    let v = "", m = "";
    return l === "bottom" ? (v = c ? d : `${h}px`, m = `${-f}px`) : l === "top" ? (v = c ? d : `${h}px`, m = `${r.floating.height + f}px`) : l === "right" ? (v = `${-f}px`, m = c ? d : `${g}px`) : l === "left" && (v = `${r.floating.width + f}px`, m = c ? d : `${g}px`), { data: { x: v, y: m } };
  }
});
function lo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var $c = ro, Bc = ao, Vc = io, Wc = co, zc = "Portal", uo = s.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = s.useState(!1);
  me(() => a(!0), []);
  const c = n || o && globalThis?.document?.body;
  return c ? da.createPortal(/* @__PURE__ */ p(V.div, { ...r, ref: t }), c) : null;
});
uo.displayName = zc;
// @__NO_SIDE_EFFECTS__
function Uc(e) {
  const t = /* @__PURE__ */ Hc(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), f = i.find(jc);
    if (f) {
      const l = f.props.children, u = i.map((d) => d === f ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : d);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, u) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function Hc(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = Xc(o), i = Kc(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? xe(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Gc = /* @__PURE__ */ Symbol("radix.slottable");
function jc(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Gc;
}
function Kc(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const f = a(...i);
      return o(...i), f;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function Xc(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Zc = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {}, Lt = 0, fo = function(e) {
  return e && (e.host || fo(e.parentNode));
}, Yc = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = fo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, qc = function(e, t, n, r) {
  var o = Yc(t, Array.isArray(e) ? e : [e]);
  tt[n] || (tt[n] = /* @__PURE__ */ new WeakMap());
  var a = tt[n], c = [], i = /* @__PURE__ */ new Set(), f = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || f.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        u(h);
      else
        try {
          var g = h.getAttribute(r), v = g !== null && g !== "false", m = (Ne.get(h) || 0) + 1, y = (a.get(h) || 0) + 1;
          Ne.set(h, m), a.set(h, y), c.push(h), m === 1 && v && et.set(h, !0), y === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return u(t), i.clear(), Lt++, function() {
    c.forEach(function(d) {
      var h = Ne.get(d) - 1, g = a.get(d) - 1;
      Ne.set(d, h), a.set(d, g), h || (et.has(d) || d.removeAttribute(r), et.delete(d)), g || d.removeAttribute(n);
    }), Lt--, Lt || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), et = /* @__PURE__ */ new WeakMap(), tt = {});
  };
}, Qc = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Zc(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), qc(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ne = function() {
  return ne = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, ne.apply(this, arguments);
};
function po(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Jc(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var at = "right-scroll-bar-position", it = "width-before-scroll-bar", el = "with-scroll-bars-hidden", tl = "--removed-body-scroll-bar-size";
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nl(e, t) {
  var n = be(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var rl = typeof window < "u" ? s.useLayoutEffect : s.useEffect, Un = /* @__PURE__ */ new WeakMap();
function ol(e, t) {
  var n = nl(null, function(r) {
    return e.forEach(function(o) {
      return Dt(o, r);
    });
  });
  return rl(function() {
    var r = Un.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || Dt(i, null);
      }), a.forEach(function(i) {
        o.has(i) || Dt(i, c);
      });
    }
    Un.set(n, e);
  }, [e]), n;
}
function al(e) {
  return e;
}
function il(e, t) {
  t === void 0 && (t = al);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var c = t(a, r);
      return n.push(c), function() {
        n = n.filter(function(i) {
          return i !== c;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var c = n;
        n = [], c.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var c = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), c = n;
      }
      var f = function() {
        var u = c;
        c = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(f);
      };
      l(), n = {
        push: function(u) {
          c.push(u), l();
        },
        filter: function(u) {
          return c = c.filter(u), n;
        }
      };
    }
  };
  return o;
}
function sl(e) {
  e === void 0 && (e = {});
  var t = il(null);
  return t.options = ne({ async: !0, ssr: !1 }, e), t;
}
var mo = function(e) {
  var t = e.sideCar, n = po(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return s.createElement(r, ne({}, n));
};
mo.isSideCarExport = !0;
function cl(e, t) {
  return e.useMedium(t), mo;
}
var ho = sl(), Ft = function() {
}, Et = s.forwardRef(function(e, t) {
  var n = s.useRef(null), r = s.useState({
    onScrollCapture: Ft,
    onWheelCapture: Ft,
    onTouchMoveCapture: Ft
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, f = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, g = e.noRelative, v = e.noIsolation, m = e.inert, y = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, C = e.gapMode, x = po(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, S = ol([n, t]), E = ne(ne({}, x), o);
  return s.createElement(
    s.Fragment,
    null,
    u && s.createElement(R, { sideCar: ho, removeScrollBar: l, shards: d, noRelative: g, noIsolation: v, inert: m, setCallbacks: a, allowPinchZoom: !!y, lockRef: n, gapMode: C }),
    c ? s.cloneElement(s.Children.only(i), ne(ne({}, E), { ref: S })) : s.createElement(b, ne({}, E, { className: f, ref: S }), i)
  );
});
Et.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Et.classNames = {
  fullWidth: it,
  zeroRight: at
};
var ll = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ul() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ll();
  return t && e.setAttribute("nonce", t), e;
}
function dl(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function fl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var pl = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = ul()) && (dl(t, n), fl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, ml = function() {
  var e = pl();
  return function(t, n) {
    s.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, go = function() {
  var e = ml(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, hl = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, $t = function(e) {
  return parseInt(e || "", 10) || 0;
}, gl = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [$t(n), $t(r), $t(o)];
}, vl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return hl;
  var t = gl(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, yl = go(), Oe = "data-scroll-locked", wl = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(el, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(Oe, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(c, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(at, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(it, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(at, " .").concat(at, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(it, " .").concat(it, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Oe, `] {
    `).concat(tl, ": ").concat(i, `px;
  }
`);
}, Hn = function() {
  var e = parseInt(document.body.getAttribute(Oe) || "0", 10);
  return isFinite(e) ? e : 0;
}, bl = function() {
  s.useEffect(function() {
    return document.body.setAttribute(Oe, (Hn() + 1).toString()), function() {
      var e = Hn() - 1;
      e <= 0 ? document.body.removeAttribute(Oe) : document.body.setAttribute(Oe, e.toString());
    };
  }, []);
}, Cl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  bl();
  var a = s.useMemo(function() {
    return vl(o);
  }, [o]);
  return s.createElement(yl, { styles: wl(a, !t, o, n ? "" : "!important") });
}, Kt = !1;
if (typeof window < "u")
  try {
    var nt = Object.defineProperty({}, "passive", {
      get: function() {
        return Kt = !0, !0;
      }
    });
    window.addEventListener("test", nt, nt), window.removeEventListener("test", nt, nt);
  } catch {
    Kt = !1;
  }
var Me = Kt ? { passive: !1 } : !1, xl = function(e) {
  return e.tagName === "TEXTAREA";
}, vo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !xl(e) && n[t] === "visible")
  );
}, El = function(e) {
  return vo(e, "overflowY");
}, Rl = function(e) {
  return vo(e, "overflowX");
}, Gn = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = yo(e, r);
    if (o) {
      var a = wo(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Sl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Nl = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, yo = function(e, t) {
  return e === "v" ? El(t) : Rl(t);
}, wo = function(e, t) {
  return e === "v" ? Sl(t) : Nl(t);
}, Ml = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Pl = function(e, t, n, r, o) {
  var a = Ml(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, f = t.contains(i), l = !1, u = c > 0, d = 0, h = 0;
  do {
    if (!i)
      break;
    var g = wo(e, i), v = g[0], m = g[1], y = g[2], w = m - y - a * v;
    (v || w) && yo(e, i) && (d += w, h += v);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !f && i !== document.body || // self content
    f && (t.contains(i) || t === i)
  );
  return (u && Math.abs(d) < 1 || !u && Math.abs(h) < 1) && (l = !0), l;
}, rt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, jn = function(e) {
  return [e.deltaX, e.deltaY];
}, Kn = function(e) {
  return e && "current" in e ? e.current : e;
}, Al = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _l = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Il = 0, Pe = [];
function kl(e) {
  var t = s.useRef([]), n = s.useRef([0, 0]), r = s.useRef(), o = s.useState(Il++)[0], a = s.useState(go)[0], c = s.useRef(e);
  s.useEffect(function() {
    c.current = e;
  }, [e]), s.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Jc([e.lockRef.current], (e.shards || []).map(Kn), !0).filter(Boolean);
      return m.forEach(function(y) {
        return y.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(y) {
          return y.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = s.useCallback(function(m, y) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !c.current.allowPinchZoom;
    var w = rt(m), b = n.current, C = "deltaX" in m ? m.deltaX : b[0] - w[0], x = "deltaY" in m ? m.deltaY : b[1] - w[1], R, S = m.target, E = Math.abs(C) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && E === "h" && S.type === "range")
      return !1;
    var M = window.getSelection(), O = M && M.anchorNode, _ = O ? O === S || O.contains(S) : !1;
    if (_)
      return !1;
    var L = Gn(E, S);
    if (!L)
      return !0;
    if (L ? R = E : (R = E === "v" ? "h" : "v", L = Gn(E, S)), !L)
      return !1;
    if (!r.current && "changedTouches" in m && (C || x) && (r.current = R), !R)
      return !0;
    var B = r.current || R;
    return Pl(B, y, m, B === "h" ? C : x);
  }, []), f = s.useCallback(function(m) {
    var y = m;
    if (!(!Pe.length || Pe[Pe.length - 1] !== a)) {
      var w = "deltaY" in y ? jn(y) : rt(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && Al(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var C = (c.current.shards || []).map(Kn).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), x = C.length > 0 ? i(y, C[0]) : !c.current.noIsolation;
        x && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = s.useCallback(function(m, y, w, b) {
    var C = { name: m, delta: y, target: w, should: b, shadowParent: Ol(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== C;
      });
    }, 1);
  }, []), u = s.useCallback(function(m) {
    n.current = rt(m), r.current = void 0;
  }, []), d = s.useCallback(function(m) {
    l(m.type, jn(m), m.target, i(m, e.lockRef.current));
  }, []), h = s.useCallback(function(m) {
    l(m.type, rt(m), m.target, i(m, e.lockRef.current));
  }, []);
  s.useEffect(function() {
    return Pe.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", f, Me), document.addEventListener("touchmove", f, Me), document.addEventListener("touchstart", u, Me), function() {
      Pe = Pe.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", f, Me), document.removeEventListener("touchmove", f, Me), document.removeEventListener("touchstart", u, Me);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return s.createElement(
    s.Fragment,
    null,
    v ? s.createElement(a, { styles: _l(o) }) : null,
    g ? s.createElement(Cl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ol(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Tl = cl(ho, kl);
var bo = s.forwardRef(function(e, t) {
  return s.createElement(Et, ne({}, e, { ref: t, sideCar: Tl }));
});
bo.classNames = Et.classNames;
var Xt = ["Enter", " "], Ll = ["ArrowDown", "PageUp", "Home"], Co = ["ArrowUp", "PageDown", "End"], Dl = [...Ll, ...Co], Fl = {
  ltr: [...Xt, "ArrowRight"],
  rtl: [...Xt, "ArrowLeft"]
}, $l = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, je = "Menu", [We, Bl, Vl] = vr(je), [Re, xo] = le(je, [
  Vl,
  to,
  vt
]), Rt = to(), Eo = vt(), [Wl, Se] = Re(je), [zl, Ke] = Re(je), Ro = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: c = !0 } = e, i = Rt(t), [f, l] = s.useState(null), u = s.useRef(!1), d = ie(a), h = Qt(o);
  return s.useEffect(() => {
    const g = () => {
      u.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => u.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p($c, { ...i, children: /* @__PURE__ */ p(
    Wl,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: f,
      onContentChange: l,
      children: /* @__PURE__ */ p(
        zl,
        {
          scope: t,
          onClose: s.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: h,
          modal: c,
          children: r
        }
      )
    }
  ) });
};
Ro.displayName = je;
var Ul = "MenuAnchor", ln = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Rt(n);
    return /* @__PURE__ */ p(Bc, { ...o, ...r, ref: t });
  }
);
ln.displayName = Ul;
var un = "MenuPortal", [Hl, So] = Re(un, {
  forceMount: void 0
}), No = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Se(un, t);
  return /* @__PURE__ */ p(Hl, { scope: t, forceMount: n, children: /* @__PURE__ */ p(Ee, { present: n || a.open, children: /* @__PURE__ */ p(uo, { asChild: !0, container: o, children: r }) }) });
};
No.displayName = un;
var q = "MenuContent", [Gl, dn] = Re(q), Mo = s.forwardRef(
  (e, t) => {
    const n = So(q, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Se(q, e.__scopeMenu), c = Ke(q, e.__scopeMenu);
    return /* @__PURE__ */ p(We.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Ee, { present: r || a.open, children: /* @__PURE__ */ p(We.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ p(jl, { ...o, ref: t }) : /* @__PURE__ */ p(Kl, { ...o, ref: t }) }) }) });
  }
), jl = s.forwardRef(
  (e, t) => {
    const n = Se(q, e.__scopeMenu), r = s.useRef(null), o = U(t, r);
    return s.useEffect(() => {
      const a = r.current;
      if (a) return Qc(a);
    }, []), /* @__PURE__ */ p(
      fn,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: A(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Kl = s.forwardRef((e, t) => {
  const n = Se(q, e.__scopeMenu);
  return /* @__PURE__ */ p(
    fn,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Xl = /* @__PURE__ */ Uc("MenuContent.ScrollLock"), fn = s.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: i,
      onEntryFocus: f,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: v,
      ...m
    } = e, y = Se(q, n), w = Ke(q, n), b = Rt(n), C = Eo(n), x = Bl(n), [R, S] = s.useState(null), E = s.useRef(null), M = U(t, E, y.onContentChange), O = s.useRef(0), _ = s.useRef(""), L = s.useRef(0), B = s.useRef(null), D = s.useRef("right"), F = s.useRef(0), H = v ? bo : s.Fragment, T = v ? { as: Xl, allowPinchZoom: !0 } : void 0, W = (N) => {
      const z = _.current + N, K = x().filter((G) => !G.disabled), te = document.activeElement, Q = K.find((G) => G.ref.current === te)?.textValue, de = K.map((G) => G.textValue), Xe = iu(de, z, Q), ve = K.find((G) => G.textValue === Xe)?.ref.current;
      (function G($e) {
        _.current = $e, window.clearTimeout(O.current), $e !== "" && (O.current = window.setTimeout(() => G(""), 1e3));
      })(z), ve && setTimeout(() => ve.focus());
    };
    s.useEffect(() => () => window.clearTimeout(O.current), []), ys();
    const P = s.useCallback((N) => D.current === B.current?.side && cu(N, B.current?.area), []);
    return /* @__PURE__ */ p(
      Gl,
      {
        scope: n,
        searchRef: _,
        onItemEnter: s.useCallback(
          (N) => {
            P(N) && N.preventDefault();
          },
          [P]
        ),
        onItemLeave: s.useCallback(
          (N) => {
            P(N) || (E.current?.focus(), S(null));
          },
          [P]
        ),
        onTriggerLeave: s.useCallback(
          (N) => {
            P(N) && N.preventDefault();
          },
          [P]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: s.useCallback((N) => {
          B.current = N;
        }, []),
        children: /* @__PURE__ */ p(H, { ...T, children: /* @__PURE__ */ p(
          Vr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: A(a, (N) => {
              N.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ p(
              $r,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ p(
                  Er,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: A(f, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      Vc,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Uo(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...m,
                        ref: M,
                        style: { outline: "none", ...m.style },
                        onKeyDown: A(m.onKeyDown, (N) => {
                          const K = N.target.closest("[data-radix-menu-content]") === N.currentTarget, te = N.ctrlKey || N.altKey || N.metaKey, Q = N.key.length === 1;
                          K && (N.key === "Tab" && N.preventDefault(), !te && Q && W(N.key));
                          const de = E.current;
                          if (N.target !== de || !Dl.includes(N.key)) return;
                          N.preventDefault();
                          const ve = x().filter((G) => !G.disabled).map((G) => G.ref.current);
                          Co.includes(N.key) && ve.reverse(), ou(ve);
                        }),
                        onBlur: A(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(O.current), _.current = "");
                        }),
                        onPointerMove: A(
                          e.onPointerMove,
                          ze((N) => {
                            const z = N.target, K = F.current !== N.clientX;
                            if (N.currentTarget.contains(z) && K) {
                              const te = N.clientX > F.current ? "right" : "left";
                              D.current = te, F.current = N.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Mo.displayName = q;
var Zl = "MenuGroup", pn = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(V.div, { role: "group", ...r, ref: t });
  }
);
pn.displayName = Zl;
var Yl = "MenuLabel", Po = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(V.div, { ...r, ref: t });
  }
);
Po.displayName = Yl;
var ft = "MenuItem", Xn = "menu.itemSelect", St = s.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = s.useRef(null), c = Ke(ft, e.__scopeMenu), i = dn(ft, e.__scopeMenu), f = U(t, a), l = s.useRef(!1), u = () => {
      const d = a.current;
      if (!n && d) {
        const h = new CustomEvent(Xn, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Xn, (g) => r?.(g), { once: !0 }), or(d, h), h.defaultPrevented ? l.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ p(
      Ao,
      {
        ...o,
        ref: f,
        disabled: n,
        onClick: A(e.onClick, u),
        onPointerDown: (d) => {
          e.onPointerDown?.(d), l.current = !0;
        },
        onPointerUp: A(e.onPointerUp, (d) => {
          l.current || d.currentTarget?.click();
        }),
        onKeyDown: A(e.onKeyDown, (d) => {
          const h = i.searchRef.current !== "";
          n || h && d.key === " " || Xt.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
St.displayName = ft;
var Ao = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, c = dn(ft, n), i = Eo(n), f = s.useRef(null), l = U(t, f), [u, d] = s.useState(!1), [h, g] = s.useState("");
    return s.useEffect(() => {
      const v = f.current;
      v && g((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p(
      We.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ p(Rr, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ p(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: A(
              e.onPointerMove,
              ze((v) => {
                r ? c.onItemLeave(v) : (c.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: A(
              e.onPointerLeave,
              ze((v) => c.onItemLeave(v))
            ),
            onFocus: A(e.onFocus, () => d(!0)),
            onBlur: A(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), ql = "MenuCheckboxItem", _o = s.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p(Lo, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p(
      St,
      {
        role: "menuitemcheckbox",
        "aria-checked": pt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": hn(n),
        onSelect: A(
          o.onSelect,
          () => r?.(pt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
_o.displayName = ql;
var Io = "MenuRadioGroup", [Ql, Jl] = Re(
  Io,
  { value: void 0, onValueChange: () => {
  } }
), ko = s.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = ie(r);
    return /* @__PURE__ */ p(Ql, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p(pn, { ...o, ref: t }) });
  }
);
ko.displayName = Io;
var Oo = "MenuRadioItem", To = s.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Jl(Oo, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p(Lo, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p(
      St,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": hn(a),
        onSelect: A(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
To.displayName = Oo;
var mn = "MenuItemIndicator", [Lo, eu] = Re(
  mn,
  { checked: !1 }
), Do = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = eu(mn, n);
    return /* @__PURE__ */ p(
      Ee,
      {
        present: r || pt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": hn(a.checked)
          }
        )
      }
    );
  }
);
Do.displayName = mn;
var tu = "MenuSeparator", Fo = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(
      V.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Fo.displayName = tu;
var nu = "MenuArrow", $o = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Rt(n);
    return /* @__PURE__ */ p(Wc, { ...o, ...r, ref: t });
  }
);
$o.displayName = nu;
var ru = "MenuSub", [Ed, Bo] = Re(ru), Be = "MenuSubTrigger", Vo = s.forwardRef(
  (e, t) => {
    const n = Se(Be, e.__scopeMenu), r = Ke(Be, e.__scopeMenu), o = Bo(Be, e.__scopeMenu), a = dn(Be, e.__scopeMenu), c = s.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: f } = a, l = { __scopeMenu: e.__scopeMenu }, u = s.useCallback(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return s.useEffect(() => u, [u]), s.useEffect(() => {
      const d = i.current;
      return () => {
        window.clearTimeout(d), f(null);
      };
    }, [i, f]), /* @__PURE__ */ p(ln, { asChild: !0, ...l, children: /* @__PURE__ */ p(
      Ao,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Uo(n.open),
        ...e,
        ref: xe(t, o.onTriggerChange),
        onClick: (d) => {
          e.onClick?.(d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: A(
          e.onPointerMove,
          ze((d) => {
            a.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !c.current && (a.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: A(
          e.onPointerLeave,
          ze((d) => {
            u();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const g = n.content?.dataset.side, v = g === "right", m = v ? -5 : 5, y = h[v ? "left" : "right"], w = h[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + m, y: d.clientY },
                  { x: y, y: h.top },
                  { x: w, y: h.top },
                  { x: w, y: h.bottom },
                  { x: y, y: h.bottom }
                ],
                side: g
              }), window.clearTimeout(i.current), i.current = window.setTimeout(
                () => a.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (a.onTriggerLeave(d), d.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: A(e.onKeyDown, (d) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && d.key === " " || Fl[r.dir].includes(d.key) && (n.onOpenChange(!0), n.content?.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Vo.displayName = Be;
var Wo = "MenuSubContent", zo = s.forwardRef(
  (e, t) => {
    const n = So(q, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Se(q, e.__scopeMenu), c = Ke(q, e.__scopeMenu), i = Bo(Wo, e.__scopeMenu), f = s.useRef(null), l = U(t, f);
    return /* @__PURE__ */ p(We.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(Ee, { present: r || a.open, children: /* @__PURE__ */ p(We.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(
      fn,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ref: l,
        align: "start",
        side: c.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          c.isUsingKeyboardRef.current && f.current?.focus(), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: A(e.onFocusOutside, (u) => {
          u.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: A(e.onEscapeKeyDown, (u) => {
          c.onClose(), u.preventDefault();
        }),
        onKeyDown: A(e.onKeyDown, (u) => {
          const d = u.currentTarget.contains(u.target), h = $l[c.dir].includes(u.key);
          d && h && (a.onOpenChange(!1), i.trigger?.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
zo.displayName = Wo;
function Uo(e) {
  return e ? "open" : "closed";
}
function pt(e) {
  return e === "indeterminate";
}
function hn(e) {
  return pt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function ou(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function au(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function iu(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = au(e, Math.max(a, 0));
  o.length === 1 && (c = c.filter((l) => l !== n));
  const f = c.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return f !== n ? f : void 0;
}
function su(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const i = t[a], f = t[c], l = i.x, u = i.y, d = f.x, h = f.y;
    u > r != h > r && n < (d - l) * (r - u) / (h - u) + l && (o = !o);
  }
  return o;
}
function cu(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return su(n, t);
}
function ze(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var lu = Ro, uu = ln, du = No, fu = Mo, pu = pn, mu = Po, hu = St, gu = _o, vu = ko, yu = To, wu = Do, bu = Fo, Cu = $o, xu = Vo, Eu = zo, Nt = "DropdownMenu", [Ru] = le(
  Nt,
  [xo]
), j = xo(), [Su, Ho] = Ru(Nt), Go = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: c,
    modal: i = !0
  } = e, f = j(t), l = s.useRef(null), [u, d] = Ue({
    prop: o,
    defaultProp: a ?? !1,
    onChange: c,
    caller: Nt
  });
  return /* @__PURE__ */ p(
    Su,
    {
      scope: t,
      triggerId: Wt(),
      triggerRef: l,
      contentId: Wt(),
      open: u,
      onOpenChange: d,
      onOpenToggle: s.useCallback(() => d((h) => !h), [d]),
      modal: i,
      children: /* @__PURE__ */ p(lu, { ...f, open: u, onOpenChange: d, dir: r, modal: i, children: n })
    }
  );
};
Go.displayName = Nt;
var jo = "DropdownMenuTrigger", Ko = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = Ho(jo, n), c = j(n);
    return /* @__PURE__ */ p(uu, { asChild: !0, ...c, children: /* @__PURE__ */ p(
      V.button,
      {
        type: "button",
        id: a.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": a.open,
        "aria-controls": a.open ? a.contentId : void 0,
        "data-state": a.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: xe(t, a.triggerRef),
        onPointerDown: A(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: A(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
Ko.displayName = jo;
var Nu = "DropdownMenuPortal", Xo = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = j(t);
  return /* @__PURE__ */ p(du, { ...r, ...n });
};
Xo.displayName = Nu;
var Zo = "DropdownMenuContent", Yo = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ho(Zo, n), a = j(n), c = s.useRef(!1);
    return /* @__PURE__ */ p(
      fu,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: A(e.onCloseAutoFocus, (i) => {
          c.current || o.triggerRef.current?.focus(), c.current = !1, i.preventDefault();
        }),
        onInteractOutside: A(e.onInteractOutside, (i) => {
          const f = i.detail.originalEvent, l = f.button === 0 && f.ctrlKey === !0, u = f.button === 2 || l;
          (!o.modal || u) && (c.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Yo.displayName = Zo;
var Mu = "DropdownMenuGroup", Pu = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(pu, { ...o, ...r, ref: t });
  }
);
Pu.displayName = Mu;
var Au = "DropdownMenuLabel", _u = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(mu, { ...o, ...r, ref: t });
  }
);
_u.displayName = Au;
var Iu = "DropdownMenuItem", qo = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(hu, { ...o, ...r, ref: t });
  }
);
qo.displayName = Iu;
var ku = "DropdownMenuCheckboxItem", Ou = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(gu, { ...o, ...r, ref: t });
});
Ou.displayName = ku;
var Tu = "DropdownMenuRadioGroup", Lu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(vu, { ...o, ...r, ref: t });
});
Lu.displayName = Tu;
var Du = "DropdownMenuRadioItem", Fu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(yu, { ...o, ...r, ref: t });
});
Fu.displayName = Du;
var $u = "DropdownMenuItemIndicator", Bu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(wu, { ...o, ...r, ref: t });
});
Bu.displayName = $u;
var Vu = "DropdownMenuSeparator", Wu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(bu, { ...o, ...r, ref: t });
});
Wu.displayName = Vu;
var zu = "DropdownMenuArrow", Uu = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(Cu, { ...o, ...r, ref: t });
  }
);
Uu.displayName = zu;
var Hu = "DropdownMenuSubTrigger", Gu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(xu, { ...o, ...r, ref: t });
});
Gu.displayName = Hu;
var ju = "DropdownMenuSubContent", Ku = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(
    Eu,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
Ku.displayName = ju;
var Xu = Go, Zu = Ko, Yu = Xo, qu = Yo, Qu = qo;
function Ju({ ...e }) {
  return /* @__PURE__ */ p(Xu, { "data-slot": "dropdown-menu", ...e });
}
function ed({
  ...e
}) {
  return /* @__PURE__ */ p(Zu, { "data-slot": "dropdown-menu-trigger", ...e });
}
function td({
  className: e,
  sideOffset: t = 4,
  align: n = "end",
  ...r
}) {
  return /* @__PURE__ */ p(Yu, { children: /* @__PURE__ */ p(
    qu,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: I(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl border border-gi-dark-ash bg-white p-1.5 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "w-40",
        e
      ),
      ...r
    }
  ) });
}
function nd({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p(
    Qu,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: I(
        "relative flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 text-sm outline-none select-none transition-colors text-gi-primary",
        "data-[highlighted]:bg-gi-ash data-[highlighted]:text-gi-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
        n === "danger" && "text-gi-red data-[highlighted]:bg-red-50 data-[highlighted]:text-gi-red",
        e
      ),
      ...r
    }
  );
}
const rd = $(
  ({ items: e, className: t, ...n }, r) => /* @__PURE__ */ p(
    "div",
    {
      ref: r,
      className: I("flex flex-col gap-0.5", t),
      ...n,
      children: e.map((o, a) => /* @__PURE__ */ k(
        nd,
        {
          onClick: o.onClick,
          variant: o.variant,
          className: "flex items-center justify-between gap-2",
          children: [
            /* @__PURE__ */ p("span", { className: "flex-1 text-left font-normal", children: o.label }),
            o.icon && /* @__PURE__ */ p("span", { className: "flex size-4 items-center justify-center shrink-0", children: o.icon }),
            !o.icon && /* @__PURE__ */ p("div", { className: "size-4 shrink-0" })
          ]
        },
        a
      ))
    }
  )
);
rd.displayName = "ActionList";
const od = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 14, height: 16, viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M6.46966 11.9211L0.396437 5.84786C0.103531 5.55496 0.103531 5.08008 0.396437 4.78721L1.10478 4.07886C1.39719 3.78646 1.87109 3.7859 2.16419 4.07761L7 8.89077L11.8358 4.07761C12.1289 3.7859 12.6028 3.78646 12.8952 4.07886L13.6035 4.78721C13.8964 5.08011 13.8964 5.55499 13.6035 5.84786L7.53034 11.9211C7.23744 12.214 6.76256 12.214 6.46966 11.9211Z", fill: "#004554" })), ad = $(od), id = $(
  ({
    value: e,
    placeholder: t,
    size: n = "regular",
    openOn: r = "click",
    children: o,
    isDisabled: a = !1,
    dataTestId: c,
    className: i,
    trigger: f,
    ...l
  }, u) => {
    const [d, h] = be(!1), g = Te(null), v = Te(!1), m = vn(() => {
      a || r !== "hover" || (g.current && clearTimeout(g.current), v.current || (v.current = !0, h(!0)));
    }, [a, r]), y = vn(() => {
      r === "hover" && (g.current && clearTimeout(g.current), g.current = setTimeout(() => {
        v.current = !1, h(!1);
      }, 150));
    }, [r]);
    return /* @__PURE__ */ p(
      "div",
      {
        className: "relative inline-block min-w-32",
        onPointerEnter: m,
        onPointerLeave: y,
        children: /* @__PURE__ */ k(Ju, { open: d, onOpenChange: (b) => {
          v.current = b, h(b);
        }, modal: !1, children: [
          /* @__PURE__ */ p(ed, { asChild: !0, disabled: a, children: f || /* @__PURE__ */ k(
            "div",
            {
              ref: u,
              role: "button",
              tabIndex: a ? -1 : 0,
              "data-test-id": c,
              className: I(
                "flex w-full items-center justify-between gap-2 rounded-full bg-gi-ash px-3 py-2 text-gi-primary font-bold transition-all duration-300 ease",
                n === "small" ? "h-8" : "h-10",
                a ? "cursor-not-allowed opacity-50" : "cursor-pointer",
                i
              ),
              onPointerDown: (b) => {
                (a || r === "hover") && b.preventDefault();
              },
              onClick: (b) => {
                (a || r === "hover") && b.preventDefault();
              },
              ...l,
              children: [
                /* @__PURE__ */ p("div", { className: "truncate text-left flex-1 pointer-events-none select-none", children: e || t }),
                /* @__PURE__ */ p(ad, {})
              ]
            }
          ) }),
          /* @__PURE__ */ p(
            td,
            {
              onPointerEnter: m,
              onPointerLeave: y,
              sideOffset: 4,
              className: I(
                "min-w-[var(--radix-dropdown-menu-trigger-width)]",
                "before:absolute before:-top-[12px] before:left-0 before:h-[12px] before:w-full before:content-['']"
              ),
              onCloseAutoFocus: (b) => r === "hover" && b.preventDefault(),
              children: o
            }
          )
        ] })
      }
    );
  }
);
id.displayName = "Select";
var Mt = "Switch", [sd] = le(Mt), [cd, ld] = sd(Mt), Qo = s.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: c,
      disabled: i,
      value: f = "on",
      onCheckedChange: l,
      form: u,
      ...d
    } = e, [h, g] = s.useState(null), v = U(t, (C) => g(C)), m = s.useRef(!1), y = h ? u || !!h.closest("form") : !0, [w, b] = Ue({
      prop: o,
      defaultProp: a ?? !1,
      onChange: l,
      caller: Mt
    });
    return /* @__PURE__ */ k(cd, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ p(
        V.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": c,
          "data-state": na(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: f,
          ...d,
          ref: v,
          onClick: A(e.onClick, (C) => {
            b((x) => !x), y && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ p(
        ta,
        {
          control: h,
          bubbles: !m.current,
          name: r,
          value: f,
          checked: w,
          required: c,
          disabled: i,
          form: u,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Qo.displayName = Mt;
var Jo = "SwitchThumb", ea = s.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = ld(Jo, n);
    return /* @__PURE__ */ p(
      V.span,
      {
        "data-state": na(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
ea.displayName = Jo;
var ud = "SwitchBubbleInput", ta = s.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const c = s.useRef(null), i = U(c, a), f = Yt(n), l = ht(t);
    return s.useEffect(() => {
      const u = c.current;
      if (!u) return;
      const d = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        d,
        "checked"
      ).set;
      if (f !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(u, n), u.dispatchEvent(v);
      }
    }, [f, n, r]), /* @__PURE__ */ p(
      "input",
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: n,
        ...o,
        tabIndex: -1,
        ref: i,
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
ta.displayName = ud;
function na(e) {
  return e ? "checked" : "unchecked";
}
var dd = Qo, fd = ea;
const pd = $(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  dd,
  {
    ref: n,
    "data-slot": "switch",
    className: I(
      "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      fd,
      {
        "data-slot": "switch-thumb",
        className: I(
          "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
        )
      }
    )
  }
));
pd.displayName = "Switch";
const md = X(
  "w-full bg-transparent overflow-x-auto scroll-smooth @container",
  {
    variants: {
      isMobileScrollable: {
        true: "snap-x snap-mandatory scroll-p-0",
        false: "overflow-hidden"
      }
    },
    defaultVariants: {
      isMobileScrollable: !0
    }
  }
), Ae = X(
  "px-4 py-5 transition-colors duration-300 ease font-bold whitespace-nowrap snap-start snap-always",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right"
      },
      variant: {
        header: "text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]",
        body: "text-gi-primary font-bold"
      },
      mobileFullWidth: {
        true: "min-w-[100cqw] w-[100cqw] sm:min-w-0 sm:w-auto",
        false: "min-w-fit"
      }
    },
    defaultVariants: {
      align: "left",
      variant: "body",
      mobileFullWidth: !1
    }
  }
);
function Rd({
  columns: e,
  data: t,
  getRowKey: n,
  isSelectable: r = !1,
  selectedRowKeys: o = [],
  onSelectedRowKeysChange: a,
  actions: c,
  pagination: i,
  emptyState: f,
  isMobileScrollable: l = !0,
  dataTestId: u,
  className: d,
  ...h
}) {
  const g = (m, y) => {
    a && a(y ? [...o, m] : o.filter((w) => w !== m));
  }, v = i?.totalElements ?? t.length;
  return /* @__PURE__ */ k(
    "div",
    {
      "data-slot": "table-root",
      "data-testid": u || "table-root",
      className: I("flex flex-col w-full gap-4", d),
      ...h,
      children: [
        /* @__PURE__ */ p("div", { className: md({ isMobileScrollable: l }), children: /* @__PURE__ */ k("table", { className: "w-max min-w-full border-separate border-spacing-y-0 text-sm", children: [
          /* @__PURE__ */ k("thead", { children: [
            /* @__PURE__ */ k("tr", { className: "bg-gi-ash", children: [
              r && /* @__PURE__ */ p(
                "th",
                {
                  className: Ae({
                    variant: "header",
                    mobileFullWidth: !1
                  })
                }
              ),
              e.map((m) => /* @__PURE__ */ p(
                "th",
                {
                  style: { width: m.width },
                  className: Ae({
                    align: m.align,
                    variant: "header",
                    mobileFullWidth: l
                  }),
                  children: m.header
                },
                m.key
              )),
              c && /* @__PURE__ */ p(
                "th",
                {
                  className: Ae({
                    align: "right",
                    variant: "header",
                    mobileFullWidth: l
                  })
                }
              )
            ] }),
            /* @__PURE__ */ p("tr", { className: "h-4", "aria-hidden": "true", children: /* @__PURE__ */ p("td", { colSpan: 100 }) })
          ] }),
          /* @__PURE__ */ p("tbody", { className: "bg-white", children: t.length === 0 ? /* @__PURE__ */ p("tr", { children: /* @__PURE__ */ p(
            "td",
            {
              colSpan: 100,
              className: "p-12 text-center text-gi-gray italic border-y border-gi-dark-ash",
              children: f || "No data available"
            }
          ) }) : t.map((m, y) => {
            const w = n(m), b = o.includes(w);
            return /* @__PURE__ */ k(
              "tr",
              {
                className: "transition-colors duration-300 ease group hover:bg-gi-ash/10",
                children: [
                  r && /* @__PURE__ */ p(
                    "td",
                    {
                      className: I(
                        Ae({
                          mobileFullWidth: !1
                        }),
                        "px-4 py-5 border-b border-gi-dark-ash",
                        y === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: /* @__PURE__ */ p(
                        pr,
                        {
                          label: "",
                          checked: b,
                          onCheckedChange: (C) => g(w, C === !0)
                        }
                      )
                    }
                  ),
                  e.map((C) => /* @__PURE__ */ p(
                    "td",
                    {
                      className: I(
                        Ae({
                          align: C.align,
                          variant: "body",
                          mobileFullWidth: l
                        }),
                        "border-b border-gi-dark-ash",
                        y === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: C.render ? C.render(m) : m[C.key]
                    },
                    `${w}-${C.key}`
                  )),
                  c && /* @__PURE__ */ p(
                    "td",
                    {
                      className: I(
                        Ae({
                          align: "right",
                          variant: "body",
                          mobileFullWidth: l
                        }),
                        "px-4 py-5 border-b border-gi-dark-ash font-medium text-gi-primary",
                        y === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: c(m)
                    }
                  )
                ]
              },
              w
            );
          }) })
        ] }) }),
        /* @__PURE__ */ k("div", { className: "flex flex-row items-start justify-between w-full mt-2 px-1", children: [
          /* @__PURE__ */ p("div", { className: "flex items-start", children: r && /* @__PURE__ */ k(
            nr,
            {
              type: "success",
              variant: "primary",
              className: "flex items-center justify-center py-1 px-3 bg-gi-ash/40 border-none text-gi-primary font-bold rounded-lg leading-none",
              children: [
                o.length,
                "/",
                v
              ]
            }
          ) }),
          /* @__PURE__ */ p("div", { className: "flex items-start", children: i && /* @__PURE__ */ p(
            gr,
            {
              page: i.page,
              totalPages: i.totalPages,
              onChange: i.onChange
            }
          ) })
        ] })
      ]
    }
  );
}
const hd = (e) => e ? {
  left: e.offsetLeft,
  width: e.offsetWidth
} : { left: 0, width: 0 }, gd = $(
  ({
    value: e,
    onValueChange: t,
    items: n,
    size: r = "regular",
    isFullWidth: o = !1,
    dataTestId: a,
    className: c = "",
    ...i
  }, f) => {
    const [l, u] = be({ left: 0, width: 0 }), d = Te([]);
    Ie(() => {
      const m = n.findIndex((w) => w.value === e), y = d.current[m];
      u(hd(y));
    }, [e, n, r, o]);
    const h = (m) => {
      const y = n.findIndex((C) => C.value === e);
      let w = null;
      switch (m.key) {
        case "ArrowRight":
          w = (y + 1) % n.length;
          break;
        case "ArrowLeft":
          w = (y - 1 + n.length) % n.length;
          break;
        case "Home":
          w = 0;
          break;
        case "End":
          w = n.length - 1;
          break;
        default:
          return;
      }
      m.preventDefault();
      const b = n[w];
      t(b.value), d.current[w]?.focus();
    }, g = r === "large" ? "text-lg pt-4 pb-3 px-3" : "text-base pt-3 pb-2 px-3";
    return /* @__PURE__ */ k(
      "div",
      {
        ref: f,
        role: "tablist",
        "aria-orientation": "horizontal",
        onKeyDown: h,
        "data-test-id": a,
        className: `relative border-b-4 border-slate-200 ${o ? "w-full flex" : "w-max inline-flex"} ${c}`,
        ...i,
        children: [
          n.map((m, y) => {
            const w = m.value === e;
            return /* @__PURE__ */ p(
              "button",
              {
                id: `tab-${m.value}`,
                ref: (b) => {
                  d.current[y] = b;
                },
                role: "tab",
                "aria-selected": w,
                "aria-controls": `panel-${m.value}`,
                tabIndex: w ? 0 : -1,
                onClick: () => t(m.value),
                className: `
                ${g}
                ${o ? "flex-1" : ""}
                flex items-center justify-center
                text-gi-primary font-bold
                relative z-10 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-primary
              `,
                children: m.label
              },
              m.value
            );
          }),
          /* @__PURE__ */ p(
            "div",
            {
              className: "absolute bottom-[-4px] h-[4px] bg-gi-primary transition-all duration-300 ease",
              style: {
                left: `${l.left}px`,
                width: `${l.width}px`
              },
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
gd.displayName = "Tabs";
const vd = X(
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
), yd = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gi-primary/50"
};
function Sd({
  className: e,
  isError: t,
  label: n,
  disabled: r,
  errorText: o,
  helper: a,
  isRequired: c,
  value: i,
  onChange: f,
  characterLimit: l,
  characterLimitVisibility: u,
  dataTestId: d,
  ...h
}) {
  const g = !!(t && o), v = g ? o : a, m = typeof l == "number", y = m ? l : void 0, w = i ?? "", b = m && typeof y == "number" ? w.slice(0, y) : w, C = b.length, x = g, R = !!u && m, S = r ? "disabled" : t ? "error" : "default";
  function E(O) {
    if (r)
      return;
    const _ = O.target.value;
    if (m && typeof l == "number") {
      const L = _.slice(0, l);
      f(L);
      return;
    }
    f(_);
  }
  const M = I(
    "text-[14px]",
    x ? "text-gi-red" : "text-gi-primary/50"
  );
  return /* @__PURE__ */ k("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ k("p", { className: I("font-bold", yd[S]), children: [
      n,
      c && /* @__PURE__ */ p("span", { className: "text-gi-red ml-1 size-4", children: "*" }),
      ""
    ] }),
    /* @__PURE__ */ p(
      "textarea",
      {
        disabled: r,
        value: b,
        required: c,
        onChange: E,
        maxLength: m ? l : void 0,
        "data-slot": "textarea",
        "data-test-id": d,
        className: I(
          vd({
            variant: S,
            className: e
          })
        ),
        ...h
      }
    ),
    /* @__PURE__ */ k("div", { className: "flex justify-between items-start text-[14px] mt-1 min-h-4", children: [
      /* @__PURE__ */ p("p", { className: M, children: v }),
      R ? /* @__PURE__ */ k("p", { className: "text-gi-primary/50 text-[14px]", children: [
        C,
        "/",
        y
      ] }) : null
    ] })
  ] });
}
export {
  rd as ActionList,
  ya as Avatar,
  nr as Badge,
  _e as Button,
  $a as ButtonSelect,
  pr as Checkbox,
  ai as InfoMessage,
  si as Input,
  Ci as Modal,
  gr as Pagination,
  _i as ProgressBar,
  ss as RadioGroup,
  cs as RadioGroupItem,
  ls as Section,
  id as Select,
  pd as Switch,
  Rd as Table,
  gd as Tabs,
  Sd as TextArea
};
