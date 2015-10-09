Router.configure({
	layoutTemplate: 'master_layout'
});

Router.route('/', function () {
	//this.layout('master_layout');
	this.render('home', {to: 'target'});
});

Router.route('/result', function () {
	//this.layout('master_layout');
	this.render('result', {to: 'target'});
});