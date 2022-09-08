import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
import TrainerPicker from "../components/TrainerPicker";

export default function CreateHorseScreen() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [owner, setOwner] = useState("");
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
                    <TextField label="Тайлбар" multiline value={description} onChangeText={setDescription} />

                    <TrainerPicker value={owner} onChange={setOwner} label="Эзэн" placeholder="Сонгоно уу" />

                    <SelectField
                        value={gender}
                        onChange={setGender}
                        items={[
                            { value: "azarga", label: "Азарга" },
                            { value: "mori", label: "Морь" },
                            { value: "guu", label: "Гүү" },
                        ]}
                        label="Хүйс"
                        placeholder="Сонгоно уу"
                    />

                    <SelectField
                        value={age}
                        onChange={setAge}
                        items={[
                            { value: "unaga", label: "Унага" },
                            { value: "daaga", label: "Даага" },
                            { value: "shudlen", label: "Шүдлэн" },
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
