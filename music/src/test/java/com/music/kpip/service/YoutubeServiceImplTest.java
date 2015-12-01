package com.music.kpip.service;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.music.kpip.MusicApplication;
import com.music.kpip.model.Song;
import com.music.kpip.service.YoutubeService;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = MusicApplication.class)
public class YoutubeServiceImplTest {
	
	@Autowired
	private YoutubeService youtubeService;
	
	@Test
	public void getSong() {
		Song song = new Song();
		song.setRank(1);
		song.setArtistName("bigbang");
		song.setSongName("bang bang bang");
		song = youtubeService.getSong(song);
		
		System.err.println(song);
		Assert.assertNotNull(song.getSongId());
	}
	
}
