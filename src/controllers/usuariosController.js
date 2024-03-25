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
        let celular = req.body.celular;
        let senha  = req.body.senha;
        
        console.log("=>", nome, email, celular, senha)

        if(nome && email && celular && senha){
            let usuario = await UsuariosService.inserir(nome, email, celular, senha);
            json.result = {
                id: usuario,
                nome,
                email,
                celular,
                senha
            };
        }else{
            json.error = 'Campos não enviados'
        }
        res.json(json);
    },
}