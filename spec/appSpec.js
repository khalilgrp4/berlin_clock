import { Main } from "../src/app";

describe("A suite of test for the berlinClock function of the main class", function() {
    let main = new Main();
    it("ClockSingleMinute should return YOOO when given 1", function() {
        const result = main.ClockSingleMinute(33);

        expect(result).toBe("YOOO");
    });


})