import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const CovidMessage = (props) => {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Travel only if necessary
            </Text>
            <Text style={styles.text}>
                In order to install an extension you need to launch the Command Palette (Ctrl + Shift + P or Cmd + Shift + P) and type Extensions. There you have either the option to show the already installed snippets or install new ones.
            </Text>
            <Text style={styles.learnMore}>
                Learn More
            </Text>

        </View>
    );
};

export default CovidMessage;