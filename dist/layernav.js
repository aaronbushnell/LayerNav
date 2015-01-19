;(function ($) {
  if (!$.app) {
      $.app = {};
  }

  $.app.layernav = function ( el, options ) {
    // To avoid scope issues, use 'base' instead of 'this'
    // to reference this class from internal events and functions.
    var base = this;

    // Access to jQuery and DOM versions of element
    base.$el = $(el);
    base.el = el;

    // Add a reverse reference to the DOM object
    base.$el.data("nav.layernav", base);

    base.init = function () {
      base.options = $.extend({}, $.app.layernav.defaultOptions, options);

      var viewportBounce = base.debounce(function() {
        base.checkViewport();
      }, 250);

      $(window).on('resize', viewportBounce);

      base.$el.addClass('layer-nav');
    };

    base.isMobile = function () {
      windowWidth = $(window).outerWidth();

      if (windowWidth < base.options.lgWidth) {
        return true;
      } else {
        return false;
      }
    };

    base.checkViewport = function () {
      if (base.isMobile()) {
        base.$el.addClass('is-mobile');
        base.$el.removeClass('is-desktop');
      } else {
        base.$el.addClass('is-desktop');
        base.$el.removeClass('is-mobile');
      }
    };

    base.addMobileToggle = function () {
      if (base.options.toggleButton === '.js-layer-nav-toggle') {
        base.$el.prepend('<a class="js-layer-nav-toggle">' + base.options.toggleButtonText + '</a>');
      }

      $(base.options.toggleButton).addClass('layer-nav-toggle');
    };

    base.addExpandIcons = function () {
      base.$el.find('li').has('ul').addClass('has-children');

      if (base.options.expandIcons) {
        $('<span class="expand-icon">+</span>').insertAfter(base.$el.find('li').has('ul').children('a'));
      }
    };

    base.events = function () {
      $(base.options.toggleButton).on('click', base.expandTopMenu);

      if (!base.options.expandIcons) {
        base.$el.find('.has-children > a').on('click', base.expandSubMenus);
      } else {
        base.$el.find(base.options.expandIconsEl).on('click', base.expandSubMenus);
      }
    };

    base.expandSubMenus = function (e) {
      $clickedLink = $(this);
      $childMenu = $clickedLink.siblings('ul');

      if (!base.options.expandIcons && base.isMobile()) {
        e.preventDefault();
        base.openMenu($childMenu);
      } else {
        base.openMenu($childMenu);
      }
    };

    base.expandTopMenu = function () {
      if (base.$el.children('ul').hasClass('open-menu')) {
        base.$el.children('ul').removeClass('open-menu');
      } else {
        base.$el.children('ul').addClass('open-menu');
      }
    };

    base.openMenu = function ($menu) {
      if ($menu.hasClass('open-menu')) {
        $menu.removeClass('open-menu');
      } else {
        $menu.addClass('open-menu');
      }
    };

    base.debounce = function (func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    base.init();
    base.checkViewport();
    base.addMobileToggle();
    base.addExpandIcons();
    base.events();
  };

  $.app.layernav.defaultOptions = {
    lgWidth: 500,
    toggleButton: '.js-layer-nav-toggle',
    toggleButtonText: 'Menu',
    expandIcons: false,
    expandIconsEl: 'span'
  };

  $.fn.layerNav = function (options) {
    return this.each(function () {
      (new $.app.layernav(this, options));
    });
  };

})(jQuery);
