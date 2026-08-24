package level5

import (
	"fmt"
	"os"
)

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
		fmt.Println(0)
		return
	}

	s := os.Args[1]
	n := 0

	for _, c := range s {
		if c < '0' || c > '9' {
			fmt.Println(0)
			return
		}

		n = n*10 + int(c-'0')
	}

	if n <= 0 {
		fmt.Println(0)
		return
	}

	sum := 0

	for i := 2; i <= n; i++ {
		if isPrime(i) {
			sum += i
		}
	}

	fmt.Println(sum)
}
