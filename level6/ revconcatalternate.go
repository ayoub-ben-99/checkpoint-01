package level6

func RevConcatAlternate(slice1, slice2 []int) []int {
	result := []int{}

	i := len(slice1) - 1
	j := len(slice2) - 1

	for len(slice2) > len(slice1) {
		result = append(result, slice2[j])
		j--
		slice2 = slice2[:len(slice2)-1]
	}

	for len(slice1) > len(slice2) {
		result = append(result, slice1[i])
		i--
		slice1 = slice1[:len(slice1)-1]
	}

	for i >= 0 && j >= 0 {
		result = append(result, slice1[i])
		result = append(result, slice2[j])
		i--
		j--
	}

	return result
}
