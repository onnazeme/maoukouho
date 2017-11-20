//=============================================================================
// Yanfly Engine Plugins - Picture Common Events
// YEP_PictureCommonEvents.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_PictureCommonEvents = true;

var Yanfly = Yanfly || {};
Yanfly.PCE = Yanfly.PCE || {};

//=============================================================================
 /*:
 * @plugindesc v1.04 Causes common events to run when certain pictures
 * are clicked while on the map.
 * @author Yanfly Engine Plugins
 *
 * @param ---General---
 * @default
 *
 * @param Enable Touch Move
 * @desc Is touch movement enabled by default?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param Hide Message
 * @desc Hide Pictures with common events during messages?
 * NO - false   YES - true   Default: true
 * @default true
 *
 * @param ---Picture 1---
 * @default
 *
 * @param Picture 1 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 1 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 2---
 * @default
 *
 * @param Picture 2 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 2 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 3---
 * @default
 *
 * @param Picture 3 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 3 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 4---
 * @default
 *
 * @param Picture 4 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 4 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 5---
 * @default
 *
 * @param Picture 5 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 5 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 6---
 * @default
 *
 * @param Picture 6 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 6 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 7---
 * @default
 *
 * @param Picture 7 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 7 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 8---
 * @default
 *
 * @param Picture 8 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 8 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 9---
 * @default
 *
 * @param Picture 9 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 9 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param ---Picture 10---
 * @default
 *
 * @param Picture 10 Click
 * @desc Runs this common event when a picture with this ID is
 * clicked. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Repeat
 * @desc Runs this common event when a picture with this ID is held
 * every 6 frames. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Hold
 * @desc Runs this common event when a picture with this ID is
 * clicked and held. Leave this value at 0 for no common event.
 * @default 0
 *
 * @param Picture 10 Release
 * @desc Runs this common event when a picture with this ID is
 * released. Leave this value at 0 for no common event.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Pictures can function as something other than just a visual for your game.
 * They can sometimes serve as UI elements or more! However, what they don't
 * have the ability to inherently do is to call upon common events when clicked
 * on by the mouse. With this plugin, the pictures bound to a common event will
 * become usable when clicked or touched!
 *
 * ============================================================================
 * Instructions
 * ============================================================================
 *
 * In the plugin's parameters, you can set common event ID's to each picture ID
 * listed from 1 to 100 (max number of pictures used in RPG Maker MV is 100).
 * If the picture is has even a value of 1 opacity, that picture can be used
 * for a common event. There are four condition types that can be bound with
 * the common events:
 *
 * ---
 *
 * - CLICK -
 * If the picture is clicked upon, this will prompt the common event to trigger
 * if the common event value listed is above 0. This will trigger only once
 * until the player releases the mouse (or stops touching the screen).
 *
 * - REPEAT -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger once every 6 frames until
 * the player releases the mouse (or stops touching the screen) or moves the
 * mouse outside of the picture boundaries.
 *
 * - HOLD -
 * If the mouse is clicked and then held (or if the touch screen is pushed and
 * held), as long as the mouse is above the picture area and the common event
 * value listed is above 0, then this will trigger every frame until the player
 * releases the mouse (or stops touching the screen) or moves the mouse outside
 * of the picture boundaries.
 *
 * - RELEASE -
 * Upon releasing the clicked mouse (or the moment the player stops touching
 * the screen) and releases the mouse above this picture and if the picture's
 * common event value listed is above 0, then this will trigger upon release.
 *
 * ---
 * 
 * Note that there are some behavioral changes in regards to pictures bound to
 * that of common events. Any picture that's bound to a common event will be
 * separate from the map's spriteset, and instead, bound to the scene. This is
 * so that in the event the screen is scrolled, zoomed in, shakes, etc., it
 * will NOT affect the bound pictures.
 *
 * This is because the pictures are generally to be used as UI elements and UI
 * elements best work under the practice that they do not change position.
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are some plugin commands you can use should you want to add a
 * bit of control with the Picture Common Events.
 *
 * Plugin Command
 *
 *   EnableTouchMove
 *   DisableTouchMove
 *   - Allows the player to press a destination on the screen and move there or
 *   disables the player from using touch movement.
 *   
 *   HidePictureCommonEvents
 *   ShowPictureCommonEvents
 *   - Manually hide all pictures bound to common events or show them. If shown
 *   then pictures will return to their previous opacity value. Hidden pictures
 *   cannot be triggered to activate common events.
 *
 *   MovePlayer Down
 *   MovePlayer Left
 *   MovePlayer Right
 *   MovePlayer Up
 *   - Will cause the player character to move as if moving by using a 4-dir
 *   input (either via keyboard or controller). This is best used with 'Press'.
 *
 *   TriggerButton Ok
 *   TriggerButton Cancel
 *   TriggerButton Dash
 *   TriggerButton PageUp
 *   TriggerButton PageDown
 *   TriggerButton Left
 *   TriggerButton Up
 *   TriggerButton Right
 *   TriggerButton Down
 *   - This will cause the game to simulate triggering the button command of
 *   one of those original functions even if there is a common event bound to
 *   all of the keys of that original function.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Fixed a bug that caused the 'HidePictureCommonEvents' plugin command to
 * not function properly.
 *
 * Version 1.03:
 * - Disabling Touch Move now also disables the Right Click button and
 * on-screen Two Finger tap to prevent random menu calls.
 *
 * Version 1.02:
 * - Fixed a bug that prevented the MovePlayer commands from working without a
 * dependency on the YEP_RegionEvents plugin.
 *
 * Version 1.01:
 * - Changed this plugin's Imported setting to YEP_PictureCommonEvents.
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.makePictureCommonEventSettings = function(a, b) {
    Yanfly.PCE.Trigger = [null];
    Yanfly.PCE.Repeated = [null];
    Yanfly.PCE.Pressed = [null];
    Yanfly.PCE.Released = [null];
    for (var i = a; i < b + 1; ++i) {
      var param = 'Picture ' + i + ' Click';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Trigger.push(value);
      var param = 'Picture ' + i + ' Repeat';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Repeated.push(value);
      var param = 'Picture ' + i + ' Hold';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Pressed.push(value);
      var param = 'Picture ' + i + ' Release';
      var value = Number(Yanfly.Parameters[param]);
      Yanfly.PCE.Released.push(value);
    }
};

Yanfly.Parameters = PluginManager.parameters('YEP_PictureCommonEvents');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.PCEMove = eval(String(Yanfly.Parameters['Enable Touch Move']));
Yanfly.Param.PCEHideMsg = eval(String(Yanfly.Parameters['Hide Message']));

Yanfly.makePictureCommonEventSettings(1, 100);

//=============================================================================
// Game_System
//=============================================================================

Yanfly.PCE.Game_System_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    Yanfly.PCE.Game_System_initialize.call(this);
    this.initPCESettings();
};

Game_System.prototype.initPCESettings = function() {
    this._touchMovement = Yanfly.Param.PCEMove;
    this._hidePceMsg = Yanfly.Param.PCEHideMsg;
    this._hidePceAll = false;
};

Game_System.prototype.isTouchMoveEnabled = function() {
    if (this._touchMovement === undefined) this.initPCESettings();
    return this._touchMovement;
};

Game_System.prototype.setTouchMoveEnabled = function(value) {
    if (this._touchMovement === undefined) this.initPCESettings();
    this._touchMovement = value;
};

Game_System.prototype.isPictureHiddenDuringMessage = function() {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    return this._hidePceMsg;
};

Game_System.prototype.setPictureHiddenDuringMessage = function(value) {
    if (this._hidePceMsg === undefined) this.initPCESettings();
    this._hidePceMsg = value;
};

Game_System.prototype.isPictureHidden = function() {
    if (this._hidePceAll === undefined) this.initPCESettings();
    return this._hidePceAll;
};

Game_System.prototype.setPictureHidden = function(value) {
    if (this._hidePceAll === undefined) this.initPCESettings();
    this._hidePceAll = value;
};

//=============================================================================
// Game_Interpreter
//=============================================================================

Yanfly.PCE.Game_Interpreter_pluginCommand =
    Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    Yanfly.PCE.Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'EnableTouchMove') {
      $gameSystem.setTouchMoveEnabled(true);
    } else if (command === 'DisableTouchMove') {
      $gameSystem.setTouchMoveEnabled(false);
    } else if (command === 'MovePlayer') {
      this.pictureCommonEventsMove(args);
    } else if (command === 'HidePictureCommonEvents') {
      $gameSystem.setPictureHidden(true);
    } else if (command === 'ShowPictureCommonEvents') {
      $gameSystem.setPictureHidden(false);
    } else if (command === 'TriggerButton') {
      this.triggerButton(args)
    }
};

Game_Interpreter.prototype.pictureCommonEventsMove = function(args) {
    var dir = args[0];
    if (dir.match(/down/i)) {
      $gamePlayer.moveByPictureCommonEvent(2);
    } else if (dir.match(/left/i)) {
      $gamePlayer.moveByPictureCommonEvent(4);
    } else if (dir.match(/right/i)) {
      $gamePlayer.moveByPictureCommonEvent(6);
    } else if (dir.match(/up/i)) {
      $gamePlayer.moveByPictureCommonEvent(8);
    }
};

Game_Interpreter.prototype.triggerButton = function(args) {
  if (!args) return;
  var button = args[0].toLowerCase();
  if (button === 'cancel') button = 'escape';
  if (button === 'dash') button = 'shift';
  Input._latestButton = button;
  Input._pressedTime = 0;
};

//=============================================================================
// Game_Player
//=============================================================================

Game_Player.prototype.moveByPictureCommonEvent = function(direction) {
    if (!this.isMoving() && this.canMove() && direction > 0) {
      Input._dir4 = direction;
    }
};

Yanfly.PCE.Game_Player_canMove = Game_Player.prototype.canMove;
Game_Player.prototype.canMove = function() {
    if ($gameMap.isEventRunning() && $gameMap.moveAfterCommonEvent()) {
      return true;
    }
    return Yanfly.PCE.Game_Player_canMove.call(this);
};

//=============================================================================
// Game_Map
//=============================================================================

Yanfly.PCE.Game_Map_isEventRunning = Game_Map.prototype.isEventRunning;
Game_Map.prototype.isEventRunning = function() {
    if ($gameTemp._commonEventId > 0) return true;
    return Yanfly.PCE.Game_Map_isEventRunning.call(this);
};

Game_Map.prototype.moveAfterCommonEvent = function() {
    var interpreter = $gameMap._interpreter;
    if (!interpreter._list) return false;
    if (interpreter.eventId() > 0) return false;
    var list = interpreter._list;
    if ($gameTemp.destinationX() === $gamePlayer.x &&
      $gameTemp.destinationY() === $gamePlayer.y) {
        $gameTemp.clearDestination();
    }
    for (var i = 0; i < list.length; ++i) {
      var code = list[i].code;
      if ([201, 205, 230, 232, 261, 301].contains(code)) return false;
    }
    return true;
};

//=============================================================================
// Game_Picture
//=============================================================================

Game_Picture.prototype.isTriggered = function() {
    if (!SceneManager._scene instanceof Scene_Map) return false;
    if (this.opacity() <= 0) return false;
    var sp = SceneManager._scene.getPictureSprite(this);
    if (!sp) return false;
    var mx = this.getLocalTouchInputX();
    var my = this.getLocalTouchInputY();
    //console.log('click: ' + mx + ', ' + my);
    var rect = this.getSpriteRect(sp);
    return mx >= rect.x &&
           my >= rect.y &&
           mx < (rect.x + rect.width) &&
           my < (rect.y + rect.height);
};

Game_Picture.prototype.pictureId = function() {
    return $gameScreen._pictures.indexOf(this);
};

Game_Picture.prototype.getLocalTouchInputX = function() {
    value = TouchInput.x;
    return value;
};

Game_Picture.prototype.getLocalTouchInputY = function() {
    value = TouchInput.y;
    return value;
};

Game_Picture.prototype.getSpriteRect = function(sp) {
    var width = sp.width * Math.abs(sp.scale.x);
    var height = sp.height * Math.abs(sp.scale.y);
    var x = sp.x - (sp.anchor.x * width);
    var y = sp.y - (sp.anchor.y * height);
    if (sp.anchor.x === 0 && sp.scale.x < 0) x += sp.width * sp.scale.x;
    if (sp.anchor.y === 0 && sp.scale.y < 0) y += sp.height * sp.scale.y;
    //console.log('rect: ' + x + ', ' + y + ', ' + width + ', ' + height);
    return new Rectangle(x, y, width, height);
};

Game_Picture.prototype.isRelatedPictureCommonEvent = function() {
    $gameTemp._pictureCommonEvents = $gameTemp._pictureCommonEvents || [];
    if ($gameTemp._pictureCommonEvents[this.pictureId()]) {
      return $gameTemp._pictureCommonEvents[this.pictureId()];
    }
    if (Yanfly.PCE.Trigger[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Repeated[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Pressed[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else if (Yanfly.PCE.Released[this.pictureId()]) {
      $gameTemp._pictureCommonEvents[this.pictureId()] = true;
    } else {
      $gameTemp._pictureCommonEvents[this.pictureId()] = false;
    }
    return $gameTemp._pictureCommonEvents[this.pictureId()];
};

Yanfly.PCE.Game_Picture_opacity = Game_Picture.prototype.opacity;
Game_Picture.prototype.opacity = function() {
    if ($gameSystem.isPictureHidden()) return 0;
    if ($gameMessage.isBusy() && this.isRelatedPictureCommonEvent()) {
      if ($gameSystem.isPictureHiddenDuringMessage()) return 0;
    }
    return Yanfly.PCE.Game_Picture_opacity.call(this);
};

//=============================================================================
// Spriteset_Base
//=============================================================================

Yanfly.PCE.Spriteset_Base_createPictures =
    Spriteset_Base.prototype.createPictures;
Spriteset_Base.prototype.createPictures = function() {
    var scene = SceneManager._scene;
    if (scene instanceof Scene_Map) {
      this.createSceneMapPictures();
    } else {
      Yanfly.PCE.Spriteset_Base_createPictures.call(this);
    }
};

Spriteset_Base.prototype.createSceneMapPictures = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    var x = (Graphics.width - width) / 2;
    var y = (Graphics.height - height) / 2;
    this._pictureContainer = new Sprite();
    this._pictureContainer.setFrame(x, y, width, height);
    for (var i = 1; i <= $gameScreen.maxPictures(); i++) {
      var picture = new Sprite_Picture(i);
      if (picture.isRelatedPictureCommonEvent()) {
        SceneManager._scene.addPictureCommonEvent(picture);
      } else {
        this._pictureContainer.addChild(picture);
      }
    }
    this.addChild(this._pictureContainer);
};

//=============================================================================
// Sprite_Picture
//=============================================================================

Yanfly.PCE.Sprite_Picture_loadBitmap = Sprite_Picture.prototype.loadBitmap;
Sprite_Picture.prototype.loadBitmap = function() {
    Yanfly.PCE.Sprite_Picture_loadBitmap.call(this);
    SceneManager._scene.bindPictureSprite(this._pictureId, this);
};

Sprite_Picture.prototype.isRelatedPictureCommonEvent = function() {
    if (Yanfly.PCE.Trigger[this._pictureId]) return true;
    if (Yanfly.PCE.Repeated[this._pictureId]) return true;
    if (Yanfly.PCE.Pressed[this._pictureId]) return true;
    if (Yanfly.PCE.Released[this._pictureId]) return true;
    return false;
};

//=============================================================================
// Scene_Base
//=============================================================================

Scene_Base.prototype.bindPictureSprite = function(picture, sprite) {
};

//=============================================================================
// Scene_Map
//=============================================================================

Yanfly.PCE.Scene_Map_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
    this._pictureCommonEvents = [];
    Yanfly.PCE.Scene_Map_createSpriteset.call(this);
    this.addPictureCommonEventChildren();
};

Scene_Map.prototype.addPictureCommonEvent = function(picture) {
    this._pictureCommonEvents.push(picture);
};

Scene_Map.prototype.addPictureCommonEventChildren = function() {
    var length = this._pictureCommonEvents.length;
    for (var i = 0; i < length; ++i) {
      var picture = this._pictureCommonEvents[i];
      this.addChild(picture);
    }
};

Scene_Map.prototype.bindPictureSprite = function(picture, sprite) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    this._pictureCommonEventsBind[picture] = sprite;
};

Scene_Map.prototype.getPictureSprite = function(picture) {
    this._pictureCommonEventsBind = this._pictureCommonEventsBind || {};
    return this._pictureCommonEventsBind[picture.pictureId()];
};

Yanfly.PCE.Scene_Map_processMapTouch = Scene_Map.prototype.processMapTouch;
Scene_Map.prototype.processMapTouch = function() {
    this.updatePictureEvents();
    if (this.allowProcessMapTouch()) {
      Yanfly.PCE.Scene_Map_processMapTouch.call(this);
    }
};

Scene_Map.prototype.allowProcessMapTouch = function() {
    if (SceneManager.isSceneChanging()) return false;
    if ($gameMap.isEventRunning()) return false;
    if ($gameTemp.isCommonEventReserved()) return false;
    return $gameSystem.isTouchMoveEnabled();
};

Scene_Map.prototype.updatePictureEvents = function() {
    if (TouchInput.isTriggered()) {
      this.updatePictureEventCheck(Yanfly.PCE.Trigger);
    }
    if (TouchInput.isRepeated()) {
      this.updatePictureEventCheck(Yanfly.PCE.Repeated);
    }
    if (TouchInput.isPressed()) {
      this.updatePictureEventCheck(Yanfly.PCE.Pressed);
    }
    if (TouchInput.isReleased()) {
      this.updatePictureEventCheck(Yanfly.PCE.Released);
    }
};

Scene_Map.prototype.updatePictureEventCheck = function(check) {
    if (SceneManager.isSceneChanging()) return;
    if ($gameMap.isEventRunning()) return;
    var picture = this.getTriggeredPictureCommonEvent(check);
    if (!picture) return;
    $gameTemp.reserveCommonEvent(check[picture.pictureId()]);
    $gameTemp.clearDestination();
};

Scene_Map.prototype.getTriggeredPictureCommonEvent = function(check) {
    var length = check.length;
    var lastpicture = null;
    for (var i = 1; i < length; ++i) {
      var picture = $gameScreen.picture(i);
      if (!check[i]) continue;
      if (!picture) continue;
      var rect = picture.getSpriteRect(this.getPictureSprite(picture));
      lastpicture = picture;
      if (picture.isTriggered()) return picture;
    }
    return null;
};

Yanfly.PCE.Scene_Map_isMenuCalled = Scene_Map.prototype.isMenuCalled;
Scene_Map.prototype.isMenuCalled = function() {
    if ($gameSystem.isTouchMoveEnabled()) {
      return Yanfly.PCE.Scene_Map_isMenuCalled.call(this);
    } else {
      return Input.isTriggered('menu');
    }
};

//=============================================================================
// End of File
//=============================================================================
