# Level 4

## cleanstr

### Instructions

Write a **program** that takes a `string`, and displays this `string` with exactly:

- one space between words.
- without spaces nor tabs at the beginning nor at the end.
- with the result followed by a newline ("`\n`").

A "word" is defined as a part of a `string` delimited either by spaces/tabs, or
by the start/end of the `string`.

If the number of arguments is not 1, or if there are no words to display, the
program displays a newline("`\n`").

### Usage

```console
$ go run . "you see it's easy to display the same thing" | cat -e
you see it's easy to display the same thing$
$ go run . " only    it's  harder   "
only it's harder$
$ go run . " how funny" "Did you   hear Mathilde ?"

$ go run . ""

$
```

---

## expandstr

### Instructions

Write a program that takes a `string` and displays it with exactly three spaces between each word, with no spaces nor tabs at neither the beginning nor the end.

The `string` will be followed by a newline (`'\n'`).

A word, in this exercise, is a sequence of visible characters.

If the number of arguments is not 1, or if there are no word, the program displays nothing.

### Usage

```console
$ go run . "you   see   it's   easy   to   display   the   same   thing" | cat -e
you   see   it's   easy   to   display   the   same   thing$
$ go run . "   only  it's harder   " | cat -e
only   it's   harder$
$ go run . " how funny it is" "did you  hear, Mathilde ?" | cat -e
$ go run .
$
```

---

## findprevprime

### Instructions

Write a function that returns the first prime number that is equal or inferior to the `int` passed as parameter.

If there are no primes inferior to the `int` passed as parameter the function should return 0.

### Usage

```go
package main

import "fmt"

func main() {
	fmt.Println(FindPrevPrime(5))
	fmt.Println(FindPrevPrime(4))
}
```

And its output :

```console
$ go run .
5
3
$
```

---

## fromto

### Instructions

Write a function that takes two `integers` and returns a `string` showing the range of numbers from the first to the second.

- The numbers must be separated by a comma and a space.
- If any of the arguments is bigger than `99` or less than `0`, the function returns `Invalid` followed by a newline `\n`.
- Prepend a `0` to any number that is less than `10`.
- Add a new line `\n` at the end of the `string`.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Print(piscine.FromTo(1, 10))
	fmt.Print(piscine.FromTo(10, 1))
	fmt.Print(piscine.FromTo(10, 10))
	fmt.Print(piscine.FromTo(100, 10))
}
```

And its output:

```console
$ go run . | cat -e
01, 02, 03, 04, 05, 06, 07, 08, 09, 10$
10, 09, 08, 07, 06, 05, 04, 03, 02, 01$
10$
Invalid$
```

---

## isPrime

### Instructions

Write a function that returns `true` if the `int` passed as parameter is a prime number. Otherwise it returns `false`.

The function must be optimized in order to avoid time-outs with the tester.

(We consider that only positive numbers can be prime numbers)

(We also consider that 1 is **not** a prime number)

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.IsPrime(5))
	fmt.Println(piscine.IsPrime(4))
}
```

And its output :

```console
$ go run .
true
false
$
```

---

## iscapitalized

### Instructions

Write a function `IsCapitalized()` that takes a `string` as an argument and returns `true` if each word in the `string` begins with either an uppercase letter or a non-alphabetic character.

- If any of the words begin with a lowercase letter return `false`.
- If the `string` is empty return `false`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(IsCapitalized("Hello! How are you?"))
	fmt.Println(IsCapitalized("Hello How Are You"))
	fmt.Println(IsCapitalized("Whats 4this 100K?"))
	fmt.Println(IsCapitalized("Whatsthis4"))
	fmt.Println(IsCapitalized("!!!!Whatsthis4"))
	fmt.Println(IsCapitalized(""))
}
```

And its output:

```console
$ go run .
false
true
true
true
true
false
```

---

## itoa

### Instructions

- Write a function that simulates the behavior of the `Itoa` function in Go. `Itoa` transforms a number represented as an`int` in a number represented as a `string`.

- For this exercise the handling of the signs + or - **does have** to be taken into account.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
    fmt.Println(piscine.Itoa(12345))
    fmt.Println(piscine.Itoa(0))
    fmt.Println(piscine.Itoa(-1234))
    fmt.Println(piscine.Itoa(987654321))
}
```

And its output :

```console
$ go run .
12345
0
-1234
987654321
$
```

---

## printmemory

### Instructions

Write a function that takes `(arr [10]byte)`, and displays the memory as in the example.

After displaying the memory the function must display all the ASCII graphic characters. The non printable characters must be replaced by a dot.

The ASCII graphic characters are any characters intended to be written, printed, or otherwise displayed in a form that can be read by humans, present on the ASCII encoding.

### Usage

```go
package main

import "piscine"

func main() {
	piscine.PrintMemory([10]byte{'h', 'e', 'l', 'l', 'o', 16, 21, '*'})
}
```

And its output :

```console
$ go run . | cat -e
68 65 6c 6c$
6f 10 15 2a$
00 00$
hello..*..$
$
```

---

## printrevcomb

### Instructions

Write a program that prints in descending order on a single line all unique combinations of three different digits so that the first digit is greater than the second and the second is greater than the third.

These combinations are separated by a comma and a space.

### Usage

Here is an **incomplete** output :

```console
$ go run . | cat -e
987, 986, 985, 984, 983, 982, 981, 980, 976, ..., 310, 210$
$
```

`999` or `000` are not valid combinations because the digits are not different.

`789` should not be shown because the first digit is not greater than the second.

---

## thirdtimeisacharm

### Instructions

Write a function `ThirdTimeIsACharm()` that takes a `string` as an argument and returns another `string` with every third character.

- Return the output followed by a newline `\n`.
- If the `string` is empty, return a newline `\n`.
- If there is no third character, return a newline `\n`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Print(ThirdTimeIsACharm("123456789"))
	fmt.Print(ThirdTimeIsACharm(""))
	fmt.Print(ThirdTimeIsACharm("a b c d e f"))
	fmt.Print(ThirdTimeIsACharm("12"))
}
```

And its output:

```console
$ go run . | cat -e
369$
$
b e$
$
```

---

## weareunique

### Instructions

Write a function that takes two `strings`'s and returns the number of characters that are not included in both, without repeating characters.

- If there is no unique characters return `0`.
- If both strings are empty return `-1`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(WeAreUnique("foo", "boo"))
	fmt.Println(WeAreUnique("", ""))
	fmt.Println(WeAreUnique("abc", "def"))
}
```

And its output:

```console
$ go run .
2
-1
6
```

---

## zipstring

### Instructions

Write a function that takes a `string` and returns a new `string` that replaces every character with the number of duplicates and the character itself, deleting the extra duplications.

- The letters are from the latin alphabet list only. Any other character, symbols, shall not be tested.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(ZipString("YouuungFellllas"))
	fmt.Println(ZipString("Thee quuick browwn fox juumps over the laaazy dog"))
	fmt.Println(ZipString("Helloo Therre!"))
}
```

And its output:

```console
$ go run .
1Y1o3u1n1g1F1e4l1a1s
1T1h2e1 1q2u1i1c1k1 1b1r1o2w1n1 1f1o1x1 1j2u1m1p1s1 1o1v1e1r1 1t1h1e1 1l3a1z1y1 1d1o1g
1H1e2l2o1 1T1h1e2r1e1!
```