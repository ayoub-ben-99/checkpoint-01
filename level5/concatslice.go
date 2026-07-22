package level5

import "fmt"

func ConcatSlice(a, b []int) {
	fmt.Println(append(a, b...))
}
