"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/interface/logo/Logo.jsx":
/*!********************************************!*\
  !*** ./components/interface/logo/Logo.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    border-radius: 100%;\\n    width: 54px;\\n    height: 54px;\\n    flex-shrink: 0;\\n    overflow: hidden;\\n    img{\\n      width: \",\n        \";\\n      height: \",\n        \";\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst LogoStyle = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject(), props.size, props.size);\n_c = LogoStyle;\nfunction Logo(param) {\n    let { image , size  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LogoStyle, {\n        children: image === undefined ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n            alt: \"user logo\",\n            src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(image))\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\logo\\\\Logo.jsx\",\n            lineNumber: 20,\n            columnNumber: 36\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\logo\\\\Logo.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Logo;\nvar _c, _c1;\n$RefreshReg$(_c, \"LogoStyle\");\n$RefreshReg$(_c1, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9sb2dvL0xvZ28uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDTDtBQUNhO0FBRXRDLE1BQU1HLFlBQVlELDZEQUFVLG9CQU9iRyxNQUFNQyxJQUFJLEVBQ1RELE1BQU1DLElBQUk7S0FScEJIO0FBWVMsU0FBU0ksS0FBSyxLQUFlLEVBQUU7UUFBakIsRUFBRUMsTUFBSyxFQUFFRixLQUFJLEVBQUUsR0FBZjtJQUMzQixxQkFDRSw4REFBQ0g7a0JBQ0VLLFVBQVVDLFlBQVksSUFBSSxpQkFBRSw4REFBQ1QsbURBQUtBO1lBQ2pDVSxLQUFJO1lBQ0pDLEtBQUtDLGlFQUFRLEtBQWdDLE9BQU5KLE1BQUFBLENBQUFBOzs7OztnQkFBVzs7Ozs7O0FBRzFELENBQUM7TUFSdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL2xvZ28vTG9nby5qc3g/ODQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgTG9nb1N0eWxlID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB3aWR0aDogNTRweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGltZ3tcclxuICAgICAgd2lkdGg6ICR7cHJvcHMuc2l6ZX07XHJcbiAgICAgIGhlaWdodDogJHtwcm9wcy5zaXplfTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IGltYWdlLCBzaXplIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExvZ29TdHlsZT5cclxuICAgICAge2ltYWdlID09PSB1bmRlZmluZWQgPyBudWxsIDo8SW1hZ2VcclxuICAgICAgICBhbHQ9XCJ1c2VyIGxvZ29cIlxyXG4gICAgICAgIHNyYz17cmVxdWlyZShgLi4vLi4vLi4vc2VydmVyL2ltYWdlcy8ke2ltYWdlfWApfS8+fVxyXG4gICAgPC9Mb2dvU3R5bGU+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0Iiwic3R5bGVkIiwiTG9nb1N0eWxlIiwiZGl2IiwicHJvcHMiLCJzaXplIiwiTG9nbyIsImltYWdlIiwidW5kZWZpbmVkIiwiYWx0Iiwic3JjIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/interface/logo/Logo.jsx\n"));

/***/ })

});