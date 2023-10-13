import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useDynamicAnimation, MotiImage } from "moti";

import { SIZES, images } from "../../constants";

const Walkthrough4 = ({ animate }) => {

    // Moti initial position
    const motiImage0 = useDynamicAnimation(() => ({
        top: "50%",
        left: "50%"
    }))
    const motiImage1 = useDynamicAnimation(() => ({
        top: "30%",
        left: "25%"
    }))

    const motiImage2 = useDynamicAnimation(() => ({
        top: "45%",
        left: "15%"
    }))

    // const motiImage3 = useDynamicAnimation(() => ({
    //     top: "58%",
    //     left: "25%"
    // }))
    
    // const motiImage4 = useDynamicAnimation(() => ({
    //     top: "61%",
    //     left: "40%"
    // }))
    
    // const motiImage5 = useDynamicAnimation(() => ({
    //     top: "27%",
    //     left: "50%"
    // }))

    React.useEffect(() => {
        if (animate) {
            motiImage0.animateTo({
                top: "75%",
                left: "62%"
            })
            motiImage1.animateTo({
                top: "12%",
                left: "40%"
            })
            motiImage2.animateTo({
                top: "45%",
                left: 2
            })
            
        }
    }, [animate])

    return (
        <View style={{
            flex: 1,
            overflow: 'hidden'
        }}>
           <Image 
                source={images.walkthrough_04_01}
                style={{
                    ...styles.image,
                    top: "30%",
                    left: "20%",
                    width: 246,
                    height: 310,
                    zIndex: 0
                }}
           /> 
            <MotiImage 
                state={motiImage0}
                source={images.walkthrough_04_02}
                style={styles.image}
           />
           <MotiImage 
                state={motiImage1}
                source={images.walkthrough_04_03}
                style={styles.image}
           />
           <MotiImage 
                state={motiImage2}
                source={images.walkthrough_04_04}
                style={styles.image}
           />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 126,
        height: 122,
        zIndex: 1,
        borderRadius: SIZES.radius
    }
})

export default Walkthrough4;