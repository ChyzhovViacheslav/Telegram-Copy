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

/***/ "./components/modals/Auth/AuthModal.jsx":
/*!**********************************************!*\
  !*** ./components/modals/Auth/AuthModal.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthModal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/modalSlice */ \"./store/reducers/modalSlice.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    position: fixed;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: #0000005a;\\n    opacity: \",\n        \";\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: rgb(22, 29, 46);\\n    width: 400px;\\n    min-height: 100px;\\n    border-radius: 8px;\\n    position: relative;\\n    padding: 15px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 10px;\\n    height: 10px;\\n    background-color: red;\\n    top: 10px;\\n    right: 10px;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), (props)=>props.active ? \"1\" : \"0\", (props)=>props.active ? \"all\" : \"none\");\n_c = ModalWrapper;\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Modal;\nconst Close = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = Close;\nfunction AuthModal() {\n    _s();\n    const { authModal  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.modalSlice);\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        active: authModal,\n        onClick: ()=>{\n            dispatch((0,_store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__.changeAuthModal)(false));\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Modal, {\n            onClick: (e)=>e.stopPropagation(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Close, {\n                onClick: ()=>dispatch((0,_store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__.changeAuthModal)(false))\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n                lineNumber: 49,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n            lineNumber: 48,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(AuthModal, \"7QVB7vds/hKAza0NU+2lYnmnBm4=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c3 = AuthModal;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"Modal\");\n$RefreshReg$(_c2, \"Close\");\n$RefreshReg$(_c3, \"AuthModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFscy9BdXRoL0F1dGhNb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUMrQjtBQUNEO0FBRXBFLE1BQU1NLGVBQWVKLDZEQUFVLG9CQVdoQk0sQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUMxQkQsQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLFFBQVEsTUFBTTtLQVp0REg7QUFlTixNQUFNSSxRQUFRUiw2REFBVTtNQUFsQlE7QUFTTixNQUFNQyxRQUFRVCw2REFBVTtNQUFsQlM7QUFVUyxTQUFTQyxZQUFZOztJQUNoQyxNQUFNLEVBQUVDLFVBQVMsRUFBRSxHQUFHVCw0REFBY0EsQ0FBQ1UsQ0FBQUEsUUFBU0EsTUFBTUMsVUFBVTtJQUM5RCxNQUFNQyxXQUFXYiw0REFBY0E7SUFFL0IscUJBQ0ksOERBQUNHO1FBQ0dHLFFBQVFJO1FBQ1JJLFNBQVMsSUFBTTtZQUFDRCxTQUFTWCwyRUFBZUEsQ0FBQyxLQUFLO1FBQUU7a0JBQ2hELDRFQUFDSztZQUFNTyxTQUFTLENBQUNDLElBQU1BLEVBQUVDLGVBQWU7c0JBQ3BDLDRFQUFDUjtnQkFBTU0sU0FBUyxJQUFNRCxTQUFTWCwyRUFBZUEsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBFLENBQUM7R0FidUJPOztRQUNFUix3REFBY0E7UUFDbkJELHdEQUFjQTs7O01BRlhTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbW9kYWxzL0F1dGgvQXV0aE1vZGFsLmpzeD9jYzYzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9ob29rcy9yZWR1eCdcclxuaW1wb3J0IHsgY2hhbmdlQXV0aE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvcmVkdWNlcnMvbW9kYWxTbGljZSdcclxuXHJcbmNvbnN0IE1vZGFsV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1YTtcclxuICAgIG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCIxXCIgOiBcIjBcIn07XHJcbiAgICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBcImFsbFwiIDogXCJub25lXCJ9O1xyXG5gXHJcblxyXG5jb25zdCBNb2RhbCA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDI5LCA0Nik7XHJcbiAgICB3aWR0aDogNDAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbmBcclxuXHJcbmNvbnN0IENsb3NlID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhNb2RhbCgpIHtcclxuICAgIGNvbnN0IHsgYXV0aE1vZGFsIH0gPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5tb2RhbFNsaWNlKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICAgIGFjdGl2ZT17YXV0aE1vZGFsfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7ZGlzcGF0Y2goY2hhbmdlQXV0aE1vZGFsKGZhbHNlKSl9fT5cclxuICAgICAgICAgICAgPE1vZGFsIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgICAgIDxDbG9zZSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjaGFuZ2VBdXRoTW9kYWwoZmFsc2UpKX0gLz5cclxuICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICA8L01vZGFsV3JhcHBlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJjaGFuZ2VBdXRoTW9kYWwiLCJNb2RhbFdyYXBwZXIiLCJkaXYiLCJwcm9wcyIsImFjdGl2ZSIsIk1vZGFsIiwiQ2xvc2UiLCJBdXRoTW9kYWwiLCJhdXRoTW9kYWwiLCJzdGF0ZSIsIm1vZGFsU2xpY2UiLCJkaXNwYXRjaCIsIm9uQ2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modals/Auth/AuthModal.jsx\n"));

/***/ })

});