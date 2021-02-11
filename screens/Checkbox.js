import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

const Checkbox = () => {
    const [checkStatus, setCheckStatus] = useState(false);

    const toggleCheckbox = () => {
        setCheckStatus(!checkStatus);
        console.log(!checkStatus);
    }

  return (
    <View>
      <TouchableHighlight onPress={() => toggleCheckbox()}>
          <Text>Checkbox is {checkStatus ? "checked" : "unchecked"}</Text>
      </TouchableHighlight>
     </View>
  );
}

export default Checkbox;