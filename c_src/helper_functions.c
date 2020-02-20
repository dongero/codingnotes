#include <stdio.h>
#include "helper_functions.h"

int squared(int *basenumber) {
	int theresult = (*basenumber) * (*basenumber);
	*basenumber = 55;
	return theresult;
}
