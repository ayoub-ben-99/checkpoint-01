package level4

func FindPrevPrime(n int) int {
	current := n
	for !IsPrime(current) {
		current--
	}
	return current
}
