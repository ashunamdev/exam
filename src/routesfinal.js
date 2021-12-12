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
import Typography from 'views/Typography/Typography.jsx';
import QuestionForm from 'views/Exam/QuestionForm.jsx';
import QuestionList from 'views/Exam/QuestionList.jsx';
import BatchList from 'views/Batch/BatchList.jsx';
import BatchForm from 'views/Batch/BatchForm.jsx';
import CreateExam from 'views/Exam/CreateExam.jsx';
import ExamList from 'views/Exam/ExamList.jsx';

const _nav = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    component: DashboardPage,
    layout: '/admin',
    parent: ['teacher', 'school', 'student', 'super_admin']
  },
  {
    path: '/user',
    name: 'User Profile',
    icon: Person,
    component: UserProfile,
    parent: ['school', 'super_admin'],
    layout: '/admin'
  },
  {
    path: '/school-register',
    name: 'Add School Section',
    icon: LibraryBooks,
    component: Typography,
    parent: ['super_admin'],
    layout: '/admin'
  },
  {
    path: '/school-list',
    name: 'School List',
    icon: 'content_paste',
    component: SchoolList,
    parent: ['school', 'super_admin'],
    layout: '/admin'
  },
  {
    path: '/teacher-register',
    name: 'Add Teacher Section',
    icon: LibraryBooks,
    component: TeacherRegister,
    parent: ['school'],
    layout: '/admin'
  },
  {
    path: '/teacher-list',
    name: 'Teacher List',
    icon: 'content_paste',
    component: TeacherList,
    parent: ['school', 'super_admin'],
    layout: '/admin'
  },
  {
    path: '/student-register',
    name: 'Add Student Section',
    icon: LibraryBooks,
    component: StudentRegister,
    parent: ['school'],
    layout: '/admin'
  },
  {
    path: '/student-list',
    name: 'StudentList',
    icon: 'content_paste',
    component: StudentList,
    parent: ['teacher', 'school', 'super_admin'],
    layout: '/admin'
  },

  {
    path: '/batch-register',
    name: 'Add Batch Section',
    icon: LibraryBooks,
    component: BatchForm,
    parent: ['school'],
    layout: '/admin'
  },
  {
    path: '/batch-list',
    name: 'Batch List',
    icon: 'content_paste',
    component: BatchList,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/question-register',
    name: 'Add Question Section',
    icon: LibraryBooks,
    component: QuestionForm,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/question-list',
    name: 'QuestionList',
    icon: 'content_paste',
    component: QuestionList,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/create-exam',
    name: 'Create Exam',
    icon: 'content_paste',
    component: CreateExam,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/exam-list',
    name: 'ExamList',
    icon: 'content_paste',
    component: ExamList,
    parent: ['teacher', 'school', 'student', 'super_admin'],
    layout: '/admin'
  }
];

export default _nav;
