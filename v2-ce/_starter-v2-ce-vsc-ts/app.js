var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StarterProject;
(function (StarterProject) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        // Define static/constant variables here, as needed. Reference later by Game.SOME_VARIABLE.
        //static SOME_VARIABLE: number = 10;
        function Game() {
            var _this = this;
            console.log((new Date).toISOString() + ' : Entered Game constructor()');
            // Update the width (800) and height (600) accordingly.
            _this = _super.call(this, 800, 600, Phaser.AUTO, 'content') || this;
            // Add the game states.
            _this.state.add('Boot', StarterProject.Boot);
            _this.state.add('Preloader', StarterProject.Preloader);
            _this.state.add('MainMenu', StarterProject.MainMenu);
            // Start the initial game state.
            _this.state.start('Boot');
            return _this;
        }
        return Game;
    }(Phaser.Game));
    StarterProject.Game = Game;
})(StarterProject || (StarterProject = {}));
window.onload = function () {
    var game = new StarterProject.Game();
};
var StarterProject;
(function (StarterProject) {
    var ExampleButton = /** @class */ (function (_super) {
        __extends(ExampleButton, _super);
        function ExampleButton(game, x, y, key, callback, callbackContext) {
            return _super.call(this, game, x, y, key, callback, callbackContext) || this;
        }
        return ExampleButton;
    }(Phaser.Button));
    StarterProject.ExampleButton = ExampleButton;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var ExampleImage = /** @class */ (function (_super) {
        __extends(ExampleImage, _super);
        function ExampleImage(game, x, y, key) {
            return _super.call(this, game, x, y, key) || this;
        }
        return ExampleImage;
    }(Phaser.Image));
    StarterProject.ExampleImage = ExampleImage;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var ExampleSprite = /** @class */ (function (_super) {
        __extends(ExampleSprite, _super);
        function ExampleSprite(game, x, y, key) {
            var _this = _super.call(this, game, x, y, key) || this;
            // Use the center of the sprite for positioning.
            _this.anchor.setTo(0.5);
            return _this;
            // Uncomment to add this to the game immediately.
            //game.add.existing(this);
        }
        return ExampleSprite;
    }(Phaser.Sprite));
    StarterProject.ExampleSprite = ExampleSprite;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var ExampleState = /** @class */ (function (_super) {
        __extends(ExampleState, _super);
        function ExampleState() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ExampleState.prototype.init = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState init()');
            // init can receive parameters.
        };
        ExampleState.prototype.preload = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState preload()');
            // Recommendation is to limit calls to the Phaser Loader only. (Interphase 1, pg 29)
        };
        ExampleState.prototype.loadUpdate = function () {
            // Called while assets are being loaded.
        };
        ExampleState.prototype.create = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState create()');
        };
        ExampleState.prototype.update = function () {
        };
        ExampleState.prototype.paused = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState paused()');
        };
        ExampleState.prototype.pauseUpdate = function () {
        };
        ExampleState.prototype.resumed = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState resumed()');
        };
        ExampleState.prototype.shutdown = function () {
            console.log((new Date).toISOString() + ' : Entered ExampleState shutdown()');
        };
        return ExampleState;
    }(Phaser.State));
    StarterProject.ExampleState = ExampleState;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var Boot = /** @class */ (function (_super) {
        __extends(Boot, _super);
        function Boot() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Boot.prototype.init = function () {
            console.log((new Date).toISOString() + ' : Entered Boot init()');
            // If you want to scale the game, you can set that here.
            // Uncomment to show all content in the view.
            //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            // If we put our game in a div, we need to add the following as well, if you SHOW_ALL.
            //this.game.scale.windowConstraints.bottom = 'visual';
            // Uncomment to place our game in the center of the screen both horizontally and vertically.
            //this.scale.pageAlignHorizontally = true;
            //this.scale.pageAlignVertically = true;
        };
        Boot.prototype.preload = function () {
            console.log((new Date).toISOString() + ' : Entered Boot preload()');
            // If your preload state will display a progress bar, you should load the image here.
        };
        Boot.prototype.create = function () {
            console.log((new Date).toISOString() + ' : Entered Boot create()');
            // Disable multitouch. It's recommended by the creators to set this unless your game needs multitouch.
            this.input.maxPointers = 1;
            // If you want the game to continue running when the browser tab loses focus, uncomment the following.
            //this.stage.disableVisibilityChange = true;
            // At this point you could set device-specific settings.
            if (this.game.device.desktop) {
                // Desktop-specific settings would be placed here.
            }
            // If your game uses a physics system, you can start that here.
            //this.game.physics.startSystem(Phaser.Physics.ARCADE);
            // Load the next state, which will be preloading the assets for the game.
            this.game.state.start('Preloader', true, false);
        };
        return Boot;
    }(Phaser.State));
    StarterProject.Boot = Boot;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var MainMenu = /** @class */ (function (_super) {
        __extends(MainMenu, _super);
        function MainMenu() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMenu.prototype.create = function () {
            console.log((new Date).toISOString() + ' : Entered MainMenu create()');
            // Handle user input as needed.
        };
        return MainMenu;
    }(Phaser.State));
    StarterProject.MainMenu = MainMenu;
})(StarterProject || (StarterProject = {}));
var StarterProject;
(function (StarterProject) {
    var Preloader = /** @class */ (function (_super) {
        __extends(Preloader, _super);
        function Preloader() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Preloader.prototype.preload = function () {
            console.log((new Date).toISOString() + ' : Entered Preloader preload()');
            // If your game uses a graphic while assets are loaded, you would create the sprite and then display it via the below.
            //this.load.setPreloadSprite(this.preloadSprite);
            // Load the actual assets. By default the path will be set to the assets directory.
            this.load.path = 'assets/';
            // Assets loaded here can include image and audio files, as well as sprite sheets and more.
        };
        Preloader.prototype.create = function () {
            console.log((new Date).toISOString() + ' : Entered Preloader create()');
            // Once the assets have been preloaded you can move to the next state.
            this.game.state.start('MainMenu', true, false);
        };
        return Preloader;
    }(Phaser.State));
    StarterProject.Preloader = Preloader;
})(StarterProject || (StarterProject = {}));
