import React, { useContext, useState } from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { SvgXml } from 'react-native-svg'
import firebase from '../config/firebase';
import { getFirestore, doc, updateDoc } from 'firebase/firestore/lite'

import Colors from '../config/colors'
import { AppScreen, AppRadio, AppButton, AppLoading } from '../components/';
import { Logo, Interview } from '../constants/';
import AppContext from '../context/AppContext';
import { getData } from '../cache/UserStorage';



const { width, height } = Dimensions.get('screen');

export default function Gender({ navigation }) {
    const { appContext, setAppContext } = useContext(AppContext);
    const [loading, setLoading] = useState(false);

    const genderHandler = (gender) => {
        setAppContext({ isLaunched: appContext.isLaunched, language: appContext.gender, gender: gender, mode: appContext.mode, activeModeTitle: appContext.activeModeTitle })
    }
    const continueHandler = async () => {
        setLoading(true)
        if (!appContext.isLaunched) {
            setLoading(false)
            navigation.navigate('Mode')

        }
        else {
            const db = getFirestore(firebase);
            const id = await getData();
            const docRef = doc(db, "devices", id);
            await updateDoc(docRef, appContext)
            setLoading(false)
            navigation.navigate('Home')
        }
    }

    return (
        <AppScreen>
            <View style={styles.container}>
                <SvgXml xml={Logo} width='40%' height={100} />
                <View style={styles.wrapper}>
                    <View style={{ width: '100%' }}>
                        <Text adjustsFontSizeToFit style={{ fontSize: 18, marginBottom: 10 }}>Select a gender:</Text>
                        <AppRadio disabled={true} title='Jane' appContext={appContext.gender} onPress={() => genderHandler('Jane')} />
                        <AppRadio disabled={true} title='James' appContext={appContext.gender} onPress={() => genderHandler('James')} />
                    </View>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        {!loading ? <AppButton title={appContext.isLaunched ? 'Ok' : 'Continue'} disabled={appContext.language ? false : true} onPress={() => continueHandler()} /> :
                            <View style={{ width: 50, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 25 }}>
                                <AppLoading visible={true} />
                            </View>}
                    </View>
                </View>
            </View>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: height,
        width: width,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-between'
    },
    wrapper: {
        height: height - 170,
        width: '100%',
        paddingHorizontal: 30,
        justifyContent: 'space-evenly'
    }
});