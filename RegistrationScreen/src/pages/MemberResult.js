import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const MemberResult = ({ route }) => {
    const { user } = route.params;

    return (
        <SafeAreaView>
            <Text style={styles.message}>Registration Completed!</Text>
            <Text style={styles.label}>Member's Name:{user.userName} </Text>
            <Text style={styles.label}>Member's Surname:{user.userSurname} </Text>
            <Text style={styles.label}>Member's Birthday:{user.userBirthday} </Text>
            <Text style={styles.label}>Member's Phone Number:{user.userPhone} </Text>
            <Text style={styles.label}>Member's Address:{user.userAddress} </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    label: {
        fontWeight: "bold",
        fontSize: 30,
        margin: 5,
    },
    message: {
        fontWeight: "bold",
        fontSize: 50,
        textAlign: "center",
    },
});

export default MemberResult;
