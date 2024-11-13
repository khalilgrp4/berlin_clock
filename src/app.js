export class Main {
    ClockSingleMinute(minutes){

        if(lastNumberFinishWith1or6(minutes)){
            return "YOOO";
        }

        if(minutes === 2 ){
            return "YYOO";
        }
        
        if(minutes === 3){
            return "YYYO";
        }

        if(minutes === 4){
            return "YYYY";
        }
        if(minutes === 5){
            return "OOOO"
        }
        if(minutes === 7){
            return "YYOO"
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