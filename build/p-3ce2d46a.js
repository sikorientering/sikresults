import{a as n}from"./p-fc610f15.js";function r(n){return null!=n&&"object"==typeof n}var t=/^(?:0|[1-9]\d*)$/;function u(n,r){var u=typeof n;return!!(r=null==r?9007199254740991:r)&&("number"==u||"symbol"!=u&&t.test(n))&&n>-1&&n%1==0&&n<r}function o(n){return"number"==typeof n&&n>-1&&n%1==0&&n<=9007199254740991}function e(r){return null!=r&&o(r.length)&&!n(r)}export{e as a,o as b,u as c,r as i}