

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0
    let charObj = {}
    for(let i=0;i<s.length;i++){
        if(!charObj[s[i]]){
            charObj[s[i]] = []
        }
        charObj[s[i]].push(i)
    }
    for(let key in charObj){
        let arr = charObj[key]
        for(let i = 0;i<arr.length-1;i++){
            for(let k = i+1;k<arr.length;k++){
                var str = s.substring(arr[i],arr[k]+1)
                if(str==str.split('').reverse().join('')){
                    count++
                }
            }
        }
    }
    count+=s.length
    return count
};

console.time('time')
// console.log(countSubstrings('aaa'));
// console.log(countSubstrings('ababa'));
console.log(countSubstrings('a'.repeat(1000)));
console.timeEnd('time')