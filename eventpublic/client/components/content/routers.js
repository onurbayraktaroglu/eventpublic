Router.configure({
  layoutTemplate: 'homeLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/home', {
  name: 'home',
});
