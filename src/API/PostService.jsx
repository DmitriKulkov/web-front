import axios from "axios";

export default class PostService {
    static async getAll(limit=10, page=1) {
        const response = await axios.get(process.env.REACT_APP_API + '/posts/', {
                params:{
                    _limit: limit,
                    _page: page,
                },
            })
            console.log(response)
        return response
    }

    static async getById(id) {
        const response = await axios.get(process.env.REACT_APP_API + '/posts/' + id)
        return response
    }

    static async getCommentsByPostId(id){
        const response = await axios.get(process.env.REACT_APP_API + `/posts/${id}/comments`)
        return response
    }

    static async createPost(post){
        let response;
        await axios.post(process.env.REACT_APP_API + `/posts`, {...post}).then((r)=>response=r).catch((err)=>console.log(err))
        return response
    }

    static async deletePost(id){
        const response = await  axios.delete(process.env.REACT_APP_API + `/posts/${id}`)
        return response
    }

}