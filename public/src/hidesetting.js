function HideSetting() {
    $('#type-check').css('display', 'none');
    $('#period').css('display', 'none');
    $('#user-graph-header .fa-caret-up').css('display', 'none');
    $('#user-graph-header .fa-caret-down').css('display', 'inline');
}

function ShowSetting() {
    $('#type-check').css('display', 'grid');
    $('#period').css('display', 'block');
    $('#user-graph-header .fa-caret-up').css('display', 'inline');
    $('#user-graph-header .fa-caret-down').css('display', 'none');
}