CREATE TABLE staff  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    staff_id INT, FOREIGN KEY (doctor_id) REFERENCES doctors(id)
    position VARCHAR(100),
);
CREATE TABLE doctors  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    speciality TEXT
);

CREATE TABLE patients  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    docotr_id INT,
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE appointments  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    date DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);

CREATE TABLE diagnoses  (
    id INT AUTO_INCREMENT PRIMARY KEY,
    patient_id INT,
    doctor_id INT,
    date DATE,
    diagnosis TEXT,
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id)
);
