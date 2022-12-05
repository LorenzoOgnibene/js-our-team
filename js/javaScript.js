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


function getNewElement(content){
    const newElement = document.createElement('div');
    newElement.innerText = content;
    return newElement;
}

function getImgElement(image){
    const myImg = new Image();
    myImg.src = image;

    return myImg;
}



const containerName = document.getElementById('name');
const containerPosition = document.getElementById('position');
const containerImg = document.getElementById('img');
const teamMembers = [
    {
        name : 'Wayne Barnett',
        position : 'Founder & CEO0',
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


for (let i = 0; i < teamMembers.length; i++){
    console.log(teamMembers[i]);
    containerName.appendChild(getNewElement(teamMembers[i].name)); 
    containerPosition.appendChild(getNewElement(teamMembers[i].position));
    containerImg.appendChild(getNewElement(getImgElement(teamMembers[i].img)));    
}