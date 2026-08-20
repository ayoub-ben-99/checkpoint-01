# Level 7

## findpairs

### Instructions

Write a program that finds all pairs of elements in an integer array that sum up to a given target value. The program should output a list of pairs, each representing the indices of the elements that form the pair.

In this exercise you must take in consideration the following:

- Ensure it's possible to have positive or negative integers in the array.
- Ensure each element is used only once in a pair, although the element can be repeated in different pairs.
- Allow for multiple pairs to sum up to the target value.
- The output messages should follow the one given in the examples bellow.
- Return the message **"No pairs found."** when no pair is present.
- Return the message **"Invalid target sum."** if the target is invalid.
- Return the message **"Invalid number: <number>"** if the number in the array is invalid.
- For any input format that deviates from the specified format `"[1, 2, 3, 4, 5]" "6"`, the program will return an "Invalid input." error message.

Let's consider the input `arr = [1, 2, 3, 4, 5]` and the target sum `targetSum = 6`. When we run the program, the `findPairs()` function will search for pairs in the array that sum up to `targetSum`.

### Usage

```console
$ go run . "[1, 2, 3, 4, 5]" "6"
Pairs with sum 6: [[0 4] [1 3]]
$ go run . "[-1, 2, -3, 4, -5]" "1"
Pairs with sum 1: [[0 1] [2 3]]
$ go run . "[1, 2, 3, 4, 5]" "10"
No pairs found.
$ go run . "[-1, -2, -3, -4, -5]" "-5"
Pairs with sum -5: [[0 3] [1 2]]
$ go run . "[1, 2, 3, 4, 20, -4, 5]" "2 5"
Invalid target sum.
$ go run . "[1, 2, 3, 4, 20, p, 5]" "5"
Invalid number: p
$ go run . "[1, 2, 3, 4" "5"
Invalid input.
$ go run . "1, 2, 3, 4" "5"
Invalid input.
$
```

---

## revwstr

### Instructions

Write a program that takes a `string` as a parameter, and prints its words in reverse, followed by a newline.

- A word is a sequence of **alphanumerical** characters.

- If the number of arguments is different from 1, the program will display nothing.

- In the parameters that are going to be tested, there will not be any extra spaces. (meaning that there will not be additional spaces at the beginning or at the end of the `string` and that words will always be separated by exactly one space).

### Usage

```console
$ go run . "the time of contempt precedes that of indifference"
indifference of that precedes contempt of time the
$ go run . "abcdefghijklm"
abcdefghijklm
$ go run . "he stared at the mountain"
mountain the at stared he
$ go run . "" | cat-e
$
$
```

---

## rostring

### Instructions

Write a program that takes a `string` and displays this `string` after rotating it
one word to the left.

Thus, the first word becomes the last, and others stay in the same order.

A word is a sequence of **alphanumerical** characters.

Words will be separated by only one space in the output.

If the number of arguments is different from 1, the program displays a newline.

### Usage

```console
$ go run . "abc   " | cat -e
abc$
$ go run . "Let there     be light"
there be light Let
$ go run . "     AkjhZ zLKIJz , 23y"
zLKIJz , 23y AkjhZ
$ go run . | cat -e
$
$
```

---

## wordflip

### Instructions

Write a function `WordFlip()` that takes a `string` as input and returns it in reverse order.

- The output should be followed by a newline `\n`.
- If the string is empty, return `Invalid Output`.
- Ignore multiple spaces between words and trim any leading or trailing spaces in the string.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Print(piscine.WordFlip("First second last"))
	fmt.Print(piscine.WordFlip(""))
	fmt.Print(piscine.WordFlip("     "))
	fmt.Print(piscine.WordFlip(" hello  all  of  you! "))
}
```

And its output:

```console
$ go run . | cat -e
last second First$
Invalid Output$
$
you! of all hello$
```