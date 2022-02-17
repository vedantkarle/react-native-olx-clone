import LottieView from "lottie-react-native";
import React from "react";
import { Modal, StyleSheet, View } from "react-native";
import * as Progress from "react-native-progress";
import colors from "../config/colors";

const UploadScreen = ({ onDone, progress = 0, visible = false }) => {
	return (
		<Modal visible={visible}>
			<View style={styles.container}>
				{progress < 1 ? (
					<Progress.Bar
						progress={progress}
						color={colors.primary}
						width={200}
					/>
				) : (
					<LottieView
						autoPlay
						loop={false}
						source={require("../assets/animations/done.json")}
						style={styles.animation}
						onAnimationFinish={onDone}
					/>
				)}
			</View>
		</Modal>
	);
};

export default UploadScreen;

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	animation: {
		width: 150,
	},
});
