
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var CountDown = window.CountDown || {};
    CountDown = (function() {
        function CountDown(element, settings) {
			var _ = this, dataSettings;
            _.defaults = {
				 custom_date:'1970/1/1 8:0:0',
				 cd_type:1
            };
			
			_.$sys_second = 0;
			_.$cd_day = 0;
			_.$cd_hour = 0;
			_.$cd_minute = 0;
			_.$cd_second = 0;
			_.$cd_endtime = 0;
			_.$cd_items = null;

			_.options = $.extend({}, _.defaults, settings);
			_.autoPlay(element);

        }

        return CountDown;

    }());

   
	CountDown.prototype.autoPlay = function(element) {
		

        var _ = this;
		_.$cd_items=$(element).find('span');
		_.$cd_endtime = new Date(_.options.custom_date).getTime();

		if(_.options.cd_type){
			_.$sys_second = (_.$cd_endtime-new Date().getTime())/1000;
		}else{
			var date=new Date();
			var cur_date=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate();
			
			_.$sys_second = ((new Date(cur_date).getTime()+24*60*60*1000)-new Date().getTime())/1000;
		}

		var timer = setInterval(function(){
			if (_.$sys_second > 1) {
				_.$sys_second -= 1;
				_.$cd_day = Math.floor((_.$sys_second / 3600) / 24);
				_.$cd_hour = Math.floor((_.$sys_second / 3600) % 24);
				_.$cd_minute = Math.floor((_.$sys_second / 60) % 60);
				_.$cd_second = Math.floor(_.$sys_second % 60);
				_.$cd_hour=_.$cd_hour<10?"0"+_.$cd_hour:_.$cd_hour;
				_.$cd_minute=_.$cd_minute<10?"0"+_.$cd_minute:_.$cd_minute;
				
				var string2 = String(_.$cd_hour)+_.$cd_minute;
				var arr = string2.split('')
				
				
				$(_.$cd_items[0]).text(arr[0]);
				$(_.$cd_items[1]).text(arr[1]);
				$(_.$cd_items[2]).text(arr[2]);
				$(_.$cd_items[3]).text(arr[3]);
				
				
				
			} else { 
				clearInterval(timer);
			}
		}, 1000);
		
    };


    $.fn.countDown = function() {
		
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
		
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined'){

                _[i].countDown = new CountDown(_[i], opt);

            }else
                ret = _[i].countDown[opt].apply(_[i].countDown, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
