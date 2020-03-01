import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const StandingsRoute = () => <Text>Standings</Text>;
const MatchesRoute = () => <Text>Matches</Text>;
const AboutRoute = () => <Text>About the creator Liquipedia RL is the data source</Text>;

export default class BottomNavBar extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'standings', title: 'Standings', icon: 'podium' },
            { key: 'matches', title: 'Matches', icon: 'home' },
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