import './styles/main.scss';

export const component = (message = 'dev server config') => {
    console.log('executing component code...')
    let ele = document.createElement('div');
    try {
        ele.className =  'container';
        ele.innerHTML = `message is - ${message}`;
    } catch (e) {
        console.log(e)
    }
    console.log('done executing component...')
    return ele;
}
