## Introduction
If you want to monitor your page's performance, eg. ttfb, the start of page request, the time of request. Performance API is a good choice for u.


## Usage


` npm i page-performance-monitor`


## Examples

look at `example/index.html` or

```
<!DOCTYPE html>
<html lang="en">
<head>
    <script src="../dist/bundles.js"></script>
</head>
<body>
    <script>
        Perf.getPerformanceTiming();
    </script>
</body>
</html>

```

or

```
const Perf = require('page-performance-monitor');

// get performance data
Perf.getPerformanceTiming();

// send log
// logFunc: log function 
Perf.sendPerformanceLog({
    logId: 102304,
    ...
}, logFunc);

```



## Stay In Touch

[github](https://github.com/Tiffanysbear/page-performance-monitor)

## License

MIT


## Keywords
page
performance
monitor
