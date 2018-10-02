$(document).ready(function () {
    $('.right-sidebar .right-details-box .apply a').bind('click', function () {
        var t = $(this);
        _gat._getTrackerByName()._trackEvent(document.title, t.text());
        setTimeout('document.location = "' + t.attr('href') + '"', 100);
    });
    jQuery("#search-box p span").click(function () {
        jQuery("#search-box div").hide();
        jQuery("." + $(this).attr("id")).show();
        jQuery(this).addClass("active");
        jQuery("#search-box p span").not(this).removeClass("active");
        var a = $("#" + jQuery(this).attr("id") + "_op");
        jQuery(a).addClass("active");
        jQuery(this).attr("id") == "courses_op" && jQuery("#courses").addClass("active");
        jQuery(this).attr("id") == "websites_op" && jQuery("#websites").addClass("active");
        jQuery(this).attr("id") == "school_op" && jQuery("#school").addClass("active")
    });
    jQuery(".course-tab .entry-hide").hide();
    jQuery(".course-tab h2").click(function () {
        var a = jQuery("#" + $(this).attr("class")).attr("class");
        if (a == "entry-hide") {
            jQuery("#" + $(this).attr("class")).show();
            jQuery("#" + $(this).attr("class")).addClass("visible");
            jQuery(this).addClass("active")
        } else {
            jQuery(this).removeClass("active");
            jQuery("#" + $(this).attr("class")).hide();
            jQuery("#" + $(this).attr("class")).removeClass("visible")
        }
    });
    jQuery(".course-content-nav").show();
    jQuery(".course-tab").hide();
    jQuery("#overview").show();
    jQuery(".course-content-nav li").click(function () {
        var $this = $(this);
        if ($this.hasClass('active')) {
            return false;
        };
        jQuery(".course-tab").hide();
        jQuery("#" + $this.attr("class")).show();
        $this.addClass("active");
        jQuery(".course-content-nav li").not(this).removeClass("active")
    });
    if (window.location.hash) {
        var q = $('.course-content-nav li.' + window.location.hash.replace('#', ''));
        if (q.length > 0) {
            if (!q.hasClass('active')) {
                jQuery(".course-tab").hide();
                jQuery("#" + q.attr("class")).show();
                q.addClass('active');
                jQuery(".course-content-nav li").not(q).removeClass("active");
                window.scrollTo(0, 0);
            }
        }
    }
    jQuery.fancybox && $("#page-feedback").fancybox({
        href: "?SQ_DESIGN_NAME=feedback-js",
        title: "Page Feedback",
        width: "90%",
        height: "90%",
        autoScale: true,
        transitionIn: "none",
        transitionOut: "none",
        type: "iframe",
        titlePosition: "outside"
    });
    jQuery('.show-hide h2,.show-hide h3').wrap('<a href="#"/>').parent().click(function () {
        if (jQuery(this).siblings('div').css('display') != 'block') {
            jQuery(this).siblings('div').slideDown();
        } else {
            jQuery(this).siblings('div').slideUp("fast");
        }
        return false;
    }).siblings('div').css('display', 'none');
})
var pageTracker = new Object();
pageTracker._trackPageview = function () {};