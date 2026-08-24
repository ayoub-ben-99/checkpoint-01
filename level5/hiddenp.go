package level5

import (
	"os"

	"github.com/01-edu/z01"
)

func Hiddenp() {
	if len(os.Args) != 3 {
		return
	}

	s1 := os.Args[1]
	s2 := os.Args[2]

	j := 0

	for i := 0; i < len(s2) && j < len(s1); i++ {
		if s1[j] == s2[i] {
			j++
		}
	}

	if j == len(s1) {
		z01.PrintRune('1')
	} else {
		z01.PrintRune('0')
	}

	z01.PrintRune('\n')
}
