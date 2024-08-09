//each player rolls dice 3 times
//score of player is sum of values of highest 2 rolls
//a1,a2,a3 --> dice rolled by Alice
//b1,b2,b3 --> dice rolled by Bob

//player with highest score wins
#include <stdio.h>
#include <math.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int a1,a2,a3,b1,b2,b3;
	    scanf("%d %d %d %d %d %d",&a1,&a2,&a3,&b1,&b2,&b3);
	    int max1=fmax(fmax(a1+a2,a2+a3),a1+a3);
	    int max2=fmax(fmax(b1+b2,b2+b3),b1+b3);
	    if(max1>max2)
	    {
	        printf("Alice\n");
	    }
	    else if(max1<max2)
	    {
	        printf("Bob\n");
	    }
	    else
	    {
	        printf("Tie\n");
	    }
	}
	return 0;
}