import React, { Component } from 'react'
import {
    TouchableOpacity, TextInput, Image, View, Text,
    Selection, Button, TouchableHighlight, StyleSheet, ScrollView, Modal, Pressable
} from 'react-native'
import { Picker } from '@react-native-community/picker';
import CheckBox from '@react-native-community/checkbox';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default class FromRegister extends Component {
    state = {
        name: "",
        phone: "",
        store: "",
        province: "",
        district: "",
        wards: "",
        adress: "",
        check: false,
        modalVisible: false,
    }
    onPressRegister = () => {
        //  navigation.navigate("ưdw")
        this.setState({
            modalVisible: true
        })
    }
    setModal = (visible) => {
        this.setState({ modalVisible: visible })
    }
    setCheckbox = (newValue) => {
        this.setState({ check: newValue })
    }
    render() {
        console.log("check state", this.state)
        const { navigation } = this.props
        return (
            <View style={[styles.Container]}>
                <ScrollView style={{ flex: 1, }}  >
                    <View style={[styles.Header]}>
                        <TouchableOpacity style={{ width: 50, marginTop: 5 }}>
                            <View>
                                <Image style={[styles.icon]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhCN7Iz4OnKUt2tctw8Yf8lr_sq1IBwpYfA&usqp=CAU" }} />
                            </View>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: 15,
                            alignSelf: "center",
                            fontWeight: "bold",
                            bottom: 13,
                            color: "black"
                        }} >Đăng ký</Text>
                    </View>

                    <View style={[styles.Content]}>
                        <View>
                            <Text style={{ fontSize: 17, color: "green" }}>Thông tin đăng ký</Text>
                            <View style={[styles.viewLine]}></View>
                        </View>
                        <View>
                            <Text style={styles.font}>Họ & Tên *</Text>
                            <TextInput
                                style={{ height: 35 }}
                                placeholder="Nhập họ tên "
                                onChangeText={(name) => { this.setState({ name }) }}
                                value={this.state.name}
                            />
                            <View style={[styles.viewLine]}></View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, marginTop: 10, marginBottom: 5, color: "#333" }}>Số Điện Thoại *</Text>
                            <TextInput
                                style={{ height: 35 }}
                                placeholder="Nhập số điện thoại "
                                onChangeText={(phone) => { this.setState({ phone }) }}
                                value={this.state.phone}
                            />
                            <View style={[styles.viewLine]}></View>
                        </View>
                        <View>
                            <Text style={styles.font}>Tên Cửa Hàng *</Text>
                            <TextInput
                                style={{ height: 35 }}
                                placeholder="Nhập tên cửa hàng"
                                onChangeText={(store) => { this.setState({ store }) }}
                                value={this.state.store}
                            />
                            <View style={[styles.viewLine]}></View>
                        </View>
                        <View>
                            <Text style={styles.font}>Tỉnh Thành *</Text>
                            <Picker
                                selectedValue={this.state.province}
                                style={{ height: 38, marginBottom: 5 }}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ province: itemValue })}
                            >
                                <Picker.Item label="Thành Phố Hồ Chí Minh" value="Thành Phố Hồ Chí Minh" />
                                <Picker.Item label="An Giang" value="An Giang" />
                            </Picker>
                            <View style={[styles.viewLine]}></View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <Text style={styles.font}>Quận/Huyện *</Text>
                                <Picker
                                    selectedValue={this.state.district}
                                    style={{ height: 38, width: 180, marginBottom: 5 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ district: itemValue })}
                                >
                                    <Picker.Item label="Bình Thạnh" value="Bình Thạnh" />
                                    <Picker.Item label="Chợ Mới" value="Chợ Mới" />
                                </Picker>
                                <View style={{
                                    height: 1,
                                    width: "90%",
                                    backgroundColor: "black",
                                    marginTop: 5
                                }}></View>
                            </View>
                            <View >
                                <Text style={styles.font}>Phường/Xã *</Text>
                                <Picker
                                    selectedValue={this.state.wards}
                                    style={{ height: 38, width: 180, marginBottom: 5 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ wards: itemValue })}
                                >
                                    <Picker.Item label="Phường 5" value="Phường 5" />
                                    <Picker.Item label=" Phường 11" value=" Phường 11" />
                                </Picker>
                                <View style={{
                                    height: 1,
                                    width: "100%",
                                    backgroundColor: "black",
                                    marginTop: 5
                                }}></View>
                            </View>
                        </View>
                        <View>
                            <Text style={{ fontSize: 13, marginTop: 18, marginBottom: 5, color: "#333" }}>Địa chỉ *</Text>
                            <TextInput
                                style={{ height: 35 }}
                                placeholder="Nhập địa chỉ"
                                onChangeText={(adress) => { this.setState({ adress }) }}
                                value={this.state.adress}
                            />
                            <View style={[styles.viewLine]}></View>
                        </View>
                    </View>
                    <View style={[styles.footer]}>
                        <View>
                            <Text style={{ fontSize: 15, marginTop: 18, marginBottom: 5, color: "green" }}>Lưu ý</Text>
                            <View style={[styles.viewLine]}></View>
                            <Text style={{ marginTop: 5 }}>Bạn sẽ nhận được mã ký tự qua tin nhắn bao gồm 4 ký tự</Text>
                            <Text style={{ marginTop: 5 }} > Vui lòng điền vài ô xác nhận để hoàn tất đăng ký</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginTop: 5 }}>
                            <CheckBox
                                value={this.state.check}
                                onValueChange={(newValue) => this.setCheckbox(newValue)}
                            />
                            <Text>Tôi đồng ý với
                                <Text style={{ color: "green" }}>Điều Khoản Sử Dụng</Text> và
                                <Text style={{ color: "green" }}> Chính Sách Bảo Mật</Text>
                                của <Text style={{ color: "green" }}>Lộc Trời Bussiness</Text>
                            </Text>
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Modal
                                visible={this.state.modalVisible}
                                animationType='slide'
                                transparent={true}
                                onRequestClose={() => {
                                    Alert.alert("Modal has been closed.");
                                    this.setModal(!modalVisible);
                                }}
                            >
                                {this.state.name === "" ?
                                    <View style={[styles.modalView]}>
                                        <Text> Bạn Chưa Nhập Họ & Tên </Text>
                                        <TouchableOpacity
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => this.setModal(!this.state.modalVisible)}
                                        >
                                            <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                        </TouchableOpacity>
                                    </View> :
                                    (this.state.phone === "") ?
                                        <View style={[styles.modalView]}>
                                            <Text> Bạn Chưa Nhập số điện thoại và phải là số  </Text>
                                            <TouchableOpacity
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => this.setModal(!this.state.modalVisible)}
                                            >
                                                <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                            </TouchableOpacity>
                                        </View> :
                                        this.state.store === "" ?
                                            <View style={[styles.modalView]}>
                                                <Text> Bạn Chưa Nhập Cửa Hàng </Text>
                                                <TouchableOpacity
                                                    style={[styles.button, styles.buttonClose]}
                                                    onPress={() => this.setModal(!this.state.modalVisible)}
                                                >
                                                    <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                                </TouchableOpacity>
                                            </View>
                                            :
                                            this.state.adress === "" ?
                                                <View style={[styles.modalView]}>
                                                    <Text> Bạn Chưa Nhập Địa Chỉ</Text>
                                                    <TouchableOpacity
                                                        style={[styles.button, styles.buttonClose]}
                                                        onPress={() => this.setModal(!this.state.modalVisible)}
                                                    >
                                                        <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                                    </TouchableOpacity>
                                                </View> :
                                                this.state.check === false ?
                                                    <View style={[styles.modalView]}>
                                                        <Text> Bạn Chưa Đồng Ý Điều Khoản </Text>
                                                        <TouchableOpacity
                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => this.setModal(!this.state.modalVisible)}
                                                        >
                                                            <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                                        </TouchableOpacity>
                                                    </View> :
                                                    <View style={[styles.modalView]}>
                                                        <Text> Đăng ký thành công</Text>
                                                        <TouchableOpacity
                                                            style={[styles.button, styles.buttonClose]}
                                                            onPress={() => { this.setModal(!this.state.modalVisible); navigation.navigate("Product") }}
                                                        >
                                                            <Text style={{ color: "white", alignSelf: "center" }}>OK</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                }
                            </Modal>
                            <View  >
                                <TouchableOpacity onPress={() => { this.onPressRegister() }}>
                                    <View style={styles.Button}>
                                        <Text style={{ color: "white", marginTop: 5, alignSelf: "center" }}> Đăng Ký</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView >
            </View >

        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 10
    },
    Header: {
        height: 40,
        //backgroundColor: "skyblue",
        justifyContent: "space-around",
        //position: "absolute"
    },
    icon: {
        width: 40,
        height: 20,
        resizeMode: "center",
        marginTop: 10
    },
    font: {
        fontSize: 13,
        marginTop: 10,
        marginBottom: 5,
        color: "#333"
    },
    viewLine: {
        height: 1,
        width: "100%",
        backgroundColor: "black",
        marginTop: 5
    },
    Content: {
        flex: 4,
        // backgroundColor: "#ccc",
        flexDirection: "column",
        marginTop: 5
    },
    footer: {
        flex: 1,
        //backgroundColor: "blue"
        marginBottom: 15
    },
    Button: {
        borderRadius: 20,
        marginTop: 15,
        marginBottom: 20,
        width: 300,
        height: 32,
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: 'green'
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "green",
        width: 100,
        height: 40,
        marginTop: 5
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },


})