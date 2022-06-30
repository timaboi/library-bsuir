(function (h, e, b, i, c, g, j) {
  /*! Jssor */
  new (function () {})();
  var d = (h.$JssorEasing$ = {
    $EaseSwing: function (a) {
      return -b.cos(a * b.PI) / 2 + 0.5;
    },
    $EaseLinear: function (a) {
      return a;
    },
    $EaseInQuad: function (a) {
      return a * a;
    },
    $EaseOutQuad: function (a) {
      return -a * (a - 2);
    },
    $EaseInOutQuad: function (a) {
      return (a *= 2) < 1 ? (1 / 2) * a * a : (-1 / 2) * (--a * (a - 2) - 1);
    },
    $EaseInCubic: function (a) {
      return a * a * a;
    },
    $EaseOutCubic: function (a) {
      return (a -= 1) * a * a + 1;
    },
    $EaseInOutCubic: function (a) {
      return (a *= 2) < 1
        ? (1 / 2) * a * a * a
        : (1 / 2) * ((a -= 2) * a * a + 2);
    },
    $EaseInQuart: function (a) {
      return a * a * a * a;
    },
    $EaseOutQuart: function (a) {
      return -((a -= 1) * a * a * a - 1);
    },
    $EaseInOutQuart: function (a) {
      return (a *= 2) < 1
        ? (1 / 2) * a * a * a * a
        : (-1 / 2) * ((a -= 2) * a * a * a - 2);
    },
    $EaseInQuint: function (a) {
      return a * a * a * a * a;
    },
    $EaseOutQuint: function (a) {
      return (a -= 1) * a * a * a * a + 1;
    },
    $EaseInOutQuint: function (a) {
      return (a *= 2) < 1
        ? (1 / 2) * a * a * a * a * a
        : (1 / 2) * ((a -= 2) * a * a * a * a + 2);
    },
    $EaseInSine: function (a) {
      return 1 - b.cos((a * b.PI) / 2);
    },
    $EaseOutSine: function (a) {
      return b.sin((a * b.PI) / 2);
    },
    $EaseInOutSine: function (a) {
      return (-1 / 2) * (b.cos(b.PI * a) - 1);
    },
    $EaseInExpo: function (a) {
      return a == 0 ? 0 : b.pow(2, 10 * (a - 1));
    },
    $EaseOutExpo: function (a) {
      return a == 1 ? 1 : -b.pow(2, -10 * a) + 1;
    },
    $EaseInOutExpo: function (a) {
      return a == 0 || a == 1
        ? a
        : (a *= 2) < 1
        ? (1 / 2) * b.pow(2, 10 * (a - 1))
        : (1 / 2) * (-b.pow(2, -10 * --a) + 2);
    },
    $EaseInCirc: function (a) {
      return -(b.sqrt(1 - a * a) - 1);
    },
    $EaseOutCirc: function (a) {
      return b.sqrt(1 - (a -= 1) * a);
    },
    $EaseInOutCirc: function (a) {
      return (a *= 2) < 1
        ? (-1 / 2) * (b.sqrt(1 - a * a) - 1)
        : (1 / 2) * (b.sqrt(1 - (a -= 2) * a) + 1);
    },
    $EaseInElastic: function (a) {
      if (!a || a == 1) return a;
      var c = 0.3,
        d = 0.075;
      return -(b.pow(2, 10 * (a -= 1)) * b.sin(((a - d) * 2 * b.PI) / c));
    },
    $EaseOutElastic: function (a) {
      if (!a || a == 1) return a;
      var c = 0.3,
        d = 0.075;
      return b.pow(2, -10 * a) * b.sin(((a - d) * 2 * b.PI) / c) + 1;
    },
    $EaseInOutElastic: function (a) {
      if (!a || a == 1) return a;
      var c = 0.45,
        d = 0.1125;
      return (a *= 2) < 1
        ? -0.5 * b.pow(2, 10 * (a -= 1)) * b.sin(((a - d) * 2 * b.PI) / c)
        : b.pow(2, -10 * (a -= 1)) * b.sin(((a - d) * 2 * b.PI) / c) * 0.5 + 1;
    },
    $EaseInBack: function (a) {
      var b = 1.70158;
      return a * a * ((b + 1) * a - b);
    },
    $EaseOutBack: function (a) {
      var b = 1.70158;
      return (a -= 1) * a * ((b + 1) * a + b) + 1;
    },
    $EaseInOutBack: function (a) {
      var b = 1.70158;
      return (a *= 2) < 1
        ? (1 / 2) * a * a * (((b *= 1.525) + 1) * a - b)
        : (1 / 2) * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2);
    },
    $EaseInBounce: function (a) {
      return 1 - d.$EaseOutBounce(1 - a);
    },
    $EaseOutBounce: function (a) {
      return a < 1 / 2.75
        ? 7.5625 * a * a
        : a < 2 / 2.75
        ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
        : a < 2.5 / 2.75
        ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
        : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
    },
    $EaseInOutBounce: function (a) {
      return a < 1 / 2
        ? d.$EaseInBounce(a * 2) * 0.5
        : d.$EaseOutBounce(a * 2 - 1) * 0.5 + 0.5;
    },
    $EaseGoBack: function (a) {
      return 1 - b.abs(2 - 1);
    },
    $EaseInWave: function (a) {
      return 1 - b.cos(a * b.PI * 2);
    },
    $EaseOutWave: function (a) {
      return b.sin(a * b.PI * 2);
    },
    $EaseOutJump: function (a) {
      return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a);
    },
    $EaseInJump: function (a) {
      return (a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a;
    },
  });
  var a = new (function () {
    var f = this,
      xb = /\S+/g,
      R = 1,
      fb = 2,
      kb = 3,
      jb = 4,
      ob = 5,
      X,
      s = 0,
      l = 0,
      p = 0,
      bb = 0,
      A = 0,
      S = navigator,
      tb = S.appName,
      k = S.userAgent,
      z;
    function Eb() {
      X = X || { ff: "ontouchstart" in h || "createTouch" in e };
      return X;
    }
    function v(i) {
      if (!s) {
        s = -1;
        if (
          tb == "Microsoft Internet Explorer" &&
          !!h.attachEvent &&
          !!h.ActiveXObject
        ) {
          var f = k.indexOf("MSIE");
          s = R;
          p = n(
            k.substring(f + 5, k.indexOf(";", f))
          ); /*@cc_on bb=@_jscript_version@*/
          l = e.documentMode || p;
        } else if (tb == "Netscape" && !!h.addEventListener) {
          var d = k.indexOf("Firefox"),
            b = k.indexOf("Safari"),
            g = k.indexOf("Chrome"),
            c = k.indexOf("AppleWebKit");
          if (d >= 0) {
            s = fb;
            l = n(k.substring(d + 8));
          } else if (b >= 0) {
            var j = k.substring(0, b).lastIndexOf("/");
            s = g >= 0 ? jb : kb;
            l = n(k.substring(j + 1, b));
          } else {
            var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(k);
            if (a) {
              s = R;
              l = p = n(a[1]);
            }
          }
          if (c >= 0) A = n(k.substring(c + 12));
        } else {
          var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(k);
          if (a) {
            s = ob;
            l = n(a[2]);
          }
        }
      }
      return i == s;
    }
    function q() {
      return v(R);
    }
    function M() {
      return q() && (l < 6 || e.compatMode == "BackCompat");
    }
    function ib() {
      return v(kb);
    }
    function hb() {
      return v(jb);
    }
    function nb() {
      return v(ob);
    }
    function cb() {
      return ib() && A > 534 && A < 535;
    }
    function K() {
      return q() && l < 9;
    }
    function t(a) {
      if (!z) {
        m(
          [
            "transform",
            "WebkitTransform",
            "msTransform",
            "MozTransform",
            "OTransform",
          ],
          function (b) {
            if (a.style[b] != j) {
              z = b;
              return c;
            }
          }
        );
        z = z || "transform";
      }
      return z;
    }
    function sb(a) {
      return {}.toString.call(a);
    }
    var J;
    function Cb() {
      if (!J) {
        J = {};
        m(
          [
            "Boolean",
            "Number",
            "String",
            "Function",
            "Array",
            "Date",
            "RegExp",
            "Object",
          ],
          function (a) {
            J["[object " + a + "]"] = a.toLowerCase();
          }
        );
      }
      return J;
    }
    function m(a, d) {
      if (sb(a) == "[object Array]") {
        for (var b = 0; b < a.length; b++) if (d(a[b], b, a)) return c;
      } else for (var e in a) if (d(a[e], e, a)) return c;
    }
    function C(a) {
      return a == i ? String(a) : Cb()[sb(a)] || "object";
    }
    function qb(a) {
      for (var b in a) return c;
    }
    function F(a) {
      try {
        return (
          C(a) == "object" &&
          !a.nodeType &&
          a != a.window &&
          (!a.constructor ||
            {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
        );
      } catch (b) {}
    }
    function y(a, b) {
      return { x: a, y: b };
    }
    function vb(b, a) {
      setTimeout(b, a || 0);
    }
    function H(b, d, c) {
      var a = !b || b == "inherit" ? "" : b;
      m(d, function (c) {
        var b = c.exec(a);
        if (b) {
          var d = a.substr(0, b.index),
            e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
          a = d + e;
        }
      });
      a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
      return a;
    }
    function eb(b, a) {
      if (l < 9) b.style.filter = a;
    }
    function zb(b, a, c) {
      if (bb < 9) {
        var e = b.style.filter,
          h = new RegExp(
            /[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g
          ),
          g = a
            ? "progid:DXImageTransform.Microsoft.Matrix(M11=" +
              a[0][0] +
              ", M12=" +
              a[0][1] +
              ", M21=" +
              a[1][0] +
              ", M22=" +
              a[1][1] +
              ", SizingMethod='auto expand')"
            : "",
          d = H(e, [h], g);
        eb(b, d);
        f.vd(b, c.y);
        f.rd(b, c.x);
      }
    }
    f.lf = Eb;
    f.dd = q;
    f.mf = ib;
    f.cf = hb;
    f.uc = nb;
    f.T = K;
    f.fd = function () {
      return l;
    };
    f.sc = function () {
      v();
      return A;
    };
    f.$Delay = vb;
    function V(a) {
      a.constructor === V.caller && a.hd && a.hd.apply(a, V.caller.arguments);
    }
    f.hd = V;
    f.X = function (a) {
      if (f.gd(a)) a = e.getElementById(a);
      return a;
    };
    function r(a) {
      return a || h.event;
    }
    f.jd = r;
    f.Bc = function (a) {
      a = r(a);
      return a.target || a.srcElement || e;
    };
    f.nd = function (a) {
      a = r(a);
      return { x: a.pageX || a.clientX || 0, y: a.pageY || a.clientY || 0 };
    };
    function D(c, d, a) {
      if (a != j) c.style[d] = a;
      else {
        var b = c.currentStyle || c.style;
        a = b[d];
        if (a == "" && h.getComputedStyle) {
          b = c.ownerDocument.defaultView.getComputedStyle(c, i);
          b && (a = b.getPropertyValue(d) || b[d]);
        }
        return a;
      }
    }
    function Y(b, c, a, d) {
      if (a != j) {
        d && (a += "px");
        D(b, c, a);
      } else return n(D(b, c));
    }
    function o(d, a) {
      var b = a & 2,
        c = a ? Y : D;
      return function (e, a) {
        return c(e, d, a, b);
      };
    }
    function Ab(b) {
      if (q() && p < 9) {
        var a = /opacity=([^)]*)/.exec(b.style.filter || "");
        return a ? n(a[1]) / 100 : 1;
      } else return n(b.style.opacity || "1");
    }
    function Bb(c, a, f) {
      if (q() && p < 9) {
        var h = c.style.filter || "",
          i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
          e = b.round(100 * a),
          d = "";
        if (e < 100 || f) d = "alpha(opacity=" + e + ") ";
        var g = H(h, [i], d);
        eb(c, g);
      } else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100;
    }
    function ab(e, a) {
      var d = a.$Rotate || 0,
        c = a.$Scale == j ? 1 : a.$Scale;
      if (K()) {
        var l = f.Ge((d / 180) * b.PI, c, c);
        zb(
          e,
          !d && c == 1 ? i : l,
          f.He(l, a.$OriginalWidth, a.$OriginalHeight)
        );
      } else {
        var g = t(e);
        if (g) {
          var k = "rotate(" + (d % 360) + "deg) scale(" + c + ")";
          if (hb() && A > 535 && "ontouchstart" in h)
            k += " perspective(2000px)";
          e.style[g] = k;
        }
      }
    }
    f.jf = function (b, a) {
      if (cb()) vb(f.H(i, ab, b, a));
      else ab(b, a);
    };
    f.Fe = function (b, c) {
      var a = t(b);
      if (a) b.style[a + "Origin"] = c;
    };
    f.se = function (a, c) {
      if ((q() && p < 9) || (p < 10 && M())) a.style.zoom = c == 1 ? "" : c;
      else {
        var b = t(a);
        if (b) {
          var f = "scale(" + c + ")",
            e = a.style[b],
            g = new RegExp(/[\s]*scale\(.*?\)/g),
            d = H(e, [g], f);
          a.style[b] = d;
        }
      }
    };
    f.te = function (a) {
      if (!a.style[t(a)] || a.style[t(a)] == "none")
        a.style[t(a)] = "perspective(2000px)";
    };
    f.ue = function (a) {
      a.style[t(a)] = "none";
    };
    f.Gb = function (b, a) {
      return function (c) {
        c = r(c);
        var e = c.type,
          d =
            c.relatedTarget || (e == "mouseout" ? c.toElement : c.fromElement);
        (!d || (d !== a && !f.ye(a, d))) && b(c);
      };
    };
    f.c = function (a, c, d, b) {
      a = f.X(a);
      if (a.addEventListener) {
        c == "mousewheel" && a.addEventListener("DOMMouseScroll", d, b);
        a.addEventListener(c, d, b);
      } else if (a.attachEvent) {
        a.attachEvent("on" + c, d);
        b && a.setCapture && a.setCapture();
      }
    };
    f.M = function (a, c, d, b) {
      a = f.X(a);
      if (a.removeEventListener) {
        c == "mousewheel" && a.removeEventListener("DOMMouseScroll", d, b);
        a.removeEventListener(c, d, b);
      } else if (a.detachEvent) {
        a.detachEvent("on" + c, d);
        b && a.releaseCapture && a.releaseCapture();
      }
    };
    f.Fb = function (a) {
      a = r(a);
      a.preventDefault && a.preventDefault();
      a.cancel = c;
      a.returnValue = g;
    };
    f.Te = function (a) {
      a = r(a);
      a.stopPropagation && a.stopPropagation();
      a.cancelBubble = c;
    };
    f.H = function (d, c) {
      var a = [].slice.call(arguments, 2),
        b = function () {
          var b = a.concat([].slice.call(arguments, 0));
          return c.apply(d, b);
        };
      return b;
    };
    f.Ue = function (a, b) {
      if (b == j) return a.textContent || a.innerText;
      var c = e.createTextNode(b);
      f.mc(a);
      a.appendChild(c);
    };
    f.K = function (d, c) {
      for (var b = [], a = d.firstChild; a; a = a.nextSibling)
        (c || a.nodeType == 1) && b.push(a);
      return b;
    };
    function rb(a, c, e, b) {
      b = b || "u";
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (Q(a, b) == c) return a;
          if (!e) {
            var d = rb(a, c, e, b);
            if (d) return d;
          }
        }
    }
    f.z = rb;
    function O(a, d, f, b) {
      b = b || "u";
      var c = [];
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          Q(a, b) == d && c.push(a);
          if (!f) {
            var e = O(a, d, f, b);
            if (e.length) c = c.concat(e);
          }
        }
      return c;
    }
    function lb(a, c, d) {
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          if (a.tagName == c) return a;
          if (!d) {
            var b = lb(a, c, d);
            if (b) return b;
          }
        }
    }
    f.Qe = lb;
    function db(a, c, e) {
      var b = [];
      for (a = a ? a.firstChild : i; a; a = a.nextSibling)
        if (a.nodeType == 1) {
          (!c || a.tagName == c) && b.push(a);
          if (!e) {
            var d = db(a, c, e);
            if (d.length) b = b.concat(d);
          }
        }
      return b;
    }
    f.Ne = db;
    f.Oe = function (b, a) {
      return b.getElementsByTagName(a);
    };
    function B() {
      var e = arguments,
        d,
        c,
        b,
        a,
        g = 1 & e[0],
        f = 1 + g;
      d = e[f - 1] || {};
      for (; f < e.length; f++)
        if ((c = e[f]))
          for (b in c) {
            a = c[b];
            if (a !== j) {
              a = c[b];
              d[b] = g && F(d[b]) ? B(g, {}, a) : a;
            }
          }
      return d;
    }
    f.o = B;
    function W(f, g) {
      var d = {},
        c,
        a,
        b;
      for (c in f) {
        a = f[c];
        b = g[c];
        if (a !== b) {
          var e;
          if (F(a) && F(b)) {
            a = W(b);
            e = !qb(a);
          }
          !e && (d[c] = a);
        }
      }
      return d;
    }
    f.Dc = function (a) {
      return C(a) == "function";
    };
    f.bc = function (a) {
      return C(a) == "array";
    };
    f.gd = function (a) {
      return C(a) == "string";
    };
    f.Gc = function (a) {
      return !isNaN(n(a)) && isFinite(a);
    };
    f.e = m;
    function N(a) {
      return e.createElement(a);
    }
    f.jb = function () {
      return N("DIV");
    };
    f.Ie = function () {
      return N("SPAN");
    };
    f.fc = function () {};
    function T(b, c, a) {
      if (a == j) return b.getAttribute(c);
      b.setAttribute(c, a);
    }
    function Q(a, b) {
      return T(a, b) || T(a, "data-" + b);
    }
    f.Eb = T;
    f.s = Q;
    function w(b, a) {
      if (a == j) return b.className;
      b.className = a;
    }
    f.Jc = w;
    function ub(b) {
      var a = {};
      m(b, function (b) {
        a[b] = b;
      });
      return a;
    }
    function wb(b, a) {
      return b.match(a || xb);
    }
    function L(b, a) {
      return ub(wb(b || "", a));
    }
    f.We = wb;
    function Z(b, c) {
      var a = "";
      m(c, function (c) {
        a && (a += b);
        a += c;
      });
      return a;
    }
    function G(a, c, b) {
      w(a, Z(" ", B(W(L(w(a)), L(c)), L(b))));
    }
    f.Re = function (a) {
      return a.parentNode;
    };
    f.L = function (a) {
      f.S(a, "none");
    };
    f.A = function (a, b) {
      f.S(a, b ? "none" : "");
    };
    f.Uc = function (b, a) {
      b.removeAttribute(a);
    };
    f.re = function () {
      return q() && l < 10;
    };
    f.qe = function (d, c) {
      if (c)
        d.style.clip =
          "rect(" +
          b.round(c.$Top) +
          "px " +
          b.round(c.$Right) +
          "px " +
          b.round(c.$Bottom) +
          "px " +
          b.round(c.$Left) +
          "px)";
      else {
        var g = d.style.cssText,
          f = [
            new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i),
            new RegExp(/[\s]*cliptop: .*?[;]?/i),
            new RegExp(/[\s]*clipright: .*?[;]?/i),
            new RegExp(/[\s]*clipbottom: .*?[;]?/i),
            new RegExp(/[\s]*clipleft: .*?[;]?/i),
          ],
          e = H(g, f, "");
        a.Cb(d, e);
      }
    };
    f.J = function () {
      return +new Date();
    };
    f.C = function (b, a) {
      b.appendChild(a);
    };
    f.Db = function (b, a, c) {
      (c || a.parentNode).insertBefore(b, a);
    };
    f.zb = function (a, b) {
      (b || a.parentNode).removeChild(a);
    };
    f.Be = function (a, b) {
      m(a, function (a) {
        f.zb(a, b);
      });
    };
    f.mc = function (a) {
      f.Be(f.K(a, c), a);
    };
    f.Ze = function (b, a) {
      return parseInt(b, a || 10);
    };
    var n = parseFloat;
    f.zc = n;
    f.ye = function (b, a) {
      var c = e.body;
      while (a && b !== a && c !== a)
        try {
          a = a.parentNode;
        } catch (d) {
          return g;
        }
      return b === a;
    };
    function U(d, c, b) {
      var a = d.cloneNode(!c);
      !b && f.Uc(a, "id");
      return a;
    }
    f.Q = U;
    f.yb = function (e, g) {
      var a = new Image();
      function b(e, c) {
        f.M(a, "load", b);
        f.M(a, "abort", d);
        f.M(a, "error", d);
        g && g(a, c);
      }
      function d(a) {
        b(a, c);
      }
      if ((nb() && l < 11.6) || !e) b(!e);
      else {
        f.c(a, "load", b);
        f.c(a, "abort", d);
        f.c(a, "error", d);
        a.src = e;
      }
    };
    f.bf = function (d, a, e) {
      var c = d.length + 1;
      function b(b) {
        c--;
        if (a && b && b.src == a.src) a = b;
        !c && e && e(a);
      }
      m(d, function (a) {
        f.yb(a.src, b);
      });
      b();
    };
    f.Vc = function (b, g, i, h) {
      if (h) b = U(b);
      var c = O(b, g);
      if (!c.length) c = a.Oe(b, g);
      for (var f = c.length - 1; f > -1; f--) {
        var d = c[f],
          e = U(i);
        w(e, w(d));
        a.Cb(e, d.style.cssText);
        a.Db(e, d);
        a.zb(d);
      }
      return b;
    };
    function Db(c) {
      var q = this,
        o = "",
        r = ["av", "pv", "ds", "dn"],
        d = [],
        p,
        k = 0,
        h = 0,
        g = 0;
      function i() {
        G(c, p, d[g || k || h & 2 || h]);
      }
      function b() {
        k = 0;
        i();
        f.M(e, "mouseup", b);
        f.M(e, "touchend", b);
        f.M(e, "touchcancel", b);
      }
      function n(a) {
        if (g) f.Fb(a);
        else {
          k = 4;
          i();
          f.c(e, "mouseup", b);
          f.c(e, "touchend", b);
          f.c(e, "touchcancel", b);
        }
      }
      q.Wc = function (a) {
        if (a != j) {
          h = a & 2 || a & 1;
          i();
        } else return h;
      };
      q.$Enable = function (a) {
        if (a == j) return !g;
        g = a ? 0 : 3;
        i();
      };
      c = f.X(c);
      var l = a.We(w(c));
      if (l) o = l.shift();
      m(r, function (a) {
        d.push(o + a);
      });
      p = Z(" ", d);
      d.unshift("");
      f.c(c, "mousedown", n);
      f.c(c, "touchstart", n);
    }
    f.Ib = function (a) {
      return new Db(a);
    };
    f.Hb = D;
    f.W = o("overflow");
    f.v = o("top", 2);
    f.B = o("left", 2);
    f.m = o("width", 2);
    f.n = o("height", 2);
    f.rd = o("marginLeft", 2);
    f.vd = o("marginTop", 2);
    f.D = o("position");
    f.S = o("display");
    f.E = o("zIndex", 1);
    f.tb = function (b, a, c) {
      if (a != j) Bb(b, a, c);
      else return Ab(b);
    };
    f.Cb = function (a, b) {
      if (b != j) a.style.cssText = b;
      else return a.style.cssText;
    };
    var P = {
        $Opacity: f.tb,
        $Top: f.v,
        $Left: f.B,
        lb: f.m,
        ab: f.n,
        sb: f.D,
        Ag: f.S,
        $ZIndex: f.E,
      },
      u;
    function I() {
      if (!u) u = B({ yg: f.vd, zg: f.rd, $Clip: f.qe, oc: f.jf }, P);
      return u;
    }
    function pb() {
      I();
      u.oc = u.oc;
      return u;
    }
    f.yd = I;
    f.Cd = pb;
    f.Dd = function (c, b) {
      I();
      var a = {};
      m(b, function (d, b) {
        if (P[b]) a[b] = P[b](c);
      });
      return a;
    };
    f.N = function (c, b) {
      var a = I();
      m(b, function (d, b) {
        a[b] && a[b](c, d);
      });
    };
    f.Ed = function (b, a) {
      pb();
      f.N(b, a);
    };
    var E = new (function () {
      var a = this;
      function b(d, g) {
        for (
          var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0;
          c < i;
          c++
        )
          for (var k = (f[c] = []), b = 0; b < h; b++) {
            for (var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
            k[b] = e;
          }
        return f;
      }
      a.Ub = function (d, c) {
        var a = b(d, [[c.x], [c.y]]);
        return y(a[0][0], a[1][0]);
      };
    })();
    f.Ge = function (d, a, c) {
      var e = b.cos(d),
        f = b.sin(d);
      return [
        [e * a, -f * c],
        [f * a, e * c],
      ];
    };
    f.He = function (d, c, a) {
      var e = E.Ub(d, y(-c / 2, -a / 2)),
        f = E.Ub(d, y(c / 2, -a / 2)),
        g = E.Ub(d, y(c / 2, a / 2)),
        h = E.Ub(d, y(-c / 2, a / 2));
      return y(
        b.min(e.x, f.x, g.x, h.x) + c / 2,
        b.min(e.y, f.y, g.y, h.y) + a / 2
      );
    };
    f.Hc = function (l, g, t, r, u, w, j) {
      var c = g;
      if (l) {
        c = {};
        for (var f in g) {
          var x = w[f] || 1,
            s = u[f] || [0, 1],
            e = (t - s[0]) / s[1];
          e = b.min(b.max(e, 0), 1);
          e = e * x;
          var p = b.floor(e);
          if (e != p) e -= p;
          var v = r[f] || r.pb || d.$EaseSwing,
            q = v(e),
            h,
            y = l[f];
          g[f];
          var m = g[f];
          if (a.Gc(m)) h = y + m * q;
          else {
            h = a.o({ vb: {} }, l[f]);
            a.e(m.vb, function (c, b) {
              var a = c * q;
              h.vb[b] = a;
              h[b] += a;
            });
          }
          c[f] = h;
        }
        if (g.$Zoom || g.$Rotate)
          c.oc = {
            $Rotate: c.$Rotate || 0,
            $Scale: c.$Zoom,
            $OriginalWidth: j.$OriginalWidth,
            $OriginalHeight: j.$OriginalHeight,
          };
      }
      if (g.$Clip && j.$Move) {
        var k = c.$Clip.vb,
          o = (k.$Top || 0) + (k.$Bottom || 0),
          n = (k.$Left || 0) + (k.$Right || 0);
        c.$Left = (c.$Left || 0) + n;
        c.$Top = (c.$Top || 0) + o;
        c.$Clip.$Left -= n;
        c.$Clip.$Right -= n;
        c.$Clip.$Top -= o;
        c.$Clip.$Bottom -= o;
      }
      if (
        c.$Clip &&
        a.re() &&
        !c.$Clip.$Top &&
        !c.$Clip.$Left &&
        c.$Clip.$Right == j.$OriginalWidth &&
        c.$Clip.$Bottom == j.$OriginalHeight
      )
        c.$Clip = i;
      return c;
    };
  })();
  function l() {
    var b = this,
      d = [];
    function i(a, b) {
      d.push({ vc: a, tc: b });
    }
    function g(b, c) {
      a.e(d, function (a, e) {
        a.vc == b && a.tc === c && d.splice(e, 1);
      });
    }
    b.$On = b.addEventListener = i;
    b.$Off = b.removeEventListener = g;
    b.i = function (b) {
      var c = [].slice.call(arguments, 1);
      a.e(d, function (a) {
        a.vc == b && a.tc.apply(h, c);
      });
    };
  }
  function k(n, z, j, R, P, K) {
    n = n || 0;
    var e = this,
      r,
      o,
      p,
      x,
      A = 0,
      I,
      J,
      H,
      C,
      E = 0,
      l = 0,
      u = 0,
      D,
      m = n,
      k,
      f,
      q,
      y = [],
      B;
    function M(a) {
      k += a;
      f += a;
      m += a;
      l += a;
      u += a;
      E = a;
    }
    function Q(a, b) {
      var c = a - k + n * b;
      M(c);
      return f;
    }
    function w(h, n) {
      var d = h;
      if (q && (d >= f || d <= k)) d = ((((d - k) % q) + q) % q) + k;
      if (!D || x || n || l != d) {
        var g = b.min(d, f);
        g = b.max(g, k);
        if (!D || x || n || g != u) {
          if (K) {
            var i = (g - m) / (z || 1);
            if (j.$Reverse) i = 1 - i;
            var o = a.Hc(P, K, i, I, H, J, j);
            a.e(o, function (b, a) {
              B[a] && B[a](R, b);
            });
          }
          e.rc(u - m, g - m);
        }
        u = g;
        a.e(y, function (b, c) {
          var a = h < l ? y[y.length - c - 1] : b;
          a.I(h - E, n);
        });
        var r = l,
          p = h;
        l = d;
        D = c;
        e.Ob(r, p);
      }
    }
    function F(a, c, d) {
      c && a.Pb(f, 1);
      !d && (f = b.max(f, a.Z() + E));
      y.push(a);
    }
    var s =
      h.requestAnimationFrame ||
      h.webkitRequestAnimationFrame ||
      h.mozRequestAnimationFrame ||
      h.msRequestAnimationFrame;
    if (a.mf() && a.fd() < 7) s = i;
    s =
      s ||
      function (b) {
        a.$Delay(b, j.$Interval);
      };
    function L() {
      if (r) {
        var d = a.J(),
          e = b.min(d - A, j.Pc),
          c = l + e * p;
        A = d;
        if (c * p >= o * p) c = o;
        w(c);
        if (!x && c * p >= o * p) N(C);
        else s(L);
      }
    }
    function v(d, g, h) {
      if (!r) {
        r = c;
        x = h;
        C = g;
        d = b.max(d, k);
        d = b.min(d, f);
        o = d;
        p = o < l ? -1 : 1;
        e.Rc();
        A = a.J();
        s(L);
      }
    }
    function N(a) {
      if (r) {
        x = r = C = g;
        e.Oc();
        a && a();
      }
    }
    e.$Play = function (a, b, c) {
      v(a ? l + a : f, b, c);
    };
    e.Qc = v;
    e.ob = N;
    e.he = function (a) {
      v(a);
    };
    e.O = function () {
      return l;
    };
    e.Nc = function () {
      return o;
    };
    e.Ab = function () {
      return u;
    };
    e.I = w;
    e.cc = function () {
      w(k, c);
    };
    e.$Move = function (a) {
      w(l + a);
    };
    e.$IsPlaying = function () {
      return r;
    };
    e.oe = function (a) {
      q = a;
    };
    e.Pb = Q;
    e.$Shift = M;
    e.gb = function (a) {
      F(a, 0);
    };
    e.Xb = function (a) {
      F(a, 1);
    };
    e.Z = function () {
      return f;
    };
    e.Ob = e.Rc = e.Oc = e.rc = a.fc;
    e.lc = a.J();
    j = a.o({ $Interval: 16, Pc: 50 }, j);
    q = j.Sc;
    B = a.o({}, a.yd(), j.nc);
    k = m = n;
    f = n + z;
    J = j.$Round || {};
    H = j.$During || {};
    I = a.o({ pb: (a.Dc(j.$Easing) && j.$Easing) || d.$EaseSwing }, j.$Easing);
  }
  var n = (h.$JssorSlideshowFormations$ = new (function () {
    var h = this,
      d = 0,
      a = 1,
      f = 2,
      e = 3,
      s = 1,
      r = 2,
      t = 4,
      q = 8,
      w = 256,
      x = 512,
      v = 1024,
      u = 2048,
      j = u + s,
      i = u + r,
      o = x + s,
      m = x + r,
      n = w + t,
      k = w + q,
      l = v + t,
      p = v + q;
    function y(a) {
      return (a & r) == r;
    }
    function z(a) {
      return (a & t) == t;
    }
    function g(b, a, c) {
      c.push(a);
      b[a] = b[a] || [];
      b[a].push(c);
    }
    h.$FormationStraight = function (f) {
      for (
        var d = f.$Cols,
          e = f.$Rows,
          s = f.$Assembly,
          t = f.Kb,
          r = [],
          a = 0,
          b = 0,
          p = d - 1,
          q = e - 1,
          h = t - 1,
          c,
          b = 0;
        b < e;
        b++
      )
        for (a = 0; a < d; a++) {
          switch (s) {
            case j:
              c = h - (a * e + (q - b));
              break;
            case l:
              c = h - (b * d + (p - a));
              break;
            case o:
              c = h - (a * e + b);
            case n:
              c = h - (b * d + a);
              break;
            case i:
              c = a * e + b;
              break;
            case k:
              c = b * d + (p - a);
              break;
            case m:
              c = a * e + (q - b);
              break;
            default:
              c = b * d + a;
          }
          g(r, c, [b, a]);
        }
      return r;
    };
    h.$FormationSwirl = function (q) {
      var x = q.$Cols,
        y = q.$Rows,
        B = q.$Assembly,
        w = q.Kb,
        A = [],
        z = [],
        u = 0,
        b = 0,
        h = 0,
        r = x - 1,
        s = y - 1,
        t,
        p,
        v = 0;
      switch (B) {
        case j:
          b = r;
          h = 0;
          p = [f, a, e, d];
          break;
        case l:
          b = 0;
          h = s;
          p = [d, e, a, f];
          break;
        case o:
          b = r;
          h = s;
          p = [e, a, f, d];
          break;
        case n:
          b = r;
          h = s;
          p = [a, e, d, f];
          break;
        case i:
          b = 0;
          h = 0;
          p = [f, d, e, a];
          break;
        case k:
          b = r;
          h = 0;
          p = [a, f, d, e];
          break;
        case m:
          b = 0;
          h = s;
          p = [e, d, f, a];
          break;
        default:
          b = 0;
          h = 0;
          p = [d, f, a, e];
      }
      u = 0;
      while (u < w) {
        t = h + "," + b;
        if (b >= 0 && b < x && h >= 0 && h < y && !z[t]) {
          z[t] = c;
          g(A, u++, [h, b]);
        } else
          switch (p[v++ % p.length]) {
            case d:
              b--;
              break;
            case f:
              h--;
              break;
            case a:
              b++;
              break;
            case e:
              h++;
          }
        switch (p[v % p.length]) {
          case d:
            b++;
            break;
          case f:
            h++;
            break;
          case a:
            b--;
            break;
          case e:
            h--;
        }
      }
      return A;
    };
    h.$FormationZigZag = function (p) {
      var w = p.$Cols,
        x = p.$Rows,
        z = p.$Assembly,
        v = p.Kb,
        t = [],
        u = 0,
        b = 0,
        c = 0,
        q = w - 1,
        r = x - 1,
        y,
        h,
        s = 0;
      switch (z) {
        case j:
          b = q;
          c = 0;
          h = [f, a, e, a];
          break;
        case l:
          b = 0;
          c = r;
          h = [d, e, a, e];
          break;
        case o:
          b = q;
          c = r;
          h = [e, a, f, a];
          break;
        case n:
          b = q;
          c = r;
          h = [a, e, d, e];
          break;
        case i:
          b = 0;
          c = 0;
          h = [f, d, e, d];
          break;
        case k:
          b = q;
          c = 0;
          h = [a, f, d, f];
          break;
        case m:
          b = 0;
          c = r;
          h = [e, d, f, d];
          break;
        default:
          b = 0;
          c = 0;
          h = [d, f, a, f];
      }
      u = 0;
      while (u < v) {
        y = c + "," + b;
        if (b >= 0 && b < w && c >= 0 && c < x && typeof t[y] == "undefined") {
          g(t, u++, [c, b]);
          switch (h[s % h.length]) {
            case d:
              b++;
              break;
            case f:
              c++;
              break;
            case a:
              b--;
              break;
            case e:
              c--;
          }
        } else {
          switch (h[s++ % h.length]) {
            case d:
              b--;
              break;
            case f:
              c--;
              break;
            case a:
              b++;
              break;
            case e:
              c++;
          }
          switch (h[s++ % h.length]) {
            case d:
              b++;
              break;
            case f:
              c++;
              break;
            case a:
              b--;
              break;
            case e:
              c--;
          }
        }
      }
      return t;
    };
    h.$FormationStraightStairs = function (q) {
      var u = q.$Cols,
        v = q.$Rows,
        e = q.$Assembly,
        t = q.Kb,
        r = [],
        s = 0,
        c = 0,
        d = 0,
        f = u - 1,
        h = v - 1,
        x = t - 1;
      switch (e) {
        case j:
        case m:
        case o:
        case i:
          var a = 0,
            b = 0;
          break;
        case k:
        case l:
        case n:
        case p:
          var a = f,
            b = 0;
          break;
        default:
          e = p;
          var a = f,
            b = 0;
      }
      c = a;
      d = b;
      while (s < t) {
        if (z(e) || y(e)) g(r, x - s++, [d, c]);
        else g(r, s++, [d, c]);
        switch (e) {
          case j:
          case m:
            c--;
            d++;
            break;
          case o:
          case i:
            c++;
            d--;
            break;
          case k:
          case l:
            c--;
            d--;
            break;
          case p:
          case n:
          default:
            c++;
            d++;
        }
        if (c < 0 || d < 0 || c > f || d > h) {
          switch (e) {
            case j:
            case m:
              a++;
              break;
            case k:
            case l:
            case o:
            case i:
              b++;
              break;
            case p:
            case n:
            default:
              a--;
          }
          if (a < 0 || b < 0 || a > f || b > h) {
            switch (e) {
              case j:
              case m:
                a = f;
                b++;
                break;
              case o:
              case i:
                b = h;
                a++;
                break;
              case k:
              case l:
                b = h;
                a--;
                break;
              case p:
              case n:
              default:
                a = 0;
                b++;
            }
            if (b > h) b = h;
            else if (b < 0) b = 0;
            else if (a > f) a = f;
            else if (a < 0) a = 0;
          }
          d = b;
          c = a;
        }
      }
      return r;
    };
    h.$FormationSquare = function (i) {
      var a = i.$Cols || 1,
        c = i.$Rows || 1,
        j = [],
        d,
        e,
        f,
        h,
        k;
      f = a < c ? (c - a) / 2 : 0;
      h = a > c ? (a - c) / 2 : 0;
      k = b.round(b.max(a / 2, c / 2)) + 1;
      for (d = 0; d < a; d++)
        for (e = 0; e < c; e++)
          g(j, k - b.min(d + 1 + f, e + 1 + h, a - d + f, c - e + h), [e, d]);
      return j;
    };
    h.$FormationRectangle = function (f) {
      var d = f.$Cols || 1,
        e = f.$Rows || 1,
        h = [],
        a,
        c,
        i;
      i = b.round(b.min(d / 2, e / 2)) + 1;
      for (a = 0; a < d; a++)
        for (c = 0; c < e; c++)
          g(h, i - b.min(a + 1, c + 1, d - a, e - c), [c, a]);
      return h;
    };
    h.$FormationRandom = function (d) {
      for (var e = [], a, c = 0; c < d.$Rows; c++)
        for (a = 0; a < d.$Cols; a++)
          g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
      return e;
    };
    h.$FormationCircle = function (d) {
      for (
        var e = d.$Cols || 1,
          f = d.$Rows || 1,
          h = [],
          a,
          i = e / 2 - 0.5,
          j = f / 2 - 0.5,
          c = 0;
        c < e;
        c++
      )
        for (a = 0; a < f; a++)
          g(h, b.round(b.sqrt(b.pow(c - i, 2) + b.pow(a - j, 2))), [a, c]);
      return h;
    };
    h.$FormationCross = function (d) {
      for (
        var e = d.$Cols || 1,
          f = d.$Rows || 1,
          h = [],
          a,
          i = e / 2 - 0.5,
          j = f / 2 - 0.5,
          c = 0;
        c < e;
        c++
      )
        for (a = 0; a < f; a++)
          g(h, b.round(b.min(b.abs(c - i), b.abs(a - j))), [a, c]);
      return h;
    };
    h.$FormationRectangleCross = function (f) {
      for (
        var h = f.$Cols || 1,
          i = f.$Rows || 1,
          j = [],
          a,
          d = h / 2 - 0.5,
          e = i / 2 - 0.5,
          k = b.max(d, e) + 1,
          c = 0;
        c < h;
        c++
      )
        for (a = 0; a < i; a++)
          g(j, b.round(k - b.max(d - b.abs(c - d), e - b.abs(a - e))) - 1, [
            a,
            c,
          ]);
      return j;
    };
  })());
  h.$JssorSlideshowRunner$ = function (o, s, q, t, y) {
    var f = this,
      u,
      h,
      e,
      x = 0,
      w = t.$TransitionsOrder,
      r,
      j = 8;
    function m(h, f) {
      var e = {
        $Interval: f,
        $Duration: 1,
        $Delay: 0,
        $Cols: 1,
        $Rows: 1,
        $Opacity: 0,
        $Zoom: 0,
        $Clip: 0,
        $Move: g,
        $SlideOut: g,
        $Reverse: g,
        $Formation: n.$FormationRandom,
        $Assembly: 1032,
        $ChessMode: { $Column: 0, $Row: 0 },
        $Easing: d.$EaseSwing,
        $Round: {},
        Jb: [],
        $During: {},
      };
      a.o(e, h);
      e.Kb = e.$Cols * e.$Rows;
      if (a.Dc(e.$Easing)) e.$Easing = { pb: e.$Easing };
      e.Zd = b.ceil(e.$Duration / e.$Interval);
      e.Yd = function (b, a) {
        b /= e.$Cols;
        a /= e.$Rows;
        var f = b + "x" + a;
        if (!e.Jb[f]) {
          e.Jb[f] = { lb: b, ab: a };
          for (var c = 0; c < e.$Cols; c++)
            for (var d = 0; d < e.$Rows; d++)
              e.Jb[f][d + "," + c] = {
                $Top: d * a,
                $Right: c * b + b,
                $Bottom: d * a + a,
                $Left: c * b,
              };
        }
        return e.Jb[f];
      };
      if (e.$Brother) {
        e.$Brother = m(e.$Brother, f);
        e.$SlideOut = c;
      }
      return e;
    }
    function p(B, i, d, w, n, l) {
      var z = this,
        t,
        u = {},
        j = {},
        m = [],
        f,
        e,
        r,
        p = d.$ChessMode.$Column || 0,
        q = d.$ChessMode.$Row || 0,
        h = d.Yd(n, l),
        o = C(d),
        D = o.length - 1,
        s = d.$Duration + d.$Delay * D,
        x = w + s,
        k = d.$SlideOut,
        y;
      x += 50;
      function C(a) {
        var b = a.$Formation(a);
        return a.$Reverse ? b.reverse() : b;
      }
      z.Ec = x;
      z.Nb = function (c) {
        c -= w;
        var e = c < s;
        if (e || y) {
          y = e;
          if (!k) c = s - c;
          var f = b.ceil(c / d.$Interval);
          a.e(j, function (c, e) {
            var d = b.max(f, c.Od);
            d = b.min(d, c.length - 1);
            if (c.Tc != d) {
              if (!c.Tc && !k) a.A(m[e]);
              else d == c.Pd && k && a.L(m[e]);
              c.Tc = d;
              a.Ed(m[e], c[d]);
            }
          });
        }
      };
      function v(b) {
        a.ue(b);
        var c = a.K(b);
        a.e(c, function (a) {
          v(a);
        });
      }
      i = a.Q(i);
      v(i);
      if (a.T()) {
        var E = !i["no-image"],
          A = a.Ne(i);
        a.e(A, function (b) {
          (E || b["jssor-slider"]) && a.tb(b, a.tb(b), c);
        });
      }
      a.e(o, function (i, m) {
        a.e(i, function (G) {
          var K = G[0],
            J = G[1],
            v = K + "," + J,
            o = g,
            s = g,
            x = g;
          if (p && J % 2) {
            if (p & 3) o = !o;
            if (p & 12) s = !s;
            if (p & 16) x = !x;
          }
          if (q && K % 2) {
            if (q & 3) o = !o;
            if (q & 12) s = !s;
            if (q & 16) x = !x;
          }
          d.$Top = d.$Top || d.$Clip & 4;
          d.$Bottom = d.$Bottom || d.$Clip & 8;
          d.$Left = d.$Left || d.$Clip & 1;
          d.$Right = d.$Right || d.$Clip & 2;
          var C = s ? d.$Bottom : d.$Top,
            z = s ? d.$Top : d.$Bottom,
            B = o ? d.$Right : d.$Left,
            A = o ? d.$Left : d.$Right;
          d.$Clip = C || z || B || A;
          r = {};
          e = { $Top: 0, $Left: 0, $Opacity: 1, lb: n, ab: l };
          f = a.o({}, e);
          t = a.o({}, h[v]);
          if (d.$Opacity) e.$Opacity = 2 - d.$Opacity;
          if (d.$ZIndex) {
            e.$ZIndex = d.$ZIndex;
            f.$ZIndex = 0;
          }
          var I = d.$Cols * d.$Rows > 1 || d.$Clip;
          if (d.$Zoom || d.$Rotate) {
            var H = c;
            if (a.T())
              if (d.$Cols * d.$Rows > 1) H = g;
              else I = g;
            if (H) {
              e.$Zoom = d.$Zoom ? d.$Zoom - 1 : 1;
              f.$Zoom = 1;
              if (a.T() || a.uc()) e.$Zoom = b.min(e.$Zoom, 2);
              var N = d.$Rotate;
              e.$Rotate = N * 360 * (x ? -1 : 1);
              f.$Rotate = 0;
            }
          }
          if (I) {
            if (d.$Clip) {
              var w = d.$ScaleClip || 1,
                i = (t.vb = {});
              if (C && z) {
                i.$Top = (h.ab / 2) * w;
                i.$Bottom = -i.$Top;
              } else if (C) i.$Bottom = -h.ab * w;
              else if (z) i.$Top = h.ab * w;
              if (B && A) {
                i.$Left = (h.lb / 2) * w;
                i.$Right = -i.$Left;
              } else if (B) i.$Right = -h.lb * w;
              else if (A) i.$Left = h.lb * w;
            }
            r.$Clip = t;
            f.$Clip = h[v];
          }
          var L = o ? 1 : -1,
            M = s ? 1 : -1;
          if (d.x) e.$Left += n * d.x * L;
          if (d.y) e.$Top += l * d.y * M;
          a.e(e, function (b, c) {
            if (a.Gc(b)) if (b != f[c]) r[c] = b - f[c];
          });
          u[v] = k ? f : e;
          var D = d.Zd,
            y = b.round((m * d.$Delay) / d.$Interval);
          j[v] = new Array(y);
          j[v].Od = y;
          j[v].Pd = y + D - 1;
          for (var F = 0; F <= D; F++) {
            var E = a.Hc(f, r, F / D, d.$Easing, d.$During, d.$Round, {
              $Move: d.$Move,
              $OriginalWidth: n,
              $OriginalHeight: l,
            });
            E.$ZIndex = E.$ZIndex || 1;
            j[v].push(E);
          }
        });
      });
      o.reverse();
      a.e(o, function (b) {
        a.e(b, function (c) {
          var f = c[0],
            e = c[1],
            d = f + "," + e,
            b = i;
          if (e || f) b = a.Q(i);
          a.N(b, u[d]);
          a.W(b, "hidden");
          a.D(b, "absolute");
          B.Rd(b);
          m[d] = b;
          a.A(b, !k);
        });
      });
    }
    function v() {
      var a = this,
        b = 0;
      k.call(a, 0, u);
      a.Ob = function (c, a) {
        if (a - b > j) {
          b = a;
          e && e.Nb(a);
          h && h.Nb(a);
        }
      };
      a.cb = r;
    }
    f.le = function () {
      var a = 0,
        c = t.$Transitions,
        d = c.length;
      if (w) a = x++ % d;
      else a = b.floor(b.random() * d);
      c[a] && (c[a].eb = a);
      return c[a];
    };
    f.me = function (w, x, i, k, a) {
      r = a;
      a = m(a, j);
      var g = k.Lc,
        d = i.Lc;
      g["no-image"] = !k.Rb;
      d["no-image"] = !i.Rb;
      var l = g,
        n = d,
        v = a,
        c = a.$Brother || m({}, j);
      if (!a.$SlideOut) {
        l = d;
        n = g;
      }
      var t = c.$Shift || 0;
      h = new p(o, n, c, b.max(t - c.$Interval, 0), s, q);
      e = new p(o, l, v, b.max(c.$Interval - t, 0), s, q);
      h.Nb(0);
      e.Nb(0);
      u = b.max(h.Ec, e.Ec);
      f.eb = w;
    };
    f.wb = function () {
      o.wb();
      h = i;
      e = i;
    };
    f.de = function () {
      var a = i;
      if (e) a = new v();
      return a;
    };
    if (a.T() || a.uc() || (y && a.sc() < 537)) j = 16;
    l.call(f);
    k.call(f, -1e7, 1e7);
  };
  var f = (h.$JssorSlider$ = function (q, ec) {
    var n = this;
    function Cc() {
      var a = this;
      k.call(a, -1e8, 2e8);
      a.fe = function () {
        var c = a.Ab(),
          d = b.floor(c),
          f = t(d),
          e = c - b.floor(c);
        return { eb: f, xd: d, sb: e };
      };
      a.Ob = function (d, a) {
        var e = b.floor(a);
        if (e != a && a > d) e++;
        Sb(e, c);
        n.i(f.$EVT_POSITION_CHANGE, t(a), t(d), a, d);
      };
    }
    function Bc() {
      var b = this;
      k.call(b, 0, 0, { Sc: s });
      a.e(C, function (a) {
        D & 1 && a.oe(s);
        b.Xb(a);
        a.$Shift(ib / ac);
      });
    }
    function Ac() {
      var a = this,
        b = Rb.$Elmt;
      k.call(
        a,
        -1,
        2,
        { $Easing: d.$EaseLinear, nc: { sb: Yb }, Sc: s },
        b,
        { sb: 1 },
        { sb: -2 }
      );
      a.Tb = b;
    }
    function pc(m, l) {
      var a = this,
        d,
        e,
        h,
        j,
        b;
      k.call(a, -1e8, 2e8, { Pc: 100 });
      a.Rc = function () {
        R = c;
        V = i;
        n.i(f.$EVT_SWIPE_START, t(y.O()), y.O());
      };
      a.Oc = function () {
        R = g;
        j = g;
        var a = y.fe();
        n.i(f.$EVT_SWIPE_END, t(y.O()), y.O());
        !a.sb && Ec(a.xd, r);
      };
      a.Ob = function (g, f) {
        var a;
        if (j) a = b;
        else {
          a = e;
          if (h) {
            var c = f / h;
            a = p.$SlideEasing(c) * (e - d) + d;
          }
        }
        y.I(a);
      };
      a.Mb = function (b, f, c, g) {
        d = b;
        e = f;
        h = c;
        y.I(b);
        a.I(0);
        a.Qc(c, g);
      };
      a.Ad = function (d) {
        j = c;
        b = d;
        a.$Play(d, i, c);
      };
      a.zd = function (a) {
        b = a;
      };
      y = new Cc();
      y.gb(m);
      y.gb(l);
    }
    function qc() {
      var c = this,
        b = Wb();
      a.E(b, 0);
      a.Hb(b, "pointerEvents", "none");
      c.$Elmt = b;
      c.Rd = function (c) {
        a.C(b, c);
        a.A(b);
      };
      c.wb = function () {
        a.L(b);
        a.mc(b);
      };
    }
    function zc(o, h) {
      var d = this,
        q,
        x,
        I,
        y,
        j,
        B = [],
        G,
        u,
        U,
        H,
        P,
        F,
        e,
        w,
        m;
      k.call(d, -v, v + 1, {});
      function E(a) {
        x && x.Sb();
        q && q.Sb();
        R(o, a);
        F = c;
        q = new N.$Class(o, N, 1);
        x = new N.$Class(o, N);
        x.cc();
        q.cc();
      }
      function X() {
        q.lc < N.lc && E();
      }
      function J(o, r, m) {
        if (!H) {
          H = c;
          if (j && m) {
            var e = m.width,
              b = m.height,
              l = e,
              k = b;
            if (e && b && p.$FillMode) {
              if (p.$FillMode & 3 && (!(p.$FillMode & 4) || e > L || b > K)) {
                var i = g,
                  q = ((L / K) * b) / e;
                if (p.$FillMode & 1) i = q > 1;
                else if (p.$FillMode & 2) i = q < 1;
                l = i ? (e * K) / b : L;
                k = i ? K : (b * L) / e;
              }
              a.m(j, l);
              a.n(j, k);
              a.v(j, (K - k) / 2);
              a.B(j, (L - l) / 2);
            }
            a.D(j, "absolute");
            n.i(f.$EVT_LOAD_END, h);
          }
        }
        a.L(r);
        o && o(d);
      }
      function W(b, c, e, f) {
        if (f == V && r == h && S)
          if (!Dc) {
            var a = t(b);
            A.me(a, h, c, d, e);
            c.Ce();
            bb.Pb(a, 1);
            bb.I(a);
            z.Mb(b, b, 0);
          }
      }
      function ab(b) {
        if (b == V && r == h) {
          if (!e) {
            var a = i;
            if (A)
              if (A.eb == h) a = A.de();
              else A.wb();
            X();
            e = new wc(o, h, a, d.ze(), d.De());
            e.Mc(m);
          }
          !e.$IsPlaying() && e.ec();
        }
      }
      function Q(f, c, g) {
        if (f == h) {
          if (f != c) C[c] && C[c].we();
          else !g && e && e.Se();
          m && m.$Enable();
          var j = (V = a.J());
          d.yb(a.H(i, ab, j));
        } else {
          var l = b.abs(h - f),
            k = v + p.$LazyLoading - 1;
          (!P || l <= k) && d.yb();
        }
      }
      function db() {
        if (r == h && e) {
          e.ob();
          m && m.$Quit();
          m && m.$Disable();
          e.Ic();
        }
      }
      function gb() {
        r == h && e && e.ob();
      }
      function Z(a) {
        !O && n.i(f.$EVT_CLICK, h, a);
      }
      function M() {
        m = w.pInstance;
        e && e.Mc(m);
      }
      d.yb = function (d, b) {
        b = b || y;
        if (B.length && !H) {
          a.A(b);
          if (!U) {
            U = c;
            n.i(f.$EVT_LOAD_START, h);
            a.e(B, function (b) {
              if (!a.Eb(b, "src")) {
                b.src = a.s(b, "src2");
                a.S(b, b["display-origin"]);
              }
            });
          }
          a.bf(B, j, a.H(i, J, d, b));
        } else J(d, b);
      };
      d.Pe = function () {
        if (A) {
          var b = A.le(s);
          if (b) {
            var e = (V = a.J()),
              c = h + Vb,
              d = C[t(c)];
            return d.yb(a.H(i, W, c, d, b, e), y);
          }
        }
        cb(r + p.$AutoPlaySteps * Vb);
      };
      d.Zb = function () {
        Q(h, h, c);
      };
      d.we = function () {
        m && m.$Quit();
        m && m.$Disable();
        d.md();
        e && e.Me();
        e = i;
        E();
      };
      d.Ce = function () {
        a.L(o);
      };
      d.md = function () {
        a.A(o);
      };
      d.Le = function () {
        m && m.$Enable();
      };
      function R(b, e, d) {
        if (a.Eb(b, "jssor-slider")) return;
        d = d || 0;
        if (!F) {
          if (b.tagName == "IMG") {
            B.push(b);
            if (!a.Eb(b, "src")) {
              P = c;
              b["display-origin"] = a.S(b);
              a.L(b);
            }
          }
          a.T() && a.E(b, (a.E(b) || 0) + 1);
          if (p.$HWA && a.sc())
            (!Y || a.sc() < 534 || (!fb && !a.cf())) && a.te(b);
        }
        var f = a.K(b);
        a.e(f, function (f) {
          var i = f.tagName,
            k = a.s(f, "u");
          if (k == "player" && !w) {
            w = f;
            if (w.pInstance) M();
            else a.c(w, "dataavailable", M);
          }
          if (k == "caption") {
            if (!a.dd() && !e) {
              var h = a.Q(f, g, c);
              a.Db(h, f, b);
              a.zb(f, b);
              f = h;
              e = c;
            }
          } else if (!F && !d && !j) {
            if (i == "A") {
              if (a.s(f, "u") == "image") j = a.Qe(f, "IMG");
              else j = a.z(f, "image", c);
              if (j) {
                G = f;
                a.N(G, T);
                u = a.Q(G, c);
                a.S(u, "block");
                a.N(u, T);
                a.tb(u, 0);
                a.Hb(u, "backgroundColor", "#000");
              }
            } else if (i == "IMG" && a.s(f, "u") == "image") j = f;
            if (j) {
              j.border = 0;
              a.N(j, T);
            }
          }
          R(f, e, d + 1);
        });
      }
      d.rc = function (c, b) {
        var a = v - b;
        Yb(I, a);
      };
      d.ze = function () {
        return q;
      };
      d.De = function () {
        return x;
      };
      d.eb = h;
      l.call(d);
      var D = a.z(o, "thumb", c);
      if (D) {
        d.Ke = a.Q(D);
        a.Uc(D, "id");
        a.L(D);
      }
      a.A(o);
      y = a.Q(eb);
      a.E(y, 1e3);
      a.c(o, "click", Z);
      E(c);
      d.Rb = j;
      d.kd = u;
      d.Lc = o;
      d.Tb = I = o;
      a.C(I, y);
      n.$On(203, Q);
      n.$On(28, gb);
      n.$On(24, db);
    }
    function wc(E, i, p, u, t) {
      var b = this,
        l = 0,
        w = 0,
        m,
        h,
        d,
        e,
        j,
        q,
        v,
        s,
        o = C[i];
      k.call(b, 0, 0);
      function x() {
        a.mc(P);
        cc && j && o.kd && a.C(P, o.kd);
        a.A(P, !j && o.Rb);
      }
      function y() {
        if (q) {
          q = g;
          n.i(f.$EVT_ROLLBACK_END, i, d, l, h, d, e);
          b.I(h);
        }
        b.ec();
      }
      function z(a) {
        s = a;
        b.ob();
        b.ec();
      }
      b.ec = function () {
        var a = b.Ab();
        if (!B && !R && !s && r == i) {
          if (!a) {
            if (m && !j) {
              j = c;
              b.Ic(c);
              n.i(f.$EVT_SLIDESHOW_START, i, l, w, m, e);
            }
            x();
          }
          var g,
            p = f.$EVT_STATE_CHANGE;
          if (a != e)
            if (a == d) g = e;
            else if (a == h) g = d;
            else if (!a) g = h;
            else if (a > d) {
              q = c;
              g = d;
              p = f.$EVT_ROLLBACK_START;
            } else g = b.Nc();
          n.i(p, i, a, l, h, d, e);
          var k = S && (!H || I);
          if (a == e) ((d != e && !(H & 12)) || k) && o.Pe();
          else (k || a != d) && b.Qc(g, y);
        }
      };
      b.Se = function () {
        d == e && d == b.Ab() && b.I(h);
      };
      b.Me = function () {
        A && A.eb == i && A.wb();
        var a = b.Ab();
        a < e && n.i(f.$EVT_STATE_CHANGE, i, -a - 1, l, h, d, e);
      };
      b.Ic = function (b) {
        p && a.W(kb, b && p.cb.$Outside ? "" : "hidden");
      };
      b.rc = function (b, a) {
        if (j && a >= m) {
          j = g;
          x();
          o.md();
          A.wb();
          n.i(f.$EVT_SLIDESHOW_END, i, l, w, m, e);
        }
        n.i(f.$EVT_PROGRESS_CHANGE, i, a, l, h, d, e);
      };
      b.Mc = function (a) {
        if (a && !v) {
          v = a;
          a.$On($JssorPlayer$.Qd, z);
        }
      };
      p && b.Xb(p);
      m = b.Z();
      b.Z();
      b.Xb(u);
      h = u.Z();
      d = h + (a.zc(a.s(E, "idle")) || oc);
      t.$Shift(d);
      b.gb(t);
      e = b.Z();
    }
    function Yb(g, f) {
      var e = w > 0 ? w : jb,
        c = Ab * f * (e & 1),
        d = Bb * f * ((e >> 1) & 1);
      c = b.round(c);
      d = b.round(d);
      a.B(g, c);
      a.v(g, d);
    }
    function Mb() {
      rb = R;
      Ib = z.Nc();
      F = y.O();
    }
    function fc() {
      Mb();
      if (B || (!I && H & 12)) {
        z.ob();
        n.i(f.gf);
      }
    }
    function dc(e) {
      if (!B && (I || !(H & 12)) && !z.$IsPlaying()) {
        var c = y.O(),
          a = b.ceil(F);
        if (e && b.abs(G) >= p.$MinDragOffsetToSlide) {
          a = b.ceil(c);
          a += hb;
        }
        if (!(D & 1)) a = b.min(s - v, b.max(a, 0));
        var d = b.abs(a - c);
        d = 1 - b.pow(1 - d, 5);
        if (!O && rb) z.he(Ib);
        else if (c == a) {
          ub.Le();
          ub.Zb();
        } else z.Mb(c, a, d * Tb);
      }
    }
    function Gb(b) {
      !a.s(a.Bc(b), "nodrag") && a.Fb(b);
    }
    function tc(a) {
      Xb(a, 1);
    }
    function Xb(b, d) {
      b = a.jd(b);
      var k = a.Bc(b);
      if (!M && !a.s(k, "nodrag") && uc() && (!d || b.touches.length == 1)) {
        B = c;
        zb = g;
        V = i;
        a.c(e, d ? "touchmove" : "mousemove", Cb);
        a.J();
        O = 0;
        fc();
        if (!rb) w = 0;
        if (d) {
          var j = b.touches[0];
          vb = j.clientX;
          wb = j.clientY;
        } else {
          var h = a.nd(b);
          vb = h.x;
          wb = h.y;
        }
        G = 0;
        db = 0;
        hb = 0;
        n.i(f.$EVT_DRAG_START, t(F), F, b);
      }
    }
    function Cb(e) {
      if (B) {
        e = a.jd(e);
        var f;
        if (e.type != "mousemove") {
          var l = e.touches[0];
          f = { x: l.clientX, y: l.clientY };
        } else f = a.nd(e);
        if (f) {
          var j = f.x - vb,
            k = f.y - wb;
          if (b.floor(F) != F) w = w || jb & M;
          if ((j || k) && !w) {
            if (M == 3)
              if (b.abs(k) > b.abs(j)) w = 2;
              else w = 1;
            else w = M;
            if (Y && w == 1 && b.abs(k) - b.abs(j) > 3) zb = c;
          }
          if (w) {
            var d = k,
              i = Bb;
            if (w == 1) {
              d = j;
              i = Ab;
            }
            if (!(D & 1)) {
              if (d > 0) {
                var g = i * r,
                  h = d - g;
                if (h > 0) d = g + b.sqrt(h) * 5;
              }
              if (d < 0) {
                var g = i * (s - v - r),
                  h = -d - g;
                if (h > 0) d = -g - b.sqrt(h) * 5;
              }
            }
            if (G - db < -2) hb = 0;
            else if (G - db > 2) hb = -1;
            db = G;
            G = d;
            tb = F - G / i / (ab || 1);
            if (G && w && !zb) {
              a.Fb(e);
              if (!R) z.Ad(tb);
              else z.zd(tb);
            }
          }
        }
      }
    }
    function pb() {
      rc();
      if (B) {
        B = g;
        a.J();
        a.M(e, "mousemove", Cb);
        a.M(e, "touchmove", Cb);
        O = G;
        z.ob();
        var b = y.O();
        n.i(f.$EVT_DRAG_END, t(b), b, t(F), F);
        H & 12 && Mb();
        dc(c);
      }
    }
    function jc(c) {
      if (O) {
        a.Te(c);
        var b = a.Bc(c);
        while (b && u !== b) {
          b.tagName == "A" && a.Fb(c);
          try {
            b = b.parentNode;
          } catch (d) {
            break;
          }
        }
      }
    }
    function nc(a) {
      C[r];
      r = t(a);
      ub = C[r];
      Sb(a);
      return r;
    }
    function Ec(a, b) {
      w = 0;
      nc(a);
      n.i(f.$EVT_PARK, t(a), b);
    }
    function Sb(b, c) {
      xb = b;
      a.e(Q, function (a) {
        a.yc(t(b), b, c);
      });
    }
    function uc() {
      var b = f.ld || 0,
        a = ob;
      if (Y) a & 1 && (a &= 1);
      f.ld |= a;
      return (M = a & ~b);
    }
    function rc() {
      if (M) {
        f.ld &= ~ob;
        M = 0;
      }
    }
    function Wb() {
      var b = a.jb();
      a.N(b, T);
      a.D(b, "absolute");
      return b;
    }
    function t(a) {
      return ((a % s) + s) % s;
    }
    function kc(a, c) {
      if (c)
        if (!D) {
          a = b.min(b.max(a + xb, 0), s - v);
          c = g;
        } else if (D & 2) {
          a = t(a + xb);
          c = g;
        }
      cb(a, p.$SlideDuration, c);
    }
    function yb() {
      a.e(Q, function (a) {
        a.ac(a.Vb.$ChanceToShow <= I);
      });
    }
    function hc() {
      if (!I) {
        I = 1;
        yb();
        if (!B) {
          H & 12 && dc();
          H & 3 && C[r].Zb();
        }
      }
    }
    function gc() {
      if (I) {
        I = 0;
        yb();
        B || !(H & 12) || fc();
      }
    }
    function ic() {
      T = { lb: L, ab: K, $Top: 0, $Left: 0 };
      a.e(W, function (b) {
        a.N(b, T);
        a.D(b, "absolute");
        a.W(b, "hidden");
        a.L(b);
      });
      a.N(eb, T);
    }
    function nb(b, a) {
      cb(b, a, c);
    }
    function cb(f, e, k) {
      if (Ob && (!B || p.$NaviQuitDrag)) {
        R = c;
        B = g;
        z.ob();
        if (e == j) e = Tb;
        var d = Db.Ab(),
          a = f;
        if (k) {
          a = d + f;
          if (f > 0) a = b.ceil(a);
          else a = b.floor(a);
        }
        if (D & 2) a = t(a);
        if (!(D & 1)) a = b.max(0, b.min(a, s - v));
        var i = (a - d) % s;
        a = d + i;
        var h = d == a ? 0 : e * b.abs(i);
        h = b.min(h, e * v * 1.5);
        z.Mb(d, a, h || 1);
      }
    }
    n.$PlayTo = cb;
    n.$GoTo = function (a) {
      cb(a, 1);
    };
    n.$Next = function () {
      nb(1);
    };
    n.$Prev = function () {
      nb(-1);
    };
    n.$Pause = function () {
      S = g;
    };
    n.$Play = function () {
      if (!S) {
        S = c;
        C[r] && C[r].Zb();
      }
    };
    n.$SetSlideshowTransitions = function (a) {
      p.$SlideshowOptions.$Transitions = a;
    };
    n.$SetCaptionTransitions = function (b) {
      N.$CaptionTransitions = b;
      N.lc = a.J();
    };
    n.$SlidesCount = function () {
      return W.length;
    };
    n.$CurrentIndex = function () {
      return r;
    };
    n.$IsAutoPlaying = function () {
      return S;
    };
    n.$IsDragging = function () {
      return B;
    };
    n.$IsSliding = function () {
      return R;
    };
    n.$IsMouseOver = function () {
      return !I;
    };
    n.$LastDragSucceded = function () {
      return O;
    };
    function Z() {
      return a.m(x || q);
    }
    function lb() {
      return a.n(x || q);
    }
    n.$OriginalWidth = n.$GetOriginalWidth = Z;
    n.$OriginalHeight = n.$GetOriginalHeight = lb;
    function Eb(c, d) {
      if (c == j) return a.m(q);
      if (!x) {
        var b = a.jb(e);
        a.Jc(b, a.Jc(q));
        a.Cb(b, a.Cb(q));
        a.S(b, "block");
        a.D(b, "relative");
        a.v(b, 0);
        a.B(b, 0);
        a.W(b, "visible");
        x = a.jb(e);
        a.D(x, "absolute");
        a.v(x, 0);
        a.B(x, 0);
        a.m(x, a.m(q));
        a.n(x, a.n(q));
        a.Fe(x, "0 0");
        a.C(x, b);
        var k = a.K(q);
        a.C(q, x);
        a.Hb(q, "backgroundImage", "");
        var i = {
          navigator: X && X.$Scale == g,
          arrowleft: E && E.$Scale == g,
          arrowright: E && E.$Scale == g,
          thumbnavigator: J && J.$Scale == g,
          thumbwrapper: J && J.$Scale == g,
        };
        a.e(k, function (c) {
          a.C(i[a.s(c, "u")] ? q : b, c);
        });
      }
      ab = c / (d ? a.n : a.m)(x);
      a.se(x, ab);
      var h = d ? ab * Z() : c,
        f = d ? c : ab * lb();
      a.m(q, h);
      a.n(q, f);
      a.e(Q, function (a) {
        a.pc(h, f);
      });
    }
    n.$ScaleHeight = n.$GetScaleHeight = function (b) {
      if (b == j) return a.n(q);
      Eb(b, c);
    };
    n.$ScaleWidth = n.$SetScaleWidth = n.$GetScaleWidth = Eb;
    n.ed = function (a) {
      var d = b.ceil(t(ib / ac)),
        c = t(a - r + d);
      if (c > v) {
        if (a - r > s / 2) a -= s;
        else if (a - r <= -s / 2) a += s;
      } else a = r + c - d;
      return a;
    };
    l.call(n);
    n.$Elmt = q = a.X(q);
    var p = a.o(
      {
        $FillMode: 0,
        $LazyLoading: 1,
        $StartIndex: 0,
        $AutoPlay: g,
        $Loop: 1,
        $HWA: c,
        $NaviQuitDrag: c,
        $AutoPlaySteps: 1,
        $AutoPlayInterval: 3e3,
        $PauseOnHover: 1,
        $SlideDuration: 500,
        $SlideEasing: d.$EaseOutQuad,
        $MinDragOffsetToSlide: 20,
        $SlideSpacing: 0,
        $DisplayPieces: 1,
        $ParkingPosition: 0,
        $UISearchMode: 1,
        $PlayOrientation: 1,
        $DragOrientation: 1,
      },
      ec
    );
    if (p.$Idle != j) p.$AutoPlayInterval = p.$Idle;
    if (p.$Cols != j) p.$DisplayPieces = p.$Cols;
    var jb = p.$PlayOrientation & 3,
      Vb = (p.$PlayOrientation & 4) / -4 || 1,
      gb = p.$SlideshowOptions,
      N = a.o(
        { $Class: o, $PlayInMode: 1, $PlayOutMode: 1 },
        p.$CaptionSliderOptions
      ),
      X = p.$BulletNavigatorOptions,
      E = p.$ArrowNavigatorOptions,
      J = p.$ThumbnailNavigatorOptions,
      U = !p.$UISearchMode,
      x,
      u = a.z(q, "slides", U),
      eb = a.z(q, "loading", U) || a.jb(e),
      Hb = a.z(q, "navigator", U),
      bc = a.z(q, "arrowleft", U),
      Zb = a.z(q, "arrowright", U),
      Fb = a.z(q, "thumbnavigator", U),
      mc = a.m(u),
      lc = a.n(u),
      T,
      W = [],
      vc = a.K(u);
    a.e(vc, function (b) {
      if (b.tagName == "DIV" && !a.s(b, "u")) W.push(b);
      else a.T() && a.E(b, (a.E(b) || 0) + 1);
    });
    var r = -1,
      xb,
      ub,
      s = W.length,
      L = p.$SlideWidth || mc,
      K = p.$SlideHeight || lc,
      Ub = p.$SlideSpacing,
      Ab = L + Ub,
      Bb = K + Ub,
      ac = jb & 1 ? Ab : Bb,
      v = b.min(p.$DisplayPieces, s),
      kb,
      w,
      M,
      zb,
      Q = [],
      Nb,
      Pb,
      Lb,
      cc,
      Dc,
      S,
      H = p.$PauseOnHover,
      oc = p.$AutoPlayInterval,
      Tb = p.$SlideDuration,
      sb,
      fb,
      ib,
      Ob = v < s,
      D = Ob ? p.$Loop : 0,
      ob,
      O,
      I = 1,
      R,
      B,
      V,
      vb = 0,
      wb = 0,
      G,
      db,
      hb,
      Db,
      y,
      bb,
      z,
      Rb = new qc(),
      ab;
    S = p.$AutoPlay;
    n.Vb = ec;
    ic();
    a.Eb(q, "jssor-slider", c);
    a.E(u, a.E(u) || 0);
    a.D(u, "absolute");
    kb = a.Q(u, c);
    a.Db(kb, u);
    if (gb) {
      cc = gb.$ShowLink;
      sb = gb.$Class;
      fb = v == 1 && s > 1 && sb && (!a.dd() || a.fd() >= 8);
    }
    ib = fb || v >= s || !(D & 1) ? 0 : p.$ParkingPosition;
    ob = (v > 1 || ib ? jb : -1) & p.$DragOrientation;
    var Qb = u,
      C = [],
      A,
      P,
      Y = a.lf().ff,
      F,
      rb,
      Ib,
      tb;
    bb = new Ac();
    if (fb) A = new sb(Rb, L, K, gb, Y);
    a.C(kb, bb.Tb);
    a.W(u, "hidden");
    P = Wb();
    a.Hb(P, "backgroundColor", "#000");
    a.tb(P, 0);
    a.Db(P, Qb.firstChild, Qb);
    for (var qb = 0; qb < W.length; qb++) {
      var xc = W[qb],
        yc = new zc(xc, qb);
      C.push(yc);
    }
    a.L(eb);
    Db = new Bc();
    z = new pc(Db, bb);
    if (ob) {
      a.c(u, "mousedown", Xb);
      a.c(u, "touchstart", tc);
      a.c(u, "dragstart", Gb);
      a.c(u, "selectstart", Gb);
      a.c(e, "mouseup", pb);
      a.c(e, "touchend", pb);
      a.c(e, "touchcancel", pb);
      a.c(h, "blur", pb);
    }
    H &= Y ? 10 : 5;
    if (Hb && X) {
      Nb = new X.$Class(Hb, X, Z(), lb());
      Q.push(Nb);
    }
    if (E && bc && Zb) {
      E.$Loop = D;
      E.$DisplayPieces = v;
      Pb = new E.$Class(bc, Zb, E, Z(), lb());
      Q.push(Pb);
    }
    if (Fb && J) {
      J.$StartIndex = p.$StartIndex;
      Lb = new J.$Class(Fb, J);
      Q.push(Lb);
    }
    a.e(Q, function (a) {
      a.kc(s, C, eb);
      a.$On(m.Qb, kc);
    });
    Eb(Z());
    a.c(u, "click", jc);
    a.c(q, "mouseout", a.Gb(hc, q));
    a.c(q, "mouseover", a.Gb(gc, q));
    yb();
    p.$ArrowKeyNavigation &&
      a.c(e, "keydown", function (a) {
        if (a.keyCode == 37) nb(-1);
        else a.keyCode == 39 && nb(1);
      });
    var mb = p.$StartIndex;
    if (!(D & 1)) mb = b.max(0, b.min(mb, s - v));
    z.Mb(mb, mb, 0);
  });
  h.$JssorSlideo$ = f;
  f.$EVT_CLICK = 21;
  f.$EVT_DRAG_START = 22;
  f.$EVT_DRAG_END = 23;
  f.$EVT_SWIPE_START = 24;
  f.$EVT_SWIPE_END = 25;
  f.$EVT_LOAD_START = 26;
  f.$EVT_LOAD_END = 27;
  f.gf = 28;
  f.$EVT_POSITION_CHANGE = 202;
  f.$EVT_PARK = 203;
  f.$EVT_SLIDESHOW_START = 206;
  f.$EVT_SLIDESHOW_END = 207;
  f.$EVT_PROGRESS_CHANGE = 208;
  f.$EVT_STATE_CHANGE = 209;
  f.$EVT_ROLLBACK_START = 210;
  f.$EVT_ROLLBACK_END = 211;
  var m = { Qb: 1 };
  h.$JssorBulletNavigator$ = function (e, D) {
    var f = this;
    l.call(f);
    e = a.X(e);
    var t,
      u,
      s,
      r,
      n = 0,
      d,
      o,
      k,
      y,
      z,
      j,
      h,
      q,
      p,
      C = [],
      A = [];
    function x(a) {
      a != -1 && A[a].Wc(a == n);
    }
    function v(a) {
      f.i(m.Qb, a * o);
    }
    f.$Elmt = e;
    f.yc = function (a) {
      if (a != r) {
        var d = n,
          c = b.floor(a / o);
        n = c;
        r = a;
        x(d);
        x(c);
      }
    };
    f.ac = function (b) {
      a.A(e, b);
    };
    var B;
    f.pc = function (f, b) {
      if (!B || d.$Scale == g) {
        d.$AutoCenter & 1 && a.B(e, (f - u) / 2);
        d.$AutoCenter & 2 && a.v(e, (b - s) / 2);
        B = c;
      }
    };
    var w;
    f.kc = function (D) {
      if (!w) {
        t = b.ceil(D / o);
        n = 0;
        var m = q + y,
          r = p + z,
          l = b.ceil(t / k) - 1;
        u = q + m * (!j ? l : k - 1);
        s = p + r * (j ? l : k - 1);
        a.m(e, u);
        a.n(e, s);
        for (var f = 0; f < t; f++) {
          var B = a.Ie();
          a.Ue(B, f + 1);
          var g = a.Vc(h, "numbertemplate", B, c);
          a.D(g, "absolute");
          var x = f % (l + 1);
          a.B(g, !j ? m * x : (f % k) * m);
          a.v(g, j ? r * x : b.floor(f / (l + 1)) * r);
          a.C(e, g);
          C[f] = g;
          d.$ActionMode & 1 && a.c(g, "click", a.H(i, v, f));
          d.$ActionMode & 2 && a.c(g, "mouseover", a.Gb(a.H(i, v, f), g));
          A[f] = a.Ib(g);
        }
        w = c;
      }
    };
    f.Vb = d = a.o(
      { $SpacingX: 0, $SpacingY: 0, $Orientation: 1, $ActionMode: 1 },
      D
    );
    h = a.z(e, "prototype");
    q = a.m(h);
    p = a.n(h);
    a.zb(h, e);
    o = d.$Steps || 1;
    k = d.$Lanes || 1;
    y = d.$SpacingX;
    z = d.$SpacingY;
    j = d.$Orientation - 1;
  };
  h.$JssorArrowNavigator$ = function (d, f, j, o) {
    var b = this;
    l.call(b);
    var v,
      u,
      e,
      h,
      k,
      r = a.m(d),
      p = a.n(d);
    function n(a) {
      b.i(m.Qb, a, c);
    }
    function s(b) {
      a.A(d, b || (!j.$Loop && e == 0));
      a.A(f, b || (!j.$Loop && e >= u - j.$DisplayPieces));
      v = b;
    }
    b.yc = function (b, a, c) {
      if (c) e = a;
      else {
        e = b;
        s(v);
      }
    };
    b.ac = s;
    var t;
    b.pc = function (e, b) {
      if (!t || h.$Scale == g) {
        if (h.$AutoCenter & 1) {
          a.B(d, (o - r) / 2);
          a.B(f, (o - r) / 2);
        }
        if (h.$AutoCenter & 2) {
          a.v(d, (b - p) / 2);
          a.v(f, (b - p) / 2);
        }
        t = c;
      }
    };
    var q;
    b.kc = function (b) {
      u = b;
      e = 0;
      if (!q) {
        a.c(d, "click", a.H(i, n, -k));
        a.c(f, "click", a.H(i, n, k));
        a.Ib(d);
        a.Ib(f);
        q = c;
      }
    };
    b.Vb = h = a.o({ $Steps: 1 }, j);
    k = h.$Steps;
  };
  h.$JssorThumbnailNavigator$ = function (k, B) {
    var i = this,
      y,
      p,
      d,
      v = [],
      z,
      x,
      e,
      q,
      r,
      u,
      t,
      o,
      s,
      h,
      n;
    l.call(i);
    k = a.X(k);
    function A(l, f) {
      var g = this,
        b,
        k,
        j;
      function o() {
        k.Wc(p == f);
      }
      function h() {
        if (!s.$LastDragSucceded()) {
          var a = e - (f % e),
            b = s.ed((f + a) / e - 1),
            c = b * e + e - a;
          i.i(m.Qb, c);
        }
      }
      g.eb = f;
      g.wd = o;
      j = l.Ke || l.Rb || a.jb();
      g.Tb = b = a.Vc(n, "thumbnailtemplate", j, c);
      k = a.Ib(b);
      d.$ActionMode & 1 && a.c(b, "click", h);
      d.$ActionMode & 2 && a.c(b, "mouseover", a.Gb(h, b));
    }
    i.yc = function (c, d, f) {
      var a = p;
      p = c;
      a != -1 && v[a].wd();
      v[c].wd();
      !f && s.$PlayTo(s.ed(b.floor(d / e)));
    };
    i.ac = function (b) {
      a.A(k, b);
    };
    i.pc = a.fc;
    var w;
    i.kc = function (F, D) {
      if (!w) {
        y = F;
        b.ceil(y / e);
        p = -1;
        o = b.min(o, D.length);
        var i = d.$Orientation & 1,
          m = u + (u + q) * (e - 1) * (1 - i),
          l = t + (t + r) * (e - 1) * i,
          B = m + (m + q) * (o - 1) * i,
          n = l + (l + r) * (o - 1) * (1 - i);
        a.D(h, "absolute");
        a.W(h, "hidden");
        d.$AutoCenter & 1 && a.B(h, (z - B) / 2);
        d.$AutoCenter & 2 && a.v(h, (x - n) / 2);
        a.m(h, B);
        a.n(h, n);
        var j = [];
        a.e(D, function (l, f) {
          var g = new A(l, f),
            d = g.Tb,
            c = b.floor(f / e),
            k = f % e;
          a.B(d, (u + q) * k * (1 - i));
          a.v(d, (t + r) * k * i);
          if (!j[c]) {
            j[c] = a.jb();
            a.C(h, j[c]);
          }
          a.C(j[c], d);
          v.push(g);
        });
        var E = a.o(
          {
            $HWA: g,
            $AutoPlay: g,
            $NaviQuitDrag: g,
            $SlideWidth: m,
            $SlideHeight: l,
            $SlideSpacing: q * i + r * (1 - i),
            $MinDragOffsetToSlide: 12,
            $SlideDuration: 200,
            $PauseOnHover: 1,
            $PlayOrientation: d.$Orientation,
            $DragOrientation: d.$DisableDrag ? 0 : d.$Orientation,
          },
          d
        );
        s = new f(k, E);
        w = c;
      }
    };
    i.Vb = d = a.o(
      {
        $SpacingX: 3,
        $SpacingY: 3,
        $DisplayPieces: 1,
        $Orientation: 1,
        $AutoCenter: 3,
        $ActionMode: 1,
      },
      B
    );
    if (d.$Rows != j) d.$Lanes = d.$Rows;
    z = a.m(k);
    x = a.n(k);
    h = a.z(k, "slides", c);
    n = a.z(h, "prototype");
    u = a.m(n);
    t = a.n(n);
    a.zb(n, h);
    e = d.$Lanes || 1;
    q = d.$SpacingX;
    r = d.$SpacingY;
    o = d.$DisplayPieces;
  };
  function o() {
    k.call(this, 0, 0);
    this.Sb = a.fc;
  }
  h.$JssorCaptionSlider$ = function (p, h, f) {
    var c = this,
      g,
      n = f ? h.$PlayInMode : h.$PlayOutMode,
      e = h.$CaptionTransitions,
      o = {
        cb: "t",
        $Delay: "d",
        $Duration: "du",
        x: "x",
        y: "y",
        $Rotate: "r",
        $Zoom: "z",
        $Opacity: "f",
        db: "b",
      },
      d = {
        pb: function (b, a) {
          if (!isNaN(a.ib)) b = a.ib;
          else b *= a.Ud;
          return b;
        },
        $Opacity: function (b, a) {
          return this.pb(b - 1, a);
        },
      };
    d.$Zoom = d.$Opacity;
    k.call(c, 0, 0);
    function l(r, m) {
      var k = [],
        i,
        j = [],
        c = [];
      function h(c, d) {
        var b = {};
        a.e(o, function (g, h) {
          var e = a.s(c, g + (d || ""));
          if (e) {
            var f = {};
            if (g == "t") f.ib = e;
            else if (e.indexOf("%") + 1) f.Ud = a.zc(e) / 100;
            else f.ib = a.zc(e);
            b[h] = f;
          }
        });
        return b;
      }
      function p() {
        return e[b.floor(b.random() * e.length)];
      }
      function g(f) {
        var h;
        if (f == "*") h = p();
        else if (f) {
          var d = e[a.Ze(f)] || e[f];
          if (a.bc(d)) {
            if (f != i) {
              i = f;
              c[f] = 0;
              j[f] = d[b.floor(b.random() * d.length)];
            } else c[f]++;
            d = j[f];
            if (a.bc(d)) {
              d = d.length && d[c[f] % d.length];
              if (a.bc(d)) d = d[b.floor(b.random() * d.length)];
            }
          }
          h = d;
          if (a.gd(h)) h = g(h);
        }
        return h;
      }
      var q = a.K(r);
      a.e(q, function (b) {
        var c = [];
        c.$Elmt = b;
        var e = a.s(b, "u") == "caption";
        a.e(f ? [0, 3] : [2], function (k, o) {
          if (e) {
            var j, f;
            if (k != 2 || !a.s(b, "t3")) {
              f = h(b, k);
              if (k == 2 && !f.cb) {
                f.$Delay = f.$Delay || { ib: 0 };
                f = a.o(h(b, 0), f);
              }
            }
            if (f && f.cb) {
              j = g(f.cb.ib);
              if (j) {
                var i = a.o({ $Delay: 0 }, j);
                a.e(f, function (c, a) {
                  var b = (d[a] || d.pb).apply(d, [i[a], f[a]]);
                  if (!isNaN(b)) i[a] = b;
                });
                if (!o)
                  if (f.db) i.db = f.db.ib || 0;
                  else if (n & 2) i.db = 0;
              }
            }
            c.push(i);
          }
          if (m % 2 && !o) c.K = l(b, m + 1);
        });
        k.push(c);
      });
      return k;
    }
    function m(w, c, z) {
      var g = {
          $Easing: c.$Easing,
          $Round: c.$Round,
          $During: c.$During,
          $Reverse: f && !z,
        },
        m = w,
        r = a.Re(w),
        l = a.m(m),
        j = a.n(m),
        y = a.m(r),
        x = a.n(r),
        h = {},
        e = {},
        i = c.$ScaleClip || 1;
      if (c.$Opacity) e.$Opacity = 1 - c.$Opacity;
      g.$OriginalWidth = l;
      g.$OriginalHeight = j;
      if (c.$Zoom || c.$Rotate) {
        e.$Zoom = (c.$Zoom || 2) - 2;
        if (a.T() || a.uc()) e.$Zoom = b.min(e.$Zoom, 1);
        h.$Zoom = 1;
        var B = c.$Rotate || 0;
        e.$Rotate = B * 360;
        h.$Rotate = 0;
      } else if (c.$Clip) {
        var s = { $Top: 0, $Right: l, $Bottom: j, $Left: 0 },
          v = a.o({}, s),
          d = (v.vb = {}),
          u = c.$Clip & 4,
          p = c.$Clip & 8,
          t = c.$Clip & 1,
          q = c.$Clip & 2;
        if (u && p) {
          d.$Top = (j / 2) * i;
          d.$Bottom = -d.$Top;
        } else if (u) d.$Bottom = -j * i;
        else if (p) d.$Top = j * i;
        if (t && q) {
          d.$Left = (l / 2) * i;
          d.$Right = -d.$Left;
        } else if (t) d.$Right = -l * i;
        else if (q) d.$Left = l * i;
        g.$Move = c.$Move;
        e.$Clip = v;
        h.$Clip = s;
      }
      var n = 0,
        o = 0;
      if (c.x) n -= y * c.x;
      if (c.y) o -= x * c.y;
      if (n || o || g.$Move) {
        e.$Left = n;
        e.$Top = o;
      }
      var A = c.$Duration;
      h = a.o(h, a.Dd(m, e));
      g.nc = a.Cd();
      return new k(c.$Delay, A, g, m, h, e);
    }
    function i(b, d) {
      a.e(d, function (a) {
        var e,
          h = a.$Elmt,
          d = a[0],
          k = a[1];
        if (d) {
          e = m(h, d);
          b = e.Pb(d.db == j ? b : d.db, 1);
        }
        b = i(b, a.K);
        if (k) {
          var f = m(h, k, 1);
          f.Pb(b, 1);
          c.gb(f);
          g.gb(f);
        }
        e && c.gb(e);
      });
      return b;
    }
    c.Sb = function () {
      c.I(c.Z() * (f || 0));
      g.cc();
    };
    g = new k(0, 0);
    i(0, n ? l(p, 1) : []);
  };
})(window, document, Math, null, true, false);
