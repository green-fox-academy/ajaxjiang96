/* Blog

Reuse your BlogPost class
Create a Blog class which can
store a list of BlogPosts
add BlogPosts to the list
delete(int) one item at given index
update(int, BlogPost) one item at the given index and update it with another BlogPost
*/

const BlogPost = require('./blog-post');

class Blog {
  constructor() {
    this.posts = [];
  }

  add(post) {
    this.posts.push(post);
  }

  delete(i) {
    if (i <= this.posts.length) this.posts.splice(i, 1);
  }

  update(i, post) {
    if (i <= this.posts.length) this.posts[i] = post;
  }
}

const blog = new Blog();

blog.add(new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', '2000.05.04'));
