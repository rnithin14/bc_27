-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema bc_27_gc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bc_27_gc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bc_27_gc` ;
USE `bc_27_gc` ;

-- -----------------------------------------------------
-- Table `bc_27_gc`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `verified` BIT NULL,
  `last_login` TIMESTAMP NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`user_qualifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`user_qualifications` (
  `id` INT NOT NULL,
  `qualification` VARCHAR(45) NULL,
  `branch` VARCHAR(45) NULL,
  `institute` VARCHAR(45) NULL,
  `completed_year` INT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_user_qualifications_user_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_qualifications_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`user_experience`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`user_experience` (
  `id` INT NOT NULL,
  `company` VARCHAR(45) NULL,
  `start_year` INT NULL,
  `end_year` INT NULL,
  `project` VARCHAR(45) NULL,
  `description` VARCHAR(200) NULL,
  `role` VARCHAR(45) NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_user_experience_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_experience_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`user_certifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`user_certifications` (
  `id` INT NOT NULL,
  `name` INT NULL,
  `authorised_by` VARCHAR(45) NULL,
  `validity_year` INT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_user_certifications_user1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_user_certifications_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`company`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`company` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `logo` VARCHAR(45) NULL,
  `about` VARCHAR(450) NULL,
  `contact_name` VARCHAR(45) NULL,
  `contact_email` VARCHAR(45) NULL,
  `contact_number` CHAR(10) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`job` (
  `id` INT NOT NULL,
  `job_title` VARCHAR(45) NULL,
  `date_posted` VARCHAR(45) NULL,
  `description` VARCHAR(500) NULL,
  `salary` VARCHAR(45) NULL,
  `active` VARCHAR(45) NULL,
  `job_type` VARCHAR(45) NULL,
  `experience_level` VARCHAR(45) NULL,
  `company_id` INT NOT NULL,
  PRIMARY KEY (`id`, `company_id`),
  INDEX `fk_job_company1_idx` (`company_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `bc_27_gc`.`company` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`saved_jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`saved_jobs` (
  `job_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `user_id`),
  INDEX `fk_job_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_job_has_user_job1_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_has_user_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_27_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`applied_job`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`applied_job` (
  `job_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `user_id`),
  INDEX `fk_job_has_user_user2_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_job_has_user_job2_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_has_user_job2`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_27_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_has_user_user2`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`skill` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`job_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`job_skill` (
  `skill_id` INT NOT NULL,
  `job_id` INT NOT NULL,
  PRIMARY KEY (`skill_id`, `job_id`),
  INDEX `fk_skill_has_job_job1_idx` (`job_id` ASC) VISIBLE,
  INDEX `fk_skill_has_job_skill1_idx` (`skill_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_has_job_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `bc_27_gc`.`skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skill_has_job_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_27_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`user_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`user_skill` (
  `skill_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `level` VARCHAR(45) NULL,
  PRIMARY KEY (`skill_id`, `user_id`),
  INDEX `fk_skill_has_user_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_skill_has_user_skill1_idx` (`skill_id` ASC) VISIBLE,
  CONSTRAINT `fk_skill_has_user_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `bc_27_gc`.`skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skill_has_user_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `bc_27_gc`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`location` (
  `id` INT NOT NULL,
  `city` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `bc_27_gc`.`job_location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bc_27_gc`.`job_location` (
  `job_id` INT NOT NULL,
  `location_id` INT NOT NULL,
  PRIMARY KEY (`job_id`, `location_id`),
  INDEX `fk_job_has_location_location1_idx` (`location_id` ASC) VISIBLE,
  INDEX `fk_job_has_location_job1_idx` (`job_id` ASC) VISIBLE,
  CONSTRAINT `fk_job_has_location_job1`
    FOREIGN KEY (`job_id`)
    REFERENCES `bc_27_gc`.`job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_job_has_location_location1`
    FOREIGN KEY (`location_id`)
    REFERENCES `bc_27_gc`.`location` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
