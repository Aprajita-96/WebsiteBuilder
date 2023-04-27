package com.assignment.mongobasics.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "renderPages")
public class Render {
    @Id
    private String fileName;
    private Layout layout;
    private Config config;

}
