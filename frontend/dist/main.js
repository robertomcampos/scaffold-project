(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-create.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-create.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Nova Escola</h1>\r\n    <form [formGroup]=\"escolaForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Nome:</label>\r\n            <input class=\"form-control\" required type=\"text\" formControlName=\"name\" placeholder=\"Nome da escola\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Endereço:</label>\r\n            <input class=\"form-control\" required type=\"text\" formControlName=\"address\" placeholder=\"Endereço da escola\">\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!escolaForm.valid\">Salvar</button>\r\n        <a class=\"btn btn-secondary\" routerLink=\"/escolas\">Cancelar</a>\r\n      </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-list.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Escolas</h1>\r\n    <a class=\"btn btn-primary\" routerLink=\"/escolas/new\">Nova Escola</a>\r\n    <table class=\"table\" *ngIf=\"escolas.length\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th scope=\"col\">Nome</th>\r\n                <th scope=\"col\">Endereço</th>\r\n                <th scope=\"col\">Data de criação</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let escola of escolas | paginate: {\r\n                id: 'listing_pagination',\r\n                itemsPerPage: pageSize,\r\n                currentPage: page,\r\n                totalItems: total\r\n            }\">\r\n                <td>{{escola.name}}</td>\r\n                <td>{{escola.address}}</td>\r\n                <td>{{escola.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div *ngIf=\"escolas.length\">\r\n        <pagination-controls class=\"text-center\" id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\"\r\n            (pageChange)=\"onPageChange($event)\" previousLabel=\"Anterior\" nextLabel=\"Próxima\">\r\n        </pagination-controls>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n\t<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\r\n\t\t<span class=\"navbar-brand\">Gerenciamento de Escolas e Turmas</span>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n\t\t\taria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n\t\t\t<ul class=\"navbar-nav mr-auto\">\r\n\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': activeItem==0}\">\r\n\t\t\t\t\t<a class=\"nav-link pointer\" (click)=\"onClick(0)\">Home</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': activeItem==1}\">\r\n\t\t\t\t\t<a class=\"nav-link pointer\" (click)=\"onClick(1)\">Escolas</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item\" [ngClass]=\"{'active': activeItem==2}\">\r\n\t\t\t\t\t<a class=\"nav-link pointer\" (click)=\"onClick(2)\">Turmas</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</nav>\r\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-create.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-create.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Nova Turma</h1>\r\n    <form [formGroup]=\"turmaForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Escola:</label>\r\n            <select formControlName=\"escolaId\" required class=\"form-control\" id=\"escola\">\r\n                <option value=\"\">Selecione uma Escola</option>\r\n                <option *ngFor=\"let escola of escolas\" [ngValue]=\"escola.id\">{{escola.name}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Turma:</label>\r\n            <input class=\"form-control\" required type=\"text\" formControlName=\"name\" placeholder=\"Nome da Turma\">\r\n        </div>\r\n\r\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!turmaForm.valid\">Salvar</button>\r\n        <a class=\"btn btn-secondary\" routerLink=\"/turmas\">Cancelar</a>\r\n    </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-list.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <h1>Turmas</h1>\r\n    <a class=\"btn btn-primary\" routerLink=\"/turmas/new\">Nova Turma</a>\r\n    <table class=\"table\" *ngIf=\"turmas.length\">\r\n        <thead class=\"thead-dark\">\r\n            <tr>\r\n                <th scope=\"col\">Nome</th>\r\n                <th scope=\"col\">Escola</th>\r\n                <th scope=\"col\">Data de Criação</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let turma of turmas | paginate: {\r\n                id: 'listing_pagination',\r\n                itemsPerPage: pageSize,\r\n                currentPage: page,\r\n                totalItems: total\r\n            }\">\r\n                <td>{{turma.name}}</td>\r\n                <td>{{turma.escola.name}}</td>\r\n                <td>{{turma.createdDate | date:'dd/MM/yyyy HH:mm:ss'}}</td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n    <div *ngIf=\"turmas.length\">\r\n        <pagination-controls class=\"text-center\" id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\"\r\n            (pageChange)=\"onPageChange($event)\" previousLabel=\"Anterior\" nextLabel=\"Próxima\">\r\n        </pagination-controls>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  font-family: Lato;\r\n}\r\n\r\n\r\n\r\n.main {\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7Ozs7QUFJQTtFQUNFLGdCQUFnQjtBQUNsQjs7OztBQUVBOzs7O0NBSUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59XHJcblxyXG5cclxuXHJcbi5tYWluIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4vKlxyXG5Db3B5cmlnaHQgR29vZ2xlIExMQy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdFxyXG5jYW4gYmUgZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiovIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"))["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var ngx_pagination_1 = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var header_component_1 = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var escola_list_component_1 = __webpack_require__(/*! ./escola/escola-list.component */ "./src/app/escola/escola-list.component.ts");
var escola_create_component_1 = __webpack_require__(/*! ./escola/escola-create-component */ "./src/app/escola/escola-create-component.ts");
var turma_list_component_1 = __webpack_require__(/*! ./turma/turma-list.component */ "./src/app/turma/turma-list.component.ts");
var turma_create_component_1 = __webpack_require__(/*! ./turma/turma-create.component */ "./src/app/turma/turma-create.component.ts");
var home_component_1 = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot({
                    positionClass: 'toast-top-center'
                }),
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent },
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'escolas', component: escola_list_component_1.EscolaListComponent },
                    { path: 'escolas/new', component: escola_create_component_1.EscolaCreateComponent },
                    { path: 'turmas', component: turma_list_component_1.TurmaListComponent },
                    { path: 'turmas/new', component: turma_create_component_1.TurmaCreateComponent },
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                escola_list_component_1.EscolaListComponent,
                escola_create_component_1.EscolaCreateComponent,
                turma_list_component_1.TurmaListComponent,
                turma_create_component_1.TurmaCreateComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.API_BASE_URL = 'http://localhost:5000';
    return Constants;
}());
exports["default"] = Constants;


/***/ }),

/***/ "./src/app/escola/escola-create-component.ts":
/*!***************************************************!*\
  !*** ./src/app/escola/escola-create-component.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var escola_service_1 = __webpack_require__(/*! ./escola-service */ "./src/app/escola/escola-service.ts");
var notification_service_1 = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
var EscolaCreateComponent = /** @class */ (function () {
    function EscolaCreateComponent(escolaService, notificationService, router) {
        this.escolaService = escolaService;
        this.notificationService = notificationService;
        this.router = router;
        this.escolaForm = new forms_1.FormGroup({
            name: new forms_1.FormControl(''),
            address: new forms_1.FormControl('')
        });
    }
    EscolaCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.escolaForm.value, name = _a.name, address = _a.address;
        this.escolaService.create({ name: name, address: address })
            .subscribe(function () {
            _this.notificationService.showSuccess("A Escola foi criada com sucesso.");
            _this.router.navigateByUrl('/escolas');
        });
    };
    EscolaCreateComponent.ctorParameters = function () { return [
        { type: escola_service_1.EscolaService },
        { type: notification_service_1.NotificationService },
        { type: router_1.Router }
    ]; };
    EscolaCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-escola-create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./escola-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-create.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./escola-create.component.css */ "./src/app/escola/escola-create.component.css"))["default"]]
        }),
        __metadata("design:paramtypes", [escola_service_1.EscolaService,
            notification_service_1.NotificationService,
            router_1.Router])
    ], EscolaCreateComponent);
    return EscolaCreateComponent;
}());
exports.EscolaCreateComponent = EscolaCreateComponent;


/***/ }),

/***/ "./src/app/escola/escola-create.component.css":
/*!****************************************************!*\
  !*** ./src/app/escola/escola-create.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNjb2xhL2VzY29sYS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lc2NvbGEvZXNjb2xhLWNyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/escola/escola-list.component.css":
/*!**************************************************!*\
  !*** ./src/app/escola/escola-list.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNjb2xhL2VzY29sYS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztDQUlDIiwiZmlsZSI6InNyYy9hcHAvZXNjb2xhL2VzY29sYS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/escola/escola-list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/escola/escola-list.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var escola_service_1 = __webpack_require__(/*! ./escola-service */ "./src/app/escola/escola-service.ts");
var EscolaListComponent = /** @class */ (function () {
    function EscolaListComponent(escolaService) {
        this.escolaService = escolaService;
        this.escolas = [];
        this.page = 1;
        this.fetchData();
    }
    EscolaListComponent.prototype.fetchData = function () {
        var _this = this;
        this.escolaService.get({ page: this.page, limit: this.pageSize }).subscribe(function (result) {
            _this.total = result.totalCount;
            _this.pageSize = result.pageSize;
            _this.escolas = result.items;
        });
    };
    EscolaListComponent.prototype.onPageChange = function (event) {
        this.page = event;
        this.fetchData();
    };
    EscolaListComponent.ctorParameters = function () { return [
        { type: escola_service_1.EscolaService }
    ]; };
    EscolaListComponent = __decorate([
        core_1.Component({
            selector: 'app-escola-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./escola-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/escola/escola-list.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./escola-list.component.css */ "./src/app/escola/escola-list.component.css"))["default"]]
        }),
        __metadata("design:paramtypes", [escola_service_1.EscolaService])
    ], EscolaListComponent);
    return EscolaListComponent;
}());
exports.EscolaListComponent = EscolaListComponent;


/***/ }),

/***/ "./src/app/escola/escola-service.ts":
/*!******************************************!*\
  !*** ./src/app/escola/escola-service.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var apiClient_service_1 = __webpack_require__(/*! ../services/apiClient.service */ "./src/app/services/apiClient.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var toParams_1 = __webpack_require__(/*! ../services/toParams */ "./src/app/services/toParams.ts");
var EscolaService = /** @class */ (function () {
    function EscolaService(apiClient, handleApiError) {
        this.apiClient = apiClient;
        this.handleApiError = handleApiError;
    }
    EscolaService.prototype.getAll = function () {
        return this.apiClient.get("/escola/all")
            .pipe(operators_1.tap(function (_) { return console.log('listing classes'); }), operators_1.catchError(this.handleApiError.handleError('listing classess')));
    };
    EscolaService.prototype.get = function (params) {
        var query = toParams_1.toParams(params);
        return this.apiClient.get("/escola?" + query)
            .pipe(operators_1.tap(function (_) { return console.log('listing classes'); }), operators_1.catchError(this.handleApiError.handleError('listing classess')));
    };
    EscolaService.prototype.create = function (data) {
        return this.apiClient.post('/escola', data)
            .pipe(operators_1.tap(function (_) { return console.log('creating escola'); }), operators_1.catchError(this.handleApiError.handleError('creating escola')));
    };
    EscolaService.ctorParameters = function () { return [
        { type: apiClient_service_1.ApiClient },
        { type: apiClient_service_1.HandleApiError }
    ]; };
    EscolaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apiClient_service_1.ApiClient,
            apiClient_service_1.HandleApiError])
    ], EscolaService);
    return EscolaService;
}());
exports.EscolaService = EscolaService;


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pointer {\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.activeItem = 0;
        this.HOME = 0;
        this.SCHOOLS = 1;
        this.CLASSES = 2;
    }
    HeaderComponent.prototype.onClick = function (value) {
        this.activeItem = value;
        switch (value) {
            case this.HOME:
                return this.router.navigateByUrl('/home');
            case this.SCHOOLS:
                return this.router.navigateByUrl('/escolas');
            case this.CLASSES:
                return this.router.navigateByUrl('/turmas');
            default:
                return this.router.navigateByUrl('/home');
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: router_1.Router }
    ]; };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css"))["default"]]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: '<div>Gerenciamento de Escolas e Turmas</div>'
        })
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/app/services/apiClient.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/apiClient.service.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
var notification_service_1 = __webpack_require__(/*! ./notification.service */ "./src/app/services/notification.service.ts");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var ApiClient = /** @class */ (function () {
    function ApiClient(httpClient) {
        this.httpClient = httpClient;
    }
    ApiClient.prototype.get = function (url) {
        return this.httpClient.get("" + constants_1["default"].API_BASE_URL + url);
    };
    ApiClient.prototype.post = function (url, data) {
        return this.httpClient.post("" + constants_1["default"].API_BASE_URL + url, data, httpOptions);
    };
    ApiClient.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    ApiClient = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiClient);
    return ApiClient;
}());
exports.ApiClient = ApiClient;
var HandleApiError = /** @class */ (function () {
    function HandleApiError(notificationService) {
        this.notificationService = notificationService;
    }
    HandleApiError.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.notificationService.showError(operation + " failed: " + error.message);
            console.error('the api is not available. The object result is: ', result);
            return rxjs_1.throwError(error);
        };
    };
    HandleApiError.ctorParameters = function () { return [
        { type: notification_service_1.NotificationService }
    ]; };
    HandleApiError = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [notification_service_1.NotificationService])
    ], HandleApiError);
    return HandleApiError;
}());
exports.HandleApiError = HandleApiError;


/***/ }),

/***/ "./src/app/services/notification.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var ngx_toastr_1 = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");
var NotificationService = /** @class */ (function () {
    function NotificationService(toastr) {
        this.toastr = toastr;
    }
    NotificationService.prototype.showSuccess = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.success(message, title);
    };
    NotificationService.prototype.showError = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.error(message, title);
    };
    NotificationService.prototype.showInfo = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.info(message, title);
    };
    NotificationService.prototype.showWarning = function (message, title) {
        if (title === void 0) { title = ''; }
        this.toastr.warning(message, title);
    };
    NotificationService.ctorParameters = function () { return [
        { type: ngx_toastr_1.ToastrService }
    ]; };
    NotificationService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr_1.ToastrService])
    ], NotificationService);
    return NotificationService;
}());
exports.NotificationService = NotificationService;


/***/ }),

/***/ "./src/app/services/toParams.ts":
/*!**************************************!*\
  !*** ./src/app/services/toParams.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.toParams = function (params) { return Object.keys(params).map(function (key) {
    if (key && params[key])
        return key + '=' + params[key];
}).join('&'); };


/***/ }),

/***/ "./src/app/turma/turma-create.component.css":
/*!**************************************************!*\
  !*** ./src/app/turma/turma-create.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHVybWEvdHVybWEtY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztDQUlDIiwiZmlsZSI6InNyYy9hcHAvdHVybWEvdHVybWEtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */");

/***/ }),

/***/ "./src/app/turma/turma-create.component.ts":
/*!*************************************************!*\
  !*** ./src/app/turma/turma-create.component.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var escola_service_1 = __webpack_require__(/*! ../escola/escola-service */ "./src/app/escola/escola-service.ts");
var turma_service_1 = __webpack_require__(/*! ./turma-service */ "./src/app/turma/turma-service.ts");
var notification_service_1 = __webpack_require__(/*! ../services/notification.service */ "./src/app/services/notification.service.ts");
var TurmaCreateComponent = /** @class */ (function () {
    function TurmaCreateComponent(escolaService, turmaService, notificationService, router) {
        var _this = this;
        this.escolaService = escolaService;
        this.turmaService = turmaService;
        this.notificationService = notificationService;
        this.router = router;
        this.turmaForm = new forms_1.FormGroup({
            escolaId: new forms_1.FormControl(''),
            name: new forms_1.FormControl('')
        });
        this.escolaService.getAll().subscribe(function (result) {
            _this.escolas = result;
        });
    }
    TurmaCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var _a = this.turmaForm.value, name = _a.name, escolaId = _a.escolaId;
        this.turmaService.create({ name: name, escolaId: escolaId }).subscribe(function () {
            _this.notificationService.showSuccess("A Turma foi criada com sucesso.");
            _this.router.navigateByUrl('/turmas');
        });
    };
    TurmaCreateComponent.ctorParameters = function () { return [
        { type: escola_service_1.EscolaService },
        { type: turma_service_1.TurmaService },
        { type: notification_service_1.NotificationService },
        { type: router_1.Router }
    ]; };
    TurmaCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-turma-create',
            template: __importDefault(__webpack_require__(/*! raw-loader!./turma-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-create.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./turma-create.component.css */ "./src/app/turma/turma-create.component.css"))["default"]]
        }),
        __metadata("design:paramtypes", [escola_service_1.EscolaService,
            turma_service_1.TurmaService,
            notification_service_1.NotificationService,
            router_1.Router])
    ], TurmaCreateComponent);
    return TurmaCreateComponent;
}());
exports.TurmaCreateComponent = TurmaCreateComponent;


/***/ }),

/***/ "./src/app/turma/turma-list.component.css":
/*!************************************************!*\
  !*** ./src/app/turma/turma-list.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHVybWEvdHVybWEtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL3R1cm1hL3R1cm1hLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qLyJdfQ== */");

/***/ }),

/***/ "./src/app/turma/turma-list.component.ts":
/*!***********************************************!*\
  !*** ./src/app/turma/turma-list.component.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var turma_service_1 = __webpack_require__(/*! ./turma-service */ "./src/app/turma/turma-service.ts");
var TurmaListComponent = /** @class */ (function () {
    function TurmaListComponent(turmaService) {
        this.turmaService = turmaService;
        this.turmas = [];
        this.page = 1;
        this.fetchData();
    }
    TurmaListComponent.prototype.fetchData = function () {
        var _this = this;
        this.turmaService.get({ page: this.page, limit: this.pageSize }).subscribe(function (result) {
            _this.total = result.totalCount;
            _this.pageSize = result.pageSize;
            _this.turmas = result.items;
        });
    };
    TurmaListComponent.prototype.onPageChange = function (event) {
        this.page = event;
        this.fetchData();
    };
    TurmaListComponent.ctorParameters = function () { return [
        { type: turma_service_1.TurmaService }
    ]; };
    TurmaListComponent = __decorate([
        core_1.Component({
            selector: 'app-class-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./turma-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/turma/turma-list.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./turma-list.component.css */ "./src/app/turma/turma-list.component.css"))["default"]]
        }),
        __metadata("design:paramtypes", [turma_service_1.TurmaService])
    ], TurmaListComponent);
    return TurmaListComponent;
}());
exports.TurmaListComponent = TurmaListComponent;


/***/ }),

/***/ "./src/app/turma/turma-service.ts":
/*!****************************************!*\
  !*** ./src/app/turma/turma-service.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var apiClient_service_1 = __webpack_require__(/*! ../services/apiClient.service */ "./src/app/services/apiClient.service.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var toParams_1 = __webpack_require__(/*! ../services/toParams */ "./src/app/services/toParams.ts");
var TurmaService = /** @class */ (function () {
    function TurmaService(apiClient, handleApiError) {
        this.apiClient = apiClient;
        this.handleApiError = handleApiError;
    }
    TurmaService.prototype.get = function (params) {
        var query = toParams_1.toParams(params);
        return this.apiClient.get("/turma?" + query)
            .pipe(operators_1.tap(function (_) { return console.log('listing classes'); }), operators_1.catchError(this.handleApiError.handleError('listing classess')));
    };
    TurmaService.prototype.create = function (data) {
        return this.apiClient.post('/turma', data)
            .pipe(operators_1.tap(function (_) { return console.log('creating a class'); }), operators_1.catchError(this.handleApiError.handleError('creating a class')));
    };
    TurmaService.ctorParameters = function () { return [
        { type: apiClient_service_1.ApiClient },
        { type: apiClient_service_1.HandleApiError }
    ]; };
    TurmaService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [apiClient_service_1.ApiClient,
            apiClient_service_1.HandleApiError])
    ], TurmaService);
    return TurmaService;
}());
exports.TurmaService = TurmaService;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
exports.__esModule = true;
exports.environment = {
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
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Portal\Frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map