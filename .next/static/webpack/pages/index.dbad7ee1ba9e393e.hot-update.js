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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidebarUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/userIsOnline/UserIsOnline */ \"./components/interface/userIsOnline/UserIsOnline.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--surface-color);\\n    width: 470px;\\n    height: 100%;\\n    flex-shrink: 0;\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    padding: 8px 12px;\\n    h2{\\n        margin-left: 22px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 44px;\\n    height: 44px;\\n    position: relative;\\n    cursor: pointer;\\n    &::after,&::before{\\n        content: '';\\n        position: absolute;\\n        width: 50%;\\n        height: 2px;\\n        background-color: #fff;\\n        border-radius: 16px;\\n        top: 50%;\\n        left: 50%;\\n    }\\n    &::after{\\n        transform: translate(-50%, -50%) rotate(45deg);\\n    }\\n    &::before{\\n        transform: translate(-50%, -50%) rotate(-45deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 470px;\\n    img{\\n        height: 100%;\\n        width: 100%;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: 15px;\\n    left: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    span{\\n        color: #fff;\\n        opacity: 0.7;\\n    }\\n    z-index: 999;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);\\n    z-index: 888;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    padding: 10px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: auto;\\n    column-gap: 25px;\\n    padding: 10px;\\n    border-radius: 12px;\\n    cursor: pointer;\\n    svg{\\n        height: 30px;\\n        width: 30px;\\n    }\\n    div{\\n        display: flex;\\n        row-gap: 6px;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        h2{\\n            font-weight: 400;\\n            font-size: 20px;\\n        }\\n        span{\\n            color: var(--gray-text-color);\\n            font-weight: 500;\\n        }\\n    }\\n    &:hover{\\n        background-color: var(--input-search-border-color);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.open ? \"all\" : \"none\");\n_c = Wrapper;\nconst Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Actions;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = CloseBtn;\nconst Images = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = Images;\nconst InfoName = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = InfoName;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\n_c5 = Shadow;\nconst UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = UserInfo;\nconst UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\n_c7 = UserInfoWrapper;\nfunction SidebarUserInfo(param) {\n    let { isOpen , setIsOpen , user , userLastActive  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        open: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Actions, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseBtn, {\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 128,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 127,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Images, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(user.image)),\n                        alt: \"image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InfoName, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userId: user._id,\n                                lastActive: userLastActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 133,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 137,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 131,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onCopy: (e)=>{\n                            e.clipboardData.setData(\"text/plain\", \"\".concat(user.email));\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"mail\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 143,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 145,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 144,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 140,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"at\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 150,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 152,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 153,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 151,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 149,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 139,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n        lineNumber: 126,\n        columnNumber: 9\n    }, this);\n}\n_c8 = SidebarUserInfo;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Actions\");\n$RefreshReg$(_c2, \"CloseBtn\");\n$RefreshReg$(_c3, \"Images\");\n$RefreshReg$(_c4, \"InfoName\");\n$RefreshReg$(_c5, \"Shadow\");\n$RefreshReg$(_c6, \"UserInfo\");\n$RefreshReg$(_c7, \"UserInfoWrapper\");\n$RefreshReg$(_c8, \"SidebarUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDRDtBQUMyQjtBQUNkO0FBRW5ELE1BQU1NLFVBQVVILDZEQUFVLG9CQU9KSyxDQUFBQSxRQUFTQSxNQUFNQyxJQUFJLEdBQUcsUUFBUSxNQUFNO0tBUHBESDtBQVVOLE1BQU1JLFVBQVVQLDZEQUFVO01BQXBCTztBQVdOLE1BQU1DLFdBQVdSLDZEQUFVO01BQXJCUTtBQXVCTixNQUFNQyxTQUFTVCw2REFBVTtNQUFuQlM7QUFVTixNQUFNQyxXQUFXViw2REFBVTtNQUFyQlU7QUFjTixNQUFNQyxTQUFTWCw2REFBVTtNQUFuQlc7QUFVTixNQUFNQyxXQUFXWiw2REFBVTtNQUFyQlk7QUFPTixNQUFNQyxrQkFBa0JiLDZEQUFVO01BQTVCYTtBQWdDUyxTQUFTQyxnQkFBZ0IsS0FBMkMsRUFBRTtRQUE3QyxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsS0FBSSxFQUFFQyxlQUFjLEVBQUUsR0FBM0M7SUFDcEMscUJBQ0ksOERBQUNmO1FBQVFHLE1BQU1TOzswQkFDWCw4REFBQ1I7O2tDQUNHLDhEQUFDQzt3QkFBU1csU0FBUyxJQUFNSCxVQUFVLEtBQUs7Ozs7OztrQ0FDeEMsOERBQUNJO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNYOztrQ0FDRyw4REFBQ1osbURBQUtBO3dCQUFDd0IsS0FBS0MsaUVBQVEsS0FBa0MsT0FBWEwsS0FBS00sS0FBSzt3QkFBS0MsS0FBSTs7Ozs7O2tDQUM5RCw4REFBQ2Q7OzBDQUNHLDhEQUFDVTswQ0FBSUgsS0FBS1EsUUFBUTs7Ozs7OzBDQUNsQiw4REFBQ3hCLDRFQUFZQTtnQ0FBQ3lCLFFBQVFULEtBQUtVLEdBQUc7Z0NBQUVDLFlBQVlWOzs7Ozs7Ozs7Ozs7a0NBRWhELDhEQUFDUDs7Ozs7Ozs7Ozs7MEJBRUwsOERBQUNDOztrQ0FDRyw4REFBQ0M7d0JBQWdCZ0IsUUFBUSxDQUFDQyxJQUFNOzRCQUM1QkEsRUFBRUMsYUFBYSxDQUFDQyxPQUFPLENBQUMsY0FBYyxHQUFjLE9BQVhmLEtBQUtnQixLQUFLO3dCQUN2RDs7MENBQ0ksOERBQUMvQiwyREFBWUE7Z0NBQUNnQyxJQUFHO2dDQUFPQyxPQUFNOzs7Ozs7MENBQzlCLDhEQUFDL0I7O2tEQUNHLDhEQUFDZ0I7a0RBQUlILEtBQUtnQixLQUFLOzs7Ozs7a0RBQ2YsOERBQUNHO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUN2Qjs7MENBQ0csOERBQUNYLDJEQUFZQTtnQ0FBQ2dDLElBQUc7Z0NBQUtDLE9BQU07Ozs7OzswQ0FDNUIsOERBQUMvQjs7a0RBQ0csOERBQUNnQjtrREFBSUgsS0FBS1EsUUFBUTs7Ozs7O2tEQUNsQiw4REFBQ1c7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QixDQUFDO01BbkN1QnRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhclVzZXJJbmZvL1NpZGViYXJVc2VySW5mby5qc3g/MmY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBVc2VySXNPbmxpbmUgZnJvbSAnLi4vaW50ZXJmYWNlL3VzZXJJc09ubGluZS9Vc2VySXNPbmxpbmUnXHJcbmltcG9ydCBJY29uU2VsZWN0b3IgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zJ1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xyXG4gICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiBwcm9wcy5vcGVuID8gJ2FsbCcgOiAnbm9uZSd9O1xyXG5gXHJcblxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDbG9zZUJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmFmdGVyLCY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NzBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEluZm9OYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgei1pbmRleDogOTk5O1xyXG5gXHJcblxyXG5jb25zdCBTaGFkb3cgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC01MHB4IDUwcHggLTMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogODg4O1xyXG5gXHJcblxyXG5jb25zdCBVc2VySW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sdW1uLWdhcDogMjVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgc3Zne1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICB3aWR0aDogMzBweDtcclxuICAgIH1cclxuICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHJvdy1nYXA6IDZweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5wdXQtc2VhcmNoLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZGViYXJVc2VySW5mbyh7IGlzT3Blbiwgc2V0SXNPcGVuLCB1c2VyLCB1c2VyTGFzdEFjdGl2ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyIG9wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+VXNlciBJbmZvPC9oMj5cclxuICAgICAgICAgICAgPC9BY3Rpb25zPlxyXG4gICAgICAgICAgICA8SW1hZ2VzPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZShgLi4vLi4vc2VydmVyL2ltYWdlcy8ke3VzZXIuaW1hZ2V9YCl9IGFsdD0naW1hZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5mb05hbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJc09ubGluZSB1c2VySWQ9e3VzZXIuX2lkfSBsYXN0QWN0aXZlPXt1c2VyTGFzdEFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSW5mb05hbWU+XHJcbiAgICAgICAgICAgICAgICA8U2hhZG93IC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VzPlxyXG4gICAgICAgICAgICA8VXNlckluZm8+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ29weT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLmNsaXBib2FyZERhdGEuc2V0RGF0YSgndGV4dC9wbGFpbicsIGAke3VzZXIuZW1haWx9YClcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uU2VsZWN0b3IgaWQ9J21haWwnIGNvbG9yPScjOWU5ZTllJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci5lbWFpbH08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5FbWFpbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVXNlckluZm9XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPSdhdCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJVc2VySXNPbmxpbmUiLCJJY29uU2VsZWN0b3IiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQWN0aW9ucyIsIkNsb3NlQnRuIiwiSW1hZ2VzIiwiSW5mb05hbWUiLCJTaGFkb3ciLCJVc2VySW5mbyIsIlVzZXJJbmZvV3JhcHBlciIsIlNpZGViYXJVc2VySW5mbyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJ1c2VyTGFzdEFjdGl2ZSIsIm9uQ2xpY2siLCJoMiIsInNyYyIsInJlcXVpcmUiLCJpbWFnZSIsImFsdCIsInVzZXJuYW1lIiwidXNlcklkIiwiX2lkIiwibGFzdEFjdGl2ZSIsIm9uQ29weSIsImUiLCJjbGlwYm9hcmREYXRhIiwic2V0RGF0YSIsImVtYWlsIiwiaWQiLCJjb2xvciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SidebarUserInfo/SidebarUserInfo.jsx\n"));

/***/ })

});