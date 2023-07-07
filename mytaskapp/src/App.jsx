import { useState, useEffect } from 'react'
import { getAllTasks } from './api.js'
import Taskitem from './components/taskitem.jsx'
import { Link, } from "react-router-dom";
import { Box, Button } from '@mui/material/';

import Layout from './components/Layout.jsx';
function App() {

  const [tasks, settasks] = useState([])

  const getAll = async () => {
    const resp = await getAllTasks()
    settasks(resp)

  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <Layout>
      <Link to={`/tasks/create`} >
        <Button sx={{
          marginTop: 2,
          width: '200%',
          height: '50px',
        }}
          variant="contained">CREATE A NEW TASK
        </Button>
      </Link>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',


      }}>
        {tasks.map((task) => (
          <Taskitem key={task.id} task={task} />
        ))}
      </Box>
    </Layout >


  )
}

export default App
