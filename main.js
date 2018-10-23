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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appContainer\">\n  \n    <p-growl [(value)]=\"msgs\" life=\"2000\"></p-growl>\n    \n  <div class=\"psContainer\" *ngIf=\"spin > 0\">\n  <i class=\"fa fa-cog fa-spin\" style=\"font-size:100px; color:goldenrod \"></i>\n</div>\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-2 pageLogo\"></div>\n    <div class=\"ui-g-10 pageHeader\">Norsetech</div>\n    <div class=\"ui-g-2 pageMenu\">\n      <nav class=\"menuButton\"><img class=\"menuLetter\" src=\"assets/textures/runicLetters/runicH.png\" /> <a routerLink=\"/home\" routerLinkActive=\"active-link\">Home</a></nav>\n      <nav class=\"menuButton\"><img class=\"menuLetter\" src=\"assets/textures/runicLetters/runicI.png\" /> <a routerLink=\"/ind\" routerLinkActive=\"active-link\">Ind</a></nav>\n      <nav class=\"menuButton\"><img class=\"menuLetter\" src=\"assets/textures/runicLetters/runicU.png\" /><a routerLink=\"/ud\" routerLinkActive=\"active-link\">Ud</a></nav>\n      <nav class=\"menuButton\"><img class=\"menuLetter\" src=\"assets/textures/runicLetters/runicS.png\" /><a routerLink=\"/status\" routerLinkActive=\"activelink\">Status</a></nav>\n      <nav class=\"menuButton\"><img class=\"menuLetter\" src=\"assets/textures/runicLetters/runicL.png\" /><a routerLink=\"/lager\" routerLinkActive=\"activelink\">Lager</a></nav>\n    </div>\n    <div class=\"ui-g-10 pageView\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".appContainer .psContainer {\n  position: absolute;\n  width: 100%;\n  height: 100vh; }\n  .appContainer .psContainer i {\n    width: 90%;\n    position: fixed;\n    left: 50%;\n    top: 40%;\n    margin: 0 0 0 -37.5%;\n    z-index: 10000;\n    text-align: center; }\n  .appContainer .pageLogo {\n  text-align: center;\n  background-image: url('norsetech.png');\n  background-size: auto 2em;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-color: #e26f2d; }\n  .appContainer .pageHeader {\n  text-align: center;\n  background-color: #e26f2d;\n  border-bottom: 1px solid black; }\n  .appContainer .pageMenu {\n  background-color: #e26f2d;\n  height: 100vh;\n  border-right: 1px solid black; }\n  .appContainer .pageMenu nav {\n    margin: 0.5em;\n    display: table; }\n  .appContainer .pageMenu nav .menuLetter {\n      max-width: 1em;\n      min-width: 1em;\n      max-height: 2em;\n      min-height: 2em; }\n  .appContainer .pageMenu .menuButton {\n    text-align: center; }\n  .appContainer .pageMenu .menuButton a {\n      display: table-cell;\n      vertical-align: middle;\n      padding-left: 1em;\n      color: black;\n      text-decoration: none; }\n  .appContainer .pageMenu .menuButton .active-link {\n      font-weight: bold; }\n  .appContainer .pageMenu .menuButton:hover a {\n    color: gray; }\n  .appContainer .pageView {\n  padding: 0em; }\n  @-webkit-keyframes ui-progress-spinner-color {\n  100%,\n  0% {\n    stroke: #ffffff; }\n  40% {\n    stroke: #929292; }\n  66% {\n    stroke: #363636; }\n  80%,\n  90% {\n    stroke: #111111; } }\n  @keyframes ui-progress-spinner-color {\n  100%,\n  0% {\n    stroke: #ffffff; }\n  40% {\n    stroke: #929292; }\n  66% {\n    stroke: #363636; }\n  80%,\n  90% {\n    stroke: #111111; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/notification/notification.service */ "./src/app/services/notification/notification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService, notificationService) {
        this.spinnerService = spinnerService;
        this.notificationService = notificationService;
        this.title = 'lagerApp';
        this.spin = 0;
        this.msgs = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.subscribeToSpinning();
        this.subscribeToNotifications();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.spinnerSubscription.unsubscribe();
        this.notificationSubscription.unsubscribe();
    };
    AppComponent.prototype.subscribeToSpinning = function () {
        var _this = this;
        this.spinnerSubscription = this.spinnerService.spinnerChange
            .subscribe(function (spinning) {
            if (spinning) {
                _this.spin++;
            }
            else {
                _this.spin--;
            }
        });
    };
    AppComponent.prototype.subscribeToNotifications = function () {
        var _this = this;
        this.notificationSubscription = this.notificationService.notificationChange
            .subscribe(function (notification) {
            _this.msgs = [];
            _this.msgs.push(notification);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"],
            _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_ind_ind_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ind/ind.component */ "./src/app/components/ind/ind.component.ts");
/* harmony import */ var _components_ud_ud_ud_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ud/ud/ud.component */ "./src/app/components/ud/ud/ud.component.ts");
/* harmony import */ var _components_status_status_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/status/status/status.component */ "./src/app/components/status/status/status.component.ts");
/* harmony import */ var _components_lager_lager_lager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/lager/lager/lager.component */ "./src/app/components/lager/lager/lager.component.ts");
/* harmony import */ var _components_infoboard_infoboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/infoboard/infoboard.component */ "./src/app/components/infoboard/infoboard.component.ts");
/* harmony import */ var _services_ind_ind_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/ind/ind.service */ "./src/app/services/ind/ind.service.ts");
/* harmony import */ var _services_status_status_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/status/status.service */ "./src/app/services/status/status.service.ts");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
/* harmony import */ var _services_apiservices_base_base_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/apiservices/base/base-api.service */ "./src/app/services/apiservices/base/base-api.service.ts");
/* harmony import */ var _services_apiservices_product_product_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/apiservices/product/product-api.service */ "./src/app/services/apiservices/product/product-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    {
        path: 'home',
        component: _components_infoboard_infoboard_component__WEBPACK_IMPORTED_MODULE_12__["InfoboardComponent"],
        data: { title: 'home' }
    },
    {
        path: 'ind',
        component: _components_ind_ind_component__WEBPACK_IMPORTED_MODULE_8__["IndComponent"],
        data: { title: 'Ind' }
    },
    {
        path: 'ud',
        component: _components_ud_ud_ud_component__WEBPACK_IMPORTED_MODULE_9__["UdComponent"],
        data: { title: 'Ud' }
    },
    {
        path: 'status',
        component: _components_status_status_status_component__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"],
        data: { title: 'Status' }
    },
    {
        path: 'lager',
        component: _components_lager_lager_lager_component__WEBPACK_IMPORTED_MODULE_11__["LagerComponent"],
        data: { title: 'Lager' }
    },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _components_infoboard_infoboard_component__WEBPACK_IMPORTED_MODULE_12__["InfoboardComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_ind_ind_component__WEBPACK_IMPORTED_MODULE_8__["IndComponent"],
                _components_infoboard_infoboard_component__WEBPACK_IMPORTED_MODULE_12__["InfoboardComponent"],
                _components_ud_ud_ud_component__WEBPACK_IMPORTED_MODULE_9__["UdComponent"],
                _components_status_status_status_component__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"],
                _components_lager_lager_lager_component__WEBPACK_IMPORTED_MODULE_11__["LagerComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["InputTextModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["ButtonModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CheckboxModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["CalendarModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_6__["GrowlModule"]
            ],
            providers: [
                _services_ind_ind_service__WEBPACK_IMPORTED_MODULE_13__["IndService"],
                _services_status_status_service__WEBPACK_IMPORTED_MODULE_14__["StatusService"],
                _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_15__["NotificationService"],
                _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_16__["SpinnerService"],
                _services_apiservices_product_product_api_service__WEBPACK_IMPORTED_MODULE_18__["ProductApiService"],
                _services_apiservices_base_base_api_service__WEBPACK_IMPORTED_MODULE_17__["BaseApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ind/ind.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/ind/ind.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"indContainer\">\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 noPadding fullPage\" id=\"indSquare\" style=\"background-color:#e27a84;\">\n      <h3>Ind</h3>\n      <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n          <b *ngIf=\"indTelefon.imei\">Imei: {{indTelefon.imei}}</b>\n          <b *ngIf=\"!indTelefon.imei\">Indtast Imei/SN..</b>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\">Produkt</div>\n        <div class=\"ui-g-10 product-dropdown\">\n          <p-dropdown [options]=\"phones\" [(ngModel)]=\"indTelefon.product\" [style]=\"{'width':'12em'}\" filter=\"true\">\n            <ng-template let-item pTemplate=\"selectedItem\">\n              <img src=\"assets/showcase/images/demo/phone/{{item.label}}.jpg\" style=\"width:16px;vertical-align:middle\" />\n              <span style=\"vertical-align:middle; margin-left: .5em\">{{item.label}}</span>\n            </ng-template>\n            <ng-template let-phone pTemplate=\"item\">\n              <div class=\"ui-helper-clearfix\" style=\"position: relative;height: 25px;\">\n                <img src=\"assets/showcase/images/demo/phone/{{phone.label}}.jpg\" style=\"width:24px;position:absolute;top:1px;left:5px\" />\n                <div style=\"font-size:14px;float:right;margin-top:4px\">{{phone.label}}</div>\n              </div>\n            </ng-template>\n          </p-dropdown>\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"product\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"product\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Fra</span></div>\n        <div class=\"ui-g-10\">\n          <p-dropdown [options]=\"origins\" [style]=\"{'width':'12em'}\" [(ngModel)]=\"indTelefon.origin\"></p-dropdown>\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"origin\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"origin\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Navn</span></div>\n        <div class=\"ui-g-10\">\n          <input id=\"input\" class=\"ng-dirty ng-invalid\" type=\"text\" size=\"20\" pInputText [(ngModel)]=\"indTelefon.name\">\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"name\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"name\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Faktura/ID</span></div>\n        <div class=\"ui-g-10\">\n          <input id=\"input\" type=\"text\" class=\"ng-dirty ng-invalid\" size=\"20\" pInputText [(ngModel)]=\"indTelefon.id\">\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"id\" label=\"\" [(ngModel)]=\"rememberedInputs\" inputId=\"id\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Dato</span></div>\n        <div class=\"ui-g-10\">\n          <p-calendar [(ngModel)]=\"indTelefon.date\" dateFormat=\"mm/dd/yy\"></p-calendar>\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"date\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"date\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Leveringsmetode</span></div>\n        <div class=\"ui-g-10\">\n          <p-dropdown [options]=\"deliveryMethods\" [style]=\"{'width':'12em'}\" [(ngModel)]=\"indTelefon.deliveryMethod\"></p-dropdown>\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"deliveryMethod\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"deliveryMethod\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span>Tracking</span></div>\n        <div class=\"ui-g-10\">\n          <input id=\"input\" type=\"text\" size=\"20\" pInputText [(ngModel)]=\"indTelefon.tracking\">\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"tracking\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"tracking\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n        <div class=\"ui-g-2\"><span><b>Imei/SN</b></span></div>\n        <div class=\"ui-g-10\">\n          <input id=\"input\" type=\"text\" size=\"20\" pInputText class=\"withBorders\" [(ngModel)]=\"indTelefon.imei\">\n          <p-checkbox class=\"checkbox\" name=\"checkBoxGroup1\" value=\"imei\" label=\"\" [(ngModel)]=\"rememberedInputs\"\n            inputId=\"imei\"></p-checkbox>\n        </div>\n      </div>\n\n      <div class=\"ui-g\">\n          <div class=\"ui-g-2 storeItemButton\">\n              <button pButton type=\"button\" label=\"til lager ->\" (click)=\"sendToStorage()\"></button>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ind/ind.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/ind/ind.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".indContainer {\n  width: 100%; }\n  .indContainer .fullPage {\n    height: 100vh;\n    overflow: auto; }\n  .indContainer .noPadding {\n    padding: 0em; }\n  .indContainer .product-dropdown .ui-dropdown-filter-icon {\n    top: .6em; }\n  .indContainer .ui-inputtext {\n    padding: 0em;\n    padding-right: 0.5em;\n    vertical-align: middle; }\n  .indContainer h3 {\n    text-align: center; }\n  .indContainer .ui-g-2 {\n    padding-top: 0.2em;\n    padding-bottom: 0em; }\n  .indContainer .ui-g-10 {\n    padding-bottom: 0em;\n    padding-top: 0.2em; }\n  .indContainer .checkbox {\n    padding-left: 0.2em; }\n  .indContainer .storeItemButton .ui-button {\n    background: darkgreen !important;\n    color: white;\n    border: 1px solid darkgreen !important;\n    font-size: small; }\n  .indContainer .storeItemButton .ui-button:hover {\n    background: green !important;\n    border: 1px solid green !important; }\n  .indContainer .withBorders {\n    border: 1px solid black; }\n  .indContainer .ui-chkbox-box.ui-state-active {\n    background: white;\n    color: black;\n    border: 1px solid black; }\n"

/***/ }),

/***/ "./src/app/components/ind/ind.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/ind/ind.component.ts ***!
  \*************************************************/
/*! exports provided: IndComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndComponent", function() { return IndComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ind_ind_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ind/ind.service */ "./src/app/services/ind/ind.service.ts");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony import */ var _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spinner/spinner.service */ "./src/app/services/spinner/spinner.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IndComponent = /** @class */ (function () {
    function IndComponent(indService, notificationService, spinnerService) {
        this.indService = indService;
        this.notificationService = notificationService;
        this.spinnerService = spinnerService;
        this.showInStatus = false;
        this.showInStatus = indService.showInStatus;
        this.indTelefon = indService.indTelefon;
        this.indTelefonDetails = indService.indTelefonDetails;
        this.rememberedInputs = indService.rememberedInputs;
        this.phones = indService.phones;
        this.origins = indService.origins;
        this.deliveryMethods = indService.deliveryMethods;
    }
    IndComponent.prototype.ngOnInit = function () {
    };
    IndComponent.prototype.ngOnDestroy = function () {
    };
    IndComponent.prototype.resizeOnClick = function (square) {
        this.indService.resizeOnClick(square);
    };
    IndComponent.prototype.sendToStorage = function () {
        this.spinnerService.notify(true);
        this.showInStatus = this.indService.sendToStorage();
        this.spinnerService.notify(false);
        // if(this.showInStatus){
        //   setTimeout(() => { this.resizeOnClick("status") }, 50);
        // }
    };
    IndComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ind',
            template: __webpack_require__(/*! ./ind.component.html */ "./src/app/components/ind/ind.component.html"),
            styles: [__webpack_require__(/*! ./ind.component.scss */ "./src/app/components/ind/ind.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_ind_ind_service__WEBPACK_IMPORTED_MODULE_1__["IndService"],
            _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _services_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_3__["SpinnerService"]])
    ], IndComponent);
    return IndComponent;
}());



/***/ }),

/***/ "./src/app/components/infoboard/infoboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/infoboard/infoboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  infoboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/infoboard/infoboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/infoboard/infoboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/infoboard/infoboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/infoboard/infoboard.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoboardComponent", function() { return InfoboardComponent; });
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

var InfoboardComponent = /** @class */ (function () {
    function InfoboardComponent() {
    }
    InfoboardComponent.prototype.ngOnInit = function () {
    };
    InfoboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infoboard',
            template: __webpack_require__(/*! ./infoboard.component.html */ "./src/app/components/infoboard/infoboard.component.html"),
            styles: [__webpack_require__(/*! ./infoboard.component.scss */ "./src/app/components/infoboard/infoboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoboardComponent);
    return InfoboardComponent;
}());



/***/ }),

/***/ "./src/app/components/lager/lager/lager.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/lager/lager/lager.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"lagerContainer\">\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 noPadding fullPage\" id=\"lagerSquare\" style=\"background-color:#7cd17b;\">\n      <h3>Lager</h3>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/lager/lager/lager.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/lager/lager/lager.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lagerContainer {\n  width: 100%; }\n  .lagerContainer .fullPage {\n    height: 100vh;\n    overflow: auto; }\n  .lagerContainer .noPadding {\n    padding: 0em; }\n  .lagerContainer h3 {\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/lager/lager/lager.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/lager/lager/lager.component.ts ***!
  \***********************************************************/
/*! exports provided: LagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LagerComponent", function() { return LagerComponent; });
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

var LagerComponent = /** @class */ (function () {
    function LagerComponent() {
    }
    LagerComponent.prototype.ngOnInit = function () {
    };
    LagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lager',
            template: __webpack_require__(/*! ./lager.component.html */ "./src/app/components/lager/lager/lager.component.html"),
            styles: [__webpack_require__(/*! ./lager.component.scss */ "./src/app/components/lager/lager/lager.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LagerComponent);
    return LagerComponent;
}());



/***/ }),

/***/ "./src/app/components/status/status/status.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/status/status/status.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"statusContainer\">\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 noPadding fullPage\" id=\"statusSquare\" style=\"background-color:#ddd87c;\">\n      <h3>Status</h3>\n      <ul>\n        <li *ngFor=\"let event of events\">{{event}}</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/status/status/status.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/status/status/status.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statusContainer {\n  width: 100%; }\n  .statusContainer .fullPage {\n    height: 100vh;\n    overflow: auto; }\n  .statusContainer .noPadding {\n    padding: 0em; }\n  .statusContainer h3 {\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/status/status/status.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/status/status/status.component.ts ***!
  \**************************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_status_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/status/status.service */ "./src/app/services/status/status.service.ts");
/* harmony import */ var _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StatusComponent = /** @class */ (function () {
    function StatusComponent(statusService, notificationService, httpClient) {
        this.statusService = statusService;
        this.notificationService = notificationService;
        this.httpClient = httpClient;
        this.events = [];
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.statusService.updateEvents();
        this.events = this.statusService.events;
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/components/status/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/components/status/status/status.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_status_status_service__WEBPACK_IMPORTED_MODULE_1__["StatusService"],
            _services_notification_notification_service__WEBPACK_IMPORTED_MODULE_2__["NotificationService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/components/ud/ud/ud.component.html":
/*!****************************************************!*\
  !*** ./src/app/components/ud/ud/ud.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"udContainer\">\n\n  <div class=\"ui-g\">\n    <div class=\"ui-g-12 noPadding fullPage\" id=\"udSquare\" style=\"background-color:#7c81d3;\">\n      <h3>Ud</h3>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ud/ud/ud.component.scss":
/*!****************************************************!*\
  !*** ./src/app/components/ud/ud/ud.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".udContainer {\n  width: 100%; }\n  .udContainer .fullPage {\n    height: 100vh;\n    overflow: auto; }\n  .udContainer .noPadding {\n    padding: 0em; }\n  .udContainer h3 {\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/ud/ud/ud.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/ud/ud/ud.component.ts ***!
  \**************************************************/
/*! exports provided: UdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UdComponent", function() { return UdComponent; });
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

var UdComponent = /** @class */ (function () {
    function UdComponent() {
    }
    UdComponent.prototype.ngOnInit = function () {
    };
    UdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ud',
            template: __webpack_require__(/*! ./ud.component.html */ "./src/app/components/ud/ud/ud.component.html"),
            styles: [__webpack_require__(/*! ./ud.component.scss */ "./src/app/components/ud/ud/ud.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UdComponent);
    return UdComponent;
}());



/***/ }),

/***/ "./src/app/services/apiservices/base/base-api.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/apiservices/base/base-api.service.ts ***!
  \***************************************************************/
/*! exports provided: BaseApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseApiService", function() { return BaseApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
var BaseApiService = /** @class */ (function () {
    function BaseApiService(http) {
        this.http = http;
    }
    BaseApiService.prototype.getName = function () {
        return this.constructor.name.split('ApiService')[0];
    };
    BaseApiService.prototype.get = function (methodName, data) {
        var paramsUrl = this.setMethodName(methodName);
        this.http.get(API_URL + '/' + this.getName() + paramsUrl, { params: data })
            .subscribe(function (response) { console.log(response); }, function (error) { console.log(error); }, function () { console.log("get completed!"); });
    };
    BaseApiService.prototype.post = function (data, methodName, params) {
        var paramsUrl = this.setMethodName(methodName);
        this.http.post(API_URL + '/' + this.getName() + paramsUrl, data, { params: params })
            .subscribe(function (response) { console.log(response); }, function (error) { console.log(error); }, function () { console.log("get completed!"); });
    };
    BaseApiService.prototype.put = function (methodName, data) {
        var paramsUrl = this.setMethodName(methodName);
        this.http.post(API_URL + '/' + this.getName() + paramsUrl, { params: data })
            .subscribe(function (response) { console.log(response); }, function (error) { console.log(error); }, function () { console.log("get completed!"); });
    };
    BaseApiService.prototype.delete = function (methodName, data) {
        var paramsUrl = this.setMethodName(methodName);
        this.http.post(API_URL + '/' + this.getName() + paramsUrl, { params: data })
            .subscribe(function (response) { console.log(response); }, function (error) { console.log(error); }, function () { console.log("get completed!"); });
    };
    BaseApiService.prototype.getRequestOptions = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
            'Content-Type': 'application/json'
        });
        return new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
    };
    //Crude implementation, expects the position of key to match position of value
    BaseApiService.prototype.setData = function (keys, values) {
        var data = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (keys.length == 0) {
            return new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        }
        else {
            for (var i = 0; i < keys.length; i++) {
                data = data.set(keys[i], values[i]);
            }
            return data;
        }
    };
    BaseApiService.prototype.setMethodName = function (methodName) {
        return methodName ?
            "/" + methodName // methodName
            : ""; // No methodName
    };
    BaseApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BaseApiService);
    return BaseApiService;
}());



/***/ }),

/***/ "./src/app/services/apiservices/product/product-api.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/services/apiservices/product/product-api.service.ts ***!
  \*********************************************************************/
/*! exports provided: ProductApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductApiService", function() { return ProductApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_base_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/base-api.service */ "./src/app/services/apiservices/base/base-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductApiService = /** @class */ (function (_super) {
    __extends(ProductApiService, _super);
    function ProductApiService(http) {
        return _super.call(this, http) || this;
    }
    ProductApiService.prototype.getAllProducts = function () {
        _super.prototype.get.call(this, "getAll");
    };
    ProductApiService.prototype.getMyProducts = function (items) {
        var keysAndValues = this.getKeysAndValues(items);
        var data = _super.prototype.setData.call(this, keysAndValues[0], keysAndValues[1]);
        _super.prototype.get.call(this, "getMyProducts", data);
    };
    ProductApiService.prototype.saveProduct = function (item) {
        _super.prototype.post.call(this, item, "saveProduct");
    };
    ProductApiService.prototype.getKeysAndValues = function (items) {
        var keys = [];
        var values = [];
        items.forEach(function (element) {
            var keyValues = element.split(':');
            keys.push(keyValues[0]);
            values.push(keyValues[1]);
        });
        return [keys, values];
    };
    ProductApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductApiService);
    return ProductApiService;
}(_base_base_api_service__WEBPACK_IMPORTED_MODULE_1__["BaseApiService"]));



/***/ }),

/***/ "./src/app/services/ind/ind.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/ind/ind.service.ts ***!
  \*********************************************/
/*! exports provided: IndService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndService", function() { return IndService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../notification/notification.service */ "./src/app/services/notification/notification.service.ts");
/* harmony import */ var _status_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../status/status.service */ "./src/app/services/status/status.service.ts");
/* harmony import */ var _apiservices_product_product_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiservices/product/product-api.service */ "./src/app/services/apiservices/product/product-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IndService = /** @class */ (function () {
    function IndService(notificationService, statusService, productApiService) {
        this.notificationService = notificationService;
        this.statusService = statusService;
        this.productApiService = productApiService;
        this.showInStatus = false;
        this.indTelefon = {
            product: 'Samsung S7 Sort',
            name: "",
            id: "",
            date: new Date(),
            tracking: "",
            imei: "",
            origin: 'Leverandør',
            deliveryMethod: 'TNT'
        };
        this.indTelefonDetails = Object.keys(this.indTelefon);
        this.rememberedInputs = ['product', 'origin', 'name', 'id', 'date', 'deliveryMethod', 'tracking', 'imei'];
        this.phones = [
            { label: 'Samsung S7 Sort', value: 'Samsung S7 Sort' },
            { label: 'Apple IPhone 7', value: 'Apple Iphone 7' },
            { label: 'Razer Phone', value: 'Razer Phone' },
            { label: 'OnePlus3', value: 'OnePlus3' }
        ];
        this.origins = [
            { label: 'Leverandør', value: 'Leverandør' },
            { label: 'Kunde', value: 'Kunde' },
            { label: 'Værksted', value: 'Værksted' }
        ];
        this.deliveryMethods = [
            { label: 'TNT', value: 'TNT' },
            { label: 'GLS', value: 'GLS' },
            { label: 'PostNord', value: 'PostNord' },
            { label: 'DHL', value: 'DHL' }
        ];
    }
    IndService.prototype.resizeOnClick = function (square) {
        var indSquare = document.getElementById("indSquare");
        var udSquare = document.getElementById("udSquare");
        var statusSquare = document.getElementById("statusSquare");
        var lagerSquare = document.getElementById("lagerSquare");
        switch (square) {
            case "ind": {
                //Resize ind
                indSquare.style.height = "75vh";
                indSquare.style.width = "75%";
                indSquare.style.zIndex = "0";
                udSquare.style.height = "75vh";
                udSquare.style.width = "25%";
                udSquare.style.zIndex = "0";
                statusSquare.style.height = "25vh";
                statusSquare.style.width = "50%";
                statusSquare.style.zIndex = "0";
                lagerSquare.style.height = "25vh";
                lagerSquare.style.width = "50%";
                lagerSquare.style.zIndex = "0";
                break;
            }
            case "ud": {
                //Resize ud
                indSquare.style.height = "75vh";
                indSquare.style.width = "25%";
                indSquare.style.zIndex = "0";
                udSquare.style.height = "75vh";
                udSquare.style.width = "75%";
                udSquare.style.zIndex = "0";
                statusSquare.style.height = "25vh";
                statusSquare.style.width = "50%";
                statusSquare.style.zIndex = "0";
                lagerSquare.style.height = "25vh";
                lagerSquare.style.width = "50%";
                lagerSquare.style.zIndex = "0";
                break;
            }
            case "status": {
                //Resize status
                indSquare.style.height = "25vh";
                indSquare.style.width = "50%";
                indSquare.style.zIndex = "0";
                udSquare.style.height = "25vh";
                udSquare.style.width = "50%";
                udSquare.style.zIndex = "0";
                statusSquare.style.height = "75vh";
                statusSquare.style.width = "75%";
                statusSquare.style.zIndex = "0";
                lagerSquare.style.height = "75vh";
                lagerSquare.style.width = "25%";
                lagerSquare.style.zIndex = "0";
                break;
            }
            case "lager": {
                //Resize lager
                indSquare.style.height = "25vh";
                indSquare.style.width = "50%";
                indSquare.style.zIndex = "0";
                udSquare.style.height = "25vh";
                udSquare.style.width = "50%";
                udSquare.style.zIndex = "0";
                statusSquare.style.height = "75vh";
                statusSquare.style.width = "25%";
                statusSquare.style.zIndex = "0";
                lagerSquare.style.height = "75vh";
                lagerSquare.style.width = "75%";
                lagerSquare.style.zIndex = "0";
                break;
            }
        }
    };
    IndService.prototype.sendToStorage = function () {
        //this.productApiService.getMyProducts(["Samsung:galaxy s7,galaxy 5", "Apple:iphone6,iphone7"]);
        //this.productApiService.getAllProducts();
        //this.productApiService.saveProduct(this.indTelefon);
        if (!this.indTelefon.date) {
            this.notificationService.notify('error', 'Manglende info', 'vælg dato');
            return false;
        }
        if (!this.indTelefon.deliveryMethod) {
            this.notificationService.notify('error', 'Manglende info', 'vælg leveringsmetode');
            return false;
        }
        if (!this.indTelefon.id) {
            this.notificationService.notify('error', 'Manglende info', 'udfyld Faktura/ID');
            return false;
        }
        if (!this.indTelefon.imei) {
            this.notificationService.notify('error', 'Manglende info', 'udfyld imei');
            return false;
        }
        if (!this.indTelefon.name) {
            this.notificationService.notify('error', 'Manglende info', 'udfyld navn');
            return false;
        }
        if (!this.indTelefon.origin) {
            this.notificationService.notify('error', 'Manglende info', 'udfyld fra');
            return false;
        }
        if (!this.indTelefon.product) {
            this.notificationService.notify('error', 'Manglende info', 'vælg produkt');
            return false;
        }
        if (!this.indTelefon.tracking) {
            this.notificationService.notify('error', 'Manglende info', 'udfyld tracking');
            return false;
        }
        this.statusService.createEvent("Tilføjet vare til lager med imei: " + this.indTelefon.imei);
        this.notificationService.notify('success', 'OK', 'Vare sendt til lager');
        return true;
    };
    IndService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_notification_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"],
            _status_status_service__WEBPACK_IMPORTED_MODULE_2__["StatusService"],
            _apiservices_product_product_api_service__WEBPACK_IMPORTED_MODULE_3__["ProductApiService"]])
    ], IndService);
    return IndService;
}());



/***/ }),

/***/ "./src/app/services/notification/notification.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/notification/notification.service.ts ***!
  \***************************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService() {
        this.notificationChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    NotificationService.prototype.notify = function (severity, summary, detail) {
        this.notificationChange.next({ severity: severity, summary: summary, detail: detail });
    };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "./src/app/services/spinner/spinner.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/spinner/spinner.service.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerService = /** @class */ (function () {
    function SpinnerService() {
        this.spinnerChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    SpinnerService.prototype.notify = function (spinning) {
        this.spinnerChange.next(spinning);
    };
    SpinnerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SpinnerService);
    return SpinnerService;
}());



/***/ }),

/***/ "./src/app/services/status/status.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/status/status.service.ts ***!
  \***************************************************/
/*! exports provided: StatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusService", function() { return StatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var StatusService = /** @class */ (function () {
    function StatusService(httpClient) {
        this.httpClient = httpClient;
        this.csvUrl = 'assets/events.csv';
        this.events = [];
    }
    StatusService.prototype.createEvent = function (event) {
    };
    StatusService.prototype.updateEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.readevents()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StatusService.prototype.readevents = function () {
        var _this = this;
        this.httpClient.get(this.csvUrl, { responseType: 'text' })
            .subscribe(function (data) {
            _this.events = data.split(',');
        }, function (error) {
            console.log(error);
        });
    };
    StatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StatusService);
    return StatusService;
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
    production: false,
    //apiUrl: "localhost:8000"
    apiUrl: "www.fakefakefake.com"
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

module.exports = __webpack_require__(/*! C:\Users\Casper\ProgrammingProjects\lagerApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map