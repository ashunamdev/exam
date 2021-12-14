/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// @material-ui/core components
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import MaterialTable from 'material-table';
// import { connect } from '../../api/index';

import axios from 'axios';
import { BASE_URL } from 'utils/constant';
import moment from 'moment';
export default function ExamList() {
  const [examList, setExamList] = useState([]);
  let userType = null;
  let userStorageData = localStorage.getItem('user');
  if (userStorageData) {
    let userData = JSON.parse(userStorageData);
    userType = userData?.user_type;
  }

  // useEffect(() => {
  //   populateStudentList();
  // }, []);
  useEffect(() => {
    console.log(`initializing interval`);
      populateStudentList();

    const interval = setInterval(() => {
      populateStudentList();
      // updateTime();
    }, 30000);

    return () => {
      console.log(`clearing interval`);
      clearInterval(interval);
    };
    }, []); 
  

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .post(
          `${BASE_URL}get-exam/`,
          {},
          {
            headers: {
              Authorization: `JWT ` + userData?.token
            }
          }
        )
        .then((res) => {
          setExamList(res.data.data);
          console.log('RESPONSE ==== : ', res);
          // console.log('RESPONSE ==== : ', schoolList);
        })
        .catch((err) => {
          alert('something want to wrong');
          console.log('ERROR: ====', err);
        });
    };
    getData();
  };
  const columns = [
    {
      title: 'ID',
      field: 'id'
    },
    {
      title: 'Title',
      field: 'title'
    },
    {
      title: 'Assessment Date',
      field: 'assessment_date'
    },
    {
      title: 'Batch',
      field: 'batch'
    },
    {
      title: 'Duration',
      field: 'duration'
    },
    {
      title: 'Exam Status',
      field: 'exam_status'
    },
    {
      title: 'Exam Time',
      field: 'exam_time'
    },
    {
      title: 'School',
      field: 'school'
    },
    {
      title: 'Teacher ',
      field: 'teacher'
    },
    {
      title: 'Questions ',
      field: 'questions'
    }
  ];

  const handleExamFun = (rowData) => {
    if (userType === 'teacher' || userType === 'school') {
      if (confirm('Hello Teacher, You want to Start exam ' + rowData.title)) {
        window.open(`https://rtc.decode-exam.com?id=${rowData.id}`, '_blank');
      }
    } else if (userType === 'student') {
      if (confirm('HI Student, You want to Start exam ' + rowData.title)) {
        window.open(`https://rtc.decode-exam.com?id=${rowData.id}`, '_blank');
      }
    } else {
      confirm('Something went to wrong');
    }
  };
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <MaterialTable
              title="Exam Details"
              data={examList}
              columns={columns}
              actions={[
                (rowData) => ({
                  icon: 'monitor',
                  tooltip:
                    userType === 'school' || userType === 'teacher'
                      ? 'Start Now'
                      : 'Join Now',
                  onClick: (event, rowData) => {
                    handleExamFun(rowData);
                  },
                  disabled:
                    rowData.exam_status === 'upcoming' &&
                    moment().isBetween(
                      moment(
                        rowData.assessment_date + rowData.exam_time
                      ).format('YYYY:MM:DD hh:mm:ss'),
                      moment(rowData.assessment_date + ' ' + rowData.exam_time)
                        .add(rowData.duration, 'minutes')
                        .format('YYYY:MM:DD hh:mm:ss')
                    )
                      ? false
                      : true
                })
              ]}
              options={{
                filtering: true
                // selection: true,
                // selectionProps: (rowData) => ({
                //   disabled: rowData.name === 'Mehmet',
                //   color: 'primary'
                // })
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
