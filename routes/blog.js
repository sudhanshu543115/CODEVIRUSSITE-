const express = require('express');
const router = express.Router();

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Future Trends In Cyber Security Operations Centers",
    date: "Feb 25, 2025",
    comments: 1,
    image: "/images/blog1.jpg",
    excerpt: "Exploring the latest trends and technologies shaping the future of cybersecurity operations centers.",
    category: "Cybersecurity"
  },
  {
    id: 2,
    title: "Building An Effective Cyber Security Operations Center",
    date: "Feb 26, 2025",
    comments: 2,
    image: "/images/blog2.jpg",
    excerpt: "A comprehensive guide to building and maintaining an effective cybersecurity operations center.",
    category: "Operations"
  },
  {
    id: 3,
    title: "Emerging Technologies In Cyber Security Operations",
    date: "Feb 28, 2025",
    comments: 3,
    image: "/images/blog3.jpg",
    excerpt: "Discover the cutting-edge technologies revolutionizing cybersecurity operations and threat detection.",
    category: "Technology"
  }
];

// @route   GET api/blog
// @desc    Get all blog posts
// @access  Public
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// @route   GET api/blog/:id
// @desc    Get blog post by ID
// @access  Public
router.get('/:id', (req, res) => {
  const post = blogPosts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ msg: 'Blog post not found' });
  }
  res.json(post);
});

module.exports = router;

