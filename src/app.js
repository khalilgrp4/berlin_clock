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

        if(lastDigitFinishWith4or9(minutes)){
            return "YYYY";
        }
        if(lastDigitFinishWith5or0(minutes)){
            return "OOOO"
        }
    }
    Clock5Minutes(minutes){
        if(minutes === 5){
           return "YOOOOOOOOOOO"
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

function lastDigitFinishWith4or9(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 4 || lastDigit === 9;
}

function lastDigitFinishWith5or0(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 5 || lastDigit === 0;
}
