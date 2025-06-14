#include <stdio.h>
int main(void)
{
	int t,a,b;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&a,&b);
	    if(a==b)
	    {
	        printf("Yes\n");
	    }
	    else
	    {
	        int diff=a-b;
	        if(diff<0)
	        {
	            diff=-1*(diff);
	        }
	        if(diff%2==0)
	        {
	            printf("Yes\n");
	        }
	        else
	        {
	            printf("No\n");
	        }
	    }
	}
	return 0;
}
