import './styles/main.scss';

export const component = (message = 'dev server config') => {
    console.log('executing component...')
    let body = document.getElementsByTagName('body')[0];
    let ele = document.createElement('div');
    try {
        ele.className =  'container';
        ele.innerHTML = message;
    } catch (e) {
        console.log(e)
    }
    body.appendChild(ele);
    console.log('done executing component...')
}
