(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.Perf = {})));
}(this, (function (exports) {

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  /**
   * @file: index.js
   * @author: Tiffany
   * @description: page performance monitor
   */
  /**
   *
   * @param {Object} opt param - could add other params
   * @param {function} sendLogFn - log function, aimed to send log to server
   * @return {Object}
   */

  var sendPerformanceLog = function sendPerformanceLog(opt, sendLogFn) {
      var performance = window.performance;
      if (!performance) {
          // not suport performance
          return { msg: 'not suport performance' };
      }
      var t = performance.timing || {};
      var option = opt || {};
      var ns = t.navigationStart;
      var times = {
          duration: new Date().getTime() - ns,
          ttfb: t.responseStart - ns,
          requestTime: t.responseEnd - t.requestStart
      };
      var perfData = _extends(times, option);
      typeof sendLogFn === 'function' && sendLogFn(perfData);
      return perfData;
  };
  var getPerformanceTiming = function getPerformanceTiming() {
      var performance = window.performance;
      if (!performance) {
          // not suport performance
          return { msg: 'not suport performance' };
      }
      var t = performance.timing || {};
      var ns = t.navigationStart;
      var times = {
          duration: new Date().getTime() - ns,
          ttfb: t.responseStart - ns,
          requestTime: t.responseEnd - t.requestStart
      };
      return _extends(times, t);
  };

  var src = {
      sendPerformanceLog: sendPerformanceLog,
      getPerformanceTiming: getPerformanceTiming
  };
  var src_1 = src.sendPerformanceLog;
  var src_2 = src.getPerformanceTiming;

  exports.default = src;
  exports.sendPerformanceLog = src_1;
  exports.getPerformanceTiming = src_2;

})));
