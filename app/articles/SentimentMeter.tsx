'use client';

import ReactSpeedometer from 'react-d3-speedometer';

export default function SentimentMeter({
  value,
  height,
  width,
}: {
  value: number;
  height: number;
  width: number;
}) {
  return (
    <ReactSpeedometer
      value={value}
      maxValue={100}
      needleTransitionDuration={1000}
      segments={1000}
      maxSegmentLabels={0}
      startColor="#0079ff"
      endColor="#ff0000"
      forceRender
      height={height}
      width={width}
      ringWidth={10}
      needleHeightRatio={0.7}
      valueTextFontSize="0"
    />
  );
}
