//'N' students from college want to go
//'M' tickets are available.

//determine howmany students cann't go
#include <stdio.h>
#include <math.h>
int main(void)
{
	int t,N,M;                  //t-->TestCase, N-->Students, M-->Tickets
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&N,&M);
	    if(M>=N)
	    {
	        printf("0\n");
	    }
	    else
	    {
	        printf("%d\n",N-M);
	    }
	}
	return 0;
}