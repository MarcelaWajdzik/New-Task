import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Image } from 'react-native';

class Index extends React.Component {
    state = {

    }

    componentDidMount() {
        return fetch('http://xkcd.com/6/info.0.json')
            /* return fetch('http://xkcd.com/'+number +'/info.json') */
            .then((response) => response.json())
            .then((data) => this.setState({
                newText: data.title,
                newDay: data.day,
                newMonth: data.month,
                newYear: data.year,
                newImg: data.img,
            }));


    }
    render() {

        return (

            < View style={styles.parentContainer} >
                <View style={styles.childContainer}>
                    <Text style={styles.paragraph}>Opis: {this.state.newText} </Text>
                    <Text style={styles.paragraphSmall}>Dodano: {this.state.newDay}/{this.state.newMonth}/{this.state.newYear} </Text>
                </View>
                <View style={styles.childContainer}>
                    <Image source={{ uri: this.state.newImg }} style={{ width: 150, height: 150 }} />
                </View>

            </View >

        )
    }
}
export default Index;

const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        marginTop: 10,
        width: '100%',
        backgroundColor: 'beige',
        padding: 10,

    },
    childContainer: {
        justifyContent: 'center',
    },
    paragraph: {
        fontSize: 20,
        color: 'red',
    },
    paragraphSmall: {
        fontStyle: 'italic',
    }

});