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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ripple; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\n\n\nconst RippleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = RippleWrapper;\nfunction Ripple() {\n    const rippleHandler = (event)=>{\n        const wrapper = event.target.getBoundingClientRect();\n        const x = event.clientX;\n        const y = event.clientY;\n        const styles = {\n            position: \"absolute\",\n            width: \"50px\",\n            height: \"50px\",\n            backgroundColor: \"#2f2f2f\",\n            borderRadius: \"50%\",\n            transform: \"translate(-50%, -50%) scale(1)\",\n            top: \"\".concat(y - wrapper.y, \"px\"),\n            left: \"\".concat(x - wrapper.x, \"px\"),\n            animation: \"pulse 0.5s ease-out\",\n            pointerEvents: \"none\",\n            opacity: \"0.5\"\n        };\n        const keyframes = \"@keyframes pulse {\\n            to {\\n              transform: translate(-50%, -50%) scale(6);\\n              opacity: 0;\\n            }\\n          }\";\n        const styleSheet = document.createElement(\"style\");\n        styleSheet.innerText = keyframes;\n        document.head.appendChild(styleSheet);\n        const ripple = document.createElement(\"div\");\n        ripple.classList.add(\"ripple\");\n        Object.assign(ripple.style, styles);\n        event.target.appendChild(ripple);\n        setTimeout(()=>{\n            ripple.remove();\n        }, 480);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(RippleWrapper, {\n        onMouseDown: rippleHandler\n    }, void 0, false, {\n        fileName: \"D:\\\\Work\\\\Projects\\\\SimpleChat\\\\components\\\\interface\\\\ripple\\\\Ripple.jsx\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Ripple;\nvar _c, _c1;\n$RefreshReg$(_c, \"RippleWrapper\");\n$RefreshReg$(_c1, \"Ripple\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2ludGVyZmFjZS9yaXBwbGUvUmlwcGxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDYztBQUVyRCxNQUFNSSxnQkFBZ0JGLDZEQUFVO0tBQTFCRTtBQVFTLFNBQVNFLFNBQVM7SUFDN0IsTUFBTUMsZ0JBQWdCLENBQUNDLFFBQVU7UUFDN0IsTUFBTUMsVUFBVUQsTUFBTUUsTUFBTSxDQUFDQyxxQkFBcUI7UUFDbEQsTUFBTUMsSUFBSUosTUFBTUssT0FBTztRQUN2QixNQUFNQyxJQUFJTixNQUFNTyxPQUFPO1FBRXZCLE1BQU1DLFNBQVM7WUFDWEMsVUFBVTtZQUNWQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsaUJBQWlCO1lBQ2pCQyxjQUFjO1lBQ2RDLFdBQVc7WUFDWEMsS0FBSyxHQUFpQixPQUFkVCxJQUFJTCxRQUFRSyxDQUFDLEVBQUM7WUFDdEJVLE1BQU0sR0FBaUIsT0FBZFosSUFBSUgsUUFBUUcsQ0FBQyxFQUFDO1lBQ3ZCYSxXQUFXO1lBQ1hDLGVBQWU7WUFDZkMsU0FBUztRQUNiO1FBRUEsTUFBTXhCLFlBQWE7UUFPbkIsTUFBTXlCLGFBQWFDLFNBQVNDLGFBQWEsQ0FBQztRQUMxQ0YsV0FBV0csU0FBUyxHQUFHNUI7UUFDdkIwQixTQUFTRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0w7UUFFMUIsTUFBTU0sU0FBU0wsU0FBU0MsYUFBYSxDQUFDO1FBQ3RDSSxPQUFPQyxTQUFTLENBQUNDLEdBQUcsQ0FBQztRQUNyQkMsT0FBT0MsTUFBTSxDQUFDSixPQUFPSyxLQUFLLEVBQUV2QjtRQUU1QlIsTUFBTUUsTUFBTSxDQUFDdUIsV0FBVyxDQUFDQztRQUV6Qk0sV0FBVyxJQUFNO1lBQ2JOLE9BQU9PLE1BQU07UUFDakIsR0FBRztJQUNQO0lBSUEscUJBQ0ksOERBQUNyQztRQUFlc0MsYUFBYW5DOzs7Ozs7QUFHckMsQ0FBQztNQWhEdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW50ZXJmYWNlL3JpcHBsZS9SaXBwbGUuanN4P2QwMDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5jb25zdCBSaXBwbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmlwcGxlKCkge1xyXG4gICAgY29uc3QgcmlwcGxlSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WFxyXG4gICAgICAgIGNvbnN0IHkgPSBldmVudC5jbGllbnRZXHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMmYyZjJmJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpJyxcclxuICAgICAgICAgICAgdG9wOiBgJHt5IC0gd3JhcHBlci55fXB4YCxcclxuICAgICAgICAgICAgbGVmdDogYCR7eCAtIHdyYXBwZXIueH1weGAsXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogJ3B1bHNlIDAuNXMgZWFzZS1vdXQnLFxyXG4gICAgICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6ICcwLjUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBrZXlmcmFtZXMgPSBgQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSg2KTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcclxuICAgICAgICBzdHlsZVNoZWV0LmlubmVyVGV4dCA9IGtleWZyYW1lcztcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlU2hlZXQpO1xyXG5cclxuICAgICAgICBjb25zdCByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKCdyaXBwbGUnKVxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocmlwcGxlLnN0eWxlLCBzdHlsZXMpXHJcblxyXG4gICAgICAgIGV2ZW50LnRhcmdldC5hcHBlbmRDaGlsZChyaXBwbGUpXHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICByaXBwbGUucmVtb3ZlKClcclxuICAgICAgICB9LCA0ODApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSaXBwbGVXcmFwcGVyICBvbk1vdXNlRG93bj17cmlwcGxlSGFuZGxlcn0+XHJcbiAgICAgICAgPC9SaXBwbGVXcmFwcGVyID5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlZCIsImtleWZyYW1lcyIsIlJpcHBsZVdyYXBwZXIiLCJkaXYiLCJSaXBwbGUiLCJyaXBwbGVIYW5kbGVyIiwiZXZlbnQiLCJ3cmFwcGVyIiwidGFyZ2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInN0eWxlcyIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJ0cmFuc2Zvcm0iLCJ0b3AiLCJsZWZ0IiwiYW5pbWF0aW9uIiwicG9pbnRlckV2ZW50cyIsIm9wYWNpdHkiLCJzdHlsZVNoZWV0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicmlwcGxlIiwiY2xhc3NMaXN0IiwiYWRkIiwiT2JqZWN0IiwiYXNzaWduIiwic3R5bGUiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwib25Nb3VzZURvd24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/interface/ripple/Ripple.jsx\n"));

/***/ })

});