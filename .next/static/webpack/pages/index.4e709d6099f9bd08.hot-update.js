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

/***/ "./components/SidebarUserInfo/SidebarUserInfo.jsx":
/*!********************************************************!*\
  !*** ./components/SidebarUserInfo/SidebarUserInfo.jsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidebarUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/userIsOnline/UserIsOnline */ \"./components/interface/userIsOnline/UserIsOnline.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--surface-color);\\n    width: 470px;\\n    height: 100%;\\n    flex-shrink: 0;\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    padding: 8px 12px;\\n    h2{\\n        margin-left: 22px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 44px;\\n    height: 44px;\\n    position: relative;\\n    cursor: pointer;\\n    &::after,&::before{\\n        content: '';\\n        position: absolute;\\n        width: 50%;\\n        height: 2px;\\n        background-color: #fff;\\n        border-radius: 16px;\\n        top: 50%;\\n        left: 50%;\\n    }\\n    &::after{\\n        transform: translate(-50%, -50%) rotate(45deg);\\n    }\\n    &::before{\\n        transform: translate(-50%, -50%) rotate(-45deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 470px;\\n    img{\\n        height: 100%;\\n        width: 100%;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: 15px;\\n    left: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    span{\\n        color: #fff;\\n        opacity: 0.7;\\n    }\\n    z-index: 999;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);\\n    z-index: 888;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    padding: 10px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: auto;\\n    column-gap: 25px;\\n    padding: 10px;\\n    border-radius: 12px;\\n    cursor: pointer;\\n    svg{\\n        height: 30px;\\n        width: 30px;\\n    }\\n    div{\\n        display: flex;\\n        row-gap: 6px;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        h2{\\n            font-weight: 400;\\n            font-size: 20px;\\n        }\\n        span{\\n            color: var(--gray-text-color);\\n            font-weight: 500;\\n        }\\n    }\\n    &:hover{\\n        background-color: var(--input-search-border-color);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    0% {\\n        width: 0px;\\n        height: 0px;\\n        opacity: 0.5;\\n    }\\n  100% {\\n    width: 200px;\\n    height: 200px;\\n    opacity: 0;\\n  }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.open ? \"all\" : \"none\");\n_c = Wrapper;\nconst Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Actions;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = CloseBtn;\nconst Images = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = Images;\nconst InfoName = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = InfoName;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\n_c5 = Shadow;\nconst UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = UserInfo;\nconst UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\n_c7 = UserInfoWrapper;\nconst rippleEffect = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes)(_templateObject8());\nfunction SidebarUserInfo(param) {\n    let { isOpen , setIsOpen , user , userLastActive  } = param;\n    const copyHandler = (text)=>{\n        navigator.clipboard.writeText(text);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        open: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Actions, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseBtn, {\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 145,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 144,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Images, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(user.image)),\n                        alt: \"image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InfoName, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 151,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userId: user._id,\n                                lastActive: userLastActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 154,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 148,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.email),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"mail\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 158,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 160,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 161,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 159,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.username),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"at\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 165,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 167,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 156,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n        lineNumber: 143,\n        columnNumber: 9\n    }, this);\n}\n_c8 = SidebarUserInfo;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Actions\");\n$RefreshReg$(_c2, \"CloseBtn\");\n$RefreshReg$(_c3, \"Images\");\n$RefreshReg$(_c4, \"InfoName\");\n$RefreshReg$(_c5, \"Shadow\");\n$RefreshReg$(_c6, \"UserInfo\");\n$RefreshReg$(_c7, \"UserInfoWrapper\");\n$RefreshReg$(_c8, \"SidebarUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDYztBQUNZO0FBQ2Q7QUFFbkQsTUFBTU8sVUFBVUosNkRBQVUsb0JBT0pNLENBQUFBLFFBQVNBLE1BQU1DLElBQUksR0FBRyxRQUFRLE1BQU07S0FQcERIO0FBVU4sTUFBTUksVUFBVVIsNkRBQVU7TUFBcEJRO0FBV04sTUFBTUMsV0FBV1QsNkRBQVU7TUFBckJTO0FBdUJOLE1BQU1DLFNBQVNWLDZEQUFVO01BQW5CVTtBQVVOLE1BQU1DLFdBQVdYLDZEQUFVO01BQXJCVztBQWNOLE1BQU1DLFNBQVNaLDZEQUFVO01BQW5CWTtBQVVOLE1BQU1DLFdBQVdiLDZEQUFVO01BQXJCYTtBQU9OLE1BQU1DLGtCQUFrQmQsNkRBQVU7TUFBNUJjO0FBZ0NOLE1BQU1DLGVBQWVkLDREQUFTQTtBQWFmLFNBQVNlLGdCQUFnQixLQUEyQyxFQUFFO1FBQTdDLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFQyxLQUFJLEVBQUVDLGVBQWMsRUFBRSxHQUEzQztJQUNwQyxNQUFNQyxjQUFjLENBQUNDLE9BQVM7UUFDMUJDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSDtJQUNsQztJQUVBLHFCQUNJLDhEQUFDbEI7UUFBUUcsTUFBTVU7OzBCQUNYLDhEQUFDVDs7a0NBQ0csOERBQUNDO3dCQUFTaUIsU0FBUyxJQUFNUixVQUFVLEtBQUs7Ozs7OztrQ0FDeEMsOERBQUNTO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNqQjs7a0NBQ0csOERBQUNiLG1EQUFLQTt3QkFBQytCLEtBQUtDLGlFQUFRLEtBQWtDLE9BQVhWLEtBQUtXLEtBQUs7d0JBQUtDLEtBQUk7Ozs7OztrQ0FDOUQsOERBQUNwQjs7MENBQ0csOERBQUNnQjswQ0FBSVIsS0FBS2EsUUFBUTs7Ozs7OzBDQUNsQiw4REFBQzlCLDRFQUFZQTtnQ0FBQytCLFFBQVFkLEtBQUtlLEdBQUc7Z0NBQUVDLFlBQVlmOzs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDUjs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNDOztrQ0FDRyw4REFBQ0M7d0JBQWdCWSxTQUFTLElBQU1MLFlBQVlGLEtBQUtpQixLQUFLOzswQ0FDbEQsOERBQUNqQywyREFBWUE7Z0NBQUNrQyxJQUFHO2dDQUFPQyxPQUFNOzs7Ozs7MENBQzlCLDhEQUFDakM7O2tEQUNHLDhEQUFDc0I7a0RBQUlSLEtBQUtpQixLQUFLOzs7Ozs7a0RBQ2YsOERBQUNHO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUN6Qjt3QkFBZ0JZLFNBQVMsSUFBTUwsWUFBWUYsS0FBS2EsUUFBUTs7MENBQ3JELDhEQUFDN0IsMkRBQVlBO2dDQUFDa0MsSUFBRztnQ0FBS0MsT0FBTTs7Ozs7OzBDQUM1Qiw4REFBQ2pDOztrREFDRyw4REFBQ3NCO2tEQUFJUixLQUFLYSxRQUFROzs7Ozs7a0RBQ2xCLDhEQUFDTztrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7TUFyQ3VCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyVXNlckluZm8vU2lkZWJhclVzZXJJbmZvLmpzeD8yZjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFVzZXJJc09ubGluZSBmcm9tICcuLi9pbnRlcmZhY2UvdXNlcklzT25saW5lL1VzZXJJc09ubGluZSdcclxuaW1wb3J0IEljb25TZWxlY3RvciBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnMnXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IHByb3BzLm9wZW4gPyAnYWxsJyA6ICdub25lJ307XHJcbmBcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjo6YWZ0ZXIsJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXMgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgSW5mb05hbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbmBcclxuXHJcbmNvbnN0IFNoYWRvdyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTUwcHggNTBweCAtMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiA4ODg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuYFxyXG5cclxuY29uc3QgVXNlckluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcm93LWdhcDogNnB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgcmlwcGxlRWZmZWN0ID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyVXNlckluZm8oeyBpc09wZW4sIHNldElzT3BlbiwgdXNlciwgdXNlckxhc3RBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgY29weUhhbmRsZXIgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHQpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlciBvcGVuPXtpc09wZW59PlxyXG4gICAgICAgICAgICA8QWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPlVzZXIgSW5mbzwvaDI+XHJcbiAgICAgICAgICAgIDwvQWN0aW9ucz5cclxuICAgICAgICAgICAgPEltYWdlcz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoYC4uLy4uL3NlcnZlci9pbWFnZXMvJHt1c2VyLmltYWdlfWApfSBhbHQ9J2ltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAgPEluZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VySXNPbmxpbmUgdXNlcklkPXt1c2VyLl9pZH0gbGFzdEFjdGl2ZT17dXNlckxhc3RBY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0luZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgPFNoYWRvdyAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlcz5cclxuICAgICAgICAgICAgPFVzZXJJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvV3JhcHBlciBvbkNsaWNrPXsoKSA9PiBjb3B5SGFuZGxlcih1c2VyLmVtYWlsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD0nbWFpbCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLmVtYWlsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ2xpY2s9eygpID0+IGNvcHlIYW5kbGVyKHVzZXIudXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPSdhdCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJVc2VySXNPbmxpbmUiLCJJY29uU2VsZWN0b3IiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQWN0aW9ucyIsIkNsb3NlQnRuIiwiSW1hZ2VzIiwiSW5mb05hbWUiLCJTaGFkb3ciLCJVc2VySW5mbyIsIlVzZXJJbmZvV3JhcHBlciIsInJpcHBsZUVmZmVjdCIsIlNpZGViYXJVc2VySW5mbyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJ1c2VyTGFzdEFjdGl2ZSIsImNvcHlIYW5kbGVyIiwidGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm9uQ2xpY2siLCJoMiIsInNyYyIsInJlcXVpcmUiLCJpbWFnZSIsImFsdCIsInVzZXJuYW1lIiwidXNlcklkIiwiX2lkIiwibGFzdEFjdGl2ZSIsImVtYWlsIiwiaWQiLCJjb2xvciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SidebarUserInfo/SidebarUserInfo.jsx\n"));

/***/ })

});