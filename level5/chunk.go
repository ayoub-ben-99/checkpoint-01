package level5

import "fmt"

func Chunk(arr []int, k int) [][]int {
	if len(arr) == 0 || k <= 0 {
		fmt.Println()
	}
	result := [][]int{}
	for i := 0; i < len(arr); i += k {
		end := i + k
		if end > len(arr) {
			end = len(arr)
		}
		result = append(result, arr[i:end])
	}
	return result
}
