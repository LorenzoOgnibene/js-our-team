/**
 *  MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    MILESTONE 2:
    Stampare le stesse informazioni su DOM sottoforma di stringhe
    BONUS 1:
    Trasformare la stringa foto in una immagine effettiva
    BONUS 2:
    Organizzare i singoli membri in card/schede
 */


// function getNewElement(content){
//     const newElement = document.createElement('div');
//     newElement.innerHTML = content;
//     return newElement;
// }

// function getNewDomElement(content){
//     const newElement = document.createElement('div');
//     newElement.append(content);
//     return newElement;
// }

// function getImgElement(image){
//     const newImgElement = document.createElement('img');
//     newImgElement.setAttribute('src', './js/'+image);
//     return newImgElement;
// }



// const containerName = document.getElementById('name');
// const containerPosition = document.getElementById('position');
// const containerImg = document.getElementById('img');
// const teamMembers = [
//     {
//         name : 'Wayne Barnett',
//         position : 'Founder & CEO0',
//         img : 'wayne-barnett-founder-ceo.jpg'
//     },
//     {
//         name : 'Angela Caroll',
//         position : 'Chief Editor',
//         img : 'angela-caroll-chief-editor.jpg'
//     },
//     {
//         name : 'Walter Gordon',
//         position : 'Office Manager',
//         img : 'walter-gordon-office-manager.jpg'
//     },
//     {
//         name : 'Angela Lopez',
//         position : 'Social Media Manager',
//         img : 'angela-lopez-social-media-manager.jpg'
//     },
//     {
//         name : 'Scott Estrada',
//         position : 'Developer',
//         img : 'scott-estrada-developer.jpg'
//     },
//     {
//         name : 'Barbara Ramos',
//         position : 'Graphic Designer',
//         img : 'barbara-ramos-graphic-designer.jpg'
//     },
// ]


// for (let i = 0; i < teamMembers.length; i++){
//     console.log(teamMembers[i]);
//     containerName.append(getNewElement(teamMembers[i].name)); 
//     containerPosition.append(getNewElement(teamMembers[i].position));
//     containerImg.append(getNewDomElement(getImgElement(teamMembers[i].img)));    
// }


//note this function only work with bootstap v5.2 and up.
function getNewCard (element, img, name, position){
    const myElement = element;
    myElement.innerHTML+= 
    `<div class="col-4">
    <div class="card "> 
        <img src="./js/${img}"></img>
        <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${position}</p>
        </div>
    </div>
    </div>`
    return myElement;
}

const containerCard = document.getElementById('wrapper');
const teamMembers = [
    {
        name : 'Wayne Barnett',
        position : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name : 'Angela Caroll',
        position : 'Chief Editor',
        img : 'angela-caroll-chief-editor.jpg'
    },
    {
        name : 'Walter Gordon',
        position : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg'
    },
    {
        name : 'Angela Lopez',
        position : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg'
    },
    {
        name : 'Scott Estrada',
        position : 'Developer',
        img : 'scott-estrada-developer.jpg'
    },
    {
        name : 'Barbara Ramos',
        position : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg'
    },
]

for(let i = 0; i < teamMembers.length; i++){
    getNewCard(containerCard ,teamMembers[i].img, teamMembers[i].name, teamMembers[i].position);

}