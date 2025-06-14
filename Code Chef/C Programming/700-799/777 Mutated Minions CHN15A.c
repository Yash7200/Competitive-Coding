#include <stdio.h>
int main(void)
{
	int t,n,k;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d%d",&n,&k);
	    int arr[n],cnt=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&arr[j]);
	    }
	    for(int j=0;j<n;j++)
	    {
	        if(((arr[j]+k)%7)==0)
	        {
	            cnt++;
	        }
	    }
	    printf("%d\n",cnt);
	}
	return 0;
}