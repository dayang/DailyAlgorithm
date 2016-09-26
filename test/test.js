var Algorithm = require("../src/DailyAlgorithm");
var should = require("should");

describe("sort algorithms",function(){
    var array;
    beforeEach(function(){
        array = [1,2,3,0,34,56,12,12,34,12,0,-2];
    });

    it('bubbleSort right',function(){
        Algorithm.bubbleSort(array);
        should(array).eql([-2,0,0,1,2,3,12,12,12,34,34,56]);
    });

    it('quickSort right',function(){
        Algorithm.quickSort(array);
        should(array).eql([-2,0,0,1,2,3,12,12,12,34,34,56]);
    });
});

describe("binary Search",function(){
    var array = [1,2,3,5,12,23,34];
    it("should return 1 with target 2",function(){
       should(Algorithm.binarySearch(array, 2)).equal(1);
    });
    it("should return -1 with target 6",function(){
        should(Algorithm.binarySearch(array, 6)).equal(-1);
    });
});
