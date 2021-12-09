const {sportApi, sportData} = require('./index');

const betfair = new sportApi('betfair', { getCommonContents: false });
const bet365 = new sportApi('bet365', { getCommonContents: false });

//sport.bettingHouse()

// sport.allDefinitions('frame_data_id').then((all) => {
//     console.log(all)
// })

// sport.modalData('1', 'categories').then((sport) => {
//     console.log(sport)
// })

// sport.localData(1, 18, 'all').then((local) => {
//     console.log(local)
// })

// sport.liague(66775).then((ligue) => {
//     console.log(ligue)
// })

// sport.liagueSummary(66775).then((sumary) => {
//     console.log(sumary)
// })

// sport.seasonGoals(66775).then((goals) => {
//     console.log(goals)
// })

sport.getInfo('Europe:Berlin', 'stats_season_meta', 76415).then((data) => {
    console.log(data)
})