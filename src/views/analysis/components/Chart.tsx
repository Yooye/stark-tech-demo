import { Box, styled } from "@mui/material";

import { useEffect } from "react";
import * as echarts from "echarts";
import chart from "../options/chart";
import { RevenueType } from "../types";
type Props = {
  data: RevenueType[];
};
const ChartContent = styled("div")(() => ({
  height: "300px",
}));

export default function Chart({ data }: Props) {
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("main"));
    (async () => {
      chart.series[0].data = data.map(
        (item: RevenueType) => (item.revenue / 1000) as never
      );
      chart.xAxis[0].data = data.map(
        (item: RevenueType) => item.revenue_year
      ) as never;
      chart.series[1].data = data.map(
        (item: RevenueType) => item.revenue_growth_rate as never
      );
      myChart.setOption(chart);
    })();
  }, [data]);

  return (
    <Box sx={{ p: 2, background: "#fff" }}>
      <ChartContent id="main"></ChartContent>
    </Box>
  );
}
