import { Box, Container, Grid, Button } from "@mui/material";
import VerticalTabs from "./components/VerticalTabs";

import Chart from "./components/Chart";
import { useState } from "react";
import Detail from "./components/Detail";
import { RevenueType } from "./types";
import DataControl from "./components/DataControl";
type Props = {};

export default function Analysis({}: Props) {
  let [data, setData] = useState<RevenueType[]>([]);
  const refreshData = (d: RevenueType[]) => {
    setData(d);
  };
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid xs={3}>
          <VerticalTabs />
        </Grid>
        <Grid xs={9}>
          <Box sx={{ p: 2, background: "#fff" }}>台積電 (2330)</Box>
          <DataControl refreshData={refreshData} />
          <Chart data={data} />
          <Box sx={{ p: 2, background: "#fff", marginTop: "10px" }}>
            <Button variant="contained">详细数据</Button>
          </Box>
          <Detail data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}
