import { StyleSheet } from 'react-native';
import { DIMENSIONS } from '../../../constants';

const styles = StyleSheet.create({
  backButtonWrapper: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1000,
  },
  image: {
    width: DIMENSIONS.WIDTH,
    height: DIMENSIONS.HEIGHT / 1.7,
  },
  topGradient: {
    height: DIMENSIONS.HEIGHT / 8,
    width: DIMENSIONS.WIDTH,
    position: 'absolute',
    top: 0,
  },
  bottomGradient: {
    height: DIMENSIONS.HEIGHT / 4,
    width: DIMENSIONS.WIDTH,
    position: 'absolute',
    bottom: 0,
  },
  name: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -2,
    textTransform: 'uppercase',
  },
  socialWrapper: {
    flexDirection: 'row',
    width: DIMENSIONS.WIDTH / 2,
    alignSelf: 'center',
  },
  groopText: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 20,
  },
  badge: {
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  youtubeWrapper: {
    width: DIMENSIONS.WIDTH,
    height: 240,
    marginTop: 20,
  },
});

export default styles;
