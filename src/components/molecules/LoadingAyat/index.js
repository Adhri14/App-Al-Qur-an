/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Colors } from '../../../utils';

const LoadingAyat = () => (
  <SkeletonPlaceholder backgroundColor={Colors.TintSecondary}>
    <View style={styles.container}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(275, 0, 30)} />
          </View>
        </View>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.bar(270, 0, 50)} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(275, 0, 30)} />
          </View>
        </View>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.bar(270, 0, 50)} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(275, 0, 30)} />
          </View>
        </View>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.bar(270, 0, 50)} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(275, 0, 30)} />
          </View>
        </View>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.bar(270, 0, 50)} />
      </View>
    </View>
    <View style={styles.container}>
      <View style={styles.wrapper()}>
        <View style={styles.circle} />
        <View style={styles.wrapperBar}>
          <View>
            <View style={styles.bar(275, 0, 30)} />
          </View>
        </View>
      </View>
      <View style={styles.wrapperList}>
        <View style={styles.bar(270, 0, 50)} />
      </View>
    </View>
  </SkeletonPlaceholder>
);

export default LoadingAyat;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  wrapper: (marginTop) => ({
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: 30,
    paddingVertical: 12,
    marginTop,
    // borderWidth: 1,
    justifyContent: 'space-between',
  }),
  circle: { width: 50, height: 50, borderRadius: 50 / 2 },
  wrapperBar: {
    marginLeft: 10,
  },
  bar: (width, marginTop, height) => ({
    height,
    width,
    borderRadius: 4,
    marginTop,
  }),
  wrapperList: {
    marginLeft: 60,
  },
});
