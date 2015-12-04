Router.configure({
	layoutTemplate: 'MasterLayout'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/result', {
	name: 'result',
	controller: 'ResultController',
	where: 'client'
});
