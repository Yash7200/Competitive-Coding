#include <stdio.h>
int main(void)
{
	int t,n;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d",&n);
	    int arr[n],max=0;
	    for(int j=0;j<n;j++)
	    {
	        scanf("%d",&arr[j]);
	        if(arr[j]>=max)
	        {
	            max=arr[j];
	        }
	    }
	    printf("%d\n",max);
	}
	return 0;
}