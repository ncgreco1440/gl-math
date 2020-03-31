# Vector

### TLDR:

**Who?** 

A **Vector** is an object that has both a magnitude (size) and a direction. We can visualize a vector as a line with an arrow that indicates the direction of the vector. 

**Vectors** are the same if they have the same magnitude and direction. Note, that if you took a **Vector** *A* and translated it to a new position, the resulting **Vector** would be the same as the initial **Vector**. So equal **Vectors** have nothing to do with where they are located, but just their magnitude and direction.

**What?**

**When?**

Two simple examples of when to use **Vectors** is when you need to represent *force* and *velocity*. This is because both situations require you to leverage some direction, and the magnitude would indicate the strength of the force or speed of the velocity.

One special **Vector** is known as the **Zero Vector**. It is a **Vector** that has a length of 0. Because the **Zero Vector** has a length of 0, it cannot point in any particular direction.

## Operations

You can do a bunch of operations with **Vectors**. Addition, Subtraction, Multiplication, Dot Product, and Cross Product.

#### Addition
---
The addition of vectors is done by adding up corresponding vector components. Take for example a vector (5, 10) and another vector (8, 12).

We will add up the *x* and *y* components of these vectors like so. 

x = (5 + 8, 10 + 13)\
x = (13, 23)

Here is another example...

*a* = (-5, 10)\
*b* = (8, -4)

*c* = (-5 + 8, 10 + -4)\
*c* = (3, 6)

#### Subtraction
---
To subtract vectors, we first take the inverse of the vector we want to subtract, then perform the same steps as we did with addition.

Example:

*a* = (12, 2)\
*b* = (4, 5)

*a* - *b* = *a* + *-b*

*c* = (12, 2) + (-4, -5)\
*c* = (8, -3)

**NOTE**:\
Always inverse the vector that you are subtracting. Not the vector you are subtracting from! Below is the order of operations just so we are clear.

*subtract from* - *subtract*

#### Magnitude of a Vector
---
You may use Pythagoras' Theorem to find the magnitude of a vector. For a vector (3, 4), it's magnitude would be...

*magnitude* = sqrt(3^2 + 4^2)\
*magnitude* = sqrt(9 + 16)\
*magnitude* = sqrt(25)\
*magnitude* = 5

A vector with a magnitude of 1 is known as a **Unit Vector**.

#### Multiply by a Scalar
---
A **Scalar** is just a magnitude. It has no direction, so it's only represented as a single number. To multiply a vector by a scalar is to "scale a vector", meaning the magnitude is scaled. The direction of a vector does not change when scaling.

Example:

*scalar* = 5;\
*vec* = (3, 6);

*vec* = *scalar* * *vec*\
*vec* = 5 * (3, 6)\
*vec* = (5 * 3, 5 * 6)\
*vec* = (15, 30)