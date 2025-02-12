
import './App.css'
import {  createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Notes from './Components/Notes'
import ViewNotes from './Components/ViewNotes'
const router=createBrowserRouter([
  {
    path:'/',
    element:
    <div>
      <Nav></Nav>
      <Home></Home>
    </div>
  },
  {
    path:'/notes',
    element:
    <div>
      <Nav></Nav>
      <Notes></Notes>
    </div>
  },
  {
    path:'/notes/:id',
    element:
      <div>
        <Nav></Nav>
        <ViewNotes></ViewNotes>
      </div>
  },

  

])

function App() {
  

  return (
    <>
    <RouterProvider router={router}> <h1>dfFADaddwd</h1> </RouterProvider>
   
    </>
  )
}

export default App
