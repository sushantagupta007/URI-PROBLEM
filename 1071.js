// 1070Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.

function consecutiveoddNumber(x){
        let d = [];
        for(x; x<=x+12;x++){
            if(x%2===1||x%2===-1){
            d.push(x);
        }
    }
    console.log(d);
}
consecutiveoddNumber(5); 