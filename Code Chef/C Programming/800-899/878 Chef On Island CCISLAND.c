#include <stdio.h>
int main(void)
{
	int t,x,xr,y,yr,d;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int cnt=0;
	    scanf("%d%d%d%d%d",&x,&y,&xr,&yr,&d);
	    x=x/xr;
	    y=y/yr;
	    if((x>=d)&&(y>=d))
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}
