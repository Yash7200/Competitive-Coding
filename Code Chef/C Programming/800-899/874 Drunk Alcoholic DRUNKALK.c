#include <stdio.h>
int main(void)
{
	int t,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&k);
	    int cnt=0;
	    for(int j=1;j<=k;j++)
	    {
	        if((j%2)!=0)
	        {
	            cnt=cnt+3;
	        }
	        else if((j%2)==0)
	        {
	            cnt=cnt-1;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}
