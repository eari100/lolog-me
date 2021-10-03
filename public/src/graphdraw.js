const offset = new Date().getTimezoneOffset() * 60000;

DrawGraph = function (_begin, _end, _nonce) {
    
    var monhtml = '';
    var endStr = '???';
    var beginStr = '???';

    if(_begin === '???') {
        _begin = new Date(new Date() - offset)
    } else {
        _begin = new Date(_begin);
        beginStr = parseInt(_begin / 1000);
    }

    if(_end === '???') {
        _end = new Date(_begin - 31536000000);
    } else {
        _end = new Date(_end);
        endStr = parseInt(_end / 1000);
    }

    var html = `<g transform="translate(0, 0)">`;

    var ctime = new Date(_end);
    _begin = new Date(_begin - 86400000);
    
    var days = 0;
    var lx = 0;
    var tx = 0;

    while(true) {
        days++;
        var cs = ctime.toISOString().slice(0, 10);
        var day = ctime.getUTCDay();
        
        var ly = day * 20;
        html += `<a style="cursor:pointer;"><rect id="rect-${cs}" class="day" title="???${LANG['game_count']}, ${cs}" width="16" height="16" rx="3" x="${lx}" y="${ly}" style="stroke: #e2e4e7; fill: #ebedf0" data-date=${cs}></rect></a>`


        // Month tag
        if(ctime.getDate() === 15) {
            monhtml += `<text x="${tx + lx + 20}" y="-7" class="month">${LANG['month_' + ctime.getMonth()]}</text>`
        }

        if(ctime <= _begin) {
            if(day == 6) {
                lx--;
                tx += 20;
                html += `</g><g transform="translate(${tx}, 0)">`
            }

            ctime = new Date(ctime - (-86400000));
        } else {
            html += `</g>`;
            break;
        }
    }

    var graphWidth = Math.ceil(days / 7) * 19 + 60;

    var ratio = (graphWidth * 100) / 1067;

    /** Modify View Box width */
    $('#graph-viewbox').attr({
        'viewBox': `0 0 ${graphWidth} 170`,
        'width': `${ratio}%`
    });

    html += monhtml;

    /** Week */
    html += `
        <text text-anchor="start" class="wday wday-point" dx="-10" dy="15">${LANG['sunday']}</text>
        <text text-anchor="start" class="wday wday-simple" dx="-10" dy="35">${LANG['monday']}</text>
        <text text-anchor="start" class="wday" dx="-10" dy="55">${LANG['tuesday']}</text>
        <text text-anchor="start" class="wday wday-simple" dx="-10" dy="75">${LANG['wednesday']}</text>
        <text text-anchor="start" class="wday" dx="-10" dy="95">${LANG['thursday']}</text>
        <text text-anchor="start" class="wday wday-simple" dx="-10" dy="115">${LANG['friday']}</text>
        <text text-anchor="start" class="wday wday-point" dx="-10" dy="135">${LANG['saturday']}</text>`;

    $('#graph-g').html(html);

    // Add onclick event for rect
    $('.day').click(function() {
        $('#user-games-refresh').attr('date', $(this).attr('data-date'));
        Change(false, LANG['game_count']);
    })

    return;
}
