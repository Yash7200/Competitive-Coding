//formula: t1^2/r1^3 = t2^2/r2^3
#include <stdio.h>
int main(void)
{
	int t;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    float t1,t2,r1,r2;
	    scanf("%f %f %f %f",&t1,&t2,&r1,&r2);
	    t1=t1*t1;
	    t2=t2*t2;
	    r1=r1*r1*r1;
	    r2=r2*r2*r2;
	    if( (t1/r1) == (t2/r2) )
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