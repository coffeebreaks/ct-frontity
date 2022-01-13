webpackHotUpdate("ct-frontity",{

/***/ "./packages/chimneytec/src/index.js":
/*!******************************************!*\
  !*** ./packages/chimneytec/src/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.promise.js */ \"./node_modules/core-js/modules/es.promise.js\");\n/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ \"./node_modules/core-js/modules/es.object.assign.js\");\n/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ \"./node_modules/core-js/modules/es.array.iterator.js\");\n/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ \"./node_modules/core-js/modules/web.dom-collections.iterator.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home */ \"./packages/chimneytec/src/components/home.js\");\n/* harmony import */ var _frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @frontity/html2react/processors/image */ \"./node_modules/@frontity/html2react/processors/image.tsx\");\n/* harmony import */ var _frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @frontity/html2react/processors/iframe */ \"./node_modules/@frontity/html2react/processors/iframe.tsx\");\nfunction ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}const allPostsHandler={name:\"allPosts\",priority:10,pattern:\"allposts\",func:async({route,params,state,libraries})=>{const{api}=libraries.source;// 1. fetch the data you want from the endpoint page\nconst response=await api.get({endpoint:\"/wp/v2/posts/\",params:{per_page:100// To make sure you get all of them\n}});// 2. get an array with each item in json format\nconst items=await response.json();// 3. add data to source\nconst currentPageData=state.source.data[route];Object.assign(currentPageData,{items});}};// Custom handler for ACF options\nconst acfOptionsHandler={pattern:\"acf-settings\",func:async({route,state,libraries})=>{// 1. Get ACF option page from REST API.\nconst response=await libraries.source.api.get({endpoint:`/acf/v3/options/options`});const option=await response.json();// 2. Add data to `source`.\nconst data=state.source.get(route);Object.assign(data,_objectSpread(_objectSpread({},option),{},{isAcfOptionsPage:true}));}};// Custom handler for ACF options\nconst acfOptionsHandler2={pattern:\"page-logo\",func:async({route,state,libraries})=>{// 1. Get ACF option page from REST API.\nconst response=await libraries.source.api.get({endpoint:`posts`});const option=await response.json();// 2. Add data to `source`.\nconst data=state.source.get(route);Object.assign(data,_objectSpread(_objectSpread({},option),{},{ispagelogo:true}));}};const marsTheme={name:\"grafikcentralen\",roots:{/**\r\n         *  In Frontity, any package can add React components to the site.\r\n         *  We use roots for that, scoped to the `theme` namespace.\r\n         */theme:_components_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"]},state:{/**\r\n         * State is where the packages store their default settings and other\r\n         * relevant state. It is scoped to the `theme` namespace.\r\n         */theme:{menu:[],isMobileMenuOpen:false,featured:{showOnList:false,showOnPost:false}}},/**\r\n       * Actions are functions that modify the state or deal with other parts of\r\n       * Frontity like libraries.\r\n       */actions:{theme:{beforeSSR:async({state,actions})=>{await Promise.all([actions.source.fetch(\"acf-settings\")]);await Promise.all([actions.source.fetch(\"page-logo\")]);await Promise.all([actions.source.fetch(\"allCategories\")]);},toggleMobileMenu:({state})=>{state.theme.isMobileMenuOpen=!state.theme.isMobileMenuOpen;},closeMobileMenu:({state})=>{state.theme.isMobileMenuOpen=false;}}},libraries:{html2react:{/**\r\n           * Add a processor to `html2react` so it processes the `<img>` tags\r\n           * inside the content HTML. You can add your own processors too\r\n           */processors:[_frontity_html2react_processors_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"],_frontity_html2react_processors_iframe__WEBPACK_IMPORTED_MODULE_6__[\"default\"]]},source:{handlers:[acfOptionsHandler2,acfOptionsHandler,allCategoriesHandler]}}};/* harmony default export */ __webpack_exports__[\"default\"] = (marsTheme);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9jaGltbmV5dGVjL3NyYy9pbmRleC5qcz80NWUwIl0sIm5hbWVzIjpbImFsbFBvc3RzSGFuZGxlciIsIm5hbWUiLCJwcmlvcml0eSIsInBhdHRlcm4iLCJmdW5jIiwicm91dGUiLCJwYXJhbXMiLCJzdGF0ZSIsImxpYnJhcmllcyIsImFwaSIsInNvdXJjZSIsInJlc3BvbnNlIiwiZ2V0IiwiZW5kcG9pbnQiLCJwZXJfcGFnZSIsIml0ZW1zIiwianNvbiIsImN1cnJlbnRQYWdlRGF0YSIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJhY2ZPcHRpb25zSGFuZGxlciIsIm9wdGlvbiIsImlzQWNmT3B0aW9uc1BhZ2UiLCJhY2ZPcHRpb25zSGFuZGxlcjIiLCJpc3BhZ2Vsb2dvIiwibWFyc1RoZW1lIiwicm9vdHMiLCJ0aGVtZSIsIlRoZW1lIiwibWVudSIsImlzTW9iaWxlTWVudU9wZW4iLCJmZWF0dXJlZCIsInNob3dPbkxpc3QiLCJzaG93T25Qb3N0IiwiYWN0aW9ucyIsImJlZm9yZVNTUiIsIlByb21pc2UiLCJhbGwiLCJmZXRjaCIsInRvZ2dsZU1vYmlsZU1lbnUiLCJjbG9zZU1vYmlsZU1lbnUiLCJodG1sMnJlYWN0IiwicHJvY2Vzc29ycyIsImltYWdlIiwiaWZyYW1lIiwiaGFuZGxlcnMiLCJhbGxDYXRlZ29yaWVzSGFuZGxlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O285QkFLSSxLQUFNQSxnQkFBZSxDQUFHLENBQ3RCQyxJQUFJLENBQUUsVUFEZ0IsQ0FFdEJDLFFBQVEsQ0FBRSxFQUZZLENBR3RCQyxPQUFPLENBQUUsVUFIYSxDQUl0QkMsSUFBSSxDQUFFLE1BQU8sQ0FBRUMsS0FBRixDQUFTQyxNQUFULENBQWlCQyxLQUFqQixDQUF3QkMsU0FBeEIsQ0FBUCxHQUErQyxDQUNuRCxLQUFNLENBQUVDLEdBQUYsRUFBVUQsU0FBUyxDQUFDRSxNQUExQixDQUVBO0FBQ0EsS0FBTUMsU0FBUSxDQUFHLEtB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LFFBQU8sQ0FBQ0MsR0FBUixDQUFZLENBQ2hCSCxPQUFPLENBQUN6QixNQUFSLENBQWU2QixLQUFmLENBQXFCLGVBQXJCLENBRGdCLENBQVosQ0FBTixDQUdELENBWEksQ0FZTEMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFakMsS0FBRixDQUFELEdBQWUsQ0FDL0JBLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWUcsZ0JBQVosQ0FBK0IsQ0FBQ3hCLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWUcsZ0JBQTVDLENBQ0QsQ0FkSSxDQWVMVSxlQUFlLENBQUUsQ0FBQyxDQUFFbEMsS0FBRixDQUFELEdBQWUsQ0FDOUJBLEtBQUssQ0FBQ3FCLEtBQU4sQ0FBWUcsZ0JBQVosQ0FBK0IsS0FBL0IsQ0FDRCxDQWpCSSxDQURBLENBM0JPLENBZ0RoQnZCLFNBQVMsQ0FBRSxDQUNUa0MsVUFBVSxDQUFFLENBQ1Y7QUFDVjtBQUNBO0FBQ0EsYUFDVUMsVUFBVSxDQUFFLENBQUNDLDZFQUFELENBQVFDLDhFQUFSLENBTEYsQ0FESCxDQVFUbkMsTUFBTSxDQUFFLENBQ1JvQyxRQUFRLENBQUUsQ0FBQ3RCLGtCQUFELENBQXFCSCxpQkFBckIsQ0FBd0MwQixvQkFBeEMsQ0FERixDQVJDLENBaERLLENBQWxCLENBZ0VlckIsd0VBQWYiLCJmaWxlIjoiLi9wYWNrYWdlcy9jaGltbmV5dGVjL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVcIjtcclxuICAgIGltcG9ydCBpbWFnZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pbWFnZVwiO1xyXG4gICAgaW1wb3J0IGlmcmFtZSBmcm9tIFwiQGZyb250aXR5L2h0bWwycmVhY3QvcHJvY2Vzc29ycy9pZnJhbWVcIjtcclxuXHJcblxyXG4gICAgY29uc3QgYWxsUG9zdHNIYW5kbGVyID0ge1xyXG4gICAgICBuYW1lOiBcImFsbFBvc3RzXCIsXHJcbiAgICAgIHByaW9yaXR5OiAxMCxcclxuICAgICAgcGF0dGVybjogXCJhbGxwb3N0c1wiLFxyXG4gICAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgcGFyYW1zLCBzdGF0ZSwgbGlicmFyaWVzIH0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGFwaSB9ID0gbGlicmFyaWVzLnNvdXJjZTtcclxuICAgIFxyXG4gICAgICAgIC8vIDEuIGZldGNoIHRoZSBkYXRhIHlvdSB3YW50IGZyb20gdGhlIGVuZHBvaW50IHBhZ2VcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoe1xyXG4gICAgICAgICAgZW5kcG9pbnQ6IFwiL3dwL3YyL3Bvc3RzL1wiLFxyXG4gICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgIHBlcl9wYWdlOiAxMDAsIC8vIFRvIG1ha2Ugc3VyZSB5b3UgZ2V0IGFsbCBvZiB0aGVtXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8gMi4gZ2V0IGFuIGFycmF5IHdpdGggZWFjaCBpdGVtIGluIGpzb24gZm9ybWF0XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICBcclxuICAgICAgICAvLyAzLiBhZGQgZGF0YSB0byBzb3VyY2VcclxuICAgICAgICBjb25zdCBjdXJyZW50UGFnZURhdGEgPSBzdGF0ZS5zb3VyY2UuZGF0YVtyb3V0ZV07XHJcbiAgICBcclxuICAgICAgICBPYmplY3QuYXNzaWduKGN1cnJlbnRQYWdlRGF0YSwge1xyXG4gICAgICAgICAgaXRlbXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICAvLyBDdXN0b20gaGFuZGxlciBmb3IgQUNGIG9wdGlvbnNcclxuICAgIGNvbnN0IGFjZk9wdGlvbnNIYW5kbGVyID0ge1xyXG4gICAgICBwYXR0ZXJuOiBcImFjZi1zZXR0aW5nc1wiLFxyXG4gICAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICAgICAgLy8gMS4gR2V0IEFDRiBvcHRpb24gcGFnZSBmcm9tIFJFU1QgQVBJLlxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbGlicmFyaWVzLnNvdXJjZS5hcGkuZ2V0KHtcclxuICAgICAgICAgIGVuZHBvaW50OiBgL2FjZi92My9vcHRpb25zL29wdGlvbnNgXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyAyLiBBZGQgZGF0YSB0byBgc291cmNlYC5cclxuICAgICAgICBjb25zdCBkYXRhID0gc3RhdGUuc291cmNlLmdldChyb3V0ZSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IC4uLm9wdGlvbiwgaXNBY2ZPcHRpb25zUGFnZTogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAgIC8vIEN1c3RvbSBoYW5kbGVyIGZvciBBQ0Ygb3B0aW9uc1xyXG4gICAgICBjb25zdCBhY2ZPcHRpb25zSGFuZGxlcjIgPSB7XHJcbiAgICAgICAgcGF0dGVybjogXCJwYWdlLWxvZ29cIixcclxuICAgICAgICBmdW5jOiBhc3luYyAoeyByb3V0ZSwgc3RhdGUsIGxpYnJhcmllcyB9KSA9PiB7XHJcbiAgICAgICAgICAvLyAxLiBHZXQgQUNGIG9wdGlvbiBwYWdlIGZyb20gUkVTVCBBUEkuXHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGxpYnJhcmllcy5zb3VyY2UuYXBpLmdldCh7XHJcbiAgICAgICAgICAgIGVuZHBvaW50OiBgcG9zdHNgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBcclxuICAgICAgICAgIC8vIDIuIEFkZCBkYXRhIHRvIGBzb3VyY2VgLlxyXG4gICAgICAgICAgY29uc3QgZGF0YSA9IHN0YXRlLnNvdXJjZS5nZXQocm91dGUpO1xyXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCB7IC4uLm9wdGlvbiwgaXNwYWdlbG9nbzogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuIFxyXG4gIFxyXG5cclxuICAgIGNvbnN0IG1hcnNUaGVtZSA9IHtcclxuICAgICAgbmFtZTogXCJncmFmaWtjZW50cmFsZW5cIixcclxuICAgICAgcm9vdHM6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiAgSW4gRnJvbnRpdHksIGFueSBwYWNrYWdlIGNhbiBhZGQgUmVhY3QgY29tcG9uZW50cyB0byB0aGUgc2l0ZS5cclxuICAgICAgICAgKiAgV2UgdXNlIHJvb3RzIGZvciB0aGF0LCBzY29wZWQgdG8gdGhlIGB0aGVtZWAgbmFtZXNwYWNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoZW1lOiBUaGVtZSxcclxuICAgICAgfSxcclxuICAgICAgc3RhdGU6IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBTdGF0ZSBpcyB3aGVyZSB0aGUgcGFja2FnZXMgc3RvcmUgdGhlaXIgZGVmYXVsdCBzZXR0aW5ncyBhbmQgb3RoZXJcclxuICAgICAgICAgKiByZWxldmFudCBzdGF0ZS4gSXQgaXMgc2NvcGVkIHRvIHRoZSBgdGhlbWVgIG5hbWVzcGFjZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGVtZToge1xyXG4gICAgICAgICAgbWVudTogW10sXHJcbiAgICAgICAgICBpc01vYmlsZU1lbnVPcGVuOiBmYWxzZSxcclxuICAgICAgICAgIGZlYXR1cmVkOiB7XHJcbiAgICAgICAgICAgIHNob3dPbkxpc3Q6IGZhbHNlLFxyXG4gICAgICAgICAgICBzaG93T25Qb3N0OiBmYWxzZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgLyoqXHJcbiAgICAgICAqIEFjdGlvbnMgYXJlIGZ1bmN0aW9ucyB0aGF0IG1vZGlmeSB0aGUgc3RhdGUgb3IgZGVhbCB3aXRoIG90aGVyIHBhcnRzIG9mXHJcbiAgICAgICAqIEZyb250aXR5IGxpa2UgbGlicmFyaWVzLlxyXG4gICAgICAgKi9cclxuICAgICAgYWN0aW9uczoge1xyXG4gICAgICAgIHRoZW1lOiB7XHJcbiAgICAgICAgICBiZWZvcmVTU1I6IGFzeW5jICh7IHN0YXRlLCBhY3Rpb25zIH0pID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiYWNmLXNldHRpbmdzXCIpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwicGFnZS1sb2dvXCIpLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgIGFjdGlvbnMuc291cmNlLmZldGNoKFwiYWxsQ2F0ZWdvcmllc1wiKSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG9nZ2xlTW9iaWxlTWVudTogKHsgc3RhdGUgfSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50aGVtZS5pc01vYmlsZU1lbnVPcGVuID0gIXN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW47XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgY2xvc2VNb2JpbGVNZW51OiAoeyBzdGF0ZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnRoZW1lLmlzTW9iaWxlTWVudU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgbGlicmFyaWVzOiB7XHJcbiAgICAgICAgaHRtbDJyZWFjdDoge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBBZGQgYSBwcm9jZXNzb3IgdG8gYGh0bWwycmVhY3RgIHNvIGl0IHByb2Nlc3NlcyB0aGUgYDxpbWc+YCB0YWdzXHJcbiAgICAgICAgICAgKiBpbnNpZGUgdGhlIGNvbnRlbnQgSFRNTC4gWW91IGNhbiBhZGQgeW91ciBvd24gcHJvY2Vzc29ycyB0b29cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgcHJvY2Vzc29yczogW2ltYWdlLCBpZnJhbWVdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc291cmNlOiB7XHJcbiAgICAgICAgaGFuZGxlcnM6IFthY2ZPcHRpb25zSGFuZGxlcjIsIGFjZk9wdGlvbnNIYW5kbGVyLCBhbGxDYXRlZ29yaWVzSGFuZGxlcl0sXHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBtYXJzVGhlbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/chimneytec/src/index.js\n");

/***/ })

})