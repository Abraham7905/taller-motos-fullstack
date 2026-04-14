-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: taller_motos
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bikes`
--

DROP TABLE IF EXISTS `bikes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bikes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `plate` varchar(255) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `cylinder` int DEFAULT NULL,
  `clientId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plate` (`plate`),
  UNIQUE KEY `plate_2` (`plate`),
  UNIQUE KEY `plate_3` (`plate`),
  UNIQUE KEY `plate_4` (`plate`),
  UNIQUE KEY `plate_5` (`plate`),
  UNIQUE KEY `plate_6` (`plate`),
  UNIQUE KEY `plate_7` (`plate`),
  UNIQUE KEY `plate_8` (`plate`),
  UNIQUE KEY `plate_9` (`plate`),
  UNIQUE KEY `plate_10` (`plate`),
  UNIQUE KEY `plate_11` (`plate`),
  UNIQUE KEY `plate_12` (`plate`),
  UNIQUE KEY `plate_13` (`plate`),
  UNIQUE KEY `plate_14` (`plate`),
  UNIQUE KEY `plate_15` (`plate`),
  UNIQUE KEY `plate_16` (`plate`),
  UNIQUE KEY `plate_17` (`plate`),
  UNIQUE KEY `plate_18` (`plate`),
  UNIQUE KEY `plate_19` (`plate`),
  UNIQUE KEY `plate_20` (`plate`),
  UNIQUE KEY `plate_21` (`plate`),
  UNIQUE KEY `plate_22` (`plate`),
  UNIQUE KEY `plate_23` (`plate`),
  UNIQUE KEY `plate_24` (`plate`),
  UNIQUE KEY `plate_25` (`plate`),
  UNIQUE KEY `plate_26` (`plate`),
  UNIQUE KEY `plate_27` (`plate`),
  UNIQUE KEY `plate_28` (`plate`),
  UNIQUE KEY `plate_29` (`plate`),
  UNIQUE KEY `plate_30` (`plate`),
  UNIQUE KEY `plate_31` (`plate`),
  UNIQUE KEY `plate_32` (`plate`),
  UNIQUE KEY `plate_33` (`plate`),
  UNIQUE KEY `plate_34` (`plate`),
  UNIQUE KEY `plate_35` (`plate`),
  UNIQUE KEY `plate_36` (`plate`),
  UNIQUE KEY `plate_37` (`plate`),
  UNIQUE KEY `plate_38` (`plate`),
  UNIQUE KEY `plate_39` (`plate`),
  UNIQUE KEY `plate_40` (`plate`),
  UNIQUE KEY `plate_41` (`plate`),
  UNIQUE KEY `plate_42` (`plate`),
  UNIQUE KEY `plate_43` (`plate`),
  UNIQUE KEY `plate_44` (`plate`),
  UNIQUE KEY `plate_45` (`plate`),
  UNIQUE KEY `plate_46` (`plate`),
  UNIQUE KEY `plate_47` (`plate`),
  UNIQUE KEY `plate_48` (`plate`),
  UNIQUE KEY `plate_49` (`plate`),
  UNIQUE KEY `plate_50` (`plate`),
  UNIQUE KEY `plate_51` (`plate`),
  UNIQUE KEY `plate_52` (`plate`),
  UNIQUE KEY `plate_53` (`plate`),
  UNIQUE KEY `plate_54` (`plate`),
  UNIQUE KEY `plate_55` (`plate`),
  UNIQUE KEY `plate_56` (`plate`),
  UNIQUE KEY `plate_57` (`plate`),
  UNIQUE KEY `plate_58` (`plate`),
  UNIQUE KEY `plate_59` (`plate`),
  UNIQUE KEY `plate_60` (`plate`),
  UNIQUE KEY `plate_61` (`plate`),
  UNIQUE KEY `plate_62` (`plate`),
  KEY `clientId` (`clientId`),
  CONSTRAINT `bikes_ibfk_1` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_10` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_11` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_12` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_13` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_14` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_15` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_16` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_17` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_18` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_19` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_2` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_20` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_21` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_22` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_23` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_24` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_25` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_26` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_27` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_28` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_29` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_3` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_30` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_31` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_32` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_33` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_34` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_35` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_36` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_37` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_38` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_39` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_4` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_40` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_41` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_42` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_43` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_44` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_45` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_46` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_47` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_48` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_49` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_5` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_50` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_51` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_52` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_53` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_54` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_55` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_56` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_57` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_58` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_59` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_6` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_60` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_61` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_62` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_7` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_8` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `bikes_ibfk_9` FOREIGN KEY (`clientId`) REFERENCES `clients` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` enum('ADMIN','MECANICO') NOT NULL DEFAULT 'MECANICO',
  `active` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workorderitems`
--

DROP TABLE IF EXISTS `workorderitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workorderitems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `count` int DEFAULT NULL,
  `unitValue` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `workOrderId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `workOrderId` (`workOrderId`),
  CONSTRAINT `workorderitems_ibfk_1` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_10` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_11` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_12` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_13` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_14` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_15` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_16` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_17` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_18` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_19` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_2` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_20` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_21` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_22` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_23` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_24` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_25` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_26` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_27` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_28` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_29` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_3` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_30` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_31` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_32` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_33` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_34` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_35` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_36` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_37` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_38` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_39` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_4` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_40` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_41` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_42` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_5` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_6` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_7` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_8` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `workorderitems_ibfk_9` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `WorkOrderItems_workOrderId_foreign_idx` FOREIGN KEY (`workOrderId`) REFERENCES `workorders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workorders`
--

DROP TABLE IF EXISTS `workorders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workorders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `entryDate` datetime DEFAULT NULL,
  `faultDescription` text,
  `status` varchar(255) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `motoId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `motoId` (`motoId`),
  CONSTRAINT `workorders_ibfk_1` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_10` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_11` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_12` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_13` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_14` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_15` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_16` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_17` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_18` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_19` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_2` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_20` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_21` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_22` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_23` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_24` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_25` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_26` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_27` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_28` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_29` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_3` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_30` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_31` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_32` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_33` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_34` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_35` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_36` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_37` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_38` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_39` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_4` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_40` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_41` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_42` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_43` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_44` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_45` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_46` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_47` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_48` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_49` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_5` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_50` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_51` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_52` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_53` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_54` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_55` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_56` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_57` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_6` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_7` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_8` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `workorders_ibfk_9` FOREIGN KEY (`motoId`) REFERENCES `bikes` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workorderstatushistories`
--

DROP TABLE IF EXISTS `workorderstatushistories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workorderstatushistories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `workOrderId` int NOT NULL,
  `fromStatus` varchar(255) DEFAULT NULL,
  `toStatus` varchar(255) NOT NULL,
  `note` text,
  `changedByUserId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `work_order_status_histories_work_order_id_created_at` (`workOrderId`,`createdAt`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-13 23:35:55
