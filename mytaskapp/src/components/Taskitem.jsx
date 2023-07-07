import { Box, Typography, Button } from '@mui/material/';
import { Link } from "react-router-dom";
const Taskitem = ({ task }) => {

  return (
    <Link to={`/tasks/:${task.id}`} style={{ textDecoration: 'none' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: '#9c7a9d',
        margin: 1,
        padding: 5,
        borderRadius: 2,
        color: 'white',
      }}>
        <Typography
          variant={'h3'}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            fontSize: "20px",
            padding: 1,
          }}>
          {task.title}</Typography>
        <Typography variant={'span'}>{task.description}</Typography>
      </Box>
    </Link>

  )
}

export default Taskitem
