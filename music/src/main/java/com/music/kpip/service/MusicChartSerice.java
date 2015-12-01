package com.music.kpip.service;

import com.music.kpip.model.Songs;

public interface MusicChartSerice {

	Songs getSongs();
	
	Songs getSongs(String country);
	
}
