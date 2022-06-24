# BetterWRD Plugin Dev Server

#### Makes Plugin development easier just by using a local server.
<img src="https://cdn.discordapp.com/attachments/800294579856605204/989842255575654501/unknown.png" width="1520"/>

&nbsp;

## Prerequisites
- VSCode or any other code editor.
- Node.js. Get the latest version [here](https://nodejs.org/en/download/).

&nbsp;

## Getting started
### Installing the required plugin
1. Go to your BetterWRD Plugins
2. Click 'Load from GitHub'
3. Paste `https://raw.githubusercontent.com/davve77/bwrd-plugin-dev-server/main/runDevPlugin.bwrd.js`
4. Click 'Load Plugin'
5. Enable the plugin
### Downloading the repository
1. Download it [here](https://github.com/davve77/bwrd-plugin-dev-server/archive/refs/heads/main.zip)
2. Extract the archive
3. Open `plugin-dev-server` folder in your code editor
### Starting the local server
1. Open a terminal
2. Run `npm start` to start the server
3. You can now edit `plugin.bwrd.js`

&nbsp;

## How does this work
This uses the `Run Dev Plugin` to run your local server plugin at `http://127.0.0.1:9096/plugin.bwrd.js`.  
You need Node.js to start the server and preferably a code editor to edit `plugin.bwrd.js`.
