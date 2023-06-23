-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2023 a las 00:51:11
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectobd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuarioID` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL,
  `apellidos` varchar(150) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contraseña` varchar(150) NOT NULL,
  `telefono` int(11) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `fecha_nacimiento` varchar(30) NOT NULL,
  `perfil` varchar(15) NOT NULL,
  `genero` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuarioID`, `nombre`, `apellidos`, `correo`, `contraseña`, `telefono`, `direccion`, `fecha_nacimiento`, `perfil`, `genero`) VALUES
(14587, 'Rodrigo Isaac', 'Sida Castelano', 'castellano_isaac3@hotmail.com', 'rodrigo123', 2147483647, 'Juan Antonio', '5 de abril del 2000', 'Publico', 'Masculino'),
(123698, 'Alondra', 'Castelano', 'guadalupe@hotmail.com', 'Alon123', 445587699, 'La curva', '2002-07-19', 'Publico', 'Femenino'),
(999999, 'Lionel ', 'Messi', 'messi@hotmail.com', 'barcelona123', 2147483647, 'Tiki Taka', '24 junio 1987', 'Publico', 'Masculino'),
(1236554, 'Rodrigo', 'Sida', 'caste@hotmail.com', 'pepito23', 455555555, 'Antonio', '4 abril', 'Publico', 'M'),
(1258784, 'Miguel', 'Juarez', 'hldkk@hotmail.com', '12345698', 2147483647, 'Misterios', '5 de febrero del 2022', 'Privado', 'Masculino');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuarioID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuarioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1258785;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
