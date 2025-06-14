#include <stdio.h>
int main(void)
{
    int t,x,y,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int cnt=2;
	    scanf("%d%d%d%d",&x,&y,&a,&b);
	    if((x==a)||(x==b))
	    {
	        cnt--;
	    }
	    if((y==a)||(y==b))
	    {
	        cnt--;
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
