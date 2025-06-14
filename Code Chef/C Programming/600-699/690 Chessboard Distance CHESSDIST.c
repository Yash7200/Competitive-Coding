#include <stdio.h>
int main(void)
{
	int t,x1,x2,y1,y2;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d%d%d",&x1,&y1,&x2,&y2);
	    int d1=x1-x2, d2=y1-y2;
	    if(d1<0)
	    {
	        d1=d1*(-1);
	    }
	    if(d2<0)
	    {
	        d2=d2*(-1);
	    }
	    if(d1>d2)
	    {
	        printf("%d\n",d1);
	    }
	    else
	    {
	        printf("%d\n",d2);
	    }
	}
	return 0;
}