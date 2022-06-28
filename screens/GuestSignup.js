import { View, Alert } from "react-native";
import colors from "../utils/colors";
import { StatusBar } from "expo-status-bar";
import TextField from "../components/TextField";
import { PrimaryButton } from "../components/Buttons";
import s from "../utils/getRelativeSize";
import { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Checkbox from "../components/Checkbox";
import { ModalLoader } from "../components/Loaders";
import { userState } from "../utils/recoilAtoms";
import { useSetRecoilState } from "recoil";

export default function GuestSignupScreen() {
    const setUser = useSetRecoilState(userState);

    const [loginname, setLoginname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [givenname, setGivenname] = useState("");

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [loading, setLoading] = useState(false);

    function submit() {
        if (!acceptedTerms) {
            Alert.alert("Анхаар", "Үйлчилгээний нөхцлийг зөвшөөрнө үү!");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setUser({});
        }, 2000);
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    <TextField label="Нэвтрэх нэр" value={loginname} onChangeText={setLoginname} autoCapitalize="none" />
                    <TextField label="Утасны дугаар" value={phone} onChangeText={setPhone} keyboardType="numeric" textContentType="telephoneNumber" autoCapitalize="none" />
                    <TextField label="И-мэйл" value={email} onChangeText={setEmail} keyboardType="email-address" textContentType="emailAddress" autoCapitalize="none" />
                    <TextField label="Овог" value={surname} onChangeText={setSurname} textContentType="familyName" />
                    <TextField label="Нэр" value={givenname} onChangeText={setGivenname} textContentType="givenName" />

                    <TextField label="Нууц үг" value={password} onChangeText={setPassword} secureTextEntry={true} autoCapitalize="none" textContentType="newPassword" />
                    <TextField label="Нууц үг давтах" value={passwordConfirm} onChangeText={setPasswordConfirm} secureTextEntry={true} autoCapitalize="none" textContentType="password" />

                    <View style={{ marginTop: s(15) }}>
                        <Checkbox label="Үйлчилгээний нөхцөл зөвшөөрөх" value={acceptedTerms} onValueChange={setAcceptedTerms} />
                    </View>

                    <View style={{ marginVertical: s(20) }}>
                        <PrimaryButton onPress={submit}>Бүртгүүлэх</PrimaryButton>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            {loading && <ModalLoader text="Уншиж байна" />}

            <StatusBar style="dark" />
        </View>
    );
}