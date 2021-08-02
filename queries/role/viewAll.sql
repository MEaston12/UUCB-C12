SELECT Role.id, Role.title, Role.salary, Department.name AS department FROM Role
	LEFT JOIN Department ON Role.department_id = Department.id;