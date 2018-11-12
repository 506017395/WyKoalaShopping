-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: wykoala
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Mall_cart`
--

DROP TABLE IF EXISTS `Mall_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `is_select` tinyint(1) NOT NULL,
  `goods_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Mall_cart_goods_id_1c616a0e_fk_Mall_goods_id` (`goods_id`),
  KEY `Mall_cart_user_id_c0fed1e5_fk_Mall_user_id` (`user_id`),
  CONSTRAINT `Mall_cart_goods_id_1c616a0e_fk_Mall_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `Mall_goods` (`id`),
  CONSTRAINT `Mall_cart_user_id_c0fed1e5_fk_Mall_user_id` FOREIGN KEY (`user_id`) REFERENCES `Mall_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_cart`
--

LOCK TABLES `Mall_cart` WRITE;
/*!40000 ALTER TABLE `Mall_cart` DISABLE KEYS */;
INSERT INTO `Mall_cart` VALUES (62,1,0,19,1,1.00);
/*!40000 ALTER TABLE `Mall_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mall_goods`
--

DROP TABLE IF EXISTS `Mall_goods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `smallimg` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  `packet` varchar(20) NOT NULL,
  `information` varchar(50) NOT NULL,
  `rated` varchar(40) NOT NULL,
  `each` varchar(20) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `purchase` int(11) NOT NULL,
  `right` varchar(40) DEFAULT NULL,
  `goods_type` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_goods`
--

LOCK TABLES `Mall_goods` WRITE;
/*!40000 ALTER TABLE `Mall_goods` DISABLE KEYS */;
INSERT INTO `Mall_goods` VALUES (1,'img/ku1.png','img/ku1.webp','4包装','|Merries 花王妙儿舒...','日本人气纸尿裤，考拉疯抢中','每包77元',1,10,NULL,1),(2,'img/ku1.png','img/ku2.webp','2包装','|moony尤妮佳 L54片...','全面透气 赶走闷热','每包88元',1,10,NULL,1),(3,'img/ku1.png','img/ku3.webp','4包装','|GOO.N大王 L54片/包...','尿湿显示带，帮宝宝远离红屁股','每包84元',1,10,NULL,1),(4,'img/ku4.png','img/ku4.webp','4包装','|Pampers日本帮宝适...','滋润保护，柔顺肌肤','每包77.5元',1,10,NULL,1),(5,'img/ku4.png','img/ku5.webp','','HUGGIES好奇铂金装 S76片/...','柔软透气弹性吸收','',1,10,NULL,1),(6,'img/smallmilk1.png','img/milk1.jpg','3件装','|Aptamil 德国爱他美...','德国\'质\'造 信赖品质','每件141.7元',1,10,NULL,2),(7,'img/smallmilk2.png','img/milk2.jpg','3件装','|Nutrilon荷兰牛栏婴...','千万妈咪倾心的百年品牌','每件133元',1,10,NULL,2),(8,'img/smallmilk3.png','img/milk3.jpg','3件装','|Hero Baby婴儿奶粉...','荷兰本土父母的选择','每包件86元',1,10,NULL,2),(9,'img/smallmilk4.png','img/milk4.jpg','3件装','|Hipp喜宝 荷兰版有机...','德国妈妈世代信任之选','每件126元',1,10,NULL,2),(10,'img/smallmilk4.png','img/milk5.jpg','2件装','澳洲爱他美Profutura...','百年领域不断研究','每件187元',1,10,NULL,2),(11,'img/smallfood1.png','img/food1.jpg','2件装','|Baby Ddrops婴儿维...','帮助骨骼发育，宝宝更健康','每件87.5元',1,10,'',3),(12,'img/smallfood2.png','img/food2.jpg','','Gerber嘉宝DHA益生菌米粉...','帮助宝宝大脑和眼睛发育肠','',1,10,'148元选7件',3),(13,'img/smallfood3.png','img/food3.jpg','','Gerber嘉宝混合水果味酸奶...','均衡营养 宝宝健康成长','',1,10,'128元选7件',3),(14,'img/smallfood4.png','img/food4.jpg','2件装','|BIO ISLAND佰澳朗德...','补钙啦！','每件104元',1,10,'',3),(15,'img/smallfood5.png','img/food5.jpg','','EARTH`S BEST有机纯米粉2...','美国高品质米粉！','',1,10,'159元选5件',3),(16,'img/child.jpg','img/child1.webp','','婴儿彩棉袜子 3双','袜子轻度微弹，轻柔不勒脚','',1,10,'满168减25',4),(17,'img/child.jpg','img/child2.webp','','婴儿彩棉口水兜 3条','兜形设计，温柔贴合','',1,10,'满168减25',4),(18,'img/child.jpg','img/child3.webp','','婴儿彩棉三角巾 3条','双面日本YKK按扣，安全贴心','',1,10,'满168减25',4),(19,'img/child.jpg','img/child4.webp','','婴儿彩棉长爬连体衣','袖口防抓设计，YKK安全按扣','',1,10,'满168减25',4),(20,'img/child.jpg','img/child5.webp','','婴儿彩棉抱被90厘米×90厘米','防风保暖，双层加厚','',1,10,'满168减25',4),(21,'img/women1.png','img/women1.webp','2瓶装','|BIO ISLAND佰澳朗德...','帮助大脑发育 增强记忆降低血脂','每瓶131元',1,10,'',5),(22,'img/women2.png','img/women2.webp','','elevit爱乐维孕妇维生素营养..','辣妈必备，孕育健康宝宝','',1,10,'',5),(23,'img/women3.png','img/women3.webp','2盒装','|Pigeon贝亲防益乳垫...','三维立体褶皱 超强呼吸核心','每盒67元',1,10,'',5),(24,'img/women4.png','img/women4.webp','','pigeon贝亲 防溢乳垫 哺乳期..','三维褶皱超强吸收','',1,10,'',5),(25,'img/women5.png','img/women5.webp','','medela美德乐 丝韵单边电动..','吸奶快速 简单更省力','',1,10,'',5);
/*!40000 ALTER TABLE `Mall_goods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mall_order`
--

DROP TABLE IF EXISTS `Mall_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `orderno` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Mall_order_user_id_97826ad4_fk_Mall_user_id` (`user_id`),
  CONSTRAINT `Mall_order_user_id_97826ad4_fk_Mall_user_id` FOREIGN KEY (`user_id`) REFERENCES `Mall_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_order`
--

LOCK TABLES `Mall_order` WRITE;
/*!40000 ALTER TABLE `Mall_order` DISABLE KEYS */;
INSERT INTO `Mall_order` VALUES (24,'2018-11-11 15:42:54.304316',1,'154195097434833',1);
/*!40000 ALTER TABLE `Mall_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mall_ordergoods`
--

DROP TABLE IF EXISTS `Mall_ordergoods`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_ordergoods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `goods_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Mall_ordergoods_order_id_13143cc0_fk_Mall_order_id` (`order_id`),
  KEY `Mall_ordergoods_goods_id_2eda4a5b_fk_Mall_goods_id` (`goods_id`),
  CONSTRAINT `Mall_ordergoods_goods_id_2eda4a5b_fk_Mall_goods_id` FOREIGN KEY (`goods_id`) REFERENCES `Mall_goods` (`id`),
  CONSTRAINT `Mall_ordergoods_order_id_13143cc0_fk_Mall_order_id` FOREIGN KEY (`order_id`) REFERENCES `Mall_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_ordergoods`
--

LOCK TABLES `Mall_ordergoods` WRITE;
/*!40000 ALTER TABLE `Mall_ordergoods` DISABLE KEYS */;
INSERT INTO `Mall_ordergoods` VALUES (25,1,24,6),(26,1,24,13);
/*!40000 ALTER TABLE `Mall_ordergoods` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mall_slideshow`
--

DROP TABLE IF EXISTS `Mall_slideshow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_slideshow` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_slideshow`
--

LOCK TABLES `Mall_slideshow` WRITE;
/*!40000 ALTER TABLE `Mall_slideshow` DISABLE KEYS */;
INSERT INTO `Mall_slideshow` VALUES (1,'img/lunbo1.jpg'),(2,'img/lunbo2.jpg'),(3,'img/lunbo3.jpg'),(4,'img/lunbo4.jpg'),(5,'img/lunbo5.jpg'),(6,'img/lunbo6.jpg'),(7,'img/lunbo7.jpg');
/*!40000 ALTER TABLE `Mall_slideshow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mall_user`
--

DROP TABLE IF EXISTS `Mall_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mall_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uaccount` varchar(60) NOT NULL,
  `uname` varchar(60) NOT NULL,
  `upwd` varchar(256) NOT NULL,
  `utel` varchar(20) NOT NULL,
  `token` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Mall_user_uaccount_15b220ac_uniq` (`uaccount`),
  UNIQUE KEY `Mall_user_utel_ceec2ffd_uniq` (`utel`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mall_user`
--

LOCK TABLES `Mall_user` WRITE;
/*!40000 ALTER TABLE `Mall_user` DISABLE KEYS */;
INSERT INTO `Mall_user` VALUES (1,'506017395@163.com','506017395@163.com','256b9022beee4c6925370bd801430a3bdbe6654890c2447e5439af8da2e745ff1d717f5927bee5b28fde91fc21a860e627a41cc0054cbcc7b1eff66c411c1be2','13688888888','d09332cb-e6e4-55f2-b9ed-b68a84867538'),(2,'506017395@126.com','506017395@126.com','256b9022beee4c6925370bd801430a3bdbe6654890c2447e5439af8da2e745ff1d717f5927bee5b28fde91fc21a860e627a41cc0054cbcc7b1eff66c411c1be2','13666666666','a5b937a3-4c40-586f-9003-cdbda0b12883'),(3,'506017395@yeah.net','506017395@yeah.net','256b9022beee4c6925370bd801430a3bdbe6654890c2447e5439af8da2e745ff1d717f5927bee5b28fde91fc21a860e627a41cc0054cbcc7b1eff66c411c1be2','13600000000','71e63364-f1ee-54e2-a3b8-941c3a8fd889'),(4,'a1525335@163.com','a1525335@163.com','64fcc6f6bc7a815041b4db51f00f4bea8e51c13b27f422da0a8522c94641c7e483c3f17b28d0a59add0c8a44a4e4fc1dd3a9ea48bad8cf5b707ac0f44a5f3536','13666668888','15411170-e8a0-573f-9b71-72e3a0617f42'),(6,'a1525335@126.com','a1525335@126.com','64fcc6f6bc7a815041b4db51f00f4bea8e51c13b27f422da0a8522c94641c7e483c3f17b28d0a59add0c8a44a4e4fc1dd3a9ea48bad8cf5b707ac0f44a5f3536','13666886688','9e8c360a-0604-52b0-bd87-c468fc6d07cc'),(7,'a1626336@163.com','a1626336@163.com','256b9022beee4c6925370bd801430a3bdbe6654890c2447e5439af8da2e745ff1d717f5927bee5b28fde91fc21a860e627a41cc0054cbcc7b1eff66c411c1be2','13655555555','28d6e841-49bf-5b46-b35b-e91ffd41079f');
/*!40000 ALTER TABLE `Mall_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add cart',7,'add_cart'),(20,'Can change cart',7,'change_cart'),(21,'Can delete cart',7,'delete_cart'),(22,'Can add goods',8,'add_goods'),(23,'Can change goods',8,'change_goods'),(24,'Can delete goods',8,'delete_goods'),(25,'Can add slideshow',9,'add_slideshow'),(26,'Can change slideshow',9,'change_slideshow'),(27,'Can delete slideshow',9,'delete_slideshow'),(28,'Can add user',10,'add_user'),(29,'Can change user',10,'change_user'),(30,'Can delete user',10,'delete_user'),(31,'Can add order',11,'add_order'),(32,'Can change order',11,'change_order'),(33,'Can delete order',11,'delete_order'),(34,'Can add order goods',12,'add_ordergoods'),(35,'Can change order goods',12,'change_ordergoods'),(36,'Can delete order goods',12,'delete_ordergoods');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(7,'Mall','cart'),(8,'Mall','goods'),(11,'Mall','order'),(12,'Mall','ordergoods'),(9,'Mall','slideshow'),(10,'Mall','user'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'Mall','0001_initial','2018-11-07 12:29:40.785869'),(2,'contenttypes','0001_initial','2018-11-07 12:29:40.986848'),(3,'auth','0001_initial','2018-11-07 12:29:43.097566'),(4,'admin','0001_initial','2018-11-07 12:29:43.616213'),(5,'admin','0002_logentry_remove_auto_add','2018-11-07 12:29:43.711103'),(6,'contenttypes','0002_remove_content_type_name','2018-11-07 12:29:44.008547'),(7,'auth','0002_alter_permission_name_max_length','2018-11-07 12:29:44.200076'),(8,'auth','0003_alter_user_email_max_length','2018-11-07 12:29:44.387164'),(9,'auth','0004_alter_user_username_opts','2018-11-07 12:29:44.451205'),(10,'auth','0005_alter_user_last_login_null','2018-11-07 12:29:44.622133'),(11,'auth','0006_require_contenttypes_0002','2018-11-07 12:29:44.675341'),(12,'auth','0007_alter_validators_add_error_messages','2018-11-07 12:29:44.736313'),(13,'auth','0008_alter_user_username_max_length','2018-11-07 12:29:44.919919'),(14,'sessions','0001_initial','2018-11-07 12:29:45.138267'),(15,'Mall','0002_goods_goods_type','2018-11-07 16:42:39.109927'),(16,'Mall','0003_auto_20181109_1033','2018-11-09 02:33:17.675524'),(17,'Mall','0004_cart_total','2018-11-09 05:57:58.481240'),(18,'Mall','0005_auto_20181110_0142','2018-11-09 17:42:54.348134'),(19,'Mall','0006_auto_20181110_1409','2018-11-10 06:10:02.925241'),(20,'Mall','0007_order_ordergoods','2018-11-11 05:18:30.706385'),(21,'Mall','0008_auto_20181111_1431','2018-11-11 06:31:29.079872'),(22,'Mall','0009_auto_20181111_1500','2018-11-11 07:00:09.191798'),(23,'Mall','0010_auto_20181111_1513','2018-11-11 07:13:59.503494'),(24,'Mall','0011_auto_20181111_1514','2018-11-11 07:15:04.951165');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('038cpurncwra1kbmq3xw1sucar6na1y3','YTVhNWQxMTU4M2RlYTU4YThlNGZkOGI4ODFkYTJmY2I1NzQyYmE0NTp7InRva2VuIjoiMDY3MGFkNzAtYzg1Ni01N2M3LTgwMTktZTQ5YTM4NTJiMmNiIn0=','2018-11-26 01:20:10.927858'),('047rpkvykihvfg3v88un8w0aiwxe3gpo','OTYzYjJlMjUwMjQ4NGY0OTliODNhYjRjOWJkYjdlYzI2YjJhZTQxMjp7InRva2VuIjoiZmUxYmIyODEtYTJlZi01M2IzLWFhZDktYjg0YmJkN2VlYTFmIn0=','2018-11-26 01:33:38.614233'),('0aqcltnr4p2ji458dq0pfkieuhh1c88p','NmJhMjA3ZDU1OGFjYmFmYjZmNDNmOGZlOGRhMDU0MTUzNDI3ODg4Zjp7InRva2VuIjoiZDA5MzMyY2ItZTZlNC01NWYyLWI5ZWQtYjY4YTg0ODY3NTM4In0=','2018-11-26 01:42:39.078548'),('1ha6x98drb4f0ag9yyrv2n2uuvomgkfc','OTcxMzdmOTI4Mjc0YWQwYWY1ODkwNjhiNjhiODNjZjUzMWI1YWI3NTp7InRva2VuIjoiMGNkZjdjYTctYjNkZC01YTAzLWI2ZWQtOGVkOGM0ZjNhMDExIn0=','2018-11-26 01:37:20.336285'),('2a9zuiumd8pkmsk647relagwoa6h2q2y','OTI4NWNhMDhmMTg3YTk1ODhmMDJjMWNiOTJjYWY1ODBmNGNiYzFhYjp7InRva2VuIjoiMTUyZTgwMGYtMDFkZC01YmM3LTllNTktMDQ0YTk0NjY2ZmY1In0=','2018-11-24 05:58:28.250540'),('3uqy5lo8n7dyr9xtaatsmlaop9x397b4','ZTEwNjA2ZmQ2NThiNjc4Y2YyOGNjNzMyNzM3N2E0M2VjYWUxYmJmMjp7InRva2VuIjoiMzcwY2RmNTItMmNmNi01OTZmLWFmNTctMjgzMjM2MjY2M2ZiIn0=','2018-11-26 01:14:15.007727'),('4kpged9v9by61o7khu8rxu41xmarxjl5','YTJhODkyOTI1YWM0ZGEyN2JhMDZkZTg5YzA1M2JlYWFiMGNhYjM5ODp7InRva2VuIjoiODVlYmI0Y2EtZWMxMC01MjZmLTllODItYjg0ZmEwYmJlMmI4In0=','2018-11-24 05:23:10.059156'),('4wfzam1w998uswx7pdm752rmfw8z503e','NjQyMmQwZjNiOGRjMWQwNDJmZGY5OTQ4ZDBjMzBhYTJmMTA3M2VhYTp7InRva2VuIjoiNjRkZDVlNWEtZjZmMC01MTRhLWIwM2EtMGY4OGMwZGQyODcyIn0=','2018-11-26 01:41:23.816889'),('78qiw8ojz1gaskingyetixhdgouwyfmu','OWFiYzBhYzkzMTcxNjlhYzljZDUwN2Q2MDZjOWRiOTBmYzU4ZDQ2Njp7InRva2VuIjoiNjE4NmNlMDQtNjVkMC01MjU5LWEzZGItODAyMjRiY2YxN2I0In0=','2018-11-26 01:16:07.132052'),('8a0sryasxp7d6cbdy13b9turnf6o4v5p','ZGQ2NjFjYWQwMDY2ZDlkZDI1OGVhM2UxYzIyOGRkZTA1NWZhYTUxNTp7InRva2VuIjoiMWVjYzAwY2EtNGJiMi01NDc4LWFlZDUtOTc5MTM4MDA3ZWE3In0=','2018-11-24 05:23:10.056464'),('8po9urc2fvf413on9bxwopzwftx8c72z','YjY0MTEwMmY0ZDgyYmMyYjJhNTQ1ZWYzNzk2MDE0NTBmMDA5MTNkYTp7InRva2VuIjoiM2FhMGZiZGYtYzBiMy01NjU1LTlhY2MtZTBjYzJjNjE3YWVmIn0=','2018-11-26 01:30:25.452429'),('8wm78hwa5rcg72lhfvlkmzekjgiv77d6','NTFlYjk1MzI1MTQyZjdkOTUzNDcyNDZjZTU2MDE5ZGRiMGEwOGZjMzp7InRva2VuIjoiNzFkYzQ5ZmQtODc5Ny01ZTY0LWFmOGUtYmFlNTk1YmExYjZlIn0=','2018-11-26 01:25:03.325427'),('8xsrxugoqxiwvgfhufrr6lrhn8uzpefh','NTdjZDhlMWZlOGVlM2UzYTUyODQyYzlmOGNkMGE0YWQ0ZGVhYmRiMTp7InRva2VuIjoiZThhOTRiZDAtYzU2Yy01YjhiLWEyNGQtN2FjOTkzZDBkY2JjIn0=','2018-11-26 01:23:49.943714'),('9i3bij8dikod8but6sun95kvg4df28gp','YmE3MWMxOWFmN2JiODJlYWRjZjYwNzRhMGZlMzg2NzlkODg0YTA0ZTp7InRva2VuIjoiNzJiY2E3ZDktYzU1ZS01NTllLWJiODAtYzkxOTFlMjkxOGM2In0=','2018-11-24 06:12:21.178784'),('9ue72fgxgnkqq1pere9xpapkus1e8bf2','OGQyMTk3OTI0MDhlZmRkNDg1ZTNhMTVhMmNjMmViZjQyOGM0MGEwMDp7InRva2VuIjoiZmZkZDExZGUtYTJhMy01NWFjLTkyNDYtMjRhNzRhOTdkMTUzIn0=','2018-11-26 01:15:35.424855'),('ax3xka3xcz8wtd4wsc6vcg2siym6sw34','OTI3MjMwN2EzNWM4ZGY5NDZkODM5ZWRhYzFkYTE2ZTMwM2NlYzBhNDp7InRva2VuIjoiNzA5ZTA4YTktODg2Ny01YTBlLTllNTgtNzI0ZThmNTRkMmIxIn0=','2018-11-23 09:29:44.871970'),('jfjsqnhrk6f5zrku8g4lkw9qv7hlirlf','ZDY2NDdkNDRlNDIwZDlmZmRiMDRmNjYwZDM1NjYwMDY2ZTliNzk3Nzp7InRva2VuIjoiNjRkODY2ZjktNWRlOC01ZjBlLWEwZjQtZWMwMjM5YTBkOGYxIn0=','2018-11-26 01:30:25.462646'),('l4b4f6lrrvcflv3bg9wkir90wg8yfbnk','ZjVmYTYzMmQ1ZGMyOWMzNzg0YTZlZDM1ZGQ5YzUzOWY0MDQ1MDQ0Njp7InRva2VuIjoiNjhkYWUyMGQtOTM1NC01NjdiLTkyOTgtZjgyZmFlMDRjZmU2In0=','2018-11-25 15:19:27.687529'),('lnfdh4bxjslma9jgvjafycf1lyal72gq','ZTk2MTMyYTYzM2NlMWViMzY1MDkyMDI2ODdmMzViMDJiMTBlN2U3YTp7InRva2VuIjoiZDI3ZmY2MTQtYWNmZC01YjZmLTkwNzMtN2ZkODU1ZGIzMDM2In0=','2018-11-25 15:42:28.585282'),('n1sjk7z0p6oztey2rk0j7uadm1w9s3z2','OGJjN2E4MzcwZDQzODgwZjc0ZWRhMDg2ZGNhMTgwMTk3ZjMwYTM3Zjp7InRva2VuIjoiMzBhMzllMGEtMGRkMC01OTZhLTg4MDQtZjNiMjU1NWI1YWYwIn0=','2018-11-26 01:37:20.342417'),('qnv2mbkpo96t2o8rbnf7kevc6bjsquh1','YWRhZGY4ZDc3NTZhNjNkNTliZmQ2OTJiMjI0MWYzYTFjZDZkOWIyYzp7InRva2VuIjoiZjNhYTI1MjgtZjFkNy01NjQzLWI0ZjEtZmI1MzNlOTUxMmVmIn0=','2018-11-26 01:41:23.823767'),('rz9a9grl5z69cskwlhn71ybieu2yavkw','NGMyMTQwODY0ZDAxZGJmNTViMzM0MDI3M2ZmZGY5NmVhNTRjMDc4OTp7InRva2VuIjoiNGJlMDc2NGUtNzBlMy01NjAwLWJkZjUtNDljMmJjZGQ3MTQzIn0=','2018-11-26 01:33:58.877563'),('txzczbnu1kjoja6dk6vmihar5jqnmmli','OGQyODMyNmRhMTVjMmNmZTNiMTdkMWRiZGNmNDFiOGNiZGU5OTE3OTp7InRva2VuIjoiZjgyNDNkNjctY2NmMS01ZTJkLTk0ZDktNTM5MDkwZTU2NzRhIn0=','2018-11-24 05:58:28.258887'),('wb7iph0581mv3fx5rnc0tl9lntotknaw','M2Y5NGI1YmU2ZTE1ZWZjNjNmMWM3ZTMzN2IxZmNiODBiNzdmMTQ3YTp7InRva2VuIjoiNWYwMjE2ZTItZTMxOC01YTZhLTg1ZTYtMDQzY2JlMzYyODhiIn0=','2018-11-26 01:18:31.897471'),('wobk5jyksheovikbozhcfa8c5zb5min0','M2Q4ZGYzMjVlOWJlN2U2NDM1ZDdhMTNiMzdmM2VmNzgxYjU2MzA0Yzp7InRva2VuIjoiZmM3Mzk3YTItMzBhZC01NWZmLWJlOTgtZWRmNTE1YWFiNmFiIn0=','2018-11-26 01:20:10.920686'),('yztxot2iq1qatu6abo65u4ezm23syw8r','Zjc3YjM4NTQ0ZTQ2OWFiZmZjNWNhMTgyN2JmZmUxZTY3ZTZkNzFjNjp7InRva2VuIjoiMGIyZDQ2YTEtNmRmMS01ZTFlLWE3ODEtZmUyMjQzZjNjMzE2In0=','2018-11-26 01:26:23.379409'),('z0oovo2df9uus9p9v5cszivp2mntaeht','OTI3MjMwN2EzNWM4ZGY5NDZkODM5ZWRhYzFkYTE2ZTMwM2NlYzBhNDp7InRva2VuIjoiNzA5ZTA4YTktODg2Ny01YTBlLTllNTgtNzI0ZThmNTRkMmIxIn0=','2018-11-23 11:24:51.526799'),('z2lcnmja9u0ahy63iri0qub76run22r9','N2I4Yzk4NzNlNDNhYmQ5ZmYzYzUxOGU0NjQ5MGExOTBiZmY1OGIzMjp7InRva2VuIjoiNGM4ZTAzMWQtMmYyYi01MGYyLTlkZDktYzBmMmI3OTNjZTNlIn0=','2018-11-26 01:26:48.439093'),('z7ja62jcgr4hswciioh4p0p8g5g6bds7','Y2Y4YmQzZGJlNDFjM2VmOTFhYjk2NjE4MzVkMDJjNDlhY2E4Yjk2Zjp7InRva2VuIjoiYjk2NThhMjYtMDI0YS01NDlmLTgzZWMtN2Y2NWFlNDg5ZWRmIn0=','2018-11-26 01:15:35.445446');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-12 10:10:00
