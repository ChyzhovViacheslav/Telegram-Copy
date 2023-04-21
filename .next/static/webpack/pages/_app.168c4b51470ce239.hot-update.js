"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/authSlice.js":
/*!*************************************!*\
  !*** ./store/reducers/authSlice.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": function() { return /* binding */ authSlice; },\n/* harmony export */   \"changeUserImage\": function() { return /* binding */ changeUserImage; },\n/* harmony export */   \"removeToken\": function() { return /* binding */ removeToken; },\n/* harmony export */   \"removeUser\": function() { return /* binding */ removeUser; },\n/* harmony export */   \"setToken\": function() { return /* binding */ setToken; },\n/* harmony export */   \"setUser\": function() { return /* binding */ setUser; },\n/* harmony export */   \"setUserInfo\": function() { return /* binding */ setUserInfo; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    email: null,\n    username: null,\n    images: null,\n    id: null,\n    accessToken: null,\n    refreshToken: null,\n    expiresAt: null,\n    firstname: null,\n    lastname: null,\n    bio: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"authSlice\",\n    initialState,\n    reducers: {\n        setUser (state, action) {\n            state.email = action.payload.email;\n            state.username = action.payload.username;\n            state.images = action.payload.images;\n            state.id = action.payload.id;\n            state.firstname = action.payload.firstname;\n            state.lastname = action.payload.lastname;\n            state.bio = action.payload.bio;\n        },\n        removeUser (state) {\n            state.email = null;\n            state.username = null;\n            state.images = null;\n            state.id = null;\n            state.firstname = null;\n            state.lastname = null;\n            state.bio = null;\n        },\n        setToken (state, action) {\n            state.accessToken = action.payload.accessToken;\n            state.expiresAt = action.payload.expiresAt;\n            state.refreshToken = action.payload.refreshToken;\n        },\n        removeToken (state) {\n            state.accessToken = null;\n            state.expiresAt = null;\n            state.refreshToken = null;\n        },\n        seteUserImage (state, action) {\n            state.images = [\n                action.payload,\n                ...state.images\n            ];\n        },\n        setUserInfo (state, action) {\n            state.username = action.payload.username;\n            state.firstname = action.payload.firstname;\n            state.lastname = action.payload.lastname;\n            state.bio = action.payload.bio;\n        }\n    }\n});\nconst { setUser , removeUser , setToken , removeToken , changeUserImage , setUserInfo  } = authSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hdXRoU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsZUFBZTtJQUNqQkMsT0FBTyxJQUFJO0lBQ1hDLFVBQVUsSUFBSTtJQUNkQyxRQUFRLElBQUk7SUFDWkMsSUFBSSxJQUFJO0lBQ1JDLGFBQWEsSUFBSTtJQUNqQkMsY0FBYyxJQUFJO0lBQ2xCQyxXQUFXLElBQUk7SUFDZkMsV0FBVyxJQUFJO0lBQ2ZDLFVBQVUsSUFBSTtJQUNkQyxLQUFLLElBQUk7QUFDYjtBQUVPLE1BQU1DLFlBQVlaLDZEQUFXQSxDQUFDO0lBQ2pDYSxNQUFNO0lBQ05aO0lBQ0FhLFVBQVU7UUFDTkMsU0FBUUMsS0FBSyxFQUFFQyxNQUFNLEVBQUM7WUFDbEJELE1BQU1kLEtBQUssR0FBR2UsT0FBT0MsT0FBTyxDQUFDaEIsS0FBSztZQUNsQ2MsTUFBTWIsUUFBUSxHQUFHYyxPQUFPQyxPQUFPLENBQUNmLFFBQVE7WUFDeENhLE1BQU1aLE1BQU0sR0FBR2EsT0FBT0MsT0FBTyxDQUFDZCxNQUFNO1lBQ3BDWSxNQUFNWCxFQUFFLEdBQUdZLE9BQU9DLE9BQU8sQ0FBQ2IsRUFBRTtZQUM1QlcsTUFBTVAsU0FBUyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULFNBQVM7WUFDMUNPLE1BQU1OLFFBQVEsR0FBR08sT0FBT0MsT0FBTyxDQUFDUixRQUFRO1lBQ3hDTSxNQUFNTCxHQUFHLEdBQUdNLE9BQU9DLE9BQU8sQ0FBQ1AsR0FBRztRQUNsQztRQUNBUSxZQUFXSCxLQUFLLEVBQUM7WUFDYkEsTUFBTWQsS0FBSyxHQUFHLElBQUk7WUFDbEJjLE1BQU1iLFFBQVEsR0FBRyxJQUFJO1lBQ3JCYSxNQUFNWixNQUFNLEdBQUcsSUFBSTtZQUNuQlksTUFBTVgsRUFBRSxHQUFHLElBQUk7WUFDZlcsTUFBTVAsU0FBUyxHQUFHLElBQUk7WUFDdEJPLE1BQU1OLFFBQVEsR0FBRyxJQUFJO1lBQ3JCTSxNQUFNTCxHQUFHLEdBQUcsSUFBSTtRQUNwQjtRQUNBUyxVQUFTSixLQUFLLEVBQUVDLE1BQU0sRUFBQztZQUNuQkQsTUFBTVYsV0FBVyxHQUFHVyxPQUFPQyxPQUFPLENBQUNaLFdBQVc7WUFDOUNVLE1BQU1SLFNBQVMsR0FBR1MsT0FBT0MsT0FBTyxDQUFDVixTQUFTO1lBQzFDUSxNQUFNVCxZQUFZLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsWUFBWTtRQUNwRDtRQUNBYyxhQUFZTCxLQUFLLEVBQUM7WUFDZEEsTUFBTVYsV0FBVyxHQUFHLElBQUk7WUFDeEJVLE1BQU1SLFNBQVMsR0FBRyxJQUFJO1lBQ3RCUSxNQUFNVCxZQUFZLEdBQUcsSUFBSTtRQUM3QjtRQUNBZSxlQUFjTixLQUFLLEVBQUVDLE1BQU0sRUFBQztZQUN4QkQsTUFBTVosTUFBTSxHQUFHO2dCQUFDYSxPQUFPQyxPQUFPO21CQUFLRixNQUFNWixNQUFNO2FBQUM7UUFDcEQ7UUFDQW1CLGFBQVlQLEtBQUssRUFBRUMsTUFBTSxFQUFDO1lBQ3RCRCxNQUFNYixRQUFRLEdBQUdjLE9BQU9DLE9BQU8sQ0FBQ2YsUUFBUTtZQUN4Q2EsTUFBTVAsU0FBUyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULFNBQVM7WUFDMUNPLE1BQU1OLFFBQVEsR0FBR08sT0FBT0MsT0FBTyxDQUFDUixRQUFRO1lBQ3hDTSxNQUFNTCxHQUFHLEdBQUdNLE9BQU9DLE9BQU8sQ0FBQ1AsR0FBRztRQUNsQztJQUNKO0FBQ0osR0FBRTtBQUNLLE1BQU0sRUFBQ0ksUUFBTyxFQUFFSSxXQUFVLEVBQUVDLFNBQVEsRUFBRUMsWUFBVyxFQUFFRyxnQkFBZSxFQUFFRCxZQUFXLEVBQUMsR0FBR1gsVUFBVWEsT0FBTztBQUMzRywrREFBZWIsVUFBVWMsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS9yZWR1Y2Vycy9hdXRoU2xpY2UuanM/NTY4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIGVtYWlsOiBudWxsLFxyXG4gICAgdXNlcm5hbWU6IG51bGwsXHJcbiAgICBpbWFnZXM6IG51bGwsXHJcbiAgICBpZDogbnVsbCxcclxuICAgIGFjY2Vzc1Rva2VuOiBudWxsLFxyXG4gICAgcmVmcmVzaFRva2VuOiBudWxsLFxyXG4gICAgZXhwaXJlc0F0OiBudWxsLFxyXG4gICAgZmlyc3RuYW1lOiBudWxsLFxyXG4gICAgbGFzdG5hbWU6IG51bGwsXHJcbiAgICBiaW86IG51bGxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdhdXRoU2xpY2UnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXRVc2VyKHN0YXRlLCBhY3Rpb24pe1xyXG4gICAgICAgICAgICBzdGF0ZS5lbWFpbCA9IGFjdGlvbi5wYXlsb2FkLmVtYWlsXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWVcclxuICAgICAgICAgICAgc3RhdGUuaW1hZ2VzID0gYWN0aW9uLnBheWxvYWQuaW1hZ2VzXHJcbiAgICAgICAgICAgIHN0YXRlLmlkID0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgICAgICAgc3RhdGUuZmlyc3RuYW1lID0gYWN0aW9uLnBheWxvYWQuZmlyc3RuYW1lXHJcbiAgICAgICAgICAgIHN0YXRlLmxhc3RuYW1lID0gYWN0aW9uLnBheWxvYWQubGFzdG5hbWVcclxuICAgICAgICAgICAgc3RhdGUuYmlvID0gYWN0aW9uLnBheWxvYWQuYmlvXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVVc2VyKHN0YXRlKXtcclxuICAgICAgICAgICAgc3RhdGUuZW1haWwgPSBudWxsXHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gbnVsbFxyXG4gICAgICAgICAgICBzdGF0ZS5pbWFnZXMgPSBudWxsXHJcbiAgICAgICAgICAgIHN0YXRlLmlkID0gbnVsbFxyXG4gICAgICAgICAgICBzdGF0ZS5maXJzdG5hbWUgPSBudWxsXHJcbiAgICAgICAgICAgIHN0YXRlLmxhc3RuYW1lID0gbnVsbFxyXG4gICAgICAgICAgICBzdGF0ZS5iaW8gPSBudWxsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRUb2tlbihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICAgc3RhdGUuYWNjZXNzVG9rZW4gPSBhY3Rpb24ucGF5bG9hZC5hY2Nlc3NUb2tlblxyXG4gICAgICAgICAgICBzdGF0ZS5leHBpcmVzQXQgPSBhY3Rpb24ucGF5bG9hZC5leHBpcmVzQXRcclxuICAgICAgICAgICAgc3RhdGUucmVmcmVzaFRva2VuID0gYWN0aW9uLnBheWxvYWQucmVmcmVzaFRva2VuXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVUb2tlbihzdGF0ZSl7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjY2Vzc1Rva2VuID0gbnVsbFxyXG4gICAgICAgICAgICBzdGF0ZS5leHBpcmVzQXQgPSBudWxsXHJcbiAgICAgICAgICAgIHN0YXRlLnJlZnJlc2hUb2tlbiA9IG51bGxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldGVVc2VySW1hZ2Uoc3RhdGUsIGFjdGlvbil7XHJcbiAgICAgICAgICAgIHN0YXRlLmltYWdlcyA9IFthY3Rpb24ucGF5bG9hZCwgLi4uc3RhdGUuaW1hZ2VzXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VXNlckluZm8oc3RhdGUsIGFjdGlvbil7XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXJuYW1lID0gYWN0aW9uLnBheWxvYWQudXNlcm5hbWVcclxuICAgICAgICAgICAgc3RhdGUuZmlyc3RuYW1lID0gYWN0aW9uLnBheWxvYWQuZmlyc3RuYW1lXHJcbiAgICAgICAgICAgIHN0YXRlLmxhc3RuYW1lID0gYWN0aW9uLnBheWxvYWQubGFzdG5hbWVcclxuICAgICAgICAgICAgc3RhdGUuYmlvID0gYWN0aW9uLnBheWxvYWQuYmlvXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY29uc3Qge3NldFVzZXIsIHJlbW92ZVVzZXIsIHNldFRva2VuLCByZW1vdmVUb2tlbiwgY2hhbmdlVXNlckltYWdlLCBzZXRVc2VySW5mb30gPSBhdXRoU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImVtYWlsIiwidXNlcm5hbWUiLCJpbWFnZXMiLCJpZCIsImFjY2Vzc1Rva2VuIiwicmVmcmVzaFRva2VuIiwiZXhwaXJlc0F0IiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJiaW8iLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlVXNlciIsInNldFRva2VuIiwicmVtb3ZlVG9rZW4iLCJzZXRlVXNlckltYWdlIiwic2V0VXNlckluZm8iLCJjaGFuZ2VVc2VySW1hZ2UiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/authSlice.js\n"));

/***/ })

});