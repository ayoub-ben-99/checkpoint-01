package level3

func DigitLen(num int) int {
	lenDgt := 0
	if num < 0 {
		num = num * -1
	}
	for num > 0 {
		num /= 10
		lenDgt++
	}
	return lenDgt
}
