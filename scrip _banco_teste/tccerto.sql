CREATE DATABASE TCCERTO;

USE TCCERTO;

-- Tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipoUsuario ENUM('professorAvaliador', 'comum') NOT NULL DEFAULT 'comum'
    
);

INSERT INTO usuarios (nome, email, senha, tipoUsuario) values ('João Paulo', 'jotta@gmail.com','Jotta123','professorAvaliador');
INSERT INTO usuarios (nome, email, senha, tipoUsuario) values ('Maria Vitória', 'mariavitoria@gmail.com','Maria123','professorAvaliador');
INSERT INTO usuarios (nome, email, senha, tipoUsuario) values ('Henrique Martins', 'henriquemartins@gmail.com','henrique123','professorAvaliador');
INSERT INTO usuarios (nome, email, senha, tipoUsuario) values ('Thayanne Melo', 'thaymelva@gmail.com','Thayanne123','professorAvaliador');

select * from usuarios