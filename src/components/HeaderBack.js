import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Appbar, Title } from 'react-native-paper'
import NavigationService from "../navigation/NavigationService";

function HeaderBack({ titleText, backButton }) {

    return (
      <Appbar.Header style={styles.headerContainer}>
        <Appbar.BackAction
          onPress={() => NavigationService.back()}
        />
        <Appbar.Content
          title={ titleText }
        />
      </Appbar.Header>
    )
  }
  
  const styles = StyleSheet.create({
    title: {
      color: '#FFF'
    }
  })
  
  export default HeaderBack