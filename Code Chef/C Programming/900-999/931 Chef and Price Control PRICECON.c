#include <stdio.h>
int main(void) 
{
	int t,n,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d",&n,&k);
	    int sum=0,a[n],sum1=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        sum=sum+a[j];
	        if(a[j]>k)
	        {
	            sum1=sum1+k;
	        }
	        else
	        {
	            sum1=sum1+a[j];
	        }
	    }
	    printf("%d\n",(sum-sum1));
	}
	return 0;
}
