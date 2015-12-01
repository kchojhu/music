/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MusicPlayer.view.main.Main', {
	extend : 'Ext.carousel.Carousel',
	xtype : 'app-main',
	//	defaults : {
	//		styleHtmlContent : true
	//	},

	items : [ {
		xtype : 'container',
		layout : 'vbox',
		items : [ {
			xtype : 'panel',

			iconCls : 'team',
			layout : 'vbox',
			scrollable : 'vertical',

			items : [ {
				docked : 'top',
				xtype : 'titlebar',
				title : 'KPOP',
				flex : 1
			}, {
				xtype : 'list',
				itemTpl : '{title}',
				flex : 1,
				data : [ {
					title : 'Item 1'
				}, {
					title : 'Item 2'
				}, {
					title : 'Item 3'
				}, {
					title : 'Item 4'
				} ]
			} ]
		} ]
	}

	/*	          {

		}*/, {
			xtype : 'list',
			itemTpl : '{title}',
			flex : 1,
			data : [ {
				title : 'Item 1'
			}, {
				title : 'Item 2'
			}, {
				title : 'Item 3'
			}, {
				title : 'Item 4'
			} ]
		}, {
		html : 'Item 3'
	} ]
/*    requires: [
        'Ext.MessageBox',

        'MusicPlayer.view.main.MainController',
        'MusicPlayer.view.main.MainModel',
        'MusicPlayer.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    defaults: {
        tab: {
            iconAlign: 'top'
        },
        styleHtmlContent: true
    },

    tabBarPosition: 'bottom',

    items: [
        {
            title: 'Home',
            iconCls: 'x-fa fa-home',
            layout: 'fit',
            // The following grid shares a store with the classic version's grid as well!
            items: [{
                xtype: 'mainlist'
            }]
        },{
            title: 'Users',
            iconCls: 'x-fa fa-user',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Groups',
            iconCls: 'x-fa fa-users',
            bind: {
                html: '{loremIpsum}'
            }
        },{
            title: 'Settings',
            iconCls: 'x-fa fa-cog',
            bind: {
                html: '{loremIpsum}'
            }
        }
    ]*/
});
