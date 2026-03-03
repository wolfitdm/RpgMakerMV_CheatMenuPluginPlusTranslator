//=============================================================================
// main.js
//=============================================================================
$plugins.push({"name":"Cheat_Menu","status":true,"description":"","parameters":{}});
PluginManager.loadScript('../../cheat/init/import.js');
PluginManager.setup($plugins);

window.onload = function() {
    //SceneManager.run(Scene_Boot);
};
