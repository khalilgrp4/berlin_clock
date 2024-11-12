import { Main } from '../src/app.js';

describe("A suite of test for the berlinClock function of the main class", function() {
    
    it("ClockSingleMinute should return YOOO when given 1", function() {
        let main = new Main();
        let result = main.ClockSingleMinute(1);

        expect(result).toBe("YOOO");
    });


});