/* eslint-disable arrow-body-style */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IcStar } from "../../../assets";
import { Colors, Fonts } from "../../../utils";
import { Gap } from "../../atoms";
import { useTheme } from "../../atoms/Theme";

const ListAyat = ({ number, title, subtitle, arab, isAlFatihah }) => {
    const { theme } = useTheme();
    if (isAlFatihah) {
        return (
            <View style={{ marginBottom: 30 }}>
                <Text
                    style={[
                        styles.arab,
                        { textAlign: "center", marginBottom: 10 },
                    ]}>
                    {arab}
                </Text>
                <Text
                    style={[
                        styles.latin,
                        { color: theme.textAyat, textAlign: "center" },
                    ]}>
                    {title}
                </Text>
            </View>
        );
    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.number}>
                        <IcStar />
                        <Text style={styles.textNum}>{number}</Text>
                    </View>
                    <View style={styles.wrapper}>
                        <Text style={styles.arab}>{arab}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.arti}>
                <Text style={[styles.latin, { color: theme.textAyat }]}>
                    {title}
                </Text>
                {/* <Text style={styles.ind}>{title}</Text> */}
            </View>
            <Gap
                height={1}
                backgroundColor={Colors.TintSecondary}
                marginTop={20}
                borderRadius={5}
            />
            <Gap height={30} />
        </View>
    );
};

export default ListAyat;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    number: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },
    textNum: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.PrimaryColor,
        position: "absolute",
        alignSelf: "center",
        top: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    title: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.TintPrimary,
        textAlign: "right",
    },
    subtitle: {
        fontFamily: Fonts.Medium,
        fontSize: 14,
        color: Colors.TintSecondary,
    },
    arab: {
        fontSize: 35,
        color: Colors.PrimaryColor,
        textAlign: "right",
    },
    arti: {
        paddingLeft: 40,
    },
    wrapper: {
        width: 300,
        paddingLeft: 20,
    },
    latin: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
    },
    ind: {
        fontFamily: Fonts.Medium,
        fontSize: 16,
        color: Colors.TintSecondary,
    },
});
