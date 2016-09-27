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

//insertSort 插入排序
DailyAlgorithm.prototype.insertSort = function(array){
    var i, j, len = array.length, temp;
    for(i = 1; i < len; i++){
        temp = array[i];              //temp保存a[i]值，a[i]会被覆盖
        for(j = i - 1; j >= 0 && array[j] > temp; j--){
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }
};

//mergeSort 归并排序
DailyAlgorithm.prototype.mergeSort = function(array){
    function merge(low, mid, high){
        var temp = [];
        var i = low, j = mid + 1, k = 0;
        while(i <= mid && j <= high){
            temp[k++] = array[i] <= array[j] ? array[i++] : array[j++];
        }
        while(i <= mid) temp[k++] = array[i++];
        while(j <= high) temp[k++] = array[j++];

        for(i = 0; i < k; i++){
            array[low + i] = temp[i];
        }
    }

    function mergeRecursive(low, high){
        if(low < high){
            var mid = Math.floor((low + high) / 2);
            mergeRecursive(low, mid);
            mergeRecursive(mid + 1, high);
            merge(low, mid, high);
        }
    }

    mergeRecursive(0, array.length - 1);
};

//binarySearch 二分查找
// 返回目标元素的下标，若没有返回-1
DailyAlgorithm.prototype.binarySearch = function(array, target){
    var low = 0, high = array.length - 1, mid;
    while(low <= high){
        mid = Math.floor((low + high) / 2);
        if(array[mid] === target)
            return mid;
        if(target > array[mid]){
            low = mid + 1;
        }else{
            high = mid - 1;
        }
    }
    return -1;
};

module.exports =new DailyAlgorithm();