const membri = [
    {
        nome: "Wayne Barnett" ,
        ruolo: "Founder & CEO" ,
        imgProfilo:  "./img/wayne-barnett-founder-ceo.jpg",

    },
    {
        nome: "Angela Caroll" ,
        ruolo: "Chief Editor" ,
        imgProfilo:  "./img/angela-caroll-chief-editor.jpg",

    },
    {
        nome: "Walter Gordon" ,
        ruolo: "Office Manager" ,
        imgProfilo:  "./img/walter-gordon-office-manager.jpg",

    },
    {
        nome: "Angela Lopez" ,
        ruolo: "Social Media Manager" ,
        imgProfilo:  "./img/angela-lopez-social-media-manager.jpg",

    },
    {
        nome: "Scott Estrada" ,
        ruolo: "Developer" ,
        imgProfilo:  "./img/scott-estrada-developer.jpg",

    },
    {
        nome: "Barbara Ramos" ,
        ruolo: "Graphic Designer" ,
        imgProfilo:  "./img/barbara-ramos-graphic-designer.jpg",

    },
];

// console.log(membri[0].nome);
// console.log(membri[3].ruolo);
// console.log(membri[5].imgProfilo);

for (let i = 0; i < membri.length; i++) {
    
    // per ogni membro genero una carta
    document.getElementById("container").innerHTML += `<div class="card"> card </div>`;

    // for(let key in member) {

    //     console.log(key, member[key], "normale" );


    //     if (key == "nome") {
    //         console.log(key, member[key], "mirato" );
    //     } else {
    //         console.log(key, member[key], "non-mirato" );
    //     }
        
    // };
    
};

let cards = document.querySelectorAll(".card");

for (i = 0; i < cards.length; i++) {
    
    let immagine = document.createElement("img");
    immagine.src = membri[i].imgProfilo;
    cards[i].appendChild(immagine);

    
    cards[i].innerHTML += `<h3>${membri[i].nome}</h3>`
    cards[i].innerHTML += `<p>${membri[i].ruolo}</p>`
}