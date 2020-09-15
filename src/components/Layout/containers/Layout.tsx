import React, { useContext } from 'react';
import { Header, Container, Left, Title, Body, Right, Content } from 'native-base';
import { ViewStyle, TextStyle, StyleProp } from 'react-native';
import { ColorContext } from '../../../context/ColorContext';
import { createDynamicStyles } from '../../../theme/commonStyles';
import styles from './Layout.styles';

function Layout({
  header,
  title,
  containerStyles,
  children,
}: {
  header?: string;
  title?: string;
  containerStyles?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}) {
  const { colors } = useContext(ColorContext);

  return (
    <Container style={[createDynamicStyles<ViewStyle>({ backgroundColor: colors.BACKGROUND }), containerStyles]}>
      <Header
        style={[
          createDynamicStyles<ViewStyle>({
            backgroundColor: colors.CONTAINER,
            borderBottomColor: colors.DETAILS,
          }),
          header !== undefined && styles.header,
        ]}>
        {title !== undefined && (
          <>
            <Left />
            <Body>
              <Title style={createDynamicStyles<TextStyle>({ color: colors.TEXT })}>
                {title}
              </Title>
            </Body>
            <Right />
          </>
        )}
        {header !== undefined && (
          <Body style={styles.headerSpecialBody}>
            <Title style={createDynamicStyles<TextStyle>({ color: colors.TEXT, fontSize: 24 })}>
              {header}
            </Title>
          </Body>
        )}
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

export default Layout;
