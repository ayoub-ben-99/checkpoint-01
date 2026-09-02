package level5

func SaveAndMiss(arg string, num int) string {
	if num <= 0 {
		return arg
	}
	newStr := ""
	count := 0
	save := true

	for _, v := range arg {
		if save {
			newStr += string(v)
		}
		count++
		if count == num {
			save = !save
			count = 0
		}
	}
	return newStr
}
