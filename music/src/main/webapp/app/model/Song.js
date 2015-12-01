Ext.define('MusicPlayer.model.Song', {
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'rank',
		type : 'int'
	}, {
		name : 'duration',
		type : 'int'
	}, {
		name : 'artistName',
		type : 'string'
	}, {
		name : 'songName',
		type : 'string'
	} ]
});