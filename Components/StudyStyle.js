import React, { Component } from 'react'
import { View, Text, Selection, Button, TouchableHighlight, StyleSheet } from 'react-native'

export default class StudyStyle extends Component {
    render() {
        return (
            <>
                <View style={{ flex: 1, flexDirection: 'column' }}>

                    <View style={{ flex: 2, backgroundColor: "yellow" }} />
                    <View style={{ flex: 2, backgroundColor: "red", }} />
                    <View style={{ flex: 3, backgroundColor: "blue" }} />
                    <View style={{
                        width: 150, height: 80,
                        backgroundColor: "skyblue", position: "absolute", top: 130
                    }} />
                    <Text style={[
                        styles.font,
                        {
                            position: 'absolute',
                            left: 200,
                            top: 145,
                        }]}>
                        Đây là Title</Text>

                    <Text style={[
                        styles.font,
                        {
                            position: 'absolute',
                            alignSelf: "flex-end",
                            bottom: 100
                        }]}>
                        Content
                    </Text>

                </View >
            </>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        alignItems: "center",
    },
    red: {
        color: 'red'
    },
    font: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backgroundColor: {
        backgroundColor: "skyblue"
    },
    box: {
        backgroundColor: "skyblue"
    }
});
