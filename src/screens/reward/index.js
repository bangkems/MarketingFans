import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Avatar, Card, Chip } from "react-native-paper";
import NavigationService from "../../navigation/NavigationService";

export default class Rewards extends React.Component {
  render() {
    return (
      <>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            {/* satu card */}
            <Card style={styles.card}>
              <Avatar.Image
                style={styles.avatarBulat}
                size={64}
                source={{
                  uri:
                    "https://cdn.icon-icons.com/icons2/1465/PNG/512/666wrappedgift2_100993.png",
                }}
              />

              <Card.Content>
                <Text style={styles.titleCard}>1 Buah Powerbank</Text>
                <View style={styles.chiprow}>
                  <Chip style={styles.chipUndian} textStyle={styles.chiptext}>
                    Undian 21 April 2020
                  </Chip>
                </View>
              </Card.Content>
              <Text
                style={styles.tombolLink}
                onPress={() => NavigationService.navigate("DetailReward")}
              >
                Detail
              </Text>
            </Card>

            {/* satu card */}
            <Card style={styles.card}>
              <Avatar.Image
                style={styles.avatarBulat}
                size={64}
                source={{
                  uri:
                    "https://cdn.icon-icons.com/icons2/1465/PNG/512/666wrappedgift2_100993.png",
                }}
              />

              <Card.Content>
                <Text style={styles.titleCard}>Rp. 320.596</Text>
                <View style={styles.chiprow}>
                  <Chip style={styles.chipKomisi} textStyle={styles.chiptext}>
                    Komisi 10%
                  </Chip>
                </View>
              </Card.Content>
              <Text
                style={styles.tombolLink}
                onPress={() =>
                  NavigationService.navigate("DetailReward_Komisi")
                  // NavigationService.navigate("DetailReward_Komisi")
                }
              >
                Detail
              </Text>
            </Card>

            {/* satu card */}
            <Card style={styles.card}>
              <Avatar.Image
                style={styles.avatarBulat}
                size={64}
                source={{
                  uri:
                    "https://cdn.icon-icons.com/icons2/1465/PNG/512/666wrappedgift2_100993.png",
                }}
              />

              <Card.Content>
                <Text style={styles.titleCard}>1 Dus Indomie</Text>
                <View style={styles.chiprow}>
                  <Chip
                    style={styles.chipHadiahLangsung}
                    textStyle={styles.chiptext}
                  >
                    Hadiah 
                  </Chip>
                </View>
              </Card.Content>
              <Text
                style={styles.tombolLink}
                onPress={() =>
                  NavigationService.navigate("DetailReward_Hadiah")
                }
              >
                Detail
              </Text>
            </Card>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  scrollView: {
    backgroundColor: "#fafafa",
  },
  button: {
    margin: 20,
    // bottom: 50,
    backgroundColor: "#0055a5",
  },
  card: {
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "whitesmoke",
    // paddingHorizontal: 8
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    // height: 120
  },
  titleCard: {
    fontSize: 18,
    marginRight: 5,
    marginLeft: 45,
    marginBottom: 0,
    marginTop: 15,
    paddingHorizontal: 35,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
  },
  dateCard: {
    fontSize: 14,
    marginRight: 5,
    marginLeft: 35,
    paddingHorizontal: 35,
    marginBottom: 20,
    color: "grey",
    fontStyle: "italic",
    textAlign: "left",
    alignSelf: "stretch",
  },
  avatarBulat: {
    flexDirection: "row",
    margin: 20,
    position: "absolute",
  },
  tombolLink: {
    // paddingTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 10,
    color: "#5d78ff",
    position: "absolute",
    paddingTop: 40,
    right: 16,
  },
  chipUndian: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#F78F47",
    margin: 10,
    marginBottom: 20,
  },
  chipHadiahLangsung: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#F93A90",
    margin: 10,
    marginBottom: 20,
  },
  chipKomisi: {
    flexDirection: "row",
    // width: 130,
    backgroundColor: "#58BBD8",
    margin: 10,
    marginBottom: 20,
  },
  chiprow: {
    // paddingVertical: 8,
    flexDirection: "row",
    marginLeft: 70,
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
  },
  chiptext: {
    fontSize: 12,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 5,
    color: "white",
    textAlign: "center",
    alignSelf: "stretch",
  },
});
