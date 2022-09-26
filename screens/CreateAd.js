import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { Alert, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {OutlinedButton, PrimaryButton} from "../components/Buttons";
import Checkbox from "../components/Checkbox";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";
import urls from "../utils/urls";
import SelectField from "../components/SelectField";
import API from "../utils/API";
import FormField from "../components/FormField";
import * as ImagePicker from "expo-image-picker";
import {useNavigation} from "@react-navigation/native";

export default function CreateAdScreen() {
    const [image, setImage] = useState([]);
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [data, setData] = useState("");
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    useEffect(() => {
        API.get("ad/category/list", (res) => {
            if (res.success) {
                setData(res.payload);
            }
        });
    }, []);
    const formData = new FormData();
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsMultipleSelection: true
        });
        if (!result.cancelled) {
            formData._parts = [];
            if(typeof result.selected !== 'undefined'){
                setImage(result.selected);
            } else {
                setImage([result]);
            }
        }
    }

    function submit() {
        if(image!==[]){
            formData._parts = [];
            for (let i=0; i < image.length; i++){
                   let uriParts = image[i].uri.split('.');
                   let type = uriParts[uriParts.length - 1];
                   formData.append('imageForms['+i+'].file', {
                       uri: image[i].uri,
                       name: `photo.${type}`,
                       type: `image/${type}`,
                   })
               }
        }
        formData.append('categoryId', category);
        formData.append('text', description);
        formData.append('phoneOne', phone);
        formData.append('price', price);
        if (!acceptedTerms) {
            Alert.alert("Анхаар", "Үйлчилгээний нөхцлийг зөвшөөрнө үү!");
            return null;
        } else {
            setLoading(true);
            fetch(urls.api + `client/ad/create`, {
                method: "POST", credentials: 'include',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                },
                body: formData,
            }).then((response) => {
                setLoading(false);
                if(response.status===200){
                    return response.json();
                } else alert(response.status);
                return null;
            }).then((data) => {
                alert(data.text);
                navigation.navigate("TabNavigator");
            }).catch((err) => {
                alert("catch:  " + err);
                setLoading(false);
            });
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    <FormField>
                        <OutlinedButton onPress={pickImage}>Зураг сонгох</OutlinedButton>
                    </FormField>
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
