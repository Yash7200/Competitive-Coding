#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    if(x==y)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        if(x<y)
	        {
	            printf("%d\n",(y-x));
	        }
	        else
	        {
	            int cnt=0;
	            while(y<x)
	            {
	                y=y+2;
	                cnt++;
	            }
	            if(y==x)
	            {
	                printf("%d\n",cnt);
	            }
	            else
	            {
	                printf("%d\n",(cnt+(y-x)));
	            }
	        }
	    }
	}
	return 0;
}
