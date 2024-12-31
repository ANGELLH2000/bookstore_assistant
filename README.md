# bookstore_assistant

## Base

```
{
    "generos": {
      "obligatorio": true,
      "valor": null,
      "pregunta": "¿Qué géneros de libros prefieres?"
    },
    "temas_principales": {
      "obligatorio": true,
      "valor": null,
      "pregunta": "¿Qué temática o tipos de historias te interesan?"
    },
    "cantidad_hojas": {
      "obligatorio": false,
      "valor": null,
      "pregunta": "¿Tienes preferencia por libros largos o cortos?"
    },
    "autores": {
      "obligatorio": false,
      "valor": null,
      "pregunta": "¿Hay algún autor que te guste o quieras explorar?"
    },
    "idioma": {
      "obligatorio": false,
      "valor": null,
      "pregunta": "¿Prefieres leer en un idioma específico?"
    },
    "formato": {
      "obligatorio": false,
      "valor": null,
      "pregunta": "¿Te interesa un formato específico (físico, digital, audiolibro)?"
    }
}

informacion_requerida: {
  "generos" (obligatorio): [],
  "temas" (obligatorio): [],
  "estilo_narrativo" (opcional): [],  // Ejemplo: poético, directo, filosófico.
  "ambientacion" (opcional): [],     // Ejemplo: histórica, contemporánea, futurista.
  "protagonistas" (opcional): [],    // Ejemplo: héroes, antihéroes, niños, animales.
  "cantidad_hojas" (opcional): null,
  "autores_preferidos" (opcional): [],
  "idioma_preferido" (opcional): null,
  "popularidad" (opcional): null,      // Ejemplo: bestsellers o joyas ocultas.
  "formato" (opcional): null,          // Ejemplo: ebook, físico, audiolibro.
}
```
