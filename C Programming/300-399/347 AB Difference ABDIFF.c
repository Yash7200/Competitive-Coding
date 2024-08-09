//chef was supposed to print A+B
//he made mistake so his code is printing A*B

//find absolute difference between A+B and A*B
#include <stdio.h>
#include <stdlib.h>
int main(void)
{
	int a,b;
	scanf("%d %d",&a,&b);
	printf("%d\n",abs((a*b)-(a+b)));
	return 0;
}