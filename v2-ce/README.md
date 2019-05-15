# Phaser 2 Community Edition (CE)
As of this writing, Phaser Community Edition (CE) is the active branch of Phaser v2. New features and bug fixes are being made to this code, so it's recommended to use this over the last official release of Phaser 2.

## Updating
To upgrade these templates run the necessary steps to upgrade Phaser with npm in the _starter-v2-ce-vsc-ts-node template.

Then copy the six Phaser library files into the _starter-v2-ce-vsc-ts template. The following commands can be run on macOS, in this directory, to copy the files.

```shell
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/build/phaser.js _starter-v2-ce-vsc-ts/lib/phaser.js
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/build/phaser.min.js _starter-v2-ce-vsc-ts/lib/phaser.min.js
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/build/phaser.map _starter-v2-ce-vsc-ts/lib/phaser.map
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/typescript/p2.d.ts _starter-v2-ce-vsc-ts/lib/p2.d.ts
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/typescript/phaser.comments.d.ts _starter-v2-ce-vsc-ts/lib/phaser.comments.d.ts
cp -av _starter-v2-ce-vsc-ts-node/node_modules/phaser-ce/typescript/pixi.comments.d.ts _starter-v2-ce-vsc-ts/lib/pixi.comments.d.ts
```
