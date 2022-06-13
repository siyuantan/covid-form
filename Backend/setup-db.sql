use covidDeclaration;

-- Create tables
CREATE TABLE declaration(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    date_submitted DATETIME COMMENT 'Date Submitted',
    name VARCHAR(50) not null COMMENT 'Full Name',
    temperature DECIMAL(5,2) not null COMMENT 'Temperature record',
    has_symptoms BOOLEAN not null COMMENT 'Has Symptoms',
    has_close_contact BOOLEAN not null COMMENT 'Has Close Contact'
) DEFAULT CHARSET UTF8 COMMENT 'covid declaration table';

INSERT INTO declaration (date_submitted, name, temperature, has_symptoms, has_close_contact) VALUES (CURRENT_TIME() , 'Cool man 2', 37.3, false,true);