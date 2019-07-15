$(document).ready(function () {
    var codeKata = (function () {
        const codeEditor = '#codeEditor';
        const toggleEditor = '#toggleCodeEditor';

        $(toggleEditor).click(function () {
            $(codeEditor).toggleClass('expand');
        });
        
    })();
});