import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.innerContent}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.textInput}>
            <Image
              source={require("./assets/person.png")}
              style={styles.inputLogo}
            />
            <TextInput placeholder="Type your username" />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.textInput}>
            <Image
              source={require("./assets/lock.png")}
              style={styles.inputLogo}
            />
            <TextInput placeholder="Type your password" />
          </View>
          <Text style={styles.forgotPassword}>Forget Password?</Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ fontWeight: "500", color: "white" }}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.signupLabel}>Or Signup using</Text>
          <View style={styles.logoContainer}>
            <Image
              source={require("./assets/facebook.png")}
              style={styles.logo}
            />
            <Image
              source={require("./assets/twitter.png")}
              style={styles.logo}
            />
            <Image
              source={require("./assets/google.png")}
              style={styles.logo}
            />
          </View>
        </View>
        <View>
          <Text style={styles.label}>Or Sign Up Using</Text>
          <Text style={styles.signupBottomLabel}>SIGN UP</Text>
        </View>
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
    height: "80%",
    width: "90%",
    borderRadius: 5,
    paddingVertical: 50,
    justifyContent: "space-between",
  },
  innerContent: {
    width: "80%",
  },
  loginHeading: {
    fontSize: 25,
  },
  label: {
    fontSize: 12,
    marginTop: 20,
    fontWeight: "500",
  },
  textInput: {
    color: "grey",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 8,
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
    backgroundColor: "#b964bb",
    borderRadius: 50,
    padding: 5,
  },
  logo: {
    width: 50,
    height: 50,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupLabel: {
    fontSize: 10,
    textAlign: "center",
    marginBottom: 10,
    marginTop: 30,
  },
  signupBottomLabel: {
    textAlign: "center",
    marginTop: 5,
  },
  inputLogo: {
    width: 22,
    height: 22,
    marginRight: 5,
    opacity: 0.5,
  },
});
