const express = require('express')
const path = require('path')
const request = require('request');

const app = express();
const area = require('./area')

function areaJson(area){
	json = "{";
	json += "area: "
	json += area;
	json += "}";
	return json;
}

app.use('/area', area);
app.set('port', (process.env.PORT || 5000));
app.get('/getArea', function(req, res){
	var area = area.getArea([req.query.side1, req.query.side2]);
	if(area == -1){
		res.status = 400;
	} else {
		res.status = 200;
		res.json(areaJson(area));
	}
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});