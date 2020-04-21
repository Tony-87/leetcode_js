// https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var letter26 = 'abcdefghijklmnopqrstuvwxyz';
    var result = []
    for(var i=0,len=words.length;i<len;i++){
        var itemMorse = ''
        for( c in words[i]){
           var index = letter26.indexOf( words[i][c])
           itemMorse+=morseArr[index]
        }
        if(result.indexOf(itemMorse)==-1){
            result.push(itemMorse)
        }
    }
    return result.length
};