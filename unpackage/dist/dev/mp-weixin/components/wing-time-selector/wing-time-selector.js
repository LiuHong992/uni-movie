(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/wing-time-selector/wing-time-selector"],{

/***/ 192:
/*!********************************************************************************************!*\
  !*** C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wing-time-selector.vue?vue&type=template&id=e5e1f05a& */ 193);
/* harmony import */ var _wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wing-time-selector.vue?vue&type=script&lang=js& */ 195);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 193:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue?vue&type=template&id=e5e1f05a& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wing-time-selector.vue?vue&type=template&id=e5e1f05a& */ 194);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_template_id_e5e1f05a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 194:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue?vue&type=template&id=e5e1f05a& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 195:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./wing-time-selector.vue?vue&type=script&lang=js& */ 196);
/* harmony import */ var _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_2_6_5_20200314_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_wing_time_selector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 196:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/asus/Desktop/uni-movie/components/wing-time-selector/wing-time-selector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      dates: [],
      years: [],
      year: 2020,
      beginYear: 1900,
      endYear: 2050,
      months: [],
      month: 1,
      beginMonth: 1,
      endMonth: 12,
      days: [],
      day: 1,
      beginDay: 1,
      endDay: 31,
      hours: [],
      hour: 0,
      beginHour: 0,
      endHour: 23,
      minutes: [],
      minute: 0,
      beginMinute: 0,
      endMinute: 59,
      seconds: [],
      second: 0,
      beginSecond: 0,
      endSecond: 59,
      value: [],
      showMode: this.showType,
      disabled: this.isClick };

  },
  props: {
    showType: {
      type: String,
      default: 'dateToTime' },

    beginDate: {
      type: String,
      default: '1900-01-01' },

    beginTime: {
      type: String,
      default: '00:00:00' },

    endDate: {
      type: String,
      default: '2050-12-31' },

    endTime: {
      type: String,
      default: '23:59:59' },

    isClick: {
      type: Boolean,
      default: false } },


  watch: {
    showType: function showType(oldValue, newValue) {
      // console.log('showType传入数值变化：', oldValue + '->' + newValue);
      this.showMode = newValue;
    },
    isClick: function isClick(oldValue, newValue) {
      // console.log('isClick传入数值变化：', oldValue + '->' + newValue);
      this.disabled = newValue;
    } },

  created: function created() {
    // console.log('========传参数==========',this.beginDate)
    if (this.getMillisecond(this.beginDate) > this.getMillisecond(this.endDate)) {
      var date = this.beginDate;
      this.beginDate = this.endDate;
      this.endDate = date;
    }
    if (this.getMillisecond('2020-01-01 ' + this.beginTime) > this.getMillisecond('2020-01-01 ' + this.endTime)) {
      var time = this.beginTime;
      this.beginTime = this.endTime;
      this.endTime = time;
    }
    // 日期
    var beginDateList = this.beginDate.split('-');
    this.beginYear = beginDateList[0];
    this.beginMonth = beginDateList[1].charAt(0) == '0' ? beginDateList[1].charAt(1) : beginDateList[1];
    this.beginDay = beginDateList[2].charAt(0) == '0' ? beginDateList[2].charAt(1) : beginDateList[2];
    var endDateList = this.endDate.split('-');
    this.endYear = endDateList[0];
    this.endMonth = endDateList[1].charAt(0) == '0' ? endDateList[1].charAt(1) : endDateList[1];
    this.endDay = endDateList[2].charAt(0) == '0' ? endDateList[2].charAt(1) : endDateList[2];
    // 时间
    var beginTimeList = this.beginTime.split(':');
    this.beginHour = beginTimeList[0].charAt(0) == '0' ? beginTimeList[0].charAt(1) : beginTimeList[0];
    this.beginMinute = beginTimeList[1].charAt(0) == '0' ? beginTimeList[1].charAt(1) : beginTimeList[1];
    this.beginSecond = beginTimeList[2].charAt(0) == '0' ? beginTimeList[2].charAt(1) : beginTimeList[2];
    var endTimeList = this.endTime.split(':');
    this.endHour = endTimeList[0].charAt(0) == '0' ? endTimeList[0].charAt(1) : endTimeList[0];
    this.endMinute = endTimeList[1].charAt(0) == '0' ? endTimeList[1].charAt(1) : endTimeList[1];
    this.endSecond = endTimeList[2].charAt(0) == '0' ? endTimeList[2].charAt(1) : endTimeList[2];
    this.getDate();
    for (var i = parseInt(this.beginYear); i <= parseInt(this.endYear); i++) {
      this.years.push(i + '年');
    }
    this.getMonths();
    this.getDays();
    for (var i = parseInt(this.beginHour); i <= parseInt(this.endHour); i++) {
      this.hours.push(i + '时');
    }
    if (this.beginHour == this.endHour) {
      if (parseInt(this.beginMinute) > parseInt(this.endMinute)) {
        for (var i = parseInt(this.endMinute); i <= parseInt(this.beginMinute); i++) {
          this.minutes.push(i + '分');
        }
      } else {
        for (var i = parseInt(this.beginMinute); i <= parseInt(this.endMinute); i++) {
          this.minutes.push(i + '分');
        }
      }
    } else {
      for (var i = parseInt(this.beginMinute); i <= 59; i++) {
        this.minutes.push(i + '分');
      }
    }
    if (this.beginMinute == this.endMinute) {
      if (parseInt(this.beginSecond) > parseInt(this.endSecond)) {
        for (var i = parseInt(this.endSecond); i <= parseInt(this.beginSecond); i++) {
          this.seconds.push(i + '秒');
        }
      } else {
        for (var i = parseInt(this.beginSecond); i <= parseInt(this.endSecond); i++) {
          this.seconds.push(i + '秒');
        }
      }
    } else {
      for (var i = parseInt(this.beginSecond); i <= 59; i++) {
        this.seconds.push(i + '秒');
      }
    }
    this.getData();
  },
  methods: {
    scroll: function scroll(e) {
      // console.log('每一列滑动监听:', e);
      var column = e.detail.column;
      var value = e.detail.value;
      switch (this.showMode) {
        case 'time':
          {
            if (column == 0) {
              this.minutes = [];
              if (this.hours.length == 1) {
                if (parseInt(this.beginMinute) > parseInt(this.endMinute)) {
                  for (var i = parseInt(this.endMinute); i <= parseInt(this.beginMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                } else {
                  for (var i = parseInt(this.beginMinute); i <= parseInt(this.endMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                }
              } else {
                if (value == 0) {
                  for (var i = parseInt(this.beginMinute); i <= 59; i++) {
                    this.minutes.push(i + '分');
                  }
                } else if (value == this.hours.length - 1) {
                  for (var i = 0; i <= parseInt(this.endMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                } else {
                  for (var i = 0; i <= 59; i++) {
                    this.minutes.push(i + '分');
                  }
                }
              }
              this.dates[1] = this.minutes;
            } else if (column == 1) {
              this.seconds = [];
              if (this.minutes.length == 1) {
                if (parseInt(this.beginSecond) > parseInt(this.endSecond)) {
                  for (var i = parseInt(this.endSecond); i <= parseInt(this.beginSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                } else {
                  for (var i = parseInt(this.beginSecond); i <= parseInt(this.endSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                }
              } else {
                if (value == 0) {
                  for (var i = parseInt(this.beginSecond); i <= 59; i++) {
                    this.seconds.push(i + '秒');
                  }
                } else if (value == this.minutes.length - 1) {
                  for (var i = 0; i <= parseInt(this.endSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                } else {
                  for (var i = 0; i <= 59; i++) {
                    this.seconds.push(i + '秒');
                  }
                }
                this.dates[2] = this.seconds;
              }
            }
          }
          break;
        case 'monthToDay':
          {
            this.getMonths();
            if (column == 0) {
              this.month = this.months[value].substring(0, this.months[value].length - 1);
              this.getDays();
            }

            this.dates[0] = this.months;
            this.dates[1] = this.days;
          }
          break;
        case 'yearToMonth':
          {
            if (column == 0) {
              this.year = this.years[value].substring(0, 4);
              if (value == 0) {
                this.month = this.beginMonth;
              }
            }
            this.getMonths();
            if (column == 1) {
              this.month = this.months[value].substring(0, this.months[value].length - 1);
            }
            this.dates[1] = this.months;
          }
          break;
        case 'dateToTime':{
            if (column == 4) {
              this.seconds = [];
              if (this.minutes.length == 1) {
                if (parseInt(this.beginSecond) > parseInt(this.endSecond)) {
                  for (var i = parseInt(this.endSecond); i <= parseInt(this.beginSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                } else {
                  for (var i = parseInt(this.beginSecond); i <= parseInt(this.endSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                }
              } else {
                if (value == 0) {
                  for (var i = parseInt(this.beginSecond); i <= 59; i++) {
                    this.seconds.push(i + '秒');
                  }
                } else if (value == this.minutes.length - 1) {
                  for (var i = 0; i <= parseInt(this.endSecond); i++) {
                    this.seconds.push(i + '秒');
                  }
                } else {
                  for (var i = 0; i <= 59; i++) {
                    this.seconds.push(i + '秒');
                  }
                }
              }
            }
            this.dates[5] = this.seconds;
          }
        case 'yearToMinute':{
            if (column == 3) {
              this.minutes = [];
              if (this.hours.length == 1) {
                if (parseInt(this.beginMinute) > parseInt(this.endMinute)) {
                  for (var i = parseInt(this.endMinute); i <= parseInt(this.beginMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                } else {
                  for (var i = parseInt(this.beginMinute); i <= parseInt(this.endMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                }
              } else {
                if (value == 0) {
                  for (var i = parseInt(this.beginMinute); i <= 59; i++) {
                    this.minutes.push(i + '分');
                  }
                } else if (value == this.hours.length - 1) {
                  for (var i = 0; i <= parseInt(this.endMinute); i++) {
                    this.minutes.push(i + '分');
                  }
                } else {
                  for (var i = 0; i <= 59; i++) {
                    this.minutes.push(i + '分');
                  }
                }
              }
            }
            this.dates[4] = this.minutes;
          }
        case 'date':
          {
            if (column == 0) {
              this.year = this.years[value].substring(0, 4);
              if (value == 0) {
                this.month = this.beginMonth;
              }
              if (value == this.years.length - 1) {
                this.month = this.endMonth;
              }
            }
            this.getMonths();
            if (column == 1) {
              this.month = this.months[value].length == 3 ? this.months[value].substring(0, 2) : this.months[value].substring(0, 1);
            }
            this.getDays();
            this.dates[1] = this.months;
            this.dates[2] = this.days;
          }
          break;}

    },
    confirm: function confirm(e) {
      // console.log('确定:', e);

      var value = e.detail.value;
      var date = '';
      switch (this.showMode) {
        case 'year':
          {
            date = {
              key: this.years[value[0]].substring(0, 4),
              value: this.years[value[0]] };

          }
          break;
        case 'month':
          {
            date = {
              key: this.months[value[0]].substring(0, this.months[value[0]].length - 1),
              value: this.months[value[0]] };

          }
          break;
        case 'day':
          {
            date = {
              key: this.days[value[0]].substring(0, this.days[value[0]].length - 1),
              value: this.days[value[0]] };

          }
          break;
        case 'hour':
          {
            date = {
              key: this.hours[value[0]].substring(0, this.hours[value[0]].length - 1),
              value: this.hours[value[0]] };

          }
          break;
        case 'minute':
          {
            date = {
              key: this.minutes[value[0]].substring(0, this.minutes[value[0]].length - 1),
              value: this.minutes[value[0]] };

          }
          break;
        case 'second':
          {
            date = {
              key: this.seconds[value[0]].substring(0, this.seconds[value[0]].length - 1),
              value: this.seconds[value[0]] };

          }
          break;
        case 'yearToMonth':
          {
            var month = this.months[value[1]].substring(0, this.months[value[1]].length - 1);
            date = {
              year: this.years[value[0]].substring(0, 4),
              month: month,
              key: this.years[value[0]].substring(0, 4) + '-' + (month.length == 1 ? '0' + month : month),
              value: this.years[value[0]] + this.months[value[1]] };

          }
          break;
        case 'monthToDay':
          {
            var _month = this.months[value[0]].substring(0, this.months[value[0]].length - 1);
            var day = this.days[value[1]].substring(0, this.days[value[1]].length - 1);
            date = {
              month: _month,
              day: day,
              key: (_month.length == 1 ? '0' + _month : _month) + '-' + (day.length == 1 ? '0' + day : day),
              value: this.months[value[0]] + this.days[value[1]] };

          }
          break;
        case 'hourToMinute':
          {
            var hour = this.hours[value[0]].substring(0, this.hours[value[0]].length - 1);
            var minute = this.minutes[value[1]].substring(0, this.minutes[value[1]].length - 1);
            date = {
              hour: hour,
              minute: minute,
              key: (hour.length == 1 ? '0' + hour : hour) + ':' + (minute.length == 1 ? '0' + minute : minute),
              value: this.hours[value[0]] + this.minutes[value[1]] };

          }
          break;
        case 'minuteToSecond':
          {
            var _minute = this.minutes[value[0]].substring(0, this.minutes[value[0]].length - 1);
            var second = this.seconds[value[1]].substring(0, this.seconds[value[1]].length - 1);
            date = {
              key: (_minute.length == 1 ? '0' + _minute : _minute) + ':' + (second.length == 1 ? '0' + second : second),
              value: this.minutes[value[0]] + this.seconds[value[1]] };

          }
          break;
        case 'date':
          {
            var _month2 = this.months[value[1]].substring(0, this.months[value[1]].length - 1);
            var _day = this.days[value[2]].substring(0, this.days[value[2]].length - 1);
            date = {
              year: this.years[value[0]].substring(0, 4),
              month: _month2,
              day: _day,
              key: this.years[value[0]].substring(0, 4) + '-' + (_month2.length == 1 ? '0' + _month2 : _month2) + '-' + (_day.length == 1 ? '0' + _day : _day),
              value: this.years[value[0]] + this.months[value[1]] + this.days[value[2]] };

          }
          break;
        case 'time':
          {
            var _hour = this.hours[value[0]].substring(0, this.hours[value[0]].length - 1);
            var _minute2 = this.minutes[value[1]].substring(0, this.minutes[value[1]].length - 1);
            var _second = this.seconds[value[2]].substring(0, this.seconds[value[2]].length - 1);
            date = {
              hour: _hour,
              minute: _minute2,
              second: _second,
              key: (_hour.length == 1 ? '0' + _hour : _hour) + ':' + (_minute2.length == 1 ? '0' + _minute2 : _minute2) + ':' + (_second.length == 1 ? '0' + _second : _second),
              value: this.hours[value[0]] + this.minutes[value[1]] + this.seconds[value[2]] };

          }
          break;
        case 'yearToMinute':
          {
            var _month3 = this.months[value[1]].substring(0, this.months[value[1]].length - 1);
            var _day2 = this.days[value[2]].substring(0, this.days[value[2]].length - 1);
            var _hour2 = this.hours[value[3]].substring(0, this.hours[value[3]].length - 1);
            var _minute3 = this.minutes[value[4]].substring(0, this.minutes[value[4]].length - 1);
            date = {
              year: this.years[value[0]].substring(0, 4),
              month: _month3,
              day: _day2,
              hour: _hour2,
              minute: _minute3,
              key:
              this.years[value[0]].substring(0, 4) +
              '-' + (
              _month3.length == 1 ? '0' + _month3 : _month3) +
              '+' + (
              _day2.length == 1 ? '0' + _day2 : _day2) +
              ' ' + (
              _hour2.length == 1 ? '0' + _hour2 : _hour2) +
              ':' + (
              _minute3.length == 1 ? '0' + _minute3 : _minute3),
              value: this.years[value[0]] + this.months[value[1]] + this.days[value[2]] + this.hours[value[3]] + this.minutes[value[4]] };

          }
          break;
        default:
          {
            var _month4 = this.months[value[1]].substring(0, this.months[value[1]].length - 1);
            var _day3 = this.days[value[2]].substring(0, this.days[value[2]].length - 1);
            var _hour3 = this.hours[value[3]].substring(0, this.hours[value[3]].length - 1);
            var _minute4 = this.minutes[value[4]].substring(0, this.minutes[value[4]].length - 1);
            var _second2 = this.seconds[value[5]].substring(0, this.seconds[value[5]].length - 1);
            date = {
              year: this.years[value[0]].substring(0, 4),
              month: _month4,
              day: _day3,
              hour: _hour3,
              minute: _minute4,
              second: _second2,
              key:
              this.years[value[0]].substring(0, 4) +
              '-' + (
              _month4.length == 1 ? '0' + _month4 : _month4) +
              '-' + (
              _day3.length == 1 ? '0' + _day3 : _day3) +
              ' ' + (
              _hour3.length == 1 ? '0' + _hour3 : _hour3) +
              ':' + (
              _minute4.length == 1 ? '0' + _minute4 : _minute4) +
              ':' + (
              _second2.length == 1 ? '0' + _second2 : _second2),
              value: this.years[value[0]] + this.months[value[1]] + this.days[value[2]] + this.hours[value[3]] + this.minutes[value[4]] + this.seconds[value[5]] };

          }
          break;}

      this.$emit('btnConfirm', date);
    },
    cancel: function cancel(e) {
      // console.log('取消:', e);
      this.$emit('btnCancel');
    },
    getMonths: function getMonths() {
      this.months = [];
      if (parseInt(this.beginYear) == parseInt(this.year) && parseInt(this.endYear) == parseInt(this.year)) {
        for (var i = parseInt(this.beginMonth); i <= parseInt(this.endMonth); i++) {
          this.months.push(i + '月');
        }
      } else if (parseInt(this.beginYear) >= parseInt(this.year)) {
        for (var i = parseInt(this.beginMonth); i <= 12; i++) {
          this.months.push(i + '月');
        }
      } else if (parseInt(this.endYear) <= parseInt(this.year)) {
        for (var i = 1; i <= parseInt(this.endMonth); i++) {
          this.months.push(i + '月');
        }
      } else {
        for (var i = 1; i <= 12; i++) {
          this.months.push(i + '月');
        }
      }
    },
    getDays: function getDays() {
      this.days = [];
      switch (this.month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        case '1':
        case '3':
        case '5':
        case '7':
        case '8':
        case '10':
        case '12':
          {
            if (parseInt(this.beginDay) < 0 || parseInt(this.beginDay) > 31) {
              this.beginDay = 1;
            }
            if (parseInt(this.endDay) < 0 || parseInt(this.endDay) > 31) {
              this.endDay = 31;
            }
            if (
            parseInt(this.beginYear) == parseInt(this.year) &&
            parseInt(this.endYear) == parseInt(this.year) &&
            parseInt(this.beginMonth) == parseInt(this.month) &&
            parseInt(this.endMonth) == parseInt(this.month))
            {
              for (var i = parseInt(this.beginDay); i <= parseInt(this.endDay); i++) {
                this.days.push(i + '日');
              }
            } else if (
            parseInt(this.beginYear) == parseInt(this.year) &&
            parseInt(this.endYear) == parseInt(this.year) &&
            parseInt(this.beginMonth) == parseInt(this.month) ||
            parseInt(this.beginYear) >= parseInt(this.year) && parseInt(this.beginMonth) == parseInt(this.month))
            {
              for (var i = parseInt(this.beginDay); i <= 31; i++) {
                this.days.push(i + '日');
              }
            } else if (
            parseInt(this.beginYear) == parseInt(this.year) && parseInt(this.endYear) == parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month) ||
            parseInt(this.endYear) <= parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month))
            {
              for (var i = 1; i <= parseInt(this.endDay); i++) {
                this.days.push(i + '日');
              }
            } else {
              for (var i = 1; i <= 31; i++) {
                this.days.push(i + '日');
              }
            }
          }
          break;
        case 4:
        case 6:
        case 9:
        case 11:
        case '4':
        case '6':
        case '9':
        case '11':
          {
            if (parseInt(this.beginDay) < 0 || parseInt(this.beginDay) > 30) {
              this.beginDay = 1;
            }
            if (parseInt(this.endDay) < 0 || parseInt(this.endDay) > 30) {
              this.endDay = 30;
            }
            if (
            parseInt(this.beginYear) == parseInt(this.year) &&
            parseInt(this.endYear) == parseInt(this.year) &&
            parseInt(this.beginMonth) == parseInt(this.month) &&
            parseInt(this.endMonth) == parseInt(this.month))
            {
              for (var i = parseInt(this.beginDay); i <= parseInt(this.endDay); i++) {
                this.days.push(i + '日');
              }
            } else if (
            parseInt(this.beginYear) == parseInt(this.year) &&
            parseInt(this.endYear) == parseInt(this.year) &&
            parseInt(this.beginMonth) == parseInt(this.month) ||
            parseInt(this.beginYear) >= parseInt(this.year) && parseInt(this.beginMonth) == parseInt(this.month))
            {
              for (var i = parseInt(this.beginDay); i <= 30; i++) {
                this.days.push(i + '日');
              }
            } else if (
            parseInt(this.beginYear) == parseInt(this.year) && parseInt(this.endYear) == parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month) ||
            parseInt(this.endYear) <= parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month))
            {
              for (var i = 1; i <= parseInt(this.endDay); i++) {
                this.days.push(i + '日');
              }
            } else {
              for (var i = 1; i <= 30; i++) {
                this.days.push(i + '日');
              }
            }
          }
          break;
        case 2:
        case '2':
          {
            if (parseInt(this.year) % 4 == 0 && parseInt(this.year) % 100 != 0 || parseInt(this.year) % 400 == 0) {
              if (parseInt(this.beginDay) < 0 || parseInt(this.beginDay) > 29) {
                this.beginDay = 1;
              }
              if (parseInt(this.endDay) < 0 || parseInt(this.endDay) > 29) {
                this.endDay = 29;
              }
              if (
              parseInt(this.beginYear) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.beginMonth) == parseInt(this.month) &&
              parseInt(this.endMonth) == parseInt(this.month))
              {
                for (var i = parseInt(this.beginDay); i <= parseInt(this.endDay); i++) {
                  this.days.push(i + '日');
                }
              } else if (
              parseInt(this.beginYear) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.beginMonth) == parseInt(this.month) ||
              parseInt(this.beginYear) >= parseInt(this.year) && parseInt(this.beginMonth) == parseInt(this.month))
              {
                for (var i = parseInt(this.beginDay); i <= 29; i++) {
                  this.days.push(i + '日');
                }
              } else if (
              parseInt(this.beginYea) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.endMonth) == parseInt(this.month) ||
              parseInt(this.endYear) <= parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month))
              {
                for (var i = 1; i <= parseInt(this.endDay); i++) {
                  this.days.push(i + '日');
                }
              } else {
                for (var i = 1; i <= 29; i++) {
                  this.days.push(i + '日');
                }
              }
            } else {
              if (parseInt(this.beginDay) < 0 || parseInt(this.beginDay) > 28) {
                this.beginDay = 1;
              }
              if (parseInt(this.endDay) < 0 || parseInt(this.endDay) > 28) {
                this.endDay = 28;
              }
              if (
              parseInt(this.beginYear) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.beginMonth) == parseInt(this.month) &&
              parseInt(this.endMonth) == parseInt(this.month))
              {
                for (var i = parseInt(this.beginDay); i <= parseInt(this.endDay); i++) {
                  this.days.push(i + '日');
                }
              } else if (
              parseInt(this.beginYear) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.beginMonth) == parseInt(this.month) ||
              parseInt(this.beginYear) >= parseInt(this.year) && parseInt(this.beginMonth) == parseInt(this.month))
              {
                for (var i = parseInt(this.beginDay); i <= 28; i++) {
                  this.days.push(i + '日');
                }
              } else if (
              parseInt(this.beginYear) == parseInt(this.year) &&
              parseInt(this.endYear) == parseInt(this.year) &&
              parseInt(this.endMonth) == parseInt(this.month) ||
              parseInt(this.endYear) <= parseInt(this.year) && parseInt(this.endMonth) == parseInt(this.month))
              {
                for (var i = 1; i <= parseInt(this.endDay); i++) {
                  this.days.push(i + '日');
                }
              } else {
                for (var i = 1; i <= 28; i++) {
                  this.days.push(i + '日');
                }
              }
            }
          }
          break;}

    },
    getDate: function getDate() {
      var date = new Date();
      this.year = date.getFullYear();
      if (parseInt(this.beginYear) > parseInt(this.year)) {
        this.year = this.beginYear;
        this.month = this.beginMonth;
        this.day = this.beginDay;
      } else if (parseInt(this.endYear) < parseInt(this.year)) {
        this.year = this.endYear;
        this.month = this.endMonth;
        this.day = this.endDay;
      } else {
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
      }

      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    },
    getData: function getData() {var _this = this;
      this.dates = [];
      var yearIndex = 0;
      var monthIndex = 0;
      var dayIndex = 0;
      var hourIndex = 0;
      var minuteIndex = 0;
      var secondIndex = 0;
      switch (this.showMode) {
        case 'year':
          {
            this.dates.push(this.years);
            this.years.map(function (item, index) {
              if (_this.year == item.substring(0, 4)) {
                yearIndex = index;
              }
            });
            this.value = [yearIndex];
          }
          break;
        case 'month':
          {
            this.dates.push(this.months);
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.value = [monthIndex];
          }
          break;
        case 'day':
          {
            this.dates.push(this.days);
            this.days.map(function (item, index) {
              if (_this.day == item.substring(0, item.length - 1)) {
                dayIndex = index;
              }
            });
            this.value = [dayIndex];
          }
          break;
        case 'hour':
          {
            this.dates.push(this.hours);
            this.hours.map(function (item, index) {
              if (_this.hour == item.substring(0, item.length - 1)) {
                hourIndex = index;
              }
            });
            this.value = [hourIndex];
          }
          break;
        case 'minute':
          {
            this.dates.push(this.minutes);
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.value = [minuteIndex];
          }
          break;
        case 'second':
          {
            this.dates.push(this.seconds);
            this.seconds.map(function (item, index) {
              if (_this.second == item.substring(0, item.length - 1)) {
                secondIndex = index;
              }
            });
            this.value = [secondIndex];
          }
          break;
        case 'yearToMonth':
          {
            this.dates.push(this.years);
            this.dates.push(this.months);
            this.years.map(function (item, index) {
              if (_this.year == item.substring(0, 4)) {
                yearIndex = index;
              }
            });
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.value = [yearIndex, monthIndex];
          }
          break;
        case 'monthToDay':
          {
            this.dates.push(this.months);
            this.dates.push(this.days);
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.days.map(function (item, index) {
              if (_this.day == item.substring(0, item.length - 1)) {
                dayIndex = index;
              }
            });
            this.value = [monthIndex, dayIndex];
          }
          break;
        case 'hourToMinute':
          {
            this.dates.push(this.hours);
            this.dates.push(this.minutes);
            this.hours.map(function (item, index) {
              if (_this.hour == item.substring(0, item.length - 1)) {
                hourIndex = index;
              }
            });
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.value = [hourIndex, minuteIndex];
          }
          break;
        case 'minuteToSecond':
          {
            this.dates.push(this.minutes);
            this.dates.push(this.seconds);
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.seconds.map(function (item, index) {
              if (_this.second == item.substring(0, item.length - 1)) {
                secondIndex = index;
              }
            });
            this.value = [minuteIndex, secondIndex];
          }
          break;
        case 'date':
          {
            this.dates.push(this.years);
            this.dates.push(this.months);
            this.dates.push(this.days);
            this.years.map(function (item, index) {
              if (_this.year == item.substring(0, 4)) {
                yearIndex = index;
              }
            });
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.days.map(function (item, index) {
              if (_this.day == item.substring(0, item.length - 1)) {
                dayIndex = index;
              }
            });
            this.value = [yearIndex, monthIndex, dayIndex];
          }
          break;
        case 'time':
          {
            this.dates.push(this.hours);
            this.dates.push(this.minutes);
            this.dates.push(this.seconds);
            this.hours.map(function (item, index) {
              if (_this.hour == item.substring(0, item.length - 1)) {
                hourIndex = index;
              }
            });
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.seconds.map(function (item, index) {
              if (_this.second == item.substring(0, item.length - 1)) {
                secondIndex = index;
              }
            });
            this.value = [hourIndex, minuteIndex, secondIndex];
          }
          break;
        case 'yearToMinute':
          {
            this.dates.push(this.years);
            this.dates.push(this.months);
            this.dates.push(this.days);
            this.dates.push(this.hours);
            this.dates.push(this.minutes);
            this.years.map(function (item, index) {
              if (_this.year == item.substring(0, 4)) {
                yearIndex = index;
              }
            });
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.days.map(function (item, index) {
              if (_this.day == item.substring(0, item.length - 1)) {
                dayIndex = index;
              }
            });
            this.hours.map(function (item, index) {
              if (_this.hour == item.substring(0, item.length - 1)) {
                hourIndex = index;
              }
            });
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.value = [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex];
          }
          break;
        default:
          {
            this.dates.push(this.years);
            this.dates.push(this.months);
            this.dates.push(this.days);
            this.dates.push(this.hours);
            this.dates.push(this.minutes);
            this.dates.push(this.seconds);
            this.years.map(function (item, index) {
              if (_this.year == item.substring(0, 4)) {
                yearIndex = index;
              }
            });
            this.months.map(function (item, index) {
              if (_this.month == item.substring(0, item.length - 1)) {
                monthIndex = index;
              }
            });
            this.days.map(function (item, index) {
              if (_this.day == item.substring(0, item.length - 1)) {
                dayIndex = index;
              }
            });
            this.hours.map(function (item, index) {
              if (_this.hour == item.substring(0, item.length - 1)) {
                hourIndex = index;
              }
            });
            this.minutes.map(function (item, index) {
              if (_this.minute == item.substring(0, item.length - 1)) {
                minuteIndex = index;
              }
            });
            this.seconds.map(function (item, index) {
              if (_this.second == item.substring(0, item.length - 1)) {
                secondIndex = index;
              }
            });
            this.value = [yearIndex, monthIndex, dayIndex, hourIndex, minuteIndex, secondIndex];
          }
          break;}

    },
    // 日期转为时间戳
    getMillisecond: function getMillisecond(date) {
      return new Date(date).getTime();
    } } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/wing-time-selector/wing-time-selector.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wing-time-selector/wing-time-selector-create-component',
    {
        'components/wing-time-selector/wing-time-selector-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(192))
        })
    },
    [['components/wing-time-selector/wing-time-selector-create-component']]
]);
