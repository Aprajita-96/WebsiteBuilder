package com.assignment.mongobasics.model;

import lombok.Data;

import java.util.List;

@Data
public class Layout {
    private List<Block> blocks;
    private String currentBlockID;
    private String documentId;
    private String selectedBlockUuid;
    private String webpageName;
}
