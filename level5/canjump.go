package level5

func CanJump(arr []int) bool {
	position := 0
	for i := range arr {
		if i > position {
			return false
		}

		if i+arr[i] > position {
			position = i + arr[i]
		}
		if position >= len(arr)-1 {
			return true
		}
	}
	return true
}