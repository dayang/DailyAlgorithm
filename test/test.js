var Algorithm = require("../src/DailyAlgorithm");
var should = require("should");

describe("快速排序",function(){
    it('return good',function(){
        should(Algorithm.quickSort()).equal("good");
    })
});
