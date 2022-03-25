package com.zemoso.greencommute.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job")
public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "company_id")
    private Company company;
    
    @Column(name = "job_title", nullable = false)
    private String jobTitle;
    
    @Column(name = "date_posted")
    private String datePosted;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "active")
    private boolean active;
    
    @Column(name = "salary")
    private String salary;
    
    @Column(name = "job_type")
    private String jobType;
    
    @Column(name = "experience_level")
    private String experience;
    
    @JsonManagedReference
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,
                    CascadeType.REFRESH,CascadeType.REMOVE})
    @JoinTable(
            name = "job_skill",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "skill_id")
    )
    private List<Skill> skills;
    
    @JsonManagedReference
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH,CascadeType.MERGE,CascadeType.PERSIST,
                    CascadeType.REFRESH,CascadeType.REMOVE})
    @JoinTable(
            name = "job_location",
            joinColumns = @JoinColumn(name = "job_id"),
            inverseJoinColumns = @JoinColumn(name = "location_id")
    )
    private List<Location> locations;
    
    @Column(name = "distance")
    private String distance;
    
}
