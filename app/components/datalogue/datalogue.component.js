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
var core_1 = require('@angular/core');
var DatalogueComponent = (function () {
    function DatalogueComponent() {
        this.hideInstitution = false;
        this.hideEquipe = true;
        this.institutionStyle = {
            display: "inline"
        };
        this.equipeStyle = {
            display: "none"
        };
        this.addojbtn = true;
        this.addEqBtn = true;
        this.actTempBtn = false;
        this.listeOj = null;
        this.ojActive = null;
        this.institution = null;
        this.employeActif = null;
        this.equipe = null;
        this.actions = null;
        this.actionActive = null;
        this.materielUtile = null;
        this.materielActif = null;
        this.productions = null;
        this.productionActive = null;
        this.documents = null;
        this.documentActif = null;
        this.environnement = null;
        this.liaisonActive = null;
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
    DatalogueComponent.prototype.changeState = function (state) {
        this.appState = state;
    };
    DatalogueComponent.prototype.changeDataState = function (data) {
        this.dataState = data;
    };
    DatalogueComponent.prototype.changeEquipeState = function (state) {
        this.equipeState = state;
    };
    DatalogueComponent.prototype.changeActionsState = function (state) {
        this.actionsState = state;
    };
    DatalogueComponent.prototype.changeMatUtState = function (state) {
        this.matutState = state;
    };
    // SET
    DatalogueComponent.prototype.setListeOj = function (listoj) {
        this.listeOj = listoj;
    };
    DatalogueComponent.prototype.setActiveOj = function (oj) {
        this.ojActive = oj;
        this.btnSetData();
        this.changeState('datalogue');
    };
    DatalogueComponent.prototype.setInstitution = function (institution) {
        this.institution = institution;
    };
    DatalogueComponent.prototype.setEquipe = function (equipe) {
        for (var i = 0; i < equipe.length; i++) {
            if (equipe[i].coordo) {
                this.employeActif = equipe[i];
            }
        }
        this.equipe = equipe;
    };
    DatalogueComponent.prototype.setEmployeActif = function (personne) {
        this.employeActif = personne;
    };
    DatalogueComponent.prototype.setActions = function (actions) {
        this.actions = actions;
    };
    DatalogueComponent.prototype.setActionActive = function (action) {
        this.actionActive = action;
    };
    DatalogueComponent.prototype.setMaterielUtile = function (matut) {
        this.materielUtile = matut;
    };
    DatalogueComponent.prototype.setMaterielActif = function (matut) {
        this.materielActif = matut;
    };
    // UPDATE
    DatalogueComponent.prototype.updEquipe = function () {
        this.changeEquipeState('show');
    };
    DatalogueComponent.prototype.updAction = function () {
        this.changeActionsState('show');
    };
    DatalogueComponent.prototype.updMateriel = function () {
        this.changeMatUtState('show');
    };
    // ADD
    DatalogueComponent.prototype.addOj = function (nomoj) {
        var newOj = {
            nom: nomoj
        };
        this.listeOj.push(newOj);
        this.btnAddOj();
    };
    DatalogueComponent.prototype.addEq = function (sexe, pnom, nom, tel, email, role, engagele, qualif, datequalif, contrat, etp) {
        console.log('entered');
        this.employeActif =
            {
                nomoj: '',
                pnom: '',
                nom: '',
                engagele: '',
                email: '',
                tel: '',
                qualif: '',
                sexe: '',
                role: '',
                specificite: [],
                contrat: '',
                etp: '',
                coordo: false,
                photo: '',
                datequalif: ''
            };
        console.log(this.employeActif);
        var newEq = {
            nomoj: this.ojActive.$key,
            sexe: sexe,
            pnom: pnom,
            nom: nom,
            tel: tel,
            email: email,
            role: role,
            engagele: engagele,
            qualif: qualif,
            datequalif: datequalif,
            contrat: contrat,
            etp: etp,
            coordo: false,
            photo: ''
        };
        console.log(newEq);
        var l = this.equipe.length;
        this.equipe.push(newEq);
        this.employeActif = this.equipe[l];
        this.changeEquipeState('show');
    };
    //, annee:string, theme:string, pubcib:string, freq:string, duree:string, temporaire:boolean, du:string, au:string
    DatalogueComponent.prototype.addAction = function (titre, type, annee, theme, pubcib, freq, duree, temporaire, du, au) {
        if (du === void 0) { du = ''; }
        if (au === void 0) { au = ''; }
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
    };
    DatalogueComponent.prototype.addMaterielUtile = function (titre, categorie, type, loca, photo, remarque) {
        this.setMaterielActif({
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
    };
    // DELETE
    DatalogueComponent.prototype.deleteOj = function (oj) {
        var newlisteOj = [];
        for (var i = 0; i < this.listeOj.length; i++) {
            if (this.listeOj[i].nom != oj.nom) {
                newlisteOj.push(this.listeOj[i]);
            }
        }
        this.listeOj = newlisteOj;
    };
    DatalogueComponent.prototype.deletePersonne = function (personne) {
        var newEquipe = [];
        var hit = false;
        for (var i = 0; i < this.equipe.length; i++) {
            if (this.equipe[i].nom == personne.nom) {
                if (this.employeActif.$key == personne.$key) {
                    hit = true;
                }
            }
            else {
                newEquipe.push(this.equipe[i]);
            }
        }
        this.equipe = newEquipe;
        if (hit)
            this.changeEquipeState('default');
    };
    DatalogueComponent.prototype.deleteAction = function (action) {
        var newActions = [];
        var hit = false;
        for (var i = 0; i < this.actions.length; i++) {
            if (this.actions[i].$key == action.$key) {
                if (this.actionActive.$key == action.$key) {
                    hit = true;
                }
            }
            else {
                newActions.push(this.actions[i]);
            }
        }
        this.actions = newActions;
        if (hit)
            this.changeActionsState('default');
    };
    DatalogueComponent.prototype.deleteMatUt = function (matut) {
        var newMatuts = [];
        var hit = false;
        for (var i = 0; i < this.materielUtile.length; i++) {
            if (this.materielUtile[i].$key == matut.$key) {
                if (this.materielActif.$key == matut.$key) {
                    hit = true;
                }
            }
            else {
                newMatuts.push(this.materielUtile[i]);
            }
        }
        this.materielUtile = newMatuts;
        if (hit)
            this.changeMatUtState('default');
    };
    /*
        Boutons
    */
    DatalogueComponent.prototype.btnAddOj = function () {
        this.addojbtn = !this.addojbtn;
    };
    DatalogueComponent.prototype.btnAddEq = function () {
        this.setEmployeActif({
            nomoj: '',
            pnom: '',
            nom: '',
            engagele: '',
            email: '',
            tel: '',
            qualif: '',
            sexe: '',
            role: '',
            specificite: [],
            contrat: '',
            etp: '',
            coordo: true,
            photo: '',
            datequalif: ''
        });
        this.changeEquipeState('new');
    };
    DatalogueComponent.prototype.btnEditEmploye = function () {
        this.changeEquipeState('edit');
    };
    DatalogueComponent.prototype.btnSelectEmploye = function (employe) {
        this.employeActif = employe;
        this.changeEquipeState('show');
    };
    DatalogueComponent.prototype.btnActTemp = function () {
        this.actTempBtn = !this.actTempBtn;
    };
    DatalogueComponent.prototype.btnAddAction = function () {
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
    };
    DatalogueComponent.prototype.btnEditAction = function () {
        this.changeActionsState('edit');
    };
    DatalogueComponent.prototype.btnSelectAction = function (action) {
        this.actionActive = action;
        this.changeActionsState('show');
    };
    DatalogueComponent.prototype.btnAddMatUt = function () {
        this.setMaterielActif({
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
    };
    DatalogueComponent.prototype.btnEditMatut = function () {
        this.changeMatUtState('edit');
    };
    DatalogueComponent.prototype.btnSelectMatUt = function (matut) {
        this.materielActif = matut;
        this.changeMatUtState('show');
    };
    // maintenance
    DatalogueComponent.prototype.reset = function () {
        this.listeOj = null;
        this.ojActive = null;
        this.institution = null;
        this.equipe = null;
        this.appState = 'listoj';
    };
    DatalogueComponent.prototype.btnSetData = function () {
        var institution = {
            nomoj: 'Club de Jeunesse',
            type: 'Maison des Jeunes',
            membre: '10-20',
            fondee: '21/04/1989',
            agrement: '21/09/2004',
            iban: 23564812548963,
            nivagr: '3',
            nument: 125365987,
            spec: 'milieu populaire',
            dispositif: 'égalité des chances',
            description: 'Maison de jeunes en milieu populaire',
            logo: 'http://www.guidesocial.be/_images/assoc/350x350/139333809200.jpg',
            cat: 'Membre'
        };
        this.setInstitution(institution);
        this.setEquipe([{
                nomoj: 'Club de Jeunesse',
                pnom: 'Jeanne',
                nom: 'Seaux',
                engagele: '16/05/2013',
                email: 'jeanne@marholles.be',
                tel: '0478/542123',
                qualif: '2015',
                sexe: 'Femme',
                role: 'Coordinateur responsable',
                specificite: ['PLAC', 'CRAC'],
                contrat: 'ACS',
                etp: 'Temps plein',
                coordo: true,
                photo: 'http://www.cheixenretz.fr/files/animatrice_mj.jpg',
                datequalif: ''
            },
            {
                nomoj: 'Club de Jeunesse',
                pnom: 'John',
                nom: 'Doe',
                engagele: '16/10/2016',
                email: 'animateur@marolles.be',
                tel: '0476/459823',
                qualif: '2015',
                sexe: 'Homme',
                role: 'animateur',
                specificite: ['CRAC', 'PLAC'],
                contrat: 'ACS',
                etp: 'mi-temps',
                coordo: false,
                photo: 'http://jeunes-mediascitoyen.cemea.asso.fr/wp-content/uploads/2016/07/Mathias.jpg',
                datequalif: ''
            },
            {
                nomoj: 'Club de Jeunesse',
                pnom: 'John2',
                nom: 'Doe2',
                engagele: '16/10/2016',
                email: 'animateur@marolles.be2',
                tel: '0476/4598232',
                qualif: '20152',
                sexe: 'Homme2',
                role: 'animateur2',
                specificite: ['CRAC', 'PLAC'],
                contrat: 'ACS2',
                etp: 'mi-temps2',
                coordo: false,
                photo: 'http://jeunes-mediascitoyen.cemea.asso.fr/wp-content/uploads/2016/07/Mathias.jpg',
                datequalif: ''
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
    };
    DatalogueComponent.prototype.setDataDefault = function () {
        this.setListeOj([{
                $key: '1',
                nom: 'Club de Jeunesse'
            },
            {
                $key: '2',
                nom: 'le 88'
            }]);
        this.ojActive = this.listeOj[0];
        this.setInstitution({
            nomoj: 'Club de Jeunesse',
            type: '',
            membre: '',
            fondee: '',
            agrement: '',
            iban: 0,
            nivagr: '',
            nument: 0,
            spec: '',
            dispositif: '',
            description: '',
            logo: '',
            cat: ''
        });
        this.setEquipe([]);
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
        this.setMaterielActif({
            $key: '',
            nomoj: '',
            titre: '',
            categorie: '',
            type: '',
            loca: '',
            photo: '',
            remarque: ''
        });
    };
    DatalogueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datalogue',
            templateUrl: "datalogue.component.html"
        }), 
        __metadata('design:paramtypes', [])
    ], DatalogueComponent);
    return DatalogueComponent;
}());
exports.DatalogueComponent = DatalogueComponent;
//# sourceMappingURL=datalogue.component.js.map