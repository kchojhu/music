Ext.define('MusicPlayer.store.UsPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.usPopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/top100?country=us',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
