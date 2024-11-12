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

    it("ClockSingleMinute should return YYYY when given 4", function() {
        
        let result = main.ClockSingleMinute(4);

        expect(result).toBe("YYYY");
    });
    it("ClockSingleMinute should return OOOO when given 5", function() {
        
        let result = main.ClockSingleMinute(5);

        expect(result).toBe("OOOO");
    });
    it("ClockSingleMinute should return YOOO when given 6", function() {
        
        let result = main.ClockSingleMinute(6);

        expect(result).toBe("YOOO");
    });
    it("ClockSingleMinute should return YYOO when given 7", function() {
        
        let result = main.ClockSingleMinute(7);

        expect(result).toBe("YYOO");
    });
    it("ClockSingleMinute should return YYYY when given 9", function() {
        
        let result = main.ClockSingleMinute(9);

        expect(result).toBe("YYYY");
    });
    it("ClockSingleMinute should return OOOO when given 10", function() {
        
        let result = main.ClockSingleMinute(10);

        expect(result).toBe("OOOO");
    });


});