/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Person from '@material-ui/icons/Person';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
import UserProfile from 'views/UserProfile/UserProfile.jsx';
import StudentList from 'views/StudentList/StudentList.jsx';
import StudentRegister from 'views/StudentList/StudentRegister';
import TeacherRegister from 'views/TeacherList/TeacherRegister';
import SchoolList from 'views/SchoolList/SchoolList.jsx';
import TeacherList from 'views/TeacherList/TeacherList.jsx';
import Typography from "views/Typography/Typography.jsx";
import QuestionForm from 'views/Exam/QuestionForm.jsx';
import QuestionList from 'views/Exam/QuestionList.jsx';
import BatchList from 'views/Batch/BatchList.jsx'
import BatchForm from 'views/Batch/BatchForm.jsx';
import CreateExam from 'views/Exam/CreateExam.jsx';
import ExamList from 'views/Exam/ExamList.jsx';
// import StudentRegister from "views/StudentList/StudentRegister";
// import Icons from "views/Icons/Icons.js";
// import Maps from "views/Maps/Maps.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";

// const dashboardRoutes = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     icon: Dashboard,
//     component: DashboardPage,
//     layout: "/admin",
//   },
//   {
//     path: "/user",
//     name: "User Profile",
//     icon: Person,
//     component: UserProfile,
//     layout: "/admin",
//   },
//   {
//     path: "/typography",
//     name: "Add School Section",
//     icon: LibraryBooks,
//     component: Typography,
//     layout: "/admin",
//   },
//   {
//     path: "/student-register",
//     name: "Add Student Section",
//     icon: LibraryBooks,
//     component: StudentRegister,
//     layout: "/admin",
//   },
//   {
//     path: "/teacher-register",
//     name: "Add Teacher Section",
//     icon: LibraryBooks,
//     component: TeacherRegister,
//     layout: "/admin",
//   },
//   {
//     path: "/SchoolList",
//     name: "School List",
//     icon: "content_paste",
//     component: SchoolList,
//     layout: "/admin",
//   },
//   {
//     path: "/TeacherList",
//     name: "Teacher List",
//     icon: "content_paste",
//     component: TeacherList,
//     layout: "/admin",
//   },
//   {
//     path: "/StudentList",
//     name: "StudentList",
//     icon: "content_paste",
//     component: StudentList,
//     layout: "/admin",
//   },
//   // {
//   //   path: "/icons",
//   //   name: "Icons",
//   //   rtlName: "الرموز",
//   //   icon: BubbleChart,
//   //   component: Icons,
//   //   layout: "/admin",
//   // },
//   // {
//   //   path: "/maps",
//   //   name: "Maps",
//   //   rtlName: "خرائط",
//   //   icon: LocationOn,
//   //   component: Maps,
//   //   layout: "/admin",
//   // },
//   // {
//   //   path: "/notifications",
//   //   name: "Notifications",
//   //   rtlName: "إخطارات",
//   //   icon: Notifications,
//   //   component: NotificationsPage,
//   //   layout: "/admin",
//   // },
//   // {
//   //   path: "/rtl-page",
//   //   name: "RTL Support",
//   //   rtlName: "پشتیبانی از راست به چپ",
//   //   icon: Language,
//   //   component: RTLPage,
//   //   layout: "/rtl",
//   // },
//   // {
//   //   path: "/upgrade-to-pro",
//   //   name: "Upgrade To PRO",
//   //   rtlName: "التطور للاحترافية",
//   //   icon: Unarchive,
//   //   component: UpgradeToPro,
//   //   layout: "/admin",
//   // },
// ];

let a = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin'
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: UserProfile,
    layout: '/admin'
  }
];
let b = [];
let userStorageData = localStorage.getItem('user') 
if (userStorageData) {
  let userData =  JSON.parse(userStorageData);
  if (userData?.user_type === 'super_admin') {
    b = [
      {
        path: '/school-register',
        name: 'Add School Section',
        icon: LibraryBooks,
        component: Typography,
        layout: '/admin'
      },
      {
        path: '/school-list',
        name: 'School List',
        icon: 'content_paste',
        component: SchoolList,
        layout: '/admin'
      },
      {
        path: '/teacher-list',
        name: 'Teacher List',
        icon: 'content_paste',
        component: TeacherList,
        layout: '/admin'
      },
      {
        path: '/student-list',
        name: 'StudentList',
        icon: 'content_paste',
        component: StudentList,
        layout: '/admin'
      }
    ];
  } else if (userData?.user_type === 'school') {
    b = [
      {
        path: '/student-register',
        name: 'Add Student Section',
        icon: LibraryBooks,
        component: StudentRegister,
        layout: '/admin'
      },
      {
        path: '/teacher-register',
        name: 'Add Teacher Section',
        icon: LibraryBooks,
        component: TeacherRegister,
        layout: '/admin'
      },
      {
        path: '/batch-register',
        name: 'Add Batch Section',
        icon: LibraryBooks,
        component: BatchForm,
        layout: '/admin'
      },
      {
        path: '/question-list',
        name: 'QuestionList',
        icon: 'content_paste',
        component: QuestionList,
        layout: '/admin'
      },
      {
        path: '/teacher-list',
        name: 'Teacher List',
        icon: 'content_paste',
        component: TeacherList,
        layout: '/admin'
      },
      {
        path: '/question-register',
        name: 'Add Question Section',
        icon: LibraryBooks,
        component: QuestionForm,
        layout: '/admin'
      },
      {
        path: '/create-exam',
        name: 'Create Exam',
        icon: 'content_paste',
        component: CreateExam,
        layout: '/admin'
      },
      {
        path: '/batch-list',
        name: 'Batch List',
        icon: 'content_paste',
        component: BatchList,
        layout: '/admin'
      },
      {
        path: '/student-list',
        name: 'StudentList',
        icon: 'content_paste',
        component: StudentList,
        layout: '/admin'
      },
      {
        path: '/exam-list',
        name: 'ExamList',
        icon: 'content_paste',
        component: ExamList,
        layout: '/admin'
      }
    ];
  } else if (userData?.user_type === 'teacher') {
    b = [
      {
        path: '/student-list',
        name: 'StudentList',
        icon: 'content_paste',
        component: StudentList,
        layout: '/admin'
      },
      {
        path: '/ExamList',
        name: 'ExamList',
        icon: 'content_paste',
        component: ExamList,
        layout: '/admin'
      },
      {
        path: '/add-question',
        name: 'Add Question Section',
        icon: LibraryBooks,
        component: QuestionForm,
        layout: '/admin'
      },
      {
        path: '/createExam',
        name: 'Create Exam',
        icon: 'content_paste',
        component: CreateExam,
        layout: '/admin'
      },
      {
        path: '/questionList',
        name: 'QuestionList',
        icon: 'content_paste',
        component: QuestionList,
        layout: '/admin'
      }
    ];
  } else if (userData?.user_type === 'student') {
    b = [
      
      // {
      //   path: '/StudentList',
      //   name: 'StudentList',
      //   icon: 'content_paste',
      //   component: StudentList,
      //   layout: '/admin'
      // }
      {
        path: '/ExamList',
        name: 'ExamList',
        icon: 'content_paste',
        component: ExamList,
        layout: '/admin'
      }
    ];
  }
}

var newArr = [...a, ...b];
console.log('newArr', newArr);

export default newArr;
