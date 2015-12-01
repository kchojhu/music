Ext.define('MusicPlayer.store.MPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.mpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=mx',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
