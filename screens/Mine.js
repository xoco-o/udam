import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { PrimaryButton } from "../components/Buttons";
import s from "../utils/getRelativeSize";

export default function MineScreen() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <PrimaryButton onPress={() => alert("onPress")} onLongPress={() => navigation.navigate("Components")}>
                Mine Screen
            </PrimaryButton>
        </View>
    );
}
