console.log("Vue ok", Vue);

const { createApp } = Vue;

const app = createApp({
    name: "carousel",
    data: () => ({
        destinations: destinations
    }),

    methods: {
        prevButton(){

            
        },
        nextButton(){

        }


    }   
})

app.mount('#carousel');



/*

facciamo funzionare il carosello:
 - ogni 3 secondi deve cambiare immagine
 - se clicco sulla freccia a destra, lui deve andare avanti
 - se clicco sulla freccia a sinistra, lui deve tornare indietro
 - se vado con il mouse sulla thumbnail, la thumbnail si deve illuminare e ingrandire

*/