import React from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";



const CustomDrawer = (props) => {
    return (

        <DrawerContentScrollView {...props}>
            <Text>not just a component </Text>
        </DrawerContentScrollView>


            


    );
};

export default CustomDrawer;