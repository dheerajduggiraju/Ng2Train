"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const store_module_1 = require("./store/store.module");
const app_component_1 = require("./app.component");
const router_1 = require("@angular/router");
const store_component_1 = require("./store/store.component");
const checkout_component_1 = require("./store/checkout.component");
const cartDetail_component_1 = require("./store/cartDetail.component");
const storeFirst_gaurd_1 = require("./storeFirst.gaurd");
//import { AppRoutingModule } from './app.routing'; //TODO: Create app.routing
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, store_module_1.StoreModule,
            router_1.RouterModule.forRoot([
                {
                    path: "store", component: store_component_1.StoreComponent,
                    canActivate: [storeFirst_gaurd_1.StoreFirstGuard]
                },
                {
                    path: "cart", component: cartDetail_component_1.CartDetailComponent,
                    canActivate: [storeFirst_gaurd_1.StoreFirstGuard]
                },
                {
                    path: "checkout", component: checkout_component_1.CheckoutComponent,
                    canActivate: [storeFirst_gaurd_1.StoreFirstGuard]
                },
                {
                    path: "admin",
                    loadChildren: "app/admin/admin.module#AdminModule",
                    canActivate: [storeFirst_gaurd_1.StoreFirstGuard]
                },
                { path: "**", redirectTo: "/store" }
            ])],
        declarations: [app_component_1.AppComponent],
        providers: [storeFirst_gaurd_1.StoreFirstGuard],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map