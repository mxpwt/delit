const expect = require("chai").expect;
const { cloneDeep } = require("lodash");
let delit, object, objOriginal;

// function delit(object, [, exclude(string)])
describe("delit(object)", function () {
  beforeEach(function () {
    delit = require("delit");
    object = require("./objects");
    objOriginal = cloneDeep(object[0]);
  });

  it("delete all except []", function () {
    const result1 = delit(objOriginal, "[]");
    expect(JSON.stringify(result1) === JSON.stringify(object[1])).to.be.true;
  });
  it("delete all", function () {
    const result2 = delit(objOriginal);
    expect(JSON.stringify(result2) === JSON.stringify(object[7])).to.be.true;
  });
  it("delete all except 0", function () {
    const result3 = delit(objOriginal, "0");
    expect(JSON.stringify(result3) === JSON.stringify(object[8])).to.be.true;
  });
  it("delete all except false", function () {
    const result4 = delit(objOriginal, "false");
    expect(JSON.stringify(result4) === JSON.stringify(object[9])).to.be.true;
  });
  it("delete all except null & ''", function () {
    const result5 = delit(objOriginal, "null", "");
    expect(JSON.stringify(result5) === JSON.stringify(object[10])).to.be.true;
  });
  it("delete {}", function () {
    const result6 = delit(objOriginal, "null", "false", "", "0", "[]");
    expect(JSON.stringify(result6) === JSON.stringify(object[2])).to.be.true;
  });
  it("delete []", function () {
    const result7 = delit(objOriginal, "null", "false", "", "0", "{}");
    expect(JSON.stringify(result7) === JSON.stringify(object[11])).to.be.true;
  });
  it("delete all except ''", function () {
    const result8 = delit(objOriginal, "");
    expect(JSON.stringify(result8) === JSON.stringify(object[12])).to.be.true;
  });
  it("delete all except {}", function () {
    const result9 = delit(objOriginal, "{}");
    expect(JSON.stringify(result9) === JSON.stringify(object[13])).to.be.true;
  });
  it("delete all except undefined (as string)", function () {
    const result10 = delit(objOriginal, "undefined");
    expect(JSON.stringify(result10) === JSON.stringify(object[14])).to.be.true;
  });
  it("delete all except NaN (as string)", function () {
    const result11 = delit(objOriginal, "NaN");
    expect(JSON.stringify(result11) === JSON.stringify(object[15])).to.be.true;
  });
  it("delete all except 0, undefined (as string) & []", function () {
    const result12 = delit(objOriginal, "undefined", "0", "[]");
    //console.log(JSON.stringify(result12, null, 2));
    expect(JSON.stringify(result12) === JSON.stringify(object[16])).to.be.true;
  });
});
