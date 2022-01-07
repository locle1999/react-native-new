import React, { Component } from 'react'
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    FlatList,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
class Product extends Component {

    addProduct = (aProduct) => {
        console.log("check add product", aProduct)
        this.props.addRedux(aProduct)
    }
    handleDelete = (aProduct) => {
        console.log("check aProduct delete", aProduct)
        this.props.deleteRedux(aProduct)
    }
    handleLoadMore = () => {
        console.log("Load More")
        this.props.LoadProductRedux()
    }
    render() {
        const { dataRedux, cartRedux, qualityRedux, activeRedux, isLoadingRedux } = this.props
        console.log("check state cart product", this.props)
        return (
            <View style={[styles.Container]}>
                <View style={[styles.Header]}>
                    <TouchableOpacity style={{ width: 50, marginTop: 5 }}>
                        <View>
                            <Image style={[styles.icon]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhCN7Iz4OnKUt2tctw8Yf8lr_sq1IBwpYfA&usqp=CAU" }} />
                        </View>
                    </TouchableOpacity>
                    <Text style={[styles.font]} >Cào liền tay may trúng lớn</Text>
                    <TouchableOpacity style={{ width: 50, marginTop: 5 }}>
                        <View style={{ height: 40, flexWrap: "wrap", alignSelf: "center" }}>
                            <Image style={[styles.icon]} source={require("../public/ic_black.png")} />
                            <View style={[styles.addItem]}>
                                <Text style={[styles.textHederIcon]}> {qualityRedux}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.listStyle]}>
                    <FlatList
                        numColumns={2}
                        data={dataRedux}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                // <ListProduct
                                //     item={item} index={index} addProduct={this.addProduct}>
                                // </ListProduct>)
                                < View >
                                    <View style={[styles.box, styles.item]}>
                                        <Image style={{ with: 60, height: 100, resizeMode: "center" }} source={{ uri: item.image }} />
                                        <Text numberOfLines={1}>___________________</Text>
                                        <Text style={{ marginTop: 5 }}>{item.titile}</Text>
                                        <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                                            <Text style={{ width: 80, alignSelf: "center" }} >{item.price}</Text>
                                            <TouchableOpacity style={{ width: 50, }}
                                                onPress={() => this.handleDelete(item)}  >
                                                <View>
                                                    {activeRedux === true ?
                                                        <Image style={[styles.icon]} source={require("../public/ic_black.png")} />
                                                        :
                                                        <Image style={[styles.icon]} source={require("../public/ic_cart_active.png")} />}
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View >)
                        }}
                        onEndReached={this.handleLoadMore}
                    />
                </View>
            </View >
        )
    }
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: "column",
    },
    Header: {
        flex: 0.15,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    listStyle: {
        flex: 2,
        flexWrap: "wrap",
    },
    box: {
        margin: 15,
        width: 150,
        height: 230,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,

    },
    item: {
        padding: 16,
        marginTop: 10,

    },
    icon: {

        width: 40,
        height: 30,
        alignSelf: "flex-end",
        resizeMode: "center",


    },
    font: {
        fontSize: 15,
        alignSelf: "center",
        fontWeight: "bold"
    },
    addItem: {
        backgroundColor: "red",
        width: 15,
        height: 15,
        borderRadius: 100 / 2,
        position: "absolute",
        alignSelf: "flex-end"
    },
    iconHeader: {

        width: 40,
        height: 30,
        alignSelf: "flex-end",


    },
    textHederIcon: {
        color: "#fff",
        top: 1,
        alignSelf: "center",
        bottom: 3,
        fontSize: 9
    }
})
const mapStateToProps = (state) => {
    return {
        dataRedux: state.Data,
        cartRedux: state.Cart,
        qualityRedux: state.quality,
        activeRedux: state.active,
        isLoadingRedux: state.isLoading
    }
}
const mapDispatch = (dispatch) => {
    return {
        deleteRedux: (aProduct) => dispatch({ type: "DELETE_PRODUCT", payload: aProduct }),
        addRedux: (aProduct) => dispatch({ type: "ADD_PRODUCT", payload: aProduct }),
        LoadProductRedux: () => dispatch({ type: "LOAD" })
    }
}
export default connect(mapStateToProps, mapDispatch)(Product);