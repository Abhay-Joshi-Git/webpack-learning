export const component = (message = 'dev server config') => {
    let body = document.getElementsByTagName('body');
    body[0].innerHTML = message;
}
