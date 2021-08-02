SELECT 
	Employee.id, 
    Employee.first_name, 
    Employee.last_name, 
    Role.title as role, 
    Role.salary, 
    Department.name as department,
    CONCAT(Manager.first_name, " ", Manager.last_name) AS manager 
FROM Employee
	LEFT JOIN Role ON Employee.role_id=Role.id
    LEFT JOIN Employee Manager ON Employee.manager_id=Manager.id
    LEFT JOIN Department ON Role.department_id=Department.id