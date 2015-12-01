package com.music.kpip.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.music.kpip.MusicApplication;
import com.music.kpip.model.Songs;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MusicApplication.class)
public class UsPopServiceImplTest {
	
	@Autowired
	@Qualifier("usPoPService")
	private MusicChartSerice usPopService;
	
	@Test
	public void getSongs() {		
		Songs songs = usPopService.getSongs();
		Assert.assertTrue(songs.getSongs().size() > 0);		
		System.out.println(songs);
	}

}
