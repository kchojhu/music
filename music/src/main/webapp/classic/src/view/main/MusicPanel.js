Ext.define('MusicPlayer.view.main.MusicPanel', {	
	extend : 'Ext.panel.Panel',
    xtype: 'musicPanel',
	requires : [ 'MusicPlayer.view.main.MusicController' ],

	controller : 'music',
	iconCls : 'fa-home',
	layout : 'border',
	
	listeners: {
		pauseVideo: 'pauseVideo'
	},
	
	initComponent: function () {
    	var parentPanel = this;
        Ext.apply(this, {
        	items : [ {
        		region : 'center',
        		xtype : 'mainlist',
        		reference : 'kpopgrid',
        	}, {
        		region : 'south',
        		xtype : 'container',
        		height : 50,
        		layout : {
        			type : "hbox",
        			pack : "center",
        			align : "middle"
        		},
        		split : true,
        		style : {
        			'background-color' : '#404040'
        		},
        		items : [ {
        			xtype : 'container',
        			items : [ {
        				xtype : 'button',
        				iconCls : 'fa fa-backward',
        				handler : 'nextPreviousVideo'
        			}, {
        				xtype : 'button',
        				reference : 'playButton',
        				margin : "0 0 0 10",
        				iconCls : 'fa fa-play',
        				handler : 'playSelectedRecord'
        			}, {
        				xtype : 'button',
        				margin : "0 0 0 10",
        				iconCls : 'fa fa-forward',
        				handler : 'nextPreviousVideo'
        			}, {
        				xtype : 'button',
        				reference : 'replayButton',
        				margin : "0 0 0 10",
        				iconCls : 'fa fa-refresh',
        				handler : 'youtubeRefreshVideo'
        			//						handler : function(button) {
        			//							button.setIconCls(button.iconCls === 'fa fa-refresh' ? 'fa fa-refresh fa-spin' : 'fa fa-refresh');
        			//						}
        			}, {
        				xtype : 'button',
        				reference : 'randomButton',
        				margin : "0 0 0 10",
        				iconCls : 'fa fa-random',
        				handler : 'youtubeRandomVideo'
        			} ]
        		} ]

        	}, {
        		region : 'south',
        		xtype : 'container',
        		layout : 'hbox',
        		maxHeight : 200,
        		minHeight : 200,
        		style : {
        			'background-color' : '#404040'
        		},
        				
        		items : [ {
        			width : 355,
        			height : '100%',
        			html : '<div id="' + parentPanel.youtubeDivId + '"></div>',
        			itemId : 'player',
        			reference : 'player',
        			listeners : {
        				youtubePlayerEventListner : 'youtubePlayerEventListner',
        				afterrender : function(view) {
        					var checkExist = setInterval(function() {
        						if (YT && YT.Player) {
        							clearInterval(checkExist);
        							var parentPanel = view.up('musicPanel');
        							view.player = new YT.Player(parentPanel.youtubeDivId, {
        								height : '200',
        								width : '355',
        								events : {
        									'onReady' : function() {
        										view.player.ready = true;
        									},
        									'onStateChange' : function(event) {
        										view.fireEvent('youtubePlayerEventListner', event, view.player);
        									}
        								}
        							});
        						}
        					}, 100)

        				}
        			}
        		} ]

        	} ]
        });
        this.callParent(arguments);
    },

	

});