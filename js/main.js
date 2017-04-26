/**
 * Created by zacone on 2017/3/31.
 */
var ffo = {
    // 生成指定个数不重复的随机数
    rdnr: function (num, top) {
        if (num > top) {
            console.log('生成随机数的数量要小于生成随机数的上限');
            return;
        }
        var arr = new Array(top);
        for (var i = 0; i < num; i++) {
            var rdNum = this.rd(top);
            if (this.isRepeat(rdNum, arr)) {
                i--;
            }
            arr[rdNum - 1] = rdNum;
        }
        return arr;
    },
    // 生成随机数
    rd: function (top) {
        return Math.floor(Math.random() * top)+1;
    },
    // 判断是否重复
    isRepeat: function (num, arr) {
        for (var i in arr) {
            if (num === arr[i]) {
                return true;
            }
        }
        return false;
    },
    arrayTrim: function (arr) {
        var arr0 = new Array();
        var num = 0;
        for(var i in arr){
            if (typeof (arr[i]) === 'number'){
                arr0[num] = arr[i];
                num ++;
            }
        }
        return arr0;
    },
    plzh: function(all,selected){
    	var z = all;
    	for(var i = 1; i < selected; i++){
    		z = z*(all - i)
    	}
    	return z/this.jc(selected)
    },
    jc: function(num){
    	var z = num;
    	for(var i = 1; i < num; i++){
    		z = z*(num - i)
    	}
    	return z;
    }
};

