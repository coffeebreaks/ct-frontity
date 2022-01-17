webpackHotUpdate("ct-frontity",{

/***/ "./packages/chimneytec/src/components/acf_blocks/ct_referensbanner.js":
/*!****************************************************************************!*\
  !*** ./packages/chimneytec/src/components/acf_blocks/ct_referensbanner.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const CT_ReferensBanner=({api,state})=>{const postKey=\"allposts/\";const posts=state.source.data[postKey].items;const data=state.source.get(state.router.link);const coverImage=state.source.attachment;const CaseWrapper=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e1khyd3m2\",label:\"CaseWrapper\"})( false?undefined:{name:\"1rprjd5\",styles:\"background:white;color:black;display:flex;flex-flow:column;justify-content:center;align-items:center\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3ZWJiXFxjdC1mcm9udGl0eVxccGFja2FnZXNcXGNoaW1uZXl0ZWNcXHNyY1xcY29tcG9uZW50c1xcYWNmX2Jsb2Nrc1xcY3RfcmVmZXJlbnNiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWtDIiwiZmlsZSI6IkM6XFx3ZWJiXFxjdC1mcm9udGl0eVxccGFja2FnZXNcXGNoaW1uZXl0ZWNcXHNyY1xcY29tcG9uZW50c1xcYWNmX2Jsb2Nrc1xcY3RfcmVmZXJlbnNiYW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0eWxlZH0gZnJvbSBcImZyb250aXR5XCJcclxuXHJcbmNvbnN0IENUX1JlZmVyZW5zQmFubmVyID0gKHthcGkgLCBzdGF0ZX0pID0+IHtcclxuICAgIGNvbnN0IHBvc3RLZXkgPSBcImFsbHBvc3RzL1wiXHJcbiAgICBjb25zdCBwb3N0cyA9IHN0YXRlLnNvdXJjZS5kYXRhW3Bvc3RLZXldLml0ZW1zXHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XHJcbiAgICBjb25zdCBjb3ZlckltYWdlID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRcclxuXHJcbiAgICBjb25zdCBDYXNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgIFxyXG5cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA7IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuICAgIGNvbnN0IENhc2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzID0+IHByb3BzLmJhY2tncm91bmQpfSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZmI4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FzZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMj5LdW5kY2FzZTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgoeCk9PiBcclxuXHJcbiAgICAgICAgICAgeC5jYXRlZ29yaWVzLm1hcCgoa2F0KT0+XHJcbiAgICAgICAga2F0ID09PSBhcGkua2F0ZWdvcmlcclxuICAgICAgICBcclxuICAgICAgICA/IFxyXG4gICAgICAgIDxDYXNlIGJhY2tncm91bmQ9e3guZmltZ191cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxoMz4ge3gudGl0bGUucmVuZGVyZWR9IDwvaDM+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3gubGlua30+TMOkcyBtZXI8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FzZT5cclxuICAgICAgICBcclxuICAgICAgICA6IFwiXCJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ2FzZVdyYXBwZXI+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDVF9SZWZlcmVuc0Jhbm5lciJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Row=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e1khyd3m1\",label:\"Row\"})( false?undefined:{name:\"1fqgbnj\",styles:\"display:flex;flex-flow:row;color:black;justify-content:center;align-items:center;padding:2rem 0;@media(max-width: 800px){flex-flow:column;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3ZWJiXFxjdC1mcm9udGl0eVxccGFja2FnZXNcXGNoaW1uZXl0ZWNcXHNyY1xcY29tcG9uZW50c1xcYWNmX2Jsb2Nrc1xcY3RfcmVmZXJlbnNiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUIwQiIsImZpbGUiOiJDOlxcd2ViYlxcY3QtZnJvbnRpdHlcXHBhY2thZ2VzXFxjaGltbmV5dGVjXFxzcmNcXGNvbXBvbmVudHNcXGFjZl9ibG9ja3NcXGN0X3JlZmVyZW5zYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHlsZWR9IGZyb20gXCJmcm9udGl0eVwiXHJcblxyXG5jb25zdCBDVF9SZWZlcmVuc0Jhbm5lciA9ICh7YXBpICwgc3RhdGV9KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0S2V5ID0gXCJhbGxwb3N0cy9cIlxyXG4gICAgY29uc3QgcG9zdHMgPSBzdGF0ZS5zb3VyY2UuZGF0YVtwb3N0S2V5XS5pdGVtc1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG4gICAgY29uc3QgY292ZXJJbWFnZSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50XHJcblxyXG4gICAgY29uc3QgQ2FzZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICBcclxuXHJcbiAgICBgXHJcblxyXG4gICAgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOyB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBDYXNlID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kKX0pO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmZiODtcclxuICAgICAgICAgICAgcGFkZGluZzogLjRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhc2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8aDI+S3VuZGNhc2U8L2gyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHgpPT4gXHJcblxyXG4gICAgICAgICAgIHguY2F0ZWdvcmllcy5tYXAoKGthdCk9PlxyXG4gICAgICAgIGthdCA9PT0gYXBpLmthdGVnb3JpXHJcbiAgICAgICAgXHJcbiAgICAgICAgPyBcclxuICAgICAgICA8Q2FzZSBiYWNrZ3JvdW5kPXt4LmZpbWdfdXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8aDM+IHt4LnRpdGxlLnJlbmRlcmVkfSA8L2gzPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt4Lmxpbmt9PkzDpHMgbWVyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhc2U+XHJcbiAgICAgICAgXHJcbiAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0Nhc2VXcmFwcGVyPlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1RfUmVmZXJlbnNCYW5uZXIiXX0= */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const Case=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e1khyd3m0\",label:\"Case\"})(\"background-color:gray;background-image:url(\",props=>props.background,\");background-size:cover;background-position:center;background-repeat:no-repeat;width:230px;height:300px;margin:0 20px;padding:0 20px;display:flex;justify-content:center;align-items:center;margin-bottom:1rem;a{background-color:#0066ffb8;padding:.4rem;font-size:15px;border-radius:23px;border:2px solid #ffffff;color:#ffffff;width:fit-content;font-weight:600;text-decoration:none;}h3{margin-bottom:1rem;}.text-background{background:white;color:black;opacity:0.8;padding:1rem 1rem;}\"+( false?undefined:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFx3ZWJiXFxjdC1mcm9udGl0eVxccGFja2FnZXNcXGNoaW1uZXl0ZWNcXHNyY1xcY29tcG9uZW50c1xcYWNmX2Jsb2Nrc1xcY3RfcmVmZXJlbnNiYW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0MyQiIsImZpbGUiOiJDOlxcd2ViYlxcY3QtZnJvbnRpdHlcXHBhY2thZ2VzXFxjaGltbmV5dGVjXFxzcmNcXGNvbXBvbmVudHNcXGFjZl9ibG9ja3NcXGN0X3JlZmVyZW5zYmFubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHlsZWR9IGZyb20gXCJmcm9udGl0eVwiXHJcblxyXG5jb25zdCBDVF9SZWZlcmVuc0Jhbm5lciA9ICh7YXBpICwgc3RhdGV9KSA9PiB7XHJcbiAgICBjb25zdCBwb3N0S2V5ID0gXCJhbGxwb3N0cy9cIlxyXG4gICAgY29uc3QgcG9zdHMgPSBzdGF0ZS5zb3VyY2UuZGF0YVtwb3N0S2V5XS5pdGVtc1xyXG4gICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQoc3RhdGUucm91dGVyLmxpbmspO1xyXG4gICAgY29uc3QgY292ZXJJbWFnZSA9IHN0YXRlLnNvdXJjZS5hdHRhY2htZW50XHJcblxyXG4gICAgY29uc3QgQ2FzZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICBcclxuXHJcbiAgICBgXHJcblxyXG4gICAgY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3c7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOyB3cmFwO1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCl7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBDYXNlID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgkeyhwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kKX0pO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDY2ZmZiODtcclxuICAgICAgICAgICAgcGFkZGluZzogLjRyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjNweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIGBcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENhc2VXcmFwcGVyPlxyXG4gICAgICAgICAgICA8aDI+S3VuZGNhc2U8L2gyPlxyXG4gICAgICAgICAgICA8Um93PlxyXG4gICAgICAgIHtwb3N0cy5tYXAoKHgpPT4gXHJcblxyXG4gICAgICAgICAgIHguY2F0ZWdvcmllcy5tYXAoKGthdCk9PlxyXG4gICAgICAgIGthdCA9PT0gYXBpLmthdGVnb3JpXHJcbiAgICAgICAgXHJcbiAgICAgICAgPyBcclxuICAgICAgICA8Q2FzZSBiYWNrZ3JvdW5kPXt4LmZpbWdfdXJsfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8aDM+IHt4LnRpdGxlLnJlbmRlcmVkfSA8L2gzPlxyXG4gICAgICAgICAgICA8YSBocmVmPXt4Lmxpbmt9PkzDpHMgbWVyPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Nhc2U+XHJcbiAgICAgICAgXHJcbiAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICApfVxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0Nhc2VXcmFwcGVyPlxyXG4gICAgKVxyXG59IFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ1RfUmVmZXJlbnNCYW5uZXIiXX0= */\"));return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(CaseWrapper,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"h2\",{children:\"Kundcase\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Row,{children:posts.map(x=>x.categories.map(kat=>kat===api.kategori?Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(Case,{background:x.fimg_url,children:Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(\"div\",{class:\"text-background\",children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxs\"])(\"h3\",{children:[\" \",x.title.rendered,\" \"]}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"a\",{href:x.link,children:\"L\\xE4s mer\"})]})}):\"\"))})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (CT_ReferensBanner);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jaGltbmV5dGVjL3NyYy9jb21wb25lbnRzL2FjZl9ibG9ja3MvY3RfcmVmZXJlbnNiYW5uZXIuanM/MDY2YyJdLCJuYW1lcyI6WyJDVF9SZWZlcmVuc0Jhbm5lciIsImFwaSIsInN0YXRlIiwicG9zdEtleSIsInBvc3RzIiwic291cmNlIiwiZGF0YSIsIml0ZW1zIiwiZ2V0Iiwicm91dGVyIiwibGluayIsImNvdmVySW1hZ2UiLCJhdHRhY2htZW50IiwiQ2FzZVdyYXBwZXIiLCJSb3ciLCJDYXNlIiwicHJvcHMiLCJiYWNrZ3JvdW5kIiwibWFwIiwieCIsImNhdGVnb3JpZXMiLCJrYXQiLCJrYXRlZ29yaSIsImZpbWdfdXJsIiwidGl0bGUiLCJyZW5kZXJlZCJdLCJtYXBwaW5ncyI6Ijs7OztxUkFFQSxLQUFNQSxrQkFBaUIsQ0FBRyxDQUFDLENBQUNDLEdBQUQsQ0FBT0MsS0FBUCxDQUFELEdBQW1CLENBQ3pDLEtBQU1DLFFBQU8sQ0FBRyxXQUFoQixDQUNBLEtBQU1DLE1BQUssQ0FBR0YsS0FBSyxDQUFDRyxNQUFOLENBQWFDLElBQWIsQ0FBa0JILE9BQWxCLEVBQTJCSSxLQUF6QyxDQUNBLEtBQU1ELEtBQUksQ0FBR0osS0FBSyxDQUFDRyxNQUFOLENBQWFHLEdBQWIsQ0FBaUJOLEtBQUssQ0FBQ08sTUFBTixDQUFhQyxJQUE5QixDQUFiLENBQ0EsS0FBTUMsV0FBVSxDQUFHVCxLQUFLLENBQUNHLE1BQU4sQ0FBYU8sVUFBaEMsQ0FFQSxLQUFNQyxZQUFXLDBtSUFBakIsQ0FXQSxLQUFNQyxJQUFHLHlvSUFBVCxDQWFBLEtBQU1DLEtBQUksaUtBRW1CQyxLQUFLLEVBQUlBLEtBQUssQ0FBQ0MsVUFGbEMsd3lJQUFWLENBMENBLE1BQ0kseUVBQUMsV0FBRCxZQUNJLGtHQURKLENBRUksdUVBQUMsR0FBRCxXQUNIYixLQUFLLENBQUNjLEdBQU4sQ0FBV0MsQ0FBRCxFQUVSQSxDQUFDLENBQUNDLFVBQUYsQ0FBYUYsR0FBYixDQUFrQkcsR0FBRCxFQUNwQkEsR0FBRyxHQUFLcEIsR0FBRyxDQUFDcUIsUUFBWixDQUdBLHVFQUFDLElBQUQsRUFBTSxVQUFVLENBQUVILENBQUMsQ0FBQ0ksUUFBcEIsVUFDSSwrRUFBSyxLQUFLLENBQUMsaUJBQVgsV0FDQSw0RkFBTUosQ0FBQyxDQUFDSyxLQUFGLENBQVFDLFFBQWQsT0FEQSxDQUVBLDRFQUFHLElBQUksQ0FBRU4sQ0FBQyxDQUFDVCxJQUFYLHdCQUZBLEdBREosRUFIQSxDQVVFLEVBWEMsQ0FGRixDQURHLEVBRkosR0FESixDQXdCSCxDQWhHRCxDQWtHZVYsZ0ZBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9jaGltbmV5dGVjL3NyYy9jb21wb25lbnRzL2FjZl9ibG9ja3MvY3RfcmVmZXJlbnNiYW5uZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3N0eWxlZH0gZnJvbSBcImZyb250aXR5XCJcclxuXHJcbmNvbnN0IENUX1JlZmVyZW5zQmFubmVyID0gKHthcGkgLCBzdGF0ZX0pID0+IHtcclxuICAgIGNvbnN0IHBvc3RLZXkgPSBcImFsbHBvc3RzL1wiXHJcbiAgICBjb25zdCBwb3N0cyA9IHN0YXRlLnNvdXJjZS5kYXRhW3Bvc3RLZXldLml0ZW1zXHJcbiAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChzdGF0ZS5yb3V0ZXIubGluayk7XHJcbiAgICBjb25zdCBjb3ZlckltYWdlID0gc3RhdGUuc291cmNlLmF0dGFjaG1lbnRcclxuXHJcbiAgICBjb25zdCBDYXNlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgIFxyXG5cclxuICAgIGBcclxuXHJcbiAgICBjb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmbGV4LXdyYXA7IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuICAgIGNvbnN0IENhc2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7KHByb3BzID0+IHByb3BzLmJhY2tncm91bmQpfSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgIFxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjZmZmI4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAuNHJlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyM3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgYFxyXG5cclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FzZVdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxoMj5LdW5kY2FzZTwvaDI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAge3Bvc3RzLm1hcCgoeCk9PiBcclxuXHJcbiAgICAgICAgICAgeC5jYXRlZ29yaWVzLm1hcCgoa2F0KT0+XHJcbiAgICAgICAga2F0ID09PSBhcGkua2F0ZWdvcmlcclxuICAgICAgICBcclxuICAgICAgICA/IFxyXG4gICAgICAgIDxDYXNlIGJhY2tncm91bmQ9e3guZmltZ191cmx9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1iYWNrZ3JvdW5kXCI+XHJcbiAgICAgICAgICAgIDxoMz4ge3gudGl0bGUucmVuZGVyZWR9IDwvaDM+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9e3gubGlua30+TMOkcyBtZXI8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2FzZT5cclxuICAgICAgICBcclxuICAgICAgICA6IFwiXCJcclxuICAgICAgICApXHJcblxyXG4gICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ2FzZVdyYXBwZXI+XHJcbiAgICApXHJcbn0gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDVF9SZWZlcmVuc0Jhbm5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/chimneytec/src/components/acf_blocks/ct_referensbanner.js\n");

/***/ })

})