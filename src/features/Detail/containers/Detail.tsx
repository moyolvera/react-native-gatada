import React, { useContext, useMemo } from 'react';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import YoutubePlayer from 'react-native-youtube-iframe';
import { Container, Text, View, Icon, Content } from 'native-base';
import { ViewStyle, Image, TouchableOpacity, TextStyle } from 'react-native';
import { ColorContext } from '../../../context/ColorContext';
import CommonStyles, { createDynamicStyles } from '../../../theme/commonStyles';
import { AuthStackParamList } from '../../../navigator/Navigator';
import { DIMENSIONS } from '../../../constants';
import { isValidString } from '../../../modules/utils';
import styles from './Detail.styles';

const Detail = () => {
  const { colors } = useContext(ColorContext);
  const { params } = useRoute<RouteProp<AuthStackParamList, 'Detail'>>();
  const vatoData = useMemo(() => params?.vato || {}, [params]);
  const { goBack } = useNavigation();

  return (
    <Container style={createDynamicStyles<ViewStyle>({ backgroundColor: colors.CONTAINER })}>
      <Content>
        <TouchableOpacity
          style={styles.backButtonWrapper}
          onPress={() => {
            goBack();
          }}>
          <Icon name="chevron-left" type="Feather" style={createDynamicStyles<TextStyle>({ color: 'white' })} />
        </TouchableOpacity>
        {vatoData && (
          <>
            <View>
              <Image source={{ uri: vatoData.photo.cover }} style={styles.image} />
              <LinearGradient
                style={styles.topGradient}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 1.0 }}
                locations={[0, 0.9]}
                colors={['#141414', '#00000000']}
              />
              <LinearGradient
                style={styles.bottomGradient}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 0.0, y: 0.0 }}
                locations={[0, 0.9]}
                colors={['#141414', '#00000000']}
              />
              <Text
                style={[
                  styles.name,
                  createDynamicStyles<TextStyle>({
                    color: colors.TEXT,
                  }),
                ]}>
                {vatoData.name}
              </Text>
            </View>
            <View style={styles.socialWrapper}>
              <TouchableOpacity style={CommonStyles.flexOne}>
                <Icon
                  type="FontAwesome"
                  name="facebook"
                  style={createDynamicStyles<TextStyle>({
                    color: isValidString(vatoData.social.facebook) ? '#4267B2' : colors.DETAILS_LIGHT,
                    fontSize: 34,
                  })}
                />
              </TouchableOpacity>
              <TouchableOpacity style={CommonStyles.flexOne}>
                <Icon
                  type="FontAwesome"
                  name="instagram"
                  style={createDynamicStyles<TextStyle>({
                    color: isValidString(vatoData.social.instagram) ? '#C13584' : colors.DETAILS_LIGHT,
                    fontSize: 34,
                  })}
                />
              </TouchableOpacity>
              <TouchableOpacity style={CommonStyles.flexOne}>
                <Icon
                  type="FontAwesome"
                  name="twitter"
                  style={createDynamicStyles<TextStyle>({
                    color: isValidString(vatoData.social.twitter) ? '#1DA1F2' : colors.DETAILS_LIGHT,
                    fontSize: 34,
                  })}
                />
              </TouchableOpacity>
              <TouchableOpacity style={CommonStyles.flexOne}>
                <Icon
                  type="FontAwesome"
                  name="youtube"
                  style={createDynamicStyles<TextStyle>({
                    color: isValidString(vatoData.social.youtube) ? '#FF0000' : colors.DETAILS_LIGHT,
                    fontSize: 34,
                  })}
                />
              </TouchableOpacity>
            </View>
            {isValidString(vatoData.youtubeLink) && (
              <View
                style={[styles.youtubeWrapper, createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND })]}>
                <YoutubePlayer
                  height={240}
                  width={DIMENSIONS.WIDTH}
                  videoId={vatoData.youtubeLink}
                  play={false}
                  volume={50}
                  playbackRate={1}
                  initialPlayerParams={{
                    showClosedCaptions: true,
                  }}
                />
              </View>
            )}
            <View style={CommonStyles.padding20}>
              <Text
                style={[
                  styles.groopText,
                  createDynamicStyles<TextStyle>({
                    color: colors.TEXT,
                  }),
                ]}>{`GRUPO ${vatoData.group.toUpperCase()}`}</Text>
              <View style={[CommonStyles.flexRow, CommonStyles.marginBottom20]}>
                {vatoData.seasons.map((text) => (
                  <View style={[styles.badge, createDynamicStyles<ViewStyle>({ backgroundColor: colors.TEXT })]}>
                    <Text>{text}</Text>
                  </View>
                ))}
              </View>
              <Text style={createDynamicStyles<TextStyle>({ color: colors.TEXT, letterSpacing: 2 })}>
                {vatoData.biography}
              </Text>
            </View>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Detail;
