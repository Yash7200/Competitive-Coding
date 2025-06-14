#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if(x<=70)
	    {
	        printf("0\n");
	    }
	    else if((x>70) && (x<=100))
	    {
	        printf("500\n");
	    }
	    else
	    {
	        printf("2000\n");
	    }
	}
	return 0;
}