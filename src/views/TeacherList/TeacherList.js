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

export default function TeacherList() {
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    populateStudentList();
  }, []);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .get(`${BASE_URL}get-teacher/`, {
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
    getData();
  };
  const columns = [
    {
      title: 'ID',
      field: 'id'
    },
    {
      title: 'Teacher Name',
      field: 'teacher_name'
    },
    {
      title: 'Gender',
      field: 'gender'
    },
    {
      title: 'Contact No',
      field: 'contact_no'
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
              title="Teacher Details"
              data={teacherList}
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
