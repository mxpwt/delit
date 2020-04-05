"use strict";
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
function delit(obj) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  var fullArgs = ["false", "", "null", "NaN", "0", "[]", "{}"];
  var difference = args
    ? fullArgs.filter(function (x) {
        return !args.includes(x);
      })
    : fullArgs;
  Object.keys(obj).forEach(function (key) {
    if (args && args.includes("undefined") && String(obj[key]) === "undefined")
      obj[key] = "undefined";
    if (args && args.includes("NaN") && String(obj[key]) === "NaN")
      obj[key] = "NaN";
    var vrfy = !!difference.includes(String(obj[key]));
    (obj[key] &&
      typeof obj[key] === "object" &&
      delit.apply(void 0, __spreadArrays([obj[key]], args))) ||
      (vrfy && delete obj[key]);
    if (
      Array.isArray(obj[key]) &&
      args &&
      !args.includes(JSON.stringify(obj[key]))
    )
      obj[key] = obj[key].filter(function (el) {
        return el;
      });
  });
  return clearObjectsEmpties(obj, args);
}
function clearObjectsEmpties(obj, args) {
  for (var prop in obj) {
    if (
      !obj[prop] ||
      typeof obj[prop] !== "object" ||
      (args && args.includes(JSON.stringify(obj[prop])))
    )
      continue;
    if (Array.isArray(obj[prop]))
      obj[prop] = obj[prop].filter(function (el) {
        return el;
      });
    clearObjectsEmpties(obj[prop], args);
    if (Object.keys(obj[prop]).length === 0) delete obj[prop];
  }
  return obj;
}
module.exports = delit;
