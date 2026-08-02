const lessonQuestions = [
{
question: "Simplify ⁶⁄₁₈ to its lowest terms.",
correct: "\\frac{1}{3}",
type: "arithmetic",
hint: "Find the greatest common factor of 6 and 18.",
steps: [
"The GCF of 6 and 18 is 6.",
"Divide numerator and denominator by 6: ⁶⁄₁₈ = ⅓."
],
img_question: ""
},
{
question: "Convert ⁹⁄₄ to a mixed number.",
correct: "2\\frac{1}{4}",
type: "arithmetic",
hint: "How many times does 4 go into 9?",
steps: [
"4 goes into 9 two times, with a remainder of 1.",
"So ⁹⁄₄ = 2¼."
],
img_question: ""
},
{
question: "Add: ¼ + ¼",
correct: "\\frac{1}{2}",
type: "arithmetic",
hint: "The denominators are already the same.",
steps: [
"Add the numerators: 1 + 1 = 2.",
"²⁄₄ simplifies to ½."
],
img_question: ""
},
{
question: "Add: ⅓ + ⅙",
correct: "\\frac{1}{2}",
type: "arithmetic",
hint: "Find a common denominator before adding.",
steps: [
"Convert ⅓ to ²⁄₆.",
"Add: ²⁄₆ + ⅙ = ³⁄₆.",
"Simplify: ³⁄₆ = ½."
],
img_question: ""
},
{
question: "Subtract: ⅗ - ¼",
correct: "\\frac{7}{20}",
type: "arithmetic",
hint: "The LCD of 5 and 4 is 20.",
steps: [
"Convert ⅗ to ¹²⁄₂₀ and ¼ to ⁵⁄₂₀.",
"Subtract: ¹²⁄₂₀ - ⁵⁄₂₀ = ⁷⁄₂₀."
],
img_question: ""
},
{
question: "Multiply: ⅔ × ³⁄₅",
correct: "\\frac{2}{5}",
type: "arithmetic",
hint: "Multiply numerators together, then denominators.",
steps: [
"Multiply numerators: 2 × 3 = 6.",
"Multiply denominators: 3 × 5 = 15.",
"Simplify ⁶⁄₁₅ by dividing by 3: ⅖."
],
img_question: ""
},
{
question: "Divide: ¾ ÷ ⅖",
correct: "1\\frac{7}{8}",
type: "arithmetic",
hint: "Keep, change, flip before multiplying.",
steps: [
"Keep ¾, change ÷ to ×, flip ⅖ to ⁵⁄₂.",
"Multiply: ¾ × ⁵⁄₂ = ¹⁵⁄₈.",
"Convert to a mixed number: ¹⁵⁄₈ = 1⅞."
],
img_question: ""
},
{
question: "Add: 1⅓ + ⅚",
correct: "2\\frac{1}{6}",
type: "arithmetic",
hint: "Convert the mixed number to an improper fraction first.",
steps: [
"Convert 1⅓ to ⁴⁄₃.",
"Find the LCD of 3 and 6, which is 6: ⁴⁄₃ = ⁸⁄₆.",
"Add: ⁸⁄₆ + ⅚ = ¹³⁄₆.",
"Convert to a mixed number: ¹³⁄₆ = 2⅙."
],
img_question: ""
},
{
question: "Simplify: (²⁄₃ + ¼) ÷ ⅚",
correct: "1\\frac{1}{6}",
type: "arithmetic",
hint: "Solve inside the parentheses first, using a common denominator.",
steps: [
"Find the LCD of 3 and 4, which is 12: ²⁄₃ = ⁸⁄₁₂ and ¼ = ³⁄₁₂.",
"Add: ⁸⁄₁₂ + ³⁄₁₂ = ¹¹⁄₁₂.",
"Divide by ⅚ using keep, change, flip: ¹¹⁄₁₂ × ⁶⁄₅.",
"Multiply: ¹¹⁄₁₂ × ⁶⁄₅ = ⁶⁶⁄₆₀ = ¹¹⁄₁₀.",
"Convert to a mixed number: ¹¹⁄₁₀ = 1⅒."
],
img_question: ""
},
{
question: "If x is a positive integer and ³⁄₈ < x⁄₁₆ < ⅝, what is the value of x?",
correct: "7",
type: "arithmetic",
hint: "Convert ³⁄₈ and ⅝ to equivalent fractions with a denominator of 16.",
steps: [
"Convert ³⁄₈ to ⁶⁄₁₆ and ⅝ to ¹⁰⁄₁₆.",
"The inequality becomes ⁶⁄₁₆ < x⁄₁₆ < ¹⁰⁄₁₆.",
"So x must be greater than 6 and less than 10.",
"The only value that fits as intended is x = 7."
],
img_question: ""
}, 
];