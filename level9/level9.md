# Level 9

## brackets

### Instructions

Write a program that takes an undefined number of `string` in arguments. For each argument, if the expression is correctly bracketed, the program prints on the standard output `OK` followed by a newline (`'\n'`), otherwise it prints `Error` followed by a newline.

Symbols considered as brackets are parentheses `(` and `)`, square brackets `[` and `]` and curly braces `{` and `}`. Every other symbols are simply ignored.

An opening bracket must always be closed by the good closing bracket in the correct order. A `string` which does not contain any bracket is considered as a correctly bracketed `string`.

If there is no argument, the program must print nothing.

### Usage

```console
$ go run . '(johndoe)' | cat -e
OK$
$ go run . '([)]' | cat -e
Error$
$ go run . '' '{[(0 + 0)(1 + 1)](3*(-1)){()}}' | cat -e
OK$
OK$
$ go run .
$
```

---

## rpncalc

### Instructions

Write a program that takes a `string` which contains an equation written in
`Reverse Polish Notation` (RPN) as its first argument, that evaluates the equation, and that
prints the result on the standard output followed by a newline (`'\n'`).

`Reverse Polish Notation` is a mathematical notation in which every operator
follows all of its operands. In RPN, every operator encountered evaluates the
previous 2 operands, and the result of this operation then becomes the first of
the two operands for the subsequent operator. Operands and operators must be
spaced by at least one space.

The following operators must be implemented : `+`, `-`, `*`, `/`, and `%`.

If the `string` is not valid or if there is not exactly one argument, `Error` must be printed
on the standard output followed by a newline.
If the `string` has extra spaces it is still considered valid.

All the given operands must fit in a `int`.

Examples of formulas converted in RPN:

3 + 4 >> 3 4 +
((1 _ 2) _ 3) - 4 >> 1 2 _ 3 _ 4 - or 3 1 2 \* _ 4 -
50 _ (5 - (10 / 9)) >> 5 10 9 / - 50 \*

Here is how to evaluate a formula in RPN:

```
1 2 * 3 * 4 -
2 3 * 4 -
6 4 -
2
```

Or:

```
3 1 2 * * 4 -
3 2 * 4 -
6 4 -
2
```

### Usage

```console
$ go run . "1 2 * 3 * 4 +" | cat -e
10$
$ go run . "1 2 3 4 +" | cat -e
Error$
$ go run . | cat -e
Error$
$ go run . "     1      3 * 2 -" | cat -e
1
$ go run . "     1      3 * ksd 2 -" | cat -e
Error$
$
```