Ext.define('MusicPlayer.store.BrPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.brpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=br',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
