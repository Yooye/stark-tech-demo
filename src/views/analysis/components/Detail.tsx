import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Paper, TableContainer, styled } from "@mui/material";
import { RevenueType } from "../types";
import { useEffect, useRef } from "react";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

type Props = {
  data: RevenueType[];
};
const CellStyle = {
  border: "1px solid #CFD2D5",
};
const StickyCell = styled(TableCell)(() => ({
  position: "sticky",
  left: 0,
  border: "1px solid #CFD2D5",
  minWidth: "150px",
  background: "#F6F8FA",
}));
const StyledTableRow = styled(TableRow)(() => ({
  background: "#F6F8FA",
}));
export default function Detail({ data }: Props) {
  const tableRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = tableRef.current.scrollWidth;
    }
  }, [data]);
  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer
        component={Paper}
        sx={{ overflowX: "auto" }}
        ref={tableRef}
      >
        <Table>
          <TableHead>
            <StyledTableRow>
              <StickyCell>年度月份</StickyCell>
              {data.map((item) => (
                <TableCell align="center" sx={CellStyle}>
                  {item.date}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <StickyCell style={{ background: "#fff" }}>每月營收</StickyCell>
              {data.map((item) => (
                <TableCell align="right" sx={CellStyle}>
                  {item.revenue}
                </TableCell>
              ))}
            </TableRow>
            <StyledTableRow>
              <StickyCell>單月營收年增率 (%)</StickyCell>
              {data.map((item) => (
                <TableCell align="right" sx={CellStyle}>
                  {item.revenue_growth_rate}
                </TableCell>
              ))}
            </StyledTableRow>
          </TableBody>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
