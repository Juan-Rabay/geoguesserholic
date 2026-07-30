/* Pistas vivas: frota de veículos, flora indicadora e animais.
   Mescladas por id nos países definidos nos arquivos data-*.js. */
window.GG = window.GG || {};
GG.extra = Object.assign(GG.extra || {}, {

/* ---------------- EUROPA ---------------- */
albania:{
  cars:"Proporção altíssima de <b>Mercedes-Benz antigos</b>, sobretudo Classe E W124 e W210 — é quase um clichê do país. Muitas vans Ford Transit e carros usados importados da Alemanha e da Itália.",
  flora:"Oliveiras e ciprestes na faixa costeira; carvalhos e faias no interior montanhoso. Encostas muito erodidas, com arbustos baixos e vegetação rala.",
  fauna:"Rebanhos de ovelhas e cabras conduzidos a pé pela estrada, burros de carga e cães de guarda soltos são cena comum no interior."
},
andorra:{
  cars:"Frota europeia recente, com muitos veículos de placa espanhola e francesa por causa do comércio de fronteira. Motos e utilitários 4x4 de montanha.",
  flora:"Pinheiro-negro e pinheiro-silvestre até a linha das árvores, rododendro alpino e prados de altitude acima dela.",
  fauna:"Vacas e cavalos em pasto alto no verão; camurças (isards) nas encostas rochosas."
},
austria:{
  cars:"VW, Škoda e Audi dominam. Nos vales, tratores <b>Steyr</b> e Lindner aparecem com frequência, quase sempre bem conservados.",
  flora:"Abeto e lariço nas encostas, prados floridos cortados para feno, macieiras em Estíria.",
  fauna:"Vacas com <b>sinos grandes no pescoço</b> em pasto alto, cavalos Haflinger de crina clara e cabras nos vales tiroleses."
},
belgium:{
  cars:"Frota europeia variada, com presença forte de Audi, BMW e VW. Bicicletas em grande número na Flandres, quase nenhuma na Valônia.",
  flora:"Fileiras de choupos altos marcando divisas, faias nas Ardenas e campos de trigo e beterraba ao norte.",
  fauna:"Vacas <b>Azul-Belga</b> de musculatura muito marcada, cavalos de tração belgas e ovelhas em diques."
},
bulgaria:{
  cars:"Carros usados alemães antigos (VW Golf, Opel Astra) em grande quantidade, além de Lada e Moskvitch remanescentes no interior. Carroças puxadas por cavalo ainda circulam.",
  flora:"Girassol e trigo nas planícies, roseiras no Vale das Rosas (Kazanlak), videiras e pomares de ameixa.",
  fauna:"<b>Cegonhas-brancas com ninhos no topo de postes</b> são muito comuns na primavera e no verão. Rebanhos de ovelhas e cabras com pastor, e cães de rua nas cidades."
},
croatia:{
  cars:"VW, Opel e Škoda predominam, muitos importados usados da Alemanha e da Áustria.",
  flora:"Oliveira, cipreste, alecrim e <b>lavanda</b> (especialmente em Hvar) na Dalmácia; faias e carvalhos no interior continental.",
  fauna:"Ovelhas soltas nas ilhas cársticas, burros na Dalmácia e javalis sinalizados no interior."
},
czechia:{
  cars:"<b>Škoda domina de forma esmagadora</b> — Octavia, Fabia e Superb em toda parte. É a marca nacional e isso se vê na rua.",
  flora:"Abeto e pinheiro em florestas plantadas, campos de <b>colza amarela</b> na primavera e lúpulo em estruturas altas de arame na região de Žatec.",
  fauna:"Placas de aviso de veado e javali, cegonhas em postes na Morávia e gado leiteiro em pasto cercado."
},
denmark:{
  cars:"VW, Škoda, Toyota e Peugeot; a frota é nova e limpa. <b>Bicicletas em número enorme</b>, com ciclovias separadas em toda parte.",
  flora:"Faias (árvore nacional), trigo e cevada, campos de colza e cercas-vivas baixas de espinheiro.",
  fauna:"Vacas leiteiras <b>Holstein preto-e-branco</b>, criação de porcos em galpões longos e cavalos com cobertor no inverno."
},
estonia:{
  cars:"Usados alemães e japoneses, com muitos Toyota, VW e Audi de meia-idade. Frota mais antiga que a dos nórdicos vizinhos.",
  flora:"Pinheiro-silvestre, bétula e zimbro; turfeiras com vegetação baixa e florestas de sub-bosque limpo.",
  fauna:"Cegonhas em ninhos de poste, placas de alce e veado, e cegonhas-pretas em áreas de pântano."
},
faroe:{
  cars:"Utilitários 4x4 e vans, muitos de marcas japonesas, adequados a estradas estreitas e túneis de pista única.",
  flora:"Somente grama, musgo e ervas rasteiras — <b>não há árvores nativas</b>. Alguns bosquetes plantados e protegidos nas vilas.",
  fauna:"<b>Ovelhas por toda encosta</b>, em número maior que o de habitantes. Papagaios-do-mar e gaivotas nos penhascos."
},
finland:{
  cars:"Toyota, Škoda, Volvo e VW. Muitos carros com sujeira de sal no inverno e reboques de barco no verão.",
  flora:"Pinheiro-silvestre, abeto e <b>bétula</b> em floresta densa; mirtilo e musgo cobrindo o solo; salgueiros junto aos lagos.",
  fauna:"<b>Renas soltas na estrada</b> na Lapônia, placas triangulares de alce em toda a rede rural e cisnes em lagos."
},
france:{
  cars:"<b>Renault, Peugeot e Citroën dominam</b> — as três marcas nacionais formam a maior parte da frota, algo bem distinto da Alemanha vizinha.",
  flora:"<b>Plátanos alinhados</b> ao longo de estradas do sul, girassóis no centro-oeste, vinhas em fileira, lavanda na Provença e pinheiro-marítimo nas Landes.",
  fauna:"Vacas <b>Charolesa brancas</b> e Limousine ruivas em pasto, ovelhas nos Pirineus e cavalos brancos e touros pretos na Camargue."
},
germany:{
  cars:"VW, Mercedes-Benz, BMW, Audi e Opel — a frota é fortemente nacional e relativamente nova.",
  flora:"Abeto e pinheiro em floresta plantada, faias, campos de <b>colza amarela</b> e espargos cobertos por plástico na primavera.",
  fauna:"Vacas Holstein e Fleckvieh em pasto, cavalos com cobertor e placas de veado nas estradas florestais."
},
gibraltar:{
  cars:"Frota britânica usada, mas circulando pela direita. Muitos carros pequenos por causa das ruas estreitas.",
  flora:"Vegetação mediterrânea nas encostas do rochedo: oliveira-brava, palmeira-anã e figueira-da-índia.",
  fauna:"Os <b>macacos-de-gibraltar</b> (macacos-de-barbária) soltos no rochedo são o marcador mais direto do território — não há outra colônia de macacos selvagens na Europa."
},
greece:{
  cars:"Frota antiga em geral, com muitas <b>picapes Toyota Hilux e Nissan</b> no campo e motos pequenas nas ilhas.",
  flora:"Oliveira, cipreste, pinheiro-de-alepo, oleandro nos canteiros centrais e maquis baixo e espinhoso nas encostas secas.",
  fauna:"<b>Cabras nas encostas rochosas</b> e à beira da estrada, ovelhas com sinos, gatos de rua em toda vila e tartarugas terrestres."
},
hungary:{
  cars:"<b>Suzuki</b> tem presença marcante (há fábrica em Esztergom), além de Opel, VW e Škoda. Frota mais antiga no leste do país.",
  flora:"Acácia-branca (robínia) plantada em bosques, girassol e milho em escala industrial, damasqueiros e vinhas.",
  fauna:"<b>Cegonhas em ninhos de poste</b>, gado cinzento húngaro de chifres longos e cavalos na puszta."
},
iceland:{
  cars:"<b>4x4 grandes com pneus superdimensionados</b> (Land Cruiser, Hilux, Defender modificados) são desproporcionalmente comuns, por causa das estradas de interior.",
  flora:"Musgo cobrindo campos de lava, capim curto e <b>tremoço-do-alasca roxo</b> em manchas enormes no verão. Quase nenhuma árvore.",
  fauna:"<b>Ovelhas soltas</b> em qualquer lugar e <b>cavalos islandeses</b> — baixos, robustos e muito peludos, inconfundíveis."
},
ireland:{
  cars:"Frota europeia com muitos Ford, Toyota e Nissan; tratores frequentes nas estradas rurais.",
  flora:"Sebes altas de espinheiro fechando as estradas, <b>fúcsia</b> vermelha nas cercas do sudoeste, tojo amarelo e rododendro invasor.",
  fauna:"<b>Ovelhas com marcas de tinta colorida</b> no lombo, vacas leiteiras, cavalos e burros em pasto pequeno."
},
italy:{
  cars:"<b>Fiat domina</b> (Panda e Punto em toda parte), com Lancia e Alfa Romeo. <b>Scooters</b> em grande quantidade nas cidades.",
  flora:"<b>Ciprestes em fileira</b> na Toscana, pinheiro-manso em forma de guarda-chuva, oliveiras, videiras e limoeiros no sul.",
  fauna:"Ovelhas e cabras no centro-sul, javalis sinalizados nas colinas e vacas Chianina brancas na Toscana."
},
latvia:{
  cars:"Usados alemães, com VW e Audi antigos em grande número. Frota visivelmente mais velha que a dos nórdicos.",
  flora:"Pinheiro e bétula em floresta contínua, zimbro em áreas abertas e pinheiros retorcidos nas dunas do Báltico.",
  fauna:"<b>Cegonhas-brancas em ninhos de poste</b> — a Letônia tem uma das maiores densidades da Europa. Alces e veados sinalizados."
},
lithuania:{
  cars:"Usados importados da Alemanha em grande proporção, incluindo muitas vans e caminhões pequenos.",
  flora:"Pinheiro, bétula e amieiro; centeio e trigo em campos abertos; pinheiros nas dunas da Curônia.",
  fauna:"<b>Cegonha-branca é a ave nacional</b> e aparece em ninhos sobre postes por todo o país. Gado amarrado em pasto e cavalos de trabalho."
},
luxembourg:{
  cars:"Frota <b>premium e nova</b>: alta proporção de Mercedes, BMW e Audi, coerente com a renda do país.",
  flora:"Faias e carvalhos nas Ardenas, vinhas em encosta no vale do Mosela e pomares nas aldeias.",
  fauna:"Vacas leiteiras e de corte em pasto cercado, cavalos e javalis sinalizados nas florestas."
},
malta:{
  cars:"Frota britânica usada e muitos <b>importados japoneses com volante à direita</b>. Ônibus urbanos brancos com faixa colorida.",
  flora:"Figueira-da-índia, alfarrobeira, oliveira e agaves em muros de pedra seca. Vegetação muito rala e seca.",
  fauna:"<b>Gatos de rua em grande número</b>, poucas cabras e ovelhas; praticamente nenhum animal de grande porte."
},
monaco:{
  cars:"Concentração absurda de <b>superesportivos e carros de luxo</b> — Ferrari, Lamborghini, Bentley e Rolls-Royce circulando normalmente. É um marcador por si só.",
  flora:"Palmeiras, buganvílias, oliveiras ornamentais e jardins subtropicais muito cuidados.",
  fauna:"Fauna praticamente ausente; apenas gaivotas e pombos no porto."
},
montenegro:{
  cars:"Usados alemães antigos, com muitos VW Golf de gerações anteriores e vans de transporte.",
  flora:"Oliveiras, ciprestes e figueiras na costa; faias e coníferas nas montanhas do norte.",
  fauna:"Cabras e ovelhas nas encostas cársticas, burros de carga e vacas soltas em estradas de montanha."
},
netherlands:{
  cars:"<b>Bicicletas em quantidade sem paralelo no mundo</b>, muitas vezes mais visíveis que os carros. Frota automotiva com VW, Opel, Peugeot e muitos elétricos.",
  flora:"Choupos e salgueiros <b>podados em formato de bola</b> nas margens de valas, campos de tulipas e narcisos na primavera, juncos em áreas alagadas.",
  fauna:"Vacas <b>Holstein preto-e-branco</b> em pasto plano — praticamente um símbolo nacional. Ovelhas pastando em diques e muitas aves aquáticas."
},
"north-macedonia":{
  cars:"Usados alemães velhos e remanescentes de <b>Zastava/Yugo</b> iugoslavos. Frota visivelmente antiga.",
  flora:"Tabaco secando pendurado em varandas, papoulas, videiras e pomares; encostas secas com arbustos.",
  fauna:"Rebanhos de ovelhas e cabras com pastor, burros de carga e cães pastores grandes."
},
norway:{
  cars:"<b>Proporção altíssima de carros elétricos</b> (Tesla, VW ID, Nissan Leaf) — a Noruega lidera o mundo nisso, e vê-se na rua. Muitos 4x4 e reboques de barco.",
  flora:"Abeto e pinheiro nos vales, <b>bétula-anã</b> e tundra acima da linha das árvores, urze e musgo nas encostas.",
  fauna:"<b>Ovelhas soltas na estrada</b>, renas no norte e placas triangulares de alce por toda parte."
},
poland:{
  cars:"Škoda, VW, Opel e Fiat, com forte presença de <b>usados importados da Alemanha</b>. Muitos caminhões de transporte internacional.",
  flora:"Pinheiro em floresta plantada, bétula, campos de <b>colza</b> e macieiras em pomares extensos.",
  fauna:"A Polônia tem a <b>maior população de cegonhas-brancas do mundo</b> — ninhos em postes são cena constante no campo. Vacas amarradas em piquete e cavalos de trabalho."
},
portugal:{
  cars:"Renault, Peugeot, Citroën e VW; frota bem mais antiga no interior do que no litoral.",
  flora:"<b>Eucalipto plantado em massa</b>, <b>sobreiro com o tronco descascado em vermelho-ocre</b> (extração de cortiça — marcador forte), pinheiro-manso, oliveiras e laranjeiras.",
  fauna:"Ovelhas e cabras no interior, galinhas soltas nas aldeias, porcos pretos nos montados do Alentejo e cegonhas em campanários."
},
romania:{
  cars:"<b>Dacia domina de forma esmagadora</b> — Logan, Sandero e Duster em toda parte. É a marca nacional e o sinal mais rápido nas estradas.",
  flora:"Choupos em alameda, nogueiras à beira da estrada, girassol e milho, faias nos Cárpatos.",
  fauna:"<b>Carroças puxadas por cavalos</b> ainda circulando, rebanhos de ovelhas com pastor e cães, cegonhas em postes e muitos cães de rua."
},
russia:{
  cars:"<b>Lada</b> em todas as gerações (Niva, Granta, modelos clássicos quadrados), UAZ militares e vans GAZelle. No Extremo Oriente, muitos importados japoneses com <b>volante à direita</b>.",
  flora:"<b>Bétulas de tronco branco</b> em floresta densa, pinheiro, abeto e sorveira; estepe com capim alto no sul.",
  fauna:"Vacas soltas em pasto de vila, cavalos, cães de rua e placas de alce nas rodovias do norte."
},
"san-marino":{
  cars:"Frota italiana, com Fiat e Alfa Romeo; muitos veículos com placa italiana circulando.",
  flora:"Ciprestes, oliveiras, videiras e pinheiros nas encostas do Monte Titano.",
  fauna:"Pouca fauna visível; aves de rapina planando sobre o penhasco."
},
serbia:{
  cars:"Remanescentes de <b>Zastava/Yugo</b>, Fiat (há fábrica em Kragujevac) e muitos usados alemães antigos.",
  flora:"Milho e girassol na Voivodina, <b>ameixeiras</b> em pomares (base da rakija), acácias e choupos em alameda.",
  fauna:"Carroças com cavalos no campo, porcos e galinhas em quintais, cegonhas na planície panônica."
},
slovakia:{
  cars:"Škoda e VW dominam; <b>KIA</b> tem presença notável por causa da fábrica em Žilina. Peugeot também é comum.",
  flora:"Abeto e faia nos Cárpatos, milho e trigo na planície do sul, pomares de maçã.",
  fauna:"<b>Ovelhas em rebanhos grandes nos Tatras</b> com pastores e cães, cegonhas em postes e placas de urso em áreas de montanha."
},
slovenia:{
  cars:"<b>Renault</b> tem peso acima do normal (fábrica Revoz em Novo Mesto), junto com VW e Škoda.",
  flora:"Abeto e faia cobrindo mais da metade do país, videiras em encosta a leste, tílias (árvore nacional) nas praças.",
  fauna:"<b>Colmeias pintadas com painéis coloridos</b> em fileira — a apicultura é tradição nacional e é um marcador visual muito específico. Vacas em pasto alpino."
},
spain:{
  cars:"<b>SEAT</b> como marca nacional, ao lado de Renault, Peugeot e Citroën. Frota nova nas cidades e antiga no campo.",
  flora:"<b>Olivais plantados em grade</b> por quilômetros na Andaluzia, azinheiras e sobreiros espaçados na dehesa, laranjais em Valência, eucalipto na Galiza.",
  fauna:"<b>Touros de lide pretos</b> em dehesa, ovelhas merinas, cegonhas em campanários e a silhueta gigante do <b>Touro de Osborne</b> em morros junto às estradas."
},
sweden:{
  cars:"<b>Volvo</b> em grande número e Saab remanescentes, junto com VW e Toyota. Reboques e trailers são muito comuns.",
  flora:"Pinheiro e abeto em floresta contínua, bétula, faias no sul (Escânia) e campos de colza.",
  fauna:"<b>Placas triangulares de alce</b> em toda a rede rural, renas na Lapônia e vacas leiteiras em pasto cercado."
},
switzerland:{
  cars:"Frota <b>premium e impecavelmente conservada</b>, com muitos Mercedes, BMW, Audi e elétricos. Praticamente nenhum carro enferrujado.",
  flora:"Abeto e lariço nas encostas, prados alpinos cortados para feno, videiras em terraço no Valais e Léman.",
  fauna:"<b>Vacas Simental e Brown Swiss com sinos grandes</b> em pasto alto, cabras e ovelhas nos Alpes."
},
ukraine:{
  cars:"<b>Lada</b>, ZAZ/Daewoo Lanos de fabricação local e muitos usados europeus. Vans GAZelle e caminhões soviéticos ainda circulam.",
  flora:"<b>Girassol em escala industrial</b>, trigo, choupos em alameda e salgueiros junto a rios; solo escuro visível entre as culturas.",
  fauna:"Cegonhas em postes, vacas amarradas em piquete, gansos e patos soltos nas aldeias."
},
uk:{
  cars:"Frota variada com muitos Ford, Vauxhall, VW e Nissan. <b>Táxis pretos</b> em Londres e ônibus de dois andares nas cidades.",
  flora:"<b>Sebes de espinheiro</b> dividindo campos, carvalhos isolados em pasto, <b>urze roxa</b> nas charnecas escocesas no fim do verão e tojo amarelo.",
  fauna:"<b>Ovelhas em enorme quantidade</b>, vacas Highland de pelo longo na Escócia, faisões atravessando estradas rurais e cavalos com cobertor."
},
bosnia:{
  cars:"Usados alemães antigos, com muitos VW Golf; frota visivelmente envelhecida.",
  flora:"Faias e coníferas nas montanhas, ameixeiras e macieiras em pomares, karst seco com arbustos na Herzegovina.",
  fauna:"Ovelhas e cabras com pastor, vacas soltas em estradas de montanha e carroças no interior."
},
moldova:{
  cars:"Usados europeus e <b>Lada</b> remanescentes; muitas vans de transporte coletivo (marshrutka).",
  flora:"<b>Vinhedos extensos</b> (o país é fortemente vitivinícola), nogueiras em alameda, girassol e milho.",
  fauna:"Carroças puxadas por cavalos, gansos e patos soltos nas aldeias e vacas amarradas em pasto."
},
cyprus:{
  cars:"Frota britânica usada e muitos <b>importados japoneses com volante à direita</b>, coerente com a direção pela esquerda.",
  flora:"Oliveira, alfarrobeira, cipreste e pinheiro-de-alepo; vinhas nas encostas do Troodos e citrinos na planície.",
  fauna:"<b>Gatos de rua em número muito alto</b>, cabras nas encostas secas e burros selvagens na península de Karpas."
},
greenland:{
  cars:"Poucos veículos, quase todos <b>4x4 e picapes</b>; motos de neve e trenós em uso normal no inverno.",
  flora:"Tundra com salgueiro-anão, musgo e líquen; <b>nenhuma árvore</b> além de arbustos rasteiros nos vales abrigados.",
  fauna:"<b>Cães de trenó groenlandeses acorrentados em grupos</b> na periferia das vilas — cena muito característica. Focas e aves marinhas na costa."
},
jersey:{
  cars:"Frota britânica com muitos carros pequenos, adequados às estradas estreitas entre muros de granito.",
  flora:"Sebes densas, batata Jersey Royal em encostas voltadas ao sul, hortênsias e agapantos nos jardins.",
  fauna:"<b>Vacas Jersey</b> — marrom-claras, pequenas e de olhos escuros — pastando em campos minúsculos. A raça leva o nome da ilha."
},
"isle-of-man":{
  cars:"Frota britânica com forte presença de <b>motocicletas</b>, ligada à tradição do circuito TT.",
  flora:"Charneca com urze e tojo no interior, sebes e bosques de coníferas plantados nos vales.",
  fauna:"<b>Ovelhas Loaghtan</b>, que podem ter quatro ou seis chifres, e os <b>gatos Manx sem cauda</b> — ambos exclusivos da ilha."
},

/* ---------------- ÁSIA ---------------- */
turkey:{
  cars:"<b>Fiat</b> tem peso enorme (produzidos localmente pela Tofaş, incluindo o Egea), junto com Renault. Minivans <b>dolmuş</b> de transporte coletivo circulam em toda cidade.",
  flora:"Pinheiro-de-alepo e oliveiras no oeste, <b>avelãs</b> em encosta no Mar Negro, <b>chá em terraços</b> em Rize, álamos em fileira na Anatólia e estepe seca no centro.",
  fauna:"Rebanhos grandes de ovelhas conduzidos a pé, <b>gatos e cães de rua muito numerosos e bem tratados</b> nas cidades, e cegonhas em ninhos de poste."
},
israel:{
  cars:"Frota nova e de porte médio, com forte presença de Hyundai, Kia, Mazda e Toyota.",
  flora:"<b>Eucaliptos e pinheiros-de-jerusalém replantados</b> em encostas, ciprestes, buganvílias, tamareiras e bananeiras cultivadas sob tela de sombreamento.",
  fauna:"Rebanhos de cabras beduínas no Negev, camelos junto a acampamentos, íbex-da-núbia perto do Mar Morto e muitos gatos urbanos."
},
jordan:{
  cars:"Frota antiga com predomínio de Toyota e Hyundai usados; caminhões pesados nas rodovias do deserto.",
  flora:"Vegetação escassa: acácias isoladas no Wadi Rum, tamareiras em oásis, oliveiras e pinheiros apenas no norte mais úmido.",
  fauna:"<b>Camelos (dromedários) soltos</b> com placas de aviso na estrada, rebanhos de cabras e ovelhas beduínos e burros de carga."
},
lebanon:{
  cars:"<b>Mercedes-Benz antigos usados como táxi coletivo</b> (service) são cena clássica; o resto da frota é variado e envelhecido.",
  flora:"<b>Cedro-do-líbano</b> em bosques protegidos (símbolo nacional), pinheiro-manso, oliveiras em terraço e vinhas no vale do Beqaa.",
  fauna:"Cabras em encostas rochosas, ovelhas e poucos animais de grande porte; gatos de rua nas cidades."
},
uae:{
  cars:"<b>Toyota Land Cruiser e Nissan Patrol em quantidade enorme</b>, além de Lexus e picapes. Em Dubai, superesportivos circulam com naturalidade.",
  flora:"<b>Palmeiras-tamareiras em fileira com irrigação por gotejamento</b>, árvore ghaf (nativa e símbolo nacional), buganvílias e grama irrigada em canteiros.",
  fauna:"<b>Camelos em cercados junto à rodovia</b>, com placas de aviso de travessia; cabras e falcões em criadouros."
},
qatar:{
  cars:"Land Cruiser, Nissan Patrol e Lexus dominam; frota muito nova e uniforme.",
  flora:"Palmeiras plantadas e grama irrigada em canteiros centrais; fora das cidades, apenas arbustos de acácia e vegetação rasteira de deserto.",
  fauna:"<b>Camelos em fazendas cercadas</b> ao longo das rodovias e o <b>oryx-da-arábia</b>, animal nacional, em reservas."
},
india:{
  cars:"<b>Maruti Suzuki domina a frota</b> (Alto, Swift, WagonR), com Tata, Mahindra e Hyundai. <b>Auto-riquixás amarelos com teto verde ou preto</b> e caminhões Tata muito decorados com 'HORN OK PLEASE'.",
  flora:"Bananeira, mangueira e <b>nim</b> nas planícies, coqueiro e seringueira no sul, palmeira-de-açúcar, arroz em várzea e trigo no norte.",
  fauna:"<b>Vacas soltas circulando livremente pelas ruas</b> — marcador indiano por excelência. Búfalos-d'água, cabras, macacos em templos e cidades, cães de rua e camelos no Rajastão."
},
"sri-lanka":{
  cars:"<b>Tuk-tuks Bajaj em enorme quantidade</b>, além de Toyota e Suzuki usados; ônibus pintados com cores fortes e imagens religiosas.",
  flora:"Coqueiro em massa no litoral, <b>chá em terraços</b> no planalto central, seringueira, jaqueira, bananeira e arrozais.",
  fauna:"<b>Elefantes selvagens com placas de aviso na estrada</b>, macacos em bandos, varanos, vacas zebu soltas e cães de rua."
},
bangladesh:{
  cars:"<b>Riquixás de pedal coloridos</b> e <b>auto-riquixás CNG verdes</b> dominam; ônibus e caminhões muito decorados. Carros particulares são minoria.",
  flora:"Bananeira, bambu, <b>palmeira-de-açúcar</b> isolada, arrozais em toda parte e jacinto-d'água cobrindo canais.",
  fauna:"Vacas e búfalos magros puxando carroças, cabras amarradas, patos em canais e corvos em grande número."
},
bhutan:{
  cars:"Veículos importados da Índia (Maruti Suzuki, Tata) e Toyota; caminhões Tata coloridos nas estradas de montanha.",
  flora:"<b>Rododendros</b> em floração nas encostas, pinheiro-azul do Himalaia, cipreste (árvore nacional) e bambu nos vales baixos.",
  fauna:"<b>Vacas e cães deitados no meio da estrada</b> — o país não os remove, cena muito característica. Iaques em altitude e takin, o animal nacional."
},
nepal:{
  cars:"Ônibus e caminhões <b>Tata e Ashok Leyland decorados</b>, Maruti Suzuki e grande quantidade de motocicletas.",
  flora:"<b>Rododendro</b> (flor nacional), pinheiro do Himalaia, arroz em terraço nas colinas, bananeira e cana no Terai.",
  fauna:"<b>Vacas sagradas paradas na via</b>, búfalos-d'água, cabras, macacos em templos e iaques nas altitudes elevadas."
},
mongolia:{
  cars:"<b>Toyota Prius em proporção desproporcional</b> — importados usados do Japão em massa. Também vans <b>UAZ russas</b> e Land Cruisers para a estepe.",
  flora:"Estepe de capim curto sem árvores, saxaul no Gobi, lariço e pinheiro apenas no norte e no Altai.",
  fauna:"<b>Cavalos, ovelhas, cabras, iaques e camelos bactrianos de duas corcovas soltos na estepe</b>, em número muito maior que o de pessoas — o marcador mais confiável do país."
},
kazakhstan:{
  cars:"Lada em todas as gerações, Toyota usados e caminhões Kamaz. Frota mais nova em Astana e Almaty.",
  flora:"Estepe de capim, <b>choupos plantados em fileira</b> como quebra-vento, saxaul no semideserto e macieiras selvagens nas encostas perto de Almaty.",
  fauna:"Cavalos e camelos soltos na estepe, rebanhos de ovelhas, águias e marmotas."
},
kyrgyzstan:{
  cars:"<b>Audi 100 e Mercedes-Benz antigos</b> em número surpreendentemente alto, junto com Lada e usados japoneses. Vans marshrutka no transporte coletivo.",
  flora:"<b>Nogueirais naturais</b> em Arslanbob, abetos Tian Shan escuros e pontudos nas encostas, e pastagens de altitude (jailoo) com capim curto.",
  fauna:"<b>Cavalos em pastagem de altitude</b>, ovelhas e cabras em rebanhos grandes, iaques acima de 3.000 m e águias-reais usadas na caça tradicional."
},
japan:{
  cars:"<b>Kei cars quadradinhos com placa amarela</b>, Toyota, Honda, Nissan e Suzuki. Cores <b>branco, prata e preto</b> dominam; táxis com capa branca no encosto e motoristas de luva.",
  flora:"<b>Cedro japonês (sugi) plantado em fileiras densas e escuras</b> cobrindo encostas inteiras, bambuzais, cerejeiras nas cidades e arrozais em terraço.",
  fauna:"Poucos animais soltos: garças brancas em arrozais, corvos grandes e barulhentos, veados em Nara e placas de aviso de macaco e urso na montanha."
},
"south-korea":{
  cars:"<b>Hyundai e Kia dominam quase toda a frota</b> — é um dos mercados mais nacionalizados do mundo. Cores branco, cinza e preto em ampla maioria.",
  flora:"Pinheiro coreano em encostas, <b>ginkgos amarelos</b> nas avenidas no outono, bambu, arrozais e <b>estufas de plástico curvas em massa</b> nas áreas agrícolas.",
  fauna:"Fauna pouco visível; garças em arrozais e cães em fazendas. O país é muito urbanizado."
},
taiwan:{
  cars:"<b>Scooters em enxame</b> com faixas de espera próprias nos cruzamentos, Toyota e Nissan, além da marca local Luxgen. Táxis amarelos.",
  flora:"Bambu, <b>palmeiras de areca (betel) em fileiras finas e altas</b>, arrozais, bananeiras e florestas de cânfora na montanha.",
  fauna:"Cães de rua, garças em arrozais, macacos-de-formosa em áreas montanhosas e muitas aves em zonas úmidas."
},
"hong-kong":{
  cars:"<b>Táxis vermelhos com teto prateado</b> na área urbana (verdes nos Novos Territórios, azuis em Lantau), ônibus de dois andares e Toyota Comfort como frota de táxi.",
  flora:"Vegetação subtropical densa nas encostas, <b>figueiras com raízes aéreas cobrindo muros de pedra</b>, bambu e bauínia, a flor símbolo do território.",
  fauna:"Macacos em parques rurais, milhafres-pretos planando sobre o porto e javalis descendo às áreas urbanas."
},
macau:{
  cars:"Táxis pretos com teto creme, muitos carros compactos e motocicletas; ruas estreitas limitam o porte da frota.",
  flora:"Figueiras grandes sombreando praças coloniais, palmeiras e vegetação subtropical em Coloane.",
  fauna:"Fauna urbana escassa; aves marinhas e pombos nas praças."
},
singapore:{
  cars:"Frota <b>nova e cara</b> por causa do sistema de licenças (COE), com muitos Mercedes, BMW e Toyota. Táxis azuis, brancos e prateados.",
  flora:"<b>Árvores-da-chuva (rain trees) de copa larguíssima sombreando as vias expressas</b> — marcador visual muito característico. Palmeiras, buganvílias em viadutos e jardins verticais.",
  fauna:"Macacos de cauda longa nas bordas de reservas, lagartos-monitores grandes, calaus e corvos-da-casa."
},
malaysia:{
  cars:"<b>Proton e Perodua</b>, as duas marcas nacionais, dominam a frota (Myvi, Saga, Axia). Motocicletas em grande número, com faixas próprias.",
  flora:"<b>Palma de óleo em fileiras infinitas</b>, seringueiras em plantação alinhada, bananeiras e floresta tropical densa nas encostas.",
  fauna:"Macacos à beira da estrada, búfalos-d'água em arrozais, gatos de rua e aves aquáticas em manguezais."
},
indonesia:{
  cars:"<b>Toyota Avanza, Daihatsu e Honda</b> dominam, além de uma quantidade extrema de <b>motocicletas</b>. Minivans angkot fazem transporte coletivo.",
  flora:"<b>Arroz em terraços</b>, palma de óleo, coqueiro, bambu e bananeira; vegetação tropical densa em toda parte.",
  fauna:"<b>Búfalos-d'água em arrozais</b>, cabras, macacos e <b>galos de briga em gaiolas de vime</b> expostas na frente das casas — cena muito característica de Java e Bali."
},
philippines:{
  cars:"<b>Jeepneys</b> alongados e decorados, <b>triciclos motorizados</b> com cabine lateral em toda cidade pequena, além de Toyota e Mitsubishi.",
  flora:"<b>Coqueiros em massa</b>, arrozais, bananeiras, mangueiras e bambu; vegetação tropical densa.",
  fauna:"<b>Carabao (búfalo-d'água) puxando arado em arrozais</b> — símbolo nacional. <b>Galos de briga amarrados individualmente em quintais</b>, cabras e cães."
},
thailand:{
  cars:"<b>Picapes Toyota Hilux e Isuzu D-Max são os veículos mais comuns do país</b>, muitas com carroceria aberta levando passageiros. Tuk-tuks e songthaews (picapes com bancos) no transporte local.",
  flora:"Arrozais, <b>palmeiras-de-açúcar isoladas no meio dos campos</b>, seringueiras no sul, bambu e frangipani plantado em templos.",
  fauna:"<b>Búfalos-d'água</b> em arrozais, <b>cães de rua em grande número</b>, elefantes em campos turísticos e macacos em áreas de templo."
},
cambodia:{
  cars:"Proporção notável de <b>Toyota Camry e Lexus RX usados</b>, além de muitas motos e tuk-tuks de reboque acoplado.",
  flora:"<b>Palmeira-de-açúcar isolada em meio a arrozais</b> — árvore símbolo do país e marcador visual muito forte. Arroz, bananeira e mangueira.",
  fauna:"<b>Vacas brancas magras (zebu) soltas ou amarradas à beira da estrada</b>, búfalos-d'água, galinhas e patos nas vilas."
},
laos:{
  cars:"Picapes Toyota Hilux, motocicletas e caminhões chineses; frota pequena e trânsito muito baixo.",
  flora:"Arrozais, bambu, teca em plantação e floresta tropical densa nas montanhas do norte.",
  fauna:"<b>Búfalos-d'água e vacas caminhando na pista</b>, galinhas e cabras nas vilas à beira da estrada."
},
vietnam:{
  cars:"<b>Motocicletas em quantidade extrema</b> (Honda Wave, Vision, Air Blade) — o trânsito é dominado por elas. Carros são minoria, com Toyota e Hyundai.",
  flora:"Arroz em terraços no norte e em delta no sul, coqueiro, bambu, <b>palmeira-d'água (nipa)</b> nos canais do Mekong e café nas terras altas centrais.",
  fauna:"<b>Búfalos-d'água</b> arando arrozais, <b>patos em bandos grandes</b> soltos nos campos alagados, cães e galinhas nas vilas."
},

/* ---------------- ÁFRICA ---------------- */
"south-africa":{
  cars:"<b>Bakkies</b> (picapes Toyota Hilux, Ford Ranger, Isuzu) são o veículo mais característico, junto com <b>minibus-táxis brancos Toyota Quantum</b> cobertos de adesivos, que fazem quase todo o transporte coletivo.",
  flora:"Acácia de <b>copa achatada</b>, aloés arborescentes de flor vermelha, fynbos no Cabo, <b>jacarandás roxos</b> em Pretória e plantações alinhadas de eucalipto e pinheiro.",
  fauna:"Gado <b>Nguni malhado</b>, ovelhas no Karoo, avestruzes em fazendas, babuínos com placa de aviso e <b>ninhos de tecelão pendurados em árvores e postes</b> — detalhe muito característico."
},
botswana:{
  cars:"Picapes 4x4 (Toyota Hilux e Land Cruiser) dominam, além de ônibus e minivans de transporte.",
  flora:"Acácias espinhosas, mopane de folha em borboleta, <b>baobás isolados</b> e capim seco do Kalahari.",
  fauna:"<b>Gado, burros e cabras soltos na pista</b> o tempo todo — é o marcador mais constante do país. Avestruzes, antílopes e elefantes no norte, com placas de aviso."
},
eswatini:{
  cars:"Frota igual à sul-africana: bakkies e minibus-táxis brancos.",
  flora:"<b>Cana-de-açúcar</b> no lowveld, plantações de eucalipto e pinheiro nas encostas, acácias e capim alto.",
  fauna:"Gado Nguni, cabras em quantidade, e antílopes em reservas cercadas junto à estrada."
},
lesotho:{
  cars:"Picapes 4x4 e minibus-táxis; em muitas áreas o <b>cavalo ainda é o principal meio de transporte</b>.",
  flora:"Capim curto de altitude, <b>aloés espiralados</b> em encostas rochosas e salgueiros e álamos plantados apenas junto às aldeias — árvores nativas são raríssimas.",
  fauna:"<b>Ovelhas merino e cabras angorá</b> em rebanhos grandes (lã e mohair são a base da economia), cavalos e burros de carga conduzidos por pastores de cobertor."
},
kenya:{
  cars:"<b>Matatus</b> — vans de transporte cobertas de grafite, adesivos e luzes — são inconfundíveis. Toyota Probox e Corolla usados do Japão, além de boda-bodas (motos-táxi).",
  flora:"Acácias de copa chata na savana, <b>chá em terraços verdes</b> nas terras altas, eucalipto plantado, sisal em fileiras e cafezais.",
  fauna:"<b>Gado zebu de corcova conduzido por pastores</b>, cabras em toda estrada, e fauna selvagem (zebras, girafas, babuínos) visível de rodovias que cortam áreas de parque."
},
uganda:{
  cars:"<b>Boda-bodas</b> (motos-táxi) em quantidade enorme, matatus brancos com faixa azul e Toyota usados.",
  flora:"<b>Bananeiras em praticamente todo quintal</b> (matoke é a base da alimentação), café, chá em terraço e papiro em áreas alagadas.",
  fauna:"<b>Gado Ankole de chifres gigantescos e curvos</b> — um dos marcadores mais fortes da África Oriental. Cabras, galinhas e marabus (cegonhas grandes e feias) nas cidades."
},
rwanda:{
  cars:"Motos-táxi com <b>colete e capacete numerados e padronizados</b>, refletindo a organização do país. Toyota usados e minivans de transporte.",
  flora:"<b>Chá e café em terraços</b>, eucalipto plantado em massa nas encostas e bananeiras nos vales.",
  fauna:"Vacas Ankole de chifres longos em pasto cercado, cabras e poucos animais soltos — o país é notavelmente ordenado."
},
ghana:{
  cars:"<b>Tro-tros</b> (vans Mercedes Sprinter lotadas) fazem o transporte coletivo, junto com táxis amarelos ou com faixa colorida e Toyota usados.",
  flora:"<b>Cacau</b> sob sombra no sul, palmeira de óleo, coqueiros no litoral e savana com baobás no norte.",
  fauna:"Cabras e galinhas soltas em todas as vilas, gado conduzido por pastores no norte e urubus em áreas urbanas."
},
nigeria:{
  cars:"<b>Danfos</b> — vans amarelas de transporte em Lagos — e <b>keke napep</b>, auto-riquixás amarelos, são marcadores diretos. Toyota usados dominam a frota particular.",
  flora:"Palmeira de óleo, inhame e mandioca no sul, savana com baobás e acácias no norte, mangue no delta do Níger.",
  fauna:"Cabras e galinhas soltas em toda parte, <b>gado Fulani de chifres muito longos</b> conduzido a pé por longas distâncias, e urubus."
},
senegal:{
  cars:"<b>Car rapides</b> — vans azuis e amarelas pintadas com motivos religiosos — são icônicos, junto com táxis amarelos e pretos e Mercedes antigos.",
  flora:"<b>Baobás isolados de tronco enorme</b> na savana, acácias espinhosas, mangues no delta do Saloum e plantações de amendoim.",
  fauna:"<b>Carroças puxadas por cavalos e burros</b> circulando nas rodovias, zebus de corcova, cabras e ovelhas em toda vila."
},
tunisia:{
  cars:"Frota de origem francesa envelhecida (Peugeot, Renault, Citroën), com táxis amarelos nas cidades e picapes no sul.",
  flora:"<b>Olivais em grade regular por quilômetros</b> no Sahel tunisiano, tamareiras nos oásis do sul, ciprestes e figueiras-da-índia usadas como cerca viva.",
  fauna:"<b>Dromedários</b> no sul saariano, rebanhos de ovelhas e cabras, e burros de carga nas aldeias."
},
egypt:{
  cars:"Táxis <b>brancos com faixa xadrez preta</b> no Cairo, Lada e Peugeot 504 antigos ainda em circulação e micro-ônibus lotados.",
  flora:"<b>Tamareiras alinhadas ao longo de canais de irrigação</b> — a assinatura do vale do Nilo. Cana-de-açúcar, algodão e trevo (berseem) nos campos.",
  fauna:"<b>Burros puxando carroça</b> em massa, búfalos-d'água nos canais, camelos perto de sítios turísticos e cabras nas vilas."
},
madagascar:{
  cars:"<b>Taxis-brousse</b> (vans Mercedes antigas superlotadas) fazem o transporte entre cidades. Em Antananarivo, <b>Renault 4 e Citroën 2CV</b> ainda rodam como táxi — cena única no mundo.",
  flora:"<b>Baobás de tronco colunar</b> a oeste, arroz em terraço no planalto, eucalipto plantado e <b>espinhal de plantas suculentas</b> no sul árido.",
  fauna:"<b>Zebus de corcova puxando carroça</b> em toda parte — o animal é central na cultura malgaxe. Lêmures em reservas e patos e galinhas nas vilas."
},
reunion:{
  cars:"Frota francesa moderna, com Renault, Peugeot e Citroën; muitos carros compactos por causa das estradas estreitas de montanha.",
  flora:"<b>Cana-de-açúcar cobrindo encostas íngremes</b>, filaos (casuarinas) no litoral, hortênsias nas estradas de altitude e floresta tropical nos circos.",
  fauna:"Gado leiteiro nas planícies altas, cabras e aves marinhas como o paille-en-queue; fauna terrestre nativa é escassa."
},

/* ---------------- AMÉRICAS ---------------- */
usa:{
  cars:"<b>Picapes grandes (Ford F-150, Chevrolet Silverado, Ram) e SUVs dominam a frota</b> de forma muito visível. <b>Ônibus escolares amarelos</b> são um marcador constante.",
  flora:"Muda por região: carvalhos e bordos a leste, <b>pinheiro-loblolly em plantação</b> no sul, saguaros no Arizona, sequoias e abetos-de-douglas no noroeste, palmeiras na Flórida e na Califórnia.",
  fauna:"<b>Veados-de-cauda-branca</b> com placas de aviso, gado Angus preto no meio-oeste, esquilos em áreas urbanas e bisões em parques do oeste."
},
canada:{
  cars:"Picapes e SUVs dominam, com muitos Ford e Ram. Nas províncias frias, é comum ver <b>cabos de aquecedor de bloco pendurados na frente dos carros</b> e tomadas em estacionamentos.",
  flora:"Floresta boreal de abeto-negro e pinheiro, <b>bordos</b> a leste (folhagem vermelha no outono), álamos nas pradarias e coníferas gigantes na Colúmbia Britânica.",
  fauna:"<b>Placas de aviso de alce</b> em toda estrada do norte, ursos, gansos-do-canadá em bandos e gado nas pradarias."
},
mexico:{
  cars:"<b>VW Fusca (Sedán) e Nissan Tsuru antigos</b> ainda circulando são cena clássica; picapes e táxis com cores próprias de cada cidade (verde, rosa, branco).",
  flora:"<b>Agave azul em fileiras</b> em Jalisco, cactos colunares e nopal no norte, mesquite, palmeiras e selva baixa no Yucatán.",
  fauna:"Gado zebu no trópico, cabras no altiplano norte, cães de rua em toda cidade e urubus circulando sobre estradas."
},
guatemala:{
  cars:"<b>Chicken buses</b> — ônibus escolares americanos repintados com cores berrantes e muito cromo — são o marcador mais direto. Picapes e tuk-tuks nas cidades pequenas.",
  flora:"Milho plantado em encostas quase verticais, café sob sombra, <b>pinheiros de altitude</b> no altiplano e ceiba, a árvore nacional.",
  fauna:"Cães de rua, galinhas soltas, cavalos e mulas de carga e gado em pasto de encosta."
},
"costa-rica":{
  cars:"Muitos <b>4x4 e SUVs de aluguel</b> (Toyota Hilux, RAV4) por causa do turismo, além de ônibus interurbanos coloridos.",
  flora:"Floresta nebulosa carregada de <b>bromélias e epífitas</b>, palmeiras, café e banana em plantação, e <b>cercas vivas de postes que brotam folhas</b>.",
  fauna:"<b>Placas de travessia de preguiças, macacos e quatis</b> nas rodovias — muito características. Gado Brahman branco, tucanos e iguanas."
},
panama:{
  cars:"Táxis amarelos, picapes e ônibus urbanos; os antigos <b>diablos rojos</b> pintados à mão ainda aparecem em áreas periféricas.",
  flora:"Floresta tropical densa, palmeiras, mangues no litoral e pastagens abertas no interior seco.",
  fauna:"Gado Brahman, urubus, aves tropicais e macacos em áreas de floresta próximas ao canal."
},
colombia:{
  cars:"<b>Motocicletas em quantidade enorme</b>, Chevrolet e Renault (com montagem local), táxis amarelos e, no campo, <b>chivas</b> — ônibus de madeira pintados com cores vivas.",
  flora:"<b>Palmeira-de-cera altíssima</b> no Quindío (árvore nacional, chega a 60 m), café sob bananeira, guadua (bambu nativo) e páramo de altitude.",
  fauna:"Gado Brahman e zebu, mulas de carga nas montanhas, e grande diversidade de aves — o país tem a maior do mundo."
},
ecuador:{
  cars:"Picapes, táxis amarelos e ônibus interprovinciais coloridos; frota mais antiga no interior.",
  flora:"<b>Estufas de rosas em massa</b> no vale de Cayambe, eucalipto plantado no altiplano, páramo com capim de altitude, e bananeiras e cacau na costa.",
  fauna:"<b>Lhamas e alpacas</b> no altiplano, gado leiteiro em pasto de altitude, e cães soltos nas estradas rurais."
},
peru:{
  cars:"<b>Mototáxis de três rodas com toldo</b> em toda cidade pequena, combis (vans lotadas) e Toyota usados.",
  flora:"<b>Eucaliptos plantados</b> nos vales andinos, ichu (capim amarelado da puna), batata e milho em terraços incas, e <b>deserto costeiro sem vegetação alguma</b>.",
  fauna:"<b>Lhamas, alpacas e vicunhas</b> no altiplano, burros de carga, cães de rua e urubus. Gado é escasso em altitude."
},
bolivia:{
  cars:"Minivans e Toyota usados importados via Chile; ônibus interurbanos antigos e muitos táxis coletivos.",
  flora:"Ichu na puna, eucaliptos nos vales, <b>quinoa em campos que ficam vermelhos e dourados</b> na colheita, e cactos colunares nos vales secos.",
  fauna:"<b>Lhamas e alpacas em rebanhos grandes</b>, ovelhas, burros e <b>flamingos nas lagoas do altiplano</b>."
},
chile:{
  cars:"Frota moderna com Chevrolet, Hyundai, Kia e muitos modelos chineses recentes; picapes no sul e no norte mineiro.",
  flora:"<b>Araucária chilena</b> com galhos rígidos em guarda-chuva na Araucanía, <b>álamos em fileira</b> no vale central, nalcas de folhas gigantes no sul chuvoso, cactos no Atacama e palmeira chilena.",
  fauna:"<b>Ovelhas em estâncias da Patagônia</b>, guanacos em manadas no sul e no altiplano, gado no vale central e condores planando."
},
argentina:{
  cars:"<b>Renault, Peugeot, Fiat e VW com produção local</b> dominam, junto com picapes Toyota Hilux e Ford Ranger, muito usadas no campo.",
  flora:"<b>Eucaliptos e álamos plantados como quebra-vento</b> em fazendas do pampa, ombu isolado, cactos-candelabro no noroeste, araucárias em Neuquén e arbustos baixos na Patagônia.",
  fauna:"<b>Gado em enorme quantidade no pampa</b>, cavalos montados por gaúchos, ovelhas na Patagônia, e <b>nandus (emas) e guanacos</b> correndo junto às rotas do sul."
},
uruguay:{
  cars:"Frota parecida com a argentina (Chevrolet, Fiat, VW, Renault), com muitos carros antigos surpreendentemente bem conservados.",
  flora:"<b>Palmeiras butiá isoladas em campo aberto</b> no leste, eucalipto e pinheiro em plantação, e ombu solitário na pradaria.",
  fauna:"<b>Gado e ovelhas em número muito maior que o de habitantes</b>, cavalos, nandus e teros (aves de campo barulhentas)."
},
brazil:{
  cars:"<b>Fiat, Volkswagen e Chevrolet dominam</b> (Uno, Gol, Onix, Strada, Palio), com <b>motos Honda em massa</b> nas cidades. Caminhões Scania e Volvo e picapes no agronegócio.",
  flora:"<b>Eucalipto em plantação alinhada</b> no Sudeste e Centro-Oeste, <b>araucária</b> no planalto sul, mandacaru e xiquexique na caatinga, árvores retorcidas de cerrado, coqueiros no litoral nordestino e palmeiras imperiais em alamedas.",
  fauna:"<b>Gado Nelore branco com corcova em enorme quantidade</b> — o marcador de fauna mais confiável do país. Urubus circulando, capivaras perto de água, cavalos e <b>cupinzeiros pontudos espalhados por pastagens</b>."
},
"dominican-republic":{
  cars:"<b>Motoconchos</b> (mototáxis) em massa, guaguas (vans de transporte) e carros usados importados dos Estados Unidos.",
  flora:"Coqueiros, canaviais, mangueiras enormes dando sombra e a <b>palmeira-real dominicana</b>, símbolo nacional.",
  fauna:"Gado, cabras amarradas na beira da estrada, <b>galos de briga em quintais</b> e burros de carga no interior."
},
"puerto-rico":{
  cars:"Frota norte-americana com picapes e SUVs, além de muitos compactos japoneses.",
  flora:"<b>Flamboyants de flor vermelha</b>, palmeira-real, bananeiras, bambu e floresta tropical densa em El Yunque.",
  fauna:"O <b>coquí</b> (pequena rã) é mais ouvido do que visto e é símbolo nacional; há também iguanas, mangustos e <b>cavalos soltos</b> em Vieques."
},
curacao:{
  cars:"Carros usados americanos e japoneses, picapes e muitos veículos compactos.",
  flora:"<b>Cactos colunares altos</b>, aloés e o <b>divi-divi permanentemente inclinado pelo vento</b> — a árvore mais icônica das ilhas ABC.",
  fauna:"<b>Iguanas grandes</b> tomando sol em muros, flamingos em salinas, cabras soltas e burros semisselvagens."
},
bermuda:{
  cars:"A lei limita <b>um carro por residência</b> e proíbe aluguel de automóveis, então há muitos <b>ciclomotores e motonetas</b> e carros compactos — a frota é visivelmente pequena e uniforme.",
  flora:"<b>Cedro-das-bermudas</b>, palmeiras, oleandros usados como cerca viva e hibiscos em jardins.",
  fauna:"Lagartixas e skinks, aves marinhas (longtails) nos penhascos; não há mamíferos terrestres nativos."
},

/* ---------------- OCEANIA ---------------- */
australia:{
  cars:"<b>Utes</b> (picapes Toyota Hilux, Ford Ranger, Isuzu D-Max) e SUVs 4x4 dominam. No Outback circulam <b>road trains</b> — caminhões com três ou quatro reboques.",
  flora:"<b>Eucaliptos com casca se descascando em tiras e folhagem cinza-esverdeada</b>, acácias (wattle) de flor amarela, spinifex em tufos no deserto e banksias no sudoeste.",
  fauna:"<b>Cangurus</b> com placas de aviso e frequentemente atropelados na beira da estrada, ovelhas e gado em massa, <b>cacatuas e papagaios coloridos em bandos</b>, emus e placas de coala."
},
"new-zealand":{
  cars:"Proporção muito alta de <b>importados japoneses usados</b> (Toyota, Nissan, Mazda com volante à direita), além de utes e caminhões de leite.",
  flora:"<b>Samambaias arbóreas (ponga)</b> com fronde prateada, <b>cabbage trees</b> — troncos finos com tufo de folhas espetadas no topo, muito característicos —, pinheiro-radiata em plantação e tussock dourado na Ilha Sul.",
  fauna:"<b>Ovelhas em quantidade enorme</b> e gado leiteiro em pasto verde; pukekos azuis de pernas longas nas valas, e placas de aviso de kiwi e pinguim em áreas costeiras."
},
guam:{
  cars:"Frota norte-americana com picapes e SUVs, além de muitos carros japoneses; veículos militares aparecem perto das bases.",
  flora:"Capim-espada alto em áreas abertas, coqueiros, selva densa e árvores ifit; vegetação marcada por tufões.",
  fauna:"<b>Galos de briga</b> em quintais, cervos filipinos introduzidos e búfalos carabao. O canto de aves é notavelmente ausente por causa da cobra-arbórea-marrom invasora."
},
"american-samoa":{
  cars:"Picapes e SUVs americanos, além de <b>ônibus 'aiga' com carroceria de madeira pintada</b> feitos artesanalmente sobre chassis de caminhão.",
  flora:"Coqueiros, taro em plantio, fruta-pão e floresta tropical densa cobrindo encostas muito íngremes.",
  fauna:"<b>Porcos soltos circulando pelas vilas</b>, cães, galinhas e <b>morcegos-frugívoros grandes voando à luz do dia</b> — cena bem característica."
},
"christmas-island":{
  cars:"Poucos veículos, quase todos <b>4x4 e picapes</b> ligados à mineração de fosfato e à administração do território.",
  flora:"Floresta tropical densa sobre platô calcário na Ilha Christmas; coqueiros e vegetação de atol nas Cocos.",
  fauna:"A <b>migração massiva de caranguejos vermelhos</b>, com placas, cercas-guia e passagens próprias sobre as estradas, é exclusiva da Ilha Christmas. Fragatas e atobás nos penhascos."
}
});
