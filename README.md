# bookstore_assistant


>Para comenzar con la recomendación se tomará en cuenta una **base** de requisitos que se necesitan completar para poder 
evaluar los libros para  la recomendación.


>Esta **base** consta de ciertas características que describen el o los libros a recomendar, para futuras versiones se aumentara el 
tamaño de la **base**

>
>>Debido a que el usuario podrá comenzar el chat con una frase abierta o con una petición para poder iniciar las preguntas para la recomendación, el sistema
tendrá que evaluar la frase y conpletar la base con la información obtenido en la frase.
>
>>Paso siguiente, se usa el apoyo de los niveles para poder generar una mejor búsqueda a la hora de hacer la petición a la base de datos.

## Base

```
{
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

```

## Niveles

>## Nivel 1: Información Clave (Más Relevante)
>
>>### Géneros (obligatorio):
>>
>>>Razón: Los géneros determinan el tipo de libros a buscar y filtran una gran cantidad de opciones.
>>>Pregunta: "¿Qué géneros literarios te interesan más? (Ejemplo: misterio, fantasía, ciencia ficción, no ficción)"
>>
>>### Temas principales (obligatorio):
>>
>>>Razón: Los temas ayudan a refinar aún más la búsqueda dentro de los géneros seleccionados.
>>>Pregunta: "¿Qué temas o ideas te atraen? (Ejemplo: filosofía, viajes, amistad, desarrollo personal)"



>## Nivel 2: Contexto Relevante (Moderada Importancia)
>
>>### Autores (opcional):
>>
>>>Razón: Ayuda a enfocar en autores conocidos o explorar nuevos, pero no es crucial si el usuario no tiene preferencias claras.
>>>Pregunta: "¿Te gustaría explorar a algún autor en particular o descubrir nuevos escritores?"
>>
>>### Contexto emocional (opcional):
>>
>>>Razón: La experiencia emocional buscada puede orientar hacia estilos narrativos o tramas específicas.
>>>Pregunta: "¿Qué tipo de emoción o experiencia buscas en el libro? (Ejemplo: motivación, relajación, intriga, diversión)"
>>
>>### Ambientación (opcional):
>>
>>>Razón: Ayuda a ajustar la recomendación a los gustos del lector en cuanto a escenarios o épocas.
>>>Pregunta: "¿Hay algún tipo de ambiente o contexto que prefieras en una historia? (Ejemplo: futurista, naturalista, medieval)"



>## Nivel 3: Personalización Avanzada (Menos Urgente)
>
>>### Lecturas previas (opcional):
>>
>>>Razón: Las lecturas pasadas brindan pistas concretas sobre lo que el usuario podría disfrutar, pero no son esenciales para usuarios sin experiencia previa.
>>>Pregunta: "¿Recuerdas algún libro o historia que hayas disfrutado antes? ¿Por qué te gustó?"
>>
>>### Cantidad de hojas (opcional):
>>
>>>Razón: El tiempo disponible o la disposición para leer libros largos o cortos es un factor práctico importante.
>>>Pregunta: "¿Prefieres libros cortos para empezar o algo más extenso?"



```
{
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
  "popularidad": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te interesan títulos populares o prefieres descubrir libros menos conocidos pero únicos?"
  },
  "estilo_narrativo": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Qué tipo de narración prefieres? (Ejemplo: poética, directa, filosófica, humorística)"
  },
  "idioma": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te gustaría leer en un idioma específico?"
  },
  "formato": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Qué formato prefieres? (Ejemplo: físico, digital, audiolibro)"
  },
  "contexto_emocional": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Qué tipo de emoción o experiencia buscas en el libro? (Ejemplo: motivación, relajación, intriga, diversión)"
  },
  "tiempo_lectura": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Cuánto tiempo dedicas a la lectura? (Ejemplo: un rato antes de dormir, varias horas a la semana)"
  },
  "nivel_dificultad": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Prefieres libros fáciles de leer o algo más complejo y desafiante?"
  },
  "razon_para_leer": {
    "obligatorio": true,
    "valor": null,
    "pregunta": "¿Qué te motiva a buscar un libro? (Ejemplo: aprender, entretenimiento, relajarte)"
  },
  "recomendacion_social": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te han recomendado algo que te haya dejado con curiosidad?"
  },
  "trama_vs_concepto": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Prefieres una historia con mucha acción y trama o algo que explore ideas profundas y conceptos abstractos?"
  },
  "personajes": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Te interesan libros centrados en personajes complejos o en las ideas y el mundo en general?"
  },
  "premios_o_reconocimientos": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te interesa leer libros que hayan ganado premios literarios o sean reconocidos en su género?"
  },
  "colecciones": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Estás interesado en sagas o prefieres libros individuales?"
  },
  "novedad_vs_clasico": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te gustaría explorar un libro clásico o algo más reciente y moderno?"
  },
  "temas_inusuales": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Te interesaría explorar temas poco comunes o ideas únicas en la literatura?"
  },
  "lecturas_previas": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Recuerdas algún libro o historia que hayas disfrutado antes? ¿Por qué te gustó?"
  },
  "actividad_relacionada": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Qué otras actividades disfrutas? (Ejemplo: viajar, cocinar, deportes, videojuegos) Esto puede ayudarnos a recomendar algo relacionado."
  },
  "ritmo": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Prefieres un ritmo rápido con mucho desarrollo o algo más pausado y reflexivo?"
  },
  "interactividad": {
    "obligatorio": false,
    "valor": null,
    "pregunta": "¿Te interesaría un libro que sea más interactivo, como uno con ilustraciones, decisiones o elementos visuales?"
  },
  "misterio_y_final": {
    "obligatorio": false,
    "valor": [],
    "pregunta": "¿Qué tipo de final prefieres? (Ejemplo: inesperado, cerrado, abierto, impactante)"
  }
}


```