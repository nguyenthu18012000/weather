import React from 'react';
import Layout from '../../components/common/main-layout';
import HomeComponent from '../../components/HomeComponent';

type Props = {
  navigation: any;
}
const Home = ({ navigation }: Props) => {
  return (
    <Layout>
        <HomeComponent navigation={navigation}/>
    </Layout>
  );
}
export default Home;
