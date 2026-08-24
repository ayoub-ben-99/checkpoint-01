package level5

import (
	"os"

	"github.com/01-edu/z01"
)

func Inter() {
	if len(os.Args) != 3 {
		return
	}

	s1 := os.Args[1]
	s2 := os.Args[2]

	for _, c := range s1 {
		found := false

		for _, x := range s2 {
			if c == x {
				found = true
				break
			}
		}

		if found {
			already := false

			for _, x := range s1[:0] {
				if c == x {
					already = true
				}
			}

			if !already {
				z01.PrintRune(c)
			}
		}
	}

	z01.PrintRune('\n')
}
