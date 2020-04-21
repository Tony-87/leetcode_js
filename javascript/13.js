// https://leetcode.com/problems/roman-to-integer/submissions/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var romanArr = s.split('')
    var romanDic = {
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000
    }
    var numArr = []
    for(var i=0;i<romanArr.length;i++){
      numArr.push(romanDic[romanArr[i]])
    }
     
    var result = numArr[numArr.length-1];
    
    for(var i=numArr.length-1;i>=0;i--){
        //result+=numArr[i]
        if(numArr[i]>numArr[i-1]){
            result -= numArr[i-1]
        }
        
        if(numArr[i]<=numArr[i-1] ){
          result += numArr[i-1]
        }
    }
    return result
};