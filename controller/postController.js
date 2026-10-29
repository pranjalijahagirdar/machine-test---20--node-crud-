const posts = require('../data/postData');

//getAllPost

function getAllPost(req,res){
    try{
        res.status(200).json({
            success:true,
            message:'post blog fetched successfully',
            body:posts
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:'Network Error',
            error:err.message
        });
    }
}

//getSinglePost

function getSinglePost(req,res){
    try{
        let postId = req.params.id;
        let post = posts.find(post=>post.id === postId)
        if(!post){
            res.status(400).json({
                success:false,
                message:`post data with id ${postId} not found`,
            })
        }
        res.status(200).json({
            success:true,
            message:`the post data fetched successfully with id ${postId}`,
            data:post
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:'Network Error',
            error:err.message
        })
    }  
}

//create

function createPost(req,res){
    try{
        let postObj={
            title:req.title,
            body:req.body,
            id:Date.now().toString()
        }
        posts.unshift(postObj)
        res.status(201).json({
            success:true,
            message:'post data created successfully',
            body:postObj
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:'Network Error',
            error:err.message
        })
    }
}

//update

function updatePost(req,res){
    try{
        let updateId = req.params.id;
        let getIndex = posts.findIndex(p=>p.id === updateId)
        if(getIndex === -1){
            return res.status(404).json({
                success:false,
                message:'The post data is not found'
            })
        }
        let obj = posts.find(h=>h.id === updateId)
        let updateObj={
            ...obj,
            ...req.body,
            id:updateId,
        }
        posts[getIndex]=updateObj
        res.status(200).json({
            success:true,
            message:'the post data updated successfully',
            body:updateObj
        })
    }catch(err){
        res.status(500).json({
            success:false,
            message:'Network Error',
            error:err.message
        })
    }
}

//delete

function deletePost(req,res){
    try{
    let removeId = req.params.id;
    let getIndex = posts.findIndex(p=>p.id === removeId)
    if(getIndex === -1){
        res.status(404).json({
            success:false,
            message:`The post data with ${removeId} is not found`
        })
    }
    let deletePost = posts.splice(getIndex, 1)
    res.status(200).json({
        success:true,
        message:`the post data is deleted successfully with id ${removeId}`
    })
}catch(err){
    res.status(500).json({
        success:false,
        message:'Network Error',
        error:err.message
    })
}
}

module.exports={
    getAllPost,
    getSinglePost,
    createPost,
    updatePost,
    deletePost,
}