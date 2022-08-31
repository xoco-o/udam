import urls from './urls';

const API = {

    get: function (url, callback) {

        // console.log('4444444444',urls.api + url);

        fetch(urls.api + url, { method: 'GET', credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, }).then(function (response) {
            // console.log('response.json()1',response)
            if (response.ok) {
                if (response.status === 204) {
                    return null;
                }
                // console.log('response.json()',response.json())
                return response.json();
            }
            throw new Error(response.status);
        }).then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    success: true,
                    payload: jsonData
                });
            }
        }).catch(error => {
            // console.log('response.json()2',error)
            callback({
                success: false,
                status: isNaN(error.message) ? error.message : parseInt(error.message)
            });
        });
    },

    getSignin: function (url, callback) {
        // console.log(urls.api + url);
        fetch(urls.api + url, { method: 'GET', credentials: 'include', headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, })
            .then((response) => {
                if(response.status === 200){
                    return response.json();
                }else if(response.status===400){
                    alert("Хүсэлт буруу байна. Админд яаралтай хандана уу.");
                }else if(response.status===500){
                    alert("Сервер дээр алдаа гарсан байна. Админд яаралтай хандана уу.");
                }
                return null;
            })
            .then((responseJson) => {
                if(responseJson!==null){
                    callback({
                        success: true,
                        payload: responseJson
                    });
                }
            }).catch(error => {
            callback({
                success: false,
                status: isNaN(error.message) ? error.message : parseInt(error.message)
            });
        });
    },

    delete: function (url, callback) {
        fetch(urls.api + url, {
            credentials: 'same-origin',
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                if (response.status === 204) {
                    return null;
                }
                return response.json();
            }
            throw new Error(response.status);
        }).then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    success: true,
                    payload: jsonData
                });
            }
        }).catch(error => {
            callback({
                success: false,
                status: isNaN(error.message) ? error.message : parseInt(error.message)
            });
        });
    },

    post: function (url, data, callback) {

        NetInfo.getConnectionInfo().then((connectionInfo) => {
            switch (connectionInfo.type) {
                case 'none':
                case 'unknown':
                    ToastAndroid.show(`Интернэт холболтоо шалгана уу!`, ToastAndroid.SHORT);
                    return;
            }
        });

        if (callback === undefined) {
            callback = data;
            data = null;
        }

        fetch(urls.api + url, {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: data
        }).then(function (response) {
            if (response.ok) {
                if (response.status === 204) {
                    return null;
                }
                return response.json();
            }
            throw new Error(response.status);
        }).then(function (jsonData) {
            if (jsonData !== undefined) {
                callback({
                    success: true,
                    payload: jsonData
                });
            }
        }).catch(error => {
            callback({
                success: false,
                status: isNaN(error.message) ? error.message : parseInt(error.message)
            });
            alert(error);
        });
    },
};

export default API;
