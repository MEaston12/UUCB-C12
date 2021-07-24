USE uucb_c12;
CREATE TABLE IF NOT EXISTS Department(
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,

    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS Role(
    id INT AUTO_INCREMENT,
    title VARCHAR(30),
    salary VARCHAR(30),
    department_id INT,

    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES Department(id)
);
CREATE TABLE IF NOT EXISTS Employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,

    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES Role(id),
    FOREIGN KEY (manager_id) REFERENCES Employee(id)
);
