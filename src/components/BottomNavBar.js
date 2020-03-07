import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import StandingsList from "./StandingsList";

const naRlcsSeason9 = 'https://liquipedia.net/rocketleague/api.php?action=parse&format=json&pageid=81053&prop=text&section=10';

const StandingsRoute = () => <StandingsList url={naRlcsSeason9}/>;
const MatchesRoute = () => <Text>Matches</Text>;
const AboutRoute = () => <Text>All of the data used in this application is provided by Liquipedia RL</Text>;

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