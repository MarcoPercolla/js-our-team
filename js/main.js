const membri = [
    {
        nome: "Wayne Barnett" ,
        ruolo: "Founder & CEO" ,
        imgProfilo:  "wayne-barnett-founder-ceo.jpg",

    },
    {
        nome: "Angela Caroll" ,
        ruolo: "Chief Editor" ,
        imgProfilo:  "angela-caroll-chief-editor.jpg",

    },
    {
        nome: "Walter Gordon" ,
        ruolo: "Office Manager" ,
        imgProfilo:  "walter-gordon-office-manager.jpg",

    },
    {
        nome: "Angela Lopez" ,
        ruolo: "Social Media Manager" ,
        imgProfilo:  "angela-lopez-social-media-manager.jpg",

    },
    {
        nome: "Scott Estrada" ,
        ruolo: "Developer" ,
        imgProfilo:  "scott-estrada-developer.jpg",

    },
    {
        nome: "Barbara Ramos" ,
        ruolo: "Graphic Designer" ,
        imgProfilo:  "barbara-ramos-graphic-designer.jpg",

    },
];

// console.log(membri[0].nome);
// console.log(membri[3].ruolo);
// console.log(membri[5].imgProfilo);

for (let i = 0; i < membri.length; i++) {
    const member = membri[i];

    for(let key in member) {
        console.log( key, member[key] );
    }
    
}

