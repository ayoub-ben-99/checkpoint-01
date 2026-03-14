package level5

import (
	"fmt"
	"mygo/level4"
)

func AddPrimeSum(n int) {
	result := 0
	for i := 2; i <= n; i++ {
		if level4.IsPrime(i) {
			result += i
		}
	}
	fmt.Println(result)
}
