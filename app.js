var cp = require('child_process');
number = 0;
var prefix = "/home/zach/craterLake/";

var getNumber = function(){
	number++;
	if(number<10){
		return "00"+number;
	}
	else if(number<100){
		return "0"+number;
	}
	return ""+number;
}

var main = function() {
    var numberString = getNumber();
    var getHQPhoto = "curl https://www.nps.gov/webcams-crla/cameraHQ.jpg > "+prefix+"pics/hq/"+number+".jpg";
    var getAlicePhoto = "curl https://www.nps.gov/webcams-crla/camera0.jpg > "+prefix+"pics/alice/"+number+".jpg";
    var getCraterPhoto = "curl https://www.nps.gov/webcams-crla/camerasinnott.jpg > "+prefix+"pics/crater/"+number+".jpg";
    cp.execSync(getHQPhoto);
    cp.execSync(getAlicePhoto);
    cp.execSync(getCraterPhoto);
};

setInterval(main, 600000);
