//=============================================================================
// MPP_SimpleTouch2.js
//=============================================================================
// Copyright (c) 2015 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.2.1】マウスやタッチ操作を変更します。
 * @author 木星ペンギン
 *
 * @help プラグインコマンド:
 *   CancelOff           # 次の[選択肢の表示]でキャンセルSEを鳴らさない
 * 
 * 
 *  デフォルトではタッチした時にタッチ位置とカーソル位置が合っていれば【決定】、
 *  違っている場合は【カーソル移動】となっています。
 *  
 *  本プラグインを導入した場合、以下のように機能が変更・追加されます
 *  
 * ●カーソル移動
 *  項目をタッチした時点で【カーソル移動】します。
 *  タッチしたまま上下にスライドすると、スクロールを行います。
 *  
 *  ページのスクロールは半行ずつ行われます。
 * 
 * ●決定操作
 *  項目をタッチした後（この時点で【カーソル移動】）にすぐ離すと【決定】を行います。
 *  
 *  ダブルタップ(Double Tap)を1以上に設定している場合、
 *  同じ項目で上記の動作を二度行うことで【決定】となります。
 * 
 *  項目をタッチした後、すぐに離さなかった場合は何も行いません。
 *  
 *  この他にも上下のスライドや左右へのスワイプを行った際も何も行いません。
 *  
 * ●キャンセル操作
 *  アクティブなウィンドウの外側をタッチすると【キャンセル】を行います。
 *  
 * ●ページ切り替え
 *  画面をタッチした後、左右にスワイプすると【ページ切り替え】を行います。
 * 
 * -------------------------------
 * その他補足
 * 
 * ●キャンセル無効(Cancel Enabled?)
 *  プラグインパラメータ[Cancel Enabled?]は右クリックや二本指タップによる
 *  ウィンドウのキャンセルを無効する機能で、メニュー呼び出しには影響しません。
 *  ゲームパッドやキーボードによるキャンセル操作にも影響しません。
 *  
 * ●ステータス画面での操作追加
 *  ステータス画面で画面をタッチすると【キャンセル】を行います。
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 * @param Cancel Enabled?
 * @desc 右クリックまたは二本指タップによるキャンセルの有効/無効
 * @default true
 * 
 * @param Long Press Time
 * @desc 決定を取り消すまでの長押しの時間 (フレーム数)
 * @default 15
 * 
 * @param Double Tap Default
 * @desc [ダブルタップ（ダブルクリック）間隔]のデフォルト値
 * (0は無効 / 実際の間隔はステータス名から取得)
 * @default 0
 * 
 * @param Double Tap Name
 * @desc オプション画面に表示する[ダブルタップ間隔]の名前
 * (空の場合は表示しない)
 * @default ダブルタップ間隔
 * 
 * @param Double Tap Status
 * @desc オプション画面に表示する[ダブルタップ間隔]のステータス名
 * (カンマで区切ってください / この値が実際の間隔になります)
 * @default 無効,15,30,45,60
 * 
 * @param Cursor SE Always?
 * @desc タッチした際、常にカーソルSEを鳴らすかどうか
 * @default false
 * 
 */

(function() {
    
var parameters = PluginManager.parameters('MPP_SimpleTouch2');
var MPPlugin = {
    cancelEnabled: eval(parameters['Cancel Enabled?']) === true,
    longPressTime: Number(parameters['Long Press Time'] || 15),
    doubleTapDefault: Number(parameters['Double Tap Default'] || 0),
    doubleTapName: parameters['Double Tap Name'] || '',
    doubleTapStatus: (parameters['Double Tap Status'] || '無効,15,30,45,60').split(","),
    cursorSeAlways: eval(parameters['Cursor SE Always?']) === true
};

var Alias = {};

//-----------------------------------------------------------------------------
// SoundManager

SoundManager.cancelOff = false;

//37
Alias.SoMa_playCancel = SoundManager.playCancel;
SoundManager.playCancel = function() {
    if (!this.cancelOff) Alias.SoMa_playCancel.call(this);
};

//-----------------------------------------------------------------------------
// ConfigManager

ConfigManager.doubleTap = MPPlugin.doubleTapDefault;

//71
Alias.CoMa_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    var config = Alias.CoMa_makeData.call(this);
    config.doubleTap = this.doubleTap;
    return config;
};

//82
Alias.CoMa_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    Alias.CoMa_applyData.call(this, config);
    this.doubleTap = (config['doubleTap'] || 0);
};

//-----------------------------------------------------------------------------
// Game_Message

//332
Alias.GaMe_clear = Game_Message.prototype.clear;
Game_Message.prototype.clear = function() {
    Alias.GaMe_clear.call(this);
    this.cancelOff = false;
};

//-----------------------------------------------------------------------------
// Game_Interpreter

//1722
Alias.GaIn_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Alias.GaIn_pluginCommand.call(this, command, args);
    if (command === 'CancelOff') {
        $gameMessage.cancelOff = true;
    }
};

//-----------------------------------------------------------------------------
// Window_Selectable

//13
Alias.WiSe_initialize = Window_Selectable.prototype.initialize;
Window_Selectable.prototype.initialize = function(x, y, width, height) {
    Alias.WiSe_initialize.call(this, x, y, width, height);
    this._touchInterval = -1;
};

//280
Alias.WiSe_updateArrows = Window_Selectable.prototype.updateArrows;
Window_Selectable.prototype.updateArrows = function() {
    Alias.WiSe_updateArrows.call(this);
    this.upArrowVisible = this._scrollY > 0;
};

//340
Window_Selectable.prototype.processTouch = function() {
    if (this.isOpenAndActive()) {
        if (TouchInput.isTriggered()) {
            this._touching = true;
            this._selecting = true;
            this._touchCount = 0;
            this._touchX = TouchInput.x;
            this._touchY = TouchInput.y;
        } else if (TouchInput.isCancelled()) {
            if (MPPlugin.cancelEnabled && this.isCancelEnabled()) {
                this.processCancel();
            }
        }
        if (this._touching) {
            if (TouchInput.isTriggered()) {
                this.onTouch(false);
            } else if (TouchInput.isPressed()) {
                this._touchCount++;
                if (this.touchScroll() || this._touchCount >= MPPlugin.longPressTime) {
                    this._selecting = false;
                    this._touchInterval = -1;
                }
            } else {
                if (this._selecting) {
                    this.onTouch(true);
                } else {
                    this._touchInterval = -1;
                }
                this._touching = false;
                this._selecting = false;
            }
        }
        if (this._touchInterval >= 0) {
            this._touchInterval++;
        }
    } else {
        this._touching = false;
        this._selecting = false;
        this._touchCount = 0;
        this._touchX = 0;
        this._touchY = 0;
        this._touchInterval = -1;
    }
};

Window_Selectable.prototype.touchScroll = function() {
    var height = this.itemHeight() / 2;
    var sy = this._touchY - TouchInput.y;
    if (Math.abs(sy) >= height) {
        this._touchY += sy < 0 ? height : -height;
        var row = this._scrollY / this.itemHeight();
        this.setTopRow(row + (sy < 0 ? -0.5 : 0.5));
        return true;
    }
    return false;
};

//368
Alias.WiSe_onTouch = Window_Selectable.prototype.onTouch;
Window_Selectable.prototype.onTouch = function(triggered) {
    if (triggered) {
        var sx = (TouchInput.x - this._touchX) / Math.max(this._touchCount, 1);
        if (sx < -4) {
            if (this.isHandled('pageup'))   this.processPageup();
        } else if (sx > 4) {
            if (this.isHandled('pagedown')) this.processPagedown();
        } else if (!this.isTouchedInsideFrame()) {
            if (this.isCancelEnabled())     this.processCancel();
        } else {
            var value = ConfigManager.doubleTap;
            var state = MPPlugin.doubleTapStatus[value];
            var interval = this._touchInterval;
            if (value === 0 || (interval >= 0 && interval < Number(state))) {
                this._touchInterval = -1;
                this._stayCount = 0;
                Alias.WiSe_onTouch.call(this, triggered);
            } else {
                this._touchInterval = 0;
            }
        }
    } else {
        var lastIndex = this.index();
        this._stayCount = 0;
        Alias.WiSe_onTouch.call(this, triggered);
        if (this.index() !== lastIndex) {
            this._touchInterval = -1;
        } else if (MPPlugin.cursorSeAlways) {
            var x = this.canvasToLocalX(TouchInput.x);
            var y = this.canvasToLocalY(TouchInput.y);
            if (this.isContentsArea(x, y)) {
                SoundManager.playCursor();
            }
        }
    }
};

//393
Alias.WiSe_hitTest = Window_Selectable.prototype.hitTest;
Window_Selectable.prototype.hitTest = function(x, y) {
    if (this.isContentsArea(x, y) && this._scrollY % this.itemHeight() > 0) {
        var cx = x - this.padding;
        var cy = y - this.padding;
        var topIndex = this.topIndex() + this.maxPageItems();
        for (var i = 0; i < this.maxCols(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                var rect = this.itemRect(index);
                var right = rect.x + rect.width;
                var bottom = rect.y + rect.height;
                if (cx >= rect.x && cy >= rect.y && cx < right && cy < bottom) {
                    return index;
                }
            }
        }
    }
    return Alias.WiSe_hitTest.call(this, x, y);
};

//507
Window_Selectable.prototype.isCursorVisible = function() {
    var row = this.row();
    var topRow2 = Math.ceil(this._scrollY / this.itemHeight());
    var bottomRow = Math.max(0, topRow2 + this.maxPageRows() - 1);
    return row >= this.topRow() && row <= bottomRow;
};

//512
Window_Selectable.prototype.ensureCursorVisible = function() {
    var row = this.row();
    var topRow = this._scrollY / this.itemHeight();
    if (row < topRow) {
        this.setTopRow(row);
    } else if (row > this.bottomRow()) {
        this.setBottomRow(row);
    }
};

//541
Alias.WiSe_drawAllItems = Window_Selectable.prototype.drawAllItems;
Window_Selectable.prototype.drawAllItems = function() {
    if (this._scrollY % this.itemHeight() > 0) {
        var topIndex = this.topIndex() + this.maxPageItems();
        for (var i = 0; i < this.maxCols(); i++) {
            var index = topIndex + i;
            if (index < this.maxItems()) {
                this.drawItem(index);
            }
        }
    }
    Alias.WiSe_drawAllItems.call(this);
};

//-----------------------------------------------------------------------------
// Window_Status

Window_Status.prototype.isTouchedInsideFrame = function() {
    return false;
};

//-----------------------------------------------------------------------------
// Window_Options

//13
//Alias.WiOp_initialize = Window_Options.prototype.initialize;
//Window_Options.prototype.initialize = function() {
//    this._tempValue = {};
//    this._tempValue.doubleTap = ConfigManager.doubleTap;
//    Alias.WiOp_initialize.call(this);
//};

//36
Alias.WiOp_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
    Alias.WiOp_addGeneralOptions.call(this);
    if (MPPlugin.doubleTapName) {
        this.addCommand(MPPlugin.doubleTapName, 'doubleTap');
    }
};

//62
Alias.WiOp_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'doubleTap') {
        return MPPlugin.doubleTapStatus[value];
    } else {
        return Alias.WiOp_statusText.call(this, index);
    }
};

//84
Alias.WiOp_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'doubleTap') {
        value++;
        if (value >= MPPlugin.doubleTapStatus.length) {
            value = 0;
        }
        value = value.clamp(0, MPPlugin.doubleTapStatus.length - 1);
        this.changeValue(symbol, value);
    } else {
        Alias.WiOp_processOk.call(this);
    }
};

//Alias.WiOp_processCancel = Window_Options.prototype.processCancel
//Window_Options.prototype.processCancel = function() {
//    Alias.WiOp_processCancel.call(this);
//    ConfigManager.doubleTap = this._tempValue.doubleTap;
//};

//100
Alias.WiOp_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'doubleTap') {
        value++;
        value = value.clamp(0, MPPlugin.doubleTapStatus.length - 1);
        this.changeValue(symbol, value);
    } else {
        Alias.WiOp_cursorRight.call(this, wrap);
    }
};

//113
Alias.WiOp_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'doubleTap') {
        value--;
        value = value.clamp(0, MPPlugin.doubleTapStatus.length - 1);
        this.changeValue(symbol, value);
    } else {
        Alias.WiOp_cursorLeft.call(this, wrap);
    }
};

//139
//Alias.WiOp_getConfigValue = Window_Options.prototype.getConfigValue;
//Window_Options.prototype.getConfigValue = function(symbol) {
//    if (symbol === 'doubleTap') {
//        return this._tempValue[symbol];
//    } else {
//        return Alias.WiOp_getConfigValue.call(this, symbol);
//    }
//};

//143
//Alias.WiOp_setConfigValue = Window_Options.prototype.setConfigValue;
//Window_Options.prototype.setConfigValue = function(symbol, volume) {
//    if (symbol === 'doubleTap') {
//        this._tempValue[symbol] = volume;
//    } else {
//        Alias.WiOp_setConfigValue.call(this, symbol, volume);
//    }
//};

//-----------------------------------------------------------------------------
// Window_ChoiceList

Alias.WiChLi_processCancel = Window_ChoiceList.prototype.processCancel;
Window_ChoiceList.prototype.processCancel = function() {
    SoundManager.cancelOff = $gameMessage.cancelOff;
    Alias.WiChLi_processCancel.call(this);
    SoundManager.cancelOff = false;
};

})();
