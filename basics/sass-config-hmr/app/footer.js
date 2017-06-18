export default () => {
    console.log('executing footer...')
    let body = document.getElementsByTagName('body')[0];
    let ele = document.createElement('div');
    try {
        ele.className =  'footer';
        ele.innerHTML = 'footer';
    } catch (e) {
        console.log(e)
    }
    body.appendChild(ele);
    console.log('done executing footer...')
}
