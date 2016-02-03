(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _utils = require('./utils');

(0, _utils.alerter)('Hello Juan');
(0, _utils.logger)('im logging');

},{"./utils":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var alerter = exports.alerter = function alerter(message) {
  return alert(message);
};
var logger = exports.logger = function logger(message) {
  return console.log(message);
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJfL2pzL2FwcC5qcyIsIl8vanMvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDRUEsb0JBQU0sWUFBTjtBQUNBLG1CQUFPLFlBQVA7Ozs7Ozs7O0FDSE8sSUFBSSw0QkFBVSxTQUFWLE9BQVUsQ0FBQyxPQUFEO1NBQWMsTUFBTSxPQUFOO0NBQWQ7QUFDZCxJQUFJLDBCQUFTLFNBQVQsTUFBUyxDQUFDLE9BQUQ7U0FBYyxRQUFRLEdBQVIsQ0FBWSxPQUFaO0NBQWQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHthbGVydGVyIGFzIGFsZXJ0LCBsb2dnZXJ9IGZyb20gJy4vdXRpbHMnXG5cbmFsZXJ0KCdIZWxsbyBKdWFuJyk7XG5sb2dnZXIoJ2ltIGxvZ2dpbmcnKTsiLCJleHBvcnQgbGV0IGFsZXJ0ZXIgPSAobWVzc2FnZSkgPT4gKGFsZXJ0KG1lc3NhZ2UpKTtcbmV4cG9ydCBsZXQgbG9nZ2VyID0gKG1lc3NhZ2UpID0+IChjb25zb2xlLmxvZyhtZXNzYWdlKSk7Il19
