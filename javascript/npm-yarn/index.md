Yarn

Advantages
- Supports parallel installation and Zero installs, both of which dramatically increase performance.
- Newer versions of Yarn offer a more secure form of version locking.
- Active user community.

Disadvantages
- Yarn doesn't work with Node.js versions older than version 5.
- Yarn has shown problems when trying to install native modules.


NPM

Advantages
- Easy to use, especially for developers used to the workflow of older versions.
- Local package installation is optimized to save hard drive space.
- The simple UI helps reduce development time.

Disadvantages
- The online NPM registry can become unreliable in case of performance issues. This also means that NPM requires network access to install packages from the registry.
- Despite a series of improvements across different versions, there are still security vulnerabilities when installing packages.
- Command output can be difficult to read.

Features: 
- Plug'n'Play: Instead of using the node_modules folder, Yarn generates a single .pnp.cjs file that maps project dependencies. This allows for more optimized dependency trees and faster project startup and package installation.
- Zero installs: This feature ties in with Plug'n'Play, using the .pnp.cjs file to map packages stored in the offline cache. This allows you to access and install stored packages with almost no delay.
- License check: Yarn features a built-in license checker when downloading and installing packages.