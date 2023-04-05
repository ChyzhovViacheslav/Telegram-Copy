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

/***/ "./components/interface/inputMessage/InputMessage.jsx":
/*!************************************************************!*\
  !*** ./components/interface/inputMessage/InputMessage.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputMessage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    flex-shrink: 0;\\n    height: 54px;\\n    margin-top: 10px;\\n    \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: black;\\n    width: 100%;\\n    color: var(--primary-text-color);\\n    font-size: 16px;\\n    background-color: inherit;\\n    &::selection{\\n        background-color: var(--primary-color);\\n    }\\n    &:focus{\\n        caret-color: var(--primary-color);\\n    }\\n    \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: var(--surface-color);\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    align-items: center;\\n    padding: 0px 25px;\\n    border-radius: 10px;\\n    position: relative;\\n    &:after{\\n        content: 'Message';\\n        position: absolute;\\n        font-size: 16px;\\n        color: var(--secondary-text-color);\\n        left: \",\n        \";\\n        opacity: \",\n        \";\\n        transition: all 0.2s ease-in-out;\\n        pointer-events: none;\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\nconst InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject());\n_c = InputWrapper;\nconst Input = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject1());\n_c1 = Input;\nconst InputMessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2(), (props)=>props.empty ? \"50px\" : \"25px\", (props)=>props.empty ? \"0\" : \"1\");\n_c2 = InputMessageWrapper;\nfunction InputMessage(param) {\n    let { value , setMessage  } = param;\n    const getHeight = (value)=>{\n        const lineHeight = 24;\n        const lines = value.split(\"\\n\").length;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InputMessageWrapper, {\n            empty: value.length,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Input, {\n                value: value,\n                onChange: (e)=>setMessage(e.target.value),\n                type: \"text\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\inputMessage\\\\InputMessage.jsx\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\inputMessage\\\\InputMessage.jsx\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\inputMessage\\\\InputMessage.jsx\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_c3 = InputMessage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"InputWrapper\");\n$RefreshReg$(_c1, \"Input\");\n$RefreshReg$(_c2, \"InputMessageWrapper\");\n$RefreshReg$(_c3, \"InputMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9pbnB1dE1lc3NhZ2UvSW5wdXRNZXNzYWdlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUNnQjtBQUV0RCxNQUFNRyxlQUFlRiw2REFBVTtLQUF6QkU7QUFTTixNQUFNRSxRQUFRSiwrREFBWTtNQUFwQkk7QUFjTixNQUFNRSxzQkFBc0JOLDZEQUFVLHFCQWN0Qk8sQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxHQUFHLFNBQVMsTUFBTSxFQUNuQ0QsQ0FBQUEsUUFBU0EsTUFBTUMsS0FBSyxHQUFHLE1BQU0sR0FBRztNQWY3Q0Y7QUFxQlMsU0FBU0csYUFBYSxLQUFxQixFQUFFO1FBQXZCLEVBQUVDLE1BQUssRUFBRUMsV0FBVSxFQUFFLEdBQXJCO0lBQ2pDLE1BQU1DLFlBQVksQ0FBQ0YsUUFBVTtRQUN6QixNQUFNRyxhQUFhO1FBQ25CLE1BQU1DLFFBQVFKLE1BQU1LLEtBQUssQ0FBQyxNQUFNQyxNQUFNO0lBQzFDO0lBQ0EscUJBQ0ksOERBQUNkO2tCQUNHLDRFQUFDSTtZQUFvQkUsT0FBT0UsTUFBTU0sTUFBTTtzQkFDcEMsNEVBQUNaO2dCQUNHTSxPQUFPQTtnQkFDUE8sVUFBVSxDQUFDQyxJQUFNUCxXQUFXTyxFQUFFQyxNQUFNLENBQUNULEtBQUs7Z0JBQzFDVSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXpCLENBQUM7TUFmdUJYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL2lucHV0TWVzc2FnZS9JbnB1dE1lc3NhZ2UuanN4P2EwN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgSWNvblNlbGVjdG9yIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9pY29ucydcclxuXHJcbmNvbnN0IElucHV0V3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYFxyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgJjo6c2VsZWN0aW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1c3tcclxuICAgICAgICBjYXJldC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbiAgICBgXHJcblxyXG5jb25zdCBJbnB1dE1lc3NhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDBweCAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogJ01lc3NhZ2UnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcclxuICAgICAgICBsZWZ0OiAke3Byb3BzID0+IHByb3BzLmVtcHR5ID8gJzUwcHgnIDogJzI1cHgnfTtcclxuICAgICAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLmVtcHR5ID8gJzAnIDogJzEnfTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRNZXNzYWdlKHsgdmFsdWUsIHNldE1lc3NhZ2UgfSkge1xyXG4gICAgY29uc3QgZ2V0SGVpZ2h0ID0gKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZUhlaWdodCA9IDI0O1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gdmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8SW5wdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRNZXNzYWdlV3JhcHBlciBlbXB0eT17dmFsdWUubGVuZ3RofT5cclxuICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnIC8+XHJcbiAgICAgICAgICAgIDwvSW5wdXRNZXNzYWdlV3JhcHBlcj5cclxuICAgICAgICA8L0lucHV0V3JhcHBlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJJY29uU2VsZWN0b3IiLCJJbnB1dFdyYXBwZXIiLCJkaXYiLCJJbnB1dCIsImlucHV0IiwiSW5wdXRNZXNzYWdlV3JhcHBlciIsInByb3BzIiwiZW1wdHkiLCJJbnB1dE1lc3NhZ2UiLCJ2YWx1ZSIsInNldE1lc3NhZ2UiLCJnZXRIZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGluZXMiLCJzcGxpdCIsImxlbmd0aCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/inputMessage/InputMessage.jsx\n"));

/***/ })

});