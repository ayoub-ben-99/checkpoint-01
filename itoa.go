package main

func Itoa(num int) string {
	if num == 0 {
		return "0"
	}

	isNegative := num < 0
	if isNegative {
		num = -num
	}

	result := ""
	for num > 0 {
		result = string(rune(num%10+'0')) + result
		num /= 10
	}

	if isNegative {
		return "-" + result
	}
	return result
}
