function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-navigations */
    "./node_modules/@syncfusion/ej2-angular-navigations/__ivy_ngcc__/@syncfusion/ej2-angular-navigations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["dockBar"];

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = "Azure Functions Adventure - Angular!";
        this.enableDock = true;
        this.width = '220px';
        this.dockSize = '72px';
      }

      _createClass(AppComponent, [{
        key: "toggleClick",
        value: function toggleClick() {
          this.dockBar.toggle();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      viewQuery: function AppComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dockBar = _t.first);
        }
      },
      decls: 26,
      vars: 3,
      consts: [["id", "dockSidebar", 3, "enableDock", "width", "dockSize"], ["dockBar", ""], [1, "dock"], ["id", "toggle", 1, "sidebar-item", 3, "click"], [1, "e-icons", "expand"], ["title", "menu", 1, "e-text"], ["routerLink", ".", 1, "sidebar-item"], [1, "e-icons", "home"], ["title", "home", 1, "e-text"], ["routerLink", "./people", 1, "sidebar-item"], [1, "e-icons", "profile"], ["title", "profile", 1, "e-text"], [1, "sidebar-item"], [1, "e-icons", "info"], ["title", "info", 1, "e-text"], [1, "e-icons", "settings"], ["title", "settings", 1, "e-text"], ["id", "main-content container-fluid col-md-12 "]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ejs-sidebar", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_li_click_4_listener() {
            return ctx.toggleClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "People");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Settings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableDock", ctx.enableDock)("width", ctx.width)("dockSize", ctx.dockSize);
        }
      },
      directives: [_syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding: 15px;\r\n}\r\n \r\n.sub-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    padding: 10px;\r\n}\r\n \r\n#dockSidebar.e-sidebar.e-right.e-close[_ngcontent-%COMP%] {\r\n    \r\n    visibility: visible;\r\n    transform: translateX(0%);\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%]::before {\r\n    font-size: 25px;\r\n}\r\n \r\n\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%]::before {\r\n    content: '\\e102';\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]::before {\r\n    content: '\\e10c';\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]::before {\r\n    content: '\\e11b';\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   .settings[_ngcontent-%COMP%]::before {\r\n    content: '\\e10b';\r\n}\r\n \r\n.e-sidebar[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]::before {\r\n    content: '\\e10f';\r\n}\r\n \r\n.e-sidebar.e-open[_ngcontent-%COMP%]   .expand[_ngcontent-%COMP%]::before {\r\n    \r\n    content: '\\e10e';\r\n}\r\n \r\n\r\n \r\n#dockSidebar.e-close[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%] {\r\n    padding: 5px 20px;\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%] {\r\n    visibility: hidden;\r\n}\r\n \r\n#dockSidebar.e-sidebar[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n}\r\n \r\n.e-dock.e-close[_ngcontent-%COMP%]   span.e-text[_ngcontent-%COMP%] {\r\n    \r\n    display: none;\r\n}\r\n \r\n.e-dock.e-open[_ngcontent-%COMP%]   span.e-text[_ngcontent-%COMP%] {\r\n    \r\n    display: inline-block;\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    list-style-type: none;\r\n    cursor: pointer;\r\n}\r\n \r\n#dockSidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n}\r\n \r\n#dockSidebar.e-sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\r\n    color: white\r\n}\r\n \r\nspan.e-icons[_ngcontent-%COMP%] {\r\n    color: #c0c2c5;\r\n    line-height: 2;\r\n}\r\n \r\n.e-open[_ngcontent-%COMP%]   .e-icons[_ngcontent-%COMP%] {\r\n    margin-right: 16px;\r\n}\r\n \r\n.e-open[_ngcontent-%COMP%]   .e-text[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    line-height: 23px;\r\n    font-size: 15px;\r\n}\r\n \r\n.sidebar-item[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    border-bottom: 1px #e5e5e58a solid;\r\n}\r\n \r\n.e-sidebar.e-open[_ngcontent-%COMP%]   .sidebar-item[_ngcontent-%COMP%] {\r\n    \r\n    text-align: left;\r\n    padding-left: 15px;\r\n    color: #c0c2c5;\r\n}\r\n \r\n#dockSidebar.e-sidebar[_ngcontent-%COMP%] {\r\n    background: #2d323e;\r\n    overflow: hidden;\r\n}\r\n \r\n\r\n \r\n@font-face {\r\n   font-family: 'e-icons';\r\n   src: url(data:application/x-font-ttf;charset=utf-8;base64,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) format('truetype');\r\n   font-weight: normal;\r\n   font-style: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0JBQXdCOztBQUV4QjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQSx1QkFBdUI7O0FBRXZCO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGdCQUFnQjtBQUNwQjs7QUFDQSw4QkFBOEI7O0FBRTlCO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBLDBCQUEwQjs7QUFFMUI7R0FDRyxzQkFBc0I7R0FDdEIsMG1KQUEwbUo7R0FDMW1KLG1CQUFtQjtHQUNuQixrQkFBa0I7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbnRlbnQgYXJlYSBzdHlsZXMgKi9cclxuIFxyXG4udGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jZG9ja1NpZGViYXIuZS1zaWRlYmFyLmUtcmlnaHQuZS1jbG9zZSB7XHJcbiAgICAvKiBjc3NsaW50IGFsbG93OiBhZGpvaW5pbmctY2xhc3NlcyovXHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxufVxyXG5cclxuI2RvY2tTaWRlYmFyIC5lLWljb25zOjpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbi8qIGRvY2tiYXIgaWNvbiBTdHlsZSAqL1xyXG5cclxuI2RvY2tTaWRlYmFyIC5ob21lOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1xcZTEwMic7XHJcbn1cclxuXHJcbiNkb2NrU2lkZWJhciAucHJvZmlsZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXGUxMGMnO1xyXG59XHJcblxyXG4jZG9ja1NpZGViYXIgLmluZm86OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnXFxlMTFiJztcclxufVxyXG5cclxuI2RvY2tTaWRlYmFyIC5zZXR0aW5nczo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICdcXGUxMGInO1xyXG59XHJcblxyXG4uZS1zaWRlYmFyIC5leHBhbmQ6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnXFxlMTBmJztcclxufVxyXG5cclxuLmUtc2lkZWJhci5lLW9wZW4gLmV4cGFuZDo6YmVmb3JlIHtcclxuICAgIC8qIGNzc2xpbnQgYWxsb3c6IGFkam9pbmluZy1jbGFzc2VzKi9cclxuICAgIGNvbnRlbnQ6ICdcXGUxMGUnO1xyXG59XHJcbi8qIGVuZCBvZiBkb2NrYmFyIGljb24gU3R5bGUgKi9cclxuXHJcbiNkb2NrU2lkZWJhci5lLWNsb3NlIC5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XHJcbn1cclxuXHJcbiNkb2NrU2lkZWJhciB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiNkb2NrU2lkZWJhci5lLXNpZGViYXIge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmUtZG9jay5lLWNsb3NlIHNwYW4uZS10ZXh0IHtcclxuICAgIC8qIGNzc2xpbnQgYWxsb3c6IGFkam9pbmluZy1jbGFzc2VzKi9cclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5lLWRvY2suZS1vcGVuIHNwYW4uZS10ZXh0IHtcclxuICAgIC8qIGNzc2xpbnQgYWxsb3c6IGFkam9pbmluZy1jbGFzc2VzKi9cclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuI2RvY2tTaWRlYmFyIGxpIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2RvY2tTaWRlYmFyIHVsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbiNkb2NrU2lkZWJhci5lLXNpZGViYXIgdWwgbGk6aG92ZXIgc3BhbiB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5cclxuc3Bhbi5lLWljb25zIHtcclxuICAgIGNvbG9yOiAjYzBjMmM1O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuXHJcbi5lLW9wZW4gLmUtaWNvbnMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uZS1vcGVuIC5lLXRleHQge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWl0ZW0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNlNWU1ZTU4YSBzb2xpZDtcclxufVxyXG5cclxuLmUtc2lkZWJhci5lLW9wZW4gLnNpZGViYXItaXRlbSB7XHJcbiAgICAvKiBjc3NsaW50IGFsbG93OiBhZGpvaW5pbmctY2xhc3NlcyovXHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgY29sb3I6ICNjMGMyYzU7XHJcbn1cclxuXHJcbiNkb2NrU2lkZWJhci5lLXNpZGViYXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJkMzIzZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLyogZW5kIG9mIHNpZGViYXIgc3R5bGVzICovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgZm9udC1mYW1pbHk6ICdlLWljb25zJztcclxuICAgc3JjOiB1cmwoZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtdHRmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFLQUlBQUF3QWdUMU12TWpjaVE2b0FBQUVvQUFBQVZtTnRZWEJIMUVjOEFBQUJzQUFBQUhKbmJIbG1LY1hmT1FBQUFrQUFBQWc0YUdWaFpCTHQrRFlBQUFEUUFBQUFObWhvWldFSG9nTnNBQUFBckFBQUFDUm9iWFI0THZnQUFBQUFBWUFBQUFBd2JHOWpZUXVrQ2dJQUFBSWtBQUFBR20xaGVIQUJHUUVPQUFBQkNBQUFBQ0J1WVcxbFI0MDQwd0FBQ25nQUFBSnRjRzl6ZEVGZ0lid0FBQXpvQUFBQXJBQUJBQUFEVXY5cUFGb0VBQUFBLy9VRDh3QUJBQUFBQUFBQUFBQUFBQUFBQUFBQURBQUJBQUFBQVFBQWxicm03bDhQUFBVQUN3UG9BQUFBQU5mdVdhOEFBQUFBMSs1WnJ3QUFBQUFEOHdQekFBQUFDQUFDQUFBQUFBQUFBQUVBQUFBTUFRSUFBd0FBQUFBQUFnQUFBQW9BQ2dBQUFQOEFBQUFBQUFBQUFRUHFBWkFBQlFBQUFub0N2QUFBQUl3Q2VnSzhBQUFCNEFBeEFRSUFBQUlBQlFNQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFVR1pGWkFCQTRRTGhrQU5TLzJvQVdnUHpBSllBQUFBQkFBQUFBQUFBQkFBQUFBUG9BQUFENkFBQUErZ0FBQVBvQUFBRDZBQUFBK2dBQUFQb0FBQUQ2QUFBQStnQUFBUG9BQUFENkFBQUFBQUFBZ0FBQUFNQUFBQVVBQU1BQVFBQUFCUUFCQUJlQUFBQURnQUlBQUlBQnVFQzRRbmhEK0VTNFJ2aGtQLy9BQURoQXVFSjRRdmhFdUVhNFpELy93QUFBQUFBQUFBQUFBQUFBQUFCQUE0QURnQU9BQllBRmdBWUFBQUFBUUFDQUFZQUJBQURBQWdBQndBS0FBa0FCUUFMQUFBQUFBQUFBQjRBUUFCYUFRWUI1Z0prQW5vQ2pnS3dBOG9FSEFBQUFBSUFBQUFBQStvRGxRQUVBQW9BQUFFRkVTRVJDUUVWQ1FFMUFnY0JadjBtQVhRQjVQNGMvZzRDdy9EK2x3RnBBY1ArczI0QlRmNnFiZ0FBQUFFQUFBQUFBK29ENmdBTEFBQVRDUUVYQ1FFSENRRW5DUUY0QVlnQmlHUCtlQUdJWS81NC9uaGpBWWorZUFQci9uZ0JpR1ArZVA1NFl3R0kvbmhqQVlnQmlBQUFBd0FBQUFBRDZnT2tBQU1BQndBTEFBQTNJUlVoRVNFVklSRWhGU0VWQTliOEtnUFcvQ29EMXZ3cTZJMEI2NHdCNjQwQUFBRUFBQUFBQStvRDRRQ2FBQUFCTXg4YUhRRVBEakVQQWg4YklUOGJOUzhTUHhzQ0FBMGFHaGdNREFzTEN3b0tDZ2tKQ1FnSEJ3WUdCZ1VFQkFNQ0FnRUNBd1VGQmdnSUNRb0xDd3dNRGcwR0FnRUJBZ0lEQkFNSUJpSWRIaDBjSEJvWkZoVVNFQWNGQmdRREF3RUIvQ29CQVFNREJBVUdCdzhTRlJZWUdoc2JIQjBjSHdzSkJRUUVBd0lCQVFNRURnME5EQXNMQ1FrSkJ3WUdCQU1DQVFFQkFnSURCQVFGQlFZR0J3Z0lDQWtKQ2dvS0N3c0xEQXdNR1JvRDRnTUVCd1FGQlFZR0J3Z0lDQWtLQ2dzTERBd05EUTRPRHhBUUVCRVdGeFlXRmhZVkZSUVVFeElSRVJBT0Z4TUxDZ2dJQmdZRkJnUU1EQXdORGc0UUR4RVJFUklKQ1FrS0NRa0pGUlFKQ1FvSkNRZ0pFaEVSRVJBUER3NE5EUXNNQndnRkJnWUlDUWtLREF3T0R3OFJFUk1URXhVVUZoVVdGeFlXRnhFUUVCQVBEZzRORFF3TUN3c0tDZ2tJQ0FnSEJnWUZCUVFFQlFRQUFBQUFBd0FBQUFBRDh3UHpBRUVBWlFERkFBQUJNeDhGRlJFekh3WWRBZzhHSVM4R1BRSS9Cak0xS3dFdkJUMENQd1V6TnpNZkJSMENEd1VyQWk4RlBRSS9CVE1uRHc4ZkZ6OFhMeGNQQmdJK0JRUURBd01DQVQ4RUJBTURBd0lCQVFJREF3TUVCUDdjQkFRREF3TUNBUUVDQXdNREJBUS9Qd1FFQXdNREFnRUJBZ01EQXdRRTBBVUVBd01EQWdFQkFnTURBd1FGZkFVRUF3TURBZ0VCQWdNREF3UUZ2UnNiR1JjV0ZSTVJFQTRMQ1FnRkF3RUJBd1VIQ2dzT0VCRVRGUllYR1JvY0hSNGVIeUFnSVNJaUlTQWdIeDRlSFJzYkdSY1dGUk1SRUE0TENRZ0ZBd0VCQXdVSENnc09FQkVURlJZWEdSc2JIUjRlSHlBZ0lTSWlJU0FnSHg0ZUFxWUJBZ0lEQkFRRS9yTUJBUUVEQXdRRUJHZ0VCQVFEQWdJQkFRRUJBZ0lEQkFRRWFBUUVCQU1EQVFFQjBBRUNBd01EQkFWb0JBUURBd01DQWVVQkFnSUVBd1FFYUFVRUF3TURBZ0VCQWdNREF3UUZhQVFFQXdRQ0FnRWxFUk1WRmhjWkdod2RIaDRmSUNBaElpSWhJQ0FmSGg0ZEd4c1pGeFlWRXhFUURnc0pDQVVEQVFFREJRY0tDdzRRRVJNVkZoY1pHeHNkSGg0ZklDQWhJaUloSUNBZkhoNGRIQm9aRnhZVkV4RVFEZ3NLQndVREFRRURCUWNLQ3c0QUFBSUFBQUFBQTlNRDZRQUxBRThBQUFFT0FRY3VBU2MrQVRjZUFRRUhCZ2NuSmdZUEFRWVdId0VHRkJjSERnRWZBUjRCUHdFV0h3RWVBVHNCTWpZL0FUWTNGeFkyUHdFMkppOEJOalFuTno0Qkx3RXVBUThCSmk4QkxnRXJBU0lHQXBzQlkwdEtZd0lDWTBwTFkvN1dFeTRuZkFrUkJXUUVBd2RxQXdOcUJ3TUVaQVVSQ1h3bkxoTUJEZ25JQ2c0QkV5NG1mUWtSQkdRRkF3aHBBd05wQ0FNRlpBUVNDSDBtTGhNQkRncklDUTRCOVVwakFnSmpTa3BqQWdKakFaV0VGQjR5QkFZSXJnZ1NCbElZTWhoU0JoSUlyZ2dGQXpJZkU0UUpEQXdKaEJRZU1nUUdDSzRJRWdaU0dESVlVZ1lTQ0s0SUJRTXlIeE9FQ1F3TUFBRUFBQUFBQXdFRDZnQUZBQUFKQWljSkFRRWJBZWYrRmhvQnpmNHpBK3YrRmY0Vkh3SE1BYzBBQUFBQUFRQUFBQUFEQVFQcUFBVUFBQUVYQ1FFSEFRTGxIZjR6QWMwYS9oWUQ2eDcrTS80MEh3SHJBQUVBQUFBQUEvTUQ4d0FMQUFBVENRRVhDUUUzQ1FFbkNRRU5BWTcrY21RQmp3R1BaUDV5QVk1ay9uSCtjUU9QL25IK2NXUUJqdjV5WkFHUEFZOWsvbkVCandBQUF3QUFBQUFEOHdQekFFQUFnUUVCQUFBbER3NHJBUzhkUFFFL0RnVVZEdzRCUHc0N0FSOGRCUlVmSFRzQlB4MDlBUzhkS3dFUEhRTDFEUTBPRGc0UER3OFFFQkFRRVJFUkVSVVVGQlFURXhJVEVSRVJFQkFQRHcwT0RBd0xDd2tKQ0FjR0JnUUVBZ0lCQWdJRUF3VUZCZ1lIQndrSUNRb0N5Z0VDQWdRREJRVUdCZ2NIQ1FnSkN2M1FEUTBPRGc0UER3OFFFQkFRRVJFUkVSVVVGQlFURXhJVEVSRVJFQkFQRHcwT0RBd0xDd2tKQ0FjR0JnUUVBZ0w4ZmdJREJRVUhDQWtLQ3d3TkRnOFBFUkVTRXhRVUZSWVdGaGdYR0JrWkdSb2FHUmtaR0JjWUZoWVdGUlFVRXhJUkVROFBEZzBNQ3dvSkNBY0ZCUU1DQWdNRkJRY0lDUW9MREEwT0R3OFJFUklURkJRVkZoWVdHQmNZR1JrWkdob1pHUmtZRnhnV0ZoWVZGQlFURWhFUkR3OE9EUXdMQ2drSUJ3VUZBd0xGQ2drSUNRY0hCZ1lGQlFNRUFnSUJBZ0lFQkFZR0J3Z0pDUXNMREF3T0RROFBFQkFSRVJFVEVoTVRGQlFVRlJFUkVSRVFFQkFRRHc4UERnNE9EUTMxRVJFUkVSQVFFQkFQRHc4T0RnNE5EUUl3Q2drSUNRY0hCZ1lGQlFNRUFnSUJBZ0lFQkFZR0J3Z0pDUXNMREF3T0RROFBFQkFSRVJFVEVoTVRGQlFVRlJvWkdSa1lGeGdXRmhZVkZCUVRFaEVSRHc4T0RRd0xDZ2tJQndVRkF3SUNBd1VGQndnSkNnc01EUTRQRHhFUkVoTVVGQlVXRmhZWUZ4Z1pHUmthR2hrWkdSZ1hHQllXRmhVVUZCTVNFUkVQRHc0TkRBc0tDUWdIQlFVREFnSURCUVVIQ0FrS0N3d05EZzhQRVJFU0V4UVVGUllXRmhnWEdCa1pHUUFBQVFBQUFBQUQ2Z1BxQUVNQUFCTWhIdzhSRHc4aEx3OFJQdzZhQXN3TkRnd01EQXNLQ2dnSUJ3VUZBd0lCQVFJREJRVUhDQWdLQ2dzTURBd09EZjAwRFE0TURBd0xDZ29JQ0FjRkJRTUNBUUVDQXdVRkJ3Z0lDZ29MREF3TURnUHJBUUlEQlFVSENBZ0tDZ3NMREEwTkR2MDBEZzBOREFzTENnb0lDQWNGQlFNQ0FRRUNBd1VGQndnSUNnb0xDd3dORFE0Q3pBNE5EUXdMQ3dvS0NBZ0hCUVVEQWdBQUFCSUEzZ0FCQUFBQUFBQUFBQUVBQUFBQkFBQUFBQUFCQUEwQUFRQUJBQUFBQUFBQ0FBY0FEZ0FCQUFBQUFBQURBQTBBRlFBQkFBQUFBQUFFQUEwQUlnQUJBQUFBQUFBRkFBc0FMd0FCQUFBQUFBQUdBQTBBT2dBQkFBQUFBQUFLQUN3QVJ3QUJBQUFBQUFBTEFCSUFjd0FEQUFFRUNRQUFBQUlBaFFBREFBRUVDUUFCQUJvQWh3QURBQUVFQ1FBQ0FBNEFvUUFEQUFFRUNRQURBQm9BcndBREFBRUVDUUFFQUJvQXlRQURBQUVFQ1FBRkFCWUE0d0FEQUFFRUNRQUdBQm9BK1FBREFBRUVDUUFLQUZnQkV3QURBQUVFQ1FBTEFDUUJheUJsTFdsamIyNXpMVzFsZEhKdlVtVm5kV3hoY21VdGFXTnZibk10YldWMGNtOWxMV2xqYjI1ekxXMWxkSEp2Vm1WeWMybHZiaUF4TGpCbExXbGpiMjV6TFcxbGRISnZSbTl1ZENCblpXNWxjbUYwWldRZ2RYTnBibWNnVTNsdVkyWjFjMmx2YmlCTlpYUnlieUJUZEhWa2FXOTNkM2N1YzNsdVkyWjFjMmx2Ymk1amIyMEFJQUJsQUMwQWFRQmpBRzhBYmdCekFDMEFiUUJsQUhRQWNnQnZBRklBWlFCbkFIVUFiQUJoQUhJQVpRQXRBR2tBWXdCdkFHNEFjd0F0QUcwQVpRQjBBSElBYndCbEFDMEFhUUJqQUc4QWJnQnpBQzBBYlFCbEFIUUFjZ0J2QUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQmxBQzBBYVFCakFHOEFiZ0J6QUMwQWJRQmxBSFFBY2dCdkFFWUFid0J1QUhRQUlBQm5BR1VBYmdCbEFISUFZUUIwQUdVQVpBQWdBSFVBY3dCcEFHNEFad0FnQUZNQWVRQnVBR01BWmdCMUFITUFhUUJ2QUc0QUlBQk5BR1VBZEFCeUFHOEFJQUJUQUhRQWRRQmtBR2tBYndCM0FIY0Fkd0F1QUhNQWVRQnVBR01BWmdCMUFITUFhUUJ2QUc0QUxnQmpBRzhBYlFBQUFBQUNBQUFBQUFBQUFBb0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QkFnRURBUVFCQlFFR0FRY0JDQUVKQVFvQkN3RU1BUTBBQjJodmJXVXRNREVMUTJ4dmMyVXRhV052Ym5NSGJXVnVkUzB3TVFSMWMyVnlCMEpVWDJsdVptOFBVMlYwZEdsdVoxOUJibVJ5YjJsa0RXTm9aWFp5YjI0dGNtbG5hSFFNWTJobGRuSnZiaTFzWldaMENFMVVYME5zWldGeURFMVVYMHAxYm10dFlXbHNjd1J6ZEc5d0FBQT0pIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, {
        dockBar: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dockBar']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @syncfusion/ej2-angular-navigations */
    "./node_modules/@syncfusion/ej2-angular-navigations/__ivy_ngcc__/@syncfusion/ej2-angular-navigations.js");
    /* harmony import */


    var _people_people_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./people/people.module */
    "./src/app/people/people.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts"); // Always include app level routing AFTER any feature/child modules otherwise wildcards etc. will stop the child routes working!


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _people_people_module__WEBPACK_IMPORTED_MODULE_7__["PeopleModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _people_people_module__WEBPACK_IMPORTED_MODULE_7__["PeopleModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _people_people_module__WEBPACK_IMPORTED_MODULE_7__["PeopleModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _syncfusion_ej2_angular_navigations__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ensure-module-loaded-once.guard */
    "./src/app/core/ensure-module-loaded-once.guard.ts");

    var CoreModule = /*#__PURE__*/function (_ensure_module_loaded) {
      _inherits(CoreModule, _ensure_module_loaded);

      var _super = _createSuper(CoreModule);

      // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
      function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        return _super.call(this, parentModule);
      }

      return CoreModule;
    }(_ensure_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"]);

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/ensure-module-loaded-once.guard.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/ensure-module-loaded-once.guard.ts ***!
    \*********************************************************/

  /*! exports provided: EnsureModuleLoadedOnceGuard */

  /***/
  function srcAppCoreEnsureModuleLoadedOnceGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function () {
      return EnsureModuleLoadedOnceGuard;
    });

    var EnsureModuleLoadedOnceGuard = function EnsureModuleLoadedOnceGuard(targetModule) {
      _classCallCheck(this, EnsureModuleLoadedOnceGuard);

      if (targetModule) {
        throw new Error("".concat(targetModule.constructor.name, " has already been loaded. Import this module in the AppModule only."));
      }
    };
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 2,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/guards/people-detail.guard.ts":
  /*!******************************************************!*\
    !*** ./src/app/people/guards/people-detail.guard.ts ***!
    \******************************************************/

  /*! exports provided: PeopleDetailGuard */

  /***/
  function srcAppPeopleGuardsPeopleDetailGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleDetailGuard", function () {
      return PeopleDetailGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PeopleDetailGuard = /*#__PURE__*/function () {
      function PeopleDetailGuard(router) {
        _classCallCheck(this, PeopleDetailGuard);

        this.router = router;
      }

      _createClass(PeopleDetailGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          //let id = +next.url[1].path;  // +next casts to a number, although our ID's are guids
          var id = next.url[1].path.toString();

          if (id === undefined || id === null) {
            alert("Invalid person Id");
            this.router.navigate(['/people']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return PeopleDetailGuard;
    }();

    PeopleDetailGuard.ɵfac = function PeopleDetailGuard_Factory(t) {
      return new (t || PeopleDetailGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    PeopleDetailGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PeopleDetailGuard,
      factory: PeopleDetailGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleDetailGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/people-detail/people-detail.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/people/people-detail/people-detail.component.ts ***!
    \*****************************************************************/

  /*! exports provided: PeopleDetailComponent */

  /***/
  function srcAppPeoplePeopleDetailPeopleDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleDetailComponent", function () {
      return PeopleDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PeopleDetailComponent_p_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.PersonId);
      }
    }

    var PeopleDetailComponent = /*#__PURE__*/function () {
      function PeopleDetailComponent() {
        _classCallCheck(this, PeopleDetailComponent);

        this.PersonId = null;
      }

      _createClass(PeopleDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PeopleDetailComponent;
    }();

    PeopleDetailComponent.ɵfac = function PeopleDetailComponent_Factory(t) {
      return new (t || PeopleDetailComponent)();
    };

    PeopleDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeopleDetailComponent,
      selectors: [["app-people-detail"]],
      decls: 3,
      vars: 1,
      consts: [[4, "ngIf"]],
      template: function PeopleDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "people-detail works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeopleDetailComponent_p_2_Template, 2, 1, "p", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PersonId != null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUtZGV0YWlsL3Blb3BsZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-people-detail',
          templateUrl: './people-detail.component.html',
          styleUrls: ['./people-detail.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/people.component.ts":
  /*!********************************************!*\
    !*** ./src/app/people/people.component.ts ***!
    \********************************************/

  /*! exports provided: PeopleComponent */

  /***/
  function srcAppPeoplePeopleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleComponent", function () {
      return PeopleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_people_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/people.service */
    "./src/app/people/services/people.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_testpipe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/testpipe.pipe */
    "./src/app/shared/testpipe.pipe.ts");

    function PeopleComponent_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.ErrorMsg);
      }
    }

    function PeopleComponent_p_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Lording...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return ["/people", a1];
    };

    function PeopleComponent_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleComponent_tr_7_Template_td_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var person_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onPersonSelect(person_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var person_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, person_r3.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](person_r3.name);
      }
    }

    var PeopleComponent = /*#__PURE__*/function () {
      function PeopleComponent(peopleService) {
        _classCallCheck(this, PeopleComponent);

        this.peopleService = peopleService;
        this.loadingFlag = true; // Just testing a custom pipe.. so the PIPE is imported/exported via the shared module
        // and not directly into say this component - meaning it is shared for any feature modules
        // Check the component HTML and the PIPE itself under the shared folder  

        this.PeopleTitle = 'Hello this is the People Component';
      }

      _createClass(PeopleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.peopleService.getPeople().subscribe({
            next: function next(result) {
              if (result.success) {
                _this.ErrorMsg = null;
                _this.listOfPeople = result.entities;
                _this.loadingFlag = false;
              } else {
                _this.ErrorMsg = result.errorMessage;
              }
            },
            error: function error(err) {
              return _this.ErrorMsg = err;
            }
          });
        }
      }, {
        key: "onPersonSelect",
        value: function onPersonSelect(person) {
          alert(person.name);
        }
      }]);

      return PeopleComponent;
    }();

    PeopleComponent.ɵfac = function PeopleComponent_Factory(t) {
      return new (t || PeopleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]));
    };

    PeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PeopleComponent,
      selectors: [["app-people"]],
      decls: 8,
      vars: 7,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "routerLink"]],
      template: function PeopleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "testpipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PeopleComponent_p_3_Template, 2, 1, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PeopleComponent_p_4_Template, 2, 0, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PeopleComponent_tr_7_Template, 4, 4, "tr", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, ctx.PeopleTitle, "this"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ErrorMsg != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadingFlag == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfPeople);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_shared_testpipe_pipe__WEBPACK_IMPORTED_MODULE_4__["TestpipePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-people',
          templateUrl: './people.component.html',
          styleUrls: ['./people.component.css']
        }]
      }], function () {
        return [{
          type: _services_people_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/people.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/people/people.module.ts ***!
    \*****************************************/

  /*! exports provided: PeopleModule */

  /***/
  function srcAppPeoplePeopleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleModule", function () {
      return PeopleModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _people_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./people.component */
    "./src/app/people/people.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./people-detail/people-detail.component */
    "./src/app/people/people-detail/people-detail.component.ts");
    /* harmony import */


    var _guards_people_detail_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./guards/people-detail.guard */
    "./src/app/people/guards/people-detail.guard.ts");

    var PeopleModule = function PeopleModule() {
      _classCallCheck(this, PeopleModule);
    };

    PeopleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PeopleModule
    });
    PeopleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PeopleModule_Factory(t) {
        return new (t || PeopleModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: 'people',
        component: _people_component__WEBPACK_IMPORTED_MODULE_1__["PeopleComponent"]
      }, {
        path: 'people/:id',
        canActivate: [_guards_people_detail_guard__WEBPACK_IMPORTED_MODULE_5__["PeopleDetailGuard"]],
        component: _people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_4__["PeopleDetailComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PeopleModule, {
        declarations: [_people_component__WEBPACK_IMPORTED_MODULE_1__["PeopleComponent"], _people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_4__["PeopleDetailComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_people_component__WEBPACK_IMPORTED_MODULE_1__["PeopleComponent"], _people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_4__["PeopleDetailComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: 'people',
            component: _people_component__WEBPACK_IMPORTED_MODULE_1__["PeopleComponent"]
          }, {
            path: 'people/:id',
            canActivate: [_guards_people_detail_guard__WEBPACK_IMPORTED_MODULE_5__["PeopleDetailGuard"]],
            component: _people_detail_people_detail_component__WEBPACK_IMPORTED_MODULE_4__["PeopleDetailComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/people/services/people.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/people/services/people.service.ts ***!
    \***************************************************/

  /*! exports provided: PeopleService */

  /***/
  function srcAppPeopleServicesPeopleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeopleService", function () {
      return PeopleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PeopleService = /*#__PURE__*/function () {
      function PeopleService(http) {
        _classCallCheck(this, PeopleService);

        this.http = http;
        this.ApiKey = "?code=Lj5UbnVZ1UosNGofQy4VBdR0Xn0JpUPB/1ln10c7CXEzQhcX3fVybQ==";
        this.ApiURL = "https://azurefunctionsadventure.azurewebsites.net/api/person";
      }

      _createClass(PeopleService, [{
        key: "getPeople",
        value: function getPeople() {
          var ApiToCall = this.ApiURL + this.ApiKey;
          return this.http.get(ApiToCall).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (data) {
            return console.log('All People: ', data);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          // in a real world app, we may send the server to some remote logging infrastructure
          // instead of just logging it to the console
          var errorMessage = '';

          if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = "An error occurred: ".concat(err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = "Server returned code: ".concat(err.status, ", error message is: ").concat(err.message);
          }

          console.error(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
        }
      }]);

      return PeopleService;
    }();

    PeopleService.ɵfac = function PeopleService_Factory(t) {
      return new (t || PeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PeopleService,
      factory: PeopleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _testpipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./testpipe.pipe */
    "./src/app/shared/testpipe.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_testpipe_pipe__WEBPACK_IMPORTED_MODULE_3__["TestpipePipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], // This is where we can include a shared component across many feature modules
        _testpipe_pipe__WEBPACK_IMPORTED_MODULE_3__["TestpipePipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_testpipe_pipe__WEBPACK_IMPORTED_MODULE_3__["TestpipePipe"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], // This is where we can include a shared component across many feature modules
          _testpipe_pipe__WEBPACK_IMPORTED_MODULE_3__["TestpipePipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/testpipe.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/testpipe.pipe.ts ***!
    \*****************************************/

  /*! exports provided: TestpipePipe */

  /***/
  function srcAppSharedTestpipePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestpipePipe", function () {
      return TestpipePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestpipePipe = /*#__PURE__*/function () {
      function TestpipePipe() {
        _classCallCheck(this, TestpipePipe);
      }

      _createClass(TestpipePipe, [{
        key: "transform",
        value: function transform(value, replaceString) {
          return value.replace(replaceString, '-howdy-');
        }
      }]);

      return TestpipePipe;
    }();

    TestpipePipe.ɵfac = function TestpipePipe_Factory(t) {
      return new (t || TestpipePipe)();
    };

    TestpipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "testpipe",
      type: TestpipePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestpipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'testpipe'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Source\AzureFunctionsAngular\AzureFunctionsAngular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map