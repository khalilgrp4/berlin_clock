export class Main {
    clockSingleMinute(minutes){
        if(lastDigitMinFinishWith1or6(minutes)){
            return "YOOO";
        }

        if(lastDigitMinFinishWith2or7(minutes)){
            return "YYOO";
        }

        if(lastDigitMinFinishWith3or8(minutes)){
            return "YYYO";
        }

        if(lastDigitMinFinishWith4or9(minutes)){
            return "YYYY";
        }
        if(lastDigitMinFinishWith5or0(minutes)){
            return "OOOO"
        }
    }
    clock5Minutes(minutes){
        if(minutes >= 5 && minutes<10){
           return "YOOOOOOOOOO";
        }
        if(minutes >= 10 && minutes < 15){
            return "YYOOOOOOOOO";
         }
         if(minutes >= 15 && minutes < 20){
            return "YYROOOOOOOO";
         }
         if(minutes >= 20 && minutes < 25){
            return "YYRYOOOOOOO";
         }
         if(minutes >= 25 && minutes < 30){
            return "YYRYYOOOOOO";
         }
         if(minutes >= 30 && minutes < 35){
            return "YYRYYROOOOO";
         }
         if(minutes >= 35 && minutes < 40){
            return "YYRYYRYOOOO";
         }
         if(minutes >= 40 && minutes < 45){
            return "YYRYYRYYOOO";
         }
         if(minutes >= 45 && minutes < 50){
            return "YYRYYRYYROO";
         }
         if(minutes >= 50 && minutes < 55){
            return "YYRYYRYYRYO";
         }
         if(minutes >= 55 && minutes < 60){
            return "YYRYYRYYRYY";
         }
         if(minutes === 0){
            return "OOOOOOOOOOO";
         }

         
    }

    clockSingleHour(hour){
        if(lastDigitHourFinishWith1or6(hour)){
            return "ROOO"
        }
        if(lastDigitHourFinishWith2or7(hour)){
            return "RROO"
        }
        if(lastDigitHourFinishWith3or8(hour)){
            return "RRRO";
        }
        if(lastDigitHourFinishWith4or9(hour)){
            return "RRRR";
        }
        if(lastDigitHourFinishWith5or0(hour)){
            return "OOOO";
        }

    }
    clock5Hour(hour){
        if(hour >= 5 && hour < 10){
            return "ROOO";
         }
         if(hour >= 10 && hour < 15){
            return "RROO";
         }
         if(hour >= 15 && hour < 20){
            return "RRRO";
         }
         if(hour == 20){
            return "RRRR";
         }
         if(hour === 0){
            return "OOOO";
         }
      
    }

    clockSecond(second){
        if(second%2 === 0){
            return "R";
        }
        return "O";
    }

    berlinClock(timestamp){
        const date = new Date(timestamp * 1000);
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const secondsDisplay = this.clockSecond(seconds);
        const fiveHourDisplay = this.clock5Hour(hour);
        const singleHourDisplay = this.clockSingleHour(hour);
        const fiveMinutesDisplay = this.clock5Minutes(minutes);
        const singleMinuteDisplay = this.clockSingleMinute(minutes);
        const berlinClockDisplay = `
        ${secondsDisplay}
        ${fiveHourDisplay}
        ${singleHourDisplay}
        ${fiveMinutesDisplay}
        ${singleMinuteDisplay}`;

        return berlinClockDisplay.trim();
    }

}

























function lastDigitMinFinishWith1or6(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 1 || lastDigit === 6;
            
}

function lastDigitMinFinishWith2or7(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 2 || lastDigit === 7;
}

function lastDigitMinFinishWith3or8(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 3 || lastDigit === 8;
}

function lastDigitMinFinishWith4or9(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 4 || lastDigit === 9;
}

function lastDigitMinFinishWith5or0(minutes) {
    let lastDigit = minutes % 10;
    return lastDigit === 5 || lastDigit === 0;
}


function lastDigitHourFinishWith1or6(hour) {
    let lastDigit = hour % 10;
    return lastDigit === 1 || lastDigit === 6;
            
}

function lastDigitHourFinishWith2or7(hour) {
    let lastDigit = hour % 10;
    return lastDigit === 2 || lastDigit === 7;
}

function lastDigitHourFinishWith3or8(hour) {
    let lastDigit = hour % 10;
    return lastDigit === 3 || lastDigit === 8;
}

function lastDigitHourFinishWith4or9(hour) {
    let lastDigit = hour % 10;
    return lastDigit === 4 || lastDigit === 9;
}

function lastDigitHourFinishWith5or0(hour) {
    let lastDigit = hour % 10;
    return lastDigit === 5 || lastDigit === 0;
}
