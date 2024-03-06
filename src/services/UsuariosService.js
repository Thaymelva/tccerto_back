const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM usuarios', (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    },
    buscarUm:(id) =>{
        return new Promise((aceito, rejeitado)=>{
        db.query('SELECT * FROM usuarios WHERE id = ?',[id],(error, results)=>{
            if (error){rejeitado(error); return; }
            if(results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        })

    })
    },

    inserir:(email, celular) =>{
        return new Promise((aceito, rejeitado)=>{
        db.query('INSERT INTO usuarios (email, celular) VALUES (?,?)',
            [email, celular],
            (error, results)=>{
            if (error){rejeitado(error); return; }
                aceito(results.inserirId);

        })

    })
    }
};
