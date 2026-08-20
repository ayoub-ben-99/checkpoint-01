# Level 10

## brainfuck

### Instructions

Write a `Brainfuck` interpreter program.

The source code will be given as the first parameter, and will always be valid with fewer than 4096 operations.

Your `Brainfuck` interpreter will consist of an array of 2048 bytes, all initialized to 0, with a pointer to the first byte.

Every operator consists of a single character:

- `>`: increment the pointer.
- `<`: decrement the pointer.
- `+`: increment the pointed byte.
- `-`: decrement the pointed byte.
- `.`: print the pointed byte to standard output.
- `[`: If the byte at the current pointer is 0, skip forward to the command after the matching `]`.
- `]`: If the byte at the current pointer is not 0, jump back to the command after the matching `[`.
- Any other character is treated as a comment and ignored.

### Usage

```console
$ go run . "++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>." | cat -e
Hello World!$
$ go run . "+++++[>++++[>++++H>+++++i<<-]>>>++\n<<<<-]>>--------.>+++++.>." | cat -e
Hi$
$ go run . "++++++++++[>++++++++++>++++++++++>++++++++++<<<-]>---.>--.>-.>++++++++++." | cat -e
abc$
$ go run .
$
```

---

## grouping

### Instructions

Write a program that receives two strings and replicates the use of brackets in regular expressions. Brackets in regular expressions returns the words that contain the expression inside of it.

The program should handle the "`|`" operator, which searches for both strings on each side of the operator.

The output of the program should be, the results of the regular expression, numbered and displayed by the order of appearance in the string.

If the number of arguments is different from 2, if the regular expression is not valid, if the last argument is empty or if there are no matches, the program should print nothing.

### Usage

```console
$ go run . "(a)" "I'm heavy, jumpsuit is on steady, Lighter when I'm lower, higher when I'm heavy"
1: heavy
2: steady
3: heavy
$ go run . "(e|n)" "I currently have 4 windows opened up… and I don't know why."
1: currently
2: currently
3: have
4: windows
5: opened
6: opened
7: and
8: don't
9: know
$ go run . "(hi)" "He swore he just saw his sushi move."
1: his
2: sushi
$ go run . "(s)" ""
$ go run . "i" "Something in the air"
$
```