//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

	// マップ上にウィンドウ表示するよ宣言
	var Scene_map_start = Scene_Map.prototype.start;
	Scene_Map.prototype.start = function() {
		Scene_map_start.call(this);
	    this._InfoWindow = new Window_Info();
	    this.addWindow(this._InfoWindow);
	};
    var _Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        _Scene_Map_update.call(this);
        this._InfoWindow.setText();
    };
	
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 10;
		var y = 10;
		//一部のマップで位置を変える
		if($gameMap.mapId() == 22){
		//左上から離れる
			var x = 50;
		}
		if($gameMap.mapId() == 68){
		//左上から離れる
			var x = 625;
		}
		//情報窓表示スイッチがOFFなら画面外に表示
		if(!$gameSwitches.value(6)){
			var x = 850;
		}
	    var width = 180;
	    var height = 80;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
		//this.changeTextColor(this.textColor(16));
        //this.drawIcon(210, 1, 1);
        this.drawText($gameVariables.value(20), 0, 1, 30, 'center');
        this.drawText("日目 " + $gameVariables.value(56) + ":" + $gameVariables.value(57),30, 1);
		this.drawText("(" + $gameVariables.value(55) +") MP:",2, 30);
		this.drawText($gameActors.actor(1).mp + "/" + $gameActors.actor(1).param(1), 86, 30, 70, 'right');
		//drawText(テキスト, x座標, y座標, 表示幅, 'right'アラインメント);
		//this.resetTextColor();
		//this.drawText($gameVariables.value(2) + " 個",0,this.lineHeight());
	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 20;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 10;
	};
	// ウィンドウの色調
	//Window_Info.prototype.updateTone = function() {
    //	this.setTone(64, 0, 128);
	//};
	
})();