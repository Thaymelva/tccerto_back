const db = require('../db.js');

module.exports = {
    buscarTodos: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM tbl_usuarios', (error, results) => {
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
        db.query('SELECT * FROM tbl_usuarios WHERE id = ?',[id],(error, results)=>{
            if (error){rejeitado(error); return; }
            if(results.length > 0){
                aceito(results[0]);
            }else{
                aceito(false);
            }
        })

    })
    },

    inserir: (nome, email, celular, senha) => {
        return new Promise((aceito, rejeitado) => {
            db.query('INSERT INTO tbl_usuarios (nome, email, celular, senha) VALUES (?,?,?,?)',
                [nome, email, celular, senha],
                (error, results) => {
                    if (error) {
                        rejeitado(error); // Se houver um erro, rejeite a Promise
                        return;
                    }
                    aceito(results.insertId); // Caso contrário, aceite a Promise com o ID inserido
                }
            );
        });
    }
}