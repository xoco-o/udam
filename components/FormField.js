import { View } from "react-native";
import s from "../utils/getRelativeSize";
import FormLabel from "./FormLabel";
import FormHelp from "./FormHelp";

export default function FormField({ disabled, label, help, children }) {
    return (
        <View style={{ marginBottom: s(17) }}>
            {!!label && <FormLabel disabled={disabled}>{label}</FormLabel>}

            {children}

            {!!help && <FormHelp disabled={disabled}>{help}</FormHelp>}
        </View>
    );
}
