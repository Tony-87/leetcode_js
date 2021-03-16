/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if(root==null){
        return true
    }
    return isBalanced(root.left)
    && isBalanced(root.right)
    && (Math.abs( dfs(root.left,1)-dfs(root.right,1) )<2)
};

function dfs( root,  curDepth){
    if(!root){return curDepth}
    curDepth++
    return Math.max(dfs(root.left,curDepth),dfs(root.right,curDepth))
}