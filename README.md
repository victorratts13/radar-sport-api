![logo](https://github.com/victorratts13/radar-sport-api/blob/master/assets/img/radar-logo-2.png?raw=true)
![versão](https://img.shields.io/badge/Vers%C3%A3o-1.0.4-brightgreen) ![lang](https://img.shields.io/badge/Language-JavaScript-yellowgreen) ![man](https://img.shields.io/badge/Mananger-NPM-red)

# Resumo
Radar Sport API é uma biblioteca para desenvolvimento de dados e estatisticas de jogos e casas de apostas para desenvolvimento de sistemas automatizados e cruzamento de dados. Nele é encontrado os dados e estatisticas das maiores casas de apostas.
com ele é possivel obter dados de times, ligas, informações de jogos (passados ao vivo ou futuros) e com amplo esquema estatisticas.

## Casas de aposta suportadas

é possivel obter dados e analises de diversas casas de apostas como:

- bet365
- betway
- betFair
- betano
- rivalo
- tipbet
- 888sport
- sportingbet

## instalação
Para instalar ultilize o npm gerenciar os pacotes
~~~bash
~$ npm install radar-sport-api --save
~~~

## configuração da casa de aposta

apos a instalação, importe a biblioteca e defina a sua betPlace

~~~javascript
//importe as bibliotecas de classe
const { sportApi } = require('radar-sport-api');
//contrua as classes
const betfair = new sportApi('betfair', { getCommonContents: false });
const bet365 = new sportApi('bet365', { getCommonContents: false });
~~~

>- OBS: ```getCommonContents``` é um metodo ultilizado para obter os "status" de servidores da sua casa de aposta. Caso haja necessidade de ultilizar, defina como ```true```

## Requisitando dados

a requisição de dados é feita de forma simples. Definindo 
- Região
- metodo
- valor

onde: 
*Methodo* é o dado q se deseja obter ou endpoind a acessar
*Região* é a hora regional q se deseja obter
*valor* é o valor é chave ou Id de requisição.

para isso, execute como exemplo:

~~~javascript
betfair.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})
~~~

você obterá isso: 
~~~node
{
  event: 'stats_season_meta',
  _dob: 1593747415,
  _maxage: 3600,
  data: {
    season: {
      _id: '76415',
      _doc: 'season',
      _utid: 325,
      _sid: 1,
      name: 'Brasileiro Serie A 2020',
      abbr: 'BSA 2020',
      start: [Object],
      end: [Object],
      neutralground: false,
      friendly: false,
      currentseasonid: 76415,
      year: '2020',
      coverage: [Object],
      h2hdefault: [Object]
    },
    sport: { _doc: 'sport', _id: 1, _sid: 1, name: 'Soccer' },
    realcategory: {
      _doc: 'realcategory',
      _id: 13,
      _sid: 1,
      _rcid: 13,
      name: 'Brazil',
      cc: [Object]
    },
    tournamentids: [ 83 ],
    tableids: [ 50119 ],
    cupids: [],
    uniquetournament: {
      _doc: 'uniquetournament',
      _id: 325,
      _utid: 325,
      _sid: 1,
      _rcid: 13,
      name: 'Brasileiro Serie A',
      currentseason: 76415,
      friendly: false
    },
    statscoverage: {
      complexstat: true,
      livetable: true,
      halftimetable: true,
      overunder: true,
      overunderhalftime: true,
      fixtures: true,
      leaguetable: true,
      tablerules: true,
      headtohead: true,
      formtable: true,
      secondhalftables: true,
      divisionview: true,
      matchdetails: true,
      lineups: true,
      formations: true,
      topgoals: true,
      topassists: true,
      disciplinary: true,
      redcards: true,
      yellowcards: true,
      goalminute: true,
      goalminscorer: true,
      substitutions: true,
      squadservice: true,
      livescoreeventthrowin: true,
      livescoreeventgoalkick: true,
      livescoreeventfreekick: true,
      livescoreeventshotsoffgoal: true,
      livescoreeventshotsongoal: true,
      livescoreeventgoalkeepersave: true,
      livescoreeventcornerkick: true,
      livescoreeventoffside: true,
      livescoreeventfouls: true,
      livescoreeventpossesion: true,
      referee: true,
      stadium: true,
      staffmanagers: true,
      staffteamofficials: false,
      staffassistantcoaches: false,
      jerseys: true
    }
  }
}
~~~
## Lista de Esportes

cada esporte, possui uma id que por definição, executa cunções de dentro da api para a biblioteca. Aqui está uma lista de Esportes e suas IDs

esporte | id
--------|-----
Futebol Americano | 16
Futebol Australiano | 13
Andebol | 6
badminton | 31
bandy | 15
basebal | 3
basquetebol | 2
Ciclismo | 7
Corridas Motorizadas | 190
Corridas Touring Car | 188
Corridas de Stock Car | 191
Counter-Strike | 109
Cricket | 21
Dardos | 22
Corrida de Motos | 11
DOTA | 11
FloorBall | 7
Futebol | 1
Futebol de praia | 60
Futsal | 29
Formula 1 | 40 
Hoquei de Campo | 24
Hoquei de gelo | 4
Corrida Indy | 129
League Of Legends | 110
Polo Aquatico | 26
Rugby | 12
Speedway | 131
Tenis | 5
Tenis de mesa | 20
Volei | 23
Volei de praia| 34

## Regiões

Atualmente as regiões e horarios suportados são:

região | hora
-------|-------
America:Argentina:Buenos_Aires | GMT-3
Europe:Berlin | GMT+2

## Metodo ``sportData`` Para analise de dados

para api de analise informações em massa, utilize a classe ``sportData`` para obter as informações que precisa.

```js
//importe as bibliotecas de classe
const { sportData } = require('radar-sport-api');
//contrua as classes
const betfair = new sportData('betfair', { 
  languageId: '514d1e14ad5c11eeebf17ba7f5dc97ad', 
  server: 'gismo', 
  getCommonContents: false, 
  lang: 'en'
});

betfair.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})
```

## Obtendo dados atraves de um path especifico.

Caso conheça as rotas de indexação da S5 do [sport-radar](https://s5.sir.sportradar.com/), você pode obter as informações necessarias atraves de um path especifico.

```js
betfair.getByPath('en/America:Montevideo/gismo/config_tree_mini/41/0/16').then(data => {
  console.log(data)
})
```

#### Notas de desenvolvimento

Para mais informações:

> Telegram: @VictorRatts
> email: victor.ratts13@gmail.com