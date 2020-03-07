const axios = require('axios');
const HTMLParser = require('fast-html-parser');
const _ = require('lodash');

export function retrieveNaStandings(url) {
    return axios({method: 'GET', url: url, headers: { 'User-Agent': 'RLCS Scores Mobile App - xanderriga.com'}})
        .then(function (response) {
            const root = HTMLParser.parse(response.data.parse.text['*']);
            const rows = root.querySelectorAll('.grouptable')[0].childNodes[0].childNodes;
            const standingsNodes = _.takeRight(rows, 10);
            return _.map(standingsNodes, function (node) {
                const text = _.split(node.structuredText, '\n');
                const plusMinus = text[4];
                const gameRecord = text[3];
                const matchRecord = text[2];
                const name = text[1];
                return {
                    name: name,
                    matchRecord: matchRecord,
                    gameRecord: gameRecord,
                    plusMinus: plusMinus
                }
            });
        })
        .catch(function (error) {
            console.log(error);
            return [];
        });

    // This is how we test with the TestData instead
    // const root = HTMLParser.parse(naRlcsJson.parse.text["*"]);
}