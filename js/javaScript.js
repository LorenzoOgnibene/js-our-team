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
    for(key in teamMembers[i]){
        console.log(teamMembers[i][key]);
    }
}