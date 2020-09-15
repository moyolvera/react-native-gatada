import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Icon, Text, View } from 'native-base';
import { Image, TouchableOpacity, FlatList, ViewStyle } from 'react-native';

import { Layout } from '../../../components';
import { ColorContext } from '../../../context/ColorContext';
import { VatoContext } from '../../../context/VatosContext';
import { Vato } from '../../../declarations/global.td';
import styles from './Competitors.styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { TabStackParamList } from '../../../navigator/RootNavigator';
import { createDynamicStyles } from '../../../theme/commonStyles';
import SCREENS from '../../../constants/screens';

function Competitors() {
  const { colors } = useContext(ColorContext);
  const { vatos } = useContext(VatoContext);
  const { navigate } = useNavigation();

  const { params } = useRoute<RouteProp<TabStackParamList, 'Vatos'>>();
  const paddingBottom = useMemo(() => params?.paddingBottom || 0, [params]);

  const [localVatos, setLocalVatos] = useState<Vato[]>([]);

  function sortVatosData(vatosData: Vato[]) {
    const sortedVatos = vatosData.sort((i, o) => i.name.localeCompare(o.name));
    setLocalVatos(sortedVatos);
  }

  useEffect(() => {
    sortVatosData(vatos);
  }, [vatos]);

  return (
    <Layout title="Vatos" containerStyles={createDynamicStyles<ViewStyle>({ paddingBottom })}>
      <FlatList
        data={localVatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }: { item: Vato; index: number }) => (
          <TouchableOpacity
            onPress={() => {
              navigate(SCREENS.DETAIL, { vato: item });
            }}>
            <View style={styles.item}>
              <View style={styles.smallColumn}>
                <View style={styles.imageWrapper}>
                  {item.photo.icon !== undefined && item.photo.icon !== '' && (
                    <Image
                      source={{
                        uri: item.photo.icon,
                        width: 25,
                        height: 25,
                      }}
                      style={styles.image}
                    />
                  )}
                </View>
              </View>
              <View
                style={[
                  index !== localVatos.length - 1 &&
                    createDynamicStyles<ViewStyle>({ borderBottomWidth: 1, borderBottomColor: colors.DETAILS_LIGHT }),
                  styles.bodyColumn,
                ]}>
                <Text style={{ color: colors.TEXT }}>{item.name}</Text>
              </View>
              <View style={styles.smallColumn}>
                <Icon name="chevron-right" type="Feather" style={{ color: colors.TEXT }} />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </Layout>
  );
}

export default Competitors;
