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

/***/ "./store/reducers/roomSlice.js":
/*!*************************************!*\
  !*** ./store/reducers/roomSlice.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cha\": function() { return /* binding */ cha; },\n/* harmony export */   \"changeCurrentRoom\": function() { return /* binding */ changeCurrentRoom; },\n/* harmony export */   \"roomSlice\": function() { return /* binding */ roomSlice; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    currentRoom: null,\n    currentUser: null\n};\nconst roomSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"roomSlice\",\n    initialState,\n    reducers: {\n        changeCurrentRoom (state, action) {\n            state.currentRoom = action.payload;\n        },\n        changeCurrentUser (state, action) {\n            state.currentUser = action.payload;\n        }\n    }\n});\nconst { changeCurrentRoom , cha  } = roomSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (roomSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9yb29tU2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxlQUFlO0lBQ2pCQyxhQUFhLElBQUk7SUFDakJDLGFBQWEsSUFBSTtBQUNyQjtBQUVPLE1BQU1DLFlBQVlKLDZEQUFXQSxDQUFDO0lBQ2pDSyxNQUFNO0lBQ05KO0lBQ0FLLFVBQVU7UUFDTkMsbUJBQWtCQyxLQUFLLEVBQUVDLE1BQU0sRUFBQztZQUM1QkQsTUFBTU4sV0FBVyxHQUFHTyxPQUFPQyxPQUFPO1FBQ3RDO1FBQ0FDLG1CQUFrQkgsS0FBSyxFQUFFQyxNQUFNLEVBQUM7WUFDNUJELE1BQU1MLFdBQVcsR0FBR00sT0FBT0MsT0FBTztRQUN0QztJQUNKO0FBQ0osR0FBRTtBQUVLLE1BQU0sRUFBQ0gsa0JBQWlCLEVBQUVLLElBQUcsRUFBQyxHQUFHUixVQUFVUyxPQUFPO0FBQ3pELCtEQUFlVCxVQUFVVSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3JlZHVjZXJzL3Jvb21TbGljZS5qcz9kODY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgY3VycmVudFJvb206IG51bGwsXHJcbiAgICBjdXJyZW50VXNlcjogbnVsbFxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgcm9vbVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogJ3Jvb21TbGljZScsXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIGNoYW5nZUN1cnJlbnRSb29tKHN0YXRlLCBhY3Rpb24pe1xyXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50Um9vbSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VDdXJyZW50VXNlcihzdGF0ZSwgYWN0aW9uKXtcclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudFVzZXIgPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7Y2hhbmdlQ3VycmVudFJvb20sIGNoYX0gPSByb29tU2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCByb29tU2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsImN1cnJlbnRSb29tIiwiY3VycmVudFVzZXIiLCJyb29tU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VDdXJyZW50Um9vbSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImNoYW5nZUN1cnJlbnRVc2VyIiwiY2hhIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/roomSlice.js\n"));

/***/ })

});