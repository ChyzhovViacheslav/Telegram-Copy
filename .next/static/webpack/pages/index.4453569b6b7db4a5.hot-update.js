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

/***/ "./components/Serach/Search.jsx":
/*!**************************************!*\
  !*** ./components/Serach/Search.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Search; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_inputsearch_InputSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interface/inputsearch/InputSearch */ \"./components/interface/inputsearch/InputSearch.jsx\");\n/* harmony import */ var _modals_SettingsModal_SettingsModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/SettingsModal/SettingsModal */ \"./components/modals/SettingsModal/SettingsModal.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  display: flex;\\n  align-items: center;\\n  padding: 8px 13px;\\n  box-shadow: 0 2px 2px rgba(0,0,0,0.25098);\\n  position: relative;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  width: 40px;\\n  height: 40px;\\n  border-radius: 100%;\\n  flex-shrink: 0;\\n  position: relative;\\n  cursor: pointer;\\n  &:hover{\\n    background-color: var(--input-search-border-color);\\n  }\\n  &::after,\\n  &::before,\\n  span{\\n    content: '';\\n    position: absolute;\\n    height: 2px;\\n    width: 50%;\\n    background-color: var(--primary-text-color);\\n    opacity: 0.7;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n  }\\n  &::after{\\n    top: 35%;\\n  }\\n  &::before{\\n    top: 65%;\\n  }\\n  span{\\n    top: 50%;\\n  }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject());\n_c = Container;\nconst SettingsBtn = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = SettingsBtn;\nfunction Search() {\n    _s();\n    const [modalIsActive, setModalIsActive] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SettingsBtn, {\n                onClick: ()=>{\n                    setModalIsActive(!modalIsActive);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Serach\\\\Search.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Serach\\\\Search.jsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_inputsearch_InputSearch__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Serach\\\\Search.jsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_modals_SettingsModal_SettingsModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                open: modalIsActive\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Serach\\\\Search.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Serach\\\\Search.jsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Search, \"AdpqrRUxDC+fkzzjL88XOj5PgTI=\");\n_c2 = Search;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c1, \"SettingsBtn\");\n$RefreshReg$(_c2, \"Search\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlcmFjaC9TZWFyY2guanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNEO0FBQ3dCO0FBQ0c7QUFFakUsTUFBTUssWUFBWUgsNkRBQVU7S0FBdEJHO0FBUU4sTUFBTUUsY0FBY0wsNkRBQVU7TUFBeEJLO0FBaUNTLFNBQVNDLFNBQVM7O0lBQy9CLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDLEtBQUs7SUFFeEQscUJBQ0UsOERBQUNJOzswQkFDRyw4REFBQ0U7Z0JBQVlJLFNBQVMsSUFBTTtvQkFBQ0QsaUJBQWlCLENBQUNEO2dCQUFjOzBCQUMzRCw0RUFBQ0c7Ozs7Ozs7Ozs7MEJBRUgsOERBQUNULDBFQUFXQTs7Ozs7MEJBQ1osOERBQUNDLDJFQUFhQTtnQkFBQ1MsTUFBTUo7Ozs7Ozs7Ozs7OztBQUs3QixDQUFDO0dBZHVCRDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NlcmFjaC9TZWFyY2guanN4P2M3NDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBJbnB1dFNlYXJjaCBmcm9tICcuLi9pbnRlcmZhY2UvaW5wdXRzZWFyY2gvSW5wdXRTZWFyY2gnXHJcbmltcG9ydCBTZXR0aW5nc01vZGFsIGZyb20gJy4uL21vZGFscy9TZXR0aW5nc01vZGFsL1NldHRpbmdzTW9kYWwnXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMTNweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAycHggcmdiYSgwLDAsMCwwLjI1MDk4KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmBcclxuXHJcbmNvbnN0IFNldHRpbmdzQnRuID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtYm9yZGVyLWNvbG9yKTtcclxuICB9XHJcbiAgJjo6YWZ0ZXIsXHJcbiAgJjo6YmVmb3JlLFxyXG4gIHNwYW57XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgJjo6YWZ0ZXJ7XHJcbiAgICB0b3A6IDM1JTtcclxuICB9XHJcbiAgJjo6YmVmb3Jle1xyXG4gICAgdG9wOiA2NSU7XHJcbiAgfVxyXG4gIHNwYW57XHJcbiAgICB0b3A6IDUwJTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBbbW9kYWxJc0FjdGl2ZSwgc2V0TW9kYWxJc0FjdGl2ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2V0dGluZ3NCdG4gb25DbGljaz17KCkgPT4ge3NldE1vZGFsSXNBY3RpdmUoIW1vZGFsSXNBY3RpdmUpfX0+XHJcbiAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPC9TZXR0aW5nc0J0bj5cclxuICAgICAgICA8SW5wdXRTZWFyY2gvPlxyXG4gICAgICAgIDxTZXR0aW5nc01vZGFsIG9wZW49e21vZGFsSXNBY3RpdmV9PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9TZXR0aW5nc01vZGFsPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwiSW5wdXRTZWFyY2giLCJTZXR0aW5nc01vZGFsIiwiQ29udGFpbmVyIiwiZGl2IiwiU2V0dGluZ3NCdG4iLCJTZWFyY2giLCJtb2RhbElzQWN0aXZlIiwic2V0TW9kYWxJc0FjdGl2ZSIsIm9uQ2xpY2siLCJzcGFuIiwib3BlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Serach/Search.jsx\n"));

/***/ })

});