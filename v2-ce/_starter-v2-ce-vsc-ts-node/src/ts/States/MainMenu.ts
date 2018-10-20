export default class MainMenu extends Phaser.State {
	/**
	 * Unique name of the state.
	 */
	public static Name: string = "MainMenu";

	preload() {
		this.load.path = "assets/";
		this.load.image("Phaser-Logo-Small");
	}

	create() {
		console.log((new Date).toISOString() + ' : Entered MainMenu create()');

		this.add.image(this.game.world.centerX, this.game.world.centerY, "Phaser-Logo-Small").anchor.setTo(0.5);
		// Handle user input as needed.
	}
}
