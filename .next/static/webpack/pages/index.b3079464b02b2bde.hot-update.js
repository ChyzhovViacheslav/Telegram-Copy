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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserIsOnline; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\nmargin-top: 2px;\\n        font-size: 14px;\\n    color: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst LastActives = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject(), (props)=>props.online ? \"var(--dark-primary-color)\" : \"var(--surface-color)\");\n_c = LastActives;\nfunction UserIsOnline(param) {\n    let { userId , lastActive  } = param;\n    _s();\n    const [userLastActive, setUserLastActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (lastActive === null) {\n            setUserLastActive(\"online\");\n        } else {\n            const currentDate = new Date();\n            const diffInSeconds = Math.floor((currentDate - lastActive) / 1000);\n            setUserLastActive(diffInSeconds);\n        }\n        const interval = setInterval(()=>{\n            if (lastActive === null) {\n                setUserLastActive(\"online\");\n            } else {\n                const currentDate = new Date();\n                const diffInSeconds = Math.floor((currentDate - lastActive) / 1000);\n                setUserLastActive(diffInSeconds);\n            }\n        }, 1000);\n        return ()=>clearInterval(interval);\n    }, [\n        userId,\n        lastActive\n    ]);\n    const renderLastActive = ()=>{\n        if (userLastActive === \"online\") {\n            return \"online\";\n        } else if (userLastActive < 60) {\n            return \"был(а) в сети только что\";\n        } else if (userLastActive < 120) {\n            return \"был(а) в сети минуту назад\";\n        } else if (userLastActive < 3600) {\n            return \"был(а) в сети \".concat(Math.floor(userLastActive / 60), \" минут назад\");\n        } else if (userLastActive < 7200) {\n            return \"был(а) в сети час назад\";\n        } else {\n            return \"был(а) в сети \".concat(Math.floor(userLastActive / 3600), \" часов назад\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(LastActives, {\n        online: userLastActive === \"online\",\n        children: renderLastActive()\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\userIsOnline\\\\UserIsOnline.jsx\",\n        lineNumber: 50,\n        columnNumber: 12\n    }, this);\n}\n_s(UserIsOnline, \"0weywB4xO2Qc4Kiln6h1GpU/8WY=\");\n_c1 = UserIsOnline;\nvar _c, _c1;\n$RefreshReg$(_c, \"LastActives\");\n$RefreshReg$(_c1, \"UserIsOnline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNaO0FBRXRDLE1BQU1JLGNBQWNELDhEQUFXLG9CQUdsQkcsQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLDhCQUE4QixzQkFBc0I7S0FIbkZIO0FBTVMsU0FBU0ksYUFBYSxLQUFzQixFQUFFO1FBQXhCLEVBQUVDLE9BQU0sRUFBRUMsV0FBVSxFQUFFLEdBQXRCOztJQUNqQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFekRELGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJUyxlQUFlLElBQUksRUFBRTtZQUNyQkUsa0JBQWtCO1FBQ3RCLE9BQU87WUFDSCxNQUFNQyxjQUFjLElBQUlDO1lBQ3hCLE1BQU1DLGdCQUFnQkMsS0FBS0MsS0FBSyxDQUFDLENBQUNKLGNBQWNILFVBQVMsSUFBSztZQUM5REUsa0JBQWtCRztRQUN0QixDQUFDO1FBRUQsTUFBTUcsV0FBV0MsWUFBWSxJQUFNO1lBQy9CLElBQUlULGVBQWUsSUFBSSxFQUFFO2dCQUNyQkUsa0JBQWtCO1lBQ3RCLE9BQU87Z0JBQ0gsTUFBTUMsY0FBYyxJQUFJQztnQkFDeEIsTUFBTUMsZ0JBQWdCQyxLQUFLQyxLQUFLLENBQUMsQ0FBQ0osY0FBY0gsVUFBUyxJQUFLO2dCQUM5REUsa0JBQWtCRztZQUN0QixDQUFDO1FBQ0wsR0FBRztRQUNILE9BQU8sSUFBTUssY0FBY0Y7SUFDL0IsR0FBRztRQUFDVDtRQUFRQztLQUFXO0lBRXZCLE1BQU1XLG1CQUFtQixJQUFNO1FBQzNCLElBQUlWLG1CQUFtQixVQUFVO1lBQzdCLE9BQU87UUFDWCxPQUFPLElBQUlBLGlCQUFpQixJQUFJO1lBQzVCLE9BQU87UUFDWCxPQUFPLElBQUlBLGlCQUFpQixLQUFLO1lBQzdCLE9BQU87UUFDWCxPQUFPLElBQUlBLGlCQUFpQixNQUFNO1lBQzlCLE9BQU8saUJBQWlELE9BQWhDSyxLQUFLQyxLQUFLLENBQUNOLGlCQUFpQixLQUFJO1FBQzVELE9BQU8sSUFBSUEsaUJBQWlCLE1BQU07WUFDOUIsT0FBTztRQUNYLE9BQU87WUFDSCxPQUFPLGlCQUFtRCxPQUFsQ0ssS0FBS0MsS0FBSyxDQUFDTixpQkFBaUIsT0FBTTtRQUM5RCxDQUFDO0lBQ0w7SUFFQSxxQkFBTyw4REFBQ1A7UUFBWUcsUUFBUUksbUJBQW1CO2tCQUFXVTs7Ozs7O0FBQzlELENBQUM7R0F6Q3VCYjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lLmpzeD8wY2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBMYXN0QWN0aXZlcyA9IHN0eWxlZC5zcGFuYFxyXG5tYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMub25saW5lID8gJ3ZhcigtLWRhcmstcHJpbWFyeS1jb2xvciknIDogJ3ZhcigtLXN1cmZhY2UtY29sb3IpJ307XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJJc09ubGluZSh7IHVzZXJJZCwgbGFzdEFjdGl2ZSB9KSB7XHJcbiAgICBjb25zdCBbdXNlckxhc3RBY3RpdmUsIHNldFVzZXJMYXN0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobGFzdEFjdGl2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZSgnb25saW5lJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKClcclxuICAgICAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKGN1cnJlbnREYXRlIC0gbGFzdEFjdGl2ZSkgLyAxMDAwKVxyXG4gICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZShkaWZmSW5TZWNvbmRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChsYXN0QWN0aXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRVc2VyTGFzdEFjdGl2ZSgnb25saW5lJylcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlmZkluU2Vjb25kcyA9IE1hdGguZmxvb3IoKGN1cnJlbnREYXRlIC0gbGFzdEFjdGl2ZSkgLyAxMDAwKVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlckxhc3RBY3RpdmUoZGlmZkluU2Vjb25kcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH0sIFt1c2VySWQsIGxhc3RBY3RpdmVdKVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckxhc3RBY3RpdmUgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJMYXN0QWN0aXZlID09PSAnb25saW5lJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ29ubGluZSdcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJMYXN0QWN0aXZlIDwgNjApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi0LHRi9C7KNCwKSDQsiDRgdC10YLQuCDRgtC+0LvRjNC60L4g0YfRgtC+XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyTGFzdEFjdGl2ZSA8IDEyMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLQsdGL0Lso0LApINCyINGB0LXRgtC4INC80LjQvdGD0YLRgyDQvdCw0LfQsNC0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1c2VyTGFzdEFjdGl2ZSA8IDM2MDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGDQsdGL0Lso0LApINCyINGB0LXRgtC4ICR7TWF0aC5mbG9vcih1c2VyTGFzdEFjdGl2ZSAvIDYwKX0g0LzQuNC90YPRgiDQvdCw0LfQsNC0YDtcclxuICAgICAgICB9IGVsc2UgaWYgKHVzZXJMYXN0QWN0aXZlIDwgNzIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLQsdGL0Lso0LApINCyINGB0LXRgtC4INGH0LDRgSDQvdCw0LfQsNC0XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGDQsdGL0Lso0LApINCyINGB0LXRgtC4ICR7TWF0aC5mbG9vcih1c2VyTGFzdEFjdGl2ZSAvIDM2MDApfSDRh9Cw0YHQvtCyINC90LDQt9Cw0LRgO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPExhc3RBY3RpdmVzIG9ubGluZT17dXNlckxhc3RBY3RpdmUgPT09ICdvbmxpbmUnfT57cmVuZGVyTGFzdEFjdGl2ZSgpfTwvTGFzdEFjdGl2ZXM+XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJMYXN0QWN0aXZlcyIsInNwYW4iLCJwcm9wcyIsIm9ubGluZSIsIlVzZXJJc09ubGluZSIsInVzZXJJZCIsImxhc3RBY3RpdmUiLCJ1c2VyTGFzdEFjdGl2ZSIsInNldFVzZXJMYXN0QWN0aXZlIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZGlmZkluU2Vjb25kcyIsIk1hdGgiLCJmbG9vciIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicmVuZGVyTGFzdEFjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/interface/userIsOnline/UserIsOnline.jsx\n"));

/***/ })

});