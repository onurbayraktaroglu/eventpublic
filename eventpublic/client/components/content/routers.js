Router.configure({
  layoutTemplate: 'homeLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/home', {
  name: 'home',
});

Router.route('/event-detail', {
  name: 'eventDetail',
});