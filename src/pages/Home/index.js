/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect, useContext } from "react";
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Axios from "axios";
import Geocoder from "react-native-geocoding";
import Geolocation from "react-native-geolocation-service";
import { IcSearch, IlLighting } from "../../assets";
import { Gap, HeaderTitle } from "../../components/atoms";
import { Skeleton, Surah } from "../../components/molecules";
import { API_DATE, API_SURAH, time } from "../../config";
import { Colors, Fonts, getData } from "../../utils";
import { useTheme } from "../../components/atoms/Theme";
import ThemeWrapper from "../../components/molecules/ThemeWrapper";

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false);
    const [surah, setSurah] = useState([]);
    const [data, setData] = useState({
        name: "",
    });
    const [date, setDate] = useState({
        day: "",
        month: "",
        year: "",
    });

    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
        error: null,
        address: null,
    });

    const [dt, setDt] = useState(
        new Date()
            .toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
            })
            .replace(/(:\d{2}| [AP]M)$/, ""),
    );

    useEffect(() => {
        // Ambil data location
        // getDataLocation();

        // Ambil Data User di local storage
        getData("user").then(res => {
            setData({ name: res?.name });
        });

        // Ambil data surah di API
        getDataSurah();

        // Ambil data tanggal hijrah dari API
        getDataDate();

        setInterval(() => {
            setDt(
                new Date()
                    .toLocaleTimeString(navigator.language, {
                        hour: "2-digit",
                        minute: "2-digit",
                    })
                    .replace(/(:\d{2}| [AP]M)$/, ""),
            );
        });
    }, []);

    const getDataSurah = () => {
        Axios.get(`${API_SURAH}`)
            .then(res => {
                setLoading(true);
                setSurah(res.data.data);
            })
            .catch(err => console.log(err));
    };

    const getDataDate = () => {
        Axios.get(`${API_DATE}`).then(res => {
            setDate({
                day: res.data.data.hijri.day,
                month: res.data.data.hijri.month.en,
                year: res.data.data.hijri.year,
            });
        });
    };

    // const getDataLocation = () => {
    //   Geolocation.getCurrentPosition(
    //     (position) => {
    //       setLocation({
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //       });
    //       Geocoder.init('AIzaSyA9lrULTDsjJrF-gZ0gFe-zACV9WgXHmAo');
    //       Geocoder.from(position.coords.latitude, position.coords.longitude)
    //         .then((json) => {
    //           const addressComponent = json.results[0];
    //           console.log(addressComponent);
    //           setLocation({
    //             address: addressComponent,
    //           });
    //         })
    //         .catch((error) => console.log(error));
    //     },
    //     (error) => {
    //       // See error code charts below.
    //       setLocation({
    //         error: error.message,
    //       }),
    //       console.log(error.code, error.message);
    //     },
    //     {
    //       enableHighAccuracy: false,
    //       timeout: 10000,
    //       maximumAge: 100000,
    //     },
    //   );
    // };

    const { theme, isLoading } = useTheme();

    return (
        <ThemeWrapper>
            <View
                style={[
                    styles.page,
                    { backgroundColor: theme.backgroundColorMain },
                ]}>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle="dark-content"
                />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HeaderTitle />
                    <View style={styles.welcome}>
                        <Text
                            style={[
                                styles.title,
                                { color: theme.textSecondary },
                            ]}>
                            Assalamualaikum,
                        </Text>
                        <Text
                            style={[styles.name, { color: theme.textPrimary }]}>
                            {data.name !== null ||
                            data.name !== undefined ||
                            data.name !== ""
                                ? data.name
                                : "Unknown"}
                        </Text>
                    </View>
                    <Gap height={30} />
                    <View
                        style={[
                            styles.info,
                            { backgroundColor: theme.backgroundColorSecond },
                        ]}>
                        <IlLighting style={styles.illustration} />
                        <Text style={styles.date}>
                            {`${date?.day} ${date?.month} ${date?.year}`}
                        </Text>
                        <View style={styles.row}>
                            <Text style={styles.city}>
                                Waktu anda saat ini :
                            </Text>
                            <Text style={styles.time}>{dt}</Text>
                        </View>
                    </View>
                    <Gap height={30} />
                    <View style={styles.row}>
                        <Text style={styles.surah}>Surah</Text>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={() => navigation.navigate("Search")}>
                            <IcSearch />
                        </TouchableOpacity>
                    </View>
                    <Gap height={30} />
                    <View style={styles.listSurah}>
                        {(!loading || surah.length === 0) && (
                            <Skeleton type="loading-surah" />
                        )}
                        {loading && (
                            <>
                                {surah.map(
                                    (item, index) =>
                                        index + 1 <= 10 && (
                                            <Surah
                                                key={item.number}
                                                number={item.number}
                                                title={
                                                    item.name.transliteration.id
                                                }
                                                subtitle={
                                                    item.name.translation.id
                                                }
                                                arab={item.name.short}
                                                onPress={() =>
                                                    navigation.navigate(
                                                        "DetailSurah",
                                                        item,
                                                    )
                                                }
                                            />
                                        ),
                                )}
                            </>
                        )}
                        <Text
                            onPress={() => navigation.navigate("Search")}
                            style={styles.buttonLink}>
                            Tampilkan lebih banyak
                        </Text>
                    </View>
                </ScrollView>
            </View>
        </ThemeWrapper>
    );
};

export default Home;

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    welcome: {
        marginTop: 20,
        marginLeft: 30,
    },
    title: {
        fontFamily: Fonts.Semibold,
        fontSize: 22,
    },
    name: {
        fontFamily: Fonts.Semibold,
        fontSize: 22,
    },
    info: {
        marginHorizontal: 30,
        position: "relative",
        borderRadius: 20,
        padding: 20,
        paddingBottom: 6,
        marginTop: -10,
    },
    date: {
        fontFamily: Fonts.Bold,
        fontSize: 20,
        color: Colors.Other,
    },
    illustration: {
        position: "absolute",
        right: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // marginTop: 17
    },
    city: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.Other,
    },
    time: {
        fontFamily: Fonts.Semibold,
        fontSize: 35,
        color: Colors.Other,
        marginRight: 15,
    },
    surah: {
        marginLeft: 30,
        fontFamily: Fonts.Semibold,
        fontSize: 22,
        color: Colors.PrimaryColor,
    },
    btn: {
        marginRight: 30,
    },
    listSurah: {
        flex: 1,
    },
    buttonLink: {
        textAlign: "center",
        color: Colors.TintPrimary,
        fontFamily: Fonts.Semibold,
    },
});
