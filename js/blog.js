function initSticky() {
  // Sticky Plugin v1.0.0 for jQuery
	// =============
	// Author: Anthony Garand
	// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
	// Improvements by Leonardo C. Daronco (daronco)
	// Created: 2/14/2011
	// Date: 2/12/2012
	// Website: http://labs.anthonygarand.com/sticky
	// Description: Makes an element on the page stick on the screen as you scroll
	//       It will only set the 'top' and 'position' of your element, you
	//       might need to adjust the width in some cases.

	(function($) {
	  var defaults = {
	      topSpacing: 0,
	      bottomSpacing: 0,
	      className: 'is-sticky',
	      wrapperClassName: 'sticky-wrapper',
	      center: false,
	      getWidthFrom: '',
	      responsiveWidth: false
	    },
	    $window = $(window),
	    $document = $(document),
	    sticked = [],
	    windowHeight = $window.height(),
	    scroller = function() {
	      var scrollTop = $window.scrollTop(),
	        documentHeight = $document.height(),
	        dwh = documentHeight - windowHeight,
	        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

	      for (var i = 0; i < sticked.length; i++) {
	        var s = sticked[i],
	          elementTop = s.stickyWrapper.offset().top,
	          etse = elementTop - s.topSpacing - extra;

	        if (scrollTop <= etse) {
	          if (s.currentTop !== null) {
	            s.stickyElement
	              .css('position', '')
	              .css('top', '');
	            s.stickyElement.trigger('sticky-end', [s]).parent().removeClass(s.className);
	            s.currentTop = null;
	          }
	        }
	        else {
	          var newTop = documentHeight - s.stickyElement.outerHeight()
	            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
	          if (newTop < 0) {
	            newTop = newTop + s.topSpacing;
	          } else {
	            newTop = s.topSpacing;
	          }
	          if (s.currentTop != newTop) {
	            s.stickyElement
	              .css('position', 'fixed')
	              .css('top', newTop);

	            if (typeof s.getWidthFrom !== 'undefined') {
	              s.stickyElement.css('width', $(s.getWidthFrom).width());
	            }

	            s.stickyElement.trigger('sticky-start', [s]).parent().addClass(s.className);
	            s.currentTop = newTop;
	          }
	        }
	      }
	    },
	    resizer = function() {
	      windowHeight = $window.height();

	      for (var i = 0; i < sticked.length; i++) {
	        var s = sticked[i];
	        if (typeof s.getWidthFrom !== 'undefined' && s.responsiveWidth === true) {
	          s.stickyElement.css('width', $(s.getWidthFrom).width());
	        }
	      }
	    },
	    methods = {
	      init: function(options) {
	        var o = $.extend({}, defaults, options);
	        return this.each(function() {
	          var stickyElement = $(this);

	          var stickyId = stickyElement.attr('id');
	          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName 
	          var wrapper = $('<div></div>')
	            .attr('id', stickyId + '-sticky-wrapper')
	            .addClass(o.wrapperClassName);
	          stickyElement.wrapAll(wrapper);

	          if (o.center) {
	            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
	          }

	          if (stickyElement.css("float") == "right") {
	            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
	          }

	          var stickyWrapper = stickyElement.parent();
	          stickyWrapper.css('height', stickyElement.outerHeight());
	          sticked.push({
	            topSpacing: o.topSpacing,
	            bottomSpacing: o.bottomSpacing,
	            stickyElement: stickyElement,
	            currentTop: null,
	            stickyWrapper: stickyWrapper,
	            className: o.className,
	            getWidthFrom: o.getWidthFrom,
	            responsiveWidth: o.responsiveWidth
	          });
	        });
	      },
	      update: scroller,
	      unstick: function(options) {
	        return this.each(function() {
	          var unstickyElement = $(this);

	          var removeIdx = -1;
	          for (var i = 0; i < sticked.length; i++)
	          {
	            if (sticked[i].stickyElement.get(0) == unstickyElement.get(0))
	            {
	                removeIdx = i;
	            }
	          }
	          if(removeIdx != -1)
	          {
	            sticked.splice(removeIdx,1);
	            unstickyElement.unwrap();
	            unstickyElement.removeAttr('style');
	          }
	        });
	      }
	    };

	  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
	  if (window.addEventListener) {
	    window.addEventListener('scroll', scroller, false);
	    window.addEventListener('resize', resizer, false);
	  } else if (window.attachEvent) {
	    window.attachEvent('onscroll', scroller);
	    window.attachEvent('onresize', resizer);
	  }

	  $.fn.sticky = function(method) {
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error('Method ' + method + ' does not exist on jQuery.sticky');
	    }
	  };

	  $.fn.unstick = function(method) {
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof method === 'object' || !method ) {
	      return methods.unstick.apply( this, arguments );
	    } else {
	      $.error('Method ' + method + ' does not exist on jQuery.sticky');
	    }

	  };
	  $(function() {
	    setTimeout(scroller, 0);
	  });
	})(jQuery);
};

/*
 * 3rd party library end
 */

var ST_CURRENT_USER = "curusr",
	isUser = false;

function _showHeaderIcon() {
	$('#header-icons').removeClass('hide');
}

function _updateLoginUser(response) {
	var user = $('.t-user'),
		userId = response['id'],
		userName = response['name'],
		userImg = response['image'],
		iconColor = response['iconColor'];

	isUser = true;

	// update for icon and its dropdown
	user.find('.dropdown-header').text(userName);
	user.find('.user-icon-wrapper').append(
		userImg != '' ? 
			$('<img class="img-icon x30 circle" src="' + userImg + '" alt="' + userName + '">') : 
			$('<div class="img-icon x30 circle iconc-' + iconColor +'">' + userName + '</div>')
	).attr('href', '/u/' + userId + '#');
	user.find('.fa-user').parent().attr('href', '/u/' + userId);

	// remove stuff for non-user
	$('li.start-free, li.login').remove();

	$('#home').attr('href', '/w');

	user.removeClass('hide');
	_showHeaderIcon();
}

function _updateNonLoginUser() {
	// remove stuff for user
	$('#header-wrapper').addClass('qr-collapse-navbar');
	$('li.invite, li.feedback, li.t-user').remove();
	$('#home').attr('href', '/');
	_showHeaderIcon();
}

var isSticky = false;
function updateSticky() {
	var width = window.innerWidth;
	if (width < 1180) {
		if (isSticky) {
			isSticky = false;
			$("div.share").unstick();
		}
	} else {
		if (!isSticky) {
			isSticky = true;
			$("div.share").sticky({topSpacing:75});
		}
	}
}

function init() {
	// init menu toggle
	$('#side-menu-toggle').click(function() {
		$('#wrap').toggleClass('menu-open');
	});

	// init share button if existing
	if ($('#post').length) {

		initSticky();

		$(window).resize(function() {
			updateSticky();
		});
	}

	// init header toggle
	var menu = $("#header .navbar-collapse");// mobile menu
	$("#menu-toggle").click(function() {
		var isOpen = menu.hasClass('in');
		menu[isOpen ? 'removeClass': 'addClass']('in');
		$(this)[isOpen ? 'removeClass': 'addClass']('open');
	});

	var scrollCount = 0,
		enabledThreshold = 750,
		isHightlight  = false,
		$header = $('header'),
		mousewheelevt = browser.firefox ? "DOMMouseScroll" : "mousewheel";
	$('body').bind(mousewheelevt, function(e){

	    var evt = window.event || e //equalize event object     
	    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
	    var delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF

	    if (delta > 0) {
	        scrollCount += delta;
	        if (!isHightlight && scrollCount > enabledThreshold) {
	        	isHightlight = true;
	        	$header.addClass('hightlight-signup');
	        }
	    } else{
	        scrollCount = 0;
	        if (isHightlight) {
	        	isHightlight = false;
	        	$header.removeClass('hightlight-signup');
	        }
	    }
	});

	// update twitter link for markdown's twitter button
	$('.fa-twitter').attr('href', $('.share > .twitter').attr('href'));
}

function startBlog() {
	if (!('browser' in window)) {
		setTimeout(startBlog, 15);
		return;
	}

	try {
		sendQS([ST_CURRENT_USER, null], function(response) {
			if (response && (typeof response) !== 'string')
				_updateLoginUser(response);
			else
				_updateNonLoginUser();
		});
	} catch (e) {
		_updateNonLoginUser();
		_showHeaderIcon();
	}

	init();
}

(function() {
	startBlog();
}());