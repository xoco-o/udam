import { StatusBar } from "expo-status-bar";
import {useEffect, useState} from "react";
import { Image, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { OutlinedButton, PrimaryButton } from "../components/Buttons";
import FormField from "../components/FormField";
import { ModalLoader } from "../components/Loaders";
import TextField from "../components/TextField";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

import * as ImagePicker from "expo-image-picker";
import Checkbox from "../components/Checkbox";
import SelectField from "../components/SelectField";
import urls from "../utils/urls";
import { useRecoilValue} from "recoil";
import {userState} from "../utils/recoilAtoms";

export default function CreateHorseScreen() {
    const user = useRecoilValue(userState);
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [color, setColor] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [isMine, setIsMine] = useState(true);
    const [isPublic, setIsPublic] = useState(true);
    const [loading, setLoading] = useState(false);

    async function pickImage() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });
        console.log(result);
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    /*useEffect(()=>{

    },[])*/

    function submit() {
        const form = {
            // user: user.id,
            "name": name,
            "color": color,
            "gender": gender,
            "horseAge" : age
        };
        console.log('form)',JSON.stringify(form));
        // setLoading(true);
        fetch(urls.api + `/client/horse/create`, {
            method: "POST", credentials: 'include',
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            },
            body: form? JSON.stringify(form) : "",
        }).then((response) => {
            console.log('response createHorse', response.status);
            // console.log('response createHorse', response.text());
            // setLoading(true);
        }).catch((err) => {
            alert("catch:  " + err);
            // setLoading(false);
            console.log('response createHorse', response.json());
        });

        // setTimeout(() => {
        //     setLoading(false);
        // }, 1000);
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <KeyboardAwareScrollView>
                <View style={{ paddingVertical: s(25), paddingHorizontal: s(20), flex: 1 }}>
                    {image && (
                        <View style={{ marginBottom: s(20), alignItems: "center" }}>
                            <Image
                                style={{ width: s(300), height: s(200), resizeMode: "contain" }}
                                source={{
                                    uri: image,
                                }}
                            />
                        </View>
                    )}

                    <FormField>
                        <OutlinedButton onPress={pickImage}>Зураг сонгох</OutlinedButton>
                    </FormField>

                    <TextField label="Нэр" value={name} onChangeText={setName} />
                    <TextField label="Зүс" value={color} onChangeText={setColor} />
                    {/*<TextField label="Тайлбар" multiline value={description} onChangeText={setDescription} />*/}

                    {/*<TrainerPicker value={owner} onChange={setOwner} label="Эзэн" placeholder="Сонгоно уу" />*/}

                    <SelectField
                        value={gender}
                        onChange={setGender}
                        items={[
                            // { value: "Азарга", label: "Азарга" },
                            // { value: "Морь", label: "Морь" },
                            // { value: "Гүү", label: "Гүү" },
                            { value: "FEMALE", label: "Гүү" },
                            { value: "MALE", label: "Морь" },
                            { value: "OTHER", label: "Азарга" },
                        ]}
                        label="Хүйс"
                        placeholder="Сонгоно уу"
                    />

                    <SelectField
                        value={age}
                        onChange={setAge}
                        items={[
                            // { value: "Унага", label: "Унага" },
                            { value: "DAAGA", label: "Даага" },
                            { value: "SHUDLEN", label: "Шүдлэн" },
                            { value: "HYAZAALAN", label: "Хязаалан" },
                            { value: "SOYOLON", label: "Соёолон" },
                            { value: "IKHNAS", label: "Их нас" },
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
