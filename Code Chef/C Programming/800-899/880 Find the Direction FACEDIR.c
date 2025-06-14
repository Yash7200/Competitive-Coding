#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if((x%4)==0)
	    {
	        printf("North\n");
	    }
	    else if((x%4)==1)
	    {
	        printf("East\n");
	    }
	    else if((x%4)==2)
	    {
	        printf("South\n");
	    }
	    else if((x%4)==3)
	    {
	        printf("West\n");
	    }
	}
	return 0;
}
