var posts=["2025/03/16/hello-world/","2025/03/16/my-first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };