import { useState } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import { BaseButton, OutlinedButton, PrimaryButton, SecondaryButton, SolidButton, TextButton } from "../components/Buttons";
import colors from "../utils/colors";
import TextField from "../components/TextField";
import Checkbox from "../components/Checkbox";
import s from "../utils/getRelativeSize";
import Box from "../components/Box";
import MenuItem from "../components/MenuItem";
import { FontAwesome5 } from "@expo/vector-icons";
import MenuBorder from "../components/MenuBorder";
import { ScreenLoader, BlockLoader, ModalLoader } from "../components/Loaders";
import ClassicModal from "../components/ClassicModal";
import SelectField from "../components/SelectField";
import { BaseTag, SolidTag } from "../components/Tags";
import Tabs from "../components/Tabs";
import Card from "../components/Card";
import lorem from "../utils/lorem";

export default function Components() {
    const [checked, setChecked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [tab, setTab] = useState("male");

    // return <ScreenLoader text="Уншиж байна" />;

    return (
        <View style={{ flex: 1, backgroundColor: colors.grey[100] }}>
            <ScrollView>
                <View style={{ width: s(315), marginLeft: s(30), marginTop: s(50) }}>
                    <Card
                        image={{ source: require("../assets/sample/1.jpg"), width: s(315), height: s(200) }}
                        title={lorem.generateWords(10)}
                        description={lorem.generateWords(10)}
                        tag="10,000,000₮"
                        date="1 өдрийн өмнө"
                    />
                    <Card />

                    <Box title="Tabs" color={colors.white}>
                        <View style={{ paddingVertical: s(15) }}>
                            <Tabs
                                value={tab}
                                onChange={setTab}
                                items={[
                                    { value: "all", label: "Бүгд" },
                                    { value: "male", label: "Эрэгтэй" },
                                    { value: "female", label: "Эмэгтэй" },
                                ]}
                                containerStyles={{ paddingHorizontal: s(15) }}
                            />
                        </View>
                    </Box>

                    <Box title="Tags" color={colors.white}>
                        <View style={{ padding: s(15), flexDirection: "row" }}>
                            <BaseTag>Бүгд</BaseTag>
                            <SolidTag>Бүгд</SolidTag>
                        </View>
                    </Box>

                    <Box title="Form elements" color={colors.white}>
                        <View style={{ padding: s(15) }}>
                            <TextField label="Name" help="Please enter your name" />
                            <TextField label="Desc" multiline help="Please enter your name" />
                            <Checkbox label="Checkbox" value={checked} onValueChange={setChecked} />
                            <TextField disabled label="Disabled" help="Please enter your name" />
                            <SelectField
                                value="male"
                                onChange={(val) => alert(val)}
                                items={[
                                    { value: "female", name: "Female" },
                                    { value: "male", name: "Male" },
                                ]}
                                label="Select"
                                placeholder="Please select your gender"
                            />
                        </View>
                    </Box>

                    <Box title="Buttons" color={colors.white}>
                        <View style={{ padding: s(15) }}>
                            <PrimaryButton onPress={() => alert("onPress")} onLongPress={() => alert("onLongPress")}>
                                Primary Button
                            </PrimaryButton>
                            <SecondaryButton onPress={() => alert("onPress")} onLongPress={() => alert("onLongPress")}>
                                Secondary Button
                            </SecondaryButton>
                            <BaseButton>Base buttons</BaseButton>
                            <SolidButton color={colors.red[400]}>Solid button</SolidButton>
                            <OutlinedButton color={colors.green[400]}>Outlined button</OutlinedButton>
                            <OutlinedButton disabled color={colors.green[400]}>
                                Disabled outlined button
                            </OutlinedButton>
                            <TextButton color={colors.blue[400]}>Text button</TextButton>
                        </View>
                    </Box>

                    <Box title="Loaders" color={colors.white}>
                        <View style={{ padding: s(15) }}>
                            <BlockLoader text="Уншиж байна" />
                            <BlockLoader size="small" text="LOADING" />
                            {/* <ModalLoader size="small" text="Уншиж байна" /> */}
                        </View>
                    </Box>

                    <Box title="Menu" color={colors.white}>
                        <MenuItem
                            label="Хувилбар"
                            value="0.23.1"
                            icon={<FontAwesome5 name="check-square" size={s(18)} color={colors.brown[400]} />}
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                        />
                        <MenuBorder />
                        <MenuItem
                            label="Хувилбар"
                            value="0.23.1"
                            icon={<FontAwesome5 name="check-square" size={s(18)} color={colors.brown[400]} />}
                            onPress={() => alert("onPress")}
                            onLongPress={() => alert("onLongPress")}
                            hasChevron
                        />
                    </Box>

                    <Box title="Modal" color={colors.white}>
                        <View style={{ padding: s(15) }}>
                            <TextButton color={colors.blue[400]} onPress={() => setModalOpen(true)}>
                                Open
                            </TextButton>
                        </View>
                        <ClassicModal visible={modalOpen}>
                            <View style={{ width: s(300), padding: s(10) }}>
                                <TextButton color={colors.blue[400]} onPress={() => setModalOpen(false)}>
                                    Close
                                </TextButton>
                            </View>
                        </ClassicModal>
                    </Box>
                </View>
            </ScrollView>
        </View>
    );
}
