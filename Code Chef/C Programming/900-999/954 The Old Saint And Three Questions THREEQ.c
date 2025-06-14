#include <stdio.h>
int main(void)
{
	int t,a[3],b[3];
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    int acnt0=0,bcnt0=0;
	    for(int j=0;j<3;j++)
	    {
	        scanf("%d",&a[j]);
	        if(a[j]==0)
	        {
	            acnt0++;
	        }
	    }
	    for(int j=0;j<3;j++)
	    {
	        scanf("%d",&b[j]);
	        if(b[j]==0)
	        {
	            bcnt0++;
	        }
	    }
	    if(acnt0==bcnt0)
	    {
	        printf("Pass\n");
	    }
	    else
	    {
	        printf("Fail\n");
	    }
	}
	return 0;
}
