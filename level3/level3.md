# Level 3

## cameltosnakecase

### Instructions

Write a function that converts a `string` from `camelCase` to `snake_case`.

- If the `string` is empty, return an empty `string`.
- If the `string` is not `camelCase`, return the `string` unchanged.
- If the `string` is `camelCase`, return the `snake_case` version of the `string`.

For this exercise you need to know that `camelCase` has two different writing alternatives that will be accepted:

- lowerCamelCase
- UpperCamelCase

Rules for writing in `camelCase`:

- The word does not end on a capitalized letter (CamelCasE).
- No two capitalized letters shall follow directly each other (CamelCAse).
- Numbers or punctuation are not allowed in the word anywhere (camelCase1).

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(CamelToSnakeCase("HelloWorld"))
	fmt.Println(CamelToSnakeCase("helloWorld"))
	fmt.Println(CamelToSnakeCase("camelCase"))
	fmt.Println(CamelToSnakeCase("CAMELtoSnackCASE"))
	fmt.Println(CamelToSnakeCase("camelToSnakeCase"))
	fmt.Println(CamelToSnakeCase("hey2"))
}
```

And its output:

```console
$ go run .
Hello_World
hello_World
camel_Case
CAMELtoSnackCASE
camel_To_Snake_Case
hey2
```

---

## digitlen

### Instructions

Write a function `DigitLen()` that takes two integers as arguments and returns the times the first `int` can be divided by the second until it reaches zero.

- The second `int` must be between **_2_** and **_36_**. If not, the function returns `-1`.
- If the first `int` is negative, reverse the sign and count the digits.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(DigitLen(100, 10))
	fmt.Println(DigitLen(100, 2))
	fmt.Println(DigitLen(-100, 16))
	fmt.Println(DigitLen(100, -1))
}
```

And its output:

```console
$ go run . | cat -e
3$
7$
2$
-1$
```

---

## firstword

### Instructions

Write a function that takes a string and return a string containing its first word, followed by a newline (`'\n'`).

- A word is a sequence of characters delimited by spaces or by the start/end of the argument.

### Usage

```go
package main

import (
    "fmt"

    "piscine"
)

func main() {
    fmt.Print(piscine.FirstWord("hello there"))
    fmt.Print(piscine.FirstWord(""))
    fmt.Print(piscine.FirstWord("hello   .........  bye"))
}
```

And its output:

```console
$ go run .
hello

hello
$
```

---

## fishandchips

### Instructions

Write a function called `FishAndChips()` that takes an `int` and returns a `string`.

- If the number is divisible by 2, print `fish`.
- If the number is divisible by 3, print `chips`.
- If the number is divisible by 2 and 3, print `fish and chips`.
- If the number is negative return `error: number is negative`.
- If the number is non divisible by 2 or 3 return `error: non divisible`.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.FishAndChips(4))
	fmt.Println(piscine.FishAndChips(9))
	fmt.Println(piscine.FishAndChips(6))
}
```

And its output:

```console
$ go run . | cat -e
fish$
chips$
fish and chips$
```

---

## gcd

### Instructions

Write a function that takes two `uint` representing two strictly positive integers and returns their greatest common divisor.
If any of the input numbers is 0, the function should return 0.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.Gcd(42, 10))
	fmt.Println(piscine.Gcd(42, 12))
	fmt.Println(piscine.Gcd(14, 77))
	fmt.Println(piscine.Gcd(17, 3))
}
```

And its output :

```console
$ go run .
2
6
7
1
$
```

---

## hashcode

### Instructions

Write a function called `HashCode()` that takes a `string` as an argument and returns a new **hashed** `string`.

- The hash equation is computed as follows:

`(ASCII of current character + size of the string) % 127, ensuring the result falls within the ASCII range of 0 to 127.`

- If the resulting character is unprintable add `33` to it.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(HashCode("A"))
	fmt.Println(HashCode("AB"))
	fmt.Println(HashCode("BAC"))
	fmt.Println(HashCode("Hello World"))
}
```

And its output:

```console
$ go run .
B
CD
EDF
Spwwz+bz}wo
```

---

## lastword

### Instructions

Write a function `LastWord` that takes a `string` and returns its last word followed by a `\n`.

- A word is a section of `string` delimited by spaces or by the start/end of the `string`.

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Print(piscine.LastWord("this        ...       is sparta, then again, maybe    not"))
	fmt.Print(piscine.LastWord(" lorem,ipsum "))
	fmt.Print(piscine.LastWord(" "))
}
```

And its output :

```console
$ go run . | cat -e
not$
lorem,ipsum$
$
$
```

---

## repeatalpha

### Instructions

Write a function called `RepeatAlpha` that takes a `string` and displays it repeating each alphabetical character as many times as its alphabetical index.

`'a'` becomes `'a'`, `'b'` becomes `'bb'`, `'e'` becomes `'eeeee'`, etc...

### Usage

```go
package main

import (
	"fmt"
	"piscine"
)

func main() {
	fmt.Println(piscine.RepeatAlpha("abc"))
	fmt.Println(piscine.RepeatAlpha("Choumi."))
	fmt.Println(piscine.RepeatAlpha(""))
	fmt.Println(piscine.RepeatAlpha("abacadaba 01!"))
}
```

And its output:

```console
$ go run . | cat -e
abbccc$
CCChhhhhhhhooooooooooooooouuuuuuuuuuuuuuuuuuuuummmmmmmmmmmmmiiiiiiiii.$
$
abbacccaddddabba 01!$
$
```

---

## searchreplace

### Instructions

Write a program that takes 3 arguments, the first argument is a `string` in which a letter (the 2nd argument) will be replaced by another one (the 3rd argument).

- If the number of arguments is different from 3, the program displays nothing.

- If the second argument is not contained in the first one (the string) then the program rewrites the `string` followed by a newline (`'\n'`).

### Usage

```console
$ go run . "hella there" "a" "o"
hello there
$ go run . "hallo thara" "a" "e"
hello there
$ go run . "abcd" "z" "l"
abcd
$ go run . "something" "a" "o" "b" "c"
$
```