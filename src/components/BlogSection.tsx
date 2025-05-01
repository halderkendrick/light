
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Blog Post Title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quod, duis voluptate ex sagittis, quas explicabo tempor molestiae, quam tempor.",
    image: "https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "May 01, 2025",
    comments: 42,
  },
  {
    id: 2,
    title: "Blog Post Title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quod, duis voluptate ex sagittis, quas explicabo tempor molestiae, quam tempor.",
    image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "April 28, 2025",
    comments: 15,
  },
  {
    id: 3,
    title: "Blog Post Title",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quod, duis voluptate ex sagittis, quas explicabo tempor molestiae, quam tempor.",
    image: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    date: "April 25, 2025",
    comments: 8,
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">LATEST POSTS</h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat perferendae nostrum qui neque maiores odio. Est expedite quis excepturi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white">
              <Link to={`/blog/${post.id}`} className="block overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="pt-5">
                <h3 className="text-lg font-medium mb-2">
                  <Link to={`/blog/${post.id}`} className="hover:text-gray-600">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-xs uppercase tracking-wide hover:text-black"
                  >
                    Read More <span className="ml-1">→</span>
                  </Link>
                  <div className="flex items-center">
                    <button className="inline-flex items-center hover:text-black">
                      <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      {post.comments}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
