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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authSlice\": function() { return /* binding */ authSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    email: null,\n    username: null,\n    image: null,\n    _id: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"authSlice\",\n    initialState,\n    reducers: {\n        setUser (state, action) {\n            state.email = action.payload.email;\n            state.username = action.payload.username;\n            state.image = action.payload.image;\n            state._id = action.payload._id;\n        },\n        removeUser (state, action) {}\n    }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (authSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9hdXRoU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsZUFBZTtJQUNqQkMsT0FBTyxJQUFJO0lBQ1hDLFVBQVUsSUFBSTtJQUNkQyxPQUFPLElBQUk7SUFDWEMsS0FBSyxJQUFJO0FBQ2I7QUFFTyxNQUFNQyxZQUFZTiw2REFBV0EsQ0FBQztJQUNqQ08sTUFBTTtJQUNOTjtJQUNBTyxVQUFVO1FBQ05DLFNBQVFDLEtBQUssRUFBRUMsTUFBTSxFQUFDO1lBQ2xCRCxNQUFNUixLQUFLLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsS0FBSztZQUNsQ1EsTUFBTVAsUUFBUSxHQUFHUSxPQUFPQyxPQUFPLENBQUNULFFBQVE7WUFDeENPLE1BQU1OLEtBQUssR0FBR08sT0FBT0MsT0FBTyxDQUFDUixLQUFLO1lBQ2xDTSxNQUFNTCxHQUFHLEdBQUdNLE9BQU9DLE9BQU8sQ0FBQ1AsR0FBRztRQUNsQztRQUNBUSxZQUFXSCxLQUFLLEVBQUVDLE1BQU0sRUFBQyxDQUV6QjtJQUNKO0FBQ0osR0FBRTtBQUVGLCtEQUFlTCxVQUFVUSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL2F1dGhTbGljZS5qcz81NjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgZW1haWw6IG51bGwsXHJcbiAgICB1c2VybmFtZTogbnVsbCxcclxuICAgIGltYWdlOiBudWxsLFxyXG4gICAgX2lkOiBudWxsLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ2F1dGhTbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIHNldFVzZXIoc3RhdGUsIGFjdGlvbil7XHJcbiAgICAgICAgICAgIHN0YXRlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQuZW1haWxcclxuICAgICAgICAgICAgc3RhdGUudXNlcm5hbWUgPSBhY3Rpb24ucGF5bG9hZC51c2VybmFtZVxyXG4gICAgICAgICAgICBzdGF0ZS5pbWFnZSA9IGFjdGlvbi5wYXlsb2FkLmltYWdlXHJcbiAgICAgICAgICAgIHN0YXRlLl9pZCA9IGFjdGlvbi5wYXlsb2FkLl9pZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVtb3ZlVXNlcihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJlbWFpbCIsInVzZXJuYW1lIiwiaW1hZ2UiLCJfaWQiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRVc2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlVXNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/authSlice.js\n"));

/***/ })

});