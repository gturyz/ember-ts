import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Services = EmberObject.extend({
  services: [],
  countActive: computed('services.@each.active', function () {
    return this.services.filterBy('active', true).get('length');
  }),
  sumActive: computed('services.@each.active', function () {
    let sum = 0;
    this.services.forEach(service => {
      if (service.active) sum += service.price;
    });
    return sum;
  })
});

export default Route.extend({
  model() {
    return Services.create({
      services: [{
        "name": "Web Development",
        "price": 300,
        "active":true
      },{
        "name": "Design",
        "price": 400,
        "active":false
      },{
        "name": "Integration",
        "price": 250,
        "active":false
      },{
        "name": "Formation",
        "price": 220,
        "active":false
      }]
    })
  }
});
