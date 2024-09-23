-- 4) Banco de dados

-- Uma empresa solicitou a você um aplicativo para manutenção de um cadastro de clientes. Após a reunião de definição dos requisitos, as conclusões foram as seguintes:

-- - Um cliente pode ter um número ilimitado de telefones;
-- - Cada telefone de cliente tem um tipo, por exemplo: comercial, residencial, celular, etc. O sistema deve permitir cadastrar novos tipos de telefone;
-- - A princípio, é necessário saber apenas em qual estado brasileiro cada cliente se encontra. O sistema deve permitir cadastrar novos estados;

-- Você ficou responsável pela parte da estrutura de banco de dados que será usada pelo aplicativo. Assim sendo:

-- - Proponha um modelo lógico para o banco de dados que vai atender a aplicação. Desenhe as tabelas necessárias, os campos de cada uma e marque com setas os relacionamentos existentes entre as tabelas;
-- - Aponte os campos que são chave primária (PK) e chave estrangeira (FK);
-- - Faça uma busca utilizando comando SQL que traga o código, a razão social e o(s) telefone(s) de todos os clientes do estado de São Paulo (código “SP”);

-- Criação das tabelas

CREATE TABLE Estados (
    id_estado INT PRIMARY KEY,
    nome_estado VARCHAR(50),
    codigo_estado CHAR(2)
);

CREATE TABLE TiposTelefone (
    id_tipo INT PRIMARY KEY,
    descricao_tipo VARCHAR(50)
);

CREATE TABLE Clientes (
    id_cliente INT PRIMARY KEY,
    razao_social VARCHAR(100),
    id_estado INT,
    FOREIGN KEY (id_estado) REFERENCES Estados(id_estado)
);

CREATE TABLE Telefones (
    id_telefone INT PRIMARY KEY,
    numero_telefone VARCHAR(20),
    id_cliente INT,
    id_tipo INT,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_tipo) REFERENCES TiposTelefone(id_tipo)
);

-- Busca dos clientes do estado de São Paulo

SELECT 
    c.id_cliente, 
    c.razao_social, 
    t.numero_telefone
FROM 
    Clientes c
JOIN 
    Telefones t ON c.id_cliente = t.id_cliente
JOIN 
    Estados e ON c.id_estado = e.id_estado
WHERE 
    e.codigo_estado = 'SP';
