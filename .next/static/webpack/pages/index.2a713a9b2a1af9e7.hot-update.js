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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: red;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    to{\\n        transform: scale(2);\\n        background-color: #fff;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 50px;\\n    height: 50px;\\n    background-color: green;\\n    border-radius: 50%;\\n    transform: scale(1);\\n    animation: \",\n        \" 1s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nconst Pulse = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst RippleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2(), Pulse);\nfunction Ripple() {\n    const rippleHandler = (event)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onClick: (event)=>{\n            const styles = {\n                position: absolute,\n                width: \"50px\",\n                height: \"50px\",\n                backgroundColor: \"green\",\n                borderRadius: \"50%\",\n                transform: \"scale(1)\"\n            };\n            const keyframes = \"@keyframes pulse {\\n                to {\\n                  transform: scale(2);\\n                  background-color: #fff;\\n                  opacity: 0;\\n                }\\n              }\";\n            const styleSheet = document.createElement(\"style\");\n            styleSheet.innerText = keyframes;\n            document.head.appendChild(styleSheet);\n            const ripple = document.createElement(\"div\");\n            ripple.classList.add(\"ripple\");\n            Object.assign(ripple.style, styles);\n            ripple.style.position = \"absolute\";\n            ripple.style.width = \"50px\";\n            ripple.style.height = \"50px\";\n            ripple.style.backgroundColor = \"green\";\n            ripple.style.borderRadius = \"50%\";\n            ripple.style.transform = \"scale(1)\";\n            ripple.style.animation = \"pulse 1s ease - out\";\n            event.target.appendChild(ripple);\n            setTimeout(()=>{\n                ripple.remove();\n            }, 10000);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Ripple;\nvar _c, _c1;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2M7QUFFckQsTUFBTUksZ0JBQWdCRiw2REFBVTtLQUExQkU7QUFTTixNQUFNRSxRQUFRSCw0REFBU0E7QUFRdkIsTUFBTUksWUFBWUwsNkRBQVUscUJBT1hJO0FBR0YsU0FBU0UsU0FBUztJQUM3QixNQUFNQyxnQkFBZ0IsQ0FBQ0MsUUFBVSxDQUVqQztJQUlBLHFCQUNJLDhEQUFDTjtRQUFjTyxTQUFTLENBQUNELFFBQVU7WUFDL0IsTUFBTUUsU0FBUztnQkFDWEMsVUFBVUM7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLFdBQVc7WUFDZjtZQUNBLE1BQU1oQixZQUFhO1lBUW5CLE1BQU1pQixhQUFhQyxTQUFTQyxhQUFhLENBQUM7WUFDMUNGLFdBQVdHLFNBQVMsR0FBR3BCO1lBQ3ZCa0IsU0FBU0csSUFBSSxDQUFDQyxXQUFXLENBQUNMO1lBRTFCLE1BQU1NLFNBQVNMLFNBQVNDLGFBQWEsQ0FBQztZQUN0Q0ksT0FBT0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDckJDLE9BQU9DLE1BQU0sQ0FBQ0osT0FBT0ssS0FBSyxFQUFFbkI7WUFDNUJjLE9BQU9LLEtBQUssQ0FBQ2xCLFFBQVEsR0FBRztZQUN4QmEsT0FBT0ssS0FBSyxDQUFDaEIsS0FBSyxHQUFHO1lBQ3JCVyxPQUFPSyxLQUFLLENBQUNmLE1BQU0sR0FBRztZQUN0QlUsT0FBT0ssS0FBSyxDQUFDZCxlQUFlLEdBQUc7WUFDL0JTLE9BQU9LLEtBQUssQ0FBQ2IsWUFBWSxHQUFHO1lBQzVCUSxPQUFPSyxLQUFLLENBQUNaLFNBQVMsR0FBRztZQUN6Qk8sT0FBT0ssS0FBSyxDQUFDQyxTQUFTLEdBQUk7WUFFMUJ0QixNQUFNdUIsTUFBTSxDQUFDUixXQUFXLENBQUNDO1lBRXpCUSxXQUFXLElBQU07Z0JBQ2JSLE9BQU9TLE1BQU07WUFDakIsR0FBRztRQUNQOzs7Ozs7QUFHUixDQUFDO01BaER1QjNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3JpcHBsZS9SaXBwbGUuanN4P2QwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBSaXBwbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuYFxyXG5cclxuY29uc3QgUHVsc2UgPSBrZXlmcmFtZXNgXHJcbiAgICB0b3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgUmlwcGxlRGl2ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgYW5pbWF0aW9uOiAke1B1bHNlfSAxcyBlYXNlLW91dDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmlwcGxlKCkge1xyXG4gICAgY29uc3QgcmlwcGxlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJpcHBsZVdyYXBwZXIgb25DbGljaz17KGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKScsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qga2V5ZnJhbWVzID0gYEBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICAgICAgICAgICAgc3R5bGVTaGVldC5pbm5lclRleHQgPSBrZXlmcmFtZXM7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVTaGVldCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgncmlwcGxlJylcclxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihyaXBwbGUuc3R5bGUsIHN0eWxlcylcclxuICAgICAgICAgICAgcmlwcGxlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgcmlwcGxlLnN0eWxlLndpZHRoID0gJzUwcHgnO1xyXG4gICAgICAgICAgICByaXBwbGUuc3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xyXG4gICAgICAgICAgICByaXBwbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcclxuICAgICAgICAgICAgcmlwcGxlLnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1MCUnO1xyXG4gICAgICAgICAgICByaXBwbGUuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcclxuICAgICAgICAgICAgcmlwcGxlLnN0eWxlLmFuaW1hdGlvbiA9IGBwdWxzZSAxcyBlYXNlIC0gb3V0YDtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChyaXBwbGUpXHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJpcHBsZS5yZW1vdmUoKVxyXG4gICAgICAgICAgICB9LCAxMDAwMClcclxuICAgICAgICB9fT5cclxuICAgICAgICA8L1JpcHBsZVdyYXBwZXIgPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwia2V5ZnJhbWVzIiwiUmlwcGxlV3JhcHBlciIsImRpdiIsIlB1bHNlIiwiUmlwcGxlRGl2IiwiUmlwcGxlIiwicmlwcGxlSGFuZGxlciIsImV2ZW50Iiwib25DbGljayIsInN0eWxlcyIsInBvc2l0aW9uIiwiYWJzb2x1dGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsInN0eWxlU2hlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJyaXBwbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHlsZSIsImFuaW1hdGlvbiIsInRhcmdldCIsInNldFRpbWVvdXQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});