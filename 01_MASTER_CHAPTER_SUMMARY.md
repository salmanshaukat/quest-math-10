# MASTER CHAPTER SUMMARY
## 10th Grade Mathematics -- Federal Board Pakistan
### National Curriculum 2022-23 | National Book Foundation

---

> **Purpose:** This document serves as the #1 reference for both teachers and students. It covers all 12 chapters of the Grade 10 Mathematics textbook with learning objectives, core concepts, key formulas, worked examples, important diagrams, common mistakes, and chapter connections.

---

# Table of Contents

1. [Chapter 1: Complex Numbers](#chapter-1-complex-numbers)
2. [Chapter 2: Quadratic Equations](#chapter-2-quadratic-equations)
3. [Chapter 3: Matrices and Determinants](#chapter-3-matrices-and-determinants)
4. [Chapter 4: Linear and Quadratic Inequalities](#chapter-4-linear-and-quadratic-inequalities)
5. [Chapter 5: Algebraic Fractions](#chapter-5-algebraic-fractions)
6. [Chapter 6: Functions and Graphs](#chapter-6-functions-and-graphs)
7. [Chapter 7: Vectors in Plane](#chapter-7-vectors-in-plane)
8. [Chapter 8: Application of Trigonometry](#chapter-8-application-of-trigonometry)
9. [Chapter 9: Chords and Arcs of a Circle](#chapter-9-chords-and-arcs-of-a-circle)
10. [Chapter 10: Tangents and Angles of a Circle](#chapter-10-tangents-and-angles-of-a-circle)
11. [Chapter 11: Practical Geometry of Circles](#chapter-11-practical-geometry-of-circles)
12. [Chapter 12: Basic Statistics](#chapter-12-basic-statistics)

---

# Chapter 1: Complex Numbers
**(Pages 6--26)**

## 1.1 Learning Objectives

After studying this chapter, students will be able to:

- Recognize complex numbers, conjugate, and modulus of complex numbers
- Apply basic operations (addition, subtraction, multiplication, division) on complex numbers
- Define commutative, associative, and distributive laws for complex numbers
- Recognize additive and multiplicative identity; find additive and multiplicative inverse of complex numbers
- Find real and imaginary parts of (x + iy)^n for n = 1, 2, ...
- Find solutions of equations having complex values
- Apply the geometric interpretation of complex numbers (Argand diagram)
- Solve daily life problems involving complex numbers (e.g., electrical impedance)

## 1.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Imaginary Unit (i)** | i = sqrt(-1), where i^2 = -1 |
| **Complex Number** | Any number of the form a + bi, where a, b are real numbers. a is the real part, b is the imaginary part |
| **Pure Imaginary Number** | A complex number where a = 0 and b != 0 (e.g., 5i, -3i) |
| **Conjugate** | The conjugate of z = a + bi is z-bar = a - bi |
| **Modulus** | \|z\| = sqrt(a^2 + b^2) for z = a + bi |
| **Additive Identity** | 0 + 0i = 0 |
| **Multiplicative Identity** | 1 + 0i = 1 |
| **Additive Inverse** | For z = a + bi, the additive inverse is -a - bi |
| **Multiplicative Inverse** | For z = a + bi, z^(-1) = (a - bi) / (a^2 + b^2) |
| **Set C** | The set of all complex numbers. R is a subset of C |

**Powers of i (Cyclic Pattern):**
- i^1 = i
- i^2 = -1
- i^3 = -i
- i^4 = 1
- i^(4k) = 1, i^(4k+1) = i, i^(4k+2) = -1, i^(4k+3) = -i

**Classification Tree:**
Complex numbers split into Imaginary (b != 0) and Real (b = 0). Imaginary further splits into Complex (a != 0, b != 0) and Pure Imaginary (a = 0, b != 0). Real splits into Irrational and Rational.

## 1.3 Key Formulas

| Formula | Description |
|---------|-------------|
| (a + bi) + (c + di) = (a + c) + (b + d)i | Addition |
| (a + bi) - (c + di) = (a - c) + (b - d)i | Subtraction |
| (a + bi)(c + di) = (ac - bd) + (ad + bc)i | Multiplication |
| (a + bi) / (c + di) = [(ac + bd) + (bc - ad)i] / (c^2 + d^2) | Division (multiply by conjugate) |
| \|z\| = sqrt(a^2 + b^2) | Modulus |
| z * z-bar = a^2 + b^2 = \|z\|^2 | Product with conjugate |
| z^(-1) = z-bar / \|z\|^2 | Multiplicative inverse |

**Properties:**
- Commutative: z1 + z2 = z2 + z1; z1 * z2 = z2 * z1
- Associative: (z1 + z2) + z3 = z1 + (z2 + z3)
- Distributive: z1(z2 + z3) = z1*z2 + z1*z3

## 1.4 Worked Examples Summary

**Example 1: Express sqrt(-5) in terms of i**
- sqrt(-5) = sqrt(-1 * 5) = sqrt(-1) * sqrt(5) = i*sqrt(5)

**Example 2: Multiply and divide complex numbers**
- Given z1 = 5.5 + 5i and z2 = 7.7 + 7i:
  - z1 + z2 = 13.2 + 12i
  - z1 * z2 = (5.5)(7.7) - (5)(7) + [(5.5)(7) + (5)(7.7)]i = 7.35 + 77i
  - z1 / z2: Multiply numerator and denominator by conjugate of z2 (7.7 - 7i)

**Example 3: Electrical impedance application**
- Given: Two impedances in parallel Z1 = 25 + 50J, Z2 = 100 + 50J
- Total impedance: Z = (Z1 * Z2) / (Z1 + Z2) = 1 + 2J ohms

## 1.5 Important Diagrams

- **Page 8 -- Complex Number Classification Tree:** Hierarchical chart showing relationship between complex, imaginary, pure imaginary, real, rational, and irrational numbers. Top node: "The complex number a + bi"; branches to Imaginary (b != 0) and Real (b = 0), each further subdividing. (Batch 01)
- **Argand Diagram (Geometric Representation):** Complex number a + bi plotted on a plane with real part on x-axis and imaginary part on y-axis. The distance from origin is the modulus.

## 1.6 Common Mistakes to Avoid

1. **Forgetting i^2 = -1:** When multiplying complex numbers, students often forget to substitute i^2 = -1
2. **Division errors:** Forgetting to multiply BOTH numerator and denominator by the conjugate of the denominator
3. **Confusing modulus and conjugate:** Modulus is a real number (sqrt(a^2 + b^2)), conjugate is a complex number (a - bi)
4. **Powers of i:** Not using the cyclic pattern (period 4) to simplify higher powers of i
5. **sqrt(-a) * sqrt(-b) != sqrt(ab):** This rule only works for positive numbers. sqrt(-5) * sqrt(-20) = i*sqrt(5) * i*sqrt(20) = i^2 * sqrt(100) = -10, NOT +10

## 1.7 Chapter Connections

- **Chapter 2 (Quadratic Equations):** Complex numbers appear as roots when the discriminant b^2 - 4ac < 0
- **Chapter 3 (Matrices):** Complex entries can appear in matrices; operations follow the same rules
- **Chapter 8 (Trigonometry):** Modulus and argument connect to polar form of complex numbers
- **Real-world:** Electrical engineering (impedance), signal processing, quantum mechanics

---

# Chapter 2: Quadratic Equations
**(Pages 27--54)**

## 2.1 Learning Objectives

After studying this chapter, students will be able to:

- Define quadratic equations
- Solve quadratic equations by graphical method, factorization, and completing squares
- Derive the quadratic formula and use it to solve quadratic equations
- Solve equations reducible to quadratic form (reciprocal, exponential, radical)
- Solve simultaneous equations (one homogeneous and one linear)
- Determine the nature of roots using the discriminant
- Find relations between roots and coefficients
- Define and evaluate symmetric functions of roots
- Form a quadratic equation when its roots are given

## 2.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Quadratic Equation** | An equation of the form ax^2 + bx + c = 0, where a != 0, degree = 2 |
| **Standard Form** | ax^2 + bx + c = 0 |
| **Roots/Solutions** | Values of x that satisfy the equation |
| **Zero of a function** | The x-value where the graph crosses the x-axis |
| **Discriminant** | D = b^2 - 4ac |
| **Nature of Roots** | D > 0: two distinct real roots; D = 0: two equal real roots; D < 0: two complex conjugate roots |
| **Symmetric Functions** | Expressions like S1^2 + S2^2, (S1 - S2)^2 that can be expressed in terms of sum and product of roots |

**Four Methods of Solving:**
1. **Graphing Method:** Plot y = ax^2 + bx + c; x-intercepts are the roots
2. **Factorization:** Factor ax^2 + bx + c = 0 into (px + q)(rx + s) = 0, then solve
3. **Completing the Square:** Rewrite as a(x + b/2a)^2 = (b^2 - 4ac)/4a
4. **Quadratic Formula:** x = [-b +/- sqrt(b^2 - 4ac)] / 2a

## 2.3 Key Formulas

| Formula | Description |
|---------|-------------|
| x = [-b +/- sqrt(b^2 - 4ac)] / 2a | Quadratic formula |
| D = b^2 - 4ac | Discriminant |
| S1 + S2 = -b/a | Sum of roots |
| S1 * S2 = c/a | Product of roots |
| x^2 - (sum)x + (product) = 0 | Forming equation from roots |
| S1^2 + S2^2 = (S1 + S2)^2 - 2(S1*S2) | Symmetric function identity |
| (S1 - S2)^2 = (S1 + S2)^2 - 4(S1*S2) | Difference of roots squared |

**Equations Reducible to Quadratic Form:**
- Reciprocal equations: ax^4 + bx^3 + cx^2 + bx + a = 0 (divide by x^2, substitute y = x + 1/x)
- Exponential equations: a^(2x) + b*a^x + c = 0 (substitute y = a^x)
- Radical equations: Substitute to eliminate radicals

## 2.4 Worked Examples Summary

**Example 1: Solving by completing the square**
- Solve 2x^2 - 8x + 3 = 0
- Step 1: x^2 - 4x + 3/2 = 0
- Step 2: x^2 - 4x + 4 = -3/2 + 4 = 5/2
- Step 3: (x - 2)^2 = 5/2
- Step 4: x = 2 +/- sqrt(5/2)

**Example 2: Finding symmetric functions of roots**
- Given x^2 - 8x + 20 = 0, S1 + S2 = 8, S1*S2 = 20
- S1^2 + S2^2 = (8)^2 - 2(20) = 64 - 40 = 24
- (S1 - S2)^2 = (8)^2 - 4(20) = 64 - 80 = -16 (complex roots)
- 1/(S1+1) + 1/(S2+1) = (S1+S2+2)/(S1*S2+S1+S2+1) = 10/29

**Example 3: Word problem (swimming pool)**
- Pool area = 192 m^2, total dimensions 16 x 20 m with uniform sidewalk width x
- Equation: (20-2x)(16-2x) = 192 => 4x^2 - 72x + 128 = 0 => x^2 - 18x + 32 = 0
- Solutions: x = 2 or x = 16 (reject 16 as impractical), so sidewalk = 2 m

## 2.5 Important Diagrams

- **Page 29 -- Parabola Graph:** Graph of y = x^2 - 18x + 32 showing two x-intercepts at x = 2 and x = 16, demonstrating the graphical method of solving quadratic equations (Batch 01)
- **Page 133 -- Linear and Quadratic Simultaneous Solution:** Coordinate plane showing intersection of f(x) = 2x + 1 (straight line) and g(x) = x^2 - x + 3 (parabola) at points (1, 3) and (2, 5) (Batch 03)

## 2.6 Common Mistakes to Avoid

1. **Not writing in standard form first:** Always rearrange to ax^2 + bx + c = 0 before applying any method
2. **Sign errors in quadratic formula:** Be careful with -b (the negative of b, not just b)
3. **Forgetting both roots:** A quadratic always has TWO roots (which may be equal or complex)
4. **Discriminant interpretation:** D < 0 means complex roots, NOT "no solution"
5. **Sum of roots sign:** Sum = -b/a (note the negative sign)
6. **Extraneous solutions:** When solving reducible equations, always verify solutions in the original equation

## 2.7 Chapter Connections

- **Chapter 1 (Complex Numbers):** When D < 0, roots are complex numbers of the form a + bi
- **Chapter 4 (Inequalities):** Quadratic inequalities use the same factoring/formula techniques
- **Chapter 6 (Functions & Graphs):** Parabola graphs, vertex form h = -b/2a, k = c - b^2/4a
- **Chapter 3 (Matrices):** Cramer's rule can be used for simultaneous equations

---

# Chapter 3: Matrices and Determinants
**(Pages 55--77)**

## 3.1 Learning Objectives

After studying this chapter, students will be able to:

- Display information in the form of matrices of order 2
- Calculate product of scalar quantity and a matrix
- Solve situations involving sum, difference, and product of two matrices
- Evaluate the determinant and inverse of a 2x2 matrix
- Solve simultaneous linear equations using matrix inversion method and Cramer's rule
- Explain how mathematics plays a key role in scientific and technological development
- Apply concepts of matrices to real-world problems

## 3.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Matrix** | A rectangular arrangement of numbers in rows and columns |
| **Order** | m-by-n (m rows, n columns) |
| **Equal Matrices** | Same order AND same corresponding elements |
| **Row Matrix** | A matrix with only one row (1-by-n) |
| **Column Matrix** | A matrix with only one column (m-by-1) |
| **Square Matrix** | Number of rows equals number of columns (n-by-n) |
| **Null/Zero Matrix** | All elements are zero |
| **Diagonal Matrix** | Square matrix where all non-diagonal elements are zero |
| **Scalar Matrix** | Diagonal matrix with all diagonal elements equal |
| **Unit/Identity Matrix (I)** | Diagonal matrix with all diagonal elements = 1 |
| **Transpose (A^t)** | Rows and columns interchanged |
| **Symmetric Matrix** | A = A^t |
| **Skew-Symmetric Matrix** | A = -A^t |
| **Determinant** | For 2x2 matrix [a, b; c, d]: det = ad - bc |
| **Singular Matrix** | Determinant = 0 (no inverse exists) |
| **Non-Singular Matrix** | Determinant != 0 (inverse exists) |

## 3.3 Key Formulas

| Formula | Description |
|---------|-------------|
| A + B = [aij + bij] | Matrix addition (same order required) |
| kA = [k * aij] | Scalar multiplication |
| AB != BA (generally) | Matrix multiplication is NOT commutative |
| (AB)ij = sum of (row i of A) * (column j of B) | Matrix multiplication rule |
| det[a, b; c, d] = ad - bc | Determinant of 2x2 |
| adj[a, b; c, d] = [d, -b; -c, a] | Adjoint of 2x2 (swap diagonals, negate off-diagonals) |
| A^(-1) = adj(A) / det(A) | Inverse of matrix |
| A * A^(-1) = A^(-1) * A = I | Inverse property |

**Solving Systems AX = B:**
- **Matrix Inversion Method:** X = A^(-1) * B
- **Cramer's Rule:** x = Dx/D, y = Dy/D, where D = det(A), Dx and Dy are determinants with replaced columns

## 3.4 Worked Examples Summary

**Example 1: Finding the inverse of a 2x2 matrix**
- A = [3, 5; 1, 2]
- det(A) = 3(2) - 5(1) = 6 - 5 = 1
- adj(A) = [2, -5; -1, 3]
- A^(-1) = [2, -5; -1, 3] / 1 = [2, -5; -1, 3]

**Example 2: Cramer's Rule for simultaneous equations**
- System: 2x + 3y = 7 and 3x + 5y = 11
- D = |2, 3; 3, 5| = 10 - 9 = 1
- Dx = |7, 3; 11, 5| = 35 - 33 = 2, so x = 2/1 = 2
- Dy = |2, 7; 3, 11| = 22 - 21 = 1, so y = 1/1 = 1

**Example 3: Real-world application (medals table)**
- Matrix G represents gold and silver medals won by three friends
- G = [5, 3; 2, 6; 1, 7] (3x2 matrix)
- G^t = [5, 2, 1; 3, 6, 7] (2x3 matrix) -- rows become columns

## 3.5 Important Diagrams

- **Page 55 -- Chapter opener:** Bulletin board illustration showing various matrix forms (system of equations, column matrix, row matrix, 2x2 matrix) as pinned notes (Batch 02)
- **Page 59 -- Symmetric/Skew-Symmetric Classification:** Flowchart with "For a square matrix A" at top, branching left to "Symmetric if A = A^t" and right to "Skew-Symmetric if A = -A^t" (Batch 02)

## 3.6 Common Mistakes to Avoid

1. **Matrix multiplication order matters:** AB != BA in general; also verify dimensions are compatible (columns of A = rows of B)
2. **Determinant = 0:** If det(A) = 0, the matrix is singular and has NO inverse; the system may have no solution or infinitely many solutions
3. **Adjoint confusion:** For 2x2, swap diagonal elements and change signs of off-diagonal elements; do NOT just transpose
4. **Addition/Subtraction:** Only possible for matrices of the SAME order
5. **Scalar multiplication vs matrix multiplication:** Scalar multiplication multiplies every element; matrix multiplication follows the dot-product rule

## 3.7 Chapter Connections

- **Chapter 2 (Quadratic Equations):** Simultaneous equations can be solved using matrices
- **Chapter 4 (Inequalities):** Systems of inequalities build on the concept of systems of equations
- **Chapter 1 (Complex Numbers):** Systems of equations with complex coefficients use similar matrix methods
- **Real-world:** Computer graphics, economics (input-output models), engineering, data organization

---

# Chapter 4: Linear and Quadratic Inequalities
**(Pages 78--96)**

## 4.1 Learning Objectives

After studying this chapter, students will be able to:

- Solve linear inequalities in one variable
- Solve quadratic inequalities in one variable
- Solve two linear inequalities with two unknowns simultaneously
- Interpret and identify the region in the plane bounded by two linear inequalities in two unknowns

## 4.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Inequality** | A mathematical statement using <, >, <=, >= |
| **Trichotomy Property** | For any two real numbers a, b: exactly one of a < b, a = b, a > b is true |
| **Linear Inequality (one variable)** | ax + b < 0 (or >, <=, >=) |
| **Quadratic Inequality** | ax^2 + bx + c < 0 (or >, <=, >=) |
| **Solution Set** | The set of all values satisfying the inequality |
| **Open Circle** | Used on number line for strict inequalities (< or >) |
| **Closed Circle** | Used on number line for non-strict inequalities (<= or >=) |
| **Critical Points** | Roots of the related equation ax^2 + bx + c = 0; they divide the number line into intervals |
| **Absolute Value** | \|x\| = x if x >= 0; \|x\| = -x if x < 0 |
| **Feasible Region** | The intersection of solution regions of a system of inequalities |

**Key Rules:**
- \|x\| <= a implies -a <= x <= a
- \|x\| >= a implies x <= -a OR x >= a
- Multiplying/dividing by a negative number REVERSES the inequality sign

## 4.3 Key Formulas

| Formula | Description |
|---------|-------------|
| If a > b and c > 0, then ac > bc | Multiplication by positive preserves inequality |
| If a > b and c < 0, then ac < bc | Multiplication by negative REVERSES inequality |
| \|ax + b\| < c => -c < ax + b < c | Absolute value (less than) |
| \|ax + b\| > c => ax + b < -c OR ax + b > c | Absolute value (greater than) |
| Quadratic inequality: Find roots, test intervals | Sign analysis method |

## 4.4 Worked Examples Summary

**Example 1: Solving a linear inequality**
- Solve 9x + 6 < 8x - 2
- 9x - 8x < -2 - 6
- x < -8
- Solution set: {x : x < -8}, graph with open circle at -8

**Example 2: Absolute value inequality**
- Solve |3x - 2| < 4
- -4 < 3x - 2 < 4
- -2 < 3x < 6
- -2/3 < x < 2
- Solution set: {x : -2/3 < x < 2}

**Example 3: System of linear inequalities (graphical)**
- Graph: x + y > -2 and 3x - y >= -6
- Step 1: Graph both lines on the same coordinate plane
- Step 2: Shade the appropriate half-plane for each inequality
- Step 3: The intersection (overlap) of both shaded regions is the solution
- Check point (0, 1): 0 + 1 > -2 (True) and 3(0) - 1 >= -6 (True)

## 4.5 Important Diagrams

- **Page 91 -- Number Lines for Absolute Value Inequalities:** Two number lines showing solutions of |3x - 2| < 4 (open circles at -2/3 and 2, segment between shaded) and |-4x - 5| + 3 < 9 (open circles at -11/4 and 1/4) (Batch 02)
- **Page 93 -- System of Inequalities Graph:** Coordinate plane showing lines x + y = -2 (dashed) and 3x - y = -6 (solid), with the overlapping feasible region shaded darker (Batch 03)

## 4.6 Common Mistakes to Avoid

1. **Forgetting to reverse the inequality sign** when multiplying or dividing by a negative number
2. **Absolute value:** |x| is always non-negative; |x| < -5 has NO solution
3. **Open vs closed circles:** Use open circle for < and >, closed circle for <= and >=
4. **Quadratic inequalities:** Do NOT simply "solve" like equations; you must test intervals between critical points
5. **Systems of inequalities:** The solution is the INTERSECTION (overlap) of all half-planes, not the union
6. **Graphing:** Use dashed line for strict inequalities (<, >); solid line for non-strict (<=, >=)

## 4.7 Chapter Connections

- **Chapter 2 (Quadratic Equations):** Uses same factoring/formula techniques; quadratic inequality requires finding roots first
- **Chapter 6 (Functions & Graphs):** Graphing inequalities in two variables builds on coordinate geometry
- **Chapter 12 (Statistics):** Absolute deviation uses absolute value concepts
- **Real-world:** Budget constraints, weight limits, optimization problems

---

# Chapter 5: Algebraic Fractions
**(Pages 97--114)**

## 5.1 Learning Objectives

After studying this chapter, students will be able to:

- Describe rational expressions
- Factorize and simplify rational expressions
- Demonstrate manipulation of algebraic fractions
- Perform operations on rational expressions (add, subtract, multiply, divide)
- Solve rational equations
- Apply the concept of rational equations to real-world problems

## 5.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Algebraic Expression** | A combination of constants, variables, and operations |
| **Polynomial** | An expression of the form a0 + a1*x + a2*x^2 + ... + an*x^n |
| **Degree of Polynomial** | The highest exponent of the variable |
| **Leading Coefficient** | Coefficient of the highest degree term |
| **Rational Expression** | P/Q where P and Q are polynomials, Q != 0 |
| **Algebraic Fraction** | P/Q where P, Q are algebraic expressions, Q != 0 |
| **LCD (Least Common Denominator)** | The least common multiple of all denominators |
| **BODMAS** | Order of operations: Brackets, Orders, Division, Multiplication, Addition, Subtraction |

**Classification of Polynomials by Terms:**
- Monomial: 1 term (e.g., 5x^2)
- Binomial: 2 terms (e.g., x + 3)
- Trinomial: 3 terms (e.g., x^2 + 2x + 1)

**Classification by Degree:**
- Linear: degree 1
- Quadratic: degree 2
- Cubic: degree 3
- Quartic: degree 4

## 5.3 Key Formulas

| Formula | Description |
|---------|-------------|
| a/b * c/d = ac/bd | Multiplication of fractions |
| (a/b) / (c/d) = a/b * d/c = ad/bc | Division of fractions |
| a/b + c/d = (ad + bc) / bd | Addition with different denominators |
| Simplify P/Q by dividing by GCD(P, Q) | Simplification |
| Cross-multiply: if a/b = c/d then ad = bc | Solving rational equations |

## 5.4 Worked Examples Summary

**Example 1: Multiplication of algebraic fractions**
- Find the product of (x^2 - 9)/(x^2 + 2x) and x/(x + 3)
- = [(x+3)(x-3)] / [x(x+2)] * x/(x+3)
- = (x - 3)/(x + 2) after cancellation

**Example 2: Division of algebraic fractions**
- Divide (2x^2 - 11x - 21)/(x^2 - 49) by (2x + 3)/(x + 7)
- = [(x-7)(2x+3)] / [(x+7)(x-7)] * (x+7)/(2x+3)
- = 1 after cancellation

**Example 3: Simplifying complex rational expressions**
- Simplify (3/x - 2/x^2) / (1/(x-2) + 1/x^2)
- Numerator: (3x - 2)/x^2
- Denominator: (x^2 + x - 2) / [x^2(x-2)]
- Multiply by reciprocal: = (3x-2)/x^2 * x^2(x-2)/[(3x-2)(x+1)]
- = (x - 2)/(x + 1)

## 5.5 Important Diagrams

- **Page 97 -- Chapter opener:** X-ray image of a human hand and factory worker photo illustrating real-world applications of algebraic expressions (Batch 03)
- **Page 103 -- Basketball sphere:** Illustration of a basketball for the volume/radius problem using the formula r = cube_root(3v/4pi) (Batch 03)

## 5.6 Common Mistakes to Avoid

1. **Cancellation errors:** Only cancel FACTORS, not terms. (x^2 + 3x)/(x) = x + 3, but (x^2 + 3)/(x) != x + 3
2. **Forgetting restrictions:** Always state that the denominator != 0
3. **LCD errors:** When adding fractions, find the LCD of ALL denominators before combining
4. **Division:** Remember to multiply by the RECIPROCAL of the divisor
5. **Not fully factoring:** Always factor completely before simplifying
6. **Extraneous solutions:** When solving rational equations, check that solutions do not make any denominator zero

## 5.7 Chapter Connections

- **Chapter 2 (Quadratic Equations):** Factoring quadratics is essential for simplifying rational expressions
- **Chapter 6 (Functions & Graphs):** Rational functions (like y = 1/x) involve algebraic fractions
- **Chapter 1 (Complex Numbers):** Division of complex numbers uses a similar conjugate-multiplication technique
- **Real-world:** Rate problems, work problems, proportional reasoning

---

# Chapter 6: Functions and Graphs
**(Pages 115--139)**

## 6.1 Learning Objectives

After studying this chapter, students will be able to:

- Recognize function types: into, onto, one-to-one (injective), surjective, bijective
- Determine domain and range of functions
- Perform operations on functions (addition, subtraction, multiplication, division)
- Find composition of functions (fog, gof)
- Find inverse functions
- Sketch graphs of polynomial functions (zero, constant, linear, identity, quadratic, cubic)
- Sketch graphs of square root, reciprocal, exponential, and absolute value functions
- Find gradient (slope) of curves using tangent lines
- Solve linear and quadratic equations simultaneously by graphing

## 6.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Function** | A relation where every element in the domain has exactly one image in the codomain |
| **Domain** | Set of all possible input values |
| **Range** | Set of all actual output values |
| **Codomain** | The set into which the function maps |
| **One-to-one (Injective)** | Different inputs give different outputs |
| **Onto (Surjective)** | Every element in codomain is an image of some domain element |
| **Bijective** | Both one-to-one AND onto |
| **Composition** | (fog)(x) = f(g(x)); apply g first, then f |
| **Inverse Function** | f^(-1) exists if f is bijective; f(f^(-1)(x)) = x |

**Types of Graphs:**

| Function | Graph Shape | Key Features |
|----------|-------------|--------------|
| f(x) = 0 | x-axis | Zero polynomial, no degree |
| f(x) = c | Horizontal line | Degree 0 |
| f(x) = mx + b | Straight line | Slope m, y-intercept b |
| f(x) = x | Diagonal line | 45-degree, passes through origin |
| f(x) = \|x\| | V-shape | Vertex at origin, symmetric |
| f(x) = ax^2 + bx + c | Parabola | Vertex at (h, k) where h = -b/2a, k = c - b^2/4a |
| f(x) = x^3 | S-curve | Passes through origin |
| f(x) = sqrt(x) | Half parabola | Domain x >= 0 |
| f(x) = 1/x | Hyperbola | Two branches, asymptotes at axes |
| f(x) = a^x | Exponential curve | Always positive, passes through (0, 1) |

## 6.3 Key Formulas

| Formula | Description |
|---------|-------------|
| (f + g)(x) = f(x) + g(x) | Addition of functions |
| (f - g)(x) = f(x) - g(x) | Subtraction of functions |
| (f * g)(x) = f(x) * g(x) | Multiplication of functions |
| (f / g)(x) = f(x) / g(x), g(x) != 0 | Division of functions |
| (fog)(x) = f(g(x)) | Composition |
| Vertex: h = -b/2a, k = c - b^2/4a | Parabola vertex |
| a > 0: opens upward; a < 0: opens downward | Parabola direction |
| Gradient = (y2 - y1)/(x2 - x1) | Slope of tangent at a point |

## 6.4 Worked Examples Summary

**Example 1: Finding the inverse function**
- Given f(x) = (6x + 1)/2
- Let y = (6x + 1)/2, solve for x: 2y = 6x + 1, x = (2y - 1)/6
- f^(-1)(x) = (2x - 1)/6

**Example 2: Composition of functions**
- f(x) = 4x, g(x) = x + 1
- (fog)(x) = f(g(x)) = f(x + 1) = 4(x + 1) = 4x + 4
- (gof)(x) = g(f(x)) = g(4x) = 4x + 1
- Note: fog != gof (composition is NOT commutative)

**Example 3: Graphical solution of simultaneous equations**
- f(x) = 2x + 1 and g(x) = x^2 - x + 3
- Graph both; they intersect at (1, 3) and (2, 5)
- Verification: f(1) = 3 = g(1); f(2) = 5 = g(2)

## 6.5 Important Diagrams

- **Page 131 -- Reciprocal Function Graph:** Graph of y = 1/(x-2) showing two branches of a hyperbola with vertical asymptote at x = 2 and horizontal asymptote at y = 0, y-intercept at (0, -0.5) (Batch 03)
- **Page 133 -- Simultaneous Linear-Quadratic Solution:** Graph showing intersection of line f(x) = 2x + 1 and parabola g(x) = x^2 - x + 3 at points (1, 3) and (2, 5) with vertex of parabola at (0.5, 2.75) (Batch 03)

## 6.6 Common Mistakes to Avoid

1. **Composition order:** fog means "f of g" -- apply g FIRST, then f. Students often reverse the order
2. **Domain restrictions:** Always check domain when dividing functions or taking square roots
3. **Inverse existence:** A function must be bijective (one-to-one AND onto) to have an inverse
4. **Parabola vertex:** h = -b/(2a), NOT b/(2a). Watch the negative sign
5. **Exponential base:** For y = a^x, the base a must be positive and a != 1
6. **Gradient of curve:** The gradient at a point is the slope of the TANGENT line at that point, not the secant

## 6.7 Chapter Connections

- **Chapter 2 (Quadratic Equations):** Parabola graphs represent quadratic functions
- **Chapter 4 (Inequalities):** Graphing helps visualize solution regions
- **Chapter 8 (Trigonometry):** Trigonometric functions extend the concept of functions
- **Chapter 12 (Statistics):** Line of best fit uses linear function concepts
- **Real-world:** Temperature conversion, population growth (exponential), physics (velocity-time graphs)

---

# Chapter 7: Vectors in Plane
**(Pages 140--159)**

## 7.1 Learning Objectives

After studying this chapter, students will be able to:

- Distinguish between scalar and vector quantities
- Represent vectors geometrically and in component form
- Find magnitude and direction of vectors
- Perform vector operations (addition, subtraction, scalar multiplication)
- Apply translation using vectors
- Identify parallel, equal, and unit vectors
- Find rectangular components of a vector
- Apply the ratio formula for dividing line segments
- Use vectors in geometric proofs

## 7.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Scalar** | A quantity with magnitude only (e.g., mass, time, speed, area) |
| **Vector** | A quantity with both magnitude AND direction (e.g., force, velocity, displacement) |
| **Position Vector** | Vector from origin to a point; P(x, y) has position vector OP = xi + yj |
| **Magnitude** | \|u\| = sqrt(x^2 + y^2) for vector u = xi + yj |
| **Unit Vector** | A vector with magnitude 1; u-hat = u / \|u\| |
| **i and j** | Unit vectors along x-axis and y-axis respectively |
| **Zero/Null Vector** | A vector with magnitude 0, denoted 0 |
| **Negative Vector** | Same magnitude, opposite direction |
| **Equal Vectors** | Same magnitude AND same direction |
| **Parallel Vectors** | Same or opposite direction (u = k*v for some scalar k) |
| **Translation** | Moving every point of a figure the same distance in the same direction |

**Vector Addition Laws:**
- Head-to-tail rule (Triangle law)
- Parallelogram law
- Polygon law (for more than two vectors)

## 7.3 Key Formulas

| Formula | Description |
|---------|-------------|
| u = xi + yj | Component form |
| \|u\| = sqrt(x^2 + y^2) | Magnitude |
| u-hat = u / \|u\| | Unit vector |
| AB = OB - OA | Vector between two points |
| F_x = \|F\| cos(theta) | x-component |
| F_y = \|F\| sin(theta) | y-component |
| Resultant = sqrt(F_x^2 + F_y^2) | Magnitude of resultant |
| tan(theta) = F_y / F_x | Direction of resultant |
| Ratio formula: P = (m*B + n*A) / (m + n) | Point dividing AB in ratio m:n internally |
| Ratio formula: P = (m*B - n*A) / (m - n) | Point dividing AB in ratio m:n externally |

## 7.4 Worked Examples Summary

**Example 1: Finding magnitude and unit vector**
- u = 3i + 4j
- |u| = sqrt(9 + 16) = sqrt(25) = 5
- u-hat = (3i + 4j)/5 = (3/5)i + (4/5)j

**Example 2: Resultant of two forces**
- Two tractors pulling: F1 = 250 N at 50 degrees, F2 = 300 N at 40 degrees
- F1_x = 250 cos 50, F1_y = 250 sin 50
- F2_x = 300 cos 40, F2_y = 300 sin 40
- Resultant = sqrt((sum of x-components)^2 + (sum of y-components)^2)

**Example 3: Ratio formula application**
- Find the position vector of point P dividing AB in ratio 2:3 internally
- A = (1, 4), B = (6, 9)
- P = (3*A + 2*B) / (2 + 3) -- Note: CAREFUL with which coefficient goes with which point
- P = [2(6) + 3(1)] / 5 , [2(9) + 3(4)] / 5 = (15/5, 30/5) = (3, 6)

## 7.5 Important Diagrams

- **Page 141 -- Scalar vs Vector Illustration:** Side-by-side comparison showing speed (scalar, magnitude only: 10 km/h) and velocity (vector, magnitude AND direction: 10 km/h with direction arrow) (Batch 04)
- **Page 141 -- Geometrical Representation of a Vector:** Directed line segment from point A (tail) to point B (head) with arrowhead (Batch 04)
- **Page 159 -- Triangle OAB:** Triangle with vertices O, A, B and midpoint M on OA, used for expressing vectors BM, AM, etc. in terms of a and b (Batch 04)

## 7.6 Common Mistakes to Avoid

1. **Direction matters:** AB != BA; AB = -BA
2. **Scalar vs vector:** Speed is scalar, velocity is vector; distance is scalar, displacement is vector
3. **Component resolution:** cos gives x-component, sin gives y-component (assuming angle from positive x-axis)
4. **Ratio formula:** Be careful about which point gets which coefficient (m or n) and internal vs external division
5. **Parallel vectors:** u parallel to v means u = kv for some scalar k; if k > 0, same direction; if k < 0, opposite direction
6. **Zero vector:** Has magnitude 0 but direction is undefined/arbitrary

## 7.7 Chapter Connections

- **Chapter 8 (Trigonometry):** Component resolution uses sin and cos; angles between vectors
- **Chapter 9-10 (Circles):** Geometric proofs using vectors
- **Chapter 3 (Matrices):** Vectors can be represented as column matrices
- **Real-world:** Navigation, physics (forces, velocity), engineering, computer graphics

---

# Chapter 8: Application of Trigonometry
**(Pages 160--195)**

## 8.1 Learning Objectives

After studying this chapter, students will be able to:

- Extend sine and cosine functions to angles between 90 degrees and 180 degrees
- Solve problems using laws of sines, cosines, and the area formula for any triangle
- Solve simple trigonometric problems in three dimensions
- Apply concepts of trigonometry to real-world problems (video games, flight engineering, navigation, sound waves)

## 8.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Trigonometric Ratios** | sin, cos, tan, csc, sec, cot for right triangles |
| **Unit Circle** | Circle of radius 1 centered at origin; defines trig functions for all angles |
| **Reference Angle** | Acute angle formed with the x-axis |
| **Angles 90-180 degrees** | In QII: sin positive, cos negative, tan negative |
| **Oblique Triangle** | A triangle with no right angle |
| **Angle of Elevation** | Angle measured upward from horizontal |
| **Angle of Depression** | Angle measured downward from horizontal |
| **Circumcircle** | Circle passing through all three vertices of a triangle |
| **Incircle** | Circle inscribed inside a triangle, touching all three sides |
| **Escribed Circle (e-circle)** | Circle tangent to one side of a triangle and extensions of the other two sides |
| **Semi-perimeter** | S = (a + b + c) / 2 |

## 8.3 Key Formulas

**Right Triangle Solutions:**

| Formula | Description |
|---------|-------------|
| sin(theta) = opposite/hypotenuse | Basic ratio |
| cos(theta) = adjacent/hypotenuse | Basic ratio |
| tan(theta) = opposite/adjacent | Basic ratio |

**Laws for Oblique Triangles:**

| Formula | Description |
|---------|-------------|
| a^2 = b^2 + c^2 - 2bc*cos(alpha) | Law of Cosines |
| a/sin(alpha) = b/sin(beta) = c/sin(gamma) | Law of Sines |
| (a-b)/(a+b) = tan[(alpha-beta)/2] / tan[(alpha+beta)/2] | Law of Tangents |

**Half-Angle Formulas:**

| Formula | Description |
|---------|-------------|
| cos(alpha/2) = sqrt[S(S-a) / bc] | Half-angle cosine |
| sin(alpha/2) = sqrt[(S-b)(S-c) / bc] | Half-angle sine |
| tan(alpha/2) = sqrt[(S-b)(S-c) / S(S-a)] | Half-angle tangent |

**Area Formulas:**

| Formula | Description |
|---------|-------------|
| Area = (1/2) * a * b * sin(gamma) | Two sides and included angle |
| Area = sqrt[S(S-a)(S-b)(S-c)] | Hero's/Heron's formula |

**Circles Connected with Triangles:**

| Formula | Description |
|---------|-------------|
| R = a / (2*sin(alpha)) | Circumradius |
| r = Delta / S | Inradius (Delta = area, S = semi-perimeter) |
| r1 = Delta / (S - a) | E-radius opposite to vertex A |
| r2 = Delta / (S - b) | E-radius opposite to vertex B |
| r3 = Delta / (S - c) | E-radius opposite to vertex C |

## 8.4 Worked Examples Summary

**Example 1: Angles of depression from an airplane**
- A plane at height 1500 m observes two boats at angles of depression 25 degrees and 50 degrees on opposite sides
- In right triangle: XU = 1500/tan(25) = 3216.76 m
- YU = 1500/tan(50) = 1258.65 m
- Distance between boats = XU + YU = 4475.41 m

**Example 2: Hero's formula application**
- Triangle with sides a = 8, b = 11, c = 15
- S = (8 + 11 + 15)/2 = 17
- Area = sqrt(17 * 9 * 6 * 2) = sqrt(1836) = 42.85 sq units

**Example 3: 3D Trigonometry (Triangular prism)**
- ABCDEF is an isosceles triangular prism, BC = 8 cm, angle DFE = 70 degrees, angle FCD = 45 degrees
- In right triangle DGF: cos 70 = 4/DF => DF = 4/cos 70 = 11.695 cm
- In right triangle CFD: sin 45 = 11.695/CD => CD = 11.695/sin 45 = 16.54 cm

## 8.5 Important Diagrams

- **Page 160 -- Burj Khalifa photograph:** Real-world context for height measurement using angle of elevation (Batch 04)
- **Page 165 -- Angles of depression problem:** Triangle showing plane at height with angles to two boats, illustrating right triangle decomposition (Batch 04)
- **Page 175 -- Inscribed angle in circle:** Circle with inscribed triangle showing angle of 110 degrees for diameter calculation (Batch 04)
- **Page 183 -- Circumcircle, Incircle, Escribed Circle:** Three diagrams showing: (1) circumcircle passing through all vertices with centre O, (2) incircle touching all sides with centre I, (3) escribed circle touching one side externally (Batch 04)
- **Page 185 -- Inradius and E-radius diagrams:** Triangle ABC with incircle (top) and escribed circle opposite vertex A (bottom), showing perpendicular distances as radii (Batch 05)
- **Page 189 -- 3D Trigonometry (Prism):** Isosceles triangular prism and extracted right triangles for step-by-step solution (Batch 05)
- **Page 191 -- Cuboid problems:** Multiple 3D diagrams including cuboid with dimensions 12x10x9 cm, square-based pyramid, and cylinder (Batch 05)

## 8.6 Common Mistakes to Avoid

1. **Ambiguous case (Law of Sines):** When given SSA, there may be 0, 1, or 2 solutions
2. **Angle of depression vs elevation:** Angle of depression from A equals angle of elevation from B (alternate angles)
3. **Calculator mode:** Ensure calculator is in DEGREE mode, not radian
4. **Hero's formula:** S is the SEMI-perimeter, not the full perimeter
5. **Signs in QII:** sin is positive, cos is negative, tan is negative for angles between 90 and 180 degrees
6. **3D problems:** Break into 2D right triangles; identify which triangle to solve first
7. **Circumradius formula:** R = a/(2*sin(alpha)), where alpha is the angle OPPOSITE to side a

## 8.7 Chapter Connections

- **Chapter 7 (Vectors):** Rectangular components use sin and cos
- **Chapter 9-11 (Circles):** Circumcircle, incircle, tangent properties build on circle geometry
- **Chapter 1 (Complex Numbers):** Modulus and argument relate to trigonometric form
- **Real-world:** Surveying, navigation, architecture, astronomy, engineering

---

# Chapter 9: Chords and Arcs of a Circle
**(Pages 196--214)**

## 9.1 Learning Objectives

After studying this chapter, students will be able to:

- Prove and apply theorems about chords and perpendiculars from the centre
- Understand relationships between congruent chords and their distances from the centre
- Relate congruent arcs and congruent chords
- Understand central angles and their relationship with arcs
- Calculate arc length, chord length, and sector area

## 9.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Chord** | A line segment with both endpoints on the circle |
| **Diameter** | The longest chord, passing through the centre |
| **Arc** | A part of the circumference of a circle |
| **Minor Arc** | The shorter arc between two points |
| **Major Arc** | The longer arc between two points |
| **Central Angle** | An angle formed at the centre by two radii |
| **Sector** | Region bounded by two radii and an arc |
| **Segment** | Region between a chord and the arc it cuts off |

**Key Theorems:**

| Theorem | Statement |
|---------|-----------|
| **9.1** | A line drawn from the centre of a circle perpendicular to a chord bisects the chord |
| **9.2** | A line joining the centre to the midpoint of a chord is perpendicular to the chord |
| **9.3** | One and only one circle can pass through three non-collinear points |
| **9.4** | Two congruent chords of a circle are equidistant from the centre |
| **9.5** | Two chords equidistant from the centre are congruent |
| **9.6** | Congruent arcs of a circle have congruent chords |
| **9.7** | Congruent chords of a circle have congruent arcs |
| **9.8** | Equal chords subtend equal central angles |
| **9.9** | Equal central angles cut off equal arcs |

## 9.3 Key Formulas

| Formula | Description |
|---------|-------------|
| Arc length l = (theta/360) * 2*pi*r | Length of arc with central angle theta |
| Chord length = 2*sqrt(r^2 - d^2) | Where d = perpendicular distance from centre to chord |
| Sector area = (theta/360) * pi*r^2 | Area of sector with central angle theta |
| Circumference = 2*pi*r | Full circle perimeter |
| Segment area = Sector area - Triangle area | Area of circular segment |
| Triangle area (isosceles) = (1/2)*r^2*sin(theta) | For sector triangle with two radii |

## 9.4 Worked Examples Summary

**Example 1: Finding chord length given perpendicular distance**
- Circle with radius 15 cm, perpendicular from centre to chord = 9 cm
- Half-chord = sqrt(15^2 - 9^2) = sqrt(225 - 81) = sqrt(144) = 12
- Chord length = 2 * 12 = 24 cm

**Example 2: Arc length calculation**
- Circular decoration piece: r = 56 cm, theta = 90 degrees
- l = (90/360) * 2 * (22/7) * 56 = 88 cm
- Length of one part = 2 * 88 = 176 cm

**Example 3: Finding the radius from chord and diameter information**
- PU = 16 cm (diameter), RS = 10 cm (chord)
- Let OU = r, then PO = r (radius), and PU = 16 means r + r = 16, so r = 8... but using the Pythagorean relationship:
- Distance from centre to chord: 16 - r, half-chord = 5
- r^2 = 5^2 + (16 - r)^2 => solve for r

## 9.5 Important Diagrams

- **Page 199 -- Exercise 9.1 diagrams:** Multiple circle diagrams showing chords with perpendiculars from centre, including: (1) Circle with centre P, chord AB, perpendicular PD with measurements 5 cm and 3 cm (2) Circle with chord EF, perpendicular from P with 8 cm and 10 cm measurements (Batch 06)
- **Page 200 -- Theorem 9.4 diagram:** Circle with two equal chords AB and CD, perpendiculars OE and OF from centre O to both chords, demonstrating equidistance (Batch 06)
- **Page 203 -- Parallel chords and arcs:** Multiple diagrams showing chords with distances from centre, concentric circles (Batch 06)
- **Page 207 -- Parallel chords with equal arcs:** Circle with centre P, parallel chords EF and GH, proving arc EG = arc FH using central angles (Batch 06)
- **Page 211 -- Arc length and sector area:** Diagrams showing circles with sectors (100 degrees, 60 degrees), concentric sector (annular sector) with outer radius 21 cm and inner 10 cm (Batch 08)
- **Page 212 -- Segment problems:** Circle with chord LM showing segment region; flying saucer building with 98 degree angle; semicircular bridge; circular window divided by chord (Batch 08)

## 9.6 Common Mistakes to Avoid

1. **Perpendicular bisector vs bisector:** The perpendicular from the centre bisects the chord, but a line bisecting the chord is not necessarily perpendicular to it unless it passes through the centre
2. **Arc vs chord:** Arc length and chord length are different measurements
3. **Degrees vs radians:** When using arc length formula, ensure theta is in degrees (for the formula with 360 degrees) or convert
4. **Sector area vs segment area:** Segment area = Sector area MINUS the triangle area formed by the two radii
5. **Congruent arcs:** Arcs are congruent only if they belong to the same circle or equal circles AND subtend equal central angles
6. **Three non-collinear points:** Only ONE circle can pass through 3 non-collinear points; if they are collinear, NO circle passes through all three

## 9.7 Chapter Connections

- **Chapter 10 (Tangents):** Builds directly on chord properties; tangent is perpendicular to radius
- **Chapter 11 (Practical Geometry):** Constructions use chord-centre-perpendicular relationships
- **Chapter 8 (Trigonometry):** Circumcircle and inscribed angles connect to law of sines
- **Real-world:** Architecture (arches, domes), wheel mechanics, satellite orbits, clock calculations

---

# Chapter 10: Tangents and Angles of a Circle
**(Pages 215--231)**

## 10.1 Learning Objectives

After studying this chapter, students will be able to:

- Understand and prove theorems about tangents to circles
- Apply the relationship between tangent and radius
- Understand circles touching externally and internally
- Apply the central angle theorem (angle at centre = 2 * angle at circumference)
- Prove and apply properties of angles in the same segment
- Prove and apply the angle in a semicircle property
- Understand cyclic quadrilaterals and their angle properties
- Apply the alternate segment theorem

## 10.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Tangent** | A line that touches the circle at exactly one point (point of tangency) |
| **Secant** | A line that intersects the circle at two points |
| **Central Angle** | Angle at the centre subtended by an arc |
| **Inscribed Angle** | Angle at the circumference subtended by an arc |
| **Cyclic Quadrilateral** | A quadrilateral whose all four vertices lie on a circle |
| **Same Segment** | The region on the same side of a chord |
| **Alternate Segment** | The segment on the opposite side of the chord from a tangent-chord angle |

**Key Theorems:**

| Theorem | Statement |
|---------|-----------|
| **10.1** | If a line is perpendicular to a radial segment at its outer endpoint, it is tangent to the circle |
| **10.2** | The tangent to a circle and the radial segment to the point of tangency are perpendicular |
| **10.3** | Two tangents from an external point to a circle are equal in length |
| **10.4** | If two circles touch externally, distance between centres = sum of radii (r1 + r2) |
| **10.5** | If two circles touch internally, distance between centres = difference of radii (\|r1 - r2\|) |
| **10.6** | The tangent-chord angle equals the inscribed angle on the opposite side (Alternate Segment Theorem) |
| **10.7** | Central angle = 2 * inscribed angle (for same arc) |
| **10.8** | Angles in the same segment are equal |
| **10.9** | Angle in a semicircle is 90 degrees |
| **10.10** | Opposite angles of a cyclic quadrilateral are supplementary (sum = 180 degrees) |
| **10.11** | Exterior angle of a cyclic quadrilateral = opposite interior angle |
| **10.12** | Converse: If opposite angles of a quadrilateral are supplementary, it is cyclic |

## 10.3 Key Formulas

| Formula | Description |
|---------|-------------|
| Tangent perpendicular to radius at point of contact | OT perpendicular to tangent at T |
| Tangent length from external point: sqrt(d^2 - r^2) | Where d = distance from external point to centre |
| Central angle = 2 * inscribed angle | For same arc |
| Opposite angles of cyclic quad: A + C = 180 degrees | Supplementary property |
| Circles touching externally: d = r1 + r2 | Distance between centres |
| Circles touching internally: d = \|r1 - r2\| | Distance between centres |

## 10.4 Worked Examples Summary

**Example 1: Finding tangent-related angles**
- Two tangents OP and OQ from external point O, angle POQ = 40 degrees
- Since tangent perpendicular to radius: angle OPS = angle OQS = 90 degrees
- angle PSQ = 2 * angle OPS - 2 * (half of 40) = 2 * 70 = 140 degrees
- In triangle PQS: angle SPQ = angle SQP = (180 - 140)/2 = 20 degrees

**Example 2: Tangent and kite properties**
- Two tangents OQ and OR from point O, angle at O = 45 degrees
- OQPR forms a kite: 45 + 90 + a + 90 = 360 => a = 135 degrees
- In triangle PQS: b + b + 45 = 180 => b = 67.5 degrees

**Example 3: Tangent length calculation**
- Distance from external point P to centre O = 10 cm, radius = 6 cm
- Tangent length = sqrt(10^2 - 6^2) = sqrt(100 - 36) = sqrt(64) = 8 cm

## 10.5 Important Diagrams

- **Page 219 -- Tangent from external point:** Circle with centre S, external point O, two tangent lines OP and OQ with angle POQ = 40 degrees (Batch 07)
- **Page 219 -- Kite formed by tangents:** Circle with centre P, tangent lines from O forming a kite OQPR with angle 45 degrees at O (Batch 07)
- **Page 219 -- Alternate Segment Theorem:** Circle with tangent at A, showing angle relationship between tangent-chord angle and inscribed angle (Batch 07)
- **Page 221 -- Concentric circles with tangent chords:** Two concentric circles showing chords of outer circle that are tangent to inner circle (Batch 07)
- **Page 221 -- Three externally touching circles:** Triangle formed by connecting centres, with ratio of sides 2:3:4 (Batch 07)
- **Page 223 -- Theorem 10.8 (Same segment angles):** Two circles showing points C, D, E on same segment above chord AB, all forming equal inscribed angles (Batch 09)
- **Page 223 -- Theorem 10.9 (Semicircle angle):** Semicircle with diameter AB, point P on arc, showing angle APB = 90 degrees (Batch 09)
- **Page 229 -- Wall clock tangent problem:** Circle (clock) with tangent strings to nail point P above, forming a kite shape (Batch 09)

## 10.6 Common Mistakes to Avoid

1. **Central angle vs inscribed angle:** Central angle = 2 * inscribed angle ONLY when they subtend the SAME arc
2. **Tangent is NOT a chord:** A tangent touches at exactly one point; a chord has two intersection points
3. **Cyclic quadrilateral:** OPPOSITE angles sum to 180 degrees, not adjacent angles
4. **Equal tangent lengths:** Two tangents from the SAME external point are equal; tangents from different points are generally not equal
5. **Angle in semicircle:** The angle at the circumference subtended by a DIAMETER is 90 degrees; the arc must be exactly a semicircle
6. **Alternate segment theorem:** The angle between a tangent and a chord equals the inscribed angle in the ALTERNATE (opposite) segment

## 10.7 Chapter Connections

- **Chapter 9 (Chords and Arcs):** Tangent properties build directly on chord-radius relationships
- **Chapter 11 (Practical Geometry):** Construction of tangents requires these theorems
- **Chapter 8 (Trigonometry):** Inscribed angle theorem connects to circumradius formula R = a/(2*sin(alpha))
- **Real-world:** Wheel mechanics, gear design, satellite communication, lens optics

---

# Chapter 11: Practical Geometry of Circles
**(Pages 232--244)**

## 11.1 Learning Objectives

After studying this chapter, students will be able to:

- Locate the centre of a given circle
- Draw a circle passing through three given non-collinear points
- Complete the circle when a part of its circumference is given
- Draw tangents to circles from various points
- Draw tangents to arcs without using the centre
- Draw two tangents meeting at a given angle
- Draw direct and transverse common tangents to two circles (equal/unequal)
- Apply practical geometry of circles to real-world problems

## 11.2 Core Concepts & Definitions

| Concept | Definition |
|---------|-----------|
| **Locating centre** | Draw two non-parallel chords; their perpendicular bisectors intersect at the centre |
| **Circle through 3 points** | Perpendicular bisectors of any two sides of the triangle formed by the 3 points meet at the circumcentre |
| **Direct common tangents** | Tangents that do NOT cross the line segment joining the centres (external tangents) |
| **Transverse common tangents** | Tangents that cross the line segment joining the centres (internal tangents) |
| **Point of tangency** | The single point where a tangent touches the circle |

**Construction Procedures:**

1. **Finding the centre:** Draw any two chords; construct perpendicular bisectors; their intersection is the centre
2. **Circle through 3 non-collinear points:** Join points to form triangle; perpendicular bisectors of two sides meet at circumcentre; distance from circumcentre to any point is the radius
3. **Tangent from point on circle:** Join point to centre; draw perpendicular at the point
4. **Tangent from external point:** Join external point to centre; draw semicircle on this line as diameter; intersection with the original circle gives the tangent point
5. **Direct common tangents (equal circles):** Join centres; draw perpendiculars at endpoints; these parallel lines are the tangents
6. **Direct common tangents (unequal circles):** Reduce to equal circle problem using the difference of radii
7. **Transverse common tangents:** Use the sum of radii to find the intersection point on the line joining centres

## 11.3 Key Formulas

| Formula | Description |
|---------|-------------|
| Perpendicular bisectors of chords intersect at centre | Finding centre |
| Tangent perpendicular to radius at point of contact | Basic tangent construction |
| For external tangents: point divides line externally in ratio r1:r2 | Construction aid |
| For internal tangents: point divides line internally in ratio r1:r2 | Construction aid |

## 11.4 Worked Examples Summary

**Example 1: Drawing tangent to an arc without centre**
- Given arc with point P at the middle
- Step 1: Take two points A, B on arc close to P
- Step 2: Join AP and PB
- Step 3: Construct angle BPT = angle APB (by drawing arc from P)
- Step 4: PT is the tangent

**Example 2: Pulley problem (real-world application)**
- Two pulleys of radii 7 inches and 14 inches, centres 28 inches apart
- Find length of rope moving on pulleys
- Rope = two straight tangent segments + two arc segments
- Use direct common tangent construction principles

**Example 3: Satellite distance problem**
- Satellite at altitude 7600 km, Earth's radius = 6400 km
- Distance from satellite to city P = tangent length from satellite point to Earth
- Total distance from satellite to Earth's centre = 6400 + 7600 = 14000 km
- Tangent length = sqrt(14000^2 - 6400^2)

## 11.5 Important Diagrams

- **Page 242 -- Pulley system:** Two circles (radii 7 and 14 inches) connected by a belt/rope, showing direct common tangent lines connecting the outer edges (Batch 10)
- **Page 242 -- Satellite and Earth:** Globe illustration with satellite point A above, showing tangent lines from A to Earth's surface, illustrating the distance calculation (Batch 10)
- **Page 242 -- Cylindrical rods with strap:** Two equal circles (diameter 12 cm each) touching externally, enclosed by an oval strap consisting of two semicircular arcs and two straight tangent segments (Batch 10)
- **Page 243 -- Circular mirror with wire:** Circle (radius 20 cm) with hook point above, two tangent wire segments of 15 cm each from hook to circle (Batch 10)

## 11.6 Common Mistakes to Avoid

1. **Compass consistency:** Keep compass width unchanged when drawing equal arcs for bisectors
2. **Non-collinear requirement:** Three collinear points cannot have a circle passing through them
3. **Tangent from point ON the circle:** Only ONE tangent exists (perpendicular to radius)
4. **Tangent from external point:** TWO tangents exist, and they are equal in length
5. **Direct vs transverse tangents:** Direct tangents exist when circles do not overlap; transverse tangents exist when circles do not touch or intersect
6. **Number of common tangents:**
   - Two separate circles: 4 common tangents (2 direct + 2 transverse)
   - Externally touching: 3 common tangents
   - Intersecting: 2 common tangents
   - Internally touching: 1 common tangent
   - One inside the other: 0 common tangents

## 11.7 Chapter Connections

- **Chapter 9 (Chords and Arcs):** Centre-finding uses perpendicular bisectors of chords
- **Chapter 10 (Tangents):** All constructions are based on tangent-radius perpendicularity theorem
- **Chapter 8 (Trigonometry):** Circumscribed and inscribed circle constructions relate to circumradius and inradius
- **Real-world:** Belt/pulley systems, gear mechanisms, athletic tracks, Ferris wheels, architectural design

---

# Chapter 12: Basic Statistics
**(Pages 245--278)**

## 12.1 Learning Objectives

After studying this chapter, students will be able to:

- Construct cumulative frequency tables, polygons, and ogives
- Find quartiles, deciles, and percentiles from grouped data
- Calculate interquartile range (IQR) and construct box-and-whisker plots
- Draw and interpret scatter diagrams
- Understand correlation and draw lines of best fit
- Calculate range, variance, standard deviation, and coefficient of variation
- Understand and apply basic probability concepts
- Apply addition and multiplication rules of probability
- Use sample space diagrams, possibility diagrams, tree diagrams, and Venn diagrams

## 12.2 Core Concepts & Definitions

**Cumulative Frequency & Graphical Representation:**

| Concept | Definition |
|---------|-----------|
| **Cumulative Frequency** | Running total of frequencies up to each class boundary |
| **Cumulative Frequency Polygon** | Line graph connecting class MARKS with cumulative frequencies |
| **Ogive** | Smooth S-shaped curve connecting class BOUNDARIES with cumulative frequencies |
| **Quartiles** | Q1 (25th percentile), Q2 (median, 50th), Q3 (75th percentile) |
| **Deciles** | D1 through D9 (divide data into 10 equal parts) |
| **Percentiles** | P1 through P99 (divide data into 100 equal parts) |

**Measures of Dispersion:**

| Concept | Definition |
|---------|-----------|
| **Range** | Maximum value - Minimum value |
| **Interquartile Range (IQR)** | Q3 - Q1 |
| **Variance (S^2)** | Average of squared deviations from the mean |
| **Standard Deviation (SD)** | Square root of variance |
| **Coefficient of Variation (CV)** | (SD / Mean) * 100% |

**Box-and-Whisker Plot:** Displays five-number summary: Minimum, Q1, Median (Q2), Q3, Maximum

**Correlation & Scatter Diagrams:**

| Type | Description |
|------|-------------|
| **Positive Correlation** | As x increases, y increases |
| **Negative Correlation** | As x increases, y decreases |
| **No Correlation** | No clear pattern between x and y |
| **Line of Best Fit** | Straight line that best represents the trend in scatter data |

**Probability:**

| Concept | Definition |
|---------|-----------|
| **Probability** | P(E) = Number of favorable outcomes / Total outcomes; 0 <= P(E) <= 1 |
| **Sample Space** | Set of all possible outcomes |
| **Independent Events** | Outcome of one does not affect the other |
| **Dependent Events** | Outcome of one affects the other |
| **Mutually Exclusive** | Events that cannot occur simultaneously |
| **Complementary Events** | P(E) + P(E') = 1 |

## 12.3 Key Formulas

**Measures of Central Tendency and Dispersion:**

| Formula | Description |
|---------|-------------|
| Mean (x-bar) = Sum(f * x) / Sum(f) | Grouped data mean |
| Variance S^2 = [Sum(f * x^2) / Sum(f)] - [Sum(f * x) / Sum(f)]^2 | Grouped data variance |
| SD = sqrt(S^2) | Standard deviation |
| CV = (SD / Mean) * 100% | Coefficient of variation |
| IQR = Q3 - Q1 | Interquartile range |

**Quartile Positions:**
- Q1 position: n/4 (from ogive)
- Q2 position: n/2 (median)
- Q3 position: 3n/4

**Decile and Percentile Positions:**
- Dk position: k*n/10 (k = 1, 2, ..., 9)
- Pk position: k*n/100 (k = 1, 2, ..., 99)

**Probability Rules:**

| Formula | Description |
|---------|-------------|
| P(A or B) = P(A) + P(B) - P(A and B) | General Addition Rule |
| P(A or B) = P(A) + P(B) | Addition Rule (mutually exclusive) |
| P(A and B) = P(A) * P(B) | Multiplication Rule (independent events) |
| P(A and B) = P(A) * P(B\|A) | Multiplication Rule (dependent events) |
| P(A') = 1 - P(A) | Complement rule |

## 12.4 Worked Examples Summary

**Example 1: Constructing an ogive and finding quartiles**
- Given frequency distribution for refugee ages: 20-24(5), 25-29(16), 30-34(12), 35-39(10), 40-44(8), 45-49(4)
- Construct cumulative frequency table using upper class boundaries
- Plot ogive (S-curve) with class boundaries on x-axis, cumulative frequency on y-axis
- Q1: Read from ogive at cumulative frequency = n/4 = 55/4 = 13.75
- D7: Read at 7n/10 = 38.5
- P60: Read at 60n/100 = 33

**Example 2: Variance and standard deviation calculation**
- Data with class marks x and frequencies f
- Calculate Sum(fx), Sum(fx^2), Sum(f)
- Variance = Sum(fx^2)/Sum(f) - [Sum(fx)/Sum(f)]^2
- SD = sqrt(Variance)
- CV = (SD/Mean) * 100%

**Example 3: Probability with tree diagrams**
- Two dice rolled: P(sum = 7) = 6/36 = 1/6
- Using sample space diagram (6x6 grid)
- P(at least one 6) = 1 - P(no 6) = 1 - (5/6)^2 = 11/36

## 12.5 Important Diagrams

- **Page 253 -- Cumulative frequency exercise:** Frequency tables for constructing cumulative frequency polygons and ogives for refugee age data and test scores (Batch 10)
- **Box-and-Whisker Plot (conceptual):** Five-number summary displayed as a box from Q1 to Q3 with median line inside, whiskers extending to minimum and maximum values
- **Scatter diagrams:** Points plotted on coordinate plane showing positive, negative, or no correlation with optional line of best fit
- **Tree diagrams and Venn diagrams:** Used for calculating probabilities of combined events

## 12.6 Common Mistakes to Avoid

1. **Ogive vs polygon:** Ogive uses class BOUNDARIES (smooth curve); polygon uses class MARKS (line segments)
2. **Cumulative frequency:** Always use UPPER class boundary for "less than" ogive
3. **Variance formula:** Remember to SUBTRACT the square of the mean: S^2 = E(x^2) - [E(x)]^2, not just E(x^2)
4. **Standard deviation:** SD is the SQUARE ROOT of variance; don't confuse the two
5. **CV comparison:** Coefficient of variation is used to compare dispersion of datasets with DIFFERENT units or means
6. **Probability bounds:** Probability can never be negative or greater than 1
7. **Mutually exclusive vs independent:** Mutually exclusive means P(A and B) = 0; independent means P(A and B) = P(A)*P(B). These are DIFFERENT concepts; mutually exclusive events are NOT independent (unless one has probability 0)
8. **With vs without replacement:** Affects whether events are independent or dependent

## 12.7 Chapter Connections

- **Chapter 4 (Inequalities):** Absolute deviation uses absolute value; IQR involves comparison
- **Chapter 6 (Functions & Graphs):** Line of best fit is a linear function; ogives are graphical representations
- **Chapter 2 (Quadratic Equations):** Variance formula involves squared terms
- **Real-world:** Data analysis, quality control, medical research, sports analytics, weather prediction, risk assessment

---

# Quick Reference: Cross-Chapter Formula Sheet

## Algebra & Numbers (Chapters 1-5)

| Topic | Formula |
|-------|---------|
| Complex modulus | \|z\| = sqrt(a^2 + b^2) |
| Quadratic formula | x = [-b +/- sqrt(b^2 - 4ac)] / 2a |
| Sum of roots | -b/a |
| Product of roots | c/a |
| Determinant (2x2) | ad - bc |
| Matrix inverse | adj(A) / det(A) |
| Absolute value | \|x\| < a => -a < x < a |

## Functions & Vectors (Chapters 6-7)

| Topic | Formula |
|-------|---------|
| Parabola vertex | h = -b/2a, k = c - b^2/4a |
| Composition | (fog)(x) = f(g(x)) |
| Vector magnitude | \|u\| = sqrt(x^2 + y^2) |
| Unit vector | u-hat = u / \|u\| |
| Components | F_x = \|F\|cos(theta), F_y = \|F\|sin(theta) |

## Trigonometry (Chapter 8)

| Topic | Formula |
|-------|---------|
| Law of Cosines | a^2 = b^2 + c^2 - 2bc*cos(alpha) |
| Law of Sines | a/sin(alpha) = b/sin(beta) = c/sin(gamma) |
| Area (SAS) | (1/2)ab*sin(gamma) |
| Hero's formula | sqrt[S(S-a)(S-b)(S-c)] |
| Circumradius | R = a / (2*sin(alpha)) |
| Inradius | r = Delta / S |

## Circle Geometry (Chapters 9-11)

| Topic | Formula |
|-------|---------|
| Arc length | l = (theta/360) * 2*pi*r |
| Sector area | A = (theta/360) * pi*r^2 |
| Chord length | 2*sqrt(r^2 - d^2) |
| Tangent length | sqrt(d^2 - r^2) |
| Central angle = 2 * inscribed angle | Same arc |
| Cyclic quad | opposite angles sum to 180 degrees |

## Statistics & Probability (Chapter 12)

| Topic | Formula |
|-------|---------|
| Mean (grouped) | Sum(fx) / Sum(f) |
| Variance | Sum(fx^2)/Sum(f) - [Sum(fx)/Sum(f)]^2 |
| SD | sqrt(Variance) |
| CV | (SD/Mean) * 100% |
| P(A or B) | P(A) + P(B) - P(A and B) |
| P(A and B) independent | P(A) * P(B) |

---

*This Master Chapter Summary covers all 12 chapters of the Grade 10 Mathematics textbook (Federal Board Pakistan, National Curriculum 2022-23). It is designed to serve as the primary reference document for both teachers and students.*
