/**
 * This method is centralize place to define all services
 * @param {String} serviceName name of the service listed inside the servicemap 
 * @returns 
 */
function services(serviceName){

    const serviceMap = {
        user: {
            url:  'https://randomuser.me/api',
            method: 'get',
            params: {
                results: 10,
                seed: 'codingTest'
            }
        }
    }

    return serviceMap[serviceName];

}

export default services