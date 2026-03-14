package level3

func HashCode(str string) int {
	result := 0
	if len(str) == 0 {
		return 0
	}
	for _, v := range str {
		result += int(v)
	}
	return result
}
