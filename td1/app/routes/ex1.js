import Route from '@ember/routing/route';
import EmberObject, { computed } from '@ember/object';

const Note = EmberObject.extend({
  content: 'Entrez votre texte',
  MAX: 100,
  info: '',
  size: computed('content', 'MAX', function () {
    if (this.content.length > 0) this.set('info', 'Note modifié.');
    return this.MAX - this.content.length;
  }),
  style: computed('size', 'MAX', 'info', function() {
    if (this.info === 'Note sauvegardée !') return 'alert alert-success';
    else if (this.MAX/5 > this.size) return 'alert alert-danger';
    else if (this.MAX/2 > this.size) return 'alert alert-warning';
    else return 'alert alert-info';
  }),
  alertVisible: computed('info', function () {
    if (this.info.length === 0) return 'hidden';
    else return ''
  })
});

export default Route.extend({
  model() {
    return Note.create();
  }
});
