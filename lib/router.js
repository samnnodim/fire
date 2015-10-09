Router.configure({
	layoutTemplate: 'master_layout'
});

Router.route('/', function () {
	this.render('home', {to: 'target'});
});

Router.route('/result', function () {
	this.render('result', {to: 'target'});
});