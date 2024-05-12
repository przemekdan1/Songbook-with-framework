package com.example.songbook.repositories;

import com.example.songbook.models.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RestResource;

@RestResource
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
