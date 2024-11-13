export class Main {
    clockSingleMinute(minutes){
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
    clock5Minutes(minutes){
        if(minutes === 5){
           return "YOOOOOOOOOO";
        }
        if(minutes === 10){
            return "YYOOOOOOOOO";
         }
         if(minutes === 15){
            return "YYROOOOOOOO";
         }
         if(minutes === 20){
            return "YYRYOOOOOOO";
         }
         if(minutes === 25){
            return "YYRYYOOOOOO";
         }
         if(minutes === 30){
            return "YYRYYROOOOO";
         }
         if(minutes === 35){
            return "YYRYYRYOOOO";
         }
         if(minutes === 40){
            return "YYRYYRYYOOO";
         }
         if(minutes === 45){
            return "YYRYYRYYROO";
         }
         if(minutes === 50){
            return "YYRYYRYYRYO";
         }
         if(minutes === 55){
            return "YYRYYRYYRYY";
         }
         if(minutes === 60){
            return "OOOOOOOOOOO";
         }

         
    }

    clockSingleHour(hour){
        if(hour === 1){
            return "ROOO"
        }
        if(hour === 2){
            return "RROO"
        }
        if(hour === 3){
            return "RRRO";
        }
        if(hour === 4){
            return "RRRR";
        }
        if(hour === 5){
            return "OOOO";
        }
        if(hour === 6){
            return "ROOO";
        }
        if(hour === 7){
            return "RROO";
        }
        if(hour === 8){
            return "RRRO";
        }
        if(hour === 9){
            return "RRRR";
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
