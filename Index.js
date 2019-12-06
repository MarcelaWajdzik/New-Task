import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Image } from 'react-native';

class Index extends React.Component {
    state = {}

    componentDidMount() {
        fetch('http://xkcd.com/info.0.json')
            .then((response) => response.json())
            .then((data) => this.setState({
                newText: data.title,
                newMonth: data.month,
                newYear: data.year,
                newImg: data.img,
            }));
    }

    render() {
        var icon = this.state.newImg
        return (
            < View style={styles.smallContainer} >
                <Text>{this.state.newText} </Text>
                <Text>{this.state.newMonth} </Text>
                <Text>{this.state.newYear} </Text>
                <Image source={icon} />
            </View >)

    }
}
export default Index;

const styles = StyleSheet.create({
    smallContainer: {
        marginTop: 10,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'yellow',
        padding: 20,
    },

});