Ext.define('MusicPlayer.store.JPopSong', {
	extend : 'Ext.data.Store',
	alias : 'store.jpopSong',

	model : 'MusicPlayer.model.Song',
	autoLoad: true,
	proxy : {
		type : 'ajax',
		url : '/chart/top100?country=jpop',
		reader : {
			type : 'json',
			rootProperty : 'songs'
		}
	}
});
