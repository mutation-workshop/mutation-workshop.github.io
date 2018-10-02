(function(a){var c=function(){},e={startIndex:0,debug:false,autoplay:true,transition:"fade",queue:false,transitionDuration:300,displayDuration:5e3,displayNum:1,prev:false,next:false,navButtons:false,toggle:false,play:false,pause:false,onPlay:c,onPause:c,onChange:c,onTransitionStart:c,onTransitionEnd:c},b=c,d=function(c,b){var a=c%b;return a<0?a+b:a};a.fn.extend({newsCarousel:function(c){c=a.extend(e,c);if("function"===typeof c.debug)b=c.debug;else if(c.debug)b="undefined"===typeof console?function(){alert(Array.slice(arguments).join(", "))}:console.log;var i=this[0];if(!i){b("no tag provided (selector didn't return any elements)");return false}else if("UL"===i.tagName||"OL"===i.tagName){i=a(i).css({height:a(i).height(),width:a(i).width(),overflow:"hidden",position:"static"===a(i).css("position")?"relative":a(i).css("position")});var f=false,g=c.startIndex,m=false,n=c.autostart,p=false,j=false,o=false,k=false;function s(){f=i.children();!f.length&&b("No child li elements found");var d=f.filter(":visible");if(0===d.length){f[c.startIndex].show();j=f.eq(c.startIndex).width();o=f.eq(c.startIndex).height();k=f.eq(c.startIndex).position()}else{j=d.eq(0).width();k=d.eq(0).position();o=d.eq(0).height()}0===a(i).height()&&a(i).height(o);f.each(function(e,d){d=a(d);first_item=a("#carousel li.first");if(first_item.length==0)first_item=a("#carousel2 li.first");if("fade"===c.transition){d.css({position:"absolute",top:k.top,left:k.left,width:j,"z-index":1,opacity:e===c.startIndex?1:0,display:"block"});first_item.css({"z-index":2})}else if("slide"===c.transition)d.css({position:"absolute",top:k.top,left:e===c.startIndex?k.left:-j-1e3,width:j,"z-index":50,display:"block"});else{b("Invalid transition method defined in the options - expecting 'fade' or 'slide'");return false}});return true}var r=function(b,d){c.onChange(b,g);a("#car_"+Number(g+1)).attr("class","car_"+Number(g+1));a("#car_"+Number(b+1)).attr("class","on_car");if(d){f.eq(g).hide();f.eq(b).show()}else{m=true;c.onTransitionStart();f.eq(g).stop(true,true).css("z-index",1).animate({opacity:0},{easing:"linear",duration:c.transitionDuration});f.eq(b).stop(true,true).css({"z-index":2}).animate({opacity:1},{easing:"linear",duration:c.transitionDuration,complete:function(){f.eq(b).css("z-index",2);m=false;c.onTransitionEnd()}})}return true},q=function(b,d){c.onChange(b,g);if(d){f.eq(g).css("left",-j-1e3);f.eq(g).css("left",k.left)}else{m=true;c.onTransitionStart();f.eq(b).stop(true,true).css({left:b<g?-j:j}).animate({left:0},{duration:c.transitionDuration,complete:function(){m=false;c.onTransitionEnd()}});f.eq(g).stop(true,true).animate({left:b<g?j:-j},{duration:c.transitionDuration,complete:function(){a(this).css("left",-j-1e3)}})}return true},l=function(a,e){var d=n;h.pause();if(g===a){d&&h.play();return true}if("fade"===c.transition)r(a,e);else if("slide"===c.transition)q(a,e);else{b("unreachable code block executed! [change transition exception]");return false}g=a;d&&h.play()},h={play:function(a){"undefined"!==typeof a&&l(a,true);p=setTimeout(function(){l(d(g+1,f.length))},c.displayDuration);n=true;c.onPlay()},pause:function(){clearTimeout(p);n=false;c.onPause()},toggle:function(){if(n)h.pause();else h.play()},jump_to:function(b,a){l(b,a)},next:function(a){l(d(g+1,f.length),a)},prev:function(a){l(d(g-1,f.length),a)}};a.each(["toggle","prev","next","controls","play","pause"],function(b,a){if(c[a])c[a].length&&c[a].click(function(b){b.preventDefault();h[a]();this.blur()})});c.navButtons.length&&c.navButtons.each(function(c,b){a(b).click(function(a){a.preventDefault();h.jump_to(d(c,f.length));this.blur()})});if(s()){c.autoplay&&h.play();return{play:h.play,pause:h.pause,jump_to:h.jump_to,next:h.next,prev:h.prev,toggle:h.toggle}}else{b("Couldn't setup items");return false}}else{b("invalid tag type - expecting 'ul' or 'ol'");return false}}})})(jQuery);$(document).ready(function(){$("#carousel ul li .no-opacity").css("cursor","pointer").bind("click",function(){window.location=$(this).find("a").attr("href")});jQuery("#search-box p span").click(function(){jQuery("#search-box div").hide();jQuery("."+$(this).attr("id")).show();jQuery(this).addClass("active");jQuery("#search-box p span").not(this).removeClass("active");var a=$("#"+jQuery(this).attr("id")+"_op");jQuery(a).addClass("active");jQuery(this).attr("id")=="courses_op"&&jQuery("#courses").addClass("active");jQuery(this).attr("id")=="websites_op"&&jQuery("#websites").addClass("active");jQuery(this).attr("id")=="school_op"&&jQuery("#school").addClass("active")});var b=function(){return b};(function(a){b.newsCarousel=function(){a(".banner-navigation").css("visibility","visible");return b.carouselControls=a("#carousel ul").newsCarousel({navButtons:a(".banner-navigation a"),transition:"fade"})};jQuery(function(){if(jQuery("#carousel ul").length){b.newsCarousel();a("#car_1").attr("class","on_car")}})}).call(b,jQuery);var a=function(){return a};(function(b){a.newsCarousel=function(){b("div#home-banner.alt .alt-banner-navigation").css("visibility","visible");return a.carouselControls=b("#carousel2 ul").newsCarousel({navButtons:b("div#home-banner.alt .alt-banner-navigation a"),transition:"fade",autoplay:false})};jQuery(function(){jQuery("div#home-banner.alt .alt-banner-navigation a").bind("click",function(){if(b(this).attr("class")=="on_car")location.href=this.href;else return false}).bind("mouseover",function(){var c=parseInt(b(this).attr("id").replace("car_",""))-1;a.carouselControls.jump_to(c)});if(jQuery("div#home-banner.alt #carousel2 ul").length){a.newsCarousel();b("#car_1").attr("class","on_car")}})}).call(a,jQuery);$("#carousel2 ul li .no-opacity").css("cursor","pointer").bind("click",function(){window.location=$(this).find("a").attr("href")});jQuery(".no-js-nav").remove();jQuery(".tabs-box").hide();jQuery(".home-right .news").show();jQuery(".home-right .news").before("<div class='grey-box tabs-nav'><ul class='section-nav'><li id='news' class='active'><a href='#'>News</a><span></span></li><li id='events'><a href='#'>Events</a><span></span></li><li id='open-days'><a href='#'>Open Days</a><span></span></li></ul></div>");jQuery(".section-nav li").click(function(){jQuery(".tabs-box").hide();jQuery("."+$(this).attr("id")).show();jQuery(this).addClass("active");jQuery(".section-nav li").not(this).removeClass("active");return false})})