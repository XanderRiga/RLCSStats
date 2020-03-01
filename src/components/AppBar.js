import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class AppBar extends React.Component {
    _goBack = () => console.log('Went back');

    render() {
        return (
            <Appbar.Header>
                <Appbar.BackAction
                    onPress={this._goBack}
                />
                <Appbar.Content
                    title="Title"
                />
            </Appbar.Header>
        );
    }
}