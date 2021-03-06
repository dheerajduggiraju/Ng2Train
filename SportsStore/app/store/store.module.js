"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const model_module_1 = require("../model/model.module");
const store_component_1 = require("./store.component");
const counter_directive_1 = require("./counter.directive");
const cartSummary_component_1 = require("./cartSummary.component");
const checkout_component_1 = require("./checkout.component");
const cartDetail_component_1 = require("./cartDetail.component");
const router_1 = require("@angular/router");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, model_module_1.ModelModule, router_1.RouterModule],
        exports: [store_component_1.StoreComponent, cartDetail_component_1.CartDetailComponent, checkout_component_1.CheckoutComponent],
        declarations: [store_component_1.StoreComponent, counter_directive_1.CounterDirective, cartSummary_component_1.CartSummaryComponent, checkout_component_1.CheckoutComponent, cartDetail_component_1.CartDetailComponent],
        providers: [],
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map