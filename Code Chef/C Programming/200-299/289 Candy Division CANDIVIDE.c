//3 frnds & N candies
//fight if they don't receive equal candies
#include <stdio.h>
int main(void)
{
	int t,candies;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&candies);
	    if( (candies%3)==0)
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}