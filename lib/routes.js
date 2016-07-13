FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('homeLayout');
    }
});

FlowRouter.route('/cart', {
    name: 'cart',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'cartPay'
        });
    }
});

FlowRouter.route('/alcohol', {
    name: 'alcohol',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'alcoholProducts'
        });
    }
});

FlowRouter.route('/baby', {
    name: 'baby',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'babyProducts'
        });
    }
});

FlowRouter.route('/bakery', {
    name: 'bakery',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'bakeryProducts'
        });
    }
});

FlowRouter.route('/beverages', {
    name: 'beverages',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'beveragesProducts'
        });
    }
});

FlowRouter.route('/food_cupboard', {
    name: 'food_cupboard',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'food_cupboardProducts'
        });
    }
});

FlowRouter.route('/frozen', {
    name: 'frozen',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'frozenProducts'
        });
    }
});

FlowRouter.route('/fruit_vegetables', {
    name: 'fruit_vegetables',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'fruit_vegetablesProducts'
        });
    }
});

FlowRouter.route('/household', {
    name: 'household',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'householdProducts'
        });
    }
});

FlowRouter.route('/meat_seafood', {
    name: 'meat_seafood',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'meat_seafoodProducts'
        });
    }
});

FlowRouter.route('/pets', {
    name: 'pets',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'petsProducts'
        });
    }
});
//para insertar imagenes
FlowRouter.route('/insert', {
    name: 'insert',
    action() {
        BlazeLayout.render('mainLayout', {
            main: 'insert'
        });
    }
});

// FlowRouter.notFound = {
//     // Subscriptions registered here don't have Fast Render support.
//     subscriptions: function() {
//
//     },
//     action: function() {
//
//     }
// };
