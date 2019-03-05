import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

export default Route.extend({
model(){
	return {copy:{}};
},
actions:{

	save(model){
		let dev=model.copy;
		dev=this.store.createRecord('developer',dev);
		dev.save().then(this.transitionTo('developers'));

	},
	cancel(){
		this.transitionTo("developers");
	}

}

});
