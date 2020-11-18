import React from "react";
import PropTypes from "prop-types";
//import ListCard from "./ListCard";

import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
//import PropTypes from "prop-types";
//import Styles from "../style/Styles";
import {
    withStyles,
    IconButton
  } from "@material-ui/core";
import {  makeStyles} from '@material-ui/core/styles';
//import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
const DataLists = props => {
  const { lists, removeData,handleUpdate } = props;
  const classess = useStyles();
  return (
      <div>
      <TableContainer component={Paper}>
      <Table className={classess.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Occupation</StyledTableCell>
            <StyledTableCell align="left">Description</StyledTableCell>
            <StyledTableCell align="right">Edit(s)</StyledTableCell>
            <StyledTableCell align="right">Delete(s)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lists.map((info) => (
            <StyledTableRow key={info.Id}>
            <StyledTableCell align="left">{info.Name}</StyledTableCell>
              <StyledTableCell align="left">{info.Occupation}</StyledTableCell>
              <StyledTableCell align="left">{info.Description}</StyledTableCell>
              <StyledTableCell align="left">
              <IconButton
              aria-label="Update"
              onClick={e => handleUpdate(e,info.Id)}>
              <EditOutlined />
            </IconButton>
              </StyledTableCell>
              <StyledTableCell align="left">
              <IconButton
              aria-label="Delete"
              onClick={() => removeData(Id)}>
              <DeleteOutlined />
            </IconButton>
              
              </StyledTableCell>
            
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
   
    
  );
};

DataLists.propTypes = {
  //removeData: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};

export default DataLists;
