import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar"; // Thêm StatusBar từ expo

import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockClassDetail = {
  name: "CĐ TH 22 - TTTN",
  teacher: "Nguyễn Lê Việt Hoàng",
  term: "HK2 – Năm học: 2024-2025",
  subject: "Công nghệ phần mềm",
  announcements: [
    "Nhớ nộp bài tập trước ngày 10/06.",
    "Lịch học đã thay đổi, xem trong mục lịch.",
  ],
  materials: [
    {
      id: "1",
      title: "Hướng Dẫn Tạo Web API Đơn Giản với Python (FASTAPI)",
      date: "7 thg 1",
      teacher: "Nguyễn Lê Việt Hoàng",
      message: "tài liệu đây các em",
      file: "tailieu",
      type: "Tài liệu mới",
    },
    {
      id: "2",
      title: "Thang Điểm Chấm",
      teacher: "Nguyễn Lê Việt Hoàng",
      message: "tài liệu đây các em",
      file: "tailieu",
      date: "4 thg 1",
      type: "Tài liệu mới",
    },
    {
      id: "3",
      title: "Hướng Dẫn Web API Đơn Giản Với PHP",
      teacher: "Nguyễn Lê Việt Hoàng",
      message: "tài liệu đây các em",
      file: "tailieu",
      date: "2 thg 1",
      type: "Tài liệu mới",
    },
  ],
};

export default function ClassroomDetailScreen() {
  const route = useRoute();
  const { classId } = route.params;

  const navigation = useNavigation();

  const materials = mockClassDetail.materials;

  return (
    <View style={styles.container}>
      {/* Ẩn thanh trạng thái hệ thống */}
      <StatusBar style="light" hidden={false} />
      <SafeAreaView style={styles.statusBarBackground}></SafeAreaView>
      {/* Nội dung chính */}
      <View style={styles.headerContainer}>
        {/* Thanh menu trên */}
        <View style={styles.header}>
          <Ionicons
            name="menu"
            size={24}
            color="white"
            style={{ marginTop: 10 }}
          />
          <View style={{ flexDirection: "row", gap: 25, marginTop: 10 }}>
            <Ionicons name="videocam-outline" size={24} color="white" />
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="white"
            />
            <Ionicons name="ellipsis-vertical" size={24} color="white" />
          </View>
        </View>

        {/* Class Name Box */}
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.classBox}>
            <Text style={styles.className}>{mockClassDetail.name}</Text>
            <Text style={styles.classTerm}>{mockClassDetail.term}</Text>
          </View>

          {/* Announcements */}

          <View style={styles.annoucement}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.avatar}
            />
            <Text style={styles.annoucementContent}>
              Thông báo gì đó đến cho lớp
            </Text>
          </View>

          {/* Materials */}
          <View style={styles.section}>
            {materials.map((material) => (
              <View key={material.id} style={styles.material}>
                {/* Avatar và thông tin người dùng */}
                <View style={styles.materialInfo}>
                  <Image
                    source={require("../assets/icon.png")}
                    style={styles.avatar}
                  />
                  <View style={styles.headerTextContainer}>
                    <Text style={styles.userName}>{material.teacher}</Text>
                    <Text style={styles.date}>{material.date}</Text>
                  </View>
                </View>

                {/* Nội dung thông báo */}
                <Text style={styles.message}>{material.message}</Text>

                {/* Tài liệu đính kèm */}
                {material.file && (
                  <View style={styles.fileContainer}>
                    <Ionicons
                      name="document-text-outline"
                      size={24}
                      color="white"
                    />
                    <Text style={styles.fileText}>{material.file}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      {/* Thanh menu dưới cùng */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Login")}>
          <Ionicons name="reader-outline" size={24} color="white" />
          <Text style={styles.tabText}>Bảng tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("Assignment")}>
          <Ionicons name="documents-outline" size={24} color="white" />
          <Text style={styles.tabText}>Bài tập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem} onPress={() => navigation.navigate("People")}>
          <Ionicons name="people-outline" size={24} color="white" />
          <Text style={styles.tabText}>Mọi người</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNavBar}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#211f1f",
  },
  contentContainer: {
    paddingHorizontal: 6,
    backgroundColor: "#333", // Màu nền của toàn bộ phần cuộn
  },
  statusBarBackground: {
    backgroundColor: "black", // Màu nền của thanh StatusBar
    height: 10, // Chiều cao của thanh StatusBar
    justifyContent: "center",
    alignItems: "center",
    marginBottom: -85,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 40,
  },
  header: {
    flexDirection: "row",
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    paddingBottom: 28,
    backgroundColor: "#211f1f",
    zIndex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  classBox: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: 10,
    borderRadius: 10,
    height: 130,
  },
  className: {
    fontSize: 28,
    fontWeight: "normal",
    color: "#f5eaea",
  },
  classTerm: {
    color: "#f5eaea",
    fontSize: 16,
    fontWeight: "500",
  },
  section: {
    marginTop: 8,
    marginBottom: 8,
  },
  annoucement: {
    flexDirection: "row",
    gap: 10,
    marginTop: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
  },
  annoucementContent: {
    flexWrap: "wrap",
    marginTop: 10,
    color: "#bbb",
    fontSize: 12,
  },
  material: {
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 10,
  },
  materialInfo: {
    flexDirection: "row",
    gap: 15,

    flexWrap: "wrap",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTextContainer: {
    flexDirection: "column",
  },
  userName: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    flexWrap: "wrap",
  },
  date: {
    marginTop: 2,
    color: "#bbb",
    fontSize: 12,
  },
  message: {
    color: "#ddd",
    fontSize: 14,
    marginTop: 20,
    marginBottom: 9,
    flexWrap: "wrap",
  },
  fileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563eb",
    padding: 8,
    borderRadius: 6,
  },
  fileText: {
    color: "white",
    marginLeft: 8,
    fontSize: 14,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1f2937",
    marginBottom: 50,
    paddingVertical: 14,
    paddingHorizontal: 0,
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    color: "white",
    fontSize: 12,
  },

  bottomNavBar: {
    position: "absolute",
    bottom: 0, // Cố định thanh ở dưới cùng
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "black", // Màu đen cho thanh điều hướng
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
  },
  navItem: {
    alignItems: "center",
  },
});
