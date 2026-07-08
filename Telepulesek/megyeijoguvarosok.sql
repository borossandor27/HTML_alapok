-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Aug 13. 13:41
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `varosok`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `megyeijoguvarosok`
--

CREATE TABLE `megyeijoguvarosok` (
  `Varos` varchar(512) DEFAULT NULL,
  `Megye` varchar(512) DEFAULT NULL,
  `Lakossag` int(11) NOT NULL COMMENT 'A lakossági adatok a KSH (Központi Statisztikai Hivatal) 2023-as becslései vagy 2022-es népszámlálási adatok alapján kerekítve vannak.',
  `Terulet` decimal(10,2) NOT NULL COMMENT 'A területi adatok a városok hivatalos közigazgatási területére vonatkoznak (forrás: KSH, városi önkormányzatok).',
  `TszfelettiMagassag` int(11) DEFAULT NULL,
  `cimerFajl` varchar(512) DEFAULT NULL,
  `cimerUrl` varchar(512) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `megyeijoguvarosok`
--

INSERT INTO `megyeijoguvarosok` (`Varos`, `Megye`, `Lakossag`, `Terulet`, `TszfelettiMagassag`, `cimerFajl`, `cimerUrl`) VALUES
('Baja', 'Bács-Kiskun', 32759, 177.61, 75, 'HUN_Baja_Címer.svg', 'https://hu.wikipedia.org/wiki/Baja#/media/F%C3%A1jl:HUN_Baja_C%C3%ADmer.svg'),
('Békéscsaba', 'Békés', 54460, 193.94, 89, 'HUN_Békéscsaba_Címer.svg', 'https://hu.wikipedia.org/wiki/B%C3%A9k%C3%A9scsaba#/media/F%C3%A1jl:HUN_B%C3%A9k%C3%A9scsaba_C%C3%ADmer.svg'),
('Debrecen', 'Hajdú-Bihar', 201704, 461.66, 121, 'Coa_Hungary_Town_Debrecen.svg', 'https://hu.wikipedia.org/wiki/Debrecen#/media/F%C3%A1jl:Coa_Hungary_Town_Debrecen.svg'),
('Dunaújváros', 'Fejér', 41394, 52.66, 97, 'Dunaújváros.svg', 'https://hu.wikipedia.org/wiki/Duna%C3%BAjv%C3%A1ros#/media/F%C3%A1jl:Duna%C3%BAjv%C3%A1ros.svg'),
('Eger', 'Heves', 49499, 92.21, 165, 'Blason_ville_hu_EGER.svg', 'https://hu.wikipedia.org/wiki/Eger#/media/F%C3%A1jl:Blason_ville_hu_EGER.svg'),
('Esztergom', 'Komárom-Esztergom', 28642, 100.35, 105, 'BlasonHU-esztergom.svg', 'https://hu.wikipedia.org/wiki/Esztergom#/media/F%C3%A1jl:BlasonHU-esztergom.svg'),
('Érd', 'Pest', 71338, 60.54, 0, 'Coat_of_arms_of_Érd.svg', 'https://hu.wikipedia.org/wiki/%C3%89rd#/media/F%C3%A1jl:Coat_of_arms_of_%C3%89rd.svg'),
('Győr', 'Győr-Moson-Sopron', 130191, 174.62, 108, 'HUN_Győr_Címer.svg', 'https://hu.wikipedia.org/wiki/Gy%C5%91r#/media/F%C3%A1jl:HUN_Gy%C5%91r_C%C3%ADmer.svg'),
('Hódmezővásárhely', 'Csongrád-Csanád', 41781, 487.98, 0, 'HUN_Hódmezővásárhely_Címer.svg', 'https://hu.wikipedia.org/wiki/H%C3%B3dmez%C5%91v%C3%A1s%C3%A1rhely#/media/F%C3%A1jl:HUN_H%C3%B3dmez%C5%91v%C3%A1s%C3%A1rhely_C%C3%ADmer.svg'),
('Kaposvár', 'Somogy', 58830, 113.59, 153, 'HUN_Kaposvár_Címer.svg', 'https://hu.wikipedia.org/wiki/Kaposv%C3%A1r#/media/F%C3%A1jl:HUN_Kaposv%C3%A1r_C%C3%ADmer.svg'),
('Kecskemét', 'Bács-Kiskun', 109450, 322.57, 102, 'Coa_Hungary_Town_Kecskemét.svg', 'https://hu.wikipedia.org/wiki/Kecskem%C3%A9t#/media/F%C3%A1jl:Coa_Hungary_Town_Kecskem%C3%A9t.svg'),
('Miskolc', 'Borsod-Abaúj-Zemplén', 143502, 236.68, 131, 'HUN_Miskolc_Címer.svg', 'https://hu.wikipedia.org/wiki/Miskolc#/media/F%C3%A1jl:HUN_Miskolc_C%C3%ADmer.svg'),
('Nagykanizsa', 'Zala', 42502, 148.40, 0, 'HUN_Nagykanizsa_Címer.svg', 'https://hu.wikipedia.org/wiki/Nagykanizsa#/media/F%C3%A1jl:HUN_Nagykanizsa_C%C3%ADmer.svg'),
('Nyíregyháza', 'Szabolcs-Szatmár-Bereg', 115359, 274.54, 116, 'HUN_Nyíregyháza_Címer.svg', 'https://hu.wikipedia.org/wiki/Ny%C3%ADregyh%C3%A1za#/media/F%C3%A1jl:HUN_Ny%C3%ADregyh%C3%A1za_C%C3%ADmer.svg'),
('Pécs', 'Baranya', 140330, 162.61, 153, 'COA_Hungary_Town_Pécs.svg', 'https://hu.wikipedia.org/wiki/P%C3%A9cs#/media/F%C3%A1jl:COA_Hungary_Town_P%C3%A9cs.svg'),
('Salgótarján', 'Nógrád', 30910, 102.96, 0, 'HUN_Salgótarján_Címer.svg', 'https://hu.wikipedia.org/wiki/Salg%C3%B3tarj%C3%A1n#/media/F%C3%A1jl:HUN_Salg%C3%B3tarj%C3%A1n_C%C3%ADmer.svg'),
('Sopron', 'Győr-Moson-Sopron', 61589, 169.04, 217, 'Coa_Hungary_Town_Sopron.svg', 'https://hu.wikipedia.org/wiki/Sopron#/media/F%C3%A1jl:Coa_Hungary_Town_Sopron.svg'),
('Szeged', 'Csongrád-Csanád', 157930, 281.00, 75, 'HUN_Szeged_Címer.svg', 'https://hu.wikipedia.org/wiki/Szeged#/media/F%C3%A1jl:HUN_Szeged_C%C3%ADmer.svg'),
('Székesfehérvár', 'Fejér', 96024, 170.89, 118, 'https://hu.wikipedia.org/wiki/Sz%C3%A9kesfeh%C3%A9rv%C3%A1r#/media/F%C3%A1jl:HUN_Sz%C3%A9kesfeh%C3%A9rv%C3%A1r_C%C3%ADmer.svg', 'https://hu.wikipedia.org/wiki/Sz%C3%A9kesfeh%C3%A9rv%C3%A1r#/media/F%C3%A1jl:HUN_Sz%C3%A9kesfeh%C3%A9rv%C3%A1r_C%C3%ADmer.svg'),
('Szekszárd', 'Tolna', 29707, 96.28, 0, 'HUN_Szekszárd_Címer.svg', 'https://hu.wikipedia.org/wiki/Szeksz%C3%A1rd#/media/F%C3%A1jl:HUN_Szeksz%C3%A1rd_C%C3%ADmer.svg'),
('Szolnok', 'Jász-Nagykun-Szolnok', 66426, 187.24, 86, 'HUN_Szolnok_Címer.svg', 'https://hu.wikipedia.org/wiki/Szolnok#/media/F%C3%A1jl:HUN_Szolnok_C%C3%ADmer.svg'),
('Szombathely', 'Vas', 77757, 97.52, 216, 'HUN_Szombathely_Címer.svg', 'https://hu.wikipedia.org/wiki/Szombathely#/media/F%C3%A1jl:HUN_Szombathely_C%C3%ADmer.svg'),
('Tatabánya', 'Komárom-Esztergom', 65861, 91.42, 167, 'HUN_Tatabánya_Címer.svg', 'https://hu.wikipedia.org/wiki/Tatab%C3%A1nya#/media/F%C3%A1jl:HUN_Tatab%C3%A1nya_C%C3%ADmer.svg'),
('Veszprém', 'Veszprém', 56029, 126.90, 266, 'HUN_Veszprém_Címer.svg', 'https://hu.wikipedia.org/wiki/Veszpr%C3%A9m#/media/F%C3%A1jl:HUN_Veszpr%C3%A9m_C%C3%ADmer.svg'),
('Zalaegerszeg', 'Zala', 55152, 102.42, 166, 'HUN_Zalaegerszeg_Címer.svg', 'https://hu.wikipedia.org/wiki/Zalaegerszeg#/media/F%C3%A1jl:HUN_Zalaegerszeg_C%C3%ADmer.svg'),
('Budapest', '–', 1686222, 525.14, 105, 'Coa_Hungary_Town_Budapest_big.svg', 'https://hu.wikipedia.org/wiki/Budapest#/media/F%C3%A1jl:Coa_Hungary_Town_Budapest_big.svg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
