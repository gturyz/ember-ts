import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return this.store.findAll('developer');
	},
	actions:{
		delete(dev){
			this.transitionTo('developers.confirm-delete','1','2')
			//dev.deleteRecord();
			//dev.save();
			//dev.destroyRecord();
		},


	}
});
