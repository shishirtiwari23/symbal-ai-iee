import styles from "./Table.module.scss";
import { Table as MUITable } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Table = ({ data }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Table</h2>
      <TableContainer component={Paper}>
        <MUITable sx={{ minWidth: 200, width: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MUITable>
      </TableContainer>
    </div>
  );
};

export default Table;
