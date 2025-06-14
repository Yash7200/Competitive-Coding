#include <stdio.h>
int main(void)
{
	int t,r;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&r);
	    if(2000<=r)
	    {
	        printf("1\n");
	    }
	    else if((1600<=r)&&(r<2000))
	    {
	        printf("2\n");
	    }
	    else if(r<1600)
	    {
	        printf("3\n");
	    }
	}
	return 0;
}
