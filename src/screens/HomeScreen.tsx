import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const mockClasses = [
  {
    id: "1",
    name: "CĐTH22 TTTN",
    subject: "Nguyễn Lê Việt Hoàng",
    term: "HK2 – Năm học: 2024-2025",
    bg: require("../assets/icon.png"),
  },
  {
    id: "2",
    name: "CĐ TH 22DDD – ĐA LTDĐ",
    subject: "Nguyễn Lê Việt Hoàng",
    term: "HK2 – Năm học: 2024-2025",
    bg: require("../assets/icon.png"),
  },
  {
    id: "3",
    name: "CĐ TH 22DD D",
    subject: "Ngọc Nguyễn Thị",
    term: "Công nghệ phần mềm",
    bg: require("../assets/icon.png"),
  },
];

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleClassPress = (classId) => {
    navigation.navigate("ClassroomDetail", { classId });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="white" />
        <Text style={styles.title}>
          <Text style={{ fontWeight: "500" }}>Google</Text> Classroom
        </Text>
        <View style={styles.avatar}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>T</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={24} color="white" />
      </View>

      {/* Weekly Overview */}
      <View style={styles.weekBox}>
        <View style={styles.weekContent}>
          <Text style={{ color: "#fff", fontWeight: "normal", fontSize: 20 }}>
            Tuần này
          </Text>
          <Text style={{ color: "#fff", fontWeight: "200" }}>
            Hiện không có bài tập nào
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.link}>Xem danh sách việc cần làm</Text>
        </TouchableOpacity>
      </View>

      {/* Class Cards */}
      <ScrollView style={styles.scroll}>
        {mockClasses.map((cls) => (
          <TouchableOpacity
            key={cls.id}
            style={styles.card}
            onPress={() => handleClassPress(cls.id)} // Chuyển đến chi tiết lớp
          >
            <Image source={cls.bg} style={styles.bgImage} />
            <View style={styles.overlay} />
            <View style={styles.cardContent}>
              <View style={styles.classInfo}>
                <Text style={styles.className}>{cls.name}</Text>
                <Text style={styles.term}>{cls.term}</Text>
              </View>
              <Text style={styles.subject}>{cls.subject}</Text>
            </View>

            <Ionicons
              name="ellipsis-vertical"
              size={20}
              color="white"
              style={styles.cardMenu}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  title: { fontSize: 20, fontWeight: "300", color: "white" },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#4f46e5",
    alignItems: "center",
    justifyContent: "center",
  },
  weekBox: {
    borderWidth: 1,
    borderColor: "#9e9696",

    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
  },
  weekContent: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: { color: "#60a5fa", fontSize: 12, fontWeight: "500", marginTop: 8 },
  scroll: { flex: 1 },
  card: {
    height: 120,
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    position: "relative",
    flex: 1,
    justifyContent: "space-around",
  },
  classInfo: {
    flexDirection: "column",
    marginBottom: 30,
  },
  bgImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    resizeMode: "cover",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    position: "absolute",
    bottom: 10,
    left: 16,
  },
  className: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  subject: {
    color: "#ddd",
    fontSize: 12,
  },
  term: {
    color: "#bbb",
    fontSize: 12,
    fontStyle: "italic",
  },
  cardMenu: {
    position: "absolute",
    top: 8,
    right: 8,
  },
});
