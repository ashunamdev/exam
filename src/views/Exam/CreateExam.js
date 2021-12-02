import React, { useEffect, useState } from "react";
// @material-ui/core components
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";

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

export default function CreateExam() {
  const classes = useStyles();

  const [errors, setErrors] = useState({});
  const [batchList, setBatchList] = useState([]);
  const [questionData, setQuestionData] = useState({
    title: "",
    assessment_date: "",
    exam_time: "",
    duration: "",
    exam_status: "upcoming",
    batch: [],
    teacher: "",
    questions: [],
  });

  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState([]);
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    populateStudentList();
    populateBatchList();
    populateTeacherList();
  }, []);

  const handleChangeform = () => {
    var userData = JSON.parse(window.localStorage.getItem("user"));
    console.log('userData', questionData);

    if (formErrorValidation()) {
      questionData.questions = selectedQuestion;
      axios
        .post("http://3.139.234.205/add-exam/", questionData, {
          headers: {
            Authorization: `JWT ` + userData?.token,
          },
        })
        .then((res) => {
          alert(res?.data.message);
          console.log("RESPONSE ==== : ", res);
        })
        .catch((err) => {
          alert("something want to wrong");
          console.log("ERROR: ====", err);
        });
    }
  };
  const formErrorValidation = () => {
    questionData.questions = selectedQuestion;
    const err = {};
    if (questionData.title === "") {
      err.titleError = "Title is required.";
    } else if (questionData.assessment_date === "") {
      err.assessment_dateError = "Assessment Date is required.";
    } else if (questionData.exam_time === "") {
      err.exam_timeError = "Exam Time is required.";
    } else if (questionData.duration === "") {
      err.durationError = "duration name is required.";
    } else if (questionData.batch === "") {
      err.batchError = "Batch is required.";
    } else if (questionData.teacher === "") {
      err.teacherError = "Teacher name is required.";
    } else if (questionData.questions.length === 0) {
      err.questionsError = "Atlist one Question is required.";
    }
    setErrors(err);
    if (Object.keys(err).length === 0) return true;
    else return false;
  };
  console.log(formErrorValidation);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem("user"));

    const getData = async () => {
      axios
        .post(
          "http://3.139.234.205/get-question/",
          {},
          {
            headers: {
              Authorization: `JWT ` + userData?.token,
            },
          }
        )
        .then((res) => {
          setQuestionList(res.data.data);
          console.log("RESPONSE ==== : ", res);
          // console.log('RESPONSE ==== : ', schoolList);
        })
        .catch((err) => {
          alert("something want to wrong in getting a questions.");
          console.log("ERROR: ====", err);
        });
    };
    getData();
  };
   const populateBatchList = () => {
     var userData = JSON.parse(window.localStorage.getItem('user'));

     const getBatchData = async () => {
       axios
         .post(
           'http://3.139.234.205/get-batch/',
           {},
           {
             headers: {
               Authorization: `JWT ` + userData?.token
             }
           }
         )
         .then((res) => {
           setBatchList(res.data.data);
           console.log('RESPONSE setBatchList==== : ', res.data.data);
           // console.log('RESPONSE ==== : ', schoolList);
         })
         .catch((err) => {
           alert('something want to wrong in getting a questions.');
           console.log('ERROR: ====', err);
         });
     };
     getBatchData();
   };

      const populateTeacherList = () => {
        var userData = JSON.parse(window.localStorage.getItem('user'));

        const getTeacherData = async () => {
            axios
              .get('http://3.139.234.205/get-teacher/', {
                headers: {
                  Authorization: `JWT ` + userData?.token
                }
              })
              .then((res) => {
                setTeacherList(res.data.data);
                console.log('RESPONSE ==== : ', res);
                // console.log('RESPONSE ==== : ', schoolList);
              })
              .catch((err) => {
                alert('something want to wrong');
                console.log('ERROR: ====', err);
              });
        };
        getTeacherData();
      };
  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "Question",
      field: "question",
    },
    {
      title: "Option A",
      field: "option_a",
    },
    {
      title: "Option B",
      field: "option_b",
    },
    {
      title: "Option C",
      field: "option_c",
    },
    {
      title: "Option D",
      field: "option_d",
    },
    {
      title: "Correct Answer",
      field: "correct_answer",
    },
    {
      title: "school ",
      field: "school",
    },
    {
      title: "Batch",
      field: "batch",
    },
  ];
  const setForm = (event) => {
    let { name, value } = event.target;

    setQuestionData({
      ...questionData,
      [name]: value,
    });
  };

  return (
    <>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Add Exam </h4>
          <p className={classes.cardCategoryWhite}>Fill all Fileds</p>
        </CardHeader>
        <CardBody>
          <div className={classes.typo}>
            <div className={classes.note}>title</div>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={(e) => setForm(e)}
            />
            <div>
              {errors.titleError && (
                <p className="error_productForm">{errors.titleError}</p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>assessment_date</div>
            <input
              type="date"
              name="assessment_date"
              placeholder="Enter assessment_date"
              onChange={(e) => setForm(e)}
            />
            <div>
              {errors.assessment_dateError && (
                <p className="error_productForm">
                  {errors.assessment_dateError}
                </p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>exam_time</div>
            <input
              type="time"
              name="exam_time"
              placeholder="Enter exam_time"
              onChange={(e) => setForm(e)}
            />
            <div>
              {errors.exam_timeError && (
                <p className="error_productForm">{errors.exam_timeError}</p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>duration</div>
            <input
              type="number"
              name="duration"
              placeholder="Enter duration"
              onChange={(e) => setForm(e)}
            />
            <div>
              {errors.durationError && (
                <p className="error_productForm">{errors.durationError}</p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>exam_status</div>

            <select
              name="exam_status"
              onChange={(e) => setForm(e)}
              className={classes.select}
            >
              <option value="">Select status</option>
              <option value="upcoming">Upcoming</option>
              <option value="pending">Pending</option>
              <option value="ongoing">Ongoing</option>
            </select>
            {/* <input
              type="text"
              name="exam_status"
              placeholder="Enter exam_status"
              onChange={(e) => setForm(e)}
            /> */}
            <div>
              {errors.exam_statusError && (
                <p className="error_productForm">{errors.exam_statusError}</p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>batch</div>
            <select
              name="batch"
              onChange={(e) => setForm(e)}
              className={classes.select}
            >
              <option value="">Select batch</option>

              {batchList.map((item) => {
                return (
                  <option key={`userSelectOptionKey${item.id}`} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
            <div>
              {errors.batchError && (
                <p className="error_productForm">{errors.batchError}</p>
              )}
            </div>
          </div>
          <div className={classes.typo}>
            <div className={classes.note}>teacher</div>
            {/* <input
              type="text"
              name="teacher"
              placeholder="Enter teacher"
              onChange={(e) => setForm(e)}
            /> */}
            <select
              name="teacher"
              onChange={(e) => setForm(e)}
              className={classes.select}
            >
              <option value="">Select Teacher</option>

              {teacherList?.map((item) => {
                return (
                  <option key={`userSelectOptionKey${item.id}`} value={item.id}>
                    {item.teacher_name}
                  </option>
                );
              })}
            </select>
            <div>
              {errors.teacherError && (
                <p className="error_productForm">{errors.teacherError}</p>
              )}
            </div>
          </div>
          <div>
            {errors.questionsError && (
              <p className="error_productForm">{errors.questionsError}</p>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-secondary"
            onClick={() => handleChangeform()}
          >
            Submit
          </button>
        </CardBody>
      </Card>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardBody>
              <MaterialTable
                title="Question Details"
                data={questionList}
                columns={columns}
                options={{
                  filtering: true,
                  selection: true,
                  selectionProps: (rowData) => ({
                    disabled: rowData.name === 'Mehmet',
                    color: 'primary'
                  })
                }}
                onSelectionChange={(rowData) =>
                  setSelectedQuestion(rowData.map((item) => item.id))
                }
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>
  );
}
