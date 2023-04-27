package com.assignment.mongobasics.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Block {
    private  String blockId;
    private Object data;
    private String uuid;
}
