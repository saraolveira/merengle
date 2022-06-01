const players = [
    {
        "name": "Thibaut Courtois",
        "lastName": "Courtois",
        "jerseyName": "Courtois",
        "team": "Fútbol masculino",
        "position": "POR",
        "close":["DEF"],
        "number": 1,
        "year": 1992,
        "country": "Bélgica",
        "height": 200,
        "near":["Alemania", "Francia"],
        "spelling": "",
        "image": "/img/courtois.png"
    }, 
    {
        "name": "Andriy Lunin",
        "lastName": "Lunin",
        "jerseyName": "Lunin",
        "team": "Fútbol masculino",
        "position": "POR",
        "close":["DEF"],
        "number": 13,
        "year": 1999,
        "country": "Ucrania",
        "height": 191,
        "near":["Hungría"],
        "spelling": "",
        "image": "/img/lunin.png"
    }, 
    {
        "name": "Dani Carvajal",
        "lastName": "Carvajal",
        "jerseyName": "Carvajal",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 2,
        "year": 1992,
        "country": "España",
        "height": 173,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/carvajal.png"
    }, 
    {
        "name": "Eder Militão",
        "lastName": "Militão",
        "jerseyName": "E. Militão",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 3,
        "year": 1998,
        "country": "Brasil",
        "height": 186,
        "near":["Argentina", "Uruguay"],
        "spelling": "Militao",
        "image": "/img/militao.png"
    }, 
    {
        "name": "David Alaba",
        "lastName": "Alaba",
        "jerseyName": "Alaba",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 4,
        "year": 1992,
        "country": "Austria",
        "height": 180,
        "near":["Alemania", "Hungría"],
        "spelling": "",
        "image": "/img/alaba.png"
    }, 
    {
        "name": "Jesús Vallejo",
        "lastName": "Vallejo",
        "jerseyName": "Vallejo",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 5,
        "year": 1997,
        "country": "España",
        "height": 184,
        "near":["Francia"],
        "spelling": "Jesús Vallejo",
        "image": "/img/vallejo.png"
    }, 
    {
        "name": "Nacho Fernández",
        "lastName": "Fernández",
        "jerseyName": "Nacho",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 6,
        "year": 1990,
        "country": "España",
        "height": 180,
        "near":["Francia"],
        "spelling": "Fernandez",
        "image": "/img/nacho.png"
    }, 
    {
        "name": "Marcelo Vieira",
        "lastName": "Vieira",
        "jerseyName": "Marcelo",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 12,
        "year": 1988,
        "country": "Brasil",
        "height": 174,
        "near":["Argentina", "Uruguay"],
        "spelling": "",
        "image": "/img/marcelo.png"
    }, 
    {
        "name": "Ferland Mendy",
        "lastName": "Mendy",
        "jerseyName": "F Mendy",
        "team": "Fútbol masculino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 23,
        "year": 1995,
        "country": "Francia",
        "height": 180,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/mendy.png"
    }, 
    {
        "name": "Toni Kroos",
        "lastName": "Kroos",
        "jerseyName": "Kroos",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 8,
        "year": 1990,
        "country": "Alemania",
        "height": 183,
        "near":["Austria", "Bélgica", "Dinamarca", "Francia", "España"],
        "spelling": "",
        "image": "/img/kroos.png"
    }, 
    {
        "name": "Luka Modrić",
        "lastName": "Modrić",
        "jerseyName": "Modrić",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 10,
        "year": 1985,
        "country": "Croacia",
        "height": 172,
        "near":["Hungría", "Serbia"],
        "spelling": "Modric",
        "image": "/img/modric.png"
    }, 
    {
        "name": "Carlos Henrique Casemiro",
        "lastName": "Casemiro",
        "jerseyName": "Casemiro",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 14,
        "year": 1992,
        "country": "Brasil",
        "height": 185,
        "near":["Argentina", "Uruguay"],
        "spelling": "",
        "image": "/img/casemiro.png"
    }, 
    {
        "name": "Fede Valverde",
        "lastName": "Valverde",
        "jerseyName": "Valverde",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 15,
        "year": 1998,
        "country": "Uruguay",
        "height": 182,
        "near":["Argentina", "Brasil"],
        "spelling": "",
        "image": "/img/valverde.png"
    }, 
    {
        "name": "Lucas Vázquez",
        "lastName": "Vázquez",
        "jerseyName": "Lucas V.",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 17,
        "year": 1991,
        "country": "España",
        "height": 173,
        "near":["Francia"],
        "spelling": "Vazquez",
        "image": "/img/lucas.png"
    }, 
    {
        "name": "Dani Ceballos",
        "lastName": "Ceballos",
        "jerseyName": "D. Ceballos",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 19,
        "year": 1996,
        "country": "España",
        "height": 179,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/ceballos.png"
    }, 
    {
        "name": "Isco Alarcón",
        "lastName": "Alarcón",
        "jerseyName": "Isco",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 22,
        "year": 1992,
        "country": "España",
        "height": 176,
        "near":["Francia"],
        "spelling": "Alarcon",
        "image": "/img/isco.png"
    }, 
    {
        "name": "Eduardo Camavinga",
        "lastName": "Camavinga",
        "jerseyName": "Camavinga",
        "team": "Fútbol masculino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 25,
        "year": 1999,
        "country": "Francia",
        "height": 182,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/camavinga.png"
    }, 
    {
        "name": "Eden Hazard",
        "lastName": "Hazard",
        "jerseyName": "Hazard",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 7,
        "year": 1991,
        "country": "Bélgica",
        "height": 175,
        "near":["Alemania", "Francia"],
        "spelling": "",
        "image": "/img/hazard.png"
    }, 
    {
        "name": "Karim Benzema",
        "lastName": "Benzema",
        "jerseyName": "Benzema",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 9,
        "year": 1987,
        "country": "Francia",
        "height": 185,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/benzema.png"
    }, 
    {
        "name": "Marco Asensio",
        "lastName": "Asensio",
        "jerseyName": "Asensio",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 11,
        "year": 1996,
        "country": "España",
        "height": 182,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/asensio.png"
    }, 
    {
        "name": "Luka Jović",
        "lastName": "Jović",
        "jerseyName": "Jović",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 16,
        "year": 1997,
        "country": "Serbia",
        "height": 191,
        "near":["Croacia", "Hungría"],
        "spelling": "Jovic",
        "image": "/img/jovic.png"
    }, 
    {
        "name": "Gareth Bale",
        "lastName": "Bale",
        "jerseyName": "Bale",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 18,
        "year": 1989,
        "country": "Gales",
        "height": 185,
        "near":[],
        "spelling": "",
        "image": "/img/bale.png"
    }, 
    {
        "name": "Vinicius Jr",
        "lastName": "de Oliveira",
        "jerseyName": "Vini Jr.",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 20,
        "year": 2000,
        "country": "Brasil",
        "height": 176,
        "near":["Argentina", "Uruguay"],
        "spelling": "",
        "image": "/img/vinicius.png"
    }, 
    {
        "name": "Rodrygo Goes",
        "lastName": "Goes",
        "jerseyName": "Rodrygo",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 21,
        "year": 2001,
        "country": "Brasil",
        "height": 174,
        "near":["Argentina", "Uruguay"],
        "spelling": "",
        "image": "/img/rodrygo.png"
    }, 
    {
        "name": "Mariano Díaz",
        "lastName": "Díaz",
        "jerseyName": "Mariano",
        "team": "Fútbol masculino",
        "position": "DEL",
        "close":["CEN"],
        "number": 24,
        "year": 1993,
        "country": "España",
        "height": 180,
        "near":["Francia"],
        "spelling": "Diaz",
        "image": "/img/mariano.png"
    }, 
    {
        "name": "María Isabel Rodríguez",
        "lastName": "Rodriguez",
        "jerseyName": "Misa",
        "team": "Fútbol femenino",
        "position": "POR",
        "close":["DEF"],
        "number": 1,
        "year": 1999,
        "country": "España",
        "height": 173,
        "near":["Francia"],
        "spelling": "Maria Isabel Rodriguez",
        "image": "/img/misa.png"
    }, 
    {
        "name": "Méline Gérard",
        "lastName": "Gerard",
        "jerseyName": "Gérard",
        "team": "Fútbol femenino",
        "position": "POR",
        "close":["DEF"],
        "number": 24,
        "year": 1990,
        "country": "Francia",
        "height": 169,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "Meline",
        "image": "/img/gerard.png"
    }, 
    {
        "name": "Kenti Robles",
        "lastName": "Robles",
        "jerseyName": "K. Robles",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 2,
        "year": 1991,
        "country": "México",
        "height": 163,
        "near":["Estados Unidos"],
        "spelling": "",
        "image": "/img/kenti.png"
    }, 
    {
        "name": "Babett Peter",
        "lastName": "Peter",
        "jerseyName": "Peter",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 4,
        "year": 1988,
        "country": "Alemania",
        "height": 170,
        "near":["Austria", "Bélgica", "Dinamarca", "Francia", "España"],
        "spelling": "",
        "image": "/img/peter.png"
    }, 
    {
        "name": "Ivana Andrés",
        "lastName": "Andrés",
        "jerseyName": "Ivana",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 5,
        "year": 1994,
        "country": "España",
        "height": 163,
        "near":["Francia"],
        "spelling": "Andres",
        "image": "/img/ivana.png"
    }, 
    {
        "name": "Olga Carmona",
        "lastName": "Carmona",
        "jerseyName": "Olga",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 7,
        "year": 2000,
        "country": "España",
        "height": 160,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/olga.png"
    }, 
    {
        "name": "Claudia Florentino",
        "lastName": "Florentino",
        "jerseyName": "Claudia F.",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 15,
        "year": 1998,
        "country": "España",
        "height": 164,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/claudia.png"
    }, 
    {
        "name": "Marta Corredera",
        "lastName": "Corredera",
        "jerseyName": "M. Corredera",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 17,
        "year": 1991,
        "country": "España",
        "height": 164,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/corredera.png"
    }, 
    {
        "name": "Lucía Rodríguez",
        "lastName": "Rodriguez",
        "jerseyName": "Lucía",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 18,
        "year": 1999,
        "country": "España",
        "height": 164,
        "near":["Francia"],
        "spelling": "Lucia Rodriguez",
        "image": "/img/lucia.png"
    }, 
    {
        "name": "Rocío Gálvez",
        "lastName": "Galvez",
        "jerseyName": "Rocío",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 20,
        "year": 1997,
        "country": "España",
        "height": 174,
        "near":["Francia"],
        "spelling": "Rocio Galvez",
        "image": "/img/rocio.png"
    }, 
    {
        "name": "Sofie Svava",
        "lastName": "Svava",
        "jerseyName": "Svava",
        "team": "Fútbol femenino",
        "position": "DEF",
        "close":["POR", "CEN"],
        "number": 23,
        "year": 2000,
        "country": "Dinamarca",
        "height": 173,
        "near":["Alemania"],
        "spelling": "",
        "image": "/img/svava.png"
    }, 
    {
        "name": "Teresa Abelleira",
        "lastName": "Abelleira",
        "jerseyName": "Teresa",
        "team": "Fútbol femenino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 3,
        "year": 2000,
        "country": "España",
        "height": 160,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/teresa.png"
    }, 
    {
        "name": "Aurélie Anne Sophie Kaci",
        "lastName": "Kaci",
        "jerseyName": "Kaci",
        "team": "Fútbol femenino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 6,
        "year": 1989,
        "country": "Francia",
        "height": 163,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "Aurelie",
        "image": "/img/kaci.png"
    }, 
    {
        "name": "Maite Oroz",
        "lastName": "Oroz",
        "jerseyName": "M. Oroz",
        "team": "Fútbol femenino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 8,
        "year": 1998,
        "country": "España",
        "height": 155,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/maite.png"
    }, 
    {
        "name": "Claudia Zornoza",
        "lastName": "Zornoza",
        "jerseyName": "Zornoza",
        "team": "Fútbol femenino",
        "position": "CEN",
        "close":["DEF", "DEL"],
        "number": 21,
        "year": 1990,
        "country": "España",
        "height": 164,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/zornoza.png"
    }, 
    {
        "name": "Kosovare Asllani",
        "lastName": "Asllani",
        "jerseyName": "Asllani",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 9,
        "year": 1989,
        "country": "Suecia",
        "height": 166,
        "near":[],
        "spelling": "",
        "image": "/img/asllani.png"
    }, 
    {
        "name": "Esther González",
        "lastName": "González",
        "jerseyName": "Esther",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 10,
        "year": 1992,
        "country": "España",
        "height": 163,
        "near":["Francia"],
        "spelling": "Gonzalez",
        "image": "/img/esther.png"
    }, 
    {
        "name": "Marta Cardona",
        "lastName": "Cardona",
        "jerseyName": "M. Cardona",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 11,
        "year": 1995,
        "country": "España",
        "height": 161,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/cardona.png"
    }, 
    {
        "name": "Lorena Navarro",
        "lastName": "Navarro",
        "jerseyName": "Lorena",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 12,
        "year": 2000,
        "country": "España",
        "height": 151,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/lorena.png"
    }, 
    {
        "name": "Nahikari García",
        "lastName": "García",
        "jerseyName": "Nahikari",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 14,
        "year": 1997,
        "country": "España",
        "height": 161,
        "near":["Francia"],
        "spelling": "Garcia",
        "image": "/img/nahikari.png"
    }, 
    {
        "name": "Caroline Møller",
        "lastName": "Møller",
        "jerseyName": "Møller",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 16,
        "year": 1998,
        "country": "Dinamarca",
        "height": 178,
        "near":["Alemania"],
        "spelling": "Moller",
        "image": "/img/moller.png"
    }, 
    {
        "name": "Athenea del Castillo",
        "lastName": "del Castillo",
        "jerseyName": "Athenea",
        "team": "Fútbol femenino",
        "position": "DEL",
        "close":["CEN"],
        "number": 22,
        "year": 2000,
        "country": "España",
        "height": 160,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/athenea.png"
    }, 
    {
        "name": "Nigel Williams-Goss",
        "lastName": "Williams-Goss",
        "jerseyName": "Williams-Goss",
        "team": "Baloncesto",
        "position": "B",
        "close":["E", "B/E"],
        "number": 0,
        "year": 1994,
        "country": "Estados Unidos",
        "height": 191,
        "near":["México"],
        "spelling": "",
        "image": "/img/goss.png"
    }, 
    {
        "name": "Juan Núñez",
        "lastName": "Núñez",
        "jerseyName": "Núñez",
        "team": "Baloncesto",
        "position": "B",
        "close":["E", "B/E"],
        "number": 2,
        "year": 2004,
        "country": "España",
        "height": 193,
        "near":["Francia"],
        "spelling": "Nuñez",
        "image": "/img/nuñez.png"
    }, 
    {
        "name": "Thomas Heurtel",
        "lastName": "Heurtel",
        "jerseyName": "Heurtel",
        "team": "Baloncesto",
        "position": "B",
        "close":["E", "B/E"],
        "number": 4,
        "year": 1989,
        "country": "Francia",
        "height": 188,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/heurtel.png"
    }, 
    {
        "name": "Calors Alocén",
        "lastName": "Alocén",
        "jerseyName": "Alocen",
        "team": "Baloncesto",
        "position": "B",
        "close":["E", "B/E"],
        "number": 12,
        "year": 2000,
        "country": "España",
        "height": 194,
        "near":["Francia"],
        "spelling": "Alocen",
        "image": "/img/alocen.png"
    }, 
    {
        "name": "Sergio Llull",
        "lastName": "Llull",
        "jerseyName": "Llull",
        "team": "Baloncesto",
        "position": "B/E",
        "close":["B", "A"],
        "number": 23,
        "year": 1987,
        "country": "España",
        "height": 190,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/llull.png"
    }, 
    {
        "name": "Fabien Causeur",
        "lastName": "Causeur",
        "jerseyName": "Causeur",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 1,
        "year": 1987,
        "country": "Francia",
        "height": 196,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/causeur.png"
    }, 
    {
        "name": "Rudy Fernández",
        "lastName": "Fernández",
        "jerseyName": "Rudy",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 5,
        "year": 1985,
        "country": "España",
        "height": 196,
        "near":["Francia"],
        "spelling": "Fernandez",
        "image": "/img/rudy.png"
    }, 
    {
        "name": "Alberto Abalde",
        "lastName": "Abalde",
        "jerseyName": "Abalde",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 6,
        "year": 1995,
        "country": "España",
        "height": 202,
        "near":["Francia"],
        "spelling": "",
        "image": "/img/abalde.png"
    }, 
    {
        "name": "Adam Hanga",
        "lastName": "Hanga",
        "jerseyName": "Hanga",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 8,
        "year": 1989,
        "country": "Hungría",
        "height": 200,
        "near":["Austria", "Croacia", "Serbia", "Ucrania"],
        "spelling": "",
        "image": "/img/hanga.png"
    },
    {
        "name": "Gabriel Deck",
        "lastName": "Deck",
        "jerseyName": "Deck",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 14,
        "year": 1995,
        "country": "Argentina",
        "height": 198,
        "near": ["Brasil", "Uruguay"],
        "spelling": "Gaby",
        "image": "/img/deck.png"
    }, 
    {
        "name": "Jeff Taylor",
        "lastName": "Taylor",
        "jerseyName": "Taylor",
        "team": "Baloncesto",
        "position": "A",
        "close":["B/E", "E", "AP"],
        "number": 44,
        "year": 1989,
        "country": "Suecia",
        "height": 201,
        "near": [],
        "spelling": "",
        "image": "/img/taylor.png"
    }, 
    {
        "name": "Anthony Randolph",
        "lastName": "Randolph",
        "jerseyName": "Randolph",
        "team": "Baloncesto",
        "position": "AP",
        "close":["A", "P"],
        "number": 3,
        "year": 1989,
        "country": "Estados Unidos",
        "height": 211,
        "near":["México"],
        "spelling": "",
        "image": "/img/randolph.png"
    }, 
    {
        "name": "Guerschon Yabusele",
        "lastName": "Yabusele",
        "jerseyName": "Yabusele",
        "team": "Baloncesto",
        "position": "AP",
        "close":["A", "P"],
        "number": 28,
        "year": 1995,
        "country": "Francia",
        "height": 201,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/yabusele.png"
    }, 
    {
        "name": "Trey Thompkins",
        "lastName": "Thompkins",
        "jerseyName": "Thompkins",
        "team": "Baloncesto",
        "position": "AP",
        "close":["A", "P"],
        "number": 33,
        "year": 1990,
        "country": "Estados Unidos",
        "height": 208,
        "near":["México"],
        "spelling": "",
        "image": "/img/thompkins.png"
    }, 
    {
        "name": "Vincent Poirier",
        "lastName": "Poirier",
        "jerseyName": "Poirier",
        "team": "Baloncesto",
        "position": "P",
        "close":["AP"],
        "number": 17,
        "year": 1993,
        "country": "Francia",
        "height": 213,
        "near":["Alemania", "Bélgica", "España"],
        "spelling": "",
        "image": "/img/poirier.png"
    }, 
    {
        "name": "Edy Tavares",
        "lastName": "Tavares",
        "jerseyName": "Tavares",
        "team": "Baloncesto",
        "position": "P",
        "close":["AP"],
        "number": 22,
        "year": 1992,
        "country": "Cabo Verde",
        "height": 220, 
        "near":[],
        "spelling": "",
        "image": "/img/tavares.png"
    }
]

const answerList = [
"Alocen","M. Corredera","Deck","Yabusele","Lucas V.","Kaci","Rudy","F Mendy","Vini Jr.","Courtois","Svava","Asllani","Vallejo","Olga","Kroos","Williams-Goss","Rodrygo","M. Cardona","Casemiro","Núñez","Modrić","Hazard","Taylor","Tavares","Lorena","Poirier","Nahikari","M. Oroz","Nacho","Mariano","E. Militão","Asensio","Teresa","D. Ceballos","Randolph","Alaba","Ivana","Rocío","Esther","Isco","Llull","Valverde","Camavinga","Claudia F.","Hanga","Bale","Causeur","Jović","Thompkins","Athenea","K. Robles","Abalde","Heurtel","Lucía","Lunin","Carvajal","Benzema","Møller","Zornoza","Peter","Marcelo","Gérard","Misa","Olga","Rudy","Svava","Isco","Heurtel","E. Militão","Lunin","Møller","Kaci","Llull","Vini Jr.","Poirier","Marcelo","M. Corredera","Athenea","Carvajal","Nahikari","Taylor","Camavinga","Benzema","Modrić","K. Robles","Gérard","Teresa","Peter","Esther","Rodrygo","Misa","F Mendy","Bale","Jović","Lucía","Thompkins","Hazard","D. Ceballos","Asensio","Alocen","Núñez","Lucas V.","Alaba","Casemiro","Williams-Goss","M. Oroz","Randolph","Hanga","Ivana","Nacho","Lorena","Causeur","M. Cardona","Tavares","Yabusele","Kroos","Claudia F.","Asllani","Zornoza","Valverde","Vallejo","Abalde","Rocío","Mariano","Courtois","Deck","Lunin","Yabusele","Esther","Peter","Mariano","Ivana","E. Militão","Lucas V.","Thompkins","Valverde","Asllani","Causeur","Courtois","Marcelo","Lorena","K. Robles","Møller","Poirier","Deck","Teresa","Vallejo","Athenea","Misa","M. Corredera","Hazard","Heurtel","Gérard","Nahikari","F Mendy","Randolph","Nacho","M. Cardona","Carvajal","D. Ceballos","Claudia F.","Alocen","Casemiro","Rodrygo","Hanga","M. Oroz","Abalde","Núñez","Jović","Modrić","Vini Jr.","Isco","Olga","Llull","Zornoza","Asensio","Kroos","Lucía","Taylor","Kaci","Svava","Camavinga","Williams-Goss","Tavares","Benzema","Rocío","Alaba","Rudy","Bale","Asllani","Causeur","Nahikari","Lucas V.","Núñez","E. Militão","Alocen","Tavares","Heurtel","Kaci","Modrić","Svava","Olga","Thompkins","Rodrygo","Jović","F Mendy","Randolph","Courtois","Rudy","Nacho","Taylor","Hazard","Casemiro","Rocío","Williams-Goss","Valverde","Mariano","M. Oroz","Ivana","Athenea","Lucía","Abalde","D. Ceballos","Vini Jr.","Marcelo","Yabusele","Kroos","Alaba","Vallejo","Isco","Bale","Møller","Peter","Asensio","Gérard","Claudia F.","Llull","Camavinga","M. Cardona","Teresa","Hanga","Lunin","Benzema","K. Robles","Lorena","Esther","Poirier","M. Corredera","Deck","Zornoza","Carvajal","Misa","Causeur","Rocío","Bale","Modrić","Randolph","Taylor","Esther","Møller","Vallejo","Hanga","M. Corredera","Teresa","Llull","Kroos","E. Militão","Mariano","Athenea","Ivana","Kaci","Deck","Núñez","M. Oroz","M. Cardona","Svava","Nacho","Courtois","Rudy","Abalde","Casemiro","Poirier","Misa","K. Robles","Gérard","Lucas V.","F Mendy","Lunin","Williams-Goss","Heurtel","Valverde","Alaba","Benzema","D. Ceballos","Asllani","Asensio","Peter","Alocen","Lorena","Yabusele","Tavares","Camavinga","Hazard","Vini Jr.","Thompkins","Carvajal","Jović","Isco","Olga","Rodrygo","Lucía","Zornoza","Nahikari","Claudia F.","Marcelo", "Causeur","Rocío","Bale","Modrić","Randolph","Taylor","Esther","Møller","Vallejo","Hanga","M. Corredera","Teresa","Llull","Kroos","E. Militão","Mariano","Athenea","Ivana","Kaci","Deck","Núñez","M. Oroz","M. Cardona","Svava","Nacho","Courtois","Rudy","Abalde","Casemiro","Poirier","Misa","K. Robles","Gérard","Lucas V.","F Mendy","Lunin","Williams-Goss","Heurtel","Valverde","Alaba","Benzema","D. Ceballos","Asllani","Asensio","Peter","Alocen","Lorena","Yabusele","Tavares","Camavinga","Hazard","Vini Jr.","Thompkins","Carvajal","Jović","Isco","Olga","Rodrygo","Lucía","Zornoza","Nahikari","Claudia F.","Marcelo","Thompkins","Zornoza","Olga","Causeur","Peter","Ivana","Rudy","Marcelo","Claudia F.","Lucía","Hazard","Alocen","Tavares","Poirier","Jović","Courtois","Rodrygo","K. Robles","Vallejo","Lucas V.","Abalde","Vini Jr.","Hanga","Athenea","Teresa","M. Cardona","Misa","Randolph","Esther","Nahikari","D. Ceballos","Asllani","Yabusele","E. Militão","M. Oroz","Llull","Núñez","Nacho","Mariano","Valverde","Lorena","Heurtel","M. Corredera","Casemiro","Kaci","Lunin","Alaba","Asensio","F Mendy","Svava","Møller","Camavinga","Bale","Modrić","Rocío","Carvajal","Kroos","Benzema","Deck","Isco","Gérard","Taylor","Williams-Goss", "Peter","Taylor","Rudy","M. Cardona","Gérard","Esther","Heurtel","Rocío","Alocen","Causeur","Asllani","Tavares","Lucía","Deck","Ivana","Abalde","Marcelo","Camavinga","Casemiro","Bale","Llull","Misa","Asensio","Lucas V.","Nahikari","Williams-Goss","Teresa","Vini Jr.","Athenea","Zornoza","M. Corredera","Møller","Benzema","Lunin","Olga","Svava","Modrić","Vallejo","Valverde","Núñez","K. Robles","Kaci","F Mendy","Mariano","Isco","Hazard","Lorena","D. Ceballos","Claudia F.","Rodrygo","Poirier","Thompkins","Hanga","Carvajal","Alaba","Randolph","Kroos","Nacho","Courtois","E. Militão","Yabusele","M. Oroz","Jović","Carvajal","Valverde","Modrić","Heurtel","Isco","Tavares","Claudia F.","Rudy","Causeur","Rocío","Poirier","Lucía","Ivana","Camavinga","Deck","Svava","Hazard","Llull","Rodrygo","Yabusele","M. Corredera","Alocen","Kaci","Asllani","Jović","Bale","Olga","Marcelo","Courtois","K. Robles","Hanga","Asensio","Mariano","Randolph","Gérard","Peter","M. Cardona","Abalde","Alaba","Lunin","Taylor","F Mendy","Nahikari","Benzema","Athenea","Nacho","E. Militão","Núñez","Esther","D. Ceballos","Vallejo","M. Oroz","Casemiro","Teresa","Williams-Goss","Lucas V.","Vini Jr.","Misa","Thompkins","Zornoza","Kroos","Lorena","Møller"
]


// Get random player each day
const MILLISECONDS_TO_DAYS = 1000 * 60 * 60 * 24

const startDate = new Date(2022, 3, 1)
const msOffset = Date.now() - startDate
const dayOffset = msOffset / MILLISECONDS_TO_DAYS
const index = Math.floor(dayOffset)
const tomorrow = startDate.valueOf() + (index + 1) * MILLISECONDS_TO_DAYS;
const answerName = answerList[index]
const answer = players.find((player) => player.jerseyName === answerName)
let attempts = 1
let guesses = 7
let won = "no"
let lost = "no"

const today = new Date(new Date().setHours(0, 0, 0, 0));

const guessContainer = document.querySelector('.guess-container')
const timer = document.getElementById('timer')
const winBox = document.querySelector('.win')
const loseBox = document.querySelector('.lose')
const instructionsBox = document.querySelector('.instr')
let instructions = "no"
let darkMode = "off"
const statsBox = document.querySelector('.stats')
const played = document.getElementById('played')
const winpct = document.getElementById('winpct')
const streak = document.getElementById('streak')

loadLocalStorage()

// Local Storage
function preserveGameState() {
    window.localStorage.setItem('attempts', attempts)
    window.localStorage.setItem('guesses', guesses)
    window.localStorage.setItem('guessContainer', guessContainer.innerHTML)
    window.localStorage.setItem('today', today)
}

function updateGames() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    window.localStorage.setItem('totalGames', Number(totalGames) + 1)
}

function preserveWin() {
    window.localStorage.setItem('won', won)
    window.localStorage.setItem('winBox', winBox.innerHTML)

    const totalWins = window.localStorage.getItem('totalWins') || 0
    window.localStorage.setItem('totalWins', Number(totalWins) + 1)

    const currentStreak = window.localStorage.getItem('currentStreak') || 0
    window.localStorage.setItem('currentStreak', Number(currentStreak) + 1)
}

function preserveLose() {
    window.localStorage.setItem('lost', lost)
    window.localStorage.setItem('loseBox', loseBox.innerHTML)

    window.localStorage.setItem('currentStreak', 0)
}

function updateStats() {
    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}

function preserveInstructions() {
    window.localStorage.setItem('instructions', instructions)
}

function preserveDarkMode() {
    window.localStorage.setItem('darkMode', darkMode)
}

function loadLocalStorage() {
    let storedToday = window.localStorage.getItem('today')
    if (storedToday != today) {
        localStorage.removeItem('attempts')
        localStorage.removeItem('guesses')
        localStorage.removeItem('won')
        localStorage.removeItem('lost')
        localStorage.removeItem('today')
        localStorage.removeItem('guessContainer')
        localStorage.removeItem('winBox')
        localStorage.removeItem('loseBox')
    }

    attempts = Number(window.localStorage.getItem('attempts')) || attempts
    guesses = Number(window.localStorage.getItem('guesses')) || guesses
    won = window.localStorage.getItem('won')
    lost = window.localStorage.getItem('lost')

    const storedGuessContainer = window.localStorage.getItem('guessContainer')
    if (guessContainer) {
        guessContainer.innerHTML = storedGuessContainer
    }

    const storedWinBox = window.localStorage.getItem('winBox')
    winBox.innerHTML = storedWinBox

    const storedLoseBox = window.localStorage.getItem('loseBox')
    loseBox.innerHTML = storedLoseBox
    
    let isRead = window.localStorage.getItem('instructions')
    if (isRead === "read") {
        instructionsBox.style.display = "none"
    }

    let isDark = window.localStorage.getItem('darkMode')
    if (isDark === "on") {
        document.documentElement.style.setProperty('--whitish', "#2f2f2f")
        guessContainer.style.color = "#f7f7f7"
        statsBox.style.color = "#f7f7f7"
        instructionsBox.style.color = "#f7f7f7"
        winBox.style.color = "#f7f7f7"
        loseBox.style.color = "#f7f7f7"
    }


    const totalGames = window.localStorage.getItem('totalGames') || 0
    const totalWins = window.localStorage.getItem('totalWins') || 0
    const pct = Math.round((totalWins/totalGames) * 100) || 0
    const currentStreak = window.localStorage.getItem('currentStreak') || 0

    played.innerHTML = totalGames
    winpct.innerHTML = `${pct}%`
    streak.innerHTML = currentStreak
}

// Dark mode
const lightButton = document.querySelector('.light-button')

lightButton.addEventListener('click', () => {
    if (darkMode === "off") {
        darkMode = "on"
        document.documentElement.style.setProperty('--whitish', "#2f2f2f")
        guessContainer.style.color = "#f7f7f7"
        statsBox.style.color = "#f7f7f7"
        instructionsBox.style.color = "#f7f7f7"
        winBox.style.color = "#f7f7f7"
        loseBox.style.color = "#f7f7f7"
    } else {
        darkMode = "off"
        document.documentElement.style.setProperty('--whitish', "#f7f7f7")
        guessContainer.style.color = "#000000"
        statsBox.style.color = "#000000"
        instructionsBox.style.color = "#000000"
        winBox.style.color = "#000000"
        loseBox.style.color = "#000000"
    }

    preserveDarkMode()
})

// Instructions
const instructionsClose = document.querySelector('.instr-close')

if (instructionsClose) {
    instructionsClose.addEventListener('click', () => {
        instructionsBox.style.display = "none"
        instructions = "read"
        preserveInstructions()
    })
}

const infoBTN = document.querySelector('.info-button')
infoBTN.addEventListener('click', () => {
    instructionsBox.style.display = "flex"
})

// Language
const es = document.querySelector('.es')
const en = document.querySelector('.en')
const english = document.querySelector('.english')
const spanish = document.querySelector('.spanish')

if(english) {
    english.addEventListener('click', () => {
        en.style.display = "flex"
        es.style.display = "none"
    })
}

if(spanish) {
    spanish.addEventListener('click', () => {
        es.style.display = "flex"
        en.style.display = "none"
    })
}

// Stats

const statsBTN = document.querySelector('.stats-button')
statsBTN.addEventListener('click', () => {
    statsBox.style.display = "flex"
})

const statsClose = document.querySelector('.stats-close')

statsClose.addEventListener('click', () => {
    statsBox.style.display = "none"
})

// Search players & autocomplete & guess

const search = document.querySelector('#hcraes')
const matchList = document.querySelector('.match-list')
search.placeholder = `Adivina... Tienes ${guesses} intentos`

let possibleGuesses

const searchPlayers = () => { 
    let matches = players.filter(player => {
        const regex = new RegExp(`^${search.value}`, 'gi')
        return player.name.match(regex) ||  player.spelling.match(regex) || player.jerseyName.match(regex) || player.lastName.match(regex)
    })
        
    if (search.value === "") {
        matches = []
        matchList.innerHTML = ''
        matchList.style.display = "none"
    }

    if (matches.length > 0) {
        const matchHTML = matches
            .map(
                match =>
                `<div class="match">${match.name}</div>`
            )
            .join('')

        matchList.innerHTML = matchHTML

        matchList.style.display = "block"
    }

    possibleGuesses = document.querySelectorAll('.match')
    const guessContainer = document.querySelector('.guess-container')

    possibleGuesses.forEach(possibleGuess => {
        possibleGuess.addEventListener('click', () => {
            matchList.innerHTML = ""
            matchList.style.display = "none"
            let guess = players.find((player) => player.name === possibleGuess.innerHTML)

            if (attempts === 1) {
                gtag ('event', 'game_started')
            }

            guessContainer.style.display = "block"
            guessContainer.innerHTML += `
            <div class="guess-row guess-row-${attempts}" id="guess${attempts}">
                <div class="jersey-name guess-box">${guess.jerseyName}</div>
                <div class="line"></div>
                <div class="team guess-box" id="team${attempts}">${guess.team}</div>
                <div class="line"></div>
                <div class="position guess-box" id="position${attempts}">${guess.position}</div>
                <div class="line"></div>
                <div class="number guess-box" id="number${attempts}">${guess.number}</div>
                <div class="line"></div>
                <div class="year guess-box" id="year${attempts}">${guess.year}</div>
                <div class="line"></div>
                <div class="country guess-box" id="country${attempts}">${guess.country}</div>
                <div class="line"></div>
                <div class="height guess-box" id="height${attempts}">${guess.height}cm</div>
            </div>    
            `

            let guessRow = document.querySelector('#guess'+attempts)
            guessRow.classList.add("guess-row-animation")

            let previousAttempt = attempts - 1
            let previousGuessRow = document.querySelector('#guess'+previousAttempt)
            if (previousGuessRow) {
                previousGuessRow.classList.remove("guess-row-animation")
            }
            setTimeout(function(){ guessRow.classList.remove("guess-row-animation") }, 500);
            let team = document.querySelector('#team'+attempts)
            let position = document.querySelector('#position'+attempts)
            let number = document.querySelector('#number'+attempts)
            let year = document.querySelector('#year'+attempts)
            let country = document.querySelector('#country'+attempts)
            let height = document.querySelector('#height'+attempts)

            if (guess.jerseyName === answer.jerseyName) {
                guessRow.classList.add('purple')
            }

            if (guess.team === answer.team) {
                team.classList.add('purple')
            }

            if (guess.position === answer.position) {
                position.classList.add('purple')
            }

            if (guess.position === answer.close[0]) {
                position.classList.add('yellow')
            } else if (guess.position === answer.close[1]) {
                position.classList.add('yellow')
            } if (guess.position === answer.close[2]) {
                position.classList.add('yellow')
            }

            if (guess.number === answer.number) {
                number.classList.add('purple')
            }

            if (guess.number === answer.number + 1 || guess.number === answer.number + 2 || guess.number === answer.number - 1 || guess.number === answer.number - 2) {
                number.classList.add('yellow')
            }

            if (guess.number > answer.number) {
                number.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.number < answer.number) {
                number.innerHTML += '<i class="arrow up"></i>'
            }

            if (guess.year === answer.year) {
                year.classList.add('purple')
            }

            if (guess.year === answer.year + 1 || guess.year === answer.year + 2 || guess.year === answer.year - 1 || guess.year === answer.year - 2) {
                year.classList.add('yellow')
            }

            if (guess.year > answer.year) {
                year.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.year < answer.year) {
                year.innerHTML += '<i class="arrow up"></i>'
            }

            if (guess.country === answer.country) {
                country.classList.add('purple')
            }

            if (guess.country === answer.near[0]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[1]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[2]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[3]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[4]) {
                country.classList.add('yellow')
            } else if (guess.country === answer.near[5]) {
                country.classList.add('yellow')
            }

            if (guess.height === answer.height) {
                height.classList.add('purple')
            }

            if (guess.height === answer.height + 1 || guess.height === answer.height + 2 || guess.height === answer.height - 1 || guess.height === answer.height - 2) {
                height.classList.add('yellow')
            }

            if (guess.height > answer.height) {
                height.innerHTML += '<i class="arrow down"></i>'
            }

            if (guess.height < answer.height) {
                height.innerHTML += '<i class="arrow up"></i>'
            }

            attempts += 1
            guesses -= 1
            search.placeholder = `Te quedan ${guesses} intentos`
            search.value = ""

            checkGuess(guess)
            handleLose(guess)
            preserveGameState()
        })
    })
}

search.addEventListener('input', () => {
    searchPlayers(search.value)
})

// Handle enter key
search.addEventListener("keypress", (event)=> {
    if (event.keyCode === 13) {
        possibleGuesses[0].click()
    }
})

// Win & lose

function countdown() {
    setInterval(function() {

        const now = new Date().getTime()
    
        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`
    
        
    }, 1000);
}

// Win
const winClose = document.querySelector('.win-close')

if (winClose) {
    winClose.addEventListener('click', () => {
        winBox.style.display = "none"
    })
}

const checkGuess = guess => {
    if (guess.jerseyName === answer.jerseyName) {
        won = "si"
        search.disabled = true

        winBox.style.display = "flex"
        winBox.innerHTML = `
        <i class="fa-solid fa-xmark win-close"></i>
        <div class="win-text">¡Has ganado!</div>
        <div class="player">
            <div class="player-jersey">
                <svg width="512" height="380" viewBox="0 0 512 380" fill="none" xmlns="http://www.w3.org/2000/svg" class="jersey">
                <path d="M129.057 0.945068L3.51363 141.394C-1.23837 146.711 -1.16137 154.772 3.69063 159.997L58.5276 219.05C63.7376 224.66 72.5176 224.963 78.0996 219.723L129.057 171.894H141.366V0.945068H129.057Z" fill="white"/>
                <path d="M255.995 0.945068H129.057V365.245C129.057 372.873 135.24 379.056 142.868 379.056H369.13C376.758 379.056 382.941 372.873 382.941 365.245V0.945068H255.995Z" fill="white"/>
                <path d="M508.306 160.002L453.475 219.046C448.268 224.667 439.484 224.957 433.904 219.723L382.94 171.894H370.634V0.950066H382.94L508.485 141.398C513.236 146.716 513.167 154.768 508.306 160.002Z" fill="white"/>
                <path d="M255.995 0.945068V379.056H369.13C376.758 379.056 382.941 372.873 382.941 365.245V0.945068H255.995Z" fill="white"/>
                </svg>
            </div>

            <div class="win-text player-name">${answerName}</div>
            <div class="win-text player-number">${answer.number}</div>
        </div>
        <div class="win-text" id="timer"></div>
        <img src="${answer.image}" alt="${answerName}" class="win-img">
        `

        const closeBTN = document.querySelector('.win-close')

        closeBTN.addEventListener('click', () => {
            winBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`

        countdown()
        preserveWin()
        updateGames()
        updateStats()

        gtag ('event', 'game_won', {
            'number_guesses' : attempts
        })
    }
    
}

// Lose
const loseClose = document.querySelector('.lose-close')

if (loseClose) {
    loseClose.addEventListener('click', () => {
        loseBox.style.display = "none"
    })
}

const handleLose = guess => {
    if (attempts > 7 && guess.jerseyName != answer.jerseyName) {
        lost = "si"
        search.disabled = true

        loseBox.style.display = "flex"
        loseBox.innerHTML += `
            <i class="fa-solid fa-xmark lose-close"></i>
            <div class="lose-text">Has perdido :(</div>
            <div class="lose-text" id="timer"></div>
        `

        const closeBTN = document.querySelector('.lose-close')

        closeBTN.addEventListener('click', () => {
            loseBox.style.display = "none"
        })

        const now = new Date().getTime()

        const timeLeft = tomorrow - now
    
        const hoursOne = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutesOne = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        const secondsOne = Math.floor((timeLeft % (1000 * 60)) / 1000)
    
        function makeMeTwoDigits(n){
            return (n < 10 ? "0" : "") + n;
        }
    
        const hours = makeMeTwoDigits(hoursOne)
        const minutes = makeMeTwoDigits(minutesOne)
        const seconds = makeMeTwoDigits(secondsOne)
    
        document.getElementById("timer").innerHTML = "Vuelve en " + hours + ":" + minutes + ":" + seconds
        search.placeholder = `Vuelve en ${hours}:${minutes}:${seconds}`
        
        countdown()
        preserveLose()
        updateGames()
        updateStats()
        gtag ('event', 'game_lost')
    } 
}

if (won === "si") {
    search.disabled = true
    winBox.style.display = "flex"
    countdown()
}

if (lost === "si") {
    search.disabled = true
    loseBox.style.display = "flex"
    countdown()
}
