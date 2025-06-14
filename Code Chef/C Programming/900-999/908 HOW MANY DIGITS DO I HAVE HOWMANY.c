#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	if(t>=0&&t<10)
	{
	    printf("1\n");
	}
	else if(t>=10&&t<100)
	{
	    printf("2\n");
	}
	else if(t>=100&&t<1000)
	{
	    printf("3\n");
	}
	else
	{
	    printf("More than 3 digits\n");
	}
	return 0;
}
