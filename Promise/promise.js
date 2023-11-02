const posts = [];
let lastUserActivityTime = null;

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastUserActivityTime = new Date();
            resolve();
        }, 1000);
    });
}

function createPost(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function deleteLastPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("No posts to delete");
            }
        }, 1000);
    });
}
const newPost = { title: "My New Post" };
Promise.all([createPost({ title: "New Post" }), updateLastUserActivityTime()])
    .then(() => {
        console.log("Posts:", posts);
        console.log("Last Activity Time:", lastUserActivityTime);

        return deleteLastPost();
    })
    .then((deletedPost) => {
        console.log("Deleted Post:", deletedPost);
        console.log("Updated Posts:", posts);
    })
    .catch((error) => {
        console.log("Error:", error);
    });