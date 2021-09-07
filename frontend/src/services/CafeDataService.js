import http from '../http-common'

class CafeDataService {
    // functions to make api calls and return info from api calls
    // get = get a promise which returns a response object
    getAll(page = 0){
        return http.get(`?page=${page}`)
    }
    
    get(id){
        return http.get(`/id/${id}`)
    }

    find(province, city, page = 0){
        return http.get(`?province=${province}&city=${city}&page=${page}`)
    }

    createReview(data){
        return http.post("/review", data)
    }

    updateReview(data){
        return http.post("/review", data)
    }

    deleteReview(id){
        return http.post(`/review?id=${id}`)
    }
}

export default new CafeDataService();