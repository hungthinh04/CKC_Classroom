import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Welcome: undefined;
  Login: undefined;
  Home: undefined;
};

export default function WelcomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../assets/icon.png")} style={styles.logo} />
        <Text style={styles.title}>CKC Classroom</Text>
        <Text style={styles.desc}>
          Giúp giáo viên và học viên giao tiếp, tiết kiệm thời gian và sắp xếp
          nội dung một cách khoa học.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footnote}>
        Bằng việc tham gia, bạn đồng ý chia sẻ thông tin liên hệ với những người
        trong lớp của bạn. Ứng dụng CKC Classroom sử dụng các dịch vụ nội bộ,
        bao gồm tài liệu và lịch trình. Tìm hiểu thêm về{" "}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL(
              "https://support.google.com/edu/classroom/answer/6382344"
            )
          }
        >
          hoạt động chia sẻ thông tin
        </Text>{" "}
        và{" "}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL("https://support.google.com/edu/classroom")
          }
        >
          Lớp học
        </Text>
        .
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: "#111",
  },
  content: {
    alignItems: "center",
    marginTop:150,
  },
  logo: { width: 100, height: 100, marginBottom: 16 },
  title: { fontSize: 22, fontWeight: "bold", color: "white" },
  desc: { textAlign: "center", color: "#ccc", marginTop: 12, marginBottom: 24 },
  button: {
    backgroundColor: "#93c5fd",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: { color: "#000", fontWeight: "bold" },
  footnote: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "center",
    lineHeight: 18,
  },
  link: {
    color: "#42a5f5",
    textDecorationLine: "underline",
  },
});
