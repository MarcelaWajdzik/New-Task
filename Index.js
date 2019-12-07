import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { Image } from 'react-native';

class Index extends React.Component {
    state = {
        newData: []
    }

    componentDidMount() {
        for (let i = 0; i < 8; i++) {
            return fetch('http://xkcd.com/' + i + '/info.0.json')
                .then((response) => response.json())
                .then((data) => {
                    this.setState({
                        newData: newData.push(data)
                    })
                })
        }

    }

    render() {

        const posts = this.state.newData

        return (posts.map(post => {
            return (
                < View style={styles.parentContainer} key={post.num} >

                    <View style={styles.childContainer}>
                        <Text style={styles.paragraph}>Opis: {post.title} </Text>
                        <Text style={styles.paragraphSmall}>Dodano: {post.day}/{post.moth}/{msContentScript.year} </Text>
                    </View>
                    <View style={styles.childContainer}>
                        <Image source={{ uri: post.img }} style={{ width: 150, height: 150 }} />
                    </View>
                </View >)
        }))

    }
}





export default Index;

const styles = StyleSheet.create({
    parentContainer: {
        flexDirection: "row",
        marginTop: 10,
        width: '100%',
        backgroundColor: 'beige',
        padding: 5,

    },
    childContainer: {
        justifyContent: 'center',
        flex: 1,
        padding: 5,
    },
    paragraph: {
        fontSize: 20,
        color: 'red',
    },
    paragraphSmall: {
        fontStyle: 'italic',
    }

});


/* return (
    < View style={styles.parentContainer} key={post.num} >

        <View style={styles.childContainer}>
            <Text style={styles.paragraph}>Opis: {post.title} </Text>
            <Text style={styles.paragraphSmall}>Dodano: {post.day}/{post.moth}/{msContentScript.year} </Text>
        </View>
        <View style={styles.childContainer}>
            <Image source={{ uri: post.img }} style={{ width: 150, height: 150 }} />
        </View>
    </View >
) */