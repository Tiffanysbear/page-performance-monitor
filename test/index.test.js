/**
 * @file: index.test.js
 * @author: zhoufang04
 * @description: mocha + chai test
 */

const expect = require('chai').expect;
const {JSDOM} = require('jsdom');
const perf = require('../dist/index.js');
const {window} = new JSDOM(`<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0,user-scalable=no">
        <meta name="author" content="test">
        <title>performance test</title>
    </head>
    <body>
        <div id="values"></div>
        <div id="app"></div>
    </body>
    </html>`);

global.window = window;

describe('页面性能测试', function () {
    it('加载完成返回数据为对象', function () {
        expect(perf.getPerformanceTiming()).to.be.an('object');
    });
    it('返回耗时', function () {
        expect(perf.getPerformanceTiming().duration).to.be.an('number');
    });
    it('返回ttfb耗时', function () {
        expect(perf.getPerformanceTiming().ttfb).to.be.an('number');
    });
    it('返回requestTime耗时', function () {
        expect(perf.getPerformanceTiming().requestTime).to.be.an('number');
    });
});
