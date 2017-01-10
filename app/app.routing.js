"use strict";
var router_1 = require("@angular/router");
var accueil_component_1 = require("./components/accueil/accueil.component");
var datalogue_component_1 = require("./components/datalogue/datalogue.component");
var faq_component_1 = require("./components/faq/faq.component");
var pret_component_1 = require("./components/pret/pret.component");
var appRoutes = [
    {
        path: '',
        component: accueil_component_1.AccueilComponent
    },
    {
        path: 'datalogue',
        component: datalogue_component_1.DatalogueComponent
    },
    {
        path: 'faq',
        component: faq_component_1.FaqComponent
    },
    {
        path: 'pret',
        component: pret_component_1.PretComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map