export const footer = () => {
    console.log('executing footer...')
    let ele = document.createElement('div');
    try {
        ele.className =  'footer';
        ele.innerHTML = 'footer';// + 'element';
    } catch (e) {
        console.log(e)
    }
    console.log('done executing footer...')
    return ele;
}
