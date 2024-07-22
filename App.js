import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-search-list';
import {useState} from 'react';

const App = () => {
  const [macrozona, setmacrozona] = useState('');
  const [contratista, setcontratista] = useState('');
  const [planilla, setplanilla] = useState('');
  const macrozonaData = [
    {key: 'A', value: 'Macro Zona A', disabled: false},
    {key: 'B', value: 'Macro Zona B'},
    {key: 'C', value: 'Macro Zona C'},
    {key: 'D', value: 'Macro Zona D', disabled: true},
    {key: 'M', value: 'Mensajeria'}
  ];
  const conductorData = [
    {key: '1', value: 'BLP 914 - ANANIAS OROSCO', disabled: false},
    {key: '2', value: 'WFR 420 - OSCAR ESTALMAN'},
    {key: '3', value: 'LSS 951 - EMILIO PUERTAS'},
    {key: '4', value: 'LSS 952 - ELVER HOMES', disabled: true},
    {key: '5', value: 'WOT 650 - SACARIAS PIEDRAS'},
    {key: '6', value: 'JPK 318 - EMILIANO DEL RIO'},
    {key: '7', value: 'FJK 815 - EUSTACLIO OCORO'}
  ];
  const labelPlanillas = "Ingrese Numero de Planilla(s)";

  return (
    <View>
      <View style={{backgroundColor: 'green', width: 150, height: 150}}></View>
      <SelectList
        placeholder='Seleccione Macro Zona'
        setSelected={val => setcontratista(val)}
        data={macrozonaData}
        save="value"
        search="True"
      />
      <SelectList
      placeholder='Seleccione Contratista'
        setSelected={val => set(val)}
        data={conductorData}
        save="value"
        search="True"
      />
      <Text>{labelPlanillas}</Text>
      <TextInput style={styles.input} onChange={setplanilla}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  input:{
    borderWidth:1
  }
});

export default App;
