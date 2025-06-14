#include <stdio.h>
int main(void)
{
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if(x>100)
	    {
	        printf("%d\n",(x-10));
	    }
	    else
	    {
	        printf("%d\n",x);
	    }
	}
	return 0;
}