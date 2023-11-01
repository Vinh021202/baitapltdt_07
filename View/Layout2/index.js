import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, SafeAreaView , TextInput} from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'; 

const Layout2 = ({navigation}) => {
    const [data, setData] = React.useState([
        { id: '1', type: 'Mountain',image: require('../../assets/bifour_-removebg-preview.png'), name: 'Pinarello', price: '$1800' },
        { id: '2', type: 'Mountain',image: require('../../assets/bione-removebg-preview.png'), name: 'Pina Mountai', price: '$1700' },
        { id: '3', type: 'Mountain', image: require('../../assets/bithree_removebg-preview.png'), name: 'Pina Bike', price: '$1500' },
        { id: '4', type: 'Roadbike',image: require('../../assets/bitwo-removebg-preview.png'), name: 'Pinarello', price: '$1900' },
        { id: '5', type: 'Roadbike',image: require('../../assets/bithree_removebg-preview.png'), name: 'Pinarello', price: '$2700' },
        { id: '6', type: 'Roadbike',image: require('../../assets/bitwo-removebg-preview.png'), name: 'Pinarello', price: '$1350' },
      ]);
      const [selectedType, setSelectedType] = React.useState("All");
      const [showAll, setShowAll] = useState(false);
    
    return (
        <SafeAreaView style={{ flex: 1, padding: 10, backgroundColor: '#fff' }}>
        <View style={{ justifyContent: 'center', paddingTop: 15 }}>
            <Text style={{ color: "#E94141", fontSize: 25, fontFamily: "Ubuntu", fontWeight: "700" }}>
                The world’s Best Bike
            </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, paddingTop: 25 }}>
            {/* The buttons here have been corrected to match the design's text */}
            <TouchableOpacity 
                style={[styles.typeButton, selectedType === 'All' && styles.selectedType]} 
                onPress={() => setSelectedType('All')}>
                <Text style={[styles.buttonText, selectedType === 'All' && styles.selectedButtonText]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.typeButton, selectedType === 'Roadbike' && styles.selectedType]} 
                onPress={() => setSelectedType('Roadbike')}>
                <Text style={[styles.buttonText, selectedType === 'Roadbike' && styles.selectedButtonText]}>Roadbike</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.typeButton, selectedType === 'Mountain' && styles.selectedType]} 
                onPress={() => setSelectedType('Mountain')}>
                <Text style={[styles.buttonText, selectedType === 'Mountain' && styles.selectedButtonText]}>Mountain</Text>
            </TouchableOpacity>
        </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <FlatList
                data={data.filter((item) => selectedType === "All" || item.type === selectedType)}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={()=>{navigation.navigate({
                        name: "Layout3",
                        params: {
                            name: item.name,
                            price: item.price,
                            image: item.image,
                        }
                    
                    })}}>
                        <View style={styles.item}>
                        <View style={{flexDirection: "row", justifyContent: 'center'}}>
                            <Image source={require('../../assets/heart.png')}
                            style={{width: 25, height: 25,}}
                            resizeMode='contain'
                            />
                        <Image source={item.image} 
                            style={{width: 135, height: 127}}
                            resizeMode='contain'
                        />
                        </View>
                        
                        <Text style={styles.itemname}>{item.name}</Text>
                        <Text style={{fontSize: "20px", fontFamily: "Voltaire"}}>
                            <Text style={{color: "rgba(247, 186, 131, 1)",}}>$ </Text>
                            <Text>{item.price}</Text>
                        </Text>
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
        </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    typeButton: {
        width: "99px",
        height: "32px",
        borderWidth: "1px",
        borderColor: "red",
        borderRadius: "5px",
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedType: {
        backgroundColor: '1px solid #E9414187' ,
    },
    buttonText: {
        fontSize: "15px",
        fontWeight: "400",
        color: '#BEB6B6',
    },
    selectedButtonText: {
        color: '1px solid #E9414187',
    },
    item:{
        width: "167px", 
        height: "200px", 
        backgroundColor: "#F7BA8326", 
        borderRadius: "10px", 
        justifyContent: 'center', 
        alignItems: 'center',
        marginHorizontal: "10px",
        marginVertical: "10px",
    },
    itemname:{
        fontFamily: "Voltaire",
        fontSize: "20px",
        fontWeight: "400",

    },
})
export default Layout2;