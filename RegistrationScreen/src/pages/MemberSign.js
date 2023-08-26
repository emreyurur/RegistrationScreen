import React, { useState } from 'react';
import { SafeAreaView,Alert } from 'react-native';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import MemberResult from './MemberResult';

const MemberSign = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userBirthday, setUserBirthday] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userAddress, setUserAddress] = useState('');

    function handleSubmit() {
         if (!userName || !userSurname || !userAddress || !userPhone || !userBirthday) {
             Alert.alert("EY Fitness", "Please fill all fields");
             return;
         }

        const user = {
            userName,
            userSurname,
            userAddress,
            userBirthday,
            userPhone,
        };
        navigation.navigate("MemberResultScreen", { user });
    }

    return (
        <SafeAreaView>
            <Input label="Member's Name" onChangeText={setUserName} />
            <Input label="Member's Surname" onChangeText={setUserSurname} />
            <Input label="Member's Birthday" onChangeText={setUserBirthday} />
            <Input label="Member's Phone Number" onChangeText={setUserPhone} />
            <Input label="Member's Address" onChangeText={setUserAddress} />
            <Button text="Complete the Registration" onPress={handleSubmit} />
        </SafeAreaView>
    );
};

export default MemberSign;
