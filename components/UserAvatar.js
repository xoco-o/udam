import React from "react";
import s from "../utils/getRelativeSize";
import { Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { primaryColor, secondaryColor } from "../utils/constants";
import colors from "../utils/colors";

export default function UserAvatar({ userName, userImage, size = 50 }) {
    return (
        <>
            {userImage ? (
                <Image
                    source={{ uri: userImage }}
                    resizeMode="cover"
                    style={{
                        width: s(size),
                        height: s(size),
                        borderRadius: s(size / 2),
                    }}
                />
            ) : (
                <LinearGradient colors={[primaryColor, secondaryColor]} style={{ width: s(size), height: s(size), borderRadius: s(size / 2), justifyContent: "center", alignItems: "center" }}>
                    {userName && <Text style={{ fontSize: s(size * 0.4), lineHeight: s(size * 0.5), color: colors.white }}>{userName.substring(0, 2)}</Text>}
                </LinearGradient>
            )}
        </>
    );
}
