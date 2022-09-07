import { useEffect, useState } from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import RenderHTML from "react-native-render-html";
import { BlockLoader } from "../components/Loaders";
import RelativeTime from "../components/RelativeTime";
import API from "../utils/API";
import colors from "../utils/colors";
import s from "../utils/getRelativeSize";

export default function OneArticleScreen({ route }) {
    const [article, setArticle] = useState(route.params.article);

    const { width } = useWindowDimensions();

    useEffect(() => {
        API.get(`a/${article.id}`, (res) => {
            if (res.success) {
                setArticle(res.payload);
            }
        });
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ScrollView>
                <View style={{ margin: s(20) }}>
                    <Text style={{ marginBottom: s(10), fontSize: s(20), fontWeight: "bold" }}>{article.name}</Text>
                    <Text style={{ fontSize: s(16), color: colors.grey[600] }}>
                        <RelativeTime date={article.published} />
                    </Text>
                </View>

                {article.text ? (
                    <View style={{ paddingHorizontal: s(20) }}>
                        <RenderHTML
                            contentWidth={width}
                            source={{
                                html: article.text,
                            }}
                            baseStyle={{ fontSize: s(16), lineHeight: s(22.5) }}
                        />
                    </View>
                ) : (
                    <BlockLoader />
                )}
            </ScrollView>
        </View>
    );
}
