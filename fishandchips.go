package main

func fishAndChips(num int) string {
	switch {
	case num%3 == 0 && num%5 == 0:
		return "fish chips"
	case num%3 == 0:
		return "fish"
	case num%5 == 0:
		return "chips"
	default:
		return "!!oops:("
	}
}
