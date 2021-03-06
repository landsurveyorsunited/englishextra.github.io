/*jslint browser: true */
/*jslint node: true */
/*global global, $, ActiveXObject, alignToMasterBottomLeft,
appendFragment, Carousel, changeLocation, container, Cookies, debounce,
define, DISQUS, DoSlide, Draggabilly, earlyDeviceOrientation,
earlyDeviceSize, earlyDeviceType, earlyFnGetYyyymmdd, earlyHasTouch,
earlySvgasimgSupport, earlySvgSupport, escape, FastClick, fetch,
findPos, isInViewport, fixEnRuTypo, forEach, getHTTP,
getKeyValuesFromJSON, IframeLightbox, imagePromise, imagesLoaded,
imagesPreloaded, insertExternalHTML, insertTextAsFragment, Isotope,
isValidId, jQuery, Kamil, loadExternalHTML, loadJS, loadTriggerJS,
loadUnparsedJSON, manageDataSrcImageAll, manageImgLightboxLinks, Masonry,
module, myMap, openDeviceBrowser, Packery, Parallax, parseLink,
PhotoSwipe, PhotoSwipeUI_Default, pnotify, prependFragmentBefore,
prettyPrint, Promise, Proxy, QRCode, removeChildren, removeElement,
require, routie, safelyParseJSON, scriptIsLoaded, scroll2Top,
scrollToTop, setImmediate, setStyleDisplayBlock, setStyleDisplayNone,
setStyleOpacity, setStyleVisibilityHidden, setStyleVisibilityVisible, t,
Tablesort, throttle, Timers, ToProgress, truncString, unescape, verge,
VK, Ya, ymaps, zenscroll */
/*property console, split */
/*!
 * define global root
 */
/* var globalRoot = "object" === typeof window && window || "object" === typeof self && self || "object" === typeof global && global || {}; */
var globalRoot = "undefined" !== typeof window ? window : this;
/*!
 * safe way to handle console.log
 * @see {@link https://github.com/paulmillr/console-polyfill}
 */
(function (root) {
	"use strict";
	if (!root.console) {
		root.console = {};
	}var con = root.console;var prop, method;var dummy = function () {};var properties = ["memory"];var methods = ("assert,clear,count,debug,dir,dirxml,error,exception,group," + "groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd," + "show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn").split(",");while (prop = properties.pop()) {
		if (!con[prop]) {
			con[prop] = {};
		}
	}while (method = methods.pop()) {
		if (!con[method]) {
			con[method] = dummy;
		}
	}
})(globalRoot);
/*!
 * modified ToProgress v0.1.1
 * @see {@link https://github.com/djyde/ToProgress}
 * @see {@link https://gist.github.com/englishextra/6a8c79c9efbf1f2f50523d46a918b785}
 * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
 * arguments.callee changed to TP, a local wrapper function,
 * so that public function name is now customizable;
 * wrapped in curly brackets:
 * else{document.body.appendChild(this.progressBar);};
 * removed module check
 * passes jshint
 */
(function (root) {
	"use strict";
	var ToProgress = function () {
		var TP = function () {
			var t = function () {
				var s = document.createElement("fakeelement"),
				    i = { transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd" };for (var j in i) {
					if (i.hasOwnProperty(j)) {
						if (void 0 !== s.style[j]) {
							return i[j];
						}
					}
				}
			},
			    s = function (t, a) {
				if (this.progress = 0, this.options = { id: "top-progress-bar", color: "#F44336", height: "2px", duration: 0.2 }, t && "object" === typeof t) {
					for (var i in t) {
						if (t.hasOwnProperty(i)) {
							this.options[i] = t[i];
						}
					}
				}if (this.options.opacityDuration = 3 * this.options.duration, this.progressBar = document.createElement("div"), this.progressBar.id = this.options.id, this.progressBar.setCSS = function (t) {
					for (var a in t) {
						if (t.hasOwnProperty(a)) {
							this.style[a] = t[a];
						}
					}
				}, this.progressBar.setCSS({ position: a ? "relative" : "fixed", top: "0", left: "0", right: "0", "background-color": this.options.color, height: this.options.height, width: "0%", transition: "width " + this.options.duration + "s, opacity " + this.options.opacityDuration + "s", "-moz-transition": "width " + this.options.duration + "s, opacity " + this.options.opacityDuration + "s", "-webkit-transition": "width " + this.options.duration + "s, opacity " + this.options.opacityDuration + "s" }), a) {
					var o = document.querySelector(a);if (o) {
						if (o.hasChildNodes()) {
							o.insertBefore(this.progressBar, o.firstChild);
						} else {
							o.appendChild(this.progressBar);
						}
					}
				} else {
					document.body.appendChild(this.progressBar);
				}
			},
			    i = t();return s.prototype.transit = function () {
				this.progressBar.style.width = this.progress + "%";
			}, s.prototype.getProgress = function () {
				return this.progress;
			}, s.prototype.setProgress = function (t, s) {
				this.show();this.progress = t > 100 ? 100 : 0 > t ? 0 : t;this.transit();if (s) {
					s();
				}
			}, s.prototype.increase = function (t, s) {
				this.show();this.setProgress(this.progress + t, s);
			}, s.prototype.decrease = function (t, s) {
				this.show();this.setProgress(this.progress - t, s);
			}, s.prototype.finish = function (t) {
				var s = this;this.setProgress(100, t);this.hide();if (i) {
					this.progressBar.addEventListener(i, function (t) {
						s.reset();s.progressBar.removeEventListener(t.type, TP);
					});
				}
			}, s.prototype.reset = function (t) {
				this.progress = 0;this.transit();if (t) {
					t();
				}
			}, s.prototype.hide = function () {
				this.progressBar.style.opacity = "0";
			}, s.prototype.show = function () {
				this.progressBar.style.opacity = "1";
			}, s;
		};return TP();
	}();root.ToProgress = ToProgress;
})(globalRoot);
/*!
 * modified scrollToY
 * @see {@link http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation}
 * passes jshint
 */
(function (root) {
	"use strict";
	var scroll2Top = function (scrollTargetY, speed, easing) {
		var scrollY = root.scrollY || document.documentElement.scrollTop;scrollTargetY = scrollTargetY || 0;speed = speed || 2000;easing = easing || 'easeOutSine';var currentTime = 0;var time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));var easingEquations = { easeOutSine: function (pos) {
				return Math.sin(pos * (Math.PI / 2));
			}, easeInOutSine: function (pos) {
				return -0.5 * (Math.cos(Math.PI * pos) - 1);
			}, easeInOutQuint: function (pos) {
				if ((pos /= 0.5) < 1) {
					return 0.5 * Math.pow(pos, 5);
				}return 0.5 * (Math.pow(pos - 2, 5) + 2);
			} };function tick() {
			currentTime += 1 / 60;var p = currentTime / time;var t = easingEquations[easing](p);if (p < 1) {
				requestAnimationFrame(tick);root.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t);
			} else {
				root.scrollTo(0, scrollTargetY);
			}
		}tick();
	};root.scroll2Top = scroll2Top;
})(globalRoot);
/*!
 * Super lightweight script (~1kb) to detect via Javascript events like
 * 'tap' 'dbltap' "swipeup" "swipedown" "swipeleft" "swiperight"
 * on any kind of device.
 * Version: 2.0.1
 * Author: Gianluca Guarini
 * Contact: gianluca.guarini@gmail.com
 * Website: http://www.gianlucaguarini.com/
 * Twitter: @gianlucaguarini
 * Copyright (c) Gianluca Guarini
 * @see {@link https://github.com/GianlucaGuarini/Tocca.js/blob/master/Tocca.js}
 * passes jshint
 */
(function (doc, win) {
	"use strict";
	if (typeof doc.createEvent !== "function") {
		return false;
	}var pointerEventSupport = function (type) {
		var lo = type.toLowerCase(),
		    ms = "MS" + type;return navigator.msPointerEnabled ? ms : win.PointerEvent ? lo : false;
	},
	    defaults = { useJquery: !win.IGNORE_JQUERY && typeof jQuery !== "undefined", swipeThreshold: win.SWIPE_THRESHOLD || 100, tapThreshold: win.TAP_THRESHOLD || 150, dbltapThreshold: win.DBL_TAP_THRESHOLD || 200, longtapThreshold: win.LONG_TAP_THRESHOLD || 1000, tapPrecision: win.TAP_PRECISION / 2 || 60 / 2, justTouchEvents: win.JUST_ON_TOUCH_DEVICES },
	    wasTouch = false,
	    touchevents = { touchstart: pointerEventSupport("PointerDown") || "touchstart", touchend: pointerEventSupport("PointerUp") || "touchend", touchmove: pointerEventSupport("PointerMove") || "touchmove" },
	    isTheSameFingerId = function (e) {
		return !e.pointerId || typeof pointerId === "undefined" || e.pointerId === pointerId;
	},
	    setListener = function (elm, events, callback) {
		var eventsArray = events.split(" "),
		    i = eventsArray.length;while (i--) {
			elm.addEventListener(eventsArray[i], callback, false);
		}
	},
	    getPointerEvent = function (event) {
		return event.targetTouches ? event.targetTouches[0] : event;
	},
	    getTimestamp = function () {
		return new Date().getTime();
	},
	    sendEvent = function (elm, eventName, originalEvent, data) {
		var customEvent = doc.createEvent("Event");customEvent.originalEvent = originalEvent;data = data || {};data.x = currX;data.y = currY;data.distance = data.distance;if (defaults.useJquery) {
			customEvent = jQuery.Event(eventName, { originalEvent: originalEvent });jQuery(elm).trigger(customEvent, data);
		}if (customEvent.initEvent) {
			for (var key in data) {
				if (data.hasOwnProperty(key)) {
					customEvent[key] = data[key];
				}
			}customEvent.initEvent(eventName, true, true);elm.dispatchEvent(customEvent);
		}while (elm) {
			if (elm["on" + eventName]) {
				elm["on" + eventName](customEvent);
			}elm = elm.parentNode;
		}
	},
	    onTouchStart = function (e) {
		if (!isTheSameFingerId(e)) {
			return;
		}pointerId = e.pointerId;if (e.type !== "mousedown") {
			wasTouch = true;
		}if (e.type === "mousedown" && wasTouch) {
			return;
		}var pointer = getPointerEvent(e);cachedX = currX = pointer.pageX;cachedY = currY = pointer.pageY;longtapTimer = setTimeout(function () {
			sendEvent(e.target, "longtap", e);target = e.target;
		}, defaults.longtapThreshold);timestamp = getTimestamp();tapNum++;
	},
	    onTouchEnd = function (e) {
		if (!isTheSameFingerId(e)) {
			return;
		}pointerId = undefined;if (e.type === "mouseup" && wasTouch) {
			wasTouch = false;return;
		}var eventsArr = [],
		    now = getTimestamp(),
		    deltaY = cachedY - currY,
		    deltaX = cachedX - currX;clearTimeout(dblTapTimer);clearTimeout(longtapTimer);if (deltaX <= -defaults.swipeThreshold) {
			eventsArr.push("swiperight");
		}if (deltaX >= defaults.swipeThreshold) {
			eventsArr.push("swipeleft");
		}if (deltaY <= -defaults.swipeThreshold) {
			eventsArr.push("swipedown");
		}if (deltaY >= defaults.swipeThreshold) {
			eventsArr.push("swipeup");
		}if (eventsArr.length) {
			for (var i = 0; i < eventsArr.length; i++) {
				var eventName = eventsArr[i];sendEvent(e.target, eventName, e, { distance: { x: Math.abs(deltaX), y: Math.abs(deltaY) } });
			}tapNum = 0;
		} else {
			if (cachedX >= currX - defaults.tapPrecision && cachedX <= currX + defaults.tapPrecision && cachedY >= currY - defaults.tapPrecision && cachedY <= currY + defaults.tapPrecision) {
				if (timestamp + defaults.tapThreshold - now >= 0) {
					sendEvent(e.target, tapNum >= 2 && target === e.target ? "dbltap" : "tap", e);target = e.target;
				}
			}dblTapTimer = setTimeout(function () {
				tapNum = 0;
			}, defaults.dbltapThreshold);
		}
	},
	    onTouchMove = function (e) {
		if (!isTheSameFingerId(e)) {
			return;
		}if (e.type === "mousemove" && wasTouch) {
			return;
		}var pointer = getPointerEvent(e);currX = pointer.pageX;currY = pointer.pageY;
	},
	    tapNum = 0,
	    pointerId,
	    currX,
	    currY,
	    cachedX,
	    cachedY,
	    timestamp,
	    target,
	    dblTapTimer,
	    longtapTimer;setListener(doc, touchevents.touchstart + (defaults.justTouchEvents ? "" : " mousedown"), onTouchStart);setListener(doc, touchevents.touchend + (defaults.justTouchEvents ? "" : " mouseup"), onTouchEnd);setListener(doc, touchevents.touchmove + (defaults.justTouchEvents ? "" : " mousemove"), onTouchMove);win.tocca = function (options) {
		for (var opt in options) {
			if (options.hasOwnProperty(opt)) {
				defaults[opt] = options[opt];
			}
		}return defaults;
	};
})(document, globalRoot);
/*!
 * modified JavaScript Cookie - v2.1.3
 * @see {@link https://github.com/js-cookie/js-cookie}
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 * Cookies.set('name', 'value');
 * Create a cookie that expires 7 days from now, valid across the entire site:
 * Cookies.set('name', 'value', { expires: 7 });
 * Create an expiring cookie, valid to the path of the current page:
 * Cookies.set('name', 'value', { expires: 7, path: '' });
 * Cookies.get('name'); // => 'value'
 * Cookies.get('nothing'); // => undefined
 * Read all visible cookies:
 * Cookies.get(); // => { name: 'value' }
 * Cookies.remove('name');
 * Delete a cookie valid to the path of the current page:
 * Cookies.set('name', 'value', { path: '' });
 * Cookies.remove('name'); // fail!
 * Cookies.remove('name', { path: '' }); // removed!
 * IMPORTANT! when deleting a cookie, you must pass the exact same path
 * and domain attributes that was used to set the cookie,
 * unless you're relying on the default attributes.
 * removed AMD, CJS, ES6 wrapper
 * fixed this
 * @see {@link https://github.com/js-cookie/js-cookie/blob/master/src/js.cookie.js}
 * passes jshint
 */
(function (root) {
	"use strict";
	var Cookies = function () {
		function extend() {
			var i = 0;var result = {};for (; i < arguments.length; i++) {
				var attributes = arguments[i];for (var key in attributes) {
					if (attributes.hasOwnProperty(key)) {
						result[key] = attributes[key];
					}
				}
			}return result;
		}function init(converter) {
			var api = function (key, value, attributes) {
				var _this = this;var result;if (typeof document === "undefined") {
					return;
				}if (arguments.length > 1) {
					attributes = extend({ path: '/' }, api.defaults, attributes);if (typeof attributes.expires === "number") {
						var expires = new Date();expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);attributes.expires = expires;
					}try {
						result = JSON.stringify(value);if (/^[\{\[]/.test(result)) {
							value = result;
						}
					} catch (e) {}if (!converter.write) {
						value = encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
					} else {
						value = converter.write(value, key);
					}key = encodeURIComponent(String(key));key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);key = key.replace(/[\(\)]/g, escape);var ret = document.cookie = [key, '=', value, attributes.expires ? '; expires=' + attributes.expires.toUTCString() : '', attributes.path ? '; path=' + attributes.path : '', attributes.domain ? '; domain=' + attributes.domain : '', attributes.secure ? '; secure' : ''].join('');return ret;
				}if (!key) {
					result = {};
				}var cookies = document.cookie ? document.cookie.split("; ") : [];var rdecode = /(%[0-9A-Z]{2})+/g;var i = 0;for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');var cookie = parts.slice(1).join('=');if (cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}try {
						var name = parts[0].replace(rdecode, decodeURIComponent);cookie = converter.read ? converter.read(cookie, name) : converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);if (_this.json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}if (key === name) {
							result = cookie;break;
						}if (!key) {
							result[name] = cookie;
						}
					} catch (e) {}
				}return result;
			};api.set = api;api.get = function (key) {
				return api.call(api, key);
			};api.getJSON = function () {
				return api.apply({ json: true }, [].slice.call(arguments));
			};api.defaults = {};api.remove = function (key, attributes) {
				api(key, '', extend(attributes, { expires: -1 }));
			};api.withConverter = init;return api;
		}return init(function () {});
	}();root.Cookies = Cookies;
})(globalRoot);
/*!
 * modified verge 1.9.1+201402130803
 * @see {@link https://github.com/ryanve/verge}
 * MIT License 2013 Ryan Van Etten
 * removed module
 * converted to dot notation
 * added &&r.left<=viewportW()&&(0!==el.offsetHeight);
 * added &&r.left<=viewportW()&&(0!==el.offsetHeight);
 * added &&r.top<=viewportH()&&(0!==el.offsetHeight);
 * Substitute inViewport with: inY on vertical sites, inX on horizontal ones.
 * On pages without horizontal scroll, inX is always true.
 * On pages without vertical scroll, inY is always true.
 * If the viewport width is >= the document width, then inX is always true.
 * bug: inViewport returns true if element is hidden
 * @see {@link https://github.com/ryanve/verge/issues/19}
 * @see {@link https://github.com/ryanve/verge/blob/master/verge.js}
 * passes jshint
 */
(function (root) {
	"use strict";
	var verge = function () {
		var xports = {},
		    win = typeof root !== "undefined" && root,
		    doc = typeof document !== "undefined" && document,
		    docElem = doc && doc.documentElement,
		    matchMedia = win.matchMedia || win.msMatchMedia,
		    mq = matchMedia ? function (q) {
			return !!matchMedia.call(win, q).matches;
		} : function () {
			return false;
		},
		    viewportW = xports.viewportW = function () {
			var a = docElem.clientWidth,
			    b = win.innerWidth;return a < b ? b : a;
		},
		    viewportH = xports.viewportH = function () {
			var a = docElem.clientHeight,
			    b = win.innerHeight;return a < b ? b : a;
		};xports.mq = mq;xports.matchMedia = matchMedia ? function () {
			return matchMedia.apply(win, arguments);
		} : function () {
			return {};
		};function viewport() {
			return { "width": viewportW(), "height": viewportH() };
		}xports.viewport = viewport;xports.scrollX = function () {
			return win.pageXOffset || docElem.scrollLeft;
		};xports.scrollY = function () {
			return win.pageYOffset || docElem.scrollTop;
		};function calibrate(coords, cushion) {
			var o = {};cushion = +cushion || 0;o.width = (o.right = coords.right + cushion) - (o.left = coords.left - cushion);o.height = (o.bottom = coords.bottom + cushion) - (o.top = coords.top - cushion);return o;
		}function rectangle(el, cushion) {
			el = el && !el.nodeType ? el[0] : el;if (!el || 1 !== el.nodeType) {
				return false;
			}return calibrate(el.getBoundingClientRect(), cushion);
		}xports.rectangle = rectangle;function aspect(o) {
			o = null === o ? viewport() : 1 === o.nodeType ? rectangle(o) : o;var h = o.height,
			    w = o.width;h = typeof h === "function" ? h.call(o) : h;w = typeof w === "function" ? w.call(o) : w;return w / h;
		}xports.aspect = aspect;xports.inX = function (el, cushion) {
			var r = rectangle(el, cushion);return !!r && r.right >= 0 && r.left <= viewportW() && 0 !== el.offsetHeight;
		};xports.inY = function (el, cushion) {
			var r = rectangle(el, cushion);return !!r && r.bottom >= 0 && r.top <= viewportH() && 0 !== el.offsetHeight;
		};xports.inViewport = function (el, cushion) {
			var r = rectangle(el, cushion);return !!r && r.bottom >= 0 && r.right >= 0 && r.top <= viewportH() && r.left <= viewportW() && 0 !== el.offsetHeight;
		};return xports;
	}();root.verge = verge;
})(globalRoot);
/*!
 * return image is loaded promise
 * @see {@link https://jsfiddle.net/englishextra/56pavv7d/}
 * @param {String|Object} s image path string or HTML DOM Image Object
 * var m = document.querySelector("img") || "";
 * var s = m.src || "";
 * imagePromise(m).then(function (r) {
 * alert(r);
 * }).catch (function (err) {
 * alert(err);
 * });
 * imagePromise(s).then(function (r) {
 * alert(r);
 * }).catch (function (err) {
 * alert(err);
 * });
 * @see {@link https://gist.github.com/englishextra/3e95d301d1d47fe6e26e3be198f0675e}
 * passes jshint
 */
(function (root) {
	"use strict";
	var imagePromise = function (s) {
		if (root.Promise) {
			return new Promise(function (y, n) {
				var f = function (e, p) {
					e.onload = function () {
						y(p);
					};e.onerror = function () {
						n(p);
					};e.src = p;
				};if ("string" === typeof s) {
					var a = new Image();f(a, s);
				} else {
					if ("img" !== s.tagName) {
						return Promise.reject();
					} else {
						if (s.src) {
							f(s, s.src);
						}
					}
				}
			});
		} else {
			throw new Error("Promise is not in global object");
		}
	};globalRoot.imagePromise = imagePromise;
})(globalRoot);
/*!
 * modified Simple lightbox effect in pure JS
 * @see {@link https://github.com/squeral/lightbox}
 * @see {@link https://github.com/squeral/lightbox/blob/master/lightbox.js}
 * @params {Object} elem Node element
 * @params {Object} [rate] debounce rate, default 500ms
 * new IframeLightbox(elem)
 * passes jshint
 */
(function (root) {
	"use strict";
	var d = document,
	    aEL = "addEventListener",
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    cE = "createElement",
	    cL = "classList",
	    aC = "appendChild",
	    ds = "dataset",
	    containerClass = "iframe-lightbox",
	    isLoadedClass = "is-loaded",
	    isOpenedClass = "is-opened",
	    isShowingClass = "is-showing";var IframeLightbox = function (elem, rate) {
		if (elem.nodeName) {
			this.trigger = elem;this.rate = rate || 500;this.el = d[gEBCN](containerClass)[0] || "";this.body = this.el ? this.el[gEBCN]("body")[0] : "";this.content = this.el ? this.el[gEBCN]("content")[0] : "";this.href = elem[ds].src || "";this.paddingBottom = elem[ds].paddingBottom || "";this.init();
		} else {
			return;
		}
	};IframeLightbox.prototype.init = function () {
		var _this = this;if (!this.el) {
			this.create();
		}var debounce = function (func, wait) {
			var timeout, args, context, timestamp;return function () {
				context = this;args = [].slice.call(arguments, 0);timestamp = new Date();var later = function () {
					var last = new Date() - timestamp;if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;func.apply(context, args);
					}
				};if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};var handleOpenIframeLightbox = function (e) {
			e.preventDefault();_this.open();
		};var debounceHandleOpenIframeLightbox = debounce(handleOpenIframeLightbox, this.rate);this.trigger[aEL]("click", debounceHandleOpenIframeLightbox);
	};IframeLightbox.prototype.create = function () {
		var _this = this,
		    bd = d[cE]("div");this.el = d[cE]("div");this.content = d[cE]("div");this.body = d[cE]("div");this.el[cL].add(containerClass);bd[cL].add("backdrop");this.content[cL].add("content");this.body[cL].add("body");this.el[aC](bd);this.content[aC](this.body);this.contentHolder = d[cE]("div");this.contentHolder[cL].add("content-holder");this.contentHolder[aC](this.content);this.el[aC](this.contentHolder);d.body[aC](this.el);bd[aEL]("click", function () {
			_this.close();
		});var clearBody = function (e) {
			if (_this.isOpen()) {
				return;
			}_this.el[cL].remove(isShowingClass);_this.body.innerHTML = "";
		};this.el[aEL]("transitionend", clearBody, false);this.el[aEL]("webkitTransitionEnd", clearBody, false);this.el[aEL]("mozTransitionEnd", clearBody, false);this.el[aEL]("msTransitionEnd", clearBody, false);
	};IframeLightbox.prototype.loadIframe = function () {
		this.iframeId = containerClass + Date.now();this.body.innerHTML = '<iframe src="' + this.href + '" name="' + this.iframeId + '" id="' + this.iframeId + '" onload="this.style.opacity=1;" style="opacity:0;border:none;" scrolling="no" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" frameborder="no" title="Embedded Content"></iframe>';(function (iframeId, body) {
			d[gEBI](iframeId).onload = function () {
				this.style.opacity = 1;body[cL].add(isLoadedClass);
			};
		})(this.iframeId, this.body);
	};IframeLightbox.prototype.open = function () {
		this.loadIframe();if (this.paddingBottom) {
			this.content.style.paddingBottom = this.paddingBottom;
		} else {
			this.content.removeAttribute("style");
		}this.el[cL].add(isShowingClass);this.el[cL].add(isOpenedClass);
	};IframeLightbox.prototype.close = function () {
		this.el[cL].remove(isOpenedClass);this.body[cL].remove(isLoadedClass);
	};IframeLightbox.prototype.isOpen = function () {
		return this.el[cL].contains(isOpenedClass);
	};root.IframeLightbox = IframeLightbox;
})(globalRoot);
/*!
 * add js class to html element
 */
(function (classes) {
	"use strict";
	if (classes) {
		classes.add("js");
	}
})(document.documentElement.classList || "");
/*!
 * modified MediaHack - (c) 2013 Pomke Nohkan MIT LICENCED.
 * @see {@link https://gist.github.com/englishextra/ff8c9dde94abe32a9d7c4a65e0f2ccac}
 * @see {@link https://jsfiddle.net/englishextra/xg7ce8kc/}
 * removed className fallback and additionally
 * returns earlyDeviceOrientation,earlyDeviceSize
 * Add media query classes to DOM nodes
 * @see {@link https://github.com/pomke/mediahack/blob/master/mediahack.js}
 */
(function (root, selectors) {
	"use strict";
	var orientation,
	    size,
	    f = function (a) {
		var b = a.split(" ");if (selectors) {
			for (var c = 0; c < b.length; c += 1) {
				a = b[c];selectors.add(a);
			}
		}
	},
	    g = function (a) {
		var b = a.split(" ");if (selectors) {
			for (var c = 0; c < b.length; c += 1) {
				a = b[c];selectors.remove(a);
			}
		}
	},
	    h = { landscape: "all and (orientation:landscape)", portrait: "all and (orientation:portrait)" },
	    k = { small: "all and (max-width:768px)", medium: "all and (min-width:768px) and (max-width:991px)", large: "all and (min-width:992px)" },
	    d,
	    mM = "matchMedia",
	    m = "matches",
	    o = function (a, b) {
		var c = function (a) {
			if (a[m]) {
				f(b);orientation = b;
			} else {
				g(b);
			}
		};c(a);a.addListener(c);
	},
	    s = function (a, b) {
		var c = function (a) {
			if (a[m]) {
				f(b);size = b;
			} else {
				g(b);
			}
		};c(a);a.addListener(c);
	};for (d in h) {
		if (h.hasOwnProperty(d)) {
			o(root[mM](h[d]), d);
		}
	}for (d in k) {
		if (k.hasOwnProperty(d)) {
			s(root[mM](k[d]), d);
		}
	}root.earlyDeviceOrientation = orientation || "";root.earlyDeviceSize = size || "";
})(globalRoot, document.documentElement.classList || "");
/*!
 * add mobile or desktop class
 * using Detect Mobile Browsers | Open source mobile phone detection
 * Regex updated: 1 August 2014
 * detectmobilebrowsers.com
 * @see {@link https://github.com/heikojansen/plack-middleware-detectmobilebrowsers}
 */
(function (root, html, mobile, desktop, opera) {
	"use strict";
	var selector = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(opera) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(opera.substr(0, 4)) ? mobile : desktop;if (html) {
		html.classList.add(selector);
	}root.earlyDeviceType = selector || "";
})(globalRoot, document.documentElement || "", "mobile", "desktop", navigator.userAgent || navigator.vendor || globalRoot.opera);
/*!
 * add svg support class
 */
(function (root, html, selector) {
	"use strict";
	selector = document.implementation.hasFeature("http://www.w3.org/2000/svg", "1.1") ? selector : "no-" + selector;if (html) {
		html.classList.add(selector);
	}root.earlySvgSupport = selector || "";
})(globalRoot, document.documentElement || "", "svg");
/*!
 * add svgasimg support class
 */
(function (root, html, selector) {
	"use strict";
	selector = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") ? selector : "no-" + selector;if (html) {
		html.classList.add(selector);
	}root.earlySvgasimgSupport = selector || "";
})(globalRoot, document.documentElement || "", "svgasimg");
/*!
 * add touch support class
 * @see {@link https://gist.github.com/englishextra/3cb22aab31a52b6760b5921e4fe8db95}
 * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
 */
(function (root, html, selector) {
	"use strict";
	selector = "ontouchstart" in html ? selector : "no-" + selector;if (html) {
		html.classList.add(selector);
	}root.earlyHasTouch = selector || "";
})(globalRoot, document.documentElement || "", "touch");
/*!
 * return date in YYYY-MM-DD format
 */
(function (root) {
	"use strict";
	var newDate = new Date(),
	    newDay = newDate.getDate(),
	    newYear = newDate.getFullYear(),
	    newMonth = newDate.getMonth();newMonth += 1;if (10 > newDay) {
		newDay = "0" + newDay;
	}if (10 > newMonth) {
		newMonth = "0" + newMonth;
	}root.earlyFnGetYyyymmdd = newYear + "-" + newMonth + "-" + newDay;
})(globalRoot);
/*!
 * append details to title
 */
var userBrowsingDetails = " [" + (earlyFnGetYyyymmdd ? earlyFnGetYyyymmdd : "") + (earlyDeviceType ? " " + earlyDeviceType : "") + (earlyDeviceSize ? " " + earlyDeviceSize : "") + (earlyDeviceOrientation ? " " + earlyDeviceOrientation : "") + (earlySvgSupport ? " " + earlySvgSupport : "") + (earlySvgasimgSupport ? " " + earlySvgasimgSupport : "") + (earlyHasTouch ? " " + earlyHasTouch : "") + "]";
if (document.title) {
	document.title = document.title + userBrowsingDetails;
}
/*!
 * modified JavaScript Sync/Async forEach - v0.1.2 - 1/10/2012
 * @see {@link https://github.com/millermedeiros/amd-utils/issues/17}
 * @see {@link https://github.com/cowboy/javascript-sync-async-foreach}
 * @see {@link http://stackoverflow.com/questions/22335853/hack-to-convert-javascript-number-to-uint32}
 * @see {@link https://jsfiddle.net/englishextra/voq0bb62/}
 * Copyright (c) 2012 "Cowboy" Ben Alman; Licensed MIT
 * removed Node.js / browser support wrapper function
 * @param {Object} a Any object to walk through
 * @param {Object} b The sync callback function
 * @param {Object} [c] The async callback function
 * forEach(a,function(e){console.log("eachCallback: "+e);},!1});
 * forEach(a,function(e){console.log("eachCallback: "+e);},function(){console.log("doneCallback");});
 * @see {@link https://github.com/cowboy/javascript-sync-async-foreach/blob/master/dist/ba-foreach.js}
 * passes jshint
 */
(function (root) {
	"use strict";
	root.forEach = function (arr, eachFn, doneFn) {
		var i = -1;var len = function (val) {
			val = +val;if (!isFinite(val) || !val) {
				return 0;
			}return function (left, right) {
				return left - right * Math.floor(left / right);
			}(Math.floor(val), Math.pow(2, 32));
		}(arr.length);(function next(result) {
			var async;var abort = result === false;do {
				++i;
			} while (!(i in arr) && i !== len);if (abort || i === len) {
				if (doneFn) {
					doneFn(!abort, arr);
				}return;
			}result = eachFn.call({ async: function () {
					async = true;return next;
				} }, arr[i], i, arr);if (!async) {
				next(result);
			}
		})();
	};
})(globalRoot);
/*!
 * Timer management (setInterval / setTimeout)
 * @param {Function} fn
 * @param {Number} ms
 * var timers = new Timers();
 * timers.timeout(function () {
 * console.log("before:", timers);
 * timers.clear();
 * timers = null;
 * doSomething();
 * console.log("after:", timers);
 * }, 3000);
 * @see {@link https://github.com/component/timers}
 * @see {@link https://github.com/component/timers/blob/master/index.js}
 * passes jshint
 */
(function (root) {
	var Timers = function (ids) {
		this.ids = ids || [];
	};Timers.prototype.timeout = function (fn, ms) {
		var id = setTimeout(fn, ms);this.ids.push(id);return id;
	};Timers.prototype.interval = function (fn, ms) {
		var id = setInterval(fn, ms);this.ids.push(id);return id;
	};Timers.prototype.clear = function () {
		this.ids.forEach(clearTimeout);this.ids = [];
	};root.Timers = Timers;
})(globalRoot);
/*!
 * modified Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 * @see {@link https://github.com/component/debounce/blob/master/index.js}
 * passes jshint
 */
(function (root, undefined) {
	var debounce = function (func, wait, immediate) {
		var timeout, args, context, timestamp, result;if (undefined === wait || null === wait) {
			wait = 100;
		}function later() {
			var last = Date.now() - timestamp;if (last < wait && last >= 0) {
				timeout = setTimeout(later, wait - last);
			} else {
				timeout = null;if (!immediate) {
					result = func.apply(context, args);context = args = null;
				}
			}
		}var debounced = function () {
			context = this;args = arguments;timestamp = Date.now();var callNow = immediate && !timeout;if (!timeout) {
				timeout = setTimeout(later, wait);
			}if (callNow) {
				result = func.apply(context, args);context = args = null;
			}return result;
		};debounced.clear = function () {
			if (timeout) {
				clearTimeout(timeout);timeout = null;
			}
		};debounced.flush = function () {
			if (timeout) {
				result = func.apply(context, args);context = args = null;clearTimeout(timeout);timeout = null;
			}
		};return debounced;
	};root.debounce = debounce;
})(globalRoot);
/*!
 * modified Returns a new function that, when invoked, invokes `func` at most once per `wait` milliseconds.
 * @param {Function} func Function to wrap.
 * @param {Number} wait Number of milliseconds that must elapse between `func` invocations.
 * @return {Function} A new function that wraps the `func` function passed in.
 * @see {@link https://github.com/component/throttle/blob/master/index.js}
 * passes jshint
 */
(function (root, undefined) {
	var throttle = function (func, wait) {
		var ctx, args, rtn, timeoutID;var last = 0;return function throttled() {
			ctx = this;args = arguments;var delta = new Date() - last;if (!timeoutID) {
				if (delta >= wait) {
					call();
				} else {
					timeoutID = setTimeout(call, wait - delta);
				}
			}return rtn;
		};function call() {
			timeoutID = 0;last = +new Date();rtn = func.apply(ctx, args);ctx = null;args = null;
		}
	};root.throttle = throttle;
})(globalRoot);
/*!
 * A simple promise-compatible "document ready" event handler with a few extra treats.
 * With browserify/webpack:
 * const ready = require('document-ready-promise')
 * ready().then(function(){})
 * If in a non-commonjs environment, just include the script. It will attach document.ready for you.
 * document.ready().then(function() {})
 * The document.ready promise will preserve any values that you may be passing through the promise chain.
 * Using ES2015 and fetch
 * fetch(new Request('kitten.jpg'))
 * .then(response => response.blob())
 * .then(document.ready)
 * .then(blob => document.querySelector("img").src = URL.createObjectURL(blob))
 * @see {@link https://github.com/michealparks/document-ready-promise}
 * @see {@link https://github.com/michealparks/document-ready-promise/blob/master/document-ready-promise.js}
 * passes jshint
 */
(function (root) {
	"use strict";
	var d = root.document;d.ready = function (chainVal) {
		var loaded = /^loaded|^i|^c/.test(d.readyState),
		    DOMContentLoaded = "DOMContentLoaded",
		    load = "load";return new Promise(function (resolve) {
			if (loaded) {
				return resolve(chainVal);
			}function onReady() {
				resolve(chainVal);d.removeEventListener(DOMContentLoaded, onReady);root.removeEventListener(load, onReady);
			}d.addEventListener(DOMContentLoaded, onReady);root.addEventListener(load, onReady);
		});
	};
})(globalRoot);
/*!
 * How can I check if a JS file has been included already?
 * @see {@link https://gist.github.com/englishextra/403a0ca44fc5f495400ed0e20bc51d47}
 * @see {@link https://stackoverflow.com/questions/18155347/how-can-i-check-if-a-js-file-has-been-included-already}
 * @param {String} s path string
 * scriptIsLoaded(s)
 */
(function (root) {
	"use strict";
	var scriptIsLoaded = function (s) {
		for (var b = document.getElementsByTagName("script") || "", a = 0; a < b.length; a += 1) {
			if (b[a].getAttribute("src") === s) {
				return !0;
			}
		}return !1;
	};root.scriptIsLoaded = scriptIsLoaded;
})(globalRoot);
/*!
 * Load .json file, but don't JSON.parse it
 * modified JSON with JS.md
 * @see {@link https://gist.github.com/thiagodebastos/08ea551b97892d585f17}
 * @see {@link https://gist.github.com/englishextra/e2752e27761649479f044fd93a602312}
 * @param {String} url path string
 * @param {Object} [callback] callback function
 * @param {Object} [onerror] on error callback function
 * loadUnparsedJSON(url,callback,onerror)
 */
(function (root) {
	"use strict";
	var loadUnparsedJSON = function (url, callback, onerror) {
		var cb = function (string) {
			return callback && "function" === typeof callback && callback(string);
		},
		    x = root.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");x.overrideMimeType("application/json;charset=utf-8");x.open("GET", url, !0);x.withCredentials = !1;x.onreadystatechange = function () {
			if (x.status === "404" || x.status === 0) {
				console.log("Error XMLHttpRequest-ing file", x.status);return onerror && "function" === typeof onerror && onerror();
			} else if (x.readyState === 4 && x.status === 200 && x.responseText) {
				cb(x.responseText);
			}
		};x.send(null);
	};root.loadUnparsedJSON = loadUnparsedJSON;
})(globalRoot);
/*!
 * parse JSON without try / catch
 * @param {String} a JSON string
 * @see {@link http://stackoverflow.com/questions/11182924/how-to-check-if-javascript-object-is-json}
 * safelyParseJSON(a)
 */
(function (root) {
	"use strict";
	var safelyParseJSON = function (a) {
		var isJson = function (obj) {
			var t = typeof obj;return ['boolean', 'number', "string", 'symbol', "function"].indexOf(t) === -1;
		};if (!isJson(a)) {
			return JSON.parse(a);
		} else {
			return a;
		}
	};root.safelyParseJSON = safelyParseJSON;
})(globalRoot);
/*!
 * loop over the Array
 * @see {@link https://stackoverflow.com/questions/18238173/javascript-loop-through-json-array}
 * @see {@link https://gist.github.com/englishextra/b4939b3430da4b55d731201460d3decb}
 * @param {String} str any text string
 * @param {Int} max a whole positive number
 * @param {String} add any text string
 * truncString(str,max,add)
 */
(function (root) {
	"use strict";
	var truncString = function (str, max, add) {
		add = add || "\u2026";return "string" === typeof str && str.length > max ? str.substring(0, max) + add : str;
	};root.truncString = truncString;
})(globalRoot);
/*!
 * fix en ru / ru en typo
 * modified sovtime.ru/soft/convert.html
 * @see {@link https://gist.github.com/englishextra/8f398bb7a3e438b692352a3c114a13ae}
 * @see {@link https://jsfiddle.net/englishextra/6p150wu1/}
 * @see {@link https://jsbin.com/runoju/edit?js,output}
 * @param {String} e any text string
 * @param {String} a "ru" or "en", default "en"
 * @param {String} b "en" or "ru", default "ru"
 * fixEnRuTypo(e,a,b)
 */
(function (root) {
	"use strict";
	var fixEnRuTypo = function (e, a, b) {
		var c = "";if ("ru" === a && "en" === b) {
			a = '\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044c\u044b\u044d\u044e\u044f\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042c\u042b\u042d\u042e\u042f"\u2116;:?/.,';b = "f,dult`;pbqrkvyjghcnea[wxio]ms'.zF<DULT~:PBQRKVYJGHCNEA{WXIO}MS'>Z@#$^&|/?";
		} else {
			a = "f,dult`;pbqrkvyjghcnea[wxio]ms'.zF<DULT~:PBQRKVYJGHCNEA{WXIO}MS'>Z@#$^&|/?";b = '\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044c\u044b\u044d\u044e\u044f\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042c\u042b\u042d\u042e\u042f"\u2116;:?/.,';
		}for (var d = 0; d < e.length; d++) {
			var f = a.indexOf(e.charAt(d));if (c > f) {
				c += e.charAt(d);
			} else {
				c += b.charAt(f);
			}
		}return c;
	};root.fixEnRuTypo = fixEnRuTypo;
})(globalRoot);
/*!
 * remove element from DOM
 * @see {@link https://gist.github.com/englishextra/d2a286f64d404052fbbdac1e416ab808}
 * @param {Object} e an Element to remove
 * removeElement(e)
 */
(function (root) {
	"use strict";
	var removeElement = function (e) {
		var r = "remove",
		    pN = "parentNode";if (e) {
			if ("undefined" !== typeof e[r]) {
				return e[r]();
			} else {
				return e[pN] && e[pN].removeChild(e);
			}
		}
	};root.removeElement = removeElement;
})(globalRoot);
/*!
 * remove all children of parent element
 * @see {@link https://gist.github.com/englishextra/da26bf39bc90fd29435e8ae0b409ddc3}
 * @param {Object} e parent HTML Element
 * removeChildren(e)
 */
(function (root) {
	"use strict";
	var removeChildren = function (e) {
		return function () {
			if (e && e.firstChild) {
				for (; e.firstChild;) {
					e.removeChild(e.firstChild);
				}
			}
		}();
	};root.removeChildren = removeChildren;
})(globalRoot);
/*!
 * append node into other with fragment
 * @see {@link https://gist.github.com/englishextra/0ff3204d5fb285ef058d72f31e3af766}
 * @param {String|object} e an HTML Element to append
 * @param {Object} a target HTML Element
 * appendFragment(e,a)
 */
(function (root) {
	"use strict";
	var appendFragment = function (e, a) {
		var d = document;a = a || d.getElementsByTagNames("body")[0] || "";return function () {
			if (e) {
				var d = document,
				    df = d.createDocumentFragment() || "",
				    aC = "appendChild";if ("string" === typeof e) {
					e = d.createTextNode(e);
				}df[aC](e);a[aC](df);
			}
		}();
	};root.appendFragment = appendFragment;
})(globalRoot);
/*!
 * Adds Element as fragment BEFORE NeighborElement
 * @see {@link https://gist.github.com/englishextra/fa19e39ce84982b17fc76485db9d1bea}
 * @param {String|object} e HTML Element to prepend before before
 * @param {Object} a target HTML Element
 * prependFragmentBefore(e,a)
 */
(function (root) {
	var prependFragmentBefore = function (e, a) {
		if ("string" === typeof e) {
			e = document.createTextNode(e);
		}var p = a.parentNode || "",
		    df = document.createDocumentFragment();return function () {
			if (p) {
				df.appendChild(e);p.insertBefore(df, a);
			}
		}();
	};root.prependFragmentBefore = prependFragmentBefore;
})(globalRoot);
/*!
 * set style display block of an element
 * @param {Object} a an HTML Element
 * setStyleDisplayBlock(a)
 */
(function (root) {
	var setStyleDisplayBlock = function (a) {
		return function () {
			if (a) {
				a.style.display = "block";
			}
		}();
	};root.setStyleDisplayBlock = setStyleDisplayBlock;
})(globalRoot);
/*!
 * set style display none of an element
 * @param {Object} a an HTML Element
 * setStyleDisplayNone(a)
 */
(function (root) {
	var setStyleDisplayNone = function (a) {
		return function () {
			if (a) {
				a.style.display = "none";
			}
		}();
	};root.setStyleDisplayNone = setStyleDisplayNone;
})(globalRoot);
/*!
 * set style opacity of an element
 * @param {Object} a an HTML Element
 * @param {Number} n any positive decimal number 0.00-1.00
 * setStyleOpacity(a,n)
 */
(function (root) {
	var setStyleOpacity = function (a, n) {
		n = n || 1;return function () {
			if (a) {
				a.style.opacity = n;
			}
		}();
	};root.setStyleOpacity = setStyleOpacity;
})(globalRoot);
/*!
 * set style visibility visible of an element
 * @param {Object} a an HTML Element
 * setStyleVisibilityVisible(a)
 */
(function (root) {
	var setStyleVisibilityVisible = function (a) {
		return function () {
			if (a) {
				a.style.visibility = "visible";
			}
		}();
	};root.setStyleVisibilityVisible = setStyleVisibilityVisible;
})(globalRoot);
/*!
 * set style visibility hidden of an element
 * @param {Object} a an HTML Element
 * setStyleVisibilityHidden(a)
 */
(function (root) {
	var setStyleVisibilityHidden = function (a) {
		return function () {
			if (a) {
				a.style.visibility = "hidden";
			}
		}();
	};root.setStyleVisibilityHidden = setStyleVisibilityHidden;
})(globalRoot);
/*!
 * Check if string represents a valid HTML id
 * @see {@link https://gist.github.com/englishextra/b5aaef8b555a3ba84c68a6e251db149d}
 * @see {@link https://jsfiddle.net/englishextra/z19tznau/}
 * @param {String} a text string
 * @param {Int} [full] if true, checks with leading hash/number sign
 * isValidId(a,full)
 */
(function (root) {
	"use strict";
	var isValidId = function (a, full) {
		return full ? /^\#[A-Za-z][-A-Za-z0-9_:.]*$/.test(a) ? !0 : !1 : /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(a) ? !0 : !1;
	};root.isValidId = isValidId;
})(globalRoot);
/*!
 * find element's position
 * @see {@link https://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document}
 * @param {Object} a an HTML element
 * findPos(a).top
 */
(function (root) {
	"use strict";
	var findPos = function (a) {
		a = a.getBoundingClientRect();var b = document.body,
		    c = document.documentElement;return { top: Math.round(a.top + (root.pageYOffset || c.scrollTop || b.scrollTop) - (c.clientTop || b.clientTop || 0)), left: Math.round(a.left + (root.pageXOffset || c.scrollLeft || b.scrollLeft) - (c.clientLeft || b.clientLeft || 0)) };
	};root.findPos = findPos;
})(globalRoot);
/*!
 * modified Unified URL parsing API in the browser and node
 * @see {@link https://github.com/wooorm/parse-link}
 * removed module check
 * @see {@link https://gist.github.com/englishextra/4e9a0498772f05fa5d45cfcc0d8be5dd}
 * @see {@link https://gist.github.com/englishextra/2a7fdabd0b23a8433d5fc148fb788455}
 * @see {@link https://jsfiddle.net/englishextra/fcdds4v6/}
 * @param {String} url URL string
 * @param {Boolean} [true|false] if true, returns protocol:, :port, /pathname, ?search, ?query, #hash
 * if set to false, returns protocol, port, pathname, search, query, hash
 * alert(parseLink("http://localhost/search?s=t&v=z#dev").href|
 * origin|host|port|hash|hostname|pathname|protocol|search|query|isAbsolute|isRelative|isCrossDomain);
 */
/*jshint bitwise: false */
(function (root) {
	"use strict";
	var parseLink = function (url, full) {
		full = full || !1;return function () {
			var _r = function (s) {
				return s.replace(/^(#|\?)/, "").replace(/\:$/, "");
			},
			    l = location || "",
			    _p = function (protocol) {
				switch (protocol) {case "http:":
						return full ? ":" + 80 : 80;case "https:":
						return full ? ":" + 443 : 443;default:
						return full ? ":" + l.port : l.port;}
			},
			    _s = 0 === url.indexOf("//") || !!~url.indexOf("://"),
			    w = root.location || "",
			    _o = function () {
				var o = w.protocol + "//" + w.hostname + (w.port ? ":" + w.port : "");return o || "";
			},
			    _c = function () {
				var c = document.createElement("a");c.href = url;var v = c.protocol + "//" + c.hostname + (c.port ? ":" + c.port : "");return v !== _o();
			},
			    a = document.createElement("a");a.href = url;return { href: a.href, origin: _o(), host: a.host || l.host, port: "0" === a.port || "" === a.port ? _p(a.protocol) : full ? a.port : _r(a.port), hash: full ? a.hash : _r(a.hash), hostname: a.hostname || l.hostname, pathname: a.pathname.charAt(0) !== "/" ? full ? "/" + a.pathname : a.pathname : full ? a.pathname : a.pathname.slice(1), protocol: !a.protocol || ":" === a.protocol ? full ? l.protocol : _r(l.protocol) : full ? a.protocol : _r(a.protocol), search: full ? a.search : _r(a.search), query: full ? a.search : _r(a.search), isAbsolute: _s, isRelative: !_s, isCrossDomain: _c(), hasHTTP: /^(http|https):\/\//i.test(url) ? !0 : !1 };
		}();
	};root.parseLink = parseLink;
})(globalRoot);
/*jshint bitwise: true */
/*!
 * get current protocol - "http" or "https", else return ""
 * @param {Boolean} [force] When set to "true", and the result is empty,
 * the function will return "http"
 * getHTTP(true)
 */
(function (root) {
	"use strict";
	var getHTTP = function (type) {
		return function (force) {
			force = force || "";return "http:" === type ? "http" : "https:" === type ? "https" : force ? "http" : "";
		};
	}(root.location.protocol || "");root.getHTTP = getHTTP;
})(globalRoot);
/*!
 * Open external links in default browser out of Electron / nwjs
 * @see {@link https://gist.github.com/englishextra/b9a8140e1c1b8aa01772375aeacbf49b}
 * @see {@link https://stackoverflow.com/questions/32402327/how-can-i-force-external-links-from-browser-window-to-open-in-a-default-browser}
 * @see {@link https://github.com/nwjs/nw.js/wiki/shell}
 * electron - file: | nwjs - chrome-extension: | http: Intel XDK
 * wont do in electron and nw,
 * so manageExternalLinkAll will set target blank to links
 * var win = w.open(url, "_blank");
 * win.focus();
 * @param {String} url URL/path string
 * openDeviceBrowser(url)
 * detect Node.js
 * @see {@link https://github.com/lyrictenor/node-is-nwjs/blob/master/is-nodejs.js}
 * @returns {Boolean} true or false
 * detect Electron
 * @returns {Boolean} true or false
 * detect NW.js
 * @see {@link https://github.com/lyrictenor/node-is-nwjs/blob/master/index.js}
 * @returns {Boolean} true or false
 */
(function (root) {
	"use strict";
	var isNodejs = "undefined" !== typeof process && "undefined" !== typeof require || "",
	    isElectron = "undefined" !== typeof root && root.process && "renderer" === root.process.type || "",
	    isNwjs = function () {
		if ("undefined" !== typeof isNodejs && isNodejs) {
			try {
				if ("undefined" !== typeof require("nw.gui")) {
					return !0;
				}
			} catch (e) {
				return !1;
			}
		}return !1;
	}(),
	    openDeviceBrowser = function (url) {
		var triggerForElectron = function () {
			var es = isElectron ? require("electron").shell : "";return es ? es.openExternal(url) : "";
		},
		    triggerForNwjs = function () {
			var ns = isNwjs ? require("nw.gui").Shell : "";return ns ? ns.openExternal(url) : "";
		},
		    triggerForHTTP = function () {
			return !0;
		},
		    triggerForLocal = function () {
			return root.open(url, "_system", "scrollbars=1,location=no");
		};if (isElectron) {
			triggerForElectron();
		} else if (isNwjs) {
			triggerForNwjs();
		} else {
			var locationProtocol = root.location.protocol || "",
			    hasHTTP = locationProtocol ? "http:" === locationProtocol ? "http" : "https:" === locationProtocol ? "https" : "" : "";if (hasHTTP) {
				triggerForHTTP();
			} else {
				triggerForLocal();
			}
		}
	};root.openDeviceBrowser = openDeviceBrowser;
})(globalRoot);
/*!
 * init ToProgress and extend methods
 */
var progressBar = new ToProgress({
	id: "top-progress-bar",
	color: "#FF2C40",
	height: "3px",
	duration: 0.2
});
/*!
 * @memberof progressBar
 * @param {Int} [n] a whole positive number
 * progressBar.init(n)
 */
progressBar.init = function (state) {
	state = state || 20;
	return this.increase(state);
};
/*!
 * @memberof progressBar
 * progressBar.complete()
 */
progressBar.complete = function () {
	return this.finish(), this.hide();
};
progressBar.init();
/*!
 * loading spinner
 * @requires Timers
 * @see {@link https://gist.github.com/englishextra/24ef040fbda405f7468da70e4f3b69e7}
 * @param {Object} [callback] callback function
 * @param {Int} [delay] any positive whole number, default: 500
 * LoadingSpinner.show();
 * LoadingSpinner.hide(f,n);
 */
var LoadingSpinner = function () {
	"use strict";

	var d = document,
	    b = d.body || "",
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    cE = "createElement",
	    spinnerClass = "loading-spinner",
	    spinner = d[gEBCN](spinnerClass)[0] || "",
	    isActiveClass = "is-active-loading-spinner";
	/* console.log("triggered function: LoadingSpinner"); */
	if (!spinner) {
		spinner = d[cE]("div");
		spinner[cL].add(spinnerClass);
		appendFragment(spinner, b);
	}
	return {
		show: function () {
			return b[cL].contains(isActiveClass) || b[cL].add(isActiveClass);
		},
		hide: function (callback, delay) {
			delay = delay || 500;
			var timers = new Timers();
			timers.timeout(function () {
				timers.clear();
				timers = null;
				b[cL].remove(isActiveClass);
				if (callback && "function" === typeof callback) {
					callback();
				}
			}, delay);
		}
	};
}();
/*!
 * set click event on external links,
 * so that they open in new browser tab
 * @param {Object} [ctx] context HTML Element
 */
var handleExternalLink = function (url, ev) {
	"use strict";

	ev.stopPropagation();
	ev.preventDefault();
	var logicHandleExternalLink = openDeviceBrowser.bind(null, url),
	    debounceLogicHandleExternalLink = debounce(logicHandleExternalLink, 200);
	debounceLogicHandleExternalLink();
},
    manageExternalLinkAll = function (ctx) {
	"use strict";

	ctx = ctx && ctx.nodeName ? ctx : "";
	var d = document,
	    gEBTN = "getElementsByTagName",
	    linkTag = "a",
	    link = ctx ? ctx[gEBTN](linkTag) || "" : d[gEBTN](linkTag) || "",
	    cL = "classList",
	    aEL = "addEventListener",
	    gA = "getAttribute",
	    isBindedClass = "is-binded",
	    arrange = function (e) {
		if (!e[cL].contains(isBindedClass)) {
			var url = e[gA]("href") || "";
			if (url && parseLink(url).isCrossDomain && parseLink(url).hasHTTP) {
				e.title = "" + (parseLink(url).hostname || "") + " откроется в новой вкладке";
				if ("undefined" !== typeof getHTTP && getHTTP()) {
					e.target = "_blank";
					e.rel = "noopener";
				} else {
					e[aEL]("click", handleExternalLink.bind(null, url));
				}
				e[cL].add(isBindedClass);
			}
		}
	};
	if (link) {
		/* console.log("triggered function: manageExternalLinkAll"); */
		for (var i = 0, l = link.length; i < l; i += 1) {
			arrange(link[i]);
		}
		/* forEach(link, arrange, false); */
	}
};
document.ready().then(manageExternalLinkAll);
/*!
 * notifier42
 * Toast messages with pure JS
 * @see {@link https://gist.github.com/englishextra/5500a860c26d5e262ef3700d822ff698}
 * inspired by github.com/mlcheng/js-toast
 * @param {String|Object} m text string or HTML ELement
 * @param {Int} [n] any positive whole number, default: 0
 * @param {String} t [additioal css class name]
 * var nf=notifier42("message",8000);setTimeout(function(){nf.destroy()},2000);
 */
var Notifier42 = function (msgObj, delay, msgClass) {
	"use strict";

	msgObj = msgObj || "No message passed as argument";
	delay = delay || 0;
	msgClass = msgClass || "";
	var d = document,
	    b = d.body || "",
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    cE = "createElement",
	    aEL = "addEventListener",
	    rEL = "removeEventListener",
	    cls = "notifier42",
	    container = d[gEBCN](cls)[0] || "",
	    an = "animated",
	    an2 = "fadeInUp",
	    an4 = "fadeOutDown";
	/* console.log("triggered function: Notifier42"); */
	if (!container) {
		container = d[cE]("div");
		appendFragment(container, b);
	}
	container[cL].add(cls);
	container[cL].add(an);
	container[cL].add(an2);
	if (msgClass) {
		container[cL].add(msgClass);
	}
	if ("string" === typeof msgObj) {
		msgObj = d.createTextNode(msgObj);
	}
	appendFragment(msgObj, container);
	var clearContainer = function (cb) {
		container[cL].remove(an2);
		container[cL].add(an4);
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			container[cL].remove(an);
			container[cL].remove(an4);
			if (msgClass) {
				container[cL].remove(msgClass);
			}
			removeChildren(container);
			if (cb && "function" === typeof cb) {
				cb();
			}
		}, 400);
	};
	container[aEL]("click", function handleContainer() {
		this[rEL]("click", handleContainer);
		clearContainer();
	});
	if (0 !== delay) {
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			clearContainer();
		}, delay);
	}
	return {
		destroy: function () {
			return clearContainer(removeElement.bind(null, container));
		}
	};
};
/*!
 * notifier42-write-a-comment-on-content
 */
var initNotifier42WriteComment = function () {
	"use strict";

	if ("undefined" !== typeof getHTTP && getHTTP()) {
		var w = globalRoot,
		    d = document,
		    gEBI = "getElementById",
		    cE = "createElement",
		    aEL = "addEventListener",
		    rEL = "removeEventListener",
		    cookieKey = "_notifier42_write_comment_",
		    msgText = "Напишите, что понравилось, а что нет. Регистрироваться не нужно.",
		    locationOrigin = parseLink(w.location.href).origin,
		    showMsg = function () {
			var msgObj = d[cE]("a");
			/*jshint -W107 */
			msgObj.href = "javascript:void(0);";
			appendFragment(msgText, msgObj);
			/*jshint +W107 */
			var handleMsgObj = function (ev) {
				ev.stopPropagation();
				ev.preventDefault();
				msgObj[rEL]("click", handleMsgObj);
				var targetObj = d[gEBI]("disqus_thread") || "";
				scroll2Top(targetObj ? findPos(targetObj).top : 0, 20000);
			};
			msgObj[aEL]("click", handleMsgObj);
			Notifier42(msgObj, 8000);
			Cookies.set(cookieKey, msgText);
		};
		if (!Cookies.get(cookieKey) && locationOrigin) {
			/* console.log("triggered function: initNotifier42WriteMe"); */
			var timers = new Timers();
			timers.timeout(function () {
				timers.clear();
				timers = null;
				showMsg();
			}, 16000);
		}
	}
};
document.ready().then(initNotifier42WriteComment);
/*!
 * init tablesort
 * @see {@link https://github.com/tristen/tablesort}
 */
var initTablesort = function (ctx) {
	"use strict";

	ctx = ctx && ctx.nodeName ? ctx : "";
	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cE = "createElement",
	    tableSortClass = "table-sort",
	    tableSort = ctx ? ctx[gEBCN](tableSortClass) || "" : d[gEBCN](tableSortClass) || "",
	    initScript = function () {
		var arrange = function (e) {
			var tableId = e.id || "";
			if (tableId && w.Tablesort) {
				var table = d[gEBI](tableId) || "",
				    caption = table ? table[gEBTN]("caption")[0] || "" : "";
				if (!caption) {
					var tableCaption = d[cE]("caption");
					prependFragmentBefore(tableCaption, table.firstChild);
					caption = table.firstChild;
				}
				appendFragment("Сортируемая таблица", caption);
				Tablesort(table);
			}
		};
		for (var i = 0, l = tableSort.length; i < l; i += 1) {
			arrange(tableSort[i]);
		}
		/* forEach(tableSort, arrange, false); */
	};
	if (tableSort) {
		/* console.log("triggered function: initTablesort"); */
		var jsUrl = "../../cdn/tablesort/4.0.1/js/tablesort.fixed.min.js";
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl, initScript);
		}
	}
};
document.ready().then(initTablesort);
/*!
 * manage data lightbox img links
 */
var hideImgLightbox = function () {
	"use strict";

	var d = document,
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cL = "classList",
	    container = d[gEBCN]("img-lightbox-container")[0] || "",
	    img = container ? container[gEBTN]("img")[0] || "" : "",
	    an = "animated",
	    an1 = "fadeIn",
	    an2 = "fadeInUp",
	    an3 = "fadeOut",
	    an4 = "fadeOutDown",
	    dummySrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
	    hideContainer = function () {
		container[cL].remove(an1);
		container[cL].add(an3);
		var hideImg = function () {
			container[cL].remove(an);
			container[cL].remove(an3);
			img[cL].remove(an);
			img[cL].remove(an4);
			img.src = dummySrc;
			container.style.display = "none";
		};
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			hideImg();
		}, 400);
	};
	if (container && img) {
		img[cL].remove(an2);
		img[cL].add(an4);
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			hideContainer();
		}, 400);
	}
},
    handleImgLightboxContainer = function () {
	"use strict";

	var rEL = "removeEventListener";
	if (container) {
		container[rEL]("click", handleImgLightboxContainer);
		hideImgLightbox();
	}
},
    handleImgLightboxWindow = function (ev) {
	"use strict";

	var w = globalRoot,
	    rEL = "removeEventListener";
	w[rEL]("keyup", handleImgLightboxWindow);
	if (27 === (ev.which || ev.keyCode)) {
		hideImgLightbox();
	}
},
    manageImgLightboxLinks = function (ctx) {
	"use strict";

	ctx = ctx && ctx.nodeName ? ctx : "";
	var w = globalRoot,
	    d = document,
	    b = d.body || "",
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cL = "classList",
	    cE = "createElement",
	    gA = "getAttribute",
	    aC = "appendChild",
	    aEL = "addEventListener",
	    linkClass = "img-lightbox-link",
	    link = ctx ? ctx[gEBCN](linkClass) || "" : d[gEBCN](linkClass) || "",
	    containerClass = "img-lightbox-container",
	    container = d[gEBCN](containerClass)[0] || "",
	    img = container ? container[gEBTN]("img")[0] || "" : "",
	    an = "animated",
	    an1 = "fadeIn",
	    an2 = "fadeInUp",
	    isBindedClass = "is-binded",
	    dummySrc = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
	if (!container) {
		container = d[cE]("div");
		img = d[cE]("img");
		img.src = dummySrc;
		img.alt = "";
		container[aC](img);
		container[cL].add(containerClass);
		appendFragment(container, b);
	}
	var arrange = function (e) {
		var handleImgLightboxLink = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			var _this = this;
			var logicHandleImgLightboxLink = function () {
				var hrefString = _this[gA]("href") || "";
				if (container && img && hrefString) {
					LoadingSpinner.show();
					container[cL].add(an);
					container[cL].add(an1);
					img[cL].add(an);
					img[cL].add(an2);
					if (parseLink(hrefString).isAbsolute && !parseLink(hrefString).hasHTTP) {
						hrefString = hrefString.replace(/^/, getHTTP(true) + ":");
					}
					imagePromise(hrefString).then(function (r) {
						img.src = hrefString;
					}).catch(function (err) {
						/* console.log("manageImgLightboxLinks => imagePromise: cannot load image:", err); */
					});
					w[aEL]("keyup", handleImgLightboxWindow);
					container[aEL]("click", handleImgLightboxContainer);
					container.style.display = "block";
					LoadingSpinner.hide();
				}
			},
			    debounceLogicHandleImgLightboxLink = debounce(logicHandleImgLightboxLink, 200);
			debounceLogicHandleImgLightboxLink();
		};
		if (!e[cL].contains(isBindedClass)) {
			var hrefString = e[gA]("href") || "";
			if (hrefString) {
				if (parseLink(hrefString).isAbsolute && !parseLink(hrefString).hasHTTP) {
					e.setAttribute("href", hrefString.replace(/^/, getHTTP(true) + ":"));
				}
				e[aEL]("click", handleImgLightboxLink);
				e[cL].add(isBindedClass);
			}
		}
	};
	if (link) {
		/* console.log("triggered function: manageImgLightboxLinks"); */
		for (var j = 0, l = link.length; j < l; j += 1) {
			arrange(link[j]);
		}
		/* forEach(link, arrange, false); */
	}
};
document.ready().then(manageImgLightboxLinks);
/*!
 * replace img src with data-src
 * initiate on load, not on ready
 * @param {Object} [ctx] context HTML Element
 */
var handleDataSrcImageAll = function () {
	"use strict";

	var d = document,
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    ds = "dataset",
	    imgClass = "data-src-img",
	    img = d[gEBCN](imgClass) || "",
	    isActiveClass = "is-active",
	    isBindedClass = "is-binded",
	    arrange = function (e) {
		/*!
   * true if elem is in same y-axis as the viewport or within 100px of it
   * @see {@link https://github.com/ryanve/verge}
   */
		if (verge.inY(e, 100) /*  && 0 !== e.offsetHeight */) {
				if (!e[cL].contains(isBindedClass)) {
					var srcString = e[ds].src || "";
					if (srcString) {
						if (parseLink(srcString).isAbsolute && !parseLink(srcString).hasHTTP) {
							e[ds].src = srcString.replace(/^/, getHTTP(true) + ":");
							srcString = e[ds].src;
						}
						imagePromise(srcString).then(function (r) {
							e.src = srcString;
						}).catch(function (err) {
							console.log("cannot load image with imagePromise:", srcString);
						});
						e[cL].add(isActiveClass);
						e[cL].add(isBindedClass);
					}
				}
			}
	};
	if (img) {
		/* console.log("triggered function: manageDataSrcImageAll"); */
		for (var i = 0, l = img.length; i < l; i += 1) {
			arrange(img[i]);
		}
		/* forEach(img, arrange, false); */
	}
},
    handleDataSrcImageAllWindow = function () {
	var throttleHandleDataSrcImageAll = throttle(handleDataSrcImageAll, 100);
	throttleHandleDataSrcImageAll();
},
    manageDataSrcImageAll = function () {
	"use strict";

	var w = globalRoot,
	    aEL = "addEventListener",
	    rEL = "removeEventListener";
	w[rEL]("scroll", handleDataSrcImageAllWindow, { passive: true });
	w[rEL]("resize", handleDataSrcImageAllWindow);
	w[aEL]("scroll", handleDataSrcImageAllWindow, { passive: true });
	w[aEL]("resize", handleDataSrcImageAllWindow);
	var timers = new Timers();
	timers.timeout(function () {
		timers.clear();
		timers = null;
		handleDataSrcImageAll();
	}, 500);
};
/*!
 * on load, not on ready
 */
globalRoot.addEventListener("load", manageDataSrcImageAll);
/*!
 * append media-iframe
 * @param {Object} [ctx] context HTML Element
 */
var handleDataSrcIframeAll = function () {
	"use strict";

	var d = document,
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    ds = "dataset",
	    sA = "setAttribute",
	    imgClass = "data-src-iframe",
	    ifrm = d[gEBCN](imgClass) || "",
	    isActiveClass = "is-active",
	    isBindedClass = "is-binded",
	    arrange = function (e) {
		/*!
   * true if elem is in same y-axis as the viewport or within 100px of it
   * @see {@link https://github.com/ryanve/verge}
   */
		if (verge.inY(e, 100) /*  && 0 !== e.offsetHeight */) {
				if (!e[cL].contains(isBindedClass)) {
					var srcString = e[ds].src || "";
					if (srcString) {
						if (parseLink(srcString).isAbsolute && !parseLink(srcString).hasHTTP) {
							e[ds].src = srcString.replace(/^/, getHTTP(true) + ":");
							srcString = e[ds].src;
						}
						e.src = srcString;
						e[sA]("frameborder", "no");
						e[sA]("style", "border:none;");
						e[sA]("webkitallowfullscreen", "true");
						e[sA]("mozallowfullscreen", "true");
						e[sA]("scrolling", "no");
						e[sA]("allowfullscreen", "true");
						e[cL].add(isActiveClass);
						e[cL].add(isBindedClass);
					}
				}
			}
	};
	if (ifrm) {
		/* console.log("triggered function: manageDataSrcIframeAll"); */
		for (var i = 0, l = ifrm.length; i < l; i += 1) {
			arrange(ifrm[i]);
		}
		/* forEach(ifrm, arrange, false); */
	}
},
    handleDataSrcIframeAllWindow = function () {
	var throttlehandleDataSrcIframeAll = throttle(handleDataSrcIframeAll, 100);
	throttlehandleDataSrcIframeAll();
},
    manageDataSrcIframeAll = function () {
	"use strict";

	var w = globalRoot,
	    aEL = "addEventListener",
	    rEL = "removeEventListener";
	w[rEL]("scroll", handleDataSrcIframeAllWindow, { passive: true });
	w[rEL]("resize", handleDataSrcIframeAllWindow);
	w[aEL]("scroll", handleDataSrcIframeAllWindow, { passive: true });
	w[aEL]("resize", handleDataSrcIframeAllWindow);
	var timers = new Timers();
	timers.timeout(function () {
		timers.clear();
		timers = null;
		handleDataSrcIframeAll();
	}, 500);
};
/*!
 * on load, not on ready
 */
globalRoot.addEventListener("load", manageDataSrcIframeAll);
/*!
 * replace iframe src with data-src
 * @param {Object} [ctx] context HTML Element
 */
var manageIframeLightboxLinks = function (ctx) {
	"use strict";

	ctx = ctx && ctx.nodeName ? ctx : "";
	var d = document,
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    linkClass = "iframe-lightbox-link",
	    link = ctx ? ctx[gEBCN](linkClass) || "" : d[gEBCN](linkClass) || "",
	    isBindedClass = "is-binded",
	    arrange = function (e) {
		if (!e[cL].contains(isBindedClass)) {
			e.lightbox = new IframeLightbox(e);
			e[cL].add(isBindedClass);
		}
	};
	if (link) {
		/* console.log("triggered function: manageIframeLightboxLibks"); */
		for (var i = 0, l = link.length; i < l; i += 1) {
			arrange(link[i]);
		}
		/* forEach(link, arrange, false); */
	}
};
document.ready().then(manageIframeLightboxLinks);
/*!
 * add smooth scroll or redirection to static select options
 * @param {Object} [ctx] context HTML Element
 */
var handleChaptersSelect = function () {
	"use strict";

	var _this = this;
	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    hashString = _this.options[_this.selectedIndex].value || "";
	if (hashString) {
		var tragetObject = hashString ? isValidId(hashString, true) ? d[gEBI](hashString.replace(/^#/, "")) || "" : "" : "";
		if (tragetObject) {
			scroll2Top(findPos(tragetObject).top, 20000);
		} else {
			w.location.href = hashString;
		}
	}
},
    manageChaptersSelect = function () {
	"use strict";

	var d = document,
	    gEBI = "getElementById",
	    aEL = "addEventListener",
	    chaptersSelect = d[gEBI]("chapters-select") || "";
	if (chaptersSelect) {
		/* console.log("triggered function: manageChaptersSelect"); */
		chaptersSelect[aEL]("change", handleChaptersSelect);
	}
};
document.ready().then(manageChaptersSelect);
/*!
 * manage search input
 */
var manageSearchInput = function () {
	"use strict";

	var d = document,
	    gEBI = "getElementById",
	    aEL = "addEventListener",
	    searchInput = d[gEBI]("text") || "",
	    handleSearchInputValue = function () {
		var _this = this;
		var logicHandleSearchInputValue = function () {
			_this.value = _this.value.replace(/\\/g, "").replace(/ +(?= )/g, " ").replace(/\/+(?=\/)/g, "/") || "";
		},
		    debounceLogicHandleSearchInputValue = debounce(logicHandleSearchInputValue, 200);
		debounceLogicHandleSearchInputValue();
	};
	if (searchInput) {
		/* console.log("triggered function: manageSearchInput"); */
		searchInput.focus();
		searchInput[aEL]("input", handleSearchInputValue);
	}
};
document.ready().then(manageSearchInput);
/*!
 * add click event on hidden-layer show btn
 * @param {Object} [ctx] context HTML Element
 */
var handleExpandingLayerAll = function () {
	"use strict";

	var _this = this;
	var cL = "classList",
	    pN = "parentNode",
	    isActiveClass = "is-active",
	    layer = _this[pN] ? _this[pN].nextElementSibling : "";
	if (layer) {
		_this[cL].toggle(isActiveClass);
		layer[cL].toggle(isActiveClass);
	}
	return;
},
    manageExpandingLayers = function (ctx) {
	"use strict";

	ctx = ctx && ctx.nodeName ? ctx : "";
	var d = document,
	    gEBCN = "getElementsByClassName",
	    aEL = "addEventListener",
	    btnClass = "btn-expand-hidden-layer",
	    btn = ctx ? ctx[gEBCN](btnClass) || "" : d[gEBCN](btnClass) || "",
	    addHandler = function (e) {
		e[aEL]("click", handleExpandingLayerAll);
	};
	if (btn) {
		/* console.log("triggered function: manageExpandingLayers"); */
		for (var i = 0, l = btn.length; i < l; i += 1) {
			addHandler(btn[i]);
		}
		/* forEach(btn, addHandler, false); */
	}
};
document.ready().then(manageExpandingLayers);
/*!
 * init qr-code
 * @see {@link https://stackoverflow.com/questions/12777622/how-to-use-enquire-js}
 */
var manageLocationQrCodeImage = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    cE = "createElement",
	    holder = d[gEBCN]("holder-location-qr-code")[0] || "",
	    locationHref = w.location.href || "",
	    initScript = function () {
		var locationHref = w.location.href || "",
		    img = d[cE]("img"),
		    imgTitle = d.title ? "Ссылка на страницу «" + d.title.replace(/\[[^\]]*?\]/g, "").trim() + "»" : "",
		    imgSrc = getHTTP(true) + "://chart.googleapis.com/chart?cht=qr&chld=M%7C4&choe=UTF-8&chs=300x300&chl=" + encodeURIComponent(locationHref);
		img.alt = imgTitle;
		if (w.QRCode) {
			if ("undefined" !== typeof earlySvgSupport && "svg" === earlySvgSupport) {
				imgSrc = QRCode.generateSVG(locationHref, {
					ecclevel: "M",
					fillcolor: "#FFFFFF",
					textcolor: "#191919",
					margin: 4,
					modulesize: 8
				});
				var XMLS = new XMLSerializer();
				imgSrc = XMLS.serializeToString(imgSrc);
				imgSrc = "data:image/svg+xml;base64," + w.btoa(unescape(encodeURIComponent(imgSrc)));
				img.src = imgSrc;
			} else {
				imgSrc = QRCode.generatePNG(locationHref, {
					ecclevel: "M",
					format: "html",
					fillcolor: "#FFFFFF",
					textcolor: "#191919",
					margin: 4,
					modulesize: 8
				});
				img.src = imgSrc;
			}
		} else {
			img.src = imgSrc;
		}
		img[cL].add("qr-code-img");
		img.title = imgTitle;
		removeChildren(holder);
		appendFragment(img, holder);
	};
	if (holder && locationHref) {
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			/* console.log("triggered function: manageLocationQrCodeImage"); */
			var jsUrl = "../../cdn/qrjs2/0.1.3/js/qrjs2.fixed.min.js";
			if (!scriptIsLoaded(jsUrl)) {
				loadJS(jsUrl, initScript);
			}
		}
	}
};
document.ready().then(manageLocationQrCodeImage);
/*!
 * init nav-menu
 */
var initNavMenu = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cL = "classList",
	    aEL = "addEventListener",
	    container = d[gEBI]("container") || "",
	    page = d[gEBI]("page") || "",
	    btnNavMenu = d[gEBCN]("btn-nav-menu")[0] || "",
	    panelNavMenu = d[gEBCN]("panel-nav-menu")[0] || "",
	    panelNavMenuItems = panelNavMenu ? panelNavMenu[gEBTN]("a") || "" : "",
	    holderPanelMenuMore = d[gEBCN]("holder-panel-menu-more")[0] || "",
	    isActiveClass = "is-active",
	    locationHref = w.location.href || "",
	    removeAllActiveClass = function () {
		page[cL].remove(isActiveClass);
		panelNavMenu[cL].remove(isActiveClass);
		btnNavMenu[cL].remove(isActiveClass);
	},
	    removeHolderActiveClass = function () {
		if (holderPanelMenuMore && holderPanelMenuMore[cL].contains(isActiveClass)) {
			holderPanelMenuMore[cL].remove(isActiveClass);
		}
	},
	    addContainerHandler = function () {
		var handleContainerLeft = function () {
			/* console.log("swipeleft"); */
			removeHolderActiveClass();
			if (panelNavMenu[cL].contains(isActiveClass)) {
				removeAllActiveClass();
			}
		},
		    handleContainerRight = function () {
			/* console.log("swiperight"); */
			removeHolderActiveClass();
			var addAllActiveClass = function () {
				page[cL].add(isActiveClass);
				panelNavMenu[cL].add(isActiveClass);
				btnNavMenu[cL].add(isActiveClass);
			};
			if (!panelNavMenu[cL].contains(isActiveClass)) {
				addAllActiveClass();
			}
		};
		container[aEL]("click", handleContainerLeft);
		if (w.tocca) {
			if ("undefined" !== typeof earlyHasTouch && "touch" === earlyHasTouch) {
				container[aEL]("swipeleft", handleContainerLeft);
				container[aEL]("swiperight", handleContainerRight);
			}
		}
	},
	    addBtnHandler = function () {
		var toggleAllActiveClass = function () {
			page[cL].toggle(isActiveClass);
			panelNavMenu[cL].toggle(isActiveClass);
			btnNavMenu[cL].toggle(isActiveClass);
		},
		    handleBtnNavMenu = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			removeHolderActiveClass();
			toggleAllActiveClass();
		};
		btnNavMenu[aEL]("click", handleBtnNavMenu);
	},
	    addItemHandlerAll = function () {
		var addItemHandler = function (e) {
			var addActiveClass = function (e) {
				e[cL].add(isActiveClass);
			},
			    removeHolderAndAllActiveClass = function () {
				removeHolderActiveClass();
				removeAllActiveClass();
			},
			    removeActiveClass = function (e) {
				e[cL].remove(isActiveClass);
			},
			    handleItem = function () {
				if (panelNavMenu[cL].contains(isActiveClass)) {
					removeHolderAndAllActiveClass();
				}
				for (var j = 0, l = panelNavMenuItems.length; j < l; j += 1) {
					removeActiveClass(panelNavMenuItems[j]);
				}
				/* forEach(panelNavMenuItems, removeActiveClass, false); */
				addActiveClass(e);
			};
			e[aEL]("click", handleItem);
			if (locationHref === e.href) {
				addActiveClass(e);
			} else {
				removeActiveClass(e);
			}
		};
		for (var i = 0, l = panelNavMenuItems.length; i < l; i += 1) {
			addItemHandler(panelNavMenuItems[i]);
		}
		/* forEach(panelNavMenuItems, addItemHandler, false); */
	};
	if (page && container && btnNavMenu && panelNavMenu && panelNavMenuItems) {
		/* console.log("triggered function: initNavMenu"); */
		/*!
   * close nav on outside click
   */
		addContainerHandler();
		/*!
   * open or close nav
   */
		addBtnHandler();
		/*!
   * close nav, scroll to top, highlight active nav item
   */
		addItemHandlerAll();
	}
};
document.ready().then(initNavMenu);
/*!
 * add updates link to menu more
 * place that above init menu more
 */
var addAppUpdatesLink = function () {
	"use strict";

	var d = document,
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cE = "createElement",
	    cTN = "createTextNode",
	    aC = "appendChild",
	    aEL = "addEventListener",
	    panel = d[gEBCN]("panel-menu-more")[0] || "",
	    items = panel ? panel[gEBTN]("li") || "" : "",
	    navigatorUserAgent = navigator.userAgent || "",
	    linkHref;
	if (/Windows/i.test(navigatorUserAgent) && /(WOW64|Win64)/i.test(navigatorUserAgent)) {
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-x64-setup.exe";
	} else if (/(x86_64|x86-64|x64;|amd64|AMD64|x64_64)/i.test(navigatorUserAgent) && /(Linux|X11)/i.test(navigatorUserAgent)) {
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-x64.tar.gz";
	} else if (/IEMobile/i.test(navigatorUserAgent)) {
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra.Windows10_1.0.0.0_x86_debug.appx";
	} else {
		if (/Android/i.test(navigatorUserAgent)) {
			linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-debug.apk";
		}
	}
	var arrange = function () {
		var listItem = d[cE]("li"),
		    link = d[cE]("a"),
		    linkText = "Скачать приложение сайта";
		link.title = "" + (parseLink(linkHref).hostname || "") + " откроется в новой вкладке";
		link.href = linkHref;
		var handleAppUpdatesLink = function () {
			openDeviceBrowser(linkHref);
		};
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			link.target = "_blank";
			link.rel = "noopener";
		} else {
			/*!
    * no prevent default and void .href above
    */
			/*jshint -W107 */
			link.href = "javascript:void(0);";
			/*jshint +W107 */
			link[aEL]("click", handleAppUpdatesLink);
		}
		link[aC](d[cTN]("" + linkText));
		listItem[aC](link);
		if (panel.hasChildNodes()) {
			prependFragmentBefore(listItem, panel.firstChild);
		}
	};
	if (panel && items && linkHref) {
		/* console.log("triggered function: addAppUpdatesLink"); */
		arrange();
	}
};
document.ready().then(addAppUpdatesLink);
/*!
 * init menu-more
 */
var initMenuMore = function () {
	"use strict";

	var d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cL = "classList",
	    aEL = "addEventListener",
	    container = d[gEBI]("container") || "",
	    page = d[gEBI]("page") || "",
	    holderPanelMenuMore = d[gEBCN]("holder-panel-menu-more")[0] || "",
	    btnMenuMore = d[gEBCN]("btn-menu-more")[0] || "",
	    panelMenuMore = d[gEBCN]("panel-menu-more")[0] || "",
	    panelMenuMoreItems = panelMenuMore ? panelMenuMore[gEBTN]("li") || "" : "",
	    panelNavMenu = d[gEBCN]("panel-nav-menu")[0] || "",
	    isActiveClass = "is-active",
	    handleItem = function () {
		page[cL].remove(isActiveClass);
		holderPanelMenuMore[cL].remove(isActiveClass);
		if (panelNavMenu && panelNavMenu[cL].contains(isActiveClass)) {
			panelNavMenu[cL].remove(isActiveClass);
		}
	},
	    addContainerHandler = function () {
		container[aEL]("click", handleItem);
	},
	    addBtnHandler = function () {
		var h_btn = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			holderPanelMenuMore[cL].toggle(isActiveClass);
		};
		btnMenuMore[aEL]("click", h_btn);
	},
	    addItemHandlerAll = function () {
		var addItemHandler = function (e) {
			e[aEL]("click", handleItem);
		};
		for (var i = 0, l = panelMenuMoreItems.length; i < l; i += 1) {
			addItemHandler(panelMenuMoreItems[i]);
		}
		/* forEach(panelMenuMoreItems, addItemHandler, false); */
	};
	if (page && container && holderPanelMenuMore && btnMenuMore && panelMenuMore && panelMenuMoreItems) {
		/* console.log("triggered function: initMenuMore"); */
		/*!
   * hide menu more on outside click
   */
		addContainerHandler();
		/*!
   * show or hide menu more
   */
		addBtnHandler();
		/*!
   * hide menu more on item clicked
   */
		addItemHandlerAll();
	}
};
document.ready().then(initMenuMore);
/*!
 * init ui-totop
 */
var initUiTotop = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    h = d.documentElement || "",
	    b = d.body || "",
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    cE = "createElement",
	    aC = "appendChild",

	/* cENS = "createElementNS",
 sANS = "setAttributeNS", */
	aEL = "addEventListener",
	    btnClass = "ui-totop",
	    btnTitle = "Наверх",
	    isActiveClass = "is-active",
	    anchor = d[cE]("a"),

	/* insertUpSvg = function (targetObj) {
 	var svg = d[cENS]("http://www.w3.org/2000/svg", "svg"),
 	use = d[cENS]("http://www.w3.org/2000/svg", "use");
 	svg[cL].add("ui-icon");
 	use[sANS]("http://www.w3.org/1999/xlink", "xlink:href", "#ui-icon-Up");
 	svg[aC](use);
 	targetObj[aC](svg);
 }, */
	handleUiTotopAnchor = function (ev) {
		ev.stopPropagation();
		ev.preventDefault();
		scroll2Top(0, 20000);
	},
	    handleUiTotopWindow = function (_this) {
		var logicHandleUiTotopWindow = function () {
			var btn = d[gEBCN](btnClass)[0] || "",
			    scrollPosition = _this.pageYOffset || h.scrollTop || b.scrollTop || "",
			    windowHeight = _this.innerHeight || h.clientHeight || b.clientHeight || "";
			if (scrollPosition && windowHeight && btn) {
				if (scrollPosition > windowHeight) {
					btn[cL].add(isActiveClass);
				} else {
					btn[cL].remove(isActiveClass);
				}
			}
		},
		    throttleLogicHandleUiTotopWindow = throttle(logicHandleUiTotopWindow, 100);
		throttleLogicHandleUiTotopWindow();
	};
	anchor[cL].add(btnClass);
	/*jshint -W107 */
	anchor.href = "javascript:void(0);";
	/*jshint +W107 */
	anchor.title = btnTitle;
	/* insertUpSvg(anchor); */
	b[aC](anchor);
	if (b) {
		/* console.log("triggered function: initUiTotop"); */
		anchor[aEL]("click", handleUiTotopAnchor);
		w[aEL]("scroll", handleUiTotopWindow, { passive: true });
	}
};
document.ready().then(initUiTotop);
/*!
 * init share btn
 * class ya-share2 automatically triggers Ya.share2,
 * so use either default class ya-share2 or custom id
 * ya-share2 class will be added if you init share block
 * via  ya-share2 api
 * @see {@link https://tech.yandex.ru/share/doc/dg/api-docpage/}
 */
var yshare,
    manageShareButton = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    aEL = "addEventListener",
	    btn = d[gEBCN]("btn-share-buttons")[0] || "",
	    yaShare2Id = "ya-share2",
	    yaShare2 = d[gEBI](yaShare2Id) || "",
	    handleShareButton = function (ev) {
		ev.stopPropagation();
		ev.preventDefault();
		var initScript = function () {
			if (w.Ya) {
				try {
					if (yshare) {
						yshare.updateContent({
							title: d.title || "",
							description: d.title || "",
							url: w.location.href || ""
						});
					} else {
						yshare = Ya.share2(yaShare2Id, {
							content: {
								title: d.title || "",
								description: d.title || "",
								url: w.location.href || ""
							}
						});
					}
					setStyleVisibilityVisible(yaShare2);
					setStyleOpacity(yaShare2, 1);
					setStyleDisplayNone(btn);
				} catch (err) {
					/* console.log("cannot update or init Ya.share2", err); */
				}
			}
		},
		    jsUrl = getHTTP(true) + "://yastatic.net/share2/share.js";
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl, initScript);
		}
	};
	if (btn && yaShare2) {
		/* console.log("triggered function: manageShareButton"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			btn[aEL]("click", handleShareButton);
		} else {
			setStyleDisplayNone(btn);
		}
	}
};
document.ready().then(manageShareButton);
/*!
 * init download app btn
 */
var initDownloadAppBtn = function () {
	"use strict";

	var d = document,
	    b = d.body || "",
	    navigatorUserAgent = navigator.userAgent || "",
	    cls = "btn-download-app",
	    cE = "createElement",
	    cL = "classList",
	    aEL = "addEventListener",
	    rEL = "removeEventListener",
	    an = "animated",
	    an2 = "bounceInRight",
	    an4 = "bounceOutRight",
	    bgUrl,
	    linkHref;
	if (/Windows/i.test(navigatorUserAgent) && /(WOW64|Win64)/i.test(navigatorUserAgent)) {
		bgUrl = "url(../../libs/products/img/download_windows_app_144x52.png)";
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-x64-setup.exe";
	} else if (/(x86_64|x86-64|x64;|amd64|AMD64|x64_64)/i.test(navigatorUserAgent) && /(Linux|X11)/i.test(navigatorUserAgent)) {
		bgUrl = "url(../../libs/products/img/download_linux_app_144x52.png)";
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-x64.tar.gz";
	} else if (/IEMobile/i.test(navigatorUserAgent)) {
		bgUrl = "url(../../libs/products/img/download_wp_app_144x52.png)";
		linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra.Windows10_1.0.0.0_x86_debug.appx";
	} else {
		if (/Android/i.test(navigatorUserAgent)) {
			bgUrl = "url(../../libs/products/img/download_android_app_144x52.png)";
			linkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-debug.apk";
		}
	}
	var arrange = function () {
		var handleDownloadAppBtn = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			openDeviceBrowser(linkHref);
		},
		    link = d[cE]("a");
		link.style.backgroundImage = bgUrl;
		link[cL].add(cls);
		link[cL].add(an);
		link[cL].add(an2);
		link.href = linkHref;
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			link.target = "_blank";
			link.rel = "noopener";
		} else {
			link[aEL]("click", handleDownloadAppBtn);
		}
		appendFragment(link, b);
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			link[cL].remove(an2);
			link[cL].add(an4);
			var timers2 = new Timers();
			timers2.timeout(function () {
				timers2.clear();
				timers2 = null;
				link[rEL]("click", handleDownloadAppBtn);
				removeElement(link);
			}, 750);
		}, 8000);
	};
	if (b && navigatorUserAgent && linkHref) {
		/* console.log("triggered function: initDownloadAppBtn"); */
		var timers = new Timers();
		timers.timeout(function () {
			timers.clear();
			timers = null;
			arrange();
		}, 3000);
	}
};
document.ready().then(initDownloadAppBtn);
/*!
 * init disqus_thread on scroll
 */
var initDisqusOnScroll = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    cL = "classList",
	    ds = "dataset",
	    pN = "parentNode",
	    aEL = "addEventListener",
	    rEL = "removeEventListener",
	    disqusThread = d[gEBI]("disqus_thread") || "",
	    isActiveClass = "is-active",
	    btn = d[gEBCN]("btn-show-disqus")[0] || "",
	    locationHref = w.location.href || "",
	    disqusThreadShortname = disqusThread ? disqusThread[ds].shortname || "" : "",
	    jsUrl = getHTTP(true) + "://" + disqusThreadShortname + ".disqus.com/embed.js",
	    loadDisqus = function () {
		LoadingSpinner.show();
		var initScript = function () {
			setStyleDisplayNone(btn);
			disqusThread[cL].add(isActiveClass);
			LoadingSpinner.hide();
		};
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl, initScript);
		}
	},
	    addHandler = function () {
		var handleDisqusButton = function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			btn[rEL]("click", handleDisqusButton);
			loadDisqus();
		};
		btn[aEL]("click", handleDisqusButton);
	} /* ,
   handleDisqusWindow = function () {
   if (fitsIntoViewport(disqusThread)) {
   	w[rEL]("scroll", handleDisqusWindow, {passive: true});
   	loadDisqus();
   }
   } */;
	if (btn && disqusThread && disqusThreadShortname && locationHref) {
		/* console.log("triggered function: initDisqusOnScroll"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			addHandler();
			/* if (!("undefined" !== typeof earlyDeviceSize && "small" === earlyDeviceSize)) {
   	w[aEL]("scroll", handleDisqusWindow, {passive: true});
   } */
		} else {
			removeChildren(disqusThread);
			var msgText = d.createRange().createContextualFragment("<p>Комментарии доступны только в веб версии этой страницы.</p>");
			appendFragment(msgText, disqusThread);
			disqusThread.removeAttribute("id");
			setStyleDisplayNone(btn[pN]);
		}
	}
};
document.ready().then(initDisqusOnScroll);
/*!
 * init vk-like on click
 */
var manageVKLikeButton = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    ds = "dataset",
	    aEL = "addEventListener",
	    rEL = "removeEventListener",
	    VKLikeId = "vk-like",
	    VKLike = d[gEBI](VKLikeId) || "",
	    btn = d[gEBCN]("btn-show-vk-like")[0] || "",
	    handleVKLikeButton = function (ev) {
		ev.stopPropagation();
		ev.preventDefault();
		btn[rEL]("click", handleVKLikeButton);
		setStyleVisibilityVisible(VKLike);
		setStyleOpacity(VKLike, 1);
		setStyleDisplayNone(btn);
		var initScript = function () {
			if (w.VK) {
				try {
					VK.init({
						apiId: VKLike[ds].apiid || "",
						nameTransportPath: "/xd_receiver.htm",
						onlyWidgets: true
					});
					VK.Widgets.Like(VKLikeId, {
						type: "button",
						height: 24
					});
				} catch (err) {
					/* console.log("cannot init VK", err); */
				}
			}
		},
		    jsUrl = getHTTP(true) + "://vk.com/js/api/openapi.js?122";
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl, initScript);
		}
	};
	if (btn && VKLike) {
		/* console.log("triggered function: manageVKLikeButton"); */
		if ("undefined" !== typeof getHTTP && getHTTP()) {
			btn[aEL]("click", handleVKLikeButton);
		} else {
			setStyleDisplayNone(btn);
		}
	}
};
document.ready().then(manageVKLikeButton);
/*!
 * init Pages Kamil autocomplete
 * @see {@link https://github.com/oss6/kamil/wiki/Example-with-label:link-json-and-typo-correct-suggestion}
 */
var initKamilAutocomplete = function () {
	"use strict";

	var w = globalRoot,
	    d = document,
	    gEBI = "getElementById",
	    gEBCN = "getElementsByClassName",
	    gEBTN = "getElementsByTagName",
	    cL = "classList",
	    cE = "createElement",
	    cTN = "createTextNode",
	    pN = "parentNode",
	    aC = "appendChild",
	    aEL = "addEventListener",
	    searchForm = d[gEBCN]("search-form")[0] || "",
	    textInputSelector = "#text",
	    textInput = d[gEBI]("text") || "",
	    container = d[gEBI]("container") || "",
	    suggestionUlId = "kamil-typo-autocomplete",
	    suggestionUlClass = "kamil-autocomplete",
	    jsonUrl = "../../app/libs/pwa-englishextra/json/routes.json",
	    processJsonResponse = function (jsonResponse) {
		var ac;
		try {
			var jsonObj = safelyParseJSON(jsonResponse);
			if (!jsonObj.hashes[0].hasOwnProperty("title")) {
				throw new Error("incomplete JSON data: no title");
			}
			ac = new Kamil(textInputSelector, {
				source: jsonObj.hashes,
				property: "title",
				minChars: 2
			});
		} catch (err) {
			console.log("cannot init generateMenu", err);
			return;
		}
		/*!
   * create typo suggestion list
   */
		var suggestionUl = d[cE]("ul"),
		    suggestionLi = d[cE]("li"),
		    handleTypoSuggestion = function () {
			setStyleDisplayNone(suggestionUl);
			setStyleDisplayNone(suggestionLi);
		},
		    showTypoSuggestion = function () {
			setStyleDisplayBlock(suggestionUl);
			setStyleDisplayBlock(suggestionLi);
		};
		suggestionUl[cL].add(suggestionUlClass);
		suggestionUl.id = suggestionUlId;
		handleTypoSuggestion();
		suggestionUl[aC](suggestionLi);
		textInput[pN].insertBefore(suggestionUl, textInput.nextElementSibling);
		/*!
   * show suggestions
   */
		ac.renderMenu = function (ul, items) {
			items = items || "";
			var itemsLength = items.length,
			    _this = this,

			/*!
    * limit output
    */
			limitKamilOutput = function (e, i) {
				if (i < 10) {
					_this._renderItemData(ul, e, i);
				}
			};
			if (items) {
				for (var i = 0; i < itemsLength; i += 1) {
					limitKamilOutput(items[i], i);
				}
				/* forEach(items, function (e, i) {
    	limitKamilOutput(e, i);
    }, false); */
			}
			/*!
    * fix typo - non latin characters found
    */
			while (itemsLength < 1) {
				var textValue = textInput.value;
				if (/[^\u0000-\u007f]/.test(textValue)) {
					textValue = fixEnRuTypo(textValue, "ru", "en");
				} else {
					textValue = fixEnRuTypo(textValue, "en", "ru");
				}
				showTypoSuggestion();
				removeChildren(suggestionLi);
				suggestionLi[aC](d[cTN]("" + textValue));
				if (textValue.match(/^\s*$/)) {
					handleTypoSuggestion();
				}
				if (textInput.value.length < 3 || textInput.value.match(/^\s*$/)) {
					handleTypoSuggestion();
				}
				itemsLength += 1;
			}
			/*!
    * truncate text
    */
			var lis = ul ? ul[gEBTN]("li") || "" : "",
			    truncateKamilText = function (e) {
				var truncText = e.firstChild.textContent || "",
				    truncTextObj = d[cTN](truncString(truncText, 24));
				e.replaceChild(truncTextObj, e.firstChild);
				e.title = "" + truncText;
			};
			if (lis) {
				for (var j = 0, m = lis.length; j < m; j += 1) {
					truncateKamilText(lis[j]);
				}
				/* forEach(lis, truncateKamilText, false); */
			}
		};
		/*!
   * set text input value from typo suggestion
   */
		var handleSuggestionLi = function (ev) {
			ev.stopPropagation();
			ev.preventDefault();
			/*!
    * set focus first, then set text
    */
			textInput.focus();
			textInput.value = suggestionLi.firstChild.textContent || "";
			setStyleDisplayNone(suggestionUl);
		};
		suggestionLi[aEL]("click", handleSuggestionLi);
		/*!
   * hide suggestions on outside click
   */
		if (container) {
			container[aEL]("click", handleTypoSuggestion);
		}
		/*!
   * unless you specify property option in new Kamil
   * use kamil built-in word label as search key in JSON file
   * [{"link":"/","label":"some text to match"},
   * {"link":"/pages/contents.html","label":"some text to match"}]
   */
		ac.on("kamilselect", function (e) {
			var kamilItemLink = e.item.href || "",
			    handleKamilItem = function () {
				e.inputElement.value = "";
				handleTypoSuggestion();
				w.location.href = "../../app/" + kamilItemLink;
			};
			if (kamilItemLink) {
				/*!
     * nwjs wont like setImmediate here
     */
				/* setImmediate(handleKamilItem); */
				handleKamilItem();
			}
		});
	},
	    initScript = function () {
		loadUnparsedJSON(jsonUrl, processJsonResponse);
	};
	if (searchForm && textInput) {
		/* console.log("triggered function: initKamilAutocomplete"); */
		var jsUrl = "../../cdn/kamil/0.1.1/js/kamil.fixed.min.js";
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl, initScript);
		}
	}
};
document.ready().then(initKamilAutocomplete);
/*!
 * init manUP.js
 */
/* var initManUp = function () {
	"use strict";
	if ("undefined" !== typeof getHTTP && getHTTP()) {
		var jsUrl = "/cdn/ManUp.js/0.7/js/manup.fixed.min.js";
		if (!scriptIsLoaded(jsUrl)) {
			loadJS(jsUrl);
		}
	}
};
document.ready().then(initManUp); */
/*!
 * show page, finish ToProgress
 */
var showPageFinishProgress = function () {
	"use strict";

	var d = document,
	    gEBI = "getElementById",
	    container = d[gEBI]("container") || "";
	if (container) {
		setStyleOpacity(container, 1);
		progressBar.increase(20);
	}
};
document.ready().then(showPageFinishProgress);
globalRoot.addEventListener("load", function () {
	progressBar.complete();
});

//# sourceMappingURL=bundle.js.map