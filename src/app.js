export class Main {
    ClockSingleMinute(minutes){
        
        
        if(lastDigitFinishWith1or6(minutes)){
            return "YOOO";
        }

        if(lastDigitFinishWith2or7(minutes)){
            return "YYOO";
        }

        if(lastDigitFinishWith3or8(minutes)){
            return "YYYO";
        }

        if(minutes === 4){
            return "YYYY";
        }
        if(minutes === 5){
            return "OOOO"
        }
        
        if(minutes === 8){
            return "YYYO"
        }
        if(minutes === 9){
            return "YYYY"
        }
        if(minutes === 10){
            return "OOOO"
        }

    
    }
    

}
function lastDigitFinishWith1or6(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 1 || lastDigit === 6;
            
}

function lastDigitFinishWith2or7(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 2 || lastDigit === 7;
}

function lastDigitFinishWith3or8(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 3 || lastDigit === 8;
}
