import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import colors from "../utils/colors";
import { StatusBar } from "expo-status-bar";
import TextField from "../components/TextField";
import s from "../utils/getRelativeSize";
import { InlineTextButton, PrimaryButton } from "../components/Buttons";
import { useState } from "react";
import { ModalLoader } from "../components/Loaders";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { userState } from "../utils/recoilAtoms";

export default function GuestLoginScreen() {
    const setUser = useSetRecoilState(userState);

    const [loginname, setLoginname] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function submit() {
        setLoading(true);
        setTimeout(() => {
            setUser({});
        }, 2000);
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    <TextField placeholder="Нэвтрэх нэр" autoCapitalize="none" value={loginname} onChangeText={setLoginname} />
                    <TextField placeholder="Нууц үг" secureTextEntry={true} autoCapitalize="none" value={password} onChangeText={setPassword} />

                    <PrimaryButton onPress={submit}>Нэвтрэх</PrimaryButton>

                    <View style={{ flex: 1, alignItems: "flex-end", flexDirection: "row", justifyContent: "space-between", marginTop: s(20) }}>
                        <InlineTextButton>Нууц үг мартсан</InlineTextButton>
                        <InlineTextButton onPress={() => navigation.navigate("GuestSignup")}>Бүртгүүлэх</InlineTextButton>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            {loading && <ModalLoader text="Уншиж байна" />}

            <StatusBar style="dark" />
        </View>
    );
}
