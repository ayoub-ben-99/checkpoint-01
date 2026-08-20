# Level 6

## fifthandskip

### Instructions

Write a function `FifthAndSkip()` that takes a `string` and returns another `string`. The function separates every five characters of the `string` with a space and removes the sixth one.

- If there are spaces in the middle of a word, ignore them and get the first character after the spaces until you reach a length of 5.
- If the `string` is less than 5 characters return `Invalid Input` followed by a newline `\n`.
- If the `string` is empty return a newline `\n`.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Print(piscine.FifthAndSkip("abcdefghijklmnopqrstuwxyz"))
	fmt.Print(piscine.FifthAndSkip("This is a short sentence"))
	fmt.Print(piscine.FifthAndSkip("1234"))
}
```

And its output:

```console
$ go run . | cat -e
abcde ghijk mnopq stuwx z$
Thisi ashor sente ce$
Invalid Input$
```

---

## notdecimal

### Instructions

Write a function called `NotDecimal()` that takes as an argument a `string` in form of a float number with the decimal point and returns a string converted to `int` without the decimal point (you will have to multiply it by 10^n to remove the `.`).

- If the number doesn't have a decimal point or there is only a zero after the `.` return the number followed by a newline `\n`.
- If the argument is empty return a newline `\n`.
- If the argument is not a number return it followed by a newline `\n`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Print(NotDecimal("0.1"))
	fmt.Print(NotDecimal("174.2"))
	fmt.Print(NotDecimal("0.1255"))
	fmt.Print(NotDecimal("1.20525856"))
	fmt.Print(NotDecimal("-0.0f00d00"))
	fmt.Print(NotDecimal(""))
	fmt.Print(NotDecimal("-19.525856"))
	fmt.Print(NotDecimal("1952"))
}
```

And its output:

```console
$ go run .  | cat -e
1$
1742$
1255$
120525856$
-0.0f00d00$
$
-19525856$
1952$
```

---

## revconcatalternate

### Instructions

Write a function `RevConcatAlternate()` that receives two slices of `int` as arguments and returns a new slice with alternated values of each slice in reverse order.

- The input slices can have different lengths.
- The new slice should start with the elements from the largest slice first and when they became equal size slices, it should add an element of the first given slice.
- If the slices are of equal length, the new slice should start with an element of the first slice.

> Note: you can check the examples bellow for more details.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))
	fmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6, 7, 8, 9}))
	fmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3, 9, 8}, []int{4, 5}))
	fmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{}))
}
```

And its output:

```console
$ go run .
[3 6 2 5 1 4]
[9 8 7 3 6 2 5 1 4]
[8 9 3 2 5 1 4]
[3 2 1]
```

---

## slice

### Instructions

The function receives a slice of strings and one or more integers, and returns a slice of strings. The returned slice is part of the received one but cut from the position indicated in the first int, until the position indicated by the second int.

In case there only exists one int, the resulting slice begins in the position indicated by the int and ends at the end of the received slice.

The integers can be negative.

### Usage

```go
package main

import (
    "fmt"
    "piscine"
)

func main(){
    a := []string{"coding", "algorithm", "ascii", "package", "golang"}
    fmt.Printf("%#v\n", piscine.Slice(a, 1))
    fmt.Printf("%#v\n", piscine.Slice(a, 2, 4))
    fmt.Printf("%#v\n", piscine.Slice(a, -3))
    fmt.Printf("%#v\n", piscine.Slice(a, -2, -1))
    fmt.Printf("%#v\n", piscine.Slice(a, 2, 0))
}
```

```console
$ go run .
[]string{"algorithm", "ascii", "package", "golang"}
[]string{"ascii", "package"}
[]string{"ascii", "package", "golang"}
[]string{"package"}
[]string(nil)
```