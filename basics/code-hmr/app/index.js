import { component } from './component.js';
import { footer } from './footer.js';

let body = document.getElementsByTagName('body')[0];

//if (module.hot) {
let compEle =  component();
//}
let footerEle = footer();


body.appendChild(compEle);
body.appendChild(footerEle);

if (module.hot) {
    // module.hot.accept('./component', () => {
    //     const nextComponent = component();
    //     document.body.replaceChild(nextComponent, compEle);
    //     compEle = nextComponent;
    // });

    module.hot.accept('./footer', () => {
        console.log('--------- hot accept -------');
        const nextComponent = footer();
        document.body.replaceChild(nextComponent, footerEle);
        footerEle = nextComponent;
    });    

}
