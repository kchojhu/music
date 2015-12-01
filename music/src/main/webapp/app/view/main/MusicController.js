/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MusicPlayer.view.main.MusicController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.music',

	pauseVideo: function() {
		var player = this.lookupReference('player').player;
		player.pauseVideo();
		var playButton = this.lookupReference('playButton');
	},

	
	youtubePlayerEventListner : function(event) {
		console.log(event.data);
		var player = this.lookupReference('player').player;
		var playButton = this.lookupReference('playButton');
		var grid = this.lookupReference('kpopgrid');

		// Play event
		if (event.data == 1) {
			playButton.setIconCls('fa fa-pause');
			var selectionModel = grid.getSelectionModel();
			var currentlySelectedRow = selectionModel.getSelection()[0];
			grid.getView().focusRow( currentlySelectedRow);
		}

		// Paused event
		if (event.data == 2) {
			playButton.setIconCls('fa fa-play');
		}
		
		// End event
		if (event.data == 0) {
			playButton.setIconCls('fa fa-pause');

			var replayButton = this.lookupReference('replayButton');
			if (replayButton.iconCls === 'fa fa-refresh fa-spin') {
				player.playVideo();

				return;
			}
			
			this.nextPreviousVideo();

		}
	},

	youtubeRandomVideo: function(button) {
		button.setIconCls(button.iconCls === 'fa fa-random' ? 'fa fa-random fa-spin' : 'fa fa-random');		
	},
	
	youtubeRefreshVideo: function(button) {
		button.setIconCls(button.iconCls === 'fa fa-refresh' ? 'fa fa-refresh fa-spin' : 'fa fa-refresh');		

	},
	
	playSelectedRecord : function() {

		var player = this.lookupReference('player').player;
		var grid = this.lookupReference('kpopgrid');
		var playButton = this.lookupReference('playButton');
		var selectionModel = grid.getSelectionModel();
		var songId = selectionModel.getSelection()[0].get('songId');
		
		if (!player.currentVideoId) {
			grid.getView().focusRow( selectionModel.getSelection()[0] );			
		}
		
		if (player.currentVideoId === songId) {
			if (playButton.iconCls === 'fa fa-pause') {
				player.pauseVideo();
//				playButton.setIconCls('fa fa-play');
			} else {
				player.playVideo();
//				playButton.setIconCls('fa fa-pause');
			}			
			
		} else {
			player.loadVideoById({
				videoId : songId
			});
			
			player.currentVideoId = songId;
//			playButton.setIconCls('fa fa-pause');
			
		}
		

//		button.setIconCls(button.iconCls === 'fa fa-play' ? 'fa fa-pause' : 'fa fa-play');

//		if (button.iconCls === 'fa fa-play') {
//			player.playVideo();
//		} else {
//			player.pauseVideo();
//		}
		

		
	},


	nextPreviousVideo : function(button) {
		
		var player = this.lookupReference('player').player;
		var grid = this.lookupReference('kpopgrid');
		var selectionModel = grid.getSelectionModel();
		
		if (button && button.iconCls === 'fa fa-backward') {
			selectionModel.selectPrevious();			
		} else {
			selectionModel.selectNext();
			
			var randomButton = this.lookupReference('randomButton');
			if (randomButton.iconCls === 'fa fa-random fa-spin') {
				var songSize = grid.getStore().getCount();				
				var randomSongRowIndex = Ext.Number.randomInt(0, songSize - 1);
				var randomSong = grid.getStore().getAt(randomSongRowIndex);
				selectionModel.select(randomSongRowIndex);
				grid.getView().focusRow( randomSong ); 
			}
			
		}
		
		this.playSelectedRecord();

	}

});
