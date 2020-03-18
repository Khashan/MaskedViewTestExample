import React from 'react';
import {
	Animated,
	StyleSheet,
	Image,
	View,
	Text,
	StatusBar,
} from 'react-native';

import MaskedView from '@react-native-community/masked-view';
import styles from './styles';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.root}>
				<MaskedView
					style={styles.maskView}
					maskElement={
						<View style={styles.maskGroup}>
							<Animated.View
								style={[styles.maskMiddle]}
							/>
							<Animated.Image
								source={require('./image/mask-bottom.png')}
								style={[styles.maskBottom]}
							/>
						</View>
					}>
					<Image source={{ uri: 'https://i.imgur.com/utSozMV.png' }} style={styles.image} />
				</MaskedView>
			</View>
		);
	}
}

