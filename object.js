//object litreals
// const blogs = [
//     {title : "web developer and student at computer since", like : 40},
//     {tilte : "this is elon musk" , like : 50}
// ];
// console.log(blogs);
let user = {
    name: "shakib",
    age: 20,
    email: "shakibramiz3@gmail.com",
    location: "herat",
    blog: [{title : "web developer and student at computer since", like : 40},
    {tilte : "this is elon musk" , like : 50}],
    login(){
        console.log("the user logged in");
    },
    logout(){
        console.log("the user logged out");
    },
    logBlogs(){
        //console.log(this.blog);
        console.log("this user written the following blogs:")
        this.user.forEach(blog => {
            console.log(blog.tilte, blog.like);
        });
        //console.log(this);
    }
};

user.logBlogs();
console.log(this);

