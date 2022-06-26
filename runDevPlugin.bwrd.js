/*
    @name Run Dev Plugin
    @version 1.0.0
    @description Runs your local development server plugin.
    @author david77
    @source https://raw.githubusercontent.com/davve77/bwrd-plugin-dev-server/main/runDevPlugin.bwrd.js
*/

// https://github.com/davve77/bwrd-plugin-dev-server

(async function runDevPlugin(){
    let script = document.createElement('script')

    script.setAttribute('name', 'Local Server Plugin')
    script.setAttribute('version', '1.0.0')
    script.setAttribute('source', 'none')
    script.setAttribute('type', 'application/javascript')
    script.setAttribute('crossorigin', 'anonymous')

    if(window.LoadedPlugins) window.LoadedPlugins.push('Local Server Plugin')
    
    script.src = 'http://127.0.0.1:9096/plugin.bwrd.js'
    document.head.appendChild(script)
})()
