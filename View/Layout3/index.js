import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Layout3 = ({ route, navigation }) => {
    const { name, price, image } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centeredView}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: image }} style={styles.image} resizeMode='contain' />
                </View>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{name}</Text>
                <Text style={styles.priceText}>
                    <Text style={styles.discountText}>15% OFF | 350$</Text>
                    <Text style={styles.originalPrice}> {price}$</Text>
                </Text>
                <Text style={styles.descTitle}>Description</Text>
                <Text style={styles.descText}>
                    It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
                </Text>
            </View>

            <View style={styles.actionContainer}>
                <Image source={require('../../assets/akar-icons_heart.png')} style={styles.heartIcon} resizeMode='contain' />
                <TouchableOpacity onPress={() => navigation.navigate("Layout2")}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add to card</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 15,
        alignItems: "center"
    },
    centeredView: {
        flex:8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 375,
        height: 350,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(233, 65, 65, 0.1)",
        borderRadius: 5,
    },
    image: {
        width: 297,
        height: 300,
    },
    textContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: 15,
    },
    titleText: {
        fontFamily: 'Voltaire',
        fontSize: 35,
        fontWeight: '400',
    },
    priceText: {
        fontFamily: 'Voltaire',
        fontSize: 35,
        fontWeight: '400',
        marginTop: 10,
    },
    discountText: {
        color: "#00000096",
    },
    originalPrice: {
        marginLeft: 41,
        textDecorationLine: 'line-through',
    },
    descTitle: {
        fontFamily: "Voltaire",
        fontSize: 25,
        fontWeight: "400",
        marginTop: 25,
    },
    descText: {
        fontFamily: "Voltaire",
        fontSize: 22,
        color: "rgba(0, 0, 0, 0.57)",
        fontWeight: "400",
        marginTop: 31,
    },
    actionContainer: {
        flex: 2,
        paddingTop : 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 11,
        gap : 75,
    },
    heartIcon: {
        width: 35,
        height: 35,
    },
    button: {
        width: 269,
        height: 54,
        backgroundColor: "rgba(233, 65, 65, 1)",
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "rgba(255, 250, 250, 1)",
        fontFamily: "Voltaire",
        fontSize: 25,
        fontWeight: "400",
    },
});

export default Layout3;
