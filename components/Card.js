import { View, Text, Image } from "react-native";
import s from "../utils/getRelativeSize";
import colors from "../utils/colors";
import Box from "./Box";
import { SolidTag } from "./Tags";
import { secondaryColor } from "../utils/constants";

export default function Card({ color = colors.grey[100], image, tag, title, description, date }) {
    return (
        <Box color={color}>
            {image && <Image source={image.source} style={{ width: image.width, height: image.height, resizeMode: "cover" }} />}

            {tag && (
                <View style={image ? { position: "absolute", top: s(8), right: 0 } : { flexDirection: "row", justifyContent: "flex-end", marginTop: s(15), marginRight: s(8) }}>
                    <SolidTag color={secondaryColor}>{tag}</SolidTag>
                </View>
            )}

            <View style={{ padding: s(15) }}>
                {title && <Text style={{ fontSize: s(16), marginBottom: s(15) }}>{title}</Text>}

                {description && <Text style={{ fontSize: s(12), marginBottom: s(15) }}>{description}</Text>}

                {date && <Text style={{ fontSize: s(12), textAlign: "right", color: colors.grey[400] }}>{date}</Text>}
            </View>
        </Box>
    );
}
