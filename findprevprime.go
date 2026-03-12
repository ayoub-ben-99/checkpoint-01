package main

// تجد أقرب عدد أولي أصغر من أو يساوي n
func FindPrevPrime(n int) int {
	current := n
	for !IsPrime(current) {
		current--
	}
	return current
}
