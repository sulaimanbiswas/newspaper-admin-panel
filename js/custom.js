/* ----------------------------------
  Script
-------------------------------------
    00. Preloader
    01. SidebarMenu
    02. Nicescrollbar
    03. Popover tooltip tooltip
    04. Select2
    05. Zmdi minus
    06. Sortable
    07. ShowLeft
    08. Chart chartjs 
    09. Data tables
    10. Datepicker
    11. Duallistbox
    12. Mask
    13. Wizard
    14. Map Vactor
    15. Morris
    16. Nestable
    17. Peity
    18. Rangeslider
    19. Sparkline
    20. Summernote
    21. TouchSpin
    22. Google Map
    23. Calendar
*/

/* ------------------------------------------------------------------------
 * Preloader
 * ------------------------------------------------------------------------ */

const loader = document.getElementById("preloader");
window.addEventListener("load", () => {
  loader.style.display = "none";
});

(function ($) {
  "use strict"; // Start of use strict

  $(document).ready(function () {
    /* ------------------------------------------------------------------------
     * SidebarMenu
     * ------------------------------------------------------------------------ */
    $.sidebarMenu = function (menu) {
      var _animationSpeed = 300,
        _subMenuSelector = ".sidebar-submenu";

      $(menu).on("click", "li a", function (e) {
        var _this = $(this);
        var _checkElement = _this.next();

        if (
          _checkElement.is(_subMenuSelector) &&
          _checkElement.is(":visible")
        ) {
          _checkElement.slideUp(_animationSpeed, function () {
            _checkElement.removeClass("menu-open");
          });
          _checkElement.parent("li").removeClass("active");
        } else if (
          _checkElement.is(_subMenuSelector) &&
          !_checkElement.is(":visible")
        ) {
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

    /* ------------------------------------------------------------------------
     * nicescrollbar
     * ------------------------------------------------------------------------ */
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

    /* ------------------------------------------------------------------------
     * popover tooltip tooltip
     * ------------------------------------------------------------------------ */
    $(function () {
      $('[data-toggle="popover"]').popover();
    });

    $(".popover-dismiss").popover({
      trigger: "focus",
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    /* ------------------------------------------------------------------------
     * select2
     * ------------------------------------------------------------------------ */
    var _select2 = $(".js-example-basic-single");
    if (_select2.exists()) {
      _select2.select2();
    }

    var _select2 = $(".js-example-basic-multiple");
    if (_select2.exists()) {
      _select2.select2();
    }

    /* ------------------------------------------------------------------------
     * zmdi minus
     * ------------------------------------------------------------------------ */
    var _zmdiminus = $(".zmdi-minus");
    if (_zmdiminus.exists()) {
      _zmdiminus.click(function () {
        // $( this ).switchClass( 'zmdi-minus', 'zmdi-plus', 500, 'easeInOutQuad' );
        _zmdiminus.toggleClass("zmdi-minus zmdi-plus");
        $("#card-body-toggle").slideToggle();
      });
    }

    var _zmdiclose = $(".zmdi-close");
    if (_zmdiclose.exists()) {
      _zmdiclose.click(function () {
        $(".parent-div").remove();
      });
    }

    /* ------------------------------------------------------------------------
     * sortable
     * ------------------------------------------------------------------------ */
    var _sortable = $("#sortable1");
    if (_sortable.exists()) {
      _sortable
        .sortable({
          connectWith: ".connectedSortable",
        })
        .disableSelection();
    }

    /* ------------------------------------------------------------------------
     * showLeft
     * ------------------------------------------------------------------------ */
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

    /* ------------------------------------------------------------------------
     * chart chartjs
     * ------------------------------------------------------------------------ */
    /* bar-chart */
    var _chartjsbar = $("#bar-chart");
    if (_chartjsbar.exists()) {
      new Chart(_chartjsbar, {
        type: "bar",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
    }
    /* Line chart */
    var _chartjsline = $("#line-chart");
    if (_chartjsline.exists()) {
      new Chart(_chartjsline, {
        type: "line",
        data: {
          labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
          datasets: [
            {
              data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
              label: "Africa",
              borderColor: "#3e95cd",
              fill: false,
            },
            {
              data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
              label: "Asia",
              borderColor: "#8e5ea2",
              fill: false,
            },
            {
              data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
              label: "Europe",
              borderColor: "#3cba9f",
              fill: false,
            },
            {
              data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
              label: "Latin America",
              borderColor: "#e8c3b9",
              fill: false,
            },
            {
              data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
              label: "North America",
              borderColor: "#c45850",
              fill: false,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "World population per region (in millions)",
          },
        },
      });
    }

    /* bar-chart */
    var _chartjspie = $("#pie-chart");
    if (_chartjspie.exists()) {
      new Chart(_chartjspie, {
        type: "pie",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
    }

    /* bar-chart */
    var _chartjsradar = $("#radar-chart");
    if (_chartjsradar.exists()) {
      new Chart(_chartjsradar, {
        type: "radar",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "1950",
              fill: true,
              backgroundColor: "rgba( 179, 181, 198, 0.2 )",
              borderColor: "rgba( 179, 181, 198, 1 )",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba( 179, 181, 198, 1 )",
              data: [8.77, 55.61, 21.69, 6.62, 6.82],
            },
            {
              label: "2050",
              fill: true,
              backgroundColor: "rgba( 255, 99, 132, 0.2 )",
              borderColor: "rgba( 255, 99, 132, 1 )",
              pointBorderColor: "#fff",
              pointBackgroundColor: "rgba( 255, 99, 132, 1 )",
              pointBorderColor: "#fff",
              data: [25.48, 54.16, 7.61, 8.06, 4.45],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Distribution in % of world population",
          },
        },
      });
    }

    /* polar-chart */
    var _chartjspolar = $("#polar-chart");
    if (_chartjspolar.exists()) {
      new Chart(_chartjspolar, {
        type: "polarArea",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
    }

    /* doughnut-chart */
    var _chartjsdoughnut = $("#doughnut-chart");
    if (_chartjsdoughnut.exists()) {
      new Chart(_chartjsdoughnut, {
        type: "doughnut",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
    }

    /* horizontal */
    var _chartjshorizontal = $("#horizontal-chart");
    if (_chartjshorizontal.exists()) {
      new Chart(_chartjshorizontal, {
        type: "horizontalBar",
        data: {
          labels: [
            "Africa",
            "Asia",
            "Europe",
            "Latin America",
            "North America",
          ],
          datasets: [
            {
              label: "Population (millions)",
              backgroundColor: [
                "#3e95cd",
                "#8e5ea2",
                "#3cba9f",
                "#e8c3b9",
                "#c45850",
              ],
              data: [2478, 5267, 734, 784, 433],
            },
          ],
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
        },
      });
    }

    /* grouped */
    var _chartjsgrouped = $("#grouped-chart");
    if (_chartjsgrouped.exists()) {
      new Chart(_chartjsgrouped, {
        type: "bar",
        data: {
          labels: ["1900", "1950", "1999", "2050"],
          datasets: [
            {
              label: "Africa",
              backgroundColor: "#3e95cd",
              data: [133, 221, 783, 2478],
            },
            {
              label: "Europe",
              backgroundColor: "#8e5ea2",
              data: [408, 547, 675, 734],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Population growth (millions)",
          },
        },
      });
    }

    /* grouped */
    var _chartjsmixed = $("#mixed-chart");
    if (_chartjsmixed.exists()) {
      new Chart(_chartjsmixed, {
        type: "bar",
        data: {
          labels: ["1900", "1950", "1999", "2050"],
          datasets: [
            {
              label: "Europe",
              type: "line",
              borderColor: "#8e5ea2",
              data: [408, 547, 675, 734],
              fill: false,
            },
            {
              label: "Africa",
              type: "line",
              borderColor: "#3e95cd",
              data: [133, 221, 783, 2478],
              fill: false,
            },
            {
              label: "Europe",
              type: "bar",
              backgroundColor: "rgba( 0, 0, 0, 0.2 )",
              data: [408, 547, 675, 734],
            },
            {
              label: "Africa",
              type: "bar",
              backgroundColor: "rgba( 0, 0, 0, 0.2 )",
              backgroundColorHover: "#3e95cd",
              data: [133, 221, 783, 2478],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Population growth (millions): Europe & Africa",
          },
          legend: { display: false },
        },
      });
    }

    /* grouped */
    var _chartjsbubble = $("#bubble-chart");
    if (_chartjsbubble.length) {
      new Chart(_chartjsbubble, {
        type: "bubble",
        data: {
          labels: "Africa",
          datasets: [
            {
              label: ["China"],
              backgroundColor: "rgba( 255, 221, 50, 0.2 )",
              borderColor: "rgba( 255, 221, 50, 1 )",
              data: [
                {
                  x: 21269017,
                  y: 5.245,
                  r: 15,
                },
              ],
            },
            {
              label: ["Denmark"],
              backgroundColor: "rgba( 60, 186, 159, 0.2 )",
              borderColor: "rgba( 60, 186, 159, 1 )",
              data: [
                {
                  x: 258702,
                  y: 7.526,
                  r: 10,
                },
              ],
            },
            {
              label: ["Germany"],
              backgroundColor: "rgba( 0, 0, 0, 0.2 )",
              borderColor: "#000",
              data: [
                {
                  x: 3979083,
                  y: 6.994,
                  r: 15,
                },
              ],
            },
            {
              label: ["Japan"],
              backgroundColor: "rgba( 193, 46, 12, 0.2 )",
              borderColor: "rgba( 193, 46, 12, 1 )",
              data: [
                {
                  x: 4931877,
                  y: 5.921,
                  r: 15,
                },
              ],
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Predicted world population (millions) in 2050",
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Happiness",
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "GDP (PPP)",
                },
              },
            ],
          },
        },
      });
    }

    /* ------------------------------------------------------------------------
     * Data tables
     * ------------------------------------------------------------------------ */
    var _table_simple = $("#table-simple");
    if (_table_simple.exists()) {
      _table_simple.DataTable();
    }

    var _table_export = $("#table-export");
    if (_table_export.exists()) {
      _table_export.DataTable({
        dom: "Bfrtip",
        buttons: ["copy", "csv", "excel", "pdf", "print"],
      });
    }

    var _table_selected = $("#table-selected");
    if (_table_selected.exists()) {
      _table_selected.DataTable({
        select: true,
      });
    }

    var _table_fixed = $("#table-fixed-columns");
    if (_table_fixed.exists()) {
      _table_fixed.DataTable({
        scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        paging: false,
        fixedColumns: true,
      });
    }

    var _table_rowgroup = $("#table-rowgroup");
    if (_table_rowgroup.exists()) {
      _table_rowgroup.DataTable({
        order: [[2, "asc"]],
        rowGroup: {
          dataSrc: 2,
        },
      });
    }

    /* ------------------------------------------------------------------------
     * datepicker
     * ------------------------------------------------------------------------ */
    var _dates = $('input[name="dates"]');
    if (_dates.exists()) {
      _dates.daterangepicker();
    }

    var _daterange = $('input[name="daterange"]');
    if (_daterange.exists()) {
      _daterange.daterangepicker(
        {
          opens: "left",
        },
        function (start, end, label) {
          console.log(
            "A new date selection was made: " +
              start.format("YYYY-MM-DD") +
              " to " +
              end.format("YYYY-MM-DD")
          );
        }
      );
    }

    var _datetimes = $('input[name="datetimes"]');
    if (_datetimes.exists()) {
      _datetimes.daterangepicker({
        timePicker: true,
        startDate: moment().startOf("hour"),
        endDate: moment().startOf("hour").add(32, "hour"),
        locale: {
          format: "M/DD hh:mm A",
        },
      });
    }

    var _birthday = $('input[name="birthday"]');
    if (_birthday.exists()) {
      _birthday.daterangepicker(
        {
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format("YYYY"), 10),
        },
        function (start, end, label) {
          var years = moment().diff(start, "years");
          alert("You are " + years + " years old!");
        }
      );
    }

    var _reportrange = $("#reportrange");
    function cb(start, end) {
      $("#reportrange span").html(
        start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
      );
    }
    if (_reportrange.exists()) {
      var start = moment().subtract(29, "days");
      var end = moment();

      _reportrange.daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days"),
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment().subtract(1, "month").startOf("month"),
              moment().subtract(1, "month").endOf("month"),
            ],
          },
        },
        cb
      );
      cb(start, end);
    }

    var _datefilter = $('input[name="datefilter"]');
    if (_datefilter.exists()) {
      _datefilter.daterangepicker({
        autoUpdateInput: false,
        locale: {
          cancelLabel: "Clear",
        },
      });

      _datefilter.on("apply.daterangepicker", function (ev, picker) {
        $(this).val(
          picker.startDate.format("MM/DD/YYYY") +
            " - " +
            picker.endDate.format("MM/DD/YYYY")
        );
      });

      _datefilter.on("cancel.daterangepicker", function (ev, picker) {
        $(this).val("");
      });
    }

    var _timepicker1 = $("#timepicker1");
    if (_timepicker1.exists()) {
      _timepicker1.timepicker({
        defaultTime: "current",
        showInputs: true,
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
        },
      });
    }

    var _timepicker2 = $("#timepicker2");
    if (_timepicker2.exists()) {
      _timepicker2.timepicker({
        showSeconds: true,
        showInputs: true,
        icons: {
          up: "fa fa-angle-up",
          down: "fa fa-angle-down",
        },
      });
    }

    /* ------------------------------------------------------------------------
     * Duallistbox
     * ------------------------------------------------------------------------ */

    var _demo1 = $('select[name="duallistbox_demo1[]"]');
    if (_demo1.exists()) {
      _demo1.bootstrapDualListbox();
    }

    $("#demoform").submit(function () {
      alert($('[name="duallistbox_demo1[]"]').val());
      return false;
    });

    var _demo2 = $(".demo2");
    if (_demo2.exists()) {
      _demo2.bootstrapDualListbox({
        nonSelectedListLabel: "Non-selected",
        selectedListLabel: "Selected",
        preserveSelectionOnMove: "moved",
        moveOnSelect: false,
        nonSelectedFilter: "ion ([7-9]|[1][0-2])",
      });
    }

    /* ------------------------------------------------------------------------
     * Mask
     * ------------------------------------------------------------------------ */

    var _date = $("#mask-date");
    if (_date.exists()) {
      _date.mask("00/00/0000");
    }

    var _time = $("#mask-time");
    if (_time.exists()) {
      _time.mask("00:00:00");
    }

    var _date_time = $(".date_time");
    if (_date_time.exists()) {
      _date_time.mask("00/00/0000 00:00:00");
    }

    var _cep = $(".cep");
    if (_cep.exists()) {
      _cep.mask("00000-000");
    }

    var _phone = $("#mask-phone");
    if (_phone.exists()) {
      _phone.mask("0000-0000");
    }

    var _phone_with_ddd = $(".phone_with_ddd");
    if (_phone_with_ddd.exists()) {
      _phone_with_ddd.mask("(00) 0000-0000");
    }

    var _phone_us = $(".phone_us");
    if (_phone_us.exists()) {
      _phone_us.mask("(000) 000-0000");
    }

    var _mixed = $(".mixed");
    if (_mixed.exists()) {
      _mixed.mask("AAA 000-S0S");
    }
    var _cpf = $(".cpf");
    if (_cpf.exists()) {
      _cpf.mask("000.000.000-00", { reverse: true });
    }

    var _cnpj = $(".cnpj");
    if (_cnpj.exists()) {
      _cnpj.mask("00.000.000/0000-00", { reverse: true });
    }

    var _money = $("#mask-money");
    if (_money.exists()) {
      _money.mask("000.000.000.000.000,00", { reverse: true });
    }
    var _money2 = $("#mask-money2");
    if (_money2.exists()) {
      _money2.mask("#.##0,00", { reverse: true });
    }

    var _ip_address = $(".ip_address");
    if (_ip_address.exists()) {
      _ip_address.mask("0ZZ.0ZZ.0ZZ.0ZZ", {
        translation: {
          Z: {
            pattern: /[0-9]/,
            optional: true,
          },
        },
      });
    }

    var _ip_address = $(".ip_address");
    if (_ip_address.exists()) {
      _ip_address.mask("099.099.099.099");
    }
    var _percent = $(".percent");
    if (_percent.exists()) {
      _percent.mask("##0,00%", { reverse: true });
    }
    var _clear_not_match = $(".clear-if-not-match");
    if (_clear_not_match.exists()) {
      _clear_not_match.mask("00/00/0000", { clearIfNotMatch: true });
    }
    var _placeholder = $("#mask-placeholder");
    if (_placeholder.exists()) {
      _placeholder.mask("00/00/0000", { placeholder: "__/__/____" });
    }
    var _fallback = $(".fallback");
    if (_fallback.exists()) {
      _fallback.mask("00r00r0000", {
        translation: {
          r: {
            pattern: /[\/]/,
            fallback: "/",
          },
          placeholder: "__/__/____",
        },
      });
    }
    var _selectonfocus = $(".selectonfocus");
    if (_selectonfocus.exists()) {
      _selectonfocus.mask("00/00/0000", { selectOnFocus: true });
    }

    /* ------------------------------------------------------------------------
     * Wizard
     * ------------------------------------------------------------------------ */
    var _wizard = $("#wizard");
    if (_wizard.exists()) {
      _wizard.bootstrapWizard();
    }
    window.prettyPrint && prettyPrint();

    var _wizard_02 = $("#wizard-02");
    if (_wizard_02.exists()) {
      _wizard_02.bootstrapWizard({
        nextSelector: ".button-next",
        previousSelector: ".button-previous",
      });
    }
    var _wizard_03 = $("#wizard-03");
    if (_wizard_03.exists()) {
      _wizard_03.bootstrapWizard({
        nextSelector: ".button-next",
        previousSelector: ".button-previous",
        firstSelector: ".button-first",
        lastSelector: ".button-last",
      });
    }

    var _wizard_04 = $("#wizard-04");
    if (_wizard_04.exists()) {
      _wizard_04.bootstrapWizard({
        onTabShow: function (tab, navigation, index) {
          var $total = navigation.find("li").length;
          var $current = index + 1;
          var $percent = ($current / $total) * 100;
          $("#wizard-04 .progress-bar").css({ width: $percent + "%" });
        },
      });
    }

    var _wizard_05 = $("#wizard-05");
    if (_wizard_05.exists()) {
      var _commentForm = $("#commentForm");
      var _validator = _commentForm.validate({
        rules: {
          emailfield: {
            required: true,
            email: true,
            minlength: 3,
          },
          namefield: {
            required: true,
            minlength: 3,
          },
          urlfield: {
            required: true,
            minlength: 3,
            url: true,
          },
        },
      });

      _wizard_05.bootstrapWizard({
        tabClass: "nav nav-pills",
        onNext: function (tab, navigation, index) {
          var _valid = _commentForm.valid();
          if (!_valid) {
            _validator.focusInvalid();
            return false;
          }
        },
      });
    }

    /* ------------------------------------------------------------------------
     * Map Vactor
     * ------------------------------------------------------------------------ */

    var _world_map_markers = $("#world-map-markers");
    if (_world_map_markers.exists()) {
      _world_map_markers.vectorMap({
        map: "world_mill",
        scaleColors: ["#C8EEFF", "#0071A4"],
        normalizeFunction: "polynomial",
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
          initial: {
            fill: "#838df4",
            stroke: "#ffffff",
          },
        },
        regionStyle: {
          initial: {
            fill: "#e5e5e5",
          },
        },
        backgroundColor: "transprent",
        markers: [
          { latLng: [41.9, 12.45], name: "Vatican City" },
          { latLng: [43.73, 7.41], name: "Monaco" },
          { latLng: [-0.52, 166.93], name: "Nauru" },
          { latLng: [-8.51, 179.21], name: "Tuvalu" },
          { latLng: [43.93, 12.46], name: "San Marino" },
          { latLng: [47.14, 9.52], name: "Liechtenstein" },
          { latLng: [7.11, 171.06], name: "Marshall Islands" },
          { latLng: [17.3, -62.73], name: "Saint Kitts and Nevis" },
          { latLng: [3.2, 73.22], name: "Maldives" },
          { latLng: [35.88, 14.5], name: "Malta" },
          { latLng: [12.05, -61.75], name: "Grenada" },
          { latLng: [13.16, -61.23], name: "Saint Vincent and the Grenadines" },
          { latLng: [13.16, -59.55], name: "Barbados" },
          { latLng: [17.11, -61.85], name: "Antigua and Barbuda" },
          { latLng: [-4.61, 55.45], name: "Seychelles" },
          { latLng: [7.35, 134.46], name: "Palau" },
          { latLng: [42.5, 1.51], name: "Andorra" },
          { latLng: [14.01, -60.98], name: "Saint Lucia" },
          { latLng: [6.91, 158.18], name: "Federated States of Micronesia" },
          { latLng: [1.3, 103.8], name: "Singapore" },
          { latLng: [1.46, 173.03], name: "Kiribati" },
          { latLng: [-21.13, -175.2], name: "Tonga" },
          { latLng: [15.3, -61.38], name: "Dominica" },
          { latLng: [-20.2, 57.5], name: "Mauritius" },
          { latLng: [26.02, 50.55], name: "Bahrain" },
          { latLng: [0.33, 6.73], name: "São Tomé and Príncipe" },
        ],
      });
    }

    var _australia = $("#australia");
    if (_australia.exists()) {
      _australia.vectorMap({
        map: "au_mill",
        regionStyle: {
          initial: {
            fill: "#838df4",
          },
        },
        backgroundColor: "transprent",
      });
    }

    var _germany = $("#germany");
    if (_germany.exists()) {
      _germany.vectorMap({
        map: "de_mill",
        regionStyle: {
          initial: {
            fill: "#f36c9b",
          },
        },
        backgroundColor: "transprent",
      });
    }
    var _india = $("#india");
    if (_india.exists()) {
      _india.vectorMap({
        map: "in_mill",
        regionStyle: {
          initial: {
            fill: "#50d294",
          },
        },
        backgroundColor: "transprent",
      });
    }
    var _united_kingdom = $("#united-kingdom");
    if (_united_kingdom.exists()) {
      _united_kingdom.vectorMap({
        map: "uk_countries_mill",
        regionStyle: {
          initial: {
            fill: "#ec5552",
          },
        },
        backgroundColor: "transprent",
      });
    }
    var _usa = $("#usa");
    if (_usa.exists()) {
      _usa.vectorMap({
        map: "us_mill",
        regionStyle: {
          initial: {
            fill: "#ffea04",
          },
        },
        backgroundColor: "transprent",
      });
    }

    var _canada = $("#canada");
    if (_canada.exists()) {
      _canada.vectorMap({
        map: "ca_mill",
        regionStyle: {
          initial: {
            fill: "#53cad8",
          },
        },
        backgroundColor: "transprent",
      });
    }

    /* ------------------------------------------------------------------------
     * Morris
     * ------------------------------------------------------------------------ */
    // morris-area
    var morris = $("#morris-area");
    if (morris.exists()) {
      // Use Morris.Area instead of Morris.Line
      Morris.Area({
        element: "morris-area",
        data: [
          { x: "2010 Q4", y: 3, z: 7 },
          { x: "2011 Q1", y: 3, z: 4 },
          { x: "2011 Q2", y: null, z: 1 },
          { x: "2011 Q3", y: 2, z: 5 },
          { x: "2011 Q4", y: 8, z: 2 },
          { x: "2012 Q1", y: 4, z: 4 },
        ],
        xkey: "x",
        ykeys: ["y", "z"],
        labels: ["Y", "Z"],
      }).on("click", function (i, row) {
        console.log(i, row);
      });
    }

    // morris-bar
    var morris = $("#morris-bar");
    if (morris.exists()) {
      Morris.Bar({
        element: "morris-bar",
        data: [
          { x: "2011 Q1", y: 3, z: 2, a: 3 },
          { x: "2011 Q2", y: 2, z: 5, a: 1 },
          { x: "2011 Q3", y: 6, z: 2, a: 4 },
          { x: "2011 Q4", y: 2, z: 4, a: 3 },
        ],
        xkey: "x",
        ykeys: ["y", "z", "a"],
        labels: ["Y", "Z", "A"],
      }).on("click", function (i, row) {
        console.log(i, row);
      });
    }

    // morris-bar
    var morris = $("#morris-donut");
    if (morris.exists()) {
      Morris.Donut({
        element: "morris-donut",
        data: [
          { value: 70, label: "foo" },
          { value: 15, label: "bar" },
          { value: 10, label: "baz" },
          { value: 5, label: "A really really long label" },
        ],
        formatter: function (x) {
          return x + "%";
        },
      }).on("click", function (i, row) {
        console.log(i, row);
      });
    }

    // morris-bar
    var morris = $("#morris-line-non-continuous");
    if (morris.exists()) {
      var day_data = [
        { period: "2012-10-01", licensed: 3407 },
        { period: "2012-09-30", sorned: 0 },
        { period: "2012-09-29", sorned: 618 },
        { period: "2012-09-20", licensed: 3246, sorned: 661 },
        { period: "2012-09-19", licensed: 3257, sorned: null },
        { period: "2012-09-18", licensed: 3248, other: 1000 },
        { period: "2012-09-17", sorned: 0 },
        { period: "2012-09-16", sorned: 0 },
        { period: "2012-09-15", licensed: 3201, sorned: 656 },
        { period: "2012-09-10", licensed: 3215 },
      ];
      Morris.Line({
        element: "morris-line-non-continuous",
        data: day_data,
        xkey: "period",
        ykeys: ["licensed", "sorned", "other"],
        labels: ["Licensed", "SORN", "Other"],
        // custom label formatting with `xLabelFormat`
        xLabelFormat: function (d) {
          return d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
        },
        // setting `xLabels` is recommended when using xLabelFormat
        xLabels: "day",
      });
    }

    // morris-bar
    var morris = $("#morris-line");
    if (morris.exists()) {
      var day_data = [
        { elapsed: "I", value: 34 },
        { elapsed: "II", value: 24 },
        { elapsed: "III", value: 3 },
        { elapsed: "IV", value: 12 },
        { elapsed: "V", value: 13 },
        { elapsed: "VI", value: 22 },
        { elapsed: "VII", value: 5 },
        { elapsed: "VIII", value: 26 },
        { elapsed: "IX", value: 12 },
        { elapsed: "X", value: 19 },
      ];
      Morris.Line({
        element: "morris-line",
        data: day_data,
        xkey: "elapsed",
        ykeys: ["value"],
        labels: ["value"],
        parseTime: false,
      });
    }

    // morris-bar
    var morris = $("#morris-stacked-bars");
    if (morris.exists()) {
      Morris.Bar({
        element: "morris-stacked-bars",
        data: [
          { x: "2011 Q1", y: 3, z: 2, a: 3 },
          { x: "2011 Q2", y: 2, z: null, a: 1 },
          { x: "2011 Q3", y: 0, z: 2, a: 4 },
          { x: "2011 Q4", y: 2, z: 4, a: 3 },
        ],
        xkey: "x",
        ykeys: ["y", "z", "a"],
        labels: ["Y", "Z", "A"],
        stacked: true,
      });
    }

    /* ------------------------------------------------------------------------
     * Nestable
     * ------------------------------------------------------------------------ */

    var _nestable = $("#nestable");
    if (_nestable.exists()) {
      _nestable.nestable();
    }

    var _nestable2 = $("#nestable2");
    if (_nestable2.exists()) {
      _nestable2.nestable();
    }

    /* ------------------------------------------------------------------------
     * Peity
     * ------------------------------------------------------------------------ */
    var _pie_chart = $(".pie");
    if (_pie_chart.exists()) {
      _pie_chart.peity("pie");
    }
    var _donut_chart = $(".donut");
    if (_donut_chart.exists()) {
      _donut_chart.peity("donut");
    }
    var _line_chart = $(".line");
    if (_line_chart.exists()) {
      _line_chart.peity("line");
    }
    var _bar_chart = $(".bar");
    if (_bar_chart.exists()) {
      _bar_chart.peity("bar");
    }

    var _donut_span_chart = $(".data-attributes span");
    if (_donut_span_chart.exists()) {
      _donut_span_chart.peity("donut");
    }

    var _bar_colours_1 = $(".bar-colours-1");
    if (_bar_colours_1.exists()) {
      _bar_colours_1.peity("bar", {
        fill: ["#838df4", "#50d294", "#53cad8"],
      });
    }

    var _bar_colours_2 = $(".bar-colours-2");
    if (_bar_colours_2.exists()) {
      _bar_colours_2.peity("bar", {
        fill: function (value) {
          return value > 0 ? "#50d294" : "#838df4";
        },
      });
    }

    var _bar_colours_3 = $(".bar-colours-3");
    if (_bar_colours_3.exists()) {
      _bar_colours_3.peity("bar", {
        fill: function (_, i, all) {
          var g = parseInt((i / all.length) * 255);
          return "rgb(255, " + g + ", 0)";
        },
      });
    }

    var _pie_colours_1 = $(".pie-colours-1");
    if (_pie_colours_1.exists()) {
      _pie_colours_1.peity("pie", {
        fill: ["#838df4", "#f36c9b", "#ffea04", "#4b4d56"],
      });
    }

    var _pie_colours_2 = $(".pie-colours-2");
    if (_pie_colours_2.exists()) {
      _pie_colours_2.peity("pie", {
        fill: function (_, i, all) {
          var g = parseInt((i / all.length) * 255);
          return "rgb(255, " + g + ", 0)";
        },
      });
    }

    /* ------------------------------------------------------------------------
     * Rangeslider
     * ------------------------------------------------------------------------ */
    var _rangeslider_basic = $("#rangeslider-basic");
    if (_rangeslider_basic.exists()) {
      _rangeslider_basic.ionRangeSlider({
        min: 100,
        max: 1000,
        from: 550,
      });
    }

    var _rangeslider_double = $("#rangeslider-double");
    if (_rangeslider_double.exists()) {
      _rangeslider_double.ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$",
      });
    }

    var _rangeslider_range_step = $("#rangeslider-range-step");
    if (_rangeslider_range_step.exists()) {
      _rangeslider_range_step.ionRangeSlider({
        type: "double",
        grid: true,
        min: -1000,
        max: 1000,
        from: -500,
        to: 500,
      });
    }

    var _rangeslider_custom_values = $("#rangeslider-custom-values");
    if (_rangeslider_custom_values.exists()) {
      var custom_values = [0, 10, 100, 1000, 10000, 100000, 1000000];

      // be careful! FROM and TO should be index of values array
      var my_from = custom_values.indexOf(10);
      var my_to = custom_values.indexOf(10000);

      _rangeslider_custom_values.ionRangeSlider({
        type: "double",
        grid: true,
        from: my_from,
        to: my_to,
        values: custom_values,
      });
    }

    var _rangeslider_strings = $("#rangeslider-strings");
    if (_rangeslider_strings.exists()) {
      _rangeslider_strings.ionRangeSlider({
        grid: true,
        from: new Date().getMonth(),
        values: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      });
    }

    var _rangeslider_prettify = $("#rangeslider-prettify");
    if (_rangeslider_prettify.exists()) {
      function my_prettify(n) {
        var num = Math.log2(n);
        return n + " → " + +num.toFixed(3);
      }

      _rangeslider_prettify.ionRangeSlider({
        skin: "big",
        grid: true,
        min: 1,
        max: 1000,
        from: 100,
        prettify: my_prettify,
      });
    }

    /* ------------------------------------------------------------------------
     * Sparkline
     * ------------------------------------------------------------------------ */

    var _sparkline_line = $("#sparkline-line");
    if (_sparkline_line.exists()) {
      _sparkline_line.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "100%",
          height: "200",
          lineWidth: 2,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0.1)",
        }
      );
      _sparkline_line.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "100%",
          height: "200",
          lineWidth: 2,
          chartRangeMax: 40,
          lineColor: "#335eea",
          fillColor: "rgba(131, 141, 244, 0.3)",
          composite: !0,
        }
      );
    }

    var _sparkline_bar = $("#sparkline-bar");
    if (_sparkline_bar.exists()) {
      _sparkline_bar.sparkline(
        [
          5,
          6,
          7,
          2,
          0,
          -4,
          -2,
          4,
          5,
          6,
          7,
          2,
          0 - 4,
          -2,
          -6,
          -2,
          6,
          7,
          2,
          6,
          7,
          2,
        ],
        {
          type: "bar",
          width: "100%",
          height: "200",
          barWidth: 10,
          barColor: "#335eea",
          negBarColor: "#f36c9b",
          barSpacing: 2,
        }
      );
    }

    var _sparkline_pie = $("#sparkline-pie");
    if (_sparkline_pie.exists()) {
      _sparkline_pie.sparkline([1, 1, 2], {
        type: "pie",
        width: "100%",
        sliceColors: ["#335eea", "#f36c9b", "#50d294"],
        height: "200",
      });
    }

    var _sparklinediscrete = $("#sparkline-discrete");
    if (_sparklinediscrete.exists()) {
      _sparklinediscrete.sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4], {
        type: "discrete",
        width: "280",
        height: "200",
      });
    }

    var _sparkline_composite = $("#sparkline-composite");
    if (_sparkline_composite.exists()) {
      _sparkline_composite.sparkline(
        [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12],
        {
          type: "line",
          width: "100%",
          height: "200",
          lineColor: "#ebeef0",
          lineWidth: 2,
          fillColor: "rgba(0,0,0,0.1)",
          highlightLineColor: "rgba(0,0,0,0.2)",
          highlightSpotColor: "rgba(0,0,0,0.3)",
        }
      );
      _sparkline_composite.sparkline(
        [3, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12, 7, 10, 12, 7, 4],
        {
          type: "bar",
          height: "200",
          barWidth: "10",
          barSpacing: "2",
          composite: !0,
          barColor: "#335eea",
        }
      );
    }

    var _sparklinebar02 = $("#sparkline-bar-02");
    if (_sparklinebar02.exists()) {
      _sparklinebar02.sparkline(
        [4, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12, 7, 10, 12, 7, 4],
        {
          type: "bar",
          width: "100%",
          height: "200",
          barWidth: 10,
          barColor: "#335eea",
          negBarColor: "#f36c9b",
          barSpacing: 2,
        }
      );
    }

    var _sparklinebar03 = $("#sparkline-bar-03");
    if (_sparklinebar03.length) {
      _sparklinebar03.sparkline(
        [4, 6, 7, 8, 6, 4, 7, 10, 12, 7, 4, 9, 12, 13, 11, 12, 7, 10, 12, 7, 4],
        {
          type: "bar",
          width: "100%",
          height: "50",
          barWidth: 6,
          barColor: "#335eea",
          negBarColor: "#f36c9b",
          barSpacing: 2,
        }
      );
    }

    var _sparklineline = $("#statistics-sparkline-line");
    if (_sparklineline.length) {
      _sparklineline.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline02 = $("#statistics-sparkline-line-02");
    if (_sparklineline02.length) {
      _sparklineline02.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline03 = $("#statistics-sparkline-line-03");
    if (_sparklineline03.length) {
      _sparklineline03.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline04 = $("#statistics-sparkline-line-04");
    if (_sparklineline04.length) {
      _sparklineline04.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline05 = $("#statistics-sparkline-line-05");
    if (_sparklineline05.length) {
      _sparklineline05.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline06 = $("#statistics-sparkline-line-06");
    if (_sparklineline06.length) {
      _sparklineline06.sparkline(
        [35, 26, 28, 22, 22, 35, 40, 10, 23, 23, 12, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline07 = $("#statistics-sparkline-line-07");
    if (_sparklineline07.length) {
      _sparklineline07.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline08 = $("#statistics-sparkline-line-08");
    if (_sparklineline08.length) {
      _sparklineline08.sparkline(
        [
          10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28, 10, 16, 20, 6, 26,
          30, 40, 10, 23, 23, 60, 26, 28,
        ],
        {
          type: "line",
          width: "160",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }

    var _sparklineline09 = $("#statistics-sparkline-line-09");
    if (_sparklineline09.length) {
      _sparklineline09.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline10 = $("#statistics-sparkline-line-10");
    if (_sparklineline10.length) {
      _sparklineline10.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#50d294",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline11 = $("#statistics-sparkline-line-11");
    if (_sparklineline11.length) {
      _sparklineline11.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline12 = $("#statistics-sparkline-line-12");
    if (_sparklineline12.length) {
      _sparklineline12.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline13 = $("#statistics-sparkline-line-13");
    if (_sparklineline13.length) {
      _sparklineline13.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#50d294",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline14 = $("#statistics-sparkline-line-14");
    if (_sparklineline14.length) {
      _sparklineline14.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }
    var _sparklineline15 = $("#statistics-sparkline-line-15");
    if (_sparklineline15.length) {
      _sparklineline15.sparkline(
        [10, 16, 20, 6, 26, 30, 40, 10, 23, 23, 60, 26, 28],
        {
          type: "line",
          width: "80",
          height: "30",
          lineWidth: 2,
          spotRadius: 0,
          chartRangeMax: 50,
          lineColor: "#335eea",
          fillColor: "rgba(0, 0, 0, 0)",
        }
      );
    }

    /* ------------------------------------------------------------------------
     * Summernote
     * ------------------------------------------------------------------------ */
    var _summernote = $(".summernote");
    if (_summernote.exists()) {
      _summernote.summernote({
        height: 713,
      });
    }

    /* ------------------------------------------------------------------------
     * TouchSpin
     * ------------------------------------------------------------------------ */
    var _touch_spin = $("input[name='demo1']");
    if (_touch_spin.exists()) {
      _touch_spin.TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: "%",
      });
    }

    var _touch_spin2 = $("input[name='demo2']");
    if (_touch_spin2.exists()) {
      _touch_spin2.TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix: "$",
      });
    }

    var _touch_demo_vertical = $("input[name='demo_vertical']");
    if (_touch_demo_vertical.exists()) {
      _touch_demo_vertical.TouchSpin({
        verticalbuttons: true,
      });
    }

    var _touch_demo_vertical2 = $("input[name='demo_vertical2']");
    if (_touch_demo_vertical2.exists()) {
      _touch_demo_vertical2.TouchSpin({
        verticalbuttons: true,
        verticalupclass: "glyphicon glyphicon-plus",
        verticaldownclass: "glyphicon glyphicon-minus",
      });
    }

    var _touch_spin3 = $("input[name='demo3']");
    if (_touch_spin3.exists()) {
      _touch_spin3.TouchSpin();
    }

    var _touch_spin3_21 = $("input[name='demo3_21']");
    if (_touch_spin3_21.exists()) {
      _touch_spin3_21.TouchSpin({
        initval: 40,
      });
    }

    var _touch_spin3_22 = $("input[name='demo3_22']");
    if (_touch_spin3_22.exists()) {
      _touch_spin3_22.TouchSpin({
        initval: 40,
      });
    }

    var _touch_spin4 = $("input[name='demo4']");
    if (_touch_spin4.exists()) {
      _touch_spin4.TouchSpin({
        postfix: "a button",
      });
    }

    var _touch_spin4_2 = $("input[name='demo4_2']");
    if (_touch_spin4_2.exists()) {
      _touch_spin4_2.TouchSpin({
        postfix: "a button",
      });
    }

    var _touch_spin6 = $("input[name='demo6']");
    if (_touch_spin6.exists()) {
      _touch_spin6.TouchSpin({
        buttondown_class: "btn btn-link",
        buttonup_class: "btn btn-link",
      });
    }

    /* ------------------------------------------------------------------------
     * Google Map
     * ------------------------------------------------------------------------ */
    var _map_basic = $("#map-basic");
    if (_map_basic.exists()) {
      new GMaps({
        div: "#map-basic",
        lat: 51.507194,
        lng: -0.129072,
      });
    }

    var _maps_markers = $("#maps-markers");
    if (_maps_markers.exists()) {
      var loc_map;
      loc_map = new GMaps({
        el: "#maps-markers",
        lat: 51.507194,
        lng: -0.129072,
        scrollwheel: false,
      });
      loc_map.addMarker({
        lat: 51.507194,
        lng: -0.129072,
        title: "Info wondow for Location Marker",
        infoWindow: {
          content: "<p> Infinity Softway </p>",
        },
      });
    }

    var _maps_street_view = $("#maps-street-view");
    if (_maps_street_view.exists()) {
      GMaps.createPanorama({
        el: "#maps-street-view",
        lat: 51.507194,
        lng: -0.129072,
      });
    }

    var _maps_type = $("#maps-type");
    if (_maps_type.exists()) {
      var type_map;

      type_map = new GMaps({
        div: "#maps-type",
        lat: 51.507194,
        lng: -0.129072,
        mapTypeControlOptions: {
          mapTypeIds: ["hybrid", "roadmap", "satellite", "terrain", "osm"],
        },
      });
      type_map.addMapType("osm", {
        getTileUrl: function (coord, zoom) {
          return (
            "https://a.tile.openstreetmap.org/" +
            zoom +
            "/" +
            coord.x +
            "/" +
            coord.y +
            ".png"
          );
        },
        tileSize: new google.maps.Size(256, 256),
        name: "OpenStreetMap",
        maxZoom: 18,
      });
      type_map.setMapTypeId("osm");
    }

    var _maps_overlays = $("#maps-overlays");
    if (_maps_overlays.exists()) {
      var overlays_map;
      overlays_map = new GMaps({
        div: "#maps-overlays",
        lat: 51.507194,
        lng: -0.129072,
      });
      overlays_map.drawOverlay({
        lat: overlays_map.getCenter().lat(),
        lng: overlays_map.getCenter().lng(),
        content: '<div class="maps-overlay">London </div>',
        verticalAlign: "top",
        horizontalAlign: "center",
      });
    }

    var _maps_georss = $("#maps-georss");
    if (_maps_georss.exists()) {
      var georss_map, infoWindow;
      infoWindow = new google.maps.InfoWindow({});
      georss_map = new GMaps({
        div: "#maps-georss",
        zoom: 12,
        lat: 51.507194,
        lng: -0.129072,
      });
      georss_map.loadFromKML({
        url: "http://api.flickr.com/services/feeds/geo/?g=322338@N20&lang=en-us&format=feed-georss",
        suppressInfoWindows: true,
        events: {
          click: function (point) {
            infoWindow.setContent(point.featureData.infoWindowHtml);
            infoWindow.setPosition(point.latLng);
            infoWindow.open(georss_map.georss_map);
          },
        },
      });
    }

    /* ------------------------------------------------------------------------
     * Calendar
     * ------------------------------------------------------------------------ */
    var _calendar = $("#calendar");
    if (_calendar.exists()) {
      _calendar.fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay",
        },
        defaultDate: "2021-01-01",
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
        drop: function () {
          // is the "remove after drop" checkbox checked?
          if ($("#drop-remove").is(":checked")) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
          }
        },
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: "All Day Event",
            start: "2021-03-01",
            className: "event-primary",
          },
          {
            title: "Long Event",
            start: "2021-03-07",
            end: "2021-03-10",
            className: "event-secondary",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: "2021-03-09T16:00:00",
            className: "event-success",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: "2021-03-16T16:00:00",
            className: "event-danger",
          },
          {
            title: "Conference",
            start: "2021-03-11",
            end: "2021-03-13",
            className: "event-warning",
          },
          {
            title: "Meeting",
            start: "2021-03-12T10:30:00",
            end: "2021-03-12T12:30:00",
            className: "event-info",
          },
          {
            title: "Lunch",
            start: "2021-03-12T12:00:00",
          },
          {
            title: "Meeting",
            start: "2021-03-12T14:30:00",
            className: "event-light",
          },
          {
            title: "Happy Hour",
            start: "2021-03-12T17:30:00",
          },
          {
            title: "Dinner",
            start: "2021-03-12T20:00:00",
            className: "event-primary",
          },
          {
            title: "Birthday Party",
            start: "2021-03-13T07:00:00",
            className: "event-info",
          },
          {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2021-03-28",
            className: "event-light",
          },
        ],
      });
    }

    var _external_events = $("#external-events .fc-event");
    if (_external_events.exists()) {
      _external_events.each(function () {
        // store data so the calendar knows to render an event upon drop
        $(this).data("event", {
          title: $.trim($(this).text()), // use the element's text as the event title
          stick: true, // maintain when user navigates (see docs on the renderEvent method)
          color: $(this).data("color"),
        });

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex: 999,
          revert: true, // will cause the event to go back to its
          revertDuration: 0, //  original position after the drag
        });
      });
    }

    // page is now ready, initialize the calendar...
    var _calendar = $("#calendar");
    if (_calendar.exists()) {
      _calendar.fullCalendar({
        // put your options and callbacks here
        header: {
          left: "prev,next today",
          center: "title",
          right: "month,agendaWeek,agendaDay,listMonth",
        },
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        droppable: true, // this allows things to be dropped onto the calendar
      });
    }

    var _calendar_list = $("#calendar-list");
    if (_calendar_list.exists()) {
      _calendar_list.fullCalendar({
        header: {
          left: "prev,next today",
          center: "title",
          right: "listDay,listWeek,month",
        },

        // customize the button names,
        // otherwise they'd all just say "list"
        views: {
          listDay: { buttonText: "list day" },
          listWeek: { buttonText: "list week" },
        },

        defaultView: "listWeek",
        defaultDate: "2021-03-12",
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: "All Day Event",
            start: "2021-03-01",
          },
          {
            title: "Long Event",
            start: "2021-03-07",
            end: "2021-03-10",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: "2021-03-09T16:00:00",
          },
          {
            id: 999,
            title: "Repeating Event",
            start: "2021-03-16T16:00:00",
          },
          {
            title: "Conference",
            start: "2021-03-11",
            end: "2021-03-13",
          },
          {
            title: "Meeting",
            start: "2021-03-12T10:30:00",
            end: "2021-03-12T12:30:00",
          },
          {
            title: "Lunch",
            start: "2021-03-12T12:00:00",
          },
          {
            title: "Meeting",
            start: "2021-03-12T14:30:00",
          },
          {
            title: "Happy Hour",
            start: "2021-03-12T17:30:00",
          },
          {
            title: "Dinner",
            start: "2021-03-12T20:00:00",
          },
          {
            title: "Birthday Party",
            start: "2021-03-13T07:00:00",
          },
          {
            title: "Click for Google",
            url: "http://google.com/",
            start: "2021-03-28",
          },
        ],
      });
    }

    var _start_tour = $("#start-tour");
    if (_start_tour.exists()) {
      // Instance the tour
      var tour = new Tour({
        debug: false,
        backdrop: true,
        steps: [
          {
            element: "#tour-01",
            title: "Title of my step",
            content: "Content of my step",
          },
          {
            element: "#tour-02",
            title: "Title of my step",
            content: "Content of my step",
          },
          {
            element: "#tour-03",
            title: "Title of my step",
            content: "Content of my step",
          },
        ],
      });

      // Initialize the tour
      tour.init();
      // start tour
      _start_tour.click(function () {
        tour.restart();
      });
    }

    /* end document.ready */
  });
})(jQuery); // End of use strict
