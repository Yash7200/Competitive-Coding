#include <stdio.h>
int main(void)
{
	int t,n,x;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&x);
	    int a[n],b[n],sum=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&b[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        if(a[j]>=x)
	        {
	            sum=sum+b[j];
	        }
	    }
	    printf("%d\n",sum);
	}
	return 0;
}
