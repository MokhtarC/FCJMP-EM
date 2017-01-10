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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var simpletinymce_component_1 = require("./components/simpletinymce/simpletinymce.component");
var editor_component_1 = require("./components/editor/editor.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var accueil_component_1 = require("./components/accueil/accueil.component");
var datalogue_component_1 = require("./components/datalogue/datalogue.component");
var faq_component_1 = require("./components/faq/faq.component");
var pret_component_1 = require("./components/pret/pret.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, accueil_component_1.AccueilComponent, datalogue_component_1.DatalogueComponent, faq_component_1.FaqComponent, pret_component_1.PretComponent, simpletinymce_component_1.SimpleTinyMCEComponent, editor_component_1.EditorComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map