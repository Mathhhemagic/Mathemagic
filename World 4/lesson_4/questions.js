const lessonQuestions = [
{
question: "The graph of f(x) = x² is shifted 4 units to the right. Which coordinate on the original graph becomes the vertex of the new graph?",
type: "arithmetic",
correct: "4",
variable: "",
answerSuffix: "",
hint: "The original vertex is at (0, 0). A shift right changes only its x-coordinate.",
steps: [
"The vertex of f(x) = x² is (0, 0).",
"Shifting the graph 4 units to the right moves the vertex to (4, 0).",
"The x-coordinate of the new vertex is 4."
],
img_question: ""
},
{
question: "The graph of f(x) = x² is shifted 3 units down. What is the y-coordinate of the new vertex?",
type: "arithmetic",
correct: "-3",
variable: "",
answerSuffix: "",
hint: "The original vertex is at (0, 0). A downward shift changes its y-coordinate.",
steps: [
"The vertex of f(x) = x² is (0, 0).",
"Shifting the graph 3 units down moves the vertex to (0, −3).",
"The y-coordinate of the new vertex is −3."
],
img_question: ""
},
{
question: "A parabola has equation f(x) = x². The graph is shifted left 2 units and up 5 units, giving the equation (x + 2)² + k. What is the value of k?",
type: "algebra",
correct: "5",
variable: "k",
answerSuffix: "",
hint: "A left shift changes the expression inside the parentheses, while an upward shift changes the expression outside.",
steps: [
"A shift left 2 units gives (x + 2)².",
"A shift up 5 units gives (x + 2)² + 5.",
"The constant added outside is 5, so k = 5."
],
img_question: ""
},
{
question: "The graph of f(x) = x² is transformed into g(x) = 3(x − 2)². Compared with f(x), what number represents the graph shifting 2 units to the right?",
type: "arithmetic",
correct: "2",
variable: "",
answerSuffix: "",
hint: "There are two changes: one inside the parentheses and one outside.",
steps: [
"The expression x − 2 shifts the graph 2 units to the right, so the number is 2.",
],
img_question: ""
},
{
question: "The graph of f(x) = x² is transformed into g(x) = −(x + 3)². Where is the x-coordinate of the vertex of g(x)?",
type: "algebra",
correct: "-3",
variable: "x",
answerSuffix: "",
hint: "The expression inside the parentheses determines the horizontal shift.",
steps: [
"The expression x + 3 shifts the graph 3 units to the left.",
"The vertex moves from (0, 0) to (−3, 0).",
"The x-coordinate of the vertex is −3."
],
img_question: ""
},
{
question: "The graph of f(x) = √x is transformed into g(x) = √(x − 4) + 2. What is the y-coordinate of the starting point of g(x)?",
type: "arithmetic",
correct: "2",
variable: "",
answerSuffix: "",
hint: "The basic square-root graph starts at (0, 0). Determine how the transformations move that point.",
steps: [
"The expression x − 4 shifts the graph 4 units to the right.",
"The +2 shifts the graph 2 units up.",
"The starting point moves from (0, 0) to (4, 2).",
"The y-coordinate is 2."
],
img_question: ""
},
{
question: "The graph of f(x) = |x| is transformed into g(x) = −2|x − 1| + 3. What is the y-coordinate of the vertex of g(x)?",
type: "arithmetic",
correct: "3",
variable: "",
answerSuffix: "",
hint: "The number added outside the absolute value affects the vertical position of the vertex.",
steps: [
"The expression x − 1 shifts the graph 1 unit to the right.",
"The +3 shifts the graph 3 units up.",
"The vertex of the original graph is (0, 0), so the new vertex is (1, 3).",
"The y-coordinate is 3."
],
img_question: ""
},
{
question: "A function f has vertex (2, -1). The graph of g(x) = f(x) + 4 is created from f. What is the y-coordinate of the point on g that corresponds to the point (2, −1) on f?",
type: "arithmetic",
correct: "3",
variable: "",
answerSuffix: "",
hint: "Adding 4 outside the function shifts every point vertically.",
steps: [
"The transformation g(x) = f(x) + 4 shifts the graph up 4 units.",
"The point (2, −1) moves to (2, 3).",
"The y-coordinate is 3."
],
img_question: ""
},
{
question: "The graph of f(x) = x² is transformed into g(x) = −½(x − 2)² + 6. What is the x-coordinate of the vertex of g(x)?",
type: "arithmetic",
correct: "2",
variable: "",
answerSuffix: "",
hint: "The horizontal position of the vertex is determined by the expression inside the parentheses.",
steps: [
"The expression x − 2 shifts the graph 2 units to the right.",
"The vertex of f(x) = x² is (0, 0), so the new vertex has x-coordinate 2.",
"The x-coordinate of the vertex is 2."
],
img_question: ""
},
{
  question: "The graph of f(x) = √x is transformed into g(x) = 2√(x + 1) − 3. What is the x-coordinate of the starting point of g(x)?",
  type: "arithmetic",
  correct: "-1",
  variable: "",
  answerSuffix: "",
  hint: "The expression inside the square root determines the horizontal shift. The starting point of √x is (0, 0).",
  steps: [
    "The expression x + 1 shifts the graph 1 unit to the left.",
    "The starting point moves from (0, 0) to (−1, 0).",
    "The vertical transformations (multiply by 2 and subtract 3) don't change the x-coordinate.",
    "The x-coordinate of the starting point is −1."
  ],
  img_question: ""
}

];