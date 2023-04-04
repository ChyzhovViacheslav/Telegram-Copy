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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Room; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/inputMessage/InputMessage */ \"./components/interface/inputMessage/InputMessage.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    background-color: var(--body-background-color);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex-shrink: 0;\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    background-color: var(--surface-color);\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    overflow: hidden;\\n    width: 782px;\\n    margin: 0 auto;\\n    align-items: flex-end;\\n    margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    overflow: auto;\\n    row-gap: 5px;\\n    ::-webkit-scrollbar {\\n        width: 5px;\\n        background-color: none;\\n    }\\n    ::-webkit-scrollbar-track {\\n        background-color: none;\\n    }\\n    ::-webkit-scrollbar-thumb {\\n        background-color: rgba(255, 255, 255, 0.4);\\n        border-radius: 8px;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    margin-top: auto;\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: flex-end;\\n    padding: 6px 8px;\\n    border-radius: 8px;\\n    p{\\n        font-size: 18px;\\n    }\\n    span{\\n        margin-left: 5px;\\n        font-size: 11px;\\n        opacity: 0.5;\\n    }\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 54px;\\n    height: 54px;\\n    border-radius: 100%;\\n    background-color: var(--primary-color);\\n    margin-left: 15px;\\n    flex-shrink: 0;\\n    padding-left: 4px;\\n    &:hover{\\n        background-color: var(--dark-primary-color);\\n    }\\n    svg{\\n        transform: scale(1.2);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst RoomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = RoomWrapper;\nconst RoomInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1());\n_c1 = RoomInfo;\nconst ContainerControllers = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c2 = ContainerControllers;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c3 = Container;\nconst MessagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c4 = MessagesWrapper;\nconst MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5(), (props)=>{\n    switch(props.variant){\n        case \"first-user\":\n            return \"\\n                    justify-content: flex-end;\\n                \";\n        case \"second-user\":\n            return \"\\n                    justify-content: flex-start;\\n                \";\n        case \"system\":\n            return \"\\n                    justify-content: center;\\n                \";\n    }\n});\n_c5 = MessageWrapper;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject6(), (props)=>{\n    switch(props.variant){\n        case \"first-user\":\n            return \"\\n                    background-color: var(--dark-primary-color);\\n                \";\n        case \"second-user\":\n            return \"\\n                    background-color: var(--surface-color);\\n                \";\n        case \"system\":\n            return \"\\n                    background-color: red;\\n                    span{\\n                        displa\\n                    }\\n                \";\n    }\n});\n_c6 = Message;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button(_templateObject7());\n_c7 = Button;\nfunction Room() {\n    _s();\n    const [roomIsLoading, setRoomIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const { id  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { currentRoom  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.roomSlice);\n    const [fetchingMessages, setFetchingMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [messageLimit, setMessageLimit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50);\n    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:2000\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.emit(\"joinRoom\", {\n            room_id: currentRoom\n        });\n        socket.emit(\"getMessages\", {\n            room_id: currentRoom,\n            limit: messageLimit\n        });\n        socket.on(\"allMessages\", (data)=>{\n            setAllMessages(data);\n            setFetchingMessages(false);\n            setRoomIsLoading(false);\n        });\n        socket.on(\"newMessage\", (message)=>{\n            setAllMessages((prevMessages)=>[\n                    ...prevMessages,\n                    message\n                ]);\n        });\n        return ()=>{\n            socket.off(\"joinRoom\");\n            socket.off(\"getMessages\");\n            setRoomIsLoading(true);\n        };\n    }, [\n        currentRoom\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!roomIsLoading) {\n            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;\n        }\n    }, [\n        roomIsLoading\n    ]);\n    const sendMessageHandler = (e)=>{\n        e.preventDefault();\n        socket.emit(\"sendMessage\", {\n            text: message,\n            user_id: id,\n            room_id: currentRoom\n        });\n        setMessage(\"\");\n    };\n    const scrollHandler = (e)=>{\n        const { scrollTop  } = e.target;\n        if (scrollTop <= 100 && !fetchingMessages) {\n            setFetchingMessages(true);\n            const newMessageLimit = messageLimit + 50;\n            socket.emit(\"getMessages\", {\n                room_id: currentRoom,\n                limit: newMessageLimit\n            });\n            socket.on(\"allMessages\", (data)=>{\n                if (allMessages.length !== data.length) {\n                    setMessageLimit(newMessageLimit);\n                }\n                setAllMessages(data);\n                setFetchingMessages(false);\n            });\n        }\n    };\n    const renderAllMessages = ()=>{\n        return allMessages.map((msg)=>{\n            const date = new Date(msg.created_at);\n            const hours = date.getUTCHours().toString().padStart(2, \"0\");\n            const minutes = date.getUTCMinutes().toString().padStart(2, \"0\");\n            const authorMessage = (author)=>{\n                switch(author){\n                    case id:\n                        return \"first-user\";\n                    case id.length === author.length:\n                        return \"second-user\";\n                    case \"system\":\n                        return \"system\";\n                }\n            };\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessageWrapper, {\n                variant: authorMessage(msg.author),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Message, {\n                    variant: authorMessage(msg.author),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: msg.message\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 231,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: hours + \":\" + minutes\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 232,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                    lineNumber: 230,\n                    columnNumber: 17\n                }, this)\n            }, msg._id, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 229,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomInfo, {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 240,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerControllers, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessagesWrapper, {\n                                ref: messagesRef,\n                                onScroll: scrollHandler,\n                                children: renderAllMessages()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 245,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                value: message,\n                                setMessage: setMessage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 250,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 244,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: sendMessageHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"send\",\n                            color: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 255,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 254,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 243,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n        lineNumber: 239,\n        columnNumber: 9\n    }, this);\n}\n_s(Room, \"MuPeWFL/VzeLvtbl9OOZEVCoyr4=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c8 = Room;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"RoomWrapper\");\n$RefreshReg$(_c1, \"RoomInfo\");\n$RefreshReg$(_c2, \"ContainerControllers\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"MessagesWrapper\");\n$RefreshReg$(_c5, \"MessageWrapper\");\n$RefreshReg$(_c6, \"Message\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NDQUFHWixJQUFJbEMsT0FBTzs7Ozs7O3NDQUNmLDhEQUFDK0M7c0NBQU1ULFFBQVEsTUFBTUk7Ozs7Ozs7Ozs7OztlQUhEUixJQUFJYyxHQUFHOzs7OztRQU12QztJQUNKO0lBRUEscUJBQ0ksOERBQUNoRTs7MEJBQ0csOERBQUNFOzs7OzswQkFHRCw4REFBQ0M7O2tDQUNHLDhEQUFDQzs7MENBQ0csOERBQUNDO2dDQUNHNEQsS0FBS3RDO2dDQUNMdUMsVUFBVXRCOzBDQUNUSTs7Ozs7OzBDQUVMLDhEQUFDbEQsNEVBQVlBO2dDQUNUcUUsT0FBT25EO2dDQUNQQyxZQUFZQTs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ1A7d0JBQU8wRCxTQUFTN0I7a0NBQ2IsNEVBQUN4QywyREFBWUE7NEJBQUNnQixJQUFJOzRCQUFRc0QsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEQsQ0FBQztHQTFIdUJ6RDs7UUFFTGYsc0RBQU9BO1FBR0VELHdEQUFjQTs7O01BTGxCZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL1Jvb20uanN4PzQxODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBpbyB9IGZyb20gJ3NvY2tldC5pby1jbGllbnQnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vaG9va3MvcmVkdXgnXHJcbmltcG9ydCB1c2VBdXRoIGZyb20gJy4uLy4uL2hvb2tzL3VzZUF1dGgnXHJcbmltcG9ydCBJbnB1dE1lc3NhZ2UgZnJvbSAnLi4vaW50ZXJmYWNlL2lucHV0TWVzc2FnZS9JbnB1dE1lc3NhZ2UnXHJcbmltcG9ydCBJY29uU2VsZWN0b3IgZnJvbSAnLi4vLi4vYXNzZXRzL2ljb25zL2ljb25zJ1xyXG5cclxuY29uc3QgUm9vbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZC1jb2xvcik7XHJcbmBcclxuXHJcbmNvbnN0IFJvb21JbmZvID0gc3R5bGVkLmRpdmBcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1cmZhY2UtY29sb3IpO1xyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXJDb250cm9sbGVycyA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiA3ODJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYFxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IE1lc3NhZ2VzV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICByb3ctZ2FwOiA1cHg7XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xyXG4gICAgfVxyXG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgTWVzc2FnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgJHtwcm9wcyA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChwcm9wcy52YXJpYW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2ZpcnN0LXVzZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBjYXNlICdzZWNvbmQtdXNlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgY2FzZSAnc3lzdGVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYFxyXG5cclxuY29uc3QgTWVzc2FnZSA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgc3BhbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcbiAgICAke3Byb3BzID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHByb3BzLnZhcmlhbnQpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmlyc3QtdXNlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHJpbWFyeS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZC11c2VyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGNhc2UgJ3N5c3RlbSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYFxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTRweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb20oKSB7XHJcbiAgICBjb25zdCBbcm9vbUlzTG9hZGluZywgc2V0Um9vbUlzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlQXV0aCgpXHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthbGxNZXNzYWdlcywgc2V0QWxsTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCB7IGN1cnJlbnRSb29tIH0gPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb29tU2xpY2UpXHJcbiAgICBjb25zdCBbZmV0Y2hpbmdNZXNzYWdlcywgc2V0RmV0Y2hpbmdNZXNzYWdlc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW21lc3NhZ2VMaW1pdCwgc2V0TWVzc2FnZUxpbWl0XSA9IHVzZVN0YXRlKDUwKVxyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VzUmVmID0gdXNlUmVmKG51bGwpXHJcblxyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MjAwMCcpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IHJvb21faWQ6IGN1cnJlbnRSb29tIH0pXHJcblxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXRNZXNzYWdlcycsIHsgcm9vbV9pZDogY3VycmVudFJvb20sIGxpbWl0OiBtZXNzYWdlTGltaXQgfSlcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdhbGxNZXNzYWdlcycsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFsbE1lc3NhZ2VzKGRhdGEpXHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nTWVzc2FnZXMoZmFsc2UpXHJcbiAgICAgICAgICAgIHNldFJvb21Jc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0QWxsTWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZignam9pblJvb20nKVxyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlcycpXHJcbiAgICAgICAgICAgIHNldFJvb21Jc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbY3VycmVudFJvb21dKVxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghcm9vbUlzTG9hZGluZykge1xyXG4gICAgICAgICAgICBtZXNzYWdlc1JlZi5jdXJyZW50LnNjcm9sbFRvcCA9IG1lc3NhZ2VzUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtyb29tSXNMb2FkaW5nXSlcclxuXHJcblxyXG4gICAgY29uc3Qgc2VuZE1lc3NhZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBzb2NrZXQuZW1pdCgnc2VuZE1lc3NhZ2UnLCB7XHJcbiAgICAgICAgICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IGlkLFxyXG4gICAgICAgICAgICByb29tX2lkOiBjdXJyZW50Um9vbVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0TWVzc2FnZSgnJylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCB7IHNjcm9sbFRvcCB9ID0gZS50YXJnZXQ7XHJcblxyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVG9wIDw9IDEwMCAmJiAhZmV0Y2hpbmdNZXNzYWdlcykge1xyXG4gICAgICAgICAgICBzZXRGZXRjaGluZ01lc3NhZ2VzKHRydWUpXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld01lc3NhZ2VMaW1pdCA9IG1lc3NhZ2VMaW1pdCArIDUwXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdCgnZ2V0TWVzc2FnZXMnLCB7IHJvb21faWQ6IGN1cnJlbnRSb29tLCBsaW1pdDogbmV3TWVzc2FnZUxpbWl0IH0pXHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oJ2FsbE1lc3NhZ2VzJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxNZXNzYWdlcy5sZW5ndGggIT09IGRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZUxpbWl0KG5ld01lc3NhZ2VMaW1pdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEFsbE1lc3NhZ2VzKGRhdGEpXHJcbiAgICAgICAgICAgICAgICBzZXRGZXRjaGluZ01lc3NhZ2VzKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJBbGxNZXNzYWdlcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYWxsTWVzc2FnZXMubWFwKChtc2cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG1zZy5jcmVhdGVkX2F0KVxyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcclxuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IGRhdGUuZ2V0VVRDTWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYXV0aG9yTWVzc2FnZSA9IChhdXRob3IpID0+IHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXV0aG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBpZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdmaXJzdC11c2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgaWQubGVuZ3RoID09PSBhdXRob3IubGVuZ3RoOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3NlY29uZC11c2VyJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N5c3RlbSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnc3lzdGVtJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2VXcmFwcGVyIGtleT17bXNnLl9pZH0gdmFyaWFudD17YXV0aG9yTWVzc2FnZShtc2cuYXV0aG9yKX0+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSB2YXJpYW50PXthdXRob3JNZXNzYWdlKG1zZy5hdXRob3IpfT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57bXNnLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntob3VycyArICc6JyArIG1pbnV0ZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9NZXNzYWdlPlxyXG4gICAgICAgICAgICA8L01lc3NhZ2VXcmFwcGVyPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Um9vbVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxSb29tSW5mbz5cclxuXHJcbiAgICAgICAgICAgIDwvUm9vbUluZm8+XHJcbiAgICAgICAgICAgIDxDb250YWluZXJDb250cm9sbGVycz5cclxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VzV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWY9e21lc3NhZ2VzUmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNjcm9sbD17c2Nyb2xsSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJBbGxNZXNzYWdlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVzc2FnZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE1lc3NhZ2U9e3NldE1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2VuZE1lc3NhZ2VIYW5kbGVyfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25TZWxlY3RvciBpZD17J3NlbmQnfSBjb2xvcj0nI2ZmZicgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lckNvbnRyb2xsZXJzID5cclxuICAgICAgICA8L1Jvb21XcmFwcGVyPlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiaW8iLCJzdHlsZWQiLCJ1c2VBcHBTZWxlY3RvciIsInVzZUF1dGgiLCJJbnB1dE1lc3NhZ2UiLCJJY29uU2VsZWN0b3IiLCJSb29tV3JhcHBlciIsImRpdiIsIlJvb21JbmZvIiwiQ29udGFpbmVyQ29udHJvbGxlcnMiLCJDb250YWluZXIiLCJNZXNzYWdlc1dyYXBwZXIiLCJNZXNzYWdlV3JhcHBlciIsInByb3BzIiwidmFyaWFudCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJidXR0b24iLCJSb29tIiwicm9vbUlzTG9hZGluZyIsInNldFJvb21Jc0xvYWRpbmciLCJpZCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiYWxsTWVzc2FnZXMiLCJzZXRBbGxNZXNzYWdlcyIsImN1cnJlbnRSb29tIiwic3RhdGUiLCJyb29tU2xpY2UiLCJmZXRjaGluZ01lc3NhZ2VzIiwic2V0RmV0Y2hpbmdNZXNzYWdlcyIsIm1lc3NhZ2VMaW1pdCIsInNldE1lc3NhZ2VMaW1pdCIsIm1lc3NhZ2VzUmVmIiwic29ja2V0IiwiZW1pdCIsInJvb21faWQiLCJsaW1pdCIsIm9uIiwiZGF0YSIsInByZXZNZXNzYWdlcyIsIm9mZiIsImN1cnJlbnQiLCJzY3JvbGxUb3AiLCJzY3JvbGxIZWlnaHQiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0IiwidXNlcl9pZCIsInNjcm9sbEhhbmRsZXIiLCJ0YXJnZXQiLCJuZXdNZXNzYWdlTGltaXQiLCJsZW5ndGgiLCJyZW5kZXJBbGxNZXNzYWdlcyIsIm1hcCIsIm1zZyIsImRhdGUiLCJEYXRlIiwiY3JlYXRlZF9hdCIsImhvdXJzIiwiZ2V0VVRDSG91cnMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0IiwibWludXRlcyIsImdldFVUQ01pbnV0ZXMiLCJhdXRob3JNZXNzYWdlIiwiYXV0aG9yIiwicCIsInNwYW4iLCJfaWQiLCJyZWYiLCJvblNjcm9sbCIsInZhbHVlIiwib25DbGljayIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Room/Room.jsx\n"));

/***/ })

});