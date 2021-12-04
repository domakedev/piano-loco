const teclas = document.querySelectorAll("a")


//Solucion con FOR


// for (let i = 0; i <= teclas.length; i++) {
    
//     teclas[i]?.addEventListener("click", (e) => {
//         e.preventDefault();
//         console.log( `a${i+1}`);
//         new Audio(`./audio/key-${i+1}.mp3`).play();
//     })
    
// }

//Solucion con ForEach
teclas.forEach((e,i) => {

    e.addEventListener("click", (e) => {
        e.preventDefault();
        console.log( `a${i+1}`);
        new Audio(`./audio/key-${i+1}.mp3`).play();
    })

});

