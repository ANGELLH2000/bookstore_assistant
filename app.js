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
class Base {
    constructor(parameters) {

    }
}


///////////////////////////////

class ProductManager {
    constructor() {
        this.products = []
        console.log("Hola - ", this.products, " -");
    }
    addProduct(objet) {
        const newProduct = { id: this.products.length + 1, ...objet }
        this.products.push(newProduct)
    }

}
const productos = new ProductManager();
for (let index = 0; index < 20; index++) {

    productos.addProduct({
        title: "Producto_" + index,
        description: "Descripcion del producto",
        price: 23.23,
        SKU: 220020232,
        stock: 3

    })

}

//Importar fs
//const fs=require("fs")
import fs from "fs";
//Crear Archivo

fs.writeFileSync("./test.txt","1.- Texto en el archivo")

// Chequear si existe

if(fs.readFileSync("./test.txt")){
    let contenido = fs.readFileSync("./test.txt","utf-8");
    console.log(contenido)

// Modificando texto    
    fs.appendFileSync("./test.txt","\n2.- Angel Este es el Texto Agregado")
    contenido = fs.readFileSync("./test.txt","utf-8");
    console.log(contenido)

//Elimiar Archivo
    fs.unlinkSync("./test.txt");    

    fs.writeFileSync("./test2.txt",contenido)
}