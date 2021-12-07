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
import { BASE_URL } from "utils/constant";

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

export default function TeacherRegister() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [teacherData, setTeacherData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    teacher_name: "",
    contact_no: "",
    gender: "male",
  });

  const handleChange = () => {
    console.log("teacherData", teacherData);
    var userData = JSON.parse(window.localStorage.getItem("user"));

    if (formErrorValidation()) {
      console.log("teacherData", teacherData);
      axios
        .post(`${BASE_URL}teacher-register/`, teacherData, {
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
    if (teacherData.teacher_name === "") {
      err.teacher_nameError = "Teacher Name is required.";
    } else if (teacherData.password === "") {
      err.passwordError = "password is required.";
    } else if (teacherData.confirm_password === "") {
      err.confirm_passwordError = "confirm_password is required.";
    } else if (
      teacherData.confirm_password != null &&
      teacherData.password != null &&
      teacherData.confirm_password != teacherData.password
    ) {
      err.confirm_passwordError = "Both password is not match.";
    }
    // {
    //   err.school_nameError = 'School name must be between 2-12 characters.';
    // } else if (teacherData.board === '') {
    //   err.boardError = 'Board name is required.';
    // } else if (teacherData.board.length < 2 || teacherData.board.length > 12) {
    //   err.boardError = 'Board name must be between 2-12 characters.';
    // } else if (teacherData.city === '') {
    //   err.cityError = 'city name is required.';
    // } else if (teacherData.city.length < 2 || teacherData.city.length > 12) {
    //   err.cityError = 'city name must be between 2-12 characters.';
    // } else if (teacherData.address === '') {
    //   err.addressError = 'Address is required.';
    else if (teacherData.userName === "") {
      err.userNameError = "User name is required.";
    }
    //  else if (/\S+@\S+\.\S+/.test(teacherData.userName)) {
    //   err.userNameError = 'User name should be only alphanumeric.';
    // }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };
  console.log(formErrorValidation);
  const setForm = (event) => {
    let { name, value } = event.target;

    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Add Teacher </h4>
        <p className={classes.cardCategoryWhite}>Fill all Fileds</p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>User Name</div>
          <input
            type="text"
            name="username"
            placeholder="Enter user name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.school_nameError && (
              <p className="error_productForm">{errors.school_nameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>teacher_name</div>
          <input
            type="text"
            name="teacher_name"
            placeholder="Enter teacher_name type"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.teacher_nameError && (
              <p className="error_productForm">{errors.teacher_nameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>gender</div>
          {/* <input
            type="text"
            name="gender"
            placeholder="Enter gender"
            onChange={(e) => setForm(e)}
          />
           */}
          <select id="gender" name="gender" onChange={(e) => setForm(e)} className={classes.select}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <div>
            {errors.genderError && (
              <p className="error_productForm">{errors.genderError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Contact Number</div>
          <input
            type="text"
            name="contact_no"
            placeholder="Enter contact_no name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.contact_noError && (
              <p className="error_productForm">{errors.contact_noError}</p>
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

        {/* <div className={classes.typo}>
          <div className={classes.note}>Paragraph</div>
          <p>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers. I understand culture. I am
            the nucleus. I think that’s a responsibility that I have, to push
            possibilities, to show people, this is the level that things could
            be at.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Quote</div>
          <Quote
            text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
            author=" Kanye West, Musician"
          />
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Muted Text</div>
          <Muted>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Muted>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Primary Text</div>
          <Primary>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Primary>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Info Text</div>
          <Info>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Info>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Success Text</div>
          <Success>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Success>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Warning Text</div>
          <Warning>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Warning>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Danger Text</div>
          <Danger>
            I will be the leader of a company that ends up being worth billions
            of dollars, because I got the answers...
          </Danger>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Small Tag</div>
          <h2>
            Header with small subtitle
            <br />
            <small>
              Use {'"'}Small{'"'} tag for the headers
            </small>
          </h2>
        </div> */}
      </CardBody>
    </Card>
  );
}
