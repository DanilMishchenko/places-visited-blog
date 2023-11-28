import {
  Image,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';

import { COLORS } from '@/constants';
import NewSVG from '@/assets/img/NewSVG';

type ImageLoaderProps = {
  onPress: () => Promise<void>;
  selectedImage: string;
};

const ImagePickerExample = (props: ImageLoaderProps) => {
  const { onPress, selectedImage } = props;

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.imgWrapper}>
        {selectedImage && (
          <Image source={{ uri: selectedImage }} style={styles.img} />
        )}
        <View
          style={[
            styles.svgWrapper,
            {
              borderColor:
                selectedImage === '' ? COLORS.secondary : COLORS.graydark,
              backgroundColor: selectedImage && COLORS.white,
              transform: selectedImage && [{ rotateZ: '45deg' }],
            },
          ]}
        >
          <NewSVG
            fill={selectedImage === '' ? COLORS.secondary : COLORS.graydark}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  imgWrapper: {
    width: 120,
    height: 120,
    marginTop: -60,
    borderRadius: 16,
    backgroundColor: COLORS.gray,
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  svgWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.25,
    borderRadius: 12,
    position: 'absolute',
    right: -12,
    bottom: 12,
  },
});

export default ImagePickerExample;
