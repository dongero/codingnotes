#include <stdio.h>
#include "helper_functions.h"

int main(void) {
	printf("Hello world!\n");

	int base = 29;
	printf("Base is originally %d\n", base);
	printf("Squared() is called with %x\n", &base);
	int square = squared(&base);

	printf("Squaring it is %d\n", square);
	printf("base is now %d\n", base);
	return 0;
}
