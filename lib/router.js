FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/cart',{
  name: 'cart',
  action(){
    BlazeLayout.render('MainLayout', {main: 'CartLayout'});
  }
});

FlowRouter.route('/alcohol',{
  name: 'alcohol',
  action(){
    BlazeLayout.render('MainLayout', {main: 'alcohoLayout'});
  }
});

FlowRouter.route('/animal',{
  name: 'animal',
  action(){
    BlazeLayout.render('MainLayout', {main: 'animaLayout'});
  }
});

FlowRouter.route('/babie',{
  name: 'babie',
  action(){
    BlazeLayout.render('MainLayout', {main: 'babieLayout'});
  }
});

FlowRouter.route('/bakery',{
  name: 'bakery',
  action(){
    BlazeLayout.render('MainLayout', {main: 'bakeryLayout'});
  }
});
