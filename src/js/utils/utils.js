export function getJSON(url) {

    return new Promise( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.setRequestHeader('Accept', 'application/json, text/tavascript, */*; q=0.01');

        xhr.onreadystatechange = () => {
            if(xhr.readyState < 4) {
                return;
            }

            if(xhr.status !== 200) {
                reject(xhr.response);
            }
            if(xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response));
            }

        }
        xhr.send();
    });
}

export function sanitize(string) {
    if(string) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(string));
        return div.innerHTML;
    } else {
        return '';
    }

}
