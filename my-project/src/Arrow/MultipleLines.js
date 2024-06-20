const Sum=(arr)=>{
    let sum=0
    arr.forEach(num => {
        sum+=num
    });
    return sum
}
console.log(Sum([1,2,3,4,5]))