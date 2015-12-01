/**
 * This view is an example list of people.
 */
Ext.define('MusicPlayer.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    layout: 'fit',
    autoScroll: true,
    requires: [
        'MusicPlayer.store.KPopSong'
    ],
    initComponent: function () {
    	
    	var parentPanel = this.up('musicPanel');
    	
        Ext.apply(this, {
            store: parentPanel.storeType2 || {
                type: parentPanel.storeType,
                grid: this,
                listeners: {
                	refresh: function(store) {
                		console.log('store load');
                		store.grid.getSelectionModel().select(0);                		
                	}
                }
            },
        });
        this.callParent(arguments);
    },


    columns: [
        { text: 'Rank',  dataIndex: 'rank' },
        { text: 'Title', dataIndex: 'songName', flex: 4 },
        { text: 'Artist Name', dataIndex: 'artistName', flex: 2}
    ],

    listeners: {
    	rowdblclick: 'playSelectedRecord'
//        select: 'onItemSelected'
    }
});
