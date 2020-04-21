https://leetcode-cn.com/problems/reformat-the-string/
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let charArr = [],numArr=[]
    for(let i =0;i<s.length;i++){
        if('0123456789'.indexOf(s[i])>=0){
            numArr.push(s[i])
        }else{
            charArr.push(s[i])
        }
    }
    if(Math.abs(charArr.length-numArr.length)>1){
     return ""
    }
 let result =[]
    if(charArr.length>=numArr.length){
        for(let i=0;i<charArr.length;i++){
  result.push(charArr[i]||"")
  if(numArr[i])
        result.push(numArr[i]|"")
        }
 
    }
    else{
        for(let i=0;i<numArr.length;i++){
             result.push(numArr[i]|"")
             if(charArr[i])
  result.push(charArr[i]||"")
       
        }
 
       
    }
   return result.join('')
 };
 