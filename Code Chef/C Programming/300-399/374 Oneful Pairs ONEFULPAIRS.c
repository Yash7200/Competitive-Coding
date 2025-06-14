#include <stdio.h>
int main(void)
{
	int a,b;
	scanf("%d %d",&a,&b);
	if(( a + b + (a*b) )==111)
	{
	    printf("YES\n");
	}
	else
	{
	    printf("NO\n");
	}
	return 0;
}