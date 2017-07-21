'use strict';

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
    animation = 'swing';

$('.icon').on('mouseenter', function (e) {
      return $(e.target).addClass('animated ' + animation);
}).on(animationEnd, function (e) {
      return $(e.target).removeClass('animated ' + animation);
});