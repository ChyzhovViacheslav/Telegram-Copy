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

/***/ "./components/sidebarSettings/SettingsModal.jsx":
/*!******************************************************!*\
  !*** ./components/sidebarSettings/SettingsModal.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsModal; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers/modalSlice */ \"./store/reducers/modalSlice.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    height: 100%;\\n    position: fixed;\\n    background-color: #00000067;\\n    pointer-events: \",\n        \";\\n    opacity: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    top: 0%;\\n    left: 0%;\\n    position: absolute;\\n    width: 300px;\\n    height: 100%;\\n    background-color: rgb(18, 25, 37);\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 100%;\\n    height: 100px;\\n    h1{\\n        \\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst SettingsModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.active ? \"all\" : \"none\", (props)=>props.active ? \"1\" : \"0\");\n_c = SettingsModalWrapper;\nconst Settings = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Settings;\nconst LoginBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\nfunction SettingsModal() {\n    _s();\n    const { isAuth  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { settingsModal  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.modalSlice);\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SettingsModalWrapper, {\n        active: settingsModal,\n        onClick: ()=>dispatch((0,_store_reducers_modalSlice__WEBPACK_IMPORTED_MODULE_5__.changeSettingsModal)(false)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Settings, {\n            onClick: (e)=>e.stopPropagation(),\n            children: isAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Войти\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\sidebarSettings\\\\SettingsModal.jsx\",\n                lineNumber: 43,\n                columnNumber: 35\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\sidebarSettings\\\\SettingsModal.jsx\",\n            lineNumber: 42,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\sidebarSettings\\\\SettingsModal.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(SettingsModal, \"ZGsnua8bc7sjIy1RmWTGi09v9Fk=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch\n    ];\n});\n_c2 = SettingsModal;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"SettingsModalWrapper\");\n$RefreshReg$(_c1, \"Settings\");\n$RefreshReg$(_c2, \"SettingsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXJTZXR0aW5ncy9TZXR0aW5nc01vZGFsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDYTtBQUM0QjtBQUN6QjtBQUM0QjtBQUVyRSxNQUFNTSx1QkFBdUJMLDZEQUFVLG9CQUtqQk8sQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLFFBQVEsTUFBTSxFQUM3Q0QsQ0FBQUEsUUFBU0EsTUFBTUMsTUFBTSxHQUFHLE1BQU0sR0FBRztLQU4xQ0g7QUFTTixNQUFNSSxXQUFXVCw2REFBVTtNQUFyQlM7QUFTTixNQUFNQyxXQUFXViw2REFBVTtBQVFaLFNBQVNXLGdCQUFnQjs7SUFDcEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR1QsMERBQU9BO0lBQzFCLE1BQU0sRUFBRVUsY0FBYSxFQUFFLEdBQUdYLDREQUFjQSxDQUFDWSxDQUFBQSxRQUFTQSxNQUFNQyxVQUFVO0lBQ2xFLE1BQU1DLFdBQVdmLDREQUFjQTtJQUUvQixxQkFDSSw4REFBQ0k7UUFDR0csUUFBUUs7UUFDUkksU0FBUyxJQUFNRCxTQUFTWiwrRUFBbUJBLENBQUMsS0FBSztrQkFDakQsNEVBQUNLO1lBQVNRLFNBQVMsQ0FBQ0MsSUFBTUEsRUFBRUMsZUFBZTtzQkFDdENQLHVCQUFTLDhKQUFRLDhEQUFDUTswQkFBRzs7Ozs7b0JBQVU7Ozs7Ozs7Ozs7O0FBSWhELENBQUM7R0FkdUJUOztRQUNEUixzREFBT0E7UUFDQUQsd0RBQWNBO1FBQ3ZCRCx3REFBY0E7OztNQUhYVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXJTZXR0aW5ncy9TZXR0aW5nc01vZGFsLmpzeD8xZmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgnXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnXHJcbmltcG9ydCB7IGNoYW5nZVNldHRpbmdzTW9kYWwgfSBmcm9tICcuLi8uLi9zdG9yZS9yZWR1Y2Vycy9tb2RhbFNsaWNlJ1xyXG5cclxuY29uc3QgU2V0dGluZ3NNb2RhbFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjc7XHJcbiAgICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBcImFsbFwiIDogXCJub25lXCJ9O1xyXG4gICAgb3BhY2l0eTogJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBcIjFcIiA6IFwiMFwifTtcclxuYFxyXG5cclxuY29uc3QgU2V0dGluZ3MgPSBzdHlsZWQuZGl2YFxyXG4gICAgdG9wOiAwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4LCAyNSwgMzcpO1xyXG5gXHJcblxyXG5jb25zdCBMb2dpbkJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBoMXtcclxuICAgICAgICBcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2V0dGluZ3NNb2RhbCgpIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoIH0gPSB1c2VBdXRoKClcclxuICAgIGNvbnN0IHsgc2V0dGluZ3NNb2RhbCB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubW9kYWxTbGljZSlcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNldHRpbmdzTW9kYWxXcmFwcGVyXHJcbiAgICAgICAgICAgIGFjdGl2ZT17c2V0dGluZ3NNb2RhbH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goY2hhbmdlU2V0dGluZ3NNb2RhbChmYWxzZSkpfT5cclxuICAgICAgICAgICAgPFNldHRpbmdzIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfT5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGggPyA8PjwvPiA6IDxoMT7QktC+0LnRgtC4PC9oMT59XHJcbiAgICAgICAgICAgIDwvU2V0dGluZ3M+XHJcbiAgICAgICAgPC9TZXR0aW5nc01vZGFsV3JhcHBlcj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXV0aCIsImNoYW5nZVNldHRpbmdzTW9kYWwiLCJTZXR0aW5nc01vZGFsV3JhcHBlciIsImRpdiIsInByb3BzIiwiYWN0aXZlIiwiU2V0dGluZ3MiLCJMb2dpbkJ0biIsIlNldHRpbmdzTW9kYWwiLCJpc0F1dGgiLCJzZXR0aW5nc01vZGFsIiwic3RhdGUiLCJtb2RhbFNsaWNlIiwiZGlzcGF0Y2giLCJvbkNsaWNrIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebarSettings/SettingsModal.jsx\n"));

/***/ })

});