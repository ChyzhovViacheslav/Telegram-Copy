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

/***/ "./components/interface/ripple/Ripple.jsx":
/*!************************************************!*\
  !*** ./components/interface/ripple/Ripple.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nfunction Ripple() {\n    const rippleHandler = (event)=>{\n        const wrapper = event.target.getBoundingClientRect();\n        const x = event.clientX;\n        const y = event.clientY;\n        const styles = {\n            position: \"absolute\",\n            width: \"50px\",\n            height: \"50px\",\n            backgroundColor: \"#212121\",\n            borderRadius: \"50%\",\n            transform: \"translate(-50%, -50%) scale(1)\",\n            top: \"\".concat(y - wrapper.y, \"px\"),\n            left: \"\".concat(x - wrapper.x, \"px\"),\n            animation: \"pulse 1s ease-out\",\n            pointerEvents: \"none\"\n        };\n        const keyframes = \"@keyframes pulse {\\n            to {\\n              transform: translate(-50%, -50%) scale(2);\\n              opacity: 0;\\n            }\\n          }\";\n        const styleSheet = document.createElement(\"style\");\n        styleSheet.innerText = keyframes;\n        document.head.appendChild(styleSheet);\n        const ripple = document.createElement(\"div\");\n        ripple.classList.add(\"ripple\");\n        Object.assign(ripple.style, styles);\n        event.target.appendChild(ripple);\n        setTimeout(()=>{\n            ripple.remove();\n        }, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onClick: rippleHandler\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Ripple;\nvar _c, _c1;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYztBQUVyRCxNQUFNSSxnQkFBZ0JGLDZEQUFVO0tBQTFCRTtBQVFTLFNBQVNFLFNBQVM7SUFDN0IsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVU7UUFDN0IsTUFBTUMsVUFBVUQsTUFBTUUsTUFBTSxDQUFDQyxxQkFBcUI7UUFDbEQsTUFBTUMsSUFBSUosTUFBTUssT0FBTztRQUN2QixNQUFNQyxJQUFJTixNQUFNTyxPQUFPO1FBRXZCLE1BQU1DLFNBQVM7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLFdBQVc7WUFDWEMsS0FBSyxHQUFpQixPQUFkVCxJQUFJTCxRQUFRSyxDQUFDLEVBQUM7WUFDdEJVLE1BQU0sR0FBaUIsT0FBZFosSUFBSUgsUUFBUUcsQ0FBQyxFQUFDO1lBQ3ZCYSxXQUFXO1lBQ1hDLGVBQWU7UUFDbkI7UUFFQSxNQUFNdkIsWUFBYTtRQU9uQixNQUFNd0IsYUFBYUMsU0FBU0MsYUFBYSxDQUFDO1FBQzFDRixXQUFXRyxTQUFTLEdBQUczQjtRQUN2QnlCLFNBQVNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTDtRQUUxQixNQUFNTSxTQUFTTCxTQUFTQyxhQUFhLENBQUM7UUFDdENJLE9BQU9DLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQ3JCQyxPQUFPQyxNQUFNLENBQUNKLE9BQU9LLEtBQUssRUFBRXRCO1FBRTVCUixNQUFNRSxNQUFNLENBQUNzQixXQUFXLENBQUNDO1FBRXpCTSxXQUFXLElBQU07WUFDYk4sT0FBT08sTUFBTTtRQUNqQixHQUFHO0lBQ1A7SUFJQSxxQkFDSSw4REFBQ3BDO1FBQWNxQyxTQUFTbEM7Ozs7OztBQUdoQyxDQUFDO01BL0N1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnRlcmZhY2UvcmlwcGxlL1JpcHBsZS5qc3g/ZDAwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmNvbnN0IFJpcHBsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoKSB7XHJcbiAgICBjb25zdCByaXBwbGVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYXHJcbiAgICAgICAgY29uc3QgeSA9IGV2ZW50LmNsaWVudFlcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgd2lkdGg6ICc1MHB4JyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMTIxMjEnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSknLFxyXG4gICAgICAgICAgICB0b3A6IGAke3kgLSB3cmFwcGVyLnl9cHhgLFxyXG4gICAgICAgICAgICBsZWZ0OiBgJHt4IC0gd3JhcHBlci54fXB4YCxcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiAncHVsc2UgMXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGtleWZyYW1lcyA9IGBAa2V5ZnJhbWVzIHB1bHNlIHtcclxuICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDIpO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxyXG4gICAgICAgIHN0eWxlU2hlZXQuaW5uZXJUZXh0ID0ga2V5ZnJhbWVzO1xyXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVTaGVldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoJ3JpcHBsZScpXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihyaXBwbGUuc3R5bGUsIHN0eWxlcylcclxuXHJcbiAgICAgICAgZXZlbnQudGFyZ2V0LmFwcGVuZENoaWxkKHJpcHBsZSlcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJpcHBsZS5yZW1vdmUoKVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSaXBwbGVXcmFwcGVyIG9uQ2xpY2s9e3JpcHBsZUhhbmRsZXJ9PlxyXG4gICAgICAgIDwvUmlwcGxlV3JhcHBlciA+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJrZXlmcmFtZXMiLCJSaXBwbGVXcmFwcGVyIiwiZGl2IiwiUmlwcGxlIiwicmlwcGxlSGFuZGxlciIsImV2ZW50Iiwid3JhcHBlciIsInRhcmdldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIngiLCJjbGllbnRYIiwieSIsImNsaWVudFkiLCJzdHlsZXMiLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwidHJhbnNmb3JtIiwidG9wIiwibGVmdCIsImFuaW1hdGlvbiIsInBvaW50ZXJFdmVudHMiLCJzdHlsZVNoZWV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmlwcGxlIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiYXNzaWduIiwic3R5bGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});