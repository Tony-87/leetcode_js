/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var i = 0;
     for(var j=0; j<J.length; j++) {
         for(var s=0; s<S.length; s++) {
             if(J[j] == S[s]) i++;
         }
     }
     return i; 
};

var r = numJewelsInStones('aA','aAAbbbb')
console.log(r);
