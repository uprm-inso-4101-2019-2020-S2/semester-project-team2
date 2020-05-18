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

/*
test("<PAGES>", () => {
    const PAGES = require("../client/pages/index");
    expect(Object.keys(PAGES).length).toBe(8);
}); */

/*
test("<Ansi Align>", () => {
    const al = require("../node_modules/ansi-align");
    const opts = {align: "left"};
    const text = "Lorem Ipsum";
    const rtn_txt = ansiAlign(text, opts);
    expect(rtn_txt).toEqual(text);
}); */

test("<Assets>", () => {
    const fs = require("fs");
    const path = "../BeachQuality/client/assets/";
    const icon = path + "icon.png";
    const signupbackground = path + "signupBackground.jpeg";
    const splash = path + "splash.png";
    expect(fs.existsSync(icon)).toBeTruthy();
    expect(fs.existsSync(signupbackground)).toBeTruthy();
    expect(fs.existsSync(splash)).toBeTruthy();
});
