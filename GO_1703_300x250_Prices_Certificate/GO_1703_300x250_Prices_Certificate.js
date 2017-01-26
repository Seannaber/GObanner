(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.beerbottles = function() {
	this.initialize(img.beerbottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);


(lib.Group2 = function() {
	this.initialize(img.Group2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.spiritsbottles = function() {
	this.initialize(img.spiritsbottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);


(lib.winebottles = function() {
	this.initialize(img.winebottles);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,332);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBCkQgcgPgSgZQgTgagJggQgJggAAgiQAAgiAJggQAJggATgZQASgaAcgOQAcgPAlAAQAmAAAcAPQAcAOASAaQATAZAJAgQAJAgAAAiQAAAigJAgQgJAggTAaQgSAZgcAPQgcAPgmAAQglAAgcgPgAgshJQgOAbABAuQgBAuAOAbQAOAbAeAAQAfAAAOgbQAOgbgBguQABgugOgbQgOgagfAAQgeAAgOAag");
	this.shape.setTransform(101.8,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAKCuIAAjoIg5A6Igzg1IB4h4IBNAAIAAFbg");
	this.shape_1.setTransform(72.5,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXDiIAAgvQgqgEgegOQgfgOgWgWIAvhDQATATAcANQAdANAiABQAXgBANgIQAOgIAAgNQAAgPgQgHQgQgIgbgFQgWgEgXgGQgYgHgVgLQgUgLgNgTQgNgTgBgfQAAgaANgXQAOgXAZgPQAZgPAlgFIAAgxIA4AAIAAAyQAgAEAbAMQAbALAWATIgwBAQgXgSgagJQgagJgXAAQgWAAgKAIQgJAHAAAMQAAANAQAHQAPAHAcAFQAWAEAXAHQAYAGAVAMQAUALANASQANATAAAdQAAAvgdAfQgeAdg5AIIAAAvg");
	this.shape_2.setTransform(46,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+CuIAAlbID9AAIAABMIikAAIAAA6IChAAIAABKIihAAIAAA/ICkAAIAABMg");
	this.shape_3.setTransform(1.7,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3CuIiDlbIBmAAIBUD6IBWj6IBlAAIiDFbg");
	this.shape_4.setTransform(-32.2,1.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABaCuIgSg1IiPAAIgSA1IhhAAICClbIBwAAICDFbgAAxAtIgxiLIgwCLIBhAAg");
	this.shape_5.setTransform(-68.5,1.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUCkQgmgPgagZIAvhDQATATAcANQAcANAjABQAXgBANgIQANgIABgNQgBgPgPgHQgQgIgbgFQgWgEgXgGQgYgHgVgLQgVgKgNgUQgNgTAAgfQAAgdAQgZQAQgYAfgPQAegPAsAAQAqAAAkAMQAjAMAcAYIgxBAQgXgSgZgJQgagJgXAAQgWAAgJAIQgKAHAAAMQAAANAQAHQAPAHAcAFQAWAEAYAHQAXAGAUALQAVAMANASQANATAAAdQAAAjgQAaQgRAaghAPQggAOguAAQg0AAglgPg");
	this.shape_6.setTransform(-102.5,1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.5,-31.3,241,62.8);


(lib.totalWine_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.totalWine_logo, new cjs.Rectangle(0,0,300,250), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjAYIA4gYIg4gXIAAgPIBHAgIAAAOIhHAfg");
	this.shape.setTransform(53.2,-1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAkQgJgGgGgJQgGgIAAgNQAAgLAGgIQAFgKAJgFQAJgGALAAQALABAJAFQAIAFAGAKQAEAJAAAMIAAAFIg4AAQAAAEADAFQADAEAFACQAFACAFABQAFgBAGgCQAGgCAEgDIAIANQgFAFgIACQgJADgJAAQgLAAgJgEgAAUgHQAAgDgCgEQgCgEgFgDQgEgDgGAAQgGABgDACQgFADgCAEQgCAEAAADIAlAAIAAAAg");
	this.shape_1.setTransform(40.7,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAtQgFgGAAgKIAAgnIgNAAIAAgSIANAAIAAgVIATAAIAAAVIAQAAIAAASIgQAAIAAAiQAAADACADQACACADAAIAFgBIACgBIAFAPIgHAEQgEABgGAAQgKAAgGgFg");
	this.shape_2.setTransform(33.6,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAmQgHgDgDgGQgFgFAAgJQAAgJAFgFQADgFAHgCQAFgDAHAAQAIAAAFADQAHACAEAEIAAgKQgBgGgEgDQgEgEgHAAQgGAAgGACQgGADgFAEIgHgNQAGgHAJgCQAJgDAIAAQAJgBAHADQAJADAEAGQAEAHABALIAAAxIgUAAIAAgIQgEAEgHADQgFADgIAAQgHAAgFgDgAgKAHQgEADgBAGQABAFAEADQAEADAGAAQAEAAAEgCQAFgBADgEIAAgJQgDgEgFgBQgEgCgEAAQgGAAgEADg");
	this.shape_3.setTransform(26.3,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPAjQgJgFgFgJQgGgJAAgMQAAgLAGgKQAFgIAJgFQAJgFALgBQAIAAAGADQAGACAEACIAHAHIgNAMQgDgDgEgCQgEgDgGAAQgIABgGAFQgFAHgBAJQABAKAFAGQAGAHAIgBQAGAAAEgCQAEgCADgEIANANIgHAHQgEADgGABQgGACgIAAQgLABgJgGg");
	this.shape_4.setTransform(18.2,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgJA4IAAhNIATAAIAABNgAgIgiQgDgDAAgGQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAGgDADQgEADgFABQgEgBgEgDg");
	this.shape_5.setTransform(12.1,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNA2IAAg6IgNAAIAAgSIANAAIAAgEQAAgJAEgGQADgGAGgDQAEgDAIAAIAIABIAHACIgEAPIgEgCIgDAAQgEAAgDADQgDADABAFIAAAEIAPAAIAAASIgPAAIAAA6g");
	this.shape_6.setTransform(7.7,-1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJA4IAAhNIATAAIAABNgAgIgiQgDgDAAgGQAAgFADgDQAEgEAEAAQAFAAAEAEQADADAAAFQAAAGgDADQgEADgFABQgEgBgEgDg");
	this.shape_7.setTransform(2.8,-1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgHAtQgFgGAAgKIAAgnIgNAAIAAgSIANAAIAAgVIATAAIAAAVIAQAAIAAASIgQAAIAAAiQAAADACADQACACADAAIAFgBIACgBIAFAPIgHAEQgEABgGAAQgKAAgGgFg");
	this.shape_8.setTransform(-1.9,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAnIAAhMIAVAAIAAALQADgGAHgDQAGgEAHAAIAAAVIgCgBIgDgBIgHACIgHADQgDACgBACIAAAyg");
	this.shape_9.setTransform(-7.1,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAkQgIgGgGgJQgFgIgBgNQABgLAFgIQAFgKAJgFQAJgGALAAQALABAJAFQAJAFAEAKQAGAJgBAMIAAAFIg4AAQABAEACAFQADAEAFACQAFACAFABQAGgBAFgCQAGgCAEgDIAIANQgFAFgIACQgJADgJAAQgLAAgKgEgAAUgHQAAgDgCgEQgDgEgDgDQgEgDgHAAQgGABgDACQgFADgCAEQgCAEAAADIAlAAIAAAAg");
	this.shape_10.setTransform(-14.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgPAjQgJgFgFgJQgGgJAAgMQAAgLAGgKQAFgIAJgFQAJgFALgBQAIAAAGADQAGACAEACIAHAHIgNAMQgDgDgEgCQgEgDgGAAQgIABgGAFQgFAHgBAJQABAKAFAGQAGAHAIgBQAGAAAEgCQAEgCADgEIANANIgHAHQgEADgGABQgGACgIAAQgLABgJgGg");
	this.shape_11.setTransform(-23.1,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAtQgFgGAAgKIAAgnIgNAAIAAgSIANAAIAAgVIATAAIAAAVIAQAAIAAASIgQAAIAAAiQAAADACADQACACADAAIAFgBIACgBIAFAPIgHAEQgEABgGAAQgKAAgGgFg");
	this.shape_12.setTransform(-34,-1.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAkQgKgGgFgJQgGgIAAgNQAAgLAGgIQAFgKAJgFQAJgGALAAQALABAJAFQAIAFAGAKQAEAJAAAMIAAAFIg4AAQAAAEADAFQADAEAFACQAEACAGABQAFgBAHgCQAFgCAEgDIAJANQgGAFgJACQgIADgJAAQgLAAgJgEgAATgHQAAgDgBgEQgDgEgEgDQgEgDgGAAQgGABgDACQgFADgCAEQgCAEAAADIAkAAIAAAAg");
	this.shape_13.setTransform(-41.1,-0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWAwQgMgGgIgNQgIgMAAgRQAAgQAIgMQAIgNAMgGQANgHAPAAQAKAAAJADQAIADAHAFQAGAGAEAGIgTAKQgEgFgGgEQgHgEgIAAQgJAAgIAFQgHAEgEAIQgFAIAAAJQAAAKAFAIQAEAIAHAEQAIAFAJAAQAHAAAGgCQAGgDAEgDIAAgNIgdAAIAAgTIAzAAIAAAoQgIAJgLAGQgMAFgOAAQgPAAgNgHg");
	this.shape_14.setTransform(-51.4,-1.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF200").s().p("ArPBpIAAjRIWfAAIAADRg");
	this.shape_15.setTransform(0.3,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-83,-13,166.2,22.4), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgTAmQgKgFgGgKQgGgKAAgNQAAgLAGgKQAFgJAKgHQAJgFAMAAQAMAAAJAFQAJAHAGAKQAFAKAAAMIAAAFIg8AAQAAAFADAEQADAEAFADQAFADAGAAQAGAAAGgCQAGgCAEgFIAKAPQgGAFgJADQgJADgKAAQgMAAgJgFgAAVgHQAAgEgCgEQgCgEgFgDQgEgDgHAAQgGAAgEADQgFADgCAEQgCAEgBAEIAoAAIAAAAg");
	this.shape.setTransform(27.6,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIAWAAIAAALQAEgFAGgEQAHgEAIAAIAAAVIgDAAIgDAAIgIABIgHADQgDACgBADIAAA1g");
	this.shape_1.setTransform(20.2,27.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgXAlQgJgGgGgJQgEgKAAgMQAAgLAEgJQAGgLAJgFQALgGAMAAQANAAAKAGQAKAFAFALQAFAJABALQgBAMgFAKQgFAJgKAGQgKAGgNAAQgMAAgLgGgAgLgUQgEADgCAGQgDAFAAAGQAAAGADAGQACAGAEADQAFADAGAAQAHAAAFgDQAEgDADgGQACgGAAgGQAAgGgCgFQgDgGgEgDQgFgDgHAAQgGAAgFADg");
	this.shape_2.setTransform(11.9,27.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoAqIAAgzQAAgGgDgEQgCgDgHAAQgGAAgEADQgFADgCAEIAAA2IgVAAIAAgzQAAgGgDgEQgDgDgGAAQgGAAgFADIgGAHIAAA2IgWAAIAAhRIAWAAIAAALIAGgGQADgDAGgCQAGgCAFAAQAJAAAGAEQAFAEADAHIAGgIQAEgDAGgCQAGgCAGAAQALAAAHAGQAFAGABAMIAAA7g");
	this.shape_3.setTransform(-0.2,27.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIAWAAIAAALQADgFAHgEQAHgEAIAAIAAAVIgCAAIgEAAIgHABIgIADQgDACgBADIAAA1g");
	this.shape_4.setTransform(-14.5,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWAlQgKgGgFgJQgFgKgBgMQABgLAFgJQAFgLAKgFQAJgGANAAQAOAAAJAGQAKAFAFALQAFAJAAALQAAAMgFAKQgFAJgKAGQgJAGgOAAQgNAAgJgGgAgKgUQgFADgDAGQgCAFAAAGQAAAGACAGQADAGAFADQAEADAGAAQAGAAAFgDQAFgDACgGQADgGAAgGQAAgGgDgFQgCgGgFgDQgFgDgGAAQgGAAgEADg");
	this.shape_5.setTransform(-22.8,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAEA5IAAhSIgSAUIgNgPIAigkIAVAAIAABxg");
	this.shape_6.setTransform(70.7,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgUA2QgJgGgGgIQgFgIgDgLQgDgKAAgLQAAgKADgLQADgKAFgJQAGgHAJgFQAJgFALgBQAMABAJAFQAJAFAFAHQAGAJADAKQADALAAAKQAAALgDAKQgDALgGAIQgFAIgJAGQgJAEgMAAQgLAAgJgEgAgMgfQgFAFgCAIQgDAJABAJQgBALADAIQACAJAFAEQAFAFAHAAQAIAAAFgFQAFgEACgJQACgIAAgLQAAgJgCgJQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_7.setTransform(62.4,7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEADgGABQgFgBgEgDg");
	this.shape_8.setTransform(55,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA2QgJgGgGgIQgFgIgDgLQgDgKAAgLQAAgKADgLQADgKAFgJQAGgHAJgFQAJgFALgBQAMABAJAFQAJAFAFAHQAGAJADAKQADALAAAKQAAALgDAKQgDALgGAIQgFAIgJAGQgJAEgMAAQgLAAgJgEgAgMgfQgFAFgCAIQgDAJABAJQgBALADAIQACAJAFAEQAFAFAHAAQAIAAAFgFQAFgEACgJQACgIAAgLQAAgJgCgJQgCgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_9.setTransform(47.5,7.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAEA5IAAhSIgSAUIgNgPIAigkIAVAAIAABxg");
	this.shape_10.setTransform(38.3,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgGBKIAAgQQgNgBgKgEQgKgFgHgHIANgTQAFAFAHAEQAHAEAIACIAAgbIgRgFQgIgEgGgGQgFgGAAgMQAAgJAEgHQAFgHAIgFQAIgFALgBIAAgQIAQAAIAAAQQAKABAJAEQAIAEAHAGIgNASIgKgHIgLgEIAAAYIARAGQAJADAFAGQAGAHAAALQAAAKgEAHQgEAIgJAFQgIAFgMABIAAAQgAAIAlQAHgBAEgDQADgEAAgEQAAgFgEgCQgEgDgGgBgAgOghQgDADAAAFQAAAEADACIAKAEIAAgVQgHAAgDADg");
	this.shape_11.setTransform(30,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgOA5IAAg+IgNAAIAAgTIANAAIAAgEQAAgJAEgGQADgHAHgDQAFgEAHAAIAJABQAFABACACIgEAPIgEgBIgDgBQgFAAgDAEQgCACAAAHIAAADIARAAIAAATIgRAAIAAA+g");
	this.shape_12.setTransform(18,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWAlQgKgGgFgKQgFgJgBgMQABgLAFgJQAFgKAKgGQAJgGANAAQAOAAAJAGQAKAGAFAKQAFAJAAALQAAAMgFAJQgFAKgKAGQgJAGgOAAQgNAAgJgGgAgKgTQgFADgDAFQgCAGAAAFQAAAGACAGQADAFAFADQAEAEAGAAQAGAAAFgEQAFgDACgFQADgGAAgGQAAgFgDgGQgCgFgFgDQgFgEgGAAQgGAAgEAEg");
	this.shape_13.setTransform(10.1,9.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTAmQgKgGgGgJQgGgKAAgNQAAgLAGgKQAFgKAKgFQAJgGAMAAQAMAAAJAGQAJAFAGALQAFAJAAANIAAAFIg8AAQAAAFADAFQADADAFADQAFADAGAAQAGAAAGgCQAGgCAEgEIAKAOQgGAGgJACQgJADgKAAQgMAAgJgFgAAVgHQAAgEgCgEQgCgEgFgDQgEgDgHAAQgGAAgEADQgFACgCAFQgCAEgBAEIAoAAIAAAAg");
	this.shape_14.setTransform(-3.9,9.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAnQgKgCgGgHIAJgPIAIAFIAKAFQAFABAFAAQAHAAADgCQADgCAAgEQAAgEgEgCQgFgCgGgCIgPgDQgHgDgFgDQgFgGAAgKQAAgGADgGQAEgGAIgDQAHgEAKAAQALAAAIADQAIADAGAFIgIAPQgEgEgHgDQgGgCgIgBQgFAAgDACQgDACgBAEQABADAEADIAKADIALACIALAFQAFACADAFQADAEAAAIQAAAHgEAGQgEAGgIADQgIAEgLAAQgKAAgKgEg");
	this.shape_15.setTransform(-12.7,9.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWAoQgGgDgEgGQgFgGAAgJQAAgJAFgGQAEgFAGgDQAHgCAGAAQAJAAAFACQAIADADAEIAAgKQAAgHgEgEQgFgDgIAAQgGAAgGACQgGADgFAEIgIgOQAHgHAJgDQAKgDAIAAQAKAAAIADQAIADAFAHQAFAHAAALIAAA0IgWAAIAAgIQgEAFgHADQgFACgJAAQgGAAgHgDgAgLAHQgEAEAAAGQAAAFAEAEQAFADAGAAQAEAAAFgCQAFgCACgDIAAgLQgCgDgFgCQgFgCgEAAQgGAAgFADg");
	this.shape_16.setTransform(-21.6,9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AARA5IAAgyQAAgIgEgDQgEgDgHAAQgGAAgEADQgFADgDACIAAA4IgWAAIAAhxIAWAAIAAAqQAEgFAHgDQAHgEAKAAQANAAAHAGQAHAHAAAMIAAA6g");
	this.shape_17.setTransform(-30.9,7.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgQAlQgKgFgGgJQgFgLAAgMQAAgMAFgJQAGgKAKgFQAJgGAMAAQAJAAAGACQAGACAFADIAHAIIgOANQgDgEgFgDQgEgCgGAAQgIAAgGAGQgHAHAAAKQAAALAHAHQAGAFAIABQAGAAAEgDQAFgCADgEIAOANQgDAEgEADQgFAEgGACQgGACgJAAQgMAAgJgGg");
	this.shape_18.setTransform(-39.9,9.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIAWAAIAAALQADgGAHgDQAHgEAIAAIAAAVIgDAAIgDAAIgIABIgHADQgDACgBADIAAA1g");
	this.shape_19.setTransform(-46.9,9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgfAjQgGgHgBgLIAAg6IAXAAIAAAxQAAAIADADQAEAEAHAAQAFgBAGgCQAFgCACgEIAAg3IAWAAIAABRIgWAAIAAgLQgEAGgIADQgGAEgKAAQgNAAgHgHg");
	this.shape_20.setTransform(-55.3,9.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpA6IAAhxIAWAAIAAAKQAFgGAGgDQAHgDAGAAQALAAAIAFQAIAFAFAKQAFAJAAAOQAAAOgFAIQgFAKgIAFQgIAFgLAAQgGAAgGgDQgHgDgFgGIAAAqgAgLgjQgFADgDAEIAAAcQADAEAFACQAFADAGAAQAIAAAGgGQAFgGAAgLQAAgLgFgGQgGgHgIAAQgGAAgFADg");
	this.shape_21.setTransform(-65,10.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgdA5IgGgBIAEgTIADABIADAAQAFABACgCQADgBACgEIADgHIgihSIAYAAIAUA5IAWg5IAWAAIgmBfQgDAHgEAFQgEAEgGACQgGACgHAAIgFgBg");
	this.shape_22.setTransform(64.2,-7.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAqIAAhRIAWAAIAAALQAEgFAGgEQAHgEAIAAIAAAVIgCgBIgEAAIgHABIgIAEQgDACgBADIAAA1g");
	this.shape_23.setTransform(57.2,-9.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgWAlQgKgFgGgLQgEgJgBgMQABgLAEgKQAGgJAKgGQAJgGANAAQAOAAAJAGQAKAGAFAJQAFAKAAALQAAAMgFAJQgFALgKAFQgJAGgOAAQgNAAgJgGgAgKgTQgFADgDAFQgCAFAAAGQAAAGACAGQADAFAFADQAEAEAGAAQAGAAAGgEQAEgDACgFQADgGAAgGQAAgGgDgFQgCgFgEgDQgGgEgGAAQgGAAgEAEg");
	this.shape_24.setTransform(48.9,-9.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgTAnQgKgCgGgHIAJgPIAIAFIAKAFQAFACAFAAQAHgBADgCQADgCAAgEQAAgEgEgCQgFgDgGAAIgPgEQgHgCgFgEQgFgGAAgJQAAgIADgFQAEgGAIgEQAHgDAKAAQALAAAIADQAIADAGAFIgIAPQgEgEgHgDQgGgDgIABQgFAAgDABQgDACgBAEQABADAEACIAKAEIALACIALAEQAFADADAEQADAFAAAIQAAAHgEAGQgEAGgIADQgIAEgLAAQgKAAgKgEg");
	this.shape_25.setTransform(39.8,-9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgTAnQgKgCgGgHIAJgPIAIAFIAKAFQAFACAFAAQAHgBADgCQADgCAAgEQAAgEgEgCQgFgDgGAAIgPgEQgHgCgFgEQgFgGAAgJQAAgIADgFQAEgGAIgEQAHgDAKAAQALAAAIADQAIADAGAFIgIAPQgEgEgHgDQgGgDgIABQgFAAgDABQgDACgBAEQABADAEACIAKAEIALACIALAEQAFADADAEQADAFAAAIQAAAHgEAGQgEAGgIADQgIAEgLAAQgKAAgKgEg");
	this.shape_26.setTransform(31.7,-9.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgTAmQgKgGgGgKQgGgJAAgNQAAgLAGgKQAFgKAKgFQAJgGAMAAQAMAAAJAGQAJAGAGAJQAFALAAAMIAAAFIg8AAQAAAFADAFQADAEAFACQAFADAGAAQAGAAAGgDQAGgCAEgDIAKANQgGAHgJACQgJADgKAAQgMAAgJgFgAAVgHQAAgEgCgEQgCgEgFgDQgEgDgHAAQgGAAgEADQgFACgCAFQgCAEgBAEIAoAAIAAAAg");
	this.shape_27.setTransform(23.1,-9.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgQAlQgKgFgFgKQgGgJAAgNQAAgMAGgKQAFgJAKgFQAKgGAMAAQAIAAAGACQAGACAFAEIAHAHIgOANQgDgFgFgCQgEgCgGAAQgIAAgHAHQgFAGgBAKQABALAFAHQAHAFAIABQAGAAAEgDQAFgCADgEIAOANQgCAEgFAEQgFADgGACQgGACgIAAQgMAAgKgGg");
	this.shape_28.setTransform(14.2,-9.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgQAlQgKgFgGgKQgFgJAAgNQAAgMAFgKQAGgJAKgFQAJgGAMAAQAJAAAGACQAGACAFAEIAHAHIgOANQgDgFgEgCQgFgCgFAAQgKAAgFAHQgHAGAAAKQAAALAHAHQAFAFAKABQAFAAAFgDQAEgCADgEIAOANQgDAEgEAEQgFADgGACQgGACgJAAQgMAAgJgGg");
	this.shape_29.setTransform(5.7,-9.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAoQgHgDgFgGQgEgGAAgJQAAgJAEgGQAFgFAHgDQAGgCAGAAQAJAAAGACQAHADAEAEIAAgKQAAgHgGgEQgEgDgHAAQgHAAgGACQgGADgGAEIgIgOQAIgHAJgDQAJgDAJAAQAJAAAJADQAIADAFAHQAFAHAAALIAAA0IgVAAIAAgIQgFAFgGADQgGACgJAAQgGAAgGgDgAgKAHQgFAEgBAGQABAFAFAEQAEADAGAAQAEAAAFgCQAFgCADgDIAAgLQgDgDgFgCQgFgCgEAAQgGAAgEADg");
	this.shape_30.setTransform(-3.5,-9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgdA5IgGgBIADgTIAEABIADAAQAFABACgCQADgBABgEIAEgHIgihSIAYAAIAUA5IAVg5IAXAAIgmBfQgDAHgDAFQgFAEgGACQgGACgHAAIgFgBg");
	this.shape_31.setTransform(-16.6,-7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARAqIAAgwQAAgJgEgDQgEgEgHAAQgFAAgFADQgFADgCADIAAA3IgXAAIAAhRIAXAAIAAAKQAEgFAGgDQAHgEAKAAQANAAAHAHQAGAHAAAMIAAA5g");
	this.shape_32.setTransform(-25.9,-9.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgWAoQgGgDgFgGQgEgGAAgJQAAgJAEgGQAFgFAGgDQAHgCAHAAQAIAAAFACQAHADAFAEIAAgKQgBgHgFgEQgEgDgHAAQgHAAgGACQgGADgGAEIgIgOQAIgHAJgDQAJgDAJAAQAJAAAJADQAIADAFAHQAFAHAAALIAAA0IgVAAIAAgIQgFAFgHADQgGACgHAAQgHAAgHgDgAgKAHQgFAEgBAGQABAFAFAEQAEADAGAAQAFAAAEgCQAFgCADgDIAAgLQgDgDgFgCQgEgCgFAAQgGAAgEADg");
	this.shape_33.setTransform(-35.7,-9.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AARAqIAAgwQAAgJgEgDQgEgEgHAAQgGAAgEADQgFADgDADIAAA3IgVAAIAAhRIAVAAIAAAKQAFgFAHgDQAGgEAKAAQAOAAAGAHQAHAHgBAMIAAA5g");
	this.shape_34.setTransform(-49.3,-9.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgXAlQgJgFgFgLQgGgJAAgMQAAgLAGgKQAFgJAJgGQAKgGANAAQANAAAKAGQAKAGAFAJQAFAKABALQgBAMgFAJQgFALgKAFQgKAGgNAAQgNAAgKgGgAgKgTQgFADgCAFQgDAFAAAGQAAAGADAGQACAFAFADQAEAEAGAAQAHAAAEgEQAFgDADgFQACgGAAgGQAAgGgCgFQgDgFgFgDQgEgEgHAAQgGAAgEAEg");
	this.shape_35.setTransform(-59.1,-9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-104,-22.7,212.6,59.6), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.beerbottles();
	this.instance.parent = this;
	this.instance.setTransform(-57,-65,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-57,-65,114,126.2), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag9B4QgcgKgTgTIAigxQAOAOAVAJQAUAKAZAAQARAAAKgGQAJgGAAgJQAAgLgLgFQgLgGgUgEIghgIQgSgFgPgHQgOgIgKgOQgKgOAAgXQAAgVAMgSQALgSAXgKQAXgLAfgBQAeAAAbAJQAaAJAUARIgjAvQgRgNgTgHQgTgGgQAAQgQAAgHAFQgIAHABAIQAAAKALAEQALAGAVADQAPADASAFQARAEAPAJQAPAIAKANQAJAOAAAVQAAAagMATQgMATgYAKQgYALghAAQgmAAgbgLg");
	this.shape.setTransform(47.7,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAhB/IgqhWIghAAIAABWIhBAAIAAj9IB9AAQAdAAATAMQAVALAKATQAKATAAAYQgBAWgHAPQgIAPgLAJQgLAKgNAEIA0BdgAgqgOIAzAAQANAAAJgHQAJgIABgNQgBgNgJgIQgJgHgNgBIgzAAg");
	this.shape_1.setTransform(24.4,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhcB/IAAj9IC5AAIAAA3Ih4AAIAAArIB1AAIAAA2Ih1AAIAAAuIB4AAIAAA3g");
	this.shape_2.setTransform(0.4,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhcB/IAAj9IC5AAIAAA3Ih4AAIAAArIB1AAIAAA2Ih1AAIAAAuIB4AAIAAA3g");
	this.shape_3.setTransform(-22,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhuB/IAAj9ICOAAQAZABARAJQAQAJAIAPQAIAPAAAQQAAAQgGAMQgFAMgKAIQgKAHgMADQAOACAKAIQALAIAHAOQAGANAAAQQAAATgIAPQgIAQgRAJQgQAKgZAAgAgtBIIBBAAQALAAAHgGQAHgGAAgLQAAgKgHgHQgGgHgMAAIhBAAgAgtgcIA+AAQALAAAGgGQAGgGAAgKQAAgJgGgGQgGgGgLAAIg+AAg");
	this.shape_4.setTransform(-46,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgvB4QgVgLgNgTQgOgSgGgXQgHgYAAgZQAAgYAHgYQAGgXAOgTQANgSAVgLQAUgKAbgBQAcABAUAKQAVALANASQANATAHAXQAHAYAAAYQAAAZgHAYQgHAXgNASQgNATgVALQgUALgcAAQgbAAgUgLgAggg1QgKAUAAAhQAAAiAKATQAKAUAWAAQAWAAALgUQAKgTgBgiQABghgKgUQgLgTgWAAQgWAAgKATg");
	this.shape_5.setTransform(40.2,-16.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvB4QgVgLgNgTQgOgSgGgXQgHgYAAgZQAAgYAHgYQAGgXAOgTQANgSAVgLQAUgKAbgBQAcABAUAKQAVALANASQANATAHAXQAHAYAAAYQAAAZgHAYQgHAXgNASQgNATgVALQgUALgcAAQgbAAgUgLgAggg1QgKAUAAAhQAAAiAKATQAKAUAWAAQAWAAALgUQAKgTgBgiQABghgKgUQgLgTgWAAQgWAAgKATg");
	this.shape_6.setTransform(16.5,-16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag8B4QgagKgSgSIAjgrQAOAMARAGQARAHATAAQAUAAAKgKQAKgJAAgNQAAgNgJgIQgLgJgSAAQgPAAgMAEQgNAFgKAKIgugLIAAiUIC3AAIAAA3Ih3AAIAAA0QAKgJAPgGQANgFARAAQAWAAATAKQASAKALASQALARABAaQAAAcgNATQgNAUgYALQgYALggAAQgiAAgZgJg");
	this.shape_7.setTransform(-6.8,-16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdAoQAFgCAHgGQAHgGAFgGQAFgHABgIIgCABIgFABQgMgBgJgHQgJgJAAgOQAAgPAKgKQALgKAOAAQAKgBAIAGQAJAFAGAJQAFALAAAOQAAAWgMATQgMAVgTANg");
	this.shape_8.setTransform(-23.8,-4.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AheCBIAAgzIBCgxQAagUANgMQAOgMAFgKQAFgJAAgJQAAgNgLgHQgJgHgPAAQgUAAgRAIQgQAHgOANIgkgrQAOgPARgKQARgJATgEQASgFASAAQAdABAXAKQAXAKANATQAOATAAAaQAAATgKASQgKARgVAUQgVATgiAWIBhAAIAAA5g");
	this.shape_9.setTransform(-40.8,-17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-77.7,-41.2,155.4,75.9), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spiritsbottles();
	this.instance.parent = this;
	this.instance.setTransform(-52,-63,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-52,-63,114,126.2), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag+B4QgbgKgTgTIAigxQAPAOAUAJQAVAKAYAAQARAAAKgGQAJgGAAgJQAAgLgLgFQgMgGgTgEIghgIQgRgFgPgHQgQgIgJgOQgJgOgBgXQAAgVAMgSQALgSAXgKQAWgLAggBQAeAAAbAJQAaAJAUARIgjAvQgRgNgTgHQgTgGgQAAQgQAAgHAFQgIAHABAIQAAAKALAEQAMAGATADQARADARAFQARAEAPAJQAPAIAJANQAKAOAAAVQAAAagMATQgNATgXAKQgYALghAAQgmAAgcgLg");
	this.shape.setTransform(58.4,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggB/IAAjEIhHAAIAAg5IDOAAIAAA5IhHAAIAADEg");
	this.shape_1.setTransform(35.9,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggB/IAAj9IBAAAIAAD9g");
	this.shape_2.setTransform(19.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhB/IgphWIgiAAIAABWIhBAAIAAj9IB+AAQAcAAATAMQAVALAJATQALATAAAYQAAAWgIAPQgHAPgMAJQgMAKgMAEIA0BdgAgqgOIAzAAQANAAAJgHQAJgIAAgNQAAgNgJgIQgJgHgNgBIgzAAg");
	this.shape_3.setTransform(1.6,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgfB/IAAj9IA/AAIAAD9g");
	this.shape_4.setTransform(-17.1,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhrB/IAAj9IB+AAQAdABAUALQATALAKATQAKATAAAYQAAAXgKASQgKASgTALQgUALgdABIg9AAIAABWgAgqgOIA0AAQAOAAAIgHQAJgIAAgNQAAgNgJgIQgIgHgOgBIg0AAg");
	this.shape_5.setTransform(-34,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag+B4QgbgKgTgTIAjgxQAOAOAUAJQAVAKAZAAQARAAAJgGQAKgGAAgJQAAgLgMgFQgLgGgUgEIghgIQgRgFgPgHQgQgIgJgOQgKgOAAgXQAAgVAMgSQAMgSAWgKQAWgLAggBQAeAAAbAJQAaAJAUARIgjAvQgRgNgTgHQgTgGgQAAQgQAAgHAFQgIAHABAIQAAAKALAEQAMAGATADQAQADASAFQARAEAPAJQAPAIAJANQAKAOAAAVQAAAagMATQgMATgYAKQgXALgiAAQgmAAgcgLg");
	this.shape_6.setTransform(-58.8,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgvB4QgVgLgNgTQgOgSgGgXQgHgYAAgZQAAgYAHgYQAGgXAOgTQANgSAVgLQAUgKAbgBQAcABAUAKQAVALANASQANATAHAXQAHAYAAAYQAAAZgHAYQgHAXgNASQgNATgVALQgUALgcAAQgbAAgUgLgAggg1QgKAUAAAhQAAAiAKATQAKAUAWAAQAWAAALgUQAKgTgBgiQABghgKgUQgLgTgWAAQgWAAgKATg");
	this.shape_7.setTransform(40.3,-16.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvB4QgVgLgNgTQgOgSgGgXQgHgYAAgZQAAgYAHgYQAGgXAOgTQANgSAVgLQAUgKAbgBQAcABAUAKQAVALANASQANATAHAXQAHAYAAAYQAAAZgHAYQgHAXgNASQgNATgVALQgUALgcAAQgbAAgUgLgAggg1QgKAUAAAhQAAAiAKATQAKAUAWAAQAWAAALgUQAKgTgBgiQABghgKgUQgLgTgWAAQgWAAgKATg");
	this.shape_8.setTransform(16.6,-16.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgvB4QgVgLgNgTQgOgSgGgXQgHgYAAgZQAAgYAHgYQAGgXAOgTQANgSAVgLQAUgKAbgBQAcABAUAKQAVALANASQANATAHAXQAHAYAAAYQAAAZgHAYQgHAXgNASQgNATgVALQgUALgcAAQgbAAgUgLgAggg1QgKAUAAAhQAAAiAKATQAKAUAWAAQAWAAALgUQAKgTgBgiQABghgKgUQgLgTgWAAQgWAAgKATg");
	this.shape_9.setTransform(-7.1,-16.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeAoQAHgCAGgGQAHgGAFgGQAFgHABgIIgCABIgFABQgMgBgJgHQgIgJgBgOQAAgPALgKQAKgKAOAAQAKgBAIAGQAJAFAFAJQAGALAAAOQgBAWgLATQgLAVgUANg");
	this.shape_10.setTransform(-24,-4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag+B4QgbgMgPgRIAhgrQAJAJAMAGQAMAGAMADQANADAMABQATAAALgIQALgHAAgLQAAgMgKgGQgKgGgYAAIgNAAIgOAAIgHABIAAg3IAJAAIAMAAIANAAQASAAALgGQAKgFABgKQgBgNgLgGQgMgGgSAAQgRAAgRAHQgQAGgOAMIgegoQAQgSAZgLQAZgMAiAAQAxAAAZAUQAaASAAAfQAAAPgHAMQgIAMgMAJQgMAHgQADQAOABANAHQAOAGAKAOQAIANABASQgBAXgNAQQgMARgYAKQgXAJggAAQgjAAgbgLg");
	this.shape_11.setTransform(-41,-16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-75.7,-41.2,151.5,75.9), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.winebottles();
	this.instance.parent = this;
	this.instance.setTransform(-58,-66,0.38,0.38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-58,-66,114,126.2), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBB+QgdgLgUgTIAkg0QAPAOAWALQAVAJAbABQASAAAKgGQAKgHAAgKQAAgLgMgGQgNgGgUgEIgjgIQgSgEgQgJQgQgIgKgPQgKgOAAgYQAAgXAMgTQAMgTAYgLQAYgLAhgBQAgAAAcAKQAbAJAVASIglAxQgSgNgTgHQgUgHgSAAQgRAAgHAGQgHAGAAAJQAAAKAMAFQALAFAWAEIAjAIQASAFAQAJQAQAJAJANQAKAPABAWQAAAbgNAVQgNATgZAMQgZAKgkABQgnAAgdgMg");
	this.shape.setTransform(51,13);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhCFIAAkJIDDAAIAAA6Ih+AAIAAAsIB7AAIAAA5Ih7AAIAAAxIB+AAIAAA5g");
	this.shape_1.setTransform(27.6,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA5CFIhvigIAACgIhFAAIAAkJIBHAAIBrCYIAAiYIBFAAIAAEJg");
	this.shape_2.setTransform(0.7,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiCFIAAkJIBFAAIAAEJg");
	this.shape_3.setTransform(-19.9,13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoCFIgoilIgoClIhIAAIhNkJIBNAAIApCwIAtiwIA0AAIAuCwIAoiwIBOAAIhNEJg");
	this.shape_4.setTransform(-44.5,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgyB+QgVgLgOgTQgPgUgHgZQgHgYABgbQgBgaAHgYQAHgZAPgTQAOgUAVgMQAWgLAcAAQAdAAAWALQAWAMANAUQAPATAGAZQAIAYgBAaQABAbgIAYQgGAZgPAUQgNATgWALQgWAMgdAAQgcAAgWgMgAgig4QgLAVABAjQgBAjALAVQALAVAXAAQAXAAALgVQALgVgBgjQABgjgLgVQgLgUgXAAQgXAAgLAUg");
	this.shape_5.setTransform(42.7,-18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyB+QgWgLgOgTQgOgUgHgZQgGgYgBgbQABgaAGgYQAHgZAOgTQAOgUAWgMQAVgLAdAAQAdAAAVALQAWAMAOAUQAOATAIAZQAGAYAAAaQAAAbgGAYQgIAZgOAUQgOATgWALQgVAMgdAAQgdAAgVgMgAgig4QgKAVAAAjQAAAjAKAVQALAVAXAAQAYAAALgVQAKgVAAgjQAAgjgKgVQgLgUgYAAQgXAAgLAUg");
	this.shape_6.setTransform(17.8,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyB+QgWgLgOgTQgOgUgHgZQgHgYAAgbQAAgaAHgYQAHgZAOgTQAOgUAWgMQAVgLAdAAQAdAAAWALQAVAMAPAUQANATAHAZQAIAYAAAaQAAAbgIAYQgHAZgNAUQgPATgVALQgWAMgdAAQgdAAgVgMgAgig4QgKAVAAAjQAAAjAKAVQALAVAXAAQAXAAAMgVQAKgVgBgjQABgjgKgVQgMgUgXAAQgXAAgLAUg");
	this.shape_7.setTransform(-7.1,-18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfArIANgJQAHgGAGgIQAFgHACgHIgDABIgFAAQgOAAgJgIQgIgKgBgPQABgPAKgLQALgKAPgBQAKAAAJAGQAJAFAGALQAGAKAAAOQAAAYgMAVQgNAVgUAPg");
	this.shape_8.setTransform(-24.9,-5.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgpCFQgUgEgQgJQgQgKgJgOQgKgOAAgUQAAgWAPgSQAPgSAYgHQgWgJgNgPQgOgPgBgXQAAgUAKgOQAJgNAQgIQAPgJAUgEQATgEATAAQAUAAATAEQATAEAQAJQAQAIAJANQAJAOABAUQAAAXgOAPQgOAPgWAJQAYAHAPASQAOASABAWQgBAbgPAQQgQARgaAIQgZAIgeAAQgVAAgUgFgAgSAeQgKAEgHAGQgHAHAAAIQAAAMAMAGQALAIATgBQATABAMgIQAMgGABgMQgBgIgHgHQgHgGgLgEQgKgEgIgBQgIABgKAEgAgbhJQgKAGAAALQAAAIAFAFQAHAHAJADIAQAEIARgEQAJgDAHgHQAFgFAAgIQAAgLgKgGQgLgHgRAAQgRAAgKAHg");
	this.shape_9.setTransform(-42.7,-18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-72.9,-43.7,146,80.4), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAYA7IAAhFQAAgMgGgFQgFgEgLAAQgHAAgIAEQgGAEgEAFIAABNIgeAAIAAhzIAeAAIAAAQQAFgIALgEQAJgGAPAAQATAAAJAKQAJAKAAAQIAABRg");
	this.shape.setTransform(42.7,9.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggA0QgOgIgHgNQgHgOgBgRQABgQAHgNQAHgOAOgJQAOgHASgBQATABAOAHQANAJAIAOQAHANABAQQgBARgHAOQgIANgNAIQgOAJgTAAQgSAAgOgJgAgPgcQgHAFgDAHQgEAHABAJQgBAJAEAIQADAIAHAEQAGAEAJABQAJgBAHgEQAHgEADgIQAEgIgBgJQABgJgEgHQgDgHgHgFQgHgEgJgBQgJABgGAEg");
	this.shape_1.setTransform(28.9,9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgbA4QgNgEgKgJIAOgVQADAEAHADQAHAEAIACQAHACAGAAQAKABAFgEQAFgDgBgGQABgFgHgDQgGgDgJgCIgVgFQgLgEgGgFQgIgIAAgOQAAgJAFgJQAGgIAKgFQALgEAOgBQAPABAMAEQALAEAJAHIgMAVQgFgGgKgEQgIgDgMgBQgGAAgFADQgGADAAAFQAAAFAHADQAFADAKACIAPADQAIADAHAEQAHADAEAGQAFAHAAALQAAALgGAIQgFAIgMAFQgLAFgQAAQgOAAgOgFg");
	this.shape_2.setTransform(10,9.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcA1QgOgHgHgOQgJgOAAgSQAAgQAIgOQAIgNANgJQAOgHAQgBQARABANAHQANAJAIAOQAHAOAAASIAAAGIhVAAQABAIAEAGQAEAHAHADQAHAEAJgBQAJAAAIgCQAIgDAHgGIANAUQgJAHgMAFQgNAEgOAAQgRAAgOgIgAAegKQAAgGgEgFQgCgHgHgDQgGgFgKAAQgJAAgFAFQgHADgCAHQgDAFgCAGIA5AAIAAAAg");
	this.shape_3.setTransform(-2.2,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXA1QgOgHgIgOQgHgOgBgSQABgRAHgNQAIgOAOgIQAOgIARAAQAMABAJACQAJADAGAFQAGAEAEAGIgUATQgEgGgHgDQgGgEgIAAQgNABgIAIQgJAKAAAOQAAAPAJAKQAIAJANAAQAIAAAGgDQAHgEAEgFIAUASQgEAGgGAEQgGAFgJADQgJADgMAAQgRAAgOgIg");
	this.shape_4.setTransform(-14.8,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOBTIAAhzIAdAAIAABzgAgMg0QgFgEAAgIQAAgJAFgFQAFgEAHAAQAIAAAFAEQAFAFAAAJQAAAIgFAEQgFAFgIABQgHgBgFgFg");
	this.shape_5.setTransform(-23.9,7.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AghA7IAAhzIAfAAIAAAQQAFgIAKgFQAKgFALAAIAAAdIgEAAIgFgBQgFAAgFACIgLAFQgEADgCAEIAABLg");
	this.shape_6.setTransform(-30.7,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6BRIAAifIAfAAIAAAPQAHgIAJgFQAJgEAKAAQAPAAALAHQAMAHAGANQAHAOAAAUQAAATgHAMQgGAOgMAHQgLAIgPgBQgKABgJgFQgJgEgHgKIAAA7gAgQgyQgHAEgEAGIAAAoQAEAGAHADQAHAEAIAAQAMAAAIgJQAIgIAAgPQAAgPgIgKQgIgJgMAAQgIAAgHADg");
	this.shape_7.setTransform(-42.3,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKBDQgJgIAAgPIAAg8IgTAAIAAgbIATAAIAAgfIAeAAIAAAfIAYAAIAAAbIgYAAIAAAzQAAAGADADQADAEAFAAIAGgBIAEgCIAHAXQgEADgGACQgGACgKAAQgPAAgIgIg");
	this.shape_8.setTransform(34.8,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbA4QgOgFgJgIIANgWQAFAFAGADQAHAEAHACQAIADAHgBQAJABAFgEQAEgDAAgFQAAgGgGgDQgHgDgJgCIgUgFQgKgEgIgFQgGgIgBgOQAAgJAFgJQAGgHALgFQAKgFAPgBQAOAAAMAFQAMAEAIAHIgMAVQgFgGgJgEQgKgDgKAAQgHAAgGACQgEADAAAFQAAAFAFADQAGADAJACIAQADQAIADAHAEQAHADAFAGQAEAHAAALQAAAKgGAJQgFAIgMAFQgLAFgQAAQgPAAgNgFg");
	this.shape_9.setTransform(24.9,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbA1QgOgHgJgOQgHgOgBgSQAAgQAIgOQAHgNAOgJQANgHARgBQASABANAHQANAJAHAOQAHAOAAASIAAAGIhVAAQABAIAFAGQADAHAIADQAGADAKAAQAIAAAIgCQAJgDAFgGIAOAUQgJAIgNAEQgMAEgOAAQgQAAgOgIgAAdgKQAAgFgCgGQgEgGgGgFQgGgEgKAAQgIAAgHAEQgFAFgEAGQgDAFgBAGIA4AAIAAAAg");
	this.shape_10.setTransform(12.7,-8.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZA6IgZhOIgXBOIghAAIgjhzIAfAAIAWBNIAahNIAaAAIAZBNIAWhNIAfAAIgjBzg");
	this.shape_11.setTransform(-3.2,-8.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggA1QgNgJgIgOQgHgNAAgRQAAgQAHgNQAIgOANgJQAOgHASgBQATABAOAHQANAJAIAOQAHANAAAQQAAARgHANQgIAOgNAJQgOAHgTABQgSgBgOgHgAgPgcQgHAFgDAHQgDAHgBAJQABAJADAIQADAHAHAFQAHAEAIABQAJgBAHgEQAGgFAEgHQADgIABgJQgBgJgDgHQgEgHgGgFQgHgEgJgBQgIABgHAEg");
	this.shape_12.setTransform(-19.3,-8.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyBQIAAifIAiAAIAACBIBDAAIAAAeg");
	this.shape_13.setTransform(-32.1,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-80.4,-26.7,161,49.2), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYAtIAAhWIAWAAIAAALQAEgFAIgFQAHgDAIAAIAAAWIgDgBIgDAAIgIABIgIAEQgDACgCADIAAA5g");
	this.shape.setTransform(74.8,45.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgGgKAAgOQAAgMAFgKQAGgKAKgHQAKgFANAAQANAAAJAFQAKAHAGAKQAFALAAANIAAAGIhAAAQABAFADAFQADAEAGADQAFADAHAAQAGgBAGgCQAGgCAFgEIAKAPQgHAFgJAEQgKADgKAAQgMgBgLgFgAAWgHQAAgEgDgFQgCgFgEgDQgFgCgHAAQgHAAgEACQgFADgCAFQgCAFgBAEIAqAAIAAAAg");
	this.shape_1.setTransform(66.2,45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgGgKAAgOQAAgMAFgKQAGgKAKgHQAKgFANAAQANAAAJAFQAKAHAGAKQAFALAAANIAAAGIhAAAQABAFADAFQADAEAGADQAFADAHAAQAGgBAGgCQAGgCAFgEIAKAPQgHAFgJAEQgKADgKAAQgMgBgLgFgAAWgHQAAgEgDgFQgCgFgEgDQgFgCgHAAQgHAAgEACQgFADgCAFQgCAFgBAEIAqAAIAAAAg");
	this.shape_2.setTransform(56.2,45.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA6QgHgEgGgGIAAALIgWAAIAAh3IAWAAIAAAsQAGgHAHgDQAHgDAGAAQALAAAKAGQAIAFAFAKQAFAJAAAOQAAAPgFAKQgFALgIAFQgKAFgLAAQgHAAgGgDgAgMgGQgGADgDAEIAAAeQADAEAGADQAFADAHAAQAIgBAGgGQAHgHgBgMQABgLgHgGQgGgHgIAAQgHAAgFADg");
	this.shape_3.setTransform(46.2,43.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgjA6QgJgEgFgHQgFgIAAgLQAAgJADgHQAEgGAGgFQAFgEAHgDIgFgOQgDgGAAgGQAAgIAFgHQAEgHAIgDQAIgEAKAAQAHAAAHADQAIADAEAGQAEAGAAAHQAAAKgEAFQgEAHgHAEIgNAHIAEAHIAFAGIAFAFIAFAHQAEgGADgGIAEgLIATAIIgIAPQgEAHgFAGIALANIAMAMIgdAAIgEgEIgFgFQgHAFgIADQgHADgKAAQgLAAgJgEgAgbAOQgDAFAAAGQAAAGACAEQADAEAEADQAEACAFAAQAFAAAEgCQAEgBAEgDIgHgIIgGgIIgGgHIgGgIQgFADgCAEgAgKgpQgEAEAAAGIACAHIADAJQAIgEAEgEQAFgFAAgGQAAgFgDgCQgDgDgDgBQgGAAgDAEg");
	this.shape_4.setTransform(30.4,43.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUAqQgKgEgHgGIAJgQIAJAGIALAFQAFABAFAAQAHAAADgCQAEgCAAgFQAAgEgEgDIgMgDIgPgEQgJgCgFgEQgFgGAAgKQgBgIAFgGQAEgGAIgEQAIgEALABQAKgBAJAEQAJADAHAFIgKAQQgEgEgHgDQgHgDgHAAQgGAAgDACQgEACAAAEQAAAEAFACIALAEIALACQAGACAGACQAFADADAEQADAGAAAIQAAAHgEAHQgEAGgJAEQgIADgMABQgLgBgKgDg");
	this.shape_5.setTransform(15.4,45.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIAyQgFgGgBgLIAAgtIgOAAIAAgUIAOAAIAAgXIAWAAIAAAXIASAAIAAAUIgSAAIAAAnQAAAEACACQADADAEAAIAEgBIADgBIAFARQgDACgEACQgFABgHAAQgLAAgHgGg");
	this.shape_6.setTransform(8.2,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKA/IAAhWIAVAAIAABWgAgJgmQgEgEAAgGQAAgGAEgEQAEgDAFgBQAGABAEADQADAEABAGQgBAGgDAEQgEADgGABQgFgBgEgDg");
	this.shape_7.setTransform(2.8,43.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAtIAAhWIAWAAIAAALQAEgFAIgFQAHgDAIAAIAAAWIgDgBIgDAAIgIABIgIAEQgDACgCADIAAA5g");
	this.shape_8.setTransform(-2.3,45.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKA/IAAhWIAVAAIAABWgAgJgmQgEgEAAgGQAAgGAEgEQAEgDAFgBQAGABAEADQADAEABAGQgBAGgDAEQgEADgGABQgFgBgEgDg");
	this.shape_9.setTransform(-8.2,43.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA9IAAh3IAXAAIAAALQAFgGAGgDQAHgEAIAAQAKAAAJAFQAJAGAFAKQAFAKAAAOQAAAPgFAJQgFAKgJAGQgJAFgKAAQgHAAgHgDQgHgEgFgGIAAAsgAgMglQgFADgDAEIAAAeQADAEAFADQAGADAFAAQAKgBAFgGQAGgGABgMQgBgLgGgHQgFgHgKAAQgFAAgGADg");
	this.shape_10.setTransform(-15.5,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUAqQgKgEgHgGIAKgQIAIAGIALAFQAFABAFAAQAHAAADgCQAEgCABgFQgBgEgFgDIgLgDIgPgEQgJgCgFgEQgFgGAAgKQgBgIAFgGQAEgGAIgEQAIgEALABQALgBAIAEQAJADAHAFIgKAQQgEgEgHgDQgHgDgHAAQgGAAgDACQgEACAAAEQAAAEAFACIAKAEIAMACQAGACAGACQAFADADAEQADAGAAAIQAAAHgEAHQgFAGgIAEQgIADgMABQgLgBgKgDg");
	this.shape_11.setTransform(-25.4,45.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMASQAEgDAEgEQAEgFAAgFIAAAAIgCABQgFAAgDgDQgEgEAAgFQAAgHAEgEQAEgEAGAAQAGAAAEAFQAFAFAAAIQAAAKgFAIQgFAJgHAGg");
	this.shape_12.setTransform(-36.5,49.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgGgKAAgOQAAgMAFgKQAGgKAKgHQAKgFANAAQANAAAJAFQAKAHAGAKQAFALAAANIAAAGIhAAAQABAFADAFQADAEAGADQAFADAHAAQAGgBAGgCQAGgCAFgEIAKAPQgHAFgJAEQgKADgKAAQgMgBgLgFgAAWgHQAAgEgDgFQgCgFgEgDQgFgCgHAAQgHAAgEACQgFADgCAFQgCAFgBAEIAqAAIAAAAg");
	this.shape_13.setTransform(-43.8,45.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AASAtIAAg0QAAgJgFgEQgEgEgHAAQgGABgFADQgFADgDAEIAAA6IgXAAIAAhWIAXAAIAAALQAEgFAIgFQAHgDAKAAQAPAAAHAHQAHAHAAANIAAA9g");
	this.shape_14.setTransform(-54,45.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA/IAAhWIAVAAIAABWgAgJgmQgEgEAAgGQAAgGAEgEQAEgDAFgBQAGABAEADQADAEABAGQgBAGgDAEQgEADgGABQgFgBgEgDg");
	this.shape_15.setTransform(-61.5,43.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AASAsIgSg7IgRA7IgZAAIgahWIAXAAIARA5IATg5IATAAIATA5IAQg5IAYAAIgaBWg");
	this.shape_16.setTransform(-70.7,45.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AASAtIAAg0QAAgJgFgEQgEgEgHAAQgGABgFADQgFADgDAEIAAA6IgXAAIAAhWIAXAAIAAALQAEgFAIgFQAHgDAKAAQAPAAAHAHQAHAHAAANIAAA9g");
	this.shape_17.setTransform(47,25.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYAnQgKgGgFgKQgGgLAAgMQAAgLAGgLQAFgKAKgHQALgFANAAQAOAAALAFQAKAHAFAKQAGALAAALQAAAMgGALQgFAKgKAGQgLAHgOAAQgNAAgLgHgAgLgVQgFADgDAGQgCAGAAAGQAAAHACAFQADAHAFADQAFAEAGAAQAHAAAFgEQAFgDADgHQACgFAAgHQAAgGgCgGQgDgGgFgDQgFgDgHgBQgGABgFADg");
	this.shape_18.setTransform(36.6,26);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgfA9IgGgBIADgVIAEABIAEABQAEAAADgCQADgBACgEIADgHIgjhXIAYAAIAWA8IAWg8IAZAAIgpBkQgDAIgEAFQgFAEgGACIgOACIgFAAg");
	this.shape_19.setTransform(22.2,27.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgXArQgHgEgFgGQgEgGAAgKQAAgKAEgGQAFgFAHgDQAHgDAHAAQAIAAAHADQAHADAEAEIAAgLQAAgHgFgEQgFgEgIAAQgHAAgGACQgHAEgFAEIgJgPQAIgHAKgEQAKgCAJAAQAKAAAJACQAIAEAGAGQAFAIAAAMIAAA4IgXAAIAAgJQgEAFgHADQgHADgIAAQgHAAgHgDgAgMAIQgEADAAAHQAAAFAEAEQAFADAHAAQAFAAAEgCQAFgBADgFIAAgKQgDgEgFgCQgEgCgFAAQgHAAgFAEg");
	this.shape_20.setTransform(12.5,26);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgZA4QgIgFgFgLQgFgKAAgPQAAgOAFgJQAFgKAIgFQAJgGALAAQAHAAAHADQAHADAFAHIAAgsIAXAAIAAB3IgXAAIAAgLQgFAGgHAEQgHADgHAAQgLAAgJgFgAgOgCQgFAGAAALQAAAMAFAHQAGAGAJABQAHAAAEgDQAGgDADgEIAAgfQgDgDgGgDQgEgDgHAAQgJAAgGAHg");
	this.shape_21.setTransform(2.3,24.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgfA9IgGgBIADgVIAEABIAEABQAEAAADgCQADgBACgEIADgHIgjhXIAYAAIAWA8IAWg8IAZAAIgpBkQgDAIgEAFQgFAEgGACIgOACIgFAAg");
	this.shape_22.setTransform(-11.9,27.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgYAtIAAhWIAWAAIAAALQAEgFAIgFQAHgDAIAAIAAAWIgDgBIgDAAIgIABIgIAEQgDACgCADIAAA5g");
	this.shape_23.setTransform(-19.4,25.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgGgKAAgOQAAgMAFgKQAGgKAKgHQAKgFANAAQANAAAJAFQAKAHAGAKQAFALAAANIAAAGIhAAAQABAFADAFQADAEAGADQAFADAHAAQAGgBAGgCQAGgCAFgEIAKAPQgHAFgJAEQgKADgKAAQgMgBgLgFgAAWgHQAAgEgDgFQgCgFgEgDQgFgCgHAAQgHAAgEACQgFADgCAFQgCAFgBAEIAqAAIAAAAg");
	this.shape_24.setTransform(-28,26);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgLAsIgjhWIAYAAIAWA7IAWg7IAZAAIgjBWg");
	this.shape_25.setTransform(-37.6,26);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAoQgKgGgGgKQgGgKAAgOQAAgMAFgKQAGgKAKgHQAKgFANAAQANAAAJAFQAKAHAGAKQAFALAAANIAAAGIhAAAQABAFADAFQADAEAGADQAFADAHAAQAGgBAGgCQAGgCAFgEIAKAPQgHAFgJAEQgKADgKAAQgMgBgLgFgAAWgHQAAgEgDgFQgCgFgEgDQgFgCgHAAQgHAAgEACQgFADgCAFQgCAFgBAEIAqAAIAAAAg");
	this.shape_26.setTransform(-47.2,26);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhBB+QgdgLgUgTIAkg0QAPAPAWAKQAVAKAbAAQASAAAKgHQAKgGAAgKQAAgLgMgFQgNgHgUgEIgjgHQgSgGgQgIQgQgIgKgPQgKgOAAgZQAAgWAMgTQAMgTAYgLQAYgMAhAAQAgAAAcAKQAbAJAVASIglAxQgSgNgTgIQgUgGgSAAQgRAAgHAGQgHAGAAAJQAAAKAMAFQALAFAWAEIAjAIQASAGAQAIQAQAJAJANQAKAPABAXQAAAagNAVQgNATgZAMQgZALgkAAQgnAAgdgMg");
	this.shape_27.setTransform(57.4,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhhCFIAAkJIDDAAIAAA5Ih+AAIAAAtIB7AAIAAA6Ih7AAIAAAvIB+AAIAAA6g");
	this.shape_28.setTransform(34,-4.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag7B5QghgSgSgfQgTgfAAgpQAAgpATgeQASgfAhgSQAggRAnAAQAhAAAXALQAXAKAQAQQAPAQAIASIg7AdQgHgRgPgLQgQgLgVAAQgUAAgQAKQgRAKgJASQgJARAAAVQAAAWAJASQAJARARAKQAQAKAUAAQAVAAAQgLQAPgLAHgQIA7AcQgIARgPAQQgPARgYAKQgXALghAAQgnAAgggRg");
	this.shape_29.setTransform(8.2,-4.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgiCFIAAkJIBFAAIAAEJg");
	this.shape_30.setTransform(-11.6,-4.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAjCFIgshaIgjAAIAABaIhFAAIAAkJICFAAQAeAAAUALQAVAMALAVQALATAAAaQgBAWgIARQgIAPgMAKQgMAKgMAFIA2BhgAgsgOIA2AAQANAAAKgJQAJgIABgNQgBgOgJgJQgKgHgNgBIg2AAg");
	this.shape_31.setTransform(-30.2,-4.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhwCFIAAkJICEAAQAeAAAVAMQAVAMAKAUQALAUAAAZQAAAYgLATQgKATgVAMQgVALgeABIg/AAIAABagAgrgOIA2AAQAOAAAJgJQAJgIAAgNQAAgOgJgIQgJgIgOgBIg2AAg");
	this.shape_32.setTransform(-55.9,-4.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgiCGIAAjOIhKAAIAAg9IDZAAIAAA9IhKAAIAADOg");
	this.shape_33.setTransform(68.6,-35.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhBB/QgdgMgUgUIAkgzQAPAOAWAKQAVALAbAAQASAAAKgGQAKgHAAgKQAAgLgMgFQgNgHgUgEIgjgHQgSgFgQgJQgQgIgKgPQgKgPAAgYQAAgWAMgTQAMgTAYgLQAYgLAhgBQAgAAAcAJQAbAKAVASIglAyQgSgOgTgIQgUgGgSAAQgRAAgHAGQgHAGAAAJQAAAKAMAFQALAGAWADIAjAJQASAEAQAJQAQAJAJAOQAKAOABAXQAAAbgNATQgNAVgZALQgZAKgkABQgngBgdgKg");
	this.shape_34.setTransform(44.5,-35.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhhCGIAAkLIDDAAIAAA7Ih+AAIAAAsIB7AAIAAA5Ih7AAIAAAwIB+AAIAAA7g");
	this.shape_35.setTransform(21.1,-35.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAoCGIgoinIgoCnIhIAAIhNkLIBNAAIApCyIAtiyIA0AAIAuCyIAoiyIBOAAIhNELg");
	this.shape_36.setTransform(-9.8,-35.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhIB4QghgRgRgfQgUgfAAgpQAAgoAUgfQARgfAhgRQAggSAoAAQAqAAAfASQAgARATAfQASAfAAAoQAAApgSAfQgTAfggARQgfASgqAAQgoAAgggSgAgmhCQgQAKgJASQgIARgBAVQABAWAIARQAJASAQAKQARAKAVAAQAWAAARgKQAQgKAIgSQAJgRAAgWQAAgVgJgRQgIgSgQgKQgRgKgWAAQgVAAgRAKg");
	this.shape_37.setTransform(-43.8,-35.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhXCGIAAkLIBFAAIAADOIBqAAIAAA9g");
	this.shape_38.setTransform(-69.1,-35.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-121.4,-61,243,116.5), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgEQgFgEgDgHQgEgGAAgJQAAgIAEgHQAEgGAGgDQAGgFAHgCIAPgEIANgBIALgBIAFAAIAAgBQAAgHgBgFQgCgFgDgDQgDgDgEgCQgFgBgFAAIgFAAIgGABIgFADQgDACAAACIAAAHIgUAAIAAgLQAAgFADgDIAFgGQADgCAFgCIAIgCIAIgBIAHAAQAMAAAJADQAJADAFAGQAFAGADAIQACAIAAAJIAAAvIABADIADABIAKAAIAAATIgUAAQgIAAgDgEQgDgDAAgGIAAgDIAAgCIAAgCIAAAAQgDAHgFAEIgFAFIgGADQgCACgFAAIgJABQgHAAgHgCgAgFADIgKACQgEABgEADQgEACgCAEQgCADAAAFIABAHQABADADADQADACAEACQAEABAFAAQAHAAAEgDQAGgDAEgFQADgFADgHQACgGAAgGIAAgEIgGAAIgJAAIgJABg");
	this.shape.setTransform(99.1,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwA4IAAgNIA3hFIAEgEIADgDIADgDIAAgBIgDABIgDAAIgFAAIgdAAQgFAAAAAFIAAAHIgUAAIAAgQQAAgIAEgDQADgEAHAAIBPAAIAAANIg4BFIgEAEIgDADIgDADIAAABIADAAIADAAIAFgBIAjAAIADgBQABAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAIAAgIIATAAIAAARQAAAHgDADQgEAEgHAAg");
	this.shape_1.setTransform(87.5,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgEQgFgEgDgHQgEgGAAgJQAAgIAEgHQAEgGAGgDQAGgFAHgCIAPgEIANgBIALgBIAFAAIAAgBQAAgHgBgFQgCgFgDgDQgDgDgEgCQgFgBgFAAIgFAAIgGABIgFADQgDACAAACIAAAHIgUAAIAAgLQAAgFADgDIAFgGQADgCAFgCIAIgCIAIgBIAHAAQAMAAAJADQAJADAFAGQAFAGADAIQACAIAAAJIAAAvIABADIADABIAKAAIAAATIgUAAQgIAAgDgEQgDgDAAgGIAAgDIAAgCIAAgCIAAAAQgDAHgFAEIgFAFIgGADQgCACgFAAIgJABQgHAAgHgCgAgFADIgKACQgEABgEADQgEACgCAEQgCADAAAFIABAHQABADADADQADACAEACQAEABAFAAQAHAAAEgDQAGgDAEgFQADgFADgHQACgGAAgGIAAgEIgGAAIgJAAIgJABg");
	this.shape_2.setTransform(76,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAEBOQgHAAgEgEQgDgDAAgHIAAh1QAAgFgEAAIgJAAIAAgTIAVAAQAGAAADAEQADADAAAHIAAB2QABAEAFAAIAIAAIAAATg");
	this.shape_3.setTransform(66.9,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsBOIAAiIIgNAAIAAgTIBDAAQAKAAAJAEQAKADAFAHQAHAGAEAJQAEAJAAALQAAALgEAJQgEAIgHAHQgFAGgKAEQgJADgKAAIgfAAIAAA6gAgVABIAcAAQAGAAAFgBQAGgCAEgEQAEgEACgFQACgGAAgHQAAgHgCgFQgCgGgEgEQgEgEgGgCQgFgCgGAAIgcAAg");
	this.shape_4.setTransform(57.7,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeBLQgKgEgFgIQgHgIgDgKQgEgMAAgMQAAgNAEgKQADgLAIgIQAGgHAJgEQAKgEALgBIAIACIAHABIAFADIAGADIAHAIIAAgCIAAgCIAAgDIAAgcQAAgEgFAAIgJAAIAAgTIAVAAQAHAAAEADQADAEAAAHIAAB2QAAAEAFAAIAJAAIAAASIgVAAQgHAAgDgCQgDgDAAgGIAAgCIAAgDIAAgBIAAAAQgEAFgEAFIgGAEIgFADIgHACIgKABQgLAAgJgEgAgRgPQgHACgDAGQgFAEgCAHQgDAIAAAJQAAAJADAIQACAGAEAGQAEAFAGADQAGACAGAAQAGAAAFgCQAGgCAFgFQAEgEADgIQADgHAAgLQAAgIgDgHQgCgGgDgFQgFgGgFgDQgGgEgHAAQgHAAgFADg");
	this.shape_5.setTransform(38.6,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AArA5QgIAAgDgEQgDgDAAgHIAAg0IgBgKIgDgJQgCgEgEgCQgEgCgHgBQgGAAgFACQgGACgEAEIgIAJQgEAFgBAGIgCAHIAAAHIAAA0IgWAAIAAhXQAAgFgEAAIgJAAIAAgTIAUAAQAOAAAAANIAAAEIAAACIAAADIAAACIAAAAIAFgIQADgFAGgEIAMgHQAGgCAJAAQAUAAAJALQAJAKAAAWIAAAvQAAAFAFAAIAJAAIAAASg");
	this.shape_6.setTransform(24.9,9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgXA2QgKgEgJgIQgHgIgFgLQgFgKAAgNQAAgMAFgKQAFgLAHgIQAJgIAKgEQAMgEALAAQAMAAALAEQALAEAJAIQAHAIAFALQAFAKAAAMQAAANgFAKQgFALgHAIQgJAIgLAEQgLAEgMAAQgLAAgMgEgAgOgkQgHADgFAFQgGAGgCAHQgDAHAAAIQAAAJADAHQACAHAGAGQAFAFAHADQAHADAHAAQAHAAAIgDQAGgDAGgFQAFgGADgHQADgHAAgJQAAgIgDgHQgDgHgFgGQgGgFgGgDQgIgDgHAAQgHAAgHADg");
	this.shape_7.setTransform(11.2,9.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABNA5QgHAAgDgEQgEgDAAgHIAAg0IAAgKIgDgJQgCgFgEgCQgEgCgGAAQgGAAgFACQgFADgEAEIgHAJIgFALIgBAHIAAAHIAAAzIgVAAIAAhCIAAgKQgBgGgCgDQgCgEgEgDQgDgCgHAAQgGAAgFACQgFADgEAEIgHAJQgDAGgCAGIgBAHIAAAGIAAAzIgWAAIAAhXQAAgFgEAAIgJAAIAAgTIAUAAQAHABAEADQADADAAAGIAAAEIAAACIAAADIAAACIAAAAIAGgKQAEgEAFgEIALgGQAGgCAGAAQAPAAAIAHQAHAFADAOIAAAAQADgFAEgFQADgFAGgDQAFgEAGgCQAGgCAHAAQATAAAJALQAJAKAAAWIAAAvQAAAFAEAAIAJAAIAAASg");
	this.shape_8.setTransform(-5.9,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdA4QgHgCgFgEQgFgEgDgHQgEgGAAgJQAAgIAEgHQAEgGAGgDQAGgFAHgCIAPgEIANgBIALgBIAFAAIAAgBQAAgHgBgFQgCgFgDgDQgDgDgEgCQgFgBgFAAIgFAAIgGABIgFADQgDACAAACIAAAHIgUAAIAAgLQAAgFADgDIAFgGQADgCAFgCIAIgCIAIgBIAHAAQAMAAAJADQAJADAFAGQAFAGADAIQACAIAAAJIAAAvIABADIADABIAKAAIAAATIgUAAQgIAAgDgEQgDgDAAgGIAAgDIAAgCIAAgCIAAAAQgDAHgFAEIgFAFIgGADQgCACgFAAIgJABQgHAAgHgCgAgFADIgKACQgEABgEADQgEACgCAEQgCADAAAFIABAHQABADADADQADACAEACQAEABAFAAQAHAAAEgDQAGgDAEgFQADgFADgHQACgGAAgGIAAgEIgGAAIgJAAIgJABg");
	this.shape_9.setTransform(-22,9.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeBNQgKgCgIgEIAHgRIAJADIAKADQAFACAHAAQAHAAAGgDQAGgBAFgEQAFgEACgFQADgHAAgIIAAgHIAAgDIAAgCIAAgCIAAAAQgFAIgIAEQgIAEgLAAQgMAAgJgEQgJgEgGgHQgHgJgEgJQgDgLAAgMQAAgMADgJQAEgKAGgIQAGgHAJgFQAKgEALAAIAJABIAHACIAGADIAFADQAFAEACAFIABAAIAAgEQAAgFADgDQADgDAHgBIAUAAIAAATIgJAAIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAABIAABSQgBAOgFAKQgEAKgIAFQgIAHgKACQgKADgKAAQgKAAgKgDgAgTg6QgGADgDAEQgEAFgCAHQgCAHAAAIQAAAJACAHQACAHAEAEQAFAGAGACQAFADAIAAQAFAAAFgCQAGgCADgEQAFgEACgHQACgHAAgLQAAgLgCgHQgCgIgFgDQgEgFgGgCQgFgCgFAAQgIABgGACg");
	this.shape_10.setTransform(-34.5,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AADBOQgGAAgEgEQgCgDAAgHIAAhJQgBgFgFAAIgJAAIAAgTIAVAAQAHAAADAEQADADAAAIIAABJQAAAEAGAAIAJAAIAAATgAgJg2IAAgXIASAAIAAAXg");
	this.shape_11.setTransform(-44.2,7.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIA6IgJgDIgHgDIgHgDQgGgFgFgFIALgPQAEAFAFAEIALAFQAGADAHAAIAHgBIAGgCIAFgFQABgDAAgDQAAgEgCgDIgHgFIgKgFIgKgEIgLgFQgGgCgEgEQgEgEgDgFQgDgFAAgHQAAgIAEgGQADgGAGgEQAFgDAIgCQAHgCAIAAIAHAAIAIACIAIACIAHAEIAFAGQABADAAAEIAAALIgTAAIAAgGQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgFgDIgFgBIgGgBQgIAAgGADQgFAEAAAGQAAAEADADIAGAFIAJAFIALAEIALAFQAGACAEAEQAEADADAGQADAFAAAHQAAAHgEAGQgDAGgFAFQgGAEgHACQgIACgIAAIgKAAg");
	this.shape_12.setTransform(-52.4,9.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AArA5QgIAAgDgEQgDgDAAgHIAAg0IgBgKIgDgJQgCgEgEgCQgEgCgHgBQgGAAgFACQgGACgEAEIgIAJQgEAFgBAGIgCAHIAAAHIAAA0IgWAAIAAhXQAAgFgEAAIgJAAIAAgTIAUAAQAOAAAAANIAAAEIAAACIAAADIAAACIAAAAIAFgIQADgFAGgEIAMgHQAGgCAJAAQAUAAAJALQAJAKAAAWIAAAvQAAAFAFAAIAJAAIAAASg");
	this.shape_13.setTransform(-64.1,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AADBOQgGAAgDgEQgDgDAAgHIAAhJQgBgFgFAAIgJAAIAAgTIAVAAQAHAAADAEQADADABAIIAABJQAAAEAEAAIAJAAIAAATgAgJg2IAAgXIASAAIAAAXg");
	this.shape_14.setTransform(-74,7.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgnAvQgKgLAAgVIAAgwQAAgEgFAAIgJAAIAAgTIAVAAQAIAAADADQADAEAAAHIAAAzIABALQABAGACADQACAEAEACQAEADAHgBQAIABAGgEQAHgEAFgFQAEgHADgHQACgIAAgGIAAg1IAWAAIAABYQAAAEAFAAIAJAAIAAASIgVAAQgHAAgDgCQgEgEAAgGIAAgEIAAgCIAAgCIAAgCIAAAAQgCAEgEAEIgIAIQgFAEgHACQgGADgIAAQgTAAgJgKg");
	this.shape_15.setTransform(-83.9,10);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAwA/QgKAIgMAEQgNAFgNAAQgLgBgKgCQgKgDgJgFQgJgGgHgHQgHgIgFgJQgFgIgDgLQgDgKAAgKQAAgRAGgPQAGgOALgLQALgLAOgGQAPgGAQAAQARAAAOAGQAPAGALALQAKALAHAOQAGAPAAARQAAANgFANQgFANgJALIASARIgNAOgAgWg3QgKAFgIAHQgHAJgEAKQgFALAAANQAAAMAFALQAEAKAHAJQAIAHAKAFQALAFALAAQAHAAAGgCIALgDIAIgGIgRgQIANgPIARASQAGgIADgJQADgJAAgJQAAgNgFgLQgEgKgIgJQgHgHgLgFQgKgFgMAAQgLAAgLAFg");
	this.shape_16.setTransform(-99.5,7.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6B9IAAguIAcAAIAAg4Ig+hmIgVAAIAAgtIBnAAIAAAtIgUAAIAaAuIADAJIABAEIAAAAIACgEIAEgJIAaguIgVAAIAAgtIBnAAIAAAtIgVAAIg9BmIAAA4IAbAAIAAAug");
	this.shape_17.setTransform(117.4,-20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABLB9QgPAAgHgEQgIgEgGgLIgeg6QgDgGgEgCQgEgDgKAAIgMAAIAAAqIAZAAIAAAuIh0AAIAAguIAcAAIAAieIgcAAIAAgtIBxAAIAaAAQAMABALAEQAXAGANATQAOARABAcQgBAZgLAQQgKAQgUAKIAAABIADACIAGAEQAEAEADAFIAUAlQACAFAEACQADABAHAAIAIAAIAAAugAgYgLIAbAAQAPABAJgJQAIgIAAgRQAAgIgDgIQgCgHgJgEQgIgEgPAAIgWAAg");
	this.shape_18.setTransform(93,-20.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgwB2QgWgJgOgPQgLgNgFgRQgFgRAAgUIAAhsIgcAAIAAgtIB3AAIAAAtIgcAAIAABsQAAAJACAHQABAHADAFQAFAIAJAFQALAFAMAAQALAAAKgEQAJgFAGgJQADgFACgHQABgHAAgJIAAhsIgcAAIAAgtIB3AAIAAAtIgcAAIAABsQAAATgFARQgGARgKANQgKALgNAIQgOAIgQADQgQAEgQAAQgaAAgWgJg");
	this.shape_19.setTransform(65.4,-19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhsB9IAAguIAcAAIAAieIgcAAIAAgtIB0AAIAaABQAKABAKADQAVAHALAPQAMAQAAAWQAAAQgIAPQgHAOgOAIIAAABQAOAFAJAIQAJAIAEAMQADAMAAAMQAAASgIAPQgIAOgMAJQgMAKgQAEQgJACgJAAIgTABgAgRBMIAjAAQAHAAAFgCQAHgEAEgHQAEgIAAgJQAAgKgHgIQgGgHgOAAIgjAAgAgRgcIAeAAQAMABAFgIQAFgGAAgLQAAgGgCgGQgDgGgGgDIgIgCIgIAAIgZAAg");
	this.shape_20.setTransform(38.9,-20.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AguB7QgVgIgNgNQgNgOAAgTIAAghIA4AAIAAATQAAAJAKAGQALAFAPAAQAOAAAJgFQAJgFAAgKQAAgKgIgGQgIgGgMgFIgYgJQgSgHgPgIQgOgIgKgOQgJgPAAgWQAAgVAIgOQAHgPANgHQANgJAQgEQAQgEAQABQAVgBAUAGQATAFAMALQAMAKABAQIAAAlIg4AAIAAgQQgBgGgIgFQgIgDgMAAQgKAAgIADQgIAEAAAKQAAAIAGAGQAGAGAKAEIAUAIQAUAHARAIQARAKALANQALAPAAAXQAAAVgIAPQgIAPgOAKQgOAIgRAFQgRAFgRAAQgYgBgVgGg");
	this.shape_21.setTransform(15.5,-20.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAlB9Iggh/IgDgNIgBgKIAAgEIgBAAIAAAEIgCAKIgCANIggB/IhFAAIgxjMIgVAAIAAgtIBuAAIAAAtIgdAAIAXBuIACAMIABAKIABAFIABAAIAAgFIACgKIACgMIAnibIAvAAIAnCbIACAMIABAKIABAFIABAAIAAgFIABgKIACgMIAXhuIgdAAIAAgtIBvAAIAAAtIgVAAIgxDMg");
	this.shape_22.setTransform(-13.3,-20.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhhB9IAAguIAbAAIAAieIgbAAIAAgtIC/AAIAABJIg0AAIAAgYIgxAAIAAAyIBIAAIAAAxIhIAAIAAA0IA1AAIAAgZIA1AAIAABKg");
	this.shape_23.setTransform(-42.9,-20.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ABLB9QgPAAgIgEQgHgEgFgLIgfg6QgCgGgFgCQgEgDgKAAIgMAAIAAAqIAZAAIAAAuIh0AAIAAguIAcAAIAAieIgcAAIAAgtIBxAAIAaAAQANABALAEQAWAGAOATQANARAAAcQAAAZgLAQQgLAQgSAKIAAABIACACIAHAEQADAEADAFIAUAlQACAFADACQAFABAFAAIAJAAIAAAugAgYgLIAbAAQAPABAIgJQAJgIAAgRQAAgIgDgIQgDgHgHgEQgJgEgPAAIgWAAg");
	this.shape_24.setTransform(-67,-20.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AARB9IAAguIAcAAIAAg2IhZAAIAAA2IAcAAIAAAuIh3AAIAAguIAcAAIAAieIgcAAIAAgtIB3AAIAAAtIgcAAIAAA4IBZAAIAAg4IgcAAIAAgtIB2AAIAAAtIgcAAIAACeIAcAAIAAAug");
	this.shape_25.setTransform(-95.6,-20.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AguB7QgVgIgNgNQgNgOAAgTIAAghIA4AAIAAATQAAAJAKAGQALAFAPAAQAOAAAJgFQAJgFAAgKQAAgKgIgGQgIgGgMgFIgYgJQgSgHgPgIQgOgIgKgOQgJgPAAgWQAAgVAIgOQAHgPANgHQANgJAQgEQAQgEAQABQAVgBAUAGQATAFAMALQAMAKABAQIAAAlIg4AAIAAgQQgBgGgIgFQgIgDgMAAQgKAAgIADQgIAEAAAKQAAAIAGAGQAGAGAKAEIAUAIQAUAHARAIQARAKALANQALAPAAAXQAAAVgIAPQgIAPgOAKQgOAIgRAFQgRAFgRAAQgYgBgVgGg");
	this.shape_26.setTransform(-121.6,-20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-170.2,-42.5,337.2,142.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhECIQglgTgWgiQgWgjgBgwQABgvAWgjQAWgjAlgTQAlgSAtAAQAjAAAaAKQAZAKASARQASARAKATIhNAnQgHgOgOgJQgPgJgTAAQgVAAgQAKQgRAKgJARQgJARAAAUQAAAVAJARQAJARARAKQAQAKAVAAQAPAAAMgDQANgEAJgGIAAgOIg6AAIAAhJICSAAIAAB3QgZAdgiAQQgiAQgsAAQgtAAglgTg");
	this.shape.setTransform(85.9,15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA5CWIhuigIAACgIhbAAIAAkrIBeAAIBoCWIAAiWIBbAAIAAErg");
	this.shape_1.setTransform(53.1,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsCWIAAkrIBaAAIAAErg");
	this.shape_2.setTransform(29.2,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA5CWIhuigIAACgIhbAAIAAkrIBeAAIBoCWIAAiWIBbAAIAAErg");
	this.shape_3.setTransform(5.4,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhxCWIAAkrIDjAAIAABMIiIAAIAAAjICFAAIAABKIiFAAIAAAmICIAAIAABMg");
	this.shape_4.setTransform(-24.5,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiFCWIAAkrICfAAQAjABAYANQAYAOANAXQAMAXAAAdQAAAdgMAVQgNAXgYANQgYAOgjAAIhEAAIAABggAgqgVIA4AAQAMAAAIgHQAIgHAAgMQAAgNgIgGQgIgIgMABIg4AAg");
	this.shape_5.setTransform(-52.3,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhTCHQglgTgVgjQgWgjAAguQAAgtAWgjQAVgjAlgUQAlgTAuAAQAvAAAlATQAlAUAVAjQAWAjAAAtQAAAugWAjQgVAjglATQglAUgvAAQguAAglgUgAglhAQgQAKgJARQgJARAAAUQAAAVAJARQAJARAQAKQAQAKAVAAQAWAAAQgKQAQgKAJgRQAJgRAAgVQAAgUgJgRQgJgRgQgKQgQgKgWAAQgVAAgQAKg");
	this.shape_6.setTransform(-85.3,15.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiUCWIAAkrICGAAQAuAAAlARQAmASAVAhQAWAigBAvQABAwgWAhQgVAigmARQgkASguAAgAg6BHIAsAAQAWAAAQgKQAQgKAJgQQAJgQAAgTQAAgUgJgQQgHgPgRgKQgPgJgXAAIgtAAg");
	this.shape_7.setTransform(65.3,-21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AA5CWIhuigIAACgIhbAAIAAkrIBeAAIBoCWIAAiWIBbAAIAAErg");
	this.shape_8.setTransform(31,-21.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABFCWIgLgnIhzAAIgLAnIhjAAIBvkrIBxAAIBvErgAAiAkIgihpIghBpIBDAAg");
	this.shape_9.setTransform(-1.8,-21.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfCWIgohgIgiAAIAABgIhbAAIAAkrICgAAQAjABAYANQAYAOAMAYQANAWAAAdQgBAagIASQgIARgMAMQgNALgMAGIA3BqgAgrgVIA3AAQAMAAAJgHQAIgHABgNQgBgMgIgHQgJgGgMgBIg3AAg");
	this.shape_10.setTransform(-32.4,-21.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhECIQglgTgWgiQgWgjgBgwQABgvAWgjQAWgjAlgTQAlgSAtAAQAjAAAaAKQAZAKASARQASARAKATIhNAnQgHgOgOgJQgPgJgTAAQgVAAgQAKQgRAKgJARQgJARAAAUQAAAVAJARQAJARARAKQAQAKAVAAQAPAAAMgDQANgEAJgGIAAgOIg6AAIAAhJICSAAIAAB3QgZAdgiAQQgiAQgsAAQgtAAglgTg");
	this.shape_11.setTransform(-65,-21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-150.4,-49.8,301,91.7), null);


(lib.b_link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{b_link:3});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33FF00").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,-35.6);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,19.5,1.29,1.29,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137.1,-66.9,274.2,133.9);


(lib.Tween9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,-35.6);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,19.5,1.29,1.29,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-66.9,274.2,133.9);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,-35.6);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,19.5,1.29,1.29,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-66.9,274.2,133.9);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.4,-35.6);

	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-2.5,19.5,1.29,1.29,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-66.9,274.2,133.9);


// stage content:
(lib.GO_1703_300x250_Prices_Certificate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.b_link.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://www.totalwine.com/go-test?preview=true", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(361));

	// button
	this.b_link = new lib.b_link();
	this.b_link.parent = this;
	this.b_link.setTransform(150,125);
	new cjs.ButtonHelper(this.b_link, 0, 1, 2, false, new lib.b_link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.b_link).wait(361));

	// grand copy
	this.instance = new lib.Tween7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(425.9,77.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).to({x:150.9},8).wait(54));

	// button
	this.logo_mc = new lib.Symbol14();
	this.logo_mc.parent = this;
	this.logo_mc.setTransform(392.8,170.3);
	this.logo_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(305).to({_off:false},0).to({x:149.8},8).wait(48));

	// low on
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(379.4,75.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).to({x:214.4,y:78.8},7).wait(112).to({x:214.7,y:78.5},0).to({x:-77.1,y:75.8},7).to({_off:true},1).wait(58));

	// beersBottle.svg
	this.instance_2 = new lib.Symbol11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-76.5,110.5,0.754,0.754,0,0,0,-1,0.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(259).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.24,scaleY:1.24,x:74.5,y:111.4},7).wait(29).to({x:74.4,y:111},0).to({regY:0.4,scaleX:1.19,scaleY:1.19,x:-212.1,y:112},7).to({_off:true},1).wait(58));

	// wines copy 3
	this.instance_3 = new lib.Symbol10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(366.4,137.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(259).to({_off:false},0).to({x:216.5},7).wait(29).to({x:-72},7).to({_off:true},1).wait(58));

	// spiritsBottle.svg
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-82.1,111.4,0.754,0.754,0,0,0,-0.1,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(217).to({_off:false},0).to({regX:0.3,regY:0.4,scaleX:1.17,scaleY:1.17,x:67.7,y:104.2},7).wait(30).to({regX:-0.1,regY:0,scaleX:0.75,scaleY:0.75,x:-82.1,y:111.4},7).to({_off:true},2).wait(98));

	// wines copy 2
	this.instance_5 = new lib.Symbol8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(376.4,137.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(217).to({_off:false},0).to({x:215.4},7).wait(30).to({x:384.9},7).to({_off:true},2).wait(98));

	// winesBottle.svg
	this.instance_6 = new lib.Symbol7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-75.2,114,0.754,0.754,0,0,0,-0.3,0.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).to({regX:0.1,regY:-0.4,scaleX:1.25,scaleY:1.25,x:81.1,y:106.5},7).wait(29).to({regX:-0.3,regY:0.6,scaleX:0.75,scaleY:0.75,x:-75.2,y:114},6).to({_off:true},1).wait(142));

	// wines
	this.instance_7 = new lib.Symbol6();
	this.instance_7.parent = this;
	this.instance_7.setTransform(379.4,133.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(176).to({_off:false},0).to({x:213.4,y:136.5},7).wait(29).to({x:379.4,y:133.5},6).to({_off:true},1).wait(142));

	// lowest
	this.instance_8 = new lib.Symbol4();
	this.instance_8.parent = this;
	this.instance_8.setTransform(402.9,105.5,1.181,1.181,0,0,0,1.3,-0.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},0).to({x:152.9},7).wait(42).to({x:-116},7).to({_off:true},1).wait(182));

	// grand
	this.instance_9 = new lib.Symbol1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(461.4,70.8,1.057,1.055,0,0,0,2.3,1.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(60).to({_off:false},0).to({x:153.4},8).wait(48).to({x:-113.6},10).to({_off:true},1).wait(234));

	// ballston
	this.instance_10 = new lib.Symbol3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(405.6,146.2,0.887,0.886,0,0,0,2.4,1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).to({x:153.6},6).wait(50).to({x:-110.4},6).to({_off:true},1).wait(234));

	// Layer 1
	this.instance_11 = new lib.Tween7("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.9,110.7);

	this.instance_12 = new lib.Tween8("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.9,110.7);

	this.instance_13 = new lib.Tween9("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.9,110.7);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween10("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-121,110.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11}]}).to({state:[{t:this.instance_12}]},7).to({state:[{t:this.instance_13}]},47).to({state:[{t:this.instance_14}]},10).to({state:[]},1).wait(296));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},7).wait(354));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(54).to({_off:false},0).to({_off:true,x:-121},10).wait(297));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsAtIAThYIBGAAIAAABIgDATIgsAAIgDANIAqAAIgEARIgqAAIgEARIAwAAIgEAVg");
	this.shape.setTransform(197.5,225.1,0.857,0.856);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALAsIgIgVQgDgJgDgEIgHgCIgBAAIgHAkIgcAAIAThXIAxAAQANAAAGAHQAGAIAAAIQAAAKgGAIQgFAFgRAEQAJAGALAfgAgHgHIAFAAQANAAADgBIAGgEQACgCAAgEQAAgDgCgCQgCgDgIABIgNAAg");
	this.shape_1.setTransform(189.5,225.2,0.857,0.856);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgjAkQgLgKAAgRQAAgJADgIQADgKAFgGQACgEALgJQAKgGAFgBIAPgBQATAAALALQAJAKAAARIgCANQgCAKgFAGQgDAGgKAIQgIAGgHACIgPACQgSAAgMgKgAgGgTQgEAFgEAKQgDAIAAAGQAAAHAEAEQAEAFAHAAQAHAAAFgGQAFgEADgLQADgIAAgEQAAgJgEgEQgEgEgHAAQgGAAgGAFg");
	this.shape_2.setTransform(181,225.2,0.857,0.856);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AASAsIAPhCIggBCIgUAAIgEhCIgMBCIgYAAIAThXIAiAAIACA3IAbg3IAkAAIgTBXg");
	this.shape_3.setTransform(171.8,225.2,0.857,0.856);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAWAnIgCgCQgHAFgHABQgJADgFAAQgSAAgJgIQgIgGAAgLQAAgSAZgKQgFgKAAgGQAAgLAIgFQAJgGALAAQAMAAAIAGQAIAHAAAHQAAAGgDADIgHAHIgLAGIgDACIALAMIAGgHIABgCIARALIgJALIAIAIIgOAOIgHgHgAgTASQAAADABACQACADACABIAHACQAFAAAIgGIgNgRQgMAFAAAHgAABggQgBACAAAEQgBAGAEAEQAGgDADgDQACgCAAgEIgCgEQgCgCgDAAQgEAAgCACg");
	this.shape_4.setTransform(158.6,225.2,0.857,0.856);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsA8QgXgUAAgoQAAglAVgVQATgVAfABQAeAAARASQARASAAAgIAAAKIhaAAIAAAAQAAAcAKAPQAMAQAUAAQAVAAARgOIADAEIgGARQgSAOgegBQgfAAgUgTgAgVgMIAvAAQgBg0gWAAQgWAAgCA0g");
	this.shape_5.setTransform(215.2,212.6,0.857,0.856);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvBLQgNAAgLACQAEgWAAhCQAAgmgZAAQgaAAAAAuIAAALIABBFQgKgCgMAAQgNAAgKACQABgWAAgvIAAgLIgBhFIAVACIAYgCIgDAXQAUgbAbAAQAvAAAAA5IgBAzQAAATACAaQgJgCgNAAg");
	this.shape_6.setTransform(201.1,212.5,0.857,0.856);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AABBrQgMAAgLACQADgWAAgvIAAgMQAAgggDgkIAXACQAKAAAMgCQgCAWAAAuIAAAMQAAAaACArQgJgCgNAAgAgQhBQgIgIAAgKQABgKAHgHQAHgIAJAAQALAAAHAIQAHAHAAAKQAAAKgHAIQgHAHgLAAQgJAAgHgHg");
	this.shape_7.setTransform(190,209.8,0.857,0.856);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABABpIgRACQgRhEghhTQgsB8gIAbIgQgCQgGAAgKACQgJgjgahXQgVhKgHgRIAbACQAKAAAPgCQAQBCAYBaIACAAIAehWQASg1AEgRIAPACIARgCQADAPATA6QAWBAAEATIACAAQAmh6AIgiIANACIAOgCIggBaQgbBSgMApIgQgCg");
	this.shape_8.setTransform(173.9,210,0.857,0.856);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAABzQgMAAgKACQACgjAAhIIAAgTIgChrQAIACAOAAQAOAAAJgCQgCAjAABIIAAATIACBrQgKgCgNAAg");
	this.shape_9.setTransform(131.2,209.1,0.857,0.856);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANA4QgRAXgWAAQgWAAgMgNQgKgLAAgRQAAgUANgKQAKgJAXgFQAYgGAHgEQAGgEAAgJQAAgLgIgIQgHgIgOAAQgKAAgMAFQgLAGgEAGIgCAAIgFgQQAcgXAeAAQA4AAAAA0IgBBFQAAAOAEAEQAEADAKAAIAAAHQgQAIgNAAQgXAAgGgXgAgNAHQgOAIAAAUQAAALAFAHQAFAGAIAAQAJAAAHgIQAGgIAAgPIAAggQgJAEgRAHg");
	this.shape_10.setTransform(121.1,212.7,0.857,0.856);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgZA4IAChYIgWAAIABgIIgBgIIAWACIgBgmIApgTIADACQgDATAAAkIAcAAIgBAHIABAIIgcgBQgCAlAAAfQAAAgAEAJQADAJAKAAQALAAADgDIAAANQgMAIgWAAQglAAAAgwg");
	this.shape_11.setTransform(110,210.5,0.857,0.856);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgzA+QgYgUAAgmQAAgnAYgWQAVgVAeAAQAkAAAUAVQAUAUAAAjQAAAlgVAWQgVAWgiAAQgeAAgVgRgAgVgvQgIASAAAhQAAA9AdAAQAeAAAAhIQAAg5gdAAQgNAAgJARg");
	this.shape_12.setTransform(98,212.7,0.857,0.856);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AABBqQgMAAgMACQABgbAAg8IAAhMIABAAQAAgXgCgEIg4ADIABgNIgBgPQAvADAhAAQAiAAAtgDQgCAHAAAIIACANQgigDgVAAQgCADAAAYIAABMQAAAkADAzQgOgCgLAAg");
	this.shape_13.setTransform(85.9,210,0.857,0.856);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgBgDIgIgDQACAEABADQABADgBADQgDAGAHgIQAEAAACABQABAAgCgCQgCgEAEgDg");
	this.shape_14.setTransform(147.8,211.6,0.857,0.856);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgEAGQABgEgBgCIgCgHIAGACIAIABQgFADACADIACADIgHgBIgFAEIABgCg");
	this.shape_15.setTransform(147.6,211.7,0.857,0.856);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgHAAQAOAAABAB");
	this.shape_16.setTransform(139.8,215.7,0.857,0.856);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AAPAAQgRAGgLgH");
	this.shape_17.setTransform(139.5,219.9,0.857,0.856);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AACAVQgIgHACgIQADgGACgDQAFgKAAgH");
	this.shape_18.setTransform(141.2,219.4,0.857,0.856);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AADAIQAAgEgDgFQgCgFAAgB");
	this.shape_19.setTransform(144.9,218.3,0.857,0.856);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgGgcQgFAFgJAHQgHAHgCAJQgCAHAFAJQAFAHAFACIAMAEQAMACAJgIQAGgFADgEQACgFADgE");
	this.shape_20.setTransform(143.2,215.5,0.857,0.856);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AAUAJQgMAEgLgGQgOgGgBgL");
	this.shape_21.setTransform(143.8,212.8,0.857,0.856);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AAcgRQgNgJgLADIgIAEQgIAKgKAEQgGAFACAHQAAAFADADQAHAJANABQANABAIgM");
	this.shape_22.setTransform(147.5,214.2,0.857,0.856);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AAJgUQgEADgDACQgBABgBAIQgIAVAAAG");
	this.shape_23.setTransform(149.8,213.8,0.857,0.856);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AAPAKQgPAFgGgIQgGgHgCgK");
	this.shape_24.setTransform(151.2,211.3,0.857,0.856);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgZgNQAFAfAXgEQAZgFgCgV");
	this.shape_25.setTransform(148.4,209.8,0.857,0.856);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgZARQAOAFATgOQASgMAAgN");
	this.shape_26.setTransform(141.6,211,0.857,0.856);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AASgHQgKgDgZAT");
	this.shape_27.setTransform(141.1,208.6,0.857,0.856);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AgXgPQAAAIABAGQAAAEABABQABACAFAFQADAFAJAAQAHAAAFgCQAFgCAFgIQAFgGAAgE");
	this.shape_28.setTransform(144.5,208.1,0.857,0.856);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(0.5,1,0,4).p("AALAAQgIAAgEAAQgFABgEAA");
	this.shape_29.setTransform(142.2,203.9,0.857,0.856);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AADAJQAAgDgCgGQgBgIgCAA");
	this.shape_30.setTransform(144.3,203.9,0.857,0.856);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AgEgFQAEACABADQAAACABAJ");
	this.shape_31.setTransform(142.6,205.4,0.857,0.856);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAjgWQgFACgbAYQgVAUgQgB");
	this.shape_32.setTransform(142.5,204.1,0.857,0.856);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(0.5,0,0,4).p("AAkgNQgDACgIABQgHABgBACQgRAQgCACQgEADgMgCQgPgBgCAA");
	this.shape_33.setTransform(143.1,205.4,0.857,0.856);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(0.6,0,0,4).p("AALAKIgVgcQgBA0ADgGQABgDAEgDQADgCACgCQAGgHADgBg");
	this.shape_34.setTransform(146.6,199.7,0.857,0.856);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgKgXIAVAcQgDABgGAHIgFAEQgEADgBADIgBABQgCAAABgvg");
	this.shape_35.setTransform(146.6,200.1,0.857,0.856);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,2,2).p("AgvgmQAIAogBAWQAAADALgCQAKgBAFgDQACgBAMAKQAFAFAGAGQAHgOADgDQABgCAJAFQAKAFAHgD");
	this.shape_36.setTransform(149.7,204.9,0.857,0.856);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("Ag/gYQABAKAiAPQAoAUA1AE");
	this.shape_37.setTransform(152.8,202.3,0.857,0.856);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("AAJAOQgRgWAAgE");
	this.shape_38.setTransform(155.1,205.1,0.857,0.856);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("AAdgvQgKADgNAFQgYAKgJAQIAGAWQAEAZgLAO");
	this.shape_39.setTransform(150.8,202.4,0.857,0.856);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("AAfgmQgMABgNAEQgbAHgJAOIAEAQQAFAUAHAP");
	this.shape_40.setTransform(152.8,203.2,0.857,0.856);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("AAWgkIgRAHQgSAKgHAKIAGARQAIAUAHAJ");
	this.shape_41.setTransform(154.1,203.8,0.857,0.856);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(0.6,1,0,4).p("AALgKIgKAHQgKAIgBAG");
	this.shape_42.setTransform(155.7,202.8,0.857,0.856);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFFFFF").ss(1,0,0,4).p("AgjhcQgWgBgYAEQgWAEAAADQAAABAIAGQAIAGgBABQAAABgJAFQgIAGgDAEQgEAHAOADIgGANQgGAOAHAHQACACgEALQgFANAFAKQACAGgFAMQgFAMAGAJQgWARAFARQADAJADAHQgEAEAAAIQgBAJAHAGQAIAHAMgCQANgCAGgLQAPAEAOgIQAOgJABgPQAQAEAPgIQASgKgCgZQAVAAAGgLQABgCAGgbQAKgCAJgMQANgSgOgZQAAgBABgBQABgCADACQAhAOgNgaQAJAAALgFQAOgHAAgLQgCgGgFgIQgHgKgJgEQADgKgEgCQgGgBgEgCIAAgKQAAgCgKgEQgMgGgDgCQAJgDgDgGQgFgLgZAEQgdAFgWAaQgCAAgEgEQgGgGgCgOQgDgEgBAEQgCAFACAMQACAIgCAIQgBAEgCAFQgCAEgDADg");
	this.shape_43.setTransform(148.1,209.8,0.857,0.856);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(361));

	// bg
	this.instance_15 = new lib.totalWine_logo();
	this.instance_15.parent = this;
	this.instance_15.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(361));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300,250);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/beerbottles.png", id:"beerbottles"},
		{src:"images/Group2.png", id:"Group2"},
		{src:"images/spiritsbottles.png", id:"spiritsbottles"},
		{src:"images/winebottles.png", id:"winebottles"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;