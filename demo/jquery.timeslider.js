/*************************************************************************
jquery.timeslider.js
Loads a series of sliders for hours, minutes and seconds below. when an applied to an input, then displays the time.

Copyright (c) 2012, Christopher Chestnut (http://kamui.co.uk)
Dual licensed under the MIT or GPL Version 2 licenses.
http://code.google.com/p/timeslider/wiki/LicenseInfo

A current version and some documentation is available at
http://timeslider.googlecode.com/

$Version: 1.1
$Revision: 2, 2012-01-30 08:25:00$

@depends: jquery.js
@depends: jquery.ui.core.js
*************************************************************************/
(function ($) {
    $.fn.timeslider = function (options) {
        var defaults = {
            showhours: true,
            showseconds: true,
            top: 0,
            left: 0,
            width: 0,
            zIndex: 4,
            hourmax: 24,
            minmax: 60,
            secmax: 60
        };
        function resetposition(inputobject) {
            options.top = ($(inputobject)[0].offsetTop + 25);
            options.left = ($(inputobject)[0].offsetLeft);
            options.width = ($(inputobject)[0].offsetWidth - 20);
        }
        var options = $.extend(defaults, options);
        function triggerClick(inputobject) {
            $('#uiTimerSlider').remove(); $('.transdiv').remove();
            resetposition(inputobject);

            $(inputobject).parent().append($('<div id="uiTimerSlider" style="position:absolute;top:' + options.top + 'px;left:' + options.left + 'px;width:' + options.width + 'px;z-index:' + options.zIndex + ';">' +
                                (options.showhours ? '<div class="uiSliderTitle">Hours</div><div id="uiHoursSlider"></div>' : '') +
                                '<div class="uiSliderTitle">Minutes</div><div id="uiMinutesSlider"></div>' +
                                (options.showseconds ? '<div class="uiSliderTitle">Seconds</div><div id="uiSecondsSlider"></div>' : '')));
            $('body').append('<div class="transdiv" style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:' + (options.zIndex - 1) + ';"></div>');
            $('.transdiv').click(function () { $('#uiTimerSlider').remove(); $('.transdiv').remove(); });
            var sethours = function () {
                var hoursval = (options.showhours ? $("#uiHoursSlider").slider("value").toString() : '00');
                var minval = $("#uiMinutesSlider").slider("value").toString();
                var secval = (options.showseconds ? $("#uiSecondsSlider").slider("value").toString() : '00');
                if (hoursval.length == 1) { hoursval = '0' + hoursval; }
                if (minval.length == 1) { minval = '0' + minval; }
                if (secval.length == 1) { secval = '0' + secval; }
                $(inputobject).val(hoursval + ":" + minval + ":" + secval);
            };
            var hours = 0;
            var min = 0;
            var sec = 0;
            if ($(inputobject).val() != undefined && $(inputobject).val() != "") {
                var slitstr = $(inputobject).val().split(':');
                if (!isNaN(parseInt(slitstr[0]))) {
                    hours = parseInt(slitstr[0]);
                }
                if (!isNaN(parseInt(slitstr[1]))) {
                    min = parseInt(slitstr[1]);
                }
                if (!isNaN(parseInt(slitstr[2]))) {
                    sec = parseInt(slitstr[2]);
                }
            }
            $("#uiHoursSlider").slider({
                orientation: "horizontal",
                range: "min",
                max: options.hourmax,
                value: hours,
                slide: sethours,
                change: sethours
            });
            $("#uiMinutesSlider").slider({
                orientation: "horizontal",
                range: "min",
                max: options.minmax,
                value: min,
                slide: sethours,
                change: sethours
            });
            $("#uiSecondsSlider").slider({
                orientation: "horizontal",
                range: "min",
                max: options.secmax,
                value: sec,
                slide: sethours,
                change: sethours
            });
        }
        
        $(this).click(
            function () {
                triggerClick(this);
            }
        );
    };
})(jQuery);
