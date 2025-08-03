// validateCourses.js
import { courses } from "./src/data/courses.js";

let hasError = false;

courses.forEach((course, i) => {
  if (!course.dateAdded) {
    console.error(`❌ ERROR: Course "${course.name}" (index: ${i}) is missing "dateAdded" field.`);
    hasError = true;
  } else {
    // Validate date format YYYY-MM-DD
    if (!/^\d{4}-\d{2}-\d{2}$/.test(course.dateAdded)) {
      console.error(`❌ ERROR: Course "${course.name}" has invalid date format. Use YYYY-MM-DD.`);
      hasError = true;
    }
  }
});

if (hasError) {
  console.error("\nFix the above errors before committing!\n");
  process.exit(1);
} else {
  console.log("✅ All courses have valid 'dateAdded' fields!");
}
