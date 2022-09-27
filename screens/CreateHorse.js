import { StatusBar } from "expo-status-bar";
import { useState} from "react";
import { Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { OutlinedButton, PrimaryButton } from "../components/Buttons";
import FormField from "../components/FormField";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

import Checkbox from "../components/Checkbox";
import SelectField from "../components/SelectField";
import urls from "../utils/urls";
import * as ImagePicker from "expo-image-picker";
import {useNavigation} from "@react-navigation/native";

export default function CreateHorseScreen() {
    const [image, setImage] = useState([]);
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [isMine, setIsMine] = useState(true);
    const [isPublic, setIsPublic] = useState(true);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const formData = new FormData();
    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            // allowsMultipleSelection: true
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
            /*for (let i=0; i < image.length; i++){
                let uriParts = image[i].uri.split('.');
                let type = uriParts[uriParts.length - 1];
                formData.append('imageForms['+i+'].file', {
                    uri: image[i].uri,
                    name: `photo.${type}`,
                    type: `image/${type}`,
                })
            }*/
            let uriParts = image[0].uri.split('.');
            let type = uriParts[uriParts.length - 1];
            formData.append('imageFile', {
                uri: image[0].uri,
                name: `photo.${type}`,
                type: `image/${type}`,
            })
        }
        formData.append('name', name);
        formData.append('color', color);
        formData.append('gender', gender);
        formData.append('horseAge', age);
        setLoading(true);
        fetch(urls.api + `client/horse/create`, {
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

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    {/*{image && (
                        <View style={{ marginBottom: s(20), alignItems: "center" }}>
                            <Image
                                style={{ width: s(300), height: s(200), resizeMode: "contain" }}
                                source={{
                                    uri: image,
                                }}
                            />
                        </View>
                    )}*/}
                    <FormField>
                        <OutlinedButton onPress={pickImage}>Зураг сонгох</OutlinedButton>
                    </FormField>
                    <TextField label="Нэр" value={name} onChangeText={setName} />
                    <TextField label="Зүс" value={color} onChangeText={setColor} />
                    <SelectField
                        value={gender}
                        onChange={setGender}
                        items={[
                            { value: "FEMALE", name: "Эм" },
                            { value: "MALE", name: "Эр" },
                            { value: "OTHER", name: "Зассан" },
                        ]}
                        label="Хүйс"
                        placeholder="Сонгоно уу"
                    />
                    <SelectField
                        value={age}
                        onChange={setAge}
                        items={[
                            // { value: "Унага", label: "Унага" },
                            { value: "DAAGA", name: "Даага" },
                            { value: "SHUDLEN", name: "Шүдлэн" },
                            { value: "HYAZAALAN", name: "Хязаалан" },
                            { value: "SOYOLON", name: "Соёолон" },
                            { value: "IKHNAS", name: "Их нас" },
                        ]}
                        label="Нас"
                        placeholder="Сонгоно уу"
                    />
                    <FormField>
                        <Checkbox label="Минийх" value={isMine} onValueChange={setIsMine} />
                    </FormField>
                    <FormField>
                        <Checkbox label="Бусдад харагдах" value={isPublic} onValueChange={setIsPublic} />
                    </FormField>
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
