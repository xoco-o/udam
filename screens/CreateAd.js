import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PrimaryButton } from "../components/Buttons";
import Checkbox from "../components/Checkbox";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

export default function CreateAdScreen() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [loading, setLoading] = useState(false);

    function submit() {
        if (!acceptedTerms) {
            Alert.alert("Анхаар", "Үйлчилгээний нөхцлийг зөвшөөрнө үү!");
            return;
        }
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

                    <TextField
                        label="Үнэ"
                        value={price}
                        onChangeText={setPrice}
                        keyboardType="numeric"
                        textContentType="telephoneNumber"
                        autoCapitalize="none"
                    />

                    <View style={{ marginTop: s(15) }}>
                        <Checkbox label="Үйлчилгээний нөхцөл зөвшөөрөх" value={acceptedTerms} onValueChange={setAcceptedTerms} />
                    </View>

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