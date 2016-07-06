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
