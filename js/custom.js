/* ------------
 * Preloader
 * ------------ */

const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

/* ------------
 * Plugin
 * ------------ */

(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    /* ------------
     * SidebarMenu
     * ------------ */
    $.sidebarMenu = function (menu) {
      var _animationSpeed = 300,
        _subMenuSelector = ".sidebar-submenu";

      $(menu).on("click", "li a", function (e) {
        var _this = $(this);
        var _checkElement = _this.next();

        if (_checkElement.is(_subMenuSelector) && _checkElement.is(":visible")) {
          _checkElement.slideUp(_animationSpeed, function () {
            _checkElement.removeClass("menu-open");
          });
          _checkElement.parent("li").removeClass("active");
        } else if (_checkElement.is(_subMenuSelector) && !_checkElement.is(":visible")) {
          //If the menu is not visible
          //Get the parent menu
          var _parent = _this.parents("ul").first();
          //Close all open menus within the parent
          var _ul = _parent.find("ul:visible").slideUp(_animationSpeed);
          //Remove the menu-open class from the parent
          _ul.removeClass("menu-open");
          //Get the parent li
          var _parent_li = _this.parent("li");

          //Open the target menu and add the menu-open class
          _checkElement.slideDown(_animationSpeed, function () {
            //Add the class active to the parent li
            _checkElement.addClass("menu-open");
            _parent.find("li.active").removeClass("active");
            _parent_li.addClass("active");
          });
        }

        //if this isn't a link, prevent the page from being redirected
        if (_checkElement.is(_subMenuSelector)) {
          e.preventDefault();
        }
      });
    };

    $.sidebarMenu($(".sidebar-menu"));

    jQuery.fn.exists = function () {
      return this.length > 0;
    };

    /* ------------
     * nicescrollbar
     * ------------ */
    var _nicescrollbar = $(".nicescrollbar");
    if (_nicescrollbar.exists()) {
      _nicescrollbar.each(function () {
        var _height = $(this).data("height");
        $(this).css({ height: _height });
      });
      $(".nicescrollbar").niceScroll({
        cursorcolor: "#f0f1f6",
        cursorwidth: "8px",
        autohidemode: true,
        scrollspeed: 60,
      });
    }

    /* ------------
     * Data tables
     * ------------ */
    var _table_simple = $("#table-simple");
    if (_table_simple.exists()) {
      _table_simple.DataTable();
    }

    /* ------------
     * showLeft
     * ------------ */
    $("#showLeft").click(function () {
      $(".animate-menu-left").toggleClass("animate-menu-open");
    });

    $("#showRight").click(function () {
      $(".animate-menu-right").toggleClass("animate-menu-open");
    });

    $(".side-toggle").click(function () {
      $(".wrapper").toggleClass("sidebar-panel-collapse");
      $(".nicescrollbar").getNiceScroll().resize();
    });

    $(".sidebar-panel").hover(function () {
      $(".nicescrollbar").getNiceScroll().resize();
    });

    /* ------------
     * Summernote
     * ------------ */
    var _summernote = $(".summernote");
    if (_summernote.exists()) {
      _summernote.summernote({
        height: 400,
      });
    }

    /* end document.ready */
  });
})(jQuery); // End of use strict
