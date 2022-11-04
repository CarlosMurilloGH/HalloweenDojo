import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import MainTitle from '../Screens/MainTitle';
import SecondTitle from '../Screens/SecondTitle';
import GetStarted from '../Screens/GetStarted';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Dashboard from '../Screens/Dashboard';
import Profile from '../Screens/Profile';



const Stack = createNativeStackNavigator();

const MainStack=()=>{
    return(
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen 
                name="Splash"
                component={Splash}
                />
            <Stack.Screen 
                name="MainTitle"
                component={MainTitle}
                />
            <Stack.Screen 
                name="SecondTitle"
                component={SecondTitle}
                />
            <Stack.Screen 
                name="GetStarted"
                component={GetStarted}
                />    
            <Stack.Screen 
                name="Login"
                component={Login}
                />     
            <Stack.Screen 
                name="SignUp"
                component={SignUp}
                /> 
            <Stack.Screen 
                name="Dashboard"
                component={Dashboard}
                /> 
            <Stack.Screen 
                name="Profile"
                component={Profile}
                /> 
                
          </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack;