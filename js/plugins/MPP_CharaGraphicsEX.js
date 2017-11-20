//=============================================================================
// MPP_CharaGraphics.js
//=============================================================================
// Copyright (c) 2015 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.0】イベントの画像をキャラクターと同じにします。
 * @author 木星ペンギン（少しだけ改造）
 *
 * @help プラグインコマンド:
 *   CharaGraphicssEX      # イベント (接触中のイベントID) 番を (接触中のキャラID)　番目の
 *                                 キャラクターの画像にする
 * 
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 * 
 */

(function() {

//1722
var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'CharaGraphicsEX') {
        var event = this.character(Number($gameVariables.value(30)));
        var actor = $gameActors.actor(Number($gameVariables.value(9)));
        event.setImage(actor.characterName(), actor.characterIndex());
    }
};


})();
