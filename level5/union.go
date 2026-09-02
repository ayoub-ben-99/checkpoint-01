package level5

import (
	"os"

	"github.com/01-edu/z01"
)

func Union() {
	if len(os.Args) <= 1 {
		z01.PrintRune('\n')
		return
	}

	result := ""
	seen := map[rune]bool{}
	for _, v := range os.Args[1] + os.Args[2] {
		if !seen[v] {
			result += string(v)
			seen[v] = true
		}
	}

	for _, v := range result {
		z01.PrintRune(v)
	}
	z01.PrintRune('\n')
}
