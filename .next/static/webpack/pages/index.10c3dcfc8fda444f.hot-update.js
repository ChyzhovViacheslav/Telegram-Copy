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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserIsOnline; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction UserIsOnline(param) {\n    let { userId , lastActive  } = param;\n    _s();\n    const [userLastActive, setUserLastActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    console.log(lastActive);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (lastActive === null) {\n            setUserLastActive(\"online\");\n        } else {\n            const currentDate = new Date();\n            const lastSeen = new Date(currentDate - lastActive.getTime() * 1000);\n            const diffInSeconds = Math.floor((currentDate - lastSeen) / 1000);\n            setUserLastActive(diffInSeconds);\n        }\n        const interval = setInterval(()=>{\n            if (lastActive === null) {\n                setUserLastActive(\"online\");\n            } else {\n                const currentDate = new Date();\n                const lastSeen = new Date(currentDate - lastActive.getTime() * 1000);\n                const diffInSeconds = Math.floor((currentDate - lastSeen) / 1000);\n                setUserLastActive(diffInSeconds);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        userId,\n        lastActive\n    ]);\n    const renderLastActive = ()=>{\n        if (userLastActive < 60) {\n            return \"был в сети только что\";\n        } else if (userLastActive < 120) {\n            return \"был в сети минуту назад\";\n        } else if (userLastActive < 3600) {\n            return \"был в сети \".concat(Math.floor(userLastActive / 60), \" минут назад\");\n        } else if (userLastActive < 7200) {\n            return \"был в сети час назад\";\n        } else {\n            return \"был в сети \".concat(Math.floor(userLastActive / 3600), \" часов назад\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: renderLastActive()\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\userIsOnline\\\\UserIsOnline.jsx\",\n        lineNumber: 44,\n        columnNumber: 12\n    }, this);\n}\n_s(UserIsOnline, \"0weywB4xO2Qc4Kiln6h1GpU/8WY=\");\n_c = UserIsOnline;\nvar _c;\n$RefreshReg$(_c, \"UserIsOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWtEO0FBRW5DLFNBQVNHLGFBQWEsS0FBc0IsRUFBRTtRQUF4QixFQUFFQyxPQUFNLEVBQUVDLFdBQVUsRUFBRSxHQUF0Qjs7SUFDakMsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBRXpETSxRQUFRQyxHQUFHLENBQUNKO0lBQ1pKLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJSSxlQUFlLElBQUksRUFBRTtZQUNyQkUsa0JBQWtCO1FBQ3RCLE9BQU87WUFDSCxNQUFNRyxjQUFjLElBQUlDO1lBQ3hCLE1BQU1DLFdBQVcsSUFBSUQsS0FBS0QsY0FBY0wsV0FBV1EsT0FBTyxLQUFLO1lBQy9ELE1BQU1DLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDLENBQUNOLGNBQWNFLFFBQU8sSUFBSztZQUM1REwsa0JBQWtCTztRQUN0QixDQUFDO1FBRUQsTUFBTUcsV0FBV0MsWUFBWSxJQUFNO1lBQy9CLElBQUliLGVBQWUsSUFBSSxFQUFFO2dCQUNyQkUsa0JBQWtCO1lBQ3RCLE9BQU87Z0JBQ0gsTUFBTUcsY0FBYyxJQUFJQztnQkFDeEIsTUFBTUMsV0FBVyxJQUFJRCxLQUFLRCxjQUFjTCxXQUFXUSxPQUFPLEtBQUs7Z0JBQy9ELE1BQU1DLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDLENBQUNOLGNBQWNFLFFBQU8sSUFBSztnQkFDNURMLGtCQUFrQk87WUFDdEIsQ0FBQztRQUNMLEdBQUc7UUFDSCxPQUFPLElBQU1LLGNBQWNGO0lBQy9CLEdBQUc7UUFBQ2I7UUFBUUM7S0FBVztJQUV2QixNQUFNZSxtQkFBbUIsSUFBTTtRQUMzQixJQUFJZCxpQkFBaUIsSUFBSTtZQUNyQixPQUFPO1FBQ1gsT0FBTyxJQUFJQSxpQkFBaUIsS0FBSztZQUM3QixPQUFPO1FBQ1gsT0FBTyxJQUFJQSxpQkFBaUIsTUFBTTtZQUM5QixPQUFPLGNBQThDLE9BQWhDUyxLQUFLQyxLQUFLLENBQUNWLGlCQUFpQixLQUFJO1FBQ3pELE9BQU8sSUFBSUEsaUJBQWlCLE1BQU07WUFDOUIsT0FBTztRQUNYLE9BQU87WUFDSCxPQUFPLGNBQWdELE9BQWxDUyxLQUFLQyxLQUFLLENBQUNWLGlCQUFpQixPQUFNO1FBQzNELENBQUM7SUFDTDtJQUVBLHFCQUFPLDhEQUFDZTtrQkFBTUQ7Ozs7OztBQUNsQixDQUFDO0dBMUN1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3VzZXJJc09ubGluZS9Vc2VySXNPbmxpbmUuanN4PzBjYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJJc09ubGluZSh7IHVzZXJJZCwgbGFzdEFjdGl2ZSB9KSB7XHJcbiAgICBjb25zdCBbdXNlckxhc3RBY3RpdmUsIHNldFVzZXJMYXN0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc29sZS5sb2cobGFzdEFjdGl2ZSlcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxhc3RBY3RpdmUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoJ29ubGluZScpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3RTZWVuID0gbmV3IERhdGUoY3VycmVudERhdGUgLSBsYXN0QWN0aXZlLmdldFRpbWUoKSAqIDEwMDApXHJcbiAgICAgICAgICAgIGNvbnN0IGRpZmZJblNlY29uZHMgPSBNYXRoLmZsb29yKChjdXJyZW50RGF0ZSAtIGxhc3RTZWVuKSAvIDEwMDApXHJcbiAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKGRpZmZJblNlY29uZHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGxhc3RBY3RpdmUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKCdvbmxpbmUnKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0U2VlbiA9IG5ldyBEYXRlKGN1cnJlbnREYXRlIC0gbGFzdEFjdGl2ZS5nZXRUaW1lKCkgKiAxMDAwKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKGN1cnJlbnREYXRlIC0gbGFzdFNlZW4pIC8gMTAwMClcclxuICAgICAgICAgICAgICAgIHNldFVzZXJMYXN0QWN0aXZlKGRpZmZJblNlY29uZHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICB9LCBbdXNlcklkLCBsYXN0QWN0aXZlXSlcclxuXHJcbiAgICBjb25zdCByZW5kZXJMYXN0QWN0aXZlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyTGFzdEFjdGl2ZSA8IDYwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcItCx0YvQuyDQsiDRgdC10YLQuCDRgtC+0LvRjNC60L4g0YfRgtC+XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyTGFzdEFjdGl2ZSA8IDEyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLQsdGL0Lsg0LIg0YHQtdGC0Lgg0LzQuNC90YPRgtGDINC90LDQt9Cw0LRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJMYXN0QWN0aXZlIDwgMzYwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYNCx0YvQuyDQsiDRgdC10YLQuCAke01hdGguZmxvb3IodXNlckxhc3RBY3RpdmUgLyA2MCl9INC80LjQvdGD0YIg0L3QsNC30LDQtGA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyTGFzdEFjdGl2ZSA8IDcyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi0LHRi9C7INCyINGB0LXRgtC4INGH0LDRgSDQvdCw0LfQsNC0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGDQsdGL0Lsg0LIg0YHQtdGC0LggJHtNYXRoLmZsb29yKHVzZXJMYXN0QWN0aXZlIC8gMzYwMCl9INGH0LDRgdC+0LIg0L3QsNC30LDQtGA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8c3Bhbj57cmVuZGVyTGFzdEFjdGl2ZSgpfTwvc3Bhbj5cclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlVzZXJJc09ubGluZSIsInVzZXJJZCIsImxhc3RBY3RpdmUiLCJ1c2VyTGFzdEFjdGl2ZSIsInNldFVzZXJMYXN0QWN0aXZlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnREYXRlIiwiRGF0ZSIsImxhc3RTZWVuIiwiZ2V0VGltZSIsImRpZmZJblNlY29uZHMiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlckxhc3RBY3RpdmUiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/interface/userIsOnline/UserIsOnline.jsx\n"));

/***/ })

});