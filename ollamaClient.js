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
            },
            cantidad_hojas: {
                "type": "object",
                "properties": {
                    "cantidad_hojas": { "type": "array" }
                },
                "required": ["cantidad_hojas"]
            },
            ambientacion: {
                "type": "object",
                "properties": {
                    "ambientacion": { "type": "array" }
                },
                "required": ["ambientacion"]
            }
        }

    }

    async evaluar(prompt, descripcion, format) {
        const requestBody = {
            model: this.model,
            stream: this.stream,
            prompt: `
            Evalúa únicamente el siguiente texto: "${prompt}". 
            Responde estrictamente a la pregunta con los datos del texto: "${descripcion}". 
            Si no encuentras una respuesta directa en el texto, devuelve un array vacío no se necesita ingresar ninguna explicación.
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
    async evaluacion_unitaria(prompt,format) {

        try {
            const dato = await this.evaluar(prompt, "¿Se pide o recomienda un género de libro?", this.formats[format])
            return this.consolidar([dato])

        } catch (error) {
            console.log("Error al hacer la evalucacion unitaria", error.message)
            return null
        }



    }
    async evaluacion_inicial(prompt) {

        try {
            const generos = await this.evaluar(prompt, "¿Se pide o recomienda un género de libro?", this.formats.generos)
            const temas_principales = await this.evaluar(prompt, "¿Se pide o recomienda un tema o temas que le gustaría para el libro?", this.formats.temas_principales)
            const autores = await this.evaluar(prompt, "¿Se pide o recomienda algún autor de algun libro?", this.formats.autores)
            const lecturas_previas = await this.evaluar(prompt, "¿Se habla de algún libro?", this.formats.lecturas_previas)
            const cantidad_hojas = await this.evaluar(prompt, "¿Se pide o recomienda una cantidad de hojas para el libro?", this.formats.cantidad_hojas)
            const ambientacion = await this.evaluar(prompt, "¿Se habla , pide o recomienda alguna ambientación para la historia del libro?", this.formats.ambientacion)
            return this.consolidar([generos, temas_principales, autores, lecturas_previas, cantidad_hojas, ambientacion])

        } catch (error) {
            console.log("Error al hacer la evalucacion inicial", error.message)
            return null
        }



    }
    saludar(data) {
        console.log("Este es tu texto", data)
    }

}
export default OllamaManager;
//let ollama = new OllamaManager()
// const prompt = "Solo he leido el Caballero Carmelo y Dorian Grey, pero aparte de ese libro nunca he leido otro. Me gustaria que me ayudes a encontrar libros sobre  misterio";

// ollama.evaluacion_inicial(prompt).then((resultados) => {
//     console.log(resultados);
// }).catch((error) => {
//     console.error("Error al evaluar:", error);
// });