-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1:3307
-- Létrehozás ideje: 2020. Már 06. 18:26
-- Kiszolgáló verziója: 10.1.34-MariaDB
-- PHP verzió: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `sportesemenyek`
--
CREATE DATABASE IF NOT EXISTS `sportesemenyek` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sportesemenyek`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `sportesemenyek`
--

DROP TABLE IF EXISTS `sportesemenyek`;
CREATE TABLE `sportesemenyek` (
  `esemeny` varchar(60) DEFAULT NULL,
  `szervezo` varchar(50) DEFAULT NULL,
  `datum` varchar(10) DEFAULT NULL,
  `helyszin` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- A tábla adatainak kiíratása `sportesemenyek`
--

INSERT INTO `sportesemenyek` (`esemeny`, `szervezo`, `datum`, `helyszin`) VALUES
('43. Magyar Nemzetközi Tollaslabda Bajnokság', 'Magyar Tollaslabda Szövetség', '2018.11.01', 'Budaörs'),
('8. Magyar Nemzetközi Junior Tollaslabda Bajnokság', 'Magyar Tollaslabda Szövetség', '2018.02.08', 'Pécs'),
('HUN Challenge Világkupa nemzetközi női és férfi tornaverseny', 'Magyar Torna Szövetség', '2018.09.21', 'Győr'),
('l . Shaolin Európa Bajnokság', 'Magyar Tradicionális Kungfu és Wushu Szakszövetség', '2018.03.07', 'Budapest'),
('BudapestMan Nemzetközi Triatlon Verseny', 'Magyar Triatlon Szövetség', '2018.06.17', 'Budapest'),
('ETU Klubcsapat Európa Bajnokság és Felnőtt Európa Kupa', 'Magyar Triatlon Szövetség', '2018.08.25', 'Székesfehérvár'),
('221 ITU Triatlon világkupa és junior Európa kupa', 'Magyar Triatlon Szövetség', '2018.07.07', 'Tiszaújváros'),
('V4 Triatlon Bajnokság', 'Magyar Triatlon Szövetség', '2018.06.17', 'Budapest'),
('2018. évi Nyíltvízi úszó világ kupa', 'Magyar Úszó Szövetség', '2018.06.23', 'Balatonfüred'),
('DRAGON Európa-bajnokság 2018', 'Magyar Vitorlás Szövetség', '2018.05.23', 'Balatonfüred'),
('Soling Európa-bajnokság', 'Magyar Vitorlás Szövetség', '2018.05.01', 'Alsóörs'),
('Felnőtt női és férfi párbajtőr Grand Prix', 'Magyar Vívó Szövetség', '2018.03.23', 'Budapest'),
('Európai Kadet körverseny', 'Magyar Vívó Szövetség', '2018.10.05', 'Budapest'),
('Gerevich - Kovács - Kárpáti felnőtt kard világkupa', 'Magyar Vívó Szövetség', '2018.11.30', 'Győr'),
('2018. évi FINA ifjúsági világbajnokság', 'Magyar Vízilabda Szövetség', '2018.08.11', 'Szombathely'),
('CanalCup 2018', 'Magyar Vízisí és Wakeboard Szövetség', '2018.09.14', 'Majosháza');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
