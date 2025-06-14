#include <stdio.h>
int main(void)
{
	char x,y;
	scanf("%c %c",&x,&y);
	if((x=='R')||(y=='R'))
	{
	    printf("R\n");
	}
	else if((x=='B')||(y=='B'))
	{
	    printf("B\n");
	}
	else
	{
	    printf("G\n");
	}
	return 0;
}
