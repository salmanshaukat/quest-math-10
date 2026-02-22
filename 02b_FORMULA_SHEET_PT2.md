# FORMULA & QUICK REFERENCE SHEET -- PART 2
## 10th Grade Mathematics (Federal Board, Pakistan)
### Chapters 7--12

---

# CHAPTER 7: VECTORS IN THE PLANE (pp. 140--159)

## 7.1 Core Definitions

| Term | Definition |
|------|-----------|
| **Scalar** | A quantity with magnitude only (e.g., mass, speed, distance) |
| **Vector** | A quantity with both magnitude and direction (e.g., force, velocity, displacement) |
| **Position Vector** | Vector from origin O to point P: **OP** |
| **Zero / Null Vector** | **0** = [0, 0]; has zero length and no fixed direction |
| **Negative Vector** | Same magnitude, opposite direction: if **u** = [x, y], then -**u** = [-x, -y] |

---

## 7.2 Key Formulas

### Magnitude (Norm) of a Vector *

If **u** = [x, y], then:

> |**u**| = sqrt(x^2 + y^2)

Properties:
- |**u**| >= 0 for any vector **u**
- |**u**| = 0 if and only if **u** = **0**
- |c**u**| = |c| . |**u**| where c is a scalar
- |-**u**| = |**u**|

### Unit Vector *

> **u-hat** = **u** / |**u**| = [ x / sqrt(x^2+y^2) , y / sqrt(x^2+y^2) ]

A unit vector has magnitude 1. Any vector **u** = |**u**| . **u-hat**.

### Position Vector Between Two Points *

If A and B have position vectors **a** and **b** respectively:

> **AB** = **b** - **a**

### Vector in Terms of i and j *

For point P(x, y):

> **OP** = x**i** + y**j**

where **i** = unit vector along x-axis, **j** = unit vector along y-axis.

When tail is NOT at origin (from P(x1,y1) to Q(x2,y2)):

> **PQ** = (x2 - x1)**i** + (y2 - y1)**j**

---

## 7.3 Operations on Vectors

### Scalar Multiplication

If **u** = [x, y] and k is a scalar:

> k**u** = [kx, ky]

- k > 0 : same direction as **u**
- k < 0 : opposite direction to **u**
- k = 0 : gives the zero vector

### Addition

> [x1, y1] + [x2, y2] = [x1 + x2, y1 + y2]

Or: (x1**i** + y1**j**) + (x2**i** + y2**j**) = (x1+x2)**i** + (y1+y2)**j**

Laws of addition:
- Head-to-Tail Rule (Triangle Law)
- Parallelogram Law: **p** + **q** = diagonal of parallelogram
- Polygon Law: extends to any number of vectors
- Commutative: **p** + **q** = **q** + **p**
- Identity: **a** + **0** = **a**
- Inverse: **a** + (-**a**) = **0**

### Subtraction

> **u** - **v** = **u** + (-**v**) = [x1 - x2, y1 - y2]

---

## 7.4 Rectangular Components of a Vector

If **F** makes angle theta with x-axis:

> F_x = |**F**| cos(theta) ... (horizontal component)
> F_y = |**F**| sin(theta) ... (vertical component)

Conversely:

> |**F**| = sqrt(F_x^2 + F_y^2) *
> theta = tan^(-1)(F_y / F_x) *

---

## 7.5 Parallel Vectors

**u** and **v** are parallel if **u** = k**v** for some scalar k.

Condition: if **u** = [x1, y1] and **v** = [x2, y2], then:

> x1/x2 = y1/y2 = k

- k > 0 : same direction
- k < 0 : opposite direction (anti-parallel)

## 7.6 Equal Vectors

**u** = **v** if and only if x1 = x2 AND y1 = y2.

---

## 7.7 Translation by a Vector

Point P(x, y) translated by vector [a, b]:

> P' = (x + a, y + b)

---

## 7.8 Ratio Formula (Section Formula) *

If P divides line segment AB in ratio m:n **internally**, and **a**, **b** are position vectors of A and B:

> **r** = (m**b** + n**a**) / (m + n)

If P divides AB in ratio m:n **externally**:

> **r** = (m**b** - n**a**) / (m - n)

**Midpoint** (m = n):

> **r** = (**a** + **b**) / 2

---

## 7.9 Memory Aids

- **"MagSQR"**: Magnitude = SQuare Root of sum of squares of components.
- For unit vector, always **divide by the magnitude**.
- **AB = B - A** (terminal minus initial) -- "Destination minus Departure".
- Ratio formula: **"m times Far + n times Near, all over m+n"** (m is ratio for the farther point B).

## 7.10 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| **AB** = **a** - **b** | **AB** = **b** - **a** (terminal minus initial) |
| Adding magnitudes to add vectors | Add component-wise: [x1+x2, y1+y2] |
| Unit vector = **u** * \|**u**\| | Unit vector = **u** / \|**u**\| |
| Position vector when tail is not at O | Use **PQ** = (x2-x1)**i** + (y2-y1)**j**, NOT just [x2, y2] |

---
---

# CHAPTER 8: APPLICATION OF TRIGONOMETRY (pp. 160--195)

## 8.1 Trigonometric Ratios (Review)

For right triangle with angle theta, perpendicular a, base b, hypotenuse c:

| Ratio | Formula |
|-------|---------|
| sin(theta) | a/c (perpendicular / hypotenuse) |
| cos(theta) | b/c (base / hypotenuse) |
| tan(theta) | a/b (perpendicular / base) |
| cosec(theta) | c/a = 1/sin(theta) |
| sec(theta) | c/b = 1/cos(theta) |
| cot(theta) | b/a = 1/tan(theta) |

---

## 8.2 Signs of Trig Ratios by Quadrant

| Quadrant | sin | cos | tan |
|----------|-----|-----|-----|
| I (0--90) | + | + | + |
| II (90--180) | + | - | - |
| III (180--270) | - | - | + |
| IV (270--360) | - | + | - |

**Memory aid:** **"All Students Take Calculus"** (All, Sin, Tan, Cos are positive in Q-I, Q-II, Q-III, Q-IV respectively)

---

## 8.3 Supplementary Angle Identities (90 to 180 degrees)

> sin(180 - theta) = sin(theta)
> cos(180 - theta) = -cos(theta)
> tan(180 - theta) = -tan(theta)

---

## 8.4 Law of Cosines *

For any triangle ABC with sides a, b, c opposite to angles alpha, beta, gamma:

> a^2 = b^2 + c^2 - 2bc cos(alpha)
> b^2 = a^2 + c^2 - 2ac cos(beta)
> c^2 = a^2 + b^2 - 2ab cos(gamma)

Rearranged to find angles:

> cos(alpha) = (b^2 + c^2 - a^2) / (2bc)
> cos(beta) = (a^2 + c^2 - b^2) / (2ac)
> cos(gamma) = (a^2 + b^2 - c^2) / (2ab)

**Use when:** SAS (two sides + included angle) or SSS (three sides given).

**Special case:** When gamma = 90 degrees, cos(90) = 0, so a^2 = b^2 + c^2 (Pythagoras' Theorem).

---

## 8.5 Law of Sines *

> a / sin(alpha) = b / sin(beta) = c / sin(gamma) = 2R

where R = circumradius.

Equivalently:

> sin(alpha)/a = sin(beta)/b = sin(gamma)/c

**Use when:** AAS/ASA (two angles + one side) or SSA (two sides + non-included angle).

### Ambiguous Case (SSA) Quick Reference

| alpha | Condition | Number of Triangles |
|-------|-----------|-------------------|
| Acute | a < h (h = b sin alpha) | 0 (no triangle) |
| Acute | a = h | 1 (right triangle) |
| Acute | h < a < b | 2 triangles |
| Acute | a >= b | 1 triangle |
| Obtuse | a <= b | 0 (no triangle) |
| Obtuse | a > b | 1 triangle |

---

## 8.6 Law of Tangents

> (a - b)/(a + b) = tan[(alpha - beta)/2] / tan[(alpha + beta)/2]
> (b - c)/(b + c) = tan[(beta - gamma)/2] / tan[(beta + gamma)/2]
> (c - a)/(c + a) = tan[(gamma - alpha)/2] / tan[(gamma + alpha)/2]

**Use when:** Same situations as Law of Cosines (SAS), as an alternative method.

---

## 8.7 Half-Angle Formulas

Let S = (a + b + c) / 2 (semi-perimeter).

### Cosine Half-Angle *

> cos(alpha/2) = sqrt[ S(S-a) / (bc) ]
> cos(beta/2)  = sqrt[ S(S-b) / (ac) ]
> cos(gamma/2) = sqrt[ S(S-c) / (ab) ]

### Sine Half-Angle

> sin(alpha/2) = sqrt[ (S-b)(S-c) / (bc) ]
> sin(beta/2)  = sqrt[ (S-a)(S-c) / (ac) ]
> sin(gamma/2) = sqrt[ (S-a)(S-b) / (ab) ]

### Tangent Half-Angle

> tan(alpha/2) = sqrt[ (S-b)(S-c) / (S(S-a)) ]
> tan(beta/2)  = sqrt[ (S-a)(S-c) / (S(S-b)) ]
> tan(gamma/2) = sqrt[ (S-a)(S-b) / (S(S-c)) ]

---

## 8.8 Area of a Triangle

### (a) Two Sides and Included Angle *

> Area = (1/2) bc sin(alpha)
> Area = (1/2) ac sin(beta)
> Area = (1/2) ab sin(gamma)

### (b) Two Angles and One Side

> Area = (a^2 sin(beta) sin(gamma)) / (2 sin(alpha))
> Area = (b^2 sin(alpha) sin(gamma)) / (2 sin(beta))
> Area = (c^2 sin(alpha) sin(beta)) / (2 sin(gamma))

### (c) Three Sides -- Heron's Formula *

> Area = sqrt[ S(S-a)(S-b)(S-c) ]

where S = (a + b + c) / 2.

---

## 8.9 Circles Connected with Triangles

Let A = area of triangle, S = semi-perimeter, R = circumradius, r = inradius.

### Circumradius (R)

> R = a / (2 sin alpha) = b / (2 sin beta) = c / (2 sin gamma)
> R = abc / (4A)

### Inradius (r)

> r = A / S

### E-radii (Escribed Circle Radii)

> r1 = A / (S - a) ... (opposite to vertex A)
> r2 = A / (S - b) ... (opposite to vertex B)
> r3 = A / (S - c) ... (opposite to vertex C)

---

## 8.10 Quick Reference: Which Law to Use?

| Given | Method |
|-------|--------|
| Two sides + included angle (SAS) | Law of Cosines (or Law of Tangents) |
| Three sides (SSS) | Law of Cosines (or Half-Angle formulas) |
| Two angles + one side (AAS/ASA) | Law of Sines |
| Two sides + non-included angle (SSA) | Law of Sines (check ambiguous case) |

---

## 8.11 Area of an Equilateral Triangle

For equilateral triangle with side a:

> Area = (sqrt(3)/4) a^2

---

## 8.12 Memory Aids

- **Law of Cosines** pattern: "side-squared = sum of other two squared MINUS 2-product-cosine."
- **Heron's Formula** needs **S first**: S = half the perimeter, then plug into sqrt[S(S-a)(S-b)(S-c)].
- For **R, r, r1, r2, r3**: always compute **S** and **A** (Heron) first.
- **"SOH-CAH-TOA"** for basic trig ratios.

## 8.13 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| Law of Cosines: a^2 = b^2 + c^2 **+** 2bc cos(alpha) | It is **MINUS** 2bc cos(alpha) |
| Using Law of Sines for SAS | Use Law of Cosines for SAS; Sines is for AAS/ASA/SSA |
| Heron's formula: sqrt(S . a . b . c) | It is sqrt[S(S-**a**)(S-**b**)(S-**c**)] -- subtract each side from S |
| r = A * S | r = A / S (inradius = area divided by semi-perimeter) |
| R = abc / A | R = abc / (**4**A) -- don't forget the 4 |

---
---

# CHAPTER 9: CHORDS AND ARCS OF A CIRCLE (pp. 196--214)

## 9.1 Key Theorems

| # | Theorem | Statement |
|---|---------|-----------|
| 9.1 | Unique Circle | One and only one circle can pass through **three non-collinear** points. |
| 9.2 | Centre-to-Midpoint | A straight line drawn from the centre of a circle **to bisect a chord** is **perpendicular** to the chord. |
| 9.3 | Perpendicular from Centre | Perpendicular drawn from the **centre** on a chord **bisects** the chord. |
| 9.4 | Equal Chords Equidistant | Two **congruent chords** of a circle are **equidistant** from the centre. |
| 9.5 | Equidistant Chords Equal | Two chords **equidistant** from the centre are **congruent**. |
| 9.6 | Congruent Arcs -> Equal Chords | If two arcs of a circle (or congruent circles) are congruent, the corresponding **chords are equal**. |
| 9.7 | Equal Chords -> Congruent Arcs | If two chords are equal, their corresponding **arcs are congruent**. |
| 9.8 | Equal Chords -> Equal Central Angles | Equal chords subtend **equal angles** at the centre. |
| 9.9 | Equal Central Angles -> Equal Chords | If central angles are equal, the **chords are equal**. |

**Corollaries:**
- Two circles cannot intersect at more than 2 points.
- Perpendicular bisector of any chord passes through the centre.
- If a diameter bisects a chord, it is perpendicular to it.
- Longer chord is nearer to the centre; shorter chord is farther.

---

## 9.2 Key Formulas

### Arc Length *

> l = (theta / 360) x 2(pi)r

where theta = central angle in degrees, r = radius.

### Chord Length *

For a chord at distance d from centre of circle with radius r:

> Chord length = 2 sqrt(r^2 - d^2)

### Relationship: Perpendicular from Centre to Chord

If chord AB has length L, and the perpendicular from centre O meets AB at M:

> OM^2 + (L/2)^2 = r^2

So: OM = sqrt(r^2 - (L/2)^2) and L = 2 sqrt(r^2 - OM^2)

### Perimeter of a Semicircle

> P = 2r + (pi)r = r(2 + pi)

### Perimeter of a Segment

> P = arc length + chord length = (theta/360) x 2(pi)r + 2 sqrt(r^2 - d^2)

### Area of a Sector *

> A = (theta / 360) x (pi)r^2

### Area of a Segment

> Area of segment = Area of sector - Area of triangle

---

## 9.3 Quick Reference: Central Angle Facts

- Central angle of a semicircle = 180 degrees
- Central angle of a quadrant = 90 degrees
- If a circle is divided into n equal arcs, each central angle = 360/n degrees
- Minor arc: central angle < 180 degrees
- Major arc: central angle > 180 degrees

---

## 9.4 Memory Aids

- **Chord-Centre-Perpendicular** trio: "Any two imply the third" -- if a line from centre bisects a chord, it is perpendicular; if perpendicular from centre to chord, it bisects.
- **Arc length** is just a *fraction* of circumference: (theta/360) of 2(pi)r.
- **Sector area** is just a *fraction* of full area: (theta/360) of (pi)r^2.

## 9.5 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| Arc length formula using diameter | Use **radius** r, not diameter |
| Chord length = 2r | Chord length = 2 sqrt(r^2 - d^2); equals 2r only when d = 0 (diameter) |
| Sector area = (theta/360) x 2(pi)r | That is arc length; sector **area** = (theta/360) x (pi)**r^2** |
| Perpendicular from centre bisects the arc | It bisects the **chord**, not the arc (though it does bisect the arc too) |

---
---

# CHAPTER 10: TANGENTS AND ANGLES OF A CIRCLE (pp. 215--231)

## 10.1 Tangent Theorems

| # | Theorem | Statement |
|---|---------|-----------|
| 10.1 | Perpendicular Line is Tangent | If a line is drawn **perpendicular to a radial segment** at its outer end point, it is **tangent** to the circle. |
| 10.2 | Tangent Perpendicular to Radius * | The tangent and the radial segment at the point of contact are **perpendicular** (90 degrees). |
| 10.3 | Equal Tangents from External Point * | Two tangents drawn from a **point outside** the circle are **equal in length**. |
| 10.4 | External Touch | If two circles touch **externally**: distance between centres = **sum** of radii (d = R + r). |
| 10.5 | Internal Touch | If two circles touch **internally**: distance between centres = **difference** of radii (d = R - r). |
| 10.6 | Alternate Segment Theorem | Angle between a tangent and a chord = angle in the **alternate segment**. |

**Corollaries:**
- Tangents at both ends of a diameter are parallel.
- The two tangents from an external point make equal angles with the line joining that point to the centre.
- If two congruent circles touch externally, distance between centres = diameter of either circle.
- If two congruent circles touch internally, distance between centres = 0 (concentric).

---

## 10.2 Angle Theorems (Circle Theorems)

| # | Theorem | Statement |
|---|---------|-----------|
| 10.7 | Central Angle = 2 x Inscribed Angle * | The central angle of a minor arc is **double** the angle subtended by the corresponding major arc. |
| 10.8 | Angles in Same Segment | Any two angles in the **same segment** of a circle are **equal**. |
| 10.9 | Angle in Semicircle * | The angle in a **semicircle is 90 degrees** (a right angle). |
| 10.10 | Angle in Major Segment | Angle in a segment **greater than** semicircle is **less than 90 degrees** (acute). |
| 10.11 | Angle in Minor Segment | Angle in a segment **less than** semicircle is **greater than 90 degrees** (obtuse). |
| 10.12 | Cyclic Quadrilateral * | Opposite angles of a cyclic quadrilateral are **supplementary** (sum = 180 degrees). |

---

## 10.3 Tangent Length from an External Point

If a tangent is drawn from an external point P to a circle with centre O and radius r, touching at T:

> PT^2 + r^2 = OP^2

So: **Tangent length = sqrt(OP^2 - r^2)**

---

## 10.4 Ptolemy's Theorem (Cyclic Quadrilateral)

For cyclic quadrilateral ABCD with sides a, b, c, d and diagonals p, q:

> p x q = (a x c) + (b x d)

(Product of diagonals = sum of products of opposite sides)

---

## 10.5 Quick Reference Table: Angle Relationships

| Configuration | Relationship |
|--------------|-------------|
| Central angle vs inscribed angle (same arc) | Central = 2 x Inscribed |
| Inscribed angle in semicircle | = 90 degrees |
| Opposite angles of cyclic quadrilateral | Sum = 180 degrees |
| Exterior angle of cyclic quadrilateral | = opposite interior angle |
| Tangent-chord angle | = inscribed angle in alternate segment |

---

## 10.6 Memory Aids

- **"Tangent-Radius = 90 degrees"** -- always, at the point of contact.
- **"External point, equal tangents"** -- two tangents from outside are always equal.
- **"Inscribed angle is half the central angle"** for the same arc.
- **"Cyclic quad: opposite angles add to 180"** -- think "supplementary opposites."
- Circles touching: **External = SUM**, **Internal = DIFFERENCE** of radii.

## 10.7 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| Central angle = inscribed angle | Central angle = **2 times** inscribed angle |
| Angle in semicircle = 180 degrees | Angle in semicircle = **90 degrees** (the semicircular arc subtends 180 at centre, but 90 at circumference) |
| Cyclic quadrilateral: adjacent angles = 180 | **Opposite** angles = 180, not adjacent |
| Tangent length = OP | Tangent length = sqrt(OP^2 - r^2); OP is the distance from external point to centre |
| External touch: d = R - r | External = **sum** (R + r); Internal = difference (R - r) |

---
---

# CHAPTER 11: PRACTICAL GEOMETRY OF CIRCLES (pp. 232--244)

## 11.1 Key Constructions Summary

| Construction | Key Method |
|-------------|-----------|
| **Locate centre of a circle** | Take 3 points on circle; draw perpendicular bisectors of two chords; they intersect at centre. |
| **Circle through 3 non-collinear points** | Find centre using perpendicular bisectors; draw circle with radius = distance from centre to any point. |
| **Complete a circle from an arc** (with centre) | Take 3 points on arc, find centre via perpendicular bisectors, draw full circle. |
| **Complete a circle from an arc** (without centre) | Method 1: Construct congruent triangles along the arc. Method 2: Use 120-degree internal angles with equal chords. |
| **Tangent at a point on circle** | Join point to centre; draw line perpendicular to radius at that point. |
| **Tangent from external point** | Bisect line from external point to centre; draw semicircle on that line; intersection with original circle gives tangent points. |
| **Two tangents at a given angle** | Draw diameter, tangent at one end, then construct required angle to get second tangent. |
| **Direct (external) common tangents to equal circles** | Draw perpendicular diameters to the line joining centres; join corresponding endpoints. |
| **Transverse (internal) common tangents to equal circles** | Bisect line joining centres; construct circles at quarter-points; join intersection points. |
| **Direct common tangents to unequal circles** | Construct auxiliary circle with radius = difference of radii; find tangent points from that. |
| **Transverse common tangents to unequal circles** | Construct auxiliary circle with radius = sum of radii; find tangent points from that. |
| **Tangent to two touching circles** | At point of contact, draw perpendicular to line of centres. |
| **Tangent to two intersecting circles** | Use the chord through intersection points; extend and use geometric construction. |

---

## 11.2 Key Properties for Constructions

- Perpendicular bisectors of **any two chords** of a circle intersect at the **centre**.
- The **incentre** of a triangle (intersection of angle bisectors) is the centre of the inscribed circle.
- The **circumcentre** of a triangle (intersection of perpendicular bisectors) is the centre of the circumscribed circle.
- In an **equilateral triangle**, the incentre and circumcentre coincide.

---

## 11.3 Tangent Counts

| Configuration | Number of Common Tangents |
|--------------|--------------------------|
| Two separate circles (not touching) | 4 (2 direct + 2 transverse) |
| Two circles touching externally | 3 |
| Two intersecting circles | 2 |
| Two circles touching internally | 1 |
| Concentric circles | 0 |

---

## 11.4 Quick Facts

- Angle between tangent and radial segment = **90 degrees**.
- Direct common tangents of **equal circles** are **parallel**.
- Centres and point of contact of two touching circles are **collinear**.
- Distance between parallel tangents at ends of a diameter = **2r** (diameter).
- A circle inscribed in a square of side a has radius = **a/2**.
- A square inscribed in a circle of radius r has diagonal = **2r**.

---

## 11.5 Memory Aids

- **"PB through Centre"**: Perpendicular Bisector of any chord passes through the centre.
- **"3 points, 1 circle"**: Exactly one circle passes through 3 non-collinear points.
- For tangent from outside: **"Bisect, semicircle, connect"** -- bisect the line to centre, draw semicircle, connect intersection points.

## 11.6 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| Direct vs transverse tangents | **Direct** = external (don't cross between circles); **Transverse** = internal (cross between circles) |
| Auxiliary circle radius for direct tangents | Radius = **difference** of radii |
| Auxiliary circle radius for transverse tangents | Radius = **sum** of radii |
| Number of tangents to intersecting circles = 4 | Intersecting circles have only **2** common tangents |

---
---

# CHAPTER 12: BASIC STATISTICS (pp. 245--278)

## 12.1 Cumulative Frequency

- **Cumulative frequency** of a class = total number of values **less than or equal to** the upper class boundary.
- **Cumulative frequency polygon**: plot (upper class boundary, cumulative frequency); join with straight lines.
- **Ogive (cumulative frequency curve)**: smooth curve through the same points.

---

## 12.2 Measures of Position (Distribution)

### Quartiles *

> Q1 = value at (n/4)th position -- lower quartile (25th percentile)
> Q2 = value at (2n/4)th = (n/2)th position -- median (50th percentile)
> Q3 = value at (3n/4)th position -- upper quartile (75th percentile)

where n = total frequency.

### Deciles

> Dk = value at (kn/10)th position, for k = 1, 2, ..., 9

Each decile represents 10% of data.

### Percentiles

> Pk = value at (kn/100)th position, for k = 1, 2, ..., 99

Each percentile represents 1% of data.

### Inter-Quartile Range (IQR) *

> IQR = Q3 - Q1

- Represents the spread of the **middle 50%** of data.
- **Outliers**: data points beyond 1.5 x IQR from Q1 or Q3.
  - Lower fence: Q1 - 1.5(IQR)
  - Upper fence: Q3 + 1.5(IQR)

---

## 12.3 Measures of Dispersion

### (a) Range

> Range = x_max - x_min

### (b) Variance (Grouped Data) *

**Using deviations from mean (proper formula):**

> S^2 = [Sum of f(x - x-bar)^2] / [Sum of f]

**Direct formula (easier for computation):**

> S^2 = [Sum of f.x^2] / [Sum of f] - ( [Sum of f.x] / [Sum of f] )^2

Or equivalently:

> S^2 = (Sum f.x^2) / n - (x-bar)^2

where x = class mark (midpoint), f = frequency, n = Sum of f.

### (c) Standard Deviation *

> S = sqrt(Variance) = sqrt(S^2)

### (d) Coefficient of Variation (C.V.)

> C.V. = (S / x-bar) x 100

where S = standard deviation, x-bar = arithmetic mean.

**Use:** Compare dispersion of different datasets (even with different means/units). **Smaller C.V. = more consistent data.**

---

## 12.4 Computation Table Template (Grouped Data)

| Class | f | x (midpoint) | fx | fx^2 |
|-------|---|-------------|-----|------|
| ... | ... | ... | ... | ... |
| **Totals** | **Sum f = n** | | **Sum fx** | **Sum fx^2** |

Then:
- Mean: x-bar = (Sum fx) / n
- Variance: S^2 = (Sum fx^2)/n - (x-bar)^2
- SD: S = sqrt(S^2)
- CV: (S / x-bar) x 100

---

## 12.5 Box-and-Whisker Plot

Five-number summary:

> Minimum -- Q1 -- Q2 (Median) -- Q3 -- Maximum

| Component | What it shows |
|-----------|--------------|
| Box | Interquartile range (Q1 to Q3) -- middle 50% |
| Line in box | Median (Q2) |
| Left whisker | Minimum to Q1 -- lowest 25% |
| Right whisker | Q3 to Maximum -- highest 25% |
| Outlier points | Beyond 1.5 x IQR from Q1 or Q3 |

### Box Plot Correlation
- Both distributions move in same direction = **positive correlation**
- Opposite directions = **negative correlation**
- No clear pattern = **no correlation**

---

## 12.6 Scatter Diagram and Line of Best Fit

- **Positive correlation**: as x increases, y increases (upward slope).
- **Negative correlation**: as x increases, y decreases (downward slope).
- **No correlation**: no clear pattern.

**Line of best fit**: y = mx + c
- m = slope (rate of change)
- c = y-intercept
- Approximately equal number of points on each side of the line.

### Correlation Coefficient (r)

> r = Sum[(xi - x-bar)(yi - y-bar)] / sqrt{ Sum[(xi - x-bar)^2] x Sum[(yi - y-bar)^2] }

| r value | Interpretation |
|---------|---------------|
| r = +1 | Perfect positive correlation |
| r = -1 | Perfect negative correlation |
| r = 0 | No correlation |
| 0.7 to 1.0 (or -0.7 to -1.0) | Strong correlation |
| 0.4 to 0.7 (or -0.4 to -0.7) | Moderate correlation |
| 0 to 0.4 (or 0 to -0.4) | Weak correlation |

---

## 12.7 Probability

### Basic Definitions

> P(Event) = Number of favorable outcomes / Total number of possible outcomes

- 0 <= P(E) <= 1
- P(certain event) = 1
- P(impossible event) = 0

### Probability Rules

| Rule | Formula | When to Use |
|------|---------|-------------|
| **Addition Rule** (Mutually Exclusive) * | P(A or B) = P(A) + P(B) | Events cannot happen together |
| **Addition Rule** (General) | P(A or B) = P(A) + P(B) - P(A and B) | Events may overlap |
| **Multiplication Rule** (Independent) * | P(A and B) = P(A) x P(B) | Outcome of A does not affect B |
| **Multiplication Rule** (Dependent) * | P(A and B) = P(A) x P(B\|A) | Outcome of A affects B |
| **Complement Rule** | P(not A) = 1 - P(A) | Probability of event NOT occurring |
| **Conditional Probability** | P(A\|B) = P(A and B) / P(B) | Probability of A given B has occurred |

### With Replacement vs Without Replacement

| Scenario | Type | Example |
|----------|------|---------|
| **With replacement** | Independent | P(2 Kings) = 4/52 x 4/52 = 1/169 |
| **Without replacement** | Dependent | P(2 Kings) = 4/52 x 3/51 = 1/221 |

### Sample Space Diagrams

| Diagram | Best for |
|---------|----------|
| **Possibility Diagram** (grid) | Two simultaneous experiments (e.g., two dice, two spinners) |
| **Tree Diagram** | Sequential experiments (e.g., coin flipped twice, cards drawn one after another) |
| **Venn Diagram** | Overlapping events, combined probabilities from groups |

---

## 12.8 Memory Aids

- **Variance formula shortcut**: "Mean of squares minus square of mean" -- (Sum fx^2)/n - (mean)^2.
- **Standard deviation** = sqrt(variance) -- always positive.
- **C.V.** = "SD as a percentage of Mean."
- **IQR = Q3 - Q1** -- the "middle box" in a box plot.
- **"AND = Multiply, OR = Add"** for probability (with conditions for dependence/exclusivity).
- **With replacement** = independent (probabilities stay the same).
- **Without replacement** = dependent (total decreases by 1 each time).

## 12.9 Don't Confuse

| Students often mix up... | Correct version |
|--------------------------|----------------|
| Variance formula: dividing by (n-1) | For grouped data here, divide by **n** (= Sum f), not n-1 |
| S^2 = (Sum fx)^2 / n | S^2 = (Sum f**x^2**)/n - ((Sum fx)/n)^2 -- note x^2 inside the first sum |
| Range = Q3 - Q1 | Range = x_max - x_min; **IQR** = Q3 - Q1 |
| Standard deviation = variance | SD = **sqrt**(variance); variance = SD^2 |
| P(A or B) = P(A) x P(B) | "OR" uses **addition**; "AND" uses **multiplication** |
| P(A and B) = P(A) + P(B) | "AND" uses **multiplication**; "OR" uses **addition** |
| With replacement probabilities change | With replacement, probabilities stay **the same** |
| Cumulative frequency polygon vs ogive | Polygon = straight line segments; Ogive = **smooth curve** |
| C.V. = Mean / SD x 100 | C.V. = **SD / Mean** x 100 |

---
---

# MASTER FORMULA QUICK-FIND INDEX

| Topic | Formula | Chapter |
|-------|---------|---------|
| Vector magnitude | \|**u**\| = sqrt(x^2 + y^2) | 7 |
| Unit vector | **u**/\|**u**\| | 7 |
| Position vector AB | **b** - **a** | 7 |
| Section formula (internal) | (m**b** + n**a**)/(m+n) | 7 |
| Midpoint | (**a** + **b**)/2 | 7 |
| Rectangular components | F_x = F cos(theta), F_y = F sin(theta) | 7 |
| Law of Cosines | a^2 = b^2 + c^2 - 2bc cos(alpha) | 8 |
| Law of Sines | a/sin(alpha) = b/sin(beta) = c/sin(gamma) = 2R | 8 |
| Area (2 sides + angle) | (1/2)ab sin(gamma) | 8 |
| Heron's formula | sqrt[S(S-a)(S-b)(S-c)] | 8 |
| Circumradius | R = abc/(4A) | 8 |
| Inradius | r = A/S | 8 |
| E-radii | r1 = A/(S-a), r2 = A/(S-b), r3 = A/(S-c) | 8 |
| Arc length | (theta/360) x 2(pi)r | 9 |
| Chord length | 2 sqrt(r^2 - d^2) | 9 |
| Sector area | (theta/360) x (pi)r^2 | 9 |
| Tangent length (external) | sqrt(OP^2 - r^2) | 10 |
| Central angle = 2 x inscribed | Central = 2 x Inscribed | 10 |
| Cyclic quad opposite angles | Sum = 180 degrees | 10 |
| Variance (grouped) | (Sum fx^2)/n - (mean)^2 | 12 |
| Standard deviation | sqrt(variance) | 12 |
| Coefficient of variation | (SD/mean) x 100 | 12 |
| IQR | Q3 - Q1 | 12 |
| P(A or B) mutually exclusive | P(A) + P(B) | 12 |
| P(A and B) independent | P(A) x P(B) | 12 |
| P(A and B) dependent | P(A) x P(B\|A) | 12 |
| Conditional probability | P(A\|B) = P(A and B)/P(B) | 12 |
| Correlation coefficient | Sum[(xi-x-bar)(yi-y-bar)] / sqrt[Sum(xi-x-bar)^2 x Sum(yi-y-bar)^2] | 12 |

---

> **Starred (*) formulas** are the most frequently tested and most important per chapter.
> Always write units in your answers. Show all steps for full marks.

---

*Prepared as a companion to the Federal Board 10th Grade Mathematics textbook, Chapters 7--12.*
