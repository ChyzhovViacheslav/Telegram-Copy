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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: red;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nfunction Ripple() {\n    const rippleHandler = (event)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onClick: (event)=>{\n            const wrapper = event.target.getBoundingClientRect();\n            const x = event.clientX;\n            const y = event.clientY;\n            console.log(x - wrapper.x);\n            const styles = {\n                position: \"absolute\",\n                width: \"50px\",\n                height: \"50px\",\n                backgroundColor: \"green\",\n                borderRadius: \"50%\",\n                transform: \"translate(-50%, -50%) scale(1)\",\n                top: \"\".concat(y - wrapper.y, \"px\"),\n                left: \"\".concat(x - wrapper.x, \"px\"),\n                animation: \"pulse 1s ease-out\",\n                pointerEvents: \"none\"\n            };\n            const keyframes = \"@keyframes pulse {\\n                to {\\n                  transform: translate(-50%, -50%) scale(2);\\n                  background-color: #fff;\\n                  opacity: 0;\\n                }\\n              }\";\n            const styleSheet = document.createElement(\"style\");\n            styleSheet.innerText = keyframes;\n            document.head.appendChild(styleSheet);\n            const ripple = document.createElement(\"div\");\n            ripple.classList.add(\"ripple\");\n            Object.assign(ripple.style, styles);\n            event.target.appendChild(ripple);\n            setTimeout(()=>{\n                ripple.remove();\n            }, 1000);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Ripple;\nvar _c, _c1;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYztBQUVyRCxNQUFNSSxnQkFBZ0JGLDZEQUFVO0tBQTFCRTtBQVNTLFNBQVNFLFNBQVM7SUFDN0IsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVUsQ0FFakM7SUFJQSxxQkFDSSw4REFBQ0o7UUFBY0ssU0FBUyxDQUFDRCxRQUFVO1lBQy9CLE1BQU1FLFVBQVVGLE1BQU1HLE1BQU0sQ0FBQ0MscUJBQXFCO1lBQ2xELE1BQU1DLElBQUlMLE1BQU1NLE9BQU87WUFDdkIsTUFBTUMsSUFBSVAsTUFBTVEsT0FBTztZQUV2QkMsUUFBUUMsR0FBRyxDQUFDTCxJQUFJSCxRQUFRRyxDQUFDO1lBRXpCLE1BQU1NLFNBQVM7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLEtBQUssR0FBaUIsT0FBZFgsSUFBSUwsUUFBUUssQ0FBQyxFQUFDO2dCQUN0QlksTUFBTSxHQUFpQixPQUFkZCxJQUFJSCxRQUFRRyxDQUFDLEVBQUM7Z0JBQ3ZCZSxXQUFXO2dCQUNYQyxlQUFlO1lBQ25CO1lBRUEsTUFBTTFCLFlBQWE7WUFRbkIsTUFBTTJCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztZQUMxQ0YsV0FBV0csU0FBUyxHQUFHOUI7WUFDdkI0QixTQUFTRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0w7WUFFMUIsTUFBTU0sU0FBU0wsU0FBU0MsYUFBYSxDQUFDO1lBQ3RDSSxPQUFPQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztZQUNyQkMsT0FBT0MsTUFBTSxDQUFDSixPQUFPSyxLQUFLLEVBQUV0QjtZQUU1QlgsTUFBTUcsTUFBTSxDQUFDd0IsV0FBVyxDQUFDQztZQUV6Qk0sV0FBVyxJQUFNO2dCQUNiTixPQUFPTyxNQUFNO1lBQ2pCLEdBQUc7UUFDUDs7Ozs7O0FBR1IsQ0FBQztNQXBEdUJyQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeD9kMDA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuY29uc3QgUmlwcGxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpcHBsZSgpIHtcclxuICAgIGNvbnN0IHJpcHBsZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSaXBwbGVXcmFwcGVyIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB3cmFwcGVyID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYXHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh4IC0gd3JhcHBlci54KVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpJyxcclxuICAgICAgICAgICAgICAgIHRvcDogYCR7eSAtIHdyYXBwZXIueX1weGAsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OiBgJHt4IC0gd3JhcHBlci54fXB4YCxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3B1bHNlIDFzIGVhc2Utb3V0JyxcclxuICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSBgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICAgICAgICAgICAgc3R5bGVTaGVldC5pbm5lclRleHQgPSBrZXlmcmFtZXM7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVTaGVldCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgncmlwcGxlJylcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyaXBwbGUuc3R5bGUsIHN0eWxlcylcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChyaXBwbGUpXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJpcHBsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDwvUmlwcGxlV3JhcHBlciA+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJSaXBwbGVXcmFwcGVyIiwiZGl2IiwiUmlwcGxlIiwicmlwcGxlSGFuZGxlciIsImV2ZW50Iiwib25DbGljayIsIndyYXBwZXIiLCJ0YXJnZXQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJsZWZ0IiwiYW5pbWF0aW9uIiwicG9pbnRlckV2ZW50cyIsInN0eWxlU2hlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJyaXBwbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHlsZSIsInNldFRpbWVvdXQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});