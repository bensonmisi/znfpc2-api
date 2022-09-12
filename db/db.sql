-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.33 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for znfpc2
CREATE DATABASE IF NOT EXISTS `znfpc2` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `znfpc2`;

-- Dumping structure for table znfpc2.administrator
CREATE TABLE IF NOT EXISTS `administrator` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surname` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `resettoken` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVE',
  `roleId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `administrator_email_key` (`email`),
  KEY `administrator_roleId_fkey` (`roleId`),
  CONSTRAINT `administrator_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.administrator: ~11 rows (approximately)
DELETE FROM `administrator`;
/*!40000 ALTER TABLE `administrator` DISABLE KEYS */;
INSERT INTO `administrator` (`id`, `name`, `surname`, `email`, `password`, `resettoken`, `status`, `roleId`, `createdAt`, `updatedAt`, `username`) VALUES
	(1, 'Bensons', 'Misi', 'benson.misi@gmail.com', '$2b$10$zOB0mB9oCWeWsDC3FKrL0OmWVqNS/KFw9NR/prJBN74Hpy1HuxmmG', NULL, 'ACTIVE', 1, '2021-10-31 11:37:00.999', '2021-11-03 16:42:38.000', 'ec1345'),
	(2, 'Donald', 'Dube', 'ddube@znfpc.org.zw', '$2b$10$Iqvt2g4kOuiph4QLqYlPBe3WnTzbCXlCF7WfkGX52fEm3qlbDO8Ci', NULL, 'ACTIVE', 1, '2021-11-18 08:40:43.677', '2021-11-18 08:40:43.677', 'user_01'),
	(3, 'Joy ', 'Reppoh', 'jreppoh@znfpc.org.zw', '$2b$10$bru9iB2AV8aUfhkZ9vZ54eY02YaAJjm5nMRwLv6iRMNj77MeS.762', NULL, 'ACTIVE', 1, '2021-11-18 08:41:28.144', '2021-11-18 08:41:28.144', 'user_02'),
	(4, 'Mandi', 'Ngoma', 'mngoma@znfpc.org.zw', '$2b$10$ulCxC.NdE.ufZkTO9y7kqOmydeArLMTcyQlnVNu1QRscK0Y8BhWLq', NULL, 'ACTIVE', 1, '2021-11-18 08:42:05.341', '2021-11-18 08:42:05.341', 'user_03'),
	(5, 'Mercy ', 'Marimirofa ', 'mmarimirofa@znfpc.org.zw', '$2b$10$ZRtwZIKb.h0v9mlXhI.u5OXzol.GOWeI5boIKtOR27URDuOfNB1kO', NULL, 'ACTIVE', 1, '2021-11-18 08:42:47.630', '2022-08-03 06:27:35.000', 'mmarimirofa'),
	(6, 'Tsitsidzashe ', 'Musvosvi', 'tmusvosvi@znfpc.org.zw', '$2b$10$GDW7gr/B47jClHFhY90FteBQVhYB9MMOFb4fpZQjgwwdxceAQsyoW', NULL, 'ACTIVE', 7, '2021-11-18 08:44:03.737', '2021-11-18 08:44:03.737', 'user_05'),
	(7, 'Fadzai ', 'Mandishona', 'fmandishona@znfpc.org.zw', '$2b$10$Bs8kNXEub6nTNSaeNbq78OT.nwFIdU5z50leG4T22ZChNgKW1jEKG', NULL, 'ACTIVE', 7, '2021-11-18 08:44:50.655', '2021-11-18 08:44:50.655', 'user_06'),
	(8, 'Fungai', 'Madembo', 'fmadembo@znfpc.org.zw', '$2b$10$3HCoXTAB.o/4.Wl8ocWgSus3Xu62yvJtZUixs1llVqdSmDltFzLHq', NULL, 'ACTIVE', 7, '2021-11-18 08:45:26.959', '2021-11-18 08:45:26.959', 'user_07'),
	(9, 'Benevolence', 'Makubalo', 'bmakubalo@znfpc.org,zw', '$2b$10$rjUdNuIuFaS28KTk4k0aB.a6Bf6uKs3wH71VIKVaNzWJJm.NSeJbe', NULL, 'ACTIVE', 14, '2021-11-18 08:46:11.603', '2021-11-18 08:46:11.603', 'user_08'),
	(10, 'Hazel ', 'Masoja ', 'hmasoja@znfpc.org.zw', '$2b$10$pGNeEUonBbEErq6Dkx60huk.wL0qFPLLa/3a3DLWuFb6NIoOfLMRK', NULL, 'ACTIVE', 14, '2021-11-18 08:46:50.660', '2021-11-18 08:46:50.660', 'user_09'),
	(11, 'Varaidzo ', 'Sosa', 'vsosa@znfpc.org.zw', '$2b$10$VnnjWueI/mUlftAKgiv2V.J2vEaFd6iodd3GcZdWXodRZsg9jNgRq', NULL, 'ACTIVE', 14, '2021-11-18 08:47:26.239', '2021-11-18 08:47:26.239', 'user_10');
/*!40000 ALTER TABLE `administrator` ENABLE KEYS */;

-- Dumping structure for table znfpc2.loginlog
CREATE TABLE IF NOT EXISTS `loginlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `administratorId` int(11) NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ipaddress` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `browser` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `loginlog_administratorId_fkey` (`administratorId`),
  CONSTRAINT `loginlog_administratorId_fkey` FOREIGN KEY (`administratorId`) REFERENCES `administrator` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.loginlog: ~5 rows (approximately)
DELETE FROM `loginlog`;
/*!40000 ALTER TABLE `loginlog` DISABLE KEYS */;
INSERT INTO `loginlog` (`id`, `administratorId`, `token`, `ipaddress`, `device`, `browser`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'c6ad1c2c-926c-4134-9805-2f9e9af4b24e', '::1', 'localhost', NULL, '2022-09-12 00:25:53.979', '2022-09-12 00:25:53.980'),
	(2, 1, 'e6ad33fd-09c3-4aac-ad10-ca9dd90fe12f', '::1', 'localhost', NULL, '2022-09-12 01:07:59.477', '2022-09-12 01:07:59.478'),
	(3, 1, '3153ab32-b4ec-4c5b-8e00-845a35bc296b', '::1', 'localhost', NULL, '2022-09-12 01:39:50.327', '2022-09-12 01:39:50.328'),
	(4, 1, '4c1c8e9c-85b8-454f-8959-65878a104748', '::1', 'localhost', NULL, '2022-09-12 02:10:55.338', '2022-09-12 02:10:55.339'),
	(5, 1, 'f504fb36-6283-4405-a305-5dd36d113d58', '::1', 'localhost', NULL, '2022-09-12 02:42:14.901', '2022-09-12 02:42:14.904');
/*!40000 ALTER TABLE `loginlog` ENABLE KEYS */;

-- Dumping structure for table znfpc2.product
CREATE TABLE IF NOT EXISTS `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_typeId_fkey` (`typeId`),
  CONSTRAINT `product_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.product: ~20 rows (approximately)
DELETE FROM `product`;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` (`id`, `typeId`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'Contraceptive', 'ACTIVE', '2021-11-14 15:09:29.114', '2021-11-14 15:09:29.114'),
	(2, 1, 'IUCD', 'ACTIVE', '2021-11-14 15:11:22.846', '2021-11-14 15:11:22.846'),
	(3, 1, ' Jadelle', 'ACTIVE', '2021-11-14 15:11:33.715', '2021-11-14 15:11:33.715'),
	(4, 1, ' Implanon', 'ACTIVE', '2021-11-14 15:11:43.965', '2021-11-14 15:11:43.965'),
	(5, 1, ' Orals', 'ACTIVE', '2021-11-14 15:11:54.043', '2021-11-14 15:11:54.043'),
	(6, 1, 'Injectable (Sayana Press  or Depo Provera)', 'ACTIVE', '2021-11-14 15:12:02.811', '2021-11-14 15:12:02.811'),
	(7, 3, 'Pap Smear', 'ACTIVE', '2021-11-14 15:13:02.531', '2021-11-14 15:13:02.531'),
	(8, 3, 'VIAC', 'ACTIVE', '2021-11-14 15:13:18.122', '2021-11-14 15:13:18.122'),
	(9, 6, 'Integrated Clinical Course', 'ACTIVE', '2021-12-14 18:21:21.894', '2021-12-14 18:21:21.894'),
	(10, 6, 'Implants (Jadelle and Implannon)', 'ACTIVE', '2021-12-14 18:21:53.246', '2021-12-14 18:21:53.246'),
	(11, 6, 'IUCD', 'ACTIVE', '2021-12-14 18:22:00.270', '2021-12-14 18:22:00.270'),
	(12, 13, 'Management', 'ACTIVE', '2021-12-14 18:23:17.344', '2021-12-14 18:23:17.344'),
	(13, 13, 'Treatment', 'ACTIVE', '2021-12-14 18:23:25.230', '2021-12-14 18:23:25.230'),
	(14, 2, 'Testing', 'ACTIVE', '2021-12-14 18:23:46.066', '2021-12-14 18:23:46.066'),
	(15, 2, 'Prep', 'ACTIVE', '2021-12-14 18:23:52.919', '2021-12-14 18:23:52.919'),
	(16, 2, 'HIVST', 'ACTIVE', '2021-12-14 18:24:04.977', '2021-12-14 18:24:04.977'),
	(17, 2, 'ART Services', 'ACTIVE', '2021-12-14 18:24:15.827', '2021-12-14 18:24:15.827'),
	(18, 16, 'Cancer screening', 'ACTIVE', '2022-02-14 06:51:21.064', '2022-02-14 06:51:21.064'),
	(19, 16, 'FP methods', 'ACTIVE', '2022-02-14 06:51:33.522', '2022-02-14 06:51:33.522'),
	(20, 16, 'ASRH', 'ACTIVE', '2022-02-14 06:51:40.621', '2022-02-14 06:51:40.621');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;

-- Dumping structure for table znfpc2.report
CREATE TABLE IF NOT EXISTS `report` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `maritalstatus` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phonenumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `province` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `district` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serviceId` int(11) NOT NULL,
  `typeId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  `administratorId` int(11) NOT NULL,
  `frequeny` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `issue` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reference` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `knowledge` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mode` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `starttim` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `endttime` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `calldate` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `update_at` datetime(3) NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `report_administratorId_fkey` (`administratorId`),
  KEY `report_serviceId_fkey` (`serviceId`),
  KEY `report_typeId_fkey` (`typeId`),
  KEY `report_productId_fkey` (`productId`),
  CONSTRAINT `report_administratorId_fkey` FOREIGN KEY (`administratorId`) REFERENCES `administrator` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `report_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `report_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `report_typeId_fkey` FOREIGN KEY (`typeId`) REFERENCES `type` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.report: ~23 rows (approximately)
DELETE FROM `report`;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` (`id`, `name`, `gender`, `maritalstatus`, `phonenumber`, `email`, `province`, `district`, `city`, `location`, `serviceId`, `typeId`, `productId`, `administratorId`, `frequeny`, `issue`, `age`, `reference`, `knowledge`, `mode`, `starttim`, `endttime`, `calldate`, `created_at`, `update_at`, `status`) VALUES
	(5, 'Ratidzo', 'F', 'SINGLE', '0712519907', '', 'Manicaland', 'Buhera', 'Bangure', 'Bangure', 1, 1, 5, 8, '', '<p>spoke about other methods like IUCD</p>', '26', 'friend', '', 'CALL', '11:56', '12:10', '2022-01-17', '2022-01-24 07:33:46.918', '2022-01-24 07:33:46.918', 'ACTIVE'),
	(6, 'Nomagugu Mkwebu', 'F', 'SINGLE', '0718069566', '', 'Harare', 'Harare', 'Harare', 'Msasa Park', 1, 1, 5, 8, '', '', '26', 'friend', '', 'CALL', '09:00', '10:10', '2022-01-17', '2022-01-24 07:38:11.199', '2022-01-24 07:38:11.199', 'ACTIVE'),
	(7, 'susan maponga', 'F', 'SINGLE', '0716895973', '', 'Harare', 'Harare', 'westley', 'Westley', 1, 1, 2, 8, '', '<p>Needed opening hour information and price for IUCD removal</p>', '33', 'facebook', '', 'CALL', '15:17', '15:20', '2022-01-31', '2022-01-31 13:22:11.215', '2022-01-31 13:22:11.215', 'ACTIVE'),
	(8, 'Max Mandeya', 'M', 'SINGLE', '071363062', '', 'Harare', 'Harare', 'Warren Park D', 'Warren Park D', 1, 2, 16, 8, '', '<p>Asked about self testing kits </p>', '30', 'whatsapp', '', 'CALL', '13:03', '13:06', '2022-02-07', '2022-02-07 11:11:07.312', '2022-02-07 11:11:07.312', 'ACTIVE'),
	(9, 'Ndinashe  dikani', 'F', 'MARRIED', '07167725', '', 'Manicaland', 'Makoni', 'nyabadza', 'nyabadza', 1, 1, 1, 8, '', '<p>General information about family planning and wanted to check if the line is working </p><p><br></p><p>was not able to get the number she hung up before  I could get the number</p>', '35', 'facebook', '', 'CALL', '10:57', '11:04', '2022-02-08', '2022-02-08 09:11:43.214', '2022-02-08 09:11:43.214', 'ACTIVE'),
	(10, 'Estella Chiguvangika', 'F', 'MARRIED', '0786737887', 'estellechumbu7@gmail.com', 'Harare', 'Harare', 'Borrowdale', 'Borrowdale', 1, 1, 2, 10, '', '<p>The client wanted to come for permanent method and letter on opted to come for IUCD</p>', '44', 'Facebook', '', 'CALL', '03:18', '03:25', '2022-02-23', '2022-02-23 13:39:35.677', '2022-02-23 13:39:35.677', 'ACTIVE'),
	(11, 'NYASHA JONES', 'F', 'MARRIED', '0719780498', 'nyashakarimanhai@05.og.com', 'Harare', 'Harare', 'Avenues', 'Avenues', 1, 1, 4, 10, '', '<p>Client bleeding on implanon and  wanted to visit Fife Avenue clinic checking if the clinic is still open at this time</p>', '33', 'Facebook', '', 'CALL', '03:57', '04:10', '2022-03-07', '2022-03-07 14:13:43.944', '2022-03-07 14:13:43.944', 'ACTIVE'),
	(12, 'Susan Maponga', 'F', 'MARRIED', '0779745548', 'modellin.stima@gmail.com', 'Harare', 'Harare', 'Harare', 'Westlie', 1, 1, 2, 10, '', '<p>Client spoting on IUCD x 3months started to use both IUCD and control. Advised to visit Spilhaus clinic</p>', '33', 'Watsapp status', '', 'CALL', '13:53', '02:04', '2022-03-10', '2022-03-10 12:21:01.161', '2022-03-10 12:21:01.161', 'ACTIVE'),
	(13, 'Chipo Machipisa', 'F', 'MARRIED', '0774627848', 'N/A', 'Harare', 'Harare', 'Harare', 'Aspindale', 1, 1, 4, 10, '', '', '35', 'watsapp', '', 'CALL', '11:58', '12:06', '2022-04-06', '2022-04-06 10:09:31.278', '2022-04-06 10:09:31.278', 'ACTIVE'),
	(14, 'EUNICE CHIKWEZA', 'F', 'MARRIED', '0773983487', 'eunicedadirai@gmail.com', 'Harare', 'Harare', 'Harare', 'Kuwadzana', 1, 1, 4, 10, '', '<p>price for implanon in bulk</p>', '43', 'watsapp', '', 'CALL', '13:15', '13:21', '2022-04-06', '2022-04-06 11:26:01.246', '2022-04-06 11:26:01.246', 'ACTIVE'),
	(15, 'Tendai', 'F', 'MARRIED', '0776288401', '', 'Harare', 'Harare', 'southerton ', 'southerton', 1, 1, 2, 8, '', '<p>IUCD removal and insertion</p>', '28', 'spilhaus posters', '', 'CALL', '09:30', '09:37', '2022-04-07', '2022-04-07 07:48:15.943', '2022-04-07 07:48:15.943', 'ACTIVE'),
	(16, 'travor tom', 'F', 'MARRIED', '0772913175', 'ttrover tom2gmail', 'Harare', 'Harare', 'Sunngdale', 'Sunngdale', 6, 16, 19, 10, '', '', '37', 'facebook', '', 'CALL', '13:26', '13:30', '2022-04-11', '2022-04-11 11:36:30.224', '2022-04-11 11:36:30.224', 'ACTIVE'),
	(17, 'Mai Muna', 'F', 'MARRIED', 'NOT GIVEN', 'NOT GIVEN', 'Manicaland', 'Mutare', 'NOT GIVEN', 'NOT GIVEN', 1, 1, 3, 10, '', '<p>THE CLIENT REFUSED TO GIVE USE PERSONAL INFORMATION</p>', '35', 'WATSAPP STUTUS', '', 'CALL', '13:36', '13:41', '2022-04-11', '2022-04-11 11:48:02.811', '2022-04-11 11:48:02.811', 'ACTIVE'),
	(18, 'Tariro Chifambi', 'F', 'MARRIED', '0784262452', 'chifambitariro@gmail.com', 'Bulawayo', 'Bulawayo', 'Caldrypark', 'Caldrypark', 1, 1, 5, 10, '', '<p>bleeding on secure</p>', '33', 'watsapp group', '', 'CALL', '15:00', '15:08', '2022-04-11', '2022-04-11 13:20:26.461', '2022-04-11 13:20:26.461', 'ACTIVE'),
	(19, 'Varelery Moyo', 'F', 'MARRIED', '0771577821', 'not given', 'Bulawayo', 'Bulawayo', 'Bulawayo', 'Nkulumani', 1, 1, 4, 10, '', '', '36', 'someone watsapp status', '', 'CALL', '11:06', '11:10', '2022-04-13', '2022-04-13 09:22:15.607', '2022-04-13 09:22:15.607', 'ACTIVE'),
	(20, 'Rose Mutapa', 'F', 'MARRIED', '0712924668', 'rrisai2@gmail.comk', 'Bulawayo', 'Bulawayo', 'Bulawayo town', 'Town', 1, 1, 2, 10, '', '<p>Was refered to Bulawayo Lister for IUCD insertion</p>', '35', 'watsapp group', '', 'CALL', '13:29', '13:45', '2022-04-19', '2022-04-19 11:51:25.529', '2022-04-19 11:51:25.529', 'ACTIVE'),
	(21, 'Priscilla Shumba', 'F', 'MARRIED', '0772203038', '', 'Harare', 'Harare', 'Damafalls', 'Damafalls', 1, 3, 7, 8, '', '<p>also want to have IUCD insertion on the day</p>', '32', 'facebook', '', 'CALL', '11:57', '12:02', '2022-04-25', '2022-04-25 10:04:21.500', '2022-04-25 10:04:21.500', 'ACTIVE'),
	(22, 'Tinashe Mcnolen', 'F', 'SINGLE', '0775804801', '', 'Mashonaland North', '', 'bulawayo', 'bulawayo', 1, 13, 12, 8, '', '<p>Referred to Lister House</p>', '25', 'twitter', '', 'CALL', '10:51', '10:55', '2022-04-27', '2022-04-27 08:56:17.843', '2022-04-27 08:56:17.843', 'ACTIVE'),
	(23, 'Charity', 'F', 'SINGLE', 'not given', 'Not given', 'Harare', 'Harare', 'Harare', 'Harare CBD', 1, 1, 1, 10, '', '', '18', 'watsapp group', '', 'CALL', '13:46', '13:51', '2022-04-28', '2022-04-28 12:17:21.438', '2022-04-28 12:17:21.438', 'ACTIVE'),
	(24, 'sandra Ncube', 'F', 'MARRIED', '0772440956', '', 'Harare', 'Harare', 'harare', 'craignmbone', 1, 3, 7, 8, '', '<p>she wanted to have <strong> </strong>hysterectomy done so gave her the znfpc landline number. was not able to get her age.<strong> </strong></p>', '46', 'facebook', '', 'CALL', '09:20', '09:23', '2022-05-12', '2022-05-12 07:37:25.662', '2022-05-12 07:37:25.662', 'ACTIVE'),
	(25, 'caronline murawo', 'F', 'MARRIED', '0773947872', '', 'Harare', 'Harare', 'harare', 'town', 1, 1, 3, 8, '', '<p>age not given...however, she has bleeding troubles because of jadelle</p>', '32', 'facebook', '', 'CALL', '10:15', '10:18', '2022-05-12', '2022-05-12 08:19:43.696', '2022-05-12 08:19:43.696', 'ACTIVE'),
	(27, 'Benson Misi', 'M', 'MARRIED', '+263775474661', 'benson.misi@gmail.com', 'Matabeleland South', 'Beitbridge', 'Harare', 'Southlands', 1, 1, 1, 1, NULL, '<p>sdfdsfdsfd sdfdsfdsf sfsdf</p>', '35', 'Google', 'Google', 'CALL', '11:55', '10:51', '2022-09-12', '2022-09-12 01:42:13.221', '2022-09-12 01:42:13.222', NULL),
	(28, 'Vimbai Matenga', 'F', 'MARRIED', '+26377547466661', 'vimbai.matenga@gmail.com', 'Harare', 'Harare', 'Harare', 'Southlands', 1, 1, 1, 1, 'Google', '<p>twet werwerjhwer ewrwer wrwerwerwe we</p>', '31', 'Google', 'Google', 'WHATSAPP', '00:00', '01:00', '2022-09-12', '2022-09-12 01:51:37.891', '2022-09-12 01:51:37.892', NULL);
/*!40000 ALTER TABLE `report` ENABLE KEYS */;

-- Dumping structure for table znfpc2.role
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.role: ~3 rows (approximately)
DELETE FROM `role`;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'Administrator', 'ACTIVE', '2021-10-31 00:23:54.303', '2022-02-14 06:46:34.000'),
	(7, 'Managers', 'ACTIVE', '2021-10-31 00:27:23.910', '2021-11-14 04:53:28.000'),
	(14, 'Agents', 'ACTIVE', '2021-11-14 04:53:50.640', '2021-11-14 04:53:50.640');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- Dumping structure for table znfpc2.service
CREATE TABLE IF NOT EXISTS `service` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.service: ~6 rows (approximately)
DELETE FROM `service`;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` (`id`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 'Service Delivery', 'ACTIVE', '2021-11-14 14:21:15.055', '2021-11-14 14:26:59.000'),
	(2, 'ASRH ', 'ACTIVE', '2021-11-14 15:15:33.740', '2021-11-14 15:15:33.740'),
	(3, 'Training', 'ACTIVE', '2021-11-14 15:16:02.232', '2021-11-14 15:16:02.232'),
	(4, 'Catering and Accomodation', 'ACTIVE', '2021-11-14 15:17:03.097', '2021-11-14 15:17:03.097'),
	(5, 'Evaluation and Research', 'ACTIVE', '2021-12-14 18:18:38.426', '2021-12-14 18:18:38.426'),
	(6, 'Information or enquiry', 'ACTIVE', '2022-02-14 06:49:26.839', '2022-02-14 06:49:26.839');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systemaudit
CREATE TABLE IF NOT EXISTS `systemaudit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `loginlogId` int(11) NOT NULL,
  `subject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `old` text COLLATE utf8mb4_unicode_ci,
  `new` text COLLATE utf8mb4_unicode_ci,
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `systemaudit_loginlogId_fkey` (`loginlogId`),
  CONSTRAINT `systemaudit_loginlogId_fkey` FOREIGN KEY (`loginlogId`) REFERENCES `loginlog` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systemaudit: ~2 rows (approximately)
DELETE FROM `systemaudit`;
/*!40000 ALTER TABLE `systemaudit` DISABLE KEYS */;
INSERT INTO `systemaudit` (`id`, `loginlogId`, `subject`, `old`, `new`, `action`, `createdAt`, `updatedAt`) VALUES
	(1, 3, 'report', '', '{"id":27,"name":"Benson Misi","gender":"M","maritalstatus":"MARRIED","phonenumber":"+263775474661","email":"benson.misi@gmail.com","province":"Matabeleland South","district":"Beitbridge","city":"Harare","location":"Southlands","serviceId":1,"typeId":1,"productId":1,"administratorId":1,"frequeny":null,"issue":"<p>sdfdsfdsfd sdfdsfdsf sfsdf</p>","age":"35","reference":"Google","knowledge":"Google","mode":"CALL","starttim":"11:55","endttime":"10:51","calldate":"2022-09-12","created_at":"2022-09-12T01:42:13.221Z","update_at":"2022-09-12T01:42:13.222Z","status":null}', 'CREATE', '2022-09-12 01:42:13.233', '2022-09-12 01:42:13.233'),
	(2, 3, 'report', '', '{"id":28,"name":"Vimbai Matenga","gender":"F","maritalstatus":"MARRIED","phonenumber":"+26377547466661","email":"vimbai.matenga@gmail.com","province":"Harare","district":"Harare","city":"Harare","location":"Southlands","serviceId":1,"typeId":1,"productId":1,"administratorId":1,"frequeny":"Google","issue":"<p>twet werwerjhwer ewrwer wrwerwerwe we</p>","age":"31","reference":"Google","knowledge":"Google","mode":"WHATSAPP","starttim":"00:00","endttime":"01:00","calldate":"2022-09-12","created_at":"2022-09-12T01:51:37.891Z","update_at":"2022-09-12T01:51:37.892Z","status":null}', 'CREATE', '2022-09-12 01:51:37.925', '2022-09-12 01:51:37.925');
/*!40000 ALTER TABLE `systemaudit` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systemmodule
CREATE TABLE IF NOT EXISTS `systemmodule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systemmodule: ~3 rows (approximately)
DELETE FROM `systemmodule`;
/*!40000 ALTER TABLE `systemmodule` DISABLE KEYS */;
INSERT INTO `systemmodule` (`id`, `name`, `icon`, `description`, `createdAt`, `updatedAt`) VALUES
	(1, 'System Settings', 'mdi-account-cog', 'test', '2021-10-31 14:37:26.960', '2021-10-31 14:37:26.960'),
	(6, 'Service Settings', 'mdi-cogs', 'This is a service serttings module', '2021-11-14 14:05:01.369', '2021-11-14 14:05:01.369'),
	(7, 'Reports', 'mdi-chart-bar', 'This Module Shows Reports', '2021-11-14 22:16:48.018', '2021-11-14 22:16:48.018');
/*!40000 ALTER TABLE `systemmodule` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systemmodulesonroles
CREATE TABLE IF NOT EXISTS `systemmodulesonroles` (
  `roleId` int(11) NOT NULL,
  `systemmoduleId` int(11) NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `assignedBy` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`systemmoduleId`),
  KEY `systemmodulesonroles_systemmoduleId_fkey` (`systemmoduleId`),
  CONSTRAINT `systemmodulesonroles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `systemmodulesonroles_systemmoduleId_fkey` FOREIGN KEY (`systemmoduleId`) REFERENCES `systemmodule` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systemmodulesonroles: ~4 rows (approximately)
DELETE FROM `systemmodulesonroles`;
/*!40000 ALTER TABLE `systemmodulesonroles` DISABLE KEYS */;
INSERT INTO `systemmodulesonroles` (`roleId`, `systemmoduleId`, `assignedAt`, `assignedBy`) VALUES
	(1, 1, '2022-09-10 23:15:33.683', 0),
	(1, 6, '2022-09-10 23:15:33.683', 0),
	(1, 7, '2022-09-10 23:15:33.683', 0),
	(7, 7, '2022-09-10 23:15:33.683', 0);
/*!40000 ALTER TABLE `systemmodulesonroles` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systempermission
CREATE TABLE IF NOT EXISTS `systempermission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemsubmoduleId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `systempermission_name_key` (`name`),
  KEY `systempermission_systemsubmoduleId_fkey` (`systemsubmoduleId`),
  CONSTRAINT `systempermission_systemsubmoduleId_fkey` FOREIGN KEY (`systemsubmoduleId`) REFERENCES `systemsubmodule` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systempermission: ~56 rows (approximately)
DELETE FROM `systempermission`;
/*!40000 ALTER TABLE `systempermission` DISABLE KEYS */;
INSERT INTO `systempermission` (`id`, `systemsubmoduleId`, `name`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'CREATE_USER', '2021-11-01 14:24:43.338', '2021-11-01 14:24:43.338'),
	(3, 1, 'VIEW_USER', '2021-11-01 14:24:57.694', '2021-11-01 14:24:57.694'),
	(4, 1, 'VIEW_USERS', '2021-11-01 14:25:01.071', '2021-11-01 14:25:01.071'),
	(5, 1, 'UPDATE_USER', '2021-11-01 14:25:12.052', '2021-11-01 14:25:12.052'),
	(6, 1, 'DELETE_USER', '2021-11-01 14:25:21.004', '2021-11-01 14:25:21.004'),
	(7, 4, 'CREATE_ROLE', '2021-11-03 23:55:01.265', '2021-11-03 23:55:01.265'),
	(8, 4, 'GET_ROLES', '2021-11-03 23:55:18.392', '2021-11-03 23:55:18.392'),
	(9, 4, 'GET_ROLE', '2021-11-03 23:55:51.568', '2021-11-03 23:55:51.568'),
	(10, 4, 'UPDATE_ROLE', '2021-11-03 23:56:07.544', '2021-11-03 23:56:07.544'),
	(11, 4, 'DELETE_ROLE', '2021-11-03 23:56:27.329', '2021-11-03 23:56:27.329'),
	(13, 6, 'CREATE_SYSTEMMODULE', '2021-11-05 19:24:58.270', '2021-11-05 19:24:58.270'),
	(14, 6, 'GET_SYSTEMMODULES', '2021-11-05 19:25:22.743', '2021-11-05 19:25:22.743'),
	(15, 6, 'GET_SYSTEMMODULE', '2021-11-05 19:26:24.147', '2021-11-05 19:26:24.147'),
	(16, 6, 'UPDATE_SYSTEMMODULE', '2021-11-05 19:26:37.057', '2021-11-05 19:26:37.057'),
	(17, 6, 'DELETE_SYSTEMMODULE', '2021-11-05 19:26:48.254', '2021-11-05 19:26:48.254'),
	(18, 6, 'GET_ASSIGNED_SYSTEMMODULES', '2021-11-05 19:27:03.818', '2021-11-05 19:27:03.818'),
	(19, 8, 'CREATE_SUPPLIERTYPE', '2021-11-05 23:10:42.988', '2021-11-05 23:10:42.988'),
	(20, 8, 'GET_SUPPLIERTYPES', '2021-11-05 23:11:01.034', '2021-11-05 23:11:01.034'),
	(21, 8, 'UPDATE_SUPPLIERTYPE', '2021-11-05 23:11:30.524', '2021-11-05 23:11:30.524'),
	(22, 8, 'DELETE_SUPPLIERTYPE', '2021-11-05 23:11:49.083', '2021-11-05 23:11:49.083'),
	(23, 9, 'CREATE_SECTION', '2021-11-06 12:41:43.266', '2021-11-06 12:41:43.266'),
	(24, 9, 'GET_SECTION', '2021-11-06 12:41:58.654', '2021-11-06 12:41:58.654'),
	(25, 9, 'GET_SECTIONS', '2021-11-06 12:42:11.745', '2021-11-06 12:42:11.745'),
	(26, 9, 'UPDATE_SECTION', '2021-11-06 12:42:30.056', '2021-11-06 12:42:30.056'),
	(27, 9, 'DELETE_SECTION', '2021-11-06 12:42:58.604', '2021-11-06 12:42:58.604'),
	(28, 10, 'CREATE_CATEGORY', '2021-11-06 13:05:32.029', '2021-11-06 13:05:32.029'),
	(29, 10, 'GET_CATEGORIES', '2021-11-06 13:08:47.016', '2021-11-06 13:08:47.016'),
	(30, 10, 'GET_CATEGORY', '2021-11-06 13:09:05.097', '2021-11-06 13:09:05.097'),
	(31, 10, 'UPDATE_CATEGORY', '2021-11-06 13:09:30.922', '2021-11-06 13:09:30.922'),
	(32, 10, 'DELETE_CATEGORY', '2021-11-06 13:09:47.450', '2021-11-06 13:09:47.450'),
	(33, 8, 'CREATE_DOCUMENT', '2021-11-06 21:50:56.853', '2021-11-06 21:50:56.853'),
	(34, 8, 'GET_DOCUMENTS', '2021-11-06 21:51:27.872', '2021-11-06 21:51:27.872'),
	(35, 8, 'GET_DOCUMENT', '2021-11-06 21:51:48.520', '2021-11-06 21:51:48.520'),
	(36, 8, 'UPDATE_DOCUMENT', '2021-11-06 21:52:05.879', '2021-11-06 21:52:05.879'),
	(37, 8, 'DELETE_DOCUMENT', '2021-11-06 21:52:20.946', '2021-11-06 21:52:20.946'),
	(38, 11, 'CREATE_PERIOD', '2021-11-07 09:47:37.491', '2021-11-07 09:47:37.491'),
	(39, 11, 'GET_PERIODS', '2021-11-07 09:48:40.408', '2021-11-07 09:48:40.408'),
	(40, 11, 'GET_PERIOD', '2021-11-07 09:49:03.205', '2021-11-07 09:49:03.205'),
	(41, 11, 'UPDATE_PERIOD', '2021-11-07 09:49:22.380', '2021-11-07 09:49:22.380'),
	(61, 19, 'CREATE_SERVICE', '2021-11-14 14:07:04.700', '2021-11-14 14:07:04.700'),
	(62, 19, 'GET_SERVICES', '2021-11-14 14:07:15.383', '2021-11-14 14:07:15.383'),
	(63, 19, 'GET_SERVICE', '2021-11-14 14:07:27.422', '2021-11-14 14:07:27.422'),
	(64, 19, 'UPDATE_SERVICE', '2021-11-14 14:07:38.574', '2021-11-14 14:07:38.574'),
	(65, 19, 'DELETE_SERVICE', '2021-11-14 14:07:48.876', '2021-11-14 14:07:48.876'),
	(66, 19, 'CREATE_SERVICETYPE', '2021-11-14 14:09:26.352', '2021-11-14 14:09:26.352'),
	(67, 19, 'GET_SERVICETYPES', '2021-11-14 14:09:50.349', '2021-11-14 14:09:50.349'),
	(68, 19, 'GET_SERVICETYPE', '2021-11-14 14:10:02.900', '2021-11-14 14:10:02.900'),
	(69, 19, 'UPDATE_SERVICETYPE', '2021-11-14 14:10:11.333', '2021-11-14 14:10:11.333'),
	(70, 19, 'DELETE_SERVICETYPE', '2021-11-14 14:10:21.227', '2021-11-14 14:10:21.227'),
	(71, 19, 'CREATE_PRODUCT', '2021-11-14 14:10:40.988', '2021-11-14 14:10:40.988'),
	(72, 19, 'GET_PRODUCTS', '2021-11-14 14:10:50.609', '2021-11-14 14:10:50.609'),
	(73, 19, 'GET_PRODUCT', '2021-11-14 14:10:59.899', '2021-11-14 14:10:59.899'),
	(74, 19, 'UPDATE_PRODUCT', '2021-11-14 14:11:10.349', '2021-11-14 14:11:10.349'),
	(75, 19, 'DELETE_PRODUCT', '2021-11-14 14:11:19.580', '2021-11-14 14:11:19.580'),
	(76, 20, 'VIEW_REPORT_BY_AGENT', '2021-11-14 22:17:47.509', '2021-11-14 22:19:04.000'),
	(77, 21, 'VIEW_REPORT_BY_SERVICE', '2021-11-14 22:18:53.156', '2021-11-14 22:18:53.156');
/*!40000 ALTER TABLE `systempermission` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systempermissionsonroles
CREATE TABLE IF NOT EXISTS `systempermissionsonroles` (
  `roleId` int(11) NOT NULL,
  `systempermissionId` int(11) NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `assignedBy` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`systempermissionId`),
  KEY `systempermissionsonroles_systempermissionId_fkey` (`systempermissionId`),
  CONSTRAINT `systempermissionsonroles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `systempermissionsonroles_systempermissionId_fkey` FOREIGN KEY (`systempermissionId`) REFERENCES `systempermission` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systempermissionsonroles: ~55 rows (approximately)
DELETE FROM `systempermissionsonroles`;
/*!40000 ALTER TABLE `systempermissionsonroles` DISABLE KEYS */;
INSERT INTO `systempermissionsonroles` (`roleId`, `systempermissionId`, `assignedAt`, `assignedBy`) VALUES
	(1, 1, '2022-09-10 23:18:51.939', 0),
	(1, 3, '2022-09-10 23:18:51.939', 0),
	(1, 4, '2022-09-10 23:18:51.939', 0),
	(1, 5, '2022-09-10 23:18:51.939', 0),
	(1, 6, '2022-09-10 23:18:51.939', 0),
	(1, 7, '2022-09-10 23:18:51.939', 0),
	(1, 8, '2022-09-10 23:18:51.939', 0),
	(1, 9, '2022-09-10 23:18:51.939', 0),
	(1, 10, '2022-09-10 23:18:51.939', 0),
	(1, 11, '2022-09-10 23:18:51.939', 0),
	(1, 13, '2022-09-10 23:18:51.939', 0),
	(1, 14, '2022-09-10 23:18:51.939', 0),
	(1, 15, '2022-09-10 23:18:51.939', 0),
	(1, 16, '2022-09-10 23:18:51.939', 0),
	(1, 17, '2022-09-10 23:18:51.939', 0),
	(1, 18, '2022-09-10 23:18:51.939', 0),
	(1, 19, '2022-09-10 23:18:51.939', 0),
	(1, 20, '2022-09-10 23:18:51.939', 0),
	(1, 21, '2022-09-10 23:18:51.939', 0),
	(1, 22, '2022-09-10 23:18:51.939', 0),
	(1, 23, '2022-09-10 23:18:51.939', 0),
	(1, 24, '2022-09-10 23:18:51.939', 0),
	(1, 25, '2022-09-10 23:18:51.939', 0),
	(1, 26, '2022-09-10 23:18:51.939', 0),
	(1, 27, '2022-09-10 23:18:51.939', 0),
	(1, 28, '2022-09-10 23:18:51.939', 0),
	(1, 29, '2022-09-10 23:18:51.939', 0),
	(1, 30, '2022-09-10 23:18:51.939', 0),
	(1, 31, '2022-09-10 23:18:51.939', 0),
	(1, 32, '2022-09-10 23:18:51.939', 0),
	(1, 33, '2022-09-10 23:18:51.939', 0),
	(1, 34, '2022-09-10 23:18:51.939', 0),
	(1, 35, '2022-09-10 23:18:51.939', 0),
	(1, 36, '2022-09-10 23:18:51.939', 0),
	(1, 37, '2022-09-10 23:18:51.939', 0),
	(1, 38, '2022-09-10 23:18:51.939', 0),
	(1, 39, '2022-09-10 23:18:51.939', 0),
	(1, 40, '2022-09-10 23:18:51.939', 0),
	(1, 41, '2022-09-10 23:18:51.939', 0),
	(1, 61, '2022-09-10 23:18:51.939', 0),
	(1, 62, '2022-09-10 23:18:51.939', 0),
	(1, 63, '2022-09-10 23:18:51.939', 0),
	(1, 64, '2022-09-10 23:18:51.939', 0),
	(1, 65, '2022-09-10 23:18:51.939', 0),
	(1, 66, '2022-09-10 23:18:51.939', 0),
	(1, 67, '2022-09-10 23:18:51.939', 0),
	(1, 68, '2022-09-10 23:18:51.939', 0),
	(1, 69, '2022-09-10 23:18:51.939', 0),
	(1, 70, '2022-09-10 23:18:51.939', 0),
	(1, 71, '2022-09-10 23:18:51.939', 0),
	(1, 72, '2022-09-10 23:18:51.939', 0),
	(1, 73, '2022-09-10 23:18:51.939', 0),
	(1, 74, '2022-09-10 23:18:51.939', 0),
	(1, 75, '2022-09-10 23:18:51.939', 0),
	(1, 76, '2022-09-10 23:18:51.939', 0);
/*!40000 ALTER TABLE `systempermissionsonroles` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systemsubmodule
CREATE TABLE IF NOT EXISTS `systemsubmodule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `systemmoduleId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `systemsubmodule_url_key` (`url`),
  KEY `systemsubmodule_systemmoduleId_fkey` (`systemmoduleId`),
  CONSTRAINT `systemsubmodule_systemmoduleId_fkey` FOREIGN KEY (`systemmoduleId`) REFERENCES `systemmodule` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systemsubmodule: ~11 rows (approximately)
DELETE FROM `systemsubmodule`;
/*!40000 ALTER TABLE `systemsubmodule` DISABLE KEYS */;
INSERT INTO `systemsubmodule` (`id`, `systemmoduleId`, `name`, `icon`, `url`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'User Management', 'mdi-account-cog', 'Administrators', '2021-10-31 22:36:18.868', '2021-10-31 22:36:18.868'),
	(4, 1, 'User Roles', 'mdi-account-key', 'Roles', '2021-10-31 22:39:42.060', '2021-11-03 17:04:30.176'),
	(6, 1, 'System Modules', 'mdi-link-box', 'systemmodules', '2021-11-03 16:58:44.778', '2021-11-03 17:04:30.221'),
	(8, 2, 'Supplier Types', 'mdi-account-network', 'Suppliertype', '2021-11-05 23:10:09.026', '2021-11-05 23:10:09.026'),
	(9, 2, 'Supplier Sections', 'mdi-set-none', 'sections', '2021-11-06 12:41:30.564', '2021-11-06 12:41:30.564'),
	(10, 2, 'Supplier Categories', 'mdi-shape-square-plus', 'category', '2021-11-06 13:05:17.249', '2021-11-06 13:05:17.249'),
	(11, 2, 'Registration Periods', 'mdi-shape-circle-plus', 'registrationperiods', '2021-11-07 09:47:07.376', '2021-11-07 09:47:07.376'),
	(19, 6, 'Services', 'mdi-cogs', 'service', '2021-11-14 14:06:29.415', '2021-11-14 14:06:29.415'),
	(20, 7, 'By Agent', 'mdi-account', 'report-by-agent', '2021-11-14 22:17:32.027', '2021-11-14 22:22:21.000'),
	(21, 7, 'By Service', 'mdi-file-multiple-outline', 'report-by-service', '2021-11-14 22:18:27.117', '2021-11-14 22:22:43.000'),
	(22, 7, 'Overall Report', 'mdi-chart-box', 'report', '2021-11-15 23:00:29.262', '2021-11-15 23:00:29.262');
/*!40000 ALTER TABLE `systemsubmodule` ENABLE KEYS */;

-- Dumping structure for table znfpc2.systemsubmodulesonroles
CREATE TABLE IF NOT EXISTS `systemsubmodulesonroles` (
  `roleId` int(11) NOT NULL,
  `systemsubmoduleId` int(11) NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `assignedBy` int(11) NOT NULL,
  PRIMARY KEY (`roleId`,`systemsubmoduleId`),
  KEY `systemsubmodulesonroles_systemsubmoduleId_fkey` (`systemsubmoduleId`),
  CONSTRAINT `systemsubmodulesonroles_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `systemsubmodulesonroles_systemsubmoduleId_fkey` FOREIGN KEY (`systemsubmoduleId`) REFERENCES `systemsubmodule` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.systemsubmodulesonroles: ~10 rows (approximately)
DELETE FROM `systemsubmodulesonroles`;
/*!40000 ALTER TABLE `systemsubmodulesonroles` DISABLE KEYS */;
INSERT INTO `systemsubmodulesonroles` (`roleId`, `systemsubmoduleId`, `assignedAt`, `assignedBy`) VALUES
	(1, 1, '2022-09-10 23:17:05.482', 0),
	(1, 4, '2022-09-10 23:17:05.482', 0),
	(1, 6, '2022-09-10 23:17:05.482', 0),
	(1, 8, '2022-09-10 23:17:05.482', 0),
	(1, 9, '2022-09-10 23:17:05.482', 0),
	(1, 10, '2022-09-10 23:17:05.482', 0),
	(1, 19, '2022-09-10 23:17:05.482', 0),
	(1, 22, '2022-09-10 23:17:05.482', 0),
	(7, 1, '2022-09-10 23:17:05.482', 0),
	(7, 22, '2022-09-10 23:17:05.482', 0);
/*!40000 ALTER TABLE `systemsubmodulesonroles` ENABLE KEYS */;

-- Dumping structure for table znfpc2.type
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serviceId` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_serviceId_fkey` (`serviceId`),
  CONSTRAINT `type_serviceId_fkey` FOREIGN KEY (`serviceId`) REFERENCES `service` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2.type: ~23 rows (approximately)
DELETE FROM `type`;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`id`, `serviceId`, `name`, `status`, `createdAt`, `updatedAt`) VALUES
	(1, 1, 'Family Planning', 'ACTIVE', '2021-11-14 14:29:15.612', '2021-11-14 14:29:15.612'),
	(2, 1, 'HTS', 'ACTIVE', '2021-11-14 14:34:27.987', '2021-11-14 14:34:27.987'),
	(3, 1, 'Cancer Screening', 'ACTIVE', '2021-11-14 14:34:52.935', '2021-11-14 14:34:52.935'),
	(4, 1, 'VMMC', 'ACTIVE', '2021-11-14 14:35:42.142', '2021-11-14 14:35:42.142'),
	(5, 1, 'Fertility Services', 'ACTIVE', '2021-11-14 14:35:56.857', '2021-11-14 14:35:56.857'),
	(6, 3, 'FP Course', 'ACTIVE', '2021-11-14 15:16:17.551', '2021-11-14 15:16:17.551'),
	(7, 3, 'ASRH Course', 'ACTIVE', '2021-11-14 15:16:27.206', '2021-12-14 18:22:29.000'),
	(8, 5, 'Service delivery', 'ACTIVE', '2021-12-14 18:19:18.187', '2021-12-14 18:19:18.187'),
	(9, 5, 'ASRH', 'ACTIVE', '2021-12-14 18:19:26.513', '2021-12-14 18:19:26.513'),
	(10, 5, 'Catering and Accomodation', 'ACTIVE', '2021-12-14 18:19:51.534', '2021-12-14 18:19:51.534'),
	(11, 5, 'Marketing and Communication (Audio Visual)', 'ACTIVE', '2021-12-14 18:20:15.280', '2021-12-14 18:20:15.280'),
	(12, 5, 'Logistics (Supply Chain)', 'ACTIVE', '2021-12-14 18:20:37.632', '2021-12-14 18:20:37.632'),
	(13, 1, 'STI ', 'ACTIVE', '2021-12-14 18:23:03.281', '2021-12-14 18:23:03.281'),
	(14, 6, 'FP methods', 'ACTIVE', '2022-02-14 06:49:44.872', '2022-02-14 06:50:17.000'),
	(15, 6, 'Training dates', 'ACTIVE', '2022-02-14 06:49:55.707', '2022-02-14 06:50:38.000'),
	(16, 6, 'services offered', 'ACTIVE', '2022-02-14 06:50:11.827', '2022-02-14 06:50:11.827'),
	(17, 6, 'ASRH CSE', 'ACTIVE', '2022-02-14 06:52:11.450', '2022-02-14 06:52:11.450'),
	(18, 2, 'CSE', 'ACTIVE', '2022-02-14 06:53:27.819', '2022-02-14 06:53:27.819'),
	(19, 2, 'PCC', 'ACTIVE', '2022-02-14 06:53:34.712', '2022-02-14 06:53:34.712'),
	(20, 2, 'Training on ASRH', 'ACTIVE', '2022-02-14 06:53:54.417', '2022-02-14 06:53:54.417'),
	(21, 2, 'ASRH Forums', 'ACTIVE', '2022-02-14 06:54:07.978', '2022-02-14 06:54:07.978'),
	(22, 4, 'Accommodation prices', 'ACTIVE', '2022-02-14 06:54:56.847', '2022-02-14 06:54:56.847'),
	(23, 4, 'Catering services', 'ACTIVE', '2022-02-14 06:55:06.564', '2022-02-14 06:55:06.564');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

-- Dumping structure for table znfpc2._prisma_migrations
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table znfpc2._prisma_migrations: ~2 rows (approximately)
DELETE FROM `_prisma_migrations`;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('3aab8761-87af-4168-8af8-a0994028fbea', 'b7ae316526059462d9f346e8feb42baffc0d161975a639ede3edcf520175b761', '2022-09-10 19:19:08.013', '20220910191907_init', NULL, NULL, '2022-09-10 19:19:07.468', 1),
	('d242a368-397c-49fd-8c09-0a69eba1b47a', '7b8ab76b5369fc6bd1030abdc2cb687921ca5cd1fd5020764ea6fbb2826536d3', '2022-09-10 19:32:41.096', '20220910193240_report', NULL, NULL, '2022-09-10 19:32:40.495', 1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
