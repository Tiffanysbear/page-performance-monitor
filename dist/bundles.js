var Perf=function(e){var r={sendPerformanceLog:function(e,r){var n=window.performance;if(!n)return{msg:"not suport performance"};var t=n.timing||{},a=e||{},o=a.actId||102103,i=t.navigationStart,f={duration:(new Date).getTime()-i,ttfb:t.responseStart-i,requestTime:t.responseEnd-t.requestStart},m=Object.assign(f,a);return"function"==typeof r&&r(1,o,m),m},getPerformanceTiming:function(){var e=window.performance;if(!e)return{msg:"not suport performance"};var r=e.timing||{},n=r.navigationStart;return{duration:(new Date).getTime()-n,ttfb:r.responseStart-n,requestTime:r.responseEnd-r.requestStart}}},n=r.sendPerformanceLog,t=r.getPerformanceTiming;return e.default=r,e.sendPerformanceLog=n,e.getPerformanceTiming=t,e}({});