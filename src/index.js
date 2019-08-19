/**
 * @file: index.js
 * @author: Tiffany
 * @description: 页面性能监控
 */
'use strict';
/**
 *
 * @param {Object} opt 参数-额外增加的打点参数
 * @param {function} sendLogFn 打点方法，可能会根据业务的不同，传递不一样的打点参数
 * @return {Object}
 */

var sendPerformanceLog = function (opt, sendLogFn) {
    var performance = window.performance;
    if (!performance) {
        // 当前浏览器不支持 performance
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
        // 当前浏览器不支持 performance
        return {msg: 'not suport performance'};
    }
    var t = performance.timing || {};
    var ns = t.navigationStart;
    var times = {
        duration: new Date().getTime() - ns,
        ttfb: t.responseStart - ns,
        requestTime: t.responseEnd - t.requestStart
    };
    return times;
};
module.exports = {
    sendPerformanceLog: sendPerformanceLog,
    getPerformanceTiming: getPerformanceTiming
};