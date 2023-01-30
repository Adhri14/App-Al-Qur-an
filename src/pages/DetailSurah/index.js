/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-filename-extension */
// /* eslint-disable no-unused-vars */
// /* eslint-disable linebreak-style */
// /* eslint-disable no-use-before-define */
// /* eslint-disable react/jsx-filename-extension */
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { ButtonBack, ListAyat, Skeleton } from "../../components";
import { useTheme } from "../../components/atoms/Theme";
import ThemeWrapper from "../../components/molecules/ThemeWrapper";
import { API_AYAT } from "../../config";
import { Colors, Fonts } from "../../utils";

const DetailSurah = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);
    const { number, name } = route.params;

    const [ayat, setAyat] = useState();
    console.log(name);

    // const dispatch = useDispatch();
    // const { data } = useSelector((state) => state.detailReducer);

    useEffect(() => {
        getAyat();
        // dispatch(getAyat(nomor));
    }, []);

    const getAyat = () => {
        Axios.get(`${API_AYAT(number)}`)
            .then(res => {
                setLoading(true);
                setAyat(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const { theme } = useTheme();

    return (
        <ThemeWrapper>
            <View style={[styles.page]}>
                <StatusBar backgroundColor="transparent" translucent />
                <ScrollView>
                    <View
                        style={[
                            styles.row,
                            { backgroundColor: theme.backgroundColorSecond },
                        ]}>
                        <ButtonBack
                            backgroundColor={theme.backgroundColorInput3}
                            onPress={() => navigation.goBack()}
                        />
                        <View>
                            <Text style={styles.title}>
                                {ayat?.name?.translation?.id}
                            </Text>
                            <Text style={styles.subtitle}>{`${
                                ayat?.name?.transliteration?.id || ""
                            } . ${ayat?.numberOfVerses || ""} Ayat`}</Text>
                        </View>
                    </View>
                    <View
                        style={[
                            styles.body,
                            ,
                            { backgroundColor: theme.backgroundColorMain },
                        ]}>
                        {name?.transliteration.id !== "Al-Fatihah" &&
                            loading && (
                                <ListAyat
                                    isAlFatihah={
                                        name?.transliteration.id !==
                                        "Al-Fatihah"
                                            ? true
                                            : false
                                    }
                                    title={ayat?.preBismillah?.translation?.id}
                                    arab={ayat?.preBismillah?.text?.arab}
                                />
                            )}

                        {(!loading || ayat?.verses?.length === 0) && (
                            <Skeleton type="loading-ayat" />
                        )}
                        {loading && (
                            <>
                                {ayat?.verses?.map(item => (
                                    <ListAyat
                                        key={item?.number?.inSurah}
                                        number={item?.number?.inSurah}
                                        title={item?.translation?.id}
                                        arab={item?.text?.arab}
                                    />
                                ))}
                            </>
                        )}
                    </View>
                </ScrollView>
            </View>
        </ThemeWrapper>
    );
};

export default DetailSurah;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    body: {
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: -50,
        paddingTop: 30,
        paddingHorizontal: 30,
    },
    row: {
        height: 200,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 30,
        marginTop: -10,
    },
    title: {
        fontFamily: Fonts.Semibold,
        fontSize: 22,
        color: Colors.Other,
        textAlign: "right",
    },
    subtitle: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.Other,
        textAlign: "right",
    },
    arti: {
        marginLeft: 70,
    },
});
