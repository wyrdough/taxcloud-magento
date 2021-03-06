/*!
* jQuery UI 1.8.7
*
* Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (c, j) {
   function k(a) { return !c(a).parents().andSelf().filter(function () { return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this) }).length } c.ui = c.ui || {}; if (!c.ui.version) {
      c.extend(c.ui, { version: "1.8.7", keyCode: { ALT: 18, BACKSPACE: 8, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106,
         NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91
      }
      }); c.fn.extend({ _focus: c.fn.focus, focus: function (a, b) { return typeof a === "number" ? this.each(function () { var d = this; setTimeout(function () { c(d).focus(); b && b.call(d) }, a) }) : this._focus.apply(this, arguments) }, scrollParent: function () {
         var a; a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
            return /(relative|absolute|fixed)/.test(c.curCSS(this,
"position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
         }).eq(0) : this.parents().filter(function () { return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1)) }).eq(0); return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
      }, zIndex: function (a) {
         if (a !== j) return this.css("zIndex", a); if (this.length) {
            a = c(this[0]); for (var b; a.length && a[0] !== document; ) {
               b = a.css("position");
               if (b === "absolute" || b === "relative" || b === "fixed") { b = parseInt(a.css("zIndex"), 10); if (!isNaN(b) && b !== 0) return b } a = a.parent()
            }
         } return 0
      }, disableSelection: function () { return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) { a.preventDefault() }) }, enableSelection: function () { return this.unbind(".ui-disableSelection") }
      }); c.each(["Width", "Height"], function (a, b) {
         function d(f, g, l, m) {
            c.each(e, function () {
               g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0; if (l) g -= parseFloat(c.curCSS(f,
"border" + this + "Width", true)) || 0; if (m) g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
            }); return g
         } var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"], h = b.toLowerCase(), i = { innerWidth: c.fn.innerWidth, innerHeight: c.fn.innerHeight, outerWidth: c.fn.outerWidth, outerHeight: c.fn.outerHeight }; c.fn["inner" + b] = function (f) { if (f === j) return i["inner" + b].call(this); return this.each(function () { c(this).css(h, d(this, f) + "px") }) }; c.fn["outer" + b] = function (f, g) {
            if (typeof f !== "number") return i["outer" + b].call(this, f); return this.each(function () {
               c(this).css(h,
d(this, f, true, g) + "px")
            })
         }
      }); c.extend(c.expr[":"], { data: function (a, b, d) { return !!c.data(a, d[3]) }, focusable: function (a) { var b = a.nodeName.toLowerCase(), d = c.attr(a, "tabindex"); if ("area" === b) { b = a.parentNode; d = b.name; if (!a.href || !d || b.nodeName.toLowerCase() !== "map") return false; a = c("img[usemap=#" + d + "]")[0]; return !!a && k(a) } return (/input|select|textarea|button|object/.test(b) ? !a.disabled : "a" == b ? a.href || !isNaN(d) : !isNaN(d)) && k(a) }, tabbable: function (a) { var b = c.attr(a, "tabindex"); return (isNaN(b) || b >= 0) && c(a).is(":focusable") } });
      c(function () { var a = document.body, b = a.appendChild(b = document.createElement("div")); c.extend(b.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }); c.support.minHeight = b.offsetHeight === 100; c.support.selectstart = "onselectstart" in b; a.removeChild(b).style.display = "none" }); c.extend(c.ui, { plugin: { add: function (a, b, d) { a = c.ui[a].prototype; for (var e in d) { a.plugins[e] = a.plugins[e] || []; a.plugins[e].push([b, d[e]]) } }, call: function (a, b, d) {
         if ((b = a.plugins[b]) && a.element[0].parentNode) for (var e = 0; e < b.length; e++) a.options[b[e][0]] &&
b[e][1].apply(a.element, d)
      }
      }, contains: function (a, b) { return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b) }, hasScroll: function (a, b) { if (c(a).css("overflow") === "hidden") return false; b = b && b === "left" ? "scrollLeft" : "scrollTop"; var d = false; if (a[b] > 0) return true; a[b] = 1; d = a[b] > 0; a[b] = 0; return d }, isOverAxis: function (a, b, d) { return a > b && a < b + d }, isOver: function (a, b, d, e, h, i) { return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i) }
      })
   }
})(jQuery);
; /*!
 * jQuery UI Widget 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
   if (b.cleanData) { var k = b.cleanData; b.cleanData = function (a) { for (var c = 0, d; (d = a[c]) != null; c++) b(d).triggerHandler("remove"); k(a) } } else { var l = b.fn.remove; b.fn.remove = function (a, c) { return this.each(function () { if (!c) if (!a || b.filter(a, [this]).length) b("*", this).add([this]).each(function () { b(this).triggerHandler("remove") }); return l.call(b(this), a, c) }) } } b.widget = function (a, c, d) {
      var e = a.split(".")[0], f; a = a.split(".")[1]; f = e + "-" + a; if (!d) { d = c; c = b.Widget } b.expr[":"][f] = function (h) {
         return !!b.data(h,
a)
      }; b[e] = b[e] || {}; b[e][a] = function (h, g) { arguments.length && this._createWidget(h, g) }; c = new c; c.options = b.extend(true, {}, c.options); b[e][a].prototype = b.extend(true, c, { namespace: e, widgetName: a, widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a, widgetBaseClass: f }, d); b.widget.bridge(a, b[e][a])
   }; b.widget.bridge = function (a, c) {
      b.fn[a] = function (d) {
         var e = typeof d === "string", f = Array.prototype.slice.call(arguments, 1), h = this; d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d; if (e && d.charAt(0) === "_") return h;
         e ? this.each(function () { var g = b.data(this, a), i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g; if (i !== g && i !== j) { h = i; return false } }) : this.each(function () { var g = b.data(this, a); g ? g.option(d || {})._init() : b.data(this, a, new c(d, this)) }); return h
      }
   }; b.Widget = function (a, c) { arguments.length && this._createWidget(a, c) }; b.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", options: { disabled: false }, _createWidget: function (a, c) {
      b.data(c, this.widgetName, this); this.element = b(c); this.options = b.extend(true, {}, this.options,
this._getCreateOptions(), a); var d = this; this.element.bind("remove." + this.widgetName, function () { d.destroy() }); this._create(); this._trigger("create"); this._init()
   }, _getCreateOptions: function () { return b.metadata && b.metadata.get(this.element[0])[this.widgetName] }, _create: function () { }, _init: function () { }, destroy: function () { this.element.unbind("." + this.widgetName).removeData(this.widgetName); this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled") },
      widget: function () { return this.element }, option: function (a, c) { var d = a; if (arguments.length === 0) return b.extend({}, this.options); if (typeof a === "string") { if (c === j) return this.options[a]; d = {}; d[a] = c } this._setOptions(d); return this }, _setOptions: function (a) { var c = this; b.each(a, function (d, e) { c._setOption(d, e) }); return this }, _setOption: function (a, c) { this.options[a] = c; if (a === "disabled") this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c); return this },
      enable: function () { return this._setOption("disabled", false) }, disable: function () { return this._setOption("disabled", true) }, _trigger: function (a, c, d) { var e = this.options[a]; c = b.Event(c); c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase(); d = d || {}; if (c.originalEvent) { a = b.event.props.length; for (var f; a; ) { f = b.event.props[--a]; c[f] = c.originalEvent[f] } } this.element.trigger(c, d); return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented()) }
   }
})(jQuery);
; /*!
 * jQuery UI Mouse 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (c) {
   c.widget("ui.mouse", { options: { cancel: ":input,option", distance: 1, delay: 0 }, _mouseInit: function () { var a = this; this.element.bind("mousedown." + this.widgetName, function (b) { return a._mouseDown(b) }).bind("click." + this.widgetName, function (b) { if (true === c.data(b.target, a.widgetName + ".preventClickEvent")) { c.removeData(b.target, a.widgetName + ".preventClickEvent"); b.stopImmediatePropagation(); return false } }); this.started = false }, _mouseDestroy: function () { this.element.unbind("." + this.widgetName) }, _mouseDown: function (a) {
      a.originalEvent =
a.originalEvent || {}; if (!a.originalEvent.mouseHandled) {
         this._mouseStarted && this._mouseUp(a); this._mouseDownEvent = a; var b = this, e = a.which == 1, f = typeof this.options.cancel == "string" ? c(a.target).parents().add(a.target).filter(this.options.cancel).length : false; if (!e || f || !this._mouseCapture(a)) return true; this.mouseDelayMet = !this.options.delay; if (!this.mouseDelayMet) this._mouseDelayTimer = setTimeout(function () { b.mouseDelayMet = true }, this.options.delay); if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
            this._mouseStarted =
this._mouseStart(a) !== false; if (!this._mouseStarted) { a.preventDefault(); return true }
         } this._mouseMoveDelegate = function (d) { return b._mouseMove(d) }; this._mouseUpDelegate = function (d) { return b._mouseUp(d) }; c(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate); a.preventDefault(); return a.originalEvent.mouseHandled = true
      }
   }, _mouseMove: function (a) {
      if (c.browser.msie && !(document.documentMode >= 9) && !a.button) return this._mouseUp(a); if (this._mouseStarted) {
         this._mouseDrag(a);
         return a.preventDefault()
      } if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a); return !this._mouseStarted
   }, _mouseUp: function (a) {
      c(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate); if (this._mouseStarted) {
         this._mouseStarted = false; a.target == this._mouseDownEvent.target && c.data(a.target, this.widgetName + ".preventClickEvent",
true); this._mouseStop(a)
      } return false
   }, _mouseDistanceMet: function (a) { return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return true }
   })
})(jQuery);
; /*
 * jQuery UI Position 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function (c) {
   c.ui = c.ui || {}; var n = /left|center|right/, o = /top|center|bottom/, t = c.fn.position, u = c.fn.offset; c.fn.position = function (b) {
      if (!b || !b.of) return t.apply(this, arguments); b = c.extend({}, b); var a = c(b.of), d = a[0], g = (b.collision || "flip").split(" "), e = b.offset ? b.offset.split(" ") : [0, 0], h, k, j; if (d.nodeType === 9) { h = a.width(); k = a.height(); j = { top: 0, left: 0} } else if (d.setTimeout) { h = a.width(); k = a.height(); j = { top: a.scrollTop(), left: a.scrollLeft()} } else if (d.preventDefault) {
         b.at = "left top"; h = k = 0; j = { top: b.of.pageY,
            left: b.of.pageX
         }
      } else { h = a.outerWidth(); k = a.outerHeight(); j = a.offset() } c.each(["my", "at"], function () { var f = (b[this] || "").split(" "); if (f.length === 1) f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"]; f[0] = n.test(f[0]) ? f[0] : "center"; f[1] = o.test(f[1]) ? f[1] : "center"; b[this] = f }); if (g.length === 1) g[1] = g[0]; e[0] = parseInt(e[0], 10) || 0; if (e.length === 1) e[1] = e[0]; e[1] = parseInt(e[1], 10) || 0; if (b.at[0] === "right") j.left += h; else if (b.at[0] === "center") j.left += h / 2; if (b.at[1] === "bottom") j.top +=
k; else if (b.at[1] === "center") j.top += k / 2; j.left += e[0]; j.top += e[1]; return this.each(function () {
   var f = c(this), l = f.outerWidth(), m = f.outerHeight(), p = parseInt(c.curCSS(this, "marginLeft", true)) || 0, q = parseInt(c.curCSS(this, "marginTop", true)) || 0, v = l + p + parseInt(c.curCSS(this, "marginRight", true)) || 0, w = m + q + parseInt(c.curCSS(this, "marginBottom", true)) || 0, i = c.extend({}, j), r; if (b.my[0] === "right") i.left -= l; else if (b.my[0] === "center") i.left -= l / 2; if (b.my[1] === "bottom") i.top -= m; else if (b.my[1] === "center") i.top -= m / 2;
   i.left = Math.round(i.left); i.top = Math.round(i.top); r = { left: i.left - p, top: i.top - q }; c.each(["left", "top"], function (s, x) { c.ui.position[g[s]] && c.ui.position[g[s]][x](i, { targetWidth: h, targetHeight: k, elemWidth: l, elemHeight: m, collisionPosition: r, collisionWidth: v, collisionHeight: w, offset: e, my: b.my, at: b.at }) }); c.fn.bgiframe && f.bgiframe(); f.offset(c.extend(i, { using: b.using }))
})
   }; c.ui.position = { fit: { left: function (b, a) {
      var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); b.left =
d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
   }, top: function (b, a) { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top) }
   }, flip: { left: function (b, a) {
      if (a.at[0] !== "center") {
         var d = c(window); d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft(); var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0, e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth, h = -2 * a.offset[0]; b.left +=
a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
      }
   }, top: function (b, a) { if (a.at[1] !== "center") { var d = c(window); d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop(); var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0, e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight, h = -2 * a.offset[1]; b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0 } }
   }
   }; if (!c.offset.setOffset) {
      c.offset.setOffset = function (b, a) {
         if (/static/.test(c.curCSS(b, "position"))) b.style.position = "relative"; var d = c(b),
g = d.offset(), e = parseInt(c.curCSS(b, "top", true), 10) || 0, h = parseInt(c.curCSS(b, "left", true), 10) || 0; g = { top: a.top - g.top + e, left: a.left - g.left + h }; "using" in a ? a.using.call(b, g) : d.css(g)
      }; c.fn.offset = function (b) { var a = this[0]; if (!a || !a.ownerDocument) return null; if (b) return this.each(function () { c.offset.setOffset(this, b) }); return u.call(this) }
   }
})(jQuery);
; /*
 * jQuery UI Draggable 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
   d.widget("ui.draggable", d.ui.mouse, { widgetEventPrefix: "drag", options: { addClasses: true, appendTo: "parent", axis: false, connectToSortable: false, containment: false, cursor: "auto", cursorAt: false, grid: false, handle: false, helper: "original", iframeFix: false, opacity: false, refreshPositions: false, revert: false, revertDuration: 500, scope: "default", scroll: true, scrollSensitivity: 20, scrollSpeed: 20, snap: false, snapMode: "both", snapTolerance: 20, stack: false, zIndex: false }, _create: function () {
      if (this.options.helper ==
"original" && !/^(?:r|a|f)/.test(this.element.css("position"))) this.element[0].style.position = "relative"; this.options.addClasses && this.element.addClass("ui-draggable"); this.options.disabled && this.element.addClass("ui-draggable-disabled"); this._mouseInit()
   }, destroy: function () { if (this.element.data("draggable")) { this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"); this._mouseDestroy(); return this } }, _mouseCapture: function (a) {
      var b =
this.options; if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle")) return false; this.handle = this._getHandle(a); if (!this.handle) return false; return true
   }, _mouseStart: function (a) {
      var b = this.options; this.helper = this._createHelper(a); this._cacheHelperProportions(); if (d.ui.ddmanager) d.ui.ddmanager.current = this; this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(); this.offset = this.positionAbs = this.element.offset(); this.offset = { top: this.offset.top -
this.margins.top, left: this.offset.left - this.margins.left
      }; d.extend(this.offset, { click: { left: a.pageX - this.offset.left, top: a.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.originalPosition = this.position = this._generatePosition(a); this.originalPageX = a.pageX; this.originalPageY = a.pageY; b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt); b.containment && this._setContainment(); if (this._trigger("start", a) === false) { this._clear(); return false } this._cacheHelperProportions();
      d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a); this.helper.addClass("ui-draggable-dragging"); this._mouseDrag(a, true); return true
   }, _mouseDrag: function (a, b) {
      this.position = this._generatePosition(a); this.positionAbs = this._convertPositionTo("absolute"); if (!b) { b = this._uiHash(); if (this._trigger("drag", a, b) === false) { this._mouseUp({}); return false } this.position = b.position } if (!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left + "px"; if (!this.options.axis ||
this.options.axis != "x") this.helper[0].style.top = this.position.top + "px"; d.ui.ddmanager && d.ui.ddmanager.drag(this, a); return false
   }, _mouseStop: function (a) {
      var b = false; if (d.ui.ddmanager && !this.options.dropBehaviour) b = d.ui.ddmanager.drop(this, a); if (this.dropped) { b = this.dropped; this.dropped = false } if (!this.element[0] || !this.element[0].parentNode) return false; if (this.options.revert == "invalid" && !b || this.options.revert == "valid" && b || this.options.revert === true || d.isFunction(this.options.revert) && this.options.revert.call(this.element,
b)) { var c = this; d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { c._trigger("stop", a) !== false && c._clear() }) } else this._trigger("stop", a) !== false && this._clear(); return false
   }, cancel: function () { this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(); return this }, _getHandle: function (a) {
      var b = !this.options.handle || !d(this.options.handle, this.element).length ? true : false; d(this.options.handle, this.element).find("*").andSelf().each(function () {
         if (this ==
a.target) b = true
      }); return b
   }, _createHelper: function (a) { var b = this.options; a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a])) : b.helper == "clone" ? this.element.clone() : this.element; a.parents("body").length || a.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo); a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) && a.css("position", "absolute"); return a }, _adjustOffsetFromHelper: function (a) {
      if (typeof a == "string") a = a.split(" "); if (d.isArray(a)) a = { left: +a[0], top: +a[1] ||
0
      }; if ("left" in a) this.offset.click.left = a.left + this.margins.left; if ("right" in a) this.offset.click.left = this.helperProportions.width - a.right + this.margins.left; if ("top" in a) this.offset.click.top = a.top + this.margins.top; if ("bottom" in a) this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
   }, _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent(); var a = this.offsetParent.offset(); if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0],
this.offsetParent[0])) { a.left += this.scrollParent.scrollLeft(); a.top += this.scrollParent.scrollTop() } if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie) a = { top: 0, left: 0 }; return { top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
   }, _getRelativeOffset: function () {
      if (this.cssPosition == "relative") {
         var a = this.element.position(); return { top: a.top -
(parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
         }
      } else return { top: 0, left: 0 }
   }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0} }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight()} }, _setContainment: function () {
      var a = this.options; if (a.containment ==
"parent") a.containment = this.helper[0].parentNode; if (a.containment == "document" || a.containment == "window") this.containment = [(a.containment == "document" ? 0 : d(window).scrollLeft()) - this.offset.relative.left - this.offset.parent.left, (a.containment == "document" ? 0 : d(window).scrollTop()) - this.offset.relative.top - this.offset.parent.top, (a.containment == "document" ? 0 : d(window).scrollLeft()) + d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ?
0 : d(window).scrollTop()) + (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
         var b = d(a.containment)[0]; if (b) {
            a = d(a.containment).offset(); var c = d(b).css("overflow") != "hidden"; this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"),
10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
         }
      } else if (a.containment.constructor ==
Array) this.containment = a.containment
   }, _convertPositionTo: function (a, b) {
      if (!b) b = this.position; a = a == "absolute" ? 1 : -1; var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName); return { top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() :
f ? 0 : c.scrollTop()) * a), left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft()) * a)
      }
   }, _generatePosition: function (a) {
      var b = this.options, c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, f = /(html|body)/i.test(c[0].tagName), e = a.pageX, g = a.pageY;
      if (this.originalPosition) {
         if (this.containment) { if (a.pageX - this.offset.click.left < this.containment[0]) e = this.containment[0] + this.offset.click.left; if (a.pageY - this.offset.click.top < this.containment[1]) g = this.containment[1] + this.offset.click.top; if (a.pageX - this.offset.click.left > this.containment[2]) e = this.containment[2] + this.offset.click.left; if (a.pageY - this.offset.click.top > this.containment[3]) g = this.containment[3] + this.offset.click.top } if (b.grid) {
            g = this.originalPageY + Math.round((g - this.originalPageY) /
b.grid[1]) * b.grid[1]; g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g; e = this.originalPageX + Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0]; e = this.containment ? !(e - this.offset.click.left < this.containment[0] || e - this.offset.click.left > this.containment[2]) ? e : !(e - this.offset.click.left < this.containment[0]) ? e - b.grid[0] : e + b.grid[0] : e
         }
      } return { top: g - this.offset.click.top -
this.offset.relative.top - this.offset.parent.top + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()), left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft())
      }
   }, _clear: function () {
      this.helper.removeClass("ui-draggable-dragging"); this.helper[0] !=
this.element[0] && !this.cancelHelperRemoval && this.helper.remove(); this.helper = null; this.cancelHelperRemoval = false
   }, _trigger: function (a, b, c) { c = c || this._uiHash(); d.ui.plugin.call(this, a, [b, c]); if (a == "drag") this.positionAbs = this._convertPositionTo("absolute"); return d.Widget.prototype._trigger.call(this, a, b, c) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs} }
   }); d.extend(d.ui.draggable, { version: "1.8.7" });
   d.ui.plugin.add("draggable", "connectToSortable", { start: function (a, b) { var c = d(this).data("draggable"), f = c.options, e = d.extend({}, b, { item: c.element }); c.sortables = []; d(f.connectToSortable).each(function () { var g = d.data(this, "sortable"); if (g && !g.options.disabled) { c.sortables.push({ instance: g, shouldRevert: g.options.revert }); g._refreshItems(); g._trigger("activate", a, e) } }) }, stop: function (a, b) {
      var c = d(this).data("draggable"), f = d.extend({}, b, { item: c.element }); d.each(c.sortables, function () {
         if (this.instance.isOver) {
            this.instance.isOver =
0; c.cancelHelperRemoval = true; this.instance.cancelHelperRemoval = false; if (this.shouldRevert) this.instance.options.revert = true; this.instance._mouseStop(a); this.instance.options.helper = this.instance.options._helper; c.options.helper == "original" && this.instance.currentItem.css({ top: "auto", left: "auto" })
         } else { this.instance.cancelHelperRemoval = false; this.instance._trigger("deactivate", a, f) }
      })
   }, drag: function (a, b) {
      var c = d(this).data("draggable"), f = this; d.each(c.sortables, function () {
         this.instance.positionAbs =
c.positionAbs; this.instance.helperProportions = c.helperProportions; this.instance.offset.click = c.offset.click; if (this.instance._intersectsWith(this.instance.containerCache)) {
            if (!this.instance.isOver) {
               this.instance.isOver = 1; this.instance.currentItem = d(f).clone().appendTo(this.instance.element).data("sortable-item", true); this.instance.options._helper = this.instance.options.helper; this.instance.options.helper = function () { return b.helper[0] }; a.target = this.instance.currentItem[0]; this.instance._mouseCapture(a,
true); this.instance._mouseStart(a, true, true); this.instance.offset.click.top = c.offset.click.top; this.instance.offset.click.left = c.offset.click.left; this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left; this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top; c._trigger("toSortable", a); c.dropped = this.instance.element; c.currentItem = c.element; this.instance.fromOutside = c
            } this.instance.currentItem && this.instance._mouseDrag(a)
         } else if (this.instance.isOver) {
            this.instance.isOver =
0; this.instance.cancelHelperRemoval = true; this.instance.options.revert = false; this.instance._trigger("out", a, this.instance._uiHash(this.instance)); this.instance._mouseStop(a, true); this.instance.options.helper = this.instance.options._helper; this.instance.currentItem.remove(); this.instance.placeholder && this.instance.placeholder.remove(); c._trigger("fromSortable", a); c.dropped = false
         }
      })
   }
   }); d.ui.plugin.add("draggable", "cursor", { start: function () {
      var a = d("body"), b = d(this).data("draggable").options; if (a.css("cursor")) b._cursor =
a.css("cursor"); a.css("cursor", b.cursor)
   }, stop: function () { var a = d(this).data("draggable").options; a._cursor && d("body").css("cursor", a._cursor) }
   }); d.ui.plugin.add("draggable", "iframeFix", { start: function () { var a = d(this).data("draggable").options; d(a.iframeFix === true ? "iframe" : a.iframeFix).each(function () { d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1E3 }).css(d(this).offset()).appendTo("body") }) },
      stop: function () { d("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }) }
   }); d.ui.plugin.add("draggable", "opacity", { start: function (a, b) { a = d(b.helper); b = d(this).data("draggable").options; if (a.css("opacity")) b._opacity = a.css("opacity"); a.css("opacity", b.opacity) }, stop: function (a, b) { a = d(this).data("draggable").options; a._opacity && d(b.helper).css("opacity", a._opacity) } }); d.ui.plugin.add("draggable", "scroll", { start: function () {
      var a = d(this).data("draggable"); if (a.scrollParent[0] !=
document && a.scrollParent[0].tagName != "HTML") a.overflowOffset = a.scrollParent.offset()
   }, drag: function (a) {
      var b = d(this).data("draggable"), c = b.options, f = false; if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
         if (!c.axis || c.axis != "x") if (b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed; else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity) b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop -
c.scrollSpeed; if (!c.axis || c.axis != "y") if (b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed; else if (a.pageX - b.overflowOffset.left < c.scrollSensitivity) b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed
      } else {
         if (!c.axis || c.axis != "x") if (a.pageY - d(document).scrollTop() < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed); else if (d(window).height() -
(a.pageY - d(document).scrollTop()) < c.scrollSensitivity) f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed); if (!c.axis || c.axis != "y") if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() - c.scrollSpeed); else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < c.scrollSensitivity) f = d(document).scrollLeft(d(document).scrollLeft() + c.scrollSpeed)
      } f !== false && d.ui.ddmanager && !c.dropBehaviour && d.ui.ddmanager.prepareOffsets(b, a)
   }
   }); d.ui.plugin.add("draggable",
"snap", { start: function () { var a = d(this).data("draggable"), b = a.options; a.snapElements = []; d(b.snap.constructor != String ? b.snap.items || ":data(draggable)" : b.snap).each(function () { var c = d(this), f = c.offset(); this != a.element[0] && a.snapElements.push({ item: this, width: c.outerWidth(), height: c.outerHeight(), top: f.top, left: f.left }) }) }, drag: function (a, b) {
   for (var c = d(this).data("draggable"), f = c.options, e = f.snapTolerance, g = b.offset.left, n = g + c.helperProportions.width, m = b.offset.top, o = m + c.helperProportions.height, h =
c.snapElements.length - 1; h >= 0; h--) {
      var i = c.snapElements[h].left, k = i + c.snapElements[h].width, j = c.snapElements[h].top, l = j + c.snapElements[h].height; if (i - e < g && g < k + e && j - e < m && m < l + e || i - e < g && g < k + e && j - e < o && o < l + e || i - e < n && n < k + e && j - e < m && m < l + e || i - e < n && n < k + e && j - e < o && o < l + e) {
         if (f.snapMode != "inner") {
            var p = Math.abs(j - o) <= e, q = Math.abs(l - m) <= e, r = Math.abs(i - n) <= e, s = Math.abs(k - g) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: j - c.helperProportions.height, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative",
{ top: l, left: 0 }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: i - c.helperProportions.width }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: k }).left - c.margins.left
         } var t = p || q || r || s; if (f.snapMode != "outer") {
            p = Math.abs(j - m) <= e; q = Math.abs(l - o) <= e; r = Math.abs(i - g) <= e; s = Math.abs(k - n) <= e; if (p) b.position.top = c._convertPositionTo("relative", { top: j, left: 0 }).top - c.margins.top; if (q) b.position.top = c._convertPositionTo("relative", { top: l - c.helperProportions.height,
               left: 0
            }).top - c.margins.top; if (r) b.position.left = c._convertPositionTo("relative", { top: 0, left: i }).left - c.margins.left; if (s) b.position.left = c._convertPositionTo("relative", { top: 0, left: k - c.helperProportions.width }).left - c.margins.left
         } if (!c.snapElements[h].snapping && (p || q || r || s || t)) c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })); c.snapElements[h].snapping = p || q || r || s || t
      } else {
         c.snapElements[h].snapping && c.options.snap.release && c.options.snap.release.call(c.element,
a, d.extend(c._uiHash(), { snapItem: c.snapElements[h].item })); c.snapElements[h].snapping = false
      }
   }
}
}); d.ui.plugin.add("draggable", "stack", { start: function () { var a = d(this).data("draggable").options; a = d.makeArray(d(a.stack)).sort(function (c, f) { return (parseInt(d(c).css("zIndex"), 10) || 0) - (parseInt(d(f).css("zIndex"), 10) || 0) }); if (a.length) { var b = parseInt(a[0].style.zIndex) || 0; d(a).each(function (c) { this.style.zIndex = b + c }); this[0].style.zIndex = b + a.length } } }); d.ui.plugin.add("draggable", "zIndex", { start: function (a,
b) { a = d(b.helper); b = d(this).data("draggable").options; if (a.css("zIndex")) b._zIndex = a.css("zIndex"); a.css("zIndex", b.zIndex) }, stop: function (a, b) { a = d(this).data("draggable").options; a._zIndex && d(b.helper).css("zIndex", a._zIndex) }
})
})(jQuery);
; /*
 * jQuery UI Dialog 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function (c, j) {
   var k = { buttons: true, height: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, width: true }, l = { maxHeight: true, maxWidth: true, minHeight: true, minWidth: true }; c.widget("ui.dialog", { options: { autoOpen: true, buttons: {}, closeOnEscape: true, closeText: "close", dialogClass: "", draggable: true, hide: null, height: "auto", maxHeight: false, maxWidth: false, minHeight: 150, minWidth: 150, modal: false, position: { my: "center", at: "center", collision: "fit", using: function (a) {
      var b = c(this).css(a).offset().top; b < 0 &&
c(this).css("top", a.top - b)
   }
   }, resizable: true, show: null, stack: true, title: "", width: 300, zIndex: 1E3
   }, _create: function () {
      this.originalTitle = this.element.attr("title"); if (typeof this.originalTitle !== "string") this.originalTitle = ""; this.options.title = this.options.title || this.originalTitle; var a = this, b = a.options, d = b.title || "&#160;", e = c.ui.dialog.getTitleId(a.element), g = (a.uiDialog = c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css({ zIndex: b.zIndex }).attr("tabIndex",
-1).css("outline", 0).keydown(function (i) { if (b.closeOnEscape && i.keyCode && i.keyCode === c.ui.keyCode.ESCAPE) { a.close(i); i.preventDefault() } }).attr({ role: "dialog", "aria-labelledby": e }).mousedown(function (i) { a.moveToTop(false, i) }); a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g); var f = (a.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g), h = c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function () { h.addClass("ui-state-hover") }, function () { h.removeClass("ui-state-hover") }).focus(function () { h.addClass("ui-state-focus") }).blur(function () { h.removeClass("ui-state-focus") }).click(function (i) { a.close(i); return false }).appendTo(f); (a.uiDialogTitlebarCloseText = c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h); c("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(f); if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose)) b.beforeClose =
b.beforeclose; f.find("*").add(f).disableSelection(); b.draggable && c.fn.draggable && a._makeDraggable(); b.resizable && c.fn.resizable && a._makeResizable(); a._createButtons(b.buttons); a._isOpen = false; c.fn.bgiframe && g.bgiframe()
   }, _init: function () { this.options.autoOpen && this.open() }, destroy: function () {
      var a = this; a.overlay && a.overlay.destroy(); a.uiDialog.hide(); a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"); a.uiDialog.remove(); a.originalTitle &&
a.element.attr("title", a.originalTitle); return a
   }, widget: function () { return this.uiDialog }, close: function (a) {
      var b = this, d, e; if (false !== b._trigger("beforeClose", a)) {
         b.overlay && b.overlay.destroy(); b.uiDialog.unbind("keypress.ui-dialog"); b._isOpen = false; if (b.options.hide) b.uiDialog.hide(b.options.hide, function () { b._trigger("close", a) }); else { b.uiDialog.hide(); b._trigger("close", a) } c.ui.dialog.overlay.resize(); if (b.options.modal) {
            d = 0; c(".ui-dialog").each(function () {
               if (this !== b.uiDialog[0]) {
                  e = c(this).css("z-index");
                  isNaN(e) || (d = Math.max(d, e))
               }
            }); c.ui.dialog.maxZ = d
         } return b
      }
   }, isOpen: function () { return this._isOpen }, moveToTop: function (a, b) {
      var d = this, e = d.options; if (e.modal && !a || !e.stack && !e.modal) return d._trigger("focus", b); if (e.zIndex > c.ui.dialog.maxZ) c.ui.dialog.maxZ = e.zIndex; if (d.overlay) { c.ui.dialog.maxZ += 1; d.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ) } a = { scrollTop: d.element.attr("scrollTop"), scrollLeft: d.element.attr("scrollLeft") }; c.ui.dialog.maxZ += 1; d.uiDialog.css("z-index", c.ui.dialog.maxZ);
      d.element.attr(a); d._trigger("focus", b); return d
   }, open: function () {
      if (!this._isOpen) {
         var a = this, b = a.options, d = a.uiDialog; a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null; a._size(); a._position(b.position); d.show(b.show); a.moveToTop(true); b.modal && d.bind("keypress.ui-dialog", function (e) { if (e.keyCode === c.ui.keyCode.TAB) { var g = c(":tabbable", this), f = g.filter(":first"); g = g.filter(":last"); if (e.target === g[0] && !e.shiftKey) { f.focus(1); return false } else if (e.target === f[0] && e.shiftKey) { g.focus(1); return false } } });
         c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus(); a._isOpen = true; a._trigger("open"); return a
      }
   }, _createButtons: function (a) {
      var b = this, d = false, e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), g = c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e); b.uiDialog.find(".ui-dialog-buttonpane").remove(); typeof a === "object" && a !== null && c.each(a, function () { return !(d = true) }); if (d) {
         c.each(a, function (f,
h) { h = c.isFunction(h) ? { click: h, text: f} : h; f = c('<button type="button"></button>').attr(h, true).unbind("click").click(function () { h.click.apply(b.element[0], arguments) }).appendTo(g); c.fn.button && f.button() }); e.appendTo(b.uiDialog)
      }
   }, _makeDraggable: function () {
      function a(f) { return { position: f.position, offset: f.offset} } var b = this, d = b.options, e = c(document), g; b.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (f, h) {
         g =
d.height === "auto" ? "auto" : c(this).height(); c(this).height(c(this).height()).addClass("ui-dialog-dragging"); b._trigger("dragStart", f, a(h))
      }, drag: function (f, h) { b._trigger("drag", f, a(h)) }, stop: function (f, h) { d.position = [h.position.left - e.scrollLeft(), h.position.top - e.scrollTop()]; c(this).removeClass("ui-dialog-dragging").height(g); b._trigger("dragStop", f, a(h)); c.ui.dialog.overlay.resize() }
      })
   }, _makeResizable: function (a) {
      function b(f) {
         return { originalPosition: f.originalPosition, originalSize: f.originalSize,
            position: f.position, size: f.size
         }
      } a = a === j ? this.options.resizable : a; var d = this, e = d.options, g = d.uiDialog.css("position"); a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw"; d.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: d.element, maxWidth: e.maxWidth, maxHeight: e.maxHeight, minWidth: e.minWidth, minHeight: d._minHeight(), handles: a, start: function (f, h) { c(this).addClass("ui-dialog-resizing"); d._trigger("resizeStart", f, b(h)) }, resize: function (f, h) { d._trigger("resize", f, b(h)) }, stop: function (f,
h) { c(this).removeClass("ui-dialog-resizing"); e.height = c(this).height(); e.width = c(this).width(); d._trigger("resizeStop", f, b(h)); c.ui.dialog.overlay.resize() }
      }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
   }, _minHeight: function () { var a = this.options; return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height) }, _position: function (a) {
      var b = [], d = [0, 0], e; if (a) {
         if (typeof a === "string" || typeof a === "object" && "0" in a) {
            b = a.split ? a.split(" ") : [a[0], a[1]]; if (b.length ===
1) b[1] = b[0]; c.each(["left", "top"], function (g, f) { if (+b[g] === b[g]) { d[g] = b[g]; b[g] = f } }); a = { my: b.join(" "), at: b.join(" "), offset: d.join(" ") }
         } a = c.extend({}, c.ui.dialog.prototype.options.position, a)
      } else a = c.ui.dialog.prototype.options.position; (e = this.uiDialog.is(":visible")) || this.uiDialog.show(); this.uiDialog.css({ top: 0, left: 0 }).position(c.extend({ of: window }, a)); e || this.uiDialog.hide()
   }, _setOptions: function (a) {
      var b = this, d = {}, e = false; c.each(a, function (g, f) {
         b._setOption(g, f); if (g in k) e = true; if (g in
l) d[g] = f
      }); e && this._size(); this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", d)
   }, _setOption: function (a, b) {
      var d = this, e = d.uiDialog; switch (a) {
         case "beforeclose": a = "beforeClose"; break; case "buttons": d._createButtons(b); break; case "closeText": d.uiDialogTitlebarCloseText.text("" + b); break; case "dialogClass": e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b); break; case "disabled": b ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
            break; case "draggable": var g = e.is(":data(draggable)"); g && !b && e.draggable("destroy"); !g && b && d._makeDraggable(); break; case "position": d._position(b); break; case "resizable": (g = e.is(":data(resizable)")) && !b && e.resizable("destroy"); g && typeof b === "string" && e.resizable("option", "handles", b); !g && b !== false && d._makeResizable(b); break; case "title": c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;")); break
      } c.Widget.prototype._setOption.apply(d, arguments)
   }, _size: function () {
      var a = this.options, b, d, e =
this.uiDialog.is(":visible"); this.element.show().css({ width: "auto", minHeight: 0, height: 0 }); if (a.minWidth > a.width) a.width = a.minWidth; b = this.uiDialog.css({ height: "auto", width: a.width }).height(); d = Math.max(0, a.minHeight - b); if (a.height === "auto") if (c.support.minHeight) this.element.css({ minHeight: d, height: "auto" }); else { this.uiDialog.show(); a = this.element.css("height", "auto").height(); e || this.uiDialog.hide(); this.element.height(Math.max(a, d)) } else this.element.height(Math.max(a.height - b, 0)); this.uiDialog.is(":data(resizable)") &&
this.uiDialog.resizable("option", "minHeight", this._minHeight())
   }
   }); c.extend(c.ui.dialog, { version: "1.8.7", uuid: 0, maxZ: 0, getTitleId: function (a) { a = a.attr("id"); if (!a) { this.uuid += 1; a = this.uuid } return "ui-dialog-title-" + a }, overlay: function (a) { this.$el = c.ui.dialog.overlay.create(a) } }); c.extend(c.ui.dialog.overlay, { instances: [], oldInstances: [], maxZ: 0, events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) { return a + ".dialog-overlay" }).join(" "), create: function (a) {
      if (this.instances.length ===
0) { setTimeout(function () { c.ui.dialog.overlay.instances.length && c(document).bind(c.ui.dialog.overlay.events, function (d) { if (c(d.target).zIndex() < c.ui.dialog.overlay.maxZ) return false }) }, 1); c(document).bind("keydown.dialog-overlay", function (d) { if (a.options.closeOnEscape && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE) { a.close(d); d.preventDefault() } }); c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize) } var b = (this.oldInstances.pop() || c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({ width: this.width(),
   height: this.height()
}); c.fn.bgiframe && b.bgiframe(); this.instances.push(b); return b
   }, destroy: function (a) { var b = c.inArray(a, this.instances); b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]); this.instances.length === 0 && c([document, window]).unbind(".dialog-overlay"); a.remove(); var d = 0; c.each(this.instances, function () { d = Math.max(d, this.css("z-index")) }); this.maxZ = d }, height: function () {
      var a, b; if (c.browser.msie && c.browser.version < 7) {
         a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
         b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight); return a < b ? c(window).height() + "px" : a + "px"
      } else return c(document).height() + "px"
   }, width: function () { var a, b; if (c.browser.msie && c.browser.version < 7) { a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth); b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth); return a < b ? c(window).width() + "px" : a + "px" } else return c(document).width() + "px" }, resize: function () {
      var a = c([]); c.each(c.ui.dialog.overlay.instances,
function () { a = a.add(this) }); a.css({ width: 0, height: 0 }).css({ width: c.ui.dialog.overlay.width(), height: c.ui.dialog.overlay.height() })
   }
   }); c.extend(c.ui.dialog.overlay.prototype, { destroy: function () { c.ui.dialog.overlay.destroy(this.$el) } })
})(jQuery);
; /*
 * jQuery UI Tabs 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (d, p) {
   function u() { return ++v } function w() { return ++x } var v = 0, x = 0; d.widget("ui.tabs", { options: { add: null, ajaxOptions: null, cache: false, cookie: null, collapsible: false, disable: null, disabled: [], enable: null, event: "click", fx: null, idPrefix: "ui-tabs-", load: null, panelTemplate: "<div></div>", remove: null, select: null, show: null, spinner: "<em>Loading&#8230;</em>", tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>" }, _create: function () { this._tabify(true) }, _setOption: function (b, e) {
      if (b == "selected") this.options.collapsible &&
e == this.options.selected || this.select(e); else { this.options[b] = e; this._tabify() }
   }, _tabId: function (b) { return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u() }, _sanitizeSelector: function (b) { return b.replace(/:/g, "\\:") }, _cookie: function () { var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + w()); return d.cookie.apply(null, [b].concat(d.makeArray(arguments))) }, _ui: function (b, e) { return { tab: b, panel: e, index: this.anchors.index(b)} }, _cleanup: function () {
      this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
         var b =
d(this); b.html(b.data("label.tabs")).removeData("label.tabs")
      })
   }, _tabify: function (b) {
      function e(g, f) { g.css("display", ""); !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter") } var a = this, c = this.options, h = /^#.+/; this.list = this.element.find("ol,ul").eq(0); this.lis = d(" > li:has(a[href])", this.list); this.anchors = this.lis.map(function () { return d("a", this)[0] }); this.panels = d([]); this.anchors.each(function (g, f) {
         var i = d(f).attr("href"), l = i.split("#")[0], q; if (l && (l === location.toString().split("#")[0] ||
(q = d("base")[0]) && l === q.href)) { i = f.hash; f.href = i } if (h.test(i)) a.panels = a.panels.add(a.element.find(a._sanitizeSelector(i))); else if (i && i !== "#") { d.data(f, "href.tabs", i); d.data(f, "load.tabs", i.replace(/#.*$/, "")); i = a._tabId(f); f.href = "#" + i; f = a.element.find("#" + i); if (!f.length) { f = d(c.panelTemplate).attr("id", i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g - 1] || a.list); f.data("destroy.tabs", true) } a.panels = a.panels.add(f) } else c.disabled.push(g)
      }); if (b) {
         this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
         this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.lis.addClass("ui-state-default ui-corner-top"); this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom"); if (c.selected === p) {
            location.hash && this.anchors.each(function (g, f) { if (f.hash == location.hash) { c.selected = g; return false } }); if (typeof c.selected !== "number" && c.cookie) c.selected = parseInt(a._cookie(), 10); if (typeof c.selected !== "number" && this.lis.filter(".ui-tabs-selected").length) c.selected =
this.lis.index(this.lis.filter(".ui-tabs-selected")); c.selected = c.selected || (this.lis.length ? 0 : -1)
         } else if (c.selected === null) c.selected = -1; c.selected = c.selected >= 0 && this.anchors[c.selected] || c.selected < 0 ? c.selected : 0; c.disabled = d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function (g) { return a.lis.index(g) }))).sort(); d.inArray(c.selected, c.disabled) != -1 && c.disabled.splice(d.inArray(c.selected, c.disabled), 1); this.panels.addClass("ui-tabs-hide"); this.lis.removeClass("ui-tabs-selected ui-state-active");
         if (c.selected >= 0 && this.anchors.length) { a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide"); this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active"); a.element.queue("tabs", function () { a._trigger("show", null, a._ui(a.anchors[c.selected], a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)))) }); this.load(c.selected) } d(window).bind("unload", function () { a.lis.add(a.anchors).unbind(".tabs"); a.lis = a.anchors = a.panels = null })
      } else c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
      this.element[c.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible"); c.cookie && this._cookie(c.selected, c.cookie); b = 0; for (var j; j = this.lis[b]; b++) d(j)[d.inArray(b, c.disabled) != -1 && !d(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled"); c.cache === false && this.anchors.removeData("cache.tabs"); this.lis.add(this.anchors).unbind(".tabs"); if (c.event !== "mouseover") {
         var k = function (g, f) { f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g) }, n = function (g, f) {
            f.removeClass("ui-state-" +
g)
         }; this.lis.bind("mouseover.tabs", function () { k("hover", d(this)) }); this.lis.bind("mouseout.tabs", function () { n("hover", d(this)) }); this.anchors.bind("focus.tabs", function () { k("focus", d(this).closest("li")) }); this.anchors.bind("blur.tabs", function () { n("focus", d(this).closest("li")) })
      } var m, o; if (c.fx) if (d.isArray(c.fx)) { m = c.fx[0]; o = c.fx[1] } else m = o = c.fx; var r = o ? function (g, f) {
         d(g).closest("li").addClass("ui-tabs-selected ui-state-active"); f.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal",
function () { e(f, o); a._trigger("show", null, a._ui(g, f[0])) })
      } : function (g, f) { d(g).closest("li").addClass("ui-tabs-selected ui-state-active"); f.removeClass("ui-tabs-hide"); a._trigger("show", null, a._ui(g, f[0])) }, s = m ? function (g, f) { f.animate(m, m.duration || "normal", function () { a.lis.removeClass("ui-tabs-selected ui-state-active"); f.addClass("ui-tabs-hide"); e(f, m); a.element.dequeue("tabs") }) } : function (g, f) { a.lis.removeClass("ui-tabs-selected ui-state-active"); f.addClass("ui-tabs-hide"); a.element.dequeue("tabs") };
      this.anchors.bind(c.event + ".tabs", function () {
         var g = this, f = d(g).closest("li"), i = a.panels.filter(":not(.ui-tabs-hide)"), l = a.element.find(a._sanitizeSelector(g.hash)); if (f.hasClass("ui-tabs-selected") && !c.collapsible || f.hasClass("ui-state-disabled") || f.hasClass("ui-state-processing") || a.panels.filter(":animated").length || a._trigger("select", null, a._ui(this, l[0])) === false) { this.blur(); return false } c.selected = a.anchors.index(this); a.abort(); if (c.collapsible) if (f.hasClass("ui-tabs-selected")) {
            c.selected =
-1; c.cookie && a._cookie(c.selected, c.cookie); a.element.queue("tabs", function () { s(g, i) }).dequeue("tabs"); this.blur(); return false
         } else if (!i.length) { c.cookie && a._cookie(c.selected, c.cookie); a.element.queue("tabs", function () { r(g, l) }); a.load(a.anchors.index(this)); this.blur(); return false } c.cookie && a._cookie(c.selected, c.cookie); if (l.length) { i.length && a.element.queue("tabs", function () { s(g, i) }); a.element.queue("tabs", function () { r(g, l) }); a.load(a.anchors.index(this)) } else throw "jQuery UI Tabs: Mismatching fragment identifier.";
         d.browser.msie && this.blur()
      }); this.anchors.bind("click.tabs", function () { return false })
   }, _getIndex: function (b) { if (typeof b == "string") b = this.anchors.index(this.anchors.filter("[href$=" + b + "]")); return b }, destroy: function () {
      var b = this.options; this.abort(); this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs"); this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"); this.anchors.each(function () {
         var e =
d.data(this, "href.tabs"); if (e) this.href = e; var a = d(this).unbind(".tabs"); d.each(["href", "load", "cache"], function (c, h) { a.removeData(h + ".tabs") })
      }); this.lis.unbind(".tabs").add(this.panels).each(function () { d.data(this, "destroy.tabs") ? d(this).remove() : d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide") }); b.cookie && this._cookie(null, b.cookie); return this
   }, add: function (b,
e, a) {
      if (a === p) a = this.anchors.length; var c = this, h = this.options; e = d(h.tabTemplate.replace(/#\{href\}/g, b).replace(/#\{label\}/g, e)); b = !b.indexOf("#") ? b.replace("#", "") : this._tabId(d("a", e)[0]); e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true); var j = c.element.find("#" + b); j.length || (j = d(h.panelTemplate).attr("id", b).data("destroy.tabs", true)); j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide"); if (a >= this.lis.length) { e.appendTo(this.list); j.appendTo(this.list[0].parentNode) } else {
         e.insertBefore(this.lis[a]);
         j.insertBefore(this.panels[a])
      } h.disabled = d.map(h.disabled, function (k) { return k >= a ? ++k : k }); this._tabify(); if (this.anchors.length == 1) { h.selected = 0; e.addClass("ui-tabs-selected ui-state-active"); j.removeClass("ui-tabs-hide"); this.element.queue("tabs", function () { c._trigger("show", null, c._ui(c.anchors[0], c.panels[0])) }); this.load(0) } this._trigger("add", null, this._ui(this.anchors[a], this.panels[a])); return this
   }, remove: function (b) {
      b = this._getIndex(b); var e = this.options, a = this.lis.eq(b).remove(), c = this.panels.eq(b).remove();
      if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1) this.select(b + (b + 1 < this.anchors.length ? 1 : -1)); e.disabled = d.map(d.grep(e.disabled, function (h) { return h != b }), function (h) { return h >= b ? --h : h }); this._tabify(); this._trigger("remove", null, this._ui(a.find("a")[0], c[0])); return this
   }, enable: function (b) {
      b = this._getIndex(b); var e = this.options; if (d.inArray(b, e.disabled) != -1) {
         this.lis.eq(b).removeClass("ui-state-disabled"); e.disabled = d.grep(e.disabled, function (a) { return a != b }); this._trigger("enable", null,
this._ui(this.anchors[b], this.panels[b])); return this
      }
   }, disable: function (b) { b = this._getIndex(b); var e = this.options; if (b != e.selected) { this.lis.eq(b).addClass("ui-state-disabled"); e.disabled.push(b); e.disabled.sort(); this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b])) } return this }, select: function (b) { b = this._getIndex(b); if (b == -1) if (this.options.collapsible && this.options.selected != -1) b = this.options.selected; else return this; this.anchors.eq(b).trigger(this.options.event + ".tabs"); return this },
      load: function (b) {
         b = this._getIndex(b); var e = this, a = this.options, c = this.anchors.eq(b)[0], h = d.data(c, "load.tabs"); this.abort(); if (!h || this.element.queue("tabs").length !== 0 && d.data(c, "cache.tabs")) this.element.dequeue("tabs"); else {
            this.lis.eq(b).addClass("ui-state-processing"); if (a.spinner) { var j = d("span", c); j.data("label.tabs", j.html()).html(a.spinner) } this.xhr = d.ajax(d.extend({}, a.ajaxOptions, { url: h, success: function (k, n) {
               e.element.find(e._sanitizeSelector(c.hash)).html(k); e._cleanup(); a.cache && d.data(c,
"cache.tabs", true); e._trigger("load", null, e._ui(e.anchors[b], e.panels[b])); try { a.ajaxOptions.success(k, n) } catch (m) { }
            }, error: function (k, n) { e._cleanup(); e._trigger("load", null, e._ui(e.anchors[b], e.panels[b])); try { a.ajaxOptions.error(k, n, b, c) } catch (m) { } }
            })); e.element.dequeue("tabs"); return this
         }
      }, abort: function () { this.element.queue([]); this.panels.stop(false, true); this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2)); if (this.xhr) { this.xhr.abort(); delete this.xhr } this._cleanup(); return this },
      url: function (b, e) { this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", e); return this }, length: function () { return this.anchors.length }
   }); d.extend(d.ui.tabs, { version: "1.8.7" }); d.extend(d.ui.tabs.prototype, { rotation: null, rotate: function (b, e) {
      var a = this, c = this.options, h = a._rotate || (a._rotate = function (j) { clearTimeout(a.rotation); a.rotation = setTimeout(function () { var k = c.selected; a.select(++k < a.anchors.length ? k : 0) }, b); j && j.stopPropagation() }); e = a._unrotate || (a._unrotate = !e ? function (j) {
         j.clientX &&
a.rotate(null)
      } : function () { t = c.selected; h() }); if (b) { this.element.bind("tabsshow", h); this.anchors.bind(c.event + ".tabs", e); h() } else { clearTimeout(a.rotation); this.element.unbind("tabsshow", h); this.anchors.unbind(c.event + ".tabs", e); delete this._rotate; delete this._unrotate } return this
   }
   })
})(jQuery);
; /*
 * jQuery UI Datepicker 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function (d, G) {
   function K() {
      this.debug = false; this._curInst = null; this._keyEvent = false; this._disabledInputs = []; this._inDialog = this._datepickerShowing = false; this._mainDivId = "ui-datepicker-div"; this._inlineClass = "ui-datepicker-inline"; this._appendClass = "ui-datepicker-append"; this._triggerClass = "ui-datepicker-trigger"; this._dialogClass = "ui-datepicker-dialog"; this._disableClass = "ui-datepicker-disabled"; this._unselectableClass = "ui-datepicker-unselectable"; this._currentClass = "ui-datepicker-current-day"; this._dayOverClass =
"ui-datepicker-days-cell-over"; this.regional = []; this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su",
"Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: false, showMonthAfterYear: false, yearSuffix: ""
}; this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: false, hideIfNoPrevNext: false, navigationAsDateFormat: false, gotoCurrent: false, changeMonth: false, changeYear: false, yearRange: "c-10:c+10", showOtherMonths: false, selectOtherMonths: false, showWeek: false, calculateWeek: this.iso8601Week, shortYearCutoff: "+10",
   minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: true, showButtonPanel: false, autoSize: false
}; d.extend(this._defaults, this.regional[""]); this.dpDiv = d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')
   } function E(a, b) {
      d.extend(a, b); for (var c in b) if (b[c] ==
null || b[c] == G) a[c] = b[c]; return a
   } d.extend(d.ui, { datepicker: { version: "1.8.7"} }); var y = (new Date).getTime(); d.extend(K.prototype, { markerClassName: "hasDatepicker", log: function () { this.debug && console.log.apply("", arguments) }, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (a) { E(this._defaults, a || {}); return this }, _attachDatepicker: function (a, b) {
      var c = null; for (var e in this._defaults) { var f = a.getAttribute("date:" + e); if (f) { c = c || {}; try { c[e] = eval(f) } catch (h) { c[e] = f } } } e = a.nodeName.toLowerCase();
      f = e == "div" || e == "span"; if (!a.id) { this.uuid += 1; a.id = "dp" + this.uuid } var i = this._newInst(d(a), f); i.settings = d.extend({}, b || {}, c || {}); if (e == "input") this._connectDatepicker(a, i); else f && this._inlineDatepicker(a, i)
   }, _newInst: function (a, b) { return { id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"), input: a, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: b, dpDiv: !b ? this.dpDiv : d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')} },
      _connectDatepicker: function (a, b) { var c = d(a); b.append = d([]); b.trigger = d([]); if (!c.hasClass(this.markerClassName)) { this._attachments(c, b); c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, f, h) { b.settings[f] = h }).bind("getData.datepicker", function (e, f) { return this._get(b, f) }); this._autoSize(b); d.data(a, "datepicker", b) } }, _attachments: function (a, b) {
         var c = this._get(b, "appendText"), e = this._get(b, "isRTL"); b.append &&
b.append.remove(); if (c) { b.append = d('<span class="' + this._appendClass + '">' + c + "</span>"); a[e ? "before" : "after"](b.append) } a.unbind("focus", this._showDatepicker); b.trigger && b.trigger.remove(); c = this._get(b, "showOn"); if (c == "focus" || c == "both") a.focus(this._showDatepicker); if (c == "button" || c == "both") {
            c = this._get(b, "buttonText"); var f = this._get(b, "buttonImage"); b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({ src: f, alt: c, title: c }) : d('<button type="button"></button>').addClass(this._triggerClass).html(f ==
"" ? c : d("<img/>").attr({ src: f, alt: c, title: c }))); a[e ? "before" : "after"](b.trigger); b.trigger.click(function () { d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]); return false })
         }
      }, _autoSize: function (a) {
         if (this._get(a, "autoSize") && !a.inline) {
            var b = new Date(2009, 11, 20), c = this._get(a, "dateFormat"); if (c.match(/[DM]/)) {
               var e = function (f) { for (var h = 0, i = 0, g = 0; g < f.length; g++) if (f[g].length > h) { h = f[g].length; i = g } return i }; b.setMonth(e(this._get(a,
c.match(/MM/) ? "monthNames" : "monthNamesShort"))); b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
            } a.input.attr("size", this._formatDate(a, b).length)
         }
      }, _inlineDatepicker: function (a, b) {
         var c = d(a); if (!c.hasClass(this.markerClassName)) {
            c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (e, f, h) { b.settings[f] = h }).bind("getData.datepicker", function (e, f) { return this._get(b, f) }); d.data(a, "datepicker", b); this._setDate(b, this._getDefaultDate(b),
true); this._updateDatepicker(b); this._updateAlternate(b); b.dpDiv.show()
         }
      }, _dialogDatepicker: function (a, b, c, e, f) {
         a = this._dialogInst; if (!a) { this.uuid += 1; this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>'); this._dialogInput.keydown(this._doKeyDown); d("body").append(this._dialogInput); a = this._dialogInst = this._newInst(this._dialogInput, false); a.settings = {}; d.data(this._dialogInput[0], "datepicker", a) } E(a.settings, e || {});
         b = b && b.constructor == Date ? this._formatDate(a, b) : b; this._dialogInput.val(b); this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null; if (!this._pos) this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)]; this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"); a.settings.onSelect = c; this._inDialog = true; this.dpDiv.addClass(this._dialogClass);
         this._showDatepicker(this._dialogInput[0]); d.blockUI && d.blockUI(this.dpDiv); d.data(this._dialogInput[0], "datepicker", a); return this
      }, _destroyDatepicker: function (a) {
         var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase(); d.removeData(a, "datepicker"); if (e == "input") {
               c.append.remove(); c.trigger.remove(); b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
this._doKeyUp)
            } else if (e == "div" || e == "span") b.removeClass(this.markerClassName).empty()
         }
      }, _enableDatepicker: function (a) {
         var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase(); if (e == "input") { a.disabled = false; c.trigger.filter("button").each(function () { this.disabled = false }).end().filter("img").css({ opacity: "1.0", cursor: "" }) } else if (e == "div" || e == "span") b.children("." + this._inlineClass).children().removeClass("ui-state-disabled"); this._disabledInputs = d.map(this._disabledInputs,
function (f) { return f == a ? null : f })
         }
      }, _disableDatepicker: function (a) {
         var b = d(a), c = d.data(a, "datepicker"); if (b.hasClass(this.markerClassName)) {
            var e = a.nodeName.toLowerCase(); if (e == "input") { a.disabled = true; c.trigger.filter("button").each(function () { this.disabled = true }).end().filter("img").css({ opacity: "0.5", cursor: "default" }) } else if (e == "div" || e == "span") b.children("." + this._inlineClass).children().addClass("ui-state-disabled"); this._disabledInputs = d.map(this._disabledInputs, function (f) {
               return f == a ? null :
f
            }); this._disabledInputs[this._disabledInputs.length] = a
         }
      }, _isDisabledDatepicker: function (a) { if (!a) return false; for (var b = 0; b < this._disabledInputs.length; b++) if (this._disabledInputs[b] == a) return true; return false }, _getInst: function (a) { try { return d.data(a, "datepicker") } catch (b) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function (a, b, c) {
         var e = this._getInst(a); if (arguments.length == 2 && typeof b == "string") return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({},
e.settings) : this._get(e, b) : null; var f = b || {}; if (typeof b == "string") { f = {}; f[b] = c } if (e) { this._curInst == e && this._hideDatepicker(); var h = this._getDateDatepicker(a, true); E(e.settings, f); this._attachments(d(a), e); this._autoSize(e); this._setDateDatepicker(a, h); this._updateDatepicker(e) }
      }, _changeDatepicker: function (a, b, c) { this._optionDatepicker(a, b, c) }, _refreshDatepicker: function (a) { (a = this._getInst(a)) && this._updateDatepicker(a) }, _setDateDatepicker: function (a, b) {
         if (a = this._getInst(a)) {
            this._setDate(a, b);
            this._updateDatepicker(a); this._updateAlternate(a)
         }
      }, _getDateDatepicker: function (a, b) { (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b); return a ? this._getDate(a) : null }, _doKeyDown: function (a) {
         var b = d.datepicker._getInst(a.target), c = true, e = b.dpDiv.is(".ui-datepicker-rtl"); b._keyEvent = true; if (d.datepicker._datepickerShowing) switch (a.keyCode) {
            case 9: d.datepicker._hideDatepicker(); c = false; break; case 13: c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv); c[0] ?
d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]) : d.datepicker._hideDatepicker(); return false; case 27: d.datepicker._hideDatepicker(); break; case 33: d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M"); break; case 34: d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M"); break; case 35: if (a.ctrlKey || a.metaKey) d.datepicker._clearDate(a.target); c = a.ctrlKey ||
a.metaKey; break; case 36: if (a.ctrlKey || a.metaKey) d.datepicker._gotoToday(a.target); c = a.ctrlKey || a.metaKey; break; case 37: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, e ? +1 : -1, "D"); c = a.ctrlKey || a.metaKey; if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M"); break; case 38: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, -7, "D"); c = a.ctrlKey || a.metaKey; break; case 39: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target,
e ? -1 : +1, "D"); c = a.ctrlKey || a.metaKey; if (a.originalEvent.altKey) d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M"); break; case 40: if (a.ctrlKey || a.metaKey) d.datepicker._adjustDate(a.target, +7, "D"); c = a.ctrlKey || a.metaKey; break; default: c = false
         } else if (a.keyCode == 36 && a.ctrlKey) d.datepicker._showDatepicker(this); else c = false; if (c) { a.preventDefault(); a.stopPropagation() }
      }, _doKeyPress: function (a) {
         var b = d.datepicker._getInst(a.target); if (d.datepicker._get(b,
"constrainInput")) { b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat")); var c = String.fromCharCode(a.charCode == G ? a.keyCode : a.charCode); return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1 }
      }, _doKeyUp: function (a) { a = d.datepicker._getInst(a.target); if (a.input.val() != a.lastVal) try { if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) { d.datepicker._setDateFromField(a); d.datepicker._updateAlternate(a); d.datepicker._updateDatepicker(a) } } catch (b) { d.datepicker.log(b) } return true },
      _showDatepicker: function (a) {
         a = a.target || a; if (a.nodeName.toLowerCase() != "input") a = d("input", a.parentNode)[0]; if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
            var b = d.datepicker._getInst(a); d.datepicker._curInst && d.datepicker._curInst != b && d.datepicker._curInst.dpDiv.stop(true, true); var c = d.datepicker._get(b, "beforeShow"); E(b.settings, c ? c.apply(a, [a, b]) : {}); b.lastVal = null; d.datepicker._lastInput = a; d.datepicker._setDateFromField(b); if (d.datepicker._inDialog) a.value = ""; if (!d.datepicker._pos) {
               d.datepicker._pos =
d.datepicker._findPos(a); d.datepicker._pos[1] += a.offsetHeight
            } var e = false; d(a).parents().each(function () { e |= d(this).css("position") == "fixed"; return !e }); if (e && d.browser.opera) { d.datepicker._pos[0] -= document.documentElement.scrollLeft; d.datepicker._pos[1] -= document.documentElement.scrollTop } c = { left: d.datepicker._pos[0], top: d.datepicker._pos[1] }; d.datepicker._pos = null; b.dpDiv.empty(); b.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }); d.datepicker._updateDatepicker(b); c = d.datepicker._checkOffset(b,
c, e); b.dpDiv.css({ position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute", display: "none", left: c.left + "px", top: c.top + "px" }); if (!b.inline) {
               c = d.datepicker._get(b, "showAnim"); var f = d.datepicker._get(b, "duration"), h = function () { d.datepicker._datepickerShowing = true; var i = b.dpDiv.find("iframe.ui-datepicker-cover"); if (i.length) { var g = d.datepicker._getBorders(b.dpDiv); i.css({ left: -g[0], top: -g[1], width: b.dpDiv.outerWidth(), height: b.dpDiv.outerHeight() }) } }; b.dpDiv.zIndex(d(a).zIndex() + 1); d.effects &&
d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h); if (!c || !f) h(); b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus(); d.datepicker._curInst = b
            }
         }
      }, _updateDatepicker: function (a) {
         var b = this, c = d.datepicker._getBorders(a.dpDiv); a.dpDiv.empty().append(this._generateHTML(a)); var e = a.dpDiv.find("iframe.ui-datepicker-cover"); e.length && e.css({ left: -c[0], top: -c[1], width: a.dpDiv.outerWidth(), height: a.dpDiv.outerHeight() }); a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",
function () { d(this).removeClass("ui-state-hover"); this.className.indexOf("ui-datepicker-prev") != -1 && d(this).removeClass("ui-datepicker-prev-hover"); this.className.indexOf("ui-datepicker-next") != -1 && d(this).removeClass("ui-datepicker-next-hover") }).bind("mouseover", function () {
   if (!b._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0])) {
      d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"); d(this).addClass("ui-state-hover"); this.className.indexOf("ui-datepicker-prev") !=
-1 && d(this).addClass("ui-datepicker-prev-hover"); this.className.indexOf("ui-datepicker-next") != -1 && d(this).addClass("ui-datepicker-next-hover")
   }
}).end().find("." + this._dayOverClass + " a").trigger("mouseover").end(); c = this._getNumberOfMonths(a); e = c[1]; e > 1 ? a.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", 17 * e + "em") : a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); a.dpDiv[(c[0] != 1 || c[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"); a.dpDiv[(this._get(a,
"isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input.focus(); if (a.yearshtml) { var f = a.yearshtml; setTimeout(function () { f === a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml); f = a.yearshtml = null }, 0) }
      }, _getBorders: function (a) { var b = function (c) { return { thin: 1, medium: 2, thick: 3}[c] || c }; return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))] },
      _checkOffset: function (a, b, c) {
         var e = a.dpDiv.outerWidth(), f = a.dpDiv.outerHeight(), h = a.input ? a.input.outerWidth() : 0, i = a.input ? a.input.outerHeight() : 0, g = document.documentElement.clientWidth + d(document).scrollLeft(), j = document.documentElement.clientHeight + d(document).scrollTop(); b.left -= this._get(a, "isRTL") ? e - h : 0; b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0; b.top -= c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0; b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e -
g) : 0); b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0); return b
      }, _findPos: function (a) { for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1); ) a = a[b ? "previousSibling" : "nextSibling"]; a = d(a).offset(); return [a.left, a.top] }, _hideDatepicker: function (a) {
         var b = this._curInst; if (!(!b || a && b != d.data(a, "datepicker"))) if (this._datepickerShowing) {
            a = this._get(b, "showAnim"); var c = this._get(b, "duration"), e = function () { d.datepicker._tidyDialog(b); this._curInst = null }; d.effects && d.effects[a] ?
b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e); a || e(); if (a = this._get(b, "onClose")) a.apply(b.input ? b.input[0] : null, [b.input ? b.input.val() : "", b]); this._datepickerShowing = false; this._lastInput = null; if (this._inDialog) { this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }); if (d.blockUI) { d.unblockUI(); d("body").append(this.dpDiv) } } this._inDialog = false
         }
      }, _tidyDialog: function (a) { a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
      _checkExternalClick: function (a) { if (d.datepicker._curInst) { a = d(a.target); a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker() } }, _adjustDate: function (a, b, c) {
         a = d(a); var e = this._getInst(a[0]); if (!this._isDisabledDatepicker(a[0])) {
            this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") :
0), c); this._updateDatepicker(e)
         }
      }, _gotoToday: function (a) { a = d(a); var b = this._getInst(a[0]); if (this._get(b, "gotoCurrent") && b.currentDay) { b.selectedDay = b.currentDay; b.drawMonth = b.selectedMonth = b.currentMonth; b.drawYear = b.selectedYear = b.currentYear } else { var c = new Date; b.selectedDay = c.getDate(); b.drawMonth = b.selectedMonth = c.getMonth(); b.drawYear = b.selectedYear = c.getFullYear() } this._notifyChange(b); this._adjustDate(a) }, _selectMonthYear: function (a, b, c) {
         a = d(a); var e = this._getInst(a[0]); e._selectingMonthYear =
false; e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10); this._notifyChange(e); this._adjustDate(a)
      }, _clickMonthYear: function (a) { var b = this._getInst(d(a)[0]); b.input && b._selectingMonthYear && setTimeout(function () { b.input.focus() }, 0); b._selectingMonthYear = !b._selectingMonthYear }, _selectDay: function (a, b, c, e) {
         var f = d(a); if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
            f = this._getInst(f[0]); f.selectedDay = f.currentDay =
d("a", e).html(); f.selectedMonth = f.currentMonth = b; f.selectedYear = f.currentYear = c; this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
         }
      }, _clearDate: function (a) { a = d(a); this._getInst(a[0]); this._selectDate(a, "") }, _selectDate: function (a, b) {
         a = this._getInst(d(a)[0]); b = b != null ? b : this._formatDate(a); a.input && a.input.val(b); this._updateAlternate(a); var c = this._get(a, "onSelect"); if (c) c.apply(a.input ? a.input[0] : null, [b, a]); else a.input && a.input.trigger("change"); if (a.inline) this._updateDatepicker(a);
         else { this._hideDatepicker(); this._lastInput = a.input[0]; typeof a.input[0] != "object" && a.input.focus(); this._lastInput = null }
      }, _updateAlternate: function (a) { var b = this._get(a, "altField"); if (b) { var c = this._get(a, "altFormat") || this._get(a, "dateFormat"), e = this._getDate(a), f = this.formatDate(c, e, this._getFormatConfig(a)); d(b).each(function () { d(this).val(f) }) } }, noWeekends: function (a) { a = a.getDay(); return [a > 0 && a < 6, ""] }, iso8601Week: function (a) {
         a = new Date(a.getTime()); a.setDate(a.getDate() + 4 - (a.getDay() || 7)); var b =
a.getTime(); a.setMonth(0); a.setDate(1); return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
      }, parseDate: function (a, b, c) {
         if (a == null || b == null) throw "Invalid arguments"; b = typeof b == "object" ? b.toString() : b + ""; if (b == "") return null; for (var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff, f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames,
j = c = -1, l = -1, u = -1, k = false, o = function (p) { (p = z + 1 < a.length && a.charAt(z + 1) == p) && z++; return p }, m = function (p) { var v = o(p); p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && v ? 4 : p == "o" ? 3 : 2) + "}"); p = b.substring(s).match(p); if (!p) throw "Missing number at position " + s; s += p[0].length; return parseInt(p[0], 10) }, n = function (p, v, H) { p = o(p) ? H : v; for (v = 0; v < p.length; v++) if (b.substr(s, p[v].length).toLowerCase() == p[v].toLowerCase()) { s += p[v].length; return v + 1 } throw "Unknown name at position " + s; }, r = function () {
   if (b.charAt(s) !=
a.charAt(z)) throw "Unexpected literal at position " + s; s++
}, s = 0, z = 0; z < a.length; z++) if (k) if (a.charAt(z) == "'" && !o("'")) k = false; else r(); else switch (a.charAt(z)) {
            case "d": l = m("d"); break; case "D": n("D", f, h); break; case "o": u = m("o"); break; case "m": j = m("m"); break; case "M": j = n("M", i, g); break; case "y": c = m("y"); break; case "@": var w = new Date(m("@")); c = w.getFullYear(); j = w.getMonth() + 1; l = w.getDate(); break; case "!": w = new Date((m("!") - this._ticksTo1970) / 1E4); c = w.getFullYear(); j = w.getMonth() + 1; l = w.getDate(); break;
            case "'": if (o("'")) r(); else k = true; break; default: r()
         } if (c == -1) c = (new Date).getFullYear(); else if (c < 100) c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100); if (u > -1) { j = 1; l = u; do { e = this._getDaysInMonth(c, j - 1); if (l <= e) break; j++; l -= e } while (1) } w = this._daylightSavingAdjust(new Date(c, j - 1, l)); if (w.getFullYear() != c || w.getMonth() + 1 != j || w.getDate() != l) throw "Invalid date"; return w
      }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7, formatDate: function (a, b, c) {
         if (!b) return ""; var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, f = (c ? c.dayNames : null) || this._defaults.dayNames, h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort; c = (c ? c.monthNames : null) || this._defaults.monthNames; var i = function (o) {
            (o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
            return o
         }, g = function (o, m, n) { m = "" + m; if (i(o)) for (; m.length < n; ) m = "0" + m; return m }, j = function (o, m, n, r) { return i(o) ? r[m] : n[m] }, l = "", u = false; if (b) for (var k = 0; k < a.length; k++) if (u) if (a.charAt(k) == "'" && !i("'")) u = false; else l += a.charAt(k); else switch (a.charAt(k)) {
            case "d": l += g("d", b.getDate(), 2); break; case "D": l += j("D", b.getDay(), e, f); break; case "o": l += g("o", (b.getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5, 3); break; case "m": l += g("m", b.getMonth() + 1, 2); break; case "M": l += j("M", b.getMonth(), h, c); break;
            case "y": l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100; break; case "@": l += b.getTime(); break; case "!": l += b.getTime() * 1E4 + this._ticksTo1970; break; case "'": if (i("'")) l += "'"; else u = true; break; default: l += a.charAt(k)
         } return l
      }, _possibleChars: function (a) {
         for (var b = "", c = false, e = function (h) { (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++; return h }, f = 0; f < a.length; f++) if (c) if (a.charAt(f) == "'" && !e("'")) c = false; else b += a.charAt(f); else switch (a.charAt(f)) {
            case "d": case "m": case "y": case "@": b +=
"0123456789"; break; case "D": case "M": return null; case "'": if (e("'")) b += "'"; else c = true; break; default: b += a.charAt(f)
         } return b
      }, _get: function (a, b) { return a.settings[b] !== G ? a.settings[b] : this._defaults[b] }, _setDateFromField: function (a, b) {
         if (a.input.val() != a.lastVal) {
            var c = this._get(a, "dateFormat"), e = a.lastVal = a.input ? a.input.val() : null, f, h; f = h = this._getDefaultDate(a); var i = this._getFormatConfig(a); try { f = this.parseDate(c, e, i) || h } catch (g) { this.log(g); e = b ? "" : e } a.selectedDay = f.getDate(); a.drawMonth = a.selectedMonth =
f.getMonth(); a.drawYear = a.selectedYear = f.getFullYear(); a.currentDay = e ? f.getDate() : 0; a.currentMonth = e ? f.getMonth() : 0; a.currentYear = e ? f.getFullYear() : 0; this._adjustInstDate(a)
         }
      }, _getDefaultDate: function (a) { return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date)) }, _determineDate: function (a, b, c) {
         var e = function (h) { var i = new Date; i.setDate(i.getDate() + h); return i }, f = function (h) {
            try { return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a)) } catch (i) { } var g =
(h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date, j = g.getFullYear(), l = g.getMonth(); g = g.getDate(); for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k; ) { switch (k[2] || "d") { case "d": case "D": g += parseInt(k[1], 10); break; case "w": case "W": g += parseInt(k[1], 10) * 7; break; case "m": case "M": l += parseInt(k[1], 10); g = Math.min(g, d.datepicker._getDaysInMonth(j, l)); break; case "y": case "Y": j += parseInt(k[1], 10); g = Math.min(g, d.datepicker._getDaysInMonth(j, l)); break } k = u.exec(h) } return new Date(j,
l, g)
         }; if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) { b.setHours(0); b.setMinutes(0); b.setSeconds(0); b.setMilliseconds(0) } return this._daylightSavingAdjust(b)
      }, _daylightSavingAdjust: function (a) { if (!a) return null; a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0); return a }, _setDate: function (a, b, c) {
         var e = !b, f = a.selectedMonth, h = a.selectedYear; b = this._restrictMinMax(a, this._determineDate(a, b, new Date)); a.selectedDay =
a.currentDay = b.getDate(); a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth(); a.drawYear = a.selectedYear = a.currentYear = b.getFullYear(); if ((f != a.selectedMonth || h != a.selectedYear) && !c) this._notifyChange(a); this._adjustInstDate(a); if (a.input) a.input.val(e ? "" : this._formatDate(a))
      }, _getDate: function (a) { return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)) }, _generateHTML: function (a) {
         var b = new Date; b = this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(), b.getDate())); var c = this._get(a, "isRTL"), e = this._get(a, "showButtonPanel"), f = this._get(a, "hideIfNoPrevNext"), h = this._get(a, "navigationAsDateFormat"), i = this._getNumberOfMonths(a), g = this._get(a, "showCurrentAtPos"), j = this._get(a, "stepMonths"), l = i[0] != 1 || i[1] != 1, u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay)), k = this._getMinMaxDate(a, "min"), o = this._getMinMaxDate(a, "max"); g = a.drawMonth - g; var m = a.drawYear; if (g < 0) { g += 12; m-- } if (o) {
            var n =
this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate())); for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m, g, 1)) > n; ) { g--; if (g < 0) { g = 11; m-- } }
         } a.drawMonth = g; a.drawYear = m; n = this._get(a, "prevText"); n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m, g - j, 1)), this._getFormatConfig(a)); n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' +
(c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>"; var r = this._get(a, "nextText"); r = !h ? r : this.formatDate(r, this._daylightSavingAdjust(new Date(m, g + j, 1)), this._getFormatConfig(a)); f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + r + '"><span class="ui-icon ui-icon-circle-triangle-' +
(c ? "w" : "e") + '">' + r + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + r + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + r + "</span></a>"; j = this._get(a, "currentText"); r = this._get(a, "gotoCurrent") && a.currentDay ? u : b; j = !h ? j : this.formatDate(j, r, this._getFormatConfig(a)); h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + y + '.datepicker._hideDatepicker();">' + this._get(a,
"closeText") + "</button>" : ""; e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, r) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + y + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : ""; h = parseInt(this._get(a, "firstDay"), 10); h = isNaN(h) ? 0 : h; j = this._get(a, "showWeek"); r = this._get(a, "dayNames"); this._get(a, "dayNamesShort"); var s = this._get(a, "dayNamesMin"), z =
this._get(a, "monthNames"), w = this._get(a, "monthNamesShort"), p = this._get(a, "beforeShowDay"), v = this._get(a, "showOtherMonths"), H = this._get(a, "selectOtherMonths"); this._get(a, "calculateWeek"); for (var L = this._getDefaultDate(a), I = "", C = 0; C < i[0]; C++) {
            for (var M = "", D = 0; D < i[1]; D++) {
               var N = this._daylightSavingAdjust(new Date(m, g, a.selectedDay)), t = " ui-corner-all", x = ""; if (l) {
                  x += '<div class="ui-datepicker-group'; if (i[1] > 1) switch (D) {
                     case 0: x += " ui-datepicker-group-first"; t = " ui-corner-" + (c ? "right" : "left"); break; case i[1] -
1: x += " ui-datepicker-group-last"; t = " ui-corner-" + (c ? "left" : "right"); break; default: x += " ui-datepicker-group-middle"; t = ""; break
                  } x += '">'
               } x += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && C == 0 ? c ? f : n : "") + (/all|right/.test(t) && C == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, C > 0 || D > 0, z, w) + '</div><table class="ui-datepicker-calendar"><thead><tr>'; var A = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : ""; for (t = 0; t < 7; t++) {
                  var q =
(t + h) % 7; A += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + r[q] + '">' + s[q] + "</span></th>"
               } x += A + "</tr></thead><tbody>"; A = this._getDaysInMonth(m, g); if (m == a.selectedYear && g == a.selectedMonth) a.selectedDay = Math.min(a.selectedDay, A); t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7; A = l ? 6 : Math.ceil((t + A) / 7); q = this._daylightSavingAdjust(new Date(m, g, 1 - t)); for (var O = 0; O < A; O++) {
                  x += "<tr>"; var P = !j ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(q) + "</td>"; for (t = 0; t < 7; t++) {
                     var F =
p ? p.apply(a.input ? a.input[0] : null, [q]) : [true, ""], B = q.getMonth() != g, J = B && !H || !F[0] || k && q < k || o && q > o; P += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (B ? " ui-datepicker-other-month" : "") + (q.getTime() == N.getTime() && g == a.selectedMonth && a._keyEvent || L.getTime() == q.getTime() && L.getTime() == N.getTime() ? " " + this._dayOverClass : "") + (J ? " " + this._unselectableClass + " ui-state-disabled" : "") + (B && !v ? "" : " " + F[1] + (q.getTime() == u.getTime() ? " " + this._currentClass : "") + (q.getTime() == b.getTime() ? " ui-datepicker-today" :
"")) + '"' + ((!B || v) && F[2] ? ' title="' + F[2] + '"' : "") + (J ? "" : ' onclick="DP_jQuery_' + y + ".datepicker._selectDay('#" + a.id + "'," + q.getMonth() + "," + q.getFullYear() + ', this);return false;"') + ">" + (B && !v ? "&#xa0;" : J ? '<span class="ui-state-default">' + q.getDate() + "</span>" : '<a class="ui-state-default' + (q.getTime() == b.getTime() ? " ui-state-highlight" : "") + (q.getTime() == u.getTime() ? " ui-state-active" : "") + (B ? " ui-priority-secondary" : "") + '" href="#">' + q.getDate() + "</a>") + "</td>"; q.setDate(q.getDate() + 1); q = this._daylightSavingAdjust(q)
                  } x +=
P + "</tr>"
               } g++; if (g > 11) { g = 0; m++ } x += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && D == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""); M += x
            } I += M
         } I += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""); a._keyEvent = false; return I
      }, _generateMonthYearHeader: function (a, b, c, e, f, h, i, g) {
         var j = this._get(a, "changeMonth"), l = this._get(a, "changeYear"), u = this._get(a, "showMonthAfterYear"), k = '<div class="ui-datepicker-title">',
o = ""; if (h || !j) o += '<span class="ui-datepicker-month">' + i[b] + "</span>"; else { i = e && e.getFullYear() == c; var m = f && f.getFullYear() == c; o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + a.id + "');\">"; for (var n = 0; n < 12; n++) if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth())) o += '<option value="' + n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>"; o += "</select>" } u || (k += o + (h || !(j &&
l) ? "&#xa0;" : "")); a.yearshtml = ""; if (h || !l) k += '<span class="ui-datepicker-year">' + c + "</span>"; else {
            g = this._get(a, "yearRange").split(":"); var r = (new Date).getFullYear(); i = function (s) { s = s.match(/c[+-].*/) ? c + parseInt(s.substring(1), 10) : s.match(/[+-].*/) ? r + parseInt(s, 10) : parseInt(s, 10); return isNaN(s) ? r : s }; b = i(g[0]); g = Math.max(b, i(g[1] || "")); b = e ? Math.max(b, e.getFullYear()) : b; g = f ? Math.min(g, f.getFullYear()) : g; for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + y + ".datepicker._selectMonthYear('#" +
a.id + "', this, 'Y');\" onclick=\"DP_jQuery_" + y + ".datepicker._clickMonthYear('#" + a.id + "');\">"; b <= g; b++) a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>"; a.yearshtml += "</select>"; if (d.browser.mozilla) k += '<select class="ui-datepicker-year"><option value="' + c + '" selected="selected">' + c + "</option></select>"; else { k += a.yearshtml; a.yearshtml = null }
         } k += this._get(a, "yearSuffix"); if (u) k += (h || !(j && l) ? "&#xa0;" : "") + o; k += "</div>"; return k
      }, _adjustInstDate: function (a, b, c) {
         var e =
a.drawYear + (c == "Y" ? b : 0), f = a.drawMonth + (c == "M" ? b : 0); b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0); e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b))); a.selectedDay = e.getDate(); a.drawMonth = a.selectedMonth = e.getMonth(); a.drawYear = a.selectedYear = e.getFullYear(); if (c == "M" || c == "Y") this._notifyChange(a)
      }, _restrictMinMax: function (a, b) { var c = this._getMinMaxDate(a, "min"); a = this._getMinMaxDate(a, "max"); b = c && b < c ? c : b; return b = a && b > a ? a : b }, _notifyChange: function (a) {
         var b = this._get(a,
"onChangeMonthYear"); if (b) b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
      }, _getNumberOfMonths: function (a) { a = this._get(a, "numberOfMonths"); return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a }, _getMinMaxDate: function (a, b) { return this._determineDate(a, this._get(a, b + "Date"), null) }, _getDaysInMonth: function (a, b) { return 32 - (new Date(a, b, 32)).getDate() }, _getFirstDayOfMonth: function (a, b) { return (new Date(a, b, 1)).getDay() }, _canAdjustMonth: function (a, b, c, e) {
         var f = this._getNumberOfMonths(a);
         c = this._daylightSavingAdjust(new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1)); b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth())); return this._isInRange(a, c)
      }, _isInRange: function (a, b) { var c = this._getMinMaxDate(a, "min"); a = this._getMinMaxDate(a, "max"); return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime()) }, _getFormatConfig: function (a) {
         var b = this._get(a, "shortYearCutoff"); b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10); return { shortYearCutoff: b, dayNamesShort: this._get(a,
"dayNamesShort"), dayNames: this._get(a, "dayNames"), monthNamesShort: this._get(a, "monthNamesShort"), monthNames: this._get(a, "monthNames")
         }
      }, _formatDate: function (a, b, c, e) { if (!b) { a.currentDay = a.selectedDay; a.currentMonth = a.selectedMonth; a.currentYear = a.selectedYear } b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay)); return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a)) }
   }); d.fn.datepicker =
function (a) {
   if (!d.datepicker.initialized) { d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv); d.datepicker.initialized = true } var b = Array.prototype.slice.call(arguments, 1); if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget")) return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b)); if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string") return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
   return this.each(function () { typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a) })
}; d.datepicker = new K; d.datepicker.initialized = false; d.datepicker.uuid = (new Date).getTime(); d.datepicker.version = "1.8.7"; window["DP_jQuery_" + y] = d
})(jQuery);
; /*
 * jQuery UI Progressbar 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function (b, d) {
   b.widget("ui.progressbar", { options: { value: 0, max: 100 }, min: 0, _create: function () { this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value() }); this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element); this.oldValue = this._value(); this._refreshValue() }, destroy: function () {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.valueDiv.remove(); b.Widget.prototype.destroy.apply(this, arguments)
   }, value: function (a) { if (a === d) return this._value(); this._setOption("value", a); return this }, _setOption: function (a, c) { if (a === "value") { this.options.value = c; this._refreshValue(); this._value() === this.options.max && this._trigger("complete") } b.Widget.prototype._setOption.apply(this, arguments) }, _value: function () { var a = this.options.value; if (typeof a !== "number") a = 0; return Math.min(this.options.max, Math.max(this.min, a)) }, _percentage: function () {
      return 100 *
this._value() / this.options.max
   }, _refreshValue: function () { var a = this.value(), c = this._percentage(); if (this.oldValue !== a) { this.oldValue = a; this._trigger("change") } this.valueDiv.toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%"); this.element.attr("aria-valuenow", a) }
   }); b.extend(b.ui.progressbar, { version: "1.8.7" })
})(jQuery);
; /*
 * jQuery UI Effects 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects || function (f, j) {
   function n(c) {
      var a; if (c && c.constructor == Array && c.length == 3) return c; if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c)) return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10)]; if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c)) return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55]; if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c)) return [parseInt(a[1],
16), parseInt(a[2], 16), parseInt(a[3], 16)]; if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c)) return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]; if (/rgba\(0, 0, 0, 0\)/.exec(c)) return o.transparent; return o[f.trim(c).toLowerCase()]
   } function s(c, a) { var b; do { b = f.curCSS(c, a); if (b != "" && b != "transparent" || f.nodeName(c, "body")) break; a = "backgroundColor" } while (c = c.parentNode); return n(b) } function p() {
      var c = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle,
a = {}, b, d; if (c && c.length && c[0] && c[c[0]]) for (var e = c.length; e--; ) { b = c[e]; if (typeof c[b] == "string") { d = b.replace(/\-(\w)/g, function (g, h) { return h.toUpperCase() }); a[d] = c[b] } } else for (b in c) if (typeof c[b] === "string") a[b] = c[b]; return a
   } function q(c) { var a, b; for (a in c) { b = c[a]; if (b == null || f.isFunction(b) || a in t || /scrollbar/.test(a) || !/color/i.test(a) && isNaN(parseFloat(b))) delete c[a] } return c } function u(c, a) { var b = { _: 0 }, d; for (d in a) if (c[d] != a[d]) b[d] = a[d]; return b } function k(c, a, b, d) {
      if (typeof c == "object") {
         d =
a; b = null; a = c; c = a.effect
      } if (f.isFunction(a)) { d = a; b = null; a = {} } if (typeof a == "number" || f.fx.speeds[a]) { d = b; b = a; a = {} } if (f.isFunction(b)) { d = b; b = null } a = a || {}; b = b || a.duration; b = f.fx.off ? 0 : typeof b == "number" ? b : b in f.fx.speeds ? f.fx.speeds[b] : f.fx.speeds._default; d = d || a.complete; return [c, a, b, d]
   } function m(c) { if (!c || typeof c === "number" || f.fx.speeds[c]) return true; if (typeof c === "string" && !f.effects[c]) return true; return false } f.effects = {}; f.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor",
"borderTopColor", "borderColor", "color", "outlineColor"], function (c, a) { f.fx.step[a] = function (b) { if (!b.colorInit) { b.start = s(b.elem, a); b.end = n(b.end); b.colorInit = true } b.elem.style[a] = "rgb(" + Math.max(Math.min(parseInt(b.pos * (b.end[0] - b.start[0]) + b.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[1] - b.start[1]) + b.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[2] - b.start[2]) + b.start[2], 10), 255), 0) + ")" } }); var o = { aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0,
0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211,
211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0], transparent: [255, 255, 255]
}, r = ["add", "remove", "toggle"], t = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; f.effects.animateClass = function (c, a, b,
d) {
   if (f.isFunction(b)) { d = b; b = null } return this.each(function () {
      f.queue(this, "fx", function () {
         var e = f(this), g = e.attr("style") || " ", h = q(p.call(this)), l, v = e.attr("className"); f.each(r, function (w, i) { c[i] && e[i + "Class"](c[i]) }); l = q(p.call(this)); e.attr("className", v); e.animate(u(h, l), a, b, function () { f.each(r, function (w, i) { c[i] && e[i + "Class"](c[i]) }); if (typeof e.attr("style") == "object") { e.attr("style").cssText = ""; e.attr("style").cssText = g } else e.attr("style", g); d && d.apply(this, arguments) }); h = f.queue(this); l =
h.splice(h.length - 1, 1)[0]; h.splice(1, 0, l); f.dequeue(this)
      })
   })
}; f.fn.extend({ _addClass: f.fn.addClass, addClass: function (c, a, b, d) { return a ? f.effects.animateClass.apply(this, [{ add: c }, a, b, d]) : this._addClass(c) }, _removeClass: f.fn.removeClass, removeClass: function (c, a, b, d) { return a ? f.effects.animateClass.apply(this, [{ remove: c }, a, b, d]) : this._removeClass(c) }, _toggleClass: f.fn.toggleClass, toggleClass: function (c, a, b, d, e) {
   return typeof a == "boolean" || a === j ? b ? f.effects.animateClass.apply(this, [a ? { add: c} : { remove: c },
b, d, e]) : this._toggleClass(c, a) : f.effects.animateClass.apply(this, [{ toggle: c }, a, b, d])
}, switchClass: function (c, a, b, d, e) { return f.effects.animateClass.apply(this, [{ add: a, remove: c }, b, d, e]) }
}); f.extend(f.effects, { version: "1.8.7", save: function (c, a) { for (var b = 0; b < a.length; b++) a[b] !== null && c.data("ec.storage." + a[b], c[0].style[a[b]]) }, restore: function (c, a) { for (var b = 0; b < a.length; b++) a[b] !== null && c.css(a[b], c.data("ec.storage." + a[b])) }, setMode: function (c, a) {
   if (a == "toggle") a = c.is(":hidden") ? "show" : "hide";
   return a
}, getBaseline: function (c, a) { var b; switch (c[0]) { case "top": b = 0; break; case "middle": b = 0.5; break; case "bottom": b = 1; break; default: b = c[0] / a.height } switch (c[1]) { case "left": c = 0; break; case "center": c = 0.5; break; case "right": c = 1; break; default: c = c[1] / a.width } return { x: c, y: b} }, createWrapper: function (c) {
   if (c.parent().is(".ui-effects-wrapper")) return c.parent(); var a = { width: c.outerWidth(true), height: c.outerHeight(true), "float": c.css("float") }, b = f("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%",
      background: "transparent", border: "none", margin: 0, padding: 0
   }); c.wrap(b); b = c.parent(); if (c.css("position") == "static") { b.css({ position: "relative" }); c.css({ position: "relative" }) } else { f.extend(a, { position: c.css("position"), zIndex: c.css("z-index") }); f.each(["top", "left", "bottom", "right"], function (d, e) { a[e] = c.css(e); if (isNaN(parseInt(a[e], 10))) a[e] = "auto" }); c.css({ position: "relative", top: 0, left: 0 }) } return b.css(a).show()
}, removeWrapper: function (c) {
   if (c.parent().is(".ui-effects-wrapper")) return c.parent().replaceWith(c);
   return c
}, setTransition: function (c, a, b, d) { d = d || {}; f.each(a, function (e, g) { unit = c.cssUnit(g); if (unit[0] > 0) d[g] = unit[0] * b + unit[1] }); return d }
}); f.fn.extend({ effect: function (c) { var a = k.apply(this, arguments), b = { options: a[1], duration: a[2], callback: a[3] }; a = b.options.mode; var d = f.effects[c]; if (f.fx.off || !d) return a ? this[a](b.duration, b.callback) : this.each(function () { b.callback && b.callback.call(this) }); return d.call(this, b) }, _show: f.fn.show, show: function (c) {
   if (m(c)) return this._show.apply(this, arguments);
   else { var a = k.apply(this, arguments); a[1].mode = "show"; return this.effect.apply(this, a) }
}, _hide: f.fn.hide, hide: function (c) { if (m(c)) return this._hide.apply(this, arguments); else { var a = k.apply(this, arguments); a[1].mode = "hide"; return this.effect.apply(this, a) } }, __toggle: f.fn.toggle, toggle: function (c) { if (m(c) || typeof c === "boolean" || f.isFunction(c)) return this.__toggle.apply(this, arguments); else { var a = k.apply(this, arguments); a[1].mode = "toggle"; return this.effect.apply(this, a) } }, cssUnit: function (c) {
   var a = this.css(c),
b = []; f.each(["em", "px", "%", "pt"], function (d, e) { if (a.indexOf(e) > 0) b = [parseFloat(a), e] }); return b
}
}); f.easing.jswing = f.easing.swing; f.extend(f.easing, { def: "easeOutQuad", swing: function (c, a, b, d, e) { return f.easing[f.easing.def](c, a, b, d, e) }, easeInQuad: function (c, a, b, d, e) { return d * (a /= e) * a + b }, easeOutQuad: function (c, a, b, d, e) { return -d * (a /= e) * (a - 2) + b }, easeInOutQuad: function (c, a, b, d, e) { if ((a /= e / 2) < 1) return d / 2 * a * a + b; return -d / 2 * (--a * (a - 2) - 1) + b }, easeInCubic: function (c, a, b, d, e) { return d * (a /= e) * a * a + b }, easeOutCubic: function (c,
a, b, d, e) { return d * ((a = a / e - 1) * a * a + 1) + b }, easeInOutCubic: function (c, a, b, d, e) { if ((a /= e / 2) < 1) return d / 2 * a * a * a + b; return d / 2 * ((a -= 2) * a * a + 2) + b }, easeInQuart: function (c, a, b, d, e) { return d * (a /= e) * a * a * a + b }, easeOutQuart: function (c, a, b, d, e) { return -d * ((a = a / e - 1) * a * a * a - 1) + b }, easeInOutQuart: function (c, a, b, d, e) { if ((a /= e / 2) < 1) return d / 2 * a * a * a * a + b; return -d / 2 * ((a -= 2) * a * a * a - 2) + b }, easeInQuint: function (c, a, b, d, e) { return d * (a /= e) * a * a * a * a + b }, easeOutQuint: function (c, a, b, d, e) { return d * ((a = a / e - 1) * a * a * a * a + 1) + b }, easeInOutQuint: function (c,
a, b, d, e) { if ((a /= e / 2) < 1) return d / 2 * a * a * a * a * a + b; return d / 2 * ((a -= 2) * a * a * a * a + 2) + b }, easeInSine: function (c, a, b, d, e) { return -d * Math.cos(a / e * (Math.PI / 2)) + d + b }, easeOutSine: function (c, a, b, d, e) { return d * Math.sin(a / e * (Math.PI / 2)) + b }, easeInOutSine: function (c, a, b, d, e) { return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + b }, easeInExpo: function (c, a, b, d, e) { return a == 0 ? b : d * Math.pow(2, 10 * (a / e - 1)) + b }, easeOutExpo: function (c, a, b, d, e) { return a == e ? b + d : d * (-Math.pow(2, -10 * a / e) + 1) + b }, easeInOutExpo: function (c, a, b, d, e) {
   if (a == 0) return b; if (a ==
e) return b + d; if ((a /= e / 2) < 1) return d / 2 * Math.pow(2, 10 * (a - 1)) + b; return d / 2 * (-Math.pow(2, -10 * --a) + 2) + b
}, easeInCirc: function (c, a, b, d, e) { return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + b }, easeOutCirc: function (c, a, b, d, e) { return d * Math.sqrt(1 - (a = a / e - 1) * a) + b }, easeInOutCirc: function (c, a, b, d, e) { if ((a /= e / 2) < 1) return -d / 2 * (Math.sqrt(1 - a * a) - 1) + b; return d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b }, easeInElastic: function (c, a, b, d, e) {
   c = 1.70158; var g = 0, h = d; if (a == 0) return b; if ((a /= e) == 1) return b + d; g || (g = e * 0.3); if (h < Math.abs(d)) { h = d; c = g / 4 } else c =
g / (2 * Math.PI) * Math.asin(d / h); return -(h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g)) + b
}, easeOutElastic: function (c, a, b, d, e) { c = 1.70158; var g = 0, h = d; if (a == 0) return b; if ((a /= e) == 1) return b + d; g || (g = e * 0.3); if (h < Math.abs(d)) { h = d; c = g / 4 } else c = g / (2 * Math.PI) * Math.asin(d / h); return h * Math.pow(2, -10 * a) * Math.sin((a * e - c) * 2 * Math.PI / g) + d + b }, easeInOutElastic: function (c, a, b, d, e) {
   c = 1.70158; var g = 0, h = d; if (a == 0) return b; if ((a /= e / 2) == 2) return b + d; g || (g = e * 0.3 * 1.5); if (h < Math.abs(d)) { h = d; c = g / 4 } else c = g / (2 * Math.PI) * Math.asin(d /
h); if (a < 1) return -0.5 * h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) + b; return h * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) * 0.5 + d + b
}, easeInBack: function (c, a, b, d, e, g) { if (g == j) g = 1.70158; return d * (a /= e) * a * ((g + 1) * a - g) + b }, easeOutBack: function (c, a, b, d, e, g) { if (g == j) g = 1.70158; return d * ((a = a / e - 1) * a * ((g + 1) * a + g) + 1) + b }, easeInOutBack: function (c, a, b, d, e, g) { if (g == j) g = 1.70158; if ((a /= e / 2) < 1) return d / 2 * a * a * (((g *= 1.525) + 1) * a - g) + b; return d / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + b }, easeInBounce: function (c,
a, b, d, e) { return d - f.easing.easeOutBounce(c, e - a, 0, d, e) + b }, easeOutBounce: function (c, a, b, d, e) { return (a /= e) < 1 / 2.75 ? d * 7.5625 * a * a + b : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b }, easeInOutBounce: function (c, a, b, d, e) { if (a < e / 2) return f.easing.easeInBounce(c, a * 2, 0, d, e) * 0.5 + b; return f.easing.easeOutBounce(c, a * 2 - e, 0, d, e) * 0.5 + d * 0.5 + b }
})
} (jQuery);
; /*
 * jQuery UI Effects Highlight 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (b) {
   b.effects.highlight = function (c) {
      return this.queue(function () {
         var a = b(this), e = ["backgroundImage", "backgroundColor", "opacity"], d = b.effects.setMode(a, c.options.mode || "show"), f = { backgroundColor: a.css("backgroundColor") }; if (d == "hide") f.opacity = 0; b.effects.save(a, e); a.show().css({ backgroundImage: "none", backgroundColor: c.options.color || "#ffff99" }).animate(f, { queue: false, duration: c.duration, easing: c.options.easing, complete: function () {
            d == "hide" && a.hide(); b.effects.restore(a, e); d == "show" && !b.support.opacity &&
this.style.removeAttribute("filter"); c.callback && c.callback.apply(this, arguments); a.dequeue()
         }
         })
      })
   }
})(jQuery);
; /*
 * jQuery UI Effects Slide 1.8.7
 *
 * Copyright 2010, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (c) {
   c.effects.slide = function (d) {
      return this.queue(function () {
         var a = c(this), h = ["position", "top", "left"], f = c.effects.setMode(a, d.options.mode || "show"), b = d.options.direction || "left"; c.effects.save(a, h); a.show(); c.effects.createWrapper(a).css({ overflow: "hidden" }); var g = b == "up" || b == "down" ? "top" : "left"; b = b == "up" || b == "left" ? "pos" : "neg"; var e = d.options.distance || (g == "top" ? a.outerHeight({ margin: true }) : a.outerWidth({ margin: true })); if (f == "show") a.css(g, b == "pos" ? isNaN(e) ? "-" + e : -e : e); var i = {}; i[g] = (f ==
"show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + e; a.animate(i, { queue: false, duration: d.duration, easing: d.options.easing, complete: function () { f == "hide" && a.hide(); c.effects.restore(a, h); c.effects.removeWrapper(a); d.callback && d.callback.apply(this, arguments); a.dequeue() } })
      })
   }
})(jQuery);
;
/*
TaxCloud Cert Stuff
*/

var certObj;

function tc_init(baseUrl) {
   ajaxLoad = true;
   certLink = 'xmptlink';
   certListUrl = baseUrl + 'tax/ajax/listExemptions';
   saveCertUrl = baseUrl + 'tax/ajax/addExemption';
   merchantNameForCert = 'Gleeful Peacock';
   certSelectUrl = baseUrl + 'tax/ajax/applyExemption';
   certRemoveUrl = baseUrl + 'tax/ajax/removeExemption';
   reloadWithSave = true;
   withConfirm = false;
   hiddenCertificateField = 'exempt_cert_id';
   if (ajaxLoad) {
   	load_jsonp_certs();
   } else {
   //	load_certs();
   }   
}

var tcsURL = "taxcloud.net";
var tcsProtocol = (("https:" == document.location.protocol) ? "https:" : "http:");

function prepCert() {
    var canBuildCert = false;
    if (typeof certLink != 'undefined') { canBuildCert = true; } else { canBuildCert = false; alert("TaxCloud Exemption Certificate script cannot find JavaScript variable \"certLink\"\nThis should be the ID of the element which a customer will click to provide exemption details.") }
    if (typeof certListUrl != 'undefined') { canBuildCert = true; } else { canBuildCert = false; alert("TaxCloud Exemption Certificate script cannot find JavaScript variable \"certListUrl\"\nThis should be the URL on your server that will invoke the TaxCloud GetExemptCertificates API.") }
    if (typeof saveCertUrl != 'undefined') { canBuildCert = true; } else { canBuildCert = false; alert("TaxCloud Exemption Certificate script cannot find JavaScript variable \"saveCertUrl\"\nThis should be the URL on your server that will invoke the TaxCloud AddExemptCertificate API.") }
    if (typeof merchantNameForCert != 'undefined') { canBuildCert = true; } else { canBuildCert = false; alert("TaxCloud Exemption Certificate script cannot find JavaScript variable \"merchantNameForCert\"\nThis should your merchant/business name as you would like it to be display on the TaxCloud Exempt Certificate UI.") }
    if (typeof certSelectUrl != 'undefined') { canBuildCert = true; } else { canBuildCert = false; alert("TaxCloud Exemption Certificate script cannot find JavaScript variable \"certSelectUrl\"\nThis should be the URL on your server that will set the selected certificate ID to recalculate the cart totals..") } 
    if (canBuildCert) {
        
        var tsCss = document.createElement('link');
        tsCss.type = 'text/css'; tsCss.rel = 'stylesheet';
        tsCss.href = tcsProtocol + '//'+tcsURL+'/imgs/jquery-ui-1.8.7.taxcloud.css';
        var tccsss = document.getElementsByTagName('script')[0];
        tccsss.parentNode.insertBefore(tsCss, tccsss);
        var mStyle = document.createElement("style");
        var def = ".navlink{color:#0099FF;cursor:pointer;}.navlink:hover{color:#FF9900}#jqxmptlist{font-family:verdana;font-size:small}#jqxmpt{background:#FBFBFB url(" + tcsProtocol + "//"+tcsURL+"/imgs/states/None.gif) no-repeat center;font-family:verdana;font-size:small;width:750;}.irs{border:0px solid #999999;border-bottom-width:thin;}.tinput{background-color:transparent;border:1px solid #999999;}.tinput:hover{background-color:#ffffff;}.err{color:red;}";
		//def += ".fields{color:#000000;position:absolute;z-index:100;text-align:center;font-family: Garamond, Times New Roman;font-size:14pt;cursor:default;border:0px solid red;}.labels{color:#000000;position:absolute;z-index:100;text-align:left;font-family: Garamond, Times New Roman;font-size:14pt;cursor:default;border:0px solid red;}#CertNumber{top: 40px;left: 333px;width: 316px;font-size:10pt;font-family: Verdana, Arial;color:red;text-align:right;}#PurchaserName{top: 201px;left: 406px;width: 216px;}#PurchaserAddress{top: 225px;left: 189px;width: 437px;}#ExemptionState{top: 294px;left: 214px;width: 242px;}#ExemptionReason{top: 316px;left: 177px;width: 483px;height: 48px;}#SPOrderNumber{top: 350px;left: 448px;width: 257px;}#ExemptionCertDate{top: 376px;left: 448px;width: 257px;}#IDType{top: 405px;left: 448px;width: 257px;}#taxidNumber{top: 434px;left: 448px;width: 256px;}#BusinessType{top: 463px;left: 447px;width: 269px;}#Seller{top: 493px;left: 447px;width: 269px;}";
	mStyle.setAttribute("type", "text/css");
        if ( mStyle.styleSheet ) {  // stupid IE
       		mStyle.styleSheet.cssText = def;
       	} else {	//real browsers
       		var myNode = document.createTextNode(def);
       		mStyle.appendChild(myNode);
       	}
        tccsss.parentNode.insertBefore(mStyle, tccsss);
        buildExemptCert();
        buildCertsList();
        buildDisplayCert();
    } else { alert('TaxCloud Exemption Certificate script failed to initialize.') }
}


function load_jsonp_certs() {
    //var url = TaxCloudTicUrl + "?format=jsonp"
    var url = certListUrl;
    //url += "&time=";
    //url += new Date().getTime().toString(); // prevent caching        
    var script = document.createElement("script");
    script.setAttribute("src", url);
    script.setAttribute("id", "certLister");
    script.setAttribute("type", "text/javascript");
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
}

function load_certs() {
	var certObject = new Object();
	certObject.cert_list = jQuery.parseJSON(certString);
	taxcloudCertificates(certObject);
}

function taxcloudCertificates(ptics) {
    var buildJQlink = '#' + certLink; jQuery(buildJQlink).unbind("click");
    certObj = ptics.cert_list
    if (certObj.length > 0) {
        jQuery(buildJQlink).click(function () { jQuery('#jqxmptlist').dialog('open'); });
    } else {
        jQuery(buildJQlink).click(function () { jQuery('#jqxmpt').dialog('open'); });
    }
    prepCert();
}

function useCert(which){	
    var hiddenField = "#" + hiddenCertificateField;		
    jQuery.post(certSelectUrl, {certificateID: which}, function (data) {	
	    jQuery(hiddenField).val(which);
	    jQuery('#jqxmptlist').dialog('close');
        if(window.accordion && window.payment) {
            // Stupid hack to avoid changing magento's js..works for now
            accordion.openPrevSection();
            payment.save();
        }
	    if(withConfirm){
		if(confirm("To update your order to recognize your selected certificate of exemption ("+which+") we will need to reload. Would you like to do that now?")){
		    window.location.reload();
		}
	    }
    });
}

function removeCert(which){	
    jQuery.post(certRemoveUrl, {certificateID: which}, function (data) {
        jQuery('#jqxmptlist').dialog('close');
        jQuery('#tcCertResult').html(data);
        jQuery('#jqxmptlist').empty();
        jQuery('#jqxmptlist').detach();
        if ( ajaxLoad ) {
    	    jQuery.getScript(certListUrl,function(){jQuery('#jqxmptlist').dialog('open');});
    	} else {
    	    // reload page to refresh cert list
    	     window.location.reload();
    	}
    });
}

function saveCert(which, exemptState, blanketPurchase, singlePurchaseOrderNumber, purchaserFirstName, purchaserLastName, purchaserAddress1, purchaserCity,
	purchaserState, purchaserZip, taxType, idNumber, purchaserBusinessType, purchaserExemptionReason, purchaserExemptionReasonValue ) {	

	var result = checkForm(which);	
	if (result) {	
		jQuery.post(saveCertUrl, {ExemptState: exemptState.attr('value'), 
				SinglePurchaseOrderNumber: singlePurchaseOrderNumber.attr('value'), 
				BlanketPurchase: blanketPurchase.attr('checked'),
				PurchaserFirstName: purchaserFirstName.attr('value'), 
				PurchaserLastName: purchaserLastName.attr('value'),
				PurchaserAddress1: purchaserAddress1.attr('value'),
				PurchaserCity: purchaserCity.attr('value'),
				PurchaserState: purchaserState.attr('value'),
				PurchaserZip: purchaserZip.attr('value'),
				TaxType: taxType.attr('value'),
				IDNumber: idNumber.attr('value'),
				StateOfIssue: exemptState.attr('value'),
				CountryOfIssue: 'US',
				PurchaserBusinessType: purchaserBusinessType.attr('value'),
				PurchaserExemptionReason: purchaserExemptionReason.attr('value'),
				PurchaserExemptionReasonValue: purchaserExemptionReasonValue.attr('value')
				});
	} else {
		return result;
	}
	
	if(!alert("Your exemption certificate has been saved and applied to the order.")){
		if (!reloadWithSave) {	
			jQuery('#jqxmptCert').dialog('close');
		} else {	
			window.location.reload();			
		}
	} 
	
}

function pretty(keyWord){
   switch(keyWord){case "AccommodationAndFoodServices":keyWord="Accommodation and Food Services";break;case "Agricultural_Forestry_Fishing_Hunting":keyWord="Agricultural/Forestry/Fishing/Hunting";break;case "Construction":break;case "FinanceAndInsurance":keyWord="Finance and Insurance";break;case "Information_PublishingAndCommunications":keyWord="Information Publishing and Communications";break;case "Manufacturing":break;case "Mining":break;case "RealEstate":keyWord="Real Estate";break;case "RentalAndLeasing":keyWord="Rental and Leasing";break;case "RetailTrade":keyWord="Retail Trade";break;case "TransportationAndWarehousing":keyWord="Transportation and Warehousing";break;case "Utilities":break;case "WholesaleTrade":keyWord="Wholesale Trade";break;case "BusinessServices":keyWord="Business Services";break;case "ProfessionalServices":keyWord="Professional Services";break;case "EducationAndHealthCareServices":keyWord="Education and Health Care Services";break;case "NonprofitOrganization":keyWord="Nonprofit Organization";break;case "Government":break;case "NotABusiness":keyWord="Not a Business";break;case "FederalGovernmentDepartment":keyWord="Federal Government Department";break;case "StateOrLocalGovernmentName":keyWord="State or Local Government";break;case "TribalGovernmentName":keyWord="Tribal Government";break;case "ForeignDiplomat":keyWord="Foreign Diplomat";break;case "CharitableOrganization":keyWord="Charitable Organization";break;case "ReligiousOrEducationalOrganization":keyWord="Religious or Educational Organization";break;case "Resale":break;case "AgriculturalProduction":keyWord="Agricultural Production";break;case "IndustrialProductionOrManufacturing":keyWord="Industrial Production or Manufacturing";break;case "DirectPayPermit":keyWord="Direct Pay Permit";break;case "DirectMail":keyWord="Direct Mail";break;case "Other":break;case "DirectMail":keyWord="Direct Mail";break;case "AL":keyWord="Alabama";break;case "AK":keyWord="Alaska";break;case "AZ":keyWord="Arizona";break;case "AR":keyWord="Arkansas";break;case "CA":keyWord = "California";break;case "CO":keyWord="Colorado";break;case "CT":keyWord="Connecticut";break;case "DE":keyWord="Delaware";break;case "FL":keyWord="Florida";break;case "GA":keyWord="Georgia";break;case "HI":keyWord="Hawaii";break;case "ID":keyWord="Idaho";break;case "IL":keyWord="Illinois";break;case "IN":keyWord="Indiana";break;case "IA":keyWord="Iowa";break;case "KS":keyWord="Kansas";break;case "KY":keyWord="Kentucky";break;case "LA":keyWord="Louisiana";break;case "ME":keyWord="Maine";break;case "MD":keyWord="Maryland";break;case "MA":keyWord="Massachusetts";break;case "MI":keyWord="Michigan";break;case "MN":keyWord="Minnesota";break;case "MS":keyWord="Mississippi";break;case "MO":keyWord="Missouri";break;case "MT":keyWord="Montana";break;case "NE":keyWord="Nebraska";break;case "NV":keyWord="Nevada";break;case "NH":keyWord="New Hampshire";break;case "NJ":keyWord="New Jersey";break;case "NM":keyWord="New Mexico";break;case "NY":keyWord="New York";break;case "NC":keyWord="North Carolina";break;case "ND":keyWord="North Dakota";break;case "OH":keyWord="Ohio";break;case "OK":keyWord="Oklahoma";break;case "OR":keyWord="Oregon";break;case "PA":keyWord="Pennsylvania";break;case "RI":keyWord="Rhode Island";break;case "SC":keyWord="South Carolina";break;case "SD":keyWord="South Dakota";break;case "TN":keyWord="Tennessee";break;case "TX":keyWord="Texas";break;case "UT":keyWord="Utah";break;case "VT":keyWord="Vermont";break;case "VA":keyWord="Virginia";break;case "WA":keyWord="Washington";break;case "DC":keyWord="Washington DC";break;case "WV":keyWord="West Virginia";break;case "WI":keyWord="Wisconsin";break;case "WY":keyWord="Wyoming";break;}
   return keyWord;
}

function certPopOpen(singleUse,certNumber,purchaserName,purchaserAddress,exemptionState,exemptionReason,exemptionCertDate,iDType,taxidNumber,businessType,sellerProp,certWatermark){
   //alert(+"0 "+singleUse+"\n1 "+certNumber+"\n2 "+purchaserName+"\n3 "+purchaserAddress+"\n4 "+exemptionState+"\n5 "+exemptionReason+"\n6 "+exemptionCertDate+"\n7 "+iDType+"\n8 "+taxidNumber+"\n9 "+businessType+"\n10 "+sellerProp+"\n11 "+certWatermark);
    jQuery('#jqxmptCert').removeAttr("title");
    jQuery('#jqxmptCert').attr("title","Exemption Certificate "+certNumber);
    jQuery('#ExemptionCertificate').removeAttr("title");;
    jQuery('#ExemptionCertificate').attr("title","Exemption Certificate "+certNumber+" : " + exemptionCertDate);
   
    if(singleUse==true){
        jQuery('#ExemptionCertificate').removeAttr("src");
        jQuery('#ExemptionCertificate').attr("src",tcsProtocol+"//"+tcsURL+"/imgs/cert/sp_exemption_certificate_750x600.png");
        jQuery("#SPOrderNumber").text(singleUse);
		jQuery("#SPOrderNumber").attr("title",singleUse);
    }else{
        jQuery('#ExemptionCertificate').removeAttr("src");
        jQuery('#ExemptionCertificate').attr("src",tcsProtocol+"//"+tcsURL+"/imgs/cert/exemption_certificate750x600.png");
        jQuery("#SPOrderNumber").text("");
		jQuery("#SPOrderNumber").attr("title","");
    }
    
    jQuery("#CertNumber").text(certNumber);
	jQuery("#CertNumber").attr("title",certNumber);
    jQuery("#PurchaserName").text(purchaserName);
	jQuery("#PurchaserName").attr("title",purchaserName);
    jQuery("#PurchaserAddress").text(purchaserAddress);
	jQuery("#PurchaserAddress").attr("title",purchaserAddress);
    if(exemptionState.length>36){
      jQuery("#ExemptionState").attr("style","font-size:small;top:301px;");
      jQuery("#ExemptionState").text(exemptionState.substring(0,36) + "[...]");
    }else if(exemptionState.length>18){
      jQuery("#ExemptionState").attr("style","font-size:small;top:301px;");
      jQuery("#ExemptionState").text(exemptionState);
    }else{
      jQuery("#ExemptionState").removeAttr("style");
      jQuery("#ExemptionState").text(exemptionState);
    }
    jQuery("#stateWatermark").removeAttr("style");
    jQuery("#stateWatermark").attr("style","display:inline;position:absolute;z-index:0;left:0;top:0px;width:730px;height:580px;filter:;opacity:0.6;background:transparent url('"+tcsProtocol+"//"+tcsURL+"/imgs/states/"+certWatermark+".gif') no-repeat center;");
	jQuery("#ExemptionState").attr("title",exemptionState);
    jQuery("#ExemptionReason").text(exemptionReason);
    jQuery("#ExemptionReason").attr("title",exemptionReason);
    jQuery("#ExemptionCertDate").text(exemptionCertDate);
    jQuery("#ExemptionCertDate").attr("title",exemptionCertDate);
    jQuery("#IDType").text(iDType);
    jQuery("#IDType").attr("title",iDType);
    jQuery("#taxidNumber").text(taxidNumber);
    jQuery("#taxidNumber").attr("title",taxidNumber);
    var tempBT = businessType;
    if(tempBT.length > 21){
        tempBT = tempBT.substring(0,21);
        tempBT += "..."
    }
    jQuery("#BusinessType").attr("title",businessType);
    jQuery("#BusinessType").text(tempBT);
    jQuery("#Seller").text(sellerProp);
    jQuery("#Seller").attr("title",sellerProp);

    jQuery('#jqxmptCert').dialog('open');
}



function buildDisplayCert() {
	var prettyCert = document.createElement('div');
	prettyCert.title = "Exemption Certificate";
	prettyCert.id = "jqxmptCert";
	prettyCert.setAttribute('style', 'display:none;');
	prettyCert.style.backgroundColor="#E8F5E2";
	var classKeyword = "class";
	var certStyle = document.createElement("style");
	certStyle.setAttribute("type", "text/css");
	var def = ".fields{color:#000000;position:absolute;z-index:100;text-align:center;font-family: Garamond, Times New Roman;font-size:14pt;cursor:default;border:0px solid red;}.labels{color:#000000;position:absolute;z-index:100;text-align:left;font-family: Garamond, Times New Roman;font-size:14pt;cursor:default;border:0px solid red;}#CertNumber{top: 40px;left: 333px;width: 316px;font-size:10pt;font-family: Verdana, Arial;color:red;text-align:right;}#PurchaserName{top: 201px;left: 406px;width: 216px;}#PurchaserAddress{top: 225px;left: 189px;width: 437px;}#ExemptionState{top: 294px;left: 214px;width: 242px;}#ExemptionReason{top: 316px;left: 177px;width: 483px;height: 48px;}#SPOrderNumber{top: 350px;left: 448px;width: 257px;}#ExemptionCertDate{top: 376px;left: 448px;width: 257px;}#IDType{top: 405px;left: 448px;width: 257px;}#taxidNumber{top: 434px;left: 448px;width: 256px;}#BusinessType{top: 463px;left: 447px;width: 269px;}#Seller{top: 493px;left: 447px;width: 269px;}";
	if ( certStyle.styleSheet ) {	//stupid IE
		if(jQuery.browser.msie){
			if(jQuery.browser.version>7){
			
			}else{
				classKeyword = "className"
			}
		}
		certStyle.styleSheet.cssText = def;
	} else {	//real browsers
		var myNode = document.createTextNode(def);
		certStyle.appendChild(myNode);
	}   
	prettyCert.appendChild(certStyle);
   
   var watermarkImg = document.createElement("div");
   watermarkImg.id = "stateWatermark";
   //watermarkImg.setAttribute("style","position:absolute;z-index:-50;top:0px;width:750px;height:600px;background:transparent url('') no-repeat;");
   //IE needs these one by one
   watermarkImg.style.position="absolute";
   watermarkImg.style.zIndex="-50";
   watermarkImg.style.top="0px";
   watermarkImg.style.width="750";
   watermarkImg.style.height="600";
   //watermarkImg.style.background="transparent url('') no-repeat;";
   watermarkImg.appendChild(document.createTextNode(" "));
   var certImg = document.createElement("img");
   certImg.id = "ExemptionCertificate";
   certImg.title = "Exemption Certificate XXXX";
   certImg.setAttribute("src", tcsProtocol+"//"+tcsURL+"/imgs/cert/exemption_certificate750x600.png");
   certImg.setAttribute("height", "600");
   certImg.setAttribute("width", "750");
   //certImg.setAttribute("style", "position:absolute;top:0px;left:0px;z-index:10;");
   //IE needs these one by one
	certImg.style.position="absolute";
	certImg.style.top=0;
	certImg.style.left=0;
	certImg.style.zIndex=10;
   prettyCert.appendChild(watermarkImg);
   prettyCert.appendChild(certImg);
   var certNumberProp = document.createElement("span");
   certNumberProp.id="CertNumber";
   //certNumberProp.setAttribute("class","fields");
   certNumberProp.setAttribute(classKeyword,"fields");
   var purchaserNameProp = document.createElement("span");
   purchaserNameProp.id="PurchaserName";
   purchaserNameProp.setAttribute(classKeyword,"fields");
   var purchaserAddressProp = document.createElement("span");
   purchaserAddressProp.id="PurchaserAddress";
   purchaserAddressProp.setAttribute(classKeyword,"fields");
   var exemptionStateProp = document.createElement("span");
   exemptionStateProp.id="ExemptionState";
   exemptionStateProp.setAttribute(classKeyword,"fields");
   var exemptionReasonProp = document.createElement("span");
   exemptionReasonProp.id="ExemptionReason";
   exemptionReasonProp.setAttribute(classKeyword,"fields");
   
   var spOrderNumProp = document.createElement("span");
   spOrderNumProp.id = "SPOrderNumber";
   spOrderNumProp.setAttribute(classKeyword,"labels");

   var exemptionCertDateProp = document.createElement("span");
   exemptionCertDateProp.id = "ExemptionCertDate";
   exemptionCertDateProp.setAttribute(classKeyword,"labels");
   var iDTypeProp = document.createElement("span");
   iDTypeProp.id="IDType";
   iDTypeProp.setAttribute(classKeyword,"labels");
   var iDNumberProp = document.createElement("span");
   iDNumberProp.id="taxidNumber";
   iDNumberProp.setAttribute(classKeyword,"labels");
   var businessTypeProp = document.createElement("span");
   businessTypeProp.id="BusinessType";
   businessTypeProp.setAttribute(classKeyword,"labels");
   var sellerProp = document.createElement("span");
   sellerProp.id="Seller";
   sellerProp.setAttribute(classKeyword,"labels");
   
   prettyCert.appendChild(certNumberProp);
   prettyCert.appendChild(purchaserNameProp);
   prettyCert.appendChild(purchaserAddressProp);
   prettyCert.appendChild(exemptionStateProp);
   prettyCert.appendChild(exemptionReasonProp);
   prettyCert.appendChild(spOrderNumProp);
   prettyCert.appendChild(exemptionCertDateProp);
   prettyCert.appendChild(iDTypeProp);
   prettyCert.appendChild(iDNumberProp);
   prettyCert.appendChild(businessTypeProp);
   prettyCert.appendChild(sellerProp);
   
   var t = document.getElementsByTagName('span')[0];
   t.parentNode.insertBefore(prettyCert, t);
   jQuery("#jqxmptCert").dialog({ autoOpen: false, width:750,height:645, modal: true});
}
function buildCertsList() {
    var list = document.createElement('div');
    list.title = "Select an Exemption Certificate or create a new one.";
    list.id = "jqxmptlist";
    list.setAttribute('style', 'display:none;');
    //var warnFieldset = document.createElement("fieldset");
    //var warnLegend = document.createElement("legend");
    //warnLegend.appendChild(document.createTextNode("Existing Certificates"));
    //warnFieldset.appendChild(warnLegend);
    
    var certsTable = document.createElement("table");
    //certsTable.setAttribute('style', 'width:100%;');
	certsTable.style.width="100%";
    //certsTable.setAttribute('border', '1');
    
    var certsTBody = document.createElement("tbody");
    var existingDescTr = document.createElement("tr");
    var existingDescTd = document.createElement("td");
    existingDescTd.setAttribute("colSpan", "2");//NOTE: IE is case sensative for this
    //moved below to get the cert count
    //var placeholder = document.createElement("strong").appendChild(document.createTextNode("You already have one or more Exemption Certificates on file with us. Please select an existing certificate, or create a new one."));
    //existingDescTd.appendChild(placeholder);
    existingDescTr.appendChild(existingDescTd);
    certsTBody.appendChild(existingDescTr);


    //new cert
        var certTr = document.createElement("tr");
        var certDiv = document.createElement("td");
        certDiv.setAttribute('valign', 'middle');
        certDiv.setAttribute('style', 'width:160px;');
        var certImage = document.createElement("img");
        certImage.title = "Create/register a new Exemption Certificate"
        certImage.setAttribute("src", tcsProtocol+"//"+tcsURL+"/imgs/cert/new_certificate150x120.png")
        certImage.setAttribute("style", "cursor:pointer;");
  //      certImage.setAttribute("onClick","jQuery('#jqxmptlist').dialog('close');jQuery('#jqxmpt').dialog('open');")
	//now for IE7
        certImage.onclick=function(){jQuery('#jqxmptlist').dialog('close');jQuery('#jqxmpt').dialog('open');};
        certImage.setAttribute("height", "120");
        certImage.setAttribute("width", "150");
        certImage.setAttribute("align", "left");
        certDiv.appendChild(certImage);
        certTr.appendChild(certDiv)
        var newTd = document.createElement("td");
        newTd.setAttribute('valign', 'middle');
        var newButton = document.createElement("input");
        newButton.setAttribute("type", "submit");
        newButton.setAttribute("class", "ui-state-default ui-priority-primary ui-corner-all");
		//stupid IE
        newButton.setAttribute("className", "ui-state-default ui-priority-primary ui-corner-all");
        newButton.setAttribute("style", "width:100%;cursor:pointer;");
        newButton.setAttribute("value", "Register a New Exemption Certificate");
        newButton.setAttribute("title", "Register a New Exemption Certificate");
 //       newButton.setAttribute("onClick","jQuery('#jqxmptlist').dialog('close');jQuery('#jqxmpt').dialog('open');")
	//now for IE7
        newButton.onclick=function(){jQuery('#jqxmptlist').dialog('close');jQuery('#jqxmpt').dialog('open')};//to get IE to run an onclick on a dynamically generated element, we can't use setAttribute. Instead, we need to set the onclick property on the object with an anonymous function wrapping the code we want to run

        newTd.appendChild(newButton);
        certTr.appendChild(newTd);
        certsTBody.appendChild(certTr);
    //end new cert
    
    var myCertCount = 0;
    jQuery.each(certObj, function (i, item) {
        myCertCount++;
       var certTr = document.createElement("tr");
       certTr.id="tr"+item.CertificateID;
       var certDiv = document.createElement("td");
       certDiv.setAttribute('valign', 'middle');
       certDiv.setAttribute('style', 'width:160px;');
       var certImage = document.createElement("img");
       certImage.title = "Use "
       if (item.ExemptionCertificateDetail.SinglePurchase == true) {
          certImage.setAttribute("src", tcsProtocol+"//"+tcsURL+"/imgs/cert/sp_exemption_certificate_150x120.png")
          certImage.title += "(re-issue) Single Purchase ";
       } else {
          certImage.setAttribute("src", tcsProtocol+"//"+tcsURL+"/imgs/cert/exemption_certificate150x120.png")
          certImage.title += "Blanket ";
       }
       certImage.title += "Exemption Certificate No. " + item.CertificateID;
       certImage.setAttribute("height", "120");
       certImage.setAttribute("width", "150");
       certImage.setAttribute("style", "cursor:pointer;");
       certDiv.appendChild(certImage);
       var detailsPanel = document.createElement("td");
       detailsPanel.setAttribute('valign', 'middle');
       detailsPanel.setAttribute('style', 'width:100%');
       detailsPanel.appendChild(document.createTextNode("Issued to: " + item.ExemptionCertificateDetail.PurchaserFirstName + " " + item.ExemptionCertificateDetail.PurchaserLastName));
       detailsPanel.appendChild(document.createElement("br"));
       var theCertStates = "";
	   var certWatermark = "";
       var exStates = document.createTextNode("Exempt State(s): ");
       for (i = 0; i < item.ExemptionCertificateDetail.ArrayOfExemptStates.length; i++) {
         if(item.ExemptionCertificateDetail.ArrayOfExemptStates.length == 1){
            exStates.appendData(pretty(item.ExemptionCertificateDetail.ArrayOfExemptStates[i].ExemptState));
            theCertStates += pretty(item.ExemptionCertificateDetail.ArrayOfExemptStates[i].ExemptState);
			certWatermark = item.ExemptionCertificateDetail.ArrayOfExemptStates[i].ExemptState;
         }else{
            exStates.appendData(item.ExemptionCertificateDetail.ArrayOfExemptStates[i].ExemptState);
            theCertStates += item.ExemptionCertificateDetail.ArrayOfExemptStates[i].ExemptState;
         }
          if (i < item.ExemptionCertificateDetail.ArrayOfExemptStates.length-1) {
             exStates.appendData(", ");
             theCertStates += ", ";
          }
       }
       detailsPanel.appendChild(exStates)
       detailsPanel.appendChild(document.createElement("br"))
       detailsPanel.appendChild(document.createTextNode("Date: " + item.ExemptionCertificateDetail.DateEntered));
       detailsPanel.appendChild(document.createElement("br"))
       detailsPanel.appendChild(document.createTextNode("Purpose: " + pretty(item.ExemptionCertificateDetail.PurchaserExemptionReason)));
       detailsPanel.appendChild(document.createElement("br"))

       
       var remButton = document.createElement("input");
       remButton.setAttribute("type", "submit");
       remButton.setAttribute("style","width:80px;cursor:pointer;");
       remButton.setAttribute("class", "ui-state-default ui-corner-all");
		//stupid IE
        remButton.setAttribute("className", "ui-state-default ui-corner-all");
       remButton.setAttribute("value", "Remove");
       remButton.setAttribute("title", "Remove/Revoke " + item.CertificateID);
 //      remButton.setAttribute("onClick", "if(confirm('Are you sure you want to remove this Exemption Certificate?')){removeCert('" + item.CertificateID + "')}");
       //for IE
       remButton.onclick=function(){if(confirm('Are you sure you want to remove this Exemption Certificate?')){removeCert(item.CertificateID)}};

       var viewLink = document.createElement("input");
       viewLink.setAttribute("type", "submit");
       viewLink.setAttribute("style","width:80px;cursor:pointer;");
       viewLink.setAttribute("class", "ui-state-default ui-corner-all");
		//stupid IE
       viewLink.setAttribute("className", "ui-state-default ui-corner-all");
       viewLink.setAttribute("value", "View");
       viewLink.setAttribute("title", "View " + item.CertificateID);
       var myAddress = item.ExemptionCertificateDetail.PurchaserAddress1;
       if (item.ExemptionCertificateDetail.PurchaserAddress2.length > 1) {
          myAddress += ", " + item.ExemptionCertificateDetail.PurchaserAddress2;
       }
       myAddress += ", " + item.ExemptionCertificateDetail.PurchaserCity;
       myAddress += ", " + item.ExemptionCertificateDetail.PurchaserState;
       myAddress += " " + item.ExemptionCertificateDetail.PurchaserZip;

       var purchExemptWhy = pretty(item.ExemptionCertificateDetail.PurchaserExemptionReason);
       if (item.ExemptionCertificateDetail.PurchaserExemptionReasonValue.length > 2) {
          purchExemptWhy += " : " + item.ExemptionCertificateDetail.PurchaserExemptionReasonValue;
       }
       
       var busType = pretty(item.ExemptionCertificateDetail.PurchaserBusinessType);
       if(busType=="Other"){
        busType = item.ExemptionCertificateDetail.PurchaserBusinessTypeOtherValue;
       }
       var spNumber = item.ExemptionCertificateDetail.SinglePurchase;
       if(spNumber==true){
        spNumber = item.ExemptionCertificateDetail.SinglePurchaseOrderNumber;
       }
       
 //       viewLink.setAttribute("onclick", "certPopOpen('" + spNumber + "','" + item.CertificateID + "','" + item.ExemptionCertificateDetail.PurchaserFirstName + " " + item.ExemptionCertificateDetail.PurchaserLastName + "','" + myAddress + "','" + theCertStates + "','" + purchExemptWhy + "','" + item.ExemptionCertificateDetail.DateEntered + "','" + item.ExemptionCertificateDetail.TaxIDType + "','" + item.ExemptionCertificateDetail.PurchaserTaxID + "','" + busType + "','"+merchantNameForCert+"','"+certWatermark+"')");
        //for IE
	viewLink.onclick=function(){certPopOpen(spNumber,item.CertificateID,item.ExemptionCertificateDetail.PurchaserFirstName + " " + item.ExemptionCertificateDetail.PurchaserLastName,myAddress,theCertStates,purchExemptWhy,item.ExemptionCertificateDetail.DateEntered,item.ExemptionCertificateDetail.TaxIDType,item.ExemptionCertificateDetail.PurchaserTaxID,busType,merchantNameForCert,certWatermark)};
	//	certImage.setAttribute("onclick", "certPopOpen('" + spNumber + "','" + item.CertificateID + "','" + item.ExemptionCertificateDetail.PurchaserFirstName + " " + item.ExemptionCertificateDetail.PurchaserLastName + "','" + myAddress + "','" + theCertStates + "','" + purchExemptWhy + "','" + item.ExemptionCertificateDetail.DateEntered + "','" + item.ExemptionCertificateDetail.TaxIDType + "','" + item.ExemptionCertificateDetail.PurchaserTaxID + "','" + busType + "','"+merchantNameForCert+"','"+certWatermark+"')");
	//for IE
	certImage.onclick=function(){certPopOpen(spNumber,item.CertificateID,item.ExemptionCertificateDetail.PurchaserFirstName + " " + item.ExemptionCertificateDetail.PurchaserLastName,myAddress,theCertStates,purchExemptWhy,item.ExemptionCertificateDetail.DateEntered,item.ExemptionCertificateDetail.TaxIDType,item.ExemptionCertificateDetail.PurchaserTaxID,busType,merchantNameForCert,certWatermark)};

       
       var useButton = document.createElement("input");
       useButton.setAttribute("type", "submit");
       useButton.setAttribute("style","cursor:pointer;");
       useButton.setAttribute("value", "Use this Certificate");
       useButton.setAttribute("class", "ui-state-default ui-priority-primary ui-corner-all");
		//stupid IE
       useButton.setAttribute("className", "ui-state-default ui-priority-primary ui-corner-all");
       useButton.setAttribute("title", "Use Exemption Certificate " + item.CertificateID + " for this transaction");
//       useButton.setAttribute("onClick", "useCert('" + item.CertificateID + "')");
       //for IE
       useButton.onclick=function(){useCert(item.CertificateID)};

       
       detailsPanel.appendChild(remButton);
       detailsPanel.appendChild(document.createTextNode(" "));
       detailsPanel.appendChild(viewLink);
       detailsPanel.appendChild(document.createTextNode(" "));
       detailsPanel.appendChild(useButton);
       
       certTr.appendChild(certDiv)
       certTr.appendChild(detailsPanel);
       certsTBody.appendChild(certTr);
       
       certsTable.appendChild(certsTBody);
    });
    var placeholder = document.createElement("b").appendChild(document.createTextNode("You have "+myCertCount+" Exemption Certificates on file with us. Please select an existing certificate below, or register a new one."));
    existingDescTd.appendChild(placeholder);
    
     
    //warnFieldset.appendChild(certsTable); 
    list.appendChild(certsTable);
    var t = document.getElementsByTagName('span')[0];
    t.parentNode.insertBefore(list, t);
    jQuery("#jqxmptlist").dialog({ autoOpen: false, width: 550, height:600, modal: true });
}

function buildExemptCert() {	
	var xmpt = document.createElement('div');
	xmpt.title = "Purchaser Certificate of Exemption";
	xmpt.id = "jqxmpt";
	xmpt.setAttribute('style', 'display:none;');
	xmpt.style.backgroundColor="#F7FBF4";
	var warnFieldset = document.createElement("fieldset"); var warnLegend = document.createElement("legend");var stongLegend = document.createElement("strong");stongLegend.setAttribute("style","color:#990000;"); stongLegend.appendChild(document.createTextNode("Warning to Purchaser"));warnLegend.appendChild(stongLegend); warnFieldset.appendChild(warnLegend); var placeholder = document.createElement("strong");
	placeholder.appendChild(document.createTextNode("This is a multistate form. Not all states allow all exemptions listed on this form. ")); 
	var restText = document.createTextNode("Purchasers are responsible for knowing if they qualify to claim exemption from tax in the state that is due tax on this sale. The state that is due tax on this sale will be notified that you claimed exemption from sales tax. You will be held liable for any tax and interest, as well as civil and criminal penalties imposed by the member state, if you are not eligible to claim this exemption. Sellers may not accept a certificate of exemption for an entity-based exemption on a sale at a location operated by the seller within the designated state if the state does not allow such an entity-based exemption."); warnFieldset.appendChild(placeholder); warnFieldset.appendChild(restText); xmpt.appendChild(warnFieldset); var targFieldset = document.createElement("fieldset"); 
	var targLegend = document.createElement("legend"); targLegend.appendChild(document.createTextNode("Certificate of Exemption")); targFieldset.appendChild(targLegend); 
	var selectState = document.createElement("select"); selectState.name = "ExemptState"; selectState.id = "ExemptState";
	//stupid IE
	if ( jQuery.browser.msie ) {//ask JQuery if it is IE
		if(jQuery.browser.version<8){
			selectState.setAttribute("onchange", function(){
				xmpt.style.background="url('"+tcsProtocol+"//"+tcsURL+"/imgs/states/"+this.value+".gif')";
				xmpt.style.backgroundColor="#F7FBF4";
				xmpt.style.backgroundRepeat="no-repeat";
				xmpt.style.backgroundPosition="center";
			}); 
		}else{
			selectState.setAttribute("onChange", "jQuery('#jqxmpt').css('background','#F7FBF4 url("+tcsProtocol+"//"+tcsURL+"/imgs/states/'+this.value+'.gif) no-repeat center')"); 
		}
	}else{
		selectState.setAttribute("onChange", "jQuery('#jqxmpt').css('background','#F7FBF4 url("+tcsProtocol+"//"+tcsURL+"/imgs/states/'+this.value+'.gif) no-repeat center')"); 
	}
	//selectState.onChange=function(){jQuery("#jqxmpt").css("background","#FBFBFB url("+tcsProtocol+"//"+tcsURL+"/imgs/states/"+this.value+".gif) no-repeat center")}; 
	selectState.title = "Select the state under whose laws you are claiming exemption."; 
	selectState.setAttribute("class", "tinput");
	//stupid IE
	selectState.setAttribute("className", "tinput");
	addStates(selectState); 
	targFieldset.appendChild(selectState); 
	targFieldset.appendChild(document.createTextNode("Select the state under whose laws you are claiming exemption.")); 
	xmpt.appendChild(targFieldset); 
	var myFieldset = document.createElement("fieldset"); 
	var myLegend = document.createElement("legend"); 
	myLegend.appendChild(document.createTextNode("Select one:")); 
	myFieldset.appendChild(myLegend); xmpt.appendChild(myFieldset); 
	    
	var singPurchRadio = document.createElement("input"); 
	singPurchRadio.setAttribute("id", "SinglePurchase"); 
	singPurchRadio.setAttribute("name", "SinglePurchase"); 
//	singPurchRadio.setAttribute("onClick", "clearAllErrors();jQuery('#BlanketPurchase').removeAttr('checked');jQuery('#blanketdesc').attr('style','display:none');jQuery('#SinglePurchaseOrderNumberDesc').attr('style','display:inline');jQuery('#SinglePurchaseOrderNumber').attr('style','display:inline'); jQuery('#SinglePurchaseOrderNumber').attr('name','SinglePurchaseOrderNumber'); jQuery('#SinglePurchaseOrderNumber').focus()"); 
	//now for IE
	singPurchRadio.onclick=function(){clearAllErrors();jQuery('#BlanketPurchase').removeAttr('checked');jQuery('#blanketdesc').attr('style','display:none');jQuery('#SinglePurchaseOrderNumberDesc').attr('style','display:inline');jQuery('#SinglePurchaseOrderNumber').attr('style','display:inline'); jQuery('#SinglePurchaseOrderNumber').attr('name','SinglePurchaseOrderNumber'); jQuery('#SinglePurchaseOrderNumber').focus()};
	singPurchRadio.setAttribute("type", "radio"); 
	singPurchRadio.setAttribute("class", "tinput");
	//stupid IE
	singPurchRadio.setAttribute("className", "tinput");
	myFieldset.appendChild(singPurchRadio); 
	myFieldset.appendChild(document.createElement("b").appendChild(document.createTextNode("Single purchase certificate. "))); var myDesc = document.createElement("span"); myDesc.id = "SinglePurchaseOrderNumberDesc"; myDesc.setAttribute("style", "display:none;"); myDesc.appendChild(document.createTextNode("Relates to invoice/purchase order \#")); myFieldset.appendChild(myDesc); var descInput = document.createElement("input"); descInput.id = "SinglePurchaseOrderNumber"; descInput.setAttribute("style", "display:none;"); descInput.title = "Single Purchase Order Number"; descInput.setAttribute("class", "tinput"); ; myFieldset.appendChild(descInput); myFieldset.appendChild(document.createElement("br")); 
	    
	var singPurchRadio2 = document.createElement("input"); 
	singPurchRadio2.setAttribute("checked", "true"); 
	singPurchRadio2.setAttribute("id", "BlanketPurchase"); 
	singPurchRadio2.setAttribute("name", "BlanketPurchase"); 
	singPurchRadio2.setAttribute("type", "radio"); 
//	singPurchRadio2.setAttribute("onClick", "clearAllErrors();jQuery('#SinglePurchase').removeAttr('checked');jQuery('#blanketdesc').attr('style','display:inline');jQuery('#SinglePurchaseOrderNumberDesc').attr('style','display:none');jQuery('#SinglePurchaseOrderNumber').attr('style','display:none;')");
	//now for IE
	singPurchRadio2.onclick=function(){clearAllErrors();jQuery('#SinglePurchase').removeAttr('checked');jQuery('#blanketdesc').attr('style','display:inline');jQuery('#SinglePurchaseOrderNumberDesc').attr('style','display:none');jQuery('#SinglePurchaseOrderNumber').attr('style','display:none;')};
	myFieldset.appendChild(singPurchRadio2); 
	    
	myFieldset.appendChild(document.createElement("b").appendChild(document.createTextNode("Blanket certificate. "))); myDesc = document.createElement("span"); myDesc.id = "blanketdesc"; myDesc.appendChild(document.createTextNode("If selected, this certificate continues in force until canceled by the purchaser.")); myFieldset.appendChild(myDesc); var idFieldset = document.createElement("fieldset"); idFieldset.id = "didFieldset"; var idyLegend = document.createElement("legend"); idyLegend.appendChild(document.createTextNode("Purchaser Identification")); idFieldset.appendChild(idyLegend); xmpt.appendChild(idFieldset); var idTable = document.createElement("table"); var idTableBody = document.createElement("tbody");idTable.setAttribute("cellspacing", 0); idTable.setAttribute("width","100%"); var firstRow = document.createElement("tr"); firstRow.appendChild(drawTextInput("PurchaserFirstName", "width:100%;", "First Name", 1)); firstRow.appendChild(drawTextInput("PurchaserLastName", "width:100%;", "Last Name", 3)); var secondRow = document.createElement("tr"); secondRow.appendChild(drawTextInput("PurchaserAddress1", "width:100%;", "Business Address", 1)); secondRow.appendChild(drawTextInput("PurchaserCity", "width:100%;", "City", 1)); var stateCell = document.createElement("td"); stateCell.setAttribute("class", "irs"); stateCell.appendChild(document.createTextNode("State")); stateCell.appendChild(document.createElement("br")); var selectMyState = document.createElement("select"); selectMyState.name = "PurchaserState"; selectMyState.id = "PurchaserState"; selectMyState.title = "Purchaser State."; selectMyState.setAttribute("class", "tinput"); addStates(selectMyState); stateCell.appendChild(selectMyState); secondRow.appendChild(stateCell); secondRow.appendChild(drawTextInput("PurchaserZip", "width:70px;", "Zip code", 1)); var thirdRow = document.createElement("tr"); thirdRow.appendChild(drawSelectTextInput("IDNumber", "white-space:nowrap", "Purchaser's Exemption ID number", 1)); var fourthRow = drawBTSelector(); var fifthRow = drawTTSelector(); idTable.appendChild(idTableBody);idTableBody.appendChild(firstRow);idTableBody.appendChild(secondRow);idTableBody.appendChild(thirdRow);idTableBody.appendChild(fourthRow);idTableBody.appendChild(fifthRow);idFieldset.appendChild(idTable); 
	    
	var submitButton = document.createElement("input"); 
	submitButton.setAttribute("type", "submit"); 
	submitButton.setAttribute("style", "width:100%;");
	submitButton.setAttribute("class", "ui-state-default ui-priority-primary ui-corner-all");
	//stupid IE
	submitButton.setAttribute("className", "ui-state-default ui-priority-primary ui-corner-all");
	submitButton.setAttribute("value", "Save this Exemption Certificate"); 
//	submitButton.setAttribute("onclick", "saveCert(this, jQuery('#ExemptState'), jQuery('#BlanketPurchase'), jQuery('#SinglePurchaseOrderNumber'), jQuery('#PurchaserFirstName'), jQuery('#PurchaserLastName'), jQuery('#PurchaserAddress1'), jQuery('#PurchaserCity'), jQuery('#PurchaserState'), jQuery('#PurchaserZip'), jQuery('#TaxType'), jQuery('#IDNumber'), jQuery('#PurchaserBusinessType'), jQuery('#PurchaserExemptionReason'), jQuery('#PurchaserExemptionReasonValue') )"); 
	//now for IE
	submitButton.onclick=function(){saveCert(this, jQuery('#ExemptState'), jQuery('#BlanketPurchase'), jQuery('#SinglePurchaseOrderNumber'), jQuery('#PurchaserFirstName'), jQuery('#PurchaserLastName'), jQuery('#PurchaserAddress1'), jQuery('#PurchaserCity'), jQuery('#PurchaserState'), jQuery('#PurchaserZip'), jQuery('#TaxType'), jQuery('#IDNumber'), jQuery('#PurchaserBusinessType'), jQuery('#PurchaserExemptionReason'), jQuery('#PurchaserExemptionReasonValue') )};
	xmpt.appendChild(submitButton); 
	var t = document.getElementsByTagName('span')[0]; t.parentNode.insertBefore(xmpt, t); 
	jQuery("#jqxmpt").dialog({ autoOpen: false, width: 750, modal: true });;
	
	return xmpt;
}
function drawTextInput(theId, style, label, colspan) {
   var firstCell = document.createElement("td"); firstCell.setAttribute("class", "irs"); firstCell.setAttribute("colSpan", colspan); firstCell.appendChild(document.createTextNode(label))
   firstCell.appendChild(document.createElement("br")); var myInput = document.createElement("input"); myInput.id = theId; myInput.setAttribute("style", style); myInput.setAttribute("class", "tinput"); myInput.setAttribute("type", "text"); myInput.setAttribute("name", theId); firstCell.appendChild(myInput); return firstCell;
}
function selectedTaxIDType(what) {
   clearAllErrors(); jQuery('#stateIssued').attr("style", "display:none;"); jQuery('#countryIssued').attr("style", "display:none;"); switch (what) { case "StateIssued": jQuery('#stateIssued').attr("style", "display:inline;"); break; case "ForeignDiplomat": jQuery('#countryIssued').attr("style", "display:inline;"); break; default: break; }
   jQuery('#IDNumber').focus();
}
function drawSelectTextInput(theId, style, label) {
   var firstCell = document.createElement("td"); firstCell.setAttribute("style", style); firstCell.setAttribute("class", "irs"); firstCell.setAttribute("colSpan", 4); firstCell.appendChild(document.createTextNode(label))
   firstCell.appendChild(document.createElement("br")); var selectTaxType = document.createElement("select")
   selectTaxType.name = "TaxType"; selectTaxType.id = "TaxType"; selectTaxType.title = "Purchaser Exemption ID Type."; selectTaxType.setAttribute("class", "tinput"); selectTaxType.setAttribute("onchange", "selectedTaxIDType(this.value)"); selectTaxType.appendChild(drawOpt("None", "[ - Select Type - ]")); selectTaxType.appendChild(drawOpt("FEIN", "Federal Employer ID")); selectTaxType.appendChild(drawOpt("StateIssued", "State Issued Exemption ID or Drivers License")); selectTaxType.appendChild(drawOpt("ForeignDiplomat", "Foreign Diplomat ID")); firstCell.appendChild(selectTaxType)
   firstCell.appendChild(document.createTextNode(" Number:")); var myInput = document.createElement("input"); myInput.id = theId; myInput.setAttribute("name", theId); myInput.setAttribute("class", "tinput"); ; myInput.setAttribute("style", "width:90px")
   firstCell.appendChild(myInput); var stateIssuedSpan = document.createElement("span"); stateIssuedSpan.setAttribute("id", "stateIssued"); stateIssuedSpan.setAttribute("style", "display:none;"); stateIssuedSpan.appendChild(document.createTextNode(" Issued by:")); var selectIssueState = document.createElement("select")
   selectIssueState.name = "StateOfIssue"; selectIssueState.id = "StateOfIssue"; selectIssueState.title = "Exemption ID State Of Issue."; selectIssueState.setAttribute("class", "tinput"); ; selectIssueState.setAttribute("style", "width:110px;"); addStates(selectIssueState); stateIssuedSpan.appendChild(selectIssueState); var countryIssuedSpan = document.createElement("span"); countryIssuedSpan.setAttribute("id", "countryIssued"); countryIssuedSpan.setAttribute("style", "display:none;"); countryIssuedSpan.appendChild(document.createTextNode(" Issued by:")); var countryInput = document.createElement("input"); countryInput.name = "CountryOfIssue"; countryInput.id = "CountryOfIssue"; countryInput.title = "Exemption ID Country Of Issue."; countryInput.setAttribute("class", "tinput"); countryInput.setAttribute("style", "width:70px;"); countryIssuedSpan.appendChild(countryInput); firstCell.appendChild(stateIssuedSpan); firstCell.appendChild(countryIssuedSpan); return firstCell;
}
function popBT(what) {
   clearAllErrors(); if (what == 'Other') {
      jQuery('#PurchaserBusinessTypeOtherValue').attr('style', 'display:inline;width:300px'); jQuery('#PurchaserBusinessTypeOtherValue').focus()
      jQuery('#PurchaserBusinessTypeOtherValue').select()
   } else { jQuery('#PurchaserBusinessTypeOtherValue').attr('style', 'display:none;'); } 
}
function drawTTSelector() {
   var aRow = document.createElement("tr"); var firstCell = document.createElement("td"); firstCell.setAttribute("class", "irs"); firstCell.setAttribute("colSpan", 1); firstCell.appendChild(document.createTextNode("Reason for exemption"))
   firstCell.appendChild(document.createElement("br")); var selectExemptType = document.createElement("select")
   selectExemptType.name = "PurchaserExemptionReason"; selectExemptType.id = "PurchaserExemptionReason"; selectExemptType.title = "Reason for exemption."; selectExemptType.setAttribute("class", "tinput"); ; selectExemptType.setAttribute("style", "width:100%;"); selectExemptType.setAttribute("onchange", "checkReason(this.value)"); selectExemptType.appendChild(drawOpt("None", "[ - Select - ]")); selectExemptType.appendChild(drawOpt("FederalGovernmentDepartment", "Federal Government Department")); selectExemptType.appendChild(drawOpt("StateOrLocalGovernment", "State Or Local Government")); selectExemptType.appendChild(drawOpt("TribalGovernmentName", "Tribal Government")); selectExemptType.appendChild(drawOpt("ForeignDiplomat", "Foreign Diplomat")); selectExemptType.appendChild(drawOpt("CharitableOrganization", "Charitable Organization")); selectExemptType.appendChild(drawOpt("ReligiousOrEducationalOrganization", "Religious or Educational Organization")); selectExemptType.appendChild(drawOpt("Resale", "Resale")); selectExemptType.appendChild(drawOpt("AgriculturalProduction", "Agricultural Production")); selectExemptType.appendChild(drawOpt("IndustrialProductionOrManufacturing", "Industrial Production or Manufacturing")); selectExemptType.appendChild(drawOpt("DirectPayPermit", "Direct Pay Permit")); selectExemptType.appendChild(drawOpt("DirectMail", "Direct Mail")); selectExemptType.appendChild(drawOpt("Other", "Other")); firstCell.appendChild(selectExemptType); var secondCell = document.createElement("td"); secondCell.setAttribute("class", "irs"); secondCell.setAttribute("colSpan", 3); var myInput = document.createElement("input"); myInput.id = "PurchaserExemptionReasonValue"; myInput.setAttribute("name", "PurchaserExemptionReasonValue"); myInput.setAttribute("class", "tinput"); myInput.setAttribute("style", "display:none;"); secondCell.appendChild(document.createElement("br")); secondCell.appendChild(myInput); aRow.appendChild(firstCell); aRow.appendChild(secondCell); return aRow;
}
function drawBTSelector() {
   var aRow = document.createElement("tr"); var firstCell = document.createElement("td"); firstCell.setAttribute("class", "irs"); firstCell.setAttribute("colSpan", 1); firstCell.appendChild(document.createTextNode("Purchaser Business Type"))
   firstCell.appendChild(document.createElement("br")); var selectTaxType = document.createElement("select")
   selectTaxType.name = "PurchaserBusinessType"; selectTaxType.id = "PurchaserBusinessType"; selectTaxType.title = "Purchaser Business Type."; selectTaxType.setAttribute("class", "tinput"); ; selectTaxType.setAttribute("style", "width:100%;"); selectTaxType.setAttribute("onchange", "popBT(this.value)"); selectTaxType.appendChild(drawOpt("None", "[ - Select - ]")); selectTaxType.appendChild(drawOpt("AccommodationAndFoodServices", "Accommodation And Food Services")); selectTaxType.appendChild(drawOpt("Agricultural_Forestry_Fishing_Hunting", "Agricultural/Forestry/Fishing/Hunting")); selectTaxType.appendChild(drawOpt("Construction", "Construction")); selectTaxType.appendChild(drawOpt("FinanceAndInsurance", "Finance or Insurance")); selectTaxType.appendChild(drawOpt("Information_PublishingAndCommunications", "Information Publishing and Communications")); selectTaxType.appendChild(drawOpt("Manufacturing", "Manufacturing")); selectTaxType.appendChild(drawOpt("Mining", "Mining")); selectTaxType.appendChild(drawOpt("RealEstate", "Real Estate")); selectTaxType.appendChild(drawOpt("RentalAndLeasing", "Rental and Leasing")); selectTaxType.appendChild(drawOpt("RetailTrade", "Retail Trade")); selectTaxType.appendChild(drawOpt("TransportationAndWarehousing", "Transportation and Warehousing")); selectTaxType.appendChild(drawOpt("Utilities", "Utilities")); selectTaxType.appendChild(drawOpt("WholesaleTrade", "Wholesale Trade")); selectTaxType.appendChild(drawOpt("BusinessServices", "Business Services")); selectTaxType.appendChild(drawOpt("ProfessionalServices", "Professional Services")); selectTaxType.appendChild(drawOpt("EducationAndHealthCareServices", "Education and Health Care Services")); selectTaxType.appendChild(drawOpt("NonprofitOrganization", "Nonprofit Organization")); selectTaxType.appendChild(drawOpt("Government", "Government")); selectTaxType.appendChild(drawOpt("NotABusiness", "Not a Business")); selectTaxType.appendChild(drawOpt("Other", "Other")); firstCell.appendChild(selectTaxType); var secondCell = document.createElement("td"); secondCell.setAttribute("class", "irs"); secondCell.setAttribute("colSpan", 3); var myInput = document.createElement("input"); myInput.id = "PurchaserBusinessTypeOtherValue"; myInput.setAttribute("class", "tinput"); myInput.setAttribute("style", "display:none;"); myInput.setAttribute("value", "Please explain"); secondCell.appendChild(document.createElement("br")); secondCell.appendChild(myInput); aRow.appendChild(firstCell); aRow.appendChild(secondCell); return aRow;
}
function drawOpt(abrev, state) {
   var anOpt = document.createElement("option")
   anOpt.value = abrev; anOpt.appendChild(document.createTextNode(state))
   return anOpt;
}
function addStates(which) { which.appendChild(drawOpt("None", "[ - Select - ]"));which.appendChild(drawOpt("AL", "Alabama"));which.appendChild(drawOpt("AK", "Alaska"));which.appendChild(drawOpt("AZ", "Arizona"));which.appendChild(drawOpt("AR", "Arkansas"));which.appendChild(drawOpt("CA", "California"));which.appendChild(drawOpt("CO", "Colorado"));which.appendChild(drawOpt("CT", "Connecticut"));which.appendChild(drawOpt("DE", "Delaware"));which.appendChild(drawOpt("FL", "Florida"));which.appendChild(drawOpt("GA", "Georgia"));which.appendChild(drawOpt("HI", "Hawaii"));which.appendChild(drawOpt("ID", "Idaho"));which.appendChild(drawOpt("IL", "Illinois"));which.appendChild(drawOpt("IN", "Indiana"));which.appendChild(drawOpt("IA", "Iowa"));which.appendChild(drawOpt("KS", "Kansas"));which.appendChild(drawOpt("KY", "Kentucky"));which.appendChild(drawOpt("LA", "Louisiana"));which.appendChild(drawOpt("ME", "Maine"));which.appendChild(drawOpt("MD", "Maryland"));which.appendChild(drawOpt("MA", "Massachusetts"));which.appendChild(drawOpt("MI", "Michigan"));which.appendChild(drawOpt("MN", "Minnesota"));which.appendChild(drawOpt("MS", "Mississippi"));which.appendChild(drawOpt("MO", "Missouri"));which.appendChild(drawOpt("MT", "Montana"));which.appendChild(drawOpt("NE", "Nebraska"));which.appendChild(drawOpt("NV", "Nevada"));which.appendChild(drawOpt("NH", "New Hampshire"));which.appendChild(drawOpt("NJ", "New Jersey"));which.appendChild(drawOpt("NM", "New Mexico"));which.appendChild(drawOpt("NY", "New York"));which.appendChild(drawOpt("NC", "North Carolina"));which.appendChild(drawOpt("ND", "North Dakota"));which.appendChild(drawOpt("OH", "Ohio"));which.appendChild(drawOpt("OK", "Oklahoma"));which.appendChild(drawOpt("OR", "Oregon"));which.appendChild(drawOpt("PA", "Pennsylvania"));which.appendChild(drawOpt("RI", "Rhode Island"));which.appendChild(drawOpt("SC", "South Carolina"));which.appendChild(drawOpt("SD", "South Dakota"));which.appendChild(drawOpt("TN", "Tennessee"));which.appendChild(drawOpt("TX", "Texas"));which.appendChild(drawOpt("UT", "Utah"));which.appendChild(drawOpt("VT", "Vermont"));which.appendChild(drawOpt("VA", "Virginia"));which.appendChild(drawOpt("WA", "Washington"));which.appendChild(drawOpt("DC", "Washington DC"));which.appendChild(drawOpt("WV", "West Virginia"));which.appendChild(drawOpt("WI", "Wisconsin"));which.appendChild(drawOpt("WY", "Wyoming")); }

function checkForm(form) { 	
   clearAllErrors(); if (verifyField("ExemptState", "select")) {
      var passSingle = false; if (jQuery('#SinglePurchase').is(":checked")) { passSingle = verifyField("SinglePurchaseOrderNumber", "string") } else { passSingle = false; }
      if (passSingle = false) { return false; }
         if (verifyField("PurchaserFirstName", "name")) {
            if (verifyField("PurchaserLastName", "name")) {
               if (verifyField("PurchaserAddress1", "string")) {
                  if (verifyField("PurchaserCity", "string")) {
                     if (verifyField("PurchaserState", "select")) {
                        if (verifyField("PurchaserZip", "zip")) {
                           if (verifyField("TaxType", "select")) {
                              var completedTaxType = false; if (jQuery('#TaxType').val() == 'StateIssued') { completedTaxType = verifyField("StateOfIssue", "select"); if (completedTaxType) { completedTaxType = verifyField("IDNumber", "string") } }
                              if (jQuery('#TaxType').val() == 'ForeignDiplomat') { completedTaxType = verifyField("CountryOfIssue", "string"); if (completedTaxType) { completedTaxType = verifyField("IDNumber", "string") } }
                              if ((jQuery('#TaxType').val() == 'FEIN')) { completedTaxType = verifyField("IDNumber", "taxid") } 
                              if (completedTaxType) {	
                                 if (verifyField("PurchaserBusinessType", "select")) {
                                    var nextCompleted = false; if (jQuery('#PurchaserBusinessType').val() == 'Other') { nextCompleted = jQuery('#PurchaserBusinessTypeOtherValue').val(); } else { nextCompleted = true; }
                                    if (nextCompleted) { 
                                       if (verifyField("PurchaserExemptionReason", "select")) { 
                                          if (verifyField("PurchaserExemptionReasonValue", "string")) {
						return true;
				          } 
				       } 
				    } 
                                 } 
                              } 
                           } 
                        } 
                     } 
                  } 
               } 
            } 
         } 
      
   } 
   return false;
}

function checkReason(input) {	
   jQuery('#PurchaserExemptionReasonValue').attr("style", "display:none;"); switch (input) { case 'Other': jQuery('#PurchaserExemptionReasonValue').attr("value", "Please explain"); break; case 'FederalGovernmentDepartment': jQuery('#PurchaserExemptionReasonValue').attr("value", "Department name"); break; case 'StateOrLocalGovernment': jQuery('#PurchaserExemptionReasonValue').attr("value", "Government name"); break; case 'TribalGovernmentName': jQuery('#PurchaserExemptionReasonValue').attr("value", "Tribal name"); break; case 'ForeignDiplomat': jQuery('#PurchaserExemptionReasonValue').attr("value", "Foreign Diplomat ID"); break; case 'CharitableOrganization': jQuery('#PurchaserExemptionReasonValue').attr("value", "Charitable Organization ID"); break; case 'ReligiousOrEducationalOrganization': jQuery('#PurchaserExemptionReasonValue').attr("value", "Organization ID"); break; case 'Resale': jQuery('#PurchaserExemptionReasonValue').attr("value", "Resale ID"); break; case 'AgriculturalProduction': jQuery('#PurchaserExemptionReasonValue').attr("value", "Agricultural Production ID"); break; case 'IndustrialProductionOrManufacturing': jQuery('#PurchaserExemptionReasonValue').attr("value", "Production/Manufacturing ID"); break; case 'DirectPayPermit': jQuery('#PurchaserExemptionReasonValue').attr("value", "Direct Pay Permit ID"); break; case 'DirectMail': jQuery('#PurchaserExemptionReasonValue').attr("value", "Direct Mail ID"); break; }
   if (input != 'None') { jQuery('#PurchaserExemptionReasonValue').attr("style", "display:inline;width:300px"); jQuery('#PurchaserExemptionReasonValue').select(); jQuery('#PurchaserExemptionReasonValue').focus(); } 
}
function verifyField(which, type) {
   var retBool = false; var findStr = "#" + which; clearErrors(findStr); if (checkForilleagals(findStr)) {
      switch (type) {
         case "name": if (jQuery(findStr).val().length < 3) { writeInputErr("Your name appears suspiciously short.", findStr); } else { retBool = true; }
            break; case "zip": if (!validateZipCode(jQuery(findStr).val())) { writeInputErr("Invalid zip code", findStr); } else { retBool = true; }
            break; case "select": if (jQuery(findStr).val() == 'None') { writeInputErr("Selection required.", findStr); } else { retBool = true; }
            break; case "taxid": if (!validateEID(jQuery(findStr).val())) { writeInputErr("Invalid Federal EIN (XX-XXXXXXX)", findStr); } else { retBool = true; }
            break; case "string": if (!validateString(jQuery(findStr).val())) { writeInputErr("Missing", findStr); } else { retBool = true; }
            break; default: alert("Validation not set up for " + type + " yet."); break;
      } 
   }
   return retBool;
}
function checkForilleagals(which) {
   var retBool = false; if ((jQuery(which).val().indexOf("<") == -1) && (jQuery(which).val().indexOf(">") == -1) && (jQuery(which).val().indexOf("(") == -1) && (jQuery(which).val().indexOf(")") == -1) && (jQuery(which).val().indexOf("*") == -1) && (jQuery(which).val().indexOf("\\") == -1) && (jQuery(which).val().indexOf("/") == -1) && (jQuery(which).val().indexOf("\"") == -1)) { retBool = true; } else { writeInputErr("Invalid", which); }
   return retBool;
}
function clearAllErrors() { jQuery('.err').empty(); }
function clearErrors(which) {
   jQuery(which).css("border", "")
   jQuery(which).parent().children('.err').empty();
}
function writeInputErr(msg, which) { jQuery(which).parent().children('.err').empty(); jQuery(which).css("border", "1px solid #ff9900"); jQuery(which).parent().append("<b class='err'>" + msg + "</b>"); jQuery(which).focus(function () { this.select() }); jQuery(which).focus(); }
function validateString(elementValue) { if (elementValue.length < 2) { return false; } else { return true; } }
function validateEID(elementValue) { var EIDPattern = /^[1-9]\d?-\d{7}$/; return EIDPattern.test(elementValue); }
function validateZipCode(elementValue) { var zipCodePattern = /^\d{5}$|^\d{5}-\d{4}$/; return zipCodePattern.test(elementValue); }
