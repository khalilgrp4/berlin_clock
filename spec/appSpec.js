import { Main } from '../src/app.js';

describe("A suite of test for the berlinClock function of the main class", function() {
    let main = new Main();
    it("ClockSingleMinute should return YOOO when given 1", function() {
        
        let result = main.clockSingleMinute(1);

        expect(result).toBe("YOOO");
    });

    it("ClockSingleMinute should return YYOO when given 2", function() {
        
        let result = main.clockSingleMinute(2);

        expect(result).toBe("YYOO");
    });

    it("ClockSingleMinute should return YYYO when given 3", function() {
        
        let result = main.clockSingleMinute(3);

        expect(result).toBe("YYYO");
    });

    it("ClockSingleMinute should return YYYY when given 4", function() {
        
        let result = main.clockSingleMinute(4);

        expect(result).toBe("YYYY");
    });
    it("ClockSingleMinute should return OOOO when given 5", function() {
        
        let result = main.clockSingleMinute(5);

        expect(result).toBe("OOOO");
    });
    it("ClockSingleMinute should return YOOO when given 6", function() {
        
        let result = main.clockSingleMinute(6);

        expect(result).toBe("YOOO");
    });
    it("ClockSingleMinute should return YYOO when given 7", function() {
        
        let result = main.clockSingleMinute(7);

        expect(result).toBe("YYOO");
    });
    it("ClockSingleMinute should return YYYO when given 8", function() {
        
        let result = main.clockSingleMinute(8);

        expect(result).toBe("YYYO");
    });
    it("ClockSingleMinute should return YYYY when given 9", function() {
        
        let result = main.clockSingleMinute(9);

        expect(result).toBe("YYYY");
    });
    it("ClockSingleMinute should return OOOO when given 10", function() {
        
        let result = main.clockSingleMinute(10);

        expect(result).toBe("OOOO");
    });
    it("Clock5Minute should return YOOOOOOOOOO when given 5", function() {
        
        let result = main.clock5Minutes(5);

        expect(result).toBe("YOOOOOOOOOO");
    });
    it("Clock5Minute should return YYOOOOOOOOO when given 10", function() {
        
        let result = main.clock5Minutes(10);

        expect(result).toBe("YYOOOOOOOOO");
    });
    it("Clock5Minute should return YYROOOOOOOO when given 15", function() {
        
        let result = main.clock5Minutes(15);

        expect(result).toBe("YYROOOOOOOO");
    });
    it("Clock5Minute should return YYRYOOOOOOO when given 20", function() {
        
        let result = main.clock5Minutes(20);

        expect(result).toBe("YYRYOOOOOOO");
    });
    it("Clock5Minute should return YYRYYOOOOOO when given 25", function() {
        
        let result = main.clock5Minutes(25);

        expect(result).toBe("YYRYYOOOOOO");
    });
    it("Clock5Minute should return YYRYYYOOOOO when given 30", function() {
        
        let result = main.clock5Minutes(30);

        expect(result).toBe("YYRYYROOOOO");
    });
    it("Clock5Minute should return YYRYYRYOOOO when given 35", function() {
        
        let result = main.clock5Minutes(35);

        expect(result).toBe("YYRYYRYOOOO");
    });
    it("Clock5Minute should return YYRYYRYYOOO when given 40", function() {
        
        let result = main.clock5Minutes(40);

        expect(result).toBe("YYRYYRYYOOO");
    });
    it("Clock5Minute should return YYRYYRYYROO when given 45", function() {
        
        let result = main.clock5Minutes(45);

        expect(result).toBe("YYRYYRYYROO");
    });
    it("Clock5Minute should return YYRYYRYYRYO when given 50", function() {
        
        let result = main.clock5Minutes(50);

        expect(result).toBe("YYRYYRYYRYO");
    });
    it("Clock5Minute should return YYRYYRYYRYY when given 55", function() {
        
        let result = main.clock5Minutes(55);

        expect(result).toBe("YYRYYRYYRYY");
    });
    it("Clock5Minute should return OOOOOOOOOOO when given 0", function() {
        let result = main.clock5Minutes(0);

        expect(result).toBe("OOOOOOOOOOO");
    });

    it("clockSingleHour should return ROOO when given 1", function() {
        let result = main.clockSingleHour(1);

        expect(result).toBe("ROOO");
    });

    it("clockSingleHour should return RROO when given 2", function() {
        let result = main.clockSingleHour(2);

        expect(result).toBe("RROO");
    });
    
    it("clockSingleHour should return RRRO when given 3", function() {
        let result = main.clockSingleHour(3);

        expect(result).toBe("RRRO");
    });

    it("clockSingleHour should return RRRR when given 4", function() {
        let result = main.clockSingleHour(4);

        expect(result).toBe("RRRR");
    });

    it("clockSingleHour should return OOOO when given 5", function() {
        let result = main.clockSingleHour(5);

        expect(result).toBe("OOOO");
    });

    it("clockSingleHour should return ROOO when given 6", function() {
        let result = main.clockSingleHour(6);

        expect(result).toBe("ROOO");
    });

    it("clockSingleHour should return RROO when given 7", function() {
        let result = main.clockSingleHour(7);

        expect(result).toBe("RROO");
    });

    it("clockSingleHour should return RRRO when given 8", function() {
        let result = main.clockSingleHour(8);

        expect(result).toBe("RRRO");
    });

    it("clockSingleHour should return RRRR when given 9", function() {
        let result = main.clockSingleHour(9);

        expect(result).toBe("RRRR");
    });

    it("clockSingleHour should return OOOO when given 10", function() {
        let result = main.clockSingleHour(10);

        expect(result).toBe("OOOO");
    });
    it("clock5Hour should return ROOO when given 5", function() {
        let result = main.clock5Hour(5);

        expect(result).toBe("ROOO");
    });
    it("clock5Hour should return RROO when given 10", function() {
        let result = main.clock5Hour(10);

        expect(result).toBe("RROO");
    });
    it("clock5Hour should return RRRO when given 15", function() {
        let result = main.clock5Hour(15);

        expect(result).toBe("RRRO");
    });
    it("clock5Hour should return RRRR when given 20", function() {
        let result = main.clock5Hour(20);

        expect(result).toBe("RRRR");
    });
    it("clock5Hour should return OOOO when given 0", function() {
        let result = main.clock5Hour(0);

        expect(result).toBe("OOOO");
    });

    it("clockSecond should return O when given 1", function() {
        let result = main.clockSecond(1);

        expect(result).toBe("O");
    });

    it("clockSecond should return R when given 2", function() {
        let result = main.clockSecond(2);

        expect(result).toBe("R");
    });

    it("clockSecond should return O when given 3", function() {
        let result = main.clockSecond(3);

        expect(result).toBe("O");
    });

    it("clockSecond should return R when given 4", function() {
        let result = main.clockSecond(4);

        expect(result).toBe("R");
    });

    it("clockSecond should return O when given 5", function() {
        let result = main.clockSecond(5);

        expect(result).toBe("O");
    });

    it("clockSecond should return R when given 6", function() {
        let result = main.clockSecond(6);

        expect(result).toBe("R");
    });

    it("clockSecond should return O when given 7", function() {
        let result = main.clockSecond(7);

        expect(result).toBe("O");
    });

    it("clockSecond should return R when given 8", function() {
        let result = main.clockSecond(8);

        expect(result).toBe("R");
    });
    
    it("clockSecond should return O when given 9", function() {
        let result = main.clockSecond(9);
        expect(result).toBe("O");
    });

    it("clockSecond should return R when given 10", function() {
        let result = main.clockSecond(10);

        expect(result).toBe("R");
    });

    it("belinClock should return the berlinClockDisplay when given 1731589430(timestamp) ", function() {
        let result = main.berlinClock(1731589430);
        console.log(result);
    });



});
