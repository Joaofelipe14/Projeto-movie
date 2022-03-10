package com.joaosuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joaosuperior.dsmovie.entities.Score;
import com.joaosuperior.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository <Score, ScorePK> {
	
}
