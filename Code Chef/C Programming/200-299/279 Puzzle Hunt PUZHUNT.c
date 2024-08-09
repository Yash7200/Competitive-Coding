//puzzle for team size --> more than 5 & less than 9
#include <stdio.h>
int main(void)
{
	int n;
	scanf("%d",&n);
	if(n>5 && n<9)
	{
	    printf("Yes\n");
	}
	else
	{
	    printf("No\n");
	}
	return 0;
}