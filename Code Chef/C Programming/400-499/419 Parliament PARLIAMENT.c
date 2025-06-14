//n --> members present
//x --> members voted in favor
//n-x --> voted against

//if votes >=50% of n are in favor then bill is passed 


#include <stdio.h>
int main(void)
{
	int t;
	float n,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%f %f",&n,&x);
	    if((x) >= (n/2) )
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