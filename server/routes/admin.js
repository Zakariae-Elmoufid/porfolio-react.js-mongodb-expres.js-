const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');  


router.post('/projects/', authMiddleware, projectController.createProject);
router.get('/projects/', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);
router.put('/projects/:id', authMiddleware, projectController.updateProject);
router.delete('/projects/:id', authMiddleware, projectController.deleteProject);

module.exports = router;

