import React from "react";
import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from "react-native";

interface LoaderPrors {
    width? : number;
    height?: number;
    ry?: number;
    rx?: number;
    speed?: number;
}

const Loader: React.FC<LoaderPrors> = ({
    width = 300,
    height = 30,
    rx = 5,
    ry = 5,
    speed = 2,
    
}) => {
    return (
        <View className='flex-1 justify-center items-center'>
            <ContentLoader
        speed={speed}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        backgroundColor="#f3f3f3"
        foregroundColor="#d3d3d3"
        >
            <Rect x="0" y="0" rx={rx} ry={ry} width={width} height={height} />
            </ContentLoader>
        </View>
        
    )

}

export default Loader;