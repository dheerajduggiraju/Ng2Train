var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { RestDataSource } from "./rest.datasource";
let ProductRepository = class ProductRepository {
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }
    getProducts(category = null) {
        return this.products.filter(p => category == null || category == p.category);
    }
    getProduct(id) {
        return this.products.find(p => p.id == id);
    }
    getCategories() {
        return this.categories;
    }
    saveProduct(product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                .subscribe(p => this.products.push(p));
        }
        else {
            this.dataSource.updateProduct(product)
                .subscribe(p => {
                this.products.splice(this.products.
                    findIndex(p => p.id == product.id), 1, product);
            });
        }
    }
    deleteProduct(id) {
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products.
                findIndex(p => p.id == id), 1);
        });
    }
};
ProductRepository = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [RestDataSource])
], ProductRepository);
export { ProductRepository };
//# sourceMappingURL=product.repository.js.map