#include <stdio.h>
int main(void)
{
	int t;
	float a,b,x,y;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%f%f%f%f",&a,&x,&b,&y);
	    float sp1=a/x, sp2=b/y;
	    if(sp1==sp2)
	    {
	        printf("Equal\n");
	    }
	    else if(sp1<sp2)
	    {
	        printf("Bob\n");
	    }
	    else if(sp1>sp2)
	    {
	        printf("Alice\n");
	    }
	}
	return 0;
}
