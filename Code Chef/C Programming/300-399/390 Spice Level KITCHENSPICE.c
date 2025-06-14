#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if(x<4)
	    {
	        printf("MILD\n");
	    }
	    else if((x>=4) && (x<7))
	    {
	        printf("MEDIUM\n");
	    }
	    else if(x>=7)
	    {
	        printf("HOT\n");
	    }
	}
	return 0;
}
