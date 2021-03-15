var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }

  const rows = matrix.length,
    columns = matrix[0].length;
  let order = [];
  let left = 0,
    top = 0,
    right = columns - 1,
    bottom = rows - 1;

  while (left <= right && top <= bottom) {
      for(let column = left;column<=right;column++){
          order.push(matrix[top][column])
      }
      for(let row = top+1;row<=bottom;row++){
          order.push(matrix[row][right])
      }
      if(left<right && top<bottom){
        for(let column = right-1;column>left;column--){
            order.push(matrix[bottom][column])
        }
        for(let row=bottom;row>top;row--){
            order.push(matrix[row][left])
        }
      }
      left ++
      right--
      top++
      bottom--
  }

  return order;
};


matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]

console.log(spiralOrder(matrix));