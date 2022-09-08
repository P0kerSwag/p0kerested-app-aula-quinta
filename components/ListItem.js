import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet, Image} from 'react-native'
import icon from '../imagens/etherium.png'
const ListItem = ({name, symbol,currentPrice, priceChangePercentage7d,logoUrl}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? 'green' : 'red'
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source= {{url: logoUrl}} style={styles.image}/>
                </View>
                <View style={styles.leftWrapper}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
            </View>
        </View>
        <View style={styles.rightWrapper}>
            <Text style={styles.title}>{currentPrice}</Text>
            <Text style={[styles.subtitle,{color: 'red'}]}>{priceChangePercentage7d}</Text>
        </View>
    </TouchableOpacity>
        
  )
}

const styles = StyleSheet.create({
    itemWrapper:{
        paddingHorizontal:16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alingItems: 'center',
    }, 
    leftWrapper:{
        flexDirection: 'row',
        alingItems: 'center',
    },
    rightWrapper:{
        alingItems: 'flex-end'
    },
    image: {
        width:48,
        height: 48, 
    },
    titlesWrapper: {
        marginLeft:8
    },
    title: {
        fontSize:18
    },
    subtitle: {
        marginTop:4,
        fontSize:14,
        color: '#A9ABB1',
    },
})
export default ListItem