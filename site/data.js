// Auto-generated from level*.md files. Do not edit manually.
const LEVELS = [
  {
    "id": 2,
    "title": "Level 2",
    "subtitle": "Simple operations, counting, conditions",
    "exercises": [
      {
        "name": "checknumber",
        "md": "### Instructions\n\nWrite a function that takes a `string` as an argument and returns `true` if the string contains any number, otherwise return `false`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(CheckNumber(\"Hello\"))\n\tfmt.Println(CheckNumber(\"Hello1\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\nfalse\ntrue\n$\n```"
      },
      {
        "name": "countalpha",
        "md": "### Instructions\n\nWrite a function `CountAlpha()` that takes a string as an argument and returns the number of alphabetic characters in the string.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(CountAlpha(\"Hello world\"))\n\tfmt.Println(CountAlpha(\"H e l l o\"))\n\tfmt.Println(CountAlpha(\"H1e2l3l4o\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n10\n5\n5\n```"
      },
      {
        "name": "countcharacter",
        "md": "### Instructions\n\nwrite a function that takes a string and a character as arguments and returns the number of times the character appears in the string.\n\n- if the character is not in the string return 0\n- if the string is empty return 0\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(CountChar(\"Hello World\", 'l'))\n\tfmt.Println(CountChar(\"5  balloons\", 5))\n\tfmt.Println(CountChar(\"   \", ' '))\n\tfmt.Println(CountChar(\"The 7 deadly sins\", '7'))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\n3\n0\n3\n1\n```"
      },
      {
        "name": "printif",
        "md": "### Instructions\n\nWrite a function that takes a `string` as an argument and returns the letter `G` followed by a newline `\\n` if the argument length is more or equal than 3, otherwise returns `Invalid Input` followed by a newline `\\n`.\n\n- If it's an empty string return `G` followed by a newline `\\n`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Print(PrintIf(\"abcdefz\"))\n\tfmt.Print(PrintIf(\"abc\"))\n\tfmt.Print(PrintIf(\"\"))\n\tfmt.Print(PrintIf(\"14\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\nG$\nG$\nG$\nInvalid Input$\n```"
      },
      {
        "name": "rectperimeter",
        "md": "### Instructions\n\nWrite a function that takes two `int`'s as arguments, representing the length of width and height of a rectangle and returning the perimeter of the rectangle.\n\n- If one of the arguments is negative it should return `-1`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(RectPerimeter(10, 2))\n\tfmt.Println(RectPerimeter(434343, 898989))\n\tfmt.Println(RectPerimeter(10, -2))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n24$\n2666664$\n-1$\n$\n```"
      }
    ]
  },
  {
    "id": 3,
    "title": "Level 3",
    "subtitle": "String handling and simple mathematical logic",
    "exercises": [
      {
        "name": "cameltosnakecase",
        "md": "### Instructions\n\nWrite a function that converts a `string` from `camelCase` to `snake_case`.\n\n- If the `string` is empty, return an empty `string`.\n- If the `string` is not `camelCase`, return the `string` unchanged.\n- If the `string` is `camelCase`, return the `snake_case` version of the `string`.\n\nFor this exercise you need to know that `camelCase` has two different writing alternatives that will be accepted:\n\n- lowerCamelCase\n- UpperCamelCase\n\nRules for writing in `camelCase`:\n\n- The word does not end on a capitalized letter (CamelCasE).\n- No two capitalized letters shall follow directly each other (CamelCAse).\n- Numbers or punctuation are not allowed in the word anywhere (camelCase1).\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(CamelToSnakeCase(\"HelloWorld\"))\n\tfmt.Println(CamelToSnakeCase(\"helloWorld\"))\n\tfmt.Println(CamelToSnakeCase(\"camelCase\"))\n\tfmt.Println(CamelToSnakeCase(\"CAMELtoSnackCASE\"))\n\tfmt.Println(CamelToSnakeCase(\"camelToSnakeCase\"))\n\tfmt.Println(CamelToSnakeCase(\"hey2\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\nHello_World\nhello_World\ncamel_Case\nCAMELtoSnackCASE\ncamel_To_Snake_Case\nhey2\n```"
      },
      {
        "name": "digitlen",
        "md": "### Instructions\n\nWrite a function `DigitLen()` that takes two integers as arguments and returns the times the first `int` can be divided by the second until it reaches zero.\n\n- The second `int` must be between **_2_** and **_36_**. If not, the function returns `-1`.\n- If the first `int` is negative, reverse the sign and count the digits.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(DigitLen(100, 10))\n\tfmt.Println(DigitLen(100, 2))\n\tfmt.Println(DigitLen(-100, 16))\n\tfmt.Println(DigitLen(100, -1))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\n3$\n7$\n2$\n-1$\n```"
      },
      {
        "name": "firstword",
        "md": "### Instructions\n\nWrite a function that takes a string and return a string containing its first word, followed by a newline (`'\\n'`).\n\n- A word is a sequence of characters delimited by spaces or by the start/end of the argument.\n\n### Usage\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n\n    \"piscine\"\n)\n\nfunc main() {\n    fmt.Print(piscine.FirstWord(\"hello there\"))\n    fmt.Print(piscine.FirstWord(\"\"))\n    fmt.Print(piscine.FirstWord(\"hello   .........  bye\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\nhello\n\nhello\n$\n```"
      },
      {
        "name": "fishandchips",
        "md": "### Instructions\n\nWrite a function called `FishAndChips()` that takes an `int` and returns a `string`.\n\n- If the number is divisible by 2, print `fish`.\n- If the number is divisible by 3, print `chips`.\n- If the number is divisible by 2 and 3, print `fish and chips`.\n- If the number is negative return `error: number is negative`.\n- If the number is non divisible by 2 or 3 return `error: non divisible`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.FishAndChips(4))\n\tfmt.Println(piscine.FishAndChips(9))\n\tfmt.Println(piscine.FishAndChips(6))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\nfish$\nchips$\nfish and chips$\n```"
      },
      {
        "name": "gcd",
        "md": "### Instructions\n\nWrite a function that takes two `uint` representing two strictly positive integers and returns their greatest common divisor.\nIf any of the input numbers is 0, the function should return 0.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.Gcd(42, 10))\n\tfmt.Println(piscine.Gcd(42, 12))\n\tfmt.Println(piscine.Gcd(14, 77))\n\tfmt.Println(piscine.Gcd(17, 3))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\n2\n6\n7\n1\n$\n```"
      },
      {
        "name": "hashcode",
        "md": "### Instructions\n\nWrite a function called `HashCode()` that takes a `string` as an argument and returns a new **hashed** `string`.\n\n- The hash equation is computed as follows:\n\n`(ASCII of current character + size of the string) % 127, ensuring the result falls within the ASCII range of 0 to 127.`\n\n- If the resulting character is unprintable add `33` to it.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(HashCode(\"A\"))\n\tfmt.Println(HashCode(\"AB\"))\n\tfmt.Println(HashCode(\"BAC\"))\n\tfmt.Println(HashCode(\"Hello World\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\nB\nCD\nEDF\nSpwwz+bz}wo\n```"
      },
      {
        "name": "lastword",
        "md": "### Instructions\n\nWrite a function `LastWord` that takes a `string` and returns its last word followed by a `\\n`.\n\n- A word is a section of `string` delimited by spaces or by the start/end of the `string`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Print(piscine.LastWord(\"this        ...       is sparta, then again, maybe    not\"))\n\tfmt.Print(piscine.LastWord(\" lorem,ipsum \"))\n\tfmt.Print(piscine.LastWord(\" \"))\n}\n```\n\nAnd its output :\n\n```console\n$ go run . | cat -e\nnot$\nlorem,ipsum$\n$\n$\n```"
      },
      {
        "name": "repeatalpha",
        "md": "### Instructions\n\nWrite a function called `RepeatAlpha` that takes a `string` and displays it repeating each alphabetical character as many times as its alphabetical index.\n\n`'a'` becomes `'a'`, `'b'` becomes `'bb'`, `'e'` becomes `'eeeee'`, etc...\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.RepeatAlpha(\"abc\"))\n\tfmt.Println(piscine.RepeatAlpha(\"Choumi.\"))\n\tfmt.Println(piscine.RepeatAlpha(\"\"))\n\tfmt.Println(piscine.RepeatAlpha(\"abacadaba 01!\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\nabbccc$\nCCChhhhhhhhooooooooooooooouuuuuuuuuuuuuuuuuuuuummmmmmmmmmmmmiiiiiiiii.$\n$\nabbacccaddddabba 01!$\n$\n```"
      },
      {
        "name": "searchreplace",
        "md": "### Instructions\n\nWrite a program that takes 3 arguments, the first argument is a `string` in which a letter (the 2nd argument) will be replaced by another one (the 3rd argument).\n\n- If the number of arguments is different from 3, the program displays nothing.\n\n- If the second argument is not contained in the first one (the string) then the program rewrites the `string` followed by a newline (`'\\n'`).\n\n### Usage\n\n```console\n$ go run . \"hella there\" \"a\" \"o\"\nhello there\n$ go run . \"hallo thara\" \"a\" \"e\"\nhello there\n$ go run . \"abcd\" \"z\" \"l\"\nabcd\n$ go run . \"something\" \"a\" \"o\" \"b\" \"c\"\n$\n```"
      }
    ]
  },
  {
    "id": 4,
    "title": "Level 4",
    "subtitle": "Intermediate logic + short algorithms",
    "exercises": [
      {
        "name": "cleanstr",
        "md": "### Instructions\n\nWrite a **program** that takes a `string`, and displays this `string` with exactly:\n\n- one space between words.\n- without spaces nor tabs at the beginning nor at the end.\n- with the result followed by a newline (\"`\\n`\").\n\nA \"word\" is defined as a part of a `string` delimited either by spaces/tabs, or\nby the start/end of the `string`.\n\nIf the number of arguments is not 1, or if there are no words to display, the\nprogram displays a newline(\"`\\n`\").\n\n### Usage\n\n```console\n$ go run . \"you see it's easy to display the same thing\" | cat -e\nyou see it's easy to display the same thing$\n$ go run . \" only    it's  harder   \"\nonly it's harder$\n$ go run . \" how funny\" \"Did you   hear Mathilde ?\"\n\n$ go run . \"\"\n\n$\n```"
      },
      {
        "name": "expandstr",
        "md": "### Instructions\n\nWrite a program that takes a `string` and displays it with exactly three spaces between each word, with no spaces nor tabs at neither the beginning nor the end.\n\nThe `string` will be followed by a newline (`'\\n'`).\n\nA word, in this exercise, is a sequence of visible characters.\n\nIf the number of arguments is not 1, or if there are no word, the program displays nothing.\n\n### Usage\n\n```console\n$ go run . \"you   see   it's   easy   to   display   the   same   thing\" | cat -e\nyou   see   it's   easy   to   display   the   same   thing$\n$ go run . \"   only  it's harder   \" | cat -e\nonly   it's   harder$\n$ go run . \" how funny it is\" \"did you  hear, Mathilde ?\" | cat -e\n$ go run .\n$\n```"
      },
      {
        "name": "findprevprime",
        "md": "### Instructions\n\nWrite a function that returns the first prime number that is equal or inferior to the `int` passed as parameter.\n\nIf there are no primes inferior to the `int` passed as parameter the function should return 0.\n\n### Usage\n\n```go\npackage main\n\nimport \"fmt\"\n\nfunc main() {\n\tfmt.Println(FindPrevPrime(5))\n\tfmt.Println(FindPrevPrime(4))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\n5\n3\n$\n```"
      },
      {
        "name": "fromto",
        "md": "### Instructions\n\nWrite a function that takes two `integers` and returns a `string` showing the range of numbers from the first to the second.\n\n- The numbers must be separated by a comma and a space.\n- If any of the arguments is bigger than `99` or less than `0`, the function returns `Invalid` followed by a newline `\\n`.\n- Prepend a `0` to any number that is less than `10`.\n- Add a new line `\\n` at the end of the `string`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Print(piscine.FromTo(1, 10))\n\tfmt.Print(piscine.FromTo(10, 1))\n\tfmt.Print(piscine.FromTo(10, 10))\n\tfmt.Print(piscine.FromTo(100, 10))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\n01, 02, 03, 04, 05, 06, 07, 08, 09, 10$\n10, 09, 08, 07, 06, 05, 04, 03, 02, 01$\n10$\nInvalid$\n```"
      },
      {
        "name": "isPrime",
        "md": "### Instructions\n\nWrite a function that returns `true` if the `int` passed as parameter is a prime number. Otherwise it returns `false`.\n\nThe function must be optimized in order to avoid time-outs with the tester.\n\n(We consider that only positive numbers can be prime numbers)\n\n(We also consider that 1 is **not** a prime number)\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.IsPrime(5))\n\tfmt.Println(piscine.IsPrime(4))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\ntrue\nfalse\n$\n```"
      },
      {
        "name": "iscapitalized",
        "md": "### Instructions\n\nWrite a function `IsCapitalized()` that takes a `string` as an argument and returns `true` if each word in the `string` begins with either an uppercase letter or a non-alphabetic character.\n\n- If any of the words begin with a lowercase letter return `false`.\n- If the `string` is empty return `false`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(IsCapitalized(\"Hello! How are you?\"))\n\tfmt.Println(IsCapitalized(\"Hello How Are You\"))\n\tfmt.Println(IsCapitalized(\"Whats 4this 100K?\"))\n\tfmt.Println(IsCapitalized(\"Whatsthis4\"))\n\tfmt.Println(IsCapitalized(\"!!!!Whatsthis4\"))\n\tfmt.Println(IsCapitalized(\"\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\nfalse\ntrue\ntrue\ntrue\ntrue\nfalse\n```"
      },
      {
        "name": "itoa",
        "md": "### Instructions\n\n- Write a function that simulates the behavior of the `Itoa` function in Go. `Itoa` transforms a number represented as an`int` in a number represented as a `string`.\n\n- For this exercise the handling of the signs + or - **does have** to be taken into account.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n    fmt.Println(piscine.Itoa(12345))\n    fmt.Println(piscine.Itoa(0))\n    fmt.Println(piscine.Itoa(-1234))\n    fmt.Println(piscine.Itoa(987654321))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\n12345\n0\n-1234\n987654321\n$\n```"
      },
      {
        "name": "printmemory",
        "md": "### Instructions\n\nWrite a function that takes `(arr [10]byte)`, and displays the memory as in the example.\n\nAfter displaying the memory the function must display all the ASCII graphic characters. The non printable characters must be replaced by a dot.\n\nThe ASCII graphic characters are any characters intended to be written, printed, or otherwise displayed in a form that can be read by humans, present on the ASCII encoding.\n\n### Usage\n\n```go\npackage main\n\nimport \"piscine\"\n\nfunc main() {\n\tpiscine.PrintMemory([10]byte{'h', 'e', 'l', 'l', 'o', 16, 21, '*'})\n}\n```\n\nAnd its output :\n\n```console\n$ go run . | cat -e\n68 65 6c 6c$\n6f 10 15 2a$\n00 00$\nhello..*..$\n$\n```"
      },
      {
        "name": "printrevcomb",
        "md": "### Instructions\n\nWrite a program that prints in descending order on a single line all unique combinations of three different digits so that the first digit is greater than the second and the second is greater than the third.\n\nThese combinations are separated by a comma and a space.\n\n### Usage\n\nHere is an **incomplete** output :\n\n```console\n$ go run . | cat -e\n987, 986, 985, 984, 983, 982, 981, 980, 976, ..., 310, 210$\n$\n```\n\n`999` or `000` are not valid combinations because the digits are not different.\n\n`789` should not be shown because the first digit is not greater than the second."
      },
      {
        "name": "thirdtimeisacharm",
        "md": "### Instructions\n\nWrite a function `ThirdTimeIsACharm()` that takes a `string` as an argument and returns another `string` with every third character.\n\n- Return the output followed by a newline `\\n`.\n- If the `string` is empty, return a newline `\\n`.\n- If there is no third character, return a newline `\\n`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Print(ThirdTimeIsACharm(\"123456789\"))\n\tfmt.Print(ThirdTimeIsACharm(\"\"))\n\tfmt.Print(ThirdTimeIsACharm(\"a b c d e f\"))\n\tfmt.Print(ThirdTimeIsACharm(\"12\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\n369$\n$\nb e$\n$\n```"
      },
      {
        "name": "weareunique",
        "md": "### Instructions\n\nWrite a function that takes two `strings`'s and returns the number of characters that are not included in both, without repeating characters.\n\n- If there is no unique characters return `0`.\n- If both strings are empty return `-1`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(WeAreUnique(\"foo\", \"boo\"))\n\tfmt.Println(WeAreUnique(\"\", \"\"))\n\tfmt.Println(WeAreUnique(\"abc\", \"def\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n2\n-1\n6\n```"
      },
      {
        "name": "zipstring",
        "md": "### Instructions\n\nWrite a function that takes a `string` and returns a new `string` that replaces every character with the number of duplicates and the character itself, deleting the extra duplications.\n\n- The letters are from the latin alphabet list only. Any other character, symbols, shall not be tested.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(ZipString(\"YouuungFellllas\"))\n\tfmt.Println(ZipString(\"Thee quuick browwn fox juumps over the laaazy dog\"))\n\tfmt.Println(ZipString(\"Helloo Therre!\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n1Y1o3u1n1g1F1e4l1a1s\n1T1h2e1 1q2u1i1c1k1 1b1r1o2w1n1 1f1o1x1 1j2u1m1p1s1 1o1v1e1r1 1t1h1e1 1l3a1z1y1 1d1o1g\n1H1e2l2o1 1T1h1e2r1e1!\n```"
      }
    ]
  },
  {
    "id": 5,
    "title": "Level 5",
    "subtitle": "Intermediate algorithms and slice operations",
    "exercises": [
      {
        "name": "addprimesum",
        "md": "### Instructions\n\nWrite a program that takes a positive integer as argument and displays the sum of all prime numbers inferior or equal to it followed by a newline (`'\\n'`).\n\n- If the number of arguments is different from 1, or if the argument is not a positive number, the program displays `0` followed by a newline.\n\n### Usage\n\n```console\n$ go run . 5\n10\n$ go run . 7\n17\n$ go run . -2\n0\n$ go run . 0\n0\n$ go run .\n0\n$ go run . 5 7\n0\n$\n```"
      },
      {
        "name": "canjump",
        "md": "### Instructions\n\nGiven an array of non-negative integers representing the number of steps you can take forward from each position, implement the function `CanJump()` which takes a slice of unsigned integers `[]uint` as input and returns a `boolean` value. This function should determine if it's possible to reach and stay at the last index of the array starting from the first index, based on the steps you need to advance. Be aware that:\n\n- Each value represents the exact number of steps you must take forward from that position.\n- The function should return `true` if it's possible to reach and stay at the last index without stepping out of the array, and `false` otherwise.\n- If the input has only one element, that is the last position in the array so the function will return `true` but if the array is empty it returns `false`.\n\nLet's take the example array input := []uint{2, 3, 1, 1, 4}.\n\n```console\n\nPosition: 0  1  2  3  4\nSteps:    2  3  1  1  4\n          ^\n\n// Starting from position 0, you have 2 steps to move forward. This means you will move to positions 2.\n\nPosition: 0  1  2  3  4\nSteps:    2  3  1  1  4\n                ^\n\n// From position 2, you have 1 step, so you will move to position 3.\n\nPosition: 0  1  2  3  4\nSteps:    2  3  1  1  4\n                   ^\n\n// Finally, from position 3, you have 1 step to reach the last index at position 4 confirming that it's possible so the output will be \"True\".\n\nPosition: 0  1  2  3  4\nSteps:    2  3  1  1  4\n                       ^\n```\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tinput1 := []uint{2, 3, 1, 1, 4}\n\tfmt.Println(piscine.CanJump(input1))\n\n\tinput2 := []uint{3, 2, 1, 0, 4}\n\tfmt.Println(piscine.CanJump(input2))\n\n\tinput3 := []uint{0}\n\tfmt.Println(piscine.CanJump(input3))\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\ntrue\nfalse\ntrue\n$\n```"
      },
      {
        "name": "chunk",
        "md": "### Instructions\n\nWrite a function called `Chunk` that receives as parameters a slice, `slice []int`, and a number `size int`. The goal of this function is to chunk a slice into many sub slices where each sub slice has the length of `size`.\n\n- If the `size` is `0` it should print a newline (`'\\n'`).\n\n### Usage\n\n```go\npackage main\n\nfunc main() {\n\tChunk([]int{}, 10)\n\tChunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 0)\n\tChunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 3)\n\tChunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 5)\n\tChunk([]int{0, 1, 2, 3, 4, 5, 6, 7}, 4)\n}\n```\n\nAnd its output :\n\n```console\n$ go run .\n[]\n\n[[0 1 2] [3 4 5] [6 7]]\n[[0 1 2 3 4] [5 6 7]]\n[[0 1 2 3] [4 5 6 7]]\n$\n```"
      },
      {
        "name": "concatalternate",
        "md": "### Instructions\n\nWrite a function `ConcatAlternate()` that receives two slices of an `int` as arguments and returns a new slice with the result of the alternated values of each slice.\n\n- The input slices can be of different lengths.\n- The new slice should start with an element of the largest slice.\n- If the slices are of equal length, the new slice should return the elements of the first slice first and then the elements of the second slice.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))\n\tfmt.Println(ConcatAlternate([]int{2, 4, 6, 8, 10}, []int{1, 3, 5, 7, 9, 11}))\n\tfmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6, 7, 8, 9}))\n\tfmt.Println(ConcatAlternate([]int{1, 2, 3}, []int{}))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n[1 4 2 5 3 6]\n[1 2 3 4 5 6 7 8 9 10 11]\n[4 1 5 2 6 3 7 8 9]\n[1 2 3]\n```"
      },
      {
        "name": "concatslice",
        "md": "### Instructions\n\nWrite a function `ConcatSlice()` that takes two slices of integers as arguments and returns the concatenation of the two slices.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.ConcatSlice([]int{1, 2, 3}, []int{4, 5, 6}))\n\tfmt.Println(piscine.ConcatSlice([]int{}, []int{4, 5, 6, 7, 8, 9}))\n\tfmt.Println(piscine.ConcatSlice([]int{1, 2, 3}, []int{}))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n[1 2 3 4 5 6]\n[4 5 6 7 8 9]\n[1 2 3]\n```"
      },
      {
        "name": "fprime",
        "md": "### Instructions\n\nWrite a program that takes a positive `int` and displays its prime factors, followed by a newline (`'\\n'`).\n\n- Factors must be displayed in ascending order and separated by `*`.\n\n- If the number of arguments is different from 1, if the argument is invalid, or if the integer does not have a prime factor, the program displays nothing.\n\n### Usage\n\n```console\n$ go run . 225225\n3*3*5*5*7*11*13\n$ go run . 8333325\n3*3*5*5*7*11*13*37\n$ go run . 9539\n9539\n$ go run . 804577\n804577\n$ go run . 42\n2*3*7\n$ go run . a\n$ go run . 0\n$ go run . 1\n$\n```"
      },
      {
        "name": "hiddenp",
        "md": "### Instructions\n\nWrite a program named `hiddenp` that takes two `strings` as arguments. The program should check if the first string `s1` is hidden in the second `s2`.\n`s1` is considered hidden in `s2` if it is possible to find each character from `s1` in `s2`, in the same order as they appear in `s1`, but not necessarily consecutively.\n\n- If `s1` is hidden in `s2`, the program should display `1` followed by a newline.\n- If `s1` is not hidden in `s2`, the program should display `0` followed by a newline.\n- If `s1` is an empty string, it is considered hidden in any string.\n- If the number of arguments is different from 2, the program should display nothing.\n\n### Usage\n\n```console\n$ go run . \"fgex.;\" \"tyf34gdgf;'ektufjhgdgex.;.;rtjynur6\" | cat -e\n1$\n$ go run . \"abc\" \"2altrb53c.sse\" | cat -e\n1$\n$ go run . \"abc\" \"btarc\" | cat -e\n0$\n$ go run . \"DD\" \"DABC\" | cat -e\n0$\n$ go run .\n$\n```"
      },
      {
        "name": "inter",
        "md": "### Instructions\n\nWrite a program that takes two `string` and displays, without doubles, the characters that appear in both `string`, in the order they appear in the first one.\n\n- The display will be followed by a newline (`'\\n'`).\n\n- If the number of arguments is different from 2, the program displays nothing.\n\n### Usage\n\n```console\n$ go run . \"padinton\" \"paqefwtdjetyiytjneytjoeyjnejeyj\"\npadinto\n$ go run . ddf6vewg64f  twthgdwthdwfteewhrtag6h4ffdhsd\ndf6ewg4\n$\n```"
      },
      {
        "name": "reversestrcap",
        "md": "### Instructions\n\nWrite a program that takes one or more arguments and that, for each argument, puts the last letter of each word in uppercase and the rest in lowercase. It displays the result followed by a newline (`'\\n'`).\n\nIf there are no argument, the program displays nothing.\n\n### Usage\n\n```console\n$ go run . \"First SMALL TesT\" | cat -e\nfirsT smalL tesT$\n$ go run . \"SEconD Test IS a LItTLE EasIEr\" \"bEwaRe IT'S NoT HARd WhEN \" \" Go a dernier 0123456789 for the road e\" | cat -e\nseconD tesT iS A littlE easieR$\nbewarE it'S noT harD wheN $\n gO A dernieR 0123456789 foR thE roaD E$\n$ go run .\n$\n```"
      },
      {
        "name": "saveandmiss",
        "md": "### Instructions\n\nWrite a function called `SaveAndMiss()` that takes a `string` and an `int` as an argument. The function should move through the `string` in sets determined by the `int`, saving the first set, omitting the second, saving the third, and so on, in a 'save' and 'miss' fashion until the end of the `string` is reached. Return a `string` containing the saved characters.\n\n> If the `int` is `0` or a negative number return the original `string`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.SaveAndMiss(\"123456789\", 3))\n\tfmt.Println(piscine.SaveAndMiss(\"abcdefghijklmnopqrstuvwyz\", 3))\n\tfmt.Println(piscine.SaveAndMiss(\"\", 3))\n\tfmt.Println(piscine.SaveAndMiss(\"hello you all ! \", 0))\n\tfmt.Println(piscine.SaveAndMiss(\"what is your name?\", 0))\n\tfmt.Println(piscine.SaveAndMiss(\"go Exercise Save and Miss\", -5))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\n123789$\nabcghimnostuz$\n$\nhello you all ! $\nwhat is your name?$\ngo Exercise Save and Miss$\n```"
      },
      {
        "name": "union",
        "md": "### Instructions\n\nWrite a program that takes two `string` and displays, without doubles, the characters that appear in either one of the `string`.\n\nThe display will be in the same order that the characters appear on the command line and will be followed by a newline (`'\\n'`).\n\nIf the number of arguments is different from 2, then the program displays a newline (`'\\n'`).\n\n### Usage\n\n```console\n$ go run . zpadinton paqefwtdjetyiytjneytjoeyjnejeyj | cat -e\nzpadintoqefwjy$\n$\n$ go run . ddf6vewg64f gtwthgdwthdwfteewhrtag6h4ffdhsd | cat -e\ndf6vewg4thras$\n$\n$ go run . rien \"cette phrase ne cache rien\" | cat -e\nrienct phas$\n$\n$ go run . | cat -e\n$\n$ go run . rien | cat -e\n$\n```"
      },
      {
        "name": "wdmatch",
        "md": "### Instructions\n\nWrite a program that takes two `string` and checks whether it is possible to write the first `string` with characters from the second `string`. This rewrite must respect the order in which these characters appear in the second `string`.\n\nIf it is possible, the program displays the `string` followed by a newline (`'\\n'`), otherwise it simply displays nothing.\n\nIf the number of arguments is different from 2, the program displays nothing.\n\n### Usage\n\n```console\n$ go run . 123 123\n123\n$ go run . faya fgvvfdxcacpolhyghbreda\nfaya\n$ go run . faya fgvvfdxcacpolhyghbred\n$ go run . error rrerrrfiiljdfxjyuifrrvcoojh\n$ go run . \"quarante deux\" \"qfqfsudf arzgsayns tsregfdgs sjytdekuoixq \"\nquarante deux\n$ go run .\n$\n```"
      }
    ]
  },
  {
    "id": 6,
    "title": "Level 6",
    "subtitle": "Higher control over strings and logic",
    "exercises": [
      {
        "name": "fifthandskip",
        "md": "### Instructions\n\nWrite a function `FifthAndSkip()` that takes a `string` and returns another `string`. The function separates every five characters of the `string` with a space and removes the sixth one.\n\n- If there are spaces in the middle of a word, ignore them and get the first character after the spaces until you reach a length of 5.\n- If the `string` is less than 5 characters return `Invalid Input` followed by a newline `\\n`.\n- If the `string` is empty return a newline `\\n`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Print(piscine.FifthAndSkip(\"abcdefghijklmnopqrstuwxyz\"))\n\tfmt.Print(piscine.FifthAndSkip(\"This is a short sentence\"))\n\tfmt.Print(piscine.FifthAndSkip(\"1234\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\nabcde ghijk mnopq stuwx z$\nThisi ashor sente ce$\nInvalid Input$\n```"
      },
      {
        "name": "notdecimal",
        "md": "### Instructions\n\nWrite a function called `NotDecimal()` that takes as an argument a `string` in form of a float number with the decimal point and returns a string converted to `int` without the decimal point (you will have to multiply it by 10^n to remove the `.`).\n\n- If the number doesn't have a decimal point or there is only a zero after the `.` return the number followed by a newline `\\n`.\n- If the argument is empty return a newline `\\n`.\n- If the argument is not a number return it followed by a newline `\\n`.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n)\n\nfunc main() {\n\tfmt.Print(NotDecimal(\"0.1\"))\n\tfmt.Print(NotDecimal(\"174.2\"))\n\tfmt.Print(NotDecimal(\"0.1255\"))\n\tfmt.Print(NotDecimal(\"1.20525856\"))\n\tfmt.Print(NotDecimal(\"-0.0f00d00\"))\n\tfmt.Print(NotDecimal(\"\"))\n\tfmt.Print(NotDecimal(\"-19.525856\"))\n\tfmt.Print(NotDecimal(\"1952\"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .  | cat -e\n1$\n1742$\n1255$\n120525856$\n-0.0f00d00$\n$\n-19525856$\n1952$\n```"
      },
      {
        "name": "revconcatalternate",
        "md": "### Instructions\n\nWrite a function `RevConcatAlternate()` that receives two slices of `int` as arguments and returns a new slice with alternated values of each slice in reverse order.\n\n- The input slices can have different lengths.\n- The new slice should start with the elements from the largest slice first and when they became equal size slices, it should add an element of the first given slice.\n- If the slices are of equal length, the new slice should start with an element of the first slice.\n\n> Note: you can check the examples bellow for more details.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6}))\n\tfmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{4, 5, 6, 7, 8, 9}))\n\tfmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3, 9, 8}, []int{4, 5}))\n\tfmt.Println(piscine.RevConcatAlternate([]int{1, 2, 3}, []int{}))\n}\n```\n\nAnd its output:\n\n```console\n$ go run .\n[3 6 2 5 1 4]\n[9 8 7 3 6 2 5 1 4]\n[8 9 3 2 5 1 4]\n[3 2 1]\n```"
      },
      {
        "name": "slice",
        "md": "### Instructions\n\nThe function receives a slice of strings and one or more integers, and returns a slice of strings. The returned slice is part of the received one but cut from the position indicated in the first int, until the position indicated by the second int.\n\nIn case there only exists one int, the resulting slice begins in the position indicated by the int and ends at the end of the received slice.\n\nThe integers can be negative.\n\n### Usage\n\n```go\npackage main\n\nimport (\n    \"fmt\"\n    \"piscine\"\n)\n\nfunc main(){\n    a := []string{\"coding\", \"algorithm\", \"ascii\", \"package\", \"golang\"}\n    fmt.Printf(\"%#v\\n\", piscine.Slice(a, 1))\n    fmt.Printf(\"%#v\\n\", piscine.Slice(a, 2, 4))\n    fmt.Printf(\"%#v\\n\", piscine.Slice(a, -3))\n    fmt.Printf(\"%#v\\n\", piscine.Slice(a, -2, -1))\n    fmt.Printf(\"%#v\\n\", piscine.Slice(a, 2, 0))\n}\n```\n\n```console\n$ go run .\n[]string{\"algorithm\", \"ascii\", \"package\", \"golang\"}\n[]string{\"ascii\", \"package\"}\n[]string{\"ascii\", \"package\", \"golang\"}\n[]string{\"package\"}\n[]string(nil)\n```"
      }
    ]
  },
  {
    "id": 7,
    "title": "Level 7",
    "subtitle": "Complex string algorithms (string manipulations)",
    "exercises": [
      {
        "name": "findpairs",
        "md": "### Instructions\n\nWrite a program that finds all pairs of elements in an integer array that sum up to a given target value. The program should output a list of pairs, each representing the indices of the elements that form the pair.\n\nIn this exercise you must take in consideration the following:\n\n- Ensure it's possible to have positive or negative integers in the array.\n- Ensure each element is used only once in a pair, although the element can be repeated in different pairs.\n- Allow for multiple pairs to sum up to the target value.\n- The output messages should follow the one given in the examples bellow.\n- Return the message **\"No pairs found.\"** when no pair is present.\n- Return the message **\"Invalid target sum.\"** if the target is invalid.\n- Return the message **\"Invalid number: <number>\"** if the number in the array is invalid.\n- For any input format that deviates from the specified format `\"[1, 2, 3, 4, 5]\" \"6\"`, the program will return an \"Invalid input.\" error message.\n\nLet's consider the input `arr = [1, 2, 3, 4, 5]` and the target sum `targetSum = 6`. When we run the program, the `findPairs()` function will search for pairs in the array that sum up to `targetSum`.\n\n### Usage\n\n```console\n$ go run . \"[1, 2, 3, 4, 5]\" \"6\"\nPairs with sum 6: [[0 4] [1 3]]\n$ go run . \"[-1, 2, -3, 4, -5]\" \"1\"\nPairs with sum 1: [[0 1] [2 3]]\n$ go run . \"[1, 2, 3, 4, 5]\" \"10\"\nNo pairs found.\n$ go run . \"[-1, -2, -3, -4, -5]\" \"-5\"\nPairs with sum -5: [[0 3] [1 2]]\n$ go run . \"[1, 2, 3, 4, 20, -4, 5]\" \"2 5\"\nInvalid target sum.\n$ go run . \"[1, 2, 3, 4, 20, p, 5]\" \"5\"\nInvalid number: p\n$ go run . \"[1, 2, 3, 4\" \"5\"\nInvalid input.\n$ go run . \"1, 2, 3, 4\" \"5\"\nInvalid input.\n$\n```"
      },
      {
        "name": "revwstr",
        "md": "### Instructions\n\nWrite a program that takes a `string` as a parameter, and prints its words in reverse, followed by a newline.\n\n- A word is a sequence of **alphanumerical** characters.\n\n- If the number of arguments is different from 1, the program will display nothing.\n\n- In the parameters that are going to be tested, there will not be any extra spaces. (meaning that there will not be additional spaces at the beginning or at the end of the `string` and that words will always be separated by exactly one space).\n\n### Usage\n\n```console\n$ go run . \"the time of contempt precedes that of indifference\"\nindifference of that precedes contempt of time the\n$ go run . \"abcdefghijklm\"\nabcdefghijklm\n$ go run . \"he stared at the mountain\"\nmountain the at stared he\n$ go run . \"\" | cat-e\n$\n$\n```"
      },
      {
        "name": "rostring",
        "md": "### Instructions\n\nWrite a program that takes a `string` and displays this `string` after rotating it\none word to the left.\n\nThus, the first word becomes the last, and others stay in the same order.\n\nA word is a sequence of **alphanumerical** characters.\n\nWords will be separated by only one space in the output.\n\nIf the number of arguments is different from 1, the program displays a newline.\n\n### Usage\n\n```console\n$ go run . \"abc   \" | cat -e\nabc$\n$ go run . \"Let there     be light\"\nthere be light Let\n$ go run . \"     AkjhZ zLKIJz , 23y\"\nzLKIJz , 23y AkjhZ\n$ go run . | cat -e\n$\n$\n```"
      },
      {
        "name": "wordflip",
        "md": "### Instructions\n\nWrite a function `WordFlip()` that takes a `string` as input and returns it in reverse order.\n\n- The output should be followed by a newline `\\n`.\n- If the string is empty, return `Invalid Output`.\n- Ignore multiple spaces between words and trim any leading or trailing spaces in the string.\n\n### Usage\n\n```go\npackage main\n\nimport (\n\t\"fmt\"\n\t\"piscine\"\n)\n\nfunc main() {\n\tfmt.Print(piscine.WordFlip(\"First second last\"))\n\tfmt.Print(piscine.WordFlip(\"\"))\n\tfmt.Print(piscine.WordFlip(\"     \"))\n\tfmt.Print(piscine.WordFlip(\" hello  all  of  you! \"))\n}\n```\n\nAnd its output:\n\n```console\n$ go run . | cat -e\nlast second First$\nInvalid Output$\n$\nyou! of all hello$\n```"
      }
    ]
  },
  {
    "id": 8,
    "title": "Level 8",
    "subtitle": "Conversions and arithmetic and linguistic rules",
    "exercises": [
      {
        "name": "itoabase",
        "md": "### Instructions\n\nWrite a function that:\n\n- converts an `int` value to a `string` using the specified base in the argument\n- and that returns this `string`\n\nThe base is expressed as an `int`, from 2 to 16. The characters comprising\nthe base are the digits from 0 to 9, followed by uppercase letters from A to F.\n\nFor example, the base `4` would be the equivalent of \"0123\" and the base `16` would be the equivalent of \"0123456789ABCDEF\".\n\nIf the value is negative, the resulting `string` has to be preceded by a\nminus sign `-`.\n\nOnly valid inputs will be tested."
      },
      {
        "name": "options",
        "md": "### Instructions\n\nWrite a program that takes an undefined number of arguments which could be considered as `options` and writes on the standard output a representation of those `options` as groups of `bytes` followed by a newline (`'\\n'`).\n\n- An `option` is an argument that begins with a `-` and that can have multiple characters which could be :\n  -abcdefghijklmnopqrstuvwxyz\n\n- All `options` are stocked in a single `int` and each `options` represents a bit of that `int`, and should be stocked like this :\n\n            - 00000000 00000000 00000000 00000000\n            - ******zy xwvutsrq ponmlkji hgfedcba\n\n- Launching the program without arguments or with the `-h` flag activated must print all the valid `options` on the standard output, as shown on one of the following examples.\n\n- Please note the `-h` flag has priority over the others flags when it is called first in one of the arguments. (See the examples)\n\n- A wrong `option` must print `Invalid Option` followed by a newline.\n\n### Usage\n\n```console\n$ go run . | cat -e\noptions: abcdefghijklmnopqrstuvwxyz$\n$ go run . -abc -ijk | cat -e\n00000000 00000000 00000111 00000111$\n$ go run . -z | cat -e\n00000010 00000000 00000000 00000000$\n$ go run . -abc -hijk | cat -e\noptions: abcdefghijklmnopqrstuvwxyz$\n$ go run . -h | cat -e\noptions: abcdefghijklmnopqrstuvwxyz$\n$ go run . -zh | cat -e\n00000010 00000000 00000000 10000000$\n$ go run . -z -h | cat -e\noptions: abcdefghijklmnopqrstuvwxyz$\n$ go run . -hhhhhh | cat -e\noptions: abcdefghijklmnopqrstuvwxyz$\n$ go run . -eeeeee | cat -e\n00000000 00000000 00000000 00010000$\n$ go run . -% | cat -e\nInvalid Option$\n$ go run . - | cat -e\nInvalid Option$\n$\n```"
      },
      {
        "name": "piglatin",
        "md": "### Instructions\n\nWrite a **program** that transforms a string passed as argument in its `Pig Latin` version.\n\nThe rules used by Pig Latin are as follows:\n\n- If a word begins with a vowel, just add \"ay\" to the end.\n- If it begins with a consonant, then we take all consonants before the first vowel and we put them on the end of the word and add \"ay\" at the end.\n- Only the latin vowels will be considered as vowel(aeiou).\n\nIf the word has no vowels, the program should print \"No vowels\".\n\nIf the number of arguments is different from one, the program prints nothing.\n\n### Usage\n\n```console\n$ go run .\n$ go run . pig | cat -e\nigpay$\n$ go run . Is | cat -e\nIsay$\n$ go run . crunch | cat -e\nunchcray$\n$ go run . crnch | cat -e\nNo vowels$\n$ go run . something else | cat -e\n$\n```"
      },
      {
        "name": "romannumbers",
        "md": "### Instructions\n\nWrite a program called `rn`. The objective is to convert a number, given as an argument, into a roman number and print it with its roman number calculation.\n\nThe program should have a limit of `4000`. In case of an invalid number, for example `\"hello\"` or `0` the program should print `ERROR: cannot convert to roman digit`.\n\nRoman Numerals reminder:\n\n|  I  |  1   |\n| :-: | :--: |\n|  V  |  5   |\n|  X  |  10  |\n|  L  |  50  |\n|  C  | 100  |\n|  D  | 500  |\n|  M  | 1000 |\n\nFor example, the number 1732 would be denoted MDCCXXXII in Roman numerals. However, Roman numerals are not a purely additive number system. In particular, instead of using four symbols to represent a 4, 40, 9, 90, etc. (i.e., IIII, XXXX, VIIII, LXXXX, etc.), such numbers are instead denoted by preceding the symbol for 5, 50, 10, 100, etc., with a symbol indicating subtraction. For example, 4 is denoted IV, 9 as IX, 40 as XL, etc.\n\nThe following table gives the Roman numerals for the first few positive integers.\n\n|  1  |  I   | 11  |  XI   | 21  |  XXI   |\n| :-: | :--: | :-: | :---: | :-: | :----: |\n|  2  |  II  | 12  |  XII  | 22  |  XXII  |\n|  3  | III  | 13  | XIII  | 23  | XXIII  |\n|  4  |  IV  | 14  |  XIV  | 24  |  XXIV  |\n|  5  |  V   | 15  |  XV   | 25  |  XXV   |\n|  6  |  VI  | 16  |  XVI  | 26  |  XXVI  |\n|  7  | VII  | 17  | XVII  | 27  | XXVII  |\n|  8  | VIII | 18  | XVIII | 28  | XXVIII |\n|  9  |  IX  | 19  |  XIX  | 29  |  XXIX  |\n| 10  |  X   | 20  |  XX   | 30  |  XXX   |\n\n### Usage\n\n```console\n$ go run . hello\nERROR: cannot convert to roman digit\n$ go run . 123\nC+X+X+I+I+I\nCXXIII\n$ go run . 999\n(M-C)+(C-X)+(X-I)\nCMXCIX\n$ go run . 3999\nM+M+M+(M-C)+(C-X)+(X-I)\nMMMCMXCIX\n$ go run . 4000\nERROR: cannot convert to roman digit\n$\n```"
      }
    ]
  },
  {
    "id": 9,
    "title": "Level 9",
    "subtitle": "Complex logic and nested analysis",
    "exercises": [
      {
        "name": "brackets",
        "md": "### Instructions\n\nWrite a program that takes an undefined number of `string` in arguments. For each argument, if the expression is correctly bracketed, the program prints on the standard output `OK` followed by a newline (`'\\n'`), otherwise it prints `Error` followed by a newline.\n\nSymbols considered as brackets are parentheses `(` and `)`, square brackets `[` and `]` and curly braces `{` and `}`. Every other symbols are simply ignored.\n\nAn opening bracket must always be closed by the good closing bracket in the correct order. A `string` which does not contain any bracket is considered as a correctly bracketed `string`.\n\nIf there is no argument, the program must print nothing.\n\n### Usage\n\n```console\n$ go run . '(johndoe)' | cat -e\nOK$\n$ go run . '([)]' | cat -e\nError$\n$ go run . '' '{[(0 + 0)(1 + 1)](3*(-1)){()}}' | cat -e\nOK$\nOK$\n$ go run .\n$\n```"
      },
      {
        "name": "rpncalc",
        "md": "### Instructions\n\nWrite a program that takes a `string` which contains an equation written in\n`Reverse Polish Notation` (RPN) as its first argument, that evaluates the equation, and that\nprints the result on the standard output followed by a newline (`'\\n'`).\n\n`Reverse Polish Notation` is a mathematical notation in which every operator\nfollows all of its operands. In RPN, every operator encountered evaluates the\nprevious 2 operands, and the result of this operation then becomes the first of\nthe two operands for the subsequent operator. Operands and operators must be\nspaced by at least one space.\n\nThe following operators must be implemented : `+`, `-`, `*`, `/`, and `%`.\n\nIf the `string` is not valid or if there is not exactly one argument, `Error` must be printed\non the standard output followed by a newline.\nIf the `string` has extra spaces it is still considered valid.\n\nAll the given operands must fit in a `int`.\n\nExamples of formulas converted in RPN:\n\n3 + 4 >> 3 4 +\n((1 _ 2) _ 3) - 4 >> 1 2 _ 3 _ 4 - or 3 1 2 \\* _ 4 -\n50 _ (5 - (10 / 9)) >> 5 10 9 / - 50 \\*\n\nHere is how to evaluate a formula in RPN:\n\n```\n1 2 * 3 * 4 -\n2 3 * 4 -\n6 4 -\n2\n```\n\nOr:\n\n```\n3 1 2 * * 4 -\n3 2 * 4 -\n6 4 -\n2\n```\n\n### Usage\n\n```console\n$ go run . \"1 2 * 3 * 4 +\" | cat -e\n10$\n$ go run . \"1 2 3 4 +\" | cat -e\nError$\n$ go run . | cat -e\nError$\n$ go run . \"     1      3 * 2 -\" | cat -e\n1\n$ go run . \"     1      3 * ksd 2 -\" | cat -e\nError$\n$\n```"
      }
    ]
  },
  {
    "id": 10,
    "title": "Level 10",
    "subtitle": "Complete mastery level",
    "exercises": [
      {
        "name": "brainfuck",
        "md": "### Instructions\n\nWrite a `Brainfuck` interpreter program.\n\nThe source code will be given as the first parameter, and will always be valid with fewer than 4096 operations.\n\nYour `Brainfuck` interpreter will consist of an array of 2048 bytes, all initialized to 0, with a pointer to the first byte.\n\nEvery operator consists of a single character:\n\n- `>`: increment the pointer.\n- `<`: decrement the pointer.\n- `+`: increment the pointed byte.\n- `-`: decrement the pointed byte.\n- `.`: print the pointed byte to standard output.\n- `[`: If the byte at the current pointer is 0, skip forward to the command after the matching `]`.\n- `]`: If the byte at the current pointer is not 0, jump back to the command after the matching `[`.\n- Any other character is treated as a comment and ignored.\n\n### Usage\n\n```console\n$ go run . \"++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.\" | cat -e\nHello World!$\n$ go run . \"+++++[>++++[>++++H>+++++i<<-]>>>++\\n<<<<-]>>--------.>+++++.>.\" | cat -e\nHi$\n$ go run . \"++++++++++[>++++++++++>++++++++++>++++++++++<<<-]>---.>--.>-.>++++++++++.\" | cat -e\nabc$\n$ go run .\n$\n```"
      },
      {
        "name": "grouping",
        "md": "### Instructions\n\nWrite a program that receives two strings and replicates the use of brackets in regular expressions. Brackets in regular expressions returns the words that contain the expression inside of it.\n\nThe program should handle the \"`|`\" operator, which searches for both strings on each side of the operator.\n\nThe output of the program should be, the results of the regular expression, numbered and displayed by the order of appearance in the string.\n\nIf the number of arguments is different from 2, if the regular expression is not valid, if the last argument is empty or if there are no matches, the program should print nothing.\n\n### Usage\n\n```console\n$ go run . \"(a)\" \"I'm heavy, jumpsuit is on steady, Lighter when I'm lower, higher when I'm heavy\"\n1: heavy\n2: steady\n3: heavy\n$ go run . \"(e|n)\" \"I currently have 4 windows opened up… and I don't know why.\"\n1: currently\n2: currently\n3: have\n4: windows\n5: opened\n6: opened\n7: and\n8: don't\n9: know\n$ go run . \"(hi)\" \"He swore he just saw his sushi move.\"\n1: his\n2: sushi\n$ go run . \"(s)\" \"\"\n$ go run . \"i\" \"Something in the air\"\n$\n```"
      }
    ]
  }
];
