import React from "react";
import {
  Button,
  Checkbox,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";

function FilterDate(props) {
  return (
    <div>
      {props.formState.showTodoItem.map((val, key) => {
        return (
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableRow index={props.index}>
                <TableCell component="th" scope="row">
                  {key + 1}
                </TableCell>
                <TableCell align="right">
                  <Checkbox
                    checked={val.completed}
                    type="checkbox"
                    id={val.id}
                    value={val.todo}
                    name="title"
                    onClick={() => props.handleChecked(val.id)}
                    inputProps={{
                      "aria-label": "checkbox with default color",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Typography
                    variant="h6"
                    style={{
                      textDecoration:
                        val.completed == true ? "line-through" : "",
                    }}
                  >
                    {val.todo}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6"> {val.dates}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Button
                    onClick={() => props.handleDeleteListItem(val.id)}
                    type="submit"
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </Table>
          </TableContainer>
        );
      })}
    </div>
  );
}
export default FilterDate;
