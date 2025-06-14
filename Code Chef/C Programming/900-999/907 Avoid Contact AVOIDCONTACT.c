#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    if(y==0)
	    {
	        printf("%d\n",x);
	    }
	    else if(x==y)
	    {
	        printf("%d\n",((2*x)-1));
	    }
	    else
	    {
	        printf("%d\n",((2*y)+(x-y)));
	    }
	}
	return 0;
}
