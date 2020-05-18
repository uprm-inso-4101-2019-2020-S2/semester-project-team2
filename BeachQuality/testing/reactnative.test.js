
//Fields to be correct.
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

//Ansi "short-circuit" text align
test("<Ansi Align>", () => {
    const ansiAlign = require("../node_modules/ansi-align");
    const opts_left = {align: "left"};
    const text = "Lorem Ipsum";
    const rtn_txt = ansiAlign(text, opts_left);
    expect(rtn_txt).toEqual(text);
});

//Confirms assets exist
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

//Fields to exist
test("<Client Package JSON>", () => {
    const json = require("../client/package.json")
    var fieldcount = Object.keys(json).length;
    expect(fieldcount).toBe(6);
    expect(json.private).toBeTruthy();
    expect(json.proxy).toEqual("http://localhost:4000");
    expect(Object.keys(json.scripts).length).toBe(5);
    expect(Object.keys(json.dependencies)).toContain("native-base");
    expect(Object.keys(json.dependencies)).toContain("expo");
    expect(Object.keys(json.dependencies)).toContain("react");
    expect(Object.keys(json.dependencies)).toContain("react-native");
    expect(Object.keys(json.dependencies)).toContain("react-redux");
});

//Project package.json exists
test("<Project package.json Exists>", () => {
    const fs = require("fs");
    expect(fs.existsSync("../BeachQuality/package.json")).toBeTruthy();
});



