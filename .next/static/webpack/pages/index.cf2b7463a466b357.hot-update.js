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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidebarUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/userIsOnline/UserIsOnline */ \"./components/interface/userIsOnline/UserIsOnline.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--surface-color);\\n    width: 470px;\\n    height: 100%;\\n    flex-shrink: 0;\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    padding: 8px 12px;\\n    h2{\\n        margin-left: 22px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 44px;\\n    height: 44px;\\n    position: relative;\\n    cursor: pointer;\\n    &::after,&::before{\\n        content: '';\\n        position: absolute;\\n        width: 50%;\\n        height: 2px;\\n        background-color: #fff;\\n        border-radius: 16px;\\n        top: 50%;\\n        left: 50%;\\n    }\\n    &::after{\\n        transform: translate(-50%, -50%) rotate(45deg);\\n    }\\n    &::before{\\n        transform: translate(-50%, -50%) rotate(-45deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 470px;\\n    img{\\n        height: 100%;\\n        width: 100%;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: 15px;\\n    left: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    span{\\n        color: #fff;\\n        opacity: 0.7;\\n    }\\n    z-index: 999;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);\\n    z-index: 888;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    padding: 10px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: auto;\\n    column-gap: 25px;\\n    padding: 10px;\\n    border-radius: 12px;\\n    cursor: pointer;\\n    svg{\\n        height: 30px;\\n        width: 30px;\\n    }\\n    div{\\n        display: flex;\\n        row-gap: 6px;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        h2{\\n            font-weight: 400;\\n            font-size: 20px;\\n        }\\n        span{\\n            color: var(--gray-text-color);\\n            font-weight: 500;\\n        }\\n    }\\n    &:hover{\\n        background-color: var(--input-search-border-color);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    0% {\\n        width: 0px;\\n        height: 0px;\\n        opacity: 0.5;\\n    }\\n    100% {\\n        width: 200px;\\n        height: 200px;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    background-color: red;\\n    border-radius: 50%;\\n    transform: translate(-50%, -50%);\\n    pointer-events: none;\\n    animation: \",\n        \" 1s linear;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.open ? \"all\" : \"none\");\n_c = Wrapper;\nconst Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Actions;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = CloseBtn;\nconst Images = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = Images;\nconst InfoName = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = InfoName;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\n_c5 = Shadow;\nconst UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = UserInfo;\nconst UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\n_c7 = UserInfoWrapper;\nconst rippleEffect = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes)(_templateObject8());\nconst Ripple = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject9(), rippleEffect);\n_c8 = Ripple;\nfunction SidebarUserInfo(param) {\n    let { isOpen , setIsOpen , user , userLastActive  } = param;\n    _s();\n    const [showRipple, setShowRipple] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const copyHandler = (text)=>{\n        navigator.clipboard.writeText(text);\n        setShowRipple(true);\n        setTimeout(()=>setShowRipple(false), 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        open: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Actions, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseBtn, {\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 159,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Images, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(user.image)),\n                        alt: \"image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InfoName, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userId: user._id,\n                                lastActive: userLastActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 167,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 169,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 163,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.email),\n                        children: [\n                            showRipple && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Ripple, {}, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 173,\n                                columnNumber: 36\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"mail\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 174,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 176,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 177,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 175,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 172,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.username),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"at\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 181,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 183,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 184,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 182,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 180,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 171,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n        lineNumber: 158,\n        columnNumber: 9\n    }, this);\n}\n_s(SidebarUserInfo, \"u8Y5iq3e1posGBQMSydmnFlRxC4=\");\n_c9 = SidebarUserInfo;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Actions\");\n$RefreshReg$(_c2, \"CloseBtn\");\n$RefreshReg$(_c3, \"Images\");\n$RefreshReg$(_c4, \"InfoName\");\n$RefreshReg$(_c5, \"Shadow\");\n$RefreshReg$(_c6, \"UserInfo\");\n$RefreshReg$(_c7, \"UserInfoWrapper\");\n$RefreshReg$(_c8, \"Ripple\");\n$RefreshReg$(_c9, \"SidebarUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDUztBQUNjO0FBQ1k7QUFDZDtBQUVuRCxNQUFNTyxVQUFVSiw2REFBVSxvQkFPSk0sQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSSxHQUFHLFFBQVEsTUFBTTtLQVBwREg7QUFVTixNQUFNSSxVQUFVUiw2REFBVTtNQUFwQlE7QUFXTixNQUFNQyxXQUFXVCw2REFBVTtNQUFyQlM7QUF1Qk4sTUFBTUMsU0FBU1YsNkRBQVU7TUFBbkJVO0FBVU4sTUFBTUMsV0FBV1gsNkRBQVU7TUFBckJXO0FBY04sTUFBTUMsU0FBU1osNkRBQVU7TUFBbkJZO0FBVU4sTUFBTUMsV0FBV2IsNkRBQVU7TUFBckJhO0FBT04sTUFBTUMsa0JBQWtCZCw2REFBVTtNQUE1QmM7QUFpQ04sTUFBTUMsZUFBZWQsNERBQVNBO0FBWTlCLE1BQU1lLFNBQVNoQiw2REFBVSxxQkFRUmU7TUFSWEM7QUFXUyxTQUFTQyxnQkFBZ0IsS0FBMkMsRUFBRTtRQUE3QyxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsS0FBSSxFQUFFQyxlQUFjLEVBQUUsR0FBM0M7O0lBQ3BDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHeEIsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxNQUFNeUIsY0FBYyxDQUFDQyxPQUFTO1FBQzFCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7UUFDOUJGLGNBQWMsSUFBSTtRQUNsQk0sV0FBVyxJQUFNTixjQUFjLEtBQUssR0FBRztJQUMzQztJQUVBLHFCQUNJLDhEQUFDbkI7UUFBUUcsTUFBTVc7OzBCQUNYLDhEQUFDVjs7a0NBQ0csOERBQUNDO3dCQUFTcUIsU0FBUyxJQUFNWCxVQUFVLEtBQUs7Ozs7OztrQ0FDeEMsOERBQUNZO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNyQjs7a0NBQ0csOERBQUNiLG1EQUFLQTt3QkFBQ21DLEtBQUtDLGlFQUFRLEtBQWtDLE9BQVhiLEtBQUtjLEtBQUs7d0JBQUtDLEtBQUk7Ozs7OztrQ0FDOUQsOERBQUN4Qjs7MENBQ0csOERBQUNvQjswQ0FBSVgsS0FBS2dCLFFBQVE7Ozs7OzswQ0FDbEIsOERBQUNsQyw0RUFBWUE7Z0NBQUNtQyxRQUFRakIsS0FBS2tCLEdBQUc7Z0NBQUVDLFlBQVlsQjs7Ozs7Ozs7Ozs7O2tDQUVoRCw4REFBQ1Q7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDQzs7a0NBQ0csOERBQUNDO3dCQUFnQmdCLFNBQVMsSUFBTU4sWUFBWUosS0FBS29CLEtBQUs7OzRCQUNqRGxCLDRCQUFjLDhEQUFDTjs7Ozs7MENBQ2hCLDhEQUFDYiwyREFBWUE7Z0NBQUNzQyxJQUFHO2dDQUFPQyxPQUFNOzs7Ozs7MENBQzlCLDhEQUFDckM7O2tEQUNHLDhEQUFDMEI7a0RBQUlYLEtBQUtvQixLQUFLOzs7Ozs7a0RBQ2YsOERBQUNHO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR2QsOERBQUM3Qjt3QkFBZ0JnQixTQUFTLElBQU1OLFlBQVlKLEtBQUtnQixRQUFROzswQ0FDckQsOERBQUNqQywyREFBWUE7Z0NBQUNzQyxJQUFHO2dDQUFLQyxPQUFNOzs7Ozs7MENBQzVCLDhEQUFDckM7O2tEQUNHLDhEQUFDMEI7a0RBQUlYLEtBQUtnQixRQUFROzs7Ozs7a0RBQ2xCLDhEQUFDTztrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCLENBQUM7R0ExQ3VCMUI7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyVXNlckluZm8vU2lkZWJhclVzZXJJbmZvLmpzeD8yZjlkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IFVzZXJJc09ubGluZSBmcm9tICcuLi9pbnRlcmZhY2UvdXNlcklzT25saW5lL1VzZXJJc09ubGluZSdcclxuaW1wb3J0IEljb25TZWxlY3RvciBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnMnXHJcblxyXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IHByb3BzLm9wZW4gPyAnYWxsJyA6ICdub25lJ307XHJcbmBcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xyXG4gICAgaDJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENsb3NlQnRuID0gc3R5bGVkLmRpdmBcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgJjo6YWZ0ZXIsJjo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICB9XHJcbiAgICAmOjphZnRlcntcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbWFnZXMgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgaW1ne1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgSW5mb05hbWUgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAgc3BhbntcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbmBcclxuXHJcbmNvbnN0IFNoYWRvdyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTUwcHggNTBweCAtMzBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB6LWluZGV4OiA4ODg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJJbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuYFxyXG5cclxuY29uc3QgVXNlckluZm9XcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBzdmd7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcm93LWdhcDogNnB4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXktdGV4dC1jb2xvcik7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtYm9yZGVyLWNvbG9yKTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgcmlwcGxlRWZmZWN0ID0ga2V5ZnJhbWVzYFxyXG4gICAgMCUge1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuYFxyXG5jb25zdCBSaXBwbGUgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiAke3JpcHBsZUVmZmVjdH0gMXMgbGluZWFyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyVXNlckluZm8oeyBpc09wZW4sIHNldElzT3BlbiwgdXNlciwgdXNlckxhc3RBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgW3Nob3dSaXBwbGUsIHNldFNob3dSaXBwbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb3B5SGFuZGxlciA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcclxuICAgICAgICBzZXRTaG93UmlwcGxlKHRydWUpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93UmlwcGxlKGZhbHNlKSwgMTAwMClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxXcmFwcGVyIG9wZW49e2lzT3Blbn0+XHJcbiAgICAgICAgICAgIDxBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnRuIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbihmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDI+VXNlciBJbmZvPC9oMj5cclxuICAgICAgICAgICAgPC9BY3Rpb25zPlxyXG4gICAgICAgICAgICA8SW1hZ2VzPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17cmVxdWlyZShgLi4vLi4vc2VydmVyL2ltYWdlcy8ke3VzZXIuaW1hZ2V9YCl9IGFsdD0naW1hZ2UnIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5mb05hbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJJc09ubGluZSB1c2VySWQ9e3VzZXIuX2lkfSBsYXN0QWN0aXZlPXt1c2VyTGFzdEFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvSW5mb05hbWU+XHJcbiAgICAgICAgICAgICAgICA8U2hhZG93IC8+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VzPlxyXG4gICAgICAgICAgICA8VXNlckluZm8+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ2xpY2s9eygpID0+IGNvcHlIYW5kbGVyKHVzZXIuZW1haWwpfT5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd1JpcHBsZSAmJiA8UmlwcGxlLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD0nbWFpbCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLmVtYWlsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ2xpY2s9eygpID0+IGNvcHlIYW5kbGVyKHVzZXIudXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPSdhdCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJVc2VySXNPbmxpbmUiLCJJY29uU2VsZWN0b3IiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQWN0aW9ucyIsIkNsb3NlQnRuIiwiSW1hZ2VzIiwiSW5mb05hbWUiLCJTaGFkb3ciLCJVc2VySW5mbyIsIlVzZXJJbmZvV3JhcHBlciIsInJpcHBsZUVmZmVjdCIsIlJpcHBsZSIsIlNpZGViYXJVc2VySW5mbyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJ1c2VyTGFzdEFjdGl2ZSIsInNob3dSaXBwbGUiLCJzZXRTaG93UmlwcGxlIiwiY29weUhhbmRsZXIiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0VGltZW91dCIsIm9uQ2xpY2siLCJoMiIsInNyYyIsInJlcXVpcmUiLCJpbWFnZSIsImFsdCIsInVzZXJuYW1lIiwidXNlcklkIiwiX2lkIiwibGFzdEFjdGl2ZSIsImVtYWlsIiwiaWQiLCJjb2xvciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SidebarUserInfo/SidebarUserInfo.jsx\n"));

/***/ })

});