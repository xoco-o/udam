import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PrimaryButton } from "../components/Buttons";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

export default function CreateHorseScreen() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);

    function submit() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    <TextField label="Гарчиг" value={name} onChangeText={setName} />
                    <TextField label="Тайлбар" multiline value={description} onChangeText={setDescription} />

                    <View style={{ marginVertical: s(20) }}>
                        <PrimaryButton onPress={submit}>Илгээх</PrimaryButton>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            {loading && <ModalLoader text="Уншиж байна" />}

            <StatusBar style="dark" />
        </View>
    );
}
