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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthModal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/reducers/modalSlice */ \"./store/reducers/modalSlice.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    position: fixed;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: #0000005a;\\n    opacity: \",\n        \";\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    background-color: rgb(22, 29, 46);\\n    width: 400px;\\n    min-height: 100px;\\n    border-radius: 8px;\\n    position: relative;\\n    padding: 15px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 10px;\\n    height: 10px;\\n    background-color: red;\\n    top: 10px;\\n    right: 10px;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject(), (props)=>props.active ? \"1\" : \"0\", (props)=>props.active ? \"all\" : \"none\");\n_c = ModalWrapper;\nconst Modal = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject1());\n_c1 = Modal;\nconst Close = styled_components__WEBPACK_IMPORTED_MODULE_5__[\"default\"].div(_templateObject2());\n_c2 = Close;\nfunction AuthModal() {\n    _s();\n    const { authModal  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.modalSlice);\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ModalWrapper, {\n        active: authModal,\n        onClick: (e)=>{\n            e.stopPropagation();\n            dispatch((0,_store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__.changeAuthModal)(false));\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Modal, {\n            onClick: (e)=>e.stopPropagation(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Close, {\n                onClick: ()=>dispatch((0,_store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_4__.changeAuthModal)(false))\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\modals\\\\Auth\\\\AuthModal.jsx\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, this);\n}\n_s(AuthModal, \"7QVB7vds/hKAza0NU+2lYnmnBm4=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c3 = AuthModal;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"ModalWrapper\");\n$RefreshReg$(_c1, \"Modal\");\n$RefreshReg$(_c2, \"Close\");\n$RefreshReg$(_c3, \"AuthModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFscy9BdXRoL0F1dGhNb2RhbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRDtBQUMrQjtBQUNEO0FBRXBFLE1BQU1NLGVBQWVKLDZEQUFVLG9CQVdoQk0sQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUMxQkQsQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLFFBQVEsTUFBTTtLQVp0REg7QUFlTixNQUFNSSxRQUFRUiw2REFBVTtNQUFsQlE7QUFTTixNQUFNQyxRQUFRVCw2REFBVTtNQUFsQlM7QUFVUyxTQUFTQyxZQUFZOztJQUNoQyxNQUFNLEVBQUVDLFVBQVMsRUFBRSxHQUFHVCw0REFBY0EsQ0FBQ1UsQ0FBQUEsUUFBU0EsTUFBTUMsVUFBVTtJQUM5RCxNQUFNQyxXQUFXYiw0REFBY0E7SUFFL0IscUJBQ0ksOERBQUNHO1FBQ0dHLFFBQVFJO1FBQ1JJLFNBQVMsQ0FBQ0MsSUFBTTtZQUNaQSxFQUFFQyxlQUFlO1lBQ2pCSCxTQUFTWCwyRUFBZUEsQ0FBQyxLQUFLO1FBQ2xDO2tCQUNBLDRFQUFDSztZQUFNTyxTQUFTLENBQUNDLElBQU1BLEVBQUVDLGVBQWU7c0JBQ3BDLDRFQUFDUjtnQkFBTU0sU0FBUyxJQUFNRCxTQUFTWCwyRUFBZUEsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSXBFLENBQUM7R0FoQnVCTzs7UUFDRVIsd0RBQWNBO1FBQ25CRCx3REFBY0E7OztNQUZYUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vZGFscy9BdXRoL0F1dGhNb2RhbC5qc3g/Y2M2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvcmVkdXgnXHJcbmltcG9ydCB7IGNoYW5nZUF1dGhNb2RhbCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3JlZHVjZXJzL21vZGFsU2xpY2UnXHJcblxyXG5jb25zdCBNb2RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNWE7XHJcbiAgICBvcGFjaXR5OiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IFwiMVwiIDogXCIwXCJ9O1xyXG4gICAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gXCJhbGxcIiA6IFwibm9uZVwifTtcclxuYFxyXG5cclxuY29uc3QgTW9kYWwgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyLCAyOSwgNDYpO1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG5gXHJcblxyXG5jb25zdCBDbG9zZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTBweDtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoTW9kYWwoKSB7XHJcbiAgICBjb25zdCB7IGF1dGhNb2RhbCB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubW9kYWxTbGljZSlcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsV3JhcHBlclxyXG4gICAgICAgICAgICBhY3RpdmU9e2F1dGhNb2RhbH1cclxuICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGNoYW5nZUF1dGhNb2RhbChmYWxzZSkpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8TW9kYWwgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgICAgPENsb3NlIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGNoYW5nZUF1dGhNb2RhbChmYWxzZSkpfSAvPlxyXG4gICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgIDwvTW9kYWxXcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVkIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImNoYW5nZUF1dGhNb2RhbCIsIk1vZGFsV3JhcHBlciIsImRpdiIsInByb3BzIiwiYWN0aXZlIiwiTW9kYWwiLCJDbG9zZSIsIkF1dGhNb2RhbCIsImF1dGhNb2RhbCIsInN0YXRlIiwibW9kYWxTbGljZSIsImRpc3BhdGNoIiwib25DbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/modals/Auth/AuthModal.jsx\n"));

/***/ })

});