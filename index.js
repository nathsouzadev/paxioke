const musics = [
  {
    MABH: "26232",
    TENBH: "12:51",
    TACGIA: "The Strokes",
  },
  {
    MABH: "24371",
    TENBH: "22",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18750",
    TENBH: "23",
    TACGIA: "Mike Will Made-It ft. Miley Cyrus, Wiz Khalifa, Juicy J",
  },
  {
    MABH: "2821",
    TENBH: "1406",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "26068",
    TENBH: "1973",
    TACGIA: "James Blunt",
  },
  {
    MABH: "18360",
    TENBH: "1979",
    TACGIA: "Smashing Pumpkins",
  },
  {
    MABH: "7481",
    TENBH: "1997",
    TACGIA: "Hateen",
  },
  {
    MABH: "24867",
    TENBH: "1999",
    TACGIA: "Charlie XCX & Troye Sivan",
  },
  {
    MABH: "30479",
    TENBH: "2050",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "24341",
    TENBH: "07-11",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "4706",
    TENBH: "(EVERYTHING I DO) I DO IT FOR YOU",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "4908",
    TENBH: "(I CAN'T GET NO) SATISFACTION",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "4910",
    TENBH: "(I GOT YOU) I FEEL GOOD",
    TACGIA: "James Brown",
  },
  {
    MABH: "24582",
    TENBH: "(I JUST) DIED IN YOUR ARMS",
    TACGIA: "Cutting Crew",
  },
  {
    MABH: "9121",
    TENBH: "(IF THERE WAS) ANY OTHER WAY",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "18081",
    TENBH: "(JUST LIKE) STARTING OVER",
    TACGIA: "John Lennon",
  },
  {
    MABH: "9269",
    TENBH: "(SITTIN' ON) THE DOCK OF THE BAY",
    TACGIA: "Otis Redding",
  },
  {
    MABH: "24948",
    TENBH: "(YOU MAKE ME FEEL LIKE) NATURAL WOMAN",
    TACGIA: "Aretha Franklin",
  },
  {
    MABH: "24682",
    TENBH: "(YOU'RE THE) DEVIL IN DISGUISE",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24904",
    TENBH: "1, 2 STEP",
    TACGIA: "Ciara & Missy Elliott",
  },
  {
    MABH: "33110",
    TENBH: "10 ANOS",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30594",
    TENBH: "10 BEIJOS DE RUA",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "26043",
    TENBH: "10,000 HOURS",
    TACGIA: "Dan + Shay, Justin Bieber",
  },
  {
    MABH: "33039",
    TENBH: "100% VOCÊ",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "15441",
    TENBH: "11 VIDAS",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "30685",
    TENBH: "12 HORAS",
    TACGIA: "Dilsinho",
  },
  {
    MABH: "30811",
    TENBH: "120, 150, 200",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33947",
    TENBH: "126 CABIDES",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "2781",
    TENBH: "16 TONELADAS",
    TACGIA: "Funk Como Le Gusta",
  },
  {
    MABH: "18510",
    TENBH: "18 AND LIFE",
    TACGIA: "Skid Row",
  },
  {
    MABH: "9081",
    TENBH: "2 BECOME 1",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "24103",
    TENBH: "2 ON (EXPLICIT)",
    TACGIA: "Tinashe & Schoolboy Q",
  },
  {
    MABH: "3288",
    TENBH: "20 POUCOS ANOS",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "24235",
    TENBH: "21 GUNS",
    TACGIA: "Green Day",
  },
  {
    MABH: "33605",
    TENBH: "2345 MEIA 78",
    TACGIA: "Gabriel O Pensador",
  },
  {
    MABH: "4060",
    TENBH: "24 HORAS NO AR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "15881",
    TENBH: "24 HORAS POR DIA",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "18705",
    TENBH: "24K MAGIC",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "24583",
    TENBH: "3 (THREE)",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "30834",
    TENBH: "3 BATIDAS",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "15161",
    TENBH: "360 O ARROCHA DO PODER",
    TACGIA: "Thiago Brava",
  },
  {
    MABH: "33373",
    TENBH: "365 DIAS",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "26084",
    TENBH: "4 MINUTES",
    TACGIA: "Madonna ft. Justin Timberlake & Timbaland",
  },
  {
    MABH: "33886",
    TENBH: "40 GRAUS DE AMOR",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "33946",
    TENBH: "50 REAIS",
    TACGIA: "Naiara Azevedo part. Maiara e Maraisa",
  },
  {
    MABH: "30090",
    TENBH: "50/50",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30724",
    TENBH: "500 METROS",
    TACGIA: "Paula Mattos e Lucas Lucco",
  },
  {
    MABH: "4501",
    TENBH: "500 MILES",
    TACGIA: "Peter, Paul and Mary",
  },
  {
    MABH: "3551",
    TENBH: "60 DIAS APAIXONADO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "15001",
    TENBH: "60 SEGUNDOS",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31013",
    TENBH: "60 SEGUNDOS",
    TACGIA: "CPM 22",
  },
  {
    MABH: "24809",
    TENBH: "7 RINGS",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "24397",
    TENBH: "7 YEARS",
    TACGIA: "Lukas Graham",
  },
  {
    MABH: "24939",
    TENBH: "8675309 JENNY",
    TACGIA: "Tommy Tutone",
  },
  {
    MABH: "24683",
    TENBH: "9 TO 5",
    TACGIA: "Dolly Parton",
  },
  {
    MABH: "24189",
    TENBH: "93 MILLION MILES",
    TACGIA: "Jason Mraz",
  },
  {
    MABH: "33353",
    TENBH: "99 POR CENTO",
    TACGIA: "Fiduma e Jeca part. Munhoz e Mariano",
  },
  {
    MABH: "3861",
    TENBH: "A AMIZADE",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "3941",
    TENBH: "A BANDA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "3001",
    TENBH: "A BANDA DO ZE PRETINHO",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "15982",
    TENBH: "A BATUCADA DOS NOSSOS TANTÂS",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "18511",
    TENBH: "A BEAUTIFUL LIE",
    TACGIA: "30 Seconds To Mars",
  },
  {
    MABH: "15282",
    TENBH: "A BELA E O FERA",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "6036",
    TENBH: "A BOMBA",
    TACGIA: "Braga Boys",
  },
  {
    MABH: "7281",
    TENBH: "A CAMISA E O BOTÃO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "7891",
    TENBH: "A CANÇÃO TOCOU NA HORA ERRADA",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "1401",
    TENBH: "A CARTA",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30053",
    TENBH: "A CARTA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33398",
    TENBH: "A CARTA DE LARISSA",
    TACGIA: "Felipe e Ferrari",
  },
  {
    MABH: "30054",
    TENBH: "A CASA",
    TACGIA: "Vinicius de Moraes",
  },
  {
    MABH: "1371",
    TENBH: "A CASA CAIU",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "7283",
    TENBH: "A CASA DO SOL NASCENTE",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "30948",
    TENBH: "A CASA É SUA",
    TACGIA: "Casa Worship",
  },
  {
    MABH: "30525",
    TENBH: "A CERA",
    TACGIA: "O Surto",
  },
  {
    MABH: "9082",
    TENBH: "A CERTAIN SMILE",
    TACGIA: "Johnny Mathis",
  },
  {
    MABH: "30363",
    TENBH: "A CIGANA",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "33111",
    TENBH: "A COR DA ESPERANÇA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "7482",
    TENBH: "A CRUZ",
    TACGIA: "Carlos Dafé",
  },
  {
    MABH: "7284",
    TENBH: "A CRUZ E A ESPADA",
    TACGIA: "RPM",
  },
  {
    MABH: "6882",
    TENBH: "A CRUZ QUE CARREGO",
    TACGIA: "Evaldo Braga",
  },
  {
    MABH: "33948",
    TENBH: "A CULPA É DA BEBIDA",
    TACGIA: "Fred e Gustavo part. Wesley Safadão",
  },
  {
    MABH: "30480",
    TENBH: "A CULPA É DELE",
    TACGIA: "Marília Mendonça part. Maiara e Maraisa",
  },
  {
    MABH: "30251",
    TENBH: "A CULPA É SUA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6802",
    TENBH: "A CURA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "33772",
    TENBH: "A DAMA DA NOITE",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "6761",
    TENBH: "A DAMA DE VERMELHO",
    TACGIA: "Duduca e Dalvan",
  },
  {
    MABH: "33875",
    TENBH: "A DAMA E O VAGABUNDO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "1911",
    TENBH: "A DANÇA",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "3942",
    TENBH: "A DANÇA DA SENSUAL",
    TACGIA: "Cheiro de Amor",
  },
  {
    MABH: "3821",
    TENBH: "A DANÇA DA VASSOURA",
    TACGIA: "Molejo",
  },
  {
    MABH: "2511",
    TENBH: "A DAY IN THE LIFE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "6803",
    TENBH: "A DESCONHECIDA",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "9575",
    TENBH: "A DEUS EU PEÇO",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "6401",
    TENBH: "A DISTÂNCIA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6041",
    TENBH: "A DOIS PASSOS DO PARAÍSO",
    TACGIA: "Blitz",
  },
  {
    MABH: "4461",
    TENBH: "A DOR DESSE AMOR",
    TACGIA: "KLB",
  },
  {
    MABH: "6482",
    TENBH: "A ESTRADA",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "3981",
    TENBH: "A FEIRA",
    TACGIA: "O Rappa",
  },
  {
    MABH: "6442",
    TENBH: "A FERRO E FOGO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6842",
    TENBH: "À FLOR DA PELE",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "7145",
    TENBH: "A FLOR DO MEU BAIRRO",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "24966",
    TENBH: "A FOOL SUCH AS I",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "6642",
    TENBH: "A FORÇA DA PAIXÃO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "3502",
    TENBH: "A FORÇA DO AMOR",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "3002",
    TENBH: "A FÓRMULA DO AMOR",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "3301",
    TENBH: "À FRANCESA",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "7505",
    TENBH: "A GALINHA MAGRICELA",
    TACGIA: "A Turma do Balão Mágico",
  },
  {
    MABH: "4381",
    TENBH: "A GARAGEM DA VIZINHA",
    TACGIA: "Sandro e Gustavo",
  },
  {
    MABH: "7042",
    TENBH: "A GAROTA DO BAILE",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4341",
    TENBH: "A GATA DO MILÊNIO",
    TACGIA: "Daniel",
  },
  {
    MABH: "1762",
    TENBH: "A GENTE FAZ A FESTA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "30895",
    TENBH: "A GENTE FEZ AMOR",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "3822",
    TENBH: "A GENTE FICA SEM SE AMAR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30889",
    TENBH: "A GENTE NÃO CONSEGUE SE AMAR",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30481",
    TENBH: "A GENTE NÃO TÁ JUNTO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33174",
    TENBH: "A GENTE NEM FICOU",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "4261",
    TENBH: "A GENTE SE ENTREGA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "18466",
    TENBH: "A GIRL LIKE YOU",
    TACGIA: "Edwyn Collins",
  },
  {
    MABH: "6804",
    TENBH: "A GOSTOSONA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "7043",
    TENBH: "A GRANDE FAMÍLIA",
    TACGIA: "Dudu Nobre",
  },
  {
    MABH: "4421",
    TENBH: "A GUERRA DOS MENINOS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4851",
    TENBH: "A HARD DAY'S NIGHT",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "1962",
    TENBH: "A HISTÓRIA DE LILY BRAUN",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "1050",
    TENBH: "A HISTÓRIA DE UMA GATA",
    TACGIA: "Os Saltimbancos",
  },
  {
    MABH: "33175",
    TENBH: "A HORA É AGORA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "9083",
    TENBH: "A HORSE WITH NO NAME",
    TACGIA: "America",
  },
  {
    MABH: "33499",
    TENBH: "A IGREJA VEM",
    TACGIA: "Anderson Freire",
  },
  {
    MABH: "33531",
    TENBH: "A ILHA",
    TACGIA: "Djavan",
  },
  {
    MABH: "33874",
    TENBH: "A JANELA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6242",
    TENBH: "A JIRIPOCA VAI PIAR",
    TACGIA: "Daniel",
  },
  {
    MABH: "24928",
    TENBH: "A KIND OF MAGIC",
    TACGIA: "Queen",
  },
  {
    MABH: "6002",
    TENBH: "A LENDA",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "1001",
    TENBH: "A LHE ESPERAR",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "18825",
    TENBH: "A LITTLE LESS CONVERSATION",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "9084",
    TENBH: "A LITTLE RESPECT",
    TACGIA: "Erasure",
  },
  {
    MABH: "6521",
    TENBH: "A LOBA",
    TACGIA: "Alcione",
  },
  {
    MABH: "33027",
    TENBH: "A LOIRA DO CARRO BRANCO",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "1403",
    TENBH: "A LOUCA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "4382",
    TENBH: "A LUA E EU",
    TACGIA: "Pixote",
  },
  {
    MABH: "30055",
    TENBH: "A LUA E EU",
    TACGIA: "Cassiano",
  },
  {
    MABH: "6843",
    TENBH: "A LUA ME TRAIU",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "6081",
    TENBH: "A LUA QUE EU TE DEI",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "7487",
    TENBH: "A LUZ DE TIETA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "6483",
    TENBH: "A LUZ QUE ACENDE O OLHAR",
    TACGIA: "Deborah Blando",
  },
  {
    MABH: "6161",
    TENBH: "A MAÇÃ",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "4342",
    TENBH: "A MAIS PEDIDA",
    TACGIA: "Raimundos",
  },
  {
    MABH: "30091",
    TENBH: "A MALA É FALSA",
    TACGIA: "Felipe Araújo part. Henrique e Juliano",
  },
  {
    MABH: "6243",
    TENBH: "A MELHOR BANDA DE TODOS OS TEMPOS DA ÚLTIMA SEMANA",
    TACGIA: "Titãs",
  },
  {
    MABH: "30056",
    TENBH: "A MELHOR DO BAILE",
    TACGIA: "Dani Russo",
  },
  {
    MABH: "9374",
    TENBH: "A MENINA DO SUBURBIO",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "33604",
    TENBH: "A METADE DA MAÇÃ",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "24889",
    TENBH: "A MILLION DREAMS",
    TACGIA: "The Greatest Showman (Musical)",
  },
  {
    MABH: "33485",
    TENBH: "A MINHA HISTÓRIA",
    TACGIA: "José Augusto",
  },
  {
    MABH: "33768",
    TENBH: "A MINHA MÃE DEIXA",
    TACGIA: "Banda Vingadora",
  },
  {
    MABH: "3862",
    TENBH: "A MINHA VIDA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "6244",
    TENBH: "A MIRAGEM",
    TACGIA: "Marcus Viana",
  },
  {
    MABH: "26200",
    TENBH: "A MOMENT LIKE THIS",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "3982",
    TENBH: "A MULHER EM MIM",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "15242",
    TENBH: "A MULHER QUE EU AMO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7289",
    TENBH: "A MUSA DA PRAIA",
    TACGIA: "Inimigos da HP",
  },
  {
    MABH: "6443",
    TENBH: "A MUSA DAS MINHAS CANÇÕES",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "3601",
    TENBH: "A NAMORADA",
    TACGIA: "Carlinhos Brown",
  },
  {
    MABH: "7893",
    TENBH: "A NAMORADA QUE SONHEI",
    TACGIA: "Nilton César",
  },
  {
    MABH: "18512",
    TENBH: "A NEW DAY HAS COME",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "24973",
    TENBH: "A NIGHT TO REMEMBER",
    TACGIA: "High School Musical",
  },
  {
    MABH: "26011",
    TENBH: "A NIGHT TO REMEMBER",
    TACGIA: "Shalamar",
  },
  {
    MABH: "33030",
    TENBH: "A NOITE",
    TACGIA: "Tiê",
  },
  {
    MABH: "3503",
    TENBH: "A NOITE DO MEU BEM",
    TACGIA: "Dolores Duran",
  },
  {
    MABH: "33130",
    TENBH: "A NOITE NOS ESPERA",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "30597",
    TENBH: "A NOITE TODA",
    TACGIA: "Micael",
  },
  {
    MABH: "6444",
    TENBH: "A NOITE VAI CHEGAR",
    TACGIA: "Lady Zu",
  },
  {
    MABH: "4061",
    TENBH: "A NOVA LOIRA DO TCHAN",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "30269",
    TENBH: "A OUTRA (MISTURINHA)",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30257",
    TENBH: "A PÁGINA VIROU",
    TACGIA: "Joelma",
  },
  {
    MABH: "7044",
    TENBH: "À PALO SECO",
    TACGIA: "Belchior",
  },
  {
    MABH: "6163",
    TENBH: "A PAZ",
    TACGIA: "Zizi Possi",
  },
  {
    MABH: "33872",
    TENBH: "A PAZ (HEAL THE WORLD)",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "33627",
    TENBH: "A PAZ DESSE AMOR",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "3736",
    TENBH: "A POBREZA",
    TACGIA: "Leno e Lilian",
  },
  {
    MABH: "33304",
    TENBH: "A PONTE (PART MARCUS VIANNA)",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "3003",
    TENBH: "A PRAÇA",
    TACGIA: "Ronnie Von",
  },
  {
    MABH: "30093",
    TENBH: "A PRAGA",
    TACGIA: "Haikaiss",
  },
  {
    MABH: "30805",
    TENBH: "A PRAIA",
    TACGIA: "Mastruz com Leite",
  },
  {
    MABH: "7045",
    TENBH: "A PRETENDIDA",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "3451",
    TENBH: "A PRIMEIRA VISTA",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "3351",
    TENBH: "A PROMESSA",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "4222",
    TENBH: "A PRÓXIMA VÍTIMA",
    TACGIA: "Wando",
  },
  {
    MABH: "4262",
    TENBH: "A RAPOSA E AS UVAS",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "6644",
    TENBH: "A REDE",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "15023",
    TENBH: "A RITA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "33628",
    TENBH: "A ROSA E O BEIJA FLOR",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "30609",
    TENBH: "A SAUDADE É UMA PEDRA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "7894",
    TENBH: "A SETA E O ALVO",
    TACGIA: "Paulinho Moska",
  },
  {
    MABH: "30947",
    TENBH: "A SOLIDÃO É UMA RESSACA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3352",
    TENBH: "A SOMBRA DA MALDADE",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "6445",
    TENBH: "A SUA MANEIRA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "33401",
    TENBH: "À SUA VISTA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "24118",
    TENBH: "A THOUSAND MILES",
    TACGIA: "Vanessa Carlton",
  },
  {
    MABH: "24346",
    TENBH: "A THOUSAND YEARS",
    TACGIA: "Christina Perri",
  },
  {
    MABH: "3005",
    TENBH: "A VIAGEM",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "6245",
    TENBH: "A VIDA DO VIAJANTE",
    TACGIA: "Gonzaguinha & Luiz Gonzaga",
  },
  {
    MABH: "3452",
    TENBH: "A VIDA NÃO PRESTA",
    TACGIA: "Leo Jaime",
  },
  {
    MABH: "7292",
    TENBH: "A VIDA TEM DESSAS COISAS",
    TACGIA: "Ritchie",
  },
  {
    MABH: "3943",
    TENBH: "A VOLTA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30819",
    TENBH: "A VOLTA DA GAFIEIRA",
    TACGIA: "Alcione",
  },
  {
    MABH: "3453",
    TENBH: "A VOLTA DO BOÊMIO",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "30270",
    TENBH: "À VONTADE",
    TACGIA: "Ivete Sangalo part. Wesley Safadão",
  },
  {
    MABH: "4666",
    TENBH: "A WHITER SHADE OF PALE",
    TACGIA: "Procol Harum",
  },
  {
    MABH: "9001",
    TENBH: "A WHOLE NEW WORLD",
    TACGIA: "Peabo Bryson & Regina Belle",
  },
  {
    MABH: "18645",
    TENBH: "A.D.I.D.A.S",
    TACGIA: "Korn",
  },
  {
    MABH: "9379",
    TENBH: "ABAFA O CASO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "7046",
    TENBH: "ABALOU",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "3692",
    TENBH: "ABANDONADA",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "18082",
    TENBH: "ABC",
    TACGIA: "Jackson 5",
  },
  {
    MABH: "1984",
    TENBH: "ABECEDÁRIO DA XUXA",
    TACGIA: "Xuxa",
  },
  {
    MABH: "30454",
    TENBH: "ABELHA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "18751",
    TENBH: "ABOUT A GIRL",
    TACGIA: "Nirvana",
  },
  {
    MABH: "3985",
    TENBH: "ABRÁZAME ASÍ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30271",
    TENBH: "ABRE A JANELA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33606",
    TENBH: "ABRE CORAÇÃO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30057",
    TENBH: "ABRE O PORTÃO QUE EU CHEGUEI",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "9589",
    TENBH: "ABRE O SOM",
    TACGIA: "Bonde do Maluco",
  },
  {
    MABH: "2662",
    TENBH: "ABRE-TE SÉSAMO",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "6402",
    TENBH: "ABRI A PORTA",
    TACGIA: "A Cor Do Som",
  },
  {
    MABH: "3693",
    TENBH: "ABSOLUTA",
    TACGIA: "Negritude Júnior",
  },
  {
    MABH: "33629",
    TENBH: "ABSOLUTA",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "33032",
    TENBH: "ABUSO DE PODER",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "33607",
    TENBH: "ABUSOU DO MEU CORPINHO",
    TACGIA: "Mateus e Cristiano",
  },
  {
    MABH: "30725",
    TENBH: "ACABOU",
    TACGIA: "Forró Boys",
  },
  {
    MABH: "1501",
    TENBH: "ACABOU O AMOR",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "4343",
    TENBH: "AÇAÍ",
    TACGIA: "Djavan",
  },
  {
    MABH: "31049",
    TENBH: "ACASO (VAI VER QUE UM DIA A GENTE SE ENCONTRA)",
    TACGIA: "Vitor Fernandes",
  },
  {
    MABH: "18167",
    TENBH: "ACCIDENTALLY IN LOVE",
    TACGIA: "Counting Crows",
  },
  {
    MABH: "18513",
    TENBH: "ACE OF SPADES",
    TACGIA: "Motörhead",
  },
  {
    MABH: "30272",
    TENBH: "ACEITA QUE DÓI MENOS",
    TACGIA: "Trio Parada Dura e Marília Mendonça",
  },
  {
    MABH: "1642",
    TENBH: "ACELERA AÊ",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "7897",
    TENBH: "ACELEROU",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "30686",
    TENBH: "ACELEROU",
    TACGIA: "Djavan",
  },
  {
    MABH: "30273",
    TENBH: "ACERTOU A MÃO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31048",
    TENBH: "ACERTOU NA MOSCA",
    TACGIA: "Tierry ft. Gusttavo Lima",
  },
  {
    MABH: "4852",
    TENBH: "ACHY BREAKY HEART",
    TACGIA: "Billy Ray Cyrus",
  },
  {
    MABH: "6202",
    TENBH: "ACIMA DO SOL",
    TACGIA: "Skank",
  },
  {
    MABH: "6886",
    TENBH: "ACONTECIMENTOS",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "30121",
    TENBH: "ACORDANDO O PRÉDIO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "6322",
    TENBH: "ACORRENTADO EM VOCÊ",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33325",
    TENBH: "AÇÚCAR EM MIM",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "7493",
    TENBH: "ADEUS SOLIDÃO",
    TACGIA: "Carmen Silva",
  },
  {
    MABH: "3504",
    TENBH: "ADIVINHA O QUÊ?",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "1985",
    TENBH: "ADMIRÁVEL CHIP NOVO",
    TACGIA: "Pitty",
  },
  {
    MABH: "3505",
    TENBH: "ADMIRÁVEL GADO NOVO",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "7047",
    TENBH: "ADOCICA",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "6562",
    TENBH: "ADOLETA",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "24972",
    TENBH: "ADORE YOU",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "4021",
    TENBH: "ADORO AMAR VOCÊ",
    TACGIA: "Daniel",
  },
  {
    MABH: "1643",
    TENBH: "ADRENALINA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30508",
    TENBH: "ADULTÉRIO",
    TACGIA: "Mr. Catra",
  },
  {
    MABH: "24430",
    TENBH: "ADVENTURE OF A LIFETIME",
    TACGIA: "Coldplay",
  },
  {
    MABH: "9241",
    TENBH: "ADVERTISING SPACE",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "2444",
    TENBH: "ADVOGADO FIEL",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "18487",
    TENBH: "AERIALS",
    TACGIA: "System of A Down",
  },
  {
    MABH: "30612",
    TENBH: "AEROMOÇA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "9202",
    TENBH: "AFRICA",
    TACGIA: "Toto",
  },
  {
    MABH: "18752",
    TENBH: "AFTER ALL",
    TACGIA: "Al Jarreau",
  },
  {
    MABH: "26186",
    TENBH: "AFTER HOURS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "18687",
    TENBH: "AFTER THE LOVE HAS GONE",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "5858",
    TENBH: "AFTERGLOW",
    TACGIA: "INXS",
  },
  {
    MABH: "4853",
    TENBH: "AGAIN",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "4854",
    TENBH: "AGAIN",
    TACGIA: "Lenny Kravitz",
  },
  {
    MABH: "26102",
    TENBH: "AGAIN",
    TACGIA: "Noah Cyrus ft. XXXTentacion",
  },
  {
    MABH: "18465",
    TENBH: "AGAINST ALL ODDS",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "4845",
    TENBH: "AGAINST ALL ODDS (TAKE A LOOK AT ME NOW)",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "4344",
    TENBH: "AGAMAMOU",
    TACGIA: "Art Popular",
  },
  {
    MABH: "4302",
    TENBH: "AGARRADA EM MIM",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "1182",
    TENBH: "AGENDA",
    TACGIA: "Belo e Ornella di Santis",
  },
  {
    MABH: "33371",
    TENBH: "AGENDA",
    TACGIA: "Beto Guilherme",
  },
  {
    MABH: "4022",
    TENBH: "AGENDA RABISCADA",
    TACGIA: "Cleiton e Camargo",
  },
  {
    MABH: "33354",
    TENBH: "AGITA AÍ",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "33035",
    TENBH: "AGONIA",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "33017",
    TENBH: "AGORA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33630",
    TENBH: "AGORA",
    TACGIA: "Pablo",
  },
  {
    MABH: "1002",
    TENBH: "AGORA CHORA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "33631",
    TENBH: "AGORA É PRA VALER",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "30687",
    TENBH: "AGORA É TUDO MEU",
    TACGIA: "Dennis DJ, MC Kevinho",
  },
  {
    MABH: "1142",
    TENBH: "AGORA EU JÁ SEI",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30094",
    TENBH: "AGORA EU QUERO IR",
    TACGIA: "Anavitória",
  },
  {
    MABH: "1483",
    TENBH: "AGORA EU SEI",
    TACGIA: "Zero e Paulo Ricardo",
  },
  {
    MABH: "33269",
    TENBH: "AGORA EU SEI",
    TACGIA: "Banda Musa do Calypso",
  },
  {
    MABH: "3945",
    TENBH: "AGORA OU NUNCA",
    TACGIA: "Dalvan",
  },
  {
    MABH: "6523",
    TENBH: "AGORA SÓ FALTA VOCÊ",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "30258",
    TENBH: "AGORA VAI SENTAR",
    TACGIA: "MCs Jhowzinho & Kadinho",
  },
  {
    MABH: "30976",
    TENBH: "ÁGUA COM AÇÚCAR",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "7048",
    TENBH: "ÁGUA DE BEBER",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "7293",
    TENBH: "AGUA DE COCO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "1891",
    TENBH: "ÁGUA DE OCEANO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "15163",
    TENBH: "ÁGUA NA BOCA",
    TACGIA: "João Lucas e Diogo part. MC Koringa",
  },
  {
    MABH: "33402",
    TENBH: "ÁGUA NA BOCA",
    TACGIA: "Tati Zaqui",
  },
  {
    MABH: "30478",
    TENBH: "ÁGUA VIVA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "3006",
    TENBH: "ÁGUAS DE MARÇO",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "4023",
    TENBH: "AGÜENTA CORAÇÃO",
    TACGIA: "José Augusto",
  },
  {
    MABH: "33632",
    TENBH: "AH SE MEU DINHEIRO DESSE",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "33633",
    TENBH: "AH VAGABUNDO",
    TACGIA: "Cavaleiros do Forró",
  },
  {
    MABH: "1491",
    TENBH: "AH, COMO EU AMEI",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "19472",
    TENBH: "AHORA TE PUERDES MARCHAR",
    TACGIA: "Luis Miguel",
  },
  {
    MABH: "33949",
    TENBH: "AI CORAÇÃO",
    TACGIA: "Joelma",
  },
  {
    MABH: "30849",
    TENBH: "AÍ EU BEBO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "1645",
    TENBH: "AÍ JÁ ERA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33036",
    TENBH: "AÍ O HOMEM CHORA",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "15003",
    TENBH: "AI QUE DÓ",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33136",
    TENBH: "AI QUE O AMOR ACONTECE",
    TACGIA: "Humberto e Ronaldo e Bruno & Marrone",
  },
  {
    MABH: "4062",
    TENBH: "AI QUE SAUDADE DOCÊ",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "30448",
    TENBH: "AI QUE SAUDADE ME DÁ",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "1861",
    TENBH: "AI SE EU TE PEGO",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "7050",
    TENBH: "AI, AI, AI",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "6806",
    TENBH: "AINDA BEM",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "33248",
    TENBH: "AINDA BEM",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "3008",
    TENBH: "AINDA É CEDO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "9595",
    TENBH: "AINDA GOSTO DELA",
    TACGIA: "Skank part. Negra Li",
  },
  {
    MABH: "3009",
    TENBH: "AINDA LEMBRO",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "3946",
    TENBH: "AINDA ONTEM CHOREI DE SAUDADE",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "30183",
    TENBH: "AINDA QUEIMA A ESPERANÇA",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "30598",
    TENBH: "AINDA SOU TÃO SEU",
    TACGIA: "Felipe Araújo",
  },
  {
    MABH: "33403",
    TENBH: "AINDA TE AMO",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "18381",
    TENBH: "AIN'T IT FUN",
    TACGIA: "Paramore",
  },
  {
    MABH: "24508",
    TENBH: "AIN'T MY FAULT",
    TACGIA: "Zara Larsson",
  },
  {
    MABH: "18514",
    TENBH: "AIN'T NO MOUNTAIN HIGH ENOUGH",
    TACGIA: "Marvin Gaye & Tammy Terrell",
  },
  {
    MABH: "18251",
    TENBH: "AIN'T NO OTHER MAN",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "18970",
    TENBH: "AIN'T NO SUNSHINE",
    TACGIA: "Bill Withers",
  },
  {
    MABH: "26219",
    TENBH: "AIN'T THAT A KICK IN THE HEAD",
    TACGIA: "Dean Martin",
  },
  {
    MABH: "26121",
    TENBH: "AIN'T TOO PROUD TO BEG",
    TACGIA: "Temptations",
  },
  {
    MABH: "24131",
    TENBH: "AIRPLANES",
    TACGIA: "B.o.B. feat. Hayley Williams",
  },
  {
    MABH: "33486",
    TENBH: "AJAYO",
    TACGIA: "Luiz Caldas",
  },
  {
    MABH: "6888",
    TENBH: "AJEITE O TREM AI",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "30411",
    TENBH: "AJOELHA E CHORA",
    TACGIA: "Tchê Garotos",
  },
  {
    MABH: "33037",
    TENBH: "ALAGADOS",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "33634",
    TENBH: "ALCANÇAR A LIBERDADE",
    TACGIA: "Larissa Manoela",
  },
  {
    MABH: "33975",
    TENBH: "ALCONTECE",
    TACGIA: "Felipe Araújo",
  },
  {
    MABH: "3947",
    TENBH: "ALEGRIA ALEGRIA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "2571",
    TENBH: "ALEJANDRO",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "30113",
    TENBH: "ALELUIA (HALLELUJAH)",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "6246",
    TENBH: "ALÉM DA CAMA",
    TACGIA: "Alcione",
  },
  {
    MABH: "7899",
    TENBH: "ALÉM DE MIM",
    TACGIA: "NX Zero",
  },
  {
    MABH: "9596",
    TENBH: "ALÉM DE NÓS",
    TACGIA: "CPM 22",
  },
  {
    MABH: "15522",
    TENBH: "ALÉM DO ESPELHO",
    TACGIA: "João Nogueira",
  },
  {
    MABH: "7051",
    TENBH: "ALÉM DO HORIZONTE",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "7494",
    TENBH: "ALÉM DO OLHAR",
    TACGIA: "Ivo Pessoa",
  },
  {
    MABH: "33209",
    TENBH: "ALÉM DO SOL ALEM DO MAR",
    TACGIA: "Leonardo",
  },
  {
    MABH: "18826",
    TENBH: "ALFIE",
    TACGIA: "Dionne Warwick",
  },
  {
    MABH: "30726",
    TENBH: "ALGO MAIS (AMANTE)",
    TACGIA: "Xand Avião ft. Gusttavo Lima",
  },
  {
    MABH: "7296",
    TENBH: "ALGUÉM ME DISSE",
    TACGIA: "Anisio Silva",
  },
  {
    MABH: "1004",
    TENBH: "ALGUÉM QUE TE FAZ SORRIR (ACÚSTICO)",
    TACGIA: "Fresno",
  },
  {
    MABH: "30688",
    TENBH: "ALIANÇA",
    TACGIA: "Tribalistas",
  },
  {
    MABH: "33041",
    TENBH: "ALIANÇA NO BOLSO",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "9383",
    TENBH: "ÁLIBI",
    TACGIA: "Djavan",
  },
  {
    MABH: "9598",
    TENBH: "ALICE (NÃO ESCREVA AQUELA CARTA DE AMOR)",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "3738",
    TENBH: "ALINE",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "30773",
    TENBH: "ALINE",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "18083",
    TENBH: "ALIVE",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "18317",
    TENBH: "ALIVE",
    TACGIA: "P.O.D.",
  },
  {
    MABH: "24076",
    TENBH: "ALL ABOUT THAT BASS",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "18184",
    TENBH: "ALL ABOUT US",
    TACGIA: "t.A.t.U.",
  },
  {
    MABH: "18515",
    TENBH: "ALL ALONG THE WATCHTOWER",
    TACGIA: "Jimi Hendrix",
  },
  {
    MABH: "9086",
    TENBH: "ALL AT ONCE",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "4811",
    TENBH: "ALL BY MYSELF",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "18084",
    TENBH: "ALL DAY",
    TACGIA: "Kanye West & T. London & A. Kingdom & Paul McCartney",
  },
  {
    MABH: "18052",
    TENBH: "ALL FOR LOVE",
    TACGIA: "Bryan Adams ft. Sting & Rod Stewart",
  },
  {
    MABH: "4561",
    TENBH: "ALL FOR THE LOVE OF A GIRL",
    TACGIA: "Johnny Horton",
  },
  {
    MABH: "24584",
    TENBH: "ALL FOR YOU",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "9002",
    TENBH: "ALL I ASK OF YOU",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "24684",
    TENBH: "ALL I HAVE TO DO IS DREAM",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "4855",
    TENBH: "ALL I WANNA DO",
    TACGIA: "Sheryl Crow",
  },
  {
    MABH: "2521",
    TENBH: "ALL IN LOVE IS FAIR",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "24462",
    TENBH: "ALL IN MY HEAD (FLEX)",
    TACGIA: "Fifth Harmony ft. Fetty Wap",
  },
  {
    MABH: "18516",
    TENBH: "ALL MY LIFE",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "24922",
    TENBH: "ALL MY LOVE",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "2601",
    TENBH: "ALL MY LOVING",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4676",
    TENBH: "ALL NIGHT LONG",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "9003",
    TENBH: "ALL OF ME",
    TACGIA: "Willie Nelson",
  },
  {
    MABH: "24058",
    TENBH: "ALL OF ME",
    TACGIA: "John Legend",
  },
  {
    MABH: "4856",
    TENBH: "ALL OR NOTHING",
    TACGIA: "O-Town",
  },
  {
    MABH: "9243",
    TENBH: "ALL OUT OF LOVE",
    TACGIA: "Air Supply",
  },
  {
    MABH: "24685",
    TENBH: "ALL SHOOK UP",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "1522",
    TENBH: "ALL STAR",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "2641",
    TENBH: "ALL STAR",
    TACGIA: "Smash Mouth",
  },
  {
    MABH: "4857",
    TENBH: "ALL THAT SHE WANTS",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "5862",
    TENBH: "ALL THE GOOD THINGS (COME TO AN END)",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "2581",
    TENBH: "ALL THE LOVERS",
    TACGIA: "Kylie Minogue",
  },
  {
    MABH: "18085",
    TENBH: "ALL THE SMALL THINGS",
    TACGIA: "Blink 182",
  },
  {
    MABH: "18086",
    TENBH: "ALL THE THINGS SHE SAID",
    TACGIA: "t.A.t.U.",
  },
  {
    MABH: "9087",
    TENBH: "ALL THE THINGS YOU ARE",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "9203",
    TENBH: "ALL THROUGH THE NIGHT",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "18517",
    TENBH: "ALL TIME LOW",
    TACGIA: "The Wanted",
  },
  {
    MABH: "18698",
    TENBH: "ALL WE KNOW",
    TACGIA: "The Chainsmokers ft. Phoebe Ryan",
  },
  {
    MABH: "5864",
    TENBH: "ALL YOU NEED IS LOVE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18646",
    TENBH: "ALLENTOWN",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "6284",
    TENBH: "ALMA",
    TACGIA: "Zélia Duncan",
  },
  {
    MABH: "33626",
    TENBH: "ALMA",
    TACGIA: "Simone",
  },
  {
    MABH: "15043",
    TENBH: "ALMA DE GUERREIRO",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "3011",
    TENBH: "ALMA GEMEA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "33754",
    TENBH: "ALMA GÊMEA",
    TACGIA: "Loubet",
  },
  {
    MABH: "9599",
    TENBH: "ALMA TRANSPARENTE",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "18647",
    TENBH: "ALMOST PARADISE",
    TACGIA: "Mike Reno & Ann Wilson",
  },
  {
    MABH: "4345",
    TENBH: "ALÔ",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30274",
    TENBH: "ALÔ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4063",
    TENBH: "ALÔ ALÔ MARCIANO",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "31027",
    TENBH: "ALÔ AMBEV",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "31034",
    TENBH: "ALÔ EX-AMOR",
    TACGIA: "João Bosco e Gabriel ft. Humberto e Ronaldo",
  },
  {
    MABH: "7495",
    TENBH: "ALO MEU POVO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30082",
    TENBH: "ALÔ MULHERADA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "3823",
    TENBH: "ALÔ PAIXÃO",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "30095",
    TENBH: "ALÔ PORTEIRO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33635",
    TENBH: "ALÔ PORTEIRO",
    TACGIA: "Tayrone Cigano",
  },
  {
    MABH: "30135",
    TENBH: "ALÔ, TÔ NO BAR",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "9088",
    TENBH: "ALONE",
    TACGIA: "Heart",
  },
  {
    MABH: "4677",
    TENBH: "ALONE AGAIN",
    TACGIA: "Gilbert O'Sullivan",
  },
  {
    MABH: "18753",
    TENBH: "ALRIGHT",
    TACGIA: "Supergrass",
  },
  {
    MABH: "30256",
    TENBH: "ALUCINAÇÃO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4423",
    TENBH: "ALUGA-SE",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30259",
    TENBH: "ALVARÁ",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "6361",
    TENBH: "ALVORADA VORAZ",
    TACGIA: "RPM",
  },
  {
    MABH: "4858",
    TENBH: "ALWAYS",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9004",
    TENBH: "ALWAYS",
    TACGIA: "Atlantic Starr",
  },
  {
    MABH: "18088",
    TENBH: "ALWAYS",
    TACGIA: "Blink 182",
  },
  {
    MABH: "18972",
    TENBH: "ALWAYS",
    TACGIA: "Erasure",
  },
  {
    MABH: "24686",
    TENBH: "ALWAYS BE MY BABY",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "4562",
    TENBH: "ALWAYS ON MY MIND",
    TACGIA: "Willie Nelson",
  },
  {
    MABH: "18155",
    TENBH: "ALWAYS ON MY MIND",
    TACGIA: "Pet Shop Boys",
  },
  {
    MABH: "26065",
    TENBH: "ALWAYS ON TIME",
    TACGIA: "Ja Rule ft. Ashanti",
  },
  {
    MABH: "24879",
    TENBH: "ALWAYS REMEMBER US THIS WAY",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "18717",
    TENBH: "ALWAYS SOMEWHERE",
    TACGIA: "Scorpions",
  },
  {
    MABH: "18754",
    TENBH: "AM I THE SAME GIRL",
    TACGIA: "Swing Out Sister",
  },
  {
    MABH: "24045",
    TENBH: "AM I WRONG",
    TACGIA: "Nico & Vinz",
  },
  {
    MABH: "3012",
    TENBH: "AMADA AMANTE",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30482",
    TENBH: "AMADO",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "24585",
    TENBH: "AMANDA",
    TACGIA: "Boston",
  },
  {
    MABH: "4064",
    TENBH: "AMANHÃ",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "4181",
    TENBH: "AMANHÃ",
    TACGIA: "Roberta Miranda e Reginaldo Rossi",
  },
  {
    MABH: "33062",
    TENBH: "AMANHÃ",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "7053",
    TENBH: "AMANHÂ É 23",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "1282",
    TENBH: "AMANHÃ NÃO SE SABE",
    TACGIA: "LS Jack",
  },
  {
    MABH: "3824",
    TENBH: "AMANHÃ TALVEZ",
    TACGIA: "Joanna",
  },
  {
    MABH: "1523",
    TENBH: "AMANHÃ, SEI LÁ",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "30599",
    TENBH: "AMANHECEU PEGUEI A VIOLA",
    TACGIA: "Renato Teixeira",
  },
  {
    MABH: "3825",
    TENBH: "AMANTE À MODA ANTIGA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33870",
    TENBH: "AMANTE LATINO",
    TACGIA: "Sidney Magal",
  },
  {
    MABH: "30058",
    TENBH: "AMANTE NÃO TEM LAR",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3507",
    TENBH: "AMANTE PROFISSIONAL",
    TACGIA: "Herva Doce",
  },
  {
    MABH: "6204",
    TENBH: "AMANTES",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "30059",
    TENBH: "AMANTES E AMIGOS",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "30260",
    TENBH: "AMAR AMEI",
    TACGIA: "MC Don Juan",
  },
  {
    MABH: "3553",
    TENBH: "AMAR É...",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "1832",
    TENBH: "AMAR NÃO É PECADO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "33636",
    TENBH: "AMAR, AMAR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4045",
    TENBH: "AMARELINHA",
    TACGIA: "Art Popular",
  },
  {
    MABH: "33489",
    TENBH: "AMAREMOS",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "3901",
    TENBH: "AMARGURADO",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "3353",
    TENBH: "AMARRADOS",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "31024",
    TENBH: "AMAVA PORRA NENHUMA",
    TACGIA: "Tierry",
  },
  {
    MABH: "4678",
    TENBH: "AMAZING",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "33468",
    TENBH: "AMAZÔNIA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33869",
    TENBH: "AMEI TE VER",
    TACGIA: "Tiago Iorc",
  },
  {
    MABH: "18089",
    TENBH: "AMERICAN IDIOT",
    TACGIA: "Green Day",
  },
  {
    MABH: "24069",
    TENBH: "AMERICAN KIDS",
    TACGIA: "Kenny Chesney",
  },
  {
    MABH: "18090",
    TENBH: "AMERICAN LIFE",
    TACGIA: "Madonna",
  },
  {
    MABH: "9005",
    TENBH: "AMERICAN PIE",
    TACGIA: "Don McLean",
  },
  {
    MABH: "4679",
    TENBH: "AMERICAN WOMAN",
    TACGIA: "Guess Who",
  },
  {
    MABH: "18827",
    TENBH: "AMERICAN WOMAN",
    TACGIA: "Lenny Kravitz",
  },
  {
    MABH: "30276",
    TENBH: "AMIGA",
    TACGIA: "Paula Mattos part. Marília Mendonça",
  },
  {
    MABH: "15164",
    TENBH: "AMIGA DA MINHA IRMÃ",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "2842",
    TENBH: "AMIGA DA MINHA MULHER",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "33104",
    TENBH: "AMIGA LINDA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "18755",
    TENBH: "AMIGA MIA",
    TACGIA: "Alejandro Sanz",
  },
  {
    MABH: "33950",
    TENBH: "AMIGA PARCEIRA",
    TACGIA: "Pikeno e Menor",
  },
  {
    MABH: "1682",
    TENBH: "AMIGA, AMANTE E NAMORADA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "1005",
    TENBH: "AMIGO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "3403",
    TENBH: "AMIGO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7900",
    TENBH: "AMIGO APAIXONADO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33945",
    TENBH: "AMIGO CACHACEIRO",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "1541",
    TENBH: "AMIGO É PRA ESSAS COISAS",
    TACGIA: "Chico Buarque & MPB4",
  },
  {
    MABH: "30813",
    TENBH: "AMIGO ESTOU AQUI",
    TACGIA: "Toy Story",
  },
  {
    MABH: "33477",
    TENBH: "AMIGO LOCUTOR",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "30890",
    TENBH: "AMIGO SEU",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "9385",
    TENBH: "AMIGO SOL, AMIGO LUA",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "30483",
    TENBH: "AMIGO TAXISTA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "7497",
    TENBH: "AMIGO VERDADEIRO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "3454",
    TENBH: "AMIGOS DO PEITO",
    TACGIA: "A Turma do Balão Mágico",
  },
  {
    MABH: "3739",
    TENBH: "AMIGOS PARA SEMPRE",
    TACGIA: "Agnaldo Rayol",
  },
  {
    MABH: "7746",
    TENBH: "AMIGOS PELA FÉ",
    TACGIA: "Anjos de Resgate",
  },
  {
    MABH: "24001",
    TENBH: "AMNESIA",
    TACGIA: "5 Seconds of Summer",
  },
  {
    MABH: "33868",
    TENBH: "AMO ATÉ NO CÉU (HOMENAGEM CRISTIANO ARAÚJO)",
    TACGIA: "Gabriel Gava, Gusttavo Lima, Lucas Lucco & Israel Novaes",
  },
  {
    MABH: "1512",
    TENBH: "AMO NOITE E DIA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33856",
    TENBH: "AMOR A 3",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "7901",
    TENBH: "AMOR ABSOLUTO",
    TACGIA: "Daniel",
  },
  {
    MABH: "9606",
    TENBH: "AMOR ALÉM DA VIDA",
    TACGIA: "Cezar e Paulinho",
  },
  {
    MABH: "30880",
    TENBH: "AMOR ALÉM DA VIDA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30922",
    TENBH: "AMOR ALÉM DA VIDA",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "6890",
    TENBH: "AMOR AMOR",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "1484",
    TENBH: "AMOR BANDIDO",
    TACGIA: "Joanna",
  },
  {
    MABH: "30727",
    TENBH: "AMOR BANDIDO",
    TACGIA: "Lexa e MC Kekel",
  },
  {
    MABH: "33044",
    TENBH: "AMOR CIGANO",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "7298",
    TENBH: "AMOR CLANDESTINO",
    TACGIA: "João Mineiro E Marciano",
  },
  {
    MABH: "1373",
    TENBH: "AMOR COVARDE",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30277",
    TENBH: "AMOR DA SUA CAMA",
    TACGIA: "Felipe Araújo",
  },
  {
    MABH: "6247",
    TENBH: "AMOR DE CARNAVAL",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "15005",
    TENBH: "AMOR DE CHOCOLATE",
    TACGIA: "Naldo Benny (Naldo)",
  },
  {
    MABH: "33637",
    TENBH: "AMOR DE COPO",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "6646",
    TENBH: "AMOR DE ÍNDIO",
    TACGIA: "Beto Guedes",
  },
  {
    MABH: "9387",
    TENBH: "AMOR DE PING PONG",
    TACGIA: "Bruno & Marrone part. Edson e Hudson",
  },
  {
    MABH: "30886",
    TENBH: "AMOR DE PRIMAVERA",
    TACGIA: "Di Paulo e Paulino",
  },
  {
    MABH: "30859",
    TENBH: "AMOR DE QUE",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "4142",
    TENBH: "AMOR DE VERDADE",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30524",
    TENBH: "AMOR DE VERDADE",
    TACGIA: "MC Kekel e MC Rita",
  },
  {
    MABH: "9610",
    TENBH: "AMOR DE VIOLEIRO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30600",
    TENBH: "AMOR DESCARTÁVEL",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "30031",
    TENBH: "AMOR DESENCONTRADO",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "6647",
    TENBH: "AMOR E SEXO",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "4303",
    TENBH: "AMOR ESCONDIDO",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "30060",
    TENBH: "AMOR ESCONDIDO",
    TACGIA: "Fagner",
  },
  {
    MABH: "7903",
    TENBH: "AMOR ETERNO",
    TACGIA: "Jeito Moleque",
  },
  {
    MABH: "30484",
    TENBH: "AMOR FALSO",
    TACGIA: "Aldair Playboy",
  },
  {
    MABH: "31004",
    TENBH: "AMOR FORÇADO",
    TACGIA: "Unha Pintada",
  },
  {
    MABH: "4424",
    TENBH: "AMOR I LOVE YOU",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "6603",
    TENBH: "AMOR MAIOR",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "33951",
    TENBH: "AMOR MAL RESOLVIDO",
    TACGIA: "Simone e Simaria part. Jorge e Mateus",
  },
  {
    MABH: "9611",
    TENBH: "AMOR NÃO É JOGO DE AZAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30061",
    TENBH: "AMOR NOVO",
    TACGIA: "Joelma ft. Ivete Sangalo",
  },
  {
    MABH: "31018",
    TENBH: "AMOR OU LITRÃO",
    TACGIA: "Petter Ferraz e Menor Nico",
  },
  {
    MABH: "3902",
    TENBH: "AMOR PERFEITO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33046",
    TENBH: "AMOR PERFEITO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "9612",
    TENBH: "AMOR PRA RECOMEÇAR",
    TACGIA: "Frejat",
  },
  {
    MABH: "15644",
    TENBH: "AMOR QUE NÃO SAI",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30278",
    TENBH: "AMOR REBELDE",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "6045",
    TENBH: "AMOR SEM LIMITES",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33058",
    TENBH: "AMOR SURREAL",
    TACGIA: "Alcione",
  },
  {
    MABH: "3604",
    TENBH: "AMOR VERDADEIRO",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "30728",
    TENBH: "AMOR VIRTUAL",
    TACGIA: "Forró Boys",
  },
  {
    MABH: "1503",
    TENBH: "AMORES IMORTAIS",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "33867",
    TENBH: "AMORES SÃO COISAS DA VIDA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33866",
    TENBH: "ANA",
    TACGIA: "Renato e Seus Blue Caps",
  },
  {
    MABH: "33295",
    TENBH: "ANA E O MAR",
    TACGIA: "O Teatro Mágico",
  },
  {
    MABH: "24079",
    TENBH: "ANACONDA",
    TACGIA: "Nicki Minaj",
  },
  {
    MABH: "24586",
    TENBH: "ANARCHY IN THE UK",
    TACGIA: "Sex Pistols",
  },
  {
    MABH: "3826",
    TENBH: "ANARRIÊ",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "5865",
    TENBH: "ANA'S SONG (OPEN FIRE)",
    TACGIA: "Silverchair",
  },
  {
    MABH: "4563",
    TENBH: "AND I LOVE HER",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4564",
    TENBH: "AND I LOVE YOU SO",
    TACGIA: "Perry Como",
  },
  {
    MABH: "3302",
    TENBH: "ANDANÇA",
    TACGIA: "Beth Carvalho",
  },
  {
    MABH: "6082",
    TENBH: "ANDO MEIO DESLIGADO",
    TACGIA: "Pato Fu",
  },
  {
    MABH: "9089",
    TENBH: "ANGEL",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "18182",
    TENBH: "ANGEL",
    TACGIA: "Shaggy & Rayvon",
  },
  {
    MABH: "18616",
    TENBH: "ANGEL",
    TACGIA: "Jon Secada",
  },
  {
    MABH: "24561",
    TENBH: "ANGEL",
    TACGIA: "Fifth Harmony",
  },
  {
    MABH: "18828",
    TENBH: "ANGEL OF HARLEM",
    TACGIA: "U2",
  },
  {
    MABH: "4859",
    TENBH: "ANGELS",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "24452",
    TENBH: "ANGELS",
    TACGIA: "The XX",
  },
  {
    MABH: "4860",
    TENBH: "ANGIE",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "3647",
    TENBH: "ANGRA DOS REIS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "26227",
    TENBH: "ANIMALS",
    TACGIA: "Nickelback",
  },
  {
    MABH: "3405",
    TENBH: "ANJO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "6403",
    TENBH: "ANJO",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "33638",
    TENBH: "ANJO DE CABELOS LONGOS",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "15165",
    TENBH: "ANJO PROTETOR",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "9614",
    TENBH: "ANJO QUERUBIM",
    TACGIA: "Limão com Mel",
  },
  {
    MABH: "15484",
    TENBH: "ANJOS (PRA QUEM TEM FÉ)",
    TACGIA: "O Rappa",
  },
  {
    MABH: "15361",
    TENBH: "ANJOS DE PLANTÃO",
    TACGIA: "Ivo Mozart & Doncesão",
  },
  {
    MABH: "4346",
    TENBH: "ANNA JULIA",
    TACGIA: "Los Hermanos",
  },
  {
    MABH: "4565",
    TENBH: "ANNIE'S SONG",
    TACGIA: "John Denver",
  },
  {
    MABH: "9006",
    TENBH: "ANOTHER BRICK IN THE WALL",
    TACGIA: "Pink Floyd",
  },
  {
    MABH: "9090",
    TENBH: "ANOTHER DAY",
    TACGIA: "Paul McCartney",
  },
  {
    MABH: "4680",
    TENBH: "ANOTHER DAY IN PARADISE",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "24503",
    TENBH: "ANOTHER DAY OF SUN",
    TACGIA: "La La Land",
  },
  {
    MABH: "18333",
    TENBH: "ANOTHER ONE BITES THE DUST",
    TACGIA: "Queen",
  },
  {
    MABH: "26047",
    TENBH: "ANOTHER WAY TO DIE",
    TACGIA: "Disturbed",
  },
  {
    MABH: "4101",
    TENBH: "ANTES DAS SEIS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "33408",
    TENBH: "ANTES DE DIZER ADEUS",
    TACGIA: "Soweto",
  },
  {
    MABH: "30261",
    TENBH: "ANTI-AMOR",
    TACGIA: "Gustavo Mioto part. Jorge e Mateus",
  },
  {
    MABH: "30280",
    TENBH: "ANTÍDOTO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "3903",
    TENBH: "ANUNCIAÇÃO",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "24687",
    TENBH: "ANY MAN OF MINE",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "9091",
    TENBH: "ANYMORE",
    TACGIA: "Travis Tritt",
  },
  {
    MABH: "26045",
    TENBH: "ANYONE",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "4812",
    TENBH: "ANYTHING FOR YOU",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "26161",
    TENBH: "ANYWAY YOU WANT IT",
    TACGIA: "Journey",
  },
  {
    MABH: "24688",
    TENBH: "ANYWHERE",
    TACGIA: "Rita Ora",
  },
  {
    MABH: "4386",
    TENBH: "AO MEU LADO OUTRA VEZ",
    TACGIA: "Daniel",
  },
  {
    MABH: "30943",
    TENBH: "AO ÚNICO",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "30485",
    TENBH: "AO VIVO E A CORES",
    TACGIA: "Matheus e Kauan ft. Anitta",
  },
  {
    MABH: "6046",
    TENBH: "AONDE QUER QUE EU VÁ",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "2409",
    TENBH: "AOS OLHOS DO PAI",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "33415",
    TENBH: "AOS TRANCOS E BARRANCOS",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "4025",
    TENBH: "APAIXONADA",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "6083",
    TENBH: "APAIXONADA POR VOCÊ",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "30804",
    TENBH: "APAIXONADINHA",
    TACGIA: "Marília Mendonça ft. Léo Santana",
  },
  {
    MABH: "6808",
    TENBH: "APAIXONADO",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "33067",
    TENBH: "APAIXONADO POR VOCE",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "1967",
    TENBH: "APAIXONADOS PELA LUA",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "7555",
    TENBH: "APARÊNCIAS",
    TACGIA: "Márcio Greick",
  },
  {
    MABH: "6844",
    TENBH: "APAZIGUAR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30262",
    TENBH: "APELIDO CARINHOSO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6084",
    TENBH: "APENAS MAIS UMA DE AMOR",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "3015",
    TENBH: "APENAS UM RAPAZ LATINO AMERICANO",
    TACGIA: "Belchior",
  },
  {
    MABH: "30582",
    TENBH: "APERTA O PÉ",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "6047",
    TENBH: "APERTE O PLAY",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "3455",
    TENBH: "APESAR DE VOCÊ",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "24137",
    TENBH: "APOLOGIZE",
    TACGIA: "OneRepublic",
  },
  {
    MABH: "6525",
    TENBH: "APRENDENDO A JOGAR",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "4387",
    TENBH: "APRENDER A AMAR",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "3406",
    TENBH: "AQUARELA",
    TACGIA: "Toquinho",
  },
  {
    MABH: "15025",
    TENBH: "AQUARELA BRASILEIRA",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "3016",
    TENBH: "AQUARELA DO BRASIL",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "9092",
    TENBH: "AQUARIUS",
    TACGIA: "The 5th Dimension",
  },
  {
    MABH: "33018",
    TENBH: "AQUECIMENTO DAS MARAVILHAS",
    TACGIA: "Bonde das Maravilhas",
  },
  {
    MABH: "6005",
    TENBH: "AQUELA NUVEM QUE PASSA",
    TACGIA: "Gilliard",
  },
  {
    MABH: "30281",
    TENBH: "AQUELA PESSOA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33416",
    TENBH: "AQUELE 1%",
    TACGIA: "Marcos e Belutti & Wesley Safadão",
  },
  {
    MABH: "3863",
    TENBH: "AQUELE ABRAÇO",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "4225",
    TENBH: "AQUELE AMOR QUE FAZ GOSTOSO ME DEIXOU",
    TACGIA: "Wando",
  },
  {
    MABH: "1823",
    TENBH: "AQUELE BEIJO QUE TE DEI",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9393",
    TENBH: "AQUI",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "1445",
    TENBH: "AQUI A TRISTEZA PULA DE ALEGRIA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33904",
    TENBH: "AQUI Ó PRO MEU EX",
    TACGIA: "Márcia Fellipe",
  },
  {
    MABH: "6723",
    TENBH: "AQUI PRA ELA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "30282",
    TENBH: "AR CONDICIONADO NO 15",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3017",
    TENBH: "ARA KETU BOM DEMAIS",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "33639",
    TENBH: "ARAPUCA",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "1035",
    TENBH: "ARCO-ÍRIS",
    TACGIA: "Xuxa",
  },
  {
    MABH: "5866",
    TENBH: "ARE YOU GONNA BE MY GIRL",
    TACGIA: "Jet",
  },
  {
    MABH: "18829",
    TENBH: "ARE YOU GONNA GO MY WAY",
    TACGIA: "Lenny Kravitz",
  },
  {
    MABH: "4566",
    TENBH: "ARE YOU LONESOME TONIGHT",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "3948",
    TENBH: "ARERÊ",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30949",
    TENBH: "ARMA SECRETA",
    TACGIA: "Cassiane",
  },
  {
    MABH: "3648",
    TENBH: "ARMADILHA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "24167",
    TENBH: "ARMS",
    TACGIA: "Christina Perri",
  },
  {
    MABH: "24437",
    TENBH: "ARMY",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "18721",
    TENBH: "AROUND THE WORLD",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "24950",
    TENBH: "AROUND THE WORLD (LA LA LA LA LA)",
    TACGIA: "ATC",
  },
  {
    MABH: "31033",
    TENBH: "ARRANHÃOZINHO",
    TACGIA: "Japinha Conde ft.Tierry",
  },
  {
    MABH: "1882",
    TENBH: "ARRASOU",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "30486",
    TENBH: "ARRASTA",
    TACGIA: "Gloria Groove part. Léo Santana",
  },
  {
    MABH: "33112",
    TENBH: "ARRASTA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "7061",
    TENBH: "ARRASTA UMA CADEIRA",
    TACGIA: "Roberto Carlos & Chitãozinho e Xororó",
  },
  {
    MABH: "33193",
    TENBH: "ARROCHA QUE ELA GOSTA",
    TACGIA: "Kaio e Bruninho",
  },
  {
    MABH: "4861",
    TENBH: "ARTHUR'S THEME (BEST THAT YOU CAN DO)",
    TACGIA: "Christopher Cross",
  },
  {
    MABH: "31007",
    TENBH: "ÁRVORE CORTADA",
    TACGIA: "Valesca Mayssa",
  },
  {
    MABH: "15725",
    TENBH: "AS ANDORINHAS",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "2902",
    TENBH: "AS BALEIAS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3905",
    TENBH: "AS CANÇÕES QUE VOCÊ FEZ PRA MIM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6085",
    TENBH: "AS CURVAS DA ESTRADA DE SANTOS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "1485",
    TENBH: "AS DORES DO MUNDO",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "30038",
    TENBH: "AS FLORES DO JARDIM DA NOSSA CASA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "1968",
    TENBH: "AS LEMBRANÇAS VAO NA MALA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "4862",
    TENBH: "AS LONG AS YOU LOVE ME",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "24047",
    TENBH: "AS LONG AS YOU LOVE ME",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "2843",
    TENBH: "AS MINA PIRA",
    TACGIA: "Cácio e Marcos",
  },
  {
    MABH: "33508",
    TENBH: "AS NOVINHAS TÃO SENSACIONAL",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "4347",
    TENBH: "AS QUATRO ESTAÇÕES",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "3018",
    TENBH: "AS ROSAS NÃO FALAM",
    TACGIA: "Cartola",
  },
  {
    MABH: "7906",
    TENBH: "AS SETE VAMPIRAS",
    TACGIA: "Leo Jaime",
  },
  {
    MABH: "4567",
    TENBH: "AS TEARS GO BY",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "2582",
    TENBH: "AS THE WORLD FALLS DOWN",
    TACGIA: "David Bowie",
  },
  {
    MABH: "18518",
    TENBH: "AS TIME GOES BY",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "3019",
    TENBH: "ASA BRANCA",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "3020",
    TENBH: "ASA MORENA",
    TACGIA: "Zizi Possi",
  },
  {
    MABH: "5867",
    TENBH: "ASK",
    TACGIA: "The Smiths",
  },
  {
    MABH: "9093",
    TENBH: "ASK THE LONELY",
    TACGIA: "Four Tops",
  },
  {
    MABH: "24200",
    TENBH: "ASS LIKE THAT",
    TACGIA: "Eminem",
  },
  {
    MABH: "3021",
    TENBH: "ASSIM CAMINHA A HUMANIDADE",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "6164",
    TENBH: "ASSIM QUE SE FAZ",
    TACGIA: "Luciana Mello",
  },
  {
    MABH: "2783",
    TENBH: "ASSIM VOCÊ MATA O PAPAI",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "30283",
    TENBH: "ASSOVIA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "7302",
    TENBH: "ASSUM PRETO",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "18464",
    TENBH: "ASTRONAUT",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "18722",
    TENBH: "AT LAST",
    TACGIA: "Etta James",
  },
  {
    MABH: "30096",
    TENBH: "ATÉ EX DUVIDA",
    TACGIA: "Day & Lara part. Maiara e Maraisa",
  },
  {
    MABH: "9619",
    TENBH: "ATÉ O FIM",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "15027",
    TENBH: "ATÉ O FINAL",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "31031",
    TENBH: "ATÉ ONTEM",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30062",
    TENBH: "ATÉ PARECE UM SONHO",
    TACGIA: "Odair José",
  },
  {
    MABH: "6048",
    TENBH: "ATÉ QUANDO ESPERAR",
    TACGIA: "Plebe Rude",
  },
  {
    MABH: "33640",
    TENBH: "ATÉ VOCÊ VOLTAR",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30042",
    TENBH: "ATENDE AÍ",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "3022",
    TENBH: "ATIRE A PRIMEIRA PEDRA",
    TACGIA: "Ataulfo Alves",
  },
  {
    MABH: "30284",
    TENBH: "ATOLADINHA (BOLA DE FOGO)",
    TACGIA: "Bonde do Tigrão",
  },
  {
    MABH: "6165",
    TENBH: "ATRAÇÃO FATAL",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "4425",
    TENBH: "ATRÁS DA PORTA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "1243",
    TENBH: "ATRÁS POEIRA",
    TACGIA: "Sá e Guarabyra",
  },
  {
    MABH: "30601",
    TENBH: "ATRASADINHA",
    TACGIA: "Felipe Araújo part. Ferrugem",
  },
  {
    MABH: "26213",
    TENBH: "ATTACK",
    TACGIA: "30 Seconds To Mars",
  },
  {
    MABH: "4681",
    TENBH: "AUBREY",
    TACGIA: "Bread",
  },
  {
    MABH: "30729",
    TENBH: "ÁUDIO",
    TACGIA: "Diego e Victor Hugo",
  },
  {
    MABH: "1731",
    TENBH: "AUSÊNCIA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30487",
    TENBH: "AUSÊNCIA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33072",
    TENBH: "AVALANCHE DE NEVE",
    TACGIA: "Maurício Mattar",
  },
  {
    MABH: "33641",
    TENBH: "AVE MARIA SERTANEJA",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "4119",
    TENBH: "AVENTURA",
    TACGIA: "Eduardo Dusek",
  },
  {
    MABH: "4066",
    TENBH: "AVIÃOZINHO",
    TACGIA: "Cheiro de Amor",
  },
  {
    MABH: "33654",
    TENBH: "AVIÕES CHEGOU",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "6166",
    TENBH: "AVISA",
    TACGIA: "Falamansa",
  },
  {
    MABH: "30263",
    TENBH: "AVISA AÍ",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30063",
    TENBH: "AVISA QUE EU CHEGUEI",
    TACGIA: "Naiara Azevedo part. Ivete Sangalo",
  },
  {
    MABH: "3508",
    TENBH: "AVISO AOS NAVEGANTES",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "6446",
    TENBH: "AVÔHAI",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "24066",
    TENBH: "AYO",
    TACGIA: "Chris Brown ft. Tyga",
  },
  {
    MABH: "24463",
    TENBH: "A-YO",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "26020",
    TENBH: "AYO TECHNOLOGY",
    TACGIA: "50 Cent ft. Justin Timberland & Timbaland",
  },
  {
    MABH: "6485",
    TENBH: "AZUL",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "6809",
    TENBH: "AZUL",
    TACGIA: "Djavan",
  },
  {
    MABH: "3649",
    TENBH: "AZUL DA COR DO MAR",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33877",
    TENBH: "AZUL DA COR DO MAR",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "18648",
    TENBH: "B.Y.O.B.",
    TACGIA: "System of A Down",
  },
  {
    MABH: "6325",
    TENBH: "BABA",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "24587",
    TENBH: "BABE",
    TACGIA: "Styx",
  },
  {
    MABH: "2522",
    TENBH: "BABY",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "18756",
    TENBH: "BABY BLUE",
    TACGIA: "Badfinger",
  },
  {
    MABH: "18232",
    TENBH: "BABY BOY",
    TACGIA: "Beyonce ft. Sean Paul",
  },
  {
    MABH: "4813",
    TENBH: "BABY CAN I HOLD YOU",
    TACGIA: "Tracy Chapman",
  },
  {
    MABH: "24222",
    TENBH: "BABY COME BACK",
    TACGIA: "Player",
  },
  {
    MABH: "24689",
    TENBH: "BABY DID A BAD BAD THING",
    TACGIA: "Chris Isaak",
  },
  {
    MABH: "24923",
    TENBH: "BABY DON'T FORGET MY NUMBER",
    TACGIA: "Milli Vanilli",
  },
  {
    MABH: "18272",
    TENBH: "BABY DON'T LIE",
    TACGIA: "Gwen Stefani",
  },
  {
    MABH: "18213",
    TENBH: "BABY GOT BACK",
    TACGIA: "Sir Mix A-Lot",
  },
  {
    MABH: "5868",
    TENBH: "BABY I NEED YOUR LOVIN",
    TACGIA: "Four Tops",
  },
  {
    MABH: "4682",
    TENBH: "BABY I'M A WANT YOU",
    TACGIA: "Bread",
  },
  {
    MABH: "26214",
    TENBH: "BABY I'M YOURS",
    TACGIA: "Breakbot",
  },
  {
    MABH: "5869",
    TENBH: "BABY IT'S YOU",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24934",
    TENBH: "BABY JANE",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "4814",
    TENBH: "BABY ONE MORE TIME",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "18463",
    TENBH: "BACHELORETTE",
    TACGIA: "Björk",
  },
  {
    MABH: "4863",
    TENBH: "BACK AT ONE",
    TACGIA: "Brian McKnight",
  },
  {
    MABH: "4683",
    TENBH: "BACK FOR GOOD",
    TACGIA: "Take That",
  },
  {
    MABH: "5870",
    TENBH: "BACK IN BLACK",
    TACGIA: "AC/DC",
  },
  {
    MABH: "9008",
    TENBH: "BACK ON THE CHAIN GANG",
    TACGIA: "Pretenders",
  },
  {
    MABH: "2541",
    TENBH: "BACK TO BLACK",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "18421",
    TENBH: "BACK TO YOU",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "24929",
    TENBH: "BACKTRACK",
    TACGIA: "Rebecca Ferguson",
  },
  {
    MABH: "18830",
    TENBH: "BAD",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24588",
    TENBH: "BAD AT LOVE",
    TACGIA: "Halsey",
  },
  {
    MABH: "24125",
    TENBH: "BAD BLOOD",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "24690",
    TENBH: "BAD BOYS",
    TACGIA: "Inner Circle",
  },
  {
    MABH: "2501",
    TENBH: "BAD DAY",
    TACGIA: "Daniel Powter",
  },
  {
    MABH: "18757",
    TENBH: "BAD GIRLS (EXPLICIT)",
    TACGIA: "M.I.A.",
  },
  {
    MABH: "24855",
    TENBH: "BAD GUY",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "4684",
    TENBH: "BAD LOVE",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "4616",
    TENBH: "BAD MOON RISING",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "2551",
    TENBH: "BAD ROMANCE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "3605",
    TENBH: "BAGULHO NO BUMBA",
    TACGIA: "Os Virgulóides",
  },
  {
    MABH: "3023",
    TENBH: "BAIANIDADE NAGÔ",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "24046",
    TENBH: "BAILANDO",
    TACGIA: "Enrique Iglesias ft. Sean Paul",
  },
  {
    MABH: "33215",
    TENBH: "BAILANDO",
    TACGIA: "Luan Santana & Enrique Iglesias",
  },
  {
    MABH: "33420",
    TENBH: "BAILÃO",
    TACGIA: "MC Bruninha",
  },
  {
    MABH: "3510",
    TENBH: "BAILÃO DE PEÃO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33642",
    TENBH: "BAILE DE FAVELA (LIGHT)",
    TACGIA: "MC João",
  },
  {
    MABH: "9094",
    TENBH: "BAKER STREET",
    TACGIA: "Gerry Rafferty",
  },
  {
    MABH: "9621",
    TENBH: "BALA DE PRATA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "15322",
    TENBH: "BALA NA BOQUINHA",
    TACGIA: "Gabriel Gava",
  },
  {
    MABH: "1897",
    TENBH: "BALADA BOA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6006",
    TENBH: "BALADA DO AMOR INABALÁVEL",
    TACGIA: "Skank",
  },
  {
    MABH: "33755",
    TENBH: "BALADA DO VAQUEIRO",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "15211",
    TENBH: "BALADA LOUCA",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "33073",
    TENBH: "BALADA PRIME",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "33747",
    TENBH: "BALADA PRIME",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "30730",
    TENBH: "BALADEIRO",
    TACGIA: "Forró Boys",
  },
  {
    MABH: "3024",
    TENBH: "BALANCÊ",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "30285",
    TENBH: "BALDIN DE GELO",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "24913",
    TENBH: "BAMBOLÉO",
    TACGIA: "Gipsy Kings",
  },
  {
    MABH: "30731",
    TENBH: "BANANA",
    TACGIA: "Anitta ft. Becky G",
  },
  {
    MABH: "33865",
    TENBH: "BANCA DE FLORES",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "24589",
    TENBH: "BAND ON THE RUN",
    TACGIA: "Paul McCartney & Wings",
  },
  {
    MABH: "1792",
    TENBH: "BANDOLEIRO",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "3828",
    TENBH: "BANDOLINS",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "33509",
    TENBH: "BANG",
    TACGIA: "Anitta",
  },
  {
    MABH: "24056",
    TENBH: "BANG BANG",
    TACGIA: "Jessie J. ft. Ariana Grande and Nicki Minaj",
  },
  {
    MABH: "24431",
    TENBH: "BANG MY HEAD",
    TACGIA: "David Guetta ft. Sia & Fetty Wap",
  },
  {
    MABH: "3555",
    TENBH: "BANHO DE CHEIRO",
    TACGIA: "Elba Ramalho",
  },
  {
    MABH: "3025",
    TENBH: "BANHO DE ESPUMA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "3026",
    TENBH: "BANHO DE LUA",
    TACGIA: "Celly Campello",
  },
  {
    MABH: "30286",
    TENBH: "BÃO TAMÉM",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30488",
    TENBH: "BAR SOLIDÃO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4864",
    TENBH: "BARBIE GIRL",
    TACGIA: "Aqua",
  },
  {
    MABH: "7068",
    TENBH: "BARBIE GIRL",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "33307",
    TENBH: "BARCO DE PAPEL",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "24691",
    TENBH: "BARK AT THE MOON",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "18519",
    TENBH: "BARRACUDA",
    TACGIA: "Heart",
  },
  {
    MABH: "6167",
    TENBH: "BARRADOS NO BAILE",
    TACGIA: "Eduardo Dusek",
  },
  {
    MABH: "33074",
    TENBH: "BARRAQUEIRA",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "24071",
    TENBH: "BARTENDER",
    TACGIA: "Lady Antebellum",
  },
  {
    MABH: "30935",
    TENBH: "BARZINHO ALEATÓRIO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "18394",
    TENBH: "BASKET CASE",
    TACGIA: "Green Day",
  },
  {
    MABH: "33077",
    TENBH: "BASTA UM OLHAR",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30990",
    TENBH: "BASTA VOCÊ ME LIGAR",
    TACGIA: "Os Barões da Pisadinha ft. Xand Avião",
  },
  {
    MABH: "33079",
    TENBH: "BASTIDORES",
    TACGIA: "Cauby Peixoto",
  },
  {
    MABH: "3027",
    TENBH: "BATE CORAÇÃO",
    TACGIA: "Elba Ramalho",
  },
  {
    MABH: "6087",
    TENBH: "BATE LATA",
    TACGIA: "Banda Beijo",
  },
  {
    MABH: "1091",
    TENBH: "BATE O PÉ",
    TACGIA: "Roberto Leal",
  },
  {
    MABH: "4389",
    TENBH: "BATE O PÉ",
    TACGIA: "Rionegro e Solimões",
  },
  {
    MABH: "3028",
    TENBH: "BATEU SAUDADE",
    TACGIA: "Banda Mel",
  },
  {
    MABH: "31032",
    TENBH: "BATOM DE CEREJA",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "30988",
    TENBH: "BATOM DE OURO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "33864",
    TENBH: "BATOM VERMELHO",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "18462",
    TENBH: "BE ALONE NO MORE",
    TACGIA: "Another Level",
  },
  {
    MABH: "5871",
    TENBH: "BE MY BABY",
    TACGIA: "The Ronettes",
  },
  {
    MABH: "18017",
    TENBH: "BE WITH YOU",
    TACGIA: "Enrique Iglesias",
  },
  {
    MABH: "18395",
    TENBH: "BE YOURSELF",
    TACGIA: "Audioslave",
  },
  {
    MABH: "3408",
    TENBH: "BEAT ACELERADO",
    TACGIA: "Metrô",
  },
  {
    MABH: "4568",
    TENBH: "BEAT IT",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "33603",
    TENBH: "BEATRIZ",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "18396",
    TENBH: "BEAUTIFUL",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "24945",
    TENBH: "BEAUTIFUL",
    TACGIA: "Akon ft. Colbie O'Donis & Kardinal Offishall",
  },
  {
    MABH: "18506",
    TENBH: "BEAUTIFUL DAY",
    TACGIA: "U2",
  },
  {
    MABH: "18520",
    TENBH: "BEAUTIFUL GIRL",
    TACGIA: "INXS",
  },
  {
    MABH: "26006",
    TENBH: "BEAUTIFUL GIRLS",
    TACGIA: "Sean Kingston",
  },
  {
    MABH: "18001",
    TENBH: "BEAUTIFUL LIAR",
    TACGIA: "Beyoncé ft. Shakira",
  },
  {
    MABH: "18831",
    TENBH: "BEAUTIFUL LIFE",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "9244",
    TENBH: "BEAUTIFUL STRANGER",
    TACGIA: "Madonna",
  },
  {
    MABH: "18091",
    TENBH: "BEAUTY AND A BEAT",
    TACGIA: "Justin Bieber ft. Nicki Minaj",
  },
  {
    MABH: "4815",
    TENBH: "BEAUTY AND THE BEAST",
    TACGIA: "Peabo Bryson & Celine Dion",
  },
  {
    MABH: "24949",
    TENBH: "BEAUTY AND THE BEAST",
    TACGIA: "Ariana Grande and John Legend",
  },
  {
    MABH: "30803",
    TENBH: "BEBAÇA",
    TACGIA: "Marília Mendonça & Maiara e Maraisa",
  },
  {
    MABH: "30602",
    TENBH: "BÊBADO NO MÁXIMO",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "24850",
    TENBH: "BEBE",
    TACGIA: "6ix9ine ft. Anuel AA",
  },
  {
    MABH: "30732",
    TENBH: "BEBE VEM ME PROCURAR",
    TACGIA: "Saia Rodada",
  },
  {
    MABH: "33952",
    TENBH: "BEBENDO MAIS QUE OPALA",
    TACGIA: "Antony e Gabriel",
  },
  {
    MABH: "30489",
    TENBH: "BEBER COM EMERGÊNCIA",
    TACGIA: "Jefferson Moraes",
  },
  {
    MABH: "2903",
    TENBH: "BEBER, BEBER",
    TACGIA: "Leonardo",
  },
  {
    MABH: "9622",
    TENBH: "BEBER, CAIR E LEVANTAR",
    TACGIA: "André e Adriano",
  },
  {
    MABH: "30733",
    TENBH: "BEBI LIGUEI",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "30873",
    TENBH: "BEBI MINHA BICICLETA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "30603",
    TENBH: "BEBIDA NA FERIDA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "1353",
    TENBH: "BEBO E CHORO",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "1446",
    TENBH: "BEBO E DOU TRABALHO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33105",
    TENBH: "BEBO PÁ CARAI",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "9205",
    TENBH: "BECAUSE OF YOU",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "26099",
    TENBH: "BECAUSE OF YOU",
    TACGIA: "Ne-Yo",
  },
  {
    MABH: "26136",
    TENBH: "BECAUSE THE NIGHT",
    TACGIA: "10,000 Maniacs",
  },
  {
    MABH: "4685",
    TENBH: "BECAUSE YOU LOVED ME",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "18723",
    TENBH: "BED OF ROSES",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "18397",
    TENBH: "BEDSHAPED",
    TACGIA: "Keane",
  },
  {
    MABH: "18191",
    TENBH: "BEELZEBOSS (THE FINAL SHOWDOWN)",
    TACGIA: "Tenacious D",
  },
  {
    MABH: "18461",
    TENBH: "BEFORE I FORGET",
    TACGIA: "Slipknot",
  },
  {
    MABH: "24854",
    TENBH: "BEFORE I LET GO",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "26076",
    TENBH: "BEFORE YOU GO",
    TACGIA: "Lewis Capaldi",
  },
  {
    MABH: "18362",
    TENBH: "BEHIND BLUE EYES",
    TACGIA: "Limp Bizkit",
  },
  {
    MABH: "3606",
    TENBH: "BEIJA EU",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "3456",
    TENBH: "BEIJA-FLÔR",
    TACGIA: "Timbalada",
  },
  {
    MABH: "30064",
    TENBH: "BEIJA-FLOR ME BEIJA",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "2665",
    TENBH: "BEIJAR NA BOCA",
    TACGIA: "Claudia Leitte",
  },
  {
    MABH: "1486",
    TENBH: "BEIJINHO DOCE",
    TACGIA: "Almir Sater",
  },
  {
    MABH: "3457",
    TENBH: "BEIJINHO NA BOCA",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "15485",
    TENBH: "BEIJINHO NO OMBRO",
    TACGIA: "Valesca Popozuda",
  },
  {
    MABH: "30842",
    TENBH: "BEIJO AMADOR",
    TACGIA: "Lauana Prado ft. Matheus e Kauan",
  },
  {
    MABH: "33241",
    TENBH: "BEIJO BOM",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "30604",
    TENBH: "BEIJO COM TRAP",
    TACGIA: "Hungria Hip Hop",
  },
  {
    MABH: "30936",
    TENBH: "BEIJO DE AUTOAJUDA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "30605",
    TENBH: "BEIJO DE VARANDA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30123",
    TENBH: "BEIJO É BOM",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "3029",
    TENBH: "BEIJO GELADINHO",
    TACGIA: "Negritude Júnior",
  },
  {
    MABH: "33863",
    TENBH: "BEIJO MEU",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "6527",
    TENBH: "BEIJO MOLHADO",
    TACGIA: "Rouge",
  },
  {
    MABH: "3829",
    TENBH: "BEIJO NA BOCA",
    TACGIA: "Netinho",
  },
  {
    MABH: "6208",
    TENBH: "BEIJO ROUBADO",
    TACGIA: "Rastapé",
  },
  {
    MABH: "30124",
    TENBH: "BEIRA MAR",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "1846",
    TENBH: "BELA FLOR",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "33080",
    TENBH: "BELEZA QUE É VOCÊ MULHER",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "3607",
    TENBH: "BELEZA RARA",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "4865",
    TENBH: "BELIEVE",
    TACGIA: "Cher",
  },
  {
    MABH: "24239",
    TENBH: "BELIEVE",
    TACGIA: "Mumford & Sons",
  },
  {
    MABH: "24073",
    TENBH: "BELIEVE ME",
    TACGIA: "Lil Wayne ft. Drake",
  },
  {
    MABH: "24509",
    TENBH: "BELIEVER",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "24930",
    TENBH: "BELLA SEZ'ANIMA",
    TACGIA: "Ricardo Cocciante",
  },
  {
    MABH: "24856",
    TENBH: "BELLYACHE",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "30287",
    TENBH: "BEM AOS OLHOS DA LUA",
    TACGIA: "Juliano Cesar",
  },
  {
    MABH: "33421",
    TENBH: "BEM APAIXONADO",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "33422",
    TENBH: "BEM FEITO",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30734",
    TENBH: "BEM PIOR QUE EU",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3030",
    TENBH: "BEM QUE SE QUIS",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "4264",
    TENBH: "BEM QUERER",
    TACGIA: "Mauricio Manieri",
  },
  {
    MABH: "6287",
    TENBH: "BEM SIMPLES",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "4686",
    TENBH: "BEN",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "4687",
    TENBH: "BENNIE AND THE JETS",
    TACGIA: "Elton John",
  },
  {
    MABH: "7561",
    TENBH: "BERIMBAU METALIZADO",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "24206",
    TENBH: "BERZERK",
    TACGIA: "Eminem",
  },
  {
    MABH: "3458",
    TENBH: "BÉSAME",
    TACGIA: "Leila Pinheiro",
  },
  {
    MABH: "18521",
    TENBH: "BEST OF YOU",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "24246",
    TENBH: "BEST SONG EVER",
    TACGIA: "One Direction",
  },
  {
    MABH: "18233",
    TENBH: "BEST THING I NEVER HAD",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "3511",
    TENBH: "BETE BALANÇO",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "4569",
    TENBH: "BETTE DAVI'S EYES",
    TACGIA: "Kim Carnes",
  },
  {
    MABH: "24874",
    TENBH: "BETTER",
    TACGIA: "Khalid",
  },
  {
    MABH: "5872",
    TENBH: "BETTER IN TIME",
    TACGIA: "Leona Lewis",
  },
  {
    MABH: "4866",
    TENBH: "BETTER MAN",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "18758",
    TENBH: "BETTER MAN",
    TACGIA: "Little Big Town",
  },
  {
    MABH: "24590",
    TENBH: "BETTER MAN",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "24810",
    TENBH: "BETTER NOW",
    TACGIA: "Post Malone",
  },
  {
    MABH: "5873",
    TENBH: "BETTER TOGETHER",
    TACGIA: "Jack Johnson",
  },
  {
    MABH: "26133",
    TENBH: "BEVERLY HILLS",
    TACGIA: "Weezer",
  },
  {
    MABH: "9206",
    TENBH: "BEYOND THE SEA",
    TACGIA: "Royal Crown Revue",
  },
  {
    MABH: "33748",
    TENBH: "BICA D'ÁGUA",
    TACGIA: "Daniel",
  },
  {
    MABH: "24252",
    TENBH: "BICH BETTER HAVE MY MONEY",
    TACGIA: "Rihanna",
  },
  {
    MABH: "15364",
    TENBH: "BICHO",
    TACGIA: "Ivete Sangalo & Saulo Fernandes",
  },
  {
    MABH: "33487",
    TENBH: "BICHOS ESCROTOS",
    TACGIA: "Titãs",
  },
  {
    MABH: "18969",
    TENBH: "BIG BIG WORLD",
    TACGIA: "Emilia",
  },
  {
    MABH: "24213",
    TENBH: "BIG GIRLS DON'T CRY",
    TACGIA: "Fergie",
  },
  {
    MABH: "9245",
    TENBH: "BIG IN JAPAN",
    TACGIA: "Alphaville",
  },
  {
    MABH: "30288",
    TENBH: "BIG JET PLANE",
    TACGIA: "Alok ft. Mathieu Koss",
  },
  {
    MABH: "18500",
    TENBH: "BIGMOUTH STRIKES AGAIN",
    TACGIA: "The Smiths",
  },
  {
    MABH: "6448",
    TENBH: "BIJUTERIA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "7071",
    TENBH: "BILHETE",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "4570",
    TENBH: "BILLIE JEAN",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "2583",
    TENBH: "BILLIONAIRE",
    TACGIA: "Travie McCoy ft. Bruno Mars",
  },
  {
    MABH: "15685",
    TENBH: "BILU BILU",
    TACGIA: "Pablo",
  },
  {
    MABH: "3032",
    TENBH: "BIQUINI DE BOLINHA AMARELINHA",
    TACGIA: "Ronnie Cord",
  },
  {
    MABH: "24086",
    TENBH: "BIRTHDAY",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "4867",
    TENBH: "BITCH",
    TACGIA: "Meredith Brooks",
  },
  {
    MABH: "24857",
    TENBH: "BITCHES BROKEN HEARTS",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "26126",
    TENBH: "BITTER SWEET SYMPHONY",
    TACGIA: "The Verve",
  },
  {
    MABH: "18021",
    TENBH: "BIZARRE LOVE TRIANGLE",
    TACGIA: "New Order",
  },
  {
    MABH: "6725",
    TENBH: "BLÁ BLÁ BLÁ",
    TACGIA: "Rouge",
  },
  {
    MABH: "33251",
    TENBH: "BLÁ BLÁ BLÁ",
    TACGIA: "Anitta",
  },
  {
    MABH: "5874",
    TENBH: "BLACK",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "26108",
    TENBH: "BLACK BETTY",
    TACGIA: "Ram Jam Band",
  },
  {
    MABH: "18522",
    TENBH: "BLACK DOG",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "18484",
    TENBH: "BLACK HOLE SUN",
    TACGIA: "Soundgarden",
  },
  {
    MABH: "24460",
    TENBH: "BLACK MAGIC",
    TACGIA: "Little Mix",
  },
  {
    MABH: "18092",
    TENBH: "BLACK MAGIC WOMAN",
    TACGIA: "Santana",
  },
  {
    MABH: "4688",
    TENBH: "BLACK OR WHITE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "33862",
    TENBH: "BLACK SAMBA",
    TACGIA: "Franco",
  },
  {
    MABH: "2602",
    TENBH: "BLACK VELVET",
    TACGIA: "Alannah Myles",
  },
  {
    MABH: "24049",
    TENBH: "BLACK WIDOW",
    TACGIA: "Iggy Azalea ft. Rita Ora",
  },
  {
    MABH: "33746",
    TENBH: "BLACKOUT",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "24337",
    TENBH: "BLAME",
    TACGIA: "Calvin Harris ft. John Newman",
  },
  {
    MABH: "26184",
    TENBH: "BLAME IT ON THE BOOGIE",
    TACGIA: "The Jacksons",
  },
  {
    MABH: "24372",
    TENBH: "BLANK SPACE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18051",
    TENBH: "BLAZE OF GLORY",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "15964",
    TENBH: "BLECAUTE",
    TACGIA: "Jota Quest part. Anitta & Nile Rodgers",
  },
  {
    MABH: "5875",
    TENBH: "BLEEDING LOVE",
    TACGIA: "Leona Lewis",
  },
  {
    MABH: "26173",
    TENBH: "BLESS THE CHILD",
    TACGIA: "Nightwish",
  },
  {
    MABH: "18523",
    TENBH: "BLIND",
    TACGIA: "Korn",
  },
  {
    MABH: "26017",
    TENBH: "BLINDING LIGHTS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "2502",
    TENBH: "BLITZKRIEG BOP",
    TACGIA: "Ramones",
  },
  {
    MABH: "24510",
    TENBH: "BLOOD SWEAT & TEARS",
    TACGIA: "BangTan Boys (BTS) ?????",
  },
  {
    MABH: "24081",
    TENBH: "BLOODSTREAM",
    TACGIA: "Ed Sheeran & Rudimental",
  },
  {
    MABH: "24281",
    TENBH: "BLOW",
    TACGIA: "Kesha",
  },
  {
    MABH: "18049",
    TENBH: "BLOWING IN WIND",
    TACGIA: "Bob Dylan",
  },
  {
    MABH: "18973",
    TENBH: "BLUE CHRISTMAS",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "4689",
    TENBH: "BLUE EYES",
    TACGIA: "Elton John",
  },
  {
    MABH: "24297",
    TENBH: "BLUE JEANS",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "18087",
    TENBH: "BLUE MONDAY",
    TACGIA: "New Order",
  },
  {
    MABH: "9095",
    TENBH: "BLUE MOON",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "4868",
    TENBH: "BLUE SUEDE SHOES",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24199",
    TENBH: "BLURRED LINES",
    TACGIA: "Robin Thicke ft. T.I. & Pharrell",
  },
  {
    MABH: "18460",
    TENBH: "BLURRY",
    TACGIA: "Puddle of Mudd",
  },
  {
    MABH: "33423",
    TENBH: "BLUSA BRANCA",
    TACGIA: "Gabriel Valim",
  },
  {
    MABH: "30267",
    TENBH: "BLUSA VERMELHA",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "30690",
    TENBH: "BOA MENINA",
    TACGIA: "Luísa Sonza",
  },
  {
    MABH: "1648",
    TENBH: "BOA NOITE",
    TACGIA: "Djavan",
  },
  {
    MABH: "7912",
    TENBH: "BOA SORTE (GOOD LUCK)",
    TACGIA: "Vanessa da Mata part. Ben Harper",
  },
  {
    MABH: "1649",
    TENBH: "BOA SORTE PRA VOCÊ",
    TACGIA: "Victor e Leo",
  },
  {
    MABH: "6326",
    TENBH: "BOATE AZUL",
    TACGIA: "Joaquim e Manuel",
  },
  {
    MABH: "33075",
    TENBH: "BOBEIA PRA VER",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30125",
    TENBH: "BOBEOU A GENTE PIMBA",
    TACGIA: "Antonio Carlos e Renato",
  },
  {
    MABH: "33861",
    TENBH: "BOBO FUI EU",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "24195",
    TENBH: "BODIES",
    TACGIA: "Drowning Pool",
  },
  {
    MABH: "18974",
    TENBH: "BODY AND SOUL",
    TACGIA: "Tony Bennett",
  },
  {
    MABH: "18024",
    TENBH: "BOHEMIAN RHAPSODY",
    TACGIA: "Queen",
  },
  {
    MABH: "3694",
    TENBH: "BOIADEIRO ERRANTE",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "3304",
    TENBH: "BOIS DON'T CRY",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "7913",
    TENBH: "BOLA DA VEZ",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "1039",
    TENBH: "BOLA DE MEIA BOLA DE GUDE",
    TACGIA: "14 Bis",
  },
  {
    MABH: "7073",
    TENBH: "BOLA DE SABÃO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "3742",
    TENBH: "BOLA DIVIDIDA",
    TACGIA: "Luiz Ayrão",
  },
  {
    MABH: "30691",
    TENBH: "BOLA REBOLA",
    TACGIA: "Anitta, MC Zaac, J Balvin, Tropkillaz",
  },
  {
    MABH: "30126",
    TENBH: "BOLADONA",
    TACGIA: "Tati Quebra Barraco",
  },
  {
    MABH: "1969",
    TENBH: "BOLO DOIDO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33944",
    TENBH: "BOM",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "3306",
    TENBH: "BOM BOCADO",
    TACGIA: "Art Popular",
  },
  {
    MABH: "30264",
    TENBH: "BOM RAPAZ",
    TACGIA: "Fernando e Sorocaba part. Jorge e Mateus",
  },
  {
    MABH: "30799",
    TENBH: "BOMBA RELÓGIO",
    TACGIA: "Luísa Sonza & Vitão",
  },
  {
    MABH: "1104",
    TENBH: "BONS MOMENTOS",
    TACGIA: "Inimigos da HP",
  },
  {
    MABH: "3865",
    TENBH: "BONS MOMENTOS",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "18649",
    TENBH: "BOOGIE DOWN",
    TACGIA: "Al Jarreau",
  },
  {
    MABH: "18724",
    TENBH: "BOOGIE WONDERLAND",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "24011",
    TENBH: "BOOM CLAP",
    TACGIA: "Charli XCX",
  },
  {
    MABH: "24591",
    TENBH: "BOOM SHACK-A-LACK",
    TACGIA: "Apache Indian",
  },
  {
    MABH: "18832",
    TENBH: "BOOM, BOOM, BOOM, BOOM",
    TACGIA: "Vengaboys",
  },
  {
    MABH: "26008",
    TENBH: "BOOMBASTIC",
    TACGIA: "Shaggy",
  },
  {
    MABH: "3375",
    TENBH: "BOQUINHA DA GARRAFA",
    TACGIA: "Companhia do Pagode",
  },
  {
    MABH: "31050",
    TENBH: "BORA",
    TACGIA: "Washington Brasileiro",
  },
  {
    MABH: "1970",
    TENBH: "BORA SE ACABAR",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "9623",
    TENBH: "BORBOLETAS",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "3307",
    TENBH: "BORBULHAS DE AMOR",
    TACGIA: "Fagner",
  },
  {
    MABH: "2584",
    TENBH: "BORDERLINE",
    TACGIA: "Madonna",
  },
  {
    MABH: "26029",
    TENBH: "BORED",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "24409",
    TENBH: "BORED TO DEATH",
    TACGIA: "Blink 182",
  },
  {
    MABH: "5877",
    TENBH: "BORN IN THE USA",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "2553",
    TENBH: "BORN ON THE BAYOU",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "24294",
    TENBH: "BORN THIS WAY",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "4690",
    TENBH: "BORN TO BE ALIVE",
    TACGIA: "Patrick Hernandez",
  },
  {
    MABH: "4617",
    TENBH: "BORN TO BE WILD",
    TACGIA: "Steppenwolf",
  },
  {
    MABH: "18833",
    TENBH: "BORN TO RUN",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "9009",
    TENBH: "BORN TO TRY",
    TACGIA: "Delta Goodrem",
  },
  {
    MABH: "24010",
    TENBH: "BOSS",
    TACGIA: "Fifth Harmony",
  },
  {
    MABH: "30097",
    TENBH: "BOTA A CARA NO SOL",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "33986",
    TENBH: "BOTECO DE ESQUINA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "4305",
    TENBH: "BOTO PRA REMEXER",
    TACGIA: "Leonardo",
  },
  {
    MABH: "24233",
    TENBH: "BOULEVARD OF BROKEN DREAMS",
    TACGIA: "Green Day",
  },
  {
    MABH: "24020",
    TENBH: "BOYFRIEND",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "26180",
    TENBH: "BOYS (SUMMERTIME LOVE)",
    TACGIA: "Sabrina",
  },
  {
    MABH: "9010",
    TENBH: "BOYS DON'T CRY",
    TACGIA: "The Cure",
  },
  {
    MABH: "30978",
    TENBH: "BRABA",
    TACGIA: "Luísa Sonza",
  },
  {
    MABH: "4390",
    TENBH: "BRASIL",
    TACGIA: "Cazuza",
  },
  {
    MABH: "3033",
    TENBH: "BRASIL PANDEIRO",
    TACGIA: "Moraes Moreira",
  },
  {
    MABH: "18834",
    TENBH: "BRASS MONKEY",
    TACGIA: "Beastie Boys",
  },
  {
    MABH: "24592",
    TENBH: "BRAVE",
    TACGIA: "Sara Bareilles",
  },
  {
    MABH: "24005",
    TENBH: "BREAK FREE",
    TACGIA: "Ariana Grande ft. Zedd",
  },
  {
    MABH: "26152",
    TENBH: "BREAK MY HEART",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26087",
    TENBH: "BREAK MY STRIDE",
    TACGIA: "Matthew Wilder",
  },
  {
    MABH: "4869",
    TENBH: "BREAK ON THROUGH (TO THE OTHER SIDE)",
    TACGIA: "The Doors",
  },
  {
    MABH: "18242",
    TENBH: "BREAK THE ICE",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24811",
    TENBH: "BREAK UP WITH YOUR GIRLFRIEND, I'M BORED",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "9207",
    TENBH: "BREAKAWAY",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "9246",
    TENBH: "BREAKDOWN",
    TACGIA: "Jack Johnson",
  },
  {
    MABH: "18365",
    TENBH: "BREAKDOWN",
    TACGIA: "Seether",
  },
  {
    MABH: "24812",
    TENBH: "BREAKEVEN",
    TACGIA: "The Script",
  },
  {
    MABH: "9247",
    TENBH: "BREAKFAST AT TIFFANY'S",
    TACGIA: "Deep Blue Something",
  },
  {
    MABH: "4870",
    TENBH: "BREAKFAST IN AMERICA",
    TACGIA: "Supertramp",
  },
  {
    MABH: "5878",
    TENBH: "BREAKING FREE",
    TACGIA: "High School Musical",
  },
  {
    MABH: "18093",
    TENBH: "BREAKING THE HABIT",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "18524",
    TENBH: "BREAKING THE LAW",
    TACGIA: "Judas Priest",
  },
  {
    MABH: "9011",
    TENBH: "BREAKING UP IS HARD TO DO",
    TACGIA: "Neil Sedaka",
  },
  {
    MABH: "18836",
    TENBH: "BREAKOUT",
    TACGIA: "Swing Out Sister",
  },
  {
    MABH: "18525",
    TENBH: "BREATH",
    TACGIA: "Breaking Benjamin",
  },
  {
    MABH: "9208",
    TENBH: "BREATHE",
    TACGIA: "Faith Hill",
  },
  {
    MABH: "24593",
    TENBH: "BREATHE AGAIN",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "18262",
    TENBH: "BREATHE NO MORE",
    TACGIA: "Evanescence",
  },
  {
    MABH: "18650",
    TENBH: "BREATHLESS",
    TACGIA: "The Corrs",
  },
  {
    MABH: "33850",
    TENBH: "BREGA-CHIQUE (O VENTO LEVOU BLACK) (DOMÉSTICA)",
    TACGIA: "Eduardo Dusek",
  },
  {
    MABH: "26218",
    TENBH: "BRICK HOUSE",
    TACGIA: "Commodores",
  },
  {
    MABH: "4571",
    TENBH: "BRIDGE OVER TROUBLED WATER",
    TACGIA: "Simon & Garfunkel",
  },
  {
    MABH: "30899",
    TENBH: "BRIGA FEIA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "4067",
    TENBH: "BRIGAS",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "33366",
    TENBH: "BRIGAS POR NADA",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "18158",
    TENBH: "BRIGHTER THAN THE SUN",
    TACGIA: "Colbie Caillat",
  },
  {
    MABH: "6564",
    TENBH: "BRILHA LA LUNA",
    TACGIA: "Rouge",
  },
  {
    MABH: "30591",
    TENBH: "BRILHO DE CRISTAL",
    TACGIA: "Inimigos do HP",
  },
  {
    MABH: "33602",
    TENBH: "BRINCADEIRA DA TOMADA",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "3991",
    TENBH: "BRINCANDEIRA DE CRIANÇA",
    TACGIA: "Molejo",
  },
  {
    MABH: "3034",
    TENBH: "BRINCAR DE ÍNDIO",
    TACGIA: "Xuxa",
  },
  {
    MABH: "3035",
    TENBH: "BRINCAR DE SER FELIZ",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "3459",
    TENBH: "BRINCAR DE VIVER",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "5879",
    TENBH: "BRING ME TO LIFE",
    TACGIA: "Evanescence",
  },
  {
    MABH: "30903",
    TENBH: "BRISA",
    TACGIA: "Iza",
  },
  {
    MABH: "2562",
    TENBH: "BROKEN",
    TACGIA: "Seether ft. Amy Lee",
  },
  {
    MABH: "24447",
    TENBH: "BROKEN HEARTED GIRL",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "4871",
    TENBH: "BROKEN WINGS",
    TACGIA: "Mr. Mister",
  },
  {
    MABH: "5880",
    TENBH: "BROTHERS IN ARMS",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "3651",
    TENBH: "BROTO LEGAL",
    TACGIA: "Celly Campello",
  },
  {
    MABH: "26131",
    TENBH: "BROWN EYED GIRL",
    TACGIA: "Van Morrison",
  },
  {
    MABH: "26077",
    TENBH: "BRUISES",
    TACGIA: "Lewis Capaldi",
  },
  {
    MABH: "33953",
    TENBH: "BRUTO E CARINHOSO",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "30455",
    TENBH: "BRUTO RÚSTICO E SISTEMÁTICO",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "30606",
    TENBH: "BUÁ BUÁ",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "24173",
    TENBH: "BUBBLY",
    TACGIA: "Colbie Caillat",
  },
  {
    MABH: "18068",
    TENBH: "BUDAPEST",
    TACGIA: "George Ezra",
  },
  {
    MABH: "24692",
    TENBH: "BUDDY HOLLY",
    TACGIA: "Weezer",
  },
  {
    MABH: "18526",
    TENBH: "BUFFALO SOLDIER",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "6169",
    TENBH: "BUG BUG BYE BYE",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "9248",
    TENBH: "BUILD",
    TACGIA: "The Housemartins",
  },
  {
    MABH: "18975",
    TENBH: "BULLET WITH BUTTERFLY WINGS",
    TACGIA: "Smashing Pumpkins",
  },
  {
    MABH: "18837",
    TENBH: "BULLS ON PARADE",
    TACGIA: "Rage Against The Machine",
  },
  {
    MABH: "6649",
    TENBH: "BUM, BUM, BUM",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "30491",
    TENBH: "BUMBUM DE OURO",
    TACGIA: "Gloria Groove",
  },
  {
    MABH: "33943",
    TENBH: "BUMBUM GRANADA",
    TACGIA: "MCs Zaac & Jerry",
  },
  {
    MABH: "15166",
    TENBH: "BUQUÊ DE FLORES",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "9624",
    TENBH: "BURGUESINHA",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "24044",
    TENBH: "BURN",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "24641",
    TENBH: "BURN IT DOWN",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24417",
    TENBH: "BURN THE WITCH",
    TACGIA: "Radiohead",
  },
  {
    MABH: "24052",
    TENBH: "BURNIN' IT DOWN",
    TACGIA: "Jason Aldean",
  },
  {
    MABH: "18651",
    TENBH: "BURNING HEART",
    TACGIA: "Survivor",
  },
  {
    MABH: "4618",
    TENBH: "BURNING LOVE",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24858",
    TENBH: "BURY A FRIEND",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "33424",
    TENBH: "BUSCA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "24693",
    TENBH: "BUTTERFLY",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "18329",
    TENBH: "BUTTONS",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "30029",
    TENBH: "BÚZIOS E TARÔ",
    TACGIA: "Soweto",
  },
  {
    MABH: "7308",
    TENBH: "BWANA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "9012",
    TENBH: "BY MY SIDE",
    TACGIA: "INXS",
  },
  {
    MABH: "18340",
    TENBH: "BY THE WAY",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "9209",
    TENBH: "BY YOUR SIDE",
    TACGIA: "Sade",
  },
  {
    MABH: "24490",
    TENBH: "BY YOUR SIDE",
    TACGIA: "Jonas Blue",
  },
  {
    MABH: "24694",
    TENBH: "BYE BYE",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "30607",
    TENBH: "BYE BYE",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "24594",
    TENBH: "BYE BYE BABY",
    TACGIA: "Bay City Rollers",
  },
  {
    MABH: "6766",
    TENBH: "BYE BYE BRASIL",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "18095",
    TENBH: "BYE BYE BYE",
    TACGIA: "N' Sync",
  },
  {
    MABH: "3308",
    TENBH: "BYE, BYE TRISTEZA",
    TACGIA: "Sandra de Sá",
  },
  {
    MABH: "2784",
    TENBH: "CABEÇA DE BAGRE II",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "30855",
    TENBH: "CABEÇA VOANDO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "3460",
    TENBH: "CABECINHA NO OMBRO",
    TACGIA: "Almir Sater",
  },
  {
    MABH: "33601",
    TENBH: "CABELO RASPADINHO",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "30942",
    TENBH: "CABOCLA TEREZA",
    TACGIA: "Tonico & Tinoco",
  },
  {
    MABH: "3036",
    TENBH: "CAÇA E CAÇADOR",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "1884",
    TENBH: "CAÇADOR DE MIM",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "3037",
    TENBH: "CAÇAMBA",
    TACGIA: "Molejo",
  },
  {
    MABH: "9626",
    TENBH: "CACHACEIRO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30340",
    TENBH: "CACHIMBO DA PAZ",
    TACGIA: "Gabriel O Pensador",
  },
  {
    MABH: "6486",
    TENBH: "CACHORRINHO",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "33942",
    TENBH: "CACHORRO DE RUA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "2801",
    TENBH: "CACHORRO PERIGOSO",
    TACGIA: "Tchê Garotos",
  },
  {
    MABH: "33428",
    TENBH: "CADA POÇA DESSA RUA TEM UM POUCO DE MINHAS LÁGRIMAS",
    TACGIA: "Fresno",
  },
  {
    MABH: "6487",
    TENBH: "CADA UM, CADA UM (A NAMORADEIRA)",
    TACGIA: "Cláudio Zoli",
  },
  {
    MABH: "3908",
    TENBH: "CADA VOLTA É UM RECOMEÇO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30494",
    TENBH: "CADÊ AQUELE AMOR",
    TACGIA: "Grupo Doce Encontro",
  },
  {
    MABH: "1006",
    TENBH: "CADÊ DALILA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "6726",
    TENBH: "CADÊ TEREZA",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "3038",
    TENBH: "CADE VOCÊ",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30098",
    TENBH: "CADÊ VOCÊ?",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30099",
    TENBH: "CADEIRA DE AÇO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "4146",
    TENBH: "CADEIRA DE RODAS",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "6449",
    TENBH: "CADEIRA VAZIA",
    TACGIA: "Lupicínio Rodrigues",
  },
  {
    MABH: "15449",
    TENBH: "CAFAJESTE",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30871",
    TENBH: "CAFÉ",
    TACGIA: "Vitão",
  },
  {
    MABH: "3309",
    TENBH: "CAFÉ DA MANHÃ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6090",
    TENBH: "CAI A NOITE",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "6565",
    TENBH: "CAI FORA",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "6050",
    TENBH: "CAIXA POSTAL",
    TACGIA: "Bala, Bombom e Chocolate",
  },
  {
    MABH: "15365",
    TENBH: "CAJUÍNA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "33087",
    TENBH: "CALAFRIO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30100",
    TENBH: "CALCANHAR DE PREGO",
    TACGIA: "Banda Vingadora",
  },
  {
    MABH: "7310",
    TENBH: "CALEIDOSCÓPIO",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "4505",
    TENBH: "CALIFORNIA DREAMIN'",
    TACGIA: "Mamas & The Papas",
  },
  {
    MABH: "24275",
    TENBH: "CALIFORNIA GIRLS",
    TACGIA: "Katy Perry ft. Snoop Dogg",
  },
  {
    MABH: "18346",
    TENBH: "CALIFORNIA KING BED",
    TACGIA: "Rihanna",
  },
  {
    MABH: "4816",
    TENBH: "CALIFORNICATION",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "4872",
    TENBH: "CALL ME",
    TACGIA: "Blondie",
  },
  {
    MABH: "24152",
    TENBH: "CALL ME MAYBE",
    TACGIA: "Carly Rae Jepsen",
  },
  {
    MABH: "5881",
    TENBH: "CALL ME WHEN YOU'RE SOBER",
    TACGIA: "Evanescence",
  },
  {
    MABH: "33176",
    TENBH: "CALMA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15324",
    TENBH: "CALMA AÍ",
    TACGIA: "Marcos e Belutti & Fernando e Sorocaba",
  },
  {
    MABH: "6209",
    TENBH: "CAMA E MESA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "2844",
    TENBH: "CAMARO AMARELO",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "33355",
    TENBH: "CAMAROTE",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "4306",
    TENBH: "CAMILA, CAMILA",
    TACGIA: "Nenhum de Nós",
  },
  {
    MABH: "33356",
    TENBH: "CAMINHÃO PIPA",
    TACGIA: "Conrado e Aleksandro",
  },
  {
    MABH: "15931",
    TENBH: "CAMINHEIRO",
    TACGIA: "Carlos Cezar e Cristiano",
  },
  {
    MABH: "30918",
    TENBH: "CAMINHEIRO",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "7311",
    TENBH: "CAMINHEMOS",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "4147",
    TENBH: "CAMINHONEIRO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33091",
    TENBH: "CAMINHONETE INTEIRA",
    TACGIA: "Conrado e Aleksandro",
  },
  {
    MABH: "7917",
    TENBH: "CAMINHOS CRUZADOS",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "33097",
    TENBH: "CAMINHOS DIFERENTES",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "6091",
    TENBH: "CAMINHOS DO MAR",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "3695",
    TENBH: "CAMINHOS DO SOL",
    TACGIA: "Yahoo",
  },
  {
    MABH: "33463",
    TENBH: "CAMISA 10",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "26210",
    TENBH: "CAN YOU FEEL IT",
    TACGIA: "The Jacksons",
  },
  {
    MABH: "4817",
    TENBH: "CAN YOU FEEL THE LOVE TONIGHT",
    TACGIA: "Elton John",
  },
  {
    MABH: "15245",
    TENBH: "CANARINHO PRISIONEIRO",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "3039",
    TENBH: "CANÇÃO DA AMÉRICA",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "6363",
    TENBH: "CANÇÃO DO MAR",
    TACGIA: "Dulce Pontes",
  },
  {
    MABH: "6210",
    TENBH: "CANÇÃO PRA VOCÊ VIVER MAIS",
    TACGIA: "Pato Fu",
  },
  {
    MABH: "30608",
    TENBH: "CANCELA O SENTIMENTO",
    TACGIA: "Marcos e Belutti part. Marília Mendonça",
  },
  {
    MABH: "33100",
    TENBH: "CANCERIANO SEM LAR",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "1355",
    TENBH: "CANÇÕES DE REI",
    TACGIA: "Max Viana",
  },
  {
    MABH: "30495",
    TENBH: "CANCUN",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "18096",
    TENBH: "CANDIDA",
    TACGIA: "Tony Orlando & Dawn",
  },
  {
    MABH: "7918",
    TENBH: "CÂNDIDA",
    TACGIA: "The Fevers",
  },
  {
    MABH: "4873",
    TENBH: "CANDLE IN THE WIND",
    TACGIA: "Elton John",
  },
  {
    MABH: "9210",
    TENBH: "CANDY",
    TACGIA: "Iggy Pop",
  },
  {
    MABH: "18252",
    TENBH: "CANDY MAN",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "18656",
    TENBH: "CANDY SHOP",
    TACGIA: "50 Cent",
  },
  {
    MABH: "4348",
    TENBH: "CANIBAL",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "18459",
    TENBH: "CANNONBALL",
    TACGIA: "The Breeders",
  },
  {
    MABH: "30127",
    TENBH: "CANOEIRO",
    TACGIA: "Tonico e Tinoco",
  },
  {
    MABH: "5882",
    TENBH: "CAN'T BUY ME LOVE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18759",
    TENBH: "CAN'T GET ENOUGH OF YOUR LOVE",
    TACGIA: "Barry White",
  },
  {
    MABH: "4874",
    TENBH: "CAN'T GET YOU OFF MY MIND",
    TACGIA: "Lenny Kravitz",
  },
  {
    MABH: "18192",
    TENBH: "CAN'T GET YOU OUT OF MY HEAD",
    TACGIA: "Kylie Minogue",
  },
  {
    MABH: "4572",
    TENBH: "CAN'T HELP FALLIN' IN LOVE",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24369",
    TENBH: "CAN'T REMEMBER TO FORGET YOU",
    TACGIA: "Shakira ft. Rihanna",
  },
  {
    MABH: "4691",
    TENBH: "CAN'T SMILE WITHOUT YOU",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "18097",
    TENBH: "CAN'T STAND ME NOW",
    TACGIA: "The Libertines",
  },
  {
    MABH: "18210",
    TENBH: "CAN'T STOP",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "2513",
    TENBH: "CAN'T STOP LOVING YOU",
    TACGIA: "Van Halen",
  },
  {
    MABH: "24414",
    TENBH: "CAN'T STOP THE FEELING",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "4875",
    TENBH: "CAN'T STOP THIS THING WE STARTED",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "9013",
    TENBH: "CAN'T TAKE MY EYES OFF YOU",
    TACGIA: "Frankie Valli",
  },
  {
    MABH: "18838",
    TENBH: "CAN'T YOU FEEL MY LOVE",
    TACGIA: "Matthew Fisher",
  },
  {
    MABH: "9406",
    TENBH: "CANTA BRASIL",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "3409",
    TENBH: "CANTA MINHA GENTE",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "33860",
    TENBH: "CANTADA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "3696",
    TENBH: "CANTEIROS",
    TACGIA: "Fagner",
  },
  {
    MABH: "30496",
    TENBH: "CANTO ALEGRETENSE",
    TACGIA: "Os Serranos",
  },
  {
    MABH: "7082",
    TENBH: "CANTO DAS TRÊS RAÇAS",
    TACGIA: "Clara Nunes",
  },
  {
    MABH: "1544",
    TENBH: "CANTO DE OSSANHA",
    TACGIA: "Toquinho e Vinicius de Moraes",
  },
  {
    MABH: "30449",
    TENBH: "CANTO, BEBO E CHORO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "33600",
    TENBH: "CANUDINHO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "30385",
    TENBH: "CAPA DE REVISTA",
    TACGIA: "Gilberto e Gilmar",
  },
  {
    MABH: "33643",
    TENBH: "CAPAZ DE TUDO",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "3652",
    TENBH: "CAPIM GUINÉ",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "33644",
    TENBH: "CAPRICHA GAITEIRO",
    TACGIA: "Grupo Tradição",
  },
  {
    MABH: "3040",
    TENBH: "CAPRICHO DOS DEUSES",
    TACGIA: "Netinho",
  },
  {
    MABH: "30265",
    TENBH: "CARA BACANA",
    TACGIA: "MC G15",
  },
  {
    MABH: "30610",
    TENBH: "CARA CARAMBA SOU CAMALEÃO",
    TACGIA: "Chiclete Com Banana",
  },
  {
    MABH: "4266",
    TENBH: "CARA DE PAU",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33994",
    TENBH: "CARA DE PAU",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33645",
    TENBH: "CARA LISA",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "6685",
    TENBH: "CARA VALENTE",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "33383",
    TENBH: "CARACA, MULEKE",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "30929",
    TENBH: "CARAMBA QUE BAILE BOM",
    TACGIA: "Terceira Dimensão",
  },
  {
    MABH: "33399",
    TENBH: "CARCARÁ",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "26182",
    TENBH: "CARDIGAN",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "4692",
    TENBH: "CARELESS WHISPERS",
    TACGIA: "George Michael",
  },
  {
    MABH: "33954",
    TENBH: "CARÊNCIA",
    TACGIA: "Humberto e Ronaldo part. Jorge e Mateus",
  },
  {
    MABH: "24956",
    TENBH: "CARIBBEAN QUEEN",
    TACGIA: "Billy Ocean",
  },
  {
    MABH: "3697",
    TENBH: "CARINHOSO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "6407",
    TENBH: "CARLA",
    TACGIA: "LS Jack",
  },
  {
    MABH: "30497",
    TENBH: "CARNAVAL",
    TACGIA: "Cláudia Leitte ft. Pitbull",
  },
  {
    MABH: "7315",
    TENBH: "CAROLINA",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "9630",
    TENBH: "CAROLINA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4693",
    TENBH: "CAROLINA IN MY MIND",
    TACGIA: "James Taylor",
  },
  {
    MABH: "30896",
    TENBH: "CARREIRA SOLO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "18527",
    TENBH: "CARRIE",
    TACGIA: "Europe",
  },
  {
    MABH: "4027",
    TENBH: "CARRINHO DE MÃO",
    TACGIA: "Terra Samba",
  },
  {
    MABH: "33147",
    TENBH: "CARRO PANCADAO",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "33151",
    TENBH: "CARRO VELHO",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "24878",
    TENBH: "CARRY ON",
    TACGIA: "Kygo & Rita Ora",
  },
  {
    MABH: "30822",
    TENBH: "CARRY ON",
    TACGIA: "Angra",
  },
  {
    MABH: "18528",
    TENBH: "CARRY ON MY WAYWARD SON",
    TACGIA: "Kansas",
  },
  {
    MABH: "33859",
    TENBH: "CARTA BRANCA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "9632",
    TENBH: "CARTA SOBRE A MESA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4069",
    TENBH: "CARTÃO POSTAL",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "15525",
    TENBH: "CARTAS DE AMOR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30782",
    TENBH: "CARTAZ",
    TACGIA: "Fagner",
  },
  {
    MABH: "33425",
    TENBH: "CARTÓRIO",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "7005",
    TENBH: "CARUSO",
    TACGIA: "Lucio Dalla",
  },
  {
    MABH: "7921",
    TENBH: "CARVÃO",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "3462",
    TENBH: "CASA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "30128",
    TENBH: "CASA AMARELA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33955",
    TENBH: "CASA BRANCA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30289",
    TENBH: "CASA COMIGO",
    TACGIA: "Zé Henrique e Gabriel part. Maiara e Maraisa",
  },
  {
    MABH: "30129",
    TENBH: "CASA DE CABOCLO",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33599",
    TENBH: "CASA DE DEUS",
    TACGIA: "Damares",
  },
  {
    MABH: "2971",
    TENBH: "CASA DO PAI",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "30499",
    TENBH: "CASA MOBILIADA",
    TACGIA: "Israel e Rodolffo part. Edson e Hudson",
  },
  {
    MABH: "33744",
    TENBH: "CASA VAZIA",
    TACGIA: "Cascatinha e Inhana",
  },
  {
    MABH: "4573",
    TENBH: "CASABLANCA",
    TACGIA: "Bertie Higgins",
  },
  {
    MABH: "30130",
    TENBH: "CASADO, NAMORANDO, SOLTEIRO",
    TACGIA: "Tierry",
  },
  {
    MABH: "30852",
    TENBH: "CASAL MODÃO",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "30735",
    TENBH: "CASAL RAIZ",
    TACGIA: "Xand Avião",
  },
  {
    MABH: "30736",
    TENBH: "CASALZIN",
    TACGIA: "Jerry Smith",
  },
  {
    MABH: "15486",
    TENBH: "CASAMENTO DO JOÃO",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "30118",
    TENBH: "CASAMENTO FORÇADO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33510",
    TENBH: "CASE-SE COMIGO",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "3866",
    TENBH: "CASINHA BRANCA",
    TACGIA: "Gilson",
  },
  {
    MABH: "33115",
    TENBH: "CASO CONSUMADO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "15286",
    TENBH: "CASO INDEFINIDO",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "33465",
    TENBH: "CASO MARCADO",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30131",
    TENBH: "CASO PASSAGEIRO",
    TACGIA: "Jerry Adriani",
  },
  {
    MABH: "7923",
    TENBH: "CASO POR ACASO",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "3041",
    TENBH: "CASO SÉRIO",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "30921",
    TENBH: "CASTELHANA",
    TACGIA: "Os Serranos",
  },
  {
    MABH: "9412",
    TENBH: "CASTELO DE AREIA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "1782",
    TENBH: "CASTIGO",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "18190",
    TENBH: "CASTLE OF GLASS",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24499",
    TENBH: "CASTLE ON THE HILL",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "33598",
    TENBH: "CATATAU NERVOSO",
    TACGIA: "Bezerra da Silva",
  },
  {
    MABH: "3042",
    TENBH: "CATEDRAL",
    TACGIA: "Zélia Duncan",
  },
  {
    MABH: "7569",
    TENBH: "CÁTIA CATCHAÇA",
    TACGIA: "Latino",
  },
  {
    MABH: "15647",
    TENBH: "CATRACA",
    TACGIA: "Banda Uó ft. Mr. Catra",
  },
  {
    MABH: "30412",
    TENBH: "CATUABA",
    TACGIA: "Aretuza Lovi ft. Gloria Groove",
  },
  {
    MABH: "18529",
    TENBH: "CAUGHT IN A MOSH",
    TACGIA: "Anthrax",
  },
  {
    MABH: "4149",
    TENBH: "CAVALGADA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6528",
    TENBH: "CAVIAR",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33956",
    TENBH: "CAZAMIGA",
    TACGIA: "Henrique e Abel part. Naiara Azevedo",
  },
  {
    MABH: "15648",
    TENBH: "CDS E LIVROS",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30290",
    TENBH: "CÊ ACREDITA",
    TACGIA: "João Neto e Frederico part. MC Kevinho",
  },
  {
    MABH: "33113",
    TENBH: "CÊ GAMA",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33049",
    TENBH: "CÊ QUE SABE",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "33144",
    TENBH: "CÊ SABE O QUE EU ACHO",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "33216",
    TENBH: "CÊ TOPA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30101",
    TENBH: "CÊ VOLTA",
    TACGIA: "Lucas e Thiago part. Eduardo Costa",
  },
  {
    MABH: "9635",
    TENBH: "CEDO OU TARDE",
    TACGIA: "NX Zero",
  },
  {
    MABH: "1408",
    TENBH: "CEGO, SURDO E MUDO",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "15104",
    TENBH: "CELEBRAR",
    TACGIA: "Jammil & Uma Noites",
  },
  {
    MABH: "4694",
    TENBH: "CELEBRATION",
    TACGIA: "Kool & The Gang",
  },
  {
    MABH: "18048",
    TENBH: "CELEBRATION",
    TACGIA: "Madonna",
  },
  {
    MABH: "6604",
    TENBH: "CEM ANOS",
    TACGIA: "Falamansa",
  },
  {
    MABH: "30737",
    TENBH: "CEM MIL",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33646",
    TENBH: "CEM POR CENTO MUITO LOUCO",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "18530",
    TENBH: "CEMETERY GATES",
    TACGIA: "Pantera",
  },
  {
    MABH: "2845",
    TENBH: "CENA DE NOVELA",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "24352",
    TENBH: "CENTURIES",
    TACGIA: "Fall Out Boy",
  },
  {
    MABH: "6053",
    TENBH: "CEROL NA MÃO",
    TACGIA: "Bonde do Tigrão",
  },
  {
    MABH: "6327",
    TENBH: "CERTAS COISAS",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "3786",
    TENBH: "CERVEJA",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30500",
    TENBH: "CERVEJA DE GARRAFA",
    TACGIA: "Atitude 67",
  },
  {
    MABH: "30692",
    TENBH: "CERVEJA, SAL E LIMÃO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "30291",
    TENBH: "CERVEJEIRA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "2846",
    TENBH: "CÉU AZUL",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33369",
    TENBH: "CÉU COMPLETO (ACÚSTICO)",
    TACGIA: "Strike",
  },
  {
    MABH: "30292",
    TENBH: "CÉU DA BOCA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "6768",
    TENBH: "CÉU DE SANTO AMARO",
    TACGIA: "Flávio Venturini part. Caetano Veloso",
  },
  {
    MABH: "24511",
    TENBH: "CHAINED TO THE RHYTHM",
    TACGIA: "Katy Perry ft. Skip Marley",
  },
  {
    MABH: "4184",
    TENBH: "CHALANA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "30912",
    TENBH: "CHAMA ELA",
    TACGIA: "Lexa, Pedro Sampaio",
  },
  {
    MABH: "33169",
    TENBH: "CHAMAM ISSO DE TRAIÇAO",
    TACGIA: "Joao Neto e Frederico e Bruno & Marrone",
  },
  {
    MABH: "6897",
    TENBH: "CHAMO POR VOCÊ",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "30611",
    TENBH: "CHAMOU, CHAMOU",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "3830",
    TENBH: "CHAMPAGNE",
    TACGIA: "Peppino Di Capri",
  },
  {
    MABH: "6814",
    TENBH: "CHAMPAGNE E ÁGUA BENTA",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "18373",
    TENBH: "CHAMPAGNE SUPERNOVA",
    TACGIA: "Oasis",
  },
  {
    MABH: "33858",
    TENBH: "CHANCE",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "24097",
    TENBH: "CHANDELIER",
    TACGIA: "Sia",
  },
  {
    MABH: "18200",
    TENBH: "CHANGE (IN THE HOUSE OF FLIES)",
    TACGIA: "Deftones",
  },
  {
    MABH: "4876",
    TENBH: "CHANGE THE WORLD",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "26054",
    TENBH: "CHANGES",
    TACGIA: "Godsmack",
  },
  {
    MABH: "24464",
    TENBH: "CHANTAJE",
    TACGIA: "Shakira ft. Maluma",
  },
  {
    MABH: "6054",
    TENBH: "CHÃO DE ESTRELAS",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "3609",
    TENBH: "CHÃO DE GIZ",
    TACGIA: "Elba Ramalho",
  },
  {
    MABH: "3698",
    TENBH: "CHARLIE BROWN",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "1972",
    TENBH: "CHARME DO MUNDO",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "24695",
    TENBH: "CHASING CARS",
    TACGIA: "Snow Patrol",
  },
  {
    MABH: "2603",
    TENBH: "CHASING PAVEMENTS",
    TACGIA: "Adele",
  },
  {
    MABH: "24147",
    TENBH: "CHASING THE SUN",
    TACGIA: "The Wanted",
  },
  {
    MABH: "24387",
    TENBH: "CHEAP THRILLS",
    TACGIA: "Sia",
  },
  {
    MABH: "18839",
    TENBH: "CHEEK TO CHEEK",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24098",
    TENBH: "CHEERLEADER (FELIX JAEHN REMIX)",
    TACGIA: "Omi",
  },
  {
    MABH: "33794",
    TENBH: "CHEFE É CHEFE, NÉ PAI",
    TACGIA: "MC Maneirinho",
  },
  {
    MABH: "3745",
    TENBH: "CHEGA DE SAUDADE",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "6008",
    TENBH: "CHEGA DE SOFRER",
    TACGIA: "Grupo Pique Novo",
  },
  {
    MABH: "33116",
    TENBH: "CHEGA MAIS PRA CÁ",
    TACGIA: "Gusttavo Lima & Humberto e Ronaldo",
  },
  {
    MABH: "30102",
    TENBH: "CHEGA PRA CÁ",
    TACGIA: "Tiago Iorc",
  },
  {
    MABH: "30103",
    TENBH: "CHEGASTE",
    TACGIA: "Roberto Carlos part. Jennifer Lopez",
  },
  {
    MABH: "30133",
    TENBH: "CHEGUEI",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "3045",
    TENBH: "CHEIA DE CHARME",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "3046",
    TENBH: "CHEIA DE MANIAS",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33957",
    TENBH: "CHEIA DE MARRA",
    TACGIA: "MC Livinho",
  },
  {
    MABH: "30293",
    TENBH: "CHEIRO DA MAÇÃ",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "9416",
    TENBH: "CHEIRO DE AMOR",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "6898",
    TENBH: "CHEIRO DE SHAMPOO",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30840",
    TENBH: "CHEIROSA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "18652",
    TENBH: "CHERISH",
    TACGIA: "Kool & The Gang",
  },
  {
    MABH: "30456",
    TENBH: "CHIC BACANIZADO",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "33597",
    TENBH: "CHIC CHIC",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "3557",
    TENBH: "CHICO MINEIRO",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "30294",
    TENBH: "CHIFRE NÃO É ASA",
    TACGIA: "Thayná Bitencourt part. Mano Walter",
  },
  {
    MABH: "18840",
    TENBH: "CHILD IN TIME",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "26026",
    TENBH: "CHINA",
    TACGIA: "Anuel AA, Daddy Yankee, Karol G, Ozuna & J. Balvin",
  },
  {
    MABH: "30613",
    TENBH: "CHIP",
    TACGIA: "Israel Novaes part. Márcio Victor e Jerry Smith",
  },
  {
    MABH: "4877",
    TENBH: "CHIQUITITA",
    TACGIA: "ABBA",
  },
  {
    MABH: "6769",
    TENBH: "CHOCOLATE",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "30295",
    TENBH: "CHOCOLATE COM PIMENTA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33958",
    TENBH: "CHOCOLATE QUENTE",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "24161",
    TENBH: "CHOP SUEY",
    TACGIA: "System of A Down",
  },
  {
    MABH: "3047",
    TENBH: "CHOPIS CENTIS",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "30977",
    TENBH: "CHOQUE TÉRMICO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30266",
    TENBH: "CHORA BOY",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "30296",
    TENBH: "CHORA CAROLINA",
    TACGIA: "Emilio e Eduardo",
  },
  {
    MABH: "7086",
    TENBH: "CHORA CORAÇÃO",
    TACGIA: "Wando",
  },
  {
    MABH: "33608",
    TENBH: "CHORA NÃO BEBÊ",
    TACGIA: "Pablo",
  },
  {
    MABH: "30275",
    TENBH: "CHORA PEITO",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "2787",
    TENBH: "CHORA, CHORA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "1126",
    TENBH: "CHORA, ME LIGA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "6899",
    TENBH: "CHORAM AS ROSAS",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33745",
    TENBH: "CHORANDO MAMADO",
    TACGIA: "Conrado e Aleksandro",
  },
  {
    MABH: "33959",
    TENBH: "CHORANDO NA CALÇADA",
    TACGIA: "Villa Baggage",
  },
  {
    MABH: "6605",
    TENBH: "CHORANDO SE FOI",
    TACGIA: "Kaoma",
  },
  {
    MABH: "30297",
    TENBH: "CHORÃO APAIXONADO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33764",
    TENBH: "CHORÊNCIA",
    TACGIA: "Tierry",
  },
  {
    MABH: "15046",
    TENBH: "CHORO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "33279",
    TENBH: "CHORO E BEBO",
    TACGIA: "Nando Moreno & Rio Negro e Solimões",
  },
  {
    MABH: "30041",
    TENBH: "CHOROU NA ESCADARIA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "3048",
    TENBH: "CHOVE CHUVA",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "1651",
    TENBH: "CHOVE, CHOVE",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "6815",
    TENBH: "CHOVENDO ESTRELAS",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "9643",
    TENBH: "CHUPA QUE É DE UVA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "30919",
    TENBH: "CHUPADINHA",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "33883",
    TENBH: "CHUPANDO DEDO",
    TACGIA: "Iohannes",
  },
  {
    MABH: "33960",
    TENBH: "CHUTE E BOMBA",
    TACGIA: "Paula Mattos part. Wesley Safadão",
  },
  {
    MABH: "33596",
    TENBH: "CHUVA DE ARROZ",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "3357",
    TENBH: "CHUVA DE PRATA",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "30791",
    TENBH: "CHUVAS DE VERÃO",
    TACGIA: "José Augusto",
  },
  {
    MABH: "33426",
    TENBH: "CICATRIZES",
    TACGIA: "Kleo Dibah e Rafael part. Gusttavo Lima",
  },
  {
    MABH: "30810",
    TENBH: "CICLO SEM FIM",
    TACGIA: "Rei Leão",
  },
  {
    MABH: "3746",
    TENBH: "CIDADÃO",
    TACGIA: "Zé Geraldo",
  },
  {
    MABH: "3463",
    TENBH: "CIGANA",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "9372",
    TENBH: "CIGANINHA",
    TACGIA: "Carlos Alexandre",
  },
  {
    MABH: "1210",
    TENBH: "CIGANO",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "3747",
    TENBH: "CILADA",
    TACGIA: "Katinguelê",
  },
  {
    MABH: "30015",
    TENBH: "CILADA",
    TACGIA: "Molejo",
  },
  {
    MABH: "24906",
    TENBH: "CIRCLE OF LIFE",
    TACGIA: "Elton John",
  },
  {
    MABH: "26105",
    TENBH: "CIRCLES",
    TACGIA: "Post Malone",
  },
  {
    MABH: "24013",
    TENBH: "CIRCUS",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "2604",
    TENBH: "CITY OF NEW ORLEANS",
    TACGIA: "Willie Nelson",
  },
  {
    MABH: "18725",
    TENBH: "CITY OF STARS",
    TACGIA: "La La Land",
  },
  {
    MABH: "3464",
    TENBH: "CÍUME",
    TACGIA: "Ultrage a Rigor",
  },
  {
    MABH: "3049",
    TENBH: "CIÚME DE VOCÊ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "1127",
    TENBH: "CIUME EXAGERADO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30614",
    TENBH: "CIUMEIRA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "9644",
    TENBH: "CIUMENTA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "33117",
    TENBH: "CIUMENTO DEMAIS",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "18976",
    TENBH: "CIVIL WAR",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "26117",
    TENBH: "CLANDESTINO",
    TACGIA: "Shakira ft. Maluma",
  },
  {
    MABH: "4104",
    TENBH: "CLAREAR",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "18073",
    TENBH: "CLASSIC",
    TACGIA: "Adrian Gurvitz",
  },
  {
    MABH: "15407",
    TENBH: "CLAUDINHA BAGUNCEIRA",
    TACGIA: "Claudia Leitte",
  },
  {
    MABH: "2685",
    TENBH: "CLICHÊ",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "15167",
    TENBH: "CLICHÊ",
    TACGIA: "João Neto e Frederico & Jorge e Mateus",
  },
  {
    MABH: "30693",
    TENBH: "CLICHÊ",
    TACGIA: "Ludmilla part. Felipe Araújo",
  },
  {
    MABH: "30615",
    TENBH: "CLIENTE PREFERENCIAL (MODÃO ATRÁS DO OUTRO)",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "6451",
    TENBH: "CLIMA DE RODEIO",
    TACGIA: "Dallas Company",
  },
  {
    MABH: "33647",
    TENBH: "CLIMATIZAR",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "18653",
    TENBH: "CLINT EASTWOOD",
    TACGIA: "Gorillaz",
  },
  {
    MABH: "5884",
    TENBH: "CLOCKS",
    TACGIA: "Coldplay",
  },
  {
    MABH: "24402",
    TENBH: "CLOSE",
    TACGIA: "Nick Jonas ft. Tove Lo",
  },
  {
    MABH: "26207",
    TENBH: "CLOSE TO ME",
    TACGIA: "The Cure",
  },
  {
    MABH: "9014",
    TENBH: "CLOSE TO YOU",
    TACGIA: "Carpenters",
  },
  {
    MABH: "33042",
    TENBH: "CLOSE TO YOU",
    TACGIA: "Cídia e Dan",
  },
  {
    MABH: "24465",
    TENBH: "CLOSER",
    TACGIA: "The Chainsmokers ft. Halsey",
  },
  {
    MABH: "26183",
    TENBH: "CLOSER",
    TACGIA: "The Corrs",
  },
  {
    MABH: "9096",
    TENBH: "CLOSER TO ME",
    TACGIA: "The Outfield",
  },
  {
    MABH: "24143",
    TENBH: "CLOSER TO THE EDGE",
    TACGIA: "30 Seconds To Mars",
  },
  {
    MABH: "18458",
    TENBH: "CLOSING TIME",
    TACGIA: "Semisonic",
  },
  {
    MABH: "24219",
    TENBH: "CLUB CAN'T HANDLE ME",
    TACGIA: "Flo Rida ft. David Guetta",
  },
  {
    MABH: "6727",
    TENBH: "CLUBE DA ESQUINA 2",
    TACGIA: "Flávio Venturini",
  },
  {
    MABH: "30134",
    TENBH: "CLUBE DO BATIDÃO",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "33830",
    TENBH: "CLUBE DOS CANALHAS",
    TACGIA: "Matanza",
  },
  {
    MABH: "18654",
    TENBH: "COAT OF MANY COLORS",
    TACGIA: "Dolly Parton",
  },
  {
    MABH: "30694",
    TENBH: "COBAIA",
    TACGIA: "Lauana Prado part. Maiara e Maraisa",
  },
  {
    MABH: "6328",
    TENBH: "COBERTOR",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "33252",
    TENBH: "COBERTOR",
    TACGIA: "Anitta part. Projota",
  },
  {
    MABH: "9097",
    TENBH: "COCAINE",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "18457",
    TENBH: "COCHISE",
    TACGIA: "Audioslave",
  },
  {
    MABH: "3312",
    TENBH: "CODINOME BEIJA-FLOR",
    TACGIA: "Cazuza",
  },
  {
    MABH: "18003",
    TENBH: "COFFE & TV",
    TACGIA: "Blur",
  },
  {
    MABH: "3411",
    TENBH: "COHAB CITY-VEM PRA CÁ",
    TACGIA: "Negritude Júnior",
  },
  {
    MABH: "33876",
    TENBH: "COICE DE MULA",
    TACGIA: "Brenno e Matheus",
  },
  {
    MABH: "3050",
    TENBH: "COISA BONITA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6408",
    TENBH: "COISA DE CINEMA",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "9421",
    TENBH: "COISA DE DEUS",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "30923",
    TENBH: "COISA DE EX",
    TACGIA: "Paula Mattos",
  },
  {
    MABH: "7571",
    TENBH: "COISA DE MOMENTO",
    TACGIA: "Renato Terra",
  },
  {
    MABH: "30421",
    TENBH: "COISA DE PELE",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "33230",
    TENBH: "COISA E TAL",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "7091",
    TENBH: "COISA MAIS LINDA",
    TACGIA: "Gal Costa e Paulo Bellinati",
  },
  {
    MABH: "33427",
    TENBH: "COISAS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "6364",
    TENBH: "COISAS DE CASAL",
    TACGIA: "Rádio Táxi",
  },
  {
    MABH: "33648",
    TENBH: "COISAS DE QUEM AMA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "9446",
    TENBH: "COISAS DO CORAÇÃO",
    TACGIA: "José Augusto",
  },
  {
    MABH: "1245",
    TENBH: "COISAS EXOTÉRICAS",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "7927",
    TENBH: "COISAS QUE EU SEI",
    TACGIA: "Danni Carlos",
  },
  {
    MABH: "6055",
    TENBH: "COISINHA DO PAI",
    TACGIA: "Beth Carvalho",
  },
  {
    MABH: "30501",
    TENBH: "COLADINHA EM MIM",
    TACGIA: "Gustavo Mioto part. Anitta",
  },
  {
    MABH: "30018",
    TENBH: "COLCHA DE RETALHOS",
    TACGIA: "Cascatinha e Inhana",
  },
  {
    MABH: "33120",
    TENBH: "COLCHA DE RETALHOS",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "24512",
    TENBH: "COLD",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "24466",
    TENBH: "COLD WATER",
    TACGIA: "Major Lazer & Justin Bieber ft. MO",
  },
  {
    MABH: "3465",
    TENBH: "COLEÇÃO",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "30588",
    TENBH: "COLEÇÃO DE EX",
    TACGIA: "Jefferson Moraes part. Matheus e Kauan",
  },
  {
    MABH: "33941",
    TENBH: "COLINHO DE PAPAI (SENTA AQUI)",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33122",
    TENBH: "COLO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "6123",
    TENBH: "COLO DE MENINA",
    TACGIA: "Rastapé",
  },
  {
    MABH: "30964",
    TENBH: "COLOMBIANA",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "6009",
    TENBH: "COLOMBINA",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "24467",
    TENBH: "COLORS",
    TACGIA: "Halsey",
  },
  {
    MABH: "4619",
    TENBH: "COLOUR MY WORLD",
    TACGIA: "Chicago",
  },
  {
    MABH: "33649",
    TENBH: "COM CERTEZA",
    TACGIA: "Planta & Raiz",
  },
  {
    MABH: "7757",
    TENBH: "COM MUITO LOUVOR",
    TACGIA: "Cassiane",
  },
  {
    MABH: "30959",
    TENBH: "COM O TEMPO",
    TACGIA: "Frozen 2",
  },
  {
    MABH: "30965",
    TENBH: "COM OU SEM MIM",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "2885",
    TENBH: "COM TODOS MENOS COMIGO",
    TACGIA: "Dominó",
  },
  {
    MABH: "6124",
    TENBH: "COM VOCÊ",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "30137",
    TENBH: "COM VOCÊ NO CORAÇÃO",
    TACGIA: "Renato e Seus Blue Caps",
  },
  {
    MABH: "30616",
    TENBH: "COM VOCÊS, EU",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30826",
    TENBH: "COMBATCHY",
    TACGIA: "Anitta, Luisa Sonza, Lexa e MC Rebecca",
  },
  {
    MABH: "15288",
    TENBH: "COMBUSTÍVEL",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "18352",
    TENBH: "COME AND GET IT",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "9211",
    TENBH: "COME AS YOU ARE",
    TACGIA: "Nirvana",
  },
  {
    MABH: "5885",
    TENBH: "COME AWAY WITH ME",
    TACGIA: "Norah Jones",
  },
  {
    MABH: "24975",
    TENBH: "COME BACK TO ME",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "24232",
    TENBH: "COME GET IT BAE",
    TACGIA: "Pharrell Williams & Miley Cyrus",
  },
  {
    MABH: "18456",
    TENBH: "COME ON EILLEN",
    TACGIA: "Dexy's Midnight Runners",
  },
  {
    MABH: "9015",
    TENBH: "COME ON LET'S GO",
    TACGIA: "Los Lobos",
  },
  {
    MABH: "18531",
    TENBH: "COME ON LET'S GO",
    TACGIA: "Ritchie Valens",
  },
  {
    MABH: "18098",
    TENBH: "COME ON OVER BABY (ALL I WANT IS YOU)",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "18315",
    TENBH: "COME OUT AND PLAY",
    TACGIA: "Offspring",
  },
  {
    MABH: "30391",
    TENBH: "COMÉ QUE LARGA DESSE TREM",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "7011",
    TENBH: "COME TE NON C'È NESSUNO",
    TACGIA: "Rita Pavone",
  },
  {
    MABH: "4507",
    TENBH: "COME TOGETHER",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18532",
    TENBH: "COME TOGETHER",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "18257",
    TENBH: "COME UNDONE",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "3833",
    TENBH: "COMEÇAR DE NOVO",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "33063",
    TENBH: "COMEÇAR DE NOVO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "3051",
    TENBH: "COMEÇARIA TUDO OUTRA VEZ",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "3313",
    TENBH: "COMEÇO, MEIO E FIM",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "1323",
    TENBH: "COMENTÁRIO A RESPEITO DE JOHN",
    TACGIA: "Belchior",
  },
  {
    MABH: "18388",
    TENBH: "COMFORTABLY NUMB",
    TACGIA: "Pink Floyd",
  },
  {
    MABH: "15687",
    TENBH: "COMIGO É ASSIM, LAPADA LAPADA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "4695",
    TENBH: "COMING AROUND AGAIN",
    TACGIA: "Carly Simon",
  },
  {
    MABH: "18258",
    TENBH: "COMING UNDONE",
    TACGIA: "Korn",
  },
  {
    MABH: "33834",
    TENBH: "COMITIVA ESPERANÇA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "7012",
    TENBH: "COMME FACETTE MAMMETA",
    TACGIA: "Renzo Arbore, L'Orchestra Italiana",
  },
  {
    MABH: "6452",
    TENBH: "COMO DOIS ANIMAIS",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "2861",
    TENBH: "COMO DOIS E DOIS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3314",
    TENBH: "COMO É GRANDE O MEU AMOR POR VOCÊ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33855",
    TENBH: "COMO É QUE A GENTE FICA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33651",
    TENBH: "COMO EU CHOREI",
    TACGIA: "Leonardo e Eduardo Costa",
  },
  {
    MABH: "3699",
    TENBH: "COMO EU QUERO",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "30298",
    TENBH: "COMO EU TE AMO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33961",
    TENBH: "COMO FAZ COM ELA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3611",
    TENBH: "COMO NOSSOS PAIS",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "33595",
    TENBH: "COMO NUNCA AMEI NINGUÉM",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "4231",
    TENBH: "COMO SE FOSSE A PRIMEIRA VEZ",
    TACGIA: "Paulo Ricardo",
  },
  {
    MABH: "3558",
    TENBH: "COMO UM ANJO",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30492",
    TENBH: "COMO UM BEIJO",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "3052",
    TENBH: "COMO UMA ONDA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "3700",
    TENBH: "COMO VAI VOCÊ?",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4070",
    TENBH: "COMO VOVÓ JÁ DIZIA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "3053",
    TENBH: "COMO?",
    TACGIA: "Paulo Diniz",
  },
  {
    MABH: "1722",
    TENBH: "COMPANHEIRO",
    TACGIA: "Dominó",
  },
  {
    MABH: "7321",
    TENBH: "COMPASSO",
    TACGIA: "Angela Ro Ro",
  },
  {
    MABH: "15369",
    TENBH: "COMPLETAMENTE APAIXONADOS",
    TACGIA: "Marcelo Augusto",
  },
  {
    MABH: "30814",
    TENBH: "COMPLICADO",
    TACGIA: "Vitão & Anitta",
  },
  {
    MABH: "33308",
    TENBH: "COMPLICADO DEMAIS",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "5887",
    TENBH: "COMPLICATED",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "4150",
    TENBH: "CON TE PARTIRO",
    TACGIA: "Andrea Bocelli",
  },
  {
    MABH: "33854",
    TENBH: "CÔNCAVO CONVEXO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4468",
    TENBH: "CONCEIÇÃO",
    TACGIA: "Cauby Peixoto",
  },
  {
    MABH: "4878",
    TENBH: "CONDEMNATION",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "30937",
    TENBH: "CONDOMÍNIO FECHADO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "1776",
    TENBH: "CONDOR",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "18295",
    TENBH: "CONFESSIONS OF A BROKEN HEART",
    TACGIA: "Lindsay Lohan",
  },
  {
    MABH: "7932",
    TENBH: "CONFESSO",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "33505",
    TENBH: "CONFIAREI",
    TACGIA: "Davi Sacer",
  },
  {
    MABH: "3655",
    TENBH: "CONFIDÊNCIAS",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "24432",
    TENBH: "CONFIDENT",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "4429",
    TENBH: "CONGA, CONGA, CONGA",
    TACGIA: "Gretchen",
  },
  {
    MABH: "30968",
    TENBH: "CONHEÇO MEU GADO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "3656",
    TENBH: "CONQUISTA",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "30595",
    TENBH: "CONQUISTA",
    TACGIA: "Wanderley Andrade",
  },
  {
    MABH: "1885",
    TENBH: "CONSELHO",
    TACGIA: "Almir Guineto",
  },
  {
    MABH: "30870",
    TENBH: "CONSPIRAÇÃO",
    TACGIA: "Tribo da Periferia & Marília Mendonça",
  },
  {
    MABH: "9098",
    TENBH: "CONSTANT CRAVING",
    TACGIA: "K.D.Lang",
  },
  {
    MABH: "30139",
    TENBH: "CONSTRUÇÃO",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "33126",
    TENBH: "CONSTRUÇÃO",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "7094",
    TENBH: "CONTA OUTRA",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "33939",
    TENBH: "CONTAGEM REGRESSIVA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "33940",
    TENBH: "CONTAGEM REGRESSIVA",
    TACGIA: "Edson & Hudson part. Bruno & Marrone",
  },
  {
    MABH: "33938",
    TENBH: "CONTAR PRA QUÊ",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30617",
    TENBH: "CONTATINHO",
    TACGIA: "Nego do Borel ft. Luan Santana",
  },
  {
    MABH: "30845",
    TENBH: "CONTATINHO",
    TACGIA: "Léo Santana e Anitta",
  },
  {
    MABH: "6608",
    TENBH: "CONTIGO APRENDI",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "33101",
    TENBH: "CONTO ATÉ DEZ",
    TACGIA: "George Henrique e Rodrigo part. Jorge e Mateus",
  },
  {
    MABH: "7095",
    TENBH: "CONTO DE AREIA",
    TACGIA: "Clara Nunes",
  },
  {
    MABH: "30438",
    TENBH: "CONTRATO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "18273",
    TENBH: "COOL",
    TACGIA: "Gwen Stefani",
  },
  {
    MABH: "24433",
    TENBH: "COOL FOR THE SUMMER",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "24042",
    TENBH: "COOL KIDS",
    TACGIA: "Echosmith",
  },
  {
    MABH: "9250",
    TENBH: "COPACABANA",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "30440",
    TENBH: "CÓPIA MAL FEITA",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "33127",
    TENBH: "COPINHO",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "33268",
    TENBH: "COPO NA MAO",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "1835",
    TENBH: "COR DE OURO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6849",
    TENBH: "CORAÇÃO",
    TACGIA: "Rapazolla",
  },
  {
    MABH: "9648",
    TENBH: "CORACAO ABERTO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "15812",
    TENBH: "CORAÇÃO APERTADO",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "7323",
    TENBH: "CORAÇÃO APRENDIZ",
    TACGIA: "Fafá de Belem",
  },
  {
    MABH: "7324",
    TENBH: "CORACAO ATEU",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "9649",
    TENBH: "CORAÇÃO BANDIDO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "30907",
    TENBH: "CORAÇÃO CALEJADO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33594",
    TENBH: "CORAÇÃO CIGANO",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "33652",
    TENBH: "CORAÇÃO DA PÁTRIA",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "3835",
    TENBH: "CORAÇÃO DE ESTUDANTE",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "3055",
    TENBH: "CORAÇÃO DE PAPEL",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "30104",
    TENBH: "CORAÇÃO DE PAPEL",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "30299",
    TENBH: "CORAÇÃO DE PEDRA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30618",
    TENBH: "CORAÇÃO DE QUATRO",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "4430",
    TENBH: "CORAÇÃO DO AGRESTE",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "33962",
    TENBH: "CORAÇÃO EMBRIAGADO",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "30911",
    TENBH: "CORAÇÃO ESPINHADO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "3056",
    TENBH: "CORAÇÃO ESTÁ EM PEDAÇOS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33381",
    TENBH: "CORAÇÃO FEITO MENINO",
    TACGIA: "Royce do Cavaco",
  },
  {
    MABH: "30619",
    TENBH: "CORAÇÃO INFECTADO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "33853",
    TENBH: "CORAÇÃO MACHUCADO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3316",
    TENBH: "CORAÇÃO NA CONTRA MÃO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6125",
    TENBH: "CORAÇÃO PIRATA",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "6488",
    TENBH: "CORAÇÃO RADIANTE",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "15767",
    TENBH: "CORAÇÃO SELVAGEM",
    TACGIA: "Belchior",
  },
  {
    MABH: "3414",
    TENBH: "CORAÇÃO SERTANEJO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "1186",
    TENBH: "CORAÇÃO SÓ VÊ VOCÊ",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "30300",
    TENBH: "CORAÇÃO VAGABUNDO",
    TACGIA: "Lindomar Castilho",
  },
  {
    MABH: "6170",
    TENBH: "CORAÇÃO VAZIO (WE'RE ALL ALONE)",
    TACGIA: "Chitãozinho & Xororó ft. Rita Coolidge",
  },
  {
    MABH: "7097",
    TENBH: "CORAÇÕES PSICODÉLICOS",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "8025",
    TENBH: "CORAZON ESPINADO",
    TACGIA: "Maná ft. Santana",
  },
  {
    MABH: "4105",
    TENBH: "CORAZÓN PARTÍO",
    TACGIA: "Alejandro Sanz",
  },
  {
    MABH: "6011",
    TENBH: "CORCOVADO",
    TACGIA: "Tom Jobim, João Gilberto, Astrud e Getz",
  },
  {
    MABH: "18841",
    TENBH: "CORNFLAKE GIRL",
    TACGIA: "Tori Amos",
  },
  {
    MABH: "6365",
    TENBH: "CORONÉ ANTONIO BENTO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33511",
    TENBH: "CORPITCHO",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "15065",
    TENBH: "CORPO E ALMA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "30301",
    TENBH: "CORPO SENSUAL",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "2802",
    TENBH: "CORRENDO ATRÁS DE MIM",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "33894",
    TENBH: "CORRENTEZA",
    TACGIA: "Djavan",
  },
  {
    MABH: "1211",
    TENBH: "CORSÁRIO",
    TACGIA: "João Bosco",
  },
  {
    MABH: "6453",
    TENBH: "CORUJA",
    TACGIA: "Deny e Dino",
  },
  {
    MABH: "20001",
    TENBH: "COSE DELLA VITA",
    TACGIA: "Eros Ramazzotti",
  },
  {
    MABH: "18761",
    TENBH: "COSMIC LOVE",
    TACGIA: "Florence + The Machine",
  },
  {
    MABH: "33309",
    TENBH: "COSTUMES",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "7575",
    TENBH: "COTIDIANO",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4508",
    TENBH: "COTTON FIELDS",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "9016",
    TENBH: "COULD YOU BE LOVED",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "24082",
    TENBH: "COUNTING STARS",
    TACGIA: "OneRepublic",
  },
  {
    MABH: "33593",
    TENBH: "COURO DE BOI",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "4029",
    TENBH: "COWBOY FORA DA LEI",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "18533",
    TENBH: "COWBOYS FROM HELL",
    TACGIA: "Pantera",
  },
  {
    MABH: "30506",
    TENBH: "COZIDO DA PATROA",
    TACGIA: "Solange Almeida",
  },
  {
    MABH: "26098",
    TENBH: "CRACKLIN' ROSIE",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "30998",
    TENBH: "CRACUDO",
    TACGIA: "Tierry",
  },
  {
    MABH: "24178",
    TENBH: "CRANK THAT",
    TACGIA: "Soulja Boy",
  },
  {
    MABH: "18842",
    TENBH: "CRASH INTO ME",
    TACGIA: "Dave Matthews Band",
  },
  {
    MABH: "33937",
    TENBH: "CRAVO E CANELA",
    TACGIA: "Anitta part. Vitin",
  },
  {
    MABH: "18296",
    TENBH: "CRAWLING",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24596",
    TENBH: "CRAWLING IN THE DARK",
    TACGIA: "Hoobastank",
  },
  {
    MABH: "2585",
    TENBH: "CRAZY",
    TACGIA: "Seal",
  },
  {
    MABH: "4667",
    TENBH: "CRAZY",
    TACGIA: "Julio Iglesias",
  },
  {
    MABH: "4879",
    TENBH: "CRAZY",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "18762",
    TENBH: "CRAZY",
    TACGIA: "Gnarls Barkley",
  },
  {
    MABH: "26205",
    TENBH: "CRAZY",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "18763",
    TENBH: "CRAZY (YOU DRIVE ME)",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "4696",
    TENBH: "CRAZY FOR YOU",
    TACGIA: "Madonna",
  },
  {
    MABH: "18237",
    TENBH: "CRAZY IN LOVE",
    TACGIA: "Beyoncé ft. Jay-Z",
  },
  {
    MABH: "18287",
    TENBH: "CRAZY KIDS",
    TACGIA: "Kesha ft. Will.I.Am",
  },
  {
    MABH: "9017",
    TENBH: "CRAZY LITTLE THING CALLED LOVE",
    TACGIA: "Queen",
  },
  {
    MABH: "4620",
    TENBH: "CRAZY LOVE",
    TACGIA: "Paul Anka",
  },
  {
    MABH: "18977",
    TENBH: "CRAZY ON YOU",
    TACGIA: "Heart",
  },
  {
    MABH: "24696",
    TENBH: "CRAZY TRAIN",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "7933",
    TENBH: "CREDENCIAL",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "6529",
    TENBH: "CREDO EM CRUZ AVE-MARIA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "18644",
    TENBH: "CREEP",
    TACGIA: "Radiohead",
  },
  {
    MABH: "18657",
    TENBH: "CREEPIN' IN",
    TACGIA: "Norah Jones ft. Dolly Parton",
  },
  {
    MABH: "33413",
    TENBH: "CRIAÇÃO DIVINA",
    TACGIA: "Zezé Di Camargo & Luciano part. Paula Fernandes",
  },
  {
    MABH: "15452",
    TENBH: "CRIME PERFEITO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "24320",
    TENBH: "CRIMINAL",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "4621",
    TENBH: "CRIMSON AND CLOVER",
    TACGIA: "Tommy James",
  },
  {
    MABH: "33735",
    TENBH: "CRISTAL QUEBRADO",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "24453",
    TENBH: "CRISTALISED",
    TACGIA: "The XX",
  },
  {
    MABH: "4622",
    TENBH: "CROCODILE ROCK",
    TACGIA: "Elton John",
  },
  {
    MABH: "1582",
    TENBH: "CRUA",
    TACGIA: "Otto",
  },
  {
    MABH: "2563",
    TENBH: "CRUCIFY",
    TACGIA: "Tori Amos",
  },
  {
    MABH: "9018",
    TENBH: "CRUISIN'",
    TACGIA: "Gwyneth Paltrow & Huey Lewis",
  },
  {
    MABH: "4880",
    TENBH: "CRUSH",
    TACGIA: "Jennifer Paige",
  },
  {
    MABH: "18422",
    TENBH: "CRUSH",
    TACGIA: "Dave Matthews Band",
  },
  {
    MABH: "2543",
    TENBH: "CRUSH, CRUSH, CRUSH",
    TACGIA: "Paramore",
  },
  {
    MABH: "33963",
    TENBH: "CRUZANDO OS DEDOS",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "18978",
    TENBH: "CRY BABY",
    TACGIA: "Janis Joplin",
  },
  {
    MABH: "26089",
    TENBH: "CRY BABY",
    TACGIA: "Melanie Martinez",
  },
  {
    MABH: "9019",
    TENBH: "CRY FOR HELP",
    TACGIA: "Rick Astley",
  },
  {
    MABH: "18374",
    TENBH: "CRY FOR YOU",
    TACGIA: "September",
  },
  {
    MABH: "9020",
    TENBH: "CRY ME A RIVER",
    TACGIA: "Diana Krall",
  },
  {
    MABH: "24059",
    TENBH: "CRY ME A RIVER",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "9251",
    TENBH: "CRYING",
    TACGIA: "Don McLean",
  },
  {
    MABH: "26189",
    TENBH: "CRYING",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "18726",
    TENBH: "CRYING IN THE RAIN",
    TACGIA: "A-Ha",
  },
  {
    MABH: "33490",
    TENBH: "CUIDA BEM DELA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30184",
    TENBH: "CUIDA DO NOSSO AMOR",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "33327",
    TENBH: "CUIDADO CUPIDO",
    TACGIA: "Péricles part. Luan Santana",
  },
  {
    MABH: "33310",
    TENBH: "CUIDAR MAIS DE MIM",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "30302",
    TENBH: "CUITELINHO",
    TACGIA: "Pena Branca e Xavantinho",
  },
  {
    MABH: "26078",
    TENBH: "CULT OF PERSONALITY",
    TACGIA: "Living Colour",
  },
  {
    MABH: "4030",
    TENBH: "CUMPADE E CUMADE",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30105",
    TENBH: "CÚMPLICES DE UM RESGATE",
    TACGIA: "Larissa Manoela e João Guilherme",
  },
  {
    MABH: "24134",
    TENBH: 'CUPS (PITCH PERFECT "WHEN I\'M GONE")',
    TACGIA: "Anna Kendrick",
  },
  {
    MABH: "31014",
    TENBH: "CURA-ME",
    TACGIA: "Fernanda Brum",
  },
  {
    MABH: "1247",
    TENBH: "CURTIÇÃO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "33964",
    TENBH: "CURTIÇÃO",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "15106",
    TENBH: "CURTINDO A VIDA",
    TACGIA: "Grupo Bom Gosto",
  },
  {
    MABH: "15653",
    TENBH: "CURTO CIRCUITO",
    TACGIA: "Mumuzinho",
  },
  {
    MABH: "1806",
    TENBH: "CUSTE O QUE CUSTAR",
    TACGIA: "Rosana",
  },
  {
    MABH: "4469",
    TENBH: "CUSTE O QUE CUSTAR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4470",
    TENBH: "DA BOCA PRA FORA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "1546",
    TENBH: "DA COR DO PECADO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33852",
    TENBH: "DA MÚSICA",
    TACGIA: "Arlindo Cruz e Sombrinha",
  },
  {
    MABH: "33655",
    TENBH: "DA PONTE PRA CÁ",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "30738",
    TENBH: "DÁ PREFERÊNCIA PRA MIM",
    TACGIA: "Thiago Brava ft. Gusttavo Lima",
  },
  {
    MABH: "24597",
    TENBH: "DA YA THINK I'M SEXY",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "26031",
    TENBH: "DADDY COOL",
    TACGIA: "Boney M",
  },
  {
    MABH: "24697",
    TENBH: "DADDY LESSONS",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "24175",
    TENBH: "DAKOTA",
    TACGIA: "Stereophonics",
  },
  {
    MABH: "6489",
    TENBH: "DÁ-ME DÁ-ME",
    TACGIA: "Daniel",
  },
  {
    MABH: "3552",
    TENBH: "DANÇA DA CORDINHA",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "15291",
    TENBH: "DANÇA DA MÃOZINHA",
    TACGIA: "Tchakabum",
  },
  {
    MABH: "3612",
    TENBH: "DANÇA DA SOLIDÃO",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "3501",
    TENBH: "DANÇA DO BUMBUM",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "4141",
    TENBH: "DANÇA DO VAMPIRO",
    TACGIA: "Asa de Águia",
  },
  {
    MABH: "15292",
    TENBH: "DANÇA SENSUAL",
    TACGIA: "MC Koringa",
  },
  {
    MABH: "2792",
    TENBH: "DANÇANDO",
    TACGIA: "Agridoce",
  },
  {
    MABH: "15031",
    TENBH: "DANÇANDO",
    TACGIA: "Ivete Sangalo ft. Shakira",
  },
  {
    MABH: "6490",
    TENBH: "DANÇANDO CALYPSO",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "30856",
    TENBH: "DANÇAR FORRÓ BEIJANDO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "18843",
    TENBH: "DANCE A LITTLE BIT CLOSER",
    TACGIA: "Charo",
  },
  {
    MABH: "18279",
    TENBH: "DANCE AGAIN",
    TACGIA: "Jennifer Lopez ft. Pitbull",
  },
  {
    MABH: "24211",
    TENBH: "DANCE DANCE",
    TACGIA: "Fall Out Boy",
  },
  {
    MABH: "26187",
    TENBH: "DANCE LITTLE LADY DANCE",
    TACGIA: "Tina Charles",
  },
  {
    MABH: "26128",
    TENBH: "DANCE MONKEY",
    TACGIA: "Tones & I",
  },
  {
    MABH: "24894",
    TENBH: "DANCE TO THIS",
    TACGIA: "Troye Sivan ft. Ariana Grande",
  },
  {
    MABH: "3613",
    TENBH: "DANCING DAYS",
    TACGIA: "As Frenéticas",
  },
  {
    MABH: "5888",
    TENBH: "DANCING IN THE DARK",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "9021",
    TENBH: "DANCING IN THE MOONLIGHT",
    TACGIA: "Toploader",
  },
  {
    MABH: "2564",
    TENBH: "DANCING IN THE STREET",
    TACGIA: "Martha Reeves & The Vandellas",
  },
  {
    MABH: "24932",
    TENBH: "DANCING ON MY OWN",
    TACGIA: "Robyn",
  },
  {
    MABH: "4574",
    TENBH: "DANCING QUEEN",
    TACGIA: "ABBA",
  },
  {
    MABH: "24813",
    TENBH: "DANCING WITH A STRANGER",
    TACGIA: "Sam Smith ft. Normani",
  },
  {
    MABH: "18455",
    TENBH: "DANCING WITH MYSELF",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "4308",
    TENBH: "DANDÁ",
    TACGIA: "Karametade",
  },
  {
    MABH: "30303",
    TENBH: "DANDALUNDA",
    TACGIA: "Margareth Menezes",
  },
  {
    MABH: "24698",
    TENBH: "DANGER ZONE",
    TACGIA: "Kenny Loggins",
  },
  {
    MABH: "18844",
    TENBH: "DANGEROUS",
    TACGIA: "Roxette",
  },
  {
    MABH: "24405",
    TENBH: "DANGEROUS WOMAN",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "2829",
    TENBH: "DANI",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "18212",
    TENBH: "DANI CALIFORNIA",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "4697",
    TENBH: "DANIEL",
    TACGIA: "Elton John",
  },
  {
    MABH: "24598",
    TENBH: "DANIEL",
    TACGIA: "Wilson Philips",
  },
  {
    MABH: "15327",
    TENBH: "DANIEL NA COVA DOS LEÕES",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "33133",
    TENBH: "DANSE MACABRE",
    TACGIA: "Scalene",
  },
  {
    MABH: "30140",
    TENBH: "DAQUELE JEITO",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "24230",
    TENBH: "DARE",
    TACGIA: "Gorillaz",
  },
  {
    MABH: "24187",
    TENBH: "DARE (LA LA LA)",
    TACGIA: "Shakira",
  },
  {
    MABH: "24062",
    TENBH: "DARK HORSE",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "24459",
    TENBH: "DARK NECESSITIES",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "18294",
    TENBH: "DARK PARADISE",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "18658",
    TENBH: "DAUGHTER",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "18659",
    TENBH: "DAY AFTER DAY",
    TACGIA: "Badfinger",
  },
  {
    MABH: "24289",
    TENBH: "DAY N NITE",
    TACGIA: "Kid Cudi Vs Crookers",
  },
  {
    MABH: "26059",
    TENBH: "DAY O (THE BANANA BOAT SONG)",
    TACGIA: "Harry Belafonte",
  },
  {
    MABH: "2554",
    TENBH: "DAYBREAK",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "24364",
    TENBH: "DAYDREAMING",
    TACGIA: "Paramore",
  },
  {
    MABH: "30304",
    TENBH: "DE COPO EM COPO",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "30142",
    TENBH: "DE ESQUINA",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "30503",
    TENBH: "DE FRENTE A FRENTE",
    TACGIA: "Matogrosso e Mathias",
  },
  {
    MABH: "6366",
    TENBH: "DE IGUAL PRA IGUAL",
    TACGIA: "Matogrosso e Mathias",
  },
  {
    MABH: "2906",
    TENBH: "DE JANEIRO A JANEIRO",
    TACGIA: "Roberta Campos e Nando Reis",
  },
  {
    MABH: "33851",
    TENBH: "DE LÁ PRA CÁ",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "4106",
    TENBH: "DE LADINHO",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "7331",
    TENBH: "DE LATINHA NA MÃO",
    TACGIA: "Leonardo e Zeca Pagodinho",
  },
  {
    MABH: "30966",
    TENBH: "DE MENINA PRA MULHER",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30807",
    TENBH: "DE NADA",
    TACGIA: "Moana",
  },
  {
    MABH: "4031",
    TENBH: "DE NOITE NA CAMA",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "30792",
    TENBH: "DE QUE VALE TER TUDO NA VIDA",
    TACGIA: "José Augusto",
  },
  {
    MABH: "30305",
    TENBH: "DE QUEM É A CULPA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3057",
    TENBH: "DE REPENTE CALIFÓRNIA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "4151",
    TENBH: "DE SÃO PAULO A BELÉM",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "9654",
    TENBH: "DE TANTO TE QUERER",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30143",
    TENBH: "DE TRÁS PRA FRENTE",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30046",
    TENBH: "DE VOLTA AO COMEÇO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "3320",
    TENBH: "DE VOLTA PRO ACONCHEGO",
    TACGIA: "Elba Ramalho",
  },
  {
    MABH: "18304",
    TENBH: "DEAR FUTURE HUSBAND",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "3837",
    TENBH: "DEBAIXO DOS CARACÓIS DOS SEUS CABELOS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30144",
    TENBH: "DÉBIL METAL",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "1893",
    TENBH: "DÉCADENCE AVEC ÉLÉGANCE",
    TACGIA: "Lobão",
  },
  {
    MABH: "15927",
    TENBH: "DECIDA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33936",
    TENBH: "DECIDE AÍ",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "3748",
    TENBH: "DECISÃO",
    TACGIA: "Karametade",
  },
  {
    MABH: "9434",
    TENBH: "DECLARAÇÃO",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "4072",
    TENBH: "DECLARAÇÃO DE AMOR",
    TACGIA: "Daniel",
  },
  {
    MABH: "33140",
    TENBH: "DECLARE GUERRA",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "18318",
    TENBH: "DECODE",
    TACGIA: "Paramore",
  },
  {
    MABH: "33656",
    TENBH: "DECOLA",
    TACGIA: "Falamansa",
  },
  {
    MABH: "24258",
    TENBH: "DEFY YOU",
    TACGIA: "Offspring",
  },
  {
    MABH: "24895",
    TENBH: "DEFYING GRAVITY",
    TACGIA: "Wicked (Musical)",
  },
  {
    MABH: "6689",
    TENBH: "DEIXA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6367",
    TENBH: "DEIXA  A VIDA ME LEVAR",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "2907",
    TENBH: "DEIXA ACONTECER",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "3059",
    TENBH: "DEIXA CHOVER",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "30441",
    TENBH: "DEIXA ELA BEIJAR",
    TACGIA: "Matheus e Kauan ft. Mc Kevinho",
  },
  {
    MABH: "33142",
    TENBH: "DEIXA ELE SOFRER",
    TACGIA: "Anitta",
  },
  {
    MABH: "33935",
    TENBH: "DEIXA EM OFF",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "6454",
    TENBH: "DEIXA EU TE AMAR",
    TACGIA: "Agepê",
  },
  {
    MABH: "33770",
    TENBH: "DEIXA EU TE AMAR",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30739",
    TENBH: "DEIXA EU TE AMAR POR FAVOR",
    TACGIA: "Felipe e Falcão",
  },
  {
    MABH: "30509",
    TENBH: "DEIXA EU VOAR",
    TACGIA: "George Henrique e Rodrigo part. Jorge e Mateus",
  },
  {
    MABH: "33081",
    TENBH: "DEIXA FALAR",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33156",
    TENBH: "DEIXA ISSO PRA LÁ",
    TACGIA: "Jair Rodrigues",
  },
  {
    MABH: "4471",
    TENBH: "DEIXA O AMOR ACONTECER",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "33143",
    TENBH: "DEIXA SE ENVOLVER",
    TACGIA: "Melanina Carioca",
  },
  {
    MABH: "4433",
    TENBH: "DEIXARIA TUDO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "30905",
    TENBH: "DEIXARIA TUDO",
    TACGIA: "João Bosco e Vinicius",
  },
  {
    MABH: "4032",
    TENBH: "DEIXEI DE SER COWBOY POR ELA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30306",
    TENBH: "DEIXE-ME IR",
    TACGIA: "1Kilo",
  },
  {
    MABH: "7930",
    TENBH: "DEIXO",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "18231",
    TENBH: "DEJA VU",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "1359",
    TENBH: "DELEGADA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "24699",
    TENBH: "DELICATE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "30961",
    TENBH: "DELICINHA",
    TACGIA: "Gabriel Gava ft. Naiara Azevedo",
  },
  {
    MABH: "3060",
    TENBH: "DELÍRIO DE AMOR",
    TACGIA: "Alcione",
  },
  {
    MABH: "30695",
    TENBH: "DELÍRIOS DE AMAR",
    TACGIA: "Cristiano Araújo part. Hugo Henrique",
  },
  {
    MABH: "9655",
    TENBH: "DELÍRIOS DE AMOR",
    TACGIA: "Alexandre Pires e Grupo Revelação",
  },
  {
    MABH: "4472",
    TENBH: "DEMAIS",
    TACGIA: "Veronica Sabino",
  },
  {
    MABH: "24241",
    TENBH: "DEMONS",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "4152",
    TENBH: "DENGO",
    TACGIA: "Daniel",
  },
  {
    MABH: "15655",
    TENBH: "DENTRO DE UM ABRAÇO",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "33449",
    TENBH: "DEPENDE",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "33934",
    TENBH: "DEPENDE DA GENTE",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "4434",
    TENBH: "DEPENDE DE NÓS",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "30010",
    TENBH: "DEPENDENTE",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "2741",
    TENBH: "DEPOIS",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "4309",
    TENBH: "DEPOIS",
    TACGIA: "Pato Fu",
  },
  {
    MABH: "33760",
    TENBH: "DEPOIS",
    TACGIA: "Paula Fernandes & Victor e Leo",
  },
  {
    MABH: "33933",
    TENBH: "DEPOIS DA BRIGA",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "1449",
    TENBH: "DEPOIS DAQUELE BEIJO",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "33965",
    TENBH: "DEPOIS DE NÓS É NÓS DE NOVO",
    TACGIA: "Igor Kannário",
  },
  {
    MABH: "33336",
    TENBH: "DEPOIS DE VOCÊ",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "7939",
    TENBH: "DEPOIS DO AMOR",
    TACGIA: "Perlla & Belo",
  },
  {
    MABH: "3749",
    TENBH: "DEPOIS DO PRAZER",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "31017",
    TENBH: "DEPRÊ",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3995",
    TENBH: "DERÊ",
    TACGIA: "Soweto",
  },
  {
    MABH: "30620",
    TENBH: "DERRETER A ALIANÇA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "1975",
    TENBH: "DESABAFO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3838",
    TENBH: "DESAFINADO",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "6012",
    TENBH: "DESAFIO",
    TACGIA: "Belo",
  },
  {
    MABH: "30307",
    TENBH: "DESAFIO",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "30145",
    TENBH: "DESAPEGUEI",
    TACGIA: "Pablo",
  },
  {
    MABH: "6909",
    TENBH: "DESATINO",
    TACGIA: "Daniel",
  },
  {
    MABH: "33742",
    TENBH: "DESCIDINHA",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "33758",
    TENBH: "DESCULPE AÍ",
    TACGIA: "Pablo",
  },
  {
    MABH: "3061",
    TENBH: "DESCULPE O AUÊ",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "3062",
    TENBH: "DESCULPE, MAS EU VOU CHORAR",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "3466",
    TENBH: "DESEJO DE AMAR",
    TACGIA: "Eliana de Lima",
  },
  {
    MABH: "30020",
    TENBH: "DESEJO DE AMAR",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "3951",
    TENBH: "DESEJOS E DELÍRIOS",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "15219",
    TENBH: "DESENCANA",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "2908",
    TENBH: "DESENGANO",
    TACGIA: "Bokaloka",
  },
  {
    MABH: "7334",
    TENBH: "DESENHO DE DEUS",
    TACGIA: "Armandinho",
  },
  {
    MABH: "15220",
    TENBH: "DESERTO",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33503",
    TENBH: "DESERTO",
    TACGIA: "Arianne",
  },
  {
    MABH: "7582",
    TENBH: "DESIGUAIS",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "24814",
    TENBH: "DESIRE",
    TACGIA: "U2",
  },
  {
    MABH: "3839",
    TENBH: "DESLIGA E VEM",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "33657",
    TENBH: "DESLIGUE A LUZ E O TELEFONE",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "3517",
    TENBH: "DESLIZES",
    TACGIA: "Fagner",
  },
  {
    MABH: "33368",
    TENBH: "DESLUMBRANTE",
    TACGIA: "Spártaco  part. Cristiano Araújo",
  },
  {
    MABH: "24513",
    TENBH: "DESPACITO",
    TACGIA: "Luis Fonsi, Daddy Yankee ft. Justin Bieber",
  },
  {
    MABH: "33148",
    TENBH: "DESPEDIDA DE SOLTEIRO (GANGNAM STYLE)",
    TACGIA: "Latino",
  },
  {
    MABH: "9099",
    TENBH: "DESPERADO",
    TACGIA: "Eagles",
  },
  {
    MABH: "6690",
    TENBH: "DESPERDIÇOU",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "33500",
    TENBH: "DESPERTA",
    TACGIA: "André Valadão",
  },
  {
    MABH: "1073",
    TENBH: "DESSA VEZ EU ME RENDO",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "9659",
    TENBH: "DESSE JEITO É RUIM PRA MIM",
    TACGIA: "Belo",
  },
  {
    MABH: "30308",
    TENBH: "DESTINO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33150",
    TENBH: "DESTINO",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "3063",
    TENBH: "DETALHES",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "2642",
    TENBH: "DETROIT ROCK CITY",
    TACGIA: "Kiss",
  },
  {
    MABH: "3996",
    TENBH: "DEU MEDO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30106",
    TENBH: "DEU ONDA",
    TACGIA: "MC G15",
  },
  {
    MABH: "7336",
    TENBH: "DEU PRA TI",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "33501",
    TENBH: "DEUS DE PROMESSAS",
    TACGIA: "André Valadão",
  },
  {
    MABH: "5606",
    TENBH: "DEUS DO IMPOSSIVEL",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "30309",
    TENBH: "DEUS É BRASILEIRO",
    TACGIA: "Terra Samba",
  },
  {
    MABH: "1129",
    TENBH: "DEUS E EU NO SERTÃO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "4310",
    TENBH: "DEUS ME LIVRE",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33157",
    TENBH: "DEUS ME LIVRE",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "33609",
    TENBH: "DEUS ME LIVRE",
    TACGIA: "Ataíde e Alexandre",
  },
  {
    MABH: "30953",
    TENBH: "DEUS NÃO FALHARÁ",
    TACGIA: "Davi Sacer",
  },
  {
    MABH: "33493",
    TENBH: "DEUS VAI FAZER",
    TACGIA: "Lázaro",
  },
  {
    MABH: "33158",
    TENBH: "DEUSA DO MARACANÃ",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "30146",
    TENBH: "DEUSA NUA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "3560",
    TENBH: "DEVAGAR, DEVAGARINHO",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "30696",
    TENBH: "DEVAGARINHO",
    TACGIA: "Luísa Sonza",
  },
  {
    MABH: "33759",
    TENBH: "DEVAGARINHO",
    TACGIA: "Parangolé",
  },
  {
    MABH: "30980",
    TENBH: "DEVE SER HORRÍVEL DORMIR SEM MIM",
    TACGIA: "Manu Gavassi, Gloria Groove",
  },
  {
    MABH: "24916",
    TENBH: "DEVIL INSIDE",
    TACGIA: "INXS",
  },
  {
    MABH: "26038",
    TENBH: "DEVIL WENT DOWN TO GEORGIA",
    TACGIA: "Charlie Daniels Band",
  },
  {
    MABH: "4107",
    TENBH: "DEVOLVA-ME",
    TACGIA: "Leno e Lilian",
  },
  {
    MABH: "6126",
    TENBH: "DEVOLVA-ME",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "33159",
    TENBH: "DEZ MINUTOS LONGE DE VOCÊ",
    TACGIA: "Victor & Leo & Henrique e Juliano",
  },
  {
    MABH: "33658",
    TENBH: "DEZ POR CENTO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "3614",
    TENBH: "DEZESSEIS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "7585",
    TENBH: "DIA DE FORMATURA",
    TACGIA: "Nalva Aguiar",
  },
  {
    MABH: "6911",
    TENBH: "DIA DE RODEIO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "33137",
    TENBH: "DIA DE SORTE",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "33512",
    TENBH: "DIA DEZ",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "7104",
    TENBH: "DIA DOS NAMORADOS",
    TACGIA: "Asa de Águia",
  },
  {
    MABH: "33966",
    TENBH: "DIA, LUGAR E HORA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30080",
    TENBH: "DIAMANTE BRUTO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "24087",
    TENBH: "DIAMONDS",
    TACGIA: "Rihanna",
  },
  {
    MABH: "5889",
    TENBH: "DIAMONDS ON THE INSIDE",
    TACGIA: "Ben Harper",
  },
  {
    MABH: "3703",
    TENBH: "DIANA",
    TACGIA: "Jerry Adriani",
  },
  {
    MABH: "4509",
    TENBH: "DIANA",
    TACGIA: "Paul Anka",
  },
  {
    MABH: "30934",
    TENBH: "DIANTE DO REI",
    TACGIA: "Vida Reluz",
  },
  {
    MABH: "6566",
    TENBH: "DIAS ATRÁS",
    TACGIA: "CPM 22",
  },
  {
    MABH: "6171",
    TENBH: "DIAS DE LUTA",
    TACGIA: "Ira!",
  },
  {
    MABH: "7944",
    TENBH: "DIAS DE LUTA, DIAS DE GLÓRIA",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "6455",
    TENBH: "DIAS IGUAIS",
    TACGIA: "Luiza Possi",
  },
  {
    MABH: "6172",
    TENBH: "DIAS MELHORES",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "30310",
    TENBH: "DIÁSPORA",
    TACGIA: "Tribalistas",
  },
  {
    MABH: "9100",
    TENBH: "DIDN'T WE ALMOST HAVE IT ALL",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18285",
    TENBH: "DIE YOUNG",
    TACGIA: "Kesha",
  },
  {
    MABH: "9660",
    TENBH: "DIFÍCIL",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "9661",
    TENBH: "DIFÍCIL NÃO FALAR DE AMOR",
    TACGIA: "Daniel",
  },
  {
    MABH: "7105",
    TENBH: "DIGA QUE VALEU",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "1094",
    TENBH: "DIGA SIM PRA MIM",
    TACGIA: "Isabella Taviani",
  },
  {
    MABH: "30147",
    TENBH: "DIGA, PARTE 2",
    TACGIA: "Fresno",
  },
  {
    MABH: "1047",
    TENBH: "DIG-DIG-JOY",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "24981",
    TENBH: "DIGGIN' MY GRAVE",
    TACGIA: "Lady Gaga & Bradley Cooper",
  },
  {
    MABH: "1976",
    TENBH: "DIGITAIS",
    TACGIA: "Isabella Taviani",
  },
  {
    MABH: "18099",
    TENBH: "DILEMMA",
    TACGIA: "Nelly ft. Kelly Rowland",
  },
  {
    MABH: "33848",
    TENBH: "DIM DIM",
    TACGIA: "Thiago Brava Part. Gusttavo Lima",
  },
  {
    MABH: "30621",
    TENBH: "DIN DIN DIN",
    TACGIA: "Ludmilla, MC Doguinha, Mc Pupio",
  },
  {
    MABH: "33592",
    TENBH: "DING DONG",
    TACGIA: "Floribella",
  },
  {
    MABH: "7338",
    TENBH: "DINORAH, DINORAH",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "7014",
    TENBH: "DIO COME TI AMO",
    TACGIA: "Gigliola Cinquetti",
  },
  {
    MABH: "30148",
    TENBH: "DIRETORIA",
    TACGIA: "Lucas e Thiago part. Felipe Araújo",
  },
  {
    MABH: "24048",
    TENBH: "DIRT",
    TACGIA: "Florida Georgia Line",
  },
  {
    MABH: "18727",
    TENBH: "DIRTY DIANA",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24491",
    TENBH: "DISAPPEAR",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24915",
    TENBH: "DISAPPEAR",
    TACGIA: "INXS",
  },
  {
    MABH: "26015",
    TENBH: "DISCO INFERNO",
    TACGIA: "The Trammps",
  },
  {
    MABH: "24700",
    TENBH: "DISEASE",
    TACGIA: "Matchbox Twenty",
  },
  {
    MABH: "30076",
    TENBH: "DISFARÇA",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "30622",
    TENBH: "DISK ME",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "4268",
    TENBH: "DISPARADA",
    TACGIA: "Jair Rodrigues",
  },
  {
    MABH: "33659",
    TENBH: "DISPUTA",
    TACGIA: "Lucas Lucco part. Gusttavo Lima",
  },
  {
    MABH: "7106",
    TENBH: "DISRITMIA",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "18343",
    TENBH: "DISTURBIA",
    TACGIA: "Rihanna",
  },
  {
    MABH: "18234",
    TENBH: "DIVA",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "33488",
    TENBH: "DIZ PRA MIM",
    TACGIA: "Malta",
  },
  {
    MABH: "15170",
    TENBH: "DIZ PRA MIM (JUST GIVE ME A REASON)",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "7339",
    TENBH: "DIZ PRO MEU OLHAR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30312",
    TENBH: "DIZEM QUE EU MUDEI",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "24120",
    TENBH: "DJ GOT US FALLING IN LOVE",
    TACGIA: "Usher ft. Pitbull",
  },
  {
    MABH: "30829",
    TENBH: "DO FUNDO DA GROTA",
    TACGIA: "Baitaca",
  },
  {
    MABH: "30332",
    TENBH: "DO FUNDO DO MEU CORAÇÃO",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "24339",
    TENBH: "DO I WANNA KNOW",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "7340",
    TENBH: "DO IT",
    TACGIA: "Lenine",
  },
  {
    MABH: "5890",
    TENBH: "DO IT AGAIN",
    TACGIA: "Steely Dan",
  },
  {
    MABH: "24253",
    TENBH: "DO IT LIKE A DUDE",
    TACGIA: "Jessie J",
  },
  {
    MABH: "33513",
    TENBH: "DO JEITO QUE FOR",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "1667",
    TENBH: "DO LADO DE CÁ",
    TACGIA: "Chimarruts",
  },
  {
    MABH: "9664",
    TENBH: "DO LADO ESQUERDO",
    TACGIA: "Cesar Menotti e Fabiano",
  },
  {
    MABH: "3417",
    TENBH: "DO LEME AO PONTAL",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33660",
    TENBH: "DO MEU JEITO",
    TACGIA: "Acácio O Ferinha da Bahia",
  },
  {
    MABH: "15067",
    TENBH: "DO OUTRO LADO DA CIDADE",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33118",
    TENBH: "DO OUTRO LADO DA MOEDA",
    TACGIA: "Gusttavo Lima & Zezé Di Camargo e Luciano",
  },
  {
    MABH: "1785",
    TENBH: "DO OUTRO LADO DO RÁDIO",
    TACGIA: "Daniel",
  },
  {
    MABH: "33429",
    TENBH: "DO SEU CORAÇÃO SOU DONO",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "6691",
    TENBH: "DO SEU LADO",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "2523",
    TENBH: "DO THAT TO ME ONE MORE TIME",
    TACGIA: "Captain and Tennille",
  },
  {
    MABH: "24325",
    TENBH: "DO WHAT U WANT",
    TACGIA: "Lady Gaga ft. R. Kelly",
  },
  {
    MABH: "18845",
    TENBH: "DO WHAT YOU DO",
    TACGIA: "Jermaine Jackson",
  },
  {
    MABH: "4698",
    TENBH: "DO YOU KNOW WHERE YOU'RE GOIN' TO",
    TACGIA: "Diana Ross",
  },
  {
    MABH: "18846",
    TENBH: "DO YOU REALLY WANT TO HURT ME",
    TACGIA: "Culture Club",
  },
  {
    MABH: "18728",
    TENBH: "DO YOU REMEMBER",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "24248",
    TENBH: "DO YOU REMEMBER",
    TACGIA: "Jay Sean & Sean Paul",
  },
  {
    MABH: "4699",
    TENBH: "DO YOU WANNA DANCE",
    TACGIA: "Johnny Rivers",
  },
  {
    MABH: "18100",
    TENBH: "DO YOU WANT TO",
    TACGIA: "Franz Ferdinand",
  },
  {
    MABH: "6250",
    TENBH: "DOCE AMIZADE",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "15329",
    TENBH: "DOCE DESEJO",
    TACGIA: "Babado Novo e Bruno & Marrone",
  },
  {
    MABH: "7341",
    TENBH: "DOCE MALDADE",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "15009",
    TENBH: "DOCE MEL",
    TACGIA: "Xuxa",
  },
  {
    MABH: "3519",
    TENBH: "DOCE MISTÉRIO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "7946",
    TENBH: "DOCE PAIXÃO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "7947",
    TENBH: "DOCE PAIXÃO",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "3065",
    TENBH: "DOCE VAMPIRO",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "6772",
    TENBH: "DOCE, DOCE AMOR",
    TACGIA: "Jerry Adriani",
  },
  {
    MABH: "30828",
    TENBH: "DOCES PALAVRAS",
    TACGIA: "Ataide e Alexandre",
  },
  {
    MABH: "18025",
    TENBH: "DOG DAYS ARE OVER",
    TACGIA: "Florence + The Machine",
  },
  {
    MABH: "3360",
    TENBH: "DÓI",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "3066",
    TENBH: "DÓI DEMAIS",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "33323",
    TENBH: "DÓI NÉ",
    TACGIA: "Pedro Henrique e Fernando",
  },
  {
    MABH: "15171",
    TENBH: "DOIDAÇA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "24345",
    TENBH: "DOING IT",
    TACGIA: "Charli XCX ft. Rita Ora",
  },
  {
    MABH: "3910",
    TENBH: "DOIS",
    TACGIA: "Paulo Ricardo",
  },
  {
    MABH: "4074",
    TENBH: "DOIS AMIGOS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33661",
    TENBH: "DOIS AMORES, DUAS PAIXÕES",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "1654",
    TENBH: "DOIS BICUDOS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "4349",
    TENBH: "DOIS CORAÇÕES",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30740",
    TENBH: "DOIS CORAÇÕES",
    TACGIA: "Melim",
  },
  {
    MABH: "4186",
    TENBH: "DOIS CORAÇÕES E UMA HISTÓRIA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30815",
    TENBH: "DOIS LADOS",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33662",
    TENBH: "DOIS LOUCOS DE AMOR",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "33610",
    TENBH: "DOIS MUNDOS",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "3067",
    TENBH: "DOIS PRA LÁ, DOIS PRA CÁ",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "6609",
    TENBH: "DOIS RIOS",
    TACGIA: "Skank",
  },
  {
    MABH: "24952",
    TENBH: "DOLLAR",
    TACGIA: "Becky G ft. Myke Towers",
  },
  {
    MABH: "26090",
    TENBH: "DOLLHOUSE",
    TACGIA: "Melanie Martinez",
  },
  {
    MABH: "30778",
    TENBH: "DOLORES",
    TACGIA: "Anísio Silva",
  },
  {
    MABH: "2831",
    TENBH: "DOMINGO À TARDE",
    TACGIA: "Nelson Ned",
  },
  {
    MABH: "33239",
    TENBH: "DOMINGO DE MANHÃ",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "33006",
    TENBH: "DOMINGO NO PARQUE",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "24254",
    TENBH: "DOMINO",
    TACGIA: "Jessie J",
  },
  {
    MABH: "18101",
    TENBH: "DOMINO DANCING",
    TACGIA: "Pet Shop Boys",
  },
  {
    MABH: "30551",
    TENBH: "DON JUAN",
    TACGIA: "Pimenta do Reino",
  },
  {
    MABH: "3068",
    TENBH: "DONA",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "15032",
    TENBH: "DONA CILA",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "15934",
    TENBH: "DONA DA MINHA CABEÇA",
    TACGIA: "Geraldo Azevedo",
  },
  {
    MABH: "30697",
    TENBH: "DONA DA MINHA VIDA",
    TACGIA: "Rouge",
  },
  {
    MABH: "30789",
    TENBH: "DONA DE MIM",
    TACGIA: "IZA",
  },
  {
    MABH: "30583",
    TENBH: "DONA DO MEU DESTINO",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "7526",
    TENBH: "DONA FELICIDADE",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "30313",
    TENBH: "DONA MARIA",
    TACGIA: "Thiago Brava part. Jorge",
  },
  {
    MABH: "15922",
    TENBH: "DONA NA VOZ",
    TACGIA: "Malta",
  },
  {
    MABH: "3750",
    TENBH: "DÓNDE ESTÁS CORAZÓN",
    TACGIA: "Shakira",
  },
  {
    MABH: "4704",
    TENBH: "DONNA",
    TACGIA: "Ritchie Valens",
  },
  {
    MABH: "30149",
    TENBH: "DONO DO TEU CORAÇÃO",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "18764",
    TENBH: "DON'T",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "24043",
    TENBH: "DON'T",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "18765",
    TENBH: "DON'T ANSWER ME",
    TACGIA: "Alan Parsons Project",
  },
  {
    MABH: "24492",
    TENBH: "DON'T BE A FOOL",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "4700",
    TENBH: "DON'T BE CRUEL",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18330",
    TENBH: "DON'T CHA",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "18094",
    TENBH: "DON'T CRY",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "4510",
    TENBH: "DON'T CRY FOR ME ARGENTINA",
    TACGIA: "Madonna",
  },
  {
    MABH: "9212",
    TENBH: "DON'T DREAM IT'S OVER",
    TACGIA: "Crowded House",
  },
  {
    MABH: "24959",
    TENBH: "DON'T FEAR THE REAPER",
    TACGIA: "Blue Oyster Cult",
  },
  {
    MABH: "24599",
    TENBH: "DON'T FORGET ABOUT US",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "4511",
    TENBH: "DON'T FORGET TO REMEMBER",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "18847",
    TENBH: "DON'T GET ME WRONG",
    TACGIA: "The Pretenders",
  },
  {
    MABH: "5892",
    TENBH: "DON'T GO AWAY",
    TACGIA: "Oasis",
  },
  {
    MABH: "4701",
    TENBH: "DON'T GO BREAKING MY HEART",
    TACGIA: "Elton John",
  },
  {
    MABH: "9252",
    TENBH: "DON'T IT MAKE MY BROWN EYES BLUE",
    TACGIA: "Crystal Gayle",
  },
  {
    MABH: "5893",
    TENBH: "DON'T KNOW WHY",
    TACGIA: "Norah Jones",
  },
  {
    MABH: "24937",
    TENBH: "DON'T LEAVE ME THIS WAY",
    TACGIA: "The Communards",
  },
  {
    MABH: "9253",
    TENBH: "DON'T LET GO (LOVE)",
    TACGIA: "En Vogue",
  },
  {
    MABH: "4702",
    TENBH: "DON'T LET ME BE LONELY TONIGHT",
    TACGIA: "James Taylor",
  },
  {
    MABH: "4881",
    TENBH: "DON'T LET ME BE THE LAST TO KNOW",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "4882",
    TENBH: "DON'T LET ME DOWN",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24468",
    TENBH: "DON'T LET ME DOWN",
    TACGIA: "The Chainsmokers ft. Daya",
  },
  {
    MABH: "4623",
    TENBH: "DON'T LET ME MISUNDERSTOOD",
    TACGIA: "Animals",
  },
  {
    MABH: "4818",
    TENBH: "DON'T LET THE SUN GO DOWN ON ME",
    TACGIA: "Elton John & George Michael",
  },
  {
    MABH: "18219",
    TENBH: "DON'T LOOK BACK IN ANGER",
    TACGIA: "Oasis",
  },
  {
    MABH: "24111",
    TENBH: "DON'T MATTER",
    TACGIA: "Akon",
  },
  {
    MABH: "18483",
    TENBH: "DON'T PHUNK WITH HEART",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "24853",
    TENBH: "DON'T RAIN ON MY PARADE",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "4883",
    TENBH: "DON'T SPEAK",
    TACGIA: "No Doubt",
  },
  {
    MABH: "24965",
    TENBH: "DON'T START NOW",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26201",
    TENBH: "DON'T STAY",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "18102",
    TENBH: "DON'T STOP BELIEVIN'",
    TACGIA: "Journey",
  },
  {
    MABH: "24963",
    TENBH: "DON'T STOP DANCING",
    TACGIA: "Creed",
  },
  {
    MABH: "18660",
    TENBH: "DON'T STOP ME NOW",
    TACGIA: "Queen",
  },
  {
    MABH: "24701",
    TENBH: "DON'T STOP THE MUSIC",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24136",
    TENBH: "DON'T STOP THE PARTY",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "18103",
    TENBH: "DON'T STOP TILL YOU GET ENOUGH",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24055",
    TENBH: "DON'T TELL 'EM",
    TACGIA: "Jeremih ft. YG",
  },
  {
    MABH: "4884",
    TENBH: "DON'T TELL ME",
    TACGIA: "Madonna",
  },
  {
    MABH: "9022",
    TENBH: "DON'T TELL ME",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "24249",
    TENBH: "DON'T TRUST ME",
    TACGIA: "3OH!3",
  },
  {
    MABH: "18848",
    TENBH: "DON'T TURN AROUND",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "24469",
    TENBH: "DON'T WANNA KNOW",
    TACGIA: "Maroon 5 ft. Kendrick",
  },
  {
    MABH: "4819",
    TENBH: "DON'T WANNA LET YOU GO",
    TACGIA: "Five",
  },
  {
    MABH: "4703",
    TENBH: "DON'T WANNA LOSE YOU",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "24702",
    TENBH: "DON'T WORRY BE HAPPY",
    TACGIA: "Bobby McFerrin",
  },
  {
    MABH: "9023",
    TENBH: "DON'T YOU FORGET ABOUT ME",
    TACGIA: "Simple Minds",
  },
  {
    MABH: "18271",
    TENBH: "DON'T YOU WANT ME",
    TACGIA: "The Human League",
  },
  {
    MABH: "24165",
    TENBH: "DON'T YOU WORRY CHILD",
    TACGIA: "Swedish House Mafia",
  },
  {
    MABH: "18454",
    TENBH: "DOO WOP (THAT THING)",
    TACGIA: "Lauryn Hill",
  },
  {
    MABH: "30315",
    TENBH: "DOR DE AMOR",
    TACGIA: "Beth Carvalho e Zeca Pagodinho",
  },
  {
    MABH: "30316",
    TENBH: "DOR E SAUDADE",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30512",
    TENBH: "DORALICE",
    TACGIA: "João Gilberto",
  },
  {
    MABH: "6173",
    TENBH: "DORMI NA PRAÇA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6129",
    TENBH: "DOU A VIDA POR UM BEIJO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30047",
    TENBH: "DOU TRABALHO, MAS NÃO TRAIO",
    TACGIA: "Fernando e Sorocaba part. Felipe Duran",
  },
  {
    MABH: "18979",
    TENBH: "DOWN ON THE CORNER",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "2503",
    TENBH: "DOWN UNDER",
    TACGIA: "Men At Work",
  },
  {
    MABH: "18643",
    TENBH: "DOWN WITH THE SICKNESS",
    TACGIA: "Disturbed",
  },
  {
    MABH: "30442",
    TENBH: "DOWNTOWN",
    TACGIA: "Anitta ft. J Balvin",
  },
  {
    MABH: "18534",
    TENBH: "DR. FEELGOOD",
    TACGIA: "Mötley Crue",
  },
  {
    MABH: "24458",
    TENBH: "DRAG ME DOWN",
    TACGIA: "One Direction",
  },
  {
    MABH: "33847",
    TENBH: "DRÃO",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "18766",
    TENBH: "DREADLOCK HOLIDAY",
    TACGIA: "10cc",
  },
  {
    MABH: "18046",
    TENBH: "DREAM ON",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "18661",
    TENBH: "DREAM WEAVER",
    TACGIA: "Gary Wright",
  },
  {
    MABH: "9101",
    TENBH: "DREAMER",
    TACGIA: "Supertramp",
  },
  {
    MABH: "24703",
    TENBH: "DREAMER",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "18849",
    TENBH: "DREAMLOVER",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "5894",
    TENBH: "DREAMS",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "5895",
    TENBH: "DREAMS",
    TACGIA: "Van Halen",
  },
  {
    MABH: "18170",
    TENBH: "DREAMS",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "18662",
    TENBH: "DREAMS",
    TACGIA: "The Corrs",
  },
  {
    MABH: "24815",
    TENBH: "DRESS YOU UP",
    TACGIA: "Madonna",
  },
  {
    MABH: "5896",
    TENBH: "DRESSED FOR SUCCESS",
    TACGIA: "Roxette",
  },
  {
    MABH: "9255",
    TENBH: "DRIVE",
    TACGIA: "The Cars",
  },
  {
    MABH: "18535",
    TENBH: "DRIVE",
    TACGIA: "Incubus",
  },
  {
    MABH: "24600",
    TENBH: "DRIVE BY",
    TACGIA: "Train",
  },
  {
    MABH: "18348",
    TENBH: "DRIVEN UNDER",
    TACGIA: "Seether",
  },
  {
    MABH: "26228",
    TENBH: "DRIVERS LICENSE",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "33591",
    TENBH: "DROPS DE HORTELÃ",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "4885",
    TENBH: "DROPS OF JUPITER (TELL ME)",
    TACGIA: "Train",
  },
  {
    MABH: "24449",
    TENBH: "DROWN",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "9102",
    TENBH: "DROWNING",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "24007",
    TENBH: "DRUNK IN LOVE",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "24037",
    TENBH: "DRUNK ON A PLANE",
    TACGIA: "Dierks Bentley",
  },
  {
    MABH: "18075",
    TENBH: "DRUNK ON LOVE",
    TACGIA: "Rihanna",
  },
  {
    MABH: "18536",
    TENBH: "DUALITY",
    TACGIA: "Slipknot",
  },
  {
    MABH: "15010",
    TENBH: "DUAS METADES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33611",
    TENBH: "DUAS PAIXÕES",
    TACGIA: "Bokaloka",
  },
  {
    MABH: "33160",
    TENBH: "DUAS TAÇAS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "1250",
    TENBH: "DUAS VEZES VOCÊ",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30107",
    TENBH: "DUBAI",
    TACGIA: "Hungria Hip Hop",
  },
  {
    MABH: "24413",
    TENBH: "DUELE EL CORAZÓN",
    TACGIA: "Enrique Iglesias ft. Wisin",
  },
  {
    MABH: "1807",
    TENBH: "DUPLA SOLIDÃO",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "24898",
    TENBH: "DUSK TILL DAWN",
    TACGIA: "Zayn ft. Sia",
  },
  {
    MABH: "4575",
    TENBH: "DUST IN THE WIND",
    TACGIA: "Kansas",
  },
  {
    MABH: "30009",
    TENBH: "DÚVIDO VOCÊ NÃO TOMAR UMA",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "6094",
    TENBH: "É",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "33374",
    TENBH: "E AÍ",
    TACGIA: "Thaeme e Thiago & Gusttavo Lima",
  },
  {
    MABH: "33931",
    TENBH: "E AÍ",
    TACGIA: "Matogrosso e Mathias & Gusttavo Lima",
  },
  {
    MABH: "4153",
    TENBH: "É AMOR DEMAIS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "15374",
    TENBH: "É AMOR DEMAIS",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33785",
    TENBH: "É CLARO QUE EU TÔ",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33015",
    TENBH: "É COM ELA QUE ESTOU",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "1379",
    TENBH: "E DAÍ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "3069",
    TENBH: "É DE CHOCOLATE",
    TACGIA: "Xuxa",
  },
  {
    MABH: "30317",
    TENBH: "É DEMAIS",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "30881",
    TENBH: "É DESSE JEITO QUE A GENTE SE AMA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "15818",
    TENBH: "É DISSO QUE O VELHO GOSTA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33119",
    TENBH: "É ELA QUE EU AMO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33968",
    TENBH: "E ESSA BOCA AÍ?",
    TACGIA: "Bruninho e Davi part. Luan Santana",
  },
  {
    MABH: "15033",
    TENBH: "É FATO",
    TACGIA: "Cristiano Araújo & Gusttavo Lima",
  },
  {
    MABH: "3070",
    TENBH: "É HOJE",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30108",
    TENBH: "É HORA DE DAR TCHAU",
    TACGIA: "Gabriel Diniz part. Gustavo Lima",
  },
  {
    MABH: "7114",
    TENBH: "É ISSO AÍ",
    TACGIA: "Ana Carolina e Seu Jorge",
  },
  {
    MABH: "9443",
    TENBH: "É MAGOA",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "6773",
    TENBH: "É MENTIRA DELA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "30786",
    TENBH: "É NATURAL",
    TACGIA: "Ferrugem ft. Bruno Cardoso",
  },
  {
    MABH: "2862",
    TENBH: "É NÓIS FAZER PARAPAPÁ",
    TACGIA: "Michel Teló & Sorriso Maroto",
  },
  {
    MABH: "3071",
    TENBH: "É O AMOR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "4109",
    TENBH: "É O AMOR",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "30318",
    TENBH: "É O BICHO",
    TACGIA: "Ricardo Chaves",
  },
  {
    MABH: "1108",
    TENBH: "É O QUE ME INTERESSA",
    TACGIA: "Lenine",
  },
  {
    MABH: "33846",
    TENBH: "E O VENTO LEVOU",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "1816",
    TENBH: "É PAPO FIRME",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6251",
    TENBH: "É POR AMOR",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "3705",
    TENBH: "É POR VOCÊ QUE CANTO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "2832",
    TENBH: "É PRA CABÁ",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "33845",
    TENBH: "É PRA LÁ QUE EU VOU",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "7346",
    TENBH: "É PRA SEMPRE TE AMAR",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "4033",
    TENBH: "É PRECISO SABER VIVER",
    TACGIA: "Titãs",
  },
  {
    MABH: "3658",
    TENBH: "É PROIBIDO FUMAR",
    TACGIA: "Skank",
  },
  {
    MABH: "33777",
    TENBH: "E QUANDO BEBE",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33050",
    TENBH: "É SÓ CHEGAR E BEIJAR",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "30846",
    TENBH: "É SÓ OI E TCHAU",
    TACGIA: "Luan Estilizado",
  },
  {
    MABH: "30857",
    TENBH: "É SÓ OI E TCHAU",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "7116",
    TENBH: "É TÃO LINDO",
    TACGIA: "Roberto Carlos & Balão Mágico",
  },
  {
    MABH: "3072",
    TENBH: "É TARDE DEMAIS",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "2848",
    TENBH: "É TENSO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33231",
    TENBH: "É TRETA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "3659",
    TENBH: "É UMA PARTIDA DE FUTEBOL",
    TACGIA: "Skank",
  },
  {
    MABH: "7951",
    TENBH: "E VAMOS A LUTA",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "30741",
    TENBH: "E VOLTAREI",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "3661",
    TENBH: "E.C.T.",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "18030",
    TENBH: "E.T.",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "26224",
    TENBH: "EASIER TO RUN",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24816",
    TENBH: "EASTSIDE",
    TACGIA: "Benny Blanco, Halsey & Khalid",
  },
  {
    MABH: "9214",
    TENBH: "EASY",
    TACGIA: "Commodores",
  },
  {
    MABH: "18022",
    TENBH: "EASY",
    TACGIA: "Faith No More",
  },
  {
    MABH: "9024",
    TENBH: "EASY LOVER",
    TACGIA: "Philip Bailey & Phil Collins",
  },
  {
    MABH: "4705",
    TENBH: "EBONY AND IVORY",
    TACGIA: "Paul McCartney & Stevie Wonder",
  },
  {
    MABH: "18384",
    TENBH: "EBONY EYES",
    TACGIA: "Rick James",
  },
  {
    MABH: "24562",
    TENBH: "ÉCHAME LA CULPA",
    TACGIA: "Luis Fonsi ft. Demi Lovato",
  },
  {
    MABH: "2849",
    TENBH: "ECLIPSE OCULTO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "4513",
    TENBH: "EDELWEISS",
    TACGIA: "The Sound of Music",
  },
  {
    MABH: "18485",
    TENBH: "EDGE OF SEVENTEEN",
    TACGIA: "Stevie Nicks",
  },
  {
    MABH: "30997",
    TENBH: "EDILENE",
    TACGIA: "Tayrone",
  },
  {
    MABH: "3323",
    TENBH: "EDUARDO E MÔNICA",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "3073",
    TENBH: "EDUCAÇÃO SENTIMENTAL",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "1817",
    TENBH: "EFEITOS",
    TACGIA: "Jorge e Mateus & Cristiano Araújo",
  },
  {
    MABH: "18235",
    TENBH: "EGO",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "7118",
    TENBH: "EH OH EH OH",
    TACGIA: "Dr. Silvana e Cia",
  },
  {
    MABH: "33128",
    TENBH: "EH TUDO TOISS",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "1251",
    TENBH: "EI, PSIU, BEIJO, ME LIGA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "24601",
    TENBH: "EIGHT DAYS A WEEK",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24704",
    TENBH: "EL BAÑO",
    TACGIA: "Enrique Iglesias ft. Bad Bunny",
  },
  {
    MABH: "4075",
    TENBH: "EL DIA QUE ME QUIERAS",
    TACGIA: "Luis Miguel",
  },
  {
    MABH: "6412",
    TENBH: "ELA CHOROU DE AMOR",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "4076",
    TENBH: "ELA É DEMAIS",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33778",
    TENBH: "ELA É MELHOR QUE VOCÊ",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "15172",
    TENBH: "ELA É TOP",
    TACGIA: "Leo Rodriguez & MC Bola",
  },
  {
    MABH: "30311",
    TENBH: "ELA ENCASQUETOU",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "15658",
    TENBH: "ELA ME DEIXOU",
    TACGIA: "Skank",
  },
  {
    MABH: "6014",
    TENBH: "ELA NÃO ESTÁ AQUI",
    TACGIA: "KLB",
  },
  {
    MABH: "33844",
    TENBH: "ELA NÃO PODE SABER",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "3706",
    TENBH: "ELA NÃO VAI MAIS CHORAR",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30513",
    TENBH: "ELA NASCEU PRA BRILHAR",
    TACGIA: "As Aventuras de Poliana",
  },
  {
    MABH: "33930",
    TENBH: "ELA SÓ QUER PAZ",
    TACGIA: "Projota",
  },
  {
    MABH: "33088",
    TENBH: "ELA TÁ DANÇANDO",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "30869",
    TENBH: "ELA TÁ VIRADA",
    TACGIA: "Tribo da Periferia",
  },
  {
    MABH: "3790",
    TENBH: "ELA TEM O DOM DE ME FAZER CHORAR",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "9447",
    TENBH: "ELA UNE TODAS AS COISAS",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "7591",
    TENBH: "ELA VAI VOLTAR",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33060",
    TENBH: "ELAS FICAM LOUCAS",
    TACGIA: "Diego Faria",
  },
  {
    MABH: "24370",
    TENBH: "ELASTIC HEART",
    TACGIA: "Sia",
  },
  {
    MABH: "31025",
    TENBH: "ELE É ELE, EU SOU EU",
    TACGIA: "Wesley Safadão, Barões da Pisadinha",
  },
  {
    MABH: "31035",
    TENBH: "ELE NÃO TEM",
    TACGIA: "Jonas Esticado ft. Gusttavo Lima",
  },
  {
    MABH: "33170",
    TENBH: "ELE NAO VAI MUDAR",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "24602",
    TENBH: "ELEANOR RIGBY",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "30812",
    TENBH: "ELEFANTE BRANCO",
    TACGIA: "Tigres de Bengala",
  },
  {
    MABH: "7348",
    TENBH: "ELEVADOR (LIVRO DE ESQUECIMENTO)",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "4886",
    TENBH: "ELEVATION",
    TACGIA: "U2",
  },
  {
    MABH: "6567",
    TENBH: "EM CADA AMANHECER",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "6175",
    TENBH: "EM ÓRBITA",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "15225",
    TENBH: "EM PAZ",
    TACGIA: "5 a Seco e Maria Gadú",
  },
  {
    MABH: "7773",
    TENBH: "EM TUA PRESENÇA",
    TACGIA: "Fernanda Brum",
  },
  {
    MABH: "3563",
    TENBH: "EMACONHADA",
    TACGIA: "Akundum",
  },
  {
    MABH: "30872",
    TENBH: "EMBRASA",
    TACGIA: "Vitão ft. Luccas Carlos",
  },
  {
    MABH: "6130",
    TENBH: "EMBRIAGADO DE AMOR",
    TACGIA: "Daniel",
  },
  {
    MABH: "3074",
    TENBH: "EMOÇÕES",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9025",
    TENBH: "EMOTION",
    TACGIA: "Samantha Sang & Bee Gees",
  },
  {
    MABH: "24705",
    TENBH: "EMOTIONS",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "26175",
    TENBH: "EMPEROR'S NEW CLOTHES",
    TACGIA: "Panic! At the Disco",
  },
  {
    MABH: "15293",
    TENBH: "EMPINADINHA",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "24094",
    TENBH: "EMPIRE",
    TACGIA: "Shakira",
  },
  {
    MABH: "24250",
    TENBH: "EMPIRE STATE OF MIND",
    TACGIA: "Alicia Keys feat. Jay-Z",
  },
  {
    MABH: "9103",
    TENBH: "EMPTY GARDEN",
    TACGIA: "Elton John",
  },
  {
    MABH: "24706",
    TENBH: "EN CAMBIO NO",
    TACGIA: "Laura Pausini",
  },
  {
    MABH: "15294",
    TENBH: "ENAMORADO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30319",
    TENBH: "ENCAIXA",
    TACGIA: "MC Kevinho ft. Léo Santana",
  },
  {
    MABH: "30742",
    TENBH: "ENCHENDO E DERRAMANDO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "30320",
    TENBH: "ENCONTRAR ALGUÉM",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "6569",
    TENBH: "ENCONTRO DAS ÁGUAS",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "6731",
    TENBH: "ENCONTROS E DESPEDIDAS",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "6694",
    TENBH: "ENCOSTAR NA TUA",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "9256",
    TENBH: "END OF THE ROAD",
    TACGIA: "Boyz II Men",
  },
  {
    MABH: "4514",
    TENBH: "ENDLESS LOVE",
    TACGIA: "Lionel Richie And Diana Ross",
  },
  {
    MABH: "33098",
    TENBH: "ENFICA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "30077",
    TENBH: "ENGANO",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "3468",
    TENBH: "ENGENHO DE DENTRO",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "18767",
    TENBH: "ENGLISHMAN IN NEW YORK",
    TACGIA: "Sting",
  },
  {
    MABH: "3791",
    TENBH: "ENGRAÇADINHA",
    TACGIA: "Katinguelê",
  },
  {
    MABH: "5897",
    TENBH: "ENJOY THE SILENCE",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "7593",
    TENBH: "ENQUANTO DURMO",
    TACGIA: "Zélia Duncan",
  },
  {
    MABH: "15531",
    TENBH: "ENQUANTO HOUVER RAZÕES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "6654",
    TENBH: "ENQUANTO HOUVER SOL",
    TACGIA: "Titãs",
  },
  {
    MABH: "30839",
    TENBH: "ENQUANTO ME BEIJA",
    TACGIA: "Jão",
  },
  {
    MABH: "6176",
    TENBH: "ENROSCA",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "24817",
    TENBH: "ENSENAME",
    TACGIA: "RBD",
  },
  {
    MABH: "6774",
    TENBH: "ENTÃO É NATAL",
    TACGIA: "Simone",
  },
  {
    MABH: "33078",
    TENBH: "ENTÃO FOGE",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "7120",
    TENBH: "ENTÃO PODE IR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30443",
    TENBH: "ENTÃO VAI",
    TACGIA: "Pabllo Vittar ft. Diplo",
  },
  {
    MABH: "33773",
    TENBH: "ENTÃO VALEU",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "30979",
    TENBH: "ENTÃO VEM CÁ",
    TACGIA: "Mano Walter ft. Cláudia Leitte",
  },
  {
    MABH: "2586",
    TENBH: "ENTER SANDMAN",
    TACGIA: "Metallica",
  },
  {
    MABH: "33843",
    TENBH: "ENTRA E SAI DE AMOR",
    TACGIA: "Altay Veloso",
  },
  {
    MABH: "4154",
    TENBH: "ENTRE A SERPENTE E A ESTRELA",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "3420",
    TENBH: "ENTRE TAPAS E BEIJOS",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "33590",
    TENBH: "ENTRE TAPAS E BEIJOS",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "1671",
    TENBH: "ENTREOLHARES",
    TACGIA: "Ana Carolina e John Legend",
  },
  {
    MABH: "30836",
    TENBH: "ENTREVISTA COM SEU EX",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6056",
    TENBH: "ENVELHEÇO NA CIDADE",
    TACGIA: "Ira!",
  },
  {
    MABH: "33929",
    TENBH: "ENVOLVIDÃO",
    TACGIA: "Rael",
  },
  {
    MABH: "30514",
    TENBH: "ENVOLVIMENTO",
    TACGIA: "Mc Loma e As Gêmeas Lacração",
  },
  {
    MABH: "18023",
    TENBH: "EPIC",
    TACGIA: "Faith No More",
  },
  {
    MABH: "6330",
    TENBH: "EPITÁFIO",
    TACGIA: "Titãs",
  },
  {
    MABH: "6695",
    TENBH: "EQUALIZE",
    TACGIA: "Pitty",
  },
  {
    MABH: "3075",
    TENBH: "ERA UM GAROTO",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "4077",
    TENBH: "ERA UMA VEZ",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "30321",
    TENBH: "ERA UMA VEZ",
    TACGIA: "Kell Smith",
  },
  {
    MABH: "1853",
    TENBH: "ERVA VENENOSA",
    TACGIA: "Herva Doce",
  },
  {
    MABH: "33589",
    TENBH: "ÉS O MEU AMOR",
    TACGIA: "Jerry Adriani",
  },
  {
    MABH: "4155",
    TENBH: "ESCANCARANDO DE VEZ",
    TACGIA: "Elymar Santos",
  },
  {
    MABH: "33771",
    TENBH: "ESCÂNDALO DE AMOR",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33430",
    TENBH: "ESCONDA O PRANTO NUM SORRISO",
    TACGIA: "Evaldo Braga",
  },
  {
    MABH: "1552",
    TENBH: "ESCONDERIJO",
    TACGIA: "Ana Cañas",
  },
  {
    MABH: "33019",
    TENBH: "ESCREVE AÍ",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "3076",
    TENBH: "ESCRITO NAS ESTRELAS",
    TACGIA: "Tetê Espíndola",
  },
  {
    MABH: "3077",
    TENBH: "ESMOLA",
    TACGIA: "Skank",
  },
  {
    MABH: "9669",
    TENBH: "ESNOBA",
    TACGIA: "Moinho da Bahia",
  },
  {
    MABH: "30743",
    TENBH: "ESPAÇOSA DEMAIS",
    TACGIA: "Felipe Araújo",
  },
  {
    MABH: "3078",
    TENBH: "ESPANHOLA",
    TACGIA: "14 Bis",
  },
  {
    MABH: "33005",
    TENBH: "ESPELHO",
    TACGIA: "Diogo Nogueira",
  },
  {
    MABH: "3079",
    TENBH: "ESPELHOS D'AGUA",
    TACGIA: "Patrícia Marx",
  },
  {
    MABH: "7778",
    TENBH: "ESPERANÇA",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "1583",
    TENBH: "ESPERANDO AVIÕES",
    TACGIA: "Vander Lee",
  },
  {
    MABH: "4473",
    TENBH: "ESPERANDO NA JANELA",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "6253",
    TENBH: "ESPERANDO NA JANELA",
    TACGIA: "Cogumelo Plutão",
  },
  {
    MABH: "33188",
    TENBH: "ESPERE UM POUCO, UM POUQUINHO MAIS",
    TACGIA: "Nilton César",
  },
  {
    MABH: "33189",
    TENBH: "ESPINHEIRA",
    TACGIA: "Duduca e Dalvan",
  },
  {
    MABH: "4187",
    TENBH: "ESPUMAS AO VENTO",
    TACGIA: "Fagner",
  },
  {
    MABH: "9450",
    TENBH: "ESQUADROS",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "33506",
    TENBH: "ESQUEÇA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "3080",
    TENBH: "ESQUEÇA (FORGET HIM)",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33456",
    TENBH: "ESQUEÇA QUE TE AMO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "9451",
    TENBH: "ESQUECE E VEM",
    TACGIA: "Nico Rezende",
  },
  {
    MABH: "33928",
    TENBH: "ESQUECEU DO EX",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "30515",
    TENBH: "ESQUECI",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30322",
    TENBH: "ESQUECI COMO NAMORA",
    TACGIA: "Nego do Borel part. Maiara e Maraisa",
  },
  {
    MABH: "33842",
    TENBH: "ESQUECI VOCÊ",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "33663",
    TENBH: "ESQUECIMENTO",
    TACGIA: "Skank",
  },
  {
    MABH: "31029",
    TENBH: "ESQUEMA PREFERIDO",
    TACGIA: "DJ Ivis ft. Tarcísio do Acordeon",
  },
  {
    MABH: "31042",
    TENBH: "ESQUEMA PREFERIDO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "30516",
    TENBH: "ESQUEMINHA (CÊ É LOUCO)",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "33584",
    TENBH: "ESQUINAS",
    TACGIA: "Djavan",
  },
  {
    MABH: "9671",
    TENBH: "ESSA FASE DO AMOR",
    TACGIA: "Emilio Santiago",
  },
  {
    MABH: "15923",
    TENBH: "ESSA MINA É LOUCA",
    TACGIA: "Anitta part. Jhama",
  },
  {
    MABH: "3081",
    TENBH: "ESSA TAL LIBERDADE",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "3421",
    TENBH: "ESSE AMOR QUE ME MATA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "7349",
    TENBH: "ESSE CARA",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "33927",
    TENBH: "ESSE CARA AQUI DO LADO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "2865",
    TENBH: "ESSE CARA SOU EU",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33779",
    TENBH: "ESSE COPO AQUI",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "33350",
    TENBH: "ESSES MOÇOS",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "3422",
    TENBH: "ESTA NOITE FOI MARAVILHOSA",
    TACGIA: "Leandro e Leonardo",
  },
  {
    MABH: "30150",
    TENBH: "ESTA NOITE VOCÊ VAI TER QUE SER MINHA",
    TACGIA: "Odair José",
  },
  {
    MABH: "33969",
    TENBH: "ESTACA ZERO",
    TACGIA: "Luan Santana & Ivete Sangalo",
  },
  {
    MABH: "30517",
    TENBH: "ESTE SEU OLHAR",
    TACGIA: "Nana Caymmi",
  },
  {
    MABH: "3362",
    TENBH: "ESTOU APAIXONADO",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "3083",
    TENBH: "ESTOU MAL",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "3662",
    TENBH: "ESTOY AQUI",
    TACGIA: "Shakira",
  },
  {
    MABH: "4110",
    TENBH: "ESTRADA DA VIDA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33588",
    TENBH: "ESTRADA DO AMOR",
    TACGIA: "Ataíde e Alexandre",
  },
  {
    MABH: "33664",
    TENBH: "ESTRADA VELHA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33190",
    TENBH: "ESTRANHA DEPENDÊNCIA",
    TACGIA: "Joanna",
  },
  {
    MABH: "4079",
    TENBH: "ESTRANHA LOUCURA",
    TACGIA: "Alcione e Alexandre Pires",
  },
  {
    MABH: "30623",
    TENBH: "ESTRANHO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33841",
    TENBH: "ESTRAÑO",
    TACGIA: "Nenhum de Nós",
  },
  {
    MABH: "33134",
    TENBH: "ESTRELA",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "33587",
    TENBH: "ESTRELA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "30151",
    TENBH: "ESTRELA GUIA",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "3084",
    TENBH: "ESTRELA PRIMEIRA (AMOR EU FICO)",
    TACGIA: "Banda Beijo",
  },
  {
    MABH: "33431",
    TENBH: "ESTRELAS",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "33038",
    TENBH: "ESTRESSADA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "3085",
    TENBH: "ESTÚPIDO CUPIDO (STUPID CUPID)",
    TACGIA: "Celly Campello",
  },
  {
    MABH: "4820",
    TENBH: "ETERNAL FLAME",
    TACGIA: "Bangles (The)",
  },
  {
    MABH: "4188",
    TENBH: "ETERNAMENTE",
    TACGIA: "Grupo Sem Compromisso",
  },
  {
    MABH: "6057",
    TENBH: "ETERNAMENTE",
    TACGIA: "Belo",
  },
  {
    MABH: "33372",
    TENBH: "ETERNO AMANHECER",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "1995",
    TENBH: "ETERNO AMOR",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "30774",
    TENBH: "ETIQUETAS",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "15456",
    TENBH: "EU",
    TACGIA: "Pato Fu",
  },
  {
    MABH: "30152",
    TENBH: "EU",
    TACGIA: "Palavra Cantada",
  },
  {
    MABH: "2887",
    TENBH: "EU ACHO QUE ESTOU PERDENDO VOCÊ",
    TACGIA: "Wando",
  },
  {
    MABH: "30864",
    TENBH: "EU ACHO QUE NÃO",
    TACGIA: "Saia Rodada",
  },
  {
    MABH: "33514",
    TENBH: "EU ACHO QUE PIREI",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "1996",
    TENBH: "EU AMO AMAR VOCÊ",
    TACGIA: "Daniel",
  },
  {
    MABH: "6215",
    TENBH: "EU AMO MAIS VOCÊ",
    TACGIA: "Catedral",
  },
  {
    MABH: "33404",
    TENBH: "EU AMO TE AMAR",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "9674",
    TENBH: "EU APOSTO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "33665",
    TENBH: "EU BEBO SIM",
    TACGIA: "Elza Soares",
  },
  {
    MABH: "3873",
    TENBH: "EU BUSCO UMA ESTRELA",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "33191",
    TENBH: "EU CHAMO VOCÊ VOLTA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "6177",
    TENBH: "EU CONTRA A NOITE",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "9675",
    TENBH: "EU DUVIDO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "6570",
    TENBH: "EU E A BRISA",
    TACGIA: "Johnny Alf",
  },
  {
    MABH: "30323",
    TENBH: "EU E DEUS NA INTIMIDADE",
    TACGIA: "Demônios da Garoa",
  },
  {
    MABH: "3086",
    TENBH: "EU E ELA",
    TACGIA: "Grupo Raça",
  },
  {
    MABH: "6461",
    TENBH: "EU E O SABIÁ",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30153",
    TENBH: "EU E VOCÊ",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6016",
    TENBH: "EU E VOCÊ SEMPRE",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "30154",
    TENBH: "EU ERA",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "33666",
    TENBH: "EU ERA FEIO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "30325",
    TENBH: "EU FICO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "30109",
    TENBH: "EU GOSTO",
    TACGIA: "Dennis DJ ft. Cláudia Leitte",
  },
  {
    MABH: "30999",
    TENBH: "EU JÁ PEGUEI COISA PIOR",
    TACGIA: "Tierry",
  },
  {
    MABH: "2794",
    TENBH: "EU JÁ TIREI SUA ROUPA",
    TACGIA: "Wando",
  },
  {
    MABH: "3469",
    TENBH: "EU JURO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "33766",
    TENBH: "EU LIGO PRA VOCÊ",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "3793",
    TENBH: "EU ME AMARREI",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "3088",
    TENBH: "EU MENTI",
    TACGIA: "Razão Brasileira",
  },
  {
    MABH: "4080",
    TENBH: "EU MENTI",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "6820",
    TENBH: "EU MEREÇO",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "30698",
    TENBH: "EU NÃO IRIA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6370",
    TENBH: "EU NÃO MATEI JOANA D'ARC",
    TACGIA: "Camisa de Vênus",
  },
  {
    MABH: "33192",
    TENBH: "EU NÃO MERECIA ISSO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "6131",
    TENBH: "EU NÃO SOU CACHORRO NÃO",
    TACGIA: "Waldick Soriano",
  },
  {
    MABH: "30844",
    TENBH: "EU NÃO VIVO SEM ELA",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "3089",
    TENBH: "EU NASCI HÁ DEZ MIL ANOS ATRÁS",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "7959",
    TENBH: "EU NUNCA AMEI ASSIM",
    TACGIA: "Jeito Moleque",
  },
  {
    MABH: "3363",
    TENBH: "EU NUNCA ESTIVE TÃO APAIXONADO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "7961",
    TENBH: "EU PRECISO TE ESQUECER",
    TACGIA: "Claudia Telles",
  },
  {
    MABH: "33840",
    TENBH: "EU QUERIA DIZER QUE TE AMO NUMA CANCÃO",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "1421",
    TENBH: "EU QUERIA TER UMA BOMBA",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "2669",
    TENBH: "EU QUERO APENAS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9677",
    TENBH: "EU QUERO É NAMORAR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33586",
    TENBH: "EU QUERO É ROLO",
    TACGIA: "Bruno & Barretto part. Conrado e Aleksandro",
  },
  {
    MABH: "30533",
    TENBH: "EU QUERO SEMPRE MAIS",
    TACGIA: "Ira! part. Pitty",
  },
  {
    MABH: "2866",
    TENBH: "EU QUERO SER FELIZ AGORA",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "6254",
    TENBH: "EU QUERO SER O SEU AMOR",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "33178",
    TENBH: "EU QUERO SER TEU SOL",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33179",
    TENBH: "EU QUERO SÓ VOCÊ",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "2722",
    TENBH: "EU QUERO TCHU, EU QUERO TCHA",
    TACGIA: "João Lucas e Marcelo",
  },
  {
    MABH: "33064",
    TENBH: "EU QUERO TE AMAR",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "33194",
    TENBH: "EU QUERO TER VOCÊ PRA MIM",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30958",
    TENBH: "EU SEGUIREI",
    TACGIA: "Frei Guilson",
  },
  {
    MABH: "3090",
    TENBH: "EU SEI",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "7355",
    TENBH: "EU SEI",
    TACGIA: "Papas da Língua",
  },
  {
    MABH: "33090",
    TENBH: "EU SEI (ACÚSTICO)",
    TACGIA: "Fresno",
  },
  {
    MABH: "4393",
    TENBH: "EU SEI (NA MIRA)",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "33970",
    TENBH: "EU SEI DE COR",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "4191",
    TENBH: "EU SEI QUE VOU TE AMAR",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "30969",
    TENBH: "EU SEI QUEM VEM",
    TACGIA: "Isadora Pompeo",
  },
  {
    MABH: "6571",
    TENBH: "EU SEM VOCÊ",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "15173",
    TENBH: "EU SEM VOCÊ",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "3875",
    TENBH: "EU SÓ PENSO EM VOCÊ (ALWAYS ON MY MIND)",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33003",
    TENBH: "EU SÓ QUERIA TE AMAR",
    TACGIA: "Laís",
  },
  {
    MABH: "3091",
    TENBH: "EU SÓ QUERO UM XODÓ",
    TACGIA: "Dominguinhos",
  },
  {
    MABH: "3663",
    TENBH: "EU SOU DESEJO VOCÊ É PAIXÃO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "2670",
    TENBH: "EU SOU EGOISTA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "3424",
    TENBH: "EU SOU FREE",
    TACGIA: "Sempre Livre",
  },
  {
    MABH: "15408",
    TENBH: "EU SOU O SAMBA",
    TACGIA: "Alexandre Pires e Seu Jorge",
  },
  {
    MABH: "7129",
    TENBH: "EU SOU SEU FÃ",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "7130",
    TENBH: "EU SOU TERRÍVEL",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "1867",
    TENBH: "EU TE AMO MEU BRASIL",
    TACGIA: "Os Incríveis",
  },
  {
    MABH: "30155",
    TENBH: "EU TE AMO PINGA",
    TACGIA: "Antony e Gabriel",
  },
  {
    MABH: "2951",
    TENBH: "EU TE AMO TANTO",
    TACGIA: "Lázaro",
  },
  {
    MABH: "3752",
    TENBH: "EU TE AMO VOCÊ",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "3521",
    TENBH: "EU TE AMO, TE AMO, TE AMO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4474",
    TENBH: "EU TE DAREI BEM MAIS",
    TACGIA: "Moacyr Franco",
  },
  {
    MABH: "4111",
    TENBH: "EU TE DEVORO",
    TACGIA: "Djavan",
  },
  {
    MABH: "33196",
    TENBH: "EU TIVE UM SONHO",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "33667",
    TENBH: "EU TÔ PEGANDO A SUA IRMÃ",
    TACGIA: "Gasparzinho",
  },
  {
    MABH: "30326",
    TENBH: "EU VACILEI MAS EU TE AMO",
    TACGIA: "Nego do Borel",
  },
  {
    MABH: "30049",
    TENBH: "EU VI GNOMOS",
    TACGIA: "Tihuana",
  },
  {
    MABH: "9369",
    TENBH: "EU VOU DOAR O MEU CORAÇÃO",
    TACGIA: "César Menotti e Fabiano part. João Bosco e Vinícius",
  },
  {
    MABH: "1584",
    TENBH: "EU VOU ESTAR",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "33253",
    TENBH: "EU VOU FICAR",
    TACGIA: "Anitta",
  },
  {
    MABH: "33432",
    TENBH: "EU VOU PEGAR VOCÊ",
    TACGIA: "Maurício e Eduardo part. Israel Novaes",
  },
  {
    MABH: "2910",
    TENBH: "EU VOU PEGAR VOCÊ E TÃE",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "30327",
    TENBH: "EU VOU TE BUSCAR (CHA LA LA LA LA)",
    TACGIA: "Gusttavo Lima part. Hungria Hip Hop",
  },
  {
    MABH: "6920",
    TENBH: "EU VOU TIRAR VOCÊ DESSE LUGAR",
    TACGIA: "Odair José",
  },
  {
    MABH: "31021",
    TENBH: "EU VOU TIRAR VOCÊ DO CABARÉ",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "33668",
    TENBH: "EU, ELA E A AMIGA DELA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "30007",
    TENBH: "EU, VOCÊ O MAR E ELA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "33153",
    TENBH: "EUCALIPTOS",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "33433",
    TENBH: "EUROPA",
    TACGIA: "Fresno",
  },
  {
    MABH: "3425",
    TENBH: "EVA",
    TACGIA: "Rádio Táxi",
  },
  {
    MABH: "33014",
    TENBH: "EVA",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "33484",
    TENBH: "EVA MEU AMOR",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "24154",
    TENBH: "EVACUATE THE DANCEFLOOR",
    TACGIA: "Cascada",
  },
  {
    MABH: "9257",
    TENBH: "EVEN FLOW",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "9104",
    TENBH: "EVEN NOW",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "9105",
    TENBH: "EVEN THE NIGHTS ARE BETTER",
    TACGIA: "Air Supply",
  },
  {
    MABH: "2833",
    TENBH: "EVEREST",
    TACGIA: "Fernando e Sorocaba part. Luan Santana",
  },
  {
    MABH: "24514",
    TENBH: "EVERGLOW",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18383",
    TENBH: "EVERGREEN",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "18768",
    TENBH: "EVERLASTING LOVE",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "18729",
    TENBH: "EVERLONG",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "4576",
    TENBH: "EVERY BREATH YOU TAKE",
    TACGIA: "The Police",
  },
  {
    MABH: "9106",
    TENBH: "EVERY LITTLE THING SHE DOES IS MAGIC",
    TACGIA: "The Police",
  },
  {
    MABH: "18202",
    TENBH: "EVERY MORNING",
    TACGIA: "Sugar Ray",
  },
  {
    MABH: "18537",
    TENBH: "EVERY ROSE HAS IT'S THORN",
    TACGIA: "Poison",
  },
  {
    MABH: "2514",
    TENBH: "EVERY TIME WE SAY GOODBYE",
    TACGIA: "Simply Red",
  },
  {
    MABH: "18328",
    TENBH: "EVERY YOU EVERY ME",
    TACGIA: "Placebo",
  },
  {
    MABH: "18104",
    TENBH: "EVERYBODY (BACKSTREET'S BACK)",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "18971",
    TENBH: "EVERYBODY GET UP",
    TACGIA: "Five",
  },
  {
    MABH: "2572",
    TENBH: "EVERYBODY HURTS",
    TACGIA: "The Corrs",
  },
  {
    MABH: "26002",
    TENBH: "EVERYBODY HURTS",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "5898",
    TENBH: "EVERYBODY LOVES A CLOWN",
    TACGIA: "Gary Lewis & the Playboys",
  },
  {
    MABH: "18489",
    TENBH: "EVERYBODY WANT TO RULE THE WORLD",
    TACGIA: "Tears For Fears",
  },
  {
    MABH: "2573",
    TENBH: "EVERYBODY'S CHANGING",
    TACGIA: "Keane",
  },
  {
    MABH: "18020",
    TENBH: "EVERYBODY'S FOOL",
    TACGIA: "Evanescence",
  },
  {
    MABH: "9215",
    TENBH: "EVERYBODY'S GOTTA LEARN SOMETIME",
    TACGIA: "The Korgis",
  },
  {
    MABH: "5900",
    TENBH: "EVERYDAY",
    TACGIA: "High School Musical",
  },
  {
    MABH: "24707",
    TENBH: "EVERYDAY",
    TACGIA: "Buddy Holly",
  },
  {
    MABH: "2574",
    TENBH: "EVERYTHING",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "18980",
    TENBH: "EVERYTHING ABOUT YOU",
    TACGIA: "Ugly Kid Joe",
  },
  {
    MABH: "9026",
    TENBH: "EVERYTHING I LOVE",
    TACGIA: "Alan Jackson",
  },
  {
    MABH: "9027",
    TENBH: "EVERYTHING I OWN",
    TACGIA: "Bread",
  },
  {
    MABH: "24955",
    TENBH: "EVERYTHING I WANTED",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "18453",
    TENBH: "EVERYTHING IS EVERYTHING",
    TACGIA: "Lauryn Hill",
  },
  {
    MABH: "24014",
    TENBH: "EVERYTIME",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24155",
    TENBH: "EVERYTIME WE TOUCH",
    TACGIA: "Cascada",
  },
  {
    MABH: "4887",
    TENBH: "EVERYTIME YOU GO AWAY",
    TACGIA: "Paul Young",
  },
  {
    MABH: "18850",
    TENBH: "EVERYWHERE",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "3094",
    TENBH: "EVIDÊNCIAS",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "2575",
    TENBH: "EVIE",
    TACGIA: "Johnny Mathis",
  },
  {
    MABH: "4624",
    TENBH: "EVIL WAYS",
    TACGIA: "Santana",
  },
  {
    MABH: "33750",
    TENBH: "EX APAIXONADO",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "33971",
    TENBH: "EX DO SEU ATUAL",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "33199",
    TENBH: "EX GORDINHA",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "2742",
    TENBH: "EX MY LOVE (EX MAI LOVE)",
    TACGIA: "Gaby Amarantos",
  },
  {
    MABH: "3095",
    TENBH: "EXAGERADO",
    TACGIA: "Cazuza",
  },
  {
    MABH: "18730",
    TENBH: "EX-GIRLFRIEND",
    TACGIA: "No Doubt",
  },
  {
    MABH: "18105",
    TENBH: "EXHALE (SHOOP SHOOP)",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18851",
    TENBH: "EXODUS",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "3096",
    TENBH: "EXPLODE CORAÇÃO",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "24436",
    TENBH: "EX'S & OH'S",
    TACGIA: "Elle King",
  },
  {
    MABH: "3097",
    TENBH: "ÊXTASE",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "9455",
    TENBH: "EXTRAVASA",
    TACGIA: "Claudia Leitte",
  },
  {
    MABH: "4888",
    TENBH: "EYE IN THE SKY",
    TACGIA: "Alan Parson's Project",
  },
  {
    MABH: "9216",
    TENBH: "EYE OF THE TIGER",
    TACGIA: "Survivor",
  },
  {
    MABH: "24532",
    TENBH: "EYES CLOSED",
    TACGIA: "Halsey",
  },
  {
    MABH: "9217",
    TENBH: "EYES WITHOUT A FACE",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "1422",
    TENBH: "FÃ",
    TACGIA: "Christian e Cristiano",
  },
  {
    MABH: "31028",
    TENBH: "FACAS",
    TACGIA: "Diego e Victor Hugo ft. Bruno & Marrone",
  },
  {
    MABH: "6060",
    TENBH: "FACE OCULTA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "33002",
    TENBH: "FACHO DE ESPERANÇA",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "4112",
    TENBH: "FÁCIL",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "15108",
    TENBH: "FACULDADE DA PINGA",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "9456",
    TENBH: "FADA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "18452",
    TENBH: "FADE TO BLACK",
    TACGIA: "Metallica",
  },
  {
    MABH: "24603",
    TENBH: "FADED",
    TACGIA: "Alan Walker",
  },
  {
    MABH: "2587",
    TENBH: "FADING LIKE A FLOWER",
    TACGIA: "Roxette",
  },
  {
    MABH: "18538",
    TENBH: "FAINT",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "4889",
    TENBH: "FAITH",
    TACGIA: "George Michael",
  },
  {
    MABH: "30444",
    TENBH: "FAIXA 3",
    TACGIA: "Bruninho e Davi part. Gusttavo Lima",
  },
  {
    MABH: "33200",
    TENBH: "FAIXA AMARELA",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "24515",
    TENBH: "FAKE LOVE",
    TACGIA: "Drake",
  },
  {
    MABH: "30894",
    TENBH: "FAKE NEWS",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "18165",
    TENBH: "FAKE PLASTIC TREES",
    TACGIA: "Radiohead",
  },
  {
    MABH: "9680",
    TENBH: "FALA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30328",
    TENBH: "FALA",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "33972",
    TENBH: "FALA A VERDADE",
    TACGIA: "Maiara e Maraisa part. Jorge e Mateus",
  },
  {
    MABH: "15249",
    TENBH: "FALA BAIXINHO",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "31046",
    TENBH: "FALA MAL DE MIM",
    TACGIA: "Pedro Sampaio, Daniel Caon e Wesley Safadão",
  },
  {
    MABH: "7965",
    TENBH: "FALANDO ÀS PAREDES",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "3913",
    TENBH: "FALANDO SÉRIO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9896",
    TENBH: "FALANDO SÉRIO",
    TACGIA: "João Bosco e Vinicius",
  },
  {
    MABH: "18539",
    TENBH: "FALL TO PIECES",
    TACGIA: "Velvet Revolver",
  },
  {
    MABH: "4890",
    TENBH: "FALLIN'",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "26060",
    TENBH: "FALLING",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "26130",
    TENBH: "FALLING",
    TACGIA: "Trevor Daniel",
  },
  {
    MABH: "18398",
    TENBH: "FALLING AWAY FROM ME",
    TACGIA: "Korn",
  },
  {
    MABH: "4312",
    TENBH: "FALTA VOCÊ",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "6415",
    TENBH: "FALTANDO UM PEDAÇO",
    TACGIA: "Djavan",
  },
  {
    MABH: "30028",
    TENBH: "FAMA DO PPA",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "4577",
    TENBH: "FAME",
    TACGIA: "Irene Cara",
  },
  {
    MABH: "7605",
    TENBH: "FANATISMO",
    TACGIA: "Fagner",
  },
  {
    MABH: "24051",
    TENBH: "FANCY",
    TACGIA: "Iggy Azalea ft. Charli XCX",
  },
  {
    MABH: "26110",
    TENBH: "FANCY",
    TACGIA: "Reba McEntire",
  },
  {
    MABH: "6732",
    TENBH: "FANTASIAS",
    TACGIA: "José Augusto",
  },
  {
    MABH: "30051",
    TENBH: "FANTASMA",
    TACGIA: "Luan Santana & Marília Mendonça",
  },
  {
    MABH: "18731",
    TENBH: "FANTASY",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "24708",
    TENBH: "FANTASY",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "24267",
    TENBH: "FAR AWAY",
    TACGIA: "Nickelback",
  },
  {
    MABH: "30434",
    TENBH: "FAROESTE CABOCLO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "4272",
    TENBH: "FAROL DAS ESTRELAS",
    TACGIA: "Soweto",
  },
  {
    MABH: "33201",
    TENBH: "FARRA, PINGA E FOGUETE",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "3471",
    TENBH: "FASCINAÇÃO",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "18981",
    TENBH: "FAST CAR",
    TACGIA: "Tracy Chapman",
  },
  {
    MABH: "30156",
    TENBH: "FATALIDADE",
    TACGIA: "Diana",
  },
  {
    MABH: "9107",
    TENBH: "FATHER FIGURE",
    TACGIA: "George Michael",
  },
  {
    MABH: "6372",
    TENBH: "FÁTIMA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "9457",
    TENBH: "FATO CONSUMADO",
    TACGIA: "Djavan",
  },
  {
    MABH: "15109",
    TENBH: "FAVO DE MEL",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6133",
    TENBH: "FAZ AMOR COMIGO",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "1453",
    TENBH: "FAZ AMOR QUE PASSA",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33909",
    TENBH: "FAZ ASSIM",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "33464",
    TENBH: "FAZ DE CONTA",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "3098",
    TENBH: "FAZ MAIS UMA VEZ COMIGO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33973",
    TENBH: "FAZ PARTE",
    TACGIA: "Projota part. Anitta",
  },
  {
    MABH: "3099",
    TENBH: "FAZ PARTE DO MEU SHOW",
    TACGIA: "Cazuza",
  },
  {
    MABH: "6776",
    TENBH: "FAZ TEMPO",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "1131",
    TENBH: "FAZ UM MILAGRE EM MIM",
    TACGIA: "Regis Danese",
  },
  {
    MABH: "1604",
    TENBH: "FAZ UMA LOUCURA POR MIM",
    TACGIA: "Alcione",
  },
  {
    MABH: "7361",
    TENBH: "FAZENDA SÃO FRANCISCO",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "30984",
    TENBH: "FAZENDINHA",
    TACGIA: "Mundo Bita",
  },
  {
    MABH: "2795",
    TENBH: "FAZENDO BARÁ BERÊ",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "33203",
    TENBH: "FAZER BEBER",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30445",
    TENBH: "FAZER FALTA",
    TACGIA: "MC Livinho",
  },
  {
    MABH: "30960",
    TENBH: "FAZER O QUE É MELHOR",
    TACGIA: "Frozen 2",
  },
  {
    MABH: "30013",
    TENBH: "FÉ BRASILEIRA",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "18642",
    TENBH: "FEAR OF THE DARK",
    TACGIA: "Iron Maiden",
  },
  {
    MABH: "33873",
    TENBH: "FECHA O PORTA MALA",
    TACGIA: "João Gustavo e Murilo",
  },
  {
    MABH: "6211",
    TENBH: "FECHE OS OLHOS",
    TACGIA: "Renato e Seus Blue Caps",
  },
  {
    MABH: "24709",
    TENBH: "FEEL",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "24231",
    TENBH: "FEEL GOOD INC",
    TACGIA: "Gorillaz",
  },
  {
    MABH: "26174",
    TENBH: "FEEL IT NOW",
    TACGIA: "Now United",
  },
  {
    MABH: "24604",
    TENBH: "FEEL IT STILL",
    TACGIA: "Portugal. The Man",
  },
  {
    MABH: "5901",
    TENBH: "FEEL LIKE MAKING LOVE",
    TACGIA: "Roberta Flack",
  },
  {
    MABH: "24148",
    TENBH: "FEEL SO CLOSE",
    TACGIA: "Calvin Harris",
  },
  {
    MABH: "18326",
    TENBH: "FEEL THIS MOMENT",
    TACGIA: "Pitbull ft. Christina Aguilera",
  },
  {
    MABH: "24986",
    TENBH: "FEELING GOOD",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "4515",
    TENBH: "FEELINGS",
    TACGIA: "Morris Albert",
  },
  {
    MABH: "24868",
    TENBH: "FEELS LIKE SUMMER",
    TACGIA: "Childish Gambino",
  },
  {
    MABH: "30157",
    TENBH: "FEIJOADA COMPLETA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "7135",
    TENBH: "FEIRA DE MANGAIO",
    TACGIA: "Clara Nunes",
  },
  {
    MABH: "30244",
    TENBH: "FEITICEIRA",
    TACGIA: "Carlos Alexandre",
  },
  {
    MABH: "24533",
    TENBH: "FELICES LOS 4",
    TACGIA: "Maluma",
  },
  {
    MABH: "2673",
    TENBH: "FELICIDADE",
    TACGIA: "Marcelo Jeneci",
  },
  {
    MABH: "4313",
    TENBH: "FELICIDADE",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "33839",
    TENBH: "FELICIDADE",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "3954",
    TENBH: "FELIZ ANIVERSÁRIO",
    TACGIA: "Ronaldo e os Barcelos",
  },
  {
    MABH: "18502",
    TENBH: "FELL IN LOVE WITH A GIRL",
    TACGIA: "The White Stripes",
  },
  {
    MABH: "18196",
    TENBH: "FELL ON BLACK DAYS",
    TACGIA: "Soundgarden",
  },
  {
    MABH: "18663",
    TENBH: "FEMME FATALE",
    TACGIA: "Velvet Underground & Nico",
  },
  {
    MABH: "6536",
    TENBH: "FÊNIX",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "3999",
    TENBH: "FERA FERIDA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "24214",
    TENBH: "FERGALICIOUS",
    TACGIA: "Fergie",
  },
  {
    MABH: "30212",
    TENBH: "FERIADO NACIONAL",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33204",
    TENBH: "FÉRIAS EM SALVADOR",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "4350",
    TENBH: "FÉRIAS NA ÍNDIA",
    TACGIA: "Nilton César",
  },
  {
    MABH: "30818",
    TENBH: "FERIDA CURADA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "6256",
    TENBH: "FESTA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "15174",
    TENBH: "FESTA BOA",
    TACGIA: "Henrique e Diego part. Gusttavo Lima",
  },
  {
    MABH: "3707",
    TENBH: "FESTA DE ARROMBA",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "3522",
    TENBH: "FESTA DE RODEIO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "3100",
    TENBH: "FESTA DO ESTICA E PUXA",
    TACGIA: "Xuxa",
  },
  {
    MABH: "30329",
    TENBH: "FESTA LOUCA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33033",
    TENBH: "FESTA NA PISCINA",
    TACGIA: "Carlos e Jader",
  },
  {
    MABH: "6777",
    TENBH: "FESTA NO APÊ",
    TACGIA: "Latino",
  },
  {
    MABH: "33585",
    TENBH: "FESTA NO CÉU",
    TACGIA: "Cassiane",
  },
  {
    MABH: "26104",
    TENBH: "FEVER",
    TACGIA: "Peggy Lee",
  },
  {
    MABH: "33716",
    TENBH: "FEZ BESTEIRA (SOLTEIRO NA SEXTA)",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "9682",
    TENBH: "FICA COMBINADO ASSIM",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "4081",
    TENBH: "FICA COMIGO",
    TACGIA: "Placa Luminosa",
  },
  {
    MABH: "30250",
    TENBH: "FICA COMIGO",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "4235",
    TENBH: "FICA COMIGO ESTA NOITE",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "33838",
    TENBH: "FICA LOUCA",
    TACGIA: "Thaeme e Thiago & Gusttavo Lima",
  },
  {
    MABH: "33434",
    TENBH: "FICA SÓ UM POUCO MAIS",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30330",
    TENBH: "FICA TRANQUILO",
    TACGIA: "Kemilly Santos",
  },
  {
    MABH: "30624",
    TENBH: "FICA TUDO BEM",
    TACGIA: "Silva e Anitta",
  },
  {
    MABH: "9458",
    TENBH: "FICAR POR FICAR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6822",
    TENBH: "FICO ASSIM SEM VOCÊ",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "15411",
    TENBH: "FICO COM VOCÊ",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "9108",
    TENBH: "FIELDS OF GOLD",
    TACGIA: "Sting",
  },
  {
    MABH: "18399",
    TENBH: "FIGHTER",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "31030",
    TENBH: "FIGURINHA",
    TACGIA: "Douglas e Vinícius ft. MC Bruninho",
  },
  {
    MABH: "7608",
    TENBH: "FILHA",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "4477",
    TENBH: "FILHO ADOTIVO",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "30927",
    TENBH: "FILHO DO MATO",
    TACGIA: "Saia Rodada",
  },
  {
    MABH: "6257",
    TENBH: "FIM DE NOITE",
    TACGIA: "Adryana e a Rapaziada",
  },
  {
    MABH: "3794",
    TENBH: "FIM DE SEMANA",
    TACGIA: "Netinho",
  },
  {
    MABH: "4395",
    TENBH: "FIM DE SEMANA",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33837",
    TENBH: "FIM DE SEMANA NO PARQUE",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "30744",
    TENBH: "FIM OU INTERVALO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "18540",
    TENBH: "FINAL COUNTDOWN",
    TACGIA: "Europe",
  },
  {
    MABH: "33161",
    TENBH: "FINAL DE SEMANA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "6373",
    TENBH: "FINAL FELIZ",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "30518",
    TENBH: "FINAL FELIZ",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "18852",
    TENBH: "FINALLY",
    TACGIA: "Ce Ce Peniston",
  },
  {
    MABH: "18217",
    TENBH: "FINDING OUT THE HARD WAY",
    TACGIA: "Cynthia Rhodes",
  },
  {
    MABH: "18350",
    TENBH: "FINE AGAIN",
    TACGIA: "Seether",
  },
  {
    MABH: "24710",
    TENBH: "FINESSE (REMIX)",
    TACGIA: "Bruno Mars & Cardi B",
  },
  {
    MABH: "3102",
    TENBH: "FIO DE CABELO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "3795",
    TENBH: "FIO MARAVILHA",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "2890",
    TENBH: "FIORINO",
    TACGIA: "Gabriel Gava",
  },
  {
    MABH: "2588",
    TENBH: "FIRE AND ICE",
    TACGIA: "Pat Benatar",
  },
  {
    MABH: "4707",
    TENBH: "FIRE AND RAIN",
    TACGIA: "James Taylor",
  },
  {
    MABH: "24243",
    TENBH: "FIREFLIES",
    TACGIA: "Owl City",
  },
  {
    MABH: "18161",
    TENBH: "FIREWORK",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "3619",
    TENBH: "FIRMAMENTO",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "4708",
    TENBH: "FIRST OF MAY",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4351",
    TENBH: "FISSURAS DE UM CASAL",
    TACGIA: "Bala, Bombom e Chocolate",
  },
  {
    MABH: "18400",
    TENBH: "FIX YOU",
    TACGIA: "Coldplay",
  },
  {
    MABH: "3753",
    TENBH: "FIXAÇÃO",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "3103",
    TENBH: "FLAGRA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "2687",
    TENBH: "FLAMBOYANT",
    TACGIA: "Emilio Santiago",
  },
  {
    MABH: "30861",
    TENBH: "FLASH POSE",
    TACGIA: "Pabllo Vittar ft. Charlie XCX",
  },
  {
    MABH: "24209",
    TENBH: "FLASHLIGHT",
    TACGIA: "Jessie J",
  },
  {
    MABH: "24470",
    TENBH: "FLESH WHITOUT BLOOD",
    TACGIA: "Grimes",
  },
  {
    MABH: "15035",
    TENBH: "FLOR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "3104",
    TENBH: "FLOR DE LIS",
    TACGIA: "Djavan",
  },
  {
    MABH: "33836",
    TENBH: "FLOR DE TANGERINA",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "6697",
    TENBH: "FLOR DO REGGAE",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "33835",
    TENBH: "FLOR E O BEIJA FLOR",
    TACGIA: "Henrique e Juliano part. Marília Mendonça",
  },
  {
    MABH: "2867",
    TENBH: "FLOR MORENA",
    TACGIA: "Aline Calixto",
  },
  {
    MABH: "30835",
    TENBH: "FLOR QUE SE CHEIRA",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "6220",
    TENBH: "FLORES",
    TACGIA: "Titãs",
  },
  {
    MABH: "33583",
    TENBH: "FLORES AMARELAS",
    TACGIA: "Floribella",
  },
  {
    MABH: "33414",
    TENBH: "FLORES EM VIDA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6332",
    TENBH: "FLORES EM VOCÊ",
    TACGIA: "Ira!",
  },
  {
    MABH: "18226",
    TENBH: "FLUORESCENT ADOLESCENT",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "5903",
    TENBH: "FLY",
    TACGIA: "Hilary Duff",
  },
  {
    MABH: "24605",
    TENBH: "FLY",
    TACGIA: "Sugar Ray",
  },
  {
    MABH: "9218",
    TENBH: "FLY AWAY",
    TACGIA: "Lenny Kravitz",
  },
  {
    MABH: "18541",
    TENBH: "FLY AWAY FROM HERE",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "24606",
    TENBH: "FLY LIKE AN EAGLE",
    TACGIA: "Seal",
  },
  {
    MABH: "18542",
    TENBH: "FLY ME TO THE MOON",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24135",
    TENBH: "FLY ME TO THE MOON (IN OTHER WORDS)",
    TACGIA: "Tony Bennett",
  },
  {
    MABH: "24429",
    TENBH: "FOCUS",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "7610",
    TENBH: "FOGÃO DE LENHA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "3326",
    TENBH: "FOGE DE MIM",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "7968",
    TENBH: "FOGO",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "30331",
    TENBH: "FOGO DE AMOR",
    TACGIA: "Daniel",
  },
  {
    MABH: "3105",
    TENBH: "FOGO E PAIXÃO",
    TACGIA: "Wando",
  },
  {
    MABH: "6733",
    TENBH: "FOI ASSIM",
    TACGIA: "Wanderléa",
  },
  {
    MABH: "33375",
    TENBH: "FOI DAQUELE JEITO",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "1655",
    TENBH: "FOI DEUS",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30035",
    TENBH: "FOI DEUS",
    TACGIA: "Angela Maria",
  },
  {
    MABH: "3876",
    TENBH: "FOI DEUS QUEM FEZ VOCÊ",
    TACGIA: "Amelinha",
  },
  {
    MABH: "31020",
    TENBH: "FOI PA PUM",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "31039",
    TENBH: "FOI POR CONVENIÊNCIA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "4315",
    TENBH: "FOI UM RIO QUE PASSOU EM MINHA VIDA",
    TACGIA: "Paulinho da Viola",
  },
  {
    MABH: "33888",
    TENBH: "FOI VOCÊ QUEM TROUXE",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33890",
    TENBH: "FOLGADO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33451",
    TENBH: "FOLHA SECA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "6778",
    TENBH: "FOLHAS SECAS",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "4194",
    TENBH: "FOLHETIM",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "4891",
    TENBH: "FOLLOW ME",
    TACGIA: "Uncle Kracker",
  },
  {
    MABH: "24607",
    TENBH: "FOLLOW YOU FOLLOW ME",
    TACGIA: "Genesis",
  },
  {
    MABH: "24608",
    TENBH: "FOLSOM PRISON BLUES",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "7366",
    TENBH: "FONTE DA SAUDADE",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "18853",
    TENBH: "FOOL",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "9028",
    TENBH: "FOOL (IF YOU THINK IT'S OVER)",
    TACGIA: "Chris Rea",
  },
  {
    MABH: "9029",
    TENBH: "FOOLISH BEAT",
    TACGIA: "Debbie Gibson",
  },
  {
    MABH: "4821",
    TENBH: "FOOTLOOSE",
    TACGIA: "Kenny Loggins",
  },
  {
    MABH: "9109",
    TENBH: "FOR EVERY MAN THERE'S A WOMAN",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "5904",
    TENBH: "FOR MY BROKEN HEART",
    TACGIA: "Reba McEntire",
  },
  {
    MABH: "4625",
    TENBH: "FOR MY LADY",
    TACGIA: "Moody Blues",
  },
  {
    MABH: "18982",
    TENBH: "FOR ONCE IN MY LIFE",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "4578",
    TENBH: "FOR THE GOOD TIMES",
    TACGIA: "Ray Price",
  },
  {
    MABH: "18854",
    TENBH: "FOR THOSE ABOUT TO ROCK (WE SALUTE YOU)",
    TACGIA: "AC/DC",
  },
  {
    MABH: "5905",
    TENBH: "FOR YOUR EYES ONLY",
    TACGIA: "Sheena Easton",
  },
  {
    MABH: "4000",
    TENBH: "FORA DA LEI",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "33774",
    TENBH: "FORA DE ÁREA",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "33121",
    TENBH: "FORA DO COMUM",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30362",
    TENBH: "FORA DO EIXO",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "18301",
    TENBH: "FORBIDDEN LOVE",
    TACGIA: "Madonna",
  },
  {
    MABH: "4352",
    TENBH: "FORÇA ESTRANHA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9030",
    TENBH: "FOREVER",
    TACGIA: "Kiss",
  },
  {
    MABH: "9219",
    TENBH: "FOREVER AND EVER",
    TACGIA: "Demis Roussos",
  },
  {
    MABH: "2504",
    TENBH: "FOREVER BY YOUR SIDE",
    TACGIA: "The Manhattans",
  },
  {
    MABH: "2577",
    TENBH: "FOREVER YOUNG",
    TACGIA: "Alphaville",
  },
  {
    MABH: "24711",
    TENBH: "FORGOTTEN LOVE",
    TACGIA: "Aurora",
  },
  {
    MABH: "24384",
    TENBH: "FORMATION",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "15112",
    TENBH: "FORMIGUINHA",
    TACGIA: "Galinha Pintadinha",
  },
  {
    MABH: "33412",
    TENBH: "FORMOSA",
    TACGIA: "Zero",
  },
  {
    MABH: "30158",
    TENBH: "FORRÓ E PAIXÃO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30625",
    TENBH: "FORRÓ NO ESCURO",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "18855",
    TENBH: "FORTUNATE SON",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "18341",
    TENBH: "FORTUNE FADED",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "30354",
    TENBH: "FOTO 3X4",
    TACGIA: "Gilberto e Gilmar",
  },
  {
    MABH: "9683",
    TENBH: "FOTOS",
    TACGIA: "Victor e Leo",
  },
  {
    MABH: "24365",
    TENBH: "FOUR FIVE SECONDS",
    TACGIA: "Rihanna ft. Kanye West and Paul McCartney",
  },
  {
    MABH: "30252",
    TENBH: "FRANGUINHO NA PANELA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "18368",
    TENBH: "FREAK",
    TACGIA: "Silverchair",
  },
  {
    MABH: "15489",
    TENBH: "FREAK LE BOOM BOOM",
    TACGIA: "Gretchen",
  },
  {
    MABH: "18769",
    TENBH: "FREAK ME",
    TACGIA: "Another Level",
  },
  {
    MABH: "24290",
    TENBH: "FREAK ON A LEASH",
    TACGIA: "Korn",
  },
  {
    MABH: "4892",
    TENBH: "FREE AS A BIRD",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24712",
    TENBH: "FREE BIRD",
    TACGIA: "Lynyrd Skynyrd",
  },
  {
    MABH: "5906",
    TENBH: "FREEDOM",
    TACGIA: "George Michael",
  },
  {
    MABH: "7971",
    TENBH: "FREIO DE MAO (CASOU, CASEI)",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "4438",
    TENBH: "FRENESI",
    TACGIA: "Pixote",
  },
  {
    MABH: "3107",
    TENBH: "FRENTE A FRENTE",
    TACGIA: "Royce do Cavaco",
  },
  {
    MABH: "18770",
    TENBH: "FRESH EYES",
    TACGIA: "Andy Grammer",
  },
  {
    MABH: "3796",
    TENBH: "FREVO MULHER",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "3797",
    TENBH: "FRICOTE",
    TACGIA: "Art Popular",
  },
  {
    MABH: "7367",
    TENBH: "FRICOTE",
    TACGIA: "Luiz Caldas",
  },
  {
    MABH: "18494",
    TENBH: "FRIDAY I'M IN LOVE",
    TACGIA: "The Cure",
  },
  {
    MABH: "24534",
    TENBH: "FRIENDS",
    TACGIA: "Justin Bieber ft. BloodPop",
  },
  {
    MABH: "24713",
    TENBH: "FRIENDS",
    TACGIA: "Marshmello ft. Anne-Marie",
  },
  {
    MABH: "4439",
    TENBH: "FRIO DA MADRUGADA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "6258",
    TENBH: "FRIO DA SOLIDÃO (DON'T LET ME DOWN)",
    TACGIA: "Chitaozinho & Xororó part. Roupa Nova",
  },
  {
    MABH: "4082",
    TENBH: "FRISSON",
    TACGIA: "Tunai",
  },
  {
    MABH: "2643",
    TENBH: "FROM ME TO YOU",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18543",
    TENBH: "FROM THE INSIDE",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "4822",
    TENBH: "FROM THIS MOMENT ON",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "4893",
    TENBH: "FROZEN",
    TACGIA: "Madonna",
  },
  {
    MABH: "7368",
    TENBH: "FRUTO ESPECIAL",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "24156",
    TENBH: "FUCK YOU (EXPLICIT)",
    TACGIA: "CeeLo Green",
  },
  {
    MABH: "24609",
    TENBH: "FUEL",
    TACGIA: "Metallica",
  },
  {
    MABH: "1605",
    TENBH: "FUGIDINHA",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "15297",
    TENBH: "FUI FIEL",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "3108",
    TENBH: "FULLGÁS",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "30745",
    TENBH: "FULMINANTE",
    TACGIA: "Mumuzinho",
  },
  {
    MABH: "4627",
    TENBH: "FUNK BROADWAY",
    TACGIA: "Wilson Pickett",
  },
  {
    MABH: "15012",
    TENBH: "FURDÚNCIO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33669",
    TENBH: "FURDUNÇO E SURURU",
    TACGIA: "Rei da Cacimbinha",
  },
  {
    MABH: "3877",
    TENBH: "FUSCÃO PRETO",
    TACGIA: "Almir Rogério",
  },
  {
    MABH: "7972",
    TENBH: "FUTURO PROMETIDO",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "18107",
    TENBH: "G.D.F.R.",
    TACGIA: "Flo Rida & Sage The Gemini & Lookas",
  },
  {
    MABH: "24357",
    TENBH: "G.U.Y.",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "30519",
    TENBH: "GABRIELA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "15460",
    TENBH: "GAGUINHO",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "30314",
    TENBH: "GALERA CORAÇÃO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33670",
    TENBH: "GALERA DA RODINHA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "5611",
    TENBH: "GALHOS SECOS",
    TACGIA: "Paulo Cesar Baruk",
  },
  {
    MABH: "7149",
    TENBH: "GALINHADA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "4273",
    TENBH: "GALOPEIRA",
    TACGIA: "Donizette",
  },
  {
    MABH: "9179",
    TENBH: "GAME OF LOVE",
    TACGIA: "Santana & Michelle Branch",
  },
  {
    MABH: "3567",
    TENBH: "GAMEI",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "24610",
    TENBH: "GAMES PEOPLE PLAY",
    TACGIA: "Inner Circle",
  },
  {
    MABH: "18664",
    TENBH: "GANGSTA'S PARADISE",
    TACGIA: "Coolio ft. L.V.",
  },
  {
    MABH: "6925",
    TENBH: "GARANHÃO DA MADRUGADA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "4114",
    TENBH: "GARÇOM",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "4316",
    TENBH: "GARGANTA",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "6333",
    TENBH: "GAROTA DE BERLIM",
    TACGIA: "Supla",
  },
  {
    MABH: "3109",
    TENBH: "GAROTA DE IPANEMA",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "33515",
    TENBH: "GAROTA DE PROGRAMA",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "3956",
    TENBH: "GAROTA DOURADA",
    TACGIA: "Rádio Táxi",
  },
  {
    MABH: "3472",
    TENBH: "GAROTA NACIONAL",
    TACGIA: "Skank",
  },
  {
    MABH: "6698",
    TENBH: "GAROTAS CHORAM DEMAIS",
    TACGIA: "Liah",
  },
  {
    MABH: "15298",
    TENBH: "GAROTAS NAO MERECEM CHORAR",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "7973",
    TENBH: "GAROTO DE ALUGUEL",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "2688",
    TENBH: "GAROTO ERRADO",
    TACGIA: "Manu Gavassi",
  },
  {
    MABH: "1979",
    TENBH: "GAROTO MAROTO",
    TACGIA: "Alcione",
  },
  {
    MABH: "1606",
    TENBH: "GAROTOS II (O OUTRO LADO)",
    TACGIA: "Leoni",
  },
  {
    MABH: "33469",
    TENBH: "GARRAFA PET",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30746",
    TENBH: "GARUPA",
    TACGIA: "Luísa Sonza & Pablo Vittar",
  },
  {
    MABH: "26149",
    TENBH: "GASOLINA",
    TACGIA: "Daddy Yankee",
  },
  {
    MABH: "15014",
    TENBH: "GATINHA ASSANHADA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "3916",
    TENBH: "GATINHA MANHOSA",
    TACGIA: "Léo Jaime",
  },
  {
    MABH: "15461",
    TENBH: "GAVETA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30851",
    TENBH: "GELO",
    TACGIA: "Melim",
  },
  {
    MABH: "15825",
    TENBH: "GELO NA BALADA",
    TACGIA: "Cavaleiros do Forró",
  },
  {
    MABH: "33205",
    TENBH: "GELO NA BALADA",
    TACGIA: "Camila e Haniel part. Fernando e Sorocaba",
  },
  {
    MABH: "15050",
    TENBH: "GENI E O ZEPELIM",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4823",
    TENBH: "GENIE IN A BOTTLE",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "3917",
    TENBH: "GENTE HUMILDE",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4824",
    TENBH: "GEORGIA ON MY MIND",
    TACGIA: "Ray Charles",
  },
  {
    MABH: "6062",
    TENBH: "GERAÇÃO COCA-COLA",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "9110",
    TENBH: "GET BACK",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18665",
    TENBH: "GET DOWN ON IT",
    TACGIA: "Kool & The Gang",
  },
  {
    MABH: "24223",
    TENBH: "GET IT STARTED",
    TACGIA: "Pitbull ft. Shakira",
  },
  {
    MABH: "24180",
    TENBH: "GET LUCKY",
    TACGIA: "Daft Punk ft. Pharrell Williams",
  },
  {
    MABH: "24818",
    TENBH: "GET READY",
    TACGIA: "The Temptations",
  },
  {
    MABH: "26069",
    TENBH: "GET RIGHT",
    TACGIA: "Jennifer Lopez",
  },
  {
    MABH: "18302",
    TENBH: "GET TOGETHER",
    TACGIA: "Madonna",
  },
  {
    MABH: "18666",
    TENBH: "GET UP OFFA THAT THING",
    TACGIA: "James Brown",
  },
  {
    MABH: "18856",
    TENBH: "GET UP STAND UP",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "26004",
    TENBH: "GHOSTBUSTERS",
    TACGIA: "Ray Parker",
  },
  {
    MABH: "24215",
    TENBH: "GHOSTTOWN",
    TACGIA: "Madonna",
  },
  {
    MABH: "18243",
    TENBH: "GIMME MORE",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "26039",
    TENBH: "GIMME THAT",
    TACGIA: "Chris Brown",
  },
  {
    MABH: "18771",
    TENBH: "GIMME! GIMME! GIMME! (A MAN AFTER MIDNIGHT)",
    TACGIA: "Abba",
  },
  {
    MABH: "2565",
    TENBH: "GINA",
    TACGIA: "Johnny Mathis",
  },
  {
    MABH: "30747",
    TENBH: "GINGA",
    TACGIA: "IZA ft. Rincon Sapiência",
  },
  {
    MABH: "24516",
    TENBH: "GINZA",
    TACGIA: "J Balvin ft. Anitta",
  },
  {
    MABH: "6374",
    TENBH: "GIRASSOL",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "30993",
    TENBH: "GIRASSOL",
    TACGIA: "Priscilla Alcantara, Whindersson Nunes",
  },
  {
    MABH: "30992",
    TENBH: "GIRASSOL (R&B VERSION)",
    TACGIA: "Priscilla Alcantara",
  },
  {
    MABH: "4628",
    TENBH: "GIRL",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24106",
    TENBH: "GIRL CRUSH",
    TACGIA: "Little Big Town",
  },
  {
    MABH: "24968",
    TENBH: "GIRL FROM IPANEMA",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "18667",
    TENBH: "GIRL I'M GONNA MISS YOU",
    TACGIA: "Milli Vanilli",
  },
  {
    MABH: "26191",
    TENBH: "GIRL LIKE ME",
    TACGIA: "Black Eyed Peas, Shakira",
  },
  {
    MABH: "24117",
    TENBH: "GIRL ON FIRE",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "26094",
    TENBH: "GIRL YOU KNOW IT'S TRUE",
    TACGIA: "Milli Vanilli",
  },
  {
    MABH: "24123",
    TENBH: "GIRLFRIEND",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "9032",
    TENBH: "GIRLFRIEND IN A COMA",
    TACGIA: "The Smiths",
  },
  {
    MABH: "24671",
    TENBH: "GIRLS",
    TACGIA: "Rita Ora ft. Cardi B, Bebe Rexha & Charli XCX",
  },
  {
    MABH: "18043",
    TENBH: "GIRLS JUST WANT TO HAVE FUN",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "3327",
    TENBH: "GITA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "24714",
    TENBH: "GIVE A LITTLE BIT",
    TACGIA: "Supertramp",
  },
  {
    MABH: "26168",
    TENBH: "GIVE A LITTLE MORE",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "18303",
    TENBH: "GIVE IT 2 ME",
    TACGIA: "Madonna ft. Pharrell",
  },
  {
    MABH: "18342",
    TENBH: "GIVE IT AWAY",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "18311",
    TENBH: "GIVE IT TO ME",
    TACGIA: "Timbaland ft. Nelly Furtado & J. Timberlake",
  },
  {
    MABH: "24715",
    TENBH: "GIVE IT UP",
    TACGIA: "KC and The Sunshine Band",
  },
  {
    MABH: "18772",
    TENBH: "GIVE IT UP TO ME",
    TACGIA: "Sean Paul",
  },
  {
    MABH: "18327",
    TENBH: "GIVE ME EVERYTHING",
    TACGIA: "Pitbull ft. Ne-Yo",
  },
  {
    MABH: "5907",
    TENBH: "GIVE ME MORE",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "18983",
    TENBH: "GIVE ME ONE REASON",
    TACGIA: "Tracy Chapman",
  },
  {
    MABH: "9259",
    TENBH: "GIVE ME THE NIGHT",
    TACGIA: "George Benson",
  },
  {
    MABH: "18108",
    TENBH: "GIVE YOUR HEART A BREAK",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "18773",
    TENBH: "GIVING YOU THE BEST THAT I GOT",
    TACGIA: "Anita Baker",
  },
  {
    MABH: "24108",
    TENBH: "GLAD YOU CAME",
    TACGIA: "The Wanted",
  },
  {
    MABH: "18544",
    TENBH: "GLAMOROUS",
    TACGIA: "Fergie ft. Ludacris",
  },
  {
    MABH: "33206",
    TENBH: "GLAMUROSA",
    TACGIA: "MC Marcinho",
  },
  {
    MABH: "18774",
    TENBH: "GLORY BOX",
    TACGIA: "Portishead",
  },
  {
    MABH: "4894",
    TENBH: "GLORY OF LOVE",
    TACGIA: "Peter Cetera",
  },
  {
    MABH: "18451",
    TENBH: "GO LET IT OUT",
    TACGIA: "Oasis",
  },
  {
    MABH: "18641",
    TENBH: "GO WEST",
    TACGIA: "Pet Shop Boys",
  },
  {
    MABH: "18775",
    TENBH: "GO WITH THE FLOW",
    TACGIA: "Queens of the Stone Age",
  },
  {
    MABH: "18857",
    TENBH: "GO YOUR OWN WAY",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "30626",
    TENBH: "GOALS",
    TACGIA: "Anitta",
  },
  {
    MABH: "24716",
    TENBH: "GOD IS A WOMAN",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "18858",
    TENBH: "GOD ONLY KNOWS",
    TACGIA: "Beach Boys",
  },
  {
    MABH: "18007",
    TENBH: "GOD PUT A SMILE UPON YOUR FACE",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18450",
    TENBH: "GOD SAVE THE QUEEN",
    TACGIA: "Sex Pistols",
  },
  {
    MABH: "24611",
    TENBH: "GOD'S GONNA CUT YOU DOWN",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "24717",
    TENBH: "GOD'S PLAN",
    TACGIA: "Drake",
  },
  {
    MABH: "30423",
    TENBH: "GOIANIA ME ESPERA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30334",
    TENBH: "GOIÁS É MAIS",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "5908",
    TENBH: "GOING UNDER",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24030",
    TENBH: "GOLD",
    TACGIA: "Britt Nicole",
  },
  {
    MABH: "18380",
    TENBH: "GONE",
    TACGIA: "N' Sync",
  },
  {
    MABH: "26079",
    TENBH: "GOOD AS HELL",
    TACGIA: "Lizzo",
  },
  {
    MABH: "24021",
    TENBH: "GOOD FEELING",
    TACGIA: "Flo Rida",
  },
  {
    MABH: "18449",
    TENBH: "GOOD GOLLY MISS MOLLY",
    TACGIA: "Little Richard",
  },
  {
    MABH: "24493",
    TENBH: "GOOD GRIEF",
    TACGIA: "Bastille",
  },
  {
    MABH: "24104",
    TENBH: "GOOD KISSER",
    TACGIA: "Usher",
  },
  {
    MABH: "18269",
    TENBH: "GOOD RIDDANCE (TIME OF YOUR LIFE)",
    TACGIA: "Green Day",
  },
  {
    MABH: "26217",
    TENBH: "GOOD TIMES",
    TACGIA: "Chic",
  },
  {
    MABH: "24718",
    TENBH: "GOOD TIMES BAD TIMES",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "4895",
    TENBH: "GOOD VIBRATION",
    TACGIA: "Beach Boys",
  },
  {
    MABH: "24819",
    TENBH: "GOOD VIBRATIONS",
    TACGIA: "Marky Mark & The Funky Bunch",
  },
  {
    MABH: "18776",
    TENBH: "GOODBYE",
    TACGIA: "Air Supply",
  },
  {
    MABH: "18859",
    TENBH: "GOODBYE",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "18109",
    TENBH: "GOODBYE FOR NOW",
    TACGIA: "P.O.D.",
  },
  {
    MABH: "5909",
    TENBH: "GOODBYE MY LOVER",
    TACGIA: "James Blunt",
  },
  {
    MABH: "4710",
    TENBH: "GOODBYE YELLOW BRICK ROAD",
    TACGIA: "Elton John",
  },
  {
    MABH: "24962",
    TENBH: "GOODIES",
    TACGIA: "Ciara ft. Petey Pablo",
  },
  {
    MABH: "33099",
    TENBH: "GORDINHO GOSTOSO",
    TACGIA: "Neto LX",
  },
  {
    MABH: "33010",
    TENBH: "GORDINHO SALIENTE",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "24421",
    TENBH: "GORILLA",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "3110",
    TENBH: "GOSTAVA TANTO DE VOCÊ",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "1657",
    TENBH: "GOSTO DE MAÇÃ",
    TACGIA: "Wando",
  },
  {
    MABH: "3111",
    TENBH: "GOSTOSO DEMAIS",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "30447",
    TENBH: "GOSTOSO SENTIMENTO",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "4196",
    TENBH: "GOSTOSO VENENO",
    TACGIA: "Alcione",
  },
  {
    MABH: "24193",
    TENBH: "GOT 2 LUV U",
    TACGIA: "Sean Paul & Alexis Jordan",
  },
  {
    MABH: "24820",
    TENBH: "GOT TO BE REAL",
    TACGIA: "Cheryl Lynn",
  },
  {
    MABH: "18777",
    TENBH: "GOT TO BE THERE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "18448",
    TENBH: "GOT YOU WHERE I WANT YOU",
    TACGIA: "The Flys",
  },
  {
    MABH: "5917",
    TENBH: "GOTTA GO MY OWN WAY",
    TACGIA: "High School Musical 2",
  },
  {
    MABH: "4896",
    TENBH: "GOTTA TELL YOU",
    TACGIA: "Samantha Mumba",
  },
  {
    MABH: "18545",
    TENBH: "GRACE KELLY",
    TACGIA: "Mika",
  },
  {
    MABH: "1933",
    TENBH: "GRACIAS A LA VIDA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "6418",
    TENBH: "GRADES DO CORAÇÃO",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "3524",
    TENBH: "GRAND' HOTEL",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "30915",
    TENBH: "GRAVETO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "9220",
    TENBH: "GREASE",
    TACGIA: "Frankie Valli",
  },
  {
    MABH: "18668",
    TENBH: "GREAT BALLS OF FIRE",
    TACGIA: "Jerry Lee Lewis",
  },
  {
    MABH: "4897",
    TENBH: "GREATEST LOVE OF ALL",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "24471",
    TENBH: "GREEDY",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "4516",
    TENBH: "GREEN GREEN GRASS OF HOME",
    TACGIA: "Tom Jones",
  },
  {
    MABH: "5910",
    TENBH: "GREEN RIVER",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "24142",
    TENBH: "GRENADE",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "24273",
    TENBH: "GRILLZ",
    TACGIA: "Nelly",
  },
  {
    MABH: "3842",
    TENBH: "GRITO DE ALERTA",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "9260",
    TENBH: "GROOVIN'",
    TACGIA: "Young Rascals",
  },
  {
    MABH: "21003",
    TENBH: "GUANTANAMERA",
    TACGIA: "The Sandpipers",
  },
  {
    MABH: "30159",
    TENBH: "GUARDANAPOS DE PAPEL",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "33582",
    TENBH: "GUARDA-ROUPA VAZIO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "15462",
    TENBH: "GUERRA FRIA",
    TACGIA: "Sorriso Maroto & Jorge e Mateus",
  },
  {
    MABH: "6779",
    TENBH: "GUERREIRO MENINO",
    TACGIA: "Fagner",
  },
  {
    MABH: "9111",
    TENBH: "GUILTY",
    TACGIA: "Barbra Streisand & Barry Gibb",
  },
  {
    MABH: "33671",
    TENBH: "GUT GUT",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "2589",
    TENBH: "GYPSY",
    TACGIA: "Shakira",
  },
  {
    MABH: "9112",
    TENBH: "GYPSY",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "3112",
    TENBH: "HÁ TEMPOS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "24105",
    TENBH: "HABITS (STAY HIGH)",
    TACGIA: "Tove Lo",
  },
  {
    MABH: "31001",
    TENBH: "HACKEARAM-ME",
    TACGIA: "Tierry",
  },
  {
    MABH: "24441",
    TENBH: "HAIR",
    TACGIA: "Little Mix",
  },
  {
    MABH: "18546",
    TENBH: "HAIR OF THE DOG",
    TACGIA: "Nazareth",
  },
  {
    MABH: "26153",
    TENBH: "HALLUCINATE",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "2524",
    TENBH: "HALO",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "18860",
    TENBH: "HALT THE WORLD AWAY",
    TACGIA: "Oasis",
  },
  {
    MABH: "26023",
    TENBH: "HAND IN MY POCKET",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "24444",
    TENBH: "HANDS TO MYSELF",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "9113",
    TENBH: "HANDY MAN",
    TACGIA: "James Taylor",
  },
  {
    MABH: "24179",
    TENBH: "HANGOVER",
    TACGIA: "Taio Cruz ft. Flo Rida",
  },
  {
    MABH: "24821",
    TENBH: "HAPPIER",
    TACGIA: "Marshmello & Bastille",
  },
  {
    MABH: "24084",
    TENBH: "HAPPY",
    TACGIA: "Pharrell Williams",
  },
  {
    MABH: "9221",
    TENBH: "HAPPY NATION",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "4579",
    TENBH: "HAPPY TOGETHER",
    TACGIA: "The Turtles",
  },
  {
    MABH: "9222",
    TENBH: "HARD FOR ME TO SAY I'M SORRY",
    TACGIA: "Chicago",
  },
  {
    MABH: "24531",
    TENBH: "HARD TIMES",
    TACGIA: "Paramore",
  },
  {
    MABH: "18447",
    TENBH: "HARD TO SAY I'M SORRY",
    TACGIA: "Chicago",
  },
  {
    MABH: "18984",
    TENBH: "HARDER THEY COME",
    TACGIA: "Jimmy Cliff",
  },
  {
    MABH: "18778",
    TENBH: "HARDEST BUTTON TO BUTTON",
    TACGIA: "The White Stripes",
  },
  {
    MABH: "18006",
    TENBH: "HARDEST PART",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18114",
    TENBH: "HATE THAT I LOVE YOU",
    TACGIA: "Rihanna ft. Ne-Yo",
  },
  {
    MABH: "24535",
    TENBH: "HAVANA",
    TACGIA: "Camila Cabello ft. Young Thug",
  },
  {
    MABH: "18547",
    TENBH: "HAVE A NICE DAY",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "24612",
    TENBH: "HAVE I TOLD YOU LATELY",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "4898",
    TENBH: "HAVE YOU EVER REALLY LOVED A WOMAN",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "4580",
    TENBH: "HAVE YOU EVER SEEN THE RAIN",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "4630",
    TENBH: "HAVE YOU NEVER BEEN MELLOW",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "2566",
    TENBH: "HAVEN'T MET YOU YET",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "4581",
    TENBH: "HAWAIIAN WEDDING SONG",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "24822",
    TENBH: "HAZARD",
    TACGIA: "Richard Marx",
  },
  {
    MABH: "31002",
    TENBH: "HB20",
    TACGIA: "Tierry",
  },
  {
    MABH: "4711",
    TENBH: "HE AIN'T HEAVY HE'S MY BROTHER",
    TACGIA: "Hollies",
  },
  {
    MABH: "18220",
    TENBH: "HE WASN'T",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "24613",
    TENBH: "HE WASN'T MAN ENOUGH",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "18669",
    TENBH: "HEAD OVER HEELS",
    TACGIA: "Tears For Fears",
  },
  {
    MABH: "24823",
    TENBH: "HEADLINES (FRIENDSHIP NEVER ENDS)",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "26129",
    TENBH: "HEADSTRONG",
    TACGIA: "Trapt",
  },
  {
    MABH: "18861",
    TENBH: "HEAL THE PAIN",
    TACGIA: "George Michael",
  },
  {
    MABH: "4712",
    TENBH: "HEAL THE WORLD",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "30160",
    TENBH: "HEAR ME NOW",
    TACGIA: "Alok, Bruno Martini ft. Zeeba",
  },
  {
    MABH: "24186",
    TENBH: "HEART ATTACK",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "4899",
    TENBH: "HEART OF GLASS",
    TACGIA: "Blondie",
  },
  {
    MABH: "18548",
    TENBH: "HEART SHAPED BOX",
    TACGIA: "Nirvana",
  },
  {
    MABH: "24356",
    TENBH: "HEARTBEAT SONG",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "24259",
    TENBH: "HEARTBREAK WARFARE",
    TACGIA: "John Mayer",
  },
  {
    MABH: "2591",
    TENBH: "HEARTBREAKER",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "26127",
    TENBH: "HEARTLESS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "18862",
    TENBH: "HEAT OF THE MOMENT",
    TACGIA: "Asia",
  },
  {
    MABH: "4713",
    TENBH: "HEAVEN",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "18376",
    TENBH: "HEAVEN",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "18932",
    TENBH: "HEAVEN",
    TACGIA: "Los Lonely Boys",
  },
  {
    MABH: "26167",
    TENBH: "HEAVEN",
    TACGIA: "Live",
  },
  {
    MABH: "26141",
    TENBH: "HEAVEN IS A PLACE ON EARTH",
    TACGIA: "Belinda Carlisle",
  },
  {
    MABH: "24719",
    TENBH: "HEAVEN KNOWS I'M MISERABLE NOW",
    TACGIA: "The Smiths",
  },
  {
    MABH: "18863",
    TENBH: "HEAVEN'S ON FIRE",
    TACGIA: "Kiss",
  },
  {
    MABH: "24517",
    TENBH: "HEAVY",
    TACGIA: "Linkin Park ft. Kiiara",
  },
  {
    MABH: "18040",
    TENBH: "HELENA",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "4517",
    TENBH: "HE'LL HAVE TO GO",
    TACGIA: "Jim Reeves",
  },
  {
    MABH: "4900",
    TENBH: "HELLO",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "24292",
    TENBH: "HELLO",
    TACGIA: "Martin Solveig & Dragonette",
  },
  {
    MABH: "24376",
    TENBH: "HELLO",
    TACGIA: "Adele",
  },
  {
    MABH: "18864",
    TENBH: "HELLO AGAIN",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "24720",
    TENBH: "HELLO DOLLY",
    TACGIA: "Louis Armstrong",
  },
  {
    MABH: "24395",
    TENBH: "HELLO FRIDAY",
    TACGIA: "Flo Rida & Jason Derulo",
  },
  {
    MABH: "18865",
    TENBH: "HELLO GOODBYE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "26103",
    TENBH: "HELLRAISER",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "4518",
    TENBH: "HELP",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4582",
    TENBH: "HELP ME MAKE IT THROUGH THE NIGHT",
    TACGIA: "Kris Kristofferson",
  },
  {
    MABH: "2689",
    TENBH: "HE-MAN",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "24428",
    TENBH: "HERE",
    TACGIA: "Alessia Cara",
  },
  {
    MABH: "18115",
    TENBH: "HERE COMES THE RAIN AGAIN",
    TACGIA: "Eurythmics",
  },
  {
    MABH: "18733",
    TENBH: "HERE COMES THE SUN",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18198",
    TENBH: "HERE COMES YOUR MAN",
    TACGIA: "Pixies",
  },
  {
    MABH: "5911",
    TENBH: "HERE I AM",
    TACGIA: "Air Supply",
  },
  {
    MABH: "5912",
    TENBH: "HERE I GO AGAIN",
    TACGIA: "Whitesnake",
  },
  {
    MABH: "9114",
    TENBH: "HERE WE ARE",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "9033",
    TENBH: "HERE WITHOUT YOU",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "24848",
    TENBH: "WHAT'S ON YOUR MIND",
    TACGIA: "Information Society",
  },
  {
    MABH: "9072",
    TENBH: "WHAT'S UP",
    TACGIA: "4 Non Blondes",
  },
  {
    MABH: "4801",
    TENBH: "WHEN A MAN LOVES A WOMAN",
    TACGIA: "Percy Sledge",
  },
  {
    MABH: "18614",
    TENBH: "WHEN DOVES CRY",
    TACGIA: "Prince",
  },
  {
    MABH: "24558",
    TENBH: "WHEN I COME AROUND",
    TACGIA: "Green Day",
  },
  {
    MABH: "4802",
    TENBH: "WHEN I FALL IN LOVE",
    TACGIA: "Nat King Cole And Natalie Cole",
  },
  {
    MABH: "24422",
    TENBH: "WHEN I WAS YOUR MAN",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "18633",
    TENBH: "WHEN I'M GONE",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "24204",
    TENBH: "WHEN I'M GONE",
    TACGIA: "Eminem",
  },
  {
    MABH: "2636",
    TENBH: "WHEN I'M SIXTY-FOUR",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18953",
    TENBH: "WHEN THE LEVEE BREAKS",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "24901",
    TENBH: "WHEN THE PARTY'S OVER",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "4557",
    TENBH: "WHEN THE SAINTS GO MARCHING IN",
    TACGIA: "Louis Armstrong",
  },
  {
    MABH: "9994",
    TENBH: "WHEN THERE WAS ME AND YOU",
    TACGIA: "High School Musical",
  },
  {
    MABH: "24427",
    TENBH: "WHEN WE WERE YOUNG",
    TACGIA: "Adele",
  },
  {
    MABH: "4803",
    TENBH: "WHEN YOU BELIEVE",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "2597",
    TENBH: "WHEN YOU LOOK ME IN THE EYES",
    TACGIA: "Jonas Brothers",
  },
  {
    MABH: "18748",
    TENBH: "WHEN YOU WERE YOUNG",
    TACGIA: "The Killers",
  },
  {
    MABH: "18954",
    TENBH: "WHEN YOU'RE GONE",
    TACGIA: "Bryan Adams ft. Melanie C",
  },
  {
    MABH: "24116",
    TENBH: "WHEN YOU'RE LOOKING LIKE THAT",
    TACGIA: "Westlife",
  },
  {
    MABH: "24674",
    TENBH: "WHEN YOU'RE LOVE WITH BEAUTIFUL WOMAN",
    TACGIA: "Dr. Hook & The Medicine Show",
  },
  {
    MABH: "18354",
    TENBH: "WHENEVER, WHEREVER",
    TACGIA: "Shakira",
  },
  {
    MABH: "24269",
    TENBH: "WHERE ARE U NOW",
    TACGIA: "Skrillex and Diplo feat. Justin Bieber",
  },
  {
    MABH: "24675",
    TENBH: "WHERE DO BROKEN HEART GO",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18056",
    TENBH: "WHERE HAVE ALL THE COWBOYS GONE",
    TACGIA: "Paula Cole",
  },
  {
    MABH: "18344",
    TENBH: "WHERE HAVE YOU BEEN",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24041",
    TENBH: "WHERE IT'S AT",
    TACGIA: "Dustin Lynch",
  },
  {
    MABH: "24803",
    TENBH: "WHERE THE STREETS HAVE NO NAME",
    TACGIA: "U2",
  },
  {
    MABH: "24559",
    TENBH: "WHERE'S THE REVOLUTION",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "24461",
    TENBH: "WHEREVER I GO",
    TACGIA: "OneRepublic",
  },
  {
    MABH: "18491",
    TENBH: "WHEREVER YOU WILL GO",
    TACGIA: "The Calling",
  },
  {
    MABH: "24579",
    TENBH: "WHILE MY GUITAR GENTLY WEEPS",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "26220",
    TENBH: "WHIP IT",
    TACGIA: "Devo",
  },
  {
    MABH: "18749",
    TENBH: "WHISKEY IN THE JAR",
    TACGIA: "Metallica",
  },
  {
    MABH: "18955",
    TENBH: "WHISKEY LULLABY",
    TACGIA: "Brad Paisley ft. Alison Krauss",
  },
  {
    MABH: "3300",
    TENBH: "WHISKY A GO-GO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "30941",
    TENBH: "WHISKY E GELO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "18715",
    TENBH: "WHISPER",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24216",
    TENBH: "WHISTLE",
    TACGIA: "Flo Rida",
  },
  {
    MABH: "4664",
    TENBH: "WHITE CHRISTMAS",
    TACGIA: "The Drifters",
  },
  {
    MABH: "18060",
    TENBH: "WHITE FLAG",
    TACGIA: "Dido",
  },
  {
    MABH: "18613",
    TENBH: "WHITE WEDDING",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "24804",
    TENBH: "WHO CAN IT BE NOW",
    TACGIA: "Men At Work",
  },
  {
    MABH: "24115",
    TENBH: "WHO DAT GIRL",
    TACGIA: "Akon ft. Flo Rida",
  },
  {
    MABH: "26124",
    TENBH: "WHO DO YOU LOVE",
    TACGIA: "The Chainsmokers ft. 5 Second of Summer",
  },
  {
    MABH: "18323",
    TENBH: "WHO KNEW",
    TACGIA: "Pink",
  },
  {
    MABH: "2660",
    TENBH: "WHO LET IN THE RAIN",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "9995",
    TENBH: "WHO SAID",
    TACGIA: "Hannah Montana",
  },
  {
    MABH: "24425",
    TENBH: "WHO SAYS",
    TACGIA: "Selena Gomez & The Scene",
  },
  {
    MABH: "18716",
    TENBH: "WHO WANTS TO LIVE FOREVER",
    TACGIA: "Queen",
  },
  {
    MABH: "24676",
    TENBH: "WHO YOU ARE",
    TACGIA: "Jessie J",
  },
  {
    MABH: "18608",
    TENBH: "WHOLE LOTTA LOVE",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "26070",
    TENBH: "WHOLE LOTTA SHAKIN' GOIN' ON",
    TACGIA: "Jerry Lee Lewis",
  },
  {
    MABH: "9073",
    TENBH: "WHO'LL STOP THE RAIN",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "18956",
    TENBH: "WHO'S LOVING YOU",
    TACGIA: "Jackson 5",
  },
  {
    MABH: "24183",
    TENBH: "WHO'S THAT CHICK",
    TACGIA: "David Guetta ft. Rihanna",
  },
  {
    MABH: "18612",
    TENBH: "WHO'S THAT GIRL",
    TACGIA: "Eurythmics",
  },
  {
    MABH: "18419",
    TENBH: "WHY",
    TACGIA: "Annie Lennox",
  },
  {
    MABH: "24580",
    TENBH: "WHY CAN'T THIS BE LOVE",
    TACGIA: "Van Halen",
  },
  {
    MABH: "26188",
    TENBH: "WHY CAN'T WE BE FRIENDS",
    TACGIA: "War",
  },
  {
    MABH: "24980",
    TENBH: "WHY DID YOU DO THAT?",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "4990",
    TENBH: "WHY DON'T YOU GET A JOB?",
    TACGIA: "Offspring",
  },
  {
    MABH: "18250",
    TENBH: "WICKED GAME",
    TACGIA: "Chris Isaak",
  },
  {
    MABH: "24053",
    TENBH: "WIGGLE",
    TACGIA: "Jason Derulo ft. Snoop Dogg",
  },
  {
    MABH: "4991",
    TENBH: "WILD HORSES",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "24220",
    TENBH: "WILD ONES",
    TACGIA: "Flo Rida ft. Sia",
  },
  {
    MABH: "9074",
    TENBH: "WILD WORLD",
    TACGIA: "Cat Stevens",
  },
  {
    MABH: "9996",
    TENBH: "WIND OF CHANGE",
    TACGIA: "Scorpions",
  },
  {
    MABH: "24918",
    TENBH: "WISEMEN",
    TACGIA: "James Blunt",
  },
  {
    MABH: "24862",
    TENBH: "WISH YOU WERE GAY",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "18153",
    TENBH: "WISH YOU WERE HERE",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "18609",
    TENBH: "WISH YOU WERE HERE",
    TACGIA: "Pink Floyd",
  },
  {
    MABH: "24677",
    TENBH: "WISH YOU WERE HERE",
    TACGIA: "Incubus",
  },
  {
    MABH: "2599",
    TENBH: "WISHING ON A STAR",
    TACGIA: "Cover Girls",
  },
  {
    MABH: "26222",
    TENBH: "WITCHCRAFT",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "18611",
    TENBH: "WITH A LITTLE HELP FROM MY FRIENDS",
    TACGIA: "Joe Cocker",
  },
  {
    MABH: "4992",
    TENBH: "WITH ARMS WIDE OPEN",
    TACGIA: "Creed",
  },
  {
    MABH: "30528",
    TENBH: "WITH ME",
    TACGIA: "Bruno Martini ft. Zeeba",
  },
  {
    MABH: "4804",
    TENBH: "WITH OR WITHOUT YOU",
    TACGIA: "U2",
  },
  {
    MABH: "24162",
    TENBH: "WITH YOU",
    TACGIA: "Chris Brown",
  },
  {
    MABH: "18822",
    TENBH: "WITHOUT ME",
    TACGIA: "Eminem",
  },
  {
    MABH: "24805",
    TENBH: "WITHOUT ME",
    TACGIA: "Halsey",
  },
  {
    MABH: "4558",
    TENBH: "WITHOUT YOU",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "24566",
    TENBH: "WOLVES",
    TACGIA: "Selena Gomez ft. Marshmello",
  },
  {
    MABH: "4805",
    TENBH: "WOMAN",
    TACGIA: "John Lennon",
  },
  {
    MABH: "4993",
    TENBH: "WOMAN IN CHAINS",
    TACGIA: "Tears For Fears",
  },
  {
    MABH: "4613",
    TENBH: "WOMAN IN LOVE",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "24141",
    TENBH: "WOMANIZER",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24806",
    TENBH: "WOMAN'S GOTTA HAVE IT",
    TACGIA: "Bobby Womack",
  },
  {
    MABH: "26067",
    TENBH: "WONDERFUL",
    TACGIA: "Ja Rule ft. R. Kelly, Ashanti",
  },
  {
    MABH: "4614",
    TENBH: "WONDERFUL TONIGHT",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "4994",
    TENBH: "WONDERWALL",
    TACGIA: "Oasis",
  },
  {
    MABH: "18207",
    TENBH: "WON'T GET FOOLED AGAIN",
    TACGIA: "The Who",
  },
  {
    MABH: "26216",
    TENBH: "WORD UP",
    TACGIA: "Cameo",
  },
  {
    MABH: "18363",
    TENBH: "WORD UP!",
    TACGIA: "Korn",
  },
  {
    MABH: "4665",
    TENBH: "WORDS",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "18227",
    TENBH: "WORDS AS WEAPONS",
    TACGIA: "Seether",
  },
  {
    MABH: "9075",
    TENBH: "WORDS GET IN THE WAY",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "24379",
    TENBH: "WORK",
    TACGIA: "Rihanna ft. Drake",
  },
  {
    MABH: "24050",
    TENBH: "WORK (EXPLICIT)",
    TACGIA: "Iggy Azalea",
  },
  {
    MABH: "24406",
    TENBH: "WORK FROM HOME",
    TACGIA: "Fifth Harmony ft. Ty Dolla Sign",
  },
  {
    MABH: "18309",
    TENBH: "WORK IT",
    TACGIA: "Missy Elliot",
  },
  {
    MABH: "24678",
    TENBH: "WORKING MAN",
    TACGIA: "Rush",
  },
  {
    MABH: "24040",
    TENBH: "WORTH IT",
    TACGIA: "Fifth Harmony ft. Kid Ink",
  },
  {
    MABH: "18957",
    TENBH: "WOULD",
    TACGIA: "Alice in Chains",
  },
  {
    MABH: "9198",
    TENBH: "WOULD I LIE TO YOU?",
    TACGIA: "Charles And Eddie",
  },
  {
    MABH: "18958",
    TENBH: "WOULDN'T IT BE NICE",
    TACGIA: "Beach Boys",
  },
  {
    MABH: "24360",
    TENBH: "WRECKING BALL",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "18959",
    TENBH: "WRITING'S ON THE WALL",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "18718",
    TENBH: "WUTHERING HEIGHTS",
    TACGIA: "Kate Bush",
  },
  {
    MABH: "24991",
    TENBH: "X (EQUIS)",
    TACGIA: "Nicky Jam",
  },
  {
    MABH: "18634",
    TENBH: "XANADU",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "24863",
    TENBH: "XANNY",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "4419",
    TENBH: "XIBOM BOMBOM",
    TACGIA: "As Meninas",
  },
  {
    MABH: "33085",
    TENBH: "XING LING",
    TACGIA: "Fernando e Sorocaba part. Lucas Lucco",
  },
  {
    MABH: "30249",
    TENBH: "XIXI NAS ESTRELAS",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "24008",
    TENBH: "XO",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "33892",
    TENBH: "XÔ SATANÁS",
    TACGIA: "Asa de Águia",
  },
  {
    MABH: "15360",
    TENBH: "XONOU, XONOU",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "6240",
    TENBH: "XOTE DA ALEGRIA",
    TACGIA: "Falamansa",
  },
  {
    MABH: "3860",
    TENBH: "XOTE DAS MENINAS",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "6040",
    TENBH: "XOTE DOS MILAGRES",
    TACGIA: "Falamansa",
  },
  {
    MABH: "4848",
    TENBH: "Y.M.C.A.",
    TACGIA: "Village People",
  },
  {
    MABH: "24057",
    TENBH: "YEAH",
    TACGIA: "Joe Nichols",
  },
  {
    MABH: "18157",
    TENBH: "YEAH 3X",
    TACGIA: "Chris Brown",
  },
  {
    MABH: "4806",
    TENBH: "YEAR OF THE CAT",
    TACGIA: "Al Stewart",
  },
  {
    MABH: "24176",
    TENBH: "YELLOW",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18289",
    TENBH: "YELLOW LEDBETTER",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "4807",
    TENBH: "YELLOW RIVER",
    TACGIA: "Christie",
  },
  {
    MABH: "4995",
    TENBH: "YELLOW SUBMARINE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "2540",
    TENBH: "YES",
    TACGIA: "Tim Moore",
  },
  {
    MABH: "24807",
    TENBH: "YES WE CAN CAN",
    TACGIA: "Pointer Sisters",
  },
  {
    MABH: "30957",
    TENBH: "YESHUA",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "4559",
    TENBH: "YESTERDAY",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4615",
    TENBH: "YESTERDAY ONCE MORE",
    TACGIA: "Carpenters",
  },
  {
    MABH: "4808",
    TENBH: "YESTER-ME, YESTER-YOU, YESTERDAY",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "30885",
    TENBH: "YOLANDA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "18206",
    TENBH: "YOU AND I",
    TACGIA: "One Direction",
  },
  {
    MABH: "18719",
    TENBH: "YOU AND I",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "24335",
    TENBH: "YOU AND I",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "24581",
    TENBH: "YOU AND I",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "18370",
    TENBH: "YOU ARE EVERYTHING",
    TACGIA: "Diana Ross ft. Marvin Gaye",
  },
  {
    MABH: "4560",
    TENBH: "YOU ARE MY SUNSHINE",
    TACGIA: "Mitch Miller",
  },
  {
    MABH: "2638",
    TENBH: "YOU ARE NOT ALONE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "2559",
    TENBH: "YOU ARE SO BEAUTIFUL",
    TACGIA: "Joe Cocker",
  },
  {
    MABH: "9997",
    TENBH: "YOU ARE THE MUSIC IN ME",
    TACGIA: "High School Musical (Sharpay)",
  },
  {
    MABH: "18355",
    TENBH: "YOU ARE THE ONE",
    TACGIA: "Shiny Toy Guns",
  },
  {
    MABH: "26034",
    TENBH: "YOU ARE THE REASON",
    TACGIA: "Calum Scott",
  },
  {
    MABH: "4809",
    TENBH: "YOU ARE THE SUNSHINE OF MY LIFE",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "24102",
    TENBH: "YOU BELONG WITH ME",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18960",
    TENBH: "YOU CAN'T HURRY LOVE",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "24871",
    TENBH: "YOU CAN'T STOP THE BEAT",
    TACGIA: "Hairspray (Musical)",
  },
  {
    MABH: "2639",
    TENBH: "YOU COULD BE MINE",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "18961",
    TENBH: "YOU DON'T LOVE ME (NO NO NO)",
    TACGIA: "Dawn Penn",
  },
  {
    MABH: "18169",
    TENBH: "YOU GET WHAT YOU GIVE",
    TACGIA: "New Radicals",
  },
  {
    MABH: "24679",
    TENBH: "YOU GIVE GOOD LOVE",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "4996",
    TENBH: "YOU GIVE LOVE A BAD NAME",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9076",
    TENBH: "YOU GOT IT",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "18160",
    TENBH: "YOU GOTTA BE",
    TACGIA: "Des'ree",
  },
  {
    MABH: "2550",
    TENBH: "YOU KNOW I'M NO GOOD",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "9077",
    TENBH: "YOU KNOW WHAT TO DO",
    TACGIA: "Carly Simon",
  },
  {
    MABH: "4997",
    TENBH: "YOU LEARN",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "4849",
    TENBH: "YOU LIGHT UP MY LIFE",
    TACGIA: "Debby Boone",
  },
  {
    MABH: "24171",
    TENBH: "YOU MAKE ME FEEL",
    TACGIA: "Cobra Starship",
  },
  {
    MABH: "26206",
    TENBH: "YOU MAKE ME FEEL (MIGHTY REAL)",
    TACGIA: "Sylvester",
  },
  {
    MABH: "9078",
    TENBH: "YOU MAKE ME FEEL BRAND NEW",
    TACGIA: "Simply Red",
  },
  {
    MABH: "18962",
    TENBH: "YOU MAKE MY DREAMS",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "9998",
    TENBH: "YOU MEAN EVERYTHING TO ME",
    TACGIA: "Neil Sedaka",
  },
  {
    MABH: "9238",
    TENBH: "YOU NEEDED ME",
    TACGIA: "Anne Murray",
  },
  {
    MABH: "18963",
    TENBH: "YOU NEVER CAN TELL",
    TACGIA: "Chuck Berry",
  },
  {
    MABH: "18720",
    TENBH: "YOU ONLY LIVE ONCE",
    TACGIA: "The Strokes",
  },
  {
    MABH: "4850",
    TENBH: "YOU OUGHTA KNOW",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "24808",
    TENBH: "YOU RAISE ME UP",
    TACGIA: "Westlife",
  },
  {
    MABH: "18610",
    TENBH: "YOU REALLY GOT ME",
    TACGIA: "Van Halen",
  },
  {
    MABH: "18964",
    TENBH: "YOU SET MY HEART ON FIRE",
    TACGIA: "Tina Charles",
  },
  {
    MABH: "18154",
    TENBH: "YOU SHOOK ME ALL NIGHT LONG",
    TACGIA: "AC/DC",
  },
  {
    MABH: "18965",
    TENBH: "YOU SHOULD BE DANCING",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "24864",
    TENBH: "YOU SHOULD SEE ME IN A CROWN",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "18966",
    TENBH: "YOU WEREN'T IN LOVE",
    TACGIA: "Mick Fleetwood",
  },
  {
    MABH: "4420",
    TENBH: "YOU’RE MY # 1",
    TACGIA: "Sandy & Júnior part. Enrique Iglesias",
  },
  {
    MABH: "4998",
    TENBH: "YOU'LL BE IN MY HEART",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "18385",
    TENBH: "YOU'LL NEVER FIND ANOTHER LOVE LIKE MINE",
    TACGIA: "Lou Rawls",
  },
  {
    MABH: "18215",
    TENBH: "YOU'LL SEE",
    TACGIA: "Madonna",
  },
  {
    MABH: "24301",
    TENBH: "YOUNG AND BEAUTIFUL",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "24877",
    TENBH: "YOUNG, DUMB AND BROKE",
    TACGIA: "Khalid",
  },
  {
    MABH: "18823",
    TENBH: "YOUNG, WILD AND FREE",
    TACGIA: "Wiz Khalifa & Snoop Dogg ft. Bruno Mars",
  },
  {
    MABH: "24849",
    TENBH: "YOUNGBLOOD",
    TACGIA: "5 Seconds of Summer",
  },
  {
    MABH: "24164",
    TENBH: "YOUR BODY",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "9239",
    TENBH: "YOUR LATEST TRICK",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "18498",
    TENBH: "YOUR LOVE",
    TACGIA: "The Outfield",
  },
  {
    MABH: "24284",
    TENBH: "YOUR LOVE IS MY DRUG",
    TACGIA: "Kesha",
  },
  {
    MABH: "9079",
    TENBH: "YOUR SONG",
    TACGIA: "Elton John",
  },
  {
    MABH: "18263",
    TENBH: "YOUR STAR",
    TACGIA: "Evanescence",
  },
  {
    MABH: "9240",
    TENBH: "YOU'RE BEAUTIFUL",
    TACGIA: "James Blunt",
  },
  {
    MABH: "18364",
    TENBH: "YOU'RE GONNA GO FAR, KID",
    TACGIA: "Offspring",
  },
  {
    MABH: "18393",
    TENBH: "YOU'RE IN MY HEART",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "4675",
    TENBH: "YOU'RE MY EVERYTHING",
    TACGIA: "Santa Esmeralda",
  },
  {
    MABH: "18967",
    TENBH: "YOU'RE SO VAIN",
    TACGIA: "Carly Simon",
  },
  {
    MABH: "9080",
    TENBH: "YOU'RE STILL THE ONE",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "26159",
    TENBH: "YOU'RE THE BEST",
    TACGIA: "Joe Esposito",
  },
  {
    MABH: "24560",
    TENBH: "YOU'RE THE BEST THING ABOUT ME",
    TACGIA: "U2",
  },
  {
    MABH: "18968",
    TENBH: "YOU'RE THE FIRST, THE LAST, MY EVERYTHING",
    TACGIA: "Barry White",
  },
  {
    MABH: "2560",
    TENBH: "YOU'RE THE INSPIRATION",
    TACGIA: "Chicago",
  },
  {
    MABH: "9999",
    TENBH: "YOU'RE THE ONE THAT I WANT",
    TACGIA: "John Travolta & Olivia Newton",
  },
  {
    MABH: "18316",
    TENBH: "YOUTH OF THE NATION",
    TACGIA: "P.O.D.",
  },
  {
    MABH: "4999",
    TENBH: "YOU'VE GOT A FRIEND",
    TACGIA: "James Taylor",
  },
  {
    MABH: "24680",
    TENBH: "YOU'VE GOT A FRIEND",
    TACGIA: "Carole King",
  },
  {
    MABH: "24940",
    TENBH: "YOU'VE GOT A FRIEND IN ME",
    TACGIA: "Toy Story",
  },
  {
    MABH: "24681",
    TENBH: "YOU'VE GOT THE LOVE",
    TACGIA: "Florence & The Machine",
  },
  {
    MABH: "4810",
    TENBH: "YOU'VE LOST THAT LOVIN' FEELIN'",
    TACGIA: "Righteous Brothers",
  },
  {
    MABH: "24943",
    TENBH: "YOU'VE LOST THAT LOVIN' FEELIN'",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24976",
    TENBH: "YUMMY",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "7480",
    TENBH: "ZANZIBAR",
    TACGIA: "A Cor do Som",
  },
  {
    MABH: "30684",
    TENBH: "ZÉ DA RECAÍDA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33246",
    TENBH: "ZÉ DO CAROÇO",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "15080",
    TENBH: "ZÉ NINGUÉM",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "33999",
    TENBH: "ZÉ TROVÃO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "15320",
    TENBH: "ZEN",
    TACGIA: "Anitta",
  },
  {
    MABH: "18077",
    TENBH: "ZERO",
    TACGIA: "Smashing Pumpkins",
  },
  {
    MABH: "30039",
    TENBH: "ZERO A DEZ",
    TACGIA: "Ivete Sangalo & Luan Santana",
  },
  {
    MABH: "33733",
    TENBH: "ZIRIGUIDUM",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "4340",
    TENBH: "ZÓIO DE LULA",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "5000",
    TENBH: "ZOMBIE",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "2760",
    TENBH: "ZUAR E BEBER",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "18779",
    TENBH: "HERE'S TO NEVER GROWING UP",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "4668",
    TENBH: "HERO",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "18249",
    TENBH: "HERO",
    TACGIA: "Chad Kroeger ft. Josey Scott",
  },
  {
    MABH: "18640",
    TENBH: "HERO OF THE DAY",
    TACGIA: "Metallica",
  },
  {
    MABH: "2605",
    TENBH: "HEROES",
    TACGIA: "The Wallflowers",
  },
  {
    MABH: "18866",
    TENBH: "HEROES",
    TACGIA: "David Bowie",
  },
  {
    MABH: "24338",
    TENBH: "HEROES",
    TACGIA: "Alesso feat. Tove Lo",
  },
  {
    MABH: "30161",
    TENBH: "HEY",
    TACGIA: "José Augusto",
  },
  {
    MABH: "18314",
    TENBH: "HEY BABY",
    TACGIA: "No Doubt",
  },
  {
    MABH: "24121",
    TENBH: "HEY BROTHER",
    TACGIA: "Avicii",
  },
  {
    MABH: "30162",
    TENBH: "HEY GIRL",
    TACGIA: "The Fevers",
  },
  {
    MABH: "24614",
    TENBH: "HEY JOE",
    TACGIA: "Jimi Hendrix",
  },
  {
    MABH: "30023",
    TENBH: "HEY JOE",
    TACGIA: "O Rappa",
  },
  {
    MABH: "3843",
    TENBH: "HEY JUDE",
    TACGIA: "Kiko Zambianchi",
  },
  {
    MABH: "4714",
    TENBH: "HEY JUDE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "26064",
    TENBH: "HEY MA",
    TACGIA: "J Balvin & Pitbull ft. Camila Cabello",
  },
  {
    MABH: "24313",
    TENBH: "HEY MAMA",
    TACGIA: "David Guetta ft. Nicki Minaj & Afrojack",
  },
  {
    MABH: "24927",
    TENBH: "HEY THERE DELILAH",
    TACGIA: "Plain White T's",
  },
  {
    MABH: "18116",
    TENBH: "HEY YA!",
    TACGIA: "OutKast",
  },
  {
    MABH: "33783",
    TENBH: "HEY, MUNDO!",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "18505",
    TENBH: "HEY, SOUL SISTER",
    TACGIA: "Train",
  },
  {
    MABH: "24070",
    TENBH: "HIDEAWAY",
    TACGIA: "Kiesza",
  },
  {
    MABH: "9261",
    TENBH: "HIGH",
    TACGIA: "James Blunt",
  },
  {
    MABH: "24721",
    TENBH: "HIGH",
    TACGIA: "Lighthouse Family",
  },
  {
    MABH: "24166",
    TENBH: "HIGH BY THE BEACH",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "24824",
    TENBH: "HIGH HOPES",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "18867",
    TENBH: "HIGHER",
    TACGIA: "Creed",
  },
  {
    MABH: "18118",
    TENBH: "HIGHWAY STAR",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "2606",
    TENBH: "HIGHWAY TO HELL",
    TACGIA: "AC/DC",
  },
  {
    MABH: "24825",
    TENBH: "HIM & I",
    TACGIA: "G-Eazy ft. Halsey",
  },
  {
    MABH: "7616",
    TENBH: "HIMALAIA",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "30777",
    TENBH: "HINO AO AMOR",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "5613",
    TENBH: "HINO DA VITÓRIA",
    TACGIA: "Cassiane",
  },
  {
    MABH: "4353",
    TENBH: "HINO NACIONAL BRASILEIRO",
    TACGIA: "Hinos",
  },
  {
    MABH: "33145",
    TENBH: "HIPNOSE",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "30453",
    TENBH: "HIPNOTIZOU",
    TACGIA: "Harmonia do Samba part. Léo Santana",
  },
  {
    MABH: "24184",
    TENBH: "HIPS DON'T LIE",
    TACGIA: "Shakira",
  },
  {
    MABH: "4354",
    TENBH: "HISTÓRIA DE AMOR",
    TACGIA: "Juventude AS",
  },
  {
    MABH: "30748",
    TENBH: "HISTÓRIA DE AMOR",
    TACGIA: "Wanderlei Cardoso",
  },
  {
    MABH: "18392",
    TENBH: "HIT THAT",
    TACGIA: "Offspring",
  },
  {
    MABH: "18670",
    TENBH: "HIT THE ROAD JACK",
    TACGIA: "Ray Charles",
  },
  {
    MABH: "1674",
    TENBH: "HOJE",
    TACGIA: "Leonardo",
  },
  {
    MABH: "6823",
    TENBH: "HOJE",
    TACGIA: "Taiguara",
  },
  {
    MABH: "33460",
    TENBH: "HOJE",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "30238",
    TENBH: "HOJE A NOITE",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "4355",
    TENBH: "HOJE A NOITE NÃO TEM LUAR",
    TACGIA: "Renato Russo",
  },
  {
    MABH: "33478",
    TENBH: "HOJE EU QUERO SAIR SÓ",
    TACGIA: "Lenine",
  },
  {
    MABH: "30862",
    TENBH: "HOJE EU QUERO TE AMAR",
    TACGIA: "Renê e Ronaldo",
  },
  {
    MABH: "3754",
    TENBH: "HOJE EU SEI",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "33068",
    TENBH: "HOJE EU TÔ TERRÍVEL",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "30749",
    TENBH: "HOJE LEMBREI DO TEU AMOR",
    TACGIA: "Tiago Iorc",
  },
  {
    MABH: "15299",
    TENBH: "HOJE NÃO",
    TACGIA: "Thaeme e Thiago & Luan Santana",
  },
  {
    MABH: "30750",
    TENBH: "HOJE NÃO É NOSSO DIA",
    TACGIA: "Felipe e Falcão",
  },
  {
    MABH: "33292",
    TENBH: "HOJE O CÉU ABRIU",
    TACGIA: "NX Zero",
  },
  {
    MABH: "33138",
    TENBH: "HOJE SONHEI COM VOCÊ",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "24015",
    TENBH: "HOLD IT AGAINST ME",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24931",
    TENBH: "HOLD ME IN YOUR ARMS",
    TACGIA: "Rick Astley",
  },
  {
    MABH: "2644",
    TENBH: "HOLD ON",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "18446",
    TENBH: "HOLD ON",
    TACGIA: "Good Charlotte",
  },
  {
    MABH: "24722",
    TENBH: "HOLD ON",
    TACGIA: "En Vogue",
  },
  {
    MABH: "24194",
    TENBH: "HOLD ON WE'RE GOING HOME",
    TACGIA: "Drake ft. Majid Jordan",
  },
  {
    MABH: "18780",
    TENBH: "HOLD THE LINE",
    TACGIA: "Toto",
  },
  {
    MABH: "24494",
    TENBH: "HOLD UP",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "4901",
    TENBH: "HOLDING BACK THE YEARS",
    TACGIA: "Simply Red",
  },
  {
    MABH: "18732",
    TENBH: "HOLDING OUT FOR A HERO",
    TACGIA: "Bonnie Tyler",
  },
  {
    MABH: "4902",
    TENBH: "HOLIDAY",
    TACGIA: "Madonna",
  },
  {
    MABH: "24236",
    TENBH: "HOLIDAY",
    TACGIA: "Green Day",
  },
  {
    MABH: "33672",
    TENBH: "HOLIDAY FOI MUITO",
    TACGIA: "Falcão",
  },
  {
    MABH: "24238",
    TENBH: "HOLLABACK GIRL",
    TACGIA: "Gwen Stefani",
  },
  {
    MABH: "18119",
    TENBH: "HOLLER",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "24300",
    TENBH: "HOLLYWOOD",
    TACGIA: "Marina and The Diamonds",
  },
  {
    MABH: "26163",
    TENBH: "HOLY",
    TACGIA: "Justin Bieber ft. Chance The Rapper",
  },
  {
    MABH: "26046",
    TENBH: "HOLY DIVER",
    TACGIA: "Dio",
  },
  {
    MABH: "18445",
    TENBH: "HOME",
    TACGIA: "Gabrielle Aplin",
  },
  {
    MABH: "26051",
    TENBH: "HOME BY THE SEA",
    TACGIA: "Genesis",
  },
  {
    MABH: "18444",
    TENBH: "HOME SWEET HOME",
    TACGIA: "Mötley Crue",
  },
  {
    MABH: "6494",
    TENBH: "HOMEM ARANHA",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "9685",
    TENBH: "HOMEM CARENTE",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "33357",
    TENBH: "HOMEM CHORA SIM",
    TACGIA: "Edy Britto e Samuel part. Gusttavo Lima",
  },
  {
    MABH: "3114",
    TENBH: "HOMEM COM H",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "33926",
    TENBH: "HOMEM DE FAMÍLIA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30335",
    TENBH: "HOMEM DO MEU TEMPO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30003",
    TENBH: "HOMEM NA ESTRADA",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "4583",
    TENBH: "HONESTY",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "18044",
    TENBH: "HONEY, I'M GOOD",
    TACGIA: "Andy Grammer",
  },
  {
    MABH: "18781",
    TENBH: "HOOKED ON A FEELING",
    TACGIA: "B.J. Thomas",
  },
  {
    MABH: "24035",
    TENBH: "HOPE YOU GET LONELY TONIGHT",
    TACGIA: "Cole Swindell",
  },
  {
    MABH: "9034",
    TENBH: "HOPELESSLY DEVOTED TO YOU",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "33612",
    TENBH: "HORA DA VIRADA",
    TACGIA: "Renata Brasil",
  },
  {
    MABH: "15698",
    TENBH: "HORAS IGUAIS",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "30847",
    TENBH: "HORIZONTE AZUL",
    TACGIA: "Lucas e Luan",
  },
  {
    MABH: "30627",
    TENBH: "HORIZONTES",
    TACGIA: "Glória e Lucas Silveira",
  },
  {
    MABH: "24124",
    TENBH: "HOT",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "2607",
    TENBH: "HOT N COLD",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "18671",
    TENBH: "HOT STUFF",
    TACGIA: "Donna Summer",
  },
  {
    MABH: "4584",
    TENBH: "HOTEL CALIFORNIA",
    TACGIA: "Eagles",
  },
  {
    MABH: "24226",
    TENBH: "HOTEL ROOM SERVICE",
    TACGIA: "Pitbull",
  },
  {
    MABH: "24434",
    TENBH: "HOTLINE BLING",
    TACGIA: "Drake",
  },
  {
    MABH: "18125",
    TENBH: "HOUND DOG",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "4903",
    TENBH: "HOW AM I SUPPOSED TO LIVE WITHOUT YOU",
    TACGIA: "Michael Bolton",
  },
  {
    MABH: "18443",
    TENBH: "HOW BIZARRE",
    TACGIA: "OMC",
  },
  {
    MABH: "18390",
    TENBH: "HOW 'BOUT US",
    TACGIA: "Champaign",
  },
  {
    MABH: "18045",
    TENBH: "HOW CAN I GO ON",
    TACGIA: "Freddie Mercury ft. Montserrat Caballé",
  },
  {
    MABH: "18276",
    TENBH: "HOW CAN I LIVE",
    TACGIA: "Ill Niño",
  },
  {
    MABH: "4904",
    TENBH: "HOW CAN YOU MEND A BROKEN HEART",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4715",
    TENBH: "HOW COULD AN ANGEL BREAK MY HEART",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "4716",
    TENBH: "HOW DEEP IS YOUR LOVE",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "24723",
    TENBH: "HOW DO YOU DO",
    TACGIA: "Roxette",
  },
  {
    MABH: "24946",
    TENBH: "HOW FAR I'LL GO",
    TACGIA: "Alessia Cara",
  },
  {
    MABH: "24349",
    TENBH: "HOW LONG WILL I LOVE YOU",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "18501",
    TENBH: "HOW SOON IS NOW",
    TACGIA: "The Smiths",
  },
  {
    MABH: "18442",
    TENBH: "HOW TO SAVE A LIFE",
    TACGIA: "The Fray",
  },
  {
    MABH: "4905",
    TENBH: "HOW WILL I KNOW",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18868",
    TENBH: "HOW YOU GONNA SEE ME NOW",
    TACGIA: "Alice Cooper",
  },
  {
    MABH: "18782",
    TENBH: "HOW YOU REMIND ME",
    TACGIA: "Nickelback",
  },
  {
    MABH: "24168",
    TENBH: "HUMAN",
    TACGIA: "Christina Perri",
  },
  {
    MABH: "24536",
    TENBH: "HUMAN",
    TACGIA: "Rag'n'Bone Man",
  },
  {
    MABH: "24563",
    TENBH: "HUMAN",
    TACGIA: "The Killers",
  },
  {
    MABH: "18783",
    TENBH: "HUMAN NATURE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "26074",
    TENBH: "HUMBLE",
    TACGIA: "Kendrick Lamar",
  },
  {
    MABH: "2707",
    TENBH: "HUMILDE RESIDÊNCIA",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "18869",
    TENBH: "HUNDER STRIKE",
    TACGIA: "Temple of The Dog",
  },
  {
    MABH: "18298",
    TENBH: "HUNG UP",
    TACGIA: "Madonna",
  },
  {
    MABH: "24724",
    TENBH: "HUNGRY EYES",
    TACGIA: "Eric Carmen",
  },
  {
    MABH: "18672",
    TENBH: "HUNGRY LIKE THE WOLF",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "4906",
    TENBH: "HUNTER",
    TACGIA: "Dido",
  },
  {
    MABH: "18061",
    TENBH: "HUNTING HIGH AND LOW",
    TACGIA: "A-Ha",
  },
  {
    MABH: "18549",
    TENBH: "HURRICANE",
    TACGIA: "Bob Dylan",
  },
  {
    MABH: "24518",
    TENBH: "HURRICANE",
    TACGIA: "Halsey",
  },
  {
    MABH: "18281",
    TENBH: "HURT",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "18401",
    TENBH: "HURT",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "9115",
    TENBH: "HURTING EACH OTHER",
    TACGIA: "Carpenters",
  },
  {
    MABH: "18870",
    TENBH: "HUSH",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "26014",
    TENBH: "HUSH HUSH",
    TACGIA: "The Pussycat Dolls",
  },
  {
    MABH: "24377",
    TENBH: "HYMN FOR HE WEEKEND",
    TACGIA: "Coldplay",
  },
  {
    MABH: "24615",
    TENBH: "HYPNOTIZE",
    TACGIA: "System of a Down",
  },
  {
    MABH: "24725",
    TENBH: "HYSTERIA",
    TACGIA: "Def Leppard",
  },
  {
    MABH: "24385",
    TENBH: "I AM",
    TACGIA: "Leona Lewis",
  },
  {
    MABH: "18673",
    TENBH: "I AM NOT A ROBOT",
    TACGIA: "Marina and The Diamonds",
  },
  {
    MABH: "18784",
    TENBH: "I AM THE HIGHWAY",
    TACGIA: "Audioslave",
  },
  {
    MABH: "2593",
    TENBH: "I AM WOMAN",
    TACGIA: "Helen Reddy",
  },
  {
    MABH: "18871",
    TENBH: "I AM, I SAID",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "24726",
    TENBH: "I BELIEVE",
    TACGIA: "Fantasia",
  },
  {
    MABH: "26001",
    TENBH: "I BELIEVE I CAN FLY",
    TACGIA: "R. Kelly",
  },
  {
    MABH: "18734",
    TENBH: "I BELIEVE IN A THING CALLED LOVE",
    TACGIA: "The Darkness",
  },
  {
    MABH: "18550",
    TENBH: "I BET MY LIFE",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "2608",
    TENBH: "I CALL YOUR NAME",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4907",
    TENBH: "I CAN HELP",
    TACGIA: "Billy Swan",
  },
  {
    MABH: "2609",
    TENBH: "I CAN SEE CLEARLY NOW",
    TACGIA: "Johnny Nash",
  },
  {
    MABH: "26158",
    TENBH: "I CAN SEE CLEARLY NOW",
    TACGIA: "Jimmy Cliff",
  },
  {
    MABH: "18441",
    TENBH: "I CAN WAIT FOREVER",
    TACGIA: "Air Supply",
  },
  {
    MABH: "24400",
    TENBH: "I CAN'T FEEL MY FACE",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "4519",
    TENBH: "I CAN'T STOP LOVING YOU",
    TACGIA: "Ray Charles",
  },
  {
    MABH: "18785",
    TENBH: "I CAN'T STOP THINKING ABOUT YOU",
    TACGIA: "Sting",
  },
  {
    MABH: "24616",
    TENBH: "I COULD FALL IN LOVE",
    TACGIA: "Selena",
  },
  {
    MABH: "18037",
    TENBH: "I DISAPPEAR",
    TACGIA: "Metallica",
  },
  {
    MABH: "18064",
    TENBH: "I DO",
    TACGIA: "Colbie Caillat",
  },
  {
    MABH: "18551",
    TENBH: "I DON'T BELIEVE IN LOVE",
    TACGIA: "Queensryche",
  },
  {
    MABH: "24870",
    TENBH: "I DON'T CARE",
    TACGIA: "Ed Sheeran & Justin Bieber",
  },
  {
    MABH: "4520",
    TENBH: "I DON'T KNOW HOW TO LOVE HIM",
    TACGIA: "Helen Reddy",
  },
  {
    MABH: "26226",
    TENBH: "I DON'T LOVE YOU",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "24287",
    TENBH: "I DON'T MIND",
    TACGIA: "Usher ft. Juicy J",
  },
  {
    MABH: "18552",
    TENBH: "I DON'T WANNA DANCE",
    TACGIA: "Eddy Grant",
  },
  {
    MABH: "5914",
    TENBH: "I DON'T WANNA GO ON WITH YOU LIKE THAT",
    TACGIA: "Elton John",
  },
  {
    MABH: "24495",
    TENBH: "I DON'T WANNA LIVE FOREVER",
    TACGIA: "Zayn & Taylor Swift",
  },
  {
    MABH: "18872",
    TENBH: "I DON'T WANT TO",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "4909",
    TENBH: "I DON'T WANT TO MISS A THING",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "5915",
    TENBH: "I DON'T WANT TO TALK ABOUT IT",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "2505",
    TENBH: "I DREAMED A DREAM",
    TACGIA: "Les Miserables",
  },
  {
    MABH: "24170",
    TENBH: "I DREAMED A DREAM",
    TACGIA: "Susan Boyle",
  },
  {
    MABH: "18873",
    TENBH: "I DROVE ALL NIGHT",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "5916",
    TENBH: "I FEEL FINE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "33024",
    TENBH: "I FEEL GOOD",
    TACGIA: "Sambô",
  },
  {
    MABH: "24496",
    TENBH: "I FEEL IT COMMING",
    TACGIA: "The Weeknd ft. Daft Punk",
  },
  {
    MABH: "18874",
    TENBH: "I FEEL LOVE",
    TACGIA: "Donna Summer",
  },
  {
    MABH: "18786",
    TENBH: "I FINALLY FOUND SOMEONE",
    TACGIA: "Barbra Streisand & Bryan Adams",
  },
  {
    MABH: "18985",
    TENBH: "I FOUGHT THE LAW",
    TACGIA: "The Clash",
  },
  {
    MABH: "24617",
    TENBH: "I GET OFF",
    TACGIA: "Halestorm",
  },
  {
    MABH: "2515",
    TENBH: "I GOTTA FEELING",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "18377",
    TENBH: "I GUESS THAT'S THEY CALL IN THE BLUES",
    TACGIA: "Elton John",
  },
  {
    MABH: "26058",
    TENBH: "I HATE EVERYBODY",
    TACGIA: "Halsey",
  },
  {
    MABH: "18332",
    TENBH: "I HATE THIS PART",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "9116",
    TENBH: "I HAVE A DREAM",
    TACGIA: "ABBA",
  },
  {
    MABH: "9117",
    TENBH: "I HAVE NOTHING",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "9035",
    TENBH: "I HEARD IT THROUGH THE GRAPEVINE",
    TACGIA: "Marvin Gaye",
  },
  {
    MABH: "9118",
    TENBH: "I HONESTLY LOVE YOU",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "4522",
    TENBH: "I JUST CALLED TO SAY I LOVE YOU",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "18268",
    TENBH: "I JUST WANNA LIVE",
    TACGIA: "Good Charlotte",
  },
  {
    MABH: "9223",
    TENBH: "I JUST WANNA STOP",
    TACGIA: "Gino Vanelli",
  },
  {
    MABH: "2525",
    TENBH: "I JUST WANT TO BE YOUR EVERYTHING",
    TACGIA: "Andy Gibb",
  },
  {
    MABH: "18875",
    TENBH: "I JUST WANT TO MAKE LOVE TO YOU",
    TACGIA: "Etta James",
  },
  {
    MABH: "2610",
    TENBH: "I KISSED A GIRL",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "4911",
    TENBH: "I KNEW I LOVED YOU",
    TACGIA: "Savage Garden",
  },
  {
    MABH: "24100",
    TENBH: "I KNEW YOU WERE TROUBLE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "24403",
    TENBH: "I KNOW WHAT YOU DID LAST SUMMER",
    TACGIA: "Shawn Mendes & Camila Cabello",
  },
  {
    MABH: "26033",
    TENBH: "I KNOW WHAT YOU WANT",
    TACGIA: "Busta Rhymes ft. Mariah Carey",
  },
  {
    MABH: "18057",
    TENBH: "I KNOW YOU WANT ME",
    TACGIA: "Pitbull",
  },
  {
    MABH: "4717",
    TENBH: "I LEFT MY HEART IN SAN FRANCISCO",
    TACGIA: "Tony Bennett",
  },
  {
    MABH: "4912",
    TENBH: "I LIKE CHOPIN",
    TACGIA: "Gazebo",
  },
  {
    MABH: "18016",
    TENBH: "I LIKE IT",
    TACGIA: "Enrique Iglesias",
  },
  {
    MABH: "26036",
    TENBH: "I LIKE IT",
    TACGIA: "Cardi B ft. Bad Bunny & J. Balvin",
  },
  {
    MABH: "18876",
    TENBH: "I LOOK TO YOU",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18106",
    TENBH: "I LOVE ROCK & ROLL",
    TACGIA: "Joan Jett & The Blackhearts",
  },
  {
    MABH: "18787",
    TENBH: "I LOVE TO LOVE",
    TACGIA: "Tina Charles",
  },
  {
    MABH: "15123",
    TENBH: "I LOVE YOU",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "9466",
    TENBH: "I LOVE YOU BABY",
    TACGIA: "Adriana",
  },
  {
    MABH: "30827",
    TENBH: "I LOVE YOU COROTE",
    TACGIA: "Aretuza Lovi",
  },
  {
    MABH: "2544",
    TENBH: "I MADE IT THROUGH THE RAIN",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "18674",
    TENBH: "I MISS THE MISERY",
    TACGIA: "Halestorm",
  },
  {
    MABH: "4913",
    TENBH: "I MISS YOU",
    TACGIA: "Klymaxx",
  },
  {
    MABH: "18156",
    TENBH: "I MISS YOU",
    TACGIA: "Blink 182",
  },
  {
    MABH: "18553",
    TENBH: "I MISS YOU",
    TACGIA: "Haddaway",
  },
  {
    MABH: "24190",
    TENBH: "I NEED A DOCTOR",
    TACGIA: "Dr. Dre & Eminem & Skylar Grey",
  },
  {
    MABH: "4914",
    TENBH: "I NEED TO BE IN LOVE",
    TACGIA: "Carpenters",
  },
  {
    MABH: "5918",
    TENBH: "I NEED YOU",
    TACGIA: "America",
  },
  {
    MABH: "24198",
    TENBH: "I NEED YOUR LOVE",
    TACGIA: "Calvin Harris ft. Ellie Goulding",
  },
  {
    MABH: "2526",
    TENBH: "I NEVER CRY",
    TACGIA: "Alice Cooper",
  },
  {
    MABH: "9119",
    TENBH: "I ONLY HAVE EYES FOR YOU",
    TACGIA: "The Flamingos",
  },
  {
    MABH: "2516",
    TENBH: "I PUT A SPELL ON YOU",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "24618",
    TENBH: "I RAN",
    TACGIA: "A Flock Of Seagulls",
  },
  {
    MABH: "4632",
    TENBH: "I REALLY DON'T WANT TO KNOW",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24537",
    TENBH: "I REALLY LIKE YOU",
    TACGIA: "Carly Rae Jepsen",
  },
  {
    MABH: "18185",
    TENBH: "I REMEMBER YOU",
    TACGIA: "Skid Row",
  },
  {
    MABH: "2567",
    TENBH: "I RUN TO YOU",
    TACGIA: "Lady Antebellum",
  },
  {
    MABH: "3879",
    TENBH: "I SAW YOU SAYING",
    TACGIA: "Raimundos",
  },
  {
    MABH: "4915",
    TENBH: "I SAY A LITTLE PRAYER",
    TACGIA: "Aretha Franklin",
  },
  {
    MABH: "18069",
    TENBH: "I SEE YOU",
    TACGIA: "Luke Bryan",
  },
  {
    MABH: "24983",
    TENBH: "I SEE YOU",
    TACGIA: "Leona Lewis",
  },
  {
    MABH: "4718",
    TENBH: "I SHOT THE SHERIFF",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "24967",
    TENBH: "I SHOT THE SHERIFF",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "18440",
    TENBH: "I SHOULD HAVE KNOW BETTER",
    TACGIA: "Jim Diamond",
  },
  {
    MABH: "26055",
    TENBH: "I STAND ALONE",
    TACGIA: "Godsmack",
  },
  {
    MABH: "4585",
    TENBH: "I STARTED A JOKE",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4916",
    TENBH: "I STILL BELIEVE",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "9120",
    TENBH: "I STILL HAVEN'T FOUND WHAT I'M LOOKING F",
    TACGIA: "U2",
  },
  {
    MABH: "4669",
    TENBH: "I SWEAR",
    TACGIA: "All-4-One",
  },
  {
    MABH: "24727",
    TENBH: "I THINK I'M PARANOID",
    TACGIA: "Garbage",
  },
  {
    MABH: "4917",
    TENBH: "I TRY",
    TACGIA: "Macy Gray",
  },
  {
    MABH: "4825",
    TENBH: "I TURN TO YOU",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "18282",
    TENBH: "I WALK THE LINE",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "18878",
    TENBH: "I WANNA BE SEDATED",
    TACGIA: "Ramones",
  },
  {
    MABH: "18879",
    TENBH: "I WANNA DANCE WITH SOMEBODY",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "24026",
    TENBH: "I WANNA GO",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "4525",
    TENBH: "I WANNA HOLD YOUR HAND",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4918",
    TENBH: "I WANNA LOVE YOU FOREVER",
    TACGIA: "Jessica Simpson",
  },
  {
    MABH: "18554",
    TENBH: "I WANNA ROCK",
    TACGIA: "Twisted Sister",
  },
  {
    MABH: "26107",
    TENBH: "I WANT IT ALL",
    TACGIA: "Queen",
  },
  {
    MABH: "18063",
    TENBH: "I WANT IT THAT WAY",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "5919",
    TENBH: "I WANT TO BREAK FREE",
    TACGIA: "Queen",
  },
  {
    MABH: "18189",
    TENBH: "I WANT TO HOLD YOUR HAND",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "9224",
    TENBH: "I WANT TO KNOW WHAT LOVE IS",
    TACGIA: "Foreigner",
  },
  {
    MABH: "18402",
    TENBH: "I WANT TO KNOW WHAT LOVE IS",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "18120",
    TENBH: "I WANT YOU",
    TACGIA: "Thalia ft. Fat Joe",
  },
  {
    MABH: "24619",
    TENBH: "I WANT YOU",
    TACGIA: "Savage Garden",
  },
  {
    MABH: "4826",
    TENBH: "I WANT YOU BACK",
    TACGIA: "N' Sync",
  },
  {
    MABH: "18555",
    TENBH: "I WANT YOU BACK",
    TACGIA: "Jackson 5",
  },
  {
    MABH: "24374",
    TENBH: "I WANT YOU TO KNOW",
    TACGIA: "Zedd feat. Selena Gomez",
  },
  {
    MABH: "24911",
    TENBH: "I WAS BORN TO LOVE YOU",
    TACGIA: "Freddie Mercury",
  },
  {
    MABH: "24728",
    TENBH: "I WAS MADE FOR LOVIN' YOU",
    TACGIA: "Kiss",
  },
  {
    MABH: "4586",
    TENBH: "I WENT TO YOUR WEDDING",
    TACGIA: "Patti Page",
  },
  {
    MABH: "4526",
    TENBH: "I WILL ALWAYS LOVE YOU",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "24620",
    TENBH: "I WILL COME TO YOU",
    TACGIA: "Hanson",
  },
  {
    MABH: "24089",
    TENBH: "I WILL NEVER LET YOU DOWN",
    TACGIA: "Rita Ora ft. Calvin Harris",
  },
  {
    MABH: "24902",
    TENBH: "I WILL NOT BOW",
    TACGIA: "Breaking Benjamin",
  },
  {
    MABH: "18159",
    TENBH: "I WILL SURVIVE",
    TACGIA: "Gloria Gaynor",
  },
  {
    MABH: "24497",
    TENBH: "I WON'T GIVE UP",
    TACGIA: "Jason Mraz",
  },
  {
    MABH: "9225",
    TENBH: "I WON'T LET YOU DOWN",
    TACGIA: "Ph.D.",
  },
  {
    MABH: "24519",
    TENBH: "I WOULD LIKE",
    TACGIA: "Zara Larsson",
  },
  {
    MABH: "18880",
    TENBH: "I WOULDN'T WANT TO BE LIKE YOU",
    TACGIA: "The Alan Parsons Project",
  },
  {
    MABH: "18163",
    TENBH: "I WRITE SINS NOT TRAGEDIES",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "4719",
    TENBH: "I WRITE THE SONGS",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "26143",
    TENBH: "ICE CREAM",
    TACGIA: "BLAKCPINK ft. Selena Gomez",
  },
  {
    MABH: "24826",
    TENBH: "ICE ICE BABY",
    TACGIA: "Vanilla Ice",
  },
  {
    MABH: "18439",
    TENBH: "I'D DO ANYTHING FOR LOVE",
    TACGIA: "Meat Loaf",
  },
  {
    MABH: "4587",
    TENBH: "I'D LOVE YOU TO WANT ME",
    TACGIA: "Lobo",
  },
  {
    MABH: "18735",
    TENBH: "I'D RATHER GO BLIND",
    TACGIA: "Etta James",
  },
  {
    MABH: "6136",
    TENBH: "IDEM",
    TACGIA: "Pixote",
  },
  {
    MABH: "3364",
    TENBH: "IDEOLOGIA",
    TACGIA: "Cazuza",
  },
  {
    MABH: "18986",
    TENBH: "IDGAF",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "24859",
    TENBH: "IDONTWANNABEYOUANYMORE",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "4521",
    TENBH: "IF",
    TACGIA: "Bread",
  },
  {
    MABH: "18403",
    TENBH: "IF I AIN'T GOT YOU",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "24886",
    TENBH: "IF I CAN'T HAVE YOU",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "18881",
    TENBH: "IF I COULD TURN BACK TIME",
    TACGIA: "Cher",
  },
  {
    MABH: "18121",
    TENBH: "IF I LET YOU GO",
    TACGIA: "Westlife",
  },
  {
    MABH: "2506",
    TENBH: "IF I WERE A BOY",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "24729",
    TENBH: "IF IT MAKES YOU HAPPY",
    TACGIA: "Sheryl Crow",
  },
  {
    MABH: "4827",
    TENBH: "IF LOOKS COULD KILL",
    TACGIA: "Heart",
  },
  {
    MABH: "18122",
    TENBH: "IF ONLY",
    TACGIA: "Hanson",
  },
  {
    MABH: "26071",
    TENBH: "IF THE WORLD WAS ENDING",
    TACGIA: "JP Saxe ft. Julia Michaels",
  },
  {
    MABH: "18245",
    TENBH: "IF U SEEK AMY",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "5920",
    TENBH: "IF WE WERE A MOVIE",
    TACGIA: "Hannah Montana",
  },
  {
    MABH: "24730",
    TENBH: "IF YOU DON'T KNOW ME BY NOW",
    TACGIA: "Simply Red",
  },
  {
    MABH: "5921",
    TENBH: "IF YOU GO",
    TACGIA: "Jon Secada",
  },
  {
    MABH: "4828",
    TENBH: "IF YOU HAD MY LOVE",
    TACGIA: "Jennifer Lopez",
  },
  {
    MABH: "4631",
    TENBH: "IF YOU LEAVE NOW",
    TACGIA: "Chicago",
  },
  {
    MABH: "4919",
    TENBH: "IF YOU'RE GONE",
    TACGIA: "Matchbox Twenty",
  },
  {
    MABH: "24731",
    TENBH: "IGNORANCE",
    TACGIA: "Paramore",
  },
  {
    MABH: "30816",
    TENBH: "IGUAL ELA SÓ UMA",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3115",
    TENBH: "ILARIÊ",
    TACGIA: "Xuxa",
  },
  {
    MABH: "2645",
    TENBH: "I'LL BE BACK",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18438",
    TENBH: "I'LL BE LOVING YOU",
    TACGIA: "New Kids On The Block",
  },
  {
    MABH: "9122",
    TENBH: "I'LL BE OVER YOU",
    TACGIA: "Toto",
  },
  {
    MABH: "4720",
    TENBH: "I'LL BE THERE",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "2517",
    TENBH: "I'LL BE THERE FOR YOU",
    TACGIA: "The Rembrandts",
  },
  {
    MABH: "5922",
    TENBH: "I'LL BE THERE FOR YOU",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "24924",
    TENBH: "I'LL MAKE A MAN OUT OF YOU",
    TACGIA: "Mulan",
  },
  {
    MABH: "18882",
    TENBH: "I'LL MAKE LOVE TO YOU",
    TACGIA: "Boyz II Men",
  },
  {
    MABH: "4721",
    TENBH: "I'LL NEVER FALL IN LOVE AGAIN",
    TACGIA: "Dionne Warwick",
  },
  {
    MABH: "24978",
    TENBH: "I'LL NEVER LOVE AGAIN",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "24439",
    TENBH: "I'LL SHOW YOU",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "18382",
    TENBH: "I'LL STAND BY YOU",
    TACGIA: "Pretenders",
  },
  {
    MABH: "9036",
    TENBH: "I'LL TRY",
    TACGIA: "Alan Jackson",
  },
  {
    MABH: "7937",
    TENBH: "ILUMINA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "33207",
    TENBH: "ILUSÃO PERDIDA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "9687",
    TENBH: "ILUSION (PART JULIETA VENEGAS)",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "26012",
    TENBH: "I'M A BELIEVER",
    TACGIA: "Smash Mouth",
  },
  {
    MABH: "18244",
    TENBH: "I'M A SLAVE 4 YOU",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "9037",
    TENBH: "I'M ALIVE",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "24065",
    TENBH: "I'M AN ALBATRAOZ",
    TACGIA: "AronChupa",
  },
  {
    MABH: "18556",
    TENBH: "I'M BROKEN",
    TACGIA: "Pantera",
  },
  {
    MABH: "18404",
    TENBH: "I'M COMING OUT",
    TACGIA: "Diana Ross",
  },
  {
    MABH: "24827",
    TENBH: "I'M EVERY WOMAN",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18123",
    TENBH: "I'M GLAD",
    TACGIA: "Jennifer Lopez",
  },
  {
    MABH: "24217",
    TENBH: "I'M GONNA BE (500 MILES)",
    TACGIA: "Proclaimers",
  },
  {
    MABH: "2646",
    TENBH: "I'M GONNA GETCHA GOOD",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "9123",
    TENBH: "I'M IN YOU",
    TACGIA: "Peter Frampton",
  },
  {
    MABH: "18278",
    TENBH: "I'M INTO YOU",
    TACGIA: "Jennifer Lopez ft. Lil' Wayne",
  },
  {
    MABH: "18035",
    TENBH: "I'M LIKE A BIRD",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "9124",
    TENBH: "I'M LOOKIN' FOR SOMEONE TO LOVE",
    TACGIA: "Buddy Holly",
  },
  {
    MABH: "24016",
    TENBH: "I'M NOT A GIRL, NOT YET A WOMAN",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "33673",
    TENBH: "I'M NOT DOG NO (EU NÃO SOU CACHORRO NÃO)",
    TACGIA: "Falcão",
  },
  {
    MABH: "4920",
    TENBH: "I'M NOT IN LOVE",
    TACGIA: "10 cc",
  },
  {
    MABH: "24621",
    TENBH: "I'M NOT OKAY (I PROMISE)",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "24366",
    TENBH: "I'M NOT THE ONLY ONE",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "18883",
    TENBH: "I'M ON FIRE",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "9125",
    TENBH: "I'M SO EXCITED",
    TACGIA: "Pointer Sisters",
  },
  {
    MABH: "18987",
    TENBH: "I'M SO PROUD",
    TACGIA: "The Impressions",
  },
  {
    MABH: "18884",
    TENBH: "I'M STILL STANDING",
    TACGIA: "Elton John",
  },
  {
    MABH: "2612",
    TENBH: "I'M WITH YOU",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "26073",
    TENBH: "I'M YOUR BOOGIE MAN",
    TACGIA: "KC & The Sunshine Band",
  },
  {
    MABH: "2527",
    TENBH: "I'M YOURS",
    TACGIA: "Jason Mraz",
  },
  {
    MABH: "33396",
    TENBH: "IMAGEM",
    TACGIA: "Grupo Ponto de Encontro",
  },
  {
    MABH: "33086",
    TENBH: "IMAGINA COM AS AMIGAS",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "18261",
    TENBH: "IMAGINARY",
    TACGIA: "Evanescence",
  },
  {
    MABH: "4523",
    TENBH: "IMAGINE",
    TACGIA: "John Lennon",
  },
  {
    MABH: "18503",
    TENBH: "IMAGINE OF THE INVISIBLE",
    TACGIA: "Thrice",
  },
  {
    MABH: "15901",
    TENBH: "IMBRANATO",
    TACGIA: "Tiziano Ferro",
  },
  {
    MABH: "24138",
    TENBH: "IMMA BE",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "18885",
    TENBH: "IMMIGRANT SONG",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "4723",
    TENBH: "IMMORTALITY",
    TACGIA: "Celine Dion & Bee Gees",
  },
  {
    MABH: "24353",
    TENBH: "IMMORTALS",
    TACGIA: "Fall Out Boy",
  },
  {
    MABH: "4317",
    TENBH: "IMORTAL",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "33757",
    TENBH: "IMPASSE",
    TACGIA: "Marília Mendonça part. Henrique e Juliano",
  },
  {
    MABH: "24538",
    TENBH: "IMPERFECTION",
    TACGIA: "Evanescence",
  },
  {
    MABH: "33059",
    TENBH: "IMPLORANDO PRA TRAIR",
    TACGIA: "Michel Teló & Gusttavo Lima",
  },
  {
    MABH: "30163",
    TENBH: "IMPOSSÍVEL ACREDITAR QUE PERDI VOCÊ",
    TACGIA: "Márcio Greyck",
  },
  {
    MABH: "3708",
    TENBH: "IMPOSSÍVEL ACREDITAR QUE TE PERDI",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "30110",
    TENBH: "IMPRESSIONANDO OS ANJOS",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "1011",
    TENBH: "IMPREVISÍVEL",
    TACGIA: "Bruno & Marrone part. Edson e Hudson",
  },
  {
    MABH: "15828",
    TENBH: "IMUNIZAÇÃO RACIONAL (QUE BELEZA)",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "26208",
    TENBH: "IN BETWEEN DAYS",
    TACGIA: "The Cure",
  },
  {
    MABH: "24993",
    TENBH: "IN BLOOM",
    TACGIA: "Nirvana",
  },
  {
    MABH: "18221",
    TENBH: "IN DA CLUB",
    TACGIA: "50 Cent",
  },
  {
    MABH: "24732",
    TENBH: "IN DREAMS",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "24733",
    TENBH: "IN MY BLOOD",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "24734",
    TENBH: "IN MY FEELINGS",
    TACGIA: "Drake",
  },
  {
    MABH: "18416",
    TENBH: "IN MY PLACE",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18675",
    TENBH: "IN THE AIR TONIGHT",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "24315",
    TENBH: "IN THE END",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "9126",
    TENBH: "IN THE GHETTO",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18557",
    TENBH: "IN THE NAVY",
    TACGIA: "Village People",
  },
  {
    MABH: "24446",
    TENBH: "IN THE NIGHT",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "24735",
    TENBH: "IN THE SHADOWS",
    TACGIA: "The Rasmus",
  },
  {
    MABH: "4921",
    TENBH: "IN YOUR EYES",
    TACGIA: "George Benson",
  },
  {
    MABH: "26212",
    TENBH: "IN YOUR EYES",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "24736",
    TENBH: "IN YOUR WILDEST DREAMS",
    TACGIA: "Moody Blues",
  },
  {
    MABH: "4236",
    TENBH: "INARAÍ",
    TACGIA: "Katinguelê",
  },
  {
    MABH: "30520",
    TENBH: "INCERTEZA",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "6927",
    TENBH: "INCOMPATIBILIDADE DE GÊNIOS",
    TACGIA: "João Bosco",
  },
  {
    MABH: "24114",
    TENBH: "INCOMPLETE",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "18736",
    TENBH: "INCONSOLABLE",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "30593",
    TENBH: "INDECENTE",
    TACGIA: "Anitta",
  },
  {
    MABH: "4318",
    TENBH: "INDEPENDÊNCIA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "18124",
    TENBH: "INDEPENDENT WOMEN PART I",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "30017",
    TENBH: "ÍNDIA",
    TACGIA: "Cascatinha e Inhana",
  },
  {
    MABH: "3568",
    TENBH: "INDIFERENÇA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30404",
    TENBH: "INDIFERENÇA",
    TACGIA: "Jerry Adriani",
  },
  {
    MABH: "3569",
    TENBH: "INDIOS (ACUSTICO)",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "30164",
    TENBH: "INESQUECÍVEL",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "6856",
    TENBH: "INEVITÁVEL",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "7618",
    TENBH: "INEVITÁVEL",
    TACGIA: "CPM22",
  },
  {
    MABH: "30699",
    TENBH: "INFARTO",
    TACGIA: "Diego e Victor Hugo",
  },
  {
    MABH: "33693",
    TENBH: "INFIEL",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "6419",
    TENBH: "INFINITA HIGHWAY",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "30111",
    TENBH: "INFINITO DO ESPELHO",
    TACGIA: "Tribo da Periferia",
  },
  {
    MABH: "3117",
    TENBH: "INIGUALÁVEL PAIXÃO",
    TACGIA: "Grupo Pirraça",
  },
  {
    MABH: "6375",
    TENBH: "INNOCENCE",
    TACGIA: "Deborah Blando",
  },
  {
    MABH: "30877",
    TENBH: "INQUILINA",
    TACGIA: "Aviões",
  },
  {
    MABH: "33974",
    TENBH: "INQUILINO",
    TACGIA: "Naiara Azevedo part. Zé Neto e Cristiano",
  },
  {
    MABH: "9688",
    TENBH: "INSEGURANÇA",
    TACGIA: "Pixote",
  },
  {
    MABH: "33786",
    TENBH: "INSEGUROS",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30931",
    TENBH: "INSENSATEZ",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "6017",
    TENBH: "INSENSATO DESTINO",
    TACGIA: "Zeca Pagodinho e Almir Guineto",
  },
  {
    MABH: "24737",
    TENBH: "INSIDE YOUR HEAVEN",
    TACGIA: "Carrie Underwood",
  },
  {
    MABH: "7620",
    TENBH: "INSOLAÇÃO DO CORAÇÃO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "33208",
    TENBH: "INSTIGANTE",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "30850",
    TENBH: "INTENÇÃO",
    TACGIA: "Marília Mendonça ft. GAAB",
  },
  {
    MABH: "26072",
    TENBH: "INTENTIONS",
    TACGIA: "Justin Bieber ft. Quavo",
  },
  {
    MABH: "4274",
    TENBH: "INTERFONE",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "18437",
    TENBH: "INTERSTATE LOVE SONG",
    TACGIA: "Stone Temple Pilots",
  },
  {
    MABH: "24424",
    TENBH: "INTO THE BLUE",
    TACGIA: "Kylie Minogue",
  },
  {
    MABH: "24997",
    TENBH: "INTO THE UNKNOW",
    TACGIA: "Panic At The Disco",
  },
  {
    MABH: "24457",
    TENBH: "INTO YOU",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "7981",
    TENBH: "INTRIGA DA OPOSIÇÃO",
    TACGIA: "Belo",
  },
  {
    MABH: "1590",
    TENBH: "INTUIÇÃO",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "3844",
    TENBH: "INÚTIL",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "30336",
    TENBH: "INÚTIL PAISAGEM",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "33180",
    TENBH: "INVASÕES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "1686",
    TENBH: "INVENTOR DOS AMORES",
    TACGIA: "Gusttavo Lima & Jorge e Mateus",
  },
  {
    MABH: "30337",
    TENBH: "INVERNO",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "30971",
    TENBH: "INVESTE EM MIM",
    TACGIA: "Jonas Esticado",
  },
  {
    MABH: "18179",
    TENBH: "INVINCIBLE",
    TACGIA: "Muse",
  },
  {
    MABH: "24407",
    TENBH: "INVINCIBLE",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "24969",
    TENBH: "INVISIBLE TOUCH",
    TACGIA: "Genesis",
  },
  {
    MABH: "30798",
    TENBH: "INVOCADA",
    TACGIA: "Ludmilla & Léo Santana",
  },
  {
    MABH: "30628",
    TENBH: "IOIÔ",
    TACGIA: "Dilsinho ft. Ivete Sangalo",
  },
  {
    MABH: "30165",
    TENBH: "IÔ-IÔ",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "3366",
    TENBH: "IOLANDA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "6611",
    TENBH: "IRACEMA",
    TACGIA: "Demônios da Garoa",
  },
  {
    MABH: "18267",
    TENBH: "IRIS",
    TACGIA: "Goo Goo Dolls",
  },
  {
    MABH: "18886",
    TENBH: "IRON LION ZION",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "18002",
    TENBH: "IRON MAN",
    TACGIA: "Black Sabbath",
  },
  {
    MABH: "4922",
    TENBH: "IRONIC",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "33240",
    TENBH: "IRRACIONAL",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "18405",
    TENBH: "IRREPLACEABLE",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "7157",
    TENBH: "IRREVERSÍVEL",
    TACGIA: "CPM 22",
  },
  {
    MABH: "9262",
    TENBH: "IS IT ANY WONDER",
    TACGIA: "Keane",
  },
  {
    MABH: "24979",
    TENBH: "IS THAT ALRIGHT?",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "30338",
    TENBH: "IS THAT FOR ME",
    TACGIA: "Anitta ft. Alesso",
  },
  {
    MABH: "4724",
    TENBH: "IS THIS LOVE",
    TACGIA: "Whitesnake",
  },
  {
    MABH: "9127",
    TENBH: "IS THIS LOVE",
    TACGIA: "Bob Marley & The Wailers",
  },
  {
    MABH: "18277",
    TENBH: "ISLAND IN THE SUN",
    TACGIA: "Weezer",
  },
  {
    MABH: "2647",
    TENBH: "ISLANDS IN THE STREAM",
    TACGIA: "Kenny Rogers & Dolly Parton",
  },
  {
    MABH: "4725",
    TENBH: "ISN'T SHE LOVELY",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "24622",
    TENBH: "ISRAELITES",
    TACGIA: "Desmond Dekker",
  },
  {
    MABH: "6537",
    TENBH: "ISSO",
    TACGIA: "Titãs",
  },
  {
    MABH: "3118",
    TENBH: "ISSO AQUI TÁ BOM DEMAIS",
    TACGIA: "Dominguinhos",
  },
  {
    MABH: "33461",
    TENBH: "ISSO CÊ NUM CONTA",
    TACGIA: "Jeann e Julio",
  },
  {
    MABH: "7158",
    TENBH: "ISSO É CALYPSO",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "3525",
    TENBH: "ISSO É FUNDO DE QUINTAL",
    TACGIA: "Leci Brandão",
  },
  {
    MABH: "4726",
    TENBH: "IT MIGHT BE YOU",
    TACGIA: "Stephen Bishop",
  },
  {
    MABH: "4727",
    TENBH: "IT MUST HAVE BEEN LOVE",
    TACGIA: "Roxette",
  },
  {
    MABH: "9128",
    TENBH: "IT NEVER RAINS IN SOUTHERN CALIFORNIA",
    TACGIA: "Albert Hammond",
  },
  {
    MABH: "24022",
    TENBH: "IT WILL RAIN",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "9129",
    TENBH: "IT'S A HEARTACHE",
    TACGIA: "Bonnie Tyler",
  },
  {
    MABH: "5923",
    TENBH: "IT'S A MIRACLE",
    TACGIA: "Culture Club",
  },
  {
    MABH: "9130",
    TENBH: "IT'S A MISTAKE",
    TACGIA: "Men At Work",
  },
  {
    MABH: "5924",
    TENBH: "IT'S A SIN",
    TACGIA: "Pet Shop Boys",
  },
  {
    MABH: "18436",
    TENBH: "IT'S BEEN A WHILE",
    TACGIA: "Staind",
  },
  {
    MABH: "4728",
    TENBH: "IT'S GOING TAKE SOME TIME",
    TACGIA: "Carpenters",
  },
  {
    MABH: "4923",
    TENBH: "IT'S MY LIFE",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "18509",
    TENBH: "IT'S MY LIFE",
    TACGIA: "No Doubt",
  },
  {
    MABH: "18788",
    TENBH: "IT'S NOT MY TIME",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "18435",
    TENBH: "IT'S NOT RIGTH BUT IT'S OKAY",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18988",
    TENBH: "IT'S NOT UNUSUAL",
    TACGIA: "Tom Jones",
  },
  {
    MABH: "4524",
    TENBH: "IT'S NOW OR NEVER",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "4729",
    TENBH: "IT'S RAINING AGAIN",
    TACGIA: "Supertramp",
  },
  {
    MABH: "4829",
    TENBH: "IT'S RAINING MEN",
    TACGIA: "Geri Halliwell",
  },
  {
    MABH: "4633",
    TENBH: "IT'S SO EASY",
    TACGIA: "Linda Ronstadt",
  },
  {
    MABH: "4924",
    TENBH: "IT'S STILL ROCK 'N' ROLL TO ME",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "26179",
    TENBH: "IT'S THE END OF THE WORLD AS WE KNOW IT",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "18989",
    TENBH: "IT'S THE MOST WONDERFUL TIME OF THE YEAR",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "24323",
    TENBH: "IT'S TIME",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "4730",
    TENBH: "IT'S TOO LATE",
    TACGIA: "Carole King",
  },
  {
    MABH: "24396",
    TENBH: "IT'S YOU",
    TACGIA: "Zayn",
  },
  {
    MABH: "18434",
    TENBH: "I'VE BEEN IN LOVE BEFORE",
    TACGIA: "Cutting Crew",
  },
  {
    MABH: "7159",
    TENBH: "IVE BRUSSEL",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "4722",
    TENBH: "I'VE GOT YOU UNDER MY SKIN",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24208",
    TENBH: "I'VE GOTTA WOMAN",
    TACGIA: "Ray Charles",
  },
  {
    MABH: "9131",
    TENBH: "I'VE HAD THE TIME OF MY LIFE",
    TACGIA: "Bill Medley & J.Warnes",
  },
  {
    MABH: "24623",
    TENBH: "I'VE NEVER BEEN TO BE",
    TACGIA: "Charlene",
  },
  {
    MABH: "33020",
    TENBH: "JÁ É SENSAÇÃO",
    TACGIA: "MC Andinho",
  },
  {
    MABH: "15232",
    TENBH: "JÁ NAO SEI MAIS NADA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30751",
    TENBH: "JÁ QUE ME ENSINOU A BEBER",
    TACGIA: "Barões do Forró",
  },
  {
    MABH: "6495",
    TENBH: "JÁ SEI NAMORAR",
    TACGIA: "Tribalistas",
  },
  {
    MABH: "6929",
    TENBH: "JÁ TENTEI",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "3119",
    TENBH: "JACKIE TEQUILA",
    TACGIA: "Skank",
  },
  {
    MABH: "26160",
    TENBH: "JACKSON",
    TACGIA: "Johnny Cash & June Carter",
  },
  {
    MABH: "6462",
    TENBH: "JADE",
    TACGIA: "João Bosco",
  },
  {
    MABH: "18331",
    TENBH: "JAI HO! (YOU ARE MY DESTINY)",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "18110",
    TENBH: "JAILHOUSE ROCK",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "4527",
    TENBH: "JAMBALAYA",
    TACGIA: "Hank Wiliams",
  },
  {
    MABH: "24905",
    TENBH: "JAMBALAYA",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "5925",
    TENBH: "JAMMIN'",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "3957",
    TENBH: "JANAINA",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "24169",
    TENBH: "JAR OF HEARTS",
    TACGIA: "Christina Perri",
  },
  {
    MABH: "1168",
    TENBH: "JARDIM DAS ACÁCIAS",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "4357",
    TENBH: "JARDINS DA BABILÔNIA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "24361",
    TENBH: "JEALOUS",
    TACGIA: "Nick Jonas",
  },
  {
    MABH: "18558",
    TENBH: "JEALOUS GUY",
    TACGIA: "John Lennon",
  },
  {
    MABH: "30781",
    TENBH: "JEITO ATREVIDO",
    TACGIA: "Elson do Forrogode",
  },
  {
    MABH: "33459",
    TENBH: "JEITO CARINHOSO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "1145",
    TENBH: "JEITO DE MATO",
    TACGIA: "Paula Fernandes & Almir Sater",
  },
  {
    MABH: "3120",
    TENBH: "JEITO FELINO",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33893",
    TENBH: "JEITO SAFADO",
    TACGIA: "Wesley Safadão part. Márcia Fellipe",
  },
  {
    MABH: "33089",
    TENBH: "JEJUM DE AMOR",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "30700",
    TENBH: "JENIFER",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "5926",
    TENBH: "JEREMY",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "3570",
    TENBH: "JÉSSICA",
    TACGIA: "Biro do Cavaco",
  },
  {
    MABH: "33516",
    TENBH: "JESUS APAGA A LUZ",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33674",
    TENBH: "JESUS CHOROU",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "15334",
    TENBH: "JESUS NUMA MOTO",
    TACGIA: "Sá, Rodrix e Guarabyra",
  },
  {
    MABH: "4925",
    TENBH: "JESUS TO A CHILD",
    TACGIA: "George Michael",
  },
  {
    MABH: "26145",
    TENBH: "JINGLE BELL ROCK",
    TACGIA: "Bobby Helms",
  },
  {
    MABH: "4528",
    TENBH: "JINGLE BELLS",
    TACGIA: "Christmas",
  },
  {
    MABH: "33202",
    TENBH: "JOAO DE BARRO",
    TACGIA: "Leandro Léo",
  },
  {
    MABH: "4319",
    TENBH: "JOÃO E MARIA",
    TACGIA: "Chico Buarque & Nara Leão",
  },
  {
    MABH: "30457",
    TENBH: "JOGA BUNDA",
    TACGIA: "Aretuza Lovi, Pabllo Vittar, Gloria Groove",
  },
  {
    MABH: "6334",
    TENBH: "JOGA FORA NO LIXO",
    TACGIA: "Sandra de Sá",
  },
  {
    MABH: "33167",
    TENBH: "JOGA O COPO PRO ALTO",
    TACGIA: "João Lucas e Marcelo part. Ronaldinho",
  },
  {
    MABH: "6782",
    TENBH: "JOGADO NA RUA",
    TACGIA: "Daniel",
  },
  {
    MABH: "15538",
    TENBH: "JOGADO NA RUA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30521",
    TENBH: "JOGO DO AMOR",
    TACGIA: "Mc Bruninho",
  },
  {
    MABH: "30522",
    TENBH: "JOGO DO CONTENTE",
    TACGIA: "As Aventuras de Poliana",
  },
  {
    MABH: "4635",
    TENBH: "JOHNNY B. GOODE",
    TACGIA: "Chuck Berry",
  },
  {
    MABH: "4529",
    TENBH: "JOHNNY GUITAR",
    TACGIA: "Peggy Lee",
  },
  {
    MABH: "18990",
    TENBH: "JOLENE",
    TACGIA: "Dolly Parton",
  },
  {
    MABH: "5927",
    TENBH: "JOYRIDE",
    TACGIA: "Roxette",
  },
  {
    MABH: "18290",
    TENBH: "JUDAS",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "26080",
    TENBH: "JUICE",
    TACGIA: "Lizzo",
  },
  {
    MABH: "26100",
    TENBH: "JULY",
    TACGIA: "Noah Cyrus",
  },
  {
    MABH: "2807",
    TENBH: "JUMENTO CELESTINO",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "4926",
    TENBH: "JUMP",
    TACGIA: "Van Halen",
  },
  {
    MABH: "24738",
    TENBH: "JUMP (FOR MY LOVE)",
    TACGIA: "Pointer Sisters",
  },
  {
    MABH: "4927",
    TENBH: "JUMPIN' JACK FLASH",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "24739",
    TENBH: "JUMPIN', JUMPIN'",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "30752",
    TENBH: "JUNTOS (SHALLOW)",
    TACGIA: "Paula Fernandes & Luan Santana",
  },
  {
    MABH: "6064",
    TENBH: "JURA",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "30045",
    TENBH: "JURA SECRETA",
    TACGIA: "Zélia Duncan",
  },
  {
    MABH: "30629",
    TENBH: "JURAMENTO DO DEDINHO",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "30342",
    TENBH: "JURAS DE AMOR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "24272",
    TENBH: "JUST A DREAM",
    TACGIA: "Nelly",
  },
  {
    MABH: "9038",
    TENBH: "JUST A GIGOLO",
    TACGIA: "David Lee Roth",
  },
  {
    MABH: "18111",
    TENBH: "JUST A GIRL",
    TACGIA: "No Doubt",
  },
  {
    MABH: "18887",
    TENBH: "JUST A KISS",
    TACGIA: "Lady Antebellum",
  },
  {
    MABH: "9226",
    TENBH: "JUST AN ILLUSION",
    TACGIA: "Imagination",
  },
  {
    MABH: "5928",
    TENBH: "JUST ANOTHER DAY WITHOUT YOU",
    TACGIA: "Jon Secada",
  },
  {
    MABH: "18246",
    TENBH: "JUST BREATHE",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "18737",
    TENBH: "JUST CAN'T GET ENOUGH",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "2518",
    TENBH: "JUST DANCE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "24228",
    TENBH: "JUST GIVE ME A REASON",
    TACGIA: "Pink & Nate Ruess",
  },
  {
    MABH: "24416",
    TENBH: "JUST LIKE FIRE",
    TACGIA: "Pink",
  },
  {
    MABH: "18991",
    TENBH: "JUST LIKE HEAVEN",
    TACGIA: "The Cure",
  },
  {
    MABH: "24828",
    TENBH: "JUST MY IMAGINATION",
    TACGIA: "The Temptations",
  },
  {
    MABH: "26198",
    TENBH: "JUST THE TWO OF US",
    TACGIA: "Grover Washington Jr. ft. Bill Withers",
  },
  {
    MABH: "4928",
    TENBH: "JUST THE WAY YOU ARE",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "18738",
    TENBH: "JUST THE WAY YOU ARE",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "18789",
    TENBH: "JUST THE WAY YOU ARE",
    TACGIA: "Barry White",
  },
  {
    MABH: "18639",
    TENBH: "JUST WHEN I NEEDED YOU MOST",
    TACGIA: "Bread",
  },
  {
    MABH: "4084",
    TENBH: "JUVENTUDE TRANSVIADA",
    TACGIA: "Luiz Melodia",
  },
  {
    MABH: "30166",
    TENBH: "K.O.",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "5929",
    TENBH: "KARMA CHAMALEON",
    TACGIA: "Culture Club",
  },
  {
    MABH: "18214",
    TENBH: "KASHMIR",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "18790",
    TENBH: "KAYLEIGH",
    TACGIA: "Marillion",
  },
  {
    MABH: "24126",
    TENBH: "KEEP HOLDING ON",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "18126",
    TENBH: "KEEP ON MOVIN'",
    TACGIA: "Five",
  },
  {
    MABH: "30917",
    TENBH: "KENNY G",
    TACGIA: "Matuê",
  },
  {
    MABH: "24624",
    TENBH: "KEY LARGO",
    TACGIA: "Bertie Higgins",
  },
  {
    MABH: "26096",
    TENBH: "KICKSTART MY HEART",
    TACGIA: "Mötley Crüe",
  },
  {
    MABH: "18559",
    TENBH: "KIDS",
    TACGIA: "MGMT",
  },
  {
    MABH: "2594",
    TENBH: "KIDS OF THE FUTURE",
    TACGIA: "Jonas Brothers",
  },
  {
    MABH: "24419",
    TENBH: "KILL EM WITH KINDNESS",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "18339",
    TENBH: "KILLING IN THE NAME",
    TACGIA: "Rage Against The Machine",
  },
  {
    MABH: "4530",
    TENBH: "KILLING ME SOFTLY",
    TACGIA: "Roberta Flack",
  },
  {
    MABH: "18433",
    TENBH: "KING OF PAIN",
    TACGIA: "The Police",
  },
  {
    MABH: "18379",
    TENBH: "KISS",
    TACGIA: "Prince",
  },
  {
    MABH: "24329",
    TENBH: "KISS AND SAY GOODBYE",
    TACGIA: "The Manhattans",
  },
  {
    MABH: "18112",
    TENBH: "KISS FROM A ROSE",
    TACGIA: "Seal",
  },
  {
    MABH: "24418",
    TENBH: "KISS IT BETTER",
    TACGIA: "Rihanna",
  },
  {
    MABH: "18676",
    TENBH: "KISS KISS",
    TACGIA: "Chris Brown ft. T-Pain",
  },
  {
    MABH: "18358",
    TENBH: "KISS ME",
    TACGIA: "Sixpence None The Richer",
  },
  {
    MABH: "4731",
    TENBH: "KISS ME QUICK",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18791",
    TENBH: "KISS ME THRU THE PHONE",
    TACGIA: "Soulja Boy Tell' Em ft. Sammie",
  },
  {
    MABH: "18113",
    TENBH: "KISS ON MY LIST",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "18432",
    TENBH: "KISS THE RAIN",
    TACGIA: "Billie Myers",
  },
  {
    MABH: "9039",
    TENBH: "KISSING A FOOL",
    TACGIA: "George Michael",
  },
  {
    MABH: "4588",
    TENBH: "KNIFE",
    TACGIA: "Rockwell",
  },
  {
    MABH: "4929",
    TENBH: "KNOCK ON WOOD",
    TACGIA: "Amii Stewart",
  },
  {
    MABH: "9263",
    TENBH: "KNOCK THREE TIMES",
    TACGIA: "Tony Orlando & Dawn",
  },
  {
    MABH: "4930",
    TENBH: "KNOCKIN' ON HEAVEN'S DOOR",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "18888",
    TENBH: "KNOCKIN' ON HEAVEN'S DOOR",
    TACGIA: "Bob Dylan",
  },
  {
    MABH: "18632",
    TENBH: "KRIPTONITE",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "26211",
    TENBH: "KRISTY, ARE YOU DOING OKAY?",
    TACGIA: "The Offspring",
  },
  {
    MABH: "9690",
    TENBH: "KRYPTÔNIA",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "5930",
    TENBH: "KUNG FU FIGHTING",
    TACGIA: "Carl Douglas",
  },
  {
    MABH: "4531",
    TENBH: "LA BAMBA",
    TACGIA: "Ritchie Valens",
  },
  {
    MABH: "3919",
    TENBH: "LA BARCA",
    TACGIA: "Luis Miguel",
  },
  {
    MABH: "3571",
    TENBH: "LA BELLA LUNA",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "3880",
    TENBH: "LA BELLE DE JOUR",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "26037",
    TENBH: "LA BICICLETA",
    TACGIA: "Carlos Vives ft. Shakira",
  },
  {
    MABH: "18889",
    TENBH: "LA COSA MÁS BELLA",
    TACGIA: "Eros Ramazzotti",
  },
  {
    MABH: "8142",
    TENBH: "LA CUMPARSITA",
    TACGIA: "Carlos Gardel",
  },
  {
    MABH: "18034",
    TENBH: "LA ISLA BONITA",
    TACGIA: "Madonna",
  },
  {
    MABH: "24884",
    TENBH: "LA LA LA",
    TACGIA: "Naughty Boy ft. Sam Smith",
  },
  {
    MABH: "26170",
    TENBH: "LA MALAGUEÑA",
    TACGIA: "Miguel Aceves Mejía",
  },
  {
    MABH: "3572",
    TENBH: "LA SOLITUDINE",
    TACGIA: "Laura Pausini",
  },
  {
    MABH: "26009",
    TENBH: "LA TORTURA",
    TACGIA: "Shakira ft. Alejandro Sanz",
  },
  {
    MABH: "24004",
    TENBH: "LA TORTURA",
    TACGIA: "Alejandro Sanz ft. Shakira",
  },
  {
    MABH: "3123",
    TENBH: "LÁ VEM O ALEMÃO",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "3122",
    TENBH: "LÁ VEM O NEGÃO",
    TACGIA: "Cravo e Canela",
  },
  {
    MABH: "18266",
    TENBH: "LABELS OR LOVE",
    TACGIA: "Fergie",
  },
  {
    MABH: "21001",
    TENBH: "LÁBIOS COMPARTIDOS",
    TACGIA: "Maná",
  },
  {
    MABH: "1556",
    TENBH: "LABIRINTOS",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30167",
    TENBH: "LAÇO ABERTO",
    TACGIA: "Leonardo e Eduardo Costa",
  },
  {
    MABH: "33581",
    TENBH: "LAÇO ABERTO",
    TACGIA: "Ataíde e Alexandre",
  },
  {
    MABH: "18890",
    TENBH: "LACRYMOSA",
    TACGIA: "Evanescence",
  },
  {
    MABH: "33212",
    TENBH: "LADO B LADO A",
    TACGIA: "O Rappa",
  },
  {
    MABH: "30630",
    TENBH: "LADRÃO",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "4589",
    TENBH: "LADY",
    TACGIA: "Little River Band",
  },
  {
    MABH: "24942",
    TENBH: "LADY",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "4732",
    TENBH: "LADY IN RED",
    TACGIA: "Chris Deburgh",
  },
  {
    MABH: "4320",
    TENBH: "LADY LAURA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "18561",
    TENBH: "LADY MADONNA",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18127",
    TENBH: "LADY MARMALADE",
    TACGIA: "Christina Aguilera, Lil' Kim, Mya & Pink",
  },
  {
    MABH: "33390",
    TENBH: "LÁGRIMAS",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "4397",
    TENBH: "LÁGRIMAS E CHUVA",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "1456",
    TENBH: "LÁGRIMAS E VINHO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30429",
    TENBH: "LÁGRIMAS NOS OLHOS",
    TACGIA: "José Roberto",
  },
  {
    MABH: "4117",
    TENBH: "LAMA",
    TACGIA: "Clara Nunes",
  },
  {
    MABH: "33364",
    TENBH: "LAMA NAS RUAS",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "30168",
    TENBH: "LAMENTO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "30343",
    TENBH: "LAMENTO DE UM NORDESTINO",
    TACGIA: "Frank Aguiar e Francis Lopes",
  },
  {
    MABH: "3124",
    TENBH: "LANÇA PERFUME",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "31036",
    TENBH: "LANCE INDIVIDUAL",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15125",
    TENBH: "LANCINHO",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "26052",
    TENBH: "LAND OF CONFUSION",
    TACGIA: "Genesis",
  },
  {
    MABH: "3526",
    TENBH: "LANTERNA DOS AFOGADOS",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "30065",
    TENBH: "LAPADA NA RACHADA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "15036",
    TENBH: "LARGADINHO",
    TACGIA: "Claudia Leitte",
  },
  {
    MABH: "30523",
    TENBH: "LARGADO ÀS TRAÇAS",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "30450",
    TENBH: "LARGUEI DE SER BESTA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "4636",
    TENBH: "LAST CHRISTMAS",
    TACGIA: "Wham",
  },
  {
    MABH: "24333",
    TENBH: "LAST FRIDAY NIGHT",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "9132",
    TENBH: "LAST KISS",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "2614",
    TENBH: "LAST NITE",
    TACGIA: "The Strokes",
  },
  {
    MABH: "24234",
    TENBH: "LAST RESORT",
    TACGIA: "Papa Roach",
  },
  {
    MABH: "24038",
    TENBH: "LATCH",
    TACGIA: "Disclosure & Sam Smith",
  },
  {
    MABH: "24256",
    TENBH: "LAY ME DOWN",
    TACGIA: "Sam Smith feat. John Legend",
  },
  {
    MABH: "18019",
    TENBH: "LAYLA (UNPLUGGED)",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "24961",
    TENBH: "LE FREAK",
    TACGIA: "Chic",
  },
  {
    MABH: "2808",
    TENBH: "LÊ LÊ LÊ",
    TACGIA: "Joao Neto e Frederico",
  },
  {
    MABH: "24110",
    TENBH: "LEAN ON",
    TACGIA: "Major Lazer & Dj Snake ft. MO",
  },
  {
    MABH: "26142",
    TENBH: "LEAN ON ME",
    TACGIA: "Bill Withers",
  },
  {
    MABH: "15072",
    TENBH: "LEÃO DOMADO",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "1385",
    TENBH: "LEÃO FERIDO",
    TACGIA: "Byafra",
  },
  {
    MABH: "24224",
    TENBH: "LEARN TO FLY",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "5931",
    TENBH: "LEAVE (GET OUT)",
    TACGIA: "Jojo",
  },
  {
    MABH: "18792",
    TENBH: "LEAVE OUT ALL THE REST",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24740",
    TENBH: "LEAVING ON A JET PLANE",
    TACGIA: "Paul, Peter & Mary",
  },
  {
    MABH: "18891",
    TENBH: "LEGALIZE IT",
    TACGIA: "Peter Tosh",
  },
  {
    MABH: "24994",
    TENBH: "LEGENDS",
    TACGIA: "Now United",
  },
  {
    MABH: "33382",
    TENBH: "LEI DO DESAPEGO",
    TACGIA: "Thiago Brava",
  },
  {
    MABH: "30975",
    TENBH: "LEILA",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "7624",
    TENBH: "LEILÃO",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "7163",
    TENBH: "LEMBRA DE MIM",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "30928",
    TENBH: "LEMBRANÇA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "33214",
    TENBH: "LEMBRANÇA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "3127",
    TENBH: "LEMBRANÇA DE UM BEIJO",
    TACGIA: "Fagner",
  },
  {
    MABH: "7987",
    TENBH: "LEMBRANÇAS",
    TACGIA: "Kátia",
  },
  {
    MABH: "30753",
    TENBH: "LENÇOL DOBRADO",
    TACGIA: "João Gustavo e Murilo",
  },
  {
    MABH: "30853",
    TENBH: "LENDAS",
    TACGIA: "Now United",
  },
  {
    MABH: "1905",
    TENBH: "LENDAS E MISTÉRIOS",
    TACGIA: "Fred e Gustavo part. Maria Cecília",
  },
  {
    MABH: "6181",
    TENBH: "LENHA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "30576",
    TENBH: "LENHA",
    TACGIA: "Zeca Baleiro",
  },
  {
    MABH: "33435",
    TENBH: "LÉO E BIA",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "15467",
    TENBH: "LEPO LEPO",
    TACGIA: "Psirico",
  },
  {
    MABH: "18128",
    TENBH: "LET HER GO",
    TACGIA: "Passenger",
  },
  {
    MABH: "4534",
    TENBH: "LET IT BE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4590",
    TENBH: "LET IT BE ME",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "24075",
    TENBH: "LET IT GO",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "4637",
    TENBH: "LET IT GROW",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "9133",
    TENBH: "LET ME BE THE ONE",
    TACGIA: "Carpenters",
  },
  {
    MABH: "4638",
    TENBH: "LET ME BE THERE",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "24271",
    TENBH: "LET ME LOVE YOU",
    TACGIA: "Ne-Yo",
  },
  {
    MABH: "24472",
    TENBH: "LET ME LOVE YOU",
    TACGIA: "DJ Snake ft. Justin Bieber",
  },
  {
    MABH: "1676",
    TENBH: "LET ME SING LET ME SING",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "4670",
    TENBH: "LET ME TRY AGAIN",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "18892",
    TENBH: "LET THE MUSIC PLAY",
    TACGIA: "Barry White",
  },
  {
    MABH: "31008",
    TENBH: "LETÍCIA",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "18188",
    TENBH: "LET'S DANCE",
    TACGIA: "David Bowie",
  },
  {
    MABH: "26169",
    TENBH: "LET'S GET IT ON",
    TACGIA: "Marvin Gaye",
  },
  {
    MABH: "24957",
    TENBH: "LET'S GET IT STARTED",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "4932",
    TENBH: "LET'S GET LOUD",
    TACGIA: "Jennifer Lopez",
  },
  {
    MABH: "24741",
    TENBH: "LET'S GO CRAZY",
    TACGIA: "Prince",
  },
  {
    MABH: "2648",
    TENBH: "LET'S STAY TOGETHER",
    TACGIA: "Tina Turner e Al Green",
  },
  {
    MABH: "4533",
    TENBH: "LET'S TWIST AGAIN",
    TACGIA: "Chubby Checker",
  },
  {
    MABH: "18431",
    TENBH: "LET'S WAIT AWHILE",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "24625",
    TENBH: "LETTING THE CABLES SLEEP",
    TACGIA: "Bush",
  },
  {
    MABH: "3666",
    TENBH: "LEVA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "3920",
    TENBH: "LEVA EU",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "33613",
    TENBH: "LEVA EU PRA TUA CASA",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "4002",
    TENBH: "LEVADA LOUCA",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "26041",
    TENBH: "LEVEL UP",
    TACGIA: "Ciara",
  },
  {
    MABH: "24375",
    TENBH: "LEVELS",
    TACGIA: "Nick Jonas",
  },
  {
    MABH: "15175",
    TENBH: "LEVEMENTE ALTERADO",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "4480",
    TENBH: "LEVIANA",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "26154",
    TENBH: "LEVITATING",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "6614",
    TENBH: "LIBERA O TOIM",
    TACGIA: "Arriba Saia",
  },
  {
    MABH: "4003",
    TENBH: "LIBERAR GERAL",
    TACGIA: "Terra Samba",
  },
  {
    MABH: "4118",
    TENBH: "LIBERDADE PRA DENTRO DA CABEÇA",
    TACGIA: "Natiruts",
  },
  {
    MABH: "30837",
    TENBH: "LIBERDADE PROVISÓRIA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "2649",
    TENBH: "LIE TO ME",
    TACGIA: "Jonny Lang",
  },
  {
    MABH: "18430",
    TENBH: "LIFE IS A FLOWER",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "26003",
    TENBH: "LIFE IS A HIGHWAY",
    TACGIA: "Rascal Flatts",
  },
  {
    MABH: "24742",
    TENBH: "LIFE ON MARS",
    TACGIA: "David Bowie",
  },
  {
    MABH: "1677",
    TENBH: "LIGA DA JUSTIÇA",
    TACGIA: "Leva Noiz",
  },
  {
    MABH: "33217",
    TENBH: "LIGA LÁ EM CASA",
    TACGIA: "Leonardo",
  },
  {
    MABH: "15337",
    TENBH: "LIGAÇÃO",
    TACGIA: "NX Zero",
  },
  {
    MABH: "6615",
    TENBH: "LIGAÇÃO URBANA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4733",
    TENBH: "LIGHT MY FIRE",
    TACGIA: "The Doors",
  },
  {
    MABH: "24626",
    TENBH: "LIGHTNING CRASHES",
    TACGIA: "Live",
  },
  {
    MABH: "26061",
    TENBH: "LIGHTS UP",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "30112",
    TENBH: "LIGUEI PRA DIZER QUE TE AMO",
    TACGIA: "Alan & Aladin",
  },
  {
    MABH: "33440",
    TENBH: "LIGUEI PRA DIZER QUE TE AMO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "18253",
    TENBH: "LIKE A BOY",
    TACGIA: "Ciara",
  },
  {
    MABH: "18264",
    TENBH: "LIKE A G6",
    TACGIA: "Far East Movement",
  },
  {
    MABH: "4830",
    TENBH: "LIKE A PRAYER",
    TACGIA: "Madonna",
  },
  {
    MABH: "18050",
    TENBH: "LIKE A ROLLING STONE",
    TACGIA: "Bob Dylan",
  },
  {
    MABH: "5932",
    TENBH: "LIKE A STONE",
    TACGIA: "Audioslave",
  },
  {
    MABH: "4535",
    TENBH: "LIKE A VIRGIN",
    TACGIA: "Madonna",
  },
  {
    MABH: "24367",
    TENBH: "LIKE I CAN",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "24201",
    TENBH: "LIKE TOY SOLDIERS",
    TACGIA: "Eminem",
  },
  {
    MABH: "3328",
    TENBH: "LILÁS",
    TACGIA: "Djavan",
  },
  {
    MABH: "15052",
    TENBH: "LILIAN",
    TACGIA: "Nilton César",
  },
  {
    MABH: "24627",
    TENBH: "LIMELIGHT",
    TACGIA: "Rush",
  },
  {
    MABH: "30344",
    TENBH: "LIMITE",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "30345",
    TENBH: "LINDA",
    TACGIA: "Projota ft. Anavitória",
  },
  {
    MABH: "3527",
    TENBH: "LINDA DEMAIS",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "3755",
    TENBH: "LINDA JUVENTUDE",
    TACGIA: "14 Bis",
  },
  {
    MABH: "3129",
    TENBH: "LINDO BALÃO AZUL",
    TACGIA: "A Turma do Balão Mágico",
  },
  {
    MABH: "30631",
    TENBH: "LINDO BALÃO AZUL",
    TACGIA: "Carinha de Anjo",
  },
  {
    MABH: "4358",
    TENBH: "LINDO LAGO DO AMOR",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "9040",
    TENBH: "LINGER",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "15415",
    TENBH: "LINGUAGEM DOS OLHOS",
    TACGIA: "Péricles",
  },
  {
    MABH: "3130",
    TENBH: "LINHA DO EQUADOR",
    TACGIA: "Djavan",
  },
  {
    MABH: "33450",
    TENBH: "LINHA DO HORIZONTE",
    TACGIA: "Azymuth",
  },
  {
    MABH: "18305",
    TENBH: "LIPS ARE MOVIN'",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "7374",
    TENBH: "LIRIRRIXA",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "33675",
    TENBH: "LISTA DE COMPRAS",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "18992",
    TENBH: "LISTEN",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "4831",
    TENBH: "LISTEN TO THE MUSIC",
    TACGIA: "Doobie Brothers",
  },
  {
    MABH: "4832",
    TENBH: "LISTEN TO YOUR HEART",
    TACGIA: "Roxette",
  },
  {
    MABH: "5933",
    TENBH: "LITHIUM",
    TACGIA: "Evanescence",
  },
  {
    MABH: "18367",
    TENBH: "LITHIUM",
    TACGIA: "Nirvana",
  },
  {
    MABH: "31041",
    TENBH: "LITRÃO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "5934",
    TENBH: "LITTLE JEANNIE",
    TACGIA: "Elton John",
  },
  {
    MABH: "18336",
    TENBH: "LITTLE SISTER",
    TACGIA: "Queens of The Stone Age",
  },
  {
    MABH: "24388",
    TENBH: "LITTLE TALKS",
    TACGIA: "Of Monsters & Men",
  },
  {
    MABH: "18893",
    TENBH: "LIVE AND LET DIE",
    TACGIA: "Paul McCartney",
  },
  {
    MABH: "24743",
    TENBH: "LIVE AND LET DIE",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "24744",
    TENBH: "LIVE FOREVER",
    TACGIA: "Oasis",
  },
  {
    MABH: "18300",
    TENBH: "LIVE TO TELL",
    TACGIA: "Madonna",
  },
  {
    MABH: "24157",
    TENBH: "LIVE YOUR LIFE",
    TACGIA: "T.I. ft. Rihanna",
  },
  {
    MABH: "4833",
    TENBH: "LIVIN' LA VIDA LOCA",
    TACGIA: "Ricky Martin",
  },
  {
    MABH: "4933",
    TENBH: "LIVIN' ON A PRAYER",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9041",
    TENBH: "LIVIN' ON LOVE",
    TACGIA: "Alan Jackson",
  },
  {
    MABH: "24745",
    TENBH: "LIVING AFTER MIDNIGHT",
    TACGIA: "Judas Priest",
  },
  {
    MABH: "18174",
    TENBH: "LIVING FOR LOVE",
    TACGIA: "Madonna",
  },
  {
    MABH: "18894",
    TENBH: "LIVING IN AMERICA",
    TACGIA: "James Brown",
  },
  {
    MABH: "4639",
    TENBH: "LIVING NEXT DOOR TO ALICE",
    TACGIA: "Smokie",
  },
  {
    MABH: "18562",
    TENBH: "LIVING ON THE EDGE",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "33094",
    TENBH: "LIVRE ESTOU",
    TACGIA: "Frozen",
  },
  {
    MABH: "33884",
    TENBH: "LIVRE NA BALADA",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "7989",
    TENBH: "LIVRE PRA VOAR",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "3881",
    TENBH: "LOBO MAU",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33218",
    TENBH: "LOBOS",
    TACGIA: "Conrado e Aleksandro",
  },
  {
    MABH: "30004",
    TENBH: "LOCALIZAÇÃO",
    TACGIA: "Villa Baggage part. Maiara e Maraisa",
  },
  {
    MABH: "30169",
    TENBH: "LOCALIZADOR",
    TACGIA: "Milionário e Marciano",
  },
  {
    MABH: "24875",
    TENBH: "LOCATION",
    TACGIA: "Khalid",
  },
  {
    MABH: "24144",
    TENBH: "LOCKED OUT OF HEAVEN",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "7990",
    TENBH: "LOCUTOR",
    TACGIA: "Erick e Léo",
  },
  {
    MABH: "4591",
    TENBH: "LODI",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "15301",
    TENBH: "LOGO EU",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30114",
    TENBH: "LOKA",
    TACGIA: "Simone e Simaria part. Anitta",
  },
  {
    MABH: "33762",
    TENBH: "LOKA LOKA (LOUCA LOUCA)",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "18677",
    TENBH: "LOLLIPOP",
    TACGIA: "Lil Wayne ft. Static Major",
  },
  {
    MABH: "24158",
    TENBH: "LOLLIPOP",
    TACGIA: "Chordettes",
  },
  {
    MABH: "18265",
    TENBH: "LONDON BRIDGE",
    TACGIA: "Fergie",
  },
  {
    MABH: "18563",
    TENBH: "LONDON CALLING",
    TACGIA: "The Clash",
  },
  {
    MABH: "4276",
    TENBH: "LONDON LONDON",
    TACGIA: "RPM",
  },
  {
    MABH: "18835",
    TENBH: "LONELY",
    TACGIA: "Akon",
  },
  {
    MABH: "26101",
    TENBH: "LONELY",
    TACGIA: "Noah Cyrus",
  },
  {
    MABH: "26162",
    TENBH: "LONELY",
    TACGIA: "Justin Bieber & benny blanco",
  },
  {
    MABH: "9042",
    TENBH: "LONELY BOY",
    TACGIA: "Paul Anka",
  },
  {
    MABH: "18564",
    TENBH: "LONELY DAY",
    TACGIA: "System of A Down",
  },
  {
    MABH: "24900",
    TENBH: "LONELY DAYS",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "5935",
    TENBH: "LONELY PEOPLE",
    TACGIA: "America",
  },
  {
    MABH: "26125",
    TENBH: "LONG COOL WOMAN (IN A BLACK DRESS)",
    TACGIA: "The Hollies",
  },
  {
    MABH: "9264",
    TENBH: "LONG TALL SALLY",
    TACGIA: "Little Richard",
  },
  {
    MABH: "24746",
    TENBH: "LONG TRAIN RUNNIN'",
    TACGIA: "The Doobie Brothers",
  },
  {
    MABH: "33436",
    TENBH: "LONGE DAQUI",
    TACGIA: "Munhoz e Mariano part. Luan Santana",
  },
  {
    MABH: "9265",
    TENBH: "LONGER",
    TACGIA: "Dan Fogelberg",
  },
  {
    MABH: "18678",
    TENBH: "LOOK AT ME",
    TACGIA: "Geri Halliwell",
  },
  {
    MABH: "24009",
    TENBH: "LOOK AT YOU",
    TACGIA: "Big & Rich",
  },
  {
    MABH: "24539",
    TENBH: "LOOK WHAT YOU MADE ME DO",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18993",
    TENBH: "LOOKIN' OUT MY BACK DOOR",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "9134",
    TENBH: "LOOKS LIKE WE MADE IT",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "26048",
    TENBH: "LOS BANDOLEROS",
    TACGIA: "Don Omar ft. Tego Calderon",
  },
  {
    MABH: "18131",
    TENBH: "LOSE MY BREATH",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "26007",
    TENBH: "LOSE YOU TO LOVE ME",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "18259",
    TENBH: "LOSE YOURSELF",
    TACGIA: "Eminem",
  },
  {
    MABH: "18565",
    TENBH: "LOSER",
    TACGIA: "Beck",
  },
  {
    MABH: "4934",
    TENBH: "LOSING MY RELIGION",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "2545",
    TENBH: "LOST",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "26112",
    TENBH: "LOST BOY",
    TACGIA: "Ruth B",
  },
  {
    MABH: "4935",
    TENBH: "LOST IN LOVE",
    TACGIA: "Air Supply",
  },
  {
    MABH: "18067",
    TENBH: "LOST IN PARADISE",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24540",
    TENBH: "LOST IN THE ECHO",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "18132",
    TENBH: "LOST IN YOUR EYES",
    TACGIA: "Debbie Gibson",
  },
  {
    MABH: "18679",
    TENBH: "LOTTA LOVE",
    TACGIA: "Nicolette Larson",
  },
  {
    MABH: "30002",
    TENBH: "LOUCA DE SAUDADE",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15176",
    TENBH: "LOUCA LOUQUINHA",
    TACGIA: "João Lucas e Marcelo part. MC K9",
  },
  {
    MABH: "3621",
    TENBH: "LOUCA PAIXÃO",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "3882",
    TENBH: "LOUCA SEDUÇÃO",
    TACGIA: "Karametade",
  },
  {
    MABH: "15338",
    TENBH: "LOUCO CORAÇÃO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30882",
    TENBH: "LOUCURA DEMAIS",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "6182",
    TENBH: "LOUCURAS DE UMA PAIXÃO",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "4440",
    TENBH: "LOURAS GELADAS",
    TACGIA: "RPM",
  },
  {
    MABH: "3667",
    TENBH: "LOURINHA BOMBRIL",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "4640",
    TENBH: "LOVE",
    TACGIA: "John Lennon",
  },
  {
    MABH: "24520",
    TENBH: "LOVE",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "30754",
    TENBH: "LOVE À QUEMIA ROUPA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "18895",
    TENBH: "LOVE AND HAPPINESS",
    TACGIA: "Al Green",
  },
  {
    MABH: "24747",
    TENBH: "LOVE BITES",
    TACGIA: "Def Leppard",
  },
  {
    MABH: "18078",
    TENBH: "LOVE BITES (SO DO I)",
    TACGIA: "Halestorm",
  },
  {
    MABH: "4834",
    TENBH: "LOVE BY GRACE",
    TACGIA: "Lara Fabian",
  },
  {
    MABH: "18291",
    TENBH: "LOVE GAME",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "2615",
    TENBH: "LOVE GUN",
    TACGIA: "Kiss",
  },
  {
    MABH: "24628",
    TENBH: "LOVE HER MADLY",
    TACGIA: "The Doors",
  },
  {
    MABH: "4734",
    TENBH: "LOVE HURTS",
    TACGIA: "Nazareth",
  },
  {
    MABH: "24908",
    TENBH: "LOVE HURTS",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "2546",
    TENBH: "LOVE IS A LOSING GAME",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "4671",
    TENBH: "LOVE IS A MANY/SPLENDORED THING",
    TACGIA: "Four Aces",
  },
  {
    MABH: "2529",
    TENBH: "LOVE IS ALL",
    TACGIA: "Malcolm Roberts",
  },
  {
    MABH: "24229",
    TENBH: "LOVE IS AN OPEN DOOR",
    TACGIA: "Frozen",
  },
  {
    MABH: "4592",
    TENBH: "LOVE IS BLUE",
    TACGIA: "Al Martino",
  },
  {
    MABH: "4835",
    TENBH: "LOVE IS IN THE AIR",
    TACGIA: "John Paul Young",
  },
  {
    MABH: "4536",
    TENBH: "LOVE LETTERS IN THE SAND",
    TACGIA: "Pat Boone",
  },
  {
    MABH: "24261",
    TENBH: "LOVE ME AGAIN",
    TACGIA: "John Newman",
  },
  {
    MABH: "4936",
    TENBH: "LOVE ME DO",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24340",
    TENBH: "LOVE ME HARDER",
    TACGIA: "Ariana Grande ft. The Weeknd",
  },
  {
    MABH: "24378",
    TENBH: "LOVE ME LIKE YOU",
    TACGIA: "Little Mix",
  },
  {
    MABH: "24330",
    TENBH: "LOVE ME LIKE YOU DO",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "24629",
    TENBH: "LOVE ME NOW",
    TACGIA: "John Legend",
  },
  {
    MABH: "4537",
    TENBH: "LOVE ME TENDER",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18824",
    TENBH: "LOVE MY LIFE",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "30025",
    TENBH: "LOVE NEVER FAILS",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "24077",
    TENBH: "LOVE NEVER FELT SO GOOD",
    TACGIA: "Michael Jackson ft. Justin Timberlake",
  },
  {
    MABH: "4937",
    TENBH: "LOVE OF MY LIFE",
    TACGIA: "Queen",
  },
  {
    MABH: "24498",
    TENBH: "LOVE ON THE BRAIN",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24448",
    TENBH: "LOVE ON TOP",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "18353",
    TENBH: "LOVE OU LIKE A LOVE SONG",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "4593",
    TENBH: "LOVE POTION NUMBER NINE",
    TACGIA: "Searchers",
  },
  {
    MABH: "26122",
    TENBH: "LOVE SHACK",
    TACGIA: "The B-52's",
  },
  {
    MABH: "2616",
    TENBH: "LOVE SO RIGHT",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "15177",
    TENBH: "LOVE SONG",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "18054",
    TENBH: "LOVE SONG",
    TACGIA: "Sara Bareilles",
  },
  {
    MABH: "4538",
    TENBH: "LOVE STORY",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "18488",
    TENBH: "LOVE STORY",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18739",
    TENBH: "LOVE TO HATE YOU",
    TACGIA: "Erasure",
  },
  {
    MABH: "5938",
    TENBH: "LOVE WILL KEEP US ALIVE",
    TACGIA: "Eagles",
  },
  {
    MABH: "5939",
    TENBH: "LOVE WILL KEEP US TOGETHER",
    TACGIA: "Captain and Tennille",
  },
  {
    MABH: "9135",
    TENBH: "LOVE WILL LEAD YOU BACK",
    TACGIA: "Taylor Dayne",
  },
  {
    MABH: "24829",
    TENBH: "LOVE WILL TEAR US APART",
    TACGIA: "Joy Division",
  },
  {
    MABH: "24440",
    TENBH: "LOVE YOURSELF",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "24630",
    TENBH: "LOVE, ME",
    TACGIA: "Collin Raye",
  },
  {
    MABH: "18492",
    TENBH: "LOVEFOOL",
    TACGIA: "The Cardigans",
  },
  {
    MABH: "24865",
    TENBH: "LOVELY",
    TACGIA: "Billie Eilish ft. Khalid",
  },
  {
    MABH: "26120",
    TENBH: "LOVER",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "9136",
    TENBH: "LOVER FOR LIFE",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "2531",
    TENBH: "LOVER WHY",
    TACGIA: "Century",
  },
  {
    MABH: "2519",
    TENBH: "LOVING YOU",
    TACGIA: "Minnie Riperton",
  },
  {
    MABH: "18794",
    TENBH: "LOW",
    TACGIA: "Flo Rida",
  },
  {
    MABH: "24032",
    TENBH: "LOYAL (CLEAN)",
    TACGIA: "Chris Brown ft. Lil Wayne & French Montana",
  },
  {
    MABH: "3367",
    TENBH: "LUA DE CRISTAL",
    TACGIA: "Xuxa",
  },
  {
    MABH: "33782",
    TENBH: "LUA DE MEL",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "3668",
    TENBH: "LUA DE SÃO JORGE",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "4159",
    TENBH: "LUA E ESTRELA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "3473",
    TENBH: "LUA E FLOR",
    TACGIA: "Oswaldo Montenegro",
  },
  {
    MABH: "4277",
    TENBH: "LUAR DO SERTÃO",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "26223",
    TENBH: "LUCID DREAMS",
    TACGIA: "Juice WRLD",
  },
  {
    MABH: "33885",
    TENBH: "LUCIDEZ",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "2532",
    TENBH: "LUCKY",
    TACGIA: "Jason Mraz & Colbie Caillat",
  },
  {
    MABH: "18199",
    TENBH: "LUCY IN THE SKY WITH DIAMONDS",
    TACGIA: "Elton John",
  },
  {
    MABH: "6378",
    TENBH: "LUGAR AO SOL",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "30346",
    TENBH: "LUGAR MELHOR QUE BH",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "33496",
    TENBH: "LUGAR SEGURO",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "33365",
    TENBH: "LUGARES",
    TACGIA: "Grupo Pique Novo",
  },
  {
    MABH: "1111",
    TENBH: "LUGARES PROIBIDOS",
    TACGIA: "Grupo Doce Encontro",
  },
  {
    MABH: "3329",
    TENBH: "LUÍZA",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "4836",
    TENBH: "LUKA",
    TACGIA: "Suzanne Vega",
  },
  {
    MABH: "18205",
    TENBH: "LULLABY",
    TACGIA: "The Cure",
  },
  {
    MABH: "24896",
    TENBH: "LUSH LIFE",
    TACGIA: "Zara Larsson",
  },
  {
    MABH: "24521",
    TENBH: "LUST FOR LIFE",
    TACGIA: "Lana Del Rey ft. The Weeknd",
  },
  {
    MABH: "7376",
    TENBH: "LUTAR PELO QUE É MEU",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "2691",
    TENBH: "LUZ DIVINA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7994",
    TENBH: "LUZ DOS OLHOS",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "30793",
    TENBH: "LUZES DA RIBALTA",
    TACGIA: "José Augusto",
  },
  {
    MABH: "3368",
    TENBH: "MACARENA",
    TACGIA: "Los Del Rio",
  },
  {
    MABH: "24564",
    TENBH: "MACHIKA",
    TACGIA: "J Balvin, Jeon, Anitta",
  },
  {
    MABH: "9043",
    TENBH: "MACHO MAN",
    TACGIA: "Village People",
  },
  {
    MABH: "4199",
    TENBH: "MACHUCA DEMAIS",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "30347",
    TENBH: "MACHUCA EU",
    TACGIA: "Daniel",
  },
  {
    MABH: "26221",
    TENBH: "MACK THE KNIFE",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24631",
    TENBH: "MAD ABOUT YOU",
    TACGIA: "Hooverphonic",
  },
  {
    MABH: "3131",
    TENBH: "MADALENA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "30170",
    TENBH: "MADALENA",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "4481",
    TENBH: "MADALENA DO JUCÚ",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "33517",
    TENBH: "MADE IN ROÇA",
    TACGIA: "Loubet",
  },
  {
    MABH: "18310",
    TENBH: "MADNESS",
    TACGIA: "Muse",
  },
  {
    MABH: "1495",
    TENBH: "MADRI",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "6657",
    TENBH: "MADRUGADA TRISTE",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "1458",
    TENBH: "MÃE",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "30171",
    TENBH: "MÃE",
    TACGIA: "José Augusto",
  },
  {
    MABH: "2834",
    TENBH: "MÃE, TÔ NA BALADA",
    TACGIA: "Trio Bravana",
  },
  {
    MABH: "18129",
    TENBH: "MAGGIE MAY",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "6933",
    TENBH: "MAGIA E MISTÉRIO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "18638",
    TENBH: "MAGIC",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "24129",
    TENBH: "MAGIC",
    TACGIA: "B.o.B. feat. Rivers Cuomo",
  },
  {
    MABH: "24322",
    TENBH: "MAGIC",
    TACGIA: "Coldplay",
  },
  {
    MABH: "2617",
    TENBH: "MAGIC MAN",
    TACGIA: "Heart",
  },
  {
    MABH: "30755",
    TENBH: "MÁGICA",
    TACGIA: "Matheus e Kauan ft. Gusttavo Lima",
  },
  {
    MABH: "33833",
    TENBH: "MÁGICO DE OZ",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "30172",
    TENBH: "MAIO",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "3847",
    TENBH: "MAIOR ABANDONADO",
    TACGIA: "Cazuza",
  },
  {
    MABH: "30459",
    TENBH: "MAIS E MAIS",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "15380",
    TENBH: "MAIS FÁCIL (EASIER)",
    TACGIA: "Sorriso Maroto part. Brian McKnigh",
  },
  {
    MABH: "4160",
    TENBH: "MAIS FELIZ",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "33676",
    TENBH: "MAIS NINGUÉM",
    TACGIA: "Banda do Mar",
  },
  {
    MABH: "2692",
    TENBH: "MAIS QUE A MIM",
    TACGIA: "Ana Carolina e Maria Gadú",
  },
  {
    MABH: "6138",
    TENBH: "MAIS UM NA MULTIDÃO",
    TACGIA: "Erasmo Carlos & Marisa Monte",
  },
  {
    MABH: "7995",
    TENBH: "MAIS UMA CHANCE",
    TACGIA: "Banda Calypso part. Leonardo",
  },
  {
    MABH: "3132",
    TENBH: "MAIS UMA DE AMOR",
    TACGIA: "Blitz",
  },
  {
    MABH: "4200",
    TENBH: "MAIS UMA VEZ",
    TACGIA: "Pepê e Neném",
  },
  {
    MABH: "6379",
    TENBH: "MAIS UMA VEZ",
    TACGIA: "Placa Luminosa",
  },
  {
    MABH: "30348",
    TENBH: "MAIS UMA VEZ SOZINHO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "3330",
    TENBH: "MAJESTADE O SABIÁ",
    TACGIA: "Jair Rodrigues",
  },
  {
    MABH: "4735",
    TENBH: "MAKE IT WITH YOU",
    TACGIA: "Bread",
  },
  {
    MABH: "24392",
    TENBH: "MAKE ME LIKE YOU",
    TACGIA: "Gwen Stefani",
  },
  {
    MABH: "9137",
    TENBH: "MAKE ME LOSE CONTROL",
    TACGIA: "Eric Carmen",
  },
  {
    MABH: "4641",
    TENBH: "MAKE ME SMILE",
    TACGIA: "Chicago",
  },
  {
    MABH: "18429",
    TENBH: "MAKE ME WANNA DIE",
    TACGIA: "The Pretty Reckless",
  },
  {
    MABH: "24410",
    TENBH: "MAKE ME...",
    TACGIA: "Britney Spears ft. G-Eazy",
  },
  {
    MABH: "24748",
    TENBH: "MAKE YOU FEEL MY LOVE",
    TACGIA: "Adele",
  },
  {
    MABH: "18130",
    TENBH: "MAKING LOVE OUT OF NOTHING AT ALL",
    TACGIA: "Air Supply",
  },
  {
    MABH: "4041",
    TENBH: "MAL ACOSTUMADO",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "30019",
    TENBH: "MAL NECESSÁRIO",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "9694",
    TENBH: "MALA PRONTA",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "1132",
    TENBH: "MALANDO É MALANDRO E MANÉ É MANÉ",
    TACGIA: "Diogo Nogueira",
  },
  {
    MABH: "3623",
    TENBH: "MALANDRAGEM",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "33897",
    TENBH: "MALANDRAMENTE",
    TACGIA: "MC Nandinho e Mc Nego Bam",
  },
  {
    MABH: "30632",
    TENBH: "MALANDRINHA",
    TACGIA: "Edson Gomes",
  },
  {
    MABH: "6139",
    TENBH: "MALANDRO",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "30115",
    TENBH: "MALBEC",
    TACGIA: "Henrique e Diego part. Dennis DJ",
  },
  {
    MABH: "33454",
    TENBH: "MALHA FUNK",
    TACGIA: "Bonde do Tigrão",
  },
  {
    MABH: "24749",
    TENBH: "MALIBU",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "33220",
    TENBH: "MALÍCIA DE MULHER",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "33437",
    TENBH: "MALTRATA",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "33004",
    TENBH: "MALUCA PIRADA",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "33391",
    TENBH: "MALUCO",
    TACGIA: "Victor & Leo part. Thiaguinho",
  },
  {
    MABH: "3133",
    TENBH: "MALUCO BELEZA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "3624",
    TENBH: "MAMA ÁFRICA",
    TACGIA: "Chico César",
  },
  {
    MABH: "18041",
    TENBH: "MAMA, I'M COMING HOME",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "1688",
    TENBH: "MAMÃE ESTOU TÃO FELIZ",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "24632",
    TENBH: "MAMAS DON'T LET YOUR BABIES GROW UP",
    TACGIA: "Willie Nelson & Waylon Jennings",
  },
  {
    MABH: "26193",
    TENBH: "MAMBO ITALIANO",
    TACGIA: "Dean Martin",
  },
  {
    MABH: "4837",
    TENBH: "MAMBO NUMBER FIVE (A LITTLE BIT OF...)",
    TACGIA: "Lou Bega",
  },
  {
    MABH: "2533",
    TENBH: "MAMMA MIA",
    TACGIA: "ABBA",
  },
  {
    MABH: "4938",
    TENBH: "MAMMA MIA",
    TACGIA: "A Teens",
  },
  {
    MABH: "26111",
    TENBH: "MAN DOWN",
    TACGIA: "Rihanna",
  },
  {
    MABH: "4838",
    TENBH: "MAN I FEEL LIKE A WOMAN",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "18283",
    TENBH: "MAN IN BLACK",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "18680",
    TENBH: "MAN IN THE BOX",
    TACGIA: "Alice in Chains",
  },
  {
    MABH: "24197",
    TENBH: "MAN OF THE YEAR",
    TACGIA: "SchoolBoy Q",
  },
  {
    MABH: "18175",
    TENBH: "MAN WHO SOLD THE WORLD",
    TACGIA: "Nirvana",
  },
  {
    MABH: "15381",
    TENBH: "MANDOU BEM",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "4736",
    TENBH: "MANDY",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "18428",
    TENBH: "MANEATER",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "6065",
    TENBH: "MANEIRAS",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "1689",
    TENBH: "MANEQUIM",
    TACGIA: "Dominó",
  },
  {
    MABH: "9695",
    TENBH: "MANHÃ DE CARNAVAL",
    TACGIA: "Agostinho dos Santos",
  },
  {
    MABH: "6935",
    TENBH: "MANHÃS DE SETEMBRO",
    TACGIA: "Vanusa",
  },
  {
    MABH: "3135",
    TENBH: "MANIA DE VOCÊ",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "4121",
    TENBH: "MANIA DE VOCÊ",
    TACGIA: "Pepê e Neném",
  },
  {
    MABH: "18168",
    TENBH: "MANIAC",
    TACGIA: "Michael Sembello",
  },
  {
    MABH: "18795",
    TENBH: "MANIC MONDAY",
    TACGIA: "Bangles (The)",
  },
  {
    MABH: "3909",
    TENBH: "MANIVELA",
    TACGIA: "Asa de Águia",
  },
  {
    MABH: "3136",
    TENBH: "MANUEL",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "19471",
    TENBH: "MANUELA",
    TACGIA: "Julio Iglesias",
  },
  {
    MABH: "18133",
    TENBH: "MAPS",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "33925",
    TENBH: "MAQUIAGEM BORRADA",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "33095",
    TENBH: "MÁQUINA DO AMOR",
    TACGIA: "Gabriel Gava",
  },
  {
    MABH: "33677",
    TENBH: "MAR DE DOÇURA",
    TACGIA: "Cavaleiros do Forró",
  },
  {
    MABH: "6861",
    TENBH: "MAR DE GENTE",
    TACGIA: "O Rappa",
  },
  {
    MABH: "6658",
    TENBH: "MAR DE ROSAS",
    TACGIA: "The Fevers",
  },
  {
    MABH: "33054",
    TENBH: "MARAVIDA",
    TACGIA: "Daniel",
  },
  {
    MABH: "3137",
    TENBH: "MARAVILHA",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33146",
    TENBH: "MARCA EVIDENTE",
    TACGIA: "Israel e Rodolffo & Jorge e Mateus",
  },
  {
    MABH: "6659",
    TENBH: "MARCAS DO QUE SE FOI",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33880",
    TENBH: "MARCAS DO QUE SE FOI",
    TACGIA: "Os Incríveis",
  },
  {
    MABH: "30173",
    TENBH: "MARESIA",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "3574",
    TENBH: "MARIA",
    TACGIA: "Ricky Martin",
  },
  {
    MABH: "15382",
    TENBH: "MARIA",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "18427",
    TENBH: "MARIA",
    TACGIA: "Blondie",
  },
  {
    MABH: "33013",
    TENBH: "MARIA BRASILEIRA",
    TACGIA: "As Empreguetes",
  },
  {
    MABH: "3370",
    TENBH: "MARIA CHIQUINHA",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "15611",
    TENBH: "MARIA FUMAÇA",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "21002",
    TENBH: "MARIA LA DEL BARRIO",
    TACGIA: "Thalía",
  },
  {
    MABH: "9227",
    TENBH: "MARIA MAGDALENA",
    TACGIA: "Sandra",
  },
  {
    MABH: "3757",
    TENBH: "MARIA MARIA",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "4939",
    TENBH: "MARIA MARIA",
    TACGIA: "Santana ft.The Product G&B",
  },
  {
    MABH: "3138",
    TENBH: "MARIANA, PARTE MINHA",
    TACGIA: "Grupo Sem Compromisso",
  },
  {
    MABH: "30185",
    TENBH: "MARIANE",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "7998",
    TENBH: "MARIANNE",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3139",
    TENBH: "MARINA",
    TACGIA: "Dorival Caymmi",
  },
  {
    MABH: "33832",
    TENBH: "MARINA",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "30458",
    TENBH: "MARMITEIRO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33458",
    TENBH: "MÁRMORE",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "3140",
    TENBH: "MARROM BOMBOM",
    TACGIA: "Os Morenos",
  },
  {
    MABH: "18426",
    TENBH: "MARRY ME",
    TACGIA: "Train",
  },
  {
    MABH: "24336",
    TENBH: "MARRY THE NIGHT",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "4279",
    TENBH: "MARVIN",
    TACGIA: "Titãs",
  },
  {
    MABH: "24500",
    TENBH: "MARVIN GAYE",
    TACGIA: "Charlie Puth ft. Meghan Trainor",
  },
  {
    MABH: "3474",
    TENBH: "MARYLOU",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "3758",
    TENBH: "MAS QUE NADA",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "2853",
    TENBH: "MÁSCARA",
    TACGIA: "Pitty",
  },
  {
    MABH: "7173",
    TENBH: "MASCULINO E FEMININO",
    TACGIA: "Pepeu Gomes",
  },
  {
    MABH: "33580",
    TENBH: "MASSA DE MANDIOCA",
    TACGIA: "Mastruz com Leite",
  },
  {
    MABH: "4737",
    TENBH: "MASSACHUSETTS",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "24750",
    TENBH: "MASTER OF PUPPETS",
    TACGIA: "Metallica",
  },
  {
    MABH: "4738",
    TENBH: "MATERIAL GIRL",
    TACGIA: "Madonna",
  },
  {
    MABH: "15704",
    TENBH: "MATIMBA",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "30498",
    TENBH: "MATO E MORRO POR VOCÊ",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "3142",
    TENBH: "MATRIZ OU FILIAL",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "15469",
    TENBH: "MAUS BOCADOS",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "24751",
    TENBH: "MAYBE",
    TACGIA: "Janis Joplin",
  },
  {
    MABH: "18796",
    TENBH: "MAYBE TOMORROW",
    TACGIA: "Stereophonics",
  },
  {
    MABH: "24951",
    TENBH: "MAYORES",
    TACGIA: "Becky G ft. Bad Bunny",
  },
  {
    MABH: "30633",
    TENBH: "MC LENÇOL E DJ TRAVESSEIRO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "24456",
    TENBH: "ME & THE RHYTHM",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "3371",
    TENBH: "ME ABRAÇA",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "2709",
    TENBH: "ME ADORA",
    TACGIA: "Pitty",
  },
  {
    MABH: "24752",
    TENBH: "ME AND BOBBY McGEE",
    TACGIA: "Janis Joplin",
  },
  {
    MABH: "9044",
    TENBH: "ME AND MRS. JONES",
    TACGIA: "Billy Paul",
  },
  {
    MABH: "4940",
    TENBH: "ME AND YOU",
    TACGIA: "Dave Maclean",
  },
  {
    MABH: "30349",
    TENBH: "ME APAIXONEI",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "7999",
    TENBH: "ME APAIXONEI (A PRIMEIRA VEZ QUE EU TE VI)",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "4122",
    TENBH: "ME APAIXONEI PELA PESSOA ERRADA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "33051",
    TENBH: "ME APEGO",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "30437",
    TENBH: "ME BATE, ME XINGA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "3143",
    TENBH: "ME CHAMA",
    TACGIA: "Lobão",
  },
  {
    MABH: "30350",
    TENBH: "ME CHAMA QUE EU VOU",
    TACGIA: "Sidney Magal",
  },
  {
    MABH: "3528",
    TENBH: "ME DÊ MOTIVO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "4241",
    TENBH: "ME DÊ UMA CHANCE",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "15255",
    TENBH: "ME DEIXA",
    TACGIA: "O Rappa",
  },
  {
    MABH: "26116",
    TENBH: "ME ENAMORÉ",
    TACGIA: "Shakira",
  },
  {
    MABH: "6701",
    TENBH: "ME ENGANA QUE EU GOSTO",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "30014",
    TENBH: "ME ESPERA",
    TACGIA: "Sandy part. Tiago Iorc",
  },
  {
    MABH: "30867",
    TENBH: "ME FAÇA O FAVOR",
    TACGIA: "Solange Almeida",
  },
  {
    MABH: "30446",
    TENBH: "ME FAZ FELIZ",
    TACGIA: "Jeito Moleque",
  },
  {
    MABH: "31010",
    TENBH: "ME GUSTA",
    TACGIA: "Anitta ft. Cardi B, Myke Towers",
  },
  {
    MABH: "15384",
    TENBH: "ME LAMBE",
    TACGIA: "Raimundos",
  },
  {
    MABH: "3144",
    TENBH: "ME LEVA",
    TACGIA: "Latino",
  },
  {
    MABH: "7381",
    TENBH: "ME LEVA",
    TACGIA: "Diogo Nogueira",
  },
  {
    MABH: "15775",
    TENBH: "ME LEVA AMOR",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "3146",
    TENBH: "ME LEVA JUNTO COM VOCÊ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "1259",
    TENBH: "ME LIBERA",
    TACGIA: "Banda Djavú",
  },
  {
    MABH: "1013",
    TENBH: "ME LIBERTEI",
    TACGIA: "Toni Garrido",
  },
  {
    MABH: "5940",
    TENBH: "ME MYSELF AND I",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "7382",
    TENBH: "ME NAMORA",
    TACGIA: "Edu Ribeiro",
  },
  {
    MABH: "19473",
    TENBH: "ME OLVIDÉ DE VIVIR",
    TACGIA: "Julio Iglesias",
  },
  {
    MABH: "30701",
    TENBH: "ME SINTO TÃO BEM",
    TACGIA: "Micael",
  },
  {
    MABH: "33481",
    TENBH: "ME TELEFONE MAIS",
    TACGIA: "Joao Mineiro e Marciano",
  },
  {
    MABH: "24541",
    TENBH: "ME TOO",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "3712",
    TENBH: "ME USA",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "24888",
    TENBH: "ME!",
    TACGIA: "Taylor Swift ft. Brendon Urie",
  },
  {
    MABH: "24404",
    TENBH: "ME, MYSELF & I",
    TACGIA: "G-Eazy x Bebe Rexha",
  },
  {
    MABH: "24753",
    TENBH: "MEANT TO BE",
    TACGIA: "Bebe Rexha & Florida Georgia Line",
  },
  {
    MABH: "24882",
    TENBH: "MEDELLÍN",
    TACGIA: "Madonna & Maluma",
  },
  {
    MABH: "30634",
    TENBH: "MEDICINA",
    TACGIA: "Anitta",
  },
  {
    MABH: "30352",
    TENBH: "MEDIDA CERTA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30702",
    TENBH: "MEDLEY DA GAIOLA (DENNIS DJ REMIX)",
    TACGIA: "MC Kevin O Chris",
  },
  {
    MABH: "33924",
    TENBH: "MEDO BOBO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "3147",
    TENBH: "MEDO DA CHUVA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30174",
    TENBH: "MEDO DE AMAR",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "30351",
    TENBH: "MEDO DE AMAR",
    TACGIA: "Forró do Muido",
  },
  {
    MABH: "3921",
    TENBH: "MEDO DE AVIÃO",
    TACGIA: "Belchior",
  },
  {
    MABH: "15735",
    TENBH: "MEDO DE VOCÊ",
    TACGIA: "Gabriel Valim",
  },
  {
    MABH: "6066",
    TENBH: "MEDO DO ESCURO",
    TACGIA: "Falamansa",
  },
  {
    MABH: "18681",
    TENBH: "MEET ME HALF WAY",
    TACGIA: "Kenny Loggins",
  },
  {
    MABH: "18239",
    TENBH: "MEET ME HALFWAY",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "4441",
    TENBH: "MEGASTAR",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "6142",
    TENBH: "MEIA LUA INTEIRA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "31022",
    TENBH: "MEIA NOITE (CÊ TEM MEU WHATSAPP)",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "33579",
    TENBH: "MEIA NOITE E MEIA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "15341",
    TENBH: "MEIGA E ABUSADA",
    TACGIA: "Anitta",
  },
  {
    MABH: "30635",
    TENBH: "MEIO CAMINHO ANDADO",
    TACGIA: "Enzo Rabelo",
  },
  {
    MABH: "3148",
    TENBH: "MEL DA SUA BOCA",
    TACGIA: "Copacabana Beat",
  },
  {
    MABH: "31019",
    TENBH: "MEL DA SUA BOCA",
    TACGIA: "Rasta Chinela",
  },
  {
    MABH: "33221",
    TENBH: "MEL NESSE TREM",
    TACGIA: "Cleber e Cauan",
  },
  {
    MABH: "15705",
    TENBH: "MELHOR AMIGO",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "33923",
    TENBH: "MELHOR ASSIM",
    TACGIA: "Biel ft. Ludmilla",
  },
  {
    MABH: "15736",
    TENBH: "MELHOR DO QUE ONTEM",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "1014",
    TENBH: "MELHOR OU PIOR",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "3149",
    TENBH: "MELÔ DO MARINHEIRO",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "3150",
    TENBH: "MELÔ DO TCHAN (SEGURE O TCHAN)",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "15737",
    TENBH: "MEMÓRIAS (COME WAKE ME UP)",
    TACGIA: "Malta",
  },
  {
    MABH: "26086",
    TENBH: "MEMORIES",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "4941",
    TENBH: "MEMORY",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "18425",
    TENBH: "MEMORY",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "24633",
    TENBH: "MEMPHIS",
    TACGIA: "Johnny Rivers",
  },
  {
    MABH: "6541",
    TENBH: "MENINA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30180",
    TENBH: "MENINA CAROLINA",
    TACGIA: "Bebeto",
  },
  {
    MABH: "3577",
    TENBH: "MENINA LINDA",
    TACGIA: "Netinho",
  },
  {
    MABH: "3922",
    TENBH: "MENINA LINDA",
    TACGIA: "Renato e Seus Blue Caps",
  },
  {
    MABH: "15302",
    TENBH: "MENINA MÁ",
    TACGIA: "Anitta",
  },
  {
    MABH: "30356",
    TENBH: "MENINA PIPOCO",
    TACGIA: "Fernando e Sorocaba part. Nego do Borel",
  },
  {
    MABH: "30893",
    TENBH: "MENINA SOLTA",
    TACGIA: "Giulia Be",
  },
  {
    MABH: "3434",
    TENBH: "MENINA VENENO",
    TACGIA: "Ritchie",
  },
  {
    MABH: "33831",
    TENBH: "MENININHA MEU AMOR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33678",
    TENBH: "MENINO BOBO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "7175",
    TENBH: "MENINO DEUS",
    TACGIA: "A Cor do Som",
  },
  {
    MABH: "4004",
    TENBH: "MENINO DO RIO",
    TACGIA: "Baby Consuelo",
  },
  {
    MABH: "33445",
    TENBH: "MENINO DO RIO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30526",
    TENBH: "MENINO SEM JUÍZO",
    TACGIA: "Mastruz com Leite",
  },
  {
    MABH: "9283",
    TENBH: "MENSAGEM PRA ELA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30357",
    TENBH: "MENTALMENTE",
    TACGIA: "Naiara Azevedo part. Mc Kevinho",
  },
  {
    MABH: "30052",
    TENBH: "MENTE COVARDE",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "15180",
    TENBH: "MENTE PRA MIM",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "1658",
    TENBH: "MENTES TÃO BEM",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30831",
    TENBH: "MENTIRA",
    TACGIA: "Felipe Araújo",
  },
  {
    MABH: "33438",
    TENBH: "MENTIRA",
    TACGIA: "Evaldo Braga",
  },
  {
    MABH: "33679",
    TENBH: "MENTIRA ESTAMPADA NA CARA",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "4360",
    TENBH: "MENTIRA QUE VIROU PAIXÃO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "4161",
    TENBH: "MENTIRAS",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "33225",
    TENBH: "MERCEDITA",
    TACGIA: "Belmont e Amaraí",
  },
  {
    MABH: "24488",
    TENBH: "MERCY",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "33358",
    TENBH: "MESA 22",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "26066",
    TENBH: "MESMERIZE",
    TACGIA: "Ja Rule ft. Ashanti",
  },
  {
    MABH: "3475",
    TENBH: "MESMO ASSIM",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "33280",
    TENBH: "MESMO LONGE",
    TACGIA: "Nando Moreno & Cristiano Araújo",
  },
  {
    MABH: "3671",
    TENBH: "MESMO QUE SEJA EU",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "30636",
    TENBH: "MESMO SEM ESTAR",
    TACGIA: "Luan Santana ft. Sandy",
  },
  {
    MABH: "18058",
    TENBH: "MESS AROUND",
    TACGIA: "Ray Charles",
  },
  {
    MABH: "24151",
    TENBH: "MESSAGE IN A BOTTLE",
    TACGIA: "The Police",
  },
  {
    MABH: "15114",
    TENBH: "MESTRE ANDRÉ",
    TACGIA: "Galinha Pintadinha",
  },
  {
    MABH: "33228",
    TENBH: "METAL CONTRA AS NUVENS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "26178",
    TENBH: "METAL HEALTH (BANG YOUR HEAD)",
    TACGIA: "Quiet Riot",
  },
  {
    MABH: "3760",
    TENBH: "METAMORFOSE AMBULANTE",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "2919",
    TENBH: "METE SUA BOCA NA MINHA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "1338",
    TENBH: "METEORO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "33680",
    TENBH: "METRALHADORA",
    TACGIA: "Banda Vingadora",
  },
  {
    MABH: "33234",
    TENBH: "METRÔ LINHA 743",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30637",
    TENBH: "MEU ABRIGO",
    TACGIA: "Melim",
  },
  {
    MABH: "7385",
    TENBH: "MEU AMIGO PEDRO",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "3153",
    TENBH: "MEU AMOR NÃO VÁ EMBORA",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "33578",
    TENBH: "MEU BARQUINHO",
    TACGIA: "Giselli Cristina",
  },
  {
    MABH: "3578",
    TENBH: "MEU BEM MEU MAL",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "3154",
    TENBH: "MEU BEM QUERER",
    TACGIA: "Djavan",
  },
  {
    MABH: "30175",
    TENBH: "MEU CARO AMIGO",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "33829",
    TENBH: "MEU CARRO VIROU HOTEL",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "4280",
    TENBH: "MEU CASAMENTO",
    TACGIA: "Grupo Kiloucura",
  },
  {
    MABH: "30176",
    TENBH: "MEU COMPANHEIRO (SOU EU)",
    TACGIA: "Alan & Aladin",
  },
  {
    MABH: "33976",
    TENBH: "MEU CORAÇÃO DEU PT",
    TACGIA: "Wesley Safadão part. Matheus e Kauan",
  },
  {
    MABH: "1848",
    TENBH: "MEU CORAÇÃO PEDE CARONA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33761",
    TENBH: "MEU CORPO DÁ SINAL",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "30177",
    TENBH: "MEU CUPIDO É GARI",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3331",
    TENBH: "MEU DENGO",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "30986",
    TENBH: "MEU DILEMA",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "30178",
    TENBH: "MEU DOCE AMOR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "6940",
    TENBH: "MEU ÉBANO",
    TACGIA: "Alcione",
  },
  {
    MABH: "30946",
    TENBH: "MEU ENCANTO",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "3155",
    TENBH: "MEU ERRO",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "33312",
    TENBH: "MEU EU EM VOCÊ",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "6941",
    TENBH: "MEU EX AMOR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4399",
    TENBH: "MEU GRITO",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "6143",
    TENBH: "MEU JEITO DE SENTIR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6335",
    TENBH: "MEU MEL",
    TACGIA: "Markinhos Moura",
  },
  {
    MABH: "3156",
    TENBH: "MEU MUNDO E NADA MAIS",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "30451",
    TENBH: "MEU MUNDO GIRA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "30527",
    TENBH: "MEU NOME É POLIANA (ABERTURA)",
    TACGIA: "As Aventuras de Poliana",
  },
  {
    MABH: "15256",
    TENBH: "MEU NOVO MUNDO",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33681",
    TENBH: "MEU PAI É FODA",
    TACGIA: "Rei da Cacimbinha",
  },
  {
    MABH: "7179",
    TENBH: "MEU PAÍS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33577",
    TENBH: "MEU PEQUENO CACHOEIRO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30358",
    TENBH: "MEU PRESENTE É VOCÊ",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3157",
    TENBH: "MEU PRIMEIRO AMOR",
    TACGIA: "Joanna e Fagner",
  },
  {
    MABH: "30181",
    TENBH: "MEU PRIMEIRO AMOR",
    TACGIA: "Priscilla Alcantara",
  },
  {
    MABH: "1859",
    TENBH: "MEU QUERIDO, MEU VELHO, MEU AMIGO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4442",
    TENBH: "MEU QUERUBIM",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "30460",
    TENBH: "MEU RECANTO, MEU PARAÍSO",
    TACGIA: "Goiano e Paraense",
  },
  {
    MABH: "6736",
    TENBH: "MEU REINO ENCANTADO",
    TACGIA: "Daniel e Camilo",
  },
  {
    MABH: "9481",
    TENBH: "MEU SEGREDO",
    TACGIA: "Luiz Cláudio e Giuliano e Bruno & Marrone",
  },
  {
    MABH: "30790",
    TENBH: "MEU TALISMÃ",
    TACGIA: "IZA",
  },
  {
    MABH: "3959",
    TENBH: "MEU TESÃO É VOCÊ",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "6067",
    TENBH: "MEU UNIVERSO É VOCÊ",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "3158",
    TENBH: "MEU VAQUEIRO MEU PEÃO",
    TACGIA: "Mastruz com Leite",
  },
  {
    MABH: "33887",
    TENBH: "MEU VELHO PAI",
    TACGIA: "Carmen Silva",
  },
  {
    MABH: "1171",
    TENBH: "MEU VÍCIO É VOCÊ",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "33439",
    TENBH: "MEU VIOLÃO E O NOSSO CACHORRO",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "2809",
    TENBH: "MEUS BONS AMIGOS",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "33235",
    TENBH: "MEUS MOMENTOS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "30887",
    TENBH: "MEUS PEDAÇOS",
    TACGIA: "Duduca e Dalvan",
  },
  {
    MABH: "33736",
    TENBH: "MEUS SENTIMENTOS",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "1198",
    TENBH: "MEUS TEMPOS DE CRIANÇA",
    TACGIA: "Ataulfo Alves",
  },
  {
    MABH: "30432",
    TENBH: "MEXE MEXE",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "4443",
    TENBH: "MEXE QUE É BOM",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30254",
    TENBH: "MEXIDINHO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "24542",
    TENBH: "MI GENTE",
    TACGIA: "J Balvin ft. Willy William",
  },
  {
    MABH: "4006",
    TENBH: "MIA GIOCONDA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "4739",
    TENBH: "MICHELLE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18566",
    TENBH: "MIDLIFE CRISIS",
    TACGIA: "Faith No More",
  },
  {
    MABH: "18567",
    TENBH: "MIDNIGHT IN CHELSEA",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9139",
    TENBH: "MIDNIGHT IN MONTGOMERY",
    TACGIA: "Alan Jackson",
  },
  {
    MABH: "26171",
    TENBH: "MIDNIGHT SKY",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "7638",
    TENBH: "MIL ACASOS",
    TACGIA: "Skank",
  },
  {
    MABH: "4202",
    TENBH: "MIL CORAÇÕES",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "6617",
    TENBH: "MIL RAZOES PARA CHORAR",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "15850",
    TENBH: "MIL VEZES CANTAREI",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "30703",
    TENBH: "MIL VEZES CANTAREI",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "7800",
    TENBH: "MILAGRE",
    TACGIA: "André Valadão",
  },
  {
    MABH: "33625",
    TENBH: "MILAGRE",
    TACGIA: "Damares",
  },
  {
    MABH: "30182",
    TENBH: "MILAGRE DA FLECHA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "18299",
    TENBH: "MILES AWAY",
    TACGIA: "Madonna",
  },
  {
    MABH: "24830",
    TENBH: "MILES AWAY",
    TACGIA: "Winger",
  },
  {
    MABH: "18740",
    TENBH: "MILK TOAST AND HONEY",
    TACGIA: "Roxette",
  },
  {
    MABH: "3626",
    TENBH: "MILLA",
    TACGIA: "Netinho",
  },
  {
    MABH: "24474",
    TENBH: "MILLION REASONS",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "30787",
    TENBH: "MILU",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "4162",
    TENBH: "MINA DE FÉ",
    TACGIA: "Os Morenos",
  },
  {
    MABH: "9482",
    TENBH: "MINA DO CONDOMÍNIO",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "9228",
    TENBH: "MIND GAMES",
    TACGIA: "John Lennon",
  },
  {
    MABH: "9229",
    TENBH: "MIND TRICK",
    TACGIA: "Jamie Cullum",
  },
  {
    MABH: "33313",
    TENBH: "MINEIRINHA FERVEU",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "3806",
    TENBH: "MINEIRINHO",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "6337",
    TENBH: "MINHA ALMA (A PAZ QUE EU NÃO QUERO)",
    TACGIA: "O Rappa",
  },
  {
    MABH: "30359",
    TENBH: "MINHA ALMA (A PAZ QUE EU NÃO QUERO)",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "2461",
    TENBH: "MINHA BÊNÇÃO",
    TACGIA: "Cassiane",
  },
  {
    MABH: "33682",
    TENBH: "MINHA CARA DE PREOCUPAÇÃO",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "33084",
    TENBH: "MINHA EX",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "6576",
    TENBH: "MINHA FANTASIA",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "30116",
    TENBH: "MINHA FELICIDADE",
    TACGIA: "Roberta Campos",
  },
  {
    MABH: "33576",
    TENBH: "MINHA HISTÓRIA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4163",
    TENBH: "MINHA MENINA",
    TACGIA: "Mauricio Manieri",
  },
  {
    MABH: "3961",
    TENBH: "MINHA METADE",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "1679",
    TENBH: "MINHA MULHER NÃO DEIXA NÃO",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "6020",
    TENBH: "MINHA NAMORADA",
    TACGIA: "Vinicius de Moraes e Carlos Lyra",
  },
  {
    MABH: "4203",
    TENBH: "MINHA NASCENTE",
    TACGIA: "Grupo Sem Compromisso",
  },
  {
    MABH: "15089",
    TENBH: "MINHA PAZ",
    TACGIA: "Glória",
  },
  {
    MABH: "30913",
    TENBH: "MINHA PESSOA ERRADA",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "4323",
    TENBH: "MINHA RAZÃO DE VIVER",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "33828",
    TENBH: "MINHA SUPERSTAR",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "6224",
    TENBH: "MINHA TIMIDEZ",
    TACGIA: "KLB",
  },
  {
    MABH: "3477",
    TENBH: "MINHA VIDA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "33236",
    TENBH: "MINHA VIDA NÃO É VIDA SEM VOCÊ",
    TACGIA: "Banda Calypso part. Daniel",
  },
  {
    MABH: "24475",
    TENBH: "MINORITY",
    TACGIA: "Green Day",
  },
  {
    MABH: "24303",
    TENBH: "MIRROR",
    TACGIA: "Lil Wayne ft. Bruno Mars",
  },
  {
    MABH: "24060",
    TENBH: "MIRRORS",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "18319",
    TENBH: "MISERY BUSINESS",
    TACGIA: "Paramore",
  },
  {
    MABH: "33827",
    TENBH: "MISS BRASIL 2000",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "24270",
    TENBH: "MISS INDEPENDENT",
    TACGIA: "Ne-Yo",
  },
  {
    MABH: "18297",
    TENBH: "MISS YOU",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "18042",
    TENBH: "MISSING",
    TACGIA: "Everything But The Girl",
  },
  {
    MABH: "18682",
    TENBH: "MISSING",
    TACGIA: "Evanescence",
  },
  {
    MABH: "4942",
    TENBH: "MISSING YOU",
    TACGIA: "Diana Ross",
  },
  {
    MABH: "24987",
    TENBH: "MISSISSIPI QUEEN",
    TACGIA: "Mountain",
  },
  {
    MABH: "1260",
    TENBH: "MISTÉRIOS",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "4281",
    TENBH: "MISTÉRIOS DA MEIA NOITE",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "18896",
    TENBH: "MISTLETOE AND WINE",
    TACGIA: "Cliff Richard",
  },
  {
    MABH: "4594",
    TENBH: "MISTY",
    TACGIA: "Johnny Mathis",
  },
  {
    MABH: "18275",
    TENBH: "MMM BOP",
    TACGIA: "Hanson",
  },
  {
    MABH: "4943",
    TENBH: "MMM MMM MMM MMM",
    TACGIA: "Crash Test Dummies",
  },
  {
    MABH: "15303",
    TENBH: "MÔ",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "15493",
    TENBH: "MO DEUSO",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "3160",
    TENBH: "MOÇA",
    TACGIA: "Wando",
  },
  {
    MABH: "3883",
    TENBH: "MOÇA CRIANÇA",
    TACGIA: "Agepê",
  },
  {
    MABH: "30638",
    TENBH: "MOÇA DO ESPELHO",
    TACGIA: "Harmonia do Samba part. Luan Santana",
  },
  {
    MABH: "24202",
    TENBH: "MOCKING BIRD",
    TACGIA: "Eminem",
  },
  {
    MABH: "33751",
    TENBH: "MODA DERRAMADA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "30360",
    TENBH: "MODÃO DUÍDO",
    TACGIA: "Michel Teló part. Maiara e Maraisa",
  },
  {
    MABH: "7181",
    TENBH: "MODINHA",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "31016",
    TENBH: "MODO TURBO",
    TACGIA: "Luísa Sonza, Anitta, Pabllo Vittar",
  },
  {
    MABH: "1148",
    TENBH: "MOÍDO DE PAIXÃO",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "33001",
    TENBH: "MOLEQUE ATREVIDO",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "3923",
    TENBH: "MOMENTOS",
    TACGIA: "Soweto",
  },
  {
    MABH: "4164",
    TENBH: "MON AMOUR, MEU BEM, MA FEMME",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "6662",
    TENBH: "MONALISA",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "26085",
    TENBH: "MONDAY, MONDAY",
    TACGIA: "Mamas & The Papas",
  },
  {
    MABH: "2619",
    TENBH: "MONEY",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18193",
    TENBH: "MONEY FOR NOTHING",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "18683",
    TENBH: "MONSTER",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "3884",
    TENBH: "MONTE CASTELO",
    TACGIA: "Legião urbana",
  },
  {
    MABH: "18897",
    TENBH: "MONY MONY",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "4539",
    TENBH: "MOON RIVER",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "30704",
    TENBH: "MORADOR DE RUA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "4400",
    TENBH: "MORANGO DO NORDESTE",
    TACGIA: "Frank Aguiar",
  },
  {
    MABH: "30832",
    TENBH: "MORANGO DO NORDESTE",
    TACGIA: "Karametade",
  },
  {
    MABH: "3713",
    TENBH: "MORDIDA DE AMOR",
    TACGIA: "Yahoo",
  },
  {
    MABH: "30186",
    TENBH: "MORDIDA, BEIJO E TAPA",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "4595",
    TENBH: "MORE",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "9230",
    TENBH: "MORE THAN A FEELING",
    TACGIA: "Boston",
  },
  {
    MABH: "9045",
    TENBH: "MORE THAN A WOMAN",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "9140",
    TENBH: "MORE THAN THAT",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "24831",
    TENBH: "MORE THAN THIS",
    TACGIA: "10,000 Maniacs",
  },
  {
    MABH: "9046",
    TENBH: "MORE THAN WORDS",
    TACGIA: "Extreme",
  },
  {
    MABH: "30756",
    TENBH: "MORENA",
    TACGIA: "Vitor Kley",
  },
  {
    MABH: "4483",
    TENBH: "MORENINHA LINDA",
    TACGIA: "Tonico e Tinoco",
  },
  {
    MABH: "5942",
    TENBH: "MORGING",
    TACGIA: "Al Jarreau",
  },
  {
    MABH: "30962",
    TENBH: "MORREU NA CRUZ",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "9844",
    TENBH: "MORRO DE SAUDADE",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "33237",
    TENBH: "MORTO DE SAUDADE SUA",
    TACGIA: "César e Paulinho",
  },
  {
    MABH: "30187",
    TENBH: "MORTO POR DENTRO",
    TACGIA: "Barrerito",
  },
  {
    MABH: "1946",
    TENBH: "MOSCA DA SOPA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "33921",
    TENBH: "MOTEL (DESCASO)",
    TACGIA: "Maiara e Maraisa part. Marília Mendonça",
  },
  {
    MABH: "33139",
    TENBH: "MOTEL DISFARCADO",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "26044",
    TENBH: "MOTHER",
    TACGIA: "Danzig",
  },
  {
    MABH: "24023",
    TENBH: "MOVES LIKE JAGGER",
    TACGIA: "Maroon 5 ft. Christina Aguilera",
  },
  {
    MABH: "15472",
    TENBH: "MOZÃO",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "18467",
    TENBH: "MR SAXOBEAT",
    TACGIA: "Alexandra Stan",
  },
  {
    MABH: "18568",
    TENBH: "MR. BRIGHTSIDE",
    TACGIA: "The Killers",
  },
  {
    MABH: "18010",
    TENBH: "MR. JONES",
    TACGIA: "Counting Crows",
  },
  {
    MABH: "24160",
    TENBH: "MR. SANDMAN",
    TACGIA: "Chordettes",
  },
  {
    MABH: "24754",
    TENBH: "MRS. ROBINSON",
    TACGIA: "Simon & Garfunkel",
  },
  {
    MABH: "7183",
    TENBH: "MUCURIPE",
    TACGIA: "Fagner",
  },
  {
    MABH: "33977",
    TENBH: "MUDA A BATIDA",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "3162",
    TENBH: "MUDA DE VIDA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "15073",
    TENBH: "MUDANÇAS",
    TACGIA: "Vanusa",
  },
  {
    MABH: "33012",
    TENBH: "MUDANDO DE ASSUNTO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30974",
    TENBH: "MUDEI",
    TACGIA: "Kell Smith",
  },
  {
    MABH: "30006",
    TENBH: "MUIÉ, CHAPÉU E BUTINA",
    TACGIA: "Loubet",
  },
  {
    MABH: "3163",
    TENBH: "MUITO ESTRANHO",
    TACGIA: "Dalto",
  },
  {
    MABH: "33683",
    TENBH: "MUITO GELO E POUCO WHISKY",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3628",
    TENBH: "MUITO ROMÂNTICO",
    TACGIA: "Maurício Mattar",
  },
  {
    MABH: "2811",
    TENBH: "MUITOS COMPROMISSOS",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4362",
    TENBH: "MULECA",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "15579",
    TENBH: "MULHER",
    TACGIA: "Projota",
  },
  {
    MABH: "6619",
    TENBH: "MULHER (SEXO FRÁGIL)",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "30364",
    TENBH: "MULHER BANDIDA",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "4124",
    TENBH: "MULHER BRASILEIRA",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "15344",
    TENBH: "MULHER BRASILEIRA (TODA BOA)",
    TACGIA: "Psirico",
  },
  {
    MABH: "6702",
    TENBH: "MULHER CHORONA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "3580",
    TENBH: "MULHER DE 40",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4283",
    TENBH: "MULHER DE FASES",
    TACGIA: "Raimundos",
  },
  {
    MABH: "33575",
    TENBH: "MULHER IDEAL",
    TACGIA: "Alcione",
  },
  {
    MABH: "4363",
    TENBH: "MULHER MADURA",
    TACGIA: "Frank Aguiar",
  },
  {
    MABH: "30361",
    TENBH: "MULHER MARAVILHA",
    TACGIA: "Duduca e Dalvan",
  },
  {
    MABH: "30639",
    TENBH: "MULHER MARAVILHA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "9288",
    TENBH: "MULHER NOVA, BONITA E CARINHOSA",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "3164",
    TENBH: "MULHER PEQUENA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33238",
    TENBH: "MULHER QUE NÃO DÁ, VOA",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "30640",
    TENBH: "MULHER, CERVEJA E VIOLA",
    TACGIA: "Edson e Hudson",
  },
  {
    MABH: "30365",
    TENBH: "MULHERÃO DA PORRA",
    TACGIA: "Munhoz e Mariano part. Jerry Smith",
  },
  {
    MABH: "3332",
    TENBH: "MULHERES",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "1096",
    TENBH: "MÚMIAS",
    TACGIA: "Bíquini Cavadão, Renato Russo, Suave",
  },
  {
    MABH: "1896",
    TENBH: "MUNDO ANIMAL",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "33250",
    TENBH: "MUNDO PARALELO",
    TACGIA: "Matheus e Kauan & Jorge e Mateus",
  },
  {
    MABH: "33684",
    TENBH: "MURIÇOCA",
    TACGIA: "Rei da Cacimbinha",
  },
  {
    MABH: "33518",
    TENBH: "MURO DE BERLIM",
    TACGIA: "Trio do Brasil",
  },
  {
    MABH: "6703",
    TENBH: "MUSA DO VERÃO",
    TACGIA: "Felipe Dylon",
  },
  {
    MABH: "18162",
    TENBH: "MUSIC",
    TACGIA: "Madonna",
  },
  {
    MABH: "4944",
    TENBH: "MUSIC AND ME",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24982",
    TENBH: "MUSIC TO MY EYES",
    TACGIA: "Lady Gaga & Bradley Cooper",
  },
  {
    MABH: "3333",
    TENBH: "MÚSICA DE RUA",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "3165",
    TENBH: "MÚSICA URBANA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "26135",
    TENBH: "MUSTANG SALLY",
    TACGIA: "Wilson Pickett",
  },
  {
    MABH: "4740",
    TENBH: "MY ALL",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "30641",
    TENBH: "MY BABY",
    TACGIA: "Furacão Love",
  },
  {
    MABH: "18134",
    TENBH: "MY BOO",
    TACGIA: "Usher ft. Alicia Keys",
  },
  {
    MABH: "4741",
    TENBH: "MY CHERIE AMOUR",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "24426",
    TENBH: "MY DILEMMA 2.0",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "26040",
    TENBH: "MY DING-A-LING",
    TACGIA: "Chuck Berry",
  },
  {
    MABH: "18424",
    TENBH: "MY FATHER'S EYES",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "18569",
    TENBH: "MY FAVORITE GAME",
    TACGIA: "The Cardigans",
  },
  {
    MABH: "24285",
    TENBH: "MY FIRST KISS",
    TACGIA: "Kesha ft. 3OH!3",
  },
  {
    MABH: "18684",
    TENBH: "MY GENERATION",
    TACGIA: "The Who",
  },
  {
    MABH: "4596",
    TENBH: "MY GIRL",
    TACGIA: "Temptations",
  },
  {
    MABH: "18406",
    TENBH: "MY HAPPY ENDING",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "18260",
    TENBH: "MY HEART IS BROKEN",
    TACGIA: "Evanescence",
  },
  {
    MABH: "3924",
    TENBH: "MY HEART WILL GO ON",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "18898",
    TENBH: "MY HERO",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "18240",
    TENBH: "MY HUMPS",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "2508",
    TENBH: "MY IMMORTAL",
    TACGIA: "Evanescence",
  },
  {
    MABH: "18798",
    TENBH: "MY KIND OF LADY",
    TACGIA: "Supertramp",
  },
  {
    MABH: "4945",
    TENBH: "MY LIFE",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "24903",
    TENBH: "MY LIFE IS GOING ON ( LA CASA DE PAPEL)",
    TACGIA: "Cecilia Krull",
  },
  {
    MABH: "4672",
    TENBH: "MY LOVE",
    TACGIA: "Wings",
  },
  {
    MABH: "24268",
    TENBH: "MY LOVE",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "24926",
    TENBH: "MY LOVE",
    TACGIA: "Paul McCartney",
  },
  {
    MABH: "24634",
    TENBH: "MY LOVE IS YOUR LOVE",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18423",
    TENBH: "MY LOVER'S GONE",
    TACGIA: "Dido",
  },
  {
    MABH: "24635",
    TENBH: "MY OH MY",
    TACGIA: "Aqua",
  },
  {
    MABH: "9047",
    TENBH: "MY PLEDGE OF LOVE",
    TACGIA: "Joe Jeffrey & Group",
  },
  {
    MABH: "5944",
    TENBH: "MY PRAYER",
    TACGIA: "Platters",
  },
  {
    MABH: "18407",
    TENBH: "MY SACRIFICE",
    TACGIA: "Creed",
  },
  {
    MABH: "4642",
    TENBH: "MY SHARONA",
    TACGIA: "Knack",
  },
  {
    MABH: "24860",
    TENBH: "MY STRANGE ADDICTION",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "18371",
    TENBH: "MY SWEET LORD",
    TACGIA: "George Harrison",
  },
  {
    MABH: "4540",
    TENBH: "MY WAY",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24310",
    TENBH: "MY WAY",
    TACGIA: "Limp Bizkit",
  },
  {
    MABH: "24522",
    TENBH: "MY WAY",
    TACGIA: "Calvin Harris",
  },
  {
    MABH: "2650",
    TENBH: "MY WORLD",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "26035",
    TENBH: "MY! OH! MY!",
    TACGIA: "Camila Cabello ft. DaBaby",
  },
  {
    MABH: "24914",
    TENBH: "MYSTIFY",
    TACGIA: "INXS",
  },
  {
    MABH: "4165",
    TENBH: "NA ABA DO MEU CHAPÉU",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "1325",
    TENBH: "NA BASE DO BEIJO",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "33255",
    TENBH: "NA BATIDA",
    TACGIA: "Anitta",
  },
  {
    MABH: "33685",
    TENBH: "NA CAMA SÓ VAI DAR NÓS DOIS",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "30366",
    TENBH: "NA CONTA DA LOUCURA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3629",
    TENBH: "NA ESTRADA",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "9289",
    TENBH: "NA FRENTE DO RETO",
    TACGIA: "O Rappa",
  },
  {
    MABH: "7186",
    TENBH: "NA HORA DA RAIVA",
    TACGIA: "Alcione",
  },
  {
    MABH: "33519",
    TENBH: "NA HORA DA RAIVA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30897",
    TENBH: "NA HORA DE AMAR",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33686",
    TENBH: "NA HORA H",
    TACGIA: "Larissa Manoela",
  },
  {
    MABH: "33181",
    TENBH: "NA HORA QUE VOCÊ CHAMAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15304",
    TENBH: "NA LINHA DO TEMPO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33574",
    TENBH: "NA MESA DO BAR",
    TACGIA: "Gabriel Gava",
  },
  {
    MABH: "33441",
    TENBH: "NA MINHA CASA OU NA SUA",
    TACGIA: "Edson e Vinicius part. João Neto e Frederico",
  },
  {
    MABH: "33573",
    TENBH: "NA MINHA OPINIÃO",
    TACGIA: "Odair José",
  },
  {
    MABH: "6423",
    TENBH: "NA MORAL",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "24130",
    TENBH: "NA NA",
    TACGIA: "Trey Songz",
  },
  {
    MABH: "24995",
    TENBH: "NA NA NA",
    TACGIA: "Now United",
  },
  {
    MABH: "33621",
    TENBH: "NA PALMA DA MÃO",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "33520",
    TENBH: "NA PISTA EU ARRASO",
    TACGIA: "MC Guimê",
  },
  {
    MABH: "33826",
    TENBH: "NA PONTA ELA FICA",
    TACGIA: "MC Delano",
  },
  {
    MABH: "30367",
    TENBH: "NA RIQUEZA E NA POBREZA",
    TACGIA: "Jads e Jadson",
  },
  {
    MABH: "33879",
    TENBH: "NA RUA NA CHUVA NA FAZENDA",
    TACGIA: "Hyldon",
  },
  {
    MABH: "3478",
    TENBH: "NA RUA, NA CHUVA, NA FAZENDA (CASINHA DE SAPÊ)",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "30368",
    TENBH: "NA SAIDEIRA",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "6620",
    TENBH: "NA SOLA DA BOTA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "1326",
    TENBH: "NA SOMBRA DE UMA ÁRVORE",
    TACGIA: "Hyldon",
  },
  {
    MABH: "2715",
    TENBH: "NA SUA ESTANTE",
    TACGIA: "Pitty",
  },
  {
    MABH: "33472",
    TENBH: "NADA A DECLARAR",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "3849",
    TENBH: "NADA APAGA ESSA PAIXÃO",
    TACGIA: "Maurício Mattar",
  },
  {
    MABH: "3334",
    TENBH: "NADA MAIS (LATELY)",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "4401",
    TENBH: "NADA ME FAZ ESQUECER",
    TACGIA: "Pepê e Neném",
  },
  {
    MABH: "1085",
    TENBH: "NADA NORMAL",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "3166",
    TENBH: "NADA POR MIM",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "9488",
    TENBH: "NADA PRA MIM",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "33825",
    TENBH: "NADA SE COMPARA",
    TACGIA: "Malta",
  },
  {
    MABH: "6498",
    TENBH: "NADA SEI (APNÉIA)",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "30888",
    TENBH: "NADA VAI MUDAR",
    TACGIA: "Frozen 2",
  },
  {
    MABH: "33245",
    TENBH: "NAMORA BOBO",
    TACGIA: "Thiago Brava",
  },
  {
    MABH: "30788",
    TENBH: "NAMORADA RESERVA",
    TACGIA: "Hugo e Guilherme",
  },
  {
    MABH: "4402",
    TENBH: "NAMORADINHA DE UM AMIGO MEU",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4284",
    TENBH: "NAMORO NOVO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "3582",
    TENBH: "NANI",
    TACGIA: "Art Popular",
  },
  {
    MABH: "30705",
    TENBH: "NÃO ABRO MÃO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "3168",
    TENBH: "NAO APRENDI DIZER ADEUS",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "3850",
    TENBH: "NÃO CHORE MAIS",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "15054",
    TENBH: "NÃO CREIO EM MAIS NADA",
    TACGIA: "Paulo Sérgio",
  },
  {
    MABH: "30369",
    TENBH: "NÃO DÁ",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "6499",
    TENBH: "NÃO DÁ PRA RESISTIR",
    TACGIA: "Rouge",
  },
  {
    MABH: "3169",
    TENBH: "NÃO DEIXE O SAMBA MORRER",
    TACGIA: "Alcione",
  },
  {
    MABH: "30370",
    TENBH: "NÃO DEIXO NÃO",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "30529",
    TENBH: "NÃO DEIXO NÃO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33182",
    TENBH: "NAO DEMORE A PERCEBER",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33780",
    TENBH: "NÃO DESLIGUE O RÁDIO",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "4484",
    TENBH: "NÃO DIGA NADA",
    TACGIA: "Rodrigo Faro",
  },
  {
    MABH: "6068",
    TENBH: "NÃO É FÁCIL",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "2728",
    TENBH: "NÃO É NORMAL",
    TACGIA: "NX Zero",
  },
  {
    MABH: "15074",
    TENBH: "NÃO É SÉRIO",
    TACGIA: "Charlie Brown Jr. e Negra Li",
  },
  {
    MABH: "9490",
    TENBH: "NÃO ENCHE",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "33476",
    TENBH: "NÃO ERA PRA SER ASSIM",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30461",
    TENBH: "NÃO ERA VOCÊ",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "30117",
    TENBH: "NÃO EXISTE AMOR EM SP",
    TACGIA: "Criolo",
  },
  {
    MABH: "33687",
    TENBH: "NÃO FAÇA JAMAIS COMO EU FIZ",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "30642",
    TENBH: "NÃO FALA NÃO PRA MIM",
    TACGIA: "Humberto e Ronaldo ft. Jerry Smith",
  },
  {
    MABH: "9848",
    TENBH: "NAO FAZ MAIS ISSO COMIGO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33688",
    TENBH: "NÃO FAZ SENTIDO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "4166",
    TENBH: "NÃO FOI À TOA",
    TACGIA: "Soweto",
  },
  {
    MABH: "15306",
    TENBH: "NÃO FUI EU",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "30900",
    TENBH: "NÃO GOSTO, EU AMO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "1727",
    TENBH: "NÃO ME AME",
    TACGIA: "Tânia Mara e Alexandre Pires",
  },
  {
    MABH: "6946",
    TENBH: "NÃO ME CONTE SEUS PROBLEMAS",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "7647",
    TENBH: "NÃO ME DEIXE SÓ",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "33689",
    TENBH: "NÃO ME DEIXE SOZINHO",
    TACGIA: "Nego do Borel",
  },
  {
    MABH: "15116",
    TENBH: "NÃO ME PERDOEI",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33507",
    TENBH: "NÃO MORREREI",
    TACGIA: "Marquinhos Gomes",
  },
  {
    MABH: "3335",
    TENBH: "NÃO OLHE ASSIM",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "6785",
    TENBH: "NÃO OLHE PRA TRÁS",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "15307",
    TENBH: "NÃO PARA",
    TACGIA: "Anitta",
  },
  {
    MABH: "33572",
    TENBH: "NÃO PARO DE BEBER",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30643",
    TENBH: "NÃO PERCO MEU TEMPO",
    TACGIA: "Anitta",
  },
  {
    MABH: "31051",
    TENBH: "NÃO PODE SE APAIXONAR",
    TACGIA: "Xand Avião, Dj Danny, Dj Ivis",
  },
  {
    MABH: "1837",
    TENBH: "NÃO PRECISA",
    TACGIA: "Paula Fernandes & Victor e Leo",
  },
  {
    MABH: "9290",
    TENBH: "NÃO PRECISA MUDAR",
    TACGIA: "Ivete Sangalo & Saulo Fernandes",
  },
  {
    MABH: "3170",
    TENBH: "NÃO QUERO DINHEIRO, SÓ QUERO AMAR",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "1921",
    TENBH: "NÃO QUERO FALAR COM ELA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33571",
    TENBH: "NÃO QUERO MAIS",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "7190",
    TENBH: "NÃO RESISTO A NÓS DOIS",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "33031",
    TENBH: "NAO SE APAIXONE NAO",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "2762",
    TENBH: "NÃO SE ESQUEÇA DE MIM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4404",
    TENBH: "NÃO SE REPRIMA (NO TE REPRIMAS)",
    TACGIA: "Menudo",
  },
  {
    MABH: "4325",
    TENBH: "NÃO SE VÁ",
    TACGIA: "Jane e Herondy",
  },
  {
    MABH: "30371",
    TENBH: "NÃO SEI DIZER QUE NÃO TE AMO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "15390",
    TENBH: "NÃO SEI VIVER SEM TER VOCÊ",
    TACGIA: "CPM 22",
  },
  {
    MABH: "33270",
    TENBH: "NAO SOU A ÚNICA",
    TACGIA: "Banda Musa do Calypso",
  },
  {
    MABH: "33570",
    TENBH: "NÃO SOU CALOTEIRO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33387",
    TENBH: "NÃO TÃO MENOS SEMELHANTE",
    TACGIA: "Só Preto Sem Preconceito",
  },
  {
    MABH: "4125",
    TENBH: "NÃO TE ESQUECEREI",
    TACGIA: "Renato e Seus Blue Caps",
  },
  {
    MABH: "30373",
    TENBH: "NÃO TEM DIA, NÃO TEM HORA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30079",
    TENBH: "NÃO TEM PERDÃO",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "33978",
    TENBH: "NÃO TEM PRA NINGUÉM",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "1172",
    TENBH: "NAO TENTE ME IMPEDIR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33920",
    TENBH: "NÃO TEVE AMOR",
    TACGIA: "Joelma",
  },
  {
    MABH: "33247",
    TENBH: "NÃO TÔ NEM AÍ",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "15308",
    TENBH: "NÃO TÔ VALENDO NADA",
    TACGIA: "Henrique e Juliano part. João Neto",
  },
  {
    MABH: "15391",
    TENBH: "NÃO VAI VOLTAR",
    TACGIA: "Onze:20",
  },
  {
    MABH: "1432",
    TENBH: "NÃO VALEU PRA VOCÊ",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "7191",
    TENBH: "NÃO VOU CHORAR",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "30808",
    TENBH: "NÃO VOU DESISTIR DE NENHUM (HOMEM SER)",
    TACGIA: "Mulan",
  },
  {
    MABH: "33878",
    TENBH: "NÃO VOU FICAR",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "33614",
    TENBH: "NÃO VOU MAIS ATRÁS DE VOCÊ",
    TACGIA: "Simone e Simaria part. Wesley Safadão",
  },
  {
    MABH: "6542",
    TENBH: "NAQUELA MESA",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "33979",
    TENBH: "NAQUELE MESMO BAR",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "3479",
    TENBH: "NASCEMOS PRA CANTAR",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "6069",
    TENBH: "NATASHA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "24212",
    TENBH: "NATIONAL ANTHEM",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "24755",
    TENBH: "NATURAL",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "30189",
    TENBH: "NATURALMENTE",
    TACGIA: "Loubet",
  },
  {
    MABH: "5945",
    TENBH: "NAUGHTY GIRL",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "33314",
    TENBH: "NAVEGAR EM MIM",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "33244",
    TENBH: "NE ME QUITTE PAS",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "6302",
    TENBH: "NECESSIDADE",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "2547",
    TENBH: "NEED YOU NOW",
    TACGIA: "Lady Antebellum",
  },
  {
    MABH: "9266",
    TENBH: "NEED YOU TONIGHT",
    TACGIA: "INXS",
  },
  {
    MABH: "24476",
    TENBH: "NEEDED ME",
    TACGIA: "Rihanna",
  },
  {
    MABH: "2837",
    TENBH: "NÊGA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31023",
    TENBH: "NÊGA",
    TACGIA: "Tarcísio do Acordeon & Vitor Fernandes",
  },
  {
    MABH: "4456",
    TENBH: "NEGA MALUCA",
    TACGIA: "As Meninas",
  },
  {
    MABH: "33569",
    TENBH: "NEGA MANHOSA",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "33922",
    TENBH: "NEGO DRAMA",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "4042",
    TENBH: "NEGRA ÂNGELA",
    TACGIA: "Belo e Neguinho da Beija-Flor",
  },
  {
    MABH: "6425",
    TENBH: "NEGRO GATO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3171",
    TENBH: "NEGUE",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "30190",
    TENBH: "NEGUE",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "4405",
    TENBH: "NEM DORMINDO CONSIGO TE ESQUECER",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "3674",
    TENBH: "NEM LUXO, NEM LIXO",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "33256",
    TENBH: "NEM MORTA",
    TACGIA: "Alcione",
  },
  {
    MABH: "6225",
    TENBH: "NEM PENSAR",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "30757",
    TENBH: "NEM TCHUM",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "33232",
    TENBH: "NEM TE CONTO",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "3964",
    TENBH: "NEM UM DIA",
    TACGIA: "Djavan",
  },
  {
    MABH: "3480",
    TENBH: "NEM UM TOQUE",
    TACGIA: "Rosana",
  },
  {
    MABH: "2620",
    TENBH: "NEMO",
    TACGIA: "Nightwish",
  },
  {
    MABH: "24036",
    TENBH: "NEON LIGHTS",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "30374",
    TENBH: "NESSAS HORAS",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "2621",
    TENBH: "NEVER",
    TACGIA: "Heart",
  },
  {
    MABH: "18391",
    TENBH: "NEVER AGAIN",
    TACGIA: "Nickelback",
  },
  {
    MABH: "24756",
    TENBH: "NEVER BE THE SAME",
    TACGIA: "Camila Cabello",
  },
  {
    MABH: "18899",
    TENBH: "NEVER BE THE SAME AGAIN",
    TACGIA: "Melanie C",
  },
  {
    MABH: "9141",
    TENBH: "NEVER CAN SAY GOODBYE",
    TACGIA: "Jackson 5",
  },
  {
    MABH: "24890",
    TENBH: "NEVER ENOUGH",
    TACGIA: "The Greatest Showman (Musical)",
  },
  {
    MABH: "26192",
    TENBH: "NEVER EVER",
    TACGIA: "Ciara",
  },
  {
    MABH: "24897",
    TENBH: "NEVER FORGET YOU",
    TACGIA: "Zara Larsson",
  },
  {
    MABH: "24757",
    TENBH: "NEVER GIVE UP",
    TACGIA: "Sia",
  },
  {
    MABH: "9142",
    TENBH: "NEVER GONNA GIVE YOU UP",
    TACGIA: "Rick Astley",
  },
  {
    MABH: "24636",
    TENBH: "NEVER GONNA LEAVE THIS BED",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "30375",
    TENBH: "NEVER LET ME GO",
    TACGIA: "Alok, Bruno Martini ft. Zeeba",
  },
  {
    MABH: "9143",
    TENBH: "NEVER MY LOVE",
    TACGIA: "The Association",
  },
  {
    MABH: "4643",
    TENBH: "NEVER ON A SUNDAY",
    TACGIA: "Connie Francis",
  },
  {
    MABH: "24265",
    TENBH: "NEVER SAY NEVER",
    TACGIA: "Justin Bieber & Jayden Smith",
  },
  {
    MABH: "18741",
    TENBH: "NEVER TEAR US APART",
    TACGIA: "INXS",
  },
  {
    MABH: "24543",
    TENBH: "NEVER THERE",
    TACGIA: "Cake",
  },
  {
    MABH: "4947",
    TENBH: "NEVER TOO FAR",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "24308",
    TENBH: "NEVER TOO MUCH",
    TACGIA: "Luther Vandross",
  },
  {
    MABH: "24477",
    TENBH: "NEW AMERICANA",
    TACGIA: "Halsey",
  },
  {
    MABH: "24314",
    TENBH: "NEW DIVIDE",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24544",
    TENBH: "NEW RULES",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "5947",
    TENBH: "NEW SENSATION",
    TACGIA: "INXS",
  },
  {
    MABH: "24523",
    TENBH: "NEW WAY TO BLEED",
    TACGIA: "Evanescence",
  },
  {
    MABH: "5948",
    TENBH: "NEW YEAR'S DAY",
    TACGIA: "U2",
  },
  {
    MABH: "4673",
    TENBH: "NEW YORK, NEW YORK",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "18470",
    TENBH: "NEXT TIME I FALL IN LOVE",
    TACGIA: "Peter Cetera & Amy Grant",
  },
  {
    MABH: "26196",
    TENBH: "NICE 'N EASY",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "4742",
    TENBH: "NIGHT AND DAY",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24362",
    TENBH: "NIGHT CHANGES",
    TACGIA: "One Direction",
  },
  {
    MABH: "5949",
    TENBH: "NIGHT FEVER",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4743",
    TENBH: "NIGHTS ON BROADWAY",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "18685",
    TENBH: "NIGHTSHIFT",
    TACGIA: "The Commodores",
  },
  {
    MABH: "4744",
    TENBH: "NIKITA",
    TACGIA: "Elton John",
  },
  {
    MABH: "33257",
    TENBH: "NINGUÉM",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "30191",
    TENBH: "NINGUÉM É DE FERRO",
    TACGIA: "Wesley Safadão part. Marília Mendonça",
  },
  {
    MABH: "30909",
    TENBH: "NINGUÉM ME CALA",
    TACGIA: "Lara Suleiman",
  },
  {
    MABH: "30794",
    TENBH: "NINGUÉM TE AMOU ASSIM",
    TACGIA: "José Augusto",
  },
  {
    MABH: "2696",
    TENBH: "NINGUÉM TEM NADA COM ISSO",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "2763",
    TENBH: "NINGUÉM VAI TIRAR VOCÊ DE MIM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30530",
    TENBH: "NÍVEL DE CARÊNCIA",
    TACGIA: "Pablo",
  },
  {
    MABH: "24389",
    TENBH: "NO",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "24263",
    TENBH: "NO AIR",
    TACGIA: "Jordin Sparks & Chris Brown",
  },
  {
    MABH: "30644",
    TENBH: "NO CALOR DOS TEUS ABRAÇOS",
    TACGIA: "Irmãs Galvão",
  },
  {
    MABH: "33351",
    TENBH: "NO COLO DA NOITE",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "3376",
    TENBH: "NO COMPASSO DO CRIADOR",
    TACGIA: "Katinguelê",
  },
  {
    MABH: "3851",
    TENBH: "NO DIA EM QUE EU SAÍ DE CASA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "2732",
    TENBH: "NO FUNDO DO QUINTAL DA ESCOLA",
    TACGIA: "Raul seixas",
  },
  {
    MABH: "26140",
    TENBH: "NO I'M NEVER GONNA GIVE YA UP",
    TACGIA: "Barry White",
  },
  {
    MABH: "2622",
    TENBH: "NO MATTER WHAT",
    TACGIA: "Badfinger",
  },
  {
    MABH: "24099",
    TENBH: "NO MEDIOCRE",
    TACGIA: "T.I. ft. Iggy Azalea",
  },
  {
    MABH: "30417",
    TENBH: "NO MESMO LUGAR",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "15545",
    TENBH: "NO MEU CORAÇÃO VOCÊ VAI SEMPRE ESTAR",
    TACGIA: "Tarzan",
  },
  {
    MABH: "33261",
    TENBH: "NO MEU TALENTO",
    TACGIA: "Anitta",
  },
  {
    MABH: "4445",
    TENBH: "NO MEXE MEXE, NO BOLE BOLE",
    TACGIA: "Dudu Nobre",
  },
  {
    MABH: "4745",
    TENBH: 'NO MORE "I LOVE YOU\'S"',
    TACGIA: "Annie Lennox",
  },
  {
    MABH: "4746",
    TENBH: "NO MORE LONELY NIGHTS",
    TACGIA: "Paul McCartney",
  },
  {
    MABH: "9144",
    TENBH: "NO MORE MR. NICE GUY",
    TACGIA: "Alice Cooper",
  },
  {
    MABH: "2568",
    TENBH: "NO ONE",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "18366",
    TENBH: "NO ONE",
    TACGIA: "Cold",
  },
  {
    MABH: "18337",
    TENBH: "NO ONE KNOWS",
    TACGIA: "Queens of The Stone Age",
  },
  {
    MABH: "26114",
    TENBH: "NO ONE LIKE YOU",
    TACGIA: "Scorpions",
  },
  {
    MABH: "24758",
    TENBH: "NO ORDINARY LOVE",
    TACGIA: "Sade",
  },
  {
    MABH: "2623",
    TENBH: "NO RAIN",
    TACGIA: "Blind Melon",
  },
  {
    MABH: "3172",
    TENBH: "NO RANCHO FUNDO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "18135",
    TENBH: "NO SCRUBS",
    TACGIA: "TLC",
  },
  {
    MABH: "6786",
    TENBH: "NO SEU LUGAR",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "24759",
    TENBH: "NO TEARS LEFT TO CRY",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "5950",
    TENBH: "NO TIME",
    TACGIA: "Guess Who",
  },
  {
    MABH: "26030",
    TENBH: "NO TIME TO DIE",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "1775",
    TENBH: "NO TOCA-FITA DO MEU CARRO",
    TACGIA: "Bartô Galeno",
  },
  {
    MABH: "15884",
    TENBH: "NO TOQUE DO CELULAR",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "5951",
    TENBH: "NO WOMAN NO CRY",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "9145",
    TENBH: "NOBODY DOES IT BETTER",
    TACGIA: "Carly Simon",
  },
  {
    MABH: "18230",
    TENBH: "NOBODY'S HOME",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "24255",
    TENBH: "NOBODY'S PERFECT",
    TACGIA: "Jessie J",
  },
  {
    MABH: "3583",
    TENBH: "NOBRE VAGABUNDO",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "33055",
    TENBH: "NOCAUTE",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33359",
    TENBH: "NÓIS ENVERGA, MAS NAO QUEBRA",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "30596",
    TENBH: "NÓIS NAMORA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6952",
    TENBH: "NÓIS TROPICA MAS NÃO CAI",
    TACGIA: "Rick e Renner",
  },
  {
    MABH: "6427",
    TENBH: "NOITE DO PRAZER",
    TACGIA: "Cláudio Zoli",
  },
  {
    MABH: "33568",
    TENBH: "NOITE FRACASSADA",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "6864",
    TENBH: "NOITES COM SOL",
    TACGIA: "Flávio Venturini",
  },
  {
    MABH: "26165",
    TENBH: "NON C'È",
    TACGIA: "Laura Pausini",
  },
  {
    MABH: "33442",
    TENBH: "NON JE NE REGRETE RIEN",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "6664",
    TENBH: "NORMALISTA",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "33389",
    TENBH: "NÓS",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "3584",
    TENBH: "NOS BAILES DA VIDA",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "3585",
    TENBH: "NOS LENÇÓIS DESSE REGGAE",
    TACGIA: "Zélia Duncan",
  },
  {
    MABH: "3175",
    TENBH: "NÓS VAMOS INVADIR SUA PRAIA",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "6704",
    TENBH: "NOSSA CANÇÃO",
    TACGIA: "Vanessa da Mata",
  },
  {
    MABH: "33776",
    TENBH: "NOSSA CHAMA",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "3586",
    TENBH: "NOSSA GUERRA SANTA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "3630",
    TENBH: "NOSSA HISTÓRIA",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "6021",
    TENBH: "NOSSA PARADINHA",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "4087",
    TENBH: "NOSSA SENHORA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7651",
    TENBH: "NOSSA SENHORA DO BRASIL",
    TACGIA: "Padre Marcelo Rossi e Bruno & Marrone",
  },
  {
    MABH: "33567",
    TENBH: "NOSSA TURMA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "2743",
    TENBH: "NOSSO AMOR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6705",
    TENBH: "NOSSO AMOR É OURO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33566",
    TENBH: "NOSSO AMOR JÁ ERA",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "30192",
    TENBH: "NOSSO AMOR VIROU UM LIXO",
    TACGIA: "Carlos Alexandre",
  },
  {
    MABH: "2922",
    TENBH: "NOSSO PEQUENO CASTELO",
    TACGIA: "O Teatro Mágico",
  },
  {
    MABH: "33297",
    TENBH: "NOSSO PEQUENO CASTELO",
    TACGIA: "O Teatro Mágico",
  },
  {
    MABH: "3887",
    TENBH: "NOSSO SONHO",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "3178",
    TENBH: "NOSSO SONHO NÃO É ILUSÃO",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "6226",
    TENBH: "NOSSO XOTE",
    TACGIA: "Bicho de Pé",
  },
  {
    MABH: "6706",
    TENBH: "NOSSOS MOMENTOS",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "7396",
    TENBH: "NOSTRADAMUS",
    TACGIA: "Eduardo Dusek",
  },
  {
    MABH: "9146",
    TENBH: "NOT ENOUGH TIME",
    TACGIA: "INXS",
  },
  {
    MABH: "24304",
    TENBH: "NOT FAIR",
    TACGIA: "Lily Allen",
  },
  {
    MABH: "18062",
    TENBH: "NOT GONNA GET US",
    TACGIA: "t.A.t.U.",
  },
  {
    MABH: "24524",
    TENBH: "NOT TODAY",
    TACGIA: "BangTan Boys (BTS) ?????",
  },
  {
    MABH: "26027",
    TENBH: "NOTHIN' ON YOU",
    TACGIA: "B.o.B. ft. Bruno Mars",
  },
  {
    MABH: "24832",
    TENBH: "NOTHING BREAKS LIKE A HEART",
    TACGIA: "Mark Ronson ft. Miley Cyrus",
  },
  {
    MABH: "9147",
    TENBH: "NOTHING COMPARES 2 YOU",
    TACGIA: "Sinead O'Connor",
  },
  {
    MABH: "18306",
    TENBH: "NOTHING ELSE MATTERS",
    TACGIA: "Metallica",
  },
  {
    MABH: "4597",
    TENBH: "NOTHING'S GONNA CHANGE MY LOVE FOR YOU",
    TACGIA: "Glenn Medeiros",
  },
  {
    MABH: "30645",
    TENBH: "NOTIFICAÇÃO PREFERIDA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "5952",
    TENBH: "NOTORIOUS",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "3179",
    TENBH: "NOTURNO (CORAÇÃO ALADO)",
    TACGIA: "Fagner",
  },
  {
    MABH: "30823",
    TENBH: "NOVA ERA",
    TACGIA: "Angra",
  },
  {
    MABH: "30376",
    TENBH: "NOVA FLOR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30646",
    TENBH: "NOVA PARADINHA",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "6665",
    TENBH: "NOVA YORK",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30647",
    TENBH: "NOVELA DAS NOVE",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "9148",
    TENBH: "NOVEMBER RAIN",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "33690",
    TENBH: "NOVINHA VAI NO CHÃO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33824",
    TENBH: "NOVINHA VEM QUE TEM",
    TACGIA: "MC Lon",
  },
  {
    MABH: "30138",
    TENBH: "NOVO NAMORADO",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "6382",
    TENBH: "NOVO TEMPO",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "4747",
    TENBH: "NOW AND FOREVER",
    TACGIA: "Richard Marx",
  },
  {
    MABH: "24132",
    TENBH: "NOW YOU'RE GONE",
    TACGIA: "Basshunter",
  },
  {
    MABH: "2624",
    TENBH: "NOWHERE MAN",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "6827",
    TENBH: "NUA",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "33348",
    TENBH: "NUANCE",
    TACGIA: "Pixote",
  },
  {
    MABH: "15992",
    TENBH: "NÚCLEO BASE",
    TACGIA: "Ira!",
  },
  {
    MABH: "24833",
    TENBH: "NUESTRO AMOR",
    TACGIA: "RBD",
  },
  {
    MABH: "30193",
    TENBH: "NUMA SALA DE REBOCO",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "24316",
    TENBH: "NUMB",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "3180",
    TENBH: "NUNCA",
    TACGIA: "Fagner",
  },
  {
    MABH: "33624",
    TENBH: "NUNCA",
    TACGIA: "Zizi Possi",
  },
  {
    MABH: "30926",
    TENBH: "NUNCA DEIXE DE SONHAR",
    TACGIA: "Rouge & KLB",
  },
  {
    MABH: "30122",
    TENBH: "NUNCA FOI EX",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33443",
    TENBH: "NUNCA MAIS",
    TACGIA: "George Henrique e Rodrigo part. Bruno & Marrone",
  },
  {
    MABH: "33315",
    TENBH: "NUNCA MAIS EU E VOCÊ",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "15548",
    TENBH: "NUNCA MAIS ME DEIXE",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "4285",
    TENBH: "NUNCA VOU DEIXAR VOCÊ",
    TACGIA: "Karametade",
  },
  {
    MABH: "3181",
    TENBH: "NUVÉM DE LÁGRIMAS",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "6104",
    TENBH: "NUVEM PASSAGEIRA",
    TACGIA: "Hermes Aquino",
  },
  {
    MABH: "30531",
    TENBH: "O ALVO",
    TACGIA: "Diego e Victor Hugo part. Henrique e Juliano",
  },
  {
    MABH: "6227",
    TENBH: "O AMANHÃ",
    TACGIA: "Simone",
  },
  {
    MABH: "7652",
    TENBH: "O AMANHÃ",
    TACGIA: "Detonautas",
  },
  {
    MABH: "33223",
    TENBH: "O AMOR COLORIU",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30589",
    TENBH: "O AMOR DE ANTES",
    TACGIA: "Hugo e Tiago",
  },
  {
    MABH: "15309",
    TENBH: "O AMOR É MAIS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4366",
    TENBH: "O AMOR E O PODER",
    TACGIA: "Rosana",
  },
  {
    MABH: "30377",
    TENBH: "O AMOR ESTÁ AQUI",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6070",
    TENBH: "O AMOR NÃO DEIXA",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "33265",
    TENBH: "O AMOR NÃO TEM CULPA",
    TACGIA: "Pixote",
  },
  {
    MABH: "3531",
    TENBH: "O AMOR, VOCÊ E EU",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "33298",
    TENBH: "O ANJO MAIS VELHO (RECOMBINANDO ATOS)",
    TACGIA: "O Teatro Mágico",
  },
  {
    MABH: "3436",
    TENBH: "O ASTRONAUTA DE MÁRMORE",
    TACGIA: "Nenhum de Nós",
  },
  {
    MABH: "6105",
    TENBH: "O BAILE TODO",
    TACGIA: "Bonde do Tigrão",
  },
  {
    MABH: "7305",
    TENBH: "O BARQUINHO",
    TACGIA: "Grupo Tradição",
  },
  {
    MABH: "3183",
    TENBH: "O BÊBADO E A EQUILIBRISTA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "30706",
    TENBH: "O BEBÊ",
    TACGIA: "MC Kevinho e MC Kekel",
  },
  {
    MABH: "3185",
    TENBH: "O BICHO",
    TACGIA: "Ricardo Chaves",
  },
  {
    MABH: "6866",
    TENBH: "O BICHO VAI PEGAR",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "30194",
    TENBH: "O BOÊMIO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "3888",
    TENBH: "O BOM RAPAZ",
    TACGIA: "Wanderley Cardoso",
  },
  {
    MABH: "9501",
    TENBH: "O BRASIL TÁ CHEIO",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "1054",
    TENBH: "O CADERNO",
    TACGIA: "Toquinho",
  },
  {
    MABH: "6023",
    TENBH: "O CALHAMBEQUE",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3187",
    TENBH: "O CANTO DA CIDADE",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "33691",
    TENBH: "O CARA DA RÁDIO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30439",
    TENBH: "O CARA ERRADO",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "33394",
    TENBH: "O CARA ERRADO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "4406",
    TENBH: "O CARCARÁ E A ROSA",
    TACGIA: "Natiruts",
  },
  {
    MABH: "30021",
    TENBH: "O CARIMBADOR MALUCO (PLUNCT, PLACT, ZUM)",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30378",
    TENBH: "O CÉU EXPLICA TUDO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "15310",
    TENBH: "O COWBOY VAI TE PEGAR",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "33563",
    TENBH: "Ô DE CASA Ô DE FORA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "33076",
    TENBH: "O DEFENSOR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3869",
    TENBH: "O DESCOBRIDOR DOS SETE MARES",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "1899",
    TENBH: "O DIA EM QUE A TERRA PAROU",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30925",
    TENBH: "O DIVÃ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7538",
    TENBH: "O DONO DA TERRA",
    TACGIA: "Os Abelhudos",
  },
  {
    MABH: "33823",
    TENBH: "O DONO DO BANCO",
    TACGIA: "Neto LX",
  },
  {
    MABH: "33692",
    TENBH: "O DOUTOR E A EMPREGADA",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "3889",
    TENBH: "O ERÊ",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "33521",
    TENBH: "O ESCUDO",
    TACGIA: "Voz da Verdade",
  },
  {
    MABH: "30532",
    TENBH: "O FAROL",
    TACGIA: "Cláudio Zoli",
  },
  {
    MABH: "33822",
    TENBH: "O FAROL",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30776",
    TENBH: "O FIM",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "6625",
    TENBH: "O FRUTO DO NOSSO AMOR (AMOR PERFEITO)",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33565",
    TENBH: "O GAVIÃO",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "33444",
    TENBH: "O GELO QUE ELA ME DEU",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "30572",
    TENBH: "O GRÃ FINO E O CAIPIRA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "6188",
    TENBH: "O GRANDE AMOR DA MINHA VIDA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4089",
    TENBH: "O GRANDE AMOR DA MINHA VIDA (CONVITE DE CASAMENTO)",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30379",
    TENBH: "O GRAVE BATER",
    TACGIA: "MC Kevinho",
  },
  {
    MABH: "9303",
    TENBH: "O GRITO DA GALERA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "15237",
    TENBH: "O HOMEM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33821",
    TENBH: "O HOMEM DE NAZARETH",
    TACGIA: "Antônio Marcos",
  },
  {
    MABH: "33564",
    TENBH: "O IPÊ E O PRISIONEIRO",
    TACGIA: "Liu e Léu",
  },
  {
    MABH: "33820",
    TENBH: "O JULGAMENTO",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "1695",
    TENBH: "Ô LÁ EM CASA",
    TACGIA: "Léo e Junior",
  },
  {
    MABH: "4286",
    TENBH: "O LEÃOZINHO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "33504",
    TENBH: "O MAIOR TROFÉU",
    TACGIA: "Damares",
  },
  {
    MABH: "6383",
    TENBH: "O MAIS IMPORTANTE É O VERDADEIRO AMOR",
    TACGIA: "Márcio Greyck",
  },
  {
    MABH: "30195",
    TENBH: "O MAR PAROU",
    TACGIA: "Michél Teló",
  },
  {
    MABH: "3632",
    TENBH: "O MENINO DA PORTEIRA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "33040",
    TENBH: "O MEU GURI",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "33266",
    TENBH: "O MEU LUGAR",
    TACGIA: "Arlindo Cruz",
  },
  {
    MABH: "33474",
    TENBH: "O MEU SANGUE FERVE POR VOCÊ",
    TACGIA: "Sidney Magal",
  },
  {
    MABH: "30648",
    TENBH: "O MORRO NÃO TEM VEZ",
    TACGIA: "Tom Jobim e Vinícius de Moraes",
  },
  {
    MABH: "7198",
    TENBH: "O MUNDO DÁ VOLTAS",
    TACGIA: "CPM 22",
  },
  {
    MABH: "9854",
    TENBH: "O MUNDO É UM MOINHO",
    TACGIA: "Cartola",
  },
  {
    MABH: "33919",
    TENBH: "O MUNDO GIROU",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "30196",
    TENBH: "O NEGÓCIO DA CHINA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33918",
    TENBH: "O NOME DELA É RAPARIGA",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "3377",
    TENBH: "O NOSSO AMOR A GENTE INVENTA",
    TACGIA: "Cazuza",
  },
  {
    MABH: "33819",
    TENBH: "O NOSSO SANTO BATEU",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "3310",
    TENBH: "O PALCO CAIU",
    TACGIA: "Matogrosso e Mathias",
  },
  {
    MABH: "6148",
    TENBH: "O PASSAGEIRO",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "30395",
    TENBH: "O PATO",
    TACGIA: "João Gilberto",
  },
  {
    MABH: "33446",
    TENBH: "O PATRÃO NOSSO DE CADA DIA",
    TACGIA: "Secos & Molhados",
  },
  {
    MABH: "6707",
    TENBH: "O PENETRA",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33889",
    TENBH: "O PINTO",
    TACGIA: "Raça Pura",
  },
  {
    MABH: "9316",
    TENBH: "O PIOR É QUE EU GOSTO",
    TACGIA: "Alcione",
  },
  {
    MABH: "30380",
    TENBH: "O PODER DO CRIADOR",
    TACGIA: "Goiano e Paraense",
  },
  {
    MABH: "3890",
    TENBH: "O POETA ESTÁ VIVO",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "1925",
    TENBH: "O PORTÃO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30956",
    TENBH: "O POVO GOSTA É DO PISEIRO",
    TACGIA: "Eric Land ft. Zé Vaqueiro",
  },
  {
    MABH: "7656",
    TENBH: "O PRÍNCIPE",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33069",
    TENBH: "O QUE ACONTECE NA BALADA",
    TACGIA: "Thaeme e Thiago & Fernando e Sorocaba",
  },
  {
    MABH: "15392",
    TENBH: "O QUE CÊ VAI FAZER",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30585",
    TENBH: "O QUE COMBINA VOCÊ",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "33818",
    TENBH: "O QUE É AMOR PRA VOCÊ",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3189",
    TENBH: "O QUE É O QUE É",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "33455",
    TENBH: "O QUE É QUE A BAIANA TEM",
    TACGIA: "Carmem Miranda",
  },
  {
    MABH: "6106",
    TENBH: "O QUE É QUE EU FAÇO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30381",
    TENBH: "O QUE É QUE EU SOU SEM VOCÊ",
    TACGIA: "Di Paulo e Paulinho",
  },
  {
    MABH: "3378",
    TENBH: "O QUE É QUE HÁ",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "15016",
    TENBH: "O QUE É QUE TEM?",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "3190",
    TENBH: "O QUE É QUE VOU FAZER",
    TACGIA: "Grupo Pirraça",
  },
  {
    MABH: "1600",
    TENBH: "O QUE EU FAÇO AMANHÃ",
    TACGIA: "Alcione",
  },
  {
    MABH: "33980",
    TENBH: "O QUE HOUVE?",
    TACGIA: "Mano Walter part. Marília Mendonça",
  },
  {
    MABH: "4487",
    TENBH: "O QUE ME IMPORTA",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "33817",
    TENBH: "O QUE ME IMPORTA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33407",
    TENBH: "O QUE SE FAZ, AQUI SE PAGA",
    TACGIA: "Zé Ricardo e Thiago",
  },
  {
    MABH: "3191",
    TENBH: "O QUE SERÁ (A FLOR DA TERRA)",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "7199",
    TENBH: "O QUE SOBROU DO CÉU",
    TACGIA: "O Rappa",
  },
  {
    MABH: "6955",
    TENBH: "O QUE TIVER QUE VIR VIRÁ",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "1018",
    TENBH: "O QUE VAI SER DE NÓS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30197",
    TENBH: "O QUERERES",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30382",
    TENBH: "O REBOLADO DA MORENA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6343",
    TENBH: "O SEGUNDO SOL",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "15780",
    TENBH: "O SHOW JA TERMONIOU",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "15672",
    TENBH: "O SHOW TEM QUE CONTINUAR",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "33011",
    TENBH: "Ô SOFRÊNCIA",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "7200",
    TENBH: "O SOL",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "30535",
    TENBH: "O SOL",
    TACGIA: "Vitor Kley",
  },
  {
    MABH: "33043",
    TENBH: "O SOL, A LIZ E O BEIJAFLOR",
    TACGIA: "Circuladô de Fulô",
  },
  {
    MABH: "3675",
    TENBH: "O SOLE MIO",
    TACGIA: "Andrea Bocelli",
  },
  {
    MABH: "26082",
    TENBH: "O SOLE MIO",
    TACGIA: "Luciano Pavaroti",
  },
  {
    MABH: "7201",
    TENBH: "O SURDO",
    TACGIA: "Alcione",
  },
  {
    MABH: "6628",
    TENBH: "O TELEFONE TOCOU NOVAMENTE",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "30779",
    TENBH: "O TEMPO ME TRAIU",
    TACGIA: "Claudio Fontana",
  },
  {
    MABH: "33392",
    TENBH: "O TEMPO NAO APAGA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "6230",
    TENBH: "O TEMPO NÃO PARA",
    TACGIA: "Cazuza",
  },
  {
    MABH: "30536",
    TENBH: "O ÚLTIMO JULGAMENTO",
    TACGIA: "Léo Canhoto e Robertinho",
  },
  {
    MABH: "6956",
    TENBH: "O ÚLTIMO PAU DE ARARA",
    TACGIA: "Fagner",
  },
  {
    MABH: "33479",
    TENBH: "O ULTIMO POR DO SOL",
    TACGIA: "Lenine",
  },
  {
    MABH: "3192",
    TENBH: "O ÚLTIMO ROMÂNTICO",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "4287",
    TENBH: "O VENTO",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "3193",
    TENBH: "O VIRA",
    TACGIA: "Secos & Molhados",
  },
  {
    MABH: "33370",
    TENBH: "ÔA ÔA",
    TACGIA: "Art Popular",
  },
  {
    MABH: "9467",
    TENBH: "OBEDIENTE",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "4644",
    TENBH: "OBLADI OBLADA",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "33694",
    TENBH: "OBRIGADO A DESISTIR",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "30537",
    TENBH: "OBRIGADO MÃE",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "30758",
    TENBH: "OBRIGADO POR ESTRAGAR TUDO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "24760",
    TENBH: "OBSESSED",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "24861",
    TENBH: "OCEAN EYES",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "3194",
    TENBH: "OCEANO",
    TACGIA: "Djavan",
  },
  {
    MABH: "3195",
    TENBH: "ÓCULOS",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "3587",
    TENBH: "ODARA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "9048",
    TENBH: "ODE TO MY FAMILY",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "33267",
    TENBH: "OGUM",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "3966",
    TENBH: "OH CAROL",
    TACGIA: "Carlos Gonzaga",
  },
  {
    MABH: "9267",
    TENBH: "OH CAROL",
    TACGIA: "Neil Sedaka",
  },
  {
    MABH: "24761",
    TENBH: "OH CAROLINA",
    TACGIA: "Shaggy",
  },
  {
    MABH: "6502",
    TENBH: "OH CHUVA",
    TACGIA: "Falamansa",
  },
  {
    MABH: "9149",
    TENBH: "OH DARLING",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "33129",
    TENBH: "OH DELÍCIA",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "4949",
    TENBH: "OH GIRL",
    TACGIA: "The Chi-Lites",
  },
  {
    MABH: "4542",
    TENBH: "OH SUSANNA",
    TACGIA: "Stephen Foster",
  },
  {
    MABH: "30538",
    TENBH: "OI",
    TACGIA: "Léo Magalhães",
  },
  {
    MABH: "30707",
    TENBH: "OI NEGO",
    TACGIA: "Jefferson Moraes part. Maraisa",
  },
  {
    MABH: "30089",
    TENBH: "OI PAIXÃO",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "30462",
    TENBH: "OI SUMIDO",
    TACGIA: "Dream Team do Passinho",
  },
  {
    MABH: "30383",
    TENBH: "OITAVA DOSE",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "6149",
    TENBH: "OJOS ASÍ",
    TACGIA: "Shakira",
  },
  {
    MABH: "18469",
    TENBH: "OLD MAN",
    TACGIA: "Neil Young",
  },
  {
    MABH: "26019",
    TENBH: "OLD ME",
    TACGIA: "5 Seconds of Summer",
  },
  {
    MABH: "24881",
    TENBH: "OLD TOWN ROAD (REMIX)",
    TACGIA: "Lil Nas X ft. Billy Ray Cyrus",
  },
  {
    MABH: "4044",
    TENBH: "OLHA",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "30198",
    TENBH: "OLHA A EXPLOSÃO",
    TACGIA: "MC Kevinho e Wesley Safadão",
  },
  {
    MABH: "3433",
    TENBH: "OLHA AMOR",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30649",
    TENBH: "OLHA ELA AÍ",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "33695",
    TENBH: "OLHA MAS NÃO PEGA",
    TACGIA: "Adson e Alana",
  },
  {
    MABH: "4488",
    TENBH: "OLHA O QUE O AMOR ME FAZ",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "30384",
    TENBH: "OLHA PRA MIM",
    TACGIA: "André Leono",
  },
  {
    MABH: "3197",
    TENBH: "OLHAR 43",
    TACGIA: "RPM",
  },
  {
    MABH: "30539",
    TENBH: "OLHARES SINCEROS",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "1306",
    TENBH: "OLHOS CERTOS",
    TACGIA: "Detonautas",
  },
  {
    MABH: "7203",
    TENBH: "OLHOS COLORIDOS",
    TACGIA: "Sandra de Sá",
  },
  {
    MABH: "33483",
    TENBH: "OLHOS DE LUAR",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "6629",
    TENBH: "OLHOS NOS OLHOS",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "1042",
    TENBH: "OLHOS VERMELHOS",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "24762",
    TENBH: "ON HOLD",
    TACGIA: "The XX",
  },
  {
    MABH: "24383",
    TENBH: "ON MY MIND",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "4748",
    TENBH: "ON MY OWN",
    TACGIA: "Nikka Costa",
  },
  {
    MABH: "24851",
    TENBH: "ON MY WAY",
    TACGIA: "Alan Walker, Sabrina Carpenter & Farruko",
  },
  {
    MABH: "18280",
    TENBH: "ON THE FLOOR",
    TACGIA: "Jennifer Lopez ft. Pitbull",
  },
  {
    MABH: "18994",
    TENBH: "ON THE ROAD AGAIN",
    TACGIA: "Willie Nelson",
  },
  {
    MABH: "24128",
    TENBH: "ON TOP OF THE WORLD",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "30759",
    TENBH: "ONDA DIFERENTE",
    TACGIA: "Anitta ft. Ludmilla & Snoop Dogg ft. Papatinho",
  },
  {
    MABH: "6471",
    TENBH: "ONDE ESTA MEU AMOR",
    TACGIA: "RPM",
  },
  {
    MABH: "33622",
    TENBH: "ONDE ESTÃO OS MEUS PASSOS",
    TACGIA: "Barrerito",
  },
  {
    MABH: "9504",
    TENBH: "ONDE ESTARÁ O MEU AMOR",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "2924",
    TENBH: "ONDE ESTIVER",
    TACGIA: "NX Zero e Freddy Gibbs",
  },
  {
    MABH: "30650",
    TENBH: "ONDE JÁ SE VIU",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "15550",
    TENBH: "ONDE NASCE O SOL",
    TACGIA: "Bruninho e Davi part. Jorge e Mateus",
  },
  {
    MABH: "6583",
    TENBH: "ONDE VOCÊ FOR EU VOU",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "3337",
    TENBH: "ONDE VOCÊ MORA?",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "4749",
    TENBH: "ONE",
    TACGIA: "U2",
  },
  {
    MABH: "18038",
    TENBH: "ONE",
    TACGIA: "Metallica",
  },
  {
    MABH: "18197",
    TENBH: "ONE",
    TACGIA: "Creed",
  },
  {
    MABH: "18686",
    TENBH: "ONE",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "24502",
    TENBH: "ONE CALL AWAY",
    TACGIA: "Charlie Puth",
  },
  {
    MABH: "24399",
    TENBH: "ONE DANCE",
    TACGIA: "Drake ft. Wizkid and Kyla",
  },
  {
    MABH: "18216",
    TENBH: "ONE DAY IN YOUR LIFE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24763",
    TENBH: "ONE HEADLIGHT",
    TACGIA: "The Walflowers",
  },
  {
    MABH: "30048",
    TENBH: "ONE LAST CRY",
    TACGIA: "Marina Elali",
  },
  {
    MABH: "24064",
    TENBH: "ONE LAST TIME",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "18901",
    TENBH: "ONE LOVE",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "9150",
    TENBH: "ONE LOVE IN MY LIFE TIME",
    TACGIA: "Diana Ross",
  },
  {
    MABH: "4750",
    TENBH: "ONE MOMENT IN TIME",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18995",
    TENBH: "ONE MORE LIGHT",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "4751",
    TENBH: "ONE MORE NIGHT",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "18797",
    TENBH: "ONE MORE NIGHT",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "9151",
    TENBH: "ONE MORE TRY",
    TACGIA: "George Michael",
  },
  {
    MABH: "4599",
    TENBH: "ONE OF THESE NIGHTS",
    TACGIA: "Eagles",
  },
  {
    MABH: "4950",
    TENBH: "ONE OF US",
    TACGIA: "Joan Osborne",
  },
  {
    MABH: "24545",
    TENBH: "ONE STEP CLOSER",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "24764",
    TENBH: "ONE SWEET DAY",
    TACGIA: "Mariah Carey ft. One Sweet Day",
  },
  {
    MABH: "18387",
    TENBH: "ONE TIME",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "18570",
    TENBH: "ONE WAY OR ANOTHER",
    TACGIA: "Blondie",
  },
  {
    MABH: "26028",
    TENBH: "ONE WEEK",
    TACGIA: "Baranaked Ladies",
  },
  {
    MABH: "18065",
    TENBH: "ONLY GIRL (IN THE WORLD)",
    TACGIA: "Rihanna",
  },
  {
    MABH: "18028",
    TENBH: "ONLY HAPPY WHEN IT RAINS",
    TACGIA: "Garbage",
  },
  {
    MABH: "5954",
    TENBH: "ONLY IN MY DREAMS",
    TACGIA: "Debbie Gibson",
  },
  {
    MABH: "18468",
    TENBH: "ONLY LOVE CAN HURT LIKE THIS",
    TACGIA: "Paloma Faith",
  },
  {
    MABH: "24210",
    TENBH: "ONLY ONE",
    TACGIA: "Kanye West ft. Paul McCartney",
  },
  {
    MABH: "26234",
    TENBH: "ONLY ONE",
    TACGIA: "Yellowcard",
  },
  {
    MABH: "4645",
    TENBH: "ONLY THE LONELY",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "2651",
    TENBH: "ONLY TIME WILL TELL",
    TACGIA: "Asia",
  },
  {
    MABH: "5955",
    TENBH: "ONLY WHEN YOU LEAVE",
    TACGIA: "Spandau Ballet",
  },
  {
    MABH: "4752",
    TENBH: "ONLY YESTERDAY",
    TACGIA: "Carpenters",
  },
  {
    MABH: "4543",
    TENBH: "ONLY YOU (AND YOU ALONE)",
    TACGIA: "Platters",
  },
  {
    MABH: "30775",
    TENBH: "ONTÉM",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "4951",
    TENBH: "OOPS! I DID IT AGAIN",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "18180",
    TENBH: "OPEN YOUR EYES",
    TACGIA: "Snow Patrol",
  },
  {
    MABH: "2748",
    TENBH: "ORAÇÃO",
    TACGIA: "A Banda Mais Bonita da Cidade",
  },
  {
    MABH: "9313",
    TENBH: "ORAÇÃO AO TEMPO",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "1618",
    TENBH: "ORAÇÃO DE UM JOVEM TRISTE",
    TACGIA: "Antônio Marcos",
  },
  {
    MABH: "30540",
    TENBH: "ORAÇÃO PELA FAMÍLIA",
    TACGIA: "Padre Zezinho",
  },
  {
    MABH: "18637",
    TENBH: "ORDINARY LOVE",
    TACGIA: "U2",
  },
  {
    MABH: "18014",
    TENBH: "ORDINARY WORLD",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "24251",
    TENBH: "ORIGINAL PRANKSTER",
    TACGIA: "Offspring",
  },
  {
    MABH: "30199",
    TENBH: "ORQUÍDEA NEGRA",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "6828",
    TENBH: "OS AMANTES",
    TACGIA: "Daniel",
  },
  {
    MABH: "33274",
    TENBH: "OS ANJOS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "33048",
    TENBH: "OS ANJOS CANTAM",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "6788",
    TENBH: "OS CEGOS DO CASTELO",
    TACGIA: "Titãs",
  },
  {
    MABH: "1700",
    TENBH: "OS CORAÇÕES NÃO SÃO IGUAIS",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "33065",
    TENBH: "OS DEZ MANDAMENTOS",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "2750",
    TENBH: "OS OUTROS",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "30200",
    TENBH: "OS PONTINHOS",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "6503",
    TENBH: "OS VERDES CAMPOS DA MINHA TERRA",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "4952",
    TENBH: "OTHERSIDE",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "33816",
    TENBH: "OU ELA OU EU",
    TACGIA: "Alcione",
  },
  {
    MABH: "33696",
    TENBH: "OU SOME OU SOMA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "6150",
    TENBH: "OUÇA",
    TACGIA: "Maysa",
  },
  {
    MABH: "18482",
    TENBH: "OUR TRUTH",
    TACGIA: "Lacuna Coil",
  },
  {
    MABH: "1928",
    TENBH: "OURO DE TOLO",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "15311",
    TENBH: "OUSADIA E ALEGRIA",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "30970",
    TENBH: "OUSADO AMOR",
    TACGIA: "Isaias Saad",
  },
  {
    MABH: "24163",
    TENBH: "OUT OF THE BLACK",
    TACGIA: "Royal Blood",
  },
  {
    MABH: "24386",
    TENBH: "OUT OF THE WOODS",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "26150",
    TENBH: "OUT OF TOUCH",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "33697",
    TENBH: "OUTDOOR",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "3322",
    TENBH: "OUTDOOR / É BOM DEMAIS",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "3199",
    TENBH: "OUTONO",
    TACGIA: "Djavan",
  },
  {
    MABH: "33815",
    TENBH: "OUTRA NOITE QUE SE VAI",
    TACGIA: "Armandinho",
  },
  {
    MABH: "3200",
    TENBH: "OUTRA VEZ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33395",
    TENBH: "OUTRA VIAGEM",
    TACGIA: "Só Preto Sem Preconceito",
  },
  {
    MABH: "24834",
    TENBH: "OUTRO DIA QUE VÁ",
    TACGIA: "RBD",
  },
  {
    MABH: "6543",
    TENBH: "OUTRO LUGAR",
    TACGIA: "Detonautas",
  },
  {
    MABH: "24343",
    TENBH: "OUTSIDE",
    TACGIA: "Calvin Harris ft. Ellie Goulding",
  },
  {
    MABH: "30651",
    TENBH: "OUVI DIZER",
    TACGIA: "Melim",
  },
  {
    MABH: "3201",
    TENBH: "OVELHA NEGRA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "18481",
    TENBH: "OVER MY SHOULDER",
    TACGIA: "Mike & The Mechanics",
  },
  {
    MABH: "9152",
    TENBH: "OVER THE RAINBOW",
    TACGIA: "Judy Garland",
  },
  {
    MABH: "18136",
    TENBH: "OVERJOYED",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "9153",
    TENBH: "OVERKILL",
    TACGIA: "Men At Work",
  },
  {
    MABH: "33397",
    TENBH: "OYA",
    TACGIA: "Grupo Sensação",
  },
  {
    MABH: "5956",
    TENBH: "OYE COMO VA",
    TACGIA: "Santana",
  },
  {
    MABH: "1737",
    TENBH: "P DA VIDA",
    TACGIA: "Dominó",
  },
  {
    MABH: "18408",
    TENBH: "P.I.M.P.",
    TACGIA: "50 Cent",
  },
  {
    MABH: "30386",
    TENBH: "PA & BROWSE",
    TACGIA: "Mc Pocahontas ft. DJ Tubarão",
  },
  {
    MABH: "33233",
    TENBH: "PAC MAN",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "3379",
    TENBH: "PACATO CIDADÃO",
    TACGIA: "Skank",
  },
  {
    MABH: "7662",
    TENBH: "PACIÊNCIA",
    TACGIA: "Lenine e Zeca Baleiro",
  },
  {
    MABH: "30785",
    TENBH: "PACIÊNCIA",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "26091",
    TENBH: "PACIFY HER",
    TACGIA: "Melanie Martinez",
  },
  {
    MABH: "30652",
    TENBH: "PAGA DE SOLTEIRO FELIZ",
    TACGIA: "Simone e Simaria part. Alok",
  },
  {
    MABH: "1200",
    TENBH: "PAGA PAU",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "3588",
    TENBH: "PÁGINA DE AMIGOS",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30490",
    TENBH: "PAGO PRA VER",
    TACGIA: "Marcelinho de Lima",
  },
  {
    MABH: "33471",
    TENBH: "PAGODE EM BRASILIA",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "30541",
    TENBH: "PAGODE RUSSO",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "2734",
    TENBH: "PAGÚ",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "3380",
    TENBH: "PAI",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "18902",
    TENBH: "PAINT IT BLACK",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "33259",
    TENBH: "PAÍS DO FUTEBOL",
    TACGIA: "MC Guimê part. Emicida",
  },
  {
    MABH: "3202",
    TENBH: "PAIS E FILHOS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "3852",
    TENBH: "PAÍS TROPICAL",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "6544",
    TENBH: "PAISAGEM DA JANELA",
    TACGIA: "Beto Guedes",
  },
  {
    MABH: "3967",
    TENBH: "PAIXÃO",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "6743",
    TENBH: "PAIXÃO ANTIGA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33447",
    TENBH: "PAIXÃO DE PEÃO",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "6830",
    TENBH: "PAIXÃO DE UM HOMEM",
    TACGIA: "Waldick Soriano",
  },
  {
    MABH: "30388",
    TENBH: "PAIXÃO MINEIRA",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "30504",
    TENBH: "PAIXÃO OU LOUCURA",
    TACGIA: "Mauricio e Mauri",
  },
  {
    MABH: "1738",
    TENBH: "PAIXÃO PROIBIDA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "33224",
    TENBH: "PALÁCIOS E CASTELOS",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "3677",
    TENBH: "PALAVRAS (WORDS)",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "6708",
    TENBH: "PALAVRAS AO VENTO",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "30389",
    TENBH: "PALAVRAS DE AMOR (CASO MARCADO)",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "7402",
    TENBH: "PALAVRAS DE UM FUTURO BOM",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "4288",
    TENBH: "PALCO",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "33171",
    TENBH: "PALMADINHA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "30201",
    TENBH: "PALOMA",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "3853",
    TENBH: "PALPITE",
    TACGIA: "Vanessa Rangel",
  },
  {
    MABH: "18507",
    TENBH: "PANAMA",
    TACGIA: "Van Halen",
  },
  {
    MABH: "33917",
    TENBH: "PANCADÃO",
    TACGIA: "Axé Blond",
  },
  {
    MABH: "30820",
    TENBH: "PANDEIRO É MEU NOME",
    TACGIA: "Alcione",
  },
  {
    MABH: "3589",
    TENBH: "PANELA VELHA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "33165",
    TENBH: "PANRAMPAMPAM",
    TACGIA: "João Lucas e Diogo",
  },
  {
    MABH: "15312",
    TENBH: "PANTERA COR-DE-ROSA",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "3203",
    TENBH: "PÃO DE MEL",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "18036",
    TENBH: "PAPA DON'T PREACH",
    TACGIA: "Madonna",
  },
  {
    MABH: "24109",
    TENBH: "PAPARAZZI",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "3204",
    TENBH: "PAPARICO",
    TACGIA: "Molejo",
  },
  {
    MABH: "18996",
    TENBH: "PAPA'S GOT A BRAND NEW BAG",
    TACGIA: "James Brown",
  },
  {
    MABH: "7403",
    TENBH: "PAPEL DE PÃO",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "4046",
    TENBH: "PAPEL MACHÊ",
    TACGIA: "João Bosco",
  },
  {
    MABH: "4600",
    TENBH: "PAPER ROSES",
    TACGIA: "Marie Osmond",
  },
  {
    MABH: "24637",
    TENBH: "PAPERBACK WRITER",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4368",
    TENBH: "PAPO DE JACARÉ",
    TACGIA: "P.O. Box",
  },
  {
    MABH: "30950",
    TENBH: "PAPO RETO",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33275",
    TENBH: "PARA DE MARRA",
    TACGIA: "Lexa",
  },
  {
    MABH: "33347",
    TENBH: "PÁRA TUDO",
    TACGIA: "Jeito Moleque",
  },
  {
    MABH: "30860",
    TENBH: "PARABÉNS",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "3205",
    TENBH: "PARABÉNS A VOCÊ (HAPPY BIRTHDAY TO YOU)",
    TACGIA: "Parabéns",
  },
  {
    MABH: "1060",
    TENBH: "PARABÉNS DA XUXA",
    TACGIA: "Xuxa",
  },
  {
    MABH: "30390",
    TENBH: "PARABÉNS PRA VOCÊ",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "30542",
    TENBH: "PARABÉNS PRO NOSSO AMOR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30202",
    TENBH: "PARADINHA",
    TACGIA: "Anitta",
  },
  {
    MABH: "24024",
    TENBH: "PARADISE",
    TACGIA: "Coldplay",
  },
  {
    MABH: "18409",
    TENBH: "PARADISE CITY",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "30708",
    TENBH: "PARADO NO BAILÃO",
    TACGIA: "MC L da Vinte e MC Gury",
  },
  {
    MABH: "30203",
    TENBH: "PARAÍBA MASCULINA",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "30463",
    TENBH: "PARAÍSO",
    TACGIA: "Lucas Lucco e Pabllo Vittar",
  },
  {
    MABH: "33276",
    TENBH: "PARAISO DAS HIENAS",
    TACGIA: "Jessé",
  },
  {
    MABH: "3854",
    TENBH: "PARALELAS",
    TACGIA: "Belchior",
  },
  {
    MABH: "26229",
    TENBH: "PARALLEL UNIVERSE",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "33562",
    TENBH: "PARANÓIA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "18139",
    TENBH: "PARANOID",
    TACGIA: "Black Sabbath",
  },
  {
    MABH: "33021",
    TENBH: "PARARA TIBUM",
    TACGIA: "Tati Zaqui",
  },
  {
    MABH: "33277",
    TENBH: "PARATODOS",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4289",
    TENBH: "PARE",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30543",
    TENBH: "PARE DE TOMAR A PÍLULA",
    TACGIA: "Odair José",
  },
  {
    MABH: "3206",
    TENBH: "PARE O CASAMENTO",
    TACGIA: "Wanderléa",
  },
  {
    MABH: "15131",
    TENBH: "PARECE CASTIGO",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "30760",
    TENBH: "PARECE PIADA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33769",
    TENBH: "PARECE QUE O VENTO",
    TACGIA: "Wesley Safadão part. Ivete Sangalo",
  },
  {
    MABH: "3207",
    TENBH: "PAREÇO UM MENINO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "15585",
    TENBH: "PAREDE BRANCA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "30005",
    TENBH: "PAREDES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33482",
    TENBH: "PAREDES AZUIS",
    TACGIA: "João Mineiro E Marciano",
  },
  {
    MABH: "30204",
    TENBH: "PAREDES AZUIS, ALINE E A CARTA",
    TACGIA: "Milionário e Marciano",
  },
  {
    MABH: "30653",
    TENBH: "PARQUEDAS",
    TACGIA: "Gabriel Diniz",
  },
  {
    MABH: "24638",
    TENBH: "PART II",
    TACGIA: "Paramore",
  },
  {
    MABH: "18799",
    TENBH: "PART OF ME",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "18059",
    TENBH: "PART TIME LOVER",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "33380",
    TENBH: "PARTE DESSE JOGO",
    TACGIA: "Grupo Sem Compromisso",
  },
  {
    MABH: "24288",
    TENBH: "PARTY IN THE USA",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "24504",
    TENBH: "PARTY MONSTER",
    TACGIA: "The Weeknd ft. Daft Punk",
  },
  {
    MABH: "24318",
    TENBH: "PARTY ROCK ANTHEM",
    TACGIA: "Lmfao & Lauren Bennett & Goonrock",
  },
  {
    MABH: "33698",
    TENBH: "PASSA LÁ",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "15913",
    TENBH: "PASSARINHOS",
    TACGIA: "Emicida ft. Vanessa da Mata",
  },
  {
    MABH: "1435",
    TENBH: "PÁSSARO DE FOGO",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "9859",
    TENBH: "PÁSSAROS",
    TACGIA: "Claudia Leitte",
  },
  {
    MABH: "30654",
    TENBH: "PASSATEMPO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6668",
    TENBH: "PASSE EM CASA",
    TACGIA: "Tribalistas",
  },
  {
    MABH: "33258",
    TENBH: "PASSINHO DO VOLANTE (AH LELEK LEK LEK LEK)",
    TACGIA: "MC Federado e os Leleks",
  },
  {
    MABH: "30222",
    TENBH: "PASSOU DA CONTA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33561",
    TENBH: "PASTOR JOÃO E A IGREJA INVISÍVEL",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "18508",
    TENBH: "PATIENCE",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "15146",
    TENBH: "PATRICINHA DO OLHO AZUL",
    TACGIA: "Grupo Bom Gosto",
  },
  {
    MABH: "30239",
    TENBH: "PAULINHA",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "33814",
    TENBH: "PAVÃO MISTERIOSO",
    TACGIA: "Ednardo",
  },
  {
    MABH: "33338",
    TENBH: "PAVILHAO DE ESPELHOS",
    TACGIA: "Roberta Sá",
  },
  {
    MABH: "18047",
    TENBH: "PAYING THE COST TO BE THE BOSS",
    TACGIA: "B. B. King",
  },
  {
    MABH: "24331",
    TENBH: "PAYPHONE",
    TACGIA: "Maroon 5 ft. Wiz Khalifa",
  },
  {
    MABH: "3339",
    TENBH: "PAZ DO MEU AMOR",
    TACGIA: "Luiz Vieira",
  },
  {
    MABH: "18800",
    TENBH: "PEACE OF MIND",
    TACGIA: "Boston",
  },
  {
    MABH: "18688",
    TENBH: "PEACOCK",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "6960",
    TENBH: "PEÃO APAIXONADO",
    TACGIA: "Daniel",
  },
  {
    MABH: "33281",
    TENBH: "PEÃO NÃO CHORA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "4047",
    TENBH: "PECADO CAPITAL",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "33491",
    TENBH: "PECADO DE AMOR",
    TACGIA: "Pablo",
  },
  {
    MABH: "30780",
    TENBH: "PEDAÇO MEU",
    TACGIA: "Cleber e Cauan Part. Jorge",
  },
  {
    MABH: "6072",
    TENBH: "PEDE A ELA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "3340",
    TENBH: "PEDINDO AMOR",
    TACGIA: "Mano a Mano",
  },
  {
    MABH: "30544",
    TENBH: "PEDINDO AMOR",
    TACGIA: "Antônio Carlos e Renato",
  },
  {
    MABH: "31009",
    TENBH: "PEDINDO AMOR",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30392",
    TENBH: "PEDRA, FLOR E ESPINHO",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "33480",
    TENBH: "PEDRAS QUE CANTAM",
    TACGIA: "Fagner",
  },
  {
    MABH: "33210",
    TENBH: "PEGA EU E LEVA PRA VOCÊ",
    TACGIA: "Leonardo",
  },
  {
    MABH: "9861",
    TENBH: "PEGA FOGO CABARÉ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "4451",
    TENBH: "PEGA NA MENTIRA",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "30464",
    TENBH: "PEGADA QUE DESGRAMA",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "33699",
    TENBH: "PEGADOR",
    TACGIA: "Gasparzinho & Lucas Lucco",
  },
  {
    MABH: "33560",
    TENBH: "PEGANDO LÁGRIMAS",
    TACGIA: "Paula Fernandes & Chitãozinho & Xororó",
  },
  {
    MABH: "30655",
    TENBH: "PEGASUS FANTASY",
    TACGIA: "Cavaleiros do Zodíaco",
  },
  {
    MABH: "7666",
    TENBH: "PEGUE E PUXE",
    TACGIA: "Kelly Key",
  },
  {
    MABH: "6962",
    TENBH: "PEITO ABERTO",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "33787",
    TENBH: "PEITO SADIO",
    TACGIA: "Zé Carreiro e Carreirinho",
  },
  {
    MABH: "33282",
    TENBH: "PELA LUZ DOS OLHOS TEUS",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "33025",
    TENBH: "PELA PORTA DA FRENTE",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4207",
    TENBH: "PELA VIDA INTEIRA",
    TACGIA: "Grupo Kiloucura",
  },
  {
    MABH: "6832",
    TENBH: "PELADO",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "3210",
    TENBH: "PELADOS EM SANTOS",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "30875",
    TENBH: "PELO AMOR DE DEUS",
    TACGIA: "Emilio Santiago",
  },
  {
    MABH: "3440",
    TENBH: "PELO INTERFONE",
    TACGIA: "Ritchie",
  },
  {
    MABH: "30043",
    TENBH: "PEN DRIVE DE MODÃO",
    TACGIA: "Munhoz e Mariano part. Zé Neto e Cristiano",
  },
  {
    MABH: "18997",
    TENBH: "PENNY LANE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "3534",
    TENBH: "PENSAMENTO",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "7410",
    TENBH: "PENSANDO EM TI",
    TACGIA: "Nelson Gonçalves",
  },
  {
    MABH: "9315",
    TENBH: "PENSANDO EM VOCÊ",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "30545",
    TENBH: "PENSANDO EM VOCÊ",
    TACGIA: "Paulinho Moska",
  },
  {
    MABH: "30552",
    TENBH: "PENSANDO EM VOCÊ",
    TACGIA: "Pimenta do Reino",
  },
  {
    MABH: "7211",
    TENBH: "PENSE E DANCE",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "3441",
    TENBH: "PENSE EM MIM",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "33283",
    TENBH: "PENSE UM POUCO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "18495",
    TENBH: "PEOPLE ARE STRANGE",
    TACGIA: "The Doors",
  },
  {
    MABH: "3892",
    TENBH: "PER AMORE",
    TACGIA: "Zizi Possi",
  },
  {
    MABH: "26024",
    TENBH: "PER AMORE",
    TACGIA: "Andrea Bocelli",
  },
  {
    MABH: "4127",
    TENBH: "PERAÊ",
    TACGIA: "Banda Beijo",
  },
  {
    MABH: "30546",
    TENBH: "PERDENDO DENTES",
    TACGIA: "Pato Fu",
  },
  {
    MABH: "33376",
    TENBH: "PERDEU",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30709",
    TENBH: "PERDEU A RAZÃO",
    TACGIA: "Joelma part. Marília Mendonça",
  },
  {
    MABH: "4246",
    TENBH: "PERDI VOCÊ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "6745",
    TENBH: "PERDI VOCÊ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30547",
    TENBH: "PERDIDOS EM NÁRNIA",
    TACGIA: "Tribo da Periferia",
  },
  {
    MABH: "1702",
    TENBH: "PERDOA",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "1536",
    TENBH: "PERDOA AMOR",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "33135",
    TENBH: "PERDOAR",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "33008",
    TENBH: "PERERECA SUICIDA",
    TACGIA: "Bonde dos Catchorros",
  },
  {
    MABH: "9268",
    TENBH: "PERFECT",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "18998",
    TENBH: "PERFECT",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "24442",
    TENBH: "PERFECT",
    TACGIA: "One Direction",
  },
  {
    MABH: "18933",
    TENBH: "PERFECT ILLUSION",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "18137",
    TENBH: "PERFECT STRANGERS",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "15973",
    TENBH: "PERFEIÇÃO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "1023",
    TENBH: "PERFUME",
    TACGIA: "Belo",
  },
  {
    MABH: "24017",
    TENBH: "PERFUME",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "33448",
    TENBH: "PERGUNTA BOBA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33857",
    TENBH: "PERGUNTE AO DONO DO BAR",
    TACGIA: "Leonardo",
  },
  {
    MABH: "30863",
    TENBH: "PERGUNTE PRO SEU CORAÇÃO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33559",
    TENBH: "PERGUNTE PRO SEU CORAÇÃO",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "4753",
    TENBH: "PERHAPS LOVE",
    TACGIA: "John Denver & Placido Domingo",
  },
  {
    MABH: "3214",
    TENBH: "PERIGO",
    TACGIA: "Zizi Possi",
  },
  {
    MABH: "9862",
    TENBH: "PERIGOSAS PERUAS",
    TACGIA: "As Frenéticas",
  },
  {
    MABH: "26010",
    TENBH: "PERRO FIEL",
    TACGIA: "Shakira ft. Nicky Jam",
  },
  {
    MABH: "18255",
    TENBH: "PERSONAL JESUS",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "15313",
    TENBH: "PERTO DE MIM",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30205",
    TENBH: "PERTO DE VOCÊ",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "30761",
    TENBH: "PÉS CANSADOS",
    TACGIA: "Sandy",
  },
  {
    MABH: "30393",
    TENBH: "PESADÃO",
    TACGIA: "Iza part. Marcelo Falcão",
  },
  {
    MABH: "33285",
    TENBH: "PESCADOR",
    TACGIA: "Armandinho",
  },
  {
    MABH: "6231",
    TENBH: "PESCADOR DE ILUSÕES",
    TACGIA: "O Rappa",
  },
  {
    MABH: "30710",
    TENBH: "PÉSSIMO NEGÓCIO",
    TACGIA: "Dilsinho",
  },
  {
    MABH: "2520",
    TENBH: "PET SEMATARY",
    TACGIA: "Ramones",
  },
  {
    MABH: "3215",
    TENBH: "PÉTALA",
    TACGIA: "Djavan",
  },
  {
    MABH: "3953",
    TENBH: "PÉTALAS DE ROSAS",
    TACGIA: "Art Popular",
  },
  {
    MABH: "24266",
    TENBH: "PHOTOGRAPH",
    TACGIA: "Nickelback",
  },
  {
    MABH: "24505",
    TENBH: "PHOTOGRAPH",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "4754",
    TENBH: "PHYSICAL",
    TACGIA: "Olivia Newton-John",
  },
  {
    MABH: "26049",
    TENBH: "PHYSICAL",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "18571",
    TENBH: "PHYSICAL ATTRACTION",
    TACGIA: "Madonna",
  },
  {
    MABH: "33558",
    TENBH: "PIANO BAR",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "4601",
    TENBH: "PIANO MAN",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "18201",
    TENBH: "PICTURES OF YOU",
    TACGIA: "The Cure",
  },
  {
    MABH: "18141",
    TENBH: "PIECE OF ME",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "2625",
    TENBH: "PIECE OF MY HEART",
    TACGIA: "Janis Joplin",
  },
  {
    MABH: "18229",
    TENBH: "PIECES OF ME",
    TACGIA: "Ashlee Simpson",
  },
  {
    MABH: "21004",
    TENBH: "PIEL MORENA",
    TACGIA: "Thalia",
  },
  {
    MABH: "24390",
    TENBH: "PILLOWTALK",
    TACGIA: "Zayn",
  },
  {
    MABH: "24080",
    TENBH: "PILLS N POTIONS (EXPLICIT)",
    TACGIA: "Nicki Minaj",
  },
  {
    MABH: "33053",
    TENBH: "PILOTO AUTOMÁTICO",
    TACGIA: "Supercombo",
  },
  {
    MABH: "30206",
    TENBH: "PIMENTA",
    TACGIA: "Valesca Popozuda",
  },
  {
    MABH: "3535",
    TENBH: "PIMPOLHO",
    TACGIA: "Art Popular",
  },
  {
    MABH: "33967",
    TENBH: "PINGA BOA DA FOGO",
    TACGIA: "Antony e Gabriel",
  },
  {
    MABH: "4331",
    TENBH: "PINGA NI MIM",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "30762",
    TENBH: "PINGUÇO",
    TACGIA: "Jefferson Moraes",
  },
  {
    MABH: "18903",
    TENBH: "PINK",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "3216",
    TENBH: "PINTURA ÍNTIMA",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "4208",
    TENBH: "PIOR É TE PERDER",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3893",
    TENBH: "PIPOCA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "33739",
    TENBH: "PIRAÇÃO",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "15186",
    TENBH: "PIRADINHA",
    TACGIA: "Gabriel Valim",
  },
  {
    MABH: "30548",
    TENBH: "PIRATA E TESOURO",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "33557",
    TENBH: "PIRILAMPO",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "30954",
    TENBH: "PISADINHA",
    TACGIA: "Diego e Victo Hugo, Raí Saia Rodada",
  },
  {
    MABH: "30656",
    TENBH: "PISCAR O OLHO",
    TACGIA: "Tiê",
  },
  {
    MABH: "30711",
    TENBH: "PISCININHA AMOR",
    TACGIA: "Whadi Gama",
  },
  {
    MABH: "26092",
    TENBH: "PITY PARTY",
    TACGIA: "Melanie Martinez",
  },
  {
    MABH: "7544",
    TENBH: "PIUÍ ABACAXI",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "3217",
    TENBH: "PLANETA ÁGUA",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "6074",
    TENBH: "PLANETA SONHO",
    TACGIA: "14 Bis",
  },
  {
    MABH: "33154",
    TENBH: "PLANOS IMPOSSÍVEIS",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "33082",
    TENBH: "PLAQUE DE CEM",
    TACGIA: "MC Guimê",
  },
  {
    MABH: "26202",
    TENBH: "PLASTIC HEARTS",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "24348",
    TENBH: "PLAY HARD",
    TACGIA: "David Guetta ft. Ne-Yo & Akon",
  },
  {
    MABH: "18904",
    TENBH: "PLAY ME",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "26018",
    TENBH: "PLAY THAT FUNKY MUSIC",
    TACGIA: "Wild Cherry",
  },
  {
    MABH: "33813",
    TENBH: "PLAYBOY FAZENDEIRO",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "18171",
    TENBH: "PLAYING GOD",
    TACGIA: "Paramore",
  },
  {
    MABH: "4953",
    TENBH: "PLEASE DON'T GO",
    TACGIA: "KC & The Sunshine Band",
  },
  {
    MABH: "18480",
    TENBH: "PLEASE DON'T GO",
    TACGIA: "Double You",
  },
  {
    MABH: "18479",
    TENBH: "PLEASE DON'T GO GIRL",
    TACGIA: "New Kids On The Block",
  },
  {
    MABH: "4755",
    TENBH: "PLEASE FORGIVE ME",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "24866",
    TENBH: "PLEASE ME",
    TACGIA: "Cardi B & Bruno Mars",
  },
  {
    MABH: "4756",
    TENBH: "PLEASE MR. POSTMAN",
    TACGIA: "The Marvelettes",
  },
  {
    MABH: "18486",
    TENBH: "PLUSH",
    TACGIA: "Stone Temple Pilots",
  },
  {
    MABH: "30333",
    TENBH: "PO PEGA",
    TACGIA: "Eric & Matheus",
  },
  {
    MABH: "3219",
    TENBH: "POBRE MENINA",
    TACGIA: "Leno e Lilian",
  },
  {
    MABH: "9863",
    TENBH: "PODE CHORAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "1436",
    TENBH: "PODE IR EMBORA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33556",
    TENBH: "PODE ISSO PRODUÇÃO",
    TACGIA: "João Neto e Frederico & Henrique e Juliano",
  },
  {
    MABH: "33812",
    TENBH: "PODE OU NÃO PODE",
    TACGIA: "Zé Ricardo e Thiago",
  },
  {
    MABH: "3678",
    TENBH: "PODE SER PRA VALER",
    TACGIA: "Chitãozinho e Xororó",
  },
  {
    MABH: "33271",
    TENBH: "PODEM ATÉ NOS SEPARAR",
    TACGIA: "Banda Musa do Calypso",
  },
  {
    MABH: "30024",
    TENBH: "PODER DA CRIAÇÃO",
    TACGIA: "Diogo Nogueira",
  },
  {
    MABH: "3220",
    TENBH: "PODEROSA",
    TACGIA: "Banda Brasil",
  },
  {
    MABH: "33615",
    TENBH: "PODEROSA",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "31045",
    TENBH: "PODEROSO DEUS",
    TACGIA: "Pastor Antônio Cirilo",
  },
  {
    MABH: "33916",
    TENBH: "PODIA SER NÓS DOIS",
    TACGIA: "Kleo Dibah e Rafael part. Maiara e Maraisa",
  },
  {
    MABH: "6305",
    TENBH: "PODRES PODERES",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30466",
    TENBH: "PÕE NO 120",
    TACGIA: "Conrado e Aleksandro part. Marco Brasil Filho ft. DJ Kevin",
  },
  {
    MABH: "33286",
    TENBH: "POEIRA DA LUA",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "30549",
    TENBH: "POEIRA NO VENTO",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "15266",
    TENBH: "POEMA",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "18572",
    TENBH: "POISON",
    TACGIA: "Alice Cooper",
  },
  {
    MABH: "18478",
    TENBH: "POISON ARROW",
    TACGIA: "ABC",
  },
  {
    MABH: "2509",
    TENBH: "POKER FACE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "3679",
    TENBH: "POLÍCIA",
    TACGIA: "Titãs",
  },
  {
    MABH: "24133",
    TENBH: "POMPEII",
    TACGIA: "Bastille",
  },
  {
    MABH: "9515",
    TENBH: "PONTES INDESTRUTÍVEIS",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "30207",
    TENBH: "PONTO FINAL",
    TACGIA: "Vicente Nery",
  },
  {
    MABH: "33701",
    TENBH: "PONTO FRACO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "33123",
    TENBH: "PONTO G",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "9154",
    TENBH: "POOR SIDE OF TOWN",
    TACGIA: "Johnny Rivers",
  },
  {
    MABH: "18905",
    TENBH: "POP",
    TACGIA: "N' Sync",
  },
  {
    MABH: "33702",
    TENBH: "POP 100",
    TACGIA: "Rei da Cacimbinha",
  },
  {
    MABH: "6964",
    TENBH: "POP STAR",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "24412",
    TENBH: "POP STYLE",
    TACGIA: "Drake ft. The Thronew, Kanye West & Jay-Z",
  },
  {
    MABH: "3590",
    TENBH: "POR AMOR TE DEIXO IR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33406",
    TENBH: "POR BAIXO OU POR CIM",
    TACGIA: "Zé Henrique e Gabriel & Jorge e Mateus",
  },
  {
    MABH: "6630",
    TENBH: "POR CAUSA DE VOCÊ",
    TACGIA: "KLB",
  },
  {
    MABH: "4168",
    TENBH: "POR ENQUANTO",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "3994",
    TENBH: "POR ISSO CORRO DEMAIS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "7216",
    TENBH: "POR MAIS QUE EU TENTE",
    TACGIA: "Marjorie Estiano",
  },
  {
    MABH: "6965",
    TENBH: "POR ONDE ANDEI",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "30179",
    TENBH: "POR QUE A GENTE É ASSIM",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "6967",
    TENBH: "POR QUE CHORAS?",
    TACGIA: "Bruno & Marrone part. Banda Calypso",
  },
  {
    MABH: "6833",
    TENBH: "POR TÃO POUCO",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "6152",
    TENBH: "POR TE AMAR ASSIM",
    TACGIA: "Marlon e Maicon",
  },
  {
    MABH: "7217",
    TENBH: "POR TE AMAR DEMAIS",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33703",
    TENBH: "POR TE AMAR DEMAIS",
    TACGIA: "Bonde Sertanejo",
  },
  {
    MABH: "30657",
    TENBH: "POR TRÁS DA MAQUIAGEM",
    TACGIA: "Michel Teló part. Marília Mendonça",
  },
  {
    MABH: "30394",
    TENBH: "POR UM GOLE A MAIS",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6232",
    TENBH: "POR UM MINUTO (ACÚSTICO)",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4369",
    TENBH: "POR VOCÊ",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "3719",
    TENBH: "PORQUE BRIGAMOS",
    TACGIA: "Diana",
  },
  {
    MABH: "1227",
    TENBH: "PORQUE EU SEI QUE É AMOR",
    TACGIA: "Titãs",
  },
  {
    MABH: "33473",
    TENBH: "PORQUE HOMEM NÃO CHORA",
    TACGIA: "Pablo",
  },
  {
    MABH: "6709",
    TENBH: "PORTA ABERTA",
    TACGIA: "Luka",
  },
  {
    MABH: "33555",
    TENBH: "PORTA DO MUNDO",
    TACGIA: "Peão Carreiro & Zé Paulo",
  },
  {
    MABH: "6710",
    TENBH: "PORTA RETRATO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33083",
    TENBH: "PORTO ALEGRE",
    TACGIA: "Fresno",
  },
  {
    MABH: "3894",
    TENBH: "PORTO SOLIDÃO",
    TACGIA: "Jessé",
  },
  {
    MABH: "26138",
    TENBH: "POSITIONS",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "4008",
    TENBH: "POSSO ATÉ ME APAIXONAR",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33704",
    TENBH: "POSSO SER",
    TACGIA: "Lexa",
  },
  {
    MABH: "33287",
    TENBH: "POSTAL",
    TACGIA: "Pedro Mariano",
  },
  {
    MABH: "18312",
    TENBH: "POUND THE ALARM",
    TACGIA: "Nicki Minaj",
  },
  {
    MABH: "4091",
    TENBH: "PÔXA",
    TACGIA: "Gilson de Souza",
  },
  {
    MABH: "3221",
    TENBH: "PRA COMEÇAR",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "15744",
    TENBH: "PRA CURAR ESSA DOR (HEAL THE PAIN)",
    TACGIA: "Fernanda Takai e Samuel Rosa",
  },
  {
    MABH: "3809",
    TENBH: "PRA DIZER ADEUS",
    TACGIA: "Titãs",
  },
  {
    MABH: "4169",
    TENBH: "PRA FALAR A VERDADE",
    TACGIA: "Daniel",
  },
  {
    MABH: "15712",
    TENBH: "PRA FRENTE",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30550",
    TENBH: "PRA FRENTE BRASIL (COPA 1970)",
    TACGIA: "Hino de Futebol",
  },
  {
    MABH: "30938",
    TENBH: "PRA JUNTAR",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "33705",
    TENBH: "PRA LAVAR",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "30658",
    TENBH: "PRA LEVANTAR POEIRA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "7418",
    TENBH: "PRA MACHUCAR MEU CORAÇÃO",
    TACGIA: "João Gilberto",
  },
  {
    MABH: "33260",
    TENBH: "PRA ME PROVOCAR",
    TACGIA: "MC Koringa",
  },
  {
    MABH: "30995",
    TENBH: "PRA ME REFAZER",
    TACGIA: "Sandy ft. ANAVITÓRIA",
  },
  {
    MABH: "6671",
    TENBH: "PRA MUDAR MINHA VIDA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3968",
    TENBH: "PRA NAO DIZER QUE NAO FALEI DAS FLORES",
    TACGIA: "Geraldo Vandre",
  },
  {
    MABH: "9320",
    TENBH: "PRA NÃO MORRER DE AMOR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4049",
    TENBH: "PRA NÃO PENSAR EM VOCÊ",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33183",
    TENBH: "PRA QUE ENTENDER",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33522",
    TENBH: "PRA QUE VIVER NESSE MUNDO?",
    TACGIA: "Thiaguinho part. Rodriguinho",
  },
  {
    MABH: "33915",
    TENBH: "PRA REZAR NINGUÉM ME CHAMA",
    TACGIA: "Zé Neto e Cristiano part. Humberto e Ronaldo",
  },
  {
    MABH: "6870",
    TENBH: "PRA RUA ME LEVAR",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "30208",
    TENBH: "PRA SEMPRE COM VOCÊ",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33195",
    TENBH: "PRA SEMPRE EM MIM",
    TACGIA: "Geovany Reis e Fabricio",
  },
  {
    MABH: "6306",
    TENBH: "PRA SEMPRE EM MIM (YOU NEEDED ME)",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6307",
    TENBH: "PRA SEMPRE VOU TE AMAR",
    TACGIA: "Robinson Monteiro",
  },
  {
    MABH: "30033",
    TENBH: "PRA SER",
    TACGIA: "Esteban",
  },
  {
    MABH: "30952",
    TENBH: "PRA SER FELIZ",
    TACGIA: "Daniel",
  },
  {
    MABH: "3969",
    TENBH: "PRA SER SINCERO",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "15148",
    TENBH: "PRA SONHAR",
    TACGIA: "Marcelo Jeneci",
  },
  {
    MABH: "7223",
    TENBH: "PRA TE ESQUECER",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "15314",
    TENBH: "PRA TE FAZER LEMBRAR",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "33914",
    TENBH: "PRA TER VOCÊ AQUI",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "30932",
    TENBH: "PRA VER SE COLA",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "4128",
    TENBH: "PRA VOCE",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "1705",
    TENBH: "PRA VOCÊ",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "15587",
    TENBH: "PRA VOCÊ",
    TACGIA: "Onze:20",
  },
  {
    MABH: "1437",
    TENBH: "PRA VOCÊ GUARDEI O AMOR",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "7680",
    TENBH: "PRAIA NUA",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "7225",
    TENBH: "PRAIEIRO",
    TACGIA: "Jammil & Uma Noites",
  },
  {
    MABH: "33706",
    TENBH: "PRATO DO DIA",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "24328",
    TENBH: "PRAY TO GOD",
    TACGIA: "Calvin Harris ft. Haim",
  },
  {
    MABH: "30883",
    TENBH: "PRAZER POR PRAZER",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "18801",
    TENBH: "PRECIOUS",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "30396",
    TENBH: "PRECISO AMAR DE NOVO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6271",
    TENBH: "PRECISO APRENDER A SER SÓ",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "3443",
    TENBH: "PRECISO DE VOCÊ",
    TACGIA: "Netinho",
  },
  {
    MABH: "4129",
    TENBH: "PRECISO DIZER QUE TE AMO",
    TACGIA: "Leo Jaime",
  },
  {
    MABH: "15783",
    TENBH: "PRECISO LHE ENCONTRAR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "9519",
    TENBH: "PRECISO SER AMADO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3537",
    TENBH: "PRECISO TER ALGUÉM",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "18410",
    TENBH: "PREDICTABLE",
    TACGIA: "Good Charlotte",
  },
  {
    MABH: "30906",
    TENBH: "PREFÁCIO",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "3383",
    TENBH: "PREFIXO DE VERÃO",
    TACGIA: "Banda Mel",
  },
  {
    MABH: "33096",
    TENBH: "PRELIMINARES",
    TACGIA: "Mumuzinho",
  },
  {
    MABH: "4092",
    TENBH: "PRESENTE DE UM BEIJA-FLOR",
    TACGIA: "Natiruts",
  },
  {
    MABH: "33288",
    TENBH: "PRESENTE PASSADO",
    TACGIA: "Isabella Taviani",
  },
  {
    MABH: "33752",
    TENBH: "PRESTO POUCO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "3485",
    TENBH: "PRETA",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "33107",
    TENBH: "PRETA PERFEITA",
    TACGIA: "Lucas e Orelha",
  },
  {
    MABH: "33981",
    TENBH: "PRETINHA VOU TE CONFESSAR",
    TACGIA: "Nego do Borel",
  },
  {
    MABH: "30763",
    TENBH: "PRETINHO TIPO A",
    TACGIA: "Léo Santana e Thiaguinho",
  },
  {
    MABH: "33707",
    TENBH: "PRETO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "24122",
    TENBH: "PRETTY FLY (FOR A WHITE GUY)",
    TACGIA: "Offspring",
  },
  {
    MABH: "4757",
    TENBH: "PRETTY WOMAN",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "33289",
    TENBH: "PREVISÃO DO TEMPO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "24025",
    TENBH: "PRICE TAG",
    TACGIA: "Jessie J",
  },
  {
    MABH: "4954",
    TENBH: "PRIDE (IN THE NAME OF LOVE)",
    TACGIA: "U2",
  },
  {
    MABH: "24765",
    TENBH: "PRIMADONNA GIRL",
    TACGIA: "Marina and The Diamonds",
  },
  {
    MABH: "3680",
    TENBH: "PRIMAVERA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "4408",
    TENBH: "PRIMAVERA",
    TACGIA: "Los Hermanos",
  },
  {
    MABH: "33497",
    TENBH: "PRIMEIRA ESSÊNCIA",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "30553",
    TENBH: "PRIMEIRO AMOR",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "3720",
    TENBH: "PRIMEIRO BEIJO",
    TACGIA: "Grupo Malícia",
  },
  {
    MABH: "30132",
    TENBH: "PRIMEIRO BEIJO",
    TACGIA: "Art Popular",
  },
  {
    MABH: "6028",
    TENBH: "PRIMEIROS ERROS",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "3856",
    TENBH: "PRINCESA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "15395",
    TENBH: "PRINCESINHA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "24177",
    TENBH: "PRINCESS OF CHINA",
    TACGIA: "Coldplay ft. Rihanna",
  },
  {
    MABH: "30397",
    TENBH: "PRINTOU NOSSA INTIMIDADE",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "33184",
    TENBH: "PRISAO SEM GRADES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "5957",
    TENBH: "PRIVATE DANCER",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "4955",
    TENBH: "PRIVATE EMOTION",
    TACGIA: "Ricky Martin ft. Meja",
  },
  {
    MABH: "24964",
    TENBH: "PRIVATE EYES",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "3223",
    TENBH: "PRO DIA NASCER FELIZ",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "24006",
    TENBH: "PROBLEM",
    TACGIA: "Ariana Grande ft. Iggy Azalea",
  },
  {
    MABH: "30659",
    TENBH: "PROBLEMA SEU",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "30660",
    TENBH: "PROCURANDO TU",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "6431",
    TENBH: "PROGRAMA DE FIM DE SEMANA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4291",
    TENBH: "PROIBIDA PRA MIM",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33411",
    TENBH: "PROIBIDA PRA MIM",
    TACGIA: "Zeca Baleiro",
  },
  {
    MABH: "15267",
    TENBH: "PROMESSA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33352",
    TENBH: "PROMESSA",
    TACGIA: "Carreiro e Capataz",
  },
  {
    MABH: "33466",
    TENBH: "PROMETE",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "6672",
    TENBH: "PROMETIDA",
    TACGIA: "Br'oz",
  },
  {
    MABH: "5958",
    TENBH: "PROMISCOUS GIRL",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "18655",
    TENBH: "PROMISES",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "24960",
    TENBH: "PROMISSES",
    TACGIA: "Calvin Harris",
  },
  {
    MABH: "30712",
    TENBH: "PRONTA PRA TRAIR",
    TACGIA: "Yasmin Santos",
  },
  {
    MABH: "33811",
    TENBH: "PRONTO FALEI",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "30554",
    TENBH: "PROPAGANDA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "4209",
    TENBH: "PROPOSTA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30209",
    TENBH: "PROPOSTA INDECENTE",
    TACGIA: "Cheiro de Amor part. Lucas Luccos",
  },
  {
    MABH: "30452",
    TENBH: "PROPRIETÁRIO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "4602",
    TENBH: "PROUD MARY",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "30865",
    TENBH: "PROVA  QUE ME AMA (GALANTEADOR)",
    TACGIA: "Saia Rodada",
  },
  {
    MABH: "30398",
    TENBH: "PSICOPATA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "4094",
    TENBH: "PSIU, PSIU",
    TACGIA: "Companhia do Pagode",
  },
  {
    MABH: "18689",
    TENBH: "PSYCHO KILLER",
    TACGIA: "Talking Heads",
  },
  {
    MABH: "18177",
    TENBH: "PSYCHOSOCIAL",
    TACGIA: "Slipknot",
  },
  {
    MABH: "6153",
    TENBH: "PUDERA",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "4648",
    TENBH: "PUFF, THE MAGIC DRAGON",
    TACGIA: "Peter, Paul and Mary",
  },
  {
    MABH: "31015",
    TENBH: "PULEI NA PISCINA",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "30030",
    TENBH: "PULSOS",
    TACGIA: "Pitty",
  },
  {
    MABH: "18238",
    TENBH: "PUMP IT",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "24835",
    TENBH: "PUMP UP THE JAM",
    TACGIA: "Technotronic",
  },
  {
    MABH: "24227",
    TENBH: "PUMPED UP KICKS",
    TACGIA: "Foster the People",
  },
  {
    MABH: "30821",
    TENBH: "PUPILA",
    TACGIA: "Anavitória e Victor Kley",
  },
  {
    MABH: "4758",
    TENBH: "PUPPY LOVE",
    TACGIA: "Paul Anka",
  },
  {
    MABH: "3592",
    TENBH: "PURA EMOÇÃO",
    TACGIA: "Grupo Raça",
  },
  {
    MABH: "3896",
    TENBH: "PURA EMOÇÃO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "18477",
    TENBH: "PURE MOURNING",
    TACGIA: "Placebo",
  },
  {
    MABH: "4010",
    TENBH: "PURO ÊXTASE",
    TACGIA: "Barão Vermelho",
  },
  {
    MABH: "18690",
    TENBH: "PURPLE HAZE",
    TACGIA: "Jimi Hendrix",
  },
  {
    MABH: "18573",
    TENBH: "PURPLE RAIN",
    TACGIA: "Prince",
  },
  {
    MABH: "24766",
    TENBH: "PUSH",
    TACGIA: "Matchbox Twenty",
  },
  {
    MABH: "18029",
    TENBH: "PUSH IT",
    TACGIA: "Garbage",
  },
  {
    MABH: "9155",
    TENBH: "PUT A LITTLE LOVE IN YOUR HEART",
    TACGIA: "Annie Lennox & Al Green",
  },
  {
    MABH: "18053",
    TENBH: "PUT YOUR RECORDS ON",
    TACGIA: "Corinne Bailey Rae",
  },
  {
    MABH: "30011",
    TENBH: "PUXA, AGARRA E BEIJA",
    TACGIA: "Turma do Pagode part. Aviões do Forró",
  },
  {
    MABH: "6747",
    TENBH: "QUAL É",
    TACGIA: "Marcelo D2",
  },
  {
    MABH: "30713",
    TENBH: "QUALIDADE DE VIDA",
    TACGIA: "Simone e Simaria part. Ludmilla",
  },
  {
    MABH: "1795",
    TENBH: "QUALQUER DIA DESSES",
    TACGIA: "Alcione",
  },
  {
    MABH: "1839",
    TENBH: "QUALQUER JEITO",
    TACGIA: "Kátia",
  },
  {
    MABH: "3930",
    TENBH: "QUANDO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30796",
    TENBH: "QUANDO A BAD BATER",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "7227",
    TENBH: "QUANDO A CHUVA PASSAR",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "4170",
    TENBH: "QUANDO A GENTE AMA",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "33102",
    TENBH: "QUANDO AMANHECER",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "3226",
    TENBH: "QUANDO CHOVE",
    TACGIA: "Patrícia Marx",
  },
  {
    MABH: "33554",
    TENBH: "QUANDO DEUS QUER",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "33360",
    TENBH: "QUANDO ELA QUER",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "2431",
    TENBH: "QUANDO EU CHORAR",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "2873",
    TENBH: "QUANDO EU TE ENCONTRAR",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "3227",
    TENBH: "QUANDO GIRA O MUNDO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "33108",
    TENBH: "QUANDO O DJ MANDAR",
    TACGIA: "Dennis DJ & Terapí e Neblina",
  },
  {
    MABH: "33620",
    TENBH: "QUANDO O MEL É BOM",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "3228",
    TENBH: "QUANDO O SOL BATER NA JANELA DO SEU QUARTO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "6587",
    TENBH: "QUANDO O SOL SE FOR",
    TACGIA: "Detonautas",
  },
  {
    MABH: "33405",
    TENBH: "QUANDO O TELEFONE TOCA",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "3931",
    TENBH: "QUANDO UM GRANDE AMOR SE FAZ",
    TACGIA: "Cleiton e Camargo",
  },
  {
    MABH: "4410",
    TENBH: "QUANDO VOCÊ ME BEIJA",
    TACGIA: "Art Popular",
  },
  {
    MABH: "15239",
    TENBH: "QUANDO VOCÊ SOME",
    TACGIA: "Victor & Leo & Zezé Di Camargo e Luciano",
  },
  {
    MABH: "33523",
    TENBH: "QUÃO GRANDE É O MEU DEUS",
    TACGIA: "Soraya Moraes",
  },
  {
    MABH: "30764",
    TENBH: "QUARTA CADEIRA",
    TACGIA: "Matheus e Kauan ft. Jorge e Mateus",
  },
  {
    MABH: "30555",
    TENBH: "QUASE",
    TACGIA: "Cleber e Cauan",
  },
  {
    MABH: "33492",
    TENBH: "QUASE ME CHAMOU DE AMOR",
    TACGIA: "Pablo",
  },
  {
    MABH: "3229",
    TENBH: "QUASE SEM QUERER",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "30066",
    TENBH: "QUASE UM CASAL",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "4454",
    TENBH: "QUASE UM SEGUNDO",
    TACGIA: "Cazuza",
  },
  {
    MABH: "33913",
    TENBH: "QUATRO E QUINZE",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "30012",
    TENBH: "QUATRO ESTAÇÕES",
    TACGIA: "Vânia Abreu",
  },
  {
    MABH: "6432",
    TENBH: "QUATRO SEMANAS DE AMOR",
    TACGIA: "Luan e Vanessa",
  },
  {
    MABH: "6505",
    TENBH: "QUATRO VEZES VOCÊ",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "33911",
    TENBH: "QUE BAR QUE CÊ TÁ",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "30399",
    TENBH: "QUE BICHO QUE É",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "2466",
    TENBH: "QUE BOM QUE VOCÊ CHEGOU",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "1709",
    TENBH: "QUE DÁ VONTADE, DÁ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "4455",
    TENBH: "QUE ERA EU",
    TACGIA: "Daniel",
  },
  {
    MABH: "33400",
    TENBH: "QUE ISSO NOVINHA",
    TACGIA: "Yago e Juliano",
  },
  {
    MABH: "33494",
    TENBH: "QUE MAL TE FIZ EU",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "3721",
    TENBH: "QUE MARAVILHA",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "6473",
    TENBH: "QUE NEM MARÉ",
    TACGIA: "Jorge Vercillo",
  },
  {
    MABH: "3230",
    TENBH: "QUE PAÍS É ESSE",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "30339",
    TENBH: "QUE PENA",
    TACGIA: "Felipe e Falcão",
  },
  {
    MABH: "3722",
    TENBH: "QUE PENA (ELA JÁ NÃO GOSTA MAIS DE MIM)",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "33810",
    TENBH: "QUE PENA QUE ACABOU",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "7229",
    TENBH: "QUE PESCAR QUE NADA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4130",
    TENBH: "QUE QUERES TU DE MIM",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "3232",
    TENBH: "QUE SE CHAMA O AMOR",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "1710",
    TENBH: "QUE SE DANE O MUNDO",
    TACGIA: "Adair Cardoso",
  },
  {
    MABH: "9521",
    TENBH: "QUE SE DANEM OS NÓS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "4545",
    TENBH: "QUE SERA, SERA",
    TACGIA: "Doris Day",
  },
  {
    MABH: "30210",
    TENBH: "QUE SORTE A NOSSA",
    TACGIA: "Paula Mattos",
  },
  {
    MABH: "33524",
    TENBH: "QUE SORTE A NOSSA",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "30467",
    TENBH: "QUE TIRO FOI ESSE",
    TACGIA: "Jojo Maronttinni",
  },
  {
    MABH: "6075",
    TENBH: "QUE VES",
    TACGIA: "Tihuana",
  },
  {
    MABH: "30067",
    TENBH: "QUEBRA CABEÇA",
    TACGIA: "Hungria Hip Hop part. Lucas Lucco",
  },
  {
    MABH: "33708",
    TENBH: "QUEBRA TOPETE",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "30372",
    TENBH: "QUEBRE AS CORRENTES",
    TACGIA: "Fresno",
  },
  {
    MABH: "33709",
    TENBH: "QUEBROU A CARA",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "33114",
    TENBH: "QUEDA LIVRE",
    TACGIA: "Dead Fish",
  },
  {
    MABH: "24767",
    TENBH: "QUEENDOM",
    TACGIA: "Aurora",
  },
  {
    MABH: "30468",
    TENBH: "QUEM AGUENTA",
    TACGIA: "Jads e Jadson",
  },
  {
    MABH: "33710",
    TENBH: "QUEM AMA",
    TACGIA: "Grupo Raça",
  },
  {
    MABH: "1366",
    TENBH: "QUEM AMA CUIDA",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "30136",
    TENBH: "QUEM AMA CUIDA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "33166",
    TENBH: "QUEM AMA SEMPRE ENTENDE",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33393",
    TENBH: "QUEM BEBE VIVE MENOS (ESTRESSADO)",
    TACGIA: "Vítor Hugo",
  },
  {
    MABH: "3233",
    TENBH: "QUEM DE NÓS",
    TACGIA: "Grupo Pirraça",
  },
  {
    MABH: "6109",
    TENBH: "QUEM DE NÓS DOIS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "7424",
    TENBH: "QUEM DIRIA, HEIN?",
    TACGIA: "Daniel",
  },
  {
    MABH: "6272",
    TENBH: "QUEM DISSE QUE EU ESQUECI",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33553",
    TENBH: "QUEM DISSE QUE O AMOR PODE ACABAR?",
    TACGIA: "Catedral",
  },
  {
    MABH: "4370",
    TENBH: "QUEM É",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "33177",
    TENBH: "QUEM É ELA",
    TACGIA: "Marco e Mário",
  },
  {
    MABH: "7684",
    TENBH: "QUEM É ELA?",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "7685",
    TENBH: "QUEM É O GOSTOSÃO DAQUI?",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "15785",
    TENBH: "QUEM É?",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "30556",
    TENBH: "QUEM ENSINOU FUI EU",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "30661",
    TENBH: "QUEM ME DERA",
    TACGIA: "Márcia Fellipe & Jerry Smith",
  },
  {
    MABH: "30211",
    TENBH: "QUEM ME VIU MENTIU",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "15349",
    TENBH: "QUEM NÃO BEIJA BEBE",
    TACGIA: "Fred e Gustavo",
  },
  {
    MABH: "30662",
    TENBH: "QUEM PEGOU, PEGOU",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "6971",
    TENBH: "QUEM SABE ISSO QUER DIZER AMOR",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "30843",
    TENBH: "QUEM SERÁ ESSA MULHER",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30268",
    TENBH: "QUEM SERÁ SEU OUTRO AMOR",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "6872",
    TENBH: "QUEM TE VIU QUEM TE VÊ",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "33124",
    TENBH: "QUEM TEM SORTE É SORTERO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30083",
    TENBH: "QUEM TEM TEM MEDO",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "30040",
    TENBH: "QUEM VAI LEMBRAR",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30213",
    TENBH: "QUEM VÊ CARA NÃO VÊ CORAÇÃO",
    TACGIA: "Paula Mattos",
  },
  {
    MABH: "6972",
    TENBH: "QUER CASAR COMIGO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30714",
    TENBH: "QUER MAIS?",
    TACGIA: "MC Pocahontas e MC Mirella",
  },
  {
    MABH: "30400",
    TENBH: "QUER NAMORAR COMIGO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33711",
    TENBH: "QUER SABER",
    TACGIA: "Emicida",
  },
  {
    MABH: "3384",
    TENBH: "QUEREM MEU SANGUE",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "33502",
    TENBH: "QUERO AGRADECER",
    TACGIA: "André Valadão",
  },
  {
    MABH: "4494",
    TENBH: "QUERO COLO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30663",
    TENBH: "QUERO QUE TU VÁ",
    TACGIA: "Ananda, Joker Beats",
  },
  {
    MABH: "3235",
    TENBH: "QUERO QUE VÁ TUDO PRO INFERNO",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "1711",
    TENBH: "QUERO SIM",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "9524",
    TENBH: "QUERO TE ENCONTRAR",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "33219",
    TENBH: "QUERO TE PROVAR",
    TACGIA: "Dennis DJ & Naldo & Mc Koringa & Mr. Catra",
  },
  {
    MABH: "2875",
    TENBH: "QUERO TODA NOITE",
    TACGIA: "Fiuk",
  },
  {
    MABH: "31043",
    TENBH: "QUERO VER É ME ESQUECER",
    TACGIA: "Os Barões da Pisadinha ft. Jorge",
  },
  {
    MABH: "15038",
    TENBH: "QUERO VER VOCÊ FELIZ (MEU FILHO DEUS QUE LHE PROTEJA)",
    TACGIA: "Paulo Sérgio",
  },
  {
    MABH: "30214",
    TENBH: "QUI NEM JILÓ",
    TACGIA: "Luiz Gonzaga",
  },
  {
    MABH: "33162",
    TENBH: "QUÍMICA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "1713",
    TENBH: "QUÍMICA DO AMOR",
    TACGIA: "Luan Santana & Ivete Sangalo",
  },
  {
    MABH: "33290",
    TENBH: "QUINTA-FEIRA",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "4956",
    TENBH: "QUIT PLAYING GAMES (WITH MY HEART)",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "30215",
    TENBH: "QUITEMONOS LA ROPA",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "18906",
    TENBH: "R U MINE",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "30469",
    TENBH: "RABIOLA",
    TACGIA: "MC Kevinho",
  },
  {
    MABH: "26118",
    TENBH: "RABIOSA",
    TACGIA: "Shakira ft. Pitbull",
  },
  {
    MABH: "24018",
    TENBH: "RADAR",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "30044",
    TENBH: "RADINHO DO SEU ZÉ",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "18334",
    TENBH: "RADIO GA-GA",
    TACGIA: "Queen",
  },
  {
    MABH: "4334",
    TENBH: "RÁDIO PIRATA",
    TACGIA: "RPM",
  },
  {
    MABH: "24324",
    TENBH: "RADIOACTIVE",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "6507",
    TENBH: "RAGATANGA (ASEREJÉ)",
    TACGIA: "Rouge",
  },
  {
    MABH: "4292",
    TENBH: "RAIMUNDA",
    TACGIA: "Gang do Samba",
  },
  {
    MABH: "18907",
    TENBH: "RAIN",
    TACGIA: "Madonna",
  },
  {
    MABH: "26164",
    TENBH: "RAIN ON ME",
    TACGIA: "Lady Gaga & Ariana Grande",
  },
  {
    MABH: "4546",
    TENBH: "RAINDROPS KEEP FALLING ON MY HEAD",
    TACGIA: "B. J.Thomas",
  },
  {
    MABH: "18476",
    TENBH: "RAINING BLOOD",
    TACGIA: "Slayer",
  },
  {
    MABH: "9156",
    TENBH: "RAINY DAYS AND MONDAYS",
    TACGIA: "Carpenters",
  },
  {
    MABH: "15427",
    TENBH: "RAIZ DE TODO BEM",
    TACGIA: "Saulo Fernandes",
  },
  {
    MABH: "3767",
    TENBH: "RALANDO O TCHAN (DANÇA DO VENTRE)",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "24768",
    TENBH: "RAMBLE ON",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "30510",
    TENBH: "RAP DA FELICIDADE",
    TACGIA: "MC Cidinho e Doca",
  },
  {
    MABH: "33619",
    TENBH: "RAP DO SALGUEIRO",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "30507",
    TENBH: "RAP DO SILVA",
    TACGIA: "MC Bob Bum",
  },
  {
    MABH: "30401",
    TENBH: "RAPADURA",
    TACGIA: "André e Adriano",
  },
  {
    MABH: "30664",
    TENBH: "RAPARIGA NÃO",
    TACGIA: "João Neto e Frederico part. Simone e Simaria",
  },
  {
    MABH: "18742",
    TENBH: "RAPE ME",
    TACGIA: "Nirvana",
  },
  {
    MABH: "3635",
    TENBH: "RAPUNZEL",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "30188",
    TENBH: "RARIDADE",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "33452",
    TENBH: "RARIDADE",
    TACGIA: "Anderson Freire",
  },
  {
    MABH: "30665",
    TENBH: "RASPÃO",
    TACGIA: "Henrique e Diego ft. Simone e Simaria",
  },
  {
    MABH: "26032",
    TENBH: "RASPUTIN",
    TACGIA: "Boney M",
  },
  {
    MABH: "7689",
    TENBH: "RASTROS NA AREIA",
    TACGIA: "Duduca e Dalvan",
  },
  {
    MABH: "24033",
    TENBH: "RATHER BE",
    TACGIA: "Clean Bandit ft. Jess Glynne",
  },
  {
    MABH: "33809",
    TENBH: "RATO",
    TACGIA: "Palavra Cantada",
  },
  {
    MABH: "18138",
    TENBH: "RATTLE THAT LOCK",
    TACGIA: "David Gilmour",
  },
  {
    MABH: "9329",
    TENBH: "RAZÕES E EMOÇÕES",
    TACGIA: "NX Zero",
  },
  {
    MABH: "4957",
    TENBH: "REACH",
    TACGIA: "Gloria Estefan",
  },
  {
    MABH: "9157",
    TENBH: "REACH OUT I'LL BE THERE",
    TACGIA: "Four Tops",
  },
  {
    MABH: "9049",
    TENBH: "READY TO TAKE A CHANCE AGAIN",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "6974",
    TENBH: "REALCE",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "33299",
    TENBH: "REALEJO",
    TACGIA: "O Teatro Mágico",
  },
  {
    MABH: "24478",
    TENBH: "REALITI",
    TACGIA: "Grimes",
  },
  {
    MABH: "24174",
    TENBH: "REALIZE",
    TACGIA: "Colbie Caillat",
  },
  {
    MABH: "24188",
    TENBH: "REALLY DON'T CARE",
    TACGIA: "Demi Lovato & Cher Lloyd",
  },
  {
    MABH: "18475",
    TENBH: "REALLY SAYING SOMETHING",
    TACGIA: "Bananarama",
  },
  {
    MABH: "18745",
    TENBH: "REASONS",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "9231",
    TENBH: "REBEL YELL",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "24836",
    TENBH: "REBELDE",
    TACGIA: "RBD",
  },
  {
    MABH: "33982",
    TENBH: "REBELDE E ABUSADA",
    TACGIA: "Tati Zaqui",
  },
  {
    MABH: "33623",
    TENBH: "REBELDE SEM CAUSA",
    TACGIA: "Ultraje a Rigor",
  },
  {
    MABH: "30824",
    TENBH: "REBIRTH",
    TACGIA: "Angra",
  },
  {
    MABH: "1398",
    TENBH: "REBOLATION",
    TACGIA: "Parangolé",
  },
  {
    MABH: "6235",
    TENBH: "RECADO (MEU NAMORADO)",
    TACGIA: "Joanna",
  },
  {
    MABH: "3487",
    TENBH: "RECADO À MINHA AMADA",
    TACGIA: "Katinguelê",
  },
  {
    MABH: "30402",
    TENBH: "RECAÍDA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33131",
    TENBH: "RECAÍDAS",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30989",
    TENBH: "RECAIREI",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "31005",
    TENBH: "RECAIREI",
    TACGIA: "Unha Pintada",
  },
  {
    MABH: "33103",
    TENBH: "RECEITA DE AMAR",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "33743",
    TENBH: "RECÉM ABANDONADO",
    TACGIA: "Carreiro e Capataz",
  },
  {
    MABH: "9527",
    TENBH: "RECOMEÇAR",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "33552",
    TENBH: "RECOMPENSA",
    TACGIA: "Cassiane",
  },
  {
    MABH: "30963",
    TENBH: "RECONHECEMOS",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "9868",
    TENBH: "RECONVEXO",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "24140",
    TENBH: "RED LIGHTS",
    TACGIA: "Tiesto",
  },
  {
    MABH: "24941",
    TENBH: "RED RED WINE",
    TACGIA: "UB40",
  },
  {
    MABH: "3768",
    TENBH: "RÉDEAS DO POSSANTE",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "9050",
    TENBH: "REDEMPTION SONG",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "33092",
    TENBH: "REDENÇAO (ACÚSTICO)",
    TACGIA: "Fresno",
  },
  {
    MABH: "6976",
    TENBH: "REFAZENDA",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "15240",
    TENBH: "REFÉM",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30470",
    TENBH: "REFÉM",
    TACGIA: "Dilsinho",
  },
  {
    MABH: "3971",
    TENBH: "REFÉM DO CORAÇÃO",
    TACGIA: "Soweto",
  },
  {
    MABH: "4839",
    TENBH: "REFLECTIONS OF MY LIFE",
    TACGIA: "The Marmalade",
  },
  {
    MABH: "3488",
    TENBH: "REFRÃO DE BOLERO",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "31011",
    TENBH: "REGGAE DAS TRAMANDA",
    TACGIA: "Armandinho",
  },
  {
    MABH: "30557",
    TENBH: "REGGAE IN ROÇA",
    TACGIA: "Zezé Di Camargo & Luciano part. Otávio Augusto e Gabriel",
  },
  {
    MABH: "18760",
    TENBH: "REGGAE NIGHTS",
    TACGIA: "Jimmy Cliff",
  },
  {
    MABH: "9330",
    TENBH: "REGGAE POWER",
    TACGIA: "Natiruts",
  },
  {
    MABH: "33753",
    TENBH: "REGGAE TOWN",
    TACGIA: "Jota Quest part. Natiruts",
  },
  {
    MABH: "33983",
    TENBH: "REGIME FECHADO",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "6236",
    TENBH: "REGRA TRÊS",
    TACGIA: "Toquinho e Vinicius de Moraes",
  },
  {
    MABH: "5959",
    TENBH: "REHAB",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "3489",
    TENBH: "REI DO GADO",
    TACGIA: "Orquestra da Terra",
  },
  {
    MABH: "30001",
    TENBH: "REI DO GADO",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "30403",
    TENBH: "REI SEM RAINHA",
    TACGIA: "Grupo Rhass",
  },
  {
    MABH: "1399",
    TENBH: "REINVENTAR",
    TACGIA: "Belo",
  },
  {
    MABH: "33222",
    TENBH: "RELATO DE UM HOMEM DE BOM CORAÇÃO",
    TACGIA: "Fresno",
  },
  {
    MABH: "30898",
    TENBH: "RELAXA O CORAÇÃO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "4603",
    TENBH: "RELEASE ME",
    TACGIA: "Engelbert Humperdinck",
  },
  {
    MABH: "1740",
    TENBH: "RELICÁRIO",
    TACGIA: "Cássia Eller e Nando Reis",
  },
  {
    MABH: "24191",
    TENBH: "RELOAD",
    TACGIA: "Sebastian Ingrosso ft. Tommy Trash & John Martin",
  },
  {
    MABH: "30216",
    TENBH: "RELÓGIO",
    TACGIA: "Adilson Ramos",
  },
  {
    MABH: "30715",
    TENBH: "RELÓGIO",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "4051",
    TENBH: "RELUZ",
    TACGIA: "Marcos Sabino",
  },
  {
    MABH: "18349",
    TENBH: "REMEDY",
    TACGIA: "Seether",
  },
  {
    MABH: "24639",
    TENBH: "REMEMBER THE TIME",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "3811",
    TENBH: "REMEXE (RECHUFAS)",
    TACGIA: "Chiquititas",
  },
  {
    MABH: "6977",
    TENBH: "RENATA",
    TACGIA: "Latino",
  },
  {
    MABH: "31044",
    TENBH: "RENATINHA",
    TACGIA: "Os Barões da Pisadinha, Xand Avião",
  },
  {
    MABH: "2469",
    TENBH: "RENDIDO ESTOU",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "24837",
    TENBH: "REPETITION",
    TACGIA: "Information Society",
  },
  {
    MABH: "24769",
    TENBH: "REPTILIA",
    TACGIA: "The Strokes",
  },
  {
    MABH: "3236",
    TENBH: "REQUEBRA",
    TACGIA: "Olodum",
  },
  {
    MABH: "24770",
    TENBH: "RESCUE ME",
    TACGIA: "Thirty Seconds To Mars",
  },
  {
    MABH: "2652",
    TENBH: "RESPECT",
    TACGIA: "Aretha Franklin",
  },
  {
    MABH: "30716",
    TENBH: "RESPEITA O NOSSO FIM",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6874",
    TENBH: "RESPIRAR VOCÊ",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "4011",
    TENBH: "RESPOSTA",
    TACGIA: "Skank",
  },
  {
    MABH: "4171",
    TENBH: "RESPOSTA AO TEMPO",
    TACGIA: "Nana Caymmi",
  },
  {
    MABH: "30405",
    TENBH: "RESSACA DE SAUDADE",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33155",
    TENBH: "RESSENTIMENTO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "1809",
    TENBH: "RESSUSCITA-ME",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "6310",
    TENBH: "RETALHOS DE CETIM",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "4211",
    TENBH: "RETRATOS E CANÇÕES",
    TACGIA: "Sandra de Sá",
  },
  {
    MABH: "30068",
    TENBH: "RETRÔ",
    TACGIA: "Imaginasamba",
  },
  {
    MABH: "4250",
    TENBH: "RETROVISOR",
    TACGIA: "Fagner & Zezé Di Camargo e Luciano",
  },
  {
    MABH: "9159",
    TENBH: "RETURN TO SENDER",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "33808",
    TENBH: "RÉU APAIXONADO",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "9331",
    TENBH: "RÉU CONFESSO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "9160",
    TENBH: "REUNITED",
    TACGIA: "Peaches and Herb",
  },
  {
    MABH: "33093",
    TENBH: "REVANCHE",
    TACGIA: "Fresno",
  },
  {
    MABH: "6508",
    TENBH: "REVELAÇÃO",
    TACGIA: "Fagner",
  },
  {
    MABH: "30419",
    TENBH: "REVELAÇÃO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "7431",
    TENBH: "REVOLUÇÕES POR MINUTOS",
    TACGIA: "RPM",
  },
  {
    MABH: "24891",
    TENBH: "REWRITE THE STARS",
    TACGIA: "The Greatest Showman (Musical)",
  },
  {
    MABH: "2815",
    TENBH: "REZA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "33984",
    TENBH: "REZA AÍ",
    TACGIA: "Jorge e Xand Avião",
  },
  {
    MABH: "30027",
    TENBH: "REZA VELA",
    TACGIA: "O Rappa",
  },
  {
    MABH: "18204",
    TENBH: "RHYTHM IS A DANCER",
    TACGIA: "Snap",
  },
  {
    MABH: "18474",
    TENBH: "RHYTHM OF THE NIGHT",
    TACGIA: "Corona",
  },
  {
    MABH: "4649",
    TENBH: "RHYTHM OF THE RAIN",
    TACGIA: "The Cascades",
  },
  {
    MABH: "18140",
    TENBH: "RIBBON IN THE SKY",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "18908",
    TENBH: "RICH GIRL",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "26057",
    TENBH: "RICH GIRL",
    TACGIA: "Gwen Stefani ft. Eve",
  },
  {
    MABH: "33910",
    TENBH: "RICOS DE AMOR",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "24298",
    TENBH: "RIDE",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "24455",
    TENBH: "RIDE",
    TACGIA: "Twenty One Pilots",
  },
  {
    MABH: "18909",
    TENBH: "RIDE LIKE THE WIND",
    TACGIA: "Christopher Cross",
  },
  {
    MABH: "18574",
    TENBH: "RIDERS ON THE STORM",
    TACGIA: "The Doors",
  },
  {
    MABH: "18802",
    TENBH: "RIDING WITH THE KING",
    TACGIA: "B. B. King & Eric Clapton",
  },
  {
    MABH: "9161",
    TENBH: "RIGHT HERE WAITING",
    TACGIA: "Richard Marx",
  },
  {
    MABH: "24944",
    TENBH: "RIGHT NOW (NA NA NA)",
    TACGIA: "Akon",
  },
  {
    MABH: "24221",
    TENBH: "RIGHT ROUND",
    TACGIA: "Flo Rida ft. Kesha",
  },
  {
    MABH: "24771",
    TENBH: "RIGHT TO BE WRONG",
    TACGIA: "Joss Stone",
  },
  {
    MABH: "6113",
    TENBH: "RINDO À TOA",
    TACGIA: "Falamansa",
  },
  {
    MABH: "24838",
    TENBH: "RING MY BELL",
    TACGIA: "Anita Ward",
  },
  {
    MABH: "18284",
    TENBH: "RING OF FIRE",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "18910",
    TENBH: "RIO",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "30078",
    TENBH: "RIO 40 GRAUS",
    TACGIA: "Fernanda Abreu",
  },
  {
    MABH: "33616",
    TENBH: "RIO DE LÁGRIMAS (RIO DE PIRACICABA)",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "33807",
    TENBH: "RIO E CANOA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "6859",
    TENBH: "RIOZINHO",
    TACGIA: "Lourenço & Lourival",
  },
  {
    MABH: "7691",
    TENBH: "RISCA FACA",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "33985",
    TENBH: "RISCO BRASIL",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "24415",
    TENBH: "RISE",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "31003",
    TENBH: "RITA",
    TACGIA: "Tierry",
  },
  {
    MABH: "26123",
    TENBH: "RITMO",
    TACGIA: "The Black Eyed Peas, J. Balvin",
  },
  {
    MABH: "3237",
    TENBH: "RITMO DA CHUVA",
    TACGIA: "Demétrius",
  },
  {
    MABH: "24012",
    TENBH: "RIVER BANK",
    TACGIA: "Brad Paisley",
  },
  {
    MABH: "24893",
    TENBH: "RIVER DEEP MOUNTAIN HIGH",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "4760",
    TENBH: "RIVERS OF BABYLON",
    TACGIA: "Boney M.",
  },
  {
    MABH: "4958",
    TENBH: "ROAD TO MANDALAY",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "24061",
    TENBH: "ROAR",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "18911",
    TENBH: "ROBERTA",
    TACGIA: "Peppino Di Capri",
  },
  {
    MABH: "2859",
    TENBH: "ROBIN HOOD DA PAIXÃO",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "3238",
    TENBH: "ROBOCOP GAY",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "18183",
    TENBH: "ROCK AND ROLL",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "18575",
    TENBH: "ROCK AND ROLL",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "18288",
    TENBH: "ROCK AND ROLL ALL NIGHT",
    TACGIA: "Kiss",
  },
  {
    MABH: "4761",
    TENBH: "ROCK AND ROLL LULLABY",
    TACGIA: "B. J.Thomas",
  },
  {
    MABH: "4959",
    TENBH: "ROCK AROUND THE CLOCK",
    TACGIA: "Bill Halley & His Comets",
  },
  {
    MABH: "6347",
    TENBH: "ROCK DA CACHORRA",
    TACGIA: "Eduardo Dusek",
  },
  {
    MABH: "3897",
    TENBH: "ROCK DAS ARANHAS",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "18347",
    TENBH: "ROCK DJ",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "15269",
    TENBH: "ROCK ENREDO",
    TACGIA: "Franco",
  },
  {
    MABH: "18493",
    TENBH: "ROCK THE CASBAH",
    TACGIA: "The Clash",
  },
  {
    MABH: "4762",
    TENBH: "ROCK WITH YOU",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "18576",
    TENBH: "ROCK YOU LIKE A HURRICANE",
    TACGIA: "Scorpions",
  },
  {
    MABH: "24912",
    TENBH: "ROCK YOUR BABY",
    TACGIA: "George McRae",
  },
  {
    MABH: "2510",
    TENBH: "ROCK YOUR BODY",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "24473",
    TENBH: "ROCKABYE",
    TACGIA: "Clean Bandit ft. Sean Paul & Anne-Marie",
  },
  {
    MABH: "9162",
    TENBH: "ROCKET MAN",
    TACGIA: "Elton John",
  },
  {
    MABH: "24264",
    TENBH: "ROCKSTAR",
    TACGIA: "Nickelback",
  },
  {
    MABH: "24640",
    TENBH: "ROCKSTAR",
    TACGIA: "Post Malone ft. 21 Savage",
  },
  {
    MABH: "6433",
    TENBH: "RODA VIVA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "26166",
    TENBH: "RODEO",
    TACGIA: "Lil Nas X",
  },
  {
    MABH: "6748",
    TENBH: "RODO COTIDIANO",
    TACGIA: "O Rappa",
  },
  {
    MABH: "30406",
    TENBH: "RODOPIOU",
    TACGIA: "Emilio e Eduardo",
  },
  {
    MABH: "7432",
    TENBH: "ROELA DO ENO",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "1519",
    TENBH: "ROLAM AS PEDRAS",
    TACGIA: "Kiko Zambianchi",
  },
  {
    MABH: "24090",
    TENBH: "ROLLER COASTER",
    TACGIA: "Luke Bryan",
  },
  {
    MABH: "24311",
    TENBH: "ROLLIN'",
    TACGIA: "Limp Bizkit",
  },
  {
    MABH: "2569",
    TENBH: "ROLLING IN THE DEEP",
    TACGIA: "Adele",
  },
  {
    MABH: "33034",
    TENBH: "ROLO DOIDO",
    TACGIA: "Carlos e Jader",
  },
  {
    MABH: "2895",
    TENBH: "ROMANCE",
    TACGIA: "Humberto e Ronaldo & Jorge e Mateus",
  },
  {
    MABH: "30558",
    TENBH: "ROMANCE COM SAFADEZA",
    TACGIA: "Wesley Safadão part. Anitta",
  },
  {
    MABH: "30994",
    TENBH: "ROMANCE DESAPEGADO",
    TACGIA: "Conde do Forró",
  },
  {
    MABH: "3769",
    TENBH: "ROMANCE IDEAL",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "9869",
    TENBH: "ROMANCE NO DESERTO",
    TACGIA: "Fagner",
  },
  {
    MABH: "3239",
    TENBH: "ROMANCE ROSA",
    TACGIA: "Juan Luis Guerra",
  },
  {
    MABH: "33806",
    TENBH: "ROMÂNTICO ANÔNIMO",
    TACGIA: "Marcos e Belutti part. Fernando Zor",
  },
  {
    MABH: "30933",
    TENBH: "ROMÂNTICOS",
    TACGIA: "Vander Lee",
  },
  {
    MABH: "3240",
    TENBH: "ROMARIA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "18912",
    TENBH: "ROMEO AND JULIET",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "3241",
    TENBH: "RONDA",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "24839",
    TENBH: "ROOM IN YOUR HEART",
    TACGIA: "Living in A Box",
  },
  {
    MABH: "30016",
    TENBH: "ROOTS BLOODY ROOTS",
    TACGIA: "Sepultura",
  },
  {
    MABH: "6836",
    TENBH: "ROQUE SANTEIRO",
    TACGIA: "Sá e Guarabyra",
  },
  {
    MABH: "30217",
    TENBH: "ROSA AMARELA",
    TACGIA: "Paula Mattos",
  },
  {
    MABH: "30407",
    TENBH: "ROSA NEGRA",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "18504",
    TENBH: "ROSANNA",
    TACGIA: "Toto",
  },
  {
    MABH: "33805",
    TENBH: "ROSARIO DE ESPERANÇA",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "7694",
    TENBH: "ROSAS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "15397",
    TENBH: "ROSAS, VERSOS E VINHOS",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "24391",
    TENBH: "ROSES",
    TACGIA: "The Chainsmokers ft. Rozes",
  },
  {
    MABH: "24772",
    TENBH: "ROSES",
    TACGIA: "Outkast",
  },
  {
    MABH: "33525",
    TENBH: "ROSINHA",
    TACGIA: "Jeito Moleque",
  },
  {
    MABH: "3770",
    TENBH: "ROSTO MOLHADO",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "2896",
    TENBH: "ROTINA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33653",
    TENBH: "ROUBOU MEU CORAÇÃO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "24840",
    TENBH: "ROUGH BOY",
    TACGIA: "ZZ Top",
  },
  {
    MABH: "26109",
    TENBH: "ROUND AND ROUND",
    TACGIA: "RATT",
  },
  {
    MABH: "9333",
    TENBH: "ROUPA DE LUA DE MEL",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "4763",
    TENBH: "ROXANNE",
    TACGIA: "The Police",
  },
  {
    MABH: "24358",
    TENBH: "ROYALS",
    TACGIA: "Lorde",
  },
  {
    MABH: "9870",
    TENBH: "RUA 15",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "3973",
    TENBH: "RUA RAMALHETE",
    TACGIA: "Byafra",
  },
  {
    MABH: "9334",
    TENBH: "RUAS DE OUTONO",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "30765",
    TENBH: "RUBI",
    TACGIA: "Banda Djavú",
  },
  {
    MABH: "18473",
    TENBH: "RUBY",
    TACGIA: "Kaiser Chiefs",
  },
  {
    MABH: "4960",
    TENBH: "RUBY TUESDAY",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "18412",
    TENBH: "RUBY, DON'T TAKE YOUR LOVE TO TOWN",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "24074",
    TENBH: "RUDE",
    TACGIA: "Magic!",
  },
  {
    MABH: "26005",
    TENBH: "RUDE BOY",
    TACGIA: "Rihanna",
  },
  {
    MABH: "4294",
    TENBH: "RUMO À GOIÂNIA",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "24773",
    TENBH: "RUN",
    TACGIA: "Leona Lewis",
  },
  {
    MABH: "24774",
    TENBH: "RUN",
    TACGIA: "Snow Patrol",
  },
  {
    MABH: "18236",
    TENBH: "RUN THE WORLD (GIRLS)",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "5960",
    TENBH: "RUN THROUGH THE JUNGLE",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "9051",
    TENBH: "RUN TO ME",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "26157",
    TENBH: "RUN TO THE HILLS",
    TACGIA: "Iron Maiden",
  },
  {
    MABH: "24775",
    TENBH: "RUN TO YOU",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "9163",
    TENBH: "RUNAWAY",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9232",
    TENBH: "RUNAWAY",
    TACGIA: "The Corrs",
  },
  {
    MABH: "24642",
    TENBH: "RUNAWAY",
    TACGIA: "Aurora",
  },
  {
    MABH: "18375",
    TENBH: "RUNAWAY TRAIN",
    TACGIA: "Soul Asylum",
  },
  {
    MABH: "24643",
    TENBH: "RUNNIN' WITH THE DEVIL",
    TACGIA: "Van Halen",
  },
  {
    MABH: "9164",
    TENBH: "RUNNING TO STAND STILL",
    TACGIA: "U2",
  },
  {
    MABH: "18691",
    TENBH: "RUNNING UP THAT HILL",
    TACGIA: "Kate Bush",
  },
  {
    MABH: "18877",
    TENBH: "RUNNING WITH THE WOLVES",
    TACGIA: "Aurora",
  },
  {
    MABH: "18743",
    TENBH: "RUSH, RUSH",
    TACGIA: "Paula Abdul",
  },
  {
    MABH: "30848",
    TENBH: "S DE SAUDADE",
    TACGIA: "Luiza e Maurilio ft. Zé Neto e Cristiano",
  },
  {
    MABH: "2767",
    TENBH: "S.O.S",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "6349",
    TENBH: "SÁ MARINA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "4172",
    TENBH: "SÁBADO",
    TACGIA: "José Augusto",
  },
  {
    MABH: "4212",
    TENBH: "SÁBADO À NOITE",
    TACGIA: "Cidade Negra e Lulu Santos",
  },
  {
    MABH: "1939",
    TENBH: "SÁBADO DE SOL",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "9335",
    TENBH: "SÁBADO EM COPACABANA",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "33712",
    TENBH: "SABE DE NADA INOCENTE",
    TACGIA: "Adson e Alana",
  },
  {
    MABH: "33551",
    TENBH: "SABE ESSE CARA",
    TACGIA: "Thiago Brava",
  },
  {
    MABH: "15150",
    TENBH: "SABER AMAR",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "30766",
    TENBH: "SABER QUEM SOU",
    TACGIA: "Moana (Disney)",
  },
  {
    MABH: "2433",
    TENBH: "SABOR DE MEL",
    TACGIA: "Damares",
  },
  {
    MABH: "18913",
    TENBH: "SABOTAGE",
    TACGIA: "Beastie Boys",
  },
  {
    MABH: "4764",
    TENBH: "SACRIFICE",
    TACGIA: "Elton John",
  },
  {
    MABH: "18308",
    TENBH: "SAD BUT TRUE",
    TACGIA: "Metallica",
  },
  {
    MABH: "5962",
    TENBH: "SAD SONGS",
    TACGIA: "Elton John",
  },
  {
    MABH: "3490",
    TENBH: "SAFADA",
    TACGIA: "Wando",
  },
  {
    MABH: "33550",
    TENBH: "SAFADIM",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "6714",
    TENBH: "SAFADO, CACHORRO, SEM VERGONHA",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "24321",
    TENBH: "SAFE AND SOUND",
    TACGIA: "Capital Cities",
  },
  {
    MABH: "4174",
    TENBH: "SAI DA MINHA ABA",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "15503",
    TENBH: "SAIA E BICICLETINHA",
    TACGIA: "Banda Kaçamba",
  },
  {
    MABH: "4132",
    TENBH: "SAIDEIRA",
    TACGIA: "Skank",
  },
  {
    MABH: "30511",
    TENBH: "SAIDEIRA",
    TACGIA: "Atitude 67",
  },
  {
    MABH: "3244",
    TENBH: "SAIGON",
    TACGIA: "Emílio Santiago",
  },
  {
    MABH: "4840",
    TENBH: "SAILING",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "4961",
    TENBH: "SAILING",
    TACGIA: "Christopher Cross",
  },
  {
    MABH: "33617",
    TENBH: "SALVA MEU CORAÇÃO",
    TACGIA: "Loubet",
  },
  {
    MABH: "24841",
    TENBH: "SALVAME",
    TACGIA: "RBD",
  },
  {
    MABH: "18692",
    TENBH: "SALVATION",
    TACGIA: "The Cranberries",
  },
  {
    MABH: "30767",
    TENBH: "SALVOU MEU DIA",
    TACGIA: "MC Kevinho ft. Gusttavo Lima",
  },
  {
    MABH: "30768",
    TENBH: "SAMARA",
    TACGIA: "Forró Perfeito",
  },
  {
    MABH: "3974",
    TENBH: "SAMBA DE UMA NOTA SÓ",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "9530",
    TENBH: "SAMBA DE VERÃO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "3637",
    TENBH: "SAMBA DIFERENTE",
    TACGIA: "Molejo",
  },
  {
    MABH: "3245",
    TENBH: "SAMBA DO ARNESTO",
    TACGIA: "Demônios da Garoa",
  },
  {
    MABH: "3387",
    TENBH: "SAMBA PRAS MOÇAS",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "5963",
    TENBH: "SAME MISTAKE",
    TACGIA: "James Blunt",
  },
  {
    MABH: "24443",
    TENBH: "SAME OLD LOVE",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "3246",
    TENBH: "SAMPA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "4096",
    TENBH: "SAMURAI",
    TACGIA: "Djavan",
  },
  {
    MABH: "9165",
    TENBH: "SAN FRANCISCAN NIGHTS",
    TACGIA: "Eric Burdon & The Animals",
  },
  {
    MABH: "4765",
    TENBH: "SAN FRANCISCO",
    TACGIA: "Scott McKenzie",
  },
  {
    MABH: "3446",
    TENBH: "SÂNDALO DE DANDI",
    TACGIA: "Metrô",
  },
  {
    MABH: "4295",
    TENBH: "SANDRA ROSA MADALENA A CIGANA",
    TACGIA: "Sidney Magal",
  },
  {
    MABH: "6076",
    TENBH: "SANGRANDO",
    TACGIA: "Gonzaguinha",
  },
  {
    MABH: "4175",
    TENBH: "SANGUE LATINO",
    TACGIA: "Ney matogrosso",
  },
  {
    MABH: "7031",
    TENBH: "SANTA LUCIA",
    TACGIA: "Andrea Bocelli",
  },
  {
    MABH: "18744",
    TENBH: "SANTERIA",
    TACGIA: "Sublime",
  },
  {
    MABH: "30069",
    TENBH: "SANTINHA",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "2816",
    TENBH: "SÃO PAULO, SÃO PAULO",
    TACGIA: "Premeditando o Breque",
  },
  {
    MABH: "3344",
    TENBH: "SÃO TANTAS COISAS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "30218",
    TENBH: "SAPATEIA GALERA",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "6273",
    TENBH: "SAPATO VELHO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "30717",
    TENBH: "SAPEQUINHA",
    TACGIA: "Lexa e MC Lan",
  },
  {
    MABH: "33291",
    TENBH: "SAPEQUINHA",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "5964",
    TENBH: "SARA",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "18693",
    TENBH: "SARA",
    TACGIA: "Starship",
  },
  {
    MABH: "18914",
    TENBH: "SATURDAY IN THE PARK",
    TACGIA: "Chicago",
  },
  {
    MABH: "4650",
    TENBH: "SATURDAY NIGHT",
    TACGIA: "Bay City Rollers",
  },
  {
    MABH: "33804",
    TENBH: "SAUDADE",
    TACGIA: "XCalypso",
  },
  {
    MABH: "3250",
    TENBH: "SAUDADE BANDIDA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30718",
    TENBH: "SAUDADE BOA",
    TACGIA: "Jonas Esticado part. Felipe Araújo",
  },
  {
    MABH: "3593",
    TENBH: "SAUDADE DA MINHA TERRA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33495",
    TENBH: "SAUDADE DE VOCÊ",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "30219",
    TENBH: "SAUDADE DO CARAMBA",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33987",
    TENBH: "SAUDADE DO MEU EX",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33713",
    TENBH: "SAUDADE DO PICA-PAU",
    TACGIA: "Trio Alto Astral",
  },
  {
    MABH: "33249",
    TENBH: "SAUDADE IDIOTA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "30666",
    TENBH: "SAUDADE NÍVEL HARD",
    TACGIA: "Yasmin Santos",
  },
  {
    MABH: "30967",
    TENBH: "SAUDADE SUA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "1490",
    TENBH: "SAUDADE VEM",
    TACGIA: "Adryana Ribeiro",
  },
  {
    MABH: "30667",
    TENBH: "SAUDADES DO TEMPO",
    TACGIA: "Maneva",
  },
  {
    MABH: "3251",
    TENBH: "SAUDOSA MALOCA",
    TACGIA: "Adoniran Barbosa",
  },
  {
    MABH: "5965",
    TENBH: "SAVE A PRAYER",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "4841",
    TENBH: "SAVE ME",
    TACGIA: "Hanson",
  },
  {
    MABH: "9166",
    TENBH: "SAVE THE BEST FOR LAST",
    TACGIA: "Vanessa Williams",
  },
  {
    MABH: "4547",
    TENBH: "SAVE THE LAST DANCE FOR ME",
    TACGIA: "The Drifters",
  },
  {
    MABH: "24435",
    TENBH: "SAVE TONIGHT",
    TACGIA: "Eagle-Eye Cherry",
  },
  {
    MABH: "24992",
    TENBH: "SAVIN' ME",
    TACGIA: "Nickelback",
  },
  {
    MABH: "24644",
    TENBH: "SAVING ALL MY LOVE FOR YOU",
    TACGIA: "Whitney Houston",
  },
  {
    MABH: "18915",
    TENBH: "SAVIOR",
    TACGIA: "Rise Against",
  },
  {
    MABH: "18413",
    TENBH: "SAY IT AIN'T SO",
    TACGIA: "Weezer",
  },
  {
    MABH: "18999",
    TENBH: "SAY IT LOUD, I'M BLACK AND I'M PROUD",
    TACGIA: "James Brown",
  },
  {
    MABH: "5966",
    TENBH: "SAY IT RIGHT",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "18012",
    TENBH: "SAY MY NAME",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "2548",
    TENBH: "SAY OK",
    TACGIA: "Vanessa Hudgens",
  },
  {
    MABH: "26151",
    TENBH: "SAY SO",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "24645",
    TENBH: "SAY SOMETHING",
    TACGIA: "Justin Timberlake ft. Chris Stapleton",
  },
  {
    MABH: "26021",
    TENBH: "SAY SOMETHING",
    TACGIA: "A Great Big World ft. Christina Aguilera",
  },
  {
    MABH: "18577",
    TENBH: "SAY YOU LOVE ME",
    TACGIA: "Simply Red",
  },
  {
    MABH: "4548",
    TENBH: "SAY YOU SAY ME",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "24974",
    TENBH: "SAY YOU WON'T LET GO",
    TACGIA: "James Arthur",
  },
  {
    MABH: "24646",
    TENBH: "SAY YOU'LL BE THERE",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "4962",
    TENBH: "SCAR TISSUE",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "18497",
    TENBH: "SCARS",
    TACGIA: "Papa Roach",
  },
  {
    MABH: "24525",
    TENBH: "SCARS TO YOUR BEAUTIFUL",
    TACGIA: "Alessia Cara",
  },
  {
    MABH: "18248",
    TENBH: "SCREAM",
    TACGIA: "Usher",
  },
  {
    MABH: "24373",
    TENBH: "SCREAM AND SHOUT",
    TACGIA: "Will.I.Am ft. Britney Spears",
  },
  {
    MABH: "7237",
    TENBH: "SE A CASA CAIR",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "7238",
    TENBH: "SE AINDA EXISTE AMOR",
    TACGIA: "Leonardo",
  },
  {
    MABH: "30809",
    TENBH: "SE AS FLORES PUDESSEM FALAR",
    TACGIA: "Nelson Ned",
  },
  {
    MABH: "15429",
    TENBH: "SE BEIJAR NA BOCA DÁ SAPINHO",
    TACGIA: "João Lucas e Marcelo",
  },
  {
    MABH: "3933",
    TENBH: "SE DEUS ME OUVISSE",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33071",
    TENBH: "SE É PRA BEBER EU BEBO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "30797",
    TENBH: "SE É PRA CHORAR EU CHORO",
    TACGIA: "Lucas Reis & Thácio",
  },
  {
    MABH: "9874",
    TENBH: "SE É PRA FALAR DE AMOR",
    TACGIA: "Mateus e Cristiano",
  },
  {
    MABH: "30408",
    TENBH: "SE É PRA GENTE FICAR",
    TACGIA: "Solange Almeida part. Wesley Safadão",
  },
  {
    MABH: "7239",
    TENBH: "SE ELA DANÇA EU DANÇO",
    TACGIA: "MC Leozinho",
  },
  {
    MABH: "7696",
    TENBH: "SE ELA ME AMASSE",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "2928",
    TENBH: "SE ENAMORA",
    TACGIA: "A Turma do Balão Mágico",
  },
  {
    MABH: "33272",
    TENBH: "SE ERA",
    TACGIA: "Banda Musa do Calypso",
  },
  {
    MABH: "33262",
    TENBH: "SE EU CHORAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30914",
    TENBH: "SE EU ESCAPAR",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "30901",
    TENBH: "SE EU FOSSE VOCÊ",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "15474",
    TENBH: "SE EU LARGAR O FREIO",
    TACGIA: "Péricles",
  },
  {
    MABH: "33197",
    TENBH: "SE EU ME ENTREGAR",
    TACGIA: "Kléo Dibah e Rafael",
  },
  {
    MABH: "7440",
    TENBH: "SE EU NÃO PUDER TE ESQUECER",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "4457",
    TENBH: "SE EU NÃO TE AMASSE TANTO ASSIM",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "3724",
    TENBH: "SE EU QUISER FALAR COM DEUS",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "33741",
    TENBH: "SE FOR PRA JUDIAR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33293",
    TENBH: "SE FOR PRA SER FELIZ",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "30866",
    TENBH: "SE ME LEMBRO FAZ DOER",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "30220",
    TENBH: "SE MEU AMOR NÃO CHEGAR",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "15117",
    TENBH: "SE NAMORAR FOSSE BOM",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "4097",
    TENBH: "SE NÃO FOR AMOR",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "6790",
    TENBH: "SE NÃO TIVESSE IDO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30073",
    TENBH: "SE O AMOR TIVER LUGAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15190",
    TENBH: "SE O CORAÇAO VIAJAR",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "7241",
    TENBH: "SE QUEBROU",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "33803",
    TENBH: "SE QUER IR ENTÃO VAI",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "7441",
    TENBH: "SE QUISER",
    TACGIA: "Tânia Mara",
  },
  {
    MABH: "6978",
    TENBH: "SE TIVER MULHER NÓIS VAI",
    TACGIA: "Cezar e Paulinho",
  },
  {
    MABH: "33908",
    TENBH: "SE TOCA ESSA MODA",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "30868",
    TENBH: "SE TODOS FOSSEM IGUAIS A VOCÊ",
    TACGIA: "Tom Jobim & Vinícius de Morais",
  },
  {
    MABH: "33549",
    TENBH: "SE TU QUISERES CRER",
    TACGIA: "Robinson Monteiro",
  },
  {
    MABH: "15317",
    TENBH: "SE TUDO FOSSE FÁCIL",
    TACGIA: "Michel Teló & Paula Fernandes",
  },
  {
    MABH: "2699",
    TENBH: "SE VOCÊ ME QUISER",
    TACGIA: "The Fevers",
  },
  {
    MABH: "2768",
    TENBH: "SE VOCÊ QUER SORRIR",
    TACGIA: "Patati e Patatá",
  },
  {
    MABH: "3252",
    TENBH: "SE...",
    TACGIA: "Djavan",
  },
  {
    MABH: "9167",
    TENBH: "SEA OF LOVE",
    TACGIA: "The Honeydrippers",
  },
  {
    MABH: "4963",
    TENBH: "SECRET",
    TACGIA: "Madonna",
  },
  {
    MABH: "24647",
    TENBH: "SECRET",
    TACGIA: "Seal",
  },
  {
    MABH: "5967",
    TENBH: "SECRET AGENT MAN",
    TACGIA: "Johnny Rivers",
  },
  {
    MABH: "18560",
    TENBH: "SECRET GARDEN",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "24648",
    TENBH: "SECRET LOVERS",
    TACGIA: "Atlantic Starr",
  },
  {
    MABH: "24649",
    TENBH: "SECRET SMILE",
    TACGIA: "Semisonic",
  },
  {
    MABH: "6353",
    TENBH: "SECRETÁRIA (ASSÉDIO SEXUAL)",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "31038",
    TENBH: "SÉCULO 21",
    TACGIA: "Léo Santana, Luísa Sonza",
  },
  {
    MABH: "30559",
    TENBH: "SEDE PRA TE VER",
    TACGIA: "KVSH, Breno Rocha ft. Breno Miranda",
  },
  {
    MABH: "24293",
    TENBH: "SEE YOU AGAIN",
    TACGIA: "Wiz Khalifa ft. Charlie Puth",
  },
  {
    MABH: "26093",
    TENBH: "SEEK & DESTROY",
    TACGIA: "Metallica",
  },
  {
    MABH: "6474",
    TENBH: "SEGREDOS",
    TACGIA: "Frejat",
  },
  {
    MABH: "3253",
    TENBH: "SEGUINDO NO TREM AZUL",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "33294",
    TENBH: "SEGUNDA OPÇÃO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33334",
    TENBH: "SEGUNDA-FEIRA PASSA",
    TACGIA: "Ricardo e Joao Fernando",
  },
  {
    MABH: "30409",
    TENBH: "SEGURA NA MÃO DE DEUS",
    TACGIA: "Carmen Silva",
  },
  {
    MABH: "1840",
    TENBH: "SEI LÁ (A VIDA TEM SEMPRE RAZÃO)",
    TACGIA: "Tom Jobim e Vinícius de Moraes",
  },
  {
    MABH: "33007",
    TENBH: "SEJA MAIS VOCÊ",
    TACGIA: "Grupo Raça",
  },
  {
    MABH: "24650",
    TENBH: "SELF ESTEEM",
    TACGIA: "Offspring",
  },
  {
    MABH: "33284",
    TENBH: "SELFIE",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "1631",
    TENBH: "SELINHO NA BOCA",
    TACGIA: "Latino e Perla",
  },
  {
    MABH: "9876",
    TENBH: "SEM AR",
    TACGIA: "D'Black",
  },
  {
    MABH: "33263",
    TENBH: "SEM COMPROMISSO",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "30561",
    TENBH: "SEM CONTRAINDICAÇÃO",
    TACGIA: "Diego e Victor Hugo part. Bruno & Marrone",
  },
  {
    MABH: "33296",
    TENBH: "SEM DESTINO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "1368",
    TENBH: "SEM ESSE CORAÇÃO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "6193",
    TENBH: "SEM LIMITES PRA SONHAR",
    TACGIA: "Fábio Jr. ft. Bonnie Tyler",
  },
  {
    MABH: "1743",
    TENBH: "SEM ME CONTROLAR",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "3539",
    TENBH: "SEM MEDO DE SER FELIZ",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "4372",
    TENBH: "SEM PECADO E SEM JUÍZO",
    TACGIA: "Baby Consuelo",
  },
  {
    MABH: "6354",
    TENBH: "SEM PESO E SEM MEDIDA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "33300",
    TENBH: "SEM QUERER",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "6675",
    TENBH: "SEM RADAR",
    TACGIA: "LS Jack",
  },
  {
    MABH: "30036",
    TENBH: "SEM SAÍDA",
    TACGIA: "Odair José",
  },
  {
    MABH: "30719",
    TENBH: "SEM SAL",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33278",
    TENBH: "SEM SUTIA",
    TACGIA: "Naldo Benny (Naldo)",
  },
  {
    MABH: "30573",
    TENBH: "SEM TRANSITO E SEM AVIÃO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33211",
    TENBH: "SEM VERGONHA E SEM JUIZO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "9877",
    TENBH: "SEM VOCÊ",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "30221",
    TENBH: "SEM VOCÊ (CAFÉ DA MANHÃ)",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33301",
    TENBH: "SEM VOCÊ A VIDA É TÃO SEM GRAÇA",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "9878",
    TENBH: "SEM VOCÊ NÃO VIVEREI",
    TACGIA: "Ovelha",
  },
  {
    MABH: "30534",
    TENBH: "SEMANA QUE VEM",
    TACGIA: "Pitty",
  },
  {
    MABH: "9531",
    TENBH: "SEMENTE",
    TACGIA: "Armandinho",
  },
  {
    MABH: "30505",
    TENBH: "SEMPRE SEU HOMEM",
    TACGIA: "Mauricio e Mauri",
  },
  {
    MABH: "3390",
    TENBH: "SEMPRE SOU EU",
    TACGIA: "Adryana Ribeiro part. Luis Carlos",
  },
  {
    MABH: "24651",
    TENBH: "SEND ME AN ANGEL",
    TACGIA: "Scorpions",
  },
  {
    MABH: "24423",
    TENBH: "SEND MY LOVE (TO YOUR NEW LOVER)",
    TACGIA: "Adele",
  },
  {
    MABH: "33548",
    TENBH: "SENHA DO CELULAR",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "7698",
    TENBH: "SENHOR DO TEMPO",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "7443",
    TENBH: "SENHORITA",
    TACGIA: "Zé Geraldo",
  },
  {
    MABH: "30410",
    TENBH: "SENHORITA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33932",
    TENBH: "SENHORITA",
    TACGIA: "Motirô",
  },
  {
    MABH: "24935",
    TENBH: "SEÑORITA",
    TACGIA: "Shawn Mendes & Camila Cabello",
  },
  {
    MABH: "2758",
    TENBH: "SENSAÇÕES",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "4013",
    TENBH: "SENSÍVEL DEMAIS",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "6792",
    TENBH: "SENTA AQUI",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "30924",
    TENBH: "SENTADÃO",
    TACGIA: "Pedro Sampaio e Felipe ft. JS",
  },
  {
    MABH: "4411",
    TENBH: "SENTADO A BEIRA DO CAMINHO",
    TACGIA: "Roberto Carlos e Erasmo Carlos",
  },
  {
    MABH: "3540",
    TENBH: "SENTIMENTAL DEMAIS",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "7700",
    TENBH: "SENTIMENTO",
    TACGIA: "Armandinho",
  },
  {
    MABH: "2769",
    TENBH: "SENTIMENTO BOM",
    TACGIA: "Filosofia Reggae",
  },
  {
    MABH: "30008",
    TENBH: "SENTIMENTO LOUCO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "3898",
    TENBH: "SENTIMENTO NU",
    TACGIA: "Grupo Sensação",
  },
  {
    MABH: "33132",
    TENBH: "SEPARA, NAMORA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "3726",
    TENBH: "SEPARAÇÃO",
    TACGIA: "Adalberto e Adriano",
  },
  {
    MABH: "9879",
    TENBH: "SEPARAÇÃO",
    TACGIA: "Simone",
  },
  {
    MABH: "33547",
    TENBH: "SEPARAÇÃO",
    TACGIA: "Eduardo Costa & Leonardo",
  },
  {
    MABH: "24999",
    TENBH: "SEPARATE LIVES",
    TACGIA: "Phil Collins ft. Marilyn Martin",
  },
  {
    MABH: "18631",
    TENBH: "SEPTEMBER",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "33324",
    TENBH: "SER HUMANO",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33302",
    TENBH: "SER HUMANO OU ANJO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "3254",
    TENBH: "SERÁ",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "6751",
    TENBH: "SERÁ",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30493",
    TENBH: "SERÁ QUE VAI ROLAR",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "30562",
    TENBH: "SERÁ QUE VOCÊ ME ESQUECEU",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3447",
    TENBH: "SERÃO EXTRA",
    TACGIA: "Dr. Silvana e Cia",
  },
  {
    MABH: "3255",
    TENBH: "SEREIA",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "30223",
    TENBH: "SEREIA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30119",
    TENBH: "SERENATA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "9880",
    TENBH: "SERESTEIRO DAS NOITES",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "24002",
    TENBH: "SET FIRE TO THE RAIN",
    TACGIA: "Adele",
  },
  {
    MABH: "33546",
    TENBH: "SETE CIDADES",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "33329",
    TENBH: "SETEVIDAS",
    TACGIA: "Pitty",
  },
  {
    MABH: "3683",
    TENBH: "SEU AMOR AINDA É TUDO",
    TACGIA: "João Mineiro e Marciano",
  },
  {
    MABH: "7445",
    TENBH: "SEU AMOR É TUDO O QUE EU QUERO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30465",
    TENBH: "SEU ASTRAL",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33023",
    TENBH: "SEU BOMBEIRO",
    TACGIA: "Munhoz e Mariano",
  },
  {
    MABH: "30668",
    TENBH: "SEU CRIME",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "4374",
    TENBH: "SEU MELHOR AMIGO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "1538",
    TENBH: "SEU NOME",
    TACGIA: "Byafra",
  },
  {
    MABH: "7446",
    TENBH: "SEU NOME",
    TACGIA: "Luiza Possi",
  },
  {
    MABH: "33185",
    TENBH: "SEU OLHAR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33907",
    TENBH: "SEU OPOSTO",
    TACGIA: "George Henrique e Rodrigo part. Henrique e Juliano",
  },
  {
    MABH: "33714",
    TENBH: "SEU POLÍCIA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "7246",
    TENBH: "SEUS OLHOS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30471",
    TENBH: "SEUS PLANOS",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "9233",
    TENBH: "SEVEN DAYS IN SUNNY JUNE",
    TACGIA: "Jamiroquai",
  },
  {
    MABH: "2628",
    TENBH: "SEVEN NATION ARMY",
    TACGIA: "The White Stripes",
  },
  {
    MABH: "6633",
    TENBH: "SEVERINA XIQUE-XIQUE",
    TACGIA: "Genival Lacerda",
  },
  {
    MABH: "18578",
    TENBH: "SEX BOMB",
    TACGIA: "Tom Jones",
  },
  {
    MABH: "18694",
    TENBH: "SEX MACHINE",
    TACGIA: "James Brown",
  },
  {
    MABH: "18032",
    TENBH: "SEX ON FIRE",
    TACGIA: "Kings of Leon",
  },
  {
    MABH: "18579",
    TENBH: "SEX TYPE THING",
    TACGIA: "Stone Temple Pilots",
  },
  {
    MABH: "9052",
    TENBH: "SEXED UP",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "33545",
    TENBH: "SEXTOU",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "9168",
    TENBH: "SEXUAL HEALING",
    TACGIA: "Marvin Gaye",
  },
  {
    MABH: "24319",
    TENBH: "SEXY AND I KNOW IT",
    TACGIA: "Lmfao",
  },
  {
    MABH: "2629",
    TENBH: "SEXY BACK",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "9169",
    TENBH: "SEXY EYES",
    TACGIA: "Dr. Hook",
  },
  {
    MABH: "3256",
    TENBH: "SEXY YEMANJÁ",
    TACGIA: "Pepeu Gomes",
  },
  {
    MABH: "18916",
    TENBH: "SGT PEPPER'S LONELY HEART CLUB BAND",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18142",
    TENBH: "SHADES OF COOL",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "24101",
    TENBH: "SHAKE IT OFF",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "18695",
    TENBH: "SHAKE IT OUT",
    TACGIA: "Florence + The Machine",
  },
  {
    MABH: "18696",
    TENBH: "SHAKE ME DOWN",
    TACGIA: "Cage The Elephant",
  },
  {
    MABH: "26176",
    TENBH: "SHAKE YOUR GROOVE THING",
    TACGIA: "Peaches & Herb",
  },
  {
    MABH: "24954",
    TENBH: "SHAKE, RATTLE & ROLL",
    TACGIA: "Bill Haley & His Comets",
  },
  {
    MABH: "9053",
    TENBH: "SHAKE, SHAKE, SHAKE (SHAKE YOUR BOOTY)",
    TACGIA: "KC & The Sunshine Band",
  },
  {
    MABH: "24776",
    TENBH: "SHALLOW",
    TACGIA: "Lady Gaga, Bradley Cooper",
  },
  {
    MABH: "18803",
    TENBH: "SHAPE OF MY HEART",
    TACGIA: "Sting",
  },
  {
    MABH: "18917",
    TENBH: "SHAPE OF MY HEART",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "24501",
    TENBH: "SHAPE OF YOU",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "18918",
    TENBH: "SHARING THE NIGHT TOGETHER",
    TACGIA: "Dr. Hook",
  },
  {
    MABH: "18697",
    TENBH: "SHATTERED DREAMS",
    TACGIA: "Johnny Hates Jazz",
  },
  {
    MABH: "4964",
    TENBH: "SHE",
    TACGIA: "Elvis Costello",
  },
  {
    MABH: "4842",
    TENBH: "SHE BELIEVES IN ME",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "18804",
    TENBH: "SHE DOESN'T ME",
    TACGIA: "Sean Paul",
  },
  {
    MABH: "18636",
    TENBH: "SHE LOVES ME NOT",
    TACGIA: "Papa Roach",
  },
  {
    MABH: "4965",
    TENBH: "SHE LOVES YOU",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "2536",
    TENBH: "SHE MADE ME CRY",
    TACGIA: "Pholhas",
  },
  {
    MABH: "18117",
    TENBH: "SHE WILL BE LOVED",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "24347",
    TENBH: "SHE WOLF (FALLING TO PIECES)",
    TACGIA: "David Guetta ft. Sia",
  },
  {
    MABH: "18630",
    TENBH: "SHEENA IS A PUNK ROCKER",
    TACGIA: "Ramones",
  },
  {
    MABH: "24938",
    TENBH: "SHE'S A LADY",
    TACGIA: "Tom Jones",
  },
  {
    MABH: "5968",
    TENBH: "SHE'S BEAUTIFUL",
    TACGIA: "Double You",
  },
  {
    MABH: "4767",
    TENBH: "SHE'S LIKE THE WIND",
    TACGIA: "Patrick Swayze",
  },
  {
    MABH: "24777",
    TENBH: "SHE'S MADONNA",
    TACGIA: "Robbie Williams",
  },
  {
    MABH: "9054",
    TENBH: "SHE'S MY GIRL",
    TACGIA: "Morris Albert",
  },
  {
    MABH: "1314",
    TENBH: "SHIMBALAIÊ",
    TACGIA: "Maria Gadú",
  },
  {
    MABH: "18805",
    TENBH: "SHINING STAR",
    TACGIA: "Earth, Wind & Fire",
  },
  {
    MABH: "18580",
    TENBH: "SHINNING STAR",
    TACGIA: "The Manhattans",
  },
  {
    MABH: "18338",
    TENBH: "SHINY HAPPY PEOPLE",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "26137",
    TENBH: "SHOOT TO THRILL",
    TACGIA: "ACDC",
  },
  {
    MABH: "33544",
    TENBH: "SHORTINHO SAINT TROPEZ",
    TACGIA: "Bokaloka",
  },
  {
    MABH: "24153",
    TENBH: "SHOTS",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "18378",
    TENBH: "SHOULD I STAY OR SHOULD I GO",
    TACGIA: "The Clash",
  },
  {
    MABH: "18490",
    TENBH: "SHOUT",
    TACGIA: "Tears For Fears",
  },
  {
    MABH: "24487",
    TENBH: "SHOUT OUT TO MY EX",
    TACGIA: "Little Mix",
  },
  {
    MABH: "33988",
    TENBH: "SHOW COMPLETO",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "15192",
    TENBH: "SHOW DAS PODEROSAS",
    TACGIA: "Anitta",
  },
  {
    MABH: "6077",
    TENBH: "SHOW DE BOLA",
    TACGIA: "Daniel",
  },
  {
    MABH: "6634",
    TENBH: "SHOW DE ROCK ROLL",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "26139",
    TENBH: "SHOW ME HOW TO LIVE",
    TACGIA: "Audioslave",
  },
  {
    MABH: "4843",
    TENBH: "SHOW ME THE MEANING OF BEING LONELY",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "24096",
    TENBH: "SHOWER",
    TACGIA: "Becky G",
  },
  {
    MABH: "18356",
    TENBH: "SHUT UP",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "24958",
    TENBH: "SHUT UP",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "24205",
    TENBH: "SHUT UP & DRIVE",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24479",
    TENBH: "SIDE TO SIDE",
    TACGIA: "Ariana Grande ft. Nicki Minaj",
  },
  {
    MABH: "2740",
    TENBH: "SIGA SEU RUMO",
    TACGIA: "Pimpinela",
  },
  {
    MABH: "24546",
    TENBH: "SIGN OF THE TIMES",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "18581",
    TENBH: "SILENT LUCIDITY",
    TACGIA: "Queensryche",
  },
  {
    MABH: "18806",
    TENBH: "SILENT MORNING",
    TACGIA: "Noel",
  },
  {
    MABH: "18699",
    TENBH: "SILLY LOVE SONGS",
    TACGIA: "Wings",
  },
  {
    MABH: "4651",
    TENBH: "SILVER BELLS",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "33721",
    TENBH: "SIM OU NÃO",
    TACGIA: "Anitta part. Maluma",
  },
  {
    MABH: "26083",
    TENBH: "SIMPLE MAN",
    TACGIA: "Lynyrd Skynyrd",
  },
  {
    MABH: "33052",
    TENBH: "SIMPLES ASSIM",
    TACGIA: "Cristiano Araújo & Humberto e Ronaldo",
  },
  {
    MABH: "6274",
    TENBH: "SIMPLES DESEJO",
    TACGIA: "Luciana Mello",
  },
  {
    MABH: "33384",
    TENBH: "SIMPLES DESEJO",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "2930",
    TENBH: "SIMPLESMENTE",
    TACGIA: "Pedro Mariano",
  },
  {
    MABH: "2931",
    TENBH: "SIMPLESMENTE ACONTECEU",
    TACGIA: "Ana Carolina part. Chiara Civello",
  },
  {
    MABH: "5969",
    TENBH: "SIMPLY THE BEST",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "24953",
    TENBH: "SIN PIJAMA",
    TACGIA: "Becky G ft. Natti Natasha",
  },
  {
    MABH: "3257",
    TENBH: "SINA",
    TACGIA: "Djavan",
  },
  {
    MABH: "1438",
    TENBH: "SINAIS",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "15677",
    TENBH: "SINAIS",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "6676",
    TENBH: "SINAIS DE FOGO",
    TACGIA: "Preta Gil",
  },
  {
    MABH: "2932",
    TENBH: "SINAL DISFARÇADO",
    TACGIA: "Ze Ricardo e Thiago & Israel Novaes",
  },
  {
    MABH: "24778",
    TENBH: "SINCE I DON'T HAVE YOU",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "24921",
    TENBH: "SINCE U BEEN GONE",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "33198",
    TENBH: "SINCERAMENTE",
    TACGIA: "Kléo Dibah e Rafael",
  },
  {
    MABH: "18919",
    TENBH: "SING",
    TACGIA: "The Carpenters",
  },
  {
    MABH: "24350",
    TENBH: "SING",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "24567",
    TENBH: "SING",
    TACGIA: "Travis",
  },
  {
    MABH: "9170",
    TENBH: "SINGIN' IN THE RAIN",
    TACGIA: "Gene Kelly",
  },
  {
    MABH: "2537",
    TENBH: "SINGLE LADIES",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "30070",
    TENBH: "SINGULAR",
    TACGIA: "Anavitória",
  },
  {
    MABH: "6793",
    TENBH: "SINÔNIMO",
    TACGIA: "Zé Ramalho e Chitãozinho & Xororó",
  },
  {
    MABH: "9881",
    TENBH: "SINTO FALTA DE VOCÊ",
    TACGIA: "Victor e Leo",
  },
  {
    MABH: "33377",
    TENBH: "SINTO SAUDADE",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33715",
    TENBH: "SINTONIA E DESEJO",
    TACGIA: "Aviões do Forró part. Ivete Sangalo",
  },
  {
    MABH: "24779",
    TENBH: "SIR DUKE",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "2877",
    TENBH: "SISSI",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "18700",
    TENBH: "SISSY THAT WALK",
    TACGIA: "RuPaul",
  },
  {
    MABH: "6876",
    TENBH: "SISTEMA BRUTO",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "18629",
    TENBH: "SISTER",
    TACGIA: "The Nixons",
  },
  {
    MABH: "2630",
    TENBH: "SISTER GOLDEN HAIR",
    TACGIA: "America",
  },
  {
    MABH: "5970",
    TENBH: "SITTING, WAITING, WISHING",
    TACGIA: "Jack Johnson",
  },
  {
    MABH: "9270",
    TENBH: "SIXTEEN CANDLES",
    TACGIA: "The Crests",
  },
  {
    MABH: "5971",
    TENBH: "SKATER BOY",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "24034",
    TENBH: "SKY FULL OF STARS",
    TACGIA: "Coldplay",
  },
  {
    MABH: "24003",
    TENBH: "SKYFALL",
    TACGIA: "Adele",
  },
  {
    MABH: "4768",
    TENBH: "SKYLINE PIGEON",
    TACGIA: "Elton John",
  },
  {
    MABH: "18472",
    TENBH: "SKYSCRAPER",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "9234",
    TENBH: "SLAVE TO LOVE",
    TACGIA: "Bryan Ferry",
  },
  {
    MABH: "26225",
    TENBH: "SLAVE TO THE RHYTHM",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "18071",
    TENBH: "SLEEPING SUN",
    TACGIA: "Nightwish",
  },
  {
    MABH: "4652",
    TENBH: "SLOOP JOHN B.",
    TACGIA: "Beach Boys",
  },
  {
    MABH: "24093",
    TENBH: "SLOW DOWN",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "18701",
    TENBH: "SMACK THAT",
    TACGIA: "Akon ft. Eminem",
  },
  {
    MABH: "26146",
    TENBH: "SMALLTOWN BOY",
    TACGIA: "Bronski Beat",
  },
  {
    MABH: "18313",
    TENBH: "SMELLS LIKE TEEN SPIRIT",
    TACGIA: "Nirvana",
  },
  {
    MABH: "18414",
    TENBH: "SMILE",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "24306",
    TENBH: "SMILE",
    TACGIA: "Lily Allen",
  },
  {
    MABH: "5972",
    TENBH: "SMILE A LITTLE SMILE FOR ME",
    TACGIA: "Flying Machine",
  },
  {
    MABH: "33022",
    TENBH: "SMIRNOFY",
    TACGIA: "Bruninho e Davi",
  },
  {
    MABH: "4769",
    TENBH: "SMOKE GETS IN YOUR EYES",
    TACGIA: "Platters",
  },
  {
    MABH: "18011",
    TENBH: "SMOKE ON THE WATER",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "9055",
    TENBH: "SMOOTH",
    TACGIA: "Santana",
  },
  {
    MABH: "4966",
    TENBH: "SMOOTH CRIMINAL",
    TACGIA: "Alien Ant Farm",
  },
  {
    MABH: "18702",
    TENBH: "SMOOTH CRIMINAL",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "9056",
    TENBH: "SMOOTH OPERATOR",
    TACGIA: "Sade",
  },
  {
    MABH: "18582",
    TENBH: "SNOW (HEY OH)",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "6355",
    TENBH: "SÓ A LUA",
    TACGIA: "Absyntho",
  },
  {
    MABH: "6154",
    TENBH: "SÓ ALEGRIA",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "3258",
    TENBH: "SÓ COM VOCÊ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "33906",
    TENBH: "SÓ DÁ NÓS DOIS",
    TACGIA: "Simone e Simaria part. Gabriel Diniz",
  },
  {
    MABH: "30413",
    TENBH: "SÓ DÁ TU",
    TACGIA: "Banda A Favorita",
  },
  {
    MABH: "7450",
    TENBH: "SÓ DÁ VOCÊ NA MINHA VIDA",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "33016",
    TENBH: "SÓ DANÇO SAMBA",
    TACGIA: "Bebel Gilberto",
  },
  {
    MABH: "33242",
    TENBH: "SÓ DE PENSAR",
    TACGIA: "Maria Cecília e Rodolfo & Jorge e Mateus",
  },
  {
    MABH: "9340",
    TENBH: "SÓ DE VOCÊ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "9535",
    TENBH: "SÓ DE VOCÊ",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "33303",
    TENBH: "SÓ DOU CARONA PRA QUEM DEU PRA MIM",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "33305",
    TENBH: "SÓ FALTA VOCÊ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "9171",
    TENBH: "SO FAR AWAY",
    TACGIA: "Carole King",
  },
  {
    MABH: "18807",
    TENBH: "SO FAR AWAY",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "24780",
    TENBH: "SO HELP ME GIRL",
    TACGIA: "Gary Barlow",
  },
  {
    MABH: "6509",
    TENBH: "SÓ HOJE",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "4375",
    TENBH: "SÓ LEMBRANÇAS",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "18181",
    TENBH: "SO LONELY",
    TACGIA: "The Police",
  },
  {
    MABH: "3259",
    TENBH: "SÓ LOUCO",
    TACGIA: "Nana Caymmi",
  },
  {
    MABH: "4133",
    TENBH: "SÓ LOVE",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "30355",
    TENBH: "SO MAIS UMA VEZ",
    TACGIA: "Gilberto e Gilmar",
  },
  {
    MABH: "33989",
    TENBH: "SÓ NÃO DEIXA EU TOMAR BIRRA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "33306",
    TENBH: "SÓ NÓS DOIS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "30669",
    TENBH: "SÓ O AMOR CONSTRÓI",
    TACGIA: "Dom e Ravel",
  },
  {
    MABH: "9537",
    TENBH: "SÓ O FIM",
    TACGIA: "Camisa de Vênus",
  },
  {
    MABH: "1520",
    TENBH: "SÓ OS LOUCOS SABEM",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "6510",
    TENBH: "SÓ PENSANDO EM VOCÊ",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "1573",
    TENBH: "SÓ PENSO EM NÓS",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "1472",
    TENBH: "SÓ POR UM MOMENTO",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "31012",
    TENBH: "SÓ POR UMA NOITE",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "30224",
    TENBH: "SÓ POSSO DIZER",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "30670",
    TENBH: "SÓ PRA CASTIGAR",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "30225",
    TENBH: "SÓ PRA CONTRARIAR",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "3858",
    TENBH: "SÓ PRO MEU PRAZER",
    TACGIA: "Heróis da Resistência",
  },
  {
    MABH: "33045",
    TENBH: "SÓ QUE NÃO",
    TACGIA: "Cleber e Cauan part. Cácio e Marcos",
  },
  {
    MABH: "33213",
    TENBH: "SÓ QUEM AMA ENTENDE",
    TACGIA: "Loubet part. Conrado",
  },
  {
    MABH: "33311",
    TENBH: "SÓ REZO",
    TACGIA: "NX Zero",
  },
  {
    MABH: "33047",
    TENBH: "SÓ SE FOR GELADA",
    TACGIA: "Conrado e Aleksandro",
  },
  {
    MABH: "30436",
    TENBH: "SÓ SEI TE AMAR",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "5973",
    TENBH: "SO SICK",
    TACGIA: "Ne-Yo",
  },
  {
    MABH: "15398",
    TENBH: "SÓ TEM EU",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6511",
    TENBH: "SÓ TINHA DE SER COM VOCÊ",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "30833",
    TENBH: "SÓ VAI DE CAMAROTE",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "33328",
    TENBH: "SÓ VEJO VOCÊ",
    TACGIA: "Tânia Mara",
  },
  {
    MABH: "3492",
    TENBH: "SÓ VOCÊ",
    TACGIA: "Vinícius Cantuária",
  },
  {
    MABH: "3815",
    TENBH: "SÓ VOCÊ",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "30671",
    TENBH: "SÓ VOCÊ (SÓ PRECISO DE VOCÊ)",
    TACGIA: "Dennis DJ e MC G15",
  },
  {
    MABH: "15118",
    TENBH: "SÓ VOU BEBER MAIS HOJE",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "1877",
    TENBH: "SÓ VOU GOSTAR DE QUEM GOSTA DE MIM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30226",
    TENBH: "SÓ VOU GOSTAR DE QUEM GOSTA DE MIM",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30227",
    TENBH: "SÓ VOU SE VOCÊ FOR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "18322",
    TENBH: "SO WHAT",
    TACGIA: "Pink",
  },
  {
    MABH: "33332",
    TENBH: "SÓ ZOEIRA",
    TACGIA: "Rony e Baby",
  },
  {
    MABH: "18324",
    TENBH: "SOBER",
    TACGIA: "Pink",
  },
  {
    MABH: "18420",
    TENBH: "SOBER",
    TACGIA: "Tool",
  },
  {
    MABH: "24781",
    TENBH: "SOBER",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "3260",
    TENBH: "SOBRADINHO",
    TACGIA: "Sá e Guarabyra",
  },
  {
    MABH: "30253",
    TENBH: "SOBRADINHO",
    TACGIA: "Trio Nordestino",
  },
  {
    MABH: "30939",
    TENBH: "SOBRANDO AUSÊNCIA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "2958",
    TENBH: "SOBRE AS AGUAS",
    TACGIA: "Trazendo a Arca",
  },
  {
    MABH: "15791",
    TENBH: "SOBRE O TEMPO",
    TACGIA: "Nenhum de Nos",
  },
  {
    MABH: "30996",
    TENBH: "SOBREVIVI",
    TACGIA: "Sarah Farias",
  },
  {
    MABH: "6512",
    TENBH: "SOCIEDADE ALTERNATIVA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "30672",
    TENBH: "SOFAZINHO",
    TACGIA: "Luan Santana ft. Jorge e Mateus",
  },
  {
    MABH: "30769",
    TENBH: "SOFRENDO AO QUADRADO",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "15193",
    TENBH: "SOGRÃO CAPRICHOU",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "33467",
    TENBH: "SOL DA MINHA VIDA",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "3493",
    TENBH: "SOL DE PRIMAVERA",
    TACGIA: "Beto Guedes",
  },
  {
    MABH: "8082",
    TENBH: "SOLAMENTE UNA VEZ",
    TACGIA: "Luis Miguel",
  },
  {
    MABH: "4653",
    TENBH: "SOLDIER OF FORTUNE",
    TACGIA: "Deep Purple",
  },
  {
    MABH: "18386",
    TENBH: "SOLDIER OF LOVE",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "33316",
    TENBH: "SOLETRAR",
    TACGIA: "Pixote",
  },
  {
    MABH: "6031",
    TENBH: "SOLIDÃO",
    TACGIA: "Sandra de Sá",
  },
  {
    MABH: "30415",
    TENBH: "SOLIDÃO",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33543",
    TENBH: "SOLIDÃO QUE NADA",
    TACGIA: "Cazuza",
  },
  {
    MABH: "30910",
    TENBH: "SOLINHO DA RABETA",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "24782",
    TENBH: "SOLO",
    TACGIA: "Clean Bandit ft. Demi Lovato",
  },
  {
    MABH: "30563",
    TENBH: "SOLTA A BATIDA",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "33317",
    TENBH: "SOLTA NA NOITE",
    TACGIA: "Pollo part. Sorriso Maroto",
  },
  {
    MABH: "30071",
    TENBH: "SOLTEIRO APAIXONADO",
    TACGIA: "Marcos e Belutti",
  },
  {
    MABH: "33990",
    TENBH: "SOLTEIRO DE NOVO",
    TACGIA: "Wesley Safadão part. Ronaldinho Gaúcho",
  },
  {
    MABH: "30720",
    TENBH: "SOLTEIRO NÃO TRAI",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "33895",
    TENBH: "SOLTEIRO SIM",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "30387",
    TENBH: "SOLTEIRO SIM, SOZINHO NUNCA",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "30032",
    TENBH: "SOLTINHA",
    TACGIA: "MC Bola feat. Mr. Catra e Dennis DJ",
  },
  {
    MABH: "1745",
    TENBH: "SOM DE CRISTAL",
    TACGIA: "Joaquim e Manuel",
  },
  {
    MABH: "33470",
    TENBH: "SOM DE PRETO",
    TACGIA: "Amilcka e Chocolate",
  },
  {
    MABH: "33802",
    TENBH: "SOM DO SOLINHO",
    TACGIA: "Boyzinho o Rei da Bregadeira",
  },
  {
    MABH: "7249",
    TENBH: "SOM E IMAGEM",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33361",
    TENBH: "SOMBRAS",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "9173",
    TENBH: "SOME GUYS HAVE ALL THE LUCK",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "24971",
    TENBH: "SOME KIND OF WONDERFUL",
    TACGIA: "Grand Funk Railroad",
  },
  {
    MABH: "30825",
    TENBH: "SOME QUE ELE VEM ATRÁS",
    TACGIA: "Anitta & Marília Mendonça",
  },
  {
    MABH: "24240",
    TENBH: "SOMEBODY",
    TACGIA: "Natalie La Rose feat. Jeremih",
  },
  {
    MABH: "24291",
    TENBH: "SOMEBODY SOMEONE",
    TACGIA: "Korn",
  },
  {
    MABH: "24334",
    TENBH: "SOMEBODY THAT I USED TO KNOW",
    TACGIA: "Gotye ft. Kimbra",
  },
  {
    MABH: "4967",
    TENBH: "SOMEBODY TO LOVE",
    TACGIA: "Queen",
  },
  {
    MABH: "18496",
    TENBH: "SOMEBODY TOLD ME",
    TACGIA: "The Killers",
  },
  {
    MABH: "24933",
    TENBH: "SOMEBODY'S WATCHING ME",
    TACGIA: "Rockwell",
  },
  {
    MABH: "18203",
    TENBH: "SOMEDAY",
    TACGIA: "Sugar Ray",
  },
  {
    MABH: "18389",
    TENBH: "SOMEDAY",
    TACGIA: "Nickelback",
  },
  {
    MABH: "26233",
    TENBH: "SOMEDAY",
    TACGIA: "The Strokes",
  },
  {
    MABH: "18415",
    TENBH: "SOMEDAY WE'LL KNOW",
    TACGIA: "New Radicals",
  },
  {
    MABH: "30228",
    TENBH: "SOMENTE VOCÊ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "2600",
    TENBH: "SOMEONE LIKE YOU",
    TACGIA: "Adele",
  },
  {
    MABH: "26063",
    TENBH: "SOMEONE NEW",
    TACGIA: "Hozier",
  },
  {
    MABH: "24880",
    TENBH: "SOMEONE YOU LOVED",
    TACGIA: "Lewis Capaldi",
  },
  {
    MABH: "9057",
    TENBH: "SOMETHIN' STUPID",
    TACGIA: "Robbie Williams & Nicole Kidma",
  },
  {
    MABH: "4770",
    TENBH: "SOMETHING",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24783",
    TENBH: "SOMETHING ABOUT YOU",
    TACGIA: "Level 42",
  },
  {
    MABH: "24078",
    TENBH: "SOMETHING BAD",
    TACGIA: "Miranda Lambert & Carrie Underwood",
  },
  {
    MABH: "24354",
    TENBH: "SOMETHING FROM NOTHING",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "24652",
    TENBH: "SOMETHING GOT ME STARTED",
    TACGIA: "Simply Red",
  },
  {
    MABH: "18583",
    TENBH: "SOMETHING TO BELIEVE IN",
    TACGIA: "Poison",
  },
  {
    MABH: "24784",
    TENBH: "SOMETHING'S GOTTA GIVE",
    TACGIA: "Camila Cabello",
  },
  {
    MABH: "24547",
    TENBH: "SOMETIMES",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24653",
    TENBH: "SOMETIMES",
    TACGIA: "Erasure",
  },
  {
    MABH: "18033",
    TENBH: "SOMEWHERE I BELONG",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "5974",
    TENBH: "SOMEWHERE ONLY WE KNOW",
    TACGIA: "Keane",
  },
  {
    MABH: "33318",
    TENBH: "SOMOS ASSIM",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "6277",
    TENBH: "SOMOS IGUAIS",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "4054",
    TENBH: "SOMOS QUEM PODEMOS SER",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "1878",
    TENBH: "SONDA-ME",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "18004",
    TENBH: "SONG 2",
    TACGIA: "Blur",
  },
  {
    MABH: "18920",
    TENBH: "SONG SUNG BLUE",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "33991",
    TENBH: "SONHA COMIGO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "33475",
    TENBH: "SONHAR",
    TACGIA: "MC Gui",
  },
  {
    MABH: "6982",
    TENBH: "SONHAR CONTIGO",
    TACGIA: "Adilson Ramos",
  },
  {
    MABH: "7456",
    TENBH: "SONHEI COM VOCÊ",
    TACGIA: "Milionario e José Rico",
  },
  {
    MABH: "30673",
    TENBH: "SONHEI QUE TAVA ME CASANDO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "15434",
    TENBH: "SONHO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "33781",
    TENBH: "SONHO",
    TACGIA: "Cleber e Cauan",
  },
  {
    MABH: "33417",
    TENBH: "SONHO DE AMOR",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "6435",
    TENBH: "SONHO DE ÍCARO",
    TACGIA: "Byafra",
  },
  {
    MABH: "7457",
    TENBH: "SONHO DE UM CAMINHONEIRO",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "6314",
    TENBH: "SONHO LINDO",
    TACGIA: "Paulo Ricardo",
  },
  {
    MABH: "30416",
    TENBH: "SONHO LOUCO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "3391",
    TENBH: "SONHO MEU",
    TACGIA: "Maria Bethânia",
  },
  {
    MABH: "30229",
    TENBH: "SONHO MEU",
    TACGIA: "José Augusto e Xuxa",
  },
  {
    MABH: "3262",
    TENBH: "SONHO POR SONHO",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "30795",
    TENBH: "SONHO POR SONHO",
    TACGIA: "José Augusto",
  },
  {
    MABH: "3936",
    TENBH: "SONHOS",
    TACGIA: "Peninha",
  },
  {
    MABH: "4376",
    TENBH: "SONHOS DE UM PALHAÇO",
    TACGIA: "Antônio Marcos",
  },
  {
    MABH: "15753",
    TENBH: "SONHOS E PLANOS (SOU EU)",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "3774",
    TENBH: "SONÍFERA ILHA",
    TACGIA: "Titãs",
  },
  {
    MABH: "15509",
    TENBH: "SORRI (SMILE)",
    TACGIA: "Djavan",
  },
  {
    MABH: "2933",
    TENBH: "SORRI, SOU REI",
    TACGIA: "Natiruts e Cláudia Leitte",
  },
  {
    MABH: "4254",
    TENBH: "SORRIA, SORRIA",
    TACGIA: "Evaldo Braga",
  },
  {
    MABH: "18173",
    TENBH: "SORROW",
    TACGIA: "David Bowie",
  },
  {
    MABH: "9271",
    TENBH: "SORRY",
    TACGIA: "Madonna",
  },
  {
    MABH: "24438",
    TENBH: "SORRY",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "24480",
    TENBH: "SORRY",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "24548",
    TENBH: "SORRY NOT SORRY",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "24654",
    TENBH: "SORRY SEEMS TO BE THE HARDEST WORD",
    TACGIA: "Elton John",
  },
  {
    MABH: "18703",
    TENBH: "SORRY, BLAME IT ON ME",
    TACGIA: "Akon",
  },
  {
    MABH: "3937",
    TENBH: "SORTE",
    TACGIA: "Caetano Veloso e Gal Costa",
  },
  {
    MABH: "33163",
    TENBH: "SORTE É TER VOCÊ",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "6636",
    TENBH: "SORTE GRANDE",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30230",
    TENBH: "SORTE QUE CÊ BEIJA BEM",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "33801",
    TENBH: "SORTE TEM QUEM ACREDITA NELA",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "24852",
    TENBH: "SOS",
    TACGIA: "Avicii ft. Aloe Blacc",
  },
  {
    MABH: "6356",
    TENBH: "SOSSEGO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33542",
    TENBH: "SOSSEGUEI",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "33319",
    TENBH: "SOU CIUMENTO MESMO",
    TACGIA: "Fernando e Sorocaba part. Wesley Safadão",
  },
  {
    MABH: "7251",
    TENBH: "SOU EU",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30674",
    TENBH: "SOU EU",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "33912",
    TENBH: "SOU EU",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "30245",
    TENBH: "SOU FODA",
    TACGIA: "Carlos e Jader",
  },
  {
    MABH: "2473",
    TENBH: "SOU HUMANO",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "30072",
    TENBH: "SOU IGUALZINHO À VOCÊ",
    TACGIA: "Amado Batista ft. Elias Wagner",
  },
  {
    MABH: "33125",
    TENBH: "SOU LOUCO POR UM BEIJO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "33385",
    TENBH: "SOU O CARA PRA VOCÊ",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "33418",
    TENBH: "SOU SEU AMOR E VOCE É  MINHA VIDA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30675",
    TENBH: "SOU TEU FÃ",
    TACGIA: "Dennis DJ, Bruno Martini ft. Vitin",
  },
  {
    MABH: "33800",
    TENBH: "SOU UMA CRIANÇA, NÃO ENTENDO NADA",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "33320",
    TENBH: "SOU VOCÊ",
    TACGIA: "Toni Garrido",
  },
  {
    MABH: "30944",
    TENBH: "SOUBE QUE ME AMAVA",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "24506",
    TENBH: "SOUNDCHECK",
    TACGIA: "Catfish & The Bottlemen",
  },
  {
    MABH: "18628",
    TENBH: "SOUR GIRL",
    TACGIA: "Stone Temple Pilots",
  },
  {
    MABH: "18704",
    TENBH: "SOWING THE SEEDS OF LOVE",
    TACGIA: "Tears For Fears",
  },
  {
    MABH: "19474",
    TENBH: "SOY UM TRUHÁN SOY UM SEÑOR",
    TACGIA: "Julio Iglesias",
  },
  {
    MABH: "3494",
    TENBH: "SOZINHO",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "4134",
    TENBH: "SOZINHO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "18808",
    TENBH: "SPANISH EYES",
    TACGIA: "Al Martino",
  },
  {
    MABH: "4844",
    TENBH: "SPANISH GUITAR",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "24344",
    TENBH: "SPECTRUM (SAY MY NAME)",
    TACGIA: "Florence + The Machine (Calvin Harris Remix)",
  },
  {
    MABH: "18008",
    TENBH: "SPEED OF SOUND",
    TACGIA: "Coldplay",
  },
  {
    MABH: "4771",
    TENBH: "SPENDING MY TIME",
    TACGIA: "Roxette",
  },
  {
    MABH: "24655",
    TENBH: "SPICE UP YOUR LIFE",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "6195",
    TENBH: "SPLISH SPLASH",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "24656",
    TENBH: "SPOILED",
    TACGIA: "Joss Stone",
  },
  {
    MABH: "24568",
    TENBH: "SPOONMAN",
    TACGIA: "Soundgarden",
  },
  {
    MABH: "18307",
    TENBH: "ST. ANGER",
    TACGIA: "Metallica",
  },
  {
    MABH: "24909",
    TENBH: "STACY'S MOM",
    TACGIA: "Fountains of Wayne",
  },
  {
    MABH: "18931",
    TENBH: "STAIRWAY TO HEAVEN",
    TACGIA: "Led Zeppelin",
  },
  {
    MABH: "18809",
    TENBH: "STAN",
    TACGIA: "Eminem ft. Dido",
  },
  {
    MABH: "4549",
    TENBH: "STAND BY ME",
    TACGIA: "John Lennon",
  },
  {
    MABH: "18411",
    TENBH: "STAND BY ME",
    TACGIA: "Ben E. King",
  },
  {
    MABH: "4605",
    TENBH: "STAND BY YOUR MAN",
    TACGIA: "Tammy Wynette",
  },
  {
    MABH: "5975",
    TENBH: "STAR",
    TACGIA: "Erasure",
  },
  {
    MABH: "24489",
    TENBH: "STARBOY",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "18584",
    TENBH: "STARMAN",
    TACGIA: "David Bowie",
  },
  {
    MABH: "9058",
    TENBH: "STARS",
    TACGIA: "Simply Red",
  },
  {
    MABH: "24262",
    TENBH: "STARSHIPS",
    TACGIA: "Nicki Minaj",
  },
  {
    MABH: "24274",
    TENBH: "STARSTRUKK",
    TACGIA: "3OH!3 feat. Katy Perry",
  },
  {
    MABH: "5976",
    TENBH: "START OF SOMETHING NEW",
    TACGIA: "High School Musical",
  },
  {
    MABH: "24872",
    TENBH: "STARTED",
    TACGIA: "Iggy Azalea",
  },
  {
    MABH: "24192",
    TENBH: "STARTED FROM BOTTOM",
    TACGIA: "Drake",
  },
  {
    MABH: "30564",
    TENBH: "STATUS QUE EU NÃO QUERIA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "5977",
    TENBH: "STAY",
    TACGIA: "Maurice Williams & The Zodiacs",
  },
  {
    MABH: "24381",
    TENBH: "STAY",
    TACGIA: "Kygo & Maty Noyes",
  },
  {
    MABH: "24657",
    TENBH: "STAY",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24785",
    TENBH: "STAY (FARWAY SO CLOSE)",
    TACGIA: "U2",
  },
  {
    MABH: "18225",
    TENBH: "STAY ON THESE ROADS",
    TACGIA: "A-Ha",
  },
  {
    MABH: "24091",
    TENBH: "STAY WITH ME",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "4772",
    TENBH: "STAYIN' ALIVE",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "18499",
    TENBH: "STEADY, AS SHE GOES",
    TACGIA: "The Raconteurs",
  },
  {
    MABH: "24279",
    TENBH: "STEAL MY GIRL",
    TACGIA: "One Direction",
  },
  {
    MABH: "9174",
    TENBH: "STEAMY WINDOWS",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "9059",
    TENBH: "STELLA BY STARLIGHT",
    TACGIA: "Tony Bennett",
  },
  {
    MABH: "24989",
    TENBH: "STEP BY STEP",
    TACGIA: "New Kids On The Block",
  },
  {
    MABH: "24569",
    TENBH: "STEP INTO CHRISTMAS",
    TACGIA: "Elton John",
  },
  {
    MABH: "33799",
    TENBH: "STEREO",
    TACGIA: "Preta Gil",
  },
  {
    MABH: "5978",
    TENBH: "STICK TO THE STATUS QUO",
    TACGIA: "High School Musical",
  },
  {
    MABH: "9272",
    TENBH: "STICKWITU",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "4773",
    TENBH: "STILL",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "24481",
    TENBH: "STILL FALLING FOR YOU",
    TACGIA: "Ellie Goulding",
  },
  {
    MABH: "4968",
    TENBH: "STILL GOT THE BLUES",
    TACGIA: "Gary Moore",
  },
  {
    MABH: "24083",
    TENBH: "STILL INTO YOU",
    TACGIA: "Paramore",
  },
  {
    MABH: "18166",
    TENBH: "STILL LOVING YOU",
    TACGIA: "Scorpions",
  },
  {
    MABH: "24408",
    TENBH: "STITCHES",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "24393",
    TENBH: "STONE COLD",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "9175",
    TENBH: "STONEY END",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "24658",
    TENBH: "STOP",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "24907",
    TENBH: "STOP",
    TACGIA: "Erasure",
  },
  {
    MABH: "5979",
    TENBH: "STOP CRYING YOUR HEART OUT",
    TACGIA: "Oasis",
  },
  {
    MABH: "18055",
    TENBH: "STOP LOOK LISTEN (TO YOUR HEART)",
    TACGIA: "Marvin Gaye",
  },
  {
    MABH: "33026",
    TENBH: "STOP QUE ELA É TOP",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "5980",
    TENBH: "STORMY WEATHER",
    TACGIA: "Lena Horne",
  },
  {
    MABH: "24363",
    TENBH: "STORY OF MY LIFE",
    TACGIA: "One Direction",
  },
  {
    MABH: "18627",
    TENBH: "STRAIGHT FROM THE HEART",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "5981",
    TENBH: "STRANGE LOVE",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "24526",
    TENBH: "STRANGERS",
    TACGIA: "Halsey ft. Lauren Jauregui",
  },
  {
    MABH: "24786",
    TENBH: "STRANGERS",
    TACGIA: "Sigrid",
  },
  {
    MABH: "4774",
    TENBH: "STRANGERS IN THE NIGHT",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "3639",
    TENBH: "STRANI AMORI",
    TACGIA: "Renato Russo",
  },
  {
    MABH: "18143",
    TENBH: "STRANI AMORI",
    TACGIA: "Laura Pausini",
  },
  {
    MABH: "5982",
    TENBH: "STREETS OF PHILADELPHIA",
    TACGIA: "Bruce Springsteen",
  },
  {
    MABH: "24394",
    TENBH: "STRESSED OUT",
    TACGIA: "Twenty One Pilots",
  },
  {
    MABH: "18211",
    TENBH: "STRICKEN",
    TACGIA: "Disturbed",
  },
  {
    MABH: "4969",
    TENBH: "STRONG ENOUGH",
    TACGIA: "Cher",
  },
  {
    MABH: "24659",
    TENBH: "STRONG ENOUGH",
    TACGIA: "Sheryl Crow",
  },
  {
    MABH: "24277",
    TENBH: "STRONGER",
    TACGIA: "Kanye West",
  },
  {
    MABH: "24549",
    TENBH: "STRONGER",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24332",
    TENBH: "STRONGER (WHAT DOESN'T KILL YOU)",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "18921",
    TENBH: "STUCK IN A MOMENT YOU CAN'T GET OUT OF",
    TACGIA: "U2",
  },
  {
    MABH: "4775",
    TENBH: "STUCK ON YOU",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "24092",
    TENBH: "STUDIO",
    TACGIA: "SchoolBoy Q ft. BJ The Chicago Kid",
  },
  {
    MABH: "18254",
    TENBH: "STUPID GIRL",
    TACGIA: "Cold",
  },
  {
    MABH: "24787",
    TENBH: "STUPID GIRL",
    TACGIA: "Garbage",
  },
  {
    MABH: "26075",
    TENBH: "STUPID LOVE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "24286",
    TENBH: "STYLE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "30231",
    TENBH: "SUA CARA",
    TACGIA: "Anitta & Pabllo Vittar ft. Major Lazer",
  },
  {
    MABH: "6387",
    TENBH: "SUA ESTUPIDEZ",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33056",
    TENBH: "SUA LINDA",
    TACGIA: "Denner Ferrari & Lucas Lucco",
  },
  {
    MABH: "30565",
    TENBH: "SUA MELHOR VERSÃO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30418",
    TENBH: "SUAVE",
    TACGIA: "Alok part. Matheus e Kauan",
  },
  {
    MABH: "6513",
    TENBH: "SUAVE É A NOITE",
    TACGIA: "Moacyr Franco",
  },
  {
    MABH: "33717",
    TENBH: "SUBIDINHA",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "30324",
    TENBH: "SUBINDO PELAS PAREDES",
    TACGIA: "Elymar Santos",
  },
  {
    MABH: "24873",
    TENBH: "SUCKER",
    TACGIA: "Jonas Brothers",
  },
  {
    MABH: "9273",
    TENBH: "SUDDENLY I SEE",
    TACGIA: "Kate Tunstall",
  },
  {
    MABH: "26172",
    TENBH: "SUEDEHEAD",
    TACGIA: "Morissey",
  },
  {
    MABH: "18005",
    TENBH: "SUFFOCATE",
    TACGIA: "Cold",
  },
  {
    MABH: "6553",
    TENBH: "SUFOCADO",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3263",
    TENBH: "SUFOCO",
    TACGIA: "Alcione",
  },
  {
    MABH: "9884",
    TENBH: "SUFOCO",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "24359",
    TENBH: "SUGAR",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "24401",
    TENBH: "SUGAR",
    TACGIA: "Robin Schulz & Francesco Yates",
  },
  {
    MABH: "24660",
    TENBH: "SUGAR WE'RE GOING DOWN",
    TACGIA: "Fall Out Boy",
  },
  {
    MABH: "4654",
    TENBH: "SUGAR, SUGAR",
    TACGIA: "The Archies",
  },
  {
    MABH: "33009",
    TENBH: "SUÍTE 14",
    TACGIA: "Henrique e Diego",
  },
  {
    MABH: "30770",
    TENBH: "SUJEITO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "18013",
    TENBH: "SULTANS OF SWING",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "24031",
    TENBH: "SUMMER",
    TACGIA: "Calvin Harris",
  },
  {
    MABH: "4776",
    TENBH: "SUMMER NIGHTS",
    TACGIA: "John Travolta & Olivia Newton",
  },
  {
    MABH: "18706",
    TENBH: "SUMMER OF '69",
    TACGIA: "Bryan Adams",
  },
  {
    MABH: "18707",
    TENBH: "SUMMERTIME BLUES",
    TACGIA: "Eddie Cochran",
  },
  {
    MABH: "24072",
    TENBH: "SUMMERTIME SADNESS",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "18922",
    TENBH: "SUN IS SHINING (REMIX)",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "4777",
    TENBH: "SUNDAY BLOODY SUNDAY",
    TACGIA: "U2",
  },
  {
    MABH: "18145",
    TENBH: "SUNDAY MORNING",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "24885",
    TENBH: "SUNFLOWER",
    TACGIA: "Post Malone",
  },
  {
    MABH: "26042",
    TENBH: "SUNGLASSES AT NIGHT",
    TACGIA: "Corey Hart",
  },
  {
    MABH: "4655",
    TENBH: "SUNRISE SUNSET",
    TACGIA: "Sheldon Harnick and Jerry Bock",
  },
  {
    MABH: "18585",
    TENBH: "SUNSHINE",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "4550",
    TENBH: "SUNSHINE ON MY SHOULDERS",
    TACGIA: "John Denver",
  },
  {
    MABH: "30841",
    TENBH: "SUOR DA SUA BOCA",
    TACGIA: "Lauana Prado ft. Bruno & Marrone",
  },
  {
    MABH: "1748",
    TENBH: "SUPER AMOR",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "24260",
    TENBH: "SUPER BASS",
    TACGIA: "Nicki Minaj",
  },
  {
    MABH: "24661",
    TENBH: "SUPER DUPER LOVE",
    TACGIA: "Joss Stone",
  },
  {
    MABH: "18194",
    TENBH: "SUPER FREAK",
    TACGIA: "Rick James",
  },
  {
    MABH: "6554",
    TENBH: "SUPER HERÓI",
    TACGIA: "Sandy & Junior",
  },
  {
    MABH: "6196",
    TENBH: "SUPER HOMEM",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "30802",
    TENBH: "SUPERA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "9540",
    TENBH: "SUPERAFIM",
    TACGIA: "Cansei de Ser Sexy",
  },
  {
    MABH: "1066",
    TENBH: "SUPERFANTÁSTICO",
    TACGIA: "A Turma do Balão Mágico",
  },
  {
    MABH: "18176",
    TENBH: "SUPERMASSIVE BLACK HOLE",
    TACGIA: "Muse",
  },
  {
    MABH: "4606",
    TENBH: "SUPERSTAR",
    TACGIA: "Carpenters",
  },
  {
    MABH: "24788",
    TENBH: "SUPERSTITION",
    TACGIA: "Stevie Wonder",
  },
  {
    MABH: "33321",
    TENBH: "SUPERWOMAN",
    TACGIA: "Pedro Mariano",
  },
  {
    MABH: "30987",
    TENBH: "SÚPLICA CEARENSE",
    TACGIA: "O Rappa",
  },
  {
    MABH: "30902",
    TENBH: "SUPOSTO NAMORADO",
    TACGIA: "Imaginasamba",
  },
  {
    MABH: "18923",
    TENBH: "SURFIN' USA",
    TACGIA: "Beach Boys",
  },
  {
    MABH: "31026",
    TENBH: "SURRA DE CAMA",
    TACGIA: "Xandy Avião e Lauana Prado",
  },
  {
    MABH: "33322",
    TENBH: "SURREAL",
    TACGIA: "Scalene",
  },
  {
    MABH: "4778",
    TENBH: "SURRENDER",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "30830",
    TENBH: "SURTADA",
    TACGIA: "Dadá Boladão & Tati Zaqui & OIK",
  },
  {
    MABH: "30878",
    TENBH: "SURTO DE AMOR",
    TACGIA: "Bruno & Marrone ft. Jorge e Mateus",
  },
  {
    MABH: "4971",
    TENBH: "SURVIVOR",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "4656",
    TENBH: "SUSIE Q",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "4779",
    TENBH: "SUSPICIOUS MINDS",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "24998",
    TENBH: "SUSSUDIO",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "1235",
    TENBH: "SUTILMENTE",
    TACGIA: "Skank",
  },
  {
    MABH: "18626",
    TENBH: "SWALLOWED",
    TACGIA: "Bush",
  },
  {
    MABH: "24869",
    TENBH: "SWAN SONG",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "24185",
    TENBH: "SWEAT",
    TACGIA: "Snoop Dog ft. David Guetta",
  },
  {
    MABH: "5983",
    TENBH: "SWEAT (A LA LA LA LA LONG)",
    TACGIA: "Inner Circle",
  },
  {
    MABH: "4780",
    TENBH: "SWEET BABY JAMES",
    TACGIA: "James Taylor",
  },
  {
    MABH: "24843",
    TENBH: "SWEET BUT PSYCHO",
    TACGIA: "Ava Max",
  },
  {
    MABH: "2655",
    TENBH: "SWEET CAROLINE",
    TACGIA: "Neil Diamond",
  },
  {
    MABH: "18146",
    TENBH: "SWEET CHILD O' MINE",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "2538",
    TENBH: "SWEET DREAMS",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "5984",
    TENBH: "SWEET DREAMS",
    TACGIA: "Eurythmics",
  },
  {
    MABH: "18321",
    TENBH: "SWEET HOME ALABAMA",
    TACGIA: "Lynyrd Skynyrd",
  },
  {
    MABH: "9176",
    TENBH: "SWEET LOVE",
    TACGIA: "Anita Baker",
  },
  {
    MABH: "24150",
    TENBH: "SWEET NOTHING",
    TACGIA: "Calvin Harris ft. Florence Welch",
  },
  {
    MABH: "18586",
    TENBH: "SWEET SACRIFICE",
    TACGIA: "Evanescence",
  },
  {
    MABH: "18924",
    TENBH: "SWEET SIXTEEN",
    TACGIA: "Billy Idol",
  },
  {
    MABH: "4055",
    TENBH: "SWING DA COR",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "24527",
    TENBH: "SWISH SWISH",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "24528",
    TENBH: "SWITCH",
    TACGIA: "Iggy Azalea ft. Anitta",
  },
  {
    MABH: "18325",
    TENBH: "SYMPATHY FOR THE DEVIL",
    TACGIA: "Rolling Stones",
  },
  {
    MABH: "18587",
    TENBH: "SYMPHONY OF DESTRUCTION",
    TACGIA: "Megadeth",
  },
  {
    MABH: "26022",
    TENBH: "T.N.T.",
    TACGIA: "AC/DC",
  },
  {
    MABH: "33349",
    TENBH: "TÁ BAGUNÇADO",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "33367",
    TENBH: "TÁ BOM AHAM",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "33326",
    TENBH: "TÁ CALOR, TÁ CALOR",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "30566",
    TENBH: "TÁ COM RAIVA DE MIM",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "2817",
    TENBH: "TÁ COMBINADO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "33029",
    TENBH: "TÁ DOIDONA",
    TACGIA: "Cácio e Marcos",
  },
  {
    MABH: "33798",
    TENBH: "TÁ ESCRITO",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "33541",
    TENBH: "TÁ FALTANDO EU",
    TACGIA: "Gusttavo Lima & Jorge e Mateus",
  },
  {
    MABH: "30420",
    TENBH: "TÁ LIBERADO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33330",
    TENBH: "TÁ LOUCO, HEIN",
    TACGIA: "Turma do Pagode e Sorriso Maroto",
  },
  {
    MABH: "33526",
    TENBH: "TÁ NA MIRA",
    TACGIA: "Anitta",
  },
  {
    MABH: "33718",
    TENBH: "TÁ NA SOFRÊNCIA",
    TACGIA: "Tayrone Cigano",
  },
  {
    MABH: "30232",
    TENBH: "TÁ NAMORANDO E ME QUERENDO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "30422",
    TENBH: "TÁ NERVOSO, VAI PESCÁ",
    TACGIA: "Ataíde e Alexandre",
  },
  {
    MABH: "30424",
    TENBH: "TÁ NO MEU CORAÇÃO",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "9341",
    TENBH: "TÁ PERDOADO",
    TACGIA: "Maria Rita",
  },
  {
    MABH: "3816",
    TENBH: "TÁ POR FORA",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "33540",
    TENBH: "TÁ QUENTE",
    TACGIA: "Michel Teló",
  },
  {
    MABH: "2818",
    TENBH: "TÁ RINDO, É?",
    TACGIA: "Ana Carolina e Seu Jorge",
  },
  {
    MABH: "30920",
    TENBH: "TÁ ROCHEDA",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "1750",
    TENBH: "TÁ SE ACHANDO",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "15925",
    TENBH: "TÁ TRANQUILO, TÁ FAVORÁVEL",
    TACGIA: "Lucas Lucco part. Mc Bin Laden",
  },
  {
    MABH: "4297",
    TENBH: "TÁ TUDO BEM",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "30567",
    TENBH: "TA TUM TUM",
    TACGIA: "MC Kevinho part. Simone e Simaria",
  },
  {
    MABH: "1578",
    TENBH: "TÁ VENDO AQUELA LUA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "9886",
    TENBH: "TAÇA DE PRANTO",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "3817",
    TENBH: "TA-HÍ (PRA VOCÊ GOSTAR DE MIM)",
    TACGIA: "Carmen Miranda",
  },
  {
    MABH: "24984",
    TENBH: "TAINTED LOVE",
    TACGIA: "Marilyn Manson",
  },
  {
    MABH: "26013",
    TENBH: "TAINTED LOVE",
    TACGIA: "Soft Cell",
  },
  {
    MABH: "33797",
    TENBH: "TAJ MAHAL",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "4972",
    TENBH: "TAKE A BOW",
    TACGIA: "Madonna",
  },
  {
    MABH: "24088",
    TENBH: "TAKE A BOW",
    TACGIA: "Rihanna",
  },
  {
    MABH: "9177",
    TENBH: "TAKE A LONG WAY HOME",
    TACGIA: "Supertramp",
  },
  {
    MABH: "18178",
    TENBH: "TAKE A LOOK AROUND",
    TACGIA: "Limp Bizkit",
  },
  {
    MABH: "18925",
    TENBH: "TAKE IT EASY",
    TACGIA: "Eagles",
  },
  {
    MABH: "24282",
    TENBH: "TAKE IT OFF",
    TACGIA: "Kesha",
  },
  {
    MABH: "4607",
    TENBH: "TAKE ME HOME COUNTRY ROADS",
    TACGIA: "John Denver",
  },
  {
    MABH: "18027",
    TENBH: "TAKE ME OUT",
    TACGIA: "Franz Ferdinand",
  },
  {
    MABH: "24355",
    TENBH: "TAKE ME TO CHURCH",
    TACGIA: "Hozier",
  },
  {
    MABH: "4781",
    TENBH: "TAKE MY BREATH AWAY",
    TACGIA: "Berlin",
  },
  {
    MABH: "4973",
    TENBH: "TAKE ON ME",
    TACGIA: "A-Ha",
  },
  {
    MABH: "24107",
    TENBH: "TAKE OVER CONTROL",
    TACGIA: "Afrojack feat. Eva Simmons",
  },
  {
    MABH: "26106",
    TENBH: "TAKE WHAT YOU WANT",
    TACGIA: "Post Malone ft. Ozzy Osbourne & Travis Scott",
  },
  {
    MABH: "24789",
    TENBH: "TAKI TAKI",
    TACGIA: "DJ Snake ft. Selena Gomez, Ozuna & Cardi B",
  },
  {
    MABH: "3265",
    TENBH: "TALISMÃ",
    TACGIA: "Elson",
  },
  {
    MABH: "24876",
    TENBH: "TALK",
    TACGIA: "Khalid",
  },
  {
    MABH: "24245",
    TENBH: "TALK DIRTY",
    TACGIA: "Jason Derulo ft. 2 Chainz",
  },
  {
    MABH: "24662",
    TENBH: "TALK DIRTY TO ME",
    TACGIA: "Poison",
  },
  {
    MABH: "24296",
    TENBH: "TALKING BODY",
    TACGIA: "Tove Lo",
  },
  {
    MABH: "24550",
    TENBH: "TALKING TO THE MOON",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "30951",
    TENBH: "TAMO AÍ NA ATIVIDADE",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "30425",
    TENBH: "TAMPA DA PANELA",
    TACGIA: "Daniel",
  },
  {
    MABH: "1276",
    TENBH: "TANGO PRA TEREZA",
    TACGIA: "Angela Maria",
  },
  {
    MABH: "15018",
    TENBH: "TANTA COISA",
    TACGIA: "Paolo",
  },
  {
    MABH: "6357",
    TENBH: "TANTA SAUDADE",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "30574",
    TENBH: "TANTA SOLIDÃO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "15095",
    TENBH: "TANTINHO",
    TACGIA: "Silvano Salles",
  },
  {
    MABH: "30568",
    TENBH: "TANTINHO",
    TACGIA: "Carlinhos Brown",
  },
  {
    MABH: "3728",
    TENBH: "TÃO BEM",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "1752",
    TENBH: "TÃO LINDA E TÃO LOUCA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "3595",
    TENBH: "TÃO SEU",
    TACGIA: "Skank",
  },
  {
    MABH: "3392",
    TENBH: "TÃO SÓ",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "1498",
    TENBH: "TAPA NA CARA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "31047",
    TENBH: "TAPÃO NA RABA",
    TACGIA: "Raí Saia Rodada",
  },
  {
    MABH: "30074",
    TENBH: "TAQUITÁ",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "6389",
    TENBH: "TARDE DE OUTUBRO",
    TACGIA: "CPM 22",
  },
  {
    MABH: "1329",
    TENBH: "TARDE DEMAIS",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "1753",
    TENBH: "TARDE DEMAIS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "2771",
    TENBH: "TARDE DEMAIS",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "3266",
    TENBH: "TARDE EM ITAPOÃ",
    TACGIA: "Toquinho e Vinicius de Moraes",
  },
  {
    MABH: "1754",
    TENBH: "TARDE VAZIA",
    TACGIA: "Ira",
  },
  {
    MABH: "15318",
    TENBH: "TARRAXINHA",
    TACGIA: "Cláudia Leitte",
  },
  {
    MABH: "9235",
    TENBH: "TARZAN BOY",
    TACGIA: "Baltimora",
  },
  {
    MABH: "24899",
    TENBH: "TASTE THE FEELING",
    TACGIA: "Avicii vs. Conrad Sewell",
  },
  {
    MABH: "6358",
    TENBH: "TATUAGEM",
    TACGIA: "Mastruz com Leite",
  },
  {
    MABH: "30891",
    TENBH: "TATUAGEM",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "6752",
    TENBH: "TÁXI LUNAR",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "30676",
    TENBH: "TBT (TÔ BEBENDO TODAS)",
    TACGIA: "Cleber e Cauan",
  },
  {
    MABH: "33756",
    TENBH: "TCC - TRUCO, CERVEJA E CHURRASCO",
    TACGIA: "Marcos e Fernando",
  },
  {
    MABH: "33378",
    TENBH: "TCHA TCHA TCHA",
    TACGIA: "Thaeme e Thiago & Cristiano Araújo",
  },
  {
    MABH: "15476",
    TENBH: "TCHACA",
    TACGIA: "Israel Novaes & Psirico",
  },
  {
    MABH: "33719",
    TENBH: "TCHAN NA SELVA",
    TACGIA: "É O Tchan",
  },
  {
    MABH: "1755",
    TENBH: "TCHAU TCHAU",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "9888",
    TENBH: "TCHAU, I HAVE TO GO NOW",
    TACGIA: "Jammil & Uma Noites",
  },
  {
    MABH: "6837",
    TENBH: "TE AMAR FOI ILUSÃO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "1178",
    TENBH: "TE AMO",
    TACGIA: "Wanderléa",
  },
  {
    MABH: "33749",
    TENBH: "TE AMO",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "33767",
    TENBH: "TE AMO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "3818",
    TENBH: "TE AMO CADA VEZ MAIS",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "30075",
    TENBH: "TE ASSUMI PRO BRASIL",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "30677",
    TENBH: "TE ASSUMO",
    TACGIA: "Diego e Arnaldo",
  },
  {
    MABH: "30771",
    TENBH: "TE CONHEÇO SÓ DE OLHAR NA SUA CARA",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "33264",
    TENBH: "TE DAR UM BEIJO",
    TACGIA: "Michel Teló & Prince Royce",
  },
  {
    MABH: "30279",
    TENBH: "TE ENCONTRAR",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "33539",
    TENBH: "TE ENSINEI CERTIN",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "15273",
    TENBH: "TE ESPERANDO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "4216",
    TENBH: "TE ESQUECER É IMPOSSÍVEL",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "7255",
    TENBH: "TE LEVAR",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "6390",
    TENBH: "TE PEÇO FICA COMIGO",
    TACGIA: "Marlon e Maicon",
  },
  {
    MABH: "30678",
    TENBH: "TE PEGAR",
    TACGIA: "Iza",
  },
  {
    MABH: "30353",
    TENBH: "TE PERDI",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "9890",
    TENBH: "TE QUERO PRA MIM",
    TACGIA: "Edson & Hudson",
  },
  {
    MABH: "33538",
    TENBH: "TE SINTO",
    TACGIA: "Floribella",
  },
  {
    MABH: "3393",
    TENBH: "TE VER",
    TACGIA: "Skank",
  },
  {
    MABH: "30945",
    TENBH: "TE VER FELIZ",
    TACGIA: "Ana Cañas",
  },
  {
    MABH: "15155",
    TENBH: "TE VIVO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "24382",
    TENBH: "TEAM",
    TACGIA: "Iggy Azalea",
  },
  {
    MABH: "18209",
    TENBH: "TEARS DON'T FALL",
    TACGIA: "Bullet For My Valentine",
  },
  {
    MABH: "5985",
    TENBH: "TEARS DRY ON THEIR OWN",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "4608",
    TENBH: "TEARS IN HEAVEN",
    TACGIA: "Eric Clapton",
  },
  {
    MABH: "2656",
    TENBH: "TEARS OF THE DRAGON",
    TACGIA: "Bruce Dickinson",
  },
  {
    MABH: "3596",
    TENBH: "TEATRO DOS VAMPIROS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "9274",
    TENBH: "TEDDY BEAR",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18228",
    TENBH: "TEDDY PICKER",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "6475",
    TENBH: "TÉDIO",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "26134",
    TENBH: "TEENAGE DIRTBAG",
    TACGIA: "Wheatus",
  },
  {
    MABH: "18072",
    TENBH: "TEENAGE DREAM",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "24276",
    TENBH: "TEENAGERS",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "30426",
    TENBH: "TELEFONA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "1300",
    TENBH: "TELEFONE",
    TACGIA: "Banda Djavú",
  },
  {
    MABH: "4298",
    TENBH: "TELEFONE",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "9891",
    TENBH: "TELEFONE MUDO",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "3641",
    TENBH: "TELEGRAMA",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "6555",
    TENBH: "TELEGRAMA",
    TACGIA: "Zeca Baleiro",
  },
  {
    MABH: "33226",
    TENBH: "TELEPATIA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "24295",
    TENBH: "TELEPHONE",
    TACGIA: "Lady Gaga ft. Beyoncé",
  },
  {
    MABH: "9275",
    TENBH: "TELL HER ABOUT IT",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "24663",
    TENBH: "TELL IT LIKE IT IS",
    TACGIA: "Aaron Neville",
  },
  {
    MABH: "24936",
    TENBH: "TELL IT TO MY HEART",
    TACGIA: "Taylor Dayne",
  },
  {
    MABH: "9060",
    TENBH: "TELL ME ONCE AGAIN",
    TACGIA: "Light Reflections",
  },
  {
    MABH: "24790",
    TENBH: "TELL ME WHAT WE'RE GONNA DO NOW",
    TACGIA: "Joss Stone ft. Common",
  },
  {
    MABH: "7256",
    TENBH: "TEM ESPAÇO NA VAN",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "9892",
    TENBH: "TEM NADA A VER",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "9893",
    TENBH: "TEM QUE SER VOCÊ",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "33849",
    TENBH: "TEMA ABERTURA",
    TACGIA: "Pokémon",
  },
  {
    MABH: "18708",
    TENBH: "TEMPERATURE",
    TACGIA: "Sean Paul",
  },
  {
    MABH: "1758",
    TENBH: "TEMPO AO TEMPO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "15437",
    TENBH: "TEMPO DE ALEGRIA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "33527",
    TENBH: "TEMPO DE AMOR",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "30569",
    TENBH: "TEMPO DE APRENDER",
    TACGIA: "Soweto",
  },
  {
    MABH: "6677",
    TENBH: "TEMPO DE DON DON",
    TACGIA: "Dudu Nobre",
  },
  {
    MABH: "9546",
    TENBH: "TEMPO DE VENCER",
    TACGIA: "Jamily e Robinson Monteiro",
  },
  {
    MABH: "3267",
    TENBH: "TEMPO PERDIDO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "6798",
    TENBH: "TEMPO REI",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "3544",
    TENBH: "TEMPORAL",
    TACGIA: "Art Popular",
  },
  {
    MABH: "3449",
    TENBH: "TEMPORAL DE AMOR",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "3939",
    TENBH: "TEMPOS MODERNOS",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "30972",
    TENBH: "TEMPOS MODERNOS",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "7461",
    TENBH: "TENDO A LUA",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "6799",
    TENBH: "TENHO CIUME DE TUDO",
    TACGIA: "Orlando Dias",
  },
  {
    MABH: "31052",
    TENBH: "TENHO MEDO",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "6919",
    TENBH: "TENHO UM AMOR MELHOR QUE O SEU",
    TACGIA: "Antônio Marcos",
  },
  {
    MABH: "33537",
    TENBH: "TENHO XENHENHÉM",
    TACGIA: "Psirico",
  },
  {
    MABH: "3775",
    TENBH: "TENTAÇÃO",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "30981",
    TENBH: "TENTATIVAS",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "1718",
    TENBH: "TENTATIVAS EM VAO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6033",
    TENBH: "TENTE OUTRA VEZ",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "6717",
    TENBH: "TENTEI TE ESQUECER",
    TACGIA: "Matogrosso e Mathias",
  },
  {
    MABH: "15478",
    TENBH: "TEORIAS",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "30472",
    TENBH: "TERAPINGA",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "15274",
    TENBH: "TERESINHA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4497",
    TENBH: "TERNURA",
    TACGIA: "Wanderléa",
  },
  {
    MABH: "30022",
    TENBH: "TERRA DE GIGANTES",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "30570",
    TENBH: "TERRA SEM CEP",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30721",
    TENBH: "TERREMOTO",
    TACGIA: "Anitta & Kevinho",
  },
  {
    MABH: "6213",
    TENBH: "TESOURO DE PIRATA (ONDA, ONDA)",
    TACGIA: "Tchakabum",
  },
  {
    MABH: "31006",
    TENBH: "TESTE DE FARMÁCIA",
    TACGIA: "Unha Pintada",
  },
  {
    MABH: "15438",
    TENBH: "TETO DE VIDRO",
    TACGIA: "Pitty",
  },
  {
    MABH: "30858",
    TENBH: "TEU CHARME",
    TACGIA: "Os Morenos",
  },
  {
    MABH: "1798",
    TENBH: "TEU JOGO",
    TACGIA: "Elymar Santos",
  },
  {
    MABH: "1759",
    TENBH: "TEUS OLHOS",
    TACGIA: "Ivete Sangalo part. Marcelo Camelo",
  },
  {
    MABH: "18588",
    TENBH: "THANK GOD I FOUND YOU",
    TACGIA: "Mariah Carey ft. Joe, 98 Degrees",
  },
  {
    MABH: "18147",
    TENBH: "THANK U",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "24791",
    TENBH: "THANK U, NEXT",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "4974",
    TENBH: "THANK YOU",
    TACGIA: "Dido",
  },
  {
    MABH: "18926",
    TENBH: "THANK YOU FOR LOVING ME",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "18625",
    TENBH: "THANKS FOR THE MEMORIES",
    TACGIA: "Fall Out Boy",
  },
  {
    MABH: "24570",
    TENBH: "THAT DON'T IMPRESS ME MUCH",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "2570",
    TENBH: "THAT I WOULD BE GOOD",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "9061",
    TENBH: "THAT THING YOU DO",
    TACGIA: "The Wonders",
  },
  {
    MABH: "26053",
    TENBH: "THAT'S ALL",
    TACGIA: "Genesis",
  },
  {
    MABH: "26194",
    TENBH: "THAT'S AMORE",
    TACGIA: "Dean Martin",
  },
  {
    MABH: "26197",
    TENBH: "THAT'S LIFE",
    TACGIA: "Frank Sinatra",
  },
  {
    MABH: "24485",
    TENBH: "THAT'S MY GIRL",
    TACGIA: "Fifth Harmony",
  },
  {
    MABH: "18624",
    TENBH: "THAT'S NOT MY NAME",
    TACGIA: "The Thing Tings",
  },
  {
    MABH: "18927",
    TENBH: "THAT'S THE WAY (I LIKE IT)",
    TACGIA: "KC & Sunshine Band",
  },
  {
    MABH: "26147",
    TENBH: "THAT'S THE WAY IT IS",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "9276",
    TENBH: "THAT'S THE WAY LOVE GOES",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "4975",
    TENBH: "THAT'S WHAT FRIENDS ARE FOR",
    TACGIA: "Dionne Warwick",
  },
  {
    MABH: "24529",
    TENBH: "THAT'S WHAT I LIKE",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "18320",
    TENBH: "THAT'S WHAT YOU GET",
    TACGIA: "Paramore",
  },
  {
    MABH: "18810",
    TENBH: "THAT'S WHY (YOU GO AWAY)",
    TACGIA: "Michael Learns To Rock",
  },
  {
    MABH: "5987",
    TENBH: "THE  GIRL FROM YESTERDAY",
    TACGIA: "Eagles",
  },
  {
    MABH: "9178",
    TENBH: "THE AIR THAT I BREATHE",
    TACGIA: "The Hollies",
  },
  {
    MABH: "18928",
    TENBH: "THE BALLAD OF JOHN AND YOKO",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24237",
    TENBH: "THE BALLAD OF MONA LISA",
    TACGIA: "Panic! At the Disco",
  },
  {
    MABH: "18623",
    TENBH: "THE BEST OF ME",
    TACGIA: "David Foster & Olivia Newton-John",
  },
  {
    MABH: "24844",
    TENBH: "THE BITTER END",
    TACGIA: "Placebo",
  },
  {
    MABH: "18929",
    TENBH: "THE BLOWE'S DAUGHTER",
    TACGIA: "Damien Rice",
  },
  {
    MABH: "18709",
    TENBH: "THE BOYS ARE BACK IN TOWN",
    TACGIA: "Thin Lizzy",
  },
  {
    MABH: "4976",
    TENBH: "THE CALL",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "4782",
    TENBH: "THE CAPTAIN OF HER HEART",
    TACGIA: "Double",
  },
  {
    MABH: "24988",
    TENBH: "THE CAVE",
    TACGIA: "Mumford & Sons",
  },
  {
    MABH: "26155",
    TENBH: "THE CHAIN",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "24027",
    TENBH: "THE CLIMB",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "5986",
    TENBH: "THE CLOSER I GET TO YOU",
    TACGIA: "Roberta Flack",
  },
  {
    MABH: "24530",
    TENBH: "THE CURE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "4783",
    TENBH: "THE DIARY",
    TACGIA: "Bread",
  },
  {
    MABH: "18811",
    TENBH: "THE DIARY OF JANE",
    TACGIA: "Breaking Benjamin",
  },
  {
    MABH: "24664",
    TENBH: "THE DOLPHIN'S CRY",
    TACGIA: "Live",
  },
  {
    MABH: "18292",
    TENBH: "THE EDGE OF GLORY",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "4551",
    TENBH: "THE END OF THE WORLD",
    TACGIA: "Skeeter Davis",
  },
  {
    MABH: "18144",
    TENBH: "THE FIRST TIME EVER I SAW YOUR FACE",
    TACGIA: "Roberta Flack",
  },
  {
    MABH: "18622",
    TENBH: "THE FLAME",
    TACGIA: "Cheap Trick",
  },
  {
    MABH: "24112",
    TENBH: "THE FOX (WHAT DOES THE FOX SAY?)",
    TACGIA: "Ylvis",
  },
  {
    MABH: "18934",
    TENBH: "THE GAMBLER",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "18149",
    TENBH: "THE GHOST OF YOU",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "4784",
    TENBH: "THE GIRL IS MINE",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "2631",
    TENBH: "THE GOONIES R GOOD ENOUGH",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "4785",
    TENBH: "THE GREAT PRETENDER",
    TACGIA: "Platters",
  },
  {
    MABH: "24910",
    TENBH: "THE GREAT PRETENDER",
    TACGIA: "Freddie Mercury",
  },
  {
    MABH: "24482",
    TENBH: "THE GREATEST",
    TACGIA: "Sia",
  },
  {
    MABH: "4786",
    TENBH: "THE GUITAR MAN",
    TACGIA: "Bread",
  },
  {
    MABH: "24368",
    TENBH: "THE HEART WANTS WHAT IT WANTS",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "9180",
    TENBH: "THE HEAT IS ON",
    TACGIA: "Glenn Frey",
  },
  {
    MABH: "24398",
    TENBH: "THE HILLS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "4552",
    TENBH: "THE HOUSE OF THE RISING SUN",
    TACGIA: "Animals",
  },
  {
    MABH: "5988",
    TENBH: "THE IMPOSSIBLE DREAM",
    TACGIA: "Andy Williams",
  },
  {
    MABH: "24257",
    TENBH: "THE KIDS AREN'T ALRIGHT",
    TACGIA: "Offspring",
  },
  {
    MABH: "18589",
    TENBH: "THE KILL",
    TACGIA: "30 Seconds To Mars",
  },
  {
    MABH: "9064",
    TENBH: "THE LADY IS A TRAMP",
    TACGIA: "Frank Sinatra & Luther Vandros",
  },
  {
    MABH: "24028",
    TENBH: "THE LAZY SONG",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "24887",
    TENBH: "THE LESS I KNOW THE BETTER",
    TACGIA: "Tame Impala",
  },
  {
    MABH: "9181",
    TENBH: "THE LOGICAL SONG",
    TACGIA: "Supertramp",
  },
  {
    MABH: "4674",
    TENBH: "THE LONG AND WINDING ROAD",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "4977",
    TENBH: "THE LOOK",
    TACGIA: "Roxette",
  },
  {
    MABH: "18812",
    TENBH: "THE LOOK OF LOVE",
    TACGIA: "ABC",
  },
  {
    MABH: "18935",
    TENBH: "THE LOOK OF LOVE",
    TACGIA: "Diana Krall",
  },
  {
    MABH: "26209",
    TENBH: "THE LOVECATS",
    TACGIA: "The Cure",
  },
  {
    MABH: "24551",
    TENBH: "THE MAN",
    TACGIA: "The Killers",
  },
  {
    MABH: "9065",
    TENBH: "THE MIRACLE OF LOVE",
    TACGIA: "Eurythmics",
  },
  {
    MABH: "24207",
    TENBH: "THE MONSTER",
    TACGIA: "Eminem ft. Rihanna",
  },
  {
    MABH: "18621",
    TENBH: "THE NUMBER OF THE BEAST",
    TACGIA: "Iron Maiden",
  },
  {
    MABH: "4978",
    TENBH: "THE OLD SONGS",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "18936",
    TENBH: "THE ONE I LOVE",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "9182",
    TENBH: "THE ONE THAT YOU LOVE",
    TACGIA: "Air Supply",
  },
  {
    MABH: "18590",
    TENBH: "THE ONLY",
    TACGIA: "Static-X",
  },
  {
    MABH: "2557",
    TENBH: "THE ONLY EXCEPTION",
    TACGIA: "Paramore",
  },
  {
    MABH: "18222",
    TENBH: "THE OUTSIDER",
    TACGIA: "A Perfect Circle",
  },
  {
    MABH: "26185",
    TENBH: "THE PHANTOM OF THE OPERA",
    TACGIA: "The Phantom of the Opera",
  },
  {
    MABH: "18937",
    TENBH: "THE POWER OF GOODBYE",
    TACGIA: "Madonna",
  },
  {
    MABH: "18938",
    TENBH: "THE POWER OF LOVE",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "24225",
    TENBH: "THE PRETENDER",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "5989",
    TENBH: "THE REASON",
    TACGIA: "Hoobastank",
  },
  {
    MABH: "18813",
    TENBH: "THE RED",
    TACGIA: "Chevelle",
  },
  {
    MABH: "4979",
    TENBH: "THE RIVER OF DREAMS",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "24845",
    TENBH: "THE ROCK & ROLL HIGH SCHOOL",
    TACGIA: "Ramones",
  },
  {
    MABH: "4657",
    TENBH: "THE ROSE",
    TACGIA: "Bette Midler",
  },
  {
    MABH: "18417",
    TENBH: "THE SCIENTIST",
    TACGIA: "Coldplay",
  },
  {
    MABH: "26119",
    TENBH: "THE SECOND TIME AROUND",
    TACGIA: "Shalamar",
  },
  {
    MABH: "4980",
    TENBH: "THE SHOW MUST GO ON",
    TACGIA: "Queen",
  },
  {
    MABH: "18939",
    TENBH: "THE SIGN",
    TACGIA: "Ace of Base",
  },
  {
    MABH: "24380",
    TENBH: "THE SOUND",
    TACGIA: "The 1975",
  },
  {
    MABH: "9066",
    TENBH: "THE SOUND OF SILENCE",
    TACGIA: "Simon & Garfunkel",
  },
  {
    MABH: "24792",
    TENBH: "THE SOUND OF SILENCE",
    TACGIA: "Disturbed",
  },
  {
    MABH: "18814",
    TENBH: "THE SUN ALWAYS SHINES ON TV",
    TACGIA: "A-Ha",
  },
  {
    MABH: "26056",
    TENBH: "THE SWEET ESCAPE",
    TACGIA: "Gwen Stefani ft. Akon",
  },
  {
    MABH: "24793",
    TENBH: "THE SWEETEST TABOO",
    TACGIA: "Sade",
  },
  {
    MABH: "18940",
    TENBH: "THE THINGS WE DO FOR LOVE",
    TACGIA: "10cc",
  },
  {
    MABH: "18418",
    TENBH: "THE THRILL IS GONE",
    TACGIA: "B. B. King",
  },
  {
    MABH: "4981",
    TENBH: "THE TIDE IS HIGH",
    TACGIA: "Blondie",
  },
  {
    MABH: "18241",
    TENBH: "THE TIME (DIRTY BIT)",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "18591",
    TENBH: "THE TROOPER",
    TACGIA: "Iron Maiden",
  },
  {
    MABH: "9277",
    TENBH: "THE TWIST",
    TACGIA: "Chubby Checker",
  },
  {
    MABH: "18039",
    TENBH: "THE UNFORGIVEN",
    TACGIA: "Metallica",
  },
  {
    MABH: "18635",
    TENBH: "THE WAY",
    TACGIA: "Fastball",
  },
  {
    MABH: "18815",
    TENBH: "THE WAY I ARE",
    TACGIA: "Timbaland ft. Keri Hilson, D.O.E., Sebastian",
  },
  {
    MABH: "4658",
    TENBH: "THE WAY WE WERE",
    TACGIA: "Barbra Streisand",
  },
  {
    MABH: "24794",
    TENBH: "THE WAY YOU DO THE THINGS YOU DO",
    TACGIA: "The Temptations",
  },
  {
    MABH: "24795",
    TENBH: "THE WAY YOU MAKE ME FEEL",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "4787",
    TENBH: "THE WINNER TAKES IT ALL",
    TACGIA: "ABBA",
  },
  {
    MABH: "18076",
    TENBH: "THE WOMAN IN ME",
    TACGIA: "Shania Twain",
  },
  {
    MABH: "4982",
    TENBH: "THE WONDER OF YOU",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "4609",
    TENBH: "THE YOUNG ONES'",
    TACGIA: "Cliff Richard",
  },
  {
    MABH: "26203",
    TENBH: "THE ZEPHYR SONG",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "18080",
    TENBH: "THERE IS A LIGHT THAT NEVER GOES ON",
    TACGIA: "The Smiths",
  },
  {
    MABH: "18941",
    TENBH: "THERE MUST BE NA ANGEL",
    TACGIA: "Eurythmics",
  },
  {
    MABH: "18620",
    TENBH: "THERE SHE GOES",
    TACGIA: "Sixpence None The Richer",
  },
  {
    MABH: "24796",
    TENBH: "THERE YOU'LL BE",
    TACGIA: "Faith Hill",
  },
  {
    MABH: "26190",
    TENBH: "THEREFORE I AM",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "18208",
    TENBH: "THERE'S NEVER A FOREVER THING",
    TACGIA: "A-Ha",
  },
  {
    MABH: "26097",
    TENBH: "THESE BOOTS ARE MADE FOR WALKIN'",
    TACGIA: "Nancy Sinatra",
  },
  {
    MABH: "18619",
    TENBH: "THESE DREAMS",
    TACGIA: "Heart",
  },
  {
    MABH: "9067",
    TENBH: "THESE EYES",
    TACGIA: "Guess Who",
  },
  {
    MABH: "26231",
    TENBH: "THINGS WILL GO MY WAY",
    TACGIA: "The Calling",
  },
  {
    MABH: "18816",
    TENBH: "THINK",
    TACGIA: "Aretha Franklin",
  },
  {
    MABH: "18942",
    TENBH: "THINK OF YOU",
    TACGIA: "Whigfield",
  },
  {
    MABH: "24063",
    TENBH: "THINKING OF YOU",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "24351",
    TENBH: "THINKING OUT LOUD",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "24665",
    TENBH: "THIS AIN'T A LOVE SONG",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "18079",
    TENBH: "THIS CHARMING MAN",
    TACGIA: "The Smiths",
  },
  {
    MABH: "9184",
    TENBH: "THIS COULD BE THE NIGHT",
    TACGIA: "Loverboy",
  },
  {
    MABH: "24996",
    TENBH: "THIS I PROMISE YOU",
    TACGIA: "N'Sync",
  },
  {
    MABH: "18817",
    TENBH: "THIS IS A CALL",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "24666",
    TENBH: "THIS IS AMERICA",
    TACGIA: "Childish Gambino",
  },
  {
    MABH: "24067",
    TENBH: "THIS IS HOW WE DO",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "26095",
    TENBH: "THIS IS HOW WE DO IT",
    TACGIA: "Montell Jordan",
  },
  {
    MABH: "24892",
    TENBH: "THIS IS ME",
    TACGIA: "The Greatest Showman (Musical)",
  },
  {
    MABH: "2580",
    TENBH: "THIS IS THE LAST TIME",
    TACGIA: "Keane",
  },
  {
    MABH: "5990",
    TENBH: "THIS IS THE LIFE",
    TACGIA: "Hannah Montana",
  },
  {
    MABH: "24411",
    TENBH: "THIS IS WHAT YOU CAME FOR",
    TACGIA: "Calvin Harris ft. Rihanna",
  },
  {
    MABH: "24667",
    TENBH: "THIS KISS",
    TACGIA: "Faith Hill",
  },
  {
    MABH: "18372",
    TENBH: "THIS LOVE",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "9185",
    TENBH: "THIS ONE'S FOR YOU",
    TACGIA: "Barry Manilow",
  },
  {
    MABH: "18150",
    TENBH: "THREE LITTLE BIRDS",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "4610",
    TENBH: "THREE TIMES A LADY",
    TACGIA: "Commodores",
  },
  {
    MABH: "24307",
    TENBH: "THRIFT SHOP",
    TACGIA: "Macklemore & Ryan Lewis & Wanz",
  },
  {
    MABH: "4788",
    TENBH: "THRILLER",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "24668",
    TENBH: "THRONE",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "18066",
    TENBH: "THROUGH GLASS",
    TACGIA: "Stone Sour",
  },
  {
    MABH: "5991",
    TENBH: "THROUGH THE YEARS",
    TACGIA: "Kenny Rogers",
  },
  {
    MABH: "24552",
    TENBH: "THUNDER",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "18592",
    TENBH: "THUNDERSTRUCK",
    TACGIA: "AC/DC",
  },
  {
    MABH: "30571",
    TENBH: "TIC BOM",
    TACGIA: "Bom Balanço",
  },
  {
    MABH: "30578",
    TENBH: "TIC NERVOSO",
    TACGIA: "Harmonia do Samba part. Anitta",
  },
  {
    MABH: "30427",
    TENBH: "TIC, TIC, TAC (BATE FORTE O TAMBOR)",
    TACGIA: "Carrapicho",
  },
  {
    MABH: "9186",
    TENBH: "TICKET TO RIDE",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "30233",
    TENBH: "TICO TICO NO FUBA",
    TACGIA: "Carmen Miranda",
  },
  {
    MABH: "4611",
    TENBH: "TIE A YELLOW RIBBON 'ROUND THE OLE OAK TREE",
    TACGIA: "Tony Orlando & Dawn",
  },
  {
    MABH: "7463",
    TENBH: "TIETA",
    TACGIA: "Luiz Caldas",
  },
  {
    MABH: "4057",
    TENBH: "TIGRESA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30772",
    TENBH: "TIJOLÃO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30679",
    TENBH: "TIJOLINHO POR TIJOLINHO",
    TACGIA: "Enzo Rabelo part. Zé Felipe",
  },
  {
    MABH: "24283",
    TENBH: "TIK TOK",
    TACGIA: "Kesha",
  },
  {
    MABH: "18247",
    TENBH: "TIL WORLD ENDS",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "4660",
    TENBH: "TILL",
    TACGIA: "Tom Jones",
  },
  {
    MABH: "33765",
    TENBH: "TIM TIM",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "24085",
    TENBH: "TIMBER",
    TACGIA: "Pitbull ft. Kesha",
  },
  {
    MABH: "9187",
    TENBH: "TIME",
    TACGIA: "Alan Parson's Project",
  },
  {
    MABH: "18618",
    TENBH: "TIME (CLOCK OF THE HEART)",
    TACGIA: "Culture Club",
  },
  {
    MABH: "4789",
    TENBH: "TIME AFTER TIME",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "24242",
    TENBH: "TIME OF OUR LIVES",
    TACGIA: "Pitbull ft. Ne-Yo",
  },
  {
    MABH: "4218",
    TENBH: "TÍMIDA",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "3268",
    TENBH: "TIMIDEZ",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "33331",
    TENBH: "TIMIDEZ",
    TACGIA: "Negritude Júnior",
  },
  {
    MABH: "2558",
    TENBH: "TIN MAN",
    TACGIA: "America",
  },
  {
    MABH: "33796",
    TENBH: "TINHA QUE ACONTECER",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "24571",
    TENBH: "TINY DANCER",
    TACGIA: "Elton John",
  },
  {
    MABH: "33536",
    TENBH: "TIRA A ROUPA",
    TACGIA: "Rick & Renner",
  },
  {
    MABH: "6988",
    TENBH: "TIRA ELA DE MIM",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "3729",
    TENBH: "TIRO AO ÁLVARO",
    TACGIA: "Adoniran Barbosa",
  },
  {
    MABH: "30817",
    TENBH: "TIRO CERTO",
    TACGIA: "Zé Felipe ft. Gusttavo Lima",
  },
  {
    MABH: "18471",
    TENBH: "TITANIUM",
    TACGIA: "David Guetta ft. Sia",
  },
  {
    MABH: "9345",
    TENBH: "TIVE RAZÃO",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "18172",
    TENBH: "TKO",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "18593",
    TENBH: "TO ALL THE GIRLS I'VE LOVED BEFORE",
    TACGIA: "Julio Iglesias & Willie Nelson",
  },
  {
    MABH: "2632",
    TENBH: "TO BE WITH YOU",
    TACGIA: "Mr. Big",
  },
  {
    MABH: "33795",
    TENBH: "TÔ BEBENDO DE TORNEIRA",
    TACGIA: "Conrado e Aleksandro part. Bruno & Barreto",
  },
  {
    MABH: "30579",
    TENBH: "TÔ COM MORAL NO CÉU",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "33992",
    TENBH: "TÔ COM PENA DE VOCÊ",
    TACGIA: "Cleber e Cauan part. Israel Novaes",
  },
  {
    MABH: "30234",
    TENBH: "TÔ DE BOAÇA",
    TACGIA: "Rafa e Pipo Marques part. Wesley Safadão",
  },
  {
    MABH: "33227",
    TENBH: "TÔ DE CARA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "26113",
    TENBH: "TO DIE FOR",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "4337",
    TENBH: "TÔ FAZENDO FALTA",
    TACGIA: "Joanna",
  },
  {
    MABH: "30341",
    TENBH: "TO INDO TE BUSCAR",
    TACGIA: "Guto e Nando",
  },
  {
    MABH: "3346",
    TENBH: "TÔ LEGAL",
    TACGIA: "Grupo Raça",
  },
  {
    MABH: "30081",
    TENBH: "TÔ LIMPANDO VOCÊ DA MINHA VIDA",
    TACGIA: "Avine Vinny part. Solange Almeida",
  },
  {
    MABH: "9069",
    TENBH: "TO LOVE SOMEBODY",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4983",
    TENBH: "TO LOVE YOU MORE",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "30586",
    TENBH: "TO MAL",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "33720",
    TENBH: "TÔ MAL",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "33172",
    TENBH: "TÔ MORANDO SOZINHO",
    TACGIA: "João Neto e Frederico",
  },
  {
    MABH: "30590",
    TENBH: "TO NEM AI",
    TACGIA: "Hugo Pena e Gabriel",
  },
  {
    MABH: "6637",
    TENBH: "TÔ NEM AÍ",
    TACGIA: "Luka",
  },
  {
    MABH: "1659",
    TENBH: "TÔ PASSANDO MAL",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33993",
    TENBH: "TÔ POUCO ME LIXANDO",
    TACGIA: "Bruno & Barretto",
  },
  {
    MABH: "33409",
    TENBH: "TÔ RUIM",
    TACGIA: "Zé Ricardo e Thiago",
  },
  {
    MABH: "4790",
    TENBH: "TO SIR WITH LOVE",
    TACGIA: "Lulu",
  },
  {
    MABH: "15479",
    TENBH: "TÔ SOLTO NA NIGHT",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "4414",
    TENBH: "TÔ TE FILMANDO (SORRIA)",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "33784",
    TENBH: "TÔ TE QUERENDO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "15439",
    TENBH: "TÔ TRANQUILÃO",
    TACGIA: "MC Sapão",
  },
  {
    MABH: "15157",
    TENBH: "TÔ VENDENDO BEIJO",
    TACGIA: "Humberto e Ronaldo",
  },
  {
    MABH: "33905",
    TENBH: "TÔ VOLTANDO",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "33362",
    TENBH: "TÓ, SOU SEU",
    TACGIA: "Fred e Gustavo part. Wesley Safadão",
  },
  {
    MABH: "33061",
    TENBH: "TOCA UM JOÃO MINEIRO E MARCIANO",
    TACGIA: "Jads & Jadson",
  },
  {
    MABH: "7713",
    TENBH: "TOCA UM SAMBA AÍ",
    TACGIA: "Inimigos da HP",
  },
  {
    MABH: "4257",
    TENBH: "TOCANDO EM FRENTE",
    TACGIA: "Almir Sater",
  },
  {
    MABH: "3730",
    TENBH: "TODA FORMA DE AMOR",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "4180",
    TENBH: "TODA FORMA DE PODER",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "7259",
    TENBH: "TODA MENINA BAIANA",
    TACGIA: "Gilberto Gil",
  },
  {
    MABH: "15511",
    TENBH: "TODA TODA",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "2945",
    TENBH: "TODAS AS COISAS",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "6157",
    TENBH: "TODAS AS COISAS DO MUNDO",
    TACGIA: "Leonardo",
  },
  {
    MABH: "33740",
    TENBH: "TODAS AS MANHÃS",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "6197",
    TENBH: "TODO AZUL DO MAR",
    TACGIA: "14 Bis",
  },
  {
    MABH: "30235",
    TENBH: "TODO DIA",
    TACGIA: "Pabllo Vittar ft. Rico Dalasam",
  },
  {
    MABH: "30801",
    TENBH: "TODO MUNDO VAI SOFRER",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "6316",
    TENBH: "TODOS ESTÃO SURDOS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "18594",
    TENBH: "TOGETHER AGAIN",
    TACGIA: "Janet Jackson",
  },
  {
    MABH: "33141",
    TENBH: "TOLICES ( ACÚSTICO)",
    TACGIA: "Ira!",
  },
  {
    MABH: "18595",
    TENBH: "TOM SAWYER",
    TACGIA: "Rush",
  },
  {
    MABH: "30236",
    TENBH: "TOMARA",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "33333",
    TENBH: "TOMBEI",
    TACGIA: "Karol Conka",
  },
  {
    MABH: "18617",
    TENBH: "TOMORROW",
    TACGIA: "Silverchair",
  },
  {
    MABH: "24572",
    TENBH: "TOMORROW PEOPLE",
    TACGIA: "Ziggy Marley",
  },
  {
    MABH: "24797",
    TENBH: "TOM'S DINER",
    TACGIA: "Suzanne Vega",
  },
  {
    MABH: "30874",
    TENBH: "TONELADAS DE PAIXÃO",
    TACGIA: "Zezé di Camargo & Luciano",
  },
  {
    MABH: "24925",
    TENBH: "TONIGHT",
    TACGIA: "New Kids On The Block",
  },
  {
    MABH: "18018",
    TENBH: "TONIGHT (I'M LOVING YOU)",
    TACGIA: "Enrique Iglesias",
  },
  {
    MABH: "4984",
    TENBH: "TONIGHT I CELEBRATE MY LOVE",
    TACGIA: "Roberta Flack & Peabo Bryson",
  },
  {
    MABH: "18361",
    TENBH: "TONIGHT TONIGHT",
    TACGIA: "Smashing Pumpkins",
  },
  {
    MABH: "33335",
    TENBH: "TONTEIA",
    TACGIA: "Maurício Mattar",
  },
  {
    MABH: "24483",
    TENBH: "TOO GOOD",
    TACGIA: "Drake ft. Rihanna & Popcaan",
  },
  {
    MABH: "24553",
    TENBH: "TOO GOOD AT GOODBYES",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "18596",
    TENBH: "TOO LATE TOO SON",
    TACGIA: "Jon Secada",
  },
  {
    MABH: "5993",
    TENBH: "TOO LITLE TOO LATE",
    TACGIA: "Jojo",
  },
  {
    MABH: "9188",
    TENBH: "TOO MUCH",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "18943",
    TENBH: "TOO MUCH",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "4791",
    TENBH: "TOO MUCH HEAVEN",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "4612",
    TENBH: "TOP OF THE WORLD",
    TACGIA: "Carpenters",
  },
  {
    MABH: "6317",
    TENBH: "TOP TOP",
    TACGIA: "Cássia Eller",
  },
  {
    MABH: "6392",
    TENBH: "TOQUE DE MÁGICA",
    TACGIA: "Pedro e Thiago",
  },
  {
    MABH: "7306",
    TENBH: "TORMENTO D'AMORE",
    TACGIA: "Agnaldo Rayol e Charlotte Church",
  },
  {
    MABH: "2657",
    TENBH: "TORN",
    TACGIA: "Natalie Imbruglia",
  },
  {
    MABH: "18944",
    TENBH: "TORNERÓ",
    TACGIA: "I Santo California",
  },
  {
    MABH: "1238",
    TENBH: "TORTURAS DE AMOR",
    TACGIA: "Waldick Soriano",
  },
  {
    MABH: "9278",
    TENBH: "TOSSIN' AND TURNIN'",
    TACGIA: "Bobby Lewis",
  },
  {
    MABH: "3271",
    TENBH: "TOTAL",
    TACGIA: "Netinho",
  },
  {
    MABH: "4985",
    TENBH: "TOTAL ECLIPSE OF THE HEART",
    TACGIA: "Bonnie Tyler",
  },
  {
    MABH: "3394",
    TENBH: "TOTALMENTE DEMAIS",
    TACGIA: "Hanói-Hanói",
  },
  {
    MABH: "33535",
    TENBH: "TOTALMENTE DEMAIS",
    TACGIA: "Anitta part. MC Duduzinho",
  },
  {
    MABH: "24798",
    TENBH: "TOUCH",
    TACGIA: "Little Mix",
  },
  {
    MABH: "24302",
    TENBH: "TOUCH MY BODY",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "18818",
    TENBH: "TOURNIQUET",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24244",
    TENBH: "TOWARDS THE SUN",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24019",
    TENBH: "TOXIC",
    TACGIA: "Britney Spears",
  },
  {
    MABH: "24159",
    TENBH: "TOXICITY",
    TACGIA: "System of A Down",
  },
  {
    MABH: "33339",
    TENBH: "TRADIÇÃO GAUCHA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "18945",
    TENBH: "TRAGEDY",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "30800",
    TENBH: "TRAÍ SIM",
    TACGIA: "Maiara e Maraisa & Zé Neto e Cristiano",
  },
  {
    MABH: "33340",
    TENBH: "TRAIÇÃO A QUEIMA ROUPA",
    TACGIA: "Cristiano Araújo & Jads e Jadson",
  },
  {
    MABH: "30428",
    TENBH: "TRAIDOR",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "15354",
    TENBH: "TRAMA",
    TACGIA: "Pollo part. Fernanda Chagas",
  },
  {
    MABH: "30430",
    TENBH: "TRANQUE A PORTA E ME BEIJA",
    TACGIA: "Chico Rey e Paraná",
  },
  {
    MABH: "4058",
    TENBH: "TRANSAS",
    TACGIA: "Ritchie",
  },
  {
    MABH: "30431",
    TENBH: "TRÂNSITO PARADO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30473",
    TENBH: "TRANSPLANTE",
    TACGIA: "Marília Mendonça part. Bruno & Marrone",
  },
  {
    MABH: "33763",
    TENBH: "TRAUMAS",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "4792",
    TENBH: "TRAVELIN' BAND",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "3272",
    TENBH: "TRAVESSIA",
    TACGIA: "Milton Nascimento",
  },
  {
    MABH: "2939",
    TENBH: "TRAVESSIA DO ARAGUAIA",
    TACGIA: "Tião Carreiro & Pardinho",
  },
  {
    MABH: "24990",
    TENBH: "TRAVESSURAS",
    TACGIA: "Nicky Jam",
  },
  {
    MABH: "1154",
    TENBH: "TRAZ ELA DE VOLTA PRA MIM",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "24145",
    TENBH: "TREASURE",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "24454",
    TENBH: "TREAT YOU BETTER",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "3273",
    TENBH: "TREM DAS ONZE",
    TACGIA: "Adoniran Barbosa",
  },
  {
    MABH: "3687",
    TENBH: "TREM DAS SETE",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "6238",
    TENBH: "TREM DO PANTANAL",
    TACGIA: "Almir Sater",
  },
  {
    MABH: "30050",
    TENBH: "TREM-BALA",
    TACGIA: "Ana Vilela",
  },
  {
    MABH: "30084",
    TENBH: "TREME BUNDA",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "30580",
    TENBH: "TREME TREME",
    TACGIA: "Mc Loma e As Gêmeas Lacração",
  },
  {
    MABH: "7469",
    TENBH: "TREMENDO VACILÃO",
    TACGIA: "Perlla",
  },
  {
    MABH: "4459",
    TENBH: "TRÊS LADOS",
    TACGIA: "Skank",
  },
  {
    MABH: "30940",
    TENBH: "TRÊS OPÇÕES",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "33243",
    TENBH: "TRÊS PALAVRAS",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "30237",
    TENBH: "TREVO (TU)",
    TACGIA: "Anavitória part. Tiago Iorc",
  },
  {
    MABH: "24669",
    TENBH: "TRIBUTE",
    TACGIA: "Tenacious D",
  },
  {
    MABH: "3546",
    TENBH: "TRIBUTO AOS MAMONAS",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "30680",
    TENBH: "TRINCADINHO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "7470",
    TENBH: "TRIO METAL",
    TACGIA: "Daniela Mercury",
  },
  {
    MABH: "9900",
    TENBH: "TRISTE BERRANTE",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "33722",
    TENBH: "TRISTEZA DANADA",
    TACGIA: "Agnaldo Timóteo",
  },
  {
    MABH: "6800",
    TENBH: "TRISTEZA DO JECA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33723",
    TENBH: "TRIUNFO",
    TACGIA: "Emicida",
  },
  {
    MABH: "31040",
    TENBH: "TROCA DE CALÇADA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "33995",
    TENBH: "TROCA O DISCO",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3276",
    TENBH: "TROCANDO EM MIUDOS",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "30034",
    TENBH: "TROCARIA TUDO",
    TACGIA: "Marcos e Fernando part. Henrique e Juliano",
  },
  {
    MABH: "9348",
    TENBH: "TROPA DE ELITE",
    TACGIA: "Tihuana",
  },
  {
    MABH: "3277",
    TENBH: "TROPICANA",
    TACGIA: "Alceu Valença",
  },
  {
    MABH: "18009",
    TENBH: "TROUBLE",
    TACGIA: "Coldplay",
  },
  {
    MABH: "24119",
    TENBH: "TROUBLE",
    TACGIA: "Iggy Azalea ft. Jennifer Hudson",
  },
  {
    MABH: "24247",
    TENBH: "TROUBLEMAKER",
    TACGIA: "Olly Murs ft. Flo Rida",
  },
  {
    MABH: "5995",
    TENBH: "TRUE",
    TACGIA: "Spandau Ballet",
  },
  {
    MABH: "18148",
    TENBH: "TRUE COLORS",
    TACGIA: "Cyndi Lauper",
  },
  {
    MABH: "18746",
    TENBH: "TRUE FAITH",
    TACGIA: "New Order",
  },
  {
    MABH: "2539",
    TENBH: "TRULY",
    TACGIA: "Lionel Richie",
  },
  {
    MABH: "18195",
    TENBH: "TRULY MADLY DEEPLY",
    TACGIA: "Savage Garden",
  },
  {
    MABH: "24054",
    TENBH: "TRUMPETS",
    TACGIA: "Jason Derulo",
  },
  {
    MABH: "18351",
    TENBH: "TRUTH",
    TACGIA: "Seether",
  },
  {
    MABH: "26081",
    TENBH: "TRUTH HURTS",
    TACGIA: "Lizzo",
  },
  {
    MABH: "5996",
    TENBH: "TRY",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "18164",
    TENBH: "TRY",
    TACGIA: "Pink",
  },
  {
    MABH: "24573",
    TENBH: "TRY (JUST A LITTLE BIT HARDER)",
    TACGIA: "Janis Joplin",
  },
  {
    MABH: "18224",
    TENBH: "TRY AGAIN",
    TACGIA: "Aaliyah",
  },
  {
    MABH: "2773",
    TENBH: "TSUNAMI",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "24196",
    TENBH: "TSUNAMI (JUMP)",
    TACGIA: "DVBBS & Borgeous & Tinie Tempah",
  },
  {
    MABH: "30973",
    TENBH: "TU",
    TACGIA: "Júlio César",
  },
  {
    MABH: "1879",
    TENBH: "TU ÉS O MDC DA MINHA VIDA",
    TACGIA: "Raul Seixas",
  },
  {
    MABH: "4299",
    TENBH: "TU MANDAS NO MEU CORAÇÃO",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "4499",
    TENBH: "TUA BOCA",
    TACGIA: "Belo",
  },
  {
    MABH: "30991",
    TENBH: "TUA PRESENÇA",
    TACGIA: "Paulo Neto",
  },
  {
    MABH: "18710",
    TENBH: "TUBTHUMPING",
    TACGIA: "Chumbawamba",
  },
  {
    MABH: "1880",
    TENBH: "TUDO AZUL",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "3497",
    TENBH: "TUDO BEM",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "2840",
    TENBH: "TUDO CERTO",
    TACGIA: "Luiza Possi",
  },
  {
    MABH: "3278",
    TENBH: "TUDO COM VOCÊ",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "33341",
    TENBH: "TUDO COM VOCÊ",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "30983",
    TENBH: "TUDO COOPERA PARA O MEU BEM",
    TACGIA: "Ministério Zoe",
  },
  {
    MABH: "9349",
    TENBH: "TUDO DE MIM",
    TACGIA: "Altemar Dutra",
  },
  {
    MABH: "6477",
    TENBH: "TUDO ESTÁ NO SEU LUGAR",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "3642",
    TENBH: "TUDO IGUAL",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "30879",
    TENBH: "TUDO O QUE ELA GOSTA DE ESCUTAR",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "33618",
    TENBH: "TUDO OU NADA",
    TACGIA: "Pablo",
  },
  {
    MABH: "7267",
    TENBH: "TUDO OUTRA VEZ",
    TACGIA: "Belchior",
  },
  {
    MABH: "15757",
    TENBH: "TUDO PARA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6035",
    TENBH: "TUDO PASSA",
    TACGIA: "Adryana e a Rapaziada",
  },
  {
    MABH: "3498",
    TENBH: "TUDO PASSARÁ",
    TACGIA: "Nelson Ned",
  },
  {
    MABH: "6478",
    TENBH: "TUDO PODE MUDAR",
    TACGIA: "Metrô",
  },
  {
    MABH: "4059",
    TENBH: "TUDO POR NADA",
    TACGIA: "Paulo Ricardo",
  },
  {
    MABH: "3733",
    TENBH: "TUDO QUE SE QUER",
    TACGIA: "Emilio Santiago e Veronica Sabino",
  },
  {
    MABH: "15355",
    TENBH: "TUDO QUE VAI",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "15514",
    TENBH: "TUDO QUE VOCÊ QUISER",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "1958",
    TENBH: "TUDO TEM UM PORQUÊ",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "33724",
    TENBH: "TUM TUM TUM DA SAUDADE",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "33410",
    TENBH: "TURBINADA",
    TACGIA: "Zé Ricardo e Thiago",
  },
  {
    MABH: "24218",
    TENBH: "TURN AROUND",
    TACGIA: "Flo Rida",
  },
  {
    MABH: "24039",
    TENBH: "TURN DOWN FOR WHAT",
    TACGIA: "DJ Snake & Lil Jon",
  },
  {
    MABH: "24182",
    TENBH: "TURN ME ON",
    TACGIA: "David Guetta ft. Nicki Minaj",
  },
  {
    MABH: "24799",
    TENBH: "TURN OFF THE LIGHT",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "26016",
    TENBH: "TURNING JAPANESE",
    TACGIA: "The Vapors",
  },
  {
    MABH: "18615",
    TENBH: "TUTTI FRUTTI",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "30240",
    TENBH: "TUTTI-FRUTTI",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "4793",
    TENBH: "TWIST AND SHOUT",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "18819",
    TENBH: "TWO PRINCES",
    TACGIA: "Spin Doctors",
  },
  {
    MABH: "26088",
    TENBH: "U CAN'T TOUCH THIS",
    TACGIA: "MC Hammer",
  },
  {
    MABH: "18218",
    TENBH: "U SMILE",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "3734",
    TENBH: "ÚLTIMA CANÇÃO",
    TACGIA: "Paulo Sérgio",
  },
  {
    MABH: "33173",
    TENBH: "ULTIMA DOSE",
    TACGIA: "João Neto e Frederico & Cristiano Araújo",
  },
  {
    MABH: "33725",
    TENBH: "ÚLTIMO ADEUS",
    TACGIA: "Leonardo e Eduardo Costa",
  },
  {
    MABH: "33793",
    TENBH: "ÚLTIMO ROMANCE",
    TACGIA: "Los Hermanos",
  },
  {
    MABH: "24326",
    TENBH: "ULTRAVIOLENCE",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "3980",
    TENBH: "UM AMOR DE VERÃO",
    TACGIA: "Rádio Táxi",
  },
  {
    MABH: "7717",
    TENBH: "UM AMOR PURO",
    TACGIA: "Djavan",
  },
  {
    MABH: "6995",
    TENBH: "UM ANJO",
    TACGIA: "KLB",
  },
  {
    MABH: "9350",
    TENBH: "UM ANJO DO CÉU",
    TACGIA: "Maskavo",
  },
  {
    MABH: "6639",
    TENBH: "UM ANJO VEIO ME FALAR",
    TACGIA: "Rouge",
  },
  {
    MABH: "33229",
    TENBH: "UM BEIJO",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "6318",
    TENBH: "UM BEIJO PRA ME ENLOUQUECER",
    TACGIA: "Daniel",
  },
  {
    MABH: "6360",
    TENBH: "UM CANTINHO DO SEU CORAÇÃO (CACHITO)",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "33726",
    TENBH: "UM CARA FELIZ",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "3279",
    TENBH: "UM CERTO ALGUÉM",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "33057",
    TENBH: "UM DEGRAU NA ESCADA",
    TACGIA: "Leonardo e Eduardo Costa",
  },
  {
    MABH: "33727",
    TENBH: "UM DIA",
    TACGIA: "Pablo",
  },
  {
    MABH: "30433",
    TENBH: "UM DIA DE CÃO",
    TACGIA: "Os Saltimbancos",
  },
  {
    MABH: "3280",
    TENBH: "UM DIA DE DOMINGO",
    TACGIA: "Tim Maia e Gal Costa",
  },
  {
    MABH: "33903",
    TENBH: "UM DIA PRA NÃO SE ESQUECER (SUNRISE)",
    TACGIA: "Jota Quest part. Projota",
  },
  {
    MABH: "6078",
    TENBH: "UM DIA PRA NÓS DOIS",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "6517",
    TENBH: "UM DIA, UM ADEUS",
    TACGIA: "Guilherme Arantes",
  },
  {
    MABH: "33187",
    TENBH: "UM DIA... MEU PRIMEIRO AMOR",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "30681",
    TENBH: "UM EM UM MILHÃO",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "33342",
    TENBH: "UM HOMEM EM VOLTA DO MUNDO",
    TACGIA: "Ritchie",
  },
  {
    MABH: "3395",
    TENBH: "UM HOMEM QUANDO AMA",
    TACGIA: "Chitãozinho & Xororó",
  },
  {
    MABH: "33896",
    TENBH: "UM ÍNDIO",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "33728",
    TENBH: "UM LOUCO",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "33164",
    TENBH: "UM LUGARZINHO NA SUA CAMA",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "9902",
    TENBH: "UM MINUTO",
    TACGIA: "D'Black e Negra Li",
  },
  {
    MABH: "9903",
    TENBH: "UM MINUTO PARA O FIM DO MUNDO",
    TACGIA: "CPM 22",
  },
  {
    MABH: "33419",
    TENBH: "UM NOVO CARA",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "33871",
    TENBH: "UM POR OUTRO",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "3499",
    TENBH: "UM PRO OUTRO",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "30916",
    TENBH: "UM SÉCULO SEM TI",
    TACGIA: "Mato Grosso e Mathias",
  },
  {
    MABH: "15197",
    TENBH: "UM SER AMOR",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "4015",
    TENBH: "UM SONHADOR",
    TACGIA: "Leandro & Leonardo",
  },
  {
    MABH: "9353",
    TENBH: "UM SONHO A DOIS",
    TACGIA: "Roupa Nova part. Claúdia Leitte",
  },
  {
    MABH: "33070",
    TENBH: "UM SONHO COM TIAO CARREIRO",
    TACGIA: "Emílio e Eduardo & Munhoz e Mariano",
  },
  {
    MABH: "30085",
    TENBH: "UM TAL DE TOMA",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "4379",
    TENBH: "UM VIOLEIRO TOCA",
    TACGIA: "Almir Sater",
  },
  {
    MABH: "2820",
    TENBH: "UMA ARLINDA MULHER",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "3281",
    TENBH: "UMA BRASILEIRA",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "6557",
    TENBH: "UMA CARTA",
    TACGIA: "LS Jack",
  },
  {
    MABH: "6519",
    TENBH: "UMA ESTRELA",
    TACGIA: "Grupo Pique Novo",
  },
  {
    MABH: "4016",
    TENBH: "UMA HISTÓRIA DE AMOR",
    TACGIA: "Fanzine",
  },
  {
    MABH: "6757",
    TENBH: "UMA LOUCA TEMPESTADE",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "7176",
    TENBH: "UMA MENSAGEM DE AMOR",
    TACGIA: "Leo Jaime",
  },
  {
    MABH: "33273",
    TENBH: "UMA MULHER É IGUAL A UMA FLOR",
    TACGIA: "Banda Musa do Calypso",
  },
  {
    MABH: "3282",
    TENBH: "UMA NOITE E MEIA",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "6037",
    TENBH: "UMA ONDA QUE PASSOU",
    TACGIA: "Tribo de Jah",
  },
  {
    MABH: "1579",
    TENBH: "UMA VEZ E NUNCA MAIS",
    TACGIA: "Byafra",
  },
  {
    MABH: "6996",
    TENBH: "UMA VEZ MAIS",
    TACGIA: "Ivo Pessoa",
  },
  {
    MABH: "33996",
    TENBH: "UMA VIDA SÓ",
    TACGIA: "O Rappa",
  },
  {
    MABH: "24203",
    TENBH: "UMBRELLA",
    TACGIA: "Rihanna",
  },
  {
    MABH: "24947",
    TENBH: "UN POCO LOCO",
    TACGIA: "Anthony Gonzalez",
  },
  {
    MABH: "24846",
    TENBH: "UNBELIEVABLE",
    TACGIA: "EMF",
  },
  {
    MABH: "4794",
    TENBH: "UNBREAK MY HEART",
    TACGIA: "Toni Braxton",
  },
  {
    MABH: "4554",
    TENBH: "UNCHAIN MY HEART",
    TACGIA: "Joe Cocker",
  },
  {
    MABH: "4553",
    TENBH: "UNCHAINED MELODY",
    TACGIA: "Righteous Brothers",
  },
  {
    MABH: "24068",
    TENBH: "UNCONDITIONALLY",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "26215",
    TENBH: "UNDER CONTROL",
    TACGIA: "Calvin Harris",
  },
  {
    MABH: "18711",
    TENBH: "UNDER COVER OF DARKNESS",
    TACGIA: "The Strokes",
  },
  {
    MABH: "18335",
    TENBH: "UNDER PREASSURE",
    TACGIA: "Queen",
  },
  {
    MABH: "4986",
    TENBH: "UNDER THE BRIDGE",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "26181",
    TENBH: "UNDERNEATH YOUR CLOTHES",
    TACGIA: "Shakira",
  },
  {
    MABH: "2633",
    TENBH: "UNFAITHFUL",
    TACGIA: "Rihanna",
  },
  {
    MABH: "4555",
    TENBH: "UNFORGETTABLE",
    TACGIA: "Nat King Cole",
  },
  {
    MABH: "3283",
    TENBH: "UNI, DUNI, TÊ",
    TACGIA: "Trem da Alegria",
  },
  {
    MABH: "18597",
    TENBH: "UNINVITED",
    TACGIA: "Alanis Morissette",
  },
  {
    MABH: "26204",
    TENBH: "UNIVERSALLY SPEAKING",
    TACGIA: "Red Hot Chili Peppers",
  },
  {
    MABH: "3284",
    TENBH: "UNIVERSO NO TEU CORPO",
    TACGIA: "Taiguara",
  },
  {
    MABH: "26230",
    TENBH: "UNTITLED (HOW CAN THIS HAPPEN TO ME)",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "9070",
    TENBH: "UNWELL",
    TACGIA: "Matchbox Twenty",
  },
  {
    MABH: "4795",
    TENBH: "UP AROUND THE BEND",
    TACGIA: "Creedence Clearwater Revival",
  },
  {
    MABH: "4846",
    TENBH: "UP WHERE WE BELONG",
    TACGIA: "Joe Cocker & Jennifer Warnes",
  },
  {
    MABH: "4415",
    TENBH: "UPA NEGUINHO",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "24278",
    TENBH: "UPRISING",
    TACGIA: "Muse",
  },
  {
    MABH: "9279",
    TENBH: "UPSIDE DOWN",
    TACGIA: "Jack Johnson",
  },
  {
    MABH: "24574",
    TENBH: "UPSIDE DOWN",
    TACGIA: "Diana Ross",
  },
  {
    MABH: "24342",
    TENBH: "UPTOWN FUNK",
    TACGIA: "Mark Ronson ft. Bruno Mars",
  },
  {
    MABH: "4987",
    TENBH: "UPTOWN GIRL",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "24800",
    TENBH: "UPTOWN GIRL",
    TACGIA: "Westlife",
  },
  {
    MABH: "18820",
    TENBH: "UPTOWN TOP RANKING",
    TACGIA: "Althea N Donna",
  },
  {
    MABH: "6223",
    TENBH: "URSINHO BLAU BLAU",
    TACGIA: "Absyntho",
  },
  {
    MABH: "7472",
    TENBH: "URSINHO DE DORMIR",
    TACGIA: "Armandinho",
  },
  {
    MABH: "18598",
    TENBH: "USE SOMEBODY",
    TACGIA: "Kings of Leon",
  },
  {
    MABH: "6198",
    TENBH: "USTED SE ME LLEVÓ LA VIDA",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "3349",
    TENBH: "UTOPIA",
    TACGIA: "Art Popular",
  },
  {
    MABH: "3396",
    TENBH: "VÁ COM DEUS",
    TACGIA: "Roberta Miranda",
  },
  {
    MABH: "1799",
    TENBH: "VÁ PRO INFERNO COM SEU AMOR",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "30474",
    TENBH: "VÁ SE BENZER",
    TACGIA: "Preta Gil ft. Gal Costa",
  },
  {
    MABH: "6239",
    TENBH: "VACILÃO",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "15198",
    TENBH: "VAGALUMES",
    TACGIA: "Pollo part. Ivo Mozart",
  },
  {
    MABH: "1179",
    TENBH: "VAI",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "6678",
    TENBH: "VAI DAR NAMORO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "4338",
    TENBH: "VAI DAR SAMBA",
    TACGIA: "Daniel",
  },
  {
    MABH: "33902",
    TENBH: "VAI DOER",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "15279",
    TENBH: "VAI E CHORA",
    TACGIA: "Sorriso Maroto",
  },
  {
    MABH: "15959",
    TENBH: "VAI E VEM",
    TACGIA: "Capital Inicial ft. Seu Jorge",
  },
  {
    MABH: "30242",
    TENBH: "VAI EMBRAZANDO",
    TACGIA: "MC Zaac part. Mc Vigary",
  },
  {
    MABH: "33149",
    TENBH: "VAI ENTENDER",
    TACGIA: "Israel Novaes & Jorge e Mateus",
  },
  {
    MABH: "3777",
    TENBH: "VAI FICAR NA SAUDADE",
    TACGIA: "Benito Di Paula",
  },
  {
    MABH: "33881",
    TENBH: "VAI LÁ, VAI LÁ",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "30475",
    TENBH: "VAI MALANDRA",
    TACGIA: "Anitta, MC Zaac, Maejor ft. Tropkillaz & DJ Yuri Martins",
  },
  {
    MABH: "30141",
    TENBH: "VAI ME PERDER",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "33901",
    TENBH: "VAI ME PERDOANDO",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "15517",
    TENBH: "VAI NO CAVALINHO",
    TACGIA: "Gasparzinho",
  },
  {
    MABH: "9906",
    TENBH: "VAI PESCAR MOÇADA",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "30722",
    TENBH: "VAI QUE BEBEREIS",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "3599",
    TENBH: "VAI SACUDIR, VAI ABALAR",
    TACGIA: "Cheiro de Amor",
  },
  {
    MABH: "33534",
    TENBH: "VAI TER QUE REBOLAR",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "4417",
    TENBH: "VAI VADIAR",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33337",
    TENBH: "VAI VENDO",
    TACGIA: "Lucas Lucco",
  },
  {
    MABH: "4137",
    TENBH: "VALE TUDO",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "24554",
    TENBH: "VALERIE",
    TACGIA: "Amy Winehouse ft. Mark Ronson",
  },
  {
    MABH: "1477",
    TENBH: "VALEU",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "3285",
    TENBH: "VALEU DEMAIS",
    TACGIA: "Art Popular",
  },
  {
    MABH: "15098",
    TENBH: "VALSINHA",
    TACGIA: "Chico Buarque",
  },
  {
    MABH: "4138",
    TENBH: "VAMBORA",
    TACGIA: "Adriana Calcanhotto",
  },
  {
    MABH: "6398",
    TENBH: "VAMO PULA",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "30577",
    TENBH: "VAMO QUE VAMO",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "15700",
    TENBH: "VAMOS BEBER",
    TACGIA: "Dennis DJ & João Lucas e Marcelo part. Ronaldinho",
  },
  {
    MABH: "15138",
    TENBH: "VAMOS CONSTRUIR",
    TACGIA: "Sandy & Júnior",
  },
  {
    MABH: "30581",
    TENBH: "VAMOS DANÇAR",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "15758",
    TENBH: "VAMOS FAZER UM FILME",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "3600",
    TENBH: "VAMOS FUGIR",
    TACGIA: "Skank",
  },
  {
    MABH: "2940",
    TENBH: "VAMOS MEXER",
    TACGIA: "Bruninho e Davi part. Michel Teló",
  },
  {
    MABH: "33729",
    TENBH: "VAMOS SEGUIR",
    TACGIA: "NX Zero",
  },
  {
    MABH: "30854",
    TENBH: "VAPOR BARATO",
    TACGIA: "O Rappa",
  },
  {
    MABH: "4500",
    TENBH: "VAPOR BARATO E FLÔR DA PELE",
    TACGIA: "Gal Costa e Zeca Balero",
  },
  {
    MABH: "15480",
    TENBH: "VARINHA MÁGICA",
    TACGIA: "Pedro Henrique e Fernando part. Munhoz e Mariano",
  },
  {
    MABH: "7723",
    TENBH: "VÊ SE TOMA JUIZO",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "33700",
    TENBH: "VEJA SÓ NO QUE DEU",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "33528",
    TENBH: "VEJO O SOL E A LUA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "6558",
    TENBH: "VELHA INFÂNCIA",
    TACGIA: "Tribalistas",
  },
  {
    MABH: "15798",
    TENBH: "VELHA PORTEIRA",
    TACGIA: "Lourenço e Lourival",
  },
  {
    MABH: "4219",
    TENBH: "VELHA ROUPA COLORIDA",
    TACGIA: "Elis Regina",
  },
  {
    MABH: "33730",
    TENBH: "VELHO PUNK",
    TACGIA: "Gritando HC",
  },
  {
    MABH: "9907",
    TENBH: "VELOCIDADE DA LUZ",
    TACGIA: "Grupo Revelação",
  },
  {
    MABH: "33775",
    TENBH: "VEM CÁ MOÇA",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "6559",
    TENBH: "VEM ME AJUDAR (GET ME SOME HELP)",
    TACGIA: "The Fevers",
  },
  {
    MABH: "30414",
    TENBH: "VEM ME AMAR",
    TACGIA: "João Bosco e Vinícius",
  },
  {
    MABH: "6640",
    TENBH: "VEM ME AMAR (ÁMAME)",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "9359",
    TENBH: "VEM ME DENGAR",
    TACGIA: "Tchê Garotos",
  },
  {
    MABH: "3900",
    TENBH: "VEM MEU AMOR",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "33152",
    TENBH: "VEM MEU AMOR",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "33737",
    TENBH: "VEM NENÉM",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "2879",
    TENBH: "VEM NI MIM DODGE RAM",
    TACGIA: "Israel Novaes & Gusttavo Lima",
  },
  {
    MABH: "4339",
    TENBH: "VEM PRA FICAR COMIGO",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "33734",
    TENBH: "VEM PRO MEU LOUNGE",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "3286",
    TENBH: "VEM QUENTE QUE EU ESTOU FERVENDO",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "33792",
    TENBH: "VEM VEM",
    TACGIA: "Pedro Paulo e Alex",
  },
  {
    MABH: "30241",
    TENBH: "VENCEDOR",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "1479",
    TENBH: "VENDAVAL",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "33530",
    TENBH: "VENDAVAL",
    TACGIA: "Joanna",
  },
  {
    MABH: "7475",
    TENBH: "VENDEDOR DE BANANAS",
    TACGIA: "Os Incríveis",
  },
  {
    MABH: "15358",
    TENBH: "VENENO",
    TACGIA: "Fernando e Sorocaba",
  },
  {
    MABH: "30682",
    TENBH: "VENENO",
    TACGIA: "Anitta",
  },
  {
    MABH: "33388",
    TENBH: "VENTO DOS AREAIS",
    TACGIA: "Soweto",
  },
  {
    MABH: "3643",
    TENBH: "VENTO NO LITORAL",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "3287",
    TENBH: "VENTO VENTANIA",
    TACGIA: "Biquini Cavadão",
  },
  {
    MABH: "5997",
    TENBH: "VENTURA HIGHWAY",
    TACGIA: "America",
  },
  {
    MABH: "18151",
    TENBH: "VENUS",
    TACGIA: "Shocking Blue",
  },
  {
    MABH: "33900",
    TENBH: "VERBALIZE",
    TACGIA: "Natiruts",
  },
  {
    MABH: "3644",
    TENBH: "VERDADE",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "3500",
    TENBH: "VERDADE CHINESA",
    TACGIA: "Emilio Santiago",
  },
  {
    MABH: "6599",
    TENBH: "VERDE",
    TACGIA: "Leila Pinheiro",
  },
  {
    MABH: "3547",
    TENBH: "VERMELHO",
    TACGIA: "Fafá de Belém",
  },
  {
    MABH: "9908",
    TENBH: "VERSOS SIMPLES",
    TACGIA: "Chimarruts",
  },
  {
    MABH: "18074",
    TENBH: "VERTIGO",
    TACGIA: "U2",
  },
  {
    MABH: "33533",
    TENBH: "VESTIDO DE SEDA",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "33453",
    TENBH: "VESTIDO ESTAMPADO",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "33066",
    TENBH: "VIAGEM AO FUNDO DO EGO",
    TACGIA: "Egotrip",
  },
  {
    MABH: "6120",
    TENBH: "VIAJANTE",
    TACGIA: "Ney Matogrosso",
  },
  {
    MABH: "30985",
    TENBH: "VIAJAR PELO SAFÁRI",
    TACGIA: "Mundo Bita",
  },
  {
    MABH: "30683",
    TENBH: "VÍCIO",
    TACGIA: "João Neto e Frederico ft. Jads e Jadson",
  },
  {
    MABH: "33363",
    TENBH: "VÍCIO",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "1139",
    TENBH: "VIDA",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "9561",
    TENBH: "VIDA BOA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "4418",
    TENBH: "VIDA CIGANA",
    TACGIA: "João Pedro e Cristiano",
  },
  {
    MABH: "30120",
    TENBH: "VIDA COR DE ROSA",
    TACGIA: "Amado Batista",
  },
  {
    MABH: "9362",
    TENBH: "VIDA DE CÃO",
    TACGIA: "Rionegro & Solimões",
  },
  {
    MABH: "2778",
    TENBH: "VIDA DE EMPREGUETE",
    TACGIA: "As Empreguetes",
  },
  {
    MABH: "30884",
    TENBH: "VIDA DIVIDIDA",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "30026",
    TENBH: "VIDA LOKA (PARTE 1)",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "33462",
    TENBH: "VIDA LOKA (PARTE 2)",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "7476",
    TENBH: "VIDA LOUCA VIDA",
    TACGIA: "Lobão",
  },
  {
    MABH: "33346",
    TENBH: "VIDA MAIS OU MENOS",
    TACGIA: "Banda Luxúria",
  },
  {
    MABH: "6520",
    TENBH: "VIDA MINHA",
    TACGIA: "Daniel",
  },
  {
    MABH: "4300",
    TENBH: "VIDA VAZIA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30892",
    TENBH: "VIDAS DE CRISTAL",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "18293",
    TENBH: "VIDEO GAMES",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "30243",
    TENBH: "VIDINHA DE BALADA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "15199",
    TENBH: "VIDRO FUMÊ",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "30086",
    TENBH: "VIDRO FUMÊ",
    TACGIA: "Léo Santana ft. MC TH",
  },
  {
    MABH: "24575",
    TENBH: "VIENNA",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "5857",
    TENBH: "VIEW TO A KILL",
    TACGIA: "Duran Duran",
  },
  {
    MABH: "7273",
    TENBH: "VILAREJO",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "30723",
    TENBH: "VINGANÇA",
    TACGIA: "Luan Santana part. MC Kekel",
  },
  {
    MABH: "33343",
    TENBH: "VINGANÇA DO AMOR",
    TACGIA: "Pablo & Ivete Sangalo",
  },
  {
    MABH: "15599",
    TENBH: "VINTE E NOVE",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "33882",
    TENBH: "VINTE E POUCOS ANOS",
    TACGIA: "Raimundos",
  },
  {
    MABH: "30584",
    TENBH: "VIRA A FAIXA CIDADÃO",
    TACGIA: "Naiara Azevedo part. Gusttavo Lima",
  },
  {
    MABH: "33791",
    TENBH: "VIRA LATA",
    TACGIA: "Loubet part. Fernando e Sorocaba",
  },
  {
    MABH: "3289",
    TENBH: "VIRA VIRA",
    TACGIA: "Mamonas Assassinas",
  },
  {
    MABH: "4380",
    TENBH: "VIRA VIROU",
    TACGIA: "Kleiton e Kledir",
  },
  {
    MABH: "7000",
    TENBH: "VIRGEM",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "24670",
    TENBH: "VIRTUAL INSANITY",
    TACGIA: "Jamiroquai",
  },
  {
    MABH: "30246",
    TENBH: "VISH, AFF, PUTZ, NOSSA",
    TACGIA: "Pedro Paulo e Alex part. Lucas Lucco",
  },
  {
    MABH: "6199",
    TENBH: "VITAL E SUA MOTO",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "33498",
    TENBH: "VITÓRIA NO DESERTO",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "3290",
    TENBH: "VITORIOSA",
    TACGIA: "Ivan Lins",
  },
  {
    MABH: "9363",
    TENBH: "VIVA A VIDA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "4847",
    TENBH: "VIVA FOREVER",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "24029",
    TENBH: "VIVA LA VIDA",
    TACGIA: "Coldplay",
  },
  {
    MABH: "33386",
    TENBH: "VIVER SEM TI",
    TACGIA: "Thiaguinho part. Mariana Rios",
  },
  {
    MABH: "8197",
    TENBH: "VIVIR SIN AIRE",
    TACGIA: "Maná",
  },
  {
    MABH: "26025",
    TENBH: "VIVO PER LEI",
    TACGIA: "Andrea Bocelli",
  },
  {
    MABH: "4019",
    TENBH: "VIVO POR ELLA",
    TACGIA: "Sandy & Andrea Bocelli",
  },
  {
    MABH: "15319",
    TENBH: "VÓ, TÔ ESTOURADO!",
    TACGIA: "Israel Novaes",
  },
  {
    MABH: "1330",
    TENBH: "VOA BEIJA-FLOR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "6400",
    TENBH: "VOA LIBERDADE",
    TACGIA: "Jessé",
  },
  {
    MABH: "33997",
    TENBH: "VOANDO PRO PARÁ",
    TACGIA: "Joelma",
  },
  {
    MABH: "3688",
    TENBH: "VOCÊ",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "33344",
    TENBH: "VOCÊ",
    TACGIA: "Roberto Menescal",
  },
  {
    MABH: "33738",
    TENBH: "VOCÊ",
    TACGIA: "Leila Pinheiro",
  },
  {
    MABH: "2800",
    TENBH: "VOCÊ DE MIM NÃO SAI",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "1157",
    TENBH: "VOCÊ DE VOLTA",
    TACGIA: "Maria Cecília e Rodolfo",
  },
  {
    MABH: "1819",
    TENBH: "VOCÊ DEIXOU ALGUÉM A ESPERAR",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "30587",
    TENBH: "VOCÊ É A DONA DO MEU CORAÇÃO",
    TACGIA: "Zé Henrique e Gabriel",
  },
  {
    MABH: "6600",
    TENBH: "VOCÊ É DOIDA DEMAIS",
    TACGIA: "Lindomar Castilho",
  },
  {
    MABH: "33790",
    TENBH: "VOCÊ E EU",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "30476",
    TENBH: "VOCÊ E EU, EU E VOCÊ",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "3292",
    TENBH: "VOCÊ É LINDA",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "33186",
    TENBH: "VOCE É MINHA RELIGIAO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "30435",
    TENBH: "VOCÊ É TUDO",
    TACGIA: "Jammil & Uma Noites",
  },
  {
    MABH: "1158",
    TENBH: "VOCÊ É TUDO QUE PEDI PRA DEUS",
    TACGIA: "César e Paulinho",
  },
  {
    MABH: "33345",
    TENBH: "VOCÊ EM MINHA VIDA",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "33899",
    TENBH: "VOCÊ ERROU MAIS DO QUE EU",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "33998",
    TENBH: "VOCÊ FAZ FALTA AQUI",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "1102",
    TENBH: "VOCÊ FOI ATRIZ",
    TACGIA: "Eduardo Costa & Bruno & Marrone",
  },
  {
    MABH: "1318",
    TENBH: "VOCÊ MARCOU PRA MIM",
    TACGIA: "Ataíde e Alexandre",
  },
  {
    MABH: "9565",
    TENBH: "VOCÊ ME ENSINOU AMOR",
    TACGIA: "Natalia Siqueira",
  },
  {
    MABH: "9364",
    TENBH: "VOCÊ ME FAZ TÃO BEM",
    TACGIA: "Detonautas",
  },
  {
    MABH: "30092",
    TENBH: "VOCÊ ME TROCOU",
    TACGIA: "Bruno & Marrone & Chitãozinho e Xororó",
  },
  {
    MABH: "6759",
    TENBH: "VOCÊ ME VIRA A CABEÇA",
    TACGIA: "Alcione",
  },
  {
    MABH: "33529",
    TENBH: "VOCÊ MENTE",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "33731",
    TENBH: "VOCÊ MERECE CACHÊ",
    TACGIA: "Israel Novaes & Wesley Safadão",
  },
  {
    MABH: "15280",
    TENBH: "VOCÊ MUDOU",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "33254",
    TENBH: "VOCÊ NÃO ME CONHECE",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "6679",
    TENBH: "VOCÊ NÃO ME ENSINOU A TE ESQUECER",
    TACGIA: "Caetano Veloso",
  },
  {
    MABH: "30783",
    TENBH: "VOCÊ NÃO ME ENSINOU A TE ESQUECER",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "33789",
    TENBH: "VOCÊ NÃO ME ESQUECEU",
    TACGIA: "Wesley Safadão e Jorge",
  },
  {
    MABH: "30255",
    TENBH: "VOCÊ NÃO PRESTA",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "15799",
    TENBH: "VOCÊ NÃO SABE",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "33898",
    TENBH: "VOCÊ NÃO SABE (QUERO VER)",
    TACGIA: "Bruna Viola",
  },
  {
    MABH: "1350",
    TENBH: "VOCÊ NÃO SABE O QUE É AMOR",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "4100",
    TENBH: "VOCÊ NÃO SERVE PRA MIM",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "3293",
    TENBH: "VOCÊ NÃO SOUBE ME AMAR",
    TACGIA: "Blitz",
  },
  {
    MABH: "1190",
    TENBH: "VOCÊ NÃO VALE NADA",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "30477",
    TENBH: "VOCÊ NÃO VALE NADA",
    TACGIA: "Menor",
  },
  {
    MABH: "30087",
    TENBH: "VOCÊ PARTIU MEU CORAÇÃO",
    TACGIA: "Nego do Borel ft. Anitta, Wesley Safadão",
  },
  {
    MABH: "30575",
    TENBH: "VOCÊ SABIA",
    TACGIA: "Victor & Leo",
  },
  {
    MABH: "6839",
    TENBH: "VOCÊ SEMPRE SERÁ",
    TACGIA: "Marjorie Estiano",
  },
  {
    MABH: "3779",
    TENBH: "VOCÊ SÓ ME FAZ FELIZ",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "3294",
    TENBH: "VOCÊ VAI VER",
    TACGIA: "Zezé Di Camargo & Luciano",
  },
  {
    MABH: "7278",
    TENBH: "VOCÊ VAI VER",
    TACGIA: "Pedro Mariano & Zélia Duncan",
  },
  {
    MABH: "6039",
    TENBH: "VOCÊ VIROU SAUDADE",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "31037",
    TENBH: "VOGAIS E CONSOANTES",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "18186",
    TENBH: "VOGUE",
    TACGIA: "Madonna",
  },
  {
    MABH: "24970",
    TENBH: "VOLARE",
    TACGIA: "Gipsy Kings",
  },
  {
    MABH: "26195",
    TENBH: "VOLARE",
    TACGIA: "Dean Martin",
  },
  {
    MABH: "6560",
    TENBH: "VOLTA",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "9368",
    TENBH: "VOLTA AO COMEÇO",
    TACGIA: "Fábio Jr.",
  },
  {
    MABH: "30838",
    TENBH: "VOLTA POR BAIXO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "33457",
    TENBH: "VOLTA PRA CASA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "3295",
    TENBH: "VOLTA PRA ELA",
    TACGIA: "Eliana de Lima",
  },
  {
    MABH: "3550",
    TENBH: "VOLTA PRA MIM",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "2779",
    TENBH: "VOLTA PRO MEU CORAÇÃO",
    TACGIA: "João Carreiro e Capataz",
  },
  {
    MABH: "30955",
    TENBH: "VOLTE A SONHAR",
    TACGIA: "Elaine Martins",
  },
  {
    MABH: "1760",
    TENBH: "VONTADE DIVIDIDA",
    TACGIA: "Milionário e José Rico",
  },
  {
    MABH: "33109",
    TENBH: "VOU ATÉ O FIM",
    TACGIA: "Guilherme e Santiago part. Jorge e Mateus",
  },
  {
    MABH: "30248",
    TENBH: "VOU BEBER DE NOVO",
    TACGIA: "Teodoro e Sampaio",
  },
  {
    MABH: "33106",
    TENBH: "VOU BEBER VENENO",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "30037",
    TENBH: "VOU BOTAR TEU NOME NA MACUMBA",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "33379",
    TENBH: "VOU DAR O NÓ EM VOCÊ",
    TACGIA: "Thaeme e Thiago",
  },
  {
    MABH: "33650",
    TENBH: "VOU DAR VIROTE",
    TACGIA: "Garota Safada",
  },
  {
    MABH: "33532",
    TENBH: "VOU DE TÁXI",
    TACGIA: "Angélica",
  },
  {
    MABH: "6680",
    TENBH: "VOU DEIXAR",
    TACGIA: "Skank",
  },
  {
    MABH: "33732",
    TENBH: "VOU DESAFIAR VOCÊ",
    TACGIA: "MC Sapão",
  },
  {
    MABH: "15639",
    TENBH: "VOU FAZER COM VOCÊ",
    TACGIA: "Gabriel Valim",
  },
  {
    MABH: "1160",
    TENBH: "VOU FAZER PIRRAÇA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "3296",
    TENBH: "VOU FESTEJAR",
    TACGIA: "Beth Carvalho",
  },
  {
    MABH: "30592",
    TENBH: "VOU LEVANDO A VIDA",
    TACGIA: "Daniel",
  },
  {
    MABH: "30904",
    TENBH: "VOU MORRER SOZINHO",
    TACGIA: "Jão",
  },
  {
    MABH: "30930",
    TENBH: "VOU PARA SANTA CATARINA",
    TACGIA: "Terceira Dimensão",
  },
  {
    MABH: "33028",
    TENBH: "VOU TE AMARRAR NA MINHA CAMA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "6200",
    TENBH: "VOU TE PROCURAR",
    TACGIA: "Os Travessos",
  },
  {
    MABH: "30088",
    TENBH: "VOU TE TRAIR",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "30806",
    TENBH: "VOU TER QUE SUPERAR",
    TACGIA: "Matheus e Kauan ft. Marília Mendonça",
  },
  {
    MABH: "33788",
    TENBH: "VOU VOANDO",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "7279",
    TENBH: "VOZ NO OUVIDO",
    TACGIA: "Pedro Mariano",
  },
  {
    MABH: "33168",
    TENBH: "VUCO VUCO",
    TACGIA: "João Lucas e Marcelo",
  },
  {
    MABH: "18152",
    TENBH: "WAITING FOR A GIRL LIKE YOU",
    TACGIA: "Foreigner",
  },
  {
    MABH: "24305",
    TENBH: "WAITING FOR LOVE",
    TACGIA: "Avicii",
  },
  {
    MABH: "2658",
    TENBH: "WAITING FOR TONIGHT",
    TACGIA: "Jennifer Lopez",
  },
  {
    MABH: "15640",
    TENBH: "WAITING FOR YOU (PARTY ON)",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "18946",
    TENBH: "WAITING IN VAIN",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "24451",
    TENBH: "WAITING ON THE WORLD TO CHANGE",
    TACGIA: "John Mayer",
  },
  {
    MABH: "18712",
    TENBH: "WAKA WAKA (THIS TIME FOR AFRICA)",
    TACGIA: "Shakira",
  },
  {
    MABH: "24420",
    TENBH: "WAKE ME UP",
    TACGIA: "Avicii",
  },
  {
    MABH: "24576",
    TENBH: "WAKE ME UP BEFORE YOU GO-GO",
    TACGIA: "Wham!",
  },
  {
    MABH: "5998",
    TENBH: "WAKE ME UP WHEN SEPTEMBER ENDS",
    TACGIA: "Green Day",
  },
  {
    MABH: "5999",
    TENBH: "WAKE UP",
    TACGIA: "Hilary Duff",
  },
  {
    MABH: "2637",
    TENBH: "WAKING UP IN VEGAS",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "18599",
    TENBH: "WALK",
    TACGIA: "Pantera",
  },
  {
    MABH: "18947",
    TENBH: "WALK",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "4662",
    TENBH: "WALK AWAY",
    TACGIA: "Matt Monro",
  },
  {
    MABH: "24555",
    TENBH: "WALK AWAY",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "18948",
    TENBH: "WALK LIKE NA EGYPTIAN",
    TACGIA: "The Bangles",
  },
  {
    MABH: "18256",
    TENBH: "WALK OF LIFE",
    TACGIA: "Dire Straits",
  },
  {
    MABH: "18949",
    TENBH: "WALK ON BY",
    TACGIA: "Dionne Warwick",
  },
  {
    MABH: "18600",
    TENBH: "WALK THIS WAY",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "18359",
    TENBH: "WALKIN' ON THE SUN",
    TACGIA: "Smash Mouth",
  },
  {
    MABH: "18601",
    TENBH: "WALKING AFTER YOU",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "24309",
    TENBH: "WALKING ON AIR",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "24920",
    TENBH: "WALKING ON SUNSHINE",
    TACGIA: "Katrina & The Waves",
  },
  {
    MABH: "18713",
    TENBH: "WALL TO WALL",
    TACGIA: "Chris Brown",
  },
  {
    MABH: "4796",
    TENBH: "WANNABE",
    TACGIA: "Spice Girls",
  },
  {
    MABH: "24181",
    TENBH: "WANT TO WANT ME",
    TACGIA: "Jason Derulo",
  },
  {
    MABH: "18950",
    TENBH: "WANTED DEAD OR ALIVE",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "18602",
    TENBH: "WAR PIGS",
    TACGIA: "Black Sabbath",
  },
  {
    MABH: "24847",
    TENBH: "WARRIOR",
    TACGIA: "Aurora",
  },
  {
    MABH: "24146",
    TENBH: "WARRIORS",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "24486",
    TENBH: "WASTE A MOMENT",
    TACGIA: "Kings of Leon",
  },
  {
    MABH: "24139",
    TENBH: "WASTED",
    TACGIA: "Tiesto ft. Matthew Koma",
  },
  {
    MABH: "2659",
    TENBH: "WASTING LOVE",
    TACGIA: "Iron Maiden",
  },
  {
    MABH: "24445",
    TENBH: "WATCH ME (WHIP - NAE NAE)",
    TACGIA: "Silentó",
  },
  {
    MABH: "24507",
    TENBH: "WATER UNDER THE BRIDGE",
    TACGIA: "Adele",
  },
  {
    MABH: "24577",
    TENBH: "WATERFALLS",
    TACGIA: "TLC",
  },
  {
    MABH: "26156",
    TENBH: "WATERMELON SUGAR",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "3298",
    TENBH: "WAVE",
    TACGIA: "Tom Jobim",
  },
  {
    MABH: "24280",
    TENBH: "WAVES (ROBIN SCHULZ REMIX)",
    TACGIA: "Mr. Probz",
  },
  {
    MABH: "24977",
    TENBH: "WAY DOWN WE GO",
    TACGIA: "Kaleo",
  },
  {
    MABH: "3297",
    TENBH: "W-BRASIL",
    TACGIA: "Jorge Ben Jor",
  },
  {
    MABH: "18951",
    TENBH: "WE ARE FAMILY",
    TACGIA: "Sister Sledge",
  },
  {
    MABH: "4797",
    TENBH: "WE ARE THE CHAMPIONS",
    TACGIA: "Queen",
  },
  {
    MABH: "4798",
    TENBH: "WE ARE THE WORLD",
    TACGIA: "U.S.A. For Africa",
  },
  {
    MABH: "18603",
    TENBH: "WE ARE YOUNG",
    TACGIA: "Fun ft. Janelle Monáe",
  },
  {
    MABH: "18747",
    TENBH: "WE BELONG TOGETHER",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "18369",
    TENBH: "WE CAN WORK IT OUT",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "24327",
    TENBH: "WE CAN'T STOP",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "24113",
    TENBH: "WE DEM BOYZ (EXPLICIT)",
    TACGIA: "Wiz Khalifa",
  },
  {
    MABH: "18952",
    TENBH: "WE DIDN'T START THE FIRE",
    TACGIA: "Billy Joel",
  },
  {
    MABH: "24919",
    TENBH: "WE DON'T HAVE TO TAKE OUR CLOTHES OFF",
    TACGIA: "Jermaine Stewart",
  },
  {
    MABH: "24672",
    TENBH: "WE DON'T NEED ANOTHER HERO",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "9191",
    TENBH: "WE DON'T TALK ANYMORE",
    TACGIA: "Cliff Richard",
  },
  {
    MABH: "24484",
    TENBH: "WE DON'T TALK ANYMORE",
    TACGIA: "Charlie Puth ft. Selena Gomez",
  },
  {
    MABH: "24149",
    TENBH: "WE FOUND LOVE",
    TACGIA: "Rihanna ft. Calvin Harris",
  },
  {
    MABH: "26132",
    TENBH: "WE LIKE TO PARTY",
    TACGIA: "Vengaboys",
  },
  {
    MABH: "18286",
    TENBH: "WE R WHO WE R",
    TACGIA: "Kesha",
  },
  {
    MABH: "24450",
    TENBH: "WE REMAIN",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "33891",
    TENBH: "WE SAID GOODBYE",
    TACGIA: "Dave Maclean",
  },
  {
    MABH: "4988",
    TENBH: "WE WILL ROCK YOU",
    TACGIA: "Queen",
  },
  {
    MABH: "18223",
    TENBH: "WEAK AND POWERLESS",
    TACGIA: "A Perfect Circle",
  },
  {
    MABH: "18604",
    TENBH: "WEIGHT OF THE WORLD",
    TACGIA: "Evanescence",
  },
  {
    MABH: "24673",
    TENBH: "WELCOME TO JAMROCK",
    TACGIA: "Damian Marley",
  },
  {
    MABH: "18357",
    TENBH: "WELCOME TO MY LIFE",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "18821",
    TENBH: "WELCOME TO THE BLACK PARADE",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "18270",
    TENBH: "WELCOME TO THE JUNGLE",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "18605",
    TENBH: "WELCOME TO WHEREVER YOU ARE",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "9192",
    TENBH: "WE'LL BE TOGETHER",
    TACGIA: "Sting",
  },
  {
    MABH: "18187",
    TENBH: "WE'RE ALL ALONE",
    TACGIA: "Rita Coolidge",
  },
  {
    MABH: "26199",
    TENBH: "WE'RE ALL IN THIS TOGETHER",
    TACGIA: "High School Musical",
  },
  {
    MABH: "9193",
    TENBH: "WE'RE IN THIS LOVE TOGETHER",
    TACGIA: "Al Jarreau",
  },
  {
    MABH: "18606",
    TENBH: "WE'RE NOT GONNA TAKE IT",
    TACGIA: "Twisted Sister",
  },
  {
    MABH: "24299",
    TENBH: "WEST COAST",
    TACGIA: "Lana Del Rey",
  },
  {
    MABH: "9991",
    TENBH: "WEST END GIRLS",
    TACGIA: "Pet Shop Boys",
  },
  {
    MABH: "4989",
    TENBH: "WE'VE GOT IT GOING ON",
    TACGIA: "Backstreet Boys",
  },
  {
    MABH: "9236",
    TENBH: "WE'VE GOT TONIGHT",
    TACGIA: "Kenny Rogers & Sheena Easton",
  },
  {
    MABH: "9194",
    TENBH: "WE'VE ONLY JUST BEGUN",
    TACGIA: "Carpenters",
  },
  {
    MABH: "4799",
    TENBH: "WHAT A FEELING",
    TACGIA: "Irene Cara",
  },
  {
    MABH: "9071",
    TENBH: "WHAT A FOOL BELIEVE",
    TACGIA: "Doobie Brothers",
  },
  {
    MABH: "24556",
    TENBH: "WHAT A GIRL WANTS",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "4556",
    TENBH: "WHAT A WONDERFUL WORLD",
    TACGIA: "Louis Armstrong",
  },
  {
    MABH: "24917",
    TENBH: "WHAT A WONDERFUL WORLD",
    TACGIA: "Israel Kamakawiwo'ole",
  },
  {
    MABH: "18714",
    TENBH: "WHAT ABOUT ME",
    TACGIA: "Kenny Rogers & Kim Carnes",
  },
  {
    MABH: "24801",
    TENBH: "WHAT ABOUT US",
    TACGIA: "Pink",
  },
  {
    MABH: "9992",
    TENBH: "WHAT AM I TO YOU",
    TACGIA: "Norah Jones",
  },
  {
    MABH: "24578",
    TENBH: "WHAT CAN I DO",
    TACGIA: "The Corrs",
  },
  {
    MABH: "2596",
    TENBH: "WHAT DO I DO WITH MY HEART",
    TACGIA: "Eagles",
  },
  {
    MABH: "24312",
    TENBH: "WHAT DO YOU MEAN",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "18070",
    TENBH: "WHAT DO YOU WANT FROM ME",
    TACGIA: "Monaco",
  },
  {
    MABH: "26062",
    TENBH: "WHAT DREAMS ARE MADE OF",
    TACGIA: "Hillary Duff",
  },
  {
    MABH: "2635",
    TENBH: "WHAT GOES AROUND COMES AROUND",
    TACGIA: "Justin Timberlake",
  },
  {
    MABH: "24172",
    TENBH: "WHAT I GOT",
    TACGIA: "Sublime",
  },
  {
    MABH: "18607",
    TENBH: "WHAT IF JESUS COMES BACK LIKE THAT",
    TACGIA: "Collin Raye",
  },
  {
    MABH: "9237",
    TENBH: "WHAT IS LOVE",
    TACGIA: "Haddaway",
  },
  {
    MABH: "9993",
    TENBH: "WHAT I'VE BEEN LOOKING FOR (REPRISE)",
    TACGIA: "High School Musical",
  },
  {
    MABH: "24317",
    TENBH: "WHAT I'VE DONE",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "9195",
    TENBH: "WHAT KIND OF FOOL",
    TACGIA: "Barbra Streisand & Barry Gibb",
  },
  {
    MABH: "24095",
    TENBH: "WHAT KIND OF MAN",
    TACGIA: "Florence + The Machine",
  },
  {
    MABH: "24565",
    TENBH: "WHAT LOVERS DO",
    TACGIA: "Maroon 5 ft. SZA",
  },
  {
    MABH: "24127",
    TENBH: "WHAT THE HELL",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "18015",
    TENBH: "WHAT TOOK YOU SO LONG",
    TACGIA: "Emma Bunton",
  },
  {
    MABH: "18274",
    TENBH: "WHAT YOU WAINTING FOR",
    TACGIA: "Gwen Stefani",
  },
  {
    MABH: "26144",
    TENBH: "WHAT YOU WON'T DO FOR LOVE",
    TACGIA: "Bobby Caldwell",
  },
  {
    MABH: "24802",
    TENBH: "WHATEVER IT TAKES",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "4800",
    TENBH: "WHAT'S GOING ON",
    TACGIA: "Marvin Gaye",
  },
  {
    MABH: "9280",
    TENBH: "WHAT'S LOVE GOT TO DO WITH IT",
    TACGIA: "Tina Turner",
  },
  {
    MABH: "24557",
    TENBH: "WHAT'S MY AGE AGAIN",
    TACGIA: "Blink 182",
  },
  {
    MABH: "18345",
    TENBH: "WHAT'S MY NAME",
    TACGIA: "Rihanna",
  },
  {
    MABH: "26244",
    TENBH: "MOOD",
    TACGIA: "24KGoldn, Iann Dior",
  },
  {
    MABH: "26235",
    TENBH: "SHE'S KINDA HOT",
    TACGIA: "5 Seconds of Summer",
  },
  {
    MABH: "26236",
    TENBH: "SPACE AGE LOVE SONG",
    TACGIA: "A Flock Of Seagulls",
  },
  {
    MABH: "26237",
    TENBH: "CIAO ADIOS",
    TACGIA: "Anne Marie",
  },
  {
    MABH: "26238",
    TENBH: "34+35",
    TACGIA: "Ariana Grande, Megan Thee Stallion, Doja Cat",
  },
  {
    MABH: "26239",
    TENBH: "AFTER MIDNIGHT",
    TACGIA: "Blink 182",
  },
  {
    MABH: "7040",
    TENBH: "UNA LACRIMA SUL VISO",
    TACGIA: "Bobby Solo",
  },
  {
    MABH: "26240",
    TENBH: "HOW LONG",
    TACGIA: "Charlie Puth",
  },
  {
    MABH: "26241",
    TENBH: "WE'RE GOOD",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26242",
    TENBH: "AMERICAN BOY",
    TACGIA: "Estelle ft. Kayne West",
  },
  {
    MABH: "26243",
    TENBH: "BAD TO THE BONE",
    TACGIA: "George Thorogood",
  },
  {
    MABH: "26245",
    TENBH: "SEE NO MORE",
    TACGIA: "Joe Jonas, Chris Brown",
  },
  {
    MABH: "26246",
    TENBH: "SOMEBODY TO LOVE",
    TACGIA: "Justin Bieber ft. Usher",
  },
  {
    MABH: "26247",
    TENBH: "WINGS",
    TACGIA: "Little Mix",
  },
  {
    MABH: "26248",
    TENBH: "CLASSIC",
    TACGIA: "MKTO",
  },
  {
    MABH: "26257",
    TENBH: "BROTHER LOUIE",
    TACGIA: "Modern Talking",
  },
  {
    MABH: "26249",
    TENBH: "MIDNIGHT MEMORIES",
    TACGIA: "One Direction",
  },
  {
    MABH: "26250",
    TENBH: "SECRETS",
    TACGIA: "One Republic",
  },
  {
    MABH: "26256",
    TENBH: "DISCO",
    TACGIA: "Ottawan",
  },
  {
    MABH: "26251",
    TENBH: "SLEDGEHAMMER",
    TACGIA: "Peter Gabriel",
  },
  {
    MABH: "7015",
    TENBH: "FORTISSIMO",
    TACGIA: "Rita Pavone",
  },
  {
    MABH: "26252",
    TENBH: "ON THE GROUND",
    TACGIA: "Rosé",
  },
  {
    MABH: "26255",
    TENBH: "DYNAMITE",
    TACGIA: "Taio Cruz",
  },
  {
    MABH: "26254",
    TENBH: "COUGH SYRUP",
    TACGIA: "Young The Giant",
  },
  {
    MABH: "26253",
    TENBH: "IF I CAN'T HAVE YOU",
    TACGIA: "Yvonne Elliman",
  },
  {
    MABH: "31053",
    TENBH: "MEU ANJO AZUL",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "31054",
    TENBH: "LÁBIOS DIVIDIDOS",
    TACGIA: "Banda Djavú",
  },
  {
    MABH: "31055",
    TENBH: "ÚLTIMO BEIJO",
    TACGIA: "Bruno & Marrone e Wesley Safadão",
  },
  {
    MABH: "31076",
    TENBH: "AMANHECER",
    TACGIA: "Calcinha Preta",
  },
  {
    MABH: "31075",
    TENBH: "CHICLETEIRO EU, CHICLETEIRA ELA",
    TACGIA: "Chiclete com Banana",
  },
  {
    MABH: "31056",
    TENBH: "OBRAS DE POETA",
    TACGIA: "Chitãozinho e Xororó",
  },
  {
    MABH: "31057",
    TENBH: "A MAÇÃ",
    TACGIA: "Deborah Blanco",
  },
  {
    MABH: "31058",
    TENBH: "DECLARAÇÃO PRO BAR",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "31060",
    TENBH: "DESPEDIDA DE CASAL",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "31059",
    TENBH: "ESPETINHO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31061",
    TENBH: "UM SINAL",
    TACGIA: "Ivete Sangalo ft. Melim",
  },
  {
    MABH: "31062",
    TENBH: "SEGUNDA TAÇA",
    TACGIA: "João Bosco e Vinícius part. Matheus",
  },
  {
    MABH: "31063",
    TENBH: "PARADIGMAS",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31064",
    TENBH: "TEM QUE SORRIR",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31065",
    TENBH: "É PROBLEMA",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "31066",
    TENBH: "A ROÇA OU A CIDADE",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "31067",
    TENBH: "ELA APERTA MINHA MENTE",
    TACGIA: "Os Barões da Pisadinha & Xand Avião",
  },
  {
    MABH: "31070",
    TENBH: "DIÁRIO DE UM DETENTO",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "31068",
    TENBH: "AMORECO",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "31069",
    TENBH: "ARTIGO 157",
    TACGIA: "Tays Reis, MC Biel",
  },
  {
    MABH: "31077",
    TENBH: "RECUERDOS DE AMOR",
    TACGIA: "Victor e Leo",
  },
  {
    MABH: "31071",
    TENBH: "NA CAMA QUE EU PAGUEI",
    TACGIA: "Wesley Safadão part. Zé Neto & Cristiano",
  },
  {
    MABH: "31072",
    TENBH: "LIBERA GERAL",
    TACGIA: "Xuxa",
  },
  {
    MABH: "31073",
    TENBH: "MEIA NOITE",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31074",
    TENBH: "CANGOTE",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31078",
    TENBH: "SEMPRE QUE TE VEJO",
    TACGIA: "4 Taste",
  },
  {
    MABH: "31079",
    TENBH: "AMARELO, AZUL E BRANCO",
    TACGIA: "AnaVitória, Rita Lee",
  },
  {
    MABH: "31080",
    TENBH: "ABRE ABRE",
    TACGIA: "Aviões do Forró",
  },
  {
    MABH: "31081",
    TENBH: "A FILHA DA VIZINHA",
    TACGIA: "Barreirinho",
  },
  {
    MABH: "6738",
    TENBH: "NOS BARES DA CIDADE",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "31082",
    TENBH: "SÓ FINGI",
    TACGIA: "DJ Ivis, Eric Land",
  },
  {
    MABH: "31083",
    TENBH: "SÓ NÃO DIVULGA",
    TACGIA: "Fernando & Sorocaba, Tarcísio do Acordeon",
  },
  {
    MABH: "31084",
    TENBH: "CORAÇÃO NA CAMA",
    TACGIA: "Hugo e Guilherme",
  },
  {
    MABH: "31086",
    TENBH: "SENTA COM AMOR",
    TACGIA: "Kevinho, Zé Felipe",
  },
  {
    MABH: "31087",
    TENBH: "DISCO ARRANHADO",
    TACGIA: "Malu, DJ Lucas Beat",
  },
  {
    MABH: "31088",
    TENBH: "O GOLPE TA AI",
    TACGIA: "Matheuzinho, Menor Nico",
  },
  {
    MABH: "31089",
    TENBH: "SEU BEBÊ TA BEBO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "3997",
    TENBH: "ELA DISSE ADEUS",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "31090",
    TENBH: "SEIO DE MINAS",
    TACGIA: "Paula Fernandes",
  },
  {
    MABH: "31091",
    TENBH: "FORMULA MAGICA DA PAZ",
    TACGIA: "Racionais MC's",
  },
  {
    MABH: "31092",
    TENBH: "TEM QUE SER AGORA",
    TACGIA: "Ricardo Ozcar, Tarcísio do Acordeon",
  },
  {
    MABH: "1375",
    TENBH: "ESCOLTA DE VAGALUMES",
    TACGIA: "Rick e Renner",
  },
  {
    MABH: "7364",
    TENBH: "FLORES ASTRAIS",
    TACGIA: "Secos e Molhados",
  },
  {
    MABH: "31093",
    TENBH: "HOJE DÓI",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "31094",
    TENBH: "M4",
    TACGIA: "Teto ft. Matuê",
  },
  {
    MABH: "31095",
    TENBH: "A GENTE PIMBA",
    TACGIA: "Trio Parada Dura",
  },
  {
    MABH: "31096",
    TENBH: "SÓ TEM EU",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "31097",
    TENBH: "CONFIDENCIAL",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31098",
    TENBH: "VOLTA COMIGO BB",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "9328",
    TENBH: "RATATUIA",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "31099",
    TENBH: "NOVA YORK",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "31100",
    TENBH: "CHEIRO DE SHAMPOO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "26258",
    TENBH: "DAKITI",
    TACGIA: "Bad Bunny & Jhay Cortez",
  },
  {
    MABH: "26259",
    TENBH: "DYNAMITE",
    TACGIA: "BTS",
  },
  {
    MABH: "26260",
    TENBH: "UP",
    TACGIA: "Cardi B",
  },
  {
    MABH: "26261",
    TENBH: "RUNAWAY",
    TACGIA: "Cher",
  },
  {
    MABH: "26262",
    TENBH: "ALL OR NOTHING",
    TACGIA: "Cher",
  },
  {
    MABH: "26263",
    TENBH: "MR. MEDICINE",
    TACGIA: "Eliza Doolittle",
  },
  {
    MABH: "26264",
    TENBH: "STEREO HEARTS",
    TACGIA: "Gym Class Heroes & Adam Levine",
  },
  {
    MABH: "5876",
    TENBH: "BOP TO THE TOP",
    TACGIA: "High School Musical",
  },
  {
    MABH: "5886",
    TENBH: "COME CLEAN",
    TACGIA: "Hillary Duff",
  },
  {
    MABH: "26266",
    TENBH: "PANINI",
    TACGIA: "Lil Nas X",
  },
  {
    MABH: "26267",
    TENBH: "LET YOUR HAIR DOWN",
    TACGIA: "Magic!",
  },
  {
    MABH: "26268",
    TENBH: "RUN UP",
    TACGIA: "Major Lazer ft. PARTYNEXTDOOR, Nicki Minaj",
  },
  {
    MABH: "26269",
    TENBH: "MISERY",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "26270",
    TENBH: "SUMMERTIME",
    TACGIA: "New Kids On The Block",
  },
  {
    MABH: "19994",
    TENBH: "NO MORE TEARS",
    TACGIA: "Ozzy Osbourne",
  },
  {
    MABH: "26271",
    TENBH: "VICTORIOUS",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26272",
    TENBH: "COLD HEARTED",
    TACGIA: "Paula Abdul",
  },
  {
    MABH: "26273",
    TENBH: "ME AND MY BROKEN HEART",
    TACGIA: "Rixton",
  },
  {
    MABH: "26274",
    TENBH: "RUNNING SCARED",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "26275",
    TENBH: "I'M STILL IN LOVE WITH YOU",
    TACGIA: "Sean Paul",
  },
  {
    MABH: "19837",
    TENBH: "THERE'S NOTHING HOLDIN' ME BACK",
    TACGIA: "Shawn Mendes",
  },
  {
    MABH: "19366",
    TENBH: "ADRIENNE",
    TACGIA: "The Calling",
  },
  {
    MABH: "20275",
    TENBH: "SAVE YOUR TEARS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "26276",
    TENBH: "SHIP OF FOOLS",
    TACGIA: "World Party",
  },
  {
    MABH: "4458",
    TENBH: "SÓ FALTAVA VOCÊ",
    TACGIA: "Adryana e a Rapaziada",
  },
  {
    MABH: "31101",
    TENBH: "GIRL FROM RIO",
    TACGIA: "Anitta",
  },
  {
    MABH: "31102",
    TENBH: "NA HORA H",
    TACGIA: "Bonde do Forró",
  },
  {
    MABH: "9597",
    TENBH: "ALGUM DIA",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "31103",
    TENBH: "8 SEGUNDOS",
    TACGIA: "Chrystian & Ralf",
  },
  {
    MABH: "31104",
    TENBH: "DEIXA DE ONDA",
    TACGIA: "Dennis, Ludmilla e Xamã",
  },
  {
    MABH: "31105",
    TENBH: "BRASIL",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "31106",
    TENBH: "DEIXA EU SER O TEU AMOR",
    TACGIA: "Dj Ivis ft. Nattan",
  },
  {
    MABH: "31107",
    TENBH: "CABECINHA NO OMBRO",
    TACGIA: "Fagner",
  },
  {
    MABH: "31108",
    TENBH: "QUEM MANDOU LARGAR DE MIM",
    TACGIA: "Grupo Tradição",
  },
  {
    MABH: "4383",
    TENBH: "AGACHADINHO",
    TACGIA: "Harmonia do Samba",
  },
  {
    MABH: "31109",
    TENBH: "TROCA",
    TACGIA: "Jorge & Mateus",
  },
  {
    MABH: "31110",
    TENBH: "TIPO GIN",
    TACGIA: "Kevin o Chris",
  },
  {
    MABH: "31111",
    TENBH: "BOLA CHEIA",
    TACGIA: "Kleiton e Adriano",
  },
  {
    MABH: "31112",
    TENBH: "ROSA EMBRIAGADA",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "31113",
    TENBH: "CHÃO DE GIZ",
    TACGIA: "Zé Ramalho",
  },
  {
    MABH: "31114",
    TENBH: "A ALMA ABATIDA",
    TACGIA: "Nani Azevedo",
  },
  {
    MABH: "31115",
    TENBH: "AMANHÃ OU DEPOIS",
    TACGIA: "Nenhum de Nós",
  },
  {
    MABH: "31116",
    TENBH: "AMA SOFRE CHORA",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "17022",
    TENBH: "BANDIDA",
    TACGIA: "Pabllo Vittar, POCAH",
  },
  {
    MABH: "31117",
    TENBH: "BESTINHA",
    TACGIA: "Raimundos",
  },
  {
    MABH: "1593",
    TENBH: "LEVO COMIGO",
    TACGIA: "Restart",
  },
  {
    MABH: "31118",
    TENBH: "É MELHOR DIZER ADEUS",
    TACGIA: "Tony Carreira",
  },
  {
    MABH: "31119",
    TENBH: "TRANQUILITA",
    TACGIA: "Zé Felipe, Virginia",
  },
  {
    MABH: "31120",
    TENBH: "CADÊ O AMOR",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "26277",
    TENBH: "BE LIKE THAT",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "26278",
    TENBH: "POV",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "26279",
    TENBH: "TWENTY FOUR HOURS",
    TACGIA: "Athlete",
  },
  {
    MABH: "26280",
    TENBH: "THE BOY IS MINE",
    TACGIA: "Brandy e Monica",
  },
  {
    MABH: "26281",
    TENBH: "NO PROMISES",
    TACGIA: "Cheat Codes",
  },
  {
    MABH: "26282",
    TENBH: "COLD",
    TACGIA: "Crossfade",
  },
  {
    MABH: "19723",
    TENBH: "CAKE BY THE OCEAN",
    TACGIA: "DNCE",
  },
  {
    MABH: "26283",
    TENBH: "KISS ME MORE",
    TACGIA: "Doja Cat ft. SZA",
  },
  {
    MABH: "26284",
    TENBH: "CRYING IN THE RAIN",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "26285",
    TENBH: "LITTLE LIES",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "26286",
    TENBH: "GIVE ME NOVECAINE",
    TACGIA: "Green Day",
  },
  {
    MABH: "26287",
    TENBH: "ALL I WANNA DO IS MAKE LOVE TO YOU",
    TACGIA: "Heart",
  },
  {
    MABH: "26288",
    TENBH: "GET UGLY",
    TACGIA: "Jason Derulo",
  },
  {
    MABH: "20185",
    TENBH: "SAVAGE LOVE",
    TACGIA: "Jason Derulo",
  },
  {
    MABH: "26289",
    TENBH: "OPEN ARMS",
    TACGIA: "Journey",
  },
  {
    MABH: "26290",
    TENBH: "MONTERO (CALL ME BY YOUR NAME)",
    TACGIA: "Lil Nas X",
  },
  {
    MABH: "26291",
    TENBH: "HOW TO BE A HEARTBREAKER",
    TACGIA: "Marina and the Diamonds",
  },
  {
    MABH: "26292",
    TENBH: "DEJA VU",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26293",
    TENBH: "DANCE WITH ME TONIGHT",
    TACGIA: "Olly Murs",
  },
  {
    MABH: "26294",
    TENBH: "HELIUM",
    TACGIA: "Sia",
  },
  {
    MABH: "26295",
    TENBH: "MR. ROBOTO",
    TACGIA: "Styx",
  },
  {
    MABH: "26296",
    TENBH: "UNDER THE SEA",
    TACGIA: "The Little Mermaid",
  },
  {
    MABH: "26297",
    TENBH: "U REMIND ME",
    TACGIA: "Usher",
  },
  {
    MABH: "26298",
    TENBH: "OCEAN AVENUE",
    TACGIA: "Yellowcard",
  },
  {
    MABH: "26299",
    TENBH: "STILL GOT TIME",
    TACGIA: "Zayn",
  },
  {
    MABH: "31121",
    TENBH: "LIBERDADE QUANDO O GRAVE BATE FORTE",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "9391",
    TENBH: "ANJO",
    TACGIA: "Banda Eva",
  },
  {
    MABH: "31122",
    TENBH: "CENA DE AMOR",
    TACGIA: "Brisa Star ft. Zé Vaqueiro",
  },
  {
    MABH: "9386",
    TENBH: "AMOR DE BALADA",
    TACGIA: "Bruno & Marrone",
  },
  {
    MABH: "7905",
    TENBH: "AQUI",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "31123",
    TENBH: "VAI SENTAR NO PAI",
    TACGIA: "Dj Ivis, Xand Avião e JS Mão de Ouro",
  },
  {
    MABH: "9904",
    TENBH: "UMA MÚSICA",
    TACGIA: "Fresno",
  },
  {
    MABH: "17225",
    TENBH: "FICHA LIMPA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "17193",
    TENBH: "GUETO",
    TACGIA: "Iza",
  },
  {
    MABH: "17218",
    TENBH: "MORENA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31124",
    TENBH: "PENHASCO",
    TACGIA: "Luisa Sonza",
  },
  {
    MABH: "17117",
    TENBH: "POSSESSIVA",
    TACGIA: "Melim",
  },
  {
    MABH: "31125",
    TENBH: "UM DIA DE VOCÊ E EU",
    TACGIA: "Montenegro ft. Jorge",
  },
  {
    MABH: "31126",
    TENBH: "NÃO TE QUERO",
    TACGIA: "Nattan ft. Zé Vaqueiro",
  },
  {
    MABH: "31127",
    TENBH: "CADÊ VOCÊ",
    TACGIA: "Odair José",
  },
  {
    MABH: "31128",
    TENBH: "TIPO IFOOD",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "31129",
    TENBH: "INDESTRUTÍVEL",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "31135",
    TENBH: "VAI",
    TACGIA: "Paulo Ricardo",
  },
  {
    MABH: "16449",
    TENBH: "EU QUERO VER O OCO",
    TACGIA: "Raimundos",
  },
  {
    MABH: "1510",
    TENBH: "RECOMEÇAR",
    TACGIA: "Restart",
  },
  {
    MABH: "31130",
    TENBH: "ERVA VENENOSA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "31131",
    TENBH: "CHIFRE EM PÓ",
    TACGIA: "Tierry",
  },
  {
    MABH: "31132",
    TENBH: "VOU FALAR QUE NÃO QUERO",
    TACGIA: "Vitor Fernandes",
  },
  {
    MABH: "31133",
    TENBH: "GALEGA",
    TACGIA: "Zé Felipe, DJ Ivis",
  },
  {
    MABH: "31134",
    TENBH: "MEU MEL",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "26300",
    TENBH: "HAPPY",
    TACGIA: "Ashanti",
  },
  {
    MABH: "26301",
    TENBH: "HOME",
    TACGIA: "Beauty and the Beast",
  },
  {
    MABH: "26302",
    TENBH: "BUTTER",
    TACGIA: "BTS",
  },
  {
    MABH: "19706",
    TENBH: "ONE LAST BREATH",
    TACGIA: "Creed",
  },
  {
    MABH: "26303",
    TENBH: "YOU RIGHT",
    TACGIA: "Doja Cat, The Weeknd",
  },
  {
    MABH: "20357",
    TENBH: "LOVE AGAIN",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26304",
    TENBH: "SOUTH OF THE BORDER",
    TACGIA: "Ed Sheeran ft. Camila Cabello & Cardi B",
  },
  {
    MABH: "26305",
    TENBH: "SLOW RIDE",
    TACGIA: "Foghat",
  },
  {
    MABH: "26306",
    TENBH: "NIGHTRAIN",
    TACGIA: "Guns n' Roses",
  },
  {
    MABH: "26307",
    TENBH: "I AIN'T GOING PEACEFULLY",
    TACGIA: "Hank Williams Jr.",
  },
  {
    MABH: "26308",
    TENBH: "AMSTERDAM",
    TACGIA: "Imagine Dragons",
  },
  {
    MABH: "26309",
    TENBH: "I'LL BE THERE",
    TACGIA: "Jackson 5",
  },
  {
    MABH: "26310",
    TENBH: "KARMA",
    TACGIA: "Joss Stone",
  },
  {
    MABH: "26311",
    TENBH: "ISSUES",
    TACGIA: "Julia Michaels",
  },
  {
    MABH: "26312",
    TENBH: "TAKE ME IN YOUR ARMS",
    TACGIA: "Lil Suzy",
  },
  {
    MABH: "26313",
    TENBH: "IF I NEVER SEE YOUR FACE AGAIN",
    TACGIA: "Maroon 5, Rihanna",
  },
  {
    MABH: "26314",
    TENBH: "HABIBI",
    TACGIA: "Now United",
  },
  {
    MABH: "26315",
    TENBH: "GOOD 4 U",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26316",
    TENBH: "BUT IT'S BETTER IF YOU DO",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26317",
    TENBH: "WHERE IS MY MIND",
    TACGIA: "Pixies",
  },
  {
    MABH: "26322",
    TENBH: "FALLING",
    TACGIA: "Staind",
  },
  {
    MABH: "26318",
    TENBH: "ONE WAY TICKET TO HELL",
    TACGIA: "The Darkness",
  },
  {
    MABH: "26319",
    TENBH: "I WANNA TALK ABOUT ME",
    TACGIA: "Toby Keith",
  },
  {
    MABH: "26320",
    TENBH: "RISE UP",
    TACGIA: "Yves Le Rock",
  },
  {
    MABH: "26321",
    TENBH: "STAY",
    TACGIA: "Zedd & Alessia Cara",
  },
  {
    MABH: "31147",
    TENBH: "NOITE DE PAZ, NOITE FELIZ",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "31146",
    TENBH: "FREVO MULHER",
    TACGIA: "Amelinha",
  },
  {
    MABH: "31148",
    TENBH: "BANHO DE CHUVA",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "9582",
    TENBH: "A PREFERIDA DO BRASIL",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "31136",
    TENBH: "BURUNDANGA",
    TACGIA: "Célia Cruz",
  },
  {
    MABH: "31137",
    TENBH: "ACONTECEU COMIGO",
    TACGIA: "Delley e Dorivan",
  },
  {
    MABH: "17190",
    TENBH: "VOLTA BEBÊ, VOLTA NENÉM",
    TACGIA: "DJ Guuga, Dj Ivis",
  },
  {
    MABH: "31144",
    TENBH: "PROBLEMINHA",
    TACGIA: "DJ Ivis e Barões da Pisadinha",
  },
  {
    MABH: "6095",
    TENBH: "ENTRE O CÉU E O MAR",
    TACGIA: "Elba Ramalho",
  },
  {
    MABH: "17156",
    TENBH: "LINDA BELA",
    TACGIA: "Elias Monkbel, Caio Costta",
  },
  {
    MABH: "31145",
    TENBH: "CARPINTEIRO",
    TACGIA: "Elias Monkbel, Nattan",
  },
  {
    MABH: "31143",
    TENBH: "DEZ A DEZ",
    TACGIA: "Elimar Santos",
  },
  {
    MABH: "6032",
    TENBH: "TELE FOME",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "7354",
    TENBH: "EU DARIA MINHA VIDA",
    TACGIA: "Martinha",
  },
  {
    MABH: "3636",
    TENBH: "RUMOS DO CORAÇÃO",
    TACGIA: "Maurício Mattar",
  },
  {
    MABH: "31139",
    TENBH: "EU SEI CANTAR",
    TACGIA: "MC Sapão",
  },
  {
    MABH: "31140",
    TENBH: "NÃO DEMORA",
    TACGIA: "Melim",
  },
  {
    MABH: "31141",
    TENBH: "NA PONTA DO PÉ",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "3895",
    TENBH: "PRA TE TER AQUI",
    TACGIA: "Netinho",
  },
  {
    MABH: "1380",
    TENBH: "ESPERO A MINHA VEZ",
    TACGIA: "NX Zero",
  },
  {
    MABH: "17239",
    TENBH: "TRISTE COM T",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "7650",
    TENBH: "NOITES TRAIÇOEIRAS",
    TACGIA: "Padre Marcelo Rossi",
  },
  {
    MABH: "31142",
    TENBH: "AS QUATRO ESTAÇÕES",
    TACGIA: "Reginaldo Rossi",
  },
  {
    MABH: "16830",
    TENBH: "POEIRA",
    TACGIA: "Sérgio Reis",
  },
  {
    MABH: "31138",
    TENBH: "O CARA ERRADO",
    TACGIA: "Tayrone Cigano",
  },
  {
    MABH: "16001",
    TENBH: "NÃO ERA AMOR",
    TACGIA: "Giulia Be",
  },
  {
    MABH: "16002",
    TENBH: "INESQUECÍVEL",
    TACGIA: "Giulia Be",
  },
  {
    MABH: "16003",
    TENBH: "SE ESSA VIDA FOSSE UM FILME",
    TACGIA: "Giulia Be",
  },
  {
    MABH: "16004",
    TENBH: "EU ME AMO MAIS",
    TACGIA: "Giulia Be",
  },
  {
    MABH: "26345",
    TENBH: "MY HEAD & MY HEART",
    TACGIA: "Ava Max",
  },
  {
    MABH: "26323",
    TENBH: "BAD BLOOD",
    TACGIA: "Bastille",
  },
  {
    MABH: "19941",
    TENBH: "CHECK ON IT",
    TACGIA: "Beyoncé, Slim Thug",
  },
  {
    MABH: "26325",
    TENBH: "WE'LL BE COMING BACK",
    TACGIA: "Calvin Harris feat. Example",
  },
  {
    MABH: "26326",
    TENBH: "BILLS, BILLS, BILLS",
    TACGIA: "Destiny's Child",
  },
  {
    MABH: "26327",
    TENBH: "LIGHT GO DOWN",
    TACGIA: "Electric Light Orchestra",
  },
  {
    MABH: "19978",
    TENBH: "SHE DRIVES ME CRAZY",
    TACGIA: "Fine Young Cannibals",
  },
  {
    MABH: "26329",
    TENBH: "HEARTBREAK ANTHEM",
    TACGIA: "Galantis & David Guetta & Little Mix",
  },
  {
    MABH: "26330",
    TENBH: "NO ONE IS ALONE",
    TACGIA: "Into the Woods",
  },
  {
    MABH: "26331",
    TENBH: "TEARS AND RAIN",
    TACGIA: "James Blunt",
  },
  {
    MABH: "26332",
    TENBH: "THE MIDDLE",
    TACGIA: "Jimmy Eat World",
  },
  {
    MABH: "26333",
    TENBH: "HOLIDAY ROAD",
    TACGIA: "Lindsey Buckingham",
  },
  {
    MABH: "26334",
    TENBH: "NO MORE SAD SONGS",
    TACGIA: "Little Mix",
  },
  {
    MABH: "26335",
    TENBH: "BEAUTIFUL MISTAKES",
    TACGIA: "Maroon 5 ft. Megan Thee Stallion",
  },
  {
    MABH: "26336",
    TENBH: "LEAVE ME BEFORE YOU LOVE ME",
    TACGIA: "Marshmello, Jonas Brothers",
  },
  {
    MABH: "26337",
    TENBH: "SUEHEAD",
    TACGIA: "Morrissey",
  },
  {
    MABH: "26338",
    TENBH: "HISTORY",
    TACGIA: "One Direction",
  },
  {
    MABH: "26339",
    TENBH: "BURN THE WITCH",
    TACGIA: "Queens Of The Stone Age",
  },
  {
    MABH: "26340",
    TENBH: "SUNRISE",
    TACGIA: "Simply Red",
  },
  {
    MABH: "26324",
    TENBH: "FALL APART",
    TACGIA: "Sugar Ray",
  },
  {
    MABH: "26328",
    TENBH: "ANYTHING",
    TACGIA: "The Calling",
  },
  {
    MABH: "26341",
    TENBH: "MAN OR MUPPET",
    TACGIA: "The Muppets Show",
  },
  {
    MABH: "26342",
    TENBH: "ORDINARY DAY",
    TACGIA: "Vanessa Carlton",
  },
  {
    MABH: "26343",
    TENBH: "WHAT THE WORLD NEEDS NOW",
    TACGIA: "Wynonna",
  },
  {
    MABH: "26344",
    TENBH: "LIGHTS AND SOUNDS",
    TACGIA: "Yellowcard",
  },
  {
    MABH: "31149",
    TENBH: "PROMETI",
    TACGIA: "Brisa Star",
  },
  {
    MABH: "7960",
    TENBH: "EU NUNCA DISSE ADEUS",
    TACGIA: "Capital Inicial",
  },
  {
    MABH: "31150",
    TENBH: "QUANDO VOCÊ VIER",
    TACGIA: "Cogumelo Plutão",
  },
  {
    MABH: "31151",
    TENBH: "ANTES QUE SEJA TARDE",
    TACGIA: "CPM22",
  },
  {
    MABH: "6116",
    TENBH: "SEUS BEIJOS",
    TACGIA: "Daniel",
  },
  {
    MABH: "7474",
    TENBH: "VENDAVAL",
    TACGIA: "Ed Motta",
  },
  {
    MABH: "16857",
    TENBH: "PERFEITINHA",
    TACGIA: "Enzo Rabelo",
  },
  {
    MABH: "17141",
    TENBH: "A TUA VOZ",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31152",
    TENBH: "MONSTROS",
    TACGIA: "Jão",
  },
  {
    MABH: "31153",
    TENBH: "SE FOR AMOR",
    TACGIA: "João Gomes",
  },
  {
    MABH: "16405",
    TENBH: "MAIS UMA VEZ",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "31154",
    TENBH: "BENÇA",
    TACGIA: "Juliette",
  },
  {
    MABH: "1937",
    TENBH: "PLANOS IMPOSSÍVEIS",
    TACGIA: "Manu Gavassi",
  },
  {
    MABH: "31155",
    TENBH: "MINHAS COISAS",
    TACGIA: "Odair José",
  },
  {
    MABH: "31156",
    TENBH: "BEIJO DO VAMPIRO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "31157",
    TENBH: "BANG BANG",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "16873",
    TENBH: "ATÉ QUE DUROU",
    TACGIA: "Péricles",
  },
  {
    MABH: "2835",
    TENBH: "MEMÓRIAS",
    TACGIA: "Pitty",
  },
  {
    MABH: "31158",
    TENBH: "SOPRA O VENTO",
    TACGIA: "Ritchie",
  },
  {
    MABH: "6440",
    TENBH: "VIDA REAL",
    TACGIA: "RPM",
  },
  {
    MABH: "6652",
    TENBH: "ENCANTO",
    TACGIA: "Sandy e Júnior",
  },
  {
    MABH: "31159",
    TENBH: "LITRÃO",
    TACGIA: "Tierry",
  },
  {
    MABH: "15866",
    TENBH: "RENATA",
    TACGIA: "Tihuana",
  },
  {
    MABH: "31160",
    TENBH: "VOCÊ BEBERIA OU NÃO BEBERIA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "31161",
    TENBH: "SUPERAÇÃO DIGITAL",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "19559",
    TENBH: "WHEN YOU'RE GONE",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "20242",
    TENBH: "BLACKBIRD",
    TACGIA: "Beatles (The)",
  },
  {
    MABH: "26346",
    TENBH: "FEELING THIS",
    TACGIA: "Blink 182",
  },
  {
    MABH: "26347",
    TENBH: "HAVE MERCY",
    TACGIA: "Chloe",
  },
  {
    MABH: "26348",
    TENBH: "NOTHING GONNA HURT YOU BABY",
    TACGIA: "Cigarettes After Sex",
  },
  {
    MABH: "26349",
    TENBH: "PIECES",
    TACGIA: "Dark New Day",
  },
  {
    MABH: "26351",
    TENBH: "HOME",
    TACGIA: "Daughtry",
  },
  {
    MABH: "26350",
    TENBH: "IT'S NOT OVER",
    TACGIA: "Daughtry",
  },
  {
    MABH: "19478",
    TENBH: "THE ONE",
    TACGIA: "Elton John",
  },
  {
    MABH: "26352",
    TENBH: "BYE BYE LOVE",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "26353",
    TENBH: "HERO",
    TACGIA: "Faouzia",
  },
  {
    MABH: "20037",
    TENBH: "TIMES LIKE THESE",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "26354",
    TENBH: "NICE GUYS FINISH LAST",
    TACGIA: "Green Day",
  },
  {
    MABH: "26355",
    TENBH: "BABY IT'S COLD OUTSIDE",
    TACGIA: "Idina Menzel",
  },
  {
    MABH: "26356",
    TENBH: "SEPARATE WAYS",
    TACGIA: "Journey",
  },
  {
    MABH: "26357",
    TENBH: "NOT LIKE THE MOVIES",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "26358",
    TENBH: "ANYTIME YOU NEED A FRIEND",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "19521",
    TENBH: "ANIMALS",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "19037",
    TENBH: "NINE IN THE AFTERNOON",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26359",
    TENBH: "DREAM BABY",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "26360",
    TENBH: "WHY DON'T YOU AND I",
    TACGIA: "Santana & Alex Band",
  },
  {
    MABH: "26361",
    TENBH: "STILL WAITING",
    TACGIA: "Sum 41",
  },
  {
    MABH: "26362",
    TENBH: "THE HELL SONG",
    TACGIA: "Sum 41",
  },
  {
    MABH: "26363",
    TENBH: "OUR LIVES",
    TACGIA: "The Calling",
  },
  {
    MABH: "26364",
    TENBH: "STAY",
    TACGIA: "The Kid LAROI, Justin Bieber",
  },
  {
    MABH: "31162",
    TENBH: "FAKING LOVE",
    TACGIA: "Anitta ft. Saweettie",
  },
  {
    MABH: "31163",
    TENBH: "8 SEGUNDOS",
    TACGIA: "Atitude 67",
  },
  {
    MABH: "31164",
    TENBH: "CORAÇÃO CACHORRO (LATE CORAÇÃO)",
    TACGIA: "Ávine e Matheus Fernandes",
  },
  {
    MABH: "31165",
    TENBH: "EU QUERO SOL NESSE JARDIM",
    TACGIA: "Catedral",
  },
  {
    MABH: "31166",
    TENBH: "MANDA ÁUDIO",
    TACGIA: "Di Propósito",
  },
  {
    MABH: "31167",
    TENBH: "DESBLOQUEADO",
    TACGIA: "Diego e Victor Hugo",
  },
  {
    MABH: "31168",
    TENBH: "NÃO VAI EMBORA",
    TACGIA: "Dilsinho & Luíza Sonza",
  },
  {
    MABH: "31169",
    TENBH: "PUTARIAZINHA",
    TACGIA: "Felipe Amorim",
  },
  {
    MABH: "31170",
    TENBH: "ATÉ QUE ENFIM",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "31171",
    TENBH: "LEILÃO",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31172",
    TENBH: "A QUEDA",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31173",
    TENBH: "NOTA DE REPÚDIO",
    TACGIA: "Gustavo Lima",
  },
  {
    MABH: "31174",
    TENBH: "QUEBRANDO PROTOCOLO",
    TACGIA: "Gusttavo Lima ft. Dendelzinho",
  },
  {
    MABH: "31175",
    TENBH: "ARRANHÃO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "31176",
    TENBH: "DAR UMA NAMORADA",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "31177",
    TENBH: "MEU BEM",
    TACGIA: "João Gomez",
  },
  {
    MABH: "31178",
    TENBH: "DIFERENÇA MARA",
    TACGIA: "Juliette",
  },
  {
    MABH: "31179",
    TENBH: "A BOBA FUI EU",
    TACGIA: "Ludmilla, Jão",
  },
  {
    MABH: "31180",
    TENBH: "MELHOR SOZINHA",
    TACGIA: "Luísa Sonza, Marília Mendonça",
  },
  {
    MABH: "31181",
    TENBH: "TODO MUNDO MENOS VOCÊ",
    TACGIA: "Marília Mendonça, Maiara e Maraísa",
  },
  {
    MABH: "31182",
    TENBH: "FÃ-CLUBE",
    TACGIA: "Marília Mendonça, Maiara e Maraísa",
  },
  {
    MABH: "31183",
    TENBH: "BIPOLAR",
    TACGIA: "MC Don Juan, MC Davi e MC Pedrinho",
  },
  {
    MABH: "31184",
    TENBH: "DESEJANDO EU",
    TACGIA: "Murilo Huff",
  },
  {
    MABH: "31185",
    TENBH: "DOIS ENGANADOS",
    TACGIA: "Murilo Huff ft. Marília Mendonça",
  },
  {
    MABH: "31186",
    TENBH: "AMEAÇA",
    TACGIA: "Paulo Pires & Mc Danny & Marcinho Sensação",
  },
  {
    MABH: "31187",
    TENBH: "GALOPA",
    TACGIA: "Pedro Sampaio",
  },
  {
    MABH: "31188",
    TENBH: "MELHOR EU IR",
    TACGIA: "Péricles",
  },
  {
    MABH: "31189",
    TENBH: "VAI ERRAR DE NOVO",
    TACGIA: "Pixote",
  },
  {
    MABH: "31190",
    TENBH: "ALVEJANTE",
    TACGIA: "Priscilla Senna, Zé Vaqueiro",
  },
  {
    MABH: "31191",
    TENBH: "CABEÇA BRANCA",
    TACGIA: "Tierry",
  },
  {
    MABH: "31192",
    TENBH: "TOMA TOMA VAPO VAPO",
    TACGIA: "Zé Felipe, MC Danny",
  },
  {
    MABH: "31193",
    TENBH: "ELA E ELA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "26382",
    TENBH: "RUMOUR HAS IT",
    TACGIA: "Adele",
  },
  {
    MABH: "26365",
    TENBH: "NEW YORK STATE OF MIND",
    TACGIA: "Billy Joe",
  },
  {
    MABH: "26366",
    TENBH: "DO IT",
    TACGIA: "Chloe x Halle",
  },
  {
    MABH: "26367",
    TENBH: "OVER YOU",
    TACGIA: "Daughtry",
  },
  {
    MABH: "26368",
    TENBH: "SG",
    TACGIA: "DJ Snake, Ozuna, Megan Thee Stallion, LISA of BLACKPINK",
  },
  {
    MABH: "26369",
    TENBH: "SHIVERS",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "26370",
    TENBH: "ELECTRIC AVENUE",
    TACGIA: "Eddy Grant",
  },
  {
    MABH: "26371",
    TENBH: "CLUMSY",
    TACGIA: "Fergie",
  },
  {
    MABH: "26372",
    TENBH: "RAINBOW",
    TACGIA: "Jessie J",
  },
  {
    MABH: "26373",
    TENBH: "LOOK WHAT YOU'VE DONE",
    TACGIA: "Jet",
  },
  {
    MABH: "26374",
    TENBH: "FUNICULÍ, FUNICULÁ",
    TACGIA: "Luigi Denza",
  },
  {
    MABH: "26379",
    TENBH: "HEART OF GOLD",
    TACGIA: "Neil Young",
  },
  {
    MABH: "26375",
    TENBH: "WILD SIDE",
    TACGIA: "Normani ft. Cardi B",
  },
  {
    MABH: "26376",
    TENBH: "FUTURE ME",
    TACGIA: "Now United",
  },
  {
    MABH: "26380",
    TENBH: "LLUVIA DE PLATA",
    TACGIA: "Pedro Fernandez",
  },
  {
    MABH: "26381",
    TENBH: "WHEN I GET YOU ALONE",
    TACGIA: "Robin Tickhe",
  },
  {
    MABH: "26377",
    TENBH: "PIECES",
    TACGIA: "Sum 41",
  },
  {
    MABH: "26378",
    TENBH: "WALK ON",
    TACGIA: "U2",
  },
  {
    MABH: "9201",
    TENBH: "ABRACADABRA ",
    TACGIA: "Steve Miller Band ",
  },
  {
    MABH: "2812",
    TENBH: "N",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "2839",
    TENBH: "O DIA QUE NÃO TERMINOU",
    TACGIA: "Detonautas",
  },
  {
    MABH: "4102",
    TENBH: "BEM MAIOR",
    TACGIA: "Roupa Nova",
  },
  {
    MABH: "4195",
    TENBH: "GIZ",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "4412",
    TENBH: "TE ENCONTRAR DE NOVO",
    TACGIA: "Vinny",
  },
  {
    MABH: "6530",
    TENBH: "CUIDE BEM DO SEU AMOR",
    TACGIA: "Paralamas do Sucesso",
  },
  {
    MABH: "6711",
    TENBH: "PROVAS DE AMOR",
    TACGIA: "Titãs",
  },
  {
    MABH: "6763",
    TENBH: "AMORES IMPERFEITOS",
    TACGIA: "Skank",
  },
  {
    MABH: "9183",
    TENBH: "POWER OF LOVE",
    TACGIA: "Huey Lewis & The News",
  },
  {
    MABH: "26383",
    TENBH: "EASY ON ME",
    TACGIA: "Adele",
  },
  {
    MABH: "26384",
    TENBH: "BAD HABITS",
    TACGIA: "Ed Sheeran",
  },
  {
    MABH: "26385",
    TENBH: "WE DON'T TALK ABOUT BRUNO",
    TACGIA: "Encanto",
  },
  {
    MABH: "26386",
    TENBH: "abcdefu",
    TACGIA: "Gayle",
  },
  {
    MABH: "26387",
    TENBH: "SECRET",
    TACGIA: "Joshua Bassett",
  },
  {
    MABH: "26388",
    TENBH: "WAKE UP",
    TACGIA: "Julie and the Phantoms",
  },
  {
    MABH: "26389",
    TENBH: "INDUSTRY BABY",
    TACGIA: "Lil Nas X ft. Jack Harlow",
  },
  {
    MABH: "26390",
    TENBH: "TRAITOR",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26391",
    TENBH: "SKINNY DIPPING",
    TACGIA: "Sabrina Carpenter",
  },
  {
    MABH: "26392",
    TENBH: "UNBREAKABLE",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "26393",
    TENBH: "GIRLS AND BOYS",
    TACGIA: "Blur",
  },
  {
    MABH: "26394",
    TENBH: "MOVE AWAY",
    TACGIA: "Culture Club",
  },
  {
    MABH: "26395",
    TENBH: "UNBROKEN",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "26396",
    TENBH: "WHAT'S LUV",
    TACGIA: "Fat Joe ft. Ashanti",
  },
  {
    MABH: "26397",
    TENBH: "MOVE YOUR FEET",
    TACGIA: "Junior Senior",
  },
  {
    MABH: "26398",
    TENBH: "FALL AGAIN",
    TACGIA: "Kenny G, Robin Thicke",
  },
  {
    MABH: "26399",
    TENBH: "SAD",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "26400",
    TENBH: "NOT TOO LATE",
    TACGIA: "Norah Jones",
  },
  {
    MABH: "26401",
    TENBH: "KISS YOU",
    TACGIA: "One Direction",
  },
  {
    MABH: "26402",
    TENBH: "NEW PERSPECTIVE",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26403",
    TENBH: "PUT YOUR HEAD ON MY SHOULDER",
    TACGIA: "Paul Anka",
  },
  {
    MABH: "26404",
    TENBH: "CANDY MAN",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "26405",
    TENBH: "I HATE EVERYTHING ABOUT YOU",
    TACGIA: "Three Days Grace",
  },
  {
    MABH: "26406",
    TENBH: "EVERYTHING SHE WANTS",
    TACGIA: "Wham!",
  },
  {
    MABH: "30247",
    TENBH: "ESQUEÇA-ME SE FOR CAPAZ",
    TACGIA: "Marília Mendonça, Maiara e Maraisa",
  },
  {
    MABH: "30502",
    TENBH: "PRESEPADA",
    TACGIA: "Marília Mendonça, Maiara e Maraisa",
  },
  {
    MABH: "30908",
    TENBH: "NO CHÃO NOVINHA",
    TACGIA: "Anitta, Pedro Sampaio",
  },
  {
    MABH: "31194",
    TENBH: "TÃO LINDA",
    TACGIA: "Atitude 67",
  },
  {
    MABH: "31195",
    TENBH: "RETRATOS DA ADOLESCÊNCIA",
    TACGIA: "Cogumelo Plutão",
  },
  {
    MABH: "31196",
    TENBH: "NÃO FALAMOS DO BRUNO",
    TACGIA: "Encanto",
  },
  {
    MABH: "31197",
    TENBH: "SOBRE",
    TACGIA: "Israel e Rodolffo, Juliette",
  },
  {
    MABH: "31198",
    TENBH: "OS MENINO DA PECUÁRIA",
    TACGIA: "Léo e Raphael",
  },
  {
    MABH: "31199",
    TENBH: "EU VOU DESCENDO SIM",
    TACGIA: "Marcynho Sensação, MC Henny, Bella Angel e Melody",
  },
  {
    MABH: "31200",
    TENBH: "PARADA LOUCA",
    TACGIA: "Mari Fernandez & Marcynho Sensação",
  },
  {
    MABH: "31201",
    TENBH: "BABY ME ATENDE",
    TACGIA: "Matheus Fernandes e Dilsinho",
  },
  {
    MABH: "31202",
    TENBH: "GLAMOUR TROPICAL",
    TACGIA: "Natiruts",
  },
  {
    MABH: "31203",
    TENBH: "EU E ELA",
    TACGIA: "Natiruts",
  },
  {
    MABH: "31204",
    TENBH: "PASSANDO O RODO",
    TACGIA: "Pocah, MC Mirella, Tainá Costa, Lara Silva",
  },
  {
    MABH: "31205",
    TENBH: "RETRATO CANTADO DE UM AMOR",
    TACGIA: "Reinaldo",
  },
  {
    MABH: "31206",
    TENBH: "ERA TU",
    TACGIA: "Tierry",
  },
  {
    MABH: "31207",
    TENBH: "REVOADA NO COLCHÃO",
    TACGIA: "Zé Felipe e Marcynho Sensação",
  },
  {
    MABH: "2739",
    TENBH: "PROBLEMAS",
    TACGIA: "Ana Carolina",
  },
  {
    MABH: "9394",
    TENBH: "AQUI NÃO",
    TACGIA: "Cesar Menotti e Fabiano",
  },
  {
    MABH: "31208",
    TENBH: "DEPENDE",
    TACGIA: "DJ Guuga & Zé Felipe & Wesley Safadão",
  },
  {
    MABH: "31209",
    TENBH: "EU TE AMO DEMAIS",
    TACGIA: "Guilherme e Santiago",
  },
  {
    MABH: "31210",
    TENBH: "CULPADOS",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "31211",
    TENBH: "MAL FEITO",
    TACGIA: "Hugo e Guilherme, Marília Mendoça",
  },
  {
    MABH: "31212",
    TENBH: "DA INIMIDADE PRA VER",
    TACGIA: "Israel e Rodolffo",
  },
  {
    MABH: "31213",
    TENBH: "IDIOTA",
    TACGIA: "Jão",
  },
  {
    MABH: "6107",
    TENBH: "O QUE EU TAMBÉM NÃO ENTENDO",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "31214",
    TENBH: "ESTOU NERVOSA",
    TACGIA: "Lara Suleiman",
  },
  {
    MABH: "31215",
    TENBH: "QUE MAIS VOU FAZER",
    TACGIA: "Larissa Cardoso",
  },
  {
    MABH: "1838",
    TENBH: "O MUNDO ANDA TÃO COMPLICADO",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "31216",
    TENBH: "AMAVA NADA",
    TACGIA: "Lucas Lucco ft. Marília Mendonça",
  },
  {
    MABH: "31226",
    TENBH: "DANCIN DAYS",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "9847",
    TENBH: "NÃO É PROIBIDO",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "7213",
    TENBH: "PODE SER",
    TACGIA: "Pedro Mariano",
  },
  {
    MABH: "31218",
    TENBH: "CHAMA MEU NOME",
    TACGIA: "Pedro Sampaio",
  },
  {
    MABH: "31219",
    TENBH: "VONTADE DE MORDER",
    TACGIA: "Simone & Simaria, Zé Felipe",
  },
  {
    MABH: "31220",
    TENBH: "ALGO PARECIDO",
    TACGIA: "Skank",
  },
  {
    MABH: "31221",
    TENBH: "MINHA INTUIÇÃO",
    TACGIA: "Taryn, AURORA",
  },
  {
    MABH: "31217",
    TENBH: "POR CAUSA DE VOCÊ",
    TACGIA: "The Fevers",
  },
  {
    MABH: "31222",
    TENBH: "O PULSO",
    TACGIA: "Titãs",
  },
  {
    MABH: "31223",
    TENBH: "ME SUPERA EM OFF",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "31224",
    TENBH: "MALVADÃO 3",
    TACGIA: "Xamã",
  },
  {
    MABH: "31225",
    TENBH: "MALVADA",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "26407",
    TENBH: "BETTER THAN I KNOW MYSELF",
    TACGIA: "Adam Lambert",
  },
  {
    MABH: "26408",
    TENBH: "JUST LOOK UP",
    TACGIA: "Ariana Grande & Kid Cudi",
  },
  {
    MABH: "26409",
    TENBH: "DIRTY DEEDS DONE WITH SHEEP",
    TACGIA: "Bob Rivers",
  },
  {
    MABH: "26410",
    TENBH: "LIGHT SWITCH",
    TACGIA: "Charlie Puth",
  },
  {
    MABH: "26411",
    TENBH: "WHAT ELSE CAN I DO?",
    TACGIA: "Diane Guerrero, Stephanie Beatriz",
  },
  {
    MABH: "26412",
    TENBH: "WOMAN",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26413",
    TENBH: "MENTIROSO",
    TACGIA: "Enrique Iglesias",
  },
  {
    MABH: "26414",
    TENBH: "HEAT WAVES",
    TACGIA: "Glass Animals",
  },
  {
    MABH: "26415",
    TENBH: "ENEMY",
    TACGIA: "Imagine Dragons x JID",
  },
  {
    MABH: "26416",
    TENBH: "SURFACE PRESSURE",
    TACGIA: "Jessica Darrow",
  },
  {
    MABH: "26417",
    TENBH: "NOTHIN' TO LOSE",
    TACGIA: "Josh Gracin",
  },
  {
    MABH: "26418",
    TENBH: "SELF CONTROL",
    TACGIA: "Laura Branigan",
  },
  {
    MABH: "26419",
    TENBH: "GET UR FREAK ON",
    TACGIA: "Missy Elliot",
  },
  {
    MABH: "26420",
    TENBH: "NEXT TO YOU",
    TACGIA: "Offspring",
  },
  {
    MABH: "26421",
    TENBH: "BROKEN HOME",
    TACGIA: "Papa Roach",
  },
  {
    MABH: "26422",
    TENBH: "THIS IS MY LIFE",
    TACGIA: "Phil Vassar",
  },
  {
    MABH: "26423",
    TENBH: "LEMON DROP",
    TACGIA: "Pistol Annies",
  },
  {
    MABH: "26424",
    TENBH: "HUSH HUSH, I WILL SURVIVE (REMIX)",
    TACGIA: "Pussycat Dolls",
  },
  {
    MABH: "26425",
    TENBH: "SLOWBURN",
    TACGIA: "Revelation Theory",
  },
  {
    MABH: "26426",
    TENBH: "ADDICTED",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "26427",
    TENBH: "THE FAMILY MADRIGAL",
    TACGIA: "Stephanie Beatriz, Olga Merediz",
  },
  {
    MABH: "26428",
    TENBH: "LOVE ME, LOVE ME",
    TACGIA: "Tammy Wynette",
  },
  {
    MABH: "9031",
    TENBH: "FORGIVEN NOT FORGOTTEN",
    TACGIA: "The Corrs",
  },
  {
    MABH: "26429",
    TENBH: "THE FEELS",
    TACGIA: "Twice",
  },
  {
    MABH: "26430",
    TENBH: "FOR GOOD",
    TACGIA: "Wicked",
  },
  {
    MABH: "31227",
    TENBH: "ENVOLVER",
    TACGIA: "Anitta",
  },
  {
    MABH: "9409",
    TENBH: "CARANGUEJO",
    TACGIA: "Babado Novo",
  },
  {
    MABH: "1193",
    TENBH: "AMOR NÃO VAI FALTAR",
    TACGIA: "Bruno e Marrone",
  },
  {
    MABH: "3761",
    TENBH: "O MAR SERENOU",
    TACGIA: "Clara Nunes",
  },
  {
    MABH: "31228",
    TENBH: "UM MUNDO IDEAL",
    TACGIA: "Daniel Garcia, Lara Suleiman",
  },
  {
    MABH: "31229",
    TENBH: "CLOSE",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "31230",
    TENBH: "SE TA SOLTEIRA",
    TACGIA: "FBC, VHOOR,  Mac Júlia",
  },
  {
    MABH: "31231",
    TENBH: "HINO DA VITÓRIA",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "31232",
    TENBH: "VERMELHO",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31233",
    TENBH: "BLOQUEADO",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31234",
    TENBH: "MEUS MEDOS",
    TACGIA: "Joelma",
  },
  {
    MABH: "31236",
    TENBH: "ABALO EMOCIONAL",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31237",
    TENBH: "MALDIVAS",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "31238",
    TENBH: "SOCADONA",
    TACGIA: "Ludmilla, Mariah Angeliq, Topo La Maskara, Mr Vegas",
  },
  {
    MABH: "31239",
    TENBH: "FUGITIVOS",
    TACGIA: "Luísa Sonza, Jão",
  },
  {
    MABH: "31248",
    TENBH: "CAFÉ DA MANHÃ",
    TACGIA: "Luisa Sonza, Ludmilla",
  },
  {
    MABH: "31235",
    TENBH: "CASA REVIRADA",
    TACGIA: "Matheus e Kauan, Arthur Aguiar",
  },
  {
    MABH: "31240",
    TENBH: "A CARA DO CRIME",
    TACGIA: "MC Poze do Rodo, Bielzin, PL Quest, MC Cabelinho",
  },
  {
    MABH: "31241",
    TENBH: "APÊ",
    TACGIA: "Melim",
  },
  {
    MABH: "31242",
    TENBH: "CONFUSÃO",
    TACGIA: "Melim",
  },
  {
    MABH: "31243",
    TENBH: "FAKE AMOR",
    TACGIA: "Melody",
  },
  {
    MABH: "31244",
    TENBH: "50%",
    TACGIA: "Naiara Azevedo, Marília Mendonça",
  },
  {
    MABH: "31245",
    TENBH: "DANÇARINA",
    TACGIA: "Pedro Sampaio, MC Pedrinho",
  },
  {
    MABH: "31246",
    TENBH: "A PATINHA DA VOVÓ",
    TACGIA: "Trem  da Alegria",
  },
  {
    MABH: "31247",
    TENBH: "PLUTÃO",
    TACGIA: "VMZ",
  },
  {
    MABH: "26431",
    TENBH: "COMO QUIEN PIERDE UNA ESTRELLA",
    TACGIA: "Alejandro Fernandez",
  },
  {
    MABH: "26432",
    TENBH: "TOMORROW",
    TACGIA: "Avril Lavigne",
  },
  {
    MABH: "26433",
    TENBH: "BEST THING I HAD GOIN'",
    TACGIA: "Brad Paisley",
  },
  {
    MABH: "26434",
    TENBH: "BAM BAM",
    TACGIA: "Camila Cabello ft. Ed Sheeran",
  },
  {
    MABH: "26435",
    TENBH: "THE BOY NEXT DOOR",
    TACGIA: "Chris Colfer",
  },
  {
    MABH: "26436",
    TENBH: "ANILLO DE COMPROMISSO",
    TACGIA: "Cuco Sanchez",
  },
  {
    MABH: "26437",
    TENBH: "FIGHTER",
    TACGIA: "Darren Criss",
  },
  {
    MABH: "26438",
    TENBH: "I'M NOT SCARED",
    TACGIA: "Eighth Wonder",
  },
  {
    MABH: "26439",
    TENBH: "CALLING AMERICA",
    TACGIA: "Electric Light Orchestra",
  },
  {
    MABH: "26440",
    TENBH: "COLD HEART (PNAU REMIX)",
    TACGIA: "Elton John, Dua Lipa",
  },
  {
    MABH: "26441",
    TENBH: "ALONE WITH YOU",
    TACGIA: "Jake Owen",
  },
  {
    MABH: "26442",
    TENBH: "WHATCHA SAY",
    TACGIA: "Jason Derulo",
  },
  {
    MABH: "26443",
    TENBH: "GHOST",
    TACGIA: "Justin Bieber",
  },
  {
    MABH: "26444",
    TENBH: "THAT'S WHAT I WANT",
    TACGIA: "Lil Nas X",
  },
  {
    MABH: "26445",
    TENBH: "SWEETEST PIE",
    TACGIA: "Megan Thee Stallion, Dua Lipa",
  },
  {
    MABH: "26446",
    TENBH: "GOD WITH US",
    TACGIA: "MercyMe",
  },
  {
    MABH: "26447",
    TENBH: "JEALOUSY",
    TACGIA: "Natalie Merchant",
  },
  {
    MABH: "26448",
    TENBH: "THEY CAN'T TAKE THAT AWAY FROM ME",
    TACGIA: "Rod Stewart",
  },
  {
    MABH: "26449",
    TENBH: "IT'S OVER",
    TACGIA: "Roy Orbison",
  },
  {
    MABH: "26450",
    TENBH: "FAST TIMES",
    TACGIA: "Sabrina Carpenter",
  },
  {
    MABH: "26451",
    TENBH: "WE BUILT THIS CITY",
    TACGIA: "Starship",
  },
  {
    MABH: "26452",
    TENBH: "SACRIFICE",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "26453",
    TENBH: "LIVING ON VIDEO",
    TACGIA: "Trans X",
  },
  {
    MABH: "26454",
    TENBH: "LEAVE IT",
    TACGIA: "Yes",
  },
  {
    MABH: "26455",
    TENBH: "SHARP DRESSED MAN",
    TACGIA: "ZZ Top",
  },
  {
    MABH: "7697",
    TENBH: "SEM TEU AMOR NADA É IGUAL",
    TACGIA: "Alexandre Pires",
  },
  {
    MABH: "31249",
    TENBH: "ME BEIJA AGORA",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "31250",
    TENBH: "ROMANTIZOU",
    TACGIA: "Barões da Pisadinha, MC Danny",
  },
  {
    MABH: "31251",
    TENBH: "SATURNO",
    TACGIA: "BIN",
  },
  {
    MABH: "9358",
    TENBH: "VEM ME AMAR",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "31252",
    TENBH: "VOCÊ NÃO VAI ME ENCONTRAR",
    TACGIA: "Daniel",
  },
  {
    MABH: "31253",
    TENBH: "CARONA DO AMOR",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "31254",
    TENBH: "NO OUVIDINHO",
    TACGIA: "Felipe Amorim",
  },
  {
    MABH: "31255",
    TENBH: "SAFADEZINHA",
    TACGIA: "Felipe Amorim e Zé Felipe",
  },
  {
    MABH: "31256",
    TENBH: "MIL GRAU",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31257",
    TENBH: "TERMINA COMIGO ANTES",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31258",
    TENBH: "A MAIOR SAUDADE",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "7983",
    TENBH: "JÁ FOI",
    TACGIA: "Jota Quest",
  },
  {
    MABH: "31259",
    TENBH: "ÁUDIO QUE TE ENTREGA",
    TACGIA: "Léo Santana, MC Don Juan, Mari Fernandez",
  },
  {
    MABH: "31260",
    TENBH: "BRUTA",
    TACGIA: "Lexa",
  },
  {
    MABH: "31261",
    TENBH: "sentaDONA (remix)",
    TACGIA: "Luísa Sonza, Davi Kneip, Mc Frog, Dj Gabriel do Borel",
  },
  {
    MABH: "31262",
    TENBH: "ABANDONO DE INCAPAZ",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "31263",
    TENBH: "POR SUPUESTO",
    TACGIA: "Marina Sena",
  },
  {
    MABH: "31264",
    TENBH: "GATILHO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "31265",
    TENBH: "VAMPiro",
    TACGIA: "Matuê, Teto & WIU",
  },
  {
    MABH: "31266",
    TENBH: "VAI LUAN",
    TACGIA: "MC Moana",
  },
  {
    MABH: "31267",
    TENBH: "VAI MALVADIN",
    TACGIA: "MC Treyce, DJ Sony, Mc Izall, Afonso na Voz",
  },
  {
    MABH: "31268",
    TENBH: "LONG LIVE",
    TACGIA: "Paula Fernandes, Taylor Swift",
  },
  {
    MABH: "1374",
    TENBH: "AO VIVO E EM CORES",
    TACGIA: "Victor e  Leo",
  },
  {
    MABH: "31269",
    TENBH: "TO BEIJANDO ELA",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "26456",
    TENBH: "LET ME GO",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "26457",
    TENBH: "ONE AND ONLY",
    TACGIA: "Adele",
  },
  {
    MABH: "26458",
    TENBH: "BOYFRIEND",
    TACGIA: "Ariana Grande, Social House",
  },
  {
    MABH: "26459",
    TENBH: "ROXANNE",
    TACGIA: "Arizona Zervas",
  },
  {
    MABH: "26460",
    TENBH: "BABY, I'M JEALOUS",
    TACGIA: "Bebe Rexha, Doja Cat",
  },
  {
    MABH: "26461",
    TENBH: "MAMIII",
    TACGIA: "Becky G x Karol G",
  },
  {
    MABH: "9204",
    TENBH: "BABY I LOVE YOUR WAY",
    TACGIA: "Big Mountain",
  },
  {
    MABH: "26462",
    TENBH: "PSYCHOFREAK",
    TACGIA: "Camila Cabello ft. WILLOW",
  },
  {
    MABH: "26463",
    TENBH: "SHE'S A BAD MAMA JAMA",
    TACGIA: "Carl Carlton",
  },
  {
    MABH: "26464",
    TENBH: "SYMPHONY",
    TACGIA: "Clean Bandit ft. Zara Larsson",
  },
  {
    MABH: "26465",
    TENBH: "YOU GOT ME",
    TACGIA: "Colbie Caillat",
  },
  {
    MABH: "26466",
    TENBH: "NEED TO KNOW",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26467",
    TENBH: "CLAUDETTE",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "26468",
    TENBH: "MISS MOVIN' ON",
    TACGIA: "Fifth Harmony",
  },
  {
    MABH: "26469",
    TENBH: "AS IT WAS",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "26470",
    TENBH: "LET YOU GO",
    TACGIA: "Joshua Bassett",
  },
  {
    MABH: "26471",
    TENBH: "BEFORE YOUR LOVE",
    TACGIA: "Kelly Clarkson",
  },
  {
    MABH: "26472",
    TENBH: "911",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "26473",
    TENBH: "EASY LIVING",
    TACGIA: "Miranda Lambert",
  },
  {
    MABH: "26474",
    TENBH: "HEARTBREAK ON THE DANCEFLOOR",
    TACGIA: "Now United",
  },
  {
    MABH: "26475",
    TENBH: "ONE RIGHT NOW",
    TACGIA: "Post Malone, The Weeknd",
  },
  {
    MABH: "26476",
    TENBH: "DOS ORTUGUITAS",
    TACGIA: "Sebastián Yatra",
  },
  {
    MABH: "26477",
    TENBH: "ENTERTAINER",
    TACGIA: "Zayn",
  },
  {
    MABH: "26478",
    TENBH: "HAPPY NOW",
    TACGIA: "Zedd, Elley Duhé",
  },
  {
    MABH: "26479",
    TENBH: "THE MIDDLE",
    TACGIA: "Zedd, Maren Morris, Grey",
  },
  {
    MABH: "1907",
    TENBH: "MEU GRITO DE AMOR",
    TACGIA: "Eduardo Costa, Paula Fernandes",
  },
  {
    MABH: "9617",
    TENBH: "ARREPIOU",
    TACGIA: "Banda Calypso",
  },
  {
    MABH: "26480",
    TENBH: "AWAY FROM THE SUN",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "26481",
    TENBH: "PUT IT IN A LOVE SONG",
    TACGIA: "Alicia Keys, Beyoncé",
  },
  {
    MABH: "26482",
    TENBH: "OPEN YOUR EYES",
    TACGIA: "Alter Bridge",
  },
  {
    MABH: "26483",
    TENBH: "MOSCOW MULE",
    TACGIA: "Bad Bunny",
  },
  {
    MABH: "26484",
    TENBH: "HASTA LOS DIENTES",
    TACGIA: "Camila Cabello ft. Maria Becerra",
  },
  {
    MABH: "26485",
    TENBH: "TREAT ME",
    TACGIA: "Chloe",
  },
  {
    MABH: "26486",
    TENBH: "HEARTBEAT",
    TACGIA: "Don Johnson",
  },
  {
    MABH: "26487",
    TENBH: "A MAN WITHOUT LOVE",
    TACGIA: "Engelbert Humperdinck",
  },
  {
    MABH: "26488",
    TENBH: "RIP, LOVE",
    TACGIA: "Faouzia",
  },
  {
    MABH: "26489",
    TENBH: "THIS MASQUERADE",
    TACGIA: "George Benson",
  },
  {
    MABH: "26490",
    TENBH: "MUSIC & LIGHTS",
    TACGIA: "Imagination",
  },
  {
    MABH: "26491",
    TENBH: "FIRST CLASS",
    TACGIA: "Jack Harlow",
  },
  {
    MABH: "26492",
    TENBH: "GOOD THING",
    TACGIA: "Kehlani, Zedd",
  },
  {
    MABH: "26493",
    TENBH: "ABOUT DAMN TIME",
    TACGIA: "Lizzo",
  },
  {
    MABH: "26494",
    TENBH: "TODO O NADA",
    TACGIA: "Lunay x Anitta",
  },
  {
    MABH: "26495",
    TENBH: "SO LONG SELF",
    TACGIA: "MercyMe",
  },
  {
    MABH: "26496",
    TENBH: "WHO I AM",
    TACGIA: "Nick Jonas ft. The Administration",
  },
  {
    MABH: "26497",
    TENBH: "OH MY GOODNESS",
    TACGIA: "Olly Murs",
  },
  {
    MABH: "26498",
    TENBH: "THAT THAT",
    TACGIA: "Psy ft. SUGA of BTS",
  },
  {
    MABH: "26499",
    TENBH: "HOW DO YOU SLEEP",
    TACGIA: "Sam Smith",
  },
  {
    MABH: "26500",
    TENBH: "MINE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "26501",
    TENBH: "BOOM BOOM POW",
    TACGIA: "The Black Eyed Peas",
  },
  {
    MABH: "26502",
    TENBH: "30/90",
    TACGIA: "tick, tick, BOOM",
  },
  {
    MABH: "26503",
    TENBH: "EVERY LIGHT IN THE HOUSE IS ON",
    TACGIA: "Trace Adkins",
  },
  {
    MABH: "26504",
    TENBH: "JE VEUX",
    TACGIA: "Zaz",
  },
  {
    MABH: "31270",
    TENBH: "PANDORA",
    TACGIA: "DJ-D, Vulgo FK, Menor MC e MC GP",
  },
  {
    MABH: "31271",
    TENBH: "EU ME TRAÍ",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "31272",
    TENBH: "A VOZ",
    TACGIA: "ID2",
  },
  {
    MABH: "31273",
    TENBH: "AMANDO VOCÊ",
    TACGIA: "João Gomes",
  },
  {
    MABH: "31274",
    TENBH: "TODO SEU",
    TACGIA: "Jorge e Matheus",
  },
  {
    MABH: "31275",
    TENBH: "ACORDA PEDRINHO",
    TACGIA: "Jovem Dionísio",
  },
  {
    MABH: "31276",
    TENBH: "GRATIDÃO",
    TACGIA: "L7NNON",
  },
  {
    MABH: "31277",
    TENBH: "ERRO PLANEJADO",
    TACGIA: "Luan Santana ft. Henrique e Juliano",
  },
  {
    MABH: "31278",
    TENBH: "QUATRO SORRISOS",
    TACGIA: "Márcia Fellipe",
  },
  {
    MABH: "31279",
    TENBH: "QUEM VALE MENOS",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31280",
    TENBH: "TEU AMIGO CUIDOU",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31281",
    TENBH: "COMUNICAÇÃO FALHOU",
    TACGIA: "Mari Fernandez & Nattan",
  },
  {
    MABH: "31282",
    TENBH: "PIUI TIC TAC",
    TACGIA: "MC RD",
  },
  {
    MABH: "31283",
    TENBH: "MOTEL AFRODITE",
    TACGIA: "Marília Mendonça, Maiara e Maraisa",
  },
  {
    MABH: "31284",
    TENBH: "QUEM MANDA É A 30",
    TACGIA: "Matuê",
  },
  {
    MABH: "31285",
    TENBH: "NÃO VOU TE BLOQUEAR",
    TACGIA: "MC Don Juan e Tarcísio do Acordeon",
  },
  {
    MABH: "31286",
    TENBH: "NÃO PARE",
    TACGIA: "Midian Lima",
  },
  {
    MABH: "31287",
    TENBH: "PQP",
    TACGIA: "Nattan",
  },
  {
    MABH: "31288",
    TENBH: "FILHO DO DONO",
    TACGIA: "Oruam ft. MC Cabelinho",
  },
  {
    MABH: "31289",
    TENBH: "TCHUCO NELA",
    TACGIA: "Rogerinho, Wesley Safadão",
  },
  {
    MABH: "31290",
    TENBH: "AMIGA",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "31291",
    TENBH: "ELA PARTIU",
    TACGIA: "Tim Maia",
  },
  {
    MABH: "31292",
    TENBH: "DO PIOR JEITO",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31293",
    TENBH: "TRIAGEM",
    TACGIA: "509E",
  },
  {
    MABH: "31294",
    TENBH: "SEPARAÇÃO",
    TACGIA: "Amado Batista, Kell Smith",
  },
  {
    MABH: "31295",
    TENBH: "PIPOCO",
    TACGIA: "Ana Castela, Melody, DJ Chris no Beat",
  },
  {
    MABH: "31296",
    TENBH: "HOTEL CARO",
    TACGIA: "Baco Exu do Blues, Luísa Sonza",
  },
  {
    MABH: "31297",
    TENBH: "ESTRELINHA",
    TACGIA: "Di Paullo e Paulino ft. Marília Mendonça",
  },
  {
    MABH: "31307",
    TENBH: "VIVENDO AVANÇADO",
    TACGIA: "Filipe Ret ft. BK' e MC TH",
  },
  {
    MABH: "31298",
    TENBH: "VACA PROFANA",
    TACGIA: "Gal Costa",
  },
  {
    MABH: "31299",
    TENBH: "NÃO PEGA NINGUÉM AINDA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31300",
    TENBH: "FÉ",
    TACGIA: "Iza",
  },
  {
    MABH: "31301",
    TENBH: "DENGO",
    TACGIA: "João Gomes",
  },
  {
    MABH: "31302",
    TENBH: "DESENROLA, BATE, JOGA DE LADIN",
    TACGIA: "L7NNON e os Hawaianos",
  },
  {
    MABH: "31303",
    TENBH: "CHAMA",
    TACGIA: "Luan Pereira ft. Ana Castela",
  },
  {
    MABH: "31304",
    TENBH: "INTUIÇÃO",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31305",
    TENBH: "SÓ DE IMAGINAR",
    TACGIA: "Mari Fernandez ft. Zé Vaqueiro",
  },
  {
    MABH: "31306",
    TENBH: "EU VOU COM CARINHO, ELA QUER COM FORÇA",
    TACGIA: "MC Don Juan, MC G15 e MC Davi",
  },
  {
    MABH: "31308",
    TENBH: "ME SINTO ABENÇOADO",
    TACGIA: "MC Poze do Rodo, Filipe Ret",
  },
  {
    MABH: "31309",
    TENBH: "ASSALTO PERIGOSO",
    TACGIA: "Melody",
  },
  {
    MABH: "31310",
    TENBH: "RAPARIGA",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "31311",
    TENBH: "CÊ TÁ PREPARADA",
    TACGIA: "Tayrone ft. Marília Mendonça",
  },
  {
    MABH: "31312",
    TENBH: "VOLTA RAPARIGA",
    TACGIA: "Vitinho Imperador",
  },
  {
    MABH: "31313",
    TENBH: "TCHAU PRA QUEM NAMORA",
    TACGIA: "Wesley Safadão & DJ Guuga & MC Delux",
  },
  {
    MABH: "30560",
    TENBH: "TU TAVA NA REVOADA",
    TACGIA: "Wesley Safadão ft. MC Danny",
  },
  {
    MABH: "30982",
    TENBH: "US MANOS E AS MINAS",
    TACGIA: "Xis",
  },
  {
    MABH: "30784",
    TENBH: "BANDIDO",
    TACGIA: "Zé Felipe e MC Mari",
  },
  {
    MABH: "30689",
    TENBH: "LONG NECK",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "26505",
    TENBH: "HERE BY ME",
    TACGIA: "3 Doors Down",
  },
  {
    MABH: "26506",
    TENBH: "I APOLOGIZE",
    TACGIA: "Anita Baker",
  },
  {
    MABH: "26507",
    TENBH: "LIKE ONLY A WOMAN CAN",
    TACGIA: "Brian McFadden",
  },
  {
    MABH: "26508",
    TENBH: "THAT'S HILARIOUS",
    TACGIA: "Charlie Puth",
  },
  {
    MABH: "26509",
    TENBH: "LEFT AND RIGHT",
    TACGIA: "Charlie Puth ft. Jung Kook of BTS",
  },
  {
    MABH: "26510",
    TENBH: "RIGHT NOW",
    TACGIA: "David Guetta ft. Rihanna",
  },
  {
    MABH: "26511",
    TENBH: "THE PRICE OF LOVE",
    TACGIA: "Everly Brothers",
  },
  {
    MABH: "26512",
    TENBH: "THIS AIN'T A SCENE, IT'S AN ARMS RACE",
    TACGIA: "Fall Out Boys",
  },
  {
    MABH: "26513",
    TENBH: "MIDNIGHT BLUES",
    TACGIA: "Gary Moore",
  },
  {
    MABH: "26514",
    TENBH: "JUST ONCE",
    TACGIA: "James Ingram",
  },
  {
    MABH: "26515",
    TENBH: "ON THE WINGS OF LOVE",
    TACGIA: "Jeffrey Osborne",
  },
  {
    MABH: "26516",
    TENBH: "TELEPATÍA",
    TACGIA: "Kali Uchis",
  },
  {
    MABH: "24985",
    TENBH: "FOR YOU",
    TACGIA: "Keith Urban",
  },
  {
    MABH: "24595",
    TENBH: "SKYLINE",
    TACGIA: "Khalid",
  },
  {
    MABH: "24883",
    TENBH: "MORE THAN I CAN SAY",
    TACGIA: "Leo Sayer",
  },
  {
    MABH: "20235",
    TENBH: "NO WAY NO",
    TACGIA: "Magic!",
  },
  {
    MABH: "18793",
    TENBH: "MAKES ME WONDER",
    TACGIA: "Maroon 5",
  },
  {
    MABH: "18900",
    TENBH: "HOME",
    TACGIA: "Michael Bublé",
  },
  {
    MABH: "18026",
    TENBH: "VIVA LAS VENGEANCE",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "18031",
    TENBH: "I LIKE YOU (A HAPPIER SONG)",
    TACGIA: "Post Malone ft. Doja Cat",
  },
  {
    MABH: "26115",
    TENBH: "NOTHING'S GONNA STOP US NOW",
    TACGIA: "Starship",
  },
  {
    MABH: "26177",
    TENBH: "SILENT NIGHT",
    TACGIA: "The Temptations",
  },
  {
    MABH: "26265",
    TENBH: "WAIT A MINUTE!",
    TACGIA: "Willow",
  },
  {
    MABH: "26050",
    TENBH: "T R A N S P A R E N T S O U L",
    TACGIA: "Willow ft. Travis Barker",
  },
  {
    MABH: "26148",
    TENBH: "MEET ME AT OUR SPOT",
    TACGIA: "Willow, the anxiety, tyler cole",
  },
  {
    MABH: "31314",
    TENBH: "GATA",
    TACGIA: "Anitta",
  },
  {
    MABH: "31315",
    TENBH: "INDISPENSÁVEL PRA MIM (MIENTES)",
    TACGIA: "Banda Malta",
  },
  {
    MABH: "31316",
    TENBH: "A NOVA ERA",
    TACGIA: "Chefin ft. Racovi, Bren",
  },
  {
    MABH: "31317",
    TENBH: "GOSTOSINHA É ELA",
    TACGIA: "Felipe Amorim",
  },
  {
    MABH: "31318",
    TENBH: "JOGO PERIGOSO",
    TACGIA: "Glória Groove",
  },
  {
    MABH: "31319",
    TENBH: "VAGABUNDO CHORA",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "31320",
    TENBH: "PÉSSIMO DIA PRA SER MINHA EX",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "31321",
    TENBH: "FALA MAL DE MIM",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31322",
    TENBH: "MEU NÚMERO",
    TACGIA: "Hugo e Guilherme ft. Jorge e Mateus",
  },
  {
    MABH: "31323",
    TENBH: "AQUELAS COISAS",
    TACGIA: "João Gomes ft. Tarcísio do Acordeon",
  },
  {
    MABH: "31324",
    TENBH: "5 REGRAS",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31325",
    TENBH: "CORAÇÃO CIGANO",
    TACGIA: "Luan Santana, Luísa Sonza",
  },
  {
    MABH: "31326",
    TENBH: "CACHORRINHAS",
    TACGIA: "Luísa Sonza",
  },
  {
    MABH: "31327",
    TENBH: "EU QUERO RECAIR",
    TACGIA: "Mari Fernandez ft. Simone e Simaria",
  },
  {
    MABH: "31328",
    TENBH: "PODE APOSTAR",
    TACGIA: "Mari Fernandez, Xand Avião",
  },
  {
    MABH: "31329",
    TENBH: "TE AMO DEMAIS",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "31330",
    TENBH: "BALANÇO DA REDE",
    TACGIA: "Matheus Fernandes, Xand Avião",
  },
  {
    MABH: "31331",
    TENBH: "METFLIX",
    TACGIA: "MC Poze do Rodo",
  },
  {
    MABH: "31332",
    TENBH: "TEM CABARÉ ESSA NOITE",
    TACGIA: "Nivaldo Marques, Nattan",
  },
  {
    MABH: "31333",
    TENBH: "CAMINHONETE BRANCA",
    TACGIA: "Paulo Mocelin",
  },
  {
    MABH: "31334",
    TENBH: "LARISSA",
    TACGIA: "Pedro Sampaio, Luan",
  },
  {
    MABH: "31335",
    TENBH: "TE AMAR SEM MEDO",
    TACGIA: "Só Pra Contrariar",
  },
  {
    MABH: "31336",
    TENBH: "DEIXA EU TE SUPERAR",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "31337",
    TENBH: "ONDE ANDA VOCÊ",
    TACGIA: "Vinicius de Moraes e Hermano Silva",
  },
  {
    MABH: "31338",
    TENBH: "ALTO LÁ",
    TACGIA: "Zeca Pagodinho",
  },
  {
    MABH: "26517",
    TENBH: "EVERY WOMAN IN THE WORLD",
    TACGIA: "Air Supply",
  },
  {
    MABH: "26518",
    TENBH: "WISH YOU WERE HERE",
    TACGIA: "Bee Gees",
  },
  {
    MABH: "26519",
    TENBH: "SUDDENLY",
    TACGIA: "Billy Ocean",
  },
  {
    MABH: "26520",
    TENBH: "RIVER",
    TACGIA: "Bishop Briggs",
  },
  {
    MABH: "26521",
    TENBH: "LEAVE THE DOOR OPEN",
    TACGIA: "Bruno Mars, Anderson . Paak, Silk Sonic",
  },
  {
    MABH: "26522",
    TENBH: "HOT SHIT",
    TACGIA: "Cardi B, Lil Durk, Kayne West",
  },
  {
    MABH: "26523",
    TENBH: "ROBARTE UM BESO",
    TACGIA: "Carlos Vives ft. Sebastián Yatra",
  },
  {
    MABH: "26524",
    TENBH: "I CAN'T GO FOR THAT (NO CAN DO)",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "26525",
    TENBH: "NO BRAINER",
    TACGIA: "Dj Khaled ft. Justin Bieber, Chance The Rapper, Quavo",
  },
  {
    MABH: "26526",
    TENBH: "STREETS",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26527",
    TENBH: "BLUE",
    TACGIA: "Eiffel",
  },
  {
    MABH: "26528",
    TENBH: "LA MIA STORIA TRA LE DITA",
    TACGIA: "Gianluca Grignani",
  },
  {
    MABH: "26529",
    TENBH: "GOLDEN",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "26530",
    TENBH: "YOU GIVE ME SOMETHING",
    TACGIA: "James Morrison",
  },
  {
    MABH: "26531",
    TENBH: "GLIMPSE OF US",
    TACGIA: "Joji",
  },
  {
    MABH: "26532",
    TENBH: "TUSA",
    TACGIA: "Karol G, Nicki Minaj",
  },
  {
    MABH: "26533",
    TENBH: "LOVING EVERY MINUTE",
    TACGIA: "Lighthouse Family (Cutfather & Joe Remix)",
  },
  {
    MABH: "26534",
    TENBH: "PRISIONER",
    TACGIA: "Miley Cyrus ft. Dua Lipa",
  },
  {
    MABH: "26535",
    TENBH: "FAMOUS LAST WORDS",
    TACGIA: "My Chemical Romance",
  },
  {
    MABH: "26536",
    TENBH: "HAPPIER",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26537",
    TENBH: "TE FELICITO",
    TACGIA: "Shakira, Rauw Alejandro",
  },
  {
    MABH: "26538",
    TENBH: "AUGUST",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "26539",
    TENBH: "DIE FOR YOU",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "26540",
    TENBH: "OUT OF TIME",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "26541",
    TENBH: "LA LOTO",
    TACGIA: "TINI, Becky G, Anitta",
  },
  {
    MABH: "2402",
    TENBH: "A COLHEITA",
    TACGIA: "Alda Célia",
  },
  {
    MABH: "2403",
    TENBH: "A MENSAGEM DA CRUZ",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "2427",
    TENBH: "PELA FÉ",
    TACGIA: "André Valadão",
  },
  {
    MABH: "2430",
    TENBH: "PORQUE ELE VIVE",
    TACGIA: "André Valadão",
  },
  {
    MABH: "2439",
    TENBH: "VOAR COMO A ÁGUIA",
    TACGIA: "Alda Célia",
  },
  {
    MABH: "2453",
    TENBH: "ESPÍRITO SANTO",
    TACGIA: "Fernanda Brum",
  },
  {
    MABH: "2477",
    TENBH: "UMA NOVA HISTÓRIA",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "2946",
    TENBH: "ABRO MÃO",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "2955",
    TENBH: "NADA ALÉM DO SANGUE",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "2978",
    TENBH: "EU VOU PASSAR PELA CRUZ",
    TACGIA: "PG",
  },
  {
    MABH: "2982",
    TENBH: "LEMBRA SENHOR",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "2984",
    TENBH: "MEU UNIVERSO",
    TACGIA: "PG",
  },
  {
    MABH: "2991",
    TENBH: "PROMESSA",
    TACGIA: "Renascer Praise",
  },
  {
    MABH: "2992",
    TENBH: "QUEM SOU EU",
    TACGIA: "PG",
  },
  {
    MABH: "2996",
    TENBH: "SE EU APENAS TE TOCAR",
    TACGIA: "Mariana Valadão",
  },
  {
    MABH: "3000",
    TENBH: "TUA GRAÇA ME BASTA",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "5605",
    TENBH: "CONSAGRAÇÃO",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "5610",
    TENBH: "FICO FELIZ",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "5622",
    TENBH: "NÃO HÁ DEUS MAIOR",
    TACGIA: "Aline Barros",
  },
  {
    MABH: "7741",
    TENBH: "ÁGUAS PURIFICADORAS",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "7748",
    TENBH: "AOS PÉS DAS CRUZ",
    TACGIA: "Kleber Lucas",
  },
  {
    MABH: "7767",
    TENBH: "DIANTE DE TI",
    TACGIA: "Quatro Por Um",
  },
  {
    MABH: "7781",
    TENBH: "FALA COMIGO",
    TACGIA: "Eyshila",
  },
  {
    MABH: "7797",
    TENBH: "MANANCIAL",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "7849",
    TENBH: "O TEMPO NÃO PODE APAGAR",
    TACGIA: "Cassiane e Jairinho",
  },
  {
    MABH: "7856",
    TENBH: "PODEROSO DEUS",
    TACGIA: "David Quinlan",
  },
  {
    MABH: "7863",
    TENBH: "QUERO ME APAIXONAR",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "7865",
    TENBH: "REINA SOBRE MIM",
    TACGIA: "Nivea Soares",
  },
  {
    MABH: "7867",
    TENBH: "RESTITUI",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "7874",
    TENBH: "SOLTA O CABO DA NAU",
    TACGIA: "André Valadão",
  },
  {
    MABH: "7887",
    TENBH: "VIM PARA ADORAR-TE",
    TACGIA: "Adoração e Adoradores",
  },
  {
    MABH: "25001",
    TENBH: "1000 GRAUS",
    TACGIA: "Renascer Praise",
  },
  {
    MABH: "25003",
    TENBH: "A DOÇURA DO TEU FALAR",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25004",
    TENBH: "A GLÓRIA DA SEGUNDA CASA",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25007",
    TENBH: "ACALMA MEU CORAÇÃO",
    TACGIA: "Anderson Freire",
  },
  {
    MABH: "25008",
    TENBH: "ACALME AO SENHOR",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "25009",
    TENBH: "ACEITO O TEU CHAMADO",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "25010",
    TENBH: "ACREDITO",
    TACGIA: "Leonardo Gonçalves",
  },
  {
    MABH: "25012",
    TENBH: "AGUENTA FIRME",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25013",
    TENBH: "AMIGO ÍNTIMO",
    TACGIA: "Heloisa Rosa",
  },
  {
    MABH: "25015",
    TENBH: "AQUIETA MINHA ALMA",
    TACGIA: "Ministério Zoe",
  },
  {
    MABH: "25016",
    TENBH: "ASSIM COMO A CORÇA",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "25017",
    TENBH: "ATOS 2",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25018",
    TENBH: "BONDADE",
    TACGIA: "Leonardo Gonçalves",
  },
  {
    MABH: "25019",
    TENBH: "BUSCAR TUA FACE É PRECISO",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25020",
    TENBH: "CADEIAS QUEBRAR",
    TACGIA: "Soraya Moraes",
  },
  {
    MABH: "25021",
    TENBH: "CAIA FOGO",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "25022",
    TENBH: "CANÇÃO DO APOCALIPSE",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "25023",
    TENBH: "CLAME AO PAI",
    TACGIA: "Ton Carfi",
  },
  {
    MABH: "25025",
    TENBH: "CORAÇÃO VALENTE",
    TACGIA: "Voz da Verdade",
  },
  {
    MABH: "25026",
    TENBH: "CREIO QUE TU ÉS A CURA",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25027",
    TENBH: "CRIADOR DO MUNDO",
    TACGIA: "Daniela Araújo",
  },
  {
    MABH: "25028",
    TENBH: "CRISTO VIVE EM MIM",
    TACGIA: "Voz da Verdade",
  },
  {
    MABH: "25029",
    TENBH: "CRUZ",
    TACGIA: "Heloisa Rosa",
  },
  {
    MABH: "25030",
    TENBH: "DE DEUS",
    TACGIA: "Daniela Araújo",
  },
  {
    MABH: "25031",
    TENBH: "DE GLÓRIA EM GLÓRIA",
    TACGIA: "Ministério Zoe",
  },
  {
    MABH: "25032",
    TENBH: "DEIXAR A LÁGRIMA ROLAR",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "25033",
    TENBH: "DESCANSAREI",
    TACGIA: "Etiene Pires",
  },
  {
    MABH: "25034",
    TENBH: "DEUS É DEUS",
    TACGIA: "Delino Marçal",
  },
  {
    MABH: "25035",
    TENBH: "DEUS E EU",
    TACGIA: "Leandro Borges",
  },
  {
    MABH: "25036",
    TENBH: "DEUS FORTE",
    TACGIA: "Kleber Lucas",
  },
  {
    MABH: "25037",
    TENBH: "DEUS ME AMA",
    TACGIA: "Thalles Roberto",
  },
  {
    MABH: "25038",
    TENBH: "DEUS PROVERÁ",
    TACGIA: "Eyshila",
  },
  {
    MABH: "25040",
    TENBH: "É DE CORAÇÃO",
    TACGIA: "Paulo César Baruk",
  },
  {
    MABH: "25041",
    TENBH: "É PROIBIDO CHORAR",
    TACGIA: "Ao Cubo",
  },
  {
    MABH: "25042",
    TENBH: "ELE ME AMA",
    TACGIA: "Livres Para Adorar",
  },
  {
    MABH: "25043",
    TENBH: "ELE NÃO DESISTE DE VOCÊ",
    TACGIA: "Marquinhos Gomes",
  },
  {
    MABH: "25044",
    TENBH: "ELE VIRÁ",
    TACGIA: "Leonardo Gonçalves",
  },
  {
    MABH: "25045",
    TENBH: "ELE VIVE",
    TACGIA: "Leonardo Gonçalves",
  },
  {
    MABH: "25046",
    TENBH: "EM TEUS BRAÇOS",
    TACGIA: "Laura Souguellis",
  },
  {
    MABH: "25047",
    TENBH: "EM TUA PRESENÇA",
    TACGIA: "Nívea Soares",
  },
  {
    MABH: "25048",
    TENBH: "EMANUEL",
    TACGIA: "Nívea Soares",
  },
  {
    MABH: "25049",
    TENBH: "ESPERA EM DEUS",
    TACGIA: "Paulo César Baruk",
  },
  {
    MABH: "25051",
    TENBH: "ESPÍRITO SANTO",
    TACGIA: "Priscilla Alcântara",
  },
  {
    MABH: "25052",
    TENBH: "ESTÁS COMIGO",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25053",
    TENBH: "ESTE DEUS É DEMAIS",
    TACGIA: "Shirley Carvalhaes",
  },
  {
    MABH: "25054",
    TENBH: "ESTOU CONTIGO",
    TACGIA: "Shirley Carvalhaes",
  },
  {
    MABH: "25055",
    TENBH: "EU CORRO PRA TI",
    TACGIA: "Paulo César Baruk",
  },
  {
    MABH: "25056",
    TENBH: "EU CUIDO DE TI",
    TACGIA: "Canção e Louvor",
  },
  {
    MABH: "25057",
    TENBH: "EU ESCOLHO DEUS",
    TACGIA: "Thalles Roberto",
  },
  {
    MABH: "25058",
    TENBH: "EU ME ARREPENDO",
    TACGIA: "Eyshila",
  },
  {
    MABH: "25059",
    TENBH: "EU ME RENDO",
    TACGIA: "Renascer Praise",
  },
  {
    MABH: "25060",
    TENBH: "EU SÓ QUERO SER TEU",
    TACGIA: "Ton Carfi",
  },
  {
    MABH: "25062",
    TENBH: "FAÇA MORADA",
    TACGIA: "Coral Kemuel",
  },
  {
    MABH: "25064",
    TENBH: "FÉ EM DEUS",
    TACGIA: "Cristina Mel",
  },
  {
    MABH: "25066",
    TENBH: "FIDELIDADE",
    TACGIA: "Danielle Cristina",
  },
  {
    MABH: "25067",
    TENBH: "FIEL A MIM",
    TACGIA: "Eyshila",
  },
  {
    MABH: "25068",
    TENBH: "FIEL TODA A VIDA",
    TACGIA: "Rose Nascimento",
  },
  {
    MABH: "25069",
    TENBH: "FILHO PRÓDIGO",
    TACGIA: "Jamily",
  },
  {
    MABH: "25070",
    TENBH: "FILHOS",
    TACGIA: "Ao Cubo",
  },
  {
    MABH: "25071",
    TENBH: "GLÓRIA E HONRA",
    TACGIA: "Nívea Soares",
  },
  {
    MABH: "25072",
    TENBH: "GRANDIOSO ÉS TU",
    TACGIA: "Cristina Mel",
  },
  {
    MABH: "25073",
    TENBH: "GUIA-ME",
    TACGIA: "Daniela Araújo",
  },
  {
    MABH: "25074",
    TENBH: "HALLELUJAH",
    TACGIA: "Jamily",
  },
  {
    MABH: "25075",
    TENBH: "IMENSURÁVEL",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25076",
    TENBH: "JANELAS DA ALMA",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25077",
    TENBH: "JARDIM DA INOCÊNCIA",
    TACGIA: "Paulo César Baruk",
  },
  {
    MABH: "25078",
    TENBH: "JESUS MEU GUIA É",
    TACGIA: "Raiz Coral",
  },
  {
    MABH: "25080",
    TENBH: "JÓ",
    TACGIA: "Midian Lima",
  },
  {
    MABH: "25082",
    TENBH: "LUGAR SECRETO",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25083",
    TENBH: "MAIS FORTE QUE A MORTE",
    TACGIA: "Livres Para Adorar",
  },
  {
    MABH: "25085",
    TENBH: "MAPA DO TESOURO",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25086",
    TENBH: "ME AJUDE A MELHORAR",
    TACGIA: "Eli Soares",
  },
  {
    MABH: "25087",
    TENBH: "ME AMA",
    TACGIA: "Diante do Trono",
  },
  {
    MABH: "25088",
    TENBH: "ME ENTREGO A TI",
    TACGIA: "Nivea Soares",
  },
  {
    MABH: "25089",
    TENBH: "ME ESVAZIAR",
    TACGIA: "Nívea Soares",
  },
  {
    MABH: "25090",
    TENBH: "MEU HOSPITAL",
    TACGIA: "Anderson Freire",
  },
  {
    MABH: "25091",
    TENBH: "MEU MELHOR",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "25093",
    TENBH: "NA ETERNIDADE",
    TACGIA: "Bruna Karla",
  },
  {
    MABH: "25094",
    TENBH: "NADA ALÉM DE TI",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25097",
    TENBH: "NÃO POSSO TE DEIXAR",
    TACGIA: "Kleber Lucas",
  },
  {
    MABH: "25098",
    TENBH: "NÃO QUERO SER MAIS EU",
    TACGIA: "Preto no Branco",
  },
  {
    MABH: "25099",
    TENBH: "NINGUÉM EXPLICA DEUS",
    TACGIA: "Preto no Branco",
  },
  {
    MABH: "25100",
    TENBH: "NO CAMINHO DO MILAGRE",
    TACGIA: "Davi Sacer",
  },
  {
    MABH: "25101",
    TENBH: "NOSSA CANÇÃO",
    TACGIA: "Gabriela Rocha e Leonardo Gonçalves",
  },
  {
    MABH: "25102",
    TENBH: "NOSSA CANÇÃO",
    TACGIA: "Shirley Carvalhaes",
  },
  {
    MABH: "25103",
    TENBH: "NUNCA PARE DE LUTAR",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25104",
    TENBH: "O MEU DEUS É FORTE",
    TACGIA: "Regis Danese",
  },
  {
    MABH: "25105",
    TENBH: "O MILAGRE SOU EU",
    TACGIA: "Eyshila",
  },
  {
    MABH: "25106",
    TENBH: "O QUE TUA GLÓRIA FEZ COMIGO",
    TACGIA: "Fernanda Brum",
  },
  {
    MABH: "25107",
    TENBH: "O SONHO NÃO ACABOU",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25109",
    TENBH: "OCEANOS",
    TACGIA: "Ana Nóbrega",
  },
  {
    MABH: "25110",
    TENBH: "OS SONHOS DE DEUS",
    TACGIA: "Preto no Branco",
  },
  {
    MABH: "25111",
    TENBH: "OUÇO DEUS ME CHAMAR",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25112",
    TENBH: "PAI NOSSO",
    TACGIA: "Ministério Pedras Vivas",
  },
  {
    MABH: "25114",
    TENBH: "PERTO QUERO ESTAR",
    TACGIA: "Toque No Altar",
  },
  {
    MABH: "25117",
    TENBH: "PORQUE EU TE AMEI",
    TACGIA: "Ton Carfi",
  },
  {
    MABH: "25118",
    TENBH: "PRA ONDE IREMOS",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25119",
    TENBH: "PRIORIDADE",
    TACGIA: "Midian Lima",
  },
  {
    MABH: "25120",
    TENBH: "PROFETIZO",
    TACGIA: "Regis Danese",
  },
  {
    MABH: "25122",
    TENBH: "QUE AMOR É ESSE",
    TACGIA: "Mariana Valadão",
  },
  {
    MABH: "25123",
    TENBH: "QUE ELE CRESÇA",
    TACGIA: "Deigma Marques",
  },
  {
    MABH: "25126",
    TENBH: "RECEBE A CURA",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25129",
    TENBH: "RUDE CRUZ",
    TACGIA: "André Valadão",
  },
  {
    MABH: "25130",
    TENBH: "SANTO ÉS",
    TACGIA: "Gisele Nascimento",
  },
  {
    MABH: "25131",
    TENBH: "SANTO ESPÍRITO",
    TACGIA: "Laura Souguellis",
  },
  {
    MABH: "25133",
    TENBH: "SE MEU POVO ORAR",
    TACGIA: "Expressão Vocal",
  },
  {
    MABH: "25135",
    TENBH: "SOPRA ESPÍRITO",
    TACGIA: "Ludmila Ferber",
  },
  {
    MABH: "25136",
    TENBH: "SOU ESCOLHIDO",
    TACGIA: "Priscilla Alcântara",
  },
  {
    MABH: "25137",
    TENBH: "SUBLIME",
    TACGIA: "Leonardo Gonçalves",
  },
  {
    MABH: "25138",
    TENBH: "TEU AMOR NÃO FALHA",
    TACGIA: "Nívea Soares",
  },
  {
    MABH: "25139",
    TENBH: "TEU SANTO NOME",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "25140",
    TENBH: "TEUS SONHOS",
    TACGIA: "Fernandinho",
  },
  {
    MABH: "25141",
    TENBH: "TU PODES",
    TACGIA: "Regis Danese",
  },
  {
    MABH: "25143",
    TENBH: "ÚLTIMA CHANCE",
    TACGIA: "Soraya Moraes",
  },
  {
    MABH: "25145",
    TENBH: "VAI VALER A PENA",
    TACGIA: "Livres Para Adorar",
  },
  {
    MABH: "25146",
    TENBH: "VAMOS JUNTOS",
    TACGIA: "Bruna Karla E Pr. Lucas",
  },
  {
    MABH: "25147",
    TENBH: "VERDADEIRO ADORAR",
    TACGIA: "PG",
  },
  {
    MABH: "25150",
    TENBH: "VOCÊ ME LEVA AO DESERTO",
    TACGIA: "Ministério Zoe",
  },
  {
    MABH: "25151",
    TENBH: "VOU DEIXAR NA CRUZ",
    TACGIA: "Kléber Lucas",
  },
  {
    MABH: "31339",
    TENBH: "VAI LÁ EM CASA HOJE",
    TACGIA: "George Henrique e Rodrigo ft. Marília Mendonça",
  },
  {
    MABH: "31340",
    TENBH: "HAJA COLÍRIO",
    TACGIA: "Guilherme e Benuto ft. Hugo e Guilherme",
  },
  {
    MABH: "31341",
    TENBH: "CONTRAMÃO",
    TACGIA: "Gustavo Mioto",
  },
  {
    MABH: "31342",
    TENBH: "PRÓXIMA VIDA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "31343",
    TENBH: "CHEIRO DE BALADA",
    TACGIA: "Hugo e Guilherme ft. Gusttavo Lima",
  },
  {
    MABH: "31344",
    TENBH: "METE UM BLOCK NELE",
    TACGIA: "João Gomes",
  },
  {
    MABH: "31345",
    TENBH: "MEU PEDAÇO DE PECADO",
    TACGIA: "João Gomes",
  },
  {
    MABH: "31346",
    TENBH: "MOLHANDO O VOLANTE",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31347",
    TENBH: "TE LOVE",
    TACGIA: "Kevi Jonny",
  },
  {
    MABH: "31348",
    TENBH: "INCENDEIA",
    TACGIA: "Kevin O Chris",
  },
  {
    MABH: "31349",
    TENBH: "VIVA VOZ",
    TACGIA: "Lauana Prado",
  },
  {
    MABH: "31350",
    TENBH: "VOCÊ HUMILHA",
    TACGIA: "Lauana Prado",
  },
  {
    MABH: "31351",
    TENBH: "CHÁ DE CHIFRE",
    TACGIA: "Marcynho Sensação, MC Mari, Wesley Safadão",
  },
  {
    MABH: "31352",
    TENBH: "PARA DE ME ASSISTIR",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31353",
    TENBH: "VIDA LOUCA",
    TACGIA: "MC Poze do Rodo",
  },
  {
    MABH: "31354",
    TENBH: "PINO DA GRANADA",
    TACGIA: "Murilo Huff",
  },
  {
    MABH: "31355",
    TENBH: "UMA EX",
    TACGIA: "Murilo Huff ft. Jorge",
  },
  {
    MABH: "31356",
    TENBH: "NUNCA VAI SER NÓS",
    TACGIA: "Murilo Huff ft. Zé Vaqueiro",
  },
  {
    MABH: "31357",
    TENBH: "PERFEITO PRA FICAR SOZINHO",
    TACGIA: "Murilo Huff, Maiara e Maraisa",
  },
  {
    MABH: "31358",
    TENBH: "ATÉ A PRÓXIMA VIDA",
    TACGIA: "Nattan",
  },
  {
    MABH: "31359",
    TENBH: "AGORA SOMOS EX",
    TACGIA: "Nenho",
  },
  {
    MABH: "31360",
    TENBH: "SUPERA",
    TACGIA: "Péricles",
  },
  {
    MABH: "31361",
    TENBH: "PROTEÇÃO DE TELA",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "31362",
    TENBH: "PONTO FRACO",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "31363",
    TENBH: "AMOR OU ESQUEMA",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "26542",
    TENBH: "BIGGEST PART OF ME",
    TACGIA: "Ambrosia",
  },
  {
    MABH: "26543",
    TENBH: "LA VITA MIA",
    TACGIA: "Amedeo Minghi",
  },
  {
    MABH: "26544",
    TENBH: "SHUT DOWN",
    TACGIA: "BLACKPINK",
  },
  {
    MABH: "26545",
    TENBH: "SO MUCH TROUBLE IN THE WORLD",
    TACGIA: "Bob Marley",
  },
  {
    MABH: "26546",
    TENBH: "SMOKIN OUT THE WINDOW",
    TACGIA: "Burno Mars, Anderson .Paak, Silk Sonic",
  },
  {
    MABH: "26547",
    TENBH: "SO BEAUTIFUL",
    TACGIA: "Chris De Burgh",
  },
  {
    MABH: "26548",
    TENBH: "TENNESSEE WHISKEY",
    TACGIA: "Chris Stapleton",
  },
  {
    MABH: "26549",
    TENBH: "BEST OF ME",
    TACGIA: "Daniel Powter",
  },
  {
    MABH: "26550",
    TENBH: "(IF YOU'RE LOOKING FOR) TROUBLE",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "26551",
    TENBH: "IF I CAN DREAM",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "26552",
    TENBH: "SLOW DANCING IN THE DARK",
    TACGIA: "Joji",
  },
  {
    MABH: "26553",
    TENBH: "YOUR MAN",
    TACGIA: "Josh Turner",
  },
  {
    MABH: "26554",
    TENBH: "HOLD MY HAND",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "26555",
    TENBH: "BEGGIN'",
    TACGIA: "Maneskin",
  },
  {
    MABH: "26556",
    TENBH: "I KEEP FORGETTIN' (EVERY TIME YOU'RE NEAR)",
    TACGIA: "Michael McDonald",
  },
  {
    MABH: "26557",
    TENBH: "HARD WOMEN",
    TACGIA: "Mick Jagger",
  },
  {
    MABH: "26558",
    TENBH: "ANGELS LIKE YOU",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "26559",
    TENBH: "I AIN'T WORRIED",
    TACGIA: "OneRepublic",
  },
  {
    MABH: "26560",
    TENBH: "A NEW LEVEL",
    TACGIA: "Pantera",
  },
  {
    MABH: "26561",
    TENBH: "DON'T LOSE MY NUMBER",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "26562",
    TENBH: "SOMEONE TO LOVE",
    TACGIA: "Shayne Ward",
  },
  {
    MABH: "26563",
    TENBH: "HE'S THE GREATEST DANCER",
    TACGIA: "Sister Sledge",
  },
  {
    MABH: "26564",
    TENBH: "I WANT YOU (SHE'S SO HEAVY)",
    TACGIA: "The Beatles",
  },
  {
    MABH: "26565",
    TENBH: "I LOVE YOU SO",
    TACGIA: "The Walters",
  },
  {
    MABH: "26566",
    TENBH: "CALL OUT MY NAME",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "30876",
    TENBH: "PEGA O GUANABARA",
    TACGIA: "Alanzim Coreano",
  },
  {
    MABH: "26567",
    TENBH: "GET IT RIGHT",
    TACGIA: "Aretha Franklin",
  },
  {
    MABH: "26568",
    TENBH: "CURE FOR ME",
    TACGIA: "Aurora",
  },
  {
    MABH: "31085",
    TENBH: "BORA BILL",
    TACGIA: "Biu do Piseiro",
  },
  {
    MABH: "26569",
    TENBH: "EDGING",
    TACGIA: "Blink 182",
  },
  {
    MABH: "26570",
    TENBH: "FIRST DATE",
    TACGIA: "Blink 182",
  },
  {
    MABH: "26571",
    TENBH: "VERSACE ON THE FLOOR",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "26572",
    TENBH: "REDBONE",
    TACGIA: "Childish Gambino",
  },
  {
    MABH: "31364",
    TENBH: "SUBIRUSDOISTIOZIN",
    TACGIA: "Criolo",
  },
  {
    MABH: "26573",
    TENBH: "PROMISE AIN'T ENOUGH",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "26574",
    TENBH: "SPACE ODDITY",
    TACGIA: "David Bowie",
  },
  {
    MABH: "26575",
    TENBH: "29",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "31365",
    TENBH: "LEAL",
    TACGIA: "Djonga",
  },
  {
    MABH: "26576",
    TENBH: "PRETTY PLEASE",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "31366",
    TENBH: "ME PERDOA",
    TACGIA: "Ferrugem ft. Iza",
  },
  {
    MABH: "26577",
    TENBH: "KILLING ME SOFTLY WITH HIS SONG",
    TACGIA: "Fugees",
  },
  {
    MABH: "26578",
    TENBH: "NOTHING'S GONNA CHANGE MY LOVE FOR YOU",
    TACGIA: "George Benson",
  },
  {
    MABH: "3450",
    TENBH: "1,2,3",
    TACGIA: "Gian e Giovani",
  },
  {
    MABH: "1169",
    TENBH: "LIGANDO OS FATOS",
    TACGIA: "Grupo Pique Novo",
  },
  {
    MABH: "31367",
    TENBH: "ASSUNTO DELICADO",
    TACGIA: "Guilherme e Benuto ft. Xand Avião",
  },
  {
    MABH: "31368",
    TENBH: "EU GOSTO ASSIM",
    TACGIA: "Gustavo Mioto, Mari Fernandez",
  },
  {
    MABH: "31369",
    TENBH: "EX DOS MEUS SONHOS",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31370",
    TENBH: "PINGO DE DÓ",
    TACGIA: "Hugo e Guilherme",
  },
  {
    MABH: "26579",
    TENBH: "SOLITARY MAN",
    TACGIA: "Johnny Cash",
  },
  {
    MABH: "31371",
    TENBH: "A LOIRA, A MORENA E A RUIVA",
    TACGIA: "Josué Bom de Faixa",
  },
  {
    MABH: "26580",
    TENBH: "APPLAUSE",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "31372",
    TENBH: "TALISMÃ",
    TACGIA: "Leandro e Leonardo",
  },
  {
    MABH: "31373",
    TENBH: "CAVALGADA",
    TACGIA: "Lexa, Pabllo Vittar",
  },
  {
    MABH: "31374",
    TENBH: "ZERO",
    TACGIA: "Liniker e os Caramelows",
  },
  {
    MABH: "31375",
    TENBH: "POSTO 24H",
    TACGIA: "Lucas Lucco ft. Wesley Safadão",
  },
  {
    MABH: "26581",
    TENBH: "DIE ANOTHER DAY",
    TACGIA: "Madonna",
  },
  {
    MABH: "6205",
    TENBH: "ANDEI SÓ",
    TACGIA: "Natiruts",
  },
  {
    MABH: "31376",
    TENBH: "MORENA",
    TACGIA: "Nattan",
  },
  {
    MABH: "26582",
    TENBH: "BRICK BY BORING BRICK",
    TACGIA: "Paramore",
  },
  {
    MABH: "26583",
    TENBH: "CALMA (REMIX)",
    TACGIA: "Pedro Capó, Farruko",
  },
  {
    MABH: "31377",
    TENBH: "FINAL DE TARDE",
    TACGIA: "Péricles",
  },
  {
    MABH: "31378",
    TENBH: "NEM DE GRAÇA",
    TACGIA: "Pixote",
  },
  {
    MABH: "26584",
    TENBH: "COME AND GET YOUR LOVE",
    TACGIA: "Redbone",
  },
  {
    MABH: "2852",
    TENBH: "ILEGAL, IMORAL OU ENGORDA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "26585",
    TENBH: "DESPECHÁ",
    TACGIA: "Rosalía",
  },
  {
    MABH: "26586",
    TENBH: "UNHOLY",
    TACGIA: "Sam Smith ft. Kim Petras",
  },
  {
    MABH: "26587",
    TENBH: "UNSTOPPABLE",
    TACGIA: "Sia",
  },
  {
    MABH: "26588",
    TENBH: "MISS YOU LOVE",
    TACGIA: "Silverchair",
  },
  {
    MABH: "26589",
    TENBH: "HO HEY",
    TACGIA: "The Lumineers",
  },
  {
    MABH: "31379",
    TENBH: "A FILA ANDA",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "26590",
    TENBH: "HEATHENS",
    TACGIA: "Twenty One Pilots",
  },
  {
    MABH: "31380",
    TENBH: "NÃO FOSSE TÃO TARDE",
    TACGIA: "Wesley Safadão ft. Lucas Aboiador",
  },
  {
    MABH: "31381",
    TENBH: "SENTA DANADA",
    TACGIA: "Zé Felipe, Barões da Pisadinha",
  },
  {
    MABH: "31382",
    TENBH: "METADE DE UM ABRAÇO",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "18930",
    TENBH: "I DRINK WINE",
    TACGIA: "Adele",
  },
  {
    MABH: "24842",
    TENBH: "LOCKED UP",
    TACGIA: "Akon",
  },
  {
    MABH: "31383",
    TENBH: "JULIET E CHAPELÃO (BOTA, BOTA)",
    TACGIA: "Ana Castela ft. Luan Pereira, DJ Chris no Beat",
  },
  {
    MABH: "26591",
    TENBH: "BESAME MUCHO",
    TACGIA: "Andrea Boccelli",
  },
  {
    MABH: "31384",
    TENBH: "BOYS DON'T CRY",
    TACGIA: "Anitta",
  },
  {
    MABH: "26592",
    TENBH: "505",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "31385",
    TENBH: "SEM ABUSO",
    TACGIA: "Art Popular",
  },
  {
    MABH: "26593",
    TENBH: "SO AM I",
    TACGIA: "Ava Max",
  },
  {
    MABH: "26594",
    TENBH: "listen before i go",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "26595",
    TENBH: "DON'T LIE",
    TACGIA: "Black Eyed Peas",
  },
  {
    MABH: "26596",
    TENBH: "HANGING ON THE TELEPHONE",
    TACGIA: "Blondie",
  },
  {
    MABH: "26597",
    TENBH: "HIT 'EM UP STYLE (OOPS)",
    TACGIA: "Blu Cantrell",
  },
  {
    MABH: "31386",
    TENBH: "QUE SITUAÇÃO",
    TACGIA: "Boka Loka",
  },
  {
    MABH: "31387",
    TENBH: "UM MORTO MUITO LOUCO",
    TACGIA: "Bonde do Tigrão",
  },
  {
    MABH: "26598",
    TENBH: "COLD COLD COLD",
    TACGIA: "Cage The Elephant",
  },
  {
    MABH: "31388",
    TENBH: "NÃO ERA EU",
    TACGIA: "César Menotti e Fabiano",
  },
  {
    MABH: "31389",
    TENBH: "COMO TUDO DEVE SER",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "26599",
    TENBH: "GET YOU",
    TACGIA: "Daniel Caesar ft. Kali Uchis",
  },
  {
    MABH: "31390",
    TENBH: "PÉ NA AREIA",
    TACGIA: "Diogo Nogueira",
  },
  {
    MABH: "26600",
    TENBH: "HOLD ME CLOSER",
    TACGIA: "Elton John ft. Britney Spears",
  },
  {
    MABH: "31391",
    TENBH: "PRA VOCÊ ACREDITAR",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "31392",
    TENBH: "SINTO SUA FALTA",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "26601",
    TENBH: "PINK + WHITE",
    TACGIA: "Frank Ocean",
  },
  {
    MABH: "31393",
    TENBH: "SIGILO",
    TACGIA: "Guilherme e Benuto",
  },
  {
    MABH: "31394",
    TENBH: "CARINHA DE NENÉM",
    TACGIA: "Japãozin",
  },
  {
    MABH: "31395",
    TENBH: "EU TENHO A SENHA",
    TACGIA: "João Gomes",
  },
  {
    MABH: "31396",
    TENBH: "CUBA",
    TACGIA: "Johnny Hooker",
  },
  {
    MABH: "31397",
    TENBH: "FIVELA",
    TACGIA: "Jottapê, Melody",
  },
  {
    MABH: "26602",
    TENBH: "FORGET ME",
    TACGIA: "Lewis Capaldi",
  },
  {
    MABH: "31398",
    TENBH: "NÃO FOSSE TÃO TARDE",
    TACGIA: "Lou Garcia",
  },
  {
    MABH: "31399",
    TENBH: "VOLTEI PRA MIM",
    TACGIA: "Marina Sena",
  },
  {
    MABH: "26603",
    TENBH: "OBVIOUSLY",
    TACGIA: "McFly",
  },
  {
    MABH: "31400",
    TENBH: "PELADO",
    TACGIA: "Nattan",
  },
  {
    MABH: "26604",
    TENBH: "SEXY LOVE",
    TACGIA: "Ne-Yo",
  },
  {
    MABH: "26605",
    TENBH: "LIFE GOES ON",
    TACGIA: "Oliver Tree",
  },
  {
    MABH: "31401",
    TENBH: "RAJADÃO",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "26606",
    TENBH: "HATE TO SEE YOUR HEART BREAK",
    TACGIA: "Paramore",
  },
  {
    MABH: "26607",
    TENBH: "MY HEART",
    TACGIA: "Paramore",
  },
  {
    MABH: "26608",
    TENBH: "IF EVER YOU'RE IN MY ARMS AGAIN",
    TACGIA: "Peabo Bryson",
  },
  {
    MABH: "26609",
    TENBH: "YOUNG FOLKS",
    TACGIA: "Peter Bjorn and John",
  },
  {
    MABH: "31402",
    TENBH: "SAUDADE DE EX",
    TACGIA: "Rionegro e Solimões ft. Jorge e Mateus",
  },
  {
    MABH: "26610",
    TENBH: "MONOTONÍA",
    TACGIA: "Shakira ft. Ozuna",
  },
  {
    MABH: "26611",
    TENBH: "SENSUAL SEDUCTION",
    TACGIA: "Snoop Dogg",
  },
  {
    MABH: "26612",
    TENBH: "ANTI-HERO",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "31403",
    TENBH: "BANHO DE CHUVEIRO",
    TACGIA: "Terra Samba",
  },
  {
    MABH: "26613",
    TENBH: "CHLORINE",
    TACGIA: "Twenty One Pilots",
  },
  {
    MABH: "31404",
    TENBH: "50 CÓPIAS",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "26624",
    TENBH: "19-2000",
    TACGIA: "Gorillaz",
  },
  {
    MABH: "26631",
    TENBH: "A TOUT LE MONDE",
    TACGIA: "Megadeth",
  },
  {
    MABH: "31410",
    TENBH: "AINDA TÔ AÍ",
    TACGIA: "Eduardo Costa",
  },
  {
    MABH: "31412",
    TENBH: "BAGUNÇA MINHA VIDA",
    TACGIA: "George Henrique e Rodrigo",
  },
  {
    MABH: "31409",
    TENBH: "BIXINHO",
    TACGIA: "Duda Beat",
  },
  {
    MABH: "26628",
    TENBH: "BLOODY MARY",
    TACGIA: "Lady Gaga",
  },
  {
    MABH: "31422",
    TENBH: "BLOQUEIA SEU EX",
    TACGIA: "Nattan",
  },
  {
    MABH: "26626",
    TENBH: "BLUE LIGHTS",
    TACGIA: "Jorja Smith",
  },
  {
    MABH: "26618",
    TENBH: "BOYS",
    TACGIA: "Charli XCX",
  },
  {
    MABH: "31407",
    TENBH: "CONTROLE REMOTO",
    TACGIA: "Dilsinho",
  },
  {
    MABH: "31423",
    TENBH: "CUIDADO",
    TACGIA: "Nattan",
  },
  {
    MABH: "31425",
    TENBH: "DEIXA TUDO COMO TÁ",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "2830",
    TENBH: "DÉJÀ VU",
    TACGIA: "Pitty",
  },
  {
    MABH: "31416",
    TENBH: "DIGO OU NÃO DIGO",
    TACGIA: "João Gomes",
  },
  {
    MABH: "26630",
    TENBH: "DO YA",
    TACGIA: "McFly",
  },
  {
    MABH: "31424",
    TENBH: "EU GOSTO É DE PROBLEMA",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "31415",
    TENBH: "EU TE AMO TANTO (ESCRITO NAS ESTRELAS)",
    TACGIA: "Iguinho e Lulinha",
  },
  {
    MABH: "31413",
    TENBH: "EVENTO CANCELADO",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "26621",
    TENBH: "FEVER",
    TACGIA: "Dua Lipa, Angèle",
  },
  {
    MABH: "26625",
    TENBH: "HALF OF MY HEART",
    TACGIA: "John Mayer",
  },
  {
    MABH: "26622",
    TENBH: "I WANT LOVE",
    TACGIA: "Elton John",
  },
  {
    MABH: "26620",
    TENBH: "I'LL NEVER LOVE THIS WAY AGAIN",
    TACGIA: "Dionne Warwick",
  },
  {
    MABH: "26633",
    TENBH: "IMITATION OF LIFE",
    TACGIA: "R.E.M.",
  },
  {
    MABH: "26619",
    TENBH: "INSTANT CRUSH",
    TACGIA: "Daft Punk ft. Julian Casablancas",
  },
  {
    MABH: "26638",
    TENBH: "LALALA",
    TACGIA: "Y2K, bbno$",
  },
  {
    MABH: "26636",
    TENBH: "LAVENDER HAZE",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "31419",
    TENBH: "LEÃO",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "26615",
    TENBH: "LONELY IS THE NIGHT",
    TACGIA: "Air Supply",
  },
  {
    MABH: "26637",
    TENBH: "LOVE ME TWO TIMES",
    TACGIA: "The Doors",
  },
  {
    MABH: "26632",
    TENBH: "MADE YOU LOOK",
    TACGIA: "Meghan Trainor",
  },
  {
    MABH: "31414",
    TENBH: "MAIS AMOR E MENOS DRAMA",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "26616",
    TENBH: "MISUNDERSTOOD",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "31420",
    TENBH: "MORANGO DO NORDESTE",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "26629",
    TENBH: "MY LOVE",
    TACGIA: "Little Texas",
  },
  {
    MABH: "31417",
    TENBH: "NÃO SEI O QUE LÁ",
    TACGIA: "Maiara e Maraisa ft. Marília Mendonça",
  },
  {
    MABH: "31411",
    TENBH: "Ô LÁ NA ROÇA",
    TACGIA: "Felipe e Murilo ft. Ana Castela",
  },
  {
    MABH: "31406",
    TENBH: "POR QUE",
    TACGIA: "Cristiano Araújo",
  },
  {
    MABH: "31408",
    TENBH: "POUCO A POUCO",
    TACGIA: "Dilsinho ft. Sorriso Maroto",
  },
  {
    MABH: "31405",
    TENBH: "PRECISO ME ENCONTRAR",
    TACGIA: "Cartola",
  },
  {
    MABH: "31418",
    TENBH: "QUANDO TEM SENTIMENTO",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31421",
    TENBH: "RAPARIGA DIGITAL",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "26634",
    TENBH: "START ME UP",
    TACGIA: "Rolling Stones (The)",
  },
  {
    MABH: "26623",
    TENBH: "SUAVEMENTE",
    TACGIA: "Elvis Crespo",
  },
  {
    MABH: "26614",
    TENBH: "TAKE A CHANCE ON ME",
    TACGIA: "ABBA",
  },
  {
    MABH: "1756",
    TENBH: "TCHUBIRABIROM",
    TACGIA: "Parangolé",
  },
  {
    MABH: "26617",
    TENBH: "THESE DAYS",
    TACGIA: "Bon Jovi",
  },
  {
    MABH: "6391",
    TENBH: "TODO CARNAVAL TEM SEU FIM",
    TACGIA: "Los Hermanos",
  },
  {
    MABH: "9366",
    TENBH: "VOCÊ VAI ESTAR NA MINHA",
    TACGIA: "Negra Li",
  },
  {
    MABH: "26635",
    TENBH: "WHEN YOU SAY NOTHING AT ALL",
    TACGIA: "Ronan Keating",
  },
  {
    MABH: "26627",
    TENBH: "WIDE AWAKE",
    TACGIA: "Katy Perry",
  },
  {
    MABH: "26639",
    TENBH: "VOULEZ VOUS",
    TACGIA: "ABBA",
  },
  {
    MABH: "26640",
    TENBH: "LOVE IN THE DARK",
    TACGIA: "Adele",
  },
  {
    MABH: "26641",
    TENBH: "TE LO AGRADEZCO, PERO NO",
    TACGIA: "Alejandro Sanz ft. Shakira",
  },
  {
    MABH: "31426",
    TENBH: "PRESSENTIMENTO",
    TACGIA: "Amelinha",
  },
  {
    MABH: "31427",
    TENBH: "DONA DE MIM",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "26642",
    TENBH: "I WANNA BE YOURS",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "26643",
    TENBH: "ELLA Y YO",
    TACGIA: "Aventura ft. Don Omar",
  },
  {
    MABH: "26644",
    TENBH: "CUFF IT",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "31428",
    TENBH: "SE JOGA NO PASSINHO",
    TACGIA: "Brisa Star ft. Thiago Jhonathan",
  },
  {
    MABH: "31429",
    TENBH: "212",
    TACGIA: "Chefin",
  },
  {
    MABH: "26645",
    TENBH: "DO IT TO IT",
    TACGIA: "Cherish",
  },
  {
    MABH: "26646",
    TENBH: "YOU SPIN ME AROUND",
    TACGIA: "Dead or Alive",
  },
  {
    MABH: "31430",
    TENBH: "DO COPO EU VIM",
    TACGIA: "Diego e Victor Hugo ft. Marília Mendonça",
  },
  {
    MABH: "31431",
    TENBH: "MÉDIA BOA",
    TACGIA: "Felipe e Rodrigo",
  },
  {
    MABH: "31432",
    TENBH: "PRECE AO VENTO",
    TACGIA: "Fernando Mendes",
  },
  {
    MABH: "26647",
    TENBH: "LANDSLIDE",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "26648",
    TENBH: "MUSIC FOR A SUSHI RESTAURANT",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "26649",
    TENBH: "GRAVITY",
    TACGIA: "John Mayer",
  },
  {
    MABH: "31433",
    TENBH: "DEIXA EU FALAR PRA VOCÊ",
    TACGIA: "Josué Bom de Faixa",
  },
  {
    MABH: "26650",
    TENBH: "LENTO",
    TACGIA: "Julieta Venegas",
  },
  {
    MABH: "26651",
    TENBH: "ME VOY",
    TACGIA: "Julieta Venegas",
  },
  {
    MABH: "26652",
    TENBH: "GOLDEN HOUR",
    TACGIA: "JVKE",
  },
  {
    MABH: "31434",
    TENBH: "NOVINHA DO ONLYFANS (TCHAN RAN TCHAN TCHAN)",
    TACGIA: "Kadu Martins",
  },
  {
    MABH: "31435",
    TENBH: "AI PRETO",
    TACGIA: "L7nnon, Biel do Furduncinho",
  },
  {
    MABH: "26653",
    TENBH: "PARA NO VERTE MAS",
    TACGIA: "La Mosca Tsé-Tsé",
  },
  {
    MABH: "26654",
    TENBH: "GLORIA",
    TACGIA: "Laura Branigan",
  },
  {
    MABH: "31436",
    TENBH: "ZONA DE PERIGO",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "31437",
    TENBH: "MAMA.CITA (HASTA LA VISTA)",
    TACGIA: "Luísa Sonza ft. Xamã",
  },
  {
    MABH: "26655",
    TENBH: "MARIPOSA TRAICIONERA",
    TACGIA: "Maná",
  },
  {
    MABH: "31438",
    TENBH: "VIELA",
    TACGIA: "Marcynho Sensação",
  },
  {
    MABH: "26656",
    TENBH: "FLOWERS",
    TACGIA: "Miley Cyrus",
  },
  {
    MABH: "31439",
    TENBH: "PALHAÇA",
    TACGIA: "Naiara Azevedo ft. Ana Castela",
  },
  {
    MABH: "31440",
    TENBH: "LOVE GOSTOSINHO",
    TACGIA: "Nattan ft. Felipe Amorim",
  },
  {
    MABH: "31441",
    TENBH: "NUNCA MAIS",
    TACGIA: "Nattan, Xand Avião",
  },
  {
    MABH: "26657",
    TENBH: "SOLO QUÉDATE EN SILENCIO",
    TACGIA: "RBD",
  },
  {
    MABH: "31442",
    TENBH: "BOTADINHA SALIENTE",
    TACGIA: "Rogerinho",
  },
  {
    MABH: "26658",
    TENBH: "ANTOLOGIA",
    TACGIA: "Shakira",
  },
  {
    MABH: "26659",
    TENBH: "BZRP MUSIC SESSIONS #53",
    TACGIA: "Shakira",
  },
  {
    MABH: "26660",
    TENBH: "LAS DE LA INTUICIÓN",
    TACGIA: "Shakira",
  },
  {
    MABH: "26661",
    TENBH: "SUERTE (WHENEVER WHEREVER)",
    TACGIA: "Shakira",
  },
  {
    MABH: "31443",
    TENBH: "APERTE O PLAY",
    TACGIA: "Simone e Simaria",
  },
  {
    MABH: "26662",
    TENBH: "DE MÚSICA LIGERA",
    TACGIA: "Soda Stereo",
  },
  {
    MABH: "26663",
    TENBH: "SECRETS",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "31444",
    TENBH: "A TAL DA CANÇÃO PRA LUA",
    TACGIA: "Vitor Kley e Samuel Rosa ",
  },
  {
    MABH: "31445",
    TENBH: "FELINA",
    TACGIA: "WIU, MC Ryan SP",
  },
  {
    MABH: "31446",
    TENBH: "FACILITA AÍ",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "3361",
    TENBH: "VOCÊ ENDOIDECEU MEU CORAÇÃO",
    TACGIA: "Fagner",
  },
  {
    MABH: "3389",
    TENBH: "SEMPRE SERÁ",
    TACGIA: "Ara Ketu",
  },
  {
    MABH: "3874",
    TENBH: "EU NÃO SABIA QUE VOCÊ EXISTIA",
    TACGIA: "Leno e Lilian",
  },
  {
    MABH: "6180",
    TENBH: "HOMEM PRIMATA",
    TACGIA: "Titãs",
  },
  {
    MABH: "6395",
    TENBH: "UM BOM PERDEDOR",
    TACGIA: "Bruno e Marrone",
  },
  {
    MABH: "6539",
    TENBH: "MAIS UMA VEZ",
    TACGIA: "Renato Russo",
  },
  {
    MABH: "6728",
    TENBH: "DE BEM COM A VIDA",
    TACGIA: "Rionegro e Solimões",
  },
  {
    MABH: "9189",
    TENBH: "VIDEO KILLED THE RADIO STAR",
    TACGIA: "The Buggles",
  },
  {
    MABH: "26664",
    TENBH: "LAY ALL YOUR LOVE ON ME",
    TACGIA: "ABBA",
  },
  {
    MABH: "26665",
    TENBH: "BRAND NEW ME",
    TACGIA: "Alicia Keys",
  },
  {
    MABH: "26666",
    TENBH: "CAROLINE",
    TACGIA: "Aminé",
  },
  {
    MABH: "26667",
    TENBH: "SNAP OUT OF IT",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "31447",
    TENBH: "LOUCA MAGIA",
    TACGIA: "Beto Barbosa",
  },
  {
    MABH: "26668",
    TENBH: "PRETTY HURTS",
    TACGIA: "Beyonce",
  },
  {
    MABH: "26669",
    TENBH: "CAN'T BACK DOWN",
    TACGIA: "Camp Rock",
  },
  {
    MABH: "26670",
    TENBH: "STOP THIS FLAME",
    TACGIA: "Celeste",
  },
  {
    MABH: "26671",
    TENBH: "GOLD",
    TACGIA: "Chet Faker",
  },
  {
    MABH: "26672",
    TENBH: "JAPANESE DENIM",
    TACGIA: "Daniel Caesar",
  },
  {
    MABH: "26673",
    TENBH: "TIA TAMERA",
    TACGIA: "Doja Cat ft. Rico Nasty",
  },
  {
    MABH: "31448",
    TENBH: "VAQUEIRA",
    TACGIA: "Eric Land ft. Iguinho e Lulinha",
  },
  {
    MABH: "31449",
    TENBH: "CIDADE INTEIRA",
    TACGIA: "Eric Land ft. Xand Avião",
  },
  {
    MABH: "31450",
    TENBH: "TÁ NA CARA",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "26674",
    TENBH: "CRIMINAL",
    TACGIA: "Fiona Apple",
  },
  {
    MABH: "6767",
    TENBH: "CARA DE BOI",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "26675",
    TENBH: "HEARTBREAK ANNIVERSARY",
    TACGIA: "GIVĒON",
  },
  {
    MABH: "31451",
    TENBH: "CAFÉ E AMOR",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31452",
    TENBH: "SEU PERFIL",
    TACGIA: "Henrique e Juliano",
  },
  {
    MABH: "31453",
    TENBH: "BOMBONZINHO",
    TACGIA: "Israel e Rodolffo ft. Ana Castela",
  },
  {
    MABH: "31454",
    TENBH: "PERDOOU NADA",
    TACGIA: "Israel e Rodolffo ft. Jorge e Mateus",
  },
  {
    MABH: "26676",
    TENBH: "CHAINSMOKING",
    TACGIA: "Jacob Banks",
  },
  {
    MABH: "31455",
    TENBH: "NAMORA EU AÍ",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "26677",
    TENBH: "ROSAS",
    TACGIA: "La Oreja de Van Gogh",
  },
  {
    MABH: "31456",
    TENBH: "OI",
    TACGIA: "Lagum",
  },
  {
    MABH: "26678",
    TENBH: "NOBOBY'S LISTENING",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "31457",
    TENBH: "PISANDO DESCALÇO",
    TACGIA: "Maneva",
  },
  {
    MABH: "31458",
    TENBH: "OLHA, SE VOCÊ NÃO ME AMA",
    TACGIA: "Manoel Gomes ft. Tierry",
  },
  {
    MABH: "26679",
    TENBH: "EN EL 2000",
    TACGIA: "Natalia Lafourcade",
  },
  {
    MABH: "31459",
    TENBH: "CONDUTA",
    TACGIA: "Nattan ft. Mari Fernandez",
  },
  {
    MABH: "26680",
    TENBH: "ALL I WANT",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26681",
    TENBH: "THIS IS WHY",
    TACGIA: "Paramore",
  },
  {
    MABH: "26682",
    TENBH: "NI UNA SOLA PALABRA",
    TACGIA: "Paulina Rubio",
  },
  {
    MABH: "26683",
    TENBH: "MOTHER",
    TACGIA: "Pink Floyd",
  },
  {
    MABH: "26684",
    TENBH: "STAY",
    TACGIA: "Post Malone",
  },
  {
    MABH: "26685",
    TENBH: "HIGH AND DRY",
    TACGIA: "Radiohead",
  },
  {
    MABH: "31460",
    TENBH: "ERA EU",
    TACGIA: "Raí Saia Rodada",
  },
  {
    MABH: "6437",
    TENBH: "TÔ POR AÍ",
    TACGIA: "Rionegro e Solimões",
  },
  {
    MABH: "31461",
    TENBH: "NÃO TEM HORA E NEM LUGAR",
    TACGIA: "Rodriguinho",
  },
  {
    MABH: "31462",
    TENBH: "PARTILHAR",
    TACGIA: "Rubel, ANAVITÓRIA",
  },
  {
    MABH: "26686",
    TENBH: "TACONES ROJOS",
    TACGIA: "Sebastián Yatra",
  },
  {
    MABH: "26687",
    TENBH: "TRAICIONERA",
    TACGIA: "Sebastián Yatra",
  },
  {
    MABH: "31463",
    TENBH: "ERRO GOSTOSO",
    TACGIA: "Simone Mendes",
  },
  {
    MABH: "26688",
    TENBH: "AMOR A LA MEXICANA",
    TACGIA: "Thalía",
  },
  {
    MABH: "31464",
    TENBH: "LOVEZINHO",
    TACGIA: "Treyce",
  },
  {
    MABH: "31465",
    TENBH: "EU JÁ TAVA BEM",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "31466",
    TENBH: "CORAÇÃO DE GELO",
    TACGIA: "WIU",
  },
  {
    MABH: "31467",
    TENBH: "ROÇA EM MIM",
    TACGIA: "Zé Felipe, Ana Castela, Luan Pereira",
  },
  {
    MABH: "31468",
    TENBH: "COLADIN",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31469",
    TENBH: "EU ME RENDO",
    TACGIA: "Zé Vaqueiro ft. Iguinho e Lulinha",
  },
  {
    MABH: "26689",
    TENBH: "ALL I ASK",
    TACGIA: "Adele",
  },
  {
    MABH: "31470",
    TENBH: "O APOSTADOR",
    TACGIA: "Alanzim Coreano",
  },
  {
    MABH: "26690",
    TENBH: "STRONGER THAN ME",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "31471",
    TENBH: "NOSSO QUADRO",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "31472",
    TENBH: "GELEIRA DO TEMPO",
    TACGIA: "ANAVITÓRIA, Jorge e Mateus",
  },
  {
    MABH: "26691",
    TENBH: "HAPPIER THAN EVER",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "26692",
    TENBH: "SLEEPWALKING",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "26693",
    TENBH: "BODAK YELLOW",
    TACGIA: "Cardi B",
  },
  {
    MABH: "26694",
    TENBH: "AIN'T NOBODY",
    TACGIA: "Chaka Khan",
  },
  {
    MABH: "26695",
    TENBH: "UNDER THE INFLUENCE",
    TACGIA: "Chris Brown",
  },
  {
    MABH: "26696",
    TENBH: "PERO ME ACUERDO DE TÍ",
    TACGIA: "Christina Aguilera",
  },
  {
    MABH: "31473",
    TENBH: "AÍ EU CHOREI",
    TACGIA: "Clayton e Romario",
  },
  {
    MABH: "26697",
    TENBH: "I WILL FOLLOW YOU INTO THE DARK",
    TACGIA: "Death Cab For Cutie",
  },
  {
    MABH: "26698",
    TENBH: "BOYFRIEND",
    TACGIA: "Dove Cameron",
  },
  {
    MABH: "31474",
    TENBH: "AMERICANA NA VAQUEJADA",
    TACGIA: "Grandão Vaqueiro",
  },
  {
    MABH: "26699",
    TENBH: "I WANT IT ALL",
    TACGIA: "High School Musical",
  },
  {
    MABH: "26700",
    TENBH: "MOVEMENT",
    TACGIA: "Hozier",
  },
  {
    MABH: "31475",
    TENBH: "AMOR E FÉ",
    TACGIA: "Hungria Hip Hop",
  },
  {
    MABH: "31476",
    TENBH: "SEU BRILHO SUMIU",
    TACGIA: "Israel e Rodolffo ft. Mari Fernandez",
  },
  {
    MABH: "31477",
    TENBH: "PILANTRA",
    TACGIA: "Jão ft. Anitta",
  },
  {
    MABH: "31478",
    TENBH: "NÃO VALE MAIS CHORAR POR ELE",
    TACGIA: "Japãozin",
  },
  {
    MABH: "26701",
    TENBH: "TATUAJES",
    TACGIA: "Joan Sebastián",
  },
  {
    MABH: "31479",
    TENBH: "NÃO MANDA ÁUDIO",
    TACGIA: "João Gomes, MC Ryan SP",
  },
  {
    MABH: "26702",
    TENBH: "ISSUES",
    TACGIA: "Julia Michaels",
  },
  {
    MABH: "26703",
    TENBH: "TQG",
    TACGIA: "Karol G, Shakira",
  },
  {
    MABH: "6906",
    TENBH: "COPO DE VINHO",
    TACGIA: "Leandro e Leonardo",
  },
  {
    MABH: "26704",
    TENBH: "WHAT YOU DON'T DO",
    TACGIA: "Lianne La Havas",
  },
  {
    MABH: "26705",
    TENBH: "NUNCA ES SUFICIENTE",
    TACGIA: "Los Angeles Azules ft. Natalia Lafourcade",
  },
  {
    MABH: "31480",
    TENBH: "ELA PIROU NA DODGE RAM",
    TACGIA: "Luan Pereira ft. MC Ryan SP",
  },
  {
    MABH: "31481",
    TENBH: "HAJA AMOR",
    TACGIA: "Luiz Caldas",
  },
  {
    MABH: "31482",
    TENBH: "CHEIRO DA KAROLINA",
    TACGIA: "Luiz Poderoso Chefão",
  },
  {
    MABH: "31483",
    TENBH: "CORAÇÃO BANDIDO",
    TACGIA: "Marília Mendonça ft. Maiara e Maraisa",
  },
  {
    MABH: "31484",
    TENBH: "NEM DOEU",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "31485",
    TENBH: "085",
    TACGIA: "MC Rogerinho",
  },
  {
    MABH: "31486",
    TENBH: "CHORA NO MEU COLO",
    TACGIA: "Naiara Azevedo",
  },
  {
    MABH: "26706",
    TENBH: "HASTA LA RAÍZ",
    TACGIA: "Natalia Lafourcade",
  },
  {
    MABH: "26707",
    TENBH: "UNDERNEATH IT ALL",
    TACGIA: "No Doubt ft. Lady Saw",
  },
  {
    MABH: "26708",
    TENBH: "MISSISSIPPI",
    TACGIA: "Pussycat",
  },
  {
    MABH: "26709",
    TENBH: "BEST FRIEND",
    TACGIA: "Rex Orange County",
  },
  {
    MABH: "26710",
    TENBH: "LA FAMA",
    TACGIA: "Rosalía FT. The Weeknd",
  },
  {
    MABH: "31487",
    TENBH: "QUANDO BATE AQUELA SAUDADE",
    TACGIA: "Rubel",
  },
  {
    MABH: "6345",
    TENBH: "QUANDO VOCÊ PASSA (TURU TURU)",
    TACGIA: "Sandy e Junior",
  },
  {
    MABH: "31488",
    TENBH: "ANTES DE IR",
    TACGIA: "Taty Pink ft. Romeu",
  },
  {
    MABH: "26711",
    TENBH: "MASTER EXPLODER",
    TACGIA: "Tenacious D",
  },
  {
    MABH: "26712",
    TENBH: "POD",
    TACGIA: "Tenacious D",
  },
  {
    MABH: "31489",
    TENBH: "LUGAR NENHUM",
    TACGIA: "Titãs",
  },
  {
    MABH: "26713",
    TENBH: "RUNS THROUGH ME",
    TACGIA: "Tom Misch",
  },
  {
    MABH: "6551",
    TENBH: "SEM QUERER",
    TACGIA: "Wanessa Camargo",
  },
  {
    MABH: "31490",
    TENBH: "LEÃO",
    TACGIA: "Xamã ft. Marília Mendonça",
  },
  {
    MABH: "31491",
    TENBH: "OI BALDE",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "26714",
    TENBH: "MISS MURDER",
    TACGIA: "AFI",
  },
  {
    MABH: "31492",
    TENBH: "NUNCA TEVE UM AMIGO ASSIM",
    TACGIA: "Aladdin",
  },
  {
    MABH: "26715",
    TENBH: "ANIMALS",
    TACGIA: "Architect",
  },
  {
    MABH: "26716",
    TENBH: "ONE OF US",
    TACGIA: "Ava Max",
  },
  {
    MABH: "31493",
    TENBH: "CARTA BRANCA",
    TACGIA: "Banda Magníficos",
  },
  {
    MABH: "26717",
    TENBH: "ALL NIGHT",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "26718",
    TENBH: "CAN YOU FEEL MY HEART",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "26719",
    TENBH: "DANCING ON MY OWN",
    TACGIA: "Calum Scott",
  },
  {
    MABH: "26720",
    TENBH: "ADIOS AMOR",
    TACGIA: "Christian Nodal",
  },
  {
    MABH: "26721",
    TENBH: "HEATHER",
    TACGIA: "Conan Gray",
  },
  {
    MABH: "26722",
    TENBH: "BEST PART",
    TACGIA: "Daniel Caesar ft. H.E.R.",
  },
  {
    MABH: "26723",
    TENBH: "NEVER LET ME DOWN AGAIN",
    TACGIA: "Depeche Mode",
  },
  {
    MABH: "31494",
    TENBH: "DIGA SIM PRA MIM",
    TACGIA: "Desejo de Menina",
  },
  {
    MABH: "26724",
    TENBH: "COOL",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26725",
    TENBH: "LAST TRAIN TO LONDON",
    TACGIA: "Electric Light Orchestra\n",
  },
  {
    MABH: "31495",
    TENBH: "NEM UMA CARTA",
    TACGIA: "Evoney Fernandes",
  },
  {
    MABH: "31496",
    TENBH: "DESEJO IMORTAL",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "31497",
    TENBH: "OI DEUS",
    TACGIA: "Hugo e Guilherme",
  },
  {
    MABH: "31498",
    TENBH: "TEMPORAL",
    TACGIA: "Hungria Hip Hop",
  },
  {
    MABH: "26726",
    TENBH: "RAINY DAY",
    TACGIA: "Ice Nine Kills",
  },
  {
    MABH: "31499",
    TENBH: "POR VOCÊ EU BEBO O MAR DE CANUDINHO",
    TACGIA: "Jaldo Rodrigues",
  },
  {
    MABH: "4476",
    TENBH: "FEITIO DE PAIXÃO",
    TACGIA: "Jorge Aragão",
  },
  {
    MABH: "26727",
    TENBH: "HEAVEN",
    TACGIA: "Julia Michaels",
  },
  {
    MABH: "26728",
    TENBH: "HOW DO I LIVE",
    TACGIA: "LeAnn Rimes",
  },
  {
    MABH: "31500",
    TENBH: "MENINOS E MENINAS",
    TACGIA: "Legião Urbana",
  },
  {
    MABH: "26729",
    TENBH: "ROOM IN YOUR HEART (C/ BACKING VOCALS)",
    TACGIA: "Living In A Box",
  },
  {
    MABH: "31501",
    TENBH: "CHORANDO NO CAMPO",
    TACGIA: "Lobão",
  },
  {
    MABH: "26730",
    TENBH: "OVER",
    TACGIA: "Lucky Daye",
  },
  {
    MABH: "31502",
    TENBH: "NÃO, NÃO VOU (PASSA LÁ EM CASA)",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31503",
    TENBH: "DEIXA EU VIVER",
    TACGIA: "Mari Fernandez ft. Luísa Sonza",
  },
  {
    MABH: "31504",
    TENBH: "CUMBIA DO AMOR",
    TACGIA: "Marília Mendonça",
  },
  {
    MABH: "31505",
    TENBH: "BASIQUINHO",
    TACGIA: "Matheus e Kauan",
  },
  {
    MABH: "31506",
    TENBH: "LUZ DO LUAR",
    TACGIA: "MC Tato ft. Gabb MC",
  },
  {
    MABH: "26731",
    TENBH: "IT'S GONNA BE ME",
    TACGIA: "N' Sync",
  },
  {
    MABH: "31507",
    TENBH: "DUAS",
    TACGIA: "Nadson, O Ferinha",
  },
  {
    MABH: "7688",
    TENBH: "QUERO SER FELIZ TAMBÉM",
    TACGIA: "Natiruts",
  },
  {
    MABH: "26732",
    TENBH: "FAKE HAPPY",
    TACGIA: "Paramore",
  },
  {
    MABH: "31508",
    TENBH: "E NÃO VOU MAIS DEIXAR VOCÊ TÃO SÓ",
    TACGIA: "Raça Negra",
  },
  {
    MABH: "7439",
    TENBH: "SAÚDE",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "26733",
    TENBH: "NOTHING CAN COME BETWEEN US",
    TACGIA: "Sade",
  },
  {
    MABH: "26734",
    TENBH: "MONSTER",
    TACGIA: "Skillet",
  },
  {
    MABH: "9508",
    TENBH: "PARAÍSO PROIBIDO",
    TACGIA: "Strike",
  },
  {
    MABH: "26735",
    TENBH: "I-E-A-I-A-I-O",
    TACGIA: "System of a Down",
  },
  {
    MABH: "26736",
    TENBH: "EL PRÓXIMO VIERNES",
    TACGIA: "Thalía",
  },
  {
    MABH: "31509",
    TENBH: "CHOVENDO NA MINHA BOCHECHA",
    TACGIA: "Tierry ft. Jorge",
  },
  {
    MABH: "26737",
    TENBH: "ANOTHER LOVE",
    TACGIA: "Tom Odell",
  },
  {
    MABH: "26738",
    TENBH: "DON'T YOU WORRY 'BOUT A THING",
    TACGIA: "Tori Kelly",
  },
  {
    MABH: "31510",
    TENBH: "COBERTOR DE ORELHA",
    TACGIA: "Turma do Pagode",
  },
  {
    MABH: "31511",
    TENBH: "COVARDIA",
    TACGIA: "Wesley Safadão ft. Ana Castela",
  },
  {
    MABH: "31512",
    TENBH: "VACILÃO",
    TACGIA: "Zé Felipe ft. Wesley Safadão, Igow",
  },
  {
    MABH: "31513",
    TENBH: "CARINHA DE BEBÊ",
    TACGIA: "Ana Castela ft. Pedro Sampaio",
  },
  {
    MABH: "7365",
    TENBH: "FOLHA DE BANANEIRA",
    TACGIA: "Armandinho",
  },
  {
    MABH: "31514",
    TENBH: "ME DESCULPA JAY-Z",
    TACGIA: "Baco Exu do Blues ft. 1LUM3",
  },
  {
    MABH: "26739",
    TENBH: "LONELY IS THE NIGHT",
    TACGIA: "Billy Squier",
  },
  {
    MABH: "26740",
    TENBH: "LOVE'S TRAIN",
    TACGIA: "Bruno Mars, Anderson .Paak & Silk Sonic",
  },
  {
    MABH: "31515",
    TENBH: "O CORO VAI COMÊ",
    TACGIA: "Charlie Brown Jr.",
  },
  {
    MABH: "26741",
    TENBH: "TALK IS CHEAP",
    TACGIA: "Chet Faker",
  },
  {
    MABH: "26742",
    TENBH: "SAY IT ISN'T SO",
    TACGIA: "Daryl Hall & John Oates",
  },
  {
    MABH: "26743",
    TENBH: "AIN'T SHIT",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26744",
    TENBH: "SATURDAY NIGHT'S ALRIGHT (FOR FIGHTING)",
    TACGIA: "Elton John",
  },
  {
    MABH: "6741",
    TENBH: "O PAPA É POP",
    TACGIA: "Engenheiros do Hawaii",
  },
  {
    MABH: "31516",
    TENBH: "INCONFORMADO",
    TACGIA: "Exaltassamba",
  },
  {
    MABH: "31517",
    TENBH: "VAI SENTIR FALTA DE MIM",
    TACGIA: "Fabinho Testado ft. Iguinho e Lulinha",
  },
  {
    MABH: "26745",
    TENBH: "CUPID (TWIN VER.)",
    TACGIA: "FIFTY FIFTY (피프티피프티)",
  },
  {
    MABH: "26746",
    TENBH: "EVERLONG (ACOUSTIC VERSION)",
    TACGIA: "Foo Fighters",
  },
  {
    MABH: "31518",
    TENBH: "CHOREI CHOREI",
    TACGIA: "Gino e Geno",
  },
  {
    MABH: "31519",
    TENBH: "ESSE B.O É MEU",
    TACGIA: "Guilherme e Benuto, Matheus e Kauan",
  },
  {
    MABH: "26747",
    TENBH: "USED TO LOVE HER",
    TACGIA: "Guns N' Roses",
  },
  {
    MABH: "31520",
    TENBH: "TE AMAR, TE AMAR",
    TACGIA: "Iguinho e Lulinha",
  },
  {
    MABH: "26748",
    TENBH: "I HATE MYSELF FOR LOVING YOU",
    TACGIA: "Joan Jett & The Blackhearts",
  },
  {
    MABH: "31521",
    TENBH: "VOCÊ QUE ME MUDOU",
    TACGIA: "João Gomes ft. Vitor Fernandes",
  },
  {
    MABH: "31522",
    TENBH: "SE EU PEDIR CÊ VOLTA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31523",
    TENBH: "RANKING",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "31524",
    TENBH: "JULIETA",
    TACGIA: "k a m a i t a c h i",
  },
  {
    MABH: "26749",
    TENBH: "BABOOSHKA",
    TACGIA: "Kate Bush",
  },
  {
    MABH: "2785",
    TENBH: "CARA ESTRANHA",
    TACGIA: "Los Hermanos",
  },
  {
    MABH: "26750",
    TENBH: "I'D RATHER",
    TACGIA: "Luther Vandross",
  },
  {
    MABH: "31525",
    TENBH: "A CULPA É NOSSA",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "31526",
    TENBH: "MATUTO DE VERDADE",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "26751",
    TENBH: "ME GUSTAS TU",
    TACGIA: "Manu Chao",
  },
  {
    MABH: "31527",
    TENBH: "CÃO SEM DONO",
    TACGIA: "Mari Fernandez",
  },
  {
    MABH: "31528",
    TENBH: "FROUXO",
    TACGIA: "Mari Fernandez ft. Maiara e Maraisa",
  },
  {
    MABH: "31529",
    TENBH: "DESERTO",
    TACGIA: "Maria Marçal",
  },
  {
    MABH: "26752",
    TENBH: "THOT SHIT",
    TACGIA: "Megan Thee Stalion",
  },
  {
    MABH: "26753",
    TENBH: "TU FALTA DE QUERER",
    TACGIA: "Mon Laferte",
  },
  {
    MABH: "9633",
    TENBH: "CARTAS PARA VOCÊ",
    TACGIA: "NX Zero",
  },
  {
    MABH: "26754",
    TENBH: "FAVORITE CRIME",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26755",
    TENBH: "LOVE IS A BATTLEFIELD",
    TACGIA: "Pat Benatar",
  },
  {
    MABH: "26756",
    TENBH: "BECAUSE THE NIGHT",
    TACGIA: "Patti Smith",
  },
  {
    MABH: "31530",
    TENBH: "RECOMEÇAR",
    TACGIA: "Poesia Acústica 10",
  },
  {
    MABH: "26757",
    TENBH: "MAKE YOU MINE",
    TACGIA: "PUBLIC",
  },
  {
    MABH: "7642",
    TENBH: "MUTANTE",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "26758",
    TENBH: "SNUFF",
    TACGIA: "Slipknot",
  },
  {
    MABH: "26759",
    TENBH: "WILLOW",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "26760",
    TENBH: "CHERRY BOMB",
    TACGIA: "The Runaways",
  },
  {
    MABH: "26761",
    TENBH: "THE BOY WITH THE THORN IN HIS SIDE",
    TACGIA: "The Smiths",
  },
  {
    MABH: "26762",
    TENBH: "IS THERE SOMEONE ELSE",
    TACGIA: "The Weeknd",
  },
  {
    MABH: "26763",
    TENBH: "MESSAGE MAN",
    TACGIA: "Twenty One Pilots",
  },
  {
    MABH: "31531",
    TENBH: "SAUDADE E SOLIDÃO",
    TACGIA: "Vitor Fernandes",
  },
  {
    MABH: "31532",
    TENBH: "VOU TE AMAR",
    TACGIA: "Vitor Fernandes",
  },
  {
    MABH: "26764",
    TENBH: "SLIPPING THROUGH MY FINGERS",
    TACGIA: "ABBA",
  },
  {
    MABH: "26765",
    TENBH: "CRYIN'",
    TACGIA: "Aerosmith",
  },
  {
    MABH: "31533",
    TENBH: "FAZER AMOR CONTIGO",
    TACGIA: "Alberto Moreno",
  },
  {
    MABH: "31534",
    TENBH: "SOLTEIRO FORÇADO",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "31535",
    TENBH: "QUEM NÃO TE QUER SOU EU",
    TACGIA: "Banda Sayonara",
  },
  {
    MABH: "26766",
    TENBH: "I GET AROUND",
    TACGIA: "Beach Boys (The)",
  },
  {
    MABH: "26767",
    TENBH: "POISON",
    TACGIA: "Bell Biv DeVoe",
  },
  {
    MABH: "26768",
    TENBH: "NOT STRONG ENOUGH",
    TACGIA: "boygenius",
  },
  {
    MABH: "26769",
    TENBH: "WAP",
    TACGIA: "Cardi B ft. Megan Thee Stalion",
  },
  {
    MABH: "26770",
    TENBH: "IT'S ALL COMING BACK TO ME NOW",
    TACGIA: "Celine Dion",
  },
  {
    MABH: "31536",
    TENBH: "XERETA",
    TACGIA: "Claudinho e Buchecha",
  },
  {
    MABH: "26771",
    TENBH: "GROOVE IS IN THE HEART",
    TACGIA: "Deee-Lite",
  },
  {
    MABH: "26772",
    TENBH: "SUBSTANCE",
    TACGIA: "Demi Lovato",
  },
  {
    MABH: "26773",
    TENBH: "RAINBOW IN THE DARK",
    TACGIA: "Dio",
  },
  {
    MABH: "26774",
    TENBH: "BREAKFAST",
    TACGIA: "Dove Cameron",
  },
  {
    MABH: "26775",
    TENBH: "ALWAYS ON MY MIND",
    TACGIA: "Elvis Presley",
  },
  {
    MABH: "31537",
    TENBH: "CHOREI NA VAQUEJADA",
    TACGIA: "Eric Land ft. Tarcísio do Acordeon",
  },
  {
    MABH: "31538",
    TENBH: "SAUDADE DA MINHA VIDA",
    TACGIA: "Gusttavo Lima",
  },
  {
    MABH: "26776",
    TENBH: "WANT YOU BACK",
    TACGIA: "Haim",
  },
  {
    MABH: "3476",
    TENBH: "MINHA ESTRELA PERDIDA",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "26777",
    TENBH: "WATCHING THE WHEELS",
    TACGIA: "John Lennon",
  },
  {
    MABH: "31539",
    TENBH: "ME AME MAIS",
    TACGIA: "Jorge e Mateus ft. Marília Mendonça",
  },
  {
    MABH: "31540",
    TENBH: "HALLS NA LÍNGUA",
    TACGIA: "Kadu Martins",
  },
  {
    MABH: "26778",
    TENBH: "MOONLIGHT",
    TACGIA: "Kali Uchis",
  },
  {
    MABH: "6340",
    TENBH: "NADA TANTO ASSIM",
    TACGIA: "Kid Abelha",
  },
  {
    MABH: "26779",
    TENBH: "I LIKE ME BETTER",
    TACGIA: "Lauv",
  },
  {
    MABH: "6621",
    TENBH: "NADA MUDOU",
    TACGIA: "Léo Jaime",
  },
  {
    MABH: "31541",
    TENBH: "POSTURADO E CALMO",
    TACGIA: "Léo Santana",
  },
  {
    MABH: "31542",
    TENBH: "MOLETOM",
    TACGIA: "Luan Pereira ft. Gustavo Mioto",
  },
  {
    MABH: "31543",
    TENBH: "FLORES",
    TACGIA: "Luísa Sonza, Vitão",
  },
  {
    MABH: "31544",
    TENBH: "NUNCA",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "31545",
    TENBH: "PARA DE ME CHAMAR PRA TRAIR",
    TACGIA: "Maiara e Maraisa ft. Marília Mendonça",
  },
  {
    MABH: "31546",
    TENBH: "LOVE LOVE",
    TACGIA: "Melody, Naldo Benny",
  },
  {
    MABH: "26780",
    TENBH: "GIRLS, GIRLS, GIRLS",
    TACGIA: "Mötley Crüe",
  },
  {
    MABH: "31547",
    TENBH: "NÃO DIGITA",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "31548",
    TENBH: "OI BALDE",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "26781",
    TENBH: "VAMPIRE",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "26782",
    TENBH: "READY TO GO",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26783",
    TENBH: "SIRENS",
    TACGIA: "Pearl Jam",
  },
  {
    MABH: "26784",
    TENBH: "EVEN A FOOL CAN SEE",
    TACGIA: "Peter Cetera",
  },
  {
    MABH: "4270",
    TENBH: "EU TE DAREI O CÉU",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "26785",
    TENBH: "FOR YOUR BABIES",
    TACGIA: "Simply Red",
  },
  {
    MABH: "31549",
    TENBH: "IMATURIDADE",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "31550",
    TENBH: "GRANDE HOMEM",
    TACGIA: "Tarzan (Disney)",
  },
  {
    MABH: "26786",
    TENBH: "TO BUILD A HOME",
    TACGIA: "The Cinematic Orchestra",
  },
  {
    MABH: "26787",
    TENBH: "I WAS NEVER THERE",
    TACGIA: "The Weeknd ft. Gesaffelstein",
  },
  {
    MABH: "31551",
    TENBH: "ERRO QUE DÁ CERTO",
    TACGIA: "Thiago Aquino",
  },
  {
    MABH: "26788",
    TENBH: "NO ONE DIES FOR LOVE",
    TACGIA: "Tove Lo",
  },
  {
    MABH: "16529",
    TENBH: "TRAFICANTE DO AMOR",
    TACGIA: "Wanderley Andrade",
  },
  {
    MABH: "31552",
    TENBH: "ME BLOQUEIA",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "31553",
    TENBH: "AI, AMOR",
    TACGIA: "ANAVITÓRIA",
  },
  {
    MABH: "26789",
    TENBH: "ALMOST IS NEVER ENOUGH",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "26790",
    TENBH: "COUNTDOWN",
    TACGIA: "Beyonce",
  },
  {
    MABH: "26791",
    TENBH: "SUNNY",
    TACGIA: "Boney M",
  },
  {
    MABH: "26792",
    TENBH: "THIS IS ME",
    TACGIA: "Camp Rock",
  },
  {
    MABH: "3561",
    TENBH: "DOUTOR",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "31554",
    TENBH: "NADA CONTRA (CIÚMES)",
    TACGIA: "Clarissa",
  },
  {
    MABH: "31555",
    TENBH: "MEU PENSAMENTO",
    TACGIA: "Corpo e Alma",
  },
  {
    MABH: "26793",
    TENBH: "ZIGGY STARDUST",
    TACGIA: "David Bowie",
  },
  {
    MABH: "31556",
    TENBH: "TÁ OK",
    TACGIA: "Dennis, Kevin o Chris",
  },
  {
    MABH: "26794",
    TENBH: "VOYAGE VOYAGE",
    TACGIA: "Desireless",
  },
  {
    MABH: "31557",
    TENBH: "BEIJO DE GLICOSE",
    TACGIA: "Diego e Victor Hugo ft. Jorge e Mateus",
  },
  {
    MABH: "26795",
    TENBH: "LAST DANCE",
    TACGIA: "Donna Summer",
  },
  {
    MABH: "26796",
    TENBH: "MR. BLUE SKY",
    TACGIA: "Electric Light Orchestra",
  },
  {
    MABH: "4311",
    TENBH: "EU NÃO VOU",
    TACGIA: "Fat Family",
  },
  {
    MABH: "26797",
    TENBH: "DEMONS",
    TACGIA: "Fatboy Slim ft. Macy Gray",
  },
  {
    MABH: "31558",
    TENBH: "SE TÁ SOLTEIRA",
    TACGIA: "FBC, VHOOR e Mac Júlia",
  },
  {
    MABH: "31559",
    TENBH: "EU NÃO SOU DE ME ENTREGAR",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "4446",
    TENBH: "NOSSO GRITO",
    TACGIA: "Fundo de Quintal",
  },
  {
    MABH: "31560",
    TENBH: "ME ATRAIU",
    TACGIA: "Gabriela Rocha",
  },
  {
    MABH: "31561",
    TENBH: "XIRLEY",
    TACGIA: "Gaby Amarantos",
  },
  {
    MABH: "26798",
    TENBH: "LIKE I WANT YOU",
    TACGIA: "Giveon",
  },
  {
    MABH: "26799",
    TENBH: "LONGVIEW",
    TACGIA: "Green Day",
  },
  {
    MABH: "26800",
    TENBH: "UN X100TO",
    TACGIA: "Grupo Frontera, Bad Bunny",
  },
  {
    MABH: "26801",
    TENBH: "SUPERWOMAN",
    TACGIA: "Happening",
  },
  {
    MABH: "31562",
    TENBH: "DIFERENTE DAS DIFERENTES",
    TACGIA: "Japãozin, Nattan",
  },
  {
    MABH: "31563",
    TENBH: "ALÍVIO",
    TACGIA: "Jessé Aguiar",
  },
  {
    MABH: "31564",
    TENBH: "PRA QUE FUI ME APAIXONAR",
    TACGIA: "João Gomes ft. Iguinho e Lulinha",
  },
  {
    MABH: "26802",
    TENBH: "SLOW DANCING IN A BURNING ROOM",
    TACGIA: "John Mayer",
  },
  {
    MABH: "31565",
    TENBH: "TRETA",
    TACGIA: "Jorge e Mateus",
  },
  {
    MABH: "26803",
    TENBH: "NO MORE SORROW",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "26804",
    TENBH: "PUSHING ME AWAY",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "26805",
    TENBH: "I FOLLOW RIVERS (THE MAGICIAN REMIX)",
    TACGIA: "Lykke Li",
  },
  {
    MABH: "31566",
    TENBH: "NARCISISTA",
    TACGIA: "Maiara e Maraisa",
  },
  {
    MABH: "31567",
    TENBH: "UMA COISA NOVA",
    TACGIA: "Maria Marçal",
  },
  {
    MABH: "31568",
    TENBH: "GOL BOLINHA, GOL QUADRADO 2",
    TACGIA: "MC Pedrinho",
  },
  {
    MABH: "31569",
    TENBH: "CADÊ SEU NAMORADO MOÇA",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "31570",
    TENBH: "QUEM É O LOUCO ENTRE NÓS",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "26806",
    TENBH: "COME HOME",
    TACGIA: "One Republic",
  },
  {
    MABH: "1553",
    TENBH: "FALADOR PASSA MAL",
    TACGIA: "Os Originais do Samba",
  },
  {
    MABH: "31571",
    TENBH: "E AÍ, BÊ",
    TACGIA: "Pablo",
  },
  {
    MABH: "26807",
    TENBH: "EVERYDAY",
    TACGIA: "Phil Collins",
  },
  {
    MABH: "26808",
    TENBH: "GET THE PARTY STARTED",
    TACGIA: "Pink",
  },
  {
    MABH: "26809",
    TENBH: "XS",
    TACGIA: "Rina Sawayama",
  },
  {
    MABH: "26810",
    TENBH: "SNAP",
    TACGIA: "Rosa Linn",
  },
  {
    MABH: "26811",
    TENBH: "VERMILION PT. 2",
    TACGIA: "Slipknot",
  },
  {
    MABH: "26812",
    TENBH: "STRAWBERRY FIELDS FOREVER",
    TACGIA: "The Beatles",
  },
  {
    MABH: "26813",
    TENBH: "LOVESONG",
    TACGIA: "The Cure",
  },
  {
    MABH: "16222",
    TENBH: "FAMÍLIA",
    TACGIA: "Titãs",
  },
  {
    MABH: "31572",
    TENBH: "NÃO VALEU",
    TACGIA: "Wesley Safadão",
  },
  {
    MABH: "31573",
    TENBH: "TÔ VOLTANDO",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "26814",
    TENBH: "SUCK IT AND SEE",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "26815",
    TENBH: "SAIL",
    TACGIA: "AWOLNATION",
  },
  {
    MABH: "31574",
    TENBH: "DESEJOS",
    TACGIA: "Banda Sayonara",
  },
  {
    MABH: "7041",
    TENBH: "A BELEZA É VOCÊ MENINA",
    TACGIA: "Bebeto",
  },
  {
    MABH: "26816",
    TENBH: "WONDERFUL LIFE",
    TACGIA: "Black",
  },
  {
    MABH: "26817",
    TENBH: "FINESSE",
    TACGIA: "Bruno Mars",
  },
  {
    MABH: "26818",
    TENBH: "STRANGE",
    TACGIA: "Celeste",
  },
  {
    MABH: "26819",
    TENBH: "NO DIGGITY",
    TACGIA: "Chet Faker",
  },
  {
    MABH: "26820",
    TENBH: "I WANT YOUR LOVE",
    TACGIA: "Chic",
  },
  {
    MABH: "3562",
    TENBH: "DOWNTOWN",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "26821",
    TENBH: "WHEN YOUR HEART IS WEAK",
    TACGIA: "Cock Robin",
  },
  {
    MABH: "26822",
    TENBH: "LOOK AT US NOW",
    TACGIA: "Daisy Jones & The Six",
  },
  {
    MABH: "6029",
    TENBH: "QUANDO O CORAÇÃO SE APAIXONA",
    TACGIA: "Daniel",
  },
  {
    MABH: "26823",
    TENBH: "NO_SE_VE.MP3",
    TACGIA: "Emilia, Ludmilla, Zecca",
  },
  {
    MABH: "31575",
    TENBH: "TOCA O TROMPETE",
    TACGIA: "Felipe Amorim",
  },
  {
    MABH: "26824",
    TENBH: "SEVEN WONDERS",
    TACGIA: "Fleetwood Mac",
  },
  {
    MABH: "26825",
    TENBH: "JESUS HE KNOWS ME",
    TACGIA: "Genesis",
  },
  {
    MABH: "26826",
    TENBH: "GOT MY MIND SET ON YOU",
    TACGIA: "George Harrison",
  },
  {
    MABH: "26827",
    TENBH: "SHAKE YOU DOWN",
    TACGIA: "Gregory Abbott",
  },
  {
    MABH: "3325",
    TENBH: "FLAGRANTE",
    TACGIA: "Grupo Sampa",
  },
  {
    MABH: "31576",
    TENBH: "CANUDINHO",
    TACGIA: "Gusttavo Lima ft. Ana Castela",
  },
  {
    MABH: "31577",
    TENBH: "MALA DOS PORTA-MALA",
    TACGIA: "Gusttavo Lima ft. Matheus e Kauan",
  },
  {
    MABH: "26828",
    TENBH: "CARRY YOU HOME",
    TACGIA: "James Blunt",
  },
  {
    MABH: "31578",
    TENBH: "ME BEIJA COM RAIVA",
    TACGIA: "Jão",
  },
  {
    MABH: "26829",
    TENBH: "PEACHES",
    TACGIA: "Justin Bieber ft. Daniel Caesar, GIVĒON",
  },
  {
    MABH: "26830",
    TENBH: "BLEED IT OUT",
    TACGIA: "Linkin Park",
  },
  {
    MABH: "26831",
    TENBH: "FUNKYTOWN",
    TACGIA: "Lipps Inc.",
  },
  {
    MABH: "31579",
    TENBH: "CHICO",
    TACGIA: "Luísa Sonza",
  },
  {
    MABH: "31580",
    TENBH: "PENHASCO2",
    TACGIA: "Luísa Sonza ft. Demi Lovato",
  },
  {
    MABH: "26832",
    TENBH: "CHAMBER OF REFLECTION",
    TACGIA: "Mac DeMarco",
  },
  {
    MABH: "31581",
    TENBH: "ME USA",
    TACGIA: "Mariana Fagundes, Kevi Jonny",
  },
  {
    MABH: "6052",
    TENBH: "CASA DE BAMBA",
    TACGIA: "Martinho da Vila",
  },
  {
    MABH: "31582",
    TENBH: "RAP DO SOLITÁRIO",
    TACGIA: "MC Marcinho",
  },
  {
    MABH: "31583",
    TENBH: "REI LACOSTE",
    TACGIA: "MD Chefe ft. DomLaike",
  },
  {
    MABH: "31584",
    TENBH: "PEÇA FELICIDADE",
    TACGIA: "Melim",
  },
  {
    MABH: "31585",
    TENBH: "SETE BILHÕES",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "26833",
    TENBH: "1 STEP FORWARD, 3 STEPS BACK",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "31586",
    TENBH: "TOMARA",
    TACGIA: "Pablo",
  },
  {
    MABH: "31587",
    TENBH: "COSTUMES IGUAIS",
    TACGIA: "Péricles",
  },
  {
    MABH: "31588",
    TENBH: "DOIS RIVAIS",
    TACGIA: "Péricles ft. Hellen Caroline",
  },
  {
    MABH: "26834",
    TENBH: "ALIVE AND KICKING",
    TACGIA: "Simple Minds",
  },
  {
    MABH: "26835",
    TENBH: "I'M JUST A KID",
    TACGIA: "Simple Plan",
  },
  {
    MABH: "31589",
    TENBH: "É TANTA",
    TACGIA: "Só Preto Sem Preconceito",
  },
  {
    MABH: "26836",
    TENBH: "KILL BILL",
    TACGIA: "SZA",
  },
  {
    MABH: "31590",
    TENBH: "ESTRANHOS COMO EU",
    TACGIA: "Tarzan",
  },
  {
    MABH: "31591",
    TENBH: "TELEVISÃO",
    TACGIA: "Titãs",
  },
  {
    MABH: "26837",
    TENBH: "EARFQUAKE",
    TACGIA: "Tyler, The Creator",
  },
  {
    MABH: "26838",
    TENBH: "DON'T STOP THE MUSIC",
    TACGIA: "Yarbrough & Peoples",
  },
  {
    MABH: "31592",
    TENBH: "MARRENTO",
    TACGIA: "Zé Felipe",
  },
  {
    MABH: "26839",
    TENBH: "LOVESONG",
    TACGIA: "Adele",
  },
  {
    MABH: "31593",
    TENBH: "TE QUERO AMOR (HALO)",
    TACGIA: "Banda Djavu",
  },
  {
    MABH: "26840",
    TENBH: "LA RESPUESTA",
    TACGIA: "Becky G ft. Maluma",
  },
  {
    MABH: "26841",
    TENBH: "96 QUITE BITTER BEINGS",
    TACGIA: "CKY",
  },
  {
    MABH: "31594",
    TENBH: "ALUCINADO",
    TACGIA: "Doce Encontro",
  },
  {
    MABH: "26842",
    TENBH: "PAINT THE TOWN RED",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26843",
    TENBH: "MERCY",
    TACGIA: "Duffy",
  },
  {
    MABH: "31595",
    TENBH: "É O TCHAN NO HAVAI",
    TACGIA: "É o Tchan",
  },
  {
    MABH: "26844",
    TENBH: "I CAN'T TELL YOU WHY",
    TACGIA: "Eagles",
  },
  {
    MABH: "31596",
    TENBH: "A GENTE BOTA PRA QUEBRAR",
    TACGIA: "Exaltasamba",
  },
  {
    MABH: "31597",
    TENBH: "JURA SECRETA",
    TACGIA: "Fagner",
  },
  {
    MABH: "31598",
    TENBH: "MODO ABSURDO",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "31599",
    TENBH: "TODO AMOR DO MUNDO",
    TACGIA: "Ferrugem",
  },
  {
    MABH: "26845",
    TENBH: "CARDBOARD BOX",
    TACGIA: "FLO",
  },
  {
    MABH: "26846",
    TENBH: "MARY ON A CROSS",
    TACGIA: "Ghost",
  },
  {
    MABH: "31600",
    TENBH: "LAPADA DELA",
    TACGIA: "Grupo Menos é Mais, Matheus Fernandes",
  },
  {
    MABH: "31601",
    TENBH: "DESPEDIDA DELA",
    TACGIA: "Grupo Sem Compromisso",
  },
  {
    MABH: "2407",
    TENBH: "ALVO MAIS QUE A NEVE",
    TACGIA: "Harpa Cristã",
  },
  {
    MABH: "31602",
    TENBH: "MEXEU COMIGO",
    TACGIA: "Iguinho e Lulinha",
  },
  {
    MABH: "31603",
    TENBH: "CHAVE NA MESA",
    TACGIA: "Jads e Jadson ft. Maiara e Maraisa",
  },
  {
    MABH: "26847",
    TENBH: "ALL I HAVE",
    TACGIA: "Jennifer Lopez ft. LL Cool J",
  },
  {
    MABH: "26848",
    TENBH: "SEVEN",
    TACGIA: "Jung Kook, Latto",
  },
  {
    MABH: "26849",
    TENBH: "MI EX TENÍA RAZÓN",
    TACGIA: "KAROL G",
  },
  {
    MABH: "31604",
    TENBH: "DENTRO DA HILUX",
    TACGIA: "Luan Pereira, MC Daniel, MC Ryan SP",
  },
  {
    MABH: "31605",
    TENBH: "MULHER SEGURA",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31606",
    TENBH: "EU NÃO VOU MUDAR",
    TACGIA: "Mano Walter",
  },
  {
    MABH: "31607",
    TENBH: "AI QUE DELÍCIA O VERÃO",
    TACGIA: "Marina Sena, Chicão do Piseiro, Roni Bruno",
  },
  {
    MABH: "31608",
    TENBH: "FALSA CONSIDERAÇÃO",
    TACGIA: "Marquinho Sathan",
  },
  {
    MABH: "26850",
    TENBH: "MAD HATTER",
    TACGIA: "Melanie Martinez",
  },
  {
    MABH: "26851",
    TENBH: "OFF THE WALL",
    TACGIA: "Michael Jackson",
  },
  {
    MABH: "31609",
    TENBH: "POSTA AÍ",
    TACGIA: "Nadson, o Ferinha",
  },
  {
    MABH: "31610",
    TENBH: "A GENTE SE ENTREGA",
    TACGIA: "Nattan",
  },
  {
    MABH: "26852",
    TENBH: "MANEATER",
    TACGIA: "Nelly Furtado",
  },
  {
    MABH: "26853",
    TENBH: "WHAT MAKES YOU BEAUTIFUL",
    TACGIA: "One Direction",
  },
  {
    MABH: "26854",
    TENBH: "THIS IS GOSPEL",
    TACGIA: "Panic! At The Disco",
  },
  {
    MABH: "26855",
    TENBH: "FUCKIN' PERFECT",
    TACGIA: "Pink",
  },
  {
    MABH: "26856",
    TENBH: "HOLLYWOOD'S BLEEDING",
    TACGIA: "Post Malone",
  },
  {
    MABH: "26857",
    TENBH: "DO IT AGAIN",
    TACGIA: "Queens of the Stone Age",
  },
  {
    MABH: "31611",
    TENBH: "QUEM É O LOUCO ENTRE NÓS",
    TACGIA: "Raphaela Santos",
  },
  {
    MABH: "6756",
    TENBH: "TUDO VIRA BOSTA",
    TACGIA: "Rita Lee",
  },
  {
    MABH: "26858",
    TENBH: "MY MIND & ME",
    TACGIA: "Selena Gomez",
  },
  {
    MABH: "26859",
    TENBH: "GIRLS NEED LOVE",
    TACGIA: "Summer Walker",
  },
  {
    MABH: "26860",
    TENBH: "SUGAR",
    TACGIA: "System of a Down",
  },
  {
    MABH: "26861",
    TENBH: "JUST WHAT I NEEDED",
    TACGIA: "The Cars",
  },
  {
    MABH: "2828",
    TENBH: "COMIDA",
    TACGIA: "Titãs",
  },
  {
    MABH: "26862",
    TENBH: "FREE FALLIN'",
    TACGIA: "Tom Petty",
  },
  {
    MABH: "31612",
    TENBH: "EU SOU TEU PAI",
    TACGIA: "Valesca Mayssa",
  },
  {
    MABH: "26863",
    TENBH: "YOU GOT IT",
    TACGIA: "Vedo",
  },
  {
    MABH: "31613",
    TENBH: "BOA SORTE PRA VOCÊ",
    TACGIA: "Vitor Fernandes",
  },
  {
    MABH: "31614",
    TENBH: "BALLENA",
    TACGIA: "Vulgo FK, MC PH, Veigh",
  },
  {
    MABH: "26864",
    TENBH: "MONEY, MONEY, MONEY",
    TACGIA: "ABBA",
  },
  {
    MABH: "31615",
    TENBH: "ALERTA DE GOLPE",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "26865",
    TENBH: "RISE UP",
    TACGIA: "Andra Day",
  },
  {
    MABH: "26866",
    TENBH: "ARABELLA",
    TACGIA: "Arctic Monkeys",
  },
  {
    MABH: "26867",
    TENBH: "SHAMELESS",
    TACGIA: "Camila Cabello",
  },
  {
    MABH: "26868",
    TENBH: "THIS IS OUR SONG",
    TACGIA: "Camp Rock",
  },
  {
    MABH: "26869",
    TENBH: "RUN AWAY WITH ME",
    TACGIA: "Carly Rae Jepsen",
  },
  {
    MABH: "26870",
    TENBH: "ATTENTION",
    TACGIA: "Charlie Puth",
  },
  {
    MABH: "15102",
    TENBH: "ÁGUAS MANSAS",
    TACGIA: "Circulador de Fulô",
  },
  {
    MABH: "26871",
    TENBH: "DANCE THE NIGHT",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26872",
    TENBH: "PHILADELPHIA FREEDOM",
    TACGIA: "Elton John",
  },
  {
    MABH: "31616",
    TENBH: "MESMO QUE SEJA EU",
    TACGIA: "Erasmo Carlos",
  },
  {
    MABH: "31617",
    TENBH: "PILOTO",
    TACGIA: "Flora Matos",
  },
  {
    MABH: "1214",
    TENBH: "DESDE QUANDO VOCÊ SE FOI",
    TACGIA: "Fresno",
  },
  {
    MABH: "26873",
    TENBH: "PRAYING FOR TIME",
    TACGIA: "George Michael",
  },
  {
    MABH: "6297",
    TENBH: "MAIONESE",
    TACGIA: "Gil",
  },
  {
    MABH: "31618",
    TENBH: "MANDA UM OI",
    TACGIA: "Guilherme e  Benuto, Simone Mendes",
  },
  {
    MABH: "31619",
    TENBH: "EU E VOCÊ",
    TACGIA: "Iguinho e Lulinha",
  },
  {
    MABH: "31620",
    TENBH: "IMATURO",
    TACGIA: "Jão",
  },
  {
    MABH: "26874",
    TENBH: "BAD REPUTATION",
    TACGIA: "Joan Jett & The Blackhearts",
  },
  {
    MABH: "31621",
    TENBH: "ELA NÃO VAI VOLTAR",
    TACGIA: "João Gomes",
  },
  {
    MABH: "26875",
    TENBH: "LICK IT UP",
    TACGIA: "Kiss",
  },
  {
    MABH: "26876",
    TENBH: "LDN",
    TACGIA: "Lilly Allen",
  },
  {
    MABH: "26877",
    TENBH: "CLOSE MY EYES FOREVER",
    TACGIA: "Lita Ford, Ozzy Osbourne",
  },
  {
    MABH: "31622",
    TENBH: "VERDINHA",
    TACGIA: "Ludmilla",
  },
  {
    MABH: "26878",
    TENBH: "THE LONELIEST",
    TACGIA: "Maneskin",
  },
  {
    MABH: "31623",
    TENBH: "DAQUI PRA SEMPRE",
    TACGIA: "Manu Bathidão, Simone Mendes",
  },
  {
    MABH: "31624",
    TENBH: "HOJE EU VOU TE USAR",
    TACGIA: "Mari Fernandez, Felipe Amorim",
  },
  {
    MABH: "31625",
    TENBH: "DEIXA",
    TACGIA: "Maria Marçal",
  },
  {
    MABH: "26879",
    TENBH: "ALL I WANT FOR CHRISTMAS IS YOU",
    TACGIA: "Mariah Carey",
  },
  {
    MABH: "31626",
    TENBH: "PELEJEI",
    TACGIA: "Marina Sena",
  },
  {
    MABH: "26880",
    TENBH: "STARLIGHT",
    TACGIA: "Muse",
  },
  {
    MABH: "26881",
    TENBH: "HARVEST MOON",
    TACGIA: "Neil Young",
  },
  {
    MABH: "31627",
    TENBH: "QUER DANÇAR",
    TACGIA: "Priscilla, Bonde Do Tigrão",
  },
  {
    MABH: "26882",
    TENBH: "BICYCLE RACE",
    TACGIA: "Queen",
  },
  {
    MABH: "26883",
    TENBH: "CALM DOWN",
    TACGIA: "Rema, Selena Gomez",
  },
  {
    MABH: "31628",
    TENBH: "ELA É DA BAGACEIRA",
    TACGIA: "Romim Mahta, DJ Guuga, Felipe Amorim",
  },
  {
    MABH: "15471",
    TENBH: "MORENA",
    TACGIA: "Scracho",
  },
  {
    MABH: "15134",
    TENBH: "QUEM NÃO QUER SOU EU",
    TACGIA: "Seu Jorge",
  },
  {
    MABH: "26884",
    TENBH: "EL JEFE",
    TACGIA: "Shakira, Fuerza Regida",
  },
  {
    MABH: "31629",
    TENBH: "DOIS FUGITIVOS",
    TACGIA: "Simone Mendes",
  },
  {
    MABH: "26885",
    TENBH: "IS IT OVER NOW",
    TACGIA: "Taylor Swift",
  },
  {
    MABH: "26886",
    TENBH: "NOW AND THEN",
    TACGIA: "The Beatles",
  },
  {
    MABH: "31630",
    TENBH: "TANGERINA",
    TACGIA: "Tiago Iorc, Duda Beat",
  },
  {
    MABH: "26887",
    TENBH: "YEAH",
    TACGIA: "Usher",
  },
  {
    MABH: "31631",
    TENBH: "NOSTALGIA",
    TACGIA: "Vivendo do Ócio",
  },
  {
    MABH: "26888",
    TENBH: "OWNER OF A LONELY HEART",
    TACGIA: "Yes",
  },
  {
    MABH: "31632",
    TENBH: "BARULHO DO FOGUETE",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "31633",
    TENBH: "FOI AMOR",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31634",
    TENBH: "FRENTE FRIA",
    TACGIA: "Zezé Di Camargo",
  },
  {
    MABH: "26889",
    TENBH: "KINGS AND QUEENS",
    TACGIA: "30 Seconds To Mars",
  },
  {
    MABH: "26890",
    TENBH: "BOOGIE OOGIE OOGIE",
    TACGIA: "A Taste Of Honey",
  },
  {
    MABH: "26891",
    TENBH: "DESTINATION CALABRIA",
    TACGIA: "Alex Gaudino feat. Crystal Waters",
  },
  {
    MABH: "26892",
    TENBH: "ME AND MR. JONES",
    TACGIA: "Amy Winehouse",
  },
  {
    MABH: "31635",
    TENBH: "CHICLETINHO",
    TACGIA: "Ana Castela",
  },
  {
    MABH: "26893",
    TENBH: "2002",
    TACGIA: "Anne Marie",
  },
  {
    MABH: "26894",
    TENBH: "STUCK WITH U",
    TACGIA: "Ariana Grande, Justin Bieber",
  },
  {
    MABH: "31636",
    TENBH: "É SÉRIO",
    TACGIA: "Banda Encantu's",
  },
  {
    MABH: "26895",
    TENBH: "PARTY",
    TACGIA: "Beyoncé",
  },
  {
    MABH: "26896",
    TENBH: "WHAT WAS I MADE FOR",
    TACGIA: "Billie Eilish",
  },
  {
    MABH: "26897",
    TENBH: "TYPA GIRL",
    TACGIA: "Blackpink",
  },
  {
    MABH: "9534",
    TENBH: "SINCERAMENTE",
    TACGIA: "Cachorro Grande",
  },
  {
    MABH: "26898",
    TENBH: "PRESS",
    TACGIA: "Cardi B",
  },
  {
    MABH: "7687",
    TENBH: "QUERO CHICLETE",
    TACGIA: "Chiclete Com Banana",
  },
  {
    MABH: "3627",
    TENBH: "MUCAMA",
    TACGIA: "Cidade Negra ft. Gabriel O Pensador",
  },
  {
    MABH: "31637",
    TENBH: "OXE",
    TACGIA: "Cleber e Cauan, Diego e Victor Hugo",
  },
  {
    MABH: "26899",
    TENBH: "HOUDINI",
    TACGIA: "Dua Lipa",
  },
  {
    MABH: "26900",
    TENBH: "BLUE MONDAY, BLUE DAY",
    TACGIA: "Foreigner",
  },
  {
    MABH: "26901",
    TENBH: "STUCK ON YOU",
    TACGIA: "GIVEON",
  },
  {
    MABH: "31638",
    TENBH: "APENAS UM NENÉM",
    TACGIA: "Gloria Groove feat. Marina Sena",
  },
  {
    MABH: "26902",
    TENBH: "OBLIVION",
    TACGIA: "Grimes",
  },
  {
    MABH: "31639",
    TENBH: "TORCE O OLHO",
    TACGIA: "Gusttavo Lima part. Hugo e Guilherme",
  },
  {
    MABH: "26903",
    TENBH: "WOMAN",
    TACGIA: "Harry Styles",
  },
  {
    MABH: "26904",
    TENBH: "SI NO ESTAS",
    TACGIA: "Iñigo Quintero",
  },
  {
    MABH: "31640",
    TENBH: "BENÇÃOS QUE NÃO TEM FIM",
    TACGIA: "Isadora Pompeo",
  },
  {
    MABH: "6073",
    TENBH: "PERERÊ",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "31658",
    TENBH: "SÁ MARINA",
    TACGIA: "Ivete Sangalo",
  },
  {
    MABH: "6323",
    TENBH: "ALGUÉM",
    TACGIA: "João Paulo e Daniel",
  },
  {
    MABH: "26905",
    TENBH: "3D",
    TACGIA: "Junk Kook, Jack Harlow",
  },
  {
    MABH: "6481",
    TENBH: "A CADA DEZ PALAVRAS",
    TACGIA: "KLB",
  },
  {
    MABH: "26906",
    TENBH: "SOUR CANDY",
    TACGIA: "Lady Gaga, Blackpink",
  },
  {
    MABH: "31641",
    TENBH: "CAMA REPETIDA",
    TACGIA: "Léo Santana, Zé Felipe",
  },
  {
    MABH: "26907",
    TENBH: "MIS SENTIMIENTOS",
    TACGIA: "Los Ángeles Azules ft. Ximena Sariñana",
  },
  {
    MABH: "31642",
    TENBH: "CHEIRO NA CAMISETA",
    TACGIA: "Luan Pereira ft. Hugo e Guilherme",
  },
  {
    MABH: "31643",
    TENBH: "DEUS É MUITO BOM",
    TACGIA: "Luan Santana",
  },
  {
    MABH: "31644",
    TENBH: "DÉJÀ VU",
    TACGIA: "Luan Santana ft. Ana Castela",
  },
  {
    MABH: "31645",
    TENBH: "CASA DA MÃE JOANA",
    TACGIA: "Marília Mendonça ft. Henrique e Juliano",
  },
  {
    MABH: "31646",
    TENBH: "NÃO VITALÍCIO",
    TACGIA: "Matheus e Kauan, Mari Fernandez",
  },
  {
    MABH: "31647",
    TENBH: "CARTA ABERTA",
    TACGIA: "MC Cabelinho",
  },
  {
    MABH: "31648",
    TENBH: "AMORES E FLORES",
    TACGIA: "Melim",
  },
  {
    MABH: "31649",
    TENBH: "EU MEREÇO SER FELIZ",
    TACGIA: "Mumuzinho",
  },
  {
    MABH: "7701",
    TENBH: "SOU DELA",
    TACGIA: "Nando Reis",
  },
  {
    MABH: "26908",
    TENBH: "JEALOUSY, JEALOUSY",
    TACGIA: "Olivia Rodrigo",
  },
  {
    MABH: "31650",
    TENBH: "BORA PRO PISERO",
    TACGIA: "Os Barões da Pisadinha",
  },
  {
    MABH: "31651",
    TENBH: "TENHA FÉ POIS AMANHA UM DIA LINDO VAI NASCER",
    TACGIA: "Os Originais do Samba",
  },
  {
    MABH: "7386",
    TENBH: "MIL E UMA NOITES DE AMOR",
    TACGIA: "Pepeu Gomes",
  },
  {
    MABH: "31652",
    TENBH: "ME REFEZ",
    TACGIA: "Priscilla Alcântara",
  },
  {
    MABH: "2860",
    TENBH: "SE VOCÊ PENSA",
    TACGIA: "Roberto Carlos",
  },
  {
    MABH: "6838",
    TENBH: "VOCÊ PERTO DE MIM",
    TACGIA: "Sampa Crew",
  },
  {
    MABH: "31653",
    TENBH: "O AMOR É UM ATO REVOLUCIONÁRIO",
    TACGIA: "Sandy",
  },
  {
    MABH: "31654",
    TENBH: "NO LLORES MÁS",
    TACGIA: "Simone e Simaria, Sebastian Yatra",
  },
  {
    MABH: "4014",
    TENBH: "SÓ NO SAPATINHO",
    TACGIA: "Só No Sapatinho",
  },
  {
    MABH: "31655",
    TENBH: "LITERALMENTE",
    TACGIA: "Tarcísio do Acordeon",
  },
  {
    MABH: "6349",
    TENBH: "SÁ MARINA",
    TACGIA: "Wilson Simonal",
  },
  {
    MABH: "31656",
    TENBH: "PÁTIO DO POSTO",
    TACGIA: "Zé Neto e Cristiano",
  },
  {
    MABH: "31657",
    TENBH: "PÁSSARO NOTURNO",
    TACGIA: "Zé Vaqueiro",
  },
  {
    MABH: "31659",
    TENBH: "DIA DE FLUXO",
    TACGIA: "Ana Castela, Ludmilla",
  },
  {
    MABH: "26909",
    TENBH: "YES, AND",
    TACGIA: "Ariana Grande",
  },
  {
    MABH: "31660",
    TENBH: "SE NÃO VALORIZAR",
    TACGIA: "Aviões Do Forró",
  },
  {
    MABH: "26910",
    TENBH: "FOLLOW YOU",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "26911",
    TENBH: "IN THE DARK",
    TACGIA: "Bring Me The Horizon",
  },
  {
    MABH: "3664",
    TENBH: "FALAR A VERDADE",
    TACGIA: "Cidade Negra",
  },
  {
    MABH: "31661",
    TENBH: "ESPELHO DO PODER",
    TACGIA: "Conde Só Brega ft. João Gomes",
  },
  {
    MABH: "26912",
    TENBH: "MODERN LOVE",
    TACGIA: "David Bowie",
  },
  {
    MABH: "26913",
    TENBH: "VEGAS",
    TACGIA: "Doja Cat",
  },
  {
    MABH: "26914",
    TENBH: "LOVE THE WAY YOU LIE",
    TACGIA: "Eminem ft Rihanna",
  },
  {
    MABH: "26915",
    TENBH: "PAPER BAG",
    TACGIA: "Fiona Apple",
  },
  {
    MABH: "26916",
    TENBH: "I DON'T WANT TO LIVE WITHOUT YOU",
    TACGIA: "Foreigner",
  },
  {
    MABH: "31662",
    TENBH: "30 CADEADOS",
    TACGIA: "Gusttavo Lima, Mari Fernandez",
  },
  {
    MABH: "31663",
    TENBH: "AMOR NÃO DÁ EM COPO",
    TACGIA: "Israel e Rodolffo, Hugo e Guilherme",
  },
  {
    MABH: "31664",
    TENBH: "MACETANDO",
    TACGIA: "Ivete Sangalo, Ludmilla",
  },
  {
    MABH: "2788",
    TENBH: "COLORIR PAPEL",
    TACGIA: "Jammil e Uma Noites",
  },
  {
    MABH: "31665",
    TENBH: "ESCRITO NAS ESTRELAS",
    TACGIA: "Lauana Prado",
  },
  {
    MABH: "31666",
    TENBH: "BANHO DE FOLHAS",
    TACGIA: "Luedji Luna",
  },
  {
    MABH: "6791",
    TENBH: "SEM NUNCA DAR ADEUS",
    TACGIA: "Lulu Santos",
  },
  {
    MABH: "26917",
    TENBH: "CORALINE",
    TACGIA: "Maneskin",
  },
  {
    MABH: "31667",
    TENBH: "FORRÓ E DESMANTELO",
    TACGIA: "Manim Vaqueiro",
  },
  {
    MABH: "16232",
    TENBH: "PESSOA",
    TACGIA: "Marina Lima",
  },
  {
    MABH: "31668",
    TENBH: "DANO SARRADA",
    TACGIA: "Marina Sena, Japãozin",
  },
  {
    MABH: "7419",
    TENBH: "PRA SER SINCERO",
    TACGIA: "Marisa Monte",
  },
  {
    MABH: "2702",
    TENBH: "ASAS",
    TACGIA: "Maskavo",
  },
  {
    MABH: "26918",
    TENBH: "AMÁRRAME",
    TACGIA: "Mon Laferte ft. Juanes",
  },
  {
    MABH: "26919",
    TENBH: "LAST NIGHT",
    TACGIA: "P.Diddy ft. Keyshia Cole",
  },
  {
    MABH: "31669",
    TENBH: "PEDE PRA EU FICAR",
    TACGIA: "Pabllo Vittar",
  },
  {
    MABH: "26920",
    TENBH: "FORGIVENESS",
    TACGIA: "Paramore",
  },
  {
    MABH: "26921",
    TENBH: "HEARTBREAKER",
    TACGIA: "Pat Benatar",
  },
  {
    MABH: "31670",
    TENBH: "POCPOC",
    TACGIA: "Pedro Sampaio",
  },
  {
    MABH: "26922",
    TENBH: "MONEY",
    TACGIA: "Pink Floyd",
  },
  {
    MABH: "31671",
    TENBH: "É ELA QUE EU AMO",
    TACGIA: "Racine Neto",
  },
  {
    MABH: "26923",
    TENBH: "NO SURPRISES",
    TACGIA: "Radiohead",
  },
  {
    MABH: "31672",
    TENBH: "MEU XODÓ",
    TACGIA: "Rafinha o Big Love, Biguinho Sensação",
  },
  {
    MABH: "31673",
    TENBH: "5 DA MANHÃ",
    TACGIA: "Raí Saia Rodada, João Gomes",
  },
  {
    MABH: "31674",
    TENBH: "PRECISO TE ENCONTRAR",
    TACGIA: "Rick e Renner",
  },
  {
    MABH: "26924",
    TENBH: "VERMILION",
    TACGIA: "Slipknot",
  },
  {
    MABH: "26925",
    TENBH: "MURDER ON THE DANCEFLOOR",
    TACGIA: "Sophie Ellis Bextor",
  },
  {
    MABH: "26926",
    TENBH: "UNTIL I FOUND YOU",
    TACGIA: "Stephen Sanchez",
  },
  {
    MABH: "26927",
    TENBH: "HIGHWAY SONG",
    TACGIA: "System Of A Down",
  },
  {
    MABH: "26928",
    TENBH: "LONELY BOY",
    TACGIA: "The Black Keys",
  },
  {
    MABH: "26929",
    TENBH: "TOUCH ME",
    TACGIA: "The Doors",
  },
  {
    MABH: "15062",
    TENBH: "AINDA BEM",
    TACGIA: "Thiaguinho",
  },
  {
    MABH: "26930",
    TENBH: "PAST LIFE",
    TACGIA: "Trevor Daniel",
  },
  {
    MABH: "31675",
    TENBH: "CONDENADO",
    TACGIA: "Unha Pintada",
  },
  {
    MABH: "26931",
    TENBH: "THE PROMISSE",
    TACGIA: "When In Home",
  },
  {
    MABH: "26932",
    TENBH: "LOVE AIN'T NO STRANGER",
    TACGIA: "Whitesnake",
  },
  {
    MABH: "26933",
    TENBH: "BETTER",
    TACGIA: "ZAYN",
  },
  {
    MABH: "31676",
    TENBH: "DECIDA",
    TACGIA: "Zezo",
  },
];

const musicContainer = document.getElementById("music-container");

const musicInfo = (music) => {
  const musicDiv = document.createElement("div");
  musicDiv.classList.add("music");

  // Create a paragraph element for the music artist
  const artistParagraph = document.createElement("h3");
  artistParagraph.textContent = `Artist: ${music.TACGIA}`;
  musicDiv.appendChild(artistParagraph);

  // Create a heading element for the music title
  const titleHeading = document.createElement("h3");
  titleHeading.textContent = `${music.TENBH} [${music.MABH}]`;
  musicDiv.appendChild(titleHeading);

  const separator = document.createElement("p");
  separator.textContent = `----------------------------`;
  musicDiv.appendChild(separator);

  // Append the music div to the container element
  musicContainer.appendChild(musicDiv);
};

musics.forEach((music) => {
  musicInfo(music);
});

document.getElementById("music").addEventListener("input", function () {
  document.getElementById("music-container").innerHTML = "";
  const searchTerm = document.getElementById("music").value;
  console.log(searchTerm);

  const filteredMusics = musics.filter((music) => {
    const artistMatch = music.TACGIA.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    const titleMatch = music.TENBH.toLowerCase().includes(
      searchTerm.toLowerCase()
    );
    return artistMatch || titleMatch;
  });

  console.log(filteredMusics);

  filteredMusics.slice(0, 15).forEach((music) => {
    musicInfo(music);
  });
});
