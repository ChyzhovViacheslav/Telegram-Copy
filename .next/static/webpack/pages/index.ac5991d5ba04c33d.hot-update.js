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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserIsOnline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction UserIsOnline(param) {\n    let { userId , lastActive  } = param;\n    _s();\n    const [userLastActive, setUserLastActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (lastActive === null) {\n            setUserLastActive(\"online\");\n        } else {\n            const currentDate = new Date();\n            const diffTime = currentDate.getTime() - lastActive.getTime();\n            setUserLastActive(diffTime);\n        }\n        const interval = setInterval(()=>{\n            if (lastActive === null) {\n                setUserLastActive(\"online\");\n            } else {\n                const currentDate = new Date();\n                const diffTime = currentDate.getTime() - lastActive.getTime();\n                setUserLastActive(diffTime);\n            }\n        }, 5000);\n        return ()=>clearInterval(interval);\n    }, [\n        userId,\n        lastActive\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: userLastActive\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\userIsOnline\\\\UserIsOnline.jsx\",\n        lineNumber: 27,\n        columnNumber: 12\n    }, this);\n}\n_s(UserIsOnline, \"0weywB4xO2Qc4Kiln6h1GpU/8WY=\");\n_c = UserIsOnline;\nvar _c;\n$RefreshReg$(_c, \"UserIsOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBRW5DLFNBQVNHLGFBQWEsS0FBc0IsRUFBRTtRQUF4QixFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUF0Qjs7SUFDakMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSUksZUFBZSxJQUFJLEVBQUU7WUFDckJFLGtCQUFrQjtRQUN0QixPQUFPO1lBQ0gsTUFBTUMsY0FBYyxJQUFJQztZQUN4QixNQUFNQyxXQUFXRixZQUFZRyxPQUFPLEtBQUtOLFdBQVdNLE9BQU87WUFDM0RKLGtCQUFrQkc7UUFDdEIsQ0FBQztRQUVELE1BQU1FLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJUixlQUFlLElBQUksRUFBRTtnQkFDckJFLGtCQUFrQjtZQUN0QixPQUFPO2dCQUNILE1BQU1DLGNBQWMsSUFBSUM7Z0JBQ3hCLE1BQU1DLFdBQVdGLFlBQVlHLE9BQU8sS0FBS04sV0FBV00sT0FBTztnQkFDM0RKLGtCQUFrQkc7WUFDdEIsQ0FBQztRQUNMLEdBQUc7UUFDSCxPQUFPLElBQU1JLGNBQWNGO0lBQy9CLEdBQUc7UUFBQ1I7UUFBUUM7S0FBVztJQUV2QixxQkFBTyw4REFBQ1U7a0JBQU1UOzs7Ozs7QUFDbEIsQ0FBQztHQXpCdUJIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3VzZXJJc09ubGluZS9Vc2VySXNPbmxpbmUuanN4PzBjYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJJc09ubGluZSh7IHVzZXJJZCwgbGFzdEFjdGl2ZSB9KSB7XHJcbiAgICBjb25zdCBbdXNlckxhc3RBY3RpdmUsIHNldFVzZXJMYXN0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGFzdEFjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZSgnb25saW5lJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgY29uc3QgZGlmZlRpbWUgPSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkgLSBsYXN0QWN0aXZlLmdldFRpbWUoKVxyXG4gICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZShkaWZmVGltZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFzdEFjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoJ29ubGluZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmZUaW1lID0gY3VycmVudERhdGUuZ2V0VGltZSgpIC0gbGFzdEFjdGl2ZS5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKGRpZmZUaW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfSwgW3VzZXJJZCwgbGFzdEFjdGl2ZV0pXHJcblxyXG4gICAgcmV0dXJuIDxzcGFuPnt1c2VyTGFzdEFjdGl2ZX08L3NwYW4+XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VySXNPbmxpbmUiLCJ1c2VySWQiLCJsYXN0QWN0aXZlIiwidXNlckxhc3RBY3RpdmUiLCJzZXRVc2VyTGFzdEFjdGl2ZSIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImRpZmZUaW1lIiwiZ2V0VGltZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/interface/userIsOnline/UserIsOnline.jsx\n"));

/***/ })

});