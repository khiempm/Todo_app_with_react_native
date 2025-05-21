import { Button, Text, View } from "react-native"

const HomeScreen = (props: any) => {
    const {navigation} = props;
    return (
        <View>
            <Text>
                Home Screen
            </Text>
            <Button title="View Detail" onPress={() => navigation.navigate("review-detail")}/>
        </View>
    )
}

export default HomeScreen