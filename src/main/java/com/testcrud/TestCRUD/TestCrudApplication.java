package com.testcrud.TestCRUD;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import javax.sql.DataSource;

@SpringBootApplication
public class TestCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(TestCrudApplication.class, args);
	}

}
