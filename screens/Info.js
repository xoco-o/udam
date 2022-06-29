import { View } from "react-native";
import { PrimaryButton } from "../components/Buttons";
import s from "../utils/getRelativeSize";

export default function InfoScreen() {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <PrimaryButton onPress={() => alert("onPress")} onLongPress={() => alert("onLongPress")}>
                Info Screen
            </PrimaryButton>
        </View>
    );
}
