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
};

const useStyles = makeStyles(styles);

export default function TypographyPage() {
  const classes = useStyles();
  const [errors, setErrors] = useState({});
  const [schoolData, setSchoolData] = useState({
    username: "",
    password: "",
    confirm_password: "",
    school_name: "",
    board: "",
    city: "",
    address: "",
    contact_person: "",
  });

  const handleChange = () => {
    var userData = JSON.parse(window.localStorage.getItem("user"));

    if (formErrorValidation()) {
      console.log("schoolData", schoolData);

      axios
        .post(
          `${BASE_URL}school-register/`,

          schoolData,
          {
            headers: {
              Authorization: `JWT ` + userData?.token,
            },
          }
        )
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
    if (schoolData.school_name === "") {
      err.school_nameError = "School Name is required.";
    } else if (schoolData.board === "") {
      err.boardError = "Board name is required.";
    } else if (schoolData.city === "") {
      err.cityError = "city name is required.";
    } else if (schoolData.address === "") {
      err.addressError = "Address is required.";
    } else if (schoolData.userName === "") {
      err.userNameError = "User name is required.";
    } else if (/\S+@\S+\.\S+/.test(schoolData.userName)) {
      err.userNameError = "User name should be only alphanumeric.";
    } else if (schoolData.password === "") {
      err.passwordError = "password is required.";
    } else if (schoolData.confirm_password === "") {
      err.confirm_passwordError = "confirm_password is required.";
    } else if (
      schoolData.confirm_password != null &&
      schoolData.password != null &&
      schoolData.confirm_password != schoolData.password
    ) {
      err.confirm_passwordError = "Both password is not match.";
    }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };

  const setForm = (event) => {
    let { name, value } = event.target;

    setSchoolData({
      ...schoolData,
      [name]: value,
    });
  };

  return (
    <Card>
      <CardHeader color="primary">
        <h4 className={classes.cardTitleWhite}>Add School </h4>
        <p className={classes.cardCategoryWhite}>Fill all Fileds</p>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <div className={classes.note}>School Name</div>
          <input
            type="text"
            name="school_name"
            placeholder="Enter School name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.school_nameError && (
              <p className="error_productForm">{errors.school_nameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Board</div>
          <input
            type="text"
            name="board"
            placeholder="Enter Board type"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.boardError && (
              <p className="error_productForm">{errors.boardError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>City</div>
          <input
            type="text"
            name="city"
            placeholder="Enter City name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.cityError && (
              <p className="error_productForm">{errors.cityError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Address</div>
          <input
            type="text"
            name="address"
            placeholder="Enter Address"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.firstNameError && (
              <p className="error_productForm">{errors.firstNameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Contact Person</div>
          <input
            type="text"
            name="contact_person"
            placeholder="Enter Contact Person's name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.firstNameError && (
              <p className="error_productForm">{errors.firstNameError}</p>
            )}
          </div>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>User Name</div>
          <input
            type="text"
            name="username"
            placeholder="Enter User name"
            onChange={(e) => setForm(e)}
          />
          <div>
            {errors.firstNameError && (
              <p className="error_productForm">{errors.firstNameError}</p>
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
            {errors.firstNameError && (
              <p className="error_productForm">{errors.firstNameError}</p>
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
            {errors.firstNameError && (
              <p className="error_productForm">{errors.firstNameError}</p>
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
