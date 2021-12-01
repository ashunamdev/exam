import React, { useState } from "react";
import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
// import Quote from "components/Typography/Quote.js";
// import Muted from "components/Typography/Muted.js";
// import Primary from "components/Typography/Primary.js";
// import Info from "components/Typography/Info.js";
// import Success from "components/Typography/Success.js";
// import Warning from "components/Typography/Warning.js";
// import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px",
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  select: {
    width: "17%",
  },
};

const useStyles = makeStyles(styles);

export default function StudentRegister() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [studentData, setStudentData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    full_name: "",
    student_class: "",
    gender: "male",
    roll_no: "",
    batch: "",
  });

  const handleChange = () => {
    var userData = JSON.parse(window.localStorage.getItem("user"));

    console.log(studentData);
    if (formErrorValidation()) {
      console.log("studentData", studentData);
      axios
        .post("http://3.139.234.205/student-register/", studentData, {
          headers: {
            Authorization: `JWT ` + userData?.token,
          },
        })
        .then((res) => {
          alert(res?.message);
          console.log("RESPONSE ==== : ", res);
        })
        .catch((err) => {
          alert("something want to wrong");
          console.log("ERROR: ====", err);
        });
    }
  };

  const formErrorValidation = () => {
    const err = {};
    if (studentData.username === "") {
      err.usernameError = "Username is required.";
    } else if (/\S+@\S+\.\S+/.test(studentData.userName)) {
      err.userNameError = "User name should be only alphanumeric.";
    } else if (
      studentData.full_name.length < 2 ||
      studentData.full_name.length > 12
    ) {
      err.full_nameError = "Fullname must be between 2-12 characters.";
    } else if (studentData.student_class === "") {
      err.student_classError = "Student class name is required.";
      // } else if (/^\d*$/.test(parseInt(studentData.student_class))) {
      //   err.student_classError = 'Student class must be number.';
    } else if (studentData.roll_no === "") {
      err.roll_noError = "Roll no is required.";
      // } else if (/^\d*$/.test(studentData.roll_no)) {
      //   err.roll_noError = 'Roll No must be number.';
    } else if (studentData.batch === "") {
      err.batchError = "batch name is required.";
    } else if (studentData.password === "") {
      err.passwordError = "password is required.";
    } else if (studentData.confirm_password === "") {
      err.confirm_passwordError = "confirm_password is required.";
    } else if (
      studentData.confirm_password != null &&
      studentData.password != null &&
      studentData.confirm_password != studentData.password
    ) {
      err.confirm_passwordError = "Both password is not match.";
    }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };
  console.log(formErrorValidation);
  const setForm = (event) => {
    let { name, value } = event.target;

    setStudentData({
      ...studentData,
      [name]: value,
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
          <div className={classes.note}>Student Name</div>
          <input
            type="text"
            name="username"
            placeholder="Enter username name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.usernameError && (
              <p className="error_productForm">{errors.usernameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>full_name</div>
          <input
            type="text"
            name="full_name"
            placeholder="Enter full_name type"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.full_nameError && (
              <p className="error_productForm">{errors.full_nameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>gender</div>
          {/* <input
            type="text"
            name="gender"
            placeholder="Enter gender type"
            onChange={(e) => setForm(e)}
          /> */}
          

          <select id="gender" name="gender" onChange={(e) => setForm(e)} className={classes.select}>
            <option value="male" selected>Male</option>
            <option value="female">Female</option>
          </select>
          <div>
            {errors.genderError && (
              <p className="error_productForm">{errors.genderError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Roll No</div>
          <input
            type="text"
            name="roll_no"
            placeholder="Enter Roll No name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.roll_noError && (
              <p className="error_productForm">{errors.roll_noError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Student Class</div>
          <input
            type="text"
            name="student_class"
            placeholder="Enter student_class name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.student_classError && (
              <p className="error_productForm">{errors.student_classError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Batch Name</div>
          <input
            type="text"
            name="batch"
            placeholder="Enter Batch Name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.batchError && (
              <p className="error_productForm">{errors.batchError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Password</div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.passwordError && (
              <p className="error_productForm">{errors.passwordError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Confirm Password</div>
          <input
            type="Password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.confirm_passwordError && (
              <p className="error_productForm">
                {errors.confirm_passwordError}
              </p>
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
