Ext.define('MusicPlayer.store.TwPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.twpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=tw',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
