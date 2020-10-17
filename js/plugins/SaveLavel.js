//=============================================================================
// https://paradre.com/セーブ・ロード画面に表示される情報を変更【ツ/
//=============================================================================


(function() {

	DataManager.makeSavefileInfo = function() {
	    var info = {};
	    info.globalId   = this._globalId;
	    info.title      = $dataSystem.gameTitle;
	    info.characters = $gameParty.charactersForSavefile();
	    info.faces      = $gameParty.facesForSavefile();
	    info.playtime   = $gameSystem.playtimeText();
	    info.timestamp  = Date.now();
	    info.saveString = $gameVariables.value(20) + "日目　シモベ：" + $gameVariables.value(110) + "人　　相手のシモベ：" + $gameVariables.value(111) + "人";
	    return info;
	};


　　Window_SavefileList.prototype.drawGameTitle = function(info, x, y, width) {
　　	if (info.title) {
　　　　	this.drawText(info.saveString, x, y, width);
　　	}
	};

})();