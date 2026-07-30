# Atlas de Metas do GeoGuessr

Site estático em português com um guia de reconhecimento geográfico por imagem,
cobrindo **111 países e territórios** com cobertura de Street View, mais **14 guias
transversais** de metas globais.

## Como abrir

Dê um duplo clique em `index.html`. Não há build, servidor ou dependência externa —
o site funciona offline, direto do sistema de arquivos.

## O que tem em cada país

- **Identificação rápida** — os 4 a 5 sinais que fecham o país mais depressa
- **Ficha** — direção, idioma, escrita, domínio, cobertura e placa do veículo
- **Metas detalhadas** — carro Google, delineadores, postes, marcação de solo,
  sinalização, arquitetura, natureza e um detalhe fino
- **Pistas vivas** — frota de veículos (marcas e transporte coletivo típicos),
  flora indicadora e animais visíveis
- **Divisão regional** — como a paisagem muda dentro do próprio país
- **Confusões comuns** — o vizinho parecido e o que separa os dois

## Recursos

- Busca full-text sobre todo o conteúdo, sem acento e com múltiplas palavras
  (ex.: `minarete quadrado`, `transformador cinza`, `cegonha`, `dacia`, `lhama`)
- Filtros por região, lado da direção e nível de dificuldade
- Tema claro e escuro, com preferência salva no navegador
- Link direto para cada país pela URL (`index.html#/brazil`)
- Atalhos: `/` foca a busca · `←` `→` navegam entre países · `Esc` fecha o painel

## Estrutura

```
index.html
assets/
  css/style.css
  js/
    data-europe.js     47 territórios
    data-asia.js       27
    data-americas.js   18
    data-africa.js     14
    data-oceania.js     5
    data-extra.js      pistas vivas (frota, flora, fauna) dos 111
    guides.js          14 guias transversais
    app.js             interface
```

O `data-extra.js` é mesclado por `id` sobre os países definidos nos `data-*.js`,
então dá para editar as pistas vivas sem tocar nos arquivos base.

## Editando o conteúdo

Cada país é um objeto nos arquivos `data-*.js`. Os campos aceitam HTML simples
(`<b>` para destaque). Ao alterar qualquer arquivo em `assets/`, incremente o
número em `?v=` nas tags `<script>` e `<link>` do `index.html` para evitar cache
antigo do navegador.

## Sobre a precisão

As metas mudam: o Google refotografa países periodicamente, e detalhes como o
veículo de captura, a qualidade da imagem e a sinalização podem ter mudado desde
a última cobertura. Pistas de **infraestrutura e escrita** são as mais estáveis;
pistas de **câmera e veículo** são as mais voláteis.
