import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar"; // Thêm StatusBar từ expo

import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const mockClassDetail = {
  name: "CĐTH22 TTTN",
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
      type: "Tài liệu mới",
    },
    {
      id: "2",
      title: "Thang Điểm Chấm",
      date: "4 thg 1",
      type: "Tài liệu mới",
    },
    {
      id: "3",
      title: "Hướng Dẫn Web API Đơn Giản Với PHP",
      date: "2 thg 1",
      type: "Tài liệu mới",
    },
  ],
};

export default function ClassroomDetailScreen() {
  const route = useRoute();
  const { classId } = route.params;

  const materials = mockClassDetail.materials;

  return (
    <View style={styles.container}>
      {/* Ẩn thanh trạng thái hệ thống */}
      <StatusBar style="light" hidden={false}/>
<SafeAreaView style={styles.statusBarBackground}>
        
      </SafeAreaView>
      {/* Nội dung chính */}
      <View style={styles.headerContainer}>
        {/* Thanh menu trên */}
        <View style={styles.header}>
          <Ionicons name="menu" size={24} color="white" />
          <Text style={styles.headerText}>Google Classroom</Text>
          <Ionicons name="information-circle-outline" size={24} color="white" />
        </View>

        {/* Class Name Box */}
        <View style={styles.classBox}>
          <Text style={styles.className}>{mockClassDetail.name}</Text>
          <Text style={styles.classTerm}>{mockClassDetail.term}</Text>
        </View>

        {/* Announcements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông báo</Text>
          {mockClassDetail.announcements.map((announcement, index) => (
            <Text key={index} style={styles.sectionText}>
              {announcement}
            </Text>
          ))}
        </View>

        {/* Materials */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tài liệu</Text>
          {materials.map((material) => (
            <View key={material.id} style={styles.material}>
              <Text style={styles.materialTitle}>{material.title}</Text>
              <Text style={styles.materialDate}>
                Ngày đăng: {material.date}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Thanh menu dưới cùng */}
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="home" size={24} color="white" />
          <Text style={styles.tabText}>Bảng tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="clipboard" size={24} color="white" />
          <Text style={styles.tabText}>Bài tập</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabItem}>
          <Ionicons name="people" size={24} color="white" />
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
   statusBarBackground: {
    backgroundColor: 'black', // Màu nền của thanh StatusBar
    height: 10, // Chiều cao của thanh StatusBar
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:-85,
  },
  headerContainer: {
    flex: 1,
    paddingTop: 40, // Bù đắp cho thanh status bị ẩn
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
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
    padding: 16,
    alignItems: "center",
    marginTop: 20,
  },
  className: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  classTerm: {
    color: "#bbb",
    fontSize: 14,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    color: "#bbb",
    fontSize: 14,
    marginBottom: 4,
  },
  material: {
    backgroundColor: "#1f2937",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  materialTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  materialDate: {
    color: "#bbb",
    fontSize: 14,
    marginTop: 4,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1f2937",
    marginBottom:50,
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
