const UsuariosService = require('../services/UsuariosService.js');

module.exports = {
    buscarTodos: async (req, res) =>{
        let json ={error:'', result:[]};

        let usuarios = await UsuariosService.buscarTodos();

        for (let i in usuarios) {
            json.result.push({
                id: usuarios[i].id,  // Corrigido para acessar a propriedade 'nome' de 'usuarios[i]'
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                senha: usuarios[i].senha,
                tipoUsuario: usuarios[i].tipoUsuario
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json ={error:'', result:{}};

        let id = req.params.id;
        let usuario = await UsuariosService.buscarUm(id);

        if(usuario){
            json.result = usuario;
        }
        res.json(json);
    },

    inserir: async(req, res) => {
        let json ={error:'', result:{}};

        let email  = req.body.modelo;
        let celular  = req.body.celular;


        if(email && celular){
            let usuario = await UsuariosService.inserir(email, celular);
            json.result = {
                id: usuario,
                email,
                celular,
            };
        }else{
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
}