// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js":[function(require,module,exports) {
var define;
(function (e) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], e);
  } else {
    e(jQuery);
  }
})(function (e) {
  "use strict";

  var t = {},
      n = Math.max,
      r = Math.min;
  t.c = {};
  t.c.d = e(document);

  t.c.t = function (e) {
    return e.originalEvent.touches.length - 1;
  };

  t.o = function () {
    var n = this;
    this.o = null;
    this.$ = null;
    this.i = null;
    this.g = null;
    this.v = null;
    this.cv = null;
    this.x = 0;
    this.y = 0;
    this.w = 0;
    this.h = 0;
    this.$c = null;
    this.c = null;
    this.t = 0;
    this.isInit = false;
    this.fgColor = null;
    this.pColor = null;
    this.dH = null;
    this.cH = null;
    this.eH = null;
    this.rH = null;
    this.scale = 1;
    this.relative = false;
    this.relativeWidth = false;
    this.relativeHeight = false;
    this.$div = null;

    this.run = function () {
      var t = function (e, t) {
        var r;

        for (r in t) {
          n.o[r] = t[r];
        }

        n._carve().init();

        n._configure()._draw();
      };

      if (this.$.data("kontroled")) return;
      this.$.data("kontroled", true);
      this.extend();
      this.o = e.extend({
        min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
        max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
        stopper: true,
        readOnly: this.$.data("readonly") || this.$.attr("readonly") === "readonly",
        cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
        thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
        lineCap: this.$.data("linecap") || "butt",
        width: this.$.data("width") || 200,
        height: this.$.data("height") || 200,
        displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
        displayPrevious: this.$.data("displayprevious"),
        fgColor: this.$.data("fgcolor") || "#87CEEB",
        inputColor: this.$.data("inputcolor"),
        font: this.$.data("font") || "Arial",
        fontWeight: this.$.data("font-weight") || "bold",
        inline: false,
        step: this.$.data("step") || 1,
        rotation: this.$.data("rotation"),
        draw: null,
        change: null,
        cancel: null,
        release: null,
        format: function (e) {
          return e;
        },
        parse: function (e) {
          return parseFloat(e);
        }
      }, this.o);
      this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";

      if (!this.o.inputColor) {
        this.o.inputColor = this.o.fgColor;
      }

      if (this.$.is("fieldset")) {
        this.v = {};
        this.i = this.$.find("input");
        this.i.each(function (t) {
          var r = e(this);
          n.i[t] = r;
          n.v[t] = n.o.parse(r.val());
          r.bind("change blur", function () {
            var e = {};
            e[t] = r.val();
            n.val(n._validate(e));
          });
        });
        this.$.find("legend").remove();
      } else {
        this.i = this.$;
        this.v = this.o.parse(this.$.val());
        this.v === "" && (this.v = this.o.min);
        this.$.bind("change blur", function () {
          n.val(n._validate(n.o.parse(n.$.val())));
        });
      }

      !this.o.displayInput && this.$.hide();
      this.$c = e(document.createElement("canvas")).attr({
        width: this.o.width,
        height: this.o.height
      });
      this.$div = e('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + "px;" + '"></div>');
      this.$.wrap(this.$div).before(this.$c);
      this.$div = this.$.parent();

      if (typeof G_vmlCanvasManager !== "undefined") {
        G_vmlCanvasManager.initElement(this.$c[0]);
      }

      this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;

      if (!this.c) {
        throw {
          name: "CanvasNotSupportedException",
          message: "Canvas not supported. Please use excanvas on IE8.0.",
          toString: function () {
            return this.name + ": " + this.message;
          }
        };
      }

      this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
      this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
      this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
      this.relative = this.relativeWidth || this.relativeHeight;

      this._carve();

      if (this.v instanceof Object) {
        this.cv = {};
        this.copy(this.v, this.cv);
      } else {
        this.cv = this.v;
      }

      this.$.bind("configure", t).parent().bind("configure", t);

      this._listen()._configure()._xy().init();

      this.isInit = true;
      this.$.val(this.o.format(this.v));

      this._draw();

      return this;
    };

    this._carve = function () {
      if (this.relative) {
        var e = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
            t = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
        this.w = this.h = Math.min(e, t);
      } else {
        this.w = this.o.width;
        this.h = this.o.height;
      }

      this.$div.css({
        width: this.w + "px",
        height: this.h + "px"
      });
      this.$c.attr({
        width: this.w,
        height: this.h
      });

      if (this.scale !== 1) {
        this.$c[0].width = this.$c[0].width * this.scale;
        this.$c[0].height = this.$c[0].height * this.scale;
        this.$c.width(this.w);
        this.$c.height(this.h);
      }

      return this;
    };

    this._draw = function () {
      var e = true;
      n.g = n.c;
      n.clear();
      n.dH && (e = n.dH());
      e !== false && n.draw();
    };

    this._touch = function (e) {
      var r = function (e) {
        var t = n.xy2val(e.originalEvent.touches[n.t].pageX, e.originalEvent.touches[n.t].pageY);
        if (t == n.cv) return;
        if (n.cH && n.cH(t) === false) return;
        n.change(n._validate(t));

        n._draw();
      };

      this.t = t.c.t(e);
      r(e);
      t.c.d.bind("touchmove.k", r).bind("touchend.k", function () {
        t.c.d.unbind("touchmove.k touchend.k");
        n.val(n.cv);
      });
      return this;
    };

    this._mouse = function (e) {
      var r = function (e) {
        var t = n.xy2val(e.pageX, e.pageY);
        if (t == n.cv) return;
        if (n.cH && n.cH(t) === false) return;
        n.change(n._validate(t));

        n._draw();
      };

      r(e);
      t.c.d.bind("mousemove.k", r).bind("keyup.k", function (e) {
        if (e.keyCode === 27) {
          t.c.d.unbind("mouseup.k mousemove.k keyup.k");
          if (n.eH && n.eH() === false) return;
          n.cancel();
        }
      }).bind("mouseup.k", function (e) {
        t.c.d.unbind("mousemove.k mouseup.k keyup.k");
        n.val(n.cv);
      });
      return this;
    };

    this._xy = function () {
      var e = this.$c.offset();
      this.x = e.left;
      this.y = e.top;
      return this;
    };

    this._listen = function () {
      if (!this.o.readOnly) {
        this.$c.bind("mousedown", function (e) {
          e.preventDefault();

          n._xy()._mouse(e);
        }).bind("touchstart", function (e) {
          e.preventDefault();

          n._xy()._touch(e);
        });
        this.listen();
      } else {
        this.$.attr("readonly", "readonly");
      }

      if (this.relative) {
        e(window).resize(function () {
          n._carve().init();

          n._draw();
        });
      }

      return this;
    };

    this._configure = function () {
      if (this.o.draw) this.dH = this.o.draw;
      if (this.o.change) this.cH = this.o.change;
      if (this.o.cancel) this.eH = this.o.cancel;
      if (this.o.release) this.rH = this.o.release;

      if (this.o.displayPrevious) {
        this.pColor = this.h2rgba(this.o.fgColor, "0.4");
        this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
      } else {
        this.fgColor = this.o.fgColor;
      }

      return this;
    };

    this._clear = function () {
      this.$c[0].width = this.$c[0].width;
    };

    this._validate = function (e) {
      var t = ~~((e < 0 ? -.5 : .5) + e / this.o.step) * this.o.step;
      return Math.round(t * 100) / 100;
    };

    this.listen = function () {};

    this.extend = function () {};

    this.init = function () {};

    this.change = function (e) {};

    this.val = function (e) {};

    this.xy2val = function (e, t) {};

    this.draw = function () {};

    this.clear = function () {
      this._clear();
    };

    this.h2rgba = function (e, t) {
      var n;
      e = e.substring(1, 7);
      n = [parseInt(e.substring(0, 2), 16), parseInt(e.substring(2, 4), 16), parseInt(e.substring(4, 6), 16)];
      return "rgba(" + n[0] + "," + n[1] + "," + n[2] + "," + t + ")";
    };

    this.copy = function (e, t) {
      for (var n in e) {
        t[n] = e[n];
      }
    };
  };

  t.Dial = function () {
    t.o.call(this);
    this.startAngle = null;
    this.xy = null;
    this.radius = null;
    this.lineWidth = null;
    this.cursorExt = null;
    this.w2 = null;
    this.PI2 = 2 * Math.PI;

    this.extend = function () {
      this.o = e.extend({
        bgColor: this.$.data("bgcolor") || "#EEEEEE",
        angleOffset: this.$.data("angleoffset") || 0,
        angleArc: this.$.data("anglearc") || 360,
        inline: true
      }, this.o);
    };

    this.val = function (e, t) {
      if (null != e) {
        e = this.o.parse(e);

        if (t !== false && e != this.v && this.rH && this.rH(e) === false) {
          return;
        }

        this.cv = this.o.stopper ? n(r(e, this.o.max), this.o.min) : e;
        this.v = this.cv;
        this.$.val(this.o.format(this.v));

        this._draw();
      } else {
        return this.v;
      }
    };

    this.xy2val = function (e, t) {
      var i, s;
      i = Math.atan2(e - (this.x + this.w2), -(t - this.y - this.w2)) - this.angleOffset;

      if (this.o.flip) {
        i = this.angleArc - i - this.PI2;
      }

      if (this.angleArc != this.PI2 && i < 0 && i > -.5) {
        i = 0;
      } else if (i < 0) {
        i += this.PI2;
      }

      s = i * (this.o.max - this.o.min) / this.angleArc + this.o.min;
      this.o.stopper && (s = n(r(s, this.o.max), this.o.min));
      return s;
    };

    this.listen = function () {
      var t = this,
          i,
          s,
          o = function (e) {
        e.preventDefault();
        var o = e.originalEvent,
            u = o.detail || o.wheelDeltaX,
            a = o.detail || o.wheelDeltaY,
            f = t._validate(t.o.parse(t.$.val())) + (u > 0 || a > 0 ? t.o.step : u < 0 || a < 0 ? -t.o.step : 0);
        f = n(r(f, t.o.max), t.o.min);
        t.val(f, false);

        if (t.rH) {
          clearTimeout(i);
          i = setTimeout(function () {
            t.rH(f);
            i = null;
          }, 100);

          if (!s) {
            s = setTimeout(function () {
              if (i) t.rH(f);
              s = null;
            }, 200);
          }
        }
      },
          u,
          a,
          f = 1,
          l = {
        37: -t.o.step,
        38: t.o.step,
        39: t.o.step,
        40: -t.o.step
      };

      this.$.bind("keydown", function (i) {
        var s = i.keyCode;

        if (s >= 96 && s <= 105) {
          s = i.keyCode = s - 48;
        }

        u = parseInt(String.fromCharCode(s));

        if (isNaN(u)) {
          s !== 13 && s !== 8 && s !== 9 && s !== 189 && (s !== 190 || t.$.val().match(/\./)) && i.preventDefault();

          if (e.inArray(s, [37, 38, 39, 40]) > -1) {
            i.preventDefault();
            var o = t.o.parse(t.$.val()) + l[s] * f;
            t.o.stopper && (o = n(r(o, t.o.max), t.o.min));
            t.change(t._validate(o));

            t._draw();

            a = window.setTimeout(function () {
              f *= 2;
            }, 30);
          }
        }
      }).bind("keyup", function (e) {
        if (isNaN(u)) {
          if (a) {
            window.clearTimeout(a);
            a = null;
            f = 1;
            t.val(t.$.val());
          }
        } else {
          t.$.val() > t.o.max && t.$.val(t.o.max) || t.$.val() < t.o.min && t.$.val(t.o.min);
        }
      });
      this.$c.bind("mousewheel DOMMouseScroll", o);
      this.$.bind("mousewheel DOMMouseScroll", o);
    };

    this.init = function () {
      if (this.v < this.o.min || this.v > this.o.max) {
        this.v = this.o.min;
      }

      this.$.val(this.v);
      this.w2 = this.w / 2;
      this.cursorExt = this.o.cursor / 100;
      this.xy = this.w2 * this.scale;
      this.lineWidth = this.xy * this.o.thickness;
      this.lineCap = this.o.lineCap;
      this.radius = this.xy - this.lineWidth / 2;
      this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
      this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
      this.angleOffset = this.o.angleOffset * Math.PI / 180;
      this.angleArc = this.o.angleArc * Math.PI / 180;
      this.startAngle = 1.5 * Math.PI + this.angleOffset;
      this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
      var e = n(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
      this.o.displayInput && this.i.css({
        width: (this.w / 2 + 4 >> 0) + "px",
        height: (this.w / 3 >> 0) + "px",
        position: "absolute",
        "vertical-align": "middle",
        "margin-top": (this.w / 3 >> 0) + "px",
        "margin-left": "-" + (this.w * 3 / 4 + 2 >> 0) + "px",
        border: 0,
        background: "none",
        font: this.o.fontWeight + " " + (this.w / e >> 0) + "px " + this.o.font,
        "text-align": "center",
        color: this.o.inputColor || this.o.fgColor,
        padding: "0px",
        "-webkit-appearance": "none"
      }) || this.i.css({
        width: "0px",
        visibility: "hidden"
      });
    };

    this.change = function (e) {
      this.cv = e;
      this.$.val(this.o.format(e));
    };

    this.angle = function (e) {
      return (e - this.o.min) * this.angleArc / (this.o.max - this.o.min);
    };

    this.arc = function (e) {
      var t, n;
      e = this.angle(e);

      if (this.o.flip) {
        t = this.endAngle + 1e-5;
        n = t - e - 1e-5;
      } else {
        t = this.startAngle - 1e-5;
        n = t + e + 1e-5;
      }

      this.o.cursor && (t = n - this.cursorExt) && (n = n + this.cursorExt);
      return {
        s: t,
        e: n,
        d: this.o.flip && !this.o.cursor
      };
    };

    this.draw = function () {
      var e = this.g,
          t = this.arc(this.cv),
          n,
          r = 1;
      e.lineWidth = this.lineWidth;
      e.lineCap = this.lineCap;

      if (this.o.bgColor !== "none") {
        e.beginPath();
        e.strokeStyle = this.o.bgColor;
        e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, true);
        e.stroke();
      }

      if (this.o.displayPrevious) {
        n = this.arc(this.v);
        e.beginPath();
        e.strokeStyle = this.pColor;
        e.arc(this.xy, this.xy, this.radius, n.s, n.e, n.d);
        e.stroke();
        r = this.cv == this.v;
      }

      e.beginPath();
      e.strokeStyle = r ? this.o.fgColor : this.fgColor;
      e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d);
      e.stroke();
    };

    this.cancel = function () {
      this.val(this.v);
    };
  };

  e.fn.dial = e.fn.knob = function (n) {
    return this.each(function () {
      var r = new t.Dial();
      r.o = n;
      r.$ = e(this);
      r.run();
    }).parent();
  };
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33375" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/admin-lte/plugins/jquery-knob/jquery.knob.min.js"], null)
//# sourceMappingURL=/jquery.knob.min.9cb9f21e.js.map