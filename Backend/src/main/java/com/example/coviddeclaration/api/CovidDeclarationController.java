package com.example.coviddeclaration.api;

import com.example.coviddeclaration.entity.Declaration;
import com.example.coviddeclaration.repository.CovidDeclarationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CovidDeclarationController {
	
	@Autowired
	private CovidDeclarationRepository covidDeclarationRepo;
		
	@GetMapping("/covid-declarations")
	public @ResponseBody Iterable<Declaration> getAllCovidDeclaration() {
		return covidDeclarationRepo.findAll();
	}
	
	@PostMapping("/create-covid-declaration")
	public ResponseEntity<Declaration> createCovidDeclaration(@RequestBody Declaration newDeclaration) {
    try {
      Declaration createdDeclarated = covidDeclarationRepo.save(newDeclaration);
      return new ResponseEntity<>(createdDeclarated, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
	}
}
