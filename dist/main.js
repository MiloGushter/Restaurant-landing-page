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
___CSS_LOADER_EXPORT___.push([module.id, "/* Color styles */\n/* Text-size styles */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  color: hsl(0deg, 0%, 13.7%);\n  font-family: \"Roboto Slab\", serif;\n  font-size: 1.5rem;\n}\n\nimg {\n  max-width: 100%;\n}\n\na {\n  text-decoration: none;\n}\n\nul {\n  list-style: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nh3 {\n  font-size: 2rem;\n}\n\n.container {\n  width: 85%;\n  max-width: 1200px;\n}\n\nheader {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  font-family: \"Lobster Two\", cursive;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 10vh;\n}\n\nnav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-list {\n  display: flex;\n  gap: 20px;\n}\n\n.nav-active {\n  border-bottom: 2px solid white;\n}\n\n.nav-item {\n  display: inline-block;\n  position: relative;\n  font-size: 1.5rem;\n  font-family: \"Lobster Two\", cursive;\n  cursor: pointer;\n}\n.nav-item:not(.nav-active)::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  transform: scaleX(0);\n  height: 2px;\n  bottom: 0;\n  left: 0;\n  background-color: white;\n  transform-origin: bottom right;\n  transition: transform 0.25s ease-out;\n}\n.nav-item:not(.nav-active):hover::after {\n  transform: scaleX(1);\n  transform-origin: bottom left;\n}\n\n.logo {\n  font-size: 3rem;\n  color: white;\n}\n\n.landing-image {\n  width: 100%;\n  max-height: 50vh;\n  object-fit: cover;\n}\n\n.welcome-section {\n  background-color: hsl(34deg, 37.7%, 88%);\n  color: hsl(0deg, 0%, 13.7%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40vh;\n}\n\n.welcome-text {\n  max-width: 700px;\n}\n\n.welcome-title {\n  font-size: 3rem;\n}\n\n.welcome-paragraph {\n  max-width: 600px;\n  font-size: 1.5rem;\n}\n\n.working-hours {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10em 0;\n}\n\n.working-hours-title {\n  font-size: 3rem;\n  text-align: center;\n  margin-bottom: 2em;\n}\n\n.working-schedule {\n  display: flex;\n  flex-direction: column;\n  font-size: 1.5rem;\n  text-align: center;\n  gap: 24px;\n}\n\n.schedule-hours {\n  line-height: 2em;\n}\n\nfooter {\n  background-color: hsl(34deg, 37.7%, 88%);\n  padding: 2.5em 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.attribution {\n  font-size: 1.25rem;\n  text-align: center;\n  color: hsl(0deg, 0%, 13.7%);\n}\n.attribution a {\n  color: hsl(357deg, 77.7%, 54.3%);\n}\n\n.our-recommendation {\n  background-color: hsl(34deg, 37.7%, 88%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 90vh;\n}\n\n.our-recommendation-title,\n.menu-title {\n  margin-bottom: 1em;\n}\n\n.recommended-pasta {\n  display: flex;\n  gap: 5em;\n  color: hsl(0deg, 0%, 13.7%);\n}\n\n.dish-wrapper {\n  max-width: 500px;\n}\n\n.dish-title {\n  margin-bottom: 0.5em;\n}\n\n.dish-para {\n  font-size: 1.25rem;\n  margin-bottom: 1em;\n}\n\n.img-wrap {\n  object-fit: cover;\n}\n\n.dish-image {\n  border-radius: 24px;\n}\n\n.menu {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5em 0;\n  color: white;\n}\n\n.menu-wrapper {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  row-gap: 4em;\n  color: white;\n}\n\n.reservation {\n  background-color: hsl(34deg, 37.7%, 88%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5em 0;\n}\n\n.reservation-para {\n  margin-bottom: 1em;\n  max-width: 700px;\n}\n\n.reservation-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(200px, 500px));\n  grid-template-rows: repeat(4, 1fr);\n  justify-content: space-between;\n  row-gap: 10px;\n  padding: 4em 0em;\n}\n\n#full-name {\n  grid-row: 2;\n}\n\n#phone-number {\n  grid-row: 4;\n}\n\ntextarea[name=message] {\n  grid-row: 2/-1;\n}\n\ninput,\ntextarea {\n  border: none;\n  border-radius: 8px;\n  resize: none;\n  padding: 0.75em 0.5em;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\n.number-footer {\n  background-color: hsl(357deg, 77.7%, 54.3%);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.number-title {\n  margin-bottom: 1em;\n}\n\n.number-para {\n  margin-bottom: 0.5em;\n}", "",{"version":3,"sources":["webpack://./src/sass/main.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Roboto+Slab:wght@300;400;700&display=swap\");\r\n@mixin flexCenter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n@mixin underlineAnimation {\r\n  &:not(.nav-active)::after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 100%;\r\n    transform: scaleX(0);\r\n    height: 2px;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: white;\r\n    transform-origin: bottom right;\r\n    transition: transform 0.25s ease-out;\r\n  }\r\n  &:not(.nav-active):hover::after {\r\n    transform: scaleX(1);\r\n    transform-origin: bottom left;\r\n  }\r\n}\r\n/* Color styles */\r\n$black: hsla(0, 0%, 13.7%, 1);\r\n$pale-orange: hsla(34, 37.7%, 88%, 1);\r\n$accent-red: hsla(357, 77.7%, 54.3%, 1);\r\n\r\n/* Text-size styles */\r\n$heading-1: 4rem;\r\n$heading-2: 3rem;\r\n$heading-3: 2rem;\r\n$regualr-paragraph: 1.5rem;\r\n$small-paragraph: 1.25rem;\r\n\r\n$lobster: \"Lobster Two\", cursive;\r\n$roboto: \"Roboto Slab\", serif;\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  color: $black;\r\n  font-family: $roboto;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n}\r\n\r\nh1 {\r\n  font-size: $heading-1;\r\n}\r\n\r\nh2 {\r\n  font-size: $heading-2;\r\n}\r\n\r\nh3 {\r\n  font-size: $heading-3;\r\n}\r\n\r\n.container {\r\n  width: 85%;\r\n  max-width: 1200px;\r\n}\r\n\r\nheader {\r\n  background-color: $accent-red;\r\n  font-family: $lobster;\r\n  color: white;\r\n  @include flexCenter();\r\n  height: 10vh;\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav-list {\r\n  display: flex;\r\n  gap: 20px;\r\n}\r\n\r\n.nav-active {\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.nav-item {\r\n  display: inline-block;\r\n  position: relative;\r\n  font-size: $regualr-paragraph;\r\n  font-family: $lobster;\r\n  cursor: pointer;\r\n  @include underlineAnimation();\r\n}\r\n\r\n.logo {\r\n  font-size: $heading-2;\r\n  color: white;\r\n}\r\n\r\n.landing-image {\r\n  width: 100%;\r\n  max-height: 50vh;\r\n  object-fit: cover;\r\n}\r\n\r\n.welcome-section {\r\n  background-color: $pale-orange;\r\n  color: $black;\r\n  @include flexCenter();\r\n  height: 40vh;\r\n}\r\n.welcome-text {\r\n  max-width: 700px;\r\n}\r\n.welcome-title {\r\n  font-size: $heading-2;\r\n}\r\n.welcome-paragraph {\r\n  max-width: 600px;\r\n  font-size: $regualr-paragraph;\r\n}\r\n\r\n.working-hours {\r\n  background-color: $accent-red;\r\n  color: white;\r\n  @include flexCenter();\r\n  padding: 10em 0;\r\n}\r\n.working-hours-title {\r\n  font-size: $heading-2;\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n.working-schedule {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: $regualr-paragraph;\r\n  text-align: center;\r\n  gap: 24px;\r\n}\r\n.schedule-hours {\r\n  line-height: 2em;\r\n}\r\n\r\nfooter {\r\n  background-color: $pale-orange;\r\n  padding: 2.5em 0;\r\n  @include flexCenter();\r\n}\r\n.attribution {\r\n  font-size: $small-paragraph;\r\n  text-align: center;\r\n  color: $black;\r\n  a {\r\n    color: $accent-red;\r\n  }\r\n}\r\n\r\n.our-recommendation {\r\n  background-color: $pale-orange;\r\n  @include flexCenter();\r\n  height: 90vh;\r\n}\r\n\r\n.our-recommendation-title,\r\n.menu-title {\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.recommended-pasta {\r\n  display: flex;\r\n  gap: 5em;\r\n  color: $black;\r\n}\r\n\r\n.dish-wrapper {\r\n  max-width: 500px;\r\n}\r\n\r\n.dish-title {\r\n  margin-bottom: 0.5em;\r\n}\r\n\r\n.dish-para {\r\n  font-size: $small-paragraph;\r\n  margin-bottom: 1em;\r\n}\r\n\r\n.img-wrap {\r\n  object-fit: cover;\r\n}\r\n\r\n.dish-image {\r\n  border-radius: 24px;\r\n}\r\n\r\n.menu {\r\n  background-color: $accent-red;\r\n  @include flexCenter();\r\n  padding: 5em 0;\r\n  color: white;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  row-gap: 4em;\r\n  color: white;\r\n}\r\n\r\n.reservation {\r\n  background-color: $pale-orange;\r\n  @include flexCenter();\r\n  padding: 5em 0;\r\n}\r\n.reservation-para {\r\n  margin-bottom: 1em;\r\n  max-width: 700px;\r\n}\r\n\r\n.reservation-form {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, minmax(200px, 500px));\r\n  grid-template-rows: repeat(4, 1fr);\r\n  justify-content: space-between;\r\n  row-gap: 10px;\r\n  padding: 4em 0em;\r\n}\r\n\r\n#full-name {\r\n  grid-row: 2;\r\n}\r\n#phone-number {\r\n  grid-row: 4;\r\n}\r\ntextarea[name=\"message\"] {\r\n  grid-row: 2/-1;\r\n}\r\n\r\ninput,\r\ntextarea {\r\n  border: none;\r\n  border-radius: 8px;\r\n  resize: none;\r\n  padding: 0.75em 0.5em;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\ninput[type=\"number\"] {\r\n  -moz-appearance: textfield;\r\n}\r\n\r\n.number-footer {\r\n  background-color: $accent-red;\r\n  color: white;\r\n  @include flexCenter();\r\n  text-align: center;\r\n}\r\n\r\n.number-title {\r\n  margin-bottom: 1em;\r\n}\r\n.number-para {\r\n  margin-bottom: 0.5em;\r\n}\r\n"],"sourceRoot":""}]);
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

  const reservationSection = document.createElement("section");
  reservationSection.classList.add("reservation");
  const reservationContainer = document.createElement("div");
  reservationContainer.classList.add("container");
  const reservationTitle = document.createElement("h2");
  reservationTitle.classList.add("reservation-title");
  reservationTitle.textContent = "Need a reservation?";
  const reservationParagraph = document.createElement("p");
  reservationParagraph.classList.add("reservation-para");
  reservationParagraph.textContent =
    "You can either contact us via phone or leave your information about reservation and we will take care for everything else";
  reservationContainer.appendChild(reservationTitle);
  reservationContainer.appendChild(reservationParagraph);

  const reservationForm = document.createElement("from");
  reservationForm.classList.add("reservation-form");
  reservationForm.setAttribute("method", "get");

  const fullNameLabel = document.createElement("label");
  fullNameLabel.textContent = "Full name";
  fullNameLabel.setAttribute("for", "full-name");
  const fullNameInput = document.createElement("input");
  fullNameInput.setAttribute("type", "text");
  fullNameInput.setAttribute("id", "full-name");
  fullNameInput.setAttribute("name", "full-name");

  const phoneNumberLabel = document.createElement("label");
  phoneNumberLabel.setAttribute("for", "phone-number");
  phoneNumberLabel.textContent = "Phone number";
  const phoneNumberInput = document.createElement("input");
  phoneNumberInput.setAttribute("type", "number");
  phoneNumberInput.setAttribute("id", "phone-number");
  phoneNumberInput.setAttribute("name", "phone-number");

  const messageArea = document.createElement("textarea");
  messageArea.setAttribute("name", "message");
  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Your message";

  reservationForm.appendChild(fullNameLabel);
  reservationForm.appendChild(fullNameInput);
  reservationForm.appendChild(messageLabel);
  reservationForm.appendChild(messageArea);
  reservationForm.appendChild(phoneNumberLabel);
  reservationForm.appendChild(phoneNumberInput);

  reservationContainer.appendChild(reservationForm);

  reservationSection.appendChild(reservationContainer);
  content.appendChild(reservationSection);

  const ourNumberFooter = document.createElement("footer");
  ourNumberFooter.classList.add("number-footer");
  const ourNumberContainer = document.createElement("div");
  ourNumberContainer.classList.add("container");
  const ourNumbersTitle = document.createElement("h2");
  ourNumbersTitle.textContent = "-Our numbers-";
  ourNumbersTitle.classList.add("number-title");
  const ourNumbersReservation = document.createElement("p");
  ourNumbersReservation.classList.add("number-para");
  ourNumbersReservation.textContent = "Reservation - 555-333";
  const ourNumbersDelivery = document.createElement("p");
  ourNumbersDelivery.classList.add("number-para");
  ourNumbersDelivery.textContent = "Food delivery - 333-555";

  ourNumberContainer.appendChild(ourNumbersTitle);
  ourNumberContainer.appendChild(ourNumbersReservation);
  ourNumberContainer.appendChild(ourNumbersDelivery);
  ourNumberFooter.appendChild(ourNumberContainer);

  content.appendChild(ourNumberFooter);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxhQUFhLGNBQWMsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxhQUFhLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxhQUFhLGFBQWEsVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssYUFBYSxhQUFhLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFX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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUNBO0FBQ007QUFDNUI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsK0RBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMkRBQVk7QUFDM0M7QUFDQSwrQkFBK0IsMkRBQVk7QUFDM0M7QUFDQSxrQ0FBa0MsOERBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9zYXNzL21haW4uc2Nzcz82YTE3Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0TW9kdWxlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21vZHVsZXMvZW1wdHlDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1sYW5kaW5nLXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtbGFuZGluZy1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWxhbmRpbmctcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXIrVHdvOndnaHRANDAwOzcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDb2xvciBzdHlsZXMgKi9cXG4vKiBUZXh0LXNpemUgc3R5bGVzICovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDEzLjclKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIFNsYWJcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG5hIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogODUlO1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzU3ZGVnLCA3Ny43JSwgNTQuMyUpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMb2JzdGVyIFR3b1xcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMHZoO1xcbn1cXG5cXG5uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ubmF2LWFjdGl2ZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5uYXYtaXRlbSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2LWl0ZW06bm90KC5uYXYtYWN0aXZlKTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1vdXQ7XFxufVxcbi5uYXYtaXRlbTpub3QoLm5hdi1hY3RpdmUpOmhvdmVyOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGJvdHRvbSBsZWZ0O1xcbn1cXG5cXG4ubG9nbyB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sYW5kaW5nLWltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4ud2VsY29tZS1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNGRlZywgMzcuNyUsIDg4JSk7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMy43JSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA0MHZoO1xcbn1cXG5cXG4ud2VsY29tZS10ZXh0IHtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxufVxcblxcbi53ZWxjb21lLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLndlbGNvbWUtcGFyYWdyYXBoIHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLndvcmtpbmctaG91cnMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMGVtIDA7XFxufVxcblxcbi53b3JraW5nLWhvdXJzLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuXFxuLndvcmtpbmctc2NoZWR1bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGdhcDogMjRweDtcXG59XFxuXFxuLnNjaGVkdWxlLWhvdXJzIHtcXG4gIGxpbmUtaGVpZ2h0OiAyZW07XFxufVxcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMzRkZWcsIDM3LjclLCA4OCUpO1xcbiAgcGFkZGluZzogMi41ZW0gMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hdHRyaWJ1dGlvbiB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogaHNsKDBkZWcsIDAlLCAxMy43JSk7XFxufVxcbi5hdHRyaWJ1dGlvbiBhIHtcXG4gIGNvbG9yOiBoc2woMzU3ZGVnLCA3Ny43JSwgNTQuMyUpO1xcbn1cXG5cXG4ub3VyLXJlY29tbWVuZGF0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGhzbCgzNGRlZywgMzcuNyUsIDg4JSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA5MHZoO1xcbn1cXG5cXG4ub3VyLXJlY29tbWVuZGF0aW9uLXRpdGxlLFxcbi5tZW51LXRpdGxlIHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLnJlY29tbWVuZGVkLXBhc3RhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVlbTtcXG4gIGNvbG9yOiBoc2woMGRlZywgMCUsIDEzLjclKTtcXG59XFxuXFxuLmRpc2gtd3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uZGlzaC10aXRsZSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmRpc2gtcGFyYSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5pbWctd3JhcCB7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuLmRpc2gtaW1hZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcXG59XFxuXFxuLm1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1ZW0gMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1lbnUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgcm93LWdhcDogNGVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ucmVzZXJ2YXRpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM0ZGVnLCAzNy43JSwgODglKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1ZW0gMDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLXBhcmEge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG59XFxuXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgNTAwcHgpKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICByb3ctZ2FwOiAxMHB4O1xcbiAgcGFkZGluZzogNGVtIDBlbTtcXG59XFxuXFxuI2Z1bGwtbmFtZSB7XFxuICBncmlkLXJvdzogMjtcXG59XFxuXFxuI3Bob25lLW51bWJlciB7XFxuICBncmlkLXJvdzogNDtcXG59XFxuXFxudGV4dGFyZWFbbmFtZT1tZXNzYWdlXSB7XFxuICBncmlkLXJvdzogMi8tMTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogMC43NWVtIDAuNWVtO1xcbn1cXG5cXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmlucHV0W3R5cGU9bnVtYmVyXSB7XFxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXG59XFxuXFxuLm51bWJlci1mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDM1N2RlZywgNzcuNyUsIDU0LjMlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItdGl0bGUge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubnVtYmVyLXBhcmEge1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zYXNzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUF3QkEsaUJBQUE7QUFLQSxxQkFBQTtBQVVBOzs7RUFHRSxzQkFBQTtBQW5DRjs7QUFzQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQW5DRjs7QUFzQ0E7RUFDRSwyQkExQk07RUEyQk4saUNBZk87RUFnQlAsaUJBcEJrQjtBQWZwQjs7QUFzQ0E7RUFDRSxlQUFBO0FBbkNGOztBQXNDQTtFQUNFLHFCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGdCQUFBO0FBbkNGOztBQXNDQTtFQUNFLGVBdkNVO0FBSVo7O0FBc0NBO0VBQ0UsZUExQ1U7QUFPWjs7QUFzQ0E7RUFDRSxlQTdDVTtBQVVaOztBQXNDQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQW5DRjs7QUFzQ0E7RUFDRSwyQ0EzRFc7RUE0RFgsbUNBbkRRO0VBb0RSLFlBQUE7RUF0RkEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFzRkEsWUFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtBQWpDRjs7QUFvQ0E7RUFDRSw4QkFBQTtBQWpDRjs7QUFvQ0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBOUVrQjtFQStFbEIsbUNBNUVRO0VBNkVSLGVBQUE7QUFqQ0Y7QUF6RUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0Esb0NBQUE7QUEyRUo7QUF6RUU7RUFDRSxvQkFBQTtFQUNBLDZCQUFBO0FBMkVKOztBQXFCQTtFQUNFLGVBdkZVO0VBd0ZWLFlBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFsQkY7O0FBcUJBO0VBQ0Usd0NBdkdZO0VBd0daLDJCQXpHTTtFQXZCTixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWdJQSxZQUFBO0FBaEJGOztBQWtCQTtFQUNFLGdCQUFBO0FBZkY7O0FBaUJBO0VBQ0UsZUEzR1U7QUE2Rlo7O0FBZ0JBO0VBQ0UsZ0JBQUE7RUFDQSxpQkE3R2tCO0FBZ0dwQjs7QUFnQkE7RUFDRSwyQ0F2SFc7RUF3SFgsWUFBQTtFQWpKQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQWlKQSxlQUFBO0FBWEY7O0FBYUE7RUFDRSxlQXpIVTtFQTBIVixrQkFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkE5SGtCO0VBK0hsQixrQkFBQTtFQUNBLFNBQUE7QUFURjs7QUFXQTtFQUNFLGdCQUFBO0FBUkY7O0FBV0E7RUFDRSx3Q0E5SVk7RUErSVosZ0JBQUE7RUF2S0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFnS0Y7O0FBUUE7RUFDRSxrQkEzSWdCO0VBNEloQixrQkFBQTtFQUNBLDJCQXRKTTtBQWlKUjtBQU1FO0VBQ0UsZ0NBdEpTO0FBa0piOztBQVFBO0VBQ0Usd0NBNUpZO0VBeEJaLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBb0xBLFlBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSwyQkExS007QUF1S1I7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usb0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQTdLZ0I7RUE4S2hCLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLDJDQWpNVztFQXpCWCxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQTBOQSxjQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFERjs7QUFJQTtFQUNFLHdDQWhOWTtFQXhCWixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQXdPQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxXQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0FBR0Y7O0FBREE7RUFDRSxjQUFBO0FBSUY7O0FBREE7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBSUY7O0FBREE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBSUY7O0FBREE7RUFDRSwwQkFBQTtBQUlGOztBQURBO0VBQ0UsMkNBOVBXO0VBK1BYLFlBQUE7RUF4UkEsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF3UkEsa0JBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxvQkFBQTtBQU9GXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXIrVHdvOndnaHRANDAwOzcwMCZmYW1pbHk9Um9ib3RvK1NsYWI6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5AbWl4aW4gZmxleENlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gdW5kZXJsaW5lQW5pbWF0aW9uIHtcXHJcXG4gICY6bm90KC5uYXYtYWN0aXZlKTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b20gcmlnaHQ7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cyBlYXNlLW91dDtcXHJcXG4gIH1cXHJcXG4gICY6bm90KC5uYXYtYWN0aXZlKTpob3Zlcjo6YWZ0ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGxlZnQ7XFxyXFxuICB9XFxyXFxufVxcclxcbi8qIENvbG9yIHN0eWxlcyAqL1xcclxcbiRibGFjazogaHNsYSgwLCAwJSwgMTMuNyUsIDEpO1xcclxcbiRwYWxlLW9yYW5nZTogaHNsYSgzNCwgMzcuNyUsIDg4JSwgMSk7XFxyXFxuJGFjY2VudC1yZWQ6IGhzbGEoMzU3LCA3Ny43JSwgNTQuMyUsIDEpO1xcclxcblxcclxcbi8qIFRleHQtc2l6ZSBzdHlsZXMgKi9cXHJcXG4kaGVhZGluZy0xOiA0cmVtO1xcclxcbiRoZWFkaW5nLTI6IDNyZW07XFxyXFxuJGhlYWRpbmctMzogMnJlbTtcXHJcXG4kcmVndWFsci1wYXJhZ3JhcGg6IDEuNXJlbTtcXHJcXG4kc21hbGwtcGFyYWdyYXBoOiAxLjI1cmVtO1xcclxcblxcclxcbiRsb2JzdGVyOiBcXFwiTG9ic3RlciBUd29cXFwiLCBjdXJzaXZlO1xcclxcbiRyb2JvdG86IFxcXCJSb2JvdG8gU2xhYlxcXCIsIHNlcmlmO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBjb2xvcjogJGJsYWNrO1xcclxcbiAgZm9udC1mYW1pbHk6ICRyb2JvdG87XFxyXFxuICBmb250LXNpemU6ICRyZWd1YWxyLXBhcmFncmFwaDtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMTtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgZm9udC1zaXplOiAkaGVhZGluZy0yO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDg1JTtcXHJcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudC1yZWQ7XFxyXFxuICBmb250LWZhbWlseTogJGxvYnN0ZXI7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxyXFxuICBoZWlnaHQ6IDEwdmg7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYWN0aXZlIHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGZvbnQtc2l6ZTogJHJlZ3VhbHItcGFyYWdyYXBoO1xcclxcbiAgZm9udC1mYW1pbHk6ICRsb2JzdGVyO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgQGluY2x1ZGUgdW5kZXJsaW5lQW5pbWF0aW9uKCk7XFxyXFxufVxcclxcblxcclxcbi5sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogJGhlYWRpbmctMjtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhbmRpbmctaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLXNlY3Rpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtb3JhbmdlO1xcclxcbiAgY29sb3I6ICRibGFjaztcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIGhlaWdodDogNDB2aDtcXHJcXG59XFxyXFxuLndlbGNvbWUtdGV4dCB7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbn1cXHJcXG4ud2VsY29tZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTI7XFxyXFxufVxcclxcbi53ZWxjb21lLXBhcmFncmFwaCB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgZm9udC1zaXplOiAkcmVndWFsci1wYXJhZ3JhcGg7XFxyXFxufVxcclxcblxcclxcbi53b3JraW5nLWhvdXJzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgcGFkZGluZzogMTBlbSAwO1xcclxcbn1cXHJcXG4ud29ya2luZy1ob3Vycy10aXRsZSB7XFxyXFxuICBmb250LXNpemU6ICRoZWFkaW5nLTI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcbi53b3JraW5nLXNjaGVkdWxlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1zaXplOiAkcmVndWFsci1wYXJhZ3JhcGg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxufVxcclxcbi5zY2hlZHVsZS1ob3VycyB7XFxyXFxuICBsaW5lLWhlaWdodDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtb3JhbmdlO1xcclxcbiAgcGFkZGluZzogMi41ZW0gMDtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG59XFxyXFxuLmF0dHJpYnV0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNtYWxsLXBhcmFncmFwaDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiAkYmxhY2s7XFxyXFxuICBhIHtcXHJcXG4gICAgY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ub3VyLXJlY29tbWVuZGF0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRwYWxlLW9yYW5nZTtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIGhlaWdodDogOTB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLm91ci1yZWNvbW1lbmRhdGlvbi10aXRsZSxcXHJcXG4ubWVudS10aXRsZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5yZWNvbW1lbmRlZC1wYXN0YSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA1ZW07XFxyXFxuICBjb2xvcjogJGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC13cmFwcGVyIHtcXHJcXG4gIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNoLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1wYXJhIHtcXHJcXG4gIGZvbnQtc2l6ZTogJHNtYWxsLXBhcmFncmFwaDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmltZy13cmFwIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1pbWFnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50LXJlZDtcXHJcXG4gIEBpbmNsdWRlIGZsZXhDZW50ZXIoKTtcXHJcXG4gIHBhZGRpbmc6IDVlbSAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICByb3ctZ2FwOiA0ZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5yZXNlcnZhdGlvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFsZS1vcmFuZ2U7XFxyXFxuICBAaW5jbHVkZSBmbGV4Q2VudGVyKCk7XFxyXFxuICBwYWRkaW5nOiA1ZW0gMDtcXHJcXG59XFxyXFxuLnJlc2VydmF0aW9uLXBhcmEge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcclxcbiAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc2VydmF0aW9uLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgyMDBweCwgNTAwcHgpKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICByb3ctZ2FwOiAxMHB4O1xcclxcbiAgcGFkZGluZzogNGVtIDBlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Z1bGwtbmFtZSB7XFxyXFxuICBncmlkLXJvdzogMjtcXHJcXG59XFxyXFxuI3Bob25lLW51bWJlciB7XFxyXFxuICBncmlkLXJvdzogNDtcXHJcXG59XFxyXFxudGV4dGFyZWFbbmFtZT1cXFwibWVzc2FnZVxcXCJdIHtcXHJcXG4gIGdyaWQtcm93OiAyLy0xO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjc1ZW0gMC41ZW07XFxyXFxufVxcclxcblxcclxcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxcclxcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcXHJcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XFxyXFxufVxcclxcblxcclxcbi5udW1iZXItZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQtcmVkO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgQGluY2x1ZGUgZmxleENlbnRlcigpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubnVtYmVyLXRpdGxlIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXHJcXG59XFxyXFxuLm51bWJlci1wYXJhIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZW1wdHlDb250ZW50IH0gZnJvbSBcIi4vZW1wdHlDb250ZW50XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlQ29udGFjdCgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGVtcHR5Q29udGVudCgpO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICByZXNlcnZhdGlvblNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uXCIpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICByZXNlcnZhdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgcmVzZXJ2YXRpb25UaXRsZS5jbGFzc0xpc3QuYWRkKFwicmVzZXJ2YXRpb24tdGl0bGVcIik7XHJcbiAgcmVzZXJ2YXRpb25UaXRsZS50ZXh0Q29udGVudCA9IFwiTmVlZCBhIHJlc2VydmF0aW9uP1wiO1xyXG4gIGNvbnN0IHJlc2VydmF0aW9uUGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcmVzZXJ2YXRpb25QYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uLXBhcmFcIik7XHJcbiAgcmVzZXJ2YXRpb25QYXJhZ3JhcGgudGV4dENvbnRlbnQgPVxyXG4gICAgXCJZb3UgY2FuIGVpdGhlciBjb250YWN0IHVzIHZpYSBwaG9uZSBvciBsZWF2ZSB5b3VyIGluZm9ybWF0aW9uIGFib3V0IHJlc2VydmF0aW9uIGFuZCB3ZSB3aWxsIHRha2UgY2FyZSBmb3IgZXZlcnl0aGluZyBlbHNlXCI7XHJcbiAgcmVzZXJ2YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25UaXRsZSk7XHJcbiAgcmVzZXJ2YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25QYXJhZ3JhcGgpO1xyXG5cclxuICBjb25zdCByZXNlcnZhdGlvbkZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZnJvbVwiKTtcclxuICByZXNlcnZhdGlvbkZvcm0uY2xhc3NMaXN0LmFkZChcInJlc2VydmF0aW9uLWZvcm1cIik7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcImdldFwiKTtcclxuXHJcbiAgY29uc3QgZnVsbE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBmdWxsTmFtZUxhYmVsLnRleHRDb250ZW50ID0gXCJGdWxsIG5hbWVcIjtcclxuICBmdWxsTmFtZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImZ1bGwtbmFtZVwiKTtcclxuICBjb25zdCBmdWxsTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGZ1bGxOYW1lSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XHJcbiAgZnVsbE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZ1bGwtbmFtZVwiKTtcclxuICBmdWxsTmFtZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJmdWxsLW5hbWVcIik7XHJcblxyXG4gIGNvbnN0IHBob25lTnVtYmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgcGhvbmVOdW1iZXJMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwaG9uZS1udW1iZXJcIik7XHJcbiAgcGhvbmVOdW1iZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiUGhvbmUgbnVtYmVyXCI7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXJJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBwaG9uZU51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJudW1iZXJcIik7XHJcbiAgcGhvbmVOdW1iZXJJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBob25lLW51bWJlclwiKTtcclxuICBwaG9uZU51bWJlcklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwaG9uZS1udW1iZXJcIik7XHJcblxyXG4gIGNvbnN0IG1lc3NhZ2VBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xyXG4gIG1lc3NhZ2VBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJtZXNzYWdlXCIpO1xyXG4gIGNvbnN0IG1lc3NhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBtZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSBcIllvdXIgbWVzc2FnZVwiO1xyXG5cclxuICByZXNlcnZhdGlvbkZvcm0uYXBwZW5kQ2hpbGQoZnVsbE5hbWVMYWJlbCk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKGZ1bGxOYW1lSW5wdXQpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWwpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChtZXNzYWdlQXJlYSk7XHJcbiAgcmVzZXJ2YXRpb25Gb3JtLmFwcGVuZENoaWxkKHBob25lTnVtYmVyTGFiZWwpO1xyXG4gIHJlc2VydmF0aW9uRm9ybS5hcHBlbmRDaGlsZChwaG9uZU51bWJlcklucHV0KTtcclxuXHJcbiAgcmVzZXJ2YXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25Gb3JtKTtcclxuXHJcbiAgcmVzZXJ2YXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHJlc2VydmF0aW9uU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IG91ck51bWJlckZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgb3VyTnVtYmVyRm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJudW1iZXItZm9vdGVyXCIpO1xyXG4gIGNvbnN0IG91ck51bWJlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb3VyTnVtYmVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3Qgb3VyTnVtYmVyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIG91ck51bWJlcnNUaXRsZS50ZXh0Q29udGVudCA9IFwiLU91ciBudW1iZXJzLVwiO1xyXG4gIG91ck51bWJlcnNUaXRsZS5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLXRpdGxlXCIpO1xyXG4gIGNvbnN0IG91ck51bWJlcnNSZXNlcnZhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIG91ck51bWJlcnNSZXNlcnZhdGlvbi5jbGFzc0xpc3QuYWRkKFwibnVtYmVyLXBhcmFcIik7XHJcbiAgb3VyTnVtYmVyc1Jlc2VydmF0aW9uLnRleHRDb250ZW50ID0gXCJSZXNlcnZhdGlvbiAtIDU1NS0zMzNcIjtcclxuICBjb25zdCBvdXJOdW1iZXJzRGVsaXZlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBvdXJOdW1iZXJzRGVsaXZlcnkuY2xhc3NMaXN0LmFkZChcIm51bWJlci1wYXJhXCIpO1xyXG4gIG91ck51bWJlcnNEZWxpdmVyeS50ZXh0Q29udGVudCA9IFwiRm9vZCBkZWxpdmVyeSAtIDMzMy01NTVcIjtcclxuXHJcbiAgb3VyTnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG91ck51bWJlcnNUaXRsZSk7XHJcbiAgb3VyTnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG91ck51bWJlcnNSZXNlcnZhdGlvbik7XHJcbiAgb3VyTnVtYmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG91ck51bWJlcnNEZWxpdmVyeSk7XHJcbiAgb3VyTnVtYmVyRm9vdGVyLmFwcGVuZENoaWxkKG91ck51bWJlckNvbnRhaW5lcik7XHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3VyTnVtYmVyRm9vdGVyKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZW1wdHlDb250ZW50KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tIFwiLi9lbXB0eUNvbnRlbnRcIjtcclxuaW1wb3J0IGNvdmVySW1hZ2UgZnJvbSBcIi4uL2ltZy9Db3Zlci5qcGdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBvcHVsYXRlSG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gIGVtcHR5Q29udGVudCgpO1xyXG5cclxuICAvLyAgIExhbmRpbmcgaW1hZ2VcclxuICBjb25zdCBkaXZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGl2SW1hZ2UuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctaW1hZ2VcIik7XHJcbiAgY29uc3QgbGFuZGluZ0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBsYW5kaW5nSW1hZ2Uuc3JjID0gY292ZXJJbWFnZTtcclxuICBsYW5kaW5nSW1hZ2UuY2xhc3NMaXN0LmFkZChcImxhbmRpbmctaW1hZ2VcIik7XHJcbiAgZGl2SW1hZ2UuYXBwZW5kQ2hpbGQobGFuZGluZ0ltYWdlKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGRpdkltYWdlKTtcclxuXHJcbiAgLy8gICBXZWxjb21lIHNlY3Rpb25cclxuICBjb25zdCB3ZWxjb21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIHdlbGNvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXNlY3Rpb25cIik7XHJcbiAgY29uc3Qgd2VsY29tZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgd2VsY29tZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3ZWxjb21lVGV4dC5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS10ZXh0XCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB3ZWxjb21lVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIFBhc3RhIEhvdXNlXCI7XHJcbiAgd2VsY29tZVRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lLXRpdGxlXCIpO1xyXG4gIGNvbnN0IHdlbGNvbWVQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgd2VsY29tZVBhcmEudGV4dENvbnRlbnQgPVxyXG4gICAgXCJIZXJlIHdlIHByZXBhcmUgc29tZSBvZiB0aGUgYmVzdCBwYXN0YSB0aGUgd29ybGQgaGFzIGV2ZXIgc2VlbiEgQ29tZSBhbmQgc2VlIGl0IGZvciB5b3Vyc2VsZiFcIjtcclxuICB3ZWxjb21lUGFyYS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZS1wYXJhZ3JhcGhcIik7XHJcbiAgd2VsY29tZVRleHQuYXBwZW5kQ2hpbGQod2VsY29tZVRpdGxlKTtcclxuICB3ZWxjb21lVGV4dC5hcHBlbmRDaGlsZCh3ZWxjb21lUGFyYSk7XHJcbiAgd2VsY29tZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWxjb21lVGV4dCk7XHJcbiAgd2VsY29tZVNlY3Rpb24uYXBwZW5kQ2hpbGQod2VsY29tZUNvbnRhaW5lcik7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lU2VjdGlvbik7XHJcblxyXG4gIC8vICAgV29ya2luZyBob3VycyBzZWN0aW9uXHJcbiAgY29uc3Qgd29ya1RpbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3Qgd29ya2luZ0hvdXJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB3b3JraW5nSG91cnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICB3b3JrVGltZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIndvcmtpbmctaG91cnNcIik7XHJcbiAgY29uc3Qgd29ya1RpbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICB3b3JrVGltZVRpdGxlLnRleHRDb250ZW50ID0gXCItT3VyIHdvcmtpbmcgaG91cnMtXCI7XHJcbiAgd29ya1RpbWVUaXRsZS5jbGFzc0xpc3QuYWRkKFwid29ya2luZy1ob3Vycy10aXRsZVwiKTtcclxuICBjb25zdCB3b3JrSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHdvcmtIb3Vycy5jbGFzc0xpc3QuYWRkKFwid29ya2luZy1zY2hlZHVsZVwiKTtcclxuXHJcbiAgd29ya0hvdXJzLmFwcGVuZENoaWxkKHNjaGVkdWxlQ3JlYXRvcihcIk1vbmRheSAtIFRodXJzZGF5XCIsIFwiMTA6MDAgLSAyMjowMFwiKSk7XHJcblxyXG4gIHdvcmtIb3Vycy5hcHBlbmRDaGlsZChzY2hlZHVsZUNyZWF0b3IoXCJGcmlkYXlcIiwgXCIxNjowMCAtIDAwOjAwXCIpKTtcclxuXHJcbiAgd29ya0hvdXJzLmFwcGVuZENoaWxkKHNjaGVkdWxlQ3JlYXRvcihcIlNhdHVyZGF5IC0gU3VuZGF5XCIsIFwiMTI6MDAgLSAxODowMFwiKSk7XHJcblxyXG4gIHdvcmtpbmdIb3Vyc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh3b3JrVGltZVRpdGxlKTtcclxuICB3b3JraW5nSG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQod29ya0hvdXJzKTtcclxuICB3b3JrVGltZVNlY3Rpb24uYXBwZW5kQ2hpbGQod29ya2luZ0hvdXJzQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKHdvcmtUaW1lU2VjdGlvbik7XHJcblxyXG4gIC8vICAgRm9vdGVyXHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBhdHRyaWJ1dGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhdHRyaWJ1dGlvblRleHQudGV4dENvbnRlbnQgPSBcIlBob3RvIGJ5IFwiO1xyXG4gIGNvbnN0IGF0dHJpYnV0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gIGF0dHJpYnV0aW9uTGluay5jbGFzc0xpc3QuYWRkKFwiYXR0cmlidXRpb25cIik7XHJcbiAgYXR0cmlidXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcclxuICBhdHRyaWJ1dGlvbkxpbmsudGV4dENvbnRlbnQgPSBcIkRpdmFuaSAoRGl2YSlcIjtcclxuICBhdHRyaWJ1dGlvbkxpbmsuaHJlZiA9XHJcbiAgICBcImh0dHBzOi8vdW5zcGxhc2guY29tL0BmdWxsYm9hcmRwaG90b2dyYXBoeT91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcIjtcclxuICBhdHRyaWJ1dGlvblRleHQuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25MaW5rKTtcclxuICBmb290ZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoYXR0cmlidXRpb25UZXh0KTtcclxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGFpbmVyKTtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjaGVkdWxlQ3JlYXRvcihkYXlzVGV4dCwgaG91cnNUZXh0KSB7XHJcbiAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGdyb3VwLmNsYXNzTGlzdC5hZGQoXCJzY2hlZHVsZS1ob3Vyc1wiKTtcclxuICBjb25zdCBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF5cy50ZXh0Q29udGVudCA9IGRheXNUZXh0O1xyXG4gIGdyb3VwLmFwcGVuZENoaWxkKGRheXMpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaG91cnMudGV4dENvbnRlbnQgPSBob3Vyc1RleHQ7XHJcbiAgZ3JvdXAuYXBwZW5kQ2hpbGQoaG91cnMpO1xyXG4gIHJldHVybiBncm91cDtcclxufVxyXG4iLCJpbXBvcnQgeyBlbXB0eUNvbnRlbnQgfSBmcm9tIFwiLi9lbXB0eUNvbnRlbnRcIjtcclxuaW1wb3J0IGFsbGFOb3JtYSBmcm9tIFwiLi4vaW1nL2FsbGEtbm9ybWEuanBlZ1wiO1xyXG5pbXBvcnQgYm9sb2duZXNlIGZyb20gXCIuLi9pbWcvYm9sb2duZXNlLmpwZWdcIjtcclxuaW1wb3J0IGNhcmJvbmFyYSBmcm9tIFwiLi4vaW1nL2NhcmJvbmFyYS5qcGVnXCI7XHJcbmltcG9ydCBmZXR0dWNjaW5lIGZyb20gXCIuLi9pbWcvZmV0dHVjY2luZS5qcGVnXCI7XHJcbmltcG9ydCB2b25nb2xlIGZyb20gXCIuLi9pbWcvdm9uZ29sZS5qcGVnXCI7XHJcbmltcG9ydCBtYWNhcm9uaUNoZWVzZSBmcm9tIFwiLi4vaW1nL21hY2Fyb25pLWNoZWVzZS5qcGVnXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuICBlbXB0eUNvbnRlbnQoKTtcclxuXHJcbiAgLy8gT3VyIHJlY29tbWVuZGF0aW9uXHJcbiAgY29uc3Qgb3VyUmVjb21tZW5kYXRpb25TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25TZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJvdXItcmVjb21tZW5kYXRpb25cIik7XHJcbiAgY29uc3Qgb3VyUmVjb21tZW5kYXRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcbiAgY29uc3Qgb3VyUmVjb21tbmVkYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBvdXJSZWNvbW1uZWRhdGlvblRpdGxlLnRleHRDb250ZW50ID0gXCJPdXIgcmVjb21tZW5kYXRpb25cIjtcclxuICBvdXJSZWNvbW1uZWRhdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoXCJvdXItcmVjb21tZW5kYXRpb24tdGl0bGVcIik7XHJcbiAgb3VyUmVjb21tZW5kYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQob3VyUmVjb21tbmVkYXRpb25UaXRsZSk7XHJcbiAgY29uc3QgcmVjb21tZW5kYXRpb25QYXN0YVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJyZWNvbW1lbmRlZC1wYXN0YVwiKTtcclxuICByZWNvbW1lbmRhdGlvblBhc3RhV3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIkZldHR1Y2NpbmUgQWxmcmVkb1wiLFxyXG4gICAgICBcIkFsc28ga25vd24gYXMgZmV0dHVjY2luZSBhbCBidXJybyAoZmV0dHVjY2luZSB3aXRoYnV0dGVyKSwgZmV0dHVjY2luZSBhbGZyZWRvIGlzIGEgc2ltcGxlIHBhc3RhIGRpc2hjb25zaXN0aW5nIG9mIGZldHR1Y2NpbmUgKGZsYXQgcGFzdGEgcmliYm9ucykgdG9zc2VkIHdpdGhwYXJtZXNhbiBjaGVlc2UgYW5kIGJ1dHRlci4gVGhlIHByb2Nlc3MgZW11bHNpZmllc3RoZSBpbmdyZWRpZW50cyBmb3IgYSByaWNoLCBzaWxreSBmaW5pc2guXCIsXHJcbiAgICAgIGZldHR1Y2NpbmVcclxuICAgIClcclxuICApO1xyXG4gIHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiQ2FyYm9uYXJhXCIsXHJcbiAgICAgIFwiVGhpcyBkaXNoIGNvbWJpbmluZyBhIHBhc3RhIHZhcmlldHkgc3VjaCBhcyBwZW5uZSBvcnNwYWdoZXR0aSB3aXRoIGEgY3JlYW0tYmFzZWQgc2F1Y2Ugd2l0aCBoYW0gb3JwYW5jZXR0YS4gVGhlIHRyYWRpdGlvbmFsIFJvbWFuIGNhcmJvbmFyYSBzYXVjZWNvbnRhaW5zIGVnZ3MsIGEgaGFyZCBjaGVlc2Ugc3VjaCBhcyBwZWNvcmlubyBvcnBhcm1lc2FuLCBjdXJlZCBwb3JrLCBhbmQgYmxhY2sgcGVwcGVyXCIsXHJcbiAgICAgIGNhcmJvbmFyYVxyXG4gICAgKVxyXG4gICk7XHJcblxyXG4gIG91clJlY29tbWVuZGF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlY29tbWVuZGF0aW9uUGFzdGFXcmFwcGVyKTtcclxuICBvdXJSZWNvbW1lbmRhdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQob3VyUmVjb21tZW5kYXRpb25Db250YWluZXIpO1xyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKG91clJlY29tbWVuZGF0aW9uU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IG1lbnVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgbWVudVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtdGl0bGVcIik7XHJcbiAgbWVudVRpdGxlLnRleHRDb250ZW50ID0gXCJSZXN0IG9mIG91ciBtZW51XCI7XHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudVRpdGxlKTtcclxuXHJcbiAgY29uc3QgbWVudVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXdyYXBwZXJcIik7XHJcbiAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJQYXN0YSBhbGxhIE5vcm1hXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY29uc2lzdHMgb2YgYSBwYXN0YSB2YXJpZXR5IHN1Y2ggYXMgeml0aSBvcnJpZ2F0b25pIGNvb2tlZCB3aXRoIGF1YmVyZ2luZSwgdG9tYXRvZXMsIGhlcmJzLCBzcGljZXMsY2FwZXJzIGFuZCBjaGVlc2UuXCIsXHJcbiAgICAgIGFsbGFOb3JtYVxyXG4gICAgKVxyXG4gICk7XHJcbiAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoXHJcbiAgICBkaXNoQ3JlYXRvcihcclxuICAgICAgXCJTcGFnaGV0dGkgYWxsZSBWb25nb2xlXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY2FuIGJlIGNvb2tlZCDigJhpbiBiaWFuY2/igJkgLSB3aXRoIGdhcmxpYywgb2lsLGhlcmJzIGFuZCB3aGl0ZSB3aW5lLCBvciDigJhpbiByb3Nzb+KAmSAtIHdpdGggZ2FybGljLCBvaWwsaGVyYnMgYW5kIHRvbWF0b2VzXCIsXHJcbiAgICAgIHZvbmdvbGVcclxuICAgIClcclxuICApO1xyXG4gIG1lbnVXcmFwcGVyLmFwcGVuZENoaWxkKFxyXG4gICAgZGlzaENyZWF0b3IoXHJcbiAgICAgIFwiTWFjYXJvbmkgQ2hlZXNlXCIsXHJcbiAgICAgIFwiVGhlIGRpc2ggY29uc2lzdHMgb2YgbWFjYXJvbmkgcGFzdGEsIGJha2VkIGluIGEgY2hlZXN5YmVjaGFtZWwgc2F1Y2UgaW4gdGhlIG92ZW4uIEl0IGlzIGNvb2tlZCB3aXRoIGNoZWVkYXJjaGVlc2UgYW5kIGdhcm5pc2hlZCB3aXRoIHBhcnNlbHkuXCIsXHJcbiAgICAgIG1hY2Fyb25pQ2hlZXNlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChcclxuICAgIGRpc2hDcmVhdG9yKFxyXG4gICAgICBcIlNwYWdoZXR0aSBCb2xvZ25lc2VcIixcclxuICAgICAgXCJTcGFnaGV0dGkgYm9sb2duYWlzZSBpcyBhIHBhc3RhIGRpc2ggY29uc2lzdGluZyBvZnNwYWdoZXR0aSBhbmQgYSBzYXVjZSBtYWRlIG9mIG1pbmNlZCBiZWVmLHRvbWF0b2VzLCBvbmlvbiwgYmFjb24sIHJlZCB3aW5lIGFuZCBoZXJicy5cIixcclxuICAgICAgYm9sb2duZXNlXHJcbiAgICApXHJcbiAgKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVXcmFwcGVyKTtcclxuICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7XHJcbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XHJcbiAgY29uc3QgZm9vdGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBmb290ZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuICBjb25zdCBhdHRyaWJ1dGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBhdHRyaWJ1dGlvblRleHQudGV4dENvbnRlbnQgPSBcIkFsbCBwaG90b3MgYW5kIGluZm8gYXJlIGZyb20gXCI7XHJcbiAgY29uc3QgYXR0cmlidXRpb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgYXR0cmlidXRpb25UZXh0LmNsYXNzTGlzdC5hZGQoXCJhdHRyaWJ1dGlvblwiKTtcclxuICBhdHRyaWJ1dGlvbkxpbmsuY2xhc3NMaXN0LmFkZChcImF0dHJpYnV0aW9uXCIpO1xyXG4gIGF0dHJpYnV0aW9uTGluay50ZXh0Q29udGVudCA9IFwidGhpcyBibG9nXCI7XHJcbiAgYXR0cmlidXRpb25MaW5rLmhyZWYgPSBcImh0dHBzOi8vZXJ1ZHVzLmNvbS9lZGl0b3JpYWwvdGhlLWZvb2QtYWdlbmRhL21vc3QtZmFtb3VzLXBhc3RhLWRpc2hlc1wiO1xyXG4gIGF0dHJpYnV0aW9uVGV4dC5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvbkxpbmspO1xyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChhdHRyaWJ1dGlvblRleHQpO1xyXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250YWluZXIpO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzaENyZWF0b3IoZGlzaE5hbWUsIGRpc2hEZXNjcmlwdGlvbiwgZGlzaEltZykge1xyXG4gIGNvbnN0IGRpc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRpc2guY2xhc3NMaXN0LmFkZChcImRpc2gtd3JhcHBlclwiKTtcclxuICBjb25zdCBkaXNoVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgZGlzaFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkaXNoLXRpdGxlXCIpO1xyXG4gIGNvbnN0IGRpc2hQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGlzaFBhcmEuY2xhc3NMaXN0LmFkZChcImRpc2gtcGFyYVwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGNvbnN0IGltZ1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGltZ1dyYXAuY2xhc3NMaXN0LmFkZChcImltZy13cmFwXCIpO1xyXG4gIGltZ1dyYXAuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICBpbWcuY2xhc3NMaXN0LmFkZChcImRpc2gtaW1hZ2VcIik7XHJcblxyXG4gIGRpc2hUaXRsZS50ZXh0Q29udGVudCA9IGRpc2hOYW1lO1xyXG4gIGRpc2hQYXJhLnRleHRDb250ZW50ID0gZGlzaERlc2NyaXB0aW9uO1xyXG4gIGltZy5zcmMgPSBkaXNoSW1nO1xyXG5cclxuICBkaXNoLmFwcGVuZENoaWxkKGRpc2hUaXRsZSk7XHJcbiAgZGlzaC5hcHBlbmRDaGlsZChkaXNoUGFyYSk7XHJcbiAgZGlzaC5hcHBlbmRDaGlsZChpbWdXcmFwKTtcclxuXHJcbiAgcmV0dXJuIGRpc2g7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBwb3B1bGF0ZUhvbWUgZnJvbSBcIi4vbW9kdWxlcy9ob21lTW9kdWxlXCI7XHJcbmltcG9ydCBwb3B1bGF0ZU1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51TW9kdWxlXCI7XHJcbmltcG9ydCBwb3B1bGF0ZUNvbnRhY3QgZnJvbSBcIi4vbW9kdWxlcy9jb250YWN0TW9kdWxlXCI7XHJcbmltcG9ydCBcIi4vc2Fzcy9tYWluLnNjc3NcIjtcclxuXHJcbmNvbnNvbGUubG9nKFwiaGVsbG8gZnJvbSBpbmRleC5qc1wiKTtcclxuXHJcbnBvcHVsYXRlSG9tZSgpO1xyXG5cclxubGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1pdGVtXCIpO1xyXG5jb25zdCBob21lID0gbmF2aWdhdGlvblswXTtcclxuY29uc3QgbWVudSA9IG5hdmlnYXRpb25bMV07XHJcbmNvbnN0IGNvbnRhY3QgPSBuYXZpZ2F0aW9uWzJdO1xyXG5cclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVIb21lKTtcclxuXHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBvcHVsYXRlTWVudSk7XHJcblxyXG5jb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3B1bGF0ZUNvbnRhY3QpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=