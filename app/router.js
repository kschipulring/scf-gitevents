import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('git-users', function() {
        this.route('repo', { path: '/:id/repo' }, function() {
          this.route('event', { path: '/:eid/event' }, function() {
            this.route('event-type', { path: '/:etid/event-type' });
          });
        });
    });
});

export default Router;
