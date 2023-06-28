package com.testcrud.TestCRUD.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "tbl_movie")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String title;
    private String director;
    @Column(length = 100)
    private String summary;
    private String genres;

}
