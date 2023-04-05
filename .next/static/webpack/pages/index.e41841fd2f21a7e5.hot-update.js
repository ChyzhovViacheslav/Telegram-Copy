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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserIsOnline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction UserIsOnline(param) {\n    let { userId , lastActive  } = param;\n    _s();\n    const [userLastActive, setUserLastActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (lastActive === null) {\n            setUserLastActive(\"online\");\n        } else {\n            const currentDate = new Date();\n            const lastSeenInSec = lastActive.getTime() / 1000;\n            const lastSeen = new Date(currentDate - lastActive.getTime() * 1000);\n            const diffInSeconds = Math.floor((currentDate - lastSeen) / 1000);\n            setUserLastActive(diffInSeconds);\n        }\n        const interval = setInterval(()=>{\n            if (lastActive === null) {\n                setUserLastActive(\"online\");\n            } else {\n                const currentDate = new Date();\n                const lastSeen = new Date(currentDate - lastActive.getTime() * 1000);\n                const diffInSeconds = Math.floor((currentDate - lastSeen) / 1000);\n                setUserLastActive(diffInSeconds);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        userId,\n        lastActive\n    ]);\n    const renderLastActive = ()=>{\n        if (userLastActive < 60) {\n            return \"был в сети только что\";\n        } else if (userLastActive < 120) {\n            return \"был в сети минуту назад\";\n        } else if (userLastActive < 3600) {\n            return \"был в сети \".concat(Math.floor(userLastActive / 60), \" минут назад\");\n        } else if (userLastActive < 7200) {\n            return \"был в сети час назад\";\n        } else {\n            return \"был в сети \".concat(Math.floor(userLastActive / 3600), \" часов назад\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: renderLastActive()\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\userIsOnline\\\\UserIsOnline.jsx\",\n        lineNumber: 44,\n        columnNumber: 12\n    }, this);\n}\n_s(UserIsOnline, \"0weywB4xO2Qc4Kiln6h1GpU/8WY=\");\n_c = UserIsOnline;\nvar _c;\n$RefreshReg$(_c, \"UserIsOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBRW5DLFNBQVNHLGFBQWEsS0FBc0IsRUFBRTtRQUF4QixFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUF0Qjs7SUFDakMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSUksZUFBZSxJQUFJLEVBQUU7WUFDckJFLGtCQUFrQjtRQUN0QixPQUFPO1lBQ0gsTUFBTUMsY0FBYyxJQUFJQztZQUN4QixNQUFNQyxnQkFBZ0JMLFdBQVdNLE9BQU8sS0FBSztZQUM3QyxNQUFNQyxXQUFXLElBQUlILEtBQUtELGNBQWNILFdBQVdNLE9BQU8sS0FBSztZQUMvRCxNQUFNRSxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxDQUFDUCxjQUFjSSxRQUFPLElBQUs7WUFDNURMLGtCQUFrQk07UUFDdEIsQ0FBQztRQUVELE1BQU1HLFdBQVdDLFlBQVksSUFBTTtZQUMvQixJQUFJWixlQUFlLElBQUksRUFBRTtnQkFDckJFLGtCQUFrQjtZQUN0QixPQUFPO2dCQUNILE1BQU1DLGNBQWMsSUFBSUM7Z0JBQ3hCLE1BQU1HLFdBQVcsSUFBSUgsS0FBS0QsY0FBY0gsV0FBV00sT0FBTyxLQUFLO2dCQUMvRCxNQUFNRSxnQkFBZ0JDLEtBQUtDLEtBQUssQ0FBQyxDQUFDUCxjQUFjSSxRQUFPLElBQUs7Z0JBQzVETCxrQkFBa0JNO1lBQ3RCLENBQUM7UUFDTCxHQUFHO1FBQ0gsT0FBTyxJQUFNSyxjQUFjRjtJQUMvQixHQUFHO1FBQUNaO1FBQVFDO0tBQVc7SUFFdkIsTUFBTWMsbUJBQW1CLElBQU07UUFDM0IsSUFBSWIsaUJBQWlCLElBQUk7WUFDckIsT0FBTztRQUNYLE9BQU8sSUFBSUEsaUJBQWlCLEtBQUs7WUFDN0IsT0FBTztRQUNYLE9BQU8sSUFBSUEsaUJBQWlCLE1BQU07WUFDOUIsT0FBTyxjQUE4QyxPQUFoQ1EsS0FBS0MsS0FBSyxDQUFDVCxpQkFBaUIsS0FBSTtRQUN6RCxPQUFPLElBQUlBLGlCQUFpQixNQUFNO1lBQzlCLE9BQU87UUFDWCxPQUFPO1lBQ0gsT0FBTyxjQUFnRCxPQUFsQ1EsS0FBS0MsS0FBSyxDQUFDVCxpQkFBaUIsT0FBTTtRQUMzRCxDQUFDO0lBQ0w7SUFFQSxxQkFBTyw4REFBQ2M7a0JBQU1EOzs7Ozs7QUFDbEIsQ0FBQztHQTFDdUJoQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeD8wY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VySXNPbmxpbmUoeyB1c2VySWQsIGxhc3RBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgW3VzZXJMYXN0QWN0aXZlLCBzZXRVc2VyTGFzdEFjdGl2ZV0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxhc3RBY3RpdmUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoJ29ubGluZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWVuSW5TZWMgPSBsYXN0QWN0aXZlLmdldFRpbWUoKSAvIDEwMDBcclxuICAgICAgICAgICAgY29uc3QgbGFzdFNlZW4gPSBuZXcgRGF0ZShjdXJyZW50RGF0ZSAtIGxhc3RBY3RpdmUuZ2V0VGltZSgpICogMTAwMClcclxuICAgICAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKGN1cnJlbnREYXRlIC0gbGFzdFNlZW4pIC8gMTAwMClcclxuICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoZGlmZkluU2Vjb25kcylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobGFzdEFjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoJ29ubGluZScpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RTZWVuID0gbmV3IERhdGUoY3VycmVudERhdGUgLSBsYXN0QWN0aXZlLmdldFRpbWUoKSAqIDEwMDApXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaWZmSW5TZWNvbmRzID0gTWF0aC5mbG9vcigoY3VycmVudERhdGUgLSBsYXN0U2VlbikgLyAxMDAwKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoZGlmZkluU2Vjb25kcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIFt1c2VySWQsIGxhc3RBY3RpdmVdKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckxhc3RBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJMYXN0QWN0aXZlIDwgNjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi0LHRi9C7INCyINGB0LXRgtC4INGC0L7Qu9GM0LrQviDRh9GC0L5cIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJMYXN0QWN0aXZlIDwgMTIwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcItCx0YvQuyDQsiDRgdC10YLQuCDQvNC40L3Rg9GC0YMg0L3QsNC30LDQtFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodXNlckxhc3RBY3RpdmUgPCAzNjAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBg0LHRi9C7INCyINGB0LXRgtC4ICR7TWF0aC5mbG9vcih1c2VyTGFzdEFjdGl2ZSAvIDYwKX0g0LzQuNC90YPRgiDQvdCw0LfQsNC0YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJMYXN0QWN0aXZlIDwgNzIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLQsdGL0Lsg0LIg0YHQtdGC0Lgg0YfQsNGBINC90LDQt9Cw0LRcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYNCx0YvQuyDQsiDRgdC10YLQuCAke01hdGguZmxvb3IodXNlckxhc3RBY3RpdmUgLyAzNjAwKX0g0YfQsNGB0L7QsiDQvdCw0LfQsNC0YDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxzcGFuPntyZW5kZXJMYXN0QWN0aXZlKCl9PC9zcGFuPlxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlcklzT25saW5lIiwidXNlcklkIiwibGFzdEFjdGl2ZSIsInVzZXJMYXN0QWN0aXZlIiwic2V0VXNlckxhc3RBY3RpdmUiLCJjdXJyZW50RGF0ZSIsIkRhdGUiLCJsYXN0U2VlbkluU2VjIiwiZ2V0VGltZSIsImxhc3RTZWVuIiwiZGlmZkluU2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVuZGVyTGFzdEFjdGl2ZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/userIsOnline/UserIsOnline.jsx\n"));

/***/ })

});