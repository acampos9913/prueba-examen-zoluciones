const axios = require("axios")

exports.ctrlsGetSwapiTP = item => MiFuncion(item);

async function MiFuncion(item) {
    try {
        axios.get("https://swapi.py4e.com/api/films/")
        .then(function(response) {
            return response.data
        }).catch(function(error) {
            throw error;
        })
    } catch (error) {
      throw error;
    }
  }


/* ##########################################################################################
Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
###############################################################################################
 */

 /*  {
    Count > Cantidad
    "count": 7, 
    Next > Siguiente
    "next": null, 
    Previus > Previo
    "previous": null, 
    Results > Resultado
    "results": [
        {
            Title > Titulo
            "title": "A New Hope", 
            episode_id > Episodio
            "episode_id": 4, 

            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
            "director": "George Lucas", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "1977-05-25", 
            "characters": [
            ], 
            "planets": [
            ], 
            "starships": [
            ], 
            "vehicles": [
            ], 
            "species": [
            ], 
            "created": "2014-12-10T14:23:31.880000Z", 
            "edited": "2014-12-20T19:49:45.256000Z", 
            "url": "https://swapi.py4e.com/api/films/1/"
        }
    ]
} */

/* ##########################################################################################
Adaptar y transformar los modelos de la API de prueba. Se tienen que mapear todos los nombres de atributos modelos del inglés al español (Ej: name -> nombre).
###############################################################################################
 */

/* Count > Cantidad
Next > Siguiente
Previus > Previo
Results > Resultado
Title > Titulo
episode_id > Episodio_Id
opening_crawl > rastreo de apertura
director > director
producer > productora
release_date > fecha de lanzamiento
characters > caracteres
planets > planetas
starships > naves estelares
vehicles > vehiculos
species > especies
created > creado
edited > editado
url > url  */