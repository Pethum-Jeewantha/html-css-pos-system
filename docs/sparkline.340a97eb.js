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
})({"node_modules/admin-lte/plugins/sparklines/sparkline.js":[function(require,module,exports) {
var define;
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like enviroments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.Sparkline = factory();
  }
})(window, function () {
  function extend(specific, general) {
    var obj = {};

    for (var key in general) {
      obj[key] = key in specific ? specific[key] : general[key];
    }

    return obj;
  }

  function Sparkline(element, options) {
    this.element = element;
    this.options = extend(options || {}, Sparkline.options);

    init: {
      this.element.innerHTML = "<canvas></canvas>";
      this.canvas = this.element.firstChild;
      this.context = this.canvas.getContext("2d");
      this.ratio = window.devicePixelRatio || 1;

      if (this.options.tooltip) {
        this.canvas.style.position = "relative";
        this.canvas.onmousemove = showTooltip.bind(this);
      }
    }
  }

  Sparkline.options = {
    width: 100,
    height: null,
    lineColor: "black",
    lineWidth: 1.5,
    startColor: "transparent",
    endColor: "black",
    maxColor: "transparent",
    minColor: "transparent",
    minValue: null,
    maxValue: null,
    minMaxValue: null,
    maxMinValue: null,
    dotRadius: 2.5,
    tooltip: null,
    fillBelow: true,
    fillLighten: 0.5,
    startLine: false,
    endLine: false,
    minLine: false,
    maxLine: false,
    bottomLine: false,
    topLine: false,
    averageLine: false
  };

  Sparkline.init = function (element, options) {
    return new Sparkline(element, options);
  };

  Sparkline.draw = function (element, points, options) {
    var sparkline = new Sparkline(element, options);
    sparkline.draw(points);
    return sparkline;
  };

  function getY(minValue, maxValue, offsetY, height, index) {
    var range = maxValue - minValue;

    if (range == 0) {
      return offsetY + height / 2;
    } else {
      return offsetY + height - (this[index] - minValue) / range * height;
    }
  }

  function drawDot(radius, x1, x2, color, line, x, y) {
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, radius, 0, Math.PI * 2, false);
    this.context.fill();
    drawLine.call(this, x1, x2, line, x, y);
  }

  function drawLine(x1, x2, style, x, y) {
    if (!style) return;
    this.context.save();
    this.context.strokeStyle = style.color || 'black';
    this.context.lineWidth = (style.width || 1) * this.ratio;
    this.context.globalAlpha = style.alpha || 1;
    this.context.beginPath();
    this.context.moveTo(style.direction != 'right' ? x1 : x, y);
    this.context.lineTo(style.direction != 'left' ? x2 : x, y);
    this.context.stroke();
    this.context.restore();
  }

  function showTooltip(e) {
    var x = e.offsetX || e.layerX || 0;
    var delta = (this.options.width - this.options.dotRadius * 2) / (this.points.length - 1);
    var index = minmax(0, Math.round((x - this.options.dotRadius) / delta), this.points.length - 1);
    this.canvas.title = this.options.tooltip(this.points[index], index, this.points);
  }

  Sparkline.prototype.draw = function (points) {
    points = points || [];
    this.points = points;
    this.canvas.width = this.options.width * this.ratio;
    this.canvas.style.width = this.options.width + 'px';
    var pxHeight = this.options.height || this.element.offsetHeight;
    this.canvas.height = pxHeight * this.ratio;
    this.canvas.style.height = pxHeight + 'px';
    var lineWidth = this.options.lineWidth * this.ratio;
    var offsetX = Math.max(this.options.dotRadius * this.ratio, lineWidth / 2);
    var offsetY = Math.max(this.options.dotRadius * this.ratio, lineWidth / 2);
    var width = this.canvas.width - offsetX * 2;
    var height = this.canvas.height - offsetY * 2;
    var minValue = Math.min.apply(Math, points);
    var maxValue = Math.max.apply(Math, points);
    var bottomValue = this.options.minValue != undefined ? this.options.minValue : Math.min(minValue, this.options.maxMinValue != undefined ? this.options.maxMinValue : minValue);
    var topValue = this.options.maxValue != undefined ? this.options.maxValue : Math.max(maxValue, this.options.minMaxValue != undefined ? this.options.minMaxValue : maxValue);
    var minX = offsetX;
    var maxX = offsetX;
    var x = offsetX;
    var y = getY.bind(points, bottomValue, topValue, offsetY, height);
    var delta = width / (points.length - 1);
    var dot = drawDot.bind(this, this.options.dotRadius * this.ratio, offsetX, width + offsetX);
    var line = drawLine.bind(this, offsetX, width + offsetX);
    this.context.save();
    this.context.strokeStyle = this.options.lineColor;
    this.context.fillStyle = this.options.lineColor;
    this.context.lineWidth = lineWidth;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

    if (this.options.fillBelow && points.length > 1) {
      this.context.save();
      this.context.beginPath();
      this.context.moveTo(x, y(0));

      for (var i = 1; i < points.length; i++) {
        x += delta;
        minX = points[i] == minValue ? x : minX;
        maxX = points[i] == maxValue ? x : maxX;
        this.context.lineTo(x, y(i));
      }

      this.context.lineTo(width + offsetX, height + offsetY + lineWidth / 2);
      this.context.lineTo(offsetX, height + offsetY + lineWidth / 2);
      this.context.fill();

      if (this.options.fillLighten > 0) {
        this.context.fillStyle = 'white';
        this.context.globalAlpha = this.options.fillLighten;
        this.context.fill();
        this.context.globalAlpha = 1;
      } else if (this.options.fillLighten < 0) {
        this.context.fillStyle = 'black';
        this.context.globalAlpha = -this.options.fillLighten;
        this.context.fill();
      }

      this.context.restore();
    }

    x = offsetX;
    this.context.beginPath();
    this.context.moveTo(x, y(0));

    for (var i = 1; i < points.length; i++) {
      x += delta;
      this.context.lineTo(x, y(i));
    }

    this.context.stroke();
    this.context.restore();
    line(this.options.bottomLine, 0, offsetY);
    line(this.options.topLine, 0, height + offsetY + lineWidth / 2);
    dot(this.options.startColor, this.options.startLine, offsetX + (points.length == 1 ? width / 2 : 0), y(0));
    dot(this.options.endColor, this.options.endLine, offsetX + (points.length == 1 ? width / 2 : width), y(points.length - 1));
    dot(this.options.minColor, this.options.minLine, minX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(minValue)));
    dot(this.options.maxColor, this.options.maxLine, maxX + (points.length == 1 ? width / 2 : 0), y(points.indexOf(maxValue))); //line(this.options.averageLine, )
  };

  function minmax(a, b, c) {
    return Math.max(a, Math.min(b, c));
  }

  return Sparkline;
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41571" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","node_modules/admin-lte/plugins/sparklines/sparkline.js"], null)
//# sourceMappingURL=/sparkline.340a97eb.js.map