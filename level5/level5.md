# Level 5

## addprimesum

### Instructions

Write a program that takes a positive integer as argument and displays the sum of all prime numbers inferior or equal to it followed by a newline (`'\n'`).

- If the number of arguments is different from 1, or if the argument is not a positive number, the program displays `0` followed by a newline.

### Usage

```console
$ go run . 5
10
$ go run . 7
17
$ go run . -2
0
$ go run . 0
0
$ go run .
0
$ go run . 5 7
0
$
```

---

## canjump

### Instructions

Given an array of non-negative integers representing the number of steps you can take forward from each position, implement the function `CanJump()` which takes a slice of unsigned integers `[]uint` as input and returns a `boolean` value. This function should determine if it's possible to reach and stay at the last index of the array starting from the first index, based on the steps you need to advance. Be aware that:

- Each value represents the exact number of steps you must take forward from that position.
- The function should return `true` if it's possible to reach and stay at the last index without stepping out of the array, and `false` otherwise.
- If the input has only one element, that is the last position in the array so the function will return `true` but if the array is empty it returns `false`.

Let's take the example array input := []uint{2, 3, 1, 1, 4}.

```console

Position: 0  1  2  3  4
Steps:    2  3  1  1  4
          ^

// Starting from position 0, you have 2 steps to move forward. This means you will move to positions 2.

Position: 0  1  2  3  4
Steps:    2  3  1  1  4
                ^

// From position 2, you have 1 step, so you will move to position 3.

Position: 0  1  2  3  4
Steps:    2  3  1  1  4
                   ^

// Finally, from position 3, you have 1 step to reach the last index at position 4 confirming that it's possible so the output will be "True".

Position: 0  1  2  3  4
Steps:    2  3  1  1  4
                       ^
```

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	input1 := []uint{2, 3, 1, 1, 4}
	fmt.Println(piscine.CanJump(input1))

	input2 := []uint{3, 2, 1, 0, 4}
	fmt.Println(piscine.CanJump(input2))

	input3 := []uint{0}
	fmt.Println(piscine.CanJump(input3))
}
```

And its output :

```console
$ go run .
true
false
true
$
```

---

## chunk

### Instructions

Write a function called `Chunk` that receives as parameters a slice, `slice []int`, and a number `size int`. The goal of this function is to chunk a slice into many sub slices where each sub slice has the length of `size`.

- If the `size` is `0` it should print a newline (`'\n'`).

### Usage

```go
package main

func main() {
	Chunk([]int{}, 10)
	Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 0)
	Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 3)
	Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 5)
	Chunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 4)
}
```

And its output :

```console
$ go run .
[]

[[0 1 2] [3 4 5] [6 7]]
[[0 1 2 3 4] [5 6 7]]
[[0 1 2 3] [4 5 6 7]]
$
```

---

## concatalternate

### Instructions

Write a function `ConcatAlternate()` that receives two slices of an `int` as arguments and returns a new slice with the result of the alternated values of each slice.

- The input slices can be of different lengths.
- The new slice should start with an element of the largest slice.
- If the slices are of equal length, the new slice should return the elements of the first slice first and then the elements of the second slice.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))
	fmt.Println(ConcatAlternate([]int{2, 4, 6, 8, 10}, []int{1, 3, 5, 7, 9, 11}))
	fmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6, 7, 8, 9}))
	fmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{}))
}
```

And its output:

```console
$ go run .
[1 4 2 5 3 6]
[1 2 3 4 5 6 7 8 9 10 11]
[4 1 5 2 6 3 7 8 9]
[1 2 3]
```

---

## concatslice

### Instructions

Write a function `ConcatSlice()` that takes two slices of integers as arguments and returns the concatenation of the two slices.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.ConcatSlice([]int{1, 2, 3}, []int{4, 5, 6}))
	fmt.Println(piscine.ConcatSlice([]int{}, []int{4, 5, 6, 7, 8, 9}))
	fmt.Println(piscine.ConcatSlice([]int{1, 2, 3}, []int{}))
}
```

And its output:

```console
$ go run .
[1 2 3 4 5 6]
[4 5 6 7 8 9]
[1 2 3]
```

---

## fprime

### Instructions

Write a program that takes a positive `int` and displays its prime factors, followed by a newline (`'\n'`).

- Factors must be displayed in ascending order and separated by `*`.

- If the number of arguments is different from 1, if the argument is invalid, or if the integer does not have a prime factor, the program displays nothing.

### Usage

```console
$ go run . 225225
3*3*5*5*7*11*13
$ go run . 8333325
3*3*5*5*7*11*13*37
$ go run . 9539
9539
$ go run . 804577
804577
$ go run . 42
2*3*7
$ go run . a
$ go run . 0
$ go run . 1
$
```

---

## hiddenp

### Instructions

Write a program named `hiddenp` that takes two `strings` as arguments. The program should check if the first string `s1` is hidden in the second `s2`.
`s1` is considered hidden in `s2` if it is possible to find each character from `s1` in `s2`, in the same order as they appear in `s1`, but not necessarily consecutively.

- If `s1` is hidden in `s2`, the program should display `1` followed by a newline.
- If `s1` is not hidden in `s2`, the program should display `0` followed by a newline.
- If `s1` is an empty string, it is considered hidden in any string.
- If the number of arguments is different from 2, the program should display nothing.

### Usage

```console
$ go run . "fgex.;" "tyf34gdgf;'ektufjhgdgex.;.;rtjynur6" | cat -e
1$
$ go run . "abc" "2altrb53c.sse" | cat -e
1$
$ go run . "abc" "btarc" | cat -e
0$
$ go run . "DD" "DABC" | cat -e
0$
$ go run .
$
```

---

## inter

### Instructions

Write a program that takes two `string` and displays, without doubles, the characters that appear in both `string`, in the order they appear in the first one.

- The display will be followed by a newline (`'\n'`).

- If the number of arguments is different from 2, the program displays nothing.

### Usage

```console
$ go run . "padinton" "paqefwtdjetyiytjneytjoeyjnejeyj"
padinto
$ go run . ddf6vewg64f  twthgdwthdwfteewhrtag6h4ffdhsd
df6ewg4
$
```

---

## reversestrcap

### Instructions

Write a program that takes one or more arguments and that, for each argument, puts the last letter of each word in uppercase and the rest in lowercase. It displays the result followed by a newline (`'\n'`).

If there are no argument, the program displays nothing.

### Usage

```console
$ go run . "First SMALL TesT" | cat -e
firsT smalL tesT$
$ go run . "SEconD Test IS a LItTLE EasIEr" "bEwaRe IT'S NoT HARd WhEN " " Go a dernier 0123456789 for the road e" | cat -e
seconD tesT iS A littlE easieR$
bewarE it'S noT harD wheN $
 gO A dernieR 0123456789 foR thE roaD E$
$ go run .
$
```

---

## saveandmiss

### Instructions

Write a function called `SaveAndMiss()` that takes a `string` and an `int` as an argument. The function should move through the `string` in sets determined by the `int`, saving the first set, omitting the second, saving the third, and so on, in a 'save' and 'miss' fashion until the end of the `string` is reached. Return a `string` containing the saved characters.

> If the `int` is `0` or a negative number return the original `string`.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.SaveAndMiss("123456789", 3))
	fmt.Println(piscine.SaveAndMiss("abcdefghijklmnopqrstuvwyz", 3))
	fmt.Println(piscine.SaveAndMiss("", 3))
	fmt.Println(piscine.SaveAndMiss("hello you all ! ", 0))
	fmt.Println(piscine.SaveAndMiss("what is your name?", 0))
	fmt.Println(piscine.SaveAndMiss("go Exercise Save and Miss", -5))
}
```

And its output:

```console
$ go run . | cat -e
123789$
abcghimnostuz$
$
hello you all ! $
what is your name?$
go Exercise Save and Miss$
```

---

## union

### Instructions

Write a program that takes two `string` and displays, without doubles, the characters that appear in either one of the `string`.

The display will be in the same order that the characters appear on the command line and will be followed by a newline (`'\n'`).

If the number of arguments is different from 2, then the program displays a newline (`'\n'`).

### Usage

```console
$ go run . zpadinton paqefwtdjetyiytjneytjoeyjnejeyj | cat -e
zpadintoqefwjy$
$
$ go run . ddf6vewg64f gtwthgdwthdwfteewhrtag6h4ffdhsd | cat -e
df6vewg4thras$
$
$ go run . rien "cette phrase ne cache rien" | cat -e
rienct phas$
$
$ go run . | cat -e
$
$ go run . rien | cat -e
$
```

---

## wdmatch

### Instructions

Write a program that takes two `string` and checks whether it is possible to write the first `string` with characters from the second `string`. This rewrite must respect the order in which these characters appear in the second `string`.

If it is possible, the program displays the `string` followed by a newline (`'\n'`), otherwise it simply displays nothing.

If the number of arguments is different from 2, the program displays nothing.

### Usage

```console
$ go run . 123 123
123
$ go run . faya fgvvfdxcacpolhyghbreda
faya
$ go run . faya fgvvfdxcacpolhyghbred
$ go run . error rrerrrfiiljdfxjyuifrrvcoojh
$ go run . "quarante deux" "qfqfsudf arzgsayns tsregfdgs sjytdekuoixq "
quarante deux
$ go run .
$
```