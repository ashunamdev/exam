import React from 'react';

import { useRoutes, Navigate } from 'react-router-dom';

//Pages
import LoginPage from './layouts/Login';
import Dashboard from './views/Dashboard/Dashboard';
import Error404Page from './views/pages/404/index';
import StudentList from './views/StudentList/StudentList';
import SchoolList from './views/SchoolList/SchoolList';
import TeacherList from './views/TeacherList/TeacherList';
import Batchlist from './views/TeacherList/TeacherList';
// import MainLayout from './views/main-layout/index';
// import TheLayout from "./components/containers/TheLayout";
import DashboardLayout from './layouts/Dashbard/index';
import StudentRegister from 'views/StudentList/StudentRegister';
import TeacherRegister from 'views/TeacherList/TeacherRegister';
import BatchForm from 'views/Batch/BatchForm';
import QuestionList from 'views/Exam/QuestionList';
import QuestionForm from 'views/Exam/QuestionForm';
import CreateExam from 'views/Exam/CreateExam';
import ExamList from 'views/Exam/ExamList';
// import Admin from 'layouts/Admin';
// import MainLayout from './components/main-layout';

const Routes = () => {
  // const { isAuth } = props;
  let isAuth = false;
  let userStorageData = localStorage.getItem('user');
  if (userStorageData) {
    let userData = JSON.parse(userStorageData);
    
    if (userData.status) {
      isAuth = userData.user_type;
    }
  }
  const routes = [
    {
      path: '/',
      element: isAuth ? <DashboardLayout /> : <LoginPage />,
      // element: isAuth ? <DashboardLayout /> : <Navigate to="/login" />,

      children: [
        {
          path: '/admin/',
          element: isAuth ? (
            <Navigate to="/admin/dashboard" />
          ) : (
            <Navigate to="/login" />
          )
        },
        {
          path: '/admin/dashboard',
          element: isAuth ? <Dashboard /> : <Navigate to="/login" />
        },
        {
          path: '/login',
          element: !isAuth ? <LoginPage /> : <Navigate to="/admin/dashboard" />
        },
        {
          path: '/admin/school-register',
          element: isAuth ? <StudentRegister /> : <Navigate to="/login" />
        },
        {
          path: '/admin/school-list',
          element: isAuth ? <SchoolList /> : <Navigate to="/login" />
        },
        {
          path: '/admin/teacher-list',
          element: isAuth ? <TeacherList /> : <Navigate to="/login" />
        },
        {
          path: '/admin/student-register',
          element: isAuth ? <StudentRegister /> : <Navigate to="/login" />
        },
        {
          path: '/admin/teacher-register',
          element: isAuth ? <TeacherRegister /> : <Navigate to="/login" />
        },
        {
          path: '/admin/batch-register',
          element: isAuth ? <BatchForm /> : <Navigate to="/login" />
        },
        {
          path: '/admin/question-list',
          element: isAuth ? <QuestionList /> : <Navigate to="/login" />
        },
        {
          path: '/admin/teacher-list',
          element: isAuth ? <TeacherList /> : <Navigate to="/login" />
        },

        {
          path: '/admin/question-register',
          element: isAuth ? <QuestionForm /> : <Navigate to="/login" />
        },
        {
          path: '/admin/create-exam',
          element: isAuth ? <CreateExam /> : <Navigate to="/login" />
        },
        {
          path: '/admin/batch-list',
          element: isAuth ? <Batchlist /> : <Navigate to="/login" />
        },
        {
          path: '/admin/student-list',
          element: isAuth ? <StudentList /> : <Navigate to="/login" />
        },
        {
          path: '/admin/exam-lists',
          element: isAuth ? <ExamList /> : <Navigate to="/login" />
        },

        {
          path: '404',
          element: <Error404Page />
        },
        {
          path: '*',
          element: <Navigate to="/404" />
        }
      ]
    }
  ];

  const router = useRoutes(routes);
  return <>{router}</>;
};

export default Routes;
