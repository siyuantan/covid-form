package com.example.coviddeclaration.repository;

import com.example.coviddeclaration.entity.Declaration;

import org.springframework.data.repository.CrudRepository;

public interface CovidDeclarationRepository extends CrudRepository<Declaration, Integer>{
  
}
