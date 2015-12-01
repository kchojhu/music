Ext.define('MusicPlayer.store.DePopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.depopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=de',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
