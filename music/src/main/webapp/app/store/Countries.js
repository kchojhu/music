Ext.define('MusicPlayer.store.Countries', {
	extend : 'Ext.data.ArrayStore',
	alias : 'store.countries',
	model : 'MusicPlayer.model.Country',
	data : [['United States' ],['Korea' ], ['Japan' ]]
});
