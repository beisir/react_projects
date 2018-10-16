export function paramsFilter(obj) {
	let result = '';
	for (let item in obj) {
		result += `&${item}=${encodeURIComponent(obj[item])}`;
	}
	return result ? result.slice(1) : result;
};

export const post = (url, paramsObj) => {
	return _fetch(url, 'POST', paramsObj || {})
}

export const get = (url, paramsObj) => {
    let paramStatus = paramsFilter(paramsObj);
    url = paramStatus.length ? url + '?' + paramStatus : '';
	return _fetch(url, 'GET')
}

export const _fetch = (url, method, paramsObj) => {

    let parmas = {
		method: method,
		credentials: 'include',
		headers: {
			'Accept': 'appliaction/json,text/plain,*/*',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
    };

    if (method.toLocaleLowerCase() === 'post') {
        parmas.body = paramsFilter(paramsObj);
    }


    return fetch(url, parmas).then(res => {
        if (res.status === 200) return res.json()
		res.text().then(text => {
			return Promise.reject(new Error(`${url}-->${text}-->${res.status}`))
		})
	})
}
