import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { SafeAreaView, StyleSheet } from 'react-native';

import InvoicesList from './src/components/InvoicesList/InvoicesList';
import NewInvoice from './src/components/NewInvoice/NewInvoice';

const AppNavigator = createStackNavigator(
	{
		InvoicesList: {
			screen: InvoicesList
		},
		NewInvoice: {
			screen: NewInvoice
		}

	}, {
		
    initialRouteName: 'InvoicesList',
    headerMode: 'none',
    // transitionConfig: getSlideFromRightTransition,
    navigationOptions: {
      gesturesEnabled: false
    }
	
  });

const BasicApp = createAppContainer(AppNavigator);

export default class App extends Component {
	
	render() {
		
		return (
			<SafeAreaView style={styles.container}>
				<BasicApp />
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

// export default createAppContainer(AppNavigator);
