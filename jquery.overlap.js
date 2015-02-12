/*
 * jQuery Overlap Plugin 0.1
 * https://github.com/leandrobrunner/jQuery-Overlap
 *
 * Copyright (c), Leandro Brunner
 * leandrobrunner@yahoo.com.ar
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function($) {
    $.fn.overlap = function(args) {
        args = $.extend({
            rect: {x:0, y:0, w:0, h:0},
            mark: false,
            unmark: true,
            filterMark: function(index) {return true},
            filterUnmark: function(index) {return true},
            callback: function($elements) {},
            w: function(element) {return element.outerWidth(true)},
            h: function(element) {return element.outerHeight(true)},
            bring: true 
        }, args);
        Object.prototype.overlap = function(rect) {
            return(
                (rect.x <= this.x + this.w && rect.x + rect.w >= this.x) && 
                (rect.y <= this.y + this.h && rect.y + rect.h >= this.y)
            );
        };
        var $selects = this.filter(function(index) {
            var pos = $(this).position();
            if(
                args.rect.overlap({
                    x: pos.left,
                    y: pos.top,
                    w: args.w($(this)),
                    h: args.h($(this))
                })
            ) {
                return true;
            }
        });
        if(typeof(args.mark) == "string") {
            if(args.unmark) {
                this.filter(args.filterUnmark).removeClass(args.mark);
            }
            $selects.filter(args.filterMark).addClass(args.mark);
            args.callback($selects);
        }
        if(args.bring) {
            return($selects);
        } else {
            return(this);
        }
    };
}(jQuery)); 
