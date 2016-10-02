/**
 * Copyright (c) 2016 dayang
 * License: MIT
 * https://github.com/dayang/DailyAlgorithm
 **/
function DailyAlgorithm(){}

// sort algorithms 排序算法

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

//binary tree traversal  树的遍历
//preOrder 先序遍历递归版
DailyAlgorithm.prototype.preOrderRecursive = function(root){
  if(root !== null){
      //operate(root);
      this.preOrderRecursive(root.left);
      this.preOrderRecursive(root.right);
  }
};

//preOrder 先序遍历非递归版
DailyAlgorithm.prototype.preOrder = function(root){
    if(root == null) return;
    var stack = [];
    stack.push(root);
    while(stack.length > 0){
        root = stack.pop();
        //operate(root)
        if(root.right != null) stack.push(root.right);
        if(root.left != null) stack.push(root.left);
    }
};

//midOrder 中序遍历递归版
DailyAlgorithm.prototype.midOrderRecursive = function(root){
    if(root !== null){
        this.midOrderRecursive(root.left);
        //operate(root);
        this.midOrderRecursive(root.right);
    }
};

//midOrder 中序遍历非递归版
DailyAlgorithm.prototype.midOrder = function(root){
    if(root == null) return;
    var stack = [];
    while(root !== null || stack.length > 0){
        while(root !== null){
            stack.push(root);
            root = root.left;
        }
        if(stack.length > 0){
            root = stack.pop();
            //operate(root);
            root = root.right;
        }
    }
};

//postOrder 后序遍历递归版
DailyAlgorithm.prototype.postOrderRecursive = function(root){
    if(root !== null){
        this.postOrderRecursive(root.left);
        this.postOrderRecursive(root.right);
        //operate(root);
    }
};

//postOrder 后序遍历非递归版
DailyAlgorithm.prototype.postOrder = function(root){

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