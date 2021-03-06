import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import CustomText from '../../components/general/CustomText';
import { TextInput } from 'react-native-gesture-handler';
import { createUser } from '../../hooks/apiCalls';
import { useAuth } from '../../context/AuthContext';

const Signup = ({navigation}) => {
  const { setNewUser } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const signUpHandler = async (data) => {
    const res = await createUser(data);
    if (!res.error) {
      setNewUser(res);
      navigation.navigate("GroupLoginOrCreation");
    } else {
      console.log(res.error);
    }
  };

  return (
    <SafeAreaView>
      <CustomText
        title="Signup Screen"
        h1
      />

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="First name"
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>First name is required</Text>}
      
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Last name"
          />
        )}
        name="lastName"
        defaultValue=""
      />
      {errors.lastName && <Text>Last name is required</Text>}

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            placeholder="Desired username"
          />
        )}
        name="username"
        defaultValue=""
      />
      {errors.username && <Text>Username is required</Text>}

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email"
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors.email && <Text>Email is required.</Text>}

      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            placeholder="Password"
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password && <Text>Password is required.</Text>}
      
      <Controller
        control={control}
        rules={{
          required: false
        }}
        render={({ field: { onChange, value, onBlur }}) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            secureTextEntry={true}
            keyboardType="numeric"
            placeholder="Monthly Net Income (can be added later)"
          />
        )}
        name="income"
        defaultValue=""
      />
      
      <Button title="Signup" onPress={handleSubmit(signUpHandler)}/>

    </SafeAreaView>
  )
}

export default Signup
