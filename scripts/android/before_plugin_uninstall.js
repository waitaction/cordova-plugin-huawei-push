var fs = require('fs');

var buildGradleFilePath = "platforms/android/build.gradle";

function removeFromBuildGradleFile() {
    var data = fs.readFileSync(buildGradleFilePath, 'utf8');
    data = data.replace(/\/\/#CORDOVA-PLUGIN-HUAWEI-PUSH#START[\s\S]*?\/\/#CORDOVA-PLUGIN-HUAWEI-PUSH#END/ig, "");
    fs.writeFileSync(buildGradleFilePath, data);
}

console.log("*** 移除 platforms/android/build.gradle 相关的设置 ***");
removeFromBuildGradleFile();