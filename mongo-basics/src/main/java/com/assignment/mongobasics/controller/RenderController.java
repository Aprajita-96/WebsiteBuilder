package com.assignment.mongobasics.controller;

import com.assignment.mongobasics.model.*;
import com.assignment.mongobasics.repository.RenderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class RenderController {
    private RenderRepo renderRepo;
    @Autowired
    public RenderController(RenderRepo renderRepo){
        this.renderRepo=renderRepo;
    }
    @GetMapping("/pages")
    public List<Render> getAllPages(){
        return renderRepo.findAll();
    }
    @PostMapping("/pages")
    public ResponseEntity<?> savedata(@RequestBody Render render){
        return new ResponseEntity<>(renderRepo.save(render),HttpStatus.CREATED);
    }
    @DeleteMapping("/pages/{fileName}")
    public ResponseEntity<?> deleteData(@PathVariable String fileName){
        Optional<Render> render=renderRepo.findById(fileName);
        renderRepo.delete(render.get());
        return new ResponseEntity<>(HttpStatus.OK);
    }

//   @PutMapping("/pages")
//    public ResponseEntity<?> updateData(@RequestBody Render render){
//        return new ResponseEntity<>(renderRepo.)
//   }
}
