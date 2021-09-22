parcelRequire = function (e, r, t, n) {
  var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;

  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw c.code = "MODULE_NOT_FOUND", c
      }
      p.resolve = function (r) {
        return e[t][1][r] || r
      }, p.cache = {};
      var l = r[t] = new f.Module(t);
      e[t][0].call(l.exports, p, l, l.exports, this)
    }
    return r[t].exports;

    function p(e) {
      return f(p.resolve(e))
    }
  }

  f.isParcelRequire = !0, f.Module = function (e) {
    this.id = e, this.bundle = f, this.exports = {}
  }, f.modules = e, f.cache = r, f.parent = o, f.register = function (r, t) {
    e[r] = [function (e, r) {
      r.exports = t
    }, {}]
  };
  for (var c = 0; c < t.length; c++) try {
    f(t[c])
  } catch (e) {
    i || (i = e)
  }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function () {
      return l
    }) : n && (this[n] = l)
  }
  if (parcelRequire = f, i) throw i;
  return f
}({
  "g5IB": [function (require, module, exports) {

    var t, e, n = module.exports = {};

    function r() {
      throw new Error("setTimeout has not been defined")
    }

    function o() {
      throw new Error("clearTimeout has not been defined")
    }

    function i(e) {
      if (t === setTimeout) return setTimeout(e, 0);
      if ((t === r || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
      try {
        return t(e, 0)
      } catch (n) {
        try {
          return t.call(null, e, 0)
        } catch (n) {
          return t.call(this, e, 0)
        }
      }
    }

    function u(t) {
      if (e === clearTimeout) return clearTimeout(t);
      if ((e === o || !e) && clearTimeout) return e = clearTimeout, clearTimeout(t);
      try {
        return e(t)
      } catch (n) {
        try {
          return e.call(null, t)
        } catch (n) {
          return e.call(this, t)
        }
      }
    }

    !function () {
      try {
        t = "function" == typeof setTimeout ? setTimeout : r
      } catch (n) {
        t = r
      }
      try {
        e = "function" == typeof clearTimeout ? clearTimeout : o
      } catch (n) {
        e = o
      }
    }();
    var c, s = [], l = !1, a = -1;

    function f() {
      l && c && (l = !1, c.length ? s = c.concat(s) : a = -1, s.length && h())
    }

    function h() {
      if (!l) {
        var t = i(f);
        l = !0;
        for (var e = s.length; e;) {
          for (c = s, s = []; ++a < e;) c && c[a].run();
          a = -1, e = s.length
        }
        c = null, l = !1, u(t)
      }
    }

    function m(t, e) {
      this.fun = t, this.array = e
    }

    function p() {
    }

    n.nextTick = function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      s.push(new m(t, e)), 1 !== s.length || l || i(h)
    }, m.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, n.title = "browser", n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, n.listeners = function (t) {
      return []
    }, n.binding = function (t) {
      throw new Error("process.binding is not supported")
    }, n.cwd = function () {
      return "/"
    }, n.chdir = function (t) {
      throw new Error("process.chdir is not supported")
    }, n.umask = function () {
      return 0
    };
  }, {}], "HlZQ": [function (require, module, exports) {
    var global = arguments[3];
    var process = require("process");
    var define;
    var e, t = arguments[3], n = require("process");
    !function (e, t) {
      "use strict";
      "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
      } : t(e)
    }("undefined" != typeof window ? window : this, function (t, n) {
      "use strict";
      var r = [], i = Object.getPrototypeOf, o = r.slice, a = r.flat ? function (e) {
          return r.flat.call(e)
        } : function (e) {
          return r.concat.apply([], e)
        }, s = r.push, u = r.indexOf, l = {}, c = l.toString, f = l.hasOwnProperty, p = f.toString, d = p.call(Object),
        h = {}, g = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }, v = function (e) {
          return null != e && e === e.window
        }, y = t.document, m = {type: !0, src: !0, nonce: !0, noModule: !0};

      function x(e, t, n) {
        var r, i, o = (n = n || y).createElement("script");
        if (o.text = e, t) for (r in m) (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
      }

      function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e
      }

      var w = function (e, t) {
        return new w.fn.init(e, t)
      };

      function T(e) {
        var t = !!e && "length" in e && e.length, n = b(e);
        return !g(e) && !v(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
      }

      w.fn = w.prototype = {
        jquery: "3.6.0", constructor: w, length: 0, toArray: function () {
          return o.call(this)
        }, get: function (e) {
          return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
          var t = w.merge(this.constructor(), e);
          return t.prevObject = this, t
        }, each: function (e) {
          return w.each(this, e)
        }, map: function (e) {
          return this.pushStack(w.map(this, function (t, n) {
            return e.call(t, n, t)
          }))
        }, slice: function () {
          return this.pushStack(o.apply(this, arguments))
        }, first: function () {
          return this.eq(0)
        }, last: function () {
          return this.eq(-1)
        }, even: function () {
          return this.pushStack(w.grep(this, function (e, t) {
            return (t + 1) % 2
          }))
        }, odd: function () {
          return this.pushStack(w.grep(this, function (e, t) {
            return t % 2
          }))
        }, eq: function (e) {
          var t = this.length, n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
          return this.prevObject || this.constructor()
        }, push: s, sort: r.sort, splice: r.splice
      }, w.extend = w.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || g(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (w.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || w.isPlainObject(n) ? n : {}, i = !1, a[t] = w.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
      }, w.extend({
        expando: "jQuery" + ("3.6.0" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
          throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
          var t, n;
          return !(!e || "[object Object]" !== c.call(e)) && (!(t = i(e)) || "function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d)
        }, isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0
        }, globalEval: function (e, t, n) {
          x(e, {nonce: t && t.nonce}, n)
        }, each: function (e, t) {
          var n, r = 0;
          if (T(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e
        }, makeArray: function (e, t) {
          var n = t || [];
          return null != e && (T(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n
        }, inArray: function (e, t, n) {
          return null == t ? -1 : u.call(t, e, n)
        }, merge: function (e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
          return e.length = i, e
        }, grep: function (e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
          return r
        }, map: function (e, t, n) {
          var r, i, o = 0, s = [];
          if (T(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i); else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
          return a(s)
        }, guid: 1, support: h
      }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = r[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
      });
      var C = function (e) {
        var t, n, r, i, o, a, s, u, l, c, f, p, d, h, g, v, y, m, x, b = "sizzle" + 1 * new Date, w = e.document, T = 0,
          C = 0, E = ue(), S = ue(), k = ue(), A = ue(), N = function (e, t) {
            return e === t && (f = !0), 0
          }, j = {}.hasOwnProperty, D = [], q = D.pop, L = D.push, H = D.push, O = D.slice, P = function (e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1
          },
          R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
          W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
          F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
          B = new RegExp(M + "+", "g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
          _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
          U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
            ID: new RegExp("^#(" + I + ")"),
            CLASS: new RegExp("^\\.(" + I + ")"),
            TAG: new RegExp("^(" + I + "|[*])"),
            ATTR: new RegExp("^" + W),
            PSEUDO: new RegExp("^" + F),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + R + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
          }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/,
          te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), ne = function (e, t) {
            var n = "0x" + e.slice(1) - 65536;
            return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
          }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function (e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
          }, oe = function () {
            p()
          }, ae = be(function (e) {
            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
          }, {dir: "parentNode", next: "legend"});
        try {
          H.apply(D = O.call(w.childNodes), w.childNodes), D[w.childNodes.length].nodeType
        } catch (Se) {
          H = {
            apply: D.length ? function (e, t) {
              L.apply(e, O.call(t))
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) ;
              e.length = n - 1
            }
          }
        }

        function se(e, t, r, i) {
          var o, s, l, c, f, h, y, m = t && t.ownerDocument, w = t ? t.nodeType : 9;
          if (r = r || [], "string" != typeof e || !e || 1 !== w && 9 !== w && 11 !== w) return r;
          if (!i && (p(t), t = t || d, g)) {
            if (11 !== w && (f = Z.exec(e))) if (o = f[1]) {
              if (9 === w) {
                if (!(l = t.getElementById(o))) return r;
                if (l.id === o) return r.push(l), r
              } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r
            } else {
              if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return H.apply(r, t.getElementsByClassName(o)), r
            }
            if (n.qsa && !A[e + " "] && (!v || !v.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
              if (y = e, m = t, 1 === w && (U.test(e) || z.test(e))) {
                for ((m = ee.test(e) && ye(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(re, ie) : t.setAttribute("id", c = b)), s = (h = a(e)).length; s--;) h[s] = (c ? "#" + c : ":scope") + " " + xe(h[s]);
                y = h.join(",")
              }
              try {
                return H.apply(r, m.querySelectorAll(y)), r
              } catch (T) {
                A(e, !0)
              } finally {
                c === b && t.removeAttribute("id")
              }
            }
          }
          return u(e.replace($, "$1"), t, r, i)
        }

        function ue() {
          var e = [];
          return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i
          }
        }

        function le(e) {
          return e[b] = !0, e
        }

        function ce(e) {
          var t = d.createElement("fieldset");
          try {
            return !!e(t)
          } catch (Se) {
            return !1
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
          }
        }

        function fe(e, t) {
          for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t
        }

        function pe(e, t) {
          var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
          if (r) return r;
          if (n) for (; n = n.nextSibling;) if (n === t) return -1;
          return e ? 1 : -1
        }

        function de(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e
          }
        }

        function he(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e
          }
        }

        function ge(e) {
          return function (t) {
            return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e
          }
        }

        function ve(e) {
          return le(function (t) {
            return t = +t, le(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
            })
          })
        }

        function ye(e) {
          return e && void 0 !== e.getElementsByTagName && e
        }

        for (t in n = se.support = {}, o = se.isXML = function (e) {
          var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
          return !Y.test(t || n && n.nodeName || "HTML")
        }, p = se.setDocument = function (e) {
          var t, i, a = e ? e.ownerDocument || e : w;
          return a != d && 9 === a.nodeType && a.documentElement ? (h = (d = a).documentElement, g = !o(d), w != d && (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", oe, !1) : i.attachEvent && i.attachEvent("onunload", oe)), n.scope = ce(function (e) {
            return h.appendChild(e).appendChild(d.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
          }), n.attributes = ce(function (e) {
            return e.className = "i", !e.getAttribute("className")
          }), n.getElementsByTagName = ce(function (e) {
            return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length
          }), n.getElementsByClassName = K.test(d.getElementsByClassName), n.getById = ce(function (e) {
            return h.appendChild(e).id = b, !d.getElementsByName || !d.getElementsByName(b).length
          }), n.getById ? (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              return e.getAttribute("id") === t
            }
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n = t.getElementById(e);
              return n ? [n] : []
            }
          }) : (r.filter.ID = function (e) {
            var t = e.replace(te, ne);
            return function (e) {
              var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
              return n && n.value === t
            }
          }, r.find.ID = function (e, t) {
            if (void 0 !== t.getElementById && g) {
              var n, r, i, o = t.getElementById(e);
              if (o) {
                if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                for (i = t.getElementsByName(e), r = 0; o = i[r++];) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
              }
              return []
            }
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
          } : function (e, t) {
            var n, r = [], i = 0, o = t.getElementsByTagName(e);
            if ("*" === e) {
              for (; n = o[i++];) 1 === n.nodeType && r.push(n);
              return r
            }
            return o
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
          }, y = [], v = [], (n.qsa = K.test(d.querySelectorAll)) && (ce(function (e) {
            var t;
            h.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (t = d.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
          }), ce(function (e) {
            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
            var t = d.createElement("input");
            t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), h.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
          })), (n.matchesSelector = K.test(m = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
            n.disconnectedMatch = m.call(e, "*"), m.call(e, "[s!='']:x"), y.push("!=", F)
          }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = K.test(h.compareDocumentPosition), x = t || K.test(h.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) if (t === e) return !0;
            return !1
          }, N = t ? function (e, t) {
            if (e === t) return f = !0, 0;
            var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return r || (1 & (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == d || e.ownerDocument == w && x(w, e) ? -1 : t == d || t.ownerDocument == w && x(w, t) ? 1 : c ? P(c, e) - P(c, t) : 0 : 4 & r ? -1 : 1)
          } : function (e, t) {
            if (e === t) return f = !0, 0;
            var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
            if (!i || !o) return e == d ? -1 : t == d ? 1 : i ? -1 : o ? 1 : c ? P(c, e) - P(c, t) : 0;
            if (i === o) return pe(e, t);
            for (n = e; n = n.parentNode;) a.unshift(n);
            for (n = t; n = n.parentNode;) s.unshift(n);
            for (; a[r] === s[r];) r++;
            return r ? pe(a[r], s[r]) : a[r] == w ? -1 : s[r] == w ? 1 : 0
          }, d) : d
        }, se.matches = function (e, t) {
          return se(e, null, null, t)
        }, se.matchesSelector = function (e, t) {
          if (p(e), n.matchesSelector && g && !A[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t))) try {
            var r = m.call(e, t);
            if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
          } catch (Se) {
            A(t, !0)
          }
          return se(t, d, null, [e]).length > 0
        }, se.contains = function (e, t) {
          return (e.ownerDocument || e) != d && p(e), x(e, t)
        }, se.attr = function (e, t) {
          (e.ownerDocument || e) != d && p(e);
          var i = r.attrHandle[t.toLowerCase()], o = i && j.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
          return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }, se.escape = function (e) {
          return (e + "").replace(re, ie)
        }, se.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e)
        }, se.uniqueSort = function (e) {
          var t, r = [], i = 0, o = 0;
          if (f = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(N), f) {
            for (; t = e[o++];) t === e[o] && (i = r.push(o));
            for (; i--;) e.splice(r[i], 1)
          }
          return c = null, e
        }, i = se.getText = function (e) {
          var t, n = "", r = 0, o = e.nodeType;
          if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
            } else if (3 === o || 4 === o) return e.nodeValue
          } else for (; t = e[r++];) n += i(t);
          return n
        }, (r = se.selectors = {
          cacheLength: 50,
          createPseudo: le,
          match: G,
          attrHandle: {},
          find: {},
          relative: {
            ">": {dir: "parentNode", first: !0},
            " ": {dir: "parentNode"},
            "+": {dir: "previousSibling", first: !0},
            "~": {dir: "previousSibling"}
          },
          preFilter: {
            ATTR: function (e) {
              return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
            }, CHILD: function (e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
            }, PSEUDO: function (e) {
              var t, n = !e[6] && e[2];
              return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
            }
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(te, ne).toLowerCase();
              return "*" === e ? function () {
                return !0
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
              }
            }, CLASS: function (e) {
              var t = E[e + " "];
              return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && E(e, function (e) {
                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
              })
            }, ATTR: function (e, t, n) {
              return function (r) {
                var i = se.attr(r, e);
                return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
              }
            }, CHILD: function (e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
              return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode
              } : function (t, n, u) {
                var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", v = t.parentNode,
                  y = s && t.nodeName.toLowerCase(), m = !u && !s, x = !1;
                if (v) {
                  if (o) {
                    for (; g;) {
                      for (p = t; p = p[g];) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                      h = g = "only" === e && !h && "nextSibling"
                    }
                    return !0
                  }
                  if (h = [a ? v.firstChild : v.lastChild], a && m) {
                    for (x = (d = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]) && l[2], p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();) if (1 === p.nodeType && ++x && p === t) {
                      c[e] = [T, d, x];
                      break
                    }
                  } else if (m && (x = d = (l = (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] === T && l[1]), !1 === x) for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]), p !== t));) ;
                  return (x -= i) === r || x % r == 0 && x / r >= 0
                }
              }
            }, PSEUDO: function (e, t) {
              var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
              return i[b] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                for (var r, o = i(e, t), a = o.length; a--;) e[r = P(e, o[a])] = !(n[r] = o[a])
              }) : function (e) {
                return i(e, 0, n)
              }) : i
            }
          },
          pseudos: {
            not: le(function (e) {
              var t = [], n = [], r = s(e.replace($, "$1"));
              return r[b] ? le(function (e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o))
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
              }
            }), has: le(function (e) {
              return function (t) {
                return se(e, t).length > 0
              }
            }), contains: le(function (e) {
              return e = e.replace(te, ne), function (t) {
                return (t.textContent || i(t)).indexOf(e) > -1
              }
            }), lang: le(function (e) {
              return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(), function (t) {
                var n;
                do {
                  if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
            }), target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id
            }, root: function (e) {
              return e === h
            }, focus: function (e) {
              return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
            }, enabled: ge(!1), disabled: ge(!0), checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            }, empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
              return !0
            }, parent: function (e) {
              return !r.pseudos.empty(e)
            }, header: function (e) {
              return J.test(e.nodeName)
            }, input: function (e) {
              return Q.test(e.nodeName)
            }, button: function (e) {
              var t = e.nodeName.toLowerCase();
              return "input" === t && "button" === e.type || "button" === t
            }, text: function (e) {
              var t;
              return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            }, first: ve(function () {
              return [0]
            }), last: ve(function (e, t) {
              return [t - 1]
            }), eq: ve(function (e, t, n) {
              return [n < 0 ? n + t : n]
            }), even: ve(function (e, t) {
              for (var n = 0; n < t; n += 2) e.push(n);
              return e
            }), odd: ve(function (e, t) {
              for (var n = 1; n < t; n += 2) e.push(n);
              return e
            }), lt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
              return e
            }), gt: ve(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
              return e
            })
          }
        }).pseudos.nth = r.pseudos.eq, {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[t] = de(t);
        for (t in {submit: !0, reset: !0}) r.pseudos[t] = he(t);

        function me() {
        }

        function xe(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
          return r
        }

        function be(e, t, n) {
          var r = t.dir, i = t.next, o = i || r, a = n && "parentNode" === o, s = C++;
          return t.first ? function (t, n, i) {
            for (; t = t[r];) if (1 === t.nodeType || a) return e(t, n, i);
            return !1
          } : function (t, n, u) {
            var l, c, f, p = [T, s];
            if (u) {
              for (; t = t[r];) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
            } else for (; t = t[r];) if (1 === t.nodeType || a) if (c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t; else {
              if ((l = c[o]) && l[0] === T && l[1] === s) return p[2] = l[2];
              if (c[o] = p, p[2] = e(t, n, u)) return !0
            }
            return !1
          }
        }

        function we(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
            return !0
          } : e[0]
        }

        function Te(e, t, n, r, i) {
          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
          return a
        }

        function Ce(e, t, n, r, i, o) {
          return r && !r[b] && (r = Ce(r)), i && !i[b] && (i = Ce(i, o)), le(function (o, a, s, u) {
            var l, c, f, p = [], d = [], h = a.length, g = o || function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n
              }(t || "*", s.nodeType ? [s] : s, []), v = !e || !o && t ? g : Te(g, p, e, s, u),
              y = n ? i || (o ? e : h || r) ? [] : a : v;
            if (n && n(v, y, s, u), r) for (l = Te(y, d), r(l, [], s, u), c = l.length; c--;) (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
            if (o) {
              if (i || e) {
                if (i) {
                  for (l = [], c = y.length; c--;) (f = y[c]) && l.push(v[c] = f);
                  i(null, y = [], l, u)
                }
                for (c = y.length; c--;) (f = y[c]) && (l = i ? P(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
              }
            } else y = Te(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
          })
        }

        function Ee(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], u = a ? 1 : 0, c = be(function (e) {
            return e === t
          }, s, !0), f = be(function (e) {
            return P(t, e) > -1
          }, s, !0), p = [function (e, n, r) {
            var i = !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
            return t = null, i
          }]; u < o; u++) if (n = r.relative[e[u].type]) p = [be(we(p), n)]; else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
              for (i = ++u; i < o && !r.relative[e[i].type]; i++) ;
              return Ce(u > 1 && we(p), u > 1 && xe(e.slice(0, u - 1).concat({value: " " === e[u - 2].type ? "*" : ""})).replace($, "$1"), n, u < i && Ee(e.slice(u, i)), i < o && Ee(e = e.slice(i)), i < o && xe(e))
            }
            p.push(n)
          }
          return we(p)
        }

        return me.prototype = r.filters = r.pseudos, r.setFilters = new me, a = se.tokenize = function (e, t) {
          var n, i, o, a, s, u, l, c = S[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s;) {
            for (a in n && !(i = _.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
              value: n,
              type: i[0].replace($, " ")
            }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
              value: n,
              type: a,
              matches: i
            }), s = s.slice(n.length));
            if (!n) break
          }
          return t ? s.length : s ? se.error(e) : S(e, u).slice(0)
        }, s = se.compile = function (e, t) {
          var n, i = [], o = [], s = k[e + " "];
          if (!s) {
            for (t || (t = a(e)), n = t.length; n--;) (s = Ee(t[n]))[b] ? i.push(s) : o.push(s);
            (s = k(e, function (e, t) {
              var n = t.length > 0, i = e.length > 0, o = function (o, a, s, u, c) {
                var f, h, v, y = 0, m = "0", x = o && [], b = [], w = l, C = o || i && r.find.TAG("*", c),
                  E = T += null == w ? 1 : Math.random() || .1, S = C.length;
                for (c && (l = a == d || a || c); m !== S && null != (f = C[m]); m++) {
                  if (i && f) {
                    for (h = 0, a || f.ownerDocument == d || (p(f), s = !g); v = e[h++];) if (v(f, a || d, s)) {
                      u.push(f);
                      break
                    }
                    c && (T = E)
                  }
                  n && ((f = !v && f) && y--, o && x.push(f))
                }
                if (y += m, n && m !== y) {
                  for (h = 0; v = t[h++];) v(x, b, a, s);
                  if (o) {
                    if (y > 0) for (; m--;) x[m] || b[m] || (b[m] = q.call(u));
                    b = Te(b)
                  }
                  H.apply(u, b), c && !o && b.length > 0 && y + t.length > 1 && se.uniqueSort(u)
                }
                return c && (T = E, l = w), x
              };
              return n ? le(o) : o
            }(o, i))).selector = e
          }
          return s
        }, u = se.select = function (e, t, n, i) {
          var o, u, l, c, f, p = "function" == typeof e && e, d = !i && a(e = p.selector || e);
          if (n = n || [], 1 === d.length) {
            if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (l = u[0]).type && 9 === t.nodeType && g && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
              p && (t = t.parentNode), e = e.slice(u.shift().value.length)
            }
            for (o = G.needsContext.test(e) ? 0 : u.length; o-- && (l = u[o], !r.relative[c = l.type]);) if ((f = r.find[c]) && (i = f(l.matches[0].replace(te, ne), ee.test(u[0].type) && ye(t.parentNode) || t))) {
              if (u.splice(o, 1), !(e = i.length && xe(u))) return H.apply(n, i), n;
              break
            }
          }
          return (p || s(e, d))(i, t, !g, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ce(function (e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"))
        }), ce(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function (e) {
          return null == e.getAttribute("disabled")
        }) || fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
      }(t);
      w.find = C, w.expr = C.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = C.uniqueSort, w.text = C.getText, w.isXMLDoc = C.isXML, w.contains = C.contains, w.escapeSelector = C.escape;
      var E = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e)
        }
        return r
      }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      }, k = w.expr.match.needsContext;

      function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      }

      var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

      function j(e, t, n) {
        return g(t) ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n
        }) : t.nodeType ? w.grep(e, function (e) {
          return e === t !== n
        }) : "string" != typeof t ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n
        }) : w.filter(t, e, n)
      }

      w.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? w.find.matchesSelector(r, e) ? [r] : [] : w.find.matches(e, w.grep(t, function (e) {
          return 1 === e.nodeType
        }))
      }, w.fn.extend({
        find: function (e) {
          var t, n, r = this.length, i = this;
          if ("string" != typeof e) return this.pushStack(w(e).filter(function () {
            for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0
          }));
          for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
          return r > 1 ? w.uniqueSort(n) : n
        }, filter: function (e) {
          return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
          return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
          return !!j(this, "string" == typeof e && k.test(e) ? w(e) : e || [], !1).length
        }
      });
      var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      (w.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
          if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
          if (r[1]) {
            if (t = t instanceof w ? t[0] : t, w.merge(this, w.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : y, !0)), N.test(r[1]) && w.isPlainObject(t)) for (r in t) g(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this
          }
          return (i = y.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : g(e) ? void 0 !== n.ready ? n.ready(e) : e(w) : w.makeArray(e, this)
      }).prototype = w.fn, D = w(y);
      var L = /^(?:parents|prev(?:Until|All))/, H = {children: !0, contents: !0, next: !0, prev: !0};

      function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) ;
        return e
      }

      w.fn.extend({
        has: function (e) {
          var t = w(e, this), n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0
          })
        }, closest: function (e, t) {
          var n, r = 0, i = this.length, o = [], a = "string" != typeof e && w(e);
          if (!k.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
            o.push(n);
            break
          }
          return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o)
        }, index: function (e) {
          return e ? "string" == typeof e ? u.call(w(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
          return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))))
        }, addBack: function (e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
      }), w.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
          return E(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
          return E(e, "parentNode", n)
        }, next: function (e) {
          return O(e, "nextSibling")
        }, prev: function (e) {
          return O(e, "previousSibling")
        }, nextAll: function (e) {
          return E(e, "nextSibling")
        }, prevAll: function (e) {
          return E(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
          return E(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
          return E(e, "previousSibling", n)
        }, siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
          return S(e.firstChild)
        }, contents: function (e) {
          return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), w.merge([], e.childNodes))
        }
      }, function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = w.filter(r, i)), this.length > 1 && (H[e] || w.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i)
        }
      });
      var P = /[^\x20\t\r\n\f]+/g;

      function R(e) {
        return e
      }

      function M(e) {
        throw e
      }

      function I(e, t, n, r) {
        var i;
        try {
          e && g(i = e.promise) ? i.call(e).done(t).fail(n) : e && g(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
          n.apply(void 0, [e])
        }
      }

      w.Callbacks = function (e) {
        e = "string" == typeof e ? function (e) {
          var t = {};
          return w.each(e.match(P) || [], function (e, n) {
            t[n] = !0
          }), t
        }(e) : w.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function () {
          for (i = i || e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
          e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
        }, l = {
          add: function () {
            return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
              w.each(n, function (n, r) {
                g(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== b(r) && t(r)
              })
            }(arguments), n && !t && u()), this
          }, remove: function () {
            return w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
            }), this
          }, has: function (e) {
            return e ? w.inArray(e, o) > -1 : o.length > 0
          }, empty: function () {
            return o && (o = []), this
          }, disable: function () {
            return i = a = [], o = n = "", this
          }, disabled: function () {
            return !o
          }, lock: function () {
            return i = a = [], n || t || (o = n = ""), this
          }, locked: function () {
            return !!i
          }, fireWith: function (e, n) {
            return i || (n = [e, (n = n || []).slice ? n.slice() : n], a.push(n), t || u()), this
          }, fire: function () {
            return l.fireWith(this, arguments), this
          }, fired: function () {
            return !!r
          }
        };
        return l
      }, w.extend({
        Deferred: function (e) {
          var n = [["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2], ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]],
            r = "pending", i = {
              state: function () {
                return r
              }, always: function () {
                return o.done(arguments).fail(arguments), this
              }, catch: function (e) {
                return i.then(null, e)
              }, pipe: function () {
                var e = arguments;
                return w.Deferred(function (t) {
                  w.each(n, function (n, r) {
                    var i = g(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && g(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                    })
                  }), e = null
                }).promise()
              }, then: function (e, r, i) {
                var o = 0;

                function a(e, n, r, i) {
                  return function () {
                    var s = this, u = arguments, l = function () {
                      var t, l;
                      if (!(e < o)) {
                        if ((t = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        l = t && ("object" == typeof t || "function" == typeof t) && t.then, g(l) ? i ? l.call(t, a(o, n, R, i), a(o, n, M, i)) : (o++, l.call(t, a(o, n, R, i), a(o, n, M, i), a(o, n, R, n.notifyWith))) : (r !== R && (s = void 0, u = [t]), (i || n.resolveWith)(s, u))
                      }
                    }, c = i ? l : function () {
                      try {
                        l()
                      } catch (t) {
                        w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, c.stackTrace), e + 1 >= o && (r !== M && (s = void 0, u = [t]), n.rejectWith(s, u))
                      }
                    };
                    e ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), t.setTimeout(c))
                  }
                }

                return w.Deferred(function (t) {
                  n[0][3].add(a(0, t, g(i) ? i : R, t.notifyWith)), n[1][3].add(a(0, t, g(e) ? e : R)), n[2][3].add(a(0, t, g(r) ? r : M))
                }).promise()
              }, promise: function (e) {
                return null != e ? w.extend(e, i) : i
              }
            }, o = {};
          return w.each(n, function (e, t) {
            var a = t[2], s = t[5];
            i[t[1]] = a.add, s && a.add(function () {
              r = s
            }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function () {
              return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
            }, o[t[0] + "With"] = a.fireWith
          }), i.promise(o), e && e.call(o, o), o
        }, when: function (e) {
          var t = arguments.length, n = t, r = Array(n), i = o.call(arguments), a = w.Deferred(), s = function (e) {
            return function (n) {
              r[e] = this, i[e] = arguments.length > 1 ? o.call(arguments) : n, --t || a.resolveWith(r, i)
            }
          };
          if (t <= 1 && (I(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then))) return a.then();
          for (; n--;) I(i[n], s(n), a.reject);
          return a.promise()
        }
      });
      var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      w.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
      }, w.readyException = function (e) {
        t.setTimeout(function () {
          throw e
        })
      };
      var F = w.Deferred();

      function B() {
        y.removeEventListener("DOMContentLoaded", B), t.removeEventListener("load", B), w.ready()
      }

      w.fn.ready = function (e) {
        return F.then(e).catch(function (e) {
          w.readyException(e)
        }), this
      }, w.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
          (!0 === e ? --w.readyWait : w.isReady) || (w.isReady = !0, !0 !== e && --w.readyWait > 0 || F.resolveWith(y, [w]))
        }
      }), w.ready.then = F.then, "complete" === y.readyState || "loading" !== y.readyState && !y.documentElement.doScroll ? t.setTimeout(w.ready) : (y.addEventListener("DOMContentLoaded", B), t.addEventListener("load", B));
      var $ = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === b(n)) for (s in i = !0, n) $(e, t, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, g(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
          return l.call(w(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
      }, _ = /^-ms-/, z = /-([a-z])/g;

      function U(e, t) {
        return t.toUpperCase()
      }

      function X(e) {
        return e.replace(_, "ms-").replace(z, U)
      }

      var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };

      function G() {
        this.expando = w.expando + G.uid++
      }

      G.uid = 1, G.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t
        }, set: function (e, t, n) {
          var r, i = this.cache(e);
          if ("string" == typeof t) i[X(t)] = n; else for (r in t) i[X(r)] = t[r];
          return i
        }, get: function (e, t) {
          return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        }, access: function (e, t, n) {
          return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
          var n, r = e[this.expando];
          if (void 0 !== r) {
            if (void 0 !== t) {
              n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
              for (; n--;) delete r[t[n]]
            }
            (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
          }
        }, hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !w.isEmptyObject(t)
        }
      };
      var Y = new G, Q = new G, J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, K = /[A-Z]/g;

      function Z(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = function (e) {
              return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : J.test(e) ? JSON.parse(e) : e)
            }(n)
          } catch (i) {
          }
          Q.set(e, t, n)
        } else n = void 0;
        return n
      }

      w.extend({
        hasData: function (e) {
          return Q.hasData(e) || Y.hasData(e)
        }, data: function (e, t, n) {
          return Q.access(e, t, n)
        }, removeData: function (e, t) {
          Q.remove(e, t)
        }, _data: function (e, t, n) {
          return Y.access(e, t, n)
        }, _removeData: function (e, t) {
          Y.remove(e, t)
        }
      }), w.fn.extend({
        data: function (e, t) {
          var n, r, i, o = this[0], a = o && o.attributes;
          if (void 0 === e) {
            if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
              for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
              Y.set(o, "hasDataAttrs", !0)
            }
            return i
          }
          return "object" == typeof e ? this.each(function () {
            Q.set(this, e)
          }) : $(this, function (t) {
            var n;
            if (o && void 0 === t) return void 0 !== (n = Q.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
            this.each(function () {
              Q.set(this, e, t)
            })
          }, null, t, arguments.length > 1, null, !0)
        }, removeData: function (e) {
          return this.each(function () {
            Q.remove(this, e)
          })
        }
      }), w.extend({
        queue: function (e, t, n) {
          var r;
          if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, w.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
          t = t || "fx";
          var n = w.queue(e, t), r = n.length, i = n.shift(), o = w._queueHooks(e, t);
          "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            w.dequeue(e, t)
          }, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return Y.get(e, n) || Y.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n])
            })
          })
        }
      }), w.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? w.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = w.queue(this, e, t);
            w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e)
          })
        }, dequeue: function (e) {
          return this.each(function () {
            w.dequeue(this, e)
          })
        }, clearQueue: function (e) {
          return this.queue(e || "fx", [])
        }, promise: function (e, t) {
          var n, r = 1, i = w.Deferred(), o = this, a = this.length, s = function () {
            --r || i.resolveWith(o, [o])
          };
          for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          return s(), i.promise(t)
        }
      });
      var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"), ne = ["Top", "Right", "Bottom", "Left"],
        re = y.documentElement, ie = function (e) {
          return w.contains(e.ownerDocument, e)
        }, oe = {composed: !0};
      re.getRootNode && (ie = function (e) {
        return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      });
      var ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === w.css(e, "display")
      };

      function se(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
          } : function () {
            return w.css(e, t, "")
          }, u = s(), l = n && n[3] || (w.cssNumber[t] ? "" : "px"),
          c = e.nodeType && (w.cssNumber[t] || "px" !== l && +u) && te.exec(w.css(e, t));
        if (c && c[3] !== l) {
          for (u /= 2, l = l || c[3], c = +u || 1; a--;) w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
          c *= 2, w.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
      }

      var ue = {};

      function le(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = ue[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = w.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), ue[r] = i, i)
      }

      function ce(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = Y.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = le(r))) : "none" !== n && (i[o] = "none", Y.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
      }

      w.fn.extend({
        show: function () {
          return ce(this, !0)
        }, hide: function () {
          return ce(this)
        }, toggle: function (e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            ae(this) ? w(this).show() : w(this).hide()
          })
        }
      });
      var fe, pe, de = /^(?:checkbox|radio)$/i, he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i;
      fe = y.createDocumentFragment().appendChild(y.createElement("div")), (pe = y.createElement("input")).setAttribute("type", "radio"), pe.setAttribute("checked", "checked"), pe.setAttribute("name", "t"), fe.appendChild(pe), h.checkClone = fe.cloneNode(!0).cloneNode(!0).lastChild.checked, fe.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!fe.cloneNode(!0).lastChild.defaultValue, fe.innerHTML = "<option></option>", h.option = !!fe.lastChild;
      var ve = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };

      function ye(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? w.merge([e], n) : n
      }

      function me(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
      }

      ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td, h.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
      var xe = /<|&#?\w+;/;

      function be(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === b(o)) w.merge(p, o.nodeType ? [o] : o); else if (xe.test(o)) {
          for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), u = ve[s] || ve._default, a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2], c = u[0]; c--;) a = a.lastChild;
          w.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; o = p[d++];) if (r && w.inArray(o, r) > -1) i && i.push(o); else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && me(a), n) for (c = 0; o = a[c++];) ge.test(o.type || "") && n.push(o);
        return f
      }

      var we = /^([^.]*)(?:\.(.+)|)/;

      function Te() {
        return !0
      }

      function Ce() {
        return !1
      }

      function Ee(e, t) {
        return e === function () {
          try {
            return y.activeElement
          } catch (e) {
          }
        }() == ("focus" === t)
      }

      function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
          for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
          return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Ce; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
          return w().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = w.guid++)), e.each(function () {
          w.event.add(this, t, i, r, n)
        })
      }

      function ke(e, t, n) {
        n ? (Y.set(e, t, !1), w.event.add(e, t, {
          namespace: !1, handler: function (e) {
            var r, i, a = Y.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (a.length) (w.event.special[t] || {}).delegateType && e.stopPropagation(); else if (a = o.call(arguments), Y.set(this, t, a), r = n(this, t), this[t](), a !== (i = Y.get(this, t)) || r ? Y.set(this, t, !1) : i = {}, a !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
            } else a.length && (Y.set(this, t, {value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this)}), e.stopImmediatePropagation())
          }
        })) : void 0 === Y.get(e, t) && w.event.add(e, t, Te)
      }

      w.event = {
        global: {}, add: function (e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(e);
          if (V(e)) for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(re, i), n.guid || (n.guid = w.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function (t) {
            return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
          }), l = (t = (t || "").match(P) || [""]).length; l--;) d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = w.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = w.event.special[d] || {}, c = w.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && w.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), w.event.global[d] = !0)
        }, remove: function (e, t, n, r, i) {
          var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
          if (v && (u = v.events)) {
            for (l = (t = (t || "").match(P) || [""]).length; l--;) if (d = g = (s = we.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
              for (f = w.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
              a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || w.removeEvent(e, d, v.handle), delete u[d])
            } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
            w.isEmptyObject(u) && Y.remove(e, "handle events")
          }
        }, dispatch: function (e) {
          var t, n, r, i, o, a, s = new Array(arguments.length), u = w.event.fix(e),
            l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = w.event.special[u.type] || {};
          for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
          if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
            for (a = w.event.handlers.call(this, u, l), t = 0; (i = a[t++]) && !u.isPropagationStopped();) for (u.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, u), u.result
          }
        }, handlers: function (e, t) {
          var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
          if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({elem: l, handlers: o})
          }
          return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (e, t) {
          Object.defineProperty(w.Event.prototype, e, {
            enumerable: !0, configurable: !0, get: g(t) ? function () {
              if (this.originalEvent) return t(this.originalEvent)
            } : function () {
              if (this.originalEvent) return this.originalEvent[e]
            }, set: function (t) {
              Object.defineProperty(this, e, {enumerable: !0, configurable: !0, writable: !0, value: t})
            }
          })
        }, fix: function (e) {
          return e[w.expando] ? e : new w.Event(e)
        }, special: {
          load: {noBubble: !0}, click: {
            setup: function (e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && ke(t, "click", Te), !1
            }, trigger: function (e) {
              var t = this || e;
              return de.test(t.type) && t.click && A(t, "input") && ke(t, "click"), !0
            }, _default: function (e) {
              var t = e.target;
              return de.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
            }
          }, beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
          }
        }
      }, w.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
      }, w.Event = function (e, t) {
        if (!(this instanceof w.Event)) return new w.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Ce, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && w.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[w.expando] = !0
      }, w.Event.prototype = {
        constructor: w.Event,
        isDefaultPrevented: Ce,
        isPropagationStopped: Ce,
        isImmediatePropagationStopped: Ce,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
      }, w.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      }, w.event.addProp), w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        w.event.special[e] = {
          setup: function () {
            return ke(this, e, Ee), !1
          }, trigger: function () {
            return ke(this, e), !0
          }, _default: function () {
            return !0
          }, delegateType: t
        }
      }), w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function (e, t) {
        w.event.special[e] = {
          delegateType: t, bindType: t, handle: function (e) {
            var n, r = e.relatedTarget, i = e.handleObj;
            return r && (r === this || w.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n
          }
        }
      }), w.fn.extend({
        on: function (e, t, n, r) {
          return Se(this, e, t, n, r)
        }, one: function (e, t, n, r) {
          return Se(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
          var r, i;
          if (e && e.preventDefault && e.handleObj) return r = e.handleObj, w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
          if ("object" == typeof e) {
            for (i in e) this.off(i, t, e[i]);
            return this
          }
          return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Ce), this.each(function () {
            w.event.remove(this, e, n, t)
          })
        }
      });
      var Ae = /<script|<style|<link/i, Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

      function De(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0] || e
      }

      function qe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
      }

      function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
      }

      function He(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
          if (Y.hasData(e) && (s = Y.get(e).events)) for (i in Y.remove(t, "handle events"), s) for (n = 0, r = s[i].length; n < r; n++) w.event.add(t, i, s[i][n]);
          Q.hasData(e) && (o = Q.access(e), a = w.extend({}, o), Q.set(t, a))
        }
      }

      function Oe(e, t, n, r) {
        t = a(t);
        var i, o, s, u, l, c, f = 0, p = e.length, d = p - 1, v = t[0], y = g(v);
        if (y || p > 1 && "string" == typeof v && !h.checkClone && Ne.test(v)) return e.each(function (i) {
          var o = e.eq(i);
          y && (t[0] = v.call(this, i, o.html())), Oe(o, t, n, r)
        });
        if (p && (o = (i = be(t, e[0].ownerDocument, !1, e, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
          for (u = (s = w.map(ye(i, "script"), qe)).length; f < p; f++) l = i, f !== d && (l = w.clone(l, !0, !0), u && w.merge(s, ye(l, "script"))), n.call(e[f], l, f);
          if (u) for (c = s[s.length - 1].ownerDocument, w.map(s, Le), f = 0; f < u; f++) l = s[f], ge.test(l.type || "") && !Y.access(l, "globalEval") && w.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && !l.noModule && w._evalUrl(l.src, {nonce: l.nonce || l.getAttribute("nonce")}, c) : x(l.textContent.replace(je, ""), l, c))
        }
        return e
      }

      function Pe(e, t, n) {
        for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(ye(r)), r.parentNode && (n && ie(r) && me(ye(r, "script")), r.parentNode.removeChild(r));
        return e
      }

      w.extend({
        htmlPrefilter: function (e) {
          return e
        }, clone: function (e, t, n) {
          var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
          if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || w.isXMLDoc(e))) for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && de.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
          if (t) if (n) for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) He(o[r], a[r]); else He(e, c);
          return (a = ye(c, "script")).length > 0 && me(a, !f && ye(e, "script")), c
        }, cleanData: function (e) {
          for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++) if (V(n)) {
            if (t = n[Y.expando]) {
              if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
              n[Y.expando] = void 0
            }
            n[Q.expando] && (n[Q.expando] = void 0)
          }
        }
      }), w.fn.extend({
        detach: function (e) {
          return Pe(this, e, !0)
        }, remove: function (e) {
          return Pe(this, e)
        }, text: function (e) {
          return $(this, function (e) {
            return void 0 === e ? w.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
          }, null, e, arguments.length)
        }, append: function () {
          return Oe(this, arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || De(this, e).appendChild(e)
          })
        }, prepend: function () {
          return Oe(this, arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = De(this, e);
              t.insertBefore(e, t.firstChild)
            }
          })
        }, before: function () {
          return Oe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
          })
        }, after: function () {
          return Oe(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
          })
        }, empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ye(e, !1)), e.textContent = "");
          return this
        }, clone: function (e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return w.clone(this, e, t)
          })
        }, html: function (e) {
          return $(this, function (e) {
            var t = this[0] || {}, n = 0, r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ae.test(e) && !ve[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ye(t, !1)), t.innerHTML = e);
                t = 0
              } catch (i) {
              }
            }
            t && this.empty().append(e)
          }, null, e, arguments.length)
        }, replaceWith: function () {
          var e = [];
          return Oe(this, arguments, function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(ye(this)), n && n.replaceChild(t, this))
          }, e)
        }
      }), w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), w(i[a])[t](n), s.apply(r, n.get());
          return this.pushStack(r)
        }
      });
      var Re = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"), Me = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
      }, Ie = function (e, t, n) {
        var r, i, o = {};
        for (i in t) o[i] = e.style[i], e.style[i] = t[i];
        for (i in r = n.call(e), t) e.style[i] = o[i];
        return r
      }, We = new RegExp(ne.join("|"), "i");

      function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Me(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = w.style(e, t)), !h.pixelBoxStyles() && Re.test(a) && We.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
      }

      function Be(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
          }
        }
      }

      !function () {
        function e() {
          if (c) {
            l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(l).appendChild(c);
            var e = t.getComputedStyle(c);
            r = "1%" !== e.top, u = 12 === n(e.marginLeft), c.style.right = "60%", a = 36 === n(e.right), i = 36 === n(e.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), re.removeChild(l), c = null
          }
        }

        function n(e) {
          return Math.round(parseFloat(e))
        }

        var r, i, o, a, s, u, l = y.createElement("div"), c = y.createElement("div");
        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === c.style.backgroundClip, w.extend(h, {
          boxSizingReliable: function () {
            return e(), i
          }, pixelBoxStyles: function () {
            return e(), a
          }, pixelPosition: function () {
            return e(), r
          }, reliableMarginLeft: function () {
            return e(), u
          }, scrollboxSize: function () {
            return e(), o
          }, reliableTrDimensions: function () {
            var e, n, r, i;
            return null == s && (e = y.createElement("table"), n = y.createElement("tr"), r = y.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", re.appendChild(e).appendChild(n).appendChild(r), i = t.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, re.removeChild(e)), s
          }
        }))
      }();
      var $e = ["Webkit", "Moz", "ms"], _e = y.createElement("div").style, ze = {};

      function Ue(e) {
        var t = w.cssProps[e] || ze[e];
        return t || (e in _e ? e : ze[e] = function (e) {
          for (var t = e[0].toUpperCase() + e.slice(1), n = $e.length; n--;) if ((e = $e[n] + t) in _e) return e
        }(e) || e)
      }

      var Xe = /^(none|table(?!-c[ea]).+)/, Ve = /^--/,
        Ge = {position: "absolute", visibility: "hidden", display: "block"},
        Ye = {letterSpacing: "0", fontWeight: "400"};

      function Qe(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
      }

      function Je(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += w.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= w.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= w.css(e, "border" + ne[a] + "Width", !0, i))) : (u += w.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += w.css(e, "border" + ne[a] + "Width", !0, i) : s += w.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
      }

      function Ke(e, t, n) {
        var r = Me(e), i = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, r), o = i,
          a = Fe(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(a)) {
          if (!n) return a;
          a = "auto"
        }
        return (!h.boxSizingReliable() && i || !h.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === w.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === w.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Je(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
      }

      function Ze(e, t, n, r, i) {
        return new Ze.prototype.init(e, t, n, r, i)
      }

      w.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = Fe(e, "opacity");
                return "" === n ? "1" : n
              }
            }
          }
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i, o, a, s = X(t), u = Ve.test(t), l = e.style;
            if (u || (t = Ue(s)), a = w.cssHooks[t] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
            "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
          }
        },
        css: function (e, t, n, r) {
          var i, o, a, s = X(t);
          return Ve.test(t) || (t = Ue(s)), (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ye && (i = Ye[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
      }), w.each(["height", "width"], function (e, t) {
        w.cssHooks[t] = {
          get: function (e, n, r) {
            if (n) return !Xe.test(w.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ke(e, t, r) : Ie(e, Ge, function () {
              return Ke(e, t, r)
            })
          }, set: function (e, n, r) {
            var i, o = Me(e), a = !h.scrollboxSize() && "absolute" === o.position,
              s = (a || r) && "border-box" === w.css(e, "boxSizing", !1, o), u = r ? Je(e, t, r, s, o) : 0;
            return s && a && (u -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - .5)), u && (i = te.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = w.css(e, t)), Qe(0, n, u)
          }
        }
      }), w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {marginLeft: 0}, function () {
          return e.getBoundingClientRect().left
        })) + "px"
      }), w.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        w.cssHooks[e + t] = {
          expand: function (n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + ne[r] + t] = o[r] || o[r - 2] || o[0];
            return i
          }
        }, "margin" !== e && (w.cssHooks[e + t].set = Qe)
      }), w.fn.extend({
        css: function (e, t) {
          return $(this, function (e, t, n) {
            var r, i, o = {}, a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
              return o
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t)
          }, e, t, arguments.length > 1)
        }
      }), w.Tween = Ze, Ze.prototype = {
        constructor: Ze, init: function (e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || w.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (w.cssNumber[n] ? "" : "px")
        }, cur: function () {
          var e = Ze.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ze.propHooks._default.get(this)
        }, run: function (e) {
          var t, n = Ze.propHooks[this.prop];
          return this.options.duration ? this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ze.propHooks._default.set(this), this
        }
      }, Ze.prototype.init.prototype = Ze.prototype, Ze.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
          }, set: function (e) {
            w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !w.cssHooks[e.prop] && null == e.elem.style[Ue(e.prop)] ? e.elem[e.prop] = e.now : w.style(e.elem, e.prop, e.now + e.unit)
          }
        }
      }, Ze.propHooks.scrollTop = Ze.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
      }, w.easing = {
        linear: function (e) {
          return e
        }, swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
      }, w.fx = Ze.prototype.init, w.fx.step = {};
      var et, tt, nt = /^(?:toggle|show|hide)$/, rt = /queueHooks$/;

      function it() {
        tt && (!1 === y.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(it) : t.setTimeout(it, w.fx.interval), w.fx.tick())
      }

      function ot() {
        return t.setTimeout(function () {
          et = void 0
        }), et = Date.now()
      }

      function at(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
      }

      function st(e, t, n) {
        for (var r, i = (ut.tweeners[t] || []).concat(ut.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
      }

      function ut(e, t, n) {
        var r, i, o = 0, a = ut.prefilters.length, s = w.Deferred().always(function () {
          delete u.elem
        }), u = function () {
          if (i) return !1;
          for (var t = et || ot(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
          return s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        }, l = s.promise({
          elem: e,
          props: w.extend({}, t),
          opts: w.extend(!0, {specialEasing: {}, easing: w.easing._default}, n),
          originalProperties: t,
          originalOptions: n,
          startTime: et || ot(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
            return l.tweens.push(r), r
          },
          stop: function (t) {
            var n = 0, r = t ? l.tweens.length : 0;
            if (i) return this;
            for (i = !0; n < r; n++) l.tweens[n].run(1);
            return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
          }
        }), c = l.props;
        for (!function (e, t) {
          var n, r, i, o, a;
          for (n in e) if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = w.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i); else t[r] = i
        }(c, l.opts.specialEasing); o < a; o++) if (r = ut.prefilters[o].call(l, e, c, l.opts)) return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
        return w.map(c, st, l), g(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), w.fx.timer(w.extend(u, {
          elem: e,
          anim: l,
          queue: l.opts.queue
        })), l
      }

      w.Animation = w.extend(ut, {
        tweeners: {
          "*": [function (e, t) {
            var n = this.createTween(e, t);
            return se(n.elem, e, te.exec(t), n), n
          }]
        }, tweener: function (e, t) {
          g(e) ? (t = e, e = ["*"]) : e = e.match(P);
          for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ut.tweeners[n] = ut.tweeners[n] || [], ut.tweeners[n].unshift(t)
        }, prefilters: [function (e, t, n) {
          var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style,
            g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
          for (r in n.queue || (null == (a = w._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
          }), a.unqueued++, p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire()
            })
          })), t) if (i = t[r], nt.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0
            }
            d[r] = v && v[r] || w.style(e, r)
          }
          if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = w.css(e, "display")) && (l ? c = l : (ce([e], !0), l = e.style.display || l, c = w.css(e, "display"), ce([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === w.css(e, "float") && (u || (p.done(function () {
            h.display = l
          }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
          })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {display: l}), o && (v.hidden = !g), g && ce([e], !0), p.done(function () {
            for (r in g || ce([e]), Y.remove(e, "fxshow"), d) w.style(e, r, d[r])
          })), u = st(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }], prefilter: function (e, t) {
          t ? ut.prefilters.unshift(e) : ut.prefilters.push(e)
        }
      }), w.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? w.extend({}, e) : {
          complete: n || !n && t || g(e) && e,
          duration: e,
          easing: n && t || t && !g(t) && t
        };
        return w.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in w.fx.speeds ? r.duration = w.fx.speeds[r.duration] : r.duration = w.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue)
        }, r
      }, w.fn.extend({
        fadeTo: function (e, t, n, r) {
          return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
          var i = w.isEmptyObject(e), o = w.speed(t, n, r), a = function () {
            var t = ut(this, w.extend({}, e), o);
            (i || Y.get(this, "finish")) && t.stop(!0)
          };
          return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, t, n) {
          var r = function (e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function () {
            var t = !0, i = null != e && e + "queueHooks", o = w.timers, a = Y.get(this);
            if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && rt.test(i) && r(a[i]);
            for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            !t && n || w.dequeue(this, e)
          })
        }, finish: function (e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t, n = Y.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = w.timers, a = r ? r.length : 0;
            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
          })
        }
      }), w.each(["toggle", "show", "hide"], function (e, t) {
        var n = w.fn[t];
        w.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(at(t, !0), e, r, i)
        }
      }), w.each({
        slideDown: at("show"),
        slideUp: at("hide"),
        slideToggle: at("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
      }, function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r)
        }
      }), w.timers = [], w.fx.tick = function () {
        var e, t = 0, n = w.timers;
        for (et = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || w.fx.stop(), et = void 0
      }, w.fx.timer = function (e) {
        w.timers.push(e), w.fx.start()
      }, w.fx.interval = 13, w.fx.start = function () {
        tt || (tt = !0, it())
      }, w.fx.stop = function () {
        tt = null
      }, w.fx.speeds = {slow: 600, fast: 200, _default: 400}, w.fn.delay = function (e, n) {
        return e = w.fx && w.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, r) {
          var i = t.setTimeout(n, e);
          r.stop = function () {
            t.clearTimeout(i)
          }
        })
      }, function () {
        var e = y.createElement("input"), t = y.createElement("select").appendChild(y.createElement("option"));
        e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = t.selected, (e = y.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value
      }();
      var lt, ct = w.expr.attrHandle;
      w.fn.extend({
        attr: function (e, t) {
          return $(this, w.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
          return this.each(function () {
            w.removeAttr(this, e)
          })
        }
      }), w.extend({
        attr: function (e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? w.prop(e, t, n) : (1 === o && w.isXMLDoc(e) || (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? lt : void 0)), void 0 !== n ? null === n ? void w.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = w.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
          type: {
            set: function (e, t) {
              if (!h.radioValue && "radio" === t && A(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t
              }
            }
          }
        }, removeAttr: function (e, t) {
          var n, r = 0, i = t && t.match(P);
          if (i && 1 === e.nodeType) for (; n = i[r++];) e.removeAttribute(n)
        }
      }), lt = {
        set: function (e, t, n) {
          return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n
        }
      }, w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ct[t] || w.find.attr;
        ct[t] = function (e, t, r) {
          var i, o, a = t.toLowerCase();
          return r || (o = ct[a], ct[a] = i, i = null != n(e, t, r) ? a : null, ct[a] = o), i
        }
      });
      var ft = /^(?:input|select|textarea|button)$/i, pt = /^(?:a|area)$/i;

      function dt(e) {
        return (e.match(P) || []).join(" ")
      }

      function ht(e) {
        return e.getAttribute && e.getAttribute("class") || ""
      }

      function gt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
      }

      w.fn.extend({
        prop: function (e, t) {
          return $(this, w.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
          return this.each(function () {
            delete this[w.propFix[e] || e]
          })
        }
      }), w.extend({
        prop: function (e, t, n) {
          var r, i, o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(e) || (t = w.propFix[t] || t, i = w.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
          tabIndex: {
            get: function (e) {
              var t = w.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : ft.test(e.nodeName) || pt.test(e.nodeName) && e.href ? 0 : -1
            }
          }
        }, propFix: {for: "htmlFor", class: "className"}
      }), h.optSelected || (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
      }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        w.propFix[this.toLowerCase()] = this
      }), w.fn.extend({
        addClass: function (e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function (t) {
            w(this).addClass(e.call(this, t, ht(this)))
          });
          if ((t = gt(e)).length) for (; n = this[u++];) if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
            for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
            i !== (s = dt(r)) && n.setAttribute("class", s)
          }
          return this
        }, removeClass: function (e) {
          var t, n, r, i, o, a, s, u = 0;
          if (g(e)) return this.each(function (t) {
            w(this).removeClass(e.call(this, t, ht(this)))
          });
          if (!arguments.length) return this.attr("class", "");
          if ((t = gt(e)).length) for (; n = this[u++];) if (i = ht(n), r = 1 === n.nodeType && " " + dt(i) + " ") {
            for (a = 0; o = t[a++];) for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
            i !== (s = dt(r)) && n.setAttribute("class", s)
          }
          return this
        }, toggleClass: function (e, t) {
          var n = typeof e, r = "string" === n || Array.isArray(e);
          return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : g(e) ? this.each(function (n) {
            w(this).toggleClass(e.call(this, n, ht(this), t), t)
          }) : this.each(function () {
            var t, i, o, a;
            if (r) for (i = 0, o = w(this), a = gt(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t); else void 0 !== e && "boolean" !== n || ((t = ht(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""))
          })
        }, hasClass: function (e) {
          var t, n, r = 0;
          for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + dt(ht(n)) + " ").indexOf(t) > -1) return !0;
          return !1
        }
      });
      var vt = /\r/g;
      w.fn.extend({
        val: function (e) {
          var t, n, r, i = this[0];
          return arguments.length ? (r = g(e), this.each(function (n) {
            var i;
            1 === this.nodeType && (null == (i = r ? e.call(this, n, w(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = w.map(i, function (e) {
              return null == e ? "" : e + ""
            })), (t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
          })) : i ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(vt, "") : null == n ? "" : n : void 0
        }
      }), w.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = w.find.attr(e, "value");
              return null != t ? t : dt(w.text(e))
            }
          }, select: {
            get: function (e) {
              var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [],
                u = a ? o + 1 : i.length;
              for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                if (t = w(n).val(), a) return t;
                s.push(t)
              }
              return s
            }, set: function (e, t) {
              for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--;) ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o
            }
          }
        }
      }), w.each(["radio", "checkbox"], function () {
        w.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t)) return e.checked = w.inArray(w(e).val(), t) > -1
          }
        }, h.checkOn || (w.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value
        })
      }), h.focusin = "onfocusin" in t;
      var yt = /^(?:focusinfocus|focusoutblur)$/, mt = function (e) {
        e.stopPropagation()
      };
      w.extend(w.event, {
        trigger: function (e, n, r, i) {
          var o, a, s, u, l, c, p, d, h = [r || y], m = f.call(e, "type") ? e.type : e,
            x = f.call(e, "namespace") ? e.namespace.split(".") : [];
          if (a = d = s = r = r || y, 3 !== r.nodeType && 8 !== r.nodeType && !yt.test(m + w.event.triggered) && (m.indexOf(".") > -1 && (x = m.split("."), m = x.shift(), x.sort()), l = m.indexOf(":") < 0 && "on" + m, (e = e[w.expando] ? e : new w.Event(m, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = x.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), n = null == n ? [e] : w.makeArray(n, [e]), p = w.event.special[m] || {}, i || !p.trigger || !1 !== p.trigger.apply(r, n))) {
            if (!i && !p.noBubble && !v(r)) {
              for (u = p.delegateType || m, yt.test(u + m) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
              s === (r.ownerDocument || y) && h.push(s.defaultView || s.parentWindow || t)
            }
            for (o = 0; (a = h[o++]) && !e.isPropagationStopped();) d = a, e.type = o > 1 ? u : p.bindType || m, (c = (Y.get(a, "events") || Object.create(null))[e.type] && Y.get(a, "handle")) && c.apply(a, n), (c = l && a[l]) && c.apply && V(a) && (e.result = c.apply(a, n), !1 === e.result && e.preventDefault());
            return e.type = m, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), n) || !V(r) || l && g(r[m]) && !v(r) && ((s = r[l]) && (r[l] = null), w.event.triggered = m, e.isPropagationStopped() && d.addEventListener(m, mt), r[m](), e.isPropagationStopped() && d.removeEventListener(m, mt), w.event.triggered = void 0, s && (r[l] = s)), e.result
          }
        }, simulate: function (e, t, n) {
          var r = w.extend(new w.Event, n, {type: e, isSimulated: !0});
          w.event.trigger(r, null, t)
        }
      }), w.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            w.event.trigger(e, t, this)
          })
        }, triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return w.event.trigger(e, t, n, !0)
        }
      }), h.focusin || w.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e))
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this.document || this, i = Y.access(r, t);
            i || r.addEventListener(e, n, !0), Y.access(r, t, (i || 0) + 1)
          }, teardown: function () {
            var r = this.ownerDocument || this.document || this, i = Y.access(r, t) - 1;
            i ? Y.access(r, t, i) : (r.removeEventListener(e, n, !0), Y.remove(r, t))
          }
        }
      });
      var xt = t.location, bt = {guid: Date.now()}, wt = /\?/;
      w.parseXML = function (e) {
        var n, r;
        if (!e || "string" != typeof e) return null;
        try {
          n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
        }
        return r = n && n.getElementsByTagName("parsererror")[0], n && !r || w.error("Invalid XML: " + (r ? w.map(r.childNodes, function (e) {
          return e.textContent
        }).join("\n") : e)), n
      };
      var Tt = /\[\]$/, Ct = /\r?\n/g, Et = /^(?:submit|button|image|reset|file)$/i,
        St = /^(?:input|select|textarea|keygen)/i;

      function kt(e, t, n, r) {
        var i;
        if (Array.isArray(t)) w.each(t, function (t, i) {
          n || Tt.test(e) ? r(e, i) : kt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== b(t)) r(e, t); else for (i in t) kt(e + "[" + i + "]", t[i], n, r)
      }

      w.param = function (e, t) {
        var n, r = [], i = function (e, t) {
          var n = g(t) ? t() : t;
          r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !w.isPlainObject(e)) w.each(e, function () {
          i(this.name, this.value)
        }); else for (n in e) kt(n, e[n], t, i);
        return r.join("&")
      }, w.fn.extend({
        serialize: function () {
          return w.param(this.serializeArray())
        }, serializeArray: function () {
          return this.map(function () {
            var e = w.prop(this, "elements");
            return e ? w.makeArray(e) : this
          }).filter(function () {
            var e = this.type;
            return this.name && !w(this).is(":disabled") && St.test(this.nodeName) && !Et.test(e) && (this.checked || !de.test(e))
          }).map(function (e, t) {
            var n = w(this).val();
            return null == n ? null : Array.isArray(n) ? w.map(n, function (e) {
              return {name: t.name, value: e.replace(Ct, "\r\n")}
            }) : {name: t.name, value: n.replace(Ct, "\r\n")}
          }).get()
        }
      });
      var At = /%20/g, Nt = /#.*$/, jt = /([?&])_=[^&]*/, Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm, qt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//, Ht = {}, Ot = {}, Pt = "*/".concat("*"), Rt = y.createElement("a");

      function Mt(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");
          var r, i = 0, o = t.toLowerCase().match(P) || [];
          if (g(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
      }

      function It(e, t, n, r) {
        var i = {}, o = e === Ot;

        function a(s) {
          var u;
          return i[s] = !0, w.each(e[s] || [], function (e, s) {
            var l = s(t, n, r);
            return "string" != typeof l || o || i[l] ? o ? !(u = l) : void 0 : (t.dataTypes.unshift(l), a(l), !1)
          }), u
        }

        return a(t.dataTypes[0]) || !i["*"] && a("*")
      }

      function Wt(e, t) {
        var n, r, i = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && w.extend(!0, e, r), e
      }

      Rt.href = xt.href, w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: xt.href,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Pt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
          },
          contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
          responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
          converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML},
          flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
          return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(Ht),
        ajaxTransport: Mt(Ot),
        ajax: function (e, n) {
          "object" == typeof e && (n = e, e = void 0), n = n || {};
          var r, i, o, a, s, u, l, c, f, p, d = w.ajaxSetup({}, n), h = d.context || d,
            g = d.context && (h.nodeType || h.jquery) ? w(h) : w.event, v = w.Deferred(),
            m = w.Callbacks("once memory"), x = d.statusCode || {}, b = {}, T = {}, C = "canceled", E = {
              readyState: 0, getResponseHeader: function (e) {
                var t;
                if (l) {
                  if (!a) for (a = {}; t = Dt.exec(o);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                  t = a[e.toLowerCase() + " "]
                }
                return null == t ? null : t.join(", ")
              }, getAllResponseHeaders: function () {
                return l ? o : null
              }, setRequestHeader: function (e, t) {
                return null == l && (e = T[e.toLowerCase()] = T[e.toLowerCase()] || e, b[e] = t), this
              }, overrideMimeType: function (e) {
                return null == l && (d.mimeType = e), this
              }, statusCode: function (e) {
                var t;
                if (e) if (l) E.always(e[E.status]); else for (t in e) x[t] = [x[t], e[t]];
                return this
              }, abort: function (e) {
                var t = e || C;
                return r && r.abort(t), S(0, t), this
              }
            };
          if (v.promise(E), d.url = ((e || d.url || xt.href) + "").replace(Lt, xt.protocol + "//"), d.type = n.method || n.type || d.method || d.type, d.dataTypes = (d.dataType || "*").toLowerCase().match(P) || [""], null == d.crossDomain) {
            u = y.createElement("a");
            try {
              u.href = d.url, u.href = u.href, d.crossDomain = Rt.protocol + "//" + Rt.host != u.protocol + "//" + u.host
            } catch (k) {
              d.crossDomain = !0
            }
          }
          if (d.data && d.processData && "string" != typeof d.data && (d.data = w.param(d.data, d.traditional)), It(Ht, d, n, E), l) return E;
          for (f in (c = w.event && d.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !qt.test(d.type), i = d.url.replace(Nt, ""), d.hasContent ? d.data && d.processData && 0 === (d.contentType || "").indexOf("application/x-www-form-urlencoded") && (d.data = d.data.replace(At, "+")) : (p = d.url.slice(i.length), d.data && (d.processData || "string" == typeof d.data) && (i += (wt.test(i) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (i = i.replace(jt, "$1"), p = (wt.test(i) ? "&" : "?") + "_=" + bt.guid++ + p), d.url = i + p), d.ifModified && (w.lastModified[i] && E.setRequestHeader("If-Modified-Since", w.lastModified[i]), w.etag[i] && E.setRequestHeader("If-None-Match", w.etag[i])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && E.setRequestHeader("Content-Type", d.contentType), E.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : d.accepts["*"]), d.headers) E.setRequestHeader(f, d.headers[f]);
          if (d.beforeSend && (!1 === d.beforeSend.call(h, E, d) || l)) return E.abort();
          if (C = "abort", m.add(d.complete), E.done(d.success), E.fail(d.error), r = It(Ot, d, n, E)) {
            if (E.readyState = 1, c && g.trigger("ajaxSend", [E, d]), l) return E;
            d.async && d.timeout > 0 && (s = t.setTimeout(function () {
              E.abort("timeout")
            }, d.timeout));
            try {
              l = !1, r.send(b, S)
            } catch (k) {
              if (l) throw k;
              S(-1, k)
            }
          } else S(-1, "No Transport");

          function S(e, n, a, u) {
            var f, p, y, b, T, C = n;
            l || (l = !0, s && t.clearTimeout(s), r = void 0, o = u || "", E.readyState = e > 0 ? 4 : 0, f = e >= 200 && e < 300 || 304 === e, a && (b = function (e, t, n) {
              for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              if (r) for (i in s) if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
              }
              if (u[0] in n) o = u[0]; else {
                for (i in n) {
                  if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                  }
                  a || (a = i)
                }
                o = o || a
              }
              if (o) return o !== u[0] && u.unshift(o), n[o]
            }(d, E, a)), !f && w.inArray("script", d.dataTypes) > -1 && w.inArray("json", d.dataTypes) < 0 && (d.converters["text script"] = function () {
            }), b = function (e, t, n, r) {
              var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break
                }
                if (!0 !== a) if (a && e.throws) t = a(t); else try {
                  t = a(t)
                } catch (k) {
                  return {state: "parsererror", error: a ? k : "No conversion from " + u + " to " + o}
                }
              }
              return {state: "success", data: t}
            }(d, b, E, f), f ? (d.ifModified && ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[i] = T), (T = E.getResponseHeader("etag")) && (w.etag[i] = T)), 204 === e || "HEAD" === d.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, p = b.data, f = !(y = b.error))) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (n || C) + "", f ? v.resolveWith(h, [p, C, E]) : v.rejectWith(h, [E, C, y]), E.statusCode(x), x = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, d, f ? p : y]), m.fireWith(h, [E, C]), c && (g.trigger("ajaxComplete", [E, d]), --w.active || w.event.trigger("ajaxStop")))
          }

          return E
        },
        getJSON: function (e, t, n) {
          return w.get(e, t, n, "json")
        },
        getScript: function (e, t) {
          return w.get(e, void 0, t, "script")
        }
      }), w.each(["get", "post"], function (e, t) {
        w[t] = function (e, n, r, i) {
          return g(n) && (i = i || r, r = n, n = void 0), w.ajax(w.extend({
            url: e,
            type: t,
            dataType: i,
            data: n,
            success: r
          }, w.isPlainObject(e) && e))
        }
      }), w.ajaxPrefilter(function (e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
      }), w._evalUrl = function (e, t, n) {
        return w.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: {
            "text script": function () {
            }
          },
          dataFilter: function (e) {
            w.globalEval(e, t, n)
          }
        })
      }, w.fn.extend({
        wrapAll: function (e) {
          var t;
          return this[0] && (g(e) && (e = e.call(this[0])), t = w(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
          }).append(this)), this
        }, wrapInner: function (e) {
          return g(e) ? this.each(function (t) {
            w(this).wrapInner(e.call(this, t))
          }) : this.each(function () {
            var t = w(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
          })
        }, wrap: function (e) {
          var t = g(e);
          return this.each(function (n) {
            w(this).wrapAll(t ? e.call(this, n) : e)
          })
        }, unwrap: function (e) {
          return this.parent(e).not("body").each(function () {
            w(this).replaceWith(this.childNodes)
          }), this
        }
      }), w.expr.pseudos.hidden = function (e) {
        return !w.expr.pseudos.visible(e)
      }, w.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      }, w.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest
        } catch (e) {
        }
      };
      var Ft = {0: 200, 1223: 204}, Bt = w.ajaxSettings.xhr();
      h.cors = !!Bt && "withCredentials" in Bt, h.ajax = Bt = !!Bt, w.ajaxTransport(function (e) {
        var n, r;
        if (h.cors || Bt && !e.crossDomain) return {
          send: function (i, o) {
            var a, s = e.xhr();
            if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) s[a] = e.xhrFields[a];
            for (a in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(a, i[a]);
            n = function (e) {
              return function () {
                n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ft[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
              }
            }, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
              4 === s.readyState && t.setTimeout(function () {
                n && r()
              })
            }, n = n("abort");
            try {
              s.send(e.hasContent && e.data || null)
            } catch (u) {
              if (n) throw u
            }
          }, abort: function () {
            n && n()
          }
        }
      }), w.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
      }), w.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
          "text script": function (e) {
            return w.globalEval(e), e
          }
        }
      }), w.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
      }), w.ajaxTransport("script", function (e) {
        var t, n;
        if (e.crossDomain || e.scriptAttrs) return {
          send: function (r, i) {
            t = w("<script>").attr(e.scriptAttrs || {}).prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function (e) {
              t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
            }), y.head.appendChild(t[0])
          }, abort: function () {
            n && n()
          }
        }
      });
      var $t, _t = [], zt = /(=)\?(?=&|$)|\?\?/;
      w.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
          var e = _t.pop() || w.expando + "_" + bt.guid++;
          return this[e] = !0, e
        }
      }), w.ajaxPrefilter("json jsonp", function (e, n, r) {
        var i, o, a,
          s = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(zt, "$1" + i) : !1 !== e.jsonp && (e.url += (wt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return a || w.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", o = t[i], t[i] = function () {
          a = arguments
        }, r.always(function () {
          void 0 === o ? w(t).removeProp(i) : t[i] = o, e[i] && (e.jsonpCallback = n.jsonpCallback, _t.push(i)), a && g(o) && o(a[0]), a = o = void 0
        }), "script"
      }), h.createHTMLDocument = (($t = y.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === $t.childNodes.length), w.parseHTML = function (e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (h.createHTMLDocument ? ((r = (t = y.implementation.createHTMLDocument("")).createElement("base")).href = y.location.href, t.head.appendChild(r)) : t = y), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = be([e], t, o), o && o.length && w(o).remove(), w.merge([], i.childNodes)));
        var r, i, o
      }, w.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = dt(e.slice(s)), e = e.slice(0, s)), g(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && w.ajax({
          url: e,
          type: i || "GET",
          dataType: "html",
          data: t
        }).done(function (e) {
          o = arguments, a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
          a.each(function () {
            n.apply(this, o || [e.responseText, t, e])
          })
        }), this
      }, w.expr.pseudos.animated = function (e) {
        return w.grep(w.timers, function (t) {
          return e === t.elem
        }).length
      }, w.offset = {
        setOffset: function (e, t, n) {
          var r, i, o, a, s, u, l = w.css(e, "position"), c = w(e), f = {};
          "static" === l && (e.style.position = "relative"), s = c.offset(), o = w.css(e, "top"), u = w.css(e, "left"), ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), g(t) && (t = t.call(e, n, w.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
      }, w.fn.extend({
        offset: function (e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            w.offset.setOffset(this, e, t)
          });
          var t, n, r = this[0];
          return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : {top: 0, left: 0} : void 0
        }, position: function () {
          if (this[0]) {
            var e, t, n, r = this[0], i = {top: 0, left: 0};
            if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect(); else {
              for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");) e = e.parentNode;
              e && e !== r && 1 === e.nodeType && ((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0), i.left += w.css(e, "borderLeftWidth", !0))
            }
            return {top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0)}
          }
        }, offsetParent: function () {
          return this.map(function () {
            for (var e = this.offsetParent; e && "static" === w.css(e, "position");) e = e.offsetParent;
            return e || re
          })
        }
      }), w.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = "pageYOffset" === t;
        w.fn[e] = function (r) {
          return $(this, function (e, r, i) {
            var o;
            if (v(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
          }, e, r, arguments.length)
        }
      }), w.each(["top", "left"], function (e, t) {
        w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
          if (n) return n = Fe(e, t), Re.test(n) ? w(e).position()[t] + "px" : n
        })
      }), w.each({Height: "height", Width: "width"}, function (e, t) {
        w.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, r) {
          w.fn[r] = function (i, o) {
            var a = arguments.length && (n || "boolean" != typeof i),
              s = n || (!0 === i || !0 === o ? "margin" : "border");
            return $(this, function (t, n, i) {
              var o;
              return v(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? w.css(t, n, s) : w.style(t, n, i, s)
            }, t, a ? i : void 0, a)
          }
        })
      }), w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        w.fn[t] = function (e) {
          return this.on(t, e)
        }
      }), w.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n)
        }, unbind: function (e, t) {
          return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
          return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e)
        }
      }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
      });
      var Ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      w.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), g(e)) return r = o.call(arguments, 2), (i = function () {
          return e.apply(t || this, r.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || w.guid++, i
      }, w.holdReady = function (e) {
        e ? w.readyWait++ : w.ready(!0)
      }, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = A, w.isFunction = g, w.isWindow = v, w.camelCase = X, w.type = b, w.now = Date.now, w.isNumeric = function (e) {
        var t = w.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
      }, w.trim = function (e) {
        return null == e ? "" : (e + "").replace(Ut, "")
      }, "function" == typeof e && e.amd && e("jquery", [], function () {
        return w
      });
      var Xt = t.jQuery, Vt = t.$;
      return w.noConflict = function (e) {
        return t.$ === w && (t.$ = Vt), e && t.jQuery === w && (t.jQuery = Xt), w
      }, void 0 === n && (t.jQuery = t.$ = w), w
    });
  }, {"process": "g5IB"}], "ERUm": [function (require, module, exports) {
    var define;
    var global = arguments[3];
    var e, t = arguments[3];
    !function (t, a) {
      "object" == typeof exports && "undefined" != typeof module ? a(exports, require("jquery")) : "function" == typeof e && e.amd ? e(["exports", "jquery"], a) : a((t = "undefined" != typeof globalThis ? globalThis : t || self).adminlte = {}, t.jQuery)
    }(this, function (e, t) {
      "use strict";

      function a(e) {
        return e && "object" == typeof e && "default" in e ? e : {default: e}
      }

      var i = a(t), n = "CardRefresh", o = i.default.fn[n], s = "card", l = "." + s, r = {
        source: "",
        sourceSelector: "",
        params: {},
        trigger: '[data-card-widget="card-refresh"]',
        content: ".card-body",
        loadInContent: !0,
        loadOnInit: !0,
        responseType: "",
        overlayTemplate: '<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',
        onLoadStart: function () {
        },
        onLoadDone: function (e) {
          return e
        }
      }, d = function () {
        function e(e, t) {
          if (this._element = e, this._parent = e.parents(l).first(), this._settings = i.default.extend({}, r, t), this._overlay = i.default(this._settings.overlayTemplate), e.hasClass(s) && (this._parent = e), "" === this._settings.source) throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")
        }

        var t = e.prototype;
        return t.load = function () {
          var e = this;
          this._addOverlay(), this._settings.onLoadStart.call(i.default(this)), i.default.get(this._settings.source, this._settings.params, function (t) {
            e._settings.loadInContent && ("" !== e._settings.sourceSelector && (t = i.default(t).find(e._settings.sourceSelector).html()), e._parent.find(e._settings.content).html(t)), e._settings.onLoadDone.call(i.default(e), t), e._removeOverlay()
          }, "" !== this._settings.responseType && this._settings.responseType), i.default(this._element).trigger(i.default.Event("loaded.lte.cardrefresh"))
        }, t._addOverlay = function () {
          this._parent.append(this._overlay), i.default(this._element).trigger(i.default.Event("overlay.added.lte.cardrefresh"))
        }, t._removeOverlay = function () {
          this._parent.find(this._overlay).remove(), i.default(this._element).trigger(i.default.Event("overlay.removed.lte.cardrefresh"))
        }, t._init = function () {
          var e = this;
          i.default(this).find(this._settings.trigger).on("click", function () {
            e.load()
          }), this._settings.loadOnInit && this.load()
        }, e._jQueryInterface = function (t) {
          var a = i.default(this).data("lte.cardrefresh"), n = i.default.extend({}, r, i.default(this).data());
          a || (a = new e(i.default(this), n), i.default(this).data("lte.cardrefresh", "string" == typeof t ? a : t)), "string" == typeof t && /load/.test(t) ? a[t]() : a._init(i.default(this))
        }, e
      }();
      i.default(document).on("click", '[data-card-widget="card-refresh"]', function (e) {
        e && e.preventDefault(), d._jQueryInterface.call(i.default(this), "load")
      }), i.default(function () {
        i.default('[data-card-widget="card-refresh"]').each(function () {
          d._jQueryInterface.call(i.default(this))
        })
      }), i.default.fn[n] = d._jQueryInterface, i.default.fn[n].Constructor = d, i.default.fn[n].noConflict = function () {
        return i.default.fn[n] = o, d._jQueryInterface
      };
      var f = "CardWidget", u = i.default.fn[f], c = "card", h = "." + c, g = {
        animationSpeed: "normal",
        collapseTrigger: '[data-card-widget="collapse"]',
        removeTrigger: '[data-card-widget="remove"]',
        maximizeTrigger: '[data-card-widget="maximize"]',
        collapseIcon: "fa-minus",
        expandIcon: "fa-plus",
        maximizeIcon: "fa-expand",
        minimizeIcon: "fa-compress"
      }, p = function () {
        function e(e, t) {
          this._element = e, this._parent = e.parents(h).first(), e.hasClass(c) && (this._parent = e), this._settings = i.default.extend({}, g, t)
        }

        var t = e.prototype;
        return t.collapse = function () {
          var e = this;
          this._parent.addClass("collapsing-card").children(".card-body, .card-footer").slideUp(this._settings.animationSpeed, function () {
            e._parent.addClass("collapsed-card").removeClass("collapsing-card")
          }), this._parent.find("> .card-header " + this._settings.collapseTrigger + " ." + this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon), this._element.trigger(i.default.Event("collapsed.lte.cardwidget"), this._parent)
        }, t.expand = function () {
          var e = this;
          this._parent.addClass("expanding-card").children(".card-body, .card-footer").slideDown(this._settings.animationSpeed, function () {
            e._parent.removeClass("collapsed-card").removeClass("expanding-card")
          }), this._parent.find("> .card-header " + this._settings.collapseTrigger + " ." + this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon), this._element.trigger(i.default.Event("expanded.lte.cardwidget"), this._parent)
        }, t.remove = function () {
          this._parent.slideUp(), this._element.trigger(i.default.Event("removed.lte.cardwidget"), this._parent)
        }, t.toggle = function () {
          this._parent.hasClass("collapsed-card") ? this.expand() : this.collapse()
        }, t.maximize = function () {
          this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon), this._parent.css({
            height: this._parent.height(),
            width: this._parent.width(),
            transition: "all .15s"
          }).delay(150).queue(function () {
            var e = i.default(this);
            e.addClass("maximized-card"), i.default("html").addClass("maximized-card"), e.hasClass("collapsed-card") && e.addClass("was-collapsed"), e.dequeue()
          }), this._element.trigger(i.default.Event("maximized.lte.cardwidget"), this._parent)
        }, t.minimize = function () {
          this._parent.find(this._settings.maximizeTrigger + " ." + this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon), this._parent.css("cssText", "height: " + this._parent[0].style.height + " !important; width: " + this._parent[0].style.width + " !important; transition: all .15s;").delay(10).queue(function () {
            var e = i.default(this);
            e.removeClass("maximized-card"), i.default("html").removeClass("maximized-card"), e.css({
              height: "inherit",
              width: "inherit"
            }), e.hasClass("was-collapsed") && e.removeClass("was-collapsed"), e.dequeue()
          }), this._element.trigger(i.default.Event("minimized.lte.cardwidget"), this._parent)
        }, t.toggleMaximize = function () {
          this._parent.hasClass("maximized-card") ? this.minimize() : this.maximize()
        }, t._init = function (e) {
          var t = this;
          this._parent = e, i.default(this).find(this._settings.collapseTrigger).click(function () {
            t.toggle()
          }), i.default(this).find(this._settings.maximizeTrigger).click(function () {
            t.toggleMaximize()
          }), i.default(this).find(this._settings.removeTrigger).click(function () {
            t.remove()
          })
        }, e._jQueryInterface = function (t) {
          var a = i.default(this).data("lte.cardwidget"), n = i.default.extend({}, g, i.default(this).data());
          a || (a = new e(i.default(this), n), i.default(this).data("lte.cardwidget", "string" == typeof t ? a : t)), "string" == typeof t && /collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(t) ? a[t]() : "object" == typeof t && a._init(i.default(this))
        }, e
      }();
      i.default(document).on("click", '[data-card-widget="collapse"]', function (e) {
        e && e.preventDefault(), p._jQueryInterface.call(i.default(this), "toggle")
      }), i.default(document).on("click", '[data-card-widget="remove"]', function (e) {
        e && e.preventDefault(), p._jQueryInterface.call(i.default(this), "remove")
      }), i.default(document).on("click", '[data-card-widget="maximize"]', function (e) {
        e && e.preventDefault(), p._jQueryInterface.call(i.default(this), "toggleMaximize")
      }), i.default.fn[f] = p._jQueryInterface, i.default.fn[f].Constructor = p, i.default.fn[f].noConflict = function () {
        return i.default.fn[f] = u, p._jQueryInterface
      };
      var m = "ControlSidebar", v = i.default.fn[m], _ = {
        controlsidebarSlide: !0,
        scrollbarTheme: "os-theme-light",
        scrollbarAutoHide: "l",
        target: ".control-sidebar"
      }, b = function () {
        function e(e, t) {
          this._element = e, this._config = t
        }

        var t = e.prototype;
        return t.collapse = function () {
          var e = i.default("body"), t = i.default("html"), a = this._config.target;
          this._config.controlsidebarSlide ? (t.addClass("control-sidebar-animate"), e.removeClass("control-sidebar-slide-open").delay(300).queue(function () {
            i.default(a).hide(), t.removeClass("control-sidebar-animate"), i.default(this).dequeue()
          })) : e.removeClass("control-sidebar-open"), i.default(this._element).trigger(i.default.Event("collapsed.lte.controlsidebar"))
        }, t.show = function () {
          var e = i.default("body"), t = i.default("html");
          this._config.controlsidebarSlide ? (t.addClass("control-sidebar-animate"), i.default(this._config.target).show().delay(10).queue(function () {
            e.addClass("control-sidebar-slide-open").delay(300).queue(function () {
              t.removeClass("control-sidebar-animate"), i.default(this).dequeue()
            }), i.default(this).dequeue()
          })) : e.addClass("control-sidebar-open"), this._fixHeight(), this._fixScrollHeight(), i.default(this._element).trigger(i.default.Event("expanded.lte.controlsidebar"))
        }, t.toggle = function () {
          var e = i.default("body");
          e.hasClass("control-sidebar-open") || e.hasClass("control-sidebar-slide-open") ? this.collapse() : this.show()
        }, t._init = function () {
          var e = this, t = i.default("body");
          t.hasClass("control-sidebar-open") || t.hasClass("control-sidebar-slide-open") ? (i.default(".control-sidebar").not(this._config.target).hide(), i.default(this._config.target).css("display", "block")) : i.default(".control-sidebar").hide(), this._fixHeight(), this._fixScrollHeight(), i.default(window).resize(function () {
            e._fixHeight(), e._fixScrollHeight()
          }), i.default(window).scroll(function () {
            var t = i.default("body");
            (t.hasClass("control-sidebar-open") || t.hasClass("control-sidebar-slide-open")) && e._fixScrollHeight()
          })
        }, t._isNavbarFixed = function () {
          var e = i.default("body");
          return e.hasClass("layout-navbar-fixed") || e.hasClass("layout-sm-navbar-fixed") || e.hasClass("layout-md-navbar-fixed") || e.hasClass("layout-lg-navbar-fixed") || e.hasClass("layout-xl-navbar-fixed")
        }, t._isFooterFixed = function () {
          var e = i.default("body");
          return e.hasClass("layout-footer-fixed") || e.hasClass("layout-sm-footer-fixed") || e.hasClass("layout-md-footer-fixed") || e.hasClass("layout-lg-footer-fixed") || e.hasClass("layout-xl-footer-fixed")
        }, t._fixScrollHeight = function () {
          var e = i.default("body"), t = i.default(this._config.target);
          if (e.hasClass("layout-fixed")) {
            var a = {
                scroll: i.default(document).height(),
                window: i.default(window).height(),
                header: i.default(".main-header").outerHeight(),
                footer: i.default(".main-footer").outerHeight()
              }, n = Math.abs(a.window + i.default(window).scrollTop() - a.scroll), o = i.default(window).scrollTop(),
              s = this._isNavbarFixed() && "fixed" === i.default(".main-header").css("position"),
              l = this._isFooterFixed() && "fixed" === i.default(".main-footer").css("position"),
              r = i.default(this._config.target + ", " + this._config.target + " .control-sidebar-content");
            if (0 === o && 0 === n) t.css({
              bottom: a.footer,
              top: a.header
            }), r.css("height", a.window - (a.header + a.footer)); else if (n <= a.footer) if (!1 === l) {
              var d = a.header - o;
              t.css("bottom", a.footer - n).css("top", d >= 0 ? d : 0), r.css("height", a.window - (a.footer - n))
            } else t.css("bottom", a.footer); else o <= a.header ? !1 === s ? (t.css("top", a.header - o), r.css("height", a.window - (a.header - o))) : t.css("top", a.header) : !1 === s ? (t.css("top", 0), r.css("height", a.window)) : t.css("top", a.header);
            l && s ? (r.css("height", "100%"), t.css("height", "")) : (l || s) && (r.css("height", "100%"), r.css("height", ""))
          }
        }, t._fixHeight = function () {
          var e = i.default("body"), t = i.default(this._config.target + " .control-sidebar-content");
          if (e.hasClass("layout-fixed")) {
            var a = i.default(window).height(), n = i.default(".main-header").outerHeight(),
              o = i.default(".main-footer").outerHeight(), s = a - n;
            this._isFooterFixed() && "fixed" === i.default(".main-footer").css("position") && (s = a - n - o), t.css("height", s), void 0 !== i.default.fn.overlayScrollbars && t.overlayScrollbars({
              className: this._config.scrollbarTheme,
              sizeAutoCapable: !0,
              scrollbars: {autoHide: this._config.scrollbarAutoHide, clickScrolling: !0}
            })
          } else t.attr("style", "")
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.controlsidebar"), n = i.default.extend({}, _, i.default(this).data());
            if (a || (a = new e(this, n), i.default(this).data("lte.controlsidebar", a)), "undefined" === a[t]) throw new Error(t + " is not a function");
            a[t]()
          })
        }, e
      }();
      i.default(document).on("click", '[data-widget="control-sidebar"]', function (e) {
        e.preventDefault(), b._jQueryInterface.call(i.default(this), "toggle")
      }), i.default(document).ready(function () {
        b._jQueryInterface.call(i.default('[data-widget="control-sidebar"]'), "_init")
      }), i.default.fn[m] = b._jQueryInterface, i.default.fn[m].Constructor = b, i.default.fn[m].noConflict = function () {
        return i.default.fn[m] = v, b._jQueryInterface
      };
      var w = "DirectChat", y = i.default.fn[w], C = function () {
        function e(e) {
          this._element = e
        }

        return e.prototype.toggle = function () {
          i.default(this._element).parents(".direct-chat").first().toggleClass("direct-chat-contacts-open"), i.default(this._element).trigger(i.default.Event("toggled.lte.directchat"))
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.directchat");
            a || (a = new e(i.default(this)), i.default(this).data("lte.directchat", a)), a[t]()
          })
        }, e
      }();
      i.default(document).on("click", '[data-widget="chat-pane-toggle"]', function (e) {
        e && e.preventDefault(), C._jQueryInterface.call(i.default(this), "toggle")
      }), i.default.fn[w] = C._jQueryInterface, i.default.fn[w].Constructor = C, i.default.fn[w].noConflict = function () {
        return i.default.fn[w] = y, C._jQueryInterface
      };
      var x = "Dropdown", I = i.default.fn[x], T = {}, j = function () {
        function e(e, t) {
          this._config = t, this._element = e
        }

        var t = e.prototype;
        return t.toggleSubmenu = function () {
          this._element.siblings().show().toggleClass("show"), this._element.next().hasClass("show") || this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(), this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown", function () {
            i.default(".dropdown-submenu .show").removeClass("show").hide()
          })
        }, t.fixPosition = function () {
          var e = i.default(".dropdown-menu.show");
          if (0 !== e.length) {
            e.hasClass("dropdown-menu-right") ? e.css({left: "inherit", right: 0}) : e.css({left: 0, right: "inherit"});
            var t = e.offset(), a = e.width(), n = i.default(window).width() - t.left;
            t.left < 0 ? e.css({left: "inherit", right: t.left - 5}) : n < a && e.css({left: "inherit", right: 0})
          }
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.dropdown"), n = i.default.extend({}, T, i.default(this).data());
            a || (a = new e(i.default(this), n), i.default(this).data("lte.dropdown", a)), "toggleSubmenu" !== t && "fixPosition" !== t || a[t]()
          })
        }, e
      }();
      i.default('.dropdown-menu [data-toggle="dropdown"]').on("click", function (e) {
        e.preventDefault(), e.stopPropagation(), j._jQueryInterface.call(i.default(this), "toggleSubmenu")
      }), i.default('.navbar [data-toggle="dropdown"]').on("click", function (e) {
        e.preventDefault(), i.default(e.target).parent().hasClass("dropdown-submenu") || setTimeout(function () {
          j._jQueryInterface.call(i.default(this), "fixPosition")
        }, 1)
      }), i.default.fn[x] = j._jQueryInterface, i.default.fn[x].Constructor = j, i.default.fn[x].noConflict = function () {
        return i.default.fn[x] = I, j._jQueryInterface
      };
      var k = "ExpandableTable", S = i.default.fn[k], Q = function () {
        function e(e, t) {
          this._options = t, this._element = e
        }

        var t = e.prototype;
        return t.init = function () {
          i.default('[data-widget="expandable-table"]').each(function (e, t) {
            var a = i.default(t).attr("aria-expanded"),
              n = i.default(t).next(".expandable-body").children().first().children();
            "true" === a ? n.show() : "false" === a && (n.hide(), n.parent().parent().addClass("d-none"))
          })
        }, t.toggleRow = function () {
          var e = this._element, t = e.attr("aria-expanded"),
            a = e.next(".expandable-body").children().first().children();
          a.stop(), "true" === t ? (a.slideUp(500, function () {
            e.next(".expandable-body").addClass("d-none")
          }), e.attr("aria-expanded", "false"), e.trigger(i.default.Event("collapsed.lte.expandableTable"))) : "false" === t && (e.next(".expandable-body").removeClass("d-none"), a.slideDown(500), e.attr("aria-expanded", "true"), e.trigger(i.default.Event("expanded.lte.expandableTable")))
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.expandableTable");
            a || (a = new e(i.default(this)), i.default(this).data("lte.expandableTable", a)), "string" == typeof t && /init|toggleRow/.test(t) && a[t]()
          })
        }, e
      }();
      i.default(".expandable-table").ready(function () {
        Q._jQueryInterface.call(i.default(this), "init")
      }), i.default(document).on("click", '[data-widget="expandable-table"]', function () {
        Q._jQueryInterface.call(i.default(this), "toggleRow")
      }), i.default.fn[k] = Q._jQueryInterface, i.default.fn[k].Constructor = Q, i.default.fn[k].noConflict = function () {
        return i.default.fn[k] = S, Q._jQueryInterface
      };
      var H = "Fullscreen", z = i.default.fn[H],
        F = {minimizeIcon: "fa-compress-arrows-alt", maximizeIcon: "fa-expand-arrows-alt"}, E = function () {
          function e(e, t) {
            this.element = e, this.options = i.default.extend({}, F, t)
          }

          var t = e.prototype;
          return t.toggle = function () {
            document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? this.windowed() : this.fullscreen()
          }, t.fullscreen = function () {
            document.documentElement.requestFullscreen ? document.documentElement.requestFullscreen() : document.documentElement.webkitRequestFullscreen ? document.documentElement.webkitRequestFullscreen() : document.documentElement.msRequestFullscreen && document.documentElement.msRequestFullscreen(), i.default('[data-widget="fullscreen"] i').removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon)
          }, t.windowed = function () {
            document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen(), i.default('[data-widget="fullscreen"] i').removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon)
          }, e._jQueryInterface = function (t) {
            var a = i.default(this).data("lte.fullscreen");
            a || (a = i.default(this).data());
            var n = i.default.extend({}, F, "object" == typeof t ? t : a), o = new e(i.default(this), n);
            i.default(this).data("lte.fullscreen", "object" == typeof t ? t : a), "string" == typeof t && /toggle|fullscreen|windowed/.test(t) ? o[t]() : o.init()
          }, e
        }();
      i.default(document).on("click", '[data-widget="fullscreen"]', function () {
        E._jQueryInterface.call(i.default(this), "toggle")
      }), i.default.fn[H] = E._jQueryInterface, i.default.fn[H].Constructor = E, i.default.fn[H].noConflict = function () {
        return i.default.fn[H] = z, E._jQueryInterface
      };
      var L = i.default.fn.IFrame, D = '[data-widget="iframe"].iframe-mode .navbar-nav', A = D + " .nav-item",
        R = '[data-widget="iframe"].iframe-mode .tab-content', M = R + " .tab-empty", q = R + " .tab-loading",
        N = R + " .tab-pane", O = {
          onTabClick: function (e) {
            return e
          },
          onTabChanged: function (e) {
            return e
          },
          onTabCreated: function (e) {
            return e
          },
          autoIframeMode: !0,
          autoItemActive: !0,
          autoShowNewTab: !0,
          allowDuplicates: !1,
          loadingScreen: !0,
          useNavbarItems: !0,
          scrollOffset: 40,
          scrollBehaviorSwap: !1,
          iconMaximize: "fa-expand",
          iconMinimize: "fa-compress"
        }, P = function () {
          function e(e, t) {
            this._config = t, this._element = e, this._init()
          }

          var t = e.prototype;
          return t.onTabClick = function (e) {
            this._config.onTabClick(e)
          }, t.onTabChanged = function (e) {
            this._config.onTabChanged(e)
          }, t.onTabCreated = function (e) {
            this._config.onTabCreated(e)
          }, t.createTab = function (e, t, a, n) {
            var o = this, s = "panel-" + a, l = "tab-" + a;
            this._config.allowDuplicates && (s += "-" + Math.floor(1e3 * Math.random()), l += "-" + Math.floor(1e3 * Math.random()));
            var r = '<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="' + l + '" href="#' + s + '" role="tab" aria-controls="' + s + '" aria-selected="false">' + e + "</a></li>";
            i.default(D).append(unescape(escape(r)));
            var d = '<div class="tab-pane fade" id="' + s + '" role="tabpanel" aria-labelledby="' + l + '"><iframe src="' + t + '"></iframe></div>';
            if (i.default(R).append(unescape(escape(d))), n) if (this._config.loadingScreen) {
              var f = i.default(q);
              f.fadeIn(), i.default(s + " iframe").ready(function () {
                "number" == typeof o._config.loadingScreen ? (o.switchTab("#" + l), setTimeout(function () {
                  f.fadeOut()
                }, o._config.loadingScreen)) : (o.switchTab("#" + l), f.fadeOut())
              })
            } else this.switchTab("#" + l);
            this.onTabCreated(i.default("#" + l))
          }, t.openTabSidebar = function (e, t) {
            void 0 === t && (t = this._config.autoShowNewTab);
            var a = i.default(e).clone();
            void 0 === a.attr("href") && (a = i.default(e).parent("a").clone()), a.find(".right, .search-path").remove();
            var n = a.find("p").text();
            "" === n && (n = a.text());
            var o = a.attr("href");
            if ("#" !== o && "" !== o && void 0 !== o) {
              var s = o.replace("./", "").replace(/["&'./:=?[\]]/gi, "-").replace(/(--)/gi, ""), l = "tab-" + s;
              if (!this._config.allowDuplicates && i.default("#" + l).length > 0) return this.switchTab("#" + l);
              (!this._config.allowDuplicates && 0 === i.default("#" + l).length || this._config.allowDuplicates) && this.createTab(n, o, s, t)
            }
          }, t.switchTab = function (e) {
            var t = i.default(e), a = t.attr("href");
            i.default(M).hide(), i.default(D + " .active").tab("dispose").removeClass("active"), this._fixHeight(), t.tab("show"), t.parents("li").addClass("active"), this.onTabChanged(t), this._config.autoItemActive && this._setItemActive(i.default(a + " iframe").attr("src"))
          }, t.removeActiveTab = function (e, t) {
            if ("all" == e) i.default(A).remove(), i.default(N).remove(), i.default(M).show(); else if ("all-other" == e) i.default(A + ":not(.active)").remove(), i.default(N + ":not(.active)").remove(); else if ("only-this" == e) {
              var a = i.default(t), n = a.parent(".nav-item"), o = n.parent(), s = n.index(),
                l = a.siblings(".nav-link").attr("aria-controls");
              if (n.remove(), i.default("#" + l).remove(), i.default(R).children().length == i.default(M + ", " + q).length) i.default(M).show(); else {
                var r = s - 1;
                this.switchTab(o.children().eq(r).find("a.nav-link"))
              }
            } else {
              var d = i.default(A + ".active"), f = d.parent(), u = d.index();
              if (d.remove(), i.default(N + ".active").remove(), i.default(R).children().length == i.default(M + ", " + q).length) i.default(M).show(); else {
                var c = u - 1;
                this.switchTab(f.children().eq(c).find("a.nav-link"))
              }
            }
          }, t.toggleFullscreen = function () {
            i.default("body").hasClass("iframe-mode-fullscreen") ? (i.default('[data-widget="iframe-fullscreen"] i').removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize), i.default("body").removeClass("iframe-mode-fullscreen"), i.default(M + ", " + q).height("auto"), i.default(".content-wrapper").height("auto"), i.default(".content-wrapper iframe").height("auto")) : (i.default('[data-widget="iframe-fullscreen"] i').removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize), i.default("body").addClass("iframe-mode-fullscreen")), i.default(window).trigger("resize"), this._fixHeight(!0)
          }, t._init = function () {
            if (window.frameElement && this._config.autoIframeMode) i.default("body").addClass("iframe-mode"); else if (i.default(".content-wrapper").hasClass("iframe-mode")) {
              if (i.default(R).children().length > 2) {
                var e = i.default(N + ":first-child");
                e.show(), this._setItemActive(e.find("iframe").attr("src"))
              }
              this._setupListeners(), this._fixHeight(!0)
            }
          }, t._navScroll = function (e) {
            var t = i.default(D).scrollLeft();
            i.default(D).animate({scrollLeft: t + e}, 250, "linear")
          }, t._setupListeners = function () {
            var e = this;
            i.default(window).on("resize", function () {
              setTimeout(function () {
                e._fixHeight()
              }, 1)
            }), i.default(document).on("click", ".main-sidebar .nav-item > a.nav-link, .sidebar-search-results .list-group-item", function (t) {
              t.preventDefault(), e.openTabSidebar(t.target)
            }), this._config.useNavbarItems && i.default(document).on("click", ".main-header .nav-item a.nav-link, .main-header a.dropdown-item", function (t) {
              t.preventDefault(), e.openTabSidebar(t.target)
            }), i.default(document).on("click", '[data-widget="iframe"].iframe-mode .navbar-nav .nav-link', function (t) {
              t.preventDefault(), e.onTabClick(t.target), e.switchTab(t.target)
            }), i.default(document).on("click", '[data-widget="iframe"].iframe-mode .navbar-nav .nav-link', function (t) {
              t.preventDefault(), e.onTabClick(t.target), e.switchTab(t.target)
            }), i.default(document).on("click", '[data-widget="iframe-close"]', function (t) {
              t.preventDefault();
              var a = t.target;
              "I" == a.nodeName && (a = t.target.offsetParent), e.removeActiveTab(a.attributes["data-type"] ? a.attributes["data-type"].nodeValue : null, a)
            }), i.default(document).on("click", '[data-widget="iframe-fullscreen"]', function (t) {
              t.preventDefault(), e.toggleFullscreen()
            });
            var t = !1, a = null;
            i.default(document).on("mousedown", '[data-widget="iframe-scrollleft"]', function (i) {
              i.preventDefault(), clearInterval(a);
              var n = e._config.scrollOffset;
              e._config.scrollBehaviorSwap || (n = -n), t = !0, e._navScroll(n), a = setInterval(function () {
                e._navScroll(n)
              }, 250)
            }), i.default(document).on("mousedown", '[data-widget="iframe-scrollright"]', function (i) {
              i.preventDefault(), clearInterval(a);
              var n = e._config.scrollOffset;
              e._config.scrollBehaviorSwap && (n = -n), t = !0, e._navScroll(n), a = setInterval(function () {
                e._navScroll(n)
              }, 250)
            }), i.default(document).on("mouseup", function () {
              t && (t = !1, clearInterval(a), a = null)
            })
          }, t._setItemActive = function (e) {
            i.default(".main-sidebar .nav-item > a.nav-link, .main-header a.dropdown-item").removeClass("active"), i.default(".main-header .nav-item a.nav-link").parent().removeClass("active");
            var t = i.default('.main-header .nav-item a.nav-link[href$="' + e + '"]'),
              a = i.default('.main-header a.dropdown-item[href$="' + e + '"]'),
              n = i.default('.main-sidebar .nav-item > a.nav-link[href$="' + e + '"]');
            t.each(function (e, t) {
              i.default(t).parent().addClass("active")
            }), a.each(function (e, t) {
              i.default(t).addClass("active")
            }), n.each(function (e, t) {
              i.default(t).addClass("active"), i.default(t).parents(".nav-treeview").prevAll(".nav-link").addClass("active")
            })
          }, t._fixHeight = function (e) {
            if (void 0 === e && (e = !1), i.default("body").hasClass("iframe-mode-fullscreen")) {
              var t = i.default(window).height(), a = i.default('[data-widget="iframe"].iframe-mode .nav').outerHeight();
              i.default(M + ", " + q + ", .content-wrapper iframe").height(t - a), i.default(".content-wrapper").height(t)
            } else {
              var n = parseFloat(i.default(".content-wrapper").css("height")),
                o = i.default('[data-widget="iframe"].iframe-mode .nav').outerHeight();
              1 == e ? setTimeout(function () {
                i.default(M + ", " + q).height(n - o)
              }, 50) : i.default(".content-wrapper iframe").height(n - o)
            }
          }, e._jQueryInterface = function (t) {
            var a = i.default(this).data("lte.iframe"), n = i.default.extend({}, O, i.default(this).data());
            if (a || (a = new e(this, n), i.default(this).data("lte.iframe", a)), "string" == typeof t && /createTab|openTabSidebar|switchTab|removeActiveTab/.test(t)) {
              for (var o, s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), r = 1; r < s; r++) l[r - 1] = arguments[r];
              (o = a)[t].apply(o, l)
            }
          }, e
        }();
      i.default(window).on("load", function () {
        P._jQueryInterface.call(i.default('[data-widget="iframe"]'))
      }), i.default.fn.IFrame = P._jQueryInterface, i.default.fn.IFrame.Constructor = P, i.default.fn.IFrame.noConflict = function () {
        return i.default.fn.IFrame = L, P._jQueryInterface
      };
      var U = i.default.fn.Layout, B = {
        scrollbarTheme: "os-theme-light",
        scrollbarAutoHide: "l",
        panelAutoHeight: !0,
        panelAutoHeightMode: "min-height",
        preloadDuration: 200,
        loginRegisterAutoHeight: !0
      }, $ = function () {
        function e(e, t) {
          this._config = t, this._element = e
        }

        var t = e.prototype;
        return t.fixLayoutHeight = function (e) {
          void 0 === e && (e = null);
          var t = i.default("body"), a = 0;
          (t.hasClass("control-sidebar-slide-open") || t.hasClass("control-sidebar-open") || "control_sidebar" === e) && (a = i.default(".control-sidebar-content").outerHeight());
          var n = {
            window: i.default(window).height(),
            header: i.default(".main-header").length > 0 ? i.default(".main-header").outerHeight() : 0,
            footer: i.default(".main-footer").length > 0 ? i.default(".main-footer").outerHeight() : 0,
            sidebar: i.default(".main-sidebar .sidebar").length > 0 ? i.default(".main-sidebar .sidebar").height() : 0,
            controlSidebar: a
          }, o = this._max(n), s = this._config.panelAutoHeight;
          !0 === s && (s = 0);
          var l = i.default(".content-wrapper");
          !1 !== s && (o === n.controlSidebar ? l.css(this._config.panelAutoHeightMode, o + s) : o === n.window ? l.css(this._config.panelAutoHeightMode, o + s - n.header - n.footer) : l.css(this._config.panelAutoHeightMode, o + s - n.header), this._isFooterFixed() && l.css(this._config.panelAutoHeightMode, parseFloat(l.css(this._config.panelAutoHeightMode)) + n.footer)), t.hasClass("layout-fixed") && (void 0 !== i.default.fn.overlayScrollbars ? i.default(".main-sidebar .sidebar").overlayScrollbars({
            className: this._config.scrollbarTheme,
            sizeAutoCapable: !0,
            scrollbars: {autoHide: this._config.scrollbarAutoHide, clickScrolling: !0}
          }) : i.default(".main-sidebar .sidebar").css("overflow-y", "auto"))
        }, t.fixLoginRegisterHeight = function () {
          var e = i.default("body"), t = i.default(".login-box, .register-box");
          if (0 === t.length) e.css("height", "auto"), i.default("html").css("height", "auto"); else {
            var a = t.height();
            e.css(this._config.panelAutoHeightMode) !== a && e.css(this._config.panelAutoHeightMode, a)
          }
        }, t._init = function () {
          var e = this;
          this.fixLayoutHeight(), !0 === this._config.loginRegisterAutoHeight ? this.fixLoginRegisterHeight() : this._config.loginRegisterAutoHeight === parseInt(this._config.loginRegisterAutoHeight, 10) && setInterval(this.fixLoginRegisterHeight, this._config.loginRegisterAutoHeight), i.default(".main-sidebar .sidebar").on("collapsed.lte.treeview expanded.lte.treeview", function () {
            e.fixLayoutHeight()
          }), i.default(".main-sidebar").on("mouseenter mouseleave", function () {
            i.default("body").hasClass("sidebar-collapse") && e.fixLayoutHeight()
          }), i.default('[data-widget="pushmenu"]').on("collapsed.lte.pushmenu shown.lte.pushmenu", function () {
            setTimeout(function () {
              e.fixLayoutHeight()
            }, 300)
          }), i.default('[data-widget="control-sidebar"]').on("collapsed.lte.controlsidebar", function () {
            e.fixLayoutHeight()
          }).on("expanded.lte.controlsidebar", function () {
            e.fixLayoutHeight("control_sidebar")
          }), i.default(window).resize(function () {
            e.fixLayoutHeight()
          }), setTimeout(function () {
            i.default("body.hold-transition").removeClass("hold-transition")
          }, 50), setTimeout(function () {
            var e = i.default(".preloader");
            e && (e.css("height", 0), setTimeout(function () {
              e.children().hide()
            }, 200))
          }, this._config.preloadDuration)
        }, t._max = function (e) {
          var t = 0;
          return Object.keys(e).forEach(function (a) {
            e[a] > t && (t = e[a])
          }), t
        }, t._isFooterFixed = function () {
          return "fixed" === i.default(".main-footer").css("position")
        }, e._jQueryInterface = function (t) {
          return void 0 === t && (t = ""), this.each(function () {
            var a = i.default(this).data("lte.layout"), n = i.default.extend({}, B, i.default(this).data());
            a || (a = new e(i.default(this), n), i.default(this).data("lte.layout", a)), "init" === t || "" === t ? a._init() : "fixLayoutHeight" !== t && "fixLoginRegisterHeight" !== t || a[t]()
          })
        }, e
      }();
      i.default(window).on("load", function () {
        $._jQueryInterface.call(i.default("body"))
      }), i.default(".main-sidebar .sidebar a").on("focusin", function () {
        i.default(".main-sidebar").addClass("sidebar-focused")
      }).on("focusout", function () {
        i.default(".main-sidebar").removeClass("sidebar-focused")
      }), i.default.fn.Layout = $._jQueryInterface, i.default.fn.Layout.Constructor = $, i.default.fn.Layout.noConflict = function () {
        return i.default.fn.Layout = U, $._jQueryInterface
      };
      var W = "PushMenu", V = i.default.fn[W], G = "#sidebar-overlay",
        J = {autoCollapseSize: 992, enableRemember: !1, noTransitionAfterReload: !0}, K = function () {
          function e(e, t) {
            this._element = e, this._options = i.default.extend({}, J, t), 0 === i.default(G).length && this._addOverlay(), this._init()
          }

          var t = e.prototype;
          return t.expand = function () {
            var e = i.default("body");
            this._options.autoCollapseSize && i.default(window).width() <= this._options.autoCollapseSize && e.addClass("sidebar-open"), e.addClass("sidebar-is-opening").removeClass("sidebar-collapse sidebar-closed").delay(50).queue(function () {
              e.removeClass("sidebar-is-opening"), i.default(this).dequeue()
            }), this._options.enableRemember && localStorage.setItem("remember.lte.pushmenu", "sidebar-open"), i.default(this._element).trigger(i.default.Event("shown.lte.pushmenu"))
          }, t.collapse = function () {
            var e = i.default("body");
            this._options.autoCollapseSize && i.default(window).width() <= this._options.autoCollapseSize && e.removeClass("sidebar-open").addClass("sidebar-closed"), e.addClass("sidebar-collapse"), this._options.enableRemember && localStorage.setItem("remember.lte.pushmenu", "sidebar-collapse"), i.default(this._element).trigger(i.default.Event("collapsed.lte.pushmenu"))
          }, t.toggle = function () {
            i.default("body").hasClass("sidebar-collapse") ? this.expand() : this.collapse()
          }, t.autoCollapse = function (e) {
            if (void 0 === e && (e = !1), this._options.autoCollapseSize) {
              var t = i.default("body");
              i.default(window).width() <= this._options.autoCollapseSize ? t.hasClass("sidebar-open") || this.collapse() : !0 === e && (t.hasClass("sidebar-open") ? t.removeClass("sidebar-open") : t.hasClass("sidebar-closed") && this.expand())
            }
          }, t.remember = function () {
            if (this._options.enableRemember) {
              var e = i.default("body");
              "sidebar-collapse" === localStorage.getItem("remember.lte.pushmenu") ? this._options.noTransitionAfterReload ? e.addClass("hold-transition").addClass("sidebar-collapse").delay(50).queue(function () {
                i.default(this).removeClass("hold-transition"), i.default(this).dequeue()
              }) : e.addClass("sidebar-collapse") : this._options.noTransitionAfterReload ? e.addClass("hold-transition").removeClass("sidebar-collapse").delay(50).queue(function () {
                i.default(this).removeClass("hold-transition"), i.default(this).dequeue()
              }) : e.removeClass("sidebar-collapse")
            }
          }, t._init = function () {
            var e = this;
            this.remember(), this.autoCollapse(), i.default(window).resize(function () {
              e.autoCollapse(!0)
            })
          }, t._addOverlay = function () {
            var e = this, t = i.default("<div />", {id: "sidebar-overlay"});
            t.on("click", function () {
              e.collapse()
            }), i.default(".wrapper").append(t)
          }, e._jQueryInterface = function (t) {
            return this.each(function () {
              var a = i.default(this).data("lte.pushmenu"), n = i.default.extend({}, J, i.default(this).data());
              a || (a = new e(this, n), i.default(this).data("lte.pushmenu", a)), "string" == typeof t && /collapse|expand|toggle/.test(t) && a[t]()
            })
          }, e
        }();
      i.default(document).on("click", '[data-widget="pushmenu"]', function (e) {
        e.preventDefault();
        var t = e.currentTarget;
        "pushmenu" !== i.default(t).data("widget") && (t = i.default(t).closest('[data-widget="pushmenu"]')), K._jQueryInterface.call(i.default(t), "toggle")
      }), i.default(window).on("load", function () {
        K._jQueryInterface.call(i.default('[data-widget="pushmenu"]'))
      }), i.default.fn[W] = K._jQueryInterface, i.default.fn[W].Constructor = K, i.default.fn[W].noConflict = function () {
        return i.default.fn[W] = V, K._jQueryInterface
      };
      var X = "SidebarSearch", Y = i.default.fn[X], Z = '[data-widget="sidebar-search"]', ee = {
        arrowSign: "->",
        minLength: 3,
        maxResults: 7,
        highlightName: !0,
        highlightPath: !1,
        highlightClass: "text-light",
        notFoundText: "No element found!"
      }, te = [], ae = function () {
        function e(e, t) {
          this.element = e, this.options = i.default.extend({}, ee, t), this.items = []
        }

        var a = e.prototype;
        return a.init = function () {
          var e = this;
          0 !== i.default(Z).length && (0 === i.default(Z).next(".sidebar-search-results").length && i.default(Z).after(i.default("<div />", {class: "sidebar-search-results"})), 0 === i.default(".sidebar-search-results").children(".list-group").length && i.default(".sidebar-search-results").append(i.default("<div />", {class: "list-group"})), this._addNotFound(), i.default(".main-sidebar .nav-sidebar").children().each(function (t, a) {
            e._parseItem(a)
          }))
        }, a.search = function () {
          var e = this, t = i.default('[data-widget="sidebar-search"] .form-control').val().toLowerCase();
          if (t.length < this.options.minLength) return i.default(".sidebar-search-results .list-group").empty(), this._addNotFound(), void this.close();
          var a = te.filter(function (e) {
            return e.name.toLowerCase().includes(t)
          }), n = i.default(a.slice(0, this.options.maxResults));
          i.default(".sidebar-search-results .list-group").empty(), 0 === n.length ? this._addNotFound() : n.each(function (t, a) {
            i.default(".sidebar-search-results .list-group").append(e._renderItem(escape(a.name), escape(a.link), a.path))
          }), this.open()
        }, a.open = function () {
          i.default(Z).parent().addClass("sidebar-search-open"), i.default('[data-widget="sidebar-search"] .btn i').removeClass("fa-search").addClass("fa-times")
        }, a.close = function () {
          i.default(Z).parent().removeClass("sidebar-search-open"), i.default('[data-widget="sidebar-search"] .btn i').removeClass("fa-times").addClass("fa-search")
        }, a.toggle = function () {
          i.default(Z).parent().hasClass("sidebar-search-open") ? this.close() : this.open()
        }, a._parseItem = function (e, t) {
          var a = this;
          if (void 0 === t && (t = []), !i.default(e).hasClass("nav-header")) {
            var n = {}, o = i.default(e).clone().find("> .nav-link"), s = i.default(e).clone().find("> .nav-treeview"),
              l = o.attr("href"), r = o.find("p").children().remove().end().text();
            if (n.name = this._trimText(r), n.link = l, n.path = t, 0 === s.length) te.push(n); else {
              var d = n.path.concat([n.name]);
              s.children().each(function (e, t) {
                a._parseItem(t, d)
              })
            }
          }
        }, a._trimText = function (e) {
          return t.trim(e.replace(/(\r\n|\n|\r)/gm, " "))
        }, a._renderItem = function (e, t, a) {
          var n = this;
          if (a = a.join(" " + this.options.arrowSign + " "), e = unescape(e), this.options.highlightName || this.options.highlightPath) {
            var o = i.default('[data-widget="sidebar-search"] .form-control').val().toLowerCase(),
              s = new RegExp(o, "gi");
            this.options.highlightName && (e = e.replace(s, function (e) {
              return '<strong class="' + n.options.highlightClass + '">' + e + "</strong>"
            })), this.options.highlightPath && (a = a.replace(s, function (e) {
              return '<strong class="' + n.options.highlightClass + '">' + e + "</strong>"
            }))
          }
          var l = i.default("<a/>", {href: t, class: "list-group-item"}),
            r = i.default("<div/>", {class: "search-title"}).html(e),
            d = i.default("<div/>", {class: "search-path"}).html(a);
          return l.append(r).append(d), l
        }, a._addNotFound = function () {
          i.default(".sidebar-search-results .list-group").append(this._renderItem(this.options.notFoundText, "#", []))
        }, e._jQueryInterface = function (t) {
          var a = i.default(this).data("lte.sidebar-search");
          a || (a = i.default(this).data());
          var n = i.default.extend({}, ee, "object" == typeof t ? t : a), o = new e(i.default(this), n);
          i.default(this).data("lte.sidebar-search", "object" == typeof t ? t : a), "string" == typeof t && /init|toggle|close|open|search/.test(t) ? o[t]() : o.init()
        }, e
      }();
      i.default(document).on("click", '[data-widget="sidebar-search"] .btn', function (e) {
        e.preventDefault(), ae._jQueryInterface.call(i.default(Z), "toggle")
      }), i.default(document).on("keyup", '[data-widget="sidebar-search"] .form-control', function (e) {
        return 38 == e.keyCode ? (e.preventDefault(), void i.default(".sidebar-search-results .list-group").children().last().focus()) : 40 == e.keyCode ? (e.preventDefault(), void i.default(".sidebar-search-results .list-group").children().first().focus()) : void setTimeout(function () {
          ae._jQueryInterface.call(i.default(Z), "search")
        }, 100)
      }), i.default(document).on("keydown", ".sidebar-search-results .list-group", function (e) {
        var t = i.default(":focus");
        38 == e.keyCode && (e.preventDefault(), t.is(":first-child") ? t.siblings().last().focus() : t.prev().focus()), 40 == e.keyCode && (e.preventDefault(), t.is(":last-child") ? t.siblings().first().focus() : t.next().focus())
      }), i.default(window).on("load", function () {
        ae._jQueryInterface.call(i.default(Z), "init")
      }), i.default.fn[X] = ae._jQueryInterface, i.default.fn[X].Constructor = ae, i.default.fn[X].noConflict = function () {
        return i.default.fn[X] = Y, ae._jQueryInterface
      };
      var ie = "NavbarSearch", ne = i.default.fn[ie], oe = {resetOnClose: !0, target: ".navbar-search-block"},
        se = function () {
          function e(e, t) {
            this._element = e, this._config = i.default.extend({}, oe, t)
          }

          var t = e.prototype;
          return t.open = function () {
            i.default(this._config.target).css("display", "flex").hide().fadeIn().addClass("navbar-search-open"), i.default(this._config.target + " .form-control").focus()
          }, t.close = function () {
            i.default(this._config.target).fadeOut().removeClass("navbar-search-open"), this._config.resetOnClose && i.default(this._config.target + " .form-control").val("")
          }, t.toggle = function () {
            i.default(this._config.target).hasClass("navbar-search-open") ? this.close() : this.open()
          }, e._jQueryInterface = function (t) {
            return this.each(function () {
              var a = i.default(this).data("lte.navbar-search"), n = i.default.extend({}, oe, i.default(this).data());
              if (a || (a = new e(this, n), i.default(this).data("lte.navbar-search", a)), !/toggle|close|open/.test(t)) throw new Error("Undefined method " + t);
              a[t]()
            })
          }, e
        }();
      i.default(document).on("click", '[data-widget="navbar-search"]', function (e) {
        e.preventDefault();
        var t = i.default(e.currentTarget);
        "navbar-search" !== t.data("widget") && (t = t.closest('[data-widget="navbar-search"]')), se._jQueryInterface.call(t, "toggle")
      }), i.default.fn[ie] = se._jQueryInterface, i.default.fn[ie].Constructor = se, i.default.fn[ie].noConflict = function () {
        return i.default.fn[ie] = ne, se._jQueryInterface
      };
      var le = i.default.fn.Toasts, re = "init.lte.toasts", de = {
        position: "topRight",
        fixed: !0,
        autohide: !1,
        autoremove: !0,
        delay: 1e3,
        fade: !0,
        icon: null,
        image: null,
        imageAlt: null,
        imageHeight: "25px",
        title: null,
        subtitle: null,
        close: !0,
        body: null,
        class: null
      }, fe = function () {
        function e(e, t) {
          this._config = t, this._prepareContainer(), i.default("body").trigger(i.default.Event(re))
        }

        var t = e.prototype;
        return t.create = function () {
          var e = i.default('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');
          e.data("autohide", this._config.autohide), e.data("animation", this._config.fade), this._config.class && e.addClass(this._config.class), this._config.delay && 500 != this._config.delay && e.data("delay", this._config.delay);
          var t = i.default('<div class="toast-header">');
          if (null != this._config.image) {
            var a = i.default("<img />").addClass("rounded mr-2").attr("src", this._config.image).attr("alt", this._config.imageAlt);
            null != this._config.imageHeight && a.height(this._config.imageHeight).width("auto"), t.append(a)
          }
          if (null != this._config.icon && t.append(i.default("<i />").addClass("mr-2").addClass(this._config.icon)), null != this._config.title && t.append(i.default("<strong />").addClass("mr-auto").html(this._config.title)), null != this._config.subtitle && t.append(i.default("<small />").html(this._config.subtitle)), 1 == this._config.close) {
            var n = i.default('<button data-dismiss="toast" />').attr("type", "button").addClass("ml-2 mb-1 close").attr("aria-label", "Close").append('<span aria-hidden="true">&times;</span>');
            null == this._config.title && n.toggleClass("ml-2 ml-auto"), t.append(n)
          }
          e.append(t), null != this._config.body && e.append(i.default('<div class="toast-body" />').html(this._config.body)), i.default(this._getContainerId()).prepend(e);
          var o = i.default("body");
          o.trigger(i.default.Event("created.lte.toasts")), e.toast("show"), this._config.autoremove && e.on("hidden.bs.toast", function () {
            i.default(this).delay(200).remove(), o.trigger(i.default.Event("removed.lte.toasts"))
          })
        }, t._getContainerId = function () {
          return "topRight" == this._config.position ? "#toastsContainerTopRight" : "topLeft" == this._config.position ? "#toastsContainerTopLeft" : "bottomRight" == this._config.position ? "#toastsContainerBottomRight" : "bottomLeft" == this._config.position ? "#toastsContainerBottomLeft" : void 0
        }, t._prepareContainer = function () {
          if (0 === i.default(this._getContainerId()).length) {
            var e = i.default("<div />").attr("id", this._getContainerId().replace("#", ""));
            "topRight" == this._config.position ? e.addClass("toasts-top-right") : "topLeft" == this._config.position ? e.addClass("toasts-top-left") : "bottomRight" == this._config.position ? e.addClass("toasts-bottom-right") : "bottomLeft" == this._config.position && e.addClass("toasts-bottom-left"), i.default("body").append(e)
          }
          this._config.fixed ? i.default(this._getContainerId()).addClass("fixed") : i.default(this._getContainerId()).removeClass("fixed")
        }, e._jQueryInterface = function (t, a) {
          return this.each(function () {
            var n = i.default.extend({}, de, a), o = new e(i.default(this), n);
            "create" === t && o[t]()
          })
        }, e
      }();
      i.default.fn.Toasts = fe._jQueryInterface, i.default.fn.Toasts.Constructor = fe, i.default.fn.Toasts.noConflict = function () {
        return i.default.fn.Toasts = le, fe._jQueryInterface
      };
      var ue = "TodoList", ce = i.default.fn[ue], he = {
        onCheck: function (e) {
          return e
        }, onUnCheck: function (e) {
          return e
        }
      }, ge = function () {
        function e(e, t) {
          this._config = t, this._element = e, this._init()
        }

        var t = e.prototype;
        return t.toggle = function (e) {
          e.parents("li").toggleClass("done"), i.default(e).prop("checked") ? this.check(e) : this.unCheck(i.default(e))
        }, t.check = function (e) {
          this._config.onCheck.call(e)
        }, t.unCheck = function (e) {
          this._config.onUnCheck.call(e)
        }, t._init = function () {
          var e = this, t = this._element;
          t.find("input:checkbox:checked").parents("li").toggleClass("done"), t.on("change", "input:checkbox", function (t) {
            e.toggle(i.default(t.target))
          })
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.todolist");
            a || (a = i.default(this).data());
            var n = i.default.extend({}, he, "object" == typeof t ? t : a), o = new e(i.default(this), n);
            i.default(this).data("lte.todolist", "object" == typeof t ? t : a), "init" === t && o[t]()
          })
        }, e
      }();
      i.default(window).on("load", function () {
        ge._jQueryInterface.call(i.default('[data-widget="todo-list"]'))
      }), i.default.fn[ue] = ge._jQueryInterface, i.default.fn[ue].Constructor = ge, i.default.fn[ue].noConflict = function () {
        return i.default.fn[ue] = ce, ge._jQueryInterface
      };
      var pe = "Treeview", me = i.default.fn[pe], ve = {
        trigger: '[data-widget="treeview"] .nav-link',
        animationSpeed: 300,
        accordion: !0,
        expandSidebar: !1,
        sidebarButtonSelector: '[data-widget="pushmenu"]'
      }, _e = function () {
        function e(e, t) {
          this._config = t, this._element = e
        }

        var t = e.prototype;
        return t.init = function () {
          i.default(".nav-item.menu-open .nav-treeview.menu-open").css("display", "block"), this._setupListeners()
        }, t.expand = function (e, t) {
          var a = this, n = i.default.Event("expanded.lte.treeview");
          if (this._config.accordion) {
            var o = t.siblings(".menu-open").first(), s = o.find(".nav-treeview").first();
            this.collapse(s, o)
          }
          t.addClass("menu-is-opening"), e.stop().slideDown(this._config.animationSpeed, function () {
            t.addClass("menu-open"), i.default(a._element).trigger(n)
          }), this._config.expandSidebar && this._expandSidebar()
        }, t.collapse = function (e, t) {
          var a = this, n = i.default.Event("collapsed.lte.treeview");
          t.removeClass("menu-is-opening menu-open"), e.stop().slideUp(this._config.animationSpeed, function () {
            i.default(a._element).trigger(n), e.find(".menu-open > .nav-treeview").slideUp(), e.find(".menu-open").removeClass("menu-open")
          })
        }, t.toggle = function (e) {
          var t = i.default(e.currentTarget), a = t.parent(), n = a.find("> .nav-treeview");
          if (n.is(".nav-treeview") || (a.is(".nav-item") || (n = a.parent().find("> .nav-treeview")), n.is(".nav-treeview"))) {
            e.preventDefault();
            var o = t.parents(".nav-item").first();
            o.hasClass("menu-open") ? this.collapse(i.default(n), o) : this.expand(i.default(n), o)
          }
        }, t._setupListeners = function () {
          var e = this, t = void 0 !== this._element.attr("id") ? "#" + this._element.attr("id") : "";
          i.default(document).on("click", "" + t + this._config.trigger, function (t) {
            e.toggle(t)
          })
        }, t._expandSidebar = function () {
          i.default("body").hasClass("sidebar-collapse") && i.default(this._config.sidebarButtonSelector).PushMenu("expand")
        }, e._jQueryInterface = function (t) {
          return this.each(function () {
            var a = i.default(this).data("lte.treeview"), n = i.default.extend({}, ve, i.default(this).data());
            a || (a = new e(i.default(this), n), i.default(this).data("lte.treeview", a)), "init" === t && a[t]()
          })
        }, e
      }();
      i.default(window).on("load.lte.treeview", function () {
        i.default('[data-widget="treeview"]').each(function () {
          _e._jQueryInterface.call(i.default(this), "init")
        })
      }), i.default.fn[pe] = _e._jQueryInterface, i.default.fn[pe].Constructor = _e, i.default.fn[pe].noConflict = function () {
        return i.default.fn[pe] = me, _e._jQueryInterface
      }, e.CardRefresh = d, e.CardWidget = p, e.ControlSidebar = b, e.DirectChat = C, e.Dropdown = j, e.ExpandableTable = Q, e.Fullscreen = E, e.IFrame = P, e.Layout = $, e.NavbarSearch = se, e.PushMenu = K, e.SidebarSearch = ae, e.Toasts = fe, e.TodoList = ge, e.Treeview = _e, Object.defineProperty(e, "__esModule", {value: !0})
    });
  }, {"jquery": "HlZQ"}]
}, {}, ["ERUm"], null)
//# sourceMappingURL=/vanilla-html-css-pos-system/adminlte.fbdad04d.js.map
