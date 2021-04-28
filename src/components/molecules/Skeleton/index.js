/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Colors } from '../../../utils';
import LoadingAyat from '../LoadingAyat';
import LoadingSurah from '../LoadingSurah';

const Skeleton = ({ type }) => {
  if (type === 'loading-surah') {
    return <LoadingSurah />;
  }
  if (type === 'loading-ayat') {
    return <LoadingAyat />;
  }
  return (
    <SkeletonPlaceholder backgroundColor={Colors.TintSecondary}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(120, 0, 10)} />
            <View style={styles.bar(80, 10, 10)} />
          </View>
          <View>
            <View style={styles.bar(100, 0, 30)} />
          </View>
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default Skeleton;

const styles = StyleSheet.create({
  wrapper: (marginTop) => ({
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    paddingVertical: 12,
    marginTop,
    // borderWidth: 1,
  }),
  circle: { width: 50, height: 50, borderRadius: 50 / 2 },
  wrapperBar: {
    flex: 1, marginLeft: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
  },
  bar: (width, marginTop, height) => ({
    height,
    width,
    borderRadius: 4,
    marginTop,
  }),
});
