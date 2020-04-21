/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
    let result = [['Table']]
    let foodDic ={},foodArr= [],numArr=[]
    for (let i = 0; i < orders.length; i++) {
        
        let num = orders[i][1]
        let food = orders[i][2]
        if(!foodArr.includes(food)){
            foodArr.push(food)
        }
        if(!numArr.includes(num)){
            numArr.push(num)
        }
        if(!foodDic[num])
        foodDic[num]={}

        if(foodDic[num][food]){
            foodDic[num][food]++
        }
        else{
            foodDic[num][food]=1
        }
    }
    foodArr.sort()
    numArr.sort(function(a,b){return a-b})

    for(let i=0;i<foodArr.length;i++){
        result[0].push(foodArr[i])

        for(let j=0;j<numArr.length;j++){
            if(!result[j+1]){
                result[j+1]=[numArr[j]]
            }
            let val = foodDic[numArr[j]][foodArr[i]]
           result[j+1][i+1]=val?val.toString():'0'
        }
    }
   
    return result
}

var r = displayTable(orders = [["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]])
console.log(r);
 