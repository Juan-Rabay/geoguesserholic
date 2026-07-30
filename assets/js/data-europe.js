window.GG = window.GG || {};
GG.countries = (GG.countries || []).concat([
{
  id:"albania", n:"Albânia", en:"Albania", fl:"🇦🇱", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".al", lang:"Albanês", scr:"Latino (com ë e ç)",
  plate:"Branca, faixa azul da UE à esquerda com 'AL', letras pretas",
  tldr:"Bunkers de concreto, alfabeto com muitos 'ë', montanhas áridas e Mercedes por toda parte.",
  quick:[
    "Palavras cheias de <b>ë</b> e <b>ç</b> (Rrugë, Shqipëri) — combinação única na Europa",
    "<b>Bunkers</b> de concreto em forma de cogumelo espalhados pelo campo",
    "Proporção absurda de <b>Mercedes-Benz</b> antigos nas estradas",
    "Prédios pintados em cores fortes (heranças da revitalização de Tirana)"
  ],
  m:{
    car:"Cobertura antiga (Gen 3) em boa parte do país, com desfoque grosseiro e cores lavadas. O carro costuma ser branco com rack preto no teto.",
    bol:"Postes delineadores brancos com faixa preta e refletor vermelho. Guard-rails frequentemente enferrujados ou ausentes.",
    pol:"Postes de concreto quadrados e finos, muitos inclinados. Fiação aérea caótica, típica dos Bálcãs.",
    road:"Linha central branca contínua ou tracejada; bordas raramente marcadas fora das rodovias principais. Asfalto irregular.",
    sign:"Placas de direção azuis nas rodovias, brancas nas locais. 'Rrugë' = rua. Nomes com terminações -ë, -i, -it.",
    arch:"Casas inacabadas de tijolo vermelho aparente com pilares de concreto para andares futuros. Blocos socialistas repintados em cores vivas.",
    nat:"Montanhas cársticas secas no norte e interior; costa mediterrânea com oliveiras no sul e oeste.",
    extra:"Minaretes e igrejas ortodoxas convivem na mesma cidade — o país é religiosamente misto."
  },
  rgs:[
    {n:"Alpes Albaneses (norte)", t:"Vales profundos, picos calcários, estradas estreitas de montanha. Theth e Valbona."},
    {n:"Costa (oeste)", t:"Vlorë, Durrës, Sarandë. Praias, palmeiras, prédios turísticos e alta densidade."},
    {n:"Interior/leste", t:"Colinas secas, agricultura de subsistência, estradas de terra."}
  ],
  cf:[{n:"Kosovo",t:"Também albanófono; distinga pelas placas (RKS) e por Kosovo não ter costa."},
      {n:"Montenegro",t:"Alfabeto cirílico/latino misto e carro Google com rack; a Albânia usa só latino."}]
},
{
  id:"andorra", n:"Andorra", en:"Andorra", fl:"🇦🇩", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".ad", lang:"Catalão", scr:"Latino",
  plate:"Branca com faixa lateral, sem banda azul da UE (Andorra não é UE)",
  tldr:"Microestado 100% montanhoso nos Pirineus, com catalão e lojas duty-free.",
  quick:[
    "Território <b>inteiramente</b> alpino — nunca há terreno plano",
    "Catalão nas placas, mas <b>sem</b> a faixa azul da UE nos veículos",
    "Densidade de lojas, hotéis e outlets desproporcional ao tamanho",
    "Estradas com numeração <b>CG-</b> (Carretera General) e <b>CS-</b>"
  ],
  m:{
    car:"Cobertura boa e recente. Sem meta de carro relevante.",
    bol:"Postes brancos com refletor e barreiras de neve; sinalização de altitude comum.",
    pol:"Muitos cabos subterrâneos nas cidades; postes de concreto nos vales.",
    road:"Linhas brancas, curvas fechadas, muitos túneis e viadutos.",
    sign:"Placas em catalão. Setas e limites em km/h. Muitas placas de estação de esqui.",
    arch:"Pedra e ardósia com telhados escuros inclinados; prédios modernos altos em Andorra la Vella.",
    nat:"Pinheiros de altitude, rochas nuas acima da linha das árvores, neve grande parte do ano.",
    extra:"Se você vê catalão + montanha alta + sem faixa UE, é Andorra e não Espanha."
  },
  cf:[{n:"Espanha (Catalunha)",t:"Mesma língua; a Espanha tem placas com faixa azul UE e terreno mais variado."}]
},
{
  id:"austria", n:"Áustria", en:"Austria", fl:"🇦🇹", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".at", lang:"Alemão", scr:"Latino",
  plate:"Branca, faixa UE, brasão vermelho-branco-vermelho após o código regional",
  tldr:"Alemão + Alpes + postes delineadores brancos com topo preto e refletor.",
  quick:[
    "Alemão nas placas, mas relevo alpino em quase todo o país",
    "<b>Bollard</b> branco com faixa preta na parte de cima e refletor retangular",
    "Placas de rodovia com fundo <b>azul</b> (A) — na Alemanha são amarelas/azuis diferentes",
    "Casas com varandas de madeira e flores; celeiros alpinos"
  ],
  m:{
    car:"Cobertura moderna e nítida. Sem meta de carro forte.",
    bol:"Delineador branco com a faixa preta larga no topo — sinal muito confiável para separar da Alemanha e da Suíça.",
    pol:"Postes de concreto e de madeira nos vales; linhas elétricas discretas.",
    road:"Linha central branca; bordas brancas. Rodovias com sinalização azul e limite 130 km/h.",
    sign:"Nomes de localidade em placa branca com borda preta. 'Straße', 'Gasse', 'Weg'. Setas amarelas em áreas rurais.",
    arch:"Chalés alpinos, igrejas com torre bulbosa (cebola) verde ou cinza, fachadas amarelas e ocre no leste.",
    nat:"Alpes no oeste e sul; planície do Danúbio e vinhedos no leste (Burgenland, Baixa Áustria).",
    extra:"Placas de veículo com o código regional (W = Viena, G = Graz, S = Salzburg) ajudam na região."
  },
  rgs:[
    {n:"Tirol/Vorarlberg (oeste)", t:"Alta montanha, vales estreitos, arquitetura de madeira pesada."},
    {n:"Estíria/Caríntia (sul)", t:"Colinas verdes, vinhedos, lagos alpinos."},
    {n:"Baixa Áustria/Burgenland (leste)", t:"Planície, campos abertos, girassóis e vinhas — parece Hungria."}
  ],
  cf:[{n:"Alemanha (Baviera)",t:"Muito parecido; use o bollard (Áustria tem topo preto) e a placa de rodovia."},
      {n:"Suíça",t:"Suíça tem placas de rodovia verdes e bollards diferentes."}]
},
{
  id:"belgium", n:"Bélgica", en:"Belgium", fl:"🇧🇪", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".be", lang:"Neerlandês (norte), Francês (sul), Alemão (leste)", scr:"Latino",
  plate:"Fundo branco com letras/números <b>vermelho-escuros</b> — único na Europa",
  tldr:"Placa vermelha, iluminação pública laranja e estradas de concreto com juntas.",
  quick:[
    "<b>Placas vermelhas</b> sobre fundo branco — assinatura imediata",
    "Postes de iluminação <b>laranja/âmbar</b> altos ao longo de rodovias e ruas",
    "Estradas de <b>concreto</b> com juntas transversais e ruído visual",
    "Bilinguismo: neerlandês na Flandres, francês na Valônia, ambos em Bruxelas"
  ],
  m:{
    car:"Cobertura recente. Sem meta de carro.",
    bol:"Delineadores brancos com refletor vermelho na Valônia; postes plásticos brancos e vermelhos em obras.",
    pol:"Postes de concreto retangulares com furos, além de muitos postes de iluminação metálicos altos.",
    road:"Linha de borda branca contínua e faixa central tracejada; ciclovias vermelhas separadas são muito comuns.",
    sign:"Placas de rua em azul com borda branca (algumas em pedra). Placas direcionais brancas com texto preto e azul nas autoestradas.",
    arch:"Casas geminadas estreitas de tijolo, cada uma com fachada diferente — a 'fita' urbana belga é icônica. Muita construção sem recuo.",
    nat:"Terreno plano ao norte, colinas florestadas nas Ardenas (sudeste).",
    extra:"A Bélgica é o país mais iluminado do mundo à noite — postes por toda rodovia rural."
  },
  rgs:[
    {n:"Flandres (norte)", t:"Neerlandês, plano, denso, muita ciclovia e tijolo claro."},
    {n:"Valônia (sul)", t:"Francês, ondulado, casas de pedra cinza/azulada, mais rural."},
    {n:"Ardenas (sudeste)", t:"Florestas densas, vales, casas de pedra escura — pode lembrar Luxemburgo."}
  ],
  cf:[{n:"Países Baixos",t:"NL tem placas amarelas; Bélgica vermelhas. NL é mais plano e organizado."},
      {n:"Luxemburgo",t:"Placas amarelas em LU. Ardenas são parecidas dos dois lados."}]
},
{
  id:"bulgaria", n:"Bulgária", en:"Bulgaria", fl:"🇧🇬", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".bg", lang:"Búlgaro", scr:"Cirílico",
  plate:"Branca, faixa UE com 'BG', letras pretas",
  tldr:"Cirílico + faixa azul da UE = Bulgária (a única combinação assim na UE).",
  quick:[
    "<b>Cirílico</b> junto com <b>placa da UE</b> — só existe na Bulgária",
    "Carro Google costuma ter uma <b>antena longa e escura</b> visível na traseira",
    "Postes de concreto com braços em 'A' e muitas linhas de trólebus nas cidades",
    "Vinhedos, girassóis e campos de rosas no interior"
  ],
  m:{
    car:"Meta clássica: carro branco com uma antena escura alta e fina no compartimento traseiro, visível na parte inferior da imagem em várias regiões.",
    bol:"Delineadores brancos com topo escuro e refletor vermelho; muitos danificados ou tortos.",
    pol:"Postes de concreto cinza com furos e travessas de metal em 'A'.",
    road:"Linhas brancas desgastadas; muita estrada secundária sem borda pintada. Asfalto com remendos.",
    sign:"Placas em cirílico, muitas vezes com transliteração latina abaixo nas rodovias. Azul nas autoestradas.",
    arch:"Blocos socialistas de concreto (панелки), casas rurais de tijolo com telhado de duas águas, quintais murados.",
    nat:"Montanhas dos Bálcãs no centro, Rila e Pirin no sudoeste (alpinas), planície do Danúbio ao norte, litoral do Mar Negro a leste.",
    extra:"Placas de veículo começam com letras que indicam a região (С = Sófia, В = Varna)."
  },
  rgs:[
    {n:"Sofia e oeste", t:"Montanhas altas, Vitosha ao fundo, urbanização densa."},
    {n:"Planície do Danúbio (norte)", t:"Campos enormes, terreno ondulado suave, aldeias pobres."},
    {n:"Mar Negro (leste)", t:"Resorts, palmeiras plantadas, arquitetura turística."}
  ],
  cf:[{n:"Sérvia/Macedônia do Norte",t:"Também cirílico, mas sem faixa UE nas placas."},
      {n:"Rússia/Ucrânia",t:"Cirílico sem UE; paisagem muito mais aberta e postes diferentes."}]
},
{
  id:"croatia", n:"Croácia", en:"Croatia", fl:"🇭🇷", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".hr", lang:"Croata", scr:"Latino (č, ć, š, ž, đ)",
  plate:"Branca, faixa UE 'HR', brasão xadrez vermelho-branco entre letras e números",
  tldr:"Litoral adriático com telhado de terracota + interior panônico plano; latim com diacríticos.",
  quick:[
    "Letras <b>č ć š ž đ</b> e palavras como 'ulica', 'cesta', 'otok'",
    "Costa: pedra calcária branca, telhas laranja, mar azul-turquesa, ciprestes",
    "<b>Escudo xadrez</b> vermelho e branco em placas e brasões",
    "Autoestradas modernas com sinalização verde e muitos túneis"
  ],
  m:{
    car:"Cobertura boa. Sem meta de carro dominante.",
    bol:"Delineadores brancos com refletor; na costa, muros de pedra seca substituem guard-rails em trechos.",
    pol:"Postes de concreto redondos no interior; madeira em áreas rurais da Eslavônia.",
    road:"Linhas brancas bem mantidas nas rodovias; estradas costeiras estreitas e sinuosas.",
    sign:"Placas direcionais verdes nas autoestradas (A), azuis nas vias rápidas. Nomes de rua em placa branca com borda.",
    arch:"Casas de pedra clara com telhado de terracota na Dalmácia; casas com reboco amarelo/ocre no interior continental.",
    nat:"Karst calcário branco e maquis mediterrâneo na costa; carvalhos e campos férteis na Eslavônia.",
    extra:"Ilhas: mais de mil. Cobertura extensa em Hvar, Brač, Krk, Korčula."
  },
  rgs:[
    {n:"Dalmácia (costa sul)", t:"Rocha branca, mar, ciprestes, oliveiras. Split e Dubrovnik."},
    {n:"Ístria (noroeste)", t:"Mais verde, influência italiana, vilarejos no topo das colinas."},
    {n:"Eslavônia (leste)", t:"Planície agrícola, milho e trigo, casas alinhadas — parece Hungria/Sérvia."},
    {n:"Zagreb/Zagorje (norte)", t:"Colinas verdes, arquitetura austro-húngara."}
  ],
  cf:[{n:"Montenegro",t:"Costa similar; MNE não tem faixa UE nas placas."},
      {n:"Eslovênia",t:"Alfabeto sem 'ć' e 'đ'; terreno mais alpino."},
      {n:"Itália (Puglia)",t:"Telhados parecidos; a língua resolve."}]
},
{
  id:"czechia", n:"Chéquia", en:"Czechia", fl:"🇨🇿", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".cz", lang:"Tcheco", scr:"Latino (ř, ě, ů, č, š, ž)",
  plate:"Branca, faixa UE 'CZ', letras pretas",
  tldr:"Letra <b>ř</b> e <b>ů</b> (únicas), placas de rua vermelhas com borda branca e florestas de coníferas.",
  quick:[
    "Letras <b>ř</b> e <b>ů</b> — exclusivas do tcheco",
    "Placas de nome de rua <b>vermelhas</b> com moldura branca nas cidades",
    "Delineadores brancos com <b>topo laranja/vermelho</b> refletivo",
    "Casas com telhado de duas águas e reboco em pastel; muitas capelas de estrada"
  ],
  m:{
    car:"Cobertura recente e nítida na maior parte.",
    bol:"Poste branco com faixa refletiva laranja/vermelha na parte superior — muito característico da Chéquia e Eslováquia.",
    pol:"Postes de concreto cinza; em áreas rurais, postes de madeira com isoladores.",
    road:"Linha central branca; bordas marcadas nas vias principais. Muitas alamedas com árvores plantadas nas margens.",
    sign:"Direcionais verdes nas autoestradas (D), azuis nas rodovias. Nomes de cidade em placas brancas.",
    arch:"Vilarejos com casas coladas viradas para a rua, telhado vermelho; castelos e igrejas barrocas com torre bulbosa.",
    nat:"Florestas de pinheiro e abeto, colinas onduladas, campos de colza amarelos na primavera.",
    extra:"O terreno é mais montanhoso nas bordas (Sudetos, Floresta da Boêmia) e plano no centro/leste (Morávia)."
  },
  rgs:[
    {n:"Boêmia (oeste)", t:"Colinas, florestas densas, Praga."},
    {n:"Morávia (leste)", t:"Mais agrícola e aberto, vinhedos no sul."}
  ],
  cf:[{n:"Eslováquia",t:"Bollards iguais; SK usa 'ľ', 'ô', 'ä' e tem montanhas altas (Tatras)."},
      {n:"Polônia",t:"PL tem 'ł', 'ż', 'ę'; placas de rua diferentes."}]
},
{
  id:"denmark", n:"Dinamarca", en:"Denmark", fl:"🇩🇰", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".dk", lang:"Dinamarquês", scr:"Latino (æ, ø, å)",
  plate:"Branca com <b>borda vermelha</b>, faixa UE 'DK' — a borda vermelha é o sinal",
  tldr:"Placa com moldura vermelha, terreno plano, tijolo vermelho e æ/ø/å.",
  quick:[
    "<b>Moldura vermelha</b> ao redor da placa do veículo",
    "Letras <b>æ ø å</b> (compartilhadas com a Noruega — veja o relevo)",
    "Terreno extremamente <b>plano</b>, sem rochas expostas",
    "Casas de tijolo vermelho com telhado escuro; fazendas isoladas com silos"
  ],
  m:{
    car:"Cobertura moderna. Sem meta de carro relevante.",
    bol:"Delineadores brancos finos com refletor; nas rodovias, postes com faixa preta.",
    pol:"Muitos cabos enterrados; onde há postes, são de madeira baixos. Turbinas eólicas onipresentes no horizonte.",
    road:"Linhas brancas nítidas; ciclovias separadas com meio-fio em praticamente todo lugar.",
    sign:"Direcionais verdes nas autoestradas e azuis nas rodovias. Nome de cidade em placa branca com borda vermelha.",
    arch:"Tijolo vermelho ou amarelo-claro, telhado de telha escura ou palha em áreas históricas. Fazendas em quadrilátero.",
    nat:"Campos agrícolas gigantes, poucos bosques, cercas-vivas baixas, litoral em toda parte.",
    extra:"Se há terreno plano + eólicas + æøå + placa com borda vermelha, é Dinamarca com altíssima confiança."
  },
  rgs:[
    {n:"Jutlândia (península)", t:"Maior parte do território; dunas a oeste, agricultura no centro."},
    {n:"Zelândia", t:"Copenhague; mais urbano e arborizado."},
    {n:"Bornholm", t:"Ilha ao leste, com rocha granítica — exceção ao relevo plano."}
  ],
  cf:[{n:"Noruega",t:"Mesmas letras, mas NO é montanhosa e tem placa sem borda vermelha."},
      {n:"Norte da Alemanha",t:"Muito parecido; a língua e a placa resolvem."}]
},
{
  id:"estonia", n:"Estônia", en:"Estonia", fl:"🇪🇪", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".ee", lang:"Estoniano", scr:"Latino (õ, ä, ö, ü)",
  plate:"Branca, faixa UE 'EST', letras pretas",
  tldr:"Báltico plano e florestado, com a letra <b>õ</b> e muitas vogais duplas (aa, ee, uu).",
  quick:[
    "A letra <b>õ</b> e palavras com vogais duplas: 'maantee', 'tänav', 'küla'",
    "Terreno plano com <b>florestas de pinheiro e bétula</b> densas",
    "Delineadores brancos com <b>topo preto</b> e refletor",
    "Placas de rua brancas retangulares com texto preto"
  ],
  m:{
    car:"Cobertura recente e de alta qualidade quase em todo o país.",
    bol:"Poste branco com faixa preta no topo e refletor laranja de um lado, branco do outro.",
    pol:"Postes de madeira redondos, muitos com base de concreto; fiação simples.",
    road:"Linhas brancas; muitas estradas de cascalho bem mantidas no interior.",
    sign:"Direcionais azuis e brancas. 'Tee' = estrada, 'maantee' = rodovia.",
    arch:"Casas de madeira pintadas em tons terrosos; prédios soviéticos nas cidades; centros históricos hanseáticos em Tallinn e Tartu.",
    nat:"Florestas boreais, pântanos, litoral raso com juncos, ilhas planas (Saaremaa, Hiiumaa).",
    extra:"Rússia étnica no nordeste (Narva) — sinalização bilíngue ocasional."
  },
  cf:[{n:"Letônia",t:"LV usa 'ā ē ī ū' com mácrons; EE usa 'õ'. Letônia é ligeiramente mais ondulada."},
      {n:"Finlândia",t:"FI tem placas de nome de rua diferentes e sinalização bilíngue finlandês/sueco."}]
},
{
  id:"faroe", n:"Ilhas Faroe", en:"Faroe Islands", fl:"🇫🇴", rg:"Europa", cov:"Parcial", dif:2,
  side:"Direita", dom:".fo", lang:"Feroês", scr:"Latino (ð, ø, æ, ó)",
  plate:"Branca com letras pretas e prefixo de letras; sem faixa UE",
  tldr:"Ilhas verdes sem árvores, penhascos verticais, nevoeiro constante e ovelhas.",
  quick:[
    "Colinas <b>totalmente cobertas de grama</b> e absolutamente <b>sem árvores</b>",
    "Penhascos altíssimos caindo direto no mar, quase sempre com nuvens baixas",
    "Casas com <b>telhado de grama</b> e paredes pretas ou vermelhas",
    "Túneis de mão única com baias de desvio"
  ],
  m:{
    car:"Cobertura oficial existe nas ilhas principais, além do famoso projeto 'Sheep View'.",
    bol:"Postes brancos com refletor; guard-rails ao longo de encostas íngremes.",
    pol:"Poucos postes; muita fiação enterrada por causa do vento.",
    road:"Estradas estreitas de duas faixas, muitas vezes sem linha central.",
    sign:"Feroês com 'ð' — não existe em nenhuma outra sinalização de estrada comum.",
    arch:"Casas de madeira escura com telhado de turfa; igrejas brancas com telhado preto.",
    nat:"Grama verde-esmeralda, cascatas, fiordes, ovelhas em todo lugar.",
    extra:"Se parece Islândia mas é 100% verde e sem campos de lava, é Faroe."
  },
  cf:[{n:"Islândia",t:"IS tem lava, areia preta e mais espaço aberto; Faroe é mais verticalmente dramática."}]
},
{
  id:"finland", n:"Finlândia", en:"Finland", fl:"🇫🇮", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".fi", lang:"Finlandês (e sueco)", scr:"Latino (ä, ö)",
  plate:"Branca, faixa UE 'FIN', letras pretas",
  tldr:"Florestas infinitas de pinheiro, vogais duplas em toda palavra e placas de rua azuis.",
  quick:[
    "Palavras longas com <b>vogais e consoantes duplicadas</b>: 'katu', 'tie', 'Kauppatori'",
    "Sinalização <b>bilíngue</b> finlandês/sueco no sul e na costa oeste",
    "Delineadores com faixas <b>pretas e brancas</b> e refletores",
    "Florestas de coníferas densas com solo de musgo e rochas de granito"
  ],
  m:{
    car:"Cobertura recente e excelente. Neve em partes do norte.",
    bol:"Poste branco com faixa preta e refletor; nas rodovias, delineadores altos para neve.",
    pol:"Postes de madeira; muitas linhas de alta tensão cortando a floresta em clareiras retas.",
    road:"Linha de borda branca e central amarela em estradas mais antigas (hoje predominantemente branca). Muita estrada de cascalho.",
    sign:"Placas de nome de rua <b>azuis com texto branco</b>. Direcionais verdes nas autoestradas, azuis nas nacionais.",
    arch:"Casas de madeira pintadas de vermelho-falun, amarelo ou branco; prédios modernistas nas cidades.",
    nat:"Milhares de lagos, bétulas e pinheiros, terreno plano a levemente ondulado. Fell (colinas rasas) na Lapônia.",
    extra:"Placas de estrada numeradas com fundo vermelho e número branco em vias principais."
  },
  rgs:[
    {n:"Sul (Helsinque, Turku)", t:"Mais denso, bilíngue, floresta mista."},
    {n:"Região dos lagos (centro)", t:"Água por toda parte, floresta densa, poucas cidades."},
    {n:"Lapônia (norte)", t:"Árvores mais baixas e esparsas, tundra, neve, renas."}
  ],
  cf:[{n:"Suécia",t:"SE tem placas de rua diferentes e usa 'å'. Finlandês não tem 'å' em palavras nativas."},
      {n:"Estônia",t:"EE tem 'õ' e paisagem mais aberta/agrícola."}]
},
{
  id:"france", n:"França", en:"France", fl:"🇫🇷", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".fr", lang:"Francês", scr:"Latino",
  plate:"Branca, faixa UE 'F' à esquerda e <b>faixa azul com região à direita</b>",
  tldr:"Bollard branco com 'chapéu' e faixa vermelha, placas de rua com moldura, e platanos alinhados.",
  quick:[
    "<b>Bollard icônico</b>: poste branco com topo arredondado (chapéu) e faixa refletiva vermelha ou laranja",
    "Placa do veículo com <b>duas faixas azuis</b> (UE à esquerda, número do departamento à direita)",
    "Placas de nome de rua brancas com <b>borda dupla</b> e cantos, montadas em muros",
    "Fileiras de <b>plátanos</b> (sicômoros) ao longo de estradas rurais do sul"
  ],
  m:{
    car:"Cobertura moderna e completa. Sem meta de carro.",
    bol:"O delineador francês é o mais reconhecível da Europa: coluna branca com o topo em forma de cúpula e uma faixa vermelha (ou laranja) reflexiva. Em autoestradas, versões maiores.",
    pol:"Postes de concreto retangulares com furos redondos no meio; também postes de madeira no interior.",
    road:"Linha central branca tracejada; bordas em branco. Rotatórias em quantidade enorme.",
    sign:"Direcionais <b>azuis</b> nas autoestradas (A) e <b>verdes</b> nas nacionais/rotas para grandes cidades. Placa de entrada de cidade branca com borda vermelha.",
    arch:"Grande variação: pedra calcária clara com venezianas no centro/sul, casas enxaimel na Normandia e Alsácia, telhas romanas no Mediterrâneo.",
    nat:"Campos de trigo e colza no norte, vinhedos no centro-leste, garrigue e oliveiras no sul, Alpes e Pirineus nas bordas.",
    extra:"O número do departamento na placa do veículo dá a região exata — vale memorizar os principais (75 Paris, 13 Marselha, 33 Bordeaux, 69 Lyon)."
  },
  rgs:[
    {n:"Norte (Hauts-de-France, Normandia)", t:"Tijolo vermelho, casas enxaimel, clima cinzento, campos abertos."},
    {n:"Bretanha", t:"Pedra granítica cinza, telhado de ardósia escura, costa recortada, nomes celtas (Ker-, Plou-)."},
    {n:"Vale do Loire/Centro", t:"Pedra tufa branca, castelos, agricultura mista."},
    {n:"Alsácia/Lorena", t:"Enxaimel colorido, nomes germânicos, vinhas em encosta."},
    {n:"Sul (Provença, Occitânia)", t:"Telha romana laranja, ciprestes, oliveiras, pedra ocre, luz forte."},
    {n:"Alpes/Pirineus", t:"Chalés, estradas sinuosas, sinalização de altitude."}
  ],
  cf:[{n:"Bélgica (Valônia)",t:"Francês igual; use a placa (BE é vermelha) e a iluminação laranja."},
      {n:"Suíça romanda",t:"CH tem placas de rodovia verdes e bollards diferentes."}]
},
{
  id:"germany", n:"Alemanha", en:"Germany", fl:"🇩🇪", rg:"Europa", cov:"Parcial", dif:3,
  side:"Direita", dom:".de", lang:"Alemão", scr:"Latino (ä, ö, ü, ß)",
  plate:"Branca, faixa UE 'D', selo redondo e adesivo de inspeção coloridos",
  tldr:"Cobertura oficial limitada e antiga — muita coisa é <b>photosphere</b>. Bollard branco com topo preto plano.",
  quick:[
    "Cobertura oficial Street View é <b>rara e antiga (2008-2010)</b>, com muitas fachadas borradas por privacidade",
    "Grande parte do que se joga na Alemanha são <b>photospheres</b> de usuários",
    "Letra <b>ß</b> e palavras compostas longas: 'Straße', 'Bahnhof', 'Ausfahrt'",
    "Autoestradas com placas <b>azuis</b> e saídas numeradas em amarelo"
  ],
  m:{
    car:"A cobertura oficial de 2008-2010 tem qualidade baixa, cores lavadas e casas desfocadas a pedido dos moradores — isso por si só denuncia a Alemanha.",
    bol:"Delineador branco chato com faixa preta; refletor retangular branco de um lado e laranja do outro.",
    pol:"Postes de madeira e concreto; muitas linhas enterradas nas cidades.",
    road:"Linha central branca; Autobahn sem limite em muitos trechos (placa redonda com barras diagonais).",
    sign:"Direcionais amarelas nas vias federais (B) e azuis nas Autobahn (A). Nomes de rua em placa branca com texto preto.",
    arch:"Enxaimel no centro e sul, tijolo vermelho no norte, blocos Plattenbau no leste. Telhados vermelhos íngremes.",
    nat:"Planície ao norte, colinas florestadas no centro (Harz, Floresta Negra), Alpes no extremo sul.",
    extra:"Casas com fachadas <b>borradas</b> em bloco inteiro é praticamente exclusivo da Alemanha e da Áustria."
  },
  rgs:[
    {n:"Norte", t:"Plano, tijolo vermelho, eólicas, perto da Dinamarca."},
    {n:"Leste (ex-RDA)", t:"Plattenbau, alamedas de árvores, estradas de paralelepípedo."},
    {n:"Sul (Baviera, Baden)", t:"Alpino, chalés, torres de igreja bulbosas, casas com varanda florida."}
  ],
  cf:[{n:"Áustria",t:"Bollard austríaco tem topo preto mais largo; AT tem cobertura oficial completa e nítida."},
      {n:"Suíça",t:"CH tem placas verdes de autoestrada e cobertura excelente."}]
},
{
  id:"gibraltar", n:"Gibraltar", en:"Gibraltar", fl:"🇬🇮", rg:"Europa", cov:"Completa", dif:1,
  side:"Direita", dom:".gi", lang:"Inglês", scr:"Latino",
  plate:"Branca/amarela com 'G' e números, estilo britânico",
  tldr:"O Rochedo. Inglês, cabines telefônicas vermelhas e uma pista de avião cruzando a rua.",
  quick:[
    "O <b>Rochedo de Gibraltar</b> domina qualquer vista",
    "Sinalização e caixas de correio <b>britânicas</b>, mas dirige-se pela <b>direita</b>",
    "Território minúsculo, muito denso e vertical",
    "A avenida principal cruza a <b>pista do aeroporto</b>"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Barreiras metálicas urbanas; pouco espaço rural.",
    pol:"Fiação urbana e postes de iluminação britânicos.",
    road:"Linhas brancas e amarelas de estacionamento no padrão do Reino Unido.",
    sign:"Placas britânicas em inglês, mas com direção pela direita — combinação única.",
    arch:"Prédios coloniais britânicos misturados com torres modernas e blocos residenciais.",
    nat:"Vegetação mediterrânea nas encostas do rochedo; macacos de Gibraltar.",
    extra:"Do outro lado da baía vê-se a Espanha (La Línea)."
  }
},
{
  id:"greece", n:"Grécia", en:"Greece", fl:"🇬🇷", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".gr", lang:"Grego", scr:"Grego",
  plate:"Branca, faixa UE 'GR', letras pretas",
  tldr:"Alfabeto grego — identificação instantânea. Depois é só achar a região.",
  quick:[
    "<b>Alfabeto grego</b> — não há como confundir com nenhum outro país com cobertura",
    "Montanhas secas e rochosas, oliveiras e arbustos baixos",
    "Igrejas ortodoxas brancas com cúpula azul (especialmente nas ilhas)",
    "Capelas minúsculas à beira da estrada e santuários memoriais"
  ],
  m:{
    car:"Cobertura ampla, inclusive em muitas ilhas.",
    bol:"Delineadores brancos com refletor vermelho; guard-rails muito comuns em estradas de montanha.",
    pol:"Postes de concreto e madeira; fiação aparente nas vilas.",
    road:"Linhas brancas; a faixa da direita costuma ser larga o suficiente para servir de acostamento, e é normal ver carros usando-a para dar passagem.",
    sign:"Direcionais verdes nas autoestradas (A) e azuis nas nacionais. Texto em grego com transliteração latina abaixo.",
    arch:"Concreto cru com pilares e lajes expostas para andares futuros; casas brancas caiadas nas Cíclades; telha romana no continente.",
    nat:"Montanhas calcárias, pinheiros mediterrâneos, oliveiras em terraços, litoral azul intenso.",
    extra:"Placas dos veículos usam apenas letras que existem nos dois alfabetos (A, B, E, Z, H, I, K, M, N, O, P, T, Y, X)."
  },
  rgs:[
    {n:"Continente norte (Macedônia, Trácia)", t:"Mais verde, agrícola, montanhas altas."},
    {n:"Peloponeso", t:"Oliveiras em massa, colinas, ruínas antigas."},
    {n:"Cíclades", t:"Casas brancas com azul, ilhas áridas sem árvores."},
    {n:"Creta", t:"Grande, montanhosa, com desfiladeiros e oliveiras antigas."}
  ],
  cf:[{n:"Chipre",t:"Também grego, mas dirige pela <b>esquerda</b> — resolve na hora."}]
},
{
  id:"hungary", n:"Hungria", en:"Hungary", fl:"🇭🇺", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".hu", lang:"Húngaro", scr:"Latino (ő, ű, á, é)",
  plate:"Branca, faixa UE 'H', letras pretas",
  tldr:"Planície absoluta, acentos duplos <b>ő</b> e <b>ű</b>, e postes de concreto com topo em 'T'.",
  quick:[
    "Letras <b>ő</b> e <b>ű</b> (acento duplo) — exclusivas do húngaro",
    "Terreno <b>muito plano</b> na maior parte do país (Grande Planície)",
    "Palavras longas e aglutinadas, sem parentesco com as línguas vizinhas",
    "Placas de nome de rua brancas com texto preto e borda fina"
  ],
  m:{
    car:"Cobertura moderna. Sem meta de carro.",
    bol:"Delineador branco com faixa preta e refletor vermelho.",
    pol:"Postes de concreto cinza com travessa em 'T' no topo; muito comuns em áreas rurais.",
    road:"Linhas brancas; estradas retas e longas cortando campos.",
    sign:"Direcionais verdes nas autoestradas (M) e azuis nas rodovias principais. 'Utca' = rua, 'út' = estrada.",
    arch:"Casas rurais alongadas com o lado estreito para a rua e varanda lateral com colunas; blocos socialistas nas cidades.",
    nat:"Puszta (estepe) no leste, colinas no oeste (Transdanúbia), Lago Balaton no centro-oeste.",
    extra:"Girassóis e milho em escala industrial no verão."
  },
  cf:[{n:"Romênia",t:"RO tem 'ș' e 'ț' com vírgula; relevo com Cárpatos."},
      {n:"Eslováquia/Sérvia",t:"Compartilham a planície; a língua resolve imediatamente."}]
},
{
  id:"iceland", n:"Islândia", en:"Iceland", fl:"🇮🇸", rg:"Europa", cov:"Completa", dif:1,
  side:"Direita", dom:".is", lang:"Islandês", scr:"Latino (þ, ð, æ)",
  plate:"Branca com faixa azul e 'IS', letras pretas",
  tldr:"Rocha vulcânica, zero árvores, letras <b>þ</b> e <b>ð</b>. Praticamente impossível confundir.",
  quick:[
    "Letras <b>þ</b> (thorn) e <b>ð</b> (eth) — únicas no mundo com cobertura",
    "<b>Campos de lava</b> cobertos de musgo, areia preta e montanhas sem vegetação",
    "Postes de delineação <b>amarelos</b> altos com refletores (para a neve)",
    "Estrada Anel (Route 1) com pontes de pista única"
  ],
  m:{
    car:"Cobertura muito boa na Route 1 e razoável no interior (F-roads em parte).",
    bol:"Delineadores <b>amarelos</b> altos — sinal muito característico da Islândia.",
    pol:"Poucos postes; linhas de alta tensão em estruturas metálicas atravessando planícies vazias.",
    road:"Linha central amarela em trechos antigos, hoje predominantemente branca. Muitas estradas de cascalho.",
    sign:"Placas em islandês, com nomes longos terminados em -fjörður, -vík, -foss, -jökull.",
    arch:"Casas de metal corrugado pintadas em cores fortes, telhado íngreme; igrejas brancas com torre pontuda.",
    nat:"Vulcões, geleiras, cachoeiras, campos de musgo, praias de areia preta, quase nenhuma árvore.",
    extra:"Ovelhas soltas e cavalos islandeses (baixos e peludos) são comuns."
  },
  cf:[{n:"Ilhas Faroe",t:"Faroe é toda verde e sem lava; Islândia tem rocha nua e areia preta."}]
},
{
  id:"ireland", n:"Irlanda", en:"Ireland", fl:"🇮🇪", rg:"Europa", cov:"Completa", dif:2,
  side:"Esquerda", dom:".ie", lang:"Inglês e Irlandês", scr:"Latino",
  plate:"Branca, faixa UE 'IRL', com o <b>condado em irlandês</b> no topo e o ano à esquerda",
  tldr:"Verde intenso, sinalização bilíngue com irlandês em itálico, e placas de limite em km/h.",
  quick:[
    "Sinalização <b>bilíngue</b>: irlandês em <i>itálico</i> acima do inglês em maiúsculas",
    "Limites de velocidade em <b>km/h</b> (o Reino Unido usa mph) — separa IE de NI na hora",
    "Muros de <b>pedra seca</b> e sebes altíssimas fechando estradas estreitas",
    "Postes de delineação com refletores e estradas rurais sem linha central"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Postes brancos e pretos com refletores amarelos; muitos poucos em estradas rurais.",
    pol:"Postes de madeira redondos com muitas travessas — bem semelhantes aos britânicos.",
    road:"Linha de borda <b>amarela tracejada</b> em muitas estradas nacionais — diferença clara em relação ao Reino Unido, que usa branco.",
    sign:"Direcionais verdes nas nacionais (N), azuis nas autoestradas (M), brancas nas regionais (R). Placas de aviso <b>amarelas em losango</b>, no estilo norte-americano — algo raríssimo na Europa.",
    arch:"Casas de reboco branco ou pastel com telhado escuro; bangalôs modernos espalhados pelo campo.",
    nat:"Pastagens verdes divididas por sebes, turfeiras, poucas florestas nativas, litoral rochoso a oeste.",
    extra:"Caixas de correio e cabines telefônicas são <b>verdes</b> (no Reino Unido, vermelhas)."
  },
  cf:[{n:"Irlanda do Norte (Reino Unido)",t:"NI usa mph, placas brancas e caixas de correio vermelhas."},
      {n:"Reino Unido",t:"Losangos amarelos de aviso e bilinguismo irlandês só existem na República."}]
},
{
  id:"italy", n:"Itália", en:"Italy", fl:"🇮🇹", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".it", lang:"Italiano", scr:"Latino",
  plate:"Branca, faixa UE 'I' à esquerda e <b>faixa azul com província</b> à direita",
  tldr:"Persianas verdes, telha romana, e placas de rua brancas em moldura de mármore.",
  quick:[
    "Placas de nome de rua <b>brancas com borda azul ou preta</b>, frequentemente em placa de mármore nas cidades antigas",
    "Persianas de madeira (<b>verdes ou marrons</b>) em quase toda janela",
    "Autoestradas com sinalização <b>verde</b>; rodovias comuns em <b>azul</b> — o inverso da França",
    "Delineadores brancos com faixa preta e refletor vermelho"
  ],
  m:{
    car:"Cobertura completa e moderna. Sem meta de carro.",
    bol:"Delineador branco com faixa preta horizontal e refletor; postes de concreto quadrados em estradas antigas.",
    pol:"Postes de concreto quadrados afilados; fiação nas fachadas nos centros históricos.",
    road:"Linha central branca; bordas brancas. Sinal de perigo triangular com borda vermelha grossa.",
    sign:"Direcionais <b>verdes</b> = Autostrada (A). <b>Azuis</b> = estradas estatais (SS) e provinciais. Entrada de cidade em placa branca com nome e borda.",
    arch:"Telha romana ondulada, fachadas ocre/terracota/amarelas, varandas com grades de ferro. Campanários quadrados.",
    nat:"Alpes ao norte, planície do Pó no centro-norte, Apeninos ao longo do país, oliveiras e vinhas no centro-sul.",
    extra:"A sigla da província na placa do veículo (RM, MI, NA, TO) indica a área com precisão."
  },
  rgs:[
    {n:"Norte alpino", t:"Chalés, alemão no Alto Adige, montanhas altas."},
    {n:"Planície do Pó", t:"Plano, agrícola, neblina, fileiras de choupos."},
    {n:"Toscana/Úmbria", t:"Colinas onduladas, ciprestes, casas de pedra, vinhas."},
    {n:"Sul e Sicília", t:"Seco, cactos, oliveiras retorcidas, concreto inacabado, poeira."}
  ],
  cf:[{n:"Espanha",t:"ES não tem a faixa azul direita na placa; arquitetura e vegetação são parecidas no sul."},
      {n:"Croácia (Ístria)",t:"Muito italianizada; a língua nas placas resolve."}]
},
{
  id:"latvia", n:"Letônia", en:"Latvia", fl:"🇱🇻", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".lv", lang:"Letão", scr:"Latino (ā, ē, ī, ū, š, ž, ķ, ņ)",
  plate:"Branca, faixa UE 'LV', letras pretas",
  tldr:"Báltico do meio: mácrons (ā ē ī ū) e nomes terminados em <b>-s</b> ou <b>-a</b>.",
  quick:[
    "<b>Mácrons</b> sobre vogais (ā, ē, ī, ū) e cedilhas embaixo (ķ, ļ, ņ, ģ)",
    "Quase toda palavra masculina termina em <b>-s</b>: 'iela' (rua), 'ceļš' (estrada)",
    "Florestas de pinheiro e bétula com sub-bosque limpo",
    "Delineadores brancos com topo preto (iguais aos da Estônia)"
  ],
  m:{
    car:"Cobertura recente na maior parte.",
    bol:"Poste branco com faixa preta superior e refletor.",
    pol:"Postes de madeira e de concreto; fiação simples em áreas rurais.",
    road:"Muita estrada de cascalho fora das principais; linhas brancas nas pavimentadas.",
    sign:"Direcionais azuis e verdes. 'Iela' = rua, 'prospekts' = avenida.",
    arch:"Casas de madeira, Art Nouveau em Riga, blocos soviéticos, fazendas isoladas com celeiros.",
    nat:"Planície com florestas mistas, rio Daugava, dunas e pinheiros na costa do Báltico.",
    extra:"Riga concentra um terço da população — o resto é bastante vazio."
  },
  cf:[{n:"Lituânia",t:"LT usa 'ė', 'ų', 'į' e nomes terminados em '-as'."},
      {n:"Estônia",t:"EE usa 'õ' e não tem mácrons."}]
},
{
  id:"lithuania", n:"Lituânia", en:"Lithuania", fl:"🇱🇹", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".lt", lang:"Lituano", scr:"Latino (ė, ų, į, ą, ę, č, š, ž)",
  plate:"Branca, faixa UE 'LT', letras pretas",
  tldr:"Terminações em <b>-as</b>, letra <b>ė</b> e ganchos embaixo das vogais (ą, ę, į, ų).",
  quick:[
    "A letra <b>ė</b> (e com ponto) é exclusiva do lituano",
    "Nomes masculinos terminando em <b>-as</b>: 'gatvė', 'kelias', 'Vilnius'",
    "Cruzes de madeira entalhadas à beira da estrada (tradição lituana)",
    "Terreno plano com florestas e muita agricultura"
  ],
  m:{
    car:"Cobertura recente e nítida.",
    bol:"Delineador branco com faixa preta e refletor; alguns modelos com faixa vermelha.",
    pol:"Postes de concreto e madeira; fiação aérea nas vilas.",
    road:"Linhas brancas; autoestrada A1 Vilnius–Klaipėda bem conservada.",
    sign:"Direcionais azuis nas principais. 'Gatvė' = rua (abreviado 'g.').",
    arch:"Casas de madeira coloridas, blocos soviéticos, igrejas barrocas brancas com duas torres.",
    nat:"Planície com lagos e pinheiros; Curônia com dunas gigantes na costa.",
    extra:"É o mais católico dos bálticos — cruzes e capelas por toda parte."
  },
  cf:[{n:"Letônia",t:"LV tem mácrons e '-s'; LT tem 'ė' e '-as'."},
      {n:"Polônia",t:"PL usa 'ł' e 'ż'; cidades maiores e mais densas."}]
},
{
  id:"luxembourg", n:"Luxemburgo", en:"Luxembourg", fl:"🇱🇺", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".lu", lang:"Luxemburguês, Francês, Alemão", scr:"Latino",
  plate:"<b>Amarela</b> com letras pretas e faixa UE 'L'",
  tldr:"Placa amarela + francês/alemão misturados + Ardenas florestadas em país minúsculo.",
  quick:[
    "Placas de veículo <b>amarelas</b> (como nos Países Baixos, mas com 'L')",
    "Sinalização em <b>francês</b>, nomes de lugar frequentemente em <b>alemão</b>",
    "Vales profundos e florestados no norte; planalto no sul",
    "País muito pequeno — se você viu placa amarela e francês, é aqui"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Delineadores brancos com refletor vermelho, no estilo belga/francês.",
    pol:"Muita fiação enterrada; postes de concreto em áreas rurais.",
    road:"Linhas brancas; rodovias com sinalização azul.",
    sign:"Direcionais azuis (autoestrada A) e brancas locais. Nomes de rua em placa azul com borda branca.",
    arch:"Casas de pedra clara com telhado de ardósia, aldeias compactas em vales, fortificações em Luxemburgo cidade.",
    nat:"Ardenas ao norte (floresta densa e vales), Gutland ao sul (agricultura e vinhas no Mosela).",
    extra:"Alta densidade de bancos, empresas e placas multilíngues na capital."
  },
  cf:[{n:"Países Baixos",t:"NL também tem placa amarela, mas é plano e fala neerlandês."},
      {n:"Bélgica (Ardenas)",t:"Paisagem idêntica; a placa amarela resolve."}]
},
{
  id:"malta", n:"Malta", en:"Malta", fl:"🇲🇹", rg:"Europa", cov:"Completa", dif:1,
  side:"Esquerda", dom:".mt", lang:"Maltês e Inglês", scr:"Latino (ħ, ġ, ż, ċ)",
  plate:"Branca com letras pretas e faixa UE 'M'",
  tldr:"Pedra calcária cor de mel, direção pela esquerda e maltês com <b>ħ</b> e <b>ġ</b>.",
  quick:[
    "Tudo construído em <b>calcário amarelo-mel</b>, inclusive muros e cercas",
    "Dirige-se pela <b>esquerda</b> em contexto mediterrâneo",
    "Maltês: língua semítica em alfabeto latino, com <b>ħ</b>, <b>ġ</b>, <b>ż</b>, <b>ċ</b>",
    "Ilha densa, sem rios, com terraços agrícolas minúsculos"
  ],
  m:{
    car:"Cobertura completa em Malta, Gozo e Comino.",
    bol:"Postes brancos e barreiras metálicas; muros de pedra seca como divisa.",
    pol:"Fiação aérea densa nas ruas estreitas.",
    road:"Asfalto irregular; linhas brancas e amarelas; ruas muito estreitas nos centros.",
    sign:"Sinalização britânica em inglês e maltês; nomes de rua em placa retangular com moldura.",
    arch:"Casas geminadas de calcário com <b>varandas fechadas de madeira coloridas</b> (galariji) — assinatura maltesa. Igrejas barrocas enormes com cúpula.",
    nat:"Terreno árido, sem árvores altas, figueiras-da-índia, penhascos calcários.",
    extra:"Ônibus públicos brancos com listra verde/azul aparecem com frequência."
  },
  cf:[{n:"Chipre",t:"Também esquerda e mediterrâneo, mas usa grego e é muito maior."}]
},
{
  id:"monaco", n:"Mônaco", en:"Monaco", fl:"🇲🇨", rg:"Europa", cov:"Completa", dif:1,
  side:"Direita", dom:".mc", lang:"Francês", scr:"Latino",
  plate:"Branca com brasão e letras pretas, sem faixa UE",
  tldr:"Cidade-estado vertical na Riviera: iates, arranha-céus e o circuito de F1.",
  quick:[
    "Densidade extrema de <b>arranha-céus modernos</b> em encosta sobre o mar",
    "Iates de luxo no porto (Port Hercule)",
    "Francês, mas sem faixa UE nas placas",
    "Túneis, viadutos e curvas do circuito de Fórmula 1"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Guard-rails urbanos; sem delineadores rurais.",
    pol:"Fiação totalmente enterrada.",
    road:"Asfalto impecável, marcação branca perfeita, muitas faixas de pedestre.",
    sign:"Sinalização francesa; placas de rua brancas com borda.",
    arch:"Torres residenciais dos anos 70-2000, Belle Époque no Casino de Monte Carlo.",
    nat:"Palmeiras, vegetação mediterrânea plantada, encosta íngreme.",
    extra:"Se parece a Riviera Francesa mas é vertical demais e rico demais, é Mônaco."
  },
  cf:[{n:"Nice/Riviera (França)",t:"Muito parecido; Mônaco é mais denso e vertical, e as placas não têm faixa UE."}]
},
{
  id:"montenegro", n:"Montenegro", en:"Montenegro", fl:"🇲🇪", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".me", lang:"Montenegrino", scr:"Latino e Cirílico",
  plate:"Branca com faixa azul 'MNE' e brasão, letras pretas",
  tldr:"Montanhas cársticas dramáticas sobre a Baía de Kotor, latim/cirílico misto e sem UE.",
  quick:[
    "Placas com <b>MNE</b> e brasão dourado — sem estrelas da UE",
    "Montanhas calcárias cinzentas caindo direto no Adriático",
    "Escrita <b>latina e cirílica</b> convivendo",
    "Cobertura frequentemente com carro branco e <b>rack preto</b> no teto visível"
  ],
  m:{
    car:"Boa parte da cobertura mostra um carro claro com rack escuro no teto e desfoque grande na traseira.",
    bol:"Delineadores brancos com refletor; muros de pedra em estradas de montanha.",
    pol:"Postes de concreto simples; fiação aérea aparente.",
    road:"Estradas estreitas e sinuosas; muitos túneis não iluminados; asfalto variável.",
    sign:"Direcionais azuis e verdes; nomes em latino, às vezes duplicados em cirílico.",
    arch:"Casas de pedra com telha vermelha na costa; construções de concreto inacabadas no interior.",
    nat:"Karst nu no oeste, florestas densas e cânions no norte (Tara), Lago Skadar no sul.",
    extra:"A Baía de Kotor (fiorde) é a paisagem mais reconhecível do país."
  },
  cf:[{n:"Croácia",t:"HR tem faixa UE e escudo xadrez."},
      {n:"Bósnia",t:"BiH tem placas sem letras regionais e paisagem semelhante no norte."},
      {n:"Albânia",t:"AL é só latino e tem bunkers."}]
},
{
  id:"netherlands", n:"Países Baixos", en:"Netherlands", fl:"🇳🇱", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".nl", lang:"Neerlandês", scr:"Latino",
  plate:"<b>Amarela</b> com letras pretas e faixa UE 'NL'",
  tldr:"Placa amarela, ciclovias vermelhas, terreno abaixo do nível do mar e tijolo por toda parte.",
  quick:[
    "Placas de veículo <b>amarelas</b> (compartilhadas apenas com Luxemburgo na UE)",
    "<b>Ciclovias de asfalto vermelho</b> separadas em praticamente toda via",
    "Terreno plano com <b>canais e diques</b>, campos retangulares perfeitos",
    "Postes de delineação brancos com <b>topo preto</b> e refletor"
  ],
  m:{
    car:"Cobertura completa e recente. Sem meta de carro.",
    bol:"Delineador branco com faixa preta e refletor; muitos postes verdes baixos em ciclovias.",
    pol:"Fiação quase toda enterrada; postes de iluminação metálicos elegantes.",
    road:"Linha central branca; borda branca contínua. Faixas de asfalto vermelho para bicicletas e ônibus. Redutores de velocidade em zonas residenciais.",
    sign:"Direcionais azuis nas autoestradas (A) e amarelas com texto preto para direções locais e nacionais (N) — <b>o amarelo é bem característico</b>. Nomes de rua em placa branca com borda azul.",
    arch:"Casas geminadas de tijolo com telhado escuro e janelas grandes sem cortina; fazendas com telhado enorme descendo até quase o chão.",
    nat:"Pólderes, valas de drenagem retas, pastagens com vacas, quase nenhuma elevação. Dunas na costa oeste.",
    extra:"O ponto mais alto do país tem 322 m e fica no extremo sudeste (Limburgo)."
  },
  rgs:[
    {n:"Randstad (oeste)", t:"Amsterdã, Roterdã, Haia. Densíssimo, canais, tijolo."},
    {n:"Norte (Friesland, Groningen)", t:"Muito plano e vazio, pastagem, sinalização em frísio no norte."},
    {n:"Limburgo (sudeste)", t:"Único lugar com colinas de verdade; casas com pedra."}
  ],
  cf:[{n:"Bélgica (Flandres)",t:"Mesma língua; BE tem placas vermelhas e iluminação laranja."},
      {n:"Luxemburgo",t:"Placa amarela também, mas LU é montanhoso e francófono."}]
},
{
  id:"north-macedonia", n:"Macedônia do Norte", en:"North Macedonia", fl:"🇲🇰", rg:"Europa", cov:"Completa", dif:4,
  side:"Direita", dom:".mk", lang:"Macedônio (e albanês)", scr:"Cirílico",
  plate:"Branca com faixa azul 'NMK' e brasão, letras pretas",
  tldr:"Cirílico sem UE + montanhas secas + sem litoral. Muito confundido com a Sérvia.",
  quick:[
    "<b>Cirílico</b> com placas <b>NMK</b> — não confundir com Sérvia (SRB) ou Bulgária (UE)",
    "País <b>sem saída para o mar</b>, cercado de montanhas áridas",
    "Minaretes frequentes, sobretudo a oeste (população albanesa)",
    "Cobertura antiga em partes, com cores lavadas"
  ],
  m:{
    car:"Parte da cobertura é mais antiga e menos nítida; carro branco comum.",
    bol:"Delineadores brancos com refletor vermelho; guard-rails enferrujados.",
    pol:"Postes de concreto simples e alguns de madeira; fiação desorganizada.",
    road:"Linhas brancas desgastadas; muitas estradas secundárias em mau estado.",
    sign:"Direcionais em cirílico com transliteração latina; autoestradas verdes (A).",
    arch:"Casas de tijolo aparente inacabadas, telhados vermelhos, mesquitas com minarete fino, igrejas ortodoxas de pedra.",
    nat:"Montanhas de altitude média, vales secos, o Lago Ohrid no sudoeste (grande e cercado de montanhas).",
    extra:"A bandeira vermelha com sol de oito raios aparece muito em prédios públicos."
  },
  cf:[{n:"Sérvia",t:"SRB nas placas e território maior/mais plano ao norte."},
      {n:"Bulgária",t:"BG tem faixa UE nas placas."},
      {n:"Kosovo/Albânia",t:"Ambos usam só latino."}]
},
{
  id:"norway", n:"Noruega", en:"Norway", fl:"🇳🇴", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".no", lang:"Norueguês", scr:"Latino (æ, ø, å)",
  plate:"Branca com faixa azul 'N' e duas letras + cinco números",
  tldr:"Fiordes, granito, casas de madeira vermelhas e delineadores pretos e brancos.",
  quick:[
    "Letras <b>æ ø å</b> em terreno <b>montanhoso</b> (a Dinamarca é plana)",
    "Delineadores <b>listrados de preto e branco</b> com refletores laranja",
    "Casas de madeira pintadas de <b>vermelho-falun</b>, branco ou ocre",
    "Túneis longos e frequentes, ferry-boats e estradas em encosta de fiorde"
  ],
  m:{
    car:"Cobertura excelente, incluindo estradas remotas do norte.",
    bol:"Poste listrado preto e branco com refletor laranja — junto com a Suécia, um dos delineadores mais distintos do norte.",
    pol:"Postes de madeira; linhas de transmissão cortando encostas.",
    road:"Linha de borda branca e central branca; muitas estradas estreitas sem linha central em áreas rurais. Placas de aviso de alce.",
    sign:"Direcionais <b>amarelas com texto preto</b> nas estradas europeias e nacionais — muito característico. Placas de nome de rua brancas.",
    arch:"Casas de madeira com revestimento horizontal, telhados íngremes, algumas com grama. Igrejas de madeira (stavkirke).",
    nat:"Fiordes profundos, granito exposto, abetos, tundra no norte, sol da meia-noite acima do Círculo Polar.",
    extra:"Placas de estradas europeias (E6, E18) com fundo verde aparecem muito."
  },
  rgs:[
    {n:"Oeste (fiordes)", t:"Bergen, Ålesund. Paredes de rocha, cascatas, chuva."},
    {n:"Leste (Oslo)", t:"Florestas de coníferas, colinas suaves, agricultura em vales."},
    {n:"Norte (Nordland, Troms, Finnmark)", t:"Árvores baixas, tundra, costa recortada, renas."}
  ],
  cf:[{n:"Suécia",t:"SE é mais plana e usa 'ä'/'ö' em vez de 'æ'/'ø'."},
      {n:"Dinamarca",t:"Mesmas letras, mas DK é plana e tem placa com borda vermelha."}]
},
{
  id:"poland", n:"Polônia", en:"Poland", fl:"🇵🇱", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".pl", lang:"Polonês", scr:"Latino (ł, ż, ź, ę, ą, ś, ć, ń)",
  plate:"Branca, faixa UE 'PL', letras pretas (primeira ou duas letras indicam a voivodia)",
  tldr:"Letra <b>ł</b>, delineadores brancos com faixa preta e capelinhas de estrada.",
  quick:[
    "A letra <b>ł</b> (L cortado) e o par <b>ż/ź</b> — assinatura do polonês",
    "Delineador branco com <b>faixa preta</b> e refletor vermelho de um lado",
    "Capelinhas e cruzes católicas à beira da estrada, muito frequentes",
    "Casas cúbicas de dois andares com telhado de quatro águas, isoladas no campo"
  ],
  m:{
    car:"Cobertura recente e ampla.",
    bol:"Poste branco chato com faixa preta larga e refletor.",
    pol:"Postes de concreto cinza com topo arredondado; postes de madeira em vilarejos.",
    road:"Linhas brancas; estradas nacionais com faixa central dupla em trechos. Alamedas de árvores nas margens no norte e oeste.",
    sign:"Direcionais <b>azuis</b> em autoestradas (A) e vias expressas (S), <b>verdes</b> em estradas nacionais (DK). Placas de nome de rua brancas com texto preto e borda vermelha em algumas cidades.",
    arch:"Casas dos anos 70-90 em bloco cúbico, prédios socialistas, igrejas modernas grandes de tijolo com telhado íngreme.",
    nat:"Planície com florestas de pinheiro, campos estreitos e alongados (herança de partilha de terras), Tatras no extremo sul, Mazúria dos lagos no nordeste.",
    extra:"Os <b>campos em faixas longas e estreitas</b> vistos de estradas rurais são um marcador polonês clássico."
  },
  rgs:[
    {n:"Norte (Pomerânia, Mazúria)", t:"Lagos, florestas, tijolo vermelho gótico, alamedas."},
    {n:"Centro (Mazóvia)", t:"Planície agrícola, campos em faixas, Varsóvia."},
    {n:"Sul (Silésia, Pequena Polônia)", t:"Industrial e populoso; Tatras alpinas na fronteira eslovaca."}
  ],
  cf:[{n:"Chéquia/Eslováquia",t:"Bollards com topo laranja lá; PL usa faixa preta."},
      {n:"Lituânia",t:"LT tem 'ė' e '-as'; PL tem 'ł'."}]
},
{
  id:"portugal", n:"Portugal", en:"Portugal", fl:"🇵🇹", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".pt", lang:"Português", scr:"Latino",
  plate:"Branca, faixa UE 'P', letras pretas e <b>faixa amarela à direita</b> com o ano",
  tldr:"Calçada portuguesa em preto e branco, azulejos nas fachadas e delineadores com faixa preta.",
  quick:[
    "<b>Calçada portuguesa</b>: mosaico de pedras brancas e pretas nas calçadas",
    "<b>Azulejos</b> cobrindo fachadas inteiras de casas e igrejas",
    "Placa de veículo com <b>faixa amarela à direita</b> (Portugal) — a Espanha não tem",
    "Delineadores brancos com faixa preta e refletor amarelo/vermelho"
  ],
  m:{
    car:"Cobertura completa e recente, incluindo Açores e Madeira.",
    bol:"Poste branco com faixa preta e refletor; em autoestradas, delineadores mais altos.",
    pol:"Postes de concreto quadrados e afilados, muito parecidos com os espanhóis; fiação nas fachadas em centros antigos.",
    road:"Linhas brancas; sinalização de portagem (pedágio) eletrônica frequente nas autoestradas.",
    sign:"Direcionais <b>azuis</b> nas autoestradas (A) e brancas/amarelas nas nacionais. Nomes de rua em placa de azulejo ou pedra em centros históricos.",
    arch:"Casas caiadas de branco com faixa de cor (azul, amarela ou ocre) na base das paredes — muito comum no Alentejo e Algarve. Telha romana.",
    nat:"Norte verde e montanhoso com granito; centro com pinheiros e eucaliptos; sul seco com sobreiros e oliveiras.",
    extra:"Eucaliptos plantados em massa cobrem boa parte do centro e norte — um marcador forte."
  },
  rgs:[
    {n:"Norte (Minho, Douro)", t:"Verde, chuvoso, granito, vinhedos em terraços no Douro."},
    {n:"Centro (Beiras)", t:"Serra da Estrela, pinheiros, eucaliptos, aldeias de xisto."},
    {n:"Alentejo", t:"Planície ondulada, sobreiros isolados, casas brancas com faixa azul, muito seco."},
    {n:"Algarve", t:"Turístico, chaminés rendilhadas, amendoeiras, falésias."},
    {n:"Madeira/Açores", t:"Vulcânicas, verdes, hortênsias, estradas em encosta."}
  ],
  cf:[{n:"Espanha",t:"A língua e a faixa amarela da placa resolvem; a Galiza é visualmente muito parecida com o Minho."},
      {n:"Brasil",t:"Mesma língua, mas o vocabulário difere ('rua' vs 'r.', 'peões' vs 'pedestres') e a vegetação é totalmente diferente."}]
},
{
  id:"romania", n:"Romênia", en:"Romania", fl:"🇷🇴", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".ro", lang:"Romeno", scr:"Latino (ă, â, î, ș, ț)",
  plate:"Branca, faixa UE 'RO', letras pretas com código de condado",
  tldr:"Língua latina em contexto balcânico, com <b>ș</b> e <b>ț</b> (vírgula embaixo) e carroças no campo.",
  quick:[
    "Letras <b>ș</b> e <b>ț</b> com <b>vírgula</b> embaixo (não cedilha), e <b>ă</b>/<b>â</b>",
    "Vocabulário latino: 'strada', 'drum', 'municipiul'",
    "<b>Carroças puxadas por cavalos</b> ainda circulam em estradas rurais",
    "Postes de concreto com furos e casas com portões de metal decorados"
  ],
  m:{
    car:"Cobertura ampla e razoavelmente recente.",
    bol:"Delineadores brancos com faixa preta e refletor vermelho; muitos danificados.",
    pol:"Postes de concreto cinza com dois furos ovais; fiação bagunçada nas vilas.",
    road:"Linhas brancas gastas; muitas estradas nacionais de pista simples com tráfego pesado de caminhões.",
    sign:"Direcionais verdes nas autoestradas (A) e azuis nas nacionais (DN). Entrada de localidade em placa branca com borda azul.",
    arch:"Casas rurais com varanda frontal e telhado de chapa colorida; portões e telhados de metal ondulado brilhante em comunidades romani; igrejas ortodoxas com torres.",
    nat:"Cárpatos em arco pelo centro, planícies ao sul (Valáquia) e leste (Moldávia), Delta do Danúbio a sudeste.",
    extra:"Placas de veículo começam com o código do condado (B = Bucareste, CJ = Cluj, BV = Brașov)."
  },
  rgs:[
    {n:"Transilvânia", t:"Cidades saxãs com casas coloridas e igrejas fortificadas, colinas verdes."},
    {n:"Valáquia (sul)", t:"Planície agrícola, muito plana e quente."},
    {n:"Moldávia (leste)", t:"Colinas, vinhas, mais pobre e rural."},
    {n:"Maramureș (norte)", t:"Portões de madeira entalhados, igrejas de madeira altíssimas."}
  ],
  cf:[{n:"Moldávia",t:"Mesma língua; MD não tem faixa UE e é toda plana/ondulada."},
      {n:"Bulgária",t:"BG é cirílico."}]
},
{
  id:"russia", n:"Rússia", en:"Russia", fl:"🇷🇺", rg:"Europa", cov:"Parcial", dif:3,
  side:"Direita", dom:".ru", lang:"Russo", scr:"Cirílico",
  plate:"Branca com números pretos e faixa azul à direita com <b>RUS</b> e bandeira",
  tldr:"Cirílico sem UE, delineadores listrados preto e branco, e florestas de bétula sem fim.",
  quick:[
    "<b>Cirílico</b> com placa branca e bloco azul <b>RUS</b> à direita",
    "Delineadores <b>listrados de preto e branco</b> com refletores vermelhos",
    "Florestas de <b>bétula</b> e coníferas, com terreno plano e horizonte longo",
    "Casas de madeira (izbá) com molduras de janela entalhadas e pintadas"
  ],
  m:{
    car:"Cobertura extensa mas irregular; muitas estradas com qualidade média. Rússia é enorme — vale focar em pistas regionais.",
    bol:"Poste branco com faixa preta diagonal ou horizontal; guard-rails metálicos simples.",
    pol:"Postes de concreto cinza com travessas; em áreas rurais, postes de madeira inclinados.",
    road:"Linhas brancas; asfalto com remendos frequentes. Estradas federais (М-) bem sinalizadas.",
    sign:"Direcionais azuis nas rodovias e verdes nas federais principais. Textos em cirílico, com latim em rotas internacionais.",
    arch:"Blocos de apartamentos soviéticos (khrushchyovka), casas de madeira com detalhes pintados, igrejas ortodoxas com cúpulas coloridas.",
    nat:"Taiga (coníferas) no norte, estepe no sul, bétulas por toda a Rússia europeia, montanhas no Cáucaso e no extremo leste.",
    extra:"O código de região no fim da placa (77 Moscou, 78 São Petersburgo) é uma pista precisa se legível."
  },
  rgs:[
    {n:"Rússia europeia", t:"Mais densa, agricultura, bétulas, cidades históricas."},
    {n:"Cáucaso (sul)", t:"Montanhas altas, minaretes, população muçulmana."},
    {n:"Sibéria", t:"Taiga infinita, estradas isoladas, casas de madeira, neve."},
    {n:"Extremo Oriente", t:"Vladivostok; muitos carros com <b>volante à direita</b> importados do Japão, apesar de se dirigir à direita."}
  ],
  cf:[{n:"Ucrânia",t:"UA usa ucraniano ('і', 'ї', 'є') e placas com faixa azul 'UA'."},
      {n:"Belarus",t:"BY tem placas vermelhas e amarelas em alguns tipos e paisagem mais uniforme."},
      {n:"Cazaquistão",t:"KZ tem cirílico com letras extras e estepe muito mais aberta."}]
},
{
  id:"san-marino", n:"San Marino", en:"San Marino", fl:"🇸🇲", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".sm", lang:"Italiano", scr:"Latino",
  plate:"Branca com brasão azul e letras pretas, <b>sem</b> faixa UE",
  tldr:"Enclave italiano no Monte Titano: três torres no alto de um penhasco.",
  quick:[
    "Monte Titano com <b>três torres medievais</b> no topo, visível de longe",
    "Italiano, mas placas <b>sem</b> faixa da UE",
    "Território minúsculo e íngreme, cercado pela Emília-Romanha",
    "Postes com bandeiras branca e azul de San Marino"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Guard-rails em estradas de encosta; delineadores no padrão italiano.",
    pol:"Fiação enterrada nas áreas principais.",
    road:"Estradas sinuosas subindo o monte; asfalto bom.",
    sign:"Sinalização italiana, com placas de fronteira indicando a República.",
    arch:"Pedra medieval no centro histórico; casas modernas italianas nas encostas.",
    nat:"Colinas verdes, vinhas e bosques ao redor.",
    extra:"Se você vê a planície italiana ao longe a partir de um morro fortificado, considere San Marino."
  },
  cf:[{n:"Itália",t:"Idêntico em quase tudo; procure placas sem UE e a silhueta do Monte Titano."}]
},
{
  id:"serbia", n:"Sérvia", en:"Serbia", fl:"🇷🇸", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".rs", lang:"Sérvio", scr:"Cirílico e Latino",
  plate:"Branca com faixa azul 'SRB' e brasão, com <b>escudo colorido do município</b> antes dos números",
  tldr:"Cirílico e latino misturados, placas SRB e planície panônica ao norte.",
  quick:[
    "Placas com <b>SRB</b> e um pequeno <b>brasão colorido do município</b> no início",
    "Escrita <b>cirílica e latina</b> lado a lado, às vezes na mesma placa",
    "Norte plano e agrícola (Voivodina); sul montanhoso e mais pobre",
    "Postes de concreto e casas de tijolo aparente sem reboco"
  ],
  m:{
    car:"Cobertura ampla e razoavelmente recente.",
    bol:"Delineadores brancos com refletor vermelho.",
    pol:"Postes de concreto com furos; fiação aérea densa nas vilas.",
    road:"Linhas brancas; autoestrada A1 (corredor 10) atravessa o país de norte a sul.",
    sign:"Direcionais verdes nas autoestradas e azuis nas demais, geralmente bilíngues cirílico/latino.",
    arch:"Casas de tijolo vermelho inacabadas, telhados de telha, prédios socialistas em Belgrado e Novi Sad.",
    nat:"Planície panônica ao norte com milho e girassol; colinas e montanhas ao sul com florestas.",
    extra:"Na Voivodina há minorias húngara e eslovaca, com placas trilíngues."
  },
  cf:[{n:"Macedônia do Norte",t:"NMK nas placas e relevo mais montanhoso."},
      {n:"Bósnia",t:"BiH tem placas sem escudo colorido e mais montanhas."},
      {n:"Croácia/Hungria",t:"A Voivodina é visualmente idêntica à planície húngara e à Eslavônia croata."}]
},
{
  id:"slovakia", n:"Eslováquia", en:"Slovakia", fl:"🇸🇰", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".sk", lang:"Eslovaco", scr:"Latino (ľ, ĺ, ô, ä, ŕ)",
  plate:"Branca, faixa UE 'SK', letras pretas",
  tldr:"Como a Chéquia, mas com <b>ľ</b> e <b>ô</b> e os Tatras nevados ao fundo.",
  quick:[
    "Letras <b>ľ</b>, <b>ĺ</b>, <b>ŕ</b>, <b>ô</b> e <b>ä</b> — não existem em tcheco",
    "Delineador branco com <b>topo laranja</b> refletivo (igual ao tcheco)",
    "Montanhas altas e rochosas (Tatras) ao norte",
    "Placas de nome de rua brancas com texto preto"
  ],
  m:{
    car:"Cobertura moderna e nítida.",
    bol:"Poste branco com faixa laranja/vermelha no alto.",
    pol:"Postes de concreto e madeira; fiação simples.",
    road:"Linhas brancas; autoestrada D1 conecta Bratislava a Košice.",
    sign:"Direcionais verdes nas autoestradas (D) e azuis nas rodovias. 'Ulica' = rua, 'cesta' = estrada.",
    arch:"Casas rurais com telhado íngreme, igrejas de madeira no leste, blocos socialistas coloridos (panelák).",
    nat:"Cárpatos ocupam a maior parte; planície ao sul, junto ao Danúbio.",
    extra:"Minoria húngara no sul, com placas bilíngues."
  },
  cf:[{n:"Chéquia",t:"Bollard idêntico; use as letras 'ľ/ô' e o relevo mais alto."},
      {n:"Polônia",t:"PL usa 'ł' e delineador com faixa preta."}]
},
{
  id:"slovenia", n:"Eslovênia", en:"Slovenia", fl:"🇸🇮", rg:"Europa", cov:"Completa", dif:3,
  side:"Direita", dom:".si", lang:"Esloveno", scr:"Latino (č, š, ž)",
  plate:"Branca, faixa UE 'SLO', letras pretas com <b>brasão verde</b> do município",
  tldr:"Alpes Julianos, telhados vermelhos e placas SLO com detalhe verde.",
  quick:[
    "Placa com <b>SLO</b> e um selo verde entre as letras",
    "Apenas <b>č š ž</b> como diacríticos (sem 'ć' e 'đ' croatas)",
    "Alpes ao norte, karst no sudoeste, um pedacinho de litoral no Adriático",
    "Casas alpinas com varanda de madeira e telhado de telha vermelha"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Delineadores brancos com faixa preta e refletor.",
    pol:"Postes de concreto e madeira; fiação organizada.",
    road:"Linhas brancas nítidas; autoestradas modernas com muitos túneis.",
    sign:"Direcionais verdes nas autoestradas (A) e brancas/azuis nas demais. 'Cesta' = estrada, 'ulica' = rua.",
    arch:"Igrejas com torre de telhado piramidal ou bulbosa em quase toda colina; casas de dois andares com sótão.",
    nat:"Floresta cobre mais de metade do país; Alpes Julianos com Triglav, cavernas cársticas, vinhedos a leste.",
    extra:"Bem organizado e limpo — visualmente mais 'austríaco' que balcânico."
  },
  cf:[{n:"Croácia",t:"HR tem 'ć'/'đ' e o escudo xadrez."},
      {n:"Áustria",t:"AT tem bollard com topo preto e alemão nas placas."}]
},
{
  id:"spain", n:"Espanha", en:"Spain", fl:"🇪🇸", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".es", lang:"Espanhol (e catalão, galego, basco)", scr:"Latino",
  plate:"Branca, faixa UE 'E', letras pretas e <b>faixa azul curta à direita</b>",
  tldr:"Terra seca e vermelha, oliveiras alinhadas, e delineadores brancos com faixa preta.",
  quick:[
    "Placa com faixa UE à esquerda e uma <b>segunda faixa azul estreita à direita</b> (sem número de província)",
    "<b>Oliveiras plantadas em grade</b> por quilômetros no sul (Andaluzia)",
    "Postes de concreto quadrados e afilados com furos",
    "Sinalização de saída com o formato 'Salida' e numeração de quilômetro"
  ],
  m:{
    car:"Cobertura completa e recente, incluindo Canárias e Baleares.",
    bol:"Delineador branco com faixa preta larga e refletor amarelo ou vermelho.",
    pol:"Postes de concreto quadrados afilados, muitas vezes com o topo em 'Y'; muito semelhantes aos portugueses.",
    road:"Linhas brancas; marcos quilométricos frequentes. Rotatórias em abundância.",
    sign:"Direcionais <b>azuis</b> em autopistas/autovías (A, AP) e <b>brancas com borda</b> em estradas convencionais (N). Placas de localidade brancas com borda vermelha.",
    arch:"Casas caiadas de branco no sul, pedra e tijolo no centro, arquitetura verde e de granito na Galiza, casas de madeira e pedra no norte.",
    nat:"Meseta central seca e vazia, olivais na Andaluzia, Pirineus e Cordilheira Cantábrica ao norte, Canárias vulcânicas.",
    extra:"O bilinguismo denuncia a região: catalão a leste, galego a noroeste, basco ao norte."
  },
  rgs:[
    {n:"Andaluzia (sul)", t:"Olivais infinitos, solo vermelho, casas brancas, calor."},
    {n:"Meseta (centro)", t:"Planalto seco e amplo, trigo, poucas árvores, aldeias de tijolo."},
    {n:"Galiza (noroeste)", t:"Verde, chuvoso, granito, eucaliptos, hórreos (celeiros elevados de pedra)."},
    {n:"País Basco/Cantábria", t:"Montanhas verdes, casarios com madeira vermelha, chuva."},
    {n:"Catalunha/Levante", t:"Catalão, costa mediterrânea, laranjais em Valência."},
    {n:"Canárias", t:"Vulcânicas, palmeiras, rocha preta, cactos."}
  ],
  cf:[{n:"Portugal",t:"PT tem faixa amarela à direita e calçada em mosaico."},
      {n:"Itália",t:"IT tem faixa azul com sigla de província; a língua resolve."},
      {n:"América Latina",t:"Mesma língua; a placa da UE e os postes resolvem imediatamente."}]
},
{
  id:"sweden", n:"Suécia", en:"Sweden", fl:"🇸🇪", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".se", lang:"Sueco", scr:"Latino (å, ä, ö)",
  plate:"Branca, faixa UE 'S', três letras + três caracteres",
  tldr:"Casas vermelhas com cantos brancos, pinheiros, e delineadores pretos e brancos.",
  quick:[
    "Casas de madeira <b>vermelho-falun com molduras brancas</b> — o marcador visual mais forte",
    "Letras <b>å ä ö</b> (a Noruega usa 'æ' e 'ø')",
    "Delineadores <b>listrados de preto e branco</b> com refletores",
    "Placas de nome de rua brancas com texto preto e borda"
  ],
  m:{
    car:"Cobertura excelente e completa, incluindo o extremo norte.",
    bol:"Poste listrado preto e branco com refletor; usado em toda a rede rural.",
    pol:"Postes de madeira redondos, muitas vezes com braço curto; linhas simples.",
    road:"Linha de borda branca contínua e central tracejada; muitas estradas com faixa larga de acostamento pavimentado. Estradas de cascalho em áreas rurais.",
    sign:"Direcionais <b>azuis</b> nas europeias/nacionais e <b>verdes</b> nas autoestradas. Aviso de alce em triângulo é icônico.",
    arch:"Madeira pintada de vermelho, amarelo ou branco; celeiros grandes; igrejas brancas com torre preta.",
    nat:"Florestas de coníferas por quase todo o território, lagos, granito exposto, campos agrícolas no sul (Escânia).",
    extra:"O sul (Escânia) é plano e agrícola, e pode ser confundido com a Dinamarca."
  },
  rgs:[
    {n:"Escânia/Götaland (sul)", t:"Plano, agrícola, casas de tijolo, faias."},
    {n:"Svealand (centro)", t:"Lagos grandes, florestas, Estocolmo e arquipélago."},
    {n:"Norrland (norte)", t:"Vasto, floresta boreal, rios largos, neve, renas na Lapônia."}
  ],
  cf:[{n:"Noruega",t:"NO é montanhosa e usa placas direcionais amarelas."},
      {n:"Finlândia",t:"FI tem placas de rua azuis e sinalização bilíngue."}]
},
{
  id:"switzerland", n:"Suíça", en:"Switzerland", fl:"🇨🇭", rg:"Europa", cov:"Completa", dif:2,
  side:"Direita", dom:".ch", lang:"Alemão, Francês, Italiano, Romanche", scr:"Latino",
  plate:"Branca com <b>cruz suíça</b> e brasão cantonal, letras pretas, <b>sem</b> faixa UE",
  tldr:"Placas de autoestrada <b>verdes</b>, cruz suíça nos veículos e Alpes impecáveis.",
  quick:[
    "Sinalização de autoestrada <b>verde</b> — na maior parte da Europa é azul",
    "Placa do veículo com <b>cruz branca em vermelho</b> e brasão do cantão",
    "Quatro línguas oficiais: alemão (centro/leste), francês (oeste), italiano (Ticino)",
    "Tudo extremamente conservado: asfalto, cercas, jardins e fachadas"
  ],
  m:{
    car:"Cobertura completa. Historicamente com desfoque mais agressivo por causa das leis de privacidade.",
    bol:"Delineadores brancos com refletor; guard-rails e muros de contenção em estradas de montanha.",
    pol:"Fiação enterrada em quase toda parte; linhas de trem eletrificadas visíveis com frequência.",
    road:"Marcação branca impecável; sinalização de curva e altitude abundante.",
    sign:"Direcionais <b>verdes</b> nas autoestradas (A), <b>azuis</b> nas estradas principais e <b>brancas</b> nas locais — o inverso da Itália e da França.",
    arch:"Chalés de madeira escura com varandas floridas, casas com reboco claro e venezianas, celeiros altos de madeira.",
    nat:"Alpes ao sul, Jura ao noroeste, planalto central com lagos. Pastagens verdes e vacas com sinos.",
    extra:"Trens e teleféricos aparecem com muita frequência; a rede ferroviária é densíssima."
  },
  rgs:[
    {n:"Suíça alemã", t:"Maior parte do país; alemão, chalés, ordem extrema."},
    {n:"Romandia (oeste)", t:"Francês, Genebra e Lausanne, vinhedos no Lago Léman."},
    {n:"Ticino (sul)", t:"Italiano, palmeiras, lagos, arquitetura lombarda."}
  ],
  cf:[{n:"Áustria",t:"AT tem placas de autoestrada azuis e bollard com topo preto."},
      {n:"Liechtenstein",t:"Enclave vizinho, também sem UE, mas minúsculo."}]
},
{
  id:"ukraine", n:"Ucrânia", en:"Ukraine", fl:"🇺🇦", rg:"Europa", cov:"Parcial", dif:3,
  side:"Direita", dom:".ua", lang:"Ucraniano", scr:"Cirílico (і, ї, є, ґ)",
  plate:"Branca com faixa azul 'UA' e bandeira azul-amarela, letras pretas",
  tldr:"Cirílico com <b>і</b>, <b>ї</b> e <b>є</b>, solo preto fértil e campos de girassol.",
  quick:[
    "Letras <b>і</b>, <b>ї</b>, <b>є</b> — existem em ucraniano e não em russo",
    "Placa com faixa azul e <b>UA</b> sobre a bandeira azul e amarela",
    "<b>Chernozem</b>: solo escuro quase preto em campos enormes",
    "Postes de concreto com travessas e casas rurais caiadas"
  ],
  m:{
    car:"Cobertura ampla da Ucrânia continental (a atualização depende da situação no terreno).",
    bol:"Delineadores brancos com faixa preta; guard-rails simples.",
    pol:"Postes de concreto com furos e travessas metálicas; muitos inclinados.",
    road:"Linhas brancas gastas; estradas com buracos frequentes fora das principais.",
    sign:"Direcionais azuis e verdes em cirílico, com transliteração latina em rotas internacionais.",
    arch:"Casas caiadas de branco ou pintadas de azul-claro com telhado de chapa; blocos soviéticos; igrejas ortodoxas com cúpulas douradas.",
    nat:"Estepe fértil no centro e sul, florestas no norte (Polésia), Cárpatos a oeste, litoral do Mar Negro ao sul.",
    extra:"Girassóis e trigo em escala industrial no verão; o país é extremamente plano no centro."
  },
  cf:[{n:"Rússia",t:"RU não tem 'і/ї/є' e a placa tem bloco branco/azul com RUS."},
      {n:"Belarus",t:"Sem cobertura oficial ampla; o bielorrusso usa 'ў'."}]
},
{
  id:"uk", n:"Reino Unido", en:"United Kingdom", fl:"🇬🇧", rg:"Europa", cov:"Completa", dif:2,
  side:"Esquerda", dom:".uk", lang:"Inglês (e galês, gaélico)", scr:"Latino",
  plate:"<b>Branca na frente, amarela atrás</b> — combinação exclusiva do Reino Unido",
  tldr:"Direção pela esquerda, placa traseira amarela, limites em <b>mph</b> e sebes altas.",
  quick:[
    "Placa <b>amarela na traseira</b> e branca na dianteira",
    "Limites de velocidade em <b>mph</b> sem unidade escrita, em círculo com borda vermelha",
    "Direção pela <b>esquerda</b> com sebes altas e estradas de pista única com passing places",
    "Postes de madeira com muitas travessas e isoladores; caixas de correio vermelhas"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Delineadores brancos e pretos com refletores; postes com refletor vermelho à esquerda e branco à direita.",
    pol:"Postes de madeira redondos com braços múltiplos; muita fiação aérea em áreas rurais.",
    road:"Linhas brancas; <b>linhas amarelas duplas</b> junto ao meio-fio indicando proibição de estacionar — marcador clássico do Reino Unido e da Irlanda.",
    sign:"Direcionais <b>azuis</b> nas autoestradas (M), <b>verdes</b> nas primárias (A) e <b>brancas</b> nas secundárias. Placas de aviso em triângulo com borda vermelha.",
    arch:"Casas geminadas de tijolo vermelho, cottages de pedra, telhados de ardósia. Pubs, igrejas normandas com torre quadrada.",
    nat:"Campos divididos por sebes e muros de pedra, charnecas na Escócia e no norte da Inglaterra, poucas florestas nativas.",
    extra:"Galês nas placas do País de Gales (bilíngue) e gaélico em partes da Escócia."
  },
  rgs:[
    {n:"Inglaterra", t:"Tijolo vermelho, sebes, campos pequenos, densidade alta."},
    {n:"Escócia", t:"Montanhas peladas (Highlands), charneca marrom, pedra cinza, estradas de pista única."},
    {n:"País de Gales", t:"Sinalização <b>bilíngue</b> galês/inglês, colinas verdes, ardósia escura."},
    {n:"Irlanda do Norte", t:"Verde como a República, mas com mph e placas brancas."}
  ],
  cf:[{n:"Irlanda",t:"IE usa km/h, losangos amarelos e sinalização bilíngue irlandesa."},
      {n:"Austrália/Nova Zelândia",t:"Também esquerda; a vegetação e as placas resolvem."}]
},
{
  id:"bosnia", n:"Bósnia e Herzegovina", en:"Bosnia and Herzegovina", fl:"🇧🇦", rg:"Europa", cov:"Completa", dif:4,
  side:"Direita", dom:".ba", lang:"Bósnio, Croata, Sérvio", scr:"Latino e Cirílico",
  plate:"Branca com faixa azul 'BIH', letras e números <b>sem</b> código regional (neutro por acordo político)",
  tldr:"Montanhas florestadas, minaretes e igrejas na mesma vista, e marcas visíveis da guerra.",
  quick:[
    "Placas <b>BIH</b> sem prefixo regional — desenho propositalmente neutro",
    "Mesquitas com <b>minarete fino e pontudo</b> ao lado de igrejas católicas e ortodoxas",
    "Prédios com <b>marcas de tiro</b> e casas abandonadas em algumas regiões",
    "Relevo montanhoso e florestado em quase todo o país"
  ],
  m:{
    car:"Cobertura obtida em levas mais recentes; qualidade geralmente boa.",
    bol:"Delineadores brancos com refletor vermelho; guard-rails simples em estradas de vale.",
    pol:"Postes de concreto e madeira; fiação aérea desorganizada.",
    road:"Estradas estreitas seguindo rios; poucos trechos de autoestrada (A1 em construção por partes).",
    sign:"Direcionais azuis e verdes; na Republika Srpska aparecem versões em cirílico, na Federação predomina o latino.",
    arch:"Casas de tijolo ou concreto com telhado vermelho de quatro águas; construções otomanas em Sarajevo e Mostar.",
    nat:"Alpes Dináricos, rios de água turquesa (Neretva, Una), florestas densas, karst na Herzegovina ao sul.",
    extra:"A divisão entre Federação e Republika Srpska aparece na escrita e nas bandeiras."
  },
  cf:[{n:"Sérvia",t:"SRB tem escudo colorido na placa."},
      {n:"Croácia",t:"HR tem faixa UE e xadrez."},
      {n:"Montenegro",t:"MNE tem brasão dourado; paisagem parecida."}]
},
{
  id:"moldova", n:"Moldávia", en:"Moldova", fl:"🇲🇩", rg:"Europa", cov:"Completa", dif:4,
  side:"Direita", dom:".md", lang:"Romeno", scr:"Latino",
  plate:"Branca com faixa azul 'MD' e brasão, <b>sem</b> estrelas da UE",
  tldr:"Romeno sem faixa da UE, colinas suaves cobertas de vinhedos e nozes.",
  quick:[
    "Língua <b>romena</b> com placas <b>MD</b> (sem estrelas da UE)",
    "Colinas onduladas com <b>vinhedos</b> e nogueiras plantadas ao longo das estradas",
    "Postes de concreto, casas caiadas e portões de metal pintados",
    "Sem litoral e sem montanhas altas — relevo suave em todo o país"
  ],
  m:{
    car:"Cobertura completa do território controlado por Chisinau.",
    bol:"Delineadores brancos com faixa preta; muitos ausentes.",
    pol:"Postes de concreto cinza com travessas metálicas; fiação simples.",
    road:"Asfalto irregular; muitas estradas rurais de terra batida.",
    sign:"Direcionais azuis em romeno; alguns remanescentes em russo.",
    arch:"Casas com varanda de colunas e telhado de chapa colorida; blocos soviéticos em Chisinau.",
    nat:"Estepe florestada, vinhedos, campos de girassol, vales do Nistro e Prut.",
    extra:"A Transnístria, a leste do Nistro, tem sinalização em russo e símbolos soviéticos."
  },
  cf:[{n:"Romênia",t:"RO tem faixa UE e Cárpatos."},
      {n:"Ucrânia",t:"UA é cirílico."}]
},
{
  id:"cyprus", n:"Chipre", en:"Cyprus", fl:"🇨🇾", rg:"Europa", cov:"Completa", dif:2,
  side:"Esquerda", dom:".cy", lang:"Grego (e turco no norte)", scr:"Grego",
  plate:"Branca na frente, <b>amarela atrás</b>, com faixa UE 'CY'",
  tldr:"Grego + direção pela <b>esquerda</b> = Chipre, sem exceção.",
  quick:[
    "<b>Grego</b> com direção pela <b>esquerda</b> — combinação exclusiva",
    "Placa traseira amarela (herança britânica) com faixa da UE",
    "Caixas d'água e <b>painéis solares nos telhados</b> em quase toda casa",
    "Paisagem seca com pinheiros, oliveiras e montanhas no centro (Troodos)"
  ],
  m:{
    car:"Cobertura no sul (República de Chipre); o norte tem cobertura mais limitada.",
    bol:"Delineadores brancos com refletor; guard-rails metálicos.",
    pol:"Postes de concreto e madeira; fiação aérea aparente.",
    road:"Linhas brancas e amarelas; autoestradas modernas com sinalização em grego e inglês.",
    sign:"Sinalização britânica adaptada, bilíngue grego/inglês.",
    arch:"Casas de concreto com telhado plano e tanque de água; igrejas ortodoxas de pedra.",
    nat:"Vegetação mediterrânea, montanhas Troodos com pinheiros, planície central seca (Mesaoria).",
    extra:"No norte (RTNC), a sinalização é em turco e as placas são diferentes."
  },
  cf:[{n:"Grécia",t:"GR dirige pela direita."},
      {n:"Malta",t:"MT também é esquerda, mas usa maltês e calcário amarelo."}]
},
{
  id:"greenland", n:"Groenlândia", en:"Greenland", fl:"🇬🇱", rg:"Europa", cov:"Parcial", dif:1,
  side:"Direita", dom:".gl", lang:"Groenlandês e Dinamarquês", scr:"Latino",
  plate:"Branca com letras pretas, formato dinamarquês simplificado",
  tldr:"Assentamentos coloridos isolados, sem estradas entre cidades e rocha ártica nua.",
  quick:[
    "Casas de madeira <b>pintadas em cores vivas</b> (vermelho, azul, amarelo) sobre rocha nua",
    "<b>Nenhuma estrada</b> liga uma cidade à outra — cobertura em bolsões isolados",
    "Groenlandês com palavras longuíssimas ('Nuuk', 'Qaqortoq', 'Ilulissat')",
    "Icebergs, fiordes e ausência total de árvores"
  ],
  m:{
    car:"Cobertura limitada a assentamentos (Nuuk, Ilulissat, Sisimiut, Qaqortoq) e alguns trechos de trilha.",
    bol:"Praticamente inexistentes; barreiras simples em encostas.",
    pol:"Fiação aérea sobre rocha; tubulações de água aquecidas acima do solo.",
    road:"Estradas curtas de asfalto ou cascalho dentro das cidades.",
    sign:"Placas em groenlandês e dinamarquês.",
    arch:"Casas pré-fabricadas de madeira coloridas, blocos de apartamentos dinamarqueses.",
    nat:"Rocha, gelo, tundra, sem árvores. Icebergs no mar em muitas vistas.",
    extra:"Se você vê casas coloridas isoladas em rocha ártica com nomes em -suaq ou -tsiaq, é Groenlândia."
  },
  cf:[{n:"Islândia",t:"IS tem estradas conectadas e vegetação; GL é ártica e fragmentada."},
      {n:"Svalbard/Noruega ártica",t:"Nomes noruegueses e mineração."}]
},
{
  id:"jersey", n:"Jersey e Guernsey", en:"Channel Islands", fl:"🇯🇪", rg:"Europa", cov:"Completa", dif:3,
  side:"Esquerda", dom:".je / .gg", lang:"Inglês (e francês histórico)", scr:"Latino",
  plate:"Branca/amarela com 'J' (Jersey) ou 'GY' (Guernsey) e números",
  tldr:"Ilhas britânicas no Canal da Mancha com nomes de rua franceses e limites em mph.",
  quick:[
    "Direção pela <b>esquerda</b> com nomes de lugar em <b>francês</b> (La Rue, Le Mont, St. Ouen)",
    "Placas de veículo com prefixo <b>J</b> ou <b>GY</b> e sem faixa da UE",
    "Estradas estreitíssimas entre muros de pedra e sebes altas",
    "Limites baixos (40, 30, 20 mph); Jersey tem limite máximo de 40 mph"
  ],
  m:{
    car:"Cobertura completa das ilhas principais.",
    bol:"Muros de granito e sebes fazem o papel de barreira; poucos delineadores.",
    pol:"Postes de madeira no estilo britânico.",
    road:"Marcação branca; muitas 'Green Lanes' com prioridade a pedestres em Jersey.",
    sign:"Sinalização britânica em inglês, com topônimos franceses.",
    arch:"Casas de granito rosado com telhado de ardósia; bunkers alemães da Segunda Guerra na costa.",
    nat:"Falésias, praias de maré enorme, campos pequenos com batata e vacas.",
    extra:"As torres de defesa e os bunkers da ocupação alemã são muito visíveis na costa."
  },
  cf:[{n:"Reino Unido",t:"UK tem placas com faixa e topônimos ingleses."},
      {n:"França (Normandia)",t:"FR dirige pela direita."}]
},
{
  id:"isle-of-man", n:"Ilha de Man", en:"Isle of Man", fl:"🇮🇲", rg:"Europa", cov:"Completa", dif:3,
  side:"Esquerda", dom:".im", lang:"Inglês (e manês)", scr:"Latino",
  plate:"Branca/amarela com prefixo <b>MAN</b>",
  tldr:"Ilha britânica no Mar da Irlanda, com o circuito TT e o triskelion de três pernas.",
  quick:[
    "Símbolo do <b>triskelion</b> (três pernas) em bandeiras e placas oficiais",
    "Placas de veículo com <b>MAN</b>",
    "Trechos de estrada <b>sem limite de velocidade</b> fora das áreas urbanas",
    "Marcos e sinalização do circuito de motociclismo TT"
  ],
  m:{
    car:"Cobertura completa.",
    bol:"Postes brancos e pretos no estilo britânico; muros de pedra.",
    pol:"Postes de madeira; bondes elétricos e ferrovia a vapor em partes da ilha.",
    road:"Marcação britânica; estradas de montanha abertas com charneca.",
    sign:"Inglês; alguns nomes em manês. Placas de aviso britânicas.",
    arch:"Casas de pedra e reboco branco, vilarejos costeiros vitorianos.",
    nat:"Colinas de charneca no centro, falésias, campos verdes divididos por muros.",
    extra:"Sem faixa da UE e sem símbolos do Reino Unido nas placas — território dependente da Coroa."
  },
  cf:[{n:"Reino Unido",t:"UK tem placas com faixa azul e limites por toda parte."},
      {n:"Irlanda",t:"IE usa km/h e dirige pela esquerda também — o triskelion resolve."}]
}
]);
