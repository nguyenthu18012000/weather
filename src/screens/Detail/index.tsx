import React from 'react';
import { Text } from 'react-native';
import Layout from '../../components/common/main-layout';
import DetailWeather from '../../components/DetailComponent';

type Props = {
  route: any;
  navigation:any;
}
const Detail = ({ route,navigation}: Props) => {
  const { dataNext7DaysWeather } = route.params;

  return (
    <Layout>
        <DetailWeather data={dataNext7DaysWeather} navigation={navigation} />
    </Layout>
  );
}

export default Detail;
