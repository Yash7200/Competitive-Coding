#include <stdio.h>
int main(void)
{
	int t,r1,r2,r3;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d",&r1,&r2,&r3);
	    if((r1>(r2+r3))||(r2>(r1+r3))||(r3>(r1+r2)))
	    {
	        printf("Yes\n");
	    }
	    else
	    {
	        printf("No\n");
	    }
	}
	return 0;
}