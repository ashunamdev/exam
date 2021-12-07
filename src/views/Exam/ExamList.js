import React, { useEffect, useState } from 'react';
// @material-ui/core components
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import MaterialTable from 'material-table';

import axios from 'axios';
import { BASE_URL } from 'utils/constant';

export default function ExamList() {
  const [examList, setExamList] = useState([]);

  useEffect(() => {
    populateStudentList();
  }, []);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .post(`${BASE_URL}get-exam/`,{},{
          headers: {
            Authorization: `JWT ` + userData?.token
          }
        })
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
    let userStorageData = localStorage.getItem('user') 
if (userStorageData) {
  let userData =  JSON.parse(userStorageData);
  if (userData?.user_type === 'teacher' || userData?.user_type === 'school') {
    confirm('Hello Teacher, You want to Start exam ' + rowData.title);
  } else if (userData?.user_type === 'student') {
    confirm('HI Student, You want to Start exam ' + rowData.title);
  }else {
    confirm('Something went to wrong');

  }
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
                {
                  icon: 'monitor',
                  tooltip: 'Start Exam',
                  onClick: (event, rowData) =>{
                    handleExamFun(rowData);
                  }
                }
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
