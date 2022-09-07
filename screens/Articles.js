import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import ListItem from "../components/ListItem";
import RelativeTime from "../components/RelativeTime";
import API from "../utils/API";
import s from "../utils/getRelativeSize";

export default function ArticlesScreen() {
    const [articles, setArticles] = useState();

    useEffect(() => {
        API.get("a", (res) => {
            if (res.success) {
                setArticles(res.payload);
            }
        });
    }, []);
    const renderItem = ({ item }) => <ArticleListItem item={item} />;

    return (
        <View style={{ flex: 1 }}>
            <FlatList data={articles} renderItem={renderItem} keyExtractor={(item) => item.id} ListFooterComponent={<View style={{ height: s(100) }} />} />
        </View>
    );
}

function ArticleListItem({ item }) {
    const navigation = useNavigation();

    return (
        <ListItem
            title={item.name}
            subtitle={<RelativeTime date={item.published} />}
            image={{ source: typeof item.image !== "undefined" ? item.image.name + "_s." + item.image.ext : "no-image", width: s(120), height: s(67.5) }}
            onPress={() => navigation.navigate("OneArticle", { article: item })}
        />
    );
}
