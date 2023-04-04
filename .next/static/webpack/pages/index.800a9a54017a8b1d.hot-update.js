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

/***/ "./components/Room/Room.jsx":
/*!**********************************!*\
  !*** ./components/Room/Room.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Room; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/inputMessage/InputMessage */ \"./components/interface/inputMessage/InputMessage.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    background-color: var(--body-background-color);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex-shrink: 0;\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    background-color: var(--surface-color);\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    overflow: hidden;\\n    width: 782px;\\n    margin: 0 auto;\\n    align-items: flex-end;\\n    margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    overflow: auto;\\n    row-gap: 5px;\\n    ::-webkit-scrollbar {\\n        width: 5px;\\n        background-color: none;\\n    }\\n    ::-webkit-scrollbar-track {\\n        background-color: none; /* Цвет фона боковой панели */\\n    }\\n    ::-webkit-scrollbar-thumb {\\n        background-color: rgba(255, 255, 255, 0.4);\\n        border-radius: 8px;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: \",\n        \";\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: flex-end;\\n    padding: 6px 8px;\\n    background-color: \",\n        \";\\n    border-radius: 8px;\\n    p{\\n        font-size: 18px;\\n    }\\n    span{\\n        margin-left: 5px;\\n        font-size: 11px;\\n        opacity: 0.5;\\n    }\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 54px;\\n    height: 54px;\\n    border-radius: 100%;\\n    background-color: var(--primary-color);\\n    margin-left: 15px;\\n    flex-shrink: 0;\\n    padding-left: 4px;\\n    &:hover{\\n        background-color: var(--dark-primary-color);\\n    }\\n    svg{\\n        transform: scale(1.2);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst RoomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = RoomWrapper;\nconst RoomInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1());\n_c1 = RoomInfo;\nconst ContainerControllers = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c2 = ContainerControllers;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c3 = Container;\nconst MessagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c4 = MessagesWrapper;\nconst MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5(), (props)=>props.user ? \"flex-end\" : \"flex-start\", (props)=>{\n    switch(props.variant){\n        case \"second-user\":\n            return \"\\n                    \\n                \";\n    }\n});\n_c5 = MessageWrapper;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject6(), (props)=>props.user ? \"var(--dark-primary-color)\" : \"var(--surface-color)\");\n_c6 = Message;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button(_templateObject7());\n_c7 = Button;\nfunction Room() {\n    _s();\n    const [roomIsLoading, setRoomIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const { id  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { currentRoom  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.roomSlice);\n    const [fetchingMessages, setFetchingMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [messageLimit, setMessageLimit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50);\n    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:2000\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.emit(\"joinRoom\", {\n            room_id: currentRoom\n        });\n        socket.emit(\"getMessages\", {\n            room_id: currentRoom,\n            limit: messageLimit\n        });\n        socket.on(\"allMessages\", (data)=>{\n            setAllMessages(data);\n            setFetchingMessages(false);\n            setRoomIsLoading(false);\n        });\n        socket.on(\"newMessage\", (message)=>{\n            setAllMessages((prevMessages)=>[\n                    ...prevMessages,\n                    message\n                ]);\n        });\n        return ()=>{\n            socket.off(\"joinRoom\");\n            socket.off(\"getMessages\");\n            setRoomIsLoading(true);\n        };\n    }, [\n        currentRoom\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!roomIsLoading) {\n            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;\n        }\n    }, [\n        roomIsLoading\n    ]);\n    const sendMessageHandler = (e)=>{\n        e.preventDefault();\n        socket.emit(\"sendMessage\", {\n            text: message,\n            user_id: id,\n            room_id: currentRoom\n        });\n        setMessage(\"\");\n    };\n    const scrollHandler = (e)=>{\n        const { scrollTop  } = e.target;\n        if (scrollTop <= 100 && !fetchingMessages) {\n            setFetchingMessages(true);\n            const newMessageLimit = messageLimit + 50;\n            socket.emit(\"getMessages\", {\n                room_id: currentRoom,\n                limit: newMessageLimit\n            });\n            socket.on(\"allMessages\", (data)=>{\n                if (allMessages.length !== data.length) {\n                    setMessageLimit(newMessageLimit);\n                }\n                setAllMessages(data);\n                setFetchingMessages(false);\n            });\n        }\n    };\n    const renderAllMessages = ()=>{\n        return allMessages.map((msg)=>{\n            const date = new Date(msg.created_at);\n            const hours = date.getUTCHours().toString().padStart(2, \"0\");\n            const minutes = date.getUTCMinutes().toString().padStart(2, \"0\");\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessageWrapper, {\n                user: id === msg.author,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Message, {\n                    user: id === msg.author,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: msg.message\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 193,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: hours + \":\" + minutes\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 194,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                    lineNumber: 192,\n                    columnNumber: 17\n                }, this)\n            }, msg._id, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 191,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomInfo, {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 202,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerControllers, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessagesWrapper, {\n                                ref: messagesRef,\n                                onScroll: scrollHandler,\n                                children: renderAllMessages()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 207,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                value: message,\n                                setMessage: setMessage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 212,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 206,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: sendMessageHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"send\",\n                            color: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 217,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 216,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 205,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n        lineNumber: 201,\n        columnNumber: 9\n    }, this);\n}\n_s(Room, \"MuPeWFL/VzeLvtbl9OOZEVCoyr4=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c8 = Room;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"RoomWrapper\");\n$RefreshReg$(_c1, \"RoomInfo\");\n$RefreshReg$(_c2, \"ContainerControllers\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"MessagesWrapper\");\n$RefreshReg$(_c5, \"MessageWrapper\");\n$RefreshReg$(_c6, \"Message\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1RJOzs7Ozs7MENBRUwsOERBQUNuRCw0RUFBWUE7Z0NBQ1RxRSxPQUFPbEQ7Z0NBQ1BDLFlBQVlBOzs7Ozs7Ozs7Ozs7a0NBRXBCLDhEQUFDUDt3QkFBT3lELFNBQVM1QjtrQ0FDYiw0RUFBQ3pDLDJEQUFZQTs0QkFBQ2lCLElBQUk7NEJBQVFxRCxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRCxDQUFDO0dBOUd1QnhEOztRQUVMaEIsc0RBQU9BO1FBR0VELHdEQUFjQTs7O01BTGxCaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL1Jvb20uanN4PzQxODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgnXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnXHJcbmltcG9ydCBJbnB1dE1lc3NhZ2UgZnJvbSAnLi4vaW50ZXJmYWNlL2lucHV0TWVzc2FnZS9JbnB1dE1lc3NhZ2UnXHJcbmltcG9ydCBJY29uU2VsZWN0b3IgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zJ1xyXG5cclxuY29uc3QgUm9vbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XHJcbmBcclxuXHJcbmNvbnN0IFJvb21JbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXJDb250cm9sbGVycyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA3ODJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IE1lc3NhZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lOyAvKiDQptCy0LXRgiDRhNC+0L3QsCDQsdC+0LrQvtCy0L7QuSDQv9Cw0L3QtdC70LggKi9cclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IE1lc3NhZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiAke3Byb3BzID0+IHByb3BzLnVzZXIgPyAnZmxleC1lbmQnIDogJ2ZsZXgtc3RhcnQnfTtcclxuICAgICR7cHJvcHMgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocHJvcHMudmFyaWFudCkge1xyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQtdXNlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgIH1cclxuICAgIH19XHJcbmBcclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnVzZXIgPyAndmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKScgOiAndmFyKC0tc3VyZmFjZS1jb2xvciknfTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDU0cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XHJcbiAgICB9XHJcbiAgICBzdmd7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb29tKCkge1xyXG4gICAgY29uc3QgW3Jvb21Jc0xvYWRpbmcsIHNldFJvb21Jc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IHsgaWQgfSA9IHVzZUF1dGgoKVxyXG4gICAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCBbYWxsTWVzc2FnZXMsIHNldEFsbE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgeyBjdXJyZW50Um9vbSB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucm9vbVNsaWNlKVxyXG4gICAgY29uc3QgW2ZldGNoaW5nTWVzc2FnZXMsIHNldEZldGNoaW5nTWVzc2FnZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFttZXNzYWdlTGltaXQsIHNldE1lc3NhZ2VMaW1pdF0gPSB1c2VTdGF0ZSg1MClcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlc1JlZiA9IHVzZVJlZihudWxsKVxyXG5cclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjIwMDAnKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2pvaW5Sb29tJywgeyByb29tX2lkOiBjdXJyZW50Um9vbSB9KVxyXG5cclxuICAgICAgICBzb2NrZXQuZW1pdCgnZ2V0TWVzc2FnZXMnLCB7IHJvb21faWQ6IGN1cnJlbnRSb29tLCBsaW1pdDogbWVzc2FnZUxpbWl0IH0pXHJcblxyXG4gICAgICAgIHNvY2tldC5vbignYWxsTWVzc2FnZXMnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBbGxNZXNzYWdlcyhkYXRhKVxyXG4gICAgICAgICAgICBzZXRGZXRjaGluZ01lc3NhZ2VzKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRSb29tSXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHNvY2tldC5vbignbmV3TWVzc2FnZScsIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFsbE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIG1lc3NhZ2VdKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ2pvaW5Sb29tJylcclxuICAgICAgICAgICAgc29ja2V0Lm9mZignZ2V0TWVzc2FnZXMnKVxyXG4gICAgICAgICAgICBzZXRSb29tSXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRSb29tXSlcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIXJvb21Jc0xvYWRpbmcpIHtcclxuICAgICAgICAgICAgbWVzc2FnZXNSZWYuY3VycmVudC5zY3JvbGxUb3AgPSBtZXNzYWdlc1JlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9LCBbcm9vbUlzTG9hZGluZ10pXHJcblxyXG5cclxuICAgIGNvbnN0IHNlbmRNZXNzYWdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB1c2VyX2lkOiBpZCxcclxuICAgICAgICAgICAgcm9vbV9pZDogY3VycmVudFJvb21cclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldE1lc3NhZ2UoJycpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzY3JvbGxUb3AgfSA9IGUudGFyZ2V0O1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSAxMDAgJiYgIWZldGNoaW5nTWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmdNZXNzYWdlcyh0cnVlKVxyXG4gICAgICAgICAgICBjb25zdCBuZXdNZXNzYWdlTGltaXQgPSBtZXNzYWdlTGltaXQgKyA1MFxyXG5cclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ2dldE1lc3NhZ2VzJywgeyByb29tX2lkOiBjdXJyZW50Um9vbSwgbGltaXQ6IG5ld01lc3NhZ2VMaW1pdCB9KVxyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKCdhbGxNZXNzYWdlcycsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsTWVzc2FnZXMubGVuZ3RoICE9PSBkYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2VMaW1pdChuZXdNZXNzYWdlTGltaXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRBbGxNZXNzYWdlcyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0RmV0Y2hpbmdNZXNzYWdlcyhmYWxzZSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQWxsTWVzc2FnZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGFsbE1lc3NhZ2VzLm1hcCgobXNnKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShtc2cuY3JlYXRlZF9hdClcclxuICAgICAgICAgICAgY29uc3QgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcclxuICAgICAgICAgICAgcmV0dXJuIDxNZXNzYWdlV3JhcHBlciBrZXk9e21zZy5faWR9IHVzZXI9e2lkID09PSBtc2cuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIHVzZXI9e2lkID09PSBtc2cuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bXNnLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VycyArICc6JyArIG1pbnV0ZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICA8L01lc3NhZ2VXcmFwcGVyPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um9vbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxSb29tSW5mbz5cclxuXHJcbiAgICAgICAgICAgIDwvUm9vbUluZm8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJDb250cm9sbGVycz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e21lc3NhZ2VzUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJBbGxNZXNzYWdlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVzc2FnZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2U9e3NldE1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2VIYW5kbGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD17J3NlbmQnfSBjb2xvcj0nI2ZmZicgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lckNvbnRyb2xsZXJzID5cclxuICAgICAgICA8L1Jvb21XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW8iLCJzdHlsZWQiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUF1dGgiLCJJbnB1dE1lc3NhZ2UiLCJJY29uU2VsZWN0b3IiLCJSb29tV3JhcHBlciIsImRpdiIsIlJvb21JbmZvIiwiQ29udGFpbmVyQ29udHJvbGxlcnMiLCJDb250YWluZXIiLCJNZXNzYWdlc1dyYXBwZXIiLCJNZXNzYWdlV3JhcHBlciIsInByb3BzIiwidXNlciIsInZhcmlhbnQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiYnV0dG9uIiwiUm9vbSIsInJvb21Jc0xvYWRpbmciLCJzZXRSb29tSXNMb2FkaW5nIiwiaWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImFsbE1lc3NhZ2VzIiwic2V0QWxsTWVzc2FnZXMiLCJjdXJyZW50Um9vbSIsInN0YXRlIiwicm9vbVNsaWNlIiwiZmV0Y2hpbmdNZXNzYWdlcyIsInNldEZldGNoaW5nTWVzc2FnZXMiLCJtZXNzYWdlTGltaXQiLCJzZXRNZXNzYWdlTGltaXQiLCJtZXNzYWdlc1JlZiIsInNvY2tldCIsImVtaXQiLCJyb29tX2lkIiwibGltaXQiLCJvbiIsImRhdGEiLCJwcmV2TWVzc2FnZXMiLCJvZmYiLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwic2VuZE1lc3NhZ2VIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGV4dCIsInVzZXJfaWQiLCJzY3JvbGxIYW5kbGVyIiwidGFyZ2V0IiwibmV3TWVzc2FnZUxpbWl0IiwibGVuZ3RoIiwicmVuZGVyQWxsTWVzc2FnZXMiLCJtYXAiLCJtc2ciLCJkYXRlIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJob3VycyIsImdldFVUQ0hvdXJzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIm1pbnV0ZXMiLCJnZXRVVENNaW51dGVzIiwiYXV0aG9yIiwicCIsInNwYW4iLCJfaWQiLCJyZWYiLCJvblNjcm9sbCIsInZhbHVlIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Room/Room.jsx\n"));

/***/ })

});