import * as React from 'react';
import {DataTable, Text} from 'react-native-paper';
import { retrieveNaStandings } from "../lib/RetrieveStandings"

export default class StandingsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: null
        }
    }

    async componentDidMount() {
        const response = await retrieveNaStandings(this.props.url)
        this.setState({rows: response});
    }

    render() {
        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Team</DataTable.Title>
                    <DataTable.Title>Match Record</DataTable.Title>
                    <DataTable.Title>Game Record</DataTable.Title>
                    <DataTable.Title>Game +/-</DataTable.Title>
                </DataTable.Header>

                {
                    this.state.rows ?
                    this.state.rows.map(item => {
                        return (
                            <DataTable.Row>
                            <DataTable.Cell>{item.name}</DataTable.Cell>
                            <DataTable.Cell>{item.matchRecord}</DataTable.Cell>
                            <DataTable.Cell>{item.gameRecord}</DataTable.Cell>
                            <DataTable.Cell>{item.plusMinus}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    }) :
                        <Text>Loading...</Text>
                }
            </DataTable>
        );
    }
}