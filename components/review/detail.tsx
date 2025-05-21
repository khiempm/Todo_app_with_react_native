import { StyleSheet, Text, View } from "react-native"

const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: "OpenSans-Regulars"
    }
})
const DetailScreen = () => {
    return (
        <View>
            <Text style={styles.review}>
                Detail Screen
            </Text>
        </View>
    )
}

export default DetailScreen