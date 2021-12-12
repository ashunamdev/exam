import React, { useEffect, useState } from 'react';
// @material-ui/core components
// core components
import GridItem from 'components/Grid/GridItem.js';
import GridContainer from 'components/Grid/GridContainer.js';
import Card from 'components/Card/Card.js';
import CardBody from 'components/Card/CardBody.js';
import MaterialTable from 'material-table';
import { BASE_URL } from '../../utils/constant'

import axios from 'axios';

export default function QuestionList() {
  const [questionList, setQuestionList] = useState([]);

  useEffect(() => {
    populateStudentList();
  }, []);

  const populateStudentList = () => {
    var userData = JSON.parse(window.localStorage.getItem('user'));

    const getData = async () => {
      axios
        .post(
          `${BASE_URL}get-question/`,
          {},
          {
            headers: {
              Authorization: `JWT ` + userData?.token
            }
          }
        )
        .then((res) => {
          setQuestionList(res.data.data);
          // if(res.data.stuts){
          // }else{
          //   alert(res.data.message)
          // }
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
      title: 'Question',
      field: 'question'
    },
    {
      title: 'Option A',
      field: 'option_a'
    },
    {
      title: 'Option B',
      field: 'option_b'
    },
    {
      title: 'Option C',
      field: 'option_c'
    },
    {
      title: 'Option D',
      field: 'option_d'
    },
    {
      title: 'Correct Answer',
      field: 'correct_answer'
    },
    {
      title: 'school ',
      field: 'school'
    },
    {
      title: 'Batch',
      field: 'batch'
    }
  ];
  return (
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
                selectionProps: rowData => ({
                disabled: rowData.name === 'Mehmet',
                color: 'primary'
                })
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
