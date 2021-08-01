const express = require('express');
const {
  getCourses,
  getCourse,
  updateCourse,
  addCourse,
  deleteCourse,
} = require('../controllers/courses');

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses).post(addCourse);

router.route('/:id').get(getCourse).put(updateCourse).delete(deleteCourse);

module.exports = router;
