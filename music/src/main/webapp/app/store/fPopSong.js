Ext.define('MusicPlayer.store.FPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.fpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=fr',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
