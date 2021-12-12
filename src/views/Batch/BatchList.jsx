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

export default function BatchList() {
  const [batchList, setBatchList] = useState([]);

  useEffect(() => {
    populateStudentList();
  }, []);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .post(
          `${BASE_URL}get-batch/`,
          {},
          {
            headers: {
              Authorization: `JWT ` + userData?.token
            }
          }
        )
        .then((res) => {
          setBatchList(res.data.data);
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
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Batch Id',
      field: 'batch_id'
    }
  ];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <MaterialTable
              title="Student Details"
              data={batchList}
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
