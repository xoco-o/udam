import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import colors from "../utils/colors";
import { StatusBar } from "expo-status-bar";
import TextField from "../components/TextField";
import s from "../utils/getRelativeSize";
import { InlineTextButton, PrimaryButton } from "../components/Buttons";
import { useState } from "react";
import { ModalLoader } from "../components/Loaders";
import { useRecoilState } from "recoil";
import { userState } from "../utils/recoilAtoms";
import urls from "../utils/urls";

export default function GuestLoginScreen({ navigation }) {
    const [user,setUser] = useRecoilState(userState);

    const [loginName, setLoginName] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    const submit = async () => {
        setLoading(true);
        const params = {
            'loginname': loginName,
            'password': password,
        };

        fetch(urls.api + `core/signin`, {
            method: "POST", credentials: 'include',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        }).then((response) => {
            if (response.status === 200) {
                fetch(urls.api + 'core/signedUser', {  method: 'GET', credentials: 'include',
                    headers: {
                        Accept: 'application/json',
                        "Content-Type": "application/json",
                    }
                }).then((response2) => {
                    if ( response2.status === 200 ) {
                        return response2.json();
                    }
                    return null;
                }).then((responseJson) => {
                    if(responseJson!==null){
                        setUser({
                            id: responseJson.id,
                            loginName: responseJson.loginname,
                            givenName: responseJson.givenname!==""?responseJson.givenname:undefined,
                            email: responseJson.email,
                        });
                    }
                }).catch((err) => {
                    console.log("catch:  error signin " + err);
                    setUser(null);
                    // alert(err);
                    setLoading(false);
                });

            } else {
                alert("Нэвтрэх нэр нууц үгээ дахин шалгаад оролдоно уу.");
                setLoading(false);
            }
        }).catch((err) => {
            alert("catch:  " + err);
            setLoading(false);
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    <TextField placeholder="Нэвтрэх нэр" autoCapitalize="none" value={loginName} onChangeText={setLoginName} />
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
