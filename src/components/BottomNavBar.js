import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StandingsList from "./StandingsList";

const StandingsRoute = () => <StandingsList rows={rows}/>;
const MatchesRoute = () => <Text>Matches</Text>;
const AboutRoute = () => <Text>About the creator Liquipedia RL is the data source</Text>;

const rows = [
    {
        name: 'G2 Esports',
        matchRecord: '4-0',
        gameRecord: '12-3',
        plusMinus: '+9'
    },
    {
        name: 'NRG Esports',
        matchRecord: '4-1',
        gameRecord: '14-7',
        plusMinus: '+7'
    },
];

export default class BottomNavBar extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'standings', title: 'Standings', icon: 'podium' },
            { key: 'matches', title: 'Matches', icon: 'soccer' },
            { key: 'about', title: 'About', icon: 'information' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        standings: StandingsRoute,
        matches: MatchesRoute,
        about: AboutRoute,
    });

    render() {
        return (
            <BottomNavigation
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}