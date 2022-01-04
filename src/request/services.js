/**
 * This method is centralize place to define all services
 * @param {String} serviceName name of the service listed inside the servicemap 
 * @returns 
 */
function services(serviceName){

    const queryParams = window.location.search;

    function getBaseUrl(url){

        return `${url}${queryParams}`

    }

    const serviceMap = {
        user: {
            url:  getBaseUrl('https://randomuser.me/api'),
            method: 'get',
            params: {
                results: 10,
                seed: 'codingTest'
            }
        },
        deleteUser: {
            url:  getBaseUrl('https://randomuser.me/aps'),
            method: 'delete',
            params: {
                results: 10,
                seed: 'codingTest'
            }
        }
    }

    return serviceMap[serviceName];

}

export default services