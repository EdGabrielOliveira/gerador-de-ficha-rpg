"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AttributeInput.tsx":
/*!***********************************************!*\
  !*** ./src/app/components/AttributeInput.tsx ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AttributeInput = (param)=>{\n    let { label, value, onChange } = param;\n    // Calcular o modificador do atributo\n    // Para atributos zerados, o modificador é considerado -5\n    const getModifier = (value)=>{\n        if (value === 0) return 0; // Caso especial para atributos não distribuídos\n        return Math.floor((value - 10) / 2);\n    };\n    // Formatar o modificador para exibição\n    const formatModifier = (mod)=>{\n        return mod >= 0 ? \"+\".concat(mod) : \"\".concat(mod);\n    };\n    const modifier = getModifier(value);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center mb-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"w-28 font-medium text-gray-700\",\n                children: label\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>onChange(Math.max(0, value - 1)),\n                        className: \"px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-md\",\n                        disabled: value === 0,\n                        children: \"-\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-12 text-center py-1 bg-gray-100 border-t border-b border-gray-300\",\n                        children: value\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>onChange(Math.min(20, value + 1)),\n                        className: \"px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-md\",\n                        children: \"+\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-3 px-2 py-1 rounded-md text-sm font-semibold \".concat(value === 0 ? \"bg-gray-100 text-gray-500\" : \"bg-blue-100 text-blue-800\"),\n                        children: value === 0 ? \"N/A\" : formatModifier(modifier)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriel Oliveira\\\\Projetos\\\\rpgzeiro\\\\gerador-ficha-rpg\\\\src\\\\app\\\\components\\\\AttributeInput.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AttributeInput;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AttributeInput);\nvar _c;\n$RefreshReg$(_c, \"AttributeInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BdHRyaWJ1dGVJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFRMUIsTUFBTUMsaUJBQWdEO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRTtJQUMvRSxxQ0FBcUM7SUFDckMseURBQXlEO0lBQ3pELE1BQU1DLGNBQWMsQ0FBQ0Y7UUFDbkIsSUFBSUEsVUFBVSxHQUFHLE9BQU8sR0FBRyxnREFBZ0Q7UUFDM0UsT0FBT0csS0FBS0MsS0FBSyxDQUFDLENBQUNKLFFBQVEsRUFBQyxJQUFLO0lBQ25DO0lBRUEsdUNBQXVDO0lBQ3ZDLE1BQU1LLGlCQUFpQixDQUFDQztRQUN0QixPQUFPQSxPQUFPLElBQUksSUFBUSxPQUFKQSxPQUFRLEdBQU8sT0FBSkE7SUFDbkM7SUFFQSxNQUFNQyxXQUFXTCxZQUFZRjtJQUU3QixxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNWO2dCQUFNVSxXQUFVOzBCQUFrQ1Y7Ozs7OzswQkFDbkQsOERBQUNTO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTVgsU0FBU0UsS0FBS1UsR0FBRyxDQUFDLEdBQUdiLFFBQVE7d0JBQzVDUyxXQUFVO3dCQUNWSyxVQUFVZCxVQUFVO2tDQUNyQjs7Ozs7O2tDQUdELDhEQUFDUTt3QkFBSUMsV0FBVTtrQ0FBdUVUOzs7Ozs7a0NBQ3RGLDhEQUFDVTt3QkFDQ0MsTUFBSzt3QkFDTEMsU0FBUyxJQUFNWCxTQUFTRSxLQUFLWSxHQUFHLENBQUMsSUFBSWYsUUFBUTt3QkFDN0NTLFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0Q7d0JBQ0NDLFdBQVcsbURBRVYsT0FEQ1QsVUFBVSxJQUFJLDhCQUE4QjtrQ0FHN0NBLFVBQVUsSUFBSSxRQUFRSyxlQUFlRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2hEO0tBN0NNVDtBQStDTixpRUFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxHYWJyaWVsIE9saXZlaXJhXFxQcm9qZXRvc1xccnBnemVpcm9cXGdlcmFkb3ItZmljaGEtcnBnXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcQXR0cmlidXRlSW5wdXQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEF0dHJpYnV0ZUlucHV0UHJvcHMge1xuICBsYWJlbDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQ7XG59XG5cbmNvbnN0IEF0dHJpYnV0ZUlucHV0OiBSZWFjdC5GQzxBdHRyaWJ1dGVJbnB1dFByb3BzPiA9ICh7IGxhYmVsLCB2YWx1ZSwgb25DaGFuZ2UgfSkgPT4ge1xuICAvLyBDYWxjdWxhciBvIG1vZGlmaWNhZG9yIGRvIGF0cmlidXRvXG4gIC8vIFBhcmEgYXRyaWJ1dG9zIHplcmFkb3MsIG8gbW9kaWZpY2Fkb3Igw6kgY29uc2lkZXJhZG8gLTVcbiAgY29uc3QgZ2V0TW9kaWZpZXIgPSAodmFsdWU6IG51bWJlcik6IG51bWJlciA9PiB7XG4gICAgaWYgKHZhbHVlID09PSAwKSByZXR1cm4gMDsgLy8gQ2FzbyBlc3BlY2lhbCBwYXJhIGF0cmlidXRvcyBuw6NvIGRpc3RyaWJ1w61kb3NcbiAgICByZXR1cm4gTWF0aC5mbG9vcigodmFsdWUgLSAxMCkgLyAyKTtcbiAgfTtcblxuICAvLyBGb3JtYXRhciBvIG1vZGlmaWNhZG9yIHBhcmEgZXhpYmnDp8Ojb1xuICBjb25zdCBmb3JtYXRNb2RpZmllciA9IChtb2Q6IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIG1vZCA+PSAwID8gYCske21vZH1gIDogYCR7bW9kfWA7XG4gIH07XG5cbiAgY29uc3QgbW9kaWZpZXIgPSBnZXRNb2RpZmllcih2YWx1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ3LTI4IGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj57bGFiZWx9PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKE1hdGgubWF4KDAsIHZhbHVlIC0gMSkpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTIgcHktMSBiZy1ncmF5LTIwMCBob3ZlcjpiZy1ncmF5LTMwMCByb3VuZGVkLWwtbWRcIlxuICAgICAgICAgIGRpc2FibGVkPXt2YWx1ZSA9PT0gMH1cbiAgICAgICAgPlxuICAgICAgICAgIC1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiB0ZXh0LWNlbnRlciBweS0xIGJnLWdyYXktMTAwIGJvcmRlci10IGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMFwiPnt2YWx1ZX08L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2hhbmdlKE1hdGgubWluKDIwLCB2YWx1ZSArIDEpKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJweC0yIHB5LTEgYmctZ3JheS0yMDAgaG92ZXI6YmctZ3JheS0zMDAgcm91bmRlZC1yLW1kXCJcbiAgICAgICAgPlxuICAgICAgICAgICtcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2BtbC0zIHB4LTIgcHktMSByb3VuZGVkLW1kIHRleHQtc20gZm9udC1zZW1pYm9sZCAke1xuICAgICAgICAgICAgdmFsdWUgPT09IDAgPyBcImJnLWdyYXktMTAwIHRleHQtZ3JheS01MDBcIiA6IFwiYmctYmx1ZS0xMDAgdGV4dC1ibHVlLTgwMFwiXG4gICAgICAgICAgfWB9XG4gICAgICAgID5cbiAgICAgICAgICB7dmFsdWUgPT09IDAgPyBcIk4vQVwiIDogZm9ybWF0TW9kaWZpZXIobW9kaWZpZXIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXR0cmlidXRlSW5wdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdHRyaWJ1dGVJbnB1dCIsImxhYmVsIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE1vZGlmaWVyIiwiTWF0aCIsImZsb29yIiwiZm9ybWF0TW9kaWZpZXIiLCJtb2QiLCJtb2RpZmllciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwibWF4IiwiZGlzYWJsZWQiLCJtaW4iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AttributeInput.tsx\n"));

/***/ })

});