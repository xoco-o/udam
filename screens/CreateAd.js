import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { PrimaryButton } from "../components/Buttons";
import Checkbox from "../components/Checkbox";
import HorsePicker from "../components/HorsePicker";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import urls from "../utils/urls";
import SelectField from "../components/SelectField";
import API from "../utils/API";
import MenuItem from "../components/MenuItem";

export default function CreateAdScreen() {
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [data, setData] = useState("");

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        API.get("ad/category/list", (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
    }, []);

    const adForm = {
        "categoryId": category,
        "text" : description,
        "phoneOne": phone,
        "price": price
    };

    function submit() {
        if (!acceptedTerms) {
            Alert.alert("Анхаар", "Үйлчилгээний нөхцлийг зөвшөөрнө үү!");
            return null;
        } else {
            // setLoading(true);
            fetch(urls.api + `client/ad/creates`, {
                method: "POST", credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json",
                },
                body: adForm? JSON.stringify(adForm) : "",
            }).then((response) => {
                if(response.status===200){
                    return response.json();
                } else alert(response.status);
                return null;
            }).then((data) => {
                alert(data.text)
            }).catch((err) => {
                alert("catch:  " + err);
            });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    {
                        data ?
                        <SelectField
                            value={category}
                            onChange={setCategory}
                            items={data.map((item) => ({value: item.id, name: item.name}))}
                            label="Ангилал"
                            placeholder="Сонгоно уу"
                        /> : <></>
                    }
                    <TextField label="Утас" value={phone} onChangeText={setPhone} keyboardType="numeric" textContentType="telephoneNumber" />

                    <TextField label="Тайлбар" multiline value={description} onChangeText={setDescription} />

                    <TextField label="Үнэ" value={price} onChangeText={setPrice} keyboardType="numeric" />

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
