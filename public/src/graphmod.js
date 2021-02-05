const TYPES = ['solo', 'flex', 'norm', 'aram', 'urf', 'ai'];
const ETC = ['ofa', 'nbg', 'tut', 'clash', 'etc'];

Change = function (_init, __game_count) {
    // Get date
    var date = $('#user-games-refresh').attr('date');
    // Get types
    var types = [];

    /** Type Check */
    const $typecheck = $('#type-check');
    for(var elem of TYPES) {
        if($typecheck.find('#'+elem).prop('checked')) {
            types.push(elem);
        }
    }

    /** Add etc */
    if($typecheck.find('#etc').prop('checked')) {
        for (var elem of ETC) {
            types.push(elem);
        }
    }

    /** Clear Logs */
    $(`a.user-games-game`).css('display', 'none');

    /** Display Logs */
    if(date === 'all') {
        for (var elem of types) {
            $(`a.user-games-game[gametype='${elem}']`).css('display', 'inline-block');
        }
    } else {
        for (var elem of types) {
            $(`a.log-${date}[gametype='${elem}']`).css('display', 'inline-block');
        }
    }
    

    var totalplay = 0;
    var dateplay = 0;
    var start = 0;
    var end = 0;
    $('rect.day').each(function (i, elem) {
        var play = 0;
        var cdate = $(elem).attr('data-date');

        if ($(elem).attr('data-count-total')) {
            for(type of types) {
                var attrname = 'data-count-' + type;
                play += Number($(elem).attr(attrname));
            }
            
            if(cdate === date) {
                dateplay = play;
            }
            totalplay += play;
            if(play !== 0) {
                if(start === 0) {
                    start = cdate;
                }
                end = cdate;
            }
        }
        
        var color;
        var stroke = 'none';
        // Set Color
        switch (play) {
            case 0:
                color = '#ebedf0';
                stroke = '#e2e4e7'
                break;
            case 1:
                color = '#9be9a8';
                break;
            case 2:
            case 3:
                color = '#6dd686';
                break;
            case 4:
            case 5:
                color = '#40c463';
                break;
            case 6:
                
            
            case 7:
            case 8:
                color = '#38b259';
                break;
            case 9:
                
            case 10:
            case 11:
                color = '#30a14e';
                break;
            case 12:
            case 13:
            case 14:
                color = '#216e39';
                break;
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
                color = '#e99b9b';
                break;
            case 20:
            case 21:
            case 22:
            case 23:
            case 24:
                color = '#c44040';
                break;
            case 25:
            case 26:
            case 27:
            case 28:
            case 29:
                color = '#a13030';
                break;
            default:
                color = '#6e2121';
                break;
        }

        $(elem).css({ 'stroke': stroke, 'fill': color });
        if(_init) {
            $(elem).attr('title', `${play}${__game_count}, ${cdate}`);
        } else {
            $(elem).tooltipster('content', `${play}${__game_count}, ${cdate}`);
        }
    });
    $('#username-total').text(`${totalplay}${__game_count} `);
    $('#username-period').text(`(${start}~${end})`);

    if(date === 'all') {
        $('#user-games-number').text(` ${totalplay}${__game_count}`);
        $('#user-games-period').text(` (${start}~${end})`);
        $('#user-games-refresh').css('display', 'none');
    } else {
        $('#user-games-refresh').css('display', 'inline');
        $('#user-games-number').text(`${dateplay}${__game_count}`);
        $('#user-games-period').text(` (${date})`);
    }
}