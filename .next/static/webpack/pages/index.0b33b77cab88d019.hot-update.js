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

/***/ "./components/interface/userIsOnline/UserIsOnline.jsx":
/*!************************************************************!*\
  !*** ./components/interface/userIsOnline/UserIsOnline.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserIsOnline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction UserIsOnline(param) {\n    let { userId , lastActive  } = param;\n    _s();\n    const [userLastActive, setUserLastActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (lastActive === null) {\n            setUserLastActive(\"online\");\n        } else {\n            const currentDate = new Date();\n            const diffTime = currentDate.getTime() - lastActive.getTime();\n            setUserLastActive(diffTime);\n        }\n        const interval = setInterval(()=>{\n            if (lastActive === null) {\n                setUserLastActive(\"online\");\n            } else {\n                const currentDate = new Date();\n                const diffTime = new Date(currentDate - lastActive * 1000);\n                const diffInSeconds = Math.floor();\n                setUserLastActive(diffTime);\n            }\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        userId,\n        lastActive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: userLastActive\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\userIsOnline\\\\UserIsOnline.jsx\",\n        lineNumber: 28,\n        columnNumber: 12\n    }, this);\n}\n_s(UserIsOnline, \"0weywB4xO2Qc4Kiln6h1GpU/8WY=\");\n_c = UserIsOnline;\nvar _c;\n$RefreshReg$(_c, \"UserIsOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBRW5DLFNBQVNHLGFBQWEsS0FBc0IsRUFBRTtRQUF4QixFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUF0Qjs7SUFDakMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSUksZUFBZSxJQUFJLEVBQUU7WUFDckJFLGtCQUFrQjtRQUN0QixPQUFPO1lBQ0gsTUFBTUMsY0FBYyxJQUFJQztZQUN4QixNQUFNQyxXQUFXRixZQUFZRyxPQUFPLEtBQUtOLFdBQVdNLE9BQU87WUFDM0RKLGtCQUFrQkc7UUFDdEIsQ0FBQztRQUVELE1BQU1FLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJUixlQUFlLElBQUksRUFBRTtnQkFDckJFLGtCQUFrQjtZQUN0QixPQUFPO2dCQUNILE1BQU1DLGNBQWMsSUFBSUM7Z0JBQ3hCLE1BQU1DLFdBQVcsSUFBSUQsS0FBS0QsY0FBY0gsYUFBYTtnQkFDckQsTUFBTVMsZ0JBQWdCQyxLQUFLQyxLQUFLO2dCQUNoQ1Qsa0JBQWtCRztZQUN0QixDQUFDO1FBQ0wsR0FBRztRQUNILE9BQU8sSUFBTU8sY0FBY0w7SUFDL0IsR0FBRztRQUFDUjtRQUFRQztLQUFXO0lBRXZCLHFCQUFPLDhEQUFDYTtrQkFBTVo7Ozs7OztBQUNsQixDQUFDO0dBMUJ1Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnRlcmZhY2UvdXNlcklzT25saW5lL1VzZXJJc09ubGluZS5qc3g/MGNjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcklzT25saW5lKHsgdXNlcklkLCBsYXN0QWN0aXZlIH0pIHtcclxuICAgIGNvbnN0IFt1c2VyTGFzdEFjdGl2ZSwgc2V0VXNlckxhc3RBY3RpdmVdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsYXN0QWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKCdvbmxpbmUnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgICBjb25zdCBkaWZmVGltZSA9IGN1cnJlbnREYXRlLmdldFRpbWUoKSAtIGxhc3RBY3RpdmUuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKGRpZmZUaW1lKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXN0QWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZSgnb25saW5lJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZlRpbWUgPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSAtIGxhc3RBY3RpdmUgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoZGlmZlRpbWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbdXNlcklkLCBsYXN0QWN0aXZlXSlcclxuXHJcbiAgICByZXR1cm4gPHNwYW4+e3VzZXJMYXN0QWN0aXZlfTwvc3Bhbj5cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJJc09ubGluZSIsInVzZXJJZCIsImxhc3RBY3RpdmUiLCJ1c2VyTGFzdEFjdGl2ZSIsInNldFVzZXJMYXN0QWN0aXZlIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZGlmZlRpbWUiLCJnZXRUaW1lIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImRpZmZJblNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJjbGVhckludGVydmFsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/interface/userIsOnline/UserIsOnline.jsx\n"));

/***/ })

});