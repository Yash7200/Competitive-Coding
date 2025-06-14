#include <stdio.h>
int main(void)
{
	int t,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&x,&y);
	    int cnt=0;
	    while(x>0)
	    {
	        if((x-y)>=0)
	        {
	            x=x-y;
	            cnt++;
	        }
	        else
	        {
	            x=x-1;
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}