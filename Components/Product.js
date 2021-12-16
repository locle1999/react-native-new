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
    TouchableOpacity
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import { Icon } from 'react-native-vector-icons/FontAwesome';
// import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

class ListProduct extends Component {
    state = {
        aProduct: {
            id: '',
            image: '',
            titile: '',
            price: ''
        },
        quality: 0,
        ative: true,
    }
    onPress = () => {
        console.log("check item", this.props)
        let { item } = this.props
        // let { product } = this.props
        console.log("check state produr", this.state.aProduct)
        this.props.addProduct({
            id: item.id,
            image: item.image,
            titile: item.titile,
            price: item.price
        })
        this.setState({
            ative: false,
            quality: this.state.quality + 1
        })
    }
    // onPressOut = () => {
    //     alert("dcdcdcd")
    // }
    render() {
        console.log("check state", this.state.product, this.state.quality)
        return (
            < View >
                <View style={[styles.box, styles.item]}>
                    <Image style={{ with: 60, height: 100, resizeMode: "center" }} source={{ uri: this.props.item.image }} />
                    <Text numberOfLines={1}>___________________</Text>
                    <Text style={{ marginTop: 5 }}>{this.props.item.titile}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
                        <Text style={{ width: 80, alignSelf: "center" }} >{this.props.item.price}</Text>
                        <TouchableOpacity style={{ width: 50, }}
                            onPress={() => this.onPress()}  >
                            <View>
                                {this.state.ative === true ?
                                    <Image style={[styles.icon]} source={require("../public/ic_black.png")} />
                                    :
                                    <Image style={[styles.icon]} source={require("../public/ic_cart_active.png")} />}
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}

export default class Product extends Component {
    state = {
        product: [],
        quality: 0,
        ative: true,
    }
    addProduct = (aProduct) => {
        console.log("check add product", aProduct)
        if (this.state.product.findIndex(e => e.id === aProduct.id)) {
            this.setState({
                product: [...this.state.product, aProduct],
                quality: this.state.quality + 1
            })
        } else {
            this.setState({
                product: this.state.product.splice(aProduct.id, 1),
                ative: false,
                quality: this.state.quality - 1
            })
        }
    }
    render() {
        console.log("check state after add product", this.state.product, this.state.quality)
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
                                <Text style={[styles.textHederIcon]}> {this.state.quality}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.listStyle]}>
                    <FlatList
                        numColumns={2}
                        data={Data}
                        keyExtractor={item => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <ListProduct product={this.state.product}
                                    item={item} index={index} addProduct={this.addProduct}>
                                </ListProduct>)
                        }}
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
        // backgroundColor: "red",
        // paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-around"

    },
    listStyle: {
        flex: 2,
        flexWrap: "wrap",
        // backgroundColor: "blue",


    },
    box: {
        margin: 15,
        width: 150,
        height: 230,
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 1,
        //backgroundColor: "#ccc",
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
const Data = [
    {
        id: '1',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: "300,000đ"
    },
    {
        id: '2',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '400.000đ'
    },
    {
        id: '3',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '200.000đ'
    },
    {
        id: '4',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '250.000đ'
    },
    {
        id: '5',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '200.000đ'
    },
    {
        id: '6',
        image: "https://nongduocxanh.com/wp-content/uploads/2020/04/sach-ray.jpg",
        titile: "Admitox 100SL – Sạch rầy hiệu quả",
        price: '250.000đ'
    },

]