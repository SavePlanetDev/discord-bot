/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./blockchain/chain.id.js":
/*!********************************!*\
  !*** ./blockchain/chain.id.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avalancheChain\": () => (/* binding */ avalancheChain),\n/* harmony export */   \"bitkubchain\": () => (/* binding */ bitkubchain)\n/* harmony export */ });\nconst bitkubchain = {\n    id: 96,\n    name: \"Bit Kub\",\n    network: \"bitkubchain\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Bit Kub\",\n        symbol: \"KUB\"\n    },\n    rpcUrls: {\n        default: \"https://rpc.bitkubchain.io\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"BKCScan\",\n            url: \"https://bkcscan.com\"\n        }\n    },\n    testnet: false\n};\nconst avalancheChain = {\n    id: 43114,\n    name: \"Avalanche\",\n    network: \"avalanche\",\n    nativeCurrency: {\n        decimals: 18,\n        name: \"Avalanche\",\n        symbol: \"AVAX\"\n    },\n    rpcUrls: {\n        default: \"https://api.avax.network/ext/bc/C/rpc\"\n    },\n    blockExplorers: {\n        default: {\n            name: \"SnowTrace\",\n            url: \"https://snowtrace.io\"\n        }\n    },\n    testnet: false\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja2NoYWluL2NoYWluLmlkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRU8sTUFBTUEsY0FBYztJQUNqQkMsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsZ0JBQWdCO1FBQ05DLFVBQVU7UUFDVkgsTUFBTTtRQUNOSSxRQUFRO0lBQ1Y7SUFDUkMsU0FBUztRQUNDQyxTQUFTO0lBQ25CO0lBQ0FDLGdCQUFnQjtRQUNORCxTQUFTO1lBQUVOLE1BQU07WUFBV1EsS0FBSztRQUFzQjtJQUN6RDtJQUNSQyxTQUFTLEtBQUs7QUFDeEIsRUFBRTtBQUVLLE1BQU1DLGlCQUFpQjtJQUNwQlgsSUFBSTtJQUNKQyxNQUFNO0lBQ05DLFNBQVM7SUFDVEMsZ0JBQWdCO1FBQ2RDLFVBQVU7UUFDVkgsTUFBTTtRQUNOSSxRQUFRO0lBQ1Y7SUFDQUMsU0FBUztRQUNQQyxTQUFTO0lBQ1g7SUFDQUMsZ0JBQWdCO1FBQ2RELFNBQVM7WUFBRU4sTUFBTTtZQUFhUSxLQUFLO1FBQXVCO0lBQzVEO0lBQ0FDLFNBQVMsS0FBSztBQUNoQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsbGV0LWxvZ2luLy4vYmxvY2tjaGFpbi9jaGFpbi5pZC5qcz9mODUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgYml0a3ViY2hhaW4gPSB7XG4gICAgICAgICAgaWQ6IDk2LFxuICAgICAgICAgIG5hbWU6ICdCaXQgS3ViJyxcbiAgICAgICAgICBuZXR3b3JrOiAnYml0a3ViY2hhaW4nLFxuICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAxOCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0JpdCBLdWInLFxuICAgICAgICAgICAgICAgICAgICBzeW1ib2w6ICdLVUInLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICBycGNVcmxzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdodHRwczovL3JwYy5iaXRrdWJjaGFpbi5pbydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2NrRXhwbG9yZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHsgbmFtZTogJ0JLQ1NjYW4nLCB1cmw6ICdodHRwczovL2JrY3NjYW4uY29tJyB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICB0ZXN0bmV0OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjb25zdCBhdmFsYW5jaGVDaGFpbiA9IHtcbiAgICAgICAgICBpZDogNDNfMTE0LFxuICAgICAgICAgIG5hbWU6ICdBdmFsYW5jaGUnLFxuICAgICAgICAgIG5ldHdvcms6ICdhdmFsYW5jaGUnLFxuICAgICAgICAgIG5hdGl2ZUN1cnJlbmN5OiB7XG4gICAgICAgICAgICBkZWNpbWFsczogMTgsXG4gICAgICAgICAgICBuYW1lOiAnQXZhbGFuY2hlJyxcbiAgICAgICAgICAgIHN5bWJvbDogJ0FWQVgnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcnBjVXJsczoge1xuICAgICAgICAgICAgZGVmYXVsdDogJ2h0dHBzOi8vYXBpLmF2YXgubmV0d29yay9leHQvYmMvQy9ycGMnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYmxvY2tFeHBsb3JlcnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHsgbmFtZTogJ1Nub3dUcmFjZScsIHVybDogJ2h0dHBzOi8vc25vd3RyYWNlLmlvJyB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGVzdG5ldDogZmFsc2UsXG4gICAgICAgIH1cbiJdLCJuYW1lcyI6WyJiaXRrdWJjaGFpbiIsImlkIiwibmFtZSIsIm5ldHdvcmsiLCJuYXRpdmVDdXJyZW5jeSIsImRlY2ltYWxzIiwic3ltYm9sIiwicnBjVXJscyIsImRlZmF1bHQiLCJibG9ja0V4cGxvcmVycyIsInVybCIsInRlc3RuZXQiLCJhdmFsYW5jaGVDaGFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./blockchain/chain.id.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/providers/public */ \"wagmi/providers/public\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blockchain_chain_id__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blockchain/chain.id */ \"./blockchain/chain.id.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.mainnet,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.polygon,\n    _blockchain_chain_id__WEBPACK_IMPORTED_MODULE_6__.bitkubchain,\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.arbitrum,\n    _blockchain_chain_id__WEBPACK_IMPORTED_MODULE_6__.avalancheChain\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_5__.publicProvider)()\n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Whos-Hodl\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/nonthasak.l/Desktop/discord-bot/whos-hodl-verify2/pages/_app.js\",\n                lineNumber: 30,\n                columnNumber: 31\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/nonthasak.l/Desktop/discord-bot/whos-hodl-verify2/pages/_app.js\",\n            lineNumber: 29,\n            columnNumber: 21\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/nonthasak.l/Desktop/discord-bot/whos-hodl-verify2/pages/_app.js\",\n        lineNumber: 28,\n        columnNumber: 11\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNZO0FBQ21DO0FBQ0w7QUFDbEI7QUFDZTtBQUlyRSxNQUFNLEVBQUNTLE9BQU0sRUFBRUMsU0FBUSxFQUFDLEdBQUdQLHNEQUFlQSxDQUNoQztJQUFDRCxnREFBYTtJQUFFQSxnREFBYTtJQUFFSyw2REFBV0E7SUFBRUwsaURBQWM7SUFBRU0sZ0VBQWNBO0NBQUMsRUFDM0U7SUFBQ0Ysc0VBQWNBO0NBQUc7QUFHNUIsTUFBTSxFQUFDUSxXQUFVLEVBQUMsR0FBR2QseUVBQWlCQSxDQUFDO0lBQzdCZSxTQUFTO0lBQ1ROO0FBQ1Y7QUFFQSxNQUFNTyxjQUFjWixtREFBWUEsQ0FBQztJQUN2QmEsYUFBYSxJQUFJO0lBQ2pCSDtJQUNBSjtBQUNWO0FBRUEsU0FBU1EsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3ZDLHFCQUNRLDhEQUFDZiw4Q0FBV0E7UUFBQ2dCLFFBQVVMO2tCQUNiLDRFQUFDZixzRUFBa0JBO1lBQUNRLFFBQVFBO3NCQUNsQiw0RUFBQ1U7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RDtBQUVBLGlFQUFlRixLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2FsbGV0LWxvZ2luLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCJcbmltcG9ydCB7Z2V0RGVmYXVsdFdhbGxldHMsIFJhaW5ib3dLaXRQcm92aWRlcn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7Y2hhaW4sIGNvbmZpZ3VyZUNoYWlucywgY3JlYXRlQ2xpZW50LCBXYWdtaUNvbmZpZ30gZnJvbSBcIndhZ21pXCI7XG5pbXBvcnQge3B1YmxpY1Byb3ZpZGVyfSBmcm9tIFwid2FnbWkvcHJvdmlkZXJzL3B1YmxpY1wiO1xuaW1wb3J0IHsgYml0a3ViY2hhaW4sIGF2YWxhbmNoZUNoYWluIH0gZnJvbSAnLi4vYmxvY2tjaGFpbi9jaGFpbi5pZCc7XG5cblxuXG5jb25zdCB7Y2hhaW5zLCBwcm92aWRlcn0gPSBjb25maWd1cmVDaGFpbnMoXG4gICAgICAgICAgW2NoYWluLm1haW5uZXQsIGNoYWluLnBvbHlnb24sIGJpdGt1YmNoYWluLCBjaGFpbi5hcmJpdHJ1bSwgYXZhbGFuY2hlQ2hhaW5dLFxuICAgICAgICAgIFtwdWJsaWNQcm92aWRlcigpXVxuKTtcblxuY29uc3Qge2Nvbm5lY3RvcnN9ID0gZ2V0RGVmYXVsdFdhbGxldHMoe1xuICAgICAgICAgIGFwcE5hbWU6IFwiV2hvcy1Ib2RsXCIsXG4gICAgICAgICAgY2hhaW5zLFxufSk7XG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KHtcbiAgICAgICAgICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgICAgICAgICBjb25uZWN0b3JzLFxuICAgICAgICAgIHByb3ZpZGVyLFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgICAgICAgIDxXYWdtaUNvbmZpZyBjbGllbnQgPSB7d2FnbWlDbGllbnR9PlxuICAgICAgICAgICAgICAgICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPlxuICAgICAgICAgICAgICAgICAgICA8L1JhaW5ib3dLaXRQcm92aWRlcj5cbiAgICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbImdldERlZmF1bHRXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsInB1YmxpY1Byb3ZpZGVyIiwiYml0a3ViY2hhaW4iLCJhdmFsYW5jaGVDaGFpbiIsImNoYWlucyIsInByb3ZpZGVyIiwibWFpbm5ldCIsInBvbHlnb24iLCJhcmJpdHJ1bSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@rainbow-me/rainbowkit/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@rainbow-me/rainbowkit/dist/index.css ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/public":
/*!*****************************************!*\
  !*** external "wagmi/providers/public" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/public");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();