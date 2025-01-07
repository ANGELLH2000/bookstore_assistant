import OllamaManager from "./ollamaClient.js";
let a = {
    "generos": {
        "obligatorio": true,
        "valor": [],
        "pregunta": "¿Qué géneros literarios te interesan más? (Ejemplo: misterio, fantasía, ciencia ficción, no ficción)"
    },
    "temas_principales": {
        "obligatorio": true,
        "valor": [],
        "pregunta": "¿Qué temas o ideas te atraen? (Ejemplo: filosofía, viajes, amistad, desarrollo personal)"
    },
    "ambientacion": {
        "obligatorio": false,
        "valor": [],
        "pregunta": "¿Hay algún tipo de ambiente o contexto que prefieras en una historia? (Ejemplo: futurista, naturalista, medieval)"
    },
    "autores": {
        "obligatorio": false,
        "valor": [],
        "pregunta": "¿Te gustaría explorar a algún autor en particular o descubrir nuevos escritores?"
    },
    "cantidad_hojas": {
        "obligatorio": false,
        "valor": null,
        "pregunta": "¿Prefieres libros cortos para empezar o algo más extenso?"
    },
    "contexto_emocional": {
        "obligatorio": false,
        "valor": [],
        "pregunta": "¿Qué tipo de emoción o experiencia buscas en el libro? (Ejemplo: motivación, relajación, intriga, diversión)"
    },
    "lecturas_previas": {
        "obligatorio": false,
        "valor": null,
        "pregunta": "¿Recuerdas algún libro o historia que hayas disfrutado antes? ¿Por qué te gustó?"
    }
}

const ollama = new OllamaManager()



async function comenzar() {
    let entrada = prompt('Hola, te voy a ayudar con tu recomendación, dejame tu peticion');
    try {
        let base = await ollama.evaluacion_inicial(entrada)

        // NIVEL I
        if(base['generos'].length== 0){
            console.log("Si entro")
            let entrada_genero=prompt("¿Qué géneros literarios te interesan más? (Ejemplo: misterio, fantasía, ciencia ficción, no ficción)")
            try {
                let {generos}=await ollama.evaluacion_unitaria(entrada_genero,'generos')
                base['generos'] =generos
                console.log(base)
            } catch (error) {
                console.error("Error al evaluar el genero:", error);
            }
            
        }
        console.log("Esta fue la peticion: ", entrada)
        console.log("Esta es tu base: ", base)
    } catch {
        console.error("Error al evaluar:", error);
    }
}
async function hola(){
    let entrada_genero=prompt("¿Qué géneros literarios te interesan más? (Ejemplo: misterio, fantasía, ciencia ficción, no ficción)")
    let base={}
    try {
        let {generos}= await ollama.evaluacion_unitaria(entrada_genero,'generos')
        base.generos=generos
        console.log(base)
    } catch (error) {
        console.error("Error al evaluar el genero:", error);
    }
}

const btn = document.getElementById("start");
btn.onclick = comenzar;



//const lprompt = "Solo he leido el Caballero Carmelo y Dorian Grey, pero aparte de ese libro nunca he leido otro. Me gustaria que me ayudes a encontrar libros sobre  misterio";

//ollama.saludar(entrada)
// ollama.evaluacion_inicial(entrada).then((resultados) => {
//     console.log(resultados);
// }).catch((error) => {
//     console.error("Error al evaluar:", error);
// });
