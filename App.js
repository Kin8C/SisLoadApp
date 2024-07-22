import React from 'react';
import {View} from 'react-native';
import {SelectList} from 'react-native-dropdown-search-list';
import {useState} from 'react';

const App = () => {
  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: 'BLP 914 - ANANIAS OROSCO', disabled: true},
    {key: '2', value: 'WFR 420 - OSCAR ESTALMAN'},
    {key: '3', value: 'LSS 951 - EMILIO PUERTAS'},
    {key: '4', value: 'LSS 952 - ELVER HOMES', disabled: true},
    {key: '5', value: 'WOT 650 - SACARIAS PIEDRAS'},
    {key: '6', value: 'JPK 318 - EMILIANO DEL RIO'},
    {key: '7', value: 'FJK 815 - EUSTACLIO OCORO'},
  ];

  return (
    <View>
      <View style={{backgroundColor: 'green', width: 150, height: 150}}></View>
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        search="True"
      />
    </View>
  );
};

export default App;
