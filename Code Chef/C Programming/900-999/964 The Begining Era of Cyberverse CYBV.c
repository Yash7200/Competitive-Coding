//k --> no. of weapons
//n --> no. of kid cyborgs

//difference between kid cyborg having max & min weapons should be <=1

//print min weapons kids have
// if kids are more than weapons then 0 will be minimum no. of weapons.
// otherwise it will be "k/n" because we will try to distrubte equally in 1st try.

#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int n,k;
	    scanf("%d %d",&n,&k);
	    if(n>k)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        printf("%d\n",(k/n));
	    }
	}
	return 0;
}