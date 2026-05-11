import { jsx as p, jsxs as _, Fragment as rn } from "react/jsx-runtime";
import * as s from "react";
import we, { forwardRef as D, useState as Ce, useEffect as Te, useMemo as on, isValidElement as _a, cloneElement as An, useId as yt, useRef as Oe, useImperativeHandle as Ta, createElement as jt, useLayoutEffect as Ia, useCallback as _n } from "react";
import { twMerge as ka } from "tailwind-merge";
import * as cr from "react-dom";
import Oa from "react-dom";
const La = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 234 234", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M130.66 170.319L136.229 135.513L98.6387 120.199L93.0698 173.103L130.66 170.319Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M168.439 221.757C165.212 223.33 161.923 224.751 158.585 226.011C151.909 228.537 145.018 230.443 137.948 231.716C131.039 232.963 123.944 233.596 116.85 233.596C107.267 233.596 97.7382 232.447 88.5233 230.172C84.9149 229.287 81.2755 228.205 77.6979 226.945C77.3228 226.81 76.9418 226.675 76.5667 226.539C72.1283 224.929 67.7636 223.041 63.5651 220.908C62.9994 220.626 62.4339 220.336 61.8684 220.029C61.2414 219.71 60.6205 219.372 59.9934 219.021C59.1942 218.585 58.4012 218.13 57.6082 217.668C54.9526 216.132 52.34 214.472 49.8441 212.745L49.6781 212.634C49.5306 212.53 49.3831 212.431 49.2417 212.327C49.3338 211.841 49.42 211.398 49.4998 211.005C49.8072 209.462 50.0101 208.614 50.0101 208.614L66.8415 173.844L71.532 164.156L73.8188 163.215L91.093 156.115H133.313L146.634 161.623C146.634 161.623 146.702 161.875 146.837 162.361C148.165 167.125 155.911 194.173 167.929 220.638C168.095 221.006 168.267 221.381 168.439 221.757Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M121.16 146.702C142.331 146.702 159.493 129.54 159.493 108.369C159.493 87.1986 142.331 70.0364 121.16 70.0364C99.9898 70.0364 82.8276 87.1986 82.8276 108.369C82.8276 129.54 99.9898 146.702 121.16 146.702Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M73.8859 162.885L73.82 163.215L62.1332 218.781L62.032 219.265L61.8692 220.03C61.2403 219.709 60.6201 219.37 59.9955 219.023C59.195 218.583 58.4032 218.13 57.6071 217.668C54.9548 216.133 52.3421 214.471 49.8438 212.746L49.6766 212.632C49.5315 212.531 49.3819 212.43 49.2412 212.328C47.3322 210.996 45.4717 209.606 43.6551 208.172C43.6419 208.163 43.6331 208.154 43.6199 208.141C40.3782 205.528 37.2553 202.718 34.2687 199.731C32.3422 197.805 30.4904 195.821 28.7178 193.784L28.9861 192.658L29.0125 192.544L29.3468 191.11C32.3201 178.552 42.3795 168.915 55.0516 166.487L71.889 163.263L73.8859 162.885Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M193.268 205.509C188.307 209.732 182.99 213.556 177.377 216.913C176.83 217.245 176.271 217.57 175.712 217.896C173.326 219.273 170.898 220.558 168.439 221.757C165.212 223.33 161.923 224.751 158.585 226.011L158.327 224.793L145.128 162.035L146.837 162.361L163.964 165.643C176.634 168.072 186.697 177.711 189.666 190.27L192.943 204.144L193.268 205.509Z", fill: "currentColor" }), /* @__PURE__ */ s.createElement("path", { d: "M165.304 118.616C164.308 122.329 159.298 138.921 146.468 142.413C143.948 143.101 137.936 143.894 139.528 142.413C139.891 142.075 140.241 141.743 140.592 141.417C154.515 128.323 160.195 120.319 157.601 102.553C155.954 91.2417 137.192 80.9695 126.637 79.949C122.186 79.5191 116.506 81.0247 112.756 84.9041C106.566 91.297 107.586 110.92 104.156 122.446C103.234 125.532 101.998 128.04 100.222 129.558C99.1152 130.505 98.4083 129.3 97.8857 127.327C96.7731 123.134 96.4842 115.457 94.9043 117.626C90.3369 123.915 94.6891 132.251 96.0047 135.466C96.2752 136.124 96.5518 136.757 96.8284 137.36V137.366C96.9882 137.71 97.1542 138.054 97.314 138.38V138.386C101.703 147.336 106.978 150.539 111.625 156.115C113.451 158.297 115.178 160.836 116.721 164.23C117.779 166.554 118.541 168.889 119.063 171.182C121.725 182.678 118.566 193.122 117.711 195.962C115.922 201.876 112.848 212.037 103.83 217.773C92.5067 224.978 82.1731 218.628 77.2306 225.47C77.1691 225.55 77.1137 225.629 77.0585 225.709C76.874 225.986 76.7081 226.263 76.5667 226.539C72.1283 224.929 67.7636 223.041 63.5651 220.908C62.9994 220.626 62.4339 220.336 61.8684 220.029C61.2414 219.71 60.6205 219.372 59.9934 219.021C59.9688 218.541 59.9442 218.062 59.9257 217.577C59.5631 209.259 60.1102 200.118 62.1819 191.001C63.5097 185.18 64.8253 179.407 66.8415 173.844C68.1571 170.217 69.7677 166.676 71.8885 163.264C73.5853 160.523 75.6015 157.861 78.0481 155.303C83.4211 149.691 88.1976 147.349 88.9537 141.423C90.0355 132.964 81.2264 130.419 78.0481 117.626C75.8783 108.879 73.6098 96.2706 75.8106 87.7748C77.8885 79.7466 79.6957 72.7816 85.7263 65.9577C87.177 64.3224 99.0845 52.9497 112.879 51.0809C119.235 50.2267 124.903 58.3659 132.588 60.1177C141.421 62.1282 146.481 63.2778 151.423 67.0581C159.777 73.439 162.132 82.98 164.314 91.8444C166.023 98.7788 168.236 107.748 165.304 118.616Z", fill: "#2F2E41" })), Da = D(La), Fa = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: "100%", height: "100%", viewBox: "0 0 234 234", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("g", { clipPath: "url(#clip_male)" }, /* @__PURE__ */ s.createElement("path", { d: "M119.094 152.752C140.07 152.752 157.074 135.748 157.074 114.772C157.074 93.7957 140.07 76.7913 119.094 76.7913C98.1178 76.7913 81.1133 93.7957 81.1133 114.772C81.1133 135.748 98.1178 152.752 119.094 152.752Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M97.2904 158.369L95.5746 141.024L129.839 134.617L150.072 183.88L114.884 224.346L89.813 175.083L97.2904 158.369Z", fill: "#FFB6B6" }), /* @__PURE__ */ s.createElement("path", { d: "M95.0242 149.706L102.515 151.399C102.515 151.399 96.6265 132.725 98.6253 130.942C100.624 129.159 105.522 131.969 105.522 131.969L110.669 137.739L116.939 131.356C116.939 131.356 123.746 122.892 126.411 120.515C129.076 118.138 124.795 109.315 124.795 109.315C124.795 109.315 164.334 98.6536 149.621 79.4759C149.621 79.4759 140.995 64.4399 138.186 69.338C135.377 74.2361 132.028 66.4569 132.028 66.4569L121.8 68.4019C121.8 68.4019 101.613 56.4994 82.4536 81.9623C63.2942 107.425 95.0242 149.706 95.0242 149.706Z", fill: "#2F2E41" }), /* @__PURE__ */ s.createElement("path", { d: "M190.525 208.027C169.769 224.856 144.09 234 117 234C92.2626 234 68.6999 226.373 48.9902 212.236C49.0254 211.867 49.0606 211.502 49.0914 211.137C49.6148 205.419 50.0811 199.859 50.389 195.249C51.581 177.352 93.3359 165.423 93.3359 165.423C93.3359 165.423 93.525 165.612 93.9033 165.942C96.2081 167.965 105.564 175.302 121.97 177.352C136.599 179.182 141.416 170.503 142.872 166.347C143.312 165.08 143.444 164.231 143.444 164.231L186.39 184.513C189.192 188.515 190.288 197.136 190.503 206.826C190.512 207.226 190.521 207.622 190.525 208.027Z", fill: "currentColor" })), /* @__PURE__ */ s.createElement("defs", null, /* @__PURE__ */ s.createElement("clipPath", { id: "clip_male" }, /* @__PURE__ */ s.createElement("rect", { width: 234, height: 234, rx: 117, fill: "white" })))), $a = D(Fa);
function lr(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = lr(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function ur() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = lr(e)) && (r && (r += " "), r += t);
  return r;
}
function T(...e) {
  return ka(ur(e));
}
const Ba = (e) => {
  const t = e.trim();
  if (!t) return "";
  const n = t.split(/\s+/).filter(Boolean), r = Array.from(n[0])[0], o = n.length > 1 ? Array.from(n[n.length - 1])[0] : "";
  return (r + o).toUpperCase();
}, Tn = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, In = ur, Y = (e, t) => (n) => {
  var r;
  if (t?.variants == null) return In(e, n?.class, n?.className);
  const { variants: o, defaultVariants: a } = t, c = Object.keys(o).map((l) => {
    const d = n?.[l], f = a?.[l];
    if (d === null) return null;
    const h = Tn(d) || Tn(f);
    return o[l][h];
  }), i = n && Object.entries(n).reduce((l, d) => {
    let [f, h] = d;
    return h === void 0 || (l[f] = h), l;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, d) => {
    let { class: f, className: h, ...g } = d;
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
      f,
      h
    ] : l;
  }, []);
  return In(e, c, u, n?.class, n?.className);
}, Va = Y(
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
), Wa = D(
  ({
    className: e,
    src: t,
    alt: n = "",
    size: r,
    fallback: o = "icon",
    name: a = "",
    gender: c = "male",
    color: i = "text-gi-light-primary",
    dataTestId: u,
    ...l
  }, d) => {
    const [f, h] = Ce(!1);
    Te(() => {
      f && h(!1);
    }, [t]);
    const g = o === "initials" ? Ba(a) : "", v = !!t && !f, m = !!g, y = !!(a || n), w = y ? a ? `${a} avatar` : n : void 0;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: d,
        role: y ? "img" : void 0,
        "aria-label": w,
        "data-slot": "avatar",
        "data-test-id": u,
        className: T(Va({ size: r, className: e })),
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
            children: m ? g : /* @__PURE__ */ p("span", { className: T("size-full", i), children: c === "female" ? /* @__PURE__ */ p(Da, {}) : /* @__PURE__ */ p($a, {}) })
          }
        )
      }
    );
  }
);
Wa.displayName = "Avatar";
const Ha = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M12.6166 0.17915C13.0316 0.479059 13.1244 1.05581 12.8226 1.46819L5.39385 11.619C5.23424 11.8381 4.98758 11.9737 4.71481 11.9968C4.44203 12.0198 4.17796 11.9189 3.98644 11.7286L0.27205 8.03736C-0.0906834 7.6769 -0.0906834 7.0915 0.27205 6.73103C0.634784 6.37056 1.22386 6.37056 1.5866 6.73103L4.53199 9.65803L11.3224 0.381012C11.6242 -0.0313641 12.2045 -0.123644 12.6195 0.176266L12.6166 0.17915Z", fill: "currentColor" })), dr = D(Ha), za = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.7692 8C14.7692 6.20469 14.0563 4.48262 12.7869 3.21314C11.5174 1.94366 9.79531 1.23077 8 1.23077C6.20469 1.23077 4.48262 1.94366 3.21314 3.21314C1.94366 4.48262 1.23077 6.20469 1.23077 8C1.23077 8.88895 1.40581 9.76926 1.74599 10.5905C2.08618 11.4118 2.58457 12.1583 3.21314 12.7869C3.84171 13.4154 4.58819 13.9138 5.40946 14.254C6.23074 14.5942 7.11105 14.7692 8 14.7692C8.88895 14.7692 9.76926 14.5942 10.5905 14.254C11.4118 13.9138 12.1583 13.4154 12.7869 12.7869C13.4154 12.1583 13.9138 11.4118 14.254 10.5905C14.5942 9.76926 14.7692 8.88895 14.7692 8ZM9.41106 5.71875C9.65138 5.47843 10.0409 5.47843 10.2812 5.71875C10.5216 5.95907 10.5216 6.34862 10.2812 6.58894L8.87019 8L10.2812 9.41106C10.5216 9.65138 10.5216 10.0409 10.2812 10.2812C10.0409 10.5216 9.65138 10.5216 9.41106 10.2812L8 8.87019L6.58894 10.2812C6.34862 10.5216 5.95907 10.5216 5.71875 10.2812C5.47843 10.0409 5.47843 9.65138 5.71875 9.41106L7.12981 8L5.71875 6.58894C5.47843 6.34862 5.47843 5.95907 5.71875 5.71875C5.95907 5.47843 6.34862 5.47843 6.58894 5.71875L8 7.12981L9.41106 5.71875ZM16 8C16 9.05058 15.7931 10.0911 15.391 11.0617C14.989 12.0322 14.3999 12.9142 13.6571 13.6571C12.9142 14.3999 12.0322 14.989 11.0617 15.391C10.0911 15.7931 9.05058 16 8 16C6.94943 16 5.90891 15.7931 4.9383 15.391C3.96778 14.989 3.08577 14.3999 2.34295 13.6571C1.60013 12.9142 1.01101 12.0322 0.608974 11.0617C0.206937 10.0911 0 9.05058 0 8C4.89064e-08 5.87827 0.842658 3.84324 2.34295 2.34295C3.84324 0.842658 5.87827 0 8 0C10.1217 0 12.1568 0.842658 13.6571 2.34295C15.1573 3.84324 16 5.87827 16 8Z", fill: "currentColor" })), Ga = D(za), Ua = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 5, height: 12, viewBox: "0 0 5 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("g", { clipPath: "url(#clip0_38_51)" }, /* @__PURE__ */ s.createElement("path", { d: "M0.46875 9.94287H0.9375V6.55713H0.46875C0.209859 6.55713 0 6.34727 0 6.08838V4.96875C0 4.70986 0.209859 4.5 0.46875 4.5H3.09375C3.35264 4.5 3.5625 4.70986 3.5625 4.96875V9.94287H4.03125C4.29014 9.94287 4.5 10.1527 4.5 10.4116V11.5312C4.5 11.7901 4.29014 12 4.03125 12H0.46875C0.209859 12 0 11.7901 0 11.5312V10.4116C0 10.1527 0.209859 9.94287 0.46875 9.94287ZM2.25 0C1.31801 0 0.5625 0.755508 0.5625 1.6875C0.5625 2.61949 1.31801 3.375 2.25 3.375C3.18199 3.375 3.9375 2.61949 3.9375 1.6875C3.9375 0.755508 3.18197 0 2.25 0Z", fill: "currentColor" })), /* @__PURE__ */ s.createElement("defs", null, /* @__PURE__ */ s.createElement("clipPath", { id: "clip0_38_51" }, /* @__PURE__ */ s.createElement("rect", { width: 4.5, height: 12, fill: "white" })))), Kt = D(Ua), ja = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 13, height: 12, viewBox: "0 0 13 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M6.40052 0C6.76802 0 7.10552 0.2025 7.28052 0.525L12.6805 10.525C12.848 10.835 12.8405 11.21 12.6605 11.5125C12.4805 11.815 12.153 12 11.8005 12H1.00052C0.648017 12 0.320516 11.815 0.140516 11.5125C-0.0394836 11.21 -0.0469834 10.835 0.120517 10.525L5.52052 0.525C5.69552 0.2025 6.03302 0 6.40052 0ZM6.40052 8.8C5.95802 8.8 5.60052 9.1575 5.60052 9.6C5.60052 10.0425 5.95802 10.4 6.40052 10.4C6.84302 10.4 7.20052 10.0425 7.20052 9.6C7.20052 9.1575 6.84302 8.8 6.40052 8.8ZM6.40052 4C5.94552 4 5.58302 4.3875 5.61552 4.8425L5.80052 7.4425C5.82302 7.755 6.08552 8 6.39802 8C6.71302 8 6.97302 7.7575 6.99552 7.4425L7.18052 4.8425C7.21302 4.3875 6.85302 4 6.39552 4H6.40052Z", fill: "currentColor" })), fr = D(ja), Ka = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 11, height: 12, viewBox: "0 0 11 12", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M10.7875 1.40663C11.1112 1.04237 11.0596 0.501342 10.6701 0.198688C10.2805 -0.103966 9.70194 -0.0557555 9.37828 0.3085L5.5 4.66082L1.62172 0.3085C1.29806 -0.0557555 0.719466 -0.103966 0.32992 0.198688C-0.0596265 0.501342 -0.111184 1.04237 0.212483 1.40663L4.30558 6L0.212483 10.5934C-0.111184 10.9576 -0.0596265 11.4987 0.32992 11.8013C0.719466 12.104 1.29806 12.0558 1.62172 11.6915L5.5 7.33918L9.37828 11.6915C9.70194 12.0558 10.2805 12.104 10.6701 11.8013C11.0596 11.4987 11.1112 10.9576 10.7875 10.5934L6.69442 6L10.7875 1.40663Z", fill: "currentColor" })), pr = D(Ka), Ya = Y(
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
), Xa = {
  info: Kt,
  success: dr,
  warning: fr,
  error: pr
}, mr = D(
  ({
    className: e,
    type: t = "default",
    variant: n = "secondary",
    size: r = "regular",
    children: o,
    LeftIcon: a,
    isDismissible: c = !1,
    onDismiss: i,
    dataTestId: u,
    ...l
  }, d) => {
    const f = on(() => {
      if (a) return a;
      if (t === "default") return null;
      const v = Xa[t];
      return v ? /* @__PURE__ */ p(v, {}) : null;
    }, [a, t]), h = {
      small: "size-3",
      regular: "size-3.5",
      big: "size-5"
    }, g = h[r] ?? h.regular;
    return /* @__PURE__ */ _(
      "span",
      {
        ref: d,
        "data-test-id": u,
        className: T(
          "group relative inline-flex items-center gap-1.25",
          c && "pr-1"
        ),
        children: [
          /* @__PURE__ */ _(
            "span",
            {
              className: T(Ya({ type: t, variant: n, size: r, className: e })),
              ...l,
              children: [
                f && /* @__PURE__ */ p(
                  "span",
                  {
                    "aria-hidden": "true",
                    className: T(
                      "flex items-center justify-center shrink-0",
                      "h-[0.8em] w-[0.9em] leading-none self-center",
                      "[&_svg]:size-full [&_svg]:block"
                    ),
                    children: f
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
              className: T(
                "flex items-center justify-center shrink-0 rounded-full text-gi-gray/80",
                "transition-all duration-300 ease hover:brightness-80",
                "will-change-transform transform-gpu cursor-pointer block size-full overflow-visible",
                g
              ),
              children: /* @__PURE__ */ p(Ga, { "aria-hidden": "true" })
            }
          )
        ]
      }
    );
  }
);
mr.displayName = "Badge";
function kn(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Ee(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const a = kn(o, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const a = r[o];
          typeof a == "function" ? a() : kn(e[o], null);
        }
      };
  };
}
function z(...e) {
  return s.useCallback(Ee(...e), e);
}
var Za = /* @__PURE__ */ Symbol.for("react.lazy"), ut = s[" use ".trim().toString()];
function qa(e) {
  return typeof e == "object" && e !== null && "then" in e;
}
function hr(e) {
  return e != null && typeof e == "object" && "$$typeof" in e && e.$$typeof === Za && "_payload" in e && qa(e._payload);
}
// @__NO_SIDE_EFFECTS__
function Qa(e) {
  const t = /* @__PURE__ */ ei(e), n = s.forwardRef((r, o) => {
    let { children: a, ...c } = r;
    hr(a) && typeof ut == "function" && (a = ut(a._payload));
    const i = s.Children.toArray(a), u = i.find(ni);
    if (u) {
      const l = u.props.children, d = i.map((f) => f === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
var Ja = /* @__PURE__ */ Qa("Slot");
// @__NO_SIDE_EFFECTS__
function ei(e) {
  const t = s.forwardRef((n, r) => {
    let { children: o, ...a } = n;
    if (hr(o) && typeof ut == "function" && (o = ut(o._payload)), s.isValidElement(o)) {
      const c = oi(o), i = ri(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? Ee(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ti = /* @__PURE__ */ Symbol("radix.slottable");
function ni(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ti;
}
function ri(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const u = a(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function oi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
const ai = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { className: "animate-spin shrink-0 w-4 h-4", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "{true} ", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M7.14667 13.2666C6.42022 13.1495 5.72586 12.8834 5.10726 12.4849C4.48866 12.0864 3.95921 11.5643 3.5522 10.9513C3.1452 10.3382 2.86944 9.64764 2.74229 8.92289C2.61513 8.19813 2.63932 7.4549 2.81334 6.73995C3.03483 5.74733 3.54363 4.84187 4.27629 4.13648C5.00894 3.4311 5.93303 2.95699 6.93334 2.77328C7.63529 2.63005 8.3589 2.62972 9.06099 2.77229C9.76307 2.91486 10.4292 3.19742 11.0197 3.60311C11.6102 4.00879 12.1129 4.52928 12.4978 5.13351C12.8827 5.73775 13.1419 6.41333 13.26 7.11995C13.2947 7.36046 13.4135 7.58088 13.5954 7.74201C13.7773 7.90315 14.0104 7.99454 14.2533 7.99995H14.34C14.4707 8.00192 14.6002 7.97582 14.7199 7.92343C14.8397 7.87103 14.9467 7.79356 15.0339 7.69624C15.1211 7.59892 15.1865 7.48402 15.2255 7.3593C15.2645 7.23458 15.2762 7.10295 15.26 6.97328C15.0703 5.63152 14.5126 4.36854 13.6487 3.32453C12.7848 2.28052 11.6485 1.4963 10.3659 1.0589C9.08332 0.621502 7.70463 0.548037 6.38284 0.846658C5.06104 1.14528 3.84784 1.8043 2.87787 2.7506C1.9079 3.69689 1.2191 4.89344 0.887914 6.20745C0.556727 7.52146 0.596105 8.90155 1.00168 10.1945C1.40725 11.4875 2.16316 12.6429 3.18551 13.5323C4.20786 14.4217 5.45667 15.0105 6.79334 15.2333C6.94074 15.2595 7.0921 15.2532 7.23681 15.2148C7.38151 15.1764 7.51606 15.1068 7.63103 15.0109C7.746 14.915 7.83859 14.7951 7.90233 14.6596C7.96607 14.5241 7.99941 14.3763 8.00001 14.2266C7.99717 13.9907 7.9093 13.7637 7.75254 13.5873C7.59578 13.411 7.38065 13.2971 7.14667 13.2666Z", fill: "currentColor" })), On = D(ai), ii = Y(
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
), _e = D(
  ({
    className: e,
    type: t,
    variant: n,
    size: r,
    isIconButton: o,
    asChild: a = !1,
    LeftIcon: c,
    RightIcon: i,
    isLoading: u,
    htmlType: l = "button",
    children: d,
    disabled: f,
    onClick: h,
    ...g
  }, v) => {
    const m = f || u, y = (x) => {
      if (m) {
        x.preventDefault(), x.stopPropagation();
        return;
      }
      h?.(x);
    }, w = (x) => An(
      x,
      {
        "aria-hidden": !0,
        focusable: "false"
      }
    ), b = (x) => o && u ? /* @__PURE__ */ p(On, {}) : /* @__PURE__ */ _(rn, { children: [
      u ? /* @__PURE__ */ p(On, {}) : c && w(c),
      x,
      !u && i && w(i)
    ] }), C = {
      className: T(
        ii({ type: t, variant: n, size: r, isIconButton: o, className: e }),
        u && "cursor-wait"
      ),
      disabled: m,
      "aria-disabled": m,
      "aria-busy": u,
      "aria-live": "polite",
      "data-disabled": m,
      onClick: y,
      ...g
    };
    if (a && _a(d)) {
      const x = d;
      return /* @__PURE__ */ p(Ja, { ref: v, ...C, children: An(x, {
        children: b(x.props.children)
      }) });
    }
    return /* @__PURE__ */ p("button", { ref: v, type: l, ...C, children: b(d) });
  }
);
_e.displayName = "Button";
const si = ({
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
si.displayName = "Button Select";
function ae(e, t = []) {
  let n = [];
  function r(a, c) {
    const i = s.createContext(c), u = n.length;
    n = [...n, c];
    const l = (f) => {
      const { scope: h, children: g, ...v } = f, m = h?.[e]?.[u] || i, y = s.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ p(m.Provider, { value: y, children: g });
    };
    l.displayName = a + "Provider";
    function d(f, h) {
      const g = h?.[e]?.[u] || i, v = s.useContext(g);
      if (v) return v;
      if (c !== void 0) return c;
      throw new Error(`\`${f}\` must be used within \`${a}\``);
    }
    return [l, d];
  }
  const o = () => {
    const a = n.map((c) => s.createContext(c));
    return function(i) {
      const u = i?.[e] || a;
      return s.useMemo(
        () => ({ [`__scope${e}`]: { ...i, [e]: u } }),
        [i, u]
      );
    };
  };
  return o.scopeName = e, [r, ci(o, ...t)];
}
function ci(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(a) {
      const c = r.reduce((i, { useScope: u, scopeName: l }) => {
        const f = u(a)[`__scope${l}`];
        return { ...i, ...f };
      }, {});
      return s.useMemo(() => ({ [`__scope${t.scopeName}`]: c }), [c]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function M(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e?.(o), n === !1 || !o.defaultPrevented)
      return t?.(o);
  };
}
var he = globalThis?.document ? s.useLayoutEffect : () => {
}, li = s[" useInsertionEffect ".trim().toString()] || he;
function Fe({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [o, a, c] = ui({
    defaultProp: t,
    onChange: n
  }), i = e !== void 0, u = i ? e : o;
  {
    const d = s.useRef(e !== void 0);
    s.useEffect(() => {
      const f = d.current;
      f !== i && console.warn(
        `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = i;
    }, [i, r]);
  }
  const l = s.useCallback(
    (d) => {
      if (i) {
        const f = di(d) ? d(e) : d;
        f !== e && c.current?.(f);
      } else
        a(d);
    },
    [i, e, a, c]
  );
  return [u, l];
}
function ui({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = s.useState(e), o = s.useRef(n), a = s.useRef(t);
  return li(() => {
    a.current = t;
  }, [t]), s.useEffect(() => {
    o.current !== n && (a.current?.(n), o.current = n);
  }, [n, o]), [n, r, a];
}
function di(e) {
  return typeof e == "function";
}
function an(e) {
  const t = s.useRef({ value: e, previous: e });
  return s.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
function wt(e) {
  const [t, n] = s.useState(void 0);
  return he(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const a = o[0];
        let c, i;
        if ("borderBoxSize" in a) {
          const u = a.borderBoxSize, l = Array.isArray(u) ? u[0] : u;
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
function fi(e, t) {
  return s.useReducer((n, r) => t[n][r] ?? n, e);
}
var ue = (e) => {
  const { present: t, children: n } = e, r = pi(t), o = typeof n == "function" ? n({ present: r.isPresent }) : s.Children.only(n), a = z(r.ref, mi(o));
  return typeof n == "function" || r.isPresent ? s.cloneElement(o, { ref: a }) : null;
};
ue.displayName = "Presence";
function pi(e) {
  const [t, n] = s.useState(), r = s.useRef(null), o = s.useRef(e), a = s.useRef("none"), c = e ? "mounted" : "unmounted", [i, u] = fi(c, {
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
    const l = Je(r.current);
    a.current = i === "mounted" ? l : "none";
  }, [i]), he(() => {
    const l = r.current, d = o.current;
    if (d !== e) {
      const h = a.current, g = Je(l);
      e ? u("MOUNT") : g === "none" || l?.display === "none" ? u("UNMOUNT") : u(d && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, u]), he(() => {
    if (t) {
      let l;
      const d = t.ownerDocument.defaultView ?? window, f = (g) => {
        const m = Je(r.current).includes(CSS.escape(g.animationName));
        if (g.target === t && m && (u("ANIMATION_END"), !o.current)) {
          const y = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", l = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = y);
          });
        }
      }, h = (g) => {
        g.target === t && (a.current = Je(r.current));
      };
      return t.addEventListener("animationstart", h), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(l), t.removeEventListener("animationstart", h), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(i),
    ref: s.useCallback((l) => {
      r.current = l ? getComputedStyle(l) : null, n(l);
    }, [])
  };
}
function Je(e) {
  return e?.animationName || "none";
}
function mi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
// @__NO_SIDE_EFFECTS__
function hi(e) {
  const t = /* @__PURE__ */ gi(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), u = i.find(yi);
    if (u) {
      const l = u.props.children, d = i.map((f) => f === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function gi(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = bi(o), i = wi(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? Ee(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var vi = /* @__PURE__ */ Symbol("radix.slottable");
function yi(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === vi;
}
function wi(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const u = a(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function bi(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ci = [
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
], V = Ci.reduce((e, t) => {
  const n = /* @__PURE__ */ hi(`Primitive.${t}`), r = s.forwardRef((o, a) => {
    const { asChild: c, ...i } = o, u = c ? n : t;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ p(u, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function gr(e, t) {
  e && cr.flushSync(() => e.dispatchEvent(t));
}
var bt = "Checkbox", [xi] = ae(bt), [Ei, sn] = xi(bt);
function Ri(e) {
  const {
    __scopeCheckbox: t,
    checked: n,
    children: r,
    defaultChecked: o,
    disabled: a,
    form: c,
    name: i,
    onCheckedChange: u,
    required: l,
    value: d = "on",
    // @ts-expect-error
    internal_do_not_use_render: f
  } = e, [h, g] = Fe({
    prop: n,
    defaultProp: o ?? !1,
    onChange: u,
    caller: bt
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
    value: d,
    hasConsumerStoppedPropagationRef: b,
    required: l,
    defaultChecked: me(o) ? !1 : o,
    isFormControl: C,
    bubbleInput: y,
    setBubbleInput: w
  };
  return /* @__PURE__ */ p(
    Ei,
    {
      scope: t,
      ...x,
      children: Si(f) ? f(x) : r
    }
  );
}
var vr = "CheckboxTrigger", yr = s.forwardRef(
  ({ __scopeCheckbox: e, onKeyDown: t, onClick: n, ...r }, o) => {
    const {
      control: a,
      value: c,
      disabled: i,
      checked: u,
      required: l,
      setControl: d,
      setChecked: f,
      hasConsumerStoppedPropagationRef: h,
      isFormControl: g,
      bubbleInput: v
    } = sn(vr, e), m = z(o, d), y = s.useRef(u);
    return s.useEffect(() => {
      const w = a?.form;
      if (w) {
        const b = () => f(y.current);
        return w.addEventListener("reset", b), () => w.removeEventListener("reset", b);
      }
    }, [a, f]), /* @__PURE__ */ p(
      V.button,
      {
        type: "button",
        role: "checkbox",
        "aria-checked": me(u) ? "mixed" : u,
        "aria-required": l,
        "data-state": Rr(u),
        "data-disabled": i ? "" : void 0,
        disabled: i,
        value: c,
        ...r,
        ref: m,
        onKeyDown: M(t, (w) => {
          w.key === "Enter" && w.preventDefault();
        }),
        onClick: M(n, (w) => {
          f((b) => me(b) ? !0 : !b), v && g && (h.current = w.isPropagationStopped(), h.current || w.stopPropagation());
        })
      }
    );
  }
);
yr.displayName = vr;
var wr = s.forwardRef(
  (e, t) => {
    const {
      __scopeCheckbox: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: c,
      disabled: i,
      value: u,
      onCheckedChange: l,
      form: d,
      ...f
    } = e;
    return /* @__PURE__ */ p(
      Ri,
      {
        __scopeCheckbox: n,
        checked: o,
        defaultChecked: a,
        disabled: i,
        required: c,
        onCheckedChange: l,
        name: r,
        form: d,
        value: u,
        internal_do_not_use_render: ({ isFormControl: h }) => /* @__PURE__ */ _(rn, { children: [
          /* @__PURE__ */ p(
            yr,
            {
              ...f,
              ref: t,
              __scopeCheckbox: n
            }
          ),
          h && /* @__PURE__ */ p(
            Er,
            {
              __scopeCheckbox: n
            }
          )
        ] })
      }
    );
  }
);
wr.displayName = bt;
var br = "CheckboxIndicator", Cr = s.forwardRef(
  (e, t) => {
    const { __scopeCheckbox: n, forceMount: r, ...o } = e, a = sn(br, n);
    return /* @__PURE__ */ p(
      ue,
      {
        present: r || me(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          V.span,
          {
            "data-state": Rr(a.checked),
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
Cr.displayName = br;
var xr = "CheckboxBubbleInput", Er = s.forwardRef(
  ({ __scopeCheckbox: e, ...t }, n) => {
    const {
      control: r,
      hasConsumerStoppedPropagationRef: o,
      checked: a,
      defaultChecked: c,
      required: i,
      disabled: u,
      name: l,
      value: d,
      form: f,
      bubbleInput: h,
      setBubbleInput: g
    } = sn(xr, e), v = z(n, g), m = an(a), y = wt(r);
    s.useEffect(() => {
      const b = h;
      if (!b) return;
      const C = window.HTMLInputElement.prototype, R = Object.getOwnPropertyDescriptor(
        C,
        "checked"
      ).set, S = !o.current;
      if (m !== a && R) {
        const E = new Event("click", { bubbles: S });
        b.indeterminate = me(a), R.call(b, me(a) ? !1 : a), b.dispatchEvent(E);
      }
    }, [h, m, a, o]);
    const w = s.useRef(me(a) ? !1 : a);
    return /* @__PURE__ */ p(
      V.input,
      {
        type: "checkbox",
        "aria-hidden": !0,
        defaultChecked: c ?? w.current,
        required: i,
        disabled: u,
        name: l,
        value: d,
        form: f,
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
Er.displayName = xr;
function Si(e) {
  return typeof e == "function";
}
function me(e) {
  return e === "indeterminate";
}
function Rr(e) {
  return me(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
const Sr = ({
  className: e,
  label: t,
  secondaryLabel: n,
  id: r,
  ...o
}) => {
  const a = yt(), c = r ?? a, i = `${c}-description`;
  return /* @__PURE__ */ _("div", { className: "flex items-start group", children: [
    /* @__PURE__ */ p(
      wr,
      {
        id: c,
        "data-slot": "checkbox",
        "aria-describedby": n ? i : void 0,
        className: T(
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
          Cr,
          {
            "data-slot": "checkbox-indicator",
            className: "grid place-content-center text-current transition-none"
          }
        )
      }
    ),
    /* @__PURE__ */ _("div", { className: "flex flex-col ml-2 select-none", children: [
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
Sr.displayName = "Checkbox";
const Ni = Y(
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
), Pi = Y(
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
), Ln = {
  default: Kt,
  info: Kt,
  success: dr,
  warning: fr,
  error: pr
}, Mi = D(
  ({ className: e, variant: t = "default", LeftIcon: n, children: r, ...o }, a) => {
    const c = on(() => {
      const i = n || (Ln[t] ?? Ln.default);
      return /* @__PURE__ */ p(
        i,
        {
          "aria-hidden": "true",
          focusable: "false",
          className: "h-3 w-3 shrink-0 block"
        }
      );
    }, [n, t]);
    return /* @__PURE__ */ _(
      "div",
      {
        ref: a,
        ...o,
        "data-slot": "info-message",
        className: T(Ni({ variant: t, className: e })),
        children: [
          /* @__PURE__ */ p(
            "div",
            {
              "aria-hidden": "true",
              className: Pi({ variant: t }),
              children: c
            }
          ),
          /* @__PURE__ */ p("div", { children: r })
        ]
      }
    );
  }
);
Mi.displayName = "InfoMessage";
const Ai = (e, t, n) => e && !t ? "some text" : n, _i = D(
  ({
    className: e,
    type: t,
    label: n,
    helper: r,
    errorText: o,
    isError: a,
    isRequired: c,
    isDisabled: i,
    LeftIcon: u,
    RightIcon: l,
    prefix: d,
    suffix: f,
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
    const S = yt(), E = C ?? S, P = `${E}-description`, [k, I] = Ce(!1), [L, B] = Ce(
      g ?? b ?? ""
    ), F = Oe(null);
    Ta(R, () => F.current), Te(() => {
      g !== void 0 && B(g ?? "");
    }, [g]);
    const $ = (Q) => {
      if (i) return;
      const fe = Q.target.value;
      g === void 0 && B(fe), v?.(fe);
    }, G = (Q) => {
      I(!0), m?.(Q);
    }, O = (Q) => {
      I(!1), y?.(Q);
    }, W = () => {
      i || F.current?.focus();
    }, A = g !== void 0 ? g ?? "" : L, N = String(A), H = N.length > 0, K = a ? o ?? null : r ?? null, te = !k && (H || i);
    return /* @__PURE__ */ _("div", { className: "w-full space-y-1.5 text-left", "data-testid": h, children: [
      n ? /* @__PURE__ */ _(
        "label",
        {
          htmlFor: E,
          className: T(
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
      /* @__PURE__ */ _(
        "div",
        {
          className: T(
            "flex items-center w-full min-h-10 px-3 bg-white border rounded-3xl transition-all duration-300 ease",
            !a && !i && "border-gi-primary/10 hover:border-gi-primary/33 focus-within:border-gi-primary/33 cursor-text",
            a && "border-gi-red",
            i && "border-gi-primary/10 cursor-not-allowed bg-white",
            e
          ),
          onClick: W,
          children: [
            u ? /* @__PURE__ */ p(
              "div",
              {
                className: T(
                  "shrink-0 mr-2 flex items-center",
                  i ? "opacity-30" : "text-gi-primary"
                ),
                children: u
              }
            ) : null,
            /* @__PURE__ */ _(
              "div",
              {
                className: "relative flex-1 flex items-center overflow-hidden h-full",
                "data-testid": "input-click-wrapper",
                children: [
                  te ? /* @__PURE__ */ _(
                    "div",
                    {
                      className: T(
                        "absolute inset-y-0 left-0 flex items-center pointer-events-none w-full",
                        !u && "pl-1",
                        !l && "pr-1"
                      ),
                      children: [
                        d && H ? /* @__PURE__ */ p("span", { className: "text-sm mr-0.2 text-gi-primary/50 select-none", children: d }) : null,
                        /* @__PURE__ */ p(
                          "span",
                          {
                            className: T(
                              "text-sm truncate",
                              !H && i ? "text-gi-primary/30" : "text-gi-primary"
                            ),
                            children: Ai(i, H, N)
                          }
                        ),
                        f && H ? /* @__PURE__ */ p("span", { className: "text-sm ml-0.2 text-gi-primary/50 select-none", children: f }) : null
                      ]
                    }
                  ) : null,
                  /* @__PURE__ */ p(
                    "input",
                    {
                      ...x,
                      id: E,
                      ref: F,
                      type: t,
                      value: A,
                      onChange: $,
                      onFocus: G,
                      onBlur: O,
                      disabled: i,
                      placeholder: w,
                      "data-test-id": h,
                      "aria-invalid": !!a,
                      "aria-describedby": K && !i ? P : void 0,
                      className: T(
                        "flex-1 bg-transparent text-sm text-gi-primary outline-none placeholder:text-gi-primary/30 py-3 w-full",
                        te && "text-transparent placeholder:text-transparent",
                        i && "cursor-not-allowed",
                        !u && "pl-1",
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
                className: T(
                  "shrink-0 ml-2 flex items-center",
                  i ? "opacity-30" : "text-gi-primary"
                ),
                children: l
              }
            ) : null
          ]
        }
      ),
      K && !i ? /* @__PURE__ */ p("div", { className: "min-h-5", children: /* @__PURE__ */ p(
        "p",
        {
          id: P,
          className: T(
            "text-[14px] leading-tight transition-all duration-300 ease",
            a ? "text-gi-red" : "text-gi-primary/50"
          ),
          children: K
        }
      ) }) : null
    ] });
  }
);
_i.displayName = "Input";
const Ti = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ii = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, n, r) => r ? r.toUpperCase() : n.toLowerCase()
), Dn = (e) => {
  const t = Ii(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, Nr = (...e) => e.filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim(), ki = (e) => {
  for (const t in e)
    if (t.startsWith("aria-") || t === "role" || t === "title")
      return !0;
};
var Oi = {
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
const Li = D(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: a,
    iconNode: c,
    ...i
  }, u) => jt(
    "svg",
    {
      ref: u,
      ...Oi,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Nr("lucide", o),
      ...!a && !ki(i) && { "aria-hidden": "true" },
      ...i
    },
    [
      ...c.map(([l, d]) => jt(l, d)),
      ...Array.isArray(a) ? a : [a]
    ]
  )
);
const Pr = (e, t) => {
  const n = D(
    ({ className: r, ...o }, a) => jt(Li, {
      ref: a,
      iconNode: t,
      className: Nr(
        `lucide-${Ti(Dn(e))}`,
        `lucide-${e}`,
        r
      ),
      ...o
    })
  );
  return n.displayName = Dn(e), n;
};
const Di = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]], Fi = Pr("circle", Di);
const $i = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Bi = Pr("x", $i), Vi = Y(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0"
      }
    }
  }
), Wi = Y(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95"
      }
    }
  }
), Hi = Y(
  "flex items-start justify-between text-gi-primary"
), zi = Y("flex justify-end gap-3 mt-6"), Gi = D(
  ({
    title: e,
    description: t,
    children: n,
    actions: r,
    isOpen: o,
    isClosable: a = !0,
    isCloseOnOverlayClick: c = !0,
    onClose: i,
    className: u,
    dataTestId: l,
    ...d
  }, f) => {
    const h = Oe(null), g = Oe(null), v = yt(), [m, y] = Ce(o);
    Te(() => {
      o && y(!0);
    }, [o]);
    const w = (b) => {
      b.target === b.currentTarget && (o || y(!1));
    };
    return Te(() => {
      if (o)
        return document.body.style.overflow = "hidden", () => {
          document.body.style.overflow = "";
        };
    }, [o]), Te(() => {
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
        className: Vi({ state: o ? "open" : "closed" }),
        onTransitionEnd: w,
        ref: f,
        onClick: () => {
          c && a && i();
        },
        children: /* @__PURE__ */ _(
          "div",
          {
            ref: h,
            ...d,
            role: "dialog",
            "aria-modal": "true",
            "aria-labelledby": v,
            tabIndex: -1,
            "data-test-id": l,
            className: T(
              Wi({ state: o ? "open" : "closed" }),
              u
            ),
            onClick: (b) => {
              b.stopPropagation(), d.onClick?.(b);
            },
            children: [
              /* @__PURE__ */ _("div", { className: Hi(), children: [
                /* @__PURE__ */ _("div", { className: "flex-1 min-w-0", children: [
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
                    children: /* @__PURE__ */ p(Bi, { className: "size-5 fill-gi-primary" })
                  }
                )
              ] }),
              n && /* @__PURE__ */ p("div", { className: "mt-2 break-words text-gi-primary", children: n }),
              r && /* @__PURE__ */ p("div", { className: zi(), children: r })
            ]
          }
        )
      }
    ) : null;
  }
);
Gi.displayName = "Modal";
const Ui = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M4.23486 7.43507C3.92236 7.74757 3.92236 8.25507 4.23486 8.56757L9.03486 13.3676C9.34736 13.6801 9.85486 13.6801 10.1674 13.3676C10.4799 13.0551 10.4799 12.5476 10.1674 12.2351L5.93236 8.00007L10.1649 3.76507C10.4774 3.45257 10.4774 2.94507 10.1649 2.63257C9.85236 2.32007 9.34486 2.32007 9.03236 2.63257L4.23236 7.43257L4.23486 7.43507Z", fill: "currentColor" })), ji = D(Ui), Ki = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M11.7651 8.56493C12.0776 8.25243 12.0776 7.74493 11.7651 7.43243L6.96514 2.63243C6.65264 2.31993 6.14514 2.31993 5.83264 2.63243C5.52014 2.94493 5.52014 3.45243 5.83264 3.76493L10.0676 7.99993L5.83514 12.2349C5.52264 12.5474 5.52264 13.0549 5.83514 13.3674C6.14764 13.6799 6.65514 13.6799 6.96764 13.3674L11.7676 8.56743L11.7651 8.56493Z", fill: "currentColor" })), Yi = D(Ki), et = "...", tt = (e, t) => {
  const n = t - e + 1;
  return Array.from({ length: n }, (r, o) => o + e);
}, Xi = (e, t, n) => {
  const o = t, a = Math.max(e - n, 1), c = Math.min(e + n, o), i = a > 2, u = c < o - 1;
  return {
    shouldShowLeftDots: i,
    shouldShowRightDots: u,
    leftSiblingIndex: a,
    rightSiblingIndex: c
  };
};
function Zi(e, t, n = 1) {
  if (n + 5 >= t)
    return tt(1, t);
  const {
    shouldShowLeftDots: o,
    shouldShowRightDots: a,
    leftSiblingIndex: c,
    rightSiblingIndex: i
  } = Xi(e, t, n);
  if (!o && a) {
    const l = 3 + 2 * n;
    return [...tt(1, l), et, t];
  }
  if (o && !a) {
    const l = 3 + 2 * n, d = tt(
      t - l + 1,
      t
    );
    return [1, et, ...d];
  }
  const u = tt(c, i);
  return [1, et, ...u, et, t];
}
const Mr = D(
  ({
    page: e,
    totalPages: t,
    onChange: n,
    isOnlyActions: r = !1,
    isFullWidth: o = !1,
    siblingCount: a = 1,
    dataTestId: c,
    className: i,
    ...u
  }, l) => {
    const d = on(() => Zi(e, t, a), [e, t, a]), f = () => {
      n(e + 1);
    }, h = () => {
      n(e - 1);
    };
    return /* @__PURE__ */ _(
      "nav",
      {
        ref: l,
        "aria-label": "Pagination",
        "data-test-id": c,
        className: T(
          "flex items-center",
          o ? "w-full justify-between" : "w-auto gap-2",
          i
        ),
        ...u,
        children: [
          /* @__PURE__ */ _(
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
                /* @__PURE__ */ p(ji, {}),
                /* @__PURE__ */ p("div", {})
              ]
            }
          ),
          !r && /* @__PURE__ */ p("ul", { className: "flex items-center gap-2 m-0 p-0 list-none", children: d.map((g, v) => typeof g == "string" ? /* @__PURE__ */ p("li", { children: /* @__PURE__ */ p(
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
          /* @__PURE__ */ _(
            _e,
            {
              type: "outlined",
              variant: "primary",
              disabled: e === t,
              isIconButton: r,
              "aria-label": "Next",
              onClick: f,
              children: [
                /* @__PURE__ */ p("div", {}),
                /* @__PURE__ */ p(Yi, {}),
                /* @__PURE__ */ p("div", {})
              ]
            }
          )
        ]
      }
    );
  }
);
Mr.displayName = "Pagination";
const qi = Y(
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
), Qi = Y(
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
), Ji = D(
  ({ className: e, value: t, size: n, variant: r, dataTestId: o, ...a }, c) => {
    const i = Math.min(100, Math.max(0, t));
    return /* @__PURE__ */ p(
      "div",
      {
        ref: c,
        "data-slot": "progress-bar",
        "data-test-id": o,
        className: T(qi({ size: n, className: e })),
        role: "progressbar",
        "aria-valuenow": i,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        ...a,
        children: /* @__PURE__ */ p(
          "div",
          {
            className: Qi({ variant: r }),
            style: { width: `${i}%` }
          }
        )
      }
    );
  }
);
Ji.displayName = "ProgressBar";
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  const t = /* @__PURE__ */ es(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), u = i.find(ns);
    if (u) {
      const l = u.props.children, d = i.map((f) => f === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function es(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = os(o), i = rs(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? Ee(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ts = /* @__PURE__ */ Symbol("radix.slottable");
function ns(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ts;
}
function rs(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const u = a(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function os(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
function Ar(e) {
  const t = e + "CollectionProvider", [n, r] = ae(t), [o, a] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), c = (m) => {
    const { scope: y, children: w } = m, b = we.useRef(null), C = we.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ p(o, { scope: y, itemMap: C, collectionRef: b, children: w });
  };
  c.displayName = t;
  const i = e + "CollectionSlot", u = /* @__PURE__ */ Fn(i), l = we.forwardRef(
    (m, y) => {
      const { scope: w, children: b } = m, C = a(i, w), x = z(y, C.collectionRef);
      return /* @__PURE__ */ p(u, { ref: x, children: b });
    }
  );
  l.displayName = i;
  const d = e + "CollectionItemSlot", f = "data-radix-collection-item", h = /* @__PURE__ */ Fn(d), g = we.forwardRef(
    (m, y) => {
      const { scope: w, children: b, ...C } = m, x = we.useRef(null), R = z(y, x), S = a(d, w);
      return we.useEffect(() => (S.itemMap.set(x, { ref: x, ...C }), () => {
        S.itemMap.delete(x);
      })), /* @__PURE__ */ p(h, { [f]: "", ref: R, children: b });
    }
  );
  g.displayName = d;
  function v(m) {
    const y = a(e + "CollectionConsumer", m);
    return we.useCallback(() => {
      const b = y.collectionRef.current;
      if (!b) return [];
      const C = Array.from(b.querySelectorAll(`[${f}]`));
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
var as = s[" useId ".trim().toString()] || (() => {
}), is = 0;
function dt(e) {
  const [t, n] = s.useState(as());
  return he(() => {
    n((r) => r ?? String(is++));
  }, [e]), t ? `radix-${t}` : "";
}
function se(e) {
  const t = s.useRef(e);
  return s.useEffect(() => {
    t.current = e;
  }), s.useMemo(() => (...n) => t.current?.(...n), []);
}
var ss = s.createContext(void 0);
function cn(e) {
  const t = s.useContext(ss);
  return e || t || "ltr";
}
var Lt = "rovingFocusGroup.onEntryFocus", cs = { bubbles: !1, cancelable: !0 }, je = "RovingFocusGroup", [Yt, _r, ls] = Ar(je), [us, Ct] = ae(
  je,
  [ls]
), [ds, fs] = us(je), Tr = s.forwardRef(
  (e, t) => /* @__PURE__ */ p(Yt.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(Yt.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ p(ps, { ...e, ref: t }) }) })
);
Tr.displayName = je;
var ps = s.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: a,
    currentTabStopId: c,
    defaultCurrentTabStopId: i,
    onCurrentTabStopIdChange: u,
    onEntryFocus: l,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, h = s.useRef(null), g = z(t, h), v = cn(a), [m, y] = Fe({
    prop: c,
    defaultProp: i ?? null,
    onChange: u,
    caller: je
  }), [w, b] = s.useState(!1), C = se(l), x = _r(n), R = s.useRef(!1), [S, E] = s.useState(0);
  return s.useEffect(() => {
    const P = h.current;
    if (P)
      return P.addEventListener(Lt, C), () => P.removeEventListener(Lt, C);
  }, [C]), /* @__PURE__ */ p(
    ds,
    {
      scope: n,
      orientation: r,
      dir: v,
      loop: o,
      currentTabStopId: m,
      onItemFocus: s.useCallback(
        (P) => y(P),
        [y]
      ),
      onItemShiftTab: s.useCallback(() => b(!0), []),
      onFocusableItemAdd: s.useCallback(
        () => E((P) => P + 1),
        []
      ),
      onFocusableItemRemove: s.useCallback(
        () => E((P) => P - 1),
        []
      ),
      children: /* @__PURE__ */ p(
        V.div,
        {
          tabIndex: w || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: g,
          style: { outline: "none", ...e.style },
          onMouseDown: M(e.onMouseDown, () => {
            R.current = !0;
          }),
          onFocus: M(e.onFocus, (P) => {
            const k = !R.current;
            if (P.target === P.currentTarget && k && !w) {
              const I = new CustomEvent(Lt, cs);
              if (P.currentTarget.dispatchEvent(I), !I.defaultPrevented) {
                const L = x().filter((O) => O.focusable), B = L.find((O) => O.active), F = L.find((O) => O.id === m), G = [B, F, ...L].filter(
                  Boolean
                ).map((O) => O.ref.current);
                Or(G, d);
              }
            }
            R.current = !1;
          }),
          onBlur: M(e.onBlur, () => b(!1))
        }
      )
    }
  );
}), Ir = "RovingFocusGroupItem", kr = s.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: a,
      children: c,
      ...i
    } = e, u = dt(), l = a || u, d = fs(Ir, n), f = d.currentTabStopId === l, h = _r(n), { onFocusableItemAdd: g, onFocusableItemRemove: v, currentTabStopId: m } = d;
    return s.useEffect(() => {
      if (r)
        return g(), () => v();
    }, [r, g, v]), /* @__PURE__ */ p(
      Yt.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ p(
          V.span,
          {
            tabIndex: f ? 0 : -1,
            "data-orientation": d.orientation,
            ...i,
            ref: t,
            onMouseDown: M(e.onMouseDown, (y) => {
              r ? d.onItemFocus(l) : y.preventDefault();
            }),
            onFocus: M(e.onFocus, () => d.onItemFocus(l)),
            onKeyDown: M(e.onKeyDown, (y) => {
              if (y.key === "Tab" && y.shiftKey) {
                d.onItemShiftTab();
                return;
              }
              if (y.target !== y.currentTarget) return;
              const w = gs(y, d.orientation, d.dir);
              if (w !== void 0) {
                if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
                y.preventDefault();
                let C = h().filter((x) => x.focusable).map((x) => x.ref.current);
                if (w === "last") C.reverse();
                else if (w === "prev" || w === "next") {
                  w === "prev" && C.reverse();
                  const x = C.indexOf(y.currentTarget);
                  C = d.loop ? vs(C, x + 1) : C.slice(x + 1);
                }
                setTimeout(() => Or(C));
              }
            }),
            children: typeof c == "function" ? c({ isCurrentTabStop: f, hasTabStop: m != null }) : c
          }
        )
      }
    );
  }
);
kr.displayName = Ir;
var ms = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function hs(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gs(e, t, n) {
  const r = hs(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return ms[r];
}
function Or(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function vs(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var Lr = Tr, Dr = kr, ln = "Radio", [ys, Fr] = ae(ln), [ws, bs] = ys(ln), $r = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadio: n,
      name: r,
      checked: o = !1,
      required: a,
      disabled: c,
      value: i = "on",
      onCheck: u,
      form: l,
      ...d
    } = e, [f, h] = s.useState(null), g = z(t, (y) => h(y)), v = s.useRef(!1), m = f ? l || !!f.closest("form") : !0;
    return /* @__PURE__ */ _(ws, { scope: n, checked: o, disabled: c, children: [
      /* @__PURE__ */ p(
        V.button,
        {
          type: "button",
          role: "radio",
          "aria-checked": o,
          "data-state": Hr(o),
          "data-disabled": c ? "" : void 0,
          disabled: c,
          value: i,
          ...d,
          ref: g,
          onClick: M(e.onClick, (y) => {
            o || u?.(), m && (v.current = y.isPropagationStopped(), v.current || y.stopPropagation());
          })
        }
      ),
      m && /* @__PURE__ */ p(
        Wr,
        {
          control: f,
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
$r.displayName = ln;
var Br = "RadioIndicator", Vr = s.forwardRef(
  (e, t) => {
    const { __scopeRadio: n, forceMount: r, ...o } = e, a = bs(Br, n);
    return /* @__PURE__ */ p(ue, { present: r || a.checked, children: /* @__PURE__ */ p(
      V.span,
      {
        "data-state": Hr(a.checked),
        "data-disabled": a.disabled ? "" : void 0,
        ...o,
        ref: t
      }
    ) });
  }
);
Vr.displayName = Br;
var Cs = "RadioBubbleInput", Wr = s.forwardRef(
  ({
    __scopeRadio: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const c = s.useRef(null), i = z(c, a), u = an(n), l = wt(t);
    return s.useEffect(() => {
      const d = c.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (u !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(d, n), d.dispatchEvent(v);
      }
    }, [u, n, r]), /* @__PURE__ */ p(
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
Wr.displayName = Cs;
function Hr(e) {
  return e ? "checked" : "unchecked";
}
var xs = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"], xt = "RadioGroup", [Es] = ae(xt, [
  Ct,
  Fr
]), zr = Ct(), Gr = Fr(), [Rs, Ss] = Es(xt), Ur = s.forwardRef(
  (e, t) => {
    const {
      __scopeRadioGroup: n,
      name: r,
      defaultValue: o,
      value: a,
      required: c = !1,
      disabled: i = !1,
      orientation: u,
      dir: l,
      loop: d = !0,
      onValueChange: f,
      ...h
    } = e, g = zr(n), v = cn(l), [m, y] = Fe({
      prop: a,
      defaultProp: o ?? null,
      onChange: f,
      caller: xt
    });
    return /* @__PURE__ */ p(
      Rs,
      {
        scope: n,
        name: r,
        required: c,
        disabled: i,
        value: m,
        onValueChange: y,
        children: /* @__PURE__ */ p(
          Lr,
          {
            asChild: !0,
            ...g,
            orientation: u,
            dir: v,
            loop: d,
            children: /* @__PURE__ */ p(
              V.div,
              {
                role: "radiogroup",
                "aria-required": c,
                "aria-orientation": u,
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
Ur.displayName = xt;
var jr = "RadioGroupItem", Kr = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...o } = e, a = Ss(jr, n), c = a.disabled || r, i = zr(n), u = Gr(n), l = s.useRef(null), d = z(t, l), f = a.value === o.value, h = s.useRef(!1);
    return s.useEffect(() => {
      const g = (m) => {
        xs.includes(m.key) && (h.current = !0);
      }, v = () => h.current = !1;
      return document.addEventListener("keydown", g), document.addEventListener("keyup", v), () => {
        document.removeEventListener("keydown", g), document.removeEventListener("keyup", v);
      };
    }, []), /* @__PURE__ */ p(
      Dr,
      {
        asChild: !0,
        ...i,
        focusable: !c,
        active: f,
        children: /* @__PURE__ */ p(
          $r,
          {
            disabled: c,
            required: a.required,
            checked: f,
            ...u,
            ...o,
            name: a.name,
            ref: d,
            onCheck: () => a.onValueChange(o.value),
            onKeyDown: M((g) => {
              g.key === "Enter" && g.preventDefault();
            }),
            onFocus: M(o.onFocus, () => {
              h.current && l.current?.click();
            })
          }
        )
      }
    );
  }
);
Kr.displayName = jr;
var Ns = "RadioGroupIndicator", Yr = s.forwardRef(
  (e, t) => {
    const { __scopeRadioGroup: n, ...r } = e, o = Gr(n);
    return /* @__PURE__ */ p(Vr, { ...o, ...r, ref: t });
  }
);
Yr.displayName = Ns;
var Ps = Ur, Ms = Kr, As = Yr;
const _s = D(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ p(
  Ps,
  {
    "data-slot": "radio-group",
    orientation: t,
    ref: r,
    className: T(
      "grid gap-2 text-gi-primary",
      t === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1",
      e
    ),
    ...n
  }
));
_s.displayName = "RadioGroup";
const Ts = D(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  Ms,
  {
    ref: n,
    "data-slot": "radio-group-item",
    className: T(
      "border-input focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      As,
      {
        "data-slot": "radio-group-indicator",
        className: "relative flex items-center justify-center",
        children: /* @__PURE__ */ p(
          Fi,
          {
            className: T(
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
Ts.displayName = "RadioGroupItem";
const Is = D(
  ({
    title: e,
    actions: t,
    actionsPosition: n = "right",
    children: r,
    className: o,
    dataTestId: a,
    ...c
  }, i) => {
    const l = `section_title_${yt()}`, d = t && n === "right", f = t && n === "bottom";
    return /* @__PURE__ */ _(
      "section",
      {
        ref: i,
        "data-test-id": a,
        "aria-labelledby": l,
        className: T(
          "w-full flex flex-col border border-gi-ash rounded-[48px]",
          o
        ),
        ...c,
        children: [
          /* @__PURE__ */ _("header", { className: "flex flex-col w-full p-6 gap-4", children: [
            /* @__PURE__ */ _("div", { className: "flex flex-row items-center justify-between w-full", children: [
              /* @__PURE__ */ p(
                "h2",
                {
                  id: l,
                  className: "text-gi-light-primary font-extrabold text-[24px]/[120%]",
                  children: e
                }
              ),
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
            f && /* @__PURE__ */ p(
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
Is.displayName = "Section";
function ks(e, t = globalThis?.document) {
  const n = se(e);
  s.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Os = "DismissableLayer", Xt = "dismissableLayer.update", Ls = "dismissableLayer.pointerDownOutside", Ds = "dismissableLayer.focusOutside", $n, Xr = s.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), un = s.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: a,
      onInteractOutside: c,
      onDismiss: i,
      ...u
    } = e, l = s.useContext(Xr), [d, f] = s.useState(null), h = d?.ownerDocument ?? globalThis?.document, [, g] = s.useState({}), v = z(t, (E) => f(E)), m = Array.from(l.layers), [y] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = m.indexOf(y), b = d ? m.indexOf(d) : -1, C = l.layersWithOutsidePointerEventsDisabled.size > 0, x = b >= w, R = Bs((E) => {
      const P = E.target, k = [...l.branches].some((I) => I.contains(P));
      !x || k || (o?.(E), c?.(E), E.defaultPrevented || i?.());
    }, h), S = Vs((E) => {
      const P = E.target;
      [...l.branches].some((I) => I.contains(P)) || (a?.(E), c?.(E), E.defaultPrevented || i?.());
    }, h);
    return ks((E) => {
      b === l.layers.size - 1 && (r?.(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
    }, h), s.useEffect(() => {
      if (d)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && ($n = h.body.style.pointerEvents, h.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(d)), l.layers.add(d), Bn(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (h.body.style.pointerEvents = $n);
        };
    }, [d, h, n, l]), s.useEffect(() => () => {
      d && (l.layers.delete(d), l.layersWithOutsidePointerEventsDisabled.delete(d), Bn());
    }, [d, l]), s.useEffect(() => {
      const E = () => g({});
      return document.addEventListener(Xt, E), () => document.removeEventListener(Xt, E);
    }, []), /* @__PURE__ */ p(
      V.div,
      {
        ...u,
        ref: v,
        style: {
          pointerEvents: C ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: M(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: M(e.onBlurCapture, S.onBlurCapture),
        onPointerDownCapture: M(
          e.onPointerDownCapture,
          R.onPointerDownCapture
        )
      }
    );
  }
);
un.displayName = Os;
var Fs = "DismissableLayerBranch", $s = s.forwardRef((e, t) => {
  const n = s.useContext(Xr), r = s.useRef(null), o = z(t, r);
  return s.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ p(V.div, { ...e, ref: o });
});
$s.displayName = Fs;
function Bs(e, t = globalThis?.document) {
  const n = se(e), r = s.useRef(!1), o = s.useRef(() => {
  });
  return s.useEffect(() => {
    const a = (i) => {
      if (i.target && !r.current) {
        let u = function() {
          Zr(
            Ls,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: i };
        i.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = u, t.addEventListener("click", o.current, { once: !0 })) : u();
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
function Vs(e, t = globalThis?.document) {
  const n = se(e), r = s.useRef(!1);
  return s.useEffect(() => {
    const o = (a) => {
      a.target && !r.current && Zr(Ds, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Bn() {
  const e = new CustomEvent(Xt);
  document.dispatchEvent(e);
}
function Zr(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? gr(o, a) : o.dispatchEvent(a);
}
var Dt = 0;
function Ws() {
  s.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Vn()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vn()), Dt++, () => {
      Dt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Dt--;
    };
  }, []);
}
function Vn() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Ft = "focusScope.autoFocusOnMount", $t = "focusScope.autoFocusOnUnmount", Wn = { bubbles: !1, cancelable: !0 }, Hs = "FocusScope", qr = s.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: a,
    ...c
  } = e, [i, u] = s.useState(null), l = se(o), d = se(a), f = s.useRef(null), h = z(t, (m) => u(m)), g = s.useRef({
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
        i.contains(x) ? f.current = x : pe(f.current, { select: !0 });
      }, y = function(C) {
        if (g.paused || !i) return;
        const x = C.relatedTarget;
        x !== null && (i.contains(x) || pe(f.current, { select: !0 }));
      }, w = function(C) {
        if (document.activeElement === document.body)
          for (const R of C)
            R.removedNodes.length > 0 && pe(i);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", y);
      const b = new MutationObserver(w);
      return i && b.observe(i, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", y), b.disconnect();
      };
    }
  }, [r, i, g.paused]), s.useEffect(() => {
    if (i) {
      zn.add(g);
      const m = document.activeElement;
      if (!i.contains(m)) {
        const w = new CustomEvent(Ft, Wn);
        i.addEventListener(Ft, l), i.dispatchEvent(w), w.defaultPrevented || (zs(Ys(Qr(i)), { select: !0 }), document.activeElement === m && pe(i));
      }
      return () => {
        i.removeEventListener(Ft, l), setTimeout(() => {
          const w = new CustomEvent($t, Wn);
          i.addEventListener($t, d), i.dispatchEvent(w), w.defaultPrevented || pe(m ?? document.body, { select: !0 }), i.removeEventListener($t, d), zn.remove(g);
        }, 0);
      };
    }
  }, [i, l, d, g]);
  const v = s.useCallback(
    (m) => {
      if (!n && !r || g.paused) return;
      const y = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, w = document.activeElement;
      if (y && w) {
        const b = m.currentTarget, [C, x] = Gs(b);
        C && x ? !m.shiftKey && w === x ? (m.preventDefault(), n && pe(C, { select: !0 })) : m.shiftKey && w === C && (m.preventDefault(), n && pe(x, { select: !0 })) : w === b && m.preventDefault();
      }
    },
    [n, r, g.paused]
  );
  return /* @__PURE__ */ p(V.div, { tabIndex: -1, ...c, ref: h, onKeyDown: v });
});
qr.displayName = Hs;
function zs(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (pe(r, { select: t }), document.activeElement !== n) return;
}
function Gs(e) {
  const t = Qr(e), n = Hn(t, e), r = Hn(t.reverse(), e);
  return [n, r];
}
function Qr(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Hn(e, t) {
  for (const n of e)
    if (!Us(n, { upTo: t })) return n;
}
function Us(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function js(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function pe(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && js(e) && t && e.select();
  }
}
var zn = Ks();
function Ks() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && n?.pause(), e = Gn(e, t), e.unshift(t);
    },
    remove(t) {
      e = Gn(e, t), e[0]?.resume();
    }
  };
}
function Gn(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ys(e) {
  return e.filter((t) => t.tagName !== "A");
}
const Xs = ["top", "right", "bottom", "left"], ge = Math.min, X = Math.max, ft = Math.round, nt = Math.floor, oe = (e) => ({
  x: e,
  y: e
}), Zs = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zt(e, t, n) {
  return X(e, ge(t, n));
}
function ce(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function le(e) {
  return e.split("-")[0];
}
function $e(e) {
  return e.split("-")[1];
}
function dn(e) {
  return e === "x" ? "y" : "x";
}
function fn(e) {
  return e === "y" ? "height" : "width";
}
function re(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function pn(e) {
  return dn(re(e));
}
function qs(e, t, n) {
  n === void 0 && (n = !1);
  const r = $e(e), o = pn(e), a = fn(o);
  let c = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (c = pt(c)), [c, pt(c)];
}
function Qs(e) {
  const t = pt(e);
  return [qt(e), t, qt(t)];
}
function qt(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Un = ["left", "right"], jn = ["right", "left"], Js = ["top", "bottom"], ec = ["bottom", "top"];
function tc(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? jn : Un : t ? Un : jn;
    case "left":
    case "right":
      return t ? Js : ec;
    default:
      return [];
  }
}
function nc(e, t, n, r) {
  const o = $e(e);
  let a = tc(le(e), n === "start", r);
  return o && (a = a.map((c) => c + "-" + o), t && (a = a.concat(a.map(qt)))), a;
}
function pt(e) {
  const t = le(e);
  return Zs[t] + e.slice(t.length);
}
function rc(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Jr(e) {
  return typeof e != "number" ? rc(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function mt(e) {
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
function Kn(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const a = re(t), c = pn(t), i = fn(c), u = le(t), l = a === "y", d = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, h = r[i] / 2 - o[i] / 2;
  let g;
  switch (u) {
    case "top":
      g = {
        x: d,
        y: r.y - o.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: r.y + r.height
      };
      break;
    case "right":
      g = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      g = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      g = {
        x: r.x,
        y: r.y
      };
  }
  switch ($e(t)) {
    case "start":
      g[c] -= h * (n && l ? -1 : 1);
      break;
    case "end":
      g[c] += h * (n && l ? -1 : 1);
      break;
  }
  return g;
}
async function oc(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: a,
    rects: c,
    elements: i,
    strategy: u
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: f = "floating",
    altBoundary: h = !1,
    padding: g = 0
  } = ce(t, e), v = Jr(g), y = i[h ? f === "floating" ? "reference" : "floating" : f], w = mt(await a.getClippingRect({
    element: (n = await (a.isElement == null ? void 0 : a.isElement(y))) == null || n ? y : y.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating)),
    boundary: l,
    rootBoundary: d,
    strategy: u
  })), b = f === "floating" ? {
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
  }, R = mt(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: i,
    rect: b,
    offsetParent: C,
    strategy: u
  }) : b);
  return {
    top: (w.top - R.top + v.top) / x.y,
    bottom: (R.bottom - w.bottom + v.bottom) / x.y,
    left: (w.left - R.left + v.left) / x.x,
    right: (R.right - w.right + v.right) / x.x
  };
}
const ac = 50, ic = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: a = [],
    platform: c
  } = n, i = c.detectOverflow ? c : {
    ...c,
    detectOverflow: oc
  }, u = await (c.isRTL == null ? void 0 : c.isRTL(t));
  let l = await c.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: d,
    y: f
  } = Kn(l, r, u), h = r, g = 0;
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
      x: d,
      y: f,
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
    d = C ?? d, f = x ?? f, v[w] = {
      ...v[w],
      ...R
    }, S && g < ac && (g++, typeof S == "object" && (S.placement && (h = S.placement), S.rects && (l = S.rects === !0 ? await c.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : S.rects), {
      x: d,
      y: f
    } = Kn(l, h, u)), m = -1);
  }
  return {
    x: d,
    y: f,
    placement: h,
    strategy: o,
    middlewareData: v
  };
}, sc = (e) => ({
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
      middlewareData: u
    } = t, {
      element: l,
      padding: d = 0
    } = ce(e, t) || {};
    if (l == null)
      return {};
    const f = Jr(d), h = {
      x: n,
      y: r
    }, g = pn(o), v = fn(g), m = await c.getDimensions(l), y = g === "y", w = y ? "top" : "left", b = y ? "bottom" : "right", C = y ? "clientHeight" : "clientWidth", x = a.reference[v] + a.reference[g] - h[g] - a.floating[v], R = h[g] - a.reference[g], S = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(l));
    let E = S ? S[C] : 0;
    (!E || !await (c.isElement == null ? void 0 : c.isElement(S))) && (E = i.floating[C] || a.floating[v]);
    const P = x / 2 - R / 2, k = E / 2 - m[v] / 2 - 1, I = ge(f[w], k), L = ge(f[b], k), B = I, F = E - m[v] - L, $ = E / 2 - m[v] / 2 + P, G = Zt(B, $, F), O = !u.arrow && $e(o) != null && $ !== G && a.reference[v] / 2 - ($ < B ? I : L) - m[v] / 2 < 0, W = O ? $ < B ? $ - B : $ - F : 0;
    return {
      [g]: h[g] + W,
      data: {
        [g]: G,
        centerOffset: $ - G - W,
        ...O && {
          alignmentOffset: W
        }
      },
      reset: O
    };
  }
}), cc = function(e) {
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
        platform: u,
        elements: l
      } = t, {
        mainAxis: d = !0,
        crossAxis: f = !0,
        fallbackPlacements: h,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: v = "none",
        flipAlignment: m = !0,
        ...y
      } = ce(e, t);
      if ((n = a.arrow) != null && n.alignmentOffset)
        return {};
      const w = le(o), b = re(i), C = le(i) === i, x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)), R = h || (C || !m ? [pt(i)] : Qs(i)), S = v !== "none";
      !h && S && R.push(...nc(i, m, v, x));
      const E = [i, ...R], P = await u.detectOverflow(t, y), k = [];
      let I = ((r = a.flip) == null ? void 0 : r.overflows) || [];
      if (d && k.push(P[w]), f) {
        const $ = qs(o, c, x);
        k.push(P[$[0]], P[$[1]]);
      }
      if (I = [...I, {
        placement: o,
        overflows: k
      }], !k.every(($) => $ <= 0)) {
        var L, B;
        const $ = (((L = a.flip) == null ? void 0 : L.index) || 0) + 1, G = E[$];
        if (G && (!(f === "alignment" ? b !== re(G) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        I.every((A) => re(A.placement) === b ? A.overflows[0] > 0 : !0)))
          return {
            data: {
              index: $,
              overflows: I
            },
            reset: {
              placement: G
            }
          };
        let O = (B = I.filter((W) => W.overflows[0] <= 0).sort((W, A) => W.overflows[1] - A.overflows[1])[0]) == null ? void 0 : B.placement;
        if (!O)
          switch (g) {
            case "bestFit": {
              var F;
              const W = (F = I.filter((A) => {
                if (S) {
                  const N = re(A.placement);
                  return N === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  N === "y";
                }
                return !0;
              }).map((A) => [A.placement, A.overflows.filter((N) => N > 0).reduce((N, H) => N + H, 0)]).sort((A, N) => A[1] - N[1])[0]) == null ? void 0 : F[0];
              W && (O = W);
              break;
            }
            case "initialPlacement":
              O = i;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
function Yn(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xn(e) {
  return Xs.some((t) => e[t] >= 0);
}
const lc = function(e) {
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
      } = ce(e, t);
      switch (o) {
        case "referenceHidden": {
          const c = await r.detectOverflow(t, {
            ...a,
            elementContext: "reference"
          }), i = Yn(c, n.reference);
          return {
            data: {
              referenceHiddenOffsets: i,
              referenceHidden: Xn(i)
            }
          };
        }
        case "escaped": {
          const c = await r.detectOverflow(t, {
            ...a,
            altBoundary: !0
          }), i = Yn(c, n.floating);
          return {
            data: {
              escapedOffsets: i,
              escaped: Xn(i)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, eo = /* @__PURE__ */ new Set(["left", "top"]);
async function uc(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), c = le(n), i = $e(n), u = re(n) === "y", l = eo.has(c) ? -1 : 1, d = a && u ? -1 : 1, f = ce(t, e);
  let {
    mainAxis: h,
    crossAxis: g,
    alignmentAxis: v
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return i && typeof v == "number" && (g = i === "end" ? v * -1 : v), u ? {
    x: g * d,
    y: h * l
  } : {
    x: h * l,
    y: g * d
  };
}
const dc = function(e) {
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
      } = t, u = await uc(t, e);
      return c === ((n = i.offset) == null ? void 0 : n.placement) && (r = i.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: a + u.y,
        data: {
          ...u,
          placement: c
        }
      };
    }
  };
}, fc = function(e) {
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
        limiter: u = {
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
      } = ce(e, t), d = {
        x: n,
        y: r
      }, f = await a.detectOverflow(t, l), h = re(le(o)), g = dn(h);
      let v = d[g], m = d[h];
      if (c) {
        const w = g === "y" ? "top" : "left", b = g === "y" ? "bottom" : "right", C = v + f[w], x = v - f[b];
        v = Zt(C, v, x);
      }
      if (i) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", C = m + f[w], x = m - f[b];
        m = Zt(C, m, x);
      }
      const y = u.fn({
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
}, pc = function(e) {
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
        mainAxis: u = !0,
        crossAxis: l = !0
      } = ce(e, t), d = {
        x: n,
        y: r
      }, f = re(o), h = dn(f);
      let g = d[h], v = d[f];
      const m = ce(i, t), y = typeof m == "number" ? {
        mainAxis: m,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...m
      };
      if (u) {
        const C = h === "y" ? "height" : "width", x = a.reference[h] - a.floating[C] + y.mainAxis, R = a.reference[h] + a.reference[C] - y.mainAxis;
        g < x ? g = x : g > R && (g = R);
      }
      if (l) {
        var w, b;
        const C = h === "y" ? "width" : "height", x = eo.has(le(o)), R = a.reference[f] - a.floating[C] + (x && ((w = c.offset) == null ? void 0 : w[f]) || 0) + (x ? 0 : y.crossAxis), S = a.reference[f] + a.reference[C] + (x ? 0 : ((b = c.offset) == null ? void 0 : b[f]) || 0) - (x ? y.crossAxis : 0);
        v < R ? v = R : v > S && (v = S);
      }
      return {
        [h]: g,
        [f]: v
      };
    }
  };
}, mc = function(e) {
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
        apply: u = () => {
        },
        ...l
      } = ce(e, t), d = await c.detectOverflow(t, l), f = le(o), h = $e(o), g = re(o) === "y", {
        width: v,
        height: m
      } = a.floating;
      let y, w;
      f === "top" || f === "bottom" ? (y = f, w = h === (await (c.isRTL == null ? void 0 : c.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (w = f, y = h === "end" ? "top" : "bottom");
      const b = m - d.top - d.bottom, C = v - d.left - d.right, x = ge(m - d[y], b), R = ge(v - d[w], C), S = !t.middlewareData.shift;
      let E = x, P = R;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (P = C), (r = t.middlewareData.shift) != null && r.enabled.y && (E = b), S && !h) {
        const I = X(d.left, 0), L = X(d.right, 0), B = X(d.top, 0), F = X(d.bottom, 0);
        g ? P = v - 2 * (I !== 0 || L !== 0 ? I + L : X(d.left, d.right)) : E = m - 2 * (B !== 0 || F !== 0 ? B + F : X(d.top, d.bottom));
      }
      await u({
        ...t,
        availableWidth: P,
        availableHeight: E
      });
      const k = await c.getDimensions(i.floating);
      return v !== k.width || m !== k.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Et() {
  return typeof window < "u";
}
function Be(e) {
  return to(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function ie(e) {
  var t;
  return (t = (to(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function to(e) {
  return Et() ? e instanceof Node || e instanceof Z(e).Node : !1;
}
function J(e) {
  return Et() ? e instanceof Element || e instanceof Z(e).Element : !1;
}
function de(e) {
  return Et() ? e instanceof HTMLElement || e instanceof Z(e).HTMLElement : !1;
}
function Zn(e) {
  return !Et() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function Ke(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ee(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && o !== "inline" && o !== "contents";
}
function hc(e) {
  return /^(table|td|th)$/.test(Be(e));
}
function Rt(e) {
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
const gc = /transform|translate|scale|rotate|perspective|filter/, vc = /paint|layout|strict|content/, be = (e) => !!e && e !== "none";
let Bt;
function mn(e) {
  const t = J(e) ? ee(e) : e;
  return be(t.transform) || be(t.translate) || be(t.scale) || be(t.rotate) || be(t.perspective) || !hn() && (be(t.backdropFilter) || be(t.filter)) || gc.test(t.willChange || "") || vc.test(t.contain || "");
}
function yc(e) {
  let t = ve(e);
  for (; de(t) && !Le(t); ) {
    if (mn(t))
      return t;
    if (Rt(t))
      return null;
    t = ve(t);
  }
  return null;
}
function hn() {
  return Bt == null && (Bt = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), Bt;
}
function Le(e) {
  return /^(html|body|#document)$/.test(Be(e));
}
function ee(e) {
  return Z(e).getComputedStyle(e);
}
function St(e) {
  return J(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ve(e) {
  if (Be(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Zn(e) && e.host || // Fallback.
    ie(e)
  );
  return Zn(t) ? t.host : t;
}
function no(e) {
  const t = ve(e);
  return Le(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : de(t) && Ke(t) ? t : no(t);
}
function He(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = no(e), a = o === ((r = e.ownerDocument) == null ? void 0 : r.body), c = Z(o);
  if (a) {
    const i = Qt(c);
    return t.concat(c, c.visualViewport || [], Ke(o) ? o : [], i && n ? He(i) : []);
  } else
    return t.concat(o, He(o, [], n));
}
function Qt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ro(e) {
  const t = ee(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = de(e), a = o ? e.offsetWidth : n, c = o ? e.offsetHeight : r, i = ft(n) !== a || ft(r) !== c;
  return i && (n = a, r = c), {
    width: n,
    height: r,
    $: i
  };
}
function gn(e) {
  return J(e) ? e : e.contextElement;
}
function Ie(e) {
  const t = gn(e);
  if (!de(t))
    return oe(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: a
  } = ro(t);
  let c = (a ? ft(n.width) : n.width) / r, i = (a ? ft(n.height) : n.height) / o;
  return (!c || !Number.isFinite(c)) && (c = 1), (!i || !Number.isFinite(i)) && (i = 1), {
    x: c,
    y: i
  };
}
const wc = /* @__PURE__ */ oe(0);
function oo(e) {
  const t = Z(e);
  return !hn() || !t.visualViewport ? wc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bc(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Z(e) ? !1 : t;
}
function xe(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = gn(e);
  let c = oe(1);
  t && (r ? J(r) && (c = Ie(r)) : c = Ie(e));
  const i = bc(a, n, r) ? oo(a) : oe(0);
  let u = (o.left + i.x) / c.x, l = (o.top + i.y) / c.y, d = o.width / c.x, f = o.height / c.y;
  if (a) {
    const h = Z(a), g = r && J(r) ? Z(r) : r;
    let v = h, m = Qt(v);
    for (; m && r && g !== v; ) {
      const y = Ie(m), w = m.getBoundingClientRect(), b = ee(m), C = w.left + (m.clientLeft + parseFloat(b.paddingLeft)) * y.x, x = w.top + (m.clientTop + parseFloat(b.paddingTop)) * y.y;
      u *= y.x, l *= y.y, d *= y.x, f *= y.y, u += C, l += x, v = Z(m), m = Qt(v);
    }
  }
  return mt({
    width: d,
    height: f,
    x: u,
    y: l
  });
}
function Nt(e, t) {
  const n = St(e).scrollLeft;
  return t ? t.left + n : xe(ie(e)).left + n;
}
function ao(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Nt(e, n), o = n.top + t.scrollTop;
  return {
    x: r,
    y: o
  };
}
function Cc(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const a = o === "fixed", c = ie(r), i = t ? Rt(t.floating) : !1;
  if (r === c || i && a)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = oe(1);
  const d = oe(0), f = de(r);
  if ((f || !f && !a) && ((Be(r) !== "body" || Ke(c)) && (u = St(r)), f)) {
    const g = xe(r);
    l = Ie(r), d.x = g.x + r.clientLeft, d.y = g.y + r.clientTop;
  }
  const h = c && !f && !a ? ao(c, u) : oe(0);
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - u.scrollLeft * l.x + d.x + h.x,
    y: n.y * l.y - u.scrollTop * l.y + d.y + h.y
  };
}
function xc(e) {
  return Array.from(e.getClientRects());
}
function Ec(e) {
  const t = ie(e), n = St(e), r = e.ownerDocument.body, o = X(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = X(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let c = -n.scrollLeft + Nt(e);
  const i = -n.scrollTop;
  return ee(r).direction === "rtl" && (c += X(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: a,
    x: c,
    y: i
  };
}
const qn = 25;
function Rc(e, t) {
  const n = Z(e), r = ie(e), o = n.visualViewport;
  let a = r.clientWidth, c = r.clientHeight, i = 0, u = 0;
  if (o) {
    a = o.width, c = o.height;
    const d = hn();
    (!d || d && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  const l = Nt(r);
  if (l <= 0) {
    const d = r.ownerDocument, f = d.body, h = getComputedStyle(f), g = d.compatMode === "CSS1Compat" && parseFloat(h.marginLeft) + parseFloat(h.marginRight) || 0, v = Math.abs(r.clientWidth - f.clientWidth - g);
    v <= qn && (a -= v);
  } else l <= qn && (a += l);
  return {
    width: a,
    height: c,
    x: i,
    y: u
  };
}
function Sc(e, t) {
  const n = xe(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, a = de(e) ? Ie(e) : oe(1), c = e.clientWidth * a.x, i = e.clientHeight * a.y, u = o * a.x, l = r * a.y;
  return {
    width: c,
    height: i,
    x: u,
    y: l
  };
}
function Qn(e, t, n) {
  let r;
  if (t === "viewport")
    r = Rc(e, n);
  else if (t === "document")
    r = Ec(ie(e));
  else if (J(t))
    r = Sc(t, n);
  else {
    const o = oo(e);
    r = {
      x: t.x - o.x,
      y: t.y - o.y,
      width: t.width,
      height: t.height
    };
  }
  return mt(r);
}
function io(e, t) {
  const n = ve(e);
  return n === t || !J(n) || Le(n) ? !1 : ee(n).position === "fixed" || io(n, t);
}
function Nc(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = He(e, [], !1).filter((i) => J(i) && Be(i) !== "body"), o = null;
  const a = ee(e).position === "fixed";
  let c = a ? ve(e) : e;
  for (; J(c) && !Le(c); ) {
    const i = ee(c), u = mn(c);
    !u && i.position === "fixed" && (o = null), (a ? !u && !o : !u && i.position === "static" && !!o && (o.position === "absolute" || o.position === "fixed") || Ke(c) && !u && io(e, c)) ? r = r.filter((d) => d !== c) : o = i, c = ve(c);
  }
  return t.set(e, r), r;
}
function Pc(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const c = [...n === "clippingAncestors" ? Rt(t) ? [] : Nc(t, this._c) : [].concat(n), r], i = Qn(t, c[0], o);
  let u = i.top, l = i.right, d = i.bottom, f = i.left;
  for (let h = 1; h < c.length; h++) {
    const g = Qn(t, c[h], o);
    u = X(g.top, u), l = ge(g.right, l), d = ge(g.bottom, d), f = X(g.left, f);
  }
  return {
    width: l - f,
    height: d - u,
    x: f,
    y: u
  };
}
function Mc(e) {
  const {
    width: t,
    height: n
  } = ro(e);
  return {
    width: t,
    height: n
  };
}
function Ac(e, t, n) {
  const r = de(t), o = ie(t), a = n === "fixed", c = xe(e, !0, a, t);
  let i = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = oe(0);
  function l() {
    u.x = Nt(o);
  }
  if (r || !r && !a)
    if ((Be(t) !== "body" || Ke(o)) && (i = St(t)), r) {
      const g = xe(t, !0, a, t);
      u.x = g.x + t.clientLeft, u.y = g.y + t.clientTop;
    } else o && l();
  a && !r && o && l();
  const d = o && !r && !a ? ao(o, i) : oe(0), f = c.left + i.scrollLeft - u.x - d.x, h = c.top + i.scrollTop - u.y - d.y;
  return {
    x: f,
    y: h,
    width: c.width,
    height: c.height
  };
}
function Vt(e) {
  return ee(e).position === "static";
}
function Jn(e, t) {
  if (!de(e) || ee(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return ie(e) === n && (n = n.ownerDocument.body), n;
}
function so(e, t) {
  const n = Z(e);
  if (Rt(e))
    return n;
  if (!de(e)) {
    let o = ve(e);
    for (; o && !Le(o); ) {
      if (J(o) && !Vt(o))
        return o;
      o = ve(o);
    }
    return n;
  }
  let r = Jn(e, t);
  for (; r && hc(r) && Vt(r); )
    r = Jn(r, t);
  return r && Le(r) && Vt(r) && !mn(r) ? n : r || yc(e) || n;
}
const _c = async function(e) {
  const t = this.getOffsetParent || so, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ac(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Tc(e) {
  return ee(e).direction === "rtl";
}
const Ic = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Cc,
  getDocumentElement: ie,
  getClippingRect: Pc,
  getOffsetParent: so,
  getElementRects: _c,
  getClientRects: xc,
  getDimensions: Mc,
  getScale: Ie,
  isElement: J,
  isRTL: Tc
};
function co(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function kc(e, t) {
  let n = null, r;
  const o = ie(e);
  function a() {
    var i;
    clearTimeout(r), (i = n) == null || i.disconnect(), n = null;
  }
  function c(i, u) {
    i === void 0 && (i = !1), u === void 0 && (u = 1), a();
    const l = e.getBoundingClientRect(), {
      left: d,
      top: f,
      width: h,
      height: g
    } = l;
    if (i || t(), !h || !g)
      return;
    const v = nt(f), m = nt(o.clientWidth - (d + h)), y = nt(o.clientHeight - (f + g)), w = nt(d), C = {
      rootMargin: -v + "px " + -m + "px " + -y + "px " + -w + "px",
      threshold: X(0, ge(1, u)) || 1
    };
    let x = !0;
    function R(S) {
      const E = S[0].intersectionRatio;
      if (E !== u) {
        if (!x)
          return c();
        E ? c(!1, E) : r = setTimeout(() => {
          c(!1, 1e-7);
        }, 1e3);
      }
      E === 1 && !co(l, e.getBoundingClientRect()) && c(), x = !1;
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
function Oc(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: a = !0,
    elementResize: c = typeof ResizeObserver == "function",
    layoutShift: i = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, l = gn(e), d = o || a ? [...l ? He(l) : [], ...t ? He(t) : []] : [];
  d.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), a && w.addEventListener("resize", n);
  });
  const f = l && i ? kc(l, n) : null;
  let h = -1, g = null;
  c && (g = new ResizeObserver((w) => {
    let [b] = w;
    b && b.target === l && g && t && (g.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var C;
      (C = g) == null || C.observe(t);
    })), n();
  }), l && !u && g.observe(l), t && g.observe(t));
  let v, m = u ? xe(e) : null;
  u && y();
  function y() {
    const w = xe(e);
    m && !co(m, w) && n(), m = w, v = requestAnimationFrame(y);
  }
  return n(), () => {
    var w;
    d.forEach((b) => {
      o && b.removeEventListener("scroll", n), a && b.removeEventListener("resize", n);
    }), f?.(), (w = g) == null || w.disconnect(), g = null, u && cancelAnimationFrame(v);
  };
}
const Lc = dc, Dc = fc, Fc = cc, $c = mc, Bc = lc, er = sc, Vc = pc, Wc = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: Ic,
    ...n
  }, a = {
    ...o.platform,
    _c: r
  };
  return ic(e, t, {
    ...o,
    platform: a
  });
};
var Hc = typeof document < "u", zc = function() {
}, st = Hc ? Ia : zc;
function ht(e, t) {
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
        if (!ht(e[r], t[r]))
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
      if (!(a === "_owner" && e.$$typeof) && !ht(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function lo(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function tr(e, t) {
  const n = lo(e);
  return Math.round(t * n) / n;
}
function Wt(e) {
  const t = s.useRef(e);
  return st(() => {
    t.current = e;
  }), t;
}
function Gc(e) {
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
    whileElementsMounted: u,
    open: l
  } = e, [d, f] = s.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [h, g] = s.useState(r);
  ht(h, r) || g(r);
  const [v, m] = s.useState(null), [y, w] = s.useState(null), b = s.useCallback((A) => {
    A !== S.current && (S.current = A, m(A));
  }, []), C = s.useCallback((A) => {
    A !== E.current && (E.current = A, w(A));
  }, []), x = a || v, R = c || y, S = s.useRef(null), E = s.useRef(null), P = s.useRef(d), k = u != null, I = Wt(u), L = Wt(o), B = Wt(l), F = s.useCallback(() => {
    if (!S.current || !E.current)
      return;
    const A = {
      placement: t,
      strategy: n,
      middleware: h
    };
    L.current && (A.platform = L.current), Wc(S.current, E.current, A).then((N) => {
      const H = {
        ...N,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: B.current !== !1
      };
      $.current && !ht(P.current, H) && (P.current = H, cr.flushSync(() => {
        f(H);
      }));
    });
  }, [h, t, n, L, B]);
  st(() => {
    l === !1 && P.current.isPositioned && (P.current.isPositioned = !1, f((A) => ({
      ...A,
      isPositioned: !1
    })));
  }, [l]);
  const $ = s.useRef(!1);
  st(() => ($.current = !0, () => {
    $.current = !1;
  }), []), st(() => {
    if (x && (S.current = x), R && (E.current = R), x && R) {
      if (I.current)
        return I.current(x, R, F);
      F();
    }
  }, [x, R, F, I, k]);
  const G = s.useMemo(() => ({
    reference: S,
    floating: E,
    setReference: b,
    setFloating: C
  }), [b, C]), O = s.useMemo(() => ({
    reference: x,
    floating: R
  }), [x, R]), W = s.useMemo(() => {
    const A = {
      position: n,
      left: 0,
      top: 0
    };
    if (!O.floating)
      return A;
    const N = tr(O.floating, d.x), H = tr(O.floating, d.y);
    return i ? {
      ...A,
      transform: "translate(" + N + "px, " + H + "px)",
      ...lo(O.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: N,
      top: H
    };
  }, [n, i, O.floating, d.x, d.y]);
  return s.useMemo(() => ({
    ...d,
    update: F,
    refs: G,
    elements: O,
    floatingStyles: W
  }), [d, F, G, O, W]);
}
const Uc = (e) => {
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
      return r && t(r) ? r.current != null ? er({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? er({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, jc = (e, t) => {
  const n = Lc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Kc = (e, t) => {
  const n = Dc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Yc = (e, t) => ({
  fn: Vc(e).fn,
  options: [e, t]
}), Xc = (e, t) => {
  const n = Fc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Zc = (e, t) => {
  const n = $c(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, qc = (e, t) => {
  const n = Bc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
}, Qc = (e, t) => {
  const n = Uc(e);
  return {
    name: n.name,
    fn: n.fn,
    options: [e, t]
  };
};
var Jc = "Arrow", uo = s.forwardRef((e, t) => {
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
uo.displayName = Jc;
var el = uo, vn = "Popper", [fo, Pt] = ae(vn), [tl, po] = fo(vn), mo = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = s.useState(null);
  return /* @__PURE__ */ p(tl, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
mo.displayName = vn;
var ho = "PopperAnchor", go = s.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, a = po(ho, n), c = s.useRef(null), i = z(t, c), u = s.useRef(null);
    return s.useEffect(() => {
      const l = u.current;
      u.current = r?.current || c.current, l !== u.current && a.onAnchorChange(u.current);
    }), r ? null : /* @__PURE__ */ p(V.div, { ...o, ref: i });
  }
);
go.displayName = ho;
var yn = "PopperContent", [nl, rl] = fo(yn), vo = s.forwardRef(
  (e, t) => {
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: a = "center",
      alignOffset: c = 0,
      arrowPadding: i = 0,
      avoidCollisions: u = !0,
      collisionBoundary: l = [],
      collisionPadding: d = 0,
      sticky: f = "partial",
      hideWhenDetached: h = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: v,
      ...m
    } = e, y = po(yn, n), [w, b] = s.useState(null), C = z(t, (U) => b(U)), [x, R] = s.useState(null), S = wt(x), E = S?.width ?? 0, P = S?.height ?? 0, k = r + (a !== "center" ? "-" + a : ""), I = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, L = Array.isArray(l) ? l : [l], B = L.length > 0, F = {
      padding: I,
      boundary: L.filter(al),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: B
    }, { refs: $, floatingStyles: G, placement: O, isPositioned: W, middlewareData: A } = Gc({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: k,
      whileElementsMounted: (...U) => Oc(...U, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: y.anchor
      },
      middleware: [
        jc({ mainAxis: o + P, alignmentAxis: c }),
        u && Kc({
          mainAxis: !0,
          crossAxis: !1,
          limiter: f === "partial" ? Yc() : void 0,
          ...F
        }),
        u && Xc({ ...F }),
        Zc({
          ...F,
          apply: ({ elements: U, rects: Ve, availableWidth: Na, availableHeight: Pa }) => {
            const { width: Ma, height: Aa } = Ve.reference, Qe = U.floating.style;
            Qe.setProperty("--radix-popper-available-width", `${Na}px`), Qe.setProperty("--radix-popper-available-height", `${Pa}px`), Qe.setProperty("--radix-popper-anchor-width", `${Ma}px`), Qe.setProperty("--radix-popper-anchor-height", `${Aa}px`);
          }
        }),
        x && Qc({ element: x, padding: i }),
        il({ arrowWidth: E, arrowHeight: P }),
        h && qc({ strategy: "referenceHidden", ...F })
      ]
    }), [N, H] = bo(O), K = se(v);
    he(() => {
      W && K?.();
    }, [W, K]);
    const te = A.arrow?.x, Q = A.arrow?.y, fe = A.arrow?.centerOffset !== 0, [qe, ye] = s.useState();
    return he(() => {
      w && ye(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ p(
      "div",
      {
        ref: $.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...G,
          transform: W ? G.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: qe,
          "--radix-popper-transform-origin": [
            A.transformOrigin?.x,
            A.transformOrigin?.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...A.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ p(
          nl,
          {
            scope: n,
            placedSide: N,
            onArrowChange: R,
            arrowX: te,
            arrowY: Q,
            shouldHideArrow: fe,
            children: /* @__PURE__ */ p(
              V.div,
              {
                "data-side": N,
                "data-align": H,
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
vo.displayName = yn;
var yo = "PopperArrow", ol = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, wo = s.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, a = rl(yo, r), c = ol[a.placedSide];
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
          el,
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
wo.displayName = yo;
function al(e) {
  return e !== null;
}
var il = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    const { placement: n, rects: r, middlewareData: o } = t, c = o.arrow?.centerOffset !== 0, i = c ? 0 : e.arrowWidth, u = c ? 0 : e.arrowHeight, [l, d] = bo(n), f = { start: "0%", center: "50%", end: "100%" }[d], h = (o.arrow?.x ?? 0) + i / 2, g = (o.arrow?.y ?? 0) + u / 2;
    let v = "", m = "";
    return l === "bottom" ? (v = c ? f : `${h}px`, m = `${-u}px`) : l === "top" ? (v = c ? f : `${h}px`, m = `${r.floating.height + u}px`) : l === "right" ? (v = `${-u}px`, m = c ? f : `${g}px`) : l === "left" && (v = `${r.floating.width + u}px`, m = c ? f : `${g}px`), { data: { x: v, y: m } };
  }
});
function bo(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var Co = mo, xo = go, Eo = vo, Ro = wo, sl = "Portal", wn = s.forwardRef((e, t) => {
  const { container: n, ...r } = e, [o, a] = s.useState(!1);
  he(() => a(!0), []);
  const c = n || o && globalThis?.document?.body;
  return c ? Oa.createPortal(/* @__PURE__ */ p(V.div, { ...r, ref: t }), c) : null;
});
wn.displayName = sl;
// @__NO_SIDE_EFFECTS__
function cl(e) {
  const t = /* @__PURE__ */ ll(e), n = s.forwardRef((r, o) => {
    const { children: a, ...c } = r, i = s.Children.toArray(a), u = i.find(dl);
    if (u) {
      const l = u.props.children, d = i.map((f) => f === u ? s.Children.count(l) > 1 ? s.Children.only(null) : s.isValidElement(l) ? l.props.children : null : f);
      return /* @__PURE__ */ p(t, { ...c, ref: o, children: s.isValidElement(l) ? s.cloneElement(l, void 0, d) : null });
    }
    return /* @__PURE__ */ p(t, { ...c, ref: o, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function ll(e) {
  const t = s.forwardRef((n, r) => {
    const { children: o, ...a } = n;
    if (s.isValidElement(o)) {
      const c = pl(o), i = fl(a, o.props);
      return o.type !== s.Fragment && (i.ref = r ? Ee(r, c) : c), s.cloneElement(o, i);
    }
    return s.Children.count(o) > 1 ? s.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var ul = /* @__PURE__ */ Symbol("radix.slottable");
function dl(e) {
  return s.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === ul;
}
function fl(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? o && a ? n[r] = (...i) => {
      const u = a(...i);
      return o(...i), u;
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...a } : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function pl(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ml = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ne = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), ot = {}, Ht = 0, So = function(e) {
  return e && (e.host || So(e.parentNode));
}, hl = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = So(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, gl = function(e, t, n, r) {
  var o = hl(t, Array.isArray(e) ? e : [e]);
  ot[n] || (ot[n] = /* @__PURE__ */ new WeakMap());
  var a = ot[n], c = [], i = /* @__PURE__ */ new Set(), u = new Set(o), l = function(f) {
    !f || i.has(f) || (i.add(f), l(f.parentNode));
  };
  o.forEach(l);
  var d = function(f) {
    !f || u.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (i.has(h))
        d(h);
      else
        try {
          var g = h.getAttribute(r), v = g !== null && g !== "false", m = (Ne.get(h) || 0) + 1, y = (a.get(h) || 0) + 1;
          Ne.set(h, m), a.set(h, y), c.push(h), m === 1 && v && rt.set(h, !0), y === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", h, w);
        }
    });
  };
  return d(t), i.clear(), Ht++, function() {
    c.forEach(function(f) {
      var h = Ne.get(f) - 1, g = a.get(f) - 1;
      Ne.set(f, h), a.set(f, g), h || (rt.has(f) || f.removeAttribute(r), rt.delete(f)), g || f.removeAttribute(n);
    }), Ht--, Ht || (Ne = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), rt = /* @__PURE__ */ new WeakMap(), ot = {});
  };
}, vl = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = ml(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), gl(r, o, n, "aria-hidden")) : function() {
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
function No(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function yl(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, a; r < o; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var ct = "right-scroll-bar-position", lt = "width-before-scroll-bar", wl = "with-scroll-bars-hidden", bl = "--removed-body-scroll-bar-size";
function zt(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Cl(e, t) {
  var n = Ce(function() {
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
var xl = typeof window < "u" ? s.useLayoutEffect : s.useEffect, nr = /* @__PURE__ */ new WeakMap();
function El(e, t) {
  var n = Cl(null, function(r) {
    return e.forEach(function(o) {
      return zt(o, r);
    });
  });
  return xl(function() {
    var r = nr.get(n);
    if (r) {
      var o = new Set(r), a = new Set(e), c = n.current;
      o.forEach(function(i) {
        a.has(i) || zt(i, null);
      }), a.forEach(function(i) {
        o.has(i) || zt(i, c);
      });
    }
    nr.set(n, e);
  }, [e]), n;
}
function Rl(e) {
  return e;
}
function Sl(e, t) {
  t === void 0 && (t = Rl);
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
      var u = function() {
        var d = c;
        c = [], d.forEach(a);
      }, l = function() {
        return Promise.resolve().then(u);
      };
      l(), n = {
        push: function(d) {
          c.push(d), l();
        },
        filter: function(d) {
          return c = c.filter(d), n;
        }
      };
    }
  };
  return o;
}
function Nl(e) {
  e === void 0 && (e = {});
  var t = Sl(null);
  return t.options = ne({ async: !0, ssr: !1 }, e), t;
}
var Po = function(e) {
  var t = e.sideCar, n = No(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return s.createElement(r, ne({}, n));
};
Po.isSideCarExport = !0;
function Pl(e, t) {
  return e.useMedium(t), Po;
}
var Mo = Nl(), Gt = function() {
}, Mt = s.forwardRef(function(e, t) {
  var n = s.useRef(null), r = s.useState({
    onScrollCapture: Gt,
    onWheelCapture: Gt,
    onTouchMoveCapture: Gt
  }), o = r[0], a = r[1], c = e.forwardProps, i = e.children, u = e.className, l = e.removeScrollBar, d = e.enabled, f = e.shards, h = e.sideCar, g = e.noRelative, v = e.noIsolation, m = e.inert, y = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, C = e.gapMode, x = No(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), R = h, S = El([n, t]), E = ne(ne({}, x), o);
  return s.createElement(
    s.Fragment,
    null,
    d && s.createElement(R, { sideCar: Mo, removeScrollBar: l, shards: f, noRelative: g, noIsolation: v, inert: m, setCallbacks: a, allowPinchZoom: !!y, lockRef: n, gapMode: C }),
    c ? s.cloneElement(s.Children.only(i), ne(ne({}, E), { ref: S })) : s.createElement(b, ne({}, E, { className: u, ref: S }), i)
  );
});
Mt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Mt.classNames = {
  fullWidth: lt,
  zeroRight: ct
};
var Ml = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Al() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Ml();
  return t && e.setAttribute("nonce", t), e;
}
function _l(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Tl(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Il = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = Al()) && (_l(t, n), Tl(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, kl = function() {
  var e = Il();
  return function(t, n) {
    s.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ao = function() {
  var e = kl(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, Ol = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ut = function(e) {
  return parseInt(e || "", 10) || 0;
}, Ll = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ut(n), Ut(r), Ut(o)];
}, Dl = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Ol;
  var t = Ll(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Fl = Ao(), ke = "data-scroll-locked", $l = function(e, t, n, r) {
  var o = e.left, a = e.top, c = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(wl, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body[`).concat(ke, `] {
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
  
  .`).concat(ct, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(lt, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(ct, " .").concat(ct, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(lt, " .").concat(lt, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(ke, `] {
    `).concat(bl, ": ").concat(i, `px;
  }
`);
}, rr = function() {
  var e = parseInt(document.body.getAttribute(ke) || "0", 10);
  return isFinite(e) ? e : 0;
}, Bl = function() {
  s.useEffect(function() {
    return document.body.setAttribute(ke, (rr() + 1).toString()), function() {
      var e = rr() - 1;
      e <= 0 ? document.body.removeAttribute(ke) : document.body.setAttribute(ke, e.toString());
    };
  }, []);
}, Vl = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  Bl();
  var a = s.useMemo(function() {
    return Dl(o);
  }, [o]);
  return s.createElement(Fl, { styles: $l(a, !t, o, n ? "" : "!important") });
}, Jt = !1;
if (typeof window < "u")
  try {
    var at = Object.defineProperty({}, "passive", {
      get: function() {
        return Jt = !0, !0;
      }
    });
    window.addEventListener("test", at, at), window.removeEventListener("test", at, at);
  } catch {
    Jt = !1;
  }
var Pe = Jt ? { passive: !1 } : !1, Wl = function(e) {
  return e.tagName === "TEXTAREA";
}, _o = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !Wl(e) && n[t] === "visible")
  );
}, Hl = function(e) {
  return _o(e, "overflowY");
}, zl = function(e) {
  return _o(e, "overflowX");
}, or = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = To(e, r);
    if (o) {
      var a = Io(e, r), c = a[1], i = a[2];
      if (c > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Gl = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Ul = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, To = function(e, t) {
  return e === "v" ? Hl(t) : zl(t);
}, Io = function(e, t) {
  return e === "v" ? Gl(t) : Ul(t);
}, jl = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Kl = function(e, t, n, r, o) {
  var a = jl(e, window.getComputedStyle(t).direction), c = a * r, i = n.target, u = t.contains(i), l = !1, d = c > 0, f = 0, h = 0;
  do {
    if (!i)
      break;
    var g = Io(e, i), v = g[0], m = g[1], y = g[2], w = m - y - a * v;
    (v || w) && To(e, i) && (f += w, h += v);
    var b = i.parentNode;
    i = b && b.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? b.host : b;
  } while (
    // portaled content
    !u && i !== document.body || // self content
    u && (t.contains(i) || t === i)
  );
  return (d && Math.abs(f) < 1 || !d && Math.abs(h) < 1) && (l = !0), l;
}, it = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ar = function(e) {
  return [e.deltaX, e.deltaY];
}, ir = function(e) {
  return e && "current" in e ? e.current : e;
}, Yl = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Xl = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Zl = 0, Me = [];
function ql(e) {
  var t = s.useRef([]), n = s.useRef([0, 0]), r = s.useRef(), o = s.useState(Zl++)[0], a = s.useState(Ao)[0], c = s.useRef(e);
  s.useEffect(function() {
    c.current = e;
  }, [e]), s.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = yl([e.lockRef.current], (e.shards || []).map(ir), !0).filter(Boolean);
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
    var w = it(m), b = n.current, C = "deltaX" in m ? m.deltaX : b[0] - w[0], x = "deltaY" in m ? m.deltaY : b[1] - w[1], R, S = m.target, E = Math.abs(C) > Math.abs(x) ? "h" : "v";
    if ("touches" in m && E === "h" && S.type === "range")
      return !1;
    var P = window.getSelection(), k = P && P.anchorNode, I = k ? k === S || k.contains(S) : !1;
    if (I)
      return !1;
    var L = or(E, S);
    if (!L)
      return !0;
    if (L ? R = E : (R = E === "v" ? "h" : "v", L = or(E, S)), !L)
      return !1;
    if (!r.current && "changedTouches" in m && (C || x) && (r.current = R), !R)
      return !0;
    var B = r.current || R;
    return Kl(B, y, m, B === "h" ? C : x);
  }, []), u = s.useCallback(function(m) {
    var y = m;
    if (!(!Me.length || Me[Me.length - 1] !== a)) {
      var w = "deltaY" in y ? ar(y) : it(y), b = t.current.filter(function(R) {
        return R.name === y.type && (R.target === y.target || y.target === R.shadowParent) && Yl(R.delta, w);
      })[0];
      if (b && b.should) {
        y.cancelable && y.preventDefault();
        return;
      }
      if (!b) {
        var C = (c.current.shards || []).map(ir).filter(Boolean).filter(function(R) {
          return R.contains(y.target);
        }), x = C.length > 0 ? i(y, C[0]) : !c.current.noIsolation;
        x && y.cancelable && y.preventDefault();
      }
    }
  }, []), l = s.useCallback(function(m, y, w, b) {
    var C = { name: m, delta: y, target: w, should: b, shadowParent: Ql(w) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== C;
      });
    }, 1);
  }, []), d = s.useCallback(function(m) {
    n.current = it(m), r.current = void 0;
  }, []), f = s.useCallback(function(m) {
    l(m.type, ar(m), m.target, i(m, e.lockRef.current));
  }, []), h = s.useCallback(function(m) {
    l(m.type, it(m), m.target, i(m, e.lockRef.current));
  }, []);
  s.useEffect(function() {
    return Me.push(a), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", u, Pe), document.addEventListener("touchmove", u, Pe), document.addEventListener("touchstart", d, Pe), function() {
      Me = Me.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", u, Pe), document.removeEventListener("touchmove", u, Pe), document.removeEventListener("touchstart", d, Pe);
    };
  }, []);
  var g = e.removeScrollBar, v = e.inert;
  return s.createElement(
    s.Fragment,
    null,
    v ? s.createElement(a, { styles: Xl(o) }) : null,
    g ? s.createElement(Vl, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Ql(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Jl = Pl(Mo, ql);
var ko = s.forwardRef(function(e, t) {
  return s.createElement(Mt, ne({}, e, { ref: t, sideCar: Jl }));
});
ko.classNames = Mt.classNames;
var en = ["Enter", " "], eu = ["ArrowDown", "PageUp", "Home"], Oo = ["ArrowUp", "PageDown", "End"], tu = [...eu, ...Oo], nu = {
  ltr: [...en, "ArrowRight"],
  rtl: [...en, "ArrowLeft"]
}, ru = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Ye = "Menu", [ze, ou, au] = Ar(Ye), [Re, Lo] = ae(Ye, [
  au,
  Pt,
  Ct
]), At = Pt(), Do = Ct(), [iu, Se] = Re(Ye), [su, Xe] = Re(Ye), Fo = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: a, modal: c = !0 } = e, i = At(t), [u, l] = s.useState(null), d = s.useRef(!1), f = se(a), h = cn(o);
  return s.useEffect(() => {
    const g = () => {
      d.current = !0, document.addEventListener("pointerdown", v, { capture: !0, once: !0 }), document.addEventListener("pointermove", v, { capture: !0, once: !0 });
    }, v = () => d.current = !1;
    return document.addEventListener("keydown", g, { capture: !0 }), () => {
      document.removeEventListener("keydown", g, { capture: !0 }), document.removeEventListener("pointerdown", v, { capture: !0 }), document.removeEventListener("pointermove", v, { capture: !0 });
    };
  }, []), /* @__PURE__ */ p(Co, { ...i, children: /* @__PURE__ */ p(
    iu,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: u,
      onContentChange: l,
      children: /* @__PURE__ */ p(
        su,
        {
          scope: t,
          onClose: s.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: h,
          modal: c,
          children: r
        }
      )
    }
  ) });
};
Fo.displayName = Ye;
var cu = "MenuAnchor", bn = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = At(n);
    return /* @__PURE__ */ p(xo, { ...o, ...r, ref: t });
  }
);
bn.displayName = cu;
var Cn = "MenuPortal", [lu, $o] = Re(Cn, {
  forceMount: void 0
}), Bo = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, a = Se(Cn, t);
  return /* @__PURE__ */ p(lu, { scope: t, forceMount: n, children: /* @__PURE__ */ p(ue, { present: n || a.open, children: /* @__PURE__ */ p(wn, { asChild: !0, container: o, children: r }) }) });
};
Bo.displayName = Cn;
var q = "MenuContent", [uu, xn] = Re(q), Vo = s.forwardRef(
  (e, t) => {
    const n = $o(q, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Se(q, e.__scopeMenu), c = Xe(q, e.__scopeMenu);
    return /* @__PURE__ */ p(ze.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(ue, { present: r || a.open, children: /* @__PURE__ */ p(ze.Slot, { scope: e.__scopeMenu, children: c.modal ? /* @__PURE__ */ p(du, { ...o, ref: t }) : /* @__PURE__ */ p(fu, { ...o, ref: t }) }) }) });
  }
), du = s.forwardRef(
  (e, t) => {
    const n = Se(q, e.__scopeMenu), r = s.useRef(null), o = z(t, r);
    return s.useEffect(() => {
      const a = r.current;
      if (a) return vl(a);
    }, []), /* @__PURE__ */ p(
      En,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: M(
          e.onFocusOutside,
          (a) => a.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), fu = s.forwardRef((e, t) => {
  const n = Se(q, e.__scopeMenu);
  return /* @__PURE__ */ p(
    En,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), pu = /* @__PURE__ */ cl("MenuContent.ScrollLock"), En = s.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: a,
      onCloseAutoFocus: c,
      disableOutsidePointerEvents: i,
      onEntryFocus: u,
      onEscapeKeyDown: l,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: h,
      onDismiss: g,
      disableOutsideScroll: v,
      ...m
    } = e, y = Se(q, n), w = Xe(q, n), b = At(n), C = Do(n), x = ou(n), [R, S] = s.useState(null), E = s.useRef(null), P = z(t, E, y.onContentChange), k = s.useRef(0), I = s.useRef(""), L = s.useRef(0), B = s.useRef(null), F = s.useRef("right"), $ = s.useRef(0), G = v ? ko : s.Fragment, O = v ? { as: pu, allowPinchZoom: !0 } : void 0, W = (N) => {
      const H = I.current + N, K = x().filter((U) => !U.disabled), te = document.activeElement, Q = K.find((U) => U.ref.current === te)?.textValue, fe = K.map((U) => U.textValue), qe = Su(fe, H, Q), ye = K.find((U) => U.textValue === qe)?.ref.current;
      (function U(Ve) {
        I.current = Ve, window.clearTimeout(k.current), Ve !== "" && (k.current = window.setTimeout(() => U(""), 1e3));
      })(H), ye && setTimeout(() => ye.focus());
    };
    s.useEffect(() => () => window.clearTimeout(k.current), []), Ws();
    const A = s.useCallback((N) => F.current === B.current?.side && Pu(N, B.current?.area), []);
    return /* @__PURE__ */ p(
      uu,
      {
        scope: n,
        searchRef: I,
        onItemEnter: s.useCallback(
          (N) => {
            A(N) && N.preventDefault();
          },
          [A]
        ),
        onItemLeave: s.useCallback(
          (N) => {
            A(N) || (E.current?.focus(), S(null));
          },
          [A]
        ),
        onTriggerLeave: s.useCallback(
          (N) => {
            A(N) && N.preventDefault();
          },
          [A]
        ),
        pointerGraceTimerRef: L,
        onPointerGraceIntentChange: s.useCallback((N) => {
          B.current = N;
        }, []),
        children: /* @__PURE__ */ p(G, { ...O, children: /* @__PURE__ */ p(
          qr,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: M(a, (N) => {
              N.preventDefault(), E.current?.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: c,
            children: /* @__PURE__ */ p(
              un,
              {
                asChild: !0,
                disableOutsidePointerEvents: i,
                onEscapeKeyDown: l,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: h,
                onDismiss: g,
                children: /* @__PURE__ */ p(
                  Lr,
                  {
                    asChild: !0,
                    ...C,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: R,
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: M(u, (N) => {
                      w.isUsingKeyboardRef.current || N.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ p(
                      Eo,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": na(y.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ...b,
                        ...m,
                        ref: P,
                        style: { outline: "none", ...m.style },
                        onKeyDown: M(m.onKeyDown, (N) => {
                          const K = N.target.closest("[data-radix-menu-content]") === N.currentTarget, te = N.ctrlKey || N.altKey || N.metaKey, Q = N.key.length === 1;
                          K && (N.key === "Tab" && N.preventDefault(), !te && Q && W(N.key));
                          const fe = E.current;
                          if (N.target !== fe || !tu.includes(N.key)) return;
                          N.preventDefault();
                          const ye = x().filter((U) => !U.disabled).map((U) => U.ref.current);
                          Oo.includes(N.key) && ye.reverse(), Eu(ye);
                        }),
                        onBlur: M(e.onBlur, (N) => {
                          N.currentTarget.contains(N.target) || (window.clearTimeout(k.current), I.current = "");
                        }),
                        onPointerMove: M(
                          e.onPointerMove,
                          Ge((N) => {
                            const H = N.target, K = $.current !== N.clientX;
                            if (N.currentTarget.contains(H) && K) {
                              const te = N.clientX > $.current ? "right" : "left";
                              F.current = te, $.current = N.clientX;
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
Vo.displayName = q;
var mu = "MenuGroup", Rn = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(V.div, { role: "group", ...r, ref: t });
  }
);
Rn.displayName = mu;
var hu = "MenuLabel", Wo = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ p(V.div, { ...r, ref: t });
  }
);
Wo.displayName = hu;
var gt = "MenuItem", sr = "menu.itemSelect", _t = s.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, a = s.useRef(null), c = Xe(gt, e.__scopeMenu), i = xn(gt, e.__scopeMenu), u = z(t, a), l = s.useRef(!1), d = () => {
      const f = a.current;
      if (!n && f) {
        const h = new CustomEvent(sr, { bubbles: !0, cancelable: !0 });
        f.addEventListener(sr, (g) => r?.(g), { once: !0 }), gr(f, h), h.defaultPrevented ? l.current = !1 : c.onClose();
      }
    };
    return /* @__PURE__ */ p(
      Ho,
      {
        ...o,
        ref: u,
        disabled: n,
        onClick: M(e.onClick, d),
        onPointerDown: (f) => {
          e.onPointerDown?.(f), l.current = !0;
        },
        onPointerUp: M(e.onPointerUp, (f) => {
          l.current || f.currentTarget?.click();
        }),
        onKeyDown: M(e.onKeyDown, (f) => {
          const h = i.searchRef.current !== "";
          n || h && f.key === " " || en.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
_t.displayName = gt;
var Ho = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...a } = e, c = xn(gt, n), i = Do(n), u = s.useRef(null), l = z(t, u), [d, f] = s.useState(!1), [h, g] = s.useState("");
    return s.useEffect(() => {
      const v = u.current;
      v && g((v.textContent ?? "").trim());
    }, [a.children]), /* @__PURE__ */ p(
      ze.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? h,
        children: /* @__PURE__ */ p(Dr, { asChild: !0, ...i, focusable: !r, children: /* @__PURE__ */ p(
          V.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...a,
            ref: l,
            onPointerMove: M(
              e.onPointerMove,
              Ge((v) => {
                r ? c.onItemLeave(v) : (c.onItemEnter(v), v.defaultPrevented || v.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: M(
              e.onPointerLeave,
              Ge((v) => c.onItemLeave(v))
            ),
            onFocus: M(e.onFocus, () => f(!0)),
            onBlur: M(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), gu = "MenuCheckboxItem", zo = s.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ p(Yo, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ p(
      _t,
      {
        role: "menuitemcheckbox",
        "aria-checked": vt(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Nn(n),
        onSelect: M(
          o.onSelect,
          () => r?.(vt(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
zo.displayName = gu;
var Go = "MenuRadioGroup", [vu, yu] = Re(
  Go,
  { value: void 0, onValueChange: () => {
  } }
), Uo = s.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, a = se(r);
    return /* @__PURE__ */ p(vu, { scope: e.__scopeMenu, value: n, onValueChange: a, children: /* @__PURE__ */ p(Rn, { ...o, ref: t }) });
  }
);
Uo.displayName = Go;
var jo = "MenuRadioItem", Ko = s.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = yu(jo, e.__scopeMenu), a = n === o.value;
    return /* @__PURE__ */ p(Yo, { scope: e.__scopeMenu, checked: a, children: /* @__PURE__ */ p(
      _t,
      {
        role: "menuitemradio",
        "aria-checked": a,
        ...r,
        ref: t,
        "data-state": Nn(a),
        onSelect: M(
          r.onSelect,
          () => o.onValueChange?.(n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ko.displayName = jo;
var Sn = "MenuItemIndicator", [Yo, wu] = Re(
  Sn,
  { checked: !1 }
), Xo = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, a = wu(Sn, n);
    return /* @__PURE__ */ p(
      ue,
      {
        present: r || vt(a.checked) || a.checked === !0,
        children: /* @__PURE__ */ p(
          V.span,
          {
            ...o,
            ref: t,
            "data-state": Nn(a.checked)
          }
        )
      }
    );
  }
);
Xo.displayName = Sn;
var bu = "MenuSeparator", Zo = s.forwardRef(
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
Zo.displayName = bu;
var Cu = "MenuArrow", qo = s.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = At(n);
    return /* @__PURE__ */ p(Ro, { ...o, ...r, ref: t });
  }
);
qo.displayName = Cu;
var xu = "MenuSub", [bf, Qo] = Re(xu), We = "MenuSubTrigger", Jo = s.forwardRef(
  (e, t) => {
    const n = Se(We, e.__scopeMenu), r = Xe(We, e.__scopeMenu), o = Qo(We, e.__scopeMenu), a = xn(We, e.__scopeMenu), c = s.useRef(null), { pointerGraceTimerRef: i, onPointerGraceIntentChange: u } = a, l = { __scopeMenu: e.__scopeMenu }, d = s.useCallback(() => {
      c.current && window.clearTimeout(c.current), c.current = null;
    }, []);
    return s.useEffect(() => d, [d]), s.useEffect(() => {
      const f = i.current;
      return () => {
        window.clearTimeout(f), u(null);
      };
    }, [i, u]), /* @__PURE__ */ p(bn, { asChild: !0, ...l, children: /* @__PURE__ */ p(
      Ho,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": na(n.open),
        ...e,
        ref: Ee(t, o.onTriggerChange),
        onClick: (f) => {
          e.onClick?.(f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: M(
          e.onPointerMove,
          Ge((f) => {
            a.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !c.current && (a.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: M(
          e.onPointerLeave,
          Ge((f) => {
            d();
            const h = n.content?.getBoundingClientRect();
            if (h) {
              const g = n.content?.dataset.side, v = g === "right", m = v ? -5 : 5, y = h[v ? "left" : "right"], w = h[v ? "right" : "left"];
              a.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + m, y: f.clientY },
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
              if (a.onTriggerLeave(f), f.defaultPrevented) return;
              a.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: M(e.onKeyDown, (f) => {
          const h = a.searchRef.current !== "";
          e.disabled || h && f.key === " " || nu[r.dir].includes(f.key) && (n.onOpenChange(!0), n.content?.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
Jo.displayName = We;
var ea = "MenuSubContent", ta = s.forwardRef(
  (e, t) => {
    const n = $o(q, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, a = Se(q, e.__scopeMenu), c = Xe(q, e.__scopeMenu), i = Qo(ea, e.__scopeMenu), u = s.useRef(null), l = z(t, u);
    return /* @__PURE__ */ p(ze.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(ue, { present: r || a.open, children: /* @__PURE__ */ p(ze.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ p(
      En,
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
        onOpenAutoFocus: (d) => {
          c.isUsingKeyboardRef.current && u.current?.focus(), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: M(e.onFocusOutside, (d) => {
          d.target !== i.trigger && a.onOpenChange(!1);
        }),
        onEscapeKeyDown: M(e.onEscapeKeyDown, (d) => {
          c.onClose(), d.preventDefault();
        }),
        onKeyDown: M(e.onKeyDown, (d) => {
          const f = d.currentTarget.contains(d.target), h = ru[c.dir].includes(d.key);
          f && h && (a.onOpenChange(!1), i.trigger?.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
ta.displayName = ea;
function na(e) {
  return e ? "open" : "closed";
}
function vt(e) {
  return e === "indeterminate";
}
function Nn(e) {
  return vt(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Eu(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Ru(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Su(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, a = n ? e.indexOf(n) : -1;
  let c = Ru(e, Math.max(a, 0));
  o.length === 1 && (c = c.filter((l) => l !== n));
  const u = c.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return u !== n ? u : void 0;
}
function Nu(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const i = t[a], u = t[c], l = i.x, d = i.y, f = u.x, h = u.y;
    d > r != h > r && n < (f - l) * (r - d) / (h - d) + l && (o = !o);
  }
  return o;
}
function Pu(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Nu(n, t);
}
function Ge(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Mu = Fo, Au = bn, _u = Bo, Tu = Vo, Iu = Rn, ku = Wo, Ou = _t, Lu = zo, Du = Uo, Fu = Ko, $u = Xo, Bu = Zo, Vu = qo, Wu = Jo, Hu = ta, Tt = "DropdownMenu", [zu] = ae(
  Tt,
  [Lo]
), j = Lo(), [Gu, ra] = zu(Tt), oa = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: a,
    onOpenChange: c,
    modal: i = !0
  } = e, u = j(t), l = s.useRef(null), [d, f] = Fe({
    prop: o,
    defaultProp: a ?? !1,
    onChange: c,
    caller: Tt
  });
  return /* @__PURE__ */ p(
    Gu,
    {
      scope: t,
      triggerId: dt(),
      triggerRef: l,
      contentId: dt(),
      open: d,
      onOpenChange: f,
      onOpenToggle: s.useCallback(() => f((h) => !h), [f]),
      modal: i,
      children: /* @__PURE__ */ p(Mu, { ...u, open: d, onOpenChange: f, dir: r, modal: i, children: n })
    }
  );
};
oa.displayName = Tt;
var aa = "DropdownMenuTrigger", ia = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, a = ra(aa, n), c = j(n);
    return /* @__PURE__ */ p(Au, { asChild: !0, ...c, children: /* @__PURE__ */ p(
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
        ref: Ee(t, a.triggerRef),
        onPointerDown: M(e.onPointerDown, (i) => {
          !r && i.button === 0 && i.ctrlKey === !1 && (a.onOpenToggle(), a.open || i.preventDefault());
        }),
        onKeyDown: M(e.onKeyDown, (i) => {
          r || (["Enter", " "].includes(i.key) && a.onOpenToggle(), i.key === "ArrowDown" && a.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(i.key) && i.preventDefault());
        })
      }
    ) });
  }
);
ia.displayName = aa;
var Uu = "DropdownMenuPortal", sa = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = j(t);
  return /* @__PURE__ */ p(_u, { ...r, ...n });
};
sa.displayName = Uu;
var ca = "DropdownMenuContent", la = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = ra(ca, n), a = j(n), c = s.useRef(!1);
    return /* @__PURE__ */ p(
      Tu,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...a,
        ...r,
        ref: t,
        onCloseAutoFocus: M(e.onCloseAutoFocus, (i) => {
          c.current || o.triggerRef.current?.focus(), c.current = !1, i.preventDefault();
        }),
        onInteractOutside: M(e.onInteractOutside, (i) => {
          const u = i.detail.originalEvent, l = u.button === 0 && u.ctrlKey === !0, d = u.button === 2 || l;
          (!o.modal || d) && (c.current = !0);
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
la.displayName = ca;
var ju = "DropdownMenuGroup", Ku = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(Iu, { ...o, ...r, ref: t });
  }
);
Ku.displayName = ju;
var Yu = "DropdownMenuLabel", Xu = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(ku, { ...o, ...r, ref: t });
  }
);
Xu.displayName = Yu;
var Zu = "DropdownMenuItem", ua = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(Ou, { ...o, ...r, ref: t });
  }
);
ua.displayName = Zu;
var qu = "DropdownMenuCheckboxItem", Qu = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(Lu, { ...o, ...r, ref: t });
});
Qu.displayName = qu;
var Ju = "DropdownMenuRadioGroup", ed = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(Du, { ...o, ...r, ref: t });
});
ed.displayName = Ju;
var td = "DropdownMenuRadioItem", nd = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(Fu, { ...o, ...r, ref: t });
});
nd.displayName = td;
var rd = "DropdownMenuItemIndicator", od = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p($u, { ...o, ...r, ref: t });
});
od.displayName = rd;
var ad = "DropdownMenuSeparator", id = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(Bu, { ...o, ...r, ref: t });
});
id.displayName = ad;
var sd = "DropdownMenuArrow", cd = s.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
    return /* @__PURE__ */ p(Vu, { ...o, ...r, ref: t });
  }
);
cd.displayName = sd;
var ld = "DropdownMenuSubTrigger", ud = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(Wu, { ...o, ...r, ref: t });
});
ud.displayName = ld;
var dd = "DropdownMenuSubContent", fd = s.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = j(n);
  return /* @__PURE__ */ p(
    Hu,
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
fd.displayName = dd;
var pd = oa, md = ia, hd = sa, gd = la, vd = ua;
function yd({ ...e }) {
  return /* @__PURE__ */ p(pd, { "data-slot": "dropdown-menu", ...e });
}
function wd({
  ...e
}) {
  return /* @__PURE__ */ p(md, { "data-slot": "dropdown-menu-trigger", ...e });
}
function bd({
  className: e,
  sideOffset: t = 4,
  align: n = "end",
  ...r
}) {
  return /* @__PURE__ */ p(hd, { children: /* @__PURE__ */ p(
    gd,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset: t,
      align: n,
      className: T(
        "z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl border border-gi-dark-ash bg-white p-1.5 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "w-40",
        e
      ),
      ...r
    }
  ) });
}
function Cd({
  className: e,
  inset: t,
  variant: n = "default",
  ...r
}) {
  return /* @__PURE__ */ p(
    vd,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": t,
      "data-variant": n,
      className: T(
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
const xd = D(
  ({ items: e, className: t, ...n }, r) => /* @__PURE__ */ p(
    "div",
    {
      ref: r,
      className: T("flex flex-col gap-0.5", t),
      ...n,
      children: e.map((o, a) => /* @__PURE__ */ _(
        Cd,
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
xd.displayName = "ActionList";
const Ed = ({
  title: e,
  titleId: t,
  ...n
}, r) => /* @__PURE__ */ s.createElement("svg", { width: 14, height: 16, viewBox: "0 0 14 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ref: r, "aria-labelledby": t, ...n }, e ? /* @__PURE__ */ s.createElement("title", { id: t }, e) : null, /* @__PURE__ */ s.createElement("path", { d: "M6.46966 11.9211L0.396437 5.84786C0.103531 5.55496 0.103531 5.08008 0.396437 4.78721L1.10478 4.07886C1.39719 3.78646 1.87109 3.7859 2.16419 4.07761L7 8.89077L11.8358 4.07761C12.1289 3.7859 12.6028 3.78646 12.8952 4.07886L13.6035 4.78721C13.8964 5.08011 13.8964 5.55499 13.6035 5.84786L7.53034 11.9211C7.23744 12.214 6.76256 12.214 6.46966 11.9211Z", fill: "#004554" })), Rd = D(Ed), Sd = D(
  ({
    value: e,
    placeholder: t,
    size: n = "regular",
    openOn: r = "click",
    children: o,
    isDisabled: a = !1,
    dataTestId: c,
    className: i,
    trigger: u,
    ...l
  }, d) => {
    const [f, h] = Ce(!1), g = Oe(null), v = Oe(!1), m = _n(() => {
      a || r !== "hover" || (g.current && clearTimeout(g.current), v.current || (v.current = !0, h(!0)));
    }, [a, r]), y = _n(() => {
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
        children: /* @__PURE__ */ _(yd, { open: f, onOpenChange: (b) => {
          v.current = b, h(b);
        }, modal: !1, children: [
          /* @__PURE__ */ p(wd, { asChild: !0, disabled: a, children: u || /* @__PURE__ */ _(
            "div",
            {
              ref: d,
              role: "button",
              tabIndex: a ? -1 : 0,
              "data-test-id": c,
              className: T(
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
                /* @__PURE__ */ p(Rd, {})
              ]
            }
          ) }),
          /* @__PURE__ */ p(
            bd,
            {
              onPointerEnter: m,
              onPointerLeave: y,
              sideOffset: 4,
              className: T(
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
Sd.displayName = "Select";
var It = "Switch", [Nd] = ae(It), [Pd, Md] = Nd(It), da = s.forwardRef(
  (e, t) => {
    const {
      __scopeSwitch: n,
      name: r,
      checked: o,
      defaultChecked: a,
      required: c,
      disabled: i,
      value: u = "on",
      onCheckedChange: l,
      form: d,
      ...f
    } = e, [h, g] = s.useState(null), v = z(t, (C) => g(C)), m = s.useRef(!1), y = h ? d || !!h.closest("form") : !0, [w, b] = Fe({
      prop: o,
      defaultProp: a ?? !1,
      onChange: l,
      caller: It
    });
    return /* @__PURE__ */ _(Pd, { scope: n, checked: w, disabled: i, children: [
      /* @__PURE__ */ p(
        V.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": w,
          "aria-required": c,
          "data-state": ha(w),
          "data-disabled": i ? "" : void 0,
          disabled: i,
          value: u,
          ...f,
          ref: v,
          onClick: M(e.onClick, (C) => {
            b((x) => !x), y && (m.current = C.isPropagationStopped(), m.current || C.stopPropagation());
          })
        }
      ),
      y && /* @__PURE__ */ p(
        ma,
        {
          control: h,
          bubbles: !m.current,
          name: r,
          value: u,
          checked: w,
          required: c,
          disabled: i,
          form: d,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
da.displayName = It;
var fa = "SwitchThumb", pa = s.forwardRef(
  (e, t) => {
    const { __scopeSwitch: n, ...r } = e, o = Md(fa, n);
    return /* @__PURE__ */ p(
      V.span,
      {
        "data-state": ha(o.checked),
        "data-disabled": o.disabled ? "" : void 0,
        ...r,
        ref: t
      }
    );
  }
);
pa.displayName = fa;
var Ad = "SwitchBubbleInput", ma = s.forwardRef(
  ({
    __scopeSwitch: e,
    control: t,
    checked: n,
    bubbles: r = !0,
    ...o
  }, a) => {
    const c = s.useRef(null), i = z(c, a), u = an(n), l = wt(t);
    return s.useEffect(() => {
      const d = c.current;
      if (!d) return;
      const f = window.HTMLInputElement.prototype, g = Object.getOwnPropertyDescriptor(
        f,
        "checked"
      ).set;
      if (u !== n && g) {
        const v = new Event("click", { bubbles: r });
        g.call(d, n), d.dispatchEvent(v);
      }
    }, [u, n, r]), /* @__PURE__ */ p(
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
ma.displayName = Ad;
function ha(e) {
  return e ? "checked" : "unchecked";
}
var _d = da, Td = pa;
const Id = D(({ className: e, ...t }, n) => /* @__PURE__ */ p(
  _d,
  {
    ref: n,
    "data-slot": "switch",
    className: T(
      "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input",
      e
    ),
    ...t,
    children: /* @__PURE__ */ p(
      Td,
      {
        "data-slot": "switch-thumb",
        className: T(
          "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
        )
      }
    )
  }
));
Id.displayName = "Switch";
const kd = Y(
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
), Ae = Y(
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
function Cf({
  columns: e,
  data: t,
  getRowKey: n,
  isSelectable: r = !1,
  selectedRowKeys: o = [],
  onSelectedRowKeysChange: a,
  actions: c,
  pagination: i,
  emptyState: u,
  isMobileScrollable: l = !0,
  dataTestId: d,
  className: f,
  ...h
}) {
  const g = (m, y) => {
    a && a(y ? [...o, m] : o.filter((w) => w !== m));
  }, v = i?.totalElements ?? t.length;
  return /* @__PURE__ */ _(
    "div",
    {
      "data-slot": "table-root",
      "data-testid": d || "table-root",
      className: T("flex flex-col w-full gap-4", f),
      ...h,
      children: [
        /* @__PURE__ */ p("div", { className: kd({ isMobileScrollable: l }), children: /* @__PURE__ */ _("table", { className: "w-max min-w-full border-separate border-spacing-y-0 text-sm", children: [
          /* @__PURE__ */ _("thead", { children: [
            /* @__PURE__ */ _("tr", { className: "bg-gi-ash", children: [
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
              children: u || "No data available"
            }
          ) }) : t.map((m, y) => {
            const w = n(m), b = o.includes(w);
            return /* @__PURE__ */ _(
              "tr",
              {
                className: "transition-colors duration-300 ease group hover:bg-gi-ash/10",
                children: [
                  r && /* @__PURE__ */ p(
                    "td",
                    {
                      className: T(
                        Ae({
                          mobileFullWidth: !1
                        }),
                        "px-4 py-5 border-b border-gi-dark-ash",
                        y === 0 && "border-t border-gi-dark-ash"
                      ),
                      children: /* @__PURE__ */ p(
                        Sr,
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
                      className: T(
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
                      className: T(
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
        /* @__PURE__ */ _("div", { className: "flex flex-row items-start justify-between w-full mt-2 px-1", children: [
          /* @__PURE__ */ p("div", { className: "flex items-start", children: r && /* @__PURE__ */ _(
            mr,
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
            Mr,
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
const Od = (e) => e ? {
  left: e.offsetLeft,
  width: e.offsetWidth
} : { left: 0, width: 0 }, Ld = D(
  ({
    value: e,
    onValueChange: t,
    items: n,
    size: r = "regular",
    isFullWidth: o = !1,
    dataTestId: a,
    className: c = "",
    ...i
  }, u) => {
    const [l, d] = Ce({ left: 0, width: 0 }), f = Oe([]);
    Te(() => {
      const m = n.findIndex((w) => w.value === e), y = f.current[m];
      d(Od(y));
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
      t(b.value), f.current[w]?.focus();
    }, g = r === "large" ? "text-lg pt-4 pb-3 px-3" : "text-base pt-3 pb-2 px-3";
    return /* @__PURE__ */ _(
      "div",
      {
        ref: u,
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
                  f.current[y] = b;
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
Ld.displayName = "Tabs";
const Dd = Y(
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
), Fd = {
  default: "text-gi-primary",
  error: "text-gi-primary",
  disabled: "text-gi-primary/50"
};
function xf({
  className: e,
  isError: t,
  label: n,
  disabled: r,
  errorText: o,
  helper: a,
  isRequired: c,
  value: i,
  onChange: u,
  characterLimit: l,
  characterLimitVisibility: d,
  dataTestId: f,
  ...h
}) {
  const g = !!(t && o), v = g ? o : a, m = typeof l == "number", y = m ? l : void 0, w = i ?? "", b = m && typeof y == "number" ? w.slice(0, y) : w, C = b.length, x = g, R = !!d && m, S = r ? "disabled" : t ? "error" : "default";
  function E(k) {
    if (r)
      return;
    const I = k.target.value;
    if (m && typeof l == "number") {
      const L = I.slice(0, l);
      u(L);
      return;
    }
    u(I);
  }
  const P = T(
    "text-[14px]",
    x ? "text-gi-red" : "text-gi-primary/50"
  );
  return /* @__PURE__ */ _("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ _("p", { className: T("font-bold", Fd[S]), children: [
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
        "data-test-id": f,
        className: T(
          Dd({
            variant: S,
            className: e
          })
        ),
        ...h
      }
    ),
    /* @__PURE__ */ _("div", { className: "flex justify-between items-start text-[14px] mt-1 min-h-4", children: [
      /* @__PURE__ */ p("p", { className: P, children: v }),
      R ? /* @__PURE__ */ _("p", { className: "text-gi-primary/50 text-[14px]", children: [
        C,
        "/",
        y
      ] }) : null
    ] })
  ] });
}
var $d = /* @__PURE__ */ Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function Bd(e) {
  const t = ({ children: n }) => /* @__PURE__ */ p(rn, { children: n });
  return t.displayName = `${e}.Slottable`, t.__radixId = $d, t;
}
var Vd = Object.freeze({
  // See: https://github.com/twbs/bootstrap/blob/main/scss/mixins/_visually-hidden.scss
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
}), Wd = "VisuallyHidden", ga = s.forwardRef(
  (e, t) => /* @__PURE__ */ p(
    V.span,
    {
      ...e,
      ref: t,
      style: { ...Vd, ...e.style }
    }
  )
);
ga.displayName = Wd;
var Hd = ga, [kt] = ae("Tooltip", [
  Pt
]), Ot = Pt(), va = "TooltipProvider", zd = 700, tn = "tooltip.open", [Gd, Pn] = kt(va), ya = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: n = zd,
    skipDelayDuration: r = 300,
    disableHoverableContent: o = !1,
    children: a
  } = e, c = s.useRef(!0), i = s.useRef(!1), u = s.useRef(0);
  return s.useEffect(() => {
    const l = u.current;
    return () => window.clearTimeout(l);
  }, []), /* @__PURE__ */ p(
    Gd,
    {
      scope: t,
      isOpenDelayedRef: c,
      delayDuration: n,
      onOpen: s.useCallback(() => {
        window.clearTimeout(u.current), c.current = !1;
      }, []),
      onClose: s.useCallback(() => {
        window.clearTimeout(u.current), u.current = window.setTimeout(
          () => c.current = !0,
          r
        );
      }, [r]),
      isPointerInTransitRef: i,
      onPointerInTransitChange: s.useCallback((l) => {
        i.current = l;
      }, []),
      disableHoverableContent: o,
      children: a
    }
  );
};
ya.displayName = va;
var Ue = "Tooltip", [Ud, Ze] = kt(Ue), wa = (e) => {
  const {
    __scopeTooltip: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: a,
    disableHoverableContent: c,
    delayDuration: i
  } = e, u = Pn(Ue, e.__scopeTooltip), l = Ot(t), [d, f] = s.useState(null), h = dt(), g = s.useRef(0), v = c ?? u.disableHoverableContent, m = i ?? u.delayDuration, y = s.useRef(!1), [w, b] = Fe({
    prop: r,
    defaultProp: o ?? !1,
    onChange: (E) => {
      E ? (u.onOpen(), document.dispatchEvent(new CustomEvent(tn))) : u.onClose(), a?.(E);
    },
    caller: Ue
  }), C = s.useMemo(() => w ? y.current ? "delayed-open" : "instant-open" : "closed", [w]), x = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, y.current = !1, b(!0);
  }, [b]), R = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = 0, b(!1);
  }, [b]), S = s.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      y.current = !0, b(!0), g.current = 0;
    }, m);
  }, [m, b]);
  return s.useEffect(() => () => {
    g.current && (window.clearTimeout(g.current), g.current = 0);
  }, []), /* @__PURE__ */ p(Co, { ...l, children: /* @__PURE__ */ p(
    Ud,
    {
      scope: t,
      contentId: h,
      open: w,
      stateAttribute: C,
      trigger: d,
      onTriggerChange: f,
      onTriggerEnter: s.useCallback(() => {
        u.isOpenDelayedRef.current ? S() : x();
      }, [u.isOpenDelayedRef, S, x]),
      onTriggerLeave: s.useCallback(() => {
        v ? R() : (window.clearTimeout(g.current), g.current = 0);
      }, [R, v]),
      onOpen: x,
      onClose: R,
      disableHoverableContent: v,
      children: n
    }
  ) });
};
wa.displayName = Ue;
var nn = "TooltipTrigger", ba = s.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ze(nn, n), a = Pn(nn, n), c = Ot(n), i = s.useRef(null), u = z(t, i, o.onTriggerChange), l = s.useRef(!1), d = s.useRef(!1), f = s.useCallback(() => l.current = !1, []);
    return s.useEffect(() => () => document.removeEventListener("pointerup", f), [f]), /* @__PURE__ */ p(xo, { asChild: !0, ...c, children: /* @__PURE__ */ p(
      V.button,
      {
        "aria-describedby": o.open ? o.contentId : void 0,
        "data-state": o.stateAttribute,
        ...r,
        ref: u,
        onPointerMove: M(e.onPointerMove, (h) => {
          h.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (o.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: M(e.onPointerLeave, () => {
          o.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: M(e.onPointerDown, () => {
          o.open && o.onClose(), l.current = !0, document.addEventListener("pointerup", f, { once: !0 });
        }),
        onFocus: M(e.onFocus, () => {
          l.current || o.onOpen();
        }),
        onBlur: M(e.onBlur, o.onClose),
        onClick: M(e.onClick, o.onClose)
      }
    ) });
  }
);
ba.displayName = nn;
var Mn = "TooltipPortal", [jd, Kd] = kt(Mn, {
  forceMount: void 0
}), Ca = (e) => {
  const { __scopeTooltip: t, forceMount: n, children: r, container: o } = e, a = Ze(Mn, t);
  return /* @__PURE__ */ p(jd, { scope: t, forceMount: n, children: /* @__PURE__ */ p(ue, { present: n || a.open, children: /* @__PURE__ */ p(wn, { asChild: !0, container: o, children: r }) }) });
};
Ca.displayName = Mn;
var De = "TooltipContent", xa = s.forwardRef(
  (e, t) => {
    const n = Kd(De, e.__scopeTooltip), { forceMount: r = n.forceMount, side: o = "top", ...a } = e, c = Ze(De, e.__scopeTooltip);
    return /* @__PURE__ */ p(ue, { present: r || c.open, children: c.disableHoverableContent ? /* @__PURE__ */ p(Ea, { side: o, ...a, ref: t }) : /* @__PURE__ */ p(Yd, { side: o, ...a, ref: t }) });
  }
), Yd = s.forwardRef((e, t) => {
  const n = Ze(De, e.__scopeTooltip), r = Pn(De, e.__scopeTooltip), o = s.useRef(null), a = z(t, o), [c, i] = s.useState(null), { trigger: u, onClose: l } = n, d = o.current, { onPointerInTransitChange: f } = r, h = s.useCallback(() => {
    i(null), f(!1);
  }, [f]), g = s.useCallback(
    (v, m) => {
      const y = v.currentTarget, w = { x: v.clientX, y: v.clientY }, b = Qd(w, y.getBoundingClientRect()), C = Jd(w, b), x = ef(m.getBoundingClientRect()), R = nf([...C, ...x]);
      i(R), f(!0);
    },
    [f]
  );
  return s.useEffect(() => () => h(), [h]), s.useEffect(() => {
    if (u && d) {
      const v = (y) => g(y, d), m = (y) => g(y, u);
      return u.addEventListener("pointerleave", v), d.addEventListener("pointerleave", m), () => {
        u.removeEventListener("pointerleave", v), d.removeEventListener("pointerleave", m);
      };
    }
  }, [u, d, g, h]), s.useEffect(() => {
    if (c) {
      const v = (m) => {
        const y = m.target, w = { x: m.clientX, y: m.clientY }, b = u?.contains(y) || d?.contains(y), C = !tf(w, c);
        b ? h() : C && (h(), l());
      };
      return document.addEventListener("pointermove", v), () => document.removeEventListener("pointermove", v);
    }
  }, [u, d, c, l, h]), /* @__PURE__ */ p(Ea, { ...e, ref: a });
}), [Xd, Zd] = kt(Ue, { isInside: !1 }), qd = /* @__PURE__ */ Bd("TooltipContent"), Ea = s.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: n,
      children: r,
      "aria-label": o,
      onEscapeKeyDown: a,
      onPointerDownOutside: c,
      ...i
    } = e, u = Ze(De, n), l = Ot(n), { onClose: d } = u;
    return s.useEffect(() => (document.addEventListener(tn, d), () => document.removeEventListener(tn, d)), [d]), s.useEffect(() => {
      if (u.trigger) {
        const f = (h) => {
          h.target?.contains(u.trigger) && d();
        };
        return window.addEventListener("scroll", f, { capture: !0 }), () => window.removeEventListener("scroll", f, { capture: !0 });
      }
    }, [u.trigger, d]), /* @__PURE__ */ p(
      un,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: c,
        onFocusOutside: (f) => f.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ _(
          Eo,
          {
            "data-state": u.stateAttribute,
            ...l,
            ...i,
            ref: t,
            style: {
              ...i.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ p(qd, { children: r }),
              /* @__PURE__ */ p(Xd, { scope: n, isInside: !0, children: /* @__PURE__ */ p(Hd, { id: u.contentId, role: "tooltip", children: o || r }) })
            ]
          }
        )
      }
    );
  }
);
xa.displayName = De;
var Ra = "TooltipArrow", Sa = s.forwardRef(
  (e, t) => {
    const { __scopeTooltip: n, ...r } = e, o = Ot(n);
    return Zd(
      Ra,
      n
    ).isInside ? null : /* @__PURE__ */ p(Ro, { ...o, ...r, ref: t });
  }
);
Sa.displayName = Ra;
function Qd(e, t) {
  const n = Math.abs(t.top - e.y), r = Math.abs(t.bottom - e.y), o = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, a)) {
    case a:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Jd(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push(
        { x: e.x - n, y: e.y + n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "bottom":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x + n, y: e.y - n }
      );
      break;
    case "left":
      r.push(
        { x: e.x + n, y: e.y - n },
        { x: e.x + n, y: e.y + n }
      );
      break;
    case "right":
      r.push(
        { x: e.x - n, y: e.y - n },
        { x: e.x - n, y: e.y + n }
      );
      break;
  }
  return r;
}
function ef(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r }
  ];
}
function tf(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let a = 0, c = t.length - 1; a < t.length; c = a++) {
    const i = t[a], u = t[c], l = i.x, d = i.y, f = u.x, h = u.y;
    d > r != h > r && n < (f - l) * (r - d) / (h - d) + l && (o = !o);
  }
  return o;
}
function nf(e) {
  const t = e.slice();
  return t.sort((n, r) => n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0), rf(t);
}
function rf(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], c = t[t.length - 2];
      if ((a.x - c.x) * (o.y - c.y) >= (a.y - c.y) * (o.x - c.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const a = n[n.length - 1], c = n[n.length - 2];
      if ((a.x - c.x) * (o.y - c.y) >= (a.y - c.y) * (o.x - c.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var of = ya, af = wa, sf = ba, cf = Ca, lf = xa, uf = Sa;
const df = ({
  delayDuration: e = 0,
  ...t
}) => /* @__PURE__ */ p(of, { delayDuration: e, ...t }), ff = af, pf = ({
  ...e
}) => /* @__PURE__ */ p(sf, { ...e }), mf = ({
  className: e,
  sideOffset: t = 4,
  children: n,
  ...r
}) => /* @__PURE__ */ p(cf, { children: /* @__PURE__ */ _(
  lf,
  {
    sideOffset: t,
    className: T(
      "bg-gi-primary text-white z-50 w-fit rounded-sm px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 duration-300 ease-in-out",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ p(uf, { className: "fill-gi-primary" })
    ]
  }
) }), hf = D(
  ({
    children: e,
    content: t,
    side: n = "top",
    align: r = "center",
    delay: o = 200,
    dataTestId: a,
    className: c,
    open: i,
    ...u
  }, l) => {
    const f = n === "top" || n === "bottom" ? r === "start" ? "end" : r === "end" ? "start" : "center" : r, h = r === "center" ? 0 : 12;
    return /* @__PURE__ */ p(df, { delayDuration: o, children: /* @__PURE__ */ _(ff, { open: i, children: [
      /* @__PURE__ */ p(pf, { asChild: !0, children: /* @__PURE__ */ p(
        "span",
        {
          ref: l,
          className: T("cursor-pointer inline-block", c),
          ...u,
          children: e
        }
      ) }),
      /* @__PURE__ */ p(
        mf,
        {
          side: n,
          align: f,
          alignOffset: h,
          "data-test-id": a,
          children: t
        }
      )
    ] }) });
  }
);
hf.displayName = "Tooltip";
export {
  xd as ActionList,
  Wa as Avatar,
  mr as Badge,
  _e as Button,
  si as ButtonSelect,
  Sr as Checkbox,
  Mi as InfoMessage,
  _i as Input,
  Gi as Modal,
  Mr as Pagination,
  Ji as ProgressBar,
  _s as RadioGroup,
  Ts as RadioGroupItem,
  Is as Section,
  Sd as Select,
  Id as Switch,
  Cf as Table,
  Ld as Tabs,
  xf as TextArea,
  hf as Tooltip
};
