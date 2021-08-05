// 1070Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case. 
function consecutiveoddNumber(x){
    // Global variable
    let d= [];
    let f=[x+1];
    let f1= x+1;
    //if even
   if(x%2===0){
    let newVariable;
    let i;
    for(i=1; i<5;i++){
            f1 = f1+2;  
            d.push(f1);
        }
        newVariable= f.concat(d) // ১ 
        console.log(newVariable);
    }
    //if odd
    else if(x%2===1){
        let newVariable;
        let i;
        for(i=1; i<=5;i++){
            x+=2;  
            d.push(x);
        }
        
        console.log(d);
    }     

}
let randomNumber = Math.round(Math.random()*20);
console.log(randomNumber); 
consecutiveoddNumber(randomNumber); 

