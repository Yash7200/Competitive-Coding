#include <stdio.h>
int main(void)
{
	int t,h,ts;
	float c;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%f%d",&h,&c,&ts);
	    int cnt=0;
	    if(h>50)
	    {
	        cnt++;
	    }
	    if(c<0.7)
	    {
	        cnt=cnt+2;
	    }
	    if(ts>5600)
	    {
	        cnt=cnt+4;
	    }
	    if(cnt==7)
	    {
	        printf("10\n");
	    }
	    else if(cnt==3)
	    {
	        printf("9\n");
	    }
	    else if(cnt==6)
	    {
	        printf("8\n");
	    }
	    else if(cnt==5)
	    {
	        printf("7\n");
	    }
	    else if((cnt==1)||(cnt==2)||(cnt==4))
	    {
	        printf("6\n");
	    }
	    else if(cnt==0)
	    {
	        printf("5\n");
	    }
	}
	return 0;
}
