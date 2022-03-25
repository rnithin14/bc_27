package com.zemoso.greencommute.repository;

import com.zemoso.greencommute.dto.job.JobBodyDto;
import com.zemoso.greencommute.entity.Job;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

public class JobRepositoryImpl implements  JobRepositoryCustom{
    @PersistenceContext
    private EntityManager entityManager;
    
    @Override
    public List<Job> findBySkillsInAndLocationsIn(JobBodyDto jobBody){
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Job> query = cb.createQuery(Job.class);
        Root<Job> root = query.from(Job.class);
        
        List<Predicate> predicates = new ArrayList<>();
        if(null != jobBody.getSkills())
            predicates.add(root.join("skills").in(jobBody.getSkills()));
        if(null != jobBody.getLocations())
            predicates.add(root.join("locations").in(jobBody.getLocations()));
    
        query.select(root)
                .where(cb.and(predicates.toArray(new Predicate[predicates.size()])));
        
        return entityManager.createQuery(query)
                .getResultList();
    }
}
