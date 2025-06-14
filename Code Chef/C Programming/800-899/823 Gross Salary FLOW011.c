#include <stdio.h>
int main(void)
{
	int t,bs;
	float hra,da;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&bs);
	    if(bs<1500)
	    {
	        hra=0.1*bs;
	        da=0.9*bs;
	        printf("%.2f\n",(bs+hra+da));
	    }
	    else
	    {
	        hra=500;
	        da=0.98*bs;
	        printf("%.2f\n",(bs+hra+da));
	    }
	}
	return 0;
}
