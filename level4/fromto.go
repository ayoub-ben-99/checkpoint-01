package level4

import "strconv"

func FromTo(from int, to int) string {
	if from < 0 || from > 99 || to < 0 || to > 99 {
		return "Invalid\n"
	}

	result := ""

	if from <= to {
		for i := from; i <= to; i++ {
			if i > from {
				result += ", "
			}
			if i < 10 {
				result += "0"
			}
			result += strconv.Itoa(i)
		}
	} else {
		for i := from; i >= to; i-- {
			if i < from {
				result += ", "
			}
			if i < 10 {
				result += "0"
			}
			result += strconv.Itoa(i)
		}
	}

	return result + "\n"
}