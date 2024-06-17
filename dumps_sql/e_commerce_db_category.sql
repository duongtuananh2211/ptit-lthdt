-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: e_commerce_db
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `des` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Acer','Đa dạng mẫu mã, giá cả phải chăng, hiệu suất ổn định, thiết kế thời trang, phù hợp với nhu cầu làm việc và giải trí.','SS'),(2,'Asus','Hiệu suất mạnh mẽ, thiết kế đẹp mắt, đa dạng mẫu mã, giá cả hợp lý, phù hợp cho cả công việc và giải trí.','SSS'),(3,'Dell','Đa dạng mẫu mã, chất lượng và độ bền cao, hiệu suất ổn định, thiết kế đẹp, phù hợp cho cả công việc và giải trí.','S'),(4,'Gigabyte','Hiệu suất mạnh mẽ, thiết kế sang trọng, tính di động cao, đặc biệt phù hợp cho game thủ và người làm đồ họa.','S'),(5,'Hp','Thiết kế tinh tế, đa dạng mẫu mã, hiệu suất ổn định, độ bền cao, phù hợp cho cả công việc và giải trí.','SS'),(6,'Lenovo','Thiết kế đơn giản nhưng sang trọng, hiệu suất ổn định, đa dạng mẫu mã, độ bền cao, phù hợp cho cả công việc và giải trí.','SSS'),(7,'Macbook','Thiết kế tinh tế, hiệu suất mạnh mẽ, hệ điều hành macOS ổn định, màn hình chất lượng cao, phù hợp cho công việc sáng tạo.','SSS'),(8,'Msi','Thiết kế hiện đại, hiệu suất gaming mạnh mẽ, tính di động cao, màn hình chất lượng, phù hợp cho game thủ và người làm đồ họa.','S');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-12 21:42:44
