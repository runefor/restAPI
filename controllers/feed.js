exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'First Post', content: 'This is the first post!'}]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    // 201은 리소스를 생성했음을 나타내는 상태코드이다.
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            id: new Date().toISOString(), 
            title: title, 
            content: content
        }
    })
}