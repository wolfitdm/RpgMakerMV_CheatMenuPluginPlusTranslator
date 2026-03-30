//=============================================================================
// main2.js
//=============================================================================

/*window.onload = function() {
    $plugins.push({"name":"Cheat_Menu","status":true,"description":"","parameters":{}});
    PluginManager.loadScript('../../cheat/init/import.js');
    PluginManager.setup($plugins);
    SceneManager.run(Scene_Boot);
};*/

function loadPlugin(pluginName, path) {
    try {
        var script = document.createElement('script');
        script.src = path + "plugins/" + pluginName + ".js";
        document.body.appendChild(script);
    } catch (error_ex) {
    } 
}

window.addEventListener("load", function() {
    PluginManager.loadScript('../../cheat/init/import.js');
    loadPlugin('Cheat_Menu', "js/");
});