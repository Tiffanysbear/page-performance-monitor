/**
 * @file: index.js
 * @author: Tiffany
 * @description: page performance monitor
 */
'use strict';
/**
 *
 * @param {Object} opt param - could add other params
 * @param {function} sendLogFn - log function, aimed to send log to server
 * @return {Object}
 */

var sendPerformanceLog = function (opt, sendLogFn) {
    var performance = window.performance;
    if (!performance) {
        // not suport performance
        return {msg: 'not suport performance'};
    }
    var t = performance.timing || {};
    var option = opt || {};
    var ns = t.navigationStart;
    var times = {
        duration: new Date().getTime() - ns,
        ttfb: t.responseStart - ns,
        requestTime: t.responseEnd - t.requestStart
    };
    var perfData = Object.assign(times, option);
    typeof sendLogFn === 'function' && sendLogFn(perfData);
    return perfData;
};
var getPerformanceTiming = function () {
    var performance = window.performance;
    if (!performance) {
        // not suport performance
        return {msg: 'not suport performance'};
    }
    var t = performance.timing || {};
    var ns = t.navigationStart;
    var times = {
        duration: new Date().getTime() - ns,
        ttfb: t.responseStart - ns,
        requestTime: t.responseEnd - t.requestStart
    };
    return Object.assign(times, t);
};

module.exports = {
    sendPerformanceLog: sendPerformanceLog,
    getPerformanceTiming: getPerformanceTiming
};
