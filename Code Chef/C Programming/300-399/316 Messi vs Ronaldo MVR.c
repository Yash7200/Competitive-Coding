// a --> goals of Messi

// b --> Assists of Messi

// x --> goals of Ronaldo

// y --> Assits of Ronaldo

// For each goal we player gets 2 points.

// Player with Higher points win

// If score is same then print Equal
#include <stdio.h>
int main(void)
{
	int a,b,x,y;
	scanf("%d %d %d %d",&a,&b,&x,&y);
	if( ((a*2)+b) > ((x*2)+y) )
	{
	    printf("Messi\n");
	}
	else if( ((a*2)+b) < ((x*2)+y) )
	{
	    printf("Ronaldo\n");
	}
	else
	{
	    printf("Equal\n");
	}
	return 0;
}