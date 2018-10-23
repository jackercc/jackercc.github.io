// 创建XHR
function createXHR() {
    if(typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof argumentss.callee.ActiveXString != "string") {
            var version = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
                          i, len;
            for(i=0, len=versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.ActiveXString = versions[i];
                    break;
                } catch (ex) {
                    // 跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.ActiveXString);
    } else {
        throw new Error("No XHR object availabel.");
    }
}
