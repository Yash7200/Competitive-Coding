#include <stdio.h>
int main(void)
{
	int t,x,y,d;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&x,&y,&d);
	    if(x>=y)
	    {
	        if((x-y)<=d)
	        {
	            printf("YES\n");
	        }
	        else
	        {
	            printf("NO\n");
	        }
	    }
	    else
	    {
	        if((y-x)<=d)
	        {
	            printf("YES\n");
	        }
	        else
	        {
	            printf("NO\n");
	        }
	    }
	}
	return 0;
}
