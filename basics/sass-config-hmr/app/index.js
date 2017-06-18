import { component } from './component.js';
import footer from './footer.js';

//console.log('component', component);
if(module.hot) {
    footer();
}
component();
