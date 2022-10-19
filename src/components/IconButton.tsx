import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import {IcnClose} from './Icons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
  },
  icnContainer: {},
  title: {},
});

interface Props extends TouchableOpacityProps {
  title: string;
}

function IconButton({title, ...props}: Props) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <View style={styles.icnContainer}>
        <IcnClose />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default IconButton;
