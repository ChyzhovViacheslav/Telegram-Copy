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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SidebarUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interface/userIsOnline/UserIsOnline */ \"./components/interface/userIsOnline/UserIsOnline.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    background-color: var(--surface-color);\\n    width: 470px;\\n    height: 100%;\\n    flex-shrink: 0;\\n    pointer-events: \",\n        \";\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    padding: 8px 12px;\\n    h2{\\n        margin-left: 22px;\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    width: 44px;\\n    height: 44px;\\n    position: relative;\\n    cursor: pointer;\\n    &::after,&::before{\\n        content: '';\\n        position: absolute;\\n        width: 50%;\\n        height: 2px;\\n        background-color: #fff;\\n        border-radius: 16px;\\n        top: 50%;\\n        left: 50%;\\n    }\\n    &::after{\\n        transform: translate(-50%, -50%) rotate(45deg);\\n    }\\n    &::before{\\n        transform: translate(-50%, -50%) rotate(-45deg);\\n    }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    width: 100%;\\n    height: 470px;\\n    img{\\n        height: 100%;\\n        width: 100%;\\n    }\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    bottom: 15px;\\n    left: 25px;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    span{\\n        color: #fff;\\n        opacity: 0.7;\\n    }\\n    z-index: 999;\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: 100%;\\n    height: 100%;\\n    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);\\n    z-index: 888;\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 5px;\\n    padding: 10px;\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: relative;\\n    overflow: hidden;\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: auto;\\n    column-gap: 25px;\\n    padding: 10px;\\n    border-radius: 12px;\\n    cursor: pointer;\\n    svg{\\n        height: 30px;\\n        width: 30px;\\n    }\\n    div{\\n        display: flex;\\n        row-gap: 6px;\\n        flex-direction: column;\\n        align-items: flex-start;\\n        h2{\\n            font-weight: 400;\\n            font-size: 20px;\\n        }\\n        span{\\n            color: var(--gray-text-color);\\n            font-weight: 500;\\n        }\\n    }\\n    &:hover{\\n        background-color: var(--input-search-border-color);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n\\n\"\n    ]);\n    _templateObject8 = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\nconst Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject(), (props)=>props.open ? \"all\" : \"none\");\n_c = Wrapper;\nconst Actions = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject1());\n_c1 = Actions;\nconst CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2());\n_c2 = CloseBtn;\nconst Images = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject3());\n_c3 = Images;\nconst InfoName = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject4());\n_c4 = InfoName;\nconst Shadow = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject5());\n_c5 = Shadow;\nconst UserInfo = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject6());\n_c6 = UserInfo;\nconst UserInfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject7());\n_c7 = UserInfoWrapper;\nconst Ripple = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject8());\nfunction SidebarUserInfo(param) {\n    let { isOpen , setIsOpen , user , userLastActive  } = param;\n    const copyHandler = (event, text)=>{\n        navigator.clipboard.writeText(text);\n        const addDiv = document.createElement(\"div\"), mValue = Math.max(event.clientWidth, event.clientHight), rect = event.getBoundingClientRect(), sDiv = addDiv.style, px = \"px\";\n        sDiv.width = sDiv.height = mValue + px;\n        sDiv;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Wrapper, {\n        open: isOpen,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Actions, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CloseBtn, {\n                        onClick: ()=>setIsOpen(false)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 146,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"User Info\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 147,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 145,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Images, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: __webpack_require__(\"./server/images sync recursive ^\\\\.\\\\/.*$\")(\"./\".concat(user.image)),\n                        alt: \"image\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 150,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(InfoName, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: user.username\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 152,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_userIsOnline_UserIsOnline__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                userId: user._id,\n                                lastActive: userLastActive\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 153,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 151,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Shadow, {}, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 155,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 149,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfo, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.email),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"mail\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 159,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.email\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 161,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Email\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 162,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 160,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 158,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserInfoWrapper, {\n                        onClick: ()=>copyHandler(user.username),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: \"at\",\n                                color: \"#9e9e9e\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 166,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                        children: user.username\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 168,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                        lineNumber: 169,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                                lineNumber: 167,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                        lineNumber: 165,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n                lineNumber: 157,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\SidebarUserInfo\\\\SidebarUserInfo.jsx\",\n        lineNumber: 144,\n        columnNumber: 9\n    }, this);\n}\n_c8 = SidebarUserInfo;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c1, \"Actions\");\n$RefreshReg$(_c2, \"CloseBtn\");\n$RefreshReg$(_c3, \"Images\");\n$RefreshReg$(_c4, \"InfoName\");\n$RefreshReg$(_c5, \"Shadow\");\n$RefreshReg$(_c6, \"UserInfo\");\n$RefreshReg$(_c7, \"UserInfoWrapper\");\n$RefreshReg$(_c8, \"SidebarUserInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJVc2VySW5mby9TaWRlYmFyVXNlckluZm8uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQ1M7QUFDYztBQUNZO0FBQ2Q7QUFFbkQsTUFBTU8sVUFBVUosNkRBQVUsb0JBT0pNLENBQUFBLFFBQVNBLE1BQU1DLElBQUksR0FBRyxRQUFRLE1BQU07S0FQcERIO0FBVU4sTUFBTUksVUFBVVIsNkRBQVU7TUFBcEJRO0FBV04sTUFBTUMsV0FBV1QsNkRBQVU7TUFBckJTO0FBdUJOLE1BQU1DLFNBQVNWLDZEQUFVO01BQW5CVTtBQVVOLE1BQU1DLFdBQVdYLDZEQUFVO01BQXJCVztBQWNOLE1BQU1DLFNBQVNaLDZEQUFVO01BQW5CWTtBQVVOLE1BQU1DLFdBQVdiLDZEQUFVO01BQXJCYTtBQU9OLE1BQU1DLGtCQUFrQmQsNkRBQVU7TUFBNUJjO0FBa0NOLE1BQU1DLFNBQVNmLDZEQUFVO0FBSVYsU0FBU2dCLGdCQUFnQixLQUEyQyxFQUFFO1FBQTdDLEVBQUVDLE9BQU0sRUFBRUMsVUFBUyxFQUFFQyxLQUFJLEVBQUVDLGVBQWMsRUFBRSxHQUEzQztJQUNwQyxNQUFNQyxjQUFjLENBQUNDLE9BQU9DLE9BQVM7UUFDakNDLFVBQVVDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDSDtRQUU5QixNQUFNSSxTQUFTQyxTQUFTQyxhQUFhLENBQUMsUUFDaENDLFNBQVNDLEtBQUtDLEdBQUcsQ0FBQ1YsTUFBTVcsV0FBVyxFQUFFWCxNQUFNWSxXQUFXLEdBQ3REQyxPQUFPYixNQUFNYyxxQkFBcUIsSUFDbENDLE9BQU9WLE9BQU9XLEtBQUssRUFDbkJDLEtBQUs7UUFDWEYsS0FBS0csS0FBSyxHQUFHSCxLQUFLSSxNQUFNLEdBQUdYLFNBQVNTO1FBQ3BDRjtJQUNKO0lBRUEscUJBQ0ksOERBQUNqQztRQUFRRyxNQUFNVTs7MEJBQ1gsOERBQUNUOztrQ0FDRyw4REFBQ0M7d0JBQVNpQyxTQUFTLElBQU14QixVQUFVLEtBQUs7Ozs7OztrQ0FDeEMsOERBQUN5QjtrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUVSLDhEQUFDakM7O2tDQUNHLDhEQUFDYixtREFBS0E7d0JBQUMrQyxLQUFLQyxpRUFBUSxLQUFrQyxPQUFYMUIsS0FBSzJCLEtBQUs7d0JBQUtDLEtBQUk7Ozs7OztrQ0FDOUQsOERBQUNwQzs7MENBQ0csOERBQUNnQzswQ0FBSXhCLEtBQUs2QixRQUFROzs7Ozs7MENBQ2xCLDhEQUFDOUMsNEVBQVlBO2dDQUFDK0MsUUFBUTlCLEtBQUsrQixHQUFHO2dDQUFFQyxZQUFZL0I7Ozs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNSOzs7Ozs7Ozs7OzswQkFFTCw4REFBQ0M7O2tDQUNHLDhEQUFDQzt3QkFBZ0I0QixTQUFTLElBQU1yQixZQUFZRixLQUFLaUMsS0FBSzs7MENBQ2xELDhEQUFDakQsMkRBQVlBO2dDQUFDa0QsSUFBRztnQ0FBT0MsT0FBTTs7Ozs7OzBDQUM5Qiw4REFBQ2pEOztrREFDRyw4REFBQ3NDO2tEQUFJeEIsS0FBS2lDLEtBQUs7Ozs7OztrREFDZiw4REFBQ0c7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHZCw4REFBQ3pDO3dCQUFnQjRCLFNBQVMsSUFBTXJCLFlBQVlGLEtBQUs2QixRQUFROzswQ0FDckQsOERBQUM3QywyREFBWUE7Z0NBQUNrRCxJQUFHO2dDQUFLQyxPQUFNOzs7Ozs7MENBQzVCLDhEQUFDakQ7O2tEQUNHLDhEQUFDc0M7a0RBQUl4QixLQUFLNkIsUUFBUTs7Ozs7O2tEQUNsQiw4REFBQ087a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QixDQUFDO01BN0N1QnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhclVzZXJJbmZvL1NpZGViYXJVc2VySW5mby5qc3g/MmY5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCBVc2VySXNPbmxpbmUgZnJvbSAnLi4vaW50ZXJmYWNlL3VzZXJJc09ubGluZS9Vc2VySXNPbmxpbmUnXHJcbmltcG9ydCBJY29uU2VsZWN0b3IgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zJ1xyXG5cclxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xyXG4gICAgd2lkdGg6IDQ3MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiBwcm9wcy5vcGVuID8gJ2FsbCcgOiAnbm9uZSd9O1xyXG5gXHJcblxyXG5jb25zdCBBY3Rpb25zID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcclxuICAgIGgye1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBDbG9zZUJ0biA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmFmdGVyLCY6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgfVxyXG4gICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQ1ZGVnKTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgSW1hZ2VzID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NzBweDtcclxuICAgIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEluZm9OYW1lID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIGxlZnQ6IDI1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIHNwYW57XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgfVxyXG4gICAgei1pbmRleDogOTk5O1xyXG5gXHJcblxyXG5jb25zdCBTaGFkb3cgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC01MHB4IDUwcHggLTMwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgei1pbmRleDogODg4O1xyXG5gXHJcblxyXG5jb25zdCBVc2VySW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbmBcclxuXHJcbmNvbnN0IFVzZXJJbmZvV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGNvbHVtbi1nYXA6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHN2Z3tcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICByb3ctZ2FwOiA2cHg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheS10ZXh0LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlucHV0LXNlYXJjaC1ib3JkZXItY29sb3IpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBSaXBwbGUgPSBzdHlsZWQuZGl2YFxyXG5cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lkZWJhclVzZXJJbmZvKHsgaXNPcGVuLCBzZXRJc09wZW4sIHVzZXIsIHVzZXJMYXN0QWN0aXZlIH0pIHtcclxuICAgIGNvbnN0IGNvcHlIYW5kbGVyID0gKGV2ZW50LCB0ZXh0KSA9PiB7XHJcbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dClcclxuXHJcbiAgICAgICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICAgICAgICAgICAgbVZhbHVlID0gTWF0aC5tYXgoZXZlbnQuY2xpZW50V2lkdGgsIGV2ZW50LmNsaWVudEhpZ2h0KSxcclxuICAgICAgICAgICAgICByZWN0ID0gZXZlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICAgICAgICAgICAgc0RpdiA9IGFkZERpdi5zdHlsZSxcclxuICAgICAgICAgICAgICBweCA9ICdweCdcclxuICAgICAgICBzRGl2LndpZHRoID0gc0Rpdi5oZWlnaHQgPSBtVmFsdWUgKyBweDtcclxuICAgICAgICBzRGl2XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8V3JhcHBlciBvcGVuPXtpc09wZW59PlxyXG4gICAgICAgICAgICA8QWN0aW9ucz5cclxuICAgICAgICAgICAgICAgIDxDbG9zZUJ0biBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgPGgyPlVzZXIgSW5mbzwvaDI+XHJcbiAgICAgICAgICAgIDwvQWN0aW9ucz5cclxuICAgICAgICAgICAgPEltYWdlcz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3JlcXVpcmUoYC4uLy4uL3NlcnZlci9pbWFnZXMvJHt1c2VyLmltYWdlfWApfSBhbHQ9J2ltYWdlJyAvPlxyXG4gICAgICAgICAgICAgICAgPEluZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57dXNlci51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VySXNPbmxpbmUgdXNlcklkPXt1c2VyLl9pZH0gbGFzdEFjdGl2ZT17dXNlckxhc3RBY3RpdmV9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0luZm9OYW1lPlxyXG4gICAgICAgICAgICAgICAgPFNoYWRvdyAvPlxyXG4gICAgICAgICAgICA8L0ltYWdlcz5cclxuICAgICAgICAgICAgPFVzZXJJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvV3JhcHBlciBvbkNsaWNrPXsoKSA9PiBjb3B5SGFuZGxlcih1c2VyLmVtYWlsKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD0nbWFpbCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLmVtYWlsfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkVtYWlsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICA8VXNlckluZm9XcmFwcGVyIG9uQ2xpY2s9eygpID0+IGNvcHlIYW5kbGVyKHVzZXIudXNlcm5hbWUpfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPSdhdCcgY29sb3I9JyM5ZTllOWUnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnt1c2VyLnVzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlVzZXJuYW1lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Vc2VySW5mb1dyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvVXNlckluZm8+XHJcbiAgICAgICAgPC9XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJVc2VySXNPbmxpbmUiLCJJY29uU2VsZWN0b3IiLCJXcmFwcGVyIiwiZGl2IiwicHJvcHMiLCJvcGVuIiwiQWN0aW9ucyIsIkNsb3NlQnRuIiwiSW1hZ2VzIiwiSW5mb05hbWUiLCJTaGFkb3ciLCJVc2VySW5mbyIsIlVzZXJJbmZvV3JhcHBlciIsIlJpcHBsZSIsIlNpZGViYXJVc2VySW5mbyIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJ1c2VyTGFzdEFjdGl2ZSIsImNvcHlIYW5kbGVyIiwiZXZlbnQiLCJ0ZXh0IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYWRkRGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibVZhbHVlIiwiTWF0aCIsIm1heCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGlnaHQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic0RpdiIsInN0eWxlIiwicHgiLCJ3aWR0aCIsImhlaWdodCIsIm9uQ2xpY2siLCJoMiIsInNyYyIsInJlcXVpcmUiLCJpbWFnZSIsImFsdCIsInVzZXJuYW1lIiwidXNlcklkIiwiX2lkIiwibGFzdEFjdGl2ZSIsImVtYWlsIiwiaWQiLCJjb2xvciIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SidebarUserInfo/SidebarUserInfo.jsx\n"));

/***/ })

});