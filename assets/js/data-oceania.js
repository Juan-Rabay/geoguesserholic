window.GG = window.GG || {};
GG.countries = (GG.countries || []).concat([
{
  id:"australia", n:"Austrália", en:"Australia", fl:"🇦🇺", rg:"Oceania", cov:"Completa", dif:2,
  side:"Esquerda", dom:".com.au", lang:"Inglês", scr:"Latino",
  plate:"Varia por estado; branca ou amarela com o <b>slogan do estado</b> (ex.: 'Victoria - The Place To Be')",
  tldr:"Eucaliptos por toda parte, terra vermelha no interior e direção pela esquerda com placas amarelas.",
  quick:[
    "<b>Eucaliptos</b> em praticamente toda a vegetação nativa, com folhagem rala e cinza-esverdeada",
    "Direção pela <b>esquerda</b> com placas de aviso em <b>losango amarelo</b>",
    "Postes de madeira com isoladores e <b>caixas de correio em poste</b> na frente das casas rurais",
    "Terra vermelha intensa no Outback; capim seco e dourado na maior parte do ano"
  ],
  m:{
    car:"Cobertura muito ampla, incluindo estradas remotas do Outback e trilhas.",
    bol:"Delineadores brancos com refletor <b>vermelho à esquerda e branco à direita</b>; postes de madeira ou plástico.",
    pol:"Postes de <b>madeira</b> altos e finos com poucos cabos; em áreas rurais, postes de madeira bruta com isoladores.",
    road:"Linha central <b>branca</b> (não amarela como nas Américas) e bordas brancas; estradas muito longas e retas.",
    sign:"Direcionais <b>verdes com texto branco</b> nas rodovias e azuis nas urbanas; escudos com número de rota por estado. Placas de aviso de canguru em losango amarelo.",
    arch:"Casas térreas de tijolo com telhado de telha ou chapa; varandas amplas (verandah); galpões de chapa metálica em fazendas.",
    nat:"Eucaliptos e acácias, savana no norte, deserto vermelho no centro, floresta temperada no sudeste e na Tasmânia, floresta tropical em Queensland.",
    extra:"O <b>slogan do estado na placa</b> do veículo é a pista mais precisa quando visível."
  },
  rgs:[
    {n:"Nova Gales do Sul/Victoria", t:"Mais povoados, eucaliptos densos, agricultura, colinas verdes no inverno."},
    {n:"Queensland", t:"Tropical ao norte, cana-de-açúcar, casas 'Queenslander' de madeira sobre pilares."},
    {n:"Austrália Ocidental", t:"Vastidão, deserto vermelho, mineração, trigo no sudoeste."},
    {n:"Território do Norte", t:"Savana com cupinzeiros gigantes, terra vermelha, Uluru."},
    {n:"Tasmânia", t:"Verde, temperada, florestas úmidas, mais parecida com a Nova Zelândia."}
  ],
  cf:[{n:"Nova Zelândia",t:"NZ tem colinas verdes, samambaias arbóreas e ovelhas; sem eucalipto nativo dominante."},
      {n:"África do Sul",t:"ZA tem linha de borda amarela e acácias de copa chata."}]
},
{
  id:"new-zealand", n:"Nova Zelândia", en:"New Zealand", fl:"🇳🇿", rg:"Oceania", cov:"Completa", dif:2,
  side:"Esquerda", dom:".co.nz", lang:"Inglês e Māori", scr:"Latino",
  plate:"Branca com letras pretas, sem faixa lateral",
  tldr:"Colinas verdes com ovelhas, samambaias arbóreas e nomes māori com muitas vogais.",
  quick:[
    "Nomes <b>māori</b> com sequências de vogais: 'Whangarei', 'Taupō', 'Kaikoura', 'Aotearoa'",
    "Colinas <b>verdes e ondulantes</b> com ovelhas e cercas elétricas",
    "<b>Samambaias arbóreas</b> (ponga) e vegetação de floresta temperada úmida",
    "Direção pela esquerda; sinalização com placas de aviso em losango amarelo"
  ],
  m:{
    car:"Cobertura completa e excelente nas duas ilhas.",
    bol:"Delineadores brancos com refletor vermelho à esquerda e branco à direita; postes com faixa refletiva.",
    pol:"Postes de madeira e de concreto; fiação simples ao longo das estradas rurais.",
    road:"Linha central <b>branca</b>; muitas <b>pontes de pista única</b> com placa de prioridade — extremamente comuns na Nova Zelândia.",
    sign:"Direcionais <b>verdes</b> nas rodovias estaduais com escudo numerado; placas azuis para serviços.",
    arch:"Casas térreas de madeira ou tijolo com telhado de chapa ondulada; galpões rurais de chapa; poucas construções altas fora das cidades.",
    nat:"Pastagem verde por quase toda parte, florestas nativas densas, Alpes do Sul com neve, vulcões na Ilha Norte, fiordes a sudoeste.",
    extra:"As <b>pontes de pista única</b> sinalizadas e a densidade de ovelhas são marcadores muito confiáveis."
  },
  rgs:[
    {n:"Ilha Norte", t:"Vulcões, fontes termais, pastagem, mais população, clima subtropical ao norte."},
    {n:"Ilha Sul", t:"Alpes do Sul, lagos azuis glaciais, planícies de Canterbury, fiordes, menos gente."}
  ],
  cf:[{n:"Austrália",t:"AU tem eucaliptos e clima seco; NZ é verde e montanhosa."},
      {n:"Reino Unido/Irlanda",t:"Também esquerda e verde; a vegetação nativa e os nomes māori resolvem."}]
},
{
  id:"guam", n:"Guam e Marianas do Norte", en:"Guam & N. Mariana Islands", fl:"🇬🇺", rg:"Oceania", cov:"Completa", dif:3,
  side:"Direita", dom:".gu / .mp", lang:"Inglês e Chamorro", scr:"Latino",
  plate:"Formato dos EUA com 'Guam' e o slogan 'Tano Y Chamorro'",
  tldr:"Território americano no Pacífico: sinalização dos EUA em ilha tropical com nomes chamorros.",
  quick:[
    "<b>Sinalização americana</b> (losangos amarelos, hidrantes, escudos de rota) em ambiente tropical de ilha",
    "Nomes <b>chamorros</b> com apóstrofos e til: 'Hagåtña', 'Yigo', 'Dededo'",
    "Postes de madeira ou concreto no padrão americano, com transformadores",
    "Vegetação tropical com selva densa, coqueiros e capim-espada"
  ],
  m:{
    car:"Cobertura completa de Guam e de Saipan e Tinian nas Marianas.",
    bol:"Guard-rails e delineadores no padrão dos EUA.",
    pol:"Postes de concreto reforçado (por causa dos tufões) e de madeira.",
    road:"Marcação com linha central amarela; rodovias numeradas com escudo próprio.",
    sign:"Placas em inglês com o padrão federal americano; sinais de tsunami e rota de evacuação.",
    arch:"Casas de concreto de um andar resistentes a tufão, bases militares americanas, resorts japoneses em Tumon.",
    nat:"Selva tropical, penhascos calcários, praias de coral, savana de capim no sul de Guam.",
    extra:"A presença militar americana (bases, cercas, sinalização restrita) é muito visível."
  },
  cf:[{n:"Havaí",t:"HI é maior, com vulcões e placas do estado do Havaí."},
      {n:"Filipinas",t:"PH tem jeepneys e sinalização diferente."}]
},
{
  id:"american-samoa", n:"Samoa Americana", en:"American Samoa", fl:"🇦🇸", rg:"Oceania", cov:"Completa", dif:3,
  side:"Direita", dom:".as", lang:"Samoano e Inglês", scr:"Latino",
  plate:"Formato dos EUA com 'American Samoa' e o slogan 'Motu O Fiafiaga'",
  tldr:"Ilha vulcânica íngreme no Pacífico Sul, com fales abertos e igrejas brancas enormes.",
  quick:[
    "<b>Fales</b>: construções abertas com telhado oval sobre pilares, sem paredes",
    "<b>Igrejas brancas grandes</b> e desproporcionais ao tamanho das vilas",
    "Montanhas vulcânicas muito íngremes e verdes caindo direto no mar",
    "Placas americanas com nomes samoanos; direção pela direita"
  ],
  m:{
    car:"Cobertura da ilha principal (Tutuila) e de trechos das Manu'a.",
    bol:"Poucos delineadores; barreiras simples na estrada costeira.",
    pol:"Postes de madeira e concreto com fiação aérea.",
    road:"Uma estrada costeira principal contornando a ilha; asfalto razoável com marcação amarela.",
    sign:"Placas em inglês no padrão americano; avisos de tsunami.",
    arch:"Fales tradicionais, casas de concreto simples, igrejas monumentais em cada vila.",
    nat:"Floresta tropical densa, coqueiros, penhascos vulcânicos, recifes de coral.",
    extra:"Samoa (independente) fica ao lado e dirige pela <b>esquerda</b> — a diferença é decisiva."
  },
  cf:[{n:"Samoa (independente)",t:"WS dirige pela esquerda e não usa sinalização americana."},
      {n:"Fiji/Tonga",t:"Também dirigem pela esquerda."}]
},
{
  id:"christmas-island", n:"Ilha Christmas e Cocos", en:"Christmas & Cocos Islands", fl:"🇨🇽", rg:"Oceania", cov:"Completa", dif:4,
  side:"Esquerda", dom:".cx / .cc", lang:"Inglês, Malaio, Chinês", scr:"Latino e Chinês",
  plate:"Formato australiano com 'Christmas Island' ou 'Cocos (Keeling) Islands'",
  tldr:"Territórios australianos no Índico, com mistura cultural malaia e chinesa.",
  quick:[
    "Placas de veículo <b>australianas</b> com o nome do território escrito",
    "Direção pela <b>esquerda</b> em ilha tropical do Oceano Índico",
    "Templos chineses e mesquitas malaias em comunidades muito pequenas",
    "Placas de aviso sobre <b>migração de caranguejos vermelhos</b> na Ilha Christmas"
  ],
  m:{
    car:"Cobertura das poucas estradas existentes.",
    bol:"Barreiras simples; estradas estreitas.",
    pol:"Postes de concreto e madeira; infraestrutura mínima.",
    road:"Poucas estradas asfaltadas, marcação australiana.",
    sign:"Placas em inglês no padrão australiano.",
    arch:"Casas simples de concreto, templos chineses coloridos, mesquitas pequenas, instalações de mineração de fosfato.",
    nat:"Floresta tropical em Christmas, atol de coral com coqueiros em Cocos, penhascos calcários.",
    extra:"Se você vê sinalização australiana em uma ilha tropical minúscula e isolada, considere estes territórios."
  },
  cf:[{n:"Austrália continental",t:"O contexto insular e o tamanho resolvem."},
      {n:"Indonésia",t:"ID não usa sinalização australiana."}]
}
]);
