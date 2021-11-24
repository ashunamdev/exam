import React, { useState } from 'react';
import axios from 'axios';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// core components
// import Quote from "components/Typography/Quote.js";
// import Muted from "components/Typography/Muted.js";
// import Primary from "components/Typography/Primary.js";
// import Info from "components/Typography/Info.js";
// import Success from "components/Typography/Success.js";
// import Warning from "components/Typography/Warning.js";
// import Danger from "components/Typography/Danger.js";
import Card from 'components/Card/Card.js';
import CardHeader from 'components/Card/CardHeader.js';
import CardBody from 'components/Card/CardBody.js';

const styles = {
  typo: {
    paddingLeft: '25%',
    marginBottom: '40px',
    position: 'relative'
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: '10px',
    color: '#c0c1c2',
    display: 'block',
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '13px',
    left: '0',
    marginLeft: '20px',
    position: 'absolute',
    width: '260px'
  },
  cardCategoryWhite: {
    color: 'rgba(255,255,255,.62)',
    margin: '0',
    fontSize: '14px',
    marginTop: '0',
    marginBottom: '0'
  },
  cardTitleWhite: {
    color: '#FFFFFF',
    marginTop: '0px',
    minHeight: 'auto',
    fontWeight: '300',
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: '3px',
    textDecoration: 'none'
  }
};

const useStyles = makeStyles(styles);

export default function BatchForm() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [batchData, setBatchData] = useState({
    username: '',
    password: '',
    confirm_password: '',
    full_name: '',
    student_class: '',
    gender: '',
    roll_no: '',
    batch: ''
  });

  const handleChange = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    console.log(batchData);
    console.log('batchData', batchData);
    axios
      .post('http://3.139.234.205/add-batch/', batchData, {
        headers: {
          Authorization: `JWT ` + userData?.token
        }
      })
      .then((res) => {
        alert(res?.message);
        console.log('RESPONSE ==== : ', res);
      })
      .catch((err) => {
        alert('something want to wrong');
        console.log('ERROR: ====', err);
      });
  };

  const formErrorValidation = () => {
    const err = {};
    if (batchData.username === '') {
      err.usernameError = 'Username is required.';
    } else if (/\S+@\S+\.\S+/.test(batchData.userName)) {
      err.userNameError = 'User name should be only alphanumeric.';
    } else if (
      batchData.full_name.length < 2 ||
      batchData.full_name.length > 12
    ) {
      err.full_nameError = 'Fullname must be between 2-12 characters.';
    } else if (batchData.student_class === '') {
      err.student_classError = 'Student class name is required.';
      // } else if (/^\d*$/.test(parseInt(batchData.student_class))) {
      //   err.student_classError = 'Student class must be number.';
    } else if (batchData.roll_no === '') {
      err.roll_noError = 'Roll no is required.';
      // } else if (/^\d*$/.test(batchData.roll_no)) {
      //   err.roll_noError = 'Roll No must be number.';
    } else if (batchData.batch === '') {
      err.batchError = 'batch name is required.';
    }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };
  console.log(formErrorValidation);
  const setForm = (event) => {
    let { name, value } = event.target;

    setBatchData({
      ...batchData,
      [name]: value
    });
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Add Batch </h4>
        <p className={classes.cardCategoryWhite}>Fill all Fileds</p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Add Batch</div>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.nameError && (
              <p className="error_productForm">{errors.nameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Batch Id</div>
          <input
            type="text"
            name="batch_id"
            placeholder="Enter batch_id"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.batch_idError && (
              <p className="error_productForm">{errors.batch_idError}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => handleChange()}
        >
          Submit
        </button>
      </CardBody>
    </Card>
  );
}
