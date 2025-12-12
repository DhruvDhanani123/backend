const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');

router.get('/', ctrl.getAll);         // GET /api/tasks
router.post('/', ctrl.create);        // POST /api/tasks
router.put('/:id', ctrl.update);      // PUT /api/tasks/:id
router.delete('/:id', ctrl.remove);   // DELETE /api/tasks/:id

module.exports = router;
