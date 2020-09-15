import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
  },
  imageWrapper: {
    width: 25,
  },
  item: {
    flexDirection: 'row',
    height: 45,
  },
  smallColumn: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyColumn: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
