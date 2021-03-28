import React, {useState} from 'react'
import {View,Button,TextInput, Alert,StyleSheet} from 'react-native'

const Register = (props) => {
    
    const initialState = {
        email: '',
        password: '',
        name:''
    }

    const [state,setState] = useState(initialState)
    
    const onSignUp = ()=>{
        Alert.alert(`olá ${state.name}`)
    }

    return (
        <View style={{flex:1,justifyContent:'center'}}>
          <TextInput 
            placeholder="nome"
            onChangeText={(name)=>setState({name:name})}
            />
         <TextInput 
                 
            placeholder="email"
            onChangeText={(email)=>setState({email:email})}
            />
         <TextInput 
            placeholder="senha"
            secureTextEntry={true}
            onChangeText={(senha)=>setState({senha:senha})}
            />
        <Button 
            onPress={()=>onSignUp()}
            title="Sign Up"
            />
        </View>
    )
}


const style = StyleSheet.create({
    input: {
        color:"red"
    }
})

export default Register
