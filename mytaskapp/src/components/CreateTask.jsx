import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material/';
import { useNavigate, useParams } from 'react-router-dom';

import { postTask, getTask, deleteTask, updateTask } from '../api.js';
import Layout from './Layout';

const CreateTask = () => {

    let { id } = useParams();
    const navigate = useNavigate()
    const [task, setTask] = useState({
        title: '',
        description: '',
    })


    const getSingleTask = async () => {
        const [data] = await getTask(id.slice(1))
        setTask({ 'title': data.title, 'description': data.description })
    }
    const saveTask = async () => {
        await postTask(task)
        navigate('/')
    }
    const upgradeTask = async () => {
        await updateTask(id.slice(1), task)
        navigate('/')
    }
    const deletedTask = async () => {
        await deleteTask(id.slice(1))
        navigate('/')
    }


    // Handlers 
    const handleSubmit = (e) => {
        e.preventDefault();
        saveTask(task)

    }

    const handleEdit = (e) => {
        e.preventDefault()
        upgradeTask(id.slice(1), task)
    }
    const handleDelete = (e) => {
        e.preventDefault();
        deletedTask()
    }
    const handleChange = (title, value) => {
        setTask({ ...task, [title]: value })

    }

    useEffect(() => {
        if (!id) {
            return;
        } else {
            getSingleTask(id);
        }
    }, []);

    return (
        <Layout>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',

            }}>
                {!id
                    ? <Typography variant="h4">Create Task</Typography>
                    : <Typography variant="h4">Update / Delete Task</Typography>}

                <form onSubmit={(e) => handleSubmit(e)}>
                    <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', flexDirection: 'column', margin: 2 }}>

                        <TextField
                            label="Title"
                            name="title"
                            variant="outlined"
                            value={task.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                        <TextField
                            multiline
                            maxRows={5}
                            label="Description"
                            name="description"
                            variant="outlined"
                            value={task.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </Box>


                    <Box >
                        {!id
                            ? <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: 2 }}>
                                <Button
                                    sx={{ width: '100%', }}
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    onClick={(e) => handleSubmit(e)}>
                                    Submit</Button>
                            </Box>
                            : <Box sx={{ display: 'flex', gap: '10px', justifyContent: 'center', margin: 2 }}>
                                <Button
                                    sx={{ width: '50%' }}
                                    variant="contained"
                                    color="secondary"
                                    onClick={(e) => handleEdit(e)}>Edit</Button>
                                <Button
                                    sx={{ width: '50%' }}
                                    variant="contained"
                                    color="error"
                                    onClick={(e) => handleDelete(e)}
                                >Eliminar</Button>
                            </Box>
                        }
                    </Box>
                </form>
            </Box >
        </Layout >
    );
}

export default CreateTask;
