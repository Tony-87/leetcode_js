/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands1 = function (grid) {
    var result = []

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                //可能遇到新岛屿
                let curKey = i + ',' + j
                let hasReg = []
                for (let k = 0; k < result.length; k++) {

                    if (i > 0) {
                        if (result[k].indexOf((i - 1) + ',' + j) != -1) {
                            result[k].push(curKey)
                            hasReg.push(k)
                        }
                    }
                    if (result[k].indexOf((i + 1) + ',' + j) != -1) {
                        result[k].push(curKey)
                        hasReg.push(k)
                    }

                    if (j > 0) {
                        if (result[k].indexOf((i) + ',' + (j - 1)) != -1) {
                            result[k].push(curKey)
                            hasReg.push(k)
                        }
                    }
                    if (result[k].indexOf((i) + ',' + j + 1) != -1) {
                        result[k].push(curKey)
                        hasReg.push(k)
                    }
                }

                if (hasReg.length==0) {
                    result.push([curKey])
                }
                if(hasReg.length>1){
                    result[hasReg[0]]=result[hasReg[0]].concat(result[hasReg[1]])
                    result = result.splice(hasReg[1],1)
                }

                // if (result[k].indexOf(i + ',' + j) != -1) {
                //     result[k].push(curKey)
                // }

            }

        }
    }

    return result.length
}

var numIslands = function (grid){
    var result = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if(grid[i][j]==1){
                result++
                addIsLands(grid,i,j)//递归，把想关联的全部加进来，修改值
                //用递归去把相关联的全部找到，然后置为2，
            }
        }
    }
    return result
}

function addIsLands(grid,i,j){
    grid[i][j]=2
    if(i>0 && grid[i-1][j]==1 ){
        grid[i-1][j]=2
        addIsLands(grid,i-1,j)
    }
    if(grid[i+1] && grid[i+1][j]==1){
        grid[i+1][j]=2
        addIsLands(grid,i+1,j)
    }
    if(j>0 && grid[i][j-1]==1){
        grid[i][j-1]=2
        addIsLands(grid,i,j-1)
    }
    if(grid[i][j+1] && grid[i][j+1]==1){
        grid[i][j+1]=2
        addIsLands(grid,i,j+1)
    }
}

var p1 = [
    ["1", "1", "1"],
    ["0", "1", "0"],
    ["1", "1", "1"]]
    //1
var p2 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]]
    //1 
var p3 = [
    ["0", "0", "0", "1", "0"],
    ["0", "0", "0", "0", "1"],
    ["0", "1", "0", "1", "1"],
    ["0", "1", "1", "1", "0"]]

var a = numIslands(p3)

console.log(a)
