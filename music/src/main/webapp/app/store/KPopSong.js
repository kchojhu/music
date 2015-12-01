Ext.define('MusicPlayer.store.KPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.kpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/top100?country=kpop',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
