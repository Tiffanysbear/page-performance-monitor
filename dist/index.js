!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.Perf={})}(this,function(e){var t={sendPerformanceLog:function(e,t){var n=window.performance;if(!n)return{msg:"not suport performance"};var r=n.timing||{},o=e||{},i=o.actId||102103,a=r.navigationStart,f={duration:(new Date).getTime()-a,ttfb:r.responseStart-a,requestTime:r.responseEnd-r.requestStart},s=Object.assign(f,o);return"function"==typeof t&&t(1,i,s),s},getPerformanceTiming:function(){var e=window.performance;if(!e)return{msg:"not suport performance"};var t=e.timing||{},n=t.navigationStart;return{duration:(new Date).getTime()-n,ttfb:t.responseStart-n,requestTime:t.responseEnd-t.requestStart}}},n=t.sendPerformanceLog,r=t.getPerformanceTiming;e.default=t,e.sendPerformanceLog=n,e.getPerformanceTiming=r});