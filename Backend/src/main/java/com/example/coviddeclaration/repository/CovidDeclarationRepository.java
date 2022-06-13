package com.example.coviddeclaration.repository;

import java.util.List;

import com.example.coviddeclaration.entity.Declaration;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface CovidDeclarationRepository extends CrudRepository<Declaration, Integer>{
  
}
