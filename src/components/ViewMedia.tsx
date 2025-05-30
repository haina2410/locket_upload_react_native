/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Dimensions} from 'react-native';
import {View, TouchableOpacity, Colors, Image, Icon} from 'react-native-ui-lib';
import Video from 'react-native-video';

const screenWidth = Dimensions.get('window').width;
const cropWidth = 0.7;

interface ViewMediaProps {
  selectedMedia: {uri: string} | null;
  isVideo: boolean;
  onSelectMedia: () => void;
  onRemoveMedia: () => void;
  localLoading: boolean;
}

const ViewMedia: React.FC<ViewMediaProps> = ({
  selectedMedia,
  isVideo,
  onSelectMedia,
  onRemoveMedia,
  localLoading,
}) => {
  return (
    <View center>
      <TouchableOpacity
        disabled={localLoading}
        style={{
          borderRadius: 8,
          borderWidth: 2,
          borderColor: Colors.grey40,
        }}
        onPress={onSelectMedia}>
        {selectedMedia ? (
          !isVideo ? (
            <View>
              <Image
                width={screenWidth * cropWidth}
                height={screenWidth * cropWidth}
                source={{uri: selectedMedia.uri}}
                style={{borderRadius: 6, overflow: 'hidden'}}
              />
              <View absT marginT-4 marginR-4 absR>
                <TouchableOpacity onPress={onRemoveMedia}>
                  <Icon
                    assetGroup="icons"
                    assetName="ic_cancel"
                    size={24}
                    tintColor={Colors.red30}
                  />
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <View>
              <Video
                source={{uri: selectedMedia.uri}}
                resizeMode="cover"
                style={{
                  borderRadius: 6,
                  width: screenWidth * cropWidth,
                  height: screenWidth * cropWidth,
                  overflow: 'hidden',
                }}
              />
              <View absT marginT-4 marginR-4 absR>
                <TouchableOpacity onPress={onRemoveMedia}>
                  <Icon
                    assetGroup="icons"
                    assetName="ic_cancel"
                    size={24}
                    tintColor={Colors.red30}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )
        ) : localLoading ? (
          <View
            center
            width={screenWidth * cropWidth}
            height={screenWidth * cropWidth}>
            <ActivityIndicator size={64} color={Colors.primary} />
          </View>
        ) : (
          <View
            center
            width={screenWidth * cropWidth}
            height={screenWidth * cropWidth}>
            <Icon
              assetGroup="icons"
              assetName="ic_gallery"
              tintColor={Colors.grey40}
              size={64}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ViewMedia;
