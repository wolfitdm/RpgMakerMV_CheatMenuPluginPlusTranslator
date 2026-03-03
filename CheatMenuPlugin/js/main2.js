//=============================================================================
// main.js
//=============================================================================

window.onload = function() {
    $plugins.push({"name":"Cheat_Menu","status":true,"description":"","parameters":{}});
    PluginManager.loadScript('../../cheat/init/import.js');
    PluginManager.setup($plugins);
    //SceneManager.run(Scene_Boot);
};
