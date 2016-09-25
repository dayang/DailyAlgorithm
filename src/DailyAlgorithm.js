/**
 * Copyright (c) 2016 dayang
 * License: MIT
 * https://github.com/dayang/DailyAlgorithm
 **/
function DailyAlgorithm(){}

// sort algorithms

//bubbleSort 冒泡排序
DailyAlgorithm.prototype.bubbleSort = function(array){
    var i, j, temp, len = array.length;
    for(i = 0; i < len - 1; i++){
        for(j = 1; j < len - i; j++){
            if(array[j] < array[j-1]){
                temp = array[j-1];
                array[j-1] = array[j];
                array[j] = temp;
            }
        }
    }
};

//quickSort 快速排序
DailyAlgorithm.prototype.quickSort = function(array){
    sortHelper(0,array.length - 1);

    function sortHelper(left, right) {
        if(left < right){
            var low = left, high = right, key = array[low];
            while(low < high){
                while(low < high && array[high] >= key){
                    high --;
                }
                array[low] = array[high];
                while(low < high && array[low] <= key){
                    low ++;
                }
                array[high] = array[low];
            }
            array[low] = key;
            sortHelper(left, low - 1);
            sortHelper(low + 1, right);
        }
    }
};

module.exports =new DailyAlgorithm();