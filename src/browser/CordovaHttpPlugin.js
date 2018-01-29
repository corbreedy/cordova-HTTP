function get(success,errorCallback,vars){
    var theUrl=vars[0];
    var param=vars[1];
    var header=vars[2];
    var xmlHttp = new XMLHttpRequest();
    console.log("success",success)
    console.log("theUrl",theUrl)
    console.log("param",param)
    console.log("header",header)
    //console.log("errorCallback",errorCallback)

    xmlHttp.onreadystatechange = function() {
	console.log("readyState",xmlHttp.readyState)
	console.log("readyStatus",xmlHttp.status)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    //	    console.log(request.getAllResponseHeaders());
	    console.log("response",xmlHttp.responseText);
            var result = {
		text:xmlHttp.responseText,
		status:200
	    };
	    success(result);
        }
    }

    xmlHttp.open("GET", theUrl, true); // true for asynchronous"Access-Control-Request-Method: GET"
    xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    //    xmlHttp.setRequestHeader('Access-Control-Request-Method', 'GET')
    xmlHttp.send(null);
}

 module.exports = {
	get: get
    };

require("cordova/exec/proxy").add("CordovaHttpPlugin",module.exports);
