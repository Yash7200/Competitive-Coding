//N --> online food cost
//M --> restaurant price

//discount of 10%

#include <stdio.h>
int main(void)
{
	int t;
	float m,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%f %f",&n,&m);
	    n=n-(0.1*n);
	    if(n<m)
	    {
	        printf("ONLINE\n");
	    }
	    else if(n>m)
	    {
	        printf("DINING\n");
	    }
	    else
	    {
	        printf("EITHER\n");
	    }
	}
	return 0;
}