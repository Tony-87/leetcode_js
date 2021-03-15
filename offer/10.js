
function fib(n){
   return fib_iter(1,0,n)
}

function fib_iter(a,b,count){
    if(count==0){
        return b
    }else{
        return fib_iter(a+b,a,count-1)
    }
}

for(let i=0;i<50;i++){
    console.log(fib(i));
} 

function fibonacci(count){
    function fn(count,curr=0,next=1){
        if(count==0){
            return curr
        }else{

            return fn(count-1,next,curr+next)
        }
    }
    return fn(count)
}
console.log(fibonacci(5));

function fib2(n){
    [a,b] = [0,1]
    for( i in n){
        [a,b] = [b,a+b]
    }
    return a%1000000007
}
console.log(fib2(5));