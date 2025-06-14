#include <stdio.h>
int main(void)
{
	int t,q,p;
	float pay;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&q,&p);
	    pay=q*p;
	    if(q<=1000)
	    {
	        printf("%.6f\n",pay);
	    }
	    else
	    {
	       // pay=pay-((0.10)*pay);
	        printf("%.6f\n",(pay-pay*0.1));
	    }
	}
	return 0;
}
