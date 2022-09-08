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
import { useSetRecoilState, useRecoilValue } from "recoil";
import urls from "../utils/urls";
import {useNavigation} from "@react-navigation/native";

export default function GuestSignupScreen({ navigation }) {
    const setUser = useSetRecoilState(userState);

    const [loginname, setLoginname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [surname, setSurname] = useState("");
    const [givenname, setGivenname] = useState("");

    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const em = email? {email: email}:{};
    const form = {loginname:loginname, phone:phone, em, pword:password, rpword:passwordConfirm,givenname:givenname,surename:surname }

    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);

    function submit() {
        if (!acceptedTerms) {
            Alert.alert("Анхаар", "Үйлчилгээний нөхцлийг зөвшөөрнө үү!");
            return;
        }
        setLoading(true);
        fetch(urls.api +'core/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: form ? JSON.stringify(form) : "",
            credentials: "include",
        }).then((response) => {
            if ( response.status === 200 ) {
                return null;
            }else{
                return response.json();
            }
        }).then((responseJson) => {
            if (responseJson === null){
                Alert.alert('', 'Амжилттай бүртгүүллээ', [
                        {
                            text: 'Нэвтрэх', onPress: () => {
                                navigation.navigate('GuestLogin');
                            }
                        }
                    ],
                    { cancelable: true }
                );
            }else {
                Alert.alert('', responseJson.errors[0].defaultMessage,'',{ cancelable: true })
                setLoading(false);
            }
        }).catch((err) => {
            console.error(err);
            setLoading(false);
        });
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
