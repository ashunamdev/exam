import React, { useEffect, useState } from 'react';
// @material-ui/core components
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import MaterialTable from 'material-table';

import axios from 'axios';

export default function StudentList() {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    populateStudentList();
  }, []);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .get('http://3.139.234.205/get-student/', {
          headers: {
            Authorization: `JWT ` + userData?.token
          }
        })
        .then((res) => {
          setStudentList(res.data.data);
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
      title: 'Full Name',
      field: 'full_name'
    },
    {
      title: 'Gender',
      field: 'gender'
    },
    {
      title: 'Student Class',
      field: 'student_class'
    },
    {
      title: 'Roll No.',
      field: 'roll_no'
    },
    {
      title: 'Batch',
      field: 'batch'
    },
    {
      title: 'School',
      field: 'school'
    },
    {
      title: 'User',
      field: 'user'
    },
    {
      title: 'Password',
      field: 'password'
    }
  ];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <MaterialTable
              title="Student Details"
              data={studentList}
              columns={columns}
              options={{
                filtering: true
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
