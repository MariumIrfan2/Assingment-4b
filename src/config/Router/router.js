import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentForm from "../../screens/Backend/Students/StudentForm";
import TeacherForm from "../../screens/Backend/Teacher/TeacherForm";
import CourseForm from "../../screens/Backend/Course/CourseForm";
import InstitueFormBackend from "../../screens/Backend/Institute/InstituteForm";
import BackendStudentList from "../../screens/Backend/Students/BackendStudentList";
import BackendInstituteList from "../../screens/Backend/Institute/InstituteList";
import BackendCourseList from "../../screens/Backend/Course/CourseList";
import BackendTeachersList from "../../screens/Backend/Teacher/TeachersList";
import SingleStudent from "../../screens/Backend/Students/SingleStudent";
import SingleTeacher from "../../screens/Backend/Teacher/SingleTeacher";
import SingleCourse from "../../screens/Backend/Course/SingleCourse";
import SingleInstitute from "../../screens/Backend/Institute/SingleInstitute";
import Todo from "../../screens/Todo/Todo";



function Router() {
    return (
        <BrowserRouter>

            <Routes>
                {/* <Route path='dashboard/*' element={<Dashboard />} />
                <Route path="login" element={<LogIn />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="products" element={<Products />} />
                <Route path="Cart" element={<Cart />} /> */}

                <Route path="/" element={<Todo />} />
                <Route path="/studentform" element={<StudentForm />} />
                <Route path="/teacherform" element={<TeacherForm />} />
                <Route path="/instituteform" element={<InstitueFormBackend />} />
                <Route path="/courseform" element={<CourseForm />} />

                <Route path="/backendstudentlist" element={<BackendStudentList />} />
                <Route path="/backendteacherlist" element={<BackendTeachersList />} />
                <Route path="/backendinstitutelist" element={<BackendInstituteList />} />
                <Route path="/backendcourselist" element={<BackendCourseList />} />

                <Route path="/singlestudent/:id" element={<SingleStudent />} />
                <Route path="/singleteacher/:id" element={<SingleTeacher />} />
                <Route path="/singleinstitute/:id" element={<SingleInstitute />} />
                <Route path="/singlecourse/:id" element={<SingleCourse />} />

                <Route path="/studentform/:id" element={<StudentForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;