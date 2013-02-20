/**
 *  Stickynav - Easy to use implmentation of a sticky navigation, which follows the scroll position
 *  Author  : Byron Adams <byron.adams54@gmail.com>
 *  License : MIT License
 */

 (function (window, $) {

 	var defaults = {
 		offset_top : 35,
 	};

	$.fn.stickyNav = function (options) {

		options = $.extend(defaults, options)

		return this.each(function () {
			var el = $(this);

			el.data('original_offsets', el.offset());

			// Position it intiatally, incase the page loaded already scrolled.
			$.position_sticky(el, options);

			$(window).scroll(function () {
				$.position_sticky(el, options);
			});
		});
	};

	$.position_sticky = function (el, options) {
		var scroll_pos = $(document).scrollTop(),
			original_offsets = el.data('original_offsets');

		if (scroll_pos > original_offsets.top && 'fixed' !== el.css('position')) {
			var sticky_offsets = el.offset();
			el.css({
				'position' : 'fixed',
				'left' : sticky_offsets.left,
				'top' : options.offset_top
			});
		}

		if (scroll_pos < original_offsets.top && 'fixed' == el.css('position')) {
			el.css({
				'position' : 'relative',
				'left' : 'auto',
				'top' : 'auto'
			});
		}
	};	

})(window, jQuery);
