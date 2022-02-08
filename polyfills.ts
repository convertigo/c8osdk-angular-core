(window as any).global = window;
(window as any).process = window;
window["browser"] = true;
(window as any).global.Buffer = (window as any).global.Buffer || require('buffer').Buffer;
if((window as any).process != undefined){
	console.log("passing throw if");
	(window as any).process.nextTick = function() {
     	return null;  
	};
}
else{
	(window as any).process = {
	   env: { DEBUG: undefined },
	   nextTick: function() {
	     return null;
	   }
	};
}

