const myPosts = [
    {title:"post one" ,body: "This is the post of my body"},
    {title:"post two" ,body: "This is the post of my body"},


];
function getPosts(){
    setTimeout(()=>{
        myPosts.forEach((post)=>{
            console.log(post.title);
        })
        console.log(myPosts);
    },1000);
}
function createPost(post){
    setTimeout(()=>{
        myPosts.push(post);
    },5000);
    
}

getPosts();
createPost({title: 'post 3', body: 'this the post 3 body'});
getPosts();