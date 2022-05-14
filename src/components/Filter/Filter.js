import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";

import styles from './FilterStyles';

function Filter(props) {

  var dataRender = props.data.map( (e, i) => 

    <View style={{flexDirection:'row', marginTop:15}}>

      <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.handlerSelectStatus(i)}>
        <Image source={e.checked ? require("../../images/checked.png") : require("../../images/unCheck.png")} />
      
        <View style={{width:150}}>
          <Text style={styles.status}>{e.key}:</Text>
        </View>
      </TouchableOpacity>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.handlerSelectStatusValue(i, true)}>
          <Image style={{marginLeft:10}} source={e.valueTrue ? require("../../images/checked.png") : require("../../images/unCheck.png")} />
          <Text style={styles.statusValue}>true</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>props.handlerSelectStatusValue(i, false)}>
          <Image style={{marginLeft:10}} source={e.valueFalse ? require("../../images/checked.png") : require("../../images/unCheck.png")} />
          <Text style={styles.statusValue}>false</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )

  return (
      <View style={styles.filter}>

        <ScrollView>
          {dataRender}
        </ScrollView>

        <View style={{flexDirection:'row', marginTop:20}}>
          <TouchableOpacity
            style={styles.btnApply}
            onPress={()=>props.handlerApply()}
          >
            <Text style={styles.button}>Apply</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnCancel}
            onPress={()=>props.handlerCancel()}
          >
            <Text style={styles.button}>Cancel</Text>
          </TouchableOpacity>
        </View>

      </View>
  );
}

export default Filter;
