import { Main } from '../src/app.js';

describe("A suite of test for the berlinClock function of the main class", function() {
    let main = new Main();
    it("ClockSingleMinute should return YOOO when given 1", function() {
        
        let result = main.ClockSingleMinute(1);

        expect(result).toBe("YOOO");
    });

    it("ClockSingleMinute should return YYOO when given 2", function() {
        
        let result = main.ClockSingleMinute(2);

        expect(result).toBe("YYOO");
    });

    it("ClockSingleMinute should return YYYO when given 3", function() {
        
        let result = main.ClockSingleMinute(3);

        expect(result).toBe("YYYO");
    });


});