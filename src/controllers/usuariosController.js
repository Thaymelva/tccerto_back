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

        let nome  = req.body.nome;
        let email  = req.body.email;
        let senha  = req.body.senha;
        let tipoUsuario  = req.body.tipoUsuario;


        if(nome && email && senha && tipoUsuario){
            let usuario = await UsuariosService.inserir(nome, email, senha, tipoUsuario);
            json.result = {
                id: usuario,
                nome,
                email,
                senha,
                tipoUsuario,
            };
        }else{
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
}