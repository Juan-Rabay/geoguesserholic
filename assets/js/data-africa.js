window.GG = window.GG || {};
GG.countries = (GG.countries || []).concat([
{
  id:"south-africa", n:"África do Sul", en:"South Africa", fl:"🇿🇦", rg:"África", cov:"Completa", dif:2,
  side:"Esquerda", dom:".co.za", lang:"Inglês, Afrikaans, Zulu, Xhosa e mais 7", scr:"Latino",
  plate:"Branca com letras pretas; o sufixo indica a província (GP Gauteng, WC Cabo Ocidental, KZN)",
  tldr:"Direção pela esquerda, cercas elétricas em toda casa e savana com acácias de copa chata.",
  quick:[
    "Direção pela <b>esquerda</b> com sinalização em inglês e placas de aviso amarelas em losango",
    "<b>Muros altos com cerca elétrica</b> e portões automáticos em bairros residenciais",
    "Acácias de <b>copa achatada</b> e capim dourado da savana (highveld)",
    "Postes de concreto com braço curvo e luminária laranja; muitas torres de alta tensão"
  ],
  m:{
    car:"Cobertura ampla e recente, incluindo estradas rurais e parques nacionais.",
    bol:"Delineadores brancos com refletor vermelho à esquerda e branco à direita; barreiras metálicas nas rodovias N.",
    pol:"Postes de concreto e madeira; torres de transmissão frequentes. Antenas e caixas d'água em fazendas.",
    road:"Marcação <b>branca com bordas amarelas</b> em muitas rodovias — a linha de acostamento amarela é uma pista útil. Ombro largo usado para dar passagem.",
    sign:"Direcionais <b>verdes</b> nas rodovias nacionais (N) e azuis/brancas nas regionais (R). Placas de aviso <b>amarelas em losango</b>, no padrão norte-americano.",
    arch:"Casas suburbanas com telhado de telha e muro alto; townships com casas de chapa metálica coloridas; fazendas em estilo Cape Dutch com frontão branco curvo no oeste.",
    nat:"Savana com acácias no norte e leste, fynbos e vinhedos no Cabo, Karoo semiárido no centro, Drakensberg montanhoso a leste.",
    extra:"Placas em <b>afrikaans</b> ('Straat', 'Weg', 'Pad') indicam Cabo Ocidental e Estado Livre."
  },
  rgs:[
    {n:"Cabo Ocidental", t:"Montanhas, vinhedos, fynbos, arquitetura Cape Dutch, afrikaans."},
    {n:"Gauteng (Joanesburgo/Pretória)", t:"Urbano, highveld com capim, minas e torres de rejeito."},
    {n:"KwaZulu-Natal", t:"Subtropical, cana-de-açúcar, zulu nas placas, mais verde."},
    {n:"Karoo (centro)", t:"Semiárido, vazio, arbustos baixos, moinhos de vento metálicos."}
  ],
  cf:[{n:"Namíbia",t:"Sem cobertura oficial ampla; mais deserto."},
      {n:"Botsuana",t:"BW é mais plano e vazio, com savana de areia."},
      {n:"Austrália",t:"Também esquerda e savana; a vegetação e as placas resolvem."}]
},
{
  id:"botswana", n:"Botsuana", en:"Botswana", fl:"🇧🇼", rg:"África", cov:"Completa", dif:3,
  side:"Esquerda", dom:".bw", lang:"Inglês e Setsuana", scr:"Latino",
  plate:"Branca na frente e <b>amarela atrás</b>, com letras pretas e prefixo 'B'",
  tldr:"Savana plana e arenosa do Kalahari, com estradas retas e vazias e muitos animais.",
  quick:[
    "Terreno <b>muito plano</b> com areia clara e arbustos espinhosos espalhados",
    "Estradas retíssimas e vazias, com <b>gado e burros soltos</b> na pista",
    "Placa traseira <b>amarela</b> com prefixo B; direção pela esquerda",
    "Cercas de arame farpado longuíssimas ao longo das rodovias"
  ],
  m:{
    car:"Cobertura das rodovias principais e de áreas de safári.",
    bol:"Poucos delineadores; postes brancos com refletor em cruzamentos.",
    pol:"Postes de madeira e concreto; linhas de transmissão longas cruzando o mato.",
    road:"Asfalto razoável nas rodovias A; muita estrada de areia no interior. Marcação branca com bordas amarelas em trechos.",
    sign:"Placas em inglês; avisos de animais selvagens (elefantes, antílopes) em losango amarelo.",
    arch:"Casas de tijolo com telhado de chapa; construções tradicionais circulares com telhado de palha (rondavel) em vilas.",
    nat:"Kalahari arenoso no centro e sul, delta do Okavango a noroeste, savana com mopane e baobás.",
    extra:"A grande quantidade de <b>gado na estrada</b> e cercas intermináveis é o marcador mais consistente."
  },
  cf:[{n:"África do Sul",t:"ZA tem muito mais infraestrutura, muros e cidades."},
      {n:"Namíbia",t:"Sem cobertura oficial ampla."},
      {n:"Quênia",t:"KE tem carro Google escuro e paisagem mais verde e montanhosa."}]
},
{
  id:"eswatini", n:"Essuatíni", en:"Eswatini", fl:"🇸🇿", rg:"África", cov:"Completa", dif:4,
  side:"Esquerda", dom:".sz", lang:"Inglês e Suázi", scr:"Latino",
  plate:"Branca com letras pretas e prefixo <b>SD</b>",
  tldr:"Reino minúsculo cercado pela África do Sul, com colinas verdes e plantações de cana.",
  quick:[
    "Placas com prefixo <b>SD</b> — sinal direto de Essuatíni",
    "Colinas verdes onduladas com <b>plantações de cana-de-açúcar e eucalipto</b>",
    "Direção pela esquerda, sinalização em inglês, infraestrutura parecida com a sul-africana",
    "Cercado por todos os lados pela África do Sul, exceto uma fronteira com Moçambique"
  ],
  m:{
    car:"Cobertura das estradas principais.",
    bol:"Delineadores brancos com refletor; barreiras metálicas em curvas.",
    pol:"Postes de concreto e madeira no estilo sul-africano.",
    road:"Marcação branca com bordas amarelas; rodovias MR numeradas.",
    sign:"Placas em inglês; losangos amarelos de aviso.",
    arch:"Casas de tijolo e chapa; construções tradicionais em forma de colmeia com palha; mercados à beira da estrada.",
    nat:"Highveld verde a oeste, lowveld quente e seco a leste, montanhas florestadas com pinheiros plantados.",
    extra:"Menos infraestrutura e mais vegetação subtropical do que a África do Sul vizinha."
  },
  cf:[{n:"África do Sul",t:"Praticamente idêntico; a placa SD e o tamanho do território resolvem."},
      {n:"Lesoto",t:"LS é muito mais alto e montanhoso, sem árvores."}]
},
{
  id:"lesotho", n:"Lesoto", en:"Lesotho", fl:"🇱🇸", rg:"África", cov:"Completa", dif:3,
  side:"Esquerda", dom:".ls", lang:"Sesoto e Inglês", scr:"Latino",
  plate:"Branca com letras pretas e prefixo de distrito (A, B, C...)",
  tldr:"O 'Reino no Céu': montanhas altas e peladas, sem árvores, com pastores de cobertor.",
  quick:[
    "Montanhas altíssimas <b>sem árvores</b>, cobertas só de capim curto",
    "Pastores usando <b>cobertores tradicionais</b> e chapéu cônico (mokorotlo)",
    "Casas circulares de pedra com telhado de palha em encostas",
    "País <b>inteiramente cercado</b> pela África do Sul, todo acima de 1.400 m"
  ],
  m:{
    car:"Cobertura das estradas principais; muitas áreas remotas sem cobertura.",
    bol:"Poucos delineadores; guard-rails escassos em estradas de montanha íngremes.",
    pol:"Postes de madeira; eletrificação limitada fora das cidades.",
    road:"Estradas de montanha sinuosas, com trechos de terra; passagens muito altas (Sani Pass).",
    sign:"Placas em inglês; sinalização escassa.",
    arch:"Rondavels de pedra com telhado cônico de palha; construções de bloco com chapa nas cidades.",
    nat:"Planalto de altitude com capim, erosão em ravinas, neve no inverno, quase nenhuma árvore nativa.",
    extra:"Se você está numa montanha africana pelada com pastores de cobertor, é Lesoto com alta confiança."
  },
  cf:[{n:"África do Sul (Drakensberg)",t:"Paisagem parecida na fronteira; LS é mais pobre e sem asfalto em muitos trechos."},
      {n:"Essuatíni",t:"SZ é mais verde, mais baixo e com plantações."}]
},
{
  id:"kenya", n:"Quênia", en:"Kenya", fl:"🇰🇪", rg:"África", cov:"Completa", dif:2,
  side:"Esquerda", dom:".co.ke", lang:"Suaíli e Inglês", scr:"Latino",
  plate:"Branca na frente e <b>amarela atrás</b>, com letras pretas e prefixo 'K'",
  tldr:"Carro Google escuro com snorkel, terra vermelha e matatus coloridos.",
  quick:[
    "O carro da cobertura costuma ser <b>escuro</b>, com rack e <b>snorkel</b> visível — meta clássica do Quênia",
    "<b>Terra vermelha</b> intensa nos acostamentos e estradas secundárias",
    "<b>Matatus</b>: vans de transporte muito decoradas com grafite e adesivos",
    "Suaíli em placas e comércios ('Duka', 'Hoteli', 'Karibu'); direção pela esquerda"
  ],
  m:{
    car:"Meta de carro forte: veículo de cor escura com equipamento de expedição (rack e snorkel), aparecendo na parte inferior da imagem em boa parte da cobertura.",
    bol:"Poucos delineadores; barreiras de concreto e quebra-molas altíssimos ('bumps') sinalizados.",
    pol:"Postes de concreto e madeira; fiação simples. Torres de telefonia frequentes.",
    road:"Rodovias asfaltadas com marcação branca e amarela; muitas estradas de terra vermelha. Quebra-molas em toda entrada de vila.",
    sign:"Placas em inglês; losangos amarelos de aviso; muitos outdoors de operadoras de celular pintados nas fachadas.",
    arch:"Lojas de concreto de um andar pintadas com propaganda (verde Safaricom, vermelho Airtel); casas de barro com telhado de chapa; prédios modernos em Nairóbi.",
    nat:"Savana com acácias, Grande Vale do Rift, montanhas verdes no centro (Monte Quênia), chá em terraços, semideserto ao norte.",
    extra:"As <b>fachadas comerciais pintadas em verde ou vermelho</b> pelas operadoras são muito características da África Oriental."
  },
  cf:[{n:"Uganda",t:"UG é mais verde e úmido, com bananeiras; placas diferentes."},
      {n:"Tanzânia",t:"Cobertura limitada."},
      {n:"Ruanda",t:"RW é muito mais limpo, organizado e montanhoso, e dirige pela direita."}]
},
{
  id:"uganda", n:"Uganda", en:"Uganda", fl:"🇺🇬", rg:"África", cov:"Completa", dif:3,
  side:"Esquerda", dom:".ug", lang:"Inglês e Suaíli", scr:"Latino",
  plate:"Branca na frente e <b>amarela atrás</b>, com prefixo 'U' e letras pretas",
  tldr:"Verde intenso e úmido, bananeiras por toda parte e motos-táxi (boda-boda).",
  quick:[
    "Vegetação <b>muito verde e densa</b>, com <b>bananeiras</b> em quase todo quintal",
    "<b>Boda-bodas</b> (motos-táxi) em grande quantidade",
    "Terra vermelha e placas de veículo com prefixo <b>U</b>",
    "Direção pela esquerda; inglês nas placas"
  ],
  m:{
    car:"Cobertura das estradas principais e cidades; qualidade variável.",
    bol:"Poucos delineadores; quebra-molas frequentes.",
    pol:"Postes de concreto e madeira; fiação simples.",
    road:"Asfalto nas rodovias principais e muita terra vermelha no interior; marcação desgastada.",
    sign:"Placas em inglês; avisos de quebra-molas e travessia de pedestres.",
    arch:"Lojas de tijolo e concreto pintadas com propaganda de operadoras (amarelo MTN, vermelho Airtel); casas de tijolo cru com telhado de chapa.",
    nat:"Muito verde: bananeiras, papiro em áreas alagadas, floresta tropical a oeste, savana ao norte, Lago Vitória ao sul.",
    extra:"O <b>amarelo da MTN</b> pintado em fachadas é um marcador visual forte de Uganda."
  },
  cf:[{n:"Quênia",t:"KE é mais seco, com savana aberta e carro escuro com snorkel."},
      {n:"Ruanda",t:"RW dirige pela direita e é mais ordenado."}]
},
{
  id:"rwanda", n:"Ruanda", en:"Rwanda", fl:"🇷🇼", rg:"África", cov:"Completa", dif:2,
  side:"Direita", dom:".rw", lang:"Quiniaruanda, Francês, Inglês", scr:"Latino",
  plate:"Branca com letras pretas e prefixo <b>RA</b>",
  tldr:"'País das Mil Colinas': terraços agrícolas em morros, ruas limpas e direção pela direita.",
  quick:[
    "Direção pela <b>direita</b>, ao contrário de Quênia, Uganda e Tanzânia",
    "Colinas <b>totalmente terraceadas</b> e cultivadas, sem espaço livre",
    "Ruas notavelmente <b>limpas e organizadas</b>, com meio-fio pintado e calçadas",
    "Sacolas plásticas são proibidas no país; muitos ciclistas transportando carga"
  ],
  m:{
    car:"Cobertura das estradas principais e de Kigali.",
    bol:"Meio-fios pintados de preto e branco; barreiras metálicas em curvas de montanha.",
    pol:"Postes de concreto; iluminação pública em bom estado nas rodovias principais.",
    road:"Asfalto bem conservado nas rodovias nacionais, com marcação branca clara; muitas curvas de encosta.",
    sign:"Placas em inglês e francês; sinalização moderna e bem mantida.",
    arch:"Casas de tijolo com telhado de telha vermelha ou chapa; construções modernas em Kigali; muitas igrejas.",
    nat:"Colinas verdes cultivadas, chá e café em terraços, vulcões Virunga ao norte, floresta de Nyungwe a sudoeste.",
    extra:"A combinação de <b>montanha densamente cultivada + limpeza + direção pela direita</b> é praticamente exclusiva de Ruanda na África Oriental."
  },
  cf:[{n:"Burundi",t:"Paisagem semelhante, mas sem cobertura oficial ampla."},
      {n:"Uganda",t:"UG dirige pela esquerda e é menos organizado."}]
},
{
  id:"ghana", n:"Gana", en:"Ghana", fl:"🇬🇭", rg:"África", cov:"Completa", dif:3,
  side:"Direita", dom:".com.gh", lang:"Inglês", scr:"Latino",
  plate:"Branca com letras pretas; o sufixo indica o <b>ano</b> de registro (ex.: GT-1234-22)",
  tldr:"África Ocidental anglófona: inglês, direção pela direita, terra vermelha e comércio de rua.",
  quick:[
    "<b>Inglês</b> nas placas com direção pela <b>direita</b> — separa Gana da Nigéria (também direita) pelo contexto",
    "Placas de veículo terminando com o <b>ano</b> em dois dígitos",
    "Comércio informal intenso à beira da estrada, com barracas de madeira e guarda-sóis",
    "Terra vermelha-alaranjada e vegetação tropical densa ao sul"
  ],
  m:{
    car:"Cobertura de estradas principais e cidades; em boa parte do material o veículo aparece com rack e a imagem tem tonalidade quente.",
    bol:"Poucos delineadores; quebra-molas altos e frequentes com listras brancas.",
    pol:"Postes de concreto e madeira; fiação aérea simples.",
    road:"Rodovias N e R asfaltadas com marcação branca e amarela; muita estrada de laterita vermelha no interior.",
    sign:"Placas em inglês; sinalização de aviso em triângulo com borda vermelha (padrão europeu), diferente do losango amarelo sul-africano.",
    arch:"Lojas de concreto de um andar com fachadas pintadas de propaganda; casas de bloco com telhado de chapa ondulada; mesquitas no norte.",
    nat:"Floresta tropical e cacau ao sul, savana seca ao norte, Lago Volta no centro-leste.",
    extra:"Slogans religiosos pintados em lojas e veículos ('God is Great', 'By His Grace') são muito comuns."
  },
  cf:[{n:"Nigéria",t:"NG é muito mais populosa e caótica, com placas de estado escritas na chapa."},
      {n:"Senegal",t:"SN é francófono e mais seco."}]
},
{
  id:"nigeria", n:"Nigéria", en:"Nigeria", fl:"🇳🇬", rg:"África", cov:"Completa", dif:3,
  side:"Direita", dom:".com.ng", lang:"Inglês", scr:"Latino",
  plate:"Branca com letras pretas, faixa verde no topo e o <b>nome do estado</b> escrito na placa",
  tldr:"O país mais populoso da África: trânsito denso, poeira e placas com nome do estado.",
  quick:[
    "Placas de veículo trazem o <b>nome do estado</b> por extenso (Lagos, Kano, Ogun) e um slogan",
    "Densidade humana e comercial muito alta, com trânsito intenso e caótico",
    "Carro de cobertura frequentemente <b>empoeirado</b>, com a imagem em tom amarelado",
    "Inglês nas placas; direção pela direita"
  ],
  m:{
    car:"Boa parte da cobertura mostra um veículo claro e sujo de poeira, com rack, e imagens com forte tom quente — especialmente no norte.",
    bol:"Poucos delineadores; barreiras de concreto e quebra-molas improvisados.",
    pol:"Postes de concreto e madeira; fiação aérea muito emaranhada nas cidades. Geradores particulares visíveis em frente a lojas.",
    road:"Rodovias federais (A) asfaltadas mas com buracos; muitas estradas de laterita vermelha.",
    sign:"Placas em inglês; muitos outdoors religiosos e de igrejas pentecostais.",
    arch:"Prédios de bloco de concreto com telhado de chapa; portões de metal; mesquitas com minarete no norte, igrejas grandes no sul.",
    nat:"Floresta e delta do Níger ao sul, savana no centro, Sahel semiárido ao norte (Kano, Sokoto).",
    extra:"O contraste norte/sul é enorme: o norte é muçulmano e seco, o sul é cristão e tropical."
  },
  cf:[{n:"Gana",t:"GH é menos denso e as placas terminam com o ano."},
      {n:"Quênia",t:"KE dirige pela esquerda."}]
},
{
  id:"senegal", n:"Senegal", en:"Senegal", fl:"🇸🇳", rg:"África", cov:"Completa", dif:3,
  side:"Direita", dom:".sn", lang:"Francês e Wolof", scr:"Latino",
  plate:"Branca com números pretos; placas com formato francês simplificado",
  tldr:"Sahel francófono: baobás, areia clara, carroças puxadas por cavalo e mesquitas.",
  quick:[
    "<b>Francês</b> nas placas em ambiente de savana seca e areia clara",
    "<b>Baobás</b> isolados com tronco enorme — árvore-símbolo do país",
    "Carroças puxadas por <b>cavalos e burros</b> circulando nas estradas",
    "Mesquitas com minaretes e cúpulas verdes em praticamente toda vila"
  ],
  m:{
    car:"Cobertura das rodovias principais e de Dacar; em várias sequências o veículo aparece com uma <b>antena longa</b> visível.",
    bol:"Poucos delineadores; marcos de concreto pintados em branco e preto.",
    pol:"Postes de concreto e madeira; fiação simples.",
    road:"Asfalto razoável nas nacionais (N1, N2); muita areia e terra fora delas.",
    sign:"Placas em francês; sinalização escassa fora das rodovias.",
    arch:"Casas de bloco com telhado plano ou de chapa; mesquitas coloridas; construções tradicionais de barro em áreas rurais.",
    nat:"Sahel com acácias e baobás, areia clara, mangues no delta do Saloum, mais verde na Casamansa ao sul.",
    extra:"Ônibus e vans pintados com cores fortes e motivos religiosos islâmicos (car rapide) em Dacar."
  },
  cf:[{n:"Gâmbia",t:"Cobertura muito limitada; país encravado no Senegal."},
      {n:"Mali/Mauritânia",t:"Sem cobertura oficial ampla."},
      {n:"Tunísia",t:"TN é mediterrânea, com árabe nas placas."}]
},
{
  id:"tunisia", n:"Tunísia", en:"Tunisia", fl:"🇹🇳", rg:"África", cov:"Completa", dif:3,
  side:"Direita", dom:".tn", lang:"Árabe e Francês", scr:"Árabe e Latino",
  plate:"Branca com números pretos e a palavra <b>تونس</b> entre dois grupos de números",
  tldr:"Norte da África mediterrâneo: árabe e francês juntos, oliveiras e casas brancas com azul.",
  quick:[
    "Sinalização <b>bilíngue árabe/francês</b> em fundo branco ou azul",
    "Casas caiadas de <b>branco com portas e janelas azuis</b>",
    "Olivais extensos no centro e norte; deserto do Saara ao sul",
    "Placas de veículo com a palavra árabe 'تونس' no meio dos números"
  ],
  m:{
    car:"Cobertura ampla, do norte mediterrâneo até o sul saariano.",
    bol:"Delineadores brancos com faixa preta ou vermelha; marcos de pedra pintados.",
    pol:"Postes de concreto quadrados; fiação simples.",
    road:"Asfalto razoável; autoestrada A1 no litoral. Marcação branca e amarela.",
    sign:"Direcionais <b>azuis</b> nas autoestradas e brancas nas locais, sempre em árabe e francês.",
    arch:"Casas brancas com detalhes azuis, cúpulas caiadas, mesquitas com minarete <b>quadrado</b> (estilo magrebino), ruínas romanas.",
    nat:"Costa mediterrânea com pinheiros, olivais no Sahel tunisiano, chotts (lagos salgados) e dunas ao sul.",
    extra:"O minarete <b>quadrado</b> distingue o Magreb do Oriente Médio, onde predomina o minarete cilíndrico."
  },
  cf:[{n:"Marrocos/Argélia",t:"Sem cobertura oficial ampla; visualmente parecidos."},
      {n:"Egito",t:"EG tem cobertura limitada e sinalização diferente."},
      {n:"Jordânia",t:"JO tem minaretes cilíndricos e nenhum francês."}]
},
{
  id:"egypt", n:"Egito", en:"Egypt", fl:"🇪🇬", rg:"África", cov:"Parcial", dif:3,
  side:"Direita", dom:".eg", lang:"Árabe", scr:"Árabe",
  plate:"Branca com <b>numerais árabes orientais</b> (٣٤٥) e letras árabes",
  tldr:"Cobertura limitada, concentrada em sítios arqueológicos, Cairo e trechos do Nilo.",
  quick:[
    "<b>Numerais árabes orientais</b> (٠١٢٣) nas placas de veículo — diferente do Magreb",
    "Contraste absoluto entre a <b>faixa verde do Nilo</b> e o deserto imediatamente ao lado",
    "Prédios de tijolo vermelho aparente e inacabados, com ferragem exposta no topo",
    "Cobertura oficial escassa: boa parte do que se joga são photospheres"
  ],
  m:{
    car:"Cobertura oficial limitada; muitas áreas cobertas apenas por fotos 360 de usuários e por trekker em sítios arqueológicos.",
    bol:"Poucos delineadores; barreiras de concreto.",
    pol:"Postes de concreto e metal; fiação aérea densa nas cidades.",
    road:"Asfalto irregular; quebra-molas frequentes; poeira constante.",
    sign:"Placas em árabe, algumas com inglês em rotas turísticas.",
    arch:"Prédios de tijolo vermelho de 4 a 8 andares sem acabamento; mesquitas com minarete fino; monumentos faraônicos.",
    nat:"Deserto em 95% do território; vale e delta do Nilo intensamente cultivados com palmeiras-tamareiras.",
    extra:"Palmeiras-tamareiras alinhadas junto a canais de irrigação são a assinatura do vale do Nilo."
  },
  cf:[{n:"Tunísia",t:"TN usa numerais ocidentais e tem francês nas placas."},
      {n:"Jordânia",t:"JO tem paisagem parecida mas cobertura oficial completa."}]
},
{
  id:"madagascar", n:"Madagascar", en:"Madagascar", fl:"🇲🇬", rg:"África", cov:"Parcial", dif:3,
  side:"Direita", dom:".mg", lang:"Malgaxe e Francês", scr:"Latino",
  plate:"Branca com números pretos, formato francês",
  tldr:"Terra vermelha intensa, arrozais em terraços e casas de tijolo de dois andares no planalto.",
  quick:[
    "<b>Terra vermelha</b> extremamente intensa (a 'ilha vermelha') em estradas e encostas erodidas",
    "Casas de <b>tijolo vermelho de dois andares</b> com varanda e telhado de telha no planalto central",
    "Malgaxe nas placas: palavras longas com muitos 'a' e 'o' ('Antananarivo', 'Fianarantsoa')",
    "Arrozais em terraços verdes contrastando com o solo vermelho"
  ],
  m:{
    car:"Cobertura das rodovias nacionais (RN) e das cidades maiores.",
    bol:"Poucos delineadores; estradas sem proteção.",
    pol:"Postes de madeira e concreto; eletrificação limitada.",
    road:"Rodovias nacionais estreitas e esburacadas; muita estrada de terra vermelha.",
    sign:"Placas em francês e malgaxe; sinalização escassa.",
    arch:"Casas altas e estreitas de tijolo com varanda no Planalto Central; palafitas de bambu e palha na costa.",
    nat:"Planalto central desmatado e erodido, floresta tropical a leste, savana com baobás a oeste, espinhal seco ao sul.",
    extra:"Zebus (bois com corcova) puxando carroças são muito comuns nas estradas."
  },
  cf:[{n:"Reunião",t:"RE é território francês, com infraestrutura europeia impecável."},
      {n:"África continental",t:"A arquitetura de tijolo do planalto malgaxe não existe no continente."}]
},
{
  id:"reunion", n:"Reunião", en:"Réunion", fl:"🇷🇪", rg:"África", cov:"Completa", dif:2,
  side:"Direita", dom:".re", lang:"Francês", scr:"Latino",
  plate:"Branca com faixa UE 'F' e o número <b>974</b> à direita",
  tldr:"Departamento francês tropical no Índico: infraestrutura europeia com vulcão e cana.",
  quick:[
    "Placa francesa com o departamento <b>974</b> à direita",
    "Infraestrutura <b>europeia impecável</b> em cenário tropical vulcânico",
    "Plantações de <b>cana-de-açúcar</b> em encostas íngremes",
    "Circos vulcânicos com paredões verticais e o Piton de la Fournaise ativo"
  ],
  m:{
    car:"Cobertura completa da ilha.",
    bol:"Delineadores no padrão francês (branco com faixa vermelha).",
    pol:"Postes de concreto franceses; fiação organizada.",
    road:"Asfalto excelente, com a Route du Littoral e muitos túneis e viadutos.",
    sign:"Sinalização francesa idêntica à metropolitana, em francês.",
    arch:"Casas créoles coloridas com varanda rendilhada; construções modernas francesas.",
    nat:"Vulcão ativo, campos de lava, floresta tropical de altitude, cana-de-açúcar, cascatas.",
    extra:"Se parece França mas tem vegetação tropical e vulcão, é Reunião (ou Guadalupe/Martinica, no Caribe)."
  },
  cf:[{n:"Maurício",t:"MU dirige pela esquerda e usa inglês."},
      {n:"Guadalupe/Martinica",t:"Também francesas e tropicais, mas no Caribe e com números 971/972."}]
}
]);
