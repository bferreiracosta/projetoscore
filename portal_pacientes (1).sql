-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21-Mar-2021 às 16:14
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `portal_pacientes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `leitosdisponivel`
--

CREATE TABLE `leitosdisponivel` (
  `idleitos` int(11) NOT NULL,
  `enfermariaanexo` int(11) DEFAULT NULL,
  `enfermariaanexofeminino` int(11) DEFAULT NULL,
  `enfermariaanexomasculino` int(11) DEFAULT NULL,
  `utianexo` int(11) DEFAULT NULL,
  `utianexofeminino` int(11) DEFAULT NULL,
  `utianexomasculino` int(11) DEFAULT NULL,
  `enfermariacim` int(11) DEFAULT NULL,
  `enfermariacimfeminino` int(11) DEFAULT NULL,
  `enfermariacimmasculino` int(11) DEFAULT NULL,
  `utihmu` int(11) DEFAULT NULL,
  `utihmufeminino` int(11) DEFAULT NULL,
  `utihmumasculino` int(11) DEFAULT NULL,
  `leitosbloqueadoutianexo` int(11) DEFAULT NULL,
  `leitosbloqueadoenfermariaanexo` int(11) DEFAULT NULL,
  `leitosbloqueadoutihmu` int(11) DEFAULT NULL,
  `leitosbloqueadoenfermariacim` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `leitosdisponivel`
--

INSERT INTO `leitosdisponivel` (`idleitos`, `enfermariaanexo`, `enfermariaanexofeminino`, `enfermariaanexomasculino`, `utianexo`, `utianexofeminino`, `utianexomasculino`, `enfermariacim`, `enfermariacimfeminino`, `enfermariacimmasculino`, `utihmu`, `utihmufeminino`, `utihmumasculino`, `leitosbloqueadoutianexo`, `leitosbloqueadoenfermariaanexo`, `leitosbloqueadoutihmu`, `leitosbloqueadoenfermariacim`) VALUES
(1, 29, 20, 20, 70, 20, 20, 84, 20, 20, 40, 20, 20, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Estrutura da tabela `pacientes`
--

CREATE TABLE `pacientes` (
  `id_paciente` int(11) NOT NULL,
  `susfacil` varchar(45) DEFAULT NULL,
  `paciente` varchar(45) DEFAULT NULL,
  `leito` varchar(45) DEFAULT NULL,
  `idade` varchar(45) DEFAULT NULL,
  `news` int(11) DEFAULT NULL,
  `dispositivo` varchar(45) DEFAULT NULL,
  `fluxo_de_o2` varchar(45) DEFAULT NULL,
  `droga` varchar(45) DEFAULT NULL,
  `fio2` varchar(45) DEFAULT NULL,
  `peep` varchar(45) DEFAULT NULL,
  `sedacao` varchar(45) DEFAULT NULL,
  `glasgow` varchar(45) DEFAULT NULL,
  `tempo` varchar(45) DEFAULT NULL,
  `exame` varchar(45) DEFAULT NULL,
  `acomodacao` varchar(45) DEFAULT NULL,
  `unidade` varchar(45) DEFAULT NULL,
  `baixa` varchar(45) DEFAULT NULL,
  `paliativo` varchar(45) DEFAULT NULL,
  `ecf` varchar(45) DEFAULT NULL,
  `nora` varchar(45) DEFAULT NULL,
  `adrenalina` varchar(45) DEFAULT NULL,
  `dormonid` varchar(45) DEFAULT NULL,
  `fentanil` varchar(45) DEFAULT NULL,
  `rocuronio` varchar(45) DEFAULT NULL,
  `propofol` varchar(45) DEFAULT NULL,
  `svd` varchar(45) DEFAULT NULL,
  `sne` varchar(45) DEFAULT NULL,
  `avp` varchar(45) DEFAULT NULL,
  `cvc` varchar(45) DEFAULT NULL,
  `fr` varchar(45) DEFAULT NULL,
  `sat` varchar(45) DEFAULT NULL,
  `o2` varchar(45) DEFAULT NULL,
  `temp` varchar(45) DEFAULT NULL,
  `fc` varchar(45) DEFAULT NULL,
  `sistolica` varchar(45) DEFAULT NULL,
  `alerta` varchar(45) DEFAULT NULL,
  `spict` varchar(45) DEFAULT NULL,
  `prt` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pacientes`
--

INSERT INTO `pacientes` (`id_paciente`, `susfacil`, `paciente`, `leito`, `idade`, `news`, `dispositivo`, `fluxo_de_o2`, `droga`, `fio2`, `peep`, `sedacao`, `glasgow`, `tempo`, `exame`, `acomodacao`, `unidade`, `baixa`, `paliativo`, `ecf`, `nora`, `adrenalina`, `dormonid`, `fentanil`, `rocuronio`, `propofol`, `svd`, `sne`, `avp`, `cvc`, `fr`, `sat`, `o2`, `temp`, `fc`, `sistolica`, `alerta`, `spict`, `prt`) VALUES
(99, '304451423', 'Enes Maria Silva Tomaz', '', '66', 3, 'Mascara Reservatorio', '9l', 'nao', '', '', 'nai', '15', '16:44', 'undefined', 'leito', 'planalto', 'evasao', '', '9', '', '', '', '', '', '', 'SVD', 'SNE', 'AVP', 'CVC', '20', '98', 'sim', '36', '90', '123', 'alerta', NULL, NULL),
(100, '304451448', 'Verediana Cristina Borges', 'Sala de Emergência', '42', 8, 'Ventilacao Mecanica', '', 'sim', '70', '14', 'sim', '15', '13:01', 'positivo', 'leito', 'planalto', 'alta', 'nao', '', 'NoraAdrenalina', '', 'Dormonid', 'Fentanil', '', '', 'SVD', 'SNE', '', 'CVC', '20', '90', 'sim', '20', '90', '100', 'alerta', NULL, NULL),
(101, '304451430', 'Robson Vilela Arantes', 'Sala de Emergência', '54', 6, 'Mascara Reservatorio', '15l', 'nao', '', '', 'nao', '15', '12:09', 'positivo', 'leito', 'planalto', 'transferência', 'nao', '', '', '', '', '', '', '', '', '', 'AVP', '', '22', '93', 'sim', '37', '90', '100', 'alerta', NULL, NULL),
(102, '304451465', 'Luciana Pereira Barbosa de Lima', 'Enfermaria', '42', 8, 'Mascara Reservatorio', '15l', 'nao', '', '', 'nao', '15', '13:14', 'positivo', 'leito', 'planalto', NULL, 'sim', '6', '', '', '', '', '', '', 'SVD', 'SNE', 'AVP', 'CVC', '32', '92', 'sim', '36', '90', '100', 'alerta', 'sim', 'undefined'),
(103, '304451479', 'Alessandro Rodrigues da Silva', 'Enfermaria', '39', 3, 'Cateter O2', '4l', 'nao', '', '', 'nao', '15', '13:14', 'aguardando', 'leito', 'planalto', NULL, 'nao', '', '', '', '', '', '', '', '', '', 'AVP', '', '19', '95', 'sim', '36', '90', '100', 'alerta', NULL, NULL),
(104, '304451467', 'Dirceu Petrucelli', 'Enfermaria', '81', 3, 'Cateter O2', '4l', 'nao', '', '', 'nao', '15', '13:15', 'aguardando', 'leito', 'planalto', NULL, 'nao', '1', '', '', '', '', '', '', '', '', 'AVP', '', '19', '96', 'sim', '36', '90', '100', 'alerta', NULL, NULL),
(105, '304451422', 'Cristiano Donizetti de Brito', 'Enfermaria', '48', 2, 'Cateter O2', '3l', 'nao', '', '', 'nao', '15', '12:10', 'aguardando', 'leito', 'planalto', NULL, 'nao', '', '', '', '', '', '', '', '', '', 'AVP', '', '20', '98', 'sim', '37', '90', '100', 'alerta', NULL, NULL),
(106, '304451481', 'Thiago Nascimento Reis', 'Enfermaria', '34', 3, 'Cateter O2', '4l', 'nao', '', '', 'nao', '15', '13:15', 'positivo', 'leito', 'planalto', NULL, 'nao', '', '', '', '', '', '', '', '', '', 'AVP', '', '19', '98', 'sim', '36', '90', '100', 'alerta', NULL, NULL),
(107, '304451440', 'Renato Fortunato de Santana', 'Enfermaria', '93', 3, 'Cateter O2', '2l', 'nao', '', '', 'nao', '15', '13:19', 'aguardando', 'leito', 'planalto', NULL, 'nao', '8', '', '', '', '', '', '', '', '', 'AVP', '', '20', '99', 'sim', '36', '90', '100', 'alerta', NULL, NULL),
(108, '171232950', 'VALCY VENANCIO DA SILVA', 'Enfermaria', '48', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', 'alta', 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(109, '171232966', 'ISABEL DOS SANTOS OLIVEIRA', 'Enfermaria', '94', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', 'alta', 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(110, '171232829', 'CESAR REGINALDO TIRSO', 'Enfermaria', '62', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'sim', '6', NULL, NULL, NULL, NULL, NULL, NULL, 'SVD', 'SNE', 'AVP', 'CVC', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'sim', '30'),
(111, '171232914', 'ROBERTO CARLOS CARDOSO', 'Enfermaria', '54', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'sim', '9', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '6908'),
(112, '171232845', 'RUDSON LUIZ DE PAULA LOPES', 'Enfermaria', '37', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(113, '171232907', 'ALTA PEREIRA DA SILVA', 'Sala de Emergência', '67', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(114, '171232904', 'MONICA RODRIGUES DE OLIVEIRA', 'Sala de Emergência', '47', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(115, '170746355', 'GENY DE SOUSA SOBREIRA', 'Sala de Emergência', '87', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(116, '171232932', 'SEVERINO GOMES DA SILVA', 'Sala de Emergência', '96', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(117, '171232854', 'JOSE MANOEL DE SOUSA', 'Sala de Emergência', '71', 14, 'Ventilacao Mecanica', '', 'nao', '100', '11', 'sim', '3', '08:46', 'positivo', 'leito', 'Luizote', 'obito', 'nao', '2', '', '', 'Dormonid', 'Fentanil', '', '', '', '', '', '', '30', '94', 'sim', '36', '120', '101', 'aresponsivo', NULL, NULL),
(118, '171232910', 'NILVA GERALDA SOUSA DE ARAUJO', 'Sala de Emergência', '66', 10, '', '', '', '', '', '', '', '14:43', 'positivo', NULL, 'Luizote', NULL, 'nao', '3', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', '24', '90', 'sim', '36', '110', '130', 'alerta', NULL, NULL),
(119, '12345', 'teste', 'Sala de Emergência', '50', 1, 'Cateter O2', '5l', 'nao', '', '', 'nao', '15', '16:47', 'positivo', 'maca', 'planalto', NULL, 'nao', '9', '', '', '', '', '', '', 'SVD', 'SNE', 'AVP', 'CVC', '20', '98', 'nao', '36', '90', '120', 'alerta', NULL, NULL),
(120, '123456789', 'Alessandro Rodrigues da Silva', 'Enfermaria', '89', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', 'transferência', '', '9', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '40'),
(121, '12345698', 'Alessandro Rodrigues da Silva', 'Enfermaria', '31', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'sim', '9', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '41'),
(122, '12345698', 'Alessandro Rodrigues da Silva', 'Enfermaria', '31', 0, '', '', '', '', '', '', '', '', 'positivo', NULL, 'Luizote', NULL, 'nao', '1', NULL, NULL, NULL, NULL, NULL, NULL, '', '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '41');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario` varchar(15) NOT NULL,
  `senha` varchar(60) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL,
  `autorizacao` varchar(45) DEFAULT NULL,
  `unidade` varchar(45) DEFAULT NULL,
  `scih` varchar(45) DEFAULT NULL,
  `regulacao` varchar(45) DEFAULT NULL,
  `enfermeiro` varchar(45) DEFAULT NULL,
  `tecenfermagem` varchar(45) DEFAULT NULL,
  `fisioterapeuta` varchar(45) DEFAULT NULL,
  `operador` varchar(45) DEFAULT NULL,
  `administrativo` varchar(45) DEFAULT NULL,
  `hmu` varchar(45) DEFAULT NULL,
  `cim` varchar(45) DEFAULT NULL,
  `anexo` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`usuario`, `senha`, `id_usuario`, `nome`, `autorizacao`, `unidade`, `scih`, `regulacao`, `enfermeiro`, `tecenfermagem`, `fisioterapeuta`, `operador`, `administrativo`, `hmu`, `cim`, `anexo`) VALUES
('admin', '123', 1, 'Administrador', '4', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuaiplanalto', '123', 2, 'Bruno', '5', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuailuizote', '123', 3, 'Karen', '1', '2', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuaimartins', '123', 4, 'Natalia', '1', '3', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuairoosevel', '123', 5, 'Ludymila', '1', '4', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuaimorumbi', '123', 6, 'Aniele', '1', '5', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('scihuaitibery', '123', 7, 'Camila', '1', '6', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('cida', '123', 8, 'Cida', '4', '1', '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('jessica', '123', 9, 'Jessica', '4', NULL, '1', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('apsplanalto', '123', 10, '', '2', '1', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('apsluizote', '123', 11, '', '2', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('apsmartins', '123', 12, '', '2', '3', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('apsroosevelt', '123', 13, '', '2', '4', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('apsmorumbi', '123', 14, '', '2', '5', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('apstibery', '123', 15, '', '2', '6', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('ssplanalto', '123', 16, '', '2', '1', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('ssluizote', '123', 17, '', '2', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('ssmartins', '123', 18, '', '2', '3', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('ssroosevelt', '123', 19, '', '2', '4', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('ssmorumbi', '123', 20, '', '2', '5', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('sstibery', '123', 21, '', '2', '6', '1', '2', '1', '2', '2', '2', '2', '2', '2', '2'),
('regulacao', '123', 22, 'Regulação', '1', NULL, '2', '1', '2', '2', '2', '1', '2', '2', '2', '2'),
('enfermeiropla', '123', 23, 'enfermeiro', '2', '1', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('tecenfplanalto', '123', 24, 'tecenf', '2', '1', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('fisioplanalto', '123', 25, 'fisio', '2', '1', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('enfermeiroluizo', '123', 26, '', '2', '2', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('tecenfluizote', '123', 27, '', '2', '2', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('fisioluizote', '123', 28, '', '2', '2', '2', '1', '2', '2', '2', '2', '2', '2', '2', '2'),
('enfermeiromarti', '123', 29, '', '2', '3', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('enfermeiroroose', '123', 30, '', '2', '4', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('enfermeiromorum', '123', 31, '', '2', '5', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('enfermeirotibe', '123', 32, '', '2', '6', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('enfermeirosaojo', '123', 33, '', '2', '7', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('enfermeiropampu', '123', 34, '', '2', '8', '2', '1', '1', '2', '2', '2', '2', '2', '2', '2'),
('tecenfmartins', '123', 35, '', '2', '3', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('tecenfroose', '123', 36, '', '2', '4', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('tecenfmorum', '123', 37, '', '2', '5', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('tecenftibe', '123', 38, '', '2', '6', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('tecenfsaojorge', '123', 39, '', '2', '7', '2', '1', '2', '1', '2', '2', '2', '2', '2', '2'),
('tecenfpampu', '123', 40, '', '2', '8', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisiomartins', '123', 41, '', '2', '3', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisioroose', '123', 42, '', '2', '4', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisiomorum', '123', 43, '', '2', '5', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisiotibe', '123', 44, '', '2', '6', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisiosaojorge', '123', 45, '', '2', '7', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('fisiopampu', '123', 46, '', '2', '8', '2', '1', '2', '2', '1', '2', '2', '2', '2', '2'),
('admplanalto', '123', 47, '', '2', '1', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admluizote', '123', 48, '', '2', '2', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admmartins', '123', 49, '', '2', '3', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admroosevelt', '123', 50, '', '2', '4', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admmorum', '123', 51, '', '2', '5', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admtibery', '123', 52, '', '2', '6', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admsaojorge', '123', 53, '', '2', '7', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('admpampu', '123', 54, '', '2', '8', '2', '1', '2', '2', '2', '2', '1', '2', '2', '2'),
('hmu', '123', 55, '', '2', NULL, '2', '1', '2', '2', '2', '2', '2', '1', '2', '2'),
('cim', '123', 56, '', '2', NULL, '2', '1', '2', '2', '2', '2', '2', '2', '1', '2'),
('anexo', '123', 57, '', '2', NULL, '2', '1', '2', '2', '2', '2', '2', '2', '2', '1');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `leitosdisponivel`
--
ALTER TABLE `leitosdisponivel`
  ADD PRIMARY KEY (`idleitos`);

--
-- Índices para tabela `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id_paciente`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `leitosdisponivel`
--
ALTER TABLE `leitosdisponivel`
  MODIFY `idleitos` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id_paciente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=123;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
