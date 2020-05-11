// https://leetcode-cn.com/problems/binary-tree-right-side-view/

// 前序遍历树，得到数组，

var rightSideView = function (root) {
    if(!root){
        return []
    }
    let result = [root.val]
    let right = root.right||null
    while (right!=null) {
        result.push(right.val)
        right = right.right || null
    }
    return result
}

function getFloorVal(treeNode){
    let result = [treeNode.val]

    if(treeNode.left){
        result.push(treeNode.left.val)
        //  
    }
    else{
        result.push(null)
    }
    if(treeNode.right){
        result.push(treeNode.right.val)
        // 
    }else{
        result.push(null)
    }
    
    result = result.concat(getFloorVal(treeNode.left))
    result = result.concat(getFloorVal(treeNode.right))

    return result
}

var tree = {
    "val": 1,
    "left": {
        "val": 2,
        "left": null,
        "right": {
            "val": 5,
            "left": null,
            "right": null
        }
    },
    "right": {
        "val": 3,
        "left": null,
        "right": {
            "val": 4,
            "left": null,
            "right": null
        }
    }
}
var r = rightSideView(null)
console.log(r)
