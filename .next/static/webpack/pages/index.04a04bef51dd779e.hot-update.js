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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidebarUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/userIsOnline/UserIsOnline */ \"./components/interface/userIsOnline/UserIsOnline.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--surface-color);\\n    width: 470px;\\n    height: 100%;\\n    flex-shrink: 0;\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    padding: 8px 12px;\\n    h2{\\n        margin-left: 22px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 44px;\\n    height: 44px;\\n    position: relative;\\n    cursor: pointer;\\n    &::after,&::before{\\n        content: '';\\n        position: absolute;\\n        width: 50%;\\n        height: 2px;\\n        background-color: #fff;\\n        border-radius: 16px;\\n        top: 50%;\\n        left: 50%;\\n    }\\n    &::after{\\n        transform: translate(-50%, -50%) rotate(45deg);\\n    }\\n    &::before{\\n        transform: translate(-50%, -50%) rotate(-45deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 470px;\\n    img{\\n        height: 100%;\\n        width: 100%;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: 15px;\\n    left: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    span{\\n        color: #fff;\\n        opacity: 0.7;\\n    }\\n    z-index: 999;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);\\n    z-index: 888;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    padding: 10px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: auto;\\n    column-gap: 25px;\\n    padding: 10px;\\n    border-radius: 12px;\\n    cursor: pointer;\\n    svg{\\n        height: 30px;\\n        width: 30px;\\n    }\\n    div{\\n        display: flex;\\n        row-gap: 6px;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        h2{\\n            font-weight: 400;\\n            font-size: 20px;\\n        }\\n        span{\\n            color: var(--gray-text-color);\\n            font-weight: 500;\\n        }\\n    }\\n    &:hover{\\n        background-color: var(--input-search-border-color);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    0% {\\n        width: 0px;\\n        height: 0px;\\n        opacity: 0.5;\\n    }\\n    100% {\\n        width: 200px;\\n        height: 200px;\\n        opacity: 0;\\n    }\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject9() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    border-radius: 50%;\\n    transform: translate(-50%, -50%);\\n    pointer-events: none;\\n    animation: \",\n        \" 1s linear;\\n\"\n    ]);\n    _templateObject9 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.open ? \"all\" : \"none\");\n_c = Wrapper;\nconst Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Actions;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = CloseBtn;\nconst Images = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = Images;\nconst InfoName = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = InfoName;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\n_c5 = Shadow;\nconst UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = UserInfo;\nconst UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\n_c7 = UserInfoWrapper;\nconst rippleEffect = (0,styled_components__WEBPACK_IMPORTED_MODULE_6__.keyframes)(_templateObject8());\nconst Ripple = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject9(), rippleEffect);\nfunction SidebarUserInfo(param) {\n    let { isOpen , setIsOpen , user , userLastActive  } = param;\n    _s();\n    const [showRipple, setShowRipple] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const copyHandler = (text)=>{\n        navigator.clipboard.writeText(text);\n        setShowRipple(true);\n        set;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        open: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Actions, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseBtn, {\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 156,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 157,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 155,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Images, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(user.image)),\n                        alt: \"image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InfoName, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 162,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userId: user._id,\n                                lastActive: userLastActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 163,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 161,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 159,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.email),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"mail\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 169,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 171,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 172,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 170,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 168,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.username),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"at\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 176,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 178,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 179,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 177,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 175,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 167,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n        lineNumber: 154,\n        columnNumber: 9\n    }, this);\n}\n_s(SidebarUserInfo, \"u8Y5iq3e1posGBQMSydmnFlRxC4=\");\n_c8 = SidebarUserInfo;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Actions\");\n$RefreshReg$(_c2, \"CloseBtn\");\n$RefreshReg$(_c3, \"Images\");\n$RefreshReg$(_c4, \"InfoName\");\n$RefreshReg$(_c5, \"Shadow\");\n$RefreshReg$(_c6, \"UserInfo\");\n$RefreshReg$(_c7, \"UserInfoWrapper\");\n$RefreshReg$(_c8, \"SidebarUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDUztBQUNjO0FBQ1k7QUFDZDtBQUVuRCxNQUFNTyxVQUFVSiw2REFBVSxvQkFPSk0sQ0FBQUEsUUFBU0EsTUFBTUMsSUFBSSxHQUFHLFFBQVEsTUFBTTtLQVBwREg7QUFVTixNQUFNSSxVQUFVUiw2REFBVTtNQUFwQlE7QUFXTixNQUFNQyxXQUFXVCw2REFBVTtNQUFyQlM7QUF1Qk4sTUFBTUMsU0FBU1YsNkRBQVU7TUFBbkJVO0FBVU4sTUFBTUMsV0FBV1gsNkRBQVU7TUFBckJXO0FBY04sTUFBTUMsU0FBU1osNkRBQVU7TUFBbkJZO0FBVU4sTUFBTUMsV0FBV2IsNkRBQVU7TUFBckJhO0FBT04sTUFBTUMsa0JBQWtCZCw2REFBVTtNQUE1QmM7QUFnQ04sTUFBTUMsZUFBZWQsNERBQVNBO0FBWTlCLE1BQU1lLFNBQVNoQiw2REFBVSxxQkFLUmU7QUFHRixTQUFTRSxnQkFBZ0IsS0FBMkMsRUFBRTtRQUE3QyxFQUFFQyxPQUFNLEVBQUVDLFVBQVMsRUFBRUMsS0FBSSxFQUFFQyxlQUFjLEVBQUUsR0FBM0M7O0lBQ3BDLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHeEIsK0NBQVFBLENBQUMsS0FBSztJQUVsRCxNQUFNeUIsY0FBYyxDQUFDQyxPQUFTO1FBQzFCQyxVQUFVQyxTQUFTLENBQUNDLFNBQVMsQ0FBQ0g7UUFDOUJGLGNBQWMsSUFBSTtRQUNsQk07SUFDSjtJQUVBLHFCQUNJLDhEQUFDekI7UUFBUUcsTUFBTVc7OzBCQUNYLDhEQUFDVjs7a0NBQ0csOERBQUNDO3dCQUFTcUIsU0FBUyxJQUFNWCxVQUFVLEtBQUs7Ozs7OztrQ0FDeEMsOERBQUNZO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRVIsOERBQUNyQjs7a0NBQ0csOERBQUNiLG1EQUFLQTt3QkFBQ21DLEtBQUtDLGlFQUFRLEtBQWtDLE9BQVhiLEtBQUtjLEtBQUs7d0JBQUtDLEtBQUk7Ozs7OztrQ0FDOUQsOERBQUN4Qjs7MENBQ0csOERBQUNvQjswQ0FBSVgsS0FBS2dCLFFBQVE7Ozs7OzswQ0FDbEIsOERBQUNsQyw0RUFBWUE7Z0NBQUNtQyxRQUFRakIsS0FBS2tCLEdBQUc7Z0NBQUVDLFlBQVlsQjs7Ozs7Ozs7Ozs7O2tDQUVoRCw4REFBQ1Q7Ozs7Ozs7Ozs7OzBCQUVMLDhEQUFDQzs7a0NBQ0csOERBQUNDO3dCQUFnQmdCLFNBQVMsSUFBTU4sWUFBWUosS0FBS29CLEtBQUs7OzBDQUNsRCw4REFBQ3JDLDJEQUFZQTtnQ0FBQ3NDLElBQUc7Z0NBQU9DLE9BQU07Ozs7OzswQ0FDOUIsOERBQUNyQzs7a0RBQ0csOERBQUMwQjtrREFBSVgsS0FBS29CLEtBQUs7Ozs7OztrREFDZiw4REFBQ0c7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQzdCO3dCQUFnQmdCLFNBQVMsSUFBTU4sWUFBWUosS0FBS2dCLFFBQVE7OzBDQUNyRCw4REFBQ2pDLDJEQUFZQTtnQ0FBQ3NDLElBQUc7Z0NBQUtDLE9BQU07Ozs7OzswQ0FDNUIsOERBQUNyQzs7a0RBQ0csOERBQUMwQjtrREFBSVgsS0FBS2dCLFFBQVE7Ozs7OztrREFDbEIsOERBQUNPO2tEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUIsQ0FBQztHQXpDdUIxQjtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4PzJmOWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkLCB7IGtleWZyYW1lcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgVXNlcklzT25saW5lIGZyb20gJy4uL2ludGVyZmFjZS91c2VySXNPbmxpbmUvVXNlcklzT25saW5lJ1xyXG5pbXBvcnQgSWNvblNlbGVjdG9yIGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9pY29ucydcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcclxuICAgIHdpZHRoOiA0NzBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gcHJvcHMub3BlbiA/ICdhbGwnIDogJ25vbmUnfTtcclxuYFxyXG5cclxuY29uc3QgQWN0aW9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBoMntcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQ2xvc2VCdG4gPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDQ0cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOjphZnRlciwmOjpiZWZvcmV7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgIH1cclxuICAgICY6OmFmdGVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC00NWRlZyk7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEltYWdlcyA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDcwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBJbmZvTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgICBsZWZ0OiAyNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIHotaW5kZXg6IDk5OTtcclxuYFxyXG5cclxuY29uc3QgU2hhZG93ID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtNTBweCA1MHB4IC0zMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHotaW5kZXg6IDg4ODtcclxuYFxyXG5cclxuY29uc3QgVXNlckluZm8gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG5gXHJcblxyXG5jb25zdCBVc2VySW5mb1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHN2Z3tcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICByb3ctZ2FwOiA2cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LXNlYXJjaC1ib3JkZXItY29sb3IpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCByaXBwbGVFZmZlY3QgPSBrZXlmcmFtZXNgXHJcbiAgICAwJSB7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5gXHJcbmNvbnN0IFJpcHBsZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiAke3JpcHBsZUVmZmVjdH0gMXMgbGluZWFyO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyVXNlckluZm8oeyBpc09wZW4sIHNldElzT3BlbiwgdXNlciwgdXNlckxhc3RBY3RpdmUgfSkge1xyXG4gICAgY29uc3QgW3Nob3dSaXBwbGUsIHNldFNob3dSaXBwbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb3B5SGFuZGxlciA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcclxuICAgICAgICBzZXRTaG93UmlwcGxlKHRydWUpXHJcbiAgICAgICAgc2V0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlciBvcGVuPXtpc09wZW59PlxyXG4gICAgICAgICAgICA8QWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPlVzZXIgSW5mbzwvaDI+XHJcbiAgICAgICAgICAgIDwvQWN0aW9ucz5cclxuICAgICAgICAgICAgPEltYWdlcz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoYC4uLy4uL3NlcnZlci9pbWFnZXMvJHt1c2VyLmltYWdlfWApfSBhbHQ9J2ltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAgPEluZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VySXNPbmxpbmUgdXNlcklkPXt1c2VyLl9pZH0gbGFzdEFjdGl2ZT17dXNlckxhc3RBY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0luZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgPFNoYWRvdyAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlcz5cclxuICAgICAgICAgICAgPFVzZXJJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvV3JhcHBlciBvbkNsaWNrPXsoKSA9PiBjb3B5SGFuZGxlcih1c2VyLmVtYWlsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD0nbWFpbCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLmVtYWlsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ2xpY2s9eygpID0+IGNvcHlIYW5kbGVyKHVzZXIudXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPSdhdCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJVc2VySXNPbmxpbmUiLCJJY29uU2VsZWN0b3IiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQWN0aW9ucyIsIkNsb3NlQnRuIiwiSW1hZ2VzIiwiSW5mb05hbWUiLCJTaGFkb3ciLCJVc2VySW5mbyIsIlVzZXJJbmZvV3JhcHBlciIsInJpcHBsZUVmZmVjdCIsIlJpcHBsZSIsIlNpZGViYXJVc2VySW5mbyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJ1c2VyTGFzdEFjdGl2ZSIsInNob3dSaXBwbGUiLCJzZXRTaG93UmlwcGxlIiwiY29weUhhbmRsZXIiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwic2V0Iiwib25DbGljayIsImgyIiwic3JjIiwicmVxdWlyZSIsImltYWdlIiwiYWx0IiwidXNlcm5hbWUiLCJ1c2VySWQiLCJfaWQiLCJsYXN0QWN0aXZlIiwiZW1haWwiLCJpZCIsImNvbG9yIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SidebarUserInfo/SidebarUserInfo.jsx\n"));

/***/ })

});