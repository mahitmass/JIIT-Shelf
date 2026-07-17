export const branchSemMap = {
  "CSE": [1, 2, 3, 4],
  "ECE": [1, 2, 3],
  "IT": [1, 2, 3, 4],
  "Mathematics and Computing (M&C)": [1, 2, 3, 4],
  "Robotics and Artificial Intelligence": [1, 2],
};

// Default semester folder IDs (shared across branches for sem 1 & 2)
export const semIdMap = {
  "1": "1wcqXk9t5TfZjwpW2rvjBMKXwwWIrQ4ca",
  "2": "1Rb23Q-_-hZ0NCNPNlPJ9e4px2-wikiVB",
  "3": "1mfEfqFWJ3NkeYmdjM1-YED0GZ9q3Qvt2",
  "4": "1A9FLeKbVnJXS3W5h9iUi2s6tvxqQdC84",
};

// Branch-specific overrides for semesters where subjects differ by branch
// Key format: "BranchName_SemNumber"
export const branchSemIdMap = {
  "ECE_3": "1ZyYkEk_fd-srKrYUddO-01vhz-4CTQ8W",
};

// Helper: resolves the correct Drive folder ID for a given branch + semester
// Checks branch-specific map first, then falls back to the shared semIdMap
export function getSemFolderId(branch, sem) {
  const branchKey = `${branch}_${sem}`;
  if (branchSemIdMap[branchKey]) {
    return branchSemIdMap[branchKey];
  }
  return semIdMap[String(sem)] || null;
}

export const iconMap = {
    "Lectures": "Notebook",
    "Tutorials": "PencilLine",
    "PYQs": "Folders",
    "Books": "LibraryBig"
}

export const ORDER = {
  "Lectures": 1,
  "Lectures-T1": 1,
  "Lectures-T2": 2,
  "Lectures-T3": 3,

  "Module 1": 4,
  "Module 2": 5,
  "Module 3": 6,
  "Module 4": 7,
  "Module 5": 8,
  "Module 6": 9,

  "Tutorials": 10,
  "Assignments": 10,
  "PYQs": 11,
  "yt.txt": 12,
  "Books": 13,
};

