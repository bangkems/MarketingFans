import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { Text, Card, Chip } from 'react-native-paper'
import Header from "../../components/Header";
import { color } from "react-native-tailwindcss";



function DetailReferral({ navigation }) {
    return (
      <>
        <Header titleText="Referral Stats Detail" navigation={navigation} />

        <ScrollView style={styles.scrollView}>
        <View style={styles.container}>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/collection/10017690/700x700',
            }}
          />
          <Card.Content>
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>12 Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>8 User Claimed</Chip>
          </View>
            <Text style={styles.titleCard}>5% Komisi Setiap Pembelian Denim Pants</Text>
            <Text style={styles.merchantName}>Ripped Jeans Company</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipActive} textStyle={styles.chiptext}>Aktif: 31 Agustus 2020</Chip>
          </View>
        </Card>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/nGrfKmtwv24/700x700',
            }}
          />
          <Card.Content>
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>18 Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>6 User Claimed</Chip>
          </View>
            <Text style={styles.titleCard}>Hadiah Student Goes To School Package</Text>
            <Text style={styles.merchantName}>Toko Buku Altera</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipActive} textStyle={styles.chiptext}>Aktif: 21 Juli 2020</Chip>
          </View>
        </Card>

        {/* satu card */}
        <Card style={styles.card}>
          <Card.Cover
            source={{
              uri:
                'https://source.unsplash.com/-YHSwy6uqvk/700x700',
            }}
          />
          <Card.Content>
          <View style={styles.chipRow}>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>43 Referred User</Chip>
            <Chip mode="outlined" style={styles.chipStats} textStyle={styles.chiptextStats}>36 User Claimed</Chip>
          </View>

            <Text style={styles.titleCard}>Undian Cutlery Set</Text>
            <Text style={styles.merchantName}>Dapur Mama Bunda</Text>
          </Card.Content>
          <View style={styles.status}>
            <Chip style={styles.chipInactive} textStyle={styles.chiptext}>Nonaktif: 13 Mei 2020</Chip>
          </View>
        </Card>

        </View>
        </ScrollView>
      </>
    )
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
    scrollView: {
      backgroundColor: '#fafafa',
    },
    card: {
      justifyContent: 'center',
      borderWidth: 0.5,
      borderColor: 'whitesmoke',
      // paddingHorizontal: 8
      margin: 15
    },
    titleCard: {
      fontSize: 16,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      marginTop: 10,
      fontWeight: 'bold',
      textAlign: 'left',
      alignSelf: 'stretch'
    },
    merchantName: {
      fontSize: 12,
      marginRight: 5,
      marginLeft: 5,
      marginBottom: 5,
      color: 'grey',
      // fontStyle: 'italic',
      textAlign: 'left',
      alignSelf: 'stretch',
      marginBottom: 20,
    },
    chipRow: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 10,
      // justifyContent: "space-between"
    },
    chipStats: {
      margin: 4,
      borderWidth: 0.5,
      borderColor: color.purple800,
    },
    chipActive: {
      // flexDirection: 'row',
      backgroundColor: color.green400,
      margin: 4,
    },
    chipInactive: {
      backgroundColor: color.red500,
      margin: 4,
    },
    chiptext: {
      color: 'white',
      fontSize: 12
    },
    chiptextStats: {
      color: color.purple800,
    },
    status: {
      position: 'absolute',
      paddingTop: 16,
      right: 16,
    },

  })

export default DetailReferral

