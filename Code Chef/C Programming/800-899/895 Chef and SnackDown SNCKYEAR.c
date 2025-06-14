#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    if(n==2010||n==2015||n==2016||n==2017||n==2019)
	    {
	        printf("HOSTED\n");
	    }
	    else
	    {
	        printf("NOT HOSTED\n");
	    }
	}
	return 0;
}
