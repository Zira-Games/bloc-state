var Be = Object.defineProperty;
var Ve = (e, t, r) => t in e ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var oe = (e, t, r) => (Ve(e, typeof t != "symbol" ? t + "" : t, r), r);
import { jsxs as Ce, Fragment as Se, jsx as x } from "react/jsx-runtime";
import { isServer as he, Bloc as _e } from "@jacobtipp/bloc";
import * as L from "react";
import W, { createContext as Ee, useContext as U, useEffect as Q, useLayoutEffect as Oe, useCallback as X, useDebugValue as me, useState as ye, useRef as D, useSyncExternalStore as Ae, useMemo as Y, createElement as we } from "react";
import { startWith as B, distinctUntilChanged as ue, filter as M, map as j, firstValueFrom as We, pairwise as Z, Subject as Me } from "rxjs";
const ge = () => !1, ee = () => !0, Ie = () => !1, je = (e) => e, Ne = () => !0, te = Ee(
  void 0
), Pe = (e, t) => {
  const r = Ee(null);
  return e.set(t.name, r), r;
}, Le = (e) => {
  const t = U(te);
  if (!t)
    throw new Error("a contextMap does not exist");
  const r = t.get(e.name);
  if (!r)
    throw new Error(`${e.name} does not exist in the context map.`);
  const n = U(r);
  return n == null ? void 0 : n.instance;
}, V = (e) => Le(e);
function Ke(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var z = { exports: {} }, H = {}, g = { exports: {} }, k = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var se;
function Ge() {
  if (se)
    return k;
  se = 1;
  var e = W;
  function t(l, f) {
    return l === f && (l !== 0 || 1 / l === 1 / f) || l !== l && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, o = e.useEffect, u = e.useLayoutEffect, s = e.useDebugValue;
  function c(l, f) {
    var h = f(), E = n({ inst: { value: h, getSnapshot: f } }), _ = E[0].inst, O = E[1];
    return u(function() {
      _.value = h, _.getSnapshot = f, i(_) && O({ inst: _ });
    }, [l, h, f]), o(function() {
      return i(_) && O({ inst: _ }), l(function() {
        i(_) && O({ inst: _ });
      });
    }, [l]), s(h), h;
  }
  function i(l) {
    var f = l.getSnapshot;
    l = l.value;
    try {
      var h = f();
      return !r(l, h);
    } catch {
      return !0;
    }
  }
  function d(l, f) {
    return f();
  }
  var a = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : c;
  return k.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : a, k;
}
var q = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ce;
function Fe() {
  return ce || (ce = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(S) {
      {
        for (var p = arguments.length, y = new Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
          y[v - 1] = arguments[v];
        n("error", S, y);
      }
    }
    function n(S, p, y) {
      {
        var v = t.ReactDebugCurrentFrame, m = v.getStackAddendum();
        m !== "" && (p += "%s", y = y.concat([m]));
        var b = y.map(function(w) {
          return String(w);
        });
        b.unshift("Warning: " + p), Function.prototype.apply.call(console[S], console, b);
      }
    }
    function o(S, p) {
      return S === p && (S !== 0 || 1 / S === 1 / p) || S !== S && p !== p;
    }
    var u = typeof Object.is == "function" ? Object.is : o, s = e.useState, c = e.useEffect, i = e.useLayoutEffect, d = e.useDebugValue, a = !1, l = !1;
    function f(S, p, y) {
      a || e.startTransition !== void 0 && (a = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var v = p();
      if (!l) {
        var m = p();
        u(v, m) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), l = !0);
      }
      var b = s({
        inst: {
          value: v,
          getSnapshot: p
        }
      }), w = b[0].inst, C = b[1];
      return i(function() {
        w.value = v, w.getSnapshot = p, h(w) && C({
          inst: w
        });
      }, [S, v, p]), c(function() {
        h(w) && C({
          inst: w
        });
        var N = function() {
          h(w) && C({
            inst: w
          });
        };
        return S(N);
      }, [S]), d(v), v;
    }
    function h(S) {
      var p = S.getSnapshot, y = S.value;
      try {
        var v = p();
        return !u(y, v);
      } catch {
        return !0;
      }
    }
    function E(S, p, y) {
      return p();
    }
    var _ = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", O = !_, R = O ? E : f, T = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : R;
    q.useSyncExternalStore = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), q;
}
var ie;
function be() {
  return ie || (ie = 1, process.env.NODE_ENV === "production" ? g.exports = Ge() : g.exports = Fe()), g.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function He() {
  if (ae)
    return H;
  ae = 1;
  var e = W, t = be();
  function r(d, a) {
    return d === a && (d !== 0 || 1 / d === 1 / a) || d !== d && a !== a;
  }
  var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
  return H.useSyncExternalStoreWithSelector = function(d, a, l, f, h) {
    var E = u(null);
    if (E.current === null) {
      var _ = { hasValue: !1, value: null };
      E.current = _;
    } else
      _ = E.current;
    E = c(function() {
      function R(v) {
        if (!T) {
          if (T = !0, S = v, v = f(v), h !== void 0 && _.hasValue) {
            var m = _.value;
            if (h(m, v))
              return p = m;
          }
          return p = v;
        }
        if (m = p, n(S, v))
          return m;
        var b = f(v);
        return h !== void 0 && h(m, b) ? m : (S = v, p = b);
      }
      var T = !1, S, p, y = l === void 0 ? null : l;
      return [function() {
        return R(a());
      }, y === null ? void 0 : function() {
        return R(y());
      }];
    }, [a, l, f, h]);
    var O = o(d, E[0], E[1]);
    return s(function() {
      _.hasValue = !0, _.value = O;
    }, [O]), i(O), O;
  }, H;
}
var $ = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var le;
function ke() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = W, t = be();
    function r(a, l) {
      return a === l && (a !== 0 || 1 / a === 1 / l) || a !== a && l !== l;
    }
    var n = typeof Object.is == "function" ? Object.is : r, o = t.useSyncExternalStore, u = e.useRef, s = e.useEffect, c = e.useMemo, i = e.useDebugValue;
    function d(a, l, f, h, E) {
      var _ = u(null), O;
      _.current === null ? (O = {
        hasValue: !1,
        value: null
      }, _.current = O) : O = _.current;
      var R = c(function() {
        var y = !1, v, m, b = function(A) {
          if (!y) {
            y = !0, v = A;
            var P = h(A);
            if (E !== void 0 && O.hasValue) {
              var K = O.value;
              if (E(K, P))
                return m = K, K;
            }
            return m = P, P;
          }
          var xe = v, G = m;
          if (n(xe, A))
            return G;
          var F = h(A);
          return E !== void 0 && E(G, F) ? G : (v = A, m = F, F);
        }, w = f === void 0 ? null : f, C = function() {
          return b(l());
        }, N = w === null ? void 0 : function() {
          return b(w());
        };
        return [C, N];
      }, [l, f, h, E]), T = R[0], S = R[1], p = o(a, T, S);
      return s(function() {
        O.hasValue = !0, O.value = p;
      }, [p]), i(p), p;
    }
    $.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), $;
}
process.env.NODE_ENV === "production" ? z.exports = He() : z.exports = ke();
var qe = z.exports;
const $e = /* @__PURE__ */ Ke(qe), re = (() => (
  /* istanbul ignore next */
  he() ? Q : Oe
))(), Ue = W.use || ((e) => {
  if (e.status === "pending")
    throw e;
  if (e.status === "fulfilled")
    return e.value;
  throw e.status === "rejected" ? e.reason : (e.status = "pending", e.then(
    (t) => {
      e.status = "fulfilled", e.value = t;
    },
    (t) => {
      e.status = "rejected", e.reason = t;
    }
  ), e);
}), { useSyncExternalStoreWithSelector: Ye } = $e, ze = (e, t) => {
  const r = t.suspendWhen, n = t.errorWhen, [{ shouldSuspend: o }, u] = ye(() => ({
    shouldSuspend: r(e.state)
  })), s = D(e.state), c = D(null), i = D(null), d = () => We(
    e.state$.pipe(
      B(e.state),
      M((a) => !r(e.state) || !r(a))
    )
  ).then(() => {
    c.current = null, s.current = null;
  }).catch(() => {
    c.current = null, s.current = null;
  });
  if (o && !c.current && s.current && (c.current = d()), re(() => (i.current = e.state$.pipe(B(e.state)).subscribe((a) => {
    r(a) && (s.current = a, u({
      shouldSuspend: !0
    }));
  }), () => {
    var a;
    (a = i.current) == null || a.unsubscribe(), i.current = null;
  }), [e]), n(e.state))
    throw new Qe(e.state);
  c.current && Ue(c.current);
}, Je = (e, t) => {
  const r = V(e), n = (t == null ? void 0 : t.selector) ?? je, o = (t == null ? void 0 : t.listenWhen) ?? ee, u = (t == null ? void 0 : t.suspendWhen) ?? ge, s = (t == null ? void 0 : t.errorWhen) ?? Ie;
  ze(r, {
    suspendWhen: u,
    errorWhen: s
  });
  const c = X(
    (d) => {
      const a = r.state$.pipe(
        B(r.state),
        ue(),
        M((l) => o(l)),
        j((l) => n(l)),
        ue()
      ).subscribe(() => setTimeout(() => d(), 0));
      return () => {
        a.unsubscribe();
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r]
  ), i = Ye(
    c,
    () => r.state,
    () => r.state,
    n
  );
  return me(i), i;
};
class Qe extends Error {
  constructor(r, n) {
    super("useBlocSelector: errorWhen triggered a new render Error");
    oe(this, "name", "BlocRenderError");
    this.state = r;
  }
}
const dt = (e, t) => {
  const r = Je(e, t), n = V(e);
  return [r, n];
}, Re = (e, { listener: t, listenWhen: r }) => {
  const n = V(e), o = r ?? ee, u = D(null);
  re(() => (u.current = n.state$.pipe(
    B(n.state),
    // Emit the initial state.
    Z(),
    // Emit previous and current state as a pair.
    M(
      ([s, c]) => !_e.ignoreListeners && o(s, c)
    ),
    // Check condition.
    j(([s, c]) => t(n, c))
    // Call listener with current state.
  ).subscribe(), () => {
    var s;
    (s = u.current) == null || s.unsubscribe(), u.current = null;
  }), [n]);
}, pt = (e) => {
  const t = V(e), r = X(
    (o) => {
      const u = t.state$.subscribe(o);
      return () => u.unsubscribe();
    },
    [t]
  ), n = Ae(
    r,
    // The memoized subscription function.
    () => t.state,
    // A function to get the current state synchronously.
    () => t.state
    // A function to get the snapshot for server rendering (optional here).
  );
  return me(n), n;
}, vt = (e) => Le(e), St = (e, { listener: t, listenWhen: r }, n) => {
  const o = r ?? ee, u = D(null), s = D(null);
  Q(() => {
    var c;
    (c = s.current) == null || c.next(e);
  }, [e]), re(() => (s.current = new Me(), u.current = s.current.pipe(
    // Start with the initial prop value.
    B(e),
    // Emit the previous and current value as a pair.
    Z(),
    // Filter the emissions based on the listenWhen condition.
    M(([c, i]) => !_e.ignoreListeners && o(c, i)),
    // Execute the listener function with the current prop value.
    j(([c, i]) => t(i))
  ).subscribe(), () => {
    var c, i;
    (c = u.current) == null || c.unsubscribe(), u.current = null, (i = s.current) == null || i.complete(), s.current = null;
  }), n ?? []);
};
function ht({
  bloc: e,
  listener: t,
  listenWhen: r,
  children: n
}) {
  return Re(e, {
    listener: t,
    listenWhen: r
  }), /* @__PURE__ */ Ce(Se, { children: [
    " ",
    n,
    " "
  ] });
}
var ne = () => L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner.current, fe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xe = () => {
  if (process.env.NODE_ENV === "production")
    return !1;
  const e = L.useRef(void 0), t = L.useMemo(() => Number(L.version.split(".")[0]), [L.version]);
  if (isNaN(t) || t < 18)
    return !1;
  if (e.current === void 0) {
    let r = ne();
    for (; r && r.return; )
      r = r.return, (r.type === fe || r.elementType === fe) && (e.current = !0);
  }
  return !!e.current;
}, de = /* @__PURE__ */ new WeakSet();
function Ze(e, t) {
  const r = ne();
  L.useEffect(() => {
    if (!de.has(r)) {
      de.add(r), e();
      return;
    }
    return e();
  }, t);
}
var pe = /* @__PURE__ */ new WeakSet();
function et(e, t) {
  return L.useMemo(() => {
    const r = ne();
    return pe.has(r) ? e() : (pe.add(r), null);
  }, t);
}
function tt(e, t) {
  var r;
  const n = Xe() && process.env.NODE_ENV !== "production", o = n ? et : L.useMemo, u = n ? Ze : L.useEffect, [s, c] = (r = o(() => e(), t)) != null ? r : [
    null,
    () => null
  ];
  return u(() => c, t), s;
}
const I = /* @__PURE__ */ new WeakSet(), De = ({
  children: e,
  classDef: t,
  dependencies: r = [],
  disposeTime: n = 5 * 1e3,
  create: o,
  onMount: u,
  onUnmount: s
}) => {
  const c = typeof o == "function", i = () => {
    const f = c ? o() : o;
    return c && setTimeout(() => {
      I.has(f) || s == null || s(f);
    }, n), f;
  }, d = tt(() => {
    const f = i();
    return [
      f,
      () => {
        s == null || s(f);
      }
    ];
  }, r);
  Q(() => {
    const f = d;
    return u == null || u(f), !I.has(f) && c && I.add(f), () => {
      I.delete(f);
    };
  }, [d]);
  const a = U(te), l = Y(() => a.get(t.name) ?? Pe(a, t), []);
  return we(
    l.Provider,
    {
      value: {
        instance: d
      }
    },
    e
  );
}, Te = ({
  providers: e,
  children: t
}) => {
  const r = Y(() => e.map((o) => ({ children: u }) => /* @__PURE__ */ x(o, { children: u })), []), n = Y(() => r.reduce(
    (o, u) => ({ children: s }) => /* @__PURE__ */ x(o, { children: /* @__PURE__ */ x(u, { children: s }) }),
    // eslint-disable-next-line react/jsx-no-useless-fragment
    ({ children: o }) => /* @__PURE__ */ x(Se, { children: o })
  ), [r]);
  return /* @__PURE__ */ x(n, { children: t });
}, _t = ({
  bloc: e,
  children: t,
  dependencies: r = [],
  create: n,
  onMount: o
}) => De({
  classDef: e,
  create: n,
  onMount: o,
  onUnmount: (u) => {
    typeof n == "function" && u.close();
  },
  dependencies: r,
  children: t
}), Et = ({
  providers: e,
  children: t
}) => Te({
  providers: e,
  children: t
});
function J(e, t) {
  return J = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, J(e, t);
}
function rt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, J(e, t);
}
var nt = function(t, r) {
  return t === void 0 && (t = []), r === void 0 && (r = []), t.length !== r.length || t.some(function(n, o) {
    return !Object.is(n, r[o]);
  });
}, ve = {
  error: null
}, ot = /* @__PURE__ */ function(e) {
  rt(t, e);
  function t() {
    for (var n, o = arguments.length, u = new Array(o), s = 0; s < o; s++)
      u[s] = arguments[s];
    return n = e.call.apply(e, [this].concat(u)) || this, n.state = ve, n.resetErrorBoundary = function() {
      for (var c, i = arguments.length, d = new Array(i), a = 0; a < i; a++)
        d[a] = arguments[a];
      n.props.onReset == null || (c = n.props).onReset.apply(c, d), n.reset();
    }, n;
  }
  t.getDerivedStateFromError = function(o) {
    return {
      error: o
    };
  };
  var r = t.prototype;
  return r.reset = function() {
    this.setState(ve);
  }, r.componentDidCatch = function(o, u) {
    var s, c;
    (s = (c = this.props).onError) == null || s.call(c, o, u);
  }, r.componentDidUpdate = function(o, u) {
    var s = this.state.error, c = this.props.resetKeys;
    if (s !== null && u.error !== null && nt(o.resetKeys, c)) {
      var i, d;
      (i = (d = this.props).onResetKeysChange) == null || i.call(d, o.resetKeys, c), this.reset();
    }
  }, r.render = function() {
    var o = this.state.error, u = this.props, s = u.fallbackRender, c = u.FallbackComponent, i = u.fallback;
    if (o !== null) {
      var d = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (/* @__PURE__ */ L.isValidElement(i))
        return i;
      if (typeof s == "function")
        return s(d);
      if (c)
        return /* @__PURE__ */ L.createElement(c, d);
      throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
    }
    return this.props.children;
  }, t;
}(L.Component);
const Ot = ({
  bloc: e,
  fallback: t,
  onReset: r,
  children: n
}) => {
  const o = V(e), u = X(() => r(o), [o]);
  return /* @__PURE__ */ x(ot, { FallbackComponent: t, onReset: u, children: n });
}, mt = ({
  repository: e,
  children: t,
  dependencies: r = [],
  create: n,
  onMount: o,
  onUnmount: u
}) => De({
  classDef: e,
  dependencies: r,
  onMount: o,
  onUnmount: u,
  create: n,
  children: t
}), yt = ({
  providers: e,
  children: t
}) => Te({
  providers: e,
  children: t
});
function ut({
  bloc: e,
  builder: t,
  buildWhen: r
}) {
  const n = V(e), o = r ?? Ne, u = D(null), [s, c] = ye(() => n.state);
  return Oe(() => (u.current = n.state$.pipe(
    B(s),
    // Start with the initial state.
    Z(),
    // Emit the previous and current state as an array.
    M(([i, d]) => o(i, d)),
    // Filter based on `buildWhen`.
    j(([i, d]) => c(d))
    // Set the new state.
  ).subscribe(), () => {
    var i;
    (i = u.current) == null || i.unsubscribe(), u.current = null;
  }), []), t(s);
}
function wt({
  bloc: e,
  builder: t,
  buildWhen: r,
  listenWhen: n,
  listener: o
}) {
  return Re(e, {
    listener: o,
    listenWhen: n
  }), ut({
    bloc: e,
    builder: t,
    buildWhen: r
  });
}
const st = /* @__PURE__ */ new Map(), Lt = ({ children: e }) => we(
  te.Provider,
  {
    // Provide a new map for server-side or a shared map for client-side.
    value: he() ? /* @__PURE__ */ new Map() : st
  },
  e
);
export {
  ut as BlocBuilder,
  wt as BlocConsumer,
  Ot as BlocErrorBoundary,
  ht as BlocListener,
  _t as BlocProvider,
  Qe as BlocRenderError,
  Et as MultiBlocProvider,
  Te as MultiProvider,
  yt as MultiRepositoryProvider,
  De as Provider,
  mt as RepositoryProvider,
  Lt as RootProvider,
  st as clientContextMap,
  Pe as createCachedContext,
  Ne as defaultBuildWhen,
  Ie as defaultErrorWhen,
  ee as defaultListenWhen,
  je as defaultSelector,
  ge as defaultSuspendWhen,
  te as rootContext,
  Ue as use,
  dt as useBloc,
  V as useBlocInstance,
  Re as useBlocListener,
  Je as useBlocSelector,
  pt as useBlocValue,
  re as useIsomorphicLayoutEffect,
  St as usePropListener,
  Le as useProvider,
  vt as useRepository
};
