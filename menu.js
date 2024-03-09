import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './homeScreen';
import GalleryScreen from './galleryScreen';
import RegistrarionScreen from './registrationScreen';

const homeName = 'Головна';
const galerryName = 'Фотогалерея';
const regName = 'Профіль';

const TopTab = createMaterialTopTabNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
      
      <TopTab.Navigator initialRouteName={homeName}  screenOptions={{
        animationEnabled: false,
        tabBarActiveTintColor: '#0076ff',
        tabBarInactiveTintColor: '#cdcdcdc',
        tabBarLabelStyle: { fontSize: 10 },
        tabBarStyle: { backgroundColor: '#f1f1f1' },
        tabBarScrollEnabled: false,
        swipeEnabled: false,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          height: 0,
        }
      }}
      >
 
        <TopTab.Screen name={homeName} component={HomeScreen}  options={
          {tabBarIcon: ({focused}) => 
            {
              if (focused)
                return <Image style={{width: 25, height: 25}} source={require('./icons/home-active.png')} />
              else
                return <Image style={{width: 25, height: 25}} source={require('./icons/home.png')} />
            }
          }
        }/>

        <TopTab.Screen name={galerryName} component={GalleryScreen} options={
          {tabBarIcon: ({focused}) => 
            {
              if (focused)
                return <Image style={{width: 25, height: 25}} source={require('./icons/image-active.png')} />
              else
                return <Image style={{width: 25, height: 25}} source={require('./icons/image.png')} />
            }
          }
        }/>
        
        <TopTab.Screen name={regName} component={RegistrarionScreen} options={
          {tabBarIcon: ({focused}) => 
            {
              if (focused)
                return <Image style={{width: 25, height: 25}} source={require('./icons/user-active.png')} />
              else
                return <Image style={{width: 25, height: 25}} source={require('./icons/user.png')} />
            }
          }
        }/>
        
      </TopTab.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
