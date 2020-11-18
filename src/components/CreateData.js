import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "../style/Styles.js";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const CreateData = props => {
  const {
    Id,
    Name,
    Occupation,
    Description,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;
 console.log('name',{Name});
  const classess = useStyles();
  const [open, setOpen] = React.useState(false);
const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={addData}>
        <TextField
          id="name-id"
          name="Name"
          label="Name"
          onChange={handleChange}
          value={Name}
          fullWidth
          required
        />
        <TextField
          id="occupation-id"
          name="Occupation"
          label="Occupation"
          onChange={handleChange}
          value={Occupation}
          fullWidth
          required
        />
        <TextField
          id="desc-id"
          name="Description"
          label="Description"
          onChange={handleChange}
          value={Description}
          fullWidth
          required
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={e => saveUpdate(e, Id)}
            
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={handleClick} >
            Submit 
          </Button>
        )}

      </form>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Sucessfully Added&*&*!
        </Alert>
      </Snackbar>
      
    </div>
  );
};

CreateData.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
  addData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired
};


export default withStyles(Styles)(CreateData);
