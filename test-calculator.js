// Simple test script to verify GWA calculation logic
const testCases = [
  {
    name: "Basic test case",
    subjects: [
      { grade: 90, units: 3 },
      { grade: 80, units: 3 },
      { grade: 85, units: 4 }
    ],
    expected: 84.71
  },
  {
    name: "Single subject",
    subjects: [
      { grade: 95, units: 3 }
    ],
    expected: 95.00
  },
  {
    name: "Mixed grades",
    subjects: [
      { grade: 92, units: 3 },
      { grade: 88, units: 3 },
      { grade: 90, units: 4 }
    ],
    expected: 90.00
  }
];

function calculateGWA(subjects) {
  if (subjects.length === 0) {
    return 0;
  }

  const totalWeighted = subjects.reduce((sum, subject) => {
    return sum + (subject.grade * subject.units);
  }, 0);

  const totalUnits = subjects.reduce((sum, subject) => {
    return sum + subject.units;
  }, 0);

  const calculatedGWA = totalUnits > 0 ? totalWeighted / totalUnits : 0;
  return Math.round(calculatedGWA * 100) / 100;
}

console.log("🧮 Testing GWA Calculator Logic\n");

testCases.forEach((testCase, index) => {
  const result = calculateGWA(testCase.subjects);
  const passed = Math.abs(result - testCase.expected) < 0.01;

  console.log(`Test ${index + 1}: ${testCase.name}`);
  console.log(`Input: ${JSON.stringify(testCase.subjects)}`);
  console.log(`Expected: ${testCase.expected}, Got: ${result}`);
  console.log(`Status: ${passed ? '✅ PASS' : '❌ FAIL'}\n`);
});

console.log("✨ Calculator functionality test completed!");