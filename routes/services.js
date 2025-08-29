const express = require('express');
const router = express.Router();

// Mock services data
const services = [
  {
    id: 1,
    title: "Cybersecurity Operations Centers",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "shield-check",
    image: "/images/service1.jpg"
  },
  {
    id: 2,
    title: "Incident Response And Management",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "clock",
    image: "/images/service2.jpg"
  },
  {
    id: 3,
    title: "Incident Response Plans And Procedures",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "document-text",
    image: "/images/service3.jpg"
  },
  {
    id: 4,
    title: "Integrating Threat And Intelligence",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "chart-bar",
    image: "/images/service4.jpg"
  },
  {
    id: 5,
    title: "The Role Of Security Analysts In A CSOC",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "users",
    image: "/images/service5.jpg"
  },
  {
    id: 6,
    title: "Challenges In Staffing And Retaining Talent",
    description: "A Cybersecurity Operations Center is a centralized unit that deals with monitoring, detecting, analyzing.",
    icon: "academic-cap",
    image: "/images/service6.jpg"
  }
];

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', (req, res) => {
  res.json(services);
});

// @route   GET api/services/:id
// @desc    Get service by ID
// @access  Public
router.get('/:id', (req, res) => {
  const service = services.find(s => s.id === parseInt(req.params.id));
  if (!service) {
    return res.status(404).json({ msg: 'Service not found' });
  }
  res.json(service);
});

module.exports = router;

