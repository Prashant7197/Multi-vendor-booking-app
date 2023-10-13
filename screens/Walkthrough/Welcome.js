import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import { TextButton } from "../../components";
import { COLORS, FONTS, SIZES, images } from '../../constants';

const Welcome = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.light
            }}
        >
            {/* Logo & Title */}
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Image
                    source={images.logo1}
                    style={{
                        width: 250,
                        height: 160
                    }}
                />

                <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
                    Welcome to
                </Text>
                <Text style={{ marginTop: SIZES.base, ...FONTS.h1 }}>
                    First Roof
                </Text>
            </View>

            {/* Footer Buttons */}
            <View
                style={{
                    paddingHorizontal: SIZES.padding,
                    marginBottom: 30
                }}
            >
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        borderRadius: SIZES.radius
                    }}
                    label="Get Started"
                    onPress={() => navigation.navigate("Walkthrough")}
                />

                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: SIZES.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: COLORS.primary
                    }}
                    onPress={() => navigation.navigate("Home")}
                //onPress
                />
            </View>
        </View>
    )
}

export default Welcome;