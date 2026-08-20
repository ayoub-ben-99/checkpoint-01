# Level 2

## checknumber

### Instructions

Write a function that takes a `string` as an argument and returns `true` if the string contains any number, otherwise return `false`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(CheckNumber("Hello"))
	fmt.Println(CheckNumber("Hello1"))
}
```

And its output:

```console
$ go run .
false
true
$
```

---

## countalpha

### Instructions

Write a function `CountAlpha()` that takes a string as an argument and returns the number of alphabetic characters in the string.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(CountAlpha("Hello world"))
	fmt.Println(CountAlpha("H e l l o"))
	fmt.Println(CountAlpha("H1e2l3l4o"))
}
```

And its output:

```console
$ go run .
10
5
5
```

---

## countcharacter

### Instructions

write a function that takes a string and a character as arguments and returns the number of times the character appears in the string.

- if the character is not in the string return 0
- if the string is empty return 0

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(CountChar("Hello World", 'l'))
	fmt.Println(CountChar("5  balloons", 5))
	fmt.Println(CountChar("   ", ' '))
	fmt.Println(CountChar("The 7 deadly sins", '7'))
}
```

And its output :

```console
$ go run .
3
0
3
1
```

---

## printif

### Instructions

Write a function that takes a `string` as an argument and returns the letter `G` followed by a newline `\n` if the argument length is more or equal than 3, otherwise returns `Invalid Input` followed by a newline `\n`.

- If it's an empty string return `G` followed by a newline `\n`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Print(PrintIf("abcdefz"))
	fmt.Print(PrintIf("abc"))
	fmt.Print(PrintIf(""))
	fmt.Print(PrintIf("14"))
}
```

And its output:

```console
$ go run . | cat -e
G$
G$
G$
Invalid Input$
```

---

## rectperimeter

### Instructions

Write a function that takes two `int`'s as arguments, representing the length of width and height of a rectangle and returning the perimeter of the rectangle.

- If one of the arguments is negative it should return `-1`.

### Usage

```go
package main

import (
	"fmt"
)

func main() {
	fmt.Println(RectPerimeter(10, 2))
	fmt.Println(RectPerimeter(434343, 898989))
	fmt.Println(RectPerimeter(10, -2))
}
```

And its output:

```console
$ go run .
24$
2666664$
-1$
$
```