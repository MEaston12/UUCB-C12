INSERT INTO Department ( name ) VALUES
    ("Engineering"),
    ("Administration"),
    ("Finances")
;

INSERT INTO Role ( title, salary, department_id ) VALUES 
    ("Engineer", 80000, 1),
    ("Intern", 10, 1),
    ("Manager", 10000, 2),
    ("CEO", 1000000, 2),
    ("Accountant", 120000, 3)
;

INSERT INTO Employee ( first_name, last_name, role_id, manager_id ) VALUES 
	("Jake", "Dudely", 4, 1),
    ("Mega", "Manager", 3,  1),
    ("Sally", "Enginerd", 1, 2),
    ("David", "Intern", 2, 2)