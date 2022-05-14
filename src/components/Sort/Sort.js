import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from './SortStyles';

function Sort(props) {

  return (
      <View style={styles.sort}>

        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.handlerSortSelect()}>
          <Image style={{width:20, height:20}} source={props.sortType ? require("../../images/ip_selected.png") : require("../../images/ip_deselected.png")} />
          <Text style={styles.sortType}>Date Ascending</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row', marginTop:20}} onPress={()=>props.handlerSortSelect()}>
          <Image style={{width:20, height:20}} source={!props.sortType ? require("../../images/ip_selected.png") : require("../../images/ip_deselected.png")} />
          <Text style={styles.sortType}>Date Descending</Text>
        </TouchableOpacity>

      </View>
  );
}

export default Sort;
