const express = require('express');
const {
  getBootcamp,
  getBootcamps,
  createBootcamp,
  updateBootcamp,
  deleteBootcamps,
  getBootcampsInRadius,
} = require('../controllers/bootcamps');

// Include other resourses routers
const courseRouter = require('./courses');

const router = express.Router();

// Re-route into other resouse routers
router.use('/:bootcampId/courses', courseRouter);

router.route('/radius/:zipcode/:distance').get(getBootcampsInRadius);

router.route('/').get(getBootcamps).post(createBootcamp);
router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamps);

module.exports = router;
