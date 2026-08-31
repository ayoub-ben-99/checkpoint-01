package level4

import (
	"unicode"

	"github.com/01-edu/z01"
)

func print(s string) {
	for _, v := range s {
		z01.PrintRune(v)
	}
}

func PrintMemory(arr [10]byte) {
	for i := 0; i < len(arr); i++ {
		if i == 4 || i == 8 {
			z01.PrintRune('\n')
		} else if i > 0 {
			z01.PrintRune(' ')
		}
		z01.PrintRune(rune(hex(arr[i])[0]))
		z01.PrintRune(rune(hex(arr[i])[1]))
	}

	z01.PrintRune('\n')

	for _, v := range arr {
		if unicode.IsGraphic(rune(v)) {
			print(string(v))
		} else {
			print(".")
		}
	}

	z01.PrintRune('\n')
}

func hex(n byte) string {
	digits := "0123456789abcdef"

	result := ""
	result += string(digits[n/16])
	result += string(digits[n%16])

	return result
}
