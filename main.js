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
___CSS_LOADER_EXPORT___.push([module.id, "/* Color styles */\n/* Text-size styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: hsl(0deg, 0%, 13.7%);\n  font-family: \"Roboto Slab\", serif;\n  font-size: 1.5rem;\n}\n\nimg {\n  max-width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2rem;\n}\n\n.container {\n  width: 85%;\n  max-width: 1200px;\n}\n\nheader {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  font-family: \"Lobster Two\", cursive;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-list {\n  display: flex;\n  gap: 20px;\n}\n\n.nav-active {\n  border-bottom: 2px solid white;\n}\n\n.nav-item {\n  display: inline-block;\n  position: relative;\n  font-size: 1.5rem;\n  font-family: \"Lobster Two\", cursive;\n  cursor: pointer;\n}\n.nav-item:not(.nav-active)::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n.nav-item:not(.nav-active):hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.logo {\n  font-size: 3rem;\n  color: white;\n}\n\n.landing-image {\n  width: 100%;\n  max-height: 50vh;\n  object-fit: cover;\n}\n\n.welcome-section {\n  background-color: hsl(34deg, 37.7%, 88%);\n  color: hsl(0deg, 0%, 13.7%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vh;\n}\n\n.welcome-text {\n  max-width: 700px;\n}\n\n.welcome-title {\n  font-size: 3rem;\n}\n\n.welcome-paragraph {\n  max-width: 600px;\n  font-size: 1.5rem;\n}\n\n.working-hours {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10em 0;\n}\n\n.working-hours-title {\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 2em;\n}\n\n.working-schedule {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  text-align: center;\n  gap: 24px;\n}\n\n.schedule-hours {\n  line-height: 2em;\n}\n\nfooter {\n  background-color: hsl(34deg, 37.7%, 88%);\n  padding: 2.5em 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attribution {\n  font-size: 1.25rem;\n  text-align: center;\n  color: hsl(0deg, 0%, 13.7%);\n}\n.attribution a {\n  color: hsl(357deg, 77.7%, 54.3%);\n}\n\n.our-recommendation {\n  background-color: hsl(34deg, 37.7%, 88%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n.our-recommendation-title,\n.menu-title {\n  margin-bottom: 1em;\n}\n\n.recommended-pasta {\n  display: flex;\n  gap: 5em;\n  color: hsl(0deg, 0%, 13.7%);\n}\n\n.dish-wrapper {\n  max-width: 500px;\n}\n\n.dish-title {\n  margin-bottom: 0.5em;\n}\n\n.dish-para {\n  font-size: 1.25rem;\n  margin-bottom: 1em;\n}\n\n.img-wrap {\n  object-fit: cover;\n}\n\n.dish-image {\n  border-radius: 24px;\n}\n\n.menu {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5em 0;\n  color: white;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 4em;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/sass/main.scss"],"names":[],"mappings":"AAwBA,iBAAA;AAKA,qBAAA;AAUA;;;EAGE,sBAAA;AAnCF;;AAsCA;EACE,SAAA;EACA,UAAA;AAnCF;;AAsCA;EACE,2BA1BM;EA2BN,iCAfO;EAgBP,iBApBkB;AAfpB;;AAsCA;EACE,eAAA;AAnCF;;AAsCA;EACE,qBAAA;AAnCF;;AAsCA;EACE,gBAAA;AAnCF;;AAsCA;EACE,eAvCU;AAIZ;;AAsCA;EACE,eA1CU;AAOZ;;AAsCA;EACE,eA7CU;AAUZ;;AAsCA;EACE,UAAA;EACA,iBAAA;AAnCF;;AAsCA;EACE,2CA3DW;EA4DX,mCAnDQ;EAoDR,YAAA;EAtFA,aAAA;EACA,uBAAA;EACA,mBAAA;EAsFA,YAAA;AAjCF;;AAoCA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AAjCF;;AAoCA;EACE,aAAA;EACA,SAAA;AAjCF;;AAoCA;EACE,8BAAA;AAjCF;;AAoCA;EACE,qBAAA;EACA,kBAAA;EACA,iBA9EkB;EA+ElB,mCA5EQ;EA6ER,eAAA;AAjCF;AAzEE;EACE,WAAA;EACA,kBAAA;EACA,WAAA;EACA,oBAAA;EACA,WAAA;EACA,SAAA;EACA,OAAA;EACA,uBAAA;EACA,8BAAA;EACA,oCAAA;AA2EJ;AAzEE;EACE,oBAAA;EACA,6BAAA;AA2EJ;;AAqBA;EACE,eAvFU;EAwFV,YAAA;AAlBF;;AAqBA;EACE,WAAA;EACA,gBAAA;EACA,iBAAA;AAlBF;;AAqBA;EACE,wCAvGY;EAwGZ,2BAzGM;EAvBN,aAAA;EACA,uBAAA;EACA,mBAAA;EAgIA,YAAA;AAhBF;;AAkBA;EACE,gBAAA;AAfF;;AAiBA;EACE,eA3GU;AA6FZ;;AAgBA;EACE,gBAAA;EACA,iBA7GkB;AAgGpB;;AAgBA;EACE,2CAvHW;EAwHX,YAAA;EAjJA,aAAA;EACA,uBAAA;EACA,mBAAA;EAiJA,eAAA;AAXF;;AAaA;EACE,eAzHU;EA0HV,kBAAA;EACA,kBAAA;AAVF;;AAYA;EACE,aAAA;EACA,sBAAA;EACA,iBA9HkB;EA+HlB,kBAAA;EACA,SAAA;AATF;;AAWA;EACE,gBAAA;AARF;;AAWA;EACE,wCA9IY;EA+IZ,gBAAA;EAvKA,aAAA;EACA,uBAAA;EACA,mBAAA;AAgKF;;AAQA;EACE,kBA3IgB;EA4IhB,kBAAA;EACA,2BAtJM;AAiJR;AAME;EACE,gCAtJS;AAkJb;;AAQA;EACE,wCA5JY;EAxBZ,aAAA;EACA,uBAAA;EACA,mBAAA;EAoLA,YAAA;AAHF;;AAMA;;EAEE,kBAAA;AAHF;;AAMA;EACE,aAAA;EACA,QAAA;EACA,2BA1KM;AAuKR;;AAMA;EACE,gBAAA;AAHF;;AAMA;EACE,oBAAA;AAHF;;AAMA;EACE,kBA7KgB;EA8KhB,kBAAA;AAHF;;AAMA;EACE,iBAAA;AAHF;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE,2CAjMW;EAzBX,aAAA;EACA,uBAAA;EACA,mBAAA;EA0NA,cAAA;EACA,YAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,YAAA;EACA,YAAA;AADF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap\");\r\n@mixin flexCenter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n@mixin underlineAnimation {\r\n  &:not(.nav-active)::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    transform-origin: bottom right;\r\n    transition: transform 0.25s ease-out;\r\n  }\r\n  &:not(.nav-active):hover::after {\r\n    transform: scaleX(1);\r\n    transform-origin: bottom left;\r\n  }\r\n}\r\n/* Color styles */\r\n$black: hsla(0, 0%, 13.7%, 1);\r\n$pale-orange: hsla(34, 37.7%, 88%, 1);\r\n$accent-red: hsla(357, 77.7%, 54.3%, 1);\r\n\r\n/* Text-size styles */\r\n$heading-1: 4rem;\r\n$heading-2: 3rem;\r\n$heading-3: 2rem;\r\n$regualr-paragraph: 1.5rem;\r\n$small-paragraph: 1.25rem;\r\n\r\n$lobster: \"Lobster Two\", cursive;\r\n$roboto: \"Roboto Slab\", serif;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  color: $black;\r\n  font-family: $roboto;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: $heading-1;\r\n}\r\n\r\nh2 {\r\n  font-size: $heading-2;\r\n}\r\n\r\nh3 {\r\n  font-size: $heading-3;\r\n}\r\n\r\n.container {\r\n  width: 85%;\r\n  max-width: 1200px;\r\n}\r\n\r\nheader {\r\n  background-color: $accent-red;\r\n  font-family: $lobster;\r\n  color: white;\r\n  @include flexCenter();\r\n  height: 10vh;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.nav-active {\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  position: relative;\r\n  font-size: $regualr-paragraph;\r\n  font-family: $lobster;\r\n  cursor: pointer;\r\n  @include underlineAnimation();\r\n}\r\n\r\n.logo {\r\n  font-size: $heading-2;\r\n  color: white;\r\n}\r\n\r\n.landing-image {\r\n  width: 100%;\r\n  max-height: 50vh;\r\n  object-fit: cover;\r\n}\r\n\r\n.welcome-section {\r\n  background-color: $pale-orange;\r\n  color: $black;\r\n  @include flexCenter();\r\n  height: 40vh;\r\n}\r\n.welcome-text {\r\n  max-width: 700px;\r\n}\r\n.welcome-title {\r\n  font-size: $heading-2;\r\n}\r\n.welcome-paragraph {\r\n  max-width: 600px;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\n.working-hours {\r\n  background-color: $accent-red;\r\n  color: white;\r\n  @include flexCenter();\r\n  padding: 10em 0;\r\n}\r\n.working-hours-title {\r\n  font-size: $heading-2;\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n.working-schedule {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: $regualr-paragraph;\r\n  text-align: center;\r\n  gap: 24px;\r\n}\r\n.schedule-hours {\r\n  line-height: 2em;\r\n}\r\n\r\nfooter {\r\n  background-color: $pale-orange;\r\n  padding: 2.5em 0;\r\n  @include flexCenter();\r\n}\r\n.attribution {\r\n  font-size: $small-paragraph;\r\n  text-align: center;\r\n  color: $black;\r\n  a {\r\n    color: $accent-red;\r\n  }\r\n}\r\n\r\n.our-recommendation {\r\n  background-color: $pale-orange;\r\n  @include flexCenter();\r\n  height: 90vh;\r\n}\r\n\r\n.our-recommendation-title,\r\n.menu-title {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.recommended-pasta {\r\n  display: flex;\r\n  gap: 5em;\r\n  color: $black;\r\n}\r\n\r\n.dish-wrapper {\r\n  max-width: 500px;\r\n}\r\n\r\n.dish-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.dish-para {\r\n  font-size: $small-paragraph;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.img-wrap {\r\n  object-fit: cover;\r\n}\r\n\r\n.dish-image {\r\n  border-radius: 24px;\r\n}\r\n\r\n.menu {\r\n  background-color: $accent-red;\r\n  @include flexCenter();\r\n  padding: 5em 0;\r\n  color: white;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 4em;\r\n  color: white;\r\n}\r\n"],"sourceRoot":""}]);
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

  content.appendChild(ourRecommendationSection);

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

  content.appendChild(menuSection);

  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const footerContainer = document.createElement("div");
  footerContainer.classList.add("container");
  const attributionText = document.createElement("p");
  attributionText.textContent = "All photos and info are from ";
  const attributionLink = document.createElement("a");
  attributionText.classList.add("attribution");
  attributionLink.classList.add("attribution");
  attributionLink.textContent = "this blog";
  attributionLink.href = "https://erudus.com/editorial/the-food-agenda/most-famous-pasta-dishes";
  attributionText.appendChild(attributionLink);
  footerContainer.appendChild(attributionText);
  footer.appendChild(footerContainer);
  content.appendChild(footer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7QUNBZ0Q7QUFDQTtBQUNNO0FBQzVCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLCtEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDJEQUFZO0FBQzNDO0FBQ0EsK0JBQStCLDJEQUFZO0FBQzNDO0FBQ0Esa0NBQWtDLDhEQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2Fzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvc2Fzcy9tYWluLnNjc3M/NmExNyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9tb2R1bGVzL2VtcHR5Q29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyK1R3bzp3Z2h0QDQwMDs3MDAmZmFtaWx5PVJvYm90bytTbGFiOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29sb3Igc3R5bGVzICovXFxuLyogVGV4dC1zaXplIHN0eWxlcyAqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMy43JSk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBTbGFiXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDg1JTtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTB2aDtcXG59XFxuXFxubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdi1hY3RpdmUge1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogXFxcIkxvYnN0ZXIgVHdvXFxcIiwgY3Vyc2l2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdi1pdGVtOm5vdCgubmF2LWFjdGl2ZSk6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG4gIGhlaWdodDogMnB4O1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIHJpZ2h0O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2Utb3V0O1xcbn1cXG4ubmF2LWl0ZW06bm90KC5uYXYtYWN0aXZlKTpob3Zlcjo6YWZ0ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gbGVmdDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubGFuZGluZy1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLndlbGNvbWUtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzRkZWcsIDM3LjclLCA4OCUpO1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTMuNyUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNDB2aDtcXG59XFxuXFxuLndlbGNvbWUtdGV4dCB7XFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG4ud2VsY29tZS10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi53ZWxjb21lLXBhcmFncmFwaCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi53b3JraW5nLWhvdXJzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTdkZWcsIDc3LjclLCA1NC4zJSk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBlbSAwO1xcbn1cXG5cXG4ud29ya2luZy1ob3Vycy10aXRsZSB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxufVxcblxcbi53b3JraW5nLXNjaGVkdWxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBnYXA6IDI0cHg7XFxufVxcblxcbi5zY2hlZHVsZS1ob3VycyB7XFxuICBsaW5lLWhlaWdodDogMmVtO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM0ZGVnLCAzNy43JSwgODglKTtcXG4gIHBhZGRpbmc6IDIuNWVtIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXR0cmlidXRpb24ge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IGhzbCgwZGVnLCAwJSwgMTMuNyUpO1xcbn1cXG4uYXR0cmlidXRpb24gYSB7XFxuICBjb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG59XFxuXFxuLm91ci1yZWNvbW1lbmRhdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzRkZWcsIDM3LjclLCA4OCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogOTB2aDtcXG59XFxuXFxuLm91ci1yZWNvbW1lbmRhdGlvbi10aXRsZSxcXG4ubWVudS10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5yZWNvbW1lbmRlZC1wYXN0YSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1ZW07XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMy43JSk7XFxufVxcblxcbi5kaXNoLXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmRpc2gtdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5kaXNoLXBhcmEge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4uaW1nLXdyYXAge1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5kaXNoLWltYWdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XFxufVxcblxcbi5tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNTdkZWcsIDc3LjclLCA1NC4zJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNWVtIDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5tZW51LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIHJvdy1nYXA6IDRlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Nhc3MvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQXdCQSxpQkFBQTtBQUtBLHFCQUFBO0FBVUE7OztFQUdFLHNCQUFBO0FBbkNGOztBQXNDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBbkNGOztBQXNDQTtFQUNFLDJCQTFCTTtFQTJCTixpQ0FmTztFQWdCUCxpQkFwQmtCO0FBZnBCOztBQXNDQTtFQUNFLGVBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UscUJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZ0JBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsZUF2Q1U7QUFJWjs7QUFzQ0E7RUFDRSxlQTFDVTtBQU9aOztBQXNDQTtFQUNFLGVBN0NVO0FBVVo7O0FBc0NBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBbkNGOztBQXNDQTtFQUNFLDJDQTNEVztFQTREWCxtQ0FuRFE7RUFvRFIsWUFBQTtFQXRGQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXNGQSxZQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBakNGOztBQW9DQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBakNGOztBQW9DQTtFQUNFLDhCQUFBO0FBakNGOztBQW9DQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkE5RWtCO0VBK0VsQixtQ0E1RVE7RUE2RVIsZUFBQTtBQWpDRjtBQXpFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBQTJFSjtBQXpFRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUEyRUo7O0FBcUJBO0VBQ0UsZUF2RlU7RUF3RlYsWUFBQTtBQWxCRjs7QUFxQkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSx3Q0F2R1k7RUF3R1osMkJBekdNO0VBdkJOLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBZ0lBLFlBQUE7QUFoQkY7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFpQkE7RUFDRSxlQTNHVTtBQTZGWjs7QUFnQkE7RUFDRSxnQkFBQTtFQUNBLGlCQTdHa0I7QUFnR3BCOztBQWdCQTtFQUNFLDJDQXZIVztFQXdIWCxZQUFBO0VBakpBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBaUpBLGVBQUE7QUFYRjs7QUFhQTtFQUNFLGVBekhVO0VBMEhWLGtCQUFBO0VBQ0Esa0JBQUE7QUFWRjs7QUFZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQTlIa0I7RUErSGxCLGtCQUFBO0VBQ0EsU0FBQTtBQVRGOztBQVdBO0VBQ0UsZ0JBQUE7QUFSRjs7QUFXQTtFQUNFLHdDQTlJWTtFQStJWixnQkFBQTtFQXZLQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWdLRjs7QUFRQTtFQUNFLGtCQTNJZ0I7RUE0SWhCLGtCQUFBO0VBQ0EsMkJBdEpNO0FBaUpSO0FBTUU7RUFDRSxnQ0F0SlM7QUFrSmI7O0FBUUE7RUFDRSx3Q0E1Slk7RUF4QlosYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFvTEEsWUFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQTFLTTtBQXVLUjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxvQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBN0tnQjtFQThLaEIsa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsMkNBak1XO0VBekJYLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBME5BLGNBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQURGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXIrVHdvOndnaHRANDAwOzcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AbWl4aW4gZmxleENlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gdW5kZXJsaW5lQW5pbWF0aW9uIHtcXHJcXG4gICY6bm90KC5uYXYtYWN0aXZlKTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gICY6bm90KC5uYXYtYWN0aXZlKTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIENvbG9yIHN0eWxlcyAqL1xcclxcbiRibGFjazogaHNsYSgwLCAwJSwgMTMuNyUsIDEpO1xcclxcbiRwYWxlLW9yYW5nZTogaHNsYSgzNCwgMzcuNyUsIDg4JSwgMSk7XFxyXFxuJGFjY2VudC1yZWQ6IGhzbGEoMzU3LCA3Ny43JSwgNTQuMyUsIDEpO1xcclxcblxcclxcbi8qIFRleHQtc2l6ZSBzdHlsZXMgKi9cXHJcXG4kaGVhZGluZy0xOiA0cmVtO1xcclxcbiRoZWFkaW5nLTI6IDNyZW07XFxyXFxuJGhlYWRpbmctMzogMnJlbTtcXHJcXG4kcmVndWFsci1wYXJhZ3JhcGg6IDEuNXJlbTtcXHJcXG4kc21hbGwtcGFyYWdyYXBoOiAxLjI1cmVtO1xcclxcblxcclxcbiRsb2JzdGVyOiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcclxcbiRyb2JvdG86IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBjb2xvcjogJGJsYWNrO1xcclxcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG87XFxyXFxuICBmb250LXNpemU6ICRyZWd1YWxyLXBhcmFncmFwaDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAkaGVhZGluZy0yO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1yZWQ7XFxyXFxuICBmb250LWZhbWlseTogJGxvYnN0ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogJHJlZ3VhbHItcGFyYWdyYXBoO1xcclxcbiAgZm9udC1mYW1pbHk6ICRsb2JzdGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgQGluY2x1ZGUgdW5kZXJsaW5lQW5pbWF0aW9uKCk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtb3JhbmdlO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG59XFxyXFxuLndlbGNvbWUtdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG4ud2VsY29tZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTI7XFxyXFxufVxcclxcbi53ZWxjb21lLXBhcmFncmFwaCB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgZm9udC1zaXplOiAkcmVndWFsci1wYXJhZ3JhcGg7XFxyXFxufVxcclxcblxcclxcbi53b3JraW5nLWhvdXJzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgcGFkZGluZzogMTBlbSAwO1xcclxcbn1cXHJcXG4ud29ya2luZy1ob3Vycy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcbi53b3JraW5nLXNjaGVkdWxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAkcmVndWFsci1wYXJhZ3JhcGg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxufVxcclxcbi5zY2hlZHVsZS1ob3VycyB7XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtb3JhbmdlO1xcclxcbiAgcGFkZGluZzogMi41ZW0gMDtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG59XFxyXFxuLmF0dHJpYnV0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNtYWxsLXBhcmFncmFwaDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXJlY29tbWVuZGF0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwYWxlLW9yYW5nZTtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm91ci1yZWNvbW1lbmRhdGlvbi10aXRsZSxcXHJcXG4ubWVudS10aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNvbW1lbmRlZC1wYXN0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1ZW07XFxyXFxuICBjb2xvcjogJGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNtYWxsLXBhcmFncmFwaDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy13cmFwIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1pbWFnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXJlZDtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIHBhZGRpbmc6IDVlbSAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICByb3ctZ2FwOiA0ZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tIFwiLi9lbXB0eUNvbnRlbnRcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVDb250YWN0KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgZW1wdHlDb250ZW50KCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVtcHR5Q29udGVudCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSBcIi4vZW1wdHlDb250ZW50XCI7XHJcbmltcG9ydCBjb3ZlckltYWdlIGZyb20gXCIuLi9pbWcvQ292ZXIuanBnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZUhvbWUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBlbXB0eUNvbnRlbnQoKTtcclxuXHJcbiAgLy8gICBMYW5kaW5nIGltYWdlXHJcbiAgY29uc3QgZGl2SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpdkltYWdlLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLWltYWdlXCIpO1xyXG4gIGNvbnN0IGxhbmRpbmdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgbGFuZGluZ0ltYWdlLnNyYyA9IGNvdmVySW1hZ2U7XHJcbiAgbGFuZGluZ0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJsYW5kaW5nLWltYWdlXCIpO1xyXG4gIGRpdkltYWdlLmFwcGVuZENoaWxkKGxhbmRpbmdJbWFnZSk7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChkaXZJbWFnZSk7XHJcblxyXG4gIC8vICAgV2VsY29tZSBzZWN0aW9uXHJcbiAgY29uc3Qgd2VsY29tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICB3ZWxjb21lU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1zZWN0aW9uXCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdlbGNvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICBjb25zdCB3ZWxjb21lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VsY29tZVRleHQuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtdGV4dFwiKTtcclxuICBjb25zdCB3ZWxjb21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgd2VsY29tZVRpdGxlLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIHRoZSBQYXN0YSBIb3VzZVwiO1xyXG4gIHdlbGNvbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS10aXRsZVwiKTtcclxuICBjb25zdCB3ZWxjb21lUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHdlbGNvbWVQYXJhLnRleHRDb250ZW50ID1cclxuICAgIFwiSGVyZSB3ZSBwcmVwYXJlIHNvbWUgb2YgdGhlIGJlc3QgcGFzdGEgdGhlIHdvcmxkIGhhcyBldmVyIHNlZW4hIENvbWUgYW5kIHNlZSBpdCBmb3IgeW91cnNlbGYhXCI7XHJcbiAgd2VsY29tZVBhcmEuY2xhc3NMaXN0LmFkZChcIndlbGNvbWUtcGFyYWdyYXBoXCIpO1xyXG4gIHdlbGNvbWVUZXh0LmFwcGVuZENoaWxkKHdlbGNvbWVUaXRsZSk7XHJcbiAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQod2VsY29tZVBhcmEpO1xyXG4gIHdlbGNvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VsY29tZVRleHQpO1xyXG4gIHdlbGNvbWVTZWN0aW9uLmFwcGVuZENoaWxkKHdlbGNvbWVDb250YWluZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VsY29tZVNlY3Rpb24pO1xyXG5cclxuICAvLyAgIFdvcmtpbmcgaG91cnMgc2VjdGlvblxyXG4gIGNvbnN0IHdvcmtUaW1lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IHdvcmtpbmdIb3Vyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd29ya2luZ0hvdXJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgd29ya1RpbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3b3JraW5nLWhvdXJzXCIpO1xyXG4gIGNvbnN0IHdvcmtUaW1lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgd29ya1RpbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiLU91ciB3b3JraW5nIGhvdXJzLVwiO1xyXG4gIHdvcmtUaW1lVGl0bGUuY2xhc3NMaXN0LmFkZChcIndvcmtpbmctaG91cnMtdGl0bGVcIik7XHJcbiAgY29uc3Qgd29ya0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3JrSG91cnMuY2xhc3NMaXN0LmFkZChcIndvcmtpbmctc2NoZWR1bGVcIik7XHJcblxyXG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZUNyZWF0b3IoXCJNb25kYXkgLSBUaHVyc2RheVwiLCBcIjEwOjAwIC0gMjI6MDBcIikpO1xyXG5cclxuICB3b3JrSG91cnMuYXBwZW5kQ2hpbGQoc2NoZWR1bGVDcmVhdG9yKFwiRnJpZGF5XCIsIFwiMTY6MDAgLSAwMDowMFwiKSk7XHJcblxyXG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZUNyZWF0b3IoXCJTYXR1cmRheSAtIFN1bmRheVwiLCBcIjEyOjAwIC0gMTg6MDBcIikpO1xyXG5cclxuICB3b3JraW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod29ya1RpbWVUaXRsZSk7XHJcbiAgd29ya2luZ0hvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKHdvcmtIb3Vycyk7XHJcbiAgd29ya1RpbWVTZWN0aW9uLmFwcGVuZENoaWxkKHdvcmtpbmdIb3Vyc0NvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3b3JrVGltZVNlY3Rpb24pO1xyXG5cclxuICAvLyAgIEZvb3RlclxyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgYXR0cmlidXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYXR0cmlidXRpb25UZXh0LnRleHRDb250ZW50ID0gXCJQaG90byBieSBcIjtcclxuICBjb25zdCBhdHRyaWJ1dGlvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICBhdHRyaWJ1dGlvbkxpbmsuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xyXG4gIGF0dHJpYnV0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XHJcbiAgYXR0cmlidXRpb25MaW5rLnRleHRDb250ZW50ID0gXCJEaXZhbmkgKERpdmEpXCI7XHJcbiAgYXR0cmlidXRpb25MaW5rLmhyZWYgPVxyXG4gICAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZnVsbGJvYXJkcGhvdG9ncmFwaHk/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI7XHJcbiAgYXR0cmlidXRpb25UZXh0LmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uTGluayk7XHJcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGF0dHJpYnV0aW9uVGV4dCk7XHJcbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzY2hlZHVsZUNyZWF0b3IoZGF5c1RleHQsIGhvdXJzVGV4dCkge1xyXG4gIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBncm91cC5jbGFzc0xpc3QuYWRkKFwic2NoZWR1bGUtaG91cnNcIik7XHJcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRheXMudGV4dENvbnRlbnQgPSBkYXlzVGV4dDtcclxuICBncm91cC5hcHBlbmRDaGlsZChkYXlzKTtcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGhvdXJzLnRleHRDb250ZW50ID0gaG91cnNUZXh0O1xyXG4gIGdyb3VwLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICByZXR1cm4gZ3JvdXA7XHJcbn1cclxuIiwiaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSBcIi4vZW1wdHlDb250ZW50XCI7XHJcbmltcG9ydCBhbGxhTm9ybWEgZnJvbSBcIi4uL2ltZy9hbGxhLW5vcm1hLmpwZWdcIjtcclxuaW1wb3J0IGJvbG9nbmVzZSBmcm9tIFwiLi4vaW1nL2JvbG9nbmVzZS5qcGVnXCI7XHJcbmltcG9ydCBjYXJib25hcmEgZnJvbSBcIi4uL2ltZy9jYXJib25hcmEuanBlZ1wiO1xyXG5pbXBvcnQgZmV0dHVjY2luZSBmcm9tIFwiLi4vaW1nL2ZldHR1Y2NpbmUuanBlZ1wiO1xyXG5pbXBvcnQgdm9uZ29sZSBmcm9tIFwiLi4vaW1nL3ZvbmdvbGUuanBlZ1wiO1xyXG5pbXBvcnQgbWFjYXJvbmlDaGVlc2UgZnJvbSBcIi4uL2ltZy9tYWNhcm9uaS1jaGVlc2UuanBlZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcG9wdWxhdGVNZW51KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgZW1wdHlDb250ZW50KCk7XHJcblxyXG4gIC8vIE91ciByZWNvbW1lbmRhdGlvblxyXG4gIGNvbnN0IG91clJlY29tbWVuZGF0aW9uU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIG91clJlY29tbWVuZGF0aW9uU2VjdGlvbi5jbGFzc0xpc3QuYWRkKFwib3VyLXJlY29tbWVuZGF0aW9uXCIpO1xyXG4gIGNvbnN0IG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBvdXJSZWNvbW1lbmRhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG91clJlY29tbW5lZGF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgb3VyUmVjb21tbmVkYXRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIHJlY29tbWVuZGF0aW9uXCI7XHJcbiAgb3VyUmVjb21tbmVkYXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwib3VyLXJlY29tbWVuZGF0aW9uLXRpdGxlXCIpO1xyXG4gIG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKG91clJlY29tbW5lZGF0aW9uVGl0bGUpO1xyXG4gIGNvbnN0IHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZWNvbW1lbmRhdGlvblBhc3RhV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicmVjb21tZW5kZWQtcGFzdGFcIik7XHJcbiAgcmVjb21tZW5kYXRpb25QYXN0YVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJGZXR0dWNjaW5lIEFsZnJlZG9cIixcclxuICAgICAgXCJBbHNvIGtub3duIGFzIGZldHR1Y2NpbmUgYWwgYnVycm8gKGZldHR1Y2NpbmUgd2l0aGJ1dHRlciksIGZldHR1Y2NpbmUgYWxmcmVkbyBpcyBhIHNpbXBsZSBwYXN0YSBkaXNoY29uc2lzdGluZyBvZiBmZXR0dWNjaW5lIChmbGF0IHBhc3RhIHJpYmJvbnMpIHRvc3NlZCB3aXRocGFybWVzYW4gY2hlZXNlIGFuZCBidXR0ZXIuIFRoZSBwcm9jZXNzIGVtdWxzaWZpZXN0aGUgaW5ncmVkaWVudHMgZm9yIGEgcmljaCwgc2lsa3kgZmluaXNoLlwiLFxyXG4gICAgICBmZXR0dWNjaW5lXHJcbiAgICApXHJcbiAgKTtcclxuICByZWNvbW1lbmRhdGlvblBhc3RhV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIkNhcmJvbmFyYVwiLFxyXG4gICAgICBcIlRoaXMgZGlzaCBjb21iaW5pbmcgYSBwYXN0YSB2YXJpZXR5IHN1Y2ggYXMgcGVubmUgb3JzcGFnaGV0dGkgd2l0aCBhIGNyZWFtLWJhc2VkIHNhdWNlIHdpdGggaGFtIG9ycGFuY2V0dGEuIFRoZSB0cmFkaXRpb25hbCBSb21hbiBjYXJib25hcmEgc2F1Y2Vjb250YWlucyBlZ2dzLCBhIGhhcmQgY2hlZXNlIHN1Y2ggYXMgcGVjb3Jpbm8gb3JwYXJtZXNhbiwgY3VyZWQgcG9yaywgYW5kIGJsYWNrIHBlcHBlclwiLFxyXG4gICAgICBjYXJib25hcmFcclxuICAgIClcclxuICApO1xyXG5cclxuICBvdXJSZWNvbW1lbmRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWNvbW1lbmRhdGlvblBhc3RhV3JhcHBlcik7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChvdXJSZWNvbW1lbmRhdGlvblNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIG1lbnVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgbWVudVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJtZW51LXRpdGxlXCIpO1xyXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9IFwiUmVzdCBvZiBvdXIgbWVudVwiO1xyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVUaXRsZSk7XHJcblxyXG4gIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtZW51V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWVudS13cmFwcGVyXCIpO1xyXG4gIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiUGFzdGEgYWxsYSBOb3JtYVwiLFxyXG4gICAgICBcIlRoZSBkaXNoIGNvbnNpc3RzIG9mIGEgcGFzdGEgdmFyaWV0eSBzdWNoIGFzIHppdGkgb3JyaWdhdG9uaSBjb29rZWQgd2l0aCBhdWJlcmdpbmUsIHRvbWF0b2VzLCBoZXJicywgc3BpY2VzLGNhcGVycyBhbmQgY2hlZXNlLlwiLFxyXG4gICAgICBhbGxhTm9ybWFcclxuICAgIClcclxuICApO1xyXG4gIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiU3BhZ2hldHRpIGFsbGUgVm9uZ29sZVwiLFxyXG4gICAgICBcIlRoZSBkaXNoIGNhbiBiZSBjb29rZWQg4oCYaW4gYmlhbmNv4oCZIC0gd2l0aCBnYXJsaWMsIG9pbCxoZXJicyBhbmQgd2hpdGUgd2luZSwgb3Ig4oCYaW4gcm9zc2/igJkgLSB3aXRoIGdhcmxpYywgb2lsLGhlcmJzIGFuZCB0b21hdG9lc1wiLFxyXG4gICAgICB2b25nb2xlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIk1hY2Fyb25pIENoZWVzZVwiLFxyXG4gICAgICBcIlRoZSBkaXNoIGNvbnNpc3RzIG9mIG1hY2Fyb25pIHBhc3RhLCBiYWtlZCBpbiBhIGNoZWVzeWJlY2hhbWVsIHNhdWNlIGluIHRoZSBvdmVuLiBJdCBpcyBjb29rZWQgd2l0aCBjaGVlZGFyY2hlZXNlIGFuZCBnYXJuaXNoZWQgd2l0aCBwYXJzZWx5LlwiLFxyXG4gICAgICBtYWNhcm9uaUNoZWVzZVxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJTcGFnaGV0dGkgQm9sb2duZXNlXCIsXHJcbiAgICAgIFwiU3BhZ2hldHRpIGJvbG9nbmFpc2UgaXMgYSBwYXN0YSBkaXNoIGNvbnNpc3Rpbmcgb2ZzcGFnaGV0dGkgYW5kIGEgc2F1Y2UgbWFkZSBvZiBtaW5jZWQgYmVlZix0b21hdG9lcywgb25pb24sIGJhY29uLCByZWQgd2luZSBhbmQgaGVyYnMuXCIsXHJcbiAgICAgIGJvbG9nbmVzZVxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51V3JhcHBlcik7XHJcbiAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVNlY3Rpb24pO1xyXG5cclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGZvb3RlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZm9vdGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3QgYXR0cmlidXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgYXR0cmlidXRpb25UZXh0LnRleHRDb250ZW50ID0gXCJBbGwgcGhvdG9zIGFuZCBpbmZvIGFyZSBmcm9tIFwiO1xyXG4gIGNvbnN0IGF0dHJpYnV0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGF0dHJpYnV0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XHJcbiAgYXR0cmlidXRpb25MaW5rLmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcclxuICBhdHRyaWJ1dGlvbkxpbmsudGV4dENvbnRlbnQgPSBcInRoaXMgYmxvZ1wiO1xyXG4gIGF0dHJpYnV0aW9uTGluay5ocmVmID0gXCJodHRwczovL2VydWR1cy5jb20vZWRpdG9yaWFsL3RoZS1mb29kLWFnZW5kYS9tb3N0LWZhbW91cy1wYXN0YS1kaXNoZXNcIjtcclxuICBhdHRyaWJ1dGlvblRleHQuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25MaW5rKTtcclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25UZXh0KTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc2hDcmVhdG9yKGRpc2hOYW1lLCBkaXNoRGVzY3JpcHRpb24sIGRpc2hJbWcpIHtcclxuICBjb25zdCBkaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkaXNoLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXdyYXBwZXJcIik7XHJcbiAgY29uc3QgZGlzaFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xyXG4gIGRpc2hUaXRsZS5jbGFzc0xpc3QuYWRkKFwiZGlzaC10aXRsZVwiKTtcclxuICBjb25zdCBkaXNoUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGRpc2hQYXJhLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXBhcmFcIik7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBjb25zdCBpbWdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpbWdXcmFwLmNsYXNzTGlzdC5hZGQoXCJpbWctd3JhcFwiKTtcclxuICBpbWdXcmFwLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJkaXNoLWltYWdlXCIpO1xyXG5cclxuICBkaXNoVGl0bGUudGV4dENvbnRlbnQgPSBkaXNoTmFtZTtcclxuICBkaXNoUGFyYS50ZXh0Q29udGVudCA9IGRpc2hEZXNjcmlwdGlvbjtcclxuICBpbWcuc3JjID0gZGlzaEltZztcclxuXHJcbiAgZGlzaC5hcHBlbmRDaGlsZChkaXNoVGl0bGUpO1xyXG4gIGRpc2guYXBwZW5kQ2hpbGQoZGlzaFBhcmEpO1xyXG4gIGRpc2guYXBwZW5kQ2hpbGQoaW1nV3JhcCk7XHJcblxyXG4gIHJldHVybiBkaXNoO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgcG9wdWxhdGVIb21lIGZyb20gXCIuL21vZHVsZXMvaG9tZU1vZHVsZVwiO1xyXG5pbXBvcnQgcG9wdWxhdGVNZW51IGZyb20gXCIuL21vZHVsZXMvbWVudU1vZHVsZVwiO1xyXG5pbXBvcnQgcG9wdWxhdGVDb250YWN0IGZyb20gXCIuL21vZHVsZXMvY29udGFjdE1vZHVsZVwiO1xyXG5pbXBvcnQgXCIuL3Nhc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5jb25zb2xlLmxvZyhcImhlbGxvIGZyb20gaW5kZXguanNcIik7XHJcblxyXG5wb3B1bGF0ZUhvbWUoKTtcclxuXHJcbmxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtaXRlbVwiKTtcclxuY29uc3QgaG9tZSA9IG5hdmlnYXRpb25bMF07XHJcbmNvbnN0IG1lbnUgPSBuYXZpZ2F0aW9uWzFdO1xyXG5jb25zdCBjb250YWN0ID0gbmF2aWdhdGlvblsyXTtcclxuXHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVsYXRlSG9tZSk7XHJcblxyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3B1bGF0ZU1lbnUpO1xyXG5cclxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVDb250YWN0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9