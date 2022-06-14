package com.example.coviddeclaration.entity;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "declaration")
public class Declaration {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;
  private Instant date_submitted;
  private String name;
  private float temperature;
  private boolean has_symptoms;
  private boolean has_close_contact;
  
  public int getid() {
    return id;
  }

  public Instant getDate_submitted() {
    return date_submitted;
  }

  public String getName() {
    return name;
  }
  
  public float getTemperature() {
    return temperature;
  }
  
  public boolean isHas_close_contact() {
    return has_close_contact;
  }

  public boolean isHas_symptoms() {
    return has_symptoms;
  }

}
