window.GG = window.GG || {};
GG.countries = (GG.countries || []).concat([
{
  id:"usa", n:"Estados Unidos", en:"United States", fl:"🇺🇸", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".com / .gov", lang:"Inglês (e espanhol)", scr:"Latino",
  plate:"Varia por estado; a maioria é branca com desenho e o <b>nome do estado</b> no topo",
  tldr:"Linha central <b>amarela</b>, placas de rua verdes e postes de madeira com transformadores cinza.",
  quick:[
    "<b>Linha central amarela</b> separando sentidos opostos (padrão das Américas)",
    "Placas de nome de rua <b>verdes com texto branco</b> na maior parte do país",
    "Postes de <b>madeira</b> com transformadores cilíndricos cinza e muitos cabos",
    "Sinalização de aviso em <b>losango amarelo</b> e placas de parada octogonais 'STOP'"
  ],
  m:{
    car:"Cobertura completa e muito atualizada. Sem meta de carro relevante.",
    bol:"Delineadores brancos com refletor; postes flexíveis; guard-rails de madeira e metal (W-beam).",
    pol:"Postes de madeira redondos com transformador cinza, muitos cabos e às vezes luminária. Um dos marcadores mais confiáveis das Américas.",
    road:"Linha central <b>amarela</b> (simples ou dupla) e bordas <b>brancas</b>. Faixas de mesmo sentido separadas por branco.",
    sign:"Direcionais <b>verdes</b> nas rodovias, escudo azul e vermelho das Interstates, escudo branco das US Routes, e formatos próprios por estado nas state routes — a <b>forma do escudo estadual</b> é a pista mais precisa.",
    arch:"Casas isoladas de madeira com revestimento horizontal (siding) e garagem frontal; strip malls; postes de bandeira americana em quintais.",
    nat:"Enorme variedade: floresta decídua a leste, pradaria no centro, deserto a sudoeste, coníferas no noroeste, subtropical na Flórida.",
    extra:"A <b>placa do veículo</b> é decisiva quando legível — cada estado tem cor e desenho próprios."
  },
  rgs:[
    {n:"Nordeste", t:"Floresta decídua densa, casas de madeira brancas, muros de pedra, estradas estreitas."},
    {n:"Sul", t:"Pinheiros, terra vermelha na Geórgia/Alabama, ciprestes em pântanos, igrejas batistas."},
    {n:"Meio-Oeste", t:"Grade perfeita de estradas rurais, milho e soja, silos, celeiros vermelhos, terreno plano."},
    {n:"Sudoeste", t:"Deserto com saguaros no Arizona, mesas vermelhas em Utah, arquitetura adobe no Novo México."},
    {n:"Costa Oeste", t:"Sequoias e coníferas no noroeste, colinas douradas e palmeiras na Califórnia."},
    {n:"Montanhas Rochosas", t:"Coníferas, picos nevados, cercas de madeira, ranchos."}
  ],
  cf:[{n:"Canadá",t:"CA tem placas de rua e sinalização em km/h, além de bandeiras com folha de bordo."},
      {n:"Austrália",t:"AU dirige pela esquerda."}]
},
{
  id:"canada", n:"Canadá", en:"Canada", fl:"🇨🇦", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".ca", lang:"Inglês e Francês", scr:"Latino",
  plate:"Varia por província; muitas só têm placa <b>traseira</b> (Ontário, Quebec)",
  tldr:"Como os EUA, mas em <b>km/h</b>, com sinalização bilíngue no leste e coníferas ao norte.",
  quick:[
    "Limites de velocidade em <b>km/h</b> com a unidade escrita na placa",
    "Sinais de <b>STOP/ARRÊT</b> bilíngues no Quebec e em Nova Brunswick",
    "Placas de aviso em <b>losango amarelo</b> com símbolos, muitas vezes sem texto",
    "Postes de madeira similares aos americanos; florestas boreais de coníferas"
  ],
  m:{
    car:"Cobertura completa até áreas remotas do norte, incluindo estradas de inverno.",
    bol:"Delineadores brancos com refletor; marcadores de neve altos em áreas nevadas.",
    pol:"Postes de madeira com transformadores; praticamente idênticos aos dos EUA.",
    road:"Linha central amarela e bordas brancas, como nos EUA.",
    sign:"Direcionais <b>verdes</b>; escudos rodoviários próprios de cada província (o de Ontário é um escudo com coroa, o do Quebec tem flor-de-lis). Placas de saída com 'Sortie' no Quebec.",
    arch:"Casas de madeira com revestimento horizontal; no Quebec, telhados íngremes e escadas exteriores em Montreal.",
    nat:"Floresta boreal de coníferas por quase todo o país, pradaria plana no centro (Saskatchewan, Manitoba), Rochosas a oeste, tundra ao norte.",
    extra:"A <b>ausência de placa dianteira</b> em vários estados/províncias e a bandeira com folha de bordo ajudam a confirmar."
  },
  rgs:[
    {n:"Colúmbia Britânica", t:"Montanhas, coníferas gigantes, chuva, costa recortada."},
    {n:"Pradarias (AB, SK, MB)", t:"Plano até o horizonte, trigo e canola, elevadores de grãos."},
    {n:"Ontário", t:"Florestas mistas, lagos, agricultura no sul, Escudo Canadense ao norte."},
    {n:"Quebec", t:"Francês em tudo, celeiros, igrejas com telhado prateado, casas com escada externa."},
    {n:"Marítimas (NS, NB, PEI)", t:"Costa atlântica, casas de madeira coloridas, solo vermelho na PEI."}
  ],
  cf:[{n:"Estados Unidos",t:"Use km/h, escudos rodoviários e o francês no Quebec."},
      {n:"Escandinávia",t:"Florestas parecidas; a linha central amarela e os postes de madeira resolvem."}]
},
{
  id:"mexico", n:"México", en:"Mexico", fl:"🇲🇽", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".mx", lang:"Espanhol", scr:"Latino",
  plate:"Varia por estado, geralmente branca com desenho e o <b>nome do estado</b>",
  tldr:"Topes (quebra-molas), fachadas comerciais pintadas e paisagem árida com cactos no norte.",
  quick:[
    "<b>Topes</b>: quebra-molas altíssimos com placa própria, em quase toda entrada de povoado",
    "Fachadas de lojas <b>pintadas com propaganda</b> em cores fortes (Coca-Cola, Tecate, Corona)",
    "Postes de concreto com seção quadrada e furos, além de postes de madeira",
    "Sinalização em espanhol com placas verdes nas rodovias federais"
  ],
  m:{
    car:"Cobertura ampla e recente.",
    bol:"Delineadores brancos com faixa preta ou refletor; marcos quilométricos brancos e pretos.",
    pol:"Mistura de postes de concreto quadrados e de madeira; fiação aérea densa nas cidades.",
    road:"Linha central <b>amarela</b> e bordas brancas; autopistas de pedágio bem conservadas e rodovias livres esburacadas.",
    sign:"Direcionais <b>verdes</b> nas federais e brancas com borda nas locais. Placas de destino com a distância em km.",
    arch:"Casas de bloco de concreto com telhado plano e varetas de ferro expostas; igrejas coloniais espanholas com torres gêmeas; centros históricos com fachadas coloridas.",
    nat:"Deserto com cactos e mesquites no norte, planalto central seco com agaves, selva tropical no sul e no Yucatán, montanhas (Sierra Madre) nos dois lados.",
    extra:"O <b>agave azul</b> em plantações alinhadas indica Jalisco; os saguaros e ocotillos indicam Sonora e Chihuahua."
  },
  rgs:[
    {n:"Norte (Sonora, Chihuahua, Coahuila)", t:"Deserto, cactos, ranchos, cidades de grade e maquiladoras."},
    {n:"Bajío/Centro", t:"Planalto alto, agaves, cidades coloniais, montanhas ao fundo."},
    {n:"Sul (Oaxaca, Chiapas)", t:"Montanhas verdes, população indígena, arquitetura mais simples."},
    {n:"Yucatán", t:"Plano, calcário branco, selva baixa, casas maias ovais com telhado de palha, ruínas."}
  ],
  cf:[{n:"Guatemala",t:"GT é mais montanhoso e verde, com trajes indígenas coloridos."},
      {n:"Sudoeste dos EUA",t:"Paisagem parecida; a língua e os topes resolvem."}]
},
{
  id:"guatemala", n:"Guatemala", en:"Guatemala", fl:"🇬🇹", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".gt", lang:"Espanhol (e idiomas maias)", scr:"Latino",
  plate:"Branca com letras pretas e faixa lateral; comerciais em outras cores",
  tldr:"Vulcões cônicos, ônibus escolares americanos repintados e tecidos maias coloridos.",
  quick:[
    "<b>Chicken buses</b>: ônibus escolares americanos repintados com cores vibrantes e cromados",
    "<b>Vulcões cônicos</b> perfeitos no horizonte do altiplano",
    "Mulheres com <b>huipiles</b> (blusas bordadas) e tecidos maias muito coloridos",
    "Montanhas íngremes com milho plantado até em encostas quase verticais"
  ],
  m:{
    car:"Cobertura ampla nas rodovias e cidades.",
    bol:"Poucos delineadores; muros de contenção e barreiras de concreto em curvas.",
    pol:"Postes de concreto e madeira; fiação emaranhada.",
    road:"Rodovias CA sinuosas com asfalto irregular; quebra-molas ('túmulos') frequentes.",
    sign:"Placas em espanhol; sinalização escassa fora das rodovias principais.",
    arch:"Casas de bloco com telhado de chapa ou telha; igrejas coloniais amarelas e brancas; construções de adobe em áreas rurais.",
    nat:"Altiplano vulcânico com pinheiros, selva tropical no Petén ao norte, costa do Pacífico com plantações.",
    extra:"A cadeia de vulcões ao longo do Pacífico é a paisagem-assinatura do país."
  },
  cf:[{n:"México (Chiapas)",t:"Muito parecido; procure placas de veículo e a numeração das rodovias."},
      {n:"El Salvador/Honduras",t:"Cobertura menor; paisagem semelhante."}]
},
{
  id:"costa-rica", n:"Costa Rica", en:"Costa Rica", fl:"🇨🇷", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".cr", lang:"Espanhol", scr:"Latino",
  plate:"Branca com letras pretas e faixa azul com 'CR'",
  tldr:"Verde tropical exuberante, cercas vivas de árvores vivas e grades brancas nas casas.",
  quick:[
    "Vegetação <b>tropical densa e muito verde</b>, com palmeiras e florestas nebulosas",
    "<b>Cercas feitas de árvores vivas</b> (postes que brotam folhas) em áreas rurais",
    "Casas com <b>grades brancas</b> em janelas e varandas, telhado de chapa colorida",
    "Placas de veículo com faixa azul e 'CR'; sem exército e com muita sinalização ambiental"
  ],
  m:{
    car:"Cobertura ampla e recente.",
    bol:"Delineadores brancos e barreiras metálicas em estradas de montanha.",
    pol:"Postes de concreto quadrados e de madeira; fiação aérea aparente.",
    road:"Rodovias estreitas e sinuosas com marcação branca e amarela; pontes de pista única sinalizadas ('Ceda el paso').",
    sign:"Placas em espanhol com fundo verde nas rodovias; muitas placas de travessia de animais silvestres.",
    arch:"Casas de bloco pintadas em cores claras com telhado de chapa ondulada; sodas (restaurantes locais) à beira da estrada.",
    nat:"Floresta tropical úmida, floresta nebulosa em altitude, vulcões ativos, plantações de café e banana.",
    extra:"A alta densidade de <b>placas de conservação e parques nacionais</b> é característica."
  },
  cf:[{n:"Panamá",t:"PA tem placas diferentes e o Canal como referência."},
      {n:"Colômbia",t:"CO é muito maior e mais montanhoso."}]
},
{
  id:"panama", n:"Panamá", en:"Panama", fl:"🇵🇦", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".pa", lang:"Espanhol", scr:"Latino",
  plate:"Branca com letras pretas e o ano; desenho muda conforme a província",
  tldr:"Istmo tropical com arranha-céus na Cidade do Panamá e o Canal cortando o país.",
  quick:[
    "<b>Skyline de arranha-céus</b> da Cidade do Panamá — algo raro na América Central",
    "Uso do <b>dólar americano</b> junto com o balboa; preços em US$",
    "Vegetação tropical densa e clima úmido em quase todo o território",
    "Rodovia Panamericana como eixo principal, com a Serra do Darién intransponível a leste"
  ],
  m:{
    car:"Cobertura ampla nas rodovias e cidades.",
    bol:"Delineadores brancos e barreiras metálicas; iluminação nas rodovias principais.",
    pol:"Postes de concreto e madeira; fiação aérea.",
    road:"Corredores modernos na capital; rodovias interioranas estreitas com marcação amarela e branca.",
    sign:"Placas em espanhol, com sinalização moderna nas vias da capital.",
    arch:"Torres de vidro na capital, casas de bloco pintadas no interior, arquitetura colonial no Casco Viejo.",
    nat:"Floresta tropical, mangues, ilhas no Caribe e no Pacífico, montanhas a oeste (Chiriquí).",
    extra:"Estruturas do Canal, navios cargueiros e pontes sobre o canal são pistas definitivas."
  },
  cf:[{n:"Costa Rica",t:"CR não tem skyline comparável e usa colón."},
      {n:"Colômbia",t:"CO é muito maior; a fronteira do Darién não tem estrada."}]
},
{
  id:"colombia", n:"Colômbia", en:"Colombia", fl:"🇨🇴", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".co", lang:"Espanhol", scr:"Latino",
  plate:"<b>Amarela</b> com letras pretas (particulares) ou branca (públicos)",
  tldr:"Placas amarelas, três cordilheiras dos Andes e montanhas verdes com café.",
  quick:[
    "Placas de veículo <b>amarelas</b> com letras pretas",
    "Três ramos dos Andes atravessando o país, com vales profundos entre eles",
    "Motos em quantidade enorme e mototáxis em cidades pequenas",
    "Casas de bloco pintadas em cores vivas com telhado de telha ou chapa"
  ],
  m:{
    car:"Cobertura ampla nas regiões andinas e caribenhas; menor na Amazônia e nos Llanos.",
    bol:"Delineadores brancos e barreiras metálicas em estradas de montanha; muros de contenção frequentes.",
    pol:"Postes de concreto quadrados e redondos; fiação aérea aparente.",
    road:"Rodovias sinuosas de montanha com marcação amarela e branca; muitos deslizamentos e obras.",
    sign:"Placas em espanhol com fundo verde nas nacionais; muitas placas de peaje (pedágio).",
    arch:"Casas coloniais com varandas de madeira em cidades cafeeiras; blocos de tijolo vermelho aparente em Bogotá e Medellín.",
    nat:"Cordilheiras verdes com café e bananeiras, páramo de altitude, Caribe seco no norte, Amazônia e Llanos a leste.",
    extra:"O <b>tijolo vermelho aparente</b> em prédios inteiros é muito característico das cidades andinas colombianas."
  },
  rgs:[
    {n:"Eixo cafeeiro", t:"Montanhas verdes, café em encosta, palmeiras de cera altíssimas."},
    {n:"Caribe (Cartagena, Barranquilla)", t:"Seco, quente, palmeiras, casas coloridas."},
    {n:"Bogotá/Altiplano", t:"Alto e frio, eucaliptos, tijolo vermelho, névoa."},
    {n:"Llanos (leste)", t:"Planície de savana, gado, muito plano e vazio."}
  ],
  cf:[{n:"Equador",t:"EC tem placas brancas e é bem menor."},
      {n:"Venezuela",t:"Cobertura oficial muito limitada."},
      {n:"Peru",t:"PE é mais seco na costa e tem placas diferentes."}]
},
{
  id:"ecuador", n:"Equador", en:"Ecuador", fl:"🇪🇨", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".ec", lang:"Espanhol (e quíchua)", scr:"Latino",
  plate:"Branca com letras pretas e faixa com a bandeira; a primeira letra indica a província",
  tldr:"Andes altos entre a costa tropical e a Amazônia, tudo em um país pequeno.",
  quick:[
    "Três mundos em pouca distância: costa quente, serra andina alta e selva amazônica",
    "<b>Vulcões nevados</b> (Cotopaxi, Chimborazo) visíveis do altiplano",
    "Uso do <b>dólar americano</b> como moeda oficial — preços em US$",
    "Placas de veículo com a bandeira equatoriana e a província na letra inicial"
  ],
  m:{
    car:"Cobertura ampla, incluindo Galápagos.",
    bol:"Delineadores brancos e barreiras metálicas; muros de contenção em encostas.",
    pol:"Postes de concreto e madeira; fiação aérea.",
    road:"Rodovias bem conservadas nos eixos principais (E35), com marcação amarela e branca; muitos pedágios.",
    sign:"Placas em espanhol com fundo verde; sinalização moderna nas rodovias estatais.",
    arch:"Casas de bloco com telhado de chapa ou telha; centros coloniais brancos em Quito e Cuenca; construções de bambu na costa.",
    nat:"Páramo de altitude com pajonal, vulcões, floresta nebulosa nas encostas, bananeiras e cacau na costa, selva a leste.",
    extra:"Estufas de plástico para <b>rosas</b> em massa no vale de Cayambe são um marcador regional."
  },
  cf:[{n:"Peru",t:"PE é muito maior e tem costa desértica."},
      {n:"Colômbia",t:"CO tem placas amarelas."}]
},
{
  id:"peru", n:"Peru", en:"Peru", fl:"🇵🇪", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".pe", lang:"Espanhol (e quíchua, aimará)", scr:"Latino",
  plate:"Branca com letras pretas, faixa vermelha e branca e o nome 'PERÚ'",
  tldr:"Costa desértica sem chuva, Andes altíssimos e Amazônia — três países em um.",
  quick:[
    "<b>Costa desértica</b> cinza e sem vegetação, com areia encostando no mar",
    "Casas de <b>tijolo vermelho aparente inacabadas</b> com ferragem exposta, muito comuns",
    "Mototáxis de três rodas com toldo em cidades pequenas",
    "Andes com terraços incas e altiplano acima de 3.500 m"
  ],
  m:{
    car:"Cobertura ampla na costa e na serra; menor na Amazônia.",
    bol:"Delineadores brancos e pretos; barreiras de concreto e muros de contenção em estradas de montanha.",
    pol:"Postes de concreto quadrados e de madeira; fiação simples.",
    road:"Panamericana ao longo da costa em bom estado; estradas de serra sinuosas e frequentemente sem asfalto.",
    sign:"Placas em espanhol com fundo verde; propaganda política pintada em muros e rochas é muito comum.",
    arch:"Tijolo vermelho e concreto inacabado nas cidades; adobe nas áreas rurais andinas; centros coloniais espanhóis em Cusco e Arequipa.",
    nat:"Deserto costeiro (um dos mais secos do mundo), puna e altiplano nos Andes, selva amazônica a leste.",
    extra:"<b>Propaganda política pintada</b> diretamente em paredes e pedras à beira da estrada é uma assinatura peruana e boliviana."
  },
  rgs:[
    {n:"Costa", t:"Deserto cinza, dunas, oásis com plantações irrigadas, Lima."},
    {n:"Serra", t:"Andes altos, terraços, lhamas e alpacas, adobe, altiplano."},
    {n:"Selva", t:"Amazônia, rios largos, casas de madeira sobre pilares."}
  ],
  cf:[{n:"Bolívia",t:"BO é mais pobre visualmente e não tem litoral."},
      {n:"Chile (norte)",t:"CL tem infraestrutura muito melhor no Atacama."}]
},
{
  id:"bolivia", n:"Bolívia", en:"Bolivia", fl:"🇧🇴", rg:"Américas", cov:"Parcial", dif:4,
  side:"Direita", dom:".bo", lang:"Espanhol, Quíchua, Aimará", scr:"Latino",
  plate:"Branca com números pretos e faixa com 'BOLIVIA'",
  tldr:"Altiplano árido e altíssimo, tijolo aparente e cobertura irregular.",
  quick:[
    "<b>Altiplano</b> muito alto (3.700 m+), seco, com montanhas nevadas ao fundo",
    "Casas de <b>tijolo vermelho aparente</b> sem reboco, cobrindo encostas inteiras em El Alto",
    "Mulheres com <b>chapéu-coco</b> e saia rodada (pollera) nas cidades andinas",
    "Cobertura irregular: muita estrada sem imagem e trechos de qualidade baixa"
  ],
  m:{
    car:"Cobertura parcial; boa nas rodovias principais e cidades, com lacunas grandes no interior.",
    bol:"Poucos delineadores; barreiras improvisadas em estradas de montanha.",
    pol:"Postes de concreto e madeira; eletrificação irregular.",
    road:"Rodovias asfaltadas nos eixos principais; muita estrada de terra e cascalho no altiplano e nos vales.",
    sign:"Placas em espanhol; sinalização escassa; propaganda política pintada em muros.",
    arch:"Tijolo aparente em massa; adobe nas áreas rurais; 'cholets' coloridos e ornamentados em El Alto.",
    nat:"Altiplano com salares (Uyuni), montanhas nevadas na Cordilheira Real, vales temperados (Cochabamba), Amazônia e Chaco nas terras baixas a leste.",
    extra:"O Salar de Uyuni, branco e infinito, é a paisagem mais reconhecível do país."
  },
  cf:[{n:"Peru",t:"PE tem litoral e mais infraestrutura."},
      {n:"Argentina (noroeste)",t:"AR tem placas do Mercosul e melhor conservação."}]
},
{
  id:"chile", n:"Chile", en:"Chile", fl:"🇨🇱", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".cl", lang:"Espanhol", scr:"Latino",
  plate:"Branca com letras pretas e faixa lateral; modelo Mercosul mais recente",
  tldr:"Faixa longa e estreita entre os Andes e o Pacífico: deserto ao norte, geleiras ao sul.",
  quick:[
    "Os <b>Andes sempre a leste</b> — o país tem em média 180 km de largura",
    "Delineadores brancos com refletor e infraestrutura em bom estado",
    "Placas de rua e sinalização em espanhol, com padrão organizado e moderno",
    "Norte: deserto do Atacama absoluto. Sul: floresta úmida, lagos e vulcões"
  ],
  m:{
    car:"Cobertura ampla de norte a sul, incluindo a Carretera Austral.",
    bol:"Delineadores brancos com faixa preta e refletor; guard-rails metálicos bem conservados.",
    pol:"Postes de concreto e madeira; fiação organizada nas rodovias.",
    road:"Ruta 5 (Panamericana) atravessa o país; asfalto bom, marcação amarela e branca clara, muitos pedágios.",
    sign:"Direcionais <b>verdes</b> nas rotas nacionais, com numeração 'Ruta 5', 'Ruta 68'. Placas de localidade em branco e preto.",
    arch:"Casas de madeira com telhado de chapa no sul (algumas com telha de madeira), construções de concreto no centro, adobe e bloco no norte.",
    nat:"Atacama (deserto extremo) ao norte, vale central mediterrâneo com vinhas, floresta valdiviana e lagos ao sul, Patagônia e geleiras no extremo sul.",
    extra:"Palmeiras chilenas, araucárias (pinheiro-do-paraná chileno) e o vulcão Villarrica são pistas regionais fortes."
  },
  rgs:[
    {n:"Norte Grande", t:"Atacama, sem vegetação nenhuma, minas de cobre, luz muito forte."},
    {n:"Zona Central", t:"Clima mediterrâneo, vinhas, Santiago, Andes nevados ao fundo."},
    {n:"Sul (Araucanía, Los Lagos)", t:"Verde, chuvoso, araucárias, vulcões, lagos, casas de madeira."},
    {n:"Patagônia/Magalhães", t:"Estepe ventosa, geleiras, poucas estradas, ovelhas."}
  ],
  cf:[{n:"Argentina",t:"AR fica do outro lado dos Andes; use a posição das montanhas e as placas do Mercosul."},
      {n:"Peru (sul)",t:"PE tem tijolo aparente e infraestrutura mais precária."}]
},
{
  id:"argentina", n:"Argentina", en:"Argentina", fl:"🇦🇷", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".com.ar", lang:"Espanhol", scr:"Latino",
  plate:"Padrão <b>Mercosul</b>: branca com faixa azul no topo e 'AR' à esquerda",
  tldr:"Pampa infinita, eucaliptos plantados e placas do Mercosul com 'AR'.",
  quick:[
    "Placa do <b>Mercosul</b> com faixa azul e as letras <b>AR</b>",
    "<b>Pampa</b>: planície absolutamente plana com gado, milho e soja",
    "Fileiras de <b>eucaliptos e álamos</b> plantados como quebra-ventos em fazendas",
    "Postes de concreto e cercas de arame com moirões de madeira ao longo das rotas"
  ],
  m:{
    car:"Cobertura ampla, do altiplano do norte à Terra do Fogo.",
    bol:"Delineadores brancos com faixa preta; guard-rails simples; marcos quilométricos brancos.",
    pol:"Postes de concreto de seção quadrada e de madeira; fiação simples ao longo das rotas.",
    road:"Rotas nacionais (RN) retas e longas com marcação amarela e branca; muitos trechos sem acostamento pavimentado.",
    sign:"Direcionais <b>verdes</b> nas rotas nacionais e azuis em algumas provinciais; placas com o escudo da rota e o número.",
    arch:"Casas baixas de tijolo e reboco com telhado plano ou de chapa; arquitetura europeia em Buenos Aires; estâncias com galpões.",
    nat:"Pampa no centro-leste, Chaco no norte, Andes e altiplano a noroeste, Patagônia estépica ao sul, florestas frias no sudoeste.",
    extra:"<b>Santuários à beira da estrada</b> com bandeiras e garrafas vermelhas (Gauchito Gil) e amarelas (Difunta Correa) são exclusivos da Argentina."
  },
  rgs:[
    {n:"Pampa (BA, Santa Fé, Córdoba)", t:"Plano, agrícola, eucaliptos, gado, cidades em grade."},
    {n:"Noroeste (Salta, Jujuy)", t:"Montanhas coloridas, cactos-candelabro, adobe, altiplano."},
    {n:"Cuyo (Mendoza, San Juan)", t:"Seco, vinhas irrigadas, álamos em fileira, Andes ao fundo."},
    {n:"Patagônia", t:"Estepe ventosa e vazia, arbustos baixos, ovelhas, lagos e florestas na cordilheira."},
    {n:"Litoral/Mesopotâmia", t:"Subtropical, terra vermelha em Misiones, palmeiras, arrozais."}
  ],
  cf:[{n:"Uruguai",t:"UY tem placas Mercosul com 'UY' e paisagem muito parecida na fronteira."},
      {n:"Brasil (sul)",t:"BR é português; a pampa gaúcha é quase idêntica."},
      {n:"Chile",t:"CL fica a oeste dos Andes."}]
},
{
  id:"uruguay", n:"Uruguai", en:"Uruguay", fl:"🇺🇾", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".com.uy", lang:"Espanhol", scr:"Latino",
  plate:"Padrão <b>Mercosul</b> com faixa azul e as letras <b>UY</b>",
  tldr:"Pampa ondulada, palmeiras butiá e placas do Mercosul com UY.",
  quick:[
    "Placa do Mercosul com <b>UY</b> — a diferença mais direta em relação à Argentina",
    "Terreno <b>suavemente ondulado</b> com pastagem e gado, sem montanhas",
    "<b>Palmeiras butiá</b> isoladas em campos abertos no leste do país",
    "Postes de concreto e cercas de arame; muita estrada reta e vazia"
  ],
  m:{
    car:"Cobertura completa e recente.",
    bol:"Delineadores brancos com faixa preta; guard-rails simples.",
    pol:"Postes de concreto de seção quadrada; fiação simples.",
    road:"Rutas numeradas com marcação amarela e branca; asfalto razoável e trânsito baixo.",
    sign:"Direcionais <b>azuis</b> e verdes com o número da ruta; placas de localidade brancas.",
    arch:"Casas baixas de reboco com telhado plano ou de chapa; arquitetura art déco e colonial em Montevidéu e Colonia del Sacramento.",
    nat:"Pradaria ondulada (cuchillas), palmeiras butiá, eucaliptos plantados, praias longas no Atlântico.",
    extra:"O país é pequeno e homogêneo — o mais eficiente é confirmar pela placa e pelo número da ruta."
  },
  cf:[{n:"Argentina",t:"AR tem 'AR' na placa; a pampa é quase idêntica."},
      {n:"Brasil (Rio Grande do Sul)",t:"BR é português; a paisagem da campanha gaúcha é a mesma."}]
},
{
  id:"brazil", n:"Brasil", en:"Brazil", fl:"🇧🇷", rg:"Américas", cov:"Completa", dif:2,
  side:"Direita", dom:".com.br", lang:"Português", scr:"Latino",
  plate:"Padrão <b>Mercosul</b>: branca com faixa azul e 'BR'; antigas em cinza com letras pretas",
  tldr:"Português com placas Mercosul, postes de concreto redondos e terra vermelha no centro-sul.",
  quick:[
    "<b>Português</b> com placa do Mercosul marcada <b>BR</b>",
    "<b>Terra vermelha</b> intensa em SP, PR e MG; solo mais claro no Nordeste",
    "Postes de concreto <b>redondos e cônicos</b>, muito comuns em rodovias estaduais",
    "Placas de rodovia com o padrão 'BR-101', 'SP-330', 'MG-050' em escudo próprio"
  ],
  m:{
    car:"Cobertura muito ampla e atualizada, inclusive em estradas de terra e cidades pequenas.",
    bol:"Delineadores brancos com refletor vermelho; defensas metálicas (guard-rail) nas rodovias federais e concessionadas.",
    pol:"Postes de concreto de seção circular e cônica, além de postes duplo-T; fiação aérea densa nas cidades, com muitos cabos de telecom pendurados.",
    road:"Linha central <b>amarela</b> e bordas brancas; rodovias concessionadas com asfalto excelente e sinalização moderna, contrastando com rodovias federais degradadas em algumas regiões.",
    sign:"Direcionais <b>verdes</b> nas rodovias e azuis em serviços; placas de identificação com o escudo 'BR' (federais) ou a sigla do estado (estaduais). Marcos quilométricos brancos.",
    arch:"Casas de alvenaria com telha cerâmica e muros altos com portão; sobrados coloniais coloridos em cidades históricas; prédios altos nas capitais.",
    nat:"Mata Atlântica no litoral sudeste, Cerrado no Planalto Central, Caatinga no sertão nordestino, Amazônia ao norte, Pampa no extremo sul, Pantanal no centro-oeste.",
    extra:"A <b>sigla do estado na placa da rodovia</b> (SP, MG, BA, PR, RS) é a forma mais rápida e precisa de localizar a região."
  },
  rgs:[
    {n:"Sudeste (SP, MG, RJ, ES)", t:"Terra vermelha, cana e café, morros da Mata Atlântica, rodovias concessionadas de alta qualidade."},
    {n:"Sul (PR, SC, RS)", t:"Araucárias no planalto, arquitetura de colonização alemã e italiana, pampa gaúcho no RS, clima temperado."},
    {n:"Centro-Oeste (GO, MT, MS, DF)", t:"Cerrado com árvores retorcidas, soja em escala industrial, terra vermelha, Brasília modernista."},
    {n:"Nordeste (BA, PE, CE e demais)", t:"Caatinga seca com mandacarus e umbuzeiros no sertão, coqueiros e canaviais no litoral, casas de alvenaria simples."},
    {n:"Norte (AM, PA, RO, AC, AP, RR, TO)", t:"Floresta amazônica densa, rios largos, estradas de terra, palafitas e casas de madeira."}
  ],
  cf:[{n:"Argentina/Uruguai",t:"A língua resolve na hora; a paisagem do pampa é comum aos três."},
      {n:"Portugal",t:"Mesma língua, mas o vocabulário difere e a vegetação é totalmente distinta."},
      {n:"Paraguai",t:"PY tem placas Mercosul com 'PY' e é bem menos desenvolvido em infraestrutura."}]
},
{
  id:"dominican-republic", n:"República Dominicana", en:"Dominican Republic", fl:"🇩🇴", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".do", lang:"Espanhol", scr:"Latino",
  plate:"Branca com letras pretas e faixa lateral colorida por categoria",
  tldr:"Caribe hispânico: casas de madeira coloridas, motoconchos e vegetação tropical.",
  quick:[
    "Casas de <b>madeira pintadas em cores vivas</b> com varanda e telhado de zinco",
    "<b>Motoconchos</b> (mototáxis) em grande quantidade",
    "Vegetação tropical com coqueiros, mangueiras e canaviais",
    "Espanhol nas placas, em contexto insular caribenho"
  ],
  m:{
    car:"Cobertura ampla da ilha (lado dominicano).",
    bol:"Delineadores brancos e barreiras metálicas nas autopistas.",
    pol:"Postes de concreto e madeira; fiação aérea muito emaranhada.",
    road:"Autopistas modernas (Duarte, del Coral) com marcação clara; estradas rurais estreitas e esburacadas.",
    sign:"Placas em espanhol com fundo verde; muitos colmados (mercearias) pintados com propaganda de cerveja.",
    arch:"Casas de madeira coloridas no interior, blocos de concreto nas cidades, zona colonial espanhola em Santo Domingo.",
    nat:"Montanhas altas no centro (Cordillera Central), planícies de cana, praias de coqueiros, zona semiárida a sudoeste.",
    extra:"O contraste com o Haiti (muito mais desmatado) é visível perto da fronteira."
  },
  cf:[{n:"Porto Rico",t:"PR usa sinalização americana e placas dos EUA."},
      {n:"Cuba",t:"Sem cobertura oficial ampla."}]
},
{
  id:"puerto-rico", n:"Porto Rico", en:"Puerto Rico", fl:"🇵🇷", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".pr", lang:"Espanhol e Inglês", scr:"Latino",
  plate:"Placa no formato dos EUA com 'Puerto Rico' escrito",
  tldr:"Sinalização americana com textos em espanhol e distâncias em km — combinação única.",
  quick:[
    "<b>Sinalização norte-americana</b> (losangos amarelos, escudos de rodovia) com texto em <b>espanhol</b>",
    "Distâncias em <b>quilômetros</b> mas limites de velocidade em <b>milhas por hora</b>",
    "Postes de madeira e concreto no padrão americano, com muita fiação",
    "Vegetação tropical densa, com floresta em El Yunque e coqueiros no litoral"
  ],
  m:{
    car:"Cobertura completa da ilha.",
    bol:"Delineadores e guard-rails no padrão dos EUA.",
    pol:"Postes de madeira com transformadores cinza, iguais aos americanos, além de postes de concreto reforçado.",
    road:"Marcação com linha central amarela; autopistas de pedágio modernas.",
    sign:"Placas verdes com nomes em espanhol e a palavra 'Salida'; escudos de rodovia no estilo americano.",
    arch:"Casas de concreto com telhado plano e grades; arquitetura colonial espanhola em San Juan.",
    nat:"Montanhas verdes no centro (Cordillera Central), floresta tropical, litoral com coqueiros e mangues.",
    extra:"Bandeiras de Porto Rico e dos EUA aparecem lado a lado com frequência."
  },
  cf:[{n:"República Dominicana",t:"DO não usa sinalização americana."},
      {n:"Flórida",t:"Também bilíngue, mas com placas de veículo da Flórida e vegetação diferente."}]
},
{
  id:"curacao", n:"Curaçao e Caribe Neerlandês", en:"Curaçao", fl:"🇨🇼", rg:"Américas", cov:"Completa", dif:3,
  side:"Direita", dom:".cw", lang:"Papiamento, Neerlandês, Inglês", scr:"Latino",
  plate:"Amarela com letras pretas e o nome da ilha",
  tldr:"Ilha árida com casas coloniais neerlandesas coloridas e cactos junto ao mar do Caribe.",
  quick:[
    "Arquitetura <b>colonial neerlandesa</b> pintada em cores vivas com frontões curvos",
    "Vegetação <b>árida</b>: cactos, arbustos espinhosos e divi-divi tortos pelo vento",
    "<b>Papiamento</b> nas placas e no comércio, misturado com neerlandês",
    "Ilha pequena, plana e seca, cercada de mar azul-turquesa"
  ],
  m:{
    car:"Cobertura completa de Curaçao; Aruba e Bonaire também têm cobertura.",
    bol:"Delineadores brancos e barreiras metálicas simples.",
    pol:"Postes de concreto e madeira; fiação aérea.",
    road:"Asfalto razoável, com rotatórias e marcação branca no estilo europeu.",
    sign:"Placas em neerlandês e inglês; nomes de rua com 'weg' e 'straat'.",
    arch:"Casas coloniais neerlandesas em amarelo, azul e rosa com detalhes brancos; construções modernas simples nos bairros.",
    nat:"Clima semiárido com cactos-colunares, aloe, árvore divi-divi inclinada pelo vento constante.",
    extra:"O contraste entre arquitetura holandesa e vegetação de deserto é exclusivo destas ilhas."
  },
  cf:[{n:"Aruba/Bonaire",t:"Muito parecidas; a placa e os nomes de lugar ajudam."},
      {n:"Países Baixos",t:"O clima árido e o mar do Caribe resolvem."}]
},
{
  id:"bermuda", n:"Bermudas", en:"Bermuda", fl:"🇧🇲", rg:"Américas", cov:"Completa", dif:2,
  side:"Esquerda", dom:".bm", lang:"Inglês", scr:"Latino",
  plate:"Branca com números pretos e o nome 'Bermuda'",
  tldr:"Telhados brancos escalonados de calcário, casas em tons pastel e direção pela esquerda.",
  quick:[
    "<b>Telhados brancos escalonados</b> de calcário em degraus — projetados para captar água da chuva, exclusivos das Bermudas",
    "Casas em <b>tons pastel</b> (rosa, azul, amarelo) com telhado branco",
    "Direção pela <b>esquerda</b>, limite máximo de 35 km/h em toda a ilha",
    "Muitas motonetas e poucos carros; cedros-das-bermudas e hibiscos"
  ],
  m:{
    car:"Cobertura completa do arquipélago.",
    bol:"Muros de calcário e barreiras simples; estradas muito estreitas.",
    pol:"Postes de madeira e concreto com fiação aérea.",
    road:"Estradas estreitíssimas e sinuosas com marcação branca e amarela.",
    sign:"Sinalização britânica em inglês; placas de aviso triangulares.",
    arch:"Casas de calcário branco pintadas em pastel, com telhado branco em degraus e chaminés.",
    nat:"Vegetação subtropical, palmeiras, cedros, praias de areia rosada, mar turquesa.",
    extra:"É o Atlântico Norte, não o Caribe — o clima é mais ameno e há mais vegetação temperada."
  },
  cf:[{n:"Caribe",t:"Os telhados brancos em degraus não existem em nenhuma ilha caribenha."},
      {n:"Bahamas",t:"Cobertura muito limitada."}]
}
]);
