import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from 'react';

export default function LoginScreen() {
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    const handleLogin = () => {
        Alert.alert("Login Info", `${username} & ${password}`)
    }

    return (
        <View style={styles.innerView}>
            <Text style={styles.loginHeading}>Login</Text>
            <View style={styles.innerContent}>
                <Text style={styles.label}>Username</Text>
                <View style={styles.textInput}>
                    <Image
                        source={require("../assets/person.png")}
                        style={styles.inputLogo}
                    />
                    <TextInput
                        placeholder="Type your username"
                        style={{ width: "90%" }}
                        onChangeText={(val) => setUsername(val)}
                        value={username}
                    />
                </View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.textInput}>
                    <Image
                        source={require("../assets/lock.png")}
                        style={styles.inputLogo}
                    />
                    <TextInput
                        placeholder="Type your password"
                        style={{ width: "90%" }}
                        onChangeText={(val) => setPassword(val)}
                        value={password}
                    />
                </View>
                <TouchableOpacity><Text style={styles.forgotPassword}>Forget Password?</Text></TouchableOpacity>
                <TouchableOpacity onPress={handleLogin}>
                    {/* <LinearGradient
                        style={styles.loginButton}
                        colors={["#b964bb", "#1ecbe1"]}
                        start={[0.75, 0]}
                    >
                        <Text style={{ fontWeight: "500", color: "white" }}>LOGIN</Text>
                    </LinearGradient> */}
                </TouchableOpacity>
                <Text style={styles.signupLabel}>Or Signup using</Text>
                <View style={styles.logoContainer}>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/facebook.png")}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/twitter.png")}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require("../assets/google.png")}
                            style={styles.logo}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={[styles.label, { opacity: 0.7 }]}>Or Sign Up Using</Text>
                <TouchableOpacity><Text style={styles.signupBottomLabel}>SIGN UP</Text></TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1ecbe1",
        alignItems: "center",
        justifyContent: "center",
    },
    innerView: {
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 5,
        flex: 1,
        paddingVertical: 50,
        justifyContent: "space-around",
    },
    innerContent: {
        width: "80%",
    },
    loginHeading: {
        fontSize: 30,
        fontWeight: "bold"
    },
    label: {
        fontSize: 12,
        marginTop: 25,
        fontWeight: "500",
    },
    textInput: {
        color: "grey",
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderColor: "grey",
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
    forgotPassword: {
        textAlign: "right",
        fontSize: 12,
        marginTop: 5,
        fontWeight: "500",
    },
    loginButton: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        borderRadius: 50,
        padding: 5,
    },
    logo: {
        width: 40,
        height: 40,
        marginHorizontal: 2
    },
    logoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    signupLabel: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 10,
        marginTop: 30,
    },
    signupBottomLabel: {
        textAlign: "center",
        marginTop: 8,
        fontWeight: "700"
    },
    inputLogo: {
        width: 22,
        height: 22,
        marginRight: 5,
        opacity: 0.5,
    },
});
