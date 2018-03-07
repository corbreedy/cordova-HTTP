function get(success,errorCallback,vars){
    var theUrl=vars[0];
    var param=vars[1];
    var header=vars[2];
    var xmlHttp = new XMLHttpRequest();
    //console.log("success",success);
    //console.log("theUrl",theUrl);
    //console.log("param",param);
    //console.log("header",header);
    //console.log("errorCallback",errorCallback)

    xmlHttp.onreadystatechange = function() {
//	console.log("readyState",xmlHttp.readyState)
//	console.log("readyStatus",xmlHttp.status)
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
	    //	    console.log(request.getAllResponseHeaders());
	    console.log("xmlHttp Get State: 4 Status:200 response",xmlHttp.responseText);
            var result = {
		data:xmlHttp.responseText,
		status:200
	    };
	    success(result);
        }
    }

    xmlHttp.open("GET", theUrl, true); // true for asynchronous"Access-Control-Request-Method: GET"
    xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlHttp.send(null);
}

function post(success,errorCallback,vars){
    var xmlHttp = new XMLHttpRequest();
    var theUrl=vars[0];
    var param=vars[1];
    //console.log("param",param)
    var header=vars[2];
    //var params = "param1=12&url=12";
    var paramstr = Object.keys(param).map(function(key) {
	return key + '=' + param[key];
    }).join('&');
    //console.log("paramstr",paramstr);
    xmlHttp.open("POST", theUrl, true); // true for asynchronous"Access-Control-Request-Method: POST"
    xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function() {//Call a function when the state changes.
        if( xmlHttp.readyState == 4 &&  xmlHttp.status == 200) {
	    //	    console.log(request.getAllResponseHeaders());
	    console.log("xmlHttp Get State: 4 Status:200 response",xmlHttp.responseText);
            var result = {
		data:xmlHttp.responseText,
		status:200
	    };
	    success(result);
            //alert(http.responseText);
        }
    }
    xmlHttp.send(paramstr);
}

 module.exports = {
     get: get,
     post:post
    };

require("cordova/exec/proxy").add("CordovaHttpPlugin",module.exports);
