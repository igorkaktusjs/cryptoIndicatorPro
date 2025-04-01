import { useColorScheme } from "react-native";
import { CartesianChart, Line } from "victory-native";
import { useFont } from "@shopify/react-native-skia";
import React, { useState } from "react";
import Animated from "react-native-reanimated"; // Импортируем Animated для анимации

const inter = require('../../assets/fonts/Roboto-Regular.ttf');
const interBold = require('../../assets/fonts/Roboto-Bold.ttf');

const DATA = Array.from({ length: 31 }, (_, i) => ({
  day: String(i),
  lowTmp: 20 + 10 * Math.random(),
  highTmp: 40 + 30 * Math.random(),
}));

// Оборачиваем компонент Line в forwardRef
const ForwardedLine = React.forwardRef((props, ref) => <Line {...props} ref={ref} />);

const LineChart = () => {
  const font = useFont(inter, 12);
  const colorMode = useColorScheme();
  const [chartData, setChartData] = useState(DATA);

  if (!font) {
    return null;
  }

  const labelColor = colorMode === 'dark' ? 'white' : 'black';
  const lineColor = colorMode === 'dark' ? 'lightgrey' : 'black';

  // Создаем анимируемый компонент для Line
  const AnimatedLine = Animated.createAnimatedComponent(ForwardedLine);

  return (
    <>
      <CartesianChart
        data={chartData}
        xKey="day"
        yKeys={["highTmp"]}
        domainPadding={{ top: 30 }}
        axisOptions={{
          font,
          labelColor,
          lineColor,
        }}
      >
        {({ points, chartBounds }) => {
          return (
            <AnimatedLine
              points={points.highTmp}
              color="lightgreen"
              strokeWidth={3}
              animate={{
                type: "timing",
                duration: 500,
              }}
            />
          );
        }}
      </CartesianChart>
    </>
  );
};

export default LineChart;
