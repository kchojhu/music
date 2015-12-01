Ext.define('MusicPlayer.view.main.Main', {
	extend : 'Ext.tab.Panel',
	xtype : 'app-main',
	id : 'main',

	requires : [ 'Ext.plugin.Viewport', 'MusicPlayer.view.main.*', 'MusicPlayer.store.*', 'MusicPlayer.model.*' ],

	controller : 'main',
	viewModel : 'main',
	ui : 'navigation',
	/*	dockedItems : [ {
			dock : 'top',
			xtype : 'toolbar',
			items : [ {
				xtype : 'tagfield',
				store : {
					type : 'countries'
				},
				flex : 1,
				value : [],
				reference : 'countries',
				displayField : 'country',
				valueField : 'country',
				filterPickList : true,
				listeners : {
					change : function(tag, newValue, oldValue, eOpts) {
						var addedCountries = Ext.Array.difference(newValue, oldValue);
						var removedCountries = Ext.Array.difference(oldValue, newValue);
						var main = tag.up('#main');

						if (addedCountries.length > 0 && addedCountries[0] === 'Japan') {
							debugger;
							var store = Ext.create('Ext.data.Store', {
								extend : 'Ext.data.Store',
								model : 'MusicPlayer.model.Song',
								autoLoad: true,
								proxy : {
									type : 'ajax',
									url : '/chart/top100',
									extraParams: {
										country: addedCountries[0]
									},
									reader : {
										type : 'json',
										rootProperty : 'songs'
									}
								}});
							
							
							main.add({
								xtype : 'musicPanel',
								title : 'JPop',
								storeType2 : store,
								youtubeDivId : 'jpopPlayer'
							});
						}
						
						 
						
					}
				},
				queryMode : 'local',
							publishes : 'value'
			} ]
		} ],*/
	tabBarHeaderPosition : 1,
	titleRotation : 0,
	tabRotation : 0,
	header : {
		layout : {
			align : 'stretchmax',

		},
		title : {
			bind : {
				text : '{name}'
			},
			flex : 0
		},
		iconCls : 'fa-th-list'
	},

	responsiveConfig : {
		tall : {
			headerPosition : 'top',
            title: false
		},
		wide : {
			headerPosition : 'left',
			title: {
				bind: {
					text: '{name}'
				},
				flex: 0
			}
		}
	},
	
    defaults: {
    	scrollable: true,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
	tabBar : {
		flex : 1,
		layout : {
			align : 'stretch',
			overflowHandler : 'scroller'
		}
	},

	headerPosition : 'left',

/*	defaults : {
		tabConfig : {
			iconAlign : 'left',
			textAlign : 'left'
		}

	},*/

	items : [ {
		xtype : 'musicPanel',
		title : 'KPop',
		storeType : 'kpopSong',
		iconCls: 'koreanIcon',
		youtubeDivId : 'kpopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'USPop',
		storeType : 'usPopSong',
		iconCls: 'usaIcon',
		youtubeDivId : 'uspopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'JPop',
		iconCls: 'japanIcon',
		storeType : 'jpopSong',
		youtubeDivId : 'jpopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'FPop',
		iconCls: 'franceIcon',
		storeType : 'fpopSong',
		youtubeDivId : 'fpopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'NZPop',
		storeType : 'nzpopSong',
		youtubeDivId : 'nzpopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'MPop',
		storeType : 'mpopSong',
		youtubeDivId : 'mpopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'GPop',
		storeType : 'depopSong',
		youtubeDivId : 'depopPlayer'
	}, {
		xtype : 'musicPanel',
		title : 'TwPop',
		storeType : 'twpopSong',
		youtubeDivId : 'twpopPlayer'
	}/*, {
		xtype : 'musicPanel',
		title : 'BrPop',
		storeType : 'brpopSong',
		youtubeDivId : 'brpopPlayer'
	}*/ ],

	listeners : {
		tabchange : function(tabPanel, newCard, oldCard) {
			oldCard.fireEvent('pauseVideo');
		}
	}
});
