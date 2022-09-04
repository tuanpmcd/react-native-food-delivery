import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from "./src/navigation/AuthNavigator";
import HomeNavigator from "./src/navigation/HomeNavigator";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)

    return (
        <NavigationContainer>
            {isAuthenticated ? <HomeNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

export default App