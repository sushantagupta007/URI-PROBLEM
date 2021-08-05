//1071
//Sum of Consecutive Odd Numbers I

function sumOddNumbe(){
    let d = [];
    let total =0;
    for(let x = -2; x<=10;x++){
            if(x%2===1||x%2===-1){
                d.push(x);
            }
    }
    console.log(d);
    d.forEach(function(item){
        total+=item;
    })
    console.log(total);
}
sumOddNumber();