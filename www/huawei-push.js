var HuaweiPush = function () { };


/**
 * 注册推送服务
 * @param successCallback 成功回调
 * @param errorCallback 失败回调
 * @param options 参数
 */
HuaweiPush.prototype.register = function (successCallback, errorCallback, options) {
    cordova.exec(successCallback, errorCallback, "HuaweiPushPlugin", "register", [options]);
};

/**
 * 当token变化后，会触发方法的successCallback回调
 * @param successCallback token被自动变更时通知变更后的token
 * @param errorCallback 通知失败的回调
 */
HuaweiPush.prototype.onNewToken = function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "HuaweiPushPlugin", "onNewToken", [options]);
};

module.exports = new HuaweiPush();









