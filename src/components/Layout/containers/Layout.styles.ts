import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 84 : 76,
  },
  headerSpecialBody: {
    paddingTop: 20,
    alignItems: 'flex-start',
    paddingLeft: 10,
  },
});

export default styles;
