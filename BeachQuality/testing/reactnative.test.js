test("<App JSON>", () => {
    const json = require("../client/app.json");
    var jsonCount = Object.keys(json).length;
    var expoCount = Object.keys(json.expo).length;
    var platformCount = Object.keys(json.expo.platforms).length;
    expect(jsonCount).toBe(1);
    expect(expoCount).toBe(11);
    expect(platformCount).toBe(3);
    expect(json.expo.platforms).toContain("ios");
    expect(json.expo.platforms).toContain("android");
    expect(json.expo.platforms).toContain("web");
});


test("<PAGES>", () => {
    const PAGES = require("../client/pages/index");
    expect(Object.keys(PAGES).length).toBe(8);
});
