import axios from "axios";
let base = {
    "generos": [],
    "temas_principales": [],
    "ambientacion": [],
    "autores": [],
    "cantidad_hojas": [],
    "contexto_emocional": [],
    "lecturas_previas": [],
}
class OllamaManager {
    constructor() {
        this.baseURL = 'http://localhost:11434';
        this.model = 'llama3.1';
        this.stream = false;
        this.raw = true;
        this.formats = {
            generos: {
                "type": "object",
                "properties": {
                    "generos": { "type": "array" },
                },
                "required": ["generos"]
            },
            temas_principales: {
                "type": "object",
                "properties": {
                    "temas_principales": { "type": "array" }
                },
                "required": ["temas_principales"]
            },
            autores: {
                "type": "object",
                "properties": {
                    "autores": { "type": "array" }
                },
                "required": ["autores"]
            },
            lecturas_previas: {
                "type": "object",
                "properties": {
                    "lecturas_previas": { "type": "array" }
                },
                "required": ["lecturas_previas"]
            }
        }

    }

    async evaluar(prompt, descripcion, format) {
        const requestBody = {
            model: this.model,
            stream: this.stream,
            prompt: `
            Evalúa únicamente el siguiente texto: "${prompt}". 
            Responde estrictamente a la pregunta: "${descripcion}". 
            Si no encuentras una respuesta directa en el texto, devuelve un JSON con un array vacío . 
            Responde estrictamente en el formato JSON y sin agregar propiedades`,
            format: format,
        };
        try {
            const response = await fetch(`${this.baseURL}/api/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            return data.response; // Respuesta válida
        } catch (error) {
            console.error('Error al comunicarse con Ollama usando fetch:', error.message);
        }
    }

    consolidar(data) {
        const base = {}

        data.forEach(dato => {
            let element = JSON.parse(dato.replaceAll('\n', ''))
            let key = (Object.keys(element))[0]
            base[key] = element[key]
        });
        return base


    }
    async evaluacion_inicial(prompt) {

        try {
            const generos = await this.evaluar(prompt, "¿Se pide o recomienda un género?", this.formats.generos)
            //console.log("Géneros evaluados:", generos);
            const temas_principales = await this.evaluar(prompt, "¿Se pide o recomienda un tema principal para el texto?", this.formats.temas_principales)
            //console.log("Temas principales evaluados:", temas_principales);
            const autores = await this.evaluar(prompt, "¿Se pide o recomienda algún autor de algun libro?", this.formats.autores)
            //console.log("Temas principales evaluados:", autores);
            const lecturas_previas = await this.evaluar(prompt, "¿Se habla de algún libro?", this.formats.lecturas_previas)
            //console.log("Temas principales evaluados:", lecturas_previas);

            return this.consolidar([generos, temas_principales, autores, lecturas_previas])

            //return { generos, temas_principales, autores, lecturas_previas };

        } catch (error) {
            console.log("Error al hacer la evalucacion inicial", error.message)
            return null
        }



    }


}
let ollama = new OllamaManager()
const prompt = "He leido Dorian Gray y me facino el libro, me gustaria que me recomiendes libros del autor : Emile Zola y Margaret Adwood sobre temas sociales";

ollama.evaluacion_inicial(prompt).then((resultados) => {
    console.log(resultados);
}).catch((error) => {
    console.error("Error al evaluar:", error);
});
//"{"generos":[]}{"temas_principales":[]}{"autores":[]}{"lecturas_previas":[{"titulo":"DorianGray","author":""}]}"
//ollama.consolidar(['{\n  "lecturas_previas": ["Dorian Gray"]\n}','{"temas_principales":[]}'])