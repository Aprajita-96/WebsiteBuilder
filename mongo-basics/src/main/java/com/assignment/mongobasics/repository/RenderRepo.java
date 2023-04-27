package com.assignment.mongobasics.repository;


import com.assignment.mongobasics.model.Render;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RenderRepo extends MongoRepository<Render,String> {
}
