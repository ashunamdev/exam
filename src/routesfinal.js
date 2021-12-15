import Dashboard from '@material-ui/icons/Dashboard';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import MenuBook from '@material-ui/icons/MenuBook';
import Quiz from '@material-ui/icons/PlaylistAdd';
import Create from '@material-ui/icons/Create';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import School from '@material-ui/icons/School';
import ViewList from '@material-ui/icons/ViewList';


// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from 'views/Dashboard/Dashboard.jsx';
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
    path: '/school-register',
    name: 'Add School Section',
    icon: School,
    component: Typography,
    parent: ['super_admin'],
    layout: '/admin'
  },
  {
    path: '/school-list',
    name: 'School List',
    icon: ViewList,
    component: SchoolList,
    parent: ['school', 'super_admin'],
    layout: '/admin'
  },
  {
    path: '/teacher-register',
    name: 'Add Teacher Section',
    icon: SupervisorAccount,
    component: TeacherRegister,
    parent: ['school'],
    layout: '/admin'
  },
  {
    path: '/teacher-list',
    name: 'Teacher List',
    icon: ViewList,
    component: TeacherList,
    parent: ['school', 'super_admin'],
    layout: '/admin'
  },
  {
    path: '/student-register',
    name: 'Add Student Section',
    icon: SupervisorAccount,
    component: StudentRegister,
    parent: ['school'],
    layout: '/admin'
  },
  {
    path: '/student-list',
    name: 'StudentList',
    icon: ViewList,
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
    icon: ViewList,
    component: BatchList,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/question-register',
    name: 'Add Question Section',
    icon: Quiz,
    component: QuestionForm,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/question-list',
    name: 'QuestionList',
    icon: ViewList,
    component: QuestionList,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/create-exam',
    name: 'Create Exam',
    icon: Create,
    component: CreateExam,
    parent: ['teacher', 'school'],
    layout: '/admin'
  },
  {
    path: '/exam-list',
    name: 'ExamList',
    icon: MenuBook,
    component: ExamList,
    parent: ['teacher', 'school', 'student', 'super_admin'],
    layout: '/admin'
  }
];

export default _nav;
