package com.zemoso.greencommute.entity;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "company")
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @Column(name = "name")
    private String name;
    
    @Column(name = "logo")
    private String logo;
    
    @Column(name = "about")
    private String about;
    
    @Column(name = "contact_name")
    private String contactName;
    
    @Column(name = "contact_email")
    private String contactEmail;
    
    @Column(name = "contact_number")
    private String contactNumber;
}
