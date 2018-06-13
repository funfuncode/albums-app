import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;
  return (
    <Card>
      <CardSection>
        <View style={{ marginRight: 15 }}>
          <Image style={{ width: 50, height: 50 }} source={{ uri: thumbnail_image }} />
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
          <Text style={{ fontSize: 18 }}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={{ height: 300, flex: 1, width: null }} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button pressed={() => Linking.openURL(url)}>Buy now</Button>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
