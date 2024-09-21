"use client";

import { BarChart } from "@mui/x-charts";

type PopulationBarChartProps = {
  dataset: {
    year: number;
    value: number;
  }[];
};

export function PopulationBarChart({ dataset }: PopulationBarChartProps) {
  return (
    <BarChart
      margin={{
        left: 80,
        right: 0,
        top: 32,
        bottom: 32,
      }}
      height={320}
      dataset={dataset}
      series={[{ dataKey: "value", color: "#58618b" }]}
      xAxis={[
        {
          scaleType: "band",
          dataKey: "year",
        },
      ]}
    />
  );
}
