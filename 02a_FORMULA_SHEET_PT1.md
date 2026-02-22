# FORMULA & QUICK REFERENCE SHEET -- PART 1

## 10th Grade Mathematics (Federal Board Pakistan)

### Chapters 1-6

---

---

## CHAPTER 1: COMPLEX NUMBERS

---

### 1.1 Definitions

| Term | Definition |
|------|-----------|
| Imaginary unit | i = sqrt(-1), where i^2 = -1 |
| Pure imaginary number | A number of the form bi, where b is real and b != 0 |
| Complex number | z = a + bi, where a (real part) and b (imaginary part) are real numbers |
| Conjugate | If z = a + bi, then conjugate z-bar = a - bi |
| Modulus (Absolute value) | \|z\| = sqrt(a^2 + b^2) |

---

### 1.2 Core Formulas

**(*) Square root of a negative number:**

> sqrt(-x) = i * sqrt(x) , where x > 0

**(*) Operations on complex numbers (z1 = a + bi, z2 = c + di):**

> **Addition:** z1 + z2 = (a + c) + (b + d)i
>
> **Subtraction:** z1 - z2 = (a - c) + (b - d)i
>
> **Multiplication:** z1 * z2 = (ac - bd) + (ad + bc)i
>
> **Division:** z1 / z2 = [(a + bi)(c - di)] / (c^2 + d^2)

**(*) Modulus formula:**

> |z| = sqrt(a^2 + b^2) , where z = a + bi

**Multiplicative inverse:**

> 1 / (a + bi) = (a - bi) / (a^2 + b^2)

**Additive inverse:**

> If z = a + bi, then -z = -a - bi

---

### 1.3 Powers of i (Cyclic Pattern)

| Power | Value |
|-------|-------|
| i^1   | i     |
| i^2   | -1    |
| i^3   | -i    |
| i^4   | 1     |
| i^5   | i (cycle repeats every 4) |

**Quick Rule:** To find i^n, divide n by 4 and use the remainder:
- Remainder 0 --> i^n = 1
- Remainder 1 --> i^n = i
- Remainder 2 --> i^n = -1
- Remainder 3 --> i^n = -i

---

### 1.4 Properties of Complex Numbers

Let z, w, v be complex numbers:

| Property | Formula |
|----------|---------|
| Commutative (addition) | z + w = w + z |
| Commutative (multiplication) | z * w = w * z |
| Associative (addition) | (z + w) + v = z + (w + v) |
| Associative (multiplication) | (z * w) * v = z * (w * v) |
| Distributive | z(w + v) = zw + zv |
| Additive identity | z + 0 = z, where 0 = 0 + 0i |
| Multiplicative identity | z * 1 = z, where 1 = 1 + 0i |
| Additive inverse | z + (-z) = 0 |
| Multiplicative inverse | z * (1/z) = 1, provided z != 0 |

---

### 1.5 Properties of Conjugate

| Property | Formula |
|----------|---------|
| **(*) z * z-bar is real** | z * z-bar = a^2 + b^2 = \|z\|^2 |
| Conjugate of sum | conjugate(z1 + z2) = z1-bar + z2-bar |
| Conjugate of product | conjugate(z1 * z2) = z1-bar * z2-bar |
| Conjugate of quotient | conjugate(z1 / z2) = z1-bar / z2-bar |

---

### 1.6 Properties of Modulus

| Property | Formula |
|----------|---------|
| \|z\| = \|-z\| = \|z-bar\| = \|-z-bar\| | All four are equal |
| **(*) z * z-bar = \|z\|^2** | Product of a complex number and its conjugate equals the square of the modulus |

---

### 1.7 Electrical Engineering Application

> E = I * Z
>
> - E = voltage (volts)
> - I = current (amps)
> - Z = impedance (ohms)

---

### 1.8 Memory Aids

- **"i-cycle is MINE"**: i, -1 (Minus one), -i (negative i), 1 (onE) -- the four powers cycle.
- **Conjugate = "flip the sign of i part"**: Just change + to - (or - to +) in front of the imaginary part.
- **Division trick**: Always multiply numerator and denominator by the conjugate of the denominator.

---

### 1.9 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| sqrt(-a) * sqrt(-b) = sqrt(ab) | **WRONG.** sqrt(-a) * sqrt(-b) = i*sqrt(a) * i*sqrt(b) = -sqrt(ab) |
| Modulus \|z\| vs Conjugate z-bar | Modulus is a **real number** (distance); Conjugate is a **complex number** |
| i^2 = 1 | **WRONG.** i^2 = -1 |
| Additive inverse vs Conjugate | Additive inverse of a+bi is -a-bi; Conjugate is a-bi |

---

---

## CHAPTER 2: QUADRATIC EQUATIONS

---

### 2.1 Standard Form

> **ax^2 + bx + c = 0**, where a != 0

---

### 2.2 Solution Methods

#### Method 1: Factorization
- Write in standard form, factor the left side, apply zero-product property.
- **Zero Product Property:** If ab = 0, then a = 0 or b = 0.

#### Method 2: Completing the Square
1. Write in standard form, move constant to right side.
2. Divide by coefficient of x^2 (if not 1).
3. Add (half the coefficient of x)^2 to both sides.
4. Factor left side as perfect square, solve.

> x^2 + bx + (b/2)^2 = (x + b/2)^2

#### Method 3: Quadratic Formula

> **(*)  x = [-b +/- sqrt(b^2 - 4ac)] / (2a)**

---

### 2.3 Discriminant and Nature of Roots

> **(*) Discriminant: D = b^2 - 4ac**

| Value of D | Nature of Roots |
|------------|----------------|
| D > 0 and perfect square | Real, rational, unequal |
| D > 0 and not perfect square | Real, irrational, unequal |
| D = 0 | Real, rational, equal (repeated) |
| D < 0 | Imaginary / Complex (conjugate pair) |

---

### 2.4 Roots and Coefficients Relationship

Let S1, S2 be the roots of ax^2 + bx + c = 0:

> **(*) Sum of roots: S1 + S2 = -b/a**
>
> **(*) Product of roots: S1 * S2 = c/a**

**Useful derived identities:**

| Expression | Formula |
|------------|---------|
| S1^2 + S2^2 | (S1 + S2)^2 - 2(S1 * S2) |
| (S1 - S2)^2 | (S1 + S2)^2 - 4(S1 * S2) |
| S1^3 + S2^3 | (S1 + S2)^3 - 3(S1 * S2)(S1 + S2) |

---

### 2.5 Formation of Quadratic Equation from Roots

> **(*) x^2 - Sx + P = 0**
>
> where S = sum of roots, P = product of roots

---

### 2.6 Equations Reducible to Quadratic Form

| Type | Substitution |
|------|-------------|
| ax^4 + bx^2 + c = 0 | Let y = x^2 |
| aP(x) + a/P(x) = c | Let y = P(x), multiply by y |
| Reciprocal equation: ax^4 + bx^3 + cx^2 + bx + a = 0 | Divide by x^2, let y = x + 1/x; then x^2 + 1/x^2 = y^2 - 2 |
| Exponential: a*k^(2x) + b*k^x + c = 0 | Let y = k^x |
| (x+a)(x+b)(x+c)(x+d) = k, where a+d = b+c | Rearrange pairs so both products give the same middle term, then substitute |

---

### 2.7 Simultaneous Equations (One Linear, One Quadratic)

**Method:** From the linear equation, express one variable in terms of the other. Substitute into the quadratic equation and solve.

---

### 2.8 Quick Reference Table: Completing the Square

| Step | Action |
|------|--------|
| 1 | Write ax^2 + bx + c = 0 |
| 2 | Move c: ax^2 + bx = -c |
| 3 | Divide by a: x^2 + (b/a)x = -c/a |
| 4 | Add (b/2a)^2 to both sides |
| 5 | Factor: (x + b/2a)^2 = (b^2 - 4ac) / 4a^2 |
| 6 | Take square root, solve two linear equations |

---

### 2.9 Memory Aids

- **Quadratic formula song** (to the tune of "Pop Goes the Weasel"):
  "x equals negative b, plus or minus the square root, of b-squared minus four-a-c, all over two-a."
- **Discriminant sign check:** "Positive = two real roots, Zero = one repeated root, Negative = imaginary."
- **Sum of roots = -b/a:** "Sum starts with S, so does 'Sign flip' -- flip the sign of b and divide by a."

---

### 2.10 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| Sum of roots = b/a | **Sum = -b/a** (notice the negative sign!) |
| Product of roots = -c/a | **Product = c/a** (no negative sign!) |
| Completing the square: add (b)^2 | Add **(b/2)^2** -- half the coefficient, then square |
| D > 0 means rational roots | D > 0 AND perfect square means rational; otherwise irrational |
| x^2 - Sx + P = 0 vs x^2 + Sx + P = 0 | The sum S has a **negative** sign in front: x^2 **-** Sx + P = 0 |

---

---

## CHAPTER 3: MATRICES AND DETERMINANTS

---

### 3.1 Definitions

| Term | Definition |
|------|-----------|
| Matrix | A rectangular arrangement of numbers in rows and columns |
| Order | m-by-n (m rows, n columns) |
| Row matrix | Only 1 row |
| Column matrix | Only 1 column |
| Square matrix | Number of rows = Number of columns |
| Null matrix (O) | All elements are zero |
| Diagonal matrix | Non-diagonal elements are all zero |
| Scalar matrix | Diagonal matrix with all diagonal elements equal and non-zero |
| Unit/Identity matrix (I) | Scalar matrix with all diagonal elements = 1 |
| Transpose (A') | Rows become columns and columns become rows |
| Symmetric matrix | A = A' |
| Skew-symmetric matrix | A = -A' (diagonal elements must be 0) |

---

### 3.2 Matrix Operations

**For matrices A and B of same order:**

> **Addition:** A + B (add corresponding elements)
>
> **Subtraction:** A - B (subtract corresponding elements)
>
> **Scalar multiplication:** kA (multiply every element by k)

**For multiplication AB:**

> Number of columns in A **must equal** number of rows in B.
>
> If A is m-by-n and B is n-by-p, then AB is **m-by-p**.

---

### 3.3 Properties of Matrix Operations

| Property | Formula |
|----------|---------|
| Commutative (addition) | A + B = B + A |
| Associative (addition) | (A + B) + C = A + (B + C) |
| Additive identity | A + O = A |
| Additive inverse | A + (-A) = O |
| Associative (multiplication) | (AB)C = A(BC) |
| Left distributive | A(B + C) = AB + AC |
| Right distributive | (A + B)C = AC + BC |
| Multiplicative identity | AI = IA = A |
| **NOT commutative (multiplication)** | AB != BA in general |

**Transpose properties:**

> (A + B)' = A' + B'
>
> (AB)' = B'A'
>
> (A')' = A

---

### 3.4 Determinant of a 2x2 Matrix

> **(*) For A = [[a, b], [c, d]]:**
>
> **|A| = ad - bc**

| Term | Meaning |
|------|---------|
| Singular matrix | |A| = 0 (no inverse exists) |
| Non-singular matrix | |A| != 0 (inverse exists) |

---

### 3.5 Adjoint of a 2x2 Matrix

> **For A = [[a, b], [c, d]]:**
>
> **adj A = [[d, -b], [-c, a]]**
>
> (Swap diagonal elements, change signs of off-diagonal elements)

---

### 3.6 Multiplicative Inverse of a 2x2 Matrix

> **(*) A^(-1) = (1 / |A|) * adj A**
>
> A^(-1) = [1 / (ad - bc)] * [[d, -b], [-c, a]]

**Conditions:**
- A must be a square matrix.
- |A| != 0 (A must be non-singular).

**Verification:** A * A^(-1) = A^(-1) * A = I

**Additional properties:**
- (A^(-1))^(-1) = A
- (AB)^(-1) = B^(-1) * A^(-1)
- |AB| = |A| * |B|

---

### 3.7 Solving Simultaneous Linear Equations

**System:** a1*x + b1*y = c1 and a2*x + b2*y = c2

#### (a) Matrix Inversion Method

> Write as AX = B, then **X = A^(-1) * B**
>
> where A = [[a1, b1], [a2, b2]], X = [[x], [y]], B = [[c1], [c2]]

#### (b) Cramer's Rule

> **(*) x = Dx / D ,  y = Dy / D**
>
> where:
> - D = |A| = a1*b2 - a2*b1  (must be != 0)
> - Dx = |[[c1, b1], [c2, b2]]| = c1*b2 - c2*b1
> - Dy = |[[a1, c1], [a2, c2]]| = a1*c2 - a2*c1

---

### 3.8 Quick Reference: Steps for Inverse

| Step | Action |
|------|--------|
| 1 | Find determinant \|A\| = ad - bc |
| 2 | If \|A\| = 0, inverse does NOT exist |
| 3 | Find adj A: swap a & d, negate b & c |
| 4 | A^(-1) = (1/\|A\|) * adj A |

---

### 3.9 Memory Aids

- **Determinant "cross multiply":** Main diagonal product MINUS off-diagonal product.
- **Adjoint = "Swap-Negate":** Swap the main diagonal, negate the other diagonal.
- **"CR-D" for Cramer's Rule:** Column Replace with constants, then Divide by D.
- **Matrix multiplication order check:** "Columns of first = Rows of second" -- think **CR** (Columns-Rows must match).

---

### 3.10 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| AB = BA | Matrix multiplication is **NOT commutative** in general |
| Determinant is a matrix | Determinant is a **number**, not a matrix |
| adj A = [[a, -c], [-b, d]] | adj A = [[**d**, -b], [-c, **a**]] -- swap **main diagonal** |
| A^(-1) exists for all matrices | A^(-1) exists **only if \|A\| != 0** |
| (AB)^(-1) = A^(-1) B^(-1) | **(AB)^(-1) = B^(-1) A^(-1)** -- order reverses! |

---

---

## CHAPTER 4: LINEAR AND QUADRATIC INEQUALITIES

---

### 4.1 Properties of Inequalities

**(i) Addition/Subtraction Property:**

> If a > b, then a + c > b + c and a - c > b - c

**(ii) Multiplication/Division Property:**

> If c > 0 (positive): a < b implies ac < bc and a/c < b/c
>
> **(*) If c < 0 (negative): a < b implies ac > bc and a/c > b/c**
>
> (Multiplying or dividing by a **negative** number **reverses** the inequality sign!)

---

### 4.2 Trichotomy Property

> For any two real numbers a and b, **exactly one** of these is true:
>
> a < b,  a = b,  a > b

---

### 4.3 Graphing Inequalities (One Variable)

| Symbol | Graph notation |
|--------|---------------|
| < or > | Open circle (point NOT included) |
| <= or >= | Closed/filled circle (point IS included) |

---

### 4.4 Solving Quadratic Inequalities

**Method: Critical Points + Test Intervals**

1. Solve the related equation (set expression = 0) to find **critical points**.
2. Critical points divide the number line into **intervals**.
3. **Test one value** from each interval in the original inequality.
4. Select intervals where the inequality is satisfied.

**Quick Rule:**

| Inequality type | Solution format |
|----------------|----------------|
| (x - a)(x - b) > 0 | x < a OR x > b (outside the roots) |
| (x - a)(x - b) < 0 | a < x < b (between the roots) |

(Assuming a < b)

---

### 4.5 Absolute Value

**Definition:**

> **(*)  \|x\| = x if x >= 0 ; \|x\| = -x if x < 0**

**Key formulas for equations:**

> \|x\| = a  -->  x = a  or  x = -a  (a >= 0)
>
> \|x\| = -a  -->  No solution (if a > 0, since absolute value is never negative)

**Key formulas for inequalities:**

> **(*) \|x\| < a  -->  -a < x < a**
>
> **(*) \|x\| >= a  -->  x <= -a  or  x >= a**

---

### 4.6 Linear Inequalities in Two Variables

**General form:** ax + by < c (or <=, >, >=)

**Graphing steps:**
1. Graph the boundary line (ax + by = c).
   - Use **dashed line** for < or >.
   - Use **solid line** for <= or >=.
2. Test a point (usually (0,0) if not on the line).
3. Shade the region that satisfies the inequality.

---

### 4.7 System of Linear Inequalities

> The **solution** is the **intersection** (overlapping region) of all individual inequality solutions.

---

### 4.8 Quick Reference Table

| Expression | Meaning |
|-----------|---------|
| x > 3 | All values greater than 3 (open circle at 3, arrow right) |
| x <= -2 | All values less than or equal to -2 (closed circle at -2, arrow left) |
| -1 < x < 5 | All values between -1 and 5, not including endpoints |
| \|x - a\| <= d | Values within distance d from a: a - d <= x <= a + d |

---

### 4.9 Memory Aids

- **"Negative flip":** Multiplying/dividing by a negative? **FLIP the inequality sign!**
- **Absolute value "less than = between":** |x| < a means x is sandwiched: -a < x < a.
- **Absolute value "greater than = outside":** |x| > a means x runs away: x < -a or x > a.
- **Dashed vs Solid line:** "Strictly" (< or >) = dashed; "or equal" (<= or >=) = solid.

---

### 4.10 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| -3x > 9 --> x > -3 | **x < -3** (dividing by negative reverses the sign!) |
| \|x\| = -5 has solution x = 5 or -5 | **No solution** -- absolute value is never negative |
| \|x\| < a means x < a | \|x\| < a means **-a < x < a** (two-sided!) |
| Dashed line for <= | Dashed line is for **strict** inequalities (< or >) only |
| (x-2)(x-5) > 0 means 2 < x < 5 | Means x < 2 **OR** x > 5 (outside the roots for > 0) |

---

---

## CHAPTER 5: ALGEBRAIC FRACTIONS

---

### 5.1 Key Definitions

| Term | Definition |
|------|-----------|
| Polynomial | Expression with non-negative integer exponents: a_n*x^n + ... + a_1*x + a_0 |
| Rational expression | P(x) / Q(x), where P and Q are polynomials and Q(x) != 0 |
| Irrational expression | Algebraic expression that cannot be written as a ratio of two polynomials |
| Degree of polynomial | Highest exponent of the variable |
| Leading coefficient | Coefficient of the highest degree term |

**Types of polynomials by terms:**

| Name | Number of terms | Example |
|------|----------------|---------|
| Monomial | 1 | 3x^2 |
| Binomial | 2 | x + 5 |
| Trinomial | 3 | x^2 + 2x + 1 |

**Types of polynomials by degree:**

| Name | Degree | Example |
|------|--------|---------|
| Constant | 0 | 5 |
| Linear | 1 | 2x - 3 |
| Quadratic | 2 | x^2 + x + 1 |
| Cubic | 3 | x^3 - 2x |

---

### 5.2 Simplification of Rational Expressions

> **To reduce to lowest form:**
> 1. Factorize numerator and denominator completely.
> 2. Cancel common factors.
> 3. Write the remaining expression.

**Key factorization identities (frequently used):**

> a^2 - b^2 = (a - b)(a + b)
>
> a^3 - b^3 = (a - b)(a^2 + ab + b^2)
>
> a^3 + b^3 = (a + b)(a^2 - ab + b^2)

---

### 5.3 Operations on Algebraic Fractions

**(*) Addition/Subtraction (same denominator):**

> P/R +/- Q/R = (P +/- Q) / R

**(*) Addition/Subtraction (different denominators):**

> P/Q +/- R/S = (PS +/- QR) / QS
>
> (Find LCD, convert fractions, then add/subtract numerators)

**(*) Multiplication:**

> (P/Q) * (R/S) = (P*R) / (Q*S)

**(*) Division:**

> (P/Q) / (R/S) = (P/Q) * (S/R) = (P*S) / (Q*R)
>
> (Multiply by the reciprocal of the divisor)

---

### 5.4 Solving Rational Equations

**Steps:**
1. Find the LCD (Least Common Denominator) of all fractions.
2. Multiply every term on both sides by the LCD.
3. Simplify and solve the resulting equation.
4. **Check for extraneous solutions** -- any solution that makes a denominator zero must be rejected.

---

### 5.5 Important Algebraic Identities Quick Reference

| Identity | Expansion |
|----------|-----------|
| (a + b)^2 | a^2 + 2ab + b^2 |
| (a - b)^2 | a^2 - 2ab + b^2 |
| a^2 - b^2 | (a + b)(a - b) |
| (a + b)^3 | a^3 + 3a^2*b + 3a*b^2 + b^3 |
| (a - b)^3 | a^3 - 3a^2*b + 3a*b^2 - b^3 |
| a^3 + b^3 | (a + b)(a^2 - ab + b^2) |
| a^3 - b^3 | (a - b)(a^2 + ab + b^2) |

---

### 5.6 Complex Fractions

> **Method:** Simplify numerator and denominator separately into single fractions, then divide (multiply by reciprocal of denominator fraction).

---

### 5.7 Memory Aids

- **"Flip and Multiply"** for division of fractions: Dividing by a fraction = multiplying by its reciprocal.
- **"LCD clears fractions"**: Multiplying every term by the LCD eliminates all denominators at once.
- **"Check your zeros!"**: After solving a rational equation, always substitute back to ensure no denominator equals zero.
- **Difference of cubes:** "Same, Opposite, Always Positive" (SOAP) for signs in a^3 - b^3 = (a-b)(a^2+ab+b^2).

---

### 5.8 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| (a+b)/c = a/(c) + b | **(a+b)/c = a/c + b/c** -- distribute the denominator to ALL terms |
| Cancel terms across + or - | You can only cancel **factors**, not individual terms! |
| x/(x+1) = 1/1 = 1 by "cancelling x" | **Cannot cancel** -- x is a term, not a factor of the denominator |
| Extraneous solutions are valid | Extraneous solutions must be **rejected** -- they make denominators zero |
| a^3 + b^3 = (a+b)^3 | a^3 + b^3 = (a+b)(a^2 - ab + b^2); while (a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 |

---

---

## CHAPTER 6: FUNCTIONS AND GRAPHS

---

### 6.1 Key Definitions

| Term | Definition |
|------|-----------|
| Cartesian product A x B | {(x, y) \| x in A and y in B} |
| Relation | Any subset of A x B |
| **Function f: A -> B** | A relation where every element of A maps to **exactly one** element of B |
| Domain | Set of all first elements (inputs / x-values) |
| Range | Set of all second elements (outputs / y-values) |
| Co-domain | The entire set B (range is a subset of co-domain) |

---

### 6.2 Types of Functions

| Type | Definition |
|------|-----------|
| Into | range(f) is a proper subset of B (some elements of B have no pre-image) |
| **Onto (Surjective)** | range(f) = B (every element of B is an image) |
| **One-to-one (1-1)** | Distinct elements of A have distinct images in B (no repetition in second elements) |
| Injective | Both into AND one-to-one |
| **(*) Bijective** | Both onto AND one-to-one (required for inverse to exist) |

---

### 6.3 Operations on Functions

For functions f(x) and g(x):

| Operation | Formula |
|-----------|---------|
| Addition | (f + g)(x) = f(x) + g(x) |
| Subtraction | (f - g)(x) = f(x) - g(x) |
| Multiplication | (f * g)(x) = f(x) * g(x) |
| Division | (f / g)(x) = f(x) / g(x), where g(x) != 0 |
| **(*) Composition** | (fog)(x) = f(g(x)) |

**Important:** fog(x) != gof(x) in general (composition is NOT commutative).

---

### 6.4 Inverse of a Function

> **(*) If y = f(x), then x = f^(-1)(y)**
>
> **Domain of f = Range of f^(-1)**
>
> **Range of f = Domain of f^(-1)**

**Steps to find f^(-1)(x):**
1. Write y = f(x).
2. Solve for x in terms of y.
3. Replace x with f^(-1)(y).
4. Replace y with x to get f^(-1)(x).

**Verification:**

> f^(-1)(f(x)) = x  and  f(f^(-1)(x)) = x

**Condition:** f must be **bijective** for f^(-1) to exist.

---

### 6.5 Graphs of Standard Functions

| Function | Type | Shape | Key Features |
|----------|------|-------|-------------|
| y = 0 | Zero polynomial | Horizontal line on x-axis | Passes through origin |
| y = c (constant) | Constant | Horizontal line at y = c | Parallel to x-axis |
| y = mx + b | Linear | Straight line | Slope = m, y-intercept = b |
| y = x | Identity | Straight line | Bisects 1st and 3rd quadrants, passes through origin |
| y = \|x\| | Absolute value | V-shape | Vertex at origin, symmetric about y-axis |
| y = x^2 | Quadratic | Parabola (U-shape) | Opens upward, vertex at origin |
| y = x^3 | Cubic | S-curve | Passes through origin, symmetric about origin |
| y = sqrt(x) | Square root | Half-parabola | Domain: x >= 0, starts at origin |
| y = 1/x | Reciprocal | Hyperbola (two branches) | Never touches axes, undefined at x = 0 |
| y = a^x | Exponential | Increasing/decreasing curve | Horizontal asymptote y = 0, passes through (0,1) |

---

### 6.6 Quadratic Function: Vertex Form

> **(*)  y = ax^2 + bx + c  has vertex at (h, k) where:**
>
> **h = -b / (2a)**
>
> **k = c - b^2 / (4a)**

| Condition | Parabola direction |
|-----------|-------------------|
| a > 0 | Opens **upward** (vertex is minimum) |
| a < 0 | Opens **downward** (vertex is maximum) |

**Axis of symmetry:** x = h = -b/(2a)

---

### 6.7 Gradient (Slope) of a Curve

> **(*) Gradient at a point = slope of the tangent line at that point**
>
> Gradient = (change in y) / (change in x) = (y2 - y1) / (x2 - x1)

- Tangent going **upward** left to right --> **positive** gradient
- Tangent going **downward** left to right --> **negative** gradient
- **Horizontal** tangent --> gradient = **zero**

---

### 6.8 Vertical Line Test

> A graph represents a function if and only if **every vertical line** intersects the graph at **most one point**.

---

### 6.9 Intercepts

| Intercept | How to find |
|-----------|-------------|
| x-intercept | Set y = 0, solve for x |
| y-intercept | Set x = 0, solve for y |

---

### 6.10 Function of the Form y = nx (n is integer)

- All lines pass through the **origin**.
- n > 0: line passes through **1st and 3rd** quadrants.
- n < 0: line passes through **2nd and 4th** quadrants.

---

### 6.11 Function y = x^n (n is +ve or -ve integer, x > 0)

- All graphs pass through **(1, 1)**.
- For n = 0: horizontal line y = 1.
- For n > 0: graph rises in the first quadrant.
- For n < 0: graph is a reciprocal curve (approaches axes but never touches).

---

### 6.12 Memory Aids

- **"DRIR" for inverse:** Domain & Range get Interchanged in the inverse function.
- **Bijective = "B for Both":** Both one-to-one AND onto.
- **Composition order:** fog(x) = f(g(x)) -- "g goes first, then f acts on the result." Think: **inside out**.
- **Parabola direction:** "Positive a = smile (opens up), Negative a = frown (opens down)."
- **Vertical Line Test:** "One vertical line, one point -- it's a function. Two points -- it's not."

---

### 6.13 Don't Confuse!

| Students often confuse... | Correct version |
|---------------------------|-----------------|
| fog(x) = gof(x) | Composition is **NOT commutative**: fog != gof in general |
| f^(-1)(x) = 1/f(x) | f^(-1) is the **inverse function**, NOT the reciprocal! |
| Into vs Onto | Into: range is a **proper subset** of B; Onto: range **equals** B |
| Vertex at (-b/a, k) | Vertex x-coordinate is **-b/(2a)**, not -b/a |
| Domain of sqrt(x) includes negatives | Domain of sqrt(x) is **x >= 0** only |
| y = x^2 and y = 2x have same shape | x^2 is a **parabola**; 2x is a **straight line** |

---

---

## MASTER QUICK-REFERENCE: TOP FORMULAS (ALL 6 CHAPTERS)

| # | Formula | Chapter |
|---|---------|---------|
| 1 | i = sqrt(-1), i^2 = -1 | Ch 1 |
| 2 | \|z\| = sqrt(a^2 + b^2) | Ch 1 |
| 3 | z * z-bar = \|z\|^2 | Ch 1 |
| 4 | x = [-b +/- sqrt(b^2 - 4ac)] / 2a | Ch 2 |
| 5 | Discriminant D = b^2 - 4ac | Ch 2 |
| 6 | Sum of roots = -b/a, Product = c/a | Ch 2 |
| 7 | Equation from roots: x^2 - Sx + P = 0 | Ch 2 |
| 8 | det A = ad - bc (2x2 matrix) | Ch 3 |
| 9 | A^(-1) = (1/\|A\|) * adj A | Ch 3 |
| 10 | Cramer: x = Dx/D, y = Dy/D | Ch 3 |
| 11 | Negative multiplier flips inequality sign | Ch 4 |
| 12 | \|x\| < a --> -a < x < a | Ch 4 |
| 13 | \|x\| >= a --> x <= -a or x >= a | Ch 4 |
| 14 | P/Q * R/S = PR/QS ; (P/Q)/(R/S) = PS/QR | Ch 5 |
| 15 | (fog)(x) = f(g(x)) | Ch 6 |
| 16 | Vertex: h = -b/(2a), k = c - b^2/(4a) | Ch 6 |
| 17 | Gradient = (y2 - y1)/(x2 - x1) | Ch 6 |

---

*End of Formula Sheet -- Part 1 (Chapters 1-6)*
