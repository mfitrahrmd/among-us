import Phaser from "phaser";
import Maps from "../../public/images/Maps.png";
import PlayerRed from "../../public/images/Red.png";
import PlayerPink from "../../public/images/Pink.png";
import PlayerOrange from "../../public/images/Orange.png";
import PlayerGreen from "../../public/images/Green.png";
import PlayerCyan from "../../public/images/Cyan.png";

export default class AmongUsScene extends Phaser.Scene {
  constructor() {
    super("among-us-scene");
    //menginisialisasikan Scene yang dibuat, sehingga dapat dipanggil kembali saat dibutuhkan.
  }

  preload() {
    //memuat semua game assets yang dibutuhkan pada game.
    this.load.image("maps", Maps);
    this.load.image("playerRed", PlayerRed);
    this.load.image("playerPink", PlayerPink);
    this.load.image("playerOrange", PlayerOrange);
    this.load.image("playerGreen", PlayerGreen);
    this.load.image("playerCyan", PlayerCyan);
  }

  create() {
    //Membuat  semua game objek dan rule yang dibutuhkan.
    this.add.image(960, 540, "maps");
    this.add.image(1000, 400, "playerRed");
    this.add.image(350, 280, "playerPink");
    this.add.image(1750, 500, "playerGreen");
    this.add.image(1000, 800, "playerCyan").setScale(0.5);
  }
}
