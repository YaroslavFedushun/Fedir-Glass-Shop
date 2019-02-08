(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet> </router-outlet>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, MyModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyModel", function() { return MyModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Glass';
        this.clicks = 0;
    }
    AppComponent.prototype.count = function () {
        this.clicks++;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

var MyModel = /** @class */ (function () {
    function MyModel() {
    }
    return MyModel;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/gmap */ "./node_modules/primeng/gmap.js");
/* harmony import */ var primeng_gmap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_gmap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_home_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home-page/header/header.component */ "./src/app/components/home-page/header/header.component.ts");
/* harmony import */ var _components_home_page_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home-page/content/content.component */ "./src/app/components/home-page/content/content.component.ts");
/* harmony import */ var _components_home_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page/footer/footer.component */ "./src/app/components/home-page/footer/footer.component.ts");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/app/components/gallery/gallery.component.ts");
/* harmony import */ var _components_gallery_gallery_content_gallery_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/gallery/gallery-content/gallery-content.component */ "./src/app/components/gallery/gallery-content/gallery-content.component.ts");
/* harmony import */ var _components_gallery_gallery_header_gallery_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/gallery/gallery-header/gallery-header.component */ "./src/app/components/gallery/gallery-header/gallery-header.component.ts");
/* harmony import */ var _components_gallery_gallery_contact_gallery_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gallery/gallery-contact/gallery-contact.component */ "./src/app/components/gallery/gallery-contact/gallery-contact.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_glass_showers_glass_showers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/glass-showers/glass-showers.component */ "./src/app/components/glass-showers/glass-showers.component.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_home_page_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/home-page/google-map/google-map.component */ "./src/app/components/home-page/google-map/google-map.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_phone_nav_phone_nav_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/phone-nav/phone-nav.component */ "./src/app/components/phone-nav/phone-nav.component.ts");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/menu.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_menu__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _components_glass_stairs_glass_stairs_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/glass-stairs/glass-stairs.component */ "./src/app/components/glass-stairs/glass-stairs.component.ts");
/* harmony import */ var _components_send_mails_send_mails_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/send-mails/send-mails.component */ "./src/app/components/send-mails/send-mails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var appRoutes = [
    { path: '', component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"] },
    { path: 'gallery', component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"] },
    { path: 'gallery/sklyani-dushovi', component: _components_glass_showers_glass_showers_component__WEBPACK_IMPORTED_MODULE_15__["GlassShowersComponent"] },
    { path: 'gallery/sklyani-shody', component: _components_glass_stairs_glass_stairs_component__WEBPACK_IMPORTED_MODULE_24__["GlassStairsComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_page_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_home_page_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"],
                _components_home_page_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _components_gallery_gallery_content_gallery_content_component__WEBPACK_IMPORTED_MODULE_10__["GalleryContentComponent"],
                _components_gallery_gallery_header_gallery_header_component__WEBPACK_IMPORTED_MODULE_11__["GalleryHeaderComponent"],
                _components_gallery_gallery_contact_gallery_contact_component__WEBPACK_IMPORTED_MODULE_12__["GalleryContactComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
                _components_glass_showers_glass_showers_component__WEBPACK_IMPORTED_MODULE_15__["GlassShowersComponent"],
                _components_home_page_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_17__["GoogleMapComponent"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["Dialog"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_20__["Checkbox"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_20__["MultiSelectItem"],
                _components_phone_nav_phone_nav_component__WEBPACK_IMPORTED_MODULE_22__["PhoneNavComponent"],
                _components_glass_stairs_glass_stairs_component__WEBPACK_IMPORTED_MODULE_24__["GlassStairsComponent"],
                _components_send_mails_send_mails_component__WEBPACK_IMPORTED_MODULE_25__["SendMailsComponent"],
            ],
            imports: [
                primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_gmap__WEBPACK_IMPORTED_MODULE_2__["GMapModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_18__["ToastModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                primeng_menu__WEBPACK_IMPORTED_MODULE_23__["MenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [
                primeng_api__WEBPACK_IMPORTED_MODULE_16__["MessageService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery-contact/gallery-contact.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-contact/gallery-contact.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactsBaground{\r\n  background: #54595f;\r\n  color: white;\r\n}\r\n.contactsBaground span{\r\n  padding: 22px 13px 39px 0px;\r\n}\r\n.buttonNumberPhone{\r\n  margin: 30px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  color: #ffffff;\r\n  background-color: rgba(64,100,215,0);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: #ffffff;\r\n}\r\n.contactButtonNumber{\r\n  margin: 50px 0px;\r\n}\r\n.sendButtonMaill{\r\n  display: inline-block;\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: rgba(12,12,12,0.7);\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  border-radius: 50px;\r\n  color: #000000;\r\n  padding: 7px 6px 35px 11px;;\r\n  background-color: #23d1c8;\r\n}\r\n.inputMeassege{\r\n  margin: 8px;\r\n  border-radius: 9px;\r\n  padding: 9px;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .ourGoods img{\r\n    width: 100%;\r\n    height: 350px;\r\n  }\r\n  .ourGoods h1{\r\n    font-size: 27px;\r\n  }\r\n  .showersBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n  .doorsBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n  .contactsBaground h2 {\r\n    font-size: 24px;\r\n  }\r\n  .inputMeassege{\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktY29udGFjdC9nYWxsZXJ5LWNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0VBRUU7SUFDRSxZQUFZO0lBQ1osY0FBYztHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFlBQVk7R0FDYjtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktY29udGFjdC9nYWxsZXJ5LWNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0c0JhZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6ICM1NDU5NWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5kIHNwYW57XHJcbiAgcGFkZGluZzogMjJweCAxM3B4IDM5cHggMHB4O1xyXG59XHJcbi5idXR0b25OdW1iZXJQaG9uZXtcclxuICBtYXJnaW46IDMwcHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwxMDAsMjE1LDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdEJ1dHRvbk51bWJlcntcclxuICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcblxyXG4uc2VuZEJ1dHRvbk1haWxse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweCAycHggMnB4IDJweDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTIsMTIsMTIsMC43KTtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiA3cHggNnB4IDM1cHggMTFweDs7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDFjODtcclxufVxyXG4uaW5wdXRNZWFzc2VnZXtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbmFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5vdXJHb29kcyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG4gIC5vdXJHb29kcyBoMXtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICB9XHJcbiAgLnNob3dlcnNCbG9jayAuaW5mb3JtQmxvY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG4gIC5kb29yc0Jsb2NrIC5pbmZvcm1CbG9ja3tcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmNvbnRhY3RzQmFncm91bmQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAuaW5wdXRNZWFzc2VnZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/gallery/gallery-contact/gallery-contact.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-contact/gallery-contact.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contactsBlock\" class=\"contactsBaground\">\n  <div class=\"container\">\n    <div class=\"col-md-8 text-center\">\n      <h2>Є ідея? Ми допоможемо з реалізацією.</h2>\n\n      <p>Команда професіоналів, разом із сучасним обладнанням по обробці скла та дзеркала у Львові, готові взятись за Ваш проект і виконати роботу на найвищому рівні.</p>\n     <app-send-mails></app-send-mails>\n    </div>\n    <div class=\"col-md-4\">\n      <h2>Дзвоніть вже зараз, щоб отримати консультацію.</h2>\n      <div class=\"text-center\">\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery-contact/gallery-contact.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-contact/gallery-contact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GalleryContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContactComponent", function() { return GalleryContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryContactComponent = /** @class */ (function () {
    function GalleryContactComponent() {
    }
    GalleryContactComponent.prototype.ngOnInit = function () {
    };
    GalleryContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-contact',
            template: __webpack_require__(/*! ./gallery-contact.component.html */ "./src/app/components/gallery/gallery-contact/gallery-contact.component.html"),
            styles: [__webpack_require__(/*! ./gallery-contact.component.css */ "./src/app/components/gallery/gallery-contact/gallery-contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryContactComponent);
    return GalleryContactComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery-content/gallery-content.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-content/gallery-content.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n.inform{\r\n  font-family: 'Varela Round',sans-serif;\r\n}\r\n.buttonMore{\r\n  background-color: #54595f;\r\n  border-color: #54595f;\r\n  margin-top: 10px;\r\n}\r\n.showersBlock .informBlock{\r\n  margin-top: 40%;\r\n}\r\n.stairsBlock .informBlock{\r\n  margin-top: 15%;\r\n}\r\n.ourGoods{\r\n  margin: 30px 0px;\r\n}\r\n.ourGoods h1{\r\n  font-size: 42px;\r\n}\r\n.doorsBlock .informBlock{\r\n  margin-top: 25%;\r\n}\r\n.railingsBlock img{\r\n  width: 100%;\r\n}\r\n.marginInform{\r\n  margin-top: 20%;\r\n}\r\np{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 16px;\r\n\r\n}\r\n.ourGoods img{\r\n  width: 100%;\r\n\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .ourGoods img{\r\n    width: 100%;\r\n    height: 350px;\r\n  }\r\n  .ourGoods h1{\r\n    font-size: 27px;\r\n  }\r\n  .showersBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n  .doorsBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n\r\n}\r\n@media only screen\r\nand (max-width: 1000px) {\r\n  .showersBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n  .doorsBlock .informBlock{\r\n    margin-top: 0px;\r\n  }\r\n  .buttonMore{\r\n    margin: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktY29udGVudC9nYWxsZXJ5LWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsdUNBQXVDO0NBQ3hDO0FBQ0Q7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCOztDQUVqQjtBQUNEO0VBQ0UsWUFBWTs7Q0FFYjtBQUNEOztFQUVFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7R0FDZjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjs7Q0FFRjtBQUNEOztFQUVFO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktY29udGVudC9nYWxsZXJ5LWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmluZm9ybXtcclxuICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCcsc2Fucy1zZXJpZjtcclxufVxyXG4uYnV0dG9uTW9yZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1OTVmO1xyXG4gIGJvcmRlci1jb2xvcjogIzU0NTk1ZjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zaG93ZXJzQmxvY2sgLmluZm9ybUJsb2Nre1xyXG4gIG1hcmdpbi10b3A6IDQwJTtcclxufVxyXG4uc3RhaXJzQmxvY2sgLmluZm9ybUJsb2Nre1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxufVxyXG4ub3VyR29vZHN7XHJcbiAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG4ub3VyR29vZHMgaDF7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG59XHJcbi5kb29yc0Jsb2NrIC5pbmZvcm1CbG9ja3tcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbn1cclxuLnJhaWxpbmdzQmxvY2sgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5tYXJnaW5JbmZvcm17XHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxufVxyXG4ub3VyR29vZHMgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLm91ckdvb2RzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcbiAgLm91ckdvb2RzIGgxe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gIH1cclxuICAuc2hvd2Vyc0Jsb2NrIC5pbmZvcm1CbG9ja3tcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmRvb3JzQmxvY2sgLmluZm9ybUJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbmFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAuc2hvd2Vyc0Jsb2NrIC5pbmZvcm1CbG9ja3tcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLmRvb3JzQmxvY2sgLmluZm9ybUJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxuICAuYnV0dG9uTW9yZXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/gallery/gallery-content/gallery-content.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-content/gallery-content.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row showersBlock ourGoods\">\n    <div class=\"col-md-8  text-center\">\n      <img width=\"683\" height=\"1024\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1-683x1024.jpg\" class=\"attachment-large size-large\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1-683x1024.jpg 683w, http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1-200x300.jpg 200w, http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1-768x1152.jpg 768w\" sizes=\"(max-width: 683px) 100vw, 683px\">\n    </div>\n    <div class=\"col-md-4 \">\n      <div class=\"informBlock\">\n        <div class=\"titleInform text-center\">\n          <h1>Скляні душові</h1>\n        </div>\n        <div class=\"inform\">\n          <p>Душові кабіни зі скла – чудовий вибір для тих, хто цінує простір та елегантність. Якщо у квартирі, чи Вашому будинку обмежений простір для встановлення ванни – така душова кабіна чудовий вибір! А ще вироби зі скла прекрасно вписуються в інтер’єр з деревом та металом.</p>\n          <p>Всі кріплення виготовлені з якісної нержавіючої сталі, що гарантує надійність та довговічність.</p>\n        </div>\n        <a class=\"btn btn-success btn-lg buttonMore\" routerLinkActive=\"active\" routerLink=\"sklyani-dushovi\">Більше</a>\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row stairsBlock ourGoods\">\n    <div class=\"col-md-3\">\n      <div class=\"informBlock\">\n        <div class=\"titleInform \">\n          <h1>Скляні сходи</h1>\n        </div>\n        <div class=\"inform\">\n          <p>На перший погляд здається, що скляні сходи – це доволі ненадійна штука. Але це не так!</p>\n          <p>При виготовленні скляні сходи гартуємо, а для ще більшої надійності робимо триплексацю сходинок – коли дві деталі з’єднуються за допомогою спеціальної прозорої плівки.</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-lg buttonMore\"  routerLink=\"sklyani-shody\">Більше</button>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-9 text-center\">\n      <img width=\"1024\" height=\"860\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/scale-in-vetro-gradini-in-vetro-1024x860.jpg\" class=\"attachment-large size-large\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/10/scale-in-vetro-gradini-in-vetro-1024x860.jpg 1024w, http://new-glass.com.ua/wp-content/uploads/2018/10/scale-in-vetro-gradini-in-vetro-300x252.jpg 300w, http://new-glass.com.ua/wp-content/uploads/2018/10/scale-in-vetro-gradini-in-vetro-768x645.jpg 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\">\n    </div>\n  </div>\n  <div class=\"row doorsBlock ourGoods\">\n    <div class=\"col-md-8 text-center\">\n      <img width=\"1024\" height=\"751\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_511782502-1024x751.jpg\" class=\"attachment-large size-large\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_511782502-1024x751.jpg 1024w, http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_511782502-300x220.jpg 300w, http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_511782502-768x563.jpg 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\">\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"informBlock \">\n        <div class=\"titleInform text-center\">\n          <h1>Скляні Двері</h1>\n        </div>\n        <div class=\"inform\">\n          <p>На зміну звичним дерев’яним дверям приходить сучасний альтернативний варіант – двері, виготовлені із гартованого скла.</p>\n          <p>Завдяки встановленню їх в квартирі, простір позбавляється своєї замкнутості, візуально значно розширюється. Вони здатні надати елегантність і неповторність кожному приміщенню, ставши гідною прикрасою інтер’єру.</p>\n          <p>Скляні двері за типом відкривання поділяються на:</p>\n          <ul><li>Маятникові. Вони можуть відкриватися всередину і назовні,&nbsp;</li><li>Двостулкові. Вони можуть відкриватися тільки в одну сторону.</li><li>Розсувні. При відкриванні вони від’їжджають убік.&nbsp;</li></ul>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-lg buttonMore\">Більше</button>\n\n      </div>\n\n    </div>\n\n  </div>\n  <div class=\"row railingsBlock ourGoods\">\n    <div class=\"col-md-3\">\n      <div class=\"informBlock marginInform\">\n        <div class=\"titleInform \">\n          <h1>Скляні перила</h1>\n        </div>\n        <div class=\"inform\">\n          <p>Скляні перила уже давно стали невід’ємною частиною торгових центрів. І тепер вони часто застосовуються і в приватних будинках. На перший погляд скло – доволі крихкий матеріал, та при виготовленні скляних поручнів використовується гартоване скло з подвійною, і навіть потрійною триплексацією.</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-lg buttonMore\">Більше</button>\n      </div>\n    </div>\n    <div class=\"col-md-9 text-center\">\n      <img src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_147789878.jpg\"  >\n    </div>\n  </div>\n  <div class=\"row partitionsBlock ourGoods\">\n    <div class=\"col-md-8 text-center\">\n      <img width=\"1024\" height=\"707\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/44-1024x707.jpg\" class=\"attachment-large size-large\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/10/44-1024x707.jpg 1024w, http://new-glass.com.ua/wp-content/uploads/2018/10/44-300x207.jpg 300w, http://new-glass.com.ua/wp-content/uploads/2018/10/44-768x531.jpg 768w\" sizes=\"(max-width: 1024px) 100vw, 1024px\">    </div>\n    <div class=\"col-md-4\">\n      <div class=\"informBlock marginInform\">\n        <div class=\"titleInform text-center\">\n          <h1>Скляні перегородки</h1>\n        </div>\n        <div class=\"inform \">\n          <p>Скляні перегородки – чудовий спосіб зонального розмежування у квартирах, чи будинках. Такі перегородки займають дуже мало місця, візуально вони не зменшують простір, а саме скло доволі гармонійно комбінується з дерев’яним інтер’єром та металевими елементами.</p>\n          <p>При використанні скляних перегородок в офісах, окрім елегантності та практичності Ви отримуєте хорошу звукоізоляцію кабінетів.</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-lg buttonMore\">Більше</button>\n\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row facadesBlock ourGoods\">\n    <div class=\"col-md-4\">\n      <div class=\"informBlock marginInform\">\n        <div class=\"titleInform text-center\">\n          <h1>Скляні фасади</h1>\n        </div>\n        <div class=\"inform \">\n          <p>Сучасне будівництво йде в ногу з часом. І обштукатурювання або облицювання плиткою хоч і вважаються оптимальними, та своєю оригінальністю поступаються фасадному склінню. Така технологія вирішує ряд завдань: збільшує пропускання природнього освітлення (що у свою чергу зменшує витрати електроенергії, підвищує рівень звукоізоляції, та надає будівлі більш презентабельного та сучасного вигляду.</p>\n        </div>\n        <button type=\"button\" class=\"btn btn-success btn-lg buttonMore\">Більше</button>\n\n      </div>\n\n    </div>\n    <div class=\"col-md-8 text-center\">\n      <img width=\"1024\" height=\"730\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/noname17-1024x730.jpg\" class=\"attachment-large size-large\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/10/noname17-1024x730.jpg 1024w, http://new-glass.com.ua/wp-content/uploads/2018/10/noname17-300x214.jpg 300w, http://new-glass.com.ua/wp-content/uploads/2018/10/noname17-768x548.jpg 768w, http://new-glass.com.ua/wp-content/uploads/2018/10/noname17.jpg 1500w\" sizes=\"(max-width: 1024px) 100vw, 1024px\">    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery-content/gallery-content.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-content/gallery-content.component.ts ***!
  \*********************************************************************************/
/*! exports provided: GalleryContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryContentComponent", function() { return GalleryContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryContentComponent = /** @class */ (function () {
    function GalleryContentComponent() {
    }
    GalleryContentComponent.prototype.ngOnInit = function () {
    };
    GalleryContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-content',
            template: __webpack_require__(/*! ./gallery-content.component.html */ "./src/app/components/gallery/gallery-content/gallery-content.component.html"),
            styles: [__webpack_require__(/*! ./gallery-content.component.css */ "./src/app/components/gallery/gallery-content/gallery-content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryContentComponent);
    return GalleryContentComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery-header/gallery-header.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-header/gallery-header.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n.headerBlock{\r\n  margin-top: 20px;\r\n  padding: 1px 0px 60px 0px;\r\n}\r\n.menuItem{\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n  color: black;\r\n}\r\n.menuList{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.2em;\r\n  font-weight: 800;\r\n  text-transform: uppercase\r\n\r\n}\r\n.logoTitle{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 68px;\r\n  font-weight: 400;\r\n  letter-spacing: 0.6px;\r\n  color: #0c0c0c;\r\n}\r\n.headerLogoBlock p{\r\n  color: #0c0c0c;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  line-height: 12px;\r\n  margin-bottom: 60px;\r\n}\r\n.headerButton{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3.7px;\r\n  color: #0c0c0c;\r\n  background-color: rgba(142,142,142,0.82);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  text-decoration: none;\r\n\r\n}\r\n.backgroundTitle{\r\n  height: 500px;\r\n  background-color: rgba(147,147,147,0);\r\n  background-image: url(https://i.imgur.com/PBeES81.jpg);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  color: white;\r\n  padding: 150px 0px 150px 0px;\r\n  background-attachment: fixed;\r\n}\r\n.titleBlock{\r\n  background: #201e1e;\r\n  color: aliceblue;\r\n}\r\n.titleBlock h1{\r\n  font-family: \"Roboto Slab\", Sans-serif;\r\n  font-weight: 600;\r\n  text-shadow: -3px 0px 10px rgba(0,0,0,0.3);\r\n  font-size: 42px;\r\n  margin-left: 10px;\r\n\r\n}\r\n.titleBlock h5{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n.titleInform{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.headerMenuPhone{\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .backgroundTitle{\r\n    padding: 0px 0px 150px 0px;\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 1100px) {\r\n  .headerMenuPhone{\r\n    display: block;\r\n  }\r\n  .headerMenu{\r\n    display: none;\r\n  }\r\n  .headerBlock{\r\n    margin-top: 0px;\r\n    padding: 0px 0px 0px 0px;\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 800px) {\r\n  .backgroundTitle{\r\n    height: 600px;\r\n    padding: 100px 0px 150px 0px;\r\n\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYWxsZXJ5L2dhbGxlcnktaGVhZGVyL2dhbGxlcnktaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCOztDQUUxQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isc0JBQXNCOztDQUV2QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHNDQUFzQztFQUN0Qyx1REFBdUQ7RUFDdkQsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsOEVBQThFO0VBQzlFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0NBRW5CO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUNEOztFQUVFO0lBQ0UsMkJBQTJCO0dBQzVCO0NBQ0Y7QUFDRDs7RUFFRTtJQUNFLGVBQWU7R0FDaEI7RUFDRDtJQUNFLGNBQWM7R0FDZjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtHQUMxQjtDQUNGO0FBRUQ7O0VBRUU7SUFDRSxjQUFjO0lBQ2QsNkJBQTZCOztHQUU5Qjs7Q0FFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LWhlYWRlci9nYWxsZXJ5LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyQmxvY2t7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxcHggMHB4IDYwcHggMHB4O1xyXG59XHJcbi5tZW51SXRlbXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1lbnVMaXN0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcblxyXG59XHJcbi5sb2dvVGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIGNvbG9yOiAjMGMwYzBjO1xyXG59XHJcbi5oZWFkZXJMb2dvQmxvY2sgcHtcclxuICBjb2xvcjogIzBjMGMwYztcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5oZWFkZXJCdXR0b257XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMy43cHg7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDIsMTQyLDE0MiwwLjgyKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZFRpdGxle1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDcsMTQ3LDE0NywwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9QQmVFUzgxLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCBib3JkZXIgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTUwcHggMHB4IDE1MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi50aXRsZUJsb2Nre1xyXG4gIGJhY2tncm91bmQ6ICMyMDFlMWU7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4udGl0bGVCbG9jayBoMXtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG8gU2xhYlwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1zaGFkb3c6IC0zcHggMHB4IDEwcHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIGZvbnQtc2l6ZTogNDJweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbn1cclxuLnRpdGxlQmxvY2sgaDV7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZUluZm9ybXtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVyTWVudVBob25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmJhY2tncm91bmRUaXRsZXtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggMTUwcHggMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5oZWFkZXJNZW51UGhvbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmhlYWRlck1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGVhZGVyQmxvY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJhY2tncm91bmRUaXRsZXtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwcHggMTUwcHggMHB4O1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/gallery/gallery-header/gallery-header.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-header/gallery-header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-phone-nav></app-phone-nav>\n\n<div class=\"headerBlock text-center\">\n  <div class=\"headerMenu\">\n    <ul class=\"menuList\">\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\" \">Головна</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\" \">Про нас</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\" \">Послуги</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" routerLinkActive=\"active\" routerLink=\"gallery\">Галерея</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\" \">Контакти</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"ourPtoject\">\n  <div class=\"titleBlock \">\n    <div class=\"backgroundTitle\">\n\n      <div class=\"col-md-5 col-sm-6 text-center titleLogo\">\n        <img width=\"235\" height=\"300\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png 235w, http://new-glass.com.ua/wp-content/uploads/2018/08/12.png 317w\" sizes=\"(max-width: 235px) 100vw, 235px\">\n      </div>\n      <div class=\"col-md-7 col-sm-6 titleLogo\">\n        <h1>Наші проекти</h1>\n        <h5>Втілюємо Ваші сміливі ідеї у склі.</h5>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery-header/gallery-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/gallery/gallery-header/gallery-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: GalleryHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryHeaderComponent", function() { return GalleryHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryHeaderComponent = /** @class */ (function () {
    function GalleryHeaderComponent() {
    }
    GalleryHeaderComponent.prototype.ngOnInit = function () {
    };
    GalleryHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-header',
            template: __webpack_require__(/*! ./gallery-header.component.html */ "./src/app/components/gallery/gallery-header/gallery-header.component.html"),
            styles: [__webpack_require__(/*! ./gallery-header.component.css */ "./src/app/components/gallery/gallery-header/gallery-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryHeaderComponent);
    return GalleryHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/gallery/gallery.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-gallery-header></app-gallery-header>\n<app-gallery-content></app-gallery-content>\n<app-gallery-contact></app-gallery-contact>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/gallery/gallery.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gallery/gallery.component.ts ***!
  \*********************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/glass-showers/glass-showers.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/glass-showers/glass-showers.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n.headerBlock{\r\n  margin-top: 20px;\r\n  padding: 1px 0px 60px 0px;\r\n}\r\n.menuItem{\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n  color: black;\r\n}\r\n.menuList{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.2em;\r\n  font-weight: 800;\r\n  text-transform: uppercase\r\n\r\n}\r\n.logoTitle{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 68px;\r\n  font-weight: 400;\r\n  letter-spacing: 0.6px;\r\n  color: #0c0c0c;\r\n}\r\n.headerLogoBlock p{\r\n  color: #0c0c0c;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  line-height: 12px;\r\n  margin-bottom: 60px;\r\n}\r\n.headerButton{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3.7px;\r\n  color: #0c0c0c;\r\n  background-color: rgba(142,142,142,0.82);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  text-decoration: none;\r\n\r\n}\r\n.backgroundTitle{\r\n  height: 500px;\r\n  background-color: rgba(147,147,147,0);\r\n  background-image: url(https://i.imgur.com/PBeES81.jpg);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  color: white;\r\n  padding: 150px 0px 150px 0px;\r\n  background-attachment: fixed\r\n}\r\n.titleBlock{\r\n  background: #201e1e;\r\n  color: aliceblue;\r\n}\r\n.titleBlock h1{\r\n  font-family: \"Roboto Slab\", Sans-serif;\r\n  font-weight: 600;\r\n  text-shadow: -3px 0px 10px rgba(0,0,0,0.3);\r\n  font-size: 42px;\r\n  margin-left: 10px;\r\n\r\n}\r\n.titleBlock h5{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n.titleInform{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.photoStyle img{\r\n  margin: 40px 0px;\r\n}\r\n.contactsBaground{\r\n  background: #54595f;\r\n  color: white;\r\n}\r\n.contactsBaground span{\r\n  padding: 22px 0px 39px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.buttonNumberPhone{\r\n  margin: 30px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  color: #ffffff;\r\n  background-color: rgba(64,100,215,0);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: #ffffff;\r\n}\r\n.contactButtonNumber{\r\n  margin: 50px 0px;\r\n}\r\n.sendButtonMaill{\r\n  display: inline-block;\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: rgba(12,12,12,0.7);\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  border-radius: 50px;\r\n  color: #000000;\r\n  padding: 7px 6px 35px 11px;;\r\n  background-color: #23d1c8;\r\n}\r\n.inputMeassege{\r\n  margin: 8px;\r\n  border-radius: 9px;\r\n  padding: 9px;\r\n}\r\n.headerMenuPhone{\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .backgroundTitle{\r\n    padding: 0px 0px 150px 0px;\r\n  }\r\n  .contactsBaground h2 {\r\n    font-size: 24px;\r\n  }\r\n  .photoStyle img {\r\n    margin: 40px 0px;\r\n    height: 500px;\r\n}\r\n}\r\n@media only screen\r\nand (max-width: 1100px) {\r\n  .headerMenuPhone{\r\n    display: block;\r\n  }\r\n  .headerMenu{\r\n    display: none;\r\n  }\r\n  .headerBlock{\r\n    margin-top: 0px;\r\n    padding: 0px 0px 0px 0px;\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 1000px) {\r\n  .backgroundTitle{\r\n    height: 600px;\r\n    padding: 150px 0px 150px 0px;\r\n    background-attachment: fixed;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nbGFzcy1zaG93ZXJzL2dsYXNzLXNob3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7O0NBRTFCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsb0JBQW9CO0NBQ3JCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixzQkFBc0I7O0NBRXZCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLHVEQUF1RDtFQUN2RCxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2Qiw4RUFBOEU7RUFDOUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsdUNBQXVDO0VBQ3ZDLGlCQUFpQjtFQUNqQiwyQ0FBMkM7RUFDM0MsZ0JBQWdCO0VBQ2hCLGtCQUFrQjs7Q0FFbkI7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsMkJBQTJCO0VBQzNCLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxtQ0FBbUM7RUFDbkMsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixpQ0FBaUM7RUFDakMscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0NBQ2Q7QUFDRDs7RUFFRTtJQUNFLDJCQUEyQjtHQUM1QjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztDQUNqQjtDQUNBO0FBQ0Q7O0VBRUU7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7R0FDMUI7Q0FDRjtBQUNEOztFQUVFO0lBQ0UsY0FBYztJQUNkLDZCQUE2QjtJQUM3Qiw2QkFBNkI7R0FDOUI7O0NBRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dsYXNzLXNob3dlcnMvZ2xhc3Mtc2hvd2Vycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyQmxvY2t7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxcHggMHB4IDYwcHggMHB4O1xyXG59XHJcbi5tZW51SXRlbXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1lbnVMaXN0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcblxyXG59XHJcbi5sb2dvVGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIGNvbG9yOiAjMGMwYzBjO1xyXG59XHJcbi5oZWFkZXJMb2dvQmxvY2sgcHtcclxuICBjb2xvcjogIzBjMGMwYztcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5oZWFkZXJCdXR0b257XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMy43cHg7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDIsMTQyLDE0MiwwLjgyKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZFRpdGxle1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDcsMTQ3LDE0NywwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9QQmVFUzgxLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCBib3JkZXIgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTUwcHggMHB4IDE1MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkXHJcbn1cclxuLnRpdGxlQmxvY2t7XHJcbiAgYmFja2dyb3VuZDogIzIwMWUxZTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi50aXRsZUJsb2NrIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXNoYWRvdzogLTNweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG4udGl0bGVCbG9jayBoNXtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRpdGxlSW5mb3Jte1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG59XHJcbi5waG90b1N0eWxlIGltZ3tcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6ICM1NDU5NWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5kIHNwYW57XHJcbiAgcGFkZGluZzogMjJweCAwcHggMzlweCAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbn1cclxuLmJ1dHRvbk51bWJlclBob25le1xyXG4gIG1hcmdpbjogMzBweCAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY0LDEwMCwyMTUsMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4IDUwcHggNTBweDtcclxuICBwYWRkaW5nOiAxNXB4IDMwcHggMTVweCAzMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHggMnB4IDJweCAycHg7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb250YWN0QnV0dG9uTnVtYmVye1xyXG4gIG1hcmdpbjogNTBweCAwcHg7XHJcbn1cclxuXHJcbi5zZW5kQnV0dG9uTWFpbGx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMiwxMiwxMiwwLjcpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDdweCA2cHggMzVweCAxMXB4OztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMWM4O1xyXG59XHJcbi5pbnB1dE1lYXNzZWdle1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuLmhlYWRlck1lbnVQaG9uZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuXHJcbmFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5iYWNrZ3JvdW5kVGl0bGV7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDE1MHB4IDBweDtcclxuICB9XHJcbiAgLmNvbnRhY3RzQmFncm91bmQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuICAucGhvdG9TdHlsZSBpbWcge1xyXG4gICAgbWFyZ2luOiA0MHB4IDBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5oZWFkZXJNZW51UGhvbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmhlYWRlck1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGVhZGVyQmxvY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLmJhY2tncm91bmRUaXRsZXtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNTBweCAwcHggMTUwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/glass-showers/glass-showers.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/glass-showers/glass-showers.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-phone-nav></app-phone-nav>\n\n<div class=\"headerBlock text-center\">\n  <div class=\"headerMenu\">\n    <ul class=\"menuList\">\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"/\">Головна</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#aboutUsBlock\">Про нас</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#ourServiceBlock\">Послуги</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" routerLinkActive=\"active\"  href=\"../gallery\">Галерея</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#contactsBlock\">Контакти</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"ourPtoject\">\n  <div class=\"titleBlock \">\n    <div class=\"backgroundTitle\">\n\n      <div class=\"col-md-5 text-center titleLogo\">\n        <img width=\"235\" height=\"300\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png 235w, http://new-glass.com.ua/wp-content/uploads/2018/08/12.png 317w\" sizes=\"(max-width: 235px) 100vw, 235px\">\n      </div>\n      <div class=\"col-md-7 titleLogo\">\n\n        <h1>{{products.title}}</h1>\n        <h5>Сміливі ідеї у склі.</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid photoStyle\">\n\n  <div class=\"row\" >\n    <div class=\"col-md-6\" *ngFor=\"let image of  products.images\">\n      <img height=\"900px\" width=\"100%\" src=\"{{image.src}}\">\n    </div>\n\n</div>\n\n\n<div id=\"contactsBlock\" class=\"contactsBaground\">\n  <div class=\"container\">\n    <div class=\"col-md-8\">\n      <h2>Є ідея? Ми допоможемо з реалізацією.</h2>\n\n      <p>Команда професіоналів, разом із сучасним обладнанням по обробці скла та дзеркала у Львові, готові взятись за Ваш проект і виконати роботу на найвищому рівні.</p>\n      <h2>Дзвоніть вже зараз, щоб отримати консультацію.</h2>\n    </div>\n    <div class=\"col-md-4\">\n\n      <div class=\"text-center\">\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n      </div>\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/glass-showers/glass-showers.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/glass-showers/glass-showers.component.ts ***!
  \*********************************************************************/
/*! exports provided: GlassShowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassShowersComponent", function() { return GlassShowersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlassShowersComponent = /** @class */ (function () {
    function GlassShowersComponent() {
        this.products = { title: 'Скляні душові',
            images: [
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_278135804-11-1-884x1024.jpg ' },
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1.jpg' },
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_281855216-11.jpg' }
            ]
        };
    }
    GlassShowersComponent.prototype.ngOnInit = function () {
    };
    GlassShowersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-glass-showers',
            template: __webpack_require__(/*! ./glass-showers.component.html */ "./src/app/components/glass-showers/glass-showers.component.html"),
            styles: [__webpack_require__(/*! ./glass-showers.component.css */ "./src/app/components/glass-showers/glass-showers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlassShowersComponent);
    return GlassShowersComponent;
}());



/***/ }),

/***/ "./src/app/components/glass-stairs/glass-stairs.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/glass-stairs/glass-stairs.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n.headerBlock{\r\n  margin-top: 20px;\r\n  padding: 1px 0px 60px 0px;\r\n}\r\n.menuItem{\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n  color: black;\r\n}\r\n.menuList{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.2em;\r\n  font-weight: 800;\r\n  text-transform: uppercase\r\n\r\n}\r\n.logoTitle{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 68px;\r\n  font-weight: 400;\r\n  letter-spacing: 0.6px;\r\n  color: #0c0c0c;\r\n}\r\n.headerLogoBlock p{\r\n  color: #0c0c0c;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  line-height: 12px;\r\n  margin-bottom: 60px;\r\n}\r\n.headerButton{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3.7px;\r\n  color: #0c0c0c;\r\n  background-color: rgba(142,142,142,0.82);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  text-decoration: none;\r\n\r\n}\r\n.backgroundTitle{\r\n  height: 500px;\r\n  background-color: rgba(147,147,147,0);\r\n  background-image: url(https://i.imgur.com/PBeES81.jpg);\r\n  background-position: center center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  color: white;\r\n  padding: 150px 0px 150px 0px;\r\n  background-attachment: fixed\r\n}\r\n.titleBlock{\r\n  background: #201e1e;\r\n  color: aliceblue;\r\n}\r\n.titleBlock h1{\r\n  font-family: \"Roboto Slab\", Sans-serif;\r\n  font-weight: 600;\r\n  text-shadow: -3px 0px 10px rgba(0,0,0,0.3);\r\n  font-size: 42px;\r\n  margin-left: 10px;\r\n\r\n}\r\n.titleBlock h5{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n}\r\n.titleInform{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.photoStyle img{\r\n  margin: 40px 0px;\r\n}\r\n.contactsBaground{\r\n  background: #54595f;\r\n  color: white;\r\n}\r\n.contactsBaground span{\r\n  padding: 22px 13px 39px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.buttonNumberPhone{\r\n  margin: 30px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  color: #ffffff;\r\n  background-color: rgba(64,100,215,0);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: #ffffff;\r\n}\r\n.contactButtonNumber{\r\n  margin: 50px 0px;\r\n}\r\n.sendButtonMaill{\r\n  display: inline-block;\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: rgba(12,12,12,0.7);\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  border-radius: 50px;\r\n  color: #000000;\r\n  padding: 7px 6px 35px 11px;;\r\n  background-color: #23d1c8;\r\n}\r\n.inputMeassege{\r\n  margin: 8px;\r\n  border-radius: 9px;\r\n  padding: 9px;\r\n}\r\n.headerMenuPhone{\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .backgroundTitle{\r\n    padding: 0px 0px 150px 0px;\r\n  }\r\n  .contactsBaground h2 {\r\n    font-size: 24px;\r\n  }\r\n  .photoStyle img {\r\n    margin: 40px 0px;\r\n    height: 500px;\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 1100px) {\r\n  .headerMenuPhone{\r\n    display: block;\r\n  }\r\n  .headerMenu{\r\n    display: none;\r\n  }\r\n  .headerBlock{\r\n    margin-top: 0px;\r\n    padding: 0px 0px 0px 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nbGFzcy1zdGFpcnMvZ2xhc3Mtc3RhaXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIseUJBQXlCOztDQUUxQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isc0JBQXNCOztDQUV2QjtBQUNEO0VBQ0UsY0FBYztFQUNkLHNDQUFzQztFQUN0Qyx1REFBdUQ7RUFDdkQsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDdkIsOEVBQThFO0VBQzlFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0NBRW5CO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUVEO0VBQ0UscUNBQXFDO0NBQ3RDO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG9CQUFvQjtFQUNwQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLDRCQUE0QjtFQUM1QixxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLHFDQUFxQztFQUNyQyxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBQ0Q7O0VBRUU7SUFDRSwyQkFBMkI7R0FDNUI7RUFDRDtJQUNFLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZjtDQUNGO0FBQ0Q7O0VBRUU7SUFDRSxlQUFlO0dBQ2hCO0VBQ0Q7SUFDRSxjQUFjO0dBQ2Y7RUFDRDtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7R0FDMUI7Q0FDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2xhc3Mtc3RhaXJzL2dsYXNzLXN0YWlycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyQmxvY2t7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBwYWRkaW5nOiAxcHggMHB4IDYwcHggMHB4O1xyXG59XHJcbi5tZW51SXRlbXtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLm1lbnVMaXN0e1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXHJcblxyXG59XHJcbi5sb2dvVGl0bGV7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiA2OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gIGNvbG9yOiAjMGMwYzBjO1xyXG59XHJcbi5oZWFkZXJMb2dvQmxvY2sgcHtcclxuICBjb2xvcjogIzBjMGMwYztcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG59XHJcbi5oZWFkZXJCdXR0b257XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMy43cHg7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDIsMTQyLDE0MiwwLjgyKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG4uYmFja2dyb3VuZFRpdGxle1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDcsMTQ3LDE0NywwKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pLmltZ3VyLmNvbS9QQmVFUzgxLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzLCBib3JkZXIgMC4zcywgYm9yZGVyLXJhZGl1cyAwLjNzLCBib3gtc2hhZG93IDAuM3M7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTUwcHggMHB4IDE1MHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkXHJcbn1cclxuLnRpdGxlQmxvY2t7XHJcbiAgYmFja2dyb3VuZDogIzIwMWUxZTtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcbi50aXRsZUJsb2NrIGgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90byBTbGFiXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXNoYWRvdzogLTNweCAwcHggMTBweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxufVxyXG4udGl0bGVCbG9jayBoNXtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnRpdGxlSW5mb3Jte1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG59XHJcbi5waG90b1N0eWxlIGltZ3tcclxuICBtYXJnaW46IDQwcHggMHB4O1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6ICM1NDU5NWY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5kIHNwYW57XHJcbiAgcGFkZGluZzogMjJweCAxM3B4IDM5cHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG59XHJcbi5idXR0b25OdW1iZXJQaG9uZXtcclxuICBtYXJnaW46IDMwcHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwxMDAsMjE1LDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdEJ1dHRvbk51bWJlcntcclxuICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcblxyXG4uc2VuZEJ1dHRvbk1haWxse1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDJweCAycHggMnB4IDJweDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMTIsMTIsMTIsMC43KTtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nOiA3cHggNnB4IDM1cHggMTFweDs7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDFjODtcclxufVxyXG4uaW5wdXRNZWFzc2VnZXtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59XHJcbi5oZWFkZXJNZW51UGhvbmV7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuYmFja2dyb3VuZFRpdGxle1xyXG4gICAgcGFkZGluZzogMHB4IDBweCAxNTBweCAwcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0c0JhZ3JvdW5kIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLnBob3RvU3R5bGUgaW1nIHtcclxuICAgIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG4gIC5oZWFkZXJNZW51UGhvbmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmhlYWRlck1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGVhZGVyQmxvY2t7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/glass-stairs/glass-stairs.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/glass-stairs/glass-stairs.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-phone-nav></app-phone-nav>\n\n<div class=\"headerBlock text-center\">\n  <div class=\"headerMenu\">\n    <ul class=\"menuList\">\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"/\">Головна</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#aboutUsBlock\">Про нас</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#ourServiceBlock\">Послуги</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" routerLinkActive=\"active\"  href=\"../gallery\">Галерея</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\"#contactsBlock\">Контакти</a></li>\n    </ul>\n  </div>\n</div>\n<div class=\"ourPtoject\">\n  <div class=\"titleBlock \">\n    <div class=\"backgroundTitle\">\n\n      <div class=\"col-md-5 text-center titleLogo\">\n        <img width=\"235\" height=\"300\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png\" class=\"attachment-medium size-medium\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/08/12-235x300.png 235w, http://new-glass.com.ua/wp-content/uploads/2018/08/12.png 317w\" sizes=\"(max-width: 235px) 100vw, 235px\">\n      </div>\n      <div class=\"col-md-7 titleLogo\">\n\n        <h1>{{products.title}}</h1>\n        <h5>Сміливі ідеї у склі.</h5>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid photoStyle\">\n\n  <div class=\"row\" >\n    <div class=\"col-md-6\" *ngFor=\"let image of  products.images\">\n      <img height=\"900px\" width=\"100%\" src=\"{{image.src}}\">\n    </div>\n\n  </div>\n\n\n  <div id=\"contactsBlock\" class=\"contactsBaground\">\n    <div class=\"container\">\n      <div class=\"col-md-8\">\n        <h2>Є ідея? Ми допоможемо з реалізацією.</h2>\n\n        <p>Команда професіоналів, разом із сучасним обладнанням по обробці скла та дзеркала у Львові, готові взятись за Ваш проект і виконати роботу на найвищому рівні.</p>\n        <h2>Дзвоніть вже зараз, щоб отримати консультацію.</h2>\n      </div>\n      <div class=\"col-md-4\">\n\n        <div class=\"text-center\">\n          <div class=\"contactButtonNumber\">\n            <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n            </a></div>\n          <div class=\"contactButtonNumber\">\n            <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n            </a></div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/glass-stairs/glass-stairs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/glass-stairs/glass-stairs.component.ts ***!
  \*******************************************************************/
/*! exports provided: GlassStairsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassStairsComponent", function() { return GlassStairsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlassStairsComponent = /** @class */ (function () {
    function GlassStairsComponent() {
        this.products = { title: 'Скляні сходи та поручні',
            images: [
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_39153091-683x1024.jpg' },
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/noname3-679x1024.jpg' },
                { src: 'http://new-glass.com.ua/wp-content/uploads/2018/10/noname6.jpg' }
            ]
        };
    }
    GlassStairsComponent.prototype.ngOnInit = function () {
    };
    GlassStairsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-glass-stairs',
            template: __webpack_require__(/*! ./glass-stairs.component.html */ "./src/app/components/glass-stairs/glass-stairs.component.html"),
            styles: [__webpack_require__(/*! ./glass-stairs.component.css */ "./src/app/components/glass-stairs/glass-stairs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlassStairsComponent);
    return GlassStairsComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/content/content.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/home-page/content/content.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.text-center{\r\n  text-align: center;\r\n}\r\n.imageBlock{\r\n  margin-top: 10px;\r\n}\r\n.ourServiceBlock h1{\r\n  font-size: 50px;\r\n  font-weight: 700;\r\n  text-shadow: 0px 0px 5px rgba(0,0,0,0.26);\r\n}\r\n.ourServiceBlock p{\r\n  color: #545454;\r\n  font-size: 18px;\r\n}\r\n.ourServiceBlock h2{\r\n  color: #545454;\r\n  margin: 70px 0px;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n}\r\n.ourWare h3{\r\n  color: #000000;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 22px;\r\n  line-height: 28px;\r\n  margin: 40px 0px 18px 0px;\r\n}\r\n.ourWare img {\r\n  width: 50px;\r\n  height: 60px;\r\n\r\n}\r\n.ourWare{\r\n  text-align: left;\r\n}\r\n.photoProject img{\r\n  height: 397px;\r\n  max-width: 100%;\r\n}\r\n.photoProject{\r\n  display: inline-block;\r\n}\r\n.aboutUsBlock img{\r\n  width:60%;\r\n}\r\n.aboutUsBlock{\r\n  text-align: center;\r\n}\r\np{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 16px;\r\n  color: #7a7a7a;\r\n}\r\n.contactsBaground{\r\n  background: #3a3a3a;\r\n  color: white;\r\n}\r\n.contactsBaground span{\r\n  padding: 22px 13px 39px 0px;\r\n}\r\n.buttonNumberPhone{\r\n  margin: 30px 0px;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3px;\r\n  color: #ffffff;\r\n  background-color: rgba(64,100,215,0);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: #ffffff;\r\n}\r\n.contactButtonNumber{\r\n  margin: 50px 0px;\r\n}\r\n.workSchedule{\r\n  border-top-style: solid;\r\n  border-top-width: 1px;\r\n  width: 100%;\r\n}\r\n.workSchedule table{\r\n  width: 100%;\r\n  text-align: left;\r\n}\r\n.workSchedule thead tr th {\r\n  padding: 20px 15px;\r\n  color: #000000;\r\n  background-color: rgba(229,229,229,0.83);\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  line-height: 1;\r\n  border-color: #000;\r\n  border-width: 2px;\r\n  border-style: none;\r\n  background-clip: padding-box;\r\n}\r\n.workSchedule tbody tr td {\r\n  padding: 20px 15px;\r\n  font-size: 14px;\r\n  font-family: \"Montserrat\", \"sans-serif\";\r\n  line-height: 1;\r\n  border-width: 2px;\r\n  border-style: none;\r\n  background-clip: padding-box;\r\n  background-color: #f2f2f2;\r\n  color: black;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n}\r\n.sendButtonMaill{\r\n  display: inline-block;\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: rgba(12,12,12,0.7);\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  border-radius: 50px;\r\n  color: #000000;\r\n  padding: 17px 20px 44px 24px;\r\n  background-color: #23d1c8;\r\n}\r\n.inputMeassege{\r\n  margin: 8px;\r\n  border-radius: 9px;\r\n  padding: 9px;\r\n}\r\n.ourProject figure img {\r\n  -webkit-filter: grayscale(0) blur(0);\r\n  filter: grayscale(0) blur(0);\r\n  transition: .3s ease-in-out;\r\n  width: 100%;\r\n  height: 500px;\r\n\r\n}\r\n.ourProject figure:hover img {\r\n  -webkit-filter: grayscale(100%) blur(3px);\r\n  filter: grayscale(100%) blur(3px);\r\n}\r\n.ourProject div{\r\n  width: 25%;\r\n  display: inline-block;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .imageBlock img{\r\n    max-width: 100%;\r\n    height: 400px;\r\n  }\r\n  .ourServiceBlock h1{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    text-shadow: 0px 0px 5px rgba(0,0,0,0.26);\r\n  }\r\n  .aboutUsBlock img{\r\n    width:90%;\r\n  }\r\n  .contactsBaground h2 {\r\n    font-size: 24px;\r\n  }\r\n  .inputMeassege{\r\n    width: 100%;\r\n  }\r\n  .workSchedule{\r\n    margin-bottom: 15px;\r\n  }\r\n  .ourServiceBlock p{\r\n    color: #545454;\r\n    font-size: 14px;\r\n  }\r\n  .ourWare h3{\r\n    font-size: 17px;\r\n\r\n  }\r\n  .ourWare img {\r\n    width: 40px;\r\n    height: 50px;\r\n\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 1335px) {\r\n  .ourProject div{\r\n    width: 50%;\r\n    display: inline-block;\r\n    height: 500px;\r\n  }\r\n  .aboutUsBlock img{\r\n    width:100%;\r\n  }\r\n  .aboutUsBlock{\r\n    text-align: unset;\r\n    padding: 10px;\r\n  }\r\n  .workSchedule{\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n}\r\n@media only screen\r\nand (max-width: 500px) {\r\n  .ourProject div{\r\n    width: 100%;\r\n    display: inline-block;\r\n    height: 500px;\r\n  }\r\n  .ourServiceBlock{\r\n    padding: 0 10px;\r\n  }\r\n  .imageBlock{\r\n    padding: 0 10px;\r\n  }\r\n\r\n}\r\n@media only screen\r\nand (max-width: 800px) {\r\n  .imageBlock img{\r\n    width: 575px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsMENBQTBDO0NBQzNDO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixhQUFhOztDQUVkO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyw2QkFBNkI7RUFDN0Isb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0Usd0JBQXdCO0VBQ3hCLHNCQUFzQjtFQUN0QixZQUFZO0NBQ2I7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHFDQUFxQztDQUN0QztBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkO0FBRUQ7RUFDRSxxQ0FBcUM7RUFDckMsNkJBQTZCO0VBRTdCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osY0FBYzs7Q0FFZjtBQUNEO0VBQ0UsMENBQTBDO0VBQzFDLGtDQUFrQztDQUNuQztBQUNEO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtDQUN2QjtBQUNEOztFQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7R0FDZjtFQUNEO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7R0FDM0M7RUFDRDtJQUNFLFVBQVU7R0FDWDtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxZQUFZO0dBQ2I7RUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtFQUNEO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtHQUNqQjtFQUNEO0lBQ0UsZ0JBQWdCOztHQUVqQjtFQUNEO0lBQ0UsWUFBWTtJQUNaLGFBQWE7O0dBRWQ7Q0FDRjtBQUNEOztFQUVFO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixjQUFjO0dBQ2Y7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7R0FDZjtFQUNEO0lBQ0Usb0JBQW9CO0dBQ3JCOztDQUVGO0FBQ0Q7O0VBRUU7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGNBQWM7R0FDZjtFQUNEO0lBQ0UsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7O0NBRUY7QUFDRDs7RUFFRTtJQUNFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1hZ2VCbG9ja3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5vdXJTZXJ2aWNlQmxvY2sgaDF7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwwLDAsMC4yNik7XHJcbn1cclxuLm91clNlcnZpY2VCbG9jayBwe1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4ub3VyU2VydmljZUJsb2NrIGgye1xyXG4gIGNvbG9yOiAjNTQ1NDU0O1xyXG4gIG1hcmdpbjogNzBweCAwcHg7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm91cldhcmUgaDN7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbjogNDBweCAwcHggMThweCAwcHg7XHJcbn1cclxuLm91cldhcmUgaW1nIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcblxyXG59XHJcbi5vdXJXYXJle1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLnBob3RvUHJvamVjdCBpbWd7XHJcbiAgaGVpZ2h0OiAzOTdweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBob3RvUHJvamVjdHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmFib3V0VXNCbG9jayBpbWd7XHJcbiAgd2lkdGg6NjAlO1xyXG59XHJcbi5hYm91dFVzQmxvY2t7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjN2E3YTdhO1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5ke1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jb250YWN0c0JhZ3JvdW5kIHNwYW57XHJcbiAgcGFkZGluZzogMjJweCAxM3B4IDM5cHggMHB4O1xyXG59XHJcbi5idXR0b25OdW1iZXJQaG9uZXtcclxuICBtYXJnaW46IDMwcHggMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NCwxMDAsMjE1LDApO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggNTBweCA1MHB4IDUwcHg7XHJcbiAgcGFkZGluZzogMTVweCAzMHB4IDE1cHggMzBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uY29udGFjdEJ1dHRvbk51bWJlcntcclxuICBtYXJnaW46IDUwcHggMHB4O1xyXG59XHJcbi53b3JrU2NoZWR1bGV7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi53b3JrU2NoZWR1bGUgdGFibGV7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ud29ya1NjaGVkdWxlIHRoZWFkIHRyIHRoIHtcclxuICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksMjI5LDIyOSwwLjgzKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBib3JkZXItY29sb3I6ICMwMDA7XHJcbiAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbn1cclxuLndvcmtTY2hlZHVsZSB0Ym9keSB0ciB0ZCB7XHJcbiAgcGFkZGluZzogMjBweCAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwic2Fucy1zZXJpZlwiO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG59XHJcbi5zZW5kQnV0dG9uTWFpbGx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMiwxMiwxMiwwLjcpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDE3cHggMjBweCA0NHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDFjODtcclxufVxyXG4uaW5wdXRNZWFzc2VnZXtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59XHJcblxyXG4ub3VyUHJvamVjdCBmaWd1cmUgaW1nIHtcclxuICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDApIGJsdXIoMCk7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCkgYmx1cigwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuXHJcbn1cclxuLm91clByb2plY3QgZmlndXJlOmhvdmVyIGltZyB7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKSBibHVyKDNweCk7XHJcbiAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgYmx1cigzcHgpO1xyXG59XHJcbi5vdXJQcm9qZWN0IGRpdntcclxuICB3aWR0aDogMjUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgLmltYWdlQmxvY2sgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbiAgLm91clNlcnZpY2VCbG9jayBoMXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLDAsMCwwLjI2KTtcclxuICB9XHJcbiAgLmFib3V0VXNCbG9jayBpbWd7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgfVxyXG4gIC5jb250YWN0c0JhZ3JvdW5kIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbiAgLmlucHV0TWVhc3NlZ2V7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLndvcmtTY2hlZHVsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vdXJTZXJ2aWNlQmxvY2sgcHtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAub3VyV2FyZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgfVxyXG4gIC5vdXJXYXJlIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogMTMzNXB4KSB7XHJcbiAgLm91clByb2plY3QgZGl2e1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG4gIC5hYm91dFVzQmxvY2sgaW1ne1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgLmFib3V0VXNCbG9ja3tcclxuICAgIHRleHQtYWxpZ246IHVuc2V0O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICB9XHJcbiAgLndvcmtTY2hlZHVsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG5cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLm91clByb2plY3QgZGl2e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuICAub3VyU2VydmljZUJsb2Nre1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gIH1cclxuICAuaW1hZ2VCbG9ja3tcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcblxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuaW1hZ2VCbG9jayBpbWd7XHJcbiAgICB3aWR0aDogNTc1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-page/content/content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/home-page/content/content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imageBlock text-center\">\n  <img width=\"728\" height=\"1024\" src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/D09F8261-828x1024.jpg\">\n</div>\n<div class=\"container\">\n  <div id=\"ourServiceBlock\" class=\"row ourServiceBlock text-center\">\n    <h1>Наші послуги</h1>\n    <p>New Glass пропонує інноваційні рішення в технології виготовленя скляних конструкцій. Втілюємо в <br> реальність ваші ідеї зі скла та дзеркала.</p>\n    <h2>Команда New Glass проектує та виготовляє:</h2>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img  src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/500_F_186501106_bNHrgOzviqzhohUXJFWP1Iz8mx1rHTIj.png\" class=\"attachment-full size-full\" alt=\"\">Душові кабіни</h3>\n        <p>Душові кабіни зі скла можна купити у Львові. Команда спеціалістів знайде оптимальне дизайнерське рішення для ваших потреб.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/depositphotos_136121888-stock-illustration-glass-wall-icon-illustration-isolated.png\" class=\"attachment-full size-full\" alt=\"\">Скляні перегородки</h3>\n        <p>Встановлення офісних перегородок дозволяє візуально збільшити приміщення, чи офіс, в той же час забезпечити звукоізоляцію кабінетів.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/furniture.png\" class=\"attachment-full size-full\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/12/furniture.png 444w, http://new-glass.com.ua/wp-content/uploads/2018/12/furniture-300x254.png 300w\" sizes=\"(max-width: 444px) 100vw, 444px\">Скляні меблі</h3>\n        <p>У нас Ви можете замовити скляний стіл із простого, чи надпрозорого скла. Всі скляні деталі столів з'єднуються за допомого прозорого ультрафіолетового клею, який забезпечує надійне з'єднання поверхонь.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/depositphotos_136121888-stock-illustration-glass-wall-icon-illustration-isolated.png\" class=\"attachment-full size-full\" alt=\"\">Скяні двері</h3>\n        <p>Скляні двері з гартованого скла - ідеальне рішення для сучасних квартир, чи офісу. Двері виконують із гартованого скла, що в 5 раз міцніше, аніж сире скло.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/500_F_186501106_bNHrgOzviqzhohUXJFWP1Iz8mx1rHTIj.png\" class=\"attachment-full size-full\" alt=\"\">Скляні поручні та сходи</h3>\n        <p>Поручні, перила, сходи, огорожі з гартованого скла, чи триплекса для басейнів, торгових центрів, ресторанів, та для дому. Скляні поручні виготовляються на замовлення по індивідуальних розмірах.</p>\n      </div>\n\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"ourWare\">\n        <h3><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/завантаження.png\" class=\"attachment-full size-full\" alt=\"\" srcset=\"http://new-glass.com.ua/wp-content/uploads/2018/12/завантаження.png 225w, http://new-glass.com.ua/wp-content/uploads/2018/12/завантаження-150x150.png 150w\" sizes=\"(max-width: 225px) 100vw, 225px\">Скляні меблі</h3>\n        <p>Ви можете обрати вже готовий варіант малюнків з нашого каталогу, або зв'язатися із нашими дизайнерами для узгодження розробки індивідуальних малюнків</p>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"ourProject text-center\">\n  <div>\n    <figure><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_147789878.jpg\"></figure>\n  </div>\n  <div>\n    <figure><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/44-1024x707.jpg\"></figure>\n  </div>\n  <div>\n    <figure><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/scale-in-vetro-gradini-in-vetro-1024x860.jpg\"></figure>\n  </div>\n  <div>\n    <figure><img src=\"http://new-glass.com.ua/wp-content/uploads/2018/10/shutterstock_717210982-1-683x1024.jpg\"></figure>\n  </div>\n</div>\n<div>\n  <div id=\"aboutUsBlock\" class=\"aboutUsBlock text-center\">\n    <div class=\"text-center\">\n      <h1>Про нас</h1>\n    </div>\n    <p>Ми – команда професіоналів, яким під силу практично будь-які Ваші сміливі проекти. Сучасне обладнання по обробці скла <br> та дзеркал у Львові дозволяє нам створювати скляні конструкції, які стануть частиною Вашого інтер’єру.</p>\n    <img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/shutterstock_285247013.jpg\">\n    <p>Компанія New Glass працює для задоволення потреб людей, які цінують якість, естетику, екологічність та комфорт.</p>\n    <p>Це спонукає нас бути інноваційною компанією, йти в ногу з часом та використовувати тільки якісну італійську фурнітуру для<br> скляних дверей, чи скляних душових кабін.</p>\n    <p>Нашим спеціалістам під силу спроектувати та змонтувати скляні вироби: чи це буде душова кабіна, скляні перила, або ж сходи зі <br> скла, не кажучи вже про дашки із гартованого скла.</p>\n  </div>\n</div>\n<div id=\"contactsBlock\" class=\"contactsBaground\">\n  <div class=\"container\">\n    <div class=\"col-md-6 text-center\">\n      <h2>Залишились питання?</h2>\n      <h2><span class=\"glyphicon glyphicon-envelope \" aria-hidden=\"true\"></span>    new-glass@i.ua</h2>\n      <p>Також можете написати нам просто тут! Ми в короткий термін дамо відповідь на Ваше питання.</p>\n      <app-send-mails></app-send-mails>\n    </div>\n    <div class=\"col-md-6 text-center\">\n      <h2>Або телефонуйте просто зараз...</h2>\n      <div >\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n        <div class=\"contactButtonNumber\">\n          <a href=\"tel:+380967111555\" class=\"buttonNumberPhone\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-icon elementor-align-icon-left\">\n\t\t\t\t<i class=\"fa fa-phone-square\" aria-hidden=\"true\"></i>\n\t\t\t</span>\n\t\t\t\t\t\t<span class=\"elementor-button-text\">096-7-111-555</span>\n\t\t</span>\n          </a></div>\n      </div>\n      <div class=\"workSchedule text-center\">\n        <h1>ГРАФІК РОБОТИ</h1>\n        <table class=\"tablesorter eael-data-table center\" id=\"eael-data-table-c6f6e33\">\n          <thead>\n          <tr class=\"table-header\">\n            <th>\n              День</th>\n            <th>\n              Години</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">Понеділок - Четвер</div></div>\n            </td>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">08:30 - 17:00</div></div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">П'ятниця</div></div>\n            </td>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">08:30 - 16:30</div></div>\n            </td>\n          </tr>\n          <tr>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">Субота - Неділя</div></div>\n            </td>\n            <td colspan=\"\" rowspan=\"\" class=\"\" id=\"\">\n              <div class=\"td-content-wrapper\"><div class=\"td-content\">ВИХІДНІ</div></div>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/home-page/content/content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/content/content.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/home-page/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/home-page/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/footer/footer.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/home-page/footer/footer.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerContent{\r\n  height: 100px;\r\n  background: #3a3a3a;\r\n}\r\n.footerInform{\r\n  color: white;\r\n  font-size: 16px;\r\n}\r\n.text-center{\r\n  text-align: center;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .footerInform{\r\n    color: white;\r\n    font-size: 14px;\r\n  }\r\n  .footerContent{\r\n    height: 80px;\r\n    background: #3a3a3a;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBRUQ7O0VBRUU7SUFDRSxhQUFhO0lBQ2IsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0dBQ3JCO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyQ29udGVudHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbn1cclxuLmZvb3RlckluZm9ybXtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuZm9vdGVySW5mb3Jte1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuZm9vdGVyQ29udGVudHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJhY2tncm91bmQ6ICMzYTNhM2E7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/home-page/footer/footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/footer/footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footerContent text-center\">\n    <div class=\"footerInform\">\n      <div class=\"ast-small-footer-section ast-small-footer-section-1 ast-small-footer-section-equally ast-col-md-6 ast-col-xs-12\">\n        Copyright © 2019 <span class=\"ast-footer-site-title\">New Glass \"Ню Гласс\"</span> | Powered by <span class=\"ast-footer-site-title\">New Glass \"Ню Гласс\"</span>\n      </div>\n\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/home-page/footer/footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-page/footer/footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/home-page/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/home-page/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/google-map/google-map.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/home-page/google-map/google-map.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home-page/google-map/google-map.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/home-page/google-map/google-map.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p-toast [style]=\"{marginTop: '80px'}\"></p-toast>\n\n<p-gmap #gmap [style]=\"{'width':'100%','height':'320px'}\" [options]=\"options\" [overlays]=\"overlays\"\n         (onOverlayClick)=\"handleOverlayClick($event)\" (onOverlayDragEnd)=\"handleDragEnd($event)\"></p-gmap>\n\n<!--<button type=\"button\" pButton label=\"Clear\" icon=\"pi pi-times\" (click)=\"clear()\" style=\"margin-right:.25em\"></button>-->\n<!--<button type=\"button\" pButton label=\"Zoom In\" icon=\"pi pi-plus\" (click)=\"zoomIn(gmap.getMap())\" style=\"margin-right:.25em\"></button>-->\n<!--<button type=\"button\" pButton label=\"Zoom Out\" icon=\"pi pi-minus\" (click)=\"zoomOut(gmap.getMap())\"></button>-->\n\n<p-dialog showEffect=\"fade\" [(visible)]=\"dialogVisible\" header=\"New Location\">\n  <div class=\"ui-g ui-fluid\" *ngIf=\"selectedPosition\">\n    <div class=\"ui-g-2\"><label for=\"title\">Label</label></div>\n    <div class=\"ui-g-10\"><input type=\"text\" pInputText id=\"title\" [(ngModel)]=\"markerTitle\"></div>\n\n    <div class=\"ui-g-2\"><label for=\"lat\">Lat</label></div>\n    <div class=\"ui-g-10\"><input id=\"lat\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lat()\"></div>\n\n    <div class=\"ui-g-2\"><label for=\"lng\">Lng</label></div>\n    <div class=\"ui-g-10\"><input id=\"lng\" type=\"text\" readonly pInputText [ngModel]=\"selectedPosition.lng()\"></div>\n\n    <div class=\"ui-g-2\"><label for=\"drg\">Drag</label></div>\n    <div class=\"ui-g-10\"><p-checkbox id=\"drg\" [(ngModel)]=\"draggable\" binary=\"true\" [style]=\"{'margin-top':'.25em'}\"></p-checkbox></div>\n  </div>\n  <p-footer>\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n      <button type=\"button\" pButton label=\"Add Marker\" icon=\"fa-plus\" (click)=\"addMarker()\"></button>\n    </div>\n  </p-footer>\n</p-dialog>\n"

/***/ }),

/***/ "./src/app/components/home-page/google-map/google-map.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/home-page/google-map/google-map.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/components/common/messageservice */ "./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {MessageService} from 'primeng/api';
// import {Component,OnInit} from '@angular/core';

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent(messageService) {
        this.messageService = messageService;
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.options = {
            center: { lat: 49.841563, lng: 24.031582 },
            zoom: 14
        };
        console.log(this.marks);
        this.initOverlays();
        this.infoWindow = new google.maps.InfoWindow();
    };
    GoogleMapComponent.prototype.handleOverlayClick = function (event) {
        var isMarker = event.overlay.getTitle !== undefined;
        if (isMarker) {
            var title = event.overlay.getTitle();
            this.infoWindow.setContent('<div>' + title + '</div>');
            this.infoWindow.open(event.map, event.overlay);
            event.map.setCenter(event.overlay.getPosition());
            this.messageService.add({ severity: 'info', summary: 'Marker Selected', detail: title });
        }
        else {
            this.messageService.add({ severity: 'info', summary: 'Shape Selected', detail: '' });
        }
    };
    GoogleMapComponent.prototype.addMarker = function () {
        this.overlays.push(new google.maps.Marker({
            position: {
                lat: this.selectedPosition.lat(),
                lng: this.selectedPosition.lng()
            },
            title: this.markerTitle,
            draggable: this.draggable
        }));
        this.markerTitle = null;
        this.dialogVisible = false;
    };
    GoogleMapComponent.prototype.handleDragEnd = function (event) {
        this.messageService.add({ severity: 'info', summary: 'Marker Dragged', detail: event.overlay.getTitle() });
    };
    GoogleMapComponent.prototype.initOverlays = function () {
        if (!this.overlays || !this.overlays.length) {
            this.overlays = [
                new google.maps.Marker(this.marks),
            ];
        }
    };
    GoogleMapComponent.prototype.zoomIn = function (map) {
        map.setZoom(map.getZoom() + 1);
    };
    GoogleMapComponent.prototype.zoomOut = function (map) {
        map.setZoom(map.getZoom() - 1);
    };
    GoogleMapComponent.prototype.clear = function () {
        this.overlays = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "marks", void 0);
    GoogleMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(/*! ./google-map.component.html */ "./src/app/components/home-page/google-map/google-map.component.html"),
            providers: [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]],
            styles: [__webpack_require__(/*! ./google-map.component.css */ "./src/app/components/home-page/google-map/google-map.component.css")]
        }),
        __metadata("design:paramtypes", [primeng_components_common_messageservice__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/header/header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/home-page/header/header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-center{\r\n  text-align: center;\r\n}\r\n.headerBlock{\r\n  text-align: center;\r\n  background-image: url(http://new-glass.com.ua/wp-content/uploads/2018/12/steklyannye_dushevye_peregorodki.jpg);\r\n  background-position: center center;\r\n  background-size: cover;\r\n  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  padding: 1px 0px 250px 0px;\r\n  background-attachment: fixed;\r\n}\r\n.menuItem{\r\n  list-style: none;\r\n  display: inline-block;\r\n  margin-left: 40px;\r\n  color: black;\r\n}\r\n.menuList{\r\n\r\n  font-size: 24px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n}\r\n.logoTitle{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 68px;\r\n  font-weight: 400;\r\n  letter-spacing: 0.6px;\r\n  color: #0c0c0c;\r\n}\r\n.headerLogoBlock p{\r\n  color: #0c0c0c;\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  line-height: 24px;\r\n  margin-bottom: 60px;\r\n  font-size: 18px;\r\n}\r\n.headerButton{\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  letter-spacing: 3.7px;\r\n  color: #0c0c0c;\r\n  background-color: rgba(142,142,142,0.82);\r\n  border-radius: 50px 50px 50px 50px;\r\n  padding: 15px 30px 15px 30px;\r\n  text-decoration: none;\r\n\r\n}\r\n.headerMenuPhone{\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n.headerLogoBlock img{\r\n  width: 300px;\r\n}\r\n  .logoTitle{\r\n    font-size: 32px;\r\n  }\r\n}\r\n@media only screen\r\nand (max-width: 1100px) {\r\n  .headerMenuPhone{\r\n    display: block;\r\n  }\r\n  .headerMenu{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsK0dBQStHO0VBQy9HLG1DQUFtQztFQUNuQyx1QkFBdUI7RUFDdkIsOEVBQThFO0VBQzlFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtDQUNkO0FBQ0Q7O0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLHFDQUFxQztFQUNyQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxxQ0FBcUM7RUFDckMsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsbUNBQW1DO0VBQ25DLDZCQUE2QjtFQUM3QixzQkFBc0I7O0NBRXZCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FDZDtBQUNEOztBQUVBO0VBQ0UsYUFBYTtDQUNkO0VBQ0M7SUFDRSxnQkFBZ0I7R0FDakI7Q0FDRjtBQUNEOztFQUVFO0lBQ0UsZUFBZTtHQUNoQjtFQUNEO0lBQ0UsY0FBYztHQUNmOztDQUVGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lLXBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVye1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaGVhZGVyQmxvY2t7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vbmV3LWdsYXNzLmNvbS51YS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMi9zdGVrbHlhbm55ZV9kdXNoZXZ5ZV9wZXJlZ29yb2RraS5qcGcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MsIGJvcmRlciAwLjNzLCBib3JkZXItcmFkaXVzIDAuM3MsIGJveC1zaGFkb3cgMC4zcztcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIHBhZGRpbmc6IDFweCAwcHggMjUwcHggMHB4O1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuLm1lbnVJdGVte1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubWVudUxpc3R7XHJcblxyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuLmxvZ29UaXRsZXtcclxuICBmb250LWZhbWlseTogXCJDb21mb3J0YWFcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDY4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbn1cclxuLmhlYWRlckxvZ29CbG9jayBwe1xyXG4gIGNvbG9yOiAjMGMwYzBjO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5oZWFkZXJCdXR0b257XHJcbiAgZm9udC1mYW1pbHk6IFwiQ29tZm9ydGFhXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMy43cHg7XHJcbiAgY29sb3I6ICMwYzBjMGM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDIsMTQyLDE0MiwwLjgyKTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4IDUwcHggNTBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMzBweCAxNXB4IDMwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG4uaGVhZGVyTWVudVBob25le1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbi5oZWFkZXJMb2dvQmxvY2sgaW1ne1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4gIC5sb2dvVGl0bGV7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlblxyXG5hbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLmhlYWRlck1lbnVQaG9uZXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaGVhZGVyTWVudXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home-page/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/home-page/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-phone-nav></app-phone-nav>\n\n<div class=\"headerBlock\">\n  <div class=\"headerMenu\">\n    <ul class=\"menuList\">\n      <li class=\"menuItem\"><a class=\"menuItem\" href=\" \">Головна</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\"  target=\"_self\" href=\"#aboutUsBlock\">Про нас</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" target=\"_self\" href=\"#ourServiceBlock\">Послуги</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" routerLinkActive=\"active\" routerLink=\"gallery\">Галерея</a></li>\n      <li class=\"menuItem\"><a class=\"menuItem\" target=\"_self\" href=\"#contactsBlock\">Контакти</a></li>\n    </ul>\n  </div>\n\n  <div class=\" headerLogoBlock\">\n    <img src=\"http://new-glass.com.ua/wp-content/uploads/2018/12/2f2.png\">\n    <h1 class=\"logoTitle\">СТВОРЮЄМО ПРОСТІР</h1>\n    <p >Індивідуальне виготовлення скляних конструкцій у Львові під ваші потреби.</p>\n    <div class=\"headerButtonBlock\">\n      <a href=\"#aboutUsBlock\" target=\"_self\" class=\"headerButton\" role=\"button\">\n\t\t\t\t\t\t<span class=\"elementor-button-content-wrapper\">\n\t\t\t\t\t\t<span class=\"elementor-button-text\">Більше інформації</span>\n\t\t</span>\n      </a>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home-page/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/home-page/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/home-page/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/home-page/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-content></app-content>\n<app-google-map [marks]=\"{position:{lat: 49.844224, lng: 24.026191}, title:'Opera'}\"></app-google-map>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/components/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/phone-nav/phone-nav.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/phone-nav/phone-nav.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-button{\r\n  background: transparent;\r\n  border: none;\r\n  color: #000000d6;\r\n  font-size: 20px;\r\n  position: fixed;\r\n  z-index: 1000;\r\n}\r\n.ui-button:enabled:hover {\r\n  background-color: transparent;\r\n  color: black;\r\n  border-color: transparent;\r\n}\r\n.ui-button:enabled:active {\r\n  background-color: transparent;\r\n  color: black;\r\n  border-color: transparent;\r\n}\r\n.ui-button:enabled:focus {\r\n  outline: 0 none;\r\n  outline-offset: 0px;\r\n  box-shadow: 0 0 0 0.2em transparent;\r\n}\r\n@media only screen\r\nand (min-width: 1100px) {\r\n  .ui-button{\r\n    display: none;\r\n  }\r\n\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9waG9uZS1uYXYvcGhvbmUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7Q0FDZjtBQUNEO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsMEJBQTBCO0NBQzNCO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLG9DQUFvQztDQUNyQztBQUVEOztFQUVFO0lBQ0UsY0FBYztHQUNmOzs7Q0FHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhvbmUtbmF2L3Bob25lLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLWJ1dHRvbntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMwMDAwMDBkNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuLnVpLWJ1dHRvbjplbmFibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udWktYnV0dG9uOmVuYWJsZWQ6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4udWktYnV0dG9uOmVuYWJsZWQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDAgbm9uZTtcclxuICBvdXRsaW5lLW9mZnNldDogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAuMmVtIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW5cclxuYW5kIChtaW4td2lkdGg6IDExMDBweCkge1xyXG4gIC51aS1idXR0b257XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/phone-nav/phone-nav.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/phone-nav/phone-nav.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-menu #menu [popup]=\"true\"  [model]=\"items\"></p-menu>\n<button type=\"button\" pButton icon=\"pi pi-bars\"  (click)=\"menu.toggle($event)\"></button>\n"

/***/ }),

/***/ "./src/app/components/phone-nav/phone-nav.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/phone-nav/phone-nav.component.ts ***!
  \*************************************************************/
/*! exports provided: PhoneNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneNavComponent", function() { return PhoneNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhoneNavComponent = /** @class */ (function () {
    function PhoneNavComponent() {
    }
    PhoneNavComponent.prototype.ngOnInit = function () {
        this.items = [{
                items: [
                    { label: 'Головна', url: ' ' },
                    { label: 'Про нас', url: '#aboutUsBlock ' },
                    { label: 'Галерея', url: 'gallery ' },
                    { label: 'Контакти', url: '#contactsBlock ' }
                ]
            }];
    };
    PhoneNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone-nav',
            template: __webpack_require__(/*! ./phone-nav.component.html */ "./src/app/components/phone-nav/phone-nav.component.html"),
            styles: [__webpack_require__(/*! ./phone-nav.component.css */ "./src/app/components/phone-nav/phone-nav.component.css")]
        })
    ], PhoneNavComponent);
    return PhoneNavComponent;
}());



/***/ }),

/***/ "./src/app/components/send-mails-service/send-mails.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/send-mails-service/send-mails.service.ts ***!
  \*********************************************************************/
/*! exports provided: SendMailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailsService", function() { return SendMailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SendMailsService = /** @class */ (function () {
    function SendMailsService() {
    }
    SendMailsService.prototype.toParams = function (data_js) {
        var form_data = [];
        for (var key in data_js) {
            form_data.push(encodeURIComponent(key) + '=' + encodeURIComponent(data_js[key]));
        }
        console.log(form_data);
        return form_data.join('&');
    };
    SendMailsService.prototype.sendMessage = function (data_js) {
        var request = new XMLHttpRequest();
        var params = this.toParams(data_js);
        request.open('POST', 'https://postmail.invotes.com/send', true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(params);
    };
    SendMailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], SendMailsService);
    return SendMailsService;
}());



/***/ }),

/***/ "./src/app/components/send-mails/send-mails.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/send-mails/send-mails.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input,textarea{\r\n  color: gray;\r\n}\r\n.sendButtonMaill{\r\n  display: inline-block;\r\n  width: 200px;\r\n  border-style: solid;\r\n  border-width: 2px 2px 2px 2px;\r\n  border-color: rgba(12,12,12,0.7);\r\n  font-family: \"Comfortaa\", Sans-serif;\r\n  font-size: 1.5em;\r\n  font-weight: 700;\r\n  border-radius: 50px;\r\n  color: #000000;\r\n  padding: 17px 20px 44px 24px;\r\n  background-color: #23d1c8;\r\n}\r\n.inputMeassege{\r\n  margin: 8px;\r\n  border-radius: 9px;\r\n  padding: 9px;\r\n}\r\n@media only screen\r\nand (max-width: 575px) {\r\n  .imageBlock img{\r\n    max-width: 100%;\r\n    height: 400px;\r\n  }\r\n  .ourServiceBlock h1{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    text-shadow: 0px 0px 5px rgba(0,0,0,0.26);\r\n  }\r\n  .aboutUsBlock img{\r\n    width:90%;\r\n  }\r\n  .contactsBaground h2 {\r\n    font-size: 24px;\r\n  }\r\n  .inputMeassege{\r\n    width: 94%;\r\n  }\r\n  .workSchedule{\r\n    margin-bottom: 15px;\r\n  }\r\n  .ourServiceBlock p{\r\n    color: #545454;\r\n    font-size: 14px;\r\n  }\r\n  .ourWare h3{\r\n    font-size: 17px;\r\n\r\n  }\r\n  .ourWare img {\r\n    width: 40px;\r\n    height: 50px;\r\n\r\n  }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZW5kLW1haWxzL3NlbmQtbWFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLGlDQUFpQztFQUNqQyxxQ0FBcUM7RUFDckMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLDZCQUE2QjtFQUM3QiwwQkFBMEI7Q0FDM0I7QUFDRDtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtDQUNkO0FBQUE7O0VBRUM7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztHQUNmO0VBQ0Q7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztHQUMzQztFQUNEO0lBQ0UsVUFBVTtHQUNYO0VBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7RUFDRDtJQUNFLFdBQVc7R0FDWjtFQUNEO0lBQ0Usb0JBQW9CO0dBQ3JCO0VBQ0Q7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0dBQ2pCO0VBQ0Q7SUFDRSxnQkFBZ0I7O0dBRWpCO0VBQ0Q7SUFDRSxZQUFZO0lBQ1osYUFBYTs7R0FFZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZW5kLW1haWxzL3NlbmQtbWFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LHRleHRhcmVhe1xyXG4gIGNvbG9yOiBncmF5O1xyXG59XHJcbi5zZW5kQnV0dG9uTWFpbGx7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMnB4IDJweCAycHggMnB4O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgxMiwxMiwxMiwwLjcpO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNvbWZvcnRhYVwiLCBTYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmc6IDE3cHggMjBweCA0NHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDFjODtcclxufVxyXG4uaW5wdXRNZWFzc2VnZXtcclxuICBtYXJnaW46IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgcGFkZGluZzogOXB4O1xyXG59QG1lZGlhIG9ubHkgc2NyZWVuXHJcbmFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5pbWFnZUJsb2NrIGltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG4gIC5vdXJTZXJ2aWNlQmxvY2sgaDF7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYmEoMCwwLDAsMC4yNik7XHJcbiAgfVxyXG4gIC5hYm91dFVzQmxvY2sgaW1ne1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gIH1cclxuICAuY29udGFjdHNCYWdyb3VuZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gIC5pbnB1dE1lYXNzZWdle1xyXG4gICAgd2lkdGg6IDk0JTtcclxuICB9XHJcbiAgLndvcmtTY2hlZHVsZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIC5vdXJTZXJ2aWNlQmxvY2sgcHtcclxuICAgIGNvbG9yOiAjNTQ1NDU0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAub3VyV2FyZSBoM3tcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuXHJcbiAgfVxyXG4gIC5vdXJXYXJlIGltZyB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/send-mails/send-mails.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/send-mails/send-mails.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<form >-->\n  <!--<input type=\"text\"  name=\"subject\" placeholder=\"Subject\" />-->\n  <!--<textarea name=\"text\"  placeholder=\"Message\"></textarea>-->\n  <!--<input type=\"submit\"  value=\"Send\" />-->\n\n  <!--&lt;!&ndash; not required, but we'd appreciate it if you'd link to us somewhere on your site &ndash;&gt;-->\n  <!--<p>Powered by <a href=\"https://postmail.invotes.com\" target=\"_blank\">PostMail</a></p>-->\n<!--</form>-->\n\n\n  <form  (ngSubmit)=\"sendEmail($event)\" novalidate [formGroup]=\"messageForm\" action=\"/#wpcf7-f526-p8-o1\" method=\"post\" id=\"javascript_form\" class=\"wpcf7-form\" >\n\n    <label><span class=\"wpcf7-form-control-wrap your-name\"><input type=\"text\"  pInputText formControlName=\"name\" name=\"yourname\" value=\"\" size=\"40\" class=\"inputMeassege wpcf7-form-control wpcf7-text wpcf7-validates-as-required\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Ваше ім'я\"></span> </label><br>\n      <label><span class=\"wpcf7-form-control-wrap your-email\"><input type=\"email\"  pInputText formControlName=\"email\" name=\"your-email\" value=\"\" size=\"40\" class=\" inputMeassege wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Ваш email\"></span> </label><br>\n      <label><span class=\"wpcf7-form-control-wrap placeholder\"><input type=\"tel\" pInputText formControlName=\"number\" name=\"your-phone\" value=\"\" size=\"40\" class=\" inputMeassege wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel\" aria-invalid=\"false\" placeholder=\"Ваш номер телефону\"></span> </label><br>\n      <label><span class=\"wpcf7-form-control-wrap your-message\"><textarea pInputText formControlName=\"message\" name=\"your-message\" cols=\"40\" rows=\"10\" class=\" inputMeassege wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required\" aria-required=\"true\" aria-invalid=\"false\" placeholder=\"Ваше повідомлення\"></textarea></span> </label><br>\n      <input type=\"submit\"  id=\"js_send\" value=\"Надіслати.\"  class=\"form-control submit sendButtonMaill\"><span class=\"ajax-loader\"></span>\n    <div class=\"wpcf7-response-output wpcf7-display-none\"></div></form>\n\n\n"

/***/ }),

/***/ "./src/app/components/send-mails/send-mails.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/send-mails/send-mails.component.ts ***!
  \***************************************************************/
/*! exports provided: SendMailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendMailsComponent", function() { return SendMailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _send_mails_service_send_mails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../send-mails-service/send-mails.service */ "./src/app/components/send-mails-service/send-mails.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendMailsComponent = /** @class */ (function () {
    function SendMailsComponent(mailsService) {
        this.mailsService = mailsService;
    }
    SendMailsComponent.prototype.ngOnInit = function () {
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
        this.isDisable = true;
    };
    SendMailsComponent.prototype.getEmailData = function () {
        return {
            'access_token': 'nq7yh77ep4mve3gkmrl1pvuj',
            'subject': this.messageForm.controls.name.value,
            'text': this.messageForm.controls.email.value + ' \n' +
                this.messageForm.controls.number.value + ' \n' +
                this.messageForm.controls.message.value
        };
    };
    SendMailsComponent.prototype.sendEmail = function () {
        this.mailsService.sendMessage(this.getEmailData());
    };
    SendMailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-send-mails',
            template: __webpack_require__(/*! ./send-mails.component.html */ "./src/app/components/send-mails/send-mails.component.html"),
            providers: [_send_mails_service_send_mails_service__WEBPACK_IMPORTED_MODULE_2__["SendMailsService"]],
            styles: [__webpack_require__(/*! ./send-mails.component.css */ "./src/app/components/send-mails/send-mails.component.css")]
        }),
        __metadata("design:paramtypes", [_send_mails_service_send_mails_service__WEBPACK_IMPORTED_MODULE_2__["SendMailsService"]])
    ], SendMailsComponent);
    return SendMailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Пользователь\Desktop\demo\Glass\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map