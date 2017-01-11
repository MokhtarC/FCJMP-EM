import { Component, OnInit } from '@angular/core';

import {SimpleTinyMCEComponent} from '../simpletinymce/simpletinymce.component';

import {Oj} from '../../data/Oj';
import {Institution} from '../../data/Institution';
import {Coordonnees} from '../../data/Coordonnees';
import {institutionnelle} from '../../data/Institutionnelle';
import {Action} from '../../data/Action';
import {MaterielUtile} from '../../data/MaterielUtile';
import {Personnel} from '../../data/Personnel';
import {Production} from '../../data/Production';

@Component({
  moduleId: module.id,
  selector: 'datalogue',
  templateUrl: `datalogue.component.html`
})
export class DatalogueComponent
{
	private appState: string;
	private dataState: string;
	private institutionState: string;
	private equipeState: string;
	private actionsState: string;
	private matutState: string;

	hideInstitution = false;
	hideEquipe = true;

	institutionStyle:any = 
	{
		display:"inline"
	}

	equipeStyle:any =
	{
		display:"none"
	}


	addojbtn:boolean = true;
	addEqBtn:boolean = true;


	actTempBtn:boolean = false;

	listeOj: Oj[] = null;
	ojActive: Oj = null;
	institution: Institution = null;
	employeActif: Personnel = null;
	equipe: Personnel[] = null;
	actions: Action[] = null;
	actionActive: Action = null;
	materielUtile: MaterielUtile[] = null;
	materielActif: MaterielUtile = null;
	productions: Production[] = null;
	productionActive: Production = null;
	documents: Document[] = null;
	documentActif: Document = null;
	environnement: Institution[] = null;
	liaisonActive: Institution = null;



	constructor()
	{
		this.appState = 'datalogue';
		this.dataState = 'matut';
		this.institutionState = 'default';
		this.equipeState = 'default';
		this.actionsState = 'default';
		this.matutState = 'default';

		this.listeOj = [];
		this.equipe = [];
		this.actions = [];
		this.materielUtile = [];

		//bouton


		// MAINT
		
		this.setDataDefault();

	}


	changeState(state:string)
	{
		this.appState = state;
	}
	changeDataState(data:string)
	{
		this.dataState = data;
	}

	changeEquipeState(state:string)
	{
		this.equipeState = state;
	}

	changeActionsState(state:string)
	{
		this.actionsState = state;
	}

	changeMatUtState(state: string)
	{
		this.matutState = state;
	}

	// SET
	setListeOj(listoj: Oj[])
	{
		this.listeOj = listoj;
	}
	
	setActiveOj(oj:Oj)
	{
		this.ojActive = oj;
		this.btnSetData();
		this.changeState('datalogue');
	}

	setInstitution(institution:Institution)
	{
		this.institution = institution;
	}

	setEquipe(equipe: Personnel[])
	{
		for(var i=0;i<equipe.length;i++)
		{
			if(equipe[i].coordo)
			{
				this.employeActif = equipe[i];
			}
		}

		this.equipe = equipe;
	}

	setEmployeActif(personne:Personnel)
	{
		this.employeActif = personne;
	}

	setActions(actions: Action[])
	{
		this.actions = actions;
	}

	setActionActive(action: Action)
	{
		this.actionActive = action;
	}

	setMaterielUtile(matut: MaterielUtile[])
	{
		this.materielUtile = matut;
	}

	setMaterielActif(matut: MaterielUtile)
	{
		this.materielActif = matut;
	}

	// UPDATE

	updEquipe()
	{
		this.changeEquipeState('show');
	}

	updAction()
	{
		this.changeActionsState('show');
	}

	updMateriel()
	{
		this.changeMatUtState('show');
	}

	// ADD
	addOj(nomoj:string)
	{
		var newOj:Oj = 
		{
			nom:nomoj
		}; 

		this.listeOj.push(newOj);

		this.btnAddOj();
	}

	addEq(sexe: string,
		pnom: string,
		nom: string,
		tel: string,
		email: string,
		role: string,
		engagele: string,
		qualif: string,
		datequalif: string,
		contrat: string,
		etp: string)
	{
		console.log('entered');
		this.employeActif = 
		{
			nomoj: '',
			pnom: '',
			nom: '',
			engagele: '',
			email:'',
			tel:'',
			qualif:'',
			sexe:'',
			role:'',
			specificite:[],
			contrat:'',
			etp:'',
			coordo: false,
			photo: '',
			datequalif:''
		};
		console.log(this.employeActif);

		var newEq:Personnel =
		{
			nomoj:this.ojActive.$key,
			sexe:sexe,
			pnom:pnom,
			nom:nom,
			tel:tel,
			email:email,
			role:role,
			engagele:engagele,
			qualif:qualif,
			datequalif:datequalif,
			contrat:contrat,
			etp:etp,
			coordo: false,
			photo: ''
		};

		console.log(newEq);

		var l = this.equipe.length;
		this.equipe.push(newEq);
		this.employeActif = this.equipe[l];
		this.changeEquipeState('show');
	}
	//, annee:string, theme:string, pubcib:string, freq:string, duree:string, temporaire:boolean, du:string, au:string
	addAction(titre:string, type:string, annee:string, theme:string, pubcib:string, freq:string, duree:string,temporaire:string, du:string='', au:string='')	
	{
		this.setActionActive({
			$key: '',
			nomoj: '',
			annee: '',
			titre: '',
			theme: '',
			pubcib: '',
			type: '',
			freq: '',
			desc: '',
			duree: '',
			du: '',
			au: '',
			temporaire: false,
			dernieremodifpar: ''
		});

		this.actionActive.$key = '32';
		this.actionActive.nomoj = this.ojActive.$key;
		this.actionActive.titre = titre;
		this.actionActive.type = type;
		this.actionActive.annee = annee;
		this.actionActive.theme = theme;
		this.actionActive.pubcib = pubcib;
		this.actionActive.freq = freq;
		this.actionActive.duree = duree;
		this.actionActive.du = du;
		this.actionActive.au = au;

		var l = this.actions.length;
		this.actions.push(this.actionActive);
		this.actionActive = this.actions[l];

		this.changeActionsState('show');
	}

	addMaterielUtile(titre:string, categorie:string, type:string, loca:string, photo:string, remarque:string)
	{

		this.setMaterielActif(
		{
			$key: '',
			nomoj: '',
			titre: '',
			categorie: '',
			type: '',
			loca: '',
			photo: '',
			remarque: ''
		});

		this.materielActif.$key = '23';
		this.materielActif.nomoj = this.ojActive.$key;
		this.materielActif.titre = titre;
		this.materielActif.categorie = categorie;
		this.materielActif.type = type;
		this.materielActif.loca = loca;
		this.materielActif.photo = photo;
		this.materielActif.remarque = remarque;

		var l = this.materielUtile.length;
		this.materielUtile.push(this.materielActif);
		this.materielActif = this.materielUtile[l];

		this.changeMatUtState('show');
	}


	// DELETE
	deleteOj(oj:Oj)
	{
		var newlisteOj:Oj[] = [];

		for(var i=0;i<this.listeOj.length;i++)
		{
			if(this.listeOj[i].nom!=oj.nom)
			{
				newlisteOj.push(this.listeOj[i]);
			}
		}

		this.listeOj = newlisteOj;
	}

	deletePersonne(personne:Personnel)
	{
		var newEquipe:Personnel[] = [];
		var hit = false;

		for(var i=0;i<this.equipe.length;i++)
		{
			if(this.equipe[i].nom==personne.nom)
			{
				if(this.employeActif.$key==personne.$key)
				{
					hit=true;
				}
			}else
			{
				newEquipe.push(this.equipe[i]);
			}
		}

		this.equipe = newEquipe;
		if(hit) this.changeEquipeState('default');
	}

	deleteAction(action:Action)
	{
		var newActions:Action[] = [];
		var hit = false;

		for(var i=0;i<this.actions.length;i++)
		{
			if(this.actions[i].$key == action.$key)
			{
				if(this.actionActive.$key == action.$key)
				{
					hit=true;
				}
			}else
			{
				newActions.push(this.actions[i]);
			}
		}

		this.actions = newActions;
		if(hit) this.changeActionsState('default'); 
	}

	deleteMatUt(matut: MaterielUtile)
	{
		var newMatuts: MaterielUtile[] = [];
		var hit = false;

		for(var i=0;i<this.materielUtile.length;i++)
		{
			if(this.materielUtile[i].$key == matut.$key)
			{
				if(this.materielActif.$key == matut.$key)
				{
					hit=true;
				}
			} else
			{
				newMatuts.push(this.materielUtile[i]);
			}
		}

		this.materielUtile = newMatuts;
		if(hit) this.changeMatUtState('default');
	}

	/*
		Boutons
	*/
	btnAddOj()
	{
		this.addojbtn = !this.addojbtn;
	}

	btnAddEq()
	{
		this.setEmployeActif(
			{
			nomoj: '',
			pnom: '',
			nom: '',
			engagele: '',
			email:'',
			tel:'',
			qualif:'',
			sexe:'',
			role:'',
			specificite:[],
			contrat:'',
			etp:'',
			coordo: true,
			photo: '',
			datequalif:''
		});
		this.changeEquipeState('new');
	}
	btnEditEmploye()
	{
		this.changeEquipeState('edit');
	}

	btnSelectEmploye(employe: Personnel)
	{
		this.employeActif= employe;

		this.changeEquipeState('show');
	}

	btnActTemp()
	{
		this.actTempBtn = !this.actTempBtn;
	}

	btnAddAction()
	{
		this.setActionActive({
			$key: '',
			nomoj: '',
			annee: '',
			titre: '',
			theme: '',
			pubcib: '',
			type: '',
			freq: '',
			desc: '',
			duree: '',
			du: '',
			au: '',
			temporaire: false,
			dernieremodifpar: ''
		});
		this.changeActionsState('new');
	}

	btnEditAction()
	{
		this.changeActionsState('edit');
	}

	btnSelectAction(action: Action)
	{
		this.actionActive= action;

		this.changeActionsState('show');
	}


	btnAddMatUt()
	{
		this.setMaterielActif(
		{
			$key: '',
			nomoj: '',
			photo: '',
			titre: '',
			categorie: '',
			type: '',
			loca: '',
			remarque: ''
		});
		this.changeMatUtState('new');
	}

	btnEditMatut()
	{
		this.changeMatUtState('edit');
	}

	btnSelectMatUt(matut: MaterielUtile)
	{
		this.materielActif = matut;
		this.changeMatUtState('show');
	}

	// maintenance
	reset()
	{
		this.listeOj = null;
		this.ojActive = null;
		this.institution = null;
		this.equipe = null;
		this.appState = 'listoj';
	}
	btnSetData()
	{
		var institution: Institution =
		{
			nomoj: 'Club de Jeunesse',
				type: 'Maison des Jeunes',
				membre:'10-20',
				fondee:'21/04/1989',
				agrement: '21/09/2004',
				iban:23564812548963,
				nivagr:'3',
				nument: 125365987,
				spec: 'milieu populaire',
				dispositif: 'égalité des chances',
				description: 'Maison de jeunes en milieu populaire',
				logo: 'http://www.guidesocial.be/_images/assoc/350x350/139333809200.jpg',
				cat: 'Membre'
		}

		this.setInstitution(institution);
		this.setEquipe(
		[{
			nomoj: 'Club de Jeunesse',
			pnom: 'Jeanne',
			nom: 'Seaux',
			engagele: '16/05/2013',
			email:'jeanne@marholles.be',
			tel:'0478/542123',
			qualif:'2015',
			sexe:'Femme',
			role:'Coordinateur responsable',
			specificite:['PLAC','CRAC'],
			contrat:'ACS',
			etp:'Temps plein',
			coordo: true,
			photo: 'http://www.cheixenretz.fr/files/animatrice_mj.jpg',
			datequalif:''
		},
		{
			nomoj: 'Club de Jeunesse',
			pnom: 'John',
			nom: 'Doe',
			engagele: '16/10/2016',
			email:'animateur@marolles.be',
			tel:'0476/459823',
			qualif:'2015',
			sexe:'Homme',
			role:'animateur',
			specificite:['CRAC','PLAC'],
			contrat:'ACS',
			etp: 'mi-temps',
			coordo: false,
			photo : 'http://jeunes-mediascitoyen.cemea.asso.fr/wp-content/uploads/2016/07/Mathias.jpg',
			datequalif:''
		},
		{
			nomoj: 'Club de Jeunesse',
			pnom: 'John2',
			nom: 'Doe2',
			engagele: '16/10/2016',
			email:'animateur@marolles.be2',
			tel:'0476/4598232',
			qualif:'20152',
			sexe:'Homme2',
			role:'animateur2',
			specificite:['CRAC','PLAC'],
			contrat:'ACS2',
			etp: 'mi-temps2',
			coordo: false,
			photo : 'http://jeunes-mediascitoyen.cemea.asso.fr/wp-content/uploads/2016/07/Mathias.jpg',
			datequalif:''
		}]);

		this.setActions([{
			$key: '1',
			nomoj: '1',
			annee: '2008',
			titre: 'danse',
			theme: 'folcklore',
			pubcib: 'jeunes',
			type: 'ActionOuverte',
			freq: '2 fois par semaine',
			desc: 'de la danse',
			duree: '1h',
			du: '',
			au: '',
			temporaire: false,
			dernieremodifpar: ''
		},
		{
			$key: '2',
			nomoj: '1',
			annee: '2015',
			titre: 'foot',
			theme: 'sport',
			pubcib: '18-20',
			type: 'ActionSocioculturelle',
			freq: '1 fois par semaine',
			desc: 'du foot',
			duree: '2h',
			du: '19/05/2015',
			au: '19/06/2015',
			temporaire: true,
			dernieremodifpar: ''
		}]);
	}

	setDataDefault()
	{
		this.setListeOj([{
			$key:'1',
			nom:'Club de Jeunesse'
		},
		{
			$key:'2',
			nom:'le 88'
		}]);
		this.ojActive = this.listeOj[0];
		this.setInstitution({
			nomoj: 'Club de Jeunesse',
				type: '',
				membre:'',
				fondee:'',
				agrement: '',
				iban: 0,
				nivagr:'',
				nument: 0,
				spec: '',
				dispositif: '',
				description: '',
				logo: '',
				cat: ''
		});
		this.setEquipe(
		[]);
		this.setActionActive({
			$key: '',
			nomoj: '',
			annee: '',
			titre: '',
			theme: '',
			pubcib: '',
			type: '',
			freq: '',
			desc: '',
			duree: '',
			du: '',
			au: '',
			temporaire: false,
			dernieremodifpar: ''
		});

		this.setMaterielActif(
		{
			$key: '',
			nomoj: '',
			titre: '',
			categorie: '',
			type: '',
			loca: '',
			photo: '',
			remarque: ''
		})
	}

}