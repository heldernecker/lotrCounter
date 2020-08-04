import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';


export default function App() {
    const [round, setRound] = useState(1);
    const [threat, setThreat] = useState(25);
    const [willPower, setWillPower] = useState(0);
    const [stageThreat, setStageThreat] = useState(0);

    const goNextRound = () => {
        setRound(round + 1);
        setThreat(threat + 1);
        setWillPower(0);
    }

    return (
        <View style={styles.container}>
            {/*Show the current round*/}
            <View style={styles.roundContainer}>
                <Text style={{ color: 'white', fontSize: 30 }}>Round</Text>
                <Text style={{ color: 'white', fontSize: 60 }}>{round}</Text>
            </View>

            {/*Shows th current level of threat*/}
            <View style={styles.threatContainer}>
                <View style={styles.threatButtons}>
                    <Button onPress={() => setThreat(threat - 1)} color='black' title="-1" />
                </View>
                <View style={styles.threatCounter}>
                    <Text style={{ color: 'white', fontSize: 30 }}>Threat</Text>
                    <Text style={{ color: 'white', fontSize: 60 }}>{threat}</Text>
                </View>
                <View style={styles.threatButtons}>
                    <Button onPress={() => setThreat(threat + 1)} color='black' title="+1" />
                </View>
            </View>

            {/*Used in the staging phase to compare player will power with stage threat*/}
            <View style={styles.stagingContainer}>
                <View style={styles.stageThreatContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Staging Threat</Text>
                        <Text style={{ color: 'white', fontSize: 60 }}>{stageThreat}</Text>
                    </View>
                    <View style={styles.stagingContainerButtons}>
                        <Button onPress={() => setStageThreat(stageThreat - 1)} title="-1" />
                        <Button onPress={() => setStageThreat(stageThreat + 1)} title="+1" />
                    </View>
                </View>

                <View style={styles.willPowerContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Quest Willpower</Text>
                        <Text style={{ color: 'white', fontSize: 60 }}>{willPower}</Text>
                    </View>
                    <View style={styles.stagingContainerButtons}>
                        <Button onPress={() => setWillPower(willPower - 1)} title="-1" />
                        <Button onPress={() => setWillPower(willPower + 1)} title="+1" />
                    </View>
                </View>
            </View>

            <Button title="Next Round" onPress={() => goNextRound()} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dimgrey',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    roundContainer: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    threatContainer: {
        backgroundColor: 'black',
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    stagingContainer: {
        height: '30%',
        width: '100%',
        flexDirection: "row"
    },
    stageThreatContainer: {
        backgroundColor: 'darkred',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    willPowerContainer: {
        backgroundColor: 'darkgreen',
        height: '100%',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    threatButtons: {
        width: '25%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    threatCounter: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    stagingContainerButtons: {
        height: '20%',
        width: '100%',
        flexDirection: "row",
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    }
});
