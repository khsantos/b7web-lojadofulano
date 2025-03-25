import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Screen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/100" }}
          style={styles.avatar}
        />
        <Text style={styles.userName}>Pedro Pedreiro</Text>

        <TouchableOpacity style={styles.editProfile}>
          <Text style={styles.editProfileText}>Editar Perfil</Text>
        </TouchableOpacity>

        <View style={styles.reviews}>
          <Text style={styles.reviewsLabel}>Avaliações</Text>
          <Text style={styles.reviewsCount}>8.932</Text>
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.selectedTab]}>
          <Text style={[styles.tabText, styles.selectedTabText]}>
            Avaliações
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Avaliações Avaliadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Ajuda</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.reviewCard}>
        <View style={styles.reviewTitle}>
          <Text style={styles.whiteText}>Título da review</Text>
          <View style={styles.rating}>
            <FontAwesome name="star" size={14} color="#F7B731" />
            <Text style={styles.whiteText}> 4.9</Text>
          </View>
        </View>

        <View style={styles.reviewStats}>
          <View style={styles.stat}>
            <FontAwesome name="comment-o" size={14} color="#fff" />
            <Text style={styles.whiteText}> 1</Text>
          </View>
          <View style={styles.stat}>
            <AntDesign name="like2" size={14} color="#fff" />
            <Text style={styles.whiteText}> 34</Text>
          </View>
          <View style={styles.stat}>
            <AntDesign name="dislike2" size={14} color="#fff" />
            <Text style={styles.whiteText}> 3</Text>
          </View>
          <TouchableOpacity style={styles.openButton}>
            <Text>Abrir...</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.seeMore}>
        <Text>Ver mais →</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: "#001a70",
    padding: 20,
    justifyContent: "center",
  },
  profileContainer: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  editProfile: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  editProfileText: {
    color: "#001a70",
  },
  reviews: {
    alignItems: "center",
    marginTop: 10,
  },
  reviewsLabel: {
    fontSize: 14,
    color: "gray",
  },
  reviewsCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "white",
  },
  tabButton: {
    padding: 8,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderBottomColor: "#001a70",
  },
  tabText: {
    color: "gray",
  },
  selectedTabText: {
    color: "#001a70",
    fontWeight: "bold",
  },
  reviewCard: {
    backgroundColor: "#001a70",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  reviewTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
  whiteText: {
    color: "white",
  },
  reviewStats: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  seeMore: {
    alignItems: "center",
    margin: 20,
  },
});
