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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: red;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    to{\\n        transform: scale(2);\\n        background-color: #fff;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 50px;\\n    height: 50px;\\n    background-color: green;\\n    border-radius: 50%;\\n    transform: scale(1);\\n    animation: \",\n        \" 1s ease-out;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nconst Pulse = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nconst RippleDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2(), Pulse);\nfunction Ripple() {\n    const rippleHandler = (event)=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onClick: (event)=>{\n            console.log(event.clientX, event.cl);\n            const styles = {\n                position: \"absolute\",\n                width: \"50px\",\n                height: \"50px\",\n                backgroundColor: \"green\",\n                borderRadius: \"50%\",\n                transform: \"scale(1)\",\n                animation: \"pulse 1s ease-out\"\n            };\n            const keyframes = \"@keyframes pulse {\\n                to {\\n                  transform: scale(2);\\n                  background-color: #fff;\\n                  opacity: 0;\\n                }\\n              }\";\n            const styleSheet = document.createElement(\"style\");\n            styleSheet.innerText = keyframes;\n            document.head.appendChild(styleSheet);\n            const ripple = document.createElement(\"div\");\n            ripple.classList.add(\"ripple\");\n            Object.assign(ripple.style, styles);\n            event.target.appendChild(ripple);\n            setTimeout(()=>{\n                ripple.remove();\n            }, 1000);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Ripple;\nvar _c, _c1;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2M7QUFFckQsTUFBTUksZ0JBQWdCRiw2REFBVTtLQUExQkU7QUFTTixNQUFNRSxRQUFRSCw0REFBU0E7QUFRdkIsTUFBTUksWUFBWUwsNkRBQVUscUJBT1hJO0FBR0YsU0FBU0UsU0FBUztJQUM3QixNQUFNQyxnQkFBZ0IsQ0FBQ0MsUUFBVSxDQUVqQztJQUlBLHFCQUNJLDhEQUFDTjtRQUFjTyxTQUFTLENBQUNELFFBQVU7WUFDL0JFLFFBQVFDLEdBQUcsQ0FBQ0gsTUFBTUksT0FBTyxFQUFFSixNQUFNSyxFQUFFO1lBQ25DLE1BQU1DLFNBQVM7Z0JBQ1hDLFVBQVU7Z0JBQ1ZDLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLGlCQUFpQjtnQkFDakJDLGNBQWM7Z0JBQ2RDLFdBQVc7Z0JBQ1hDLFdBQVc7WUFDZjtZQUVBLE1BQU1wQixZQUFhO1lBUW5CLE1BQU1xQixhQUFhQyxTQUFTQyxhQUFhLENBQUM7WUFDMUNGLFdBQVdHLFNBQVMsR0FBR3hCO1lBQ3ZCc0IsU0FBU0csSUFBSSxDQUFDQyxXQUFXLENBQUNMO1lBRTFCLE1BQU1NLFNBQVNMLFNBQVNDLGFBQWEsQ0FBQztZQUN0Q0ksT0FBT0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDckJDLE9BQU9DLE1BQU0sQ0FBQ0osT0FBT0ssS0FBSyxFQUFFbkI7WUFFNUJOLE1BQU0wQixNQUFNLENBQUNQLFdBQVcsQ0FBQ0M7WUFFekJPLFdBQVcsSUFBTTtnQkFDYlAsT0FBT1EsTUFBTTtZQUNqQixHQUFHO1FBQ1A7Ozs7OztBQUdSLENBQUM7TUE1Q3VCOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnRlcmZhY2UvcmlwcGxlL1JpcHBsZS5qc3g/ZDAwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFJpcHBsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5gXHJcblxyXG5jb25zdCBQdWxzZSA9IGtleWZyYW1lc2BcclxuICAgIHRve1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBSaXBwbGVEaXYgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBhbmltYXRpb246ICR7UHVsc2V9IDFzIGVhc2Utb3V0O1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoKSB7XHJcbiAgICBjb25zdCByaXBwbGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmlwcGxlV3JhcHBlciBvbkNsaWNrPXsoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQuY2xpZW50WCwgZXZlbnQuY2wpXHJcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpJyxcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogJ3B1bHNlIDFzIGVhc2Utb3V0J1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSBgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0LmlubmVyVGV4dCA9IGtleWZyYW1lcztcclxuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVNoZWV0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdyaXBwbGUnKVxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHJpcHBsZS5zdHlsZSwgc3R5bGVzKVxyXG5cclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKHJpcHBsZSlcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmlwcGxlLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPC9SaXBwbGVXcmFwcGVyID5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImtleWZyYW1lcyIsIlJpcHBsZVdyYXBwZXIiLCJkaXYiLCJQdWxzZSIsIlJpcHBsZURpdiIsIlJpcHBsZSIsInJpcHBsZUhhbmRsZXIiLCJldmVudCIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwiY2xpZW50WCIsImNsIiwic3R5bGVzIiwicG9zaXRpb24iLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsInRyYW5zZm9ybSIsImFuaW1hdGlvbiIsInN0eWxlU2hlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJyaXBwbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJPYmplY3QiLCJhc3NpZ24iLCJzdHlsZSIsInRhcmdldCIsInNldFRpbWVvdXQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});