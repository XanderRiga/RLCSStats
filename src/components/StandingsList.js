import * as React from 'react';
import { List } from 'react-native-paper';

const StandingsList = () => (
    <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
    />
);

export default StandingsList;