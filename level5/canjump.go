package level5

func CanJump(arr []int) bool {
	maxReach := 0
	for i := range arr {
		if i > maxReach {
			return false
		}
		maxReach = max(maxReach, i+arr[i])
		if maxReach >= len(arr)-1 {
			return true
		}
	}
	return true
}
