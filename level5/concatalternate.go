package level5

func ConcatAlternate(slice1, slice2 []int) []int {
	newSlice := []int{}
	if len(slice1) >= len(slice2) {
		for i := 0; i <= len(slice1)-1; i++ {
			newSlice = append(newSlice, slice1[i])
			if len(slice2)-1 != i {
				newSlice = append(newSlice, slice2[i])
			}
		}
	} else {
		for i := 0; i <= len(slice2)-1; i++ {
			newSlice = append(newSlice, slice2[i])
			if len(slice1)-1 != i {
				newSlice = append(newSlice, slice1[i])
			}
		}
	}
	return newSlice
}
