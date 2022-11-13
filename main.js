
// dichiaro l'array
const arrayOfImages = ["img/01.webp" , "img/02.webp" , "img/03.webp" , "img/04.webp" , "img/05.webp"];


const miaLista = document.getElementById("items-blocks");


for (let i = 0; i < arrayOfImages.length; i++) {

    // dichiariamo l'array
    let elementoImg = arrayOfImages[i];
    
    // creo l'elemento div e aggiungo la classe items che ha display none
    let itemsElement = document.createElement("div");
    itemsElement.classList.add('items');

    // output
    itemsElement.innerHTML = `
    <img src="${arrayOfImages[i]}" alt"">
    `;
    // aggiungiamo nel DOM la lista per far in modo che esca: DIV class="items" con gli IMG dentro
    miaLista.append(itemsElement);

    
};

// dichiaro il bottone e la classe items
const nextBtn = document.querySelector(".button-up");
const items = document.getElementsByClassName('items');

let activeItem = 0;
items[activeItem].classList.add('active');

// facciamo funzionare il bottone
nextBtn.addEventListener('click', function() {

    if (activeItem < items.length - 1) {


        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove('active');

        // incrimentiamo l'indice active
        activeItem++;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

        if ( activeItem === items.length -1 ) {
            nextBtn.classList.add('hidden')
        }

    } else {

    }

});

const prevBtn = document.querySelector(".button-down");

prevBtn.addEventListener('click', function () {
    
    if (activeItem > 0) {

         // togliamo la classe active all'elemento corrente
         items[activeItem].classList.remove('active');

         // incrimentiamo l'indice active
         activeItem--;
 
         // aggiungiamo la classe active all'elemento successivo
         items[activeItem].classList.add('active');
 
         if ( activeItem === 0 ) {
             nextBtn.classList.add('hidden')
         }

         if ( activeIteam < 4 ) {
            btnTop.classList.remove("hidden");
            
        }
        
    }
})







