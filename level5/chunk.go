package level5

func Chunk(arr []int, k int) [][]int {
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
