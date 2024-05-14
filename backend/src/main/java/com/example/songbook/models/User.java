package com.example.songbook.models;

import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="id_user_details")
    private long id_user_details;

    @Column(name="id_role")
    private long id_role;
}
