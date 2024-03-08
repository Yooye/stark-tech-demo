import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { tabsData } from "../options/tabs";
import { useState } from "react";

export default function VerticalTabs() {
  const [value, setValue] = useState(2);
  const [val, setVal] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChildChange = (_: React.SyntheticEvent, newValue: number) => {
    setVal(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{ borderRight: 1, borderColor: "divider" }}
        TabIndicatorProps={{
          style: {
            left: 4,
            right: 0,
          },
        }}
      >
        {tabsData.map((item) => {
          return (
            <Tab
              label={
                <>
                  <strong>{item.word}</strong>
                  <div>{item.title}</div>
                </>
              }
              key={item.title}
            />
          );
        })}
      </Tabs>
      <Tabs
        orientation="vertical"
        value={val}
        onChange={handleChildChange}
        TabIndicatorProps={{
          style: {
            left: 2,
            right: 0,
          },
        }}
      >
        {tabsData[value].children.map((item) => {
          return <Tab label={item} key={item} />;
        })}
      </Tabs>
    </Box>
  );
}
