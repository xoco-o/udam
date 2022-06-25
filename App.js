import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { BaseButton, OutlinedButton, PrimaryButton, SecondaryButton, SolidButton, TextButton } from "./components/Buttons";
import colors from "./utils/colors";
import TextField from "./components/TextField";
import Checkbox from "./components/Checkbox";
import s from "./utils/getRelativeSize";
import Box from "./components/Box";
import MenuItem from "./components/MenuItem";
import { FontAwesome5 } from "@expo/vector-icons";
import MenuBorder from "./components/MenuBorder";
import { ScreenLoader, BlockLoader, ModalLoader } from "./components/Loaders";
import ClassicModal from "./components/ClassicModal";

export default function App() {
    const [checked, setChecked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    // return <ScreenLoader text="Уншиж байна" />;

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ width: s(315), marginLeft: s(30), marginTop: s(50) }}>
                        <Box title="Form elements" color={colors.white}>
                            <View style={{ padding: s(15) }}>
                                <TextField label="Name" help="Please enter your name" />
                                <TextField label="Desc" multiline help="Please enter your name" />
                                <Checkbox label="Checkbox" value={checked} onValueChange={setChecked} />
                                <TextField disabled label="Disabled" help="Please enter your name" />
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

                <StatusBar style="auto" />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey[100],
    },
});
