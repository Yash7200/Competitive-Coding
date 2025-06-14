#include <stdio.h>
int main(void)
{
	int t,x,y,h;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&h,&x,&y);
	    int cnt=1;
	    h=h-y;
	    while(h>0)
	    {
	        h=h-x;
	        cnt++;
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}