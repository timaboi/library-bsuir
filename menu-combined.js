/* jquery.hoverIntent.minified.js */
(function ($) {
  $.fn.hoverIntent = function (f, g) {
    var cfg = { sensitivity: 7, interval: 100, timeout: 0 };
    cfg = $.extend(cfg, g ? { over: f, out: g } : f);
    var cX, cY, pX, pY;
    var track = function (ev) {
      cX = ev.pageX;
      cY = ev.pageY;
    };
    var compare = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      if (Math.abs(pX - cX) + Math.abs(pY - cY) < cfg.sensitivity) {
        $(ob).unbind("mousemove", track);
        ob.hoverIntent_s = 1;
        return cfg.over.apply(ob, [ev]);
      } else {
        pX = cX;
        pY = cY;
        ob.hoverIntent_t = setTimeout(function () {
          compare(ev, ob);
        }, cfg.interval);
      }
    };
    var delay = function (ev, ob) {
      ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      ob.hoverIntent_s = 0;
      return cfg.out.apply(ob, [ev]);
    };
    var handleHover = function (e) {
      var p =
        (e.type == "mouseover" ? e.fromElement : e.toElement) ||
        e.relatedTarget;
      while (p && p != this) {
        try {
          p = p.parentNode;
        } catch (e) {
          p = this;
        }
      }
      if (p == this) {
        return false;
      }
      var ev = jQuery.extend({}, e);
      var ob = this;
      if (ob.hoverIntent_t) {
        ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
      }
      if (e.type == "mouseover") {
        pX = ev.pageX;
        pY = ev.pageY;
        $(ob).bind("mousemove", track);
        if (ob.hoverIntent_s != 1) {
          ob.hoverIntent_t = setTimeout(function () {
            compare(ev, ob);
          }, cfg.interval);
        }
      } else {
        $(ob).unbind("mousemove", track);
        if (ob.hoverIntent_s == 1) {
          ob.hoverIntent_t = setTimeout(function () {
            delay(ev, ob);
          }, cfg.timeout);
        }
      }
    };
    return this.mouseover(handleHover).mouseout(handleHover);
  };
});
/* jquery.dcjqaccordion.2.7.min.js */
(function ($) {
  $.fn.dcAccordion = function (options) {
    var defaults = {
      classParent: "dcjq-parent",
      classActive: "active",
      classArrow: "dcjq-icon",
      classCount: "dcjq-count",
      classExpand: "dcjq-current-parent",
      eventType: "click",
      hoverDelay: 300,
      menuClose: true,
      autoClose: true,
      autoExpand: false,
      speed: "slow",
      saveState: true,
      disableLink: true,
      showCount: false,
      cookie: "dcjq-accordion",
    };
    var options = $.extend(defaults, options);
    this.each(function (options) {
      var obj = this;
      setUpAccordion();
      if (defaults.saveState == true) {
        checkCookie(defaults.cookie, obj);
      }
      if (defaults.autoExpand == true) {
        $("li." + defaults.classExpand + " > a").addClass(defaults.classActive);
      }
      resetAccordion();
      if (defaults.eventType == "hover") {
        var config = {
          sensitivity: 2,
          interval: defaults.hoverDelay,
          over: linkOver,
          timeout: defaults.hoverDelay,
          out: linkOut,
        };
        $("li a", obj).hoverIntent(config);
        var configMenu = {
          sensitivity: 2,
          interval: 1000,
          over: menuOver,
          timeout: 1000,
          out: menuOut,
        };
        $(obj).hoverIntent(configMenu);
        if (defaults.disableLink == true) {
          $("li a", obj).click(function (e) {
            if ($(this).siblings("ul").length > 0) {
              e.preventDefault();
            }
          });
        }
      } else {
        $("li a", obj).click(function (e) {
          $activeLi = $(this).parent("li");
          $parentsLi = $activeLi.parents("li");
          $parentsUl = $activeLi.parents("ul");
          if (defaults.disableLink == true) {
            if ($(this).siblings("ul").length > 0) {
              e.preventDefault();
            }
          }
          if (defaults.autoClose == true) {
            autoCloseAccordion($parentsLi, $parentsUl);
          }
          if ($("> ul", $activeLi).is(":visible")) {
            $("ul", $activeLi).slideUp(defaults.speed);
            $("a", $activeLi).removeClass(defaults.classActive);
          } else {
            $(this).siblings("ul").slideToggle(defaults.speed);
            $("> a", $activeLi).addClass(defaults.classActive);
          }
          if (defaults.saveState == true) {
            createCookie(defaults.cookie, obj);
          }
        });
      }
      function setUpAccordion() {
        $arrow = '<span class="' + defaults.classArrow + '"></span>';
        var classParentLi = defaults.classParent + "-li";
        $("> ul", obj).show();
        $("li", obj).each(function () {
          if ($("> ul", this).length > 0) {
            $(this).addClass(classParentLi);
            $("> a", this).addClass(defaults.classParent).append($arrow);
          }
        });
        $("> ul", obj).hide();
        if (defaults.showCount == true) {
          $("li." + classParentLi, obj).each(function () {
            if (defaults.disableLink == true) {
              var getCount = parseInt(
                $("ul a:not(." + defaults.classParent + ")", this).length
              );
            } else {
              var getCount = parseInt($("ul a", this).length);
            }
            $("> a", this).append(
              ' <span class="' +
                defaults.classCount +
                '">(' +
                getCount +
                ")</span>"
            );
          });
        }
      }
      function linkOver() {
        $activeLi = $(this).parent("li");
        $parentsLi = $activeLi.parents("li");
        $parentsUl = $activeLi.parents("ul");
        if (defaults.autoClose == true) {
          autoCloseAccordion($parentsLi, $parentsUl);
        }
        if ($("> ul", $activeLi).is(":visible")) {
          $("ul", $activeLi).slideUp(defaults.speed);
          $("a", $activeLi).removeClass(defaults.classActive);
        } else {
          $(this).siblings("ul").slideToggle(defaults.speed);
          $("> a", $activeLi).addClass(defaults.classActive);
        }
        if (defaults.saveState == true) {
          createCookie(defaults.cookie, obj);
        }
      }
      function linkOut() {}
      function menuOver() {}
      function menuOut() {
        if (defaults.menuClose == true) {
          $("ul", obj).slideUp(defaults.speed);
          $("a", obj).removeClass(defaults.classActive);
          createCookie(defaults.cookie, obj);
        }
      }
      function autoCloseAccordion($parentsLi, $parentsUl) {
        $("ul", obj).not($parentsUl).slideUp(defaults.speed);
        $("a", obj).removeClass(defaults.classActive);
        $("> a", $parentsLi).addClass(defaults.classActive);
      }
      function resetAccordion() {
        $("ul", obj).hide();
        $allActiveLi = $("a." + defaults.classActive, obj);
        $allActiveLi.siblings("ul").show();
      }
    });
    function checkCookie(cookieId, obj) {
      var cookieVal = $.cookie(cookieId);
      if (cookieVal != null) {
        var activeArray = cookieVal.split(",");
        $.each(activeArray, function (index, value) {
          var $cookieLi = $("li:eq(" + value + ")", obj);
          $("> a", $cookieLi).addClass(defaults.classActive);
          var $parentsLi = $cookieLi.parents("li");
          $("> a", $parentsLi).addClass(defaults.classActive);
        });
      }
    }
    function createCookie(cookieId, obj) {
      var activeIndex = [];
      $("li a." + defaults.classActive, obj).each(function (i) {
        var $arrayItem = $(this).parent("li");
        var itemIndex = $("li", obj).index($arrayItem);
        activeIndex.push(itemIndex);
      });
      $.cookie(cookieId, activeIndex, { path: "/" });
    }
  };
});
