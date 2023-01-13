
import React, { useState } from 'react';//导入state
import { StyleSheet, Text, TextInput, View, Image, Button, ScrollView, FlatList, SectionList } from 'react-native';


//-------SectionList 段、部分--------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasic = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
          { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
        ]}

        renderItem={
          ({ item }) =>
            <Text style={styles.item}>
              {item}
            </Text>
        }

        renderSectionHeader={
          ({ section }) =>
            <Text style={styles.sectionHeader}>
              {section.title}
            </Text>
        }

        keyExtractor={
          (item, index) =>
            `basicListEntry-${item.title}`
        }
      />
    </View>
  );
}

export default SectionListBasic;