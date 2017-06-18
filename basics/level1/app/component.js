export const component = (message = 'level1') => {
    console.log('in component');
    let body = document.getElementsByTagName('body');
    body[0].innerHTML = message;
    console.log('changed html as message', message);
}
