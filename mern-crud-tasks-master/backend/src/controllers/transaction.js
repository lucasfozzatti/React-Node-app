
const pool = require('../database')

//Chequeo el id_user y envio todos sus datos 
exports.movement = async (req, res)=>{
    const id_user = req.params.id
    pool.query(
        "SELECT * FROM transactions WHERE id_user = ?; ",
        id_user,
        (err, result) => {
            if (err){
                console.log("error")
            }else{
                console.log("holaaa")
                
                res.json({result: result[0].type});
            }

        })        

}
