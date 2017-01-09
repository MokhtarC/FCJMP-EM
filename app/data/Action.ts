export interface Action
{
	$key?: string;
	nomoj: string;
	annee?: string;
	titre?: string;
	theme?: string;
	pubcib?: string;
	type?: string;
	freq?: string;
	duree?: string;
	desc?: string;
	temporaire?: boolean;
	du?: string;
	au?: string;
	dernieremodifpar?: string;
}

/*
OLD

export interface Action
{
	$key?: string;
	nomoj: string;
	annee?: string;
	titre?: string;
	theme?: string;
	pubcib?: string;
	type?: string;
	debutrec?: string;
	finrec?: string;
	dureerec?: string;
	freq?: string;
	desc?: string;
	debutponct?: string;
	dureeponct?: string;
	dernieremodifpar?: string;
}

*/