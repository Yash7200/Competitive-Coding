#include <stdio.h>
int main(void)
{
	int t,x,y; //x-->fuel  y-->distance in km
	//can travel 5km with 1 ltr fuel
	scanf("%d",&t);//user enter no. of test cases
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&x,&y);
	    if((5*x)>=y)
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