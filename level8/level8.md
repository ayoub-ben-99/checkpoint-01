# Level 8

## itoabase

### Instructions

Write a function that:

- converts an `int` value to a `string` using the specified base in the argument
- and that returns this `string`

The base is expressed as an `int`, from 2 to 16. The characters comprising
the base are the digits from 0 to 9, followed by uppercase letters from A to F.

For example, the base `4` would be the equivalent of "0123" and the base `16` would be the equivalent of "0123456789ABCDEF".

If the value is negative, the resulting `string` has to be preceded by a
minus sign `-`.

Only valid inputs will be tested.

---

## options

### Instructions

Write a program that takes an undefined number of arguments which could be considered as `options` and writes on the standard output a representation of those `options` as groups of `bytes` followed by a newline (`'\n'`).

- An `option` is an argument that begins with a `-` and that can have multiple characters which could be :
  -abcdefghijklmnopqrstuvwxyz

- All `options` are stocked in a single `int` and each `options` represents a bit of that `int`, and should be stocked like this :

            - 00000000 00000000 00000000 00000000
            - ******zy xwvutsrq ponmlkji hgfedcba

- Launching the program without arguments or with the `-h` flag activated must print all the valid `options` on the standard output, as shown on one of the following examples.

- Please note the `-h` flag has priority over the others flags when it is called first in one of the arguments. (See the examples)

- A wrong `option` must print `Invalid Option` followed by a newline.

### Usage

```console
$ go run . | cat -e
options: abcdefghijklmnopqrstuvwxyz$
$ go run . -abc -ijk | cat -e
00000000 00000000 00000111 00000111$
$ go run . -z | cat -e
00000010 00000000 00000000 00000000$
$ go run . -abc -hijk | cat -e
options: abcdefghijklmnopqrstuvwxyz$
$ go run . -h | cat -e
options: abcdefghijklmnopqrstuvwxyz$
$ go run . -zh | cat -e
00000010 00000000 00000000 10000000$
$ go run . -z -h | cat -e
options: abcdefghijklmnopqrstuvwxyz$
$ go run . -hhhhhh | cat -e
options: abcdefghijklmnopqrstuvwxyz$
$ go run . -eeeeee | cat -e
00000000 00000000 00000000 00010000$
$ go run . -% | cat -e
Invalid Option$
$ go run . - | cat -e
Invalid Option$
$
```

---

## piglatin

### Instructions

Write a **program** that transforms a string passed as argument in its `Pig Latin` version.

The rules used by Pig Latin are as follows:

- If a word begins with a vowel, just add "ay" to the end.
- If it begins with a consonant, then we take all consonants before the first vowel and we put them on the end of the word and add "ay" at the end.
- Only the latin vowels will be considered as vowel(aeiou).

If the word has no vowels, the program should print "No vowels".

If the number of arguments is different from one, the program prints nothing.

### Usage

```console
$ go run .
$ go run . pig | cat -e
igpay$
$ go run . Is | cat -e
Isay$
$ go run . crunch | cat -e
unchcray$
$ go run . crnch | cat -e
No vowels$
$ go run . something else | cat -e
$
```

---

## romannumbers

### Instructions

Write a program called `rn`. The objective is to convert a number, given as an argument, into a roman number and print it with its roman number calculation.

The program should have a limit of `4000`. In case of an invalid number, for example `"hello"` or `0` the program should print `ERROR: cannot convert to roman digit`.

Roman Numerals reminder:

|  I  |  1   |
| :-: | :--: |
|  V  |  5   |
|  X  |  10  |
|  L  |  50  |
|  C  | 100  |
|  D  | 500  |
|  M  | 1000 |

For example, the number 1732 would be denoted MDCCXXXII in Roman numerals. However, Roman numerals are not a purely additive number system. In particular, instead of using four symbols to represent a 4, 40, 9, 90, etc. (i.e., IIII, XXXX, VIIII, LXXXX, etc.), such numbers are instead denoted by preceding the symbol for 5, 50, 10, 100, etc., with a symbol indicating subtraction. For example, 4 is denoted IV, 9 as IX, 40 as XL, etc.

The following table gives the Roman numerals for the first few positive integers.

|  1  |  I   | 11  |  XI   | 21  |  XXI   |
| :-: | :--: | :-: | :---: | :-: | :----: |
|  2  |  II  | 12  |  XII  | 22  |  XXII  |
|  3  | III  | 13  | XIII  | 23  | XXIII  |
|  4  |  IV  | 14  |  XIV  | 24  |  XXIV  |
|  5  |  V   | 15  |  XV   | 25  |  XXV   |
|  6  |  VI  | 16  |  XVI  | 26  |  XXVI  |
|  7  | VII  | 17  | XVII  | 27  | XXVII  |
|  8  | VIII | 18  | XVIII | 28  | XXVIII |
|  9  |  IX  | 19  |  XIX  | 29  |  XXIX  |
| 10  |  X   | 20  |  XX   | 30  |  XXX   |

### Usage

```console
$ go run . hello
ERROR: cannot convert to roman digit
$ go run . 123
C+X+X+I+I+I
CXXIII
$ go run . 999
(M-C)+(C-X)+(X-I)
CMXCIX
$ go run . 3999
M+M+M+(M-C)+(C-X)+(X-I)
MMMCMXCIX
$ go run . 4000
ERROR: cannot convert to roman digit
$
```