-- company table
INSERT INTO `bc_27_gc`.`company` VALUES (1,'HP','/assets/images/hp.svg','High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.','name','email','9999999999'),
(2,'BMW','/assets/images/bmw.svg','High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.','name','email','9999999999'),
(3,'Instagram','assets/images/instagram.svg','High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.','name','email','9999999999'),
(4,'Myntra','/assets/images/myntra.svg','High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.','name','email','9999999999');

-- user table
INSERT INTO `bc_27_gc`.`user` VALUES (1,'Gayatri123','Gayatri','Peketi','gayatri.peketi@gmail.com',123456789,1,'2022-03-21 11:14:07');

-- job table
INSERT INTO `bc_27_gc`.`job` VALUES 
(1,'User Experience Designer','Past week','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Internship','Mid-Level',1),
(2,'User Experience Designer','Past 24hrs','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Full-Time','Fresher',2),
(3,'Associate Software Engineer','Past month','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Contract','Director',3),
(4,'Software Architect','Past week','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Remote','Executive',4),
(5,'Lead Product Designer','Past week','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Full time','Mid-Level',1),
(6,'User Interface Designer','Past week','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Internship','Mid-Level',2),
(7,'Software Architect','Past week','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Contract','Mid-Level',3),
(8,'Associate Software Engineer','Past month','Open Text is seeking a talented, personable interaction designer who can assist the User Experience Design team by working with other designers and development teams on a variety of projects. The OpenText User Experience Design group is a distributed multi-disciplinary team of professionals that are responsible for enhancing the UX of the company’s collective product suites worldwide.','40,000','yes','Internship','Mid-Level',4);

-- skill table
INSERT INTO `bc_27_gc`.`skill` VALUES (1,'Angular'),(2,'Spring'),(3,'Java'),(4,'React'),(5,'Flutter'),(6,'Uxdesign'),(7,'UiDesign'),(8,'Javascript');

-- job_skill table
INSERT INTO `bc_27_gc`.`job_skill` VALUES (6,1),(7,1),(6,2),(7,2),(4,3),(2,3),(2,4),(3,4),(8,4),(6,5),(7,5),(6,6),(7,6),(4,7),(2,7),(2,8),(3,8),(8,8);


-- location table
INSERT INTO `bc_27_gc`.`location` VALUES (1,'Banglore'),(2,'Hyderabad'),(3,'Mumbai'),(4,'Chennai'),(5,'Delhi');

-- job_location table
INSERT INTO `bc_27_gc`.`job_location` VALUES (1,1),(2,1),(3,1),(4,1),(5,3),(6,3),(7,3),(8,3);

