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

/***/ "./components/interface/ripple/Ripple.jsx":
/*!************************************************!*\
  !*** ./components/interface/ripple/Ripple.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: red;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    to{\\n        transform: scale(2);\\n        background-color: #fff;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 50px;\\n    height: 50px;\\n    background-color: green;\\n    border-radius: 50%;\\n    transform: scale(1);\\n    animation: \",\n        \" 0.7s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nconst Pulse = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst RippleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2(), Pulse);\n_c1 = RippleDiv;\nfunction Ripple() {\n    _s();\n    const [showRipple, setShowRipple] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const rippleHandler = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onClick: (e)=>{},\n        children: showRipple && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleDiv, {}, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n            lineNumber: 40,\n            columnNumber: 28\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(Ripple, \"u8Y5iq3e1posGBQMSydmnFlRxC4=\");\n_c2 = Ripple;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"RippleDiv\");\n$RefreshReg$(_c2, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNjO0FBRXJELE1BQU1JLGdCQUFnQkYsNkRBQVU7S0FBMUJFO0FBU04sTUFBTUUsUUFBUUgsNERBQVNBO0FBUXZCLE1BQU1JLFlBQVlMLDZEQUFVLHFCQU9YSTtNQVBYQztBQVVTLFNBQVNDLFNBQVM7O0lBQzdCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxELE1BQU1VLGdCQUFnQixJQUFNLENBRTVCO0lBRUEscUJBQ0ksOERBQUNQO1FBQWNRLFNBQVMsQ0FBQ0MsSUFBTSxDQUFDO2tCQUMzQkosNEJBQWMsOERBQUNGOzs7Ozs7Ozs7O0FBRzVCLENBQUM7R0FadUJDO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3JpcHBsZS9SaXBwbGUuanN4P2QwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBSaXBwbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuYFxyXG5cclxuY29uc3QgUHVsc2UgPSBrZXlmcmFtZXNgXHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUmlwcGxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uOiAke1B1bHNlfSAwLjdzIGVhc2Utb3V0O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoKSB7XHJcbiAgICBjb25zdCBbc2hvd1JpcHBsZSwgc2V0U2hvd1JpcHBsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCByaXBwbGVIYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSaXBwbGVXcmFwcGVyIG9uQ2xpY2s9eyhlKSA9PiB7fX0+XHJcbiAgICAgICAgICAgIHtzaG93UmlwcGxlICYmIDxSaXBwbGVEaXYgLz59XHJcbiAgICAgICAgPC9SaXBwbGVXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiUmlwcGxlV3JhcHBlciIsImRpdiIsIlB1bHNlIiwiUmlwcGxlRGl2IiwiUmlwcGxlIiwic2hvd1JpcHBsZSIsInNldFNob3dSaXBwbGUiLCJyaXBwbGVIYW5kbGVyIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});