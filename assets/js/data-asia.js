window.GG = window.GG || {};
GG.countries = (GG.countries || []).concat([
{
  id:"turkey", n:"Turquia", en:"Turkey", fl:"🇹🇷", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".tr", lang:"Turco", scr:"Latino (ı, ş, ğ, ç, ö, ü)",
  plate:"Branca com faixa azul 'TR' à esquerda, letras pretas",
  tldr:"Letra <b>ı</b> sem ponto, minaretes por toda parte e bandeiras vermelhas em profusão.",
  quick:[
    "A letra <b>ı</b> (i sem ponto) e <b>ğ</b> — exclusivas do turco",
    "<b>Mesquitas com dois ou mais minaretes finos</b> em praticamente toda vila",
    "Bandeiras turcas vermelhas gigantes em morros e prédios públicos",
    "Delineadores brancos com <b>faixa vermelha</b> e guard-rails frequentes"
  ],
  m:{
    car:"Cobertura ampla e recente na maior parte do país.",
    bol:"Poste branco com faixa vermelha refletiva; barreiras metálicas em estradas de montanha.",
    pol:"Postes de concreto cinza e postes metálicos treliçados; fiação aérea densa nas cidades.",
    road:"Linhas brancas; muitas rodovias divididas de alta qualidade com acostamento largo.",
    sign:"Direcionais <b>azuis</b> nas rodovias e <b>verdes</b> nas autoestradas (O). Placas de localidade brancas.",
    arch:"Prédios de apartamentos de concreto com <b>tanques de água solares</b> nos telhados; casas rurais de tijolo e chapa; mesquitas otomanas com cúpula e minarete de lápis.",
    nat:"Costa mediterrânea com pinheiros, planalto árido da Anatólia central, montanhas nevadas a leste, Mar Negro verde e chuvoso ao norte.",
    extra:"Os <b>aquecedores solares com tanque cilíndrico</b> no telhado são um marcador turco muito forte."
  },
  rgs:[
    {n:"Costa do Egeu/Mediterrâneo", t:"Oliveiras, pinheiros, resorts, montanhas descendo ao mar."},
    {n:"Anatólia Central", t:"Planalto seco, estepe, campos de trigo, poucas árvores."},
    {n:"Mar Negro (norte)", t:"Verde intenso, chá e avelã em terraços, chuva, névoa."},
    {n:"Leste/Anatólia Oriental", t:"Montanhas altas, neve, população curda, sinalização às vezes bilíngue."}
  ],
  cf:[{n:"Azerbaijão",t:"Língua parecida, mas AZ não tem cobertura oficial ampla."},
      {n:"Grécia/Bulgária",t:"Alfabetos diferentes resolvem na hora."}]
},
{
  id:"israel", n:"Israel", en:"Israel", fl:"🇮🇱", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".il", lang:"Hebraico, Árabe, Inglês", scr:"Hebraico, Árabe, Latino",
  plate:"<b>Amarela</b> na frente e atrás, com faixa azul e números pretos",
  tldr:"Placas amarelas, sinalização trilíngue hebraico/árabe/inglês e pedra clara de Jerusalém.",
  quick:[
    "Placas de veículo <b>amarelas nos dois lados</b> com faixa azul à esquerda",
    "Sinalização <b>trilíngue</b>: hebraico, árabe e inglês na mesma placa",
    "<b>Alfabeto hebraico</b> — único entre os países com cobertura",
    "Prédios revestidos de <b>pedra calcária clara</b>, obrigatório em Jerusalém"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Delineadores brancos com refletor; guard-rails metálicos.",
    pol:"Postes de concreto e metal; muita infraestrutura moderna.",
    road:"Linhas brancas e amarelas; rodovias modernas com sinalização em três idiomas.",
    sign:"Direcionais <b>verdes</b> nas rodovias principais e azuis nas urbanas — sempre trilíngues.",
    arch:"Prédios de pedra clara com <b>tanques de água pretos e painéis solares</b> nos telhados (dud shemesh) — marcador clássico.",
    nat:"Deserto do Negev ao sul, planície costeira fértil, Galileia verde ao norte, Mar Morto abaixo do nível do mar.",
    extra:"Ciprestes e eucaliptos plantados, além de florestas de pinheiro replantadas em colinas."
  },
  rgs:[
    {n:"Negev (sul)", t:"Deserto rochoso e arenoso, quase sem vegetação."},
    {n:"Planície costeira", t:"Tel Aviv, densidade alta, palmeiras, dunas."},
    {n:"Galileia (norte)", t:"Colinas verdes, oliveiras, vilarejos árabes e drusos."}
  ],
  cf:[{n:"Jordânia",t:"JO usa só árabe e inglês, sem hebraico."},
      {n:"Palestina/Cisjordânia",t:"Placas verdes e brancas com árabe; sinalização diferente."}]
},
{
  id:"jordan", n:"Jordânia", en:"Jordan", fl:"🇯🇴", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".jo", lang:"Árabe", scr:"Árabe e Latino",
  plate:"Branca com números pretos e faixa lateral colorida por categoria",
  tldr:"Deserto rochoso, cidades de concreto bege e sinalização árabe/inglês em fundo azul.",
  quick:[
    "<b>Árabe</b> com transliteração em inglês nas placas de estrada",
    "Prédios de concreto e blocos bege com <b>tanques de água pretos</b> nos telhados",
    "Deserto pedregoso e montanhas áridas; muito pouco verde",
    "Bandeiras jordanianas e retratos oficiais em prédios públicos"
  ],
  m:{
    car:"Cobertura razoável nas estradas principais e cidades.",
    bol:"Delineadores brancos e barreiras metálicas; muitas estradas sem proteção.",
    pol:"Postes de concreto e metal; fiação aérea nas cidades.",
    road:"Linhas brancas gastas; <b>quebra-molas</b> altíssimos e frequentes até em rodovias.",
    sign:"Direcionais <b>azuis</b> com árabe e inglês; placas marrons para sítios turísticos (Petra, Jerash).",
    arch:"Casas de concreto inacabadas com ferragem exposta; mesquitas com minarete quadrado ou cilíndrico.",
    nat:"Deserto de basalto e arenito (Wadi Rum ao sul), vale do Jordão fértil a oeste, planalto seco no centro.",
    extra:"A cor dominante da paisagem é o bege-amarelado, com pouquíssima vegetação natural."
  },
  cf:[{n:"Israel",t:"IL tem hebraico e placas amarelas."},
      {n:"Emirados/Catar",t:"Golfo é muito mais rico visualmente, com arranha-céus e estradas impecáveis."}]
},
{
  id:"lebanon", n:"Líbano", en:"Lebanon", fl:"🇱🇧", rg:"Ásia", cov:"Parcial", dif:3,
  side:"Direita", dom:".lb", lang:"Árabe (e francês)", scr:"Árabe e Latino",
  plate:"Branca com números pretos e um <b>cedro verde</b>; texto em árabe",
  tldr:"Montanhas íngremes caindo no Mediterrâneo, prédios densos e influência francesa.",
  quick:[
    "<b>Cedro</b> na bandeira, em placas e em muitos logotipos",
    "Montanhas muito íngremes a poucos quilômetros do mar",
    "Sinalização em árabe e <b>francês</b> (herança do mandato francês)",
    "Prédios de apartamentos densos empilhados em encostas"
  ],
  m:{
    car:"Cobertura concentrada em Beirute e nas estradas principais.",
    bol:"Poucos delineadores; barreiras de concreto em estradas de montanha.",
    pol:"Fiação aérea extremamente emaranhada; geradores privados nas ruas (por causa dos cortes de energia).",
    road:"Asfalto irregular; trânsito caótico; poucas marcações visíveis.",
    sign:"Placas em árabe e francês/inglês; muitas placas antigas e enferrujadas.",
    arch:"Prédios de concreto com varandas e persianas; construções com arcos triplos no estilo libanês tradicional.",
    nat:"Montanhas do Líbano com cedros e neve no inverno, vale do Beqaa agrícola, costa mediterrânea urbanizada.",
    extra:"Cartazes políticos e religiosos, além de bandeiras de partidos, são muito visíveis."
  },
  cf:[{n:"Síria",t:"Sem cobertura oficial ampla."},
      {n:"Israel",t:"IL é muito mais organizado e usa hebraico."}]
},
{
  id:"uae", n:"Emirados Árabes Unidos", en:"United Arab Emirates", fl:"🇦🇪", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".ae", lang:"Árabe e Inglês", scr:"Árabe e Latino",
  plate:"Branca com números pretos e o <b>nome do emirado</b> (Dubai, Abu Dhabi, Sharjah) na lateral",
  tldr:"Deserto de areia laranja, rodovias perfeitas de 6 faixas e arranha-céus futuristas.",
  quick:[
    "<b>Areia laranja-avermelhada</b> encostando diretamente no asfalto impecável",
    "Rodovias larguíssimas com <b>iluminação central altíssima</b> e acostamento perfeito",
    "Placas direcionais <b>verdes</b> com árabe e inglês, fonte muito legível",
    "Palmeiras plantadas em fileiras com irrigação por gotejamento visível"
  ],
  m:{
    car:"Cobertura completa e de alta qualidade.",
    bol:"Delineadores brancos e barreiras de concreto; cercas contra areia ao longo das rodovias.",
    pol:"Postes de iluminação altos e uniformes; fiação enterrada nas cidades.",
    road:"Marcação branca perfeita; muitas rotatórias grandes; radares em quase todo trecho.",
    sign:"Direcionais <b>verdes</b> nas rodovias e <b>azuis</b> nas urbanas, sempre bilíngues.",
    arch:"Torres de vidro em Dubai e Abu Dhabi; vilas bege com muros altos; mesquitas com cúpula e minarete.",
    nat:"Deserto de dunas, oásis com palmeiras, montanhas Hajar rochosas a leste (Fujairah, Ras al-Khaimah).",
    extra:"O contraste entre luxo extremo e deserto vazio é o marcador do país."
  },
  cf:[{n:"Catar",t:"QA é menor e mais plano, com placas diferentes."},
      {n:"Arábia Saudita",t:"Cobertura limitada; sinalização e placas distintas."},
      {n:"Omã",t:"Mais montanhoso, com arquitetura tradicional mais preservada."}]
},
{
  id:"qatar", n:"Catar", en:"Qatar", fl:"🇶🇦", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".qa", lang:"Árabe e Inglês", scr:"Árabe e Latino",
  plate:"Branca com números pretos e 'Qatar' em árabe e inglês",
  tldr:"Península plana e arenosa, quase toda urbanizada em torno de Doha.",
  quick:[
    "Terreno <b>extremamente plano</b> e areia clara, quase branca",
    "Praticamente toda a população vive em Doha e arredores",
    "Rodovias novas com muitas rotatórias e canteiros ajardinados",
    "Sinalização bilíngue árabe/inglês com fundo verde ou azul"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Barreiras de concreto e delineadores brancos; cercas de areia.",
    pol:"Iluminação pública uniforme e alta; fiação enterrada.",
    road:"Asfalto novo, marcação impecável, canteiros centrais com palmeiras e grama irrigada.",
    sign:"Direcionais verdes e azuis com árabe e inglês.",
    arch:"Torres modernas em Doha, vilas bege de dois andares com muro, mesquitas com minarete espiralado (Fanar).",
    nat:"Deserto plano com areia clara, sem montanhas, litoral raso e salinas (sabkha).",
    extra:"O país é tão pequeno e plano que a variação de paisagem é mínima — foque em placas e infraestrutura."
  },
  cf:[{n:"Emirados",t:"UAE tem dunas maiores e montanhas a leste; placas mostram o emirado."},
      {n:"Bahrein/Kuwait",t:"Cobertura menor; a placa e o nome nas rodovias ajudam."}]
},
{
  id:"india", n:"Índia", en:"India", fl:"🇮🇳", rg:"Ásia", cov:"Completa", dif:3,
  side:"Esquerda", dom:".in", lang:"Hindi, Inglês e 20+ idiomas oficiais", scr:"Devanágari, Tâmil, Telugo, Bengali e outros",
  plate:"Branca com letras pretas (particulares) ou <b>amarela com letras pretas</b> (comerciais); o código de estado abre a placa",
  tldr:"Direção pela esquerda, tuk-tuks amarelos e verdes, e um alfabeto diferente a cada estado.",
  quick:[
    "Direção pela <b>esquerda</b> com trânsito muito denso e caótico",
    "<b>Auto-riquixás</b> (tuk-tuks) amarelos com teto verde ou preto",
    "Caminhões coloridos e decorados com 'HORN OK PLEASE' pintado atrás",
    "A <b>escrita muda por estado</b> — devanágari no norte, tâmil no sul, bengali a leste"
  ],
  m:{
    car:"A cobertura indiana é recente (a partir de 2022) e feita em parceria local; muitas imagens têm qualidade e enquadramento variáveis, e é comum ver o <b>rack de teto</b> do veículo.",
    bol:"Delineadores brancos com faixa preta ou pedras pintadas de branco e preto na borda da estrada.",
    pol:"Postes de concreto e metal com fiação muito emaranhada; transformadores pendurados.",
    road:"Marcação branca desgastada; muitas estradas sem linha. Rodovias nacionais (NH) modernas em corredores principais.",
    sign:"Placas com <b>duas ou três escritas</b>: idioma local, hindi e inglês. Marcos quilométricos amarelos e brancos.",
    arch:"Prédios de concreto com telhado plano e caixa d'água preta; templos hindus com gopuram colorido no sul; mesquitas e igrejas conforme a região.",
    nat:"Himalaia ao norte, planície do Ganges no centro-norte, planalto do Decão seco, Gates Ocidentais tropicais, Kerala com coqueiros.",
    extra:"O <b>código de estado</b> na placa (MH Maharashtra, TN Tamil Nadu, KA Karnataka, DL Delhi, KL Kerala, UP Uttar Pradesh) é a pista mais precisa que existe."
  },
  rgs:[
    {n:"Norte (Punjab, UP, Rajastão)", t:"Devanágari e gurmukhi, planície agrícola, tijolo, poeira, deserto no Rajastão."},
    {n:"Sul (TN, Kerala, Karnataka, AP)", t:"Escritas dravídicas arredondadas, coqueiros, templos coloridos, mais verde."},
    {n:"Leste (Bengala, Odisha)", t:"Bengali, arroz, bananeiras, umidade alta."},
    {n:"Himalaia (HP, Uttarakhand, Sikkim)", t:"Montanhas, casas de pedra e madeira, bandeirinhas de oração no nordeste."},
    {n:"Nordeste (Assam, Meghalaya)", t:"Chá em terraços, floresta densa, feições do leste asiático."}
  ],
  cf:[{n:"Bangladesh",t:"BD é só bengali, mais plano e ainda mais denso."},
      {n:"Sri Lanka",t:"LK usa cingalês (letras muito redondas) e é uma ilha tropical."},
      {n:"Nepal",t:"NP usa devanágari também, mas tem montanhas e bandeirinhas budistas."}]
},
{
  id:"sri-lanka", n:"Sri Lanka", en:"Sri Lanka", fl:"🇱🇰", rg:"Ásia", cov:"Completa", dif:3,
  side:"Esquerda", dom:".lk", lang:"Cingalês e Tâmil", scr:"Cingalês, Tâmil, Latino",
  plate:"Branca com letras pretas e faixa lateral; comerciais em amarelo",
  tldr:"Escrita cingalesa muito arredondada, tuk-tuks por toda parte e verde tropical intenso.",
  quick:[
    "<b>Cingalês</b>: letras extremamente redondas e curvas, sem linha horizontal no topo",
    "Placas geralmente <b>trilíngues</b>: cingalês, tâmil e inglês",
    "Tuk-tuks em massa e ônibus coloridos",
    "Coqueiros, arrozais e plantações de chá em terraços no centro"
  ],
  m:{
    car:"Cobertura ampla; a qualidade da imagem varia bastante entre regiões.",
    bol:"Delineadores brancos e pretos, muitos de concreto quadrado; guard-rails em estradas de montanha.",
    pol:"Postes de concreto e metal com fiação aérea densa.",
    road:"Estradas estreitas com marcação branca; trânsito misto com bicicletas, motos e tuk-tuks.",
    sign:"Placas de aviso brancas com borda vermelha; direcionais em três escritas.",
    arch:"Casas de concreto com telha vermelha, templos budistas com estupa branca em forma de sino, estátuas de Buda à beira da estrada.",
    nat:"Planície costeira com coqueiros, planalto central com chá e névoa, zona seca ao norte e leste.",
    extra:"Estátuas e santuários budistas brancos e dourados na beira da estrada são muito comuns."
  },
  cf:[{n:"Índia (Tamil Nadu)",t:"Muito parecido no norte do Sri Lanka; o cingalês nas placas resolve."},
      {n:"Bangladesh",t:"BD é plano e usa bengali."}]
},
{
  id:"bangladesh", n:"Bangladesh", en:"Bangladesh", fl:"🇧🇩", rg:"Ásia", cov:"Completa", dif:3,
  side:"Esquerda", dom:".bd", lang:"Bengali", scr:"Bengali",
  plate:"Placas com <b>escrita bengali</b>, fundo verde/branco conforme categoria",
  tldr:"Delta plano e verde, densidade humana extrema e riquixás por toda parte.",
  quick:[
    "<b>Bengali</b>: escrita com uma linha horizontal contínua no topo das letras",
    "Terreno <b>plano como uma mesa</b>, com água, arrozais e bananeiras em toda vista",
    "<b>Riquixás de pedal</b> coloridos e caminhões decorados",
    "Densidade populacional visivelmente extrema, mesmo em áreas rurais"
  ],
  m:{
    car:"Cobertura ampla nas estradas principais; imagens frequentemente com muita gente na via.",
    bol:"Poucos delineadores; guard-rails ausentes na maior parte.",
    pol:"Postes de concreto e bambu; fiação aérea muito emaranhada.",
    road:"Estradas estreitas de asfalto elevadas sobre o terreno alagado; marcação quase inexistente.",
    sign:"Placas em bengali, às vezes com inglês. Numeração N (nacional) e R (regional).",
    arch:"Casas de tijolo vermelho aparente e de chapa metálica ondulada; mesquitas pequenas com cúpula verde.",
    nat:"Delta do Ganges-Brahmaputra: rios largos, arrozais, palmeiras, bananeiras. Colinas apenas no sudeste (Chittagong).",
    extra:"A elevação da estrada acima dos campos alagados é uma assinatura visual do país."
  },
  cf:[{n:"Índia (Bengala Ocidental)",t:"Mesma escrita e paisagem; procure placas de veículo e códigos de estado indianos (WB)."},
      {n:"Mianmar",t:"Escrita birmanesa é circular e muito diferente."}]
},
{
  id:"bhutan", n:"Butão", en:"Bhutan", fl:"🇧🇹", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".bt", lang:"Dzongkha", scr:"Tibetano",
  plate:"Branca ou <b>vermelha</b> (veículos oficiais) com números pretos e escrita tibetana",
  tldr:"Arquitetura tradicional obrigatória por lei: madeira entalhada e pintada em todo prédio.",
  quick:[
    "<b>Toda construção</b> segue o estilo tradicional: madeira entalhada, pintura colorida e telhado inclinado — é lei",
    "Escrita <b>tibetana</b> nas placas, junto com inglês",
    "Bandeirinhas de oração coloridas e stupas brancas (chorten) nas estradas",
    "Montanhas do Himalaia com floresta densa e vales profundos"
  ],
  m:{
    car:"Cobertura nas estradas principais e nos vales habitados.",
    bol:"Delineadores brancos e pretos; muitas estradas de montanha sem proteção.",
    pol:"Postes de concreto e madeira; fiação simples.",
    road:"Estradas estreitas e sinuosas, muitas em obras de alargamento, com deslizamentos frequentes.",
    sign:"Placas em dzongkha e inglês; avisos rimados e bem-humorados sobre direção segura são famosos.",
    arch:"Dzongs (fortalezas-mosteiro) brancos e enormes; casas com janelas em arco trilobado e vigas pintadas.",
    nat:"Floresta densa de coníferas e rododendros, Himalaia ao norte, vales subtropicais ao sul.",
    extra:"Sem semáforos no país inteiro; a capital Timbu usa um guarda de trânsito em um quiosque."
  },
  cf:[{n:"Nepal",t:"NP usa devanágari e é mais denso e pobre visualmente."},
      {n:"Índia (Sikkim)",t:"Muito parecido; procure placas indianas e o código SK."}]
},
{
  id:"nepal", n:"Nepal", en:"Nepal", fl:"🇳🇵", rg:"Ásia", cov:"Parcial", dif:3,
  side:"Esquerda", dom:".np", lang:"Nepali", scr:"Devanágari",
  plate:"Placas com <b>devanágari</b>, fundo vermelho (particulares) ou preto/branco",
  tldr:"Devanágari com direção pela esquerda em terreno montanhoso — combinação única.",
  quick:[
    "<b>Devanágari</b> (como na Índia) mas com placas de veículo <b>vermelhas</b> e numerais nepaleses",
    "Direção pela <b>esquerda</b> em vales e encostas do Himalaia",
    "Bandeirinhas de oração, stupas com <b>olhos de Buda</b> pintados",
    "Ônibus e caminhões indianos (Tata) muito decorados"
  ],
  m:{
    car:"Cobertura concentrada em Katmandu, Pokhara, no Terai e em trilhas famosas (parte é photosphere de trekking).",
    bol:"Poucos delineadores; guard-rails escassos em estradas de precipício.",
    pol:"Postes de concreto e madeira; fiação extremamente emaranhada em Katmandu.",
    road:"Estradas de terra e asfalto esburacado; poeira intensa na estação seca.",
    sign:"Placas em nepali e inglês; marcos quilométricos simples.",
    arch:"Tijolo vermelho com madeira entalhada no Vale de Katmandu; casas de pedra e barro nas montanhas; concreto com pilares no Terai.",
    nat:"Terai plano e tropical ao sul, colinas médias no centro, Himalaia com picos nevados ao norte.",
    extra:"Se você vê devanágari, montanha alta e placa vermelha, é Nepal e não Índia."
  },
  cf:[{n:"Índia",t:"IN tem códigos de estado nas placas e paisagem mais plana no norte."},
      {n:"Butão",t:"BT usa escrita tibetana e tem arquitetura padronizada."}]
},
{
  id:"mongolia", n:"Mongólia", en:"Mongolia", fl:"🇲🇳", rg:"Ásia", cov:"Parcial", dif:2,
  side:"Direita", dom:".mn", lang:"Mongol", scr:"Cirílico (com ө e ү)",
  plate:"Branca com números pretos, faixa azul com 'MGL' e a bandeira",
  tldr:"Estepe infinita e vazia, gers (yurts) brancas e cirílico com <b>ө</b> e <b>ү</b>.",
  quick:[
    "Cirílico com as letras <b>ө</b> e <b>ү</b> — exclusivas do mongol",
    "<b>Estepe aberta</b> sem cercas, sem árvores e sem construções por quilômetros",
    "<b>Gers</b> (tendas circulares brancas) isoladas ou em grupos",
    "Rebanhos de cavalos, ovelhas, cabras e camelos soltos na estrada"
  ],
  m:{
    car:"Cobertura limitada às estradas principais e a Ulaanbaatar; muitas trilhas de terra sem cobertura.",
    bol:"Praticamente inexistentes fora das rodovias asfaltadas.",
    pol:"Poucos postes; linhas de transmissão isoladas cruzando a estepe.",
    road:"Poucas estradas pavimentadas; muitas pistas de terra paralelas cruzando o campo.",
    sign:"Placas em cirílico mongol; sinalização escassa fora das rotas principais.",
    arch:"Ulaanbaatar tem blocos soviéticos e torres novas; fora dela, gers e construções baixas de madeira.",
    nat:"Estepe no centro, deserto de Gobi ao sul, montanhas e floresta no norte e oeste (Altai, Khövsgöl).",
    extra:"<b>Ovoos</b> (montes de pedra com bandeirinhas azuis) em topos de colina e passagens de montanha."
  },
  cf:[{n:"Cazaquistão",t:"KZ tem estepe parecida, mas mais infraestrutura e outro cirílico."},
      {n:"Rússia (Buriácia/Tuva)",t:"Cultura parecida; a placa RUS resolve."}]
},
{
  id:"kazakhstan", n:"Cazaquistão", en:"Kazakhstan", fl:"🇰🇿", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".kz", lang:"Cazaque e Russo", scr:"Cirílico (com ә, ғ, қ, ң, ө, ұ, ү, һ, і)",
  plate:"Branca com números pretos e faixa azul com <b>KZ</b> e a bandeira",
  tldr:"Estepe plana sem fim, cirílico com letras extras e placas KZ em azul.",
  quick:[
    "Cirílico com letras <b>ә, қ, ғ, ң, ұ</b> — o cazaque tem mais letras que o russo",
    "Placa com bloco azul <b>KZ</b> e a bandeira azul-clara com sol e águia",
    "<b>Estepe absolutamente plana</b> e vazia, com horizonte reto em 360°",
    "Sinalização bilíngue cazaque/russo"
  ],
  m:{
    car:"Cobertura ampla nas rodovias principais e cidades.",
    bol:"Delineadores brancos com faixa preta; muitos trechos sem nenhuma proteção.",
    pol:"Postes de concreto com travessas; linhas de transmissão longas cruzando a estepe.",
    road:"Rodovias novas em corredores principais e estradas muito degradadas fora deles.",
    sign:"Direcionais azuis e verdes em cazaque e russo.",
    arch:"Blocos soviéticos, casas baixas de tijolo com telhado de chapa, mesquitas modernas; Astana com arquitetura futurista.",
    nat:"Estepe no centro e norte, deserto e semideserto ao sul, montanhas Tian Shan no sudeste (Almaty).",
    extra:"O tamanho do país é enorme — o sudeste montanhoso não parece nada com o oeste desértico."
  },
  cf:[{n:"Rússia",t:"RU tem placa com bloco RUS e mais bétulas."},
      {n:"Quirguistão",t:"KG é muito mais montanhoso."},
      {n:"Mongólia",t:"MN tem estepe parecida mas quase nenhuma infraestrutura."}]
},
{
  id:"kyrgyzstan", n:"Quirguistão", en:"Kyrgyzstan", fl:"🇰🇬", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".kg", lang:"Quirguiz e Russo", scr:"Cirílico (com ң, ө, ү)",
  plate:"Branca com números pretos e faixa azul com <b>KG</b>",
  tldr:"Montanhas altíssimas em quase todo o território, com estepe de altitude e cavalos.",
  quick:[
    "Cirílico com <b>ң, ө, ү</b> e placas <b>KG</b>",
    "Terreno montanhoso em <b>90% do país</b> (Tian Shan), com picos nevados constantes",
    "Pastagens de altitude (jailoo) com yurts brancas no verão",
    "Lago Issyk-Kul: enorme, azul, cercado de montanhas"
  ],
  m:{
    car:"Cobertura razoável nas estradas principais e vales habitados.",
    bol:"Delineadores brancos e pretos em estradas de montanha; guard-rails irregulares.",
    pol:"Postes de concreto e madeira; fiação simples.",
    road:"Estradas de montanha com passagens altas (Too-Ashuu, Dolon); asfalto variável e muita terra.",
    sign:"Placas em quirguiz e russo; sinalização escassa em áreas remotas.",
    arch:"Casas baixas de tijolo e barro com telhado de chapa e portões pintados de azul; blocos soviéticos em Bishkek.",
    nat:"Montanhas com neve o ano todo, vales verdes, florestas de nogueira no sul, estepe de altitude.",
    extra:"Cemitérios muçulmanos com mausoléus de tijolo e cúpulas metálicas à beira das estradas são muito característicos da Ásia Central."
  },
  cf:[{n:"Cazaquistão",t:"KZ é plano na maior parte."},
      {n:"Tajiquistão",t:"Cobertura muito limitada."},
      {n:"Geórgia/Armênia",t:"Alfabetos próprios resolvem."}]
},
{
  id:"japan", n:"Japão", en:"Japan", fl:"🇯🇵", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".jp", lang:"Japonês", scr:"Kanji, Hiragana, Katakana",
  plate:"Branca com caracteres pretos (particulares) ou <b>amarela</b> (kei cars); nome da região em kanji no topo",
  tldr:"Hiragana e katakana, kei cars amarelos, e espelhos convexos laranja em cada curva.",
  quick:[
    "<b>Hiragana</b> (curvo) e <b>katakana</b> (anguloso) junto com kanji — só o Japão usa os três",
    "<b>Kei cars</b> quadradinhos com placa <b>amarela</b>",
    "<b>Espelhos convexos</b> redondos com moldura laranja em cruzamentos e curvas — extremamente comuns",
    "Postes de concreto com muitos transformadores cilíndricos e fiação densa"
  ],
  m:{
    car:"Cobertura completa e recente, incluindo ilhas remotas. Em áreas rurais aparece cobertura com câmeras menores.",
    bol:"Delineadores brancos e postes de neve <b>laranja e branco</b> altos no norte (Hokkaido, Tohoku) com setas apontando para baixo.",
    pol:"Postes de concreto cinza com transformadores cilíndricos grandes; fiação aérea em quase todo lugar (raramente enterrada).",
    road:"Linhas brancas e <b>amarelas</b> (amarela contínua = proibido ultrapassar). Marcações de faixa de pedestre em blocos largos.",
    sign:"Direcionais <b>azuis</b> nas vias comuns e <b>verdes</b> nas expressas. Sempre com japonês e romaji (alfabeto latino) abaixo.",
    arch:"Casas com telhado de telha escura curva e paredes claras; prédios estreitos e altos nas cidades; portais torii vermelhos em santuários.",
    nat:"Montanhas florestadas cobrindo 70% do país, cedros japoneses (sugi) plantados em fileiras, arrozais em terraços, bambu.",
    extra:"O <b>prefixo da placa em kanji</b> indica a região exata — muito útil para quem estuda os caracteres."
  },
  rgs:[
    {n:"Hokkaido (norte)", t:"Postes de neve laranja, campos grandes e retos, celeiros, poucas árvores em fazendas — parece Europa/Canadá."},
    {n:"Honshu (principal)", t:"Densidade alta, montanhas, arrozais, cidades emendadas."},
    {n:"Kyushu/Shikoku (sul)", t:"Mais subtropical, palmeiras, vulcões ativos, terraços."},
    {n:"Okinawa", t:"Tropical, casas de concreto com telhado plano, tanques d'água, vegetação de ilha."}
  ],
  cf:[{n:"Coreia do Sul",t:"KR usa hangul (círculos e linhas retas) e dirige pela direita."},
      {n:"Taiwan",t:"TW usa kanji tradicional sem hiragana e dirige pela direita."}]
},
{
  id:"south-korea", n:"Coreia do Sul", en:"South Korea", fl:"🇰🇷", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".kr", lang:"Coreano", scr:"Hangul",
  plate:"Branca com caracteres pretos; modelos antigos em <b>verde</b> com branco",
  tldr:"Hangul (círculos e traços), torres de apartamentos numeradas e montanhas verdes.",
  quick:[
    "<b>Hangul</b>: blocos com círculos e linhas retas — visualmente único",
    "Conjuntos de <b>torres residenciais idênticas com número gigante</b> pintado na fachada",
    "Cruzes vermelhas de igrejas protestantes iluminadas em todo horizonte urbano",
    "Estufas de plástico curvas em massa nas áreas agrícolas"
  ],
  m:{
    car:"Cobertura completa e de alta qualidade.",
    bol:"Delineadores brancos e barreiras metálicas com refletores; postes plásticos flexíveis laranja em canteiros.",
    pol:"Postes de concreto cinza com transformadores; fiação aérea densa em áreas antigas.",
    road:"Marcação branca e amarela (amarela separa sentidos opostos); faixas de pedestre bem marcadas; câmeras de velocidade sinalizadas.",
    sign:"Direcionais <b>verdes</b> nas expressas e <b>azuis</b> nas vias comuns, com hangul e inglês.",
    arch:"Torres de apartamentos altíssimas em blocos idênticos; casas baixas com telhado de telha nas áreas antigas; templos budistas com beirais coloridos (dancheong).",
    nat:"Montanhas cobertas de pinheiros ocupam 70% do país; arrozais nos vales; costa muito recortada a oeste e sul.",
    extra:"Túmulos em forma de <b>montinhos de grama arredondados</b> em encostas são um marcador coreano."
  },
  cf:[{n:"Japão",t:"JP dirige pela esquerda e usa hiragana."},
      {n:"China",t:"CN usa caracteres simplificados e tem cobertura oficial muito limitada."}]
},
{
  id:"taiwan", n:"Taiwan", en:"Taiwan", fl:"🇹🇼", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".tw", lang:"Mandarim", scr:"Chinês tradicional",
  plate:"Branca com letras e números pretos, separados por hífen",
  tldr:"Chinês tradicional, scooters em enxame e prédios com azulejos e grades nas janelas.",
  quick:[
    "<b>Chinês tradicional</b> (caracteres complexos) — a China continental usa simplificado",
    "<b>Scooters</b> às centenas, com faixas de espera próprias nos cruzamentos",
    "Prédios revestidos de <b>azulejo</b> com grades de metal em todas as janelas e varandas",
    "Montanhas altíssimas e florestadas no centro-leste; planície urbanizada a oeste"
  ],
  m:{
    car:"Cobertura completa e recente, incluindo estradas de montanha.",
    bol:"Delineadores brancos e amarelos; barreiras de concreto em estradas de encosta.",
    pol:"Postes de concreto e metal com fiação densa; muitos com caixas e transformadores.",
    road:"Marcação branca e amarela; setas e textos pintados no asfalto; faixas exclusivas para scooters.",
    sign:"Direcionais <b>verdes</b> nas vias principais e <b>azuis</b> nas expressas, com chinês e inglês (pinyin).",
    arch:"Prédios de concreto com azulejo bege ou marrom, caixas d'água de aço inox no telhado, templos taoístas muito coloridos com dragões.",
    nat:"Cordilheira Central com florestas subtropicais e névoa, arrozais e viveiros de peixe na planície oeste, costa leste com penhascos.",
    extra:"As <b>caixas d'água cilíndricas de aço inox</b> nos telhados são quase universais."
  },
  cf:[{n:"China",t:"CN usa caracteres simplificados; cobertura oficial praticamente inexistente."},
      {n:"Hong Kong",t:"HK dirige pela esquerda."},
      {n:"Japão",t:"JP tem hiragana e dirige pela esquerda."}]
},
{
  id:"hong-kong", n:"Hong Kong", en:"Hong Kong", fl:"🇭🇰", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".hk", lang:"Cantonês e Inglês", scr:"Chinês tradicional e Latino",
  plate:"Branca na frente, <b>amarela atrás</b> (padrão britânico) com caracteres pretos",
  tldr:"Chinês tradicional + direção pela esquerda + arranha-céus verticais em encosta.",
  quick:[
    "<b>Chinês tradicional</b> com direção pela <b>esquerda</b> e placa traseira amarela",
    "Densidade vertical extrema: torres residenciais finíssimas de 40+ andares",
    "Sinalização britânica bilíngue chinês/inglês",
    "Táxis <b>vermelhos</b> com teto prateado (verdes nos Novos Territórios, azuis em Lantau)"
  ],
  m:{
    car:"Cobertura completa, incluindo ilhas periféricas.",
    bol:"Barreiras metálicas urbanas e cercas anti-pedestre no meio da via.",
    pol:"Fiação enterrada nas áreas centrais; postes em áreas rurais dos Novos Territórios.",
    road:"Marcação branca e amarela no padrão britânico; linhas amarelas duplas junto ao meio-fio.",
    sign:"Placas britânicas em chinês e inglês; nomes de rua em placa retangular bilíngue.",
    arch:"Torres residenciais estreitas com ar-condicionado em cada janela e varandas com roupas penduradas; templos chineses pequenos.",
    nat:"Morros verdes íngremes com vegetação subtropical densa logo atrás da cidade; muitas trilhas e parques.",
    extra:"O contraste entre floresta e arranha-céu a poucos metros é a assinatura de Hong Kong."
  },
  cf:[{n:"Macau",t:"MO tem português nas placas e é muito menor."},
      {n:"Taiwan",t:"TW dirige pela direita."},
      {n:"Singapura",t:"SG é plana, mais verde e organizada, com inglês dominante."}]
},
{
  id:"macau", n:"Macau", en:"Macau", fl:"🇲🇴", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".mo", lang:"Cantonês e Português", scr:"Chinês tradicional e Latino",
  plate:"Branca na frente e amarela atrás, com letras pretas e prefixo <b>M</b>",
  tldr:"<b>Português</b> nas placas de rua com chinês tradicional — combinação exclusiva no mundo.",
  quick:[
    "Placas de rua com <b>português</b> e chinês (Rua de..., Avenida de..., Travessa de...)",
    "Calçada <b>portuguesa</b> em mosaico preto e branco",
    "Direção pela <b>esquerda</b>",
    "Cassinos gigantes e arquitetura colonial portuguesa amarela e branca"
  ],
  m:{
    car:"Cobertura completa do território.",
    bol:"Barreiras urbanas metálicas; espaço rural quase inexistente.",
    pol:"Fiação enterrada nas áreas principais.",
    road:"Ruas estreitas com marcação britânica; muitos viadutos e pontes para Taipa e Coloane.",
    sign:"Placas de rua em <b>azulejo azul e branco</b> no estilo português, com o nome também em chinês.",
    arch:"Igrejas e prédios coloniais portugueses em amarelo, rosa e branco; torres residenciais chinesas; cassinos monumentais.",
    nat:"Colinas verdes em Coloane; o resto é quase todo construído ou aterrado.",
    extra:"Se você vê português e chinês juntos, é Macau — não existe outro lugar assim."
  },
  cf:[{n:"Hong Kong",t:"HK não tem português."},
      {n:"Portugal",t:"O chinês resolve imediatamente."}]
},
{
  id:"singapore", n:"Singapura", en:"Singapore", fl:"🇸🇬", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".sg", lang:"Inglês, Mandarim, Malaio, Tâmil", scr:"Latino e outros",
  plate:"Branca na frente, <b>amarela atrás</b>, com prefixo 'S' e letras pretas",
  tldr:"Cidade-estado impecável: inglês, direção pela esquerda e vegetação tropical podada.",
  quick:[
    "<b>Inglês</b> dominante com direção pela <b>esquerda</b> em ambiente tropical",
    "Limpeza e organização extremas: asfalto perfeito, jardins podados, sem lixo",
    "Blocos residenciais <b>HDB</b> altos e numerados, em cores pastéis",
    "Árvores tropicais altas plantadas em fileira sombreando as vias expressas"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Barreiras metálicas e blocos de concreto; guard-rails com padrão uniforme.",
    pol:"Fiação totalmente enterrada; postes de iluminação padronizados curvos.",
    road:"Marcação branca e amarela impecável; pórticos <b>ERP</b> de pedágio eletrônico sobre as vias expressas são um marcador claro.",
    sign:"Direcionais <b>verdes</b> nas expressas (PIE, ECP, CTE) e brancas nas locais, em inglês.",
    arch:"Torres HDB uniformes, arranha-céus de vidro no centro, shophouses coloniais coloridas em Chinatown e Little India.",
    nat:"Vegetação tropical densa e cuidada; poucos espaços naturais selvagens.",
    extra:"O tamanho é minúsculo — se parece a Malásia mas está limpo e organizado demais, é Singapura."
  },
  cf:[{n:"Malásia",t:"MY é menos organizada, com malaio dominante e mais palmeiras de óleo."},
      {n:"Hong Kong",t:"HK é vertical e montanhosa, com chinês dominante."}]
},
{
  id:"malaysia", n:"Malásia", en:"Malaysia", fl:"🇲🇾", rg:"Ásia", cov:"Completa", dif:3,
  side:"Esquerda", dom:".my", lang:"Malaio", scr:"Latino",
  plate:"<b>Preta com letras brancas</b> — combinação muito característica",
  tldr:"Placas pretas, malaio em alfabeto latino e palmeiras de óleo até o horizonte.",
  quick:[
    "Placas de veículo <b>pretas com caracteres brancos</b>",
    "<b>Malaio</b> em alfabeto latino: 'Jalan' (rua), 'Kampung' (vila), 'Bandar' (cidade)",
    "Plantações de <b>palma de óleo</b> em fileiras infinitas",
    "Direção pela esquerda; motos em grande quantidade com faixa própria"
  ],
  m:{
    car:"Cobertura ampla na península e em Bornéu (Sabah e Sarawak).",
    bol:"Delineadores brancos e barreiras metálicas; postes com refletores vermelhos.",
    pol:"Postes de concreto com fiação organizada nas rodovias; mais bagunçada nas vilas.",
    road:"Marcação branca e amarela; rodovias com pedágio de alta qualidade (PLUS).",
    sign:"Direcionais <b>verdes</b> nas expressas e <b>azuis</b> nas federais, em malaio. Placas de saída com 'Keluar'.",
    arch:"Casas de madeira sobre palafitas nas vilas; lojas de dois andares (shophouses) enfileiradas; mesquitas com cúpula.",
    nat:"Floresta tropical densa, palma de óleo e seringueiras em plantação, montanhas no centro da península.",
    extra:"Sabah e Sarawak (Bornéu) têm mais floresta primária, rios largos e povos indígenas."
  },
  cf:[{n:"Indonésia",t:"ID tem placas geralmente pretas também, mas dirige pela esquerda igual; a diferença está em bandeiras, prefixos de placa e ilhas."},
      {n:"Tailândia",t:"TH usa escrita tailandesa."},
      {n:"Singapura",t:"SG é muito mais organizada e usa inglês."}]
},
{
  id:"indonesia", n:"Indonésia", en:"Indonesia", fl:"🇮🇩", rg:"Ásia", cov:"Completa", dif:3,
  side:"Esquerda", dom:".id", lang:"Indonésio", scr:"Latino",
  plate:"<b>Preta com letras brancas</b> (modelos antigos) ou branca com pretas (novas)",
  tldr:"Arquipélago tropical enorme: vulcões, arrozais em terraço e motos em massa.",
  quick:[
    "<b>Indonésio</b> em latino: 'Jalan' (Jl.), 'Desa', 'Kabupaten', 'Selamat Datang'",
    "Densidade enorme de <b>motocicletas</b> e trânsito misto",
    "<b>Vulcões cônicos</b> ao fundo em Java, Sumatra e Bali",
    "Direção pela esquerda; placas de veículo com prefixo de região (B = Jacarta, D = Bandung, L = Surabaia)"
  ],
  m:{
    car:"Cobertura muito ampla, inclusive em ilhas menores; a qualidade varia bastante.",
    bol:"Delineadores brancos e pretos; barreiras de concreto pintadas em vermelho e branco.",
    pol:"Postes de concreto com fiação muito emaranhada; postes com faixas pretas e brancas.",
    road:"Estradas estreitas com marcação desgastada; quebra-molas frequentes nas vilas.",
    sign:"Direcionais <b>verdes</b> nas rodovias e azuis nas urbanas; muitos arcos de boas-vindas decorados na entrada das cidades.",
    arch:"Casas com telhado de telha vermelha e terraço; mesquitas com cúpula verde ou prateada; templos hindus em Bali com portais divididos (candi bentar).",
    nat:"Floresta tropical, arrozais em terraços, coqueiros, bananeiras, vulcões ativos.",
    extra:"Bali se distingue por templos hindus, oferendas nas calçadas e portões de pedra esculpida."
  },
  rgs:[
    {n:"Java", t:"Densíssima, vulcões, arrozais, cidades emendadas."},
    {n:"Sumatra", t:"Maior, mais floresta e plantação de palma, montanhas a oeste."},
    {n:"Bali/Nusa Tenggara", t:"Hinduísmo em Bali; ilhas a leste mais secas e áridas."},
    {n:"Kalimantan/Sulawesi/Papua", t:"Menos povoadas, rios largos, floresta densa, estradas de terra."}
  ],
  cf:[{n:"Malásia",t:"MY tem malaio quase idêntico; procure prefixos de placa e bandeiras."},
      {n:"Filipinas",t:"PH dirige pela direita e usa muito inglês."}]
},
{
  id:"philippines", n:"Filipinas", en:"Philippines", fl:"🇵🇭", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".ph", lang:"Filipino e Inglês", scr:"Latino",
  plate:"Branca com letras pretas e faixa lateral com a bandeira",
  tldr:"Direção pela <b>direita</b> na Ásia tropical, com inglês e <b>jeepneys</b> coloridos.",
  quick:[
    "<b>Jeepneys</b>: veículos alongados e muito decorados, exclusivos das Filipinas",
    "Direção pela <b>direita</b> — raro no Sudeste Asiático (vizinhos dirigem pela esquerda)",
    "<b>Inglês</b> em placas oficiais e comerciais, misturado com filipino",
    "Triciclos motorizados (moto com cabine lateral) em todas as cidades pequenas"
  ],
  m:{
    car:"Cobertura ampla nas ilhas principais.",
    bol:"Delineadores brancos e pretos; barreiras de concreto em rodovias.",
    pol:"Postes de concreto e madeira com fiação muito emaranhada.",
    road:"Muitas estradas de <b>concreto branco</b> com juntas, em vez de asfalto — marcador visual forte.",
    sign:"Placas em inglês; direcionais verdes e brancas; muitos outdoors e cartazes políticos com fotos de candidatos.",
    arch:"Casas de concreto com telhado de chapa metálica; igrejas católicas de pedra em estilo colonial espanhol; basquete em quadras cobertas em toda vila.",
    nat:"Coqueiros, arrozais, montanhas vulcânicas, floresta tropical, milhares de ilhas.",
    extra:"<b>Quadras de basquete</b> cobertas no centro de cada vila são um marcador filipino inconfundível."
  },
  cf:[{n:"Indonésia/Malásia",t:"Ambos dirigem pela esquerda."},
      {n:"América Latina",t:"Nomes espanhóis são comuns nas Filipinas; a vegetação e os jeepneys resolvem."}]
},
{
  id:"thailand", n:"Tailândia", en:"Thailand", fl:"🇹🇭", rg:"Ásia", cov:"Completa", dif:2,
  side:"Esquerda", dom:".th", lang:"Tailandês", scr:"Tailandês",
  plate:"Branca com caracteres tailandeses e números pretos; a província aparece embaixo",
  tldr:"Escrita tailandesa com laçadas, templos dourados e postes de concreto quadrados.",
  quick:[
    "<b>Escrita tailandesa</b>: letras com pequenos círculos e laçadas, sem linha no topo",
    "<b>Templos budistas</b> com telhados em camadas, dourado e vermelho, e estupas pontudas",
    "<b>Casas de espírito</b> (santuários em miniatura sobre um pilar) em frente a casas e lojas",
    "Direção pela esquerda; retratos da família real em outdoors e placas"
  ],
  m:{
    car:"Cobertura completa e boa em quase todo o país.",
    bol:"Delineadores brancos e pretos; barreiras de concreto pintadas com listras.",
    pol:"Postes de concreto de seção quadrada, afilados, com fiação bem emaranhada.",
    road:"Marcação branca e amarela; rodovias amplas com canteiro central; muitos retornos em U.",
    sign:"Direcionais <b>azuis</b> e verdes com tailandês e inglês; marcos quilométricos brancos e pretos.",
    arch:"Lojas de concreto de dois andares alinhadas; templos (wat) com ouro e telhado curvo; casas de madeira sobre pilares no interior.",
    nat:"Arrozais no centro, montanhas florestadas no norte, praias e calcário no sul, planalto seco no nordeste (Isaan).",
    extra:"Bandeiras amarelas reais e arranjos com a bandeira nacional em postes são muito comuns."
  },
  rgs:[
    {n:"Norte (Chiang Mai)", t:"Montanhas, florestas, névoa, templos em encosta."},
    {n:"Isaan (nordeste)", t:"Planalto seco, arrozais, mais pobre e plano, influência lao."},
    {n:"Centro (Bangkok)", t:"Planície do Chao Phraya, canais, densidade alta."},
    {n:"Sul", t:"Península estreita, palmas, calcário cárstico, mesquitas na fronteira com a Malásia."}
  ],
  cf:[{n:"Laos",t:"LA usa escrita parecida mas mais arredondada; dirige pela <b>direita</b>."},
      {n:"Camboja",t:"KH usa khmer (mais anguloso) e dirige pela direita."}]
},
{
  id:"cambodia", n:"Camboja", en:"Cambodia", fl:"🇰🇭", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".kh", lang:"Khmer", scr:"Khmer",
  plate:"Branca com escrita khmer e números pretos; nome da província em khmer e latino",
  tldr:"Escrita khmer angulosa, planície de arrozais e casas de madeira sobre palafitas.",
  quick:[
    "<b>Khmer</b>: escrita angulosa com hastes verticais e curvas fechadas, sem linha no topo",
    "Direção pela <b>direita</b> (a Tailândia dirige pela esquerda)",
    "Casas de madeira <b>sobre palafitas altas</b>, com o térreo aberto usado como área de estar",
    "Terreno muito plano com arrozais e palmeiras-de-açúcar isoladas"
  ],
  m:{
    car:"Cobertura ampla nas rodovias e cidades principais.",
    bol:"Poucos delineadores; barreiras de concreto em pontes.",
    pol:"Postes de concreto e madeira; fiação aérea simples e emaranhada nas cidades.",
    road:"Muitas estradas de terra vermelha; asfalto nas rodovias nacionais (NR). Poeira intensa na estação seca.",
    sign:"Direcionais em khmer e inglês; marcos quilométricos amarelos.",
    arch:"Templos budistas (wat) coloridos com naga (serpentes) nos beirais; casas de madeira em palafitas; construções de concreto simples nas cidades.",
    nat:"Planície central com o lago Tonlé Sap, arrozais, palmeira-de-açúcar (símbolo nacional), floresta nas montanhas Cardamomo.",
    extra:"A <b>terra vermelha-alaranjada</b> nas estradas e acostamentos é bastante característica."
  },
  cf:[{n:"Tailândia",t:"TH dirige pela esquerda e tem escrita com laçadas circulares."},
      {n:"Laos",t:"LA é montanhoso no norte e usa escrita lao arredondada."},
      {n:"Vietnã",t:"VN usa alfabeto latino com muitos acentos."}]
},
{
  id:"laos", n:"Laos", en:"Laos", fl:"🇱🇦", rg:"Ásia", cov:"Completa", dif:3,
  side:"Direita", dom:".la", lang:"Lao", scr:"Lao",
  plate:"Branca ou <b>amarela</b> com escrita lao e números pretos",
  tldr:"Escrita lao muito arredondada, montanhas cársticas e pouquíssimo trânsito.",
  quick:[
    "<b>Escrita lao</b>: parecida com a tailandesa, porém mais <b>redonda e simples</b>, com menos ornamentos",
    "Direção pela <b>direita</b>",
    "Estradas quase vazias, com muito pouco tráfego mesmo em rodovias nacionais",
    "Montanhas cársticas verticais no norte e centro"
  ],
  m:{
    car:"Cobertura razoável nas rodovias principais e cidades; áreas remotas com pouca cobertura.",
    bol:"Poucos delineadores; guard-rails escassos em estradas de montanha.",
    pol:"Postes de concreto simples; fiação aérea básica.",
    road:"Estradas estreitas, muitas de terra; a Rodovia 13 é o eixo norte-sul.",
    sign:"Placas em lao, algumas com inglês; sinalização escassa.",
    arch:"Templos budistas com telhado baixo em várias camadas e beirais dourados; casas de madeira sobre pilares; influência colonial francesa em Luang Prabang e Vientiane.",
    nat:"Montanhas florestadas no norte, planalto de Bolaven ao sul, rio Mekong como fronteira oeste.",
    extra:"Bandeiras vermelhas com foice e martelo aparecem ao lado da bandeira nacional em prédios públicos."
  },
  cf:[{n:"Tailândia",t:"TH dirige pela esquerda, tem mais infraestrutura e escrita mais ornamentada."},
      {n:"Vietnã",t:"VN usa latino com acentos."},
      {n:"Camboja",t:"KH tem khmer anguloso e terreno mais plano."}]
},
{
  id:"vietnam", n:"Vietnã", en:"Vietnam", fl:"🇻🇳", rg:"Ásia", cov:"Completa", dif:2,
  side:"Direita", dom:".vn", lang:"Vietnamita", scr:"Latino com muitos diacríticos",
  plate:"Branca com números pretos (particulares) ou <b>amarela</b> (comerciais); o código de província abre a placa",
  tldr:"Latino com acentos empilhados, casas altas e estreitas, e um mar de motocicletas.",
  quick:[
    "Alfabeto latino com <b>vários acentos na mesma letra</b> (ế, ộ, ữ) — exclusivo do vietnamita",
    "<b>Casas-tubo</b>: prédios estreitíssimos, altos e coloridos, colados uns nos outros",
    "Quantidade extrema de <b>motocicletas</b>",
    "Bandeiras vermelhas com estrela amarela e cartazes de propaganda em vermelho e amarelo"
  ],
  m:{
    car:"Cobertura ampla e recente.",
    bol:"Delineadores brancos e pretos; barreiras de concreto listradas.",
    pol:"Postes de concreto com fiação muito emaranhada — um dos casos mais extremos do mundo.",
    road:"Marcação branca; rodovias nacionais (QL) com tráfego misto intenso e faixa lateral para motos.",
    sign:"Direcionais azuis e verdes em vietnamita; marcos quilométricos com nome da próxima cidade.",
    arch:"Casas-tubo de 3 a 5 andares com fachada decorada e varandas; templos e pagodes; arquitetura colonial francesa em Hanói e Ho Chi Minh.",
    nat:"Delta do Mekong ao sul (água por toda parte), delta do rio Vermelho ao norte, montanhas a oeste, costa longa com dunas no centro.",
    extra:"Chapéus cônicos (nón lá) e a poeira vermelha das terras altas centrais são pistas regionais úteis."
  },
  rgs:[
    {n:"Norte (Hanói, Sapa)", t:"Montanhas com terraços de arroz, inverno frio, arquitetura colonial."},
    {n:"Centro (Huế, Đà Nẵng)", t:"Costa estreita entre montanha e mar, dunas, areia clara."},
    {n:"Sul (Mekong)", t:"Plano, alagado, canais, barcos, palmeiras d'água."}
  ],
  cf:[{n:"Camboja/Laos",t:"Escritas próprias resolvem imediatamente."},
      {n:"China",t:"Cobertura oficial chinesa é praticamente inexistente."}]
}
]);
