import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from "react-native";

import styles from './InvoiceItemStyles';

var scrW = Math.round(Dimensions.get('window').width)

function InvoiceItem(props) {

  return (
      <View style={styles.invoiceItem}>

        <TouchableOpacity>
          <View style={styles.group10662Row}>
            <View style={styles.group10662}>

              <View style={styles.group4022Column}>
                <View style={styles.group4022}>
                  <View style={styles.f95733E62D4CadB3Af1418D328F379Stack}>
                    <Image source={require("../../images/tag2.png")} />
                  </View>
                </View>
              </View>

              <View style={styles.group4022ColumnFiller}></View>

              <View style={styles.group4012}></View>
            </View>

            <View style={styles.hTrKimTraCucGiDn2Column}>
                <Text style={styles.hTrKimTraCucGiDn2}>{props.field1.length > 30 ? props.field1.substring(0,30) + '...' : props.field1}</Text>
                <Text style={styles.style2}>{props.field2.length > 30 ? props.field2.substring(0,30) + '...' : props.field2}</Text>
                <Text style={styles.style2}>{props.field3.length > 30 ? props.field3.substring(0,30) + '...' : props.field3}</Text>
                {/* <Text style={styles.nguyenVanD2}>{props.owner.length > 30 ? props.owner.substring(0,30) + '...' : props.owner}</Text> */}
            </View>

            <View style={styles.style3}/>
          </View>
        </TouchableOpacity>

      </View>
  );
}

export default InvoiceItem;
