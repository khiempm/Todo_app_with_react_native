import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "column"
  },

  item1: {
    backgroundColor: "violet",
    padding: 30
  },

  item2: {
    backgroundColor: "orange",
    padding: 30
  },
  
  item3: {
    backgroundColor: "cyan",
    padding: 30
  },

  item4: {
    backgroundColor: "green",
    padding: 30
  },
});
const FLexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item1}>
        <Text>item 1</Text>
      </View>

      <View style={styles.item2}>
        <Text>item 2</Text>
      </View>

      <View style={styles.item3}>
        <Text>item 3</Text>
      </View>

      <View style={styles.item4}>
        <Text>item 4</Text>
      </View>

    </View>
  );
};

export default FLexBox;
