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

export default function QuestionForm() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [questionData, setQuestionData] = useState({
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

    console.log(questionData);
    // if (formErrorValidation()) {
      console.log('questionData', questionData);
      axios
        .post('http://3.139.234.205/exam/add-question/', questionData, {
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
    // }
  };

  const formErrorValidation = () => {
    const err = {};
    if (questionData.username === '') {
      err.usernameError = 'Username is required.';
    } else if (/\S+@\S+\.\S+/.test(questionData.userName)) {
      err.userNameError = 'User name should be only alphanumeric.';
    } else if (
      questionData.full_name.length < 2 ||
      questionData.full_name.length > 12
    ) {
      err.full_nameError = 'Fullname must be between 2-12 characters.';
    } else if (questionData.student_class === '') {
      err.student_classError = 'Student class name is required.';
      // } else if (/^\d*$/.test(parseInt(questionData.student_class))) {
      //   err.student_classError = 'Student class must be number.';
    } else if (questionData.roll_no === '') {
      err.roll_noError = 'Roll no is required.';
      // } else if (/^\d*$/.test(questionData.roll_no)) {
      //   err.roll_noError = 'Roll No must be number.';
    } else if (questionData.batch === '') {
      err.batchError = 'batch name is required.';
    }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };
  console.log(formErrorValidation);
  const setForm = (event) => {
    let { name, value } = event.target;

    setQuestionData({
      ...questionData,
      [name]: value
    });
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Add Student </h4>
        <p className={classes.cardCategoryWhite}>Fill all Fileds</p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>Add Question</div>
          <input
            type="text"
            name="question"
            placeholder="Enter question"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.questionError && (
              <p className="error_productForm">{errors.questionError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>option_a</div>
          <input
            type="text"
            name="option_a"
            placeholder="Enter option_a"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.option_aError && (
              <p className="error_productForm">{errors.option_aError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>option_b</div>
          <input
            type="text"
            name="option_b"
            placeholder="Enter option_b"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.option_bError && (
              <p className="error_productForm">{errors.option_bError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>option_c</div>
          <input
            type="text"
            name="option_c"
            placeholder="Enter option_c"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.option_cError && (
              <p className="error_productForm">{errors.option_cError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>option_d</div>
          <input
            type="text"
            name="option_d"
            placeholder="Enter option_d"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.option_dError && (
              <p className="error_productForm">{errors.option_dError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>correct_answer</div>
          <input
            type="text"
            name="correct_answer"
            placeholder="Enter correct_answer"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.correct_answerError && (
              <p className="error_productForm">{errors.correct_answerError}</p>
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
