import { Box, Button, Grid } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useEffect, useState } from "react";
import { RevenueType } from "../types";
import { revenueGet } from "../api";
import { calculateRevenueGrowthRate } from "../utils";

type Props = {
  refreshData: (d: RevenueType[]) => void;
};

export default function DataControl({ refreshData }: Props) {
  let yearArr = [3, 5, 8];
  let [yearRange, setYearRange] = useState(3);
  useEffect(() => {
    (async () => {
      let d = localStorage.getItem(`${yearRange}`);
      if (d) {
        refreshData(JSON.parse(d));
      } else {
        let { start_date, end_date } = timeConvert();
        let res = await revenueGet({ start_date, end_date });
        let data = res.data.data;
        data.shift();
        data = calculateRevenueGrowthRate(data);
        localStorage.setItem(`${yearRange}`, JSON.stringify(data));
        refreshData(data);
        console.log(1111);
      }

      //   refreshData([]);
    })();
  }, [yearRange]);
  function timeConvert() {
    const now = new Date();
    const nowYear = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2); // 月是从0开始计数的，所以需要+1
    const date = ("0" + now.getDate()).slice(-2);
    const startYear = nowYear - yearRange - 1;

    return {
      start_date: `${startYear}-01-01`,
      end_date: `${nowYear}-${month}-${date}`,
    };
  }
  return (
    <Box sx={{ p: 2, background: "#fff", marginTop: "10px" }}>
      <Grid container justifyContent="space-between">
        <Button variant="contained">每月营收</Button>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <>
              <Button variant="contained" {...bindTrigger(popupState)}>
                近{yearRange}年
              </Button>
              <Menu {...bindMenu(popupState)}>
                {yearArr.map((item) => (
                  <MenuItem
                    key={item}
                    onClick={() => {
                      popupState.close();
                      setYearRange(item);
                    }}
                  >
                    近{item}年
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </PopupState>
      </Grid>
    </Box>
  );
}
