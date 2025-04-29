/**
 * jQuery.animateColors
 * Extension to animate CSS colors using jQuery
 */
(function($) {
    var colors = {
        aqua: [0, 255, 255],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        fuchsia: [255, 0, 255],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        lime: [0, 255, 0],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        purple: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        teal: [0, 128, 128],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    };

    function getRGB(color) {
        if (color && color.constructor == Array && color.length == 3)
            return color;
        if (colors[color.toLowerCase()])
            return colors[color.toLowerCase()];
        if (color.charAt(0) == '#') {
            if (color.length == 7)
                return [parseInt(color.substr(1, 2), 16),
                        parseInt(color.substr(3, 2), 16),
                        parseInt(color.substr(5, 2), 16)];
            else if (color.length == 4)
                return [parseInt(color.substr(1, 1) + color.substr(1, 1), 16),
                        parseInt(color.substr(2, 1) + color.substr(2, 1), 16),
                        parseInt(color.substr(3, 1) + color.substr(3, 1), 16)];
        }
        return colors.white;
    }

    $.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i, attr) {
        $.fx.step[attr] = function(fx) {
            if (fx.state == 0) {
                fx.start = getRGB($(fx.elem).css(attr));
                fx.end = getRGB(fx.end);
            }
            fx.elem.style[attr] = 'rgb(' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0) + ',' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0) + ',' +
                Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0) + ')';
        };
    });
})(jQuery);