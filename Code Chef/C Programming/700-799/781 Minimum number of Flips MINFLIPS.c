#include <stdio.h>
int main(void)
{
	int t,n,cnt;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int a[n],sum=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&a[j]);
	        sum=sum+a[j];
	    }
	    if((n%2)!=0)
	    {
	        printf("-1\n");
	    }
	    else if(sum>0)
	    {
	        cnt=0;
	        while(sum>0)
	        {
	            for(int j=0;j<n;j++)
	            {
	                if(a[j]==1)
	                {
	                    a[j]=-1;
	                    sum=sum-2;
	                    cnt++;
	                    if(sum==0)
	                    {
	                        break;
	                    }
	                }
	            }
	        }
	        printf("%d\n",cnt);
	    }
	    else
	    {
	        cnt=0;
	        while(sum<0)
	        {
	            for(int j=0;j<n;j++)
	            {
	                if(a[j]==-1)
	                {
	                    a[j]=1;
	                    sum=sum+2;
	                    cnt++;
	                    if(sum==0)
	                    {
	                        break;
	                    }
	                }
	            }
	        }
	        printf("%d\n",cnt);
	    }
	}
	return 0;
}