// Define all functionalities
var sidebar = '../assets/js/common/sidebar.js';

$(document).ready(function () {
    // load all dependencies
    $.getScript(sidebar, function () {

        // execute SideBar functionality
        sidebar.init();

    });
});