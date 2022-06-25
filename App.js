import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BaseButton, OutlinedButton, SolidButton, TextButton } from "./components/Buttons";
import colors from "./utils/colors";
import TextField from "./components/TextField";

export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Text>Text</Text>
                <View style={{ width: 300 }}>
                    <TextField label="Name" help="Please enter your name" />
                    <TextField label="Desc" multiline help="Please enter your name" />
                    <BaseButton>Base buttons</BaseButton>
                    <SolidButton color={colors.red[400]}>Solid button</SolidButton>
                    <TextField disabled label="Name" help="Please enter your name" />

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
