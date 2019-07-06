const fs = require('fs-extra')
const api = require('./api/core.js')
const EventEmitter = require('events');
const ExtensionManager = require('./lib/extensionmanager')

module.exports = class TwitchCord extends EventEmitter {
    constructor() {
        super()
        this.manager = new ExtensionManager(__dirname + '/../extensions/')
    }

    enable() {
        //var appmount = document.getElementById('app-mount')
        
        this.manager.loadAll()
        this.manager.enableAll()
		//api.injectCSS('tcmain', fs.readFileSync(__dirname + "/../extensions/core/twitchcord/twitchcord.css"))
    }
}