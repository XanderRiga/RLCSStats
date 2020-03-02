import * as React from 'react';
import { DataTable } from 'react-native-paper';

export default class StandingsList extends React.Component {
    render() {
        return (
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Team</DataTable.Title>
                    <DataTable.Title>Match Record</DataTable.Title>
                    <DataTable.Title>Game Record</DataTable.Title>
                    <DataTable.Title>Game +/-</DataTable.Title>
                </DataTable.Header>

                {this.props.rows.map(item => {
                    return (
                        <DataTable.Row>
                            <DataTable.Cell>{item.name}</DataTable.Cell>
                            <DataTable.Cell>{item.matchRecord}</DataTable.Cell>
                            <DataTable.Cell>{item.gameRecord}</DataTable.Cell>
                            <DataTable.Cell>{item.plusMinus}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })}
            </DataTable>
        );
    }
}