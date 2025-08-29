const express = require('express');
const router = express.Router();

// Mock project data
const projects = [
  {
    id: 1,
    title: "Cyber Security Enhancement For Smart Devices",
    category: "Secure Authentication",
    image: "/images/project1.jpg",
    description: "Advanced security solutions for IoT and smart device protection"
  },
  {
    id: 2,
    title: "Advanced Cyber Defense & Operations Center",
    category: "Identity Verification",
    image: "/images/project2.jpg",
    description: "Comprehensive cybersecurity operations center implementation"
  },
  {
    id: 3,
    title: "24/7 Security Monitoring & Incident Response",
    category: "Authentication Solutions",
    image: "/images/project3.jpg",
    description: "Round-the-clock security monitoring and rapid incident response"
  },
  {
    id: 4,
    title: "Cybersecurity Operations & Threat Management",
    category: "Authentication Strategies",
    image: "/images/project4.jpg",
    description: "Integrated threat management and cybersecurity operations"
  }
];

// @route   GET api/projects
// @desc    Get all projects
// @access  Public
router.get('/', (req, res) => {
  res.json(projects);
});

// @route   GET api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({ msg: 'Project not found' });
  }
  res.json(project);
});

module.exports = router;

