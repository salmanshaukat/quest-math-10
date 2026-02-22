=== PAGE 45 ===
[FIXED OCR TEXT]

**Solution:**

| (i) x² - x + 2 = 0                       | (ii) 3x² - 11x - 4 = 0                    |
|--------------------------------------------|---------------------------------------------|
| Here a = 1, b = -1, c = 2                 | a = 3, b = -11, c = -4                     |
| Sum of the roots = S₁ + S₂                | Sum of roots = S₁ + S₂                     |
| = -b/a = -(-1)/1 = 1                      | = -b/a = -(-11)/3 = 11/3                   |
| Product of roots = S₁S₂                   | Product of roots = S₁S₂                    |
| = c/a = 2/1 = 2                           | = c/a = -4/3                               |

| (iii) x² - 7x + 5 = 0                    | (iv) 6s² + 2s + 3 = 0                      |
|--------------------------------------------|---------------------------------------------|
| a = 1, b = -7, c = 5                      | a = 6, b = 2, c = 3                        |
| S₁ + S₂ = -b/a = -(-7)/1 = 7             | S₁ + S₂ = -b/a = -(2)/6 = -1/3            |
| S₁S₂ = c/a = 5/1 = 5                     | S₁S₂ = c/a = 3/6 = 1/2                    |

**Example:** If S₁, S₂ are the roots of x² - 8x + 20 = 0. Find the values of
(i) S₁² + S₂²    (ii) (S₁ - S₂)²    (iii) 1/(S₁ + 1) + 1/(S₂ + 1)

**Solution:** Here a = 1, b = -8, c = 20
Since S₁, S₂ are the roots of x² - 8x + 20 = 0,
∴ S₁ + S₂ = -b/a = -(-8)/1 = 8  and  S₁S₂ = c/a = 20/1 = 20

(i) Now  S₁² + S₂² = S₁² + S₂² + 2S₁S₂ - 2S₁S₂
= (S₁ + S₂)² - 2S₁S₂
= (8)² - 2(20)
= 64 - 40 = 24

(ii) (S₁ - S₂)² = S₁² + S₂² - 2S₁S₂
= S₁² + S₂² + 2S₁S₂ - 4S₁S₂
= (S₁ + S₂)² - 4S₁S₂
= (8)² - 4(20)
= 64 - 80 = -16

(iii) 1/(S₁ + 1) + 1/(S₂ + 1) = (S₂ + 1 + S₁ + 1)/((S₁ + 1)(S₂ + 1))
= (S₁ + S₂ + 2)/(S₁S₂ + (S₁ + S₂) + 1)
= (8 + 2)/(20 + 8 + 1) = 10/29

**Note:**
Instead of S₁, S₂, we can use α and β.

Unit-02: Quadratic Equations                          National Book Foundation
                                                                          45
---
No diagram on this page.


=== PAGE 55 ===
[FIXED OCR TEXT]

# 03

# Matrices And Determinants

**After studying this unit students will be able to:**

- Display information in the form of matrices of order 2.
- Calculate product of scalar quantity and a matrix.
- Solve situations involving sum, difference and product of two matrices.
- Evaluate the determinant and inverse of a matrix of order 2 by 2.
- Solve the simultaneous linear equations in two variables using matrix inversion method and Cramer's rule.
- Explain with examples, how mathematics plays a key role in the development of new scientific theories and technologies.
- Apply concepts of matrices to real world problems.

Matrices are used for solving system of linear equations by several methods. These methods are used in computer programs, in traffic flow, schedule airline flights, engineering, accounting, economics etc.

---
[DIAGRAM DESCRIPTION]

At the bottom of the page, there is an illustrative image resembling a dark bulletin board or blackboard. Pinned to the board with thumbtacks are several paper notes, each displaying a different matrix-related example:

1. Top-left note: A system of linear equations written as:
   x + y = 7
   x - y = 3

2. Top-right note: A column matrix [1; 2] (a 2-by-1 matrix with entries 1 and 2).

3. Center note: A row matrix [5  6] (a 1-by-2 matrix with entries 5 and 6).

4. Bottom-left note: A 2-by-2 matrix [a  b; c  d] with entries a, b, c, d.

5. Bottom-right note: A row matrix [x  y] (a 1-by-2 matrix with entries x and y).

The notes are arranged informally on the board to visually introduce various forms of matrices and related equations as a chapter opener.


=== PAGE 59 ===
[FIXED OCR TEXT]

**Check Point:**
Write the most appropriate type of following matrices.

A = [15  0; 0  45/3],    B = [0  3; 3  0],    C = [√9  5 - 5; 3/5 - 1  15; 5  5×3]

**Transpose of a Matrix**

If rows (columns) of a matrix P are changed into columns (rows) then the resulting matrix is called transpose of the matrix P. It is represented by Pᵗ.

**Example:**

If a matrix G represents number of gold medals and silver medals won by three friends, as under:

              Gold    Silver
              medals  medals
G = [5  3]   Azka
    [2  6]   Aemen        then find Gᵗ.
    [1  7]   Khansa

**Key Fact:**
If order of a matrix P is m-by-n, then order of Pᵗ is n-by-m.

**Solution:**
            Azka  Aemen  Khansa
Gᵗ = [5  2  1]  Gold medals
     [3  6  7]  Silver medals

**Symmetric Matrices and Skew Symmetric Matrices**

For a square matrix A:
- A is Symmetric if A = Aᵗ
- A is Skew Symmetric if A = -Aᵗ

**Example:**
From the following, check for symmetric and skew symmetric matrices.

If S = [5  3; 3  5], then Sᵗ = [5  3; 3  5].
As S = Sᵗ, therefore S is a symmetric matrix.

If T = [5  2; 6  11], then Tᵗ = [5  6; 2  11].
As T ≠ Tᵗ, therefore T is not a symmetric matrix.

**Check Point:**
If [−3  x; 4  2]ᵗ = [−3  4; 2  2], then find x = ?

If V = [0  −2; 2  0],
then Vᵗ = [0  2; −2  0] = −[0  −2; 2  0] = −Vᵗ

As V = −Vᵗ, therefore V is a skew symmetric matrix.

Unit-03: Matrices And Determinants                    National Book Foundation
                                                                          59
---
[DIAGRAM DESCRIPTION]

In the middle of the page, there is a flowchart/diagram illustrating the classification of symmetric and skew symmetric matrices:

- At the top center, there is a box labeled "For a square matrix A".
- Below it, two branches extend to the left and right via arrows.
- The left branch leads to a rounded box stating: "A is Symmetric if A = Aᵗ"
- The right branch leads to a rounded box stating: "A is Skew Symmetric if A = −Aᵗ"

This is a simple two-way classification diagram showing the two possible symmetry properties of a square matrix.

Additionally, on the right side of the page, there is a dark "Check Point" box containing the transpose problem: If the transpose of matrix [−3, x; 4, 2] equals [−3, 4; 2, 2], then find x = ?


=== PAGE 78 ===
[FIXED OCR TEXT]

# 04

# Linear and Quadratic Inequalities

**After studying this unit students will be able to:**

- Solve linear inequalities in one variable.
- Solve quadratic inequalities in one variable.
- Solve two linear inequalities with two unknowns simultaneously.
- Interpret and identify the region in plane bounded by two linear inequalities in two unknowns.

You are checking a bag at an airport. Bags can weigh no more than 60 pounds.
Your bag weighs 26.5 pounds. Find the possible weights 'w' (in pounds) that you can add to the bag.

Write a model:
Weight of bag + Weight you can add ≤ Weight limit
26.5 + w ≤ 60                              (writing inequalities)
26.5 + w − 26.5 ≤ 60 − 26.5               (subtracting 26.5 from both sides)
w ≤ 33.5                                   (simplifying)

You can add less than 33.5 pounds.

---
[DIAGRAM DESCRIPTION]

At the bottom of the page, there is a photograph showing an airport baggage area. The image depicts luggage on a conveyor belt or baggage handling area at an airport, with what appears to be a rounded architectural ceiling or structure visible in the background. The photo is in black and white (grayscale) and serves as a real-world context illustration for the inequality word problem about checking a bag at an airport with a weight limit of 60 pounds.


=== PAGE 91 ===
[FIXED OCR TEXT]

−4 < 3x − 2   and   3x − 2 < 4
−4 + 2 < 3x   and   3x < 4 + 2
−2 < 3x   and   3x < 6
−2/3 < x   and   x < 2

Solution set = {x : −2/3 < x < 2}

[Number line showing open circles at −2/3 and 2, with the region between them shaded, scale from −6 to 6]

**Example:** Solve |−4x − 5| + 3 < 9. Graph the solution.

**Solution:** |−4x − 5| + 3 < 9  ⟹  |−4x − 5| < 6
−6 < −4x − 5  and  −4x − 5 < 6
−1 < −4x   and   −4x < 11
1/4 > x   and   x > −11/4

**Key Fact:**
|x| ≤ a  implies that  −a ≤ x ≤ a
|x| ≥ a  implies that  x ≤ −a  or  x ≥ a

We can write as: −11/4 < x < 1/4

Solution set = {x : −11/4 < x < 1/4}

[Number line showing open circles at −11/4 and 1/4, with the region between them shaded, scale from −6 to 6]

**Example:**
You are buying a new calculator and find 10 models in a shop. The prices are Rs. 980, Rs. 570, Rs. 470, Rs. 820, Rs. 560, Rs. 770, Rs. 580, Rs. 390, Rs. 680 and Rs. 550.

a. Find the mean of the calculator price.
b. You are willing to pay the mean price with an absolute deviation of at most Rs. 100. How many of the calculator prices meet your condition?

**Solution:**

a. Find the mean first:

Mean = (980 + 570 + 470 + 820 + 560 + 770 + 580 + 390 + 690 + 550) / 10
     = 6380 / 10 = 638

Unit-04: Linear and Quadratic Inequalities               National Book Foundation
                                                                             91
---
[DIAGRAM DESCRIPTION]

There are two number lines on this page:

1. **First number line (for the solution of |3x − 2| < 4):**
   A horizontal number line with tick marks at integer values from approximately −6 to 6. Open circles (hollow dots) are placed at x = −2/3 and x = 2. The segment between −2/3 and 2 is shaded/highlighted to indicate the solution set {x : −2/3 < x < 2}. Arrows extend from both ends of the number line indicating it continues in both directions.

2. **Second number line (for the solution of |−4x − 5| + 3 < 9):**
   A horizontal number line with tick marks at integer values from approximately −6 to 6. Open circles (hollow dots) are placed at x = −11/4 (which is −2.75) and x = 1/4 (which is 0.25). The segment between −11/4 and 1/4 is shaded/highlighted to indicate the solution set {x : −11/4 < x < 1/4}. Arrows extend from both ends of the number line indicating it continues in both directions.
