Router.configure({
	layoutTemplate: 'layout'
	//loadingTemplate: 'loading',
	//notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'indexPage',
});

Router.route('/hw/steckdosen', {
	name: 'hwSteckdosenPage',
});