import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, Student, UpdateStudent } from './pages'
import StudentOulet from './pages/StudentOutlet'
import Test1 from './pages/test1'

const AppRoute = ()=>{
  return (
    <>
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="student" element={<StudentOulet/>}>
      <Route path="" element={<Student/>} />
      <Route path="create-student" element={<CreateStudent/>}/>
      <Route path="update-student" element={<UpdateStudent/>}/>
      </Route>
      <Route path=" test" element={<Test1/>}/>
      
      

    </Routes>
    </>
   
   
  )
}

export default AppRoute