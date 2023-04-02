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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Room; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useAuth */ \"./hooks/useAuth.js\");\n/* harmony import */ var _interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interface/inputMessage/InputMessage */ \"./components/interface/inputMessage/InputMessage.jsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 100%;\\n    justify-content: flex-end;\\n    background-color: var(--body-background-color);\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    width: 728px;\\n    margin: 0 auto;\\n    overflow: auto;\\n    row-gap: 5px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    height: 37px;\\n    width: 37px;\\n    background-color: green;\\n    bottom: 0;\\n    right: 0;\\n    cursor: pointer;\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    flex-shrink: 0;\\n    display: flex;\\n    align-items: center;\\n    height: 56px;\\n    width: 100%;\\n    background-color: var(--surface-color);\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    display: flex;\\n    align-items: center;\\n    justify-content: \",\n        \";\\n\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    padding: 5px 8px;\\n    background-color: var(--surface-color);\\n    border-radius: 8px;\\n    p{\\n        font-size: 18px;\\n    }\\n\"\n    ]);\n    _templateObject5 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst RoomWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject());\n_c = RoomWrapper;\nconst MessagesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject1());\n_c1 = MessagesWrapper;\nconst Button = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject2());\n_c2 = Button;\nconst RoomInfo = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject3());\n_c3 = RoomInfo;\nconst MessageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject4(), (props)=>props.user ? \"flex-end\" : \"flex-start\");\n_c4 = MessageWrapper;\nconst Message = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div(_templateObject5());\n_c5 = Message;\nfunction Room() {\n    _s();\n    const { id  } = (0,_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [allMessages, setAllMessages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { currentRoom  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.roomSlice);\n    const socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:2000\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        socket.emit(\"joinRoom\", {\n            room_id: currentRoom\n        });\n        socket.emit(\"getMessages\", {\n            room_id: currentRoom\n        });\n        socket.on(\"allMessages\", (data)=>{\n            setAllMessages(data);\n        });\n        socket.on(\"newMessage\", (message)=>{\n            setAllMessages((prevMessages)=>[\n                    ...prevMessages,\n                    message\n                ]);\n        });\n        return ()=>{\n            socket.off(\"joinRoom\");\n            socket.off(\"getMessages\");\n        };\n    }, [\n        currentRoom\n    ]);\n    const sendMessageHandler = ()=>{\n        socket.emit(\"sendMessage\", {\n            text: message,\n            user_id: id,\n            room_id: currentRoom\n        });\n    };\n    const renderAllMessages = ()=>{\n        return allMessages.map((msg)=>{\n            const date = new Date(msg.created_at);\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessageWrapper, {\n                user: id === msg.author,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Message, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: msg.message\n                        }, msg._id, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                            children: date\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 97,\n                columnNumber: 20\n            }, this);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomWrapper, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RoomInfo, {}, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 108,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MessagesWrapper, {\n                children: renderAllMessages()\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_interface_inputMessage_InputMessage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                value: message,\n                setMessage: setMessage\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 114,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Button, {\n                onClick: ()=>sendMessageHandler()\n            }, void 0, false, {\n                fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n                lineNumber: 117,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\Room\\\\Room.jsx\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, this);\n}\n_s(Room, \"2y0mnVWmXlXta1wxbc9N09Kcccs=\", false, function() {\n    return [\n        _hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector\n    ];\n});\n_c6 = Room;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"RoomWrapper\");\n$RefreshReg$(_c1, \"MessagesWrapper\");\n$RefreshReg$(_c2, \"Button\");\n$RefreshReg$(_c3, \"RoomInfo\");\n$RefreshReg$(_c4, \"MessageWrapper\");\n$RefreshReg$(_c5, \"Message\");\n$RefreshReg$(_c6, \"Room\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvb20vUm9vbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ2I7QUFDQztBQUNZO0FBQ1Q7QUFDd0I7QUFFakUsTUFBTVEsY0FBY0osNkRBQVU7S0FBeEJJO0FBUU4sTUFBTUUsa0JBQWtCTiw2REFBVTtNQUE1Qk07QUFTTixNQUFNQyxTQUFTUCw2REFBVTtNQUFuQk87QUFVTixNQUFNQyxXQUFXUiw2REFBVTtNQUFyQlE7QUFTTixNQUFNQyxpQkFBaUJULDZEQUFVLHFCQUdWVSxDQUFBQSxRQUFTQSxNQUFNQyxJQUFJLEdBQUcsYUFBYSxZQUFZO01BSGhFRjtBQU1OLE1BQU1HLFVBQVVaLDZEQUFVO01BQXBCWTtBQVNTLFNBQVNDLE9BQU87O0lBQzNCLE1BQU0sRUFBRUMsR0FBRSxFQUFFLEdBQUdaLDBEQUFPQTtJQUN0QixNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDLEVBQUU7SUFDakQsTUFBTSxFQUFFcUIsWUFBVyxFQUFFLEdBQUdsQiw0REFBY0EsQ0FBQ21CLENBQUFBLFFBQVNBLE1BQU1DLFNBQVM7SUFFL0QsTUFBTUMsU0FBU3ZCLG9EQUFFQSxDQUFDO0lBRWxCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ1p5QixPQUFPQyxJQUFJLENBQUMsWUFBWTtZQUFFQyxTQUFTTDtRQUFZO1FBRS9DRyxPQUFPQyxJQUFJLENBQUMsZUFBZTtZQUFFQyxTQUFTTDtRQUFZO1FBRWxERyxPQUFPRyxFQUFFLENBQUMsZUFBZSxDQUFDQyxPQUFTO1lBQy9CUixlQUFlUTtRQUNuQjtRQUVBSixPQUFPRyxFQUFFLENBQUMsY0FBYyxDQUFDVixVQUFZO1lBQ2pDRyxlQUFlLENBQUNTLGVBQWlCO3VCQUFJQTtvQkFBY1o7aUJBQVE7UUFDL0Q7UUFFQSxPQUFPLElBQU07WUFDVE8sT0FBT00sR0FBRyxDQUFDO1lBQ1hOLE9BQU9NLEdBQUcsQ0FBQztRQUNmO0lBQ0osR0FBRztRQUFDVDtLQUFZO0lBRWhCLE1BQU1VLHFCQUFxQixJQUFNO1FBQzdCUCxPQUFPQyxJQUFJLENBQUMsZUFBZTtZQUN2Qk8sTUFBTWY7WUFDTmdCLFNBQVNqQjtZQUNUVSxTQUFTTDtRQUNiO0lBQ0o7SUFFQSxNQUFNYSxvQkFBb0IsSUFBTTtRQUM1QixPQUFPZixZQUFZZ0IsR0FBRyxDQUFDLENBQUNDLE1BQVE7WUFDNUIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRixJQUFJRyxVQUFVO1lBQ3BDLHFCQUFPLDhEQUFDNUI7Z0JBQWVFLE1BQU1HLE9BQU9vQixJQUFJSSxNQUFNOzBCQUMxQyw0RUFBQzFCOztzQ0FDRyw4REFBQzJCO3NDQUFpQkwsSUFBSW5CLE9BQU87MkJBQXJCbUIsSUFBSU0sR0FBRzs7Ozs7c0NBQ2YsOERBQUNDO3NDQUFNTjs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFHbkI7SUFDSjtJQUVBLHFCQUNJLDhEQUFDL0I7OzBCQUNHLDhEQUFDSTs7Ozs7MEJBR0QsOERBQUNGOzBCQUNJMEI7Ozs7OzswQkFFTCw4REFBQzdCLDRFQUFZQTtnQkFDVHVDLE9BQU8zQjtnQkFDUEMsWUFBWUE7Ozs7OzswQkFDaEIsOERBQUNUO2dCQUNHb0MsU0FBUyxJQUFNZDs7Ozs7Ozs7Ozs7O0FBRy9CLENBQUM7R0E5RHVCaEI7O1FBQ0xYLHNEQUFPQTtRQUdFRCx3REFBY0E7OztNQUpsQlkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb29tL1Jvb20uanN4PzQxODYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJy4uLy4uL2hvb2tzL3JlZHV4J1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi8uLi9ob29rcy91c2VBdXRoJ1xyXG5pbXBvcnQgSW5wdXRNZXNzYWdlIGZyb20gJy4uL2ludGVyZmFjZS9pbnB1dE1lc3NhZ2UvSW5wdXRNZXNzYWdlJ1xyXG5cclxuY29uc3QgUm9vbVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQtY29sb3IpO1xyXG5gXHJcblxyXG5jb25zdCBNZXNzYWdlc1dyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNzI4cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcm93LWdhcDogNXB4O1xyXG5gXHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAzN3B4O1xyXG4gICAgd2lkdGg6IDM3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5gXHJcblxyXG5jb25zdCBSb29tSW5mbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcclxuYFxyXG5cclxuY29uc3QgTWVzc2FnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICR7cHJvcHMgPT4gcHJvcHMudXNlciA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCd9O1xyXG5gXHJcblxyXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLmRpdmBcclxuICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSb29tKCkge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlQXV0aCgpXHJcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcclxuICAgIGNvbnN0IFthbGxNZXNzYWdlcywgc2V0QWxsTWVzc2FnZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCB7IGN1cnJlbnRSb29tIH0gPSB1c2VBcHBTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5yb29tU2xpY2UpXHJcblxyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oJ2h0dHA6Ly9sb2NhbGhvc3Q6MjAwMCcpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb2NrZXQuZW1pdCgnam9pblJvb20nLCB7IHJvb21faWQ6IGN1cnJlbnRSb29tIH0pXHJcblxyXG4gICAgICAgIHNvY2tldC5lbWl0KCdnZXRNZXNzYWdlcycsIHsgcm9vbV9pZDogY3VycmVudFJvb20gfSlcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCdhbGxNZXNzYWdlcycsIChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFsbE1lc3NhZ2VzKGRhdGEpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc29ja2V0Lm9uKCduZXdNZXNzYWdlJywgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICAgICAgc2V0QWxsTWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgbWVzc2FnZV0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgc29ja2V0Lm9mZignam9pblJvb20nKVxyXG4gICAgICAgICAgICBzb2NrZXQub2ZmKCdnZXRNZXNzYWdlcycpXHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2N1cnJlbnRSb29tXSlcclxuXHJcbiAgICBjb25zdCBzZW5kTWVzc2FnZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRNZXNzYWdlJywge1xyXG4gICAgICAgICAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgICAgICAgICB1c2VyX2lkOiBpZCxcclxuICAgICAgICAgICAgcm9vbV9pZDogY3VycmVudFJvb21cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlckFsbE1lc3NhZ2VzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBhbGxNZXNzYWdlcy5tYXAoKG1zZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobXNnLmNyZWF0ZWRfYXQpXHJcbiAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZVdyYXBwZXIgdXNlcj17aWQgPT09IG1zZy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAgPE1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAga2V5PXttc2cuX2lkfT57bXNnLm1lc3NhZ2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntkYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvTWVzc2FnZT5cclxuICAgICAgICAgICAgPC9NZXNzYWdlV3JhcHBlcj5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvb21XcmFwcGVyPlxyXG4gICAgICAgICAgICA8Um9vbUluZm8+XHJcblxyXG4gICAgICAgICAgICA8L1Jvb21JbmZvPlxyXG4gICAgICAgICAgICA8TWVzc2FnZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlckFsbE1lc3NhZ2VzKCl9XHJcbiAgICAgICAgICAgIDwvTWVzc2FnZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICA8SW5wdXRNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bWVzc2FnZX1cclxuICAgICAgICAgICAgICAgIHNldE1lc3NhZ2U9e3NldE1lc3NhZ2V9IC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNlbmRNZXNzYWdlSGFuZGxlcigpfSAvPlxyXG4gICAgICAgIDwvUm9vbVdyYXBwZXI+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJpbyIsInN0eWxlZCIsInVzZUFwcFNlbGVjdG9yIiwidXNlQXV0aCIsIklucHV0TWVzc2FnZSIsIlJvb21XcmFwcGVyIiwiZGl2IiwiTWVzc2FnZXNXcmFwcGVyIiwiQnV0dG9uIiwiUm9vbUluZm8iLCJNZXNzYWdlV3JhcHBlciIsInByb3BzIiwidXNlciIsIk1lc3NhZ2UiLCJSb29tIiwiaWQiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImFsbE1lc3NhZ2VzIiwic2V0QWxsTWVzc2FnZXMiLCJjdXJyZW50Um9vbSIsInN0YXRlIiwicm9vbVNsaWNlIiwic29ja2V0IiwiZW1pdCIsInJvb21faWQiLCJvbiIsImRhdGEiLCJwcmV2TWVzc2FnZXMiLCJvZmYiLCJzZW5kTWVzc2FnZUhhbmRsZXIiLCJ0ZXh0IiwidXNlcl9pZCIsInJlbmRlckFsbE1lc3NhZ2VzIiwibWFwIiwibXNnIiwiZGF0ZSIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiYXV0aG9yIiwicCIsIl9pZCIsInNwYW4iLCJ2YWx1ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Room/Room.jsx\n"));

/***/ })

});