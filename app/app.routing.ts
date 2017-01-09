import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AccueilComponent} from './components/accueil/accueil.component';
import {DatalogueComponent} from './components/datalogue/datalogue.component';
import {FaqComponent} from './components/faq/faq.component';
import {PretComponent} from './components/pret/pret.component';

const appRoutes: Routes =
[
	{
		path:'',
		component:AccueilComponent
	},
	{
		path:'datalogue',
		component:DatalogueComponent
	},
	{
		path:'faq',
		component:FaqComponent
	},
	{
		path:'pret',
		component:PretComponent
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);