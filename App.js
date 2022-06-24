import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BaseButton, OutlinedButton, SolidButton, TextButton } from "./components/Buttons";
import colors from "./utils/colors";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <View style={{ width: 300 }}>
                    <BaseButton>Base buttons</BaseButton>
                    <SolidButton color={colors.red[400]}>Solid button</SolidButton>
                    <OutlinedButton color={colors.green[400]}>Outlined button</OutlinedButton>
                    <TextButton color={colors.blue[400]}>Text button</TextButton>
                </View>

                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
