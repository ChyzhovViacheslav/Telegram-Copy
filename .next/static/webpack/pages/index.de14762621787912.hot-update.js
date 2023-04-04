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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Room; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/inputMessage/InputMessage */ \"./components/interface/inputMessage/InputMessage.jsx\");\n/* harmony import */ var _assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/icons/icons */ \"./assets/icons/icons.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    background-color: var(--body-background-color);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex-shrink: 0;\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    background-color: var(--surface-color);\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    height: 100%;\\n    overflow: hidden;\\n    width: 782px;\\n    margin: 0 auto;\\n    align-items: flex-end;\\n    margin-bottom: 20px;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    height: 100%;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    height: 100%;\\n    overflow: auto;\\n    row-gap: 5px;\\n    ::-webkit-scrollbar {\\n        width: 5px;\\n        background-color: none;\\n    }\\n    ::-webkit-scrollbar-track {\\n        background-color: none;\\n    }\\n    ::-webkit-scrollbar-thumb {\\n        background-color: rgba(255, 255, 255, 0.4);\\n        border-radius: 8px;\\n    }\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    margin-top: auto;\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: flex-end;\\n    padding: 6px 8px;\\n    border-radius: 8px;\\n    p{\\n        font-size: 16px;\\n    }\\n    span{\\n        margin-left: 5px;\\n        font-size: 11px;\\n        opacity: 0.5;\\n    }\\n    \",\n        \"\\n\"\n    ]);\n    _templateObject6 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    width: 54px;\\n    height: 54px;\\n    border-radius: 100%;\\n    background-color: var(--primary-color);\\n    margin-left: 15px;\\n    flex-shrink: 0;\\n    padding-left: 4px;\\n    &:hover{\\n        background-color: var(--dark-primary-color);\\n    }\\n    svg{\\n        transform: scale(1.2);\\n    }\\n\"\n    ]);\n    _templateObject7 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst RoomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject());\n_c = RoomWrapper;\nconst RoomInfo = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject1());\n_c1 = RoomInfo;\nconst ContainerControllers = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject2());\n_c2 = ContainerControllers;\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject3());\n_c3 = Container;\nconst MessagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject4());\n_c4 = MessagesWrapper;\nconst MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5(), (props)=>{\n    switch(props.variant){\n        case \"first-user\":\n            return \"\\n                    justify-content: flex-end;\\n                \";\n        case \"second-user\":\n            return \"\\n                    justify-content: flex-start;\\n                \";\n        case \"system\":\n            return \"\\n                    justify-content: center;\\n                \";\n    }\n});\n_c5 = MessageWrapper;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject6(), (props)=>{\n    switch(props.variant){\n        case \"first-user\":\n            return \"\\n                    background-color: var(--dark-primary-color);\\n                \";\n        case \"second-user\":\n            return \"\\n                    background-color: var(--surface-color);\\n                \";\n        case \"system\":\n            return \"\\n                    background-color: var(--opacity-primary-text-color);\\n                    border-radius: 16px;\\n                    padding: 6px 12px;\\n                    span{\\n                        display: none;\\n                    }\\n                \";\n    }\n});\n_c6 = Message;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].button(_templateObject7());\n_c7 = Button;\nfunction Room() {\n    _s();\n    const { id  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [roomIsLoading, setRoomIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { currentRoom  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.roomSlice);\n    const [fetchingMessages, setFetchingMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [messageLimit, setMessageLimit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(50);\n    const messagesRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:2000\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.emit(\"joinRoom\", {\n            room_id: currentRoom\n        });\n        socket.emit(\"getMessages\", {\n            room_id: currentRoom,\n            limit: messageLimit\n        });\n        socket.on(\"allMessages\", (data)=>{\n            setAllMessages(data);\n            setFetchingMessages(false);\n            setRoomIsLoading(false);\n        });\n        socket.on(\"newMessage\", (message)=>{\n            setAllMessages((prevMessages)=>[\n                    ...prevMessages,\n                    message\n                ]);\n        });\n        return ()=>{\n            socket.off(\"joinRoom\");\n            socket.off(\"getMessages\");\n            setRoomIsLoading(true);\n        };\n    }, [\n        currentRoom\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!roomIsLoading) {\n            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;\n        }\n    }, [\n        roomIsLoading\n    ]);\n    const sendMessageHandler = (e)=>{\n        e.preventDefault();\n        socket.emit(\"sendMessage\", {\n            text: message,\n            user_id: id,\n            room_id: currentRoom\n        });\n        setMessage(\"\");\n    };\n    const scrollHandler = (e)=>{\n        const { scrollTop  } = e.target;\n        if (scrollTop <= 100 && !fetchingMessages) {\n            setFetchingMessages(true);\n            const newMessageLimit = messageLimit + 50;\n            socket.emit(\"getMessages\", {\n                room_id: currentRoom,\n                limit: newMessageLimit\n            });\n            socket.on(\"allMessages\", (data)=>{\n                if (allMessages.length !== data.length) {\n                    setMessageLimit(newMessageLimit);\n                }\n                setAllMessages(data);\n                setFetchingMessages(false);\n            });\n        }\n    };\n    const renderAllMessages = ()=>{\n        return allMessages.map((msg)=>{\n            const date = new Date(msg.created_at);\n            const hours = date.getUTCHours().toString().padStart(2, \"0\");\n            const minutes = date.getUTCMinutes().toString().padStart(2, \"0\");\n            const authorMessage = (author)=>{\n                switch(author){\n                    case id:\n                        return \"first-user\";\n                    case \"system\":\n                        return \"system\";\n                    default:\n                        return \"second-user\";\n                }\n            };\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessageWrapper, {\n                variant: authorMessage(msg.author),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Message, {\n                    variant: authorMessage(msg.author),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: msg.message\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 236,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: hours + \":\" + minutes\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 237,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                    lineNumber: 235,\n                    columnNumber: 17\n                }, this)\n            }, msg._id, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 234,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomInfo, {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 245,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ContainerControllers, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessagesWrapper, {\n                                ref: messagesRef,\n                                onScroll: scrollHandler,\n                                children: renderAllMessages()\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 250,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                value: message,\n                                setMessage: setMessage\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                                lineNumber: 255,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 249,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                        onClick: sendMessageHandler,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_assets_icons_icons__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            id: \"send\",\n                            color: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 260,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                        lineNumber: 259,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 248,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n        lineNumber: 244,\n        columnNumber: 9\n    }, this);\n}\n_s(Room, \"eDiTzlIcVQleLZ5q03MRP9TfRPA=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c8 = Room;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;\n$RefreshReg$(_c, \"RoomWrapper\");\n$RefreshReg$(_c1, \"RoomInfo\");\n$RefreshReg$(_c2, \"ContainerControllers\");\n$RefreshReg$(_c3, \"Container\");\n$RefreshReg$(_c4, \"MessagesWrapper\");\n$RefreshReg$(_c5, \"MessageWrapper\");\n$RefreshReg$(_c6, \"Message\");\n$RefreshReg$(_c7, \"Button\");\n$RefreshReg$(_c8, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vUm9vbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDckI7QUFDQztBQUNZO0FBQ1Q7QUFDd0I7QUFDZDtBQUVuRCxNQUFNVSxjQUFjTCw2REFBVTtLQUF4Qks7QUFRTixNQUFNRSxXQUFXUCw2REFBVTtNQUFyQk87QUFTTixNQUFNQyx1QkFBdUJSLDZEQUFVO01BQWpDUTtBQVVOLE1BQU1DLFlBQVlULDZEQUFVO01BQXRCUztBQU9OLE1BQU1DLGtCQUFrQlYsNkRBQVU7TUFBNUJVO0FBb0JOLE1BQU1DLGlCQUFpQlgsNkRBQVUscUJBSTNCWSxDQUFBQSxRQUFTO0lBQ1AsT0FBUUEsTUFBTUMsT0FBTztRQUNqQixLQUFLO1lBQ0QsT0FBUTtRQUdaLEtBQUs7WUFDRCxPQUFRO1FBR1osS0FBSztZQUNELE9BQVE7SUFHaEI7QUFDSjtNQW5CRUY7QUFzQk4sTUFBTUcsVUFBVWQsNkRBQVUscUJBYXBCWSxDQUFBQSxRQUFTO0lBQ1AsT0FBUUEsTUFBTUMsT0FBTztRQUNqQixLQUFLO1lBQ0QsT0FBUTtRQUdaLEtBQUs7WUFDRCxPQUFRO1FBR1osS0FBSztZQUNELE9BQVE7SUFRaEI7QUFDSjtNQWpDRUM7QUFvQ04sTUFBTUMsU0FBU2YsZ0VBQWE7TUFBdEJlO0FBbUJTLFNBQVNFLE9BQU87O0lBQzNCLE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUdoQiwwREFBT0E7SUFFdEIsTUFBTSxDQUFDaUIsZUFBZUMsaUJBQWlCLEdBQUd0QiwrQ0FBUUEsQ0FBQyxJQUFJO0lBR3ZELE1BQU0sQ0FBQ3VCLFNBQVNDLFdBQVcsR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ3lCLGFBQWFDLGVBQWUsR0FBRzFCLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxFQUFFMkIsWUFBVyxFQUFFLEdBQUd4Qiw0REFBY0EsQ0FBQ3lCLENBQUFBLFFBQVNBLE1BQU1DLFNBQVM7SUFDL0QsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHL0IsK0NBQVFBLENBQUMsS0FBSztJQUU5RCxNQUFNLENBQUNnQyxjQUFjQyxnQkFBZ0IsR0FBR2pDLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1rQyxjQUFjbkMsNkNBQU1BLENBQUMsSUFBSTtJQUUvQixNQUFNb0MsU0FBU2xDLG9EQUFFQSxDQUFDO0lBRWxCSCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pxQyxPQUFPQyxJQUFJLENBQUMsWUFBWTtZQUFFQyxTQUFTVjtRQUFZO1FBRS9DUSxPQUFPQyxJQUFJLENBQUMsZUFBZTtZQUFFQyxTQUFTVjtZQUFhVyxPQUFPTjtRQUFhO1FBRXZFRyxPQUFPSSxFQUFFLENBQUMsZUFBZSxDQUFDQyxPQUFTO1lBQy9CZCxlQUFlYztZQUNmVCxvQkFBb0IsS0FBSztZQUN6QlQsaUJBQWlCLEtBQUs7UUFDMUI7UUFFQWEsT0FBT0ksRUFBRSxDQUFDLGNBQWMsQ0FBQ2hCLFVBQVk7WUFDakNHLGVBQWUsQ0FBQ2UsZUFBaUI7dUJBQUlBO29CQUFjbEI7aUJBQVE7UUFDL0Q7UUFFQSxPQUFPLElBQU07WUFDVFksT0FBT08sR0FBRyxDQUFDO1lBQ1hQLE9BQU9PLEdBQUcsQ0FBQztZQUNYcEIsaUJBQWlCLElBQUk7UUFDekI7SUFDSixHQUFHO1FBQUNLO0tBQVk7SUFHaEI3QixnREFBU0EsQ0FBQyxJQUFNO1FBQ1osSUFBSSxDQUFDdUIsZUFBZTtZQUNoQmEsWUFBWVMsT0FBTyxDQUFDQyxTQUFTLEdBQUdWLFlBQVlTLE9BQU8sQ0FBQ0UsWUFBWTtRQUNwRSxDQUFDO0lBQ0wsR0FBRztRQUFDeEI7S0FBYztJQUdsQixNQUFNeUIscUJBQXFCLENBQUNDLElBQU07UUFDOUJBLEVBQUVDLGNBQWM7UUFDaEJiLE9BQU9DLElBQUksQ0FBQyxlQUFlO1lBQ3ZCYSxNQUFNMUI7WUFDTjJCLFNBQVM5QjtZQUNUaUIsU0FBU1Y7UUFDYjtRQUNBSCxXQUFXO0lBQ2Y7SUFFQSxNQUFNMkIsZ0JBQWdCLENBQUNKLElBQU07UUFDekIsTUFBTSxFQUFFSCxVQUFTLEVBQUUsR0FBR0csRUFBRUssTUFBTTtRQUc5QixJQUFJUixhQUFhLE9BQU8sQ0FBQ2Qsa0JBQWtCO1lBQ3ZDQyxvQkFBb0IsSUFBSTtZQUN4QixNQUFNc0Isa0JBQWtCckIsZUFBZTtZQUV2Q0csT0FBT0MsSUFBSSxDQUFDLGVBQWU7Z0JBQUVDLFNBQVNWO2dCQUFhVyxPQUFPZTtZQUFnQjtZQUUxRWxCLE9BQU9JLEVBQUUsQ0FBQyxlQUFlLENBQUNDLE9BQVM7Z0JBQy9CLElBQUlmLFlBQVk2QixNQUFNLEtBQUtkLEtBQUtjLE1BQU0sRUFBRTtvQkFDcENyQixnQkFBZ0JvQjtnQkFDcEIsQ0FBQztnQkFDRDNCLGVBQWVjO2dCQUNmVCxvQkFBb0IsS0FBSztZQUM3QjtRQUNKLENBQUM7SUFDTDtJQUVBLE1BQU13QixvQkFBb0IsSUFBTTtRQUM1QixPQUFPOUIsWUFBWStCLEdBQUcsQ0FBQyxDQUFDQyxNQUFRO1lBQzVCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS0YsSUFBSUcsVUFBVTtZQUNwQyxNQUFNQyxRQUFRSCxLQUFLSSxXQUFXLEdBQUdDLFFBQVEsR0FBR0MsUUFBUSxDQUFDLEdBQUc7WUFDeEQsTUFBTUMsVUFBVVAsS0FBS1EsYUFBYSxHQUFHSCxRQUFRLEdBQUdDLFFBQVEsQ0FBQyxHQUFHO1lBRTVELE1BQU1HLGdCQUFnQixDQUFDQyxTQUFXO2dCQUM5QixPQUFRQTtvQkFDSixLQUFLaEQ7d0JBQ0QsT0FBTztvQkFDWCxLQUFLO3dCQUNELE9BQU87b0JBQ1g7d0JBQ0ksT0FBTztnQkFDZjtZQUNKO1lBRUEscUJBQU8sOERBQUNQO2dCQUE2QkUsU0FBU29ELGNBQWNWLElBQUlXLE1BQU07MEJBQ2xFLDRFQUFDcEQ7b0JBQVFELFNBQVNvRCxjQUFjVixJQUFJVyxNQUFNOztzQ0FDdEMsOERBQUNDO3NDQUFHWixJQUFJbEMsT0FBTzs7Ozs7O3NDQUNmLDhEQUFDK0M7c0NBQU1ULFFBQVEsTUFBTUk7Ozs7Ozs7Ozs7OztlQUhEUixJQUFJYyxHQUFHOzs7OztRQU12QztJQUNKO0lBRUEscUJBQ0ksOERBQUNoRTs7MEJBQ0csOERBQUNFOzs7OzswQkFHRCw4REFBQ0M7O2tDQUNHLDhEQUFDQzs7MENBQ0csOERBQUNDO2dDQUNHNEQsS0FBS3RDO2dDQUNMdUMsVUFBVXRCOzBDQUNUSTs7Ozs7OzBDQUVMLDhEQUFDbEQsNEVBQVlBO2dDQUNUcUUsT0FBT25EO2dDQUNQQyxZQUFZQTs7Ozs7Ozs7Ozs7O2tDQUVwQiw4REFBQ1A7d0JBQU8wRCxTQUFTN0I7a0NBQ2IsNEVBQUN4QywyREFBWUE7NEJBQUNjLElBQUk7NEJBQVF3RCxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtwRCxDQUFDO0dBN0h1QnpEOztRQUNMZixzREFBT0E7UUFPRUQsd0RBQWNBOzs7TUFSbEJnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jvb20vUm9vbS5qc3g/NDE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGlvIH0gZnJvbSAnc29ja2V0LmlvLWNsaWVudCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9ob29rcy9yZWR1eCdcclxuaW1wb3J0IHVzZUF1dGggZnJvbSAnLi4vLi4vaG9va3MvdXNlQXV0aCdcclxuaW1wb3J0IElucHV0TWVzc2FnZSBmcm9tICcuLi9pbnRlcmZhY2UvaW5wdXRNZXNzYWdlL0lucHV0TWVzc2FnZSdcclxuaW1wb3J0IEljb25TZWxlY3RvciBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvaWNvbnMnXHJcblxyXG5jb25zdCBSb29tV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuYFxyXG5cclxuY29uc3QgUm9vbUluZm8gPSBzdHlsZWQuZGl2YFxyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VyZmFjZS1jb2xvcik7XHJcbmBcclxuXHJcbmNvbnN0IENvbnRhaW5lckNvbnRyb2xsZXJzID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDc4MnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuYFxyXG5cclxuY29uc3QgTWVzc2FnZXNXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHJvdy1nYXA6IDVweDtcclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcclxuICAgIH1cclxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBNZXNzYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAke3Byb3BzID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHByb3BzLnZhcmlhbnQpIHtcclxuICAgICAgICAgICAgY2FzZSAnZmlyc3QtdXNlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIGNhc2UgJ3NlY29uZC11c2VyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICBjYXNlICdzeXN0ZW0nOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICB9XHJcbiAgICB9fVxyXG5gXHJcblxyXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuICAgICR7cHJvcHMgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAocHJvcHMudmFyaWFudCkge1xyXG4gICAgICAgICAgICBjYXNlICdmaXJzdC11c2VyJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kLXVzZXInOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgY2FzZSAnc3lzdGVtJzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3BhY2l0eS1wcmltYXJ5LXRleHQtY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgfVxyXG4gICAgfX1cclxuYFxyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTRweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICAgIHN2Z3tcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvb20oKSB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSB1c2VBdXRoKClcclxuXHJcbiAgICBjb25zdCBbcm9vbUlzTG9hZGluZywgc2V0Um9vbUlzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW2FsbE1lc3NhZ2VzLCBzZXRBbGxNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IHsgY3VycmVudFJvb20gfSA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnJvb21TbGljZSlcclxuICAgIGNvbnN0IFtmZXRjaGluZ01lc3NhZ2VzLCBzZXRGZXRjaGluZ01lc3NhZ2VzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbbWVzc2FnZUxpbWl0LCBzZXRNZXNzYWdlTGltaXRdID0gdXNlU3RhdGUoNTApXHJcblxyXG4gICAgY29uc3QgbWVzc2FnZXNSZWYgPSB1c2VSZWYobnVsbClcclxuXHJcbiAgICBjb25zdCBzb2NrZXQgPSBpbygnaHR0cDovL2xvY2FsaG9zdDoyMDAwJylcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvY2tldC5lbWl0KCdqb2luUm9vbScsIHsgcm9vbV9pZDogY3VycmVudFJvb20gfSlcclxuXHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ2dldE1lc3NhZ2VzJywgeyByb29tX2lkOiBjdXJyZW50Um9vbSwgbGltaXQ6IG1lc3NhZ2VMaW1pdCB9KVxyXG5cclxuICAgICAgICBzb2NrZXQub24oJ2FsbE1lc3NhZ2VzJywgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgc2V0QWxsTWVzc2FnZXMoZGF0YSlcclxuICAgICAgICAgICAgc2V0RmV0Y2hpbmdNZXNzYWdlcyhmYWxzZSlcclxuICAgICAgICAgICAgc2V0Um9vbUlzTG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzb2NrZXQub24oJ25ld01lc3NhZ2UnLCAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBbGxNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCBtZXNzYWdlXSlcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdqb2luUm9vbScpXHJcbiAgICAgICAgICAgIHNvY2tldC5vZmYoJ2dldE1lc3NhZ2VzJylcclxuICAgICAgICAgICAgc2V0Um9vbUlzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtjdXJyZW50Um9vbV0pXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFyb29tSXNMb2FkaW5nKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VzUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gbWVzc2FnZXNSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3Jvb21Jc0xvYWRpbmddKVxyXG5cclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdzZW5kTWVzc2FnZScsIHtcclxuICAgICAgICAgICAgdGV4dDogbWVzc2FnZSxcclxuICAgICAgICAgICAgdXNlcl9pZDogaWQsXHJcbiAgICAgICAgICAgIHJvb21faWQ6IGN1cnJlbnRSb29tXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRNZXNzYWdlKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNjcm9sbEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSBlLnRhcmdldDtcclxuXHJcblxyXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPD0gMTAwICYmICFmZXRjaGluZ01lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgIHNldEZldGNoaW5nTWVzc2FnZXModHJ1ZSlcclxuICAgICAgICAgICAgY29uc3QgbmV3TWVzc2FnZUxpbWl0ID0gbWVzc2FnZUxpbWl0ICsgNTBcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KCdnZXRNZXNzYWdlcycsIHsgcm9vbV9pZDogY3VycmVudFJvb20sIGxpbWl0OiBuZXdNZXNzYWdlTGltaXQgfSlcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbignYWxsTWVzc2FnZXMnLCAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbE1lc3NhZ2VzLmxlbmd0aCAhPT0gZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRNZXNzYWdlTGltaXQobmV3TWVzc2FnZUxpbWl0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0QWxsTWVzc2FnZXMoZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldEZldGNoaW5nTWVzc2FnZXMoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckFsbE1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhbGxNZXNzYWdlcy5tYXAoKG1zZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobXNnLmNyZWF0ZWRfYXQpXHJcbiAgICAgICAgICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKVxyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gZGF0ZS5nZXRVVENNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JNZXNzYWdlID0gKGF1dGhvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChhdXRob3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIGlkOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ZpcnN0LXVzZXInXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc3lzdGVtJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdzeXN0ZW0nXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnc2Vjb25kLXVzZXInXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZVdyYXBwZXIga2V5PXttc2cuX2lkfSB2YXJpYW50PXthdXRob3JNZXNzYWdlKG1zZy5hdXRob3IpfT5cclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIHZhcmlhbnQ9e2F1dGhvck1lc3NhZ2UobXNnLmF1dGhvcil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnttc2cubWVzc2FnZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2hvdXJzICsgJzonICsgbWludXRlc308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgICAgICAgIDwvTWVzc2FnZVdyYXBwZXI+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb29tV3JhcHBlcj5cclxuICAgICAgICAgICAgPFJvb21JbmZvPlxyXG5cclxuICAgICAgICAgICAgPC9Sb29tSW5mbz5cclxuICAgICAgICAgICAgPENvbnRhaW5lckNvbnRyb2xsZXJzPlxyXG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZXNXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17bWVzc2FnZXNSZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2Nyb2xsPXtzY3JvbGxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckFsbE1lc3NhZ2VzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9NZXNzYWdlc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZT17c2V0TWVzc2FnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzZW5kTWVzc2FnZUhhbmRsZXJ9ID5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvblNlbGVjdG9yIGlkPXsnc2VuZCd9IGNvbG9yPScjZmZmJyAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyQ29udHJvbGxlcnMgPlxyXG4gICAgICAgIDwvUm9vbVdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbyIsInN0eWxlZCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXV0aCIsIklucHV0TWVzc2FnZSIsIkljb25TZWxlY3RvciIsIlJvb21XcmFwcGVyIiwiZGl2IiwiUm9vbUluZm8iLCJDb250YWluZXJDb250cm9sbGVycyIsIkNvbnRhaW5lciIsIk1lc3NhZ2VzV3JhcHBlciIsIk1lc3NhZ2VXcmFwcGVyIiwicHJvcHMiLCJ2YXJpYW50IiwiTWVzc2FnZSIsIkJ1dHRvbiIsImJ1dHRvbiIsIlJvb20iLCJpZCIsInJvb21Jc0xvYWRpbmciLCJzZXRSb29tSXNMb2FkaW5nIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJhbGxNZXNzYWdlcyIsInNldEFsbE1lc3NhZ2VzIiwiY3VycmVudFJvb20iLCJzdGF0ZSIsInJvb21TbGljZSIsImZldGNoaW5nTWVzc2FnZXMiLCJzZXRGZXRjaGluZ01lc3NhZ2VzIiwibWVzc2FnZUxpbWl0Iiwic2V0TWVzc2FnZUxpbWl0IiwibWVzc2FnZXNSZWYiLCJzb2NrZXQiLCJlbWl0Iiwicm9vbV9pZCIsImxpbWl0Iiwib24iLCJkYXRhIiwicHJldk1lc3NhZ2VzIiwib2ZmIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInNlbmRNZXNzYWdlSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRleHQiLCJ1c2VyX2lkIiwic2Nyb2xsSGFuZGxlciIsInRhcmdldCIsIm5ld01lc3NhZ2VMaW1pdCIsImxlbmd0aCIsInJlbmRlckFsbE1lc3NhZ2VzIiwibWFwIiwibXNnIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiaG91cnMiLCJnZXRVVENIb3VycyIsInRvU3RyaW5nIiwicGFkU3RhcnQiLCJtaW51dGVzIiwiZ2V0VVRDTWludXRlcyIsImF1dGhvck1lc3NhZ2UiLCJhdXRob3IiLCJwIiwic3BhbiIsIl9pZCIsInJlZiIsIm9uU2Nyb2xsIiwidmFsdWUiLCJvbkNsaWNrIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Room/Room.jsx\n"));

/***/ })

});