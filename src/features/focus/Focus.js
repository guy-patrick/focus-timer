import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
// components
import { RoundedButton } from '../../components/RoundedButton';
// variables
import { colors } from '../../utils/colors';
import { fontSizes, spacing } from '../../utils/sizes';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            onSubmitEditing={({ nativeEvent: { text } }) => setSubject(text)}
          />
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    flex: 0.5,
    padding: spacing.md,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    flex: 1,
    marginRight: spacing.md,
  },
});
