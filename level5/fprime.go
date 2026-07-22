package level5

import "fmt"

func Fprime(n int) {
	result := []int{}
	for i := 2; n > 1; i++ {
		for n%i == 0 {
			result = append(result, i)
			n /= i
		}
	}
	fmt.Println(result)
}
