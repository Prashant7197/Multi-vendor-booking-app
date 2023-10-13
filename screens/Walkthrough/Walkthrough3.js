import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { useDynamicAnimation, MotiImage } from "moti";

import { SIZES, images } from "../../constants";

const Walkthrough3 = ({ animate }) => {

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

    const motiImage3 = useDynamicAnimation(() => ({
        top: "58%",
        left: "25%"
    }))
    
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
                top: "60%",
                left: "50%"
            })
            motiImage1.animateTo({
                top: "32%",
                left: "58%"
            })
            motiImage2.animateTo({
                top: "20%",
                left: "12%"
            })
            motiImage3.animateTo({
                top: "48%",
                left: "5%"
            })
            
        }
    }, [animate])

    return (
        <View style={{
            flex: 1,
            overflow: 'hidden'
        }}>
           {/* <Image 
                source={images.walkthrough_02_01}
                style={{
                    ...styles.image,
                    top: "35%",
                    left: "35%",
                    width: 106,
                    height: 161,
                    zIndex: 1
                }}
           />  */}
            <MotiImage 
                state={motiImage0}
                source={images.walkthrough_03_01}
                style={styles.image}
           />
           <MotiImage 
                state={motiImage1}
                source={images.walkthrough_03_02}
                style={styles.image}
           />
           <MotiImage 
                state={motiImage2}
                source={images.walkthrough_01_02}
                style={styles.image}
           />
           <MotiImage 
                state={motiImage3}
                source={images.walkthrough_01_01}
                style={styles.image}
           />
           
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        position: 'absolute',
        width: 156,
        height: 132,
        zIndex: 0,
        borderRadius: SIZES.radius
    }
})

export default Walkthrough3;