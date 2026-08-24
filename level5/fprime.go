package level5

import (
	"os"
	"strconv"
)

func FPrime() {
	if len(os.Args) != 2 {
		return
	}

	n, err := strconv.Atoi(os.Args[1])
	if err != nil || n <= 1 {
		return
	}

	first := true

	for i := 2; i <= n; i++ {
		for n%i == 0 {
			if !first {
				print("*")
			}

			print(i)
			first = false
			n /= i
		}
	}

	if !first {
		println()
	}
}
