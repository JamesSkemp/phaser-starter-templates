# Phaser Starter Templates
This repository includes a number of starter templates for [Phaser][phaser] game framework, and was originally part of my [Phaser Tutorials collection](https://github.com/JamesSkemp/PhaserTutorials).

## Templates
All templates use [Visual Studio Code][vs-code], but do not require that it be used. However, Visual Studio Code is a great, free, cross-platform application, and is highly recommended.

[TypeScript][typescript] is used, and required, for all templates. Some templates use [Node.js][node-js] and [Webpack][webpack].

To use one of these templates you can download a copy of, or clone, this repository, and then copy the directory containing the template you want to get started with.

See each individual project for specific requirements and setup instructions.

### Which Version Should I Use?
If you're not sure what version to use, I would recommend starting with Phaser 3.

While not as stable or mature as Phaser 2.x, and there aren't as many tutorials *yet* (but it is getting there), Phaser 3 is where the future is at.

If you're new to JavaScript and/or game development, using Phaser Community Edition is also an option. Phaser 2 tutorials will generally work fine, requiring minor changes, if any.

### Phaser 3
Phaser 3 (previously named Lazer) is the latest official version of Phaser.

These starter templates are setup in GitHub as templates that can be used to easily create new projects.

- [Starter Project for Phaser with Visual Studio Code, TypeScript, and Node.js](https://github.com/JamesSkemp/phaser-3-vsc-typescript-nodejs): Recommended for new development, uses Node.js for pulling Phaser 3, and Webpack for compilation.

### Phaser Community Edition (CE)
As of this writing, Phaser Community Edition (CE) is the active branch of Phaser v2. New features and bug fixes are being made to this code, so it's recommended to use this over the last official release of Phaser 2.

- [Starter Project for Phaser CE with Visual Studio Code, TypeScript, and Node.js](./v2-ce/_starter-v2-ce-vsc-ts-node): Uses Node.js for pulling Phaser CE, and Webpack for compilation.
- [Starter Project for Phaser CE with Visual Studio Code and TypeScript](./v2-ce/_starter-v2-ce-vsc-ts): The same as the above project, but Phaser CE must be manually updated by grabbing the code from the [Phaser site][phaser]. Use this if you don't want the Node.js dependency.

### Phaser 2.6.2
Version 2.6.2 was the last official/non-community edition of Phaser. While this version can be used, it is no longer actively supported.

- [Starter Project for Phaser with Visual Studio Code and TypeScript](./v2-official/_starter-v2-vsc-ts): Uses the last official release of Phaser 2.

## Phaser Logo Usage
The Phaser logo (Phaser-Logo-Small.png) is a trademark of Photon Storm, and is meant to be used in a manner consistent with their [usage guidelines](https://phaser.io/download/trademark).

[phaser]: https://phaser.io/
[vs-code]: https://code.visualstudio.com/
[typescript]: https://www.typescriptlang.org/
[node-js]: https://nodejs.org/en/
[webpack]: https://webpack.js.org/
