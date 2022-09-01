import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'

const ListItem = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source= {{uri: logoUrl}} style={styles.image}/>
                </View>
                <View style={styles.leftWrapper}>
                <Text style={styles.title}>Etherium</Text>
                <Text style={styles.subtitle}>ETH</Text>
            </View>
        </View>
        <View style={styles.rightWrapper}>
            <Text style={styles.title}>Etherium</Text>
            <Text style={[styles.subtitle,{color: 'red'}]}>ETH</Text>
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
    image: {},
    titlesWrapper: {},
    title: {},
    subtitle: {},
})
export default ListItem