//const runGame = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

/*describe("runGame works correctly", () => {
    beforeAll(() => {
       num1 = 5;
       num2 = 6;
       runGame();

    });
    test("displayquestion works correctly", () => {
        expect(displayquestion()).toBe(30);
    });
});*/
describe("DOM tests", () => {
	/*test("h3 should exist", () => {
        expect(document.getElementsByTagName("h3").length).toBe(1);
    });*/

    test("should be five buttons exist in game", () => {
        expect(document.getElementsByTagName("button").length).toBe(5);
    });

});
