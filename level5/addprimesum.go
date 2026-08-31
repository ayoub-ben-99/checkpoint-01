package level5

import (
	"os"

	"github.com/01-edu/z01"
)

func printNumber(n int) {
	if n == 0 {
		z01.PrintRune('0')
		z01.PrintRune('\n')
		return
	}

	digits := ""

	for n > 0 {
		digits = string(rune(n%10)+'0') + digits
		n /= 10
	}

	for _, r := range digits {
		z01.PrintRune(r)
	}

	z01.PrintRune('\n')
}

func isPrime(n int) bool {
	if n < 2 {
		return false
	}

	for i := 2; i*i <= n; i++ {
		if n%i == 0 {
			return false
		}
	}

	return true
}

func main() {
	if len(os.Args) != 2 {
		printNumber(0)
		return
	}

	s := os.Args[1]
	n := 0

	for _, c := range s {
		if c < '0' || c > '9' {
			printNumber(0)
			return
		}

		n = n*10 + int(c-'0')
	}

	if n <= 0 {
		printNumber(0)
		return
	}

	sum := 0

	for i := 2; i <= n; i++ {
		if isPrime(i) {
			sum += i
		}
	}

	printNumber(sum)
}
