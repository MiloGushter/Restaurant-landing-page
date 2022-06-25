/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Color styles */\n/* Text-size styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: hsl(0deg, 0%, 13.7%);\n  font-family: \"Roboto Slab\", serif;\n  font-size: 1.5rem;\n}\n\nimg {\n  max-width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2rem;\n}\n\n.container {\n  width: 85%;\n  max-width: 1200px;\n}\n\nheader {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  font-family: \"Lobster Two\", cursive;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-list {\n  display: flex;\n  gap: 20px;\n}\n\n.nav-active {\n  border-bottom: 2px solid white;\n}\n\n.nav-item {\n  display: inline-block;\n  position: relative;\n  font-size: 1.5rem;\n  font-family: \"Lobster Two\", cursive;\n  cursor: pointer;\n}\n.nav-item:not(.nav-active)::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n.nav-item:not(.nav-active):hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.logo {\n  font-size: 3rem;\n  color: white;\n}\n\n.landing-image {\n  width: 100%;\n  max-height: 50vh;\n  object-fit: cover;\n}\n\n.welcome-section {\n  background-color: hsl(34deg, 37.7%, 88%);\n  color: hsl(0deg, 0%, 13.7%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vh;\n}\n\n.welcome-text {\n  max-width: 700px;\n}\n\n.welcome-title {\n  font-size: 3rem;\n}\n\n.welcome-paragraph {\n  max-width: 600px;\n  font-size: 1.5rem;\n}\n\n.working-hours {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10em 0;\n}\n\n.working-hours-title {\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 2em;\n}\n\n.working-schedule {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  text-align: center;\n  gap: 24px;\n}\n\n.schedule-hours {\n  line-height: 2em;\n}\n\nfooter {\n  padding: 2.5em 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attribution {\n  text-align: center;\n  color: hsl(0deg, 0%, 13.7%);\n}\n.attribution a {\n  color: hsl(357deg, 77.7%, 54.3%);\n}\n\n.our-recommendation {\n  background-color: hsl(34deg, 37.7%, 88%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n.our-recommendation-title,\n.menu-title {\n  margin-bottom: 1em;\n}\n\n.recommended-pasta {\n  display: flex;\n  gap: 5em;\n  color: hsl(0deg, 0%, 13.7%);\n}\n\n.dish-wrapper {\n  max-width: 500px;\n}\n\n.dish-title {\n  margin-bottom: 0.5em;\n}\n\n.dish-para {\n  font-size: 1.25rem;\n  margin-bottom: 1em;\n}\n\n.img-wrap {\n  object-fit: cover;\n}\n\n.dish-image {\n  border-radius: 24px;\n}\n\n.menu {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5em 0;\n  color: white;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 4em;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/sass/main.scss"],"names":[],"mappings":"AAwBA,iBAAA;AAKA,qBAAA;AAUA;;;EAGE,sBAAA;AAnCF;;AAsCA;EACE,SAAA;EACA,UAAA;AAnCF;;AAsCA;EACE,2BA1BM;EA2BN,iCAfO;EAgBP,iBApBkB;AAfpB;;AAsCA;EACE,eAAA;AAnCF;;AAsCA;EACE,qBAAA;AAnCF;;AAsCA;EACE,gBAAA;AAnCF;;AAsCA;EACE,eAvCU;AAIZ;;AAsCA;EACE,eA1CU;AAOZ;;AAsCA;EACE,eA7CU;AAUZ;;AAsCA;EACE,UAAA;EACA,iBAAA;AAnCF;;AAsCA;EACE,2CA3DW;EA4DX,mCAnDQ;EAoDR,YAAA;EAtFA,aAAA;EACA,uBAAA;EACA,mBAAA;EAsFA,YAAA;AAjCF;;AAoCA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAjCF;;AAoCA;EACE,aAAA;EACA,SAAA;AAjCF;;AAoCA;EACE,8BAAA;AAjCF;;AAoCA;EACE,qBAAA;EACA,kBAAA;EACA,iBA9EkB;EA+ElB,mCA5EQ;EA6ER,eAAA;AAjCF;AAzEE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,oBAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EACA,uBAAA;EACA,8BAAA;EACA,oCAAA;AA2EJ;AAzEE;EACE,oBAAA;EACA,6BAAA;AA2EJ;;AAqBA;EACE,eAvFU;EAwFV,YAAA;AAlBF;;AAqBA;EACE,WAAA;EACA,gBAAA;EACA,iBAAA;AAlBF;;AAqBA;EACE,wCAvGY;EAwGZ,2BAzGM;EAvBN,aAAA;EACA,uBAAA;EACA,mBAAA;EAgIA,YAAA;AAhBF;;AAkBA;EACE,gBAAA;AAfF;;AAiBA;EACE,eA3GU;AA6FZ;;AAgBA;EACE,gBAAA;EACA,iBA7GkB;AAgGpB;;AAgBA;EACE,2CAvHW;EAwHX,YAAA;EAjJA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiJA,eAAA;AAXF;;AAaA;EACE,eAzHU;EA0HV,kBAAA;EACA,kBAAA;AAVF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,iBA9HkB;EA+HlB,kBAAA;EACA,SAAA;AATF;;AAWA;EACE,gBAAA;AARF;;AAWA;EACE,gBAAA;EAtKA,aAAA;EACA,uBAAA;EACA,mBAAA;AA+JF;;AAQA;EACE,kBAAA;EACA,2BApJM;AA+IR;AAME;EACE,gCApJS;AAgJb;;AAQA;EACE,wCA1JY;EAxBZ,aAAA;EACA,uBAAA;EACA,mBAAA;EAkLA,YAAA;AAHF;;AAMA;;EAEE,kBAAA;AAHF;;AAMA;EACE,aAAA;EACA,QAAA;EACA,2BAxKM;AAqKR;;AAMA;EACE,gBAAA;AAHF;;AAMA;EACE,oBAAA;AAHF;;AAMA;EACE,kBA3KgB;EA4KhB,kBAAA;AAHF;;AAMA;EACE,iBAAA;AAHF;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE,2CA/LW;EAzBX,aAAA;EACA,uBAAA;EACA,mBAAA;EAwNA,cAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,YAAA;EACA,YAAA;AADF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap\");\r\n@mixin flexCenter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n@mixin underlineAnimation {\r\n  &:not(.nav-active)::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    transform-origin: bottom right;\r\n    transition: transform 0.25s ease-out;\r\n  }\r\n  &:not(.nav-active):hover::after {\r\n    transform: scaleX(1);\r\n    transform-origin: bottom left;\r\n  }\r\n}\r\n/* Color styles */\r\n$black: hsla(0, 0%, 13.7%, 1);\r\n$pale-orange: hsla(34, 37.7%, 88%, 1);\r\n$accent-red: hsla(357, 77.7%, 54.3%, 1);\r\n\r\n/* Text-size styles */\r\n$heading-1: 4rem;\r\n$heading-2: 3rem;\r\n$heading-3: 2rem;\r\n$regualr-paragraph: 1.5rem;\r\n$small-paragraph: 1.25rem;\r\n\r\n$lobster: \"Lobster Two\", cursive;\r\n$roboto: \"Roboto Slab\", serif;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  color: $black;\r\n  font-family: $roboto;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: $heading-1;\r\n}\r\n\r\nh2 {\r\n  font-size: $heading-2;\r\n}\r\n\r\nh3 {\r\n  font-size: $heading-3;\r\n}\r\n\r\n.container {\r\n  width: 85%;\r\n  max-width: 1200px;\r\n}\r\n\r\nheader {\r\n  background-color: $accent-red;\r\n  font-family: $lobster;\r\n  color: white;\r\n  @include flexCenter();\r\n  height: 10vh;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.nav-active {\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  position: relative;\r\n  font-size: $regualr-paragraph;\r\n  font-family: $lobster;\r\n  cursor: pointer;\r\n  @include underlineAnimation();\r\n}\r\n\r\n.logo {\r\n  font-size: $heading-2;\r\n  color: white;\r\n}\r\n\r\n.landing-image {\r\n  width: 100%;\r\n  max-height: 50vh;\r\n  object-fit: cover;\r\n}\r\n\r\n.welcome-section {\r\n  background-color: $pale-orange;\r\n  color: $black;\r\n  @include flexCenter();\r\n  height: 40vh;\r\n}\r\n.welcome-text {\r\n  max-width: 700px;\r\n}\r\n.welcome-title {\r\n  font-size: $heading-2;\r\n}\r\n.welcome-paragraph {\r\n  max-width: 600px;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\n.working-hours {\r\n  background-color: $accent-red;\r\n  color: white;\r\n  @include flexCenter();\r\n  padding: 10em 0;\r\n}\r\n.working-hours-title {\r\n  font-size: $heading-2;\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n.working-schedule {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: $regualr-paragraph;\r\n  text-align: center;\r\n  gap: 24px;\r\n}\r\n.schedule-hours {\r\n  line-height: 2em;\r\n}\r\n\r\nfooter {\r\n  padding: 2.5em 0;\r\n  @include flexCenter();\r\n}\r\n.attribution {\r\n  text-align: center;\r\n  color: $black;\r\n  a {\r\n    color: $accent-red;\r\n  }\r\n}\r\n\r\n.our-recommendation {\r\n  background-color: $pale-orange;\r\n  @include flexCenter();\r\n  height: 90vh;\r\n}\r\n\r\n.our-recommendation-title,\r\n.menu-title {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.recommended-pasta {\r\n  display: flex;\r\n  gap: 5em;\r\n  color: $black;\r\n}\r\n\r\n.dish-wrapper {\r\n  max-width: 500px;\r\n}\r\n\r\n.dish-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.dish-para {\r\n  font-size: $small-paragraph;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.img-wrap {\r\n  object-fit: cover;\r\n}\r\n\r\n.dish-image {\r\n  border-radius: 24px;\r\n}\r\n\r\n.menu {\r\n  background-color: $accent-red;\r\n  @include flexCenter();\r\n  padding: 5em 0;\r\n  color: white;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 4em;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/sass/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/contactModule.js":
/*!**************************************!*\
  !*** ./src/modules/contactModule.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateContact)
/* harmony export */ });
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContent */ "./src/modules/emptyContent.js");

function populateContact() {
  const content = document.querySelector("#content");
  (0,_emptyContent__WEBPACK_IMPORTED_MODULE_0__.emptyContent)();
}


/***/ }),

/***/ "./src/modules/emptyContent.js":
/*!*************************************!*\
  !*** ./src/modules/emptyContent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emptyContent": () => (/* binding */ emptyContent)
/* harmony export */ });
function emptyContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}


/***/ }),

/***/ "./src/modules/homeModule.js":
/*!***********************************!*\
  !*** ./src/modules/homeModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateHome)
/* harmony export */ });
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContent */ "./src/modules/emptyContent.js");
/* harmony import */ var _img_Cover_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/Cover.jpg */ "./src/img/Cover.jpg");



function populateHome() {
  const content = document.querySelector("#content");
  (0,_emptyContent__WEBPACK_IMPORTED_MODULE_0__.emptyContent)();

  //   Landing image
  const divImage = document.createElement("div");
  divImage.classList.add("landing-image");
  const landingImage = document.createElement("img");
  landingImage.src = _img_Cover_jpg__WEBPACK_IMPORTED_MODULE_1__;
  landingImage.classList.add("landing-image");
  divImage.appendChild(landingImage);
  content.appendChild(divImage);

  //   Welcome section
  const welcomeSection = document.createElement("section");
  welcomeSection.classList.add("welcome-section");
  const welcomeContainer = document.createElement("div");
  welcomeContainer.classList.add("container");
  const welcomeText = document.createElement("div");
  welcomeText.classList.add("welcome-text");
  const welcomeTitle = document.createElement("h2");
  welcomeTitle.textContent = "Welcome to the Pasta House";
  welcomeTitle.classList.add("welcome-title");
  const welcomePara = document.createElement("p");
  welcomePara.textContent =
    "Here we prepare some of the best pasta the world has ever seen! Come and see it for yourself!";
  welcomePara.classList.add("welcome-paragraph");
  welcomeText.appendChild(welcomeTitle);
  welcomeText.appendChild(welcomePara);
  welcomeContainer.appendChild(welcomeText);
  welcomeSection.appendChild(welcomeContainer);
  content.appendChild(welcomeSection);

  //   Working hours section
  const workTimeSection = document.createElement("section");
  const workingHoursContainer = document.createElement("div");
  workingHoursContainer.classList.add("container");
  workTimeSection.classList.add("working-hours");
  const workTimeTitle = document.createElement("h2");
  workTimeTitle.textContent = "-Our working hours-";
  workTimeTitle.classList.add("working-hours-title");
  const workHours = document.createElement("div");
  workHours.classList.add("working-schedule");

  workHours.appendChild(scheduleCreator("Monday - Thursday", "10:00 - 22:00"));

  workHours.appendChild(scheduleCreator("Friday", "16:00 - 00:00"));

  workHours.appendChild(scheduleCreator("Saturday - Sunday", "12:00 - 18:00"));

  workingHoursContainer.appendChild(workTimeTitle);
  workingHoursContainer.appendChild(workHours);
  workTimeSection.appendChild(workingHoursContainer);
  content.appendChild(workTimeSection);

  //   Footer
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("container");

  const attributionText = document.createElement("p");
  attributionText.textContent = "Photo by ";
  const attributionLink = document.createElement("a");
  attributionLink.classList.add("attribution");
  attributionText.classList.add("attribution");
  attributionLink.textContent = "Divani (Diva)";
  attributionLink.href =
    "https://unsplash.com/@fullboardphotography?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
  attributionText.appendChild(attributionLink);
  footerContainer.appendChild(attributionText);
  footer.appendChild(footerContainer);
  content.appendChild(footer);
}

function scheduleCreator(daysText, hoursText) {
  const group = document.createElement("div");
  group.classList.add("schedule-hours");
  const days = document.createElement("p");
  days.textContent = daysText;
  group.appendChild(days);
  const hours = document.createElement("p");
  hours.textContent = hoursText;
  group.appendChild(hours);
  return group;
}


/***/ }),

/***/ "./src/modules/menuModule.js":
/*!***********************************!*\
  !*** ./src/modules/menuModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ populateMenu)
/* harmony export */ });
/* harmony import */ var _emptyContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emptyContent */ "./src/modules/emptyContent.js");
/* harmony import */ var _img_alla_norma_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/alla-norma.jpeg */ "./src/img/alla-norma.jpeg");
/* harmony import */ var _img_bolognese_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bolognese.jpeg */ "./src/img/bolognese.jpeg");
/* harmony import */ var _img_carbonara_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/carbonara.jpeg */ "./src/img/carbonara.jpeg");
/* harmony import */ var _img_fettuccine_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/fettuccine.jpeg */ "./src/img/fettuccine.jpeg");
/* harmony import */ var _img_vongole_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/vongole.jpeg */ "./src/img/vongole.jpeg");
/* harmony import */ var _img_macaroni_cheese_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/macaroni-cheese.jpeg */ "./src/img/macaroni-cheese.jpeg");








function populateMenu() {
  const content = document.querySelector("#content");
  (0,_emptyContent__WEBPACK_IMPORTED_MODULE_0__.emptyContent)();

  // Our recommendation
  const ourRecommendationSection = document.createElement("section");
  ourRecommendationSection.classList.add("our-recommendation");
  const ourRecommendationContainer = document.createElement("div");
  ourRecommendationContainer.classList.add("container");
  const ourRecommnedationTitle = document.createElement("h2");
  ourRecommnedationTitle.textContent = "Our recommendation";
  ourRecommnedationTitle.classList.add("our-recommendation-title");
  ourRecommendationContainer.appendChild(ourRecommnedationTitle);
  const recommendationPastaWrapper = document.createElement("div");
  recommendationPastaWrapper.classList.add("recommended-pasta");
  recommendationPastaWrapper.appendChild(
    dishCreator(
      "Fettuccine Alfredo",
      "Also known as fettuccine al burro (fettuccine withbutter), fettuccine alfredo is a simple pasta dishconsisting of fettuccine (flat pasta ribbons) tossed withparmesan cheese and butter. The process emulsifiesthe ingredients for a rich, silky finish.",
      _img_fettuccine_jpeg__WEBPACK_IMPORTED_MODULE_4__
    )
  );
  recommendationPastaWrapper.appendChild(
    dishCreator(
      "Carbonara",
      "This dish combining a pasta variety such as penne orspaghetti with a cream-based sauce with ham orpancetta. The traditional Roman carbonara saucecontains eggs, a hard cheese such as pecorino orparmesan, cured pork, and black pepper",
      _img_carbonara_jpeg__WEBPACK_IMPORTED_MODULE_3__
    )
  );
  ourRecommendationContainer.appendChild(recommendationPastaWrapper);
  ourRecommendationSection.appendChild(ourRecommendationContainer);

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("container");
  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Rest of our menu";
  menuContainer.append(menuTitle);

  const menuWrapper = document.createElement("div");
  menuWrapper.classList.add("menu-wrapper");
  menuWrapper.appendChild(
    dishCreator(
      "Pasta alla Norma",
      "The dish consists of a pasta variety such as ziti orrigatoni cooked with aubergine, tomatoes, herbs, spices,capers and cheese.",
      _img_alla_norma_jpeg__WEBPACK_IMPORTED_MODULE_1__
    )
  );
  menuWrapper.appendChild(
    dishCreator(
      "Spaghetti alle Vongole",
      "The dish can be cooked ‘in bianco’ - with garlic, oil,herbs and white wine, or ‘in rosso’ - with garlic, oil,herbs and tomatoes",
      _img_vongole_jpeg__WEBPACK_IMPORTED_MODULE_5__
    )
  );
  menuWrapper.appendChild(
    dishCreator(
      "Macaroni Cheese",
      "The dish consists of macaroni pasta, baked in a cheesybechamel sauce in the oven. It is cooked with cheedarcheese and garnished with parsely.",
      _img_macaroni_cheese_jpeg__WEBPACK_IMPORTED_MODULE_6__
    )
  );
  menuWrapper.appendChild(
    dishCreator(
      "Spaghetti Bolognese",
      "Spaghetti bolognaise is a pasta dish consisting ofspaghetti and a sauce made of minced beef,tomatoes, onion, bacon, red wine and herbs.",
      _img_bolognese_jpeg__WEBPACK_IMPORTED_MODULE_2__
    )
  );
  menuContainer.appendChild(menuWrapper);
  menuSection.appendChild(menuContainer);

  content.appendChild(ourRecommendationSection);
  content.appendChild(menuSection);
}

function dishCreator(dishName, dishDescription, dishImg) {
  const dish = document.createElement("div");
  dish.classList.add("dish-wrapper");
  const dishTitle = document.createElement("h3");
  dishTitle.classList.add("dish-title");
  const dishPara = document.createElement("p");
  dishPara.classList.add("dish-para");
  const img = document.createElement("img");
  const imgWrap = document.createElement("div");
  imgWrap.classList.add("img-wrap");
  imgWrap.appendChild(img);
  img.classList.add("dish-image");

  dishTitle.textContent = dishName;
  dishPara.textContent = dishDescription;
  img.src = dishImg;

  dish.appendChild(dishTitle);
  dish.appendChild(dishPara);
  dish.appendChild(imgWrap);

  return dish;
}


/***/ }),

/***/ "./src/img/Cover.jpg":
/*!***************************!*\
  !*** ./src/img/Cover.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/4ed19c63a74efa16617dCover.jpg";

/***/ }),

/***/ "./src/img/alla-norma.jpeg":
/*!*********************************!*\
  !*** ./src/img/alla-norma.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/cda508359e4b00e68358alla-norma.jpeg";

/***/ }),

/***/ "./src/img/bolognese.jpeg":
/*!********************************!*\
  !*** ./src/img/bolognese.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/f14e72ccc851574c4fa8bolognese.jpeg";

/***/ }),

/***/ "./src/img/carbonara.jpeg":
/*!********************************!*\
  !*** ./src/img/carbonara.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/9d691c7aafbe4d5851cccarbonara.jpeg";

/***/ }),

/***/ "./src/img/fettuccine.jpeg":
/*!*********************************!*\
  !*** ./src/img/fettuccine.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/ed2da914ed477e34f7b9fettuccine.jpeg";

/***/ }),

/***/ "./src/img/macaroni-cheese.jpeg":
/*!**************************************!*\
  !*** ./src/img/macaroni-cheese.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/960b243aea8c7e8400aemacaroni-cheese.jpeg";

/***/ }),

/***/ "./src/img/vongole.jpeg":
/*!******************************!*\
  !*** ./src/img/vongole.jpeg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/b6236f5167a51e5bf8e9vongole.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_homeModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homeModule */ "./src/modules/homeModule.js");
/* harmony import */ var _modules_menuModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menuModule */ "./src/modules/menuModule.js");
/* harmony import */ var _modules_contactModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contactModule */ "./src/modules/contactModule.js");
/* harmony import */ var _sass_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sass/main.scss */ "./src/sass/main.scss");





console.log("hello from index.js");

(0,_modules_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"])();

let navigation = document.querySelectorAll(".nav-item");
const home = navigation[0];
const menu = navigation[1];
const contact = navigation[2];

home.addEventListener("click", _modules_homeModule__WEBPACK_IMPORTED_MODULE_0__["default"]);

menu.addEventListener("click", _modules_menuModule__WEBPACK_IMPORTED_MODULE_1__["default"]);

contact.addEventListener("click", _modules_contactModule__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkY4QztBQUNDO0FBQ0Q7QUFDQTtBQUNFO0FBQ047QUFDZTtBQUN6RDtBQUNlO0FBQ2Y7QUFDQSxFQUFFLDJEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlEQUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxpREFBUztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQU87QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFjO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0RBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0E7QUFDTTtBQUM1QjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSwrREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyREFBWTtBQUMzQztBQUNBLCtCQUErQiwyREFBWTtBQUMzQztBQUNBLGtDQUFrQyw4REFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3Nhc3MvbWFpbi5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL3Nhc3MvbWFpbi5zY3NzPzZhMTciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3RNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvbW9kdWxlcy9lbXB0eUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lTW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21vZHVsZXMvbWVudU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlcitUd286d2dodEA0MDA7NzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIENvbG9yIHN0eWxlcyAqL1xcbi8qIFRleHQtc2l6ZSBzdHlsZXMgKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTMuNyUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTdkZWcsIDc3LjclLCA1NC4zJSk7XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwdmg7XFxufVxcblxcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYXYtYWN0aXZlIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLm5hdi1pdGVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5uYXYtaXRlbTpub3QoLm5hdi1hY3RpdmUpOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXG59XFxuLm5hdi1pdGVtOm5vdCgubmF2LWFjdGl2ZSk6aG92ZXI6OmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmxhbmRpbmctaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi53ZWxjb21lLXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM0ZGVnLCAzNy43JSwgODglKTtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDEzLjclKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQwdmg7XFxufVxcblxcbi53ZWxjb21lLXRleHQge1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLndlbGNvbWUtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG4ud2VsY29tZS1wYXJhZ3JhcGgge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ud29ya2luZy1ob3VycyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzU3ZGVnLCA3Ny43JSwgNTQuMyUpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwZW0gMDtcXG59XFxuXFxuLndvcmtpbmctaG91cnMtdGl0bGUge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4ud29ya2luZy1zY2hlZHVsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZ2FwOiAyNHB4O1xcbn1cXG5cXG4uc2NoZWR1bGUtaG91cnMge1xcbiAgbGluZS1oZWlnaHQ6IDJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDIuNWVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTMuNyUpO1xcbn1cXG4uYXR0cmlidXRpb24gYSB7XFxuICBjb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG59XFxuXFxuLm91ci1yZWNvbW1lbmRhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzRkZWcsIDM3LjclLCA4OCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLm91ci1yZWNvbW1lbmRhdGlvbi10aXRsZSxcXG4ubWVudS10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5yZWNvbW1lbmRlZC1wYXN0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1ZW07XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMy43JSk7XFxufVxcblxcbi5kaXNoLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmRpc2gtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5kaXNoLXBhcmEge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uaW1nLXdyYXAge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5kaXNoLWltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTdkZWcsIDc3LjclLCA1NC4zJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNWVtIDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDRlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXdCQSxpQkFBQTtBQUtBLHFCQUFBO0FBVUE7OztFQUdFLHNCQUFBO0FBbkNGOztBQXNDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkNGOztBQXNDQTtFQUNFLDJCQTFCTTtFQTJCTixpQ0FmTztFQWdCUCxpQkFwQmtCO0FBZnBCOztBQXNDQTtFQUNFLGVBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UscUJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZ0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZUF2Q1U7QUFJWjs7QUFzQ0E7RUFDRSxlQTFDVTtBQU9aOztBQXNDQTtFQUNFLGVBN0NVO0FBVVo7O0FBc0NBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBbkNGOztBQXNDQTtFQUNFLDJDQTNEVztFQTREWCxtQ0FuRFE7RUFvRFIsWUFBQTtFQXRGQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXNGQSxZQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBakNGOztBQW9DQTtFQUNFLDhCQUFBO0FBakNGOztBQW9DQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkE5RWtCO0VBK0VsQixtQ0E1RVE7RUE2RVIsZUFBQTtBQWpDRjtBQXpFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQTJFSjtBQXpFRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUEyRUo7O0FBcUJBO0VBQ0UsZUF2RlU7RUF3RlYsWUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSx3Q0F2R1k7RUF3R1osMkJBekdNO0VBdkJOLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBZ0lBLFlBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFpQkE7RUFDRSxlQTNHVTtBQTZGWjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGlCQTdHa0I7QUFnR3BCOztBQWdCQTtFQUNFLDJDQXZIVztFQXdIWCxZQUFBO0VBakpBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBaUpBLGVBQUE7QUFYRjs7QUFhQTtFQUNFLGVBekhVO0VBMEhWLGtCQUFBO0VBQ0Esa0JBQUE7QUFWRjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQTlIa0I7RUErSGxCLGtCQUFBO0VBQ0EsU0FBQTtBQVRGOztBQVdBO0VBQ0UsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLGdCQUFBO0VBdEtBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBK0pGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSwyQkFwSk07QUErSVI7QUFNRTtFQUNFLGdDQXBKUztBQWdKYjs7QUFRQTtFQUNFLHdDQTFKWTtFQXhCWixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWtMQSxZQUFBO0FBSEY7O0FBTUE7O0VBRUUsa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBeEtNO0FBcUtSOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkEzS2dCO0VBNEtoQixrQkFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSwyQ0EvTFc7RUF6QlgsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF3TkEsY0FBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlcitUd286d2dodEA0MDA7NzAwJmZhbWlseT1Sb2JvdG8rU2xhYjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBtaXhpbiBmbGV4Q2VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbkBtaXhpbiB1bmRlcmxpbmVBbmltYXRpb24ge1xcclxcbiAgJjpub3QoLm5hdi1hY3RpdmUpOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSByaWdodDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcclxcbiAgfVxcclxcbiAgJjpub3QoLm5hdi1hY3RpdmUpOmhvdmVyOjphZnRlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLyogQ29sb3Igc3R5bGVzICovXFxyXFxuJGJsYWNrOiBoc2xhKDAsIDAlLCAxMy43JSwgMSk7XFxyXFxuJHBhbGUtb3JhbmdlOiBoc2xhKDM0LCAzNy43JSwgODglLCAxKTtcXHJcXG4kYWNjZW50LXJlZDogaHNsYSgzNTcsIDc3LjclLCA1NC4zJSwgMSk7XFxyXFxuXFxyXFxuLyogVGV4dC1zaXplIHN0eWxlcyAqL1xcclxcbiRoZWFkaW5nLTE6IDRyZW07XFxyXFxuJGhlYWRpbmctMjogM3JlbTtcXHJcXG4kaGVhZGluZy0zOiAycmVtO1xcclxcbiRyZWd1YWxyLXBhcmFncmFwaDogMS41cmVtO1xcclxcbiRzbWFsbC1wYXJhZ3JhcGg6IDEuMjVyZW07XFxyXFxuXFxyXFxuJGxvYnN0ZXI6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxyXFxuJHJvYm90bzogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxuICBmb250LWZhbWlseTogJHJvYm90bztcXHJcXG4gIGZvbnQtc2l6ZTogJHJlZ3VhbHItcGFyYWdyYXBoO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgZm9udC1zaXplOiAkaGVhZGluZy0xO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTI7XFxyXFxufVxcclxcblxcclxcbmgzIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogODUlO1xcclxcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXJlZDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkbG9ic3RlcjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIGhlaWdodDogMTB2aDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1hY3RpdmUge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgZm9udC1zaXplOiAkcmVndWFsci1wYXJhZ3JhcGg7XFxyXFxuICBmb250LWZhbWlseTogJGxvYnN0ZXI7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBAaW5jbHVkZSB1bmRlcmxpbmVBbmltYXRpb24oKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgZm9udC1zaXplOiAkaGVhZGluZy0yO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGFuZGluZy1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtc2VjdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZS1vcmFuZ2U7XFxyXFxuICBjb2xvcjogJGJsYWNrO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgaGVpZ2h0OiA0MHZoO1xcclxcbn1cXHJcXG4ud2VsY29tZS10ZXh0IHtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxufVxcclxcbi53ZWxjb21lLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMjtcXHJcXG59XFxyXFxuLndlbGNvbWUtcGFyYWdyYXBoIHtcXHJcXG4gIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICBmb250LXNpemU6ICRyZWd1YWxyLXBhcmFncmFwaDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmtpbmctaG91cnMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1yZWQ7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxyXFxuICBwYWRkaW5nOiAxMGVtIDA7XFxyXFxufVxcclxcbi53b3JraW5nLWhvdXJzLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuLndvcmtpbmctc2NoZWR1bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LXNpemU6ICRyZWd1YWxyLXBhcmFncmFwaDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMjRweDtcXHJcXG59XFxyXFxuLnNjaGVkdWxlLWhvdXJzIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBwYWRkaW5nOiAyLjVlbSAwO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbn1cXHJcXG4uYXR0cmlidXRpb24ge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG4gIGEge1xcclxcbiAgICBjb2xvcjogJGFjY2VudC1yZWQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5vdXItcmVjb21tZW5kYXRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtb3JhbmdlO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgaGVpZ2h0OiA5MHZoO1xcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXJlY29tbWVuZGF0aW9uLXRpdGxlLFxcclxcbi5tZW51LXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlY29tbWVuZGVkLXBhc3RhIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDVlbTtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLXdyYXBwZXIge1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtdGl0bGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5kaXNoLXBhcmEge1xcclxcbiAgZm9udC1zaXplOiAkc21hbGwtcGFyYWdyYXBoO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaW1nLXdyYXAge1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLWltYWdlIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgcGFkZGluZzogNWVtIDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIHJvdy1nYXA6IDRlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGVtcHR5Q29udGVudCB9IGZyb20gXCIuL2VtcHR5Q29udGVudFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhY3QoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBlbXB0eUNvbnRlbnQoKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZW1wdHlDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tIFwiLi9lbXB0eUNvbnRlbnRcIjtcclxuaW1wb3J0IGNvdmVySW1hZ2UgZnJvbSBcIi4uL2ltZy9Db3Zlci5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGVtcHR5Q29udGVudCgpO1xyXG5cclxuICAvLyAgIExhbmRpbmcgaW1hZ2VcclxuICBjb25zdCBkaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2SW1hZ2UuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctaW1hZ2VcIik7XHJcbiAgY29uc3QgbGFuZGluZ0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsYW5kaW5nSW1hZ2Uuc3JjID0gY292ZXJJbWFnZTtcclxuICBsYW5kaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctaW1hZ2VcIik7XHJcbiAgZGl2SW1hZ2UuYXBwZW5kQ2hpbGQobGFuZGluZ0ltYWdlKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkltYWdlKTtcclxuXHJcbiAgLy8gICBXZWxjb21lIHNlY3Rpb25cclxuICBjb25zdCB3ZWxjb21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHdlbGNvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXNlY3Rpb25cIik7XHJcbiAgY29uc3Qgd2VsY29tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VsY29tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS10ZXh0XCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB3ZWxjb21lVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIFBhc3RhIEhvdXNlXCI7XHJcbiAgd2VsY29tZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXRpdGxlXCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgd2VsY29tZVBhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJIZXJlIHdlIHByZXBhcmUgc29tZSBvZiB0aGUgYmVzdCBwYXN0YSB0aGUgd29ybGQgaGFzIGV2ZXIgc2VlbiEgQ29tZSBhbmQgc2VlIGl0IGZvciB5b3Vyc2VsZiFcIjtcclxuICB3ZWxjb21lUGFyYS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1wYXJhZ3JhcGhcIik7XHJcbiAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQod2VsY29tZVRpdGxlKTtcclxuICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZCh3ZWxjb21lUGFyYSk7XHJcbiAgd2VsY29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lVGV4dCk7XHJcbiAgd2VsY29tZVNlY3Rpb24uYXBwZW5kQ2hpbGQod2VsY29tZUNvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lU2VjdGlvbik7XHJcblxyXG4gIC8vICAgV29ya2luZyBob3VycyBzZWN0aW9uXHJcbiAgY29uc3Qgd29ya1RpbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3Qgd29ya2luZ0hvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3JraW5nSG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICB3b3JrVGltZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIndvcmtpbmctaG91cnNcIik7XHJcbiAgY29uc3Qgd29ya1RpbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB3b3JrVGltZVRpdGxlLnRleHRDb250ZW50ID0gXCItT3VyIHdvcmtpbmcgaG91cnMtXCI7XHJcbiAgd29ya1RpbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwid29ya2luZy1ob3Vycy10aXRsZVwiKTtcclxuICBjb25zdCB3b3JrSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdvcmtIb3Vycy5jbGFzc0xpc3QuYWRkKFwid29ya2luZy1zY2hlZHVsZVwiKTtcclxuXHJcbiAgd29ya0hvdXJzLmFwcGVuZENoaWxkKHNjaGVkdWxlQ3JlYXRvcihcIk1vbmRheSAtIFRodXJzZGF5XCIsIFwiMTA6MDAgLSAyMjowMFwiKSk7XHJcblxyXG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZUNyZWF0b3IoXCJGcmlkYXlcIiwgXCIxNjowMCAtIDAwOjAwXCIpKTtcclxuXHJcbiAgd29ya0hvdXJzLmFwcGVuZENoaWxkKHNjaGVkdWxlQ3JlYXRvcihcIlNhdHVyZGF5IC0gU3VuZGF5XCIsIFwiMTI6MDAgLSAxODowMFwiKSk7XHJcblxyXG4gIHdvcmtpbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3JrVGltZVRpdGxlKTtcclxuICB3b3JraW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod29ya0hvdXJzKTtcclxuICB3b3JrVGltZVNlY3Rpb24uYXBwZW5kQ2hpbGQod29ya2luZ0hvdXJzQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmtUaW1lU2VjdGlvbik7XHJcblxyXG4gIC8vICAgRm9vdGVyXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBhdHRyaWJ1dGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhdHRyaWJ1dGlvblRleHQudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IFwiO1xyXG4gIGNvbnN0IGF0dHJpYnV0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGF0dHJpYnV0aW9uTGluay5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XHJcbiAgYXR0cmlidXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcclxuICBhdHRyaWJ1dGlvbkxpbmsudGV4dENvbnRlbnQgPSBcIkRpdmFuaSAoRGl2YSlcIjtcclxuICBhdHRyaWJ1dGlvbkxpbmsuaHJlZiA9XHJcbiAgICBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BmdWxsYm9hcmRwaG90b2dyYXBoeT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIjtcclxuICBhdHRyaWJ1dGlvblRleHQuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25MaW5rKTtcclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25UZXh0KTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjaGVkdWxlQ3JlYXRvcihkYXlzVGV4dCwgaG91cnNUZXh0KSB7XHJcbiAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJzY2hlZHVsZS1ob3Vyc1wiKTtcclxuICBjb25zdCBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF5cy50ZXh0Q29udGVudCA9IGRheXNUZXh0O1xyXG4gIGdyb3VwLmFwcGVuZENoaWxkKGRheXMpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaG91cnMudGV4dENvbnRlbnQgPSBob3Vyc1RleHQ7XHJcbiAgZ3JvdXAuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gIHJldHVybiBncm91cDtcclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tIFwiLi9lbXB0eUNvbnRlbnRcIjtcclxuaW1wb3J0IGFsbGFOb3JtYSBmcm9tIFwiLi4vaW1nL2FsbGEtbm9ybWEuanBlZ1wiO1xyXG5pbXBvcnQgYm9sb2duZXNlIGZyb20gXCIuLi9pbWcvYm9sb2duZXNlLmpwZWdcIjtcclxuaW1wb3J0IGNhcmJvbmFyYSBmcm9tIFwiLi4vaW1nL2NhcmJvbmFyYS5qcGVnXCI7XHJcbmltcG9ydCBmZXR0dWNjaW5lIGZyb20gXCIuLi9pbWcvZmV0dHVjY2luZS5qcGVnXCI7XHJcbmltcG9ydCB2b25nb2xlIGZyb20gXCIuLi9pbWcvdm9uZ29sZS5qcGVnXCI7XHJcbmltcG9ydCBtYWNhcm9uaUNoZWVzZSBmcm9tIFwiLi4vaW1nL21hY2Fyb25pLWNoZWVzZS5qcGVnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBlbXB0eUNvbnRlbnQoKTtcclxuXHJcbiAgLy8gT3VyIHJlY29tbWVuZGF0aW9uXHJcbiAgY29uc3Qgb3VyUmVjb21tZW5kYXRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJvdXItcmVjb21tZW5kYXRpb25cIik7XHJcbiAgY29uc3Qgb3VyUmVjb21tZW5kYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3Qgb3VyUmVjb21tbmVkYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBvdXJSZWNvbW1uZWRhdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgcmVjb21tZW5kYXRpb25cIjtcclxuICBvdXJSZWNvbW1uZWRhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJvdXItcmVjb21tZW5kYXRpb24tdGl0bGVcIik7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3VyUmVjb21tbmVkYXRpb25UaXRsZSk7XHJcbiAgY29uc3QgcmVjb21tZW5kYXRpb25QYXN0YVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWNvbW1lbmRlZC1wYXN0YVwiKTtcclxuICByZWNvbW1lbmRhdGlvblBhc3RhV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIkZldHR1Y2NpbmUgQWxmcmVkb1wiLFxyXG4gICAgICBcIkFsc28ga25vd24gYXMgZmV0dHVjY2luZSBhbCBidXJybyAoZmV0dHVjY2luZSB3aXRoYnV0dGVyKSwgZmV0dHVjY2luZSBhbGZyZWRvIGlzIGEgc2ltcGxlIHBhc3RhIGRpc2hjb25zaXN0aW5nIG9mIGZldHR1Y2NpbmUgKGZsYXQgcGFzdGEgcmliYm9ucykgdG9zc2VkIHdpdGhwYXJtZXNhbiBjaGVlc2UgYW5kIGJ1dHRlci4gVGhlIHByb2Nlc3MgZW11bHNpZmllc3RoZSBpbmdyZWRpZW50cyBmb3IgYSByaWNoLCBzaWxreSBmaW5pc2guXCIsXHJcbiAgICAgIGZldHR1Y2NpbmVcclxuICAgIClcclxuICApO1xyXG4gIHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiQ2FyYm9uYXJhXCIsXHJcbiAgICAgIFwiVGhpcyBkaXNoIGNvbWJpbmluZyBhIHBhc3RhIHZhcmlldHkgc3VjaCBhcyBwZW5uZSBvcnNwYWdoZXR0aSB3aXRoIGEgY3JlYW0tYmFzZWQgc2F1Y2Ugd2l0aCBoYW0gb3JwYW5jZXR0YS4gVGhlIHRyYWRpdGlvbmFsIFJvbWFuIGNhcmJvbmFyYSBzYXVjZWNvbnRhaW5zIGVnZ3MsIGEgaGFyZCBjaGVlc2Ugc3VjaCBhcyBwZWNvcmlubyBvcnBhcm1lc2FuLCBjdXJlZCBwb3JrLCBhbmQgYmxhY2sgcGVwcGVyXCIsXHJcbiAgICAgIGNhcmJvbmFyYVxyXG4gICAgKVxyXG4gICk7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVjb21tZW5kYXRpb25QYXN0YVdyYXBwZXIpO1xyXG4gIG91clJlY29tbWVuZGF0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChvdXJSZWNvbW1lbmRhdGlvbkNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJSZXN0IG9mIG91ciBtZW51XCI7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudVRpdGxlKTtcclxuXHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXdyYXBwZXJcIik7XHJcbiAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJQYXN0YSBhbGxhIE5vcm1hXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY29uc2lzdHMgb2YgYSBwYXN0YSB2YXJpZXR5IHN1Y2ggYXMgeml0aSBvcnJpZ2F0b25pIGNvb2tlZCB3aXRoIGF1YmVyZ2luZSwgdG9tYXRvZXMsIGhlcmJzLCBzcGljZXMsY2FwZXJzIGFuZCBjaGVlc2UuXCIsXHJcbiAgICAgIGFsbGFOb3JtYVxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJTcGFnaGV0dGkgYWxsZSBWb25nb2xlXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY2FuIGJlIGNvb2tlZCDigJhpbiBiaWFuY2/igJkgLSB3aXRoIGdhcmxpYywgb2lsLGhlcmJzIGFuZCB3aGl0ZSB3aW5lLCBvciDigJhpbiByb3Nzb+KAmSAtIHdpdGggZ2FybGljLCBvaWwsaGVyYnMgYW5kIHRvbWF0b2VzXCIsXHJcbiAgICAgIHZvbmdvbGVcclxuICAgIClcclxuICApO1xyXG4gIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiTWFjYXJvbmkgQ2hlZXNlXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY29uc2lzdHMgb2YgbWFjYXJvbmkgcGFzdGEsIGJha2VkIGluIGEgY2hlZXN5YmVjaGFtZWwgc2F1Y2UgaW4gdGhlIG92ZW4uIEl0IGlzIGNvb2tlZCB3aXRoIGNoZWVkYXJjaGVlc2UgYW5kIGdhcm5pc2hlZCB3aXRoIHBhcnNlbHkuXCIsXHJcbiAgICAgIG1hY2Fyb25pQ2hlZXNlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIlNwYWdoZXR0aSBCb2xvZ25lc2VcIixcclxuICAgICAgXCJTcGFnaGV0dGkgYm9sb2duYWlzZSBpcyBhIHBhc3RhIGRpc2ggY29uc2lzdGluZyBvZnNwYWdoZXR0aSBhbmQgYSBzYXVjZSBtYWRlIG9mIG1pbmNlZCBiZWVmLHRvbWF0b2VzLCBvbmlvbiwgYmFjb24sIHJlZCB3aW5lIGFuZCBoZXJicy5cIixcclxuICAgICAgYm9sb2duZXNlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVXcmFwcGVyKTtcclxuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChvdXJSZWNvbW1lbmRhdGlvblNlY3Rpb24pO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNoQ3JlYXRvcihkaXNoTmFtZSwgZGlzaERlc2NyaXB0aW9uLCBkaXNoSW1nKSB7XHJcbiAgY29uc3QgZGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGlzaC5jbGFzc0xpc3QuYWRkKFwiZGlzaC13cmFwcGVyXCIpO1xyXG4gIGNvbnN0IGRpc2hUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcclxuICBkaXNoVGl0bGUuY2xhc3NMaXN0LmFkZChcImRpc2gtdGl0bGVcIik7XHJcbiAgY29uc3QgZGlzaFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkaXNoUGFyYS5jbGFzc0xpc3QuYWRkKFwiZGlzaC1wYXJhXCIpO1xyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY29uc3QgaW1nV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW1nV3JhcC5jbGFzc0xpc3QuYWRkKFwiaW1nLXdyYXBcIik7XHJcbiAgaW1nV3JhcC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiZGlzaC1pbWFnZVwiKTtcclxuXHJcbiAgZGlzaFRpdGxlLnRleHRDb250ZW50ID0gZGlzaE5hbWU7XHJcbiAgZGlzaFBhcmEudGV4dENvbnRlbnQgPSBkaXNoRGVzY3JpcHRpb247XHJcbiAgaW1nLnNyYyA9IGRpc2hJbWc7XHJcblxyXG4gIGRpc2guYXBwZW5kQ2hpbGQoZGlzaFRpdGxlKTtcclxuICBkaXNoLmFwcGVuZENoaWxkKGRpc2hQYXJhKTtcclxuICBkaXNoLmFwcGVuZENoaWxkKGltZ1dyYXApO1xyXG5cclxuICByZXR1cm4gZGlzaDtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHBvcHVsYXRlSG9tZSBmcm9tIFwiLi9tb2R1bGVzL2hvbWVNb2R1bGVcIjtcclxuaW1wb3J0IHBvcHVsYXRlTWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVNb2R1bGVcIjtcclxuaW1wb3J0IHBvcHVsYXRlQ29udGFjdCBmcm9tIFwiLi9tb2R1bGVzL2NvbnRhY3RNb2R1bGVcIjtcclxuaW1wb3J0IFwiLi9zYXNzL21haW4uc2Nzc1wiO1xyXG5cclxuY29uc29sZS5sb2coXCJoZWxsbyBmcm9tIGluZGV4LmpzXCIpO1xyXG5cclxucG9wdWxhdGVIb21lKCk7XHJcblxyXG5sZXQgbmF2aWdhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWl0ZW1cIik7XHJcbmNvbnN0IGhvbWUgPSBuYXZpZ2F0aW9uWzBdO1xyXG5jb25zdCBtZW51ID0gbmF2aWdhdGlvblsxXTtcclxuY29uc3QgY29udGFjdCA9IG5hdmlnYXRpb25bMl07XHJcblxyXG5ob21lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3B1bGF0ZUhvbWUpO1xyXG5cclxubWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVNZW51KTtcclxuXHJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVsYXRlQ29udGFjdCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==