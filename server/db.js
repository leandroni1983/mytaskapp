import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    database: 'expres-fazt',
    user: 'hqk1vcyissjhsr0vfr2c',
    host: 'aws.connect.psdb.cloud',
    password: 'pscale_pw_df8cNpRXkQ2PLJMy3ga1nUgvMDTkFHLKUUDajkL2bRT',
    ssl:{
        rejectUnauthorized:false
    }

})


export const getAll = async (req,res) =>{
    await pool.query("SELECT * FROM tasks")
        .then(([result]) => {
            res.json(result);
        }).catch((err) => {
            console.log(err);
    });
}

export const getTask = async (req, res) =>{
    await pool.query("SELECT * FROM tasks WHERE id =?",[req.params.Id])
      .then(([result]) => {
            res.json(result);
        }).catch((err) => {
            console.log(err)
        });
}


export const postTask = async (req, res) =>{
    await pool.query("INSERT INTO tasks(title,description) VALUES(?,?)",[req.body.title,req.body.description])
   .then(([result]) => {
    res.json(result);
   
    }).catch((err) => {
        console.log(err)
    });
}


export const putTask = async (req, res) =>{
    await pool.query("UPDATE tasks SET title=IFNULL(?,title),description=IFNULL(?,description) WHERE id=?",[req.body.title,req.body.description, req.params.Id])
    .then(([result]) => {
        if (result.affectedRows != 0) {
            res.json(result);
        }else{
            res.status(404).json({
                message: "Task not found"}
        )}
        }).catch((err) => {
            console.log(err)
        });
}

export const deleteTask = async (req, res) =>{
    await pool.query("DELETE FROM tasks WHERE id =?",[req.params.Id])
     .then(([result]) => {
            res.json(result);
        }).catch((err) => {
            console.log(err)
        });
}


console.log('conected')
