import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#1F1F1F',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 38,
  },
  imgLogo: {
    width: 24,
    height: 24, 
    marginLeft: 15,
  },
  btnAdd: {
    width: 24,
    height: 24, 
    marginLeft: 250,    
  },
  carrinho: {
    width: 31,
    height: 26,
    marginLeft: 25,       
  },
  stories: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imgStories: {
    marginTop: 18,
    width: 51,
    height: 51,
  }
})