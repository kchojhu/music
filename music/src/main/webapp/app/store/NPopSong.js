Ext.define('MusicPlayer.store.NzPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.nzpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/ituneTop100?country=nz',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
