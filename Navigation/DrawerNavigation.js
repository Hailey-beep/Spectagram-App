import React from "react";
import {creatDrawerNavigator} from "@react-native/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../Screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator =()=> {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;