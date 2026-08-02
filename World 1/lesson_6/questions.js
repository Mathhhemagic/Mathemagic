const lessonQuestions = [
{
question: "Convert 72% to a decimal.",
type: "arithmetic",
correct: "0.72",
variable: "",
answerSuffix: "",
hint: "Move the decimal point two places to the left.",
steps: [
"To convert a percent to a decimal, divide by 100 (move the decimal two places left).",
"72% = 72. → 0.72"
],
img_question: ""
},
{
question: "Convert 0.09 to a percentage.",
type: "arithmetic",
correct: "9",
variable: "",
answerSuffix: "%",
hint: "Multiply the decimal by 100.",
steps: [
"To convert a decimal to a percent, multiply by 100 (move the decimal two places right).",
"0.09 × 100 = 9%"
],
img_question: ""
},
{
question: "Convert 35% to a fraction in simplest form.",
type: "arithmetic",
correct: "\\frac{7}{20}",
variable: "",
answerSuffix: "",
hint: "Write the percent over 100, then simplify by finding the GCF.",
steps: [
"Write 35% as a fraction over 100: \\frac{35}{100}.",
"Find the GCF of 35 and 100, which is 5.",
"\\frac{35 ÷ 5}{100 ÷ 5} = \\frac{7}{20}"
],
img_question: ""
},
{
question: "Convert ¾ to a percentage.",
type: "arithmetic",
correct: "75",
variable: "",
answerSuffix: "%",
hint: "Multiply the numerator and denominator by a number that makes the denominator 100.",
steps: [
"Multiply both the numerator and denominator by 25 so the denominator becomes 100.",
"\\frac{3 × 25}{4 × 25} = \\frac{75}{100}",
"\\frac{75}{100} = 75%"
],
img_question: ""
},
{
question: "Convert ⁹⁄₅ to a decimal.",
type: "arithmetic",
correct: "1.8",
variable: "",
answerSuffix: "",
hint: "Divide the numerator by the denominator.",
steps: [
"To convert a fraction to a decimal, divide the numerator by the denominator.",
"9 ÷ 5 = 1.8"
],
img_question: ""
},
{
question: "Convert 0.375 to a fraction in simplest form.",
type: "arithmetic",
correct: "\\frac{3}{8}",
variable: "",
answerSuffix: "",
hint: "Move the decimal three places right, then place the whole number over 10³.",
steps: [
"Move the decimal three places to the right: 0.375 → 375.",
"Place 375 over 10³: \\frac{375}{1000}.",
"Find the GCF of 375 and 1000, which is 125.",
"\\frac{375 ÷ 125}{1000 ÷ 125} = \\frac{3}{8}"
],
img_question: ""
},
{
question: "Convert ¹³⁄₂₀ to a percentage.",
type: "arithmetic",
correct: "65",
variable: "",
answerSuffix: "%",
hint: "Think about what number you can multiply 20 by to get 100.",
steps: [
"Multiply both the numerator and denominator by 5 so the denominator becomes 100.",
"\\frac{13 × 5}{20 × 5} = \\frac{65}{100}",
"\\frac{65}{100} = 65%"
],
img_question: ""
},
{
question: "Which is greatest: 0.7, 68%, or ¹⁷⁄₂₅?",
type: "arithmetic",
correct: "0.7",
variable: "",
answerSuffix: "",
hint: "Convert all three values to decimals so they can be compared directly.",
steps: [
"Convert each value to a decimal.",
"0.7 is already a decimal: 0.7.",
"68% ÷ 100 = 0.68.",
"\\frac{17}{25}: divide 17 ÷ 25 = 0.68.",
"Comparing 0.70, 0.68, and 0.68, the greatest value is 0.7."
],
img_question: ""
},
{
question: "A store marks up an item by ⅜ of its original price. What is this markup expressed as a percentage?",
type: "arithmetic",
correct: "37.5",
variable: "",
answerSuffix: "%",
hint: "Divide the numerator by the denominator, then multiply by 100.",
steps: [
"Divide the numerator by the denominator: 3 ÷ 8 = 0.375.",
"Multiply the decimal by 100 to convert to a percent: 0.375 × 100 = 37.5%."
],
img_question: ""
},
{
question: "A student answered 22 out of 32 questions correctly on a quiz. What percentage of questions did the student answer correctly? Round to the nearest tenth of a percent.",
type: "arithmetic",
correct: "68.8",
variable: "",
answerSuffix: "%",
hint: "Write the result as a fraction, divide, then multiply by 100.",
steps: [
"Write the ratio of correct answers as a fraction: \\frac{22}{32}.",
"Divide the numerator by the denominator: 22 ÷ 32 = 0.6875.",
"Multiply by 100 to convert to a percent: 0.6875 × 100 = 68.75%.",
"Rounded to the nearest tenth: 68.8%."
],
img_question: ""
},

]