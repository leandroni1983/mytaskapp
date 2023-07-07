const API = 'http://localhost:4000/tasks'

//devuelvo todas las Tasks
export const getAllTasks = async () =>{
  const data =  await fetch(API)
  return data.json()
}

export const getTask = async (id) =>{
  const data =  await fetch(API+'/'+id)
   return data.json()
}

export const postTask = async (task) => {
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
}

export const deleteTask = async (id) =>{
  await fetch(API+'/'+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const updateTask = async (id,task) =>{
  await fetch(API+'/'+id, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
}