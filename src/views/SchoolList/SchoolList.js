import React, { useEffect, useState } from 'react';
// @material-ui/core components
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
// import Table from 'components/Table/Table.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import MaterialTable from 'material-table';

import axios from 'axios';


export default function SchoolList() {
  const [schoolList, setschoolList] = useState([]);

  useEffect(() => {
    populateschoolList();
  },[]);

  const populateschoolList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .get('http://3.139.234.205/get-school/', {
          headers: {
            Authorization: `JWT ` + userData?.token
          }
        })
        .then((res) => {
          setschoolList(res.data.data);
          console.log('RESPONSE ==== : ', res);
          console.log('RESPONSE ==== : ', schoolList);
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
      title: 'School Name',
      field: 'school_name'
    },
    {
      title: 'Address',
      field: 'address'
    },
    {
      title: 'Contact Person',
      field: 'contact_person'
    },
    {
      title: 'Board',
      field: 'board'
    },
    {
      title: 'City',
      field: 'city'
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
              title="School Details"
              data={schoolList}
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
