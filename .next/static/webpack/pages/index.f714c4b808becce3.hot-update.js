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

/***/ "./components/User/User.jsx":
/*!**********************************!*\
  !*** ./components/User/User.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _services_AuthUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/AuthUser */ \"./services/AuthUser.js\");\n/* harmony import */ var _services_RoomService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/RoomService */ \"./services/RoomService.js\");\n/* harmony import */ var _interface_logo_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../interface/logo/Logo */ \"./components/interface/logo/Logo.jsx\");\n/* harmony import */ var _store_reducers_roomSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/reducers/roomSlice */ \"./store/reducers/roomSlice.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    column-gap: 15px;\\n    align-items: center;\\n    padding: 10px 15px;\\n    cursor: pointer;\\n    background-color: \",\n        \" !important;\\n    &:hover{\\n      background-color: #a1a1a114;\\n    }\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n    width: 100%;\\n    height: 100%;\\n    h2{\\n      font-size: 16px;\\n      font-weight: 400;\\n    }\\n    p{\\n      color: \",\n        \";\\n    }\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst UserWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject(), (props)=>props.current ? \"var(--primary-color)\" : \"none\");\n_c = UserWrapper;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject1(), (props)=>props.current ? \"var(--primary-text-color)\" : \"var(--secondary-text-color)\");\n_c1 = Container;\nfunction User(param) {\n    let { roomId  } = param;\n    _s();\n    const { id: currentUserId  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    const { data: room , isLoading: roomIsLoading  } = _services_RoomService__WEBPACK_IMPORTED_MODULE_6__.roomService.useGetOneRoomQuery({\n        room: roomId\n    });\n    const { data: lastMessage , isLoading: messageIsLoading  } = _services_RoomService__WEBPACK_IMPORTED_MODULE_6__.roomService.useGetLastMessageRoomQuery({\n        room: roomId\n    });\n    const { data: user  } = _services_AuthUser__WEBPACK_IMPORTED_MODULE_5__.authUser.useGetOneUserQuery({\n        id: userId\n    }, {\n        skip: !userId\n    });\n    const { currentRoom  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)((state)=>state.roomSlice);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (room) {\n            setUserId(room.users.filter((id)=>id !== currentUserId)[0]);\n            dispatch((0,_store_reducers_roomSlice__WEBPACK_IMPORTED_MODULE_8__.changeCurrentUser)(room.users.filter((id)=>id !== currentUserId)[0]));\n        }\n    }, [\n        roomIsLoading\n    ]);\n    const openRoomHandler = ()=>{\n        dispatch((0,_store_reducers_roomSlice__WEBPACK_IMPORTED_MODULE_8__.changeCurrentRoom)(roomId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(UserWrapper, {\n        current: roomId === currentRoom,\n        onClick: openRoomHandler,\n        onContextMenu: (e)=>e.preventDefault(),\n        children: user && !messageIsLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_logo_Logo__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    image: user === null || user === void 0 ? void 0 : user.image\n                }, void 0, false, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                    current: roomId === currentRoom,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                            children: user === null || user === void 0 ? void 0 : user.username\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        lastMessage.message.length >= 65 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: [\n                                lastMessage.message.slice(0, 65),\n                                \"...\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: lastMessage.message\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n            children: \"Load...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n            lineNumber: 74,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\User\\\\User.jsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"HBLEge7pkt+gc9kIISjhYphaa0g=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _services_RoomService__WEBPACK_IMPORTED_MODULE_6__.roomService.useGetOneRoomQuery,\n        _services_RoomService__WEBPACK_IMPORTED_MODULE_6__.roomService.useGetLastMessageRoomQuery,\n        _services_AuthUser__WEBPACK_IMPORTED_MODULE_5__.authUser.useGetOneUserQuery,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c2 = User;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"UserWrapper\");\n$RefreshReg$(_c1, \"Container\");\n$RefreshReg$(_c2, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXIvVXNlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1o7QUFDNEI7QUFDekI7QUFDUztBQUNNO0FBQ2Y7QUFDNEM7QUFFckYsTUFBTVksY0FBY1QsNkRBQVUsb0JBTU5XLENBQUFBLFFBQVNBLE1BQU1DLE9BQU8sR0FBRyx5QkFBeUIsTUFBTTtLQU4xRUg7QUFZTixNQUFNSSxZQUFZYiw2REFBVSxxQkFXYlcsQ0FBQUEsUUFBU0EsTUFBTUMsT0FBTyxHQUFHLDhCQUE4Qiw2QkFBNkI7TUFYN0ZDO0FBZVMsU0FBU0MsS0FBSyxLQUFVLEVBQUU7UUFBWixFQUFFQyxPQUFNLEVBQUUsR0FBVjs7SUFDM0IsTUFBTSxFQUFFQyxJQUFJQyxjQUFhLEVBQUUsR0FBR2QsMERBQU9BO0lBQ3JDLE1BQU0sQ0FBQ2UsUUFBUUMsVUFBVSxHQUFHcEIsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNcUIsV0FBV25CLDREQUFjQTtJQUUvQixNQUFNLEVBQUVvQixNQUFNQyxLQUFJLEVBQUVDLFdBQVdDLGNBQWEsRUFBRSxHQUFHbkIsaUZBQThCLENBQUM7UUFBRWlCLE1BQU1QO0lBQU87SUFDL0YsTUFBTSxFQUFFTSxNQUFNSyxZQUFXLEVBQUVILFdBQVdJLGlCQUFnQixFQUFFLEdBQUd0Qix5RkFBc0MsQ0FBQztRQUFFaUIsTUFBTVA7SUFBTztJQUNqSCxNQUFNLEVBQUVNLE1BQU1RLEtBQUksRUFBRSxHQUFHekIsMkVBQTJCLENBQUM7UUFBRVksSUFBSUU7SUFBTyxHQUFHO1FBQUVhLE1BQU0sQ0FBQ2I7SUFBTztJQUNuRixNQUFNLEVBQUVjLFlBQVcsRUFBRSxHQUFHOUIsNERBQWNBLENBQUMrQixDQUFBQSxRQUFTQSxNQUFNQyxTQUFTO0lBRS9EcEMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUl3QixNQUFNO1lBQ1JILFVBQVVHLEtBQUthLEtBQUssQ0FBQ0MsTUFBTSxDQUFDcEIsQ0FBQUEsS0FBTUEsT0FBT0MsY0FBYyxDQUFDLEVBQUU7WUFDMURHLFNBQVNaLDRFQUFpQkEsQ0FBQ2MsS0FBS2EsS0FBSyxDQUFDQyxNQUFNLENBQUNwQixDQUFBQSxLQUFNQSxPQUFPQyxjQUFjLENBQUMsRUFBRTtRQUM3RSxDQUFDO0lBQ0gsR0FBRztRQUFDTztLQUFjO0lBRWxCLE1BQU1hLGtCQUFrQixJQUFNO1FBQzVCakIsU0FBU2IsNEVBQWlCQSxDQUFDUTtJQUM3QjtJQUVBLHFCQUNFLDhEQUFDTjtRQUNDRyxTQUFTRyxXQUFXaUI7UUFDcEJNLFNBQVNEO1FBQ1RFLGVBQWUsQ0FBQ0MsSUFBTUEsRUFBRUMsY0FBYztrQkFDckNaLFFBQVEsQ0FBQ0YsaUNBQ1I7OzhCQUNFLDhEQUFDckIsNERBQUlBO29CQUFDb0MsT0FBT2IsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYSxLQUFLOzs7Ozs7OEJBQ3hCLDhEQUFDN0I7b0JBQVVELFNBQVNHLFdBQVdpQjs7c0NBQzdCLDhEQUFDVztzQ0FBSWQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZSxRQUFROzs7Ozs7d0JBQ2xCbEIsWUFBWW1CLE9BQU8sQ0FBQ0MsTUFBTSxJQUFJLG1CQUM3Qiw4REFBQ0M7O2dDQUFHckIsWUFBWW1CLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLEdBQUc7Z0NBQUk7Ozs7OztpREFFckMsOERBQUNEO3NDQUFHckIsWUFBWW1CLE9BQU87Ozs7O2dDQUFLOzs7Ozs7Ozt5Q0FHaEMsOERBQUNJO3NCQUFHOzs7OztnQkFBWTs7Ozs7O0FBRzFCLENBQUM7R0F4Q3VCbkM7O1FBQ1FYLHNEQUFPQTtRQUVwQkYsd0RBQWNBO1FBRWtCSSxpRkFBOEJvQjtRQUNwQnBCLHlGQUFzQ3VCO1FBQzFFeEIsMkVBQTJCMEI7UUFDMUI1Qix3REFBY0E7OztNQVJoQlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyL1VzZXIuanN4PzZhOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgnXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnXHJcbmltcG9ydCB7IGF1dGhVc2VyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aFVzZXInXHJcbmltcG9ydCB7IHJvb21TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUm9vbVNlcnZpY2UnXHJcbmltcG9ydCBMb2dvIGZyb20gJy4uL2ludGVyZmFjZS9sb2dvL0xvZ28nXHJcbmltcG9ydCB7IGNoYW5nZUN1cnJlbnRSb29tLCBjaGFuZ2VDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL3N0b3JlL3JlZHVjZXJzL3Jvb21TbGljZSdcclxuXHJcbmNvbnN0IFVzZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2x1bW4tZ2FwOiAxNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY3VycmVudCA/ICd2YXIoLS1wcmltYXJ5LWNvbG9yKScgOiAnbm9uZSd9ICFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExMTQ7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHJvdy1nYXA6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGgye1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jdXJyZW50ID8gJ3ZhcigtLXByaW1hcnktdGV4dC1jb2xvciknIDogJ3ZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKSd9O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgcm9vbUlkIH0pIHtcclxuICBjb25zdCB7IGlkOiBjdXJyZW50VXNlcklkIH0gPSB1c2VBdXRoKClcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuXHJcbiAgY29uc3QgeyBkYXRhOiByb29tLCBpc0xvYWRpbmc6IHJvb21Jc0xvYWRpbmcgfSA9IHJvb21TZXJ2aWNlLnVzZUdldE9uZVJvb21RdWVyeSh7IHJvb206IHJvb21JZCB9KVxyXG4gIGNvbnN0IHsgZGF0YTogbGFzdE1lc3NhZ2UsIGlzTG9hZGluZzogbWVzc2FnZUlzTG9hZGluZyB9ID0gcm9vbVNlcnZpY2UudXNlR2V0TGFzdE1lc3NhZ2VSb29tUXVlcnkoeyByb29tOiByb29tSWQgfSlcclxuICBjb25zdCB7IGRhdGE6IHVzZXIgfSA9IGF1dGhVc2VyLnVzZUdldE9uZVVzZXJRdWVyeSh7IGlkOiB1c2VySWQgfSwgeyBza2lwOiAhdXNlcklkIH0pXHJcbiAgY29uc3QgeyBjdXJyZW50Um9vbSB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm9vbVNsaWNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvb20pIHtcclxuICAgICAgc2V0VXNlcklkKHJvb20udXNlcnMuZmlsdGVyKGlkID0+IGlkICE9PSBjdXJyZW50VXNlcklkKVswXSlcclxuICAgICAgZGlzcGF0Y2goY2hhbmdlQ3VycmVudFVzZXIocm9vbS51c2Vycy5maWx0ZXIoaWQgPT4gaWQgIT09IGN1cnJlbnRVc2VySWQpWzBdKSlcclxuICAgIH1cclxuICB9LCBbcm9vbUlzTG9hZGluZ10pXHJcblxyXG4gIGNvbnN0IG9wZW5Sb29tSGFuZGxlciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKGNoYW5nZUN1cnJlbnRSb29tKHJvb21JZCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJXcmFwcGVyXHJcbiAgICAgIGN1cnJlbnQ9e3Jvb21JZCA9PT0gY3VycmVudFJvb219XHJcbiAgICAgIG9uQ2xpY2s9e29wZW5Sb29tSGFuZGxlcn1cclxuICAgICAgb25Db250ZXh0TWVudT17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgIHt1c2VyICYmICFtZXNzYWdlSXNMb2FkaW5nID9cclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPExvZ28gaW1hZ2U9e3VzZXI/LmltYWdlfSAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBjdXJyZW50PXtyb29tSWQgPT09IGN1cnJlbnRSb29tfT5cclxuICAgICAgICAgICAgPGgyPnt1c2VyPy51c2VybmFtZX08L2gyPlxyXG4gICAgICAgICAgICB7bGFzdE1lc3NhZ2UubWVzc2FnZS5sZW5ndGggPj0gNjUgP1xyXG4gICAgICAgICAgICAgIDxwPntsYXN0TWVzc2FnZS5tZXNzYWdlLnNsaWNlKDAsIDY1KX0uLi48L3A+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxwPntsYXN0TWVzc2FnZS5tZXNzYWdlfTwvcD59XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgICA6IDxoMT5Mb2FkLi4uPC9oMT59XHJcbiAgICA8L1VzZXJXcmFwcGVyPlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VBdXRoIiwiYXV0aFVzZXIiLCJyb29tU2VydmljZSIsIkxvZ28iLCJjaGFuZ2VDdXJyZW50Um9vbSIsImNoYW5nZUN1cnJlbnRVc2VyIiwiVXNlcldyYXBwZXIiLCJkaXYiLCJwcm9wcyIsImN1cnJlbnQiLCJDb250YWluZXIiLCJVc2VyIiwicm9vbUlkIiwiaWQiLCJjdXJyZW50VXNlcklkIiwidXNlcklkIiwic2V0VXNlcklkIiwiZGlzcGF0Y2giLCJkYXRhIiwicm9vbSIsImlzTG9hZGluZyIsInJvb21Jc0xvYWRpbmciLCJ1c2VHZXRPbmVSb29tUXVlcnkiLCJsYXN0TWVzc2FnZSIsIm1lc3NhZ2VJc0xvYWRpbmciLCJ1c2VHZXRMYXN0TWVzc2FnZVJvb21RdWVyeSIsInVzZXIiLCJ1c2VHZXRPbmVVc2VyUXVlcnkiLCJza2lwIiwiY3VycmVudFJvb20iLCJzdGF0ZSIsInJvb21TbGljZSIsInVzZXJzIiwiZmlsdGVyIiwib3BlblJvb21IYW5kbGVyIiwib25DbGljayIsIm9uQ29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbWFnZSIsImgyIiwidXNlcm5hbWUiLCJtZXNzYWdlIiwibGVuZ3RoIiwicCIsInNsaWNlIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/User/User.jsx\n"));

/***/ })

});