#include <stdio.h>
int main(void)
{
	// your code goes here
	int t,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&x);
	    if((x>=67)&&(x<=45000))
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