const displayquestion = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("displayquestion works correctly", () => {
    beforeAll(() => {
        document.getElementById("operand1").innerText = 0;
        document.getElementById("operand2").innerText = 0;
        document.getElementById("operator").innerText = "x";
        displayquestion();
    });
    test("should display 0 for the element with id of operand2", () => {
        expect(document.getElementById("operand1").innerText).toEqual(0);
    });
    test("should display 0 for the element with id of operand2", () => {
        expect(document.getElementById("operand2").innerText).toEqual(0);
    });
    test("should display x for the element with id of operator", () => {
        expect(document.getElementById("operator").innerText).toEqual("x");
    });
});

describe("DOM tests", () => {
	test("Should have six span in game", () => {
        expect(document.getElementsByTagName("span").length).toBe(6);
    });

    test("should be five buttons exist in game", () => {
        expect(document.getElementsByTagName("button").length).toBe(5);
    });

});
