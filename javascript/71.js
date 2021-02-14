/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    var paths = path.split('/'),stack = [];
    for(item of paths){
        if(item==='.'||item===''){
            continue
        }
        if(item==='..'){
            stack.length>0
            ? stack.pop()
            : null
            continue
        }
        stack.push(item)
    }
    return '/'+stack.join('/')
};

let r = simplifyPath('/a/./b/../../c/')
console.log(r);